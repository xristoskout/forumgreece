import type { HotelCard } from "./types";
export const hotels: HotelCard[] = [
  {
    slug: "santorini",
    name: "Where to Stay in Santorini",
    place: "Santorini",
    info: {
      en: "Choosing where to stay in Santorini shapes the whole trip — from iconic caldera views and romantic sunsets to lively central bases and easier beach-side stays.",
      el: "Η επιλογή της διαμονής στη Σαντορίνη καθορίζει όλη σας την εμπειρία. Το νησί χωρίζεται ουσιαστικά σε δύο κόσμους: την καλντέρα και τις παραλίες.",
    },
    image: "/images/hotel-santorini.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Santorini defines your entire experience. The island is essentially split into two worlds: the dramatic, cliffside towns offering the famous sunset views, and the more relaxed, budget-friendly beach villages on the east coast.",
      el: "Η επιλογή της διαμονής στη Σαντορίνη καθορίζει όλη σας την εμπειρία. Το νησί χωρίζεται ουσιαστικά σε δύο κόσμους: τους δραματικούς οικισμούς στον γκρεμό με τη διάσημη θέα, και τα πιο χαλαρά, οικονομικά παραθαλάσσια χωριά στην ανατολική πλευρά.",
    },

    features: {
      en: ["Oia (Luxury)", "Fira (Nightlife)", "Imerovigli (Romance)"],
      el: ["Οία (Πολυτέλεια)", "Φηρά (Διασκέδαση)", "Ημεροβίγλι (Ρομαντισμός)"],
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
    ],
    seo: {
      title: {
        en: "Where to Stay in Santorini | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να μείνετε στη Σαντορίνη | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Plan your trip to Santorini with our guide on where to stay. Discover the best areas, caldera views, beach resorts, and hotel recommendations for an unforgettable stay.",
        el: "Οργανώστε τη διαμονή σας στη Σαντορίνη. Ανακαλύψτε τις καλύτερες περιοχές, τη θέα στην καλντέρα, τα παραθαλάσσια θέρετρα και προτάσεις ξενοδοχείων."
      }
    },
  },
  {
    slug: "corfu",
    name: "Where to Stay in Corfu",
    place: "Corfu — Ionian Islands",
    info: {
      en: "Find the best places to stay in Corfu — from the romantic Old Town and lively Kavos to family-friendly resorts in Sidari and Gouvia. A complete guide to Corfu hotels and areas.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στην Κέρκυρα — από τη ρομαντική Παλιά Πόλη και το ζωντανό Κάβος έως τα οικογενειακά θέρετρα στο Σιδάρι και τη Γουβιά. Ο πλήρης οδηγός για ξενοδοχεία και περιοχές.",
    },
    image: "/images/hotel-corfu.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Corfu shapes the whole experience — from the cobblestone lanes of the UNESCO Old Town and the lush green north to lively beach resorts in the south and sheltered family bays in between.",
      el: "Η επιλογή διαμονής στην Κέρκυρα καθορίζει ολόκληρη την εμπειρία — από τα πλακόστρωτα σοκάκια της UNESCO Παλιάς Πόλης και το καταπράσινο βορρά έως τα ζωντανά παραθαλάσσια θέρετρα του νότου και τους προστατευμένους οικογενειακούς όρμους.",
    },
    description: {
      en: "Corfu is one of the greenest and most diverse islands in Greece, and where you choose to stay will define the kind of holiday you have. The island stretches from wild northern coastlines and UNESCO-listed architecture in its historic capital to packed beach resorts in the south and peaceful olive-grove villages inland. Unlike many Greek islands, Corfu rewards travelers who look beyond the obvious.",
      el: "Η Κέρκυρα είναι ένα από τα πιο πράσινα και ποικιλόμορφα νησιά της Ελλάδας και η επιλογή διαμονής θα καθορίσει το είδος των διακοπών σας. Το νησί εκτείνεται από τις άγριες βόρειες ακτές και την αρχιτεκτονική UNESCO της ιστορικής πρωτεύουσας έως τα γεμάτα ζωή παραθαλάσσια θέρετρα του νότου και τα γαλήνια ελαιόδεντρα της ενδοχώρας.",
    },
    features: {
      en: ["Corfu Town (Culture)", "Paleokastritsa (Scenery)", "Sidari & North (Families)", "Kavos (Nightlife)"],
      el: ["Πόλη Κέρκυρας (Πολιτισμός)", "Παλαιοκαστρίτσα (Θέα)", "Σιδάρι & Βορράς (Οικογένειες)", "Κάβος (Νυχτερινή ζωή)"],
    },
    sections: [
      {
        title: { en: "1. Corfu Town (Kerkyra): Culture, history and the best of both worlds", el: "1. Πόλη Κέρκυρας (Κέρκυρα): Πολιτισμός, ιστορία και το καλύτερο των δύο κόσμων" },
        content: {
          en: "Corfu Town — known locally as Kerkyra — is the island's capital and one of the most beautiful cities in all of Greece. Its UNESCO-listed Old Town is a layered maze of Venetian alleyways, French arcades and British-era cricket pitches, all set along a dramatic seafront. Staying here puts you within walking distance of the Liston promenade, the Old and New Fortresses, and some of the island's best restaurants and cocktail bars. It suits couples, culture-seekers and anyone who wants to feel the authentic rhythm of the island rather than a resort bubble. Hotels range from boutique properties inside restored mansions to comfortable mid-range options just outside the old walls.",
          el: "Η Πόλη της Κέρκυρας είναι η πρωτεύουσα του νησιού και μία από τις ομορφότερες πόλεις της Ελλάδας. Η Παλιά Πόλη (UNESCO) είναι ένας πολυεπίπεδος λαβύρινθος βενετσιάνικων σοκακιών, γαλλικών στοών και βρετανικών γηπέδων κρίκετ, όλα κατά μήκος της εντυπωσιακής παραλίας. Ιδανική για ζευγάρια, λάτρεις του πολιτισμού και όσους θέλουν αυθεντικό νησιωτικό ρυθμό.",
        }
      },
      {
        title: { en: "2. Paleokastritsa: Dramatic scenery and crystal-clear water", el: "2. Παλαιοκαστρίτσα: Δραματικό τοπίο και κρυστάλλινα νερά" },
        content: {
          en: "On the northwest coast, Paleokastritsa is widely considered one of the most scenic spots in the Ionian Islands. The area is built around a series of small, sheltered coves with turquoise water backed by forested hillsides. It is quieter and more relaxed than the resort zones, making it an excellent base for travelers who want natural beauty and easy access to boat trips, snorkeling and sea caves. Accommodation tends toward smaller family-run hotels and apartments rather than large resorts. It is slightly less convenient for nightlife, but ideal for those who would rather wake up to the sound of the sea.",
          el: "Στη βορειοδυτική ακτή, η Παλαιοκαστρίτσα θεωρείται ευρέως ένα από τα πιο γραφικά σημεία των Ιονίων Νησιών. Η περιοχή είναι χτισμένη γύρω από μικρούς κολπίσκους με τιρκουάζ νερά και κατάφυτες πλαγιές. Ιδανική για όσους προτιμούν φυσική ομορφιά, βαρκάδες και snorkeling αντί για έντονη νυχτερινή ζωή.",
        }
      },
      {
        title: { en: "3. Sidari and the North Coast: Families, Canal d'Amour and long beaches", el: "3. Σιδάρι και Βόρεια Ακτή: Οικογένειες, Canal d'Amour και μεγάλες παραλίες" },
        content: {
          en: "The north of Corfu — including Sidari, Roda and Acharavi — is the island's most popular zone for families and package holidays. The beaches here are broad, sandy and shallow, with calm water well suited to children. Sidari is best known for the Canal d'Amour, a series of dramatic sandstone rock formations with small channels of water running between them. The area has a wide range of hotels and aparthotels, plenty of tavernas and a relaxed, unhurried pace. It is also one of the easier parts of the island to reach directly from the airport via the north coast road.",
          el: "Ο βορράς της Κέρκυρας — Σιδάρι, Ρόδα και Αχαράβη — είναι η πιο δημοφιλής ζώνη για οικογένειες. Οι παραλίες είναι πλατιές, αμμώδεις και ρηχές. Το Σιδάρι φημίζεται για το Canal d'Amour, έναν εντυπωσιακό σχηματισμό αμμόλιθων με μικρά κανάλια νερού μεταξύ τους.",
        }
      },
      {
        title: { en: "4. Gouvia and the East Coast: Convenience, marinas and easy access", el: "4. Γουβιά και Ανατολική Ακτή: Ευκολία, μαρίνες και πρόσβαση" },
        content: {
          en: "Gouvia sits just a few kilometres north of Corfu Town on the calm east coast and offers one of the most convenient bases on the island. The marina here is one of the largest in the Ionian Sea, and the area has a good mix of hotels, beach bars and tavernas without the full resort intensity of the south. It works well for travelers who want to split their time between the capital and the beach, as buses and taxis connect easily in both directions. The water on the east coast is generally calmer than the west, making it a good choice for families who prefer flatter sea conditions.",
          el: "Η Γουβιά βρίσκεται λίγα χιλιόμετρα βόρεια της Κέρκυρας και προσφέρει μία από τις πιο βολικές βάσεις του νησιού. Η μαρίνα είναι μία από τις μεγαλύτερες στο Ιόνιο. Ιδανική για όσους θέλουν συνδυασμό πόλης και παραλίας με εύκολη συγκοινωνία.",
        }
      },
      {
        title: { en: "5. Kavos: Beach bars, nightlife and the young traveler scene", el: "5. Κάβος: Beach bars, νυχτερινή ζωή και νεανικό κλίμα" },
        content: {
          en: "At the southern tip of the island, Kavos has a completely different character from the rest of Corfu. It is the island's main nightlife destination — a long strip of bars, clubs, beach parties and late-night tavernas that runs almost the entire length of the village. If you are traveling in your twenties and want a lively, social holiday with easy access to the beach and an active after-dark scene, Kavos delivers exactly that. It is not the right choice for families or those looking for tranquility, but for the right traveler it is one of the most energetic summer destinations in Greece.",
          el: "Στο νότιο άκρο του νησιού, ο Κάβος έχει εντελώς διαφορετικό χαρακτήρα. Είναι ο κύριος προορισμός νυχτερινής ζωής — μια μεγάλη λωρίδα από μπαρ, κλαμπ, beach parties και ταβέρνες. Ιδανικός για νεαρούς ταξιδιώτες, όχι για οικογένειες.",
        }
      }
    ],
    faq: [
      {
        q: { en: "When is the best time to book hotels in Corfu?", el: "Πότε είναι η καλύτερη περίοδος για κράτηση ξενοδοχείων στην Κέρκυρα;" },
        a: { en: "Corfu's peak season runs from late June to mid-August. Book at least 2–3 months in advance for this period, especially for Corfu Town boutique hotels and properties in Paleokastritsa, which fill up quickly.", el: "Η περίοδος αιχμής είναι από τέλη Ιουνίου έως μέσα Αυγούστου. Κάντε κράτηση 2-3 μήνες νωρίτερα, ειδικά για boutique ξενοδοχεία στην Κέρκυρα και Παλαιοκαστρίτσα." }
      },
      {
        q: { en: "Which area of Corfu is best for families?", el: "Ποια περιοχή της Κέρκυρας είναι καλύτερη για οικογένειες;" },
        a: { en: "The north coast — particularly Sidari, Roda and Acharavi — offers the shallowest beaches, the widest range of family-friendly hotels and the most relaxed pace for young children.", el: "Η βόρεια ακτή — ειδικά Σιδάρι, Ρόδα και Αχαράβη — προσφέρει τις πιο ρηχές παραλίες και τη μεγαλύτερη γκάμα οικογενειακών ξενοδοχείων." }
      },
      {
        q: { en: "Is Corfu Town a good base for the whole holiday?", el: "Είναι η πόλη της Κέρκυρας καλή βάση για ολόκληρες τις διακοπές;" },
        a: { en: "Yes, and it is often underrated as a hotel base. You get the character of a real city, excellent restaurants and easy access to beaches via car or bus. It suits couples and independent travelers more than large families.", el: "Ναι, και συχνά υποτιμάται. Παρέχει χαρακτήρα πραγματικής πόλης, εξαιρετικά εστιατόρια και εύκολη πρόσβαση σε παραλίες." }
      },
      {
        q: { en: "Do I need a car to stay outside Corfu Town?", el: "Χρειάζομαι αυτοκίνητο για διαμονή εκτός πόλης Κέρκυρας;" },
        a: { en: "In most cases, yes. The bus network covers the main routes but runs infrequently outside peak hours. Renting a car or scooter significantly expands your options and is strongly recommended if you want to explore freely.", el: "Στις περισσότερες περιπτώσεις, ναι. Το δίκτυο λεωφορείων καλύπτει τις κύριες διαδρομές αλλά με περιορισμένη συχνότητα. Η ενοικίαση αυτοκινήτου συνιστάται ανεπιφύλακτα." }
      }
    ],
    seo: {
      title: {
        en: "Where to Stay in Corfu | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στην Κέρκυρα | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Corfu — from the romantic Old Town and lively Kavos to family-friendly resorts in Sidari and Gouvia. A complete guide to Corfu hotels and areas.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στην Κέρκυρα — από τη ρομαντική Παλιά Πόλη έως τα οικογενειακά θέρετρα. Ο πλήρης οδηγός για ξενοδοχεία και περιοχές."
      }
    }
  },
  {
    slug: "lesvos",
    name: "Where to Stay in Lesvos",
    place: "Lesvos — North Aegean",
    info: {
      en: "Find the best places to stay in Lesvos — from the lively waterfront of Mytilene and the medieval village of Molyvos to the quiet bays of Vatera and the ouzo capital Plomari. A complete guide to Lesvos hotels and areas.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Λέσβο — από την ζωντανή παραλία της Μυτιλήνης και το μεσαιωνικό Μόλυβο έως τους ήσυχους όρμους των Βατέρων και την πρωτεύουσα του ούζου, το Πλωμάρι.",
    },
    image: "/images/businesses/Iren/2.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Lesvos shapes the entire experience — from the buzzing neoclassical waterfront of Mytilene and the UNESCO Geopark landscapes of the west to the medieval clifftop village of Molyvos in the north and the long sandy beaches of the south.",
      el: "Η επιλογή διαμονής στη Λέσβο καθορίζει ολόκληρη την εμπειρία — από την νεοκλασική προκυμαία της Μυτιλήνης και τα τοπία του UNESCO Geopark έως το μεσαιωνικό Μόλυβο και τις μεγάλες αμμώδεις παραλίες του νότου.",
    },
    description: {
      en: "Lesvos is the third-largest island in Greece and one of the most underrated. Its scale means that where you base yourself genuinely determines what kind of trip you have. The island divides naturally into distinct zones — a lively, urban capital in the east, a photogenic medieval village coast in the north, a remote and volcanic far west, and quieter beach towns in the south. Unlike many Aegean islands, Lesvos rewards slow travel and rewards visitors who leave the obvious route. A car is essential for exploring properly, but choosing the right base first makes everything else easier.",
      el: "Η Λέσβος είναι το τρίτο μεγαλύτερο νησί της Ελλάδας και από τα πιο υποτιμημένα. Το μέγεθός της σημαίνει ότι η επιλογή βάσης καθορίζει πραγματικά το είδος του ταξιδιού σας. Το νησί χωρίζεται φυσικά σε διακριτές ζώνες — μια ζωντανή αστική πρωτεύουσα στα ανατολικά, μια γραφική μεσαιωνική ακτή στα βόρεια, μια απομονωμένη ηφαιστειακή δύση και ήσυχες παραθαλάσσιες πόλεις στα νότια.",
    },
    features: {
      en: ["Mytilene (City & Culture)", "Molyvos (Medieval & Scenic)", "Petra & North (Relaxed)", "Plomari & South (Beaches)", "Close to top beaches & villages", "Ideal base for island road trips"],
      el: ["Μυτιλήνη (Πόλη & Πολιτισμός)", "Μόλυβος (Μεσαιωνικό & Γραφικό)", "Πέτρα & Βορράς (Χαλαρό)", "Πλωμάρι & Νότος (Παραλίες)", "Κοντά σε κορυφαίες παραλίες", "Ιδανική βάση για οδικές εκδρομές"],
    },
    sections: [
      {
        title: { en: "1. Mytilene: The city base with culture, food and easy connections", el: "1. Μυτιλήνη: Η πόλη με πολιτισμό, φαγητό και εύκολες συνδέσεις" },
        content: {
          en: "Mytilene is the island's capital and main port, and it is a far more interesting base than most visitors expect. The city has a genuine urban rhythm — neoclassical architecture, a long working waterfront, a lively market district, excellent restaurants and some of the best ouzo bars in Greece. The Castle of Mytilene, one of the largest fortifications in the Mediterranean, sits above the city and offers sweeping views toward the Turkish coast. Staying here puts you at the centre of the island's transport network, making day trips in every direction straightforward. It suits independent travelers, couples and food-focused visitors who want easy access to the whole island without committing to a single coastal strip.",
          el: "Η Μυτιλήνη είναι η πρωτεύουσα και το κύριο λιμάνι του νησιού, με πιο ενδιαφέροντα χαρακτήρα από ό,τι περιμένουν οι περισσότεροι. Νεοκλασική αρχιτεκτονική, ζωτική προκυμαία, αγορά, εξαιρετικά εστιατόρια και τα καλύτερα μπαρ ούζου. Το κάστρο προσφέρει πανοραμική θέα προς τις απέναντι ακτές. Ιδανική για ανεξάρτητους ταξιδιώτες και λάτρεις του φαγητού.",
        }
      },
      {
        title: { en: "2. Molyvos (Mithymna): Medieval architecture and the island's most scenic village", el: "2. Μόλυβος (Μήθυμνα): Μεσαιωνική αρχιτεκτονική και το πιο γραφικό χωριό" },
        content: {
          en: "Molyvos is widely considered the most beautiful village on Lesvos and one of the most visually striking in the entire Aegean. Its cobblestone streets rise steeply toward a Genoese castle with views stretching toward the Turkish coast, and the harbor below offers one of the most characterful settings in the North Aegean. Hotels and guesthouses here tend to be smaller and more atmospheric than the island's resort-style options — stone-built, often family-run, and packed with character. It is the right base for travelers who want a slower rhythm, beautiful evening walks, and authentic village life alongside good beaches at Anaxos and Petra just a short drive away.",
          el: "Ο Μόλυβος θεωρείται ευρέως το ομορφότερο χωριό της Λέσβου και από τα πιο εντυπωσιακά στο Αιγαίο. Τα πλακόστρωτα σοκάκια ανηφορίζουν προς το γενοβέζικο κάστρο με θέα προς τις απέναντι ακτές, ενώ το λιμάνι προσφέρει μία από τις πιο χαρακτηριστικές ατμόσφαιρες του Βόρειου Αιγαίου. Ιδανικό για αργούς ρυθμούς, βραδινές βόλτες και αυθεντική ζωή.",
        }
      },
      {
        title: { en: "3. Petra and the Northern Coast: Relaxed, accessible and family-friendly", el: "3. Πέτρα και Βόρεια Ακτή: Χαλαρό, προσιτό και ιδανικό για οικογένειες" },
        content: {
          en: "Just south of Molyvos, Petra is a quieter and more practical base for the northern part of the island. It is best known for the church of Panagia Glykofiloussa, perched dramatically on top of a 40-metre volcanic rock at the centre of the village. The beach at Petra is long and sandy, the tavernas are reliable and prices are noticeably more affordable than in Molyvos. The village of Anaxos nearby adds another calm beach option with shallow water well suited to families. This stretch of coast between Petra and Molyvos is one of the best value areas on the island for a relaxed, comfortable stay without sacrificing access to Lesvos's main northern sights.",
          el: "Νότια του Μολύβου, η Πέτρα είναι πιο ήσυχη και πρακτική βάση. Φημίζεται για την εκκλησία της Παναγίας Γλυκοφιλούσσας πάνω σε ηφαιστειακό βράχο 40 μέτρων. Η παραλία είναι μεγάλη και αμμώδης, οι τιμές προσιτές. Η γειτονική Άναξος προσφέρει επιπλέον ήσυχη επιλογή με ρηχά νερά για οικογένειες.",
        }
      },
      {
        title: { en: "4. Plomari and the South: Ouzo, long beaches and authentic village life", el: "4. Πλωμάρι και Νότος: Ούζο, μεγάλες παραλίες και αυθεντική ζωή" },
        content: {
          en: "Plomari is the unofficial ouzo capital of Greece, home to historic distilleries including Varvayannis and the Plomari Ouzo Museum. It sits on the southern coast surrounded by olive groves and looks out over a calm, warm sea. The town itself has a working, un-touristy feel that many visitors find refreshing after more polished destinations. The beach at Agios Isidoros nearby is one of the cleaner and calmer options on the island. Further east, Vatera offers one of the longest sandy beaches in Greece — nearly eight kilometres — backed by flat farmland and with very little development. This part of the island suits travelers who want genuine local atmosphere, easy access to the sea and a slower pace entirely.",
          el: "Το Πλωμάρι είναι η ανεπίσημη πρωτεύουσα του ούζου, με ιστορικά αποστακτήρια και μουσείο. Βρίσκεται στη νότια ακτή, περιτριγυρισμένο από ελαιώνες. Η κοντινή παραλία του Αγίου Ισιδώρου είναι από τις πιο καθαρές. Ανατολικά, τα Βατέρα προσφέρουν μία από τις μεγαλύτερες αμμώδεις παραλίες στην Ελλάδα — σχεδόν 8 χιλιόμετρα.",
        }
      },
      {
        title: { en: "5. Sigri and the West: Remote, dramatic and ideal for the curious traveler", el: "5. Σίγρι και Δύση: Απομακρυσμένο, δραματικό και ιδανικό για περίεργους ταξιδιώτες" },
        content: {
          en: "The western part of Lesvos around Sigri and Skala Eresou is the least visited and arguably the most extraordinary part of the island. The UNESCO Geopark landscape here — volcanic rock formations, the open-air Petrified Forest, fossilised tree trunks millions of years old — is unlike anything else in Greece. Sigri itself is a small, whitewashed fishing village with a quiet harbor and an Ottoman castle, and the Natural History Museum of the Lesvos Petrified Forest is one of the best specialist museums in the Aegean. Accommodation is limited and simple, which is exactly the point. This is the right base for travelers who want genuine off-grid exploration, remarkable landscapes and complete escape from the mainstream island circuit.",
          el: "Η δυτική Λέσβος γύρω από το Σίγρι και την Σκάλα Ερεσού είναι το λιγότερο επισκέψιμο και ίσως πιο εξαιρετικό τμήμα. Το τοπίο του UNESCO Geopark — ηφαιστειακοί σχηματισμοί, Απολιθωμένο Δάσος — είναι μοναδικό. Το Σίγρι είναι ένα μικρό ψαροχώρι με ήσυχο λιμάνι και οθωμανικό κάστρο. Ιδανικό για όσους θέλουν αυθεντική εξερεύνηση μακριά από τα τετριμμένα.",
        }
      }
    ],
    faq: [
      {
        q: { en: "Do I need a car if I'm staying in Lesvos?", el: "Χρειάζομαι αυτοκίνητο αν μένω στη Λέσβο;" },
        a: { en: "Almost certainly yes. Lesvos is one of the largest Greek islands and its most interesting sites — the Petrified Forest, Molyvos, the Kalloni salt pans, Plomari — are spread far apart. Buses run on the main routes but infrequently. Renting a car from day one is strongly recommended.", el: "Σχεδόν σίγουρα ναι. Η Λέσβος είναι από τα μεγαλύτερα νησιά και τα αξιοθέατα είναι πολύ απομακρυσμένα. Τα λεωφορεία κινούνται σπάνια. Η ενοικίαση αυτοκινήτου συνιστάται ανεπιφύλακτα." }
      },
      {
        q: { en: "How many days do I need to see Lesvos properly?", el: "Πόσες μέρες χρειάζομαι για να δω τη Λέσβο;" },
        a: { en: "At minimum five days, ideally seven. The island divides naturally into regions — east, north, west and south — and each deserves at least a day. With less time, choose two regions and explore them well rather than rushing across the whole island.", el: "Τουλάχιστον 5 μέρες, ιδανικά 7. Το νησί χωρίζεται φυσικά σε περιοχές — ανατολή, βορράς, δύση, νότος — και η καθεμία αξίζει τουλάχιστον μία μέρα." }
      },
      {
        q: { en: "Which area is best for a first visit to Lesvos?", el: "Ποια περιοχή είναι καλύτερη για πρώτη επίσκεψη;" },
        a: { en: "Mytilene is the easiest starting point — it has the best transport connections, the widest range of accommodation and restaurants, and puts you within reach of everything. If you want more character from the start, Molyvos is the most atmospheric base on the island.", el: "Η Μυτιλήνη είναι το ευκολότερο σημείο εκκίνησης — καλύτερες συγκοινωνίες, περισσότερη διαμονή και εστιατόρια. Για περισσότερο χαρακτήρα, ο Μόλυβος είναι η πιο ατμοσφαιρική βάση." }
      },
      {
        q: { en: "Is Lesvos suitable for families with children?", el: "Είναι η Λέσβος κατάλληλη για οικογένειες με παιδιά;" },
        a: { en: "Yes, particularly the north coast around Petra and Anaxos, and the south around Vatera, which offer calm, shallow water and spacious sandy beaches. Mytilene also works well as a family base with practical amenities and easy beach access.", el: "Ναι, ειδικά η βόρεια ακτή γύρω από Πέτρα και Άναξο, και ο νότος γύρω από τα Βατέρα, που προσφέρουν ήσυχα ρηχά νερά και μεγάλες αμμώδεις παραλίες." }
      },
      {
        q: { en: "When is the best time to visit Lesvos?", el: "Πότε είναι η καλύτερη εποχή για επίσκεψη;" },
        a: { en: "Late May, June and September offer the best balance — warm enough for swimming, uncrowded enough to move freely around the island and enjoy the villages, thermal springs and geopark sites without the peak-season intensity.", el: "Τέλη Μαΐου, Ιούνιος και Σεπτέμβριος προσφέρουν την καλύτερη ισορροπία — ζέστη για κολύμπι, χωρίς συνωστισμό, ιδανικά για εξερεύνηση χωριών και αξιοθέατων." }
      }
    ],
    seo: {
      title: {
        en: "Where to Stay in Lesvos | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στη Λέσβο | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Lesvos — from the lively waterfront of Mytilene and the medieval village of Molyvos to the quiet bays of Vatera and the ouzo capital Plomari. A complete guide to Lesvos hotels and areas.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Λέσβο — από την Μυτιλήνη και τον Μόλυβο έως τα Βατέρα και το Πλωμάρι. Ο πλήρης οδηγός για ξενοδοχεία και περιοχές."
      }
    },
    featuredBusinesses: ["iren-rooms"],
  },

  {
    slug: "mykonos",
    name: "Where to Stay in Mykonos",
    place: "Mykonos — Cyclades",
    info: {
      en: "Find the best places to stay in Mykonos — from the iconic alleys of Mykonos Town and glamorous Psarou to lively Paradise Beach and the quieter north coast. A complete guide to Mykonos hotels and areas.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Μύκονο — από τα εμβληματικά σοκάκια της Χώρας και την κομψή Ψαρού έως την ζωντανή Paradise Beach και την ήσυχη βόρεια ακτή.",
    },
    image: "/images/mykonos.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Mykonos shapes the entire trip — from the iconic windmills and labyrinthine alleys of Chora and the glamorous beach clubs of the south coast to quieter, more affordable northern beaches and the relaxed inland village of Ano Mera.",
      el: "Η επιλογή διαμονής στη Μύκονο καθορίζει ολόκληρο το ταξίδι — από τους εμβληματικούς ανεμόμυλους και τα λαβυρινθώδη σοκάκια της Χώρας και τα κομψά beach clubs της νότιας ακτής έως τις πιο ήσυχες βόρειες παραλίες και το χαλαρό χωριό της Άνω Μεράς.",
    },
    description: {
      en: "Mykonos is one of the most recognizable islands in the world, but where you stay determines whether you experience it as a luxury escape, a party destination, a cultural base or something quieter and more personal. The island is compact enough to move between areas easily, yet each zone has a completely distinct character. Getting this choice right — before you book — is the most important decision in planning a Mykonos trip.",
      el: "Η Μύκονος είναι από τα πιο αναγνωρίσιμα νησιά του κόσμου, αλλά η επιλογή διαμονής καθορίζει αν θα την βιώσετε ως πολυτελή απόδραση, προορισμό party, πολιτιστική βάση ή κάτι πιο ήσυχο και προσωπικό. Το νησί είναι αρκετά συμπαγές για εύκολη μετακίνηση, αλλά κάθε ζώνη έχει εντελώς διαφορετικό χαρακτήρα.",
    },
    features: {
      en: ["Mykonos Town (Chora)", "Psarou & Ornos", "Platis Gialos", "Paradise & South Coast", "Ano Mera & North"],
      el: ["Χώρα Μυκόνου", "Ψαρού & Ορνός", "Πλατύς Γιαλός", "Paradise & Νότια Ακτή", "Άνω Μερά & Βορράς"],
    },
    sections: [
      {
        title: { en: "1. Mykonos Town (Chora): The iconic base for culture, dining and Cycladic atmosphere", el: "1. Χώρα Μυκόνου: Η εμβληματική βάση για πολιτισμό, εστίαση και κυκλαδίτικη ατμόσφαιρα" },
        content: {
          en: "Mykonos Town — universally known as Chora — is the heart of the island and the most atmospheric place to stay. Its whitewashed cube houses, narrow cobblestone lanes and cascading bougainvilleas create a setting unlike anywhere else in the Cyclades. Staying here puts you within walking distance of Little Venice, the famous windmills, the Panagia Paraportiani church and the island's best restaurants, cocktail bars and boutiques. Hotels in Chora range from high-end design properties with caldera-style terraces to more intimate boutique rooms tucked inside restored captain's houses. It is the right choice for travelers who want to feel the genuine pulse of the island — morning walks before the crowds, late-night dinners in the alleys, and easy access to everything without needing transport. The downside is that it is the busiest and noisiest area during peak season, particularly around Little Venice at sunset.",
          el: "Η Χώρα είναι η καρδιά του νησιού και η πιο ατμοσφαιρική περιοχή διαμονής. Τα ασπρισμένα κυβικά σπίτια, τα στενά πλακόστρωτα σοκάκια και οι βουκονβίλιες δημιουργούν ένα σκηνικό μοναδικό στις Κυκλάδες. Ιδανική για περπάτημα στη Μικρή Βενετία, τους ανεμόμυλους και την Παναγία Παραπορτιανή. Η μειονέκτηση είναι ο θόρυβος τους θερινούς μήνες.",
        }
      },
      {
        title: { en: "2. Psarou and Ornos: Glamour, calm water and the luxury beach scene", el: "2. Ψαρού & Ορνός: Γοητεία, ήρεμα νερά και πολυτελής παραλιακή σκηνή" },
        content: {
          en: "Just south of Chora, the neighboring bays of Psarou and Ornos represent two sides of the same upscale coin. Psarou is Mykonos's most exclusive beach — a small, sheltered cove with crystal-clear water and a famous beach club that has long attracted a high-profile summer crowd. Hotels and villas in this area tend toward the luxury end of the market, with infinity pools, sea views and discreet service. Ornos, immediately adjacent, is slightly more accessible and family-friendly while still offering a polished, stylish atmosphere. It is also a key departure point for the island's water taxi network, making it easy to reach other south coast beaches without a car.",
          el: "Νότια της Χώρας, οι κόλποι της Ψαρούς και του Ορνού αντιπροσωπεύουν δύο πλευρές της ίδιας πολυτελούς εμπειρίας. Η Ψαρού είναι η πιο αποκλειστική παραλία με διάσημο beach club. Ο Ορνός είναι πιο προσιτός και οικογενειακός, αλλά εξίσου κομψός, με water taxi για άλλες παραλίες.",
        }
      },
      {
        title: { en: "3. Platis Gialos: The practical south coast hub", el: "3. Πλατύς Γιαλός: Ο πρακτικός κόμβος της νότιας ακτής" },
        content: {
          en: "Platis Gialos is one of the most useful bases on the island for travelers who want flexibility. The beach here is long and sandy with calm, shallow water, and it serves as the main hub for the island's water taxi service — small boats that connect easily to Paradise, Super Paradise, Agrari and Elia beaches along the southern coast. Accommodation ranges from mid-range hotels to well-appointed apartments, and the area has a good selection of tavernas and beach bars without the full intensity of the more famous spots.",
          el: "Ο Πλατύς Γιαλός είναι μία από τις πιο χρήσιμες βάσεις για ευελιξία. Η παραλία είναι μεγάλη και αμμώδης με ήρεμα νερά, ενώ είναι ο κύριος κόμβος για water taxi προς Paradise, Super Paradise, Αγραρι και Ελιά. Διαμονή από μεσαίας κατηγορίας ξενοδοχεία έως καλά εξοπλισμένα διαμερίσματα.",
        }
      },
      {
        title: { en: "4. Paradise Beach and the South Coast: Party atmosphere and beach club energy", el: "4. Paradise Beach & Νότια Ακτή: Party ατμόσφαιρα και beach club ενέργεια" },
        content: {
          en: "The southern stretch of Mykonos — anchored by Paradise and Super Paradise beaches — is the engine of the island's world-famous nightlife and beach club scene. Music plays from midday until late, the crowd is young and international, and the energy is high throughout the summer. Hotels and complexes in this area are purpose-built for the beach club lifestyle, with rooms and studios steps from the waterfront. It is not the right base for families or travelers looking for peace, but for those who want to be at the centre of the Mykonos party experience, staying on the south coast removes the logistics entirely.",
          el: "Η νότια Μύκονος — Paradise και Super Paradise — είναι η καρδιά της παγκόσμιας νυχτερινής ζωής και των beach clubs. Μουσική από το μεσημέρι έως αργά, νεανικό διεθνές κλίμα και υψηλή ενέργεια. Δεν είναι κατάλληλο για οικογένειες, αλλά ιδανικό για όσους θέλουν το κέντρο της party εμπειρίας.",
        }
      },
      {
        title: { en: "5. Ano Mera and the North: Quiet, authentic and a different side of the island", el: "5. Άνω Μερά & Βορράς: Ήσυχο, αυθεντικό και διαφορετική πλευρά του νησιού" },
        content: {
          en: "Ano Mera is the only significant inland village on Mykonos and offers a completely different experience from the coastal resort zones. Its central square, monastery of Panagia Tourliani and simple tavernas give a genuine sense of how the island lived before the fame arrived. The north coast beaches — including Agios Stefanos, Ftelia, Agios Sostis and Fokos — are among the quietest and most natural on the island, frequented mostly by locals and travelers who seek them out deliberately. Agios Sostis in particular has no sunbeds or music, just clear water and a single taverna.",
          el: "Η Άνω Μερά είναι το μοναδικό σημαντικό ηπειρωτικό χωριό, με κεντρική πλατεία, μονή Παναγίας Τουρλιανής και απλές ταβέρνες. Οι βόρειες παραλίες — Άγιος Στέφανος, Φτελιά, Άγιος Σώστης, Φωκός — είναι από τις πιο ήσυχες. Ο Άγιος Σώστης δεν έχει ξαπλώστρες ή μουσική, μόνο καθαρό νερό και μια ταβέρνα.",
        }
      }
    ],
    faq: [
      {
        q: { en: "Which area of Mykonos is best for a first visit?", el: "Ποια περιοχή της Μυκόνου είναι καλύτερη για πρώτη επίσκεψη;" },
        a: { en: "Mykonos Town (Chora) is the best base for first-time visitors. It gives you the full Cycladic atmosphere, the iconic sights on foot and easy access to the rest of the island. If you prioritize the beach over everything else, Platis Gialos is the most practical and flexible coastal base.", el: "Η Χώρα είναι η καλύτερη βάση για πρώτη επίσκεψη. Παρέχει πλήρη κυκλαδίτικη ατμόσφαιρα, εμβληματικά αξιοθέατα με τα πόδια και εύκολη πρόσβαση στο υπόλοιπο νησί. Αν προτιμάτε την παραλία, ο Πλατύς Γιαλός είναι η πιο πρακτική επιλογή." }
      },
      {
        q: { en: "Is Mykonos Town noisy at night?", el: "Είναι η Χώρα της Μυκόνου θορυβώδης τη νύχτα;" },
        a: { en: "Yes, particularly around Little Venice and the main bar streets during July and August. If you value quiet evenings, look for accommodation on the edges of Chora or in a different area. The noise tends to taper off after 2–3am but peak season nights can be long.", el: "Ναι, ειδικά γύρω από τη Μικρή Βενετία και τους κύριους δρόμους με μπαρ τον Ιούλιο και Αύγουστο. Αν προτιμάτε ήσυχες βραδιές, κοιτάξτε στην άκρη της Χώρας ή σε άλλη περιοχή." }
      },
      {
        q: { en: "Do I need a car in Mykonos?", el: "Χρειάζομαι αυτοκίνητο στη Μύκονο;" },
        a: { en: "Not necessarily. The island's bus network (KTEL) covers the main beaches and runs frequently in summer. The water taxi from Platis Gialos connects the south coast beaches efficiently. A car or ATV becomes useful if you want to reach the north coast beaches or explore Ano Mera on your own schedule.", el: "Όχι απαραίτητα. Το δίκτυο ΚΤΕΛ καλύπτει τις κύριες παραλίες με συχνά δρομολόγια το καλοκαίρι. Τα water taxi από τον Πλατύ Γιαλό συνδέουν αποτελεσματικά τις νότιες παραλίες. Το αυτοκίνητο ή ATV είναι χρήσιμο για βόρειες παραλίες και εξερεύνηση." }
      },
      {
        q: { en: "When is the best time to visit Mykonos for a balance of atmosphere and affordability?", el: "Πότε είναι η καλύτερη εποχή για επίσκεψη στη Μύκονο;" },
        a: { en: "May to mid-June and September to early October offer the best balance. The sea is warm, the island is active but not overwhelming, and hotel prices drop significantly compared to July and August.", el: "Μάιος έως μέσα Ιουνίου και Σεπτέμβριος έως αρχές Οκτωβρίου προσφέρουν την καλύτερη ισορροπία. Η θάλασσα είναι ζεστή, το νησί ζωντανό αλλά όχι συνωστισμένο, και οι τιμές ξενοδοχείων πέφτουν σημαντικά." }
      },
      {
        q: { en: "Can I do a day trip to Delos from any base in Mykonos?", el: "Μπορώ να κάνω ημερήσια εκδρομή στη Δήλο;" },
        a: { en: "Yes — ferries to Delos depart from the Old Port in Mykonos Town regardless of where you are staying. The trip takes about 30 minutes and the site is only open in the mornings, so an early departure is essential. This is one of the best day trips in the entire Aegean.", el: "Ναι — τα φέρι για τη Δήλο αναχωρούν από το Παλιό Λιμάνι της Χώρας. Το ταξίδι διαρκεί 30 λεπτά και ο αρχαιολογικός χώρος είναι ανοιχτός μόνο πρωί, οπότε η πρωινή αναχώρηση είναι απαραίτητη." }
      }
    ],
    seo: {
      title: {
        en: "Where to Stay in Mykonos | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στη Μύκονο | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Mykonos — from the iconic alleys of Mykonos Town and glamorous Psarou to lively Paradise Beach and the quieter north coast. A complete guide to Mykonos hotels and areas.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Μύκονο — από τα εμβληματικά σοκάκια της Χώρας και την κομψή Ψαρού έως την ζωντανή Paradise Beach και την ήσυχη βόρεια ακτή."
      }
    }
  },
  {
    slug: "crete",
    name: "Where to Stay in Crete",
    place: "Crete — Southern Aegean",
    info: {
      en: "Find the best places to stay in Crete — from the Venetian harbour of Chania and the UNESCO sites of Heraklion to the luxury resorts of Elounda and the wild south coast. A complete guide to Crete hotels and areas.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στην Κρήτη — από το βενετσιάνικο λιμάνι των Χανίων και τα μνημεία UNESCO του Ηρακλείου έως τα πολυτελή θέρετρα της Ελούντας και την άγρια νότια ακτή.",
    },
    image: "/images/crete.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Crete is the single most important planning decision for this island — it stretches over 260 kilometres from west to east, takes five hours to drive end to end, and divides into four completely distinct regions, each with its own character, coastline and pace.",
      el: "Η επιλογή διαμονής στην Κρήτη είναι η πιο σημαντική απόφαση σχεδιασμού — εκτείνεται πάνω από 260 χιλιόμετρα, χρειάζεται πέντε ώρες για να την διασχίσετε και χωρίζεται σε τέσσερις εντελώς διακριτές περιοχές.",
    },
    description: {
      en: "Crete is the largest island in Greece and one of the most diverse destinations in the entire Mediterranean. It functions less like a typical Greek island and more like a small country — with snow-capped mountains, ancient Minoan palaces, sixteen-kilometre gorges, pink-sand lagoons and working urban cities all coexisting on the same landmass. A week here barely scratches the surface. Getting your base right from the start determines whether you spend your holiday moving freely or losing days to unnecessary driving. The island divides naturally into four regions — Chania in the west, Rethymno in the centre-west, Heraklion in the centre-east and Lasithi in the east — and each deserves to be treated as a separate destination.",
      el: "Η Κρήτη είναι το μεγαλύτερο νησί της Ελλάδας και ένας από τους πιο ποικιλόμορφους προορισμούς της Μεσογείου. Λειτουργεί λιγότερο σαν τυπικό ελληνικό νησί και περισσότερο σαν μικρή χώρα — με χιονισμένα βουνά, αρχαία μινωικά ανάκτορα και μεσαιωνικά λιμάνια. Η σωστή επιλογή βάσης καθορίζει αν θα περάσετε τις διακοπές σας κινούμενοι ελεύθερα ή χάνοντας μέρες σε άσκοπες διαδρομές.",
    },
    features: {
      en: ["Chania (Old Town & West)", "Heraklion (Culture & Access)", "Rethymno (History & Beach)", "Elounda & East (Luxury & Quiet)", "South Coast (Remote & Wild)", "Gateway to Knossos & Minoan sites", "Samaria Gorge day trips", "Ideal base for island-wide road trips"],
      el: ["Χανιά (Παλιά Πόλη & Δύση)", "Ηράκλειο (Πολιτισμός & Πρόσβαση)", "Ρέθυμνο (Ιστορία & Παραλία)", "Ελούντα & Ανατολή (Πολυτέλεια & Ηρεμία)", "Νότια Ακτή (Απομακρυσμένο & Άγριο)", "Πύλη για Κνωσό & Μινωικά μνημεία", "Εκδρομές στο Φαράγγι της Σαμαριάς", "Ιδανική βάση για οδικές εξορμήσεις"],
    },
    sections: [
      {
        title: { en: "1. Chania: The most beautiful city in Crete — and the best base for the west", el: "1. Χανιά: Η ομορφότερη πόλη της Κρήτης — και η καλύτερη βάση για τη δύση" },
        content: {
          en: "Chania is widely considered the most atmospheric city on the island and one of the most beautiful in all of Greece. Its Venetian harbour, lined with restaurants and backed by a labyrinth of narrow lanes, bougainvillea-draped archways and restored Ottoman buildings, creates a setting that most visitors find impossible to leave. Staying in the Old Town puts you within walking distance of the covered market, the Firkas Fortress, the Maritime Museum and some of the island's best dining. Beyond the city, the western prefecture of Crete offers extraordinary natural contrasts — the pink-sand lagoon of Elafonisi, the vast open beach of Falasarna, the Samaria Gorge (one of the longest walkable gorges in Europe) and the remote south coast village of Loutro, accessible only by boat or on foot. Chania suits almost every type of traveler — couples who want character and good food, families with a base close to varied beaches and active visitors who want the gorge and west coast hiking on their doorstep. Hotels range from boutique rooms inside 17th-century Venetian mansions to comfortable modern properties on the outskirts of the Old Town.",
          el: "Τα Χανιά θεωρούνται η πιο ατμοσφαιρική πόλη του νησιού. Το βενετσιάνικο λιμάνι, τα στενά σοκάκια, οι ανθισμένες καμάρες και τα αναστηλωμένα οθωμανικά κτίρια δημιουργούν ένα σκηνικό που οι περισσότεροι δυσκολεύονται να αποχωριστούν. Συνδυάζει ρομαντική ατμόσφαιρα, εξαιρετική κουζίνα, μοναδικές παραλίες (Ελαφονήσι, Φαλάσαρνα) και πρόσβαση στο Φαράγγι της Σαμαριάς. Ιδανική για κάθε τύπο ταξιδιώτη.",
        }
      },
      {
        title: { en: "2. Rethymno: History, a long sandy beach and the most balanced base on the island", el: "2. Ρέθυμνο: Ιστορία, μεγάλη αμμώδης παραλία και η πιο ισορροπημένη βάση" },
        content: {
          en: "Rethymno sits roughly halfway along the north coast and offers a remarkably well-balanced base. The city has a beautifully preserved Venetian Old Town, a landmark Fortezza fortress looking out over the sea and a long, broad sandy beach that runs for eleven kilometres east of the centre — one of the longest uninterrupted beaches in Crete. The pace here is slightly slower than Chania or Heraklion, and prices tend to be noticeably more reasonable. It is a strong base for travelers who want to divide their time between city sightseeing, beach days and day trips — Heraklion and Knossos are accessible to the east, and Chania and the western beaches are reachable to the west. The south coast village of Plakias and the beach of Agios Pavlos are less than an hour away by car, making Rethymno one of the few bases that gives you genuine access to both coastlines. Accommodation ranges from family-run guesthouses in the Old Town to large resort hotels along the beach strip.",
          el: "Το Ρέθυμνο βρίσκεται περίπου στη μέση της βόρειας ακτής και προσφέρει μια αξιοσημείωτα ισορροπημένη βάση. Η καλοδιατηρημένη βενετσιάνικη Παλιά Πόλη, η Φορτέτζα και η τεράστια αμμώδης παραλία 11 χιλιομέτρων συνδυάζονται με καλές τιμές. Ιδανικό για συνδυασμό αξιοθέατων, παραλίας και ημερήσιων εκδρομών. Πρόσβαση και στις δύο ακτές του νησιού.",
        }
      },
      {
        title: { en: "3. Heraklion: The urban gateway to Crete's greatest history", el: "3. Ηράκλειο: Η αστική πύλη στη σπουδαιότερη ιστορία της Κρήτης" },
        content: {
          en: "Heraklion is the capital of Crete and the island's main transport hub — home to the largest international airport, the busiest ferry port and the most important archaeological museum in the Aegean. As a base it is often underrated by visitors who arrive expecting a resort and find a functioning city instead. But Heraklion has real substance: the Heraklion Archaeological Museum houses the most extensive Minoan collection in the world, the Palace of Knossos — inscribed on the UNESCO World Heritage List in 2025 alongside five other Minoan palace centres — is just ten minutes from the city centre, and the old market area around 1866 Street is one of the most authentic urban food experiences in Greece. The city works best as a base for travelers whose priority is history, archaeology and easy island-wide connections. Beach resorts at Agia Pelagia to the west and Hersonissos to the east are both within easy reach, and the airport connections make it the most practical arrival point for most visitors to the island.",
          el: "Το Ηράκλειο είναι η πρωτεύουσα και ο κύριος συγκοινωνιακός κόμβος. Συχνά υποτιμάται, αλλά προσφέρει ουσιαστικό περιεχόμενο: το Αρχαιολογικό Μουσείο με τη μεγαλύτερη μινωική συλλογή στον κόσμο, την Κνωσό (UNESCO 2025) σε 10 λεπτά, και αυθεντική γαστρονομική εμπειρία. Ιδανική βάση για ιστορία, αρχαιολογία και εύκολες συνδέσεις προς όλο το νησί.",
        }
      },
      {
        title: { en: "4. Elounda and the East: Luxury, calm and the most exclusive corner of Crete", el: "4. Ελούντα και Ανατολή: Πολυτέλεια, ηρεμία και η πιο exclusive γωνιά της Κρήτης" },
        content: {
          en: "The eastern prefecture of Lasithi — anchored by Elounda, Agios Nikolaos and the Spinalonga peninsula — is home to some of the finest resort hotels in Greece. Elounda in particular has long been established as the island's luxury destination, with a cluster of world-class properties set along the edge of the Mirabello Bay offering private pools, direct sea access and a level of service and privacy rarely found elsewhere in the country. The iconic island of Spinalonga — a former Venetian fortress and one of Europe's last active leprosy colonies, made famous by the novel The Island — sits just offshore and is visited by boat from nearby Plaka. Agios Nikolaos, with its distinctive inner lake connected to the sea, offers a more accessible and lively alternative with good restaurants, a marina and a cosmopolitan atmosphere. Further east, the town of Sitia is quieter still, with direct access to the Minoan palace of Zakros, the remote beaches of Xerokampos and the extraordinary uninhabited island of Koufonisi. This part of Crete suits travelers who want privacy, natural beauty and a slower rhythm far from the tourist trail.",
          el: "Το Λασίθι — με Ελούντα, Άγιο Νικόλαο και Σπιναλόγκα — φιλοξενεί τα καλύτερα resort της Ελλάδας. Η Ελούντα προσφέρει παγκόσμιας κλάσης πολυτέλεια, η Σπιναλόγκα (το νησί του μυθιστορήματος «Το Νησί») είναι δίπλα, και ο Άγιος Νικόλαος δίνει μια πιο ζωντανή εναλλακτική. Ιδανικό για ιδιωτικότητα και φυσική ομορφιά.",
        }
      },
      {
        title: { en: "5. The South Coast: Wild, remote and unlike anywhere else in Greece", el: "5. Νότια Ακτή: Άγρια, απομακρυσμένη και αλλιώτικη από οπουδήποτε αλλού" },
        content: {
          en: "Crete's south coast is separated from the north by the White Mountains and the Psiloritis range, and this geographical barrier has preserved its character almost entirely. Villages like Loutro — reachable only by boat or on foot — Chora Sfakion, Matala and Paleochora feel genuinely off the main circuit. The beaches here are wilder, the sea is warmer and calmer in summer, and the tavernas are simpler and more honest. Matala, with its famous cave dwellings carved into the cliffside, has a particular mythological status in Greek travel history. Paleochora, at the far southwestern tip, is a relaxed town with beaches on both sides — a sandy bay to the west and a pebble beach to the east — and a loyal following among long-stay independent travelers. Staying on the south coast requires a car and a willingness to leave convenience behind, but for the right traveler it offers the most authentic and unhurried version of Crete available anywhere on the island.",
          el: "Η νότια ακτή χωρίζεται από τον βορρά από τα Λευκά Όρη, διατηρώντας τον χαρακτήρα της σχεδόν ανέπαφο. Τα Λουτρό, η Χώρα Σφακίων, τα Μάταλα και η Παλαιόχωρα νιώθουν πραγματικά εκτός της κύριας τουριστικής διαδρομής. Χρειάζεται αυτοκίνητο, αλλά προσφέρει την πιο αυθεντική Κρήτη.",
        }
      }
    ],
    faq: [
      {
        q: { en: "How many days do I need to see Crete properly?", el: "Πόσες μέρες χρειάζομαι για να δω σωστά την Κρήτη;" },
        a: { en: "At minimum seven days, ideally ten to fourteen. The island takes over five hours to drive end to end, and each of the four main regions deserves at least two days. With less time, choose one or two regions and explore them well.", el: "Τουλάχιστον 7 μέρες, ιδανικά 10-14. Χρειάζεται πάνω από 5 ώρες οδήγησης από άκρη σε άκρη. Με λιγότερο χρόνο, επιλέξτε 1-2 περιοχές και εξερευνήστε τις καλά." }
      },
      {
        q: { en: "Which area of Crete is best for a first visit?", el: "Ποια περιοχή της Κρήτης είναι καλύτερη για πρώτη επίσκεψη;" },
        a: { en: "Chania is the most rewarding first base — it combines the island's most beautiful Old Town with easy access to excellent beaches, the Samaria Gorge and the dramatic west coast. If history is your main priority, base yourself in Heraklion.", el: "Τα Χανιά είναι η καλύτερη πρώτη βάση — συνδυάζουν την ομορφότερη Παλιά Πόλη με εξαιρετικές παραλίες, το Φαράγγι της Σαμαριάς και τη δραματική δυτική ακτή. Αν προτεραιότητα είναι η ιστορία, το Ηράκλειο." }
      },
      {
        q: { en: "Do I need a car in Crete?", el: "Χρειάζομαι αυτοκίνητο στην Κρήτη;" },
        a: { en: "Yes, for almost any base outside the city centres. Public buses connect the main north coast towns, but the south coast, mountain villages and gorges are inaccessible without your own transport.", el: "Ναι, για σχεδόν κάθε βάση εκτός των κέντρων πόλεων. Τα λεωφορεία συνδέουν τις βόρειες πόλεις, αλλά η νότια ακτή και τα ορεινά είναι απρόσιτα χωρίς αυτοκίνητο." }
      },
      {
        q: { en: "Which airport should I fly into?", el: "Σε ποιο αεροδρόμιο να πετάξω;" },
        a: { en: "Heraklion Airport (HER) is the main hub with the widest range of flights — choose it for Heraklion, Elounda, Rethymno or the east. Chania Airport (CHQ) is smaller with direct seasonal routes from most of Europe — choose it for Chania or the west.", el: "Το Ηράκλειο (HER) είναι ο κύριος κόμβος. Τα Χανιά (CHQ) είναι μικρότερο με απευθείας πτήσεις από Ευρώπη." }
      },
      {
        q: { en: "When is the best time to visit Crete?", el: "Πότε είναι η καλύτερη εποχή για Κρήτη;" },
        a: { en: "May, June and September to early October offer the best conditions. The sea is warm, the island is active but not overwhelming, and prices are lower than July and August. Spring is excellent for hikers.", el: "Μάιος, Ιούνιος και Σεπτέμβριος έως αρχές Οκτωβρίου. Η θάλασσα είναι ζεστή, το νησί ζωντανό αλλά όχι γεμάτο, και οι τιμές χαμηλότερες." }
      },
      {
        q: { en: "Is Elounda worth the premium price?", el: "Αξίζει η Ελούντα την υψηλή τιμή της;" },
        a: { en: "For the right traveler, yes. The resort hotels around Elounda Bay are among the finest in the Mediterranean. If budget is a consideration, Agios Nikolaos offers a similar location and atmosphere at a noticeably lower price point.", el: "Ναι, για τον κατάλληλο ταξιδιώτη. Τα resort του κόλπου της Ελούντας είναι από τα καλύτερα στη Μεσόγειο. Ο Άγιος Νικόλαος προσφέρει παρόμοια τοποθεσία σε χαμηλότερη τιμή." }
      }
    ],
    seo: {
      title: {
        en: "Where to Stay in Crete | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στην Κρήτη | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Crete — from the Venetian harbour of Chania and the UNESCO sites of Heraklion to the luxury resorts of Elounda and the wild south coast. A complete guide to Crete hotels and areas.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στην Κρήτη — από το βενετσιάνικο λιμάνι των Χανίων και τα μνημεία UNESCO του Ηρακλείου έως τα πολυτελή θέρετρα της Ελούντας και την άγρια νότια ακτή."
      }
    }
  },
  {
    slug: "kefalonia",
    name: "Where to Stay in Kefalonia",
    place: "Kefalonia — Ionian Islands",
    info: {
      en: "Find the best places to stay in Kefalonia — from cosmopolitan Fiskardo and the capital Argostoli to the cliff-backed beaches of Myrtos, the caves of Sami and the authentic villages of the south. A complete guide to Kefalonia hotels and areas.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στην Κεφαλονιά — από το κοσμοπολίτικο Φισκάρδο και την πρωτεύουσα Αργοστόλι έως τις εντυπωσιακές παραλίες του Μύρτου, τις σπηλιές της Σάμης και τα αυθεντικά χωριά του νότου.",
    },
    image: "/images/kefalonia.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Kefalonia shapes the entire trip — from the cosmopolitan harbour of Fiskardo in the far north and the lively capital Argostoli to the dramatic cliffs above Myrtos Beach, the cave-filled coast around Sami and the quieter, greener villages of the south.",
      el: "Η επιλογή διαμονής στην Κεφαλονιά καθορίζει ολόκληρο το ταξίδι — από το κοσμοπολίτικο λιμάνι του Φισκάρδου και την ζωντανή πρωτεύουσα Αργοστόλι έως τους δραματικούς γκρεμούς του Μύρτου, την σπηλαιώδη ακτή της Σάμης και τα πιο ήσυχα χωριά του νότου.",
    },
    description: {
      en: "Kefalonia is the largest of the Ionian Islands and one of the most naturally dramatic destinations in Greece. Its landscape is defined by extremes — sheer limestone cliffs dropping into impossibly turquoise water, dense forests covering the flanks of Mount Ainos, underground cave lakes lit from beneath, and Venetian-influenced harbour villages that feel unchanged by the decades. A car is essential here, but unlike some large islands the distances are manageable and the drives between areas are genuinely beautiful in their own right. Getting your base right at the start determines how much of this extraordinary variety you actually experience.",
      el: "Η Κεφαλονιά είναι το μεγαλύτερο από τα Ιόνια Νησιά και ένας από τους πιο δραματικούς προορισμούς στην Ελλάδα. Τοπίο με απότομους ασβεστολιθικούς γκρεμούς, πυκνά δάση στο όρος Αίνος, υπόγειες λίμνες και βενετσιάνικα ψαροχώρια. Απαραίτητο το αυτοκίνητο, αλλά οι αποστάσεις είναι διαχειρίσιμες.",
    },
    features: {
      en: ["Fiskardo (Cosmopolitan & Venetian)", "Argostoli (Capital & Transport Hub)", "Asos (Most Scenic Village)", "Sami (Caves & East Coast)", "Skala & South (Beaches & Families)", "Gateway to Ithaca by ferry", "Myrtos Beach day trips", "Ideal base for scenic island drives"],
      el: ["Φισκάρδο (Κοσμοπολίτικο & Βενετσιάνικο)", "Αργοστόλι (Πρωτεύουσα)", "Άσος (Πιο γραφικό χωριό)", "Σάμη (Σπηλιές & Ανατολική Ακτή)", "Σκάλα & Νότος (Παραλίες & Οικογένειες)", "Πύλη για Ιθάκη με φέρι", "Εκδρομές στην παραλία Μύρτου", "Ιδανική βάση για οδικές εξορμήσεις"],
    },
    sections: [
      {
        title: { en: "1. Fiskardo: The most cosmopolitan village on the island", el: "1. Φισκάρδο: Το πιο κοσμοπολίτικο χωριό του νησιού" },
        content: {
          en: "Fiskardo sits at the northernmost tip of Kefalonia and is the only village on the island that survived the catastrophic 1953 earthquake almost completely intact. Its colourful Venetian harbour, pastel-painted buildings and waterfront tavernas create a picture-postcard setting that attracts a loyal following of sailors, couples and design-conscious travelers. The marina here fills with private yachts throughout summer, giving the village a refined, continental atmosphere unlike anywhere else on the island. Hotels and boutique guesthouses tend toward the premium end — charming, well-kept and intimate rather than large-resort in scale. Fiskardo works best as a base for travelers who want character and elegance over convenience, and who are happy to drive for beaches and sights. Emblisi Beach just north of the village is one of the most beautiful and least crowded on the island, and the ferry connection to Lefkada and Ithaca makes island-hopping easy.",
          el: "Το Φισκάρδο είναι το μοναδικό χωριό που επέζησε σχεδόν άθικτο από τον καταστροφικό σεισμό του 1953. Το πολύχρωμο βενετσιάνικο λιμάνι, τα παστέλ κτίρια και οι ταβέρνες στην προκυμαία δημιουργούν ένα γραφικό σκηνικό που προσελκύει ναυτικούς, ζευγάρια και ταξιδιώτες με αίσθηση. Ιδανικό για όσους θέλουν χαρακτήρα και κομψότητα.",
        }
      },
      {
        title: { en: "2. Argostoli: The practical capital and the island's best-connected base", el: "2. Αργοστόλι: Η πρακτική πρωτεύουσα και η καλύτερα συνδεδεμένη βάση" },
        content: {
          en: "Argostoli is the capital of Kefalonia and the island's main hub for transport, services and day-to-day life. Rebuilt almost entirely after the 1953 earthquake, it lacks the preserved Venetian character of Fiskardo but compensates with genuine urban energy — a lively waterfront promenade, a covered market, good restaurants and easy access to the rest of the island in every direction. The famous De Bosset Bridge, the longest stone bridge built over the sea in the world, connects the city to the Paliki peninsula. The town beach at Lassi, just five minutes from the centre, is popular and well-organised. Argostoli is the most practical base for first-time visitors to the island — the airport is just a short drive away, rental cars are easy to arrange, and the road network fans out from here toward Myrtos, Sami, Fiskardo and the southern beaches with equal ease.",
          el: "Το Αργοστόλι είναι η πρωτεύουσα και ο κύριος συγκοινωνιακός κόμβος. Ανακατασκευάστηκε μετά το σεισμό του 1953, αλλά αντισταθμίζει με ζωντανή ατμόσφαιρα, παραλιακό πεζόδρομο, αγορά και εξαιρετική πρόσβαση προς όλες τις κατευθύνσεις. Η πιο πρακτική βάση για πρώτη επίσκεψη.",
        }
      },
      {
        title: { en: "3. Asos and the Northwest: The most scenic village on the island", el: "3. Άσος και Βορειοδυτικά: Το πιο γραφικό χωριό του νησιού" },
        content: {
          en: "Asos is a small, protected bay village on the northwest coast connected to a dramatic Venetian fortress peninsula by a narrow causeway. It is widely considered the most photogenic spot on Kefalonia — a cluster of brightly painted houses around a circular harbour with forested hills rising steeply on three sides and the ruins of a 16th-century castle above. It has no large hotels, no beach clubs and almost no nightlife, which is precisely its appeal. Accommodation is limited to small family-run rooms and apartments. Asos suits travelers who want a genuinely quiet, beautiful base with easy access to nearby Myrtos Beach — one of the most photographed beaches in Greece, with white pebbles set between vertical white cliffs — just fifteen minutes away by car.",
          el: "Η Άσος είναι ένας μικρός προστατευμένος όρμος στη βορειοδυτική ακτή. Θεωρείται το πιο φωτογενές σημείο της Κεφαλονιάς — χρωματιστά σπίτια γύρω από κυκλικό λιμάνι, κατάφυτοι λόφοι και ερείπια κάστρου. Δεν έχει μεγάλα ξενοδοχεία ή νυχτερινή ζωή, κάτι που αποτελεί ακριβώς τη γοητεία του.",
        }
      },
      {
        title: { en: "4. Sami and the East Coast: Caves, sea and the gateway to Ithaca", el: "4. Σάμη και Ανατολική Ακτή: Σπηλιές, θάλασσα και η πύλη για Ιθάκη" },
        content: {
          en: "Sami is the main port town on the east coast of Kefalonia and the arrival point for ferries from Patra and the mainland. It has a relaxed, working-town atmosphere and a pleasant waterfront, but its real value as a base is access to two of the island's most extraordinary natural attractions. Melissani Cave — an underground lake where sunlight filters through a collapsed roof to illuminate the water in shades of blue and turquoise — is one of the most remarkable sights in Greece. Drogarati Cave nearby is a vast stalactite cavern with near-perfect acoustics, occasionally used as a concert venue. The beach at Antisamos, backed by steep green hills and facing the island of Ithaca, was used as a filming location for Captain Corelli's Mandolin and is among the most visually striking on the island. Sami also provides the most convenient base for a day trip to Ithaca, with regular ferry connections taking under thirty minutes.",
          el: "Η Σάμη είναι το κύριο λιμάνι της ανατολικής ακτής. Η πραγματική αξία της είναι η πρόσβαση στη σπηλιά Μελισσάνη — μια υπόγεια λίμνη με εκπληκτικό φωτισμό — και το σπήλαιο Δρογαράτης. Η παραλία Άντισαμος χρησιμοποιήθηκε στα γυρίσματα του «Ανδρόγυνου Ταγματάρχη». Ιδανική βάση για ημερήσια εκδρομή στην Ιθάκη.",
        }
      },
      {
        title: { en: "5. Skala and the South: Long beaches, low-key atmosphere and family appeal", el: "5. Σκάλα και Νότος: Μεγάλες παραλίες, ήρεμη ατμόσφαιρα και οικογένειες" },
        content: {
          en: "The southern part of Kefalonia — anchored by Skala, Katelios and Lourdas — is the quietest and most family-oriented stretch of the island. Skala has a long, sandy beach with calm water and a pleasant village centre with tavernas and small hotels. Katelios nearby is an even smaller fishing village with a sheltered bay and a reputation for sea turtle nesting. Lourdas sits on a south-facing hillside above a beautiful curved bay and offers some of the best sunset views on the island. The south lacks the drama of the northwest coast, but its gentler, greener landscape, calm sea conditions and unhurried pace make it the most comfortable and accessible part of Kefalonia for families, older travelers and anyone who wants a straightforward, beautiful beach holiday without the cosmopolitan premium of the north.",
          el: "Ο νότος της Κεφαλονιάς — Σκάλα, Κατελιός και Λουρδάς — είναι η πιο ήσυχη περιοχή. Η Σκάλα έχει μεγάλη αμμώδη παραλία, ο Κατελιός φιλοξενεί φωλιές θαλάσσιων χελωνών και τα Λουρδά προσφέρουν υπέροχα ηλιοβασιλέματα. Ιδανικά για οικογένειες και ήρεμες διακοπές.",
        }
      }
    ],
    faq: [
      {
        q: { en: "Which area of Kefalonia is best for a first visit?", el: "Ποια περιοχή της Κεφαλονιάς είναι καλύτερη για πρώτη επίσκεψη;" },
        a: { en: "Argostoli is the most practical base for first-time visitors — it has the best transport links, the widest range of accommodation and puts you within easy reach of every part of the island. If atmosphere and aesthetics matter more than convenience, Fiskardo is the most beautiful and memorable place to stay, though at a higher price point.", el: "Το Αργοστόλι είναι η πιο πρακτική βάση — καλύτερες συγκοινωνίες, περισσότερη διαμονή, εύκολη πρόσβαση παντού. Αν προέχει η ατμόσφαιρα, το Φισκάρδο είναι η ομορφότερη επιλογή, αλλά ακριβότερη." }
      },
      {
        q: { en: "Do I need a car in Kefalonia?", el: "Χρειάζομαι αυτοκίνητο στην Κεφαλονιά;" },
        a: { en: "Yes, without exception. The bus network connects a handful of main routes but runs infrequently and stops early. The island's best beaches, caves, villages and viewpoints are spread across very different corners of the island and are effectively inaccessible without a car.", el: "Ναι, χωρίς εξαίρεση. Οι καλύτερες παραλίες, σπηλιές και χωριά είναι διάσπαρτα και απρόσιτα χωρίς αυτοκίνητο." }
      },
      {
        q: { en: "How far is Myrtos Beach from the main towns?", el: "Πόσο απέχει ο Μύρτος από τις κύριες πόλεις;" },
        a: { en: "Myrtos is approximately 30 minutes from Argostoli by car and around 20 minutes from Asos. There is no regular bus service to the beach, so a car or organized tour is the only practical way to get there.", el: "Ο Μύρτος απέχει 30 λεπτά από το Αργοστόλι και 20 από την Άσο. Δεν υπάρχει τακτική λεωφορειακή γραμμή." }
      },
      {
        q: { en: "Can I visit Ithaca as a day trip from Kefalonia?", el: "Μπορώ να επισκεφτώ την Ιθάκη ως ημερήσια εκδρομή;" },
        a: { en: "Yes, and it is one of the best day trips available from the island. Ferries run from Sami to Pisaetos on Ithaca in under thirty minutes. Ithaca is small, quiet and deeply beautiful — a full contrast to Kefalonia's scale.", el: "Ναι, από Σάμη προς Πισαετό σε 30 λεπτά. Η Ιθάκη είναι μικρή, ήσυχη και πανέμορφη." }
      },
      {
        q: { en: "When is the best time to visit Kefalonia?", el: "Πότε είναι η καλύτερη εποχή για Κεφαλονιά;" },
        a: { en: "Late May through June and September are the ideal months. The weather is warm, the sea is comfortable for swimming, the island is active without being overcrowded, and accommodation prices are noticeably lower than in July and August.", el: "Τέλη Μαΐου έως Ιούνιο και Σεπτέμβριος. Καλός καιρός, ζεστή θάλασσα, το νησί ζωντανό αλλά όχι γεμάτο, χαμηλότερες τιμές." }
      },
      {
        q: { en: "Is Kefalonia suitable for families with young children?", el: "Είναι η Κεφαλονιά κατάλληλη για οικογένειες με μικρά παιδιά;" },
        a: { en: "Yes, particularly the southern coast around Skala and Katelios, where the sea is calm and shallow and the pace is gentle. Argostoli is also a good family base with practical amenities. The northern and western coasts are more dramatic with pebble or cliff beaches better suited to older children and adults.", el: "Ναι, ειδικά ο νότος γύρω από Σκάλα και Κατελιό. Το Αργοστόλι είναι καλή οικογενειακή βάση. Ο βορράς και η δύση έχουν πιο απότομες παραλίες." }
      }
    ],
    seo: {
      title: {
        en: "Where to Stay in Kefalonia | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στην Κεφαλονιά | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Kefalonia — from cosmopolitan Fiskardo and the capital Argostoli to the cliff-backed beaches of Myrtos, the caves of Sami and the authentic villages of the south. A complete guide to Kefalonia hotels and areas.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στην Κεφαλονιά — από το κοσμοπολίτικο Φισκάρδο και το Αργοστόλι έως τον Μύρτο, τις σπηλιές της Σάμης και τα χωριά του νότου."
      }
    }
  },
  {
    slug: "athens",
    name: "Where to Stay in Athens",
    place: "Athens — Attica",
    info: {
      en: "Find the best neighborhoods to stay in Athens — from historic Plaka and local Koukaki to lively Monastiraki, upscale Kolonaki and the creative energy of Psyrri. A complete guide to Athens hotels and areas.",
      el: "Βρείτε τις καλύτερες γειτονιές για διαμονή στην Αθήνα — από την ιστορική Πλάκα και το ήσυχο Κουκάκι έως το ζωντανό Μοναστηράκι, το κομψό Κολωνάκι και τη δημιουργική ενέργεια του Ψυρρή.",
    },
    image: "/images/athens.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Athens shapes the entire experience — from the cobblestone lanes of historic Plaka and the residential calm of Koukaki to the market energy of Monastiraki, the polished streets of Kolonaki and the creative bar scene of Psyrri, each neighborhood gives you a distinctly different version of the city.",
      el: "Η επιλογή γειτονιάς στην Αθήνα καθορίζει ολόκληρη την εμπειρία — από τα πλακόστρωτα σοκάκια της Πλάκας και την ηρεμία του Κουκακίου έως την ενέργεια του Μοναστηρακιού, τους κομψούς δρόμους του Κολωνακίου και την μπαρ σκηνή του Ψυρρή.",
    },
    description: {
      en: "Athens is a city that rewards those who choose their base carefully. It is compact enough to explore almost entirely on foot from the right neighborhood, yet varied enough that the wrong base can make the city feel crowded, noisy or impersonal. The good news is that the best neighborhoods for staying are clustered tightly around the Acropolis — most are within a ten to twenty minute walk of each other — so the choice is less about distance and more about atmosphere, noise levels, price and the kind of daily experience you want to wake up to. Athens also works well as an arrival or departure point before or after the Greek islands, and choosing a well-connected central base makes the logistics of ferry connections and airport transfers significantly easier.",
      el: "Η Αθήνα ανταμείβει όσους επιλέγουν προσεκτικά τη βάση τους. Είναι αρκετά συμπαγής ώστε να την εξερευνήσετε σχεδόν εξ ολοκλήρου με τα πόδια, αλλά αρκετά ποικιλόμορφη ώστε η λάθος βάση να κάνει την πόλη να νιώθει γεμάτη ή θορυβώδης. Οι καλύτερες γειτονιές είναι συγκεντρωμένες γύρω από την Ακρόπολη και απέχουν 10-20 λεπτά με τα πόδια μεταξύ τους.",
    },
    features: {
      en: ["Plaka (Historic & Central)", "Koukaki (Local & Calm)", "Monastiraki & Psyrri (Lively)", "Syntagma (Convenience)", "Kolonaki (Upscale & Cultural)", "Athens Riviera (Beach & Luxury)", "Direct metro to airport & Piraeus", "Easy ferry connections to Greek islands"],
      el: ["Πλάκα (Ιστορική)", "Κουκάκι (Τοπική & Ήσυχη)", "Μοναστηράκι & Ψυρρή (Ζωντανή)", "Σύνταγμα (Εξυπηρέτηση)", "Κολωνάκι (Κομψό & Πολιτιστικό)", "Αθηναϊκή Ριβιέρα (Παραλία)", "Απευθείας μετρό σε αεροδρόμιο & Πειραιά", "Εύκολες ακτοπλοϊκές συνδέσεις"],
    },
    sections: [
      {
        title: { en: "1. Plaka: The most historic neighborhood and the classic first-visit base", el: "1. Πλάκα: Η πιο ιστορική γειτονιά και η κλασική βάση για πρώτη επίσκεψη" },
        content: {
          en: "Plaka is the oldest continuously inhabited neighborhood in Athens, built directly over the streets of the ancient city at the base of the Acropolis. Its cobblestone lanes, neoclassical houses, flowering courtyards and traditional tavernas create the most immediately recognizable version of Athens — the one that appears on every postcard and in every travel guide. Staying here puts you within a five-minute walk of the Acropolis entrance, the Ancient Agora and the Roman Agora, and within easy reach of Syntagma and Monastiraki. Hotels range from simple budget rooms on the quieter side streets to mid-range boutique properties with rooftop terraces and Acropolis views. The main drawback of Plaka is that it caters heavily to tourists — restaurants on the main streets are often overpriced and aimed at passing visitors rather than locals. The best approach is to use Plaka as a base for its extraordinary location and explore the surrounding neighborhoods for food and evening atmosphere. It is the right choice for first-time visitors and those who want the classic Athens experience within walking distance of everything.",
          el: "Η Πλάκα είναι η παλαιότερη συνεχώς κατοικημένη γειτονιά της Αθήνας, χτισμένη πάνω από τους δρόμους της αρχαίας πόλης. Τα πλακόστρωτα σοκάκια, τα νεοκλασικά σπίτια και οι παραδοσιακές ταβέρνες δημιουργούν την πιο αναγνωρίσιμη εικόνα της Αθήνας. Σε 5 λεπτά με τα πόδια από την Ακρόπολη, την Αρχαία και τη Ρωμαϊκή Αγορά. Το μειονέκτημα είναι ο τουριστικός χαρακτήρας — καλό να χρησιμοποιείται ως βάση και να εξερευνάτε γύρω γειτονιές για φαγητό.",
        }
      },
      {
        title: { en: "2. Koukaki: The most consistently recommended neighborhood for a balanced stay", el: "2. Κουκάκι: Η πιο συχνά προτεινόμενη γειτονιά για ισορροπημένη διαμονή" },
        content: {
          en: "Koukaki sits immediately south of the Acropolis and is the neighborhood that experienced travelers return to most consistently. It has a residential, lived-in character — tree-lined streets, neighbourhood bakeries, family-run tavernas and a strong local café culture — while remaining within a ten-minute walk of the Acropolis Museum and fifteen minutes from the Acropolis itself. The pace here is calmer than Plaka or Monastiraki, the restaurants serve food aimed at local tastes rather than tourist budgets, and the streets are noticeably quieter at night. Boutique hotels and well-designed apartment-style accommodation are the dominant options, and prices tend to be more competitive than in the immediate tourist centre. Koukaki suits couples, independent travelers and anyone visiting Athens for the second time who wants a more authentic daily experience alongside easy access to the main sights. The pedestrian street of Dionysiou Areopagitou, which connects Koukaki to the Acropolis via a broad, tree-shaded promenade, is one of the most pleasant urban walks in the city.",
          el: "Το Κουκάκι βρίσκεται αμέσως νότια της Ακρόπολης και είναι η γειτονιά στην οποία επιστρέφουν συχνότερα οι έμπειροι ταξιδιώτες. Δέντρα, γειτονικοί φούρνοι, οικογενειακές ταβέρνες και δυνατή καφέ κουλτούρα, με 10 λεπτά από το Μουσείο Ακρόπολης. Πιο ήσυχο από Πλάκα και Μοναστηράκι, με ανταγωνιστικές τιμές. Ιδανικό για ζευγάρια και ανεξάρτητους ταξιδιώτες.",
        }
      },
      {
        title: { en: "3. Monastiraki and Psyrri: Energy, nightlife and the creative heart of the city", el: "3. Μοναστηράκι και Ψυρρή: Ενέργεια, νυχτερινή ζωή και η δημιουργική καρδιά της πόλης" },
        content: {
          en: "Monastiraki is the most centrally located and consistently lively neighborhood in Athens. Its famous flea market, rooftop bars with uninterrupted Acropolis views, excellent souvlaki joints and direct metro connections to Piraeus and the airport make it one of the most convenient bases in the city. The character here is loud, layered and specifically Athenian — ancient ruins sit alongside street food stalls, Byzantine churches share walls with vintage clothing shops, and the square itself hums with activity from early morning until well past midnight. Light sleepers should choose rooms away from the main square or look for soundproofed accommodation, as Monastiraki does not quiet down until the early hours in summer. Immediately adjacent, Psyrri has evolved from a working-class district into one of the city's most creative neighborhoods — street art-covered buildings, live music venues, cocktail bars and some of Athens's most interesting restaurants occupy the same industrial-era streets. Together, Monastiraki and Psyrri form the best base for travelers who want Athens at its most alive and are happy to trade quiet evenings for extraordinary atmosphere and convenience.",
          el: "Το Μοναστηράκι είναι η πιο κεντρική και ζωντανή γειτονιά. Το παζάρι, τα rooftop μπαρ με θέα Ακρόπολη, τα σουβλατζίδικα και η απευθείας μετρό στον Πειραιά και το αεροδρόμιο το καθιστούν μοναδική βάση. Δίπλα, ο Ψυρρής έχει εξελιχθεί σε δημιουργική γειτονιά με street art, live μουσική και τα καλύτερα εστιατόρια της Αθήνας. Ιδανικό για όσους θέλουν την πόλη στο πιο ζωντανό της.",
        }
      },
      {
        title: { en: "4. Syntagma: Maximum connectivity and the city's landmark luxury hotels", el: "4. Σύνταγμα: Μέγιστη συνδεσιμότητα και τα εμβληματικά πολυτελή ξενοδοχεία" },
        content: {
          en: "Syntagma Square is the civic and political heart of Athens — home to the Greek Parliament, the Changing of the Guard ceremony at the Tomb of the Unknown Soldier, and the city's most direct transport connections. The metro station here provides direct rail links to Athens International Airport and connects to the full metro network in every direction. Hotels around Syntagma include some of the most prestigious addresses in the city, from the historic Grande Bretagne to a cluster of well-established four and five-star properties with Acropolis views and rooftop pools. The neighborhood itself is busier and less atmospheric than Plaka or Koukaki, but its practical advantages are unmatched — particularly for short stays, business travelers and anyone who needs reliable, early-morning airport connections or same-day ferry departures from Piraeus. The National Garden is a short walk away and provides a welcome patch of green in an otherwise dense urban environment.",
          el: "Η πλατεία Συντάγματος είναι η πολιτική καρδιά της Αθήνας. Ο σταθμός μετρό παρέχει απευθείας σύνδεση με το αεροδρόμιο και το δίκτυο μετρό. Εδώ βρίσκονται τα πιο εμβληματικά ξενοδοχεία όπως η Μεγάλη Βρεταννία. Ιδανικό για σύντομες διαμονές, επαγγελματίες και όσους χρειάζονται αεροδρόμιο ή λιμάνι.",
        }
      },
      {
        title: { en: "5. Kolonaki: Upscale, quiet and the best base for culture and refined city life", el: "5. Κολωνάκι: Κομψό, ήσυχο και η καλύτερη βάση για πολιτισμό και εκλεπτυσμένη ζωή" },
        content: {
          en: "Kolonaki sits on the lower slopes of Mount Lycabettus and is Athens's most polished and residential neighborhood. Designer boutiques, high-end wine bars, the Museum of Cycladic Art, the Benaki Museum and the Byzantine and Christian Museum are all within easy walking distance. The streets are quieter than anywhere else near the centre, the accommodation tends toward elegant boutique hotels and serviced apartments, and the overall atmosphere is more European than specifically Greek in character. Kolonaki is not the closest base to the Acropolis — a twenty-minute walk — but it compensates with a genuinely comfortable, sophisticated daily environment and a restaurant and café scene aimed entirely at discerning local tastes. It is the right choice for travelers who want upscale comfort, cultural depth and a respite from the intensity of the more central neighborhoods, without sacrificing central location entirely.",
          el: "Το Κολωνάκι βρίσκεται στους πρόποδες του Λυκαβηττού και είναι η πιο κομψή γειτονιά. Μουσεία (Κυκλαδικής Τέχνης, Μπενάκη), οίκοι μόδας και εκλεκτά wine bar. Πιο ήσυχο και πιο Ευρωπαϊκό από άλλες γειτονιές, με 20 λεπτά με τα πόδια στην Ακρόπολη. Ιδανικό για πολυτελή άνεση και πολιτισμό.",
        }
      },
      {
        title: { en: "6. The Athens Riviera: Beach, luxury and a different pace entirely", el: "6. Αθηναϊκή Ριβιέρα: Παραλία, πολυτέλεια και εντελώς διαφορετικός ρυθμός" },
        content: {
          en: "South of central Athens, the Athenian Riviera — stretching from Glyfada through Voula to Vouliagmeni — offers a completely different kind of stay. This is the coastal face of Athens: beach clubs, marina-front restaurants, luxury resort hotels including the Four Seasons and One&Only, and some of the clearest water accessible from a European capital. It suits travelers who want the combination of easy access to the city's ancient sites during the day and a seaside resort experience in the evenings and mornings. The tram connects the Riviera to the city centre, though journey times are long. Vouliagmeni in particular — with its famous thermal lake, pine-shaded beaches and cluster of high-end hotels — is one of the most complete luxury escapes within thirty minutes of an international airport anywhere in the Mediterranean.",
          el: "Νότια του κέντρου, η Αθηναϊκή Ριβιέρα — από τη Γλυφάδα μέχρι τη Βουλιαγμένη — προσφέρει εντελώς διαφορετική διαμονή. Beach clubs, πολυτελή θέρετρα (Four Seasons, One&Only) και κρυστάλλινα νερά. Το τραμ συνδέει τη Ριβιέρα με το κέντρο. Ιδανική για συνδυασμό πόλης και θάλασσας.",
        }
      }
    ],
    faq: [
      {
        q: { en: "Which neighborhood is best for a first visit to Athens?", el: "Ποια γειτονιά είναι καλύτερη για πρώτη επίσκεψη στην Αθήνα;" },
        a: { en: "Plaka and Koukaki are the two strongest options for first-time visitors. Plaka gives you the most direct access to the ancient sites and the classic Athens atmosphere. Koukaki offers a calmer, more local experience at a slightly lower price point. If convenience is your top priority, Syntagma is the most transport-connected base.", el: "Η Πλάκα και το Κουκάκι είναι οι δύο καλύτερες επιλογές. Η Πλάκα για απευθείας πρόσβαση στα αρχαία μνημεία, το Κουκάκι για πιο ήσυχη και τοπική εμπειρία. Το Σύνταγμα για μέγιστη συγκοινωνιακή σύνδεση." }
      },
      {
        q: { en: "How many nights should I spend in Athens?", el: "Πόσες νύχτες να μείνω στην Αθήνα;" },
        a: { en: "Three nights is the comfortable minimum — one full day for the Acropolis, Ancient Agora and Acropolis Museum, one day for a different part of the city, and one day to slow down. Two nights is possible but leaves most visitors wanting more time.", el: "Τρεις νύχτες είναι το άνετο ελάχιστο — μία μέρα για Ακρόπολη, μία για άλλο μέρος της πόλης και μία για χαλάρωση. Δύο νύχτες είναι εφικτές αλλά συνήθως λίγες." }
      },
      {
        q: { en: "Is Athens noisy at night?", el: "Είναι θορυβώδης η Αθήνα τη νύχτα;" },
        a: { en: "It depends significantly on where you stay. Monastiraki, Psyrri and streets near rooftop bars can be loud until 3–4am in summer. Koukaki, Kolonaki and the quieter side streets of Plaka are significantly calmer.", el: "Εξαρτάται από τη γειτονιά. Μοναστηράκι, Ψυρρής και δρόμοι με rooftop μπαρ είναι θορυβώδη. Κουκάκι, Κολωνάκι και ήσυχα σοκάκια της Πλάκας είναι πολύ πιο ήρεμα." }
      },
      {
        q: { en: "How do I get from Athens Airport to the main neighborhoods?", el: "Πώς φτάνω από το αεροδρόμιο στο κέντρο;" },
        a: { en: "The metro is the simplest option — the blue line (Line 3) runs directly from Athens International Airport to Syntagma Square in approximately 40 minutes. Trains run frequently from early morning until midnight. Taxis and pre-arranged transfers are also available.", el: "Το μετρό είναι η απλούστερη επιλογή — η μπλε γραμμή από το αεροδρόμιο προς Σύνταγμα σε 40 λεπτά. Διαθέσιμα και ταξί." }
      },
      {
        q: { en: "Can I visit the Acropolis from any central neighborhood on foot?", el: "Μπορώ να πάω στην Ακρόπολη με τα πόδια από κάθε κεντρική γειτονιά;" },
        a: { en: "Yes — from Plaka, Koukaki, Monastiraki and Thiseio, the Acropolis entrance is between a 5 and 20-minute walk. From Syntagma it is around 20–25 minutes on foot.", el: "Ναι — από Πλάκα, Κουκάκι, Μοναστηράκι και Θησείο, η είσοδος της Ακρόπολης είναι 5-20 λεπτά με τα πόδια." }
      },
      {
        q: { en: "Is Athens a good base before or after the Greek islands?", el: "Είναι η Αθήνα καλή βάση πριν ή μετά τα νησιά;" },
        a: { en: "Yes, and it is often the most logical one. Piraeus ferry port is directly connected to central Athens by metro in around 20 minutes. Staying one or two nights in Athens at the start and end of a Greece trip is a practical and genuinely rewarding way to structure an itinerary.", el: "Ναι, είναι η πιο λογική επιλογή. Το λιμάνι του Πειραιά συνδέεται απευθείας με μετρό σε 20 λεπτά. Μία-δύο νύχτες στην Αθήνα στην αρχή και στο τέλος του ταξιδιού είναι ιδανικές." }
      }
    ],
    seo: {
      title: {
        en: "Where to Stay in Athens | Best Neighborhoods & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στην Αθήνα | Καλύτερες Γειτονιές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best neighborhoods to stay in Athens — from historic Plaka and local Koukaki to lively Monastiraki, upscale Kolonaki and the creative energy of Psyrri. A complete guide to Athens hotels and areas.",
        el: "Βρείτε τις καλύτερες γειτονιές για διαμονή στην Αθήνα — από την ιστορική Πλάκα και το ήσυχο Κουκάκι έως το ζωντανό Μοναστηράκι, το κομψό Κολωνάκι και τη δημιουργική ενέργεια του Ψυρρή."
      }
    }
  },
  {
    slug: "nayplio-odigos-taxidiou",
    name: "Where to Stay in Nafplio",
    place: "Nafplio — Peloponnese",
    info: {
      en: "Find the best places to stay in Nafplio — from the romantic Venetian Old Town and hilltop Acronafplia to the peaceful outskirts among olive groves and the nearby beach resort of Tolo. A complete guide to Nafplio hotels and areas.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στο Ναύπλιο — από τη ρομαντική βενετσιάνικη Παλιά Πόλη και την Ακροναυπλία έως τα ήσυχα προάστια ανάμεσα σε ελαιώνες και το κοντινό παραθαλάσσιο θέρετρο του Τολού.",
    },
    image: "/images/nafplio.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Nafplio shapes the whole experience — from the marble-paved lanes and neoclassical mansions of the Venetian Old Town and the panoramic hilltop of Acronafplia to the quieter residential outskirts, the olive-grove countryside and the sandy beach resort of Tolo just twelve kilometres away.",
      el: "Η επιλογή διαμονής στο Ναύπλιο καθορίζει ολόκληρη την εμπειρία — από τα μαρμαρόστρωτα σοκάκια της βενετσιάνικης Παλιάς Πόλης και την πανοραμική Ακροναυπλία έως τα ήσυχα προάστια και τον αμμώδη Τolo.",
    },
    description: {
      en: "Nafplio is the most romantic town on the Greek mainland and one of the most beautiful small cities in the entire country. It was the first capital of modern Greece after independence in 1829, and its layered history — ancient acropolis, Venetian fortresses, Ottoman fountain, neoclassical mansions — is visible in almost every street. The town is compact enough to explore entirely on foot from any central base, and its strategic location in the Peloponnese makes it one of the finest hubs for day trips in Greece: Mycenae is 25 minutes away, Epidaurus 30 minutes, and Tiryns just 10.",
      el: "Το Ναύπλιο είναι η πιο ρομαντική πόλη της ελληνικής ηπειρωτικής χώρας. Υπήρξε η πρώτη πρωτεύουσα της σύγχρονης Ελλάδας και η πολυεπίπεδη ιστορία της είναι ορατή σε κάθε δρόμο. Η συμπαγής πόλη εξερευνάται με τα πόδια και η στρατηγική της θέση την καθιστά ιδανική βάση για ημερήσιες εκδρομές.",
    },
    features: {
      en: ["Old Town (Venetian & Romantic)", "Acronafplia (Views & Luxury)", "New Town & Pronia (Local & Affordable)", "Countryside (Olive Groves & Space)", "Tolo (Beach & Families)", "25 min to Mycenae", "30 min to Epidaurus", "2 hours from Athens"],
      el: ["Παλιά Πόλη (Βενετσιάνικη & Ρομαντική)", "Ακροναυπλία (Θέα & Πολυτέλεια)", "Νέα Πόλη & Πρόνοια (Τοπική & Προσιτή)", "Εξοχή (Ελαιώνες & Χώρος)", "Τολό (Παραλία & Οικογένειες)", "25 λεπτά από Μυκήνες", "30 λεπτά από Επίδαυρο", "2 ώρες από Αθήνα"],
    },
    sections: [
      {
        title: { en: "1. The Old Town: The most romantic and atmospheric base in Nafplio", el: "1. Παλιά Πόλη: Η πιο ρομαντική και ατμοσφαιρική βάση στο Ναύπλιο" },
        content: {
          en: "The Old Town is the heart of Nafplio and the neighborhood where most visitors choose to stay, for good reason. Its pedestrianized cobblestone lanes, Venetian-era mansions, bougainvillea-draped archways and marble-paved Syntagma Square create one of the most complete historic urban environments in Greece. Staying here puts you within a short walk of virtually everything — the Palamidi Fortress, the Bourtzi water castle, the Archaeological Museum, the harbor promenade and the best restaurants on the mainland. Hotels and guesthouses in the Old Town tend toward the intimate and characterful end of the scale — boutique properties in restored 19th-century buildings, family-run pensions with Acropolis-view terraces and elegant rooms with stone walls and timber ceilings. The main consideration is that the Old Town has almost no car access and very limited parking. If you are arriving by car, arrange parking with your hotel in advance. Some streets also carry noise from summer evening activity, so rooms on quiet inner alleyways or upper floors are worth specifying when booking. For first-time visitors, couples and anyone who wants the full Nafplio experience from the moment they arrive, the Old Town is the undisputed first choice.",
          el: "Η Παλιά Πόλη είναι η καρδιά του Ναυπλίου. Πεζοδρομημένα πλακόστρωτα σοκάκια, βενετσιάνικα αρχοντικά και η πλατεία Συντάγματος δημιουργούν ένα ολοκληρωμένο ιστορικό περιβάλλον. Σε κοντινή απόσταση από Παλαμήδι, Μπούρτζι, Αρχαιολογικό Μουσείο και λιμάνι. Η πρόσβαση με αυτοκίνητο είναι δύσκολη. Ιδανική για πρώτη επίσκεψη και ζευγάρια.",
        }
      },
      {
        title: { en: "2. Acronafplia: The best views and the most elevated stay in town", el: "2. Ακροναυπλία: Η καλύτερη θέα και η πιο elevated διαμονή" },
        content: {
          en: "Acronafplia is the ancient rocky promontory that rises directly above the Old Town and has been continuously fortified since antiquity — by the ancient Greeks, Byzantines, Venetians and Ottomans in succession. Today it is home to a small number of hotels that occupy one of the most dramatically positioned sites in the Peloponnese, with sweeping views over the rooftops of the Old Town, across the Argolic Gulf and toward the mountains of the surrounding region. The flagship property here, Nafplia Palace Hotel and Villas, is one of the most complete luxury addresses in mainland Greece — its recently renovated private villas come with plunge pools and look out over the entire bay. An elevator descends directly from Acronafplia to the Old Town streets below, which matters significantly in the July and August heat. The hillside position means some stairs are unavoidable for certain rooms, and the setting is less convenient for guests with mobility limitations. For couples seeking panoramic views, privacy and a sense of occasion, Acronafplia is the most memorable place to stay in Nafplio.",
          el: "Η Ακροναυπλία είναι ο αρχαίος βραχώδης λόφος πάνω από την Παλιά Πόλη. Φιλοξενεί ξενοδοχεία με εκπληκτική θέα στον Αργολικό Κόλπο. Το Nafplia Palace και οι νεόκτιστες βίλες του με ιδιωτικές πισίνες είναι η πιο πολυτελής επιλογή. Ανελκυστήρας συνδέει με την Παλιά Πόλη. Ιδανικό για ζευγάρια που θέλουν θέα και ιδιωτικότητα.",
        }
      },
      {
        title: { en: "3. New Town and Pronia: The most local and affordable residential base", el: "3. Νέα Πόλη και Πρόνοια: Η πιο τοπική και προσιτή βάση" },
        content: {
          en: "The New Town and the residential district of Pronia sit just beyond the Old Town walls and offer a completely different kind of stay — quieter, more genuinely local and noticeably more affordable. This is where Nafplio's residents actually live: neighbourhood supermarkets, local tavernas, everyday cafés and the Lion of Bavaria monument are all part of the fabric here. The best tavernas in Pronia, on 25 Martiou Street, are sought out by locals and in-the-know visitors specifically for their food and absence of tourist pricing. The bus station is also in this area, making it convenient for arrivals by coach from Athens or Corinth. The main trade-off is that without a car you are relying on a short taxi ride or a fifteen-minute walk to reach the Old Town for evenings out. For travelers with a rental car, budget-conscious visitors and anyone who wants to experience Nafplio as a place where people actually live rather than a preserved historic stage set, the New Town and Pronia offer real value and a more honest version of the city.",
          el: "Η Νέα Πόλη και η Πρόνοια βρίσκονται λίγο έξω από τα τείχη και προσφέρουν πιο ήσυχη, τοπική και προσιτή διαμονή. Τα καλύτερα ταβερνάκια στην οδό 25ης Μαρτίου. Χρειάζονται 15 λεπτά με τα πόδια ή ταξί για την Παλιά Πόλη. Ιδανικό για ταξιδιώτες με αυτοκίνητο ή χαμηλότερο προϋπολογισμό.",
        }
      },
      {
        title: { en: "4. The Countryside and Olive Grove Properties: Space, quiet and a rural Peloponnese experience", el: "4. Εξοχή και ελαιώνες: Χώρος, ηρεμία και αυθεντική πελοποννησιακή εμπειρία" },
        content: {
          en: "Within a five to fifteen-minute drive from the town centre, a cluster of exceptional countryside hotels occupies the rolling olive groves and farmland of the wider Nafplio region. These properties — ranging from design-forward boutique hotels with pools to traditional stone-built guesthouses surrounded by agricultural land — offer a completely different pace from the compact historic centre. They suit travelers who want more space, private pools, rural views and a relaxed rhythm that the Old Town's narrow lanes cannot provide. The village of Aria, just three kilometres from Nafplio, sits on a hillside with panoramic views of the Palamidi and Bourtzi fortresses and is home to the Byzantine monastery of Agia Moni. Properties in this area make excellent bases for extended stays and Peloponnese road trips, combining easy access to Nafplio with the freedom of a private rural retreat.",
          el: "Σε 5-15 λεπτά από το κέντρο, εξαιρετικά ξενοδοχεία ανάμεσα σε ελαιώνες προσφέρουν εντελώς διαφορετικό ρυθμό. Ιδανικά για περισσότερο χώρο, ιδιωτικές πισίνες και ηρεμία. Το χωριό Άρια προσφέρει πανοραμική θέα στα κάστρα. Ιδανική βάση για οδικές εκδρομές στην Πελοπόννησο.",
        }
      },
      {
        title: { en: "5. Tolo: The beach option close to Nafplio", el: "5. Τολό: Η επιλογή παραλίας κοντά στο Ναύπλιο" },
        content: {
          en: "Tolo is a small coastal resort twelve kilometres south of Nafplio and the most popular beach base in the region. Originally a fishing village, it has grown into a well-organised summer destination with a long sandy beach — known locally as Psili Ammos — calm, shallow water well suited to families and a full range of waterfront tavernas, cafés and tourist facilities along the main Bouboulinas Street. It is particularly appealing for travelers who want a beach-focused holiday with easy day trips to Nafplio, Epidaurus and Mycenae rather than a primarily urban or cultural base. The drive to Nafplio takes under twenty minutes and is straightforward. Accommodation in Tolo tends toward mid-range hotels, apartments and studios rather than boutique properties, and prices are noticeably lower than in the Old Town during peak season. For families with young children or travelers on longer stays who want sand and sea as the daily default, Tolo is the most practical base in the wider Nafplio area.",
          el: "Το Τολό είναι ένα μικρό παραθαλάσσιο θέρετρο 12 χλμ νότια του Ναυπλίου. Μακριά αμμώδης παραλία (Ψιλή Άμμος), ήρεμα ρηχά νερά, ταβέρνες και καφέ. Ιδανικό για οικογένειες και όσους θέλουν παραλία με εύκολες εκδρομές σε Μυκήνες και Επίδαυρο. Χαμηλότερες τιμές από την Παλιά Πόλη.",
        }
      }
    ],
    faq: [
      {
        q: { en: "How many nights should I spend in Nafplio?", el: "Πόσες νύχτες να μείνω στο Ναύπλιο;" },
        a: { en: "Two nights is the comfortable minimum for the town itself — one full day for the Palamidi, the Old Town, the harbor and the Bourtzi, and one for a day trip to Mycenae or Epidaurus. Three nights allows you to slow down and explore more.", el: "Δύο νύχτες είναι το άνετο ελάχιστο — μία μέρα για τα αξιοθέατα, μία για εκδρομή. Τρεις νύχτες σας επιτρέπουν να χαλαρώσετε." }
      },
      {
        q: { en: "Is Nafplio suitable as a day trip from Athens?", el: "Είναι το Ναύπλιο κατάλληλο για ημερήσια εκδρομή από Αθήνα;" },
        a: { en: "It is possible — the drive from Athens is approximately two hours — but most visitors who make the journey wish they had stayed overnight. The town changes completely in the evening, when the day-trippers leave and the harbor promenade fills with locals.", el: "Είναι εφικτό αλλά οι περισσότεροι μετανιώνουν που δεν έμειναν το βράδυ. Η πόλη αλλάζει εντελώς το βράδυ." }
      },
      {
        q: { en: "Do I need a car in Nafplio?", el: "Χρειάζομαι αυτοκίνητο στο Ναύπλιο;" },
        a: { en: "Not for the town itself — the Old Town is entirely walkable. A car becomes essential for visiting Mycenae, Epidaurus and the surrounding Peloponnese sites independently, or if you are staying in the countryside or Tolo.", el: "Όχι για την πόλη — η Παλιά Πόλη είναι πλήρως προσβάσιμη με τα πόδια. Χρειάζεται αυτοκίνητο για Μυκήνες, Επίδαυρο και γύρω περιοχές." }
      },
      {
        q: { en: "When is the best time to visit Nafplio?", el: "Πότε είναι η καλύτερη εποχή για Ναύπλιο;" },
        a: { en: "Nafplio works well year-round. The ideal periods are April to June and September to October, when the weather is comfortable and the town is busy without being overwhelmed. Summer weekends in July and August can be very crowded.", el: "Το Ναύπλιο λειτουργεί όλο τον χρόνο. Ιδανικά Απρίλιος-Ιούνιος και Σεπτέμβριος-Οκτώβριος. Τα καλοκαιρινά Σαββατοκύριακα είναι πολύ πολυσύχναστα." }
      },
      {
        q: { en: "Is Nafplio good for a romantic trip?", el: "Είναι το Ναύπλιο καλό για ρομαντικό ταξίδι;" },
        a: { en: "It is widely considered the most romantic destination in mainland Greece. The combination of Venetian architecture, a harbor lit at night, cobblestone lanes and excellent restaurants makes it a consistently strong choice for couples.", el: "Θεωρείται ο πιο ρομαντικός προορισμός στην ηπειρωτική Ελλάδα. Βενετσιάνικη αρχιτεκτονική, νυχτερινό λιμάνι και εξαιρετικά εστιατόρια." }
      },
      {
        q: { en: "What is the best base for visiting both Mycenae and Epidaurus?", el: "Ποια είναι η καλύτερη βάση για Μυκήνες και Επίδαυρο;" },
        a: { en: "Nafplio is the ideal base for both. Mycenae is 25 minutes by car to the northwest and Epidaurus is 30 minutes to the northeast — both are easy half-day trips that can be combined in a single day with an early start.", el: "Το Ναύπλιο είναι η ιδανική βάση. Μυκήνες 25 λεπτά και Επίδαυρος 30 λεπτά — και οι δύο μπορούν να συνδυαστούν σε μία μέρα." }
      }
    ],
    seo: {
      title: {
        en: "Where to Stay in Nafplio | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στο Ναύπλιο | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Nafplio — from the romantic Venetian Old Town and hilltop Acronafplia to the peaceful outskirts among olive groves and the nearby beach resort of Tolo. A complete guide to Nafplio hotels and areas.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στο Ναύπλιο — από τη ρομαντική βενετσιάνικη Παλιά Πόλη και την Ακροναυπλία έως τα ήσυχα προάστια και τον Τολό."
      }
    }
  },
  {
    slug: "paros",
    name: "Where to Stay in Paros",
    place: "Paros — Cyclades",
    info: {
      en: "Find the best places to stay in Paros — from the chic harbour of Naoussa and the convenient capital Parikia to the windsurfing sands of Golden Beach, the hilltop village of Lefkes and the quiet south coast. A complete guide to Paros hotels and areas.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στην Πάρο — από το κομψό λιμάνι της Νάουσας και την βολική πρωτεύουσα Παροικιά έως τις αμμουδιές της Golden Beach, το μεσαιωνικό χωριό των Λευκών και την ήσυχη νότια ακτή.",
    },
    image: "/images/paros.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Paros shapes the entire trip — from the chic whitewashed harbour of Naoussa in the north and the lively, ferry-connected capital of Parikia in the west to the long windsurfing sands of Golden Beach on the east coast, the medieval hilltop village of Lefkes inland, and the quiet fishing villages of the south.",
      el: "Η επιλογή διαμονής στην Πάρο καθορίζει ολόκληρο το ταξίδι — από το κομψό ασπρόχρωμο λιμάνι της Νάουσας στο βορρά και τη ζωντανή πρωτεύουσα Παροικιά με το λιμάνι των πλοίων έως τη μεγάλη αμμουδιά της Golden Beach με τα θαλάσσια σπορ, το μεσαιωνικό χωριό των Λευκών και τα ήσυχα ψαροχώρια του νότου.",
    },
    description: {
      en: "Paros is one of the most balanced and genuinely enjoyable islands in the Cyclades — and one of the most consistent recommendations for travelers who find Santorini too dramatic and Mykonos too loud. It has excellent beaches, a strong food and wine culture, two characterful towns with very different personalities, a medieval inland village, and a ferry network that makes island-hopping to Naxos, Antiparos, Ios and the Small Cyclades effortless. Unlike many Aegean islands, Paros does not have one dominant area that suits everyone — the choice of base genuinely determines the kind of holiday you have, and the island is compact enough that exploring the whole of it by car in a day is entirely possible.",
      el: "Η Πάρος είναι ένα από τα πιο ισορροπημένα και πραγματικά απολαυστικά νησιά των Κυκλάδων — και μια από τις πιο σταθερές συστάσεις για ταξιδιώτες που βρίσκουν τη Σαντορίνη υπερβολική και τη Μύκονο θορυβώδη. Έχει εξαιρετικές παραλίες, πλούσια γαστρονομική και οινοποιητική κουλτούρα, δύο γραφικές πόλεις με πολύ διαφορετικές προσωπικότητες, ένα μεσαιωνικό χωριό στην ενδοχώρα, και ένα δίκτυο πλοίων που κάνει το island-hopping προς Νάξο, Αντίπαρο, Ίο και Μικρές Κυκλάδες αβίαστο. Η Πάρος είναι αρκετά συμπαγής ώστε η εξερεύνηση όλου του νησιού με αυτοκίνητο σε μία μέρα να είναι απόλυτα εφικτή.",
    },
    features: {
      en: ["Naoussa (Chic & Scenic)", "Parikia (Capital & Convenient)", "Golden Beach (Watersports)", "Lefkes & Villages (Authentic)", "Alyki & South (Relaxed)", "7-minute ferry to Antiparos", "Gateway to Small Cyclades", "Local Parian wine & marble heritage"],
      el: ["Νάουσα (Κομψή & Γραφική)", "Παροικιά (Πρωτεύουσα & Βολική)", "Golden Beach (Θαλάσσια σπορ)", "Λευκές & Χωριά (Αυθεντικά)", "Αλύκη & Νότος (Χαλαρά)", "7 λεπτά με πλοίο στην Αντίπαρο", "Πύλη για Μικρές Κυκλάδες", "Τοπικό κρασί & μαρμάρινη κληρονομιά"],
    },
    sections: [
      {
        title: { en: "1. Naoussa: The most atmospheric and stylish base on the island", el: "1. Νάουσα: Η πιο ατμοσφαιρική και κομψή βάση του νησιού" },
        content: {
          en: "Naoussa is the most photogenic and consistently praised town on Paros, and for many repeat visitors the only place they consider staying. Built around a natural harbour on the north coast, its whitewashed lanes, flowering courtyards, boutique shops, waterfront seafood restaurants and cocktail bars packed around a half-sunken 12th-century Venetian castle create a setting that rivals the most beautiful villages in the Cyclades. In the evenings, the harbour square transforms into one enormous outdoor dining room, with the boats bobbing quietly behind the terrace tables. Naoussa is also extremely well-positioned for the island's best northern beaches — Kolymbithres, with its extraordinary granite rock formations sculpted by the sea, is a short boat or taxi ride away, and Monastiri Beach is just beyond. The Moraitis winery, one of the only operating wineries on Paros, is a short drive from town. Hotels here range from intimate boutique rooms in traditional Cycladic buildings to upscale resorts just outside the centre along the Livadia beach stretch. The main consideration is peak season intensity — Naoussa becomes very busy in July and August, particularly around the harbour after sunset, and the narrow streets make noise unavoidable in central rooms. Staying just outside the village centre, on the hillside above town or along the Santa Maria road, gives you proximity to the action with significantly more quiet and privacy.",
          el: "Η Νάουσα είναι η πιο φωτογενής και σταθερά επαινεμένη πόλη της Πάρου και για πολλούς επισκέπτες το μοναδικό μέρος που σκέφτονται για διαμονή. Χτισμένη γύρω από ένα φυσικό λιμάνι στη βόρεια ακτή, με ασπρισμένα σοκάκια, ανθισμένες αυλές, boutique καταστήματα, ψαροταβέρνες και cocktail bar γύρω από ένα ημίβυθο βενετσιάνικο κάστρο του 12ου αιώνα, δημιουργεί ένα σκηνικό που ανταγωνίζεται τα ομορφότερα χωριά των Κυκλάδων. Η Νάουσα είναι επίσης ιδανικά τοποθετημένη για τις καλύτερες βόρειες παραλίες — τον Κολυμπήθρες, με τους εντυπωσιακούς γρανιτένιους βράχους, και την παραλία Μοναστήρι. Το οινοποιείο Μωραΐτη βρίσκεται σε μικρή απόσταση. Τα ξενοδοχεία κυμαίνονται από μικρά boutique δωμάτια έως πολυτελή θέρετρα. Η κύρια παράμετρος είναι η ένταση της υψηλής περιόδου — η Νάουσα γίνεται πολύ πολυσύχναστη τον Ιούλιο και Αύγουστο.",
        }
      },
      {
        title: { en: "2. Parikia: The most practical and well-connected base for first-time visitors", el: "2. Παροικιά: Η πιο πρακτική και καλά συνδεδεμένη βάση" },
        content: {
          en: "Parikia is the capital and main port of Paros, and considerably more interesting than most port towns in the Cyclades. Its Old Town is a genuinely beautiful Cycladic maze of whitewashed lanes, blue-domed churches and flowering bougainvillea, anchored by the remarkable Panagia Ekatontapiliani — one of the oldest and best-preserved Byzantine churches in Greece, known as the Church of One Hundred Doors. The Frankish Castle on the hill above town was built using ancient marble from a temple of Demeter, and the waterfront promenade is one of the finest sunset-watching spots on the island, looking directly west over the open Aegean. As the island's main transport hub, Parikia gives you direct ferry access to Piraeus, Naxos, Mykonos, Antiparos and the wider Cyclades, and the central bus station here connects to Naoussa, Golden Beach and most of the island's main villages. It suits first-time visitors, independent travelers, families and anyone who wants a convenient and well-serviced base without committing to a specific coastal strip. Accommodation ranges from simple family-run pensions in the Old Town to comfortable modern hotels and well-positioned apartments along the Livadia beach promenade just north of the centre.",
          el: "Η Παροικιά είναι η πρωτεύουσα και το κύριο λιμάνι της Πάρου, και σημαντικά πιο ενδιαφέρουσα από τις περισσότερες λιμενικές πόλεις των Κυκλάδων. Η Παλιά Πόλη είναι ένας όμορφος κυκλαδίτικος λαβύρινθος, με την Παναγία Εκατονταπυλιανή — μία από τις παλαιότερες βυζαντινές εκκλησίες στην Ελλάδα. Το Φράγκικο Κάστρο χτίστηκε με αρχαίο μάρμαρο από ναό της Δήμητρας και ο παραλιακός πεζόδρομος προσφέρει υπέροχο ηλιοβασίλεμα. Ως κύριος συγκοινωνιακός κόμβος, η Παροικιά παρέχει απευθείας συνδέσεις με Πειραιά, Νάξο, Μύκονο, Αντίπαρο και τις Κυκλάδες. Ιδανική για πρώτη επίσκεψη, ανεξάρτητους ταξιδιώτες και οικογένειες.",
        }
      },
      {
        title: { en: "3. Golden Beach (Chrissi Akti): The best base for watersports and east coast beaches", el: "3. Golden Beach (Χρυσή Ακτή): Η καλύτερη βάση για θαλάσσια σπορ" },
        content: {
          en: "Golden Beach — known in Greek as Chrissi Akti — sits on the east coast of Paros and is one of the finest windsurfing and kitesurfing destinations in the Mediterranean. Its long arc of golden sand faces the open Aegean and catches the reliable summer meltemi wind that makes it a pilgrimage site for board sport enthusiasts from across Europe. Several professional schools and rental centres operate directly on the beach throughout summer. The adjacent beach of Nea Chrissi Akti extends the sandy stretch further south, and the bay of Faragas nearby is calmer and better suited to swimming and snorkelling. Hotels and studios in this area are purpose-built for beach-focused stays — more functional than atmospheric, but very well-positioned for those who want to spend the majority of their time on the water. A car is essential from this base, as public transport connections to Parikia and Naoussa are infrequent. The drive to either town takes around twenty-five to thirty minutes.",
          el: "Η Golden Beach (Χρυσή Ακτή) βρίσκεται στην ανατολική ακτή της Πάρου και είναι ένας από τους καλύτερους προορισμούς για windsurfing και kitesurfing στη Μεσόγειο. Η μεγάλη χρυσή αμμουδιά πιάνει το μελτέμι, προσελκύοντας λάτρεις των σπορ από όλη την Ευρώπη. Δίπλα, η Νέα Χρυσή Ακτή και ο κόλπος Φάραγγας είναι πιο ήρεμοι. Τα ξενοδοχεία εδώ είναι λειτουργικά και προσανατολισμένα στην παραλία. Η μετακίνηση χωρίς αυτοκίνητο είναι δύσκολη.",
        }
      },
      {
        title: { en: "4. Lefkes: The most authentic village on the island", el: "4. Λευκές: Το πιο αυθεντικό χωριό του νησιού" },
        content: {
          en: "Lefkes sits in the hills at the geographical centre of Paros, and was the island's capital during the Byzantine and Ottoman periods — a position that sheltered it from piracy and preserved its character almost entirely. Its marble-paved lanes, Venetian-influenced architecture, amphitheatre hillside setting and sweeping views across the island to the sea on both sides make it the most genuinely beautiful inland village in the Cyclades. The Church of Agia Triada, built from pure white Parian marble, dominates the village square. A Byzantine path — part of the old donkey trail network — connects Lefkes to the coast at Prodromos and is one of the most rewarding short hikes on the island. Accommodation here is limited to small guesthouses and traditional rooms, which is exactly the point. Lefkes suits travelers who want a quiet, authentic and genuinely Cycladic base away from the beach crowds, and who are happy to drive to the coast for swimming. It is roughly equidistant from Parikia and the east coast beaches.",
          el: "Οι Λευκές βρίσκονται στους λόφους στο γεωγραφικό κέντρο της Πάρου και υπήρξαν πρωτεύουσα του νησιού κατά τη βυζαντινή και οθωμανική περίοδο. Τα μαρμαρόστρωτα σοκάκια, η βενετσιάνικη αρχιτεκτονική, η αμφιθεατρική θέα και στα δύο πελάγη την καθιστούν το ωραιότερο ορεινό χωριό των Κυκλάδων. Η εκκλησία της Αγίας Τριάδας είναι χτισμένη από λευκό παριανό μάρμαρο. Ένα βυζαντινό μονοπάτι συνδέει τις Λευκές με την ακτή στον Πρόδρομο. Ιδανικές για ήσυχη, αυθεντική διαμονή μακριά από τα πλήθη.",
        }
      },
      {
        title: { en: "5. Alyki and the South Coast: Calm, family-friendly and unhurried", el: "5. Αλύκη και Νότια Ακτή: Ήρεμα, οικογενειακά και χαλαρά" },
        content: {
          en: "The southern part of Paros — including the fishing villages of Alyki and Piso Livadi — offers the most relaxed and genuinely local version of the island. Alyki sits on a sheltered bay with calm, shallow water, a sandy beach and a small waterfront lined with tavernas serving freshly caught fish. It is just five kilometres from Paros Airport, making it an unusually convenient base for arrivals and early departures. Piso Livadi on the southeast coast is a small port village with a charming harbour, excellent seafood restaurants directly on the water, and easy boat connections to the Small Cyclades — Koufonisia, Donoussa and Iraklia — for day trips or overnight extensions. Both villages suit families with young children, couples who prefer a quieter rhythm and travelers on longer stays who want to experience Paros at a pace that the busier northern towns do not always allow. Pounda Beach on the west coast, best known as the departure point for the car ferry to Antiparos, is nearby and catches excellent west-facing sunsets.",
          el: "Το νότιο τμήμα της Πάρου — με τα ψαροχώρια της Αλύκης και του Πίσω Λιβαδιού — προσφέρει την πιο χαλαρή και αυθεντική εκδοχή του νησιού. Η Αλύκη βρίσκεται σε προστατευμένο κόλπο με ήρεμα, ρηχά νερά και ταβέρνες με φρέσκο ψάρι. Απέχει μόλις πέντε χιλιόμετρα από το αεροδρόμιο. Το Πίσω Λιβάδι είναι ένα γραφικό λιμάνι με εξαιρετικά εστιατόρια και συνδέσεις με τις Μικρές Κυκλάδες. Και τα δύο χωριά είναι ιδανικά για οικογένειες, ζευγάρια και μακρύτερες διαμονές.",
        }
      },
    ],
    faq: [
      {
        q: { en: "Naoussa or Parikia — which is the better base?", el: "Νάουσα ή Παροικιά — ποια είναι η καλύτερη βάση;" },
        a: { en: "For atmosphere, dining and the classic Cycladic experience, Naoussa is the stronger choice — most repeat visitors base themselves there. For convenience, transport connections, sunset views and a more relaxed daily pace, Parikia is the better option, particularly for first-time visitors and those without a rental car. The two towns are just fifteen minutes apart by bus or taxi, so neither choice significantly limits what you can do.", el: "Για ατμόσφαιρα, φαγητό και κλασική κυκλαδίτικη εμπειρία, η Νάουσα είναι η καλύτερη επιλογή. Για ευκολία, συγκοινωνίες, ηλιοβασίλεμα και πιο χαλαρό ρυθμό, η Παροικιά είναι προτιμότερη — ειδικά για πρώτη επίσκεψη. Απέχουν μόλις 15 λεπτά μεταξύ τους." }
      },
      {
        q: { en: "Do I need a car in Paros?", el: "Χρειάζομαι αυτοκίνητο στην Πάρο;" },
        a: { en: "Paros has one of the better bus networks in the Cyclades, with regular connections between Parikia, Naoussa and Golden Beach throughout summer. For a stay based in either of the two main towns, a car is optional. If you want to reach Lefkes, Alyki, Piso Livadi, or the quieter coves on the south and east coast at your own pace, a car or scooter is strongly recommended. Renting one for two or three days to do a full island loop is a popular and very rewarding approach.", el: "Η Πάρος έχει καλό δίκτυο λεωφορείων μεταξύ Παροικιάς, Νάουσας και Golden Beach. Για διαμονή στις δύο κύριες πόλεις, το αυτοκίνητο είναι προαιρετικό. Για Λευκές, Αλύκη, Πίσω Λιβάδι και τις ήσυχες παραλίες, συνιστάται αυτοκίνητο ή scooter." }
      },
      {
        q: { en: "When should I book hotels in Paros?", el: "Πότε να κλείσω ξενοδοχείο στην Πάρο;" },
        a: { en: "Paros is significantly less crowded than Mykonos or Santorini, but peak season — particularly the first three weeks of August — fills the island's best accommodation months in advance. Book four to six months ahead for July and August stays, especially in Naoussa. May, June and September are considerably easier and offer excellent weather with fewer crowds and lower prices.", el: "Η Πάρος είναι λιγότερο πολυσύχναστη από Μύκονο ή Σαντορίνη, αλλά η υψηλή περίοδος γεμίζει μήνες πριν. Κλείστε 4-6 μήνες νωρίτερα για Ιούλιο και Αύγουστο ειδικά στη Νάουσα. Μάιος, Ιούνιος και Σεπτέμβριος έχουν εξαιρετικό καιρό με λιγότερο κόσμο." }
      },
      {
        q: { en: "Is Paros good for families with children?", el: "Είναι η Πάρος καλή για οικογένειες;" },
        a: { en: "Yes, particularly Parikia and the south coast. Alyki's calm, shallow bay is ideal for young children, and Parikia has beaches, parks and practical amenities that suit family logistics. Golden Beach suits older children and teenagers who want watersports. Naoussa can work for families but is busier and more nightlife-oriented than the other areas.", el: "Ναι, ειδικά η Παροικιά και η νότια ακτή. Η Αλύκη έχει ήρεμα ρηχά νερά, και η Παροικιά διαθέτει παραλίες και πάρκα. Η Golden Beach είναι ιδανική για μεγαλύτερα παιδιά και θαλάσσια σπορ." }
      },
      {
        q: { en: "Can I do a day trip to Antiparos from Paros?", el: "Μπορώ να κάνω ημερήσια εκδρομή στην Αντίπαρο;" },
        a: { en: "Yes, and it is one of the best day trips in the Cyclades. A small passenger ferry runs from Parikia harbour to Antiparos town in around thirty minutes, and a car ferry from Pounta connects the two islands in just seven minutes. Antiparos is quieter, smaller and bohemian in character, with excellent beaches and the remarkable Cave of Antiparos, one of the most impressive stalactite caves in Greece.", el: "Ναι, και είναι από τις καλύτερες εκδρομές στις Κυκλάδες. Ένα μικρό πλοίο πηγαίνει από την Παροικιά στην Αντίπαρο σε 30 λεπτά. Η Αντίπαρος είναι ήσυχη και μποέμ, με εξαιρετικές παραλίες και το Σπήλαιο της Αντιπάρου." }
      },
      {
        q: { en: "How many days do I need in Paros?", el: "Πόσες μέρες χρειάζομαι στην Πάρο;" },
        a: { en: "Four to five days is the ideal minimum for experiencing the island properly — one day each for Naoussa and Parikia, a day for beaches and watersports, a day for Lefkes and the inland villages, and a day trip to Antiparos. Three days is possible but leaves most visitors planning a return. Paros consistently ranks as one of the Greek islands travelers most want to revisit.", el: "Τέσσερις με πέντε μέρες είναι το ιδανικό — μία μέρα για Νάουσα, μία για Παροικιά, μία για παραλίες, μία για Λευκές και μία εκδρομή στην Αντίπαρο. Τρεις μέρες είναι εφικτές αλλά λίγες. Η Πάρος είναι από τα νησιά που οι ταξιδιώτες θέλουν περισσότερο να ξαναεπισκεφτούν." }
      },
    ],
    seo: {
      title: {
        en: "Where to Stay in Paros | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στην Πάρο | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Paros — from the chic harbour of Naoussa and the convenient capital Parikia to the windsurfing sands of Golden Beach, the hilltop village of Lefkes and the quiet south coast. A complete guide to Paros hotels and areas.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στην Πάρο — από το κομψό λιμάνι της Νάουσας και την βολική πρωτεύουσα Παροικιά έως τις αμμουδιές της Golden Beach, το μεσαιωνικό χωριό των Λευκών και την ήσυχη νότια ακτή."
      }
    },
  },
  {
    slug: "milos",
    name: "Where to Stay in Milos",
    place: "Milos — Cyclades",
    info: {
      en: "Find the best places to stay in Milos — from the convenient port of Adamas and the chic village of Pollonia to the hilltop capital Plaka, the volcanic south coast and the unique boathouse villages of Klima and Mandrakia. A complete guide to Milos hotels and areas.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Μήλο — από το βολικό λιμάνι του Αδάμαντα και το κομψό χωριό της Πολλωνίας έως την πρωτεύουσα Πλάκα στην κορυφή του λόφου, την ηφαιστειακή νότια ακτή και τα μοναδικά σύρματα του Κλήματος και της Μανδράκιας.",
    },
    image: "/images/milos.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Milos shapes the entire experience — from the lively ferry port of Adamas and the relaxed beachfront village of Pollonia in the northeast to the whitewashed hilltop capital of Plaka, the volcanic south coast beaches and the extraordinary waterfront boathouse villages that make this island unlike anywhere else in Greece.",
      el: "Η επιλογή διαμονής στη Μήλο καθορίζει ολόκληρη την εμπειρία — από το ζωντανό λιμάνι του Αδάμαντα και το χαλαρό παραθαλάσσιο χωριό της Πολλωνίας στα βορειοανατολικά έως την ασπρόχρωμη πρωτεύουσα Πλάκα, τις ηφαιστειακές παραλίες της νότιας ακτής και τα μοναδικά σύρματα που κάνουν αυτό το νησί ανεπανάληπτο.",
    },
    description: {
      en: "Milos is the most geologically dramatic island in the Cyclades and one of the most visually extraordinary destinations in the entire Mediterranean. Its volcanic origins have produced a coastline of over seventy beaches — sculpted into white moonscapes, ochre-red cliffs, sea caves reachable only by boat and hidden coves with turquoise water that changes colour by the hour. The island is also where the Venus de Milo was discovered in 1820, and its history of ancient settlement, Venetian occupation and centuries of mining has left a remarkably layered cultural landscape. A car is essential for exploring the island properly — most of the best beaches are spread across a coastline that has no footpath — but choosing the right base first determines how much of Milos's extraordinary variety you actually experience.",
      el: "Η Μήλος είναι το πιο γεωλογικά δραματικό νησί των Κυκλάδων και ένας από τους πιο οπτικά εντυπωσιακούς προορισμούς στη Μεσόγειο. Οι ηφαιστειακές της ρίζες δημιούργησαν μια ακτογραμμή με πάνω από εβδομήντα παραλίες — λευκά σεληνιακά τοπία, κόκκινοι γκρεμοί, θαλάσσιες σπηλιές και κρυμμένοι όρμοι. Στο νησί ανακαλύφθηκε η Αφροδίτη της Μήλου το 1820. Απαραίτητο το αυτοκίνητο για εξερεύνηση.",
    },
    features: {
      en: ["Adamas (Hub & Convenient)", "Pollonia (Chic & Beachfront)", "Plaka (Views & Atmosphere)", "South Coast (Wild & Remote)", "Klima & Villages (Unique)", "Boat tours to Kleftiko caves", "Gateway to Kimolos by ferry", "Over 70 beaches to explore"],
      el: ["Αδάμαντας (Κόμβος & Βολικός)", "Πολλωνία (Κομψή & Παραλία)", "Πλάκα (Θέα & Ατμόσφαιρα)", "Νότια Ακτή (Άγρια & Απόμακρη)", "Κλήμα & Χωριά (Μοναδικά)", "Εκδρομές με σκάφος στο Κλέφτικο", "Πύλη για Κίμωλο με πλοίο", "Πάνω από 70 παραλίες"],
    },
    sections: [
      {
        title: { en: "1. Adamas: The most practical base and the gateway to everything", el: "1. Αδάμαντας: Η πιο πρακτική βάση και η πύλη προς τα πάντα" },
        content: {
          en: "Adamas — also written as Adamantas — is the main port and largest village on Milos, and the most convenient base for first-time visitors and anyone who wants to keep logistics simple. The ferry from Piraeus and the inter-island connections all arrive here, the bus network fans out from Adamas to every corner of the island, and the day boat tours to Kleftiko — the former pirate hideout of white sea caves and turquoise arches that is the single most celebrated attraction on Milos, accessible only by water — depart from the harbour every morning. The seafront is lined with restaurants, cafés and shops, and the Mining Museum just inland gives a surprisingly rich introduction to the island's long industrial past. Two sandy beaches — Lagada and Papakinou — sit within walking distance of the village. Hotels in Adamas range from comfortable mid-range rooms to well-appointed suites and apartments, with a wide enough selection to suit most budgets. It is the right base for travelers who want easy access to the whole island without committing to a more remote location, and the most practical choice for anyone staying without a rental car.",
          el: "Ο Αδάμαντας είναι το κύριο λιμάνι και το μεγαλύτερο χωριό της Μήλου, και η πιο βολική βάση για πρώτη επίσκεψη. Όλες οι ακτοπλοϊκές συνδέσεις φτάνουν εδώ, το δίκτυο λεωφορείων ξεκινά από τον Αδάμαντα προς κάθε γωνιά του νησιού, και οι ημερήσιες κρουαζιέρες στο Κλέφτικο αναχωρούν καθημερινά. Η παραλία έχει εστιατόρια, καφέ και μαγαζιά. Δύο αμμώδεις παραλίες — Λαγκάδα και Παπακίνου — είναι σε κοντινή απόσταση με τα πόδια. Ιδανική βάση για όσους θέλουν εύκολη πρόσβαση στο νησί χωρίς αυτοκίνητο.",
        }
      },
      {
        title: { en: "2. Pollonia: The most refined and family-friendly village on the island", el: "2. Πολλωνία: Το πιο κομψό και οικογενειακό χωριό του νησιού" },
        content: {
          en: "Pollonia sits on the northeastern tip of Milos and has a character entirely different from Adamas. It is a small, polished fishing village built around a long, sheltered sandy bay with calm, shallow water — the best swimming beach directly in front of accommodation anywhere on the island. The waterfront is lined with excellent seafood tavernas and a handful of cocktail bars that fill with a relaxed, cosmopolitan crowd through the summer evenings. Pollonia is also the departure point for the short ferry crossing to Kimolos, the quiet neighbouring island with pristine uncrowded beaches that makes for one of the most rewarding day trips in the western Cyclades. Hotels and boutique properties in Pollonia tend toward the upscale end — many with sea-view terraces, private pools and thoughtful design — and the village attracts couples and families who want a refined, unhurried base rather than a busy port town. The drive to Adamas takes around twenty minutes, and the ancient ruins of Phylakopi, the sea caves of Papafragas and the moonscape beach of Sarakiniko are all within easy reach to the west. Pollonia is the consistent recommendation for repeat visitors to Milos and the choice most travelers wish they had made on their first trip.",
          el: "Η Πολλωνία βρίσκεται στο βορειοανατολικό άκρο της Μήλου και έχει εντελώς διαφορετικό χαρακτήρα από τον Αδάμαντα. Είναι ένα μικρό, κομψό ψαροχώρι γύρω από έναν προστατευμένο κόλπο με ήρεμα νερά. Η παραλία έχει εξαιρετικές ψαροταβέρνες και cocktail bar. Είναι επίσης το σημείο αναχώρησης για την Κίμωλο. Τα ξενοδοχεία εδώ είναι υψηλών προδιαγραφών, προσελκύοντας ζευγάρια και οικογένειες. Η απόσταση από τον Αδάμαντα είναι 20 λεπτά. Η Πολλωνία είναι η σταθερή σύσταση για όσους ξαναέρχονται στη Μήλο.",
        }
      },
      {
        title: { en: "3. Plaka: The most atmospheric village and the best sunsets on the island", el: "3. Πλάκα: Το πιο ατμοσφαιρικό χωριό και τα καλύτερα ηλιοβασιλέματα" },
        content: {
          en: "Plaka is the official capital of Milos, perched high on a hill above the bay with views that extend across the entire Aegean on clear days. Its whitewashed Cycladic lanes, cascading bougainvillea, domed churches, boutique shops and intimate cocktail bars create the most traditionally beautiful village atmosphere on the island. The hilltop Castro — the ruined medieval fortification at the very top of Plaka — is the finest sunset-watching point on Milos, and on summer evenings the narrow paths leading up to it fill with visitors arriving an hour before dusk to secure their position. The adjacent village of Trypiti is equally beautiful and slightly less visited, and together the two hillside settlements form the most photogenic and memorable part of the island for evening exploration. The legendary Methismeni Politia restaurant in Trypiti — a terrace with panoramic views and reliably excellent food — is one of the best dining experiences in the Cyclades. Accommodation in Plaka is limited to smaller guesthouses, traditional studios and boutique rooms rather than large hotels, which suits the intimate character of the village entirely. The walk up through Plaka's lanes involves slopes and stairs, so it is less suited to travelers with significant mobility limitations. A car is strongly recommended as a base here, as the bus runs hourly but stops early in the evening.",
          el: "Η Πλάκα είναι η επίσημη πρωτεύουσα της Μήλου, χτισμένη σε έναν λόφο με θέα σε όλο το Αιγαίο. Τα ασπρισμένα κυκλαδίτικα σοκάκια, οι μπουκαμβίλιες και τα μικρά μαγαζιά δημιουργούν την πιο όμορφη παραδοσιακή ατμόσφαιρα. Το Κάστρο στην κορυφή προσφέρει το καλύτερο ηλιοβασίλεμα. Το γειτονικό χωριό Τρυπητή είναι εξίσου όμορφο. Το εστιατόριο Μεθυσμένη Πολιτεία είναι από τις καλύτερες γαστρονομικές εμπειρίες στις Κυκλάδες. Η Πλάκα έχει μικρούς ξενώνες και boutique δωμάτια.",
        }
      },
      {
        title: { en: "4. The South Coast: Volcanic beaches, dramatic colour and remote beauty", el: "4. Νότια Ακτή: Ηφαιστειακές παραλίες, δραματικό χρώμα και απόμακρη ομορφιά" },
        content: {
          en: "The south coast of Milos is the most geologically spectacular stretch of coastline on the island, and staying in this area — or using it for day trips from any base — is essential for understanding what makes Milos genuinely extraordinary. Paliochori Beach is a long bay of volcanic sand in multiple colours — black, red, ochre and white — with natural underwater hot springs warming the shallows in certain spots, a cluster of beach tavernas directly on the sand and a more organised atmosphere than most beaches on the island. Firiplaka nearby is one of the most visually dramatic beaches in the Cyclades, with deep red and white cliffs framing crystal-clear turquoise water and almost no development. Tsigrado, accessible only by descending a rope ladder through a narrow rock cleft, is the most adventurous beach on the island and rewards the effort with exceptional water clarity. Accommodation in the south coast area is limited but includes some of the most luxuriously positioned properties on the island — small boutique suites and resort-style rooms with direct beach access and views of the open sea. It suits travelers who want the beaches themselves as the primary experience, and who are happy to drive for everything else.",
          el: "Η νότια ακτή της Μήλου είναι το πιο γεωλογικά εντυπωσιακό τμήμα του νησιού. Η Παλιοχώρι είναι μια μεγάλη παραλία με ηφαιστειακή άμμο πολλών χρωμάτων και φυσικές θερμές πηγές. Η Φυριπλάκα έχει εντυπωσιακούς κόκκινους και λευκούς γκρεμούς. Το Τσιγκράδι είναι προσβάσιμο μόνο με σχοινί. Τα καταλύματα εδώ είναι περιορισμένα αλλά πολυτελή, ιδανικά για όσους θέλουν τις παραλίες ως κύρια εμπειρία.",
        }
      },
      {
        title: { en: "5. Klima, Mandrakia and the Fishing Villages: The most unique stays in Greece", el: "5. Κλήμα, Μανδράκια και τα ψαροχώρια: Οι πιο μοναδικές διαμονές στην Ελλάδα" },
        content: {
          en: "The small fishing villages scattered around the bay of Milos — Klima, Mandrakia, Firopotamos and Areti — offer something found almost nowhere else in Greece: the chance to sleep directly inside a syrmata, a traditional colourful boathouse built at the water's edge with a boat stored on the ground floor and a living space above. These structures, painted in vivid shades of blue, red and yellow and reflected in the calm water of the bay, are among the most photographed scenes in the Aegean, and several have been converted into holiday accommodation of genuine character and quality. Klima, just below Plaka, is the most accessible and most visited of these villages, and a handful of renovated syrmatat can be booked here for a truly one-of-a-kind experience. Mandrakia on the north coast is smaller and quieter, with the excellent Medusa restaurant serving some of the freshest seafood on the island directly above the water. Staying in one of these villages is not a practical choice — there are no shops, limited parking and no transport — but for the right traveler, a night or two in a waterfront boathouse with the Aegean lapping beneath the window is one of the most memorable experiences available anywhere in the Greek islands.",
          el: "Τα μικρά ψαροχώρια γύρω από τον κόλπο της Μήλου — Κλήμα, Μανδράκια, Φυροπόταμος and Αρέτη — προσφέρουν κάτι μοναδικό: τη διαμονή μέσα σε ένα παραδοσιακό σύρμα, το πολύχρωμο σπίτι-αποθήκη βάρκας στην άκρη του νερού. Το Κλήμα είναι το πιο γνωστό, ενώ η Μανδράκια είναι πιο ήσυχη. Μια ή δύο νύχτες σε ένα σύρμα είναι από τις πιο αξέχαστες εμπειρίες στις ελληνικές θάλασσες.",
        }
      },
    ],
    faq: [
      {
        q: { en: "Which area of Milos is best for a first visit?", el: "Ποια περιοχή της Μήλου είναι καλύτερη για πρώτη επίσκεψη;" },
        a: { en: "Adamas is the most practical first base — it gives you the easiest logistics, the best transport connections and immediate access to the island's boat tours. If atmosphere and beauty matter more than convenience, Pollonia is the most consistently praised base by experienced visitors to Milos, and Plaka is the most atmospheric for evenings. All three are viable for a first trip; the choice depends on what kind of daily experience you want to wake up to.", el: "Ο Αδάμαντας είναι η πιο πρακτική πρώτη βάση. Για ατμόσφαιρα και ομορφιά, η Πολλωνία είναι η πιο δημοφιλής επιλογή. Η Πλάκα είναι η πιο ατμοσφαιρική για βραδινές εξόδους. Και οι τρεις είναι κατάλληλες για πρώτη επίσκεψη." }
      },
      {
        q: { en: "Do I need a car in Milos?", el: "Χρειάζομαι αυτοκίνητο στη Μήλο;" },
        a: { en: "Yes, for almost any meaningful exploration of the island. The bus network connects Adamas to Plaka, Pollonia and a handful of beaches, but most of Milos's finest beaches — Sarakiniko, Firiplaka, Tsigrado, the south coast — are unreachable without your own transport. The western half of the island requires a 4WD. Arranging a rental car from arrival is strongly recommended for any stay longer than two nights.", el: "Ναι, για ουσιαστική εξερεύνηση. Το λεωφορείο συνδέει Αδάμαντα, Πλάκα, Πολλωνία και κάποιες παραλίες, αλλά οι καλύτερες παραλίες είναι απρόσιτες χωρίς αυτοκίνητο. Το δυτικό μισό του νησιού απαιτεί 4Χ4." }
      },
      {
        q: { en: "What is the Kleftiko boat tour and is it worth it?", el: "Τι είναι η κρουαζιέρα στο Κλέφτικο και αξίζει;" },
        a: { en: "The Kleftiko boat tour is the single most praised experience on Milos and widely considered one of the best day excursions in the entire Aegean. Kleftiko is a series of extraordinary white sea caves, rock arches and turquoise lagoons on the southwest coast of the island that are accessible only by boat. Tours depart from Adamas harbour in the morning and typically include swimming stops, snorkelling in the caves and lunch on board. It is worth doing regardless of which part of the island you are staying in.", el: "Η κρουαζιέρα στο Κλέφτικο είναι η καλύτερη εμπειρία στη Μήλο. Πρόκειται για λευκές θαλάσσιες σπηλιές και τιρκουάζ λιμνοθάλασσες προσβάσιμες μόνο με σκάφος. Αναχωρεί από τον Αδάμαντα και περιλαμβάνει κολύμπι και φαγητό." }
      },
      {
        q: { en: "How many days do I need in Milos?", el: "Πόσες μέρες χρειάζομαι στη Μήλο;" },
        a: { en: "Four to five days is the recommended minimum. Day one for settling in and a first beach; day two for the Kleftiko boat tour; day three for a self-drive loop of Sarakiniko, Papafragas and the north coast; day four for the south coast beaches and Plaka at sunset. A fifth day allows for the crossing to Kimolos or a slower revisit of favourite beaches. Most visitors leave wishing they had stayed longer.", el: "Τέσσερις με πέντε μέρες είναι το ελάχιστο. Μία για άφιξη, μία για Κλέφτικο, μία για βόρεια ακτή, μία για νότια ακτή και Πλάκα. Η πέμπτη μέρα για Κίμωλο. Οι περισσότεροι φεύγουν θέλοντας να μείνουν περισσότερο." }
      },
      {
        q: { en: "Can I visit Kimolos as a day trip from Milos?", el: "Μπορώ να επισκεφτώ την Κίμωλο ως ημερήσια εκδρομή;" },
        a: { en: "Yes, and it is one of the best day trips in the Cyclades. A small ferry runs from Pollonia to the port of Psathi on Kimolos in around fifteen minutes throughout the day in summer. Kimolos is smaller, quieter and almost entirely undeveloped — its main village of Chorio is a remarkably well-preserved Cycladic settlement, and beaches like Prassa and Bonatsa offer white sand and turquoise water with virtually no other visitors. It is a strong contrast to the increasing popularity of Milos itself.", el: "Ναι, ένα από τα καλύτερα day trips. Το πλοίο από Πολλωνία προς Κίμωλο διαρκεί 15 λεπτά. Η Κίμωλος είναι ήσυχη και ανέγγιχτη, με όμορφο χωριό και παραλίες χωρίς πολύ κόσμο." }
      },
      {
        q: { en: "When is the best time to visit Milos?", el: "Πότε είναι η καλύτερη εποχή για τη Μήλο;" },
        a: { en: "Late May through June and September are the ideal months. The sea is warm enough for comfortable swimming from early June, the island is active but not overwhelmed, and accommodation is significantly more available and affordable than in July and August. Milos has grown rapidly in popularity over the past decade and peak season — particularly the first three weeks of August — now requires booking five to six months in advance for the best accommodation in all three main areas.", el: "Τέλη Μαΐου έως Ιούνιο και Σεπτέμβριος είναι οι ιδανικοί μήνες. Η θάλασσα είναι ζεστή, το νησί ζωντανό αλλά όχι γεμάτο. Η Μήλος έχει γίνει πολύ δημοφιλής και για Αύγουστο χρειάζεται κράτηση 5-6 μήνες νωρίτερα." }
      },
    ],
    seo: {
      title: {
        en: "Where to Stay in Milos | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στη Μήλο | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Milos — from the convenient port of Adamas and the chic village of Pollonia to the hilltop capital Plaka, the volcanic south coast and the unique boathouse villages of Klima and Mandrakia. A complete guide to Milos hotels and areas.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Μήλο — από το βολικό λιμάνι του Αδάμαντα και το κομψό χωριό της Πολλωνίας έως την πρωτεύουσα Πλάκα, την ηφαιστειακή νότια ακτή και τα μοναδικά σύρματα του Κλήματος και της Μανδράκιας."
      }
    },
  },
  {
    slug: "zakynthos",
    name: "Where to Stay in Zakynthos",
    place: "Zakynthos — Ionian Islands",
    info: {
      en: "Find the best places to stay in Zakynthos — from the authentic capital Zante Town and the family-friendly sands of Tsilivi to the famous nightlife of Laganas, the wild Vasilikos Peninsula and the quiet north coast of Alykes. A complete guide to Zakynthos hotels and areas.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Ζάκυνθο — από την αυθεντική πρωτεύουσα Ζάκυνθο Πόλη και τις οικογενειακές αμμουδιές του Τσιλιβί έως τη διάσημη νυχτερινή ζωή του Λαγανά, την άγρια χερσόνησο του Βασιλικού και την ήσυχη βόρεια ακτή των Αλυκών.",
    },
    image: "/images/zakynthos.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Zakynthos shapes the entire experience — from the Venetian-influenced capital of Zante Town and the organised family sands of Tsilivi to the famous nightlife strip of Laganas, the unspoiled olive-grove peninsula of Vasilikos and the calm, shallow beaches of the north coast around Alykes.",
      el: "Η επιλογή διαμονής στη Ζάκυνθο καθορίζει ολόκληρη την εμπειρία — από την ενετική πρωτεύουσα και τις οργανωμένες οικογενειακές αμμουδιές του Τσιλιβί έως τη διάσημη νυχτερινή ζωή του Λαγανά, την ανέγγιχτη χερσόνησο του Βασιλικού με τους ελαιώνες και τις ήρεμες ρηχές παραλίες της βόρειας ακτής γύρω από τις Αλυκές.",
    },
    description: {
      en: "Zakynthos — known internationally as Zante — is one of the most varied islands in the Ionian Sea, and the choice of where to stay determines almost everything about the kind of holiday you have. The island ranges from a lively, genuinely Greek capital with Venetian architecture and an active harbor, to organised family resorts on long sandy beaches, one of the most energetic nightlife destinations in Europe, and a protected southern peninsula of olive groves, loggerhead turtle nesting grounds and some of the most spectacular scenery in Greece. It also happens to be the island closest to Shipwreck Beach — Navagio — one of the most photographed places on earth, accessible by boat from the northwest coast. The right base makes all of this accessible; the wrong one can leave you feeling stranded or overwhelmed.",
      el: "Η Ζάκυνθος είναι ένα από τα πιο ποικιλόμορφα νησιά του Ιονίου και η επιλογή διαμονής καθορίζει σχεδόν τα πάντα. Από μια ζωντανή, αυθεντικά ελληνική πρωτεύουσα με ενετική αρχιτεκτονική και οργανωμένα οικογενειακά θέρετρα έως έναν από τους πιο ενεργητικούς προορισμούς νυχτερινής ζωής στην Ευρώπη και μια προστατευμένη χερσόνησο με ελαιώνες και παραλίες ωοτοκίας της θαλάσσιας χελώνας caretta-caretta. Εδώ βρίσκεται και το Ναυάγιο — ένα από τα πιο φωτογραφημένα μέρη στη γη.",
    },
    features: {
      en: ["Zante Town (Authentic & Central)", "Tsilivi (Families)", "Laganas (Nightlife)", "Vasilikos (Nature & Peace)", "Alykes & North (Relaxed)", "Loggerhead turtle nesting beaches", "Boat trips to Shipwreck Beach (Navagio)", "Zakynthos National Marine Park"],
      el: ["Ζάκυνθος Πόλη (Αυθεντική & Κεντρική)", "Τσιλιβί (Οικογένειες)", "Λαγανάς (Νυχτερινή ζωή)", "Βασιλικός (Φύση & Ηρεμία)", "Αλυκές & Βορράς (Χαλαρά)", "Παραλίες ωοτοκίας caretta-caretta", "Εκδρομές στο Ναυάγιο", "Εθνικό Θαλάσσιο Πάρκο Ζακύνθου"],
    },
    sections: [
      {
        title: { en: "1. Zakynthos Town (Zante Town): The most authentic and well-connected base", el: "1. Ζάκυνθος Πόλη: Η πιο αυθεντική και καλά συνδεδεμένη βάση" },
        content: {
          en: "Zakynthos Town — universally known as Zante Town — is the capital and main port of the island, and consistently the most underrated base for independent travelers. The town was almost entirely destroyed by the devastating 1953 earthquake but was rebuilt in Venetian style, and its waterfront, pedestrian lanes, neoclassical churches and broad Solomos Square — named after Dionysios Solomos, who wrote the Greek national anthem — retain genuine character and urban energy. The promenade between Solomos Square and the Church of Agios Dionysios is one of the most pleasant evening walks on the island. The Byzantine Museum here houses a remarkable collection of post-Byzantine icons rescued from churches destroyed in the earthquake. As the hub of the island's bus network and the departure point for the ferry to the Peloponnese, Zakynthos Town gives you more flexibility than any other base without a car. The beaches immediately around town are modest, but Tsilivi is just fifteen minutes north and the Vasilikos peninsula twenty minutes south. Hotels range from well-positioned harbor-front addresses to boutique rooms on the quieter inland streets, and prices are noticeably more reasonable than the resort areas.",
          el: "Η Ζάκυνθος Πόλη είναι η πρωτεύουσα και το κύριο λιμάνι του νησιού, και η πιο υποτιμημένη βάση για ανεξάρτητους ταξιδιώτες. Η πόλη καταστράφηκε σχεδόν ολοκληρωτικά από τον σεισμό του 1953 αλλά ξαναχτίστηκε σε ενετικό ρυθμό. Η πλατεία Σολωμού και η εκκλησία του Αγίου Διονυσίου είναι από τα ωραιότερα σημεία. Ως κόμβος λεωφορείων και λιμάνι, η πόλη προσφέρει μεγαλύτερη ευελιξία από οποιαδήποτε άλλη βάση. Τα ξενοδοχεία έχουν καλύτερες τιμές από τα θέρετρα.",
        }
      },
      {
        title: { en: "2. Tsilivi: The best all-round base for families", el: "2. Τσιλιβί: Η καλύτερη all-round βάση για οικογένειες" },
        content: {
          en: "Tsilivi sits on the east coast of Zakynthos, five kilometres north of the capital, and is the island's most consistently recommended base for families. Its sandy beach stretches for over two kilometres with calm, clear water and a well-organised promenade of tavernas, beach bars and water sports operators directly behind the shoreline. The atmosphere here is lively but measured — active enough to feel like a proper resort, calm enough that it never tips into the intensity of Laganas. The village centre has a good mix of restaurants serving both Greek and international food, and the bus to Zakynthos Town runs regularly throughout the day. The nearby beaches of Bouka and Gaidaros provide quieter swimming alternatives for families who want to escape the main beach crowd. Hotels in Tsilivi cover the full range from family-friendly studios and apartments to mid-range resorts and some of the island's most complete four-star properties with pools, spas and children's facilities. It is the first recommendation for any family visiting Zakynthos for the first time.",
          el: "Το Τσιλιβί βρίσκεται στην ανατολική ακτή, πέντε χιλιόμετρα βόρεια της πρωτεύουσας, και είναι η πιο σταθερή σύσταση για οικογένειες. Η αμμώδης παραλία εκτείνεται για πάνω από δύο χιλιόμετρα. Η ατμόσφαιρα είναι ζωντανή αλλά ήρεμη. Τα ξενοδοχεία καλύπτουν όλες τις κατηγορίες. Είναι η πρώτη σύσταση για κάθε οικογένεια.",
        }
      },
      {
        title: { en: "3. Laganas: Europe's most famous party resort — and more", el: "3. Λαγανάς: Το πιο διάσημο party resort της Ευρώπης" },
        content: {
          en: "Laganas sits on the southern coast of Zakynthos and has been one of Europe's most celebrated summer nightlife destinations for decades. Its main strip — a continuous stretch of over a hundred bars, clubs and beach venues — draws tens of thousands of young visitors every summer, and the energy from early evening until dawn is unlike almost anywhere else in Greece. Superclubs like Rescue and CherryBay, foam parties, beach events and the concentrated density of the nightlife strip give Laganas a character entirely its own. The beach itself is long and sandy, and the daytime atmosphere is more relaxed than the nighttime reputation suggests. It is worth being direct about who Laganas suits and who it does not: if you are traveling in your twenties and want a high-energy, social, sun-and-nightlife holiday at affordable prices, Laganas is excellent value and enormous fun. If you are traveling as a couple seeking quiet, as a family, or as anyone who needs to sleep before 3am, it is genuinely not the right choice. Rooms in central Laganas are frequently disturbed by noise well into the early hours throughout the peak season. Booking accommodation a short distance from the main strip significantly improves the experience for visitors who want the beach without the full nightlife intensity.",
          el: "Ο Λαγανάς είναι εδώ και δεκαετίες ένας από τους πιο διάσημους προορισμούς νυχτερινής ζωής στην Ευρώπη. Η παραλία είναι μεγάλη και αμμώδης. Αν είστε στα 20s σας και θέλετε διακοπές ήλιου και διασκέδασης, ο Λαγανάς είναι εξαιρετική επιλογή. Αν ταξιδεύετε ως ζευγάρι ή οικογένεια, δεν είναι η κατάλληλη επιλογή.",
        }
      },
      {
        title: { en: "4. Vasilikos Peninsula: The most beautiful and peaceful corner of the island", el: "4. Χερσόνησος Βασιλικού: Η πιο όμορφη και ήσυχη γωνιά του νησιού" },
        content: {
          en: "The Vasilikos Peninsula extends southward from Zakynthos Town into the Zakynthos National Marine Park and is the most naturally extraordinary part of the island. Its landscape of endless olive groves, undeveloped coastline and crystal-clear water is completely distinct from the resort areas to the north, and the combination of spectacular beaches — Gerakas, Porto Roma, Banana Beach, Dafni and the hidden coves of the peninsula's eastern shore — makes it the strongest base for travelers who want nature, beauty and peace as their primary experience. Gerakas Beach in particular is one of the finest in the Ionian Islands: a long arc of pale sand backed by low cliffs, with exceptionally clear water and an important loggerhead turtle nesting area that restricts access from dusk to dawn and bans watersports entirely to protect the eggs. Banana Beach, by contrast, is well-organised for watersports and attracts a more active crowd. Accommodation across the peninsula ranges from simple studios among the olive trees to boutique villas and design-forward resort properties with infinity pools. A car is essential here — distances between beaches and services are too large for walking — but for travelers with their own transport, Vasilikos consistently receives the strongest reviews of any area on the island from visitors who return year after year.",
          el: "Η χερσόνησος του Βασιλικού εκτείνεται νότια προς το Εθνικό Θαλάσσιο Πάρκο. Οι ατελείωτοι ελαιώνες και οι ανέγγιχτες ακτές δημιουργούν το πιο όμορφο φυσικό τοπίο του νησιού. Το Γέρακας είναι μια από τις ωραιότερες παραλίες του Ιονίου. Απαραίτητο το αυτοκίνητο. Ο Βασιλικός έχει τις καλύτερες κριτικές από επισκέπτες που επιστρέφουν χρόνο με τον χρόνο.",
        }
      },
      {
        title: { en: "5. Alykes and the North Coast: Calm beaches, shallow water and a relaxed pace", el: "5. Αλυκές και Βόρεια Ακτή: Ήρεμες παραλίες, ρηχά νερά και χαλαρός ρυθμός" },
        content: {
          en: "The northern stretch of Zakynthos's east coast — encompassing Alykes, Alykanas and the quieter villages beyond — is the most genuinely relaxed part of the island, and one of the most overlooked by first-time visitors. Alykes has the longest sandy beach on the eastern coast, with calm, shallow water ideal for families with young children, and a distinctive salt lake behind the beach that attracts flamingos in spring. The village has a full range of tavernas, bars and accommodation without the intensity of Tsilivi or the noise of Laganas. A car makes the north coast significantly more enjoyable, opening up the mountain villages of the interior, the Byzantine monastery of Agios Georgios at Kryonerida and the rugged western cliffs. For couples and families who want a straightforward, honest beach holiday without the pressures of the main resort zones, Alykes and the north coast offer the best balance of amenities and relaxation on the island.",
          el: "Ο βόρειος τμήμα της ανατολικής ακτής — Αλυκές, Αλυκανάς και τα πιο ήσυχα χωριά — είναι το πιο χαλαρό μέρος του νησιού. Οι Αλυκές έχουν τη μεγαλύτερη αμμώδη παραλία στην ανατολική ακτή. Το αυτοκίνητο κάνει τη βόρεια ακτή πιο απολαυστική. Για ήσυχες οικογενειακές διακοπές, οι Αλυκές προσφέρουν την καλύτερη ισορροπία.",
        }
      },
    ],
    faq: [
      {
        q: { en: "Which area of Zakynthos is best for a first visit?", el: "Ποια περιοχή της Ζακύνθου είναι καλύτερη για πρώτη επίσκεψη;" },
        a: { en: "Zakynthos Town is the most versatile first base — it gives you authentic Greek urban life, good transport connections, and easy reach of every part of the island within twenty to thirty minutes by car. For families who want to be directly on the beach from day one, Tsilivi is the stronger practical choice. Avoid Laganas as a first base unless the nightlife specifically is the main purpose of the trip.", el: "Η Ζάκυνθος Πόλη είναι η πιο ευέλικτη βάση. Για οικογένειες, το Τσιλιβί είναι καλύτερη επιλογή. Αποφύγετε τον Λαγανά εκτός αν η νυχτερινή ζωή είναι ο κύριος σκοπός." }
      },
      {
        q: { en: "Can I visit Shipwreck Beach (Navagio) from any base on the island?", el: "Μπορώ να επισκεφτώ το Ναυάγιο από οποιαδήποτε βάση;" },
        a: { en: "Yes, but the journey time varies significantly. From Zakynthos Town the drive to the northwest coast takes around 50 minutes. All boat tours to Navagio depart from the port at Agios Nikolaos on the northeast tip of the island, regardless of where you are staying. The tours typically last around two to three hours, include the Blue Caves, and run daily throughout the summer.", el: "Ναι, αλλά η διαδρομή ποικίλλει. Όλες οι εκδρομές αναχωρούν από τον Άγιο Νικόλαο. Διαρκούν 2-3 ώρες και περιλαμβάνουν και τις Γαλάζιες Σπηλιές." }
      },
      {
        q: { en: "Do I need a car in Zakynthos?", el: "Χρειάζομαι αυτοκίνητο στη Ζάκυνθο;" },
        a: { en: "For Zakynthos Town and Tsilivi, a car is optional. For the Vasilikos Peninsula, Alykes and any exploration of the island's interior, western coast or less-visited beaches, a car is essential. Arranging a rental for at least part of your stay is strongly recommended.", el: "Για την πόλη και το Τσιλιβί είναι προαιρετικό. Για τον Βασιλικό, τις Αλυκές και την εξερεύνηση του νησιού, το αυτοκίνητο είναι απαραίτητο." }
      },
      {
        q: { en: "Is Zakynthos good for families with young children?", el: "Είναι η Ζάκυνθος καλή για οικογένειες;" },
        a: { en: "Yes, particularly Tsilivi and Alykes, both of which offer long, sandy, shallow beaches with calm water and family-friendly accommodation. The Vasilikos peninsula is also excellent for families who want more space and nature. Laganas is not recommended for families.", el: "Ναι, ειδικά το Τσιλιβί και οι Αλυκές. Ο Βασιλικός είναι επίσης εξαιρετικός. Ο Λαγανάς δεν συνιστάται για οικογένειες." }
      },
      {
        q: { en: "What is the best time to visit Zakynthos?", el: "Ποια είναι η καλύτερη εποχή για τη Ζάκυνθο;" },
        a: { en: "Late May through June and September to early October are the ideal periods. The sea is warm, the island is lively without being overwhelmed, and prices are significantly lower. Peak season — particularly August — is extremely busy. The turtle nesting season runs from June to August.", el: "Τέλη Μαΐου έως Ιούνιο και Σεπτέμβριος έως αρχές Οκτωβρίου. Η περίοδος ωοτοκίας των χελωνών διαρκεί από Ιούνιο έως Αύγουστο." }
      },
      {
        q: { en: "Are the loggerhead turtles (Caretta caretta) really visible in Zakynthos?", el: "Φαίνονται πραγματικά οι χελώνες caretta-caretta στη Ζάκυνθο;" },
        a: { en: "Yes, and Zakynthos has one of the most important loggerhead turtle nesting populations in the Mediterranean. The best chances of spotting turtles in the water are on the beaches of the Vasilikos Peninsula — particularly Gerakas and Dafni — and in Laganas Bay. Hatchlings emerge between August and October. The WWF Zakynthos information centre at Gerakas Beach provides excellent guidance on how to observe the turtles without disturbing them.", el: "Ναι, η Ζάκυνθος έχει έναν από τους σημαντικότερους πληθυσμούς ωοτοκίας. Οι καλύτερες πιθανότητες είναι στον Βασιλικό και στον κόλπο του Λαγανά. Το κέντρο ενημέρωσης WWF στο Γέρακα προσφέρει χρήσιμες οδηγίες." }
      },
    ],
    seo: {
      title: {
        en: "Where to Stay in Zakynthos | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στη Ζάκυνθο | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Zakynthos — from the authentic capital Zante Town and the family-friendly sands of Tsilivi to the famous nightlife of Laganas, the wild Vasilikos Peninsula and the quiet north coast of Alykes. A complete guide to Zakynthos hotels and areas.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Ζάκυνθο — από την αυθεντική πρωτεύουσα Ζάκυνθο Πόλη και τις οικογενειακές αμμουδιές του Τσιλιβί έως τη διάσημη νυχτερινή ζωή του Λαγανά, την άγρια χερσόνησο του Βασιλικού και την ήσυχη βόρεια ακτή των Αλυκών."
      }
    },
  },
  {
    slug: "rhodes",
    name: "Where to Stay in Rhodes",
    place: "Rhodes — Dodecanese",
    info: {
      en: "Find the best places to stay in Rhodes — from the UNESCO medieval Old Town and the romantic village of Lindos to the family beaches of Faliraki, the windsurfing coast of Ixia and the quiet east coast villages of Kolymbia and Pefkos. A complete guide to Rhodes hotels and areas.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Ρόδο — από τη μεσαιωνική Παλιά Πόλη (μνημείο UNESCO) και το ρομαντικό χωριό της Λίνδου έως τις οικογενειακές παραλίες στο Φαληράκι, την ακτή windsurfing της Ιξιάς και τα ήσυχα ανατολικά παράλια χωριά Κολύμπια και Πεύκοι. Ένας πλήρης οδηγός για ξενοδοχεία και περιοχές στη Ρόδο.",
    },
    image: "/images/rhodes.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Rhodes shapes the entire experience — from the UNESCO-listed medieval Old Town and the adjacent New Town at the island's northern tip to the romantic whitewashed village of Lindos halfway down the east coast, the lively beach resort of Faliraki, the windsurfing coast of Ixia and the quieter villages of Kolymbia and Pefkos that sit between them all.",
      el: "Η επιλογή διαμονής στη Ρόδο καθορίζει ολόκληρη την εμπειρία — από τη μεσαιωνική Παλιά Πόλη (μνημείο UNESCO) και τη Νέα Πόλη στο βόρειο άκρο του νησιού έως το ρομαντικό ασπρισμένο χωριό της Λίνδου στα μισά της ανατολικής ακτής, το ζωντανό παραθαλάσσιο θέρετρο στο Φαληράκι, την ακτή windsurfing της Ιξιάς και τα ήσυχα χωριά Κολύμπια και Πεύκοι που βρίσκονται ανάμεσά τους.",
    },
    description: {
      en: "Relaxing stays, beautiful views and authentic hospitality — organized in a clear and practical way.",
      el: "Χαλαρωτικές διαμονές, όμορφη θέα και αυθεντική φιλοξενία — οργανωμένα με σαφή και πρακτικό τρόπο.",
    },
    features: {
      en: ["Rhodes Old Town (UNESCO Medieval City)", "Rhodes New Town (Convenient & Connected)", "Lindos (Romantic & Historic)", "Faliraki (Beach & Families)", "Ixia & Ialyssos (Sunsets & Windsurfing)", "Kolymbia & Pefkos (Relaxed East Coast)", "Ancient Acropolis of Lindos", "Anthony Quinn Bay & Tsambika Beach"],
      el: ["Παλιά Πόλη Ρόδου (Μνημείο UNESCO)", "Νέα Πόλη Ρόδου (Βολική & Συνδεδεμένη)", "Λίνδος (Ρομαντική & Ιστορική)", "Φαληράκι (Παραλία & Οικογένειες)", "Ιξιά & Ιαλυσός (Ηλιοβασιλέματα & Windsurfing)", "Κολύμπια & Πεύκοι (Χαλαρή Ανατολική Ακτή)", "Αρχαία Ακρόπολη Λίνδου", "Όρμος Άντονι Κουίν & Παραλία Τσαμπίκα"],
    },
    sections: [
      {
        title: { en: "1. Rhodes Old Town: The most extraordinary base in the Dodecanese", el: "1. Παλιά Πόλη Ρόδου: Η πιο εντυπωσιακή βάση στα Δωδεκάνησα" },
        content: {
          en: "The Old Town of Rhodes is one of the most remarkable places to stay in Greece — a fully intact medieval city enclosed by 4-kilometre walls built by the Knights of St John in the 14th century, where Byzantine churches, Ottoman mosques, Gothic palaces and Venetian fountains occupy the same cobblestone lanes. The Palace of the Grand Master of the Knights of Rhodes, the Street of the Knights — the best-preserved medieval street in Europe — and the Archaeological Museum are all within the walls and within easy walking distance of each other. Staying inside the Old Town puts you inside this living monument rather than visiting it as a day tripper. Hotels here range from simple guesthouses and boutique rooms to extraordinary luxury conversions inside genuine medieval buildings — restored knights' mansions with stone vaulted ceilings, private courtyards and exceptional character. The Old Town has no beach of its own, but Elli Beach in the New Town is a short walk through the walls. The atmosphere changes dramatically between day and afternoon: the Old Town fills with visitors during daylight hours, then empties in the evening when it becomes a more intimate, candlelit version of itself with excellent restaurants and a genuine sense of occasion. It is the right choice for history lovers, couples seeking character and anyone who wants to experience Rhodes at its most extraordinary.",
          el: "Η Παλιά Πόλη της Ρόδου είναι ένα από τα πιο εντυπωσιακά μέρη για διαμονή σε ολόκληρη την Ελλάδα — μια πλήρως διατηρημένη μεσαιωνική πόλη που περικλείεται από τείχη μήκους 4 χιλιομέτρων, χτισμένα από τους Ιππότες του Αγίου Ιωάννη τον 14ο αιώνα. Βυζαντινές εκκλησίες, οθωμανικά τζαμιά, γοτθικά παλάτια και βενετσιάνικα συντριβάνια συνυπάρχουν στα ίδια λιθόστρωτα σοκάκια. Το Παλάτι του Μεγάλου Μαγίστρου, η οδός Ιπποτών — ο καλύτερα διατηρημένος μεσαιωνικός δρόμος στην Ευρώπη — και το Αρχαιολογικό Μουσείο βρίσκονται όλα εντός των τειχών. Η διαμονή εδώ σάς τοποθετεί μέσα σε αυτό το ζωντανό μνημείο. Τα ξενοδοχεία κυμαίνονται από απλούς ξενώνες και μπουτίκ δωμάτια έως πολυτελείς μετατροπές σε αυθεντικά μεσαιωνικά κτίρια. Η Παλιά Πόλη δεν έχει δική της παραλία, αλλά η παραλία Έλλη στη Νέα Πόλη είναι σε μικρή απόσταση με τα πόδια. Είναι η κατάλληλη επιλογή για λάτρεις της ιστορίας, ζευγάρια που αναζητούν χαρακτήρα και οποιονδήποτε θέλει να ζήσει τη Ρόδο στο πιο εντυπωσιακό της.",
        }
      },
      {
        title: { en: "2. Rhodes New Town and Mandraki: The most practical and well-connected base", el: "2. Νέα Πόλη Ρόδου και Μανδράκι: Η πιο πρακτική βάση" },
        content: {
          en: "The New Town of Rhodes surrounds the medieval walls on three sides and is the island's main hub for transport, services and day-to-day life. The Mandraki harbour — flanked by the windmills and the bronze deer statues that mark where the Colossus of Rhodes is said to have once stood — is one of the most recognizable waterfronts in the Aegean, and the pedestrian promenade behind it leads to Elli Beach, a long sandy stretch directly in front of the town with organised facilities and clear water. Staying in the New Town gives you the closest access to the Old Town — most hotels are within a five to fifteen-minute walk of the main gates — alongside the full range of restaurants, bars, shops and ferry connections that the capital provides. It suits first-time visitors who want both history and beach without having to choose between them, independent travelers who value transport connections, and anyone arriving without a car who wants to explore the island using the bus network that radiates from Rhodes Town. Hotels cover every price range, from hostels and budget rooms to well-positioned four-star addresses with rooftop pools and harbour views.",
          el: "Η Νέα Πόλη περιβάλλει τα μεσαιωνικά τείχη από τρεις πλευρές και αποτελεί το κύριο κέντρο μεταφορών, υπηρεσιών και καθημερινής ζωής του νησιού. Το λιμάνι του Μανδρακίου — με τους ανεμόμυλους και τα χάλκινα ελάφια που σηματοδοτούν το σημείο όπου λέγεται ότι βρισκόταν ο Κολοσσός της Ρόδου — είναι ένα από τα πιο αναγνωρίσιμα παραλιακά μέτωπα στο Αιγαίο. Η διαμονή στη Νέα Πόλη σάς δίνει την κοντινότερη πρόσβαση στην Παλιά Πόλη, ενώ παράλληλα έχετε πρόσβαση σε εστιατόρια, μπαρ, καταστήματα και ακτοπλοϊκές συνδέσεις. Είναι κατάλληλη για επισκέπτες πρώτης φοράς που θέλουν και ιστορία και παραλία, ανεξάρτητους ταξιδιώτες που εκτιμούν τις συγκοινωνιακές συνδέσεις, και όσους φτάνουν χωρίς αυτοκίνητο. Τα ξενοδοχεία καλύπτουν κάθε κατηγορία τιμής.",
        }
      },
      {
        title: { en: "3. Lindos: The most romantic and photogenic village on the island", el: "3. Λίνδος: Το πιο ρομαντικό χωριό του νησιού" },
        content: {
          en: "Lindos sits on the east coast of Rhodes, 50 kilometres south of the capital, and is widely considered the most beautiful village on the island. Its whitewashed cubic houses climb steeply up a rocky promontory to the ancient Acropolis of Lindos — a Doric temple and fortification complex perched high above two stunning bays — while the village itself is a completely car-free maze of cobblestone lanes, captain's houses with pebble-mosaic courtyards, rooftop restaurants with panoramic views and boutique shops selling ceramics and linen. The beaches of Lindos and Pallas sit directly below the village on either side of the headland, and the small, perfectly sheltered bay of St Paul's — where the apostle is said to have landed in 43 AD — is one of the most beautiful swimming spots on the island. Lindos suits couples above all other traveler types: the combination of extraordinary architecture, elevated dining with sea views and intimate scale makes it the most consistently romantic base on Rhodes. Hotels here are predominantly small boutique properties and traditional captain's houses converted into guest accommodation — there are no large resorts within the village. The price level is higher than most of the island, and peak season crowds on the Acropolis path and main village lane can be significant from mid-morning until mid-afternoon. Arriving early and staying overnight — when the day-trippers have gone — is the best way to experience Lindos at its finest.",
          el: "Η Λίνδος βρίσκεται στην ανατολική ακτή της Ρόδου, 50 χιλιόμετρα νότια της πρωτεύουσας, και θεωρείται το ομορφότερο χωριό του νησιού. Τα ασπρισμένα κυβικά σπίτια σκαρφαλώνουν απότομα σε ένα βραχώδες ακρωτήρι προς την αρχαία Ακρόπολη της Λίνδου, ενώ το ίδιο το χωριό είναι ένας πεζοδρομημένος λαβύρινθος από λιθόστρωτα σοκάκια, καπετανόσπιτα με αυλές από βότσαλο, εστιατόρια στις ταράτσες με πανοραμική θέα και μπουτίκ καταστημάτων. Οι παραλίες της Λίνδου και του Πάλλα βρίσκονται ακριβώς κάτω από το χωριό, και ο μικρός προστατευμένος όρμος του Αγίου Παύλου είναι ένα από τα ομορφότερα σημεία κολύμβησης στο νησί. Η Λίνδος ταιριάζει κυρίως σε ζευγάρια — ο συνδυασμός εξαιρετικής αρχιτεκτονικής, φαγητού με θέα στη θάλασσα και οικείας κλίμακας την καθιστά την πιο ρομαντική βάση της Ρόδου. Τα ξενοδοχεία είναι κυρίως μικρές μπουτίκ και παραδοσιακά καπετανόσπιτα — δεν υπάρχουν μεγάλα resort μέσα στο χωριό.",
        }
      },
      {
        title: { en: "4. Faliraki: The island's main beach resort and the east coast activity hub", el: "4. Φαληράκι: Το κύριο παραθαλάσσιο θέρετρο του νησιού" },
        content: {
          en: "Faliraki lies 15 kilometres south of Rhodes Town on the east coast and has evolved significantly from its reputation as a pure party resort into a more varied destination that suits a wider range of travelers. Its main beach is one of the finest on the island — a long, sandy arc with calm, shallow water, organised facilities and a full range of watersports — and the combination of a massive water park, a go-kart track and excellent family hotels makes it the strongest base for families with older children and teenagers on the island. The evening atmosphere on Bar Street (Ermou Street) remains lively and aimed at a younger crowd, but the resort has expanded enough that quieter accommodation is readily available at the southern end of the beach, away from the nightlife strip. Anthony Quinn Bay — named after the actor who filmed The Guns of Navarone here and subsequently fell in love with the island — is just two kilometres south of Faliraki and is one of the most scenic swimming spots on the east coast, a sheltered cove of exceptional clarity below dramatic pine-covered cliffs. For beach-focused travelers who want easy access to both Rhodes Town and the east coast, and the widest range of activities and accommodation on the island, Faliraki is the most practical choice.",
          el: "Το Φαληράκι βρίσκεται 15 χιλιόμετρα νότια της πόλης της Ρόδου στην ανατολική ακτή και έχει εξελιχθεί σημαντικά από έναν καθαρά τουριστικό προορισμό σε έναν πιο πολυδιάστατο προορισμό. Η κεντρική παραλία είναι μια από τις καλύτερες στο νησί — μια μακριά αμμώδης ακτή με ήρεμα ρηχά νερά, οργανωμένες εγκαταστάσεις και θαλάσσια σπορ. Ο συνδυασμός ενός μεγάλου υδάτινου πάρκου, πίστας καρτ και εξαιρετικών οικογενειακών ξενοδοχείων το καθιστά την καλύτερη βάση για οικογένειες με μεγαλύτερα παιδιά. Ο όρμος Άντονι Κουίν — που πήρε το όνομά του από τον ηθοποιό που γύρισε εδώ το «Τα κανόνια του Ναβαρόνε» — απέχει μόλις δύο χιλιόμετρα νότια και είναι ένα από τα πιο γραφικά σημεία κολύμβησης. Για ταξιδιώτες που θέλουν εύκολη πρόσβαση τόσο στην πόλη όσο και στην ανατολική ακτή, το Φαληράκι είναι η πιο πρακτική επιλογή.",
        }
      },
      {
        title: { en: "5. Ixia and Ialyssos: Sunsets, windsurfing and resort comfort close to the capital", el: "5. Ιξιά και Ιαλυσός: Ηλιοβασιλέματα και windsurfing κοντά στην πόλη" },
        content: {
          en: "Ixia and its western extension Ialyssos sit on the northwest coast of Rhodes, just five to ten kilometres from the capital, and catch the reliable Aegean winds that funnel through the strait between Rhodes and Turkey. This makes the area the best windsurfing and kitesurfing destination on the island, with several established schools and equipment rental centres operating along the beachfront. The west-facing coast also delivers some of the finest sunsets in Rhodes — the views across the water toward the Turkish coast at dusk, with the light changing from gold to red over the open sea, are among the most memorable on the island. Hotels here tend toward the larger resort and all-inclusive end of the market, with several well-established four and five-star properties offering extensive pools, spa facilities and beach access. The beach itself is predominantly pebbly rather than sandy, which suits some travelers but is worth knowing before booking. The proximity to Rhodes Town — just ten to fifteen minutes by car or bus — makes Ixia one of the most convenient resort bases for combining beach days with Old Town evenings. It suits couples and adult travelers who want polished resort comfort, excellent sunset views and easy access to the capital without paying the premium of an Old Town address.",
          el: "Η Ιξιά και ο Ιαλυσός βρίσκονται στη βορειοδυτική ακτή της Ρόδου, μόλις 5-10 χιλιόμετρα από την πόλη, και πιάνουν τους σταθερούς ανέμους του Αιγαίου που περνούν από το στενό μεταξύ Ρόδου και Τουρκίας. Αυτό καθιστά την περιοχή τον καλύτερο προορισμό windsurfing και kitesurfing στο νησί, με πολλές σχολές και κέντρα ενοικίασης εξοπλισμού. Η δυτική ακτή προσφέρει επίσης μερικά από τα ωραιότερα ηλιοβασιλέματα στη Ρόδο. Τα ξενοδοχεία εδώ είναι κυρίως μεγάλα resort all-inclusive, με πισίνες, σπα και πρόσβαση στην παραλία. Η ίδια η παραλία είναι κυρίως βοτσαλωτή. Η εγγύτητα στην πόλη — μόλις 10-15 λεπτά με αυτοκίνητο ή λεωφορείο — καθιστά την Ιξιά μια από τις πιο βολικές βάσεις για συνδυασμό παραλίας και βόλτας στην Παλιά Πόλη. Ταιριάζει σε ζευγάρια που θέλουν άνεση, ηλιοβασιλέματα και εύκολη πρόσβαση χωρίς το premium της Παλιάς Πόλης.",
        }
      },
      {
        title: { en: "6. Kolymbia, Pefkos and the Quiet East Coast: The best base for a relaxed family stay", el: "6. Κολύμπια, Πεύκοι και ήσυχη Ανατολική Ακτή: Χαλαρή οικογενειακή βάση" },
        content: {
          en: "Between Faliraki and Lindos, the east coast of Rhodes opens into a series of quieter villages and resort areas that offer a more relaxed and authentic alternative to the main tourist centres. Kolymbia sits roughly equidistant between Rhodes Town and Lindos, with a clean beach, pine-shaded promenade and a peaceful atmosphere that suits families who want a settled, comfortable base from which to explore the whole island by day. The nearby Tsambika Beach — a long arc of golden sand visible from the hilltop monastery of the same name above — is one of the most beautiful and consistently recommended beaches on the east coast. Pefkos, just south of Lindos, offers a similar Lindos atmosphere at significantly lower prices and with considerably less daytime crowding — it is popular with travelers who have visited Lindos before and want the scenery without the peak-season intensity. Further south, the villages of Lardos and Gennadi provide some of the quietest and most genuinely local beach experiences available on the island, with long stretches of uncrowded sand and very little tourist infrastructure. This entire stretch of east coast suits families, couples and independent travelers who want a base that gives them easy access to the best of Rhodes — Lindos, the east coast beaches, and Rhodes Town — without committing to any single destination as their daily environment.",
          el: "Ανάμεσα στο Φαληράκι και τη Λίνδο, η ανατολική ακτή της Ρόδου ανοίγεται σε μια σειρά από ήσυχα χωριά που προσφέρουν μια πιο χαλαρή και αυθεντική εναλλακτική. Τα Κολύμπια βρίσκονται περίπου στο ίδιο διάστημα μεταξύ πόλης και Λίνδου, με καθαρή παραλία, δεντρόσκιαστη προκυμαία και ήρεμη ατμόσφαιρα. Η κοντινή παραλία Τσαμπίκα — μια μακριά αμμώδης ακτή ορατή από το μοναστήρι στην κορυφή του λόφου — είναι από τις ομορφότερες της ανατολικής ακτής. Οι Πεύκοι, ακριβώς νότια της Λίνδου, προσφέρουν παρόμοια ατμόσφαιρα σε σημαντικά χαμηλότερες τιμές και με λιγότερο κόσμο. Νοτιότερα, τα χωριά Λάρδος και Γεννάδι προσφέρουν ήσυχες, αυθεντικές παραλίες χωρίς πολλές τουριστικές υποδομές. Ολόκληρη αυτή η περιοχή ταιριάζει σε οικογένειες, ζευγάρια και ανεξάρτητους ταξιδιώτες που θέλουν εύκολη πρόσβαση στα καλύτερα της Ρόδου χωρίς να δεσμεύονται σε ένα μόνο μέρος.",
        }
      },
    ],
    faq: [
      {
        q: { en: "Which area of Rhodes is best for a first visit?", el: "Ποια περιοχή της Ρόδου είναι καλύτερη για πρώτη επίσκεψη;" },
        a: { en: "Rhodes Town — and specifically the New Town, within walking distance of the Old Town walls — is the strongest first base. It gives you the medieval Old Town on foot, Elli Beach within walking distance, the best bus connections to the rest of the island, and a full range of restaurants, bars and services without needing a car. If you are primarily interested in beaches and resort comfort, Faliraki is the most complete beach base. If romance and scenery are the priority, Lindos is unmatched but requires a car for the rest of the island.", el: "Η πόλη της Ρόδου — και συγκεκριμένα η Νέα Πόλη, σε απόσταση με τα πόδια από τα τείχη της Παλιάς Πόλης — είναι η καλύτερη πρώτη βάση. Σας δίνει την Παλιά Πόλη με τα πόδια, την παραλία Έλλη σε κοντινή απόσταση, τις καλύτερες συγκοινωνίες προς την υπόλοιπη Ρόδο και πλήθος εστιατορίων, μπαρ και υπηρεσιών χωρίς να χρειάζεστε αυτοκίνητο. Αν ενδιαφέρεστε κυρίως για παραλία, το Φαληράκι είναι η πιο ολοκληρωμένη επιλογή. Αν προτεραιότητα είναι η ρομαντική ατμόσφαιρα, η Λίνδος είναι αξεπέραστη αλλά απαιτεί αυτοκίνητο." }
      },
      {
        q: { en: "How far is Lindos from Rhodes Town?", el: "Πόσο απέχει η Λίνδος από την πόλη της Ρόδου;" },
        a: { en: "Lindos is approximately 50 kilometres from Rhodes Town on the east coast road, a journey of around 50 to 60 minutes by car depending on traffic, or around 90 minutes on the public bus which runs several times daily. Most visitors based in Rhodes Town or Faliraki do Lindos as a day trip — arriving early before the crowds — rather than staying overnight, though staying in the village is by far the most memorable way to experience it.", el: "Η Λίνδος απέχει περίπου 50 χιλιόμετρα από την πόλη της Ρόδου μέσω του παραλιακού δρόμου, περίπου 50-60 λεπτά με αυτοκίνητο ή 90 λεπτά με το λεωφορείο που εκτελεί δρομολόγια πολλές φορές την ημέρα. Οι περισσότεροι επισκέπτες κάνουν ημερήσια εκδρομή στη Λίνδο, αλλά η διαμονή στο χωριό είναι ο πιο αξέχαστος τρόπος να τη ζήσετε." }
      },
      {
        q: { en: "Do I need a car in Rhodes?", el: "Χρειάζομαι αυτοκίνητο στη Ρόδο;" },
        a: { en: "Not necessarily, depending on your base. Rhodes Town, Faliraki and the east coast resorts are all well-connected by the island's bus network, which runs regularly between Rhodes Town and Lindos throughout summer. If you want to explore the island's interior, the wine village of Embonas, the monastery of Filerimos, the remote south coast beaches or the kitesurfing destination of Prasonisi at the island's southern tip, a car is essential. Renting one for two or three days specifically for exploration is a popular and efficient approach.", el: "Όχι απαραίτητα, ανάλογα με τη βάση σας. Η πόλη της Ρόδου, το Φαληράκι και τα ανατολικά θέρετρα έχουν καλές λεωφορειακές γραμμές. Αν θέλετε να εξερευνήσετε το εσωτερικό του νησιού, το οινοχωριό Έμπωνας, τη μονή Φιλερήμου ή το Πρασονήσι στο νότιο άκρο, το αυτοκίνητο είναι απαραίτητο. Η ενοικίαση για 2-3 ημέρες είναι δημοφιλής επιλογή." }
      },
      {
        q: { en: "Is the Rhodes Old Town noisy at night?", el: "Έχει θόρυβο η Παλιά Πόλη τη νύχτα;" },
        a: { en: "Less than you might expect. The Old Town empties of day-trippers by early evening and the streets become considerably quieter and more atmospheric after dinner. The main taverna streets retain some noise until around midnight in high summer, but the interior lanes are remarkably peaceful. The New Town immediately outside the walls has a more active bar scene. If you are a very light sleeper, choose a room on an inner courtyard or upper floor within the Old Town walls.", el: "Λιγότερο από ό,τι περιμένετε. Η Παλιά Πόλη αδειάζει από τους επισκέπτες το απόγευμα και οι δρόμοι γίνονται πιο ήσυχοι. Οι κεντρικοί δρόμοι με ταβέρνες έχουν λίγη κίνηση μέχρι τα μεσάνυχτα τον Αύγουστο, αλλά τα εσωτερικά σοκάκια είναι εξαιρετικά ήσυχα. Η Νέα Πόλη έξω από τα τείχη έχει πιο ζωντανή bar σκηνή. Αν είστε ευαίσθητοι στο θόρυβο, επιλέξτε δωμάτιο σε εσωτερική αυλή." }
      },
      {
        q: { en: "When is the best time to visit Rhodes?", el: "Ποια είναι η καλύτερη εποχή για τη Ρόδο;" },
        a: { en: "May, June and September to early October offer the best balance. The sea is warm from late May, the Old Town and Lindos are pleasantly atmospheric without overwhelming crowds, and prices are significantly lower than in July and August. Peak season — particularly the last two weeks of July and all of August — brings Rhodes to full capacity, with the Acropolis of Lindos requiring queues from mid-morning and the most popular beaches very crowded by noon. Rhodes also receives visitors year-round for its climate, which is the sunniest in Greece, but most accommodation and restaurants outside the main resort areas close between November and March.", el: "Μάιος, Ιούνιος και Σεπτέμβριος έως αρχές Οκτωβρίου προσφέρουν την καλύτερη ισορροπία. Η θάλασσα είναι ζεστή από τα τέλη Μαΐου, η Παλιά Πόλη και η Λίνδος έχουν ωραία ατμόσφαιρα χωρίς υπερβολικό κόσμο, και οι τιμές είναι σημαντικά χαμηλότερες από τον Ιούλιο και τον Αύγουστο. Η υψηλή περίοδος — ειδικά τα τέλη Ιουλίου και όλος ο Αύγουστος — φέρνει τη Ρόδο στο μέγιστο της χωρητικότητάς της, με ουρές στην Ακρόπολη της Λίνδου από το πρωί." }
      },
      {
        q: { en: "Can I island-hop from Rhodes?", el: "Μπορώ να κάνω island-hopping από τη Ρόδο;" },
        a: { en: "Yes, and it is one of the best-positioned islands in Greece for regional island-hopping. Regular ferry connections run from Rhodes Town to Kos, Symi, Patmos, Leros and the wider Dodecanese chain. Day trips to the tiny island of Symi — a remarkably well-preserved neoclassical village in a horseshoe harbour — are particularly popular and widely available from the Mandraki and Commercial ports in Rhodes Town.", el: "Ναι, η Ρόδος είναι ένα από τα καλύτερα νησιά για island-hopping στα Δωδεκάνησα. Υπάρχουν τακτικές ακτοπλοϊκές συνδέσεις από την πόλη της Ρόδου προς Κω, Σύμη, Πάτμο, Λέρο και άλλα νησιά. Οι ημερήσιες εκδρομές στη Σύμη — ένα εξαιρετικά διατηρημένο νεοκλασικό νησί — είναι ιδιαίτερα δημοφιλείς και διαθέσιμες από το λιμάνι Μανδράκι." }
      },
    ],
    seo: {
      title: {
        en: "Where to Stay in Rhodes | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στη Ρόδο | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Rhodes — from the UNESCO medieval Old Town and the romantic village of Lindos to the family beaches of Faliraki, the windsurfing coast of Ixia and the quiet east coast villages of Kolymbia and Pefkos. A complete guide to Rhodes hotels and areas.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Ρόδο — από τη μεσαιωνική Παλιά Πόλη (μνημείο UNESCO) και το ρομαντικό χωριό της Λίνδου έως τις οικογενειακές παραλίες στο Φαληράκι, την ακτή windsurfing της Ιξιάς και τα ήσυχα χωριά Κολύμπια και Πεύκοι στην ανατολική ακτή. Ένας πλήρης οδηγός για ξενοδοχεία και περιοχές στη Ρόδο."
      }
    },
  },
  {
    slug: "halkidiki",
    name: "Where to Stay in Halkidiki",
    place: "Halkidiki — Central Macedonia",
    info: {
      en: "Find the best places to stay in Halkidiki — from the cosmopolitan resorts of Sani and the lively beach atmosphere of Pefkochori on Kassandra, to the wild hidden beaches of Sithonia, the luxury retreats around Neos Marmaras and the mystical gateway of Ouranoupoli towards Mount Athos. A complete guide to Halkidiki hotels and areas.",
      el: "Βρείτε τις καλύτερες περιοχές διαμονής στη Χαλκιδική — από τη Σάνη και το Πευκοχώρι στην Κασσάνδρα και τα πολυτελή resort της Σιθωνίας, μέχρι τα κρυφά διαμάντια γύρω από τις Καβουρότρυπες και την Ουρανούπολη. Πλήρης οδηγός για ξενοδοχεία και περιοχές στη Χαλκιδική.",
    },
    image: "/images/halkidiki.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Halkidiki shapes the entire experience — from the cosmopolitan resorts of Sani and the lively beach atmosphere of Pefkochori on Kassandra, to the countless hidden coves of the wild Sithonia peninsula, the luxury retreats around Neos Marmaras and the mystical gateway of Ouranoupoli towards Mount Athos.",
      el: "Η επιλογή της περιοχής διαμονής στη Χαλκιδική καθορίζει το σύνολο της εμπειρίας σου — από τα κοσμοπολίτικα resort της Σάνης και τη ζωντανή παραλιακή ατμόσφαιρα του Πευκοχωρίου στην Κασσάνδρα, μέχρι τις σχεδόν αμέτρητες κρυφές παραλίες της αδαμάστης Σιθωνίας, τα πολυτελή καταφύγια γύρω από τον Νέο Μαρμαρά και τη μυσταγωγική πύλη της Ουρανούπολης προς τον Άθω.",
    },
    description: {
      en: "Relaxing stays, stunning beaches and authentic hospitality — organized in a clear and practical way.",
      el: "Χαλαρωτική διαμονή, εκπληκτικές παραλίες και αυθεντική φιλοξενία — οργανωμένα με καθαρό και πρακτικό τρόπο.",
    },
    features: {
      en: ["Kassandra (Organized & Family-friendly)", "Sithonia (Nature, Hidden Beaches & Luxury)", "Sani (Luxury Resort & Sani Festival)", "Neos Marmaras & Porto Carras (Wine Tourism & Spa)", "Ouranoupoli (Gateway to Mount Athos)", "Inland Halkidiki (Polygyros & Archaeology)", "Hidden beaches: Kavourotrypes, Armenistis, Tripiti", "70 km from Thessaloniki"],
      el: ["Κασσάνδρα (Οργανωμένη & Οικογενειακή)", "Σιθωνία (Φύση, Κρυφές Παραλίες & Πολυτέλεια)", "Σάνη (Luxury Resort & Sani Festival)", "Νέος Μαρμαράς & Porto Carras (Οινοτουρισμός & Spa)", "Ουρανούπολη (Πύλη Αγίου Όρους & Μυστικισμός)", "Εσωτερική Χαλκιδική (Πολύγυρος & Αρχαιολογία)", "Κρυφές παραλίες: Καβουρότρυπες, Αρμενιστής, Τριπίτη", "70 χλμ. από τη Θεσσαλονίκη"],
    },
    sections: [
      {
        title: { en: "1. Kassandra: The most organized peninsula — and much more", el: "1. Κασσάνδρα: Η πιο οργανωμένη χερσόνησος — και πολύ περισσότερα από αυτό" },
        content: {
          en: "Kassandra is the first 'finger' of Halkidiki — the closest to Thessaloniki and the ancient land of Potidaea, the most touristically developed, and yet the easiest choice for a first visit. The road connection to Thessaloniki is direct — about an hour and a half — and the network of beaches, hotels and services covers the entire peninsula in depth developed over decades. On the northwestern side, Potidaea serves as the natural entry point: the archaeological site of the ancient city, founded by Corinthian colonists in the 7th century BC and extensively referenced by Thucydides, sits right next to the modern village. A few kilometres south, Pefkochori is one of the liveliest seaside towns in Halkidiki — the main beach bar runs from early morning, while clubs stay open until dawn. The main beach is sandy and wide, but the hidden gem here is the Glarokavos lagoon — a shallow cove with flat water, ideal for children and stand-up paddleboarding, just a few kilometres south. In the same area, Paliouri offers wide sandy beaches with minimal development — ideal for those who want peace within an organized peninsula. On the eastern side of Kassandra, Hanioti is perhaps the calmest and most family-friendly choice — three kilometres of Blue Flag beach with shallow waters that resemble a Caribbean lagoon. Just south, Kallithea offers a quieter character, while at the tip of the peninsula at Paliouri and Kavo Posidi lies one of the finest wild coasts in all of Halkidiki — still little-known, with white pebbles and pines touching the water. Kassandra suits families, young travelers who want activity and affordable hospitality, and anyone visiting Halkidiki for the first time.",
          el: "Η Κασσάνδρα είναι το πρώτο «δάχτυλο» της Χαλκιδικής — η πιο κοντινή στη Θεσσαλονίκη και την ιστορική γη της Ποτίδαιας, η πιο τουριστικά ανεπτυγμένη, και παρ' όλα αυτά η πιο εύκολη επιλογή για μια πρώτη επίσκεψη. Ο οδικός σύνδεσμος με τη Θεσσαλονίκη είναι άμεσος — περίπου μιάμιση ώρα — και το δίκτυο παραλιών, ξενοδοχείων και υπηρεσιών καλύπτει το σύνολο της χερσονήσου σε βάθος δεκαετιών. Στη βορειοδυτική πλευρά, η Ποτίδαια αποτελεί το φυσικό σημείο εισόδου: ο ανασκαφικός χώρος της αρχαίας πόλης, που ιδρύθηκε από Κορίνθιους αποίκους τον 7ο αιώνα π.Χ. και αναφέρεται εκτενώς στον Θουκυδίδη, βρίσκεται ακριβώς δίπλα στο σύγχρονο χωριό. Λίγα χιλιόμετρα νοτιότερα, το Πευκοχώρι είναι μια από τις πιο ζωντανές παραλιακές κωμοπόλεις της Χαλκιδικής. Η κεντρική παραλία είναι αμμώδης και φαρδιά, αλλά το κρυφό διαμάντι εδώ είναι η λιμνοθάλασσα του Γλαρόκαβου — ένας αβαθής κολπίσκος με επίπεδο νερό, ιδανικός για παιδιά. Στην ανατολική πλευρά, η Χανιώτη είναι η πιο ήρεμη και οικογενειακή επιλογή, ενώ στο Κάβο-Πόσιδι βρίσκεται μια από τις ωραιότερες άγριες ακτές ολόκληρης της Χαλκιδικής.",
        }
      },
      {
        title: { en: "2. Sithonia: The wilder peninsula — for those seeking the true gem", el: "2. Σιθωνία: Η πιο φυσική χερσόνησος — για όσους ψάχνουν το αληθινό διαμάντι" },
        content: {
          en: "If Kassandra is the Halkidiki everyone knows, Sithonia is the one that travelers return to again and again once they discover it. The second 'finger' is more remote, more mountainous, greener — and the waters surrounding it have a deep, almost turquoise quality rarely found in mainland Greece. On the western side of Sithonia, Nikiti is a village of character that has preserved some of its old soul among the hotels. Nearby lie some of the top luxury resorts in Halkidiki, including the Danai Beach Resort & Villas — a member of The Leading Hotels of the World — with a private beach, pool villas and hospitality rivalling the great resorts of the islands. Further north at Vourvourou, a bay with multiple small islets — dormant volcanic remnants — creates a series of semi-secluded beaches with incredible blue waters. This is also home to the Ekies All Senses Resort, a member of Relais & Châteaux, with sustainability philosophy that has made it a reference for all of Europe. The hidden gem of western Sithonia is not at any resort, however — it is Armenistis Beach: a long wild coast with golden sand, shallow water and almost no human presence even in August. On the eastern side of Sithonia, Sarti is the largest seaside town — three kilometres of Blue Flag beach with shallow water and an easy daily life. From Sarti, within 8 to 15 kilometres through narrow forest roads, lie the true wonders: Kavourotrypes — a series of rocky caves opening into the sea with turquoise water that literally glows — Kriaritsi with its crystalline waters, Kalamitsi that resembles a small Fiskardo without the tourists. At the southern tip of the peninsula, Toroni offers one of the longest sandy beaches in Halkidiki — quiet, with wooden huts for shade instead of umbrellas, and the islet of Toroni with ancient acropolis ruins accessible by kayak. Sithonia suits couples, travelers seeking nature and authenticity, those who want luxury without mass tourism.",
          el: "Αν η Κασσάνδρα είναι η Χαλκιδική που γνωρίζουν όλοι, η Σιθωνία είναι αυτή που επιστρέφουν ξανά και ξανά όσοι την ανακαλύψουν. Στη δυτική πλευρά, η Νικήτη είναι ένα χωριό με χαρακτήρα. Κοντά του βρίσκονται μερικά από τα κορυφαία πολυτελή resort της Χαλκιδικής, όπως το Danai Beach Resort & Villas. Στο Βουρβουρού, ένας κόλπος με πολλαπλές μικρές νησίδες δημιουργεί ημιεπιλεγμένες παραλίες. Το κρυφό διαμάντι είναι η παραλία Αρμενιστής. Στην ανατολική πλευρά, η Σάρτη είναι η μεγαλύτερη παραλιακή κωμόπολη. Από τη Σάρτη, μέσα από δασικά δρομάκια, κρύβονται οι Καβουρότρυπες, το Κριαρίτσι και το Καλαμίτσι. Στο νότιο άκρο, ο Τορώνης προσφέρει μια από τις μεγαλύτερες αμμώδεις παραλίες.",
        }
      },
      {
        title: { en: "3. Sani: The most luxurious resort in Halkidiki — a world of its own", el: "3. Σάνη: Το πολυτελέστερο resort της Χαλκιδικής — και ένας κόσμος μόνος του" },
        content: {
          en: "Sani is not just a location — it is a self-contained world on the northwestern tip of Kassandra. The Sani Resort is a complex of five different hotels (Sani Asterias, Sani Beach, Sani Club, Porto Sani, Sani Dunes) spread over hundreds of acres of pine forest and sandy beach, with a marina that welcomes private yachts, dozens of restaurants and bars, first-class wellness facilities, and the famous Sani Festival — an annual international music festival of classical, jazz and world music that transforms Sani every summer into one of the most refined cultural events in southeastern Europe. The Boúsoulas beach at Sani — a thin tongue of white sand between pine forest and sea — is one of the finest resort beaches in the entire Mediterranean. For those who want quiet outside the resort boundaries, Stavronikita beach a few kilometres north is undeveloped, sandy and almost always calm. Sani suits couples seeking exclusivity, families who want everything at their doorstep, and travelers for whom the hotel is not just the base — it is the destination itself.",
          el: "Η Σάνη δεν είναι απλώς μια τοποθεσία — είναι ένας αυτόνομος κόσμος στη βορειοδυτική άκρη της Κασσάνδρας. Το Sani Resort αποτελεί σύμπλεγμα πέντε διαφορετικών ξενοδοχείων που απλώνονται σε εκατοντάδες στρέμματα πευκοδάσους, με μαρίνα, δεκάδες εστιατόρια και το περίφημο Sani Festival. Η παραλία του Μπούσουλα είναι μια από τις ωραιότερες παραλίες resort ολόκληρης της Μεσογείου. Η Σάνη ταιριάζει σε ζευγάρια που θέλουν αποκλειστικότητα και σε ταξιδιώτες για τους οποίους το ξενοδοχείο είναι ο ίδιος ο προορισμός.",
        }
      },
      {
        title: { en: "4. Neos Marmaras & Porto Carras: The most romantic corner of Sithonia", el: "4. Νέος Μαρμαράς & Porto Carras: Η πιο ρομαντική γωνιά της Σιθωνίας" },
        content: {
          en: "Neos Marmaras is one of the finest villages in Sithonia — a fishing village that became a popular summer destination without losing its authentic character. The old harbour with fishing boats, the tavernas serving fresh fish by the water, and the strolls through the village with views over the bay make Neos Marmaras one of the most romantic destinations in Halkidiki. Adjacent to it lies Porto Carras — one of the largest and most complete resort complexes in the Mediterranean, with its own vineyard and winery producing the award-winning Domaine Porto Carras wine, an 80-boat marina, three enormous lagoon-style pools, the impressive Myrthia Thermal Spa spanning 3,000 sqm with an ancient thermal spring (Nero Kanistrou), and amphitheatrical architecture ensuring sea views from every point. It is one of the few resorts in Greece combining gastronomy, wine tourism, thalasso therapy and water sports in a single cohesive environment. From the port of Neos Marmaras, boats also depart for the circumnavigation of Mount Athos — an unmissable experience. Hidden gem: a few kilometres south lies Ormos Panagias — a small, quiet bay with pine forest reaching the shore, minimal hotels and waters that rival the Cyclades.",
          el: "Ο Νέος Μαρμαράς είναι από τα ωραιότερα χωριά της Σιθωνίας — ένα ψαροχώρι που έγινε δημοφιλής θερινός προορισμός χωρίς να χάσει τον αυθεντικό του χαρακτήρα. Δίπλα του εκτείνεται το Porto Carras, με ιδιόκτητο αμπελώνα, μαρίνα, το Myrthia Thermal Spa και αμφιθεατρική αρχιτεκτονική. Κρυφό διαμάντι: ο Όρμος Παναγιά, ένας ήσυχος κόλπος με πευκόδασος που φτάνει μέχρι την ακτή.",
        }
      },
      {
        title: { en: "5. Ouranoupoli & The Road to Mount Athos: The gateway to another world", el: "5. Ουρανούπολη & Ο Δρόμος προς τον Άθω: Η πύλη σε έναν άλλο κόσμο" },
        content: {
          en: "Ouranoupoli sits at the northwestern tip of the Mount Athos peninsula — the last town before the borders of the Holy Mountain, and one of the most atmospheric seaside towns in northern Greece. The Byzantine tower of Prosforion dominating the beach is one of the few intact medieval towers in Macedonia, built in the 14th century by Serbian monks. The beach of Ouranoupoli is sandy and very clean, with direct views across the bay to the mountains of Mount Athos rising on the horizon — a sight unchanged since the Middle Ages. Ouranoupoli is the only departure point for Mount Athos — the secret republic of 20 Byzantine monasteries living by the old calendar, which forbids entry to women but allows male pilgrims and travelers with a special passport (diamonitirion). Even for those without access to the interior, the boat tours circumnavigating Mount Athos by sea — passing close to monasteries clinging to rocky coasts — are among the most impressive experiences of the peninsula. Around Ouranoupoli, the beaches are far from tourist maps. Tripiti Beach — with a natural rock arch over the sea, a unique geological formation in the region — lies just a few kilometres south and is perhaps the greatest hidden gem in all of Halkidiki. Very few know of its existence. Ouranoupoli suits travelers who want to combine the sea with spiritual or cultural experiences.",
          el: "Η Ουρανούπολη βρίσκεται στο βορειοδυτικό άκρο της χερσονήσου του Άθω — η τελευταία πόλη πριν τα σύνορα του Αγίου Όρους. Ο βυζαντινός πύργος Πρόσφορον που δεσπόζει στην παραλία είναι από τους λίγους αλώβητους μεσαιωνικούς πύργους της Μακεδονίας. Η Ουρανούπολη είναι το μοναδικό σημείο αναχώρησης για τον Άγιο Όρος. Γύρω από την Ουρανούπολη, η Παραλία Τριπίτη — με ένα φυσικό βραχώδες τόξο πάνω στη θάλασσα — αποτελεί ίσως το μεγαλύτερο κρυφό διαμάντι ολόκληρης της Χαλκιδικής.",
        }
      },
      {
        title: { en: "6. Polygyros & Inland Halkidiki: The place the tourist offices forget", el: "6. Πολύγυρος & Εσωτερική Χαλκιδική: Ο τόπος που ξεχνούν τα τουριστικά γραφεία" },
        content: {
          en: "Few travelers know that Halkidiki also has a mountainous, completely unspoiled inland side. Polygyros, the capital of the region, is a lively Greek town with a good market, excellent cafes, a noteworthy archaeological collection at the local museum, and some of the finest local produce — honey, olive oil, dairy products. From here the best hiking trails into the Holomonda forest begin — the largest forest in Halkidiki, with oaks and chestnuts that change colour spectacularly in autumn. For travelers interested in archaeology, Olynthia — a few kilometres south of Polygyros — hosts the archaeological site of ancient Olynthos, one of the most important ancient cities of Halkidiki founded in the 5th century BC. The mosaic floors uncovered here are among the earliest known examples of pebble mosaic in the Mediterranean. Inland Halkidiki suits travelers who want to understand the place in depth.",
          el: "Λίγοι ταξιδιώτες γνωρίζουν ότι η Χαλκιδική έχει και μια ορεινή, εντελώς αδιάφθορη εσωτερική πλευρά. Ο Πολύγυρος, η πρωτεύουσα του νομού, είναι μια ζωντανή ελληνική κωμόπολη. Από εδώ ξεκινούν τα μονοπάτια πεζοπορίας για το δάσος του Χολομώντα. Τα Ολύνθια φιλοξενούν τον ανασκαφικό χώρο της αρχαίας Ολύνθου. Η εσωτερική Χαλκιδική ταιριάζει σε ταξιδιώτες που θέλουν να κατανοήσουν τον τόπο σε βάθος.",
        }
      },
    ],
    faq: [
      {
        q: { en: "Kassandra or Sithonia? Which is the better choice?", el: "Κασσάνδρα ή Σιθωνία; Ποια είναι η καλύτερη επιλογή;" },
        a: { en: "It depends entirely on what you are looking for. Kassandra is more organized, closer, more affordable and more suitable for families and first-time visits. Sithonia is wilder, with waters that rival the best Greek islands — but requires a car and more independence. Experienced Halkidiki visitors almost always return to Sithonia.", el: "Εξαρτάται πλήρως από τι ψάχνεις. Η Κασσάνδρα είναι πιο οργανωμένη, πιο κοντινή, πιο οικονομική και πιο κατάλληλη για οικογένειες και πρώτη επίσκεψη. Η Σιθωνία είναι πιο φυσική, πιο άγρια, με νερά που ανταγωνίζονται τα καλύτερα νησιά — αλλά απαιτεί αυτοκίνητο. Οι έμπειροι επισκέπτες επιστρέφουν σχεδόν πάντα στη Σιθωνία." }
      },
      {
        q: { en: "Do I need a car in Halkidiki?", el: "Χρειάζομαι αυτοκίνητο στη Χαλκιδική;" },
        a: { en: "Yes, absolutely. Even if you are staying at an organized resort, the only way to explore the hidden beaches — Kavourotrypes, Armenistis, Tripiti, Kriaritsi — is by car. For Sithonia, an SUV or at least a high-clearance car is recommended, as some beaches have dirt road access.", el: "Ναι, ανεπιφύλακτα. Ακόμα και αν μένεις σε οργανωμένο resort, ο μόνος τρόπος να εξερευνήσεις τις κρυφές παραλίες είναι με αυτοκίνητο. Για τη Σιθωνία, συνιστάται SUV ή τουλάχιστον ψηλό αυτοκίνητο." }
      },
      {
        q: { en: "When is the best time to visit Halkidiki?", el: "Πότε είναι η καλύτερη εποχή για τη Χαλκιδική;" },
        a: { en: "June and September are the ideal months. The sea is warm, the crowds are fewer, hotels are more affordable and the weather is excellent. August is the peak month for crowds and prices — Halkidiki receives millions of visitors every summer, mainly from Thessaloniki, the Balkans and Eastern Europe.", el: "Ιούνιος και Σεπτέμβριος είναι οι ιδανικοί μήνες. Ο Αύγουστος είναι ο ψηλότερος μήνας από πλευράς κόσμου και τιμών." }
      },
      {
        q: { en: "Can I visit Mount Athos?", el: "Μπορώ να επισκεφθώ τον Άγιο Όρος;" },
        a: { en: "Male travelers can visit Mount Athos with a special permit (diamonitirion) issued by the Ministry of Foreign Affairs or from offices in Ouranoupoli. Advance booking is required. Women are not permitted to enter the territory of Mount Athos, but can take the boat tour around it from Ouranoupoli and Neos Marmaras.", el: "Άνδρες ταξιδιώτες μπορούν να επισκεφθούν το Άγιο Όρος με ειδικό έγγραφο (diamonitirion). Γυναίκες δεν επιτρέπεται να εισέλθουν, αλλά μπορούν να κάνουν το γύρο από τη θάλασσα." }
      },
      {
        q: { en: "What are the most beautiful hidden beaches in Halkidiki?", el: "Ποιες είναι οι ωραιότερες και πιο άγνωστες παραλίες της Χαλκιδικής;" },
        a: { en: "Beyond the well-known ones, seek out: Kavourotrypes (Sithonia) — sea caves with turquoise light, Armenistis (north Sithonia) — unspoiled wild coast, Tripiti (near Ouranoupoli) — natural rock arch over the sea, Kavo Posidi (south Kassandra) — white pebbles and pines, and Ormos Panagias (south Sithonia) — a quiet bay with natural shade from pine forest.", el: "Πέρα από τις γνωστές, αξίζει να ψάξεις: Καβουρότρυπες, Αρμενιστής, Τριπίτη, Κάβο Πόσιδι, και Όρμος Παναγιά." }
      },
      {
        q: { en: "Is Halkidiki suitable for a day trip from Thessaloniki?", el: "Είναι η Χαλκιδική κατάλληλη για ημερήσια εκδρομή από τη Θεσσαλονίκη;" },
        a: { en: "Yes for an introduction, no for a full experience. From Thessaloniki to Kassandra the distance is about 70 kilometres and the drive 1 to 1.5 hours. For Sithonia and Ouranoupoli you need at least two nights. Halkidiki rewards patience — its most beautiful moments are after 5 pm, when the day visitors have left.", el: "Ναι για εισαγωγή, όχι για πλήρη γνωριμία. Για τη Σιθωνία και την Ουρανούπολη χρειάζεσαι τουλάχιστον δύο νύχτες. Η Χαλκιδική ανταμείβει την υπομονή." }
      },
    ],
    seo: {
      title: {
        en: "Where to Stay in Halkidiki | Best Areas & Hotels | GoGreeceNow",
        el: "Πού να Μείνεις στη Χαλκιδική | Καλύτερες Περιοχές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Halkidiki — from the cosmopolitan resorts of Sani and the lively beach atmosphere of Pefkochori on Kassandra, to the wild hidden beaches of Sithonia, the luxury retreats around Neos Marmaras and the mystical gateway of Ouranoupoli towards Mount Athos. A complete guide to Halkidiki hotels and areas.",
        el: "Βρες τις καλύτερες περιοχές διαμονής στη Χαλκιδική — από τη Σάνη και το Πευκοχώρι στην Κασσάνδρα και τα πολυτελή resort της Σιθωνίας, μέχρι τα κρυφά διαμάντια γύρω από τις Καβουρότρυπες και την Ουρανούπολη. Πλήρης οδηγός για ξενοδοχεία και περιοχές στη Χαλκιδική."
      }
    },
  },
  {
    slug: "meteora",
    name: "Where to Stay in Meteora",
    place: "Meteora — Thessaly",
    info: {
      en: "Find the best places to stay in Meteora — from the practical base of Kalambaka and the atmospheric village of Kastraki nestled among the rocks, to the hidden monasteries, secret sunrise spots and day trips to Plastira Lake. The most complete guide to Meteora hotels and areas.",
      el: "Πού να μείνεις στα Μετέωρα — από την πρακτική Καλαμπάκα και το ατμοσφαιρικό Καστράκι μέσα στους βράχους, μέχρι τα κρυφά μοναστήρια, τα sunrise σημεία που δεν ξέρει κανείς και τις ημερήσιες εκδρομές στη Λίμνη Πλαστήρα. Ο πληρέστερος ελληνικός οδηγός διαμονής για τα Μετέωρα.",
    },
    image: "/images/meteora.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing your base in Meteora is one of the most important decisions of the trip — the practical Kalambaka with direct rail connections and a wide choice of hotels, Kastraki which is literally embraced by the rocks with breathtaking views from every window, and the hidden corners of the wider region that reward travelers who dare to stray from the tourist circuit.",
      el: "Η επιλογή βάσης στα Μετέωρα είναι μία από τις πιο σημαντικές αποφάσεις του ταξιδιού — η πρακτική Καλαμπάκα με τις άμεσες συνδέσεις και την πλατιά επιλογή ξενοδοχείων, το Καστράκι που κυριολεκτικά αγκαλιάζεται από τους βράχους και προσφέρει θέα που κόβει την ανάσα από κάθε παράθυρο, και οι αφανείς γωνιές της ευρύτερης περιοχής που ανταμείβουν τους ταξιδιώτες που τολμούν να αποκλίνουν από το τουριστικό circuit.",
    },
    description: {
      en: "Relaxing stays, breathtaking views and authentic hospitality — organized in a clear and practical way.",
      el: "Χαλαρωτική διαμονή, εκπληκτική θέα και αυθεντική φιλοξενία — οργανωμένα με καθαρό και πρακτικό τρόπο.",
    },
    features: {
      en: ["Kalambaka (Practical & Connected)", "Kastraki (Atmospheric & Among the Rocks)", "6 UNESCO Monastery Sites", "Hidden: Ypapantis, Bantova, Doupiani", "Sunrise & Sunset Key Spots", "Day Trip: Plastira Lake (45 km)", "Day Trip: Trikala (20 km)", "Hiking Trails Kastraki—Great Meteoron"],
      el: ["Καλαμπάκα (Πρακτική & Συνδεδεμένη)", "Καστράκι (Ατμοσφαιρικό & Μέσα στους Βράχους)", "6 Επισκέψιμα Μοναστήρια UNESCO", "Κρυφά: Υπαπαντή, Μπάντοβας, Δουπιανή", "Sunrise & Sunset Σημεία Κλειδιά", "Εκδρομή: Λίμνη Πλαστήρα (45 χλμ.)", "Εκδρομή: Τρίκαλα (20 χλμ.)", "Πεζοπορικά Μονοπάτια Καστράκι—Μεγάλο Μετέωρο"],
    },
    sections: [
      {
        title: { en: "1. Kalambaka: The most practical base — and much more than a transit stop", el: "1. Καλαμπάκα: Η πιο πρακτική βάση — και πολλά περισσότερα από σταθμός" },
        content: {
          en: "Kalambaka is the main town of the region — a lively town of 12,000 inhabitants at the foot of the rocks, with a direct rail connection to Athens (about 4 hours) and Thessaloniki (about 3.5 hours), daily KTEL buses from Trikala, and the richest network of hotels, restaurants and services in the wider area. For a first-time visitor to Meteora, Kalambaka is the most logical choice: you arrive easily, find accommodation for every budget, and have restaurants open until late at night. The old town of Kalambaka, on the southeastern foothills of the rocks, is characteristically different from the centre — narrow streets, traditional courtyards, and the Early Christian Basilica of the Dormition of the Virgin (11th century), one of the most overlooked Byzantine monuments in Thessaly, with colourful mosaic floors and frescoes from the Macedonian dynasty era. Few tourists stop here — most rush towards the monasteries. Hotels in Kalambaka range from simple rooms in family-run guesthouses to fine boutique hotels with rock views from the terrace. A room with a northern or northwestern view gives direct visual contact with the rocks — a change that completely transforms the experience, especially at dawn when the mist settles in the valley. From the centre of Kalambaka, hiking trails begin towards the Monastery of Agia Triada and Agios Stefanos — worth avoiding the car for this route and doing it on foot at least once.",
          el: "Η Καλαμπάκα είναι η κεφαλούπολη της περιοχής — μια ζωντανή κωμόπολη 12.000 κατοίκων στους πρόποδες των βράχων, με άμεση σιδηροδρομική σύνδεση με Αθήνα και Θεσσαλονίκη, καθημερινά δρομολόγια ΚΤΕΛ και το πλουσιότερο δίκτυο ξενοδοχείων στην ευρύτερη περιοχή. Η παλιά πόλη της Καλαμπάκας έχει την Παλαιοχριστιανική Βασιλική Κοίμησης Θεοτόκου (11ος αιώνας), ένα αδικαδόξαστα βυζαντινό μνημείο. Τα ξενοδοχεία ποικίλλουν από απλά δωμάτια μέχρι boutique ξενοδοχεία με θέα τους βράχους. Από το κέντρο ξεκινούν μονοπάτια για τη Μονή Αγίας Τριάδας και τον Άγιο Στέφανο.",
        }
      },
      {
        title: { en: "2. Kastraki: The most atmospheric village — built among the rocks", el: "2. Καστράκι: Το πιο ατμοσφαιρικό χωριό — χτισμένο μέσα στους βράχους" },
        content: {
          en: "Kastraki is just 2 kilometres from Kalambaka, but the distance in experience is measured in entire worlds. It is a village literally built among the rocks — the first meteoric formations begin at its square, the cliffs rise vertically behind every house, and the monasteries are visible from most rooms without even getting out of bed. This makes staying in Kastraki a qualitatively different experience — you do not visit Meteora, you live inside it. The architecture is traditional Thessalian — stone houses, drystone walls, narrow cobblestone alleys and vegetable gardens. Hotels here are mainly small, family-run, with character — guesthouses and boutique rooms in renovated traditional buildings, many offering terraces with direct rock views. The Doupiani House at the northwestern edge of the village, right at the foot of the Doupiani rock, is one of the most beloved boutique hotels in the area. From Kastraki the most interesting hiking trails depart — including the path leading to the Great Meteoron Monastery through the pine forest, completely avoiding the asphalt road. The walk takes about 40 minutes at a moderate pace and is one of the most rewarding in the country. Hidden gem of Kastraki: at the northwestern edge of the village, the small chapel of Panagia Doupiani — the first church of the Meteora monastic complex — accessible by a simple 10-minute path from the edge of the village.",
          el: "Το Καστράκι είναι μόλις 2 χιλιόμετρα από την Καλαμπάκα, αλλά η απόσταση σε εμπειρία μετράται σε κόσμους. Τα ξενοδοχεία είναι κυρίως μικρά, οικογενειακά, σε ανακαινισμένα παραδοσιακά κτίρια. Το Doupiani House είναι από τα πιο αγαπημένα boutique ξενοδοχεία. Από το Καστράκι ξεκινά το μονοπάτι για τη Μονή Μεγάλου Μετεώρου μέσα από το πευκοδάσος. Κρυφό διαμάντι: το παρεκκλήσι της Παναγίας Δουπιανής, ο πρώτος ναός του μοναστικού συγκροτήματος.",
        }
      },
      {
        title: { en: "3. The Six Visit Monasteries: What to expect and where to go first", el: "3. Τα Έξι Επισκέψιμα Μοναστήρια: Τι να περιμένεις και πού να πας πρώτα" },
        content: {
          en: "Of the thirty monasteries that historically operated in Meteora, only six are visitable today — and each has an entirely different character, different feel, different view. Great Meteoron: the largest and highest monastery at 613 metres, founded by Saint Athanasios in the 14th century, with an impressive museum of Byzantine icons and manuscripts. Entrance via 115 steps carved into the rock. Varlaam: next to the Great Meteoron, with exceptionally well-preserved 16th-century frescoes in the main church. Roussanou: the most visually striking monastery for photography — perched on a low, steep rock shaped like a blade, surrounded by air on all sides. A women's monastery, the nuns care for visitors with exceptional warmth. Agia Triada: internationally known as the location of the James Bond film For Your Eyes Only (1981), but worth far more than that fame — the hike from Kalambaka is one of the finest in Meteora. Agios Stefanos: the only monastery reached without stairs, crossing a bridge over a deep ravine. A women's monastery with an excellent museum of ecclesiastical embroidery. Agios Nikolaos Anapafsas: the smallest and quietest of the six, often overlooked by visitors rushing to the larger monasteries — a mistake, as it has some of the finest 16th-century frescoes in Meteora.",
          el: "Από τα τριάντα μοναστήρια που λειτούργησαν ιστορικά, σήμερα είναι επισκέψιμα μόνο έξι. Μονή Μεταμορφώσεως (Μεγάλο Μετέωρο): το μεγαλύτερο και υψηλότερο. Μονή Βαρλαάμ: με εξαιρετικές τοιχογραφίες του 16ου αιώνα. Μονή Ρουσάνου: το πιο εντυπωσιακό φωτογραφικά. Μονή Αγίας Τριάδας: γνωστή από την ταινία James Bond. Μονή Αγίου Στεφάνου: η μόνη χωρίς σκαλιά. Μονή Αγίου Νικολάου Αναπαυσά: η πιο μικρή και ήσυχη, με υπέροχες τοιχογραφίες.",
        }
      },
      {
        title: { en: "4. The Hidden Monasteries & The World Tourists Don't See", el: "4. Τα Κρυφά Μοναστήρια & Ο Κόσμος που Δεν Βλέπουν οι Τουρίστες" },
        content: {
          en: "Beyond the six visitable monasteries, there are 15 abandoned, ruined or non-visitable monasteries — some of which can be approached and are among the most stunning hidden gems in all of Greece. Ypapantis Monastery: built in the 14th century inside a spacious sandstone cave at a height of 70 metres, now ruined but still visitable. It stands at the edge of a massive rock and offers a unique view of Kalambaka and Kastraki that cannot be seen from any of the six main monasteries. Agios Nikolaos Bantova (or Kofinas): 14th century, built at the root of a rock in Kastraki. A short hike reveals this nearly forgotten monastery, near which the openings of caves used by ascetics are still visible. Agios Georgios Mandilas: a small chapel built on a steep rock in Kastraki, non-visitable due to its position but clearly visible from below. The Skete of Stagon — Doupiani: the first monastic building of the entire complex, built in the 13th century. Its courtyard has a simple, stunning silence found nowhere else.",
          el: "Πέρα από τα έξι επισκέψιμα, υπάρχουν 15 ερειπωμένα ή μη επισκέψιμα μοναστήρια. Μονή Υπαπαντής: 14ος αιώνας μέσα σε σπήλαιο, με μοναδική θέα. Μονή Αγίου Νικολάου Μπάντοβα: σχεδόν λησμονημένη. Άγιος Γεώργιος Μανδηλάς: εκκλησάκι σε απόκρημνο βράχο. Η Σκήτη των Σταγών — Δουπιανή: το πρώτο μοναστικό κτίσμα του συγκροτήματος.",
        }
      },
      {
        title: { en: "5. Sunrise, Sunset & Photography Spots That Don't Appear on Tourist Maps", el: "5. Sunrise, Sunset & Τα Σημεία Φωτογραφίας που Δεν Εμφανίζονται στον Τουριστικό Χάρτη" },
        content: {
          en: "Meteora changes completely depending on the light — and the most impressive moments are before 8 am and after 7 pm, when the tourist groups have left and the place returns to itself. Sunrise from Roussanou: the most beautiful sunrise in Meteora is seen not from the top but from the road just before Roussanou Monastery, where the rock begins to turn golden while the rest of the valley is still in shadow. Sunset Rock: the most famous sunset spot — a natural rise northwest of Agios Nikolaos Anapafsas, where Roussanou and the surrounding rocks ignite in orange and red. Hidden sunrise spot: a rocky rise east of the old town of Kalambaka offers a view of the rocks against the rising sun that does not appear in any tourist guide. The mist experience: in autumn and early spring, the valley often fills with low mist covering the plain while the rock tops and monasteries protrude above it — a sight many consider even more impressive than the summer sunset.",
          el: "Τα Μετέωρα αλλάζουν τελείως ανάλογα με το φως. Sunrise από τη Μονή Ρουσάνου: ο δρόμος λίγο πριν τη μονή. Sunset Rock: το πιο γνωστό σημείο δύσης. Κρυφό sunrise σημείο: βραχώδες ύψωμα ανατολικά της παλιάς πόλης. Η εμπειρία της ομίχλης το φθινόπωρο είναι μαγευτική.",
        }
      },
      {
        title: { en: "6. Day Trips: Trikala, Plastira Lake & Unknown Thessaly", el: "6. Ημερήσιες Εκδρομές: Τρίκαλα, Λίμνη Πλαστήρα & Η Άγνωστη Θεσσαλία" },
        content: {
          en: "Meteora is located at the geographical centre of one of the richest and least-known regions of Greece. Trikala (20 km): the capital of the prefecture, a lively city with a large student community, impressive Byzantine Fortress, the old Varousi district with neoclassical buildings and riverside square on the Lithaios river. Plastira Lake (45 km): one of the most impressive natural landscapes in mainland Greece — an artificial lake of 4,800 acres at 800 metres altitude, surrounded by fir forest, undeveloped shores and traditional mountain villages. The route from Kalambaka to Plastira Lake through mountainous Domokos is one of the finest mountain drives in central Greece. The villages of Neochori, Morfovouni and Leontari are among the best-preserved mountain villages in Thessaly. Trikala morning — Plastira midday — Meteora sunset can all be combined in a single day with a car.",
          el: "Τρίκαλα (20 χλμ.): ζωντανή πόλη με Βυζαντινό Φρούριο και παλιά συνοικία Βαρούσι. Λίμνη Πλαστήρα (45 χλμ.): εντυπωσιακό φυσικό τοπίο με ελατόδασος και παραδοσιακά χωριά. Η διαδρομή Καλαμπάκα—Λίμνη Πλαστήρα μέσα από το ορεινό Δομοκό είναι από τις ωραιότερες στην κεντρική Ελλάδα.",
        }
      },
    ],
    faq: [
      {
        q: { en: "Kalambaka or Kastraki? Which is the better choice?", el: "Καλαμπάκα ή Καστράκι; Ποια είναι η καλύτερη επιλογή;" },
        a: { en: "For a first visit and easy access, Kalambaka is the most practical. For an experience you will remember, Kastraki is incomparably superior — you live literally among the rocks, the monasteries are visible from your room, and the hiking trails start from the square. The distance between them is just 2 kilometres, so the choice is purely a matter of atmosphere.", el: "Για πρώτη επίσκεψη, η Καλαμπάκα είναι πιο πρακτική. Για εμπειρία που θα θυμάσαι, το Καστράκι είναι ανώτερο — ζεις μέσα στους βράχους." }
      },
      {
        q: { en: "How many days do I need for Meteora?", el: "Πόσες μέρες χρειάζομαι για τα Μετέωρα;" },
        a: { en: "The minimum time to see the six monasteries is two days. But if you want to see what tourists don't — the hidden monasteries, the hiking trails, the sunrise, the Plastira Lake excursion — you need at least three nights. Many who come for two days regret not staying a third night.", el: "Ελάχιστος χρόνος δύο ημέρες. Για τα κρυφά μοναστήρια και την εκδρομή στη Λίμνη Πλαστήρα, χρειάζεσαι τουλάχιστον τρεις νύχτες." }
      },
      {
        q: { en: "Do I need a car in Meteora?", el: "Χρειάζεται αυτοκίνητο στα Μετέωρα;" },
        a: { en: "For the six main monasteries there are tourist buses and taxis from Kalambaka, so a car is not essential. For the hidden monasteries, Plastira Lake, the sunrise spots early in the morning and the surrounding villages — a car makes all the difference.", el: "Για τα κύρια μοναστήρια όχι. Για τα κρυφά μοναστήρια και την εξερεύνηση σε βάθος, το αυτοκίνητο κάνει τη διαφορά." }
      },
      {
        q: { en: "What is the best time to visit Meteora?", el: "Ποια είναι η καλύτερη εποχή για τα Μετέωρα;" },
        a: { en: "Spring (April—June) and autumn (September—November) are ideal. In April the trees blossom, the weather is cool and the crowds are few. Summer (July—August) is overwhelming with visitors. Winter — especially after snowfall — gives a magical, completely different image that few have seen.", el: "Άνοιξη και φθινόπωρο είναι οι ιδανικές εποχές. Το καλοκαίρι έχει πολύ κόσμο. Ο χειμώνας με χιόνι είναι μαγικός." }
      },
      {
        q: { en: "Can I reach Meteora by train or bus?", el: "Μπορώ να πάω στα Μετέωρα με τρένο ή λεωφορείο;" },
        a: { en: "Yes. Kalambaka has a railway station with connections from Athens (change at Larissa or Palaiofarsala, total 4—4.5 hours) and Thessaloniki (3—3.5 hours). There are also KTEL buses from Athens, Thessaloniki and Trikala. From Kalambaka to the monasteries there are tourist buses (morning to midday in summer) and taxis.", el: "Ναι. Η Καλαμπάκα έχει σιδηροδρομικό σταθμό και ΚΤΕΛ. Από την Καλαμπάκα στα μοναστήρια υπάρχουν τουριστικά λεωφορεία και ταξί." }
      },
      {
        q: { en: "What is the dress code for the monasteries?", el: "Ποιος ο κώδικας ενδυμασίας για τα μοναστήρια;" },
        a: { en: "Strict and mandatory. Men: long trousers (no shorts). Women: skirt or dress below the knee, shoulders covered. Most monasteries provide wraps and skirts at the entrance free of charge or for a small fee — but it is better to bring your own out of respect.", el: "Αυστηρός. Άνδρες: μακριά παντελόνια. Γυναίκες: φούστα κάτω από το γόνατο, ώμοι σκεπαστοί." }
      },
      {
        q: { en: "Is Meteora worth visiting in winter?", el: "Αξίζει η επίσκεψη το χειμώνα;" },
        a: { en: "For most travelers, a winter visit is a revelation. The monasteries open with reduced hours but remain operational. Winter gives the rare opportunity to walk on almost empty trails, see the rocks covered in snow — one of the most majestic images in Greece — and sit in a taverna with a fireplace in Kastraki without crowds or rush. You need snow chains for the car if visiting after snowfall.", el: "Για τους περισσότερους, η χειμερινή επίσκεψη είναι αποκάλυψη. Οι βράχοι με χιόνι είναι από τις πιο μεγαλειώδεις εικόνες της Ελλάδας." }
      },
    ],
    seo: {
      title: {
        en: "Where to Stay in Meteora | Kalambaka, Kastraki & Hidden Gems | GoGreeceNow",
        el: "Πού να Μείνεις στα Μετέωρα | Καλαμπάκα, Καστράκι & Κρυφά Μονοπάτια | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Meteora — from the practical base of Kalambaka and the atmospheric village of Kastraki nestled among the rocks, to the hidden monasteries, secret sunrise spots and day trips to Plastira Lake. The most complete guide to Meteora hotels and areas.",
        el: "Πού να μείνεις στα Μετέωρα — από την πρακτική Καλαμπάκα και το ατμοσφαιρικό Καστράκι μέσα στους βράχους, μέχρι τα κρυφά μοναστήρια, τα sunrise σημεία που δεν ξέρει κανείς και τις ημερήσιες εκδρομές στη Λίμνη Πλαστήρα. Ο πληρέστερος ελληνικός οδηγός διαμονής για τα Μετέωρα."
      }
    },
  },
  {
    slug: "monemvasia",
    name: "Where to Stay in Monemvasia",
    place: "Monemvasia — Laconia, Peloponnese",
    info: {
      en: "Find the best places to stay in Monemvasia — from sleeping inside a medieval Byzantine mansion in the Kastro and the convenient mainland village of Gefyra, to the luxury countryside estate of Kinsterna and the hidden beaches around the rock. The most complete guide to Monemvasia hotels and areas.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Μονεμβασιά — από τη διαμονή μέσα σε ένα μεσαιωνικό βυζαντινό αρχοντικό στο Κάστρο και το βολικό χωριό της Γέφυρας, έως το πολυτελές κτήμα της Κινστέρνας και τις κρυφές παραλίες γύρω από τον βράχο. Ο πληρέστερος οδηγός για ξενοδοχεία και περιοχές στη Μονεμβασιά.",
    },
    image: "/images/monemvasia.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Monemvasia is the single decision that determines whether you experience it as one of the most romantic and extraordinary overnight destinations in all of Europe — sleeping inside a restored Byzantine mansion inside the medieval walls, waking up to the sound of the Aegean below your window — or as a convenient day trip base that misses the heart of what makes this place unlike anywhere else on earth.",
      el: "Η επιλογή διαμονής στη Μονεμβασιά καθορίζει αν θα τη ζήσετε ως έναν από τους πιο ρομαντικούς προορισμούς διανυκτέρευσης σε όλη την Ευρώπη — κοιμώμενοι μέσα σε ένα αναπαλαιωμένο βυζαντινό αρχοντικό εντός των μεσαιωνικών τειχών, ξυπνώντας με τον ήχο του Αιγαίου κάτω από το παράθυρό σας — ή ως μια βολική βάση ημερήσιας εκδρομής.",
    },
    description: {
      en: "Relaxing stays, beautiful views and authentic hospitality — organized in a clear and practical way.",
      el: "Χαλαρωτικές διαμονές, όμορφη θέα και αυθεντική φιλοξενία — οργανωμένα με καθαρό και πρακτικό τρόπο.",
    },
    features: {
      en: ["Kastro Lower Town (Sleep Inside the Medieval City)", "Kastro Upper Town (Agia Sofia & Secret Views)", "Gefyra (Practical, Affordable & Great Views of the Rock)", "Kinsterna Hotel (Luxury Countryside Estate & Boat Trips)", "Portelo (Swimming Through the Ancient Sea Gate)", "Pori & Elafonisos (Best Beaches Near Monemvasia)", "Mystras UNESCO Site (90 min drive)", "Gerakas — Europe's Southernmost Natural Fjord", "Pavlopetri — World's Oldest Submerged City", "The birthplace of poet Yannis Ritsos"],
      el: ["Κάστρο Κάτω Πόλη (Διαμονή στη Μεσαιωνική Πόλη)", "Κάστρο Άνω Πόλη (Αγία Σοφία & Μυστικές Θέες)", "Γέφυρα (Πρακτική, Οικονομική & Θέα του Βράχου)", "Kinsterna Hotel (Πολυτελές Κτήμα & Εκδρομές με Βάρκα)", "Πορτέλο (Κολύμπι από την Αρχαία Θαλάσσια Πύλη)", "Πόρι & Ελαφόνησος (Καλύτερες Παραλίες)", "Μυστράς Μνημείο UNESCO (90 λεπτά)", "Γέρακας — Το Νοτιότερο Φιόρδ της Ευρώπης", "Παυλοπέτρι — Αρχαιότερη Βυθισμένη Πόλη του Κόσμου", "Γενέτειρα του ποιητή Γιάννη Ρίτσου"],
    },
    sections: [
      {
        title: { en: "1. The Kastro — Lower Town: The most extraordinary place to sleep in Greece", el: "1. Κάστρο — Κάτω Πόλη: Το πιο εντυπωσιακό μέρος για διαμονή στην Ελλάδα" },
        content: {
          en: "The Lower Town — always called simply the Kastro — is the inhabited portion of the medieval city, enclosed within its original Byzantine and Venetian sea walls and accessible only on foot through the single arched gate on the western wall. No cars, no motorcycles, no wheeled suitcases without serious effort — the streets inside are medieval cobblestone, uneven, narrow, stepped in places, and utterly beautiful at every turn. The single main lane, running east to west through the heart of the town, is lined on both sides with stone-built tavernas, small cafés, craft shops selling locally produced olive oil, honey, Malvasia wine and ceramics, and the kind of boutique accommodation that occupies restored Byzantine and Venetian mansions with centuries of history inside their walls. Staying inside the Kastro is an experience with no real parallel in Greece. The hotels here — almost all of them small, intimate, and individually run — occupy buildings that have stood since the 14th, 15th and 16th centuries. Stone vaulted ceilings, exposed medieval masonry, hand-carved wooden furniture, windows that frame the open sea through walls a metre thick: this is not boutique design hotel aesthetic — it is the real thing. Waking up inside the walls, with the sound of the Aegean below and the medieval lanes empty in the early morning before the day-trippers arrive, is one of the most genuinely transporting travel experiences available anywhere in southern Europe. Among the most consistently praised properties inside the Kastro, Moni Emvasis Luxury Suites occupies an imposing stone-built mansion in a prime position, with suites that combine the original medieval structure with thoughtfully contemporary interiors. Byzantino Boutique Hotel offers rooms in rich jewel-like tones behind a heritage facade. Theophano Art Hotel is a smaller, more intimate option. Likinia Hotel is frequently cited for its exceptional views. All of these properties book out weeks in advance — booking two to three months ahead is the minimum.",
          el: "Η Κάτω Πόλη — το Κάστρο, όπως το λένε όλοι — είναι η κατοικημένη περιοχή της μεσαιωνικής πόλης, προσβάσιμη μόνο με τα πόδια μέσα από τη μονή καμάρα στο δυτικό τείχος. Δεν υπάρχουν αυτοκίνητα, οι δρόμοι είναι μεσαιωνικοί λιθόστρωτοι, ανώμαλοι, στενοί. Η διαμονή μέσα στο Κάστρο είναι μια εμπειρία χωρίς αντίστοιχο στην Ελλάδα. Τα ξενοδοχεία — όλα μικρά, οικεία — στεγάζονται σε κτίρια του 14ου, 15ου και 16ου αιώνα. Το ξύπνημα μέσα στα τείχη, με τον ήχο του Αιγαίου από κάτω και τα μεσαιωνικά σοκάκια άδεια νωρίς το πρωί, είναι μια από τις πιο συγκινητικές ταξιδιωτικές εμπειρίες της νότιας Ευρώπης. Ανάμεσα στα πιο γνωστά καταλύματα: Moni Emvasis Luxury Suites, Byzantino Boutique Hotel, Theophano Art Hotel, Likinia Hotel.",
        }
      },
      {
        title: { en: "2. The Kastro — Upper Town: The most dramatic hidden landscape on the rock", el: "2. Κάστρο — Άνω Πόλη: Το πιο εντυπωσιακό κρυφό τοπίο στον βράχο" },
        content: {
          en: "Above the inhabited Lower Town, a steep 15 to 20-minute climb through the ruins of the medieval city leads to the Upper Town — the part of Monemvasia that most visitors never reach. The Upper Town was once the aristocratic quarter, home to the Venetian nobility. Today it is entirely uninhabited, returned to nature and silence, with the ruins of over 500 mansions visible through dense scrubland, the remains of a 17th-century Ottoman hammam, and ancient cisterns still intact among the stones. The centrepiece is the Church of Agia Sofia — a 12th-century Byzantine church of extraordinary architectural quality, perched dramatically at the very edge of the cliff. Its half-Byzantine, half-Venetian character and the surviving fresco fragments make it one of the most significant medieval churches in Greece. It is also the finest viewpoint on the rock. Hidden gem: the path continuing beyond Agia Sofia along the northern cliff edge leads to natural rock ledges with views down the sheer northern face directly to the sea — few visitors ever reach this point.",
          el: "Πάνω από την Κάτω Πόλη, μια απότομη 15-20λεπτη ανάβαση οδηγεί στην Άνω Πόλη — το τμήμα που οι περισσότεροι επισκέπτες δεν φτάνουν ποτέ. Σήμερα είναι ακατοίκητη, επιστραμμένη στη φύση. Κεντρικό σημείο είναι η εκκλησία της Αγίας Σοφίας — ένας βυζαντινός ναός του 12ου αιώνα στην άκρη του γκρεμού. Κρυφό διαμάντι: το μονοπάτι που συνεχίζει πέρα από την Αγία Σοφία οδηγεί σε φυσικές προεξοχές με θέα κάθετα προς τη θάλασσα.",
        }
      },
      {
        title: { en: "3. Gefyra: The most practical base — and far more characterful than it sounds", el: "3. Γέφυρα: Η πιο πρακτική βάση — με περισσότερο χαρακτήρα από όσο ακούγεται" },
        content: {
          en: "Gefyra is the modern mainland village directly opposite the rock, connected to the Kastro by a narrow 200-metre causeway. The village has a genuinely pleasant waterfront promenade looking directly out at the rock — the view of Monemvasia from the Gefyra side, particularly in the evening when the warm stone of the Kastro glows amber in the declining sun, is one of the most beautiful views of any medieval city in Europe. The waterfront tavernas serve excellent fresh fish at prices noticeably lower than inside the Kastro. The causeway walk from Gefyra to the Kastro gate takes around 20 minutes on foot, or 2 minutes and €1.10 on the shuttle service. Hotels range from simple family-run guesthouses to mid-range properties with sea-facing balconies. Filoxenia Hotel is the most consistently recommended in Gefyra. Gefyra suits budget travelers, families with young children, anyone arriving without a car, and travelers who want easy access to the surrounding beaches.",
          el: "Η Γέφυρα είναι το σύγχρονο χωριό απέναντι από τον βράχο, συνδεδεμένο με το Κάστρο μέσω ενός στενού διαύλου 200 μέτρων. Η θέα της Μονεμβασιάς από τη Γέφυρα το ηλιοβασίλεμα είναι από τις ωραιότερες μεσαιωνικής πόλης στην Ευρώπη. Η απόσταση από τη Γέφυρα ως την πύλη του Κάστρου είναι 20 λεπτά με τα πόδια ή 2 λεπτά με το shuttle (€1,10). Το Filoxenia Hotel είναι η πιο σταθερή σύσταση. Η Γέφυρα ταιριάζει σε ταξιδιώτες με προϋπολογισμό, οικογένειες, και όσους φτάνουν χωρίς αυτοκίνητο.",
        }
      },
      {
        title: { en: "4. Kinsterna Hotel and the Countryside: The most complete luxury experience near Monemvasia", el: "4. Kinsterna Hotel και Εξοχή: Η πιο ολοκληρωμένη πολυτελής εμπειρία" },
        content: {
          en: "Seven kilometres west of Monemvasia, set on 25 acres of organic farmland, olive groves, citrus orchards and private vineyards, Kinsterna Hotel is one of the most exceptional rural hotel experiences in Greece. The property is built around a restored 18th-century Byzantine mansion with a history including use as a silk production centre and winemaking estate. The rooms range from beautifully appointed suites in the main mansion to private villas with plunge pools. The award-winning restaurant serves cuisine rooted in the agricultural traditions of Laconia. Kinsterna also offers organized boat excursions to inaccessible beaches including Damos Beach and the remarkable natural fjord at Gerakas. Kinsterna suits couples on anniversary or honeymoon trips, and anyone wanting the Monemvasia experience with full-service luxury resort comfort.",
          el: "Επτά χιλιόμετρα δυτικά της Μονεμβασιάς, το Kinsterna Hotel είναι μια από τις πιο εξαιρετικές εμπειρίες φιλοξενίας στην Ελλάδα. Το κτήμα είναι χτισμένο γύρω από ένα αναπαλαιωμένο βυζαντινό αρχοντικό του 18ου αιώνα. Προσφέρει οργανωμένες εκδρομές με βάρκα σε απρόσιτες παραλίες. Ιδανικό για ζευγάρια και honeymoon.",
        }
      },
      {
        title: { en: "5. The Hidden Beaches Around Monemvasia: What Nobody Tells You", el: "5. Οι Κρυφές Παραλίες γύρω από τη Μονεμβασιά: Αυτό που κανείς δεν σου λέει" },
        content: {
          en: "Most visitors focus entirely on the rock and leave without exploring the extraordinary coastline that surrounds it. Portelo is the most dramatic swimming spot — the ancient sea gate of Monemvasia, a small opening in the southern sea wall where you can swim through into a sheltered rock pool directly beneath the fortress walls. Peri Kakavos sits 100 metres from the port with turquoise water. Mandraki Beach is the closest organized beach to town. Pori Beach is a 2-kilometre Blue Flag beach with golden sand and direct views of the rock. The Kastella Coves (5 km from Gefyra) are three completely undeveloped and generally deserted beaches. Damos Beach and Gerakas are accessible by boat only. Elafonisos Island (45 minutes by car plus a short ferry) has the famous Simos Beach — regularly listed among the finest beaches in Europe.",
          el: "Οι περισσότεροι επισκέπτες φεύγουν χωρίς να εξερευνήσουν την εκπληκτική ακτογραμμή. Το Πορτέλο είναι το πιο εντυπωσιακό σημείο — η αρχαία θαλάσσια πύλη. Η παραλία Πόρι έχει 2 χλμ. χρυσή άμμο. Ο Ελαφόνησος με τη Σίμο είναι από τις ωραιότερες παραλίες της Ευρώπης. Οι Καβουρότρυπες της Μονεμβασιάς — τα Kastella Coves — είναι τρεις παρθένες παραλίες.",
        }
      },
      {
        title: { en: "6. Day Trips from Monemvasia: The Southern Peloponnese Unlocked", el: "6. Ημερήσιες Εκδρομές από τη Μονεμβασιά: Η Νότια Πελοπόννησος" },
        content: {
          en: "Monemvasia's position in the southeastern Peloponnese makes it one of the finest bases for exploring a remarkably rich region. Mystras (90 km, 1h20min) — the Byzantine ghost city, a UNESCO World Heritage Site, with remarkably well-preserved frescoes and churches. Gerakas — Europe's southernmost natural fjord, accessible by boat, with sheer limestone cliffs and emerald water. The Mani Peninsula — wild, culturally distinctive, with tower houses and the spectacular Diros Caves. Pavlopetri — the world's oldest known submerged city, dating to 3,000 BCE, visible through shallow water off the coast of Elafonisos, navigable with a snorkelling mask. The combination of Monemvasia, Mystras, Elafonisos and the Mani justifies the Peloponnese as a destination in its own right.",
          el: "Ο Μυστράς (90 χλμ.) — η βυζαντινή πόλη-φάντασμα, μνημείο UNESCO. Ο Γέρακας — το νοτιότερο φυσικό φιόρδ της Ευρώπης. Η Μάνη — άγρια, με πύργους και το σπήλαιο Δυρού. Το Παυλοπέτρι — η αρχαιότερη βυθισμένη πόλη του κόσμου, 3.000 π.Χ., ορατή με μάσκα θαλάσσης. Ο συνδυασμός Μονεμβασιάς, Μυστρά, Ελαφονήσου και Μάνης δικαιολογεί από μόνος του την Πελοπόννησο.",
        }
      },
    ],
    faq: [
      {
        q: { en: "Should I stay inside the Kastro or in Gefyra?", el: "Να μείνω μέσα στο Κάστρο ή στη Γέφυρα;" },
        a: { en: "Staying inside the Kastro is one of the most extraordinary overnight experiences in Greece — medieval walls, centuries-old stone buildings, the Aegean below your window. It costs more, books out early, and requires carrying luggage over cobblestones. Gefyra is practical, affordable, easier logistically, and offers the best external view of the rock. If budget and timing allow, at least one night inside the Kastro is strongly recommended.", el: "Η διαμονή στο Κάστρο είναι μια από τις πιο εντυπωσιακές εμπειρίες στην Ελλάδα. Η Γέφυρα είναι πρακτική και οικονομική. Αν το επιτρέπει ο προϋπολογισμός, συνιστάται τουλάχιστον μία νύχτα στο Κάστρο." }
      },
      {
        q: { en: "How far in advance do I need to book hotels in Monemvasia?", el: "Πόσο νωρίς πρέπει να κλείσω ξενοδοχείο στη Μονεμβασιά;" },
        a: { en: "For accommodation inside the Kastro during July and August, book four to six months in advance. Most properties have between three and twenty rooms. For Gefyra, three to four weeks is usually sufficient. For Kinsterna Hotel, book as early as possible regardless of season.", el: "Για διαμονή στο Κάστρο τον Ιούλιο-Αύγουστο, κλείστε 4-6 μήνες νωρίτερα. Για τη Γέφυρα, 3-4 εβδομάδες είναι αρκετές." }
      },
      {
        q: { en: "Is Monemvasia suitable for families with children?", el: "Είναι η Μονεμβασιά κατάλληλη για οικογένειες;" },
        a: { en: "For families with older children, the Kastro is magical. For families with young children or pushchairs, Gefyra is the strongly recommended base — flat ground, car access, parking, a beach and all amenities.", el: "Για μικρά παιδιά, συνιστάται η Γέφυρα. Για μεγαλύτερα παιδιά, το Κάστρο είναι μαγικό." }
      },
      {
        q: { en: "Can I visit Monemvasia without a car?", el: "Μπορώ να επισκεφθώ τη Μονεμβασιά χωρίς αυτοκίνητο;" },
        a: { en: "Yes — two daily KTEL buses run from Athens (approximately 5.5 to 6 hours). For the rock itself and the waterfront, no car is needed. For the surrounding beaches, Mystras or Elafonisos, a car is essential.", el: "Ναι — δύο καθημερινά λεωφορεία από Αθήνα. Για τον βράχο δεν χρειάζεται αυτοκίνητο, για τις γύρω παραλίες είναι απαραίτητο." }
      },
      {
        q: { en: "When is the best time to visit Monemvasia?", el: "Ποια είναι η καλύτερη εποχή για τη Μονεμβασιά;" },
        a: { en: "April through early June and September through October are the optimal periods. The spring wildflowers, the extraordinary light, and the atmosphere are at their finest. Summer weekends bring significant crowds. The local Easter celebration at the Church of Elkomenos Christos is one of the most atmospheric in Greece.", el: "Απρίλιος έως Ιούνιος και Σεπτέμβριος-Οκτώβριος. Το Πάσχα στον Ελκόμενο Χριστό είναι από τις πιο ατμοσφαιρικές εμπειρίες στην Ελλάδα." }
      },
      {
        q: { en: "What practical things should I know before arriving?", el: "Τι πρακτικά πρέπει να γνωρίζω πριν φτάσω;" },
        a: { en: "No ATM inside the Kastro — withdraw cash in Gefyra. Pack in a soft bag, not a wheeled suitcase. The shuttle between Gefyra and the Kastro gate costs €1.10. Flat soles with grip are essential for the Upper Town climb. Arrive before 9am or after 5pm in summer to avoid crowds.", el: "Δεν υπάρχει ΑΤΜ στο Κάστρο. Χρησιμοποιήστε μαλακή τσάντα όχι βαλίτσα με ρόδες. Το shuttle κοστίζει €1,10. Φτάστε πριν τις 9 π.μ. ή μετά τις 5 μ.μ." }
      },
    ],
    seo: {
      title: {
        en: "Where to Stay in Monemvasia | Kastro, Gefyra & Hidden Gems | GoGreeceNow",
        el: "Πού να Μείνεις στη Μονεμβασιά | Κάστρο, Γέφυρα & Κρυφά Διαμάντια | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Monemvasia — from sleeping inside a medieval Byzantine mansion in the Kastro and the convenient mainland village of Gefyra, to the luxury countryside estate of Kinsterna and the hidden beaches around the rock. The most complete guide to Monemvasia hotels and areas.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στη Μονεμβασιά — από τη διαμονή μέσα σε ένα μεσαιωνικό βυζαντινό αρχοντικό στο Κάστρο και το βολικό χωριό της Γέφυρας, έως το πολυτελές κτήμα της Κινστέρνας και τις κρυφές παραλίες γύρω από τον βράχο."
      }
    },
  },
  {
    slug: "chania",
    name: "Where to Stay in Chania",
    place: "Chania — Western Crete",
    info: {
      en: "Find the best neighborhoods to stay in Chania — from the iconic Venetian harbour and the bohemian Splantzia quarter to the diplomatic Halepa, the local Nea Chora seafront and the wild Akrotiri peninsula. The most complete guide to Chania hotels, hidden beaches and areas for every type of traveler.",
      el: "Βρείτε τις καλύτερες γειτονιές για διαμονή στα Χανιά — από το εμβληματικό ενετικό λιμάνι και την μποέμικη συνοικία Σπλάντζια έως τη διπλωματική Αλεπού, το τοπικό παραλιακό μέτωπο της Νέας Χώρας και την άγρια χερσόνησο Ακρωτήρι. Ο πληρέστερος οδηγός για ξενοδοχεία, κρυφές παραλίες και περιοχές στα Χανιά.",
    },
    image: "/images/chania.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Chania determines the entire character of your trip — from the Venetian harbour and the narrow Ottoman lanes of the Old Town at the city's heart, to the bohemian café culture of Splantzia, the neoclassical mansions and former consulates of aristocratic Halepa, the beachside tavernas and family calm of Nea Chora, and the monasteries, secret coves and dramatic cliffs of the Akrotiri peninsula just across the bay.",
      el: "Η επιλογή διαμονής στα Χανιά καθορίζει ολόκληρο τον χαρακτήρα του ταξιδιού σας — από το ενετικό λιμάνι και τα στενά οθωμανικά σοκάκια της Παλιάς Πόλης έως την μποέμικη κουλτούρα καφέ της Σπλάντζιας, τα νεοκλασικά αρχοντικά της αριστοκρατικής Αλεπούς, τις ταβέρνες δίπλα στη θάλασσα και την οικογενειακή ηρεμία της Νέας Χώρας, και τα μοναστήρια, τους κρυφούς κολπίσκους και τους εντυπωσιακούς γκρεμούς της χερσονήσου Ακρωτήρι.",
    },
    description: {
      en: "Relaxing stays, beautiful views and authentic hospitality — organized in a clear and practical way.",
      el: "Χαλαρωτικές διαμονές, όμορφη θέα και αυθεντική φιλοξενία — οργανωμένα με καθαρό και πρακτικό τρόπο.",
    },
    features: {
      en: ["Venetian Harbour & Kastelli (Iconic & Historic)", "Splantzia (Bohemian & Authentic Local Life)", "Koum Kapi (Quiet, Local & Beach by the Walls)", "Halepa (Elegant, Diplomatic & Venizelos Heritage)", "Nea Chora (Beach, Family & Local Marina)", "Akrotiri Peninsula (Monasteries, Hidden Beaches & Seitan Limania)", "Gateway to Balos Lagoon, Elafonisi & Samaria Gorge", "Ancient Aptera 20 min from the city", "Chania Airport on Akrotiri peninsula"],
      el: ["Ενετικό Λιμάνι & Καστέλλι (Εμβληματική & Ιστορική)", "Σπλάντζια (Μποέμικη & Αυθεντική)", "Κουμ Καπί (Ήσυχη, Τοπική & Παραλία)", "Αλεπού (Κομψή, Διπλωματική & Βενιζέλος)", "Νέα Χώρα (Παραλία, Οικογένειες & Μαρίνα)", "Χερσόνησος Ακρωτήρι (Μοναστήρια, Κρυφές Παραλίες & Σεϊτάν Λιμάνια)", "Πύλη για Μπάλο, Ελαφονήσι & Φαράγγι Σαμαριάς", "Αρχαία Απτέρα 20 λεπτά από την πόλη", "Αεροδρόμιο Χανίων στο Ακρωτήρι"],
    },
    sections: [
      {
        title: { en: "1. The Venetian Harbour and Kastelli: The most iconic and atmospheric base in Chania", el: "1. Ενετικό Λιμάνι και Καστέλλι: Η πιο εμβληματική βάση στα Χανιά" },
        content: {
          en: "The Venetian harbour quarter — the area immediately surrounding the inner harbour, the lighthouse, the Firkas Fortress and the densely layered lanes of Kastelli above — is the first choice for almost every traveler visiting Chania for the first time. The harbour itself is one of the most beautiful in the Mediterranean: a crescent of honey-coloured stone buildings reflected in still water, with the famous Egyptian Lighthouse at the mouth and the domed silhouette of the Kiutsuk Hasan Mosque framing the view from the eastern quay. At dawn, before the tourists arrive, it is one of the finest views in all of Greece. Kastelli is the elevated neighbourhood above the harbour — the original settlement of ancient Kydonia, later the Venetian aristocratic quarter, and today a dense tangle of lanes and restored mansions with boutique hotels. Casa Delfino, a 17th-century Venetian mansion, is among the finest addresses. Porto Antico Hotel sits directly on the harbour. The main practical consideration is noise — waterfront restaurants stay lively until midnight. Choose accommodation one or two lanes back from the waterfront for peace.",
          el: "Η περιοχή του ενετικού λιμανιού είναι η πρώτη επιλογή για κάθε επισκέπτη. Το λιμάνι είναι ένα από τα ομορφότερα της Μεσογείου. Το Καστέλλι είναι η συνοικία πάνω από το λιμάνι — ο αρχικός οικισμός της αρχαίας Κυδωνίας. Το Casa Delfino, ένα ενετικό αρχοντικό του 17ου αιώνα, είναι από τα καλύτερα ξενοδοχεία. Κύριο πρακτικό ζήτημα είναι ο θόρυβος — επιλέξτε δωμάτιο ένα ή δύο στενά πίσω από το λιμάνι.",
        }
      },
      {
        title: { en: "2. Splantzia: The most bohemian and genuinely local quarter of the Old Town", el: "2. Σπλάντζια: Η πιο μποέμικη γειτονιά της Παλιάς Πόλης" },
        content: {
          en: "If the harbour area is the face that Chania shows to the world, Splantzia is its soul. This neighbourhood, built around the leafy square of Plateia 1821, was the heart of the Ottoman city and retains a layered, multi-faith character. Its centrepiece is the Church of Agios Nikolaos — originally a Dominican monastery church built by the Venetians in the 14th century, converted to a mosque in 1645, and finally returned to the Orthodox church after 1918. The result carries both a minaret and a bell tower — a feat shared by almost no other building in the world. Beyond the church, the Street of Knives — Skridlof Street — has operated in largely the same form since the Ottoman period. The old Jewish Quarter around the Etz Hayyim Synagogue — one of the very few surviving Romaniote synagogues in Greece — lies at the western boundary. Hotels here are smaller and more personal than in the harbour area. Splantzia is the consistent recommendation for repeat visitors who want to go deeper than the harbour promenade allows.",
          el: "Αν το λιμάνι είναι το πρόσωπο των Χανίων, η Σπλάντζια είναι η ψυχή τους. Κέντρο της είναι η εκκλησία του Αγίου Νικολάου — αρχικά δομινικανή μονή τον 14ο αιώνα, μετά τζαμί το 1645, και τέλος ορθόδοξη εκκλησία. Φέρει ταυτόχρονα μιναρέ και καμπαναριό. Ο δρόμος των Μαχαιράδων λειτουργεί από την οθωμανική περίοδο. Η Σπλάντζια είναι η σταθερή σύσταση για επισκέπτες που θέλουν κάτι βαθύτερο από την προκυμαία.",
        }
      },
      {
        title: { en: "3. Koum Kapi: The quietest and most local corner of the Old Town", el: "3. Κουμ Καπί: Η πιο ήσυχη γωνιά της Παλιάς Πόλης" },
        content: {
          en: "Koum Kapi occupies the southeastern edge of the Old Town, between the old Venetian sea walls and the open sea, and is the most genuinely residential part of the historic centre. Its name — from the Turkish kumkapi, meaning sand gate — refers to the remains of the Sabbionara Rampart, a Venetian-era sea gate that still stands. The neighbourhood has a café-lined seafront path along the base of the old walls — one of the most pleasant morning walks in Chania. Koum Kapi Beach is a small, informal stretch of golden sand used almost entirely by locals. The streets are quieter and more residential than Splantzia or the harbour area — better taverna value, fewer souvenir shops. For travelers who want Old Town character without the noise, Koum Kapi is the most underrated base in the city.",
          el: "Το Κουμ Καπί βρίσκεται στο νοτιοανατολικό άκρο της Παλιάς Πόλης και είναι η πιο κατοικημένη γειτονιά του ιστορικού κέντρου. Η παραλία Κουμ Καπί είναι μια μικρή ανεπίσημη αμμουδιά που χρησιμοποιείται κυρίως από ντόπιους. Για ταξιδιώτες που θέλουν τον χαρακτήρα της Παλιάς Πόλης χωρίς τον θόρυβο, το Κουμ Καπί είναι η πιο υποτιμημένη βάση.",
        }
      },
      {
        title: { en: "4. Halepa: Chania's most elegant neighborhood and the cradle of modern Greek history", el: "4. Αλεπού: Η πιο κομψή γειτονιά των Χανίων" },
        content: {
          en: "Halepa lies about fifteen minutes on foot east of the Old Town, and its character is entirely distinct from anything inside the Venetian walls. This was the diplomatic quarter during the 19th and early 20th centuries, when the European powers maintained consulates here. The result is a neighbourhood of neoclassical mansions, tree-lined streets and unhurried bourgeois calm. Eleftherios Venizelos — the most important Greek statesman of the 20th century — was born in Halepa. The Venizelos Graves at the top of the hill offer what many consider the finest panoramic view in all of Chania: the Old Town, the harbour, the Akrotiri peninsula and the White Mountains. Hotels here are typically larger boutique properties in converted neoclassical buildings — quieter and more spacious than Old Town options. Halepa suits travelers who want elegance without the harbour noise.",
          el: "Η Αλεπού βρίσκεται 15 λεπτά ανατολικά της Παλιάς Πόλης. Ήταν η διπλωματική συνοικία τον 19ο αιώνα. Ο Ελευθέριος Βενιζέλος γεννήθηκε εδώ. Οι Τάφοι Βενιζέλου προσφέρουν την ωραιότερη πανοραμική θέα των Χανίων. Τα ξενοδοχεία είναι μεγαλύτερα, σε νεοκλασικά κτίρια. Η Αλεπού ταιριάζει σε ταξιδιώτες που θέλουν κομψότητα χωρίς τον θόρυβο του λιμανιού.",
        }
      },
      {
        title: { en: "5. Nea Chora: The most family-friendly seafront neighborhood", el: "5. Νέα Χώρα: Η πιο οικογενειακή παραλιακή γειτονιά" },
        content: {
          en: "Nea Chora sits immediately west of the Old Town and has the atmosphere of a proper Greek seaside neighbourhood. It has its own small marina, a good stretch of sandy beach with calm water — the closest organized beach to the Old Town, ten minutes' walk — and a beachfront promenade lined with seafood tavernas. Parking is much easier here, the streets are wide and flat — ideal for families with pushchairs. The Sunday morning fish market at the harbour is one of the most authentically Cretan experiences in the city. Hotels range from family studios to mid-range hotels. Prices are generally lower than in the Old Town.",
          el: "Η Νέα Χώρα βρίσκεται δυτικά της Παλιάς Πόλης. Έχει δική της μαρίνα, αμμώδη παραλία και παραλιακό πεζόδρομο με ταβέρνες. Η κυριακάτικη ψαραγορά είναι από τις πιο αυθεντικές κρητικές εμπειρίες. Τα ξενοδοχεία είναι πιο οικονομικά από την Παλιά Πόλη.",
        }
      },
      {
        title: { en: "6. The Akrotiri Peninsula: The hidden world across the bay", el: "6. Χερσόνησος Ακρωτήρι: Ο κρυφός κόσμος απέναντι από τον κόλπο" },
        content: {
          en: "The Akrotiri peninsula curves around the northeastern side of Chania Bay. Most visitors look at it without ever crossing to it — a significant mistake. Gouverneto Monastery (1537) guards the entrance to the Avlaki Gorge and the path to the Cave of Arkoudospilia and the ruined Katholiko Monastery — the oldest monastery on Crete, built into a cliff face in the 11th century. The walk through the gorge is one of the most remarkable short hikes in Crete. Agia Triada Monastery (1612) has a Venetian-style facade and produces award-winning olive oil. Stavros Beach — the lagoon where Anthony Quinn danced the Sirtaki in Zorba the Greek — is a perfectly sheltered bay. Seitan Limania — also known as Stefanou Beach — is the most dramatic and photographed beach in the Chania region: three narrow coves with sheer white marble cliffs and turquoise water. Arrive before 9am in summer. Staying on the peninsula suits travelers who want quiet, nature and the monastery circuit.",
          el: "Η χερσόνησος Ακρωτήρι αγκαλιάζει τον κόλπο των Χανίων. Οι περισσότεροι τη βλέπουν χωρίς να την επισκεφθούν — μεγάλο λάθος. Η Μονή Γουβερνέτου και το ερειπωμένο Καθολικό Μοναστήρι προσφέρουν μια από τις ωραιότερες πεζοπορίες της Κρήτης. Η Μονή Αγίας Τριάδας παράγει βραβευμένο ελαιόλαδο. Η παραλία Σταυρός είναι η λιμνοθάλασσα του Ζορμπά. Τα Σεϊτάν Λιμάνια είναι η πιο εντυπωσιακή παραλία της περιοχής.",
        }
      },
      {
        title: { en: "7. Day Trips from Chania: The Best of Western Crete", el: "7. Ημερήσιες Εκδρομές από τα Χανιά: Η Δυτική Κρήτη" },
        content: {
          en: "Chania is the finest base for exploring western Crete. Balos Lagoon (55 km, 1h15min) — a sweeping double lagoon of white sand and turquoise shallows, one of the finest beaches in Europe. Elafonisi (75 km, 1h30min) — the pink-sand lagoon, beloved for its Caribbean quality. Falasarna (59 km, 1h) — golden sand on the exposed west coast with the ruins of ancient Phalassarna, one of the finest sunset beaches in Greece. Samaria Gorge (45 km to Omalos) — Europe's longest walkable gorge, 16 km from Xyloskalo to Agia Roumeli, one of the most rewarding day hikes in Greece. Aptera Ancient City (15 km, 20min) — the most undervisited archaeological site in western Crete, with a Roman theatre and sweeping views over Souda Bay. Therisso Gorge (15 km, 25min) — a short accessible walking route and traditional tavernas in the mountain village.",
          el: "Τα Χανιά είναι η καλύτερη βάση για τη δυτική Κρήτη. Μπάλος — διπλή λιμνοθάλασσα με λευκή άμμο. Ελαφονήσι — ροζ άμμος. Φαλάσαρνα — χρυσαφένια αμμουδιά, ωραιότερο ηλιοβασίλεμα. Φαράγγι Σαμαριάς — 16 χλμ., η ωραιότερη πεζοπορία. Αρχαία Απτέρα — το πιο υποτιμημένο αρχαιολογικό μνημείο. Φαράγγι Θέρισου — σύντομη πεζοπορία και παραδοσιακές ταβέρνες.",
        }
      },
    ],
    faq: [
      {
        q: { en: "Which neighborhood is best for a first visit to Chania?", el: "Ποια γειτονιά είναι καλύτερη για πρώτη επίσκεψη στα Χανιά;" },
        a: { en: "The Venetian harbour area and Kastelli give you the most extraordinary experience — the harbour at sunrise, the medieval lanes, the historic density. Splantzia is the best alternative for a more local daily rhythm. For families who want a beach on their doorstep, Nea Chora solves the logistics most effectively.", el: "Το ενετικό λιμάνι και το Καστέλλι προσφέρουν την πιο εντυπωσιακή εμπειρία. Η Σπλάντζια είναι η καλύτερη εναλλακτική. Για οικογένειες, η Νέα Χώρα είναι η πιο πρακτική επιλογή." }
      },
      {
        q: { en: "Do I need a car in Chania?", el: "Χρειάζομαι αυτοκίνητο στα Χανιά;" },
        a: { en: "For the Old Town and immediate city, no — everything is walkable. For day trips to Balos, Elafonisi, Samaria, Falasarna, the Akrotiri beaches and Aptera, a car is strongly recommended. Renting for two or three days is the most efficient approach.", el: "Για την Παλιά Πόλη, όχι. Για εκδρομές σε Μπάλο, Ελαφονήσι, Σαμαριά, το αυτοκίνητο είναι απαραίτητο." }
      },
      {
        q: { en: "How many days do I need in Chania?", el: "Πόσες μέρες χρειάζομαι στα Χανιά;" },
        a: { en: "A minimum of three nights allows one day in the Old Town, one day for the Akrotiri peninsula, and one day trip to Balos or Elafonisi. Four nights is more comfortable and allows the Samaria Gorge. Five nights transforms Chania into a proper base for western Crete.", el: "Τρεις νύχτες είναι το ελάχιστο. Τέσσερις νύχτες είναι πιο άνετες. Πέντε νύχτες κάνουν τα Χανιά πραγματική βάση για τη δυτική Κρήτη." }
      },
      {
        q: { en: "Is the Venetian harbour area noisy at night?", el: "Έχει θόρυβο το ενετικό λιμάνι τη νύχτα;" },
        a: { en: "Yes, particularly on the inner harbour waterfront. Rooms directly facing the promenade can be noisy until late. Choose accommodation one or two lanes back from the waterfront for peace.", el: "Ναι, ειδικά στην προκυμαία. Επιλέξτε δωμάτιο ένα ή δύο στενά πίσω από το λιμάνι." }
      },
      {
        q: { en: "When is the best time to visit Chania?", el: "Ποια είναι η καλύτερη εποχή για τα Χανιά;" },
        a: { en: "May through June and September through October are optimal. The sea is warm from mid-May, the city is lively without peak intensity. July and August bring full capacity — book months in advance. Winter is also rewarding with lower prices and the harbour without crowds.", el: "Μάιος-Ιούνιος και Σεπτέμβριος-Οκτώβριος. Ιούλιος-Αύγουστος έχει πολύ κόσμο. Ο χειμώνας είναι επίσης όμορφος." }
      },
      {
        q: { en: "What are the most undervisited things to do near Chania?", el: "Ποια είναι τα πιο υποτιμημένα αξιοθέατα κοντά στα Χανιά;" },
        a: { en: "The Gouverneto Monastery and Katholiko gorge walk on the Akrotiri; the ancient ruins of Aptera above Souda Bay; the Venetian quarry marks at Stavros beach; the Etz Hayyim Synagogue in Splantzia; the Sunday fish market at Nea Chora harbour; and the path along the outer base of the Venetian sea walls at Koum Kapi at sunrise.", el: "Η Μονή Γουβερνέτου, η Αρχαία Απτέρα, τα ενετικά λατομεία στον Σταυρό, η Συναγωγή Ετς Χαγίμ, η ψαραγορά Νέας Χώρας και ο περίπατος στα ενετικά τείχη στο Κουμ Καπί." }
      },
    ],
    seo: {
      title: {
        en: "Where to Stay in Chania | Best Neighborhoods & Hotels | GoGreeceNow",
        el: "Πού να Μείνεις στα Χανιά | Καλύτερες Γειτονιές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best neighborhoods to stay in Chania — from the iconic Venetian harbour and the bohemian Splantzia quarter to the diplomatic Halepa, the local Nea Chora seafront and the wild Akrotiri peninsula. The most complete guide to Chania hotels, hidden beaches and areas for every type of traveler.",
        el: "Βρείτε τις καλύτερες γειτονιές για διαμονή στα Χανιά — από το εμβληματικό ενετικό λιμάνι και την μποέμικη συνοικία Σπλάντζια έως τη διπλωματική Αλεπού, το τοπικό παραλιακό μέτωπο της Νέας Χώρας και την άγρια χερσόνησο Ακρωτήρι."
      }
    },
  },
  {
    slug: "parga",
    name: "Where to Stay in Parga & Epirus",
    place: "Parga — Epirus, Northwestern Greece",
    info: {
      en: "Find the best places to stay in Parga — from the harbour Old Town and Valtos to Lichnos, Sarakiniko and Anthousa — plus the complete guide to Epirus: Sivota, Preveza, Ioannina, the Zagori villages, the Acheron River, Arta, the Tzoumerka mountains and the Paxos islands. The most complete guide to Parga and northwestern Greece.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή στην Πάργα — από την παλιά πόλη του λιμανιού και τον Βάλτο έως τον Λίχνο, το Σαρακίνικο και την Ανθούσα — συν τον πλήρη οδηγό για την Ήπειρο: Σύβοτα, Πρέβεζα, Ιωάννινα, Ζαγόρι, Αχέροντα, Άρτα, Τζουμέρκα και Πάξο.",
    },
    image: "/images/parga.webp",
    badge: "Featured stay",
    overview: {
      en: "Parga is the most beautiful coastal town on the Greek mainland — a pastel-coloured harbour amphitheatrically built beneath a Venetian castle, with turquoise water, ancient olive groves tumbling to the shore and a series of beaches that rival the best of the Ionian Islands — and it is also the perfect base for one of the most extraordinary and least-explored regions in all of Greece: the mountains, rivers, stone villages, mythological landscapes and extraordinary coastline of Epirus.",
      el: "Η Πάργα είναι η ωραιότερη παραλιακή πόλη της ηπειρωτικής Ελλάδας — ένα παστέλ λιμάνι χτισμένο αμφιθεατρικά κάτω από ένα ενετικό κάστρο, με τιρκουάζ νερά, αρχαίους ελαιώνες και παραλίες που ανταγωνίζονται τα καλύτερα νησιά του Ιονίου — και ταυτόχρονα η τέλεια βάση για μία από τις πιο εντυπωσιακές και ανεξερεύνητες περιοχές της Ελλάδας: την Ήπειρο.",
    },
    description: {
      en: "Relaxing stays, beautiful views and authentic hospitality — organized in a clear and practical way.",
      el: "Χαλαρωτικές διαμονές, όμορφη θέα και αυθεντική φιλοξενία — οργανωμένα με καθαρό και πρακτικό τρόπο.",
    },
    features: {
      en: ["Parga Old Town (Harbour & Castle)", "Valtos (Main Beach)", "Lichnos & Sarakiniko (Best Beaches)", "Anthousa & Countryside", "Sivota (Hidden Coves)", "Ammoudia & Acheron", "Preveza & Nikopolis", "Ioannina & Lake", "Zagori Villages", "Tzoumerka Mountains", "Paxos & Antipaxos"],
      el: ["Παλιά Πόλη Πάργας (Λιμάνι & Κάστρο)", "Βάλτος (Κεντρική Παραλία)", "Λίχνος & Σαρακίνικο (Καλύτερες Παραλίες)", "Ανθούσα & Εξοχή", "Σύβοτα (Κρυφοί Κολπίσκοι)", "Αμμουδιά & Αχέροντας", "Πρέβεζα & Νικόπολη", "Ιωάννινα & Λίμνη", "Ζαγόρι", "Τζουμέρκα", "Παξοί & Αντίπαξοι"],
    },
    sections: [
      {
        title: { en: "1. Parga Old Town and Harbour: The most romantic base in northwestern Greece", el: "1. Παλιά Πόλη Πάργας και Λιμάνι: Η πιο ρομαντική βάση" },
        content: {
          en: "Parga is amphitheatrically built on a rocky promontory above a bay of exceptional beauty, its pastel-painted houses climbing the hillside from the waterfront to the Venetian castle at the summit. The effect — particularly at dusk when the castle walls catch the last light and the harbour fills with the smell of grilling fish — is unlike any other town on the mainland coast. The Old Town's cobblestone alleys and flower-hung archways are best explored in the morning or after sunset. The Venetian Castle at the summit is one of the defining views of northwestern Greece. The island of Panagia in the harbour is reached by a short rowing boat and contains a small Byzantine chapel. Krioneri Beach occupies the sheltered cove below the Old Town. Hotels range from boutique rooms with harbour-view terraces to mid-range hillside properties. Parga Inn Suites and Racconto Boutique Design Hotel are among the most praised. Car access in the Old Town is very limited — park outside the centre.",
          el: "Η Πάργα είναι χτισμένη αμφιθεατρικά σε ένα βραχώδες ακρωτήρι, με πολύχρωμα σπίτια να σκαρφαλώνουν από το λιμάνι έως το ενετικό κάστρο. Το Ενετικό Κάστρο προσφέρει μία από τις ωραιότερες θέες. Το νησάκι Παναγιά με το βυζαντινό εκκλησάκι είναι προσβάσιμο με βαρκάδα. Η παραλία Κρυονέρι βρίσκεται κάτω από την παλιά πόλη. Η πρόσβαση με αυτοκίνητο είναι περιορισμένη.",
        }
      },
      {
        title: { en: "2. Valtos: The great beach below the castle", el: "2. Βάλτος: Η μεγάλη παραλία κάτω από το κάστρο" },
        content: {
          en: "Valtos is the largest and most accessible beach in the Parga area — a long arc of fine golden sand stretching for nearly three kilometres directly below the Venetian castle. The combination of that view with the quality of the water makes Valtos one of the most photographed beach scenes in Greece. The beach is organised with sunbeds, beach bars and watersports. The water is calm and the depth increases gradually — good for families. Reach it by water taxi from the harbour (€2, 4-5 minutes) or by walking 15-20 minutes around the headland. Several hotels sit on the hillside above Valtos with terraces looking directly over the bay.",
          el: "Ο Βάλτος είναι η μεγαλύτερη παραλία της Πάργας — μια μακριά αμμώδης ακτή κάτω από το κάστρο. Οργανωμένη με ξαπλώστρες, beach bars και θαλάσσια σπορ. Προσβάσιμη με water taxi από το λιμάνι (€2) ή με τα πόδια σε 15-20 λεπτά.",
        }
      },
      {
        title: { en: "3. Lichnos: The finest beach in the Parga area", el: "3. Λίχνος: Η ωραιότερη παραλία της Πάργας" },
        content: {
          en: "Three kilometres south of Parga, Lichnos is widely considered the most beautiful beach in the immediate Parga area. A deep, sheltered bay of sand and fine pebble surrounded on three sides by pine-forested hillsides, with water that moves from turquoise at the shoreline through multiple shades of blue. The sea caves at the left end of Lichnos are explorable by pedalo, kayak or swimming. Enjoy Lichnos Bay Village is the most complete resort property on the bay. Hidden gem: the path beyond the sea caves leads to a series of small, unnamed coves accessible only on foot or by kayak.",
          el: "Ο Λίχνος, τρία χιλιόμετρα νότια της Πάργας, θεωρείται η ωραιότερη παραλία της περιοχής. Οι θαλάσσιες σπηλιές στο αριστερό άκρο είναι εξερευνήσιμες με καγιάκ. Κρυφό διαμάντι: τα μικρά απρόσιτα σπήλαια πέρα από τις σπηλιές.",
        }
      },
      {
        title: { en: "4. Sarakiniko: The wild and dramatic beach south of Parga", el: "4. Σαρακίνικο: Η άγρια παραλία νότια της Πάργας" },
        content: {
          en: "Sarakiniko lies five kilometres south of Lichnos, at the end of a winding road through an ancient olive grove. The beach is wider and more exposed, with a backdrop of olive trees that come almost to the shoreline. The Paragaea Olive Oil Museum nearby documents the history of Epiriot olive oil production. Sarakiniko attracts a more local, relaxed crowd. The coastline south toward Ammoudia passes a succession of unnamed beaches that are among the most beautiful and least visited in northwestern Greece.",
          el: "Το Σαρακίνικο βρίσκεται πέντε χιλιόμετρα νότια του Λίχνου, στο τέλος ενός δρόμου μέσα από αρχαίο ελαιώνα. Το Μουσείο Ελαιολάδου Παραγωγαία κοντα εκθέτει την ιστορία της ελαιοπαραγωγής. Η ακτή νότια προς Αμμουδιά έχει διαδοχικές ανώνυμες παραλίες.",
        }
      },
      {
        title: { en: "5. Anthousa: The most atmospheric village base near Parga", el: "5. Ανθούσα: Το πιο ατμοσφαιρικό χωριό κοντά στην Πάργα" },
        content: {
          en: "Four kilometres inland from Parga, Anthousa is a remarkably beautiful and overlooked alternative base with stone houses, narrow lanes and the dramatic hilltop Ali Pasha Castle — a well-preserved Ottoman fortification with extraordinary views over the entire bay. The village has several tavernas serving proper Epiriot food. Anthousa Waterfall is a short walk through the olive grove. My Suite Boutique Hotel is one of the most consistently praised accommodation options in the wider area.",
          el: "Τέσσερα χιλιόμετρα από την Πάργα, η Ανθούσα είναι μια όμορφη εναλλακτική βάση με το Κάστρο του Αλή Πασά και θέα σε όλο τον κόλπο. Το My Suite Boutique Hotel είναι από τα πιο αγαπημένα καταλύματα.",
        }
      },
      {
        title: { en: "6. Sivota: The most beautiful hidden coastline of northwestern Greece", el: "6. Σύβοτα: Η ωραιότερη κρυφή ακτογραμμή" },
        content: {
          en: "Twenty-seven kilometres north of Parga, Sivota sits in a natural harbour surrounded by uninhabited islets and a coastline of small bays and hidden coves. The Blue Lagoon — a narrow channel between the coast and a wooded islet with luminous turquoise water — is the most photographed spot in the area. Bella Vraka Beach is accessible by wading through a shallow channel. Karavostasi Beach is the largest organised beach. Hidden gem: the abandoned hilltop village of Vrachona above Sivota — fifty ruined stone houses on a hidden plateau, linked to the mythological landscape of the Acheron.",
          el: "Είκοσι επτά χιλιόμετρα βόρεια, τα Σύβοτα έχουν ένα φυσικό λιμάνι με ακατοίκητες νησίδες. Η Μπλε Λιμνοθάλασσα είναι το πιο φωτογραφημένο σημείο. Κρυφό διαμάντι: το εγκαταλελειμμένο χωριό Βραχώνα.",
        }
      },
      {
        title: { en: "7. The Acheron River & the Necromanteion: Greece's most mythological landscape", el: "7. Αχέροντας & Νεκρομαντείο: Το πιο μυθολογικό τοπίο" },
        content: {
          en: "The Acheron River flows from springs in the mountains through the Straits of Acheron to the sea at Ammoudia. In ancient Greek mythology it was one of the five rivers of the Underworld — the River of Woe. Trekking the Acheron Gorge is the finest half-day nature experience from Parga — a walk through the gorge partly along the banks and partly wading through cold, crystal-clear water. The Necromanteion of Acheron — the Oracle of the Dead — stands on a hill above the ancient Acherousian lake. The subterranean sanctuary where the living consulted the dead is still largely intact. Standing inside the underground chamber has an effect that purely historical sites rarely achieve.",
          el: "Ο Αχέροντας ήταν ένας από τους πέντε ποταμούς του Κάτω Κόσμου. Το φαράγγι προσφέρει την ωραιότερη ημερήσια πεζοπορία. Το Νεκρομαντείο του Αχέροντα — το Μαντείο των Νεκρών — είναι ο πιο εντυπωσιακός αρχαιολογικός χώρος της Ηπείρου.",
        }
      },
      {
        title: { en: "8. Preveza and Ancient Nikopolis: The forgotten Roman city", el: "8. Πρέβεζα και Αρχαία Νικόπολη: Η ξεχασμένη ρωμαϊκή πόλη" },
        content: {
          en: "Preveza sits at the mouth of the Ambracian Gulf, 65 kilometres south of Parga. The town has a pedestrianised old town of neoclassical buildings and a harbour promenade. Ancient Nikopolis — one of the largest Roman archaeological sites in Greece — was founded by Octavian in 29 BC to commemorate his victory over Mark Antony at Actium. Its extensive remains include a theatre, stadium, nymphaeum and early Christian basilicas with extraordinary mosaic floors. The Monument of Zaloggo on a clifftop above Kassopi commemorates the 63 women of Souli who threw themselves from the cliff rather than submit to Ali Pasha.",
          el: "Η Πρέβεζα έχει μια όμορφη παλιά πόλη. Η Αρχαία Νικόπολη — από τους μεγαλύτερους ρωμαϊκούς αρχαιολογικούς χώρους — ιδρύθηκε από τον Οκταβιανό το 29 π.Χ. Το Μνημείο Ζαλόγγου τιμά τις 63 γυναίκες του Σουλίου.",
        }
      },
      {
        title: { en: "9. Arta and the Byzantine City: The most overlooked cultural destination in Epirus", el: "9. Άρτα: Ο πιο υποτιμημένος πολιτιστικός προορισμός" },
        content: {
          en: "Arta, 80 kilometres southeast of Parga, is one of the most significantly undervisited historical cities in Greece. Built on the site of ancient Ambracia — capital of Pyrrhus — Arta served as the capital of the Despotate of Epirus from 1204 to 1337. The Church of Panagia Parigoritissa (1295) is the masterpiece of late Byzantine architecture in Epirus. The Bridge of Arta over the Arachthos River is one of the most famous bridges in Greece, subject of the folk song the Ballad of the Bridge of Arta.",
          el: "Η Άρτα, 80 χιλιόμετρα νοτιοανατολικά, ήταν πρωτεύουσα του Δεσποτάτου της Ηπείρου. Η Παναγία Παρηγορήτισσα (1295) είναι αριστούργημα της βυζαντινής αρχιτεκτονικής. Το γεφύρι της Άρτας είναι από τα πιο διάσημα στην Ελλάδα.",
        }
      },
      {
        title: { en: "10. Ioannina: The city on the lake — the capital of Epirus", el: "10. Ιωάννινα: Η πόλη της λίμνης" },
        content: {
          en: "Ioannina is the capital of Epirus, 100 kilometres north of Parga — approximately 90 minutes by car. The city was the capital of Ali Pasha in the late 18th century. The Ioannina Castle at the lakeside preserves his treasury and the site of his assassination. The island of Ioannina in Lake Pamvotis — reached by a five-minute boat — has no cars, a few hundred residents, fish tavernas, and the monastery where Ali Pasha was killed. The Perama Cave on the lake's northern shore is one of the largest cave systems in Greece. Ioannina's food scene is the best in Epirus — its baklava is nationally famous. The tsipouro bars near the lake are a unique local tradition.",
          el: "Τα Ιωάννινα, 100 χιλιόμετρα βόρεια, ήταν πρωτεύουσα του Αλή Πασά. Το Κάστρο και το νησάκι της λίμνης με τη μονή όπου δολοφονήθηκε ο Αλή Πασάς είναι μοναδικά. Η γαστρονομική σκηνή είναι η καλύτερη της Ηπείρου.",
        }
      },
      {
        title: { en: "11. The Zagori Villages and Vikos Gorge: The most spectacular mountain landscape in Greece", el: "11. Ζαγόρι & Φαράγγι Βίκου: Το πιο εντυπωσιακό ορεινό τοπίο" },
        content: {
          en: "The Zagori — 46 traditional stone villages in the Pindus mountain range, two hours from Parga — is one of the most extraordinary landscapes in Greece. Vikos Gorge holds the Guinness World Record for the deepest canyon relative to its width: 900 metres deep. The Voidomatis River, claimed to be the coldest in Europe, has water of impossible transparency. The Papingo rock pools are among the most beautiful natural swimming spots in Greece. Monodendri has the finest traditional architecture in central Zagori. Papingo — the twin villages — are the most photographed. Dilofo is considered the most perfectly preserved of the 46 villages. The Kipoi stone bridges are among the finest examples of vernacular stone engineering in the Balkans.",
          el: "Το Ζαγόρι — 46 πέτρινα χωριά — είναι ένα από τα ωραιότερα ορεινά τοπία της Ελλάδας. Το Φαράγγι του Βίκου κατέχει παγκόσμιο ρεκόρ βάθους. Οι κολυμπήθρες του Πάπιγκου είναι από τα ωραιότερα φυσικά σημεία κολύμβησης. Το Δίλοφο θεωρείται το καλύτερα διατηρημένο χωριό.",
        }
      },
      {
        title: { en: "12. The Tzoumerka: The wild mountain heart of Epirus", el: "12. Τζουμέρκα: Η άγρια καρδιά της Ηπείρου" },
        content: {
          en: "The Tzoumerka mountain range rises to over 2,400 metres between Ioannina and Arta. For hikers and anyone drawn to wild, unspoiled mountain landscapes, the Tzoumerka is one of the last corners of Greece where you can walk for hours without meeting another person. Syrrako and Kalarites are the two most celebrated mountain villages — both at 1,000 metres altitude, both built in classic Epiriot stone style. The Tzoumerka-Peristeri-Arachtos Gorge National Park is a Natura 2000 site for exceptional biodiversity.",
          el: "Τα Τζουμέρκα υψώνονται πάνω από 2.400 μέτρα. Το Σύρρακο και οι Καλαρρύτες είναι τα ωραιότερα ορεινά χωριά. Ο Εθνικός Δρυμός Τζουμέρκων είναι περιοχή Natura 2000.",
        }
      },
      {
        title: { en: "13. Paxos and Antipaxos: The island day trips from Parga", el: "13. Παξοί & Αντίπαξοι: Ημερήσιες νησιωτικές εκδρομές" },
        content: {
          en: "The island of Paxos lies 15 nautical miles from Parga — a 40-minute boat crossing. Covered almost entirely in ancient olive trees, with three harbour villages — Gaios, Loggos and Lakka — completely different in character. The Blue Caves on the western coast are among the most beautiful sea cave formations in Greece. Antipaxos, a 15-minute boat ride south, has two beaches — Vrika and Voutoumi — that are among the finest in the Ionian Sea. Voutoumi with its white pebbles and turquoise water consistently appears in lists of the best beaches in Greece.",
          el: "Οι Παξοί απέχουν 40 λεπτά με πλοίο από την Πάργα. Τα γαλάζια σπήλαια και το γραφικό Γάιος είναι μοναδικά. Οι Αντίπαξοι με την παραλία Βουτούμι είναι από τις ωραιότερες της Ελλάδας.",
        }
      },
    ],
    faq: [
      {
        q: { en: "Is Parga better as a beach destination or as a base for exploring Epirus?", el: "Είναι η Πάργα καλύτερα ως παραλιακός προορισμός ή ως βάση;" },
        a: { en: "It is genuinely both. Two to three days in Parga for beaches and the Old Town covers the coastal experience. An additional two days with a car for the Acheron, Ioannina and the Zagori villages transforms the trip into one of the most varied holidays in Greece.", el: "Και τα δύο. Δύο-τρεις μέρες για παραλίες και δύο ακόμα για Αχέροντα, Ιωάννινα και Ζαγόρι." }
      },
      {
        q: { en: "Do I need a car in Parga?", el: "Χρειάζομαι αυτοκίνητο στην Πάργα;" },
        a: { en: "For the town itself, no. For Lichnos, Sivota, the Acheron, Ioannina, the Zagori and Arta — absolutely essential. Arrange a car rental for the exploration days.", el: "Για την πόλη όχι. Για Λίχνο, Σύβοτα, Αχέροντα, Ιωάννινα και Ζαγόρι — απαραίτητο." }
      },
      {
        q: { en: "When is the best time to visit Parga?", el: "Ποια είναι η καλύτερη εποχή;" },
        a: { en: "May, June and September are ideal. The sea is warm, the beaches are active without peak crowds. July and August bring full capacity. The Zagori is most beautiful in late spring and October.", el: "Μάιος, Ιούνιος και Σεπτέμβριος. Το Ζαγόρι είναι ωραιότερο την άνοιξη και τον Οκτώβριο." }
      },
      {
        q: { en: "How do I get to Parga?", el: "Πώς φτάνω στην Πάργα;" },
        a: { en: "Preveza/Aktion Airport (PVK) is 65 km away (55 min). Ioannina Airport (IOA) is 103 km (1h20min). From Athens by car via the E65 through Arta takes about 4h30min. By ferry: Corfu to Igoumenitsa (1.5h fast ferry), then 45 minutes south by car.", el: "Αεροδρόμιο Πρέβεζας 65 χλμ., Ιωαννίνων 103 χλμ. Από Αθήνα 4,5 ώρες με αυτοκίνητο." }
      },
      {
        q: { en: "Is Parga suitable for families?", el: "Είναι η Πάργα κατάλληλη για οικογένειες;" },
        a: { en: "Exceptionally so. The calm water at Krioneri, organised beaches at Valtos and Lichnos, boat trips to Paxos and the Acheron river walk are all well-suited to families. The main caution is peak-season parking and traffic.", el: "Εξαιρετικά. Ηρεμα νερά, οργανωμένες παραλίες, εκδρομές σε Παξούς και Αχέροντα." }
      },
      {
        q: { en: "Which is better as a base — Parga or Sivota?", el: "Ποιο είναι καλύτερο — Πάργα ή Σύβοτα;" },
        a: { en: "Both have strong cases. Parga has more choice, better infrastructure and the historic Old Town. Sivota is quieter and has the most beautiful immediately local coastline. Experienced travelers increasingly recommend Sivota as a primary base with Parga as a day trip.", el: "Η Πάργα έχει περισσότερες επιλογές. Τα Σύβοτα είναι πιο ήσυχα. Έμπειροι ταξιδιώτες προτείνουν Σύβοτα με Πάργα για ημερήσια." }
      },
    ],
    seo: {
      title: {
        en: "Where to Stay in Parga & Epirus | Best Areas, Hidden Beaches & Regional Guide | GoGreeceNow",
        el: "Πού να Μείνεις στην Πάργα & Ήπειρο | Καλύτερες Περιοχές & Κρυφές Παραλίες | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay in Parga — from the harbour Old Town and Valtos to Lichnos, Sarakiniko and Anthousa — plus the complete guide to Epirus: Sivota, Preveza, Ioannina, the Zagori villages, the Acheron River, Arta, the Tzoumerka mountains and the Paxos islands. The most complete guide to Parga and northwestern Greece.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή στην Πάργα — από την παλιά πόλη του λιμανιού και τον Βάλτο έως τον Λίχνο, το Σαρακίνικο και την Ανθούσα — συν τον πλήρη οδηγό για την Ήπειρο: Σύβοτα, Πρέβεζα, Ιωάννινα, Ζαγόρι, Αχέροντα, Άρτα, Τζουμέρκα και Παξούς."
      }
    },
  },
  {
    slug: "delphi",
    name: "Where to Stay in Delphi & Central Greece",
    place: "Delphi — Phocis, Central Greece",
    info: {
      en: "Find the best places to stay near Delphi — from the village itself with its UNESCO ruins and Gulf of Corinth views to chic mountain Arachova, the neoclassical harbour of Galaxidi, the Venetian gem of Nafpaktos, the mountain wilderness of Orini Nafpaktia and the Rio-Antirrion Bridge gateway to Patras. The most complete guide to staying in Delphi and central Greece.",
      el: "Βρείτε τα καλύτερα μέρη για διαμονή κοντά στους Δελφούς — από το ίδιο το χωριό με τα μνημεία UNESCO και τη θέα στον Κορινθιακό έως την κοσμοπολίτικη Αράχοβα, το νεοκλασικό λιμάνι του Γαλαξειδιού, τη βενετσιάνικη Ναύπακτο, την ορεινή Ναυπακτία και το Ρίο-Αντίρριο.",
    },
    image: "/images/delphi.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay near Delphi shapes the entire character of the experience — from the village itself, perched on the slopes of Parnassus directly above the most sacred site in the ancient world, to the cosmopolitan mountain resort of Arachova ten minutes away, the neoclassical maritime charm of Galaxidi on the Gulf of Corinth, the extraordinary Venetian harbour of Nafpaktos across the water, and the wild mountain wilderness of Orini Nafpaktia that begins where the olive groves of the valley end.",
      el: "Η επιλογή διαμονής κοντά στους Δελφούς καθορίζει τον χαρακτήρα του ταξιδιού — από το ίδιο το χωριό στις πλαγιές του Παρνασσού έως την κοσμοπολίτικη Αράχοβα, το Γαλαξείδι, τη βενετσιάνικη Ναύπακτο και την άγρια ορεινή Ναυπακτία.",
    },
    description: {
      en: "Relaxing stays, beautiful views and authentic hospitality — organized in a clear and practical way.",
      el: "Χαλαρωτικές διαμονές, όμορφη θέα και αυθεντική φιλοξενία — οργανωμένα με καθαρό και πρακτικό τρόπο.",
    },
    features: {
      en: ["Delphi Village (UNESCO & Views)", "Arachova (Mountain & Ski)", "Galaxidi (Harbour & Seafood)", "Itea (Coast & Convenience)", "Nafpaktos (Venetian Gem)", "Orini Nafpaktia (Wild Mountains)", "Rio-Antirrion & Patras (Gateway West)", "Hosios Loukas (UNESCO Monastery)", "Corycian Cave (Mountain Hike)", "Mornos Lake & Trizonia Island (Hidden Gems)"],
      el: ["Δελφοί (UNESCO & Θέα)", "Αράχοβα (Ορεινή & Σκι)", "Γαλαξείδι (Λιμάνι & Θαλασσινά)", "Ιτέα (Ακτή & Ευκολία)", "Ναύπακτος (Βενετσιάνικο Κόσμημα)", "Ορεινή Ναυπακτία (Άγρια Βουνά)", "Ρίο-Αντίρριο & Πάτρα", "Όσιος Λουκάς (Μονή UNESCO)", "Κωρύκειο Άντρο (Ορεινή Πεζοπορία)", "Λίμνη Μόρνου & Τριζόνια"],
    },
    sections: [
      {
        title: { en: "1. Delphi Village: The most atmospheric base — and the key to seeing the site at its best", el: "1. Δελφοί: Η πιο ατμοσφαιρική βάση" },
        content: {
          en: "Modern Delphi village is a small settlement built immediately adjacent to the archaeological zone on the same mountainside. Its single main street is lined with hotels, restaurants and souvenir shops, but its advantage is unique: it is within ten minutes' walk of the site entrance and the museum, and it looks directly south over the Gulf of Corinth. The view from south-facing hotel balconies — the entire valley of Phocis filled with olive trees stretching to the sea — is one of the finest in Greece. The crucial advantage of staying overnight is early morning access: day-trip buses from Athens arrive from 10am, and the Sacred Way becomes crowded by midday. Visitors staying in the village can walk to the site from 8am and have the ruins almost entirely to themselves for two hours. Kastalia Boutique Hotel is the most consistently praised boutique property. Amalia Hotel Delphi is the largest with panoramic Gulf views. Hidden gem: the Museum of Angelos and Eva Sikelianos at the western end of the main street, telling the story of the revival of the Delphic Games.",
          el: "Το χωριό των Δελφών βρίσκεται ακριβώς δίπλα στον αρχαιολογικό χώρο. Η θέα προς τον Κορινθιακό είναι από τις ωραιότερες στην Ελλάδα. Το πλεονέκτημα της διαμονής εδώ είναι η πρωινή πρόσβαση στον χώρο πριν φτάσουν τα πούλμαν από Αθήνα. Το Kastalia Boutique Hotel και το Amalia Hotel Delphi είναι από τα καλύτερα καταλύματα. Κρυφό διαμάντι: το Μουσείο Σικελιανού.",
        }
      },
      {
        title: { en: "2. The Archaeological Site: What to see and how to experience it", el: "2. Ο Αρχαιολογικός Χώρος: Τι να δείτε" },
        content: {
          en: "The UNESCO-listed site requires at minimum three hours — four including the museum. The Sacred Way winds upward between foundations of votive offerings. The Athenian Treasury is the best-preserved building. The Temple of Apollo is the spiritual heart, where the Pythia gave her prophecies. The Theatre seats 5,000 with a view over the valley. The Stadium at the top is one of the best-preserved ancient stadia in Greece. The Tholos at the Sanctuary of Athena Pronaia — below the main site — is the most reproduced image of Delphi. The Castalian Spring still flows from the cliff face. The Archaeological Museum is outstanding — its masterpiece is the Bronze Charioteer.",
          el: "Ο χώρος UNESCO απαιτεί τουλάχιστον τρεις ώρες. Η Ιερά Οδός, ο Θησαυρός των Αθηναίων, ο Ναός του Απόλλωνα, το Θέατρο και το Στάδιο είναι τα κυριότερα σημεία. Ο Θόλος στο ιερό της Αθηνάς Προναίας είναι η πιο φωτογραφημένη εικόνα. Το Αρχαιολογικό Μουσείο φιλοξενεί τον περίφημο Ηνίοχο.",
        }
      },
      {
        title: { en: "3. Arachova: The most cosmopolitan mountain village in Greece", el: "3. Αράχοβα: Το πιο κοσμοπολίτικο ορεινό χωριό" },
        content: {
          en: "Ten minutes east of Delphi at 970 metres on Parnassus, Arachova is the ski resort capital of Greece in winter and a cooler, quieter mountain retreat in summer. Its main street is lined with shops selling local products — Arachova wine, formaella cheese, honey, trahanas. The clock tower of Agios Georgios is the landmark. The village has a lively evening scene with excellent tavernas and cocktail bars. Anemolia Mountain Resort is the most complete luxury hotel. Mons Arachova Hotel is the most central mid-range option. The Parnassus Ski Centre above Arachova (25 km) has 24 pistes. Arachova suits travelers who want atmosphere and a lively evening scene alongside the archaeological experience.",
          el: "Η Αράχοβα, 10 λεπτά ανατολικά, είναι η πρωτεύουσα του σκι τον χειμώνα. Το καλοκαίρι είναι πιο ήσυχη και δροσερή. Τοπικά προϊόντα: κρασί, φορμαέλλα, μέλι. Το Anemolia Mountain Resort είναι το καλύτερο ξενοδοχείο. Ιδανική για όσους θέλουν ζωντανή βραδινή ατμόσφαιρα.",
        }
      },
      {
        title: { en: "4. The Corycian Cave: The first oracle — and one of Greece's most extraordinary hikes", el: "4. Κωρύκειο Άντρο: Το πρώτο μαντείο" },
        content: {
          en: "High on Parnassus at 1,370 metres, the Corycian Cave is one of the most remarkable and least-visited significant sites in Greece. A vast limestone cavern over 100 metres long, sacred to Pan and the Nymphs from prehistoric times, it is considered the earliest oracle site in the Parnassus region. The cave is reached by car via the ski centre road, or by a magnificent 3.5-hour hiking trail from the Delphi archaeological site through the fir forest. Thousands of votive objects spanning three thousand years were found here, displayed in the Delphi museum. Standing inside the cave connects you to a spiritual tradition that predates the sanctuary of Apollo below.",
          el: "Το Κωρύκειο Άντρο, στα 1.370 μέτρα, είναι μια ασβεστολιθική σπηλιά αφιερωμένη στον Πάνα. Προσβάσιμο με αυτοκίνητο ή με 3,5 ώρες πεζοπορίας από τους Δελφούς. Χιλιάδες αφιερώματα τριών χιλιετιών βρέθηκαν εδώ.",
        }
      },
      {
        title: { en: "5. Hosios Loukas Monastery: The most important Byzantine building in central Greece", el: "5. Όσιος Λουκάς: Το σημαντικότερο βυζαντινό μνημείο" },
        content: {
          en: "Forty-five kilometres from Delphi, the Monastery of Hosios Loukas is one of only three Byzantine monuments in Greece on the UNESCO World Heritage List. Its Katholikon preserves original golden mosaics of the Pantokrator, the Resurrection and individual saints — among the finest surviving examples of middle Byzantine religious art. The crypt preserves frescoes of extraordinary delicacy. The Church of the Theotokos adjacent is slightly earlier. Most commonly visited as a stop between Athens and Delphi, it deserves more time than most visitors give it.",
          el: "Η Μονή Οσίου Λουκά, 45 χλμ. από τους Δελφούς, είναι ένα από τα τρία βυζαντινά μνημεία UNESCO στην Ελλάδα. Τα χρυσαφιά ψηφιδωτά του Καθολικού είναι από τα ωραιότερα της βυζαντινής τέχνης.",
        }
      },
      {
        title: { en: "6. Galaxidi: The most beautiful harbour town in central Greece", el: "6. Γαλαξείδι: Το ωραιότερο λιμάνι της κεντρικής Ελλάδας" },
        content: {
          en: "Galaxidi, 40 km west of Delphi on the Gulf of Corinth, was one of the great maritime cities of 19th-century Greece. Its neoclassical mansions and sea captains' houses are among the finest in Greece. The Maritime Museum documents the town's remarkable shipping history. The harbour, divided between the old inner port and the new marina, is lined with tavernas and cafés. Ganimede Hotel in a restored 19th-century captain's house is the most consistently recommended accommodation. Galaxidi is also famous for the Flour War Carnival on Clean Monday.",
          el: "Το Γαλαξείδι ήταν μια από τις μεγάλες ναυτικές πόλεις του 19ου αιώνα. Τα νεοκλασικά αρχοντικά του είναι από τα ωραιότερα στην Ελλάδα. Το Ganimede Hotel στεγάζεται σε ένα αναπαλαιωμένο καπετανόσπιτο. Διάσημο για τον πόλεμο του αλευριού την Καθαρά Δευτέρα.",
        }
      },
      {
        title: { en: "7. Itea: The most convenient coastal base below Delphi", el: "7. Ιτέα: Η πιο βολική παραθαλάσσια βάση" },
        content: {
          en: "Itea is the port town at the foot of the olive-grove valley below Delphi — ten kilometres downhill, fifteen minutes by car. It is a working port town with a long waterfront promenade, fish tavernas, a beach and unpretentious daily Greek life. The sunset from Itea's waterfront is one of those understated pleasures that rewards travelers without expectations. Hotels are modest and affordable — the most economical base with reasonable access to the site.",
          el: "Η Ιτέα είναι το λιμάνι στους πρόποδες της κοιλάδας, 10 χλμ. κάτω από τους Δελφούς. Έχει μακρύ παραλιακό πεζόδρομο, ταβέρνες και παραλία. Τα ξενοδοχεία είναι οικονομικά.",
        }
      },
      {
        title: { en: "8. Nafpaktos: The most extraordinary Venetian town in western Greece", el: "8. Ναύπακτος: Το πιο εντυπωσιακό βενετσιάνικο λιμάνι" },
        content: {
          en: "Nafpaktos lies 60 km west of Delphi — one hour through the olive grove valley. Its perfectly circular Venetian harbour ringed by massive sea walls is one of the most photographed harbour scenes in Greece. The statue of Miguel de Cervantes commemorates the 1571 Battle of Lepanto, fought just offshore. The Castle of Nafpaktos is one of the best-preserved medieval fortifications in Greece, entirely walkable from harbour to summit. Hotels include waterfront properties and rooms in the old town. Nafpaktos is one of the most overlooked significant destinations in mainland Greece.",
          el: "Η Ναύπακτος, 60 χλμ. δυτικά, έχει το πιο εντυπωσιακό βενετσιάνικο λιμάνι. Το άγαλμα του Θερβάντες τιμά τη Ναυμαχία της Ναυπάκτου (1571). Το Κάστρο είναι από τα καλύτερα διατηρημένα στην Ελλάδα.",
        }
      },
      {
        title: { en: "9. Orini Nafpaktia: The wild mountain world above the Gulf", el: "9. Ορεινή Ναυπακτία: Ο άγριος ορεινός κόσμος" },
        content: {
          en: "Rising behind Nafpaktos into the southern Pindus, Orini Nafpaktia is one of the most extraordinary and least-known mountain landscapes in Greece — dense fir and beech forests, deep gorges, stone-built villages and a network of old stone-arched bridges built by 18th and 19th-century masons. The Evinos River flows through the heart of the region. The villages — Ano Chora, Kato Chora, Ampelakiotissa, Platanos — maintain traditional hospitality. The Grammeni Oxia area at 1,300 metres has the southernmost beech forest in Europe. The drive from Nafpaktos into these mountains is one of the finest short mountain drives in central Greece.",
          el: "Η Ορεινή Ναυπακτία είναι ένα από τα πιο άγνωστα ορεινά τοπία της Ελλάδας. Πυκνά δάση, πέτρινα χωριά, παλιά γεφύρια και ο Εύηνος ποταμός είναι τα χαρακτηριστικά της. Η διαδρομή από τη Ναύπακτο είναι υπέροχη.",
        }
      },
      {
        title: { en: "10. The Rio-Antirrion Bridge and Patras: The gateway to the western Peloponnese", el: "10. Ρίο-Αντίρριο και Πάτρα: Η πύλη προς την Πελοπόννησο" },
        content: {
          en: "Twelve kilometres east of Nafpaktos, the Rio-Antirrion Bridge crosses the narrowest point of the Gulf of Corinth. At 2,880 metres, it is one of the longest cable-stayed bridges in the world, opening in 2004 for the Athens Olympics. Driving across at dusk is a genuinely dramatic experience. Patras on the Peloponnese side is Greece's third-largest city and main western port — ferries to Italy, Corfu and Kefalonia. Its neoclassical upper town, Roman Odeon, Castle and the Patras Carnival (the largest in Greece) give it genuine cultural depth. The combination of Delphi and the western Peloponnese via the bridge is one of the great classical itineraries of mainland Greece.",
          el: "Η γέφυρα Ρίο-Αντίρριο είναι από τις μεγαλύτερες καλωδιωτές γέφυρες στον κόσμο. Η Πάτρα έχει νεοκλασική άνω πόλη, Ρωμαϊκό Ωδείο και το μεγαλύτερο καρναβάλι στην Ελλάδα. Ο συνδυασμός Δελφών και Πελοποννήσου μέσω της γέφυρας είναι κλασική διαδρομή.",
        }
      },
    ],
    faq: [
      {
        q: { en: "Should I stay in Delphi village or in Arachova?", el: "Να μείνω στους Δελφούς ή στην Αράχοβα;" },
        a: { en: "Delphi village is the right choice if the archaeological site is your primary purpose — early morning access before the day-trip buses is transformative. Arachova is better for atmosphere, evening scene and restaurant choice. They are ten minutes apart by car. If staying two nights, one in each is the most complete approach.", el: "Οι Δελφοί για τον αρχαιολογικό χώρο, η Αράχοβα για ατμόσφαιρα. Απέχουν 10 λεπτά." }
      },
      {
        q: { en: "How long should I plan for Delphi?", el: "Πόσο χρόνο να προγραμματίσω για τους Δελφούς;" },
        a: { en: "A minimum of one overnight stay, arriving the evening before and visiting the site first thing. Two nights allows the addition of Arachova, Galaxidi or Hosios Loukas. Three nights opens up Nafpaktos and the Corycian Cave. The day-trip version gives a fraction of what the place offers.", el: "Τουλάχιστον μία διανυκτέρευση. Δύο νύχτες επιτρέπουν Γαλαξείδι. Τρεις νύχτες ανοίγουν Ναύπακτο." }
      },
      {
        q: { en: "Is Delphi worth visiting in winter?", el: "Αξίζει τους Δελφούς τον χειμώνα;" },
        a: { en: "Exceptionally so. The site has a quietness and atmospheric intensity that summer crowds eliminate. The light on the Phaidriades with snow on Parnassus is extraordinary. The site is open year-round. Arachova is at its most lively in ski season. Winter in Delphi is one of the best-kept secrets in Greek travel.", el: "Εξαιρετικά. Η ησυχία και το φως τον χειμώνα είναι μοναδικά. Η Αράχοβα είναι ζωντανή την περίοδο του σκι." }
      },
      {
        q: { en: "Can I visit Delphi from Athens as a day trip?", el: "Μπορώ να επισκεφθώ τους Δελφούς από Αθήνα σε μια μέρα;" },
        a: { en: "Yes — the drive takes about 2h15min via the E65 highway. But arriving as a day-tripper means arriving with every other day-tripper. If a day trip is the only option, depart by 7am to arrive at opening time. An overnight stay transforms the trip entirely.", el: "Ναι, 2 ώρες 15 λεπτά. Αλλά η διανυκτέρευση μεταμορφώνει την εμπειρία." }
      },
      {
        q: { en: "What is the best route from Delphi to the Peloponnese?", el: "Ποια είναι η καλύτερη διαδρομή από Δελφούς προς Πελοπόννησο;" },
        a: { en: "West via Nafpaktos to the Rio-Antirrion Bridge — about 1h45min to the bridge crossing. This route passes Galaxidi and Nafpaktos and is one of the most scenically varied drives in central Greece.", el: "Δυτικά μέσω Ναυπάκτου προς τη γέφυρα Ρίο-Αντίρριο — 1 ώρα 45 λεπτά." }
      },
      {
        q: { en: "Is the Parnassus Ski Centre worth visiting in summer?", el: "Αξίζει το Χιονοδρομικό Κέντρο Παρνασσού το καλοκαίρι;" },
        a: { en: "Yes, for the access it provides to the high mountain landscape and the Corycian Cave. The road from Arachova through the fir forest is remarkable, and the mountain plateau at the top is open, wild and full of wildflowers. The trail to the cave from the ski centre is significantly easier than the full ascent from Delphi.", el: "Ναι, για την πρόσβαση στο Κωρύκειο Άντρο και το ορεινό τοπίο." }
      },
    ],
    seo: {
      title: {
        en: "Where to Stay in Delphi & Central Greece | Delphi, Arachova, Galaxidi, Nafpaktos & Beyond | GoGreeceNow",
        el: "Πού να Μείνεις στους Δελφούς & Κεντρική Ελλάδα | Δελφοί, Αράχοβα, Γαλαξείδι, Ναύπακτος | GoGreeceNow"
      },
      description: {
        en: "Find the best places to stay near Delphi — from the village itself with its UNESCO ruins and Gulf of Corinth views to chic mountain Arachova, the neoclassical harbour of Galaxidi, the Venetian gem of Nafpaktos, the mountain wilderness of Orini Nafpaktia and the Rio-Antirrion Bridge gateway to Patras. The most complete guide to staying in Delphi and central Greece.",
        el: "Βρείτε τα καλύτερα μέρη για διαμονή κοντά στους Δελφούς — από το ίδιο το χωριό με τα μνημεία UNESCO και τη θέα στον Κορινθιακό έως την κοσμοπολίτικη Αράχοβα, το Γαλαξείδι, τη Ναύπακτο, την Ορεινή Ναυπακτία και τη γέφυρα Ρίο-Αντίρριο."
      }
    },
  },
  {
    slug: "thessaloniki",
    name: "Where to Stay in Thessaloniki",
    place: "Thessaloniki — Central Macedonia",
    info: {
      en: "Find the best neighborhoods to stay in Thessaloniki — from the iconic waterfront and Aristotelous Square to lively Ladadika, atmospheric Ano Poli, and the local calm of Kalamaria. A complete guide to Thessaloniki hotels and areas.",
      el: "Βρείτε τις καλύτερες γειτονιές για διαμονή στη Θεσσαλονίκη — από το εμβληματικό παραλιακό μέτωπο και την πλατεία Αριστοτέλους έως τα ζωντανά Λαδάδικα, την ατμοσφαιρική Άνω Πόλη και την ήρεμη γειτονιά της Καλαμαριάς.",
    },
    image: "/images/thessaloniki.webp",
    badge: "Featured stay",
    overview: {
      en: "Choosing where to stay in Thessaloniki shapes the entire experience — from the grand waterfront promenade and Aristotelous Square at the city's heart to the lively restored warehouses of Ladadika, the UNESCO Byzantine walls of Ano Poli and the relaxed seafront suburb of Kalamaria, each neighborhood gives you a distinctly different version of Greece's second city.",
      el: "Η επιλογή διαμονής στη Θεσσαλονίκη καθορίζει ολόκληρη την εμπειρία — από τη μεγάλη παραλιακή λεωφόρο και την πλατεία Αριστοτέλους στην καρδιά της πόλης έως τις ζωντανές αναπαλαιωμένες αποθήκες των Λαδάδικων, τα βυζαντινά τείχη μνημεία UNESCO της Άνω Πόλης και το χαλαρό παραθαλάσσιο προάστιο της Καλαμαριάς.",
    },
    description: {
      en: "Thessaloniki is the most underrated city in Greece and, for many travelers who visit both Athens and Thessaloniki, the more immediately enjoyable of the two. It is a genuine metropolitan city of one million people — four universities, a world-class food culture, Roman and Byzantine monuments woven into the daily urban fabric, a waterfront that stretches for kilometres along the Thermaic Gulf, and a nightlife and café scene that most European cities cannot match. Its culinary identity was forged by the Anatolian Greek refugees who arrived from Smyrna and Constantinople in the 1920s, and the result — bougatsa, mussels from the gulf, tsipouradika, the Modiano and Kapani markets — is richer and more varied than anywhere else in Greece. Getting your base right here is straightforward: the city is compact and largely walkable, and the choice between neighborhoods is more about atmosphere and noise level than about access to sights.",
      el: "Η Θεσσαλονίκη είναι η πιο υποτιμημένη πόλη στην Ελλάδα και, για πολλούς ταξιδιώτες που επισκέπτονται και την Αθήνα και τη Θεσσαλονίκη, η πιο άμεσα απολαυστική. Είναι μια γνήσια μητρόπολη ενός εκατομμυρίου ανθρώπων — τέσσερα πανεπιστήμια, μια παγκόσμιας κλάσης γαστρονομική κουλτούρα, ρωμαϊκά και βυζαντινά μνημεία υφασμένα στον καθημερινό ιστό της πόλης, ένα παραλιακό μέτωπο που εκτείνεται για χιλιόμετρα κατά μήκος του Θερμαϊκού Κόλπου, και μια νυχτερινή ζωή και σκηνή καφέ που οι περισσότερες ευρωπαϊκές πόλεις δεν μπορούν να ανταγωνιστούν. Η γαστρονομική της ταυτότητα διαμορφώθηκε από τους Μικρασιάτες πρόσφυγες που έφτασαν από τη Σμύρνη και την Κωνσταντινούπολη τη δεκαετία του 1920, και το αποτέλεσμα — μπουγάτσα, μύδια από τον Θερμαϊκό, τσιπουράδικα, οι αγορές Μοδιάνο και Καπάνι — είναι πιο πλούσιο και ποικιλόμορφο από οπουδήποτε αλλού στην Ελλάδα. Η επιλογή της σωστής βάσης εδώ είναι απλή: η πόλη είναι συμπαγής και σε μεγάλο βαθμό προσβάσιμη με τα πόδια, και η επιλογή μεταξύ γειτονιών έχει περισσότερο να κάνει με την ατμόσφαιρα και τα επίπεδα θορύβου παρά με την πρόσβαση στα αξιοθέατα.",
    },
    features: {
      en: ["City Centre & Waterfront (Central)", "Ladadika (Nightlife & Food)", "Ano Poli (History & Views)", "Roman Forum Area (Quiet & Cultural)", "Kalamaria (Seafront & Local)", "Walking distance to White Tower & Rotunda", "Gateway to Halkidiki, Vergina & Meteora", "Greece's food capital"],
      el: ["Κέντρο & Παραλία (Κεντρικά)", "Λαδάδικα (Νυχτερινή ζωή & Φαγητό)", "Άνω Πόλη (Ιστορία & Θέα)", "Περιοχή Ρωμαϊκής Αγοράς (Ήσυχα)", "Καλαμαριά (Παραλία & Τοπική ζωή)", "Σε απόσταση με τα πόδια από Λευκό Πύργο & Ροτόντα", "Πύλη για Χαλκιδική, Βεργίνα & Μετέωρα", "Γαστρονομική πρωτεύουσα της Ελλάδας"],
    },
    sections: [
      {
        title: { en: "1. City Centre and Waterfront: The best-connected and most convenient base", el: "1. Κέντρο και Παραλία: Η καλύτερα συνδεδεμένη και πιο βολική βάση" },
        content: {
          en: "The city centre — anchored by Aristotelous Square and running along the Nikis Avenue waterfront — is the natural base for first-time visitors and anyone who wants maximum walkability. Aristotelous Square itself is one of the grandest urban spaces in Greece: a broad, colonnaded plaza designed by the French architect Ernest Hébrard that opens directly onto the seafront. Staying within a ten-minute walk of the square puts you within easy reach of virtually every major sight in the city — the White Tower, the Roman Forum, the Arch of Galerius, the Rotunda, the Modiano and Kapani markets, the Archaeological Museum and the Museum of Byzantine Culture. The waterfront promenade, redesigned in the 2010s, runs from the old port to the White Tower and beyond, and on clear days offers unobstructed views of Mount Olympus across the Thermaic Gulf. Hotels in this area range from Thessaloniki's finest five-star addresses — the Electra Palace on Aristotelous Square is the city's most prestigious — to well-positioned mid-range and boutique options a few streets back. It is the right base for travelers who want complete convenience and a central position from which to explore the whole city on foot.",
          el: "Το κέντρο της πόλης — με επίκεντρο την πλατεία Αριστοτέλους και κατά μήκος της παραλιακής λεωφόρου Νίκης — είναι η φυσική βάση για όσους επισκέπτονται πρώτη φορά και για οποιονδήποτε θέλει να κινείται με τα πόδια. Η πλατεία Αριστοτέλους είναι ένας από τους πιο εντυπωσιακούς αστικούς χώρους στην Ελλάδα: μια ευρεία στοά που σχεδιάστηκε από τον Γάλλο αρχιτέκτονα Ερνέστ Εμπράρ και ανοίγεται απευθείας στη θάλασσα. Μένοντας σε απόσταση δέκα λεπτών με τα πόδια από την πλατεία, έχετε πρόσβαση σε όλα σχεδόν τα σημαντικά αξιοθέατα — τον Λευκό Πύργο, τη Ρωμαϊκή Αγορά, την Καμάρα, τη Ροτόντα, τις αγορές Μοδιάνο και Καπάνι, το Αρχαιολογικό Μουσείο και το Μουσείο Βυζαντινού Πολιτισμού. Ο παραλιακός πεζόδρομος, που αναδιαμορφώθηκε τη δεκαετία του 2010, εκτείνεται από το παλιό λιμάνι έως τον Λευκό Πύργο και προσφέρει ανεμπόδιστη θέα στον Όλυμπο. Τα ξενοδοχεία εδώ κυμαίνονται από τα πιο πολυτελή πεντάστερα — το Electra Palace στην πλατεία Αριστοτέλους είναι το πιο διάσημο — έως καλές επιλογές μεσαίας κατηγορίας λίγους δρόμους πιο πέρα. Είναι η κατάλληλη βάση για ταξιδιώτες που θέλουν απόλυτη άνεση και κεντρική θέση.",
        }
      },
      {
        title: { en: "2. Ladadika: The most vibrant neighborhood for food, nightlife and character", el: "2. Λαδάδικα: Η πιο ζωντανή γειτονιά για φαγητό, νυχτερινή ζωή και χαρακτήρα" },
        content: {
          en: "Ladadika sits just west of Aristotelous Square and is the most energetic and characterful neighborhood in Thessaloniki. Its name means 'oil shops' in Greek — a reference to the Ottoman-era olive oil trading district that once occupied the area — and its beautifully restored 19th-century warehouses and cobblestone streets now house the city's densest concentration of tavernas, ouzeries, bars, live music venues and boutique hotels. Egiptiou Street in particular is lined with the kind of generous meze restaurants that define Thessaloniki's food culture at its most convivial. The nightlife here continues until the early hours on weekends, which makes Ladadika one of the most exciting areas in the city to stay — and one of the noisiest. Travelers who want to be at the centre of the action, within walking distance of the old port and the city's best evening atmosphere, will find Ladadika difficult to beat. Those who value quiet evenings should choose a room on an inner courtyard or consider a base one neighborhood over. The metro station at Venizelou is a five-minute walk, connecting the area efficiently to the rest of the city.",
          el: "Τα Λαδάδικα βρίσκονται ακριβώς δυτικά της πλατείας Αριστοτέλους και είναι η πιο ενεργητική και γεμάτη χαρακτήρα γειτονιά της Θεσσαλονίκης. Το όνομά τους προέρχεται από τα ελαιοτριβεία της οθωμανικής εποχής και οι όμορφα αναπαλαιωμένες αποθήκες του 19ου αιώνα φιλοξενούν τώρα την πιο πυκνή συγκέντρωση ταβερνών, ουζερί, μπαρ, live μουσικής και boutique ξενοδοχείων. Η οδός Αιγύπτου ειδικότερα είναι γεμάτη με τα γενναιόδωρα μεζεδοπωλεία που καθορίζουν τη γαστρονομική κουλτούρα της πόλης. Η νυχτερινή ζωή συνεχίζεται έως τις πρώτες πρωινές ώρες, κάνοντας τα Λαδάδικα μια από τις πιο συναρπαστικές — και πιο θορυβώδεις — περιοχές για διαμονή. Ο σταθμός μετρό στη Βενιζέλου απέχει πέντε λεπτά με τα πόδια.",
        }
      },
      {
        title: { en: "3. Ano Poli: The historic upper town with the best views in the city", el: "3. Άνω Πόλη: Η ιστορική επάνω πόλη με την καλύτερη θέα" },
        content: {
          en: "Ano Poli — literally 'Upper City' — is the only district of Thessaloniki to survive the Great Fire of 1917 almost entirely intact, and it remains the most atmospheric and historically layered part of the city. Its steep cobblestone streets, Ottoman-era wooden houses with overhanging balconies, Byzantine churches, active monasteries and UNESCO-listed city walls create a neighborhood that feels genuinely apart from the modern metropolis below. The Trigoniou Tower at the top of the district offers what many consider the finest panoramic view in northern Greece — across the entire city, the Thermaic Gulf and, on clear days, to Mount Olympus on the horizon. Vlatadon Monastery, the birthplace of Mustafa Kemal Atatürk, and the Heptapyrgion fortress are all within walking distance. Accommodation here tends toward small guesthouses, traditional stone-built properties and boutique hotels with gardens and terraces. The main consideration is the steep hillside location: the walk down to the city centre is a pleasant twenty minutes, but the return is a genuine climb. Bus lines 22 and 23 serve the neighbourhood regularly, and taxis are the practical option for late evenings. Ano Poli suits couples, slow travelers and anyone drawn to authentic neighborhood atmosphere over urban convenience.",
          el: "Η Άνω Πόλη είναι η μοναδική συνοικία της Θεσσαλονίκης που επέζησε σχεδόν ανέπαφη από τη Μεγάλη Πυρκαγιά του 1917, και παραμένει το πιο ατμοσφαιρικό και ιστορικά πολυεπίπεδο κομμάτι της πόλης. Τα απότομα πλακόστρωτα σοκάκια, τα ξύλινα σπίτια της οθωμανικής εποχής, οι βυζαντινές εκκλησίες και τα ενεργά μοναστήρια δημιουργούν μια γειτονιά που μοιάζει αποκομμένη από τη σύγχρονη μητρόπολη. Ο Πύργος του Τριγωνίου προσφέρει αυτό που πολλοί θεωρούν την καλύτερη πανοραμική θέα στη βόρεια Ελλάδα. Τα καταλύματα εδώ είναι κυρίως μικροί ξενώνες, παραδοσιακά πέτρινα κτίρια και boutique ξενοδοχεία. Η βασική παράμετρος είναι η απότομη πλαγιά: η κάθοδος προς το κέντρο είναι είκοσι ευχάριστα λεπτά, αλλά η επιστροφή είναι πραγματική ανάβαση. Οι γραμμές λεωφορείων 22 και 23 εξυπηρετούν τη γειτονιά. Η Άνω Πόλη είναι ιδανική για ζευγάρια και ταξιδιώτες που προτιμούν την αυθεντική γειτονική ατμόσφαιρα.",
        }
      },
      {
        title: { en: "4. The Roman Forum Area: Culture, green space and a quieter central option", el: "4. Περιοχή Ρωμαϊκής Αγοράς: Πολιτισμός, πράσινο και μια πιο ήσυχη κεντρική επιλογή" },
        content: {
          en: "The area immediately around the Roman Forum — the ancient agora of Thessaloniki, still partially excavated and open in the heart of the city — is one of the most interesting and least discussed bases in the city. The pedestrianized Aristotelous Street connects this neighborhood directly to the waterfront square, and the forum itself is surrounded by green space, an Ottoman hammam and the kind of quiet that is unusual for a location this central. The Aigli Geni Hamam, a 15th-century bathhouse now operating as a restaurant, bar and cultural venue, is one of the most atmospheric spaces in Thessaloniki and is a few minutes walk from this area. It suits travelers who want centrality and proximity to the Byzantine and Roman monuments without the noise of the waterfront or Ladadika, and who prefer a calmer, more residential daily rhythm within easy reach of everything.",
          el: "Η περιοχή γύρω από τη Ρωμαϊκή Αγορά — την αρχαία αγορά της Θεσσαλονίκης, ακόμη μερικώς ανασκαμμένη και ανοιχτή στην καρδιά της πόλης — είναι μια από τις πιο ενδιαφέρουσες και λιγότερο συζητημένες βάσεις. Η πεζοδρομημένη οδός Αριστοτέλους συνδέει αυτή τη γειτονιά με την παραλία, και η ίδια η αγορά περιβάλλεται από πράσινο, ένα οθωμανικό χαμάμ και την ηρεμία που είναι ασυνήθιστη για τόσο κεντρική τοποθεσία. Το Aigli Geni Hamam, ένα λουτρό του 15ου αιώνα που λειτουργεί τώρα ως εστιατόριο και πολιτιστικός χώρος, είναι ένας από τους πιο ατμοσφαιρικούς χώρους της πόλης. Ιδανική για όσους θέλουν κεντρική θέση κοντά στα μνημεία χωρίς τον θόρυβο της παραλίας ή των Λαδάδικων.",
        }
      },
      {
        title: { en: "5. Kalamaria: The seafront suburb for a local and relaxed stay", el: "5. Καλαμαριά: Το παραθαλάσσιο προάστιο για χαλαρή και τοπική διαμονή" },
        content: {
          en: "Kalamaria sits southeast of the city centre along the Thermaic Gulf coastline and offers a completely different kind of Thessaloniki experience. It is a genuine residential suburb — one where locals live, shop and eat — with a long seafront promenade, some of the finest fish tavernas in the region along the Aretsou marina, and a relaxed pace that contrasts sharply with the density of the city centre. The Plastira Street pedestrian zone is the commercial heart of the neighbourhood, and the views from the waterfront here — looking back toward the city and out toward the open gulf — are among the clearest in the wider area. The new Line 2 metro extension, which opened in early 2026, now connects Kalamaria directly to the city centre, making this area significantly more practical as a base than it was previously. It suits travelers on longer stays, those who prefer a local neighborhood over a tourist-oriented area, and families who want easy beach and seafront access alongside connections to the city's main cultural sights.",
          el: "Η Καλαμαριά βρίσκεται νοτιοανατολικά του κέντρου κατά μήκος της ακτής του Θερμαϊκού Κόλπου και προσφέρει μια εντελώς διαφορετική εμπειρία Θεσσαλονίκης. Είναι γνήσιο προάστιο — όπου οι ντόπιοι ζουν, ψωνίζουν και τρώνε — με έναν μακρύ παραλιακό πεζόδρομο, μερικές από τις καλύτερες ψαροταβέρνες στην περιοχή κατά μήκος της μαρίνας Αρετσούς, και έναν χαλαρό ρυθμό που έρχεται σε αντίθεση με την πυκνότητα του κέντρου. Η νέα επέκταση της γραμμής 2 του μετρό, που άνοιξε στις αρχές του 2026, συνδέει πλέον την Καλαμαριά απευθείας με το κέντρο, κάνοντας αυτή την περιοχή σημαντικά πιο πρακτική ως βάση. Ιδανική για μεγαλύτερες διαμονές, οικογένειες και όσους προτιμούν μια τοπική γειτονιά.",
        }
      },
    ],
    faq: [
      {
        q: { en: "How many days do I need in Thessaloniki?", el: "Πόσες μέρες χρειάζομαι στη Θεσσαλονίκη;" },
        a: { en: "Three to four days is the ideal minimum. The first covers the central UNESCO monuments — the Rotunda, Arch of Galerius, Hagia Sophia, Agios Dimitrios — and the Archaeological Museum. The second is best spent entirely in Ano Poli. The third is for the food culture: the Modiano and Kapani markets, a proper tsipouradiko lunch and a long evening in Ladadika. If you are using Thessaloniki as a base for day trips to Vergina, Pella or Halkidiki, add at least one day per excursion.", el: "Τρεις με τέσσερις μέρες είναι το ιδανικό ελάχιστο. Η πρώτη καλύπτει τα κεντρικά μνημεία UNESCO — Ροτόντα, Καμάρα, Αγία Σοφία, Άγιο Δημήτριο — και το Αρχαιολογικό Μουσείο. Η δεύτερη αφιερώνεται εξ ολοκλήρου στην Άνω Πόλη. Η τρίτη είναι για τη γαστρονομία: τις αγορές Μοδιάνο και Καπάνι, ένα τσιπουράδικο μεσημεριανό και μια μεγάλη βραδιά στα Λαδάδικα. Αν χρησιμοποιείτε τη Θεσσαλονίκη ως βάση για εκδρομές σε Βεργίνα, Πέλλα ή Χαλκιδική, προσθέστε τουλάχιστον μία μέρα ανά εκδρομή." }
      },
      {
        q: { en: "Which neighborhood is best for a first visit to Thessaloniki?", el: "Ποια γειτονιά είναι καλύτερη για πρώτη επίσκεψη στη Θεσσαλονίκη;" },
        a: { en: "The city centre around Aristotelous Square is the strongest first base — it puts you within walking distance of every major sight and the full length of the waterfront, and gives you an immediate sense of the city's scale and character. If you have been before and want a more atmospheric stay, Ladadika and Ano Poli are the two most characterful alternatives.", el: "Το κέντρο γύρω από την πλατεία Αριστοτέλους είναι η καλύτερη πρώτη βάση — σας φέρνει σε απόσταση με τα πόδια από όλα τα σημαντικά αξιοθέατα και σας δίνει μια άμεση αίσθηση της κλίμακας και του χαρακτήρα της πόλης. Αν έχετε ξανάρθει και θέλετε πιο ατμοσφαιρική διαμονή, τα Λαδάδικα και η Άνω Πόλη είναι οι δύο πιο γεμάτες χαρακτήρα εναλλακτικές." }
      },
      {
        q: { en: "Is Thessaloniki walkable?", el: "Είναι η Θεσσαλονίκη προσβάσιμη με τα πόδια;" },
        a: { en: "Yes, for most of the city. The waterfront, city centre, Ladadika, the Roman Forum area and the lower reaches of Ano Poli are all comfortably walkable from a central base. The upper parts of Ano Poli involve significant climbing, and Kalamaria is best reached by metro or taxi. The city is significantly more compact and easier to navigate on foot than Athens.", el: "Ναι, για το μεγαλύτερο μέρος της πόλης. Η παραλία, το κέντρο, τα Λαδάδικα, η περιοχή της Ρωμαϊκής Αγοράς και τα κατώτερα τμήματα της Άνω Πόλης είναι άνετα προσβάσιμα με τα πόδια. Τα ανώτερα τμήματα της Άνω Πόλης απαιτούν αρκετή ανάβαση. Η πόλη είναι αισθητά πιο συμπαγής και εύκολη στην πλοήγηση από την Αθήνα." }
      },
      {
        q: { en: "How do I get from Thessaloniki Airport to the city centre?", el: "Πώς φτάνω από το αεροδρόμιο Θεσσαλονίκης στο κέντρο;" },
        a: { en: "The airport bus (line X1) runs directly to the city centre and stops near several central hotels. The journey takes approximately 45 minutes depending on traffic. Taxis and pre-arranged transfers are available at the arrivals hall. The metro does not yet reach the airport, though an extension is planned.", el: "Το λεωφορείο του αεροδρομίου (γραμμή Χ1) πηγαίνει απευθείας στο κέντρο και σταματά κοντά σε πολλά κεντρικά ξενοδοχεία. Η διαδρομή διαρκεί περίπου 45 λεπτά. Ταξί είναι διαθέσιμα στην αίθουσα αφίξεων. Το μετρό δεν φτάνει ακόμη στο αεροδρόμιο, αν και σχεδιάζεται επέκταση." }
      },
      {
        q: { en: "Is Thessaloniki worth visiting if I have already been to Athens?", el: "Αξίζει να επισκεφτώ τη Θεσσαλονίκη αν έχω ήδη πάει στην Αθήνα;" },
        a: { en: "Without question. Most travelers who visit both cities find Thessaloniki more immediately enjoyable — it is smaller, more navigable, considerably cheaper, and has a food culture that is widely considered the best in Greece. The Byzantine monuments are extraordinary, the waterfront is one of the finest in the Mediterranean, and the city has a genuine urban energy that Athens, for all its scale, does not quite replicate.", el: "Αναμφίβολα. Οι περισσότεροι ταξιδιώτες βρίσκουν τη Θεσσαλονίκη πιο άμεσα απολαυστική — είναι μικρότερη, πιο εύκολη στην πλοήγηση, σημαντικά φθηνότερη και έχει μια γαστρονομική κουλτούρα που θεωρείται η καλύτερη στην Ελλάδα. Τα βυζαντινά μνημεία είναι εξαιρετικά, το παραλιακό μέτωπο είναι από τα ωραιότερα στη Μεσόγειο, και η πόλη έχει μια αυθεντική αστική ενέργεια." }
      },
      {
        q: { en: "What are the best day trips from Thessaloniki?", el: "Ποιες είναι οι καλύτερες ημερήσιες εκδρομές από τη Θεσσαλονίκη;" },
        a: { en: "Vergina — site of the royal tombs of the Macedonian kings, including Philip II, father of Alexander the Great — is 75 kilometres away and one of the most important archaeological sites in Greece. Pella, the ancient capital of Macedon, is 40 kilometres to the west. Halkidiki, the three-pronged peninsula with some of the clearest water in northern Greece, begins just 70 kilometres to the southeast. Meteora is approximately three hours by car and works well as an overnight rather than a day trip.", el: "Η Βεργίνα — ο τόπος των βασιλικών τάφων των Μακεδόνων βασιλέων, συμπεριλαμβανομένου του Φιλίππου Β', πατέρα του Μεγάλου Αλεξάνδρου — απέχει 75 χιλιόμετρα και είναι ένας από τους σημαντικότερους αρχαιολογικούς χώρους στην Ελλάδα. Η Πέλλα, αρχαία πρωτεύουσα της Μακεδονίας, απέχει 40 χιλιόμετρα δυτικά. Η Χαλκιδική ξεκινά 70 χιλιόμετρα νοτιοανατολικά. Τα Μετέωρα απέχουν περίπου τρεις ώρες με αυτοκίνητο και λειτουργούν καλύτερα ως διανυκτέρευση." }
      },
    ],
    seo: {
      title: {
        en: "Where to Stay in Thessaloniki | Best Neighborhoods & Hotels | GoGreeceNow",
        el: "Πού να Μείνετε στη Θεσσαλονίκη | Καλύτερες Γειτονιές & Ξενοδοχεία | GoGreeceNow"
      },
      description: {
        en: "Find the best neighborhoods to stay in Thessaloniki — from the iconic waterfront and Aristotelous Square to lively Ladadika, atmospheric Ano Poli, and the local calm of Kalamaria. A complete guide to Thessaloniki hotels and areas.",
        el: "Βρείτε τις καλύτερες γειτονιές για διαμονή στη Θεσσαλονίκη — από το εμβληματικό παραλιακό μέτωπο και την πλατεία Αριστοτέλους έως τα ζωντανά Λαδάδικα, την ατμοσφαιρική Άνω Πόλη και την ήρεμη Καλαμαριά. Ένας πλήρης οδηγός για ξενοδοχεία και περιοχές στη Θεσσαλονίκη."
      }
    },
  }
];

