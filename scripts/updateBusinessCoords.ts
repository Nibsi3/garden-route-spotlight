import * as fs from 'fs';
import * as path from 'path';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || '';

interface BusinessPoint {
  category: string;
  name: string;
  phone: string;
  meta: string;
  coords: [number, number];
  email?: string;
  website?: string;
  aiContent?: string;
  instagram?: string;
  facebook?: string;
}

// Town center coordinates for search bias
const townCenters: Record<string, { lat: number; lng: number }> = {
  george: { lat: -33.963, lng: 22.462 },
  wilderness: { lat: -33.994, lng: 22.580 },
  sedgefield: { lat: -34.025, lng: 22.800 },
  knysna: { lat: -34.035, lng: 23.048 },
  plett: { lat: -34.052, lng: 23.371 },
  mossel: { lat: -34.182, lng: 22.130 },
  oudtshoorn: { lat: -33.592, lng: 22.202 },
};

async function searchPlace(businessName: string, town: string): Promise<{ lat: number; lng: number } | null> {
  const townCenter = townCenters[town];
  if (!townCenter) {
    console.log(`Unknown town: ${town}`);
    return null;
  }

  // Search query: business name + town name + South Africa
  const townNames: Record<string, string> = {
    george: 'George',
    wilderness: 'Wilderness',
    sedgefield: 'Sedgefield',
    knysna: 'Knysna',
    plett: 'Plettenberg Bay',
    mossel: 'Mossel Bay',
    oudtshoorn: 'Oudtshoorn',
  };

  const query = encodeURIComponent(`${businessName} ${townNames[town]} South Africa`);
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=${townCenter.lat},${townCenter.lng}&radius=15000&key=${GOOGLE_PLACES_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.results && data.results.length > 0) {
      const place = data.results[0];
      return {
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
      };
    } else {
      console.log(`No results for: ${businessName} in ${town} (status: ${data.status})`);
      return null;
    }
  } catch (error) {
    console.error(`Error searching for ${businessName}:`, error);
    return null;
  }
}

async function updateBusinessCoords() {
  // Read the current business data file
  const filePath = path.join(__dirname, '../lib/businessData.ts');
  let fileContent = fs.readFileSync(filePath, 'utf-8');

  // Parse businesses from file (simplified - just update coords inline)
  const businessDataPath = path.join(__dirname, '../lib/businessData.ts');
  
  // Import the business data
  const { businessPoints } = require('../lib/businessData');

  let updatedCount = 0;
  let failedCount = 0;

  for (const [town, businesses] of Object.entries(businessPoints)) {
    console.log(`\n=== Processing ${town} (${(businesses as BusinessPoint[]).length} businesses) ===`);
    
    for (const business of businesses as BusinessPoint[]) {
      console.log(`Looking up: ${business.name}...`);
      
      const coords = await searchPlace(business.name, town);
      
      if (coords) {
        // Update the coords in the file content
        const oldCoordsRegex = new RegExp(
          `(name: "${business.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^}]*coords: \\[)[\\d.-]+, [\\d.-]+(\\])`,
          'g'
        );
        
        const newCoords = `${coords.lng.toFixed(6)}, ${coords.lat.toFixed(6)}`;
        fileContent = fileContent.replace(oldCoordsRegex, `$1${newCoords}$2`);
        
        console.log(`  ✓ Found: [${newCoords}]`);
        updatedCount++;
      } else {
        console.log(`  ✗ Not found, keeping original coords`);
        failedCount++;
      }

      // Rate limiting - Google allows 50 requests per second, but let's be safe
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  // Write the updated file
  fs.writeFileSync(filePath, fileContent);
  
  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updatedCount}`);
  console.log(`Failed: ${failedCount}`);
}

updateBusinessCoords().catch(console.error);
