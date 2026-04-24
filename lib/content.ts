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
  seo?: {
    title: Localized;
    description: Localized;
  };
  guideLinks?: {
    href: string;
    label: Localized;
  }[];
};

export type GuideSection = {
  title: Localized;
  content: Localized;
};

export type GuideCard = {
  slug: string;
  title: Localized;
  description: Localized;
  image: string;
  overview: Localized;
  points: LocalizedList;
  sections?: GuideSection[];
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
  description?: Localized;
  services?: LocalizedList;
  story?: Localized;
  perfectFor?: LocalizedList;
  practicalInfo?: LocalizedList;
  mapQuery?: string;
  mapIframe?: string;
  galleryImages?: string[];
  phone?: string;
  email?: string;
  website?: string;
  youtube?: string;
  featuredBusinesses?: string[];
};

export type FoodCard = {
  slug: string;
  title: Localized;
  place: string;
  info: Localized;
  image: string;
  overview: Localized;
  specialties: LocalizedList;
  sections?: TourSection[];
  metaTitle?: Localized;
  metaDescription?: Localized;
  keywords?: LocalizedList;
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
    image: "/images/santorini.webp",
    overview: {
      en: "Santorini is ideal for couples, caldera views, premium stays and iconic island moments. If you're wondering [Where to Stay in Santorini](/travel-info/where-to-stay-in-santorini), the caldera edge offers the most dramatic views.",
      el: "Η Σαντορίνη είναι ιδανική για ζευγάρια, θέα στην καλντέρα, premium διαμονή και εμβληματικές νησιωτικές στιγμές. Αν αναρωτιέστε [Πού να μείνετε στη Σαντορίνη](/travel-info/where-to-stay-in-santorini), η άκρη της καλντέρας προσφέρει την πιο εντυπωσιακή θέα.",
    },
    highlights: {
      en: ["Oia sunsets", "Caldera hotels", "Volcanic beaches"],
      el: ["Ηλιοβασιλέματα στην Οία", "Ξενοδοχεία στην καλντέρα", "Ηφαιστειακές παραλίες"],
    },
    guideLinks: [
      {
        href: "/travel-info/where-to-stay-in-santorini",
        label: { en: "Where to Stay in Santorini", el: "Πού να μείνεις στη Σαντορίνη" }
      }
    ],
    seo: {
      title: {
        en: "Santorini Travel Guide: Caldera, Beaches, Where to Stay & Things to Do",
        el: "Σαντορίνη: Οδηγός Ταξιδιού — Καλντέρα, Παραλίες, Διαμονή & Αξιοθέατα"
      },
      description: {
        en: "Detailed guide to Santorini: why to go, best time to visit, how to get there, top experiences, beaches, villages, local flavors, secrets, and practical tips + FAQ.",
        el: "Αναλυτικός οδηγός για Σαντορίνη: γιατί να πας, πότε είναι καλύτερα, πώς φτάνεις, top εμπειρίες, παραλίες, χωριά, τοπικές γεύσεις, μυστικά και πρακτικά tips + FAQ."
      }
    }
  },
  {
    slug: "mykonos",
    name: "Mykonos",
    region: { en: "Cyclades", el: "Κυκλάδες" },
    blurb: {
      en: "Cosmopolitan vibes, beaches, nightlife and stylish hotels.",
      el: "Κοσμοπολίτικη ατμόσφαιρα, παραλίες, νυχτερινή ζωή και κομψά ξενοδοχεία.",
    },
    image: "/images/mykonos.webp",
    overview: {
      en: "Mykonos combines glamorous beaches, nightlife and polished Cycladic style. To make the most of it, explore the [Best Tours in Mykonos](/travel-info/best-tours-in-mykonos) to see Delos or sail the Aegean.",
      el: "Η Μύκονος συνδυάζει glamorous παραλίες, νυχτερινή ζωή και κομψό κυκλαδίτικο ύφος. Ανακαλύψτε τις [Καλύτερες Εκδρομές στη Μύκονο](/travel-info/best-tours-in-mykonos) για να δείτε τη Δήλο ή να κάνετε ιστιοπλοΐα.",
    },
    highlights: {
      en: ["Windmills", "Little Venice", "Party beaches"],
      el: ["Ανεμόμυλοι", "Μικρή Βενετία", "Party παραλίες"],
    },
    guideLinks: [
      {
        href: "/travel-info/best-tours-in-mykonos",
        label: { en: "Best Tours in Mykonos", el: "Καλύτερες Εκδρομές στη Μύκονο" }
      }
    ],
    seo: {
      title: {
        en: "Mykonos Travel Guide: Beaches, Windmills, Delos & Things to Do",
        el: "Μύκονος: Οδηγός Ταξιδιού — Παραλίες, Ανεμόμυλοι, Δήλος & Αξιοθέατα"
      },
      description: {
        en: "Complete guide to Mykonos: why to go, best time, transport, top attractions (Chora, Little Venice, windmills, Paraportiani, Delos), beaches for every style, authentic food, and secrets to enjoy it stress-free.",
        el: "Πλήρης οδηγός για Μύκονο: γιατί να πας, καλύτερη εποχή, πώς φτάνεις, top αξιοθέατα (Χώρα, Μικρή Βενετία, ανεμόμυλοι, Παναγία Παραπορτιανή, Δήλος), παραλίες για κάθε στυλ, αυθεντικό φαγητό και μυστικά για να την απολαύσεις χωρίς άγχος."
      }
    }
  },
  {
    slug: "crete",
    name: "Crete",
    region: { en: "Crete", el: "Κρήτη" },
    blurb: {
      en: "Big landscapes, cuisine, history, road trips and family holidays.",
      el: "Μεγάλα τοπία, κουζίνα, ιστορία, road trips και οικογενειακές διακοπές.",
    },
    image: "/images/crete.webp",
    overview: {
      en: "Crete offers beaches, mountains, history, local food and endless options for long stays. It's fantastic for all ages, especially if you pick the [Best Hotels in Crete for Families](/travel-info/best-hotels-in-crete-for-families).",
      el: "Η Κρήτη προσφέρει παραλίες, βουνά, ιστορία, τοπική κουζίνα και αμέτρητες επιλογές για μεγαλύτερες διακοπές. Είναι φανταστική για όλες τις ηλικίες, ειδικά αν επιλέξετε τα [Καλύτερα Οικογενειακά Ξενοδοχεία στην Κρήτη](/travel-info/best-hotels-in-crete-for-families).",
    },
    highlights: {
      en: ["Road trips", "Cretan food", "Historic sites"],
      el: ["Road trips", "Κρητική κουζίνα", "Ιστορικά αξιοθέατα"],
    },
    guideLinks: [
      {
        href: "/travel-info/best-hotels-in-crete-for-families",
        label: { en: "Best Family Hotels", el: "Οικογενειακά Ξενοδοχεία" }
      }
    ],
    seo: {
      title: {
        en: "Crete Travel Guide: Best Beaches, Gorges, Villages & Things to Do",
        el: "Κρήτη: Οδηγός Ταξιδιού — Παραλίες, Φαράγγια, Χωριά & Αξιοθέατα"
      },
      description: {
        en: "Comprehensive guide to Crete: why it's worth it, best time to visit, how to get there, what to see (Knossos/UNESCO, Chania, Samaria, Balos, Elafonissi, Spinalonga), villages, authentic flavors and practical secrets to enjoy it.",
        el: "Αναλυτικός οδηγός για Κρήτη: γιατί αξίζει, καλύτερη εποχή, πώς φτάνεις, τι να δεις (Κνωσός/UNESCO, Χανιά, Σαμαριά, Μπάλος, Ελαφονήσι, Σπιναλόγκα), χωριά, αυθεντικές γεύσεις και πρακτικά μυστικά για να την απολαύσεις."
      }
    }
  },
  {
    slug: "corfu",
    name: "Corfu",
    region: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
    blurb: {
      en: "Green scenery, elegant town life, beaches and island charm.",
      el: "Πράσινα τοπία, αρχοντική πόλη, παραλίες και νησιώτικη γοητεία.",
    },
    image: "/images/corfu.webp",
    overview: {
      en: "Corfu mixes elegant town life, lush landscapes and easy family-friendly holidays.",
      el: "Η Κέρκυρα συνδυάζει αρχοντική ατμόσφαιρα, καταπράσινα τοπία και εύκολες οικογενειακές διακοπές.",
    },
    highlights: {
      en: ["Old Town walks", "Green scenery", "Ionian beaches"],
      el: ["Βόλτες στην Παλιά Πόλη", "Πράσινα τοπία", "Ιόνιες παραλίες"],
    },
    seo: {
      title: {
        en: "Corfu Travel Guide: Best Beaches, Old Town & Travel Tips",
        el: "Κέρκυρα: Οδηγός Ταξιδιού — Παραλίες, Παλιά Πόλη & Χρήσιμες Συμβουλές"
      },
      description: {
        en: "Detailed travel guide to Corfu: why it's worth visiting, best time, how to get there, top attractions and experiences, beaches for every taste, surprise villages, local flavors and practical tips + FAQ.",
        el: "Αναλυτικός ταξιδιωτικός οδηγός για Κέρκυρα: γιατί αξίζει, καλύτερη εποχή, πώς φτάνεις, κορυφαία αξιοθέατα και εμπειρίες, παραλίες για κάθε γούστο, χωριά-έκπληξη, τοπικές γεύσεις και πρακτικά tips + FAQ."
      }
    }
  },
  {
    slug: "nayplio-odigos-taxidiou",
    name: "Nafplio",
    region: { en: "Peloponnese", el: "Πελοπόννησος" },
    blurb: {
      en: "Romantic old town, seaside walks and easy weekend escapes.",
      el: "Ρομανική παλιά πόλη, βόλτες δίπλα στη θάλασσα και εύκολες αποδράσεις.",
    },
    image: "/images/nafplio.webp",
    overview: {
      en: "Nafplio combines romantic old town charm, seaside walks, elegant architecture and rich history.",
      el: "Το Ναύπλιο συνδυάζει ρομαντική ατμόσφαιρα παλιάς πόλης, παραθαλάσσιες βόλτες, αρχοντική αρχιτεκτονική και πλούσια ιστορία.",
    },
    highlights: {
      en: ["Palamidi & Bourtzi Castles", "Old Town romance", "Archaeological escapes"],
      el: ["Παλαμήδι & Μπούρτζι", "Ρομάντζο στην Παλιά Πόλη", "Αρχαιολογικές αποδράσεις"],
    },
    seo: {
      title: {
        en: "Nafplio Travel Guide: Palamidi, Bourtzi, Beaches & Things to Do",
        el: "Ναύπλιο: Οδηγός Ταξιδιού — Παλαμήδι, Μπούρτζι, Παραλίες & Αξιοθέατα"
      },
      description: {
        en: "Complete guide to Nafplio: why it's worth visiting, best time, how to go, top attractions (Old Town, Palamidi, Bourtzi, Akronafplia), beaches and nearby villages, local food, practical tips + FAQ to enjoy it like a local.",
        el: "Πλήρης οδηγός για Ναύπλιο: γιατί αξίζει, καλύτερη εποχή, πώς θα πας, κορυφαία αξιοθέατα (Παλιά Πόλη, Παλαμήδι, Μπούρτζι, Ακροναυπλία), παραλίες και κοντινά χωριά, τοπικές γεύσεις, πρακτικά tips + FAQ για να το απολαύσεις σαν ντόπιος."
      }
    }
  },
  {
    slug: "thessaloniki",
    name: "Thessaloniki",
    region: { en: "Northern Greece", el: "Βόρεια Ελλάδα" },
    blurb: {
      en: "Food, culture, nightlife and urban travel experiences.",
      el: "Φαγητό, πολιτισμός, νυχτερινή ζωή και αστικές ταξιδιωτικές εμπειρίες.",
    },
    image: "/images/thessaloniki.webp",
    overview: {
      en: "Thessaloniki combines a rich culinary scene, Byzantine history and vibrant urban culture by the sea.",
      el: "Η Θεσσαλονίκη συνδυάζει πλούσια γαστρονομική σκηνή, βυζαντινή ιστορία και ζωντανό αστικό πολιτισμό δίπλα στη θάλασσα.",
    },
    highlights: {
      en: ["UNESCO monuments", "White Tower & waterfront", "Culinary capital"],
      el: ["Μνημεία UNESCO", "Λευκός Πύργος & παραλία", "Γαστρονομική πρωτεύουσα"],
    },
    seo: {
      title: {
        en: "Thessaloniki Travel Guide: Attractions, Food & Best Things to Do",
        el: "Θεσσαλονίκη: Οδηγός Ταξιδιού — Αξιοθέατα, Φαγητό & Τι να Δεις"
      },
      description: {
        en: "Detailed guide to Thessaloniki: why it's worth it, best time, how to get there, what to see (UNESCO monuments, White Tower, Upper Town, Rotunda), where to eat (markets, bougatsa, koulouri), nearby beaches (Peraia, Agia Triada, Epanomi) and practical tips + FAQ.",
        el: "Αναλυτικός οδηγός για Θεσσαλονίκη: γιατί αξίζει, καλύτερη εποχή, πώς φτάνεις, τι να δεις (UNESCO μνημεία, Λευκός Πύργος, Άνω Πόλη, Ροτόντα), πού να φας (αγορές, bougatsa, koulouri), κοντινές παραλίες (Περαία, Αγ. Τριάδα, Επανομή) και πρακτικά tips + FAQ."
      }
    }
  },
  {
    slug: "kefalonia",
    name: "Kefalonia",
    region: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
    blurb: {
      en: "Blue waters, dramatic beaches, villages and relaxed island holidays.",
      el: "Γαλάζια νερά, εντυπωσιακές παραλίες, χωριά και χαλαρές νησιωτικές διακοπές.",
    },
    image: "/images/kefalonia.webp",
    overview: {
      en: "Kefalonia stands out for its legendary beaches, geological wonders like Melissani cave, and an authentic nature-filled Ionian character. Discover the coastline by booking the [Best Boat Trips in Kefalonia](/travel-info/best-boat-trips-in-kefalonia).",
      el: "Η Κεφαλονιά ξεχωρίζει για τις εντυπωσιακές παραλίες, τα γεωλογικά της θαύματα και τον αυθεντικό φυσιολατρικό επτανησιακό χαρακτήρα της. Εξερευνήστε τις ακτές μέσα από τις [Καλύτερες Εκδρομές με Σκάφος στην Κεφαλονιά](/travel-info/best-boat-trips-in-kefalonia).",
    },
    highlights: {
      en: ["Myrtos Beach", "Melissani Cave", "Mount Ainos"],
      el: ["Παραλία Μύρτος", "Σπήλαιο Μελισσάνης", "Όρος Αίνος"],
    },
    guideLinks: [
      {
        href: "/travel-info/best-boat-trips-in-kefalonia",
        label: { en: "Best Boat Trips", el: "Εκδρομές με Σκάφος" }
      }
    ],
    seo: {
      title: {
        en: "Kefalonia Travel Guide: Myrtos Beach, Caves, Villages & Things to Do",
        el: "Κεφαλονιά: Οδηγός Ταξιδιού — Μύρτος, Σπήλαια, Χωριά & Αξιοθέατα"
      },
      description: {
        en: "Complete travel guide to Kefalonia: why it's worth it, best time, how to get there, top attractions (Myrtos, Melissani, Drogarati, Ainos, Assos, Fiskardo), beaches for every style, local food, practical tips & FAQ.",
        el: "Πλήρης ταξιδιωτικός οδηγός για Κεφαλονιά: γιατί αξίζει, καλύτερη εποχή, πώς θα πας, κορυφαία αξιοθέατα (Μύρτος, Μελισσάνη, Δρογκαράτη, Αίνος, Άσσος, Φισκάρδο), παραλίες και χωριά για κάθε στυλ, τοπικές γεύσεις (κρεατόπιτα, Ρομπόλα), πρακτικά tips & FAQ."
      }
    }
  },
  {
    slug: "lesvos",
    name: "Lesvos",
    region: { en: "North Aegean", el: "Βόρειο Αιγαίο" },
    blurb: {
      en: "UNESCO Geopark, Petrified forest, castles, villages and authentic food.",
      el: "UNESCO Geopark, Απολιθωμένο Δάσος, κάστρα, χωριά και αυθεντικό φαγητό.",
    },
    image: "/images/lesvos.webp",
    overview: {
      en: "Lesvos is a vast island of continental scale, featuring the famous Petrified forest, huge castles, rich wetlands for birdwatching, thermal springs, and an unbeatable foodie scene. Check out the top [Things to Do in Lesvos](/travel-info/things-to-do-in-lesvos) to plan your days.",
      el: "Η Λέσβος είναι ένα νησί δομημένο σε ηπειρωτική κλίμακα, με όλο το έδαφός της αναγνωρισμένο ως UNESCO Global Geopark. Δείτε [Τι να Κάνετε στη Λέσβο](/travel-info/things-to-do-in-lesvos) για να γεμίσετε τις μέρες σας με αυθεντικές εμπειρίες.",
    },
    highlights: {
      en: ["Petrified forest", "Ouzo & local food", "Castles & villages"],
      el: ["Απολιθωμένο Δάσος", "Ούζο και μεζές", "Κάστρα & χωριά"],
    },
    guideLinks: [
      {
        href: "/travel-info/things-to-do-in-lesvos",
        label: { en: "Things to Do in Lesvos", el: "Τι να Κάνεις στη Λέσβο" }
      }
    ],
    seo: {
      title: {
        en: "Lesvos Travel Guide: Mytilene, Petrified Forest, Beaches & Local Food",
        el: "Λέσβος: Οδηγός Ταξιδιού — Μυτιλήνη, Απολιθωμένο Δάσος, Παραλίες & Τοπικές Γεύσεις"
      },
      description: {
        en: "Comprehensive guide to Lesvos: why it's worth it, best time, top attractions (UNESCO Global Geopark, Petrified Forest, Molyvos, Petra), beaches, local products (Ouzo, olive oil), and practical tips + FAQ.",
        el: "Αναλυτικός οδηγός για Λέσβο: γιατί αξίζει, καλύτερη εποχή, πώς φτάνεις, top αξιοθέατα και εμπειρίες (UNESCO Global Geopark, Απολιθωμένο Δάσος, Μυτιλήνη, Μόλυβος, Πέτρα), παραλίες, χωριά, τοπικά προϊόντα (ούζο ΓΕ, Λαδοτύρι Μυτιλήνης ΠΟΠ), πρακτικά tips & FAQ."
      }
    }
  },
  {
    slug: "athens",
    name: "Athens",
    region: { en: "Attica", el: "Αττική" },
    blurb: {
      en: "Acropolis, neighborhoods, street food, Athens Riviera & endless rhythm.",
      el: "Ακρόπολη, γειτονιές, street food, Αθηναϊκή Ριβιέρα & ατελείωτος ρυθμός.",
    },
    image: "/images/athens.webp",
    overview: {
      en: "Athens is a true two-in-one destination bridging the ancient and the modern. To start your trip right, learn [Where to Stay in Athens for First-Time Visitors](/travel-info/where-to-stay-in-athens-for-first-time-visitors).",
      el: "Η Αθήνα είναι από τα λίγα μέρη στον κόσμο όπου μπορείς να πιεις καφέ δίπλα σε μια βιτρίνα, να βρεθείς μπροστά σε μάρμαρα 2.500 χρόνων, και να κλείσεις τη μέρα στη θάλασσα. Μάθετε [Πού να Μείνετε στην Αθήνα (Πρώτη Φορά)](/travel-info/where-to-stay-in-athens-for-first-time-visitors).",
    },
    highlights: {
      en: ["Acropolis & Museums", "Athens Riviera", "Urban food & Neighborhoods"],
      el: ["Ακρόπολη & Μουσεία", "Αθηναϊκή Ριβιέρα", "Γειτονιές & Γαστρονομία"],
    },
    guideLinks: [
      {
        href: "/travel-info/where-to-stay-in-athens-for-first-time-visitors",
        label: { en: "Where to Stay (First Timers)", el: "Πού να Μείνεις (Πρώτη Φορά)" }
      }
    ],
    seo: {
      title: {
        en: "Athens Travel Guide: Acropolis, Neighborhoods, Food & Things to Do",
        el: "Αθήνα: Οδηγός Ταξιδιού — Ακρόπολη, Γειτονιές, Φαγητό & Αξιοθέατα"
      },
      description: {
        en: "Complete travel guide to Athens: why it's worth it, best time, top attractions (UNESCO Acropolis, museums, Lycabettus), neighborhoods, street food, Athenian Riviera/Vouliagmeni Lake, Saronic islands day trips + practical tips & FAQ.",
        el: "Πλήρης ταξιδιωτικός οδηγός για Αθήνα: γιατί αξίζει, καλύτερη εποχή, πώς φτάνεις, top αξιοθέατα (Ακρόπολη UNESCO, Μουσείο Ακρόπολης, Αρχαία Αγορά, Λυκαβηττός, Καλλιμάρμαρο), γειτονιές, street food και αγορές, Αθηναϊκή Ριβιέρα/Λίμνη Βουλιαγμένης, μονοήμερες (Σούνιο, νησιά Σαρωνικού) + πρακτικά tips & FAQ."
      }
    }
  },
];

