import type { Localized, LocalizedList } from "./content";

export type ExperienceLanding = {
  slug: string;
  title: Localized;
  description: Localized;
  overview: Localized;
  highlights: LocalizedList;
  highlightReasons: LocalizedList;
  image?: string;
};

export type ExperienceBusiness = {
  slug: string;
  landingSlug: string;
  name: string;
  category: Localized;
  place: string;
  info: Localized;
  image: string;
  href: string;
  badge?: string;
  overview: Localized;
  highlights: LocalizedList;
  perfectFor: LocalizedList;
  ctaLabel: Localized;
  phone?: string;
  email?: string;
  website?: string;
  youtube?: string;
  description?: Localized;
  services?: LocalizedList;
  routes?: LocalizedList;
  galleryCount?: number;
  story?: Localized;
  practicalInfo?: LocalizedList;
  mapQuery?: string;
  mapIframe?: string;
  galleryImages?: string[];
};

export const experienceLandings: ExperienceLanding[] = [
  {
    slug: "kefalonia-tours",
    title: {
      en: "Recommended Local Experiences in Kefalonia",
      el: "Προτεινόμενες Τοπικές Εμπειρίες στην Κεφαλονιά",
    },
    description: {
      en: "Kefalonia is an island of dramatic landscapes and crystal-clear waters, offering everything from world-famous beach boat trips to local food experiences and hidden gems. On this page, we feature selected local businesses and additional tours to help you explore the best of the Ionian's largest island.",
      el: "Η Κεφαλονιά είναι ένα νησί με εντυπωσιακά τοπία και κρυστάλλινα νερά, προσφέροντας τα πάντα, από παγκοσμίου φήμης boat trips μέχρι τοπικές γαστρονομικές εμπειρίες και κρυμμένα διαμάντια. Σε αυτή τη σελίδα, παρουσιάζουμε επιλεγμένες τοπικές επιχειρήσεις και επιπλέον εκδρομές για να ανακαλύψετε τα καλύτερα του μεγαλύτερου νησιού του Ιονίου.",
    },
    overview: {
      en: "This page is designed as a curated guide to local experiences in Kefalonia. Instead of focusing only on general inspiration, it is built to feature real businesses, tours, and visitor-friendly experiences that bring travelers closer to the island's culture and natural beauty.",
      el: "Αυτή η σελίδα έχει σχεδιαστεί ως curated οδηγός τοπικών εμπειριών στην Κεφαλονιά. Αντί να εστιάζει μόνο σε γενική ταξιδιωτική έμπνευση, είναι φτιαγμένη για να προβάλλει πραγματικές επιχειρήσεις, εκδρομές και εμπειρίες που φέρνουν τον ταξιδιώτη πιο κοντά στον πολιτισμό και τη φυσική ομορφιά του νησιού.",
    },
    highlights: {
      en: [
        "Featured local businesses",
        "Tours, taxis & boat trips",
        "Curated options for visitors",
        "A practical way to plan",
      ],
      el: [
        "Featured τοπικές επιχειρήσεις",
        "Εκδρομές, ταξί & boat trips",
        "Επιλεγμένες επιλογές για επισκέπτες",
        "Πρακτική οργάνωση ταξιδιού",
      ],
    },
    highlightReasons: {
      en: [
        "We handpick real, operating businesses that rely on quality service instead of just generic tourist traps.",
        "From road transfers to sea explorations, find the exact local service you need.",
        "Carefully selected options ensuring you get the most authentic side of Kefalonia.",
        "Save time by browsing clear, structured information before you even arrive.",
      ],
      el: [
        "Επιλέγουμε πραγματικές επιχειρήσεις που βασίζονται στην ποιοτική εξυπηρέτηση και όχι σε τουριστικές παγίδες.",
        "Από οδικές μεταφορές μέχρι εξερευνήσεις στη θάλασσα, βρες την ιδανική τοπική υπηρεσία.",
        "Προσεκτικά επιλεγμένες προτάσεις για να ζήσεις την πιο αυθεντική πλευρά της Κεφαλονιάς.",
        "Γλιτώστε χρόνο συγκεντρώνοντας ξεκάθαρες πληροφορίες πριν καν φτάσετε στο νησί.",
      ],
    },
  },
  {
    slug: "lesvos-tours",
    title: {
      en: "Recommended Local Experiences in Lesvos",
      el: "Προτεινόμενες Τοπικές Εμπειρίες στη Λέσβο",
    },
    description: {
      en: "Lesvos is a land of authentic tradition and rich history, famous for its olive oil, ouzo, and unique culinary heritage. On this page, we feature selected local producers and experiences along with additional activities to help you discover the true soul of the North Aegean.",
      el: "Η Λέσβος είναι ένας τόπος αυθεντικής παράδοσης και πλούσιας ιστορίας, φημισμένος για το ελαιόλαδο, το ούζο και τη μοναδική γαστρονομική του κληρονομιά. Σε αυτή τη σελίδα, παρουσιάζουμε επιλεγμένους τοπικούς παραγωγούς και εμπειρίες μαζί με επιπλέον δραστηριότητες για να ανακαλύψετε την αληθινή ψυχή του Βορείου Αιγαίου.",
    },
    overview: {
      en: "This page is designed as a curated guide to local experiences in Lesvos. Instead of focusing only on general inspiration, it is built to feature real businesses and visitor-friendly experiences that bring travelers closer to the island’s culture, food and local identity.",
      el: "Αυτή η σελίδα έχει σχεδιαστεί ως curated οδηγός τοπικών εμπειριών στη Λέσβο. Αντί να εστιάζει μόνο σε γενική ταξιδιωτική έμπνευση, είναι φτιαγμένη για να προβάλλει πραγματικές επιχειρήσεις και εμπειρίες για επισκέπτες που φέρνουν τον ταξιδιώτη πιο κοντά στον πολιτισμό, τις γεύσεις και την τοπική ταυτότητα του νησιού.",
    },
    highlights: {
      en: [
        "Featured local businesses",
        "Authentic food and culture",
        "Visitor-friendly experiences",
        "A practical way to plan your stay",
      ],
      el: [
        "Featured τοπικές επιχειρήσεις",
        "Αυθεντικό φαγητό και πολιτισμός",
        "Εμπειρίες για επισκέπτες",
        "Πρακτικός τρόπος οργάνωσης",
      ],
    },
    highlightReasons: {
      en: [
        "We support local entrepreneurs who sustain the true heritage of Lesvos.",
        "Taste traditional recipes and immerse yourself in centuries-old practices.",
        "Activities designed with the modern traveler in mind, easy to join and access.",
        "An organized hub so you don't miss out on what makes this island special.",
      ],
      el: [
        "Στηρίζουμε τοπικούς επιχειρηματίες που διατηρούν την αληθινή κληρονομιά της Λέσβου.",
        "Δοκίμασε παραδοσιακές συνταγές και βίωσε πρακτικές αιώνων.",
        "Δραστηριότητες σχεδιασμένες για τον σύγχρονο ταξιδιώτη, εύκολες στη συμμετοχή.",
        "Ένας οργανωμένος κόμβος για να μη χάσεις όσα κάνουν αυτό το νησί ξεχωριστό.",
      ],
    },
    image: "/images/lesvos-goods-v2.webp",
  },
  {
    slug: "crete-tours",
    title: {
      en: "Recommended Local Experiences in Crete",
      el: "Προτεινόμενες Τοπικές Εμπειρίες στην Κρήτη",
    },
    description: {
      en: "Crete is one of Greece’s most diverse destinations, offering everything from boat trips and food experiences to cultural tours and outdoor adventures. On this page, we feature selected local experiences along with additional tours and activities to help you plan your trip more easily.",
      el: "Η Κρήτη είναι ένας από τους πιο ποικιλόμορφους προορισμούς της Ελλάδας, προσφέροντας τα πάντα, από boat trips και γαστρονομικές εμπειρίες μέχρι πολιτιστικές περιηγήσεις και υπαίθριες δραστηριότητες. Σε αυτή τη σελίδα, παρουσιάζουμε επιλεγμένες τοπικές εμπειρίες μαζί με επιπλέον εκδρομές και δραστηριότητες για να οργανώσετε το ταξίδι σας πιο εύκολα.",
    },
    overview: {
      en: "This page is designed as a curated guide to local experiences in Crete. Instead of presenting only broad travel inspiration, it highlights businesses and services that help visitors enjoy the island in a richer, more direct and more practical way.",
      el: "Αυτή η σελίδα έχει σχεδιαστεί ως curated οδηγός τοπικών εμπειριών στην Κρήτη. Αντί να παρουσιάζει μόνο γενική ταξιδιωτική έμπνευση, αναδεικνύει επιχειρήσεις και υπηρεσίες που βοηθούν τον επισκέπτη να απολαύσει το νησί με πιο πλούσιο, άμεσο και πρακτικό τρόπο.",
    },
    highlights: {
      en: [
        "Featured local businesses",
        "Food, culture and coastline",
        "Curated options for visitors",
        "A more practical planning page",
      ],
      el: [
        "Featured τοπικές επιχειρήσεις",
        "Γεύση, πολιτισμός και ακτογραμμή",
        "Επιλεγμένες επιλογές για επισκέπτες",
        "Πιο πρακτική σελίδα οργάνωσης",
      ],
    },
    highlightReasons: {
      en: [
        "Showcasing Cretan hospitality through reliable, top-rated local operators.",
        "From mountain villages to pristine beaches, discover the breadth of Crete.",
        "Skip the endless searching and find highly recommended activities instantly.",
        "Plan your days properly and secure your spots in popular local experiences.",
      ],
      el: [
        "Αναδεικνύουμε την Κρητική φιλοξενία μέσα από αξιόπιστους τοπικούς επαγγελματίες.",
        "Από ορεινά χωριά μέχρι απάτητες παραλίες, ανακάλυψε τον πλούτο της Κρήτης.",
        "Δώσε τέλος στην ατελείωτη αναζήτηση και βρες άμεσα τις καλύτερες δραστηριότητες.",
        "Οργάνωσε σωστά τις μέρες σου και εξασφάλισε τη θέση σου σε κορυφαίες εμπειρίες.",
      ],
    },
    image: "/images/tours/crete-tours.webp",
  },
];

