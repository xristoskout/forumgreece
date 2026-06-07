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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you about Hydra: The island's most extraordinary quality — the silence — is temporal as much as physical. It exists between approximately 23:00 and 08:00, when the day-trippers are gone, the late tavernas have closed, and the only sound is water and the occasional donkey. Staying overnight is not merely convenient — it is the only way to hear what Hydra actually sounds like. The visitors who leave on the last afternoon hydrofoil have spent a day in the presence of one of Europe's most remarkable places without ever quite arriving.",
        el: "Αυτό που δε σου λέει κανείς: Η πιο εξαιρετική ποιότητα της Ύδρας — η σιωπή — είναι τόσο χρονική όσο και φυσική. Υπάρχει περίπου μεταξύ 23:00 και 08:00, όταν οι εκδρομείς έχουν φύγει, οι ταβέρνες έχουν κλείσει και ο μόνος ήχος είναι το νερό και ο γάιδαρος. Η διαμονή δεν είναι απλώς βολική — είναι ο μόνος τρόπος να ακούσεις τι πραγματικά ακούγεται η Ύδρα.",
      },
      items: {
        en: [
          "Visiting Hydra as a half-day trip from Athens — the Flying Dolphin delivers a boatload of day-trippers who spend three hours on the harbour front, eat an overpriced lunch at the tourist tavernas, and leave. Two nights minimum is the threshold above which Hydra starts to make its real impression.",
          "The tourist tavernas at the centre of the port — prices are 30–40% above equivalent quality elsewhere. Walk to the eastern end of the harbour or to Kamini for tavernas where the menu changes with the catch.",
          "Expecting sandy beaches within walking distance — Hydra's coastline is predominantly rocky. The swimming at Spilia from the rocks is good, but if sandy beaches are non-negotiable, Hydra is the wrong choice unless you budget for water taxis.",
          "Arriving on a summer weekend without a reservation — Hydra on a Saturday in August is a different island. The hydrofoils arrive packed, the port fills to capacity, and the island's particular quality of quiet is simply not available.",
        ],
        el: [
          "Ημερήσια εκδρομή από Αθήνα — το υδροπτέρυγο φέρνει επισκέπτες που μένουν 3 ώρες στο λιμάνι, τρώνε ακριβό μεσημεριανό και φεύγουν. Δύο διανυκτερεύσεις είναι το ελάχιστο για να καταλάβεις την Ύδρα.",
          "Τουριστικές ταβέρνες στο κέντρο του λιμανιού — οι τιμές είναι 30-40% πάνω. Περπάτα στο ανατολικό άκρο ή στο Καμίνι.",
          "Παραλίες με άμμο σε κοντινή απόσταση — η ακτογραμμή είναι βραχώδης. Το μπάνιο στα Σπίλια είναι καλό, αλλά για αμμώδεις παραλίες χρειάζεστε θαλάσσιο ταξί.",
          "Άφιξη Σαββατοκύριακο καλοκαιριού χωρίς κράτηση — η Ύδρα τον Αύγουστο είναι άλλο νησί. Τα υδροπτέρυγα γεμίζουν, το λιμάνι είναι γεμάτο και η ησυχία εξαφανίζεται.",
        ],
      },
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Santorini's accommodation pricing is built around the caldera view, not around the quality of the room. A €400/night property on the caldera edge frequently has a smaller room, less functional bathroom, and harder access (steep steps, no vehicle access) than a €160/night property 20 minutes away in Karterados or Messaria that delivers a genuinely better sleep. The honest question before booking is: how many hours a day will I actually be in the room looking at the view? If the answer is less than two, the premium is difficult to justify.",
        el: "Αυτό που δε σου λέει κανείς: Η τιμολόγηση των καταλυμάτων στη Σαντορίνη βασίζεται στη θέα στην καλντέρα, όχι στην ποιότητα του δωματίου. Ένα κατάλυμα €400/βράδυ στην άκρη της καλντέρας έχει συχνά μικρότερο δωμάτιο, λιγότερο λειτουργικό μπάνιο και δυσκολότερη πρόσβαση από ένα €160/βράδυ 20 λεπτά μακριά στο Καρτεράδο ή τη Μεσαριά που προσφέρει καλύτερο ύπνο. Η ειλικρινής ερώτηση πριν κλείσεις είναι: πόσες ώρες την ημέρα θα είμαι πραγματικά στο δωμάτιο κοιτάζοντας τη θέα; Αν η απάντηση είναι λιγότερες από δύο, το επιπλέον κόστος δύσκολα δικαιολογείται."
      },
      items: {
        en: [
          "The Oia sunset without a plan — Arriving at Oia between 18:00 and 20:00 in July or August without staking out a spot at least an hour early puts you in a wall of people 10 rows deep from any view. The sunset is real and genuinely beautiful. The experience of watching it from a crowd of 3,000 people is not. Imerovigli or Pyrgos offer the same light, half the people, and room to actually breathe.",
          "Caldera-view restaurants at dinner — The markup for a caldera view at a well-known restaurant runs more expensive above what the same food costs two streets back. The view is the product, not the kitchen. If the meal matters, eat inland. If the view matters, have a drink — not a three-course dinner.",
          "Perissa and Perivolos in August — Both long beaches become so densely packed with sunbeds that you are effectively paying to lie in a car park with water at one end. They are excellent in June and September. In peak August they lose the quality that makes them worth visiting.",
          "The cable car at Athinios midday — The queue for the cable car between the port and Fira at arrival times for large ferries (typically 13:00–15:00) can be 45–60 minutes in summer. The donkey path is physically demanding and ethically contested. Build the walk or the wait into your schedule rather than assuming the cable car is quick.",
          "Hiring an ATV without experience on narrow roads — ATVs are marketed as the fun option and rented to people with no offroad experience. Santorini's caldera-side roads are narrow, the drop on one side is significant, and summer traffic from delivery vehicles and tour buses does not slow down. A small car or scooter with proper experience is safer on this particular island."
        ],
        el: [
          "Το ηλιοβασίλεμα στην Οία χωρίς σχέδιο — Το να φτάσεις στην Οία μεταξύ 18:00 και 20:00 τον Ιούλιο ή τον Αύγουστο χωρίς να έχεις εξασφαλίσει θέση τουλάχιστον μία ώρα νωρίτερα σε βάζει σε τοίχο κόσμου. Το ηλιοβασίλεμα είναι πραγματικά όμορφο. Η εμπειρία από ένα πλήθος 3.000 ατόμων δεν είναι. Το Ημεροβίγλι ή ο Πύργος προσφέρουν το ίδιο φως, τις μισές παρέες και χώρο να αναπνεύσεις.",
          "Εστιατόρια με θέα καλντέρα στο δείπνο — Η προσαύξηση για θέα καλντέρα είναι σημαντικά μεγαλύτερη από ό,τι κοστίζει το ίδιο φαγητό δύο δρόμους πίσω. Η θέα είναι το προϊόν, όχι η κουζίνα. Αν σε νοιάζει το φαγητό, φάε στην ενδοχώρα. Αν σε νοιάζει η θέα, πιες ένα ποτό — όχι τρία πιάτα.",
          "Περίσσα και Περίβολος τον Αύγουστο — Και οι δύο παραλίες γεμίζουν τόσο πυκνά με ξαπλώστρες που ουσιαστικά πληρώνεις για να ξαπλώσεις σε πάρκινγκ με νερό στην άκρη. Είναι εξαιρετικές τον Ιούνιο και τον Σεπτέμβριο. Τον Αύγουστο χάνουν την ποιότητα που τις κάνει αξιόλογες.",
          "Το τελεφερίκ στο Αθίνιο το μεσημέρι — Η ουρά για το τελεφερίκ μεταξύ λιμανιού και Φηρά τις ώρες άφιξης των μεγάλων πλοίων (13:00–15:00) μπορεί να είναι 45–60 λεπτά. Ο δρόμος με γαϊδούρια είναι σωματικά απαιτητικός. Υπολόγισε είτε τον περίπατο είτε την αναμονή στο πρόγραμμά σου.",
          "Ενοικίαση ATV χωρίς εμπειρία σε στενούς δρόμους — Τα ATV διαφημίζονται ως η διασκεδαστική επιλογή και νοικιάζονται σε άτομα χωρίς εμπειρία. Οι δρόμοι γύρω από την καλντέρα είναι στενοί και η κίνηση το καλοκαίρι δεν επιβραδύνει. Ένα μικρό αυτοκίνητο ή σκούτερ με εμπειρία είναι ασφαλέστερο."
        ]
      }
    },
  },

  mykonos: {
    overview: {
      en: "Mykonos: beyond the party, an island of history, sea, and 'hidden' corners. Mykonos is one of those destinations everyone thinks they know before even setting foot there. Images of whitewashed alleys, windmills above the sea, sunset cocktails, and beach clubs playing music till late. Yes, all this exists — and at high volume. But Mykonos has another face: authentic, quiet beaches, an inland village that takes you back to the old Cyclades, museums explaining why this island became the gateway to the Aegean, and (its great asset) Delos just a breath away — one of the most important archaeological sites of the Mediterranean. If you want to put 'Mykonos' on your travel list and do it right, the secret is to see it as a multi-speed island: a bit of cosmopolitan vibe, a bit of quiet for a breather, and a bit of history to leave with something more substantial than just photos.",
      el: "Μύκονος: πέρα από το πάρτι, ένα νησί με ιστορία, θάλασσα και \"κρυφές\" γωνιές. Η Μύκονος είναι από τους προορισμούς που όλοι νομίζουν ότι ξέρουν, πριν καν πατήσουν το πόδι τους εκεί. Εικόνες από κατάλευκα σοκάκια, ανεμόμυλους πάνω από τη θάλασσα, κοκτέιλ στο ηλιοβασίλεμα και beach clubs που παίζουν μουσική μέχρι αργά. Ναι, όλα αυτά υπάρχουν — και μάλιστα σε υψηλή ένταση. Αλλά η Μύκονος έχει κι ένα άλλο πρόσωπο: αυθεντικές παραλίες χωρίς φασαρία, ένα εσωτερικό χωριό που σε \"γυρίζει\" σε παλιές Κυκλάδες, μουσεία που εξηγούν γιατί αυτό το νησί έγινε πύλη στο Αιγαίο, και (το μεγάλο ατού) τη Δήλο σε απόσταση αναπνοής — έναν από τους σημαντικότερους αρχαιολογικούς τόπους της Μεσογείου. Αν θες να γράψεις \"Μύκονος\" στην ταξιδιωτική σου λίστα και να το κάνεις σωστά, το μυστικό είναι να τη δεις σαν νησί πολλών ταχυτήτων: λίγη κοσμικότητα για το vibe, λίγη ησυχία για ανάσα, και λίγη ιστορία για να φύγεις με κάτι πιο ουσιαστικό από φωτογραφίες.",
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Mykonos has become a luxury brand as much as an island. The prices reflect brand positioning, not value. A €12 beer or €35 salad at a beach club is not about the ingredients — it is about paying for the scene. You can still enjoy Mykonos without the premium markup, but you have to know where to go and be willing to walk past the influencer-facing places. The island has authentic corners, but they are never in the spots with the curated queues.",
        el: "Αυτό που δε σου λέει κανείς: Η Μύκονος έχει γίνει τόσο brand όσο και νησί. Οι τιμές αντανακλούν τη θέση του brand, όχι την αξία. Μια μπύρα €12 ή μια σαλάτα €35 σε beach club δεν έχει να κάνει με τα υλικά — έχει να κάνει με τη σκηνή. Μπορείς ακόμα να απολαύσεις τη Μύκονο χωρίς την προσαύξηση, αλλά πρέπει να ξέρεις πού να πας και να είσαι διατεθειμένος να προσπεράσεις τα μαγαζιά που απευθύνονται σε influencers. Το νησί έχει αυθεντικές γωνιές, αλλά ποτέ δεν είναι στα σημεία με την ουρά."
      },
      items: {
        en: [
          "Navigating Chora in July or August at midday — the narrow marble alleys become a slow-moving, sun-exposed queue of cruise passengers and day-trippers from 11:00 to 16:00. The same streets are genuinely pleasant at 08:00 or after 20:00. The mistake is treating Chora like a daytime destination in peak season when it is at its best in the early morning and late evening.",
          "Paradise and Super Paradise beach clubs unless you explicitly want loud music all day — both are built around bottle-service party culture and are among the most expensive stretches of sand in Greece. If you want a beach day with conversation and swimming, Agrari, Fokos, or Kapari deliver infinitely more relaxation without a minimum spend.",
          "Dinner at the waterfront restaurants in Little Venice — the sunset view markup here is the steepest on the island and the food quality is often lower than tavernas two streets inland. Have a cocktail for the view, but eat where the kitchen is the priority, not the photo opportunity.",
          "Renting a car to 'see the island' in peak August — the road network is narrow, parking in Chora and at popular beaches is genuinely stressful, and traffic jams form on the main routes. A quad bike or scooter is more practical for short distances, and the bus covers the main beaches adequately if you are based near a stop.",
          "Day-tripping to Delos without checking the cruise ship calendar — when a large cruise is in port, 2,000–3,000 people descend on the archaeological site simultaneously, turning a serene historical experience into a crowded shuffle. Check the Port of Mykonos cruise schedule online and go on a day with no more than one small ship in port."
        ],
        el: [
          "Να περπατάς στη Χώρα τον Ιούλιο ή τον Αύγουστο το μεσημέρι — τα στενά μαρμαρόστρωτα σοκάκια γίνονται αργή ουρά με κόσμο από κρουαζιέρες και ημερήσιες εκδρομές από τις 11:00 έως τις 16:00. Οι ίδιοι δρόμοι είναι υπέροχοι στις 08:00 ή μετά τις 20:00. Το λάθος είναι να αντιμετωπίζεις τη Χώρα ως ημερήσιο προορισμό στην υψηλή περίοδο.",
          "Παραδείσος και Σούπερ Παραδείσος αν δεν θες δυνατή μουσική όλη μέρα — και οι δύο έχουν χτιστεί γύρω από την κουλτούρα του bottle-service και είναι από τις πιο ακριβές αμμουδιές στην Ελλάδα. Αν θες μέρα στη θάλασσα με συζήτηση και κολύμπι, ο Άγράρι, ο Φωκός ή ο Καπάρι προσφέρουν απείρως περισσότερη ηρεμία χωρίς ελάχιστη δαπάνη.",
          "Δείπνο στα εστιατόρια του Λιτού Βενετσιάνικου Λιμανιού — η προσαύξηση για τη θέα στο ηλιοβασίλεμα είναι η μεγαλύτερη στο νησί και η ποιότητα φαγητού συχνά χαμηλότερη από ταβέρνες δύο δρόμους πίσω. Πιες ένα κοκτέιλ για τη θέα, αλλά φάε εκεί που η κουζίνα είναι προτεραιότητα.",
          "Ενοικίαση αυτοκινήτου για να 'δεις το νησί' τον Αύγουστο — το οδικό δίκτυο είναι στενό, το παρκάρισμα στη Χώρα και σε δημοφιλείς παραλίες είναι αγχωτικό, και η κίνηση δημιουργεί μποτιλιάρισμα στους κεντρικούς δρόμους. Ένα quad ή σκούτερ είναι πιο πρακτικό και το λεωφορείο καλύπτει ικανοποιητικά τις κύριες παραλίες.",
          "Ημερήσια εκδρομή στη Δήλο χωρίς να ελέγξεις το πρόγραμμα κρουαζιερόπλοιων — όταν ένα μεγάλο κρουαζιερόπλοιο είναι στο λιμάνι, 2.000–3.000 άτομα κατεβαίνουν ταυτόχρονα στον αρχαιολογικό χώρο. Έλεγξε το πρόγραμμα κρουαζιέρας του λιμανιού της Μυκόνου και πήγαινε μια μέρα με το πολύ ένα μικρό πλοίο."
        ]
      }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Kefalonia's geography is deceptive — the island is large (780 km²) with a mountainous spine that makes driving between regions slow. The road from Argostoli to Fiskardo, which looks short on a map, takes 90 minutes on narrow winding roads behind tour coaches. Travelers who underestimate these distances end up spending 3–4 hours daily in the car, especially when trying to combine Myrtos, Assos, Fiskardo, and Melissani in a single day.",
        el: "Αυτό που δε σου λέει κανείς: Η γεωγραφία της Κεφαλονιάς είναι απατηλή — το νησί είναι μεγάλο (780 km²) με ορεινή ραχοκοκαλιά που καθιστά αργή την οδήγηση. Ο δρόμος από το Αργοστόλι στο Φισκάρδο, που φαίνεται σύντομος στον χάρτη, παίρνει 90 λεπτά σε στενούς δρόμους. Οι ταξιδιώτες που υποτιμούν αυτές τις αποστάσεις περνούν 3–4 ώρες καθημερινά στο αυτοκίνητο."
      },
      items: {
        en: [
          "Myrtos Beach between 12:00 and 16:00 in August — the famous curve of white pebbles and turquoise water is photographed from above, but down at beach level it is packed with sunbeds and swimmers. The viewing platform above gives the iconic photo without the crowds. Swim at Myrtos early morning or late afternoon, or choose Antisamos for a similar colour with less density.",
          "Visiting Melissani Cave at midday — the sunlight beam through the collapsed roof is brightest around 12:00–13:00, which is exactly when every tour coach arrives. The queue can be 45–60 minutes in summer for a 15-minute boat ride. Arrive at 09:00 or just before 17:00 for a shorter wait and still good light.",
          "Expecting Fiskardo to be a budget destination — Fiskardo is the only settlement that survived the 1953 earthquake intact, so its charm comes with a premium. Taverna prices here are 30–40% higher than in Argostoli or Lixouri. The harbour is worth seeing, but eating inland saves significantly.",
          "Driving the entire island in a single day — the road from Fiskardo in the north to Skala in the south takes over 2 hours without stops. Add stops at Myrtos, Assos, Antisamos, and Drogarati, and you have a rushed 10-hour day. Kefalonia rewards splitting into two regions: north (Fiskardo, Assos, Myrtos) and south (Skala, Lixouri, caves).",
          "Underestimating the ferry wait at Kilini or Poros — summer car queues for the Kefalonia ferry can mean waiting 1–2 ferry cycles (2–4 hours) without a reservation. Book ferry tickets online in advance or arrive early. The same applies to the Argostoli–Lixouri ferry, which is frequent but busy."
        ],
        el: [
          "Παραλία Μύρτος μεταξύ 12:00 και 16:00 τον Αύγουστο — από πάνω είναι εντυπωσιακή, αλλά στο επίπεδο της θάλασσας είναι γεμάτη ξαπλώστρες. Η πλατφόρμα θέασης από πάνω δίνει την εικόνα χωρίς τον κόσμο. Κολύμπησε νωρίς το πρωί ή αργά το απόγευμα.",
          "Επίσκεψη στη Μελισσάνη το μεσημέρι — η ηλιαχτίδα είναι πιο έντονη 12:00–13:00, που είναι ακριβώς η ώρα που φτάνουν όλα τα πούλμαν. Η ουρά μπορεί να είναι 45–60 λεπτά. Φτάσε στις 09:00 ή λίγο πριν τις 17:00.",
          "Να περιμένεις το Φισκάρδο φθηνό — είναι ο μόνος οικισμός που επέζησε από τον σεισμό του 1953, οπότε η γοητεία έχει τίμημα. Οι τιμές είναι 30–40% υψηλότερες από Αργοστόλι ή Ληξούρι.",
          "Να οδηγείς όλο το νησί σε μία μέρα — από Φισκάρδο έως Σκάλα είναι πάνω από 2 ώρες. Η Κεφαλονιά ανταμείβει τον χωρισμό σε δύο περιοχές: βόρεια και νότια.",
          "Να υποτιμάς την αναμονή στο πορθμείο σε Κιλίνι ή Πόρο — οι ουρές το καλοκαίρι μπορεί να σημαίνουν αναμονή 2–4 ωρών. Κλείσε εισιτήρια online ή φτάσε νωρίς."
        ]
      }
    }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Skopelos has a noise ordinance tradition that most Greek islands have quietly abandoned. The Chora genuinely quietens after midnight — this is not an island for late-night sound systems. Visitors who arrive expecting Skiathos-level nightlife are surprised; visitors who arrive looking for a Greek island with actual village atmosphere and natural silence are delighted. Know what you are coming for and you will love it.",
        el: "Αυτό που δε σου λέει κανείς: Η Σκόπελος διατηρεί παράδοση ησυχίας που τα περισσότερα νησιά εγκατέλειψαν. Η Χώρα ησυχάζει γνήσια μετά μεσάνυχτα — δεν είναι νησί για βράδια με δυνατά συστήματα ήχου. Οσοι έρχονται αναμένοντας νυχτερινή ζωή Σκιάθου εκπλήττονται· όσοι έρχονται για αυθεντική χωριάτικη ατμόσφαιρα και φυσική ησυχία χαίρονται. Ξέρεις τι ψάχνεις και θα το αγαπήσεις."
      },
      items: {
        en: [
          "Kastani Beach on a July or August afternoon — the Mamma Mia! connection means it's on every tour itinerary. Between midday and 16:00 in peak season it can feel like a theme-park stop. Go first thing in the morning or save it for September.",
          "Climbing to Agios Ioannis Chapel in the midday heat — the 200 steps are exposed with no shade. In July/August at midday the rock face temperature is brutal. Late afternoon light is also more flattering for photography — go between 17:00–19:00.",
          "Expecting Skopelos Town restaurants to have parking — the Chora was built centuries before the car. Leave your vehicle at the port parking area and walk up. Driving into the upper Chora on summer evenings results in a very narrow dead-end experience.",
          "Relying solely on the local bus — the KTEL covers main road and beaches in summer but infrequently and stops entirely outside main season. For Glossa, northern coast, or spontaneous beach-hopping, you genuinely need a scooter or rental car.",
          "Treating Skopelos as a one-day stop from Skiathos — day-trippers see only the Chora harbour and Kastani. The monasteries, interior villages, Limnonari, Velanio, and Glossa all require at least two nights to properly experience. Skopelos rewards those who stay."
        ],
        el: [
          "✕ Καστάνη τον Ιούλιο/Αύγουστο το μεσημέρι — η σύνδεση με το Mamma Mia! την φέρνει σε κάθε τουριστική ατζέντα. Το μεσημέρι της αιχμής είναι σαν πάρκο διασκέδασης. Πάτε νωρίς το πρωί ή αφήστε τη για Σεπτέμβριο.",
          "✕ Ανάβαση στον Άγιο Ιωάννη με το μεσημέρι — τα 200 σκαλοπάτια δεν έχουν σκιά. Τον Ιούλιο/Αύγουστο ο βράχος καίει. Το φως το απόγευμα είναι και πιο ωραίο — πάτε 17:00–19:00.",
          "✕ Πάρκινγκ στην Χώρα — η πόλη χτίστηκε αιώνες πριν το αυτοκίνητο. Πάρκαρε στον λιμένα και ανέβασε με τα πόδια. Η προσπάθεια οδήγησης στην άνω Χώρα βράδυ καταλήγει σε στενό νεκρό δρόμο.",
          "✕ Μόνο λεωφορείο — το KTEL καλύπτει την κύρια οδό καλοκαίρι, σπάνια και χειμώνα σταματάει. Για Γλώσσα, βόρεια ακτή ή αυθαίρετες παραλίες χρειάζεσαι σκούτερ/αυτοκίνητο.",
          "✕ Μια μέρα από τη Σκιάθο — βλέπεις μόνο λιμάνι και Καστάνη. Τα μοναστήρια, τα χωριά, η Λιμνονάρι, η Βελάνιο, η Γλώσσα θέλουν τουλάχιστον 2 νύχτες. Η Σκόπελος βραβεύει όσους μένουν."
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
    honestAdvice: {
      title: {
        en: "Honest Advice — What to Skip",
        el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις"
      },
      alert: {
        en: "The best Evia experience comes from focusing on one region rather than trying to see everything. Pick north, central, or south and explore it deeply.",
        el: "Η καλύτερη εμπειρία στην Εύβοια έρχεται όταν εστιάζετε σε μία περιοχή. Διαλέξτε βορρά, κέντρο ή νότο και εξερευνήστε σε βάθος."
      },
      items: {
        en: [
          "Chalkida on peak weekends — the bridge becomes a major bottleneck in summer",
          "All-inclusive resorts — Evia is meant to be explored, not locked in a bubble",
          "Trying to see the whole island in two days — you will spend 80% of your time driving",
          "Overhyped social media beaches — the beach next door is often just as beautiful and far less crowded",
          "Expecting a traditional 'party island' — Evia is about nature, wellness, and authenticity",
        ],
        el: [
          "✕ Χαλκίδα τα Σαββατοκύριακα αιχμής — η γέφυρα γίνεται μποτιλιάρισμα",
          "✕ All-inclusive θέρετρα — η Εύβοια είναι για εξερεύνηση",
          "✕ Να δείτε όλο το νησί σε δύο μέρες — θα περάσετε 80% του χρόνου στο αυτοκίνητο",
          "✕ Overhyped παραλίες από social media — η διπλανή παραλία είναι συχνά εξίσου όμορφη",
          "✕ Να περιμένετε παραδοσιακό 'party island' — η Εύβοια είναι φύση, ευεξία και αυθεντικότητα",
        ],
      },
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
    honestAdvice: {
      title: {
        en: "Honest Advice — What to Skip",
        el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις"
      },
      alert: {
        en: "What nobody tells you: Lefkada's west-coast cliff beaches are genuinely exposed to afternoon wind. The same thermal breeze that makes Vassiliki world-class for windsurfing also whips up wave action on Porto Katsiki and Egremni from early afternoon onwards. The morning window is not just about avoiding crowds — it is the only time the sea is genuinely still.",
        el: "Αυτό που δε σου λέει κανείς: Οι δυτικές παραλίες εκτίθενται στον απογευματινό άνεμο. Το πρωί δεν είναι μόνο για να αποφύγεις τα πλήθη — είναι η μόνη ώρα που η θάλασσα είναι πραγματικά ήρεμη."
      },
      items: {
        en: [
          "Driving to Porto Katsiki in a large vehicle between 11:00–15:00 in August — the parking fills up and cars line the roadside for 1–2 km",
          "Expecting Nydri to be a quiet or authentic port town — it is a tourist strip best used as a functional base",
          "Trying to see both Porto Katsiki and Egremni in a single half-day — both involve significant descents and climbs",
          "Ignoring Vassiliki if not a windsurfer — the bay has calm water, excellent fish tavernas, and a relaxed atmosphere",
          "Underestimating the cost of boat trips from Nydri — compare options and ask what is included before committing",
        ],
        el: [
          "✕ Οδήγηση στο Πόρτο Κατσίκι με μεγάλο όχημα 11:00–15:00 τον Αύγουστο",
          "✕ Να περιμένετε το Νυδρί αυθεντικό — είναι τουριστική ζώνη",
          "✕ Να δείτε Πόρτο Κατσίκι και Εγκρεμνούς σε μισή μέρα",
          "✕ Να αγνοήσετε τη Βασιλική αν δεν κάνετε windsurf",
          "✕ Να υποτιμήσετε το κόστος των εκδρομών με βάρκα",
        ],
      },
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Rethymno's Old Town has two completely different faces depending on the time of day. Between 11:00 and 14:00 in summer, the main lanes fill with tour groups and the pace becomes slow-moving. Before 09:00, the same streets are entirely yours — cats, bakers, the sound of the fountain. After 22:00, the restaurants quiet down but the bars and music venues begin, and a different, younger version of the city emerges. Book a single night more than you planned and use the extra time to experience all three.",
        el: "Αυτό που δε σου λέει κανείς: Η Παλιά Πόλη του Ρεθύμνου έχει δύο εντελώς διαφορετικά πρόσωπα. Μεταξύ 11:00–14:00 το καλοκαίρι γεμίζει τουριστικές ομάδες. Πριν τις 09:00, οι ίδιοι δρόμοι είναι εντελώς δικοί σου. Μετά τις 22:00, μια διαφορετική, νεανική εκδοχή της πόλης αναδύεται."
      },
      items: {
        en: [
          "Eating on the harbour front without checking the menu first — the view doesn't improve the octopus. Walk the harbour for the atmosphere, then turn into the Old Town to eat.",
          "Attempting Preveli Beach in August without going very early or by boat — the descent path in 38°C heat with hundreds of people is unpleasant. Arrive before 09:30 or take a boat from Plakias.",
          "Parking inside the Old Town — use the lots outside the walls (port area or Fortezza road). No point you want to reach is more than a 10-minute walk away.",
          "Rushing the Amari Valley into a 2-hour drive-through — stop in Thronos for lunch, see Byzantine frescoes, buy cherries. Give it a half-day minimum.",
          "Visiting the Fortezza in the midday heat of July–August — the fortress is largely unshaded. Go at 08:00 opening or in the last hour before closing."
        ],
        el: [
          "Φαγητό στο λιμάνι χωρίς έλεγχο τιμών — η θέα δεν βελτιώνει το χταπόδι. Φάτε στην Παλιά Πόλη.",
          "Πρέβελη τον Αύγουστο χωρίς πρωινή ώρα — το μονοπάτι με 38°C είναι δυσάρεστο. Πριν τις 09:30 ή με βάρκα.",
          "Πάρκινγκ μέσα στην Παλιά Πόλη — χρησιμοποιήστε τους χώρους έξω από τα τείχη.",
          "Βιαστική επίσκεψη στην Κοιλάδα Αμαρίου — σταματήστε στον Θρόνο για φαγητό. Μισή μέρα τουλάχιστον.",
          "Φορτέτζα το μεσημέρι καλοκαιριού — χωρίς σκιά. Πηγαίνετε 08:00 ή πριν κλείσει."
        ]
      }
    }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Knossos without any prior knowledge of Minoan civilisation can feel like a series of confusing concrete structures. Spend 20 minutes reading the basics beforehand, or visit the Archaeological Museum first, and the site transforms. Go unprepared and you may find yourself wondering why you came.",
        el: "Αυτό που δε σου λέει κανείς: Η Κνωσός χωρίς καμία προηγούμενη γνώση του μινωικού πολιτισμού μοιάζει με μπερδεμένες τσιμεντένιες κατασκευές. Διάβασε πρώτα ή επισκέψου πρώτα το μουσείο."
      },
      items: {
        en: [
          "Eating at the tourist-facing restaurants directly on Lion Square — walk one alley in any direction for better food and lower prices.",
          "Visiting Knossos in midday summer heat — the site has almost no shade. Book the first entrance (08:00) or go late afternoon.",
          "Driving in the old city — the Venetian street grid was not designed for cars. Park outside the walls and walk in.",
          "Expecting beach resort atmosphere — Heraklion is a real city. Urban, sometimes noisy, occasionally chaotic. That is its nature.",
          "Skipping the Archaeological Museum — the museum completes Knossos. Doing one without the other is a wasted opportunity."
        ],
        el: [
          "Φαγητό στην πλατεία Λιονταριών — περπάτα ένα στενό πιο πέρα.",
          "Κνωσός το μεσημέρι καλοκαιριού — χωρίς σκιά. Πήγαινε 08:00 ή απόγευμα.",
          "Οδήγηση στην παλιά πόλη — πάρκαρε έξω από τα τείχη.",
          "Να περιμένεις ατμόσφαιρα θέρετρου — το Ηράκλειο είναι πραγματική πόλη.",
          "Να παραλείψεις το Αρχαιολογικό Μουσείο — ολοκληρώνει την Κνωσό."
        ]
      }
    }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Aegina was not only the first capital of the modern Greek state — it was where the first modern Greek coins were minted (the phoenix, in 1828), where the first Greek newspaper was printed, and where Governor Kapodistrias established the first Greek school and the first orphanage. The neoclassical town you walk through today was essentially purpose-built during those few years as the administrative centre of a newly independent nation. None of this is particularly visible — the town does not make a great fuss of its historical significance — but knowing it makes the harbour front architecture feel less like a pleasant backdrop and more like a deliberate statement about what Greece was trying to become.",
        el: "Αυτό που δε σου λέει κανείς: Η Αίγινα δεν ήταν μόνο η πρώτη πρωτεύουσα του ελληνικού κράτους — ήταν όπου κόπηκαν τα πρώτα σύγχρονα ελληνικά νομίσματα, τυπώθηκε η πρώτη εφημερίδα, και ιδρύθηκε το πρώτο σχολείο και το πρώτο ορφανοτροφείο. Η νεοκλασική πόλη χτίστηκε σκόπιμα ως διοικητικό κέντρο ενός νέου ανεξάρτητου έθνους."
      },
      items: {
        en: [
          "Coming on a Saturday afternoon in July or August without a return ticket booked. The Sunday evening ferries back to Piraeus fill completely. Book the return trip at the same time as the outward journey.",
          "Eating at the first row of tavernas on the harbour front without checking prices. Several are priced for day-trippers. The fish market neighbourhood has better tavernas at better prices.",
          "Visiting Palaiochora without time to slow down. Allow at least 90 minutes. Combine it with the Agios Nektarios monastery.",
          "Buying pistachios only from the port stalls. The co-operative shops 3–4 km into the plain offer better variety, lower prices, and the ability to taste before buying.",
          "Treating Aegina as a day trip only. One night changes the quality of the trip disproportionately.",
        ],
        el: [
          "Να έρθεις Σάββατο απόγευμα Ιούλιο ή Αύγουστο χωρίς εισιτήριο επιστροφής. Κλείσε επιστροφή μαζί με το μετάβασης.",
          "Φαγητό στην πρώτη σειρά ταβερνών του λιμανιού χωρίς έλεγχο τιμών. Η γειτονιά της ψαραγοράς έχει καλύτερες επιλογές.",
          "Επίσκεψη Παλαιοχώρας χωρίς χρόνο. Αφήστε τουλάχιστον 90 λεπτά. Συνδυάστε το με τον Άγιο Νεκτάριο.",
          "Αγορά φιστικιών μόνο από τα περίπτερα του λιμανιού. Ο συνεταιρισμός στον κάμπο έχει καλύτερες τιμές.",
          "Να δεις την Αίγινα μόνο ως ημερήσια εκδρομή. Μία διανυκτέρευση αλλάζει την ποιότητα του ταξιδιού."
        ]
      }
    }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Lasithi is deceptively large and the driving distances between its regions are significant. Travellers who try to combine Agios Nikolaos, Vai, Ierapetra, and Spinalonga in a single day end up spending 5+ hours on winding mountain roads. The road from Agios Nikolaos to Kato Zakros is 2 hours 30 minutes each way. Plan two bases — Agios Nikolaos for the north and Sitia for the far east — rather than expecting to day-trip across the entire region.",
        el: "Αυτό που δε σου λέει κανείς: Το Λασίθι είναι απατηλά μεγάλο και οι αποστάσεις μεταξύ των περιοχών είναι σημαντικές. Όσοι προσπαθούν να συνδυάσουν Άγιο Νικόλαο, Βάι, Ιεράπετρα και Σπιναλόγκα σε μία μέρα περνούν 5+ ώρες σε ορεινούς δρόμους. Σχεδίασε δύο βάσεις — Άγιο Νικόλαο για τα βόρεια και Σητεία για την άπω ανατολή."
      },
      items: {
        en: [
          "Trying to 'do' all of Lasithi from one base — the distance from Agios Nikolaos to Kato Zakros is 2.5 hours, and the road is winding mountain terrain, not a motorway. Split your stay: 2–3 nights in Agios Nikolaos for the western area (Elounda, Spinalonga, Voulisma) and 2–3 nights in Sitia for the far east (Vai, Toplou, Zakros, Xerokampos).",
          "Expecting Vai Beach to be deserted — Vai is now well-known and marketed. In July and August, the car park fills by 10:00 and the main beach is busy. Go before 08:30 or visit the quieter north end of the beach via the path through the palm grove.",
          "Driving the Elounda–Sitia road without accounting for the mountain section — the 60 km between Agios Nikolaos and Sitia look short on the map. In reality, the road climbs through the Dikti Mountains with hairpin turns and takes 90 minutes. Google Maps estimates are optimistic. Add 30%.",
          "Spinalonga at midday in peak season — the island has minimal shade and the walk around the fortress walls is exposed. The 09:00 boat from Plaka puts you on the island before the heat and the crowds. By 11:00, the tour groups arrive and the silence that makes Spinalonga so affecting is gone.",
          "Skipping the south coast entirely — most visitors stay on the north coast (Agios Nikolaos, Elounda, Sitia) and miss Ierapetra and the south coast beaches. Kalo Nero and Xerokampos offer a completely different coastline — wider, wilder, with Libyan Sea exposure and warmer water well into October."
        ],
        el: [
          "Να κάνεις όλο το Λασίθι από μία βάση — από Άγιο Νικόλαο έως Κάτω Ζάκρο είναι 2,5 ώρες. Χώρισε τη διαμονή: 2–3 νύχτες Άγιο Νικόλαο, 2–3 νύχτες Σητεία.",
          "Να περιμένεις το Βάι έρημο — τον Ιούλιο και Αύγουστο γεμίζει. Πήγαινε πριν τις 08:30 ή στο βόρειο άκρο.",
          "Οδήγηση Ελούντα–Σητεία χωρίς να υπολογίζεις τα βουνά — το Google Maps είναι αισιόδοξο. Πρόσθεσε 30%.",
          "Σπιναλόγκα το μεσημέρι — η βάρκα 09:00 από Πλάκα σε βάζει στο νησί πριν τη ζέστη και τα πλήθη.",
          "Να παραλείπεις τη νότια ακτή — Καλό Νερό και Ξερόκαμπος προσφέρουν εντελώς διαφορετική ακτογραμμή."
        ]
      }
    }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Tinos is a twenty-minute ferry ride from Mykonos — and the contrast between the two islands is so absolute that first-time visitors sometimes wonder if they are in the same country. The same ferry route that delivers thousands of tourists to Mykonos's beach clubs deposits a fraction of that number in Tinos. The island is not undiscovered — Greeks have been coming here for religious and gastronomic pilgrimage for two centuries — but it has never been colonised by mass international tourism. The result is a destination that is, in 2026, still largely what the Cyclades were fifty years ago: honest, serious and deeply rewarding.",
        el: "Αυτό που δε σου λέει κανείς: Η Τήνος είναι είκοσι λεπτά με το πλοίο από τη Μύκονο — και η αντίθεση είναι τόσο απόλυτη που οι επισκέπτες αναρωτιούνται αν είναι στην ίδια χώρα. Η Τήνος δεν είναι άγνωστη — οι Έλληνες έρχονται για θρησκευτικό και γαστρονομικό προσκύνημα εδώ και δύο αιώνες — αλλά δεν έχει αποικιστεί ποτέ από τον μαζικό τουρισμό."
      },
      items: {
        en: [
          "Expecting Tinos to perform for you — the island is not optimised for the tourist gaze. The pilgrimage culture, marble workshops, dovecotes and village food exist because Tinos has its own deep identity. Approach it as a guest, not as an audience.",
          "Treating the Church of Panagia Evangelistria as only a photo opportunity — the atmosphere inside demands respectful attention. Visitors who walk through quickly for a selfie miss something genuinely moving.",
          "Spending your entire time on the coast — the interior of Tinos is what makes it unlike anywhere else. Rent a car for at least one full day to explore the villages, dovecotes, Volax boulders and marble workshops.",
          "Visiting Pyrgos without allocating real time — the Museum of Marble Crafts alone deserves 90 minutes. Add the Chalepas Museum, the cemetery, a walk through the lanes and lunch, and you have the best single day on the island.",
        ],
        el: [
          "Να περιμένεις η Τήνος να διασκεδάσει εσένα — το νησί δεν είναι βιτρίνα. Προσέγγισέ το ως φιλοξενούμενος.",
          "Να αντιμετωπίζεις την Παναγία Ευαγγελίστρια μόνο ως φωτογραφία — η ατμόσφαιρα μέσα απαιτεί σεβασμό.",
          "Να μένεις μόνο στην ακτή — το εσωτερικό της Τήνου είναι μοναδικό. Νοίκιασε αυτοκίνητο για μία μέρα.",
          "Να επισκέπτεσαι τον Πύργο βιαστικά — το Μουσείο Μαρμάρου αξίζει 90 λεπτά. Πρόσθεσε το Μουσείο Χαλεπά και φαγητό για την καλύτερη μέρα στο νησί.",
        ]
      }
    }
  },
};