export const travelInfoGuides: GuideCard[] = [
  {
    slug: "greece-islands-map-guide",
    title: { en: "Greece Islands Map Guide", el: "Χάρτης & Οδηγός Ελληνικών Νησιών" },
    description: {
      en: "The ultimate visual guide to Greek island groups. Understand the map and choose the right region for your trip.",
      el: "Ο απόλυτος οπτικός οδηγός για τα ελληνικά νησιωτικά συμπλέγματα. Κατανόησε τον χάρτη και διάλεξε τη σωστή περιοχή."
    },
    image: "/images/greece-islands-map-guide.webp",
    overview: {
      en: "Choosing an island is easier when you see the big picture. This guide breaks down Greece into its natural regions, helping you understand distances, ferry routes and local character.",
      el: "Η επιλογή νησιού είναι πιο εύκολη όταν βλέπεις τη συνολική εικόνα. Αυτός ο οδηγός μοιράζει την Ελλάδα στις φυσικές της περιοχές, βοηθώντας σε να καταλάβεις αποστάσεις και χαρακτήρα."
    },
    points: {
      en: ["The Cyclades", "The Ionian", "Crete", "The Dodecanese", "The Saronic"],
      el: ["Κυκλάδες", "Ιόνιο", "Κρήτη", "Δωδεκάνησα", "Σαρωνικός"]
    }
  },
  {
    slug: "how-to-get-to-greece",
    title: { en: "How to get to Greece", el: "Πώς να έρθεις στην Ελλάδα" },
    description: {
      en: "Flights, ferries, island hopping ideas and airport tips for first-time visitors solving the puzzle of Greek transport.",
      el: "Πτήσεις, πλοία, ιδέες για island hopping και αναλυτικές συμβουλές για αεροδρόμια, ειδικά για όσους έρχονται πρώτη φορά."
    },
    image: "/images/travel-arrival.webp",
    overview: {
      en: "Greece is highly accessible but its island geography makes planning crucial. This guide covers your main entry points—primary and regional airports, major ferry ports, and international transport links—so you can pick the smartest route for your itinerary.",
      el: "Η Ελλάδα είναι εξαιρετικά προσβάσιμη, αλλά η γεωγραφία της απαιτεί σωστό προγραμματισμό. Αυτός ο οδηγός καλύπτει τα κύρια σημεία εισόδου (κεντρικά και περιφερειακά αεροδρόμια, κεντρικά λιμάνια και χερσαία σύνορα) για να επιλέξεις τη σωστή διαδρομή."
    },
    points: {
      en: [
        "Athens (ATH) is the central aviation hub",
        "Piraeus is the massive main port for Aegean islands",
        "Direct flights to islands save transit time",
        "Ferry hopping requires buffer time between connections"
      ],
      el: [
        "Το αεροδρόμιο της Αθήνας είναι ο κεντρικός κόμβος",
        "Ο Πειραιάς είναι το βασικό λιμάνι για το Αιγαίο",
        "Οι απευθείας πτήσεις στα νησιά εξοικονομούν πολύ χρόνο",
        "Οι συνδέσεις πλοίων θέλουν πάντα χρόνο ασφαλείας"
      ]
    },
    sections: [
      {
        title: { en: "Flying into Greece", el: "Αεροπορική Άφιξη" },
        content: {
          en: "The immense majority of international travelers use Athens International Airport (ATH) as their primary gateway. It’s a modern hub connecting to all major European cities and offering direct flights from the US and the Middle East. If you plan to head straight to popular islands like Santorini, Mykonos, Crete, or Rhodes, consider flying directly into their international airports (especially during summer), as it saves you a day of transit. Thessaloniki (SKG) serves the north and is perfect for exploring Halkidiki, Olympus, or Epirus.",
          el: "Η συντριπτική πλειοψηφία των διεθνών ταξιδιωτών χρησιμοποιεί το αεροδρόμιο της Αθήνας (Ελ. Βενιζέλος) ως βασικό σημείο εισόδου. Ενώνει την Ελλάδα με όλη την Ευρώπη, την Αμερική και τη Μέση Ανατολή. Εάν ο τελικός σου προορισμός είναι δημοφιλή νησιά (όπως Σαντορίνη, Μύκονος, Κρήτη), αξίζει συχνά να ψάξεις για απευθείας πτήση εκεί (τους θερινούς μήνες), γλιτώνοντας μία έξτρα μέρα μετακίνησης. Το αεροδρόμιο της Θεσσαλονίκης ή «Μακεδονία» (SKG) είναι ιδανικό αν ορίζεις ως βάση τη Βόρεια Ελλάδα."
        }
      },
      {
        title: { en: "Ferry Connections & Ports", el: "Λιμάνια και Ακτοπλοΐα" },
        content: {
          en: "If you land in Athens, you’ll likely use the Port of Piraeus, the largest passenger port in Europe. Piraeus connects to nearly every island in the Aegean. For a more relaxed experience with fast ferries to the Cyclades (like Andros, Tinos, Mykonos), the smaller Port of Rafina is actually closer to the Athens Airport. From Italy (Ancona, Bari, Brindisi, Venice), massive car ferries sail into Patras and Igoumenitsa on the west coast, making it a great option for road-trippers arriving from central Europe.",
          el: "Από την Αθήνα, η βασική αφετηρία για το Αιγαίο είναι το λιμάνι του Πειραιά, το μεγαλύτερο επιβατικό λιμάνι της Ευρώπης. Αν ωστόσο θέλεις να πας σε νησιά των Κυκλάδων (όπως Άνδρο, Τήνο, Μύκονο), το λιμάνι της Ραφήνας είναι πιο κοντά στο αεροδρόμιο και συχνά πιο βολικό. Για όσους έρχονται οδικώς από την Ιταλία, υπάρχουν τεράστια επιβατηγά-οχηματαγωγά (ferries) που αναχωρούν από Βενετία, Ανκόνα, Μπάρι κ.ά. και δένουν στην Πάτρα και στην Ηγουμενίτσα."
        }
      },
      {
        title: { en: "Land Borders and Trains", el: "Χερσαία Σύνορα και Τρένα" },
        content: {
          en: "Road trips into Greece usually transit through the Balkans, entering via stations like Evzones (North Macedonia) or Promachonas (Bulgaria). Long-distance buses connect major Balkan cities with Thessaloniki and Athens. While Greece has a rail network, it is largely domestic (primarily the Athens-Thessaloniki axis), and international train connections are often suspended or complicated. A car or a cross-border coach is definitely the easiest way overland.",
          el: "Τα οδικά ταξίδια προς Ελλάδα περνούν συνήθως από τα Βαλκάνια, με κύριους σταθμούς εισόδου τους Ευζώνους (Βόρεια Μακεδονία) και τον Προμαχώνα (Βουλγαρία). Διεθνή λεωφορεία συνδέουν μεγάλες πρωτεύουσες με τη Θεσσαλονίκη και την Αθήνα. Αν και η Ελλάδα διαθέτει σιδηροδρομικό δίκτυο (κυρίως στον άξονα Αθήνας - Θεσσαλονίκης), οι διεθνείς διελεύσεις τρένων είναι συχνά περιορισμένες. Επομένως, το αυτοκίνητο ή το λεωφορείο αποτελούν τις πιο αξιόπιστες χερσαίες λύσεις."
        }
      }
    ]
  },
  {
    slug: "best-time-to-visit-greece",
    title: { 
      en: "Best Time to Visit Greece: A Month-by-Month Guide", 
      el: "Η Καλύτερη Εποχή για Ταξίδι στην Ελλάδα ανά Μήνα" 
    },
    description: {
      en: "A month-by-month guide to the best time to visit Greece for beaches, sightseeing, island hopping, family travel and quieter trips.",
      el: "Ένας οδηγός ανά μήνα για την ιδανική περίοδο επίσκεψης στην Ελλάδα, από παραλίες και island hopping μέχρι πιο ήσυχα ταξίδια."
    },
    image: "/images/travel-season.webp",
    overview: {
      en: "Greece is famous for its summer sun, but limiting your perspective to July and August means missing out. The shoulder seasons (Spring and Autumn) reveal a stunningly green landscape, lower prices, and comfortable temperatures for sightseeing. Greece can be visited throughout the year, but the best month depends on the kind of trip you want. The country has a Mediterranean climate with plenty of sunshine, mild winters and very warm summers, while ferry schedules and island life are much more active from spring to autumn.",
      el: "Η Ελλάδα είναι διάσημη για το καλοκαίρι της, αλλά αν περιοριστείς στον Ιούλιο και τον Αύγουστο χάνεις πολλές εμπειρίες. Οι ενδιάμεσες εποχές (άνοιξη και φθινόπωρο) αποκαλύπτουν μια πιο πράσινη πλευρά, με χαμηλότερες τιμές. Μπορείς να ταξιδέψεις όλο τον χρόνο, αλλά ο καλύτερος μήνας εξαρτάται από τον τύπο του ταξιδιού σου. Οι χειμώνες είναι ήπιοι και τα καλοκαίρια αρκετά θερμά, ενώ τα δρομολόγια των πλοίων είναι πολύ πιο συχνά από την άνοιξη μέχρι το φθινόπωρο."
    },
    points: {
      en: [
        "Summer is peak season with very hot weather",
        "September is the absolute sweet spot for island hopping",
        "Spring brings rare greenery and rich traditions (Easter)",
        "Winter focuses on Athens, Thessaloniki & highland escapes"
      ],
      el: [
        "Το καλοκαίρι είναι peak season με αρκετή ζέστη",
        "Ο Σεπτέμβριος είναι συχνά ο καλύτερος μήνας για το Αιγαίο",
        "Η άνοιξη γιορτάζεται έντονα (ιδιαίτερα το Πάσχα)",
        "Τον χειμώνα προτιμάμε city breaks και ορεινούς προορισμούς"
      ]
    },
    sections: [
      {
        title: { en: "High Summer (July & August)", el: "Το Ζεστό Καλοκαίρι (Ιούλιος & Αύγουστος)" },
        content: {
          en: "If your goal is endless sun, warm seas, and the classic buzzing island lifestyle, high summer is your time. It’s perfect for beach clubs, sailing the Saronic, and finding late-night energy in Mykonos or Ios. However, expect crowded ferries, high accommodation prices, and intense heat (frequently above 35°C / 95°F). To escape the deepest crowds, aim for lesser-known islands like Folegandros, Amorgos, or the expansive beaches of Crete and the Peloponnese.",
          el: "Αν στόχος σου είναι ο ήλιος, η ζεστή θάλασσα και η κλασική πολύβουη νησιωτική ζωή, τότε το καλοκαίρι είναι για σένα. Ιδανικό για beach clubs, sailing και ξενύχτι. Όμως, η πολυκοσμία είναι μεγάλη, οι τιμές φτάνουν στο αποκορύφωμα, και η ζέστη γίνεται έντονη (πάνω από 35°C). Εάν θέλεις πιο ήσυχες καλοκαιρινές διακοπές, προτίμησε λιγότερο γνωστά νησιά, όπως η Φολέγανδρος και η Αμοργός, ή τα μεγάλα τοπία της νότιας Κρήτης και της Πελοποννήσου."
        }
      },
      {
        title: { en: "The Sweet Spot (May/June & September/October)", el: "Το Ιδανικό Παράθυρο (Μάιος/Ιούνιος & Σεπτέμβριος/Οκτώβριος)" },
        content: {
          en: "This is universally considered the best time to visit. In May and June, the weather is warm but fresh, seas are warming up, and the landscape is full of wildflowers. September is magical: the sea is incredibly warm from the summer sun, but the massive tourist crowds have departed. Early October is still beautiful in the south (Crete, Rhodes), making it a fantastic time for a relaxed, authentic experience without the exhaustion of peak heat.",
          el: "Η καλύτερη περίοδος για τους περισσότερους. Τον Μάιο και τον Ιούνιο, ο καιρός είναι ζεστός αλλά δροσερός, η φύση καταπράσινη, και οι θάλασσες αρχίζουν να ζεσταίνονται. Ο Σεπτέμβριος είναι ίσως ο κορυφαίος μήνας: η θάλασσα έχει κρατήσει τη ζέστη όλου του καλοκαιριού ενώ ο έντονος όγκος τουριστών έχει πια φύγει. Ακόμα και ο πρώιμος Οκτώβριος είναι πανέμορφος στα νότια (Κρήτη, Ρόδος), συνδυάζοντας μπάνιο και αρχαιολογικούς περιπάτους."
        }
      },
      {
        title: { en: "The Unknown Winter & Spring", el: "Ο Χειμώνας και η Άνοιξη" },
        content: {
          en: "From November to March, island ferries run on minimal schedules, and resort towns hibernate. Yet, this is when Athens and Thessaloniki truly shine with a vibrant local culture, fantastic dining, and distraction-free archaeological sites. Winter is also the time for mainland road trips to dramatic highland villages like Zagorohoria or Pelion. Come April, Greek Easter transforms the countryside with profound traditions and celebrations, marking the start of the tourist reboot.",
          el: "Από τον Νοέμβριο ως τον Μάρτιο τα νησιά μπαίνουν σε μια χειμερία νάρκη, αφού τα δρομολόγια πλοίων ελαχιστοποιούνται. Τότε όμως λάμπουν η Αθήνα και η Θεσσαλονίκη! Μοναδική γαστρονομία, local κουλτούρα και αρχαιολογικοί χώροι χωρίς καμία αναμονή. Ο χειμώνας ανήκει επίσης στα γραφικά ορεινά χωριά της Ελλάδας (Ζαγοροχώρια, Πήλιο). Τον Απρίλιο, το Ελληνικό Πάσχα αποτελεί μια μοναδική εμπειρία γεμάτη παράδοση, που σηματοδοτεί και την έναρξη της νέας σεζόν."
        }
      },
      {
        title: { en: "January to March", el: "Ιανουάριος με Μάρτιος" },
        content: {
          en: "Best for: city breaks, culture, slower travel, lower-season atmosphere.\n\nThese months are not the classic island-hopping season. Many islands feel quiet, and ferry services are more limited than in the warmer months.",
          el: "Ιδανικό για: city breaks, πολιτισμό, αργό ρυθμό, χαλαρή ατμόσφαιρα.\n\nΑυτοί οι μήνες δεν είναι για island-hopping. Πολλά νησιά είναι ήσυχα και τα δρομολόγια πλοίων είναι αρκετά περιορισμένα σε σχέση με τους ζεστούς μήνες."
        }
      },
      {
        title: { en: "April", el: "Απρίλιος" },
        content: {
          en: "A lovely month for: spring travel, sightseeing, flowers and landscapes, fewer crowds.",
          el: "Ένας υπέροχος μήνας για: ανοιξιάτικα ταξίδια, αξιοθέατα, ανθισμένα τοπία, αποφυγή πολυκοσμίας."
        }
      },
      {
        title: { en: "May", el: "Μάιος" },
        content: {
          en: "One of the best months for: first-time visitors, island trips without full peak-season pressure, walking and sightseeing, more balanced prices.",
          el: "Ένας από τους καλύτερους μήνες για: επισκέπτες για πρώτη φορά, νησιά χωρίς την πίεση της υψηλής σεζόν, περιπάτους και αξιοθέατα, καλύτερες τιμές."
        }
      },
      {
        title: { en: "June", el: "Ιούνιος" },
        content: {
          en: "Excellent for: beaches, island hopping, couples, early summer energy.",
          el: "Εξαιρετικό για: παραλίες, island hopping, ζευγάρια, αρχή του ελληνικού καλοκαιριού."
        }
      },
      {
        title: { en: "July and August", el: "Ιούλιος και Αύγουστος" },
        content: {
          en: "Best for: classic beach holidays, nightlife, full summer atmosphere, families on school holidays.\n\nThese are the hottest and busiest months, especially on famous islands.",
          el: "Ιδανικό για: κλασικές διακοπές στην παραλία, νυχτερινή ζωή, καλοκαιρινή ατμόσφαιρα, οικογένειες.\n\nΕίναι οι πιο ζεστοί και πολυσύχναστοι μήνες, ειδικά στα διάσημα νησιά."
        }
      },
      {
        title: { en: "September", el: "Σεπτέμβριος" },
        content: {
          en: "One of the strongest overall months for Greece: warm sea, summer feel, more comfortable pace, easier all-round travel.",
          el: "Ενδεχομένως ο καλύτερος συνολικά μήνας για την Ελλάδα: ζεστή θάλασσα, καλοκαιρινή αίσθηση, πιο άνετος ρυθμός, εύκολες μετακινήσεις."
        }
      },
      {
        title: { en: "October", el: "Οκτώβριος" },
        content: {
          en: "Best for: quieter islands, city + island combinations, softer shoulder-season travel.",
          el: "Ιδανικό για: πιο ήσυχα νησιά, συνδυασμούς πόλης και νησιού, διακοπές χαμηλής σεζόν."
        }
      },
      {
        title: { en: "November and December", el: "Νοέμβριος και Δεκέμβριος" },
        content: {
          en: "Better for: Athens and Thessaloniki, cultural breaks, seasonal city travel, slower, non-beach-focused itineraries.",
          el: "Καλύτερο για: Αθήνα και Θεσσαλονίκη, πολιτιστικά διαλείμματα, χειμερινά ταξίδια πόλης, αργά προγράμματα όχι προσανατολισμένα σε παραλίες."
        }
      },
      {
        title: { en: "Conclusion", el: "Συμπέρασμα" },
        content: {
          en: "For most first-time visitors, May, June and September are the sweet spot. For peak beach energy, July and August work best. For culture and quieter travel, spring and autumn are often more enjoyable than high summer.",
          el: "Για τους περισσότερους επισκέπτες, ο Μάιος, ο Ιούνιος και ο Σεπτέμβριος είναι η χρυσή τομή. Για ζωντάνια και παραλίες, ο Ιούλιος και ο Αύγουστος υπερτερούν. Για πολιτισμό, η άνοιξη και το φθινόπωρο προσφέρουν συχνά περισσότερα από το καλοκαίρι."
        }
      }
    ]
  },
  {
    slug: "getting-around-greece",
    title: { en: "Getting around Greece", el: "Μετακινήσεις στην Ελλάδα" },
    description: {
      en: "From domestic flights and fast ferries to local buses and car rentals, navigate the diverse Greek landscape efficiently and comfortably.",
      el: "Από τοπικές πτήσεις και γρήγορα πλοία μέχρι λεωφορεία και ενοικιάσεις αυτοκινήτων, οργάνωσε τις μετακινήσεις σου αποδοτικά και άνετα."
    },
    image: "/images/travel-transport.webp",
    overview: {
      en: "Navigating Greece means learning two different transport systems: the intricate web of Aegean and Ionian ferries, and the extensive mainland road and bus network. With a bit of strategic planning, you can easily combine flights, ferries, and cars to craft the ultimate itinerary across mountains and islands.",
      el: "Η μετακίνηση στην Ελλάδα είναι πιο εύκολη όταν γνωρίζεις πώς λειτουργούν τα βασικά μέσα μεταφοράς. Στα νησιά, οι διαδρομές γίνονται κυρίως με πλοία και πτήσεις, ενώ στην ηπειρωτική χώρα σημαντικό ρόλο παίζουν οι αυτοκινητόδρομοι και τα ΚΤΕΛ. Με τον σωστό συνδυασμό μέσων, μπορείς να οργανώσεις το ταξίδι σου πιο άνετα, γρήγορα και έξυπνα."
    },
    points: {
      en: [
        "Ferries are the lifeblood, but schedules change heavily by season",
        "Renting a car is essential for large islands (Crete, Corfu)",
        "KTEL buses are the primary inter-city public transport",
        "Internal flights drastically cut travel time to far islands"
      ],
      el: [
        "Τα πλοία είναι η ψυχή των νησιών, αλλά τα δρομολόγια αλλάζουν εποχικά",
        "Το αυτοκίνητο είναι απαραίτητο για τα μεγάλα νησιά (πχ. Κρήτη)",
        "Τα λεωφορεία ΚΤΕΛ είναι το κύριο δημόσιο μέσο εκτός πόλεων",
        "Οι εσωτερικές πτήσεις σώζουν πολύ χρόνο για τα μακρινά νησιά"
      ]
    },
    sections: [
      {
        title: { en: "Mastering the Ferry System", el: "Το Δίκτυο των Πλοίων" },
        content: {
          en: "The ferry network is expansive. You have standard car ferries (slower, cheaper, open decks) and high-speed catamarans (seajets, hydrofoils) which cut travel time by half but can be bumpy on windy days. Ferry logistics dictate that you should group islands within the same cluster (e.g., sticking to the Cyclades, or exploring the Dodecanese) rather than jumping between completely different island chains, which often requires routing back through Athens.",
          el: "Υπάρχουν δύο είδη πλοίων: τα συμβατικά οχηματαγωγά (πιο αργά, αξιόπιστα, με κατάστρωμα) και τα ταχύπλοα/καταμαράν (πιο ακριβά, εξοικονομούν το μισό χρόνο αλλά 'κουνάνε' όταν φυσάει). Ο 'χρυσός κανόνας' για island hopping είναι να μένεις μέσα στο ίδιο σύμπλεγμα (π.χ. μόνο Κυκλάδες, μόνο Ιόνιο). Το να πας από ένα νησί του Ιονίου σε ένα των Κυκλάδων προϋποθέτει επιστροφή στην Αθήνα."
        }
      },
      {
        title: { en: "Car Rentals and Driving", el: "Οδήγηση και Ενοικίαση Οχήματος" },
        content: {
          en: "On small islands (like Hydra where cars are banned, or central Cyclades), public buses or scooters are enough. But for mainland excursions like the Peloponnese or massively scaled islands (Crete, Rhodes, Kefalonia), a rental car opens up secret beaches and mountain villages you’d never otherwise see. Greek roads are generally good, but mountain passes can be winding and very narrow. An international driving permit is required for most non-EU drivers.",
          el: "Στα μικρά νησιά τα τοπικά λεωφορεία είναι συχνά αρκετά, ενώ σε μέρη όπως η Ύδρα τα αυτοκίνητα απαγορεύονται πλήρως. Ωστόσο, για την ηπειρωτική Ελλάδα (Πελοπόννησος, Ήπειρος) και για τεράστια νησιά όπως η Κρήτη ή η Ρόδος, το ενοικιαζόμενο αυτοκίνητο είναι απολύτως απαραίτητο για να ανακαλύψεις κρυφές παραλίες. Οι κεντρικοί δρόμοι είναι πολύ καλοί, αλλά η επαρχία απαιτεί προσοχή λόγω πολλών στροφών."
        }
      },
      {
        title: { en: "The KTEL Bus Network", el: "Τα υπεραστικά Λεωφορεία (ΚΤΕΛ)" },
        content: {
          en: "Forget trains for most of Greece; the true public transport network is the KTEL bus system. It’s highly reliable, relatively cheap, and connects Athens/Thessaloniki to virtually every town, port, and village in the country. Buses even roll onto ferries for island connections. For budget travelers or those wary of driving mountain roads, the KTEL system is a superb, comfortable option to cross regions easily.",
          el: "Αν δεν έχεις αυτοκίνητο, η πιο αξιόπιστη δημόσια συγκοινωνία είναι τα ΚΤΕΛ (τα εθνικά υπεραστικά λεωφορεία). Έχουν συχνά δρομολόγια, καθαρά λεωφορεία, και συνδέουν την Αθήνα ή τη Θεσσαλονίκη με κάθε χωριό ή λιμάνι της χώρας. Μάλιστα, μπαίνουν και στα πλοία, επιτρέποντας το ενιαίο ταξίδι. Είναι μια πολύ budget-friendly και άνετη επιλογή για όσους δεν θέλουν να οδηγήσουν."
        }
      },
      {
        title: { en: "Taxis and Local Transfers", el: "Ταξί και Μετακινήσεις" },
        content: {
          en: "Taxis are a very common and affordable way to get around in Greece, actively used by locals as well as tourists. You can find taxi stands in almost every town, port, and airport, or use ride-hailing apps like FreeNow or Uber in major cities.",
          el: "Οι μετακινήσεις με ταξί δεν κοστίζουν καθόλου ακριβά και είναι πολύ συνηθισμένες, τόσο για τους τουρίστες όσο και για τους ίδιους τους ντόπιους. Υπάρχουν πιάτσες ταξί σε σχεδόν κάθε πόλη, λιμάνι και αεροδρόμιο, ενώ στις μεγάλες πόλεις εξυπηρετούν και εφαρμογές κλήσης ταξί."
        }
      },
      {
        title: { en: "Greek Islands Without a Car", el: "Ελληνικά Νησιά Χωρίς Αυτοκίνητο" },
        content: {
          en: "One of the best things about Greece is that not every island trip requires a car. Some islands are easy to enjoy on foot, others have compact main towns, and some are simply better for short, slow travel. Greece’s ferry network also makes it easy to reach many islands without needing to drive there yourself.",
          el: "Ένα από τα καλύτερα στοιχεία της Ελλάδας είναι ότι δεν απαιτείται αυτοκίνητο για κάθε νησί. Πολλά νησιά εξερευνώνται εύκολα με τα πόδια, άλλα έχουν μαζεμένες πόλεις, και μερικά είναι απλώς ιδανικά για χαλαρά σύντομα ταξίδια. Το ακτοπλοϊκό δίκτυο επιτρέπει την εύκολη πρόσβαση χωρίς οδήγηση."
        }
      },
      {
        title: { en: "Hydra", el: "Ύδρα" },
        content: {
          en: "Hydra is one of the most classic no-car island choices in Greece. It is perfect for a short stylish break, walking, harbor views and a relaxed rhythm.",
          el: "Η Ύδρα είναι ίσως η πιο κλασική επιλογή νησιού χωρίς αυτοκίνητο στην Ελλάδα. Είναι ιδανική για μια σύντομη, κομψή απόδραση, περπάτημα, θέα στο λιμάνι και χαλαρούς ρυθμούς."
        }
      },
      {
        title: { en: "Spetses", el: "Σπέτσες" },
        content: {
          en: "Spetses also works well for travelers who want a polished island atmosphere without depending heavily on a car.",
          el: "Οι Σπέτσες είναι επίσης εξαιρετικές για ταξιδιώτες που αναζητούν μια προσεγμένη νησιωτική ατμόσφαιρα χωρίς να εξαρτώνται έντονα από το αυτοκίνητο."
        }
      },
      {
        title: { en: "Schinoussa", el: "Σχοινούσα" },
        content: {
          en: "Schinoussa is one of the strongest examples of a small Greek island where a car is often unnecessary. Official destination information even notes that you do not need a car there because the island is very small.",
          el: "Η Σχοινούσα είναι ένα από τα καλύτερα παραδείγματα μικρού νησιού όπου το αυτοκίνητο είναι συνήθως περιττό. Οι επίσημες πληροφορίες τονίζουν πως δεν θα το χρειαστείτε, καθώς το νησί περπατιέται εύκολα."
        }
      },
      {
        title: { en: "Naxos Town-based stay", el: "Διαμονή στη Χώρα της Νάξου" },
        content: {
          en: "While Naxos is larger overall, a traveler staying strategically near town and key beaches can still enjoy part of the island without renting a car.",
          el: "Αν και η Νάξος είναι αρκετά μεγάλη, μπορείτε να μείνετε στρατηγικά κοντά στη Χώρα ή σε βασικές παραλίες και να απολαύσετε τμήματά της χωρίς να νοικιάσετε αυτοκίνητο."
        }
      },
      {
        title: { en: "Best Car-Free Trips Summary", el: "Σύνοψη για Ταξίδια Χωρίς Αυτοκίνητο" },
        content: {
          en: "For couples: Hydra or Santorini town-based stay.\nFor slow travel: Schinoussa.\nFor a short trip from Athens: Hydra or Spetses.\nFor first-timers: a compact island with a walkable base.",
          el: "Για ζευγάρια: Ύδρα ή διαμονή στις πόλεις της Σαντορίνης.\nΓια slow travel: Σχοινούσα.\nΓια σύντομη απόδραση από την Αθήνα: Ύδρα ή Σπέτσες.\nΓια πρώτη φορά: ένα μαζεμένο νησί με βάση που περπατιέται."
        }
      },
      {
        title: { en: "Car-Free Conclusion", el: "Συμπέρασμα" },
        content: {
          en: "The best Greek islands without a car are not always the biggest or most famous. They are the ones where distances stay manageable, the main base is walkable and the whole trip feels simple. For many travelers, that simplicity is part of the charm.",
          el: "Τα καλύτερα νησιά χωρίς αυτοκίνητο δεν είναι πάντα τα πιο μεγάλα ή τα πιο διάσημα. Είναι εκείνα όπου οι αποστάσεις είναι διαχειρίσιμες, η κεντρική βάση προσβάσιμη με τα πόδια, και όλο το ταξίδι αποπνέει απλότητα. Αυτή η απλότητα αποτελεί μέρος της μαγείας."
        }
      }
    ]
  },
  {
    slug: "first-time-in-greece",
    title: { 
      en: "Best Greek Islands for First-Time Visitors", 
      el: "Τα Καλύτερα Ελληνικά Νησιά για Πρώτη Φορά" 
    },
    description: { 
      en: "Discover the best Greek islands for first-time visitors, from iconic Santorini and Mykonos to easy, relaxed and family-friendly island choices for a first trip to Greece.", 
      el: "Ανακαλύψτε τα καλύτερα ελληνικά νησιά για την πρώτη σας επίσκεψη, από τη διάσημη Σαντορίνη και τη Μύκονο μέχρι πιο εύκολες και χαλαρές επιλογές για οικογένειες." 
    },
    image: "/images/first-time-greece.webp",
    overview: {
      en: "Planning your first trip to Greece can feel exciting and slightly overwhelming. With thousands of islands and very different travel styles, the hardest part is often knowing exactly where to begin. Before you dive into specific islands, we recommend starting with our [Greece Islands Map Guide](/travel-info/greece-islands-map-guide) to understand the regional clusters and ferry flow.",
      el: "Ο σχεδιασμός του πρώτου σας ταξιδιού στην Ελλάδα μπορεί να σας φαίνεται συναρπαστικός, αλλά ίσως και ελαφρώς χαοτικός. Πριν βουτήξετε σε συγκεκριμένα νησιά, σας προτείνουμε να ξεκινήσετε από τον [Χάρτη & Οδηγό Ελληνικών Νησιών](/travel-info/greece-islands-map-guide) για να κατανοήσετε τα συμπλέγματα και τη ροή των πλοίων."
    },
    points: {
      en: [
        "For romance and iconic views, choose Santorini.",
        "For cosmopolitan energy and nightlife, choose Mykonos.",
        "For greenery, beaches and variety, choose Corfu.",
        "For a complete trip and total flexibility, choose Crete."
      ],
      el: [
        "Για ρομαντισμό και την απόλυτη θέα, επίλεξε τη Σαντορίνη.",
        "Για κοσμοπολίτικο αέρα και έντονη ζωή, επίλεξε τη Μύκονο.",
        "Για πράσινα τοπία, παραλίες και φινέτσα, επίλεξε την Κέρκυρα.",
        "Για μια ολοκληρωμένη εμπειρία και ανεξαρτησία, επίλεξε την Κρήτη."
      ]
    },
    sections: [
      {
        title: { en: "1. Santorini: Best for iconic views", el: "1. Σαντορίνη: Το απόλυτο ηφαιστειακό τοπίο" },
        content: {
          en: "Santorini stands out as one of the most famous islands in Greece and remains a dream destination for almost all first-time visitors. Its breathtaking caldera views, dramatic cliffs lined with whitewashed cubic houses, and unique volcanic landscape make it feel unlike anywhere else. It is undeniably ideal for couples, honeymooners, and travelers who want their first Greek island experience to feel unforgettable and highly photographic right from the start. Santorini works best when you want stunning scenery, memorable sunsets, romantic boutique stays, and a shorter, high-impact trip.",
          el: "Η Σαντορίνη ξεχωρίζει ως ένα από τα πιο διάσημα νησιά της Ελλάδας και παραμένει ονειρικός προορισμός για σχεδόν όλους όσους έρχονται για πρώτη φορά. Η εκπληκτική θέα στην καλντέρα, οι δραματικοί γκρεμοί με τα ολόλευκα σπίτια και το μοναδικό ηφαιστειακό τοπίο της δίνουν μια αίσθηση που δεν συναντάς πουθενά αλλού. Είναι αναμφισβήτητα ιδανική για ζευγάρια, ταξίδια του μέλιτος και επισκέπτες που θέλουν η πρώτη τους επαφή με τα ελληνικά νησιά να είναι αξέχαστη. Ταιριάζει απόλυτα αν αναζητάς εντυπωσιακά τοπία, πολυτελή boutique ξενοδοχεία και ένα σύντομο ταξίδι γεμάτο δυνατές εικόνες."
        }
      },
      {
        title: { en: "2. Mykonos: Best for cosmopolitan energy", el: "2. Μύκονος: Για κοσμοπολίτικο αέρα και στιλ" },
        content: {
          en: "Mykonos is the ultimate Greek island for first-time visitors seeking glamorous, lively, and socially energetic holidays. It is internationally renowned for its stylish beach clubs, cutting-edge nightlife, luxury accommodations, and a vibrant summer atmosphere that never sleeps. Beyond the parties, it offers quintessential Cycladic architecture, charming maze-like alleyways, and incredibly easy access to the sacred island of Delos for history enthusiasts.",
          el: "Η Μύκονος είναι το απόλυτο ελληνικό νησί για επισκέπτες που αναζητούν λαμπερές, ζωντανές και κοσμοπολίτικες διακοπές. Είναι παγκοσμίως γνωστή για τα στιλάτα beach clubs, την έντονη νυχτερινή ζωή, την πολυτελή διαμονή και την καλοκαιρινή ατμόσφαιρα που δεν κοιμάται ποτέ. Αν εξαιρέσεις τα πάρτι, προσφέρει κλασική κυκλαδίτικη αρχιτεκτονική, μαγευτικά λαβυρινθώδη σοκάκια (όπως τα Ματογιάννια) και πολύ εύκολη πρόσβαση στο ιερό νησί της Δήλου για τους λάτρεις της ιστορίας."
        }
      },
      {
        title: { en: "3. Corfu: Best for greenery and variety", el: "3. Κέρκυρα: Για πράσινα τοπία και ποικιλία" },
        content: {
          en: "Corfu represents one of the easiest and most generous Greek islands for first-time visitors, offering a rich variety of experiences in one effortless trip. You get excellent beaches, an enchanting Venetian old-town with deep historical character, wonderful road-trip opportunities, exceptionally family-friendly resorts, and a softer, greener semi-mountainous Ionian landscape. It feels vastly different from the arid Cyclades and is frequently a stronger choice for travelers who want variety.",
          el: "Η Κέρκυρα αποτελεί ένα από τα πιο εύκολα και πλούσια ελληνικά νησιά για επισκέπτες, προσφέροντας τεράστια ποικιλία εμπειριών σε ένα μόνο ταξίδι. Διαθέτει εξαιρετικές παραλίες, μια μαγευτική παλιά πόλη με έντονο βενετσιάνικο χαρακτήρα, υπέροχες διαδρομές, θέρετρα φιλικά για οικογένειες και ένα πιο ήπιο, καταπράσινο τοπίο. Η αίσθηση είναι ριζικά διαφορετική από τις άνυδρες Κυκλάδες, καθιστώντας την μια δυνατή επιλογή για όσους θέλουν βλάστηση και πολιτισμό μαζί με άφθονο μπάνιο."
        }
      },
      {
        title: { en: "4. Crete: Best for a complete trip", el: "4. Κρήτη: Για μια ολοκληρωμένη και ανεξάρτητη εμπειρία" },
        content: {
          en: "Crete acts almost as a small continent in itself. It beautifully combines pristine beaches, unbelievable local food, traditional mountain villages, world-class archaeological sites like Knossos, and multiple distinct regions, each with its own personality. For first-time visitors seeking a full, culturally immersive holiday with total flexibility, Crete is undoubtedly one of the safest and most rewarding choices in Greece.",
          el: "Η Κρήτη λειτουργεί σχεδόν ως μια μικρή χώρα από μόνη της. Συνδυάζει υπέροχα εξωτικές παραλίες, απίστευτο τοπικό φαγητό, παραδοσιακά ορεινά χωριά, παγκοσμίου κήρους αρχαιολογικούς χώρους (όπως η Κνωσός) και πολλές περιοχές με εντελώς διαφορετικό χαρακτήρα. Για όσους έρχονται πρώτη φορά και θέλουν πολυήμερες, γεμάτες διακοπές με απόλυτη ανεξαρτησία, η Κρήτη είναι μια από τις πιο σίγουρες και πλούσιες επιλογές."
        }
      },
      {
        title: { en: "5. Naxos: Best for a relaxed Cyclades trip", el: "5. Νάξος: Μια ήρεμη κυκλαδίτικη εισαγωγή" },
        content: {
          en: "Naxos is an incredibly smart first-island choice for travelers longing for the authentic beauty of the Cyclades without the overwhelming crowds or premium prices of its famous neighbors. It provides long sandy shores, picturesque villages, remarkable farm-to-table dining, and a grounded local rhythm.",
          el: "Η Νάξος είναι μια εξαιρετικά έξυπνη επιλογή για ταξιδιώτες που αναζητούν την αυθεντική ομορφιά των Κυκλάδων χωρίς τα τεράστια πλήθη και τις υψηλές τιμές άλλων νησιών. Προσφέρει τεράστιες αμμώδεις παραλίες, γραφικά χωριά, εξαιρετικό τοπικό φαγητό και έναν πιο ήρεμο, γειωμένο ρυθμό ζωής, ιδανικό για ζευγάρια και οικογένειες."
        }
      },
      {
        title: { en: "6. Hydra or Spetses: Best for a short trip from Athens", el: "6. Ύδρα & Σπέτσες: Αποδράσεις δίπλα στην Αθήνα" },
        content: {
          en: "If your time is completely tied to Athens, the Argo-Saronic islands are the perfect introductory taste of island life. They are highly popular due to their short ferry rides from Piraeus, offering beautiful waterfronts, deep seafaring heritage, and an immediate escape from the urban rush without complicated logistics.",
          el: "Αν ο χρόνος σας είναι περιορισμένος και έχετε ως βάση την Αθήνα, τα νησιά του Αργοσαρωνικού προσφέρουν την τέλεια γεύση της νησιωτικής ζωής. Είναι εξαιρετικά δημοφιλή λόγω της κοντινής τους απόστασης από τον Πειραιά, προσφέροντας υπέροχα λιμάνια, έντονη ναυτική παράδοση και μια άμεση αλλαγή σκηνικού χωρίς πολύπλοκες ακτοπλοϊκές διαδρομές."
        }
      }
    ]
  },
  {
    slug: "greece-trip-planning-checklist",
    title: { 
      en: "Greece Trip Planning Checklist", 
      el: "Λίστα Προετοιμασίας Ταξιδιού στην Ελλάδα" 
    },
    description: { 
      en: "A practical Greece trip planning checklist covering flights, ferries, islands, hotels, transport, what to pack and how to organize your first trip smoothly.", 
      el: "Μια πρακτική λίστα προετοιμασίας για το ταξίδι σας στην Ελλάδα, με συμβουλές για πτήσεις, πλοία, νησιά, ξενοδοχεία, μεταφορές και το τι να πακετάρετε για μια ομαλή εμπειρία." 
    },
    image: "/images/trip-plan.webp",
    overview: {
      en: "A trip to Greece looks effortless on Instagram, but good planning makes a huge difference. Between flights, ferries, islands, hotel areas and seasonal timing, a little preparation can save both money and stress. Greece can be visited year-round, thanks to its Mediterranean climate, but the experience changes a lot depending on the season and destination. Ferry services also run throughout the year, with much denser schedules from March to October. This checklist covers the practical steps that matter most before you travel.",
      el: "Ένα ταξίδι στην Ελλάδα φαίνεται εύκολο στο Instagram, αλλά ο σωστός προγραμματισμός κάνει τεράστια διαφορά. Ανάμεσα σε πτήσεις, πλοία, επιλογή νησιών, περιοχές ξενοδοχείων και την κατάλληλη εποχή, λίγη προετοιμασία μπορεί να σας γλιτώσει χρήματα και άγχος. Η Ελλάδα είναι προσβάσιμη όλο τον χρόνο, χάρη στο μεσογειακό κλίμα της, αλλά η εμπειρία αλλάζει πολύ ανάλογα με την εποχή και τον προορισμό. Τα ακτοπλοϊκά δρομολόγια εκτελούνται επίσης όλο τον χρόνο, με πολύ μεγαλύτερη συχνότητα από τον Μάρτιο έως τον Οκτώβριο. Αυτή η λίστα καλύπτει τα πιο σημαντικά πρακτικά βήματα πριν ταξιδέψετε."
    },
    points: {
      en: [
        "Decide what kind of Greece trip you want",
        "Choose the best travel month",
        "Keep your itinerary realistic",
        "Book ferries and transport early for summer",
        "Choose the right hotel area, not just the right island",
        "Check how much local transport you will need",
        "Build around your arrival and departure points",
        "Pack for sun, movement and mixed surfaces",
        "Save your key bookings and timings offline",
        "Leave room for Greece to surprise you"
      ],
      el: [
        "Αποφασίστε τι είδους ταξίδι θέλετε",
        "Επιλέξτε τον καλύτερο μήνα ταξιδιού",
        "Διατηρήστε το πρόγραμμά σας ρεαλιστικό",
        "Κλείστε νωρίς πλοία και μεταφορές για το καλοκαίρι",
        "Επιλέξτε τη σωστή περιοχή, όχι μόνο το νησί",
        "Ελέγξτε τις ανάγκες σας για τοπικές μετακινήσεις",
        "Χτίστε το πλάνο σας γύρω από τις πτήσεις σας",
        "Πακετάρετε σωστά για ήλιο και περπάτημα",
        "Κρατήστε τις κρατήσεις σας offline",
        "Αφήστε περιθώριο για εκπλήξεις"
      ]
    },
    sections: [
      {
        title: { en: "1. Decide what kind of Greece trip you want", el: "1. Αποφασίστε τι είδους ταξίδι θέλετε" },
        content: {
          en: "Before choosing islands or hotels, decide what kind of holiday you actually want: island hopping, one island plus Athens, family beach holiday, road trip on the mainland, romantic escape, or a food-focused trip. This decision affects almost everything else, from budget to transport.",
          el: "Πριν επιλέξετε νησιά ή ξενοδοχεία, αποφασίστε τι είδους διακοπές πραγματικά θέλετε: island hopping, ένα νησί και Αθήνα, οικογενειακές διακοπές στην παραλία, road trip στην ηπειρωτική χώρα, μια ρομαντική απόδραση ή ένα ταξίδι με επίκεντρο το φαγητό. Αυτή η απόφαση επηρεάζει σχεδόν τα πάντα, από τον προϋπολογισμό μέχρι τις μετακινήσεις."
        }
      },
      {
        title: { en: "2. Choose the best travel month", el: "2. Επιλέξτε τον καλύτερο μήνα" },
        content: {
          en: "Greece is sunny for much of the year, but not every month suits every traveler. Summer brings heat, beach life and peak island energy. Shoulder season is often better for sightseeing, easier logistics and a more balanced experience. Winter can work well for cities, culture and slower travel, while many islands are much quieter and ferry connections are reduced.",
          el: "Η Ελλάδα έχει ήλιο σχεδόν όλο τον χρόνο, αλλά δεν ταιριάζουν όλοι οι μήνες σε κάθε ταξιδιώτη. Το καλοκαίρι φέρνει ζέστη, ζωή στην παραλία και έντονη ενέργεια στα νησιά. Οι ενδιάμεσες εποχές (άνοιξη, φθινόπωρο) είναι συχνά καλύτερες για αξιοθέατα, ευκολότερες μετακινήσεις και μια πιο ισορροπημένη εμπειρία. Ο χειμώνας είναι ιδανικός για πόλεις, πολιτισμό και πιο χαλαρό ρυθμό, ενώ πολλά νησιά είναι πολύ πιο ήσυχα και τα ακτοπλοϊκά μειώνονται."
        }
      },
      {
        title: { en: "3. Keep your itinerary realistic", el: "3. Διατηρήστε το πρόγραμμά σας ρεαλιστικό" },
        content: {
          en: "One of the biggest mistakes in Greece is trying to do too much. For a 7-day trip, one or two bases are usually enough. For 10 days, you can combine Athens with one or two islands, or do a more relaxed island pairing. The goal is not to collect destinations but to enjoy them.",
          el: "Ένα από τα μεγαλύτερα λάθη στην Ελλάδα είναι να προσπαθείς να κάνεις πάρα πολλά. Για ένα ταξίδι 7 ημερών, μία ή δύο βάσεις είναι συνήθως αρκετές. Για 10 ημέρες, μπορείτε να συνδυάσετε την Αθήνα με ένα ή δύο νησιά, ή να κάνετε έναν πιο χαλαρό συνδυασμό νησιών. Ο στόχος δεν είναι να συλλέξετε προορισμούς αλλά να τους απολαύσετε."
        }
      },
      {
        title: { en: "4. Book ferries and transport early for summer", el: "4. Κλείστε πλοία και μεταφορές νωρίς για το καλοκαίρι" },
        content: {
          en: "Greece has a strong sea network and regular island connections, but summer routes are busier and the most convenient options can sell out or become expensive. If your trip depends on specific ferry times, book ahead.",
          el: "Η Ελλάδα διαθέτει ένα ισχυρό ακτοπλοϊκό δίκτυο και τακτικές συνδέσεις νησιών, αλλά τα καλοκαιρινά δρομολόγια είναι πιο γεμάτα και οι πιο βολικές επιλογές μπορεί να εξαντληθούν ή να γίνουν ακριβές. Αν το ταξίδι σας εξαρτάται από συγκεκριμένες ώρες πλοίων, κάντε κράτηση από νωρίς."
        }
      },
      {
        title: { en: "5. Choose the right hotel area, not just the right island", el: "5. Επιλέξτε τη σωστή περιοχή, όχι μόνο το σωστό νησί" },
        content: {
          en: "Many travelers spend too much time choosing the island and too little time choosing the area. In Greece, hotel location shapes your whole trip. The right area can give you easier beach access, better sunset views, fewer car needs or a quieter family base.",
          el: "Πολλοί ταξιδιώτες αφιερώνουν πολύ χρόνο για να επιλέξουν νησί και πολύ λίγο για να επιλέξουν περιοχή. Στην Ελλάδα, η τοποθεσία του ξενοδοχείου καθορίζει όλο το ταξίδι σας. Η σωστή περιοχή μπορεί να σας προσφέρει ευκολότερη πρόσβαση σε παραλία, καλύτερη θέα στο ηλιοβασίλεμα, λιγότερη ανάγκη για αυτοκίνητο ή μια πιο ήσυχη οικογενειακή βάση."
        }
      },
      {
        title: { en: "6. Check how much local transport you will need", el: "6. Ελέγξτε τις ανάγκες σας για τοπικές μετακινήσεις" },
        content: {
          en: "Some islands work well without a car. Others are much easier with one, especially if you want remote beaches, villages or flexible sightseeing. This is one of the most important decisions in trip planning and affects both budget and comfort.",
          el: "Μερικά νησιά προσφέρονται και χωρίς αυτοκίνητο. Άλλα είναι πολύ πιο εύκολα με ένα όχημα, ειδικά αν θέλετε απομακρυσμένες παραλίες, χωριά ή ευελιξία στα αξιοθέατα. Αυτή είναι μια από τις πιο σημαντικές αποφάσεις στον σχεδιασμό και επηρεάζει τόσο τον προϋπολογισμό όσο και την άνεση."
        }
      },
      {
        title: { en: "7. Build around your arrival and departure points", el: "7. Χτίστε το πρόγραμμά σας γύρω από τις πτήσεις σας" },
        content: {
          en: "If you land in Athens, it often makes sense to pair the city with nearby islands or one efficient island route. If you fly directly to an island, your itinerary should stay simpler. Good Greece planning is really about reducing unnecessary transit.",
          el: "Εάν προσγειωθείτε στην Αθήνα, έχει συχνά νόημα να συνδυάσετε την πόλη με κοντινά νησιά ή μια ομαλή νησιωτική διαδρομή. Αν πετάτε απευθείας σε ένα νησί, το πρόγραμμά σας θα πρέπει να παραμείνει πιο απλό. Ο καλός προγραμματισμός έχει να κάνει ουσιαστικά με τη μείωση των περιττών μετακινήσεων."
        }
      },
      {
        title: { en: "8. Pack for sun, movement and mixed surfaces", el: "8. Πακετάρετε σωστά για ήλιο και περπάτημα" },
        content: {
          en: "Even elegant Greek trips involve stairs, uneven streets, ports, beaches and lots of walking. Pack light, bring good shoes, sun protection and clothing that works for heat and wind. On some islands, evenings can feel breezy even in summer.",
          el: "Ακόμα και τα πιο κομψά ελληνικά ταξίδια περιλαμβάνουν σκάλες, ανώμαλους δρόμους, λιμάνια, παραλίες και πολύ περπάτημα. Πακετάρετε ελαφριά, φέρτε καλά παπούτσια, αντηλιακή προστασία και ρούχα που είναι βολικά για ζέστη αλλά και άνεμο. Σε ορισμένα νησιά, τα βράδια μπορεί να έχουν αρκετό αεράκι ακόμα και το καλοκαίρι."
        }
      },
      {
        title: { en: "9. Save your key bookings and timings offline", el: "9. Κρατήστε τις κρατήσεις σας offline" },
        content: {
          en: "Keep screenshots or offline copies of flights, ferries, hotel details and transfer information. This is especially useful when moving between islands.",
          el: "Κρατήστε screenshots ή offline αντίγραφα των πτήσεων, πλοίων, λεπτομερειών ξενοδοχείων και πληροφοριών μεταφοράς. Αυτό είναι ιδιαίτερα χρήσιμο όταν μετακινείστε μεταξύ νησιών όπου ίσως δεν έχετε καλές ταχύτητες internet."
        }
      },
      {
        title: { en: "10. Leave room for Greece to surprise you", el: "10. Αφήστε περιθώριο για εκπλήξεις" },
        content: {
          en: "The best trips in Greece usually include some flexibility: a slower lunch in a village, an extra swim stop, a beach you had not planned, or a local recommendation that changes your day.",
          el: "Τα καλύτερα ταξίδια στην Ελλάδα συνήθως περιλαμβάνουν κάποια ευελιξία: ένα πιο αργό και ξεκούραστο γεύμα σε ένα χωριό, μια επιπλέον στάση για κολύμπι, μια παραλία που δεν είχατε σχεδιάσει, ή μια τοπική σύσταση που αλλάζει τη μέρα σας."
        }
      },
      {
        title: { en: "Conclusion", el: "Συμπέρασμα" },
        content: {
          en: "The best Greece trips are not the ones with the most stops. They are the ones that fit your pace, your season and your style. A practical checklist helps you spend less time stressing about logistics and more time enjoying what Greece does best: sea, food, scenery, culture and that easy Mediterranean feeling.",
          el: "Τα καλύτερα ταξίδια στην Ελλάδα δεν είναι αυτά με τις περισσότερες στάσεις. Είναι αυτά που ταιριάζουν στον ρυθμό, την εποχή και το στιλ σας. Μια πρακτική λίστα προετοιμασίας σας βοηθά να ξοδεύετε λιγότερο χρόνο αγχωμένοι για τα οργανωτικά και περισσότερο χρόνο απολαμβάνοντας ό,τι κάνει καλύτερα η Ελλάδα: θάλασσα, φαγητό, τοπία, πολιτισμό και εκείνη την εύκολη μεσογειακή αίσθηση."
        }
      }
    ]
  },
  {
    slug: "7-and-10-days-in-greece",
    title: { 
      en: "7 Days in Greece / 10 Days in Greece", 
      el: "7 Ημέρες στην Ελλάδα / 10 Ημέρες στην Ελλάδα" 
    },
    description: { 
      en: "A realistic 7 or 10-day Greece itinerary for first-time visitors, with ideas for Athens plus islands, family travel, and relaxed routes.", 
      el: "Ρεαλιστικά προγράμματα 7 ή 10 ημερών στην Ελλάδα για πρώτη φορά, με πρακτικές ιδέες για Αθήνα και νησιά." 
    },
    image: "/images/7days10.webp",
    overview: {
      en: "Seven days in Greece is enough for a memorable first trip, but not enough to see everything. For a solid start, use our [Greece Islands Map Guide](/travel-info/greece-islands-map-guide) to choose a single island region and keep your transit simple. Quality over quantity is the secret to a great 7 or 10-day itinerary.",
      el: "Επτά ημέρες στην Ελλάδα είναι αρκετές για ένα αξέχαστο πρώτο ταξίδι. Για ένα σωστό ξεκίνημα, χρησιμοποίησε τον [Χάρτη & Οδηγό Ελληνικών Νησιών](/travel-info/greece-islands-map-guide) για να επιλέξεις ένα μόνο σύμπλεγμα νησιών. Η ποιότητα πάνω από την ποσότητα είναι το μυστικό."
    },
    points: {
      en: [
        "7 Days Option 1: Athens + Santorini",
        "7 Days Option 2: Athens + Mykonos",
        "7 Days Option 3: One island only",
        "10 Days Option 1: Athens + Santorini + Naxos",
        "10 Days Option 2: Athens + Mykonos + Paros",
        "10 Days Option 3: Crete only + one city night",
        "10 Days Option 4: Corfu + mainland extension"
      ],
      el: [
        "7 Ημέρες: Αθήνα + Σαντορίνη",
        "7 Ημέρες: Αθήνα + Μύκονος",
        "7 Ημέρες: Μόνο ένα νησί",
        "10 Ημέρες: Αθήνα + Σαντορίνη + Νάξος",
        "10 Ημέρες: Αθήνα + Μύκονος + Πάρος",
        "10 Ημέρες: Μόνο Κρήτη",
        "10 Ημέρες: Κέρκυρα + ηπειρωτική χώρα"
      ]
    },
    sections: [
      {
        title: { en: "7 Days Option 1: Athens + Santorini", el: "7 Ημέρες - Επιλογή 1: Αθήνα + Σαντορίνη" },
        content: {
          en: "This is the classic first trip to Greece. Spend two to three days in Athens for history and city life, then fly or ferry to Santorini for views, sunset evenings and a strong Cycladic finish. Santorini is one of Greece’s most iconic islands and works especially well for couples and first-time visitors who want a high-impact experience.",
          el: "Αυτό είναι το κλασικό πρώτο ταξίδι στην Ελλάδα. Περάστε δύο με τρεις ημέρες στην Αθήνα για την ιστορία και τη ζωή της πόλης, και στη συνέχεια πετάξτε ή πάρτε πλοίο για τη Σαντορίνη για τη θέα, τα ηλιοβασιλέματα και ένα δυνατό κυκλαδίτικο φινάλε. Η Σαντορίνη είναι ένα από τα πιο εμβληματικά νησιά και λειτουργεί εξαιρετικά για ζευγάρια."
        }
      },
      {
        title: { en: "7 Days Option 2: Athens + Mykonos", el: "7 Ημέρες - Επιλογή 2: Αθήνα + Μύκονος" },
        content: {
          en: "This version works for travelers who want city, beach clubs, stylish stays and summer energy. Mykonos is known for its cosmopolitan atmosphere, beach lifestyle and nightlife.",
          el: "Αυτή η εκδοχή ταιριάζει σε ταξιδιώτες που θέλουν πόλη, beach clubs, στιλάτη διαμονή και καλοκαιρινή ενέργεια. Η Μύκονος φημίζεται για την κοσμοπολίτικη ατμόσφαιρα, τον τρόπο ζωής στην παραλία και τη νυχτερινή της ζωή."
        }
      },
      {
        title: { en: "7 Days Option 3: One island only", el: "7 Ημέρες - Επιλογή 3: Μόνο ένα νησί" },
        content: {
          en: "If you dislike moving around, choose one island and stay longer. Crete and Corfu are especially good for a one-island week because they offer enough variety for beaches, towns, food and day trips.",
          el: "Εάν δεν σας αρέσουν οι συνεχείς μετακινήσεις, επιλέξτε ένα νησί και μείνετε περισσότερο. Η Κρήτη και η Κέρκυρα είναι ιδιαίτερα καλές επιλογές για μια εβδομάδα σε ένα μόνο νησί, καθώς προσφέρουν αρκετή ποικιλία σε παραλίες, πόλεις, φαγητό και μονοήμερες εκδρομές."
        }
      },
      {
        title: { en: "Sample 7-day flow", el: "Ενδεικτικό πρόγραμμα 7 ημερών" },
        content: {
          en: "Day 1–2: Athens\nDay 3: travel to island\nDay 4–6: island stay\nDay 7: return or final overnight",
          el: "Ημέρα 1–2: Αθήνα\nΗμέρα 3: Ταξίδι στο νησί\nΗμέρα 4–6: Παραμονή στο νησί\nΗμέρα 7: Επιστροφή ή τελευταία διανυκτέρευση"
        }
      },
      {
        title: { en: "7 Days Conclusion", el: "Συμπέρασμα 7 Ημερών" },
        content: {
          en: "A 7-day Greece trip should feel easy, not overpacked. One city plus one island, or one island only, is usually the best formula.",
          el: "Ένα ταξίδι 7 ημερών στην Ελλάδα πρέπει να είναι χαλαρό και όχι ασφυκτικά γεμάτο. Μία πόλη συν ένα νησί, ή μόνο ένα νησί, είναι συνήθως η καλύτερη συνταγή."
        }
      },
      {
        title: { en: "10 Days Option 1: Athens + Santorini + Naxos", el: "10 Ημέρες - Επιλογή 1: Αθήνα + Σαντορίνη + Νάξος" },
        content: {
          en: "A balanced first trip with iconic scenery and a calmer island contrast.",
          el: "Ένα ισορροπημένο πρώτο ταξίδι με εντυπωσιακά τοπία και πιο ήρεμη νησιωτική αντίθεση."
        }
      },
      {
        title: { en: "10 Days Option 2: Athens + Mykonos + Paros", el: "10 Ημέρες - Επιλογή 2: Αθήνα + Μύκονος + Πάρος" },
        content: {
          en: "Best for stylish summer travel with beaches, food and a social atmosphere.",
          el: "Ιδανικό για στιλάτα καλοκαιρινά ταξίδια με παραλίες, φαγητό και έντονη κοινωνική ατμόσφαιρα."
        }
      },
      {
        title: { en: "10 Days Option 3: Crete only + one city night", el: "10 Ημέρες - Επιλογή 3: Μόνο Κρήτη + μία νύχτα στην πόλη" },
        content: {
          en: "Perfect for travelers who want beaches, food, villages and less transit.",
          el: "Τέλειο για ταξιδιώτες που θέλουν παραλίες, φαγητό, χωριά και λιγότερες μετακινήσεις."
        }
      },
      {
        title: { en: "10 Days Option 4: Corfu + mainland extension", el: "10 Ημέρες - Επιλογή 4: Κέρκυρα + επέκταση στην ηπειρωτική χώρα" },
        content: {
          en: "A strong choice for green scenery, culture and a slightly different side of Greece.",
          el: "Μια δυνατή επιλογή για καταπράσινα τοπία, πολιτισμό και μια ελαφρώς διαφορετική πλευρά της Ελλάδας."
        }
      },
      {
        title: { en: "10 Days Conclusion", el: "Συμπέρασμα 10 Ημερών" },
        content: {
          en: "Ten days is where Greece starts to breathe. You have time to see more, but still not so much time that you should overcomplicate things. Keep two or three bases maximum and let each destination actually feel lived in.",
          el: "Στις δέκα ημέρες η Ελλάδα αρχίζει να αναπνέει. Έχετε χρόνο να δείτε περισσότερα, αλλά όχι τόσο πολύ χρόνο που να περιπλέξετε τα πράγματα. Κρατήστε το πολύ δύο ή τρεις βάσεις και νιώστε ουσιαστικά κάθε προορισμό."
        }
      }
    ]
  },
  {
    slug: "family-travel-in-greece",
    title: { en: "Family Travel in Greece", el: "Οικογενειακές Διακοπές στην Ελλάδα" },
    description: { 
      en: "Plan family travel in Greece with ideas for beaches, easy destinations, island choices, museums, food and practical tips for smoother holidays with kids.", 
      el: "Οργανώστε τις οικογενειακές διακοπές σας στην Ελλάδα με ιδέες για παραλίες, εύκολους προορισμούς, νησιά, μουσεία, φαγητό και πρακτικές συμβουλές." 
    },
    image: "/images/family-travel.webp",
    overview: {
      en: "Greece is one of the best family holiday destinations in Europe because it combines sea, food, warm weather, local hospitality and a wide choice of destinations. Official tourism guidance highlights the Greek islands, Crete and Halkidiki among the strongest family travel options, with safe swimming areas, museums, marine parks and outdoor activities all adding to the appeal.",
      el: "Η Ελλάδα είναι ένας από τους καλύτερους προορισμούς για οικογενειακές διακοπές στην Ευρώπη επειδή συνδυάζει θάλασσα, φαγητό, ζεστό καιρό, τοπική φιλοξενία και μεγάλη ποικιλία προορισμών. Οι ταξιδιωτικοί οδηγοί ξεχωρίζουν τα ελληνικά νησιά, την Κρήτη και τη Χαλκιδική ως τις πιο δυνατές επιλογές για οικογένειες, με ασφαλείς παραλίες, μουσεία, θαλάσσια πάρκα και υπαίθριες δραστηριότητες που ενισχύουν την εμπειρία."
    },
    points: {
      en: [
        "Beach-led holidays with safe swimming areas",
        "Simple food children usually enjoy",
        "Outdoor living and exploration",
        "Family-friendly accommodation options"
      ],
      el: [
        "Διακοπές επικεντρωμένες στην παραλία με ασφαλή νερά",
        "Απλό και νόστιμο φαγητό που αρέσει στα παιδιά",
        "Υπαίθρια ζωή και εξερεύνηση στη φύση",
        "Καταλύματα φιλικά προς τις οικογένειες"
      ]
    },
    sections: [
      {
        title: { en: "Crete", el: "Κρήτη" },
        content: {
          en: "Great for beaches, space, food and longer stays.",
          el: "Ιδανική για παραλίες, άπλα, καταπληκτικό φαγητό και μεγαλύτερης διάρκειας παραμονή."
        }
      },
      {
        title: { en: "Corfu", el: "Κέρκυρα" },
        content: {
          en: "Strong for varied family holidays with town, beaches and green scenery.",
          el: "Εξαιρετική για ποικίλες οικογενειακές διακοπές με πόλη, παραλίες και καταπράσινα τοπία."
        }
      },
      {
        title: { en: "Naxos", el: "Νάξος" },
        content: {
          en: "A relaxed island option with easier pace.",
          el: "Μια χαλαρή επιλογή νησιού με πιο ήρεμους ρυθμούς."
        }
      },
      {
        title: { en: "Halkidiki", el: "Χαλκιδική" },
        content: {
          en: "A very strong mainland beach option for families.",
          el: "Μια πολύ δυνατή επιλογή για οικογένειες στην ηπειρωτική χώρα."
        }
      },
      {
        title: { en: "Family travel tips", el: "Συμβουλές για οικογενειακά ταξίδια" },
        content: {
          en: "Keep transfers simple. Avoid too many hotel changes. Prioritize beach access over “famous name” destinations. Choose walkable areas when possible limit transit time, and travel slightly outside peak summer if you want easier pacing.",
          el: "Κρατήστε τις μετακινήσεις απλές. Αποφύγετε τις πολλές αλλαγές ξενοδοχείων. Δώστε προτεραιότητα στην εύκολη πρόσβαση σε παραλίες αντί για υπερβολικά προβεβλημένους προορισμούς. Προτιμήστε περιοχές που περπατιούνται εύκολα και ταξιδέψτε ελαφρώς εκτός της ακραίας υψηλής περιόδου για πιο ήσυχο ρυθμό."
        }
      },
      {
        title: { en: "Conclusion", el: "Συμπέρασμα" },
        content: {
          en: "Family travel in Greece works best when the trip is built around ease: easier beaches, easier meals, easier movement and enough flexibility for rest. Greece is at its best for families when the itinerary feels light and enjoyable rather than overplanned.",
          el: "Τα οικογενειακά ταξίδια στην Ελλάδα πετυχαίνουν περισσότερο όταν το ταξίδι χτίζεται γύρω από την ευκολία: εύκολες παραλίες, εύκολα γεύματα, εύκολες μετακινήσεις και αρκετή ευελιξία για ξεκούραση. Η Ελλάδα είναι στα καλύτερά της για τις οικογένειες όταν το πρόγραμμα είναι χαλαρό και απολαυστικό αντί για υπερβολικά φορτωμένο."
        }
      }
    ]
  },
  {
    slug: "santorini-vs-mykonos",
    title: { en: "Santorini vs Mykonos", el: "Σαντορίνη vs Μύκονος" },
    description: { 
      en: "Compare Santorini vs Mykonos for first-time visitors, couples, nightlife, beaches, scenery, costs and travel style to choose the right Greek island.", 
      el: "Συγκρίνετε τη Σαντορίνη με τη Μύκονο για πρώτη φορά, ζευγάρια, νυχτερινή ζωή, παραλίες, τοπία, κόστος και στιλ ταξιδιού για να επιλέξετε το σωστό νησί." 
    },
    image: "/images/santorini-vs-mykonos.webp",
    overview: {
      en: "Santorini and Mykonos are the two Greek islands most first-time visitors compare, and for good reason. Both are famous, beautiful and easy to fit into a first island itinerary. But they are not interchangeable. Santorini is built around scenery, caldera views and atmosphere, while Mykonos is better known for cosmopolitan beach culture, luxury and nightlife. Official destination descriptions reflect exactly that contrast.",
      el: "Η Σαντορίνη και η Μύκονος είναι τα δύο ελληνικά νησιά που συγκρίνουν οι περισσότεροι επισκέπτες για πρώτη φορά, και για καλό λόγο. Και τα δύο είναι διάσημα, πανέμορφα και εύκολα να ενταχθούν σε ένα πρώτο πρόγραμμα. Όμως, δεν είναι το ίδιο πράγμα. Η Σαντορίνη στηρίζεται στο εντυπωσιακό τοπίο, τη θέα στην Καλντέρα και την ατμόσφαιρα, ενώ η Μύκονος είναι γνωστή για την κοσμοπολίτικη κουλτούρα της παραλίας, την πολυτέλεια και τη νυχτερινή ζωή."
    },
    points: {
      en: [
        "Santorini for dramatic caldera views",
        "Mykonos for cosmopolitan energy",
        "Santorini for romantic getaways",
        "Mykonos for classic soft-sand beaches"
      ],
      el: [
        "Σαντορίνη για δραματική θέα στην Καλντέρα",
        "Μύκονος για έντονη κοσμοπολίτικη ενέργεια",
        "Σαντορίνη για ρομαντικές αποδράσεις",
        "Μύκονος για κλασικές χρυσές αμμουδιές"
      ]
    },
    sections: [
      {
        title: { en: "Choose Santorini if you want…", el: "Επιλέξτε τη Σαντορίνη εάν θέλετε..." },
        content: {
          en: "Santorini is better for dramatic views, romance, honeymoon feel, unique volcanic landscape, and memorable sunset dinners. It is the island you choose when setting matters most.",
          el: "Η Σαντορίνη είναι καλύτερη για δραματική θέα, ρομαντισμό, αίσθηση μήνα του μέλιτος, μοναδικό ηφαιστειακό τοπίο και αξέχαστα δείπνα στο ηλιοβασίλεμα. Είναι το νησί που επιλέγετε όταν το σκηνικό μετράει περισσότερο."
        }
      },
      {
        title: { en: "Choose Mykonos if you want…", el: "Επιλέξτε τη Μύκονο εάν θέλετε..." },
        content: {
          en: "Mykonos is better for beach clubs, nightlife, stylish atmosphere, luxury shopping and dining, and social summer energy.",
          el: "Η Μύκονος είναι καλύτερη για beach clubs, νυχτερινή ζωή, στιλάτη ατμόσφαιρα, πολυτελή ψώνια, φαγητό και έντονη κοινωνική καλοκαιρινή δυναμική."
        }
      },
      {
        title: { en: "Which island is better for first-time visitors?", el: "Ποιο νησί είναι καλύτερο για πρώτη φορά;" },
        content: {
          en: "Santorini is usually better for travelers who want the “wow” factor. Mykonos is usually better for travelers who want energy and lifestyle.\n\nWhich is better for couples? Santorini.\n\nWhich is better for friends? Mykonos.\n\nWhich is better for beaches? Mykonos generally wins for classic beach-day culture, while Santorini is more about the overall landscape than typical soft-sand island expectations.",
          el: "Η Σαντορίνη είναι συνήθως καλύτερη για ταξιδιώτες που αναζητούν το στοιχείο του εντυπωσιασμού (το 'wow' factor). Η Μύκονος ταιριάζει σε όσους θέλουν κίνηση και lifestyle.\n\nΓια ζευγάρια; Σαντορίνη.\n\nΓια παρέες φίλων; Μύκονος.\n\nΓια παραλίες; Η Μύκονος κερδίζει ξεκάθαρα, ενώ η Σαντορίνη αφορά το συνολικό ηφαιστειακό τοπίο παρά τις κλασικές αμμουδιές."
        }
      },
      {
        title: { en: "Conclusion", el: "Συμπέρασμα" },
        content: {
          en: "Santorini and Mykonos are both strong first-trip choices, but they deliver different versions of Greece. Santorini is about views and atmosphere. Mykonos is about social energy and beach-led lifestyle. The right choice depends less on popularity and more on the kind of trip you want to remember.",
          el: "Η Σαντορίνη και η Μύκονος είναι δυνατές επιλογές για το πρώτο σας ταξίδι, αλλά προσφέρουν διαφορετικές εκδοχές της Ελλάδας. Η Σαντορίνη επικεντρώνεται στη θέα και την ατμόσφαιρα. Η Μύκονος στην κοινωνική ενέργεια και το lifestyle της παραλίας. Η σωστή επιλογή εξαρτάται από το τι είδους ταξίδι θέλετε να θυμάστε."
        }
      }
    ]
  },
  {
    slug: "where-to-stay-in-santorini",
    title: { en: "Where to Stay in Santorini", el: "Πού να Μείνεις στη Σαντορίνη" },
    description: {
      en: "A guide to the best areas to stay in Santorini, comparing the caldera edge towns (Oia, Fira, Imerovigli) with the beach resorts (Kamari, Perissa).",
      el: "Ένας οδηγός για τις καλύτερες περιοχές διαμονής στη Σαντορίνη, συγκρίνοντας την καλντέρα (Οία, Φηρά, Ημεροβίγλι) με τα παραθαλάσσια θέρετρα (Καμάρι, Περίσσα)."
    },
    image: "/images/santorini.webp",
    overview: {
      en: "Choosing where to stay in Santorini defines your entire experience. The island is essentially split into two worlds: the dramatic, cliffside towns offering the famous sunset views, and the more relaxed, budget-friendly beach villages on the east coast.",
      el: "Η επιλογή της διαμονής στη Σαντορίνη καθορίζει όλη σας την εμπειρία. Το νησί χωρίζεται ουσιαστικά σε δύο κόσμους: τους δραματικούς οικισμούς στον γκρεμό με τη διάσημη θέα, και τα πιο χαλαρά, οικονομικά παραθαλάσσια χωριά στην ανατολική πλευρά."
    },
    points: {
      en: ["Oia is best for luxury and iconic views", "Fira is best for nightlife and transport", "Imerovigli is best for quiet romance", "Kamari/Perissa are best for beaches and budgets"],
      el: ["Η Οία είναι ιδανική για πολυτέλεια και θέα", "Τα Φηρά είναι καλύτερα για νυχτερινή ζωή και μετακινήσεις", "Το Ημεροβίγλι είναι το καλύτερο για ρομαντική ηρεμία", "Το Καμάρι/Περίσσα είναι καλύτερα για παραλίες και budget"]
    },
    sections: [
      {
        title: { en: "1. Oia: The iconic luxury", el: "1. Οία: Η απόλυτη πολυτέλεια" },
        content: {
          en: "Oia is the postcard image of Santorini. It offers the most spectacular sunsets and luxury boutique hotels with infinity pools. However, it is also the most crowded and expensive area, especially during peak season.",
          el: "Η Οία είναι η καρτ-ποστάλ της Σαντορίνης. Προσφέρει τα πιο εντυπωσιακά ηλιοβασιλέματα και πολυτελή boutique ξενοδοχεία. Ωστόσο, είναι και η πιο πολυσύχναστη και ακριβή περιοχή."
        }
      },
      {
        title: { en: "2. Fira: The vibrant capital", el: "2. Φηρά: Η ζωντανή πρωτεύουσα" },
        content: {
          en: "Fira is the heart of the island's nightlife and dining scene. It still offers incredible caldera views but is busier, noisier, and serves as the main transport hub for buses across the island.",
          el: "Τα Φηρά είναι η καρδιά της νυχτερινής ζωής και της γαστρονομίας του νησιού. Προσφέρουν απίστευτη θέα στην καλντέρα, αλλά είναι πιο θορυβώδη και αποτελούν τον κεντρικό κόμβο μεταφορών."
        }
      },
      {
        title: { en: "3. Imerovigli: The romantic balcony", el: "3. Ημεροβίγλι: Το ρομαντικό μπαλκόνι" },
        content: {
          en: "Often called the 'balcony to the Aegean', Imerovigli sits at the highest point of the caldera. It offers the same stunning views as Oia but with much less crowd, making it perfect for honeymooners.",
          el: "Συχνά αποκαλείται το 'μπαλκόνι του Αιγαίου', το Ημεροβίγλι βρίσκεται στο ψηλότερο σημείο της καλντέρας. Προσφέρει εξίσου εντυπωσιακή θέα με την Οία αλλά με πολύ λιγότερο κόσμο."
        }
      },
      {
        title: { en: "4. Beach Towns (Kamari & Perissa)", el: "4. Παραθαλάσσια θέρετρα (Καμάρι & Περίσσα)" },
        content: {
          en: "If you prefer to wake up and walk straight to the beach, head to the east coast. Kamari and Perissa offer black volcanic sand, family-friendly environments, and significantly lower hotel prices.",
          el: "Αν προτιμάτε να ξυπνάτε και να πηγαίνετε κατευθείαν στην παραλία, επιλέξτε την ανατολική ακτή. Το Καμάρι και η Περίσσα προσφέρουν μαύρη άμμο, οικογενειακό περιβάλλον και χαμηλότερες τιμές."
        }
      }
    ]
  },
  {
    slug: "best-hotels-in-crete-for-families",
    title: { en: "Best Hotels in Crete for Families", el: "Τα Καλύτερα Οικογενειακά Ξενοδοχεία στην Κρήτη" },
    description: {
      en: "Discover the top family-friendly hotels and resorts in Crete, offering kids clubs, water parks, and spacious suites for a stress-free holiday.",
      el: "Ανακαλύψτε τα κορυφαία φιλικά προς την οικογένεια ξενοδοχεία στην Κρήτη, με παιδικά clubs, νεροτσουλήθρες και ευρύχωρες σουίτες."
    },
    image: "/images/crete.webp",
    overview: {
      en: "Crete is arguably the most family-friendly destination in Greece. Its large scale means it has room for sprawling resorts with excellent child-focused amenities, safe shallow beaches, and plenty of activities to keep everyone entertained.",
      el: "Η Κρήτη είναι ίσως ο πιο φιλικός προορισμός για οικογένειες στην Ελλάδα. Το μέγεθός της επιτρέπει μεγάλα resorts με εξαιρετικές παροχές για παιδιά, ασφαλείς ρηχές παραλίες και πολλές δραστηριότητες."
    },
    points: {
      en: ["Look for resorts near Chania or Elounda", "Waterparks are common in larger resorts", "All-inclusive options reduce daily stress", "Ensure beach access is child-friendly (sandy, shallow)"],
      el: ["Αναζητήστε resorts κοντά στα Χανιά ή την Ελούντα", "Οι νεροτσουλήθρες είναι συχνές στα μεγάλα resorts", "Οι all-inclusive επιλογές μειώνουν το άγχος", "Βεβαιωθείτε ότι η παραλία είναι φιλική για παιδιά (αμμώδης, ρηχή)"]
    },
    sections: [
      {
        title: { en: "1. Why Crete for families?", el: "1. Γιατί Κρήτη για οικογένειες;" },
        content: {
          en: "Unlike the steep cliffs of Santorini or the party vibe of Mykonos, Crete offers space, safety, and infrastructure. Resorts here are designed with families in mind, often featuring multiple pools, kids clubs, and easy access to sandy beaches.",
          el: "Σε αντίθεση με τους γκρεμούς της Σαντορίνης ή τη Μύκονο, η Κρήτη προσφέρει χώρο, ασφάλεια και υποδομές. Τα resorts εδώ έχουν σχεδιαστεί με γνώμονα τις οικογένειες, με πολλές πισίνες και εύκολη πρόσβαση στην παραλία."
        }
      },
      {
        title: { en: "2. Chania Region Resorts", el: "2. Resorts στην περιοχή Χανίων" },
        content: {
          en: "The coastline west of Chania (Agia Marina, Platanias) is packed with excellent family hotels. The beaches are sandy and shallow, and you're close enough to the Old Town for an evening stroll.",
          el: "Η ακτογραμμή δυτικά των Χανίων είναι γεμάτη με εξαιρετικά οικογενειακά ξενοδοχεία. Οι παραλίες είναι αμμώδεις και ρηχές, και είστε αρκετά κοντά στην Παλιά Πόλη για βόλτα."
        }
      },
      {
        title: { en: "3. Elounda & Agios Nikolaos", el: "3. Ελούντα & Άγιος Νικόλαος" },
        content: {
          en: "If you're looking for luxury family resorts, the eastern side of Crete is the place to be. Elounda hosts some of the most prestigious properties in Greece, complete with private beaches, childcare services, and gourmet dining.",
          el: "Αν αναζητάτε πολυτελή οικογενειακά resorts, η ανατολική πλευρά της Κρήτης είναι το ιδανικό μέρος. Η Ελούντα φιλοξενεί μερικά από τα καλύτερα ξενοδοχεία στην Ελλάδα, με ιδιωτικές παραλίες και υπηρεσίες φύλαξης."
        }
      }
    ]
  },
  {
    slug: "best-boat-trips-in-kefalonia",
    title: { en: "Best Boat Trips in Kefalonia", el: "Οι Καλύτερες Εκδρομές με Σκάφος στην Κεφαλονιά" },
    description: {
      en: "Explore the hidden beaches, sea caves, and neighboring islands with the best boat tours and cruises available from Kefalonia.",
      el: "Εξερευνήστε κρυφές παραλίες, θαλάσσιες σπηλιές και γειτονικά νησιά με τις καλύτερες εκδρομές και κρουαζιέρες από την Κεφαλονιά."
    },
    image: "/images/kefalonia.webp",
    overview: {
      en: "Kefalonia's coastline is dramatic and diverse, but many of its best spots are inaccessible by car. Taking a boat trip is essential to truly appreciate the island's turquoise waters, hidden coves, and close proximity to Ithaca and Zakynthos.",
      el: "Η ακτογραμμή της Κεφαλονιάς είναι εντυπωσιακή, αλλά πολλά από τα καλύτερα σημεία της δεν είναι προσβάσιμα με αυτοκίνητο. Η εκδρομή με σκάφος είναι απαραίτητη για να εκτιμήσετε τα γαλαζοπράσινα νερά και τους κρυφούς όρμους."
    },
    points: {
      en: ["Sail to mythical Ithaca for a day trip", "Discover the hidden beaches of the north coast", "Spot Caretta-Caretta turtles in Argostoli", "Rent a private motorboat in Fiskardo"],
      el: ["Ταξιδέψτε στη μυθική Ιθάκη για μια ημερήσια εκδρομή", "Ανακαλύψτε τις κρυφές παραλίες της βόρειας ακτής", "Δείτε χελώνες Caretta-Caretta στο Αργοστόλι", "Ενοικιάστε ιδιωτικό σκάφος στο Φισκάρδο"]
    },
    sections: [
      {
        title: { en: "1. Day Cruises to Ithaca", el: "1. Ημερήσιες κρουαζιέρες στην Ιθάκη" },
        content: {
          en: "The most popular boat trip from Kefalonia is the crossing to Odysseus's homeland, Ithaca. These full-day cruises usually depart from Sami or Skala and include swimming stops in pristine bays and a visit to Vathy or Kioni.",
          el: "Η πιο δημοφιλής εκδρομή με σκάφος από την Κεφαλονιά είναι το πέρασμα στην πατρίδα του Οδυσσέα, την Ιθάκη. Οι κρουαζιέρες αναχωρούν συνήθως από τη Σάμη ή τη Σκάλα."
        }
      },
      {
        title: { en: "2. Glass Bottom Tours & Turtles", el: "2. Tours με γυάλινο πάτο & Χελώνες" },
        content: {
          en: "Perfect for families, glass-bottom boat tours operate mainly out of Argostoli. They offer a great chance to spot the resident Loggerhead turtles (Caretta-Caretta) swimming near the harbor.",
          el: "Ιδανικά για οικογένειες, τα tours με γυάλινο πάτο αναχωρούν κυρίως από το Αργοστόλι. Προσφέρουν μια εξαιρετική ευκαιρία να δείτε τις χελώνες Caretta-Caretta κοντά στο λιμάνι."
        }
      },
      {
        title: { en: "3. Private Boat Hire (Fiskardo)", el: "3. Ενοικίαση ιδιωτικού σκάφους (Φισκάρδο)" },
        content: {
          en: "In the north, renting a small motorboat (no license required) from Fiskardo is a highlight. You can explore the narrow strait between Kefalonia and Ithaca, dropping anchor in completely deserted coves.",
          el: "Στα βόρεια, η ενοικίαση ενός μικρού μηχανοκίνητου σκάφους από το Φισκάρδο είναι μοναδική εμπειρία. Μπορείτε να εξερευνήσετε το στενό μεταξύ Κεφαλονιάς και Ιθάκης."
        }
      }
    ]
  },
  {
    slug: "things-to-do-in-lesvos",
    title: { en: "Things to Do in Lesvos", el: "Τι να Κάνεις στη Λέσβο" },
    description: {
      en: "Top attractions, activities, and local experiences in Lesvos, from the Petrified Forest to traditional ouzo tasting.",
      el: "Κορυφαία αξιοθέατα και τοπικές εμπειρίες στη Λέσβο, από το Απολιθωμένο Δάσος μέχρι την παραδοσιακή γευσιγνωσία ούζου."
    },
    image: "/images/lesvos.webp",
    overview: {
      en: "Lesvos is an island for explorers and food lovers. It's not a destination for rapid sightseeing, but a place to slow down, visit traditional villages, explore geological wonders, and enjoy some of the best culinary traditions in the Aegean.",
      el: "Η Λέσβος είναι ένα νησί για εξερευνητές και λάτρεις του φαγητού. Δεν είναι προορισμός για γρήγορο sightseeing, αλλά ένα μέρος για να χαλαρώσεις, να επισκεφτείς παραδοσιακά χωριά και να απολαύσεις κορυφαία γαστρονομία."
    },
    points: {
      en: ["Marvel at the UNESCO Petrified Forest", "Taste world-class Ouzo in Plomari", "Wander the cobbled streets of Molyvos", "Relax in ancient thermal springs"],
      el: ["Θαυμάστε το Απολιθωμένο Δάσος (UNESCO)", "Δοκιμάστε παγκόσμιας κλάσης Ούζο στο Πλωμάρι", "Περπατήστε στα πλακόστρωτα του Μολύβου", "Χαλαρώστε σε αρχαίες ιαματικές πηγές"]
    },
    sections: [
      {
        title: { en: "1. The Petrified Forest of Sigri", el: "1. Το Απολιθωμένο Δάσος Σιγρίου" },
        content: {
          en: "A UNESCO Global Geopark, this rare geological monument was formed 20 million years ago by volcanic eruptions. The Natural History Museum in Sigri provides incredible context to the colorful fossilized tree trunks scattered across the landscape.",
          el: "Ένα Παγκόσμιο Γεωπάρκο της UNESCO, αυτό το σπάνιο γεωλογικό μνημείο σχηματίστηκε πριν από 20 εκατομμύρια χρόνια. Το Μουσείο Φυσικής Ιστορίας στο Σίγρι παρέχει απίστευτες πληροφορίες."
        }
      },
      {
        title: { en: "2. Ouzo Tasting in Plomari", el: "2. Γευσιγνωσία Ούζου στο Πλωμάρι" },
        content: {
          en: "Lesvos is the spiritual home of Ouzo. The town of Plomari is filled with historic distilleries where you can learn about the anise-flavored spirit's production and, of course, enjoy tastings paired with local meze.",
          el: "Η Λέσβος είναι η πνευματική πατρίδα του Ούζου. Το Πλωμάρι είναι γεμάτο ιστορικά αποστακτήρια όπου μπορείτε να μάθετε για την παραγωγή του και να κάνετε γευσιγνωσία με τοπικούς μεζέδες."
        }
      },
      {
        title: { en: "3. Molyvos Castle and Village", el: "3. Κάστρο και Οικισμός Μολύβου" },
        content: {
          en: "Crowned by a Byzantine castle, Molyvos (Mithymna) is one of the most beautiful traditional villages in Greece. Its stone houses, wisteria-draped alleys, and vibrant harbor make it a must-visit.",
          el: "Στεφανωμένος από ένα βυζαντινό κάστρο, ο Μόλυβος είναι ένα από τα πιο όμορφα παραδοσιακά χωριά της Ελλάδας. Τα πέτρινα σπίτια και το γραφικό λιμάνι τον καθιστούν ιδανικό προορισμό."
        }
      }
    ]
  },
  {
    slug: "best-tours-in-mykonos",
    title: { en: "Best Tours in Mykonos", el: "Οι Καλύτερες Εκδρομές στη Μύκονο" },
    description: {
      en: "Discover the best guided tours, sailing trips, and historical excursions in Mykonos to upgrade your island experience.",
      el: "Ανακαλύψτε τις καλύτερες ξεναγήσεις, ιστιοπλοϊκές εκδρομές και ιστορικές εξορμήσεις στη Μύκονο για να αναβαθμίσετε την εμπειρία σας."
    },
    image: "/images/mykonos.webp",
    overview: {
      en: "Beyond the beach clubs and vibrant nightlife, Mykonos offers incredible experiences on the water and a deep dive into ancient history. Booking a tour is the best way to see the island's quieter side and the sacred neighboring island of Delos.",
      el: "Πέρα από τα beach clubs και την έντονη νυχτερινή ζωή, η Μύκονος προσφέρει απίστευτες εμπειρίες στο νερό και μια βαθιά βουτιά στην αρχαία ιστορία. Η κράτηση μιας εκδρομής είναι ο καλύτερος τρόπος για να δείτε την πιο ήσυχη πλευρά του νησιού."
    },
    points: {
      en: ["Take a guided archaeological tour of Delos", "Sail to the uninhabited island of Rhenia", "Join a traditional cooking class", "Explore the island by Jeep safari"],
      el: ["Ξενάγηση στον αρχαιολογικό χώρο της Δήλου", "Ιστιοπλοΐα στο ακατοίκητο νησί της Ρήνειας", "Συμμετοχή σε παραδοσιακό μάθημα μαγειρικής", "Εξερεύνηση του νησιού με Jeep safari"]
    },
    sections: [
      {
        title: { en: "1. The Sacred Island of Delos", el: "1. Το ιερό νησί της Δήλου" },
        content: {
          en: "Just a short boat ride from Mykonos lies Delos, the mythological birthplace of Apollo and Artemis. It is one of the most important archaeological sites in Greece. A guided tour is highly recommended to understand the ruins.",
          el: "Σε μικρή απόσταση με το πλοίο από τη Μύκονο βρίσκεται η Δήλος, η μυθολογική γενέτειρα του Απόλλωνα και της Άρτεμης. Αποτελεί έναν από τους σημαντικότερους αρχαιολογικούς χώρους στην Ελλάδα."
        }
      },
      {
        title: { en: "2. Catamaran Sailing to Rhenia", el: "2. Ιστιοπλοΐα με καταμαράν στη Ρήνεια" },
        content: {
          en: "Escape the crowds by sailing to Rhenia, an uninhabited island next to Delos. Catamaran cruises offer swimming in crystal-clear waters, snorkeling, and onboard BBQ lunches.",
          el: "Ξεφύγετε από τα πλήθη ταξιδεύοντας στη Ρήνεια, ένα ακατοίκητο νησί δίπλα στη Δήλο. Οι κρουαζιέρες με καταμαράν προσφέρουν κολύμπι σε κρυστάλλινα νερά και BBQ στο σκάφος."
        }
      },
      {
        title: { en: "3. Jeep Safaris & Hidden Beaches", el: "3. Jeep Safaris & Κρυφές Παραλίες" },
        content: {
          en: "The rugged interior of Mykonos is often ignored by visitors. A Jeep safari takes you to hidden chapels, quiet northern beaches (like Fokos), and offers panoramic views of the Cyclades.",
          el: "Το τραχύ εσωτερικό της Μυκόνου συχνά αγνοείται από τους επισκέπτες. Ένα Jeep safari σας πηγαίνει σε κρυφά ξωκλήσια, ήσυχες βόρειες παραλίες και προσφέρει πανοραμική θέα."
        }
      }
    ]
  },
  {
    slug: "where-to-stay-in-athens-for-first-time-visitors",
    title: { en: "Where to Stay in Athens for First-Timers", el: "Πού να Μείνεις στην Αθήνα (Πρώτη Φορά)" },
    description: {
      en: "A guide to the best neighborhoods in Athens for first-time visitors, comparing Plaka, Monastiraki, Koukaki, and Syntagma.",
      el: "Ένας οδηγός για τις καλύτερες γειτονιές της Αθήνας για όσους την επισκέπτονται πρώτη φορά."
    },
    image: "/images/athens.webp",
    overview: {
      en: "Athens is a sprawling metropolis, but the historic center is surprisingly compact. For first-time visitors, staying central is crucial to minimize transit time and maximize your ability to walk to the Acropolis and major museums.",
      el: "Η Αθήνα είναι μια τεράστια μητρόπολη, αλλά το ιστορικό της κέντρο είναι εκπληκτικά συμπαγές. Για τους επισκέπτες που έρχονται πρώτη φορά, η διαμονή στο κέντρο είναι καθοριστική για να μπορούν να περπατήσουν μέχρι την Ακρόπολη."
    },
    points: {
      en: ["Plaka is best for romance and village feel", "Monastiraki is best for vibrant street life", "Syntagma is best for transport and luxury", "Koukaki is best for local vibes near the Acropolis"],
      el: ["Η Πλάκα είναι ιδανική για ρομάντζο", "Το Μοναστηράκι είναι καλύτερο για ζωντανή ατμόσφαιρα", "Το Σύνταγμα είναι καλύτερο για συγκοινωνίες και πολυτέλεια", "Το Κουκάκι είναι καλύτερο για τοπική αίσθηση κοντά στην Ακρόπολη"]
    },
    sections: [
      {
        title: { en: "1. Plaka: The Neighborhood of the Gods", el: "1. Πλάκα: Η γειτονιά των Θεών" },
        content: {
          en: "Nestled right under the Acropolis, Plaka is the oldest and most picturesque neighborhood in Athens. It is almost entirely pedestrianized, filled with neoclassical homes, tavernas, and bougainvillea-draped alleys.",
          el: "Χτισμένη ακριβώς κάτω από την Ακρόπολη, η Πλάκα είναι η παλαιότερη και πιο γραφική γειτονιά της Αθήνας. Είναι σχεδόν εξ ολοκλήρου πεζοδρομημένη, γεμάτη με νεοκλασικά σπίτια και ταβέρνες."
        }
      },
      {
        title: { en: "2. Syntagma Square: The Beating Heart", el: "2. Πλατεία Συντάγματος: Η καρδιά της πόλης" },
        content: {
          en: "Syntagma is the political and transport hub of Athens. It offers the best connectivity (direct metro to the airport) and houses many of the city's historic 5-star hotels. It's busy but incredibly convenient.",
          el: "Το Σύνταγμα είναι ο πολιτικός και συγκοινωνιακός κόμβος της Αθήνας. Προσφέρει την καλύτερη συνδεσιμότητα (απευθείας μετρό για αεροδρόμιο) και φιλοξενεί πολλά από τα ιστορικά ξενοδοχεία 5 αστέρων της πόλης."
        }
      },
      {
        title: { en: "3. Koukaki: The Cool Local Choice", el: "3. Κουκάκι: Η τοπική, αυθεντική επιλογή" },
        content: {
          en: "Located just south of the Acropolis Museum, Koukaki has transformed into a trendy neighborhood with excellent specialty coffee shops, brunch spots, and authentic bistros, while still feeling residential.",
          el: "Τοποθετημένο ακριβώς νότια του Μουσείου Ακρόπολης, το Κουκάκι έχει μετατραπεί σε μια μοντέρνα γειτονιά με εξαιρετικά καφέ, μέρη για brunch και αυθεντικά bistros, διατηρώντας παράλληλα τον οικιστικό του χαρακτήρα."
        }
      }
    ]
  }
];

