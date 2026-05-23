import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data', 'destinations');

// Η "Βάση Γνώσης" για τους 24 ελληνικούς προορισμούς
const DESTINATIONS_DB = [
  {
    slug: "santorini", name: "Santorini", type: "Island",
    lat: 36.3932, lng: 25.4615, price_group: "ultra-luxury",
    scores: { family: 6, couples: 10, nightlife: 8, food: 9, beaches: 7, walking: 4 },
    pros: ["Iconic sunsets", "Luxury hotels", "World-class wine"],
    cons: ["Extremely crowded", "High prices"],
    tips: ["Hike Fira to Oia early.", "Sunset from Pyrgos has fewer crowds."]
  },
  {
    slug: "mykonos", name: "Mykonos", type: "Island",
    lat: 37.4453, lng: 25.3287, price_group: "ultra-luxury",
    scores: { family: 5, couples: 8, nightlife: 10, food: 9, beaches: 10, walking: 7 },
    pros: ["World-class beach clubs", "Beautiful Chora", "Amazing sandy beaches"],
    cons: ["Overpriced", "Intense party scene not for everyone"],
    tips: ["Visit Delos island early morning.", "Agios Sostis is the best quiet beach."]
  },
  {
    slug: "athens", name: "Athens", type: "City",
    lat: 37.9838, lng: 23.7275, price_group: "mid",
    scores: { family: 8, couples: 8, nightlife: 10, food: 10, beaches: 6, walking: 9 },
    pros: ["Unmatched history", "Vibrant nightlife", "Michelin dining & street food"],
    cons: ["Very hot in July/August", "Urban noise"],
    tips: ["Explore Koukaki neighborhood for local food.", "Watch sunset from Lycabettus."]
  },
  {
    slug: "naxos", name: "Naxos", type: "Island",
    lat: 37.1052, lng: 25.3784, price_group: "mid",
    scores: { family: 10, couples: 7, nightlife: 6, food: 10, beaches: 10, walking: 6 },
    pros: ["Best family beaches", "Incredible local potatoes & cheese", "Great value"],
    cons: ["Port traffic", "Needs car for mountain villages"],
    tips: ["Visit Apeiranthos marble village.", "Sunset at Portara is a must."]
  },
  {
    slug: "paros", name: "Paros", type: "Island",
    lat: 37.0855, lng: 25.1489, price_group: "mid-high",
    scores: { family: 8, couples: 9, nightlife: 9, food: 8, beaches: 9, walking: 8 },
    pros: ["Charming Naoussa harbor", "Great windsurfing beaches", "Balanced Cycladic vibe"],
    cons: ["Gets very busy in August", "Prices rising quickly"],
    tips: ["Take the 10-minute ferry to Antiparos.", "Visit Lefkes mountain village."]
  },
  {
    slug: "milos", name: "Milos", type: "Island",
    lat: 36.7275, lng: 24.4447, price_group: "mid-high",
    scores: { family: 7, couples: 10, nightlife: 6, food: 8, beaches: 10, walking: 5 },
    pros: ["Unique volcanic landscapes", "Sarakiniko moonscape beach", "Perfect for couples"],
    cons: ["Limited public transport", "Winds can block boat tours"],
    tips: ["Book a boat tour to Kleftiko caves.", "Watch sunset from Plaka castle."]
  },
  {
    slug: "crete", name: "Crete", type: "Island",
    lat: 35.2401, lng: 24.8093, price_group: "mid",
    scores: { family: 9, couples: 8, nightlife: 8, food: 10, beaches: 10, walking: 7 },
    pros: ["Endless variety of beaches", "World-famous Cretan diet", "Rich Minoan history"],
    cons: ["Huge distances require driving", "Too big to see in one trip"],
    tips: ["Hike the Samaria Gorge.", "Visit Balos Lagoon early morning."]
  },
  {
    slug: "rhodes", name: "Rhodes", type: "Island",
    lat: 36.4341, lng: 28.2176, price_group: "mid",
    scores: { family: 9, couples: 8, nightlife: 8, food: 8, beaches: 8, walking: 7 },
    pros: ["Medieval Old Town", "Lindos Acropolis view", "Great resort infrastructure"],
    cons: ["Highly commercialized in parts", "Very hot in summer"],
    tips: ["Stroll the Old Town moat path.", "Swim at Anthony Quinn Bay."]
  },
  {
    slug: "corfu", name: "Corfu", type: "Island",
    lat: 39.6243, lng: 19.9217, price_group: "mid-high",
    scores: { family: 9, couples: 9, nightlife: 8, food: 8, beaches: 8, walking: 8 },
    pros: ["Venetian Old Town architecture", "Lush green landscapes", "Excellent family resorts"],
    cons: ["Humid summers", "Roads are narrow and winding"],
    tips: ["Explore the Old Fortress.", "Visit Paleokastritsa for cold crystal waters."]
  },
  {
    slug: "thessaloniki", name: "Thessaloniki", type: "City",
    lat: 40.6401, lng: 22.9444, price_group: "mid-budget",
    scores: { family: 7, couples: 8, nightlife: 10, food: 10, beaches: 4, walking: 9 },
    pros: ["Gourmet food capital", "Vibrant student nightlife", "Rich Byzantine history"],
    cons: ["No beaches in the city", "Traffic jams"],
    tips: ["Eat Bougatsa at Yannis.", "Sunset walk at the Waterfront."]
  },
  {
    slug: "lesvos", name: "Lesvos", type: "Island",
    lat: 39.2645, lng: 26.2777, price_group: "mid-budget",
    scores: { family: 8, couples: 7, nightlife: 5, food: 10, beaches: 8, walking: 6 },
    pros: ["Unfiltered local authenticity", "Amazing seafood & Ouzo", "Unbeatable value"],
    cons: ["Large island requiring driving", "Slower tourist pace"],
    tips: ["Visit the petrified forest.", "Dine at the Molyvos harbor."]
  },
  {
    slug: "kefalonia", name: "Kefalonia", type: "Island",
    lat: 38.1797, lng: 20.5922, price_group: "mid",
    scores: { family: 9, couples: 8, nightlife: 6, food: 8, beaches: 10, walking: 5 },
    pros: ["Myrtos beach drama", "Melissani underground lake", "Pine-covered mountains"],
    cons: ["Very quiet nightlife", "Steep mountain roads"],
    tips: ["Visit Assos village for lunch.", "Take a boat tour to Fiskardo."]
  },
  {
    slug: "zakynthos", name: "Zakynthos", type: "Island",
    lat: 37.7870, lng: 20.8999, price_group: "mid-high",
    scores: { family: 8, couples: 8, nightlife: 9, food: 7, beaches: 10, walking: 6 },
    pros: ["Shipwreck Beach (Navagio)", "Blue Caves sailing", "Turtle nesting beaches"],
    cons: ["Highly commercialized party strips", "Crowded viewpoints"],
    tips: ["See Navagio from the cliff view early morning.", "Dine in Keri for sunset views."]
  },
  {
    slug: "patmos", name: "Patmos", type: "Island",
    lat: 37.3151, lng: 26.5414, price_group: "mid-high",
    scores: { family: 6, couples: 9, nightlife: 5, food: 9, beaches: 8, walking: 7 },
    pros: ["UNESCO Monastery of St. John", "Elegant Chora", "Peaceful & spiritual vibe"],
    cons: ["No airport, long ferry", "Higher prices for upscale dining"],
    tips: ["Visit the Cave of the Apocalypse.", "Swim at Psili Ammos beach."]
  },
  {
    slug: "halkidiki", name: "Halkidiki", type: "Region",
    lat: 40.3580, lng: 23.7140, price_group: "mid-high",
    scores: { family: 10, couples: 8, nightlife: 9, food: 8, beaches: 10, walking: 5 },
    pros: ["Best mainland sandy beaches", "Lush pine forest coastlines", "Intense beach bar life"],
    cons: ["Needs car to explore peninsulas", "Very crowded with Balkan traffic"],
    tips: ["Sithonia peninsula has the best wild beaches.", "Dine in Afitos village."]
  },
  {
    slug: "meteora", name: "Meteora", type: "Region",
    lat: 39.7122, lng: 21.6269, price_group: "mid-budget",
    scores: { family: 7, couples: 9, nightlife: 4, food: 8, beaches: 0, walking: 6 },
    pros: ["Extraordinary cliff monasteries", "Stunning hiking routes", "Spiritual landscape"],
    cons: ["No sea/beach options", "Can get hot and crowded at noon"],
    tips: ["Watch sunset from the rocks.", "Hike the hidden paths from Kastraki."]
  },
  {
    slug: "monemvasia", name: "Monemvasia", type: "City",
    lat: 36.6876, lng: 23.0560, price_group: "mid",
    scores: { family: 6, couples: 10, nightlife: 5, food: 8, beaches: 5, walking: 5 },
    pros: ["Medieval fortress town", "Pure romance", "No cars allowed inside castle"],
    cons: ["Physically demanding walking", "Very limited beach options nearby"],
    tips: ["Stay inside the castle walls.", "Hike up to the Upper Town ruins."]
  },
  {
    slug: "chania", name: "Chania", type: "City",
    lat: 35.5138, lng: 24.0180, price_group: "mid",
    scores: { family: 9, couples: 9, nightlife: 8, food: 10, beaches: 10, walking: 8 },
    pros: ["Beautiful Venetian harbor", "Access to Balos & Elafonissi", "Best Cretan food scene"],
    cons: ["Very busy harbor front", "Parking in town is difficult"],
    tips: ["Dine in Splantzia square.", "Visit the Municipal Market."]
  },
  {
    slug: "parga", name: "Parga", type: "City",
    lat: 39.2852, lng: 20.4002, price_group: "mid-budget",
    scores: { family: 8, couples: 8, nightlife: 7, food: 8, beaches: 9, walking: 7 },
    pros: ["Island feel on the mainland", "Colorful harbor town", "Venetian Castle views"],
    cons: ["Very crowded harbor in August", "Narrow uphill streets"],
    tips: ["Take a boat trip to Paxos/Antipaxos.", "Swim at Valtos beach."]
  },
  {
    slug: "delphi", name: "Delphi", type: "Region",
    lat: 38.4801, lng: 22.4938, price_group: "mid-budget",
    scores: { family: 6, couples: 8, nightlife: 3, food: 7, beaches: 0, walking: 6 },
    pros: ["Ancient Oracle ruins", "Stunning mountain scenery", "Rich cultural heritage"],
    cons: ["No beach access", "Quiet evening vibe"],
    tips: ["Visit the Delphi museum.", "Stay in nearby Arachova for alpine vibes."]
  },
  {
    slug: "patras", name: "Patras", type: "City",
    lat: 38.2466, lng: 21.7346, price_group: "mid-budget",
    scores: { family: 7, couples: 6, nightlife: 9, food: 8, beaches: 5, walking: 8 },
    pros: ["Vibrant student city", "Famous Carnival host", "Great hub for Peloponnese"],
    cons: ["Industrial port feel in parts", "Not a classic holiday town"],
    tips: ["Visit the Roman Odeon.", "Watch sunset from the Castle steps."]
  },
  {
    slug: "lemnos", name: "Lemnos", type: "Island",
    lat: 39.9167, lng: 25.2500, price_group: "mid-budget",
    scores: { family: 9, couples: 7, nightlife: 5, food: 10, beaches: 9, walking: 6 },
    pros: ["Unbelievable local gastronomy", "Unique sand dunes (Pachies Ammoudies)", "Top windsurfing spot"],
    cons: ["Windy", "Long ferry journey if no flight"],
    tips: ["Try Kalathaki cheese.", "Explore the castle of Myrina at night."]
  },
  {
    slug: "kalamata", name: "Kalamata", type: "City",
    lat: 37.0425, lng: 22.1142, price_group: "mid-budget",
    scores: { family: 8, couples: 7, nightlife: 8, food: 9, beaches: 8, walking: 8 },
    pros: ["Vibrant seaside city with a long beach", "Famous olives and oil", "Base for Mani exploration"],
    cons: ["City traffic", "Hot in July"],
    tips: ["Dine at the Marina.", "Explore the historic Old Town."]
  },
  {
    slug: "nafplio", name: "Nafplio", type: "City",
    lat: 37.5662, lng: 22.8016, price_group: "mid-high",
    scores: { family: 9, couples: 10, nightlife: 7, food: 8, beaches: 7, walking: 9 },
    pros: ["Most romantic mainland old town", "Rich Venetian castles", "Perfect weekend escape"],
    cons: ["Very busy with Athenians on weekends", "Town beaches are small"],
    tips: ["Climb the 999 steps of Palamidi.", "Eat gelato at Antica Gelateria di Roma."]
  }
];

