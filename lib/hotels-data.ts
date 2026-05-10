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
    slug: "thessaloniki",
    name: "Where to Stay in Thessaloniki",
    place: "Thessaloniki",
    info: {
      en: "Discover the best areas and hotels to stay in Thessaloniki.",
      el: "Ανακαλύψτε τις καλύτερες περιοχές και ξενοδοχεία για διαμονή στη Thessaloniki.",
    },
    image: "/images/thessaloniki.webp",
    badge: "Upcoming Guide",
    overview: {
      en: "A detailed guide on where to stay in Thessaloniki is coming soon. For now, explore our interactive map to find the best accommodation options.",
      el: "Ένας αναλυτικός οδηγός για το πού να μείνετε στη Thessaloniki έρχεται σύντομα. Προς το παρόν, εξερευνήστε τον διαδραστικό μας χάρτη για να βρείτε τις καλύτερες επιλογές διαμονής.",
    },
    features: {
      en: ["Hotels", "Resorts", "Apartments"],
      el: ["Ξενοδοχεία", "Resorts", "Διαμερίσματα"],
    },
  },
  {
    slug: "paros",
    name: "Where to Stay in Paros",
    place: "Paros",
    info: {
      en: "Discover the best areas and hotels to stay in Paros.",
      el: "Ανακαλύψτε τις καλύτερες περιοχές και ξενοδοχεία για διαμονή στη Paros.",
    },
    image: "/images/paros.webp",
    badge: "Upcoming Guide",
    overview: {
      en: "A detailed guide on where to stay in Paros is coming soon. For now, explore our interactive map to find the best accommodation options.",
      el: "Ένας αναλυτικός οδηγός για το πού να μείνετε στη Paros έρχεται σύντομα. Προς το παρόν, εξερευνήστε τον διαδραστικό μας χάρτη για να βρείτε τις καλύτερες επιλογές διαμονής.",
    },
    features: {
      en: ["Hotels", "Resorts", "Apartments"],
      el: ["Ξενοδοχεία", "Resorts", "Διαμερίσματα"],
    },
  },
  {
    slug: "milos",
    name: "Where to Stay in Milos",
    place: "Milos",
    info: {
      en: "Discover the best areas and hotels to stay in Milos.",
      el: "Ανακαλύψτε τις καλύτερες περιοχές και ξενοδοχεία για διαμονή στη Milos.",
    },
    image: "/images/milos.webp",
    badge: "Upcoming Guide",
    overview: {
      en: "A detailed guide on where to stay in Milos is coming soon. For now, explore our interactive map to find the best accommodation options.",
      el: "Ένας αναλυτικός οδηγός για το πού να μείνετε στη Milos έρχεται σύντομα. Προς το παρόν, εξερευνήστε τον διαδραστικό μας χάρτη για να βρείτε τις καλύτερες επιλογές διαμονής.",
    },
    features: {
      en: ["Hotels", "Resorts", "Apartments"],
      el: ["Ξενοδοχεία", "Resorts", "Διαμερίσματα"],
    },
  },
  {
    slug: "zakynthos",
    name: "Where to Stay in Zakynthos",
    place: "Zakynthos",
    info: {
      en: "Discover the best areas and hotels to stay in Zakynthos.",
      el: "Ανακαλύψτε τις καλύτερες περιοχές και ξενοδοχεία για διαμονή στη Zakynthos.",
    },
    image: "/images/zakynthos.webp",
    badge: "Upcoming Guide",
    overview: {
      en: "A detailed guide on where to stay in Zakynthos is coming soon. For now, explore our interactive map to find the best accommodation options.",
      el: "Ένας αναλυτικός οδηγός για το πού να μείνετε στη Zakynthos έρχεται σύντομα. Προς το παρόν, εξερευνήστε τον διαδραστικό μας χάρτη για να βρείτε τις καλύτερες επιλογές διαμονής.",
    },
    features: {
      en: ["Hotels", "Resorts", "Apartments"],
      el: ["Ξενοδοχεία", "Resorts", "Διαμερίσματα"],
    },
  },
  {
    slug: "rhodes",
    name: "Where to Stay in Rhodes",
    place: "Rhodes",
    info: {
      en: "Discover the best areas and hotels to stay in Rhodes.",
      el: "Ανακαλύψτε τις καλύτερες περιοχές και ξενοδοχεία για διαμονή στη Rhodes.",
    },
    image: "/images/rhodes.webp",
    badge: "Upcoming Guide",
    overview: {
      en: "A detailed guide on where to stay in Rhodes is coming soon. For now, explore our interactive map to find the best accommodation options.",
      el: "Ένας αναλυτικός οδηγός για το πού να μείνετε στη Rhodes έρχεται σύντομα. Προς το παρόν, εξερευνήστε τον διαδραστικό μας χάρτη για να βρείτε τις καλύτερες επιλογές διαμονής.",
    },
    features: {
      en: ["Hotels", "Resorts", "Apartments"],
      el: ["Ξενοδοχεία", "Resorts", "Διαμερίσματα"],
    },
  },
  {
    slug: "halkidiki",
    name: "Where to Stay in Halkidiki",
    place: "Halkidiki",
    info: {
      en: "Discover the best areas and hotels to stay in Halkidiki.",
      el: "Ανακαλύψτε τις καλύτερες περιοχές και ξενοδοχεία για διαμονή στη Halkidiki.",
    },
    image: "/images/halkidiki.webp",
    badge: "Upcoming Guide",
    overview: {
      en: "A detailed guide on where to stay in Halkidiki is coming soon. For now, explore our interactive map to find the best accommodation options.",
      el: "Ένας αναλυτικός οδηγός για το πού να μείνετε στη Halkidiki έρχεται σύντομα. Προς το παρόν, εξερευνήστε τον διαδραστικό μας χάρτη για να βρείτε τις καλύτερες επιλογές διαμονής.",
    },
    features: {
      en: ["Hotels", "Resorts", "Apartments"],
      el: ["Ξενοδοχεία", "Resorts", "Διαμερίσματα"],
    },
  },
  {
    slug: "meteora",
    name: "Where to Stay in Meteora",
    place: "Meteora",
    info: {
      en: "Discover the best areas and hotels to stay in Meteora.",
      el: "Ανακαλύψτε τις καλύτερες περιοχές και ξενοδοχεία για διαμονή στη Meteora.",
    },
    image: "/images/meteora.webp",
    badge: "Upcoming Guide",
    overview: {
      en: "A detailed guide on where to stay in Meteora is coming soon. For now, explore our interactive map to find the best accommodation options.",
      el: "Ένας αναλυτικός οδηγός για το πού να μείνετε στη Meteora έρχεται σύντομα. Προς το παρόν, εξερευνήστε τον διαδραστικό μας χάρτη για να βρείτε τις καλύτερες επιλογές διαμονής.",
    },
    features: {
      en: ["Hotels", "Resorts", "Apartments"],
      el: ["Ξενοδοχεία", "Resorts", "Διαμερίσματα"],
    },
  },
  {
    slug: "monemvasia",
    name: "Where to Stay in Monemvasia",
    place: "Monemvasia",
    info: {
      en: "Discover the best areas and hotels to stay in Monemvasia.",
      el: "Ανακαλύψτε τις καλύτερες περιοχές και ξενοδοχεία για διαμονή στη Monemvasia.",
    },
    image: "/images/monemvasia.webp",
    badge: "Upcoming Guide",
    overview: {
      en: "A detailed guide on where to stay in Monemvasia is coming soon. For now, explore our interactive map to find the best accommodation options.",
      el: "Ένας αναλυτικός οδηγός για το πού να μείνετε στη Monemvasia έρχεται σύντομα. Προς το παρόν, εξερευνήστε τον διαδραστικό μας χάρτη για να βρείτε τις καλύτερες επιλογές διαμονής.",
    },
    features: {
      en: ["Hotels", "Resorts", "Apartments"],
      el: ["Ξενοδοχεία", "Resorts", "Διαμερίσματα"],
    },
  },
  {
    slug: "chania",
    name: "Where to Stay in Chania",
    place: "Chania",
    info: {
      en: "Discover the best areas and hotels to stay in Chania.",
      el: "Ανακαλύψτε τις καλύτερες περιοχές και ξενοδοχεία για διαμονή στη Chania.",
    },
    image: "/images/chania.webp",
    badge: "Upcoming Guide",
    overview: {
      en: "A detailed guide on where to stay in Chania is coming soon. For now, explore our interactive map to find the best accommodation options.",
      el: "Ένας αναλυτικός οδηγός για το πού να μείνετε στη Chania έρχεται σύντομα. Προς το παρόν, εξερευνήστε τον διαδραστικό μας χάρτη για να βρείτε τις καλύτερες επιλογές διαμονής.",
    },
    features: {
      en: ["Hotels", "Resorts", "Apartments"],
      el: ["Ξενοδοχεία", "Resorts", "Διαμερίσματα"],
    },
  },
  {
    slug: "parga",
    name: "Where to Stay in Parga",
    place: "Parga",
    info: {
      en: "Discover the best areas and hotels to stay in Parga.",
      el: "Ανακαλύψτε τις καλύτερες περιοχές και ξενοδοχεία για διαμονή στη Parga.",
    },
    image: "/images/parga.webp",
    badge: "Upcoming Guide",
    overview: {
      en: "A detailed guide on where to stay in Parga is coming soon. For now, explore our interactive map to find the best accommodation options.",
      el: "Ένας αναλυτικός οδηγός για το πού να μείνετε στη Parga έρχεται σύντομα. Προς το παρόν, εξερευνήστε τον διαδραστικό μας χάρτη για να βρείτε τις καλύτερες επιλογές διαμονής.",
    },
    features: {
      en: ["Hotels", "Resorts", "Apartments"],
      el: ["Ξενοδοχεία", "Resorts", "Διαμερίσματα"],
    },
  },
  {
    slug: "delphi",
    name: "Where to Stay in Delphi",
    place: "Delphi",
    info: {
      en: "Discover the best areas and hotels to stay in Delphi.",
      el: "Ανακαλύψτε τις καλύτερες περιοχές και ξενοδοχεία για διαμονή στη Delphi.",
    },
    image: "/images/delphi.webp",
    badge: "Upcoming Guide",
    overview: {
      en: "A detailed guide on where to stay in Delphi is coming soon. For now, explore our interactive map to find the best accommodation options.",
      el: "Ένας αναλυτικός οδηγός για το πού να μείνετε στη Delphi έρχεται σύντομα. Προς το παρόν, εξερευνήστε τον διαδραστικό μας χάρτη για να βρείτε τις καλύτερες επιλογές διαμονής.",
    },
    features: {
      en: ["Hotels", "Resorts", "Apartments"],
      el: ["Ξενοδοχεία", "Resorts", "Διαμερίσματα"],
    },
  }
];

