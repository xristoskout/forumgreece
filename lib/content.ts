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
    seo: {
      title: {
        en: "Santorini: The ultimate guide (best time, attractions, beaches, food)",
        el: "Σαντορίνη: Ο απόλυτος οδηγός (καλύτερη εποχή, αξιοθέατα, παραλίες, φαγητό)"
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
    image: "/images/mykonos.jpg",
    overview: {
      en: "Mykonos combines glamorous beaches, nightlife and polished Cycladic style.",
      el: "Η Μύκονος συνδυάζει glamorous παραλίες, νυχτερινή ζωή και κομψό κυκλαδίτικο ύφος.",
    },
    highlights: {
      en: ["Windmills", "Little Venice", "Party beaches"],
      el: ["Ανεμόμυλοι", "Μικρή Βενετία", "Party παραλίες"],
    },
    seo: {
      title: {
        en: "Mykonos: The comprehensive guide (beaches, attractions, Delos, food & tips)",
        el: "Μύκονος: Ο αναλυτικός οδηγός (παραλίες, αξιοθέατα, Δήλος, φαγητό & tips)"
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
    image: "/images/crete.jpg",
    overview: {
      en: "Crete offers beaches, mountains, history, local food and endless options for long stays.",
      el: "Η Κρήτη προσφέρει παραλίες, βουνά, ιστορία, τοπική κουζίνα και αμέτρητες επιλογές για μεγαλύτερες διακοπές.",
    },
    highlights: {
      en: ["Road trips", "Cretan food", "Historic sites"],
      el: ["Road trips", "Κρητική κουζίνα", "Ιστορικά αξιοθέατα"],
    },
    seo: {
      title: {
        en: "Crete: The ultimate guide (beaches, gorges, Minoan palaces, food & tips)",
        el: "Κρήτη: Ο απόλυτος οδηγός (παραλίες, φαράγγια, μινωικά ανάκτορα, φαγητό & tips)"
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
    image: "/images/corfu.jpg",
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
        en: "Corfu: The ultimate guide (UNESCO Old Town, beaches, villages, food & secrets)",
        el: "Κέρκυρα: Ο απόλυτος οδηγός (Παλιά Πόλη UNESCO, παραλίες, χωριά, φαγητό & μυστικά)"
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
    image: "/images/nafplio.jpg",
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
        en: "Nafplio: The ultimate guide (Palamidi, Bourtzi, beaches, food & secrets)",
        el: "Ναύπλιο: Ο απόλυτος οδηγός (Παλαμήδι, Μπούρτζι, παραλίες, φαγητό & μυστικά)"
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
    image: "/images/thessaloniki.jpg",
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
        en: "Thessaloniki: The ultimate guide (attractions, food, nearby beaches & secrets)",
        el: "Θεσσαλονίκη: Ο απόλυτος οδηγός (αξιοθέατα, φαγητό, παραλίες κοντά στην πόλη & μυστικά)"
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
    image: "/images/kefalonia.jpg",
    overview: {
      en: "Kefalonia stands out for its legendary beaches, geological wonders like Melissani cave, and an authentic nature-filled Ionian character.",
      el: "Η Κεφαλονιά ξεχωρίζει για τις εντυπωσιακές παραλίες, τα γεωλογικά της θαύματα και τον αυθεντικό φυσιολατρικό επτανησιακό χαρακτήρα της.",
    },
    highlights: {
      en: ["Myrtos Beach", "Melissani Cave", "Mount Ainos"],
      el: ["Παραλία Μύρτος", "Σπήλαιο Μελισσάνης", "Όρος Αίνος"],
    },
    seo: {
      title: {
        en: "Kefalonia: The ultimate guide (beaches, caves, villages, Robola & secrets)",
        el: "Κεφαλονιά: Ο απόλυτος οδηγός (παραλίες, σπήλαια, χωριά, Ρομπόλα & μυστικά)"
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
    image: "/images/lesvos.jpg",
    overview: {
      en: "Lesvos is a vast island of continental scale, featuring the famous Petrified forest, huge castles, rich wetlands for birdwatching, thermal springs, and an unbeatable foodie scene built around world-class ouzo and olive oil.",
      el: "Η Λέσβος είναι ένα νησί δομημένο σε ηπειρωτική κλίμακα, με όλο το έδαφός της αναγνωρισμένο ως UNESCO Global Geopark. Από το διάσημο Απολιθωμένο Δάσος μέχρι τα κάστρα της, και από τους υδρόβιους υγροτόπους ως τις θερμές πηγές και τον παγκοσμίου κλάσης μεζέ με ούζο, η Λέσβος προσφέρει αυθεντικές εμπειρίες για κάθε τύπο ταξιδιώτη.",
    },
    highlights: {
      en: ["Petrified forest", "Ouzo & local food", "Castles & villages"],
      el: ["Απολιθωμένο Δάσος", "Ούζο και μεζές", "Κάστρα & χωριά"],
    },
    seo: {
      title: {
        en: "Lesvos: The ultimate guide (Mytilene, Molyvos, Petrified Forest, beaches, food)",
        el: "Λέσβος: Ο απόλυτος οδηγός (Μυτιλήνη, Μόλυβος, Απολιθωμένο Δάσος, παραλίες, φαγητό & μυστικά)"
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
    image: "/images/athens.jpg",
    overview: {
      en: "Athens is a true two-in-one destination bridging the ancient and the modern. From the UNESCO World Heritage Acropolis to vibrant urban lifestyle, the Athens Riviera and nearby islands, it requires rhythm rather than a checklist to be truly enjoyed.",
      el: "Η Αθήνα είναι από τα λίγα μέρη στον κόσμο όπου μπορείς να πιεις καφέ δίπλα σε μια βιτρίνα, να βρεθείς μπροστά σε μάρμαρα 2.500 χρόνων, και να κλείσεις τη μέρα με ηλιοβασίλεμα στη θάλασσα. Είναι πόλη με ένταση και αληθινή καθημερινότητα.",
    },
    highlights: {
      en: ["Acropolis & Museums", "Athens Riviera", "Urban food & Neighborhoods"],
      el: ["Ακρόπολη & Μουσεία", "Αθηναϊκή Ριβιέρα", "Γειτονιές & Γαστρονομία"],
    },
    seo: {
      title: {
        en: "Athens: The ultimate guide (Acropolis, neighborhoods, food, beaches & secrets)",
        el: "Αθήνα: Ο απόλυτος οδηγός (Ακρόπολη, γειτονιές, φαγητό, παραλίες & μυστικά για να τη ζήσεις σωστά)"
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
    slug: "how-to-get-to-greece",
    title: { en: "How to get to Greece", el: "Πώς να έρθεις στην Ελλάδα" },
    description: {
      en: "Flights, ferries, island hopping ideas and airport tips for first-time visitors solving the puzzle of Greek transport.",
      el: "Πτήσεις, πλοία, ιδέες για island hopping και αναλυτικές συμβουλές για αεροδρόμια, ειδικά για όσους έρχονται πρώτη φορά."
    },
    image: "/images/travel-arrival.jpg",
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
    title: { en: "Best time to visit Greece", el: "Η Καλύτερη Εποχή για Ταξίδι" },
    description: {
      en: "Discover exactly when to visit based on your passion: swimming, historical sightseeing, local food, sailing, or simply avoiding the massive crowds.",
      el: "Ανακάλυψε ακριβώς πότε να επισκεφτείς την Ελλάδα ανάλογα με το τι θέλεις: μπάνιο, ιστορία, φαγητό ή απλά την αποφυγή της τουριστικής πολυκοσμίας."
    },
    image: "/images/travel-season.jpg",
    overview: {
      en: "Greece is famous for its summer sun, but limiting your perspective to July and August means missing out. The shoulder seasons (Spring and Autumn) reveal a stunningly green landscape, lower prices, and comfortable temperatures for sightseeing. Winter offers charming mountain villages and a lively urban city-break scene.",
      el: "Η Ελλάδα είναι διάσημη για το καλοκαίρι της, αλλά αν περιοριστείς στον Ιούλιο και τον Αύγουστο χάνεις πολλές εμπειρίες. Οι ενδιάμεσες εποχές (άνοιξη και φθινόπωρο) αποκαλύπτουν μια πιο πράσινη και αυθεντική πλευρά, με χαμηλότερες τιμές και ευχάριστες θερμοκρασίες. Ακόμη και ο χειμώνας, έχει υπέροχα ορεινά χωριά."
    },
    points: {
      en: [
        "Summer is peak season with very hot weather",
        "September is the absolute sweet spot for island hopping",
        "Spring brings rare greenery and rich traditions (Easter)",
        "Winter focuses on Athens, Thessaloniki & highland escapes"
      ],
      el: [
        "Το καλοκαίρι είναι the peak season με αρκετή ζέστη",
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
    image: "/images/travel-transport.jpg",
    overview: {
      en: "Navigating Greece means learning two different transport systems: the intricate web of Aegean and Ionian ferries, and the extensive mainland road and bus network. With a bit of strategic planning, you can easily combine flights, ferries, and cars to craft the ultimate itinerary across mountains and islands.",
      el: "Η μετακίνηση στην Ελλάδα βασίζεται σε δύο διαφορετικά συστήματα: το δίκτυο των πλοίων σε Αιγαίο και Ιόνιο, και τους αυτοκινητόδρομους στην ηπειρωτική χώρα. Η έξυπνη αξιοποίηση πτήσεων, πλοίων και ΚΤΕΛ (λεωφορείων) θα απογειώσει την εμπειρία σου, αρκεί να κατανοήσεις τη δομή τους."
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
      }
    ]
  }
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
    image: "/images/tours/lesvos-tours.jpg",
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
    image: "/images/tours/crete-tours.jpg",
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