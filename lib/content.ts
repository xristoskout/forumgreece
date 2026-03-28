export type Lang = "en" | "el";

export type Localized = {
  en: string;
  el: string;
};

export type LocalizedList = {
  en: string[];
  el: string[];
};

export type Category = {
  title: Localized;
  description: Localized;
  emoji: string;
};

export type Destination = {
  slug: string;
  name: string;
  region: Localized;
  blurb: Localized;
  image: string;
  overview: Localized;
  highlights: LocalizedList;
};

export type GuideCard = {
  slug: string;
  title: Localized;
  description: Localized;
  image: string;
  overview: Localized;
  points: LocalizedList;
};

export type HotelCard = {
  slug: string;
  name: string;
  place: string;
  info: Localized;
  image: string;
  badge?: string;
  overview: Localized;
  features: LocalizedList;
};

export type FoodCard = {
  slug: string;
  title: Localized;
  place: string;
  info: Localized;
  image: string;
  overview: Localized;
  specialties: LocalizedList;
};

export type CommunityCard = {
  title: Localized;
  description: Localized;
  href: string;
};

export const siteBrand = "GoGreeceNow";

export const siteBrandLine: Localized = {
  en: "Greece travel guide, destinations and local experiences",
  el: "Ταξιδιωτικός οδηγός Ελλάδας, προορισμοί και τοπικές εμπειρίες",
};

export const categories: Category[] = [
  {
    title: { en: "Destinations", el: "Προορισμοί" },
    description: {
      en: "Travel guides for islands, mainland escapes, famous beaches and beautiful Greek towns.",
      el: "Ταξιδιωτικοί οδηγοί για νησιά, ηπειρωτικές αποδράσεις, διάσημες παραλίες και όμορφες ελληνικές πόλεις.",
    },
    emoji: "🏝️",
  },
  {
    title: { en: "Travel Info", el: "Travel Info" },
    description: {
      en: "Useful tips about ferries, airports, best time to visit, transport and practical planning.",
      el: "Χρήσιμες πληροφορίες για πλοία, αεροδρόμια, καλύτερη εποχή, μετακινήσεις και πρακτικό προγραμματισμό.",
    },
    emoji: "🧭",
  },
  {
    title: { en: "Hotels", el: "Ξενοδοχεία" },
    description: {
      en: "Curated stays, boutique hotels, family resorts and beautiful places to stay across Greece.",
      el: "Επιλεγμένα καταλύματα, boutique ξενοδοχεία, family resorts και όμορφα μέρη για διαμονή σε όλη την Ελλάδα.",
    },
    emoji: "🏨",
  },
  {
    title: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
    description: {
      en: "Restaurants, tavernas, bars and local flavors that help visitors experience Greece authentically.",
      el: "Εστιατόρια, ταβέρνες, bars και τοπικές γεύσεις που βοηθούν τον επισκέπτη να ζήσει αυθεντικά την Ελλάδα.",
    },
    emoji: "🍷",
  },
];

