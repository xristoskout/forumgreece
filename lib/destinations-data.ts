import type { Destination } from "./types";
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
        href: "/hotels/santorini",
        label: { en: "Where to Stay in Santorini", el: "Πού να μείνεις στη Σαντορίνη" }
      }
    ],
    featured: true,
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
        href: "/hotels/mykonos",
        label: { en: "Where to Stay in Mykonos", el: "Πού να μείνεις στη Μύκονο" }
      },
      {
        href: "/travel-info/best-tours-in-mykonos",
        label: { en: "Best Tours in Mykonos", el: "Καλύτερες Εκδρομές στη Μύκονο" }
      }
    ],
    featured: true,
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
        href: "/hotels/crete",
        label: { en: "Where to Stay in Crete", el: "Πού να μείνεις στην Κρήτη" }
      },
      {
        href: "/travel-info/best-hotels-in-crete-for-families",
        label: { en: "Best Family Hotels", el: "Οικογενειακά Ξενοδοχεία" }
      }
    ],
    featured: true,
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
        href: "/hotels/kefalonia",
        label: { en: "Where to Stay in Kefalonia", el: "Πού να μείνεις στην Κεφαλονιά" }
      },
      {
        href: "/travel-info/best-boat-trips-in-kefalonia",
        label: { en: "Best Boat Trips", el: "Εκδρομές με Σκάφος" }
      }
    ],
    featured: true,
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
        href: "/hotels/lesvos",
        label: { en: "Where to Stay in Lesvos", el: "Πού να μείνεις στη Λέσβο" }
      },
      {
        href: "/travel-info/things-to-do-in-lesvos",
        label: { en: "Things to Do in Lesvos", el: "Τι να Κάνεις στη Λέσβο" }
      }
    ],
    featured: true,
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
        href: "/hotels/athens",
        label: { en: "Where to Stay in Athens", el: "Πού να μείνεις στην Αθήνα" }
      },
      {
        href: "/travel-info/where-to-stay-in-athens-for-first-time-visitors",
        label: { en: "Where to Stay (First Timers)", el: "Πού να Μείνεις (Πρώτη Φορά)" }
      }
    ],
    featured: true,
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
    featured: true,
    seo: {
      title: {
        en: "Corfu Travel Guide: Best Beaches, Old Town & Travel Tips",
        el: "Κέρκυρα: Οδηγός Ταξιδιού — Παραλίες, Παλιά Πόλη & Χρήσιμες Συμβουλές"
      },
      description: {
        en: "Detailed travel guide to Corfu: why it's worth visiting, best time, how to get there, top attractions and experiences, beaches for every taste, surprise villages, local flavors and practical tips + FAQ.",
        el: "Αναλυτικός ταξιδιωτικός οδηγός για Κέρκυρα: γιατί αξίζει, καλύτερη εποχή, πώς φτάνεις, κορυφαία αξιοθέατα και εμπειρίες, παραλίες για κάθε γούστο, χωριά-έκπληξη, τοπικές γεύσεις και πρακτικά tips + FAQ."
      }
    },
    guideLinks: [
      {
        href: "/hotels/corfu",
        label: { en: "Where to Stay in Corfu", el: "Πού να μείνεις στην Κέρκυρα" }
      }
    ],
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
    featured: true,
    seo: {
      title: {
        en: "Nafplio Travel Guide: Palamidi, Bourtzi, Beaches & Things to Do",
        el: "Ναύπλιο: Οδηγός Ταξιδιού — Παλαμήδι, Μπούρτζι, Παραλίες & Αξιοθέατα"
      },
      description: {
        en: "Complete guide to Nafplio: why it's worth visiting, best time, how to go, top attractions (Old Town, Palamidi, Bourtzi, Akronafplia), beaches and nearby villages, local food, practical tips + FAQ to enjoy it like a local.",
        el: "Πλήρης οδηγός για Ναύπλιο: γιατί αξίζει, καλύτερη εποχή, πώς θα πας, κορυφαία αξιοθέατα (Παλιά Πόλη, Παλαμήδι, Μπούρτζι, Ακροναυπλία), παραλίες και κοντινά χωριά, τοπικές γεύσεις, πρακτικά tips + FAQ για να το απολαύσεις σαν ντόπιος."
      }
    },
    guideLinks: [
      {
        href: "/hotels/nayplio-odigos-taxidiou",
        label: { en: "Where to Stay in Nafplio", el: "Πού να μείνεις στο Ναύπλιο" }
      }
    ],
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
    featured: true,
    seo: {
      title: {
        en: "Thessaloniki Travel Guide: Attractions, Food & Best Things to Do",
        el: "Θεσσαλονίκη: Οδηγός Ταξιδιού — Αξιοθέατα, Φαγητό & Τι να Δεις"
      },
      description: {
        en: "Detailed guide to Thessaloniki: why it's worth it, best time, how to get there, what to see (UNESCO monuments, White Tower, Upper Town, Rotunda), where to eat (markets, bougatsa, koulouri), nearby beaches (Peraia, Agia Triada, Epanomi) and practical tips + FAQ.",
        el: "Αναλυτικός οδηγός για Θεσσαλονίκη: γιατί αξίζει, καλύτερη εποχή, πώς φτάνεις, τι να δεις (UNESCO μνημεία, Λευκός Πύργος, Άνω Πόλη, Ροτόντα), πού να φας (αγορές, bougatsa, koulouri), κοντινές παραλίες (Περαία, Αγ. Τριάδα, Επανομή) και πρακτικά tips + FAQ."
      }
    },
    guideLinks: [
      {
        href: "/hotels/thessaloniki",
        label: { en: "Where to Stay in Thessaloniki", el: "Πού να μείνεις στη Θεσσαλονίκη" }
      }
    ],
  },
  {
    slug: "paros",
    name: "Paros",
    region: { en: "Cyclades", el: "Κυκλάδες" },
    blurb: { en: "Traditional villages, beaches and balanced Cycladic charm.", el: "Παραδοσιακά χωριά, παραλίες και κυκλαδίτικη γοητεία." },
    image: "/images/paros.webp",
    overview: { 
      en: "Traditional villages, golden beaches, laid-back Cycladic charm and one of the most balanced island experiences in Greece.", 
      el: "Παραδοσιακά χωριά, χρυσές παραλίες, χαλαρή κυκλαδίτικη γοητεία και μια από τις πιο ισορροπημένες εμπειρίες στην Ελλάδα." 
    },
    highlights: { en: ["Naoussa harbor", "Parikia old town", "Golden Beach"], el: ["Λιμανάκι Νάουσας", "Παλιά Πόλη Παροικιάς", "Χρυσή Ακτή"] },
    featured: true,
    guideLinks: [
      {
        href: "/hotels/paros",
        label: { en: "Explore stays in Paros", el: "Ανακαλύψτε διαμονή στην Πάρο" }
      },
      {
        href: "/tours/all",
        label: { en: "See tours & experiences", el: "Δείτε εμπειρίες & tours" }
      },
      {
        href: "/collections/greece-food-and-drink",
        label: { en: "Discover local food ideas", el: "Ανακαλύψτε τοπικές γεύσεις" }
      }
    ],
    seo: {
      title: {
        en: "Paros Travel Guide | Beaches, Villages, Food & Where to Stay | GoGreeceNow",
        el: "Πάρος: Οδηγός Ταξιδιού | Παραλίες, Χωριά, Φαγητό & Διαμονή | GoGreeceNow"
      },
      description: {
        en: "Plan your trip to Paros with our travel guide. Discover beaches, villages, food, where to stay, and the best things to do on one of the most balanced islands in the Cyclades.",
        el: "Οργανώστε το ταξίδι σας στην Πάρο με τον οδηγό μας. Ανακαλύψτε παραλίες, χωριά, επιλογές για φαγητό, διαμονή και εμπειρίες στο πιο ισορροπημένο νησί των Κυκλάδων."
      }
    }
  },
  {
    slug: "milos",
    name: "Milos",
    region: { en: "Cyclades", el: "Κυκλάδες" },
    blurb: { en: "Volcanic coastline, rare rock formations and turquoise waters.", el: "Ηφαιστειακό τοπίο, σπάνιοι σχηματισμοί και τυρκουάζ νερά." },
    image: "/images/milos.webp",
    overview: { 
      en: "Volcanic coastline, whitewashed villages, turquoise waters and one of the most distinctive beach landscapes in Greece.", 
      el: "Ηφαιστειακή ακτογραμμή, ολόλευκα χωριά, τυρκουάζ νερά και ένα από τα πιο ξεχωριστά παραθαλάσσια τοπία στην Ελλάδα." 
    },
    highlights: { en: ["Sarakiniko beach", "Kleftiko caves", "Colorful Syrmata"], el: ["Παραλία Σαρακίνικο", "Σπηλιές στο Κλέφτικο", "Πολύχρωμα Σύρματα"] },
    featured: true,
    guideLinks: [
      {
        href: "/hotels/milos",
        label: { en: "Explore stays in Milos", el: "Ανακαλύψτε διαμονή στη Μήλο" }
      },
      {
        href: "/tours/all",
        label: { en: "See tours & experiences", el: "Δείτε εμπειρίες & tours" }
      },
      {
        href: "/collections/greece-food-and-drink",
        label: { en: "Discover local food ideas", el: "Ανακαλύψτε τοπικές γεύσεις" }
      }
    ],
    seo: {
      title: {
        en: "Milos Travel Guide | Beaches, Villages, Food & Where to Stay | GoGreeceNow",
        el: "Μήλος: Οδηγός Ταξιδιού | Παραλίες, Χωριά, Φαγητό & Διαμονή | GoGreeceNow"
      },
      description: {
        en: "Discover Milos with our travel guide. Explore beaches, villages, food, where to stay, and the best things to do on one of Greece's most scenic and distinctive islands.",
        el: "Ανακαλύψτε τη Μήλο με τον οδηγό μας. Εξερευνήστε παραλίες, χωριά, φαγητό, διαμονή και εμπειρίες σε ένα από τα πιο γραφικά και ξεχωριστά νησιά της Ελλάδας."
      }
    }
  },
  {
    slug: "zakynthos",
    name: "Zakynthos",
    region: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
    blurb: { en: "Dramatic blue waters, iconic beaches and sea caves.", el: "Εντυπωσιακά γαλάζια νερά, εμβληματικές παραλίες και θαλάσσιες σπηλιές." },
    image: "/images/zakynthos.webp",
    overview: { 
      en: "Dramatic blue waters, iconic beaches, sea caves and relaxed Ionian island holidays with a scenic coastal edge.", 
      el: "Εντυπωσιακά γαλάζια νερά, εμβληματικές παραλίες, θαλάσσιες σπηλιές και χαλαρές διακοπές στο Ιόνιο με μαγευτικό παραθαλάσσιο σκηνικό." 
    },
    highlights: { en: ["Navagio Beach", "Blue Caves"], el: ["Παραλία Ναυάγιο", "Γαλάζιες Σπηλιές"] },
    featured: true,
    guideLinks: [
      {
        href: "/hotels/zakynthos",
        label: { en: "Explore stays in Zakynthos", el: "Ανακαλύψτε διαμονή στη Ζάκυνθο" }
      },
      {
        href: "/tours/all",
        label: { en: "See tours & experiences", el: "Δείτε εμπειρίες & tours" }
      },
      {
        href: "/collections/greece-food-and-drink",
        label: { en: "Discover local food ideas", el: "Ανακαλύψτε τοπικές γεύσεις" }
      }
    ],
    seo: {
      title: {
        en: "Zakynthos Travel Guide | Beaches, Boat Trips, Food & Where to Stay | GoGreeceNow",
        el: "Ζάκυνθος: Οδηγός Ταξιδιού | Παραλίες, Διαμονή & Εμπειρίες | GoGreeceNow"
      },
      description: {
        en: "Plan your trip to Zakynthos with our travel guide. Discover beaches, boat trips, food, where to stay, and the best things to do on one of Greece's most scenic Ionian islands.",
        el: "Οργανώστε το ταξίδι σας στη Ζάκυνθο με τον οδηγό μας. Ανακαλύψτε παραλίες, εκδρομές, φαγητό και διαμονή σε ένα από τα πιο γραφικά νησιά του Ιονίου."
      }
    }
  },
  {
    slug: "rhodes",
    name: "Rhodes",
    region: { en: "Dodecanese", el: "Δωδεκάνησα" },
    blurb: { en: "Medieval history, grand scale and diverse coastline.", el: "Μεσαιωνική ιστορία, μεγάλα τοπία και ποικιλόμορφη ακτογραμμή." },
    image: "/images/rhodes.webp",
    overview: { 
      en: "Medieval streets, grand island scale, sunny beaches and one of the richest mixes of history and holiday atmosphere in Greece.", 
      el: "Μεσαιωνικά σοκάκια, μεγάλο νησιωτικό μέγεθος, ηλιόλουστες παραλίες και ένας από τους πιο πλούσιους συνδυασμούς ιστορίας και ατμόσφαιρας διακοπών στην Ελλάδα." 
    },
    highlights: { en: ["Medieval Old Town", "Lindos Acropolis"], el: ["Μεσαιωνική Πόλη", "Ακρόπολη Λίνδου"] },
    featured: true,
    guideLinks: [
      {
        href: "/tours/all",
        label: { en: "See tours & experiences", el: "Δείτε εμπειρίες & tours" }
      },
      {
        href: "/hotels/rhodes",
        label: { en: "Explore stays in Rhodes", el: "Ανακαλύψτε διαμονή στη Ρόδο" }
      },
      {
        href: "/travel-info/greece-islands-map-guide",
        label: { en: "Explore Greek Islands", el: "Εξερευνήστε τα Ελληνικά Νησιά" }
      }
    ],
    seo: {
      title: {
        en: "Rhodes Travel Guide | Old Town, Beaches, Food & Where to Stay | GoGreeceNow",
        el: "Ρόδος: Οδηγός Ταξιδιού | Παλιά Πόλη, Παραλίες, Φαγητό & Διαμονή | GoGreeceNow"
      },
      description: {
        en: "Plan your trip to Rhodes with our travel guide. Discover the Old Town, beaches, food, where to stay, and the best things to do on one of Greece's most historic and diverse islands.",
        el: "Οργανώστε το ταξίδι σας στη Ρόδο με τον οδηγό μας. Ανακαλύψτε την Παλιά Πόλη, τις παραλίες, το φαγητό, τη διαμονή και τις καλύτερες εμπειρίες σε ένα από τα πιο ιστορικά νησιά της Ελλάδας."
      }
    }
  },
  {
    slug: "halkidiki",
    name: "Halkidiki",
    region: { en: "Northern Greece", el: "Βόρεια Ελλάδα" },
    blurb: { en: "Crystal waters, pine forests and three unique peninsulas.", el: "Κρυστάλλινα νερά, πευκοδάση και τρεις μοναδικές χερσόνησοι." },
    image: "/images/halkidiki.webp",
    overview: { 
      en: "Crystal waters, pine-covered coastlines, beach escapes and one of the most varied summer regions in northern Greece.", 
      el: "Κρυστάλλινα νερά, πευκόφυτες ακτές, αποδράσεις σε παραλίες και μία από τις πιο ποικιλόμορφες καλοκαιρινές περιοχές της βόρειας Ελλάδας." 
    },
    highlights: { en: ["Kassandra nightlife", "Sithonia beaches"], el: ["Νυχτερινή ζωή Κασσάνδρας", "Παραλίες Σιθωνίας"] },
    featured: true,
    guideLinks: [
      {
        href: "/tours/all",
        label: { en: "See tours & experiences", el: "Δείτε εμπειρίες & tours" }
      },
      {
        href: "/hotels/halkidiki",
        label: { en: "Explore stays in Halkidiki", el: "Ανακαλύψτε διαμονή στη Χαλκιδική" }
      },
      {
        href: "/destinations/thessaloniki",
        label: { en: "Explore Northern Greece", el: "Εξερευνήστε τη Βόρεια Ελλάδα" }
      }
    ],
    seo: {
      title: {
        en: "Halkidiki Travel Guide | Beaches, Areas, Food & Where to Stay | GoGreeceNow",
        el: "Χαλκιδική: Οδηγός Ταξιδιού | Παραλίες, Διαμονή & Εμπειρίες | GoGreeceNow"
      },
      description: {
        en: "Plan your trip to Halkidiki with our travel guide. Discover beaches, areas, food, where to stay, and the best things to do in one of northern Greece's most popular summer destinations.",
        el: "Οργανώστε το ταξίδι σας στη Χαλκιδική με τον οδηγό μας. Ανακαλύψτε τις παραλίες, τις καλύτερες περιοχές, το φαγητό και τη διαμονή σε έναν από τους κορυφαίους καλοκαιρινούς προορισμούς."
      }
    }
  },
  {
    slug: "meteora",
    name: "Meteora",
    region: { en: "Thessaly", el: "Θεσσαλία" },
    blurb: { en: "Monasteries perched on giant rocks, a spiritual landscape.", el: "Μοναστήρια σκαρφαλωμένα σε βράχους, ένα πνευματικό τοπίο." },
    image: "/images/meteora.webp",
    overview: { 
      en: "Towering rock formations, cliff-top monasteries and one of the most extraordinary landscapes in Greece.", 
      el: "Πανύψηλοι βράχοι, μοναστήρια στην κορυφή και ένα από τα πιο ασυνήθιστα και εντυπωσιακά τοπία στην Ελλάδα." 
    },
    highlights: { en: ["Great Meteoron", "Sunset views"], el: ["Μεγάλο Μετέωρο", "Ηλιοβασίλεμα"] },
    featured: true,
    guideLinks: [
      {
        href: "/tours/all",
        label: { en: "See tours & experiences", el: "Δείτε εμπειρίες & tours" }
      },
      {
        href: "/hotels/meteora",
        label: { en: "Explore stays in Meteora", el: "Ανακαλύψτε διαμονή στα Μετέωρα" }
      },
      {
        href: "/destinations",
        label: { en: "Explore Northern Greece", el: "Εξερευνήστε τη Βόρεια Ελλάδα" }
      }
    ],
    seo: {
      title: {
        en: "Meteora Travel Guide | Monasteries, Views, Food & Where to Stay | GoGreeceNow",
        el: "Μετέωρα: Οδηγός Ταξιδιού | Μοναστήρια, Θέα, Διαμονή & Εμπειρίες | GoGreeceNow"
      },
      description: {
        en: "Plan your trip to Meteora with our travel guide. Discover monasteries, viewpoints, local food, where to stay, and the best things to do in one of Greece's most extraordinary mainland destinations.",
        el: "Οργανώστε το ταξίδι σας στα Μετέωρα με τον οδηγό μας. Ανακαλύψτε τα μοναστήρια, τα σημεία θέας, τη διαμονή και τις καλύτερες εμπειρίες σε έναν από τους πιο εντυπωσιακούς προορισμούς."
      }
    }
  },
  {
    slug: "monemvasia",
    name: "Monemvasia",
    region: { en: "Peloponnese", el: "Πελοπόννησος" },
    blurb: { en: "Medieval fortress city built on a massive sea rock.", el: "Μεσαιωνική καστροπολιτεία χτισμένη πάνω στο βράχο." },
    image: "/images/monemvasia.webp",
    overview: { 
      en: "Medieval stone alleys, sea views, fortress atmosphere and one of the most distinctive romantic escapes in the Peloponnese.", 
      el: "Μεσαιωνικά πέτρινα σοκάκια, θέα στη θάλασσα, ατμόσφαιρα κάστρου και μία από τις πιο ξεχωριστές ρομαντικές αποδράσεις στην Πελοπόννησο." 
    },
    highlights: { en: ["Upper Town views", "Stone alleys"], el: ["Θέα από την Άνω Πόλη", "Πέτρινα σοκάκια"] },
    featured: true,
    guideLinks: [
      {
        href: "/tours/all",
        label: { en: "See tours & experiences", el: "Δείτε εμπειρίες & tours" }
      },
      {
        href: "/hotels/monemvasia",
        label: { en: "Explore stays in Monemvasia", el: "Ανακαλύψτε διαμονή στη Μονεμβασιά" }
      },
      {
        href: "/destinations",
        label: { en: "Explore Peloponnese destinations", el: "Εξερευνήστε την Πελοπόννησο" }
      }
    ],
    seo: {
      title: {
        en: "Monemvasia Travel Guide | Old Town, Views, Food & Where to Stay | GoGreeceNow",
        el: "Μονεμβασιά: Οδηγός Ταξιδιού | Παλιά Πόλη, Φαγητό & Διαμονή | GoGreeceNow"
      },
      description: {
        en: "Plan your trip to Monemvasia with our travel guide. Discover the old town, sea views, local food, where to stay, and the best things to do in one of the Peloponnese's most unique destinations.",
        el: "Οργανώστε το ταξίδι σας στη Μονεμβασιά με τον οδηγό μας. Ανακαλύψτε την παλιά πόλη, την τοπική γαστρονομία, τη διαμονή και τις καλύτερες εμπειρίες σε έναν από τους πιο μοναδικούς προορισμούς."
      }
    }
  },
  {
    slug: "chania",
    name: "Chania",
    region: { en: "Crete", el: "Κρήτη" },
    blurb: { en: "Venetian harbor, lighthouse and charming old town alleys.", el: "Ενετικό λιμάνι, φάρος και γραφικά σοκάκια." },
    image: "/images/chania.webp",
    overview: { 
      en: "Venetian harbor charm, old town alleys, great food, and some of the most memorable beach and road trip experiences in Crete.", 
      el: "Γοητεία ενετικού λιμανιού, σοκάκια παλιάς πόλης, εξαιρετικό φαγητό και μερικές από τις πιο αξέχαστες εμπειρίες σε παραλίες και road trips στην Κρήτη." 
    },
    highlights: { en: ["Venetian Harbor", "Old Market"], el: ["Ενετικό Λιμάνι", "Παλιά Αγορά"] },
    featured: true,
    guideLinks: [
      {
        href: "/destinations/crete",
        label: { en: "Explore Crete Guide", el: "Οδηγός Ταξιδιού Κρήτης" }
      },
      {
        href: "/hotels/chania",
        label: { en: "Explore stays in Chania", el: "Ανακαλύψτε διαμονή στα Χανιά" }
      },
      {
        href: "/tours/all",
        label: { en: "See tours & experiences", el: "Δείτε εμπειρίες & tours" }
      },
      {
        href: "/collections/greece-food-and-drink",
        label: { en: "Discover local food ideas", el: "Ανακαλύψτε τοπικές γεύσεις" }
      }
    ],
    seo: {
      title: {
        en: "Chania Travel Guide | Old Town, Beaches, Food & Where to Stay | GoGreeceNow",
        el: "Χανιά: Οδηγός Ταξιδιού | Παλιά Πόλη, Παραλίες, Φαγητό & Διαμονή | GoGreeceNow"
      },
      description: {
        en: "Plan your trip to Chania with our travel guide. Discover the old town, beaches, food, where to stay, and the best things to do in one of Crete's most beautiful destinations.",
        el: "Οργανώστε το ταξίδι σας στα Χανιά με τον οδηγό μας. Ανακαλύψτε την παλιά πόλη, τις παραλίες, το φαγητό, τη διαμονή και τις καλύτερες εμπειρίες σε έναν από τους ομορφότερους προορισμούς της Κρήτης."
      }
    }
  },
  {
    slug: "parga",
    name: "Parga",
    region: { en: "Epirus", el: "Ήπειρος" },
    blurb: { en: "Amphitheater town with island vibes and a Venetian castle.", el: "Αμφιθεατρική πόλη με νησιώτικο αέρα και ενετικό κάστρο." },
    image: "/images/parga.webp",
    overview: { 
      en: "Colorful hillside houses, Ionian waters, a Venetian castle and one of mainland Greece’s most charming seaside escapes.", 
      el: "Πολύχρωμα αμφιθεατρικά σπίτια, νερά του Ιονίου, ένα ενετικό κάστρο και μία από τις πιο γοητευτικές παραθαλάσσιες αποδράσεις της ηπειρωτικής Ελλάδας." 
    },
    highlights: { en: ["Venetian Castle", "Valtos Beach"], el: ["Ενετικό Κάστρο", "Παραλία Βάλτου"] },
    featured: true,
    guideLinks: [
      {
        href: "/tours/all",
        label: { en: "See tours & experiences", el: "Δείτε εμπειρίες & tours" }
      },
      {
        href: "/hotels/parga",
        label: { en: "Explore stays in Parga", el: "Ανακαλύψτε διαμονή στην Πάργα" }
      },
      {
        href: "/destinations",
        label: { en: "Explore Epirus destinations", el: "Εξερευνήστε την Ήπειρο" }
      }
    ],
    seo: {
      title: {
        en: "Parga Travel Guide | Beaches, Old Town, Food & Where to Stay | GoGreeceNow",
        el: "Πάργα: Οδηγός Ταξιδιού | Παραλίες, Παλιά Πόλη, Διαμονή & Εμπειρίες | GoGreeceNow"
      },
      description: {
        en: "Plan your trip to Parga with our travel guide. Discover beaches, the old town, food, where to stay, and the best things to do in one of Epirus' most charming coastal destinations.",
        el: "Οργανώστε το ταξίδι σας στην Πάργα με τον οδηγό μας. Ανακαλύψτε τις παραλίες, την παλιά πόλη, τη διαμονή και τις καλύτερες εμπειρίες στον πιο γοητευτικό προορισμό της Ηπείρου."
      }
    }
  },
  {
    slug: "delphi",
    name: "Delphi",
    region: { en: "Mainland escapes", el: "Ηπειρωτική Ελλάδα" },
    blurb: { en: "The ancient 'Navel of the World' on the slopes of Parnassus.", el: "Ο αρχαίος 'Ομφαλός της Γης' στις πλαγιές του Παρνασσού." },
    image: "/images/delphi.webp",
    overview: { 
      en: "Ancient sanctuary, mountain slopes, deep history and one of Greece’s most powerful cultural landscapes.", 
      el: "Αρχαίο ιερό, πλαγιές του Παρνασσού, βαθιά ιστορία και ένα από τα πιο ισχυρά πολιτιστικά τοπία της Ελλάδας." 
    },
    highlights: { en: ["Apollo Temple", "Ancient Theater"], el: ["Ναός Απόλλωνα", "Αρχαίο Θέατρο"] },
    featured: true,
    guideLinks: [
      {
        href: "/tours/all",
        label: { en: "See tours & experiences", el: "Δείτε εμπειρίες & tours" }
      },
      {
        href: "/hotels/delphi",
        label: { en: "Explore stays in Delphi", el: "Ανακαλύψτε διαμονή στους Δελφούς" }
      },
      {
        href: "/destinations",
        label: { en: "Explore Mainland Escapes", el: "Εξερευνήστε την Ηπειρωτική Ελλάδα" }
      }
    ],
    seo: {
      title: {
        en: "Delphi Travel Guide | Ancient Site, Views, Food & Where to Stay | GoGreeceNow",
        el: "Δελφοί: Οδηγός Ταξιδιού | Αρχαίο Μαντείο, Διαμονή & Εμπειρίες | GoGreeceNow"
      },
      description: {
        en: "Plan your trip to Delphi with our travel guide. Discover the ancient site, mountain views, local food, where to stay, and the best things to do in one of Greece's most symbolic mainland destinations.",
        el: "Οργανώστε το ταξίδι σας στους Δελφούς με τον οδηγό μας. Ανακαλύψτε τον αρχαιολογικό χώρο, τη διαμονή και τις καλύτερες εμπειρίες σε έναν από τους πιο συμβολικούς προορισμούς."
      }
    }
  }
];

