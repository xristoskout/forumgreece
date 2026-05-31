import type { Localized, LocalizedList } from "./content";

export type DestinationDetail = {
  overview: Localized;
  pageIncludes: LocalizedList;
  perfectFor: LocalizedList;
  honestAdvice?: {
    title: Localized;
    alert: Localized;
    items: LocalizedList;
  };
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

  nafplio: {
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

  paros: {
    overview: {
      en: "Paros is one of those Greek islands that feels easy to enjoy from the start. It has the whitewashed Cycladic look that many travelers imagine when they think of the Aegean, but it also feels more relaxed and rounded than some of the better-known neighboring islands. You come here for beaches, village life, good food, harbor walks, and a travel rhythm that can be both lively and calm depending on where you stay.\n\nWhat makes Paros especially appealing is its balance. It can work for couples, families, groups of friends, and even first-time visitors to Greece who want a classic island trip without the intensity or pricing of the most heavily hyped destinations. You can spend one day by the sea, another in small inland villages, and another wandering through the lanes of Naoussa or Parikia with no real rush.\n\nParos is also practical. It is well connected, relatively easy to move around, and large enough to offer variety without feeling overwhelming. Some travelers come for beaches and summer atmosphere, while others are more interested in food, village charm, and a softer Cycladic experience. Either way, it is an island that tends to feel complete.\n\nIf you are planning your trip, Paros is best approached as an island that gives you a little of everything: attractive towns, very good swimming spots, classic Cycladic scenery, and a relaxed but polished holiday feel.",
      el: "Η Πάρος είναι από τα ελληνικά νησιά που τα απολαμβάνεις από την πρώτη στιγμή. Έχει το αυθεντικό κυκλαδίτικο χρώμα με τα λευκά σπίτια, αλλά ταυτόχρονα προσφέρει μια πιο χαλαρή και ισορροπημένη ατμόσφαιρα σε σχέση με τους διάσημους γείτονές της. Εδώ έρχεσαι για τις παραλίες, τη ζωή στα χωριά, το καλό φαγητό, τις βόλτες στα λιμανάκια και έναν ρυθμό που μπορεί να είναι τόσο ζωντανός όσο και ήρεμος.\n\nΑυτό που κάνει την Πάρο τόσο ελκυστική είναι η ισορροπία της. Είναι ιδανική για ζευγάρια, οικογένειες, παρέες φίλων και ταξιδιώτες που αναζητούν μια κλασική εμπειρία Αιγαίου, χωρίς την πίεση των πολύβουων hotspots. Μπορείς να περάσεις μια μέρα στη θάλασσα, μια άλλη στα ορεινά χωριά και μια τρίτη περπατώντας χωρίς άγχος στα σοκάκια της Νάουσας ή της Παροικιάς.\n\nΕίναι επίσης πρακτική. Έχει εξαιρετική συγκοινωνία, είναι εύκολη στις μετακινήσεις και αρκετά μεγάλη ώστε να προσφέρει ποικιλία χωρίς να κουράζει. Αν σχεδιάζεις το ταξίδι σου, προσέγγισε την Πάρο ως ένα νησί που τα συνδυάζει όλα: γραφικούς οικισμούς, εξαιρετικές παραλίες, κλασικό κυκλαδίτικο τοπίο και μια κομψή, ξέγνοιαστη αίσθηση διακοπών."
    },
    pageIncludes: {
      en: ["Why visit Paros", "Best areas to stay", "Top beaches", "Local food guide", "Practical tips & FAQs"],
      el: ["Γιατί να πας στην Πάρο", "Οι καλύτερες περιοχές για διαμονή", "Κορυφαίες παραλίες", "Οδηγός τοπικού φαγητού", "Πρακτικά tips & FAQs"]
    },
    perfectFor: {
      en: ["Couples & Friends", "Classic Cycladic holidays", "Beach lovers", "Easy island hopping"],
      el: ["Ζευγάρια & Παρέες", "Κλασικές κυκλαδίτικες διακοπές", "Λάτρεις της θάλασσας", "Εύκολο island hopping"]
    }
  },
  naxos: {
    overview: {
      en: "Naxos is the largest island in the Cyclades, yet it remains one of the most understated and versatile destinations in Greece. Unlike its more famous neighbors, Naxos does not rely on a single dramatic feature — instead, it offers a rare combination of long sandy beaches, a towering Venetian castle, traditional mountain villages, fertile valleys, and one of the most genuine island rhythms in the Aegean. It is an island that feels both big and approachable, with enough space, variety, and character to suit many different kinds of travelers.\n\nWhat makes Naxos stand out is its completeness. You can spend a full week here and barely repeat an experience. One day you might explore the marble-paved alleyways of the Old Town beneath the Castle, swim at the endless beach of Agios Prokopios, or eat fresh seafood by the harbor. The next, you could drive through mountain villages like Halki, Apeiranthos, and Filoti, visit the Temple of Demeter, or hike up Mount Zas — the highest peak in the Cyclades. The island is large enough to absorb crowds even in peak season, and it rarely feels overwhelmed in the way that smaller, more hyped islands do.\n\nNaxos also has a strong food identity. The fertile interior produces local cheeses (graviera, arseniko), the famous kitron liqueur, olives, potatoes that are among the best in Greece, and meat dishes that reflect a genuine mountain tradition. The harbor front in Naxos Town is lined with excellent tavernas, many of which serve produce grown just a few kilometres inland.\n\nFor travelers who want depth, authenticity, and variety — without sacrificing beach quality or comfort — Naxos is one of the best island choices in Greece. It works well for couples, families, solo travelers, and anyone who wants a Cycladic holiday that feels grounded, generous, and real.",
      el: "Η Νάξος είναι το μεγαλύτερο νησί των Κυκλάδων, αλλά παραμένει ένας από τους πιο διακριτικούς και ευέλικτους προορισμούς στην Ελλάδα. Σε αντίθεση με τους πιο διάσημους γείτονές της, δεν βασίζεται σε ένα μόνο δραματικό χαρακτηριστικό — αντίθετα, συνδυάζει απέραντες αμμουδιές, ένα επιβλητικό ενετικό κάστρο, παραδοσιακά ορεινά χωριά, εύφορες κοιλάδες και έναν από τους πιο αυθεντικούς νησιωτικούς ρυθμούς στο Αιγαίο. Είναι ένα νησί που νιώθεις ταυτόχρονα μεγάλο και προσιτό.\n\nΑυτό που κάνει τη Νάξο ξεχωριστή είναι η πληρότητά της. Μπορείς να περάσεις μια ολόκληρη εβδομάδα και σχεδόν να μην επαναλάβεις εμπειρία. Μια μέρα εξερευνάς τα μαρμαρόστρωτα σοκάκια της Παλιάς Πόλης κάτω από το Κάστρο, κολυμπάς στην ατέλειωτη παραλία του Αγίου Προκοπίου ή απολαμβάνεις φρέσκο ψάρι στο λιμάνι. Την επόμενη, οδηγείς στα ορεινά χωριά Χαλκί, Απείρανθο και Φιλώτι, επισκέπτεσαι τον Ναό της Δήμητρας ή ανεβαίνεις στη Ζα — την υψηλότερη κορυφή των Κυκλάδων. Το νησί είναι αρκετά μεγάλο για να απορροφά τον κόσμο ακόμα και στην υψηλή περίοδο.\n\nΗ Νάξος έχει επίσης ισχυρή γαστρονομική ταυτότητα. Η εύφορη ενδοχώρα παράγει τοπικά τυριά (γκραβιέρα, αρσενικό), το περίφημο λικέρ κίτρο, ελιές, πατάτες από τις καλύτερες της Ελλάδας και κρεατικά που αντικατοπτρίζουν μια γνήσια ορεινή παράδοση. Το παραλιακό μέτωπο της Χώρας είναι γεμάτο εξαιρετικές ταβέρνες που σερβίρουν προϊόντα από λίγα χιλιόμετρα μακριά.\n\nΓια ταξιδιώτες που θέλουν βάθος, αυθεντικότητα και ποικιλία — χωρίς να θυσιάζουν την ποιότητα της παραλίας ή την άνεση — η Νάξος είναι από τις καλύτερες επιλογές στην Ελλάδα. Λειτουργεί εξαιρετικά για ζευγάρια, οικογένειες, σόλο ταξιδιώτες και όποιον θέλει κυκλαδίτικες διακοπές με ουσία."
    },
    pageIncludes: {
      en: ["Why visit Naxos", "Best areas to stay", "Top beaches", "Local food guide", "Practical tips & FAQs"],
      el: ["Γιατί να πας στη Νάξο", "Οι καλύτερες περιοχές για διαμονή", "Κορυφαίες παραλίες", "Οδηγός τοπικού φαγητού", "Πρακτικά tips & FAQs"]
    },
    perfectFor: {
      en: ["Couples & Families", "Beach & mountain diversity", "Authentic Cycladic culture", "Easy island hopping"],
      el: ["Ζευγάρια & Οικογένειες", "Ποικιλία θάλασσας & βουνού", "Αυθεντική κυκλαδίτικη κουλτούρα", "Εύκολο island hopping"]
    }
  },
  milos: {
    overview: {
      en: "Milos feels different from many other Greek islands, and that difference is exactly what makes it memorable. It still has Cycladic villages, sea views, and whitewashed charm, but the island's identity is shaped above all by its dramatic coastline, unusual rock formations, and beaches that often feel more striking than typical. It is a place that leaves a strong visual impression.\n\nFor many travelers, Milos is less about a polished town-and-nightlife rhythm and more about landscapes, swimming, photography, and exploration. The island has a raw beauty in places, but it is also very approachable. You can spend days moving between beach coves, coastal viewpoints, harbor villages, and simple tavern meals, and still feel like you have not fully seen it.\n\nMilos suits travelers who want scenery, sea time, and a trip that feels more nature-led than urban or social. That does not mean it lacks comfort or attractive places to stay. It simply means that the island's strongest pull is often outdoors: cliffs, coves, water color, lunar rock formations, and boat-access coastlines that make the whole place feel a little more adventurous.\n\nIt is one of the best islands in Greece for travelers who care about beaches and visual atmosphere, but it also rewards those who leave room for slower village moments and harbor-side simplicity.",
      el: "Η Μήλος έχει μια αίσθηση εντελώς διαφορετική από τα περισσότερα ελληνικά νησιά, και αυτό ακριβώς είναι που την κάνει αξέχαστη. Διατηρεί τα κυκλαδίτικα χωριά και τη γοητεία των λευκών σπιτιών, αλλά η ταυτότητά της καθορίζεται πρωτίστως από την επιβλητική της ακτογραμμή, τους σπάνιους βραχώδεις σχηματισμούς και τις παραλίες που μοιάζουν απόκοσμες. Είναι ένα μέρος που αφήνει ένα πολύ ισχυρό οπτικό αποτύπωμα.\n\nΓια πολλούς ταξιδιώτες, η Μήλος δεν έχει να κάνει τόσο με την κοσμική ζωή ή τη νυχτερινή διασκέδαση, αλλά με τα τοπία, το κολύμπι, τη φωτογραφία και την εξερεύνηση. Το νησί διαθέτει μια άγρια ομορφιά, παραμένοντας ωστόσο εξαιρετικά φιλόξενο. Μπορείς να περάσεις μέρες ταξιδεύοντας ανάμεσα σε κρυφούς κολπίσκους, εντυπωσιακά σημεία θέας, ψαροχώρια και απλές ταβέρνες, νιώθοντας ότι ακόμα δεν τα έχεις δει όλα.\n\nΗ Μήλος ταιριάζει σε όσους αναζητούν φύση, θάλασσα και ένα ταξίδι που καθοδηγείται περισσότερο από το τοπίο παρά από τον αστικό ρυθμό. Το μεγαλύτερο της ατού βρίσκεται έξω: γκρεμοί, σπηλιές, μοναδικά χρώματα στα νερά, σεληνιακά τοπία και ακτές προσβάσιμες μόνο με σκάφος που δίνουν μια αίσθηση περιπέτειας.\n\nΕίναι από τα καλύτερα νησιά στην Ελλάδα για όσους εκτιμούν τις εντυπωσιακές παραλίες και την οπτική ατμόσφαιρα, αλλά ανταμείβει εξίσου και εκείνους που αφήνουν χώρο για ήρεμες στιγμές στα χωριά και απλότητα δίπλα στο λιμάνι."
    },
    pageIncludes: {
      en: ["Why visit Milos", "Best bases & areas", "Beaches & boat tours", "Local food guide", "Practical tips & FAQs"],
      el: ["Γιατί να πας στη Μήλο", "Οι καλύτερες βάσεις διαμονής", "Παραλίες & εκδρομές με σκάφος", "Οδηγός τοπικού φαγητού", "Πρακτικά tips & FAQs"]
    },
    perfectFor: {
      en: ["Couples & Explorers", "Scenic landscapes", "Boat trips & caves", "Distinctive beaches"],
      el: ["Ζευγάρια & Εξερευνητές", "Εντυπωσιακά τοπία", "Εκδρομές με σκάφος & σπηλιές", "Μοναδικές παραλίες"]
    }
  },
  zakynthos: {
    overview: {
      en: "Zakynthos is one of the most visually striking islands in Greece, known for its bright turquoise waters, dramatic coastal scenery, and some of the most recognizable beach landscapes in the Ionian Sea. It is an island that often first attracts visitors through its famous postcard images, but in reality it offers much more than a single viewpoint or one well-known beach.\n\nWhat makes Zakynthos appealing is the contrast it offers. Some parts of the island feel lively and energetic, especially in summer, while others are quieter, greener, and more relaxed. You can spend one day on a boat trip along the coast, another discovering beaches and scenic bays, and another enjoying a slower village or seaside rhythm. That mix gives the island broader appeal than many first-time visitors expect.\n\nZakynthos works especially well for travelers who want a classic summer island trip with a strong beach focus, but it also suits those who enjoy sea-based experiences, coastal exploration, and day-to-day variety. For some, it is about iconic stops like Navagio and the Blue Caves. For others, it is about staying near calm beaches, enjoying long lunches by the sea, and letting the island unfold more gradually.\n\nIf you are planning a holiday in the Ionian Islands, Zakynthos is best approached as a place of clear waters, boat-friendly exploration, family-friendly beach options, and a memorable coastal identity.",
      el: "Η Ζάκυνθος είναι ένα από τα πιο εντυπωσιακά νησιά της Ελλάδας, γνωστή για τα έντονα γαλαζοπράσινα νερά, το δραματικό παραθαλάσσιο τοπίο και μερικές από τις πιο αναγνωρίσιμες παραλίες στο Ιόνιο. Είναι ένα νησί που συχνά προσελκύει επισκέπτες χάρη στις διάσημες εικόνες του, αλλά στην πραγματικότητα προσφέρει πολλά περισσότερα από ένα απλό σημείο θέας.\n\nΑυτό που κάνει τη Ζάκυνθο τόσο ελκυστική είναι οι αντιθέσεις της. Κάποιες περιοχές είναι ζωντανές και γεμάτες ενέργεια το καλοκαίρι, ενώ άλλες είναι πιο ήσυχες, καταπράσινες και χαλαρές. Μπορείς να περάσεις μια μέρα σε μια εκδρομή με σκάφος, μια άλλη εξερευνώντας κρυφούς κόλπους, και μια τρίτη απολαμβάνοντας τον αργό ρυθμό ενός χωριού δίπλα στη θάλασσα.\n\nΛειτουργεί εξαιρετικά για ταξιδιώτες που θέλουν κλασικές καλοκαιρινές διακοπές με έμφαση στην παραλία, αλλά και για όσους αγαπούν τις θαλάσσιες εμπειρίες και την εξερεύνηση των ακτών. Για κάποιους, σημαίνει Ναυάγιο και Γαλάζιες Σπηλιές. Για άλλους, σημαίνει διαμονή κοντά σε ήρεμες παραλίες και μεγάλα μεσημεριανά γεύματα πάνω στο κύμα.\n\nΑν σχεδιάζεις διακοπές στο Ιόνιο, προσέγγισε τη Ζάκυνθο ως έναν προορισμό με κρυστάλλινα νερά, εύκολες θαλάσσιες εξορμήσεις, ιδανικές επιλογές για οικογένειες και μια αξέχαστη παραθαλάσσια ταυτότητα."
    },
    pageIncludes: {
      en: ["Why visit Zakynthos", "Best bases & areas", "Beaches & boat tours", "Local food guide", "Practical tips & FAQs"],
      el: ["Γιατί να πας στη Ζάκυνθο", "Οι καλύτερες βάσεις διαμονής", "Παραλίες & εκδρομές με σκάφος", "Οδηγός τοπικού φαγητού", "Πρακτικά tips & FAQs"]
    },
    perfectFor: {
      en: ["Couples & Families", "Classic summer holidays", "Boat trips & caves", "Scenic coastlines"],
      el: ["Ζευγάρια & Οικογένειες", "Κλασικές καλοκαιρινές διακοπές", "Εκδρομές με σκάφος & σπηλιές", "Εντυπωσιακές ακτογραμμές"]
    }
  },

  chania: {
    overview: {
      en: "Chania is one of the most attractive and complete destinations in Crete. It combines a beautiful historic center, a lively harbor atmosphere, strong food culture, and access to some of the island's most famous beaches and landscapes. For many travelers, it is one of the easiest places in Crete to love immediately. It has character, visual charm, and enough variety to work as both a short city-style stay and a broader base for western Crete.\n\nWhat makes Chania especially appealing is the way it balances beauty and practicality. The old town and Venetian harbor give it a strong first impression, but the destination is not only about postcard views. It also works extremely well as a travel base. From here, many visitors explore beaches, mountain villages, coastal drives, and some of the most iconic places in western Crete. That makes Chania attractive not only for relaxed wandering, but also for more active trip planning.\n\nThe city itself has a polished but still approachable feel. You can spend mornings in the old town, long afternoons by the sea, and evenings in restaurants, waterfront settings, or quieter local neighborhoods. At the same time, the wider Chania region adds much more depth through beaches, nature, village life, and food traditions.\n\nIf you are planning a trip to Crete and want one destination that gives you atmosphere, flexibility, scenery, and a strong sense of place, Chania is one of the best starting points on the island.\n\nPlanning a wider trip around the island? Explore our full [Crete Travel Guide](/destinations/crete) for regional ideas, road trip inspiration, and more places to stay.",
      el: "Τα Χανιά είναι ένας από τους πιο ελκυστικούς και ολοκληρωμένους προορισμούς στην Κρήτη. Συνδυάζουν ένα πανέμορφο ιστορικό κέντρο, ζωντανή ατμόσφαιρα στο λιμάνι, δυνατή γαστρονομική κουλτούρα και εύκολη πρόσβαση σε μερικές από τις πιο διάσημες παραλίες και τοπία του νησιού. Για πολλούς ταξιδιώτες, είναι το πιο εύκολο μέρος για να αγαπήσεις αμέσως στην Κρήτη. Έχει χαρακτήρα, οπτική γοητεία και αρκετή ποικιλία για να λειτουργήσει τόσο ως σύντομη αστική απόδραση όσο και ως ευρύτερη βάση για τη δυτική Κρήτη.\n\nΑυτό που κάνει τα Χανιά ιδιαίτερα ελκυστικά είναι ο τρόπος που ισορροπούν την ομορφιά με την πρακτικότητα. Η παλιά πόλη και το ενετικό λιμάνι δίνουν μια δυνατή πρώτη εντύπωση, αλλά ο προορισμός δεν εξαντλείται στις καρτποσταλικές εικόνες. Λειτουργεί εξαιρετικά ως ορμητήριο. Από εδώ, πολλοί επισκέπτες εξερευνούν παραλίες, ορεινά χωριά, παραθαλάσσιες διαδρομές και μερικά από τα πιο εμβληματικά μέρη της δυτικής Κρήτης. Αυτό κάνει τα Χανιά ιδανικά όχι μόνο για χαλαρές βόλτες, αλλά και για πιο δραστήριο προγραμματισμό.\n\nΗ ίδια η πόλη έχει μια κομψή αλλά φιλική αίσθηση. Μπορείς να περάσεις τα πρωινά σου στην παλιά πόλη, τα απογεύματα δίπλα στη θάλασσα και τα βράδια σε εστιατόρια στο λιμάνι ή σε πιο ήσυχες γειτονιές. Παράλληλα, η ευρύτερη περιοχή των Χανίων προσθέτει βάθος με παραλίες, φύση, ζωή στα χωριά και διατροφικές παραδόσεις.\n\nΑν σχεδιάζεις ταξίδι στην Κρήτη και θέλεις έναν προορισμό που προσφέρει ατμόσφαιρα, ευελιξία, τοπία και έντονο τοπικό χαρακτήρα, τα Χανιά είναι ένα από τα καλύτερα σημεία εκκίνησης.\n\nΣχεδιάζετε ένα ευρύτερο ταξίδι στο νησί; Εξερευνήστε τον πλήρη [Οδηγό Ταξιδιού Κρήτης](/destinations/crete) για ιδέες, έμπνευση για road trips και περισσότερες επιλογές διαμονής."
    },
    pageIncludes: {
      en: ["Why visit Chania", "Best areas to stay", "Top beaches", "Local food guide", "Practical tips & FAQs"],
      el: ["Γιατί να πας στα Χανιά", "Οι καλύτερες περιοχές για διαμονή", "Κορυφαίες παραλίες", "Οδηγός τοπικού φαγητού", "Πρακτικά tips & FAQs"]
    },
    perfectFor: {
      en: ["Couples & Explorers", "City & Beach combination", "Western Crete base", "Food & History lovers"],
      el: ["Ζευγάρια & Εξερευνητές", "Συνδυασμός πόλης & παραλίας", "Βάση για τη δυτική Κρήτη", "Λάτρεις του φαγητού & της ιστορίας"]
    }
  },

  rhodes: {
    overview: {
      en: "Rhodes is one of the most complete and versatile islands in Greece. It combines a remarkable medieval old town, long stretches of coastline, well-developed holiday areas, important historical landmarks, and enough size to give travelers real variety throughout their stay. It is an island that can appeal to very different kinds of visitors at the same time, which is one of its biggest strengths.\n\nFor some travelers, Rhodes is about history and atmosphere. The Old Town is one of the most famous in Greece and gives the island an identity that feels very different from a typical beach destination. For others, the appeal is more practical and holiday-focused: beach resorts, sea views, warm weather, and a destination that is easy to enjoy over several days without feeling repetitive. In reality, Rhodes works best when you see it as both things at once.\n\nThe island has enough scale to support different rhythms. You can spend one day walking through historic streets, another at the beach, another exploring Lindos, and another driving to quieter parts of the island. That makes Rhodes especially useful for travelers who want a destination with more than one dimension.\n\nIf you are planning a Greek island trip and want a destination that offers history, scenery, beaches, and holiday convenience together, Rhodes is one of the strongest choices in the Aegean.\n\nPlanning a wider island-hopping trip? Explore more [Greek island guides](/travel-info/greece-islands-map-guide) on GoGreeceNow for inspiration across the Aegean and Ionian Seas.",
      el: "Η Ρόδος είναι ένα από τα πιο ολοκληρωμένα και πολυδιάστατα νησιά της Ελλάδας. Συνδυάζει μια εκπληκτική μεσαιωνική παλιά πόλη, ατελείωτες ακτογραμμές, άρτια οργανωμένες περιοχές διακοπών, σημαντικά ιστορικά μνημεία και το απαραίτητο μέγεθος για να προσφέρει στους ταξιδιώτες πραγματική ποικιλία. Είναι ένα νησί που μπορεί να προσελκύσει ταυτόχρονα εντελώς διαφορετικούς τύπους επισκεπτών, και αυτό είναι ένα από τα μεγαλύτερα πλεονεκτήματά του.\n\nΓια κάποιους ταξιδιώτες, η Ρόδος σημαίνει ιστορία και ατμόσφαιρα. Η Παλιά Πόλη είναι μια από της διασημότερες στην Ελλάδα και χαρίζει στο νησί μια ταυτότητα πολύ διαφορετική από έναν τυπικό παραθαλάσσιο προορισμό. Για άλλους, η ελκυστικότητά της είναι πιο πρακτική και εστιασμένη στις διακοπές: παραθαλάσσια resorts, θέα στη θάλασσα, ζεστός καιρός και ένας προορισμός που απολαμβάνεις εύκολα για μέρες χωρίς να νιώθεις επανάληψη. Στην πραγματικότητα, η Ρόδος λειτουργεί καλύτερα όταν τη βλέπεις και ως τα δύο ταυτόχρονα.\n\nΤο νησί έχει αρκετό μέγεθος για να υποστηρίξει διαφορετικούς ρυθμούς. Μπορείς να περάσεις μια μέρα περπατώντας σε ιστορικά σοκάκια, μια άλλη στην παραλία, μια τρίτη εξερευνώντας τη Λίνδο και μια επόμενη οδηγώντας σε πιο ήσυχα μέρη του νησιού. Αυτό κάνει τη Ρόδο εξαιρετικά χρήσιμη για ταξιδιώτες που θέλουν έναν προορισμό με περισσότερες από μία διαστάσεις.\n\nΑν σχεδιάζεις ένα ταξίδι στα ελληνικά νησιά και αναζητάς έναν προορισμό που προσφέρει ιστορία, τοπία, παραλίες και ευκολία στις διακοπές, η Ρόδος είναι μια από τις πιο δυνατές επιλογές στο Αιγαίο.\n\nΣχεδιάζετε ένα ευρύτερο ταξίδι island-hopping; Εξερευνήστε περισσότερους [οδηγούς για τα ελληνικά νησιά](/travel-info/greece-islands-map-guide) στο GoGreeceNow για έμπνευση σε Αιγαίο και Ιόνιο."
    },
    pageIncludes: {
      en: ["Why visit Rhodes", "Best areas to stay", "Top beaches", "Local food guide", "Practical tips & FAQs"],
      el: ["Γιατί να πας στη Ρόδο", "Οι καλύτερες περιοχές για διαμονή", "Κορυφαίες παραλίες", "Οδηγός τοπικού φαγητού", "Πρακτικά tips & FAQs"]
    },
    perfectFor: {
      en: ["Couples & Families", "History & Beach combination", "Large-scale island holidays", "Resort convenience & Variety"],
      el: ["Ζευγάρια & Οικογένειες", "Συνδυασμός Ιστορίας & Παραλίας", "Διακοπές σε μεγάλο νησί", "Άνεση resort & Ποικιλία"]
    }
  },

  patmos: {
    overview: {
      en: "Patmos does not announce itself loudly. It is a small island — one of the northernmost in the Dodecanese — without a major airport, without a casino strip, without the infrastructure of mass tourism. What it has instead is something that increasingly few places can offer: a genuine sense of stillness, one that is not manufactured for visitors but has been here for two thousand years.\n\nThis is the island where Saint John the Theologian wrote the Book of Revelation. That fact shapes everything — the architecture, the rhythm of daily life, the kind of traveler who comes here, and the kind of experience they find. Patmos attracts people looking for something more than a beach. They find that, and usually more besides.\n\nThe fortified Monastery of Saint John dominates the hilltop village of Hora like a medieval crown. Below it, Hora's alleys — white walls, bougainvillea, cobblestones worn smooth — are among the most perfectly preserved in the Aegean. Further down, the port of Skala is lively in the evenings and quiet by morning. And around the island, a series of small coves and beaches offer the kind of swimming that requires no adjectives.",
      el: "Η Πάτμος δεν ανακοινώνεται δυνατά. Είναι ένα μικρό νησί — από τα βορειότερα των Δωδεκανήσων — χωρίς μεγάλο αεροδρόμιο, χωρίς καζίνο, χωρίς υποδομές μαζικού τουρισμού. Αυτό που έχει αντίθετα είναι κάτι που όλο και λιγότερα μέρη μπορούν να προσφέρουν: μια γνήσια αίσθηση ηρεμίας, που δεν είναι κατασκευασμένη για επισκέπτες αλλά υπάρχει εδώ για δύο χιλιάδες χρόνια.\n\nΑυτό είναι το νησί όπου ο Άγιος Ιωάννης ο Θεολόγος έγραψε την Αποκάλυψη. Αυτό το γεγονός διαμορφώνει τα πάντα — την αρχιτεκτονική, τον ρυθμό της καθημερινής ζωής, το είδος του ταξιδιώτη που έρχεται εδώ και την εμπειρία που βρίσκει. Η Πάτμος προσελκύει ανθρώπους που αναζητούν κάτι περισσότερο από μια παραλία. Το βρίσκουν, και συνήθως ακόμα περισσότερα.\n\nΗ οχυρωμένη Μονή του Αγίου Ιωάννη δεσπόζει στο λοφοχώρι της Χώρας σαν μεσαιωνικό στέμμα. Από κάτω, τα σοκάκια της Χώρας — λευκοί τοίχοι, μπουκαμβίλιες, λιθόστρωτα που έχουν λειανθεί από τον χρόνο — είναι από τα πιο καλοδιατηρημένα στο Αιγαίο. Πιο κάτω, το λιμάνι της Σκάλας είναι ζωντανό τα βράδια και ήσυχο το πρωί. Και γύρω από το νησί, μια σειρά από μικρούς όρμους και παραλίες προσφέρουν το είδος του κολυμπιού που δεν χρειάζεται επίθετα."
    },
    pageIncludes: {
      en: [
        "Monastery of Saint John & Cave of the Apocalypse",
        "Hora — medieval village walks and views",
        "Beaches: Psili Ammos, Grikos, Lambi and more",
        "Day trip to Lipsi island",
        "Local food, honey and monastery products",
        "Where to stay — Skala, Grikos, Hora"
      ],
      el: [
        "Μονή Αγίου Ιωάννη & Σπήλαιο Αποκάλυψης",
        "Χώρα — μεσαιωνικό χωριό και θέα",
        "Παραλίες: Ψιλή Άμμος, Γρίκος, Λάμπη και άλλες",
        "Ημερήσια εκδρομή στη Λειψοί",
        "Τοπικό φαγητό, μέλι και προϊόντα μονής",
        "Διαμονή — Σκάλα, Γρίκος, Χώρα"
      ]
    },
    perfectFor: {
      en: [
        "Travelers seeking spiritual and cultural depth",
        "Couples wanting a quiet, unspoiled island",
        "History and Byzantine architecture enthusiasts",
        "Island-hoppers combining Dodecanese destinations",
        "Anyone who has had enough of overcrowded Greek islands"
      ],
      el: [
        "Ταξιδιώτες που αναζητούν πνευματικό και πολιτιστικό βάθος",
        "Ζευγάρια που θέλουν ένα ήσυχο, αυθεντικό νησί",
        "Λάτρεις της ιστορίας και της βυζαντινής αρχιτεκτονικής",
        "Ταξιδιώτες των Δωδεκανήσων",
        "Όσους έχουν κουραστεί από τα υπερπλήρη νησιά"
      ]
    }
  },
  monemvasia: {
    overview: {
      en: "Monemvasia is one of the most distinctive destinations in mainland Greece. Built on a massive sea rock and shaped by centuries of history, it feels less like a typical town and more like a place suspended between landscape, architecture, and atmosphere. It is a destination people often remember not because of how much they 'did,' but because of how it felt to be there.\n\nWhat makes Monemvasia special is the setting itself. The stone-built old town, the fortress character, the narrow alleys, and the sea all come together in a way that feels unusually self-contained. It is romantic without trying too hard, historic without becoming dry, and scenic without feeling overproduced. The result is a destination that works especially well for couples, slow travelers, and anyone drawn to places with strong identity.\n\nThis is not the kind of destination that needs a packed schedule. Monemvasia is best enjoyed through walking, staying inside or near the old town, taking in the views, and letting the place unfold gradually. At the same time, it also works as part of a wider Peloponnese road trip, giving travelers one of the most memorable and atmospheric stops in southern Greece.\n\nIf you are looking for a destination with character, history, and one of the most unique settings in the country, Monemvasia easily stands apart.\n\nPlanning a wider trip through southern Greece? Explore more [Peloponnese destinations](/destinations) and travel ideas on GoGreeceNow.",
      el: "Η Μονεμβασιά είναι ένας από τους πιο ξεχωριστούς προορισμούς στην ηπειρωτική Ελλάδα. Χτισμένη πάνω σε έναν τεράστιο βράχο μέσα στη θάλασσα και σμιλεμένη από αιώνες ιστορίας, μοιάζει λιγότερο με τυπική πόλη και περισσότερο με ένα μέρος που αιωρείται ανάμεσα στο τοπίο, την αρχιτεκτονική και την ατμόσφαιρα. Είναι ένας προορισμός που ο κόσμος θυμάται συνήθως όχι για το πόσα 'έκανε' εκεί, αλλά για το πώς ένιωσε.\n\nΑυτό που κάνει τη Μονεμβασιά τόσο ιδιαίτερη είναι το ίδιο της το σκηνικό. Η πετρόχτιστη παλιά πόλη, ο χαρακτήρας του φρουρίου, τα στενά σοκάκια και η θάλασσα ενώνονται με έναν τρόπο που την κάνει να μοιάζει με έναν ξεχωριστό, αυτόνομο κόσμο. Είναι ρομαντική χωρίς να προσπαθεί υπερβολικά, ιστορική χωρίς να γίνεται βαρετή, και γραφική χωρίς να φαίνεται στημένη. Το αποτέλεσμα είναι ένας προορισμός ιδανικός για ζευγάρια, λάτρεις των αργών ταξιδιών και όσους έλκονται από μέρη με ισχυρή ταυτότητα.\n\nΔεν πρόκειται για προορισμό που απαιτεί γεμάτο πρόγραμμα. Η Μονεμβασιά απολαμβάνεται καλύτερα περπατώντας, μένοντας μέσα ή κοντά στην παλιά πόλη, αγναντεύοντας τη θέα και αφήνοντας το μέρος να αποκαλυφθεί σταδιακά. Ταυτόχρονα, λειτουργεί άψογα ως σταθμός σε ένα ευρύτερο road trip στην Πελοπόννησο, προσφέροντας μία από τις πιο αξέχαστες και ατμοσφαιρικές εμπειρίες στη νότια Ελλάδα.\n\nΑν αναζητάτε έναν προορισμό με χαρακτήρα, ιστορία και ένα από τα πιο μοναδικά σκηνικά στη χώρα, η Μονεμβασιά ξεχωρίζει εύκολα.\n\nΣχεδιάζετε ένα ευρύτερο ταξίδι στη νότια Ελλάδα; Εξερευνήστε περισσότερους [προορισμούς στην Πελοπόννησο](/destinations) και ταξιδιωτικές ιδέες στο GoGreeceNow."
    },
    pageIncludes: {
      en: ["Why visit Monemvasia", "Best areas to stay", "Top attractions", "Local food guide", "Practical tips & FAQs"],
      el: ["Γιατί να πας στη Μονεμβασιά", "Οι καλύτερες περιοχές για διαμονή", "Κορυφαία αξιοθέατα", "Οδηγός τοπικού φαγητού", "Πρακτικά tips & FAQs"]
    },
    perfectFor: {
      en: ["Couples & Romantics", "History & Architecture lovers", "Peloponnese Road Trips", "Slow travel escapes"],
      el: ["Ζευγάρια & Ρομαντικοί", "Λάτρεις Ιστορίας & Αρχιτεκτονικής", "Road Trips στην Πελοπόννησο", "Αργά ταξίδια & αποδράσεις"]
    }
  },

  halkidiki: {
    overview: {
      en: "Halkidiki is one of the most popular summer destinations in northern Greece, and for good reason. It combines clear waters, long coastlines, forested landscapes, beach resorts, quieter coves, and a variety of travel styles within one broader region. Unlike a single-island destination or one specific town, Halkidiki is best understood as a collection of different coastal experiences shaped by its famous peninsulas.\n\nWhat makes Halkidiki especially appealing is its flexibility. It can work for families, couples, road-trippers, groups of friends, and travelers looking for either easy beach holidays or more scenic and relaxed stays. Some visitors want lively beach bars, resort atmosphere, and convenience. Others are drawn to calmer bays, greener settings, and a more nature-led summer pace. Halkidiki can support both.\n\nA big part of the destination’s identity comes from the contrast between its areas. Kassandra is usually the busiest and most holiday-driven. Sithonia tends to feel more scenic, more relaxed, and often more beach-focused in a natural sense. The third peninsula has its own distinctive character and spiritual significance, adding another layer to the region even if many travelers experience it more from the outside than as a classic holiday base.\n\nIf you are planning a summer trip in northern Greece, Halkidiki is one of the easiest regions to recommend because it offers variety, sea access, and a strong holiday rhythm without needing to rely on one single town or landmark.\n\nPlanning a wider trip in northern Greece? Explore [Thessaloniki](/destinations/thessaloniki) and more regional travel ideas on GoGreeceNow.",
      el: "Η Χαλκιδική είναι ένας από τους πιο δημοφιλείς καλοκαιρινούς προορισμούς στη βόρεια Ελλάδα, και όχι τυχαία. Συνδυάζει καθαρά νερά, ατελείωτες ακτογραμμές, δασωμένα τοπία, παραθαλάσσια resorts, πιο ήσυχους κολπίσκους και ποικιλία ταξιδιωτικών στυλ μέσα σε μία ευρύτερη περιοχή. Σε αντίθεση με έναν προορισμό που είναι απλώς ένα νησί ή μια συγκεκριμένη πόλη, η Χαλκιδική κατανοείται καλύτερα ως μια συλλογή διαφορετικών παράκτιων εμπειριών, διαμορφωμένων από τις διάσημες χερσονήσους της.\n\nΑυτό που κάνει τη Χαλκιδική ιδιαίτερα ελκυστική είναι η ευελιξία της. Λειτουργεί εξίσου καλά για οικογένειες, ζευγάρια, λάτρεις των road trips, παρέες φίλων και ταξιδιώτες που αναζητούν είτε εύκολες διακοπές στην παραλία είτε πιο γραφικές και χαλαρές αποδράσεις. Κάποιοι επισκέπτες θέλουν ζωντανά beach bars, ατμόσφαιρα resort και ανέσεις. Άλλοι έλκονται από πιο ήρεμους κόλπους, πιο πράσινα τοπία και έναν πιο φυσιολατρικό καλοκαιρινό ρυθμό. Η Χαλκιδική μπορεί να υποστηρίξει και τα δύο.\n\nΜεγάλο μέρος της ταυτότητας του προορισμού προέρχεται από την αντίθεση μεταξύ των περιοχών του. Η Κασσάνδρα είναι συνήθως η πιο πολυσύχναστη και εστιασμένη στη διασκέδαση. Η Σιθωνία τείνει να είναι πιο γραφική, πιο χαλαρή και συχνά πιο προσανατολισμένη στις παραλίες με φυσική έννοια. Η τρίτη χερσόνησος έχει τον δικό της ξεχωριστό χαρακτήρα και πνευματική σημασία, προσθέτοντας ένα επιπλέον επίπεδο στην περιοχή, ακόμα κι αν πολλοί ταξιδιώτες την εμπειρούν περισσότερο εξωτερικά παρά ως κλασική βάση διακοπών.\n\nΑν σχεδιάζετε ένα καλοκαιρινό ταξίδι στη βόρεια Ελλάδα, η Χαλκιδική είναι μία από τις πιο εύκολες περιοχές για να προτείνει κανείς, επειδή προσφέρει ποικιλία, πρόσβαση στη θάλασσα και έντονο ρυθμό διακοπών, χωρίς να εξαρτάται από μία μόνο πόλη ή αξιοθέατο.\n\nΣχεδιάζετε ένα ευρύτερο ταξίδι στη βόρεια Ελλάδα; Εξερευνήστε τη [Θεσσαλονίκη](/destinations/thessaloniki) και περισσότερες ταξιδιωτικές ιδέες στο GoGreeceNow."
    },
    pageIncludes: {
      en: ["Why visit Halkidiki", "Best areas to stay", "Top beaches", "Local food guide", "Practical tips & FAQs"],
      el: ["Γιατί να πας στη Χαλκιδική", "Οι καλύτερες περιοχές για διαμονή", "Κορυφαίες παραλίες", "Οδηγός τοπικού φαγητού", "Πρακτικά tips & FAQs"]
    },
    perfectFor: {
      en: ["Families & Couples", "Summer coastal escapes", "Beach-led travel", "Variety & Peninsula logic"],
      el: ["Οικογένειες & Ζευγάρια", "Καλοκαιρινές παραθαλάσσιες αποδράσεις", "Ταξίδια με επίκεντρο την παραλία", "Ποικιλία & Εξερεύνηση χερσονήσων"]
    }
  },

  meteora: {
    overview: {
      en: "Meteora is one of the most remarkable destinations in Greece and one of the few places that feels truly unlike anything else in the country. Its giant rock pillars, monasteries perched high above the landscape, and the unusual sense of scale make it a destination that stays in memory long after the trip ends. It is not only visually dramatic, but also deeply atmospheric.\n\nWhat makes Meteora special is the way nature, history, and spirituality come together in a single setting. The rock formations alone would make the area worth visiting, but the monasteries give it a cultural and symbolic depth that turns the destination into something much more than a scenic stop. It is a place that can impress first-time visitors instantly, but it also rewards slower travelers who take the time to move through the landscape more carefully.\n\nMeteora works well for different types of travelers. Some come for the views and photography. Others are more interested in the monasteries themselves, the religious history, or the feeling of the place. It is also a very strong mainland stop for travelers building a broader Greece route, especially when combined with northern Greece, Thessaly, or road trips through central mainland areas.\n\nIf you are looking for a destination with strong identity, visual impact, and cultural significance, Meteora is one of the most distinctive places you can visit in Greece.\n\nPlanning a wider mainland Greece route? Explore more [northern and central Greece destinations](/destinations) on GoGreeceNow.",
      el: "Τα Μετέωρα είναι ένας από τους πιο αξιοσημείωτους προορισμούς στην Ελλάδα και ένα από τα λίγα μέρη που μοιάζουν πραγματικά με τίποτα άλλο στη χώρα. Οι γιγάντιοι βράχινοι στύλοι, τα μοναστήρια σκαρφαλωμένα ψηλά πάνω από το τοπίο και η ασυνήθιστη αίσθηση της κλίμακας τα καθιστούν έναν προορισμό που μένει στη μνήμη πολύ καιρό μετά το τέλος του ταξιδιού. Δεν είναι απλώς οπτικά δραματικό, αλλά και βαθιά ατμοσφαιρικό.\n\nΑυτό που κάνει τα Μετέωρα ξεχωριστά είναι ο τρόπος με τον οποίο η φύση, η ιστορία και η πνευματικότητα ενώνονται σε ένα ενιαίο σκηνικό. Και μόνο οι βραχώδεις σχηματισμοί θα έκαναν την περιοχή να αξίζει μια επίσκεψη, αλλά τα μοναστήρια της δίνουν ένα πολιτισμικό και συμβολικό βάθος που μετατρέπει τον προορισμό σε κάτι πολύ περισσότερο από μια γραφική στάση. Είναι ένα μέρος που μπορεί να εντυπωσιάσει τους επισκέπτες από την πρώτη στιγμή, αλλά ανταμείβει επίσης τους πιο αργούς ταξιδιώτες που αφιερώνουν χρόνο για να κινηθούν στο τοπίο πιο προσεκτικά.\n\nΤα Μετέωρα λειτουργούν άψογα για διαφορετικούς τύπους ταξιδιωτών. Ορισμένοι έρχονται για τη θέα και τη φωτογραφία. Άλλοι ενδιαφέρονται περισσότερο για τα ίδια τα μοναστήρια, τη θρησκευτική ιστορία ή την αίσθηση του τόπου. Είναι επίσης ένας πολύ δυνατός σταθμός για ταξιδιώτες που χτίζουν μια ευρύτερη διαδρομή στην ηπειρωτική Ελλάδα, ειδικά όταν συνδυάζεται με τη βόρεια Ελλάδα, τη Θεσσαλία ή road trips στην κεντρική ενδοχώρα.\n\nΑν αναζητάτε έναν προορισμό με ισχυρή ταυτότητα, οπτικό αντίκτυπο και πολιτισμική σημασία, τα Μετέωρα είναι ένα από τα πιο ξεχωριστά μέρη που μπορείτε να επισκεφθείτε στην Ελλάδα.\n\nΣχεδιάζετε μια ευρύτερη διαδρομή στην ηπειρωτική Ελλάδα; Εξερευνήστε περισσότερους [προορισμούς στη βόρεια και κεντρική Ελλάδα](/destinations) στο GoGreeceNow."
    },
    pageIncludes: {
      en: ["Why visit Meteora", "Best areas to stay", "Top attractions", "Local food guide", "Practical tips & FAQs"],
      el: ["Γιατί να πας στα Μετέωρα", "Οι καλύτερες περιοχές για διαμονή", "Κορυφαία αξιοθέατα", "Οδηγός τοπικού φαγητού", "Πρακτικά tips & FAQs"]
    },
    perfectFor: {
      en: ["Landscape & Nature lovers", "Culture & History", "Photography", "Mainland Road Trips"],
      el: ["Λάτρεις του τοπίου & της φύσης", "Πολιτισμός & Ιστορία", "Φωτογραφία", "Road Trips στην ενδοχώρα"]
    }
  },

  parga: {
    overview: {
      en: "Parga is one of the most attractive coastal towns in mainland Greece and one of those places that often surprises travelers with how picturesque and enjoyable it feels in person. Built amphitheatrically above the sea, with colorful houses, a lively waterfront, and a castle overlooking the bay, it combines the atmosphere of an island-style holiday with the practicality of a mainland destination.\n\nWhat makes Parga especially appealing is its balance between beauty and ease. It has enough visual character to feel memorable, but it is also simple to enjoy. You do not need a complicated plan to have a good time here. A walk through town, a swim at the beach, a meal by the water, and an evening under the lights of the promenade are often enough to make the destination feel rewarding. At the same time, Parga can also work as a broader base for exploring parts of the Epirus coast.\n\nFor many travelers, Parga feels more “holiday-ready” than a typical small mainland town. It has a soft Ionian atmosphere, seaside rhythm, and a setting that lends itself naturally to slower summer days. It works especially well for couples, short escapes, summer road trips, and travelers who want a scenic beach destination without needing to board a ferry.\n\nIf you are looking for a Greek destination with beauty, easy beach access, and a relaxed but charming coastal character, Parga is one of the strongest choices on the western mainland.\n\nPlanning a wider trip in western Greece? Explore more [Epirus and coastal mainland destinations](/destinations) on GoGreeceNow.",
      el: "Η Πάργα είναι μία από τις πιο ελκυστικές παραθαλάσσιες πόλεις στην ηπειρωτική Ελλάδα και ένα από εκείνα τα μέρη που συχνά εκπλήσσουν τους ταξιδιώτες με το πόσο γραφικά και ευχάριστα είναι από κοντά. Χτισμένη αμφιθεατρικά πάνω από τη θάλασσα, με πολύχρωμα σπίτια, ζωντανή προκυμαία και ένα κάστρο που αγναντεύει τον κόλπο, συνδυάζει την ατμόσφαιρα των νησιωτικών διακοπών με την πρακτικότητα ενός ηπειρωτικού προορισμού.\n\nΑυτό που κάνει την Πάργα ιδιαίτερα ελκυστική είναι η ισορροπία μεταξύ ομορφιάς και ευκολίας. Διαθέτει αρκετό οπτικό χαρακτήρα για να μείνει αξέχαστη, αλλά είναι επίσης απλή στο να την απολαύσεις. Δεν χρειάζεστε ένα περίπλοκο σχέδιο για να περάσετε καλά εδώ. Μια βόλτα στην πόλη, μια βουτιά στην παραλία, ένα γεύμα δίπλα στο νερό και ένα βράδυ κάτω από τα φώτα του παραλιακού δρόμου είναι συχνά αρκετά για να νιώσετε ότι η επιλογή σας δικαιώθηκε. Παράλληλα, η Πάργα μπορεί να λειτουργήσει ως ευρύτερη βάση για την εξερεύνηση τμημάτων της ακτής της Ηπείρου.\n\nΓια πολλούς ταξιδιώτες, η Πάργα μοιάζει πιο 'έτοιμη για διακοπές' από μια τυπική μικρή πόλη της ηπειρωτικής χώρας. Έχει μια απαλή ατμόσφαιρα Ιονίου, παραθαλάσσιο ρυθμό και ένα σκηνικό που προσφέρεται φυσικά για πιο αργές καλοκαιρινές μέρες. Λειτουργεί ιδιαίτερα καλά για ζευγάρια, σύντομες αποδράσεις, καλοκαιρινά road trips και ταξιδιώτες που θέλουν έναν γραφικό παραθαλάσσιο προορισμό χωρίς να χρειαστεί να μπουν σε πλοίο.\n\nΑν αναζητάτε έναν ελληνικό προορισμό με ομορφιά, εύκολη πρόσβαση στην παραλία και χαλαρό αλλά γοητευτικό παραθαλάσσιο χαρακτήρα, η Πάργα είναι μία από τις πιο δυνατές επιλογές στη δυτική ηπειρωτική Ελλάδα.\n\nΣχεδιάζετε ένα ευρύτερο ταξίδι στη δυτική Ελλάδα; Εξερευνήστε περισσότερους [παραθαλάσσιους προορισμούς στην Ήπειρο](/destinations) στο GoGreeceNow."
    },
    pageIncludes: {
      en: ["Why visit Parga", "Best areas to stay", "Top beaches", "Local food guide", "Practical tips & FAQs"],
      el: ["Γιατί να πας στην Πάργα", "Οι καλύτερες περιοχές για διαμονή", "Κορυφαίες παραλίες", "Οδηγός τοπικού φαγητού", "Πρακτικά tips & FAQs"]
    },
    perfectFor: {
      en: ["Couples & Romantics", "Seaside escapes", "Beach-led travel", "Mainland convenience"],
      el: ["Ζευγάρια & Ρομαντικοί", "Παραθαλάσσιες αποδράσεις", "Ταξίδια με επίκεντρο την παραλία", "Άνεση ηπειρωτικής χώρας"]
    }
  },

  delphi: {
    overview: {
      en: "Delphi is one of the most important historic destinations in Greece and one of the few places in the country where landscape and meaning feel so closely connected. Built on the slopes of Mount Parnassus and overlooking a dramatic valley, it offers much more than an archaeological visit. It is a destination shaped by symbolism, setting, and the feeling that the place still carries weight far beyond its physical remains.\n\nFor many travelers, Delphi is known first as the home of the ancient oracle and one of the great sacred sites of the classical world. But what makes it especially memorable is not only its historical importance. It is also the setting itself: the mountain backdrop, the changing light, the sense of elevation, and the way the ruins seem naturally tied to the broader landscape. It is one of those places where the environment strengthens the history.\n\nDelphi works particularly well for travelers interested in culture, archaeology, mainland Greece routes, and meaningful short stays. It may not have the broad leisure appeal of a beach destination, but it offers something different and deeper. For many visitors, even a short stop here becomes one of the most memorable parts of a wider trip through Greece.\n\nIf you are looking for a destination with historical significance, striking scenery, and a strong sense of place, Delphi remains one of the most rewarding mainland stops in the country.\n\nPlanning a wider mainland Greece route? Explore more [cultural and scenic escapes](/destinations) on GoGreeceNow.",
      el: "Οι Δελφοί είναι ένας από τους σημαντικότερους ιστορικούς προορισμούς στην Ελλάδα και ένα από τα λίγα μέρη στη χώρα όπου το τοπίο και το νόημα μοιάζουν τόσο στενά συνδεδεμένα. Χτισμένοι στις πλαγιές του Παρνασσού με θέα σε μια εντυπωσιακή κοιλάδα, προσφέρουν πολύ περισσότερα από μια απλή αρχαιολογική επίσκεψη. Είναι ένας προορισμός διαμορφωμένος από τον συμβολισμό, το σκηνικό και την αίσθηση ότι ο τόπος εξακολουθεί να φέρει ένα ειδικό βάρος, πολύ πέρα από τα φυσικά του κατάλοιπα.\n\nΓια πολλούς ταξιδιώτες, οι Δελφοί είναι γνωστοί κυρίως ως η έδρα του αρχαίου μαντείου και ένας από τους μεγάλους ιερούς τόπους του κλασικού κόσμου. Αλλά αυτό που τους κάνει ιδιαίτερα αξέχαστους δεν είναι μόνο η ιστορική τους σημασία. Είναι το ίδιο το σκηνικό: το ορεινό φόντο, το φως που αλλάζει, η αίσθηση του υψομέτρου και ο τρόπος που τα ερείπια μοιάζουν φυσικά δεμένα με το ευρύτερο τοπίο. Είναι από εκείνα τα μέρη όπου το περιβάλλον ενισχύει την ιστορία.\n\nΟι Δελφοί λειτουργούν ιδιαίτερα καλά για ταξιδιώτες που ενδιαφέρονται για τον πολιτισμό, την αρχαιολογία, τις διαδρομές στην ηπειρωτική Ελλάδα και τις ουσιαστικές σύντομες διαμονές. Μπορεί να μην έχουν την ευρεία απήχηση αναψυχής ενός παραθαλάσσιου προορισμού, αλλά προσφέρουν κάτι διαφορετικό και πιο βαθύ. Για πολλούς επισκέπτες, ακόμα και μια σύντομη στάση εδώ γίνεται ένα από τα πιο αξέχαστα κομμάτια ενός ευρύτερου ταξιδιού στην Ελλάδα.\n\nΑν αναζητάτε έναν προορισμό με ιστορική σημασία, εντυπωσιακό τοπίο και έντονη αίσθηση του τόπου, οι Δελφοί παραμένουν ένας από τους πιο ικανοποιητικούς σταθμούς στην ηπειρωτική χώρα.\n\nΣχεδιάζετε μια ευρύτερη διαδρομή στην ηπειρωτική Ελλάδα; Εξερευνήστε περισσότερες [πολιτιστικές και γραφικές αποδράσεις](/destinations) στο GoGreeceNow."
    },
    pageIncludes: {
      en: ["Why visit Delphi", "Best areas to stay", "Top attractions", "Local food guide", "Practical tips & FAQs"],
      el: ["Γιατί να πας στους Δελφούς", "Οι καλύτερες περιοχές για διαμονή", "Κορυφαία αξιοθέατα", "Οδηγός τοπικού φαγητού", "Πρακτικά tips & FAQs"]
    },
    perfectFor: {
      en: ["Culture & Archaeology", "Mainland Routes", "Historical Stops", "Mountain Scenery"],
      el: ["Πολιτισμός & Αρχαιολογία", "Διαδρομές Ηπειρωτικής Ελλάδας", "Ιστορικές Στάσεις", "Ορεινά Τοπία"]
    }
  },

  patras: {
    overview: {
      en: "Patras is not an island. It does not have the postcard geometry that drives most Greek travel decisions. What it has is something rarer and more useful: it is a genuine city that functions as the perfect base for one of the richest clusters of destinations in the entire country.\n\nGreece's third-largest city sits at the western edge of the Peloponnese, where the Gulf of Patras opens toward the Ionian Sea. The Rio–Antirrio bridge — one of the longest cable-stayed bridges in the world — connects it to central Greece in a few minutes. The port connects it to Italy, the Ionian Islands and Cephalonia by overnight ferry. And the road network radiating from it leads, within two hours in any direction, to Ancient Olympia, Delphi, the rack-railway town of Kalavrita, the beautiful Aigialeia coast, the historic bay of Nafpaktos, the wetlands and Venetian walls of Messolonghi, and the long sandy beaches of Ilia.\n\nThe city itself is worth time before the day trips begin. The Byzantine castle sits above the old town on a hill with views over the gulf to the mountains of Aetolia-Acarnania. The seafront is long, lively and genuinely Patra-ine in character — a city that moves to its own rhythm and does not perform for visitors. And every February or March, for three weeks, the whole world discovers what Patras already knew: its Carnival is one of the great popular festivals in Europe.",
      el: "Η Πάτρα δεν είναι νησί. Δεν έχει την γεωμετρία καρτ ποστάλ που καθορίζει τις περισσότερες ταξιδιωτικές αποφάσεις. Αυτό που έχει είναι κάτι πιο σπάνιο και χρήσιμο: είναι μια γνήσια πόλη που λειτουργεί ως τέλεια βάση για ένα από τα πλουσιότερα συμπλέγματα προορισμών σε ολόκληρη τη χώρα.\n\nΗ τρίτη μεγαλύτερη πόλη της Ελλάδας βρίσκεται στο δυτικό άκρο της Πελοποννήσου, εκεί που ο Πατραϊκός Κόλπος ανοίγει προς το Ιόνιο Πέλαγος. Η γέφυρα Ρίου–Αντιρρίου τη συνδέει με την κεντρική Ελλάδα. Το λιμάνι τη συνδέει με την Ιταλία, τα Ιόνια Νησιά και την Κεφαλονιά. Το οδικό δίκτυο οδηγεί, μέσα σε δύο ώρες, σε Αρχαία Ολυμπία, Δελφούς, Καλάβρυτα, Αιγιάλεια, Ναύπακτο, Μεσολόγγι και τις παραλίες της Ηλείας."
    },
    pageIncludes: {
      en: [
        "Patras city — castle, cathedral, Carnival, Odeum",
        "Ancient Olympia (1h 15min) — full day trip guide",
        "Delphi (2h) — day trip via Rio–Antirrio",
        "Kalavrita & rack railway (1h 15min)",
        "Aigialeia coast, Nafpaktos, Messolonghi",
        "Beaches of Ilia & Kaiafas",
        "Local food — avgotaraho, loukoumades, fresh fish",
        "Where to stay — Patras city, Olympia village, Aigialeia coast"
      ],
      el: [
        "Πάτρα — κάστρο, καθεδρικός, Καρναβάλι, Ωδείο",
        "Αρχαία Ολυμπία (1h 15min)",
        "Δελφοί (2h) — μέσω Ρίου–Αντιρρίου",
        "Καλάβρυτα & οδοντωτός (1h 15min)",
        "Αιγιάλεια, Ναύπακτος, Μεσολόγγι",
        "Παραλίες Ηλείας & Καϊάφας",
        "Τοπικό φαγητό — αυγοτάραχο, λουκουμάδες, ψάρι",
        "Διαμονή — Πάτρα, Ολυμπία, Αιγιάλεια"
      ]
    },
    perfectFor: {
      en: [
        "History and archaeology travelers",
        "Families combining culture and beach",
        "Road trip and driving holiday itineraries",
        "Carnival season visits",
        "Travelers entering Greece from Italy by ferry",
        "Anyone wanting a real Greek city alongside the ancient sites"
      ],
      el: [
        "Ταξιδιώτες ιστορίας και αρχαιολογίας",
        "Οικογένειες που συνδυάζουν πολιτισμό και θάλασσα",
        "Road trips",
        "Επισκέπτες του Καρναβαλιού",
        "Ταξιδιώτες που έρχονται από Ιταλία",
        "Όσους θέλουν μια αληθινή ελληνική πόλη"
      ]
    }
  },
  lemnos: {
    overview: {
      en: "Lemnos is the North Aegean's best kept secret — and one of Greece's most rewarding islands for travellers who know what they're looking for. It is large, unhurried, and genuinely itself. The landscape is unlike the typical Greek island postcard: broad plains and golden hills rolling down to the sea, wide sandy bays with shallow turquoise water, volcanic outcrops, reed beds, and a horizon that feels enormous. The capital, Myrina, has one of the finest harbour towns in the Aegean — a neoclassical seafront, a Byzantine-Genoese castle perched above the sea, and a long beach that begins where the main square ends. Lemnos has almost no mass tourism and has not been shaped by it. The tavernas serve food that reflects the local land and sea. The villages are genuinely inhabited. The beaches — and there are dozens of them — are rarely crowded even in summer. Mythologically, this is the island of Hephaestus, god of fire and the forge. Archaeologically, it holds Poliochni — one of the oldest urban settlements in Europe.",
      el: "Η Λήμνος είναι το καλύτερα κρυμμένο μυστικό του Βορείου Αιγαίου — και ένα από τα πιο ανταποδοτικά νησιά της Ελλάδας για ταξιδιώτες που ξέρουν τι ψάχνουν. Το τοπίο δεν μοιάζει με την τυπική καρτ ποστάλ: κάμποι και χρυσοί λόφοι που κατηφορίζουν στη θάλασσα, αμμώδεις όρμοι με ρηχά νερά, ηφαιστειακά πετρώματα. Η Μύρινα έχει ένα από τα ωραιότερα λιμάνια του Αιγαίου — νεοκλασικό παραλιακό μέτωπο, βυζαντινό-γενουατικό κάστρο. Η Λήμνος δεν έχει μαζικό τουρισμό. Οι ταβέρνες σερβίρουν τοπικό φαγητό, τα χωριά είναι ζωντανά, οι παραλίες σπάνια γεμάτες. Μυθολογικά, είναι το νησί του Ηφαίστου. Αρχαιολογικά, έχει την Πολιόχνη — έναν από τους αρχαιότερους οικισμούς της Ευρώπης."
    },
    pageIncludes: {
      en: [
        "Myrina Old Town, harbour & Castle",
        "Poliochni, Hephaestia & the Kabeiroi Sanctuary",
        "Best beaches: Keros, Gomati, Thanos, Plati",
        "Kalathaki cheese, Muscat wine & local food",
        "Villages: Kontias, Plati, Kontopouli",
        "Wetlands, dunes & birdwatching at Katalako",
        "How to get there, when to go, practical tips"
      ],
      el: [
        "Μύρινα — Παλιά Πόλη, λιμάνι & Κάστρο",
        "Πολιόχνη, Ηφαιστία & Ιερό Καβείρων",
        "Καλύτερες παραλίες: Κέρος, Γομάτι, Θάνος, Πλατύ",
        "Καλαθάκι Λήμνου, Μοσχάτο & τοπικό φαγητό",
        "Χωριά: Κοντιάς, Πλατύ, Κοντοπούλι",
        "Υγρότοποι, αμμοθίνες & πουλιά στο Κατάλακο",
        "Πρακτικές συμβουλές & μετακίνηση"
      ]
    },
    perfectFor: {
      en: [
        "Beach lovers seeking space and sand without crowds",
        "Food and wine travellers (Kalathaki, Muscat, fresh fish)",
        "History and archaeology enthusiasts",
        "Slow travel and authentic island experiences",
        "Kitesurfing and watersports (Keros Beach)",
        "Birdwatching and nature lovers"
      ],
      el: [
        "Λάτρεις παραλιών χωρίς πολυκοσμία",
        "Ταξιδιώτες γαστρονομίας και κρασιού",
        "Λάτρεις ιστορίας και αρχαιολογίας",
        "Slow travel και αυθεντικές νησιωτικές εμπειρίες",
        "Kitesurfing (παραλία Κέρος)",
        "Παρατήρηση πουλιών και φύση"
      ]
    }
  },
  kalamata: {
    overview: {
      en: "Kalamata is the city that the Peloponnese doesn't shout about enough. It sits at the head of the Messenian Gulf — a long, graceful arc of coastline between the mountains of Taygetos to the east and the fertile plain to the west. The city is modern, well-organized, and genuinely liveable. It has a proper Old Town with Byzantine history, a waterfront that invites an evening walk, a beach that stretches for kilometres right in the city centre, and one of the best regional cuisines in southern Greece. But Kalamata is also — and this is key — the gateway to one of the most extraordinary landscapes in the entire country. Within an hour you can stand on the wild tip of the Mani peninsula, swim off a deserted bay in Pylos, or dine at Costa Navarino. Within ninety minutes you can be at the ruins of Ancient Messene or on the Byzantine cliffs of Mystras. This is a destination with real depth.",
      el: "Η Καλαμάτα είναι η πόλη που η Πελοπόννησος δεν διαφημίζει αρκετά. Βρίσκεται στην κορυφή του Μεσσηνιακού Κόλπου — μια μακριά, χαριτωμένη ακτογραμμή ανάμεσα στα βουνά του Ταϋγέτου στα ανατολικά και την εύφορη πεδιάδα στα δυτικά. Η πόλη είναι μοντέρνα, καλά οργανωμένη και πραγματικά φιλόξενη. Έχει μια αυθεντική Παλιά Πόλη με βυζαντινή ιστορία, ένα παραλιακό μέτωπο που σε καλεί για βραδινό περίπατο και μία από τις καλύτερες τοπικές κουζίνες στη νότια Ελλάδα. Αλλά η Καλαμάτα είναι επίσης — και αυτό είναι το κλειδί — η πύλη για μερικά από τα πιο εντυπωσιακά τοπία της χώρας. Σε μία ώρα μπορείς να βρεθείς στην άγρια Μάνη, να κολυμπήσεις σε έναν έρημο όρμο στην Πύλο ή να δειπνήσεις στο Costa Navarino. Σε ενενήντα λεπτά μπορείς να είσαι στα ερείπια της Αρχαίας Μεσσήνης ή στα βυζαντινά γκρεμότοιχα του Μυστρά."
    },
    pageIncludes: {
      en: [
        "Kalamata Old Town & Byzantine Castle",
        "Waterfront, marina & city beach",
        "Local food — olives, olive oil, seafood, Sfela cheese",
        "Costa Navarino & Voidokilia Beach",
        "Pylos & the Bay of Navarino",
        "Mani Peninsula — Kardamyli, Deep Mani, Cape Tenaro",
        "Ancient Messene & Mystras (UNESCO)"
      ],
      el: [
        "Παλιά Πόλη & Βυζαντινό Κάστρο Καλαμάτας",
        "Παραλιακό μέτωπο, μαρίνα & παραλία",
        "Τοπικό φαγητό — ελιές, ελαιόλαδο, θαλασσινά, σφέλα",
        "Costa Navarino & Παραλία Βοϊδοκοιλιά",
        "Πύλος & Κόλπος Ναβαρίνου",
        "Μάνη — Καρδαμύλη, Βαθιά, Ακρωτήριο Ταίναρο",
        "Αρχαία Μεσσήνη & Μυστράς (UNESCO)"
      ]
    },
    perfectFor: {
      en: [
        "Couples and romantic Peloponnese escapes",
        "Food and olive oil lovers",
        "History and archaeology enthusiasts",
        "Families seeking beach + culture",
        "Road trip travellers in southern Greece",
        "Slow travel and nature seekers"
      ],
      el: [
        "Ζευγάρια και ρομαντικές αποδράσεις",
        "Λάτρεις του φαγητού και του ελαιολάδου",
        "Λάτρεις της ιστορίας και της αρχαιολογίας",
        "Οικογένειες που θέλουν θάλασσα + πολιτισμό",
        "Road trips στη νότια Ελλάδα",
        "Slow travel και φύση"
      ]
    }
  },
  thassos: {
    overview: {
      en: "Thassos is the kind of island that makes people come back. Not for one dramatic feature, but for everything together: the way pine trees grow to the edge of the sea, the white marble beaches that glow from the water, the mountain villages with kafenia that haven't changed in decades, the ancient ruins embedded into a functioning modern town. Greece's northernmost island is also, by most measures, its greenest — and that contrast between emerald mountain and Aegean blue is what defines it. The island sits close to the coast of Kavala and Eastern Macedonia, which gives it a character that feels different from the southern Aegean. The water here is exceptional — consistently rated among the clearest in the Mediterranean, owing to the marble substrate along much of the coastline. Thassos is also, significantly, an accessible island. The ferry from Kavala takes under an hour.",
      el: "Η Θάσος είναι το είδος του νησιού που κάνει τους ανθρώπους να επιστρέφουν. Όχι για ένα εντυπωσιακό χαρακτηριστικό, αλλά για όλα μαζί: ο τρόπος που τα πεύκα φτάνουν ως την άκρη της θάλασσας, οι λευκές μαρμάρινες παραλίες, τα ορεινά χωριά με καφενεία που δεν έχουν αλλάξει εδώ και δεκαετίες, τα αρχαία ερείπια ενταγμένα σε μια ζωντανή σύγχρονη πόλη. Το βορειότερο νησί της Ελλάδας είναι και το πιο πράσινο. Το νησί βρίσκεται κοντά στην ακτή της Καβάλας και της Ανατολικής Μακεδονίας. Το νερό εδώ είναι εξαιρετικό — σταθερά μεταξύ των πιο καθαρών στη Μεσόγειο. Το πλοίο από την Καβάλα διαρκεί λιγότερο από μία ώρα.",
    },
    pageIncludes: {
      en: [
        "Why visit Thassos — Greece's greenest island",
        "Best time to go — month by month",
        "Top beaches: Marble Beach, Golden Beach, Aliki, Giola",
        "Mountain villages: Theologos, Kastro, Kazaviti",
        "Ancient Thassos — agora, theatre, walls",
        "Local food: honey, smoked meats, mushrooms",
        "Getting there, getting around & practical tips",
        "FAQ — everything else you need to know",
      ],
      el: [
        "Γιατί να επισκεφθείς τη Θάσο",
        "Καλύτερη εποχή για επίσκεψη",
        "Οι καλύτερες παραλίες: Μαρμάρινη, Χρυσή Αμμουδιά, Αλυκή, Γκιόλα",
        "Ορεινά χωριά: Θεολόγος, Κάστρο, Καζαβίτι",
        "Αρχαία Θάσος — αγορά, θέατρο, τείχη",
        "Τοπικό φαγητό: μέλι, αλλαντικά, μανιτάρια",
        "Πώς θα πας & θα μετακινηθείς",
        "Συχνές Ερωτήσεις",
      ],
    },
    perfectFor: {
      en: [
        "Beach lovers seeking variety and clarity",
        "Families wanting space and organised shores",
        "History and archaeology enthusiasts",
        "Food and nature travellers (honey, mushrooms, village food)",
        "Couples seeking a quieter, more forested island",
        "Hikers and active travellers",
      ],
      el: [
        "Λάτρεις των παραλιών που θέλουν ποικιλία",
        "Οικογένειες που θέλουν χώρο και οργανωμένες ακτές",
        "Λάτρεις της ιστορίας και αρχαιολογίας",
        "Ταξιδιώτες γαστρονομίας και φύσης",
        "Ζευγάρια που αναζητούν ένα πιο ήσυχο, δασωμένο νησί",
        "Πεζοπόρους και δραστήριους ταξιδιώτες",
      ],
    },
  },
  skiathos: {
    overview: {
      en: "Skiathos is the greenest island in the Aegean — a place where pine forests meet turquoise water, creating a landscape that is distinctly different from the white-washed Cyclades. With 65 beaches ranging from the pine-fringed perfection of Koukounaries to the secluded white pebbles of Lalaria, a dramatic abandoned Kastro perched on a northern cliff, and one of the most unexpectedly vibrant nightlife scenes in the Sporades, Skiathos delivers variety on a small scale. This guide covers the beaches, the history, the food, boat trips, and the practical details that make a trip here genuinely rewarding.",
      el: "Η Σκιάθος είναι το πιο πράσινο νησί του Αιγαίου — ένα μέρος όπου τα πεύκα συναντούν τα τιρκουάζ νερά, δημιουργώντας ένα τοπίο εντελώς διαφορετικό από τις ασβεστωμένες Κυκλάδες. Με 65 παραλίες, ένα επιβλητικό εγκαταλελειμμένο Κάστρο, και μία απροσδόκητα ζωντανή νυχτερινή ζωή, η Σκιάθος προσφέρει ποικιλία σε μικρή κλίμακα. Αυτός ο οδηγός καλύπτει παραλίες, ιστορία, φαγητό, εκδρομές με σκάφος και πρακτικές λεπτομέρειες.",
    },
    pageIncludes: {
      en: [
        "Why visit Skiathos — the honest case",
        "Best time to go — month by month",
        "Top beaches: Koukounaries, Lalaria, Kastro & more",
        "Kastro, Evangelistria & hidden attractions",
        "Food, nightlife & where to eat",
        "4-day itinerary for Skiathos",
        "Getting there, getting around & practical tips",
        "FAQ — everything else you need to know",
      ],
      el: [
        "Γιατί να επισκεφθείς τη Σκιάθο",
        "Καλύτερη εποχή για επίσκεψη",
        "Οι καλύτερες παραλίες",
        "Κάστρο, Ευαγγελίστρια & κρυμμένα αξιοθέατα",
        "Φαγητό & νυχτερινή ζωή",
        "Πρόγραμμα 4 ημερών",
        "Πώς θα πας & θα μετακινηθείς",
        "Συχνές Ερωτήσεις",
      ],
    },
    perfectFor: {
      en: [
        "Beach lovers who want variety",
        "Nature and green landscape seekers",
        "Young travellers and nightlife enthusiasts",
        "Island-hoppers in the Sporades",
        "Anyone tired of the Cyclades aesthetic",
      ],
      el: [
        "Λάτρεις των παραλιών που θέλουν ποικιλία",
        "Φυσιολάτρες και φίλους του πράσινου",
        "Νέους ταξιδιώτες και λάτρεις της νυχτερινής ζωής",
        "Ταξιδιώτες που κάνουν island hopping στις Σποράδες",
        "Όσους έχουν βαρεθεί την κυκλαδίτικη αισθητική",
      ],
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Skiathos has a serious overtourism problem in August relative to its size. 49 km² receiving tens of thousands of visitors in a single month creates real pressure on infrastructure, prices and atmosphere. The locals are warm and welcoming — but if you come in August and find the island 'too commercial,' the honest answer is: come back in September.",
        el: "Αυτό που δε σου λέει κανείς: Η Σκιάθος έχει σοβαρό πρόβλημα υπερτουρισμού τον Αύγουστο σε σχέση με το μέγεθός της. 49 km² που δέχονται δεκάδες χιλιάδες επισκέπτες σε έναν μήνα δημιουργούν πίεση στις υποδομές, τις τιμές και την ατμόσφαιρα. Οι ντόπιοι είναι φιλόξενοι — αλλά αν έρθεις Αύγουστο και βρεις το νησί 'πολύ εμπορευματοποιημένο,' η ειλικρινής απάντηση είναι: έλα τον Σεπτέμβριο."
      },
      items: {
        en: [
          "Skiathos in the first two weeks of August — unless you have booked everything months ahead and do not mind crowds. It is a completely different island than June or September.",
          "The 'party boat' excursions — loud, generic, expensive. A simple water taxi to Tsougrias is better value and much quieter.",
          "Hiring a car for a day trip — the island is too small and parking in town is a disaster. A scooter or the bus covers everything more effectively.",
          "Expecting a 'typical Cyclades' aesthetic — Skiathos is green, forested and architecturally different. If you want white cubic houses and caldera views, this is not your island."
        ],
        el: [
          "✕ Σκιάθος τις πρώτες δύο εβδομάδες του Αυγούστου — εκτός αν έχεις κλείσει τα πάντα μήνες πριν και δεν σε πειράζει το πλήθος. Είναι εντελώς διαφορετικό νησί από τον Ιούνιο ή τον Σεπτέμβριο.",
          "✕ Οι εκδρομές με 'party boat' — δυνατά, γενικά, ακριβά. Ένα απλό water taxi στο Τσουγκριά είναι καλύτερη αξία και πολύ πιο ήσυχο.",
          "✕ Ενοικίαση αυτοκινήτου για ημερήσια εκδρομή — το νησί είναι πολύ μικρό και το παρκάρισμα στην πόλη είναι χάος. Ένα σκούτερ ή το λεωφορείο καλύπτουν τα πάντα πιο αποτελεσματικά.",
          "✕ Το να περιμένεις 'κυκλαδίτικη' αισθητική — η Σκιάθος είναι πράσινη, δασωμένη και αρχιτεκτονικά διαφορετική. Αν θες άσπρα κυβικά σπίτια και θέα καλντέρας, αυτό δεν είναι το νησί σου."
        ]
      }
    },
  },
  ikaria: {
    overview: {
      en: "Ikaria is one of the world's five Blue Zones, studied extensively by longevity researchers from around the world. What makes it extraordinary is not a single secret but a combination of factors that reinforce each other over a lifetime: a traditional diet rich in legumes, olive oil and wild herbs; mountainous terrain that makes daily walking unavoidable; a social culture organized around shared meals, dancing at panigiri festivals, and unhurried conversation; long sleep including afternoon naps; and a genuine cultural indifference to punctuality that reduces chronic time-stress. Ikaria does not perform its distinctiveness — it simply continues at its own pace, and that pace turns out to be remarkably good for living long.",
      el: "Η Ικαρία είναι μία από τις πέντε Μπλε Ζώνες του κόσμου. Αυτό που την κάνει εξαιρετική δεν είναι ένα μυστικό αλλά ένας συνδυασμός παραγόντων: παραδοσιακή διατροφή πλούσια σε όσπρια, ελαιόλαδο και άγρια χόρτα, ορεινό έδαφος που κάνει το καθημερινό περπάτημα αναπόφευκτο, κοινωνική κουλτούρα γύρω από κοινά γεύματα και χορό, μεσημεριανός ύπνος, και μια γνήσια πολιτισμική αδιαφορία για την ώρα που μειώνει το άγχος."
    },
    pageIncludes: {
      en: [
        "What makes Ikaria a Blue Zone — the research explained",
        "The Ikarian approach to longevity: diet, terrain, social life, rest",
        "Complete guide to villages, beaches and the panigiri festival",
        "Getting to Ikaria (ferry and flight options)",
        "Where to stay — area-by-area recommendations",
        "Best time to visit for festivals, swimming or solitude",
      ],
      el: [
        "Τι κάνει την Ικαρία Μπλε Ζώνη — η έρευνα εξηγείται",
        "Η ικαριώτικη προσέγγιση στη μακροζωία",
        "Πλήρης οδηγός για χωριά, παραλίες και πανηγύρια",
        "Πώς να φτάσεις στην Ικαρία",
        "Πού να μείνεις — προτάσεις ανά περιοχή",
        "Καλύτερη εποχή για πανηγύρια, μπάνιο ή ησυχία",
      ],
    },
    perfectFor: {
      en: [
        "Travellers curious about the Blue Zone phenomenon",
        "Hikers and walkers who want mountainous terrain and stone paths",
        "Food lovers seeking authentic, regional Greek cuisine",
        "Festival-goers who want to experience a genuine panigiri",
        "Anyone tired of the curated Greek island experience",
      ],
      el: [
        "Ταξιδιώτες που θέλουν να ζήσουν τη Μπλε Ζώνη",
        "Λάτρεις της πεζοπορίας και των ορεινών μονοπατιών",
        "Λάτρεις του φαγητού που ψάχνουν αυθεντική κουζίνα",
        "Λάτρεις των φεστιβάλ για ένα γνήσιο πανηγύρι",
        "Όσους έχει κουράσει η τουριστική εμπειρία των νησιών",
      ],
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Know Before You Go", el: "Ειλικρινής Συμβουλή — Τι να Γνωρίζετε Πριν Πάτε" },
      alert: {
        en: "What nobody tells you: Ikaria requires patience. The road system is narrow and winding. The bus service runs on a schedule that is best described as aspirational. The ferry takes 8–10 hours from Athens. But every person who has struggled with these logistics and stayed long enough will tell you the same thing: the island changes you. Come prepared for difficulty, stay for the transformation.",
        el: "Αυτό που δε σου λέει κανείς: Η Ικαρία απαιτεί υπομονή. Οι δρόμοι είναι στενοί και στριφογυριστοί. Το πλοίο κάνει 8–10 ώρες. Αλλά όλοι όσοι έχουν ταλαιπωρηθεί με τη μετακίνηση και έμειναν αρκετό καιρό θα σου πουν το ίδιο: το νησί σε αλλάζει. Έλα προετοιμασμένος για ταλαιπωρία, μείνε για τη μεταμόρφωση."
      },
      items: {
        en: [
          "Expecting quick, organized logistics — Ikaria runs on \"island time\" and nothing happens quickly",
          "Limited nightlife — there is no Mykonos-style club scene. Evenings are for conversation, food and rest",
          "Santorini-style luxury resorts — Ikaria has no international hotel chains. Accommodation is simple and family-run",
          "Beach clubs and water sports — Ikaria's beaches are natural and undeveloped. The trade-off is extraordinary beauty and solitude",
        ],
        el: [
          "✕ Να περιμένεις γρήγορη, οργανωμένη μετακίνηση — η Ικαρία λειτουργεί με \"νησιώτικο χρόνο\"",
          "✕ Νυχτερινή ζωή — δεν υπάρχει club σκηνή. Τα βράδια είναι για συζήτηση, φαγητό και ξεκούραση",
          "✕ Πολυτελή θέρετρα — η Ικαρία δεν έχει διεθνείς αλυσίδες ξενοδοχείων. Η διαμονή είναι απλή",
          "✕ Beach clubs — οι παραλίες είναι φυσικές και αναξιοποίητες. Ο συμβιβασμός δίνει εξαιρετική ομορφιά και ησυχία",
        ],
      },
    },
  },
};