// Γεωγραφικές κατηγορίες κλίματος (θερμοκρασίες)
const CLIMATES = {
  cyclades: { jan: 12, feb: 13, mar: 15, apr: 18, may: 23, jun: 26, jul: 29, aug: 29, sep: 26, oct: 22, nov: 17, dec: 14 },
  ionian: { jan: 13, feb: 13, mar: 15, apr: 18, may: 22, jun: 26, jul: 29, aug: 29, sep: 26, oct: 22, nov: 18, dec: 15 },
  crete: { jan: 14, feb: 14, mar: 16, apr: 19, may: 24, jun: 28, jul: 30, aug: 30, sep: 27, oct: 23, nov: 19, dec: 16 },
  mainland: { jan: 10, feb: 11, mar: 14, apr: 18, may: 23, jun: 28, jul: 31, aug: 31, sep: 26, oct: 21, nov: 16, dec: 12 }
};

// Pricing Base ανά group
const PRICING = {
  "ultra-luxury": { budget_daily: 80, mid_daily: 200, luxury_daily: 500 },
  "mid-high": { budget_daily: 60, mid_daily: 130, luxury_daily: 300 },
  "mid": { budget_daily: 50, mid_daily: 100, luxury_daily: 220 },
  "mid-budget": { budget_daily: 40, mid_daily: 75, luxury_daily: 160 }
};