export const destinations: Destination[] = [
  {
    slug: "santorini",
    name: "Santorini",
    region: { en: "Cyclades", el: "Κυκλάδες" },
    blurb: {
      en: "Sunset views, caldera stays, beaches and romantic holidays.",
      el: "Ηλιοβασιλέματα, διαμονή στην καλντέρα, παραλίες και ρομαντικές αποδράσεις.",
    },
    image: "/images/santorini.jpg",
    overview: {
      en: "Santorini is ideal for couples, caldera views, premium stays and iconic island moments.",
      el: "Η Σαντορίνη είναι ιδανική για ζευγάρια, θέα στην καλντέρα, premium διαμονή και εμβληματικές νησιωτικές στιγμές.",
    },
    highlights: {
      en: ["Oia sunsets", "Caldera hotels", "Volcanic beaches"],
      el: ["Ηλιοβασιλέματα στην Οία", "Ξενοδοχεία στην καλντέρα", "Ηφαιστειακές παραλίες"],
    },
  },
  {
    slug: "mykonos",
    name: "Mykonos",
    region: { en: "Cyclades", el: "Κυκλάδες" },
    blurb: {
      en: "Cosmopolitan vibes, beaches, nightlife and stylish hotels.",
      el: "Κοσμοπολίτικη ατμόσφαιρα, παραλίες, νυχτερινή ζωή και κομψά ξενοδοχεία.",
    },
    image: "/images/mykonos.jpg",
    overview: {
      en: "Mykonos combines glamorous beaches, nightlife and polished Cycladic style.",
      el: "Η Μύκονος συνδυάζει glamorous παραλίες, νυχτερινή ζωή και κομψό κυκλαδίτικο ύφος.",
    },
    highlights: {
      en: ["Beach clubs", "Little Venice", "Luxury stays"],
      el: ["Beach clubs", "Μικρή Βενετία", "Πολυτελής διαμονή"],
    },
  },
  {
    slug: "crete",
    name: "Crete",
    region: { en: "Crete", el: "Κρήτη" },
    blurb: {
      en: "Big landscapes, cuisine, history, road trips and family holidays.",
      el: "Μεγάλα τοπία, κουζίνα, ιστορία, road trips και οικογενειακές διακοπές.",
    },
    image: "/images/crete.jpg",
    overview: {
      en: "Crete offers beaches, mountains, history, local food and endless options for long stays.",
      el: "Η Κρήτη προσφέρει παραλίες, βουνά, ιστορία, τοπική κουζίνα και αμέτρητες επιλογές για μεγαλύτερες διακοπές.",
    },
    highlights: {
      en: ["Road trips", "Cretan food", "Historic sites"],
      el: ["Road trips", "Κρητική κουζίνα", "Ιστορικά αξιοθέατα"],
    },
  },
  {
    slug: "corfu",
    name: "Corfu",
    region: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
    blurb: {
      en: "Green scenery, elegant town life, beaches and island charm.",
      el: "Πράσινα τοπία, αρχοντική πόλη, παραλίες και νησιώτικη γοητεία.",
    },
    image: "/images/corfu.jpg",
    overview: {
      en: "Corfu mixes elegant town life, lush landscapes and easy family-friendly holidays.",
      el: "Η Κέρκυρα συνδυάζει αρχοντική ατμόσφαιρα, καταπράσινα τοπία και εύκολες οικογενειακές διακοπές.",
    },
    highlights: {
      en: ["Old Town walks", "Green scenery", "Ionian beaches"],
      el: ["Βόλτες στην Παλιά Πόλη", "Πράσινα τοπία", "Ιόνιες παραλίες"],
    },
  },
  {
    slug: "nafplio",
    name: "Nafplio",
    region: { en: "Peloponnese", el: "Πελοπόννησος" },
    blurb: {
      en: "Romantic old town, seaside walks and easy weekend escapes.",
      el: "Ρομανική παλιά πόλη, βόλτες δίπλα στη θάλασσα και εύκολες αποδράσεις.",
    },
    image: "/images/nafplio.jpg",
    overview: {
      en: "Nafplio is one of the best short-break destinations in Greece for couples and relaxed city walks.",
      el: "Το Ναύπλιο είναι ένας από τους καλύτερους προορισμούς για σύντομες αποδράσεις στην Ελλάδα, ιδανικός για ζευγάρια και χαλαρές βόλτες.",
    },
    highlights: {
      en: ["Old town charm", "Seafront promenades", "Weekend trips"],
      el: ["Γοητεία παλιάς πόλης", "Παραθαλάσσιες βόλτες", "Αποδράσεις Σαββατοκύριακου"],
    },
  },
  {
    slug: "thessaloniki",
    name: "Thessaloniki",
    region: { en: "Northern Greece", el: "Βόρεια Ελλάδα" },
    blurb: {
      en: "Food, culture, nightlife and urban travel experiences.",
      el: "Φαγητό, πολιτισμός, νυχτερινή ζωή και αστικές ταξιδιωτικές εμπειρίες.",
    },
    image: "/images/thessaloniki.jpg",
    overview: {
      en: "Thessaloniki is perfect for city breaks, nightlife, gastronomy and urban culture.",
      el: "Η Θεσσαλονίκη είναι ιδανική για city breaks, νυχτερινή ζωή, γαστρονομία και αστικό πολιτισμό.",
    },
    highlights: {
      en: ["Food scene", "Waterfront", "Nightlife"],
      el: ["Γαστρονομική σκηνή", "Παραλία", "Νυχτερινή ζωή"],
    },
  },
  {
    slug: "kefalonia",
    name: "Kefalonia",
    region: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
    blurb: {
      en: "Blue waters, dramatic beaches, villages and relaxed island holidays.",
      el: "Γαλάζια νερά, εντυπωσιακές παραλίες, χωριά και χαλαρές νησιωτικές διακοπές.",
    },
    image: "/images/kefalonia.jpg",
    overview: {
      en: "Kefalonia stands out for beautiful beaches, scenic drives and a calm Ionian character.",
      el: "Η Κεφαλονιά ξεχωρίζει για τις πανέμορφες παραλίες, τις γραφικές διαδρομές και τον ήρεμο ιονικό χαρακτήρα της.",
    },
    highlights: {
      en: ["Myrtos Beach", "Scenic villages", "Relaxed island pace"],
      el: ["Παραλία Μύρτος", "Γραφικά χωριά", "Ήρεμος ρυθμός διακοπών"],
    },
  },
  {
    slug: "lesvos",
    name: "Lesvos",
    region: { en: "North Aegean", el: "Βόρειο Αιγαίο" },
    blurb: {
      en: "Culture, villages, local food, beaches and authentic island life.",
      el: "Πολιτισμός, χωριά, τοπικές γεύσεις, παραλίες και αυθεντική νησιωτική ζωή.",
    },
    image: "/images/lesvos.jpg",
    overview: {
      en: "Lesvos offers a more authentic Greek island experience with culture, food and slower rhythms.",
      el: "Η Λέσβος προσφέρει μια πιο αυθεντική εμπειρία ελληνικού νησιού με πολιτισμό, γεύσεις και πιο αργούς ρυθμούς.",
    },
    highlights: {
      en: ["Traditional villages", "Local gastronomy", "Authentic atmosphere"],
      el: ["Παραδοσιακά χωριά", "Τοπική γαστρονομία", "Αυθεντική ατμόσφαιρα"],
    },
  },
  {
    slug: "athens",
    name: "Athens",
    region: { en: "Attica", el: "Αττική" },
    blurb: {
      en: "Ancient landmarks, lively neighborhoods, food and city energy.",
      el: "Αρχαία μνημεία, ζωντανές γειτονιές, φαγητό και έντονος ρυθμός πόλης.",
    },
    image: "/images/athens.jpg",
    overview: {
      en: "Athens blends ancient history, modern neighborhoods and a vibrant urban food scene.",
      el: "Η Αθήνα συνδυάζει αρχαία ιστορία, σύγχρονες γειτονιές και μια ζωντανή αστική γαστρονομική σκηνή.",
    },
    highlights: {
      en: ["Acropolis", "Historic center", "Urban dining"],
      el: ["Ακρόπολη", "Ιστορικό κέντρο", "Αστική γαστρονομία"],
    },
  },
];

