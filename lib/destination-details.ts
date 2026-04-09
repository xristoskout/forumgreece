import type { Localized, LocalizedList } from "./content";

export type DestinationDetail = {
  overview: Localized;
  pageIncludes: LocalizedList;
  perfectFor: LocalizedList;
};

export const destinationDetails: Record<string, DestinationDetail> = {
  santorini: {
    overview: {
      en: "Santorini (or Thira) is one of those destinations that needs no introduction — yet, once you walk its paths, you realize its fame is only the beginning. The white settlements hanging over the caldera, the jasmine-scented alleys, the dark volcanic beaches, and the volcanic wine, create a setting unlike any other in the Cyclades.",
      el: "Η Σαντορίνη (ή Θήρα) είναι από εκείνους τους προορισμούς που δεν χρειάζονται συστάσεις — κι όμως, μόλις την περπατήσεις, καταλαβαίνεις ότι η φήμη της είναι μόνο η αρχή. Οι λευκοί οικισμοί που κρέμονται πάνω από την καλντέρα, τα δρομάκια που μυρίζουν γιασεμί, οι σκούρες ηφαιστειακές παραλίες και το κρασί που “γράφει” αλάτι και πέτρα στο στόμα, συνθέτουν ένα σκηνικό που δεν μοιάζει με κανένα άλλο στις Κυκλάδες.",
    },
    pageIncludes: {
      en: [
        "The geological miracle of the caldera",
        "Prehistoric culture & Museums",
        "PDO Wines & Volcanic gastronomy",
        "Beaches & Hidden villages",
      ],
      el: [
        "Γεωλογικό θαύμα της καλντέρας",
        "Προϊστορικός πολιτισμός & Μουσεία",
        "Οίνος ΠΟΠ & Ηφαιστειακή γαστρονομία",
        "Παραλίες & Κρυφά χωριά",
      ],
    },
    perfectFor: {
      en: [
        "Romantic trips and couples",
        "Landscape and photography lovers",
        "Gastronomic and wine journeys",
      ],
      el: [
        "Ρομαντικά ταξίδια και ζευγάρια",
        "Λάτρεις των τοπίων και της φωτογραφίας",
        "Γαστρονομικές και οινικές αναζητήσεις",
      ],
    },
  },

  mykonos: {
    overview: {
      en: "Mykonos: beyond the party, an island of history, sea, and 'hidden' corners. Mykonos is one of those destinations everyone thinks they know before even setting foot there. Images of whitewashed alleys, windmills above the sea, sunset cocktails, and beach clubs playing music till late. Yes, all this exists — and at high volume. But Mykonos has another face: authentic, quiet beaches, an inland village that takes you back to the old Cyclades, museums explaining why this island became the gateway to the Aegean, and (its great asset) Delos just a breath away — one of the most important archaeological sites of the Mediterranean. If you want to put 'Mykonos' on your travel list and do it right, the secret is to see it as a multi-speed island: a bit of cosmopolitan vibe, a bit of quiet for a breather, and a bit of history to leave with something more substantial than just photos.",
      el: "Μύκονος: πέρα από το πάρτι, ένα νησί με ιστορία, θάλασσα και “κρυφές” γωνιές. Η Μύκονος είναι από τους προορισμούς που όλοι νομίζουν ότι ξέρουν, πριν καν πατήσουν το πόδι τους εκεί. Εικόνες από κατάλευκα σοκάκια, ανεμόμυλους πάνω από τη θάλασσα, κοκτέιλ στο ηλιοβασίλεμα και beach clubs που παίζουν μουσική μέχρι αργά. Ναι, όλα αυτά υπάρχουν — και μάλιστα σε υψηλή ένταση. Αλλά η Μύκονος έχει κι ένα άλλο πρόσωπο: αυθεντικές παραλίες χωρίς φασαρία, ένα εσωτερικό χωριό που σε “γυρίζει” σε παλιές Κυκλάδες, μουσεία που εξηγούν γιατί αυτό το νησί έγινε πύλη στο Αιγαίο, και (το μεγάλο ατού) τη Δήλο σε απόσταση αναπνοής — έναν από τους σημαντικότερους αρχαιολογικούς τόπους της Μεσογείου. Αν θες να γράψεις “Μύκονος” στην ταξιδιωτική σου λίστα και να το κάνεις σωστά, το μυστικό είναι να τη δεις σαν νησί πολλών ταχυτήτων: λίγη κοσμικότητα για το vibe, λίγη ησυχία για ανάσα, και λίγη ιστορία για να φύγεις με κάτι πιο ουσιαστικό από φωτογραφίες.",
    },
    pageIncludes: {
      en: [
        "Cosmopolitan Chora",
        "Sacred Delos",
        "Beaches for every taste",
        "Cycladic gastronomy",
      ],
      el: [
        "Η κοσμοπολίτικη Χώρα",
        "Η ιερή Δήλος",
        "Παραλίες για κάθε γούστο",
        "Κυκλαδίτικη γαστρονομία",
      ],
    },
    perfectFor: {
      en: [
        "Party lovers",
        "Couples and friends",
        "Luxury seekers",
        "History explorers (Delos)",
      ],
      el: [
        "Λάτρεις των parties",
        "Ζευγάρια και φίλους",
        "Όσους αναζητούν πολυτέλεια",
        "Εξερευνητές της ιστορίας (Δήλος)",
      ],
    },
  },

  kefalonia: {
    overview: {
      en: "Kefalonia is one of the most rewarding islands for travelers who want more than a simple beach holiday. A well-planned stay here can mix dramatic coastal views, boat excursions, turquoise waters, traditional villages and relaxed local culture in a single experience. This page presents a travel-style overview of what makes Kefalonia special and what visitors can expect when exploring the island.",
      el: "Η Κεφαλονιά είναι ένα από τα πιο ξεχωριστά νησιά για ταξιδιώτες που θέλουν κάτι περισσότερο από απλές διακοπές σε παραλίες. Μια καλά οργανωμένη διαμονή εδώ μπορεί να συνδυάσει εντυπωσιακές ακτογραμμές, βαρκάδες, τιρκουάζ νερά, παραδοσιακά χωριά και χαλαρή τοπική κουλτούρα σε μία ολοκληρωμένη εμπειρία. Αυτή η σελίδα παρουσιάζει ταξιδιωτικά τι κάνει την Κεφαλονιά τόσο ιδιαίτερη και τι μπορεί να περιμένει ο επισκέπτης όταν την εξερευνά.",
    },
    pageIncludes: {
      en: [
        "Myrtos, Antisamos & famous beaches",
        "Melissani & Drogarati Caves",
        "Ainos National Park hikes",
        "Assos & Fiskardo villages",
      ],
      el: [
        "Μύρτος, Αντίσαμος & διάσημες παραλίες",
        "Μελισσάνη & Σπήλαιο Δρογκαράτης",
        "Εθνικός Δρυμός Αίνου",
        "Χωριά Άσσος & Φισκάρδο",
      ],
    },
    perfectFor: {
      en: [
        "Road trip enthusiasts",
        "Nature and geology lovers",
        "Families looking for diverse activities",
        "Couples seeking romantic coastal escapes",
      ],
      el: [
        "Λάτρεις των road trips",
        "Φυσιολάτρες και εξερευνητές",
        "Οικογένειες που αναζητούν δράσεις",
        "Ζευγάρια για ρομαντικές αποδράσεις",
      ],
    },
  },

  lesvos: {
    overview: {
      en: "Lesvos is ideal for travelers who want a deeper and more authentic Greek island experience. A well-planned stay here can focus on village character, local food, heritage and landscapes that feel less commercial and more rooted in everyday island life. This page presents a travel-style overview of what makes Lesvos special and what visitors can expect when exploring the island.",
      el: "Η Λέσβος είναι ιδανική για ταξιδιώτες που θέλουν μια πιο βαθιά και αυθεντική εμπειρία ελληνικού νησιού. Μια καλά οργανωμένη διαμονή εδώ μπορεί να εστιάζει στον χαρακτήρα των χωριών, στο τοπικό φαγητό, στην παράδοση και σε τοπία που είναι λιγότερο εμπορικά και πιο δεμένα με την καθημερινή νησιωτική ζωή. Αυτή η σελίδα παρουσιάζει ταξιδιωτικά τι κάνει τη Λέσβο τόσο ιδιαίτερη και τι μπορεί να περιμένει ο επισκέπτης όταν την εξερευνά.",
    },
    pageIncludes: {
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
  },

  crete: {
    overview: {
      en: "Crete is ideal for travelers who want variety. A well-planned stay can include archaeological heritage, mountain routes, old towns, sea views and strong food identity, making the island one of the richest destinations in Greece for full-day exploration. This page presents a travel-style overview of what makes Crete special and what visitors can expect when exploring the island.",
      el: "Η Κρήτη είναι ιδανική για ταξιδιώτες που θέλουν ποικιλία. Μια καλά οργανωμένη διαμονή μπορεί να περιλαμβάνει αρχαιολογική κληρονομιά, ορεινές διαδρομές, παλιές πόλεις, θαλασσινές εικόνες και έντονη γαστρονομική ταυτότητα, κάνοντας το νησί έναν από τους πιο πλούσιους προορισμούς στην Ελλάδα για ολοήμερη εξερεύνηση. Αυτή η σελίδα παρουσιάζει ταξιδιωτικά τι κάνει την Κρήτη τόσο ιδιαίτερη και τι μπορεί να περιμένει ο επισκέπτης όταν την εξερευνά.",
    },
    pageIncludes: {
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
  },

  corfu: {
    overview: {
      en: "Corfu has that rare ability to win you over before you even arrive: aromas of lemon and cypress trees, an Old Town that looks like it was plucked from an Italian set, narrow alleys (kantounia) hiding courtyards and balconies, and a sea that changes color depending on the weather. It is no coincidence that the Old Town of Corfu has been recognized as a UNESCO World Heritage Site, mainly for its urban and port ensemble with Venetian fortifications. But Corfu is not just 'a walk in the town + a beach'. It is an island with a very strong historical layer: Venetian, French, British and Greek periods left traces in its architecture, musical tradition and food.",
      el: "Η Κέρκυρα έχει εκείνη τη σπάνια ικανότητα να σε κερδίζει πριν καν φτάσεις: αρώματα από λεμονιές και κυπαρίσσια, μια Παλιά Πόλη που μοιάζει να ξεκόλλησε από ιταλικό σκηνικό, καντούνια που κρύβουν αυλές και μπαλκόνια, και μια θάλασσα που αλλάζει χρώμα ανάλογα με τον καιρό. Δεν είναι τυχαίο ότι η Παλιά Πόλη της Κέρκυρας έχει αναγνωριστεί ως Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO, κυρίως για το αστικό και λιμενικό σύνολο με τις ενετικές οχυρώσεις. Αλλά η Κέρκυρα δεν εξαντλείται στη «βόλτα στην πόλη + μια παραλία». Είναι νησί με πολύ δυνατή ιστορική στρώση: ενετική, γαλλική, βρετανική και ελληνική περίοδος άφησαν ίχνη στην αρχιτεκτονική, στη μουσική παράδοση και στο φαγητό.",
    },
    pageIncludes: {
      en: [
        "UNESCO Old Town & Fortresses",
        "Beaches for families, landscapes & wild vibes",
        "Villages & inland exploration",
        "Iconic gastronomy & local secrets",
      ],
      el: [
        "Παλιά Πόλη UNESCO & Φρούρια",
        "Παραλίες για οικογένειες, τοπία & άγρια ομορφιά",
        "Χωριά & εξερεύνηση στην ενδοχώρα",
        "Εμβληματική γαστρονομία & τοπικά μυστικά",
      ],
    },
    perfectFor: {
      en: [
        "Couples and romantic getaways",
        "Families looking for organized and natural beaches",
        "Architecture and history enthusiasts",
        "Explorers of culture and fine dining",
      ],
      el: [
        "Ζευγάρια και ρομαντικές αποδράσεις",
        "Οικογένειες που αναζητούν οργανωμένες αλλά και φυσικές παραλίες",
        "Λάτρεις της αρχιτεκτονικής και της ιστορίας",
        "Εξερευνητές πολιτισμού και καλής γαστρονομίας",
      ],
    },
  },

  "nayplio-odigos-taxidiou": {
    overview: {
      en: "Nafplio is the city that makes you feel like you are in a romantic movie... but with Greek coffee. It is one of those destinations that always work: weekends, holidays, spring getaways in Greece. The Old Town with its neoclassical buildings, narrow alleys, squares, and castles that you can see from everywhere, gives this rare mix of 'picturesque' without being fake. And there is a historical weight that makes the trip more meaningful: Nafplio flourished when it became the first capital of the Greek state, from 1827 to 1834.",
      el: "Το Ναύπλιο είναι η πόλη που σε κάνει να νομίζεις πως είσαι σε ρομαντική ταινία… αλλά με ελληνικό καφέ. Είναι από εκείνους τους προορισμούς που δουλεύουν πάντα: διήμερο, τριήμερο, γιορτές, ανοιξιάτικες αποδράσεις. Η Παλιά Πόλη με τα νεοκλασικά, τα καντούνια, τις πλατείες και τα κάστρα που βλέπεις από παντού, δίνει αυτό το σπάνιο μείγμα: «γραφικό» χωρίς να είναι ψεύτικο. Και υπάρχει κι ένα ιστορικό βάρος που κάνει το ταξίδι πιο ουσιαστικό: το Ναύπλιο γνώρισε τη μεγάλη ακμή του όταν έγινε πρωτεύουσα του ελληνικού κράτους, από το 1827 έως το 1834.",
    },
    pageIncludes: {
      en: [
        "Palamidi & Bourtzi Castles",
        "Archaeological trips (Mycenae, Epidaurus)",
        "Old Town walks & Architecture",
        "Beaches like Arvanitia & Karathona",
      ],
      el: [
        "Παλαμήδι & Μπούρτζι",
        "Αρχαιολογικές εκδρομές (Μυκήνες, Επίδαυρος)",
        "Βόλτες στη Παλιά Πόλη & Αρχιτεκτονική",
        "Παραλίες όπως η Αρβανιτιά & Καραθώνα",
      ],
    },
    perfectFor: {
      en: [
        "Couples and romantic getaways",
        "History and archaeology enthusiasts",
        "City breaks and short weekend escapes",
        "Families seeking easy walking areas",
      ],
      el: [
        "Ζευγάρια και ρομαντικές αποδράσεις",
        "Λάτρεις της ιστορίας και της αρχαιολογίας",
        "City breaks και σύντομες αποδράσεις",
        "Οικογένειες που αναζητούν εύκολες βόλτες",
      ],
    },
  },

  thessaloniki: {
    overview: {
      en: "Thessaloniki is not 'just' the second largest city in Greece. It is a capital of rhythm: coffee that becomes a ritual, a walk on the New Waterfront that feels like a daily city date, Byzantine monuments not seen behind fences but next to modern shops, and neighborhoods that change character within minutes of walking. And the most significant asset? Thessaloniki is a global cultural destination: its Early Christian and Byzantine monuments are listed by UNESCO.",
      el: "Η Θεσσαλονίκη δεν είναι “απλώς” η δεύτερη μεγαλύτερη πόλη της Ελλάδας. Είναι μια πρωτεύουσα ρυθμού: καφές που γίνεται τελετουργία, βόλτα στη Νέα Παραλία που μοιάζει με καθημερινό ραντεβού της πόλης, βυζαντινά μνημεία που δεν τα βλέπεις πίσω από κάγκελα αλλά δίπλα σε σύγχρονα μαγαζιά, και γειτονιές που αλλάζουν χαρακτήρα μέσα σε λίγα λεπτά περπατήματος. Και το πιο “βαρύ χαρτί”; Η Θεσσαλονίκη είναι παγκόσμιος προορισμός πολιτισμού: τα Παλαιοχριστιανικά και Βυζαντινά μνημεία της είναι ενταγμένα στον κατάλογο UNESCO.",
    },
    pageIncludes: {
      en: [
        "White Tower & New Waterfront",
        "UNESCO Byzantine monuments",
        "Famous food markets (Kapani, Modiano)",
        "Ano Poli (Upper Town)",
      ],
      el: [
        "Λευκός Πύργος & Νέα Παραλία",
        "Βυζαντινά μνημεία UNESCO",
        "Διάσημες αγορές (Καπάνι, Μοδιάνο)",
        "Άνω Πόλη",
      ],
    },
    perfectFor: {
      en: [
        "Food lovers and culinary explorers",
        "Young travelers and night owls",
        "History and culture enthusiasts",
        "Weekend city breaks",
      ],
      el: [
        "Λάτρεις του φαγητού και της γαστρονομίας",
        "Νέους ταξιδιώτες και λάτρεις της νυχτερινής ζωής",
        "Εραστές της ιστορίας και του πολιτισμού",
        "City breaks για το Σαββατοκύριακο",
      ],
    },
  },

  athens: {
    overview: {
      en: "Athens is one of the few places in the world where you can drink coffee next to a modern shop window, turn a corner to find 2,500-year-old marbles, and end your day with a sunset by the sea. It's a city of intensity, contrast, and real everyday life. If you rush it like a checklist, it will tire you out. If you give it your rhythm, it becomes addictive. Yes, the Acropolis is a UNESCO World Heritage site since 1987. But Athens isn't just the Acropolis. It's the neighborhoods, the markets, the modern cultural spaces, the Riviera, and the day trips that make you feel you're living here, rather than just visiting.",
      el: "Η Αθήνα είναι από τα λίγα μέρη στον κόσμο όπου μπορείς να πιεις καφέ δίπλα σε μια σύγχρονη βιτρίνα, να στρίψεις ένα στενό και να βρεθείς μπροστά σε μάρμαρα 2.500 χρόνων, και μετά να τελειώσεις την ημέρα σου με ηλιοβασίλεμα δίπλα στη θάλασσα—χωρίς να έχεις φύγει καν από την Αττική. Είναι πόλη με ένταση, αντιθέσεις και αληθινή καθημερινότητα. Αν την “τρέξεις” σαν λίστα, θα σου φανεί κουραστική. Αν της δώσεις ρυθμό, θα γίνει εθιστική. Είναι οι γειτονιές της, οι αγορές της, οι σύγχρονοι πολιτιστικοί χώροι της, η “Ριβιέρα” της, οι μονοήμερες αποδράσεις (Σούνιο, νησιά) που σε κάνουν να νιώθεις ότι μένεις σε βάση κι όχι απλώς σε έναν ενδιάμεσο προορισμό.",
    },
    pageIncludes: {
      en: [
        "UNESCO Acropolis & Central monuments",
        "Top-class Archaeology & Museums",
        "Athens Riviera & Coastal vibes",
        "Vibrant urban food & Street markets",
      ],
      el: [
        "Ακρόπολη & Μνημεία (UNESCO)",
        "Κορυφαία Μουσεία αρχαιότητας & τέχνης",
        "Αθηναϊκή Ριβιέρα & Λίμνη Βουλιαγμένης",
        "Ζωντανή σκηνή street food & Αγορές",
      ],
    },
    perfectFor: {
      en: [
        "History and culture enthusiasts",
        "Travelers seeking rich urban and coastal variety",
        "Lovers of bustling food scenes and street food",
        "Those planning day trips or island hopping",
      ],
      el: [
        "Λάτρεις της αρχαίας ιστορίας και του πολιτισμού",
        "Ταξιδιώτες που αναζητούν έναν ολοκληρωμένο αστικό προορισμό",
        "Foodies που αγαπούν το street food και τις αγορές",
        "Ταξιδιώτες που χρησιμοποιούν την Αθήνα ως βάση",
      ],
    },
  },
};