export const hotels: HotelCard[] = [
  {
    slug: "santorini",
    name: "Hotels in Santorini",
    place: "Santorini",
    info: {
      en: "Elegant cave-style suites with sea views and a luxury island feeling.",
      el: "Κομψές cave-style σουίτες με θέα στη θάλασσα και luxury νησιώτικη αίσθηση.",
    },
    image: "/images/hotel-santorini.webp",
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
    slug: "corfu",
    name: "Hotels in Corfu",
    place: "Corfu",
    info: {
      en: "A relaxed family-friendly stay close to beaches, restaurants and green scenery.",
      el: "Χαλαρή οικογενειακή διαμονή κοντά σε παραλίες, εστιατόρια και πράσινα τοπία.",
    },
    image: "/images/hotel-corfu.webp",
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
    slug: "lesvos",
    name: "Hotels & Rooms to let in Lesvos",
    place: "Lesvos",
    info: {
      en: "Discover top-rated accommodation in Lesvos, from picturesque seaside rooms to traditional boutique stays.",
      el: "Ανακαλύψτε επιλεγμένη διαμονή στη Λέσβο, από παραθαλάσσια δωμάτια μέχρι παραδοσιακά boutique καταλύματα.",
    },
    image: "/images/businesses/Iren/2.webp",
    overview: {
      en: "Lesvos is a large island with highly diverse and authentic accommodation options. Rather than oversized resorts, you'll find charming local hotels and peaceful rooms to let that connect you deeply with the island's culture.",
      el: "Η Λέσβος είναι ένα μεγάλο νησί με εξαιρετικά ποικίλες και αυθεντικές επιλογές διαμονής. Αντί για απρόσωπα resorts, θα βρείτε πανέμορφα τοπικά ξενοδοχεία και ήσυχα ενοικιαζόμενα δωμάτια.",
    },
    description: {
      en: "Looking for the perfect stay in Lesvos? Our curated guide focuses on businesses that offer real value and a genuinely relaxing experience. Whether you want to relax quietly or use it as a base for island excursions, Lesvos offers exactly what you need.",
      el: "Αναζητάτε την τέλεια διαμονή στη Λέσβο; Ο οδηγός μας εστιάζει σε επιχειρήσεις που προσφέρουν πραγματική αξία και μια αυθεντικά χαλαρωτική εμπειρία. Είτε θέλετε να χαλαρώσετε είτε να το χρησιμοποιήσετε ως ορμητήριο, η Λέσβος προσφέρει ακριβώς ό,τι χρειάζεστε.",
    },
    features: {
      en: ["Comfortable beds & nice views", "Peaceful & authentic environment", "Local Lesvian hospitality", "Close to top beaches & villages", "Free WiFi and parking essentials", "Ideal starting point for road trips"],
      el: ["Άνετα κρεβάτια & ωραία θέα", "Ήσυχο & αυθεντικό περιβάλλον", "Τοπική λεσβιακή φιλοξενία", "Κοντά σε κορυφαίες παραλίες", "Δωρεάν WiFi & πάρκινγκ", "Ιδανική αφετηρία για εξορμήσεις"],
    },
    services: {
      en: ["Spacious and beautifully decorated rooms", "Daily room freshness and cleaning", "Air conditioning for hot summer days"],
      el: ["Ευρύχωρα και όμορφα διακοσμημένα δωμάτια", "Καθημερινή φροντίδα και καθαριότητα", "Κλιματισμός για τις ζεστές μέρες"],
    },
    featuredBusinesses: ["iren-rooms"],
  },
];