// Multipliers για seasonality
const MULTIPLIERS = {
  january: 0.6, february: 0.6, march: 0.7, april: 0.8, may: 1.0, june: 1.2,
  july: 1.5, august: 1.6, september: 1.3, october: 0.9, november: 0.7, december: 0.6
};

async function run() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  console.log("Generating all 24 destination JSON files...");

  for (const d of DESTINATIONS_DB) {
    // 1. Καθορισμός Κλίματος
    let region = "cyclades";
    if (d.slug === "crete" || d.slug === "chania") region = "crete";
    else if (d.slug === "corfu" || d.slug === "kefalonia" || d.slug === "zakynthos") region = "ionian";
    else if (d.slug === "athens" || d.slug === "thessaloniki" || d.slug === "parga" || d.slug === "patras" || d.slug === "nafplio" || d.slug === "kalamata" || d.slug === "delphi" || d.slug === "meteora" || d.slug === "monemvasia") region = "mainland";
    
    const temps = CLIMATES[region];

    // 2. Καθορισμός Pricing
    const pricing = PRICING[d.price_group] || PRICING.mid;

    // 3. Δημιουργία seasonality object με temps & multipliers
    const seasonality = {};
    for (const [month, price_multiplier] of Object.entries(MULTIPLIERS)) {
      seasonality[month] = {
        temp: temps[month.slice(0, 3)],
        price_multiplier
      };
    }

    // 4. Δόμηση του τελικού JSON
    const json = {
      id: d.slug,
      slug: d.slug,
      name: d.name,
      type: d.type,
      coordinates: { lat: d.lat, lng: d.lng },
      tags: d.tags,
      scores: {
        family: { value: d.scores.family, reason: `Family friendly parameters for ${d.name}.` },
        couples: { value: d.scores.couples, reason: `Romantic components and spots in ${d.name}.` },
        nightlife: { value: d.scores.nightlife, reason: `Bar and club density in ${d.name}.` },
        food: { value: d.scores.food, reason: `Local gastronomy, products, and tavern quality.` },
        beaches: { value: d.scores.beaches, reason: `Beach quality, sand, and accessibility.` },
        walking: { value: d.scores.walking, reason: `Walkability of the main towns or villages.` }
      },
      content: {
        quick_summary: `A complete travel guide to ${d.name}.`,
        pros: d.pros,
        cons: d.cons,
        insider_tips: d.tips,
        mistakes_to_avoid: [`Visiting central tourist traps without local tips.`]
      },
      pricing_base: pricing,
      seasonality,
      image: `/images/${d.slug}.webp`,
      guideLinks: [
        { href: `/hotels/${d.slug}`, label: { en: "Where to Stay", el: "Πού να μείνεις" } },
        { href: `/travel-tools/budget/${d.slug}`, label: { en: "Budget Planner", el: "Budget Planner" } },
        { href: `/travel-tools/best-time/${d.slug}`, label: { en: "Best Time to Visit", el: "Καλύτερη Εποχή" } }
      ]
    };

    const filePath = path.join(DATA_DIR, `${d.slug}.json`);
    await fs.writeFile(filePath, JSON.stringify(json, null, 2), 'utf8');
    console.log(`✓ Generated: ${d.slug}.json`);
  }

  console.log("All 24 JSON files generated successfully inside data/destinations/ !");
}

run();
