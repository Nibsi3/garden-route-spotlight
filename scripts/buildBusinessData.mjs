import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || '';

// Load and merge all JSON files
function loadAllBusinessData() {
  const files = ['newBusinesses.json', 'wilderness.json', 'remainingTowns.json', 'plett.json', 'mossel.json', 'oudtshoorn.json'];
  let allData = {};
  
  for (const file of files) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      allData = { ...allData, ...content };
    }
  }
  return allData;
}

// Extract search query from Google Maps URL
function extractQueryFromUrl(url) {
  const match = url.match(/query=([^&]+)/);
  if (match) {
    return decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
  return null;
}

// Fetch place details from Google Places API
async function fetchPlaceDetails(query, town) {
  const searchQuery = encodeURIComponent(query);
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${GOOGLE_PLACES_API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'OK' && data.results && data.results.length > 0) {
      const place = data.results[0];
      return {
        placeId: place.place_id,
        coords: [place.geometry.location.lng, place.geometry.location.lat],
        address: place.formatted_address || '',
        rating: place.rating || null,
        photos: place.photos ? place.photos.slice(0, 3).map(p => p.photo_reference) : []
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching place for ${query}:`, error.message);
    return null;
  }
}

// Generate TypeScript file content
function generateTypeScript(businessData) {
  let content = `export type BusinessPoint = {
  category: string;
  name: string;
  coords: [number, number];
  googleMapsUrl: string;
  placeId?: string;
  address?: string;
  rating?: number;
  photos?: string[];
  phone?: string;
  email?: string;
  website?: string;
  meta?: string;
};

// Business data for all Garden Route towns - Google Business integrated
export const businessPoints: Record<string, BusinessPoint[]> = {
`;

  const towns = ['george', 'wilderness', 'sedgefield', 'knysna', 'plett', 'mossel', 'oudtshoorn'];
  
  for (const town of towns) {
    if (!businessData[town]) continue;
    
    content += `  ${town}: [\n`;
    
    const townData = businessData[town];
    for (const [category, businesses] of Object.entries(townData)) {
      for (const biz of businesses) {
        const coords = biz.coords || [0, 0];
        const placeId = biz.placeId ? `"${biz.placeId}"` : 'undefined';
        const address = biz.address ? `"${biz.address.replace(/"/g, '\\"')}"` : 'undefined';
        const rating = biz.rating || 'undefined';
        const photos = biz.photos && biz.photos.length > 0 
          ? `[${biz.photos.map(p => `"${p}"`).join(', ')}]` 
          : 'undefined';
        
        content += `    { category: "${category}", name: "${biz.name.replace(/"/g, '\\"')}", coords: [${coords[0]}, ${coords[1]}], googleMapsUrl: "${biz.url}", placeId: ${placeId}, address: ${address}, rating: ${rating}, photos: ${photos} },\n`;
      }
    }
    
    content += `  ],\n`;
  }
  
  content += `};

// Helper to get Google Places photo URL
export function getPhotoUrl(photoReference: string, maxWidth: number = 400): string {
  return \`https://maps.googleapis.com/maps/api/place/photo?maxwidth=\${maxWidth}&photo_reference=\${photoReference}&key=${GOOGLE_PLACES_API_KEY}\`;
}
`;

  return content;
}

async function main() {
  console.log('Loading business data from JSON files...');
  const allData = loadAllBusinessData();
  
  console.log(`Found ${Object.keys(allData).length} towns`);
  
  // Count total businesses
  let totalBusinesses = 0;
  for (const town of Object.keys(allData)) {
    for (const category of Object.keys(allData[town])) {
      totalBusinesses += allData[town][category].length;
    }
  }
  console.log(`Total businesses: ${totalBusinesses}`);
  
  // Fetch Google Places data for each business
  console.log('\nFetching Google Places data...');
  let processed = 0;
  let found = 0;
  
  for (const town of Object.keys(allData)) {
    console.log(`\n=== Processing ${town.toUpperCase()} ===`);
    
    for (const category of Object.keys(allData[town])) {
      for (let i = 0; i < allData[town][category].length; i++) {
        const biz = allData[town][category][i];
        const query = extractQueryFromUrl(biz.url);
        
        if (query) {
          console.log(`  [${++processed}/${totalBusinesses}] ${biz.name}...`);
          const placeData = await fetchPlaceDetails(query, town);
          
          if (placeData) {
            allData[town][category][i] = {
              ...biz,
              ...placeData
            };
            found++;
            console.log(`    ✓ Found: [${placeData.coords[0].toFixed(6)}, ${placeData.coords[1].toFixed(6)}]`);
          } else {
            // Set default coords for the town center
            const townCenters = {
              george: [22.462, -33.963],
              wilderness: [22.580, -33.994],
              sedgefield: [22.800, -34.025],
              knysna: [23.048, -34.035],
              plett: [23.371, -34.052],
              mossel: [22.130, -34.182],
              oudtshoorn: [22.202, -33.592]
            };
            allData[town][category][i].coords = townCenters[town] || [22.462, -33.963];
            console.log(`    ✗ Not found, using town center`);
          }
          
          // Rate limiting - 100ms delay between requests
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    }
  }
  
  console.log(`\n=== Complete ===`);
  console.log(`Found: ${found}/${totalBusinesses}`);
  
  // Generate TypeScript file
  console.log('\nGenerating businessData.ts...');
  const tsContent = generateTypeScript(allData);
  
  const outputPath = path.join(__dirname, '../lib/businessData.ts');
  fs.writeFileSync(outputPath, tsContent);
  
  console.log(`Saved to ${outputPath}`);
  console.log('Done!');
}

main().catch(console.error);