export const travelInfoGuides: GuideCard[] = [
  {
    slug: "how-to-get-to-greece",
    title: { en: "How to get to Greece", el: "Πώς να έρθεις στην Ελλάδα" },
    description: {
      en: "Flights, ferries, island hopping ideas and airport tips for first-time visitors.",
      el: "Πτήσεις, πλοία, ιδέες για island hopping και συμβουλές αεροδρομίων για νέους επισκέπτες.",
    },
    image: "/images/travel-arrival.jpg",
    overview: {
      en: "This guide helps visitors understand the best arrival options by air, sea and seasonal routes.",
      el: "Αυτός ο οδηγός βοηθά τους επισκέπτες να καταλάβουν τις καλύτερες επιλογές άφιξης αεροπορικώς, ακτοπλοϊκώς και εποχικά.",
    },
    points: {
      en: ["International airports", "Ferry connections", "Island-hopping planning"],
      el: ["Διεθνή αεροδρόμια", "Ακτοπλοϊκές συνδέσεις", "Σχεδιασμός island-hopping"],
    },
  },
  {
    slug: "best-time-to-visit",
    title: { en: "Best time to visit", el: "Καλύτερη εποχή για ταξίδι" },
    description: {
      en: "When to visit Greece for beaches, sightseeing, food, sailing and quieter holidays.",
      el: "Πότε να επισκεφθείς την Ελλάδα για παραλίες, sightseeing, φαγητό, sailing και πιο ήσυχες διακοπές.",
    },
    image: "/images/travel-season.jpg",
    overview: {
      en: "A practical seasonal guide for choosing the right months depending on your travel style.",
      el: "Ένας πρακτικός εποχικός οδηγός για να διαλέξεις τους σωστούς μήνες ανάλογα με το είδος ταξιδιού που θέλεις.",
    },
    points: {
      en: ["Summer beaches", "Spring city breaks", "Shoulder season value"],
      el: ["Καλοκαιρινές παραλίες", "Ανοιξιάτικα city breaks", "Value season επιλογές"],
    },
  },
  {
    slug: "getting-around",
    title: { en: "Getting around", el: "Μετακινήσεις στην Ελλάδα" },
    description: {
      en: "Cars, buses, ferries and local transport to move easily between regions and islands.",
      el: "Αυτοκίνητα, λεωφορεία, πλοία και τοπικές μετακινήσεις για εύκολη πρόσβαση σε περιοχές και νησιά.",
    },
    image: "/images/travel-transport.jpg",
    overview: {
      en: "This guide covers the most practical ways to move around mainland Greece and the islands.",
      el: "Αυτός ο οδηγός καλύπτει τους πιο πρακτικούς τρόπους μετακίνησης στην ηπειρωτική Ελλάδα και στα νησιά.",
    },
    points: {
      en: ["Car rentals", "Buses and ferries", "Regional transport tips"],
      el: ["Ενοικιάσεις αυτοκινήτων", "Λεωφορεία και πλοία", "Τοπικές συμβουλές μετακίνησης"],
    },
  },
];

