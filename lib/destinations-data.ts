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
      en: "Lesvos is a vast island of continental scale, featuring the famous Petrified forest, huge castles, rich wetlands for birdwatching, thermal springs, and an unbeatable foodie scene. Check out the top [Things to Do in Lesvos](/guides/lesvos/things-to-do) to plan your days.",
      el: "Η Λέσβος είναι ένα νησί δομημένο σε ηπειρωτική κλίμακα, με όλο το έδαφός της αναγνωρισμένο ως UNESCO Global Geopark. Δείτε [Τι να Κάνετε στη Λέσβο](/el/guides/lesvos/things-to-do) για να γεμίσετε τις μέρες σας με αυθεντικές εμπειρίες.",
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
    slug: "aegina",
    name: "Aegina",
    region: { en: "Attica", el: "Αττική & Αργοσαρωνικός" },
    blurb: {
      en: "The island that Athens keeps for itself — 40 minutes from Piraeus, with one of Greece's finest Doric temples, a neoclassical harbour town, and the best pistachios in the country.",
      el: "Το νησί που κρατά η Αθήνα για τον εαυτό της — 40 λεπτά από τον Πειραιά, με έναν από τους ωραιότερους δωρικούς ναούς, μια νεοκλασική πόλη-λιμάνι και τα καλύτερα φιστίκια της χώρας."
    },
    image: "/images/aegina.webp",
    overview: {
      en: "Aegina is the island that proves you do not need a long-haul flight, an overnight ferry, or a week-long itinerary to find something genuinely extraordinary in Greece. It is 40 minutes from Piraeus on a hydrofoil, and it contains one of the best-preserved Doric temples in the entire Greek world, a harbour town with more architectural character than most island capitals ten times its size, a fishing village that still functions as a fishing village, and the finest pistachios produced anywhere in the country.\n\nIt is also, by a comfortable margin, the most visited island in the Saronic Gulf — which says something about its accessibility from Athens and everything about what it delivers once you arrive. Weekends bring Athenian families, couples, and day-trippers who fill the harbour front cafés and line the quay for the afternoon ferry back. But Aegina is large enough and characterful enough to absorb that traffic without losing its identity.\n\nGeographically, Aegina sits at the northern mouth of the Saronic Gulf, 27 km southwest of Piraeus. Its landscape is pine-covered hills rising to the summit of Mount Oros (531 m), with the agricultural plain around Aegina Town producing the pistachio trees that have defined the island's economy and identity for generations.",
      el: "Η Αίγινα είναι το νησί που αποδεικνύει ότι δεν χρειάζεσαι μεγάλη πτήση, νυχτερινό πλοίο ή οδοιπορικό εβδομάδας για να βρεις κάτι πραγματικά εξαιρετικό στην Ελλάδα. Είναι 40 λεπτά από τον Πειραιά και περιέχει έναν από τους καλύτερα διατηρημένους δωρικούς ναούς, ένα λιμάνι με περισσότερο αρχιτεκτονικό χαρακτήρα από τις περισσότερες νησιωτικές πρωτεύουσες και τα καλύτερα φιστίκια της χώρας."
    },
    highlights: {
      en: ["Temple of Aphaia", "Aegina Town Harbour", "Perdika Village", "Pistachios"],
      el: ["Ναός Αφαίας", "Λιμάνι Αίγινας", "Πέρδικα", "Φιστίκια Αιγίνης"]
    },
    featured: true,
    guideLinks: [
      {
        href: "/hotels/aegina",
        label: { en: "Stays in Aegina", el: "Διαμονή στην Αίγινα" }
      },
      {
        href: "/tours/all",
        label: { en: "Tours & Experiences", el: "Εκδρομές & Εμπειρίες" }
      },
      {
        href: "/collections/greece-food-and-drink",
        label: { en: "Local Food Ideas", el: "Τοπική Γαστρονομία" }
      }
    ],
    seo: {
      title: {
        en: "Aegina Travel Guide: Beaches, Temples & Hidden Gems",
        el: "Αίγινα: Οδηγός Ταξιδιού — Ναός Αφαίας, Πέρδικα & Αξιοθέατα"
      },
      description: {
        en: "Complete travel guide to Aegina, the Saronic island 40 minutes from Athens. Discover the Temple of Aphaia, Perdika fishing village, pistachio farms, beaches, neoclassical Aegina Town, and practical tips for day trips and overnight stays.",
        el: "Πλήρης ταξιδιωτικός οδηγός για την Αίγινα. Ανακαλύψτε τον Ναό της Αφαίας, την Πέρδικα, τις φιστικιές, τις παραλίες και τη νεοκλασική πόλη της Αίγινας."
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
    slug: "syros",
    name: "Syros",
    region: { en: "Cyclades", el: "Κυκλάδες" },
    blurb: {
      en: "The Cyclades' capital is the most elegantly surprising island in the Aegean — a neoclassical city, a medieval hilltop town, serious food culture, and beaches that reward the curious traveller.",
      el: "Η πρωτεύουσα των Κυκλάδων είναι το πιο κομψά εκπληκτικό νησί του Αιγαίου — μια νεοκλασική πόλη, ένας μεσαιωνικός λόφος, σοβαρή γαστρονομία και παραλίες."
    },
    image: "/images/syros-cover.webp",
    overview: {
      en: "Syros is the island that surprises you — and then keeps you coming back. When travellers think Cyclades, they picture whitewashed cubes against a blue dome. Syros breaks that mould entirely. Its capital, Ermoupoli, is a fully functioning Greek city with a grand neoclassical waterfront, a marble-paved central square, an opera house modelled on La Scala, and working-class neighbourhoods with iron balconies and peeling paint that smell of real life. It is the administrative capital of the Cyclades, and it has always been too busy living its own life to reshape itself for tourism.\n\nAbove the city, Ano Syros is a different world — a medieval Venetian hilltop quarter with Catholic churches, narrow stone lanes that curl around each other like a maze, and views over the bay. The food on Syros is taken seriously. Halvadopites — the island's signature sweet — are sold from old family shops. The loukoumades of Ermoupoli have their own following. Syros is the rare Greek island that works every month of the year.",
      el: "Η Σύρος είναι το νησί που σε εκπληκτιάζει. Η Ερμούπολη είναι μια πλήρως λειτουργική ελληνική πόλη με νεοκλασικό παραλιακό μέτωπο, μαρμαρόστρωτη πλατεία και όπερα. Η Άνω Σύρος είναι ένα μεσαιωνικό καθολικό χωριό στην κορυφή του λόφου. Το φαγητό στη Σύρο είναι σοβαρή υπόθεση."
    },
    highlights: {
      en: ["Ermoupoli neoclassical architecture", "Ano Syros medieval labyrinth", "Halvadopites & loukoumades", "Galissas & Kini beaches", "Year-round destination"],
      el: ["Ερμούπολη νεοκλασική αρχιτεκτονική", "Άνω Σύρος μεσαιωνικός λαβύρινθος", "Χαλβαδόπιτες & λουκουμάδες", "Παραλίες Γαλησσάς & Κίνι", "Προορισμός όλο τον χρόνο"]
    },
    guideLinks: [
      {
        href: "/hotels/syros",
        label: { en: "Where to Stay in Syros", el: "Πού να μείνεις στη Σύρο" }
      }
    ],
    featured: true,
    seo: {
      title: {
        en: "Syros Travel Guide: Ermoupoli, Ano Syros, Beaches & Local Food",
        el: "Σύρος: Ταξιδιωτικός Οδηγός — Ερμούπολη, Άνω Σύρος, Παραλίες & Γαστρονομία"
      },
      description: {
        en: "Complete guide to Syros island: Ermoupoli's neoclassical architecture, Ano Syros medieval quarter, best beaches Galissas and Kini, halvadopites and loukoumades, ferry connections and year-round travel tips.",
        el: "Πλήρης οδηγός για τη Σύρο: Ερμούπολη, Άνω Σύρος, καλύτερες παραλίες, γαστρονομία και πρακτικές συμβουλές."
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
        en: "Lefkada Travel Guide: Porto Katsiki, Egremni, Nydri & Things to Do",
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
    slug: "preveza",
    name: "Preveza",
    region: { en: "Epirus", el: "Ήπειρος" },
    blurb: {
      en: "Ancient Nikopolis, 22km of Monolithi beach, avgotaracho bottarga, dolphins in the Ambracian Gulf, and the mythological Acheron river — one of Greece's richest uncrowded destinations.",
      el: "Αρχαία Νικόπολη, 22χλμ παραλία Μονολίθι, αυγοτάραχο, δελφίνια στον Αμβρακικό κόλπο και το μυθολογικό Αχέροντα — ένας από τους πλουσιότερους και ανεξερεύνητους προορισμούς της Ελλάδας."
    },
    image: "/images/destinations/preveza.webp",
    overview: {
      en: "On the 2nd of September, 31 BC, two fleets met in the narrow strait at the mouth of the Ambracian Gulf. Octavian's victory at the Battle of Actium ended the Roman Republic and began the Roman Empire — a single day that shaped the next two millennia of Western civilisation. He built Nikopolis (City of Victory) on the peninsula overlooking the battle site. The ruins are still there, five minutes from modern Preveza.\n\nToday Preveza is a coastal town of 20,000 people sitting at one of the great hinge points of world history. The Ambracian Gulf behind it is a vast protected wetland ecosystem with dolphins, pelicans and flamingos. Monolithi Beach stretches for 22km of uninterrupted golden sand. And the region offers ancient Kassope, the Zalongo monument, the Necromanteion of Acheron, and the finest seafood in Epirus.",
      el: "Στις 2 Σεπτεμβρίου 31 π.Χ., δύο στόλοι συναντήθηκαν στο στενό της Ακτίου. Η νίκη του Οκταβιανού στη Ναυμαχία του Ακτίου καθόρισε την πορεία του δυτικού κόσμου. Έκτισε τη Νικόπολη στη χερσόνησο που δεσπόζει στο πεδίο της μάχης. Τα ερείπια βρίσκονται εκεί, πέντε λεπτά από τη σύγχρονη Πρέβεζα.\n\nΣήμερα η Πρέβεζα είναι μια παραθαλάσσια πόλη 20.000 κατοίκων. Ο Αμβρακικός κόλπος είναι ένα τεράστιο προστατευμένο οικοσύστημα με δελφίνια, πελεκάνους και φλαμίνγκο. Η παραλία Μονολίθι εκτείνεται για 22 χιλιόμετρα χρυσής άμμου. Η περιοχή προσφέρει την αρχαία Κασσώπη, το μνημείο του Ζαλόγγου, το Νεκρομαντείο του Αχέροντα και τα καλύτερα θαλασσινά της Ηπείρου."
    },
    highlights: {
      en: ["Ancient Nikopolis", "Monolithi Beach — 22km", "Avgotaracho — Greek caviar", "Ambracian Gulf dolphins"],
      el: ["Αρχαία Νικόπολη", "Παραλία Μονολίθι — 22χλμ", "Αυγοτάραχο — ελληνικό χαβιάρι", "Δελφίνια Αμβρακικού"]
    },
    guideLinks: [
      {
        href: "/hotels/preveza",
        label: { en: "Where to Stay in Preveza", el: "Πού να μείνεις στην Πρέβεζα" }
      }
    ],
    featured: true,
    seo: {
      title: {
        en: "Preveza Travel Guide: Nikopolis, Monolithi Beach, Avgotaracho & Things to Do",
        el: "Πρέβεζα: Οδηγός Ταξιδιού — Νικόπολη, Παραλία Μονολίθι, Αυγοτάραχο & Αξιοθέατα"
      },
      description: {
        en: "Complete travel guide to Preveza and the Ambracian Gulf: why to go, best time to visit, how to get there (PVK airport), top attractions (Ancient Nikopolis, Monolithi Beach, Kassope, Zalongo, Necromanteion), Ambracian Gulf dolphin tours, avgotaracho & local seafood, beaches, practical tips & FAQ.",
        el: "Πλήρης ταξιδιωτικός οδηγός για Πρέβεζα και Αμβρακικό κόλπο: γιατί αξίζει, καλύτερη εποχή, πώς φτάνεις, κορυφαία αξιοθέατα (Αρχαία Νικόπολη, Μονολίθι, Κασσώπη, Ζάλογγο, Νεκρομαντείο), δελφίνια, αυγοτάραχο & θαλασσινά, παραλίες, πρακτικές συμβουλές & FAQ."
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
    slug: "heraklion",
    name: "Heraklion",
    region: { en: "Crete", el: "Κρήτη" },
    blurb: {
      en: "Minoan palaces, Venetian walls, and the most powerful food culture in Crete.",
      el: "Μινωικά ανάκτορα, ενετικά τείχη και η πιο δυνατή γαστρονομία της Κρήτης."
    },
    image: "/images/heraklion.webp",
    overview: {
      en: "Knossos, the Archaeological Museum, the old Venetian harbour, and Crete's most authentic urban food scene — Heraklion is the real Crete, dense, layered, and completely alive.",
      el: "Κνωσός, το Αρχαιολογικό Μουσείο, το ενετικό λιμάνι και η πιο αυθεντική γαστρονομική σκηνή της Κρήτης — το Ηράκλειο είναι η πραγματική Κρήτη."
    },
    highlights: {
      en: ["Palace of Knossos", "Archaeological Museum", "Venetian Harbour & Koules Fortress"],
      el: ["Παλάτι της Κνωσού", "Αρχαιολογικό Μουσείο", "Ενετικό Λιμάνι & Κούλες"]
    },
    featured: true,
    guideLinks: [
      {
        href: "/destinations/crete",
        label: { en: "Explore Crete Guide", el: "Οδηγός Ταξιδιού Κρήτης" }
      },
      {
        href: "/hotels/heraklion",
        label: { en: "Explore stays in Heraklion", el: "Ανακαλύψτε διαμονή στο Ηράκλειο" }
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
        en: "Heraklion Travel Guide: Knossos, Old Harbour, Food & Things to Do",
        el: "Ηράκλειο: Ταξιδιωτικός Οδηγός | Κνωσός, Λιμάνι, Φαγητό & Αξιοθέατα"
      },
      description: {
        en: "Complete guide to Heraklion, Crete: the Palace of Knossos, the Old Venetian Harbour, the Archaeological Museum, local food, beaches, day trips, and practical tips.",
        el: "Πλήρης οδηγός για το Ηράκλειο: Παλάτι της Κνωσού, ενετικό λιμάνι, Αρχαιολογικό Μουσείο, τοπικό φαγητό, παραλίες και πρακτικές συμβουλές."
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
    blurb: { en: "Venetian harbour, lighthouse, Splantzia quarter and the newly reopened Municipal Market.", el: "Ενετικό λιμάνι, φάρος, συνοικία Σπλάντζιας και η πρόσφατα ανακαινισμένη Δημοτική Αγορά." },
    image: "/images/chania.webp",
    overview: { 
      en: "Venetian harbour charm, old town layers, excellent food, the newly reopened Municipal Market (summer 2026), and the best gateway to Balos, Elafonisi, Samaria, and the dramatic landscapes of western Crete.", 
      el: "Γοητεία ενετικού λιμανιού, ιστορικά στρώματα στην παλιά πόλη, εξαιρετικό φαγητό, η πρόσφατα ανακαινισμένη Δημοτική Αγορά (καλοκαίρι 2026) και το καλύτερο ορμητήριο για Μπάλο, Ελαφονήσι, Σαμαριά και τα εντυπωσιακά τοπία της δυτικής Κρήτης." 
    },
    highlights: { en: ["Venetian Harbor", "Municipal Market (Agora)", "Splantzia Quarter"], el: ["Ενετικό Λιμάνι", "Δημοτική Αγορά (Αγορά)", "Συνοικία Σπλάντζιας"] },
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
        en: "Chania Travel Guide 2026 | Venetian Harbour, Old Market Reopened, Beaches & Best Restaurants",
        el: "Χανιά: Οδηγός Ταξιδιού 2026 | Ενετικό Λιμάνι, Δημοτική Αγορά, Παραλίες & Καλύτερα Εστιατόρια"
      },
      description: {
        en: "Chania 2026 — fully updated guide. Municipal Market reopens summer 2026, Hilton opens in the Old Town, JW Marriott on Marathi Beach. Venetian harbour, Splantzia, Balos, Elafonisi, Samaria Gorge, and the best restaurants in western Crete.",
        el: "Χανιά 2026 — πλήρως ενημερωμένος οδηγός. Η Δημοτική Αγορά ανοίγει ξανά το καλοκαίρι 2026, το Hilton στην Παλιά Πόλη, το JW Marriott στην παραλία Μαραθίου. Ενετικό λιμάνι, Σπλάντζια, Μπάλος, Ελαφονήσι, Φαράγγι Σαμαριάς και τα καλύτερα εστιατόρια της δυτικής Κρήτης."
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
    },
    guideLinks: [
      {
        href: "/hotels/lemnos",
        label: { en: "Where to Stay in Lemnos", el: "Πού να μείνεις στη Λήμνο" }
      }
    ]
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
    slug: "skopelos",
    name: "Skopelos",
    region: { en: "Sporades", el: "Σποράδες" },
    blurb: {
      en: "The greenest island in the Aegean — pine forests, turquoise bays, 360 chapels, and the most dramatic hilltop town in the Sporades.",
      el: "Το πιο πράσινο νησί του Αιγαίου — πευκοδάσος, τιρκουάζ όρμοι, 360 εκκλησιάδες και η πιο θεαματική πόλη στους βουνούς των Σποράδων."
    },
    image: "/images/skopelos.webp",
    overview: {
      en: "Skopelos is the largest island of the Northern Sporades and, by any measure, one of the most naturally beautiful islands in the entire Aegean. Where its neighbor Skiathos trades on cosmopolitan beaches and nightlife, Skopelos is defined by something rarer: genuine character. Pine forests run almost to the water's edge, the island's capital looks as if it was carved directly into the hillside, and a network of Byzantine monasteries dots the landscape with a quiet persistence that feels entirely at odds with peak-season Greece.",
      el: "Η Σκόπελος είναι το μεγαλύτερο νησί των Βορείων Σποράδων και, με οποιοδήποτε κριτήριο, ένα από τα πιο φυσικά όμορφα νησιά σε όλο το Αιγαίο. Ενώ η γειτονική Σκιάθος υποστηρίζεται στις κοσμοπολίτικες παραλίες και τη νυχτερινή ζωή, η Σκόπελος ορίζεται από κάτι σπάνιο: γνήσιο χαρακτήρα. Τα πευκοδάσος φτάνουν σχεδόν στην ακτή, η πρωτεύουσα του νησιού φαίνεται να είναι γλυμμένη απευθείας στονλόφο, και ένα δίκτυο βυζαντινών μοναστηριών διακοσμά την τοπιά με ήσυχη διαμονή που φαίνεται εντελώς αντίθετη στην κορυφαία σεζόν."
    },
    highlights: {
      en: ["Skopelos Town (Chora)", "Agios Ioannis Chapel", "Panormos Beach", "Monasteries"],
      el: ["Σκόπελος (Χώρα)", "Αγιος Ιωάννης Καπελοβρύση", "Παραλία Πάνορμος", "Μοναστήρια"]
    },
    guideLinks: [
      {
        href: "/hotels/skopelos",
        label: { en: "Where to Stay in Skopelos", el: "Πού να μείνεις στη Σκόπελο" }
      }
    ],
    seo: {
      title: {
        en: "Skopelos Travel Guide 2026: Chora, Beaches, Mamma Mia! & Monasteries",
        el: "Σκόπελος: Οδηγός Ταξιδιού 2026 — Χώρα, Παραλίες, Mamma Mia! & Μοναστήρια"
      },
      description: {
        en: "Complete travel guide to Skopelos: the greenest Aegean island with Skopelos Town (Chora), Agios Ioannis Mamma Mia! chapel, Panormos & Kastani beaches, Byzantine monasteries, plum products, island hopping to Alonissos & Skiathos, and honest insider tips.",
        el: "Πλήρης ταξιδιωτικός οδηγός για τη Σκόπελο: το πιο πράσινο νησί του Αιγαίου με τη Χώρα, την καπελοβρύση Αγίου Ιωάννη Mamma Mia!, τις παραλίες Πάνορμο & Καστάνη, βυζαντινά μοναστήρια, προϊόντα από δαμάσκηνα, νησιωτικά hopping και αυθεντικές συμβουλές."
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
  },
  {
    slug: "samos",
    name: "Samos",
    region: { en: "North Aegean", el: "Βόρειο Αιγαίο" },
    blurb: {
      en: "Birthplace of Pythagoras, ancient Heraion, exceptional Muscat wine, lush mountain villages and beaches that face Turkey across a channel just two kilometres wide.",
      el: "Πατρίδα του Πυθαγόρα, αρχαίος Ηραίον, εξαιρετικός Μοσχάτο, ορεινά χωριά και παραλίες με θέα στην Τουρκία σε απόσταση δύο χιλιομέτρων."
    },
    image: "/images/samos-cover.webp",
    overview: {
      en: "Samos is not the most famous island in the Aegean — it is simply one of the best. Birthplace of Pythagoras and Epicurus, home to the UNESCO-listed Heraion, and producer of Greece's finest Muscat wine — this green, lush island is quietly magnificent, with forested mountains, uncrowded beaches, and a historical density that rivals far more celebrated destinations.",
      el: "Η Σάμος δεν είναι το πιο φημισμένο νησί στο Αιγαίο — είναι απλώς ένα από τα καλύτερα. Πατρίδα του Πυθαγόρα και του Επικούρου, με το UNESCO Ηραίον, το εξαιρετικό Μοσχάτο και καταπράσινα βουνά — ένα νησί ήσυχα μεγαλειώδες, με δάση, αδειανές παραλίες και ιστορικό βάθος που ζηλεύουν ακόμα πιο διάσημοι προορισμοί."
    },
    highlights: {
      en: ["Heraion — UNESCO World Heritage", "Birthplace of Pythagoras", "Samos Muscat wine", "Kokkari — finest village", "Efpalinos Tunnel — ancient engineering", "Mount Kerkis hike", "Beaches facing Turkey"],
      el: ["Ηραίον — UNESCO Μνημείο Παγκόσμιας Κληρονομιάς", "Πατρίδα του Πυθαγόρα", "Μοσχάτος Σάμου", "Κοκκαρί — πιο όμορφο χωριό", "Τούνελο Ευπαλίνου", "Πεζοπορία στον Κέρκη", "Παραλίες με θέα Τουρκία"]
    },
    featured: true,
    guideLinks: [
      {
        href: "/hotels/samos",
        label: { en: "Where to Stay in Samos", el: "Πού να μείνεις στη Σάμο" }
      },
      {
        href: "/guides/samos/best-beaches",
        label: { en: "Best Beaches in Samos", el: "Καλύτερες Παραλίες στη Σάμο" }
      },
      {
        href: "/guides/samos/things-to-do",
        label: { en: "Things to Do in Samos", el: "Τι να Κάνεις στη Σάμο" }
      }
    ],
    seo: {
      title: {
        en: "Samos Travel Guide: Pythagoras, Wine, Beaches & Ancient Heraion",
        el: "Σάμος: Οδηγός Ταξιδιού — Πυθαγόρας, Μοσχάτος, Παραλίες & Ηραίον"
      },
      description: {
        en: "Complete travel guide to Samos island — birthplace of Pythagoras and Epicurus, home of the ancient Heraion sanctuary, lush mountain villages, exceptional Muscat wine and beaches that face the coast of Turkey across a channel only two kilometres wide.",
        el: "Πλήρης ταξιδιωτικός οδηγός για τη Σάμο — πατρίδα του Πυθαγόρα και του Επικούρου, σπίτι του αρχαίου Ηραίου, ορεινά χωριά, εξαιρετικός Μοσχάτος και παραλίες με θέα στην τουρκική ακτή."
      }
    }
  },
  {
    slug: "rethymno",
    name: "Rethymno",
    region: { en: "Crete", el: "Κρήτη" },
    blurb: {
      en: "Venetian old town, Fortezza castle, and authentic Cretan city life.",
      el: "Ενετική παλιά πόλη, Φορτέτζα και αυθεντική κρητική πόλη."
    },
    image: "/images/rethymno.webp",
    overview: {
      en: "Venetian-Ottoman Old Town, the Fortezza fortress, a sandy city beach, and the best base for exploring Crete's dramatic interior — Preveli, Arkadi, Amari Valley, and Psiloritis.",
      el: "Ενετο-οθωμανική παλιά πόλη, το κάστρο Φορτέτζα, αμμώδης παραλία και η καλύτερη βάση για να εξερευνήσετε το εσωτερικό της Κρήτης — Πρέβελη, Αρκάδι, Αμάρι και Ψηλορείτη."
    },
    highlights: {
      en: ["Venetian Old Town", "Fortezza Castle", "Preveli & Arkadi"],
      el: ["Ενετική Παλιά Πόλη", "Φορτέτζα", "Πρέβελη & Αρκάδι"]
    },
    featured: true,
    guideLinks: [
      {
        href: "/destinations/crete",
        label: { en: "Explore Crete Guide", el: "Οδηγός Ταξιδιού Κρήτης" }
      },
      {
        href: "/hotels/rethymno",
        label: { en: "Explore stays in Rethymno", el: "Ανακαλύψτε διαμονή στο Ρέθυμνο" }
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
        en: "Rethymno Travel Guide | Old Town, Fortezza, Beaches & Where to Go",
        el: "Ρέθυμνο: Οδηγός Ταξιδιού | Παλιά Πόλη, Φορτέτζα, Παραλίες & Αξιοθέατα"
      },
      description: {
        en: "Plan your trip to Rethymno with our travel guide. Discover the Venetian Old Town, Fortezza Castle, Preveli Palm Beach, Arkadi Monastery, local food, and the best things to do in Crete's most underrated city.",
        el: "Οργανώστε το ταξίδι σας στο Ρέθυμνο με τον οδηγό μας. Ανακαλύψτε την ενετική παλιά πόλη, τη Φορτέτζα, τον Πρέβελη, τη Μονή Αρκαδίου, τοπικές γεύσεις και τα καλύτερα αξιοθέατα."
      }
    }
  },
  {
    slug: "lasithi",
    name: "Lasithi",
    region: { en: "Crete", el: "Κρήτη" },
    blurb: {
      en: "A haunted Venetian island, Europe's only palm forest, a bay that turns the water into something implausible, and a pace of life that has not been negotiated with the tourism industry.",
      el: "Ένα στοιχειωμένο ενετικό νησί, το μοναδικό φοινικόδασος της Ευρώπης, ένας κόλπος που μετατρέπει το νερό σε κάτι απίθανο και ένας ρυθμός ζωής που δεν έχει διαπραγματευτεί με την τουριστική βιομηχανία."
    },
    image: "/images/lasithi.webp",
    overview: {
      en: "Lasithi is the easternmost region of Crete, and in many ways the most uncompromised. It covers roughly a third of the island — from the mountain plateau that carries its name in the west, all the way to Crete's most dramatic eastern tip at Cape Sideros. The distances are real, and this is part of the point.\n\nThe region's capital is Agios Nikolaos, a small port city around a lake that connects to the sea by a short channel. It is a comfortable, unhurried town with good restaurants, a respectable archaeological museum, and the kind of harbourfront that invites extended sitting. Twenty minutes north sits Elounda, known internationally for the concentration of luxury hotels on its bay. Four kilometres offshore from Elounda, Spinalonga Island — a Venetian fortress that was one of Europe's last active leper colonies — stands in water of an improbable clarity.\n\nFurther east, the character of the region changes. Ierapetra, on the south coast, is the southernmost city in Europe and has something of a frontier feel — a working port town with a small Venetian fortress and one of the longest, least developed beach strips in Crete. East of Sitia, the island narrows and empties out: the Toplou Monastery, isolated in a lunar landscape; the Sitia Geopark, a UNESCO-recognized geological formation; and finally Vai, a palm beach that was once legitimately surprising and is now still worth the journey despite what the internet has done to it.\n\nWhat holds all of this together is a common quality: Lasithi is not performing for visitors in the way that parts of western Crete have learned to. The tavernas serve what they have. The villages are still lived in. The landscape — gorges, olive groves, wind-scraped plateaux — does not flatten itself for photography.\n\nPlanning around Crete? Lasithi sits 70km east of Heraklion. A car is essential — the region does not work without one. If you are building a wider Crete itinerary, see our full [Crete Travel Guide](/en/destinations/crete).",
      el: "Το Λασίθι είναι η ανατολικότερη περιοχή της Κρήτης και από πολλές απόψεις η πιο ανυποχώρητη. Καλύπτει περίπου το ένα τρίτο του νησιού — από το οροπέδιο που φέρει το όνομά της στα δυτικά, μέχρι το ανατολικότερο άκρο της Κρήτης στο Ακρωτήρι Σίδερος. Οι αποστάσεις είναι πραγματικές, και αυτό είναι μέρος της ουσίας.\n\nΠρωτεύουσα της περιοχής είναι ο Άγιος Νικόλαος, μια μικρή παραθαλάσσια πόλη γύρω από μια λίμνη που συνδέεται με τη θάλασσα μέσω ενός στενού διαύλου. Είναι μια άνετη, ήρεμη πόλη με καλά εστιατόρια, ένα αξιόλογο αρχαιολογικό μουσείο και ένα λιμάνι που σε προσκαλεί να καθίσεις. Είκοσι λεπτά βόρεια βρίσκεται η Ελούντα, γνωστή διεθνώς για τη συγκέντρωση πολυτελών ξενοδοχείων στον κόλπο της. Τέσσερα χιλιόμετρα ανοιχτά της Ελούντας, η Σπιναλόγκα — ένα ενετικό φρούριο που ήταν μια από τις τελευταίες ενεργές αποικίες λεπρών στην Ευρώπη — στέκεται σε νερό απίθανης διαύγειας.\n\nΠιο ανατολικά, ο χαρακτήρας της περιοχής αλλάζει. Η Ιεράπετρα, στη νότια ακτή, είναι η νοτιότερη πόλη της Ευρώπης και έχει μια αίσθηση μεθορίου. Ανατολικά της Σητείας, το νησί στενεύει και αδειάζει: η Μονή Τοπλού, απομονωμένη σε ένα σεληνιακό τοπίο, το Γεωπάρκο Σητείας και τέλος το Βάι.\n\nΤο Λασίθι δεν παίζει θέατρο για τους επισκέπτες. Οι ταβέρνες σερβίρουν ό,τι έχουν. Τα χωριά εξακολουθούν να κατοικούνται. Το τοπίο — φαράγγια, ελαιώνες, ανεμοδαρμένα οροπέδια — δεν ισοπεδώνεται για φωτογραφία."
    },
    highlights: {
      en: ["Spinalonga Island", "Elounda Bay", "Vai Palm Forest", "Agios Nikolaos", "Sitia & the Geopark"],
      el: ["Σπιναλόγκα", "Κόλπος Ελούντας", "Φοινικόδασος Βάι", "Άγιος Νικόλαος", "Σητεία & Γεωπάρκο"]
    },
    featured: true,
    guideLinks: [
      {
        href: "/destinations/crete",
        label: { en: "Explore Crete Guide", el: "Οδηγός Ταξιδιού Κρήτης" }
      },
      {
        href: "/hotels/lasithi",
        label: { en: "Stays in Lasithi", el: "Διαμονή στο Λασίθι" }
      },
      {
        href: "/tours/all",
        label: { en: "Tours & Experiences", el: "Εκδρομές & Εμπειρίες" }
      },
      {
        href: "/collections/greece-food-and-drink",
        label: { en: "Local Food Ideas", el: "Τοπικές Γεύσεις" }
      }
    ],
    seo: {
      title: {
        en: "Lasithi Travel Guide | Spinalonga, Elounda, Vai & Things to Do in Eastern Crete",
        el: "Λασίθι: Ταξιδιωτικός Οδηγός | Σπιναλόγκα, Ελούντα, Βάι & Αξιοθέατα"
      },
      description: {
        en: "Plan your trip to Lasithi, eastern Crete. Discover Spinalonga Island, Elounda Bay, Vai Palm Forest, Agios Nikolaos, Sitia Geopark, beaches, local food, and the best time to visit.",
        el: "Οργανώστε το ταξίδι σας στο Λασίθι, ανατολική Κρήτη. Ανακαλύψτε τη Σπιναλόγκα, τον κόλπο της Ελούντας, το Βάι, τον Άγιο Νικόλαο, το Γεωπάρκο Σητείας, παραλίες και τοπικές γεύσεις."
      }
    }
  },
  {
    slug: "hydra",
    name: "Hydra",
    region: { en: "Attica", el: "Αττική & Αργοσαρωνικός" },
    blurb: {
      en: "The island that refused the car, kept the donkey, and became a home for artists, writers and anyone who still believes silence is a form of luxury.",
      el: "Το νησί που αρνήθηκε το αυτοκίνητο, κράτησε τον γάιδαρο και έγινε σπίτι για καλλιτέχνες και συγγραφείς που πιστεύουν ότι η σιωπή είναι πολυτέλεια.",
    },
    image: "/images/hydra.webp",
    overview: {
      en: "Hydra is the only place in Greece — and one of the very few places in the world — where the internal combustion engine was simply refused entry. There are no cars, no motorbikes, no scooters. Transport is by donkey, mule, water taxi, or on foot. The ban has been in place since the 1950s and has produced something remarkable: an island whose stone port looks almost exactly as it did when the ships of Hydra's merchant fleet dominated Mediterranean trade in the 18th century. Step off the Flying Dolphin from Piraeus and the harbour that opens before you — grey stone mansions ascending the hillside, donkeys picking their way along the quay, wooden caïques bobbing in the water — is architecturally preserved in a way that has nothing to do with tourism and everything to do with a community that made a deliberate choice about what kind of place it wanted to be.",
      el: "Η Ύδρα είναι το μόνο μέρος στην Ελλάδα — και ένα από τα ελάχιστα μέρη στον κόσμο — όπου απαγορεύτηκε η είσοδος στο αυτοκίνητο. Δεν υπάρχουν αυτοκίνητα, μηχανάκια ή σκούτερ. Η μεταφορά γίνεται με γάιδαρο, μουλάρι, θαλάσσιο ταξί ή με τα πόδια. Η απαγόρευση ισχύει από τη δεκαετία του 1950 και έχει δημιουργήσει κάτι αξιοσημείωτο: ένα νησί του οποίου το πέτρινο λιμάνι μοιάζει σχεδόν όπως ήταν όταν ο εμπορικός στόλος της Ύδρας κυριαρχούσε στη Μεσόγειο τον 18ο αιώνα. Κατεβείτε από το Flying Dolphin από τον Πειραιά και το λιμάνι που ανοίγεται μπροστά σας — γκρίζα πέτρινα αρχοντικά που σκαρφαλώνουν στον λόφο, γάιδαροι που προχωρούν στην προκυμαία, ξύλινα καΐκια που λικνίζονται στο νερό — είναι αρχιτεκτονικά διατηρημένο με τρόπο που δεν έχει καμία σχέση με τον τουρισμό.",
    },
    highlights: {
      en: ["Car-free since the 1950s", "18th-century captain mansions", "Leonard Cohen's island", "Deste Foundation Slaughterhouse"],
      el: ["Χωρίς αυτοκίνητα από το 1950", "Αρχοντικά καπετάνιων του 18ου αιώνα", "Το νησί του Leonard Cohen", "Σφαγείο Ιδρύματος ΔΕΣΤΕ"],
    },
    featured: true,
    guideLinks: [
      {
        href: "/hotels/hydra",
        label: { en: "Where to Stay in Hydra", el: "Πού να μείνεις στην Ύδρα" }
      }
    ],
    seo: {
      title: {
        en: "Hydra Travel Guide: Car-Free Island, Mansions, Beaches & Things to Do",
        el: "Ύδρα: Ταξιδιωτικός Οδηγός — Χωρίς Αυτοκίνητα, Αρχοντικά, Παραλίες & Αξιοθέατα"
      },
      description: {
        en: "Complete travel guide to Hydra, the car-free Saronic island. Discover 18th-century mansions, Leonard Cohen's Hydra, Deste Foundation art space, Profitis Ilias monastery, Spilia and Bisti beaches, local food and practical tips.",
        el: "Πλήρης ταξιδιωτικός οδηγός για την Ύδρα, το νησί χωρίς αυτοκίνητα. Ανακαλύψτε αρχοντικά του 18ου αιώνα, το Σφαγείο ΔΕΣΤΕ, τη μονή Προφήτη Ηλία, παραλίες Σπίλια και Μπίστι, τοπικές γεύσεις και πρακτικές συμβουλές."
      }
    }
  },
  {
    slug: "tinos",
    name: "Tinos",
    region: { en: "Cyclades", el: "Κυκλάδες" },
    blurb: {
      en: "Sacred pilgrimage site, marble-carving capital of Greece, land of medieval dovecotes and wild unspoiled villages — and, quietly, home to the finest food culture in the Cyclades.",
      el: "Ιερό προσκύνημα, πρωτεύουσα του μαρμάρου στην Ελλάδα, γη με μεσαιωνικούς περιστερώνες και άγρια ανέγγιχτα χωριά — και, ήσυχα, η καλύτερη γαστρονομία στις Κυκλάδες."
    },
    image: "/images/tinos.webp",
    overview: {
      en: "Tinos sits at the heart of the Cyclades, visible from Mykonos to its east and from Syros to its west, yet it inhabits an entirely different world from either. It is the most spiritually significant island in Greece — the Church of Panagia Evangelistria holds the sacred icon of the Virgin Mary, and on the 15th of August every year, thousands of faithful pilgrims travel by sea from across the country to climb the long marble ramp from the port to the church on their knees. The island's religious identity is not a tourist performance; it is a living, breathing practice.\n\nBut Tinos is also, simultaneously, one of the most artistically rich destinations in the Aegean. The village of Pyrgos in the north has produced more marble sculptors than anywhere else in Greece — the craft school here trained many of the country's finest artists, and the tradition continues today in family workshops where you can watch marble being cut and shaped by hand. The island's signature architectural feature — the ornate Venetian-era dovecotes, scattered across the hillsides like white stone lacework — is unlike anything else in the Cyclades.\n\nNone of this has been packaged for mass tourism. Tinos has no international hotel chains, no beach clubs playing commercial music until four in the morning, and no self-conscious effort to be the next Mykonos. The food here — built on exceptional local products including the island's famous artichokes, cured meats, loukoumades and fresh cheese — is considered by serious food travellers to be the best in the Cyclades.",
      el: "Η Τήνος βρίσκεται στην καρδιά των Κυκλάδων, ορατή από τη Μύκονο και τη Σύρο, αλλά κατοικεί σε έναν εντελώς διαφορετικό κόσμο. Είναι το πνευματικά σημαντικότερο νησί της Ελλάδας — η Παναγία Ευαγγελίστρια φιλοξενεί την ιερή εικόνα της Παναγίας. Η Τήνος είναι επίσης ένας από τους πιο καλλιτεχνικά πλούσιους προορισμούς του Αιγαίου. Η Πύργος έχει τους περισσότερους μαρμαρογλύπτες στην Ελλάδα, οι περιστερώνες είναι μοναδικοί, και το φαγητό θεωρείται το καλύτερο στις Κυκλάδες."
    },
    highlights: {
      en: ["Panagia Evangelistria", "Pyrgos marble village", "Volax boulder landscape", "Cycladic dovecotes", "Best food in the Cyclades"],
      el: ["Παναγία Ευαγγελίστρια", "Πύργος μαρμάρου", "Βώλαξ ογκόλιθοι", "Περιστερώνες Κυκλάδων", "Καλύτερο φαγητό στις Κυκλάδες"]
    },
    featured: true,
    guideLinks: [
      {
        href: "/hotels/tinos",
        label: { en: "Stays in Tinos", el: "Διαμονή στην Τήνο" }
      },
      {
        href: "/tours/all",
        label: { en: "Tours & Experiences", el: "Εκδρομές & Εμπειρίες" }
      },
      {
        href: "/collections/greece-food-and-drink",
        label: { en: "Local Food Ideas", el: "Τοπική Γαστρονομία" }
      }
    ],
    seo: {
      title: {
        en: "Tinos Travel Guide: Panagia Evangelistria, Pyrgos & Things to Do in Tinos",
        el: "Τήνος: Ταξιδιωτικός Οδηγός — Παναγία Ευαγγελίστρια, Πύργος & Αξιοθέατα"
      },
      description: {
        en: "Complete travel guide to Tinos — the sacred island of the Cyclades. Discover Panagia Evangelistria church, Pyrgos marble village, Volax boulders, Venetian dovecotes, Kolymbithra beach, local food culture and practical travel tips.",
        el: "Πλήρης ταξιδιωτικός οδηγός για την Τήνο. Ανακαλύψτε την Παναγία Ευαγγελίστρια, τον Πύργο, τους ογκόλιθους του Βώλακα, τους περιστερώνες, την Κολυμπήθρα και την τοπική γαστρονομία."
      }
    }
  },
  {
    slug: "ios",
    name: "Ios",
    region: { en: "Cyclades", el: "Κυκλάδες" },
    blurb: {
      en: "Wild beaches, Homer's Tomb, a perfect Cycladic Chora and legendary nightlife — Ios is more than you expect.",
      el: "Άγριες παραλίες, Τάφος του Ομήρου, τέλειο κυκλαδίτικο Χωριό και θρυλικό νυχτερινό — η Ίος είναι περισσότερο από ό,τι περιμένεις."
    },
    image: "/images/ios-cover.webp",
    overview: {
      en: "Ios has a reputation that arrived decades before most visitors do, and that reputation — wild parties, sun-bleached youth, the Cyclades' most legendary nightlife — is not entirely undeserved. But it is also dramatically incomplete. The island that has been sending young travellers home with the best stories of their Aegean summers is also an island of genuine beauty, ancient significance and an interior that most of its own visitors never see.\n\nThe geography of Ios is compact and dramatic: a rugged, hilly landmass of approximately 108 square kilometres, rising steeply from the sea with a spine of bare rock running north to south. The port — Ormos Iosou — sits in a deep protected bay on the west coast. Above it, connected by a road and a long flight of marble steps, the Chora perches on a rounded hilltop at 150 metres, a dense cluster of whitewashed Cycladic architecture that is genuinely one of the most beautiful village streetscapes in the archipelago. Directly south of the Chora, the long sandy arc of Mylopotas beach occupies the island's largest bay, flanked by low hills and backed by a string of beach bars, restaurants and accommodation.\n\nBeyond this trinity of port, Chora and Mylopotas — which is where most visitors spend their entire stay — Ios has considerable depth. The remote south coast culminates in Manganari, a series of broad sandy bays accessible only by boat or a long dirt track, with water of exceptional clarity and almost no development. The northern tip of the island holds what tradition identifies as the tomb of Homer — one of the most poetically resonant sites in the Greek world, reached by a winding road through empty countryside. The interior has abandoned windmills, Byzantine churches and the kind of silence that makes the Chora's midnight energy feel like a different planet.\n\nIos is changing. The island that was synonymous with cheap package tourism in the 1980s and 1990s has been quietly repositioning for over a decade. The quality of accommodation has risen substantially; the food scene has developed genuine seriousness; the boutique hotel market has arrived; and an increasing number of visitors come not for the bars but for the beaches, the landscape and the Chora's exceptional evening atmosphere. Ios at its best — and it is frequently at its best in June, early July and September — is one of the most complete islands in the Cyclades.",
      el: "Η Ίος έχει μια φήμη που ήρθε δεκαετίες πριν από τους περισσότερους επισκέπτες, και αυτή η φήμη — άγριες γιορτές, ξεθωριασμένη νιοτά, η πιο θρυλική νυχτερινή ζωή στις Κυκλάδες — δεν είναι εντελώς αδικαιολόγητη. Αλλά είναι επίσης драмατικά ελλιπής. Το νησί που στέλνει νεαρούς ταξιδιώτες σπίτι με τις καλύτερες ιστορίες των καλοκαιρινών τους καλοκαιριών στο Αιγαίο είναι επίσης ένα νησί πραγματικής ομορφιάς, αρχαίας σημασίας και εσωτερικού που οι περισσότεροι επισκέπτες του δεν βλέπουν ποτέ.\n\nΗ γεωγραφία της Ίου είναι συμπαγής και δραματική: ένα τραχύ, λοφώδες έδαφος περίπου 108 τετραγωνικών χιλιομέτρων, ανεβαίνοντας απότομα από τη θάλασσα με μια ράχη γυμνού βράχου που τρέχει βόρεια-νότια. Το λιμάνι — Όρμος Ιούσου — κάθεται σε ένα βαθύ προστατευόμενο κόλπο στη δυτική ακτή. Από πάνω, συνδεόμενο με δρόμο και μακρύ σκαλοπάτι μαρμάρου, το Χωριό κάθεται σε στρογγυλό λόφο στα 150 μέτρα, ένα πυκνό σύμπλεγμα λευκοπιασμένης κυκλαδίτικης αρχιτεκτονικής που είναι πραγματικά ένα από τα πιο όμορφα χωριά στο αρχιπέλαγος. Αμέσως νότια του Χωριού, η μακριά αμμώδης παραλία του Μυλοποτά με θέα σε νότιο κόλπο, περιβαλλόμενη από χαμηλούς λόφους και πίσω από σειρά beach bars, εστιατόρια και καταλύματα.\n\nΠέρα από αυτό το τρίτο λιμάνι, Χωριό και Μυλοποτάς — όπου οι περισσότεροι επισκέπτες περνούν ολόκληρη τη διαμονή τους — η Ίος έχει σημαντικό βάθος. Η απομακρυσμένη νότια ακτή κορυφώνεται στη Μαγκαναρί, μια σειρά ευρύτατων αμμωδών κολπών προσβάσιμων μόνο με πλοίο ή μακρύ χωμάτινο δρόμο, με νερό εξαιρετικής διαφάνειας και σχεδόν κανένα ανάπτυγμα. Το βόρειο άκρο του νησιού κρατά αυτό που η παράδοση ταυτίζει ως τον τάφο του Ομήρου — ένα από τα πιο ποιητικά σημαντικά μέρη στο ελληνικό κόσμο, προσβάσιμο με στροφώδη δρόμο μέσα σε άδεια χωράφια. Το εσωτερικό έχει εγκαταλελειμμένους ανεμόμυλους, βυζαντινές εκκλησίες και το είδος της σιωπής που κάνει τη μεσονύχτια ενέργεια του Χωριού να φαίνεται σαν άλλος πλανήτης.\n\nΗ Ίος αλλάζει. Το νησί που ήταν ισοδύναμο με τον φτηνό πακέτο τουρισμό στις δεκαετίες του 1980 και 1990 έχει σιωπηλά επαναπροσδιοριστεί για πάνω από μια δεκαετία. Η ποιότητα των καταλυμάτων έχει ανεβεί ουσιαστικά; η σκηνή του φαγητού έχει αναπτύξει πραγματική σοβαρότητα; το boutique hotel market έχει φτάσει; και αυξανόμενος αριθμός επισκεπτών έρχεται όχι για τα μπαρ αλλά για τις παραλίες, το τοπίο και την εξαιρετικότητα της βραδινής ατμόσφαιρας του Χωριού. Η Ίος στο καλύτερό της — και συχνά είναι στο καλύτερό της τον Ιούνιο, αρχές Ιουλίου και Σεπτέμβριο — είναι ένα από τα πιο ολοκληρωμένα νησιά στις Κυκλάδες."
    },
    highlights: {
      en: ["The Chora (hilltop village)", "Homer's Tomb (north ridge)", "Mylopotas beach", "Manganari (wild south coast)", "Skarkos Bronze Age site", "Venetian windmills at sunset", "Chora nightlife", "Agia Theodoti beach", "Koumbara cove", "Caïque to Manganari"],
      el: ["Το Χωριό (ορεινό χωριό)", "Τάφος του Ομήρου (βόρεια ράχη)", "Παραλία Μυλοποτά", "Μαγκαναρί (άγρια νότια ακτή)", "Σκάρκος Εποχής Χαλκού", "Ενετικοί ανεμόμυλος στη σούσα", "Νυχτερινή ζωή Χωριού", "Παραλία Αγία Θεοδότη", "Όρμος Κουμπάρα", "Καΐκι στη Μαγκαναρί"]
    },
    guideLinks: [
      {
        href: "/hotels/ios",
        label: { en: "Where to Stay in Ios", el: "Πού να μείνεις στην Ίο" }
      },
      {
        href: "/tours/all",
        label: { en: "Tours & Experiences", el: "Εκδρομές & Εμπειρίες" }
      },
      {
        href: "/collections/greece-food-and-drink",
        label: { en: "Local Food Ideas", el: "Τοπική Γαστρονομία" }
      }
    ],
    seo: {
      title: {
        en: "Ios Travel Guide: Beaches, Homer's Tomb, Villages & Nightlife",
        el: "Ίος: Ταξιδιωτικός Οδηγός — Παραλίες, Τάφος Ομήρου, Χωριά & Νυχτερινή Ζωή"
      },
      description: {
        en: "Complete travel guide to Ios island, Cyclades — the island of Homeria, wild beaches, a perfectly preserved Chora and a nightlife scene unlike anywhere else in Greece. Everything you need to know before you go.",
        el: "Πλήρης ταξιδιωτικός οδηγός για την Ίο, Κυκλάδες — το νησί του Ομήρου, άγριες παραλίες, τέλεια διατηρημένο Χωριό και νυχτερινή ζωή που δεν υπάρχει αλλού στην Ελλάδα."
      }
    }
  },
  {
    slug: "kalymnos",
    name: "Kalymnos",
    region: { en: "Dodecanese", el: "Δωδεκάνησα" },
    blurb: {
      en: "World capital of rock climbing, sponge diving heritage, limestone mountains and authentic Dodecanese character.",
      el: "Παγκόσμια πρωτεύουσα αθλητικής αναρρίχησης, παράδοση σπογγαλιείας, ασβεστολιθικά βουνά και αυθεντικός δωδεκανησιακός χαρακτήρας.",
    },
    image: "/images/kalymnos-cover.webp",
    overview: {
      en: "Kalymnos is the world capital of sport climbing — a dramatic limestone island in the Dodecanese with over 3,000 bolt-protected climbing routes on its sea-facing cliffs. It is also the island of the legendary sponge divers, whose tradition shaped the culture and economy of the Aegean for centuries.",
      el: "Η Κάλυμνος είναι η παγκόσμια πρωτεύουσα αθλητικής αναρρίχησης — ένα δραματικό ασβεστολιθικό νησί στη Δωδεκάνησο με πάνω από 3.000 προστατευμένες διαδρομές αναρρίχησης. Είναι επίσης το νησί των θρυλικών σφουγγαράδων, των οποίων η παράδοση διαμόρφωσε τον πολιτισμό και την οικονομία του Αιγαίου για αιώνες.",
    },
    highlights: {
      en: ["World capital of rock climbing", "Sponge diving heritage", "Telendos island — car-free", "Vathi valley — hidden fjord", "Traditional Dodecanese villages"],
      el: ["Παγκόσμια πρωτεύουσα αναρρίχησης", "Παράδοση σπογγαλιείας", "Τέλενδος — νησί χωρίς αυτοκίνητα", "Κοιλάδα Βαθύ — κρυφό φιόρδ", "Παραδοσιακά δωδεκανησιακά χωριά"],
    },
    guideLinks: [
      {
        href: "/hotels/kalymnos",
        label: { en: "Where to Stay in Kalymnos", el: "Πού να μείνεις στην Κάλυμνο" }
      },
      {
        href: "/travel-info/rock-climbing-in-greece",
        label: { en: "Rock Climbing Guide", el: "Οδηγός Αναρρίχησης" }
      },
      {
        href: "/tours/all",
        label: { en: "Tours & Experiences", el: "Εκδρομές & Εμπειρίες" }
      }
    ],
    seo: {
      title: {
        en: "Kalymnos Travel Guide: Rock Climbing, Sponge Diving, Villages & Beaches",
        el: "Κάλυμνος: Ταξιδιωτικός Οδηγός — Αναρρίχηση, Σπογγαλιεία, Χωριά & Παραλίες"
      },
      description: {
        en: "Complete travel guide to Kalymnos island, Dodecanese — the world capital of rock climbing, island of the legendary sponge divers, dramatic limestone mountains, traditional villages and exceptional Aegean seafood. Everything you need to know before you go.",
        el: "Πλήρης ταξιδιωτικός οδηγός για την Κάλυμνο, Δωδεκάνησα — την παγκόσμια πρωτεύουσα αθλητικής αναρρίχησης. Ανακαλύψτε την παράδοση σπογγαλιείας, τα εντυπωσιακά ασβεστολιθικά βουνά, τα παραδοσιακά χωριά και τα εξαιρετικά θαλασσινά."
      }
    }
  },
  {
    slug: "karpathos",
    name: "Karpathos",
    region: { en: "Dodecanese", el: "Δωδεκάνησα" },
    blurb: {
      en: "Island of the Winds, authentic Olympos village, stunning beaches and world-class hiking in the southern Dodecanese.",
      el: "Νησί των Ανέμων, αυθεντικός Όλυμπος, υπέροχες παραλίες και μονοπάτια στη νότια Δωδεκάνησο.",
    },
    image: "/images/karpathos-cover.webp",
    overview: {
      en: "Karpathos is the Island of the Winds — a long, mountainous island in the southern Dodecanese that combines dramatic landscapes with one of the most authentic traditional cultures in Greece. The mountain village of Olympos preserves customs, dress, and dialect that have vanished elsewhere, while the coastline offers stunning beaches like Apella, Kyra Panagia, and Amoopi.",
      el: "Η Κάρπαθος είναι το Νησί των Ανέμων — ένα μακρόστενο, ορεινό νησί στη νότια Δωδεκάνησο που συνδυάζει δραματικά τοπία με έναν από τους πιο αυθεντικούς παραδοσιακούς πολιτισμούς της Ελλάδας. Το ορεινό χωριό Όλυμπος διατηρεί έθιμα, ενδυμασίες και διάλεκτο που έχουν εξαφανιστεί αλλού, ενώ η ακτογραμμή προσφέρει υπέροχες παραλίες όπως η Απέλλα, η Κυρά Παναγιά και η Αμόπη.",
    },
    highlights: {
      en: ["Olympos — living traditional village", "Apella beach — one of Greece's best", "Hike from Olympos to Diafani", "Saria island boat trip", "Traditional Karpathian cuisine & wine"],
      el: ["Όλυμπος — ζωντανό παραδοσιακό χωριό", "Παραλία Απέλλα — από τις καλύτερες της Ελλάδας", "Πεζοπορία από Όλυμπο προς Διαφάνι", "Εκδρομή στη Σαρία", "Καρπάθικη κουζίνα & κρασί"],
    },
    guideLinks: [
      {
        href: "/hotels/karpathos",
        label: { en: "Where to Stay in Karpathos", el: "Πού να μείνεις στην Κάρπαθο" }
      },
      {
        href: "/tours/all",
        label: { en: "Tours & Experiences", el: "Εκδρομές & Εμπειρίες" }
      }
    ],
    seo: {
      title: {
        en: "Karpathos Travel Guide: Olympos, Apella Beach, Hiking & Island Guide",
        el: "Κάρπαθος: Ταξιδιωτικός Οδηγός — Όλυμπος, Παραλίες, Πεζοπορία"
      },
      description: {
        en: "Complete travel guide to Karpathos, Dodecanese — the Island of the Winds. Discover the traditional village of Olympos, stunning Apella beach, spectacular coastal hiking, authentic Karpathian cuisine, and everything you need to know before you go.",
        el: "Πλήρης ταξιδιωτικός οδηγός για την Κάρπαθο, Δωδεκάνησα — το Νησί των Ανέμων. Ανακαλύψτε τον αυθεντικό Όλυμπο, την υπέροχη παραλία Απέλλα, την πεζοπορία, την καρπάθικη κουζίνα και όλα όσα πρέπει να γνωρίζετε."
      }
    }
  },
  {
    slug: "chios",
    name: "Chios",
    region: { en: "North Aegean", el: "Βόρειο Αιγαίο" },
    blurb: {
      en: "Mastic villages, Pyrgi painted architecture, Mesta fortress, Nea Moni monastery, Anavatos ghost village and volcanic black-pebble beaches.",
      el: "Μαστιχοχώρια, ζωγραφιστό Πυργί, Μεστά, Νέα Μονή, Ανάβατος και μαύρες ηφαιστειακές παραλίες.",
    },
    image: "/images/chios.webp",
    imagePosition: "67.9% 45.7%",
    overview: {
      en: "Chios is a large island in the North Aegean — the only place on earth where mastic resin is commercially produced, home to the geometrically painted village of Pyrgi, the fortified medieval village of Mesta, the UNESCO World Heritage monastery of Nea Moni, and the abandoned ghost village of Anavatos. Its volcanic black-pebble beaches and an island that operates for its own population rather than for tourists make it one of the most distinctive destinations in the Aegean.",
      el: "Η Χίος είναι ένα μεγάλο νησί στο Βόρειο Αιγαίο — το μοναδικό μέρος στη γη όπου η μαστίχα παράγεται εμπορικά, με το ζωγραφιστό χωριό Πυργί, τα οχυρωμένα Μεστά, τη Νέα Μονή (UNESCO), και τον εγκαταλελειμμένο Ανάβατο. Οι μαύρες ηφαιστειακές παραλίες και το νησί που λειτουργεί για τον πληθυσμό του παρά για τους τουρίστες το κάνουν έναν από τους πιο ξεχωριστούς προορισμούς του Αιγαίου.",
    },
    highlights: {
      en: ["Pyrgi painted village & xysta art", "Mesta fortress village", "Nea Moni UNESCO monastery", "Anavatos ghost village", "Mastic — found nowhere else"],
      el: ["Πυργί — ζωγραφιστό χωριό", "Μεστά — οχυρωμένος μεσαιωνικός οικισμός", "Νέα Μονή — Μνημείο UNESCO", "Ανάβατος — το εγκαταλελειμμένο χωριό", "Μαστίχα — η ρητίνη που παράγεται μόνο εδώ"],
    },
    guideLinks: [
      {
        href: "/hotels/chios",
        label: { en: "Where to Stay in Chios", el: "Πού να μείνεις στη Χίο" }
      },
    ],
    featured: true,
    seo: {
      title: {
        en: "Chios Travel Guide: Mastic Villages, Pyrgi & Mesta, Beaches",
        el: "Χίος: Οδηγός Ταξιδιού — Μαστιχοχώρια, Πυργί, Μεστά, Παραλίες"
      },
      description: {
        en: "Complete travel guide to Chios island: the painted village of Pyrgi, fortified medieval Mesta, UNESCO monastery of Nea Moni, Anavatos ghost village, mastic, black pebble beaches, best time to visit & practical tips.",
        el: "Πλήρης ταξιδιωτικός οδηγός για τη Χίο: το ζωγραφιστό Πυργί, τα οχυρωμένα Μεστά, τη Νέα Μονή UNESCO, τον Ανάβατο, τη μαστίχα, τις μαύρες ηφαιστειακές παραλίες, πότε να πας & πρακτικές συμβουλές."
      }
    }
  },
  {
    slug: "andros",
    name: "Andros",
    region: { en: "Cyclades", el: "Κυκλάδες" },
    blurb: {
      en: "Hiking capital of the Cyclades with 300km of certified trails, a neoclassical Chora built by sea captains, the Goulandris Museum of Modern Art, perennial rivers and waterfalls, and beaches that combine wild coastal scenery with exceptional water clarity.",
      el: "Πρωτεύουσα πεζοπορίας των Κυκλάδων με 300χλμ πιστοποιημένα μονοπάτια, νεοκλασική Χώρα καπεταναίων, Μουσείο Σύγχρονης Τέχνης Γουλανδρή, ποτάμια, καταρράκτες και παραλίες με εξαιρετική διαύγεια."
    },
    image: "/images/andros-cover.webp",
    imagePosition: "50% 50%",
    overview: {
      en: "Andros is the northernmost and second-largest island of the Cyclades — radically different from every other island in the group, with year-round flowing rivers, waterfalls, springs, green valleys shaded by plane trees, 300+ kilometres of certified hiking trails, a neoclassical capital built on 19th-century maritime shipping wealth, and the Goulandris Museum of Modern Art, one of the finest small museums in the Mediterranean.",
      el: "Η Άνδρος είναι το βορειότερο και δεύτερο μεγαλύτερο νησί των Κυκλάδων — ριζικά διαφορετικό από κάθε άλλο νησί της ομάδας, με ποτάμια που ρέουν όλο τον χρόνο, καταρράκτες, πηγές, πράσινες κοιλάδες, 300+ χιλιόμετρα πιστοποιημένων μονοπατιών, νεοκλασική πρωτεύουσα χτισμένη από ναυτική ευημερία και το Μουσείο Σύγχρονης Τέχνης Γουλανδρή."
    },
    highlights: {
      en: ["300km hiking trails — Best of Europe", "Goulandris Museum of Modern Art", "Neoclassical Chora of the sea captains", "Pithara waterfalls & Menites springs", "Achla beach — river meets the sea", "Fourtalia — island's signature omelette"],
      el: ["300χλμ μονοπάτια — Κορυφαία της Ευρώπης", "Μουσείο Σύγχρονης Τέχνης Γουλανδρή", "Νεοκλασική Χώρα των καπεταναίων", "Καταρράκτες Πιθαρά & Πηγές Μενιτών", "Παραλία Άχλα — ποτάμι συναντά θάλασσα", "Φουρτάλια — η παραδοσιακή ομελέτα του νησιού"]
    },
    guideLinks: [
      {
        href: "/hotels/andros",
        label: { en: "Where to Stay in Andros", el: "Πού να μείνεις στην Άνδρο" }
      },
    ],
    featured: true,
    seo: {
      title: {
        en: "Andros Travel Guide: Hiking, Chora, Goulandris Museum & Best Beaches",
        el: "Άνδρος: Οδηγός Ταξιδιού — Μονοπάτια, Χώρα, Μουσείο Γουλανδρή & Παραλίες"
      },
      description: {
        en: "Complete travel guide to Andros island: the hiking capital of the Cyclades with 300km of marked trails, neoclassical Chora built by shipping wealth, the Goulandris Museum of Modern Art, Pithara waterfalls, Achla beach, fourtalia omelette & practical tips.",
        el: "Πλήρης ταξιδιωτικός οδηγός για την Άνδρο: 300χλμ πιστοποιημένα μονοπάτια, νεοκλασική Χώρα, Μουσείο Γουλανδρή, καταρράκτες Πιθαρά, παραλία Άχλα, φουρτάλια & πρακτικές συμβουλές."
      }
    }
  },
  {
    slug: "nafpaktos",
    name: "Nafpaktos",
    region: { en: "Mainland escapes", el: "Ηπειρωτική Ελλάδα" },
    blurb: {
      en: "A perfectly preserved Venetian harbour that gave the world the Battle of Lepanto and the imagination of Cervantes. The only inhabited island in the Gulf of Corinth. A sacred lagoon where Byron came to die for Greek independence. And above it all, forested mountain villages of exceptional beauty.",
      el: "Ένα τέλεια διατηρημένο βενετσιάνικο λιμάνι που χάρισε στον κόσμο τη Ναυμαχία της Ναυπάκτου και την έμπνευση του Θερβάντες. Το μοναδικό κατοικημένο νησί στον Κορινθιακό Κόλπο. Μια ιερή λιμνοθάλασσα όπου πέθανε ο Βύρωνας για την ελληνική ανεξαρτησία. Και πάνω απ' όλα, δασωμένα ορεινά χωριά εξαιρετικής ομορφιάς."
    },
    image: "/images/nafpaktos-cover.webp",
    imagePosition: "50% 50%",
    overview: {
      en: "Nafpaktos is one of the most historically freighted small towns in Greece — a place where a single afternoon of walking the harbour wall, climbing through the layers of a Venetian fortress and reading the plaques scattered through the old town delivers more concentrated history per square metre than destinations ten times its size. Known to the Western world as Lepanto, the town gave its name to the 1571 naval battle in which the Holy League fleet defeated the Ottoman navy — ending over a century of Ottoman dominance in the Mediterranean and inspiring one of the most famous passages in European literature. Miguel de Cervantes fought at Lepanto and lost the use of his left hand in the battle; he considered it, he wrote, the finest thing he ever did. The surrounding Nafpaktia region encompasses the only inhabited island in the Gulf of Corinth, the sacred wetlands of Messolonghi, a wild west coast and forested mountain villages of exceptional beauty.",
      el: "Η Ναύπακτος είναι μια από τις πιο ιστορικά φορτισμένες μικρές πόλεις της Ελλάδας — ένα μέρος όπου ένα απόγευμα περπατώντας στο τείχος του λιμανιού, ανεβαίνοντας μέσα από τα στρώματα ενός βενετσιάνικου κάστρου και διαβάζοντας τις πλάκες διάσπαρτες στην παλιά πόλη προσφέρει περισσότερη συμπυκνωμένη ιστορία ανά τετραγωνικό μέτρο από προορισμούς δεκαπλάσιου μεγέθους. Γνωστή στον δυτικό κόσμο ως Lepanto, η πόλη έδωσε το όνομά της στη ναυμαχία του 1571 όπου ο στόλος της Ιεράς Συμμαχίας νίκησε τον οθωμανικό στόλο. Ο Μιγκέλ ντε Θερβάντες πολέμησε στη ναυμαχία και έχασε τη χρήση του αριστερού του χεριού. Η γύρω περιοχή της Ναυπακτίας περιλαμβάνει το μοναδικό κατοικημένο νησί του Κορινθιακού Κόλπου, τους ιερούς υγροτόπους του Μεσολογγίου, μια άγρια δυτική ακτή και δασωμένα ορεινά χωριά."
    },
    highlights: {
      en: ["Venetian harbour (Bourtzi)", "Castle — five rings of walls", "Trizonia island — only island in Gulf of Corinth", "Messolonghi lagoon & Byron monument", "Galaxidi neoclassical town", "Mountain villages of Nafpaktia", "Flamingos at Messolonghi", "Rio-Antirrio Bridge"],
      el: ["Βενετσιάνικο λιμάνι (Μπούρτζι)", "Κάστρο — πέντε δακτύλιοι τειχών", "Τριζόνια — μοναδικό νησί Κορινθιακού", "Λιμνοθάλασσα Μεσολογγίου & μνημείο Βύρωνα", "Γαλαξίδι — νεοκλασική ναυτική πόλη", "Ορεινά χωριά Ναυπακτίας", "Φλαμίνγκο στο Μεσολόγγι", "Γέφυρα Ρίου-Αντιρρίου"]
    },
    guideLinks: [
      {
        href: "/hotels/nafpaktos",
        label: { en: "Where to Stay in Nafpaktos", el: "Πού να μείνεις στη Ναύπακτο" }
      },
      {
        href: "/tours/all",
        label: { en: "Tours & Experiences", el: "Εκδρομές & Εμπειρίες" }
      }
    ],
    seo: {
      title: {
        en: "Nafpaktos Travel Guide: Lepanto, Trizonia, Messolonghi & Mountain Villages",
        el: "Ναύπακτος: Ταξιδιωτικός Οδηγός — Λιμάνι, Κάστρο, Τριζόνια, Μεσολόγγι & Ορεινά Χωριά"
      },
      description: {
        en: "Complete travel guide to Nafpaktos and Nafpaktia — the Venetian harbour that inspired Cervantes, the only inhabited island in the Gulf of Corinth, the sacred lagoon of Messolonghi where Byron died, and forested mountain villages above the clouds. Everything you need to know before you go.",
        el: "Πλήρης ταξιδιωτικός οδηγός για τη Ναύπακτο και τη Ναυπακτία — το βενετσιάνικο λιμάνι, το κάστρο με τους πέντε δακτυλίους, τα Τριζόνια, τη λιμνοθάλασσα του Μεσολογγίου, τα ορεινά χωριά και πρακτικές συμβουλές."
      }
    }
  },
  {
    slug: "kea",
    name: "Kea (Tzia)",
    region: { en: "Cyclades", el: "Κυκλάδες" },
    blurb: {
      en: "Lion of Kea, Ioulida, ancient Karthaia, Vourkari marina & Britannic shipwreck.",
      el: "Λιοντάρι, Ιουλίδα, αρχαία Καρθαία, Βουρκάρι & Britannic."
    },
    image: "/images/kea.webp",
    overview: {
      en: "Kea (Tzia) is the closest Cycladic island to Athens — one hour by ferry from Lavrio. Home to the 6th-century BC Lion carved into bedrock, the hilltop capital Ioulida with red-tiled lanes, the ruins of ancient Karthaia accessible only by trail or boat, the HMHS Britannic shipwreck, the chic Vourkari yacht marina, and the only oak forest in the Cyclades.",
      el: "Η Κέα (Τζιά) είναι το πλησιέστερο κυκλαδικό νησί στην Αθήνα — μία ώρα με το πλοίο από το Λαύριο. Φιλοξενεί το Λιοντάρι του 6ου αι. π.Χ., την Ιουλίδα με τα κόκκινα κεραμίδια, τα ερείπια της αρχαίας Καρθαίας, το ναυάγιο του Britannic, τη μαρίνα του Βουρκαρίου και το μοναδικό δάσος βελανιδιάς στις Κυκλάδες."
    },
    highlights: {
      en: ["Lion of Kea (6th c. BC)", "Ioulida car-free capital", "Ancient Karthaia ruins", "HMHS Britannic shipwreck", "Vourkari marina & seafood", "Oak forest hiking", "Loza sausage & kopanisto cheese"],
      el: ["Λιοντάρι της Κέας (6ος αι. π.Χ.)", "Ιουλίδα — πεζοδρομημένη πρωτεύουσα", "Αρχαία Καρθαία", "Ναυάγιο Britannic", "Βουρκάρι — μαρίνα & θαλασσινά", "Πεζοπορία σε δρυοδάσος", "Λούζα & κοπανιστή"]
    },
    guideLinks: [
      {
        href: "/hotels/kea",
        label: { en: "Where to Stay in Kea", el: "Πού να μείνεις στην Κέα" }
      }
    ],
    seo: {
      title: {
        en: "Kea (Tzia) Island Travel Guide: Lion of Kea, Ioulida, Karthaia & Best Beaches",
        el: "Κέα (Τζιά): Ταξιδιωτικός Οδηγός — Λιοντάρι, Ιουλίδα, Καρθαία & Παραλίες"
      },
      description: {
        en: "Complete travel guide to Kea (Tzia) island: the 6th-century BC Lion carved into bedrock, hilltop Ioulida with red-tiled lanes, ruins of ancient Karthaia, Britannic shipwreck, Vourkari marina, oak forest hiking, loza sausage, thyme honey. Best time to visit, how to get there & tips.",
        el: "Πλήρης ταξιδιωτικός οδηγός για την Κέα (Τζιά): το Λιοντάρι του 6ου αι. π.Χ., η Ιουλίδα, η αρχαία Καρθαία, το ναυάγιο του Britannic, το Βουρκάρι, πεζοπορία σε δρυοδάσος, η λούζα και το θυμαρίσιο μέλι."
      }
    }
  }
];

