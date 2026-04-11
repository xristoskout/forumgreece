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
    slug: "corfu",
    name: "Hotels in Corfu",
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
    slug: "lesvos",
    name: "Hotels & Rooms to let in Lesvos",
    place: "Lesvos",
    info: {
      en: "Discover top-rated accommodation in Lesvos, from picturesque seaside rooms to traditional boutique stays.",
      el: "Ανακαλύψτε επιλεγμένη διαμονή στη Λέσβο, από παραθαλάσσια δωμάτια μέχρι παραδοσιακά boutique καταλύματα.",
    },
    image: "/images/businesses/Iren/2.png",
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
    perfectFor: {
      en: ["Couples looking for a romantic escape", "Families wanting a calm environment", "Those exploring Lesvos on a road trip"],
      el: ["Ζευγάρια που αναζητούν ρομαντική απόδραση", "Οικογένειες που θέλουν ήρεμο περιβάλλον", "Όσους εξερευνούν τη Λέσβο με αυτοκίνητο"],
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
      en: "Lesvos Gastronomy Guide: Best Places to Eat & Must-Try Local Delicacies",
      el: "Γαστρονομικός Οδηγός Λέσβου: Πού να Φας & Τοπικές Νοστιμιές που Πρέπει να Δοκιμάσεις",
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
    image: "/images/tours/lesvos-food.png",
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
    image: "/images/food-santorini.jpg",
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
      en: "Traditional Tavern Flavors in Crete: The Best Local Food in Chania, Rethymno, Heraklion & Lasithi",
      el: "Παραδοσιακές Γεύσεις της Κρήτης: Το Καλύτερο Τοπικό Φαγητό σε Χανιά, Ρέθυμνο, Ηράκλειο & Λασίθι",
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
    image: "/images/food-crete.jpg",
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