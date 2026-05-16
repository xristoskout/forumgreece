import type { GuideCard } from "./types";
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
      en: "Greece has a reputation for being expensive, largely because Santorini and Mykonos dominate its image. The reality is more nuanced. Greece can be done on a tight budget, a comfortable mid-range spend, or a full luxury experience — and the cost of your trip depends more on your choices than on Greece itself. This guide breaks down real, current costs across accommodation, food, transport and experiences so you can plan your trip with honest numbers in hand.",
      el: "Η Ελλάδα έχει τη φήμη ακριβού προορισμού, κυρίως λόγω Σαντορίνης και Μυκόνου. Η πραγματικότητα είναι πιο σύνθετη. Μπορείτε να ταξιδέψετε με χαμηλό, μεσαίο ή υψηλό προϋπολογισμό — το κόστος εξαρτάται περισσότερο από τις επιλογές σας παρά από την ίδια την Ελλάδα."
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
  }
];