export const hotels = [
  {
    slug: "caldera-blue-suites",
    name: "Caldera Blue Suites",
    place: "Santorini",
    info: {
      en: "Elegant cave-style suites with sea views and a luxury island feeling.",
      el: "Κομψές cave-style σουίτες με θέα στη θάλασσα και luxury νησιώτικη αίσθηση.",
    },
    image: "/images/hotel-santorini.jpg",
    badge: "Featured",
    overview: {
      en: "A premium Santorini-style stay focused on views, privacy and romantic atmosphere.",
      el: "Μια premium διαμονή τύπου Σαντορίνης με έμφαση στη θέα, την ιδιωτικότητα και τη ρομαντική ατμόσφαιρα.",
    },
    features: {
      en: ["Caldera views", "Romantic setting", "Boutique luxury"],
      el: ["Θέα στην καλντέρα", "Ρομανική ατμόσφαιρα", "Boutique πολυτέλεια"],
    },
  },
  {
    slug: "ionian-garden-resort",
    name: "Ionian Garden Resort",
    place: "Corfu",
    info: {
      en: "A relaxed family-friendly stay close to beaches, restaurants and green scenery.",
      el: "Χαλαρή οικογενειακή διαμονή κοντά σε παραλίες, εστιατόρια και πράσινα τοπία.",
    },
    image: "/images/hotel-corfu.jpg",
    badge: "Sponsored",
    overview: {
      en: "A calm Corfu accommodation concept suited to families and longer summer stays.",
      el: "Ένα ήρεμο concept διαμονής στην Κέρκυρα, κατάλληλο για οικογένειες και μεγαλύτερες καλοκαιρινές διακοπές.",
    },
    features: {
      en: ["Family-friendly", "Near beaches", "Relaxed atmosphere"],
      el: ["Κατάλληλο για οικογένειες", "Κοντά σε παραλίες", "Χαλαρή ατμόσφαιρα"],
    },
  },
  {
    slug: "old-town-boutique-house",
    name: "Old Town Boutique House",
    place: "Nafplio",
    info: {
      en: "Boutique accommodation for romantic city breaks and stylish weekends.",
      el: "Boutique διαμονή για ρομαντικά city breaks και κομψά Σαββατοκύριακα.",
    },
    image: "/images/hotel-nafplio.jpg",
    badge: "Top pick",
    overview: {
      en: "A small-scale boutique concept built for couples, weekend escapes and old-town charm.",
      el: "Ένα boutique concept μικρής κλίμακας, ιδανικό για ζευγάρια, αποδράσεις Σαββατοκύριακου και παλιά πόλη.",
    },
    features: {
      en: ["Romantic weekends", "Old town setting", "Boutique style"],
      el: ["Ρομαντικά weekends", "Τοποθεσία στην παλιά πόλη", "Boutique χαρακτήρας"],
    },
  },
];

