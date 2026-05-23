import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data', 'destinations');

// Πραγματικές μέσες ιστορικές θερμοκρασίες για τους 3 Anchor προορισμούς
const CLIMATE_DATABASE = {
  santorini: {
    january: 12, february: 13, march: 15, april: 18, may: 23, june: 26,
    july: 29, august: 29, september: 26, october: 22, november: 17, december: 14
  },
  athens: {
    january: 13, february: 14, march: 16, april: 20, may: 25, june: 30,
    july: 33, august: 33, september: 28, october: 23, november: 18, december: 14
  },
  naxos: {
    january: 14, february: 14, march: 16, april: 18, may: 22, june: 26,
    july: 28, august: 28, september: 26, october: 22, november: 18, december: 15
  }
};

async function run() {
  try {
    const files = await fs.readdir(DATA_DIR);
    const jsonFiles = files.filter(f => f.endsWith('.json'));
    
    for (const file of jsonFiles) {
      const filePath = path.join(DATA_DIR, file);
      const content = await fs.readFile(filePath, 'utf8');
      const destination = JSON.parse(content);
      
      const climate = CLIMATE_DATABASE[destination.id];
      if (!climate) {
        console.warn(`Warning: No climate data defined in Database for ${destination.slug}. Skipping.`);
        continue;
      }
      
      console.log(`Enriching climate data for ${destination.slug}...`);
      
      if (!destination.seasonality) destination.seasonality = {};
      
      for (const [month, temp] of Object.entries(climate)) {
        if (!destination.seasonality[month]) {
          destination.seasonality[month] = { price_multiplier: 1.0 };
        }
        destination.seasonality[month].temp = temp;
      }
      
      // Αποθήκευση πίσω στο δίσκο
      await fs.writeFile(filePath, JSON.stringify(destination, null, 2), 'utf8');
      console.log(`Success: Updated temperatures for ${destination.slug}!`);
    }
  } catch (err) {
    console.error('Fatal error running enrichment script:', err.message);
  }
}

run();
