import type { GuideCard } from "./types";
export const travelInfoGuides: GuideCard[] = [
  {
    slug: "how-to-get-to-greece",
    title: { en: "How to get to Greece", el: "Πώς να έρθεις στην Ελλάδα" },
    description: {
      en: "Flights, ferries, island hopping ideas and airport tips for first-time visitors solving the puzzle of Greek transport.",
      el: "Πτήσεις, πλοία, ιδέες για island hopping και αναλυτικές συμβουλές για αεροδρόμια, ειδικά για όσους έρχονται πρώτη φορά."
    },
    image: "/images/travel-arrival.webp",
    overview: {
      en: "Greece is highly accessible but its island geography makes planning crucial. This guide covers your main entry points—primary and regional airports, major ferry ports, and international transport links—so you can pick the smartest route for your itinerary. Once you arrive, our [Getting Around Greece](/travel-info/getting-around-greece) guide helps with island connections, and the [Best Time to Visit](/travel-info/best-time-to-visit-greece) guide can help you pick your travel dates. For a visual overview of island clusters, see the [Greece Islands Map Guide](/travel-info/greece-islands-map-guide).",
      el: "Η Ελλάδα είναι εξαιρετικά προσβάσιμη, αλλά η γεωγραφία της απαιτεί σωστό προγραμματισμό. Αυτός ο οδηγός καλύπτει τα κύρια σημεία εισόδου (κεντρικά και περιφερειακά αεροδρόμια, κεντρικά λιμάνια και χερσαία σύνορα) για να επιλέξεις τη σωστή διαδρομή. Μόλις φτάσεις, ο οδηγός [Μετακινήσεις στην Ελλάδα](/travel-info/getting-around-greece) σε βοηθά με τις νησιωτικές συνδέσεις, και ο [Οδηγός Εποχής](/travel-info/best-time-to-visit-greece) σε βοηθά να επιλέξεις ημερομηνίες. Για οπτική επισκόπηση, δες τον [Χάρτη Ελληνικών Νησιών](/travel-info/greece-islands-map-guide)."
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
      en: "Greece is famous for its summer sun, but limiting your perspective to July and August means missing out. The shoulder seasons (Spring and Autumn) reveal a stunningly green landscape, lower prices, and comfortable temperatures for sightseeing. Greece can be visited throughout the year, but the best month depends on the kind of trip you want. For first-timers, our [Best Greek Islands for First-Time Visitors](/travel-info/first-time-in-greece) guide helps narrow down choices, and the [Trip Planning Checklist](/travel-info/greece-trip-planning-checklist) covers practical steps. For sample itineraries, see [7 or 10 Days in Greece](/travel-info/7-and-10-days-in-greece).",
      el: "Η Ελλάδα είναι διάσημη για το καλοκαίρι της, αλλά αν περιοριστείς στον Ιούλιο και τον Αύγουστο χάνεις πολλές εμπειρίες. Οι ενδιάμεσες εποχές (άνοιξη και φθινόπωρο) αποκαλύπτουν μια πιο πράσινη πλευρά, με χαμηλότερες τιμές. Μπορείς να ταξιδέψεις όλο τον χρόνο, αλλά ο καλύτερος μήνας εξαρτάται από τον τύπο του ταξιδιού σου. Για πρώτη φορά, ο οδηγός [Καλύτερα Νησιά για Πρώτη Επίσκεψη](/travel-info/first-time-in-greece) βοηθά στην επιλογή, και η [Λίστα Προετοιμασίας](/travel-info/greece-trip-planning-checklist) καλύπτει πρακτικά βήματα. Για δείγματα προγραμμάτων, δες [7 ή 10 Ημέρες στην Ελλάδα](/travel-info/7-and-10-days-in-greece)."
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
      en: "Navigating Greece means learning two different transport systems: the intricate web of Aegean and Ionian ferries, and the extensive mainland road and bus network. With a bit of strategic planning, you can easily combine flights, ferries, and cars to craft the ultimate itinerary across mountains and islands. Start with [How to Get to Greece](/travel-info/how-to-get-to-greece) for arrival logistics, and use the [Greece Islands Map Guide](/travel-info/greece-islands-map-guide) to understand ferry clusters. The [Trip Planning Checklist](/travel-info/greece-trip-planning-checklist) also covers transport decisions and route planning.",
      el: "Η μετακίνηση στην Ελλάδα είναι πιο εύκολη όταν γνωρίζεις πώς λειτουργούν τα βασικά μέσα μεταφοράς. Στα νησιά, οι διαδρομές γίνονται κυρίως με πλοία και πτήσεις, ενώ στην ηπειρωτική χώρα σημαντικό ρόλο παίζουν οι αυτοκινητόδρομοι και τα ΚΤΕΛ. Ξεκίνα με τον οδηγό [Πώς να έρθεις στην Ελλάδα](/travel-info/how-to-get-to-greece) για τα logistics άφιξης, και χρησιμοποίησε τον [Χάρτη Ελληνικών Νησιών](/travel-info/greece-islands-map-guide) για τα νησιωτικά συμπλέγματα. Η [Λίστα Προετοιμασίας](/travel-info/greece-trip-planning-checklist) καλύπτει επίσης αποφάσεις μετακίνησης και σχεδιασμό διαδρομών."
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
      en: "Planning your first trip to Greece can feel exciting and slightly overwhelming. With thousands of islands and very different travel styles, the hardest part is often knowing exactly where to begin. Before you dive into specific islands, we recommend starting with our [Greece Islands Map Guide](/travel-info/greece-islands-map-guide) to understand the regional clusters and ferry flow. For comparing the two most popular islands, see [Santorini vs Mykonos](/travel-info/santorini-vs-mykonos). Our [7 or 10 Days in Greece](/travel-info/7-and-10-days-in-greece) page offers sample itineraries, and the [Best Time to Visit](/travel-info/best-time-to-visit-greece) guide helps you choose the right season.",
      el: "Ο σχεδιασμός του πρώτου σας ταξιδιού στην Ελλάδα μπορεί να σας φαίνεται συναρπαστικός, αλλά ίσως και ελαφρώς χαοτικός. Πριν βουτήξετε σε συγκεκριμένα νησιά, σας προτείνουμε να ξεκινήσετε από τον [Χάρτη & Οδηγό Ελληνικών Νησιών](/travel-info/greece-islands-map-guide) για να κατανοήσετε τα συμπλέγματα και τη ροή των πλοίων. Για σύγκριση των δύο πιο δημοφιλών νησιών, δες [Σαντορίνη vs Μύκονος](/travel-info/santorini-vs-mykonos). Η σελίδα [7 ή 10 Ημέρες στην Ελλάδα](/travel-info/7-and-10-days-in-greece) προσφέρει δείγματα προγραμμάτων, και ο [Οδηγός Εποχής](/travel-info/best-time-to-visit-greece) σε βοηθά να επιλέξεις την κατάλληλη περίοδο."
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
      en: "A trip to Greece looks effortless on Instagram, but good planning makes a huge difference. Between flights, ferries, islands, hotel areas and seasonal timing, a little preparation can save both money and stress. Use the [Best Time to Visit](/travel-info/best-time-to-visit-greece) guide to pick your travel window, and [Getting Around Greece](/travel-info/getting-around-greece) for transport logistics. For arrival information, see [How to Get to Greece](/travel-info/how-to-get-to-greece), and for sample trip structures, check [7 or 10 Days in Greece](/travel-info/7-and-10-days-in-greece). This checklist covers the practical steps that matter most before you travel.",
      el: "Ένα ταξίδι στην Ελλάδα φαίνεται εύκολο στο Instagram, αλλά ο σωστός προγραμματισμός κάνει τεράστια διαφορά. Χρησιμοποίησε τον [Οδηγό Εποχής](/travel-info/best-time-to-visit-greece) για να επιλέξεις περίοδο, και τον οδηγό [Μετακινήσεις στην Ελλάδα](/travel-info/getting-around-greece) για logistics μεταφοράς. Για πληροφορίες άφιξης, δες [Πώς να έρθεις στην Ελλάδα](/travel-info/how-to-get-to-greece), και για δείγματα προγραμμάτων, δες [7 ή 10 Ημέρες στην Ελλάδα](/travel-info/7-and-10-days-in-greece). Αυτή η λίστα καλύπτει τα πιο σημαντικά πρακτικά βήματα πριν ταξιδέψετε."
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
      en: "Seven days in Greece is enough for a memorable first trip, but not enough to see everything. For a solid start, use our [Greece Islands Map Guide](/travel-info/greece-islands-map-guide) to choose a single island region and keep your transit simple. Quality over quantity is the secret to a great 7 or 10-day itinerary. If you are undecided between islands, [Santorini vs Mykonos](/travel-info/santorini-vs-mykonos) can help, and our [First-Time Visitors](/travel-info/first-time-in-greece) guide covers the best islands for beginners.",
      el: "Επτά ημέρες στην Ελλάδα είναι αρκετές για ένα αξέχαστο πρώτο ταξίδι. Για ένα σωστό ξεκίνημα, χρησιμοποίησε τον [Χάρτη & Οδηγό Ελληνικών Νησιών](/travel-info/greece-islands-map-guide) για να επιλέξεις ένα μόνο σύμπλεγμα νησιών. Η ποιότητα πάνω από την ποσότητα είναι το μυστικό. Αν δεν είσαι σίγουρος μεταξύ νησιών, το [Σαντορίνη vs Μύκονος](/travel-info/santorini-vs-mykonos) μπορεί να βοηθήσει, και ο οδηγός [Καλύτερα Νησιά για Πρώτη Επίσκεψη](/travel-info/first-time-in-greece) καλύπτει τις καλύτερες επιλογές για αρχάριους."
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
      en: "Greece is one of the best family holiday destinations in Europe. It combines safe, shallow beaches, simple and delicious food, reliably warm weather, genuine local hospitality and an enormous variety of destinations that work at very different paces. Whether you are travelling with toddlers, primary-school children or teenagers, the country bends surprisingly well around family life — partly because Greeks are genuinely welcoming to children in a way that feels natural rather than performative. Official tourism guidance consistently highlights the Greek islands, Crete and Halkidiki among the strongest family travel options in the country. Safe swimming areas, water parks, marine parks, outdoor activities, open-air archaeology and the sheer availability of relaxed beach-front tavernas all add to the appeal. For accommodation, see our [Best Hotels in Crete for Families](/travel-info/best-hotels-in-crete-for-families) guide. For the ideal travel window, check the [Best Time to Visit Greece](/travel-info/best-time-to-visit-greece) guide, which covers the shoulder seasons that often work better for families than the full peak of August. The [Getting Around Greece](/travel-info/getting-around-greece) guide also covers car-free island options and transport combinations that simplify movement with children. The core principle of a good family trip to Greece is the same regardless of destination: build the trip around ease. Easier beaches, easier meals, easier movement, enough flexibility for rest, and a realistic pace rather than an over-packed schedule.",
      el: "Η Ελλάδα είναι ένας από τους καλύτερους οικογενειακούς προορισμούς διακοπών στην Ευρώπη. Συνδυάζει ασφαλείς, ρηχές παραλίες, απλό και νόστιμο φαγητό, σταθερά ζεστό καιρό, γνήσια τοπική φιλοξενία και τεράστια ποικιλία προορισμών. Είτε ταξιδεύετε με νήπια, παιδιά δημοτικού ή εφήβους, η χώρα προσαρμόζεται εκπληκτικά καλά στην οικογενειακή ζωή. Για διαμονή, δείτε τον οδηγό [Best Hotels in Crete for Families](/travel-info/best-hotels-in-crete-for-families). Για την ιδανική περίοδο, ελέγξτε τον οδηγό [Best Time to Visit Greece](/travel-info/best-time-to-visit-greece). Ο οδηγός [Getting Around Greece](/travel-info/getting-around-greece) καλύπτει επιλογές μετακίνησης χωρίς αυτοκίνητο και συνδυασμούς μεταφορών που απλοποιούν την μετακίνηση με παιδιά."
    },
    points: {
      en: [
        "Beach-led holidays with safe, shallow swimming areas",
        "Simple food that children typically enjoy — the default in almost every Greek taverna",
        "Outdoor living and natural exploration — beaches, coves, village walks, boat trips",
        "Family-friendly accommodation options at every price point across all major destinations",
        "Timing matters — late June, early July and September offer the best balance of warm sea, open infrastructure and manageable crowds",
        "Keep the itinerary light — the best family trips to Greece are built around ease, not around hitting every famous spot"
      ],
      el: [
        "Διακοπές με επίκεντρο την παραλία με ασφαλή, ρηχά νερά",
        "Απλό φαγητό που συνήθως αρέσει στα παιδιά",
        "Υπαίθρια ζωή και εξερεύνηση της φύσης",
        "Καταλύματα φιλικά προς οικογένειες σε όλες τις τιμές",
        "Η επιλογή περιόδου έχει σημασία — τέλη Ιουνίου, αρχές Ιουλίου και Σεπτέμβριος προσφέρουν την καλύτερη ισορροπία",
        "Κρατήστε ελαφρύ το πρόγραμμα — τα καλύτερα οικογενειακά ταξίδια χτίζονται γύρω από την ευκολία"
      ]
    },
    sections: [
      {
        title: { en: "Why Greece Works So Well for Families", el: "Γιατί η Ελλάδα Είναι Ιδανική για Οικογένειες" },
        content: {
          en: "The structural advantages of Greece as a family destination are worth spelling out before diving into specific destinations. **The food is easy.** Greek cuisine is built on ingredients children already recognise — grilled chicken, lamb chops, cheese pies, bread, olives, fresh tomatoes, simple pasta dishes and fried potatoes that appear on almost every taverna menu. At the same time, the raw materials — fresh fish, good olive oil, seasonal vegetables — mean the food is genuinely nourishing even when it looks simple. **The sea is warm.** By June the Aegean and Ionian are comfortably warm for swimming. By late July and August the water temperature in southern Greece often reaches 26–28°C, which means extended time in the sea is genuinely comfortable even for younger children. The long summer season, from roughly late May through to mid-October in warmer areas, gives families a wide booking window. **The culture is accessible.** Greece has arguably the most recognisable ancient history in the world. Children who have been through any basic school history programme — myths, the Olympics, Athens, Sparta — already have a framework. A visit to the Acropolis, Delphi or Olympia lands differently when there is some prior context. You do not need to manufacture interest: the sites tend to do the work themselves. **The hospitality is genuine.** Children are welcome almost everywhere in Greece. A family arriving at a taverna is not an inconvenience — it is often greeted warmly, with staff happy to accommodate, improvise off-menu dishes for younger children, or simply bring a plate of chips without being asked. This ease of dining out substantially reduces the daily friction that family travel sometimes creates elsewhere in Europe.",
          el: "Τα δομικά πλεονεκτήματα της Ελλάδας ως οικογενειακού προορισμού αξίζει να τα αναφέρουμε πριν προχωρήσουμε σε συγκεκριμένους προορισμούς. **Το φαγητό είναι εύκολο.** Η ελληνική κουζίνα βασίζεται σε υλικά που τα παιδιά ήδη γνωρίζουν — ψητό κοτόπουλο, μπριζόλες, τυρόπιτες, ψωμί, ελιές, φρέσκες ντομάτες, ζυμαρικά και πατάτες τηγανητές. **Η θάλασσα είναι ζεστή.** Από τον Ιούνιο το Αιγαίο και το Ιόνιο είναι άνετα για κολύμπι. Μέχρι τα τέλη Ιουλίου και Αυγούστου η θερμοκρασία του νερού φτάνει συχνά 26–28°C. **Ο πολιτισμός είναι προσβάσιμος.** Τα παιδιά που έχουν παρακολουθήσει βασική σχολική ιστορία — μύθοι, Ολυμπιακοί Αγώνες, Αθήνα, Σπάρτη — έχουν ήδη ένα πλαίσιο. **Η φιλοξενία είναι γνήσια.** Τα παιδιά είναι ευπρόσδεκτα σχεδόν παντού στην Ελλάδα."
        }
      },
      {
        title: { en: "Crete", el: "Κρήτη" },
        content: {
          en: "Crete is the strongest single family destination in the country, and it is not particularly close. The island is large enough to support every type of family need: major resort areas with full infrastructure, excellent beaches at every level of organisation, a rich food culture, strong inland options for days when the beach is enough, and the archaeological sites of Knossos and the Heraklion Archaeological Museum for older children. The beaches around Chania and Rethymno in the west are particularly well-suited to families. Elafonisi, with its shallow lagoon and pinkish sand, is one of the most genuinely impressive beaches in Greece for young children — the water barely reaches knee height for long stretches, and the setting is striking enough to hold adult attention too. Balos is similarly special. Falassarna, near Chania, has a long sweep of sand with organised facilities and good access. Further east, the beaches around Elounda and Agios Nikolaos are calmer and more sheltered, which is useful for families who prefer quieter water. Accommodation in Crete ranges from large all-inclusive resorts in the Hersonissos and Malia areas (highest concentration of child-focused facilities, water parks, kids clubs) to mid-range family hotels near Chania Old Town and independent villas across the island. For more detail on where to stay, see the [Best Hotels in Crete for Families](/travel-info/best-hotels-in-crete-for-families) guide. **Best for:** First family trip to Greece, longer stays of 10–14 days, mixed groups with different ages, families wanting resort infrastructure alongside cultural day trips.",
          el: "Η Κρήτη είναι ο ισχυρότερος οικογενειακός προορισμός στη χώρα. Το νησί είναι αρκετά μεγάλο για να υποστηρίξει κάθε είδους οικογενειακή ανάγκη: μεγάλες τουριστικές περιοχές με πλήρη υποδομή, εξαιρετικές παραλίες, πλούσια γαστρονομική κουλτούρα, δυνατές επιλογές στην ενδοχώρα και τους αρχαιολογικούς χώρους της Κνωσού. Οι παραλίες γύρω από τα Χανιά και το Ρέθυμνο είναι ιδιαίτερα κατάλληλες για οικογένειες. Το Ελαφονήσι, με τη ρηχή λιμνοθάλασσα και τη ροζ άμμο, είναι μια από τις πιο εντυπωσιακές παραλίες στην Ελλάδα για μικρά παιδιά. Για περισσότερες λεπτομέρειες σχετικά με τη διαμονή, δείτε τον οδηγό [Best Hotels in Crete for Families](/travel-info/best-hotels-in-crete-for-families)."
        }
      },
      {
        title: { en: "Corfu", el: "Κέρκυρα" },
        content: {
          en: "Corfu has one of the most varied landscapes of any Greek island, which translates directly into a varied family experience. The north of the island — Sidari, Kassiopi, the area around Roda — has calmer, shallower water than many Ionian options. The area around Paleokastritsa, on the west coast, is arguably the most beautiful part of the island: dramatic coves, clear water and the kind of scenery that justifies the journey. Corfu Town itself is among the most architecturally interesting town centres on any Greek island — the Venetian influence gives it a distinctly different character to Cycladic villages, and it holds up well as a half-day or full-day destination when the family wants something beyond the beach. The Old Fortress, the Liston arcade and the shaded streets of the old town are all accessible and manageable with children. The island is green and lush by Greek standards — the combination of Ionian rainfall and dense olive groves creates a landscape that looks different from the bare volcanic islands of the Aegean. **Best for:** Families wanting variety across a single island, those who prefer greener landscapes, first-time visitors who want town + beach + nature in one place.",
          el: "Η Κέρκυρα έχει ένα από τα πιο ποικιλόμορφα τοπία από οποιοδήποτε ελληνικό νησί. Το βόρειο τμήμα του νησιού έχει πιο ήρεμα, ρηχά νερά. Η Παλαιοκαστρίτσα είναι ίσως το ομορφότερο μέρος του νησιού. Η πόλη της Κέρκυρας είναι από τα πιο αρχιτεκτονικά ενδιαφέροντα κέντρα πόλης. Το νησί είναι πράσινο και καταπράσινο για τα ελληνικά δεδομένα."
        }
      },
      {
        title: { en: "Naxos", el: "Νάξος" },
        content: {
          en: "Naxos is the most underrated family island in the Cyclades, and in many ways one of the best. The beaches on the west coast — Agios Georgios, Agios Prokopios, Agia Anna, Plaka — are long, sandy, shallow and well-organised without being over-commercialised. The water is calm. The distances between beach and town are manageable. The food in Naxos Town is notably good by island standards. The island is also large enough to have an inland dimension that most small Cycladic islands lack. The mountain villages of Apeiranthos and Filoti, the scattered ancient marble ruins, and the giant Kouros statues offer day-trip options that extend the trip beyond pure beach mode. For teenagers especially, having somewhere genuinely interesting to explore beyond the sun lounger matters. Naxos is significantly more relaxed in pace and atmosphere than Mykonos or Santorini — both of which are, frankly, not ideal for young families. Naxos avoids that entirely. **Best for:** Families who want a proper Cycladic experience without the hype and crowds of the famous islands, beach-focused trips with some inland variety.",
          el: "Η Νάξος είναι το πιο υποτιμημένο οικογενειακό νησί των Κυκλάδων. Οι παραλίες στη δυτική ακτή — Άγιος Γεώργιος, Άγιος Προκόπιος, Αγία Άννα, Πλάκα — είναι μακριές, αμμώδεις, ρηχές και καλά οργανωμένες. Το νησί είναι αρκετά μεγάλο για να έχει μια ενδοχώρα που λείπει από τα περισσότερα μικρά Κυκλαδονήσια. Η Νάξος είναι σημαντικά πιο χαλαρή σε ρυθμό από τη Μύκονο ή τη Σαντορίνη."
        }
      },
      {
        title: { en: "Halkidiki", el: "Χαλκιδική" },
        content: {
          en: "For families travelling from mainland Europe who want to avoid the ferry system entirely, Halkidiki is one of the most compelling options in Greece. Located an hour's drive from Thessaloniki airport, it offers some of the best beaches in the country on its three peninsulas: Kassandra (the most developed, highest concentration of family resorts), Sithonia (wilder, more wooded, with excellent beach camping options and quieter coves), and Athos (the monastic peninsula, which adds a unique and genuinely unusual cultural dimension to a trip). The beaches on Sithonia in particular are excellent — Karidi, Kalogria, Tristinika and Vourvourou offer clear water and varied scenery without the full resort overlay of Kassandra. Road access is good, and having a rental car (strongly advisable here) opens up a larger range of beaches than most islands can offer. Thessaloniki itself, easily reachable for a day trip, is one of Greece's most enjoyable cities for families — good street food, the White Tower waterfront, accessible archaeological sites and a compact old town that does not require enormous amounts of walking. **Best for:** Families driving or flying to Thessaloniki, those who want beach quality without the logistics of island travel, longer stays combining city and beach.",
          el: "Για οικογένειες που ταξιδεύουν από την ηπειρωτική Ευρώπη και θέλουν να αποφύγουν εντελώς το σύστημα των φέρι, η Χαλκιδική είναι μια από τις πιο ελκυστικές επιλογές. Μία ώρα από το αεροδρόμιο Θεσσαλονίκης, προσφέρει μερικές από τις καλύτερες παραλίες της χώρας. Οι παραλίες στη Σιθωνία είναι εξαιρετικές. Η Θεσσαλονίκη είναι μια από τις πιο απολαυστικές πόλεις για οικογένειες."
        }
      },
      {
        title: { en: "Rhodes", el: "Ρόδος" },
        content: {
          en: "Rhodes is one of the largest Greek islands and one of the most infrastructure-rich for family tourism. The resorts around Faliraki and Ixia offer concentrated family hotel options with pools, entertainment and direct beach access. Rhodes Town itself deserves a full day from any family staying on the island. The medieval Old Town — a UNESCO World Heritage Site — is one of the most complete medieval fortified towns in the world, and it is large enough to wander without feeling like a scripted museum visit. The Street of the Knights, the Palace of the Grand Master, and the atmospheric squares and narrow lanes are all accessible and genuinely impressive for older children. The water park at Faliraki is one of the largest in Greece, and for families with children in the 5–14 age range it can easily fill a full day. **Best for:** Families wanting a combination of resort infrastructure, cultural depth and excellent beaches; teenagers who want more activity options.",
          el: "Η Ρόδος είναι ένα από τα μεγαλύτερα ελληνικά νησιά και από τα πιο ανεπτυγμένα σε υποδομές για οικογενειακό τουρισμό. Η Παλιά Πόλη της Ρόδου — μνημείο UNESCO — είναι μια από τις πιο ολοκληρωμένες μεσαιωνικές οχυρωμένες πόλεις. Το υδροπάρκο στη Φαληράκι είναι ένα από τα μεγαλύτερα στην Ελλάδα."
        }
      },
      {
        title: { en: "Athens as a Family Destination", el: "Η Αθήνα ως Οικογενειακός Προορισμός" },
        content: {
          en: "Athens is often treated as a transit stop rather than a destination in its own right for family travel, which is a mistake. Two to three days in Athens at the start or end of a trip works extremely well, particularly for families with children old enough to engage with history. The Acropolis and the Parthenon remain one of the most powerful archaeological experiences in the world. The new Acropolis Museum, directly below the rock, is exceptionally well-designed and explicitly family-friendly — the layout, the transparent floors revealing excavations below, and the quality of the exhibits make it genuinely engaging for children aged 8 and up. The National Archaeological Museum in Exarchia is larger, deeper and more suited to older children and teenagers. Beyond archaeology, Athens has a lively street-food culture centred around areas like Monastiraki and the Central Market, the National Garden offers a green escape in the middle of the city, and Plaka's café-lined streets are easy to navigate with children. The Athens Riviera — the coastal strip running south from the city towards Glyfada and Vouliagmeni — provides beach access on days when the family wants water without leaving the wider Athens area. **Best for:** Building historical context at the start of a trip, two-night stopovers, families with older children interested in mythology and ancient history.",
          el: "Η Αθήνα συχνά αντιμετωπίζεται ως στάση διέλευσης, κάτι που είναι λάθος. Δύο με τρεις ημέρες στην Αθήνα λειτουργούν εξαιρετικά, ειδικά για οικογένειες με παιδιά που ενδιαφέρονται για την ιστορία. Η Ακρόπολη και το Μουσείο της Ακρόπολης είναι σχεδιασμένα με γνώμονα την οικογένεια. Το Εθνικό Αρχαιολογικό Μουσείο ταιριάζει σε μεγαλύτερα παιδιά. Η Αθήνα έχει ζωντανή κουλτούρα street food, τον Εθνικό Κήπο και την Πλάκα."
        }
      },
      {
        title: { en: "Family-Friendly Beaches: What to Look For", el: "Παραλίες Φιλικές για Οικογένειες: Τι να Ψάξετε" },
        content: {
          en: "Not every Greek beach is equally suitable for young children. The open-sea beaches on exposed coastlines can have strong waves and sudden depth changes. The best beaches for families share a few consistent characteristics: **Shallow gradient into the water** — the seabed drops gradually rather than suddenly. Elafonisi in Crete and Agios Georgios in Naxos are classic examples. **Sandy rather than pebbly** — not universal in Greece, where pebble beaches are common, but sandy beaches are substantially easier for children. **Sheltered from prevailing winds** — the Aegean north wind (meltemi) can build significant waves and create uncomfortable beach days in July and August. Sheltered coves, east-facing beaches and Ionian beaches are typically calmer. **Organised facilities nearby** — a sunbed rental area with a beach bar provides a useful base because having toilet access and cold drinks within walking distance matters enormously with young children. The best family beaches by region: Elafonisi and Falassarna (Crete west), Balos (Crete northwest), Agios Prokopios and Plaka (Naxos), Palaiokastritsa (Corfu), the Vourvourou area (Halkidiki Sithonia), and Lindos Bay (Rhodes).",
          el: "Δεν είναι όλες οι ελληνικές παραλίες εξίσου κατάλληλες για μικρά παιδιά. Οι καλύτερες οικογενειακές παραλίες έχουν: σταδιακή κλίση προς το νερό, αμμώδη ακτή, προστασία από τους ανέμους και οργανωμένες εγκαταστάσεις κοντά. Οι καλύτερες παραλίες ανά περιοχή: Ελαφονήσι και Φαλάσαρνα (Κρήτη), Μπάλος (Κρήτη), Άγιος Προκόπιος και Πλάκα (Νάξος), Παλαιοκαστρίτσα (Κέρκυρα), Βουρβουρού (Χαλκιδική), Λίνδος (Ρόδος)."
        }
      },
      {
        title: { en: "Timing Your Family Trip: When to Go", el: "Πότε να Ταξιδέψετε" },
        content: {
          en: "The [Best Time to Visit Greece](/travel-info/best-time-to-visit-greece) guide covers this in detail, but from a specifically family travel perspective the picture is clear. **Late June and early July** are the most practical weeks for families bound by school calendars. The sea is warm, facilities are fully open, but the deepest peak-season pressure of August has not yet arrived. Prices are lower than August, beaches are less crowded, and the overall rhythm is more manageable. **September** is arguably the best single month for family travel in Greece if school schedules allow — particularly in destinations like Crete or Rhodes, where October can still be good. The sea is at its warmest from accumulated summer heat. Crowds have thinned considerably. Prices drop. The combination of warm water, functional infrastructure and calmer atmosphere is difficult to beat. **August** is the classic school-holiday month and Greece handles the volume, but it is worth understanding what peak season actually means: ferry tickets selling out, beach areas crowded by 10am, accommodation at maximum price, and heat that regularly exceeds 35°C in the Cyclades and eastern Aegean. Families who go in August should book ferry tickets and accommodation well in advance — ideally three to four months ahead — and plan beach days to start early and retreat indoors through the hottest afternoon hours.",
          el: "Ο οδηγός [Best Time to Visit Greece](/travel-info/best-time-to-visit-greece) καλύπτει αυτό το θέμα λεπτομερώς. **Τέλη Ιουνίου και αρχές Ιουλίου** είναι οι πιο πρακτικές εβδομάδες. **Σεπτέμβριος** είναι ίσως ο καλύτερος μήνας για οικογενειακά ταξίδια. **Αύγουστος** είναι ο κλασικός μήνας διακοπών — κλείστε εισιτήρια φέρι και διαμονή αρκετά νωρίτερα."
        }
      },
      {
        title: { en: "Getting Around Greece with Children", el: "Μετακινήσεις με Παιδιά" },
        content: {
          en: "The [Getting Around Greece](/travel-info/getting-around-greece) guide covers the full transport picture, but for families the key points are: **Rent a car on large islands.** On Crete, Corfu, Rhodes and Kefalonia, a car transforms the trip. It gives you the flexibility to reach better, less crowded beaches, to change plans when one beach is too exposed, and to stop when children need a break. Traffic is generally light outside of resort areas, and driving in Greece is easier than its reputation suggests. **Keep ferry journeys short.** Long ferry crossings are fine for adults but genuinely difficult for young children — particularly on open-sea routes where swell can cause seasickness and there is limited space for restless movement. When building an itinerary, prioritise short connections: Piraeus to the Saronic islands (1–2 hours), Rafina to the closer Cyclades (3–5 hours to Naxos), or flying directly to Crete or Rhodes rather than taking the overnight ferry. **Use domestic flights for distance.** Flying from Athens to Heraklion, Rhodes, Corfu or Thessaloniki takes under an hour and costs relatively little if booked ahead. It is almost always worth the cost when the alternative is a 3–9 hour ferry journey with young children. **Build in buffer time.** Greek island travel runs on schedules that can shift due to weather, particularly in late summer when the meltemi wind affects Aegean ferry routes. Avoid booking a ferry on the same day as a connecting flight back home.",
          el: "Ο οδηγός [Getting Around Greece](/travel-info/getting-around-greece) καλύπτει πλήρως τις μεταφορές. **Νοικιάστε αυτοκίνητο σε μεγάλα νησιά.** **Κρατήστε μικρές τις διαδρομές με φέρι.** **Χρησιμοποιήστε εσωτερικές πτήσεις για μεγάλες αποστάσεις.** **Βάλτε χρονικά περιθώρια** — αποφύγετε να κλείσετε φέρι την ίδια μέρα με πτήση επιστροφής."
        }
      },
      {
        title: { en: "Food and Eating Out with Children", el: "Φαγητό και Έξοδος με Παιδιά" },
        content: {
          en: "Greek food culture is a genuine asset for family travel. Meal times are flexible and social — Greeks eat late by northern European standards, and tavernas expect families to linger. Children who would be unwelcome or uncomfortable in many restaurant settings elsewhere tend to be absorbed into the general warmth of a Greek taverna without friction. The food itself travels well across children's preferences. Souvlaki wraps and grilled meats are almost universally accepted. Spanakopita (spinach and cheese pie), tiropita (cheese pie) and loukoumades (honey doughnuts) work well as snacks for most ages. Grilled fish and simple salads pair naturally with the typical rhythm of a beach lunch. The portions at most Greek tavernas are generous by European standards, and sharing dishes between the table is the norm rather than the exception. Practical tip: in any traditional village or island taverna, it is entirely normal to ask for half portions, to ask what is available for children, or to request something simple like rice, pasta or chicken that may not be on the menu as written. The answer is almost always yes. For a deeper look at the food culture, see the [Food & Wine](/collections/greece-food-and-drink) section.",
          el: "Η ελληνική κουλτούρα φαγητού είναι πραγματικό πλεονέκτημα για οικογενειακά ταξίδια. Οι ώρες φαγητού είναι ευέλικτες και κοινωνικές. Σουβλάκια, ψητά κρέατα, σπανακόπιτα, τυρόπιτα και λουκουμάδες αρέσουν στα περισσότερα παιδιά. Σε οποιαδήποτε παραδοσιακή ταβέρνα, είναι απολύτως φυσιολογικό να ζητήσετε μισές μερίδες ή κάτι απλό για τα παιδιά. Για περισσότερα, δείτε την ενότητα [Food & Wine](/collections/greece-food-and-drink)."
        }
      },
      {
        title: { en: "Museums and Cultural Experiences for Families", el: "Μουσεία και Πολιτιστικές Εμπειρίες" },
        content: {
          en: "Greece has a stronger museum and archaeological landscape than most families give it credit for. The key is matching the experience to the age group. **Acropolis Museum, Athens** — designed with accessibility and visual impact in mind. The glass floors, the sculptural fragments and the overall architecture make it one of the most genuinely impressive museum experiences in Greece regardless of age. Recommended from about 8 years old upward. **National Archaeological Museum, Athens** — larger and denser, better for teenagers and adults with genuine interest in ancient history. The Antikythera Mechanism display alone is worth the visit for scientifically minded children. **Palace of Knossos, Crete** — the partially reconstructed Minoan palace is one of the most visually vivid archaeological sites in Greece. The scale, the colour, the mythology (Theseus, the Minotaur, Daedalus) already exist in most children's cultural vocabulary. Best approached with some preparation beforehand. **Archaeological Site of Delphi** — the mountain setting, the atmosphere and the Oracle mythology make Delphi one of the most memorable sites in Greece. The drive from Athens (approximately 2.5 hours) and the site itself are both manageable with children who are comfortable with walking. **Natural History Museum of Crete, Heraklion** — specifically focused on the natural environment of Crete and the Mediterranean, and explicitly designed to be accessible to younger children. A good indoor option on hot afternoons.",
          el: "Η Ελλάδα έχει μια πλούσια μουσειακή και αρχαιολογική παράδοση. **Μουσείο Ακρόπολης** — σχεδιασμένο με γνώμονα την προσβασιμότητα. **Εθνικό Αρχαιολογικό Μουσείο** — για μεγαλύτερα παιδιά. **Παλάτι της Κνωσού** — ένα από τα πιο ζωντανά αρχαιολογικά μνημεία. **Αρχαιολογικός χώρος Δελφών** — το ορεινό τοπίο και η μυθολογία του Μαντείου το καθιστούν αξέχαστο. **Μουσείο Φυσικής Ιστορίας Κρήτης** — καλή επιλογή για ζεστά απογεύματα."
        }
      }
    ],
    tips: {
      en: [
        "Limit the number of bases. Changing hotel every two or three nights is fine for solo travellers or couples. With children it quickly becomes exhausting. Two bases maximum for a two-week trip is a reasonable rule.",
        "Prioritise beach access over destination prestige. A mid-range hotel with direct beach access is more useful for a family than a well-located boutique hotel that requires a ten-minute drive to the nearest swimming area.",
        "Book ferry tickets early for August travel. Popular routes in high summer sell out — including foot-passenger spaces and seating categories. Booking three or four months ahead is not excessive.",
        "Pack for the sun seriously. UV exposure at Greek latitudes in summer is significantly higher than in northern Europe. High-factor sun cream for children, UV-protective swimwear, wide-brimmed hats and the habit of retreating to shade between 12 and 4pm will prevent the kind of sunburn that can genuinely disrupt a holiday.",
        "Choose accommodation with a kitchen or kitchenette if travelling with very young children. The flexibility to prepare breakfast, simple lunches or early evening meals in the apartment makes a significant difference to the daily rhythm of a trip with children under 4.",
        "Accept slower movement. A family holiday in Greece is not the moment for island-hopping across four different locations. The logistics multiply, the children find the constant movement tiring, and the best parts of Greece — the beach, the sea, the slow lunch — benefit from staying still long enough to actually enjoy them."
      ],
      el: [
        "Περιορίστε τον αριθμό των βάσεων — δύο βάσεις το πολύ για ένα ταξίδι δύο εβδομάδων.",
        "Δώστε προτεραιότητα στην πρόσβαση σε παραλία αντί για το κύρος του προορισμού.",
        "Κλείστε εισιτήρια φέρι νωρίς για ταξίδι τον Αύγουστο.",
        "Προστατέψτε τα παιδιά από τον ήλιο — αντηλιακό υψηλής προστασίας, καπέλα και αποφυγή ηλίου 12–4 μ.μ.",
        "Επιλέξτε κατάλυμα με κουζίνα αν ταξιδεύετε με πολύ μικρά παιδιά.",
        "Αποδεχτείτε τον πιο αργό ρυθμό — οι καλύτερες στιγμές θέλουν χρόνο."
      ]
    }
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
      en: "Santorini and Mykonos are the two Greek islands most first-time visitors compare, and for good reason. Both are famous, beautiful and easy to fit into a first island itinerary. But they are not interchangeable. Santorini is built around scenery, caldera views and atmosphere, while Mykonos is better known for cosmopolitan beach culture, luxury and nightlife. For more island choices, see our [Best Greek Islands for First-Time Visitors](/travel-info/first-time-in-greece) guide, and [7 or 10 Days in Greece](/travel-info/7-and-10-days-in-greece) for sample itineraries featuring both islands.",
      el: "Η Σαντορίνη και η Μύκονος είναι τα δύο ελληνικά νησιά που συγκρίνουν οι περισσότεροι επισκέπτες για πρώτη φορά, και για καλό λόγο. Και τα δύο είναι διάσημα, πανέμορφα και εύκολα να ενταχθούν σε ένα πρώτο πρόγραμμα. Για περισσότερες επιλογές νησιών, δες τον οδηγό [Καλύτερα Νησιά για Πρώτη Επίσκεψη](/travel-info/first-time-in-greece), και [7 ή 10 Ημέρες στην Ελλάδα](/travel-info/7-and-10-days-in-greece) για δείγματα προγραμμάτων και με τα δύο νησιά."
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
    slug: "best-hotels-in-crete-for-families",
    title: { en: "Best Hotels in Crete for Families", el: "Τα Καλύτερα Οικογενειακά Ξενοδοχεία στην Κρήτη" },
    description: {
      en: "Discover the top family-friendly hotels and resorts in Crete, offering kids clubs, water parks, and spacious suites for a stress-free holiday.",
      el: "Ανακαλύψτε τα κορυφαία φιλικά προς την οικογένεια ξενοδοχεία στην Κρήτη, με παιδικά clubs, νεροτσουλήθρες και ευρύχωρες σουίτες."
    },
    image: "/images/crete.webp",
    overview: {
      en: "Crete is arguably the most family-friendly destination in Greece. Its large scale means it has room for sprawling resorts with excellent child-focused amenities, safe shallow beaches, and plenty of activities to keep everyone entertained. For more family-oriented advice, see our comprehensive [Family Travel in Greece](/travel-info/family-travel-in-greece) guide.",
      el: "Η Κρήτη είναι ίσως ο πιο φιλικός προορισμός για οικογένειες στην Ελλάδα. Το μέγεθός της επιτρέπει μεγάλα resorts με εξαιρετικές παροχές για παιδιά, ασφαλείς ρηχές παραλίες και πολλές δραστηριότητες. Για περισσότερες οικογενειακές συμβουλές, δες τον οδηγό [Οικογενειακές Διακοπές στην Ελλάδα](/travel-info/family-travel-in-greece)."
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
    title: {
      en: "Best Boat Trips in Kefalonia 2026 — Ithaca, Fteri, Fiskardo & Hidden Coves",
      el: "Οι Καλύτερες Εκδρομές με Σκάφος στην Κεφαλονιά 2026 — Ιθάκη, Φτέρι, Φισκάρδο & Κρυμμένοι Όρμοι"
    },
    description: {
      en: "The best boat trips in Kefalonia: day cruises to Ithaca, private hire in Fiskardo, hidden beaches only by sea, turtle spotting and sunset sailing. What to book and practical tips.",
      el: "Οι καλύτερες εκδρομές με σκάφος στην Κεφαλονιά: ημερήσιες κρουαζιέρες στην Ιθάκη, ενοικίαση σκάφους στο Φισκάρδο, κρυφές παραλίες μόνο από τη θάλασσα, χελώνες και ιστιοπλοΐα ηλιοβασιλέματος. Τι να κλείσετε και πρακτικές συμβουλές."
    },
    image: "/images/kefalonia.webp",
    overview: {
      en: "Kefalonia has some of the most dramatic coastline in the Ionian — but a significant part of its best beaches, sea caves and hidden coves simply cannot be reached by road. No rental car will get you to Fteri beach. No bus goes to the sea arch at Agia Kyriaki. And the narrow strait between Kefalonia and Ithaca, with its glassy turquoise water and deserted anchorages, is only visible from the water.\n\nA boat trip in Kefalonia is not a tourist extra — it is how you actually see the island. This guide covers every option, from full-day cruises to Ithaca and private hire in Fiskardo to glass-bottom turtle tours and sunset sailing, with honest advice on what suits different types of traveler.\n\nFor context on the island itself, read our full [Kefalonia destination guide](/destinations/kefalonia).",
      el: "Η Κεφαλονιά έχει μία από τις πιο εντυπωσιακές ακτογραμμές στο Ιόνιο — αλλά ένα σημαντικό μέρος από τις καλύτερες παραλίες, θαλάσσιες σπηλιές και κρυφούς όρμους της δεν είναι προσβάσιμο οδικώς. Κανένα ενοικιαζόμενο αυτοκίνητο δεν θα σας πάει στην παραλία Φτέρι. Κανένα λεωφορείο δεν πηγαίνει στη θαλάσσια αψίδα της Αγίας Κυριακής. Και το στενό πέρασμα μεταξύ Κεφαλονιάς και Ιθάκης, με τα γαλαζοπράσινα νερά και τους ερημικούς όρμους του, είναι ορατό μόνο από τη θάλασσα.\n\nΜια εκδρομή με σκάφος στην Κεφαλονιά δεν είναι ένα έξτρα τουριστικό στοιχείο — είναι ο τρόπος με τον οποίο βλέπετε πραγματικά το νησί. Αυτός ο οδηγός καλύπτει κάθε επιλογή, από ολοήμερες κρουαζιέρες στην Ιθάκη και ενοικίαση σκάφους στο Φισκάρδο μέχρι tours με γυάλινο πάτο για χελώνες και ιστιοπλοΐα ηλιοβασιλέματος.\n\nΓια το πλαίσιο του ίδιου του νησιού, διαβάστε τον πλήρη [οδηγό Κεφαλονιάς](/destinations/kefalonia)."
    },
    points: {
      en: [
        "Day Cruise to Ithaca — the mythological crossing to Odysseus's homeland",
        "Fteri & Amidi Beaches — hidden coves only reachable by sea",
        "Private Boat Hire in Fiskardo — no license required, total freedom",
        "Glass-Bottom Boat & Turtles in Argostoli — family-friendly turtle spotting",
        "Sunset Sailing along the West Coast — Myrtos from the sea at golden hour",
        "Inter-Island Trip to Zakynthos — Navagio Shipwreck & Blue Caves"
      ],
      el: [
        "Ημερήσια κρουαζιέρα στην Ιθάκη — το μυθικό πέρασμα στην πατρίδα του Οδυσσέα",
        "Παραλίες Φτέρι & Αμίδι — κρυμμένοι όρμοι προσβάσιμοι μόνο από τη θάλασσα",
        "Ενοικίαση σκάφους στο Φισκάρδο — χωρίς δίπλωμα, απόλυτη ελευθερία",
        "Tουρ με γυάλινο πάτο & χελώνες στο Αργοστόλι — οικογενειακή παρατήρηση χελωνών",
        "Ιστιοπλοΐα ηλιοβασιλέματος στη δυτική ακτή — ο Μύρτος από τη θάλασσα",
        "Εκδρομή στη Ζάκυνθο — Ναυάγιο & Γαλάζιες Σπηλιές"
      ]
    },
    sections: [
      {
        title: { en: "Day Cruise to Ithaca — the mythological crossing", el: "Ημερήσια κρουαζιέρα στην Ιθάκη — το μυθικό πέρασμα" },
        content: {
          en: "The most popular and most rewarding boat trip from Kefalonia. Ithaca is just a short crossing away but feels like a completely different world — quieter, more intimate, with almost no mass tourism.\n\nOdysseus's legendary homeland has a deep harbour at Vathy, the pretty village of Kioni clinging to a hillside, and the bay of Dexa where the hero was said to have finally come ashore. Most day cruises include swimming stops in bays that are accessible only by boat, and a few hours to walk around Vathy or Kioni.\n\n**Practical tips:**\n\n- Full-day cruises typically depart from Sami or Skala around 9:00–9:30\n- Bring cash for lunch in Vathy — the waterfront tavernas are excellent and often card-free\n- The Ithaca crossing can be choppy if the afternoon wind picks up — morning departures are calmer\n- If you want more time on Ithaca, take the regular ferry from Sami and spend a night\n\n**Best for:** History and mythology lovers, couples, anyone who wants more than beaches\n\n👉 [Kefalonia Day Trips — premium semi-private sailing cruises to Ithaca](/businesses/kefalonia-day-trips)",
          el: "Η πιο δημοφιλής και πιο ανταποδοτική εκδρομή με σκάφος από την Κεφαλονιά. Η Ιθάκη είναι πολύ κοντά, αλλά μοιάζει με έναν εντελώς διαφορετικό κόσμο — πιο ήσυχη, πιο οικεία, σχεδόν χωρίς μαζικό τουρισμό.\n\nΗ μυθική πατρίδα του Οδυσσέα έχει ένα βαθύ λιμάνι στο Βαθύ, το όμορφο χωριό Κιόνι που σκαρφαλώνει σε ένα λόφο, και τον όρμο της Δέξας όπου λέγεται ότι ο ήρωας βγήκε τελικά στη στεριά. Οι περισσότερες ημερήσιες κρουαζιέρες περιλαμβάνουν στάσεις για κολύμπι σε όρμους προσβάσιμους μόνο με σκάφος και λίγες ώρες για να περπατήσετε στο Βαθύ ή στο Κιόνι.\n\n**Πρακτικές συμβουλές:**\n\n- Οι ολοήμερες κρουαζιέρες συνήθως αναχωρούν από τη Σάμη ή τη Σκάλα γύρω στις 9:00–9:30\n- Φέρτε μετρητά για μεσημεριανό στο Βαθύ — οι ταβέρνες δίπλα στο λιμάνι είναι εξαιρετικές και συχνά χωρίς κάρτες\n- Το πέρασμα στην Ιθάκη μπορεί να είναι ταραγμένο αν φυσάει το απόγευμα — οι πρωινές αναχωρήσεις είναι πιο ήρεμες\n- Αν θέλετε περισσότερο χρόνο στην Ιθάκη, πάρτε το κανονικό πλοίο από τη Σάμη και μείνετε μία νύχτα\n\n**Κατάλληλο για:** Λάτρεις της ιστορίας και μυθολογίας, ζευγάρια, όσους θέλουν κάτι περισσότερο από παραλίες\n\n👉 [Kefalonia Day Trips — premium ημι-ιδιωτικές κρουαζιέρες στην Ιθάκη](/businesses/kefalonia-day-trips)"
        }
      },
      {
        title: { en: "Fteri & Amidi Beaches — only reachable by boat", el: "Φτέρι & Αμίδι — μόνο με σκάφος" },
        content: {
          en: "Fteri is widely considered one of the most beautiful beaches in Kefalonia — a wild, white pebble cove with impossibly blue water surrounded by vertical cliffs. There is no road to it. The only way in is by sea.\n\nAmidi, nearby, is similarly dramatic and even more deserted. Local boat operators from the small port of Zola (near Agia Kyriaki, northern Kefalonia) run daily trips to both, often combining them in a half-day or full-day itinerary.\n\nRolling Into The Blue, operating from Zola, offers exactly this — private cruises with skipper and no-license boat rentals for those who want to explore at their own pace. One of the most recommended local experiences in northern Kefalonia.\n👉 [Rolling Into The Blue — boat rentals & private cruises](/businesses/rolling-into-the-blue)\n\n**Practical tips:**\n\n- Zola is a 40-minute drive from Argostoli — plan accordingly\n- Fteri gets direct afternoon sun; Amidi is better earlier in the day\n- These beaches have no facilities — bring food, water and shade\n\n**Best for:** Nature lovers, photographers, couples, anyone who wants genuine seclusion",
          el: "Το Φτέρι θεωρείται ευρέως μία από τις πιο όμορφες παραλίες της Κεφαλονιάς — ένας άγριος, λευκός όρμος με βότσαλο και απίστευτα γαλάζια νερά, περιτριγυρισμένος από κάθετους βράχους. Δεν υπάρχει δρόμος προς αυτό. Η μόνη πρόσβαση είναι από τη θάλασσα.\n\nΤο Αμίδι, εκεί κοντά, είναι εξίσου εντυπωσιακό και ακόμα πιο ερημικό. Ντόπιοι χειριστές σκαφών από το μικρό λιμάνι της Ζόλας (κοντά στην Αγία Κυριακή, βόρεια Κεφαλονιά) εκτελούν καθημερινά δρομολόγια και προς τις δύο, συχνά συνδυάζοντάς τες σε μία ημερήσια ή ημι-ημερήσια διαδρομή.\n\nΤο Rolling Into The Blue, που δραστηριοποιείται από τη Ζόλα, προσφέρει ακριβώς αυτό — ιδιωτικές κρουαζιέρες με skipper και ενοικιάσεις σκαφών χωρίς δίπλωμα. Μία από τις πιο προτεινόμενες τοπικές εμπειρίες στη βόρεια Κεφαλονιά.\n👉 [Rolling Into The Blue — ενοικίαση σκαφών & ιδιωτικές κρουαζιέρες](/businesses/rolling-into-the-blue)\n\n**Πρακτικές συμβουλές:**\n\n- Η Ζόλα είναι 40 λεπτά οδήγηση από το Αργοστόλι — προγραμματίστε ανάλογα\n- Το Φτέρι έχει άμεσο απογευματινό ήλιο· το Αμίδι είναι καλύτερα νωρίτερα μέσα στην ημέρα\n- Αυτές οι παραλίες δεν έχουν υποδομές — φέρτε φαγητό, νερό και σκιά\n\n**Κατάλληλο για:** Λάτρεις της φύσης, φωτογράφους, ζευγάρια, όσους θέλουν πραγματική απομόνωση"
        }
      },
      {
        title: { en: "Private Boat Hire in Fiskardo — no license required", el: "Ενοικίαση σκάφους στο Φισκάρδο — χωρίς δίπλωμα" },
        content: {
          en: "Fiskardo is the most picturesque village in Kefalonia — a Venetian harbour with pastel-coloured buildings that miraculously survived the 1953 earthquake. Hiring a small motorboat here (typically 15–25hp, no license required) is one of the best value, most flexible experiences on the island.\n\nYou set your own route. Most people head south along the dramatic north coast to deserted coves, or cross the narrow strait to northern Ithaca for a swim and a lunch stop. The water between the two islands is extraordinarily clear — you can see the bottom at 8–10 metres.\n\n**Practical tips:**\n\n- Boats typically rent for €60–120 for a half day depending on size\n- Fuel is usually included up to a limit — check before you leave\n- The strait between Kefalonia and Ithaca has occasional ferry traffic — give way and stay to the right\n- Return before 14:00 if the Meltemi wind is forecast — it arrives quickly in the afternoon\n\n**Best for:** Independent travelers, couples, small groups of friends",
          el: "Το Φισκάρδο είναι το πιο γραφικό χωριό της Κεφαλονιάς — ένα βενετσιάνικο λιμάνι με παστέλ κτίρια που επέζησαν ως εκ θαύματος από τον σεισμό του 1953. Η ενοικίαση ενός μικρού μηχανοκίνητου σκάφους εδώ (συνήθως 15–25hp, χωρίς δίπλωμα) είναι μία από τις πιο ευέλικτες εμπειρίες στο νησί.\n\nΕσείς χαράζετε τη διαδρομή σας. Οι περισσότεροι κατευθύνονται νότια κατά μήκος της εντυπωσιακής βόρειας ακτής προς ερημικούς όρμους, ή διασχίζουν το στενό προς τη βόρεια Ιθάκη για κολύμπι και μεσημεριανό. Το νερό ανάμεσα στα δύο νησιά είναι εξαιρετικά καθαρό — βλέπετε τον βυθό στα 8–10 μέτρα.\n\n**Πρακτικές συμβουλές:**\n\n- Τα σκάφη συνήθως ενοικιάζονται €60–120 για μισή μέρα ανάλογα με το μέγεθος\n- Τα καύσιμα συνήθως περιλαμβάνονται μέχρι ένα όριο — ελέγξτε πριν φύγετε\n- Το στενό μεταξύ Κεφαλονιάς και Ιθάκης έχει περιστασιακή κίνηση πλοίων — δώστε προτεραιότητα και μείνετε δεξιά\n- Επιστρέψτε πριν τις 14:00 αν προβλέπεται άνεμος Meltemi — φτάνει γρήγορα το απόγευμα\n\n**Κατάλληλο για:** Ανεξάρτητους ταξιδιώτες, ζευγάρια, μικρές παρέες φίλων"
        }
      },
      {
        title: { en: "Glass-Bottom Boat & Caretta-Caretta Turtles — Argostoli", el: "Tουρ με γυάλινο πάτο & χελώνες Caretta-Caretta — Αργοστόλι" },
        content: {
          en: "Argostoli harbour is one of the few places in Greece where Loggerhead sea turtles (Caretta-Caretta) swim regularly and in close proximity to people. Glass-bottom boat tours depart from the town harbour and offer almost guaranteed sightings in summer, as the turtles follow the fishing boats returning with their catch.\n\nThis is a short trip (1–2 hours) rather than a full-day experience, and works perfectly as a morning or late afternoon activity alongside other plans in Argostoli.\n\n**Practical tips:**\n\n- Best sightings are early morning when fishing boats return\n- Tours run from late May through September\n- The harbour lighthouse road is also a good free spot to see turtles from land\n- Keep noise low on the boat — turtles are easily disturbed\n\n**Best for:** Families with children, wildlife lovers, short trip from Argostoli",
          el: "Το λιμάνι του Αργοστολίου είναι ένα από τα λίγα μέρη στην Ελλάδα όπου οι θαλάσσιες χελώνες Caretta-Caretta κολυμπούν τακτικά και σε κοντινή απόσταση από τους ανθρώπους. Τα τουρ με γυάλινο πάτο αναχωρούν από το λιμάνι και προσφέρουν σχεδόν εγγυημένες θεάσεις το καλοκαίρι, καθώς οι χελώνες ακολουθούν τα ψαροκάικα που επιστρέφουν με τη ψαριά τους.\n\nΠρόκειται για μια σύντομη εκδρομή (1–2 ώρες) και λειτουργεί τέλεια ως πρωινή ή απογευματινή δραστηριότητα παράλληλα με άλλα σχέδια στο Αργοστόλι.\n\n**Πρακτικές συμβουλές:**\n\n- Οι καλύτερες θεάσεις είναι νωρίς το πρωί όταν επιστρέφουν τα ψαροκάικα\n- Τα τουρ λειτουργούν από τα τέλη Μαΐου έως τον Σεπτέμβριο\n- Ο δρόμος προς τον φάρο είναι επίσης ένα καλό δωρεάν σημείο για να δείτε χελώνες από την ξηρά\n- Κρατήστε χαμηλά τον θόρυβο στο σκάφος — οι χελώνες ενοχλούνται εύκολα\n\n**Κατάλληλο για:** Οικογένειες με παιδιά, λάτρεις της άγριας ζωής, σύντομη εκδρομή από το Αργοστόλι"
        }
      },
      {
        title: { en: "Sunset Sailing along the West Coast", el: "Ιστιοπλοΐα ηλιοβασιλέματος στη δυτική ακτή" },
        content: {
          en: "The west coast of Kefalonia — from Assos down past Myrtos to Paliki — faces directly west and offers some of the most dramatic sunset views in the Ionian. Seeing Myrtos from the sea, with the white pebbles turning gold and the cliffs going orange, is a completely different perspective from the famous viewpoint above.\n\nSmall-group sunset sailing trips typically depart from Agia Efimia or Sami and follow the coast north, anchoring for a swim before returning at dusk.\n\n**Practical tips:**\n\n- Trips last 3–4 hours and typically include drinks and snacks\n- Book 2–3 days in advance in July–August\n- Bring a light layer — it cools quickly on the water after sunset\n\n**Best for:** Couples, special occasions, photographers",
          el: "Η δυτική ακτή της Κεφαλονιάς — από το Ασός μέχρι τον Μύρτο και το Παλική — βλέπει απευθείας στη δύση και προσφέρει μερικές από τις πιο εντυπωσιακές θεάσεις ηλιοβασιλέματος στο Ιόνιο. Το να βλέπεις τον Μύρτο από τη θάλασσα, με τα λευκά βότσαλα να γίνονται χρυσά και οι γκρεμοί πορτοκαλί, είναι μια εντελώς διαφορετική προοπτική.\n\nΟι εκδρομές ιστιοπλοΐας ηλιοβασιλέματος για μικρές ομάδες συνήθως αναχωρούν από την Αγία Ευφημία ή τη Σάμη και ακολουθούν την ακτή βόρεια.\n\n**Πρακτικές συμβουλές:**\n\n- Οι εκδρομές διαρκούν 3–4 ώρες και συνήθως περιλαμβάνουν ποτά και σνακ\n- Κλείστε 2–3 ημέρες νωρίτερα τον Ιούλιο–Αύγουστο\n- Φέρτε ένα ελαφρύ στρώμα — κρυώνει γρήγορα στο νερό μετά τη δύση\n\n**Κατάλληλο για:** Ζευγάρια, ειδικές περιστάσεις, φωτογράφους"
        }
      },
      {
        title: { en: "Inter-Island Boat Trip to Zakynthos", el: "Εκδρομή με σκάφος στη Ζάκυνθο" },
        content: {
          en: "For those staying in southern Kefalonia (Skala, Katelios area), a full-day trip down to Zakynthos is possible by seasonal boat service. The combination of Navagio Shipwreck and Blue Caves — Zakynthos's two iconic sea experiences — makes for an impressive day out that contrasts beautifully with Kefalonia's quieter vibe.\n\n**Practical tips:**\n\n- Seasonal service — check current availability as it varies year to year\n- A long day (10–12 hours) — better suited for younger or more active travelers\n- Alternatively, take the ferry to Zakynthos independently and spend a night\n\n**Best for:** Island hoppers, those already planning to visit Zakynthos",
          el: "Για όσους μένουν στη νότια Κεφαλονιά (περιοχή Σκάλας, Κατελιού), μια ολοήμερη εκδρομή στη Ζάκυνθο είναι δυνατή με εποχική υπηρεσία σκαφών. Ο συνδυασμός του Ναυαγίου και των Γαλάζιων Σπηλιών — οι δύο εμβληματικές εμπειρίες της Ζακύνθου — κάνει μια εντυπωσιακή ημέρα.\n\n**Πρακτικές συμβουλές:**\n\n- Εποχική υπηρεσία — ελέγξτε τη διαθεσιμότητα, καθώς ποικίλλει από χρόνο σε χρόνο\n- Μεγάλη ημέρα (10–12 ώρες) — κατάλληλη για πιο δραστήριους ταξιδιώτες\n- Εναλλακτικά, πάρτε το πλοίο για Ζάκυνθο ανεξάρτητα και μείνετε μία νύχτα\n\n**Κατάλληλο για:** Island hoppers, όσους ήδη σχεδιάζουν να επισκεφτούν τη Ζάκυνθο"
        }
      },
      {
        title: { en: "What to Skip", el: "Τι να αποφύγετε" },
        content: {
          en: "Large group party boats from Lassi: These operate on the south coast and are more focused on music and alcohol than on the island itself. Fine if that's what you're after — but not the Kefalonia experience.\n\nOverpriced \"private yacht\" packages from Argostoli harbour touts: A simple motorboat hire from Fiskardo gives you more freedom for a fraction of the price.",
          el: "Μεγάλα σκάφη πάρτι από το Λάσσι: Δραστηριοποιούνται στη νότια ακτή και επικεντρώνονται περισσότερο στη μουσική και το αλκοόλ παρά στο ίδιο το νησί. Εντάξει αν αυτό ψάχνετε — αλλά δεν είναι η εμπειρία της Κεφαλονιάς.\n\nΥπερτιμημένα πακέτα \"ιδιωτικού γιοτ\" από το Αργοστόλι: Μια απλή ενοικίαση μηχανοκίνητου σκάφους από το Φισκάρδο σας δίνει περισσότερη ελευθερία για ένα κλάσμα της τιμής."
        }
      },
      {
        title: { en: "When is the Best Time for Boat Trips in Kefalonia", el: "Πότε είναι η καλύτερη εποχή για εκδρομές με σκάφος" },
        content: {
          en: "**May–June:** Calm seas, uncrowded, ideal conditions. Best months for boat trips overall.\n\n**July–August:** Great weather but afternoon winds (Meltemi) can be strong. Always depart in the morning.\n\n**September–October:** Warm sea, much calmer winds than August, far fewer tourists. Arguably the best boat trip season.",
          el: "**Μάιος–Ιούνιος:** Ήρεμες θάλασσες, χωρίς πολυκοσμία, ιδανικές συνθήκες. Οι καλύτεροι μήνες συνολικά.\n\n**Ιούλιος–Αύγουστος:** Εξαιρετικός καιρός αλλά οι απογευματινοί άνεμοι (Meltemi) μπορεί να είναι δυνατοί. Πάντα να αναχωρείτε το πρωί.\n\n**Σεπτέμβριος–Οκτώβριος:** Ζεστή θάλασσα, πολύ πιο ήρεμοι άνεμοι από τον Αύγουστο, πολύ λιγότεροι τουρίστες. Αναμφισβήτητα η καλύτερη σεζόν."
        }
      },
      {
        title: { en: "Ready to Book", el: "Έτοιμοι να κλείσετε" },
        content: {
          en: "Browse our full [Kefalonia tours & experiences](/tours/kefalonia-tours) page for featured local operators including Rolling Into The Blue and more.\n\nNot sure if Kefalonia is the right island for you?\n[Compare Kefalonia with other Greek islands](https://www.gogreecenow.com/en/travel-tools)",
          el: "Δείτε ολόκληρη τη σελίδα [Εκδρομές & Εμπειρίες Κεφαλονιάς](/tours/kefalonia-tours) για επιλεγμένους τοπικούς παρόχους, συμπεριλαμβανομένου του Rolling Into The Blue και άλλων.\n\nΔεν είστε σίγουροι αν η Κεφαλονιά είναι το κατάλληλο νησί για εσάς;\n[Συγκρίνετε την Κεφαλονιά με άλλα ελληνικά νησιά](https://www.gogreecenow.com/en/travel-tools)"
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
      en: "Lesvos is an island for explorers and food lovers. It's not a destination for rapid sightseeing, but a place to slow down, visit traditional villages, explore geological wonders, and enjoy some of the best culinary traditions in the Aegean. The [Best Time to Visit](/travel-info/best-time-to-visit-greece) guide can help you choose the ideal season for exploring Lesvos and the wider northeast Aegean.",
      el: "Η Λέσβος είναι ένα νησί για εξερευνητές και λάτρεις του φαγητού. Δεν είναι προορισμός για γρήγορο sightseeing, αλλά ένα μέρος για να χαλαρώσεις, να επισκεφτείς παραδοσιακά χωριά και να απολαύσεις κορυφαία γαστρονομία. Ο [Οδηγός Εποχής](/travel-info/best-time-to-visit-greece) μπορεί να σε βοηθήσει να επιλέξεις την ιδανική περίοδο για να επισκεφτείς τη Λέσβο και το βορειοανατολικό Αιγαίο."
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
    title: {
      en: "Best Tours in Mykonos 2026 — Delos, Sailing, Beaches & Hidden Spots",
      el: "Οι Καλύτερες Εκδρομές στη Μύκονο 2026 — Δήλος, Ιστιοπλοΐα, Παραλίες & Κρυμμένα Σημεία"
    },
    description: {
      en: "The best Mykonos tours ranked: Delos island trips, catamaran sailing, Jeep safaris, cooking classes and sunset cruises. What's worth booking, what to skip, and practical tips.",
      el: "Οι καλύτερες εκδρομές στη Μύκονο: Δήλος, ιστιοπλοΐα με καταμαράν, Jeep safaris, μαθήματα μαγειρικής και κρουαζιέρες ηλιοβασιλέματος. Τι αξίζει να κλείσετε, τι να αποφύγετε και πρακτικές συμβουλές."
    },
    image: "/images/mykonos.webp",
    overview: {
      en: "Mykonos is famous for beach clubs and nightlife — but the island has a quieter, richer side that most visitors miss entirely. A short boat ride away lies one of the most important archaeological sites in Greece. The rugged north coast hides beaches that see almost no tourists. And the narrow streets of Chora reward those who explore slowly on foot.\n\nBooking the right tour in Mykonos is the difference between a generic island visit and an experience you'll actually remember. This guide covers every category — from the essential Delos trip to sailing, Jeep safaris, cooking classes and sunset cruises — with honest advice on what's worth your time and money.\n\nIf you're still deciding between islands, our [Santorini vs Mykonos](/travel-info/santorini-vs-mykonos) guide covers the key differences.",
      el: "Η Μύκονο είναι διάσημη για τα beach clubs και τη νυχτερινή ζωή — αλλά το νησί έχει μια πιο ήσυχη, πιο πλούσια πλευρά που οι περισσότεροι επισκέπτες χάνουν εντελώς. Σε μικρή απόσταση με το πλοίο βρίσκεται ένας από τους σημαντικότερους αρχαιολογικούς χώρους στην Ελλάδα. Η τραχιά βόρεια ακτή κρύβει παραλίες που σχεδόν δεν βλέπουν τουρίστες. Και τα στενά δρομάκια της Χώρας ανταμείβουν όσους εξερευνούν αργά με τα πόδια.\n\nΤο να κλείσετε τη σωστή εκδρομή στη Μύκονο κάνει τη διαφορά ανάμεσα σε μια γενική επίσκεψη στο νησί και μια εμπειρία που θα θυμάστε. Αυτός ο οδηγός καλύπτει κάθε κατηγορία — από την απαραίτητη εκδρομή στη Δήλο μέχρι ιστιοπλοΐα, Jeep safaris, μαθήματα μαγειρικής και κρουαζιέρες ηλιοβασιλέματος — με ειλικρινείς συμβουλές για το τι αξίζει τον χρόνο και τα χρήματά σας.\n\nΑν ακόμα αποφασίζετε μεταξύ νησιών, ο οδηγός μας [Σαντορίνη vs Μύκονος](/travel-info/santorini-vs-mykonos) καλύπτει τις βασικές διαφορές."
    },
    points: {
      en: [
        "Delos Island Tour — the unmissable archaeological day trip from Mykonos",
        "Catamaran Sailing & Delos–Rhenia Cruise — the most popular full-day experience",
        "Sunset Cruise from Little Venice — iconic golden hour experience on the water",
        "Mykonos Town Walking Tour — explore the labyrinthine streets with a guide",
        "Jeep Safari to Hidden Beaches & Villages — discover the quiet north coast",
        "Greek Cooking Class — learn local dishes in a traditional Mykonian kitchen"
      ],
      el: [
        "Εκδρομή στη Δήλο — η απαραίτητη αρχαιολογική ημερήσια εκδρομή από τη Μύκονο",
        "Κρουαζιέρα με καταμαράν Δήλου–Ρήνειας — η πιο δημοφιλής ολοήμερη εμπειρία",
        "Κρουαζιέρα ηλιοβασιλέματος από τη Μικρή Βενετία — εμβληματική εμπειρία στο νερό",
        "Περιήγηση στη Χώρα Μυκόνου — εξερευνήστε τα λαβυρινθώδη δρομάκια με ξεναγό",
        "Jeep Safari σε κρυφές παραλίες & χωριά — ανακαλύψτε την ήσυχη βόρεια ακτή",
        "Μάθημα ελληνικής μαγειρικής — μάθετε τοπικά πιάτα σε παραδοσιακή κουζίνα"
      ]
    },
    sections: [
      {
        title: { en: "Delos Island Tour — the unmissable one", el: "Εκδρομή στη Δήλο — αυτή που δεν χάνεται" },
        content: {
          en: "Delos is a 20-minute boat ride from Mykonos Town and is one of the most significant open-air archaeological sites in the entire Mediterranean. The mythological birthplace of Apollo and Artemis, it was the religious and commercial center of the ancient Aegean world.\n\nWhy it's worth it: The mosaics, marble lions, temples and ancient theatre are remarkably preserved. Without a guide, most visitors walk past the most important details without understanding what they're looking at.\n\n**Practical tips:**\n\n- Take the first morning boat (around 9:00) to beat the heat and the cruise crowds\n- A guided tour lasts 2.5–3 hours on site\n- The island has no shade — bring a hat, sunscreen and plenty of water\n- Boats run from the Old Port of Mykonos Town; last return is typically around 15:00\n\n**Best for:** History lovers, culture seekers, first-time visitors to Mykonos",
          el: "Η Δήλος είναι 20 λεπτά με το πλοίο από τη Χώρα της Μυκόνου και είναι ένας από τους σημαντικότερους αρχαιολογικούς χώρους σε όλη τη Μεσόγειο. Μυθολογική γενέτειρα του Απόλλωνα και της Άρτεμης, ήταν το θρησκευτικό και εμπορικό κέντρο του αρχαίου Αιγαίου.\n\nΓιατί αξίζει: Τα ψηφιδωτά, τα μαρμάρινα λιοντάρια, οι ναοί και το αρχαίο θέατρο είναι εξαιρετικά διατηρημένα. Χωρίς ξεναγό, οι περισσότεροι επισκέπτες περνούν μπροστά από τις σημαντικότερες λεπτομέρειες χωρίς να καταλαβαίνουν τι βλέπουν.\n\n**Πρακτικές συμβουλές:**\n\n- Πάρτε το πρώτο πρωινό πλοίο (περίπου 9:00) για να αποφύγετε τη ζέστη και τα πλήθη\n- Μια ξενάγηση διαρκεί 2.5–3 ώρες στον χώρο\n- Το νησί δεν έχει σκιά — φέρτε καπέλο, αντηλιακό και άφθονο νερό\n- Τα πλοία αναχωρούν από το Παλιό Λιμάνι της Χώρας· η τελευταία επιστροφή είναι περίπου στις 15:00\n\n**Κατάλληλο για:** Λάτρεις της ιστορίας, αναζητητές πολιτισμού, επισκέπτες πρώτης φοράς στη Μύκονο"
        }
      },
      {
        title: { en: "Catamaran Sailing & Delos–Rhenia Cruise", el: "Ιστιοπλοΐα με καταμαράν & κρουαζιέρα Δήλου–Ρήνειας" },
        content: {
          en: "The most popular full-day experience on Mykonos — and for good reason. A catamaran takes you to Delos and then to Rhenia, an uninhabited island next door with crystal-clear water, sea caves and zero crowds.\n\nWhat's typically included: Swimming stops, snorkeling equipment, onboard BBQ or Greek lunch, drinks, and a guided visit to Delos.\n\n**Practical tips:**\n\n- Small-group catamarans (8–12 people) are far better than large group boats\n- Book at least 3–5 days ahead in July and August — they sell out fast\n- Morning departures offer calmer seas; afternoon trips get windier (Mykonos is famously windy)\n\n**Best for:** Couples, groups of friends, anyone who wants sea + history in one day",
          el: "Η πιο δημοφιλής ολοήμερη εμπειρία στη Μύκονο — και για καλό λόγο. Ένα καταμαράν σας πηγαίνει στη Δήλο και στη συνέχεια στη Ρήνεια, ένα ακατοίκητο νησί με κρυστάλλινα νερά, θαλάσσιες σπηλιές και μηδενική πολυκοσμία.\n\nΤι περιλαμβάνεται συνήθως: Στάσεις για κολύμπι, εξοπλισμός ψαροντούφεκου, BBQ ή ελληνικό μεσημεριανό στο σκάφος, ποτά και ξενάγηση στη Δήλο.\n\n**Πρακτικές συμβουλές:**\n\n- Τα καταμαράν μικρών ομάδων (8–12 άτομα) είναι πολύ καλύτερα από τα μεγάλα σκάφη\n- Κλείστε τουλάχιστον 3–5 ημέρες νωρίτερα τον Ιούλιο και τον Αύγουστο — εξαντλούνται γρήγορα\n- Οι πρωινές αναχωρήσεις έχουν πιο ήρεμες θάλασσες· τα απογευματινά ταξίδια γίνονται πιο φιλόνεμα (η Μύκονο είναι διάσημα φιλόξενη στον άνεμο)\n\n**Κατάλληλο για:** Ζευγάρια, παρέες φίλων, όποιον θέλει θάλασσα + ιστορία σε μία μέρα"
        }
      },
      {
        title: { en: "Sunset Cruise from Little Venice", el: "Κρουαζιέρα ηλιοβασιλέματος από τη Μικρή Βενετία" },
        content: {
          en: "One of the most iconic Mykonos experiences. A small boat or catamaran takes you along the coast at golden hour, with views of the windmills, Little Venice and the Aegean turning orange and pink.\n\n**Practical tips:**\n\n- Most sunset cruises last 2–3 hours and include drinks\n- Departure is usually around 17:30–18:00 depending on season\n- Much less crowded than watching sunset from the shore\n\n**Best for:** Couples, honeymoon, special occasions",
          el: "Μία από τις πιο εμβληματικές εμπειρίες στη Μύκονο. Ένα μικρό σκάφος ή καταμαράν σας πηγαίνει κατά μήκος της ακτής την ώρα του χρυσού ηλιοβασιλέματος, με θέα τους ανεμόμυλους, τη Μικρή Βενετία και το Αιγαίο να γίνεται πορτοκαλί και ροζ.\n\n**Πρακτικές συμβουλές:**\n\n- Οι περισσότερες κρουαζιέρες ηλιοβασιλέματος διαρκούν 2–3 ώρες και περιλαμβάνουν ποτά\n- Η αναχώρηση είναι συνήθως γύρω στις 17:30–18:00 ανάλογα με την εποχή\n- Πολύ λιγότερο πολυσύχναστο από την παρακολούθηση του ηλιοβασιλέματος από την ακτή\n\n**Κατάλληλο για:** Ζευγάρια, μήνα του μέλιτος, ειδικές περιστάσεις"
        }
      },
      {
        title: { en: "Mykonos Town Walking Tour", el: "Περιήγηση στη Χώρα Μυκόνου" },
        content: {
          en: "Mykonos Town (Chora) looks simple from a distance — white walls, blue doors, bougainvillea. But it's deliberately designed as a labyrinth to confuse pirates, and most first-time visitors get genuinely lost within minutes.\n\nA guided walking tour of 2–3 hours covers Little Venice, the famous windmills, the Church of Paraportiani (one of the most photographed in Greece), the old Market Street, and the stories behind the facades that every tourist photographs but few understand.\n\n**Practical tips:**\n\n- Morning tours (8:00–10:00) or evening tours (19:00 onwards) avoid the midday heat\n- Many tours are free with tip, others are €15–25 per person\n- Wear flat, closed shoes — the marble streets are slippery\n\n**Best for:** First-time visitors, history and architecture enthusiasts, solo travelers",
          el: "Η Χώρα της Μυκόνου φαίνεται απλή από απόσταση — λευκοί τοίχοι, μπλε πόρτες, βουκαμβίλιες. Αλλά είναι σχεδιασμένη σαν λαβύρινθος για να μπερδεύει τους πειρατές, και οι περισσότεροι επισκέπτες πρώτης φοράς χάνονται μέσα σε λίγα λεπτά.\n\nΜια ξενάγηση 2–3 ωρών καλύπτει τη Μικρή Βενετία, τους διάσημους ανεμόμυλους, την εκκλησία της Παραπορτιανής (μία από τις πιο φωτογραφημένες στην Ελλάδα), την παλιά οδό της Αγοράς και τις ιστορίες πίσω από τις προσόψεις που κάθε τουρίστας φωτογραφίζει αλλά λίγοι καταλαβαίνουν.\n\n**Πρακτικές συμβουλές:**\n\n- Πρωινές ξεναγήσεις (8:00–10:00) ή βραδινές (19:00 και μετά) αποφεύγουν τη μεσημεριανή ζέστη\n- Πολλές ξεναγήσεις είναι δωρεάν με φιλοδώρημα, άλλες €15–25 ανά άτομο\n- Φορέστε επίπεδα, κλειστά παπούτσια — οι μαρμάρινοι δρόμοι είναι γλιστεροί\n\n**Κατάλληλο για:** Επισκέπτες πρώτης φοράς, λάτρεις της ιστορίας και αρχιτεκτονικής, σόλο ταξιδιώτες"
        }
      },
      {
        title: { en: "Jeep Safari to Hidden Beaches & Villages", el: "Jeep Safari σε κρυφές παραλίες & χωριά" },
        content: {
          en: "The interior and north coast of Mykonos are rarely visited — and completely different from the glamorous south. A 4x4 Jeep tour takes you off the main roads to the quiet beach of Fokos, small chapels, hilltop views across the Cyclades and traditional farming villages.\n\n**Practical tips:**\n\n- Half-day tours (3–4 hours) are enough\n- Goes to beaches with no sunbeds or services — bring your own food and water\n- One of the best value experiences on the island (€40–60 per person)\n\n**Best for:** Adventurous travelers, those who want to escape the main tourist circuit",
          el: "Το εσωτερικό και η βόρεια ακτή της Μυκόνου σπάνια επισκέπτονται — και είναι εντελώς διαφορετικά από τη λαμπερή νότια πλευρά. Μια περιήγηση με 4x4 Jeep σας βγάζει από τους κεντρικούς δρόμους στην ήσυχη παραλία του Φωκού, σε μικρά ξωκλήσια, σε λόφους με πανοραμική θέα στις Κυκλάδες και σε παραδοσιακά αγροτικά χωριά.\n\n**Πρακτικές συμβουλές:**\n\n- Οι ημερήσιες εκδρομές (3–4 ώρες) είναι αρκετές\n- Πηγαίνει σε παραλίες χωρίς ξαπλώστρες ή υπηρεσίες — φέρτε το δικό σας φαγητό και νερό\n- Μία από τις εκδρομές με την καλύτερη σχέση ποιότητας-τιμής στο νησί (€40–60 ανά άτομο)\n\n**Κατάλληλο για:** Περιπετειώδεις ταξιδιώτες, όσους θέλουν να ξεφύγουν από τον τουριστικό κύκλο"
        }
      },
      {
        title: { en: "Greek Cooking Class", el: "Μάθημα ελληνικής μαγειρικής" },
        content: {
          en: "A small-group cooking class in a traditional Mykonian kitchen — learning to make local dishes like loukoumades, moussaka or fresh pasta — is a surprisingly personal and memorable experience compared to just eating out.\n\n**Practical tips:**\n\n- Classes run 3–4 hours and usually include a shared meal at the end\n- Typically hosted in private homes or local tavernas outside Mykonos Town\n- Book well in advance — these are small groups (6–10 people) and fill up\n\n**Best for:** Food lovers, couples, solo travelers wanting a social experience",
          el: "Ένα μάθημα μαγειρικής σε μικρή ομάδα σε μια παραδοσιακή μυκονιάτικη κουζίνα — μαθαίνοντας να φτιάχνετε τοπικά πιάτα όπως λουκουμάδες, μουσακά ή φρέσκα ζυμαρικά — είναι μια εκπληκτικά προσωπική και αξέχαστη εμπειρία σε σύγκριση με το απλό φαγητό έξω.\n\n**Πρακτικές συμβουλές:**\n\n- Τα μαθήματα διαρκούν 3–4 ώρες και συνήθως περιλαμβάνουν κοινό γεύμα στο τέλος\n- Φιλοξενούνται συνήθως σε ιδιωτικά σπίτια ή τοπικές ταβέρνες έξω από τη Χώρα\n- Κλείστε έγκαιρα — οι ομάδες είναι μικρές (6–10 άτομα) και γεμίζουν γρήγορα\n\n**Κατάλληλο για:** Λάτρεις του φαγητού, ζευγάρια, σόλο ταξιδιώτες που θέλουν κοινωνική εμπειρία"
        }
      },
      {
        title: { en: "What to Skip", el: "Τι να αποφύγετε" },
        content: {
          en: "Large group party boats: Fun for some, but overcrowded, noisy, and you won't see anything of the island. If you want a boat day, invest in a small-group catamaran.\n\nGeneric \"island tour\" buses: These cover the main spots quickly without depth. Better to rent an ATV or join a Jeep safari for the same money.",
          el: "Μεγάλα σκάφη πάρτι: Διασκεδαστικά για κάποιους, αλλά υπερπλήρη, θορυβώδη και δεν βλέπετε τίποτα από το νησί. Αν θέλετε μέρα στη θάλασσα, επενδύστε σε ένα καταμαράν μικρής ομάδας.\n\nΓενικές \"ξεναγήσεις νησιού\" με λεωφορείο: Καλύπτουν γρήγορα τα κύρια σημεία χωρίς βάθος. Καλύτερα να νοικιάσετε ATV ή να συμμετάσχετε σε ένα Jeep safari για τα ίδια χρήματα."
        }
      },
      {
        title: { en: "How to Book Tours in Mykonos", el: "Πώς να κλείσετε εκδρομές στη Μύκονο" },
        content: {
          en: "Book directly through local operators at the Old Port or Mykonos Town for day-of availability. For July and August, book 3–7 days ahead online to guarantee your spot, especially for Delos trips and catamarans.\n\n**Ready to explore Mykonos tours?**\nBrowse our full [Mykonos Tours & Experiences](/tours/mykonos-tours) page for selected local operators, boat tours, Delos trips and more.\n\nAnd if you haven't decided on your destination yet:\n[Compare Mykonos with other Greek islands](https://www.gogreecenow.com/en/travel-tools)",
          el: "Κλείστε απευθείας μέσω τοπικών παρόχων στο Παλιό Λιμάνι ή στη Χώρα για αυθημερόν διαθεσιμότητα. Για Ιούλιο και Αύγουστο, κλείστε 3–7 ημέρες νωρίτερα online για να εξασφαλίσετε τη θέση σας, ειδικά για εκδρομές στη Δήλο και καταμαράν.\n\n**Έτοιμοι να εξερευνήσετε τις εκδρομές στη Μύκονο;**\nΔείτε ολόκληρη τη σελίδα [Εκδρομές & Εμπειρίες Μυκόνου](/tours/mykonos-tours) για επιλεγμένους τοπικούς παρόχους, κρουαζιέρες και άλλα.\n\nΚαι αν δεν έχετε αποφασίσει ακόμα για τον προορισμό σας:\n[Συγκρίνετε τη Μύκονο με άλλα ελληνικά νησιά](https://www.gogreecenow.com/en/travel-tools)"
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
      en: "Athens is a sprawling metropolis, but the historic center is surprisingly compact. For first-time visitors, staying central is crucial to minimize transit time and maximize your ability to walk to the Acropolis and major museums. Our [Trip Planning Checklist](/travel-info/greece-trip-planning-checklist) covers hotel area selection and the [Getting Around Greece](/travel-info/getting-around-greece) guide explains how Athens connects to the islands.",
      el: "Η Αθήνα είναι μια τεράστια μητρόπολη, αλλά το ιστορικό της κέντρο είναι εκπληκτικά συμπαγές. Η [Λίστα Προετοιμασίας](/travel-info/greece-trip-planning-checklist) καλύπτει επιλογή περιοχής ξενοδοχείου και ο οδηγός [Μετακινήσεις στην Ελλάδα](/travel-info/getting-around-greece) εξηγεί πώς η Αθήνα συνδέεται με τα νησιά."
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
  },
  {
    slug: "greece-travel-budget",
    title: {
      en: "How Much Does a Trip to Greece Cost? A Real Budget Guide",
      el: "Πόσο Κοστίζει ένα Ταξίδι στην Ελλάδα; Πραγματικός Οδηγός"
    },
    description: {
      en: "Find out how much a trip to Greece really costs — daily budgets, accommodation, food, ferries and island-by-island cost breakdown for every travel style.",
      el: "Μάθετε πόσο κοστίζει πραγματικά ένα ταξίδι στην Ελλάδα — ημερήσιοι προϋπολογισμοί, διαμονή, φαγητό, ακτοπλοΐα και ανάλυση κόστους ανά νησί."
    },
    image: "/images/greece-travel-budget.webp",
    overview: {
      en: "Greece has a reputation for being expensive, largely because Santorini and Mykonos dominate its image. The reality is more nuanced. Greece can be done on a tight budget, a comfortable mid-range spend, or a full luxury experience — and the cost of your trip depends more on your choices than on Greece itself. This guide breaks down real, current costs across accommodation, food, transport and experiences so you can plan your trip with honest numbers in hand. Combine it with the [Best Time to Visit](/travel-info/best-time-to-visit-greece) guide for seasonal pricing, the [Trip Planning Checklist](/travel-info/greece-trip-planning-checklist) for practical steps, and [First-Time Visitors](/travel-info/first-time-in-greece) for island recommendations.",
      el: "Η Ελλάδα έχει τη φήμη ακριβού προορισμού, κυρίως λόγω Σαντορίνης και Μυκόνου. Η πραγματικότητα είναι πιο σύνθετη. Συνδύασε τον οδηγό με τον [Οδηγό Εποχής](/travel-info/best-time-to-visit-greece) για εποχικές τιμές, τη [Λίστα Προετοιμασίας](/travel-info/greece-trip-planning-checklist) για πρακτικά βήματα, και τον οδηγό [Καλύτερα Νησιά για Πρώτη Επίσκεψη](/travel-info/first-time-in-greece) για προτάσεις νησιών."
    },
    points: {
      en: [
        "Budget travellers can manage well on €60–€90 per day per person outside peak season",
        "Mid-range travel is very comfortable at €120–€200 per day per person",
        "Santorini and Mykonos carry a premium; Crete, Corfu and the Ionians offer better value",
        "Ferry costs are manageable — book early for summer peak routes",
        "Shoulder season (May–June, September) delivers the same experience for significantly less",
        "Street food, local tavernas and free beaches make day-to-day spending very controllable"
      ],
      el: [
        "Ταξιδιώτες με χαμηλό budget τα βγάζουν πέρα με €60–€90/ημέρα εκτός υψηλής σεζόν",
        "Μεσαίος προϋπολογισμός €120–€200/ημέρα είναι πολύ άνετος",
        "Σαντορίνη και Μύκονος είναι ακριβές· Κρήτη, Κέρκυρα και Ιόνιο προσφέρουν καλύτερη αξία",
        "Τα ακτοπλοϊκά εισιτήρια είναι διαχειρίσιμα — κλείστε νωρίς για καλοκαίρι",
        "Μάιος–Ιούνιος και Σεπτέμβριος προσφέρουν την ίδια εμπειρία φθηνότερα",
        "Street food, ντόπιες ταβέρνες και δωρεάν παραλίες κρατούν το κόστος χαμηλά"
      ]
    },
    sections: [
      {
        title: { en: "1. Daily Budget Ranges: What to Expect", el: "1. Ημερήσιος Προϋπολογισμός" },
        content: {
          en: "Before diving into specific costs, it helps to understand the three main travel styles and what they typically look like in Greece:\n\nBudget traveller (€60–€90 per person per day): This tier works best outside of peak July–August, on less commercialised islands and if you are comfortable with simpler accommodation, local tavernas and public transport. Destinations like Naxos, Lesvos, Ikaria, Samos and parts of Crete offer genuinely affordable experiences. You can eat very well on a Greek budget — a full meal at a local taverna with wine rarely exceeds €15–18 per person.\n\nMid-range traveller (€120–€220 per person per day): This is the most common travel style for visitors to Greece. It covers comfortable hotels or boutique stays in good locations, a mix of restaurant meals and tavernas, car rental on islands where it makes sense, and the occasional paid experience or excursion. Most popular islands — including Corfu, Crete, Rhodes and Paros — are very manageable at this level.\n\nLuxury traveller (€300–€600+ per person per day): Santorini and Mykonos in high season are natural luxury destinations, but this tier can apply anywhere if you choose cave hotels, infinity-pool suites, private boat charters and tasting menus. Greece has grown significantly in luxury offering over the last decade, particularly in the Ionian islands, Halkidiki and the Cyclades.",
          el: "Πριν δούμε τα συγκεκριμένα κόστη, είναι χρήσιμο να κατανοήσετε τα τρία βασικά στυλ ταξιδιού:\n\nΧαμηλό budget (€60–€90/άτομο/ημέρα): Ιδανικό εκτός Ιουλίου–Αυγούστου, σε λιγότερο εμπορικά νησιά. Νάξος, Λέσβος, Ικαρία, Σάμος και Κρήτη προσφέρουν προσιτές εμπειρίες.\n\nΜεσαίο budget (€120–€220/άτομο/ημέρα): Το πιο συνηθισμένο στυλ. Καλύπτει άνετα ξενοδοχεία, εστιατόρια, ενοικίαση αυτοκινήτου και περιστασιακές εκδρομές.\n\nΠολυτελές ταξίδι (€300–€600+/άτομο/ημέρα): Σαντορίνη και Μύκονος στην υψηλή σεζόν είναι φυσικοί πολυτελείς προορισμοί."
        }
      },
      {
        title: { en: "2. Accommodation Costs in Greece", el: "2. Κόστος Διαμονής" },
        content: {
          en: "Accommodation is where your budget swings most dramatically depending on destination and season.\n\nBudget options (€25–€70 per night): Guesthouses, family-run rooms, simpler hotels away from main tourist centres, and some mid-range options in shoulder season. On islands like Naxos, Paros, Lesvos and parts of Corfu, you can find clean, well-located rooms in this range even in summer.\n\nMid-range hotels (€80–€180 per night): This bracket covers comfortable hotels with pools, boutique guesthouses and well-reviewed 3–4 star properties. Most islands have solid choices in this range, especially if you book early for July and August.\n\nLuxury and boutique stays (€200–€800+ per night): Santorini's caldera-view hotels set the benchmark. A sea-view suite in Oia during high season can reach €600–€900 per night. Mykonos follows a similar pattern. However, the same level of boutique luxury in Kefalonia, Paros or Samos costs significantly less — often half the price.\n\nPractical tip: Prices drop substantially in shoulder season (May–June and September–October). A hotel that costs €250 in August often runs at €120–€140 in September with identical service and better weather for sightseeing.",
          el: "Η διαμονή είναι το σημείο όπου το budget σας μεταβάλλεται πιο δραματικά.\n\nΟικονομικές επιλογές (€25–€70/βράδυ): Ξενώνες, οικογενειακά δωμάτια και απλά ξενοδοχεία. Σε Νάξο, Πάρο, Λέσβο και Κρήτη υπάρχουν καθαρά δωμάτια ακόμα και το καλοκαίρι.\n\nΜεσαία κατηγορία (€80–€180/βράδυ): Άνετα ξενοδοχεία με πισίνες και boutique επιλογές 3–4 αστέρων.\n\nΠολυτέλεια (€200–€800+/βράδυ): Τα ξενοδοχεία με θέα καλδέρας στη Σαντορίνη είναι τα πιο ακριβά. Μια σουίτα στην Οία μπορεί να φτάσει €600–€900 τη βραδιά.\n\nΣυμβουλή: Τιμές πολύ χαμηλότερες τον Μάιο–Ιούνιο και Σεπτέμβριο."
        }
      },
      {
        title: { en: "3. Food and Drink Costs", el: "3. Κόστος Φαγητού και Ποτού" },
        content: {
          en: "Greek food is one of the great pleasures of visiting the country, and it does not have to be expensive.\n\nLocal tavernas: A full meal — mezedes, grilled fish or meat, salad, bread and local wine or beer — typically costs €14–€20 per person. This is the backbone of eating in Greece, and the quality is often exceptional.\n\nTourist-facing restaurants in main areas: In Oia (Santorini), Little Venice (Mykonos) or Plaka (Athens), restaurant prices climb significantly. A pasta dish can reach €18–€22, and a grilled sea bass can cost €28–€38.\n\nStreet food and bakeries: A fresh tiropita or spanakopita costs €1.50–€2.50. Souvlaki wraps run €2.50–€4. Fresh bread, yoghurt and honey from a market makes for an excellent cheap breakfast.\n\nCoffee culture: A frappe or freddo espresso at a local café costs €2–€3.50. Avoid ordering coffee at hotel pools where the same drink costs €5–€8.",
          el: "Το ελληνικό φαγητό είναι μία από τις μεγάλες απολαύσεις και δεν χρειάζεται να είναι ακριβό.\n\nΤοπικές ταβέρνες: Ένα πλήρες γεύμα — μεζέδες, ψάρι ή κρέας, σαλάτα και κρασί — συνήθως €14–€20/άτομο.\n\nΤουριστικά εστιατόρια: Στην Οία, τη Μύκονο ή την Πλάκα, οι τιμές ανεβαίνουν σημαντικά.\n\nStreet food: Τυρόπιτα ή σπανακόπιτα €1.50–€2.50. Σουβλάκι €2.50–€4.\n\nΚαφές: Freddo ή frappe σε τοπικό καφενείο €2–€3.50."
        }
      },
      {
        title: { en: "4. Ferry and Transport Costs", el: "4. Μετακινήσεις και Ακτοπλοΐα" },
        content: {
          en: "Ferries are a central part of travelling around Greece, and their cost varies enormously depending on the route, company, season and how far in advance you book.\n\nShort Aegean routes (Piraeus to Cyclades): A basic deck-class ferry ticket to Mykonos or Santorini from Piraeus costs €35–€50 one way. Fast ferries on the same routes cost €55–€80 one way.\n\nLonger routes (Athens to Crete, Rhodes, Lesvos): Overnight ferries cost €35–€55 for a basic seat. A cabin adds €30–€60 per cabin per journey.\n\nInter-island ferries: Shorter hops between neighbouring islands — Paros to Naxos, Mykonos to Delos — often cost €8–€18 per person.\n\nDomestic flights: Olympic Air and Sky Express connect Athens with most island airports. Prices vary from €35–€120 one way.\n\nCar rental: Renting a small car costs €30–€60 per day in shoulder season and €50–€90 in peak summer.",
          el: "Τα πλοία είναι κεντρικό μέρος του ταξιδιού στην Ελλάδα.\n\nΜικρές διαδρομές Αιγαίου: Πειραιάς προς Μύκονο ή Σαντορίνη €35–€50 απλή μετάβαση. Ταχύπλοα €55–€80.\n\nΜεγάλες διαδρομές: Αθήνα προς Κρήτη, Ρόδο ή Λέσβο €35–€55 για απλή θέση. Καμπίνα +€30–€60.\n\nΜικρές αποστάσεις: Πάρος–Νάξος, Μύκονος–Δήλος €8–€18.\n\nΕσωτερικές πτήσεις: €35–€120 απλή μετάβαση.\n\nΕνοικίαση αυτοκινήτου: €30–€60/ημέρα εκτός σεζόν, €50–€90 τον Ιούλιο–Αύγουστο."
        }
      },
      {
        title: { en: "5. Experiences, Attractions and Activities", el: "5. Εμπειρίες και Δραστηριότητες" },
        content: {
          en: "Most of Greece's best experiences are either free or modestly priced.\n\nThe Acropolis (Athens): €20 full price. One of the world's great monuments, worth every cent.\nArchaeological Museum of Athens: €12. One of the world's finest collections of ancient Greek artefacts.\n\nSailing and boat trips: Day boat trips around islands typically cost €40–€90 per person.\nBeaches: Almost entirely free. Organised beach clubs with sunbeds at Mykonos and Santorini can reach €30–€80 per person per day.\n\nGuided tours: Half-day and full-day guided tours in Athens, Delphi or Olympia typically run €25–€60 per person. Sunset wine tours in Santorini, food tours in Athens and kayak tours in Kefalonia are all in the €45–€90 range.",
          el: "Οι περισσότερες από τις καλύτερες εμπειρίες της Ελλάδας είναι δωρεάν ή οικονομικές.\n\nΑκρόπολη: €20. Εθνικό Αρχαιολογικό Μουσείο: €12.\n\nΕκδρομές με σκάφος: €40–€90/άτομο.\nΠαραλίες: Σχεδόν όλες δωρεάν. Οργανωμένες σε Μύκονο–Σαντορίνη €30–€80.\n\nΞεναγήσεις: Ημερήσιες €25–€60/άτομο. Οινογνωσία, food tours, kayak: €45–€90."
        }
      },
      {
        title: { en: "6. Island-by-Island Cost Comparison", el: "6. Σύγκριση Κόστους ανά Νησί" },
        content: {
          en: "Not all Greek islands cost the same. Here is a practical snapshot:\n\nSantorini: The most expensive island overall. Budget for €200–€400+ per day per couple in high season.\nMykonos: Comparable to Santorini in hotel costs, beach clubs and nightlife add significantly to the daily spend.\nCrete: Genuinely flexible across all budgets. Excellent value for mid-range.\nCorfu: Very affordable outside of the main resort strip. Excellent value for families.\nParos / Naxos: Authentically priced Cycladic islands. Strong mid-range value.\nKefalonia / Zakynthos / Lefkada: Ionian islands offer strong value relative to their natural beauty.\nLesvos / Samos / Ikaria: Among the most affordable islands in Greece with excellent food and minimal tourist mark-up.",
          el: "Δεν κοστίζουν όλα τα νησιά το ίδιο.\n\nΣαντορίνη: Το ακριβότερο νησί. €200–€400+/ημέρα για ζευγάρι.\nΜύκονος: Παρόμοιο κόστος διαμονής, ακριβά beach clubs.\nΚρήτη: Ευέλικτη για όλα τα budgets.\nΚέρκυρα: Πολύ προσιτή εκτός τουριστικών ζωνών.\nΠάρος/Νάξος: Καλή σχέση ποιότητας-τιμής.\nΚεφαλονιά/Ζάκυνθος/Λευκάδα: Ισχυρή αξία σε σχέση με την ομορφιά τους.\nΛέσβος/Σάμος/Ικαρία: Από τα πιο οικονομικά νησιά."
        }
      },
      {
        title: { en: "7. Tips to Save Money on a Greece Trip", el: "7. Συμβουλές για Οικονομία" },
        content: {
          en: "Planning and timing are the two most powerful tools for managing your Greece travel budget.\n\nTravel in shoulder season. May, June and September offer lower prices, calmer weather for sightseeing, and a more relaxed atmosphere.\n\nBook ferries early for peak summer. High-demand sailings sell out or become significantly more expensive if booked at the last minute.\n\nEat where locals eat. Walk two or three streets back from any harbour or main beach and you will typically find local tavernas at 30–40% lower prices.\n\nConsider a basecamp strategy. Staying in one location and making day trips costs less than moving hotels every two days.\n\nUse Athens wisely. Athens is one of Europe's more affordable capitals. Staying a night or two in Athens as part of your island trip keeps your accommodation average down.",
          el: "Ο προγραμματισμός και η εποχή είναι τα πιο ισχυρά εργαλεία για τον προϋπολογισμό σας.\n\nΤαξιδέψτε σε ενδιάμεση σεζόν. Μάιος, Ιούνιος και Σεπτέμβριος προσφέρουν χαμηλότερες τιμές.\n\nΚλείστε ακτοπλοϊκά νωρίς για το καλοκαίρι.\n\nΤρώτε εκεί που τρώνε οι ντόπιοι — οι ταβέρνες λίγο πιο μέσα κοστίζουν 30–40% λιγότερο.\n\nΣτρατηγική βάσης: Μείνετε σε ένα μέρος και κάντε ημερήσιες εκδρομές.\n\nΑξιοποιήστε την Αθήνα — είναι από τις πιο οικονομικές ευρωπαϊκές πρωτεύουσες."
        }
      }
    ]
  },
  {
    slug: "honeymoon-in-greece",
    title: {
      en: "Honeymoon in Greece: Best Islands, Experiences & Planning Guide",
      el: "Μήνας του Μέλιτος στην Ελλάδα: Οδηγός για τα Καλύτερα Νησιά"
    },
    description: {
      en: "Plan the perfect honeymoon in Greece with our guide to the best islands, most romantic hotels, ideal timing and unforgettable experiences for couples.",
      el: "Σχεδιάστε τον τέλειο μήνα του μέλιτος στην Ελλάδα — τα καλύτερα νησιά, τα πιο ρομαντικά ξενοδοχεία και αξέχαστες εμπειρίες για ζευγάρια."
    },
    image: "/images/honeymoon-in-greece.webp",
    overview: {
      en: "Greece has been a honeymoon destination for decades, and the reasons are timeless: extraordinary light, dramatic landscapes, exceptional food, warm water, and a pace of life that naturally slows you down. But choosing the right island — and the right area within that island — makes all the difference. A honeymoon in Santorini looks nothing like a honeymoon in Kefalonia or Paros, and that variety is exactly what makes Greece such a compelling romantic destination. This guide helps you match your vision for the trip with the right island, the right timing and the right experiences.",
      el: "Η Ελλάδα είναι εδώ και δεκαετίες κορυφαίος προορισμός για μήνα του μέλιτος. Το φως, τα τοπία, το φαγητό και ο ρυθμός ζωής δημιουργούν το ιδανικό σκηνικό για ζευγάρια. Αλλά η επιλογή του σωστού νησιού κάνει τη διαφορά."
    },
    points: {
      en: [
        "Santorini is the iconic choice for caldera views, sunsets and dramatic romance",
        "Paros and Naxos offer Cycladic beauty with a more intimate, less crowded atmosphere",
        "Kefalonia and Hydra are excellent for couples who prefer lush scenery and privacy",
        "June and September are the best months — warm, beautiful and calmer than peak summer",
        "Private boat charter is one of the most universally loved honeymoon experiences in Greece",
        "Consider shoulder season pricing — same beauty, significantly more intimacy and lower costs"
      ],
      el: [
        "Η Σαντορίνη είναι η εμβληματική επιλογή για θέα καλδέρας και ηλιοβασίλεμα",
        "Πάρος και Νάξος προσφέρουν κυκλαδίτικη ομορφιά με πιο οικεία ατμόσφαιρα",
        "Κεφαλονιά και Ύδρα είναι εξαιρετικές για ζευγάρια που θέλουν φύση και ιδιωτικότητα",
        "Ιούνιος και Σεπτέμβριος είναι οι καλύτεροι μήνες",
        "Η ιδιωτική κρουαζιέρα με σκάφος είναι από τις πιο αγαπημένες εμπειρίες",
        "Ενδιάμεση σεζόν προσφέρει την ίδια ομορφιά με χαμηλότερο κόστος"
      ]
    },
    sections: [
      {
        title: { en: "1. Why Greece Works So Well for Honeymoons", el: "1. Γιατί η Ελλάδα είναι Ιδανική για Μήνα του Μέλιτος" },
        content: {
          en: "There is no single answer to what makes Greece so enduringly popular with honeymooners — it is a combination of things that happen to align perfectly for couples travelling together for the first time as a married pair.\n\nThe light in Greece is genuinely different. The Aegean light, especially in the Cyclades, has been written about by artists and poets for centuries. It is golden in the early morning, intensely bright at midday, and extraordinary at sunset. For couples who want their trip to feel visually stunning — both for personal experience and for photographs — Greece delivers in a way that few destinations match.\n\nThe food in Greece is designed for sharing and taking your time. Long lunches, mezedes spread across a table overlooking the sea, fresh grilled fish brought to the table, local wine served in small carafes — the Greek approach to eating encourages exactly the kind of slow, pleasurable togetherness that makes a honeymoon feel special.\n\nThe sea in Greece is among the cleanest and most beautiful in the Mediterranean. Swimming in calm, transparent, warm water together — often with no one else nearby — is one of those deeply simple experiences that honeymooners return home talking about.\n\nAnd practically speaking, Greece is safe, accessible, has a strong hospitality infrastructure and offers an enormous range of accommodation options from intimate boutique guesthouses to world-class cave hotels.",
          el: "Δεν υπάρχει μία μόνο απάντηση για τη δημοφιλία της Ελλάδας στους νιόπαντρους — είναι ένας συνδυασμός παραγόντων.\n\nΤο φως στην Ελλάδα είναι μοναδικό. Το φως του Αιγαίου είναι χρυσό το πρωί, εκθαμβωτικό το μεσημέρι και εκπληκτικό το ηλιοβασίλεμα.\n\nΤο φαγητό είναι σχεδιασμένο για μοίρασμα. Μεγάλα γεύματα, μεζέδες δίπλα στη θάλασσα, φρέσκο ψάρι και κρασί — ενθαρρύνουν ακριβώς αυτή την αργή, απολαυστική συντροφικότητα.\n\nΗ θάλασσα είναι από τις πιο καθαρές στη Μεσόγειο. Το κολύμπι σε ήρεμα, διάφανα νερά μαζί είναι μια απλή αλλά βαθιά εμπειρία."
        }
      },
      {
        title: { en: "2. Santorini: The Classic Honeymoon Choice", el: "2. Σαντορίνη: Η Κλασική Επιλογή" },
        content: {
          en: "No guide to honeymooning in Greece would be complete without leading with Santorini, because it remains the single most requested honeymoon destination in the country — and for very understandable reasons.\n\nThe caldera view is, simply put, one of the most dramatic natural settings on earth. A crescent of volcanic cliffs rising sharply from the deep blue sea, topped with whitewashed cubic houses, blue-domed churches and terraced infinity pools — this is the image that defines the Greek honeymoon in the global imagination. Oia in particular, the northern village of Santorini, is considered one of the most beautiful villages in Europe.\n\nWhat makes Santorini so powerful as a honeymoon destination is that it delivers the wow factor immediately and consistently. You walk out of your hotel and the view is extraordinary. Breakfast is served overlooking the caldera. The sunset — particularly from Oia — is an event that people travel thousands of kilometres to witness, and it lives up to every expectation.\n\nBest areas for honeymooners in Santorini: Oia for the most iconic views and quieter evenings; Imerovigli for the most dramatic caldera position with fewer tourists than Oia; Fira for easier access to restaurants, shopping and transport with still-excellent views.\n\nHonest considerations: Santorini is very busy in peak summer (July–August). The famous caldera-view hotels are expensive. For a more intimate experience, consider shoulder season — late May, June or September.",
          el: "Κανένας οδηγός για μήνα του μέλιτος στην Ελλάδα δεν θα ήταν πλήρης χωρίς τη Σαντορίνη. Η θέα της καλδέρας είναι ένα από τα πιο εντυπωσιακά φυσικά σκηνικά στη γη.\n\nΗ Οία είναι το πιο ρομαντικό χωριό. Το ηλιοβασίλεμα είναι γεγονός. Αλλά η Σαντορίνη είναι πολυσύχναστη τον Ιούλιο–Αύγουστο. Ενδιάμεση σεζόν (Μάιος, Ιούνιος, Σεπτέμβριος) προσφέρει πιο οικεία εμπειρία."
        }
      },
      {
        title: { en: "3. Paros: Romantic Without the Crowds", el: "3. Πάρος: Ρομαντισμός Χωρίς Πολυκοσμία" },
        content: {
          en: "Paros is increasingly becoming the preferred alternative for couples who want the Cycladic beauty of Santorini but with a calmer, more intimate atmosphere. It has less of the \"everybody goes there\" energy and more of a lived-in, genuinely Greek feeling that many honeymooners find more romantic in the long run.\n\nThe island has beautiful beaches, a charming old town (Parikia) with a stunning 6th-century Byzantine church, excellent restaurants, and a whitewashed village (Naoussa) that has developed into one of the most elegant dining and bar scenes in the Cyclades. Sunsets over Naoussa harbour are genuinely romantic and far less crowded than Oia.\n\nParos also connects easily to nearby Naxos and Antiparos, so couples who want a slightly more exploratory honeymoon can base themselves here and take day trips.",
          el: "Η Πάρος γίνεται όλο και πιο δημοφιλής ως εναλλακτική για ζευγάρια που θέλουν την κυκλαδίτικη ομορφιά με πιο ήρεμη ατμόσφαιρα. Υπέροχες παραλίες, γραφική Παροικιά, κομψή Νάουσα. Τα ηλιοβασιλέματα πάνω από το λιμάνι της Νάουσας είναι γνήσια ρομαντικά."
        }
      },
      {
        title: { en: "4. Kefalonia: Romance Among Green and Blue", el: "4. Κεφαλονιά: Ρομαντισμός στο Πράσινο και το Γαλάζιο" },
        content: {
          en: "For couples who find the stark whitewashed minimalism of the Cyclades less appealing than the lush green hills and turquoise coves of the Ionian, Kefalonia is an outstanding honeymoon destination that is consistently underestimated.\n\nThe island has some of the most beautiful beaches in the Mediterranean — Myrtos, Antisamos, Petani — and the combination of dramatic limestone cliffs, vivid emerald water and deep green pine forests creates a visual landscape that feels entirely different from the Cyclades.\n\nAssos, a small Venetian village on a narrow peninsula on the western coast, is one of the most charming and romantic small villages in all of Greece. A dinner at a table above Assos bay as the sun drops behind the hills opposite is a memory that genuinely stays with you.\n\nKefalonia also connects to Zakynthos and Ithaca by short ferry, so a combined Ionian honeymoon — splitting time between two or three islands — is a realistic option.",
          el: "Για ζευγάρια που προτιμούν τα καταπράσινα τοπία και τους γαλαζοπράσινους όρμους του Ιονίου, η Κεφαλονιά είναι ένας εξαιρετικός προορισμός. Ο Μύρτος, ο Αντίσαμος, το Ασός — ένα από τα πιο γοητευτικά ρομαντικά χωριά της Ελλάδας."
        }
      },
      {
        title: { en: "5. Hydra: The Ultimate Intimate Escape", el: "5. Ύδρα: Η Απόλυτη Οικεία Απόδραση" },
        content: {
          en: "Hydra is unlike any other island in Greece. There are no cars, no motorbikes — only donkeys, horses and your own feet. The harbour is one of the most beautiful in the Aegean, lined with 18th-century stone mansions. The island has a long artistic heritage (Leonard Cohen famously lived here) and a quiet, unhurried quality that makes it feel like a world apart.\n\nFor couples who want intimacy over spectacle, and who are looking for a honeymoon that feels like a private retreat rather than a bucket-list tour, Hydra is exceptional. It is only 1.5–2 hours by hydrofoil from Piraeus.\n\nThe lack of cars means the island sounds different — quieter, calmer, punctuated by birdsong and the lap of water.",
          el: "Η Ύδρα είναι εντελώς μοναδική. Χωρίς αυτοκίνητα, με ένα από τα ομορφότερα λιμάνια του Αιγαίου. Για ζευγάρια που θέλουν οικειότητα αντί για θέαμα, είναι εξαιρετική. Μόνο 1.5–2 ώρες με το υδροπτέρυγο από τον Πειραιά."
        }
      },
      {
        title: { en: "6. Rhodes: Romance with History and Luxury", el: "6. Ρόδος: Ιστορία και Πολυτέλεια" },
        content: {
          en: "Rhodes is often underestimated as a honeymoon destination. It is the largest Dodecanese island and one of the most historically rich places in Greece, with a UNESCO-listed medieval old city that is genuinely extraordinary to explore together.\n\nThe old town of Rhodes — entirely enclosed within medieval walls built by the Knights of St John in the 14th century — is one of the best-preserved medieval cities in Europe. Walking its cobblestone alleys in the evening, with candlelit restaurants on every corner, has an undeniable romantic atmosphere.\n\nBeyond the old town, Rhodes has excellent beaches (Lindos, Tsambika), a sophisticated hotel scene particularly in Lindos and Ixia, and easy connections to nearby islands like Symi and Halki for day trips.",
          el: "Η Ρόδος συχνά υποτιμάται ως προορισμός για μήνα του μέλιτος. Η μεσαιωνική παλιά πόλη (UNESCO) είναι εκπληκτική για εξερεύνηση μαζί. Εξαιρετικές παραλίες στο Λίνδο και κομψά ξενοδοχεία."
        }
      },
      {
        title: { en: "7. When to Go for a Honeymoon in Greece", el: "7. Πότε να Πάτε" },
        content: {
          en: "The ideal months for a Greek honeymoon are June and September, with late May and early October also being strong choices.\n\nJune offers long warm days, the sea already warm enough for swimming (22–24°C), flowers still on the hillsides, and significantly lower prices and fewer crowds than July and August.\n\nSeptember is arguably the finest month in Greece for couples. The peak season crowds have thinned, prices drop noticeably, the sea is at its warmest (26–28°C), and the overall atmosphere is more relaxed and personal.\n\nJuly and August work well but require more advance planning, acceptance of busier environments, and a larger budget.",
          el: "Ιούνιος και Σεπτέμβριος είναι οι ιδανικοί μήνες. Ο Ιούνιος έχει ζεστές μέρες, ανθισμένα τοπία και λιγότερο κόσμο. Ο Σεπτέμβριος είναι ίσως ο καλύτερος μήνας — η θάλασσα είναι ζεστή, τα πλήθη έχουν φύγει και οι τιμές πέφτουν."
        }
      },
      {
        title: { en: "8. Romantic Experiences Worth Planning Around", el: "8. Ρομαντικές Εμπειρίες" },
        content: {
          en: "These are experiences that honeymooners consistently describe as the highlights of their trip:\n\nSunset watching in Oia (Santorini): An unmissable experience. For a more intimate version, book a private terrace dinner at your hotel for the same view without the crowd.\n\nPrivate sailing or catamaran charter: A full-day or half-day private boat charter lets you reach secluded coves, swim in places inaccessible by road, and watch the sunset from the water. Available from most islands at varying price points.\n\nWine tasting in Santorini: The volcanic soil produces extraordinary Assyrtiko white wines. A guided tasting at a winery with caldera views is a memorable afternoon.\n\nCooking class together: Several islands offer couple-oriented cooking classes where you learn to make traditional Greek dishes together.\n\nA night in an overwater or cliff-edge suite: Santorini's cave hotels and Mykonos' sea-view suites are obvious choices, but several boutique hotels in Kefalonia, Skopelos and Amorgos offer equally stunning private terraces at lower prices.",
          el: "Εμπειρίες που τα ζευγάρια περιγράφουν ως κορυφαίες:\n\nΗλιοβασίλεμα στην Οία — ή σε ιδιωτική βεράντα του ξενοδοχείου σας.\nΙδιωτική κρουαζιέρα με σκάφος — κολύμπι σε απομονωμένους όρμους.\nΟινογνωσία στη Σαντορίνη — τα κρασιά Ασύρτικο είναι εξαιρετικά.\nΜάθημα μαγειρικής μαζί — διασκεδαστική και νόστιμη εμπειρία.\nΔιαμονή σε σουίτα με θέα — οι σπηλαιώδεις σουίτες της Σαντορίνης ή αντίστοιχες σε Κεφαλονιά, Σκόπελο και Αμοργό."
        }
      }
    ]
  },
  {
    slug: "solo-travel-in-greece",
    title: {
      en: "Solo Travel in Greece: Everything You Need to Know",
      el: "Σόλο Ταξίδι στην Ελλάδα: Ο απόλυτος οδηγός"
    },
    description: {
      en: "Planning solo travel in Greece? Discover the best islands for solo travellers, safety tips, how to get around, meet people and make the most of a trip alone.",
      el: "Σχεδιάζετε σόλο ταξίδι στην Ελλάδα; Ανακαλύψτε τα καλύτερα νησιά, συμβουλές ασφαλείας και πώς να αξιοποιήσετε στο έπακρο το ταξίδι σας."
    },
    image: "/images/solo-travel-in-greece.webp",
    overview: {
      en: "Greece is one of the best solo travel destinations in Europe, and a growing number of travellers — particularly women travelling alone, and people in their 30s to 50s on their first solo trip — choose it as their destination of choice. The reasons are straightforward: Greece is safe, hospitable, easy to navigate independently, and has a natural social rhythm built around shared meals, communal outdoor spaces and a culture that welcomes strangers with warmth rather than suspicion. This guide covers everything a solo traveller needs to know before arriving — from safety and transport to the best islands, where to stay and how to make the most of travelling alone.",
      el: "Η Ελλάδα είναι ένας από τους καλύτερους προορισμούς για σόλο ταξίδια στην Ευρώπη. Είναι ασφαλής, φιλόξενη και εύκολη στην ανεξάρτητη εξερεύνηση. Αυτός ο οδηγός καλύπτει όλα όσα χρειάζεται να γνωρίζει ένας σόλο ταξιδιώτης."
    },
    points: {
      en: [
        "Greece is consistently rated one of the safest Mediterranean destinations for solo travel, including for women",
        "Paros, Crete, Naxos and Athens are among the best destinations for solo travellers",
        "Car rental unlocks the best of Greek islands for independent exploration",
        "Greek food culture naturally accommodates solo dining with warmth and no pressure",
        "May, June and September offer the best balance of weather, price and a more personal experience",
        "Boutique guesthouses and small hotels tend to feel more welcoming for solo travellers than large resorts"
      ],
      el: [
        "Η Ελλάδα είναι από τους ασφαλέστερους μεσογειακούς προορισμούς για σόλο ταξίδια",
        "Πάρος, Κρήτη, Νάξος και Αθήνα είναι ιδανικές για σόλο ταξιδιώτες",
        "Η ενοικίαση αυτοκινήτου προσφέρει ανεξαρτησία εξερεύνησης",
        "Η ελληνική κουλτούρα φαγητού υποδέχεται θερμά όσους τρώνε μόνοι",
        "Μάιος, Ιούνιος και Σεπτέμβριος προσφέρουν την καλύτερη ισορροπία",
        "Οι μικροί ξενώνες είναι πιο φιλόξενοι από τα μεγάλα resorts για σόλο ταξιδιώτες"
      ]
    },
    sections: [
      {
        title: { en: "1. Is Greece Safe for Solo Travellers?", el: "1. Είναι η Ελλάδα Ασφαλής για Σόλο Ταξιδιώτες;" },
        content: {
          en: "The short answer is yes — Greece is widely considered one of the safest countries in the Mediterranean for solo travel, including for women travelling alone.\n\nPetty crime exists, as in every tourist destination, and the usual common-sense precautions apply: keep an eye on your belongings in busy markets and ferry ports, use reputable taxis or rideshare apps in Athens, and be aware of tourist-area scams. These are minor considerations, not genuine safety concerns.\n\nViolent crime against tourists is rare. Greeks have a deeply ingrained culture of hospitality — the word \"philoxenia\" (literally \"love of the stranger\") is one of the foundational social values in Greek culture. Locals are generally happy to help with directions, recommendations and advice, and solo travellers often remark on how frequently they are invited to join someone's table or offered a complimentary drink.\n\nFor solo female travellers specifically: Greece rates consistently high in safety surveys for women travelling alone. Harassment is far less common than in many Mediterranean destinations. Busy tourist areas, island villages and beach communities are generally relaxed and well-lit environments.",
          el: "Η σύντομη απάντηση είναι ναι — η Ελλάδα θεωρείται μία από τις ασφαλέστερες χώρες στη Μεσόγειο για σόλο ταξίδια.\n\nΥπάρχει μικροεγκληματικότητα όπως σε κάθε τουριστικό προορισμό, αλλά δεν αποτελεί σοβαρό λόγο ανησυχίας. Οι Έλληνες έχουν βαθιά ριζωμένη κουλτούρα φιλοξενίας (φιλοξενία = \"αγάπη του ξένου\").\n\nΓια γυναίκες που ταξιδεύουν μόνες: η Ελλάδα βαθμολογείται σταθερά υψηλά σε έρευνες ασφάλειας."
        }
      },
      {
        title: { en: "2. Best Greek Islands for Solo Travellers", el: "2. Καλύτερα Νησιά για Σόλο Ταξιδιώτες" },
        content: {
          en: "Not every island suits solo travel equally. Here is an honest breakdown of the best options depending on your travel style:\n\nParos — the social island: Paros has become one of the most recommended islands for solo travellers in the Cyclades. Naoussa village has a lively but not overwhelming bar and restaurant scene, a strong community of young European travellers, and a beautiful harbour that functions as a natural social meeting point.\n\nSantorini — solo with a purpose: Santorini rewards solo travel for those who are there specifically for the experience — the views, the sunsets, the food, the volcanic landscape. Walking Oia alone in the early morning before the crowds arrive is a genuinely special kind of travel.\n\nCrete — the most flexible option: Crete is ideal for solo travellers who want variety and freedom. Heraklion and Chania both have lively old towns. A rented car unlocks the island's interior — mountain villages, gorges, remote monasteries.\n\nNaxos — relaxed and affordable: Naxos is one of the most liveable islands in the Cyclades for solo travellers on a mid-range budget. The main town is beautiful and sociable. Food prices are lower than Mykonos or Santorini.\n\nAthens — the solo city experience: Athens is compact enough to explore on foot, with vibrant café culture, world-class museums and nightlife that starts late but runs long.\n\nLefkada and Kefalonia — for the nature-focused solo traveller: Both Ionian islands are excellent for solo travellers who want dramatic natural scenery and beaches that reward independent exploration.",
          el: "Δεν ταιριάζουν όλα τα νησιά το ίδιο για σόλο ταξίδι.\n\nΠάρος — το κοινωνικό νησί: Ιδανικό για όσους θέλουν να γνωρίσουν κόσμο.\nΣαντορίνη — σόλο με σκοπό: Ανταμείβει όσους πηγαίνουν για την εμπειρία.\nΚρήτη — η πιο ευέλικτη επιλογή: Ιδανική για ποικιλία και ελευθερία.\nΝάξος — χαλαρή και προσιτή: Από τα πιο φιλικά νησιά για μεσαίο budget.\nΑθήνα — η σόλο εμπειρία πόλης: Συμπαγής, ζωντανή, με πολιτισμό.\nΛευκάδα και Κεφαλονιά — για λάτρεις της φύσης."
        }
      },
      {
        title: { en: "3. Solo Travel Logistics: Getting Around", el: "3. Μετακινήσεις για Σόλο Ταξιδιώτες" },
        content: {
          en: "One of the main questions solo travellers ask is how practical Greece is to navigate alone. The answer is: very practical, with a few things worth knowing in advance.\n\nFerries: Greece's ferry network is extensive and solo travel on ferries is completely normal and safe. Most routes between islands in the Cyclades, Dodecanese and Ionian are well served from June to September. Book ahead for peak summer routes.\n\nGetting between islands: The Cyclades connect easily. The Ionian islands are a separate network. The Dodecanese are another. Mixing between these networks requires going via Athens, which adds time.\n\nCar rental: Renting a car is genuinely one of the best decisions a solo traveller can make on larger islands. It gives complete freedom and opens up parts of the island that organised tours do not reach.\n\nLocal buses (KTEL): Most islands have a basic bus network. On smaller islands, schedules are limited.\n\nAthens Metro and tram: Athens has a clean, safe and reliable metro system. The journey from Athens Airport to Syntagma takes around 40 minutes and costs €9.",
          el: "Η Ελλάδα είναι πολύ πρακτική για σόλο περιήγηση.\n\nΑκτοπλοΐα: Εκτεταμένο δίκτυο, απολύτως φυσιολογικό και ασφαλές για σόλο ταξιδιώτες.\n\nΜεταξύ νησιών: Οι Κυκλάδες συνδέονται εύκολα. Ιόνιο και Δωδεκάνησα είναι ξεχωριστά δίκτυα.\n\nΕνοικίαση αυτοκινήτου: Η καλύτερη απόφαση για μεγάλα νησιά. Δίνει απόλυτη ελευθερία.\n\nΛεωφορεία KTEL: Υπάρχουν αλλά με περιορισμένα δρομολόγια σε μικρά νησιά.\n\nΜετρό Αθήνας: Καθαρό, ασφαλές. Αεροδρόμιο προς Σύνταγμα ~40 λεπτά, €9."
        }
      },
      {
        title: { en: "4. Where to Stay as a Solo Traveller", el: "4. Πού να Μείνεις ως Σόλο Ταξιδιώτης" },
        content: {
          en: "Accommodation choice matters more for solo travellers than it might for couples or groups, because your base directly affects how social or isolated your experience feels.\n\nBoutique guesthouses and small hotels: These tend to be the sweet spot for solo travellers in Greece. Owners are often present, helpful and genuinely welcoming. Breakfast communal tables naturally create opportunities for conversation. Smaller properties also tend to be in better locations — old town streets, harbour views, quiet hillsides.\n\nHostels: Available in Athens, Thessaloniki, Crete, Santorini and a handful of other destinations. Quality varies, but several excellent hostel-style properties cater specifically to independent and solo travellers.\n\nAvoiding \"solo supplement\" costs: Some Greek hotels charge a single occupancy supplement for solo travellers. When comparing accommodation, check whether single rooms or solo pricing is available — boutique properties and guesthouses are more likely to offer flexible rates.",
          el: "Η επιλογή καταλύματος είναι πιο σημαντική για σόλο ταξιδιώτες.\n\nΜικροί ξενώνες και boutique ξενοδοχεία: Η καλύτερη επιλογή. Οι ιδιοκτήτες είναι φιλόξενοι και τα κοινά τραπέζια πρωινού δημιουργούν ευκαιρίες για συζήτηση.\n\nHostels: Υπάρχουν σε Αθήνα, Θεσσαλονίκη, Κρήτη, Σαντορίνη.\n\nΑποφυγή \"solo supplement\": Ορισμένα ξενοδοχεία χρεώνουν επιπλέον για μονή χρήση δωματίου. Ελέγξτε αν υπάρχει τιμή μονόκλινου."
        }
      },
      {
        title: { en: "5. Eating and Socialising Alone", el: "5. Φαγητό και Κοινωνικοποίηση" },
        content: {
          en: "One of the genuine joys of solo travel in Greece is eating. And in Greece, eating alone is not a strange or uncomfortable experience.\n\nGreek meal culture is slow and leisurely. You are expected to sit for as long as you like. No one will rush you. A good book, a journal, or simply watching the world pass by while eating a long lunch at a harbour-side taverna is one of the most pleasurable experiences Greece offers.\n\nLocal tavernas, especially those slightly off the main tourist drag, tend to attract a mix of Greek families, local workers and regular visitors. Solo travellers are warmly welcomed and often find themselves in spontaneous conversation with the owner, the table next door, or a local who spotted you looking at the menu.\n\nPractical tip: Sitting at the bar rather than a table in a restaurant or wine bar naturally opens up conversation with staff and other solo travellers.",
          el: "Μία από τις μεγάλες απολαύσεις του σόλο ταξιδιού στην Ελλάδα είναι το φαγητό. Το να τρώτε μόνοι σας δεν είναι παράξενο ούτε άβολο.\n\nΗ ελληνική κουλτούρα γεύματος είναι αργή και χαλαρή. Κανείς δεν θα σας βιάσει. Οι ντόπιες ταβέρνες υποδέχονται θερμά τους σόλο ταξιδιώτες.\n\nΣυμβουλή: Καθίστε στο μπαρ για να ανοίξετε πιο εύκολα συζήτηση."
        }
      },
      {
        title: { en: "6. Best Time for Solo Travel in Greece", el: "6. Καλύτερη Εποχή για Σόλο Ταξίδι" },
        content: {
          en: "May and June are excellent months for solo travel. The weather is warm but not punishing, the sea is swimmable, prices are moderate and the tourist infrastructure is running without the crush of high season.\n\nSeptember and October are equally strong. The peak crowds have gone, prices drop, and the overall atmosphere is more local and personal.\n\nJuly and August are the busiest months but also the most social — hostels are full, beach bars are lively and the energy on popular islands is at its peak. Just book accommodation well in advance.",
          el: "Μάιος και Ιούνιος είναι εξαιρετικοί μήνες. Καλός καιρός, κολύμπι, μέτριες τιμές.\n\nΣεπτέμβριος και Οκτώβριος: τα πλήθη έχουν φύγει, οι τιμές πέφτουν.\n\nΙούλιος και Αύγουστος: τα πιο κοινωνικά αλλά και πιο πολυσύχναστα. Κλείστε έγκαιρα."
        }
      }
    ]
  },
  {
    slug: "things-to-do-in-athens",
    title: {
      en: "Things to Do in Athens: A Complete Visitor's Guide",
      el: "Τι να Κάνεις στην Αθήνα: Πλήρης Οδηγός"
    },
    description: {
      en: "Discover the best things to do in Athens — from the Acropolis and ancient agora to hidden neighbourhoods, local food, museums and practical tips for every visitor.",
      el: "Ανακαλύψτε τα καλύτερα πράγματα να κάνετε στην Αθήνα — από την Ακρόπολη και την αρχαία αγορά έως κρυφές γειτονιές, τοπικό φαγητό και μουσεία."
    },
    image: "/images/things-to-do-in-athens.webp",
    overview: {
      en: "Athens is one of the world's great cities, and one of Europe's most underrated travel destinations. It sits at an extraordinary crossroads of ancient history and modern urban life — where a 2,500-year-old monument dominates the skyline above a neighbourhood full of coffee shops, art galleries, street food stalls and vibrant nightlife. Most visitors to Greece pass through Athens, but many underestimate it. This guide gives you an honest picture of what Athens has to offer, how to structure your visit, and how to experience the city beyond the postcard version.",
      el: "Η Αθήνα είναι μία από τις σπουδαιότερες πόλεις του κόσμου και ένας από τους πιο υποτιμημένους ταξιδιωτικούς προορισμούς της Ευρώπης. Βρίσκεται σε ένα μοναδικό σταυροδρόμι αρχαίας ιστορίας και σύγχρονης αστικής ζωής."
    },
    points: {
      en: [
        "Visit the Acropolis early (8am) to avoid crowds and midday heat",
        "The combined Acropolis ticket covers six sites and is the best value option",
        "The Acropolis Museum and National Archaeological Museum are world-class — do not miss them",
        "Athens' best food and atmosphere is found in Psiri, Koukaki, Thissio and the Central Market area",
        "Two days is the recommended minimum; three is more comfortable",
        "Athens pairs naturally with the Saronic islands (Hydra, Aegina, Spetses) for short getaways"
      ],
      el: [
        "Επισκεφθείτε την Ακρόπολη νωρίς (8πμ) για να αποφύγετε τη ζέστη και τα πλήθη",
        "Το συνδυαστικό εισιτήριο Ακρόπολης καλύπτει έξι αρχαιολογικούς χώρους",
        "Το Μουσείο Ακρόπολης και το Εθνικό Αρχαιολογικό Μουσείο είναι παγκόσμιας κλάσης",
        "Το καλύτερο φαγητό βρίσκεται στο Ψυρρή, Κουκάκι, Θησείο και την Κεντρική Αγορά",
        "Δύο ημέρες είναι το ελάχιστο· τρεις είναι πιο άνετες",
        "Η Αθήνα συνδυάζεται ιδανικά με Ύδρα, Αίγινα και Σπέτσες"
      ]
    },
    sections: [
      {
        title: { en: "1. The Acropolis: The Non-Negotiable Starting Point", el: "1. Ακρόπολη: Το Αδιαπραγμάτευτο Σημείο Εκκίνησης" },
        content: {
          en: "The Acropolis is not simply the most important site in Athens — it is one of the most important monuments in human history. The Parthenon, dedicated to Athena and completed in 432 BC, stands at its centre as one of the finest examples of Classical Greek architecture ever built. Even after centuries of wars, earthquakes, explosions and atmospheric erosion, it is breathtaking.\n\nThe walk up the Sacred Rock takes around 20–30 minutes. The site also includes the Erechtheion (with its iconic Porch of the Caryatids), the Temple of Athena Nike, and the Propylaea.\n\nPractical tips: Go early (it opens at 8am) to avoid both the heat and the crowds. The combined ticket (€30 in high season) covers the Acropolis plus six other archaeological sites. The best view of the Acropolis is not from the top — it is from below: Monastiraki, Thissio rooftops and Philopappos Hill. Visit the Acropolis Museum the same day or the day after.",
          el: "Η Ακρόπολη δεν είναι απλώς ο σημαντικότερος χώρος στην Αθήνα — είναι ένα από τα σημαντικότερα μνημεία της ανθρώπινης ιστορίας. Ο Παρθενώνας, αφιερωμένος στην Αθηνά και ολοκληρωμένος το 432 π.Χ., είναι ένα από τα ωραιότερα δείγματα κλασικής ελληνικής αρχιτεκτονικής.\n\nΣυμβουλές: Πηγαίνετε νωρίς (8πμ). Το συνδυαστικό εισιτήριο (€30) καλύπτει την Ακρόπολη και έξι ακόμη χώρους. Η καλύτερη θέα είναι από κάτω — Μοναστηράκι, Θησείο και Λόφος Φιλοπάππου."
        }
      },
      {
        title: { en: "2. The Acropolis Museum: One of Europe's Best", el: "2. Μουσείο Ακρόπολης: Από τα Κορυφαία της Ευρώπης" },
        content: {
          en: "The Acropolis Museum opened in 2009 and immediately became one of the finest archaeological museums in the world. It was built specifically to house the surviving sculptures, friezes and artefacts from the Acropolis and the surrounding area, and it does so with extraordinary clarity and architectural elegance.\n\nThe museum's top floor reconstructs the full Parthenon frieze — the continuous band of carved marble that once ran around the entire outer wall of the temple. Originals surviving in Athens are displayed alongside plaster casts of the sections held by the British Museum, making the incompleteness of the divided collection impossible to ignore.\n\nThe ground floor is built over an archaeological excavation visible through glass floors — the remains of an Athenian neighbourhood that stood here in ancient times. Entry is €10. Allow at least two hours.",
          el: "Το Μουσείο Ακρόπολης άνοιξε το 2009 και έγινε αμέσως ένα από τα καλύτερα αρχαιολογικά μουσείο του κόσμου. Ο τελευταίος όροφος αναπαριστά την πλήρη ζωφόρο του Παρθενώνα. Είσοδος €10. Αφιερώστε τουλάχιστον δύο ώρες."
        }
      },
      {
        title: { en: "3. The Ancient Agora: Where Democracy Was Born", el: "3. Αρχαία Αγορά: Εκεί Γεννήθηκε η Δημοκρατία" },
        content: {
          en: "Just below the Acropolis on its northern slope lies the Ancient Agora — the civic heart of ancient Athens. This was where Athenians met to vote, trade, argue philosophy and conduct public life. Socrates walked here. Aristotle taught nearby.\n\nThe site contains the best-preserved ancient Greek temple in the world: the Temple of Hephaestus, built in the 5th century BC and still standing essentially intact. The reconstructed Stoa of Attalos now functions as a small museum housing finds from the Agora excavations.\n\nThe Ancient Agora is included in the Acropolis combined ticket and is often less crowded than the Acropolis itself.",
          el: "Ακριβώς κάτω από την Ακρόπολη βρίσκεται η Αρχαία Αγορά — η καρδιά της αρχαίας Αθήνας. Περιλαμβάνει τον καλύτερα διατηρημένο αρχαίο ελληνικό ναό, το Ηφαιστείο. Περιλαμβάνεται στο συνδυαστικό εισιτήριο."
        }
      },
      {
        title: { en: "4. The National Archaeological Museum", el: "4. Εθνικό Αρχαιολογικό Μουσείο" },
        content: {
          en: "The National Archaeological Museum of Athens holds one of the greatest collections of ancient Greek artefacts in the world. If you have any interest in history, art or archaeology, this museum is not optional.\n\nKey highlights include the Mask of Agamemnon (a gold funeral mask from Mycenae, circa 1550 BC), the Antikythera Mechanism (the world's oldest known analogue computer), an extraordinary collection of archaic and classical sculpture, Egyptian antiquities and prehistoric Aegean finds.\n\nThe museum is in Exarchia, 20–25 minutes on foot from Monastiraki or by metro (Victoria station). Entry is €12. Allow three to four hours for a proper visit.",
          el: "Το Εθνικό Αρχαιολογικό Μουσείο έχει μία από τις μεγαλύτερες συλλογές αρχαίων ελληνικών αντικειμένων στον κόσμο. Περιλαμβάνει τη Μάσκα του Αγαμέμνονα και τον Μηχανισμό των Αντικυθήρων. Είσοδος €12."
        }
      },
      {
        title: { en: "5. Athens' Neighbourhoods: Where the City Actually Lives", el: "5. Γειτονιές της Αθήνας" },
        content: {
          en: "Athens' most engaging quality for curious visitors is the diversity of its neighbourhoods — each with its own character, architecture and daily rhythm.\n\nMonastiraki and Psiri: The beating heart of tourist Athens. Monastiraki Square is surrounded by the ancient Agora, a famous flea market, excellent street food and rooftop bars with Acropolis views. Psiri has developed into one of the city's best areas for restaurants, wine bars and music venues.\n\nPlaka: The old neighbourhood that climbs the slopes of the Acropolis. Neoclassical houses, narrow winding streets, Byzantine churches and outdoor tavernas. Can feel touristy but has genuine charm on quiet mornings.\n\nKolonaki: The upmarket neighbourhood. Boutique shopping, excellent restaurants, important small museums (Benaki, Cycladic Art) and a funicular to Lycabettus Hill for a 360-degree city view.\n\nExarchia: Bookshops, anarchist murals and excellent cheap food. The Central Market (Varvakios Agora) on its edge is one of the most atmospheric experiences in Athens.\n\nThissio and Gazi: Some of the best rooftop bars and outdoor restaurants with Acropolis views.\n\nKoukaki and Mets: Emerging neighbourhoods with a strong local café and restaurant scene south of the Acropolis.",
          el: "Η ποικιλία των γειτονιών είναι το πιο ενδιαφέρον χαρακτηριστικό της Αθήνας.\n\nΜοναστηράκι και Ψυρρή: Η καρδιά της τουριστικής Αθήνας. Υπαίθριες αγορές, street food, rooftop bars.\nΠλάκα: Η παλιά γειτονιά κάτω από την Ακρόπολη. Νεοκλασικά σπίτια και βυζαντινές εκκλησίες.\nΚολωνάκι: Κομψή γειτονιά με μουσεία και βόλτα στο Λυκαβηττό.\nΕξάρχεια: Βιβλιοπωλεία, τέχνη, καλό φαγητό. Η Κεντρική Αγορά είναι μοναδική εμπειρία.\nΘησείο και Γκάζι: Κορυφαία rooftop μπαρ.\nΚουκάκι και Μετς: Αναδυόμενες γειτονιές με ωραία καφέ και εστιατόρια."
        }
      },
      {
        title: { en: "6. Food in Athens: What to Eat and Where", el: "6. Φαγητό στην Αθήνα" },
        content: {
          en: "Athens has become one of the most exciting food cities in southern Europe, combining a deeply rooted traditional cuisine with a modern restaurant scene.\n\nTraditional and essential: Spanakopita, taramosalata, grilled octopus, souvlaki, fresh grilled fish and lamb slow-cooked in a wood oven. The Central Market is the best place to see these ingredients in their raw form, and the surrounding streets have excellent lunchtime eateries serving market workers.\n\nBreakfast culture: A freddo espresso and a fresh koulouri (sesame bread ring, €0.80) is one of the great simple pleasures of a morning in Athens.\n\nNeighbourhood dining: For dinner, walk into Psiri or Koukaki, look for restaurants where Greeks are eating (not just tourists), and trust the chalkboard menu.",
          el: "Η Αθήνα έχει γίνει μία από τις πιο συναρπαστικές γαστρονομικές πόλεις της νότιας Ευρώπης. Από σπανακόπιτα και σουβλάκι έως φρέσκο ψάρι και αρνί στον ξυλόφουρνο. Η Κεντρική Αγορά είναι ο καλύτερος προορισμός για αυθεντικό φαγητό."
        }
      },
      {
        title: { en: "7. How Many Days Do You Need in Athens?", el: "7. Πόσες Μέρες Χρειάζεστε" },
        content: {
          en: "Two full days is the minimum to see Athens properly. Three days allows you to include a half-day trip to Cape Sounion.\n\nA typical 2-day Athens structure:\nDay 1 morning: Acropolis (early). Afternoon: Acropolis Museum. Evening: Dinner in Psiri or Thissio.\nDay 2 morning: National Archaeological Museum. Afternoon: Ancient Agora + Monastiraki flea market + Kolonaki. Evening: Rooftop bar at sunset, dinner in Koukaki.\n\nFor those spending a single night before or after island travel, even one focused day can be enormously rewarding if you prioritise the Acropolis, the Acropolis Museum and an evening meal in Psiri.",
          el: "Δύο πλήρεις ημέρες είναι το ελάχιστο. Τρεις ημέρες σας επιτρέπουν να συμπεριλάβετε μια ημιήμερη εκδρομή στο Σούνιο.\n\nΜέρα 1: Ακρόπολη (πρωί), Μουσείο Ακρόπολης (απόγευμα), δείπνο στο Ψυρρή.\nΜέρα 2: Εθνικό Αρχαιολογικό Μουσείο, Αρχαία Αγορά, Μοναστηράκι, Κολωνάκι."
        }
      },
      {
        title: { en: "8. Day Trips from Athens", el: "8. Ημερήσιες Εκδρομές" },
        content: {
          en: "Athens works well as a base for several outstanding day trips:\n\nCape Sounion and the Temple of Poseidon: 70km south of Athens. Arrive at sunset for one of the most dramatic ancient sites in Greece.\n\nDelphi: 180km northwest. The sanctuary of Apollo and the Oracle — one of the great archaeological sites in Greece.\n\nEpidaurus: 150km southwest. The ancient theatre with perfect acoustics. Summer evening performances are among the finest cultural experiences in Greece.\n\nHydra and Aegina: Short hydrofoil rides from Piraeus. Car-free Hydra in particular feels like another world after the pace of Athens.",
          el: "Η Αθήνα είναι εξαιρετική βάση για ημερήσιες εκδρομές:\n\nΣούνιο: 70χλμ νότια. Ο ναός του Ποσειδώνα στο ηλιοβασίλεμα.\nΔελφοί: 180χλμ βορειοδυτικά. Το μαντείο του Απόλλωνα.\nΕπίδαυρος: 150χλμ νοτιοδυτικά. Το αρχαίο θέατρο.\nΎδρα και Αίγινα: Με υδροπτέρυγο από τον Πειραιά."
        }
      }
    ]
  },
  {
    slug: "greece-island-hopping",
    title: {
      en: "Greece Island Hopping: Routes, Tips & How to Plan It",
      el: "Island Hopping στην Ελλάδα: Διαδρομές, Συμβουλές & Πώς να το Σχεδιάσετε"
    },
    description: {
      en: "Plan your Greece island hopping trip with real routes, ferry tips, best combinations and practical advice for first-timers and returning travellers.",
      el: "Σχεδιάστε το island hopping ταξίδι σας στην Ελλάδα με πραγματικές διαδρομές, συμβουλές ακτοπλοΐας και πρακτικές οδηγίες."
    },
    image: "/images/greece-island-hopping.webp",
    overview: {
      en: "Island hopping in Greece is one of the classic European travel experiences — moving between islands by ferry, waking up somewhere new every few days, and building a trip that feels like a journey rather than a single destination. Done well, it is extraordinary. Done poorly — with too many stops, rushed connections and not enough time anywhere — it can be tiring and expensive. This guide explains how to plan a realistic island hopping trip, which routes work best for different travel styles, and the practical details that make the difference between a smooth hop and a stressful one.",
      el: "Το island hopping στην Ελλάδα είναι μία από τις κλασικές ευρωπαϊκές ταξιδιωτικές εμπειρίες. Αυτός ο οδηγός εξηγεί πώς να σχεδιάσετε ένα ρεαλιστικό ταξίδι, ποιες διαδρομές λειτουργούν καλύτερα και τις πρακτικές λεπτομέρειες που κάνουν τη διαφορά."
    },
    points: {
      en: [
        "Two to three islands in seven days is the realistic sweet spot — resist the urge to over-plan",
        "The Cyclades are the most connected and popular island hopping network",
        "Book ferries early for July–August, especially for overnight routes",
        "Build buffer time between connections — delays happen",
        "Pack light — a medium backpack makes everything easier",
        "June and September offer the best balance of warm weather, open ferries and manageable crowds",
        "Always double-check which Athens port (Piraeus or Rafina) your ferry departs from"
      ],
      el: [
        "Δύο με τρία νησιά σε επτά ημέρες είναι το ρεαλιστικό — αντισταθείτε στην υπερ-προγραμματισμό",
        "Οι Κυκλάδες είναι το πιο δημοφιλές δίκτυο island hopping",
        "Κλείστε ακτοπλοϊκά νωρίς για Ιούλιο–Αύγουστο",
        "Αφήστε χρόνο μεταξύ συνδέσεων — οι καθυστερήσεις συμβαίνουν",
        "Ταξιδέψτε ελαφριά — ένα σακίδιο μέσου μεγέθους κάνει τη διαφορά",
        "Ιούνιος και Σεπτέμβριος προσφέρουν την καλύτερη ισορροπία",
        "Ελέγξτε από ποιο λιμάνι της Αθήνας (Πειραιάς ή Ραφήνα) φεύγει το πλοίο σας"
      ]
    },
    sections: [
      {
        title: { en: "1. What Is Island Hopping and Is It Right for You?", el: "1. Τι Είναι το Island Hopping και Σας Ταιριάζει;" },
        content: {
          en: "Island hopping means travelling between multiple Greek islands by ferry — sometimes staying two or three nights on each island, sometimes a full week on one with a day trip to a nearby neighbour.\n\nThe appeal is real: each island in Greece has a distinct character, landscape and atmosphere. Moving between them feels genuinely exploratory.\n\nBut island hopping also requires planning and flexibility. Ferry delays happen. Some routes require early morning sailings.\n\nIsland hopping is ideal for: travellers with 10 or more days who want variety; those who want to experience the Cyclades or Ionian islands in depth; people comfortable with moving accommodation every few days.\n\nIt is less ideal for: families with very young children; travellers with fewer than 7 days; anyone who prefers unpacking once and staying put.",
          el: "Island hopping σημαίνει ταξίδι μεταξύ πολλών ελληνικών νησιών με πλοίο. Κάθε νησί έχει ξεχωριστό χαρακτήρα και ατμόσφαιρα.\n\nΙδανικό για: ταξιδιώτες με 10+ ημέρες, όσους θέλουν ποικιλία, άτομα άνετα με αλλαγή καταλύματος κάθε λίγες ημέρες.\n\nΛιγότερο ιδανικό για: οικογένειες με μικρά παιδιά, ταξίδια κάτω των 7 ημερών."
        }
      },
      {
        title: { en: "2. Understanding the Island Groups", el: "2. Οι Νησιωτικές Ομάδες" },
        content: {
          en: "Greece has several distinct island clusters. Inter-group connections are limited — islands within a group connect well, but mixing groups requires going through Athens or flying.\n\nThe Cyclades: The most popular island hopping destination. Mykonos, Paros, Naxos, Santorini, Ios, Milos, Folegandros. Connect frequently and reliably in summer.\n\nThe Ionian Islands: Corfu, Kefalonia, Zakynthos, Lefkada, Ithaca. Greener, calmer, less trafficked. Excellent for road-trip island hopping with a car.\n\nThe Dodecanese: Rhodes, Kos, Patmos, Symi, Halki, Kalymnos. Some of the most beautiful and less touristed island hopping.\n\nThe Saronic Islands: Aegina, Hydra, Poros, Spetses. Closest to Athens, reachable in 1–2 hours.\n\nThe Northern Aegean: Lesvos, Samos, Chios, Ikaria. Larger, less polished, for travellers seeking authenticity.",
          el: "Η Ελλάδα έχει πολλές νησιωτικές ομάδες. Οι συνδέσεις μεταξύ ομάδων είναι περιορισμένες.\n\nΚυκλάδες: Το πιο δημοφιλές δίκτυο. Καλές συνδέσεις το καλοκαίρι.\nΙόνια Νησιά: Πιο πράσινα, ήρεμα. Ιδανικά με αυτοκίνητο.\nΔωδεκάνησα: Από τα πιο όμορφα και λιγότερο τουριστικά.\nΑργοσαρωνικός: Αίγινα, Ύδρα, Πόρος, Σπέτσες. Κοντινά στην Αθήνα.\nΒόρειο Αιγαίο: Λέσβος, Σάμος, Χίος, Ικαρία. Αυθεντικά, λιγότερο εμπορικά."
        }
      },
      {
        title: { en: "3. The Best Island Hopping Routes", el: "3. Οι Καλύτερες Διαδρομές" },
        content: {
          en: "| Route | Duration | Itinerary | Best For |\n|-------|----------|-----------|----------|\n| **Classic Cyclades** | 7–10 days | Athens → Mykonos → Paros → Naxos → Santorini → Athens | First-timers. Ferries connect in 30 min – 2 hrs. |\n| **Less Touristy Cyclades** | 7–10 days | Athens → Sifnos → Folegandros → Milos → Antiparos/Paros → Athens | Independent travellers. Less frequent ferries. |\n| **Ionian Islands** | 7–10 days | Patras → Kefalonia → Ithaca → Lefkada → Corfu | Road trip lovers. Best with a rental car. |\n| **Dodecanese Deep Dive** | 10–14 days | Rhodes → Symi → Tilos → Kos → Patmos → Leros | History & architecture. Far less crowded than Cyclades. |\n| **Short Cyclades Hop** | 5–7 days | Athens → Paros → Naxos → Amorgos → Athens | Quick trips. Avoids Santorini/Mykonos crowds. |\n\n📖 **Read the full guide:** For detailed itineraries, island profiles and packing tips, see our [Greek Island Hopping Guide →](https://www.gogreecenow.com/en/blog/greek-island-hopping-guide)",
          el: "| Διαδρομή | Διάρκεια | Δρομολόγιο | Κατάλληλο για |\n|----------|----------|-------------|---------------|\n| **Κλασικές Κυκλάδες** | 7–10 ημ. | Αθήνα → Μύκονος → Πάρος → Νάξος → Σαντορίνη → Αθήνα | Πρώτο ταξίδι. Συνδέσεις 30 λεπ – 2 ώρες. |\n| **Λιγότερο τουριστικές Κυκλάδες** | 7–10 ημ. | Αθήνα → Σίφνος → Φολέγανδρος → Μήλος → Αντίπαρος/Πάρος → Αθήνα | Ανεξάρτητους ταξιδιώτες. Αραιότερες συνδέσεις. |\n| **Ιόνια Νησιά** | 7–10 ημ. | Πάτρα → Κεφαλονιά → Ιθάκη → Λευκάδα → Κέρκυρα | Λάτρεις road trip. Ιδανικά με αυτοκίνητο. |\n| **Δωδεκάνησα** | 10–14 ημ. | Ρόδος → Σύμη → Τήλος → Κως → Πάτμος → Λέρος | Ιστορία & αρχιτεκτονική. Λιγότερος κόσμος. |\n| **Σύντομες Κυκλάδες** | 5–7 ημ. | Αθήνα → Πάρος → Νάξος → Αμοργός → Αθήνα | Γρήγορα ταξίδια. |\n\n📖 **Διάβασε τον πλήρη οδηγό:** Για λεπτομερή δρομολόγια, προφίλ νησιών και συμβουλές, δες το [Greek Island Hopping Guide →](/el/blog/greek-island-hopping-guide)"
        }
      },
      {
        title: { en: "4. Practical Ferry Tips", el: "4. Πρακτικές Συμβουλές Ακτοπλοΐας" },
        content: {
          en: "Book ferries in advance for peak summer (July–August). The most convenient departure times fill up early. Book core connections two to four weeks ahead.\n\nUse Ferryscanner, Ferryhopper or the ferry company apps directly (Blue Star Ferries, SeaJets) to check routes and prices.\n\nUnderstand ticket classes: Deck class (cheapest, fine for short routes), Salon class (indoor seating), Cabins (private rooms, ideal for overnight crossings).\n\nFast ferries vs conventional ferries: Catamarans cut journey times but are more expensive and more affected by rough seas. Conventional ferries are slower, larger, more stable.\n\nCheck ferry ports carefully: Athens has Piraeus (for Aegean islands) and Rafina (for northern Cyclades — closer to the airport). Arriving at the wrong port is a stressful mistake.\n\nBuild buffer time: Allow at least two to three hours between a ferry arrival and your next connection.",
          el: "Κλείστε ακτοπλοϊκά νωρίς για Ιούλιο–Αύγουστο. Χρησιμοποιήστε Ferryscanner ή Ferryhopper.\n\nΚατηγορίες εισιτηρίων: Deck class (οικονομική), Salon (εσωτερική θέση), Καμπίνα (ιδιωτικό δωμάτιο).\n\nΤαχύπλοα vs συμβατικά: Τα ταχύπλοα είναι πιο γρήγορα αλλά ακριβότερα και επηρεάζονται από τον καιρό.\n\nΛιμάνια Αθήνας: Πειραιάς (Αιγαίο) και Ραφήνα (βόρειες Κυκλάδες). Αφήστε 2–3 ώρες μεταξύ συνδέσεων."
        }
      },
      {
        title: { en: "5. How Many Islands Per Week?", el: "5. Πόσα Νησιά την Εβδομάδα;" },
        content: {
          en: "Two to three islands in seven days is the realistic sweet spot for a first island hopping trip. This allows two to three nights minimum per island, which is enough to actually feel somewhere rather than just pass through.\n\nFour or five islands in a week is possible but usually leaves people feeling they saw everything and experienced nothing.\n\nA useful rule of thumb: if you are spending more than half your days arriving, loading luggage, finding your accommodation and recovering from travel, your itinerary is probably too ambitious.",
          el: "Δύο με τρία νησιά σε επτά ημέρες είναι το ρεαλιστικό για πρώτο island hopping. Αυτό επιτρέπει 2–3 βράδια ανά νησί.\n\nΤέσσερα ή πέντε νησιά σε μια εβδομάδα συνήθως σημαίνει ότι δεν προλάβατε να ζήσετε τίποτα."
        }
      },
      {
        title: { en: "6. What to Pack for Island Hopping", el: "6. Τι να Πάρετε" },
        content: {
          en: "Pack light — a medium backpack or a carry-on-sized rolling bag. Moving between accommodation with a large heavy suitcase on ferry gangways and cobblestone streets is not enjoyable.\n\nKey items: Quick-dry swimwear, reef shoes, a light cover-up for churches, sun protection (sunscreen, hat, sunglasses), reusable water bottle, offline maps downloaded to your phone, a small day bag for beach excursions.",
          el: "Ταξιδέψτε ελαφριά — σακίδιο μέσου μεγέθους. Απαραίτητα: μαγιό, παπούτσια για βράχο, αντηλιακό, καπέλο, επαναχρησιμοποιούμενο μπουκάλι νερό, offline χάρτες."
        }
      },
      {
        title: { en: "7. Best Time to Go Island Hopping", el: "7. Καλύτερη Εποχή" },
        content: {
          en: "June and September are the best months. Ferries run on full summer schedules, the sea is warm, weather is reliable and islands are less crowded than July–August. Prices are lower too.\n\nJuly and August offer maximum ferry frequency and peak energy but also highest prices and fullest ferries.\n\nMay is emerging as an excellent month — ferries are running, weather is pleasant, islands are very quiet.\n\nOctober onward: Ferry schedules reduce significantly. Island hopping is still possible on main routes but requires more careful planning.",
          el: "Ιούνιος και Σεπτέμβριος είναι οι καλύτεροι μήνες. Πλοία σε πλήρες πρόγραμμα, ζεστή θάλασσα, λιγότερος κόσμος.\n\nΙούλιος–Αύγουστος: Μέγιστη συχνότητα αλλά και υψηλότερες τιμές.\n\nΜάιος: Εξαιρετικός — πολύ ήσυχα νησιά.\n\nΟκτώβριος και μετά: Μειωμένα δρομολόγια."
        }
      }
    ]
  },
  {
    slug: "greece-visa-entry-requirements",
    title: {
      en: "Do I Need a Visa for Greece? Entry Requirements for Every Visitor",
      el: "Χρειάζομαι Βίζα για την Ελλάδα; Απαιτήσεις Εισόδου"
    },
    description: {
      en: "Find out if you need a visa for Greece, the 90-day rule explained, passport requirements, the new EES border system, upcoming ETIAS, and what every visitor needs to know before travelling.",
      el: "Μάθετε αν χρειάζεστε βίζα για την Ελλάδα, τον κανόνα των 90 ημερών, τις απαιτήσεις διαβατηρίου και το νέο σύστημα EES."
    },
    image: "/images/greece-visa-entry-requirements.webp",
    overview: {
      en: "Greece is part of the European Union and the Schengen Area. For most visitors, entry into Greece means entry into the Schengen Area — and your visa status and permitted length of stay apply across all Schengen countries, not just Greece. This means if you enter France first and then travel to Greece, your days in both countries count toward the same total. Understanding these rules is essential for planning any trip to Greece.",
      el: "Η Ελλάδα είναι μέλος της Ευρωπαϊκής Ένωσης και της ζώνης Σένγκεν. Η είσοδος στην Ελλάδα σημαίνει είσοδο στον χώρο Σένγκεν — οι ημέρες σας μετρούν σε όλες τις χώρες Σένγκεν, όχι μόνο στην Ελλάδα."
    },
    points: {
      en: [
        "US, UK, Canadian, Australian and most other Western visitors do NOT need a visa for stays up to 90 days",
        "The 90-day limit applies across the entire Schengen Area, not just Greece",
        "EES digital border system is now fully operational — bring your passport and allow extra time",
        "ETIAS travel authorisation is expected in late 2026 but is not yet in operation",
        "Visa applicants should apply at the Greek consulate at least 6 weeks before travel",
        "Passport must be valid for at least 3 months beyond your planned departure",
        "Travel medical insurance is required for visa applicants and recommended for all visitors"
      ],
      el: [
        "Πολίτες ΗΠΑ, ΗΒ, Καναδά, Αυστραλίας δεν χρειάζονται βίζα για έως 90 ημέρες",
        "Το όριο 90 ημερών ισχύει σε όλο τον χώρο Σένγκεν",
        "Το ψηφιακό σύστημα EES λειτουργεί πλήρως — επιτρέψτε επιπλέον χρόνο",
        "Το ETIAS αναμένεται στα τέλη του 2026 αλλά δεν ισχύει ακόμα",
        "Οι αιτούντες βίζα πρέπει να υποβάλουν αίτηση τουλάχιστον 6 εβδομάδες πριν",
        "Το διαβατήριο πρέπει να ισχύει για 3 μήνες μετά την αναχώρηση",
        "Ταξιδιωτική ασφάλεια συνιστάται για όλους τους επισκέπτες"
      ]
    },
    sections: [
      {
        title: { en: "1. The Schengen Area: What It Means for Your Visit", el: "1. Η Ζώνη Σένγκεν" },
        content: {
          en: "Greece is part of the European Union and the Schengen Area. For most visitors, entry into Greece means entry into the Schengen Area — and your visa status and permitted length of stay apply across all 29 Schengen member states, not just to Greece. If you enter France first and then travel to Greece, your days in both countries count toward the same total.\n\nSchengen member states: Austria, Belgium, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden and Switzerland, along with several associate countries.",
          el: "Η Ελλάδα ανήκει στη ζώνη Σένγκεν. Η άδεια παραμονής σας ισχύει σε όλες τις 29 χώρες Σένγκεν. Αν μπείτε πρώτα στη Γαλλία και μετά ταξιδέψετε στην Ελλάδα, οι ημέρες σε αμφότερες μετρούν στο ίδιο σύνολο."
        }
      },
      {
        title: { en: "2. Who Does NOT Need a Visa", el: "2. Ποιοι ΔΕΝ Χρειάζονται Βίζα" },
        content: {
          en: "The following nationalities can travel to Greece for tourism or business without a visa, for stays of up to 90 days within any 180-day period:\n\nEU and EEA citizens: Citizens of all EU member states and EEA countries (Norway, Iceland, Liechtenstein) can travel freely with no restrictions or time limits.\n\nVisa-exempt non-EU nationalities include: United States, United Kingdom, Canada, Australia, New Zealand, Japan, South Korea, Singapore, Israel, United Arab Emirates, and over 60 other countries. The full list is maintained by the European Commission.\n\nThese travellers must still meet passport validity requirements (see below) and must now register in the EU's new Entry/Exit System on their first crossing after October 2025.",
          el: "Πολίτες ΕΕ και ΕΟΧ μπορούν να ταξιδεύουν ελεύθερα. Πολίτες ΗΠΑ, ΗΒ, Καναδά, Αυστραλίας, Νέας Ζηλανδίας, Ιαπωνίας, Νότιας Κορέας, Σιγκαπούρης, Ισραήλ και άνω των 60 χωρών δεν χρειάζονται βίζα για έως 90 ημέρες."
        }
      },
      {
        title: { en: "3. The 90/180-Day Rule Explained", el: "3. Ο Κανόνας 90/180 Ημερών" },
        content: {
          en: "The 90/180 rule is the single most important rule for visa-exempt travellers to understand, because a surprising number of visitors accidentally overstay.\n\nThe rule states that you may spend a maximum of 90 days within the Schengen Area in any 180-day rolling window. A rolling window means it is not a fixed calendar half-year. At any given moment, the authorities look back 180 days from that date and count how many days you have spent in Schengen countries during that period. The maximum is 90.\n\nPractical example: If you arrive in Greece on 1 June and stay for 30 days, then visit the UK (not Schengen) for two weeks, then return to France (Schengen) for 30 days, you will have used 60 of 90 permitted days. You have 30 days remaining in that 180-day window.\n\nOverstaying is serious. If you remain beyond 90 days, you can be fined upon departure and banned from re-entering any Schengen country for three months. Your overstay is recorded digitally in the EU's EES system.\n\nFree online Schengen calculators can help track your days.",
          el: "Ο κανόνας 90/180 είναι ο σημαντικότερος κανόνας. Μπορείτε να μείνετε έως 90 ημέρες εντός της ζώνης Σένγκεν σε οποιαδήποτε κυλιόμενη περίοδο 180 ημερών. Η υπέρβαση επιφέρει πρόστιμο και απαγόρευση εισόδου για 3 μήνες."
        }
      },
      {
        title: { en: "4. Who DOES Need a Visa for Greece", el: "4. Ποιοι Χρειάζονται Βίζα" },
        content: {
          en: "Citizens of countries without a visa-waiver agreement with the EU must apply for a Schengen C visa (short-stay tourist or business visa) before travelling. This includes citizens of India, China, Russia, South Africa, Lebanon, Vietnam, Pakistan and many others.\n\nHow to apply: Applications are submitted in person at the Greek consulate or embassy in your country of residence. Greece does not issue visas on arrival.\n\nRequired documents: Valid passport (issued within 10 years, valid at least 3 months beyond departure), completed visa application form, recent passport photo, travel medical insurance (minimum €30,000 coverage), proof of accommodation in Greece, proof of sufficient funds, flight itinerary, and proof of ties to your home country.\n\nProcessing time: Apply at least 6–8 weeks before your planned departure. The visa costs approximately €80 for adults (varies).\n\nCommon reasons for rejection: Incomplete documentation, or failure to demonstrate sufficient financial means. A Schengen visa issued by Greece allows travel throughout the Schengen Area.",
          el: "Πολίτες χωρών χωρίς συμφωνία απαλλαγής βίζας πρέπει να υποβάλουν αίτηση για βίζα Σένγκεν C πριν ταξιδέψουν. Υποβάλλεται αυτοπροσώπως στο ελληνικό προξενείο. Απαιτείται διαβατήριο, ασφάλεια υγείας (€30.000), αποδεικτικά διαμονής και επαρκών πόρων. Υποβολή 6–8 εβδομάδες πριν."
        }
      },
      {
        title: { en: "5. Passport Requirements", el: "5. Απαιτήσεις Διαβατηρίου" },
        content: {
          en: "Regardless of whether you need a visa, all non-EU nationals entering Greece must present a valid passport meeting these requirements:\n\nValidity: Your passport must be valid for at least three months beyond your planned departure date from Greece. The US State Department advises six months of remaining validity as a safer standard.\n\nIssue date: Your passport must have been issued within the last 10 years.\n\nMachine-readable: Modern passports from most countries meet this requirement. Older non-biometric passports may cause issues.\n\nNot reported lost or stolen: A passport flagged as lost or stolen will result in denied entry.\n\nPractical advice for US travellers: While Greek law requires only three months post-departure validity, the US State Department recommends six months as a general rule, as transit countries may have stricter requirements.",
          el: "Όλοι οι μη ΕΕ ταξιδιώτες πρέπει να έχουν διαβατήριο με ισχύ τουλάχιστον 3 μήνες μετά την ημερομηνία αναχώρησης. Το Υπουργείο Εξωτερικών των ΗΠΑ συνιστά 6 μήνες. Το διαβατήριο πρέπει να έχει εκδοθεί εντός των τελευταίων 10 ετών."
        }
      },
      {
        title: { en: "6. The New EU Entry/Exit System (EES)", el: "6. Το Νέο Ψηφιακό Σύστημα EES" },
        content: {
          en: "As of October 2025, the European Union has introduced the Entry/Exit System (EES), a digital border system affecting all non-EU nationals travelling to Greece and other Schengen countries.\n\nWhat the EES does: It replaces manual passport stamping with digital registration of each border crossing. Every time a non-EU traveller enters or exits the Schengen Area, the following data is recorded: name and travel document data, facial image, fingerprints (10 fingers for adults, children under 12 exempt), date and location of entry and exit, and records of any refusal of entry.\n\nThe EES became fully operational across all 29 Schengen countries as of 10 April 2026. Greece is fully participating.\n\nWhat this means for your trip: On your first entry under EES, you will provide fingerprints and a facial image. On subsequent entries, facial recognition verifies your identity. Your 90-day count is tracked automatically.\n\nAllow extra time at the airport for biometric registration, especially on your first EES crossing. The EU offers an optional mobile app to pre-register up to 72 hours before arrival.",
          el: "Από τον Οκτώβριο 2025, το σύστημα EES αντικαθιστά τη χειροκίνητη σφράγιση διαβατηρίων με ψηφιακή καταγραφή. Καταγράφονται: όνομα, φωτογραφία, δακτυλικά αποτυπώματα, ημερομηνία εισόδου/εξόδου. Πλήρως λειτουργικό από 10 Απριλίου 2026. Επιτρέψτε επιπλέον χρόνο στο αεροδρόμιο."
        }
      },
      {
        title: { en: "7. ETIAS: The Upcoming Travel Authorisation", el: "7. ETIAS: Η Επερχόμενη Ταξιδιωτική Άδεια" },
        content: {
          en: "The European Travel Information and Authorisation System (ETIAS) is a new electronic pre-travel authorisation that will be required for travellers from visa-exempt countries entering Greece and other Schengen countries. This includes US, UK, Canadian, Australian and over 60 other nationalities.\n\nETIAS is not a visa. It is a digital pre-clearance similar to the US ESTA or Canadian eTA. The application is completed online and requires a valid passport, personal details and a small fee.\n\nWhen applying using the official ETIAS website, you will be charged a fee of EUR 20. Applicants who are under 18 or over 70 years of age are exempt from this payment. You are also exempt if you are a family member of an EU national and you fulfil the conditions to qualify for family member status.\n\nValidity: Three years or until your passport expires, whichever comes first. Approved for multiple trips.\n\nImportant: As of May 2026, ETIAS is not yet in operation. You cannot currently apply. Any websites claiming to offer ETIAS applications are unofficial. When launched, the only official portal will be at https://travel-europe.europa.eu/etias.\n\nIf booking a trip to Greece for late 2026 or 2027, factor in that you may need ETIAS before departure.",
          el: "Το ETIAS είναι μια ηλεκτρονική άδεια για ταξιδιώτες από χώρες χωρίς βίζα, παρόμοια με το ESTA των ΗΠΑ. Κόστος: €7 (18–70 ετών), ισχύ 3 έτη. Δεν είναι ακόμα ενεργό (Μάιος 2026). Η επίσημη πύλη θα είναι travel-europe.europa.eu/etias."
        }
      },
      {
        title: { en: "8. Entry Requirements Checklist", el: "8. Λίστα Ελέγχου Απαιτήσεων" },
        content: {
          en: "Checklist for all travellers:\n- Valid passport with at least 3 months validity beyond departure (6 months recommended)\n- Passport issued within the last 10 years\n- Stay within the 90-day Schengen limit (visa-exempt visitors)\n- Schengen visa obtained before travel (if required for your nationality)\n- 90-day count tracked automatically by EES system (now fully operational)\n- Check ETIAS status before travel if planning trips for late 2026 or beyond\n- Apply at Greek consulate at least 6 weeks before travel (visa applicants)\n- Travel medical insurance with minimum €30,000 coverage (required for visa applicants, recommended for all)\n- Proof of accommodation, sufficient funds and ties to home country (visa applicants)",
          el: "Λίστα ελέγχου: Έγκυρο διαβατήριο (3+ μήνες μετά αναχώρηση, 6 μήνες συνιστάται), διαβατήριο εντός 10ετίας, τήρηση 90ήμερου ορίου, βίζα Σένγκεν αν απαιτείται, ταξιδιωτική ασφάλεια (€30.000), αποδεικτικά διαμονής και πόρων."
        }
      },
      {
        title: { en: "9. Frequently Asked Questions", el: "9. Συχνές Ερωτήσεις" },
        content: {
          en: "Can I extend my stay beyond 90 days? Not under a tourist/short-stay entry. For longer stays, apply for a National D (long-stay) visa through the Greek consulate before travelling. Options include a financially independent person (FIP) visa, digital nomad visa, student visa or other categories.\n\nDo I need travel insurance for Greece? Travel insurance is not legally required for visa-exempt visitors on short stays but is strongly recommended. Healthcare costs in Greece for non-EU visitors can be significant. For Schengen visa applicants, insurance with minimum €30,000 coverage is mandatory.\n\nWhat happens if I overstay my 90 days? You can be fined upon departure and banned from re-entering any Schengen country for three months. Your overstay is recorded digitally in the EES system.\n\nCan I work in Greece on a tourist visa? No. A Schengen tourist visa (or visa-free entry) does not permit paid work in Greece. Digital nomads and remote workers should investigate the Greek digital nomad visa for stays over 90 days.\n\nIs ETIAS already required? No. As of May 2026, ETIAS is not yet in operation. Check official EU sources before your trip.",
          el: "Μπορώ να παρατείνω τη διαμονή μου πέραν των 90 ημερών; Όχι με τουριστική βίζα. Χρειάζεστε Εθνική βίζα D (μακράς διαμονής).\n\nΧρειάζομαι ταξιδιωτική ασφάλεια; Συνιστάται για όλους, υποχρεωτική για αιτούντες βίζα Σένγκεν.\n\nΤι γίνεται αν υπερβώ τις 90 ημέρες; Πρόστιμο και απαγόρευση εισόδου για 3 μήνες.\n\nΜπορώ να εργαστώ με τουριστική βίζα; Όχι.\n\nΙσχύει ήδη το ETIAS; Όχι ακόμα (Μάιος 2026)."
        }
      }
    ]
  },
  {
    slug: "hidden-greek-islands",
    title: {
      en: "Hidden Greek Islands: 10 Off-the-Beaten-Path Destinations Worth Finding",
      el: "Κρυμμένα Ελληνικά Νησιά: 10 Προορισμοί Μακριά από τα Συνηθισμένα"
    },
    description: {
      en: "Skip the crowds. These 10 hidden Greek islands offer dramatic landscapes, authentic villages, and the Greece most tourists never see — from tiny Kastellorizo to wild Ikaria.",
      el: "Αφήστε πίσω τα πλήθη. Αυτά τα 10 κρυμμένα νησιά προσφέρουν εντυπωσιακά τοπία, αυθεντικά χωριά και την Ελλάδα που οι περισσότεροι τουρίστες δεν βλέπουν ποτέ."
    },
    image: "/images/hidden-greek-islands.webp",
    overview: {
      en: "Greece has over 6,000 islands. Most travellers see three of them.\n\nSantorini and Mykonos are beautiful — nobody disputes that. But the Greece that stays with you long after you leave is often found elsewhere: in a fishing village where the taverna has no menu, on a ferry that runs twice a week, in a caldera that nobody has photographed a thousand times already.\n\nThese ten islands will not appear on every Instagram feed. Some require patience to reach. All of them reward it.\n\nThe obvious reason to visit is fewer crowds. But that understates it. When an island hasn't been shaped by mass tourism, the rhythms of daily life stay intact. These are islands where Greece feels like itself.",
      el: "Η Ελλάδα έχει πάνω από 6.000 νησιά. Οι περισσότεροι ταξιδιώτες βλέπουν τρία από αυτά.\n\nΗ Σαντορίνη και η Μύκονος είναι όμορφες — κανείς δεν το αμφισβητεί. Αλλά η Ελλάδα που μένει μαζί σου πολύ μετά την αναχώρηση βρίσκεται συχνά αλλού: σε ένα ψαροχώρι όπου η ταβέρνα δεν έχει μενού, σε ένα πλοίο που κάνει δρομολόγιο δύο φορές την εβδομάδα, σε μια καλντέρα που κανείς δεν έχει φωτογραφίσει χίλιες φορές.\n\nΑυτά τα δέκα νησιά δεν θα εμφανιστούν σε κάθε Instagram feed. Κάποια απαιτούν υπομονή για να τα φτάσεις. Όλα ανταμείβουν."
    },
    points: {
      en: [
        "Kastellorizo is the most remote village in the Aegean with fewer than 500 residents",
        "Ikaria is one of the world's five Blue Zones — the island where people live longest",
        "Folegandros has the Cycladic beauty without the selfie crowds",
        "Sifnos is the food island with more chefs per capita than anywhere in Greece",
        "Astypalea's butterfly shape hides exceptional diving and a Venetian fortress",
        "Koufonisia offers Maldives-style turquoise water at Greek prices",
        "Amorgos has the most dramatic monastery setting in the Aegean",
        "Halki has 300 people and no cars — declared a Peace Island by UNESCO",
        "Tilos is the first energy self-sufficient island in the Mediterranean",
        "Serifos offers authentic Cycladic life with excellent walking paths"
      ],
      el: [
        "Το Καστελλόριζο είναι το πιο απομακρυσμένο χωριό του Αιγαίου με λιγότερους από 500 κατοίκους",
        "Η Ικαρία είναι μία από τις πέντε Μπλε Ζώνες στον κόσμο — το νησί της μακροζωίας",
        "Η Φολέγανδρος έχει την κυκλαδίτικη ομορφιά χωρίς τα πλήθη",
        "Η Σίφνος έχει περισσότερους σεφ ανά κάτοικο από οπουδήποτε αλλού στην Ελλάδα",
        "Η Αστυπάλαια προσφέρει εξαιρετικές καταδύσεις και ένα βενετσιάνικο κάστρο",
        "Η Κουφονησία έχει νερά σαν τις Μαλδίβες σε ελληνικές τιμές",
        "Η Αμοργός έχει την πιο εντυπωσιακή τοποθεσία μοναστηριού στο Αιγαίο",
        "Η Χάλκη έχει 300 κατοίκους και καθόλου αυτοκίνητα",
        "Η Τήλος είναι το πρώτο ενεργειακά αυτάρκες νησί στη Μεσόγειο",
        "Η Σέριφος προσφέρει αυθεντική κυκλαδίτικη ζωή με εξαιρετικά μονοπάτια"
      ]
    },
    sections: [
      {
        title: { en: "1. Kastellorizo — The Most Remote Village in the Aegean", el: "1. Καστελλόριζο — Το Πιο Απομακρυσμένο Χωριό του Αιγαίου" },
        content: {
          en: "Island group: Dodecanese | Getting there: Ferry from Rhodes (2–3 times per week) or small plane from Rhodes\n\nKastellorizo — officially Megisti — is the easternmost point of Greece, sitting just 2 kilometres from the Turkish coast. Its harbour, lined with neoclassical mansions in faded terracotta and ochre, is one of the most beautiful and most overlooked in the entire Mediterranean. The island has fewer than 500 permanent residents. There are no cars to speak of, no beaches in the traditional sense, and no nightlife. What it has is something harder to find: complete stillness, extraordinary clarity of light, and the feeling that you have arrived somewhere genuinely out of reach.\n\nThe Galazia Spilia — the Blue Cave — is the island's most famous natural feature, reached only by small boat. The cave floods with an intense cobalt light when the sun hits the water at the right angle. The harbour front is the heart of the island: a crescent of painted houses reflected in deep, still water. The Lycian tomb carved into the cliff above the harbour is a remnant of an ancient civilization that once ruled this coastline.\n\nPopulation: Around 500 | Ferry frequency: 2–3 sailings per week from Rhodes | Stay: 2–3 nights minimum | Season: May–October | Note: Day-trippers come from Rhodes in summer — stay overnight and the island is yours after 4pm.",
          el: "Νησιωτική ομάδα: Δωδεκάνησα | Πρόσβαση: Πλοίο από Ρόδο (2–3 φορές/εβδομάδα) ή μικρό αεροπλάνο από Ρόδο\n\nΤο Καστελλόριζο είναι το ανατολικότερο σημείο της Ελλάδας, μόλις 2 χιλιόμετρα από την τουρκική ακτή. Το λιμάνι του με τα νεοκλασικά αρχοντικά είναι από τα ομορφότερα και πιο παραγνωρισμένα της Μεσογείου. Το νησί έχει λιγότερους από 500 μόνιμους κατοίκους, καθόλου αυτοκίνητα, και καμία νυχτερινή ζωή. Αυτό που έχει είναι κάτι πιο δύσκολο να βρεις: απόλυτη ησυχία, εξαιρετική διαύγεια φωτός, και η αίσθηση ότι έφτασες κάπου πραγματικά απομακρυσμένο.\n\nΗ Γαλάζια Σπηλιά είναι το πιο διάσημο φυσικό αξιοθέατο, προσβάσιμη μόνο με μικρό σκάφος. Το λιμάνι με τα ζωγραφισμένα σπίτια είναι η καρδιά του νησιού. Ο λυκικός τάφος λαξευμένος στον βράχο πάνω από το λιμάνι είναι κατάλοιπο αρχαίου πολιτισμού."
        }
      },
      {
        title: { en: "2. Ikaria — The Island Where People Forget to Die", el: "2. Ικαρία — Το Νησί όπου οι Άνθρωποι Ξεχνούν να Πεθάνουν" },
        content: {
          en: "Island group: Eastern Aegean | Getting there: Ferry from Piraeus (8–10 hours) or Samos; occasional flights from Athens\n\nIkaria is one of the world's five Blue Zones — the rare places on earth where an unusually high proportion of the population lives past 90. The island has been studied by epidemiologists, sociologists, and food scientists trying to understand what its residents do differently. The short answer seems to be: not much, deliberately. Ikarians sleep late, eat locally, walk the terrain, drink wine in the evening, and observe a social culture built around shared meals and unhurried conversation. The island has no particular interest in adjusting itself for tourism. It remains, defiantly, itself.\n\n→ Full guide: [Ikaria — The Island of Longevity](/destinations/ikaria)",
          el: "Νησιωτική ομάδα: Ανατολικό Αιγαίο | Πρόσβαση: Πλοίο από Πειραιά (8–10 ώρες) ή Σάμο\n\nΗ Ικαρία είναι μία από τις πέντε Μπλε Ζώνες του κόσμου — σπάνια μέρη όπου ένα ασυνήθιστα υψηλό ποσοστό πληθυσμού ζει πάνω από 90 έτη. Οι Ικαριώτες κοιμούνται αργά, τρώνε τοπικά, περπατούν το έδαφος, πίνουν κρασί το βράδυ και ζουν με κοινωνική κουλτούρα γύρω από κοινά γεύματα. Το νησί δεν ενδιαφέρεται να προσαρμοστεί για τον τουρισμό. Παραμένει, πεισματικά, ο εαυτός του."
        }
      },
      {
        title: { en: "3. Folegandros — The Cyclades Without the Crowds", el: "3. Φολέγανδρος — Οι Κυκλάδες Χωρίς τα Πλήθη" },
        content: {
          en: "Island group: Cyclades | Getting there: Ferry from Piraeus (6–8 hours) via Milos or Santorini\n\nFolegandros sits between Milos and Santorini but occupies an entirely different psychological space. It has the whitewashed geometry, the clifftop village, and the sharp Aegean light of the classic Cyclades — but the scale stays intimate and the atmosphere stays calm.\n\nThe Chora of Folegandros is considered by many to be the most beautiful village in the Cyclades. It sits on a clifftop 200 metres above sea level, accessed through arched passageways and tiny squares shaded by hibiscus and bougainvillea. The Church of Panagia, reached by a steep path up a bare limestone hill, offers one of the best views in the Aegean.\n\nBeaches are reached on foot or by the island's single bus. Katergo beach, accessible only by boat or a 45-minute walk, rewards the effort.\n\nPopulation: Around 750 | Best time: May–June, September | Stay: 3–4 days | Note: No ATM on the island reliably — bring cash.",
          el: "Νησιωτική ομάδα: Κυκλάδες | Πρόσβαση: Πλοίο από Πειραιά (6–8 ώρες)\n\nΗ Φολέγανδρος βρίσκεται ανάμεσα στη Μήλο και τη Σαντορίνη αλλά ανήκει σε εντελώς διαφορετικό ψυχολογικό χώρο. Έχει την ασπρισμένη γεωμετρία, το χωριό στην κορυφή του γκρεμού και το αεικίνητο κυκλαδίτικο φως — αλλά η κλίμακα παραμένει οικεία και η ατμόσφαιρα ήρεμη.\n\nΗ Χώρα της Φολεγάνδρου θεωρείται από πολλούς το ομορφότερο χωριό των Κυκλάδων, σε υψόμετρο 200 μέτρων. Η παραλία Κάτεργο, προσβάσιμη μόνο με βάρκα ή 45λεπτη πεζοπορία, ανταμείβει την προσπάθεια."
        }
      },
      {
        title: { en: "4. Sifnos — The Food Island the World Hasn't Fully Found Yet", el: "4. Σίφνος — Το Γαστρονομικό Νησί που ο Κόσμος Δεν Έχει Ανακαλύψει Ακόμα" },
        content: {
          en: "Island group: Cyclades | Getting there: Ferry from Piraeus (3–4 hours on fast ferry)\n\nSifnos is quietly famous among Greeks for two things: its cuisine and its pottery. The island has produced more professional chefs per capita than anywhere else in Greece, and its culinary traditions — revithia (chickpea stew slow-cooked overnight in clay pots), mastelo (lamb with dill wine), local honey — are genuinely regional rather than pan-Hellenic.\n\nThe Apollonia main village is a network of interconnected white streets and squares. The footpath system that links the island's villages is one of the best-maintained walking networks in the Cyclades, passing through ancient towers, chapels, and terraced hillsides. The pottery tradition is visible everywhere: handmade ceramics fill shop windows, and working kilns can be visited in Kamares.",
          el: "Νησιωτική ομάδα: Κυκλάδες | Πρόσβαση: Πλοίο από Πειραιά (3–4 ώρες με fast ferry)\n\nΗ Σίφνος είναι διάσημη μεταξύ των Ελλήνων για δύο πράγματα: την κουζίνα και την αγγειοπλαστική της. Το νησί έχει βγάλει περισσότερους επαγγελματίες σεφ ανά κάτοικο από οπουδήποτε αλλού στην Ελλάδα. Οι παραδόσεις της —ρεβίθια, μαστέλο, τοπικό μέλι— είναι γνήσια τοπικές. Το δίκτυο μονοπατιών που συνδέει τα χωριά είναι από τα καλύτερα συντηρημένα στις Κυκλάδες."
        }
      },
      {
        title: { en: "5. Astypalea — The Butterfly of the Aegean", el: "5. Αστυπάλαια — Η Πεταλούδα του Αιγαίου" },
        content: {
          en: "Island group: Dodecanese | Getting there: Ferry from Piraeus (12 hours) or Kos; flights from Athens\n\nAstypalea's shape — two triangles connected by a narrow isthmus — seen from above resembles a butterfly with open wings, which explains the island's poetic reputation. The Kastro, a medieval fortress village built by the Venetians, sits above the main port and is one of the best-preserved castle settlements in the Aegean. Underwater, Astypalea is exceptional. The waters around the island are among the clearest in the Aegean, and several dive sites are accessible to all levels.",
          el: "Νησιωτική ομάδα: Δωδεκάνησα | Πρόσβαση: Πλοίο από Πειραιά (12 ώρες) ή Κω\n\nΤο σχήμα της Αστυπάλαιας — δύο τρίγωνα συνδεδεμένα με έναν στενό ισθμό — μοιάζει από ψηλά με πεταλούδα. Το Κάστρο, ένας μεσαιωνικός οικισμός των Ενετών, είναι από τους καλύτερα διατηρημένους οχυρωμένους οικισμούς του Αιγαίου. Υποβρύχια, η Αστυπάλαια είναι εξαιρετική — τα νερά της είναι από τα πιο καθαρά στο Αιγαίο."
        }
      },
      {
        title: { en: "6. Koufonisia — Tiny, Turquoise, and Almost Unknown", el: "6. Κουφονήσια — Μικρά, Τυρκουάζ και Σχεδόν Άγνωστα" },
        content: {
          en: "Island group: Small Cyclades (between Naxos and Amorgos) | Getting there: Ferry from Naxos or Amorgos (1–2 hours)\n\nKoufonisia is two small islands — Ano Koufonisi and Kato Koufonisi — with a combined population of around 400. The beaches here, particularly Pori and Fanos, have water that turns an improbable shade of turquoise over white sand and is routinely described as the best swimming water in the Cyclades. The island fills in August; outside of peak season it remains genuinely quiet.",
          el: "Νησιωτική ομάδα: Μικρές Κυκλάδες | Πρόσβαση: Πλοίο από Νάξο ή Αμοργό (1–2 ώρες)\n\nΗ Κουφονησία είναι δύο μικρά νησιά με συνολικό πληθυσμό περίπου 400 κατοίκων. Οι παραλίες εδώ, ιδιαίτερα το Πόρι και ο Φάνος, έχουν νερό που παίρνει μια απίθανη απόχρωση τυρκουάζ πάνω από λευκή άμμο. Το νησί γεμίζει τον Αύγουστο· εκτός high season παραμένει πραγματικά ήσυχο."
        }
      },
      {
        title: { en: "7. Amorgos — Wild, Dramatic, Unmistakably Greek", el: "7. Αμοργός — Άγρια, Δραματική, Αναμφισβήτητα Ελληνική" },
        content: {
          en: "Island group: Cyclades | Getting there: Ferry from Piraeus (9–12 hours)\n\nAmorgos is long, narrow, and spectacularly vertical. The island's most famous image is the Monastery of Hozoviotissa, built directly into a white cliff face above the Aegean — one of the most dramatic architectural images in Greece. The main Chora is among the oldest continuously inhabited settlements in the Cyclades. The dive site at the wreck of the Olympia — a ship that went down in 1929 — is considered one of the finest wreck dives in the Mediterranean.",
          el: "Νησιωτική ομάδα: Κυκλάδες | Πρόσβαση: Πλοίο από Πειραιά (9–12 ώρες)\n\nΗ Αμοργός είναι μακριά, στενή και θεαματικά κάθετη. Η Μονή της Χοζοβιώτισσας, χτισμένη απευθείας σε έναν λευκό βράχο πάνω από το Αιγαίο, είναι μια από τις πιο δραματικές αρχιτεκτονικές εικόνες της Ελλάδας. Το ναυάγιο του Olympia — πλοίο που βυθίστηκε το 1929 — θεωρείται ένα από τα καλύτερα wreck dives της Μεσογείου."
        }
      },
      {
        title: { en: "8. Halki — 300 People and No Cars", el: "8. Χάλκη — 300 Κάτοικοι και Καθόλου Αυτοκίνητα" },
        content: {
          en: "Island group: Dodecanese (near Rhodes) | Getting there: Short ferry from Rhodes (1.5 hours)\n\nHalki has fewer than 300 permanent residents, no cars, and a single settlement — Emporio — whose neoclassical harbour mansions were built by wealthy sponge merchants in the 19th century. The island was declared a Peace and Friendship Island by UNESCO and has maintained that spirit ever since. One of the quietest places in the Aegean, and one of the most visually striking.",
          el: "Νησιωτική ομάδα: Δωδεκάνησα | Πρόσβαση: Σύντομο πλοίο από Ρόδο (1,5 ώρα)\n\nΗ Χάλκη έχει λιγότερους από 300 μόνιμους κατοίκους, καθόλου αυτοκίνητα, και έναν μοναδικό οικισμό — το Εμποριό — με νεοκλασικά αρχοντικά χτισμένα από πλούσιους σπογγεμπόρους. Το νησί ανακηρύχθηκε Νησί Ειρήνης και Φιλίας από την UNESCO."
        }
      },
      {
        title: { en: "9. Tilos — The Island of Protected Nature", el: "9. Τήλος — Το Νησί της Προστατευμένης Φύσης" },
        content: {
          en: "Island group: Dodecanese | Getting there: Ferry from Rhodes (2–3 hours)\n\nTilos made international headlines in 2018 when it became the first energy self-sufficient island in the Mediterranean, running entirely on wind and solar power. It is also a bird sanctuary — the island lies on a major migration route and hosts species rarely seen elsewhere in Greece. The island's commitment to sustainable tourism is genuine and results in exceptional care of its natural environment.",
          el: "Νησιωτική ομάδα: Δωδεκάνησα | Πρόσβαση: Πλοίο από Ρόδο (2–3 ώρες)\n\nΗ Τήλος έγινε διεθνής είδηση το 2018 όταν έγινε το πρώτο ενεργειακά αυτάρκες νησί της Μεσογείου, λειτουργώντας εξ ολοκλήρου με αιολική και ηλιακή ενέργεια. Είναι επίσης καταφύγιο πουλιών — βρίσκεται πάνω σε μεγάλη μεταναστευτική διαδρομή."
        }
      },
      {
        title: { en: "10. Serifos — Where the Wind Lives", el: "10. Σέριφος — Εκεί που Ζει ο Άνεμος" },
        content: {
          en: "Island group: Cyclades | Getting there: Ferry from Piraeus (3–4 hours)\n\nSerifos gets fewer visitors than its neighbours Sifnos and Milos, which means the atmosphere in its hilltop Chora — built on a dramatic peak above the port — remains genuinely local. The beaches at Livadi and Psili Ammos are excellent; the walking paths between villages are among the most scenic in the Cyclades.",
          el: "Νησιωτική ομάδα: Κυκλάδες | Πρόσβαση: Πλοίο από Πειραιά (3–4 ώρες)\n\nΗ Σέριφος δέχεται λιγότερους επισκέπτες από τις γειτονικές Σίφνο και Μήλο, πράγμα που σημαίνει ότι η ατμόσφαιρα στη Χώρα της — χτισμένη σε μια δραματική κορυφή πάνω από το λιμάνι — παραμένει γνήσια τοπική. Οι παραλίες στο Λιβάδι και τον Ψιλό Άμμο είναι εξαιρετικές."
        }
      }
    ],
    tips: {
      en: [
        "Most of these islands have limited ferry connections outside of June–September — check Ferryhopper before building your itinerary",
        "Combining Kastellorizo with Folegandros in a single week is not realistic — choose one island group and explore it",
        "Bring cash — smaller islands have limited or no ATMs",
        "May, June and September offer the best weather, open businesses and manageable crowds",
        "Western Cyclades route: Athens → Sifnos → Folegandros → Serifos → Athens",
        "Eastern Dodecanese route: Rhodes → Kastellorizo → Halki → Tilos → Rhodes",
        "Central Aegean route: Naxos → Koufonisia → Amorgos → Ikaria"
      ],
      el: [
        "Τα περισσότερα από αυτά τα νησιά έχουν περιορισμένα δρομολόγια πλοίων εκτός Ιουνίου–Σεπτεμβρίου",
        "Δεν είναι ρεαλιστικό να συνδυάσεις Καστελλόριζο με Φολέγανδρο σε μία εβδομάδα",
        "Φέρε μετρητά — τα μικρά νησιά έχουν περιορισμένα ΑΤΜ",
        "Μάιος, Ιούνιος και Σεπτέμβριος προσφέρουν τον καλύτερο καιρό",
        "Δυτικές Κυκλάδες: Αθήνα → Σίφνος → Φολέγανδρος → Σέριφος → Αθήνα",
        "Ανατολικά Δωδεκάνησα: Ρόδος → Καστελλόριζο → Χάλκη → Τήλος → Ρόδος",
        "Κεντρικό Αιγαίο: Νάξος → Κουφονήσια → Αμοργός → Ικαρία"
      ]
    },
    faq: [
      {
        q: { en: "Which hidden Greek island is easiest to reach?", el: "Ποιο κρυμμένο ελληνικό νησί είναι πιο εύκολο να προσεγγίσω;" },
        a: { en: "Folegandros and Sifnos are both reachable from Piraeus in under 4 hours on fast ferries and have enough accommodation to visit without much advance planning.", el: "Η Φολέγανδρος και η Σίφνος είναι προσβάσιμες από τον Πειραιά σε λιγότερο από 4 ώρες με fast ferry και έχουν αρκετά καταλύματα." }
      },
      {
        q: { en: "Which hidden Greek island is best for couples?", el: "Ποιο κρυμμένο νησί είναι καλύτερο για ζευγάρια;" },
        a: { en: "Folegandros and Kastellorizo are both consistently recommended for romantic travel. Both offer dramatic settings, excellent food, and the kind of quiet that encourages actual conversation.", el: "Η Φολέγανδρος και το Καστελλόριζο συνιστώνται για ρομαντικά ταξίδια. Προσφέρουν δραματικά τοπία, εξαιρετικό φαγητό και ησυχία." }
      },
      {
        q: { en: "Is Kastellorizo worth the journey?", el: "Αξίζει το Καστελλόριζο το ταξίδι;" },
        a: { en: "If you want one genuinely remote Greek island experience, yes. The journey is part of the point — Kastellorizo is somewhere you have to decide to go, and that intention shapes the visit.", el: "Αν θέλεις μια πραγματικά απομακρυσμένη εμπειρία, ναι. Το ταξίδι είναι μέρος της εμπειρίας — το Καστελλόριζο είναι ένα μέρος που πρέπει να αποφασίσεις να πας." }
      },
      {
        q: { en: "Which island is best for first-time visitors to lesser-known Greece?", el: "Ποιο νησί είναι καλύτερο για όσους επισκέπτονται πρώτη φορά τα λιγότερο γνωστά νησιά;" },
        a: { en: "Sifnos is the most accessible introduction: easy ferry connections, excellent food, good walking, and Cycladic character without the intensity of peak-season Santorini or Mykonos.", el: "Η Σίφνος είναι η πιο προσιτή εισαγωγή: εύκολες ακτοπλοϊκές συνδέσεις, εξαιρετικό φαγητό, καλό περπάτημα και κυκλαδίτικος χαρακτήρας." }
      },
      {
        q: { en: "When is the best time to visit the hidden Greek islands?", el: "Ποια είναι η καλύτερη εποχή για να επισκεφτώ τα κρυμμένα ελληνικά νησιά;" },
        a: { en: "May, June and September offer the best combination of good weather, open businesses and manageable crowds. July and August are warmer but busier — even on small islands, peak season brings significant visitor numbers.", el: "Μάιος, Ιούνιος και Σεπτέμβριος προσφέρουν τον καλύτερο συνδυασμό καλού καιρού και διαχειρίσιμου κόσμου." }
      }
    ]
  },
  {
    slug: "rock-climbing-in-greece",
    title: {
      en: "Rock Climbing in Greece — The World Capital of Sport Climbing",
      el: "Αναρρίχηση στην Ελλάδα — Η Παγκόσμια Πρωτεύουσα Αθλητικής Αναρρίχησης"
    },
    description: {
      en: "Why climbers from forty countries come to Greece every year — and why the country's vertical world extends far beyond a single island.",
      el: "Γιατί αναρριχητές από σαράντα χώρες έρχονται στην Ελλάδα κάθε χρόνο — και γιατί ο κάθετος κόσμος της χώρας εκτείνεται πολύ πέρα από ένα μόνο νησί."
    },
    image: "/images/rock-climbing-greece.webp",
    overview: {
      en: "Greece offers one of the most remarkable and accessible sport climbing landscapes on the planet — over 4,200 bolt-protected routes on the island of Kalymnos alone, hundreds of limestone crags scattered across the mainland and the islands, and a climbing culture that has grown from a niche activity into a global destination in just two decades. This guide covers the major climbing destinations across Greece — from the world-famous tufa caves of Kalymnos and the historic massif of Varasova to the monastery towers of Meteora, the rising star of Leonidio, the wild card of Crete, and the quiet alternative of Karpathos. Whether you are a first-time sport climber or pushing the limits of the grade, Greece has a crag calibrated to your level.",
      el: "Η Ελλάδα προσφέρει ένα από τα πιο αξιόλογα και προσβάσιμα τοπία αθλητικής αναρρίχησης στον πλανήτη — πάνω από 4.200 προστατευμένες διαδρομές μόνο στο νησί της Καλύμνου, εκατοντάδες ασβεστολιθικά πεδία διάσπαρτα στην ηπειρωτική χώρα και τα νησιά, και μια αναρριχητική κουλτούρα που έχει εξελιχθεί σε παγκόσμιο προορισμό. Αυτός ο οδηγός καλύπτει τους σημαντικότερους προορισμούς αναρρίχησης σε όλη την Ελλάδα — από τις παγκοσμίου φήμης σπηλιές tufa της Καλύμνου και το ιστορικό βουνό Βαρβάσοβα έως τους πύργους της Μονής Μετεώρων, το ανερχόμενο αστέρι του Λεωνιδίου, το wild card της Κρήτης και την ήσυχη εναλλακτική της Καρπάθου."
    },
    points: {
      en: [
        "4,200+ bolt-protected routes on Kalymnos alone across 99 crags",
        "Over 8,000 routes countrywide spanning islands and mainland",
        "World-class Jurassic limestone — pockets, tufas, edges",
        "Climbing season runs 8-9 months per year thanks to mild climate",
        "Kalymnos International Climbing Festival draws 3,500+ climbers",
        "Leonidio: fastest-growing mainland crag with 3,000+ routes",
        "Varasova: birthplace of Greek climbing with 900m limestone massif",
        "Meteora: unique conglomerate towers up to 300m with monasteries"
      ],
      el: [
        "4.200+ προστατευμένες διαδρομές μόνο στην Κάλυμνο σε 99 πεδία",
        "Πάνω από 8.000 διαδρομές σε νησιά και ηπειρωτική χώρα",
        "Παγκόσμιας κλάσης Ιουρασικός ασβεστόλιθος",
        "Αναρριχητική σεζόν 8-9 μήνες τον χρόνο χάρη στο ήπιο κλίμα",
        "Διεθνές Φεστιβάλ Αναρρίχησης Καλύμνου με 3.500+ συμμετέχοντες",
        "Λεωνίδιο: το ταχύτερα αναπτυσσόμενο πεδίο με 3.000+ διαδρομές",
        "Βαρβάσοβα: γενέτειρα της ελληνικής αναρρίχησης, 900μ ασβεστολιθικός όγκος",
        "Μετέωρα: μοναδικοί κροκαλοπαγείς πύργοι έως 300μ με μοναστήρια"
      ]
    },
    sections: [
      {
        title: {
          en: "Kalymnos — Where It All Begins",
          el: "Κάλυμνος — Από Εκεί Ξεκινούν Όλα"
        },
        content: {
          en: "Kalymnos is widely regarded as one of the greatest sport climbing areas in the world. With over 4,200 routes in the latest guidebook, most accessible with a short hike and/or scooter, and great amenities, climbers wonder why they've ever climbed anywhere else. The first climbs were established by Andrea Di Bari and team in 1997 (sectors 'Arhi', 'Poets', etc.), after Di Bari discovered the island's potential one year prior. About 10 years later the route count surpassed 1,000, and the latest edition of the Kalymnos Guidebook covers more than 4,300 routes. The rock — Jurassic limestone sculpted by millennia of sea air into pockets, tufas and edges — is considered among the finest climbing rock in the world. Routes run directly above the Aegean in many places, with views across to Telendos island and the open sea that make the climbing experience unique even by international standards.",
          el: "Η Κάλυμνος θεωρείται ευρέως μία από τις σημαντικότερες περιοχές αθλητικής αναρρίχησης στον κόσμο. Με πάνω από 4.200 διαδρομές στον τελευταίο οδηγό, οι περισσότερες προσβάσιμες με σύντομη πεζοπορία ή μηχανάκι, και εξαιρετικές ανέσεις, οι αναρριχητές αναρωτιούνται γιατί σκαρφάλωναν οπουδήποτε αλλού. Οι πρώτες διαδρομές ανοίχτηκαν από τον Andrea Di Bari και την ομάδα του το 1997 (τομείς 'Arhi', 'Poets' κ.ά.), μετά την ανακάλυψη των δυνατοτήτων του νησιού από τον Di Bari ένα χρόνο νωρίτερα. Περίπου 10 χρόνια αργότερα ο αριθμός των διαδρομών ξεπέρασε τις 1.000. Το πέτρωμα — Ιουρασικός ασβεστόλιθος γλυπτός από χιλιετίες θαλάσσιου αέρα σε pockets, tufas και ακμές — θεωρείται κορυφαίο αναρριχητικό πέτρωμα στον κόσμο."
        }
      },
      {
        title: {
          en: "What Makes Kalymnos Unique",
          el: "Τι Κάνει την Κάλυμνο Μοναδική"
        },
        content: {
          en: "The climbing on Kalymnos varies from friendly beginner crags to 50m-long endurance test-pieces through a 3D world of the strangest climbable features you'll ever encounter — slabs, vertical walls, overhanging walls and insane caves. The guidebook describes over 4,200 routes ranging from F3a to F9a, across 99 different rock climbing areas. Whether you are a first-time sport climber or among the world's elite, Kalymnos has something calibrated to your level. The island also has excellent infrastructure — gear shops, guide services, climbing-specific accommodation, and a social scene centred around the spring and autumn climbing seasons that makes it easy to find partners. Beyond climbing, Greek cuisine, beach life and island culture ensure you are never bored on rest days.",
          el: "Η αναρρίχηση στην Κάλυμνο ποικίλλει από φιλικά πεδία για αρχάριους έως δοκιμασίες αντοχής 50 μέτρων μέσα από έναν τρισδιάστατο κόσμο — πλάκες, κάθετοι τοίχοι, επικρεμάμενοι τοίχοι και τρελές σπηλιές. Ο οδηγός περιγράφει πάνω από 4.200 διαδρομές από F3a έως F9a, σε 99 διαφορετικές περιοχές. Είτε είσαι πρωτάρης είτε ελίτ, η Κάλυμνος έχει κάτι για το επίπεδό σου. Το νησί διαθέτει εξαιρετική υποδομή — καταστήματα εξοπλισμού, ξεναγούς, ειδικά καταλύματα και μια κοινωνική σκηνή γύρω από την ανοιξιάτικη και φθινοπωρινή σεζόν."
        }
      },
      {
        title: {
          en: "The Main Climbing Areas on Kalymnos",
          el: "Οι Κύριες Αναρριχητικές Περιοχές στην Κάλυμνο"
        },
        content: {
          en: "The largest concentration of crags and routes are situated above the villages of Myrties, Masouri and Armeos on the west coast. All of these sectors can be reached from Masouri on foot, with an approach of between 20 and 35 minutes. Another well-established area is the north of Kalymnos around the villages of Arginonta, Skalia, and Emporios — popular to visit by scooter from Masouri. The island of Telendos is only a 10-minute boat trip from Myrties jetty. Telendos has seen significant recent development with many new crags and routes, many in caves facing east — ideal for summer climbing. The southern part of Kalymnos is the least developed area, offering a more remote climbing experience.",
          el: "Η μεγαλύτερη συγκέντρωση πεδίων βρίσκεται πάνω από τα χωριά Μυρτιές, Μασούρι και Αρμεός στη δυτική ακτή. Όλοι αυτοί οι τομείς είναι προσβάσιμοι από το Μασούρι με τα πόδια, με προσέγγιση 20-35 λεπτών. Μια άλλη καθιερωμένη περιοχή είναι ο βορράς γύρω από τα χωριά Αργινώντα, Σκαλιά και Εμπορειά. Ο Τέλενδος απέχει μόλις 10 λεπτά με βάρκα από την προβλήτα των Μυρτιών και έχει δει σημαντική ανάπτυξη νέων διαδρομών, πολλές σε σπηλιές με ανατολικό προσανατολισμό. Η νότια Κάλυμνος είναι η λιγότερο ανεπτυγμένη περιοχή."
        }
      },
      {
        title: {
          en: "Iconic Sectors of Kalymnos",
          el: "Εμβληματικοί Τομείς της Καλύμνου"
        },
        content: {
          en: "**Grande Grotte** — The most photographed cave in sport climbing; steep, atmospheric, surrounded by tufas. **Odyssey Wall** — something for everyone, from 4c beginner routes to the hardest route on the island, *Los Revolucionarios* (9a). **Olympic Wall** — perched high above the sea, offering equally outstanding routes and rock, minus the crowds and most of the polish, thanks to the longer approach hike. **Arhi** — One of the original sectors, a piece of Kalymnos climbing history. **Poets** — Perfect mid-grade limestone in a beautiful setting.",
          el: "**Grande Grotte** — Η πιο φωτογραφημένη σπηλιά στην αθλητική αναρρίχηση· απότομη, ατμοσφαιρική, περιτριγυρισμένη από tufas. **Odyssey Wall** — έχει για όλους, από 4c για αρχάριους έως την πιο δύσκολη διαδρομή του νησιού, *Los Revolucionarios* (9a). **Olympic Wall** — ψηλά πάνω από τη θάλασσα, εξαιρετικές διαδρομές χωρίς τον συνωστισμό. **Arhi** — Ένας από τους αυθεντικούς τομείς. **Poets** — Τέλειος ασβεστόλιθος μεσαίας δυσκολίας."
        }
      },
      {
        title: {
          en: "The Social Side of Kalymnos Climbing",
          el: "Η Κοινωνική Πλευρά της Αναρρίχησης στην Κάλυμνο"
        },
        content: {
          en: "Kalymnos is known for being a very sociable place — if you travel during the main season, you will definitely find new and old friends to give you a catch. Besides climbing, the Greek cuisine, beach and culture will keep you satisfied in the evenings and on rest days. All this combined also makes Kalymnos the perfect climbing destination for families. The Kalymnos International Climbing Festival is widely regarded as one of the most famous climbing events in the world. The 2025 edition brought together more than 3,500 climbers and outdoor enthusiasts from across the globe. The majority come from European countries (England, France, Italy, Germany, Switzerland, Austria, Spain), while participants also come from the USA, Canada, Argentina, Australia, Japan, Turkey, and many other countries. Besides endless climbing opportunities, the festival also includes Greek dancing lessons, parties with DJs, and cruises around the island.",
          el: "Η Κάλυμνος είναι γνωστή για την κοινωνικότητά της — αν ταξιδέψεις κατά τη διάρκεια της σεζόν, σίγουρα θα βρεις παλιούς και νέους φίλους. Εκτός από αναρρίχηση, η ελληνική κουζίνα, η παραλία και ο πολιτισμός θα σε κρατήσουν ικανοποιημένο τα βράδια και τις ημέρες ξεκούρασης. Το Διεθνές Φεστιβάλ Αναρρίχησης Καλύμνου είναι ένα από τα πιο διάσημα γεγονότα αναρρίχησης στον κόσμο. Η έκδοση του 2025 συγκέντρωσε πάνω από 3.500 αναρριχητές από όλο τον κόσμο — από Ευρώπη, ΗΠΑ, Καναδά, Αργεντινή, Αυστραλία, Ιαπωνία, Τουρκία και πολλές άλλες χώρες."
        }
      },
      {
        title: {
          en: "When to Climb on Kalymnos",
          el: "Πότε να Σκαρφαλώσεις στην Κάλυμνο"
        },
        content: {
          en: "The best times to climb on Kalymnos are spring (April to June) and fall (September to October), when the weather is mild and the areas less crowded. Most of the cliffs are too hot in the afternoons when the sun hits them in summer, and popular routes become polished. However, it is still possible to get away from the crowds if you are prepared to walk — and if all else fails, you can go swimming. The guidebook by longtime locals Katie Roussos and Aris Theodoropoulos is the definitive reference — all routes are shown on clear colour photo topos with descriptions, heights, approach information, GPS coordinates, and QR codes for parking. Practical note: the island still has very few cars — please hire a scooter rather than a car. Overall rock quality is excellent, but a helmet is never a bad idea — goats on top of the cliffs can knock down rocks, and tufas can break at any time.",
          el: "Οι καλύτερες εποχές είναι άνοιξη (Απρίλιος-Ιούνιος) και φθινόπωρο (Σεπτέμβριος-Οκτώβριος). Τα περισσότερα πεδία είναι πολύ ζεστά το απόγευμα το καλοκαίρι. Ο οδηγός των Katie Roussos και Aris Theodoropoulos είναι η οριστική αναφορά — όλες οι διαδρομές σε έγχρωμες φωτογραφίες με περιγραφές, GPS και QR codes. Πρακτική σημείωση: το νησί έχει πολύ λίγα αυτοκίνητα — νοίκιασε μηχανάκι. Η ποιότητα του βράχου είναι εξαιρετική, αλλά το κράνος δεν είναι ποτέ κακή ιδέα."
        }
      },
      {
        title: {
          en: "Varasova, Aitoloakarnania — The Birthplace of Greek Climbing",
          el: "Βαρβάσοβα, Αιτωλοακαρνανία — Η Γενέτειρα της Ελληνικής Αναρρίχησης"
        },
        content: {
          en: "If Kalymnos is the international star, then Varasova is the soul of Greek climbing. Varasova (917 m) is an imposing seaside limestone massif in Aitoloakarnania, Central Greece, just west of Antirrio. It is one of the most important climbing areas in the country and the place where Greek climbing evolved throughout the 60s, 70s, 80s and even into the 90s, when modern climbers pushed techniques and difficulties to levels comparable with the rest of the world. The steep topography of Varasova first made it a fortified settlement of the ancient Kalydonians, while in the 10th century AD it became a center of ascetic life, earning the name 'Holy Mountain of Aitolia'. The three peaks of Varasova rise to nearly identical elevation. The rock is very solid, relatively sharp, mostly gray or yellow limestone of outstanding quality — generously featured and teeming with variety: compact walls, steep slabs, corners, vertical cracks, jugs, flakes, chickenheads, incut edges. There are several mixed-character 'adventure' routes with as many as 18 pitches. Don't worry — you won't run into any crowds. Varasova is mainly a weekend venue, so if you are here mid-week you are very likely to have the crag to yourself.",
          el: "Αν η Κάλυμνος είναι το διεθνές αστέρι, η Βαρβάσοβα είναι η ψυχή της ελληνικής αναρρίχησης. Η Βαρβάσοβα (917 μ.) είναι ένας επιβλητικός παράκτιος ασβεστολιθικός όγκος στην Αιτωλοακαρνανία, δυτικά του Αντιρρίου. Είναι από τις σημαντικότερες αναρριχητικές περιοχές και το μέρος όπου εξελίχθηκε η ελληνική αναρρίχηση τις δεκαετίες του '60, '70, '80 και '90. Η απότομη τοπογραφία της την έκανε οχυρό των αρχαίων Καλυδωνίων και αργότερα κέντρο ασκητικής ζωής (10ος αιώνας μ.Χ.), αποκτώντας το όνομα 'Άγιον Όρος της Αιτωλίας'. Το πέτρωμα είναι πολύ συμπαγής, σχετικά αιχμηρός, γκρίζος ή κίτρινος ασβεστόλιθος κορυφαίας ποιότητας. Υπάρχουν αρκετές διαδρομές περιπέτειας με έως και 18 σχοινιές. Μην ανησυχείς για πολυκοσμία — η Βαρβάσοβα είναι κυρίως προορισμός Σαββατοκύριακου."
        }
      },
      {
        title: {
          en: "Meteora — Climbing Among the Monasteries",
          el: "Μετέωρα — Αναρρίχηση Ανάμεσα στα Μοναστήρια"
        },
        content: {
          en: "Meteora is an intriguing place. The word *metéora* means 'suspended in the air', for this cluster of massive rock towers rises from the verdant plain of Thessaly in an almost mysterious manner. The conglomerate towers feature nearly 900 single- and multi-pitch routes on towers, pinnacles and pillars — many bolted. The peculiar nature of the rock, the otherworldly surroundings, and the ending of each route on a summit truly make climbing at Meteora a singular experience. There are many fantastic towers of conglomerate rock up to 300m high. **Important**: Meteora is a UNESCO World Heritage Site and an active monastic community. Climbers must respect restricted zones and local regulations at all times. Climbing is allowed only in designated areas to preserve the sanctity of the monasteries.",
          el: "Τα Μετέωρα είναι ένα συναρπαστικό μέρος. Η λέξη σημαίνει 'αιωρούνται στον αέρα', καθώς αυτή η ομάδα τεράστιων βραχόπυργων υψώνεται από την πεδιάδα της Θεσσαλίας με σχεδόν μυστηριώδη τρόπο. Οι κροκαλοπαγείς πύργοι διαθέτουν σχεδόν 900 μονόσχοινες και πολύσχοινες διαδρομές. Η ιδιόμορφη φύση του πετρώματος, το εξωκοσμικό περιβάλλον και η κατάληξη κάθε διαδρομής σε μια κορυφή κάνουν την αναρρίχηση στα Μετέωρα μοναδική εμπειρία. **Σημαντικό**: Τα Μετέωρα είναι μνημείο UNESCO και ενεργή μοναστική κοινότητα. Οι αναρριχητές οφείλουν να σέβονται τις απαγορευμένες ζώνες και τους τοπικούς κανονισμούς."
        }
      },
      {
        title: {
          en: "Leonidio, Peloponnese — The Mainland Rising Star",
          el: "Λεωνίδιο, Πελοπόννησος — Το Ανερχόμενο Αστέρι"
        },
        content: {
          en: "Leonidio is firmly established as the best sport climbing area in mainland Greece. The crags that surround Leonidio are a mixture of red and grey limestone rock that is highly featured, offering over 3,000 routes across a wide range of grades, from F3 to F9a+. Leonidio is growing rapidly as a climbing destination because it is easy to reach. Many climbers fly into Athens and drive or take a bus to Leonidio, which is only about 3.5 to 4 hours away. Besides climbing, there is a lot more to see and do — visit the Elona Monastery, explore the traditional mountain village of Kosmas, or drive down to Monemvasia, a beautiful medieval castle town. Leonidio is also a great place to try authentic Greek food at local taverns and restaurants, even on a budget.",
          el: "Το Λεωνίδιο έχει καθιερωθεί ως η καλύτερη περιοχή αθλητικής αναρρίχησης στην ηπειρωτική Ελλάδα. Τα πεδία γύρω από το Λεωνίδιο είναι μείγμα κόκκινου και γκρίζου ασβεστόλιθου, με πάνω από 3.000 διαδρομές από F3 έως F9a+. Αναπτύσσεται ραγδαία επειδή είναι εύκολο να φτάσεις — μόλις 3,5-4 ώρες από την Αθήνα. Εκτός από αναρρίχηση, υπάρχουν πολλά να δεις: η Μονή Ελώνης, το παραδοσιακό χωριό Κόσμας, και η βυζαντινή Μονεμβασιά."
        }
      },
      {
        title: {
          en: "Crete — The Wild Card",
          el: "Κρήτη — Το Wild Card"
        },
        content: {
          en: "Crete, the largest island in Greece, offers a variety of climbing experiences — from single-pitch sports routes to long, traditional multi-pitch climbs. The best-known climbing area is Agiofarago Gorge, where routes range from beginner-friendly to advanced. The gorge leads to a beautiful secluded beach, perfect for cooling off after a day of climbing. There are also many other climbing spots scattered across the island, offering diverse rock types and settings. Karpathos, an island to the east of Crete with soaring mountain ranges and charming quiet beaches, is a growing sport climbing destination. If you like the climate and climbing on Kalymnos but dislike the crowds, Karpathos is an excellent choice.",
          el: "Η Κρήτη, το μεγαλύτερο νησί της Ελλάδας, προσφέρει ποικιλία αναρριχητικών εμπειριών — από μονόσχοινες αθλητικές διαδρομές έως μακριές παραδοσιακές πολύσχοινες. Το πιο γνωστό πεδίο είναι το Φαράγγι του Αγιοφάραγου, με διαδρομές από αρχάριους έως προχωρημένους. Το φαράγγι οδηγεί σε μια απομονωμένη παραλία. Η Κάρπαθος, ανατολικά της Κρήτης, είναι ένας αναπτυσσόμενος προορισμός — αν σου αρέσει το κλίμα της Καλύμνου αλλά όχι τα πλήθη, η Κάρπαθος είναι εξαιρετική επιλογή."
        }
      },
      {
        title: {
          en: "More Across the Country",
          el: "Περισσότερα Σε Όλη τη Χώρα"
        },
        content: {
          en: "Greece is full of amazing rock adventures waiting to be discovered, thanks to the delicate yet intriguing limestone topography. Other notable areas include: **Nafplio** — Coastal sport routes in the Peloponnese. **Kyparissi** — Remote single-pitch crags near the sea. **Pyli / Mouzaki** — Emerging areas in Thessaly. **Athens (Parnitha, Hymettus)** — Day-trip options near the capital. **Lagkada and Patras** in the Peloponnese compete with **Trikala and Magnesia** on the mainland. The combination of year-round mild weather, short approaches, legendary hospitality and cuisine makes Greece a complete vertical world that climbers from more than 40 countries return to season after season.",
          el: "Η Ελλάδα είναι γεμάτη εκπληκτικές αναρριχητικές περιπέτειες χάρη στη λεπτή αλλά συναρπαστική ασβεστολιθική τοπογραφία. Άλλες αξιόλογες περιοχές: **Ναύπλιο** — Παράκτιες αθλητικές διαδρομές. **Κυπαρίσσι** — Απομακρυσμένα πεδία δίπλα στη θάλασσα. **Πύλη / Μουζάκι** — Αναδυόμενες περιοχές στη Θεσσαλία. **Αθήνα (Πάρνηθα, Υμηττός)** — Επιλογές ημερήσιας εκδρομής. Ο συνδυασμός ήπιου καιρού όλο τον χρόνο, σύντομων προσεγγίσεων, θρυλικής φιλοξενίας και κουζίνας κάνει την Ελλάδα έναν πλήρη κάθετο κόσμο."
        }
      }
    ],
    tips: {
      en: [
        "Hire a guide if you are new to climbing or unfamiliar with the area — climbing schools operate in Kalymnos, Meteora, Leonidio and Athens.",
        "Bring a helmet — loose rock from goats, natural erosion and tufa breakage is a real hazard.",
        "Respect the environment — leave no trace, use designated paths, follow bolting ethics.",
        "Stay hydrated — the Greek sun is intense, especially on south-facing crags in summer.",
        "Buy local guidebooks — proceeds fund re-bolting and crag maintenance.",
        "Rent a scooter on Kalymnos rather than a car — the island roads are narrow and parking is limited.",
        "Book accommodation in Masouri or Myrties well in advance for the spring and autumn climbing seasons.",
        "Best season by destination: Kalymnos (April-June, Sept-Oct), Varasova (Oct-May), Meteora (March-May, Sept-Nov), Leonidio (Oct-May), Crete (year-round)."
      ],
      el: [
        "Πρόσλαβε οδηγό αν είσαι νέος στην αναρρίχηση ή άγνωστος στην περιοχή — σχολές λειτουργούν σε Κάλυμνο, Μετέωρα, Λεωνίδιο και Αθήνα.",
        "Φέρε κράνος — χαλαρά πετρώματα από κατσίκες, διάβρωση και σπασίματα tufa είναι πραγματικός κίνδυνος.",
        "Σέβασε το περιβάλλον — άφησε το τοπίο όπως το βρήκες, χρησιμοποίησε μονοπάτια.",
        "Μείνε ενυδατωμένος — ο ελληνικός ήλιος είναι έντονος, ειδικά σε νότια πεδία.",
        "Αγόρασε τοπικούς οδηγούς αναρρίχησης — τα έσοδα χρηματοδοτούν συντήρηση.",
        "Νοίκιασε μηχανάκι στην Κάλυμνο αντί για αυτοκίνητο.",
        "Κάνε κράτηση καταλύματος στο Μασούρι ή Μυρτιές νωρίς για τις ανοιξιάτικες και φθινοπωρινές σεζόν.",
        "Καλύτερη εποχή ανά προορισμό: Κάλυμνος (Απρ-Ιούν, Σεπτ-Οκτ), Βαρβάσοβα (Οκτ-Μάη), Μετέωρα (Μαρ-Μάη, Σεπτ-Νοε), Λεωνίδιο (Οκτ-Μάη), Κρήτη (όλο τον χρόνο)."
      ]
    },
    faq: [
      {
        q: { en: "When is the best time to go climbing in Greece?", el: "Πότε είναι η καλύτερη εποχή για αναρρίχηση στην Ελλάδα;" },
        a: { en: "It depends on the destination. Spring (April-June) and autumn (September-October) are ideal for most areas. Kalymnos is best April-June and September-October. Varasova and Leonidio are excellent October-May. Meteora works March-May and September-November. Crete offers year-round climbing thanks to varied microclimates.", el: "Εξαρτάται από τον προορισμό. Η άνοιξη (Απρ-Ιούν) και το φθινόπωρο (Σεπτ-Οκτ) είναι ιδανικά για τις περισσότερες περιοχές. Η Κάλυμνος είναι καλύτερη Απρ-Ιούν και Σεπτ-Οκτ. Η Βαρβάσοβα και το Λεωνίδιο είναι εξαιρετικά Οκτ-Μάη. Τα Μετέωρα λειτουργούν Μαρ-Μάη και Σεπτ-Νοε. Η Κρήτη προσφέρει αναρρίχηση όλο τον χρόνο." }
      },
      {
        q: { en: "Do I need to be an experienced climber to climb in Greece?", el: "Χρειάζεται να είμαι έμπειρος αναρριχητής για να σκαρφαλώσω στην Ελλάδα;" },
        a: { en: "Not at all. Every major climbing destination offers routes for beginners (F3a-F4c) alongside extreme grades. Kalymnos has beginner-friendly sectors, Leonidio has easy warm-up crags, and most areas have guide services and climbing schools that cater to first-time climbers.", el: "Καθόλου. Κάθε σημαντικός προορισμός έχει διαδρομές για αρχάριους (F3a-F4c) δίπλα σε ακραίες βαθμολογίες. Η Κάλυμνος έχει φιλικούς τομείς, το Λεωνίδιο έχει εύκολα πεδία προθέρμανσης, και οι περισσότερες περιοχές έχουν σχολές αναρρίχησης." }
      },
      {
        q: { en: "How do I get to Kalymnos for a climbing trip?", el: "Πώς πάω στην Κάλυμνο για αναρρίχηση;" },
        a: { en: "Fly to Kos and take the 30-minute ferry from Kos Town to Pothia (Kalymnos). Direct flights to Kos are available from most European cities during summer. Alternatively, overnight ferries from Piraeus connect directly to Kalymnos. Once on the island, rent a scooter from Pothia or Masouri to reach the crags.", el: "Πέταξε στην Κω και πάρε το 30λεπτο πλοίο από την πόλη της Κω για Πόθια (Κάλυμνο). Υπάρχουν επίσης νυχτερινά πλοία από Πειραιά. Μόλις στο νησί, νοίκιασε μηχανάκι από την Πόθια ή το Μασούρι." }
      },
      {
        q: { en: "Is Greece safe for solo climbers?", el: "Είναι η Ελλάδα ασφαλής για μοναχικούς αναρριχητές;" },
        a: { en: "Yes. Kalymnos in particular is known for its welcoming, social atmosphere — solo climbers regularly find partners at the crag or in the village cafés. The Kalymnos Climbing Festival is an especially good time to connect with other climbers. Guide services and climbing schools also offer guided group days for solo travellers.", el: "Ναι. Η Κάλυμνος είναι γνωστή για την κοινωνική της ατμόσφαιρα — μοναχικοί αναρριχητές βρίσκουν τακτικά παρέα στο πεδίο ή στα καφέ. Το Φεστιβάλ Αναρρίχησης είναι ιδανική στιγμή για γνωριμίες." }
      },
      {
        q: { en: "What gear do I need to bring?", el: "Τι εξοπλισμό χρειάζεται να φέρω;" },
        a: { en: "Bring your personal climbing gear (shoes, harness, belay device, helmet). Quickdraws are available for rent at gear shops in Kalymnos and Leonidio if you prefer to travel light. Ropes can be purchased or rented locally. The Kalymnos guidebook is essential for navigating the crags and can be bought at Adventure shop in Masouri or online.", el: "Φέρε τον προσωπικό σου εξοπλισμό (παπούτσια, ζώνη, ασφαλιστικό, κράνος). Τα quickdraws διατίθενται προς ενοικίαση στα καταστήματα εξοπλισμού. Ο οδηγός της Καλύμνου είναι απαραίτητος και πωλείται στο κατάστημα Adventure στο Μασούρι." }
      }
    ]
  },
  {
    slug: "best-boat-trips-in-skiathos",
    title: {
      en: "Best Boat Trips in Skiathos 2026 — Lalaria, Skopelos, Tsougrias & Hidden Beaches",
      el: "Οι Καλύτερες Εκδρομές με Σκάφος στη Σκιάθο 2026 — Λαλάρια, Σκόπελος, Τσουγκριά & Κρυμμένες Παραλίες"
    },
    description: {
      en: "The best boat trips in Skiathos: Lalaria Beach accessible only by sea, day cruises to Skopelos and Alonnisos, water taxis to Tsougrias, private boat hire around the island, and practical tips for choosing the right excursion.",
      el: "Οι καλύτερες εκδρομές με σκάφος στη Σκιάθο: Λαλάρια που είναι προσβάσιμη μόνο από τη θάλασσα, ημερήσιες κρουαζιέρες σε Σκόπελο και Αλόννησο, θαλάσσια ταξί στην Τσουγκριά, ενοικίαση σκάφους γύρω από το νησί και πρακτικές συμβουλές."
    },
    image: "/images/skiathos.webp",
    overview: {
      en: "Skiathos has more than 60 beaches along its pine-covered coastline — and some of the very best are impossible to reach by road. Lalaria Beach, the island's most photographed landmark with its white pebbles and iconic sea arch, is only accessible by boat. The same applies to the secluded coves of the northern coast, the pristine island of Tsougrias, and the Marine Park waters around the neighbouring Sporades.\n\nA boat trip in Skiathos is not optional — it is how you unlock the island's finest coastline. This guide covers every option from round-the-island cruises and day trips to Skopelos, to water taxi transfers and self-drive boat hire, with honest advice for different budgets and travel styles.\n\nFor context on the island itself, read our full [Skiathos destination guide](/destinations/skiathos).",
      el: "Η Σκιάθος έχει περισσότερες από 60 παραλίες κατά μήκος της πευκόφυτης ακτογραμμής της — και μερικές από τις καλύτερες είναι αδύνατο να προσεγγιστούν οδικώς. Η Λαλάρια, το πιο φωτογραφημένο σημείο του νησιού με τα λευκά βότσαλα και την εμβληματική θαλάσσια αψίδα, είναι προσβάσιμη μόνο με σκάφος. Το ίδιο ισχύει για τους απομονωμένους όρμους της βόρειας ακτής, το παρθένο νησί της Τσουγκριάς και τα νερά του Θαλάσσιου Πάρκου γύρω από τις γειτονικές Σποράδες.\n\nΜια εκδρομή με σκάφος στη Σκιάθο δεν είναι προαιρετική — είναι ο τρόπος να ανακαλύψετε την καλύτερη ακτογραμμή του νησιού. Αυτός ο οδηγός καλύπτει κάθε επιλογή από κρουαζιέρες γύρω από το νησί και ημερήσιες εκδρομές στη Σκόπελο, μέχρι θαλάσσια ταξί και ενοικίαση σκάφους.\n\nΓια το πλαίσιο του ίδιου του νησιού, διαβάστε τον πλήρη [οδηγό Σκιάθου](/destinations/skiathos)."
    },
    points: {
      en: [
        "Round-the-Island Cruise — Lalaria, Kastro and the northern coves in one day",
        "Day Trip to Skopelos — Mamma Mia! beaches, Glossa harbour and the island's iconic churches",
        "Tsougrias Island — white sand and turquoise water, 15 minutes by water taxi",
        "Self-Drive Boat Hire — explore at your own pace with no license required",
        "Sunset Cruise along the South Coast — Koukounaries from the sea at golden hour",
        "Skiathos Town Water Taxis — the most convenient way to reach remote beaches"
      ],
      el: [
        "Κρουαζιέρα γύρω από το νησί — Λαλάρια, Κάστρο και βόρειοι όρμοι σε μία μέρα",
        "Ημερήσια εκδρομή στη Σκόπελο — παραλίες Mamma Mia!, λιμάνι Γλώσσας και εμβληματικές εκκλησίες",
        "Νησί Τσουγκριά — λευκή άμμος και τιρκουάζ νερά, 15 λεπτά με θαλάσσιο ταξί",
        "Ενοικίαση σκάφους — εξερευνήστε με τον δικό σας ρυθμό χωρίς δίπλωμα",
        "Κρουαζιέρα ηλιοβασιλέματος στη νότια ακτή — η Κουκουναριές από τη θάλασσα",
        "Θαλάσσια ταξί από τη Σκιάθο — ο πιο βολικός τρόπος για απομακρυσμένες παραλίες"
      ]
    },
    sections: [
      {
        title: { en: "Boat Trips at a Glance", el: "Οι Εκδρομές με Σκάφος Με Μια Ματιά" },
        content: {
          en: "Here is a quick overview of every boat trip option covered in this guide:\n\n| Trip | Duration | Price (per person) | Best For |\n|------|----------|-------------------|----------|\n| **Round-the-Island Cruise** | Full day (9:30–17:00) | €40–60 | First-timers, families, photographers |\n| **Day Trip to Skopelos** | Full day (9:00–17:00) | €50–70 | Mamma Mia! fans, island hoppers |\n| **Tsougrias Island** | 15 min by water taxi | €10–15 round trip | Snorkellers, couples, families |\n| **Self-Drive Boat Hire** | Half or full day | €60–150 per boat | Independent travellers, small groups |\n| **Sunset Cruise** | 2–3 hours (evening) | €35–55 | Couples, honeymooners |\n| **South Coast Water Taxi** | Per journey (30–45 min) | €3–6 | Budget travellers, beach hoppers |",
          el: "Μια γρήγορη επισκόπηση όλων των επιλογών που καλύπτει αυτός ο οδηγός:\n\n| Εκδρομή | Διάρκεια | Τιμή (ανά άτομο) | Κατάλληλο για |\n|---------|----------|------------------|---------------|\n| **Κρουαζιέρα γύρω από το νησί** | Ολοήμερη (9:30–17:00) | €40–60 | Πρώτη επίσκεψη, οικογένειες, φωτογράφοι |\n| **Ημερήσια εκδρομή στη Σκόπελο** | Ολοήμερη (9:00–17:00) | €50–70 | Θαυμαστές Mamma Mia!, εξερευνητές |\n| **Τσουγκριά** | 15 λεπτά με θαλάσσιο ταξί | €10–15 μετ' επιστροφής | Κολύμβηση, ζευγάρια, οικογένειες |\n| **Ενοικίαση σκάφους** | Μισή ή ολόκληρη μέρα | €60–150 ανά σκάφος | Ανεξάρτητους ταξιδιώτες, παρέες |\n| **Κρουαζιέρα ηλιοβασιλέματος** | 2–3 ώρες (απόγευμα) | €35–55 | Ζευγάρια, ρομάντζο |\n| **Θαλάσσιο ταξί νότιας ακτής** | Ανά διαδρομή (30–45 λεπ) | €3–6 | Οικονομικούς ταξιδιώτες |"
        }
      },
      {
        title: { en: "Round-the-Island Cruise — Lalaria, Kastro & the Northern Coves", el: "Κρουαζιέρα γύρω από το νησί — Λαλάρια, Κάστρο & Βόρειοι Όρμοι" },
        content: {
          en: "The classic Skiathos boat trip: a full-day cruise that circles the entire island, stopping at Lalaria Beach, the old capital of Kastro (perched dramatically on a sea cliff), and several northern coves that have no road access.\n\nLalaria is the undisputed star — a beach of smooth white pebbles with the famous sea arch that frames the Aegean blue perfectly. The boat stops here for swimming and photos. Further along, the northern coast reveals a series of small pebble coves with pine trees growing right down to the waterline.\n\nKastro was Skiathos's capital from the 14th century until 1830, built on a headland accessible only by a single narrow stairway. Seen from the sea, its ruins are both dramatic and poignant.\n\n**Practical tips:**\n\n- Full-day cruises depart from Skiathos Town old harbour around 9:30–10:00\n- Lunch is usually included — typically a simple BBQ on board or at a beach taverna\n- The northern coast can be rough in afternoon winds — morning stops are more comfortable\n- Bring snorkel gear — several stops offer excellent water clarity\n- Book at least a day in advance in July–August\n\n**Best for:** First-time visitors, families, photographers who want the iconic Lalaria shot",
          el: "Η κλασική εκδρομή με σκάφος στη Σκιάθο: μια ολοήμερη κρουαζιέρα που κάνει τον γύρο ολόκληρου του νησιού, με στάσεις στη Λαλάρια, το παλιό Κάστρο και αρκετούς βόρειους όρμους χωρίς οδική πρόσβαση.\n\nΗ Λαλάρια είναι το αδιαμφισβήτητο αστέρι — μια παραλία με λεία λευκά βότσαλα και την περίφημη θαλάσσια αψίδα. Στα βόρεια, η ακτή αποκαλύπτει μια σειρά από μικρούς ορμίσκους με πεύκα που φτάνουν ως το νερό.\n\n**Πρακτικές συμβουλές:**\n\n- Αναχώρηση από το παλιό λιμάνι της Σκιάθου γύρω στις 9:30–10:00\n- Το μεσημεριανό συνήθως περιλαμβάνεται — BBQ στο σκάφος ή σε παραλιακή ταβέρνα\n- Η βόρεια ακτή μπορεί να έχει κύμα το απόγευμα — οι πρωινές στάσεις είναι πιο άνετες\n- Φέρτε μάσκα για κολύμπι — εξαιρετική ορατότητα σε αρκετές στάσεις\n- Κλείστε τουλάχιστον μία μέρα νωρίτερα τον Ιούλιο–Αύγουστο\n\n**Κατάλληλο για:** Πρωτοεμφανιζόμενους επισκέπτες, οικογένειες, φωτογράφους"
        }
      },
      {
        title: { en: "Day Trip to Skopelos — Mamma Mia! & Island Hopping", el: "Ημερήσια εκδρομή στη Σκόπελο — Mamma Mia! & Island Hopping" },
        content: {
          en: "Skopelos — the neighbouring Sporades island — is a popular day-trip destination from Skiathos. The ferry takes about 1 hour and several tour operators run full-day excursions combining boat time with shore exploration.\n\nSkopelos is greener and quieter than Skiathos, with a beautifully preserved old town, numerous Byzantine churches, and the beaches that served as filming locations for Mamma Mia! — most famously Kastani Beach and the Agios Ioannis Chapel perched on its rocky islet.\n\nMost day trips include a swim stop at Kastani, time to explore Skopelos Town (Chora), and lunch at a traditional taverna. Some extended tours also cross to Alonnisos, the third Sporades island, known for its Marine Park and the Old Village (Chorio) abandoned after the 1965 earthquake.\n\n**Practical tips:**\n\n- Standard day trips run 9:00–17:00; check the schedule as it varies by season\n- The Aegean Dream and similar operators offer the most reliable Skopelos excursions\n- Wear comfortable shoes for the steep climb through Skopelos Chora's cobbled lanes\n- The Agios Ioannis chapel climb is exposed and can be hot — go early or late\n- Bring a light jacket for the return crossing — the Meltemi wind can pick up in the afternoon\n\n**Best for:** Mamma Mia! fans, island hoppers, anyone wanting a change of scenery from Skiathos",
          el: "Η Σκόπελος — η γειτονική Σποράδα — είναι ένας δημοφιλής προορισμός ημερήσιας εκδρομής από τη Σκιάθο. Το πλοίο κάνει περίπου 1 ώρα και αρκετοί τουριστικοί πράκτορες οργανώνουν ολοήμερες εκδρομές.\n\nΗ Σκόπελος είναι πιο πράσινη και πιο ήσυχη από τη Σκιάθο, με όμορφα διατηρημένη παλιά πόλη, πολλές βυζαντινές εκκλησίες και τις παραλίες που χρησίμευσαν ως τοποθεσίες γυρίσματος για το Mamma Mia! — κυρίως το Καστάνι και το εκκλησάκι του Αγίου Ιωάννη στον βράχο.\n\n**Πρακτικές συμβουλές:**\n\n- Οι εκδρομές συνήθως διαρκούν 9:00–17:00\n- Φορέστε άνετα παπούτσια για τα πλακόστρωτα σοκάκια της Χώρας\n- Η ανάβαση στο εκκλησάκι του Αγίου Ιωάννη είναι εκτεθειμένη στον ήλιο\n- Φέρτε ελαφρύ μπουφάν για την επιστροφή — ο Meltemi μπορεί να σηκωθεί το απόγευμα\n\n**Κατάλληλο για:** Θαυμαστές του Mamma Mia!, island hoppers"
        }
      },
      {
        title: { en: "Tsougrias Island — a 15-Minute Paradise Escape", el: "Τσουγκριά — 15 λεπτά από τη Σκιάθο" },
        content: {
          en: "Tsougrias is a small, uninhabited island visible from Skiathos Town's harbour. Its main beach is a strip of soft white sand with water so clear it looks like a swimming pool. A water taxi from the old harbour gets you there in 15 minutes.\n\nDespite being so close, Tsougrias feels remote. There is a single canteen serving drinks and snacks in summer, and basic sunbed hire, but otherwise the island is undeveloped. The surrounding sea is excellent for snorkelling, with rocky outcrops on the eastern side attracting more fish.\n\n**Practical tips:**\n\n- Water taxis run frequently from Skiathos Town old harbour (€10–15 round trip)\n- The first morning boat arrives around 9:00 — go early to claim a good spot\n- Bring food and plenty of water — the canteen is basic and can run out of supplies\n- Tsougrias has no shade — a beach umbrella is essential\n- The island gets busy from 11:00–15:00; the late afternoon return is more peaceful\n- Some operators also offer a combined trip to Tsougria and the neighbouring islet of Arkos\n\n**Best for:** Snorkellers, couples, families with older children, anyone wanting a quick island escape",
          el: "Η Τσουγκριά είναι ένα μικρό, ακατοίκητο νησί ορατό από το λιμάνι της Σκιάθου. Η κύρια παραλία της είναι μια λωρίδα μαλακής λευκής άμμου με πεντακάθαρα νερά. Ένα θαλάσσιο ταξί από το παλιό λιμάνι σας πάει εκεί σε 15 λεπτά.\n\nΠαρά την κοντινή απόσταση, η Τσουγκριά αισθάνεται απομακρυσμένη. Υπάρχει μόνο ένα κυλικείο το καλοκαίρι και βασικές ξαπλώστρες, αλλά κατά τα άλλα το νησί είναι ανέγγιχτο.\n\n**Πρακτικές συμβουλές:**\n\n- Θαλάσσια ταξί από το παλιό λιμάνι (€10–15 μετ' επιστροφής)\n- Το πρώτο πρωινό σκάφος φτάνει γύρω στις 9:00 — πηγαίνετε νωρίς\n- Φέρτε φαγητό και άφθονο νερό\n- Η Τσουγκριά δεν έχει σκιά — η ομπρέλα είναι απαραίτητη\n- Το νησί έχει περισσότερο κόσμο 11:00–15:00\n\n**Κατάλληλο για:** Λάτρεις της κολύμβησης, ζευγάρια, οικογένειες"
        }
      },
      {
        title: { en: "Self-Drive Boat Hire — Explore at Your Own Pace", el: "Ενοικίαση σκάφους — εξερευνήστε με τον ρυθμό σας" },
        content: {
          en: "Several rental operators at Skiathos Town old harbour offer small motorboats (15–30hp) that require no license. This is the most flexible way to explore the island's coastline — you set your own itinerary, choose your own swim stops, and avoid the crowds of the organised cruises.\n\nTypical routes include the south coast from Skiathos Town to Koukounaries, stopping at smaller beaches like Agia Paraskevi, Vromolimnos, and Mandraki along the way. More adventurous renters head north along the east coast past Lalaria (accessible for independent boats) to the secluded coves beyond.\n\n**Practical tips:**\n\n- Half-day hire starts around €60–100, full-day €90–150 depending on boat size\n- Fuel is usually charged separately — expect €20–40 for a full day of exploring\n- No license is needed for boats under 30hp, but you do need to be over 18\n- Staff provide a quick orientation and a map with recommended routes\n- The area between Skiathos and Tsougrias gets busy with water traffic — stay alert\n- Avoid crossing to Skopelos with a small rental boat — the open sea crossing is longer than it looks\n- Book one day ahead in peak season\n\n**Best for:** Independent travellers, couples, small groups who want flexibility",
          el: "Αρκετά γραφεία ενοικίασης στο παλιό λιμάνι της Σκιάθου προσφέρουν μικρά μηχανοκίνητα σκάφη (15–30hp) χωρίς δίπλωμα. Είναι ο πιο ευέλικτος τρόπος να εξερευνήσετε την ακτογραμμή.\n\nΣυνήθεις διαδρομές περιλαμβάνουν τη νότια ακτή από τη Σκιάθο έως την Κουκουναριές, με στάσεις σε μικρότερες παραλίες όπως η Αγία Παρασκευή, το Βρωμόλιμνο και το Μαντράκι.\n\n**Πρακτικές συμβουλές:**\n\n- Ενοικίαση μισής μέρας από €60–100, ολόκληρης από €90–150\n- Τα καύσιμα χρεώνονται ξεχωριστά (€20–40 για ολόκληρη μέρα)\n- Δεν χρειάζεται δίπλωμα για σκάφη κάτω των 30hp\n- Αποφύγετε να πάτε στη Σκόπελο με μικρό σκάφος — η απόσταση είναι μεγαλύτερη απ' ό,τι φαίνεται\n\n**Κατάλληλο για:** Ανεξάρτητους ταξιδιώτες, ζευγάρια, μικρές παρέες"
        }
      },
      {
        title: { en: "Sunset Cruise & Evening Options", el: "Κρουαζιέρα ηλιοβασιλέματος & βραδινές επιλογές" },
        content: {
          en: "The south coast of Skiathos faces west, making it ideal for sunset cruises. The most popular route follows the shoreline from Skiathos Town past Agia Paraskevi and Vromolimnos towards Koukounaries, with the pine-covered hills of the island silhouetted against the setting sun.\n\nMost sunset cruises are small-group experiences (8–12 people) lasting 2–3 hours, including drinks and light snacks. Some operators offer dinner versions with a stop at a beach taverna.\n\n**Practical tips:**\n\n- Sunset cruises typically depart 1 hour before sunset (around 18:00–19:30 depending on season)\n- Even in summer, the wind drops at sunset — the sea becomes glassy and calm\n- Bring a layer — it cools noticeably once the sun is down\n- These are the most romantic option on the island — book ahead for special occasions\n\n**Best for:** Couples, honeymooners, romantic evenings",
          el: "Η νότια ακτή της Σκιάθου βλέπει δυτικά, καθιστώντας την ιδανική για κρουαζιέρες ηλιοβασιλέματος. Η πιο δημοφιλής διαδρομή ακολουθεί την ακτογραμμή από τη Σκιάθο προς την Κουκουναριές.\n\nΟι περισσότερες κρουαζιέρες ηλιοβασιλέματος είναι για μικρές ομάδες (8–12 άτομα) και διαρκούν 2–3 ώρες.\n\n**Πρακτικές συμβουλές:**\n\n- Αναχώρηση 1 ώρα πριν τη δύση (18:00–19:30 ανάλογα την εποχή)\n- Το καλοκαίρι, ο άνεμος πέφτει στο ηλιοβασίλεμα — η θάλασσα γίνεται γαλήνια\n- Φέρτε ένα στρώμα — κρυώνει μετά τη δύση\n- Κλείστε εκ των προτέρων για ειδικές περιστάσεις\n\n**Κατάλληλο για:** Ζευγάρια, νεόνυμφους, ρομαντικές βραδιές"
        }
      },
      {
        title: { en: "Skiathos Town Water Taxis — Beach Hopping Made Easy", el: "Θαλάσσια ταξί Σκιάθου — εύκολη μετακίνηση" },
        content: {
          en: "Skiathos operates a fleet of water taxis that function like a bus service along the south coast. This is the most convenient way to visit multiple beaches in a single day without renting a car or a boat. Official stops include Skiathos Town, Agia Paraskevi, Vromolimnos, Troulos, and Koukounaries.\n\nWater taxis are larger than private hire boats and run on a fixed schedule (every 30–45 minutes in peak season). They are a legitimate public transport option, not a tour.\n\n**Practical tips:**\n\n- Tickets are sold at the kiosk on Skiathos Town old harbour\n- A single journey costs €3–6 depending on distance; a day pass offers better value\n- The last return boat from Koukounaries is around 19:00–20:00 depending on season\n- Water taxis can get crowded — arrive at the stop 10 minutes early\n- Combine a one-way water taxi with a walk back along the coastal path for variety\n\n**Best for:** Budget travellers, families, anyone wanting flexibility without renting a vehicle",
          el: "Η Σκιάθος διαθέτει έναν στόλο θαλάσσιων ταξί που λειτουργούν σαν λεωφορειακή γραμμή κατά μήκος της νότιας ακτής. Είναι ο πιο βολικός τρόπος για να επισκεφθείτε πολλές παραλίες σε μία μέρα χωρίς να νοικιάσετε αυτοκίνητο ή σκάφος.\n\n**Πρακτικές συμβουλές:**\n\n- Τα εισιτήρια πωλούνται στο περίπτερο στο παλιό λιμάνι\n- Κάθε διαδρομή κοστίζει €3–6 ανάλογα την απόσταση\n- Το τελευταίο σκάφος επιστροφής από Κουκουναριές είναι γύρω στις 19:00–20:00\n- Συνδυάστε μια διαδρομή με θαλάσσιο ταξί και επιστροφή με τα πόδια από το παραλιακό μονοπάτι\n\n**Κατάλληλο για:** Ταξιδιώτες με προϋπολογισμό, οικογένειες"
        }
      },
      {
        title: { en: "What to Skip", el: "Τι να αποφύγετε" },
        content: {
          en: "Large capacity party boats (50+ passengers): These operate from Skiathos Town and focus on music, drinks and crowds rather than the coastline itself. The northern coves feel very different with 60 people swimming at once.\n\nOverpriced private charters from harbour touts: A standard water taxi or self-drive hire gives you more freedom at a fraction of the price.\n\nAttempting to drive a small rental boat to Skopelos: The open-sea crossing between the islands is longer and more exposed than it appears. Stick to organised day trips for inter-island travel.",
          el: "Μεγάλα σκάφη πάρτι (50+ άτομα): Επικεντρώνονται στη μουσική και τα ποτά παρά στην ακτογραμμή. Οι βόρειοι όρμοι είναι διαφορετικοί με 60 άτομα να κολυμπούν ταυτόχρονα.\n\nΥπερτιμημένα ιδιωτικά σκάφη: Ένα απλό θαλάσσιο ταξί ή ενοικίαση σκάφους σας δίνει μεγαλύτερη ελευθερία.\n\nΑπόπειρα οδήγησης μικρού σκάφους προς Σκόπελο: Η απόσταση είναι μεγαλύτερη και πιο εκτεθειμένη απ' ό,τι φαίνεται."
        }
      }
    ],
    faq: [
      {
        q: { en: "Is Lalaria Beach accessible by road?", el: "Είναι η Λαλάρια προσβάσιμη οδικώς;" },
        a: { en: "No. Lalaria is only accessible by boat. There is no road connecting it to the rest of the island. All boat trips around Skiathos include a swim stop here.", el: "Όχι. Η Λαλάρια είναι προσβάσιμη μόνο με σκάφος. Δεν υπάρχει δρόμος που να τη συνδέει με την υπόλοιπη Σκιάθο." }
      },
      {
        q: { en: "Do I need a license to rent a boat in Skiathos?", el: "Χρειάζομαι δίπλωμα για ενοικίαση σκάφους στη Σκιάθο;" },
        a: { en: "No. Small motorboats under 30hp can be rented without a license. You must be over 18 and the rental company will provide a quick orientation before departure.", el: "Όχι. Μικρά μηχανοκίνητα σκάφη κάτω των 30hp ενοικιάζονται χωρίς δίπλωμα. Πρέπει να είστε άνω των 18." }
      },
      {
        q: { en: "How much does a boat trip in Skiathos cost?", el: "Πόσο κοστίζει μια εκδρομή με σκάφος στη Σκιάθο;" },
        a: { en: "Round-the-island cruises: €40–60 per person. Water taxis: €3–6 per journey. Self-drive boat hire: €60–150 depending on duration. Day trips to Skopelos: €50–70 per person including lunch.", el: "Κρουαζιέρες γύρω από το νησί: €40–60/άτομο. Θαλάσσια ταξί: €3–6/διαδρομή. Ενοικίαση σκάφους: €60–150. Εκδρομές στη Σκόπελο: €50–70/άτομο με γεύμα." }
      },
      {
        q: { en: "Which is better — organised cruise or self-drive boat?", el: "Τι είναι καλύτερο — οργανωμένη κρουαζιέρα ή ενοικίαση σκάφους;" },
        a: { en: "Organised cruises are better for first-time visitors who want Lalaria and Kastro without navigation concerns. Self-drive hire suits independent travellers who want flexibility and their own itinerary. Water taxis are the most budget-friendly option for beach hopping.", el: "Οι οργανωμένες κρουαζιέρες είναι καλύτερες για όσους θέλουν Λαλάρια και Κάστρο χωρίς άγχος. Η ενοικίαση σκάφους ταιριάζει σε ανεξάρτητους ταξιδιώτες. Τα θαλάσσια ταξί είναι η πιο οικονομική επιλογή." }
      }
    ]
  },
  {
    slug: "best-boat-trips-in-crete",
    title: {
      en: "Best Boat Trips in Crete 2026 — Gramvousa, Spinalonga, Santorini & Hidden Coves",
      el: "Οι Καλύτερες Εκδρομές με Σκάφος στην Κρήτη 2026 — Γραμβούσα, Σπιναλόγκα, Σαντορίνη & Κρυμμένοι Όρμοι"
    },
    description: {
      en: "The best boat trips in Crete: Balos & Gramvousa lagoon cruises, Spinalonga island tours, Santorini day trips from Heraklion, Chrissi Island, Preveli Beach, private boat hire and practical tips.",
      el: "Οι καλύτερες εκδρομές με σκάφος στην Κρήτη: κρουαζιέρες στο Μπάλο & Γραμβούσα, ξεναγήσεις στη Σπιναλόγκα, ημερήσιες εκδρομές στη Σαντορίνη, Χρυσή, Πρέβελη, ενοικίαση σκάφους και πρακτικές συμβουλές."
    },
    image: "/images/crete-boat-trips-cover.webp",
    overview: {
      en: "Crete has the longest and most varied coastline of any Greek island — over 1,000 kilometres from the lagoon shallows of Balos in the west to the palm-lined south coast and the bustling north coast ports in between. A significant portion of its best swimming, most dramatic sea cliffs and most historically significant islands can only be reached by boat.\n\nNo rental car will get you to the wreck of the Dimitrios P. No bus crosses to the leper colony of Spinalonga. And the sight of the Balos lagoon from the water — with its shifting turquoise colours merging into the Mediterranean — is something no road viewpoint can replicate.\n\nA boat trip in Crete is not optional. It is how you access the island's best coastline, its offshore historical sites and — for the most ambitious day trip — even a neighbouring volcanic island. This guide covers every major option, from the famous Gramvousa cruise and day trips to Santorini to self-drive hire in Chania or Agios Nikolaos, with honest advice on what to choose.\n\nFor context on the island itself, read our full [Crete destination guide](/destinations/crete).",
      el: "Η Κρήτη έχει τη μεγαλύτερη και πιο ποικιλόμορφη ακτογραμμή από οποιοδήποτε ελληνικό νησί — πάνω από 1.000 χιλιόμετρα από τα ρηχά της λιμνοθάλασσας του Μπάλου στη δυτική άκρη μέχρι τη φοινικόφυτη νότια ακτή. Ένα σημαντικό μέρος από τις καλύτερες παραλίες, τους πιο εντυπωσιακούς θαλάσσιους γκρεμούς και τα πιο ιστορικά νησιά της είναι προσβάσιμο μόνο με σκάφος.\n\nΚανένα ενοικιαζόμενο αυτοκίνητο δεν θα σας πάει στο ναυάγιο του Δημητρίου Π. Κανένα λεωφορείο δεν πηγαίνει στη λωβιακή αποικία της Σπιναλόγκας. Και η εικόνα της λιμνοθάλασσας του Μπάλου από το νερό — με τα μεταβαλλόμενα τιρκουάζ χρώματα — δεν μπορεί να αναπαραχθεί από καμία οδική σκοπιά.\n\nΜια εκδρομή με σκάφος στην Κρήτη δεν είναι προαιρετική. Είναι ο τρόπος να προσεγγίσετε την καλύτερη ακτογραμμή του νησιού, τους ιστορικούς παράκτιους χώρους και — για την πιο φιλόδοξη ημερήσια εκδρομή — ακόμα και ένα γειτονικό ηφαιστειακό νησί. Αυτός ο οδηγός καλύπτει κάθε σημαντική επιλογή, από την περίφημη κρουαζιέρα στη Γραμβούσα και τις ημερήσιες εκδρομές στη Σαντορίνη μέχρι την ενοικίαση σκάφους στα Χανιά ή τον Άγιο Νικόλαο.\n\nΓια το πλαίσιο του ίδιου του νησιού, διαβάστε τον πλήρη [οδηγό Κρήτης](/destinations/crete)."
    },
    points: {
      en: [
        "Balos & Gramvousa Lagoon Cruise — the most famous boat trip in Crete, from Kissamos",
        "Spinalonga Island Tour — the historic leper colony accessible only by sea",
        "Santorini Day Trip from Heraklion — high-speed catamaran to the caldera",
        "Chrissi Island — golden-white sand beach with cedar forest, from Ierapetra",
        "Preveli Beach & Palm Forest — boat from Plakias along the dramatic south coast",
        "Private Boat Hire in Chania or Agios Nikolaos — no license required, total freedom"
      ],
      el: [
        "Κρουαζιέρα Μπάλου & Γραμβούσας — η πιο διάσημη εκδρομή με σκάφος στην Κρήτη, από τον Κίσσαμο",
        "Ξενάγηση στη Σπιναλόγκα — η ιστορική λωβιακή αποικία, προσβάσιμη μόνο από τη θάλασσα",
        "Ημερήσια εκδρομή στη Σαντορίνη από το Ηράκλειο — ταχύπλοο catamaran στην καλντέρα",
        "Χρυσή — παραλία με χρυσή άμμο και δάσος κέδρων, από την Ιεράπετρα",
        "Πρέβελη & Φοινικόδασος — σκάφος από τον Πλακιά στη νότια ακτή",
        "Ενοικίαση σκάφους στα Χανιά ή στον Άγιο Νικόλαο — χωρίς δίπλωμα, απόλυτη ελευθερία"
      ]
    },
    sections: [
      {
        title: { en: "Balos & Gramvousa — the iconic lagoon cruise", el: "Μπάλος & Γραμβούσα — η εμβληματική κρουαζιέρα" },
        content: {
          en: "The single most famous boat trip in Crete — and for good reason. A day cruise from Kissamos harbour (1 hour west of Chania) takes you to Gramvousa Island with its Venetian castle and shipwreck beach, followed by the shallow turquoise lagoon of Balos.\n\nBalos is the image that sells Crete to the world: a vast, shallow lagoon where white sand meets water in every shade of blue and green, with the Gramvousa peninsula rising behind it. The lagoon is shallow enough to wade in for hundreds of metres.\n\nGramvousa — the larger of the two stops — has a wrecked cargo ship (the Dimitrios P) beached on its shore, and a steep 20-minute hike up to the Venetian castle ruins with a panoramic view across to the Peloponnese on a clear day.\n\n**Practical tips:**\n\n- Cruises depart from Kissamos harbour at 9:30–10:00 daily (June–September)\n- The journey takes about 1 hour to Gramvousa, then 20 minutes to Balos\n- Arrive at Kissamos by 8:30–9:00 to find parking and collect your tickets\n- The road to Kissamos from Chania is a straightforward 1-hour drive along the E65\n- Balos has no facilities — bring food, water, and reef-safe sun cream\n- The lagoon is very shallow; it is also exposed to direct sun with no shade\n- Go early in the season (June or September) to avoid peak crowds of several hundred people\n- Mid-July to August is very busy — the lagoon can feel crowded by midday\n\n**Best for:** First-time visitors, photographers, families, anyone who wants the classic Crete experience\n\n👉 [Explore boat tours and options for Balos & Gramvousa](/tours/crete-tours)",
          el: "Η πιο διάσημη εκδρομή με σκάφος στην Κρήτη — και για καλό λόγο. Μια ημερήσια κρουαζιέρα από το λιμάνι του Κισσάμου (1 ώρα δυτικά των Χανίων) σας πάει στη Γραμβούσα με το ενετικό κάστρο και την παραλία με το ναυάγιο, και στη συνέχεια στη ρηχή τιρκουάζ λιμνοθάλασσα του Μπάλου.\n\nΟ Μπάλος είναι η εικόνα που πουλάει την Κρήτη στον κόσμο: μια απέραντη ρηχή λιμνοθάλασσα όπου η λευκή άμμος συναντά το νερό σε κάθε απόχρωση του μπλε και του πράσινου. Η λιμνοθάλασσα είναι αρκετά ρηχή για να περπατήσετε μέσα της για εκατοντάδες μέτρα.\n\n**Πρακτικές συμβουλές:**\n\n- Αναχώρηση από το λιμάνι του Κισσάμου 9:30–10:00 καθημερινά (Ιούνιο–Σεπτέμβριο)\n- Φτάστε στον Κίσσαμο 8:30–9:00 για να παρκάρετε και να παραλάβετε εισιτήρια\n- Ο Μπάλος δεν έχει υποδομές — φέρτε φαγητό, νερό και αντηλιακό\n- Πηγαίνετε νωρίς τη σεζόν (Ιούνιο ή Σεπτέμβριο) για να αποφύγετε τα πλήθη\n\n**Κατάλληλο για:** Πρωτοεμφανιζόμενους επισκέπτες, φωτογράφους, οικογένειες"
        }
      },
      {
        title: { en: "Spinalonga Island — history accessible only by sea", el: "Σπιναλόγκα — ιστορία προσβάσιμη μόνο από τη θάλασσα" },
        content: {
          en: "Spinalonga — the small, fortified island at the entrance to Elounda Bay — was one of the last active leper colonies in Europe, operating until 1957. Its story is both tragic and fascinating, made famous internationally by Victoria Hislop's novel 'The Island'.\n\nGetting there requires a short boat ride from either Elounda or Agios Nikolaos (10–20 minutes). The island itself is a Venetian fortress with a ruined settlement, a small museum, and spectacular views back across the Gulf of Mirabello.\n\nA guided tour is strongly recommended — the story of Spinalonga is in the details, and a good guide brings the experience to life. Standard trips from Elounda run hourly throughout the day.\n\n**Practical tips:**\n\n- Boats depart from Elounda harbour every 30–60 minutes (€12–15 return)\n- From Agios Nikolaos, boats run less frequently — check the morning schedule\n- Allow 1–2 hours on the island to see everything properly\n- The ground is uneven with loose stones — wear sturdy footwear\n- Visit early morning (first boat around 9:00) to avoid heat and midday crowds\n- Combine with lunch at a sea-front taverna in Elounda afterwards\n- The site has entrance fee (€8) — cash only\n- Guided tours in English and French are available at the ticket office\n\n**Best for:** History lovers, readers of 'The Island', culture-focused travelers",
          el: "Η Σπιναλόγκα — το μικρό οχυρωμένο νησί στην είσοδο του κόλπου της Ελούντας — ήταν μία από τις τελευταίες ενεργές λωβιακές αποικίες στην Ευρώπη, σε λειτουργία μέχρι το 1957. Η ιστορία της είναι ταυτόχρονα τραγική και συναρπαστική, γνωστή παγκοσμίως από το μυθιστόρημα της Victoria Hislop 'Το Νησί'.\n\n**Πρακτικές συμβουλές:**\n\n- Σκάφη από το λιμάνι της Ελούντας κάθε 30–60 λεπτά (€12–15 μετ' επιστροφής)\n- Αφήστε 1–2 ώρες στο νησί για να δείτε τα πάντα\n- Φορέστε γερά παπούτσια — το έδαφος είναι ανώμαλο\n- Πηγαίνετε νωρίς το πρωί για να αποφύγετε τη ζέστη\n- Εισιτήριο εισόδου: €8 (μετρητά)\n\n**Κατάλληλο για:** Λάτρεις της ιστορίας, αναγνώστες του 'Το Νησί', ταξιδιώτες πολιτισμού"
        }
      },
      {
        title: { en: "Santorini Day Trip from Heraklion — the ultimate island hop", el: "Ημερήσια εκδρομή στη Σαντορίνη από το Ηράκλειο — το απόλυτο island hop" },
        content: {
          en: "For the most ambitious day trip from Crete, several operators run high-speed catamaran services from Heraklion to Santorini. The crossing takes approximately 2 hours each way, leaving at dawn and returning by late afternoon or evening.\n\nThe day typically includes a bus tour of Santorini's highlights — Oia (the famous blue-domed sunset village), Fira (the capital perched on the caldera edge), and a wine tasting or beach stop. Some premium cruises add a caldera boat tour to the volcanic islands of Nea and Palea Kameni.\n\n**Practical tips:**\n\n- High-speed services run daily from mid-May to October\n- Prices start around €90–130 per person including transfer on Santorini\n- The crossing can be rough in Meltemi wind — seasickness medication is wise\n- You get 4–6 hours on Santorini — just enough for a highlights tour\n- Book at least 3–5 days in advance in peak season\n- Consider an overnight stay if you want sunset in Oia — the last boat leaves before sunset\n\n**Best for:** Island hoppers, first-time visitors who want to see Santorini without staying there, photographers",
          el: "Για την πιο φιλόδοξη ημερήσια εκδρομή από την Κρήτη, αρκετοί πράκτορες εκτελούν δρομολόγια με ταχύπλοα catamaran από το Ηράκλειο προς τη Σαντορίνη. Η διάρκεια είναι περίπου 2 ώρες κάθε φορά.\n\n**Πρακτικές συμβουλές:**\n\n- Τα δρομολόγια εκτελούνται καθημερινά από τα μέσα Μαΐου έως Οκτώβριο\n- Τιμές από €90–130/άτομο με μεταφορά στη Σαντορίνη\n- Το πέρασμα μπορεί να είναι ταραγμένο — φέρτε φάρμακο για ναυτία\n- Θα έχετε 4–6 ώρες στη Σαντορίνη\n- Κλείστε 3–5 ημέρες νωρίτερα σε περίοδο αιχμής\n\n**Κατάλληλο για:** Island hoppers, φωτογράφους, όσους θέλουν να δουν τη Σαντορίνη"
        }
      },
      {
        title: { en: "Chrissi Island (Gaidouronisi) — the golden desert island", el: "Χρυσή (Γαϊδουρονήσι) — το χρυσό έρημο νησί" },
        content: {
          en: "Chrissi (also called Gaidouronisi) is a small uninhabited island 15 kilometres south of Ierapetra in eastern Crete. It is known for its unique golden-white sand, a protected cedar forest that covers much of the island, and crystal-clear water with a shallow seabed.\n\nThe entire island is a protected nature reserve. The beach — called Golden Beach (Chrysi Ammos) — is consistently rated among the best in Greece for its fine golden sand and the ancient cedar trees that provide natural shade right up to the waterline.\n\nDaily boat trips depart from Ierapetra harbour (45-minute crossing). Most operators offer a simple return ticket or a full-day package with lunch at one of the two seasonal tavernas.\n\n**Practical tips:**\n\n- Boats depart from Ierapetra harbour at 9:30–10:00, returning by 16:30–17:00\n- The crossing takes 45–60 minutes depending on conditions\n- Chrissi is a protected area — no camping, no loud music, no collecting sand or shells\n- The tavernas serve fresh fish and salads — prices are reasonable for an island location\n- Bring reef-safe sun cream — the water is exceptionally clear and the marine ecosystem is fragile\n- The island can get busy in August — September is the ideal month for a quieter visit\n- Snorkelling is excellent along the rocky southeastern shore\n\n**Best for:** Snorkellers, nature lovers, families, photographers",
          el: "Η Χρυσή (ή Γαϊδουρονήσι) είναι ένα μικρό ακατοίκητο νησί 15 χιλιόμετρα νότια της Ιεράπετρας. Φημίζεται για τη μοναδική χρυσή άμμο και το προστατευόμενο δάσος κέδρων.\n\nΟλόκληρο το νησί είναι προστατευόμενος φυσικός βιότοπος. Η Χρυσή Άμμος θεωρείται σταθερά μία από τις καλύτερες παραλίες της Ελλάδας.\n\n**Πρακτικές συμβουλές:**\n\n- Αναχώρηση από Ιεράπετρα 9:30–10:00, επιστροφή 16:30–17:00\n- Η διάρκεια είναι 45–60 λεπτά\n- Προστατευόμενη περιοχή — όχι κάμπινγκ, όχι δυνατή μουσική\n- Φέρτε αντηλιακό φιλικό προς τους υφάλους\n- Κολύμπι με μάσκα στη βραχώδη νοτιοανατολική ακτή\n\n**Κατάλληλο για:** Λάτρεις της κολύμβησης, φύσης, οικογένειες, φωτογράφους"
        }
      },
      {
        title: { en: "Preveli Beach & Palm Forest — boat from Plakias", el: "Πρέβελη & Φοινικόδασος — σκάφος από τον Πλακιά" },
        content: {
          en: "Preveli Beach is one of the most distinctive beaches in Crete — a long stretch of sand at the mouth of the Kourtaliotiko Gorge, lined with a dense palm forest that grows right down to the water. The palm trees are native Phoenix theophrasti, a species that predates human settlement on the island.\n\nAccess by road involves a steep 500-metre downhill walk followed by a punishing climb back up. Boat trips from Plakias (a 15-minute drive from Preveli) bypass this entirely, dropping you directly at the beach and picking you up later.\n\nThis is the most practical way to visit Preveli, especially in summer heat. Most operators offer morning or afternoon departures, with some combining the trip with a BBQ stop at a secluded cove along the way.\n\n**Practical tips:**\n\n- Boats depart from Plakias beach (not the main harbour)\n- Morning departure: approximately 10:00; afternoon: 14:00\n- The boat drops you at Preveli and returns at a scheduled pick-up time (usually 2–3 hours later)\n- Bring plenty of water — the beach has one seasonal canteen but limited supplies\n- The river behind the beach is fresh water and wonderfully cool — walk upstream for a natural freshwater bath\n- Combine with a visit to Preveli Monastery on the hill above the beach\n\n**Best for:** Nature lovers, hikers (the gorge walk), families who want to avoid the steep descent",
          el: "Το Πρέβελη είναι μία από τις πιο χαρακτηριστικές παραλίες της Κρήτης — μια μακριά αμμουδιά στο στόμιο του φαραγγιού του Κουρταλιώτη, με ένα πυκνό φοινικόδασος που φτάνει μέχρι το νερό.\n\n**Πρακτικές συμβουλές:**\n\n- Σκάφη από την παραλία Πλακιά (όχι από το λιμάνι)\n- Πρωινή αναχώρηση: ~10:00, απογευματινή: ~14:00\n- Το σκάφος σας αφήνει στο Πρέβελη και σας παραλαμβάνει 2–3 ώρες αργότερα\n- Φέρτε άφθονο νερό\n- Το ποτάμι πίσω από την παραλία είναι γλυκό νερό και δροσερό\n\n**Κατάλληλο για:** Λάτρεις της φύσης, οικογένειες"
        }
      },
      {
        title: { en: "Dia Island — half-day escape from Heraklion", el: "Νήσος Δία — ημι-ημερήσια απόδραση από το Ηράκλειο" },
        content: {
          en: "Dia is the large, uninhabited island visible directly across from Heraklion's harbour — only 13 kilometres offshore. A protected nature reserve with no permanent habitation, it offers excellent swimming, snorkelling and a genuine sense of wilderness 30 minutes from Crete's largest city.\n\nMost trips are half-day excursions (morning or afternoon) from Heraklion's old harbour or marina. They typically include two swimming stops, lunch or snacks on board, and a leisurely cruise along the island's dramatic northern cliffs.\n\nDia is also a popular stop for sailing charters and catamaran cruises based in Heraklion. The combination of proximity, clear water and the silhouette of the island against the Cretan coast makes it a favourite for those short on time.\n\n**Practical tips:**\n\n- Half-day trips run 2–3 hours; full-day options include more swim stops and lunch\n- Morning trips are calmer — the afternoon Meltemi can make the crossing choppy\n- Dia has no facilities, no tavernas, no shade — bring everything you need\n- The island is a protected nature reserve (Natura 2000) — no camping or fires\n- Snorkelling visibility is excellent on the south side facing Crete\n\n**Best for:** Heraklion-based travellers, short on time, families with young children, snorkellers",
          el: "Η Δία είναι το μεγάλο ακατοίκητο νησί απέναντι από το λιμάνι του Ηρακλείου — μόλις 13 χιλιόμετρα από την ακτή. Προσφέρει εξαιρετικό κολύμπι και μια αίσθηση άγριας φύσης 30 λεπτά από τη μεγαλύτερη πόλη της Κρήτης.\n\n**Πρακτικές συμβουλές:**\n\n- Ημι-ημερήσιες εκδρομές 2–3 ωρών\n- Τα πρωινά δρομολόγια είναι πιο ήρεμα\n- Η Δία δεν έχει υποδομές — φέρτε τα πάντα\n- Προστατευόμενη περιοχή Natura 2000\n\n**Κατάλληλο για:** Ταξιδιώτες με βάση το Ηράκλειο, οικογένειες"
        }
      },
      {
        title: { en: "Private Boat Hire — Chania, Agios Nikolaos & Elounda", el: "Ενοικίαση σκάφους — Χανιά, Άγιος Νικόλαος & Ελούντα" },
        content: {
          en: "Several operators in Chania's old Venetian harbour, Agios Nikolaos and Elounda offer small motorboat hire (15–30hp) with no license required. This is the most flexible way to explore Crete's coastline — you set your own route, choose your own swim stops and avoid the schedules of organised tours.\n\nFrom Chania, popular routes head east along the coast to the secluded coves of the Akrotiri peninsula, or west towards the quieter beaches of Kalyves and Almyrida. From Agios Nikolaos and Elounda, the Gulf of Mirabello offers dozens of small islands and coves to explore independently.\n\n**Practical tips:**\n\n- Half-day hire: €70–120; full day: €120–180 depending on boat size and season\n- No license required for boats under 30hp — you must be over 18\n- Fuel is usually charged separately (€20–40 for a full day)\n- Staff provide a map, orientation and safety briefing before departure\n- Stay within the gulf waters — the open sea conditions change rapidly in Crete\n- Avoid going far from shore in afternoon wind — the Meltemi arrives suddenly in summer\n- Book 1–2 days in advance in July–August\n\n**Best for:** Independent travellers, couples, small groups, experienced boaters",
          el: "Αρκετοί πράκτορες στο παλιό ενετικό λιμάνι των Χανίων, στον Άγιο Νικόλαο και στην Ελούντα προσφέρουν ενοικίαση μικρών μηχανοκίνητων σκαφών (15–30hp) χωρίς δίπλωμα.\n\n**Πρακτικές συμβουλές:**\n\n- Μισή μέρα: €70–120, ολόκληρη: €120–180\n- Δεν χρειάζεται δίπλωμα για σκάφη κάτω των 30hp\n- Τα καύσιμα χρεώνονται ξεχωριστά (€20–40 για ολόκληρη μέρα)\n- Κλείστε 1–2 ημέρες νωρίτερα τον Ιούλιο–Αύγουστο\n\n**Κατάλληλο για:** Ανεξάρτητους ταξιδιώτες, ζευγάρια, μικρές παρέες"
        }
      },
      {
        title: { en: "Sea Cave & South Coast Tours — Agia Galini & Matala", el: "Θαλάσσιες σπηλιές & εκδρομές νότιας ακτής — Αγία Γαλήνη & Μάταλα" },
        content: {
          en: "The south coast of Crete — from Agia Galini in the west to Matala and the Messara Bay — has a completely different character from the north. The water is deeper, the coastline is rockier, and the sea caves carved into the limestone cliffs are among the most impressive in Crete.\n\nBoat tours from Agia Galini explore the dramatic coastline eastwards towards the Paximadia islands (also known as 'the Dolphins'), with swimming stops at isolated beaches and through sea caves. From Matala (famous for its hippy-history caves), tours head west along the coast to the remote beaches of Kaloi Limenes and the wild Lentas area.\n\n**Practical tips:**\n\n- Most tours depart from Agia Galini harbour or Matala beach (seasonal, June–September)\n- Tours typically last 3–4 hours (half day) — full-day options are less common here\n- The south coast has less infrastructure for boat rentals — guided tours are the standard\n- The Paximadia islands are excellent for snorkelling with deeper drop-offs than the north\n- Matala's hippy caves are accessible from land too, but seeing them from the sea gives context\n- Afternoon wind on the south coast is less severe than the north — still, morning trips are calmer\n\n**Best for:** Nature lovers, photographers, those exploring south Crete who want a different perspective",
          el: "Η νότια ακτή της Κρήτης έχει εντελώς διαφορετικό χαρακτήρα από τη βόρεια. Το νερό είναι βαθύτερο, η ακτή πιο βραχώδης και οι θαλάσσιες σπηλιές είναι εντυπωσιακές.\n\n**Πρακτικές συμβουλές:**\n\n- Αναχώρηση από το λιμάνι της Αγίας Γαλήνης ή της παραλίας των Ματάλων\n- Οι εκδρομές διαρκούν 3–4 ώρες (ημι-ημερήσιες)\n- Τα Παξιμάδια είναι εξαιρετικά για κολύμπι με μάσκα\n\n**Κατάλληλο για:** Λάτρεις της φύσης, φωτογράφους"
        }
      },
      {
        title: { en: "Catamaran Sunset Cruises — Chania & Heraklion", el: "Κρουαζιέρες ηλιοβασιλέματος με catamaran — Χανιά & Ηράκλειο" },
        content: {
          en: "The north coast of Crete faces west at both ends — Chania in the west and Heraklion further east — making sunset cruises a popular option in both cities. Catamaran cruises depart from the old Venetian harbour of Chania and from Heraklion's marina, typically running 3–4 hours from late afternoon into the evening.\n\nThe experience is more luxurious than a standard day cruise: smaller groups, drinks and dinner included, swimming at sunset, and the sight of the Cretan coastline lit in golden light. Some catamarans from Heraklion combine the sunset experience with a stop at Dia Island.\n\n**Practical tips:**\n\n- Sunset cruises depart 2–3 hours before sunset (around 16:00–17:00 in summer)\n- Prices: €80–140 per person including drinks and dinner\n- Catamarans are more stable than motorboats — suitable if you are prone to seasickness\n- Bring a warm layer — it cools quickly on the water after sunset\n- Book 2–3 days in advance for the best catamarans (limited to 10–15 guests)\n\n**Best for:** Couples, special occasions, groups, anyone wanting a premium experience",
          el: "Η βόρεια ακτή της Κρήτης βλέπει δυτικά — ειδικά στα Χανιά — καθιστώντας τις κρουαζιέρες ηλιοβασιλέματος δημοφιλείς.\n\n**Πρακτικές συμβουλές:**\n\n- Αναχώρηση 2–3 ώρες πριν τη δύση (16:00–17:00 το καλοκαίρι)\n- Τιμές: €80–140/άτομο με ποτά και δείπνο\n- Τα catamaran είναι πιο σταθερά από τα μηχανοκίνητα σκάφη\n- Φέρτε ζακέτα — κρυώνει μετά τη δύση\n\n**Κατάλληλο για:** Ζευγάρια, ειδικές περιστάσεις"
        }
      },
      {
        title: { en: "What to Skip in Crete", el: "Τι να αποφύγετε στην Κρήτη" },
        content: {
          en: "Large party boats from Malia or Chersonissos: These operate along the north-east coast and are focused on music and alcohol rather than the coastline itself. Fine for a party — but not the Crete experience.\n\nOverpriced sunset 'yacht' packages from harbour touts: A standard catamaran cruise gives you the same sunset for half the price.\n\nRenting a small boat and attempting to cross to Santorini: The open-sea crossing between Crete and Santorini is long, exposed and potentially dangerous. Leave this to the professional high-speed services.\n\nVisiting Balos in peak August midday if you want solitude: The lagoon is spectacular but can have 500+ people in the water by noon. Go in shoulder season or take the first morning boat.",
          el: "Μεγάλα σκάφη πάρτι από τη Μάλια ή τη Χερσόνησο: Επικεντρώνονται στη μουσική και το αλκοόλ. Εντάξει για πάρτι — αλλά όχι η εμπειρία της Κρήτης.\n\nΥπερτιμημένα πακέτα 'γιοτ' ηλιοβασιλέματος: Μια απλή κρουαζιέρα με catamaran προσφέρει το ίδιο ηλιοβασίλεμα.\n\nΕνοικίαση μικρού σκάφους για Σαντορίνη: Η απόσταση είναι μεγάλη και δυνητικά επικίνδυνη.\n\nΕπίσκεψη στον Μπάλο τον Αύγουστο το μεσημέρι: Η λιμνοθάλασσα είναι εντυπωσιακή αλλά έχει πολύ κόσμο."
        }
      }
    ],
    faq: [
      {
        q: { en: "Is Balos accessible by road?", el: "Είναι ο Μπάλος προσβάσιμος οδικώς;" },
        a: { en: "Yes, but the road is a rough 8 km dirt track from the Kissamos area, and parking fills up by 10:00. A 4x4 is recommended. Most visitors take the boat from Kissamos — it is easier and more scenic.", el: "Ναι, αλλά ο δρόμος είναι δύσκολος 8 χλμ. χωματόδρομος. Οι περισσότεροι προτιμούν το σκάφος από τον Κίσσαμο — πιο εύκολο και πιο γραφικό." }
      },
      {
        q: { en: "Do I need a license to rent a boat in Crete?", el: "Χρειάζομαι δίπλωμα για ενοικίαση σκάφους στην Κρήτη;" },
        a: { en: "No. Small motorboats under 30hp can be rented without a license (over 18). Operators in Chania, Agios Nikolaos and Elounda offer these. Larger boats require a boating license.", el: "Όχι. Μικρά σκάφη κάτω των 30hp ενοικιάζονται χωρίς δίπλωμα (άνω των 18). Μεγαλύτερα σκάφη απαιτούν δίπλωμα." }
      },
      {
        q: { en: "How much do boat trips in Crete cost?", el: "Πόσο κοστίζουν οι εκδρομές με σκάφος στην Κρήτη;" },
        a: { en: "Balos/Gramvousa: €35–55 per person. Spinalonga: €12–15 return ferry plus €8 entry. Santorini day trip: €90–130. Chrissi Island: €25–35 return. Private boat hire: €70–180 depending on size and duration. Catamaran sunset: €80–140 per person.", el: "Μπάλος/Γραμβούσα: €35–55/άτομο. Σπιναλόγκα: €12–15 μετ' επιστροφής + €8 είσοδος. Σαντορίνη: €90–130. Χρυσή: €25–35 μετ' επιστροφής. Ενοικίαση σκάφους: €70–180. Catamaran ηλιοβασίλεμα: €80–140/άτομο." }
      },
      {
        q: { en: "Which boat trip is best for families with children?", el: "Ποια εκδρομή είναι καλύτερη για οικογένειες με παιδιά;" },
        a: { en: "Balos/Gramvousa is family-friendly with shallow lagoon water and a shipwreck for older kids. Chrissi Island has very shallow water and soft sand. Spinalonga's history appeals more to teenagers. Dia Island from Heraklion is excellent for a short half-day trip with young children.", el: "Ο Μπάλος είναι ιδανικός με ρηχά νερά. Η Χρυσή έχει πολύ ρηχά νερά. Η Δία είναι εξαιρετική για μικρά παιδιά." }
      },
      {
        q: { en: "Can I visit Santorini from Crete in one day?", el: "Μπορώ να επισκεφτώ τη Σαντορίνη από την Κρήτη σε μία μέρα;" },
        a: { en: "Yes. High-speed catamarans from Heraklion make the crossing in about 2 hours. You get 4–6 hours on Santorini — enough for a highlights tour of Oia and Fira. The trip is tiring but very popular.", el: "Ναι. Τα ταχύπλοα από το Ηράκλειο κάνουν 2 ώρες. Θα έχετε 4–6 ώρες στη Σαντορίνη." }
      }
    ]
  }
];