export const food = [
  {
    slug: "seafood-by-the-harbor",
    title: { en: "Seafood by the harbor", el: "Θαλασσινά δίπλα στο λιμάνι" },
    place: "Nafplio",
    info: {
      en: "Fresh fish, local meze and a classic seaside Greek dining experience.",
      el: "Φρέσκο ψάρι, τοπικοί μεζέδες και μια κλασική παραθαλάσσια ελληνική εμπειρία φαγητού.",
    },
    image: "/images/food-nafplio.jpg",
    overview: {
      en: "A dining style built around fresh ingredients, sea views and the relaxed Greek harbor mood.",
      el: "Ένα στιλ φαγητού βασισμένο σε φρέσκα υλικά, θαλασσινή θέα και τη χαλαρή ατμόσφαιρα του ελληνικού λιμανιού.",
    },
    specialties: {
      en: ["Fresh fish", "Local meze", "Seaside tables"],
      el: ["Φρέσκο ψάρι", "Τοπικοί μεζέδες", "Τραπέζια δίπλα στη θάλασσα"],
    },
  },
  {
    slug: "sunset-cocktails-dinner",
    title: {
      en: "Sunset cocktails & dinner",
      el: "Cocktails και δείπνο στο ηλιοβασίλεμα",
    },
    place: "Santorini",
    info: {
      en: "A more premium side of Greece with views, drinks and memorable evenings.",
      el: "Μια πιο premium πλευρά της Ελλάδας με θέα, ποτά και αξέχαστα βράδια.",
    },
    image: "/images/food-santorini.jpg",
    overview: {
      en: "A premium eat-and-drink concept centered on views, atmosphere and evening experiences.",
      el: "Ένα premium concept για φαγητό και ποτό με επίκεντρο τη θέα, την ατμόσφαιρα και τις βραδινές εμπειρίες.",
    },
    specialties: {
      en: ["Sunset spots", "Cocktails", "Memorable dinners"],
      el: ["Σημεία για ηλιοβασίλεμα", "Cocktails", "Αξέχαστα δείπνα"],
    },
  },
  {
    slug: "traditional-tavern-flavors",
    title: {
      en: "Traditional tavern flavors",
      el: "Γεύσεις παραδοσιακής ταβέρνας",
    },
    place: "Crete",
    info: {
      en: "Simple authentic food, local ingredients and warm Greek hospitality.",
      el: "Απλό αυθεντικό φαγητό, τοπικά προϊόντα και ζεστή ελληνική φιλοξενία.",
    },
    image: "/images/food-crete.jpg",
    overview: {
      en: "A classic Greek tavern experience focused on simplicity, local ingredients and hospitality.",
      el: "Μια κλασική ελληνική εμπειρία ταβέρνας, με έμφαση στην απλότητα, τα τοπικά υλικά και τη φιλοξενία.",
    },
    specialties: {
      en: ["Traditional recipes", "Local ingredients", "Warm hospitality"],
      el: ["Παραδοσιακές συνταγές", "Τοπικά υλικά", "Ζεστή φιλοξενία"],
    },
  },
];

export const communities: CommunityCard[] = [
  {
    title: { en: "Forum Greece", el: "Forum Greece" },
    description: {
      en: "The central Facebook community for Greece travel ideas, questions and recommendations.",
      el: "Η κεντρική Facebook κοινότητα για ταξιδιωτικές ιδέες, ερωτήσεις και προτάσεις για την Ελλάδα.",
    },
    href: "/travel-to-greece",
  },
  {
    title: { en: "Forum Santorini", el: "Forum Santorini" },
    description: {
      en: "A dedicated travel forum for Santorini holidays, tips, hotels and beaches.",
      el: "Ένα ξεχωριστό travel forum για διακοπές στη Σαντορίνη, tips, ξενοδοχεία και παραλίες.",
    },
    href: "/travel-to-greece",
  },
  {
    title: { en: "Forum Corfu", el: "Forum Corfu" },
    description: {
      en: "A place for Corfu travel discussions, local ideas and useful visitor recommendations.",
      el: "Ένας χώρος για ταξιδιωτικές συζητήσεις για την Κέρκυρα, τοπικές ιδέες και χρήσιμες προτάσεις.",
    },
    href: "/travel-to-greece",
  },
];