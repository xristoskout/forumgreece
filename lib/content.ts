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

export type TourSection = {
  title: Localized;
  text: Localized;
};

export type TourItem = {
  slug: string;
  image: string;
  place: string;
  title: Localized;
  info: Localized;
  description: Localized;
  overview: Localized;
  highlights: LocalizedList;
  included: LocalizedList;
  perfectFor: LocalizedList;
  sections: TourSection[];
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

export const hotels: HotelCard[] = [
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

export const food: FoodCard[] = [
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

export const tours: TourItem[] = [
  {
    slug: "kefalonia-tours",
    image: "/images/tours/kefalonia-tours.jpg",
    place: "Kefalonia",
    title: {
      en: "Tours in Kefalonia",
      el: "Εκδρομές στην Κεφαλονιά",
    },
    info: {
      en: "Boat trips, hidden beaches, dramatic cliffs and charming villages make Kefalonia ideal for unforgettable island tours.",
      el: "Βαρκάδες, κρυφές παραλίες, εντυπωσιακά τοπία και όμορφα χωριά κάνουν την Κεφαλονιά ιδανική για αξέχαστες νησιωτικές εκδρομές.",
    },
    description: {
      en: "Discover the best of Kefalonia through handpicked tour ideas that combine famous beaches, scenic drives, caves, seaside villages and authentic local moments.",
      el: "Ανακάλυψε την Κεφαλονιά μέσα από επιλεγμένες ιδέες για εκδρομές που συνδυάζουν διάσημες παραλίες, όμορφες διαδρομές, σπήλαια, παραθαλάσσια χωριά και αυθεντικές τοπικές εμπειρίες.",
    },
    overview: {
      en: "Kefalonia is one of the most rewarding islands for travelers who want more than a simple beach holiday. A well-planned tour here can mix dramatic coastal views, boat excursions, turquoise waters, traditional villages and relaxed local culture in a single experience. This page presents a travel-style overview of what makes tours in Kefalonia special and what visitors can expect when exploring the island.",
      el: "Η Κεφαλονιά είναι ένα από τα πιο ξεχωριστά νησιά για ταξιδιώτες που θέλουν κάτι περισσότερο από απλές διακοπές σε παραλίες. Μια καλά οργανωμένη εκδρομή εδώ μπορεί να συνδυάσει εντυπωσιακές ακτογραμμές, βαρκάδες, τιρκουάζ νερά, παραδοσιακά χωριά και χαλαρή τοπική κουλτούρα σε μία ολοκληρωμένη εμπειρία. Αυτή η σελίδα παρουσιάζει ταξιδιωτικά τι κάνει τις εκδρομές στην Κεφαλονιά τόσο ιδιαίτερες και τι μπορεί να περιμένει ο επισκέπτης.",
    },
    highlights: {
      en: ["Myrtos Beach", "Melissani Cave", "Assos village", "Fiskardo"],
      el: ["Παραλία Μύρτος", "Σπήλαιο Μελισσάνης", "Άσσος", "Φισκάρδο"],
    },
    included: {
      en: [
        "Iconic beach and viewpoint stops",
        "Village and harbor exploration",
        "Scenic island driving routes",
        "Ideas for boat and cave experiences",
      ],
      el: [
        "Στάσεις σε εμβληματικές παραλίες και σημεία θέας",
        "Εξερεύνηση χωριών και λιμανιών",
        "Γραφικές διαδρομές στο νησί",
        "Ιδέες για βαρκάδες και εμπειρίες σε σπήλαια",
      ],
    },
    perfectFor: {
      en: [
        "Couples and relaxed island travelers",
        "Visitors who love beaches and scenery",
        "Road trip style holidays",
        "Travelers looking for authentic Ionian atmosphere",
      ],
      el: [
        "Ζευγάρια και ταξιδιώτες που αγαπούν τη χαλάρωση",
        "Επισκέπτες που αγαπούν παραλίες και τοπία",
        "Διακοπές με λογική road trip",
        "Ταξιδιώτες που αναζητούν αυθεντική ιονική ατμόσφαιρα",
      ],
    },
    sections: [
      {
        title: {
          en: "Why Kefalonia stands out",
          el: "Γιατί ξεχωρίζει η Κεφαλονιά",
        },
        text: {
          en: "Kefalonia stands out because it balances natural beauty with a calm and elegant island feeling. Travelers can move from panoramic mountain roads to famous beaches and from hidden coves to pretty villages without losing the sense of space and tranquility that defines the island. Tours here often feel cinematic, especially when they combine sea views with local stops in places that still feel authentic.",
          el: "Η Κεφαλονιά ξεχωρίζει επειδή συνδυάζει φυσική ομορφιά με μια ήρεμη και κομψή νησιωτική αίσθηση. Ο επισκέπτης μπορεί να περάσει από πανοραμικούς ορεινούς δρόμους σε διάσημες παραλίες και από κρυφούς όρμους σε όμορφα χωριά, χωρίς να χάνεται η αίσθηση χώρου και ηρεμίας που χαρακτηρίζει το νησί. Οι εκδρομές εδώ έχουν συχνά κινηματογραφικό χαρακτήρα, ειδικά όταν ενώνουν θέα στη θάλασσα με αυθεντικές τοπικές στάσεις.",
        },
      },
      {
        title: {
          en: "Best experiences to include",
          el: "Οι καλύτερες εμπειρίες που αξίζει να περιλαμβάνει",
        },
        text: {
          en: "A strong Kefalonia tour usually combines more than one travel mood. One part may focus on famous landmarks such as Myrtos Beach or Melissani Cave, while another may highlight the beauty of Assos or the harbor atmosphere of Fiskardo. The most memorable tours are not only about photo stops, but about the rhythm of the island: scenic driving, swimming breaks, village walks and the sense of discovering places gradually throughout the day.",
          el: "Μια καλή εκδρομή στην Κεφαλονιά συνήθως συνδυάζει περισσότερες από μία ταξιδιωτικές εμπειρίες. Ένα μέρος μπορεί να εστιάζει σε γνωστά σημεία όπως η παραλία Μύρτος ή το Σπήλαιο Μελισσάνης, ενώ ένα άλλο να αναδεικνύει την ομορφιά της Άσσου ή την ατμόσφαιρα του λιμανιού στο Φισκάρδο. Οι πιο όμορφες εκδρομές δεν βασίζονται μόνο στις στάσεις για φωτογραφίες, αλλά και στον ρυθμό του νησιού: γραφικές διαδρομές, στάσεις για μπάνιο, βόλτες σε χωριά και τη σταδιακή ανακάλυψη του τόπου μέσα στη μέρα.",
        },
      },
      {
        title: {
          en: "A more authentic island pace",
          el: "Ένας πιο αυθεντικός νησιωτικός ρυθμός",
        },
        text: {
          en: "What makes Kefalonia especially appealing is that it still feels generous and unhurried. Even when visiting popular places, travelers often feel that there is room to breathe, look around and enjoy the landscape. This slower, more refined rhythm is one of the main reasons tour content for Kefalonia should feel travel-oriented and inspirational, not just practical. The destination invites visitors to imagine the full island experience, not only a list of stops.",
          el: "Αυτό που κάνει την Κεφαλονιά ιδιαίτερα ελκυστική είναι ότι εξακολουθεί να αποπνέει άνεση και ηρεμία. Ακόμη και στα πιο γνωστά σημεία, ο επισκέπτης συχνά νιώθει ότι έχει χώρο να απολαύσει το τοπίο χωρίς πίεση. Αυτός ο πιο αργός και ποιοτικός ρυθμός είναι ένας από τους βασικούς λόγους που το περιεχόμενο για εκδρομές στην Κεφαλονιά πρέπει να είναι ταξιδιωτικό και εμπνευστικό, όχι μόνο πρακτικό. Ο προορισμός σε καλεί να φανταστείς ολόκληρη την εμπειρία του νησιού, όχι απλώς μια λίστα στάσεων.",
        },
      },
    ],
  },
  {
    slug: "lesvos-tours",
    image: "/images/tours/lesvos-tours.jpg",
    place: "Lesvos",
    title: {
      en: "Tours in Lesvos",
      el: "Εκδρομές στη Λέσβο",
    },
    info: {
      en: "Lesvos offers cultural routes, traditional villages, thermal springs and authentic food experiences away from the crowds.",
      el: "Η Λέσβος προσφέρει πολιτιστικές διαδρομές, παραδοσιακά χωριά, θερμές πηγές και αυθεντικές γαστρονομικές εμπειρίες μακριά από την πολυκοσμία.",
    },
    description: {
      en: "Explore Lesvos with tours focused on culture, gastronomy, nature and heritage, from picturesque towns to unique volcanic landscapes.",
      el: "Εξερεύνησε τη Λέσβο μέσα από εκδρομές με έμφαση στον πολιτισμό, τη γαστρονομία, τη φύση και την παράδοση, από γραφικές πόλεις έως μοναδικά ηφαιστειακά τοπία.",
    },
    overview: {
      en: "Lesvos is ideal for travelers who want a deeper and more authentic Greek island experience. Tours here often focus on village character, local food, heritage and landscapes that feel less commercial and more rooted in everyday island life.",
      el: "Η Λέσβος είναι ιδανική για ταξιδιώτες που θέλουν μια πιο βαθιά και αυθεντική εμπειρία ελληνικού νησιού. Οι εκδρομές εδώ συχνά εστιάζουν στον χαρακτήρα των χωριών, στο τοπικό φαγητό, στην παράδοση και σε τοπία που είναι λιγότερο εμπορικά και πιο δεμένα με την καθημερινή νησιωτική ζωή.",
    },
    highlights: {
      en: ["Molyvos", "Petra", "Mytilene", "Petrified Forest"],
      el: ["Μόλυβος", "Πέτρα", "Μυτιλήνη", "Απολιθωμένο Δάσος"],
    },
    included: {
      en: [
        "Traditional villages and architecture",
        "Cultural and heritage stops",
        "Local gastronomy inspiration",
        "Nature and landscape exploration",
      ],
      el: [
        "Παραδοσιακά χωριά και αρχιτεκτονική",
        "Στάσεις πολιτισμού και παράδοσης",
        "Έμπνευση από την τοπική γαστρονομία",
        "Εξερεύνηση φύσης και τοπίων",
      ],
    },
    perfectFor: {
      en: [
        "Travelers who prefer authenticity",
        "Food and culture lovers",
        "Slow travel experiences",
        "Visitors interested in local identity",
      ],
      el: [
        "Ταξιδιώτες που προτιμούν την αυθεντικότητα",
        "Λάτρεις του φαγητού και του πολιτισμού",
        "Εμπειρίες slow travel",
        "Επισκέπτες με ενδιαφέρον για την τοπική ταυτότητα",
      ],
    },
    sections: [
      {
        title: {
          en: "A cultural island to explore slowly",
          el: "Ένα πολιτιστικό νησί για αργή εξερεύνηση",
        },
        text: {
          en: "Lesvos rewards visitors who prefer depth over speed. Instead of focusing only on famous postcard spots, tours here can highlight atmosphere, architecture, traditions and food culture, creating a more personal connection with the destination.",
          el: "Η Λέσβος ανταμείβει τον επισκέπτη που προτιμά το βάθος αντί για την ταχύτητα. Αντί να εστιάζουν μόνο σε γνωστά φωτογραφικά σημεία, οι εκδρομές εδώ μπορούν να αναδείξουν ατμόσφαιρα, αρχιτεκτονική, παραδόσεις και γαστρονομία, δημιουργώντας μια πιο προσωπική σχέση με τον προορισμό.",
        },
      },
      {
        title: {
          en: "Villages, flavors and local identity",
          el: "Χωριά, γεύσεις και τοπική ταυτότητα",
        },
        text: {
          en: "One of the biggest strengths of Lesvos is how naturally local identity enters the travel experience. Village squares, harbor tavernas, olive landscapes and traditional neighborhoods all help shape tours that feel genuine and memorable.",
          el: "Ένα από τα μεγαλύτερα πλεονεκτήματα της Λέσβου είναι ο φυσικός τρόπος με τον οποίο η τοπική ταυτότητα μπαίνει στην ταξιδιωτική εμπειρία. Πλατείες χωριών, ταβέρνες σε λιμάνια, ελαιώνες και παραδοσιακές γειτονιές δημιουργούν εκδρομές που μοιάζουν αληθινές και αξέχαστες.",
        },
      },
      {
        title: {
          en: "Ideal for meaningful travel",
          el: "Ιδανική για ουσιαστικό ταξίδι",
        },
        text: {
          en: "Lesvos is a destination for travelers who want more than surface-level sightseeing. Tour content here works best when it invites visitors into the local rhythm and shows why the island feels rich in character rather than simply busy with attractions.",
          el: "Η Λέσβος είναι προορισμός για ταξιδιώτες που θέλουν κάτι περισσότερο από επιφανειακό sightseeing. Το περιεχόμενο για εκδρομές εδώ λειτουργεί καλύτερα όταν βάζει τον επισκέπτη στον τοπικό ρυθμό και δείχνει γιατί το νησί είναι γεμάτο χαρακτήρα και όχι απλώς γεμάτο αξιοθέατα.",
        },
      },
    ],
  },
  {
    slug: "crete-tours",
    image: "/images/tours/crete-tours.jpg",
    place: "Crete",
    title: {
      en: "Tours in Crete",
      el: "Εκδρομές στην Κρήτη",
    },
    info: {
      en: "From ancient sites and mountain villages to beaches and food tastings, Crete is perfect for rich full-day travel experiences.",
      el: "Από αρχαιολογικούς χώρους και ορεινά χωριά μέχρι παραλίες και γευσιγνωσίες, η Κρήτη είναι ιδανική για πλούσιες ολοήμερες ταξιδιωτικές εμπειρίες.",
    },
    description: {
      en: "Experience Crete through tours that mix history, coastline, local cuisine and traditional hospitality across one of Greece’s most diverse islands.",
      el: "Γνώρισε την Κρήτη μέσα από εκδρομές που συνδυάζουν ιστορία, ακτογραμμή, τοπική κουζίνα και παραδοσιακή φιλοξενία σε ένα από τα πιο πολυδιάστατα νησιά της Ελλάδας.",
    },
    overview: {
      en: "Crete is ideal for travelers who want variety. Tours can include archaeological heritage, mountain routes, old towns, sea views and strong food identity, making the island one of the richest destinations in Greece for full-day exploration.",
      el: "Η Κρήτη είναι ιδανική για ταξιδιώτες που θέλουν ποικιλία. Οι εκδρομές μπορούν να περιλαμβάνουν αρχαιολογική κληρονομιά, ορεινές διαδρομές, παλιές πόλεις, θαλασσινές εικόνες και έντονη γαστρονομική ταυτότητα, κάνοντας το νησί έναν από τους πιο πλούσιους προορισμούς στην Ελλάδα για ολοήμερη εξερεύνηση.",
    },
    highlights: {
      en: ["Knossos", "Chania old town", "Elafonissi", "Cretan food villages"],
      el: ["Κνωσός", "Παλιά Πόλη Χανίων", "Ελαφονήσι", "Χωριά με κρητική κουζίνα"],
    },
    included: {
      en: [
        "History and archaeological inspiration",
        "Village and mountain route ideas",
        "Beach and coastline highlights",
        "Local food and hospitality moments",
      ],
      el: [
        "Έμπνευση από ιστορία και αρχαιολογία",
        "Ιδέες για χωριά και ορεινές διαδρομές",
        "Κορυφαία παραθαλάσσια σημεία",
        "Στιγμές τοπικής γεύσης και φιλοξενίας",
      ],
    },
    perfectFor: {
      en: [
        "Travelers who want variety",
        "History and culture lovers",
        "Families and longer stays",
        "Visitors who enjoy food-focused trips",
      ],
      el: [
        "Ταξιδιώτες που θέλουν ποικιλία",
        "Λάτρεις ιστορίας και πολιτισμού",
        "Οικογένειες και μεγαλύτερες διαμονές",
        "Επισκέπτες που αγαπούν γαστρονομικά ταξίδια",
      ],
    },
    sections: [
      {
        title: {
          en: "A destination with many travel layers",
          el: "Ένας προορισμός με πολλά ταξιδιωτικά επίπεδα",
        },
        text: {
          en: "Crete is not a one-style destination. It can feel historical, coastal, rural and culinary all at once. This makes tour content especially valuable, because good planning helps visitors understand how much variety the island can offer in a single trip.",
          el: "Η Κρήτη δεν είναι προορισμός ενός μόνο τύπου. Μπορεί να είναι ταυτόχρονα ιστορική, παραθαλάσσια, αγροτική και γαστρονομική. Γι’ αυτό το περιεχόμενο για εκδρομές έχει ιδιαίτερη αξία, αφού ο σωστός σχεδιασμός βοηθά τον επισκέπτη να καταλάβει πόση ποικιλία μπορεί να προσφέρει το νησί μέσα σε ένα μόνο ταξίδι.",
        },
      },
      {
        title: {
          en: "History, landscapes and hospitality",
          el: "Ιστορία, τοπία και φιλοξενία",
        },
        text: {
          en: "The most memorable tours in Crete often work because they combine contrast: ancient sites and modern villages, rugged mountains and relaxed beaches, local tavernas and old towns full of character. The island feels generous, textured and full of stories.",
          el: "Οι πιο δυνατές εκδρομές στην Κρήτη λειτουργούν συχνά επειδή συνδυάζουν αντιθέσεις: αρχαίους χώρους και σύγχρονα χωριά, άγρια βουνά και ήρεμες παραλίες, τοπικές ταβέρνες και παλιές πόλεις γεμάτες χαρακτήρα. Το νησί μοιάζει πλούσιο, πολυεπίπεδο και γεμάτο ιστορίες.",
        },
      },
      {
        title: {
          en: "Great for full and varied itineraries",
          el: "Ιδανική για γεμάτα και πολυδιάστατα προγράμματα",
        },
        text: {
          en: "Crete supports travel content that feels broad and satisfying. Visitors can imagine a whole day or even multiple days of discovery without repeating the same mood. That is why Crete works so well for featured tour pages within a Greece travel portal.",
          el: "Η Κρήτη υποστηρίζει ταξιδιωτικό περιεχόμενο που μοιάζει πλούσιο και ολοκληρωμένο. Ο επισκέπτης μπορεί να φανταστεί μια ολόκληρη μέρα ή ακόμη και πολλές μέρες εξερεύνησης χωρίς να επαναλαμβάνεται η ίδια εμπειρία. Γι’ αυτό η Κρήτη λειτουργεί τόσο καλά σε featured tour pages μέσα σε ένα travel portal για την Ελλάδα.",
        },
      },
    ],
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