export const experienceBusinesses: ExperienceBusiness[] = [
  {
    slug: "iren-rooms",
    landingSlug: "lesvos-tours",
    name: "Iren Rooms",
    category: {
      en: "Accommodation",
      el: "Διαμονή",
    },
    place: "Κομνηνάκη 41, Μυτιλήνη 811 00",
    info: {
      en: "Discover top-rated accommodation in Lesvos, offering authentic hospitality and comfortable rooms.",
      el: "Ανακαλύψτε κορυφαία διαμονή στη Λέσβο, που προσφέρει αυθεντική φιλοξενία και άνετα δωμάτια.",
    },
    image: "/images/businesses/Iren/dsc-0752.webp",
    href: "/businesses/iren-rooms",
    mapQuery: "Iren Rooms Lesvos",
    overview: {
      en: "Iren Rooms is an exceptional local business providing a peaceful setting, comfortable amenities, and the warm hospitality Lesvos is famous for.",
      el: "Το Iren Rooms είναι μια εξαιρετική τοπική επιχείρηση που προσφέρει γαλήνιο περιβάλλον, άνετες παροχές και τη ζεστή φιλοξενία για την οποία φημίζεται η Λέσβος.",
    },
    description: {
      en: "Iren Rooms is a stately 3 star mansion, with warm welcoming environment, located in the heart of Mitilini at the port, just 250 meters from the point where the ships dock and in the middle of the historical centre of the town.\n\nAll the rooms have private bathroom, air condition, TV, refrigerator, hair dryer, kettle, coffee, tea, sugar, milk and mineral water.\n\nLooking forward to hosting you.",
      el: "Το Iren Rooms είναι ένα αρχοντικό 3 αστέρων, με ζεστό και φιλόξενο περιβάλλον, το οποίο βρίσκεται στην καρδιά της Μυτιλήνης στο λιμάνι, μόλις 250 μέτρα από το σημείο όπου δένουν τα πλοία και στη μέση του ιστορικού κέντρου της πόλης.\n\nΌλα τα δωμάτια διαθέτουν ιδιωτικό μπάνιο, κλιματισμό, τηλεόραση, ψυγείο, πιστολάκι μαλλιών, βραστήρα, καφέ, τσάι, ζάχαρη, γάλα και εμφιαλωμένο νερό.\n\nΑνυπομονούμε να σας φιλοξενήσουμε.",
    },
    highlights: {
      en: ["Comfortable beds & nice views", "Peaceful & authentic environment", "Local Lesvian hospitality", "Close to top beaches & villages", "Free WiFi access", "Ideal starting point for road trips"],
      el: ["Άνετα κρεβάτια & ωραία θέα", "Ήσυχο & αυθεντικό περιβάλλον", "Τοπική λεσβιακή φιλοξενία", "Κοντά σε κορυφαίες παραλίες", "Δωρεάν WiFi", "Ιδανική αφετηρία για εξορμήσεις"],
    },
    services: {
      en: ["Spacious and beautifully decorated rooms", "Daily room freshness and cleaning", "Air conditioning for hot summer days", "Local tips and guidance from the hosts", "Relaxing garden/outdoor areas"],
      el: ["Ευρύχωρα και όμορφα διακοσμημένα δωμάτια", "Καθημερινή φροντίδα και καθαριότητα", "Κλιματισμός για τις ζεστές μέρες", "Τοπικές συμβουλές και καθοδήγηση από τους οικοδεσπότες", "Χαλαρωτικοί εξωτερικοί χώροι/κήπος"],
    },
    story: {
      en: "Built with passion for true Greek hospitality, Iren Rooms serves as the ultimate retreat in Lesvos.",
      el: "Χτισμένο με μεράκι για την αληθινή ελληνική φιλοξενία, το Iren Rooms αποτελεί το απόλυτο καταφύγιο στη Λέσβο.",
    },
    practicalInfo: {
      en: ["Check-in usually in the afternoon; communicate your arrival time", "Highly recommended to rent a car to explore the surrounding Lesvos island", "Book early during July and August as availability gets limited"],
      el: ["Το check-in γίνεται συνήθως το απόγευμα· ενημερώστε για την ώρα άφιξης", "Συνιστάται ιδιαίτερα η ενοικίαση αυτοκινήτου για την εξερεύνηση της Λέσβου", "Κάντε κράτηση νωρίς για Ιούλιο και Αύγουστο λόγω υψηλής ζήτησης"],
    },
    routes: {
      en: ["Mytilene Center", "Mytilene City Break", "Exploring Lesvos"],
      el: ["Κέντρο Μυτιλήνης", "Απόδραση στη Μυτιλήνη", "Εξορμήσεις στη Λέσβο"],
    },
    perfectFor: {
      en: ["Couples looking for a romantic escape", "Families wanting a calm environment", "Travelers seeking authentic Greek hospitality", "Those exploring Lesvos on a road trip"],
      el: ["Ζευγάρια που αναζητούν ρομαντική απόδραση", "Οικογένειες που θέλουν ήρεμο περιβάλλον", "Ταξιδιώτες που επιζητούν αυθεντική ελληνική φιλοξενία", "Όσους εξερευνούν τη Λέσβο με αυτοκίνητο"],
    },
    ctaLabel: {
      en: "Book your stay",
      el: "Κάντε κράτηση",
    },
    phone: "6977353672",
    email: "",
    website: "",
    galleryImages: [
      "/images/businesses/Iren/4.webp",
      "/images/businesses/Iren/5.webp",
      "/images/businesses/Iren/6.webp",
      "/images/businesses/Iren/7.webp",
      "/images/businesses/Iren/8.webp",
      "/images/businesses/Iren/dsc-0620.webp",
      "/images/businesses/Iren/dsc-0636.webp",
      "/images/businesses/Iren/dsc-0669.webp",
      "/images/businesses/Iren/dsc-0671.webp",
      "/images/businesses/Iren/dsc-0698.webp",
      "/images/businesses/Iren/dsc-0718.webp",
      "/images/businesses/Iren/dsc-0752.webp",
      "/images/businesses/Iren/dsc-0757.webp",
      "/images/businesses/Iren/f10.webp",
      "/images/businesses/Iren/ireneok.webp",
      "/images/businesses/Iren/unnamed (1).webp",
      "/images/businesses/Iren/unnamed (2).webp",
      "/images/businesses/Iren/unnamed (3).webp",
      "/images/businesses/Iren/unnamed (4).webp",
      "/images/businesses/Iren/unnamed (5).webp",
      "/images/businesses/Iren/unnamed (6).webp",
      "/images/businesses/Iren/unnamed (7).webp",
      "/images/businesses/Iren/3.webp"
    ],
    mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.0263330769176!2d26.556568776352858!3d39.10587063437584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba6709b0b785ef%3A0x5550bbe9b3d42544!2sIren%20Rooms!5e0!3m2!1sel!2sgr!4v1775805404970!5m2!1sel!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
  slug: "rolling-into-the-blue",
  landingSlug: "kefalonia-tours",
  name: "Rolling Into The Blue",
  category: {
    en: "Boat rental & boat trips",
    el: "Ενοικίαση σκάφους / boat trips",
  },
  place: "Zola, near Myrtos, Kefalonia",
  info: {
    en: "A starting point for one of the most beautiful sea experiences in northern Kefalonia, with no-license boat rentals and private cruises with skipper from the small port of Zola near Agia Kyriaki.",
    el: "Αφετηρία για μία από τις πιο όμορφες θαλάσσιες εμπειρίες στη βόρεια Κεφαλονιά, με ενοικίαση σκαφών χωρίς άδεια και ιδιωτικές κρουαζιέρες με skipper από το λιμανάκι της Ζόλας, κοντά στην Αγία Κυριακή.",
  },
  image: "/images/businesses/rolling-into-the-blue/14.webp",
  href: "/businesses/rolling-into-the-blue",
  badge: "Featured",
  galleryCount: 15,
  mapQuery: "Rolling Into The Blue Zola port Agia Kyriaki Kefalonia Greece",
  overview: {
    en: "Rolling Into The Blue operates from the small port of Zola, next to Agia Kyriaki beach in Kefalonia, and offers two main options: small motorboats without a license for visitors who want freedom on the water, and private cruises with skipper for guests who prefer a more relaxed and guided experience. From here, you can reach beautiful coves and beaches that are not easily accessible by road, including Fteri, Blue Lagoon, Kamari, Amidi, and parts of the wider Myrtos bay coastline.",
    el: "Το Rolling Into The Blue δραστηριοποιείται στο λιμανάκι της Ζόλας, δίπλα στην παραλία της Αγίας Κυριακής στην Κεφαλονιά, και προσφέρει δύο βασικές επιλογές: μικρά μηχανοκίνητα σκάφη χωρίς άδεια για όσους θέλουν ελευθερία στη θάλασσα και ιδιωτικές κρουαζιέρες με skipper για όσους προτιμούν μία πιο άνετη και καθοδηγούμενη εμπειρία. Από εδώ μπορείς να προσεγγίσεις υπέροχους κολπίσκους και παραλίες που δεν είναι εύκολα προσβάσιμες οδικώς, όπως το Fteri, η Blue Lagoon, το Kamari, το Amidi και σημεία της ευρύτερης ακτογραμμής του κόλπου του Μύρτου.",
  },
  description: {
  en: "One of the best starting points for a beautiful sea experience in northern Kefalonia. Rolling Into The Blue operates from the small port of Zola next to Agia Kyriaki beach and offers either small no-license motorboat rentals or private cruises with skipper. From here, you set off for coves with no road access: Fteri, Blue Lagoon, Kamari, Amidi, and even the wider Myrtos bay coastline — all in waters that remain clear, calm and unspoiled. If you want comfort, choose a private cruise with captain; if you want freedom, become the 'captain' of a boat up to 30 hp, with no license required, and follow their guidance for safe routes.",
  el: "Αφετηρία για μια από τις πιο όμορφες θαλάσσιες εμπειρίες της βόρειας Κεφαλονιάς. Το Rolling Into The Blue δρα στο λιμανάκι των Ζολών δίπλα στην παραλία Αγία Κυριακή και προσφέρει είτε ενοικίαση μικρών μηχανοκίνητων σκαφών χωρίς άδεια είτε ιδιωτικές κρουαζιέρες με skipper. Από εδώ ξεκινάς για κολπίσκους που δεν πάνε με δρόμο: Fteri, Blue Lagoon, Kamari, Amidi, μέχρι και τον κόλπο του Μύρτου — όλα σε νερά που παραμένουν αγνά και ήσυχα. Αν θες άνεση, διάλεξε ιδιωτική κρουαζιέρα με καπετάνιο· αν θες ελευθερία, γίνε «καπετάνιος» σε σκάφος έως 30 hp, χωρίς δίπλωμα, και ακολούθησε τις οδηγίες τους για ασφαλείς διαδρομές.",
},
  highlights: {
    en: [
      "No-license boats up to about 30 hp",
      "Private cruises with skipper",
      "Fteri, Blue Lagoon, Kamari, and Amidi",
      "Departure from Zola near Myrtos",
    ],
    el: [
      "Σκάφη χωρίς άδεια έως περίπου 30 hp",
      "Ιδιωτικές κρουαζιέρες με skipper",
      "Fteri, Blue Lagoon, Kamari και Amidi",
      "Αναχώρηση από τη Ζόλα κοντά στον Μύρτο",
    ],
  },
  services: {
  en: [
    "No-license boats up to about 30 hp for self-guided trips to Fteri, Blue Lagoon, Kamari, Amidi and other beaches accessible only by sea",
    "Private cruises with skipper, usually lasting around 4–5 hours",
    "Morning cruises around 10:00–15:00",
    "Afternoon and sunset cruises around 17:00–20:30",
    "Homemade snacks, water and lemonade",
    "Snorkeling masks and Bluetooth music on board",
  ],
  el: [
    "Σκάφη χωρίς άδεια έως περίπου 30 hp για να πας μόνος/η σε Fteri, Blue Lagoon, Kamari, Amidi και άλλες παραλίες προσβάσιμες μόνο δια θαλάσσης",
    "Ιδιωτικές κρουαζιέρες με skipper, συνήθως διάρκειας περίπου 4–5 ωρών",
    "Πρωινές κρουαζιέρες περίπου 10:00–15:00",
    "Απογευματινές και sunset κρουαζιέρες περίπου 17:00–20:30",
    "Σπιτικά σνακ, νερά και λεμονάδες",
    "Μάσκες snorkeling και Bluetooth μουσική στο σκάφος",
  ],
},
story: {
  en: "The business operates as a local base under the identity “Rolling Into The Blue — Kefalonian Rent Boats & Cruises”, with Zola port as its departure point. Its website, video presence and local listings consistently present the same core experience: private cruises or no-license boat rentals towards the hidden coves and beaches of the wider Myrtos coastline.",
  el: "Η επιχείρηση λειτουργεί ως τοπική βάση «Rolling Into The Blue — Kefalonian Rent Boats & Cruises» με σημείο εκκίνησης το Zola port. Η παρουσία της στο site της, στο βίντεο και σε τοπικούς οδηγούς προβάλλει σταθερά την ίδια εμπειρία: ιδιωτικές βόλτες ή ενοικίαση χωρίς άδεια προς τις κρυφές ακτές και παραλίες του ευρύτερου Μύρτου.",
},
practicalInfo: {
  en: [
    "No license is required in Greece for motorboats up to 30 hp; above 30 hp you need a license or a skipper",
    "A safety briefing is given before departure; follow weather and distance guidance and keep a safe distance from rocks and caves",
    "Ask in advance whether fuel is included and what applies for deposits or damage terms",
    "Bring a hat, sunscreen, extra water or snacks, a waterproof pouch and sea shoes",
    "Demand is high from June to September, so booking early is strongly recommended",
  ],
  el: [
    "Στην Ελλάδα δεν απαιτείται δίπλωμα για μηχανοκίνητα έως 30 hp· πάνω από 30 hp χρειάζεται δίπλωμα ή skipper",
    "Γίνεται briefing ασφάλειας πριν την αναχώρηση· ακολούθησε τις οδηγίες για καιρό και αποστάσεις και κράτα ασφαλή απόσταση από βράχια και σπηλιές",
    "Ρώτησε εκ των προτέρων αν η τιμή περιλαμβάνει καύσιμα και τι ισχύει για εγγύηση ή ζημιές",
    "Πάρε μαζί σου καπέλο, αντηλιακό, extra νερό ή σνακ, στεγανή θήκη και παπούτσια θαλάσσης",
    "Η ζήτηση είναι υψηλή από Ιούνιο έως Σεπτέμβριο, οπότε καλό είναι να κλείσεις έγκαιρα",
  ],
},
  routes: {
    en: [
      "Fteri",
      "Blue Lagoon",
      "Kamari",
      "Amidi",
      "Wider Myrtos bay coastline",
    ],
    el: [
      "Fteri",
      "Blue Lagoon",
      "Kamari",
      "Amidi",
      "Ευρύτερη ακτογραμμή του κόλπου του Μύρτου",
    ],
  },
  perfectFor: {
    en: [
      "Couples, families, and small groups",
      "Visitors who want freedom at sea",
      "Travelers looking for hidden beaches",
      "Guests who prefer private boat experiences",
    ],
    el: [
      "Ζευγάρια, οικογένειες και μικρές παρέες",
      "Επισκέπτες που θέλουν ελευθερία στη θάλασσα",
      "Ταξιδιώτες που αναζητούν κρυφές παραλίες",
      "Επισκέπτες που προτιμούν ιδιωτικές εμπειρίες με σκάφος",
    ],
  },
  ctaLabel: {
    en: "Visit Website",
    el: "Επισκεφθείτε την ιστοσελίδα",
  },
  phone: "+306984331377",
  email: "deepbluemarine23@gmail.com",
  website: "https://www.facebook.com/profile.php?id=100090475029196",
  youtube: "https://www.youtube.com/watch?v=gBbpOTZjDgE&t=6s",
  galleryImages: [
    "/images/businesses/rolling-into-the-blue/11.webp",
    "/images/businesses/rolling-into-the-blue/1.webp",
    "/images/businesses/rolling-into-the-blue/2.webp",
    "/images/businesses/rolling-into-the-blue/3.webp",
    "/images/businesses/rolling-into-the-blue/4.webp",
    "/images/businesses/rolling-into-the-blue/5.webp",
    "/images/businesses/rolling-into-the-blue/6.webp",
    "/images/businesses/rolling-into-the-blue/7.webp",
    "/images/businesses/rolling-into-the-blue/8.webp",
    "/images/businesses/rolling-into-the-blue/9.webp",
    "/images/businesses/rolling-into-the-blue/10.webp",
    "/images/businesses/rolling-into-the-blue/12.webp",
    "/images/businesses/rolling-into-the-blue/13.webp",
    "/images/businesses/rolling-into-the-blue/14.webp",
    "/images/businesses/rolling-into-the-blue/15.webp",
  ],
},
  {
    slug: "taxi-express-patras",
    landingSlug: "getting-around-greece",
    name: "Ταξί Express Πάτρας",
    category: {
      en: "Taxi & Transfers",
      el: "Ταξί / Μεταφορές",
    },
    place: "Patras, Achaia",
    info: {
      en: "24/7 taxi services in Patras and western Greece. Fast, reliable transfers with a modern fleet and VIP options. You can book by phone or easily through their Mr Booky app.",
      el: "24/7 υπηρεσίες ταξί στην Πάτρα. Γρήγορες, αξιόπιστες μετακινήσεις με σύγχρονο στόλο και VIP επιλογές. Μπορείς να κλείσεις τηλεφωνικά ή μέσω της εφαρμογής Mr Booky.",
    },
    image: "/images/businesses/taxi-express-patras/taxi-express.webp",
    href: "/businesses/taxi-express-patras",
    badge: "24/7",
    overview: {
      en: "Taxi Express Patras offers reliable, 24/7 taxi services covering Patras and key transport hubs like Araxos Airport, the port of Patras, KTEL buses, and the train station. They provide instant phone support and online bookings via their innovative Mr Booky app.",
      el: "Το Ράδιο Ταξί Express Πάτρας προσφέρει αξιόπιστες υπηρεσίες ταξί 24/7 στην πόλη της Πάτρας. Καλύπτει μεταφορές από/προς το Αεροδρόμιο Αράξου, λιμάνι, ΚΤΕΛ και ΟΣΕ, ενώ διαθέτει την καινοτόμα εφαρμογή Mr Booky (Web & App) για εύκολη εύρεση ταξί από το κινητό σας.",
    },
    description: {
      en: "Need a ride in Patras? Taxi Express Patras operates around the clock with a fleet of 170 vehicles ensuring immediate response. Whether you need a transfer to Araxos Airport, a ride from the port of Patras across Greece, or a targeted transfer to hospitals or malls, they have you covered. Use their phone line or their quick digital app 'Mr Booky' for a seamless experience.",
      el: "Χρειάζεσαι ταξί στην Πάτρα? Το Ταξί Express Πάτρας λειτουργεί όλο το 24ωρο με ένα στόλο 170 οχημάτων εξασφαλίζοντας άμεση ανταπόκριση. Είτε χρειάζεσαι μεταφορά στο Αεροδρόμιο Αράξου, είτε από το λιμάνι της Πάτρας για όλη την Ελλάδα, καλύπτουν κάθε ανάγκη σου. Κάλεσε στο 2610 450000 ή χρησιμοποίησε την εφαρμογή 'Mr Booky' για έξυπνη κράτηση.",
    },
    highlights: {
      en: [
        "24/7 availability with 170 vehicles",
        "Transfers to Araxos Airport & Patras Port",
        "Online booking via Mr Booky app",
        "VIP services, pet cages & child seats",
      ],
      el: [
        "24/7 διαθεσιμότητα με 170 οχήματα",
        "Μεταφορές σε Αεροδρόμιο Αράξου & Λιμάνι Πάτρας",
        "Online κράτηση μέσω του Mr Booky app",
        "VIP υπηρεσίες, κλουβιά κατοικίδιων & παιδικά καθίσματα",
      ],
    },
    services: {
      en: [
        "Direct transportation in the center of Patras",
        "Transfers from/to Araxos Airport and Patras Port",
        "Transfers to KTEL bus station and OSE trains",
        "VIP appointments and Night Taxi",
        "Provision of pet cages and child seats",
        "Digital app bookings (Mr Booky)",
      ],
      el: [
        "Άμεση μετακίνηση στο κέντρο της Πάτρας",
        "Μεταφορές από/προς Αεροδρόμιο Αράξου και Λιμάνι της Πάτρας",
        "Μεταφορές προς ΚΤΕΛ Πάτρας και ΟΣΕ",
        "VIP ραντεβού και Night Taxi",
        "Παροχή παιδικών καθισμάτων & κλουβιών κατοικίδιων",
        "Ψηφιακές υπηρεσίες και κλήση μέσω Mr Booky",
      ],
    },
    story: {
      en: "Driving innovation in urban transport, Taxi Express Patras recently shifted to a 'phygital' revolution introducing AI assistants and modern applications to a traditional taxi service.",
      el: "Οδηγώντας την καινοτομία στις αστικές μεταφορές, το Ταξί Express Πάτρας έχει περάσει στη 'phygital' εποχή, συνδυάζοντας την άμεση εξυπηρέτηση ενός μεγάλου στόλου με AI βοηθούς (Mr Booky) και εξελιγμένες εφαρμογές.",
    },
    practicalInfo: {
      en: [
        "Call directly at 2610 450000 for instant response anywhere in Patras",
        "App bookings allow tracing the driver via map live",
        "Excursions to places like Delphi, Ancient Olympia available upon arrangement",
      ],
      el: [
        "Καλέστε στο 2610 450000 24 ώρες το 24ωρο για άμεση εξυπηρέτηση",
        "Με την εφαρμογή τους (Mr Booky) βλέπετε το ταξί στον χάρτη live",
        "Διατίθενται μονοήμερες εκδρομές (π.χ. Αρχαία Ολυμπία, Δελφοί)",
      ],
    },
    routes: {
      en: [
        "Araxos Airport",
        "Patras Port",
        "Patras City Center & Hospitals",
        "Ancient Olympia & Delphi (excursions)",
      ],
      el: [
        "Αεροδρόμιο Αράξου",
        "Λιμάνι Πάτρας",
        "Κέντρο Πάτρας & Νοσοκομεία",
        "Αρχαία Ολυμπία & Δελφοί (εκδρομές)",
      ],
    },
    perfectFor: {
      en: [
        "Travelers needing airport/port transfers",
        "Locals and students in Patras",
        "Visitors planning day trips from Patras",
        "Business travelers",
      ],
      el: [
        "Ταξιδιώτες για αεροδρόμιο/λιμάνι",
        "Ντόπιους και φοιτητές στην Πάτρα",
        "Επισκέπτες που κάνουν μονοήμερες εκδρομές",
        "Επαγγελματίες",
      ],
    },
    ctaLabel: {
      en: "Visit Website",
      el: "Επισκεφθείτε την ιστοσελίδα",
    },
    phone: "+302610450000",
    email: "info@taxiexpresspatras.gr",
    website: "https://taxiexpresspatras.gr/",
    youtube: "",
    galleryCount: 0,
    mapQuery: "Ταξί Express Πάτρας 450000",
  },
  {
    slug: "papadellis-olive-oil",
    landingSlug: "lesvos-tours",
    name: "Papadellis Olive Oil",
    category: {
      en: "Local Products / Olive Oil",
      el: "Τοπικά Προϊόντα / Ελαιόλαδο",
    },
    place: "Loutropoli Thermis, Lesvos",
    info: {
      en: "A family-owned business in Lesvos producing high-quality extra virgin olive oils (like the premium Sapfo), nutritious olives, and natural olive oil soaps, maintaining the island's authentic tradition.",
      el: "Οικογενειακή επιχείρηση στη Λέσβο που παράγει υψηλής ποιότητας εξαιρετικό παρθένο ελαιόλαδο (όπως το premium Sapfo), θρεπτικές ελιές και φυσικά σαπούνια, διατηρώντας την αυθεντική παράδοση του νησιού.",
    },
    image: "/images/businesses/papadellis/papadellis.webp",
    href: "/businesses/papadellis-olive-oil",
    badge: "Local Producer",
    overview: {
      en: "Papadellis Olive Oil is a local producer based in Loutropoli Thermis, on the island of Lesvos. With deep respect for the area's centuries-old olive oil heritage, the Papadellis family crafts premium extra virgin olive oils, table olives, and naturally formulated soaps using traditional methods. Their distinctive products act as true ambassadors of the Mediterranean diet and the fertile Lesvian land.",
      el: "Η Papadellis Olive Oil είναι μια τοπική επιχείρηση στη Λουτρόπολη Θέρμης, στη Λέσβο. Με βαθύ σεβασμό στη μακραίωνη ελαιοκομική παράδοση της περιοχής, η οικογένεια Παπαδέλλη δημιουργεί εξαιρετικά παρθένα ελαιόλαδα, επιτραπέζιες ελιές και φυσικά σαπούνια. Τα ξεχωριστά προϊόντα τους αποτελούν πραγματικούς πρεσβευτές της Μεσογειακής διατροφής και της εύφορης λεσβιακής γης.",
    },
    description: {
      en: "Discover the authentic taste of Lesvos with Papadellis Olive Oil. Operating from Loutropoli Thermis, the business produces exceptional extra virgin olive oils, starring the acclaimed 'Sapfo' brand. Beyond olive oil, they offer nutrient-rich table olives harvested directly from their privately-owned groves and purely natural olive oil soaps that are perfect for gentle skin care. A true encapsulation of the tradition and rich aromas generously offered by the island.",
      el: "Ανακαλύψτε την αυθεντική γεύση της Λέσβου μέσα από την Papadellis Olive Oil. Με έδρα τη Λουτρόπολη Θέρμης, η επιχείρηση παράγει εξαιρετικό παρθένο ελαιόλαδο, με πρωταγωνιστή τη φημισμένη σειρά 'Sapfo'. Πέρα από το ελαιόλαδο, προσφέρουν υψηλής διατροφικής αξίας ελιές από τους ιδιόκτητους ελαιώνες τους και απολύτως φυσικά σαπούνια ελαιολάδου, ιδανικά για την περιποίηση του δέρματος. Μια ολοκληρωμένη εμπειρία παράδοσης και αρωμάτων που χαρίζει η λεσβιακή γη.",
    },
    highlights: {
      en: [
        "Premium Extra Virgin Olive Oils",
        "Nutrient-rich table olives",
        "Natural olive oil soaps",
        "Directly from privately-owned groves",
      ],
      el: [
        "Premium Εξαιρετικό Παρθένο Ελαιόλαδο",
        "Θρεπτικές επιτραπέζιες ελιές",
        "Φυσικά σαπούνια ελαιολάδου",
        "Απευθείας από ιδιόκτητους ελαιώνες",
      ],
    },
    services: {
      en: [
        "Extra Virgin Olive Oils (Sapfo, Alkeos, Imerti)",
        "Olives cultivated via natural processes",
        "Olive oil soaps for face and body care",
        "Options for B2B and HO.RE.CA",
      ],
      el: [
        "Εξαιρετικά Παρθένα Ελαιόλαδα (Sapfo, Αλκαίος, Ιμερτή)",
        "Ελιές που καλλιεργούνται με φυσικές διαδικασίες",
        "Σαπούνια ελαιολάδου για πρόσωπο και σώμα",
        "Επιλογές για επιχειρήσεις B2B και HO.RE.CA",
      ],
    },
    story: {
      en: "Firmly rooted in Loutropoli Thermis on the island of Lesvos, the Papadellis family has been passionately cultivating olive trees and producing olive oil, eager to share the unique characteristics and benefits of Lesvian olive varieties with the world.",
      el: "Με σταθερές ρίζες στη Λουτρόπολη Θέρμης Λέσβου, η οικογένεια Παπαδέλλη καλλιεργεί τα ελαιόδεντρα και παράγει ελαιόλαδο με πάθος, με στόχο να ταξιδέψει σε όλο τον κόσμο τα μοναδικά χαρακτηριστικά και οφέλη των λεσβιακών ποικιλιών ελιάς.",
    },
    practicalInfo: {
      en: [
        "Based in Loutropoli Thermis, Lesvos",
        "Contact directly at (+30) 22510 71377 for product inquiries",
        "Products available for purchase via their online shop",
      ],
      el: [
        "Η έδρα βρίσκεται στη Λουτρόπολη Θέρμης, Λέσβος",
        "Απευθείας επικοινωνία στο (+30) 22510 71377 για πληροφορίες προϊόντων",
        "Τα προϊόντα είναι διαθέσιμα για αγορά μέσω του e-shop τους",
      ],
    },
    routes: {
      en: [
        "Loutropoli Thermis",
        "Lesvos Island",
      ],
      el: [
        "Λουτρόπολη Θέρμης",
        "Νησί της Λέσβου",
      ],
    },
    perfectFor: {
      en: [
        "Gastronomy lovers exploring Greek olive oil",
        "Visitors discovering the traditional products of Lesvos",
        "Anyone who embraces the Mediterranean diet",
      ],
      el: [
        "Λάτρεις της γαστρονομίας που αναζητούν αυθεντικό ελληνικό ελαιόλαδο",
        "Επισκέπτες που ανακαλύπτουν τα παραδοσιακά προϊόντα της Λέσβου",
        "Όσους αγαπούν και ακολουθούν τη Μεσογειακή διατροφή",
      ],
    },
    ctaLabel: {
      en: "View products",
      el: "Δείτε τα προϊόντα",
    },
    phone: "+302251071377",
    email: "info@papadellis.eu",
    website: "https://papadellis.eu/",
    youtube: "",
    galleryCount: 0,
    mapQuery: "Papadellis Olive Oil Loutropoli Thermis Lesvos",
  }
];