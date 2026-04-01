import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || '';

const townCenters = {
  george: { lat: -33.963, lng: 22.462 },
  wilderness: { lat: -33.994, lng: 22.580 },
  sedgefield: { lat: -34.025, lng: 22.800 },
  knysna: { lat: -34.035, lng: 23.048 },
  plett: { lat: -34.052, lng: 23.371 },
  mossel: { lat: -34.182, lng: 22.130 },
  oudtshoorn: { lat: -33.592, lng: 22.202 },
};

const townNames = {
  george: 'George',
  wilderness: 'Wilderness',
  sedgefield: 'Sedgefield',
  knysna: 'Knysna',
  plett: 'Plettenberg Bay',
  mossel: 'Mossel Bay',
  oudtshoorn: 'Oudtshoorn',
};

async function searchPlace(businessName, town) {
  const townCenter = townCenters[town];
  if (!townCenter) {
    console.log(`Unknown town: ${town}`);
    return null;
  }

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
      return null;
    }
  } catch (error) {
    console.error(`Error searching for ${businessName}:`, error);
    return null;
  }
}

async function updateBusinessCoords() {
  const filePath = path.join(__dirname, '../lib/businessData.ts');
  let fileContent = fs.readFileSync(filePath, 'utf-8');

  // Extract business entries with regex
  const businessRegex = /\{ category: "([^"]+)", name: "([^"]+)"[^}]*coords: \[([^\]]+)\]/g;
  
  // Find current town context
  const townSections = fileContent.match(/(\w+): \[/g) || [];
  
  let updatedCount = 0;
  let failedCount = 0;
  let currentTown = '';

  // Process each town section
  const towns = ['george', 'wilderness', 'sedgefield', 'knysna', 'plett', 'mossel', 'oudtshoorn'];
  
  for (const town of towns) {
    console.log(`\n=== Processing ${town} ===`);
    
    // Find the section for this town
    const townStartRegex = new RegExp(`${town}: \\[`);
    const townStart = fileContent.search(townStartRegex);
    if (townStart === -1) continue;
    
    // Find businesses in this town section
    const nextTownIndex = towns.indexOf(town) + 1;
    const nextTown = towns[nextTownIndex];
    let townEnd = fileContent.length;
    if (nextTown) {
      const nextTownStart = fileContent.indexOf(`${nextTown}: [`);
      if (nextTownStart !== -1) townEnd = nextTownStart;
    }
    
    const townSection = fileContent.substring(townStart, townEnd);
    const businessMatches = [...townSection.matchAll(/name: "([^"]+)"/g)];
    
    for (const match of businessMatches) {
      const businessName = match[1];
      console.log(`  Looking up: ${businessName}...`);
      
      const coords = await searchPlace(businessName, town);
      
      if (coords) {
        // Update coords in file
        const escapedName = businessName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const coordsRegex = new RegExp(
          `(name: "${escapedName}"[^}]*coords: \\[)[\\d.-]+, [\\d.-]+(\\])`,
          'g'
        );
        
        const newCoords = `${coords.lng.toFixed(6)}, ${coords.lat.toFixed(6)}`;
        const oldContent = fileContent;
        fileContent = fileContent.replace(coordsRegex, `$1${newCoords}$2`);
        
        if (fileContent !== oldContent) {
          console.log(`    ✓ Updated: [${newCoords}]`);
          updatedCount++;
        } else {
          console.log(`    - No change needed`);
        }
      } else {
        console.log(`    ✗ Not found`);
        failedCount++;
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  fs.writeFileSync(filePath, fileContent);
  
  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updatedCount}`);
  console.log(`Not found: ${failedCount}`);
}

updateBusinessCoords().catch(console.error);
