import type { Localized, LocalizedList } from "./content";

export type ExperienceLanding = {
  slug: string;
  title: Localized;
  description: Localized;
  overview: Localized;
  highlights: LocalizedList;
};

export type ExperienceBusiness = {
  slug: string;
  landingSlug: string;
  name: string;
  category: Localized;
  place: string;
  info: Localized;
  image: string;
  href: string;
  badge?: string;
  overview: Localized;
  highlights: LocalizedList;
  perfectFor: LocalizedList;
  ctaLabel: Localized;
  phone?: string;
  email?: string;
  youtube?: string;
  description?: Localized;
  services?: LocalizedList;
  routes?: LocalizedList;
  galleryCount?: number;
  story?: Localized;
  practicalInfo?: LocalizedList;
  mapQuery?: string;
};

export const experienceLandings: ExperienceLanding[] = [
  {
    slug: "kefalonia-tours",
    title: {
      en: "Boat Trips & Local Experiences in Kefalonia",
      el: "Boat Trips & Τοπικές Εμπειρίες στην Κεφαλονιά",
    },
    description: {
      en: "Discover selected local businesses in Kefalonia, from boat trips and boat rentals to sea experiences that add something special to your island holiday.",
      el: "Ανακάλυψε επιλεγμένες τοπικές επιχειρήσεις στην Κεφαλονιά, από boat trips και ενοικιάσεις σκαφών μέχρι θαλάσσιες εμπειρίες που προσθέτουν κάτι ξεχωριστό στις διακοπές σου.",
    },
    overview: {
      en: "This page is designed as a curated guide to local experiences in Kefalonia. Instead of presenting only generic tour inspiration, it highlights businesses and operators that help visitors enjoy the island in a more direct, memorable and authentic way.",
      el: "Αυτή η σελίδα έχει σχεδιαστεί ως curated οδηγός τοπικών εμπειριών στην Κεφαλονιά. Αντί να παρουσιάζει μόνο γενική ταξιδιωτική έμπνευση, αναδεικνύει επιχειρήσεις και επαγγελματίες που βοηθούν τον επισκέπτη να απολαύσει το νησί με πιο άμεσο, αξέχαστο και αυθεντικό τρόπο.",
    },
    highlights: {
      en: [
        "Featured local businesses",
        "Boat trips and sea experiences",
        "Curated options for visitors",
        "A more practical way to plan experiences",
      ],
      el: [
        "Featured τοπικές επιχειρήσεις",
        "Boat trips και θαλάσσιες εμπειρίες",
        "Επιλεγμένες επιλογές για επισκέπτες",
        "Πιο πρακτικός τρόπος οργάνωσης εμπειριών",
      ],
    },
  },
  {
    slug: "lesvos-tours",
    title: {
      en: "Local Experiences & Businesses in Lesvos",
      el: "Τοπικές Εμπειρίες & Επιχειρήσεις στη Λέσβο",
    },
    description: {
      en: "Discover selected local businesses in Lesvos, from authentic food experiences and cultural activities to island services that enrich your stay.",
      el: "Ανακάλυψε επιλεγμένες τοπικές επιχειρήσεις στη Λέσβο, από αυθεντικές γαστρονομικές εμπειρίες και πολιτιστικές δραστηριότητες μέχρι υπηρεσίες που εμπλουτίζουν τη διαμονή σου.",
    },
    overview: {
      en: "This page is designed as a curated guide to local experiences in Lesvos. Instead of focusing only on general inspiration, it is built to feature real businesses and visitor-friendly experiences that bring travelers closer to the island’s culture, food and local identity.",
      el: "Αυτή η σελίδα έχει σχεδιαστεί ως curated οδηγός τοπικών εμπειριών στη Λέσβο. Αντί να εστιάζει μόνο σε γενική ταξιδιωτική έμπνευση, είναι φτιαγμένη για να προβάλλει πραγματικές επιχειρήσεις και εμπειρίες για επισκέπτες που φέρνουν τον ταξιδιώτη πιο κοντά στον πολιτισμό, τις γεύσεις και την τοπική ταυτότητα του νησιού.",
    },
    highlights: {
      en: [
        "Featured local businesses",
        "Authentic food and culture",
        "Visitor-friendly experiences",
        "A practical way to plan your stay",
      ],
      el: [
        "Featured τοπικές επιχειρήσεις",
        "Αυθεντικό φαγητό και πολιτισμός",
        "Εμπειρίες για επισκέπτες",
        "Πρακτικός τρόπος οργάνωσης διαμονής",
      ],
    },
  },
  {
    slug: "crete-tours",
    title: {
      en: "Local Experiences & Businesses in Crete",
      el: "Τοπικές Εμπειρίες & Επιχειρήσεις στην Κρήτη",
    },
    description: {
      en: "Discover selected local businesses in Crete, from food experiences and cultural activities to coastal outings and practical visitor options across the island.",
      el: "Ανακάλυψε επιλεγμένες τοπικές επιχειρήσεις στην Κρήτη, από γαστρονομικές εμπειρίες και πολιτιστικές δραστηριότητες μέχρι παραθαλάσσιες εξορμήσεις και πρακτικές επιλογές για επισκέπτες σε όλο το νησί.",
    },
    overview: {
      en: "This page is designed as a curated guide to local experiences in Crete. Instead of presenting only broad travel inspiration, it highlights businesses and services that help visitors enjoy the island in a richer, more direct and more practical way.",
      el: "Αυτή η σελίδα έχει σχεδιαστεί ως curated οδηγός τοπικών εμπειριών στην Κρήτη. Αντί να παρουσιάζει μόνο γενική ταξιδιωτική έμπνευση, αναδεικνύει επιχειρήσεις και υπηρεσίες που βοηθούν τον επισκέπτη να απολαύσει το νησί με πιο πλούσιο, άμεσο και πρακτικό τρόπο.",
    },
    highlights: {
      en: [
        "Featured local businesses",
        "Food, culture and coastline",
        "Curated options for visitors",
        "A more practical planning page",
      ],
      el: [
        "Featured τοπικές επιχειρήσεις",
        "Γεύση, πολιτισμός και ακτογραμμή",
        "Επιλεγμένες επιλογές για επισκέπτες",
        "Πιο πρακτική σελίδα οργάνωσης",
      ],
    },
  },
];

