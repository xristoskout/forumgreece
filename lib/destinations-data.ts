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
    slug: "nafplio",
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
        href: "/hotels/nafplio",
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
        en: "Paros Travel Guide | Beaches, Villages, Food & Where to Stay",
        el: "Πάρος: Οδηγός Ταξιδιού | Παραλίες, Χωριά, Φαγητό & Διαμονή"
      },
      description: {
        en: "Plan your trip to Paros with our travel guide. Discover beaches, villages, food, where to stay, and the best things to do on one of the most balanced islands in the Cyclades.",
        el: "Οργανώστε το ταξίδι σας στην Πάρο με τον οδηγό μας. Ανακαλύψτε παραλίες, χωριά, επιλογές για φαγητό, διαμονή και εμπειρίες στο πιο ισορροπημένο νησί των Κυκλάδων."
      }
    }
  },
  {
    slug: "naxos",
    name: "Naxos",
    region: { en: "Cyclades", el: "Κυκλάδες" },
    blurb: { en: "Big Cycladic energy, long sandy beaches, mountain villages and authentic island life.", el: "Μεγάλη κυκλαδίτικη ενέργεια, απέραντες αμμουδιές, ορεινά χωριά και αυθεντική νησιωτική ζωή." },
    image: "/images/naxos.webp",
    overview: { 
      en: "Long sandy beaches, a massive Venetian castle, mountain villages, fresh local food and a relaxed but complete Cycladic experience.", 
      el: "Απέραντες αμμουδιές, ένα τεράστιο ενετικό κάστρο, ορεινά χωριά, φρέσκο τοπικό φαγητό και μια χαλαρή αλλά ολοκληρωμένη κυκλαδίτικη εμπειρία." 
    },
    highlights: { en: ["Naxos Old Town & Castle", "Agios Prokopios beach", "Mountain villages (Halki, Apeiranthos)", "Temple of Apollo (Portara)"], el: ["Παλιά Πόλη & Κάστρο Νάξου", "Παραλία Άγιος Προκόπιος", "Ορεινά χωριά (Χαλκί, Απείρανθος)", "Πορτάρα (Ναός του Απόλλωνα)"] },
    featured: true,
    guideLinks: [
      {
        href: "/hotels/naxos",
        label: { en: "Explore stays in Naxos", el: "Ανακαλύψτε διαμονή στη Νάξο" }
      },
      {
        href: "/tours/all",
        label: { en: "See tours & experiences", el: "Δείτε εμπειρίες & tours" }
      }
    ],
    seo: {
      title: {
        en: "Naxos Travel Guide | Beaches, Villages, Food & Where to Stay",
        el: "Νάξος: Οδηγός Ταξιδιού | Παραλίες, Χωριά, Φαγητό & Διαμονή"
      },
      description: {
        en: "Plan your trip to Naxos with our travel guide. Discover beaches, villages, food, where to stay, and the best things to do on the largest and most authentic island in the Cyclades.",
        el: "Οργανώστε το ταξίδι σας στη Νάξο με τον οδηγό μας. Ανακαλύψτε παραλίες, χωριά, επιλογές για φαγητό, διαμονή και εμπειρίες στο μεγαλύτερο και πιο αυθεντικό νησί των Κυκλάδων."
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
        en: "Milos Travel Guide | Beaches, Villages, Food & Where to Stay",
        el: "Μήλος: Οδηγός Ταξιδιού | Παραλίες, Χωριά, Φαγητό & Διαμονή"
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
        en: "Zakynthos Travel Guide | Beaches, Boat Trips, Food & Where to Stay",
        el: "Ζάκυνθος: Οδηγός Ταξιδιού | Παραλίες, Διαμονή & Εμπειρίες"
      },
      description: {
        en: "Plan your trip to Zakynthos with our travel guide. Discover beaches, boat trips, food, where to stay, and the best things to do on one of Greece's most scenic Ionian islands.",
        el: "Οργανώστε το ταξίδι σας στη Ζάκυνθο με τον οδηγό μας. Ανακαλύψτε παραλίες, εκδρομές, φαγητό και διαμονή σε ένα από τα πιο γραφικά νησιά του Ιονίου."
      }
    }
  },
  {
    slug: "lefkada",
    name: "Lefkada",
    region: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
    blurb: {
      en: "White limestone cliffs, turquoise beaches, and the only Ionian island you can drive to.",
      el: "Λευκοί ασβεστολιθικοί γκρεμοί, τιρκουάζ παραλίες και το μόνο ιόνιο νησί που μπορείς να οδηγήσεις."
    },
    image: "/images/lefkada-cover.webp",
    overview: {
      en: "Lefkada is the only Greek island you can drive to without a ferry — a thin causeway and a floating bridge connect it to the mainland. Towering white limestone cliffs plunge into waters so blue they seem to belong to the Caribbean. Ancient villages cling to hillsides, and on the western coast, two of the most dramatic beaches in all of Greece wait at the end of winding mountain roads.",
      el: "Η Λευκάδα είναι το μόνο ελληνικό νησί που μπορείς να οδηγήσεις χωρίς πλοίο. Λευκοί ασβεστολιθικοί γκρεμοί βυθίζονται σε νερά που μοιάζουν με την Καραϊβική. Αρχαία χωριά σκαρφαλώνουν στις πλαγιές και στη δυτική ακτή, δύο από τις πιο εντυπωσιακές παραλίες της Ελλάδας σε περιμένουν."
    },
    highlights: {
      en: ["Porto Katsiki Beach", "Egremni Beach", "Nydri & Waterfalls"],
      el: ["Παραλία Πόρτο Κατσίκι", "Παραλία Εγκρεμνοί", "Νυδρί & Καταρράκτες"]
    },
    featured: true,
    seo: {
      title: {
        en: "Lefkada Travel Guide: Porto Katsiki, Egremni, Nydri & Things to Do | GoGreeceNow",
        el: "Λευκάδα: Οδηγός Ταξιδιού — Πόρτο Κατσίκι, Εγκρεμνοί, Νυδρί & Αξιοθέατα"
      },
      description: {
        en: "Complete travel guide to Lefkada: why it's worth it, best time to visit, how to get there by road, top beaches (Porto Katsiki, Egremni, Kathisma), villages, watersports, local food, practical tips & FAQ.",
        el: "Πλήρης ταξιδιωτικός οδηγός για Λευκάδα: γιατί αξίζει, καλύτερη εποχή, πώς φτάνεις οδικώς, κορυφαίες παραλίες (Πόρτο Κατσίκι, Εγκρεμνοί, Καθίσμα), χωριά, θαλάσσια σπορ, τοπική κουζίνα και πρακτικές συμβουλές."
      }
    },
    guideLinks: [
      {
        href: "/hotels/lefkada",
        label: { en: "Where to Stay in Lefkada", el: "Πού να μείνεις στη Λευκάδα" }
      }
    ]
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
        en: "Rhodes Travel Guide | Old Town, Beaches, Food & Where to Stay",
        el: "Ρόδος: Οδηγός Ταξιδιού | Παλιά Πόλη, Παραλίες, Φαγητό & Διαμονή"
      },
      description: {
        en: "Plan your trip to Rhodes with our travel guide. Discover the Old Town, beaches, food, where to stay, and the best things to do on one of Greece's most historic and diverse islands.",
        el: "Οργανώστε το ταξίδι σας στη Ρόδο με τον οδηγό μας. Ανακαλύψτε την Παλιά Πόλη, τις παραλίες, το φαγητό, τη διαμονή και τις καλύτερες εμπειρίες σε ένα από τα πιο ιστορικά νησιά της Ελλάδας."
      }
    }
  },
  {
    slug: "patmos",
    name: "Patmos",
    region: { en: "Dodecanese", el: "Δωδεκάνησα" },
    blurb: {
      en: "Sacred island with a medieval monastery, whitewashed Hora and crystalline coves.",
      el: "Ιερό νησί με βυζαντινό μοναστήρι, ολόλευκη Χώρα και κρυστάλλινους όρμους."
    },
    image: "/images/patmos.webp",
    overview: {
      en: "Patmos is the sacred island of the Aegean — a place of deep spiritual history, whitewashed villages, crystalline coves and a silence that feels intentional. The fortified Monastery of Saint John dominates Hora like a medieval crown, while Skala offers lively evenings and quiet mornings. If you're looking for [Where to Stay in Patmos](/hotels/patmos), the island's small scale means every base is well positioned.",
      el: "Η Πάτμος είναι το ιερό νησί του Αιγαίου — ένας τόπος βαθιάς πνευματικής ιστορίας, ολόλευκων χωριών, κρυστάλλινων όρμων και μιας σιωπής που μοιάζει εσκεμμένη. Η οχυρωμένη Μονή του Αγίου Ιωάννη δεσπόζει στη Χώρα σαν μεσαιωνικό στέμμα, ενώ η Σκάλα προσφέρει ζωντανά βράδια και ήσυχα πρωινά. Αν ψάχνετε [Πού να μείνετε στην Πάτμο](/hotels/patmos), η μικρή κλίμακα του νησιού σημαίνει ότι κάθε βάση είναι καλά τοποθετημένη."
    },
    highlights: {
      en: ["Monastery of St John (UNESCO)", "Cave of the Apocalypse", "Hora medieval village"],
      el: ["Μονή Αγίου Ιωάννη (UNESCO)", "Σπήλαιο Αποκάλυψης", "Μεσαιωνική Χώρα"]
    },
    featured: true,
    seo: {
      title: {
        en: "Patmos Travel Guide: Monastery, Beaches, Hora & Things to Do",
        el: "Πάτμος: Οδηγός Ταξιδιού — Μονή, Παραλίες, Χώρα & Αξιοθέατα"
      },
      description: {
        en: "Complete guide to Patmos: top attractions, best beaches, how to get there, where to stay and local tips for the sacred island of the Dodecanese.",
        el: "Πλήρης οδηγός για Πάτμο: κορυφαία αξιοθέατα, καλύτερες παραλίες, πώς φτάνεις, πού να μείνεις και τοπικές συμβουλές για το ιερό νησί των Δωδεκανήσων."
      }
    },
    guideLinks: [
      {
        href: "/hotels/patmos",
        label: { en: "Where to Stay in Patmos", el: "Πού να μείνεις στην Πάτμο" }
      }
    ],
  },
  {
    slug: "kos",
    name: "Kos",
    region: { en: "Dodecanese", el: "Δωδεκάνησα" },
    blurb: {
      en: "Ancient history, flat cycling terrain, turquoise beaches and the best gateway to the Dodecanese.",
      el: "Αρχαία ιστορία, επίπεδο έδαφος για ποδήλατο, τιρκουάζ παραλίες και η καλύτερη πύλη για τα Δωδεκάνησα."
    },
    image: "/images/kos-cover.webp",
    overview: {
      en: "Kos is the third-largest island of the Dodecanese and one of those places that tends to surprise people. The island is famous for its beaches and cycling culture, but what genuinely distinguishes it from other Greek beach destinations is the extraordinary layering of civilizations visible at every turn — Minoan traces, Classical ruins, Hellenistic sanctuaries, Byzantine towers, Ottoman mosques and Italian Neo-Classical architecture all occupying the same town squares, the same streets, the same harbor views. This is not incidental: Kos has been at the crossroads of the eastern Aegean for over three millennia, and the island wears that history without effort, almost casually, as a backdrop to taverna life and morning coffee.",
      el: "Η Κως είναι το τρίτο μεγαλύτερο νησί των Δωδεκανήσων και ένα από εκείνα τα μέρη που τείνουν να εκπλήσσουν. Το νησί φημίζεται για τις παραλίες και την ποδηλατική κουλτούρα του, αλλά αυτό που πραγματικά το ξεχωρίζει είναι η εκπληκτική στρωματογραφία πολιτισμών — μινωικά ίχνη, κλασικά ερείπια, ελληνιστικά ιερά, βυζαντινοί πύργοι, οθωμανικά τζαμιά και ιταλική νεοκλασική αρχιτεκτονία."
    },
    highlights: {
      en: ["Asklepion sanctuary", "Tigkaki & Marmari beaches", "Castle of the Knights"],
      el: ["Ασκληπιείο", "Παραλίες Τιγκάκι & Μαρμάρι", "Κάστρο των Ιπποτών"]
    },
    featured: true,
    seo: {
      title: {
        en: "Kos Travel Guide: Beaches, Asklepion, Villages & Things to Do",
        el: "Κως: Οδηγός Ταξιδιού — Παραλίες, Ασκληπιείο, Χωριά & Αξιοθέατα"
      },
      description: {
        en: "Complete travel guide to Kos: why it's worth it, best time to visit, how to get there, top attractions (Asklepion, Hippocrates Tree, Castle of the Knights), beaches for every style, local food, practical tips & FAQ.",
        el: "Πλήρης ταξιδιωτικός οδηγός για την Κω: αξιοθέατα (Ασκληπιείο, Πλάτανος Ιπποκράτη, Κάστρο), παραλίες, φαγητό, πρακτικές συμβουλές και Συχνές Ερωτήσεις."
      }
    },
    guideLinks: [
      {
        href: "/hotels/kos",
        label: { en: "Where to Stay in Kos", el: "Πού να μείνεις στην Κω" }
      }
    ],
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
        en: "Halkidiki Travel Guide | Beaches, Areas, Food & Where to Stay",
        el: "Χαλκιδική: Οδηγός Ταξιδιού | Παραλίες, Διαμονή & Εμπειρίες"
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
        en: "Meteora Travel Guide | Monasteries, Views, Food & Where to Stay",
        el: "Μετέωρα: Οδηγός Ταξιδιού | Μοναστήρια, Θέα, Διαμονή & Εμπειρίες"
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
        en: "Monemvasia Travel Guide | Old Town, Views, Food & Where to Stay",
        el: "Μονεμβασιά: Οδηγός Ταξιδιού | Παλιά Πόλη, Φαγητό & Διαμονή"
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
        en: "Chania Travel Guide | Old Town, Beaches, Food & Where to Stay",
        el: "Χανιά: Οδηγός Ταξιδιού | Παλιά Πόλη, Παραλίες, Φαγητό & Διαμονή"
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
        en: "Parga Travel Guide | Beaches, Old Town, Food & Where to Stay",
        el: "Πάργα: Οδηγός Ταξιδιού | Παραλίες, Παλιά Πόλη, Διαμονή & Εμπειρίες"
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
        en: "Delphi Travel Guide | Ancient Site, Views, Food & Where to Stay",
        el: "Δελφοί: Οδηγός Ταξιδιού | Αρχαίο Μαντείο, Διαμονή & Εμπειρίες"
      },
      description: {
        en: "Plan your trip to Delphi with our travel guide. Discover the ancient site, mountain views, local food, where to stay, and the best things to do in one of Greece's most symbolic mainland destinations.",
        el: "Οργανώστε το ταξίδι σας στους Δελφούς με τον οδηγό μας. Ανακαλύψτε τον αρχαιολογικό χώρο, τη διαμονή και τις καλύτερες εμπειρίες σε έναν από τους πιο συμβολικούς προορισμούς."
      }
    }
  },
  {
    slug: "evia",
    name: "Evia",
    region: { en: "Mainland escapes", el: "Ηπειρωτική Ελλάδα" },
    blurb: {
      en: "Wild mountains, thermal springs, and untouched beaches just a bridge-crossing away.",
      el: "Άγρια βουνά, ιαματικές πηγές και ανέγγιχτες παραλίες μόλις μια γέφυρα μακριά."
    },
    image: "/images/evia-cover.webp",
    overview: {
      en: "Evia (Euboea) is one of Greece’s most underestimated destinations. Connected to mainland Greece by bridges, it feels like a hybrid between an island and a continental escape: wild mountains, deep forests, thermal springs, untouched beaches, and traditional villages that have not been reshaped by mass tourism.",
      el: "Η Εύβοια είναι ένας από τους πιο υποτιμημένους προορισμούς της Ελλάδας. Συνδεδεμένη με την ηπειρωτική Ελλάδα μέσω γεφυρών, μοιάζει με υβρίδιο νησιού και ηπειρωτικής απόδρασης: άγρια βουνά, βαθιά δάση, ιαματικές πηγές, ανέγγιχτες παραλίες και παραδοσιακά χωριά."
    },
    highlights: {
      en: ["Edipsos thermal springs", "Mount Dirfys hiking", "Diverse coastlines"],
      el: ["Ιαματικές πηγές Αιδηψού", "Πεζοπορία στον Δίρφυ", "Ποικιλόμορφες ακτογραμμές"]
    },
    featured: true,
    seo: {
      title: {
        en: "Evia Travel Guide 2026: Beaches, Villages, Things to Do & Insider Tips",
        el: "Εύβοια: Οδηγός Ταξιδιού — Παραλίες, Χωριά, Αξιοθέατα & Tips"
      },
      description: {
        en: "Discover Evia (Euboea), Greece’s second-largest island. Complete travel guide with beaches, villages, hidden gems, food, hiking, hot springs, and things to do in 2026.",
        el: "Ανακαλύψτε την Εύβοια, το δεύτερο μεγαλύτερο νησί της Ελλάδας. Πλήρης ταξιδιωτικός οδηγός με παραλίες, χωριά, κρυμμένα διαμάντια, φαγητό, πεζοπορία, ιαματικές πηγές και τι να κάνεις το 2026."
      }
    },
    guideLinks: [
      {
        href: "/hotels/evia",
        label: { en: "Where to Stay in Evia", el: "Πού να μείνεις στην Εύβοια" }
      }
    ]
  },
  {
    slug: "patras",
    name: "Patras",
    region: { en: "Peloponnese", el: "Πελοπόννησος" },
    blurb: {
      en: "Carnival capital, gateway to Ancient Olympia, Delphi and the western Peloponnese coast.",
      el: "Πρωτεύουσα του Καρναβαλιού, πύλη για Αρχαία Ολυμπία, Δελφούς και τη δυτική ακτή της Πελοποννήσου."
    },
    image: "/images/patras.webp",
    overview: {
      en: "Patras is not an island. It does not have the postcard geometry that drives most Greek travel decisions. What it has is something rarer and more useful: it is a genuine city that functions as the perfect base for one of the richest clusters of destinations in the entire country. Greece's third-largest city sits at the western edge of the Peloponnese, where the Gulf of Patras opens toward the Ionian Sea. If you're looking for [Where to Stay in Patras](/hotels/patras), the city and its surrounding region offer an extraordinary range of options.",
      el: "Η Πάτρα δεν είναι νησί. Δεν έχει την γεωμετρία καρτ ποστάλ που καθορίζει τις περισσότερες ταξιδιωτικές αποφάσεις. Αυτό που έχει είναι κάτι πιο σπάνιο και χρήσιμο: είναι μια γνήσια πόλη που λειτουργεί ως τέλεια βάση για ένα από τα πλουσιότερα συμπλέγματα προορισμών σε ολόκληρη τη χώρα. Αν ψάχνετε [Πού να μείνετε στην Πάτρα](/hotels/patras), η πόλη και η γύρω περιοχή προσφέρουν εξαιρετική ποικιλία."
    },
    highlights: {
      en: ["Patras Carnival", "Ancient Olympia", "Delphi day trip", "Kalavrita rack railway", "Nafpaktos harbour", "Messolonghi lagoon", "Beaches of Ilia"],
      el: ["Καρναβάλι Πάτρας", "Αρχαία Ολυμπία", "Ημερήσια εκδρομή Δελφοί", "Οδοντωτός Καλαβρύτων", "Λιμάνι Ναυπάκτου", "Λιμνοθάλασσα Μεσολογγίου", "Παραλίες Ηλείας"]
    },
    featured: true,
    guideLinks: [
      {
        href: "/hotels/patras",
        label: { en: "Where to Stay in Patras", el: "Πού να μείνεις στην Πάτρα" }
      }
    ],
    seo: {
      title: {
        en: "Patras Travel Guide: Carnival, Ancient Olympia, Delphi & the Wider Region",
        el: "Πάτρα: Οδηγός Ταξιδιού — Καρναβάλι, Αρχαία Ολυμπία, Δελφοί & Ευρύτερη Περιοχή"
      },
      description: {
        en: "Complete travel guide to Patras and the wider region — Carnival, Ancient Olympia, Delphi, Kalavrita, Aigialeia coast, Nafpaktos, Messolonghi and the beaches of Ilia. Explore Greece's third city as a base for some of the country's greatest sites.",
        el: "Πλήρης ταξιδιωτικός οδηγός για την Πάτρα και την ευρύτερη περιοχή — Καρναβάλι, Αρχαία Ολυμπία, Δελφοί, Καλάβρυτα, Αιγιάλεια, Ναύπακτος, Μεσολόγγι και παραλίες Ηλείας."
      }
    }
  },
  {
    slug: "lemnos",
    name: "Lemnos",
    region: { en: "North Aegean", el: "Βόρειο Αιγαίο" },
    blurb: {
      en: "Volcanic landscape, wide sandy beaches, medieval castle and one of Greece's most authentic island atmospheres.",
      el: "Ηφαιστειακό τοπίο, απέραντες αμμώδεις παραλίες, μεσαιωνικό κάστρο και μια από τις πιο αυθεντικές νησιωτικές ατμόσφαιρες της Ελλάδας."
    },
    image: "/images/lemnos.webp",
    overview: {
      en: "Lemnos is the North Aegean's best kept secret — one of the most rewarding islands for travellers who know what they're looking for. The landscape is unlike the typical Greek island postcard: broad plains and golden hills, wide sandy bays with shallow turquoise water, volcanic outcrops. Myrina has one of the finest harbour towns in the Aegean. Lemnos has almost no mass tourism — the tavernas serve local food, the villages are genuinely inhabited, and the beaches are rarely crowded even in summer.",
      el: "Η Λήμνος είναι το καλύτερα κρυμμένο μυστικό του Βορείου Αιγαίου. Το τοπίο δεν μοιάζει με την τυπική ελληνική καρτ ποστάλ: κάμπ οι και χρυσοί λόφοι, αμμώδεις όρμοι, ηφαιστειακές εξάρσεις. Η Μύρινα έχει ένα από τα ωραιότερα λιμάνια του Αιγαίου. Η Λήμνος δεν έχει μαζικό τουρισμό — οι ταβέρνες σερβίρουν τοπικό φαγητό, τα χωριά είναι ζωντανά, οι παραλίες σπάνια γεμάτες."
    },
    highlights: {
      en: ["Myrina Castle & harbour", "Keros & Gomati beaches", "Kalathaki cheese & Muscat wine", "Poliochni — Europe's oldest city", "Authentic island life"],
      el: ["Κάστρο & λιμάνι Μύρινας", "Παραλίες Κέρος & Γομάτι", "Καλαθάκι Λήμνου & Μοσχάτο", "Πολιόχνη — η αρχαιότερη πόλη", "Αυθεντική νησιωτική ζωή"]
    },
    featured: true,
    seo: {
      title: {
        en: "Lemnos Travel Guide: Beaches, Villages, Local Food & Things to Do",
        el: "Λήμνος: Οδηγός Ταξιδιού — Παραλίες, Χωριά, Γαστρονομία & Αξιοθέατα"
      },
      description: {
        en: "Complete guide to Lemnos island: the best beaches, villages like Myrina and Plati, local food (Muscat wine, Kalathaki cheese, seafood), ancient sites, and practical tips.",
        el: "Πλήρης οδηγός για τη Λήμνο: καλύτερες παραλίες, χωριά, τοπική γαστρονομία (Μοσχάτο, Καλαθάκι), αρχαιολογικοί χώροι και πρακτικές συμβουλές."
      }
    }
  },
  {
    slug: "kalamata",
    name: "Kalamata",
    region: { en: "Peloponnese", el: "Πελοπόννησος" },
    blurb: {
      en: "Beaches, old town, castle, Costa Navarino and the gateway to the Mani peninsula.",
      el: "Παραλίες, παλιά πόλη, κάστρο, Costa Navarino και η πύλη για τη Μάνη."
    },
    image: "/images/kalamata.webp",
    overview: {
      en: "Kalamata is the city that the Peloponnese doesn't shout about enough. It sits at the head of the Messenian Gulf — a long arc of coastline between Taygetos mountains to the east and the fertile plain to the west. The city has a proper Old Town with Byzantine history, a waterfront that invites an evening walk, a beach that stretches for kilometres right in the city centre, and one of the best regional cuisines in southern Greece. But Kalamata is also the gateway to Costa Navarino, Pylos, the Mani peninsula, Ancient Messene and Mystras. This is a destination with real depth.",
      el: "Η Καλαμάτα είναι η πόλη που η Πελοπόννησος δεν διαφημίζει αρκετά. Βρίσκεται στην κορυφή του Μεσσηνιακού Κόλπου, ανάμεσα στα βουνά του Ταϋγέτου και την εύφορη πεδιάδα. Η πόλη έχει μια αυθεντική Παλιά Πόλη με βυζαντινή ιστορία, ένα παραλιακό μέτωπο που σε καλεί για βραδινό περίπατο, μια παραλία που εκτείνεται για χιλιόμετρα στο κέντρο της πόλης και μία από τις καλύτερες τοπικές κουζίνες στη νότια Ελλάδα. Αλλά η Καλαμάτα είναι επίσης η πύλη για Costa Navarino, Πύλο, Μάνη, Αρχαία Μεσσήνη και Μυστρά."
    },
    highlights: {
      en: ["Kalamata Beach & Old Town", "Costa Navarino & Voidokilia", "Deep Mani Peninsula", "Ancient Messene", "Local food & olive oil"],
      el: ["Παραλία & Παλιά Πόλη Καλαμάτας", "Costa Navarino & Voidokilia", "Χερσόνησος Μάνης", "Αρχαία Μεσσήνη", "Τοπική κουζίνα & ελαιόλαδο"]
    },
    featured: true,
    seo: {
      title: {
        en: "Kalamata Travel Guide: Beaches, Old Town, Mani & Costa Navarino",
        el: "Καλαμάτα: Οδηγός Ταξιδιού — Παραλίες, Παλιά Πόλη, Μάνη & Costa Navarino"
      },
      description: {
        en: "Complete guide to Kalamata and the Messinia region: best beaches, Old Town, Castle, what to eat, Costa Navarino, Mani, Pylos and Ancient Messene. Plan your Peloponnese trip.",
        el: "Πλήρης οδηγός για την Καλαμάτα και τη Μεσσηνία: καλύτερες παραλίες, Παλιά Πόλη, Κάστρο, φαγητό, Costa Navarino, Μάνη, Πύλος και Αρχαία Μεσσήνη."
      }
    }
  },
  {
    slug: "thassos",
    name: "Thassos",
    region: { en: "North Aegean", el: "Βόρειο Αιγαίο" },
    blurb: {
      en: "Greece's greenest island — marble beaches, pine forests, mountain villages and ancient ruins.",
      el: "Το πιο πράσινο νησί της Ελλάδας — μαρμάρινες παραλίες, πευκοδάση, ορεινά χωριά και αρχαία ερείπια.",
    },
    image: "/images/thassos.webp",
    overview: {
      en: "Thassos is the greenest island in Greece — dense pine forest covers the interior, marble-white beaches glow turquoise along the coast, and mountain villages like Theologos and Kastro sit deep in the hills. The ancient agora sits in the centre of Limenas, the capital, embedded into everyday life. Marble Beach (Skouries), Giola natural lagoon, and the 95km coastal circuit road make this one of the most complete island experiences in the North Aegean.",
      el: "Η Θάσος είναι το πιο πράσινο νησί της Ελλάδας — πυκνό πευκοδάσος καλύπτει το εσωτερικό, μαρμάρινες παραλίες λάμπουν στα παράλια, και ορεινά χωριά όπως το Θεολόγος και το Κάστρο βρίσκονται βαθιά στους λόφους. Η αρχαία αγορά βρίσκεται στο κέντρο της Λιμένα, ενταγμένη στην καθημερινή ζωή.",
    },
    highlights: {
      en: ["Marble Beach (Skouries)", "Theologos Village", "Ancient Agora of Limenas", "Giola Natural Lagoon"],
      el: ["Μαρμάρινη Παραλία (Σκουριές)", "Θεολόγος", "Αρχαία Αγορά Λιμένα", "Γκιόλα"],
    },
    guideLinks: [
      {
        href: "/hotels/thassos",
        label: { en: "Where to Stay in Thassos", el: "Πού να μείνεις στη Θάσο" }
      },
      {
        href: "/tours/all",
        label: { en: "Best Boat Trips", el: "Εκδρομές με Σκάφος" }
      }
    ],
    featured: true,
    seo: {
      title: {
        en: "Thassos Travel Guide 2026: Beaches, Villages, Marble & Local Food",
        el: "Θάσος: Οδηγός Ταξιδιού 2026 — Παραλίες, Χωριά, Μάρμαρο & Τοπικό Φαγητό"
      },
      description: {
        en: "Complete guide to Thassos island: the best beaches (Marble Beach, Golden Beach, Paradise), mountain villages like Theologos and Kastro, local food, ancient sites, and practical tips for Greece's greenest island.",
        el: "Πλήρης ταξιδιωτικός οδηγός για τη Θάσο: οι καλύτερες παραλίες, ορεινά χωριά, τοπικό φαγητό, αρχαιολογικοί χώροι και πρακτικές συμβουλές για το πιο πράσινο νησί της Ελλάδας."
      }
    }
  },
  {
    slug: "skiathos",
    name: "Skiathos",
    region: { en: "Sporades", el: "Σποράδες" },
    blurb: {
      en: "Pine forests, 65 beaches, vibrant nightlife, and an abandoned cliff-top castle.",
      el: "Πεύκα, 65 παραλίες, έντονη νυχτερινή ζωή και ένα εγκαταλελειμμένο κάστρο σε γκρεμό.",
    },
    image: "/images/skiathos.webp",
    overview: {
      en: "Skiathos is the green heart of the Aegean — an island where pine forests grow all the way to the waterline. With 65 beaches, a dramatic abandoned Kastro, and nightlife that punches well above its size, this is a different kind of Greek island experience.",
      el: "Η Σκιάθος είναι η πράσινη καρδιά του Αιγαίου — ένα νησί όπου τα πεύκα φτάνουν ως την ακτή. Με 65 παραλίες, το εντυπωσιακό εγκαταλελειμμένο Κάστρο και νυχτερινή ζωή που ξεπερνά κάθε προσδοκία.",
    },
    highlights: {
      en: ["Koukounaries Beach", "Kastro", "Lalaria Beach", "Boat trips to Tsougrias"],
      el: ["Παραλία Κουκουναριές", "Κάστρο Σκιάθου", "Παραλία Λαλάρια", "Εκδρομές με σκάφος στο Τσουγκριά"],
    },
    guideLinks: [
      {
        href: "/hotels/skiathos",
        label: { en: "Where to Stay in Skiathos", el: "Πού να μείνεις στη Σκιάθο" }
      },
      {
        href: "/tours/all",
        label: { en: "Tours & Experiences", el: "Εκδρομές & Εμπειρίες" }
      }
    ],
    featured: true,
    seo: {
      title: {
        en: "Skiathos Travel Guide 2026: Beaches, Kastro, Koukounaries & Local Tips",
        el: "Σκιάθος: Οδηγός Ταξιδιού 2026 — Παραλίες, Κάστρο, Κουκουναριές & Μυστικά"
      },
      description: {
        en: "Complete travel guide to Skiathos: Koukounaries and Lalaria beaches, the abandoned Kastro, boat trips to Tsougrias, nightlife, where to stay, best time to visit, and honest insider tips for the Sporades.",
        el: "Πλήρης ταξιδιωτικός οδηγός για τη Σκιάθο: Κουκουναριές και Λαλάρια, Κάστρο, εκδρομές σε Τσουγκριά, νυχτερινή ζωή, διαμονή και αυθεντικές συμβουλές για τις Σποράδες."
      }
    }
  },
  {
    slug: "ikaria",
    name: "Ikaria",
    region: { en: "North Aegean", el: "Βόρειο Αιγαίο" },
    blurb: {
      en: "Ikaria is one of the world's Blue Zones — where people regularly live past 90. A wild, beautiful island in the Eastern Aegean with a pace of life unlike anywhere else in Greece.",
      el: "Η Ικαρία είναι μία από τις Μπλε Ζώνες του κόσμου — όπου οι άνθρωποι ζουν τακτικά πάνω από 90. Ένα άγριο, όμορφο νησί στο Ανατολικό Αιγαίο."
    },
    image: "/images/ikaria.webp",
    overview: {
      en: "Ikaria is one of the world's five Blue Zones — the rare communities where reaching 90 or 100 is routine rather than exceptional. Its pitch is stranger and harder to package than Santorini's caldera or Mykonos's nightlife: people here live unusually long lives, and nobody is entirely sure why. What researchers found was a combination that reinforces itself: a traditional diet, terrain that requires walking, social culture built around communal meals and dancing, long sleep including afternoon naps, and a collective indifference to schedules. Ikaria doesn't perform its distinctiveness. It simply continues at its own pace.",
      el: "Η Ικαρία είναι μία από τις πέντε Μπλε Ζώνες του κόσμου — σπάνιες κοινότητες όπου το να φτάνεις τα 90 ή 100 είναι συνηθισμένο. Αυτό που βρήκαν οι ερευνητές ήταν ένας συνδυασμός: παραδοσιακή διατροφή, έδαφος που απαιτεί περπάτημα, κοινωνική κουλτούρα γύρω από κοινά γεύματα και χορό, μεσημεριανός ύπνος, και μια συλλογική αδιαφορία για τα ωράρια."
    },
    highlights: {
      en: ["Blue Zone longevity", "Panigiri festivals", "Thermal springs at Therma", "Seychelles Beach"],
      el: ["Μπλε Ζώνη μακροζωίας", "Πανηγύρια", "Ιαματικές πηγές Θερμά", "Παραλία Σεϋχέλλες"]
    },
    guideLinks: [
      {
        href: "/travel-info/hidden-greek-islands",
        label: { en: "Hidden Greek Islands Guide", el: "Οδηγός Κρυμμένων Νησιών" }
      }
    ],
    seo: {
      title: {
        en: "Ikaria Travel Guide: The Blue Zone Island of Longevity",
        el: "Ικαρία: Ταξιδιωτικός Οδηγός — Το Νησί της Μακροζωίας"
      },
      description: {
        en: "Complete travel guide to Ikaria: Blue Zone longevity secrets, panigiri festivals, thermal springs, Seychelles Beach, villages, food, where to stay and honest insider tips for the Eastern Aegean.",
        el: "Πλήρης ταξιδιωτικός οδηγός για την Ικαρία: Μπλε Ζώνη, πανηγύρια, ιαματικές πηγές, παραλία Σεϋχέλλες, χωριά, φαγητό και αυθεντικές συμβουλές."
      }
    }
  }
];

