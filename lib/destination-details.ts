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
  hydra: {
    overview: {
      en: "Hydra is the only place in Greece — and one of the very few places in the world — where the 20th century's defining invention, the internal combustion engine, was simply refused entry. There are no cars here, no motorbikes, no scooters. Transport is by donkey, mule, water taxi, or on foot. The ban has been in place since the 1950s and has produced something remarkable: an island whose stone port looks almost exactly as it did when the ships of Hydra's merchant fleet dominated Mediterranean trade in the 18th century.\n\nThat visual continuity is Hydra's most immediate gift to the visitor. The harbour — grey stone mansions ascending the hillside, donkeys picking their way along the quay, wooden caïques bobbing in the water — is architecturally preserved in a way that has nothing to do with tourism and everything to do with a community that made a deliberate choice about what kind of place it wanted to be. The result attracted artists. The artists attracted writers. The writers attracted Leonard Cohen, who bought a house here in 1960 for $1,500, wrote some of the finest songs of the 20th century on its terrace, and returned for decades. The creative current he embodied still runs through the island today.",
      el: "Η Ύδρα είναι το μόνο μέρος στην Ελλάδα — και ένα από τα ελάχιστα μέρη στον κόσμο — όπου η καθοριστική εφεύρεση του 20ού αιώνα, ο κινητήρας εσωτερικής καύσης, απλώς δεν επετράπη. Δεν υπάρχουν αυτοκίνητα, μηχανάκια ή σκούτερ. Η μεταφορά γίνεται με γάιδαρο, μουλάρι, θαλάσσιο ταξί ή με τα πόδια. Η απαγόρευση ισχύει από τη δεκαετία του 1950 και έχει δημιουργήσει κάτι αξιοσημείωτο: ένα νησί του οποίου το πέτρινο λιμάνι μοιάζει σχεδόν όπως ήταν όταν ο εμπορικός στόλος της Ύδρας κυριαρχούσε στη Μεσόγειο τον 18ο αιώνα.\n\nΑυτή η οπτική συνέχεια είναι το πιο άμεσο δώρο της Ύδρας στον επισκέπτη. Το λιμάνι — γκρίζα πέτρινα αρχοντικά που σκαρφαλώνουν στον λόφο, γάιδαροι στην προκυμαία, ξύλινα καΐκια στο νερό — είναι αρχιτεκτονικά διατηρημένο. Το αποτέλεσμα προσέλκυσε καλλιτέχνες. Οι καλλιτέχνες προσέλκυσαν συγγραφείς. Και ο Leonard Cohen αγόρασε ένα σπίτι εδώ το 1960 για 1.500 δολάρια, έγραψε μερικά από τα σημαντικότερα τραγούδια του 20ού αιώνα στην αυλή του και επέστρεφε για δεκαετίες.",
    },
    pageIncludes: {
      en: [
        "Hydra Port & stone captain mansions",
        "Kountouriotis Mansion museum",
        "Deste Foundation Slaughterhouse",
        "Leonard Cohen's Hydra",
        "Beaches: Spilia, Bisti, Kamini, Vlyhos, Limnioniza",
        "Interior paths & Profitis Ilias Monastery",
        "Local food, amygdalota & Kamini fish",
      ],
      el: [
        "Λιμάνι & πέτρινα αρχοντικά καπετάνιων",
        "Μουσείο Κουντουριώτη",
        "Σφαγείο Ιδρύματος ΔΕΣΤΕ",
        "Leonard Cohen στην Ύδρα",
        "Παραλίες: Σπίλια, Μπίστι, Καμίνι, Βλύχος, Λιμνιόνιζα",
        "Μονοπάτια & Μονή Προφήτη Ηλία",
        "Τοπικές γεύσεις, αμυγδαλωτά & ψάρι Καμινίου",
      ],
    },
    perfectFor: {
      en: [
        "Athens add-on (90 min by hydrofoil)",
        "Art lovers & gallery visitors",
        "Couples seeking atmosphere over activity",
        "Writers, photographers, creative travelers",
        "Hikers and walkers",
        "Anyone who values silence as a travel feature",
      ],
      el: [
        "Προέκταση από Αθήνα (90 λεπτά με υδροπτέρυγο)",
        "Λάτρεις τέχνης & γκαλερί",
        "Ζευγάρια που αναζητούν ατμόσφαιρα",
        "Συγγραφείς, φωτογράφους, δημιουργικούς ταξιδιώτες",
        "Πεζοπόρους",
        "Όσους εκτιμούν τη σιωπή ως ταξιδιωτικό χαρακτηριστικό",
      ],
    },

  },
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
      el: "Μύκονος: πέρα από το πάρτι, ένα νησί με ιστορία, θάλασσα και \"κρυφές\" γωνιές. Η Μύκονος είναι από τους προορισμούς που όλοι νομίζουν ότι ξέρουν, πριν καν πατήσουν το πόδι τους εκεί. Εικόνες από κατάλευκα σοκάκια, ανεμόμυλους πάνω από τη θάλασσα, κοκτέιλ στο ηλιοβασίλεμα και beach clubs που παίζουν μουσική μέχρι αργά. Ναι, όλα αυτά υπάρχουν — και μάλιστα σε υψηλή ένταση. Αλλά η Μύκονος έχει κι ένα άλλο πρόσωπο: αυθεντικές παραλίες χωρίς φασαρία, ένα εσωτερικό χωριό που σε \"γυρίζει\" σε παλιές Κυκλάδες, μουσεία που εξηγούν γιατί αυτό το νησί έγινε πύλη στο Αιγαίο, και (το μεγάλο ατού) τη Δήλο σε απόσταση αναπνοής — έναν από τους σημαντικότερους αρχαιολογικούς τόπους της Μεσογείου. Αν θες να γράψεις \"Μύκονος\" στην ταξιδιωτική σου λίστα και να το κάνεις σωστά, το μυστικό είναι να τη δεις σαν νησί πολλών ταχυτήτων: λίγη κοσμικότητα για το vibe, λίγη ησυχία για ανάσα, και λίγη ιστορία για να φύγεις με κάτι πιο ουσιαστικό από φωτογραφίες.",
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
  skopelos: {
    overview: {
      en: "Skopelos is the largest island of the Northern Sporades and, by any measure, one of the most naturally beautiful islands in the entire Aegean. Where its neighbor Skiathos trades on cosmopolitan beaches and nightlife, Skopelos is defined by something rarer: genuine character. Pine forests run almost to the water's edge, covering roughly 80% of the island. The capital, Skopelos Town (Chora), climbs steeply from the harbour in a cascade of whitewashed cubic houses and narrow passages — one of the finest Choras in Greece. The island has 360 churches and chapels, 40 monasteries, and a local food culture built around the Skopelos plum (damaskino). Most international visitors know it from the 2008 film Mamma Mia!, which used the chapel of Agios Ioannis on a rocky outcrop at Kastri for its wedding scene. This guide covers the best beaches, the right time to go, how to get there, top attractions, honest caveats, and practical tips.",
      el: "Η Σκόπελος είναι το μεγαλύτερο νησί των Βορείων Σποράδων και ένα από τα πιο φυσικά όμορφα νησιά του Αιγαίου. Ενώ η Σκιάθος υποστηρίζεται στις κοσμοπολίτικες παραλίες, η Σκόπελος ορίζεται από γνήσιο χαρακτήρα. Τα πεύκα καλύπτουν περίπου το 80% του νησιού. Η Χώρα ανεβαίνει απόκρημνα από τον λιμéna σε κασκαδα λευκών σπιτιών — μια από τις ωραιότερες Χώρες στην Ελλάδα. Το νησί έχει 360 εκκλησίες, 40 μοναστήρια και τοπική γαστρονομία βασισμένη στο δαμάσκηνο Σκόπελου. Οι περισσότεροι ξένοι τη γνωρίζουν από την ταινία Mamma Mia! (2008) με την καπελοβρύση του Αγίου Ιωάννη στον Κάστρι. Ο οδηγός καλύπτει παραλίες, εποχή, μετακίνηση, αξιοθέατα και πρακτικές συμβουλές."
    },
    pageIncludes: {
      en: [
        "Why visit Skopelos — the greenest Aegean island",
        "Best time to go — month by month",
        "How to get there — ferries, flights via Skiathos",
        "Top attractions: Chora, Agios Ioannis, monasteries",
        "Best beaches: Panormos, Kastani, Stafylos, Limnonari",
        "Local food: plum products, honey, fresh fish",
        "Honest advice — what to skip",
        "Practical tips & FAQ"
      ],
      el: [
        "Γιατί να επισκεφθείς τη Σκόπελο — το πιο πράσινο νησί",
        "Καλύτερη época για επίσκεψη",
        "Πώς θα φτάσεις — πλοία, πτήσεις μέσω Σκιάθου",
        "Κορυφαία αξιοθέατα: Χώρα, Άγιος Ιωάννης, μοναστήρια",
        "Καλύτερες παραλίες: Πάνορμος, Καστάνη, Σταφύλος, Λιμνονάρι",
        "Τοπικό φαγητό: δαμάσκηνα, μέλι, ψάρι",
        "Ειλικρινής συμβουλή — τι να αποφύγεις",
        "Πρακτικές συμβουλές & Συχνές Ερωτήσεις"
      ],
    },
    perfectFor: {
      en: [
        "Couples after an authentic Aegean base",
        "Nature lovers & hikers",
        "Families wanting calm, varied beaches",
        "Film & Mamma Mia! enthusiasts",
        "Island hoppers using the Sporades as a circuit",
        "Anyone who wants Greece without the crowds"
      ],
      el: [
        "Ζευγάρια που θέλουν αυθεντική βάση στο Αιγαίο",
        "Φύσιολάτρες & πεζοπόροι",
        "Οικογένειες με ήσυχες παραλίες",
        "Φίλοι του Mamma Mia! & κινηματογράφου",
        "Ταξιδιώτες island hopping στις Σποράδες",
        "Όσοι θέλουν Ελλάδα χωρίς μάζες"
      ],
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
  },
  evia: {
    overview: {
      en: "Evia (Euboea) is one of Greece's most underestimated destinations. Despite being the second-largest island in the country, it remains off the mainstream tourist radar. Connected to mainland Greece by bridges, it feels like a hybrid between an island and a continental escape: wild mountains, deep forests, thermal springs, untouched beaches, and traditional villages that have not been reshaped by mass tourism. Unlike the Cyclades, Evia is not about polished luxury or curated postcard perfection. It is raw, diverse, and surprisingly large. This guide covers everything you need to plan a full trip: beaches, towns, nature experiences, food, routes, and practical travel advice.",
      el: "Η Εύβοια είναι ένας από τους πιο υποτιμημένους προορισμούς της Ελλάδας. Παρότι είναι το δεύτερο μεγαλύτερο νησί της χώρας, παραμένει εκτός του κύριου τουριστικού ραντάρ. Συνδεδεμένη με την ηπειρωτική Ελλάδα μέσω γεφυρών, μοιάζει με υβρίδιο νησιού και ηπειρωτικής απόδρασης. Σε αντίθεση με τις Κυκλάδες, η Εύβοια δεν έχει να κάνει με γυαλισμένη πολυτέλεια. Είναι ωμή, διαφορετική και εκπληκτικά μεγάλη."
    },
    pageIncludes: {
      en: [
        "Wild mountains, forests & thermal springs",
        "Authentic villages without heavy tourism",
        "Diverse beaches from sandy to hidden coves",
        "Local gastronomy, honey, figs & seafood",
      ],
      el: [
        "Άγρια βουνά, δάση & ιαματικές πηγές",
        "Αυθεντικά χωριά χωρίς μαζικό τουρισμό",
        "Ποικιλόμορφες παραλίες από αμμουδιές μέχρι κρυμμένους όρμους",
        "Τοπική γαστρονομία, μέλι, σύκα & θαλασσινά",
      ]
    },
    perfectFor: {
      en: [
        "Travelers seeking authentic, untouristed Greece",
        "Hikers and nature enthusiasts",
        "Wellness seekers (thermal springs)",
        "Road trip lovers",
        "Families looking for easy-access beach holidays",
        "Weekend escapes from Athens",
      ],
      el: [
        "Ταξιδιώτες που αναζητούν αυθεντική Ελλάδα",
        "Λάτρεις της πεζοπορίας και της φύσης",
        "Αναζητητές ευεξίας (ιαματικές πηγές)",
        "Λάτρεις των road trips",
        "Οικογένειες που θέλουν εύκολες διακοπές στη θάλασσα",
        "Αποδράσεις Σαββατοκύριακου από την Αθήνα",
      ]
    },
  },
  lefkada: {
    overview: {
      en: "Lefkada is the only Greek island you can drive to without a ferry — a thin causeway and a floating bridge connect it to the mainland. That alone makes it one of the most accessible Ionian islands, yet what awaits is anything but ordinary. Towering white limestone cliffs plunge into waters so blue they seem to belong to the Caribbean. Ancient villages cling to hillsides with wooden-balconied houses painted in unexpected colors. And on the western coast, two of the most dramatic beaches in all of Greece wait at the end of winding mountain roads. This page covers everything you need to plan a complete and honest visit to Lefkada: why it stands out, when to go, how to get there, where to spend your days, what to eat, and what to skip.",
      el: "Η Λευκάδα είναι το μόνο ελληνικό νησί που μπορείς να φτάσεις οδικώς χωρίς πλοίο. Λευκοί ασβεστολιθικοί γκρεμοί βυθίζονται σε νερά που μοιάζουν με την Καραϊβική. Αρχαία χωριά σκαρφαλώνουν στις πλαγιές και στη δυτική ακτή, δύο από τις πιο εντυπωσιακές παραλίες της Ελλάδας σε περιμένουν."
    },
    pageIncludes: {
      en: [
        "Porto Katsiki & Egremni — the western cliff beaches",
        "Vassiliki windsurfing & watersports",
        "Nydri boat trips to Meganisi, Scorpios & the islets",
        "Karya & the mountain village interior",
        "Local food, Englouvi lentils & Ionian sofrito",
        "Honest advice on what to skip and when to go",
      ],
      el: [
        "Πόρτο Κατσίκι & Εγκρεμνοί",
        "Windsurfing στη Βασιλική",
        "Εκδρομές με βάρκα από Νυδρί",
        "Καρυά & ορεινά χωριά",
        "Τοπική κουζίνα & φακές Εγκλουβής",
        "Ειλικρινείς συμβουλές",
      ]
    },
    perfectFor: {
      en: [
        "Road trip travelers arriving from mainland Greece",
        "Families seeking diverse beach options",
        "Watersports enthusiasts",
        "Couples looking for dramatic coastal landscapes",
        "Hikers and village explorers",
      ],
      el: [
        "Road trips από την ηπειρωτική Ελλάδα",
        "Οικογένειες με ποικιλία παραλιών",
        "Λάτρεις θαλάσσιων σπορ",
        "Ζευγάρια που θέλουν δραματικά τοπία",
        "Πεζοπόρους και εξερευνητές χωριών",
      ]
    },
  },

  rethymno: {
    overview: {
      en: "Rethymno is the kind of city that makes you slow down. Not because there is nothing to do — there is plenty — but because every alley in the Old Town seems to ask for a second look, every archway carries a different century, and every café terrace feels like an invitation to stay a little longer than planned.\n\nIt is Crete's third-largest city, positioned in the heart of the island's northern coast, roughly halfway between Heraklion and Chania. In many ways that geography reflects its character: it shares the grandeur of both but has kept something they have largely lost — intimacy.\n\nArchitecturally, Rethymno is one of the best-preserved Venetian cities in the Mediterranean. The Republic of Venice controlled Crete from 1204 to 1669 and left behind fountains, loggia buildings, harbour fortifications, and a lighthouse that still stands. The Ottomans then added minarets, hammams, and a different kind of layered beauty. That double legacy is what makes walking the Old Town feel genuinely different from anywhere else in Greece.\n\nBeyond the historic centre, Rethymno has a long sandy beach extending eastward from the harbour, excellent local food, and immediate access to some of Crete's most dramatic interior landscapes — the Amari Valley, the Psiloritis mountain range, and the iconic Preveli Gorge and beach. This is a destination that works at every pace.\n\nPlanning a wider trip around the island? Explore our full [Crete Travel Guide](/destinations/crete) for regional ideas, road trip inspiration, and more places to stay.",
      el: "Το Ρέθυμνο είναι η πόλη που σε κάνει να κόψεις ρυθμό. Όχι επειδή δεν έχει τίποτα να κάνεις — έχει πολλά — αλλά επειδή κάθε σοκάκι της Παλιάς Πόλης ζητά μια δεύτερη ματιά, κάθε τοξωτή πόρτα κουβαλά έναν διαφορετικό αιώνα και κάθε πεζοδρόμιο καφέ μοιάζει με πρόσκληση να μείνεις λίγο περισσότερο.\n\nΕίναι η τρίτη μεγαλύτερη πόλη της Κρήτης, στο κέντρο της βόρειας ακτής, περίπου στη μέση Ηρακλείου-Χανίων. Η γεωγραφία αντανακλά τον χαρακτήρα της: μοιράζεται το μεγαλείο και των δύο αλλά διατήρησε κάτι που εκείνες έχουν χάσει — την οικειότητα.\n\nΑρχιτεκτονικά, είναι μια από τις καλύτερα διατηρημένες ενετικές πόλεις της Μεσογείου. Η Βενετία κυβέρνησε την Κρήτη από το 1204 έως το 1669 και άφησε σιντριβάνια, λότζες, οχυρά και φάρο. Οι Οθωμανοί πρόσθεσαν μιναρέδες, χαμάμ και μια διαφορετική ομορφιά. Αυτή η διπλή κληρονομιά κάνει το περπάτημα στην Παλιά Πόλη μοναδικό στην Ελλάδα.\n\nΠέρα από το ιστορικό κέντρο, το Ρέθυμνο έχει μακριά αμμώδη παραλία ανατολικά του λιμανιού, εξαιρετικό φαγητό και άμεση πρόσβαση σε μερικά από τα πιο εντυπωσιακά τοπία της Κρήτης — την Κοιλάδα Αμαρίου, τον Ψηλορείτη και το εμβληματικό Φαράγγι του Πρέβελη.\n\nΣχεδιάζετε ένα ευρύτερο ταξίδι στο νησί; Εξερευνήστε τον πλήρη [Οδηγό Ταξιδιού Κρήτης](/destinations/crete) για ιδέες και έμπνευση."
    },
    pageIncludes: {
      en: ["Why visit Rethymno", "Fortezza & Old Town", "Preveli & Arkadi", "Beaches & swimming", "Local food guide", "Honest advice & FAQs"],
      el: ["Γιατί να πας στο Ρέθυμνο", "Φορτέτζα & Παλιά Πόλη", "Πρέβελη & Αρκάδι", "Παραλίες & θάλασσα", "Οδηγός τοπικού φαγητού", "Ειλικρινείς συμβουλές & FAQs"]
    },
    perfectFor: {
      en: ["History & Architecture enthusiasts", "Couples & slow-travel visitors", "Families wanting beach + culture", "Hikers & outdoor explorers", "Food lovers & Cretan cuisine seekers"],
      el: ["Λάτρεις ιστορίας & αρχιτεκτονικής", "Ζευγάρια & ταξιδιώτες αργού ρυθμού", "Οικογένειες που θέλουν θάλασσα + πολιτισμό", "Πεζοπόρους & εξερευνητές", "Λάτρεις του φαγητού & κρητικής κουζίνας"]
    },
  },

  heraklion: {
    overview: {
      en: "Heraklion is not the island postcard. It is the real Crete — dense, layered, occasionally chaotic, and completely alive. The largest city in Crete and one of the most important in Greece, it earns respect the way serious places do: slowly, on its own terms.\n\nThe Minoan Palace of Knossos sits 5 kilometres from the city centre — the most visited archaeological site in Greece after the Acropolis, and one of the most significant in the entire world. The Venetian walls that encircle the old city are among the finest surviving Renaissance fortifications in the Mediterranean. The Archaeological Museum holds the most important Minoan collection on earth. And all around this, there is a city that eats and drinks with genuine conviction: a morning market that runs seven days a week, a raki culture that begins at noon, fish tavernas where the sea is never more than a few steps away.\n\nWhat this means for the traveller is layering of a rare kind. Knossos is not a side trip from a beach town — it is a day spent inside the oldest palace civilisation in Europe. The Archaeological Museum is genuinely world-class, holding the Phaistos Disc, the Snake Goddess figurines, the Minoan frescoes, and a collection that changes how you understand the ancient world. The Venetian walls are 4 kilometres long and up to 40 metres thick — you can walk them, and people do.\n\nAway from all this, Heraklion eats well. The central market on 1866 Street is among the finest food markets in Greece. The Cretan diet — often described as the original Mediterranean diet — manifests on every table. Raki arrives without being asked. This is not a city of performance. It is a city of habit, depth, and genuine conviction.\n\nPlanning a wider trip around Crete? Explore our full [Crete Travel Guide](/destinations/crete) for regional ideas and more places to stay.",
      el: "Το Ηράκλειο δεν είναι η καρτ ποστάλ του νησιού. Είναι η πραγματική Κρήτη — πυκνή, πολυεπίπεδη, περιστασιακά χαοτική και εντελώς ζωντανή. Η μεγαλύτερη πόλη της Κρήτης κερδίζει τον σεβασμό όπως τον κερδίζουν τα σοβαρά μέρη: αργά, με τους δικούς της όρους.\n\nΤο Μινωικό Παλάτι της Κνωσού βρίσκεται 5 χιλιόμετρα από το κέντρο — ο πιο επισκέψιμος αρχαιολογικός χώρος στην Ελλάδα μετά την Ακρόπολη. Τα ενετικά τείχη είναι από τα ωραιότερα αναγεννησιακά οχυρά της Μεσογείου. Το Αρχαιολογικό Μουσείο φιλοξενεί την πιο σημαντική μινωική συλλογή στον κόσμο. Και γύρω από όλα αυτά, υπάρχει μια πόλη που τρώει και πίνει με γνήσια πεποίθηση.\n\nΑυτό που σημαίνει αυτό για τον ταξιδιώτη είναι στρωματοποίηση σπάνιου είδους. Η Κνωσός δεν είναι μια πλάγια εκδρομή από ένα παραθαλάσσιο θέρετρο — είναι μια μέρα μέσα στον αρχαιότερο ανακτορικό πολιτισμό της Ευρώπης. Τα ενετικά τείχη είναι 4 χιλιόμετρα μήκος και έως 40 μέτρα πάχος. Η κεντρική αγορά στην οδό 1866 είναι από τις καλύτερες στην Ελλάδα.\n\nΣχεδιάζετε ένα ευρύτερο ταξίδι στην Κρήτη; Εξερευνήστε τον πλήρη [Οδηγό Ταξιδιού Κρήτης](/destinations/crete)."
    },
    pageIncludes: {
      en: ["Palace of Knossos", "Heraklion Archaeological Museum", "Venetian Old City", "Cretan food & market guide", "Beaches & day trips", "Practical tips & FAQs"],
      el: ["Παλάτι της Κνωσού", "Αρχαιολογικό Μουσείο", "Ενετική Παλιά Πόλη", "Οδηγός φαγητού & αγοράς", "Παραλίες & εκδρομές", "Πρακτικές συμβουλές & FAQs"]
    },
    perfectFor: {
      en: ["History & Archaeology enthusiasts", "Food & wine travellers", "Cultural city breaks", "Using Heraklion as a Crete base", "Travellers who want depth over aesthetics"],
      el: ["Λάτρεις ιστορίας & αρχαιολογίας", "Ταξιδιώτες φαγητού & κρασιού", "Πολιτιστικές αποδράσεις", "Βάση για εξερεύνηση Κρήτης", "Ταξιδιώτες που θέλουν βάθος"]
    },
  },

  aegina: {
    overview: {
      en: "Aegina is the island that proves you do not need a long-haul flight, an overnight ferry, or a week-long itinerary to find something genuinely extraordinary in Greece. It is 40 minutes from Piraeus on a hydrofoil, and it contains one of the best-preserved Doric temples in the entire Greek world, a harbour town with more architectural character than most island capitals ten times its size, a fishing village that still functions as a fishing village, and the finest pistachios produced anywhere in the country.",
      el: "Η Αίγινα είναι το νησί που αποδεικνύει ότι δεν χρειάζεσαι μεγάλη πτήση ή οδοιπορικό εβδομάδας για να βρεις κάτι πραγματικά εξαιρετικό στην Ελλάδα. Είναι 40 λεπτά από τον Πειραιά και περιέχει έναν από τους καλύτερα διατηρημένους δωρικούς ναούς, ένα νεοκλασικό λιμάνι και τα καλύτερα φιστίκια της χώρας."
    },
    pageIncludes: {
      en: [
        "Temple of Aphaia & Kolonna",
        "Aegina Town & Neoclassical Harbour",
        "Perdika, Moni & South Coast",
        "Palaiochora & Agios Nektarios",
        "Beaches & Swimming Guide",
        "Pistachio Culture & Local Food",
        "Ferry Logistics & Practical Tips",
      ],
      el: [
        "Ναός Αφαίας & Κολόνα",
        "Πόλη Αίγινας & Νεοκλασικό Λιμάνι",
        "Πέρδικα, Μονή & Νότια Ακτή",
        "Παλαιοχώρα & Άγιος Νεκτάριος",
        "Παραλίες & Οδηγός Κολύμβησης",
        "Φιστίκια & Τοπικό Φαγητό",
        "Πλοία & Πρακτικές Συμβουλές",
      ],
    },
    perfectFor: {
      en: [
        "Couples and romantic weekend escapes",
        "History and archaeology enthusiasts",
        "Families seeking easy beach days",
        "Athens-based travellers (day trip or overnight)",
        "Food lovers & pistachio pilgrims",
        "Off-season city escapes",
      ],
      el: [
        "Ζευγάρια και ρομαντικές αποδράσεις",
        "Λάτρεις ιστορίας και αρχαιολογίας",
        "Οικογένειες με παιδιά",
        "Ταξιδιώτες από Αθήνα (ημερήσια ή διανυκτέρευση)",
        "Λάτρεις του φαγητού & προσκυνητές φιστικιού",
        "Αποδράσεις εκτός σεζόν",
      ],
    },
  },

  lasithi: {
    overview: {
      en: "Lasithi is the easternmost region of Crete, and in many ways the most uncompromised. It covers roughly a third of the island — from the mountain plateau that carries its name in the west, all the way to Crete's most dramatic eastern tip at Cape Sideros. The region offers Spinalonga Island, Elounda Bay, Vai Palm Forest, and the unperformed pace of traditional villages. A well-planned stay here can combine history, extraordinary beaches, local food, and genuine solitude in one of the least crowded parts of Crete.",
      el: "Το Λασίθι είναι η ανατολικότερη περιοχή της Κρήτης, και από πολλές απόψεις η πιο ανυποχώρητη. Καλύπτει περίπου το ένα τρίτο του νησιού και προσφέρει τη Σπιναλόγκα, τον κόλπο της Ελούντας, το φοινικόδασος Βάι και έναν αυθεντικό ρυθμό ζωής που δεν έχει διαπραγματευτεί με την τουριστική βιομηχανία."
    },
    pageIncludes: {
      en: [
        "Spinalonga Island & History",
        "Elounda Bay & Beaches",
        "Vai Palm Forest & Sitia Geopark",
        "Local Food & Wine",
      ],
      el: [
        "Σπιναλόγκα & Ιστορία",
        "Κόλπος Ελούντας & Παραλίες",
        "Φοινικόδασος Βάι & Γεωπάρκο Σητείας",
        "Τοπικό Φαγητό & Κρασί",
      ],
    },
    perfectFor: {
      en: [
        "Travellers seeking quieter Crete",
        "History and culture enthusiasts (Spinalonga)",
        "Road trip lovers",
        "Beach explorers — north and south coasts",
        "Food and wine travellers (Sitia olive oil, Liatiko wine)",
      ],
      el: [
        "Ταξιδιώτες που αναζητούν ήσυχη Κρήτη",
        "Λάτρεις ιστορίας και πολιτισμού",
        "Λάτρεις των road trips",
        "Εξερευνητές παραλιών — βόρειας και νότιας ακτής",
        "Ταξιδιώτες φαγητού και κρασιού",
      ],
    },
  },
  tinos: {
    overview: {
      en: "Tinos sits at the heart of the Cyclades, visible from Mykonos to its east and from Syros to its west, yet it inhabits an entirely different world from either. It is the most spiritually significant island in Greece — the Church of Panagia Evangelistria holds the sacred icon of the Virgin Mary, and on the 15th of August every year, thousands of faithful pilgrims travel by sea from across the country to climb the long marble ramp from the port to the church on their knees. The island's religious identity is not a tourist performance; it is a living, breathing practice.\n\nBut Tinos is also, simultaneously, one of the most artistically rich destinations in the Aegean. The village of Pyrgos in the north has produced more marble sculptors than anywhere else in Greece — the craft school here trained many of the country's finest artists, and the tradition continues today in family workshops where you can watch marble being cut and shaped by hand. None of this has been packaged for mass tourism. Tinos has no international hotel chains, no beach clubs, and no self-conscious effort to be the next Mykonos. The food here is considered by serious food travellers to be the best in the Cyclades.",
      el: "Η Τήνος βρίσκεται στην καρδιά των Κυκλάδων, ορατή από τη Μύκονο και τη Σύρο, αλλά κατοικεί σε έναν εντελώς διαφορετικό κόσμο. Είναι το πνευματικά σημαντικότερο νησί της Ελλάδας. Ταυτόχρονα, είναι ένας από τους πιο καλλιτεχνικά πλούσιους προορισμούς του Αιγαίου. Το φαγητό εδώ θεωρείται από τους λάτρεις της γαστρονομίας ως το καλύτερο στις Κυκλάδες."
    },
    pageIncludes: {
      en: [
        "Panagia Evangelistria & the Sacred Icon",
        "Pyrgos — Marble Village & Museum of Marble Crafts",
        "Volax Boulders & Interior Villages",
        "Venetian Dovecotes & Xombourgo Fortress",
        "Beaches — Kolymbithra, Porto, Agios Fokas",
        "Food Culture — Artichokes, Loukoumades, Syglino",
        "Village Exploration & Catholic-Orthodox Heritage",
      ],
      el: [
        "Παναγία Ευαγγελίστρια & Ιερή Εικόνα",
        "Πύργος — Μαρμάρινο Χωριό & Μουσείο Μαρμάρου",
        "Βώλακας & Χωριά Εσωτερικού",
        "Ενετικοί Περιστερώνες & Κάστρο Εξωμπούργκο",
        "Παραλίες — Κολυμπήθρα, Πόρτο, Άγιος Φωκάς",
        "Γαστρονομία — Αγκινάρες, Λουκουμάδες, Σύγλινο",
        "Εξερεύνηση Χωριών & Καθολική-Ορθόδοξη Κληρονομιά",
      ],
    },
    perfectFor: {
      en: [
        "Cultural & art enthusiasts",
        "Pilgrimage and religious travel",
        "Serious food travellers",
        "Cyclades island hoppers",
        "Village & interior explorers",
        "Off-season & winter travel",
        "Families with older children",
        "Photographers & artists",
        "Anyone tired of tourist-only islands",
        "Architecture lovers",
      ],
      el: [
        "Λάτρεις πολιτισμού και τέχνης",
        "Θρησκευτικό προσκύνημα",
        "Λάτρεις γαστρονομίας",
        "Ταξιδιώτες Κυκλάδων",
        "Εξερευνητές χωριών",
        "Ταξίδια εκτός σεζόν",
        "Οικογένειες με μεγαλύτερα παιδιά",
        "Φωτογράφους & καλλιτέχνες",
        "Όσους έχουν κουραστεί από τουριστικά νησιά",
        "Λάτρεις αρχιτεκτονικής",
      ],
    },
  },
  ios: {
    overview: {
      en: "Ios has a reputation that arrived decades before most visitors do, and that reputation — wild parties, sun-bleached youth, the Cyclades' most legendary nightlife — is not entirely undeserved. But it is also dramatically incomplete. The island that has been sending young travellers home with the best stories of their Aegean summers is also an island of genuine beauty, ancient significance and an interior that most of its own visitors never see.\n\nThe geography of Ios is compact and dramatic: a rugged, hilly landmass of approximately 108 square kilometres, rising steeply from the sea with a spine of bare rock running north to south. The port — Ormos Iosou — sits in a deep protected bay on the west coast. Above it, connected by a road and a long flight of marble steps, the Chora perches on a rounded hilltop at 150 metres, a dense cluster of whitewashed Cycladic architecture that is genuinely one of the most beautiful village streetscapes in the archipelago.\n\nBeyond this trinity of port, Chora and Mylopotas — which is where most visitors spend their entire stay — Ios has considerable depth. The remote south coast culminates in Manganari, a series of broad sandy bays accessible only by boat or a long dirt track, with water of exceptional clarity and almost no development. The northern tip of the island holds what tradition identifies as the tomb of Homer — one of the most poetically resonant sites in the Greek world, reached by a winding road through empty countryside.",
      el: "Η Ίος έχει μια φήμη που ήρθε δεκαετίες πριν από τους περισσότερους επισκέπτες, και αυτή η φήμη — άγριες γιορτές, ξεθωριασμένη νιοτά, η πιο θρυλική νυχτερινή ζωή στις Κυκλάδες — δεν είναι εντελώς αδικαιολόγητη. Αλλά είναι επίσης драмατικά ελλιπής. Το νησί που στέλνει νεαρούς ταξιδιώτες σπίτι με τις καλύτερες ιστορίες των καλοκαιρινών τους καλοκαιριών στο Αιγαίο είναι επίσης ένα νησί πραγματικής ομορφιάς, αρχαίας σημασίας και εσωτερικού που οι περισσότεροι επισκέπτες του δεν βλέπουν ποτέ.\n\nΗ γεωγραφία της Ίου είναι συμπαγής και δραματική: ένα τραχύ, λοφώδες έδαφος περίπου 108 τετραγωνικών χιλιομέτρων, ανεβαίνοντας απότομα από τη θάλασσα με μια ράχη γυμνού βράχου που τρέχει βόρεια-νότια. Το λιμάνι — Όρμος Ιούσου — κάθεται σε ένα βαθύ προστατευόμενο κόλπο στη δυτική ακτή. Από πάνω, συνδεόμενο με δρόμο και μακρύ σκαλοπάτι μαρμάρου, το Χωριό κάθεται σε στρογγυλό λόφο στα 150 μέτρα, ένα πυκνό σύμπλεγμα λευκοπιασμένης κυκλαδίτικης αρχιτεκτονικής που είναι πραγματικά ένα από τα πιο όμορφα χωριά στο αρχιπέλαγος.\n\nΠέρα από αυτό το τρίτο λιμάνι, Χωριό και Μυλοποτάς — όπου οι περισσότεροι επισκέπτες περνούν ολόκληρη τη διαμονή τους — η Ίος έχει σημαντικό βάθος. Η απομακρυσμένη νότια ακτή κορυφώνεται στη Μαγκαναρί, μια σειρά ευρύτατων αμμωδών κολπών προσβάσιμων μόνο με πλοίο ή μακρύ χωμάτινο δρόμο, με νερό εξαιρετικής διαφάνειας και σχεδόν κανένα ανάπτυγμα. Το βόρειο άκρο του νησιού κρατά αυτό που η παράδοση ταυτίζει ως τον τάφο του Ομήρου — ένα από τα πιο ποιητικά σημαντικά μέρη στο ελληνικό κόσμο."
    },
    pageIncludes: {
      en: [
        "The Chora — whitewashed hilltop labyrinth",
        "Homer's Tomb — the northern ridge",
        "Skarkos — Early Bronze Age settlement",
        "Archaeological Museum of Ios",
        "Mylopotas beach — long sandy arc",
        "Manganari — wild south-coast bays",
        "Koumbara, Psathi, Agia Theodoti beaches",
        "Chora nightlife — the legendary bar lanes",
        "Local wine, thyme honey & loukoumades",
        "Island hopping — Santorini, Folegandros, Sikinos",
      ],
      el: [
        "Το Χωριό — λευκό ορεινό λαβύρινθο",
        "Τάφος του Ομήρου — η βόρεια ράχη",
        "Σκάρκος — Οικισμός Πρώιμης Εποχής Χαλκού",
        "Αρχαιολογικό Μουσείο Ίου",
        "Παραλία Μυλοποτά — μακριός αμμώδης κόλπος",
        "Μαγκαναρί — άγριοι νότιοι κόλποι",
        "Παραλίες Κουμπάρα, Ψαθί, Αγία Θεοδότη",
        "Νυχτερινή ζωή Χωριού — οι θρυλικές μπαρ",
        "Τοπικό κρασί, θυμαρίσιο μέλι & λουκουμάδες",
        "Island hopping — Σαντορίνη, Φολέγανδρος, Σίκινος",
      ],
    },
    perfectFor: {
      en: [
        "Young independent travellers",
        "Beach lovers (all types)",
        "Island hoppers",
        "Cyclades architecture fans",
        "History & archaeology enthusiasts",
        "Couples in June & September",
        "Nightlife seekers",
        "Anyone tired of Santorini prices",
        "Folegandros & Sikinos hoppers",
        "Photographers & slow travellers",
      ],
      el: [
        "Νεαροί ανεξάρτητοι ταξιδιώτες",
        "Λάτρεις παραλιών (όλων των τύπων)",
        "Island hoppers",
        "Λάτρεις κυκλαδίτικης αρχιτεκτονικής",
        "Λάτρεις ιστορίας & αρχαιολογίας",
        "Ζευγάρια τον Ιούνιο & Σεπτέμβριο",
        "Ψάχνοντες νυχτερινή ζωή",
        "Όσους έχουν κουραστεί από τις τιμές Σαντορίνης",
        "Island hoppers Φολεγάνδρου & Σίκινου",
        "Φωτογράφους & αργούς ταξιδιώτες",
      ],
    },
  },
  kalymnos: {
    overview: {
      en: "Kalymnos is not a typical Greek island, and it has never tried to be. It has no iconic caldera, no Cycladically famous village, no headline archaeological site that draws busloads from cruise ships. What it has instead is something rarer and more specific: a coherent identity — hard, vertical, rooted in the sea — that runs from the limestone cliffs that have made it the most important sport climbing destination in the world through to the sponge-diving tradition that defined its economy and culture for over a century, down to the character of its people, who have a directness and a self-possession that comes from generations of genuinely dangerous work.\n\nThe island is dramatic in its geology. The bare limestone mountains that rise almost vertically from the sea on the west coast are the same rock that climbers from forty countries come to scale — bolted routes running up sun-warmed orange and grey walls above beaches of turquoise water. The interior is a surprise: the valley of Vathi on the east coast cuts deep into the mountains in a narrow, lush fjord of mandarins and figs that feels entirely incongruous against the bare rock above it. The capital, Pothia, is the largest of the Dodecanese island towns and one of the most authentically workmanlike — a harbour of neoclassical mansions built on sponge money, painted in colours that once helped divers identify their homes from the sea.\n\nThe sponge-diving tradition of Kalymnos was one of the most extraordinary and brutal occupations in the pre-modern Mediterranean. Men descended to depths of 60 and 70 metres on a single breath — or, later, on primitive hard-hat equipment that caused decompression sickness on a catastrophic scale — to harvest sponges from the sea floor off North Africa, Libya and the Greek coast. The tradition lives on in the sponge shops of Pothia and in a festival held each spring to bless the divers and their boats.\n\nKalymnos is positioned at the centre of the northern Dodecanese, with Leros to the north, Kos to the south and the small island of Telendos — a car-free settlement of fishermen and cats, separated from Kalymnos by a channel 600 metres wide — immediately to the west. It is an island that rewards curiosity, physical engagement and a willingness to look past the surface.",
      el: "Η Κάλυμνος δεν είναι ένα τυπικό ελληνικό νησί, και ποτέ δεν προσπάθησε να γίνει. Δεν έχει εμβληματική καλντέρα, διάσημο κυκλαδίτικο χωριό ή αρχαιολογικό χώρο που προσελκύει πλήθη από κρουαζιερόπλοια. Αυτό που έχει είναι μια συνεκτική ταυτότητα — σκληρή, κάθετη, ριζωμένη στη θάλασσα — που εκτείνεται από τους ασβεστολιθικούς βράχους που την έχουν κάνει τον σημαντικότερο προορισμό αθλητικής αναρρίχησης στον κόσμο, μέχρι την παράδοση της σπογγαλιείας που καθόρισε την οικονομία και τον πολιτισμό της για πάνω από έναν αιώνα.\n\nΤο νησί είναι δραματικό στη γεωλογία του. Οι γυμνοί ασβεστολιθικοί βράχοι που υψώνονται σχεδόν κάθετα από τη θάλασσα στη δυτική ακτή είναι το ίδιο πέτρωμα που αναρριχητές από σαράντα χώρες έρχονται να σκαρφαλώσουν. Η πρωτεύουσα, η Πόθια, είναι η μεγαλύτερη από τις πόλεις της Δωδεκανήσου και μία από τις πιο αυθεντικά εργατικές — ένα λιμάνι με νεοκλασικά αρχοντικά χτισμένα με τα χρήματα από τα σφουγγάρια.\n\nΗ παράδοση της σπογγαλιείας ήταν μία από τις πιο εξαιρετικές και βάναυσες δραστηριότητες της προ-σύγχρονης Μεσογείου. Η Κάλυμνος βρίσκεται στο κέντρο της βόρειας Δωδεκανήσου, με τη Λέρο βόρεια, την Κω νότια και το μικρό νησί της Τελένδου — έναν οικισμό χωρίς αυτοκίνητα — δυτικά."
    },
    pageIncludes: {
      en: [
        "Rock climbing (3,000+ routes)",
        "Telendos island crossing",
        "Vathi mandarin valley",
        "Sponge Diving Museum",
        "Pothia neoclassical harbour",
        "Chora medieval village",
        "Emborios beach (north tip)",
        "Submerged ancient ruins",
        "October Climbing Festival",
        "Spring Sponge Festival",
      ],
      el: [
        "Αθλητική αναρρίχηση (3.000+ διαδρομές)",
        "Τέλενδος — νησί χωρίς αυτοκίνητα",
        "Κοιλάδα Βαθύ — μανταρίνια & φιόρδ",
        "Μουσείο Σπογγαλιείας",
        "Πόθια — νεοκλασικό λιμάνι",
        "Χωριό (Περαχώρα) & μεσαιωνικό κάστρο",
        "Παραλία Εμπορειός (βόρεια άκρη)",
        "Βυθισμένα αρχαία ερείπια",
        "Φεστιβάλ Αναρρίχησης Οκτωβρίου",
        "Ανοιξιάτικο Φεστιβάλ Σπόγγου",
      ],
    },
    perfectFor: {
      en: [
        "Rock climbers (all levels)",
        "Adventure travellers",
        "Cultural & history lovers",
        "Serious food & seafood lovers",
        "Snorkelling & diving",
        "Dodecanese island hoppers",
        "Off-season & winter visitors",
        "Couples seeking authenticity",
        "Anyone tired of overcommercialized islands",
        "Extended stay travellers",
      ],
      el: [
        "Αναρριχητές (όλων των επιπέδων)",
        "Ταξιδιώτες περιπέτειας",
        "Λάτρεις πολιτισμού & ιστορίας",
        "Λάτρεις φαγητού & θαλασσινών",
        "Κολύμπι με μάσκα & καταδύσεις",
        "Island hoppers Δωδεκανήσου",
        "Επισκέπτες εκτός σεζόν & χειμώνα",
        "Ζευγάρια που αναζητούν αυθεντικότητα",
        "Όσους έχουν κουραστεί από εμπορευματοποιημένα νησιά",
        "Ταξιδιώτες μεγάλης διάρκειας",
      ],
    },
  },
  preveza: {
    overview: {
      en: "On the 2nd of September, 31 BC, two fleets met in the narrow strait at the mouth of the Ambracian Gulf. On one side: Octavian, the adopted heir of Julius Caesar. On the other: Mark Antony and Cleopatra VII, queen of Egypt. The battle that followed — the Battle of Actium — lasted a single day and determined the shape of the next two millennia. Octavian's victory ended the Roman Republic, inaugurated the Roman Empire, and set in motion a chain of events that would directly produce the political, legal and cultural framework of the Western world. He built a city on the peninsula overlooking the battle site and named it Nikopolis: the City of Victory. The ruins are still there, five minutes from the centre of modern Preveza, and they are among the most historically significant in Greece.\n\nThis is the context in which Preveza exists — a coastal town of 20,000 people, easy in its manner and genuinely uncrowded by tourist standards, sitting at one of the great hinge points of world history. The Ambracian Gulf behind it is a vast, almost landlocked inlet of the Ionian Sea, one of Europe's most important protected wetland ecosystems, home to bottlenose dolphins that can be seen on boat tours with over 80% reliability, pelicans, flamingos, and the grey mullet whose roe — avgotaracho, the Greek equivalent of beluga caviar — has been salted and dried on these shores since Byzantine times. North of town, Monolithi Beach stretches for 22 kilometres of uninterrupted golden sand and was named the safest beach in Europe by the European Commission.\n\nThe wider region adds layer after layer: the dramatic hilltop ruins of Kassope, the monument at Zalongo where Souliot women chose the cliff rather than captivity, the mythological Acheron river where the ancients believed Charon ferried the dead to the underworld, and the medieval Pantocrator castle above the town whose terrace catches the Ambracian Gulf at sunset. Preveza is not a hidden gem in the sense of being small or modest. It is a genuinely large, rich destination that international tourism has simply not yet discovered at the scale it deserves.",
      el: "Στις 2 Σεπτεμβρίου 31 π.Χ., δύο στόλοι συναντήθηκαν στο στενό της εισόδου του Αμβρακικού κόλπου. Από τη μία πλευρά: ο Οκταβιανός. Από την άλλη: ο Μάρκος Αντώνιος και η Κλεοπάτρα. Η Ναυμαχία του Ακτίου κράτησε μία μόνο μέρα και καθόρισε την πορεία δύο χιλιετιών. Ο Οκταβιανός έχτισε τη Νικόπολη — την Πόλη της Νίκης — στη χερσόνησο που δεσπόζει στο πεδίο της μάχης. Τα ερείπια βρίσκονται εκεί, πέντε λεπτά από το κέντρο της σύγχρονης Πρέβεζας.\n\nΗ Πρέβεζα είναι μια παραθαλάσσια πόλη 20.000 κατοίκων, χαλαρή και ανεπιτήδευτη, που κάθεται σε ένα από τα μεγάλα σημεία καμπής της παγκόσμιας ιστορίας. Ο Αμβρακικός κόλπος είναι μια τεράστια, σχεδόν κλειστή είσοδος του Ιονίου, ένα από τα σημαντικότερα προστατευμένα υγροτοπικά οικοσυστήματα της Ευρώπης, με δελφίνια, πελεκάνους, φλαμίνγκο και το αυγοτάραχο που παράγεται εδώ από βυζαντινά χρόνια. Βόρεια της πόλης, η παραλία Μονολίθι εκτείνεται για 22 χιλιόμετρα συνεχόμενης χρυσής άμμου.\n\nΗ ευρύτερη περιοχή προσθέτει στρώσεις επί στρώσεων: τα ερείπια της Κασσώπης, το μνημείο του Ζαλόγγου, το μυθολογικό ποτάμι του Αχέροντα και το μεσαιωνικό κάστρο του Παντοκράτορα. Η Πρέβεζα δεν είναι ένας κρυμμένος θησαυρός. Είναι ένας μεγάλος, πλούσιος προορισμός που ο διεθνής τουρισμός απλά δεν έχει ακόμα ανακαλύψει στην κλίμακα που του αξίζει."
    },
    pageIncludes: {
      en: [
        "Ancient Nikopolis & Archaeological Museum",
        "Ambracian Gulf dolphin & birdwatching tours",
        "Monolithi Beach — 22km",
        "Kassope, Zalongo, Necromanteion",
        "Preveza old town & Saitan Pazar",
        "Avgotaracho, papalina & gulf seafood",
        "Day trips: Lefkada, Parga, Ioannina, Acheron"
      ],
      el: [
        "Αρχαία Νικόπολη & Αρχαιολογικό Μουσείο",
        "Εκδρομές για δελφίνια & παρατήρηση πουλιών στον Αμβρακικό",
        "Παραλία Μονολίθι — 22χλμ",
        "Κασσώπη, Ζάλογγο, Νεκρομαντείο",
        "Παλιά Πόλη Πρέβεζας & Σαϊτάν Παζάρ",
        "Αυγοτάραχο, παπαλίνα & θαλασσινά Αμβρακικού",
        "Ημερήσιες εκδρομές: Λευκάδα, Πάργα, Ιωάννινα, Αχέροντας"
      ]
    },
    perfectFor: {
      en: [
        "History & archaeology enthusiasts",
        "Nature lovers & birdwatchers",
        "Food travelers seeking regional specialities",
        "Families wanting beach + culture combination",
        "Road-trippers using Preveza as a base",
        "Travelers seeking authentic, uncrowded Greece"
      ],
      el: [
        "Λάτρεις ιστορίας & αρχαιολογίας",
        "Φυσιολάτρες & παρατηρητές πουλιών",
        "Ταξιδιώτες γαστρονομίας",
        "Οικογένειες που θέλουν συνδυασμό θάλασσας & πολιτισμού",
        "Road trips με βάση την Πρέβεζα",
        "Ταξιδιώτες που αναζητούν αυθεντική, ήσυχη Ελλάδα"
      ]
    }
  },
  chios: {
    overview: {
      en: "Chios operates on its own terms — it does not model itself on the whitewashed Cycladic ideal, does not depend on tourism for survival, and does not particularly care whether visitors arrive with expectations formed by Instagram. What it offers instead is something unexpectedly rare in the Aegean: a place that feels genuinely lived-in, where 50,000 permanent residents go about a real economy — shipping, mastic agriculture, a university — and where the medieval villages, Byzantine monasteries and volcanic beaches are woven into a working landscape rather than curated for tourist consumption.\n\nThe island's most famous product, mastic, is produced commercially nowhere else on earth. The resin tapped from the lentisk trees of the Mastichohoria — the collection of southern villages including Pyrgi, Mesta and Olympi — has been recognised by UNESCO as Intangible Cultural Heritage and has shaped the landscape, architecture and economy of southern Chios for a millennium. Pyrgi with its extraordinary black-and-white geometric xysta decoration on every facade, Mesta built as a single defensive fortress with no exterior windows at ground level, and Olympi perched on a rocky outcrop represent a concentration of living medieval architecture found nowhere else in Greece.\n\nBeyond the mastic villages, Chios rewards exploration with the 11th-century Byzantine mosaics of Nea Moni (a UNESCO World Heritage Site), the abandoned clifftop settlement of Anavatos frozen since 1822, the walled citrus orchards of Kampos, and a coastline of volcanic black-pebble beaches like Mavra Volia whose turquoise-water contrast is among the most visually striking in the Aegean. The island even has its own Easter Rocket War — the Rouketopolemos — in which two parish churches in Vrontados fire tens of thousands of home-made rockets at each other's bell towers on Holy Saturday night.",
      el: "Η Χίος λειτουργεί με τους δικούς της όρους — δεν μιμείται το λευκό κυκλαδίτικο πρότυπο, δεν εξαρτάται από τον τουρισμό για επιβίωση, και δεν νοιάζεται ιδιαίτερα αν οι επισκέπτες φτάνουν με προσδοκίες που διαμόρφωσε το Instagram. Αυτό που προσφέρει είναι κάτι σπάνιο στο Αιγαίο: ένας τόπος που νιώθεις ότι κατοικείται πραγματικά, όπου 50.000 μόνιμοι κάτοικοι ζουν μια πραγματική οικονομία — ναυτιλία, μαστίχα, πανεπιστήμιο — και όπου τα μεσαιωνικά χωριά, τα βυζαντινά μοναστήρια και οι ηφαιστειακές παραλίες είναι υφασμένα σε ένα ζωντανό τοπίο.\n\nΤο πιο διάσημο προϊόν του νησιού, η μαστίχα, παράγεται εμπορικά πουθενά αλλού στη γη. Η ρητίνη από τα σχίνα των Μαστιχοχωρίων — Πυργί, Μεστά, Ολύμποι — έχει αναγνωριστεί από την UNESCO ως Άυλη Πολιτιστική Κληρονομιά. Το Πυργί με την εκπληκτική ασπρόμαυρη γεωμετρική διακόσμηση ξυστά, τα Μεστά χτισμένα ως ενιαίο οχυρό χωρίς παράθυρα στο ισόγειο, και οι Ολύμποι σκαρφαλωμένοι σε βράχο αποτελούν συγκέντρωση ζωντανής μεσαιωνικής αρχιτεκτονικής που δεν υπάρχει αλλού στην Ελλάδα.\n\nΠέρα από τα Μαστιχοχώρια, η Χίος ανταμείβει με τα βυζαντινά ψηφιδωτά της Νέας Μονής (Μνημείο UNESCO), τον εγκαταλελειμμένο Ανάβατο παγωμένο στο 1822, τα περιβόλια εσπεριδοειδών του Κάμπου, και τις ηφαιστειακές παραλίες με μαύρο βότσαλο όπως τα Μαύρα Βόλια. Και έχει τον δικό της Ρουκετοπόλεμο το Πάσχα, όπου δύο εκκλησίες στα Βροντάδα εκτοξεύουν χιλιάδες ρουκέτες η μία στην άλλη."
    },
    pageIncludes: {
      en: [
        "Mastic villages: Pyrgi (xysta), Mesta (fortress), Olympi",
        "Nea Moni Monastery — UNESCO Byzantine mosaics",
        "Anavatos — abandoned clifftop settlement",
        "Chios Town & Kastro quarter",
        "Kampos citrus estates",
        "Beaches: Mavra Volia, Karfas, Lithi, Agia Markella",
        "Rouketopolemos — Easter Rocket War",
        "Chios Mastic Museum",
        "Volissos & the northwest coast",
      ],
      el: [
        "Μαστιχοχώρια: Πυργί (ξυστά), Μεστά (φρούριο), Ολύμποι",
        "Νέα Μονή — Βυζαντινά ψηφιδωτά UNESCO",
        "Ανάβατος — εγκαταλελειμμένος οικισμός",
        "Χίος Πόλη & Κάστρο",
        "Κάμπος — περιβόλια εσπεριδοειδών",
        "Παραλίες: Μαύρα Βόλια, Καρφάς, Λιθί, Αγία Μαρκέλλα",
        "Ρουκετοπόλεμος",
        "Μουσείο Μαστίχας Χίου",
        "Βολισσός & βορειοδυτική ακτή",
      ],
    },
    perfectFor: {
      en: [
        "Cultural & architectural travellers",
        "Byzantine art & history enthusiasts",
        "Foodies interested in unique local products",
        "Travellers seeking authentic, non-touristy Greece",
        "Island hoppers in the North Aegean",
        "Photographers of medieval architecture",
        "Anyone tired of the whitewashed Cycladic cliché",
      ],
      el: [
        "Ταξιδιώτες πολιτισμού & αρχιτεκτονικής",
        "Λάτρεις βυζαντινής τέχνης & ιστορίας",
        "Λάτρεις φαγητού & μοναδικών προϊόντων",
        "Ταξιδιώτες που αναζητούν αυθεντική Ελλάδα",
        "Island hoppers Βορείου Αιγαίου",
        "Φωτογράφους μεσαιωνικής αρχιτεκτονικής",
        "Όσους έχουν κουραστεί από τα κυκλαδίτικα κλισέ",
      ],
    },
  },
};