export const food: FoodCard[] = [
  {
    slug: "seafood-by-the-harbor",
    title: { en: "Lesvos Gastronomy Guide", el: "Γαστρονομικός Οδηγός Λέσβου: Πού να Φας και Τι να Δοκιμάσεις στο Νησί του Ούζου" },
    place: "Lesvos",
    metaTitle: {
      en: "What to Eat in Lesvos: Best Taverns, Ouzo & Local Food Guide",
      el: "Τι να Φας στη Λέσβο: Καλύτερες Ταβέρνες, Ούζο & Τοπικός Γαστρονομικός Οδηγός",
    },
    metaDescription: {
      en: "Discover the gastronomy of Lesvos: the best places to eat, seafood tavernas, ouzeris, local products and authentic recipes. A complete food guide for travelers.",
      el: "Ανακάλυψε τη γαστρονομία της Λέσβου: τα καλύτερα μέρη για φαγητό, ψαροταβέρνες, ουζερί, τοπικά προϊόντα και αυθεντικές λεσβιακές συνταγές. Πλήρης food guide για ταξιδιώτες.",
    },
    keywords: {
      en: ["Lesvos cuisine", "where to eat in Lesvos", "local Lesvos delicacies", "food in Mytilene", "Kalloni sardines", "Plomari ouzo"],
      el: ["κουζίνα Λέσβου", "πού να φάω στη Λέσβο", "τοπικές νοστιμιές Λέσβου", "φαγητό στη Μυτιλήνη", "σαρδέλες Καλλονής", "ούζο Πλωμαρίου"],
    },
    info: {
      en: "A complete guide to the authentic local flavors, ouzo traditions, and best eateries across the island of Lesvos.",
      el: "Ένας πλήρης οδηγός για τις αυθεντικές γεύσεις, την παράδοση του ούζου και τα καλύτερα στέκια φαγητού στη Λέσβο.",
    },
    image: "/images/tours/lesvos-food.webp",
    overview: {
      en: "Lesvos is one of Greece's most authentic gastronomic destinations. It's not just an island with beautiful beaches — it's a place where tradition, the sea, and Asia Minor roots meet at the table.\n\nIf you're wondering where to eat well in Lesvos and which local delicacies you shouldn't miss, this guide will give you a complete picture of Lesvian cuisine.\n\nThe cuisine of Lesvos is characterized by:\n\n• Fresh fish and seafood\n• A variety of meze for ouzo\n• Rich olive oil\n• Traditional cheeses\n• Aromatic herbs and seasonal vegetables\n\nIts geographical position opposite Asia Minor has deeply influenced its flavors. Many dishes have intense aromas, spices, and techniques that recall the East, yet remain authentically Greek.",
      el: "Η Λέσβος είναι ένας από τους πιο αυθεντικούς γαστρονομικούς προορισμούς της Ελλάδας. Δεν είναι απλώς ένα νησί με ωραίες παραλίες — είναι ένας τόπος όπου η παράδοση, η θάλασσα και οι μικρασιατικές ρίζες συναντιούνται στο τραπέζι.\n\nΑν αναρωτιέσαι πού να φας καλά στη Λέσβο και ποιες είναι οι τοπικές νοστιμιές που δεν πρέπει να χάσεις, αυτός ο οδηγός θα σου δώσει ολοκληρωμένη εικόνα για τη λεσβιακή κουζίνα.\n\nΗ κουζίνα της Λέσβου χαρακτηρίζεται από:\n\n• Φρέσκα ψάρια και θαλασσινά\n• Ποικιλία μεζέδων για ούζο\n• Πλούσιο ελαιόλαδο\n• Παραδοσιακά τυριά\n• Αρωματικά χόρτα και εποχικά λαχανικά\n\nΗ γεωγραφική της θέση απέναντι από τη Μικρά Ασία έχει επηρεάσει βαθιά τις γεύσεις. Πολλά πιάτα έχουν έντονα αρώματα, μπαχαρικά και τεχνικές που θυμίζουν ανατολή, αλλά παραμένουν αυθεντικά ελληνικά.",
    },
    specialties: {
      en: ["Kalloni Sardines", "Ladotyri Cheese", "Local Ouzo", "Fresh Seafood"],
      el: ["Σαρδέλες Καλλονής", "Λαδοτύρι Μυτιλήνης", "Τοπικό Ούζο", "Φρέσκα Θαλασσινά"],
    },
    sections: [
      {
        title: { en: "Where to Eat Well in Lesvos", el: "Πού να Φας Καλά στη Λέσβο" },
        text: {
          en: "**Mytilene – The Heart of Ouzeris**\nThe city of Mytilene is the gastronomic center of the island. Traditional ouzeris serve:\n• Ladotyri saganaki\n• Dolmadakia (yaprakia)\n• Mussel pilaf\n• Marinated anchovies\n• Assorted seafood\nHere the experience is ritualistic: you order ouzo and small plates arrive successively to accompany it.\n\n**Molyvos – Romantic Dining with a View**\nMolyvos combines good food with a unique atmosphere. Besides traditional tavernas, there are restaurants offering a modern approach to local cuisine.\nTry:\n• Lesvos Kavourmas\n• Fava with caramelized onions\n• Local cheeses with honey\n• Fresh catch of the day\n\n**Skala Eresou – Seafood Delight**\nIn Skala Eresou you will find fish tavernas right on the waves. The menu includes:\n• Fried calamari\n• Grilled octopus\n• Grilled sardines\n• Sea fennel salad\nAn ideal spot for sunset views over the Aegean.\n\n**Sigri – Authentic Fish Dining**\nSigri is quiet and authentic. Its tavernas are famous for:\n• Lakerda (pickled bonito)\n• Kalloni sardines\n• Lobster pasta (when fresh lobster is available)\nHere you eat simply, freshly, and without unnecessary frills.\n\n**Plomari – The Island of Ouzo**\nPlomari is inextricably linked to ouzo. Besides visiting distilleries, you can enjoy excellent meze by the sea.\nPair with:\n• Ladotyri\n• Chickpea fritters (revithokeftedes)\n• Seafood\n• Local ouzo",
          el: "**Μυτιλήνη – Η Καρδιά των Ουζερί**\nΗ πόλη της Μυτιλήνης είναι το γαστρονομικό κέντρο του νησιού. Τα παραδοσιακά ουζερί σερβίρουν:\n• Λαδοτύρι σαγανάκι\n• Ντολμαδάκια (γιαπράκια)\n• Μυδοπίλαφο\n• Γαύρο μαρινάτο\n• Ποικιλία θαλασσινών\nΕδώ η εμπειρία είναι τελετουργική: παραγγέλνεις ούζο και έρχονται διαδοχικά μικρά πιάτα για να το συνοδεύσουν.\n\n**Μόλυβος – Ρομαντικό Φαγητό με Θέα**\nΟ Μόλυβος συνδυάζει καλό φαγητό και μοναδική ατμόσφαιρα. Εκτός από παραδοσιακές ταβέρνες, υπάρχουν εστιατόρια που δίνουν σύγχρονη προσέγγιση στην τοπική κουζίνα.\nΔοκίμασε:\n• Καβουρμά Λέσβου\n• Φάβα με καραμελωμένα κρεμμύδια\n• Τοπικά τυριά με μέλι\n• Φρέσκο ψάρι ημέρας\n\n**Σκάλα Ερεσού – Θαλασσινή Απόλαυση**\nΣτη Σκάλα Ερεσού θα βρεις ψαροταβέρνες πάνω στο κύμα. Το μενού περιλαμβάνει:\n• Καλαμαράκια τηγανητά\n• Χταπόδι στα κάρβουνα\n• Σαρδέλες ψητές\n• Σαλάτα με κρίταμο\nΙδανικό μέρος για ηλιοβασίλεμα με θέα το Αιγαίο.\n\n**Σίγρι – Αυθεντική Ψαροφαγία**\nΤο Σίγρι είναι ήσυχο και αυθεντικό. Οι ταβέρνες του φημίζονται για:\n• Λακέρδα\n• Σαρδέλες Καλλονής\n• Αστακομακαρονάδα (όταν υπάρχει φρέσκος αστακός)\nΕδώ τρως απλά, φρέσκα και χωρίς περιττές φιοριτούρες.\n\n**Πλωμάρι – Το Νησί του Ούζου**\nΤο Πλωμάρι είναι άρρηκτα συνδεδεμένο με το ούζο. Εκτός από επισκέψεις σε αποστακτήρια, μπορείς να απολαύσεις εξαιρετικούς μεζέδες δίπλα στη θάλασσα.\nΣυνδύασε:\n• Λαδοτύρι\n• Ρεβυθοκεφτέδες\n• Θαλασσινά\n• Τοπικό ούζο"
        }
      },
      {
        title: { en: "Must-Try Local Delicacies", el: "Τοπικές Νοστιμιές που Πρέπει να Δοκιμάσεις" },
        text: {
          en: "**Kalloni Sardines**\nSmall, tender and rich in flavor. Considered among the best in Greece.\n\n**Ladotyri of Mytilene**\nA spicy cheese that matures in olive oil. Ideal for meze.\n\n**Lesvos Kavourmas**\nA traditional cured meat with intense flavor.\n\n**Sougania**\nOnions stuffed with minced meat and rice, a characteristic Asia Minor dish.\n\n**Stuffed Zucchini Flowers**\nA light, aromatic summer dish.\n\n**Sweets of Lesvos**\nGastronomy doesn't stop at the main course. Try:\n• Macaroons (Amygdalota)\n• Spoon sweets\n• Baklava\n• Pasteli\nPair them with Greek coffee or liqueur.",
          el: "**Σαρδέλες Καλλονής**\nΜικρές, τρυφερές και πλούσιες σε γεύση. Θεωρούνται από τις καλύτερες στην Ελλάδα.\n\n**Λαδοτύρι Μυτιλήνης**\nΠικάντικο τυρί που ωριμάζει μέσα σε ελαιόλαδο. Ιδανικό για μεζέ.\n\n**Καβουρμάς Λέσβου**\nΠαραδοσιακό αλλαντικό με έντονη γεύση.\n\n**Σουγάνια**\nΚρεμμύδια γεμιστά με κιμά και ρύζι, χαρακτηριστικό μικρασιατικό πιάτο.\n\n**Κολοκυθοανθοί γεμιστοί**\nΕλαφρύ, αρωματικό καλοκαιρινό πιάτο.\n\n**Γλυκά της Λέσβου**\nΗ γαστρονομία δεν σταματά στο κυρίως πιάτο. Δοκίμασε:\n• Αμυγδαλωτά\n• Γλυκά του κουταλιού\n• Μπακλαβά\n• Παστέλι\nΣυνόδευσέ τα με ελληνικό καφέ ή λικέρ."
        }
      },
      {
        title: { en: "Why Lesvos is an Ideal Destination for Food Lovers", el: "Γιατί η Λέσβος Είναι Ιδανικός Προορισμός για Food Lovers" },
        text: {
          en: "Lesvos offers:\n✔ Authentic flavors without touristic exaggeration\n✔ High quality local products\n✔ Great tradition in ouzo\n✔ A combination of mountain and sea at the same table\n\nIt is not about \"showcase gastronomy\", but about flavors that have depth, history and character.\n\n**Tips to Enjoy Food in Lesvos**\n• Always ask what the dish of the day is\n• Prefer seasonal ingredients\n• Don't rush — eating here is an experience\n• Try local ouzo with every meal\n\n**Conclusion**\nThe cuisine of Lesvos is authentic, deeply rooted in history and full of flavor. From Kalloni sardines to ladotyri and Plomari ouzo, the island offers a complete gastronomic experience.\n\nIf you are planning a trip to Lesvos, leave room in your itinerary — and in your stomach — to discover the local delicacies.",
          el: "Η Λέσβος προσφέρει:\n✔ Αυθεντικές γεύσεις χωρίς τουριστική υπερβολή\n✔ Υψηλής ποιότητας τοπικά προϊόντα\n✔ Μεγάλη παράδοση στο ούζο\n✔ Συνδυασμό βουνού και θάλασσας στο ίδιο τραπέζι\n\nΔεν πρόκειται για «γαστρονομία επίδειξης», αλλά για γεύσεις που έχουν βάθος, ιστορία και χαρακτήρα.\n\n**Tips για Να Απολαύσεις το Φαγητό στη Λέσβο**\n• Ρώτησε πάντα ποιο είναι το πιάτο ημέρας\n• Προτίμησε εποχικά υλικά\n• Μην βιαστείς — το φαγητό εδώ είναι εμπειρία\n• Δοκίμασε τοπικό ούζο με κάθε γεύμα\n\n**Συμπέρασμα**\nΗ κουζίνα της Λέσβου είναι αυθεντική, βαθιά ριζωμένη στην ιστορία και γεμάτη γεύση. Από τις σαρδέλες Καλλονής μέχρι το λαδοτύρι και το ούζο Πλωμαρίου, το νησί προσφέρει μια ολοκληρωμένη γαστρονομική εμπειρία.\n\nΑν σχεδιάζεις ταξίδι στη Λέσβο, άφησε χώρο στο πρόγραμμα — και στο στομάχι σου — για να ανακαλύψεις τις τοπικές νοστιμιές."
        }
      }
    ]
  },
  {
    slug: "sunset-cocktails-dinner",
    title: {
      en: "Santorini Local Flavors",
      el: "Τοπικές Γεύσεις Σαντορίνης",
    },
    metaTitle: {
      en: "Santorini Local Flavors: Sunset Cocktails & Romantic Dinner with Caldera Views",
      el: "Τοπικές Γεύσεις Σαντορίνης: Cocktails στο Ηλιοβασίλεμα & Ρομαντικό Δείπνο με Θέα την Καλντέρα",
    },
    metaDescription: {
      en: "Discover the premium side of Santorini through sunset cocktails, fine dining with caldera views, and unforgettable evenings in Oia, Imerovigli & Fira. A complete food & drink guide.",
      el: "Ανακαλύψτε την premium πλευρά της Σαντορίνης μέσα από cocktails στο ηλιοβασίλεμα, fine dining με θέα την καλντέρα και αξέχαστες βραδιές σε Οία, Ημεροβίγλι & Φηρά. Ένας πλήρης οδηγός φαγητού & ποτού.",
    },
    keywords: {
      en: ["Santorini sunset dinner", "Santorini cocktails with view", "fine dining Santorini", "caldera restaurants", "romantic dinner Santorini", "Oia sunset drinks"],
      el: ["δείπνο ηλιοβασίλεμα Σαντορίνη", "cocktails με θέα Σαντορίνη", "fine dining Σαντορίνη", "εστιατόρια καλντέρα", "ρομαντικό δείπνο Σαντορίνη", "ποτά στο ηλιοβασίλεμα Οία"],
    },
    place: "Santorini",
    info: {
      en: "A guide to the ultimate sunset cocktails, fine dining, and most memorable culinary experiences across the island of Santorini.",
      el: "Ο απόλυτος οδηγός για cocktails στο ηλιοβασίλεμα, fine dining και τις πιο αξέχαστες γαστρονομικές εμπειρίες στη Σαντορίνη.",
    },
    image: "/images/food-santorini.webp",
    overview: {
      en: "Santorini is not just a Greek island. It's a mood. A dramatic volcanic landscape, whitewashed villages hanging over the caldera, and sunsets that feel almost unreal.\n\nBut beyond the views, Santorini offers something else: a more refined, premium side of Greek gastronomy. Think elegant cocktails, creative Mediterranean cuisine, candlelit terraces, and unforgettable evenings overlooking the Aegean.\n\nIf you're looking for the ultimate sunset cocktails and dinner experience in Santorini, this guide will help you discover where to go, what to order, and how to enjoy the island in style.",
      el: "Η Σαντορίνη δεν είναι απλώς ένα ελληνικό νησί. Είναι μια αίσθηση. Ένα δραματικό ηφαιστειακό τοπίο, ολόλευκα χωριά που κρέμονται πάνω από την καλντέρα, και ηλιοβασιλέματα που μοιάζουν σχεδόν εξωπραγματικά.\n\nΌμως, πέρα από τη θέα, η Σαντορίνη προσφέρει και κάτι άλλο: μια πιο εκλεπτυσμένη, premium πλευρά της ελληνικής γαστρονομίας. Σκεφτείτε κομψά cocktails, δημιουργική μεσογειακή κουζίνα, βεράντες υπό το φως των κεριών και αξέχαστες βραδιές με θέα το Αιγαίο.\n\nΑν αναζητάτε την απόλυτη εμπειρία για cocktails και δείπνο στο ηλιοβασίλεμα της Σαντορίνης, αυτός ο οδηγός θα σας βοηθήσει να ανακαλύψετε πού να πάτε, τι να παραγγείλετε και πώς να απολαύσετε το νησί με στιλ.",
    },
    specialties: {
      en: ["Sunset spots", "Cocktails", "Memorable dinners"],
      el: ["Σημεία για ηλιοβασίλεμα", "Cocktails", "Αξέχαστα δείπνα"],
    },
    sections: [
      {
        title: { en: "The Premium Side of Greece: What Makes Santorini Dining Special", el: "Η Premium Πλευρά της Ελλάδας: Τι Κάνει το Φαγητό στη Σαντορίνη Ξεχωριστό" },
        text: {
          en: "Santorini stands apart from other Greek islands for three main reasons:\n\n• Caldera views that transform dinner into a spectacle\n• High-end restaurants blending tradition with fine dining\n• A strong wine culture rooted in volcanic soil\n\nThis is not the place for rushed meals. Dining in Santorini is about atmosphere, timing, and experience.\n\nYou don't just eat.\nYou watch the sun disappear into the sea while sipping a perfectly balanced cocktail.",
          el: "Η Σαντορίνη ξεχωρίζει από τα υπόλοιπα ελληνικά νησιά για τρεις κύριους λόγους:\n\n• Η θέα στην καλντέρα που μετατρέπει το δείπνο σε υπερθέαμα\n• High-end εστιατόρια που συνδυάζουν την παράδοση με το fine dining\n• Η ισχυρή οινική κουλτούρα με ρίζες στο ηφαιστειακό έδαφος\n\nΔεν είναι το μέρος για βιαστικά γεύματα. Το δείπνο στη Σαντορίνη αφορά την ατμόσφαιρα, τον σωστό χρόνο και την εμπειρία.\n\nΔεν τρως απλά.\nΒλέπεις τον ήλιο να χάνεται στη θάλασσα ενώ απολαμβάνεις ένα τέλεια ισορροπημένο cocktail."
        }
      },
      {
        title: { en: "Best Areas for Sunset Cocktails & Dinner in Santorini", el: "Οι Καλύτερες Περιοχές για Cocktails & Δείπνο στο Ηλιοβασίλεμα" },
        text: {
          en: "**Oia – The Iconic Sunset Spot**\nOia is the postcard version of Santorini. Cliffside terraces, golden light, and panoramic caldera views.\nHere, sunset cocktails are an event. Arrive at least one hour before sunset to secure your table.\n\nWhat to expect:\n• Signature cocktails with local ingredients\n• Champagne and premium wine lists\n• Elegant seafood and Mediterranean tasting menus\nIdeal for: romantic dinners, anniversaries, proposals.\n\n**Imerovigli – Luxury & Serenity**\nIf you want breathtaking views without the heavy crowds, Imerovigli is your sweet spot.\nThis area offers:\n• Boutique fine dining restaurants\n• Intimate sunset terraces\n• Quiet, elevated views of the caldera\nPerfect for couples who want a more private, sophisticated atmosphere.\n\n**Fira – Cosmopolitan Energy**\nFira combines sunset views with a more vibrant nightlife vibe.\nHere you'll find:\n• Trendy cocktail bars\n• Upscale restaurants\n• Rooftop terraces with DJ sets\nIdeal for travelers who want dinner followed by drinks and a lively evening.",
          el: "**Οία – Το Απόλυτο Σημείο για το Ηλιοβασίλεμα**\nΗ Οία είναι η καρτ-ποστάλ της Σαντορίνης. Βεράντες στο χείλος του γκρεμού, χρυσό φως και πανοραμική θέα στην καλντέρα.\nΕδώ, τα cocktails στο ηλιοβασίλεμα είναι γεγονός. Φτάστε τουλάχιστον μία ώρα πριν τη δύση για να εξασφαλίσετε το τραπέζι σας.\n\nΤι να περιμένετε:\n• Signature cocktails με τοπικά υλικά\n• Λίστες με σαμπάνιες και premium κρασιά\n• Κομψά μενού γευσιγνωσίας με θαλασσινά και μεσογειακές γεύσεις\nΙδανικό για: ρομαντικά δείπνα, επετείους, προτάσεις γάμου.\n\n**Ημεροβίγλι – Πολυτέλεια & Ηρεμία**\nΑν θέλετε θέα που κόβει την ανάσα χωρίς τα τεράστια πλήθη, το Ημεροβίγλι είναι το ιδανικό σημείο.\nΗ περιοχή προσφέρει:\n• Boutique εστιατόρια fine dining\n• Ιδιωτικές βεράντες για το ηλιοβασίλεμα\n• Ήσυχη, υπερυψωμένη θέα στην καλντέρα\nΙδανικό για ζευγάρια που αναζητούν μια πιο ιδιωτική και εκλεπτυσμένη ατμόσφαιρα.\n\n**Φηρά – Κοσμοπολίτικη Ενέργεια**\nΤα Φηρά συνδυάζουν τη θέα στο ηλιοβασίλεμα με μια πιο ζωντανή νυχτερινή ατμόσφαιρα.\nΕδώ θα βρείτε:\n• Μοντέρνα cocktail bars\n• Πολυτελή εστιατόρια\n• Rooftop βεράντες με DJ sets\nΙδανικό για ταξιδιώτες που θέλουν δείπνο, ποτό και μια ζωντανή βραδιά."
        }
      },
      {
        title: { en: "What to Drink & Eat: Signature Cocktails and Fine Dining", el: "Τι να Πιείτε και Τι να Φάτε: Signature Cocktails & Fine Dining" },
        text: {
          en: "**What to Drink: Signature Santorini Sunset Cocktails**\nSantorini's cocktail scene blends Greek ingredients with modern mixology.\nLook for drinks featuring Assyrtiko wine infusions, Mastiha liqueur, fresh citrus, and local herbs.\nClassic choices:\n• Santorini Spritz (twist on Aperol with Greek wine)\n• Mastiha-based martinis\n• Premium gin & tonic with Mediterranean botanicals\nFor wine lovers, a glass of Assyrtiko at sunset is almost mandatory. Its crisp acidity pairs beautifully with seafood and the island breeze.\n\n**What to Eat: Fine Dining with Local Roots**\nEven at its most premium, Santorini's cuisine remains deeply Greek.\nMust-Try Local Ingredients:\n• Cherry Tomatoes of Santorini: Intensely sweet due to volcanic soil and limited water.\n• Fava Santorinis: Creamy yellow split pea purée, often served with caramelized onions and capers.\n• White Eggplant: Delicate, less bitter than the typical variety.\n• Fresh Seafood: Sea bass, red snapper, octopus, lobster (seasonal).\n\nPopular Dinner Experiences:\n• Tasting Menus with Caldera View: Multi-course menus blending Greek tradition with modern presentation.\n• Seafood & Champagne Evenings: Grilled fish, lobster pasta, oysters, paired with sparkling wine.\n• Romantic Candlelight Dinners: Private terraces, curated wine pairings, personalized service.",
          el: "**Τι να Πιείτε: Signature Cocktails στο Ηλιοβασίλεμα**\nΗ σκηνή των cocktails στη Σαντορίνη συνδυάζει ελληνικά υλικά με μοντέρνα mixology.\nΑναζητήστε ποτά που περιέχουν κρασί Ασύρτικο, λικέρ Μαστίχας, φρέσκα εσπεριδοειδή και τοπικά βότανα.\nΚλασικές επιλογές:\n• Santorini Spritz (παραλλαγή του Aperol με ελληνικό κρασί)\n• Martinis με βάση τη Μαστίχα\n• Premium gin & tonic με μεσογειακά βότανα\nΓια τους λάτρεις του κρασιού, ένα ποτήρι Ασύρτικο στο ηλιοβασίλεμα είναι σχεδόν υποχρεωτικό. Η ζωηρή του οξύτητα ταιριάζει υπέροχα με τα θαλασσινά και την αύρα του νησιού.\n\n**Τι να Φάτε: Fine Dining με Τοπικές Ρίζες**\nΑκόμα και στην πιο premium μορφή της, η κουζίνα της Σαντορίνης παραμένει βαθιά ελληνική.\nΤοπικά Υλικά που Πρέπει να Δοκιμάσετε:\n• Ντοματάκια Σαντορίνης: Έντονα γλυκά λόγω του ηφαιστειακού εδάφους και της έλλειψης νερού.\n• Φάβα Σαντορίνης: Κρεμώδης πουρές, που συχνά σερβίρεται με καραμελωμένα κρεμμύδια και κάπαρη.\n• Λευκή Μελιτζάνα: Πιο εκλεπτυσμένη και λιγότερο πικρή από τη συνηθισμένη.\n• Φρέσκα Θαλασσινά: Λαβράκι, φαγκρί, χταπόδι, αστακός (εποχικός).\n\nΔημοφιλείς Εμπειρίες Δείπνου:\n• Μενού Γευσιγνωσίας με Θέα την Καλντέρα: Μενού πολλών πιάτων που συνδυάζουν την ελληνική παράδοση με μοντέρνα παρουσίαση.\n• Βραδιές με Θαλασσινά & Σαμπάνια: Ψητό ψάρι, αστακομακαρονάδα, στρείδια, συνοδευόμενα από αφρώδη οίνο.\n• Ρομαντικά Δείπνα υπό το Φως των Κεριών: Ιδιωτικές βεράντες, επιλεγμένο pairing κρασιών, εξατομικευμένο service."
        }
      },
      {
        title: { en: "The Perfect Plan & Insider Tips", el: "Το Τέλειο Πλάνο & Insider Tips" },
        text: {
          en: "**The Perfect Santorini Sunset Dinner Plan**\nIf you want to do it right, here's the ideal flow:\n• Arrive 60–90 minutes before sunset\n• Start with a signature cocktail\n• Order light starters (fava, tomato salad, seafood meze)\n• Watch the sunset without rushing\n• Move into main course as the sky turns deep blue\n• Finish with dessert wine or cocktail\nThis timing makes all the difference.\n\n**Dress Code & Budget Expectations**\nSantorini sunset dining leans toward smart casual to elegant.\nThink linen shirts, summer dresses, minimal, chic style.\nBudget range:\n• Cocktails: €15–25\n• Fine dining dinner per person: €60–150+\n• Premium tasting menus: €120–200+\nYes, it's higher than other Greek islands — but the experience is part of what you're paying for.\n\n**When to Book & Insider Tips**\n• Always reserve in advance (especially May–September)\n• Ask for a front-row caldera table\n• Avoid peak sunset crowds by dining slightly later\n• Consider late May, June, or September for best balance of weather and atmosphere\n\n**Why Santorini Is the Ultimate Sunset Dining Destination**\nSantorini elevates the Greek dining experience into something cinematic.\nIt's not just about the food.\nIt's about light, space, atmosphere, and memory.\nSunset cocktails turn into long dinners.\nDinner turns into conversations under the stars.\nAnd suddenly, one evening feels like a scene from a movie.\nIf you're looking for a premium side of Greece — refined but still authentic — Santorini delivers it beautifully.",
          el: "**Το Τέλειο Πλάνο για Δείπνο στο Ηλιοβασίλεμα**\nΑν θέλετε να το ζήσετε σωστά, αυτή είναι η ιδανική ροή:\n• Φτάστε 60–90 λεπτά πριν το ηλιοβασίλεμα\n• Ξεκινήστε με ένα signature cocktail\n• Παραγγείλτε ελαφριά ορεκτικά (φάβα, σαλάτα με ντοματάκια, μεζέδες θαλασσινών)\n• Δείτε το ηλιοβασίλεμα χωρίς πίεση χρόνου\n• Προχωρήστε στο κυρίως πιάτο καθώς ο ουρανός γίνεται βαθύς μπλε\n• Κλείστε με ένα επιδόρπιο κρασί ή cocktail\nΑυτό το timing κάνει όλη τη διαφορά.\n\n**Dress Code & Προσδοκίες Προϋπολογισμού**\nΤο δείπνο στη Σαντορίνη κινείται σε ρυθμούς από smart casual έως elegant.\nΣκεφτείτε λινά πουκάμισα, καλοκαιρινά φορέματα, minimal, chic στιλ.\nΕύρος τιμών:\n• Cocktails: 15–25€\n• Δείπνο fine dining ανά άτομο: 60–150€+\n• Premium μενού γευσιγνωσίας: 120–200€+\nΝαι, οι τιμές είναι υψηλότερες από άλλα ελληνικά νησιά — αλλά η εμπειρία είναι μέρος αυτού που πληρώνετε.\n\n**Πότε να Κλείσετε & Insider Tips**\n• Κάντε πάντα κράτηση εκ των προτέρων (ειδικά Μάιο–Σεπτέμβριο)\n• Ζητήστε τραπέζι στην πρώτη γραμμή της καλντέρας\n• Αποφύγετε τα μεγάλα πλήθη τρώγοντας ελαφρώς αργότερα\n• Προτιμήστε τα τέλη Μαΐου, τον Ιούνιο ή τον Σεπτέμβριο για την καλύτερη ισορροπία καιρού και ατμόσφαιρας\n\n**Γιατί η Σαντορίνη Είναι ο Απόλυτος Προορισμός Δείπνου**\nΗ Σαντορίνη απογειώνει την ελληνική εμπειρία φαγητού σε κάτι κινηματογραφικό.\nΔεν αφορά μόνο το φαγητό.\nΑφορά το φως, τον χώρο, την ατμόσφαιρα και τις αναμνήσεις.\nΤα cocktails μετατρέπονται σε μεγάλα δείπνα.\nΤο δείπνο καταλήγει σε συζητήσεις κάτω από τα αστέρια.\nΚαι ξαφνικά, ένα βράδυ μοιάζει σαν σκηνή από ταινία.\nΑν ψάχνετε για μια premium πλευρά της Ελλάδας — εκλεπτυσμένη αλλά αυθεντική — η Σαντορίνη σας την προσφέρει απλόχερα."
        }
      }
    ]
  },
  {
    slug: "traditional-tavern-flavors",
    title: {
      en: "Traditional Tavern Flavors in Crete",
      el: "Παραδοσιακές Γεύσεις της Κρήτης",
    },
    metaTitle: {
      en: "What to Eat in Crete: Traditional Dishes, Taverns & Local Food Guide",
      el: "Τι να Φας στην Κρήτη: Παραδοσιακές Γεύσεις, Ταβέρνες & Τοπικός Γαστρονομικός Οδηγός",
    },
    metaDescription: {
      en: "Discover authentic Cretan tavern flavors across Chania, Rethymno, Heraklion and Lasithi. A documentary-style journey through Crete's regional cuisine and local specialties.",
      el: "Ανακαλύψτε αυθεντικές κρητικές γεύσεις σε Χανιά, Ρέθυμνο, Ηράκλειο και Λασίθι. Ένα γαστρονομικό ταξίδι στην τοπική κουζίνα και τις παραδοσιακές νοστιμιές της Κρήτης.",
    },
    keywords: {
      en: ["traditional tavern Crete", "best food in Chania Crete", "Rethymno local cuisine", "Heraklion traditional food", "Lasithi authentic taverns", "Cretan village dining experience"],
      el: ["παραδοσιακή ταβέρνα Κρήτη", "καλύτερο φαγητό Χανιά", "τοπική κουζίνα Ρέθυμνο", "παραδοσιακό φαγητό Ηράκλειο", "αυθεντικές ταβέρνες Λασίθι", "εμπειρία φαγητού σε χωριό της Κρήτης"],
    },
    place: "Crete",
    info: {
      en: "A regional journey through Crete's traditional taverns.",
      el: "Ένα ταξίδι στα χωριά και τις παραδοσιακές ταβέρνες της Κρήτης.",
    },
    image: "/images/food-crete.webp",
    overview: {
      en: "In Crete, every region tells a slightly different story — through fire, olive oil, mountain herbs, and sea salt.\n\nFrom the White Mountains of Chania to the rugged plateaus of Lasithi, the Cretan tavern is not a single experience. It changes with the landscape. And that’s what makes it unforgettable.",
      el: "Στην Κρήτη, κάθε περιοχή αφηγείται μια ελαφρώς διαφορετική ιστορία — μέσα από τη φωτιά, το ελαιόλαδο, τα βότανα του βουνού και το αλάτι της θάλασσας.\n\nΑπό τα Λευκά Όρη των Χανίων μέχρι τα άγρια οροπέδια του Λασιθίου, η κρητική ταβέρνα δεν είναι μια ενιαία εμπειρία. Αλλάζει μαζί με το τοπίο. Κι αυτό είναι που την κάνει αξέχαστη.",
    },
    specialties: {
      en: ["Antikristo lamb", "Gamopilafo", "Dakos", "Cretan Hospitality"],
      el: ["Αρνί αντικριστό", "Γαμοπίλαφο", "Ντάκος", "Κρητική Φιλοξενία"],
    },
    sections: [
      {
        title: { en: "Chania: Mountain Soul & Slow-Cooked Depth", el: "Χανιά: Ορεινή Ψυχή & Αργομαγειρεμένο Βάθος" },
        text: {
          en: "**Chania: Mountain Soul & Slow-Cooked Depth**\nWestern Crete carries intensity.\nThe White Mountains (Lefka Ori) shape both the terrain and the cuisine. Villages inland from Chania offer some of the most authentic tavern experiences on the island.\n\n**What to Look For in Chania Taverns:**\n• Antikristo lamb cooked over open fire\n• Goat in clay pot with wild herbs\n• Dakos with deeply flavorful local tomatoes\n• Kalitsounia (cheese or herb pies) handmade daily\n• Staka (rich Cretan dairy cream) often served with eggs or over fries\n\nIn mountain villages, meat dominates the table. Slow cooking is the rule, not the exception. Dishes are rustic, hearty, and unapologetically simple.\n\nIn seaside Chania, you'll also find:\n• Fresh grilled fish\n• Octopus with vinegar and rosemary\n• Cretan salads with local graviera cheese\n\nBest for: Travelers who want strong flavors, traditional mountain cooking, and deeply local taverns.",
          el: "**Χανιά: Ορεινή Ψυχή & Αργομαγειρεμένο Βάθος**\nΗ δυτική Κρήτη αποπνέει ένταση.\nΤα Λευκά Όρη διαμορφώνουν τόσο το έδαφος όσο και την κουζίνα. Τα χωριά στην ενδοχώρα των Χανίων προσφέρουν μερικές από τις πιο αυθεντικές εμπειρίες ταβέρνας στο νησί.\n\n**Τι να Αναζητήσετε στις Ταβέρνες των Χανίων:**\n• Αρνί αντικριστό ψημένο σε ανοιχτή φωτιά\n• Κατσίκι στο πήλινο (τσικάλι) με άγρια βότανα\n• Ντάκο με ντόπιες γευστικές ντομάτες\n• Καλιτσούνια (με τυρί ή χόρτα) φτιαγμένα στο χέρι καθημερινά\n• Στάκα (πλούσια κρέμα από αιγοπρόβειο γάλα) σερβιρισμένη με αυγά ή πάνω σε τηγανητές πατάτες\n\nΣτα ορεινά χωριά, το κρέας κυριαρχεί στο τραπέζι. Το αργό μαγείρεμα είναι ο κανόνας, όχι η εξαίρεση. Τα πιάτα είναι ρουστίκ, χορταστικά και απροσποίητα απλά.\n\nΣτα παραθαλάσσια Χανιά, θα βρείτε επίσης:\n• Φρέσκο ψητό ψάρι\n• Χταπόδι με ξύδι και δεντρολίβανο\n• Κρητικές σαλάτες με ντόπια γραβιέρα\n\nΙδανικό για: Ταξιδιώτες που αναζητούν έντονες γεύσεις, παραδοσιακή ορεινή μαγειρική και αυθεντικές ντόπιες ταβέρνες."
        }
      },
      {
        title: { en: "Rethymno: Balance Between Tradition & Refinement", el: "Ρέθυμνο: Ισορροπία Ανάμεσα στην Παράδοση & την Εκλεπτυσμένη Γεύση" },
        text: {
          en: "**Rethymno: Balance Between Tradition & Refinement**\nRethymno sits between west and east — and its cuisine reflects that balance.\nHere, you'll find traditional recipes presented with slightly more finesse, especially in village taverns around the Amari Valley and inland communities.\n\n**What to Look For in Rethymno Taverns:**\n• Gamopilafo (wedding rice cooked in meat broth)\n• Lamb with artichokes or wild greens\n• Snails (xoxlioi) with rosemary and vinegar\n• Handmade pasta with slow-cooked meat\n\nRethymno's food feels slightly more layered — not modernized, but thoughtfully prepared.\nVillage taverns here often feel intimate. Stone courtyards, wooden tables, quiet evenings.\nBest for: Visitors who want authentic food with subtle refinement and traditional inland flavors.",
          el: "**Ρέθυμνο: Ισορροπία Ανάμεσα στην Παράδοση & την Εκλεπτυσμένη Γεύση**\nΤο Ρέθυμνο βρίσκεται ανάμεσα στη δύση και την ανατολή — και η κουζίνα του αντικατοπτρίζει αυτή την ισορροπία.\nΕδώ, θα βρείτε παραδοσιακές συνταγές παρουσιασμένες με λίγη περισσότερη φινέτσα, ειδικά στις ταβέρνες των χωριών γύρω από την κοιλάδα του Αμαρίου και τις κοινότητες της ενδοχώρας.\n\n**Τι να Αναζητήσετε στις Ταβέρνες του Ρεθύμνου:**\n• Γαμοπίλαφο (ρύζι μαγειρεμένο σε ζωμό κρέατος)\n• Αρνί με αγκινάρες ή άγρια χόρτα\n• Χοχλιούς (σαλιγκάρια) μπουμπουριστούς με δεντρολίβανο και ξύδι\n• Χειροποίητα ζυμαρικά με αργομαγειρεμένο κρέας\n\nΤο φαγητό του Ρεθύμνου δίνει μια αίσθηση ότι έχει περισσότερα επίπεδα — δεν είναι εκσυγχρονισμένο, αλλά προσεγμένα προετοιμασμένο.\nΟι ταβέρνες των χωριών εδώ αποπνέουν οικειότητα. Πέτρινες αυλές, ξύλινα τραπέζια, ήσυχα βράδια.\nΙδανικό για: Επισκέπτες που θέλουν αυθεντικό φαγητό με διακριτική κομψότητα και παραδοσιακές γεύσεις της ενδοχώρας."
        }
      },
      {
        title: { en: "Heraklion: The Agricultural Heart of Crete", el: "Ηράκλειο: Η Αγροτική Καρδιά της Κρήτης" },
        text: {
          en: "**Heraklion: The Agricultural Heart of Crete**\nCentral Crete is fertile. Olive groves stretch endlessly. Vineyards dot the hills.\nHeraklion region offers some of the most ingredient-driven tavern experiences on the island.\n\n**What to Look For in Heraklion Taverns:**\n• Seasonal vegetable dishes (zucchini flowers, eggplants, wild greens)\n• Slow-cooked pork with wine and herbs\n• Local graviera and mizithra cheeses\n• Cretan salads with barley rusks and abundant olive oil\n\nWine culture is strong here. Many taverns serve local varietals produced nearby — earthy, structured, honest wines.\nThe cuisine feels grounded. Ingredient-first. Less focused on spectacle, more on quality.\nBest for: Food lovers interested in the Cretan diet, olive oil culture, and wine pairings with traditional dishes.",
          el: "**Ηράκλειο: Η Αγροτική Καρδιά της Κρήτης**\nΗ κεντρική Κρήτη είναι εύφορη. Οι ελαιώνες εκτείνονται ατελείωτα. Οι αμπελώνες στολίζουν τους λόφους.\nΗ περιοχή του Ηρακλείου προσφέρει μερικές από τις πιο ταβέρνες με έμφαση στα γνήσια υλικά του νησιού.\n\n**Τι να Αναζητήσετε στις Ταβέρνες του Ηρακλείου:**\n• Πιάτα με εποχιακά λαχανικά (κολοκυθοανθοί, μελιτζάνες, άγρια χόρτα)\n• Αργομαγειρεμένο χοιρινό με κρασί και βότανα\n• Ντόπια γραβιέρα και μυζήθρα μηλίνα\n• Κρητικές σαλάτες με παξιμάδια (ντάκο) και άφθονο ελαιόλαδο\n\nΗ κουλτούρα του κρασιού είναι ισχυρή εδώ. Πολλές ταβέρνες σερβίρουν τοπικές ποικιλίες που παράγονται σε κοντινή απόσταση — γήινα, δομημένα, ειλικρινή κρασιά.\nΗ κουζίνα έχει γερές βάσεις. Πρώτα τα υλικά. Λιγότερο εστιασμένη στον εντυπωσιασμό, περισσότερο στην ποιότητα.\nΙδανικό για: Λάτρεις του φαγητού που ενδιαφέρονται για την κρητική διατροφή, την κουλτούρα του ελαιολάδου και τους συνδυασμούς κρασιού με παραδοσιακά πιάτα."
        }
      },
      {
        title: { en: "Lasithi: Wild, Remote & Deeply Authentic", el: "Λασίθι: Άγριο, Απομακρυσμένο & Βαθιά Αυθεντικό" },
        text: {
          en: "**Lasithi: Wild, Remote & Deeply Authentic**\nEastern Crete feels different.\nMore rugged. Less polished. Villages in the Lasithi Plateau and coastal fishing communities preserve some of the island’s most untouched tavern traditions.\n\n**What to Look For in Lasithi Taverns:**\n• Goat and lamb raised locally\n• Simple grilled meats with salt and lemon\n• Fresh seafood in coastal villages\n• Hand-cut potatoes fried in olive oil\n• Minimalist menus based entirely on what’s available that day\n\nIn Lasithi, you may encounter taverns without printed menus. The owner tells you what exists. That’s your choice.\nThe flavors are bold but unpretentious.\nBest for: Travelers seeking raw authenticity and truly off-the-beaten-path village dining.",
          el: "**Λασίθι: Άγριο, Απομακρυσμένο & Βαθιά Αυθεντικό**\nΗ ανατολική Κρήτη έχει άλλη αίσθηση.\nΠιο τραχιά. Λιγότερο γυαλισμένη. Τα χωριά στο Οροπέδιο Λασιθίου και οι παράκτιες αλιευτικές κοινότητες διατηρούν μερικές από τις πιο ανέγγιχτες παραδόσεις ταβέρνας του νησιού.\n\n**Τι να Αναζητήσετε στις Ταβέρνες του Λασιθίου:**\n• Ντόπιο κατσίκι και αρνί ελευθέρας βοσκής\n• Απλά ψητά κρέατα με αλάτι και λεμόνι\n• Φρέσκα θαλασσινά στα παραθαλάσσια χωριά\n• Χειροποίητες τηγανητές πατάτες στο ελαιόλαδο\n• Μινιμαλιστικά μενού που βασίζονται εξ ολοκλήρου στο τι είναι διαθέσιμο εκείνη την ημέρα\n\nΣτο Λασίθι, μπορεί να συναντήσετε ταβέρνες χωρίς τυπωμένα μενού. Ο ιδιοκτήτης σας λέει τι υπάρχει. Αυτή είναι η επιλογή σας.\nΟι γεύσεις είναι τολμηρές αλλά ανεπιτήδευτες.\nΙδανικό για: Ταξιδιώτες που αναζητούν ωμή αυθεντικότητα και πραγματικά off-the-beaten-path γεύματα σε χωριά."
        }
      },
      {
        title: { en: "Mountain vs Seaside & Cretan Hospitality", el: "Ορεινές Ταβέρνες vs. Παραθαλάσσιες Ταβέρνες & Φιλοξενία" },
        text: {
          en: "**Mountain Taverns vs. Seaside Taverns**\nUnderstanding this distinction helps visitors choose the right experience.\nMountain Taverns: Heavier meat dishes, wood-fired cooking, rustic interiors, slower pace.\nSeaside Taverns: Grilled fish & octopus, simpler seasoning, sea breeze atmosphere, lighter summer meals.\nBoth are equally authentic — just shaped by geography.\n\n**The Constant Across All Regions: Cretan Hospitality**\nNo matter where you dine, one element remains unchanged. Philoxenia.\nYou will be offered raki at the end of the meal. You may receive fruit or dessert \"on the house.\" You will likely be asked where you're from.\nHospitality here is not strategic. It is instinctive.\n\n**What Visitors Should Expect**\n• No dress code\n• No rushed service\n• Large portions\n• Seasonal menus\n• Affordable prices (€15–35 per person in most traditional taverns)\n\nAnd above all — sincerity.",
          el: "**Ορεινές Ταβέρνες vs. Παραθαλάσσιες Ταβέρνες**\nΗ κατανόηση αυτής της διάκρισης βοηθά τους επισκέπτες να επιλέξουν τη σωστή εμπειρία.\nΟρεινές Ταβέρνες: Πιο βαριά πιάτα με κρέας, μαγείρεμα στον ξυλόφουρνο, ρουστίκ εσωτερικοί χώροι, πιο αργοί ρυθμοί.\nΠαραθαλάσσιες Ταβέρνες: Ψητό ψάρι & χταπόδι, πιο απλά καρυκεύματα, ατμόσφαιρα θαλασσινής αύρας, ελαφρύτερα καλοκαιρινά γεύματα.\nΚαι οι δύο είναι εξίσου αυθεντικές — απλώς διαμορφώνονται από τη γεωγραφία.\n\n**Η Σταθερά σε Όλες τις Περιοχές: Η Κρητική Φιλοξενία**\nΑνεξάρτητα από το πού δειπνείτε, ένα στοιχείο παραμένει αμετάβλητο. Η Φιλοξενία.\nΘα σας προσφέρουν ρακή στο τέλος του γεύματος. Ίσως λάβετε φρούτα ή γλυκό \"κερασμένα\". Είναι πολύ πιθανό να σας ρωτήσουν από πού είστε.\nΗ φιλοξενία εδώ δεν είναι στρατηγική. Είναι ενστικτώδης.\n\n**Τι να Περιμένουν οι Επισκέπτες**\n• Κανένα αυστηρό dress code\n• Χαλαρό service χωρίς βιασύνη\n• Μεγάλες μερίδες\n• Εποχιακά μενού\n• Προσιτές τιμές (15–35€ ανά άτομο στις περισσότερες παραδοσιακές ταβέρνες)\n\nΚαι πάνω απ' όλα — ειλικρίνειά."
        }
      },
      {
        title: { en: "Frequently Asked Questions About Traditional Tavern Food in Crete", el: "Συχνές Ερωτήσεις (FAQ) για το Παραδοσιακό Φαγητό στις Ταβέρνες της Κρήτης" },
        text: {
          en: "**Where to eat traditional food in Crete?**\nYou can find authentic Cretan tavern food across the island, but the most genuine experiences are often in village taverns rather than tourist-heavy areas.\n• Chania: Best for antikristo lamb and handmade pies.\n• Rethymno: Ideal for gamopilafo and snail dishes.\n• Heraklion: Excellent for olive-oil based dishes and local wines.\n• Lasithi: Perfect for simple, rustic goat and lamb dishes.\n\n**What is the most traditional Cretan dish?**\nThere isn't just one — but these are considered staples: Antikristo lamb, Gamopilafo (wedding rice), Dakos, Horta (wild greens), Kalitsounia.\n\n**Is Cretan food different from the rest of Greece?**\nYes. Cretan cuisine stands out because of the heavy use of high-quality olive oil, emphasis on wild greens, slow-cooked meats, and its strong connection to the Mediterranean diet.\n\n**How much does a traditional tavern meal cost?**\nA typical meal costs €15–25 per person in most villages, and €25–35 in more popular or coastal areas.\n\n**What drink pairs best with Cretan tavern food?**\nHouse wine (red or white), local Cretan wines from the Heraklion region, and naturally, Raki (served after the meal).",
          el: "**Πού να φάω παραδοσιακό φαγητό στην Κρήτη;**\nΜπορείτε να βρείτε αυθεντικό κρητικό φαγητό ταβέρνας σε όλο το νησί, αλλά οι πιο γνήσιες εμπειρίες βρίσκονται συχνά σε ταβέρνες χωριών και όχι σε τουριστικές περιοχές.\n• Χανιά: Κορυφαία για αρνί αντικριστό και χειροποίητες πίτες.\n• Ρέθυμνο: Ιδανικό για γαμοπίλαφο και πιάτα με σαλιγκάρια.\n• Ηράκλειο: Εξαιρετικό για πιάτα με βάση το ελαιόλαδο και τοπικά κρασιά.\n• Λασίθι: Τέλειο για απλά, ρουστίκ πιάτα με κατσίκι και αρνί.\n\n**Ποιο είναι το πιο παραδοσιακό κρητικό πιάτο;**\nΔεν υπάρχει μόνο ένα — αλλά τα εξής θεωρούνται βασικά: Αρνί αντικριστό, Γαμοπίλαφο, Ντάκος, Χόρτα (άγρια χόρτα), Καλιτσούνια.\n\n**Διαφέρει το κρητικό φαγητό από την υπόλοιπη Ελλάδα;**\nΝαι. Η κρητική κουζίνα ξεχωρίζει λόγω της έντονης χρήσης ελαιολάδου εξαιρετικής ποιότητας, της έμφασης στα άγρια χόρτα, των αργομαγειρεμένων κρεάτων και της ισχυρής σύνδεσής της με τη μεσογειακή διατροφή.\n\n**Πόσο κοστίζει ένα παραδοσιακό γεύμα σε ταβέρνα;**\nΈνα τυπικό γεύμα κοστίζει 15–25€ ανά άτομο στα περισσότερα χωριά και 25–35€ σε πιο δημοφιλείς ή παραθαλάσσιες περιοχές.\n\n**Τι ποτό ταιριάζει καλύτερα με το φαγητό της κρητικής ταβέρνας;**\nΤο χύμα κρασί (κόκκινο ή λευκό), τα τοπικά κρητικά κρασιά από την περιοχή του Ηρακλείου, και φυσικά, η Ρακή (που σερβίρεται μετά το γεύμα)."
        }
      }
    ]
  },
];

