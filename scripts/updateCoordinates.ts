import * as fs from 'fs';
import * as path from 'path';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || '';

interface Business {
  name: string;
  coords: [number, number];
  category: string;
  subcategory: string;
  googleMapsUrl?: string;
  aiContent?: string;
}

interface PlaceResult {
  place_id: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

// Town location mappings for search context
const townLocations: Record<string, string> = {
  george: 'George, South Africa',
  wilderness: 'Wilderness, South Africa',
  sedgefield: 'Sedgefield, South Africa',
  knysna: 'Knysna, South Africa',
  plett: 'Plettenberg Bay, South Africa',
  mossel: 'Mossel Bay, South Africa',
  oudtshoorn: 'Oudtshoorn, South Africa',
};

// Rate limiting
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function findPlace(businessName: string, location: string): Promise<{ lat: number; lng: number } | null> {
  const searchQuery = `${businessName} ${location}`;
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(searchQuery)}&inputtype=textquery&fields=place_id,geometry&key=${GOOGLE_PLACES_API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'OK' && data.candidates && data.candidates.length > 0) {
      const place = data.candidates[0] as PlaceResult;
      if (place.geometry?.location) {
        return {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
        };
      }
    }
    return null;
  } catch (error) {
    console.error(`Error fetching ${businessName}:`, error);
    return null;
  }
}

async function updateCoordinates() {
  const businessDataPath = path.join(__dirname, '../lib/businessData.ts');
  let content = fs.readFileSync(businessDataPath, 'utf-8');
  
  let updatedCount = 0;
  let failedCount = 0;
  let skippedCount = 0;
  const failedBusinesses: { name: string; town: string }[] = [];
  
  // Process each town
  for (const [townKey, townLocation] of Object.entries(townLocations)) {
    console.log(`\n📍 Processing ${townKey.toUpperCase()}...`);
    
    // Find the town's business array in the file using regex
    const townRegex = new RegExp(`${townKey}:\\s*\\[([\\s\\S]*?)\\](?=,\\s*(?:george|wilderness|sedgefield|knysna|plett|mossel|oudtshoorn|\\};))`, 'i');
    const townMatch = content.match(townRegex);
    
    if (!townMatch) {
      console.log(`  ⚠️ Could not find ${townKey} section`);
      continue;
    }
    
    // Extract business entries with their coordinates
    const businessRegex = /name:\s*"([^"]+)"[^}]*coords:\s*\[([0-9.-]+),\s*([0-9.-]+)\]/g;
    let match;
    const businesses: { name: string; oldLng: string; oldLat: string }[] = [];
    
    while ((match = businessRegex.exec(townMatch[0])) !== null) {
      businesses.push({
        name: match[1],
        oldLng: match[2],
        oldLat: match[3],
      });
    }
    
    console.log(`  Found ${businesses.length} businesses`);
    
    // Process each business
    for (let i = 0; i < businesses.length; i++) {
      const biz = businesses[i];
      
      // Rate limit: 10 requests per second max
      if (i > 0 && i % 10 === 0) {
        console.log(`  ⏳ Rate limiting... (${i}/${businesses.length})`);
        await delay(1100);
      }
      
      const coords = await findPlace(biz.name, townLocation);
      
      if (coords) {
        // Update coordinates in content - format: [lng, lat]
        const oldCoordsPattern = new RegExp(
          `(name:\\s*"${biz.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^}]*coords:\\s*\\[)[0-9.-]+,\\s*[0-9.-]+(\\])`,
          'g'
        );
        
        const newCoords = `${coords.lng.toFixed(4)}, ${coords.lat.toFixed(4)}`;
        const newContent = content.replace(oldCoordsPattern, `$1${newCoords}$2`);
        
        if (newContent !== content) {
          content = newContent;
          updatedCount++;
          console.log(`  ✅ ${biz.name}: [${newCoords}]`);
        } else {
          skippedCount++;
        }
      } else {
        failedCount++;
        failedBusinesses.push({ name: biz.name, town: townKey });
        console.log(`  ❌ ${biz.name}: Not found on Google Places`);
      }
      
      // Small delay between requests
      await delay(100);
    }
  }
  
  // Write updated content back to file
  fs.writeFileSync(businessDataPath, content, 'utf-8');
  
  // Write failed businesses to a separate file
  if (failedBusinesses.length > 0) {
    const failedPath = path.join(__dirname, '../failed-businesses.json');
    fs.writeFileSync(failedPath, JSON.stringify(failedBusinesses, null, 2), 'utf-8');
    console.log(`\n📄 Failed businesses saved to: failed-businesses.json`);
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(`✅ Updated: ${updatedCount} businesses`);
  console.log(`❌ Failed: ${failedCount} businesses`);
  console.log(`⏭️ Skipped: ${skippedCount} businesses`);
  console.log('='.repeat(50));
  
  // Print failed businesses grouped by town
  if (failedBusinesses.length > 0) {
    console.log('\n❌ BUSINESSES NOT FOUND ON GOOGLE PLACES:');
    console.log('='.repeat(50));
    const byTown = failedBusinesses.reduce((acc, b) => {
      if (!acc[b.town]) acc[b.town] = [];
      acc[b.town].push(b.name);
      return acc;
    }, {} as Record<string, string[]>);
    
    for (const [town, names] of Object.entries(byTown)) {
      console.log(`\n${town.toUpperCase()}:`);
      names.forEach(name => console.log(`  - ${name}`));
    }
  }
}

// Run the script
updateCoordinates().catch(console.error);