export const experienceBusinesses: ExperienceBusiness[] = [
  {
  slug: "rolling-into-the-blue",
  landingSlug: "kefalonia-tours",
  name: "Rolling Into The Blue",
  category: {
    en: "Boat rental & boat trips",
    el: "Ενοικίαση σκάφους / boat trips",
  },
  place: "Zola, near Myrtos, Kefalonia",
  info: {
    en: "A starting point for one of the most beautiful sea experiences in northern Kefalonia, with no-license boat rentals and private cruises with skipper from the small port of Zola near Agia Kyriaki.",
    el: "Αφετηρία για μία από τις πιο όμορφες θαλάσσιες εμπειρίες στη βόρεια Κεφαλονιά, με ενοικίαση σκαφών χωρίς άδεια και ιδιωτικές κρουαζιέρες με skipper από το λιμανάκι της Ζόλας, κοντά στην Αγία Κυριακή.",
  },
  image: "/images/businesses/rolling-into-the-blue/1.jpg",
  href: "/businesses/rolling-into-the-blue",
  badge: "Featured",
  galleryCount: 10,
  mapQuery: "Rolling Into The Blue Zola port Agia Kyriaki Kefalonia Greece",
  overview: {
    en: "Rolling Into The Blue operates from the small port of Zola, next to Agia Kyriaki beach in Kefalonia, and offers two main options: small motorboats without a license for visitors who want freedom on the water, and private cruises with skipper for guests who prefer a more relaxed and guided experience. From here, you can reach beautiful coves and beaches that are not easily accessible by road, including Fteri, Blue Lagoon, Kamari, Amidi, and parts of the wider Myrtos bay coastline.",
    el: "Το Rolling Into The Blue δραστηριοποιείται στο λιμανάκι της Ζόλας, δίπλα στην παραλία της Αγίας Κυριακής στην Κεφαλονιά, και προσφέρει δύο βασικές επιλογές: μικρά μηχανοκίνητα σκάφη χωρίς άδεια για όσους θέλουν ελευθερία στη θάλασσα και ιδιωτικές κρουαζιέρες με skipper για όσους προτιμούν μία πιο άνετη και καθοδηγούμενη εμπειρία. Από εδώ μπορείς να προσεγγίσεις υπέροχους κολπίσκους και παραλίες που δεν είναι εύκολα προσβάσιμες οδικώς, όπως το Fteri, η Blue Lagoon, το Kamari, το Amidi και σημεία της ευρύτερης ακτογραμμής του κόλπου του Μύρτου.",
  },
  description: {
  en: "One of the best starting points for a beautiful sea experience in northern Kefalonia. Rolling Into The Blue operates from the small port of Zola next to Agia Kyriaki beach and offers either small no-license motorboat rentals or private cruises with skipper. From here, you set off for coves with no road access: Fteri, Blue Lagoon, Kamari, Amidi, and even the wider Myrtos bay coastline — all in waters that remain clear, calm and unspoiled. If you want comfort, choose a private cruise with captain; if you want freedom, become the 'captain' of a boat up to 30 hp, with no license required, and follow their guidance for safe routes.",
  el: "Αφετηρία για μια από τις πιο όμορφες θαλάσσιες εμπειρίες της βόρειας Κεφαλονιάς. Το Rolling Into The Blue δρα στο λιμανάκι των Ζολών δίπλα στην παραλία Αγία Κυριακή και προσφέρει είτε ενοικίαση μικρών μηχανοκίνητων σκαφών χωρίς άδεια είτε ιδιωτικές κρουαζιέρες με skipper. Από εδώ ξεκινάς για κολπίσκους που δεν πάνε με δρόμο: Fteri, Blue Lagoon, Kamari, Amidi, μέχρι και τον κόλπο του Μύρτου — όλα σε νερά που παραμένουν αγνά και ήσυχα. Αν θες άνεση, διάλεξε ιδιωτική κρουαζιέρα με καπετάνιο· αν θες ελευθερία, γίνε «καπετάνιος» σε σκάφος έως 30 hp, χωρίς δίπλωμα, και ακολούθησε τις οδηγίες τους για ασφαλείς διαδρομές.",
},
  highlights: {
    en: [
      "No-license boats up to about 30 hp",
      "Private cruises with skipper",
      "Fteri, Blue Lagoon, Kamari, and Amidi",
      "Departure from Zola near Myrtos",
    ],
    el: [
      "Σκάφη χωρίς άδεια έως περίπου 30 hp",
      "Ιδιωτικές κρουαζιέρες με skipper",
      "Fteri, Blue Lagoon, Kamari και Amidi",
      "Αναχώρηση από τη Ζόλα κοντά στον Μύρτο",
    ],
  },
  services: {
  en: [
    "No-license boats up to about 30 hp for self-guided trips to Fteri, Blue Lagoon, Kamari, Amidi and other beaches accessible only by sea",
    "Private cruises with skipper, usually lasting around 4–5 hours",
    "Morning cruises around 10:00–15:00",
    "Afternoon and sunset cruises around 17:00–20:30",
    "Homemade snacks, water and lemonade",
    "Snorkeling masks and Bluetooth music on board",
  ],
  el: [
    "Σκάφη χωρίς άδεια έως περίπου 30 hp για να πας μόνος/η σε Fteri, Blue Lagoon, Kamari, Amidi και άλλες παραλίες προσβάσιμες μόνο δια θαλάσσης",
    "Ιδιωτικές κρουαζιέρες με skipper, συνήθως διάρκειας περίπου 4–5 ωρών",
    "Πρωινές κρουαζιέρες περίπου 10:00–15:00",
    "Απογευματινές και sunset κρουαζιέρες περίπου 17:00–20:30",
    "Σπιτικά σνακ, νερά και λεμονάδες",
    "Μάσκες snorkeling και Bluetooth μουσική στο σκάφος",
  ],
},
story: {
  en: "The business operates as a local base under the identity “Rolling Into The Blue — Kefalonian Rent Boats & Cruises”, with Zola port as its departure point. Its website, video presence and local listings consistently present the same core experience: private cruises or no-license boat rentals towards the hidden coves and beaches of the wider Myrtos coastline.",
  el: "Η επιχείρηση λειτουργεί ως τοπική βάση «Rolling Into The Blue — Kefalonian Rent Boats & Cruises» με σημείο εκκίνησης το Zola port. Η παρουσία της στο site της, στο βίντεο και σε τοπικούς οδηγούς προβάλλει σταθερά την ίδια εμπειρία: ιδιωτικές βόλτες ή ενοικίαση χωρίς άδεια προς τις κρυφές ακτές και παραλίες του ευρύτερου Μύρτου.",
},
practicalInfo: {
  en: [
    "No license is required in Greece for motorboats up to 30 hp; above 30 hp you need a license or a skipper",
    "A safety briefing is given before departure; follow weather and distance guidance and keep a safe distance from rocks and caves",
    "Ask in advance whether fuel is included and what applies for deposits or damage terms",
    "Bring a hat, sunscreen, extra water or snacks, a waterproof pouch and sea shoes",
    "Demand is high from June to September, so booking early is strongly recommended",
  ],
  el: [
    "Στην Ελλάδα δεν απαιτείται δίπλωμα για μηχανοκίνητα έως 30 hp· πάνω από 30 hp χρειάζεται δίπλωμα ή skipper",
    "Γίνεται briefing ασφάλειας πριν την αναχώρηση· ακολούθησε τις οδηγίες για καιρό και αποστάσεις και κράτα ασφαλή απόσταση από βράχια και σπηλιές",
    "Ρώτησε εκ των προτέρων αν η τιμή περιλαμβάνει καύσιμα και τι ισχύει για εγγύηση ή ζημιές",
    "Πάρε μαζί σου καπέλο, αντηλιακό, extra νερό ή σνακ, στεγανή θήκη και παπούτσια θαλάσσης",
    "Η ζήτηση είναι υψηλή από Ιούνιο έως Σεπτέμβριο, οπότε καλό είναι να κλείσεις έγκαιρα",
  ],
},
  routes: {
    en: [
      "Fteri",
      "Blue Lagoon",
      "Kamari",
      "Amidi",
      "Wider Myrtos bay coastline",
    ],
    el: [
      "Fteri",
      "Blue Lagoon",
      "Kamari",
      "Amidi",
      "Ευρύτερη ακτογραμμή του κόλπου του Μύρτου",
    ],
  },
  perfectFor: {
    en: [
      "Couples, families, and small groups",
      "Visitors who want freedom at sea",
      "Travelers looking for hidden beaches",
      "Guests who prefer private boat experiences",
    ],
    el: [
      "Ζευγάρια, οικογένειες και μικρές παρέες",
      "Επισκέπτες που θέλουν ελευθερία στη θάλασσα",
      "Ταξιδιώτες που αναζητούν κρυφές παραλίες",
      "Επισκέπτες που προτιμούν ιδιωτικές εμπειρίες με σκάφος",
    ],
  },
  ctaLabel: {
    en: "View business",
    el: "Δες την επιχείρηση",
  },
  phone: "+306984331377",
  email: "deepbluemarine23@gmail.com",
  youtube: "https://www.youtube.com/watch?v=gBbpOTZjDgE&t=6s",
}
];