export const tours: TourItem[] = [
  {
    slug: "kefalonia-tours",
    image: "/images/tours/kefalonia-tours.webp",
    place: "Kefalonia",
    title: {
      en: "Experiences in Kefalonia",
      el: "Εμπειρίες & Επιχειρήσεις στην Κεφαλονιά",
    },
    info: {
      en: "Discover selected local businesses in Kefalonia, from authentic spots to unique services.",
      el: "Ανακάλυψε επιλεγμένες τοπικές επιχειρήσεις στην Κεφαλονιά.",
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
    image: "/images/tours/lesvos-tours.webp",
    place: "Lesvos",
    title: {
      en: "Experiences in Lesvos",
      el: "Εμπειρίες & Επιχειρήσεις στη Λέσβο",
    },
    info: {
      en: "Discover selected local businesses in Lesvos, from authentic spots to unique services.",
      el: "Ανακάλυψε επιλεγμένες τοπικές επιχειρήσεις στη Λέσβο.",
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
    image: "/images/tours/crete-tours.webp",
    place: "Crete",
    title: {
      en: "Experiences in Crete",
      el: "Εμπειρίες & Επιχειρήσεις στην Κρήτη",
    },
    info: {
      en: "Discover selected local businesses in Crete, from authentic spots to unique services.",
      el: "Ανακάλυψε επιλεγμένες τοπικές επιχειρήσεις στην Κρήτη.",
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