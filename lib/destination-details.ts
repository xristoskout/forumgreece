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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Lesvos is huge — 1,630 km², the third-largest Greek island — and its scale catches travelers off guard. The airport to Molyvos is 60 km. Mytilene to Sigri is 90 km. Without a car, you are dependent on a limited bus network that serves the main routes but makes exploring the west coast or the petrified forest impractical. Lesvos rewards slow, focused stays in one region rather than daily cross-island commutes.",
        el: "Αυτό που δε σου λέει κανείς: Η Λέσβος είναι τεράστια — 1.630 km², το τρίτο μεγαλύτερο ελληνικό νησί — και η κλίμακά της αιφνιδιάζει. Από το αεροδρόμιο έως τη Μόλυβο είναι 60 km. Από τη Μυτιλήνη έως τη Σίγρι είναι 90 km. Χωρίς αυτοκίνητο, είσαι εξαρτημένος από περιορισμένο δίκτυο λεωφορείων. Η Λέσβος ανταμείβει αργές, εστιασμένες διαμονές σε μία περιοχή."
      },
      items: {
        en: [
          "Expecting to explore the whole island from a single base in Mytilene — the capital is convenient for the airport and port but sits at the southeastern corner. Molyvos, Eresos, and Sigri are each 60–90 minutes away by car. Consider splitting your stay: 2–3 nights in Mytilene for the town and south coast, then 2–3 nights in Molyvos or Eresos for the north and west.",
          "Relying on public transport for the west coast — the bus serves Mytilene, Molyvos, and Kalloni reliably, but routes to Sigri, Eresos, and the Petrified Forest are limited to 1–2 buses daily. Taxis between regions are expensive (€50–80 per trip). A rental car is not a luxury on Lesvos; it is a necessity.",
          "Skipping the Petrified Forest because it looks 'far' — Sigri is a 90-minute drive from Mytilene, but the Petrified Forest of Lesvos is one of the most important natural monuments in Europe and completely unique. The drive itself through rolling hills, olive groves, and traditional villages is part of the experience.",
          "Visiting in August without understanding the north coast wind — the meltemi can make swimming uncomfortable on the east and north beaches (including Molyvos and Petra). The west coast (Eresos, Sigri, Skala Eresou) and south coast (Vatera, Agios Ermogenis) are more sheltered and offer better swimming conditions.",
          "Treating Lesvos as a 'quick island stop' — the ferry from Athens takes 8–12 hours, and the airport has limited direct international flights. Lesvos is a destination you commit to, not one you squeeze between two other islands. Plan a minimum of 5 nights to make the travel worthwhile."
        ],
        el: [
          "Να εξερευνάς όλο το νησί από μία βάση στη Μυτιλήνη — η πρωτεύουσα είναι βολική αλλά βρίσκεται στη νοτιοανατολική γωνία. Μόλυβος, Ερεσός και Σίγρι είναι 60–90 λεπτά μακριά. Σκέψου να χωρίσεις τη διαμονή σου.",
          "Να βασίζεσαι στη δημόσια συγκοινωνία για τη δυτική ακτή — τα δρομολόγια προς Σίγρι, Ερεσό και Απολιθωμένο Δάσος είναι 1–2 λεωφορεία ημερησίως. Η ενοικίαση αυτοκινήτου δεν είναι πολυτέλεια στη Λέσβο· είναι αναγκαιότητα.",
          "Να παραλείπεις το Απολιθωμένο Δάσος επειδή φαίνεται 'μακριά' — είναι ένα από τα σημαντικότερα φυσικά μνημεία της Ευρώπης. Η ίδια η διαδρομή ανάμεσα σε ελιές και παραδοσιακά χωριά είναι κομμάτι της εμπειρίας.",
          "Επίσκεψη τον Αύγουστο χωρίς να γνωρίζεις τον βοριά — το μελτέμι επηρεάζει τις βόρειες παραλίες. Η δυτική και νότια ακτή είναι πιο προστατευμένες.",
          "Να αντιμετωπίζεις τη Λέσβο ως 'γρήγορη στάση' — το πλοίο από Αθήνα κάνει 8–12 ώρες και το αεροδρόμιο έχει περιορισμένες πτήσεις. Χρειάζονται τουλάχιστον 5 νύχτες."
        ]
      }
    }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Crete is too large and diverse to 'see' in a single trip. At 8,336 km², it is larger than many small countries. Travelers who try to visit both Chania and Heraklion with a day trip to Elafonisi, Knossos, Samaria Gorge, and Spinalonga in a 5-day stay end up exhausted and disappointed. The island demands a regional approach: pick west (Chania), central (Heraklion/Rethymno), or east (Agios Nikolaos/Sitia) and explore one region properly.",
        el: "Αυτό που δε σου λέει κανείς: Η Κρήτη είναι πολύ μεγάλη και ποικιλόμορφη για να τη 'δεις' σε ένα ταξίδι. Με 8.336 km², είναι μεγαλύτερη από πολλές μικρές χώρες. Όσοι προσπαθούν να επισκεφθούν Χανιά, Ηράκλειο, Ελαφονήσι, Κνωσό, Φαράγγι Σαμαριάς και Σπιναλόγκα σε 5 μέρες καταλήγουν εξαντλημένοι. Το νησί απαιτεί περιφερειακή προσέγγιση: διάλεξε δυτικά, κεντρικά ή ανατολικά."
      },
      items: {
        en: [
          "Trying to combine west and east Crete in one trip — Chania to Sitia is a 4-hour drive. Samaria Gorge opens at 06:00 and closes by 16:00. Knossos is most pleasant before 09:00 or after 17:00. A trip from Chania to Knossos and back with the palace visit takes a full day. Accept that you will need a return visit and plan one region per trip.",
          "Driving the National Road without patience — the main north coast road (EO90) is congested in summer, especially through the stretches between Chania–Rethymno and Rethymno–Heraklion. Add 30–50% to Google Maps estimates in July and August. The southern road via Mires is slower but more scenic and much less stressful.",
          "Elafonisi Beach between 11:00 and 16:00 in July–August — the pink sand lagoon gets so crowded that the water turns murky and parking overflows onto the road for 2 km. Arrive before 09:00 or go to Falasarna or Kedrodasos for similar water without the queuing.",
          "Visiting Knossos without a guide or audio tour — the palace is a reconstructed archaeological site where the original layout is not obvious. Without context, it looks like a maze of reddish concrete and stones. A guide transforms it into the vivid centre of Minoan civilisation.",
          "Assuming all beaches are safe for swimming — some of Crete's most beautiful beaches (Marthas, Triopetra, Kommos) have strong currents and no lifeguards. Check local conditions before swimming, especially on south coast beaches exposed to Libyan Sea swells."
        ],
        el: [
          "Να συνδυάζεις δυτική και ανατολική Κρήτη σε ένα ταξίδι — Χανιά έως Σητεία είναι 4 ώρες. Αποδέξου ότι θα χρειαστείς δεύτερη επίσκεψη.",
          "Οδήγηση στην Εθνική Οδό χωρίς υπομονή — ο βόρειος άξονας (ΕΟ90) έχει μποτιλιάρισμα το καλοκαίρι, ειδικά Χανιά–Ρέθυμνο και Ρέθυμνο–Ηράκλειο. Πρόσθεσε 30–50% στους χρόνους του Google Maps.",
          "Ελαφονήσι μεταξύ 11:00 και 16:00 τον Ιούλιο–Αύγουστο — η ροζ λιμνοθάλασσα γεμίζει τόσο που το νερό θολώνει. Φτάσε πριν τις 09:00 ή πήγαινε σε Φαλάσαρνα ή Κεδρόδασος.",
          "Επίσκεψη στην Κνωσό χωρίς οδηγό — το ανάκτορο είναι ανακατασκευασμένο και χωρίς πλαίσιο μοιάζει με λαβύρινθο από μπετόν. Ένας οδηγός το μεταμορφώνει σε ζωντανό κέντρο του Μινωικού πολιτισμού.",
          "Να θεωρείς όλες τις παραλίες ασφαλείς — μερικές από τις πιο όμορφες (Μάρθας, Τριόπετρα, Κόμμος) έχουν ισχυρά ρεύματα χωρίς ναυαγοσώστες."
        ]
      }
    }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Corfu's Old Town transforms completely when cruise ships dock. On days with 3+ cruise ships (check the port schedule), 8,000–10,000 people pour into the narrow streets between 09:00 and 16:00. The same streets that feel magical at 20:00 become impassable queues past shop windows selling the same olive-wood souvenirs. Plan your Old Town visit for late afternoon or evening.",
        el: "Αυτό που δε σου λέει κανείς: Η Παλιά Πόλη της Κέρκυρας μεταμορφώνεται όταν φτάνουν κρουαζιερόπλοια. Με 3+ πλοία, 8.000–10.000 άτομα γεμίζουν τα στενά σοκάκια. Οι ίδιοι δρόμοι που είναι μαγικοί στις 20:00 γίνονται απροσπέλαστες ουρές. Προγραμμάτισε την επίσκεψή σου για αργά το απόγευμα ή το βράδυ."
      },
      items: {
        en: [
          "Driving the main road along the east coast in summer — the road from Corfu Town to Kavos (EO24) is narrow, congested, and lined with development. The 25 km to Paleokastritsa can take 60–90 minutes in August. Rent a scooter or ATV for short trips and base yourself in one region rather than commuting daily.",
          "Paleokastritsa Beach in peak season — the six coves of Paleokastritsa are as beautiful as advertised, but the main beach is densely packed and parking is a genuine challenge. Walk 10 minutes to Agios Spyridon or Platakia for less crowded swimming in the same stunning setting.",
          "Expecting a quiet, low-key resort in Kavos — Kavos is purpose-built for 18–30 nightlife and is the loudest resort on the island. If you are not there for club music until dawn, choose Agios Gordios, Sidari (family side), or the quieter west coast beaches.",
          "Visiting the Achilleion Palace without the audio guide — the palace's charm is in the details: the Habsburg connections, Sisi's personal touches, and the mythology of the gardens. Without the guide, it is a pleasant but forgettable 19th-century villa with statues.",
          "Skipping the Corfu interior for the coast — the coastal resorts get all the attention, but the interior villages (Pelekas, Lakones, Doukades, Sinarades) have traditional tavernas, actual Corfiot life, and views that rival the coastal spots. A single afternoon in the inland makes the trip considerably richer."
        ],
        el: [
          "Οδήγηση στον κεντρικό δρόμο της ανατολικής ακτής το καλοκαίρι — η διαδρομή από Κέρκυρα προς Κάβο είναι στενή και μποτιλιαρισμένη. Τα 25 χλμ. προς Παλαιοκαστρίτσα μπορεί να πάρουν 60–90 λεπτά.",
          "Παραλία Παλαιοκαστρίτσας σε περίοδο αιχμής — η κύρια παραλία είναι γεμάτη. Περπάτα 10 λεπτά στον Άγιο Σπυρίδωνα ή στα Πλατάκια.",
          "Να περιμένεις ήσυχες διακοπές στον Κάβο — είναι φτιαγμένος για νυχτερινή ζωή 18–30. Αν δεν θες club μέχρι το πρωί, διάλεξε Άγιο Γόρδη ή Σιδάρι.",
          "Επίσκεψη στο Αχίλλειο χωρίς ακουστικό οδηγό — η γοητεία του παλατιού κρύβεται στις λεπτομέρειες της αυτοκράτειρας Σίσσυ.",
          "Να παραλείπεις την ενδοχώρα της Κέρκυρας — τα ορεινά χωριά (Πέλεκας, Λακώνες, Δουκάδες) έχουν αυθεντικές ταβέρνες και ζωή που δεν υπάρχει στις παραλίες."
        ]
      }
    }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Nafplio's Old Town is genuinely small, and on summer weekends it fills to capacity. The main square and the Syntagma–Bourtzi waterfront corridor become a slow-moving stream of people between 11:00 and 14:00 and again from 19:00 to 22:00. The experience changes dramatically depending on when you walk through. Early morning (before 09:00) and late evening (after 22:00) reveal a different Nafplio — quieter, more atmospheric, and completely yours.",
        el: "Αυτό που δε σου λέει κανείς: Η Παλιά Πόλη του Ναυπλίου είναι μικρή και τα καλοκαιρινά Σαββατοκύριακα γεμίζει υπερβολικά. Η κεντρική πλατεία και ο παραλιακός δρόμος προς Μπούρτζι γίνονται αργή ροή κόσμου. Νωρίς το πρωί (πριν τις 09:00) και αργά το βράδυ (μετά τις 22:00) αποκαλύπτουν ένα εντελώς διαφορετικό Ναύπλιο."
      },
      items: {
        en: [
          "Climbing Palamidi Castle without preparing for the stairs — the 999 steps are steep, uneven, and exposed to the sun. On a July afternoon with 35°C heat, it is genuinely strenuous. Go early (before 09:00) or late (after 18:00), bring water, and take breaks at the intermediate landings. The view is worth it, but the climb demands respect.",
          "Expecting Bourtzi Castle tours to run year-round — the small fortress on the harbour island has limited opening hours and often closes entirely outside the Easter–October season. Check operating times in advance. If Bourtzi is closed, the view from the opposite pier is still iconic.",
          "Limiting your trip to Nafplio town only — the real strength of Nafplio is as a base. Mycenae is 25 minutes, Epidaurus is 40 minutes, Ancient Nemea is 50 minutes, and the beaches of the Argolic coast (Tolo, Vivari, Porto Heli) are 15–40 minutes. Staying 3+ nights and renting a car transforms Nafplio from a scenic stop to a genuine regional hub.",
          "Parking in the Old Town — the streets within the old town walls are pedestrianised or impossibly narrow for cars. Parking outside the walls (especially at the free lot near the port or the paid lots near Palamidi) is necessary. Trying to 'find a spot nearby' will cost you 20–30 minutes of circling.",
          "Visiting on a Monday — many of the best attractions in Nafplio and the surrounding Argolid (including the Archaeological Museum of Nafplio, Mycenae, and Epidaurus) are closed on Mondays. Plan your arrival for Tuesday–Sunday to avoid missing the key sites."
        ],
        el: [
          "Ανάβαση στο Παλαμήδι χωρίς προετοιμασία — τα 999 σκαλιά είναι απότομα και εκτεθειμένα στον ήλιο. Πήγαινε νωρίς ή αργά, πάρε νερό.",
          "Να περιμένεις ότι το Μπούρτζι λειτουργεί όλο τον χρόνο — έχει περιορισμένες ώρες και συχνά κλείνει εκτός σεζόν.",
          "Να περιορίζεις το ταξίδι σου μόνο στο Ναύπλιο — οι Μυκήνες είναι 25 λεπτά, η Επίδαυρος 40 λεπτά. Νοίκιασε αυτοκίνητο.",
          "Παρκάρισμα στην Παλιά Πόλη — οι δρόμοι είναι πεζοδρομημένοι ή απίστευτα στενοί. Πάρκαρε έξω από τα τείχη.",
          "Επίσκεψη Δευτέρα — πολλά μουσεία και αρχαιολογικοί χώροι (Μυκήνες, Επίδαυρος) είναι κλειστά."
        ]
      }
    }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Nafplio's Old Town is genuinely small, and on summer weekends it fills to capacity. The main square and the Syntagma–Bourtzi waterfront corridor become a slow-moving stream of people between 11:00 and 14:00 and again from 19:00 to 22:00. The experience changes dramatically depending on when you walk through. Early morning (before 09:00) and late evening (after 22:00) reveal a different Nafplio — quieter, more atmospheric, and completely yours.",
        el: "Αυτό που δε σου λέει κανείς: Η Παλιά Πόλη του Ναυπλίου είναι μικρή και τα καλοκαιρινά Σαββατοκύριακα γεμίζει υπερβολικά. Η κεντρική πλατεία και ο παραλιακός δρόμος προς Μπούρτζι γίνονται αργή ροή κόσμου. Νωρίς το πρωί (πριν τις 09:00) και αργά το βράδυ (μετά τις 22:00) αποκαλύπτουν ένα εντελώς διαφορετικό Ναύπλιο."
      },
      items: {
        en: [
          "Climbing Palamidi Castle without preparing for the stairs — the 999 steps are steep, uneven, and exposed to the sun. On a July afternoon with 35°C heat, it is genuinely strenuous. Go early (before 09:00) or late (after 18:00), bring water, and take breaks at the intermediate landings. The view is worth it, but the climb demands respect.",
          "Expecting Bourtzi Castle tours to run year-round — the small fortress on the harbour island has limited opening hours and often closes entirely outside the Easter–October season. Check operating times in advance. If Bourtzi is closed, the view from the opposite pier is still iconic.",
          "Limiting your trip to Nafplio town only — the real strength of Nafplio is as a base. Mycenae is 25 minutes, Epidaurus is 40 minutes, Ancient Nemea is 50 minutes, and the beaches of the Argolic coast (Tolo, Vivari, Porto Heli) are 15–40 minutes. Staying 3+ nights and renting a car transforms Nafplio from a scenic stop to a genuine regional hub.",
          "Parking in the Old Town — the streets within the old town walls are pedestrianised or impossibly narrow for cars. Parking outside the walls (especially at the free lot near the port or the paid lots near Palamidi) is necessary. Trying to 'find a spot nearby' will cost you 20–30 minutes of circling.",
          "Visiting on a Monday — many of the best attractions in Nafplio and the surrounding Argolid (including the Archaeological Museum of Nafplio, Mycenae, and Epidaurus) are closed on Mondays. Plan your arrival for Tuesday–Sunday to avoid missing the key sites."
        ],
        el: [
          "Ανάβαση στο Παλαμήδι χωρίς προετοιμασία — τα 999 σκαλιά είναι απότομα και εκτεθειμένα στον ήλιο. Πήγαινε νωρίς ή αργά, πάρε νερό.",
          "Να περιμένεις ότι το Μπούρτζι λειτουργεί όλο τον χρόνο — έχει περιορισμένες ώρες και συχνά κλείνει εκτός σεζόν.",
          "Να περιορίζεις το ταξίδι σου μόνο στο Ναύπλιο — οι Μυκήνες είναι 25 λεπτά, η Επίδαυρος 40 λεπτά. Νοίκιασε αυτοκίνητο.",
          "Παρκάρισμα στην Παλιά Πόλη — οι δρόμοι είναι πεζοδρομημένοι ή απίστευτα στενοί. Πάρκαρε έξω από τα τείχη.",
          "Επίσκεψη Δευτέρα — πολλά μουσεία και αρχαιολογικοί χώροι (Μυκήνες, Επίδαυρος) είναι κλειστά."
        ]
      }
    }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Thessaloniki is a genuine working city, not a curated tourist destination. It does not 'perform' for visitors the way Santorini or Mykonos do. The central market (Kapani) is a real food market with fish smells and wet floors, not a polished food hall. The Ano Poli streets are lived-in neighbourhoods, not a museum set. This authenticity is the city's greatest asset — but it means you need to engage with it rather than expect a packaged experience.",
        el: "Αυτό που δε σου λέει κανείς: Η Θεσσαλονίκη είναι μια γνήσια εργαζόμενη πόλη, όχι ένας στημένος τουριστικός προορισμός. Η Κεντρική Αγορά (Καπάνι) είναι αληθινή με μυρωδιές ψαριού, όχι polished food hall. Η αυθεντικότητα είναι το μεγαλύτερο πλεονέκτημά της — αλλά σημαίνει ότι πρέπει να συμμετάσχεις, όχι απλά να παρακολουθήσεις."
      },
      items: {
        en: [
          "Expecting a 'beach holiday' in the city — Thessaloniki has a waterfront but no proper city beach. The nearest good beaches are 30–60 minutes away in Epanomi, Nea Michaniona, or the Kassandra peninsula (Halkidiki). The city is about food, culture, shopping, and nightlife — not swimming from your hotel.",
          "Relying on the car for the city centre — Thessaloniki's centre is congested, parking is scarce and expensive, and the one-way system is confusing even for Greeks. The city is walkable for central sights, and taxis are affordable. Use the car only for day trips outside the city.",
          "Skipping Ano Poli for the waterfront — the Upper Town offers the best views of the Thermaic Gulf, the most authentic traditional architecture (remnants of the old city that survived the 1917 fire), and tavernas that serve food with a view. The waterfront is pleasant but Ano Poli has more character.",
          "Eating in Ladadika without checking prices — Ladadika is the most atmospheric dining district, but its popularity means restaurants targeting tourists charge premium prices. Walk a few minutes to the streets around Navarinou Square or the eastern side of the city centre for better value and equally good food.",
          "Underestimating the summer heat for sightseeing — Thessaloniki gets intensely hot and humid in July–August, and many Byzantine monuments are outdoors. Visit the Rotunda, White Tower, and churches in the morning (before 11:00) and save the waterfront and food markets for the late afternoon and evening."
        ],
        el: [
          "Να περιμένεις 'παραλιακές διακοπές' μέσα στην πόλη — η κοντινότερη καλή παραλία είναι 30–60 λεπτά μακριά. Η πόλη είναι για φαγητό, πολιτισμό και νυχτερινή ζωή.",
          "Να χρησιμοποιείς αυτοκίνητο στο κέντρο — η πόλη είναι βατή με τα πόδια και τα ταξί είναι οικονομικά. Χρησιμοποίησε το αυτοκίνητο μόνο για εκδρομές εκτός πόλης.",
          "Να παραλείπεις την Άνω Πόλη — έχει την καλύτερη θέα και την πιο αυθεντική αρχιτεκτονική.",
          "Φαγητό στο Λαδάδικο χωρίς έλεγχο τιμών — είναι η πιο ατμοσφαιρική γειτονιά αλλά με premium τιμές. Περπάτα λίγο προς Ναβαρίνου για καλύτερη αξία.",
          "Να υποτιμάς τη ζέστη το καλοκαίρι — η Θεσσαλονίκη έχει υγρή ζέστη Ιούλιο–Αύγουστο. Επισκέψου τα μνημεία το πρωί και κάνε βόλτα στην παραλία το απόγευμα."
        ]
      }
    }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Athens in July and August is genuinely hot — not 'Mediterranean warm' but sustained 35–38°C heat that makes sightseeing physically demanding. The Acropolis has minimal shade and reflective marble surfaces that amplify the heat. Many travelers underestimate this and end up exhausted by midday. The solution is simple: sightsee from 07:00–11:00, rest in an air-conditioned museum or café during peak heat, and resume after 18:00. Athens at 20:00 is a different city — cooler, lit up, and far more pleasant.",
        el: "Αυτό που δε σου λέει κανείς: Η Αθήνα τον Ιούλιο και Αύγουστο έχει πραγματική ζέστη — όχι 'μεσογειακή ζέστη' αλλά 35–38°C. Η Ακρόπολη δεν έχει σκιά. Η λύση είναι απλή: επίσκεψη 07:00–11:00, ξεκούραση σε μουσείο με κλιματισμό, και συνέχεια μετά τις 18:00. Η Αθήνα στις 20:00 είναι μια διαφορετική πόλη."
      },
      items: {
        en: [
          "Queuing for the Acropolis between 10:00 and 14:00 — the ticket line and the crowd on the Parthenon plateau peak sharply between these hours, especially when cruise ships are in port at Piraeus. Book a skip-the-line ticket online or arrive for the 08:00 opening slot. The 17:00+ entry is also quieter and the golden hour light is better for photos.",
          "Eating in restaurants directly on Plaka's main tourist streets — the tavernas on Adrianou and the streets immediately around Monastiraki Square survive on volume, not quality. Walk two blocks inward toward the Anafiotika steps or the streets below the Acropolis Museum for food that locals actually eat.",
          "Trying to visit the Acropolis, Ancient Agora, Roman Agora, Kerameikos, and National Archaeological Museum in a single day — this is 'Athens as a checklist' and it is exhausting. Pick two sites maximum per day. A 3-day stay with 2 sites per day plus one neighbourhood exploration per evening is a sustainable and genuinely enjoyable pace.",
          "Relying on taxis for the city centre — Uber and regular taxis are affordable, but central Athens traffic is heavy and the short distances often make walking or the Metro faster. The Metro is the most efficient way to move between major archaeological sites and neighbourhoods.",
          "Ignoring the Athens Riviera — the southern coast (Glyfada, Vouliagmeni, Lake Vouliagmeni, Cape Sounion) is a 30–50 minute drive or tram ride from the centre. Day-tripping to the islands leaves no time for the Riviera, but the coastal strip offers its own swimming, seafood, and sunset experiences that many Athens visitors miss completely."
        ],
        el: [
          "Ουρά για την Ακρόπολη 10:00–14:00 — κλείσε online εισιτήριο ή φτάσε στις 08:00. Η είσοδος μετά τις 17:00 έχει λιγότερο κόσμο και καλύτερο φως.",
          "Φαγητό στα τουριστικά εστιατόρια της Πλάκας — οι ταβέρνες στην Αδριανού ζουν από τον όγκο, όχι την ποιότητα. Περπάτα προς Αναφιώτικα ή κάτω από το Μουσείο Ακρόπολης.",
          "Να δεις Ακρόπολη, Αρχαία Αγορά, Ρωμαϊκή Αγορά, Κεραμεικό και Εθνικό Αρχαιολογικό Μουσείο σε μία μέρα — διάλεξε 2 site τη μέρα.",
          "Να βασίζεσαι σε ταξί για το κέντρο — το μετρό είναι ταχύτερο για τις αποστάσεις μεταξύ αρχαιολογικών χώρων.",
          "Να αγνοείς την Αθηναϊκή Ριβιέρα — η νότια ακτή είναι 30–50 λεπτά από το κέντρο και προσφέρει θάλασσα, ψάρι και ηλιοβασίλεμα."
        ]
      }
    }
  },

  syros: {
    overview: {
      en: "Syros is simultaneously the most cosmopolitan and the most authentic island in the Cyclades — and those two qualities coexist because the city's identity is fundamentally not about tourism. Its capital, Ermoupoli, is a working Greek city with a grand neoclassical waterfront, a marble-paved central square, and the Apollo Theatre modelled on La Scala. The island offers an unexpected richness: Ano Syros with its Catholic cathedral and medieval lanes, quiet beaches along the west and south coasts, and a food culture that produces halvadopites and loukoumades you will remember long after you leave.",
      el: "Η Σύρος είναι ταυτόχρονα το πιο κοσμοπολίτικο και το πιο αυθεντικό νησί των Κυκλάδων. Η Ερμούπολη είναι μια ζωντανή ελληνική πόλη με νεοκλασικό παραλιακό μέτωπο και το Θέατρο Απόλλων. Η Άνω Σύρος με τον καθολικό καθεδρικό, οι ήσυχες παραλίες και η κουλτούρα του φαγητού συνθέτουν μια μοναδική εμπειρία.",
    },
    pageIncludes: {
      en: [
        "Ermoupoli architecture, square & port",
        "Vaporia neoclassical district",
        "Ano Syros medieval lanes & cathedral",
        "Best beaches: Galissas, Kini, Delfini, Vari",
        "Villages: Kini, Poseidonia, Chroussa",
        "Halvadopites, loukoumades & food culture",
        "How to get there & ferry connections",
        "Best time by season including winter",
        "Honest advice on what to skip",
        "Practical tips & FAQ",
      ],
      el: [
        "Ερμούπολη: αρχιτεκτονική, πλατεία & λιμάνι",
        "Βαπόρια: νεοκλασική συνοικία",
        "Άνω Σύρος: μεσαιωνικά σοκάκια & καθεδρικός",
        "Καλύτερες παραλίες: Γαλησσάς, Κίνι, Δελφίνι, Βαρή",
        "Χωριά: Κίνι, Ποσειδωνία, Χρούσσα",
        "Χαλβαδόπιτες, λουκουμάδες & γαστρονομία",
        "Πώς να φτάσεις & ακτοπλοϊκές συνδέσεις",
        "Καλύτερη εποχή ανά σεζόν, συμπεριλαμβανομένου χειμώνα",
        "Τι να αποφύγεις — ειλικρινής συμβουλή",
        "Πρακτικές συμβουλές & FAQ",
      ],
    },
    perfectFor: {
      en: [
        "Culture & architecture enthusiasts",
        "Travellers seeking authentic Greek city life",
        "Families with young children",
        "Multi-island Cyclades base",
        "Off-season & winter travel",
        "Food & sweet shop culture",
        "Music & arts lovers",
        "Anyone tired of tourist-only islands",
      ],
      el: [
        "Λάτρεις του πολιτισμού & της αρχιτεκτονικής",
        "Ταξιδιώτες που αναζητούν αυθεντική ελληνική πόλη",
        "Οικογένειες με μικρά παιδιά",
        "Βάση για πολλά νησιά των Κυκλάδων",
        "Ταξίδι εκτός σεζόν & χειμώνα",
        "Λάτρεις της γαστρονομίας & των γλυκών",
        "Λάτρεις της μουσικής & των τεχνών",
        "Όσοι έχουν κουραστεί από τουριστικά νησιά",
      ],
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Syros is not trying to impress you. It is a real island with a real capital city, and it wears its authenticity more quietly than its neighbours. The summer crowds are gentler, the prices are lower, and the experience is richer for it. But visitors who come expecting a typical beach-resort holiday sometimes find the island's urban character unexpected. Syros is best approached as a cultural destination that happens to also have excellent beaches, rather than the reverse.",
        el: "Αυτό που δε σου λέει κανείς: Η Σύρος δεν προσπαθεί να σε εντυπωσιάσει. Είναι ένα αληθινό νησί με πραγματική πρωτεύουσα, και φοράει την αυθεντικότητά της πιο ήσυχα από τους γείτονές της. Ο κόσμος το καλοκαίρι είναι πιο ήπιος, οι τιμές πιο χαμηλές και η εμπειρία πιο πλούσια. Αλλά όσοι έρχονται περιμένοντας τυπικές παραθεριστικές διακοπές συχνά βρίσκουν τον αστικό χαρακτήρα μη αναμενόμενο."
      },
      items: {
        en: [
          "Expecting empty resort-style beaches — Syros's beaches are good but not the primary reason to visit. Galissas and Kini are popular and organised, but they do not rival the scale of Naxos or Milos. The swimming is pleasant, the water is clean, and the setting is lovely — but the island's strongest appeal is its city life and culture, not its coastline.",
          "Treating Ano Syros as a quick photo stop — the Catholic hilltop is one of the most atmospheric medieval settlements in the Cyclades, with a genuinely lived-in character that rewards slow wandering. The 15-minute photo visit that most cruise passengers do misses the best parts: the hidden squares, the local café at the top, and the views from the cathedral terrace at sunset.",
          "Skipping Ermoupoli in favour of a beach base — the biggest mistake visitors make on Syros is treating Ermoupoli as a transit point and staying in a beach village instead. The city is the pulsing heart of the island. Staying elsewhere means losing the evening square life, the late-night sweet shops, the waterfront walks, and the cultural rhythm that makes Syros unique.",
          "Expecting late-night clubs and party beaches — Syros has a vibrant evening scene but it is centred on Miaouli Square, waterfront bars, and live music — not club music until dawn. If you want nightclubs, go to Mykonos or Ios. If you want ouzo at a waterfront table at midnight with loukoumades to follow, Syros is perfect.",
          "Underestimating the winter appeal — Syros is one of the few Cycladic islands that is genuinely active in winter. Ermoupoli's theatres, cinemas, cafés and restaurants remain open, and the island has a calendar of cultural events including the Syros International Film Festival and the Ano Syros Festival. A winter weekend on Syros offers cultural richness that summer-only islands cannot provide."
        ],
        el: [
          "Να περιμένεις άδειες, resort-τύπου παραλίες — οι παραλίες της Σύρου είναι καλές αλλά όχι ο κύριος λόγος επίσκεψης. Το δυνατό σημείο του νησιού είναι η πόλη και ο πολιτισμός της, όχι η ακτογραμμή.",
          "Να αντιμετωπίζεις την Άνω Σύρο ως γρήγορη φωτογραφική στάση — ο καθολικός λόφος είναι ένας από τους πιο ατμοσφαιρικούς μεσαιωνικούς οικισμούς. Η βόλτα των 15 λεπτών χάνει τα καλύτερα σημεία του.",
          "Να παρακάμπτεις την Ερμούπολη για μια βάση στην παραλία — το μεγαλύτερο λάθος είναι να βλέπεις την Ερμούπολη ως σημείο διέλευσης. Η πόλη είναι η καρδιά του νησιού.",
          "Να περιμένεις clubs και party μέχρι το πρωί — η Σύρος έχει ζωντανή βραδινή ζωή αλλά γύρω από την πλατεία Μιαούλη, όχι club. Αν θες πάρτι, πήγαινε Μύκονο ή Ίο.",
          "Να υποτιμάς τον χειμώνα — η Σύρος είναι από τα λίγα κυκλαδονήσια που παραμένουν ζωντανά και τον χειμώνα, με θέατρα, φεστιβάλ και πολιτιστικές εκδηλώσεις."
        ]
      }
    }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Paros has become a victim of its own success. It is increasingly marketed as 'Mykonos but cheaper,' which means prices have risen sharply while infrastructure struggles to keep up. The Pounta–Parikia waterfront road is congested in summer, and the popular beaches have sunbed grids that occupy most of the sand by 10:00. Paros is still a wonderful island, but the 'undiscovered' version from ten years ago no longer exists. Come for what it is now, not for what the guidebooks from 2015 describe.",
        el: "Αυτό που δε σου λέει κανείς: Η Πάρος έχει πέσει θύμα της επιτυχίας της. Προωθείται όλο και περισσότερο ως 'Μύκονος αλλά φθηνότερα,' με αποτέλεσμα οι τιμές να έχουν ανέβει απότομα ενώ οι υποδομές δυσκολεύονται να ακολουθήσουν. Ο παραλιακός δρόμος Πούντας–Παροικιάς είναι μποτιλιαρισμένος το καλοκαίρι και οι δημοφιλείς παραλίες έχουν ξαπλώστρες που καταλαμβάνουν το μεγαλύτερο μέρος της άμμου από τις 10:00. Η Πάρος παραμένει υπέροχο νησί, αλλά η 'ανεξερεύνητη' εκδοχή της δεν υπάρχει πια. Έλα γι' αυτό που είναι τώρα, όχι γι' αυτό που περιέγραφαν οι ταξιδιωτικοί οδηγοί του 2015."
      },
      items: {
        en: [
          "Expecting empty beaches in July or August — Paros has excellent beaches (Kolymbithres, Golden Beach, Santa Maria), but they fill early. By 10:00 the best spots are taken, and by midday the popular ones are grid-locked with sunbeds. June and September are dramatically different. If August is your only option, aim for the less-marketed beaches like Lageri, Glyfa, or the unsheltered stretch south of Aliki.",
          "Staying in Naoussa if you want a quiet holiday — Naoussa is charming but has become a nightlife hub. Restaurants, bars, and foot traffic continue late into the night. If peace matters more than proximity to restaurants, stay near Parikia (quieter harbor side) or in one of the inland villages like Lefkes or Marpissa, which are minutes from the coast but silent at night.",
          "Relying on the KTEL bus for spontaneous evening trips — the daytime bus network is good, but evening service is limited. After sunset, taxis are scarce and expensive. If you plan to eat in a different town each night, renting a vehicle makes the difference between freedom and frustration.",
          "Visiting the Ekatontapyliani Church without reading about its history first — it is one of the most important Byzantine monuments in Greece, but walking in without context it just looks like an old church. The 6th-century iconostasis, the underground chapel (Katafygio), and the story of its construction by Justinian transform the visit from a quick photo to a genuine historical experience.",
          "Treating Paros as a day trip from Naxos or Mykonos — ferries connect them in 30–45 minutes, but reducing Paros to a day visit misses everything that makes it work as a destination. The island needs at least three nights to breathe: one for the towns, one for beach variety, and one for the interior villages and food scene."
        ],
        el: [
          "Να περιμένεις άδειες παραλίες τον Ιούλιο ή τον Αύγουστο — η Πάρος έχει εξαιρετικές παραλίες (Κολυμπήθρες, Χρυσή Ακτή, Σάντα Μαρία), αλλά γεμίζουν νωρίς. Μέχρι τις 10:00 οι καλύτερες θέσεις έχουν πιαστεί. Ο Ιούνιος και ο Σεπτέμβριος είναι εντελώς διαφορετικοί. Αν ο Αύγουστος είναι η μόνη σου επιλογή, διάλεξε τις λιγότερο διαφημισμένες παραλίες όπως Λαγέρη, Γλύφα ή το απάνεμο τμήμα νότια της Αλικής.",
          "Διαμονή στη Νάουσα αν θες ήσυχες διακοπές — η Νάουσα είναι γοητευτική αλλά έχει γίνει νυχτερινό hotspot. Αν η ησυχία είναι πιο σημαντική από την εγγύτητα σε εστιατόρια, μείνε κοντά στην Παροικιά ή σε ορεινά χωριά όπως η Λεύκες ή η Μάρπησσα, που είναι λεπτά από την ακτή αλλά ήσυχα το βράδυ.",
          "Να βασίζεσαι στο ΚΤΕΛ για αυθόρμητες βραδινές εξορμήσεις — το δίκτυο την ημέρα είναι καλό, αλλά το βράδυ τα δρομολόγια είναι περιορισμένα. Μετά τη δύση του ηλίου, τα ταξί είναι σπάνια και ακριβά. Η ενοικίαση οχήματος κάνει τη διαφορά.",
          "Επίσκεψη στην Εκατονταπυλιανή χωρίς να διαβάσεις πρώτα την ιστορία της — είναι ένα από τα σημαντικότερα βυζαντινά μνημεία της Ελλάδας, αλλά χωρίς πλαίσιο μοιάζει απλά με μια παλιά εκκλησία. Το εικονοστάσι του 6ου αιώνα, το καταφύγιο και η ιστορία της κατασκευής της από τον Ιουστινιανό μεταμορφώνουν την επίσκεψη.",
          "Να αντιμετωπίζεις την Πάρο ως ημερήσια εκδρομή από Νάξο ή Μύκονο — τα πλοία συνδέονται σε 30–45 λεπτά, αλλά η Πάρος χρειάζεται τουλάχιστον τρεις νύχτες: μία για τις πόλεις, μία για τις παραλίες και μία για τα ορεινά χωριά και το φαγητό."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Naxos is large — nearly 430 km² with a mountainous interior — and underestimating its scale is the most common trip-planning mistake. Travelers who book a single base and expect to 'see everything' by bus or short scooter trips end up spending half their holiday in transit. The island rewards a focused approach: pick one region (south coast beaches, or mountain villages, or Naxos Town) and explore it properly rather than trying to cover the whole island in short hops.",
        el: "Αυτό που δε σου λέει κανείς: Η Νάξος είναι μεγάλη — σχεδόν 430 km² με ορεινή ενδοχώρα — και το να υποτιμάς την κλίμακά της είναι το πιο συνηθισμένο λάθος προγραμματισμού. Ταξιδιώτες που κλείνουν μία βάση και περιμένουν να 'δουν τα πάντα' με λεωφορείο ή σκούτερ καταλήγουν να περνούν τις μισές διακοπές τους στη μετακίνηση. Το νησί ανταμείβει την εστιασμένη προσέγγιση: διάλεξε μία περιοχή και εξερεύνησέ την σωστά."
      },
      items: {
        en: [
          "Trying to see all of Naxos in 2–3 days — the island is the largest in the Cyclades by a significant margin. The mountain villages (Halki, Apeiranthos, Filoti) alone need a full day. The south coast beaches (Agios Georgios, Mikri Vigla, Plaka, Alyko) cover another 15 km of coastline. The Temple of Demeter, Mount Zas hike, and the Castle are each half-day commitments. A honest minimum is 5 nights: 2 for the town and coast, 2 for the mountains and interior, and 1 for flexibility.",
          "Staying only in Naxos Town — Chora is beautiful and convenient, but it puts you at the far northwestern edge of the island. The best beaches (Plaka, Mikri Vigla, Alyko) are 12–20 minutes south by car, and the mountain villages are 25–40 minutes east. Staying in Agios Prokopios, Plaka, or even one of the mountain villages for part of your trip reduces travel time significantly.",
          "Ignoring the mountain villages entirely — many visitors never leave the coastal strip and miss what makes Naxos genuinely distinctive. Apeiranthos, Halki, and Filoti are not tourist reproductions but real working communities with their own architecture, food traditions, and pace. The drive itself — through valleys, olive groves, and mountain passes — is one of the best experiences the island offers.",
          "Relying on the bus to reach the south coast beaches — the KTEL runs services, but frequency drops after 17:00 and the last return from the south coast can be as early as 19:00. If you want to watch sunset from Plaka or eat dinner at a taverna in Mikri Vigla, you need your own transport or a very expensive taxi. The bus is fine for day trips to Chora from the south, but not the reverse in the evening.",
          "Visiting in August without accommodation booked by March — Naxos handles volume better than smaller islands, but August accommodation in good locations (Agios Prokopios, Plaka, Naxos Town old town) sells out 4–6 months in advance. The difference between a June trip and an August trip to Naxos is not just price and crowd level — it is also availability of the places you actually want to stay."
        ],
        el: [
          "Να προσπαθείς να δεις όλη τη Νάξο σε 2–3 μέρες — είναι το μεγαλύτερο νησί των Κυκλάδων. Τα ορεινά χωριά (Χαλκί, Απείρανθος, Φιλώτι) χρειάζονται μια ολόκληρη μέρα. Οι παραλίες της νότιας ακτής καλύπτουν 15 χλμ. ακτογραμμής. Ο Ναός της Δήμητρας, η ανάβαση στη Ζα και το Κάστρο είναι δεσμεύσεις μισής μέρας το καθένα. Το ελάχιστο είναι 5 νύχτες.",
          "Διαμονή μόνο στη Χώρα — η Χώρα είναι όμορφη αλλά βρίσκεται στο βορειοδυτικό άκρο. Οι καλύτερες παραλίες (Πλάκα, Μικρή Βίγλα, Αλυκό) είναι 12–20 λεπτά νότια και τα ορεινά χωριά 25–40 λεπτά ανατολικά. Η διαμονή στον Άγιο Προκόπιο, την Πλάκα ή σε ορεινό χωριό για μέρος του ταξιδιού μειώνει σημαντικά τον χρόνο μετακίνησης.",
          "Να αγνοείς τελείως τα ορεινά χωριά — πολλοί επισκέπτες δεν φεύγουν ποτέ από την παράκτια ζώνη. Ο Απείρανθος, το Χαλκί και το Φιλώτι δεν είναι τουριστικές αναπαραγωγές αλλά πραγματικές κοινότητες με δική τους αρχιτεκτονική και γαστρονομία. Η ίδια η διαδρομή είναι από τις καλύτερες εμπειρίες του νησιού.",
          "Να βασίζεσαι στο λεωφορείο για τις νότιες παραλίες — η συχνότητα πέφτει μετά τις 17:00 και η τελευταία επιστροφή μπορεί να είναι από τις 19:00. Αν θες να δεις το ηλιοβασίλεμα από την Πλάκα ή να φας σε ταβέρνα στη Μικρή Βίγλα, χρειάζεσαι δικό σου όχημα.",
          "Επίσκεψη τον Αύγουστο χωρίς κράτηση από τον Μάρτιο — η Νάξος διαχειρίζεται καλύτερα τον όγκο από μικρότερα νησιά, αλλά τα καταλύματα σε καλές τοποθεσίες εξαντλούνται 4–6 μήνες πριν. Η διαφορά Ιουνίου και Αυγούστου δεν είναι μόνο τιμή και κόσμος — είναι και διαθεσιμότητα."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Milos is suffering from its own Instagram success. The famous spots — Sarakiniko, Kleftiko, the lunar landscapes — are now subject to intense tourist pressure, and the island's infrastructure (roads, parking, waste management) was not designed for the volume it receives. The tourism boom has brought visible environmental strain, and some beach areas show signs of overuse. The solution is not to skip Milos, but to visit with awareness: go early, avoid the peak weeks, and treat the landscape with care.",
        el: "Αυτό που δε σου λέει κανείς: Η Μήλος υποφέρει από την επιτυχία της στο Instagram. Τα διάσημα σημεία — Σαρακήνικο, Κλέφτικο, τα σεληνιακά τοπία — δέχονται έντονη τουριστική πίεση και οι υποδομές δεν σχεδιάστηκαν για αυτόν τον όγκο. Η λύση δεν είναι να αποφύγεις τη Μήλο, αλλά να την επισκεφτείς με συνείδηση: πήγαινε νωρίς, απόφυγε τις εβδομάδες αιχμής και φέρσου στο τοπίο με σεβασμό."
      },
      items: {
        en: [
          "Visiting Sarakiniko between 11:00 and 15:00 in July or August — the white volcanic rock formation is small in area and funnels visitors into the same cove. By midday it is crowded to the point where photography and swimming are both compromised. Arrive at 08:00 or come in the late afternoon (17:00+) when the tour boats have left and the light is better for photos.",
          "Thinking you can reach the best beaches by road alone — many of Milos's most spectacular spots (Kleftiko, Sykia, Gerontas, Triades) are only accessible by boat. A half-day or full-day boat trip is not optional on Milos; it is essential. Without it, you are seeing less than half of what makes the island special. Book a small-group RIB or traditional kaiki rather than a large tour boat for access to smaller sea caves and quieter timing.",
          "Expecting a vibrant nightlife or restaurant scene after 23:00 — Milos is not a late-night island. Plaka and Adamantas have good restaurants and a relaxed evening atmosphere, but the kitchen closes by 23:00 in most places and bars are low-key. If you want clubs, late bars, or party beaches, Milos will feel quiet after dark.",
          "Underestimating the wind on the western and southern beaches — the meltemi can make swimming uncomfortable or even dangerous on exposed beaches like Paleochori, Provatas, and parts of Fyriplaka on windy days. Check the wind forecast and have a backup plan for the sheltered eastern side (Pollonia, Thiorichia, or Firopotamos) when the meltemi is strong.",
          "Buying a 'Milos Island Card' or similar bundled tour package without checking what is included — some packages bundle bus transport, boat trips, and entry fees at a premium that costs more than arranging them individually. The island is straightforward to navigate independently with a rental vehicle and a single well-chosen boat excursion."
        ],
        el: [
          "Επίσκεψη στο Σαρακήνικο μεταξύ 11:00 και 15:00 τον Ιούλιο ή τον Αύγουστο — ο λευκός ηφαιστειακός βράχος είναι μικρός σε έκταση και συγκεντρώνει κόσμο στο ίδιο σημείο. Το μεσημέρι έχει τόσο πολύ κόσμο που τόσο η φωτογραφία όσο και το κολύμπι υποβαθμίζονται. Φτάσε στις 08:00 ή έλα αργά το απόγευμα.",
          "Να νομίζεις ότι μπορείς να φτάσεις στις καλύτερες παραλίες μόνο οδικώς — πολλά από τα πιο εντυπωσιακά σημεία (Κλέφτικο, Συκιά, Γέροντας, Τριάδες) είναι προσβάσιμα μόνο με σκάφος. Μια ημερήσια εκδρομή με σκάφος δεν είναι προαιρετική στη Μήλο· είναι απαραίτητη. Χωρίς αυτήν, βλέπεις λιγότερο από το μισό νησί.",
          "Να περιμένεις ζωηρή νυχτερινή ζωή μετά τις 23:00 — η Μήλος δεν είναι νησί για ξενύχτι. Η Πλάκα και το Αδάμαντας έχουν καλά εστιατόρια, αλλά η κουζίνα κλείνει γύρω στις 23:00 και τα μπαρ είναι ήρεμα. Αν θες clubs ή party παραλίες, η Μήλος θα σου φανεί ήσυχη.",
          "Να υποτιμάς τον αέρα στις δυτικές και νότιες παραλίες — το μελτέμι μπορεί να κάνει το κολύμπι δυσάρεστο ή επικίνδυνο σε εκτεθειμένες παραλίες όπως Παληόχωρη, Προβάτας και Φυρυπλάκα. Έλεγξε την πρόγνωση και έχε εναλλακτική στην ανατολική πλευρά.",
          "Να αγοράζεις 'Milos Island Card' χωρίς να ελέγξεις τι περιλαμβάνει — μερικά πακέτα κοστίζουν περισσότερο από το να οργανώσεις τα πάντα μόνος σου. Το νησί είναι εύκολο να το εξερευνήσεις ανεξάρτητα με ενοικιαζόμενο όχημα και μία καλή βαρκάδα."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Zakynthos has a split identity — the east coast is entirely built around package tourism (resorts, sunbed rows, loud bars), while the west coast is protected by the National Marine Park and offers dramatic cliffs and caves. Many travelers end up on the east coast and wonder why the island doesn't match the photos of Navagio. The west coast is where the iconic Zakynthos lives, but it requires a boat trip or a drive on unpaved roads to reach.",
        el: "Αυτό που δε σου λέει κανείς: Η Ζάκυνθος έχει διχασμένη ταυτότητα — η ανατολική ακτή είναι χτισμένη γύρω από πακέτα διακοπών, ενώ η δυτική προστατεύεται από το Εθνικό Θαλάσσιο Πάρκο. Η δυτική ακτή είναι η εμβληματική Ζάκυνθος, αλλά απαιτεί βαρκάδα ή χωματόδρομο."
      },
      items: {
        en: [
          "Navagio Beach in July–August between 11:00 and 15:00 — the famous shipwreck beach is inaccessible by land (viewing only from above) and the boat trips that land there create intense crowding. The beach itself is small and the water is often churned up by constant boat traffic. The view from the clifftop observation platform is better than being on the beach itself.",
          "Expecting a quiet stay within walking distance of Laganas — Laganas is the party capital of the Ionian and is built for 18–30 nightlife with clubs, loud bars, and all-night activity. If you want peace, choose Tsilivi, Kalamaki, Argasi, or the west coast villages. Laganas is excellent for its specific purpose, but it does not do quiet.",
          "Renting a car without checking the road to the west coast viewpoints — roads to Navagio viewpoint, the Blue Caves, and Keri Caves are often unpaved, narrow, and require confident driving. A standard city car can manage most routes, but a small 4x4 gives more comfort. Boat trips are actually the most practical way to see the west coast's best features.",
          "Skipping the inland villages — Zakynthos's interior (Macherado, Kiliomenos, Koiliomenos) has traditional tavernas, olive oil presses, the island's best wineries, and a pace of life that the coast completely lacks. A single afternoon driving through the interior adds a cultural dimension that most beach-focused visitors miss.",
          "Underestimating the turtle-spotting boat trip crowds — the famous Caretta caretta nesting beaches in Laganas Bay attract dozens of tour boats simultaneously in summer. Some operators crowd the turtles with multiple boats circling. Choose a small operator or a morning departure for a more respectful and enjoyable experience."
        ],
        el: [
          "Παραλία Ναυάγιο Ιούλιο–Αύγουστο 11:00–15:00 — η παραλία είναι μικρή και το νερό ανακατεύεται από τα σκάφη. Η θέα από πάνω είναι καλύτερη.",
          "Ήσυχη διαμονή κοντά στο Λαγανά — ο Λαγανάς είναι η party πρωτεύουσα του Ιονίου. Διάλεξε Τσιλιβί, Καλαμάκι ή Αργάσι.",
          "Ενοικίαση αυτοκινήτου χωρίς έλεγχο των δρόμων — οι δρόμοι προς Ναυάγιο και Γαλάζιες Σπηλιές είναι χωματόδρομοι. Οι βαρκάδες είναι πιο πρακτικές για τη δυτική ακτή.",
          "Να παραλείπεις τα ορεινά χωριά — η ενδοχώρα της Ζακύνθου έχει παραδοσιακές ταβέρνες και οινοποιεία.",
          "Να υποτιμάς την κίνηση στα turtle-spotting σκάφη — δεκάδες σκάφη συγκεντρώνονται γύρω από τις χελώνες. Διάλεξε μικρό σκάφος ή πρωινή αναχώρηση."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Chania is the most popular destination in Crete and prices reflect it. Accommodation in the Old Town or within the Venetian harbour area commands a 50–100% premium over properties 10–15 minutes inland or east along the coast. The harbour view is genuine, but rooms with a 'harbour view' are often small, noisy until 01:00 from the restaurants below, and significantly more expensive than a larger, quieter room a short walk away.",
        el: "Αυτό που δε σου λέει κανείς: Τα Χανιά είναι ο πιο δημοφιλής προορισμός της Κρήτης και οι τιμές το αντανακλούν. Τα καταλύματα στην Παλιά Πόλη ή στο λιμάνι έχουν προσαύξηση 50–100%. Η θέα στο λιμάνι είναι γνήσια, αλλά τα δωμάτια είναι συχνά μικρά, θορυβώδη και ακριβά."
      },
      items: {
        en: [
          "Driving to Balos Beach without checking the road conditions — the 8 km unpaved road to the Balos lagoon parking area is rough, dusty, and congested in summer. A standard car can manage it but expect 25–35 minutes of slow driving. Alternatively, take the boat from Kissamos (1 hour each way), which skips the road entirely and arrives at the lagoon directly.",
          "Elafonisi Beach on a windy day — Elafonisi's pink sand lagoon is world-famous, but strong north winds in July–August can make the access road unpleasant and the lagoon itself less clear. Check the wind forecast. On windy days, Falasarna or Kedrodasos are better-protected alternatives with equally stunning water.",
          "Treating Chania as a 'one-day stop' on a Crete road trip — the Old Town, the harbour, the Archaeological Museum, and the surrounding beaches (Balos, Elafonisi, Falasarna, Samaria Gorge) each need at least half a day. A single night in Chania barely scratches the surface. Minimum 3 nights gives you one full day for the town and two for the wider region.",
          "Eating in the restaurants on the harbour front without checking the menu — the harbour restaurants with the best views are not always the best kitchens. Walk one street back (Zampeliou, Skoufon, or the alleys around the cathedral) for tavernas that serve the same Cretan cuisine at 30–40% less.",
          "Visiting the Municipal Market without cash — the indoor market (Agora) has excellent local produce, spices, cheese, and olives, but many smaller vendors do not accept cards. Carry cash for the market, especially for the cheese and olive sellers whose products are the best souvenirs from Chania."
        ],
        el: [
          "Οδήγηση στο Μπάλο χωρίς έλεγχο του δρόμου — ο χωματόδρομος 8 χλμ. είναι τραχύς. Εναλλακτικά, πάρε το καραβάκι από Κίσσαμο.",
          "Ελαφονήσι με αέρα — ο βοριάς μπορεί να κάνει το νερό θολό. Έλεγξε πρόγνωση. Οι Φαλάσαρνα ή ο Κεδρόδασος είναι καλές εναλλακτικές.",
          "Να αντιμετωπίζεις τα Χανιά ως 'στάση μιας μέρας' — χρειάζονται τουλάχιστον 3 νύχτες.",
          "Φαγητό στα εστιατόρια του λιμανιού χωρίς έλεγχο τιμών — περπάτα έναν δρόμο πίσω για 30–40% φθηνότερα.",
          "Επίσκεψη στη Δημοτική Αγορά χωρίς μετρητά — πολλοί μικροπωλητές δεν δέχονται κάρτες."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Rhodes has a mass-tourism infrastructure that is efficient but can feel impersonal on the east coast. The strip from Faliraki through Kolymbia to Lindos is a corridor of large resorts, sunbed beaches, and international restaurants that could be anywhere in the Mediterranean. The island's real character — the medieval Old Town, the inland villages, the mountainous west coast — requires active effort to reach.",
        el: "Αυτό που δε σου λέει κανείς: Η Ρόδος έχει υποδομές μαζικού τουρισμού που είναι αποτελεσματικές αλλά απρόσωπες στην ανατολική ακτή. Ο πραγματικός χαρακτήρας — η Μεσαιωνική Πόλη, τα ορεινά χωριά, η δυτική ακτή — απαιτεί ενεργή προσπάθεια."
      },
      items: {
        en: [
          "Visiting Lindos Acropolis midday in August — the climb up to the Acropolis of Lindos is steep, exposed, and can take 20–30 minutes in the heat. The queue at the entrance can add another 20–30 minutes. Go at 08:00 opening or after 17:00. The whitewashed streets of Lindos village below are also worth time, but the main street is a dense tourist corridor.",
          "Staying on the east coast without exploring the west — the west coast (Kamiros, Kritinia, Monolithos, Prasonisi) is less developed, more rugged, and offers a completely different Rhodes of mountains, pine forests, and windsurfing beaches. A day trip to the west coast is essential for seeing the island's range.",
          "Expecting the Old Town to be quiet after cruise ships — when 2–3 cruise ships dock at Rhodes Town, the Palace of the Grand Masters and the main Street of the Knights become packed between 10:00 and 15:00. The Old Town is atmospheric but at its busiest during cruise hours. Visit early morning or late afternoon.",
          "Choosing Faliraki for a quiet family holiday — Faliraki's reputation as a nightlife destination is well-earned. Families are better off in Kolymbia, Kallithea, or the quieter parts of Lindos and Ixia. Faliraki works for its intended audience but does not suit travelers seeking calm.",
          "Renting a quad bike without off-road experience — Rhodes has some rugged roads, but the quad bike rental culture leads to accidents every summer. A small car is safer, especially for visitors unfamiliar with driving on Greek roads and hills."
        ],
        el: [
          "Επίσκεψη στην Ακρόπολη της Λίνδου το μεσημέρι — η ανάβαση είναι απότομη και χωρίς σκιά. Πήγαινε στις 08:00 ή μετά τις 17:00.",
          "Διαμονή μόνο στην ανατολική ακτή — η δυτική ακτή (Κάμιρος, Μονόλιθος, Πρασονήσι) προσφέρει μια εντελώς διαφορετική Ρόδο.",
          "Να περιμένεις ησυχία στη Μεσαιωνική Πόλη με κρουαζιερόπλοια — η ατμόσφαιρα χάνεται μεταξύ 10:00–15:00.",
          "Να διαλέγεις Φαληράκι για ήσυχες οικογενειακές διακοπές — η φήμη του ως νυχτερινού προορισμού είναι δικαιολογημένη.",
          "Ενοικίαση quad χωρίς εμπειρία — ένα μικρό αυτοκίνητο είναι ασφαλέστερο."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Patmos is one of the most remote Dodecanese islands — and remoteness comes with trade-offs. Ferry connections are limited, especially outside July–August, and the island's best beaches require a scooter or boat to reach. The famous stillness is real, but getting to it takes planning.",
        el: "Αυτό που δε σου λέει κανείς: Η Πάτμος είναι ένα από τα πιο απομακρυσμένα νησιά των Δωδεκανήσων — και η απομόνωση έχει κόστος. Τα δρομολόγια των πλοίων είναι περιορισμένα, ειδικά εκτός Ιουλίου–Αυγούστου, και οι καλύτερες παραλίες απαιτούν μηχανάκι ή σκάφος για πρόσβαση."
      },
      items: {
        en: [
          "Monastery of Saint John dress code — enforced strictly every day. No shorts, no sleeveless tops, and women must wear long skirts (not trousers). The monastery provides wraps at the entrance, but supplies run out. Arrive dressed appropriately or risk being turned away at the door.",
          "Beach accessibility without a vehicle — Psili Ammos, Lambi, and Kambos all require a scooter, car, or boat taxi. Do not assume you can walk from Skala. The island is larger than it appears on a map, and distances add up quickly.",
          "Hora accommodation with heavy luggage — the upper alleys of Hora are steep, narrow, and completely inaccessible by car. If you stay in Hora, expect to carry your luggage up stone stairs. Skala or Grikos are far more practical for vehicle access.",
          "The Cave of the Apocalypse as a standalone stop — the cave itself is tiny and takes 5 minutes to see. Visitors who come only for the cave without combining it with the Monastery of Saint John and a walk through Hora often feel the detour was insufficient.",
          "Sunday ferry schedules in the Dodecanese — Sunday connections to Patmos are notoriously sparse with only one or no sailings on some routes. Arriving or departing on a Sunday can mean hours of waiting or an unplanned extra night. Always cross-check ferry schedules before booking."
        ],
        el: [
          "Αυστηρός ενδυματολογικός κώδικας στη Μονή του Αγίου Ιωάννη — απαγορεύονται σορτς και αμάνικα. Οι γυναίκες πρέπει να φορούν μακριά φούστα. Η μονή δίνει καλύμματα στην είσοδο αλλά συχνά τελειώνουν.",
          "Πρόσβαση σε παραλίες χωρίς όχημα — η Ψιλή Άμμος, το Λάμπη και ο Κάμπος απαιτούν μηχανάκι ή αυτοκίνητο. Το νησί είναι μεγαλύτερο απ' όσο φαίνεται στον χάρτη και οι αποστάσεις δεν είναι βατές με τα πόδια.",
          "Διαμονή στη Χώρα με βαριές αποσκευές — τα πάνω σοκάκια είναι απότομα, στενά και απρόσιτα για αυτοκίνητο. Η Σκάλα ή ο Γρίκος είναι πιο πρακτικές επιλογές.",
          "Το Σπήλαιο της Αποκάλυψης ως μεμονωμένη στάση — η σπηλιά είναι μικροσκοπική. Όσοι έρχονται μόνο γι' αυτήν χωρίς να συνδυάσουν με τη Μονή και τη Χώρα συχνά απογοητεύονται.",
          "Ακτοπλοϊκά δρομολόγια Κυριακής — οι συνδέσεις με Πάτμο την Κυριακή είναι ελάχιστες. Η άφιξη ή αναχώρηση Κυριακή μπορεί να σημαίνει ώρες αναμονής ή έξτρα διανυκτέρευση."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Monemvasia's old town inside the rock is spectacular but also extremely limited in practical terms — no supermarkets, no banks, no car access, no nightlife. You are staying inside a medieval fortress. Beautiful, but with real daily-life constraints that catch many visitors off guard.",
        el: "Αυτό που δε σου λέει κανείς: Η παλιά πόλη της Μονεμβασιάς μέσα στον βράχο είναι εντυπωσιακή αλλά πρακτικά πολύ περιορισμένη — χωρίς σούπερ μάρκετ, χωρίς τράπεζες, χωρίς πρόσβαση αυτοκινήτου. Μένεις μέσα σε ένα μεσαιωνικό κάστρο. Πανέμορφο, αλλά με πραγματικές καθημερινές δυσκολίες."
      },
      items: {
        en: [
          "Carrying luggage through the old town — no vehicles are allowed inside the castle walls. You park outside the main gate and carry everything over cobblestones. Pack light and use a wheeled bag with robust wheels, or prepare for an uncomfortable arrival.",
          "The climb to the upper city (citadel) — the path to the top of Monemvasia's rock is steep, exposed, and rough underfoot. Many visitors skip it entirely because it looks demanding, but the view from the top is the best on the entire rock. Go in the morning before the sun becomes punishing.",
          "Limited evening dining in low season — outside July and August, only 3–4 tavernas inside the old town are open, and they fill quickly. Booking dinner ahead is essential. The alternative is driving to nearby Gefyra for more options.",
          "Swimming access from the old town — there is no proper beach inside the castle walls. A small rocky platform near the gate allows swimming in deep water, but for a sandy beach (Pori or Ambelakia) you need to drive 5–10 minutes. Monemvasia is not a swim-from-your-door destination.",
          "Monemvasia as a day trip from Athens — the drive is 4 hours from Athens, and the old town can be walked in 2–3 hours. Day-trippers often arrive, walk the main street, and leave wondering what the appeal was. An overnight stay is essential for the atmosphere to reveal itself."
        ],
        el: [
          "Μεταφορά αποσκευών στην παλιά πόλη — κανένα όχημα δεν επιτρέπεται μέσα στα τείχη. Παρκάρεις έξω από την πύλη και κουβαλάς τα πάντα στα χέρια. Πακετάρε ελαφριά.",
          "Ανάβαση στην πάνω πόλη (ακρόπολη) — το μονοπάτι είναι απότομο, εκτεθειμένο και δύσβατο. Πολλοί το αποφεύγουν, αλλά η θέα από την κορυφή είναι η καλύτερη. Πήγαινε το πρωί.",
          "Λίγες επιλογές για βραδινό φαγητό εκτός σεζόν — μόνο 3–4 ταβέρνες λειτουργούν και γεμίζουν γρήγορα. Κλείσε τραπέζι από νωρίς ή οδήγησε στη Γέφυρα για περισσότερες επιλογές.",
          "Μπάνιο χωρίς παραλία — δεν υπάρχει οργανωμένη παραλία μέσα στο κάστρο. Για αμμουδιά (Πόρι ή Αμπελάκια) χρειάζεσαι αυτοκίνητο 5–10 λεπτά.",
          "Η Μονεμβασιά ως ημερήσια από Αθήνα — η παλιά πόλη πατιέται σε 2–3 ώρες. Όσοι έρχονται μόνο για τη μέρα συχνά αναρωτιούνται ποιος είναι ο ενθουσιασμός. Χρειάζεται διανυκτέρευση για να αποκαλυφθεί."
        ]
      }
    }
  },
  kos: {
    overview: {
      en: "Kos is the third-largest island of the Dodecanese and one of those places that tends to surprise people. The island is famous for its beaches and cycling culture, but what genuinely distinguishes it from other Greek beach destinations is the extraordinary layering of civilizations visible at every turn — Minoan traces, Classical ruins, Hellenistic sanctuaries, Byzantine towers, Ottoman mosques and Italian Neo-Classical architecture all occupying the same town squares, the same streets, the same harbor views. This is not incidental: Kos has been at the crossroads of the eastern Aegean for over three millennia, and the island wears that history without effort, almost casually, as a backdrop to taverna life and morning coffee.",
      el: "Η Κως είναι το τρίτο μεγαλύτερο νησί των Δωδεκανήσων και ένα από εκείνα τα μέρη που τείνουν να εκπλήσσουν. Το νησί φημίζεται για τις παραλίες και την ποδηλατική κουλτούρα του, αλλά αυτό που πραγματικά το ξεχωρίζει είναι η εκπληκτική στρωματογραφία πολιτισμών — μινωικά ίχνη, κλασικά ερείπια, ελληνιστικά ιερά, βυζαντινοί πύργοι, οθωμανικά τζαμιά και ιταλική νεοκλασική αρχιτεκτονία."
    },
    pageIncludes: {
      en: [
        "The Asklepion & birthplace of Hippocrates",
        "Castle of the Knights & layered Kos Town",
        "Beaches: Tigkaki, Kefalos, Therme & more",
        "Day trips: Nisyros volcano & Kalymnos",
        "Local food, cycling tips & practical planning",
      ],
      el: [
        "Ασκληπιείο & γενέτειρα του Ιπποκράτη",
        "Κάστρο των Ιπποτών & πολυεπίπεδη Κω",
        "Παραλίες: Τιγκάκι, Κέφαλος, Θέρμες & άλλα",
        "Ημερήσιες εκδρομές: Νίσυρος & Κάλυμνος",
        "Τοπικό φαγητό, ποδήλατο & πρακτικές συμβουλές",
      ]
    },
    perfectFor: {
      en: [
        "History and archaeology lovers",
        "Beach holiday seekers with cultural curiosity",
        "Cyclists and active travellers",
        "Families looking for varied, accessible holidays",
        "Island hoppers using Kos as a Dodecanese base",
      ],
      el: [
        "Λάτρεις ιστορίας και αρχαιολογίας",
        "Παραθεριστές με πολιτιστική περιέργεια",
        "Ποδηλάτες και δραστήριοι ταξιδιώτες",
        "Οικογένειες που θέλουν ποικιλία",
        "Ταξιδιώτες που χρησιμοποιούν την Κω ως βάση",
      ]
    },
    honestAdvice: {
      title: {
        en: "Honest Advice — What to Skip",
        el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις"
      },
      alert: {
        en: "What nobody tells you: Kos has a strongly Ottoman and Italian-influenced urban character that most first-time visitors do not anticipate. The minarets of two working mosques rise above the harbour, Italian Neo-Classical buildings from the 1930s line the main streets, and the plane tree square has functioned as a meeting place across Greek, Ottoman and Italian administrations consecutively. This is not a standard Cycladic whitewash-and-blue aesthetic — it is something considerably more layered, and it takes a day of walking to begin to read it properly.",
        el: "Αυτό που δε σου λέει κανείς: Η Κως έχει έντονο οθωμανικό και ιταλικό αστικό χαρακτήρα που οι περισσότεροι πρώτοι επισκέπτες δεν περιμένουν. Οι μιναρέδες δύο ενεργών τζαμιών υψώνονται πάνω από το λιμάνι. Δεν είναι η τυπική κυκλαδίτικη αισθητική."
      },
      items: {
        en: [
          "Tigkaki between 12:00 and 16:00 in August — this is the most popular beach on the island and the peak midday hours in high summer produce exactly the density you would expect",
          "Zia purely for the sunset view — the village is genuinely attractive and the sunset panorama is real, but the road up in summer is busy and parking is limited",
          "Eating along the main harbor of Kos Town — the restaurants facing the Castle of the Knights have impressive settings but the cooking is largely tourist-oriented",
          "Trying to combine the Asklepion, Kos Town, Zia and a beach in one day — give them separate half-days",
          "Assuming all Dodecanese islands are interchangeable — Kos, Nisyros, Kalymnos and Patmos are each radically different in character",
        ],
        el: [
          "✕ Τιγκάκι μεταξύ 12:00 και 16:00 τον Αύγουστο",
          "✕ Ζιά μόνο για το ηλιοβασίλεμα — ο δρόμος έχει κίνηση",
          "✕ Φαγητό στο κεντρικό λιμάνι της Κω — οι κουζίνες είναι τουριστικές",
          "✕ Να συνδυάσετε Ασκληπιείο, Κω, Ζιά και παραλία σε μία μέρα",
          "✕ Να θεωρείτε όλα τα Δωδεκάνησα εναλλάξιμα",
        ],
      },
    },
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Halkidiki's most famous beaches are taken over by sunbed concessions that charge €15–25 per set. The beautiful coves you see in photos often have no free sand space by 10:00. Finding a spot without paying requires arriving before 09:00 or seeking out the few remaining unorganised stretches of coast.",
        el: "Αυτό που δε σου λέει κανείς: Οι πιο διάσημες παραλίες της Χαλκιδικής είναι κατειλημμένες από ξαπλώστρες που κοστίζουν €15–25 το σετ. Τα πανέμορφα τοπία που βλέπεις στις φωτογραφίες δεν έχουν ελεύθερο χώρο μετά τις 10:00. Για θέση χωρίς χρέωση, πρέπει να φτάσεις πριν τις 09:00."
      },
      items: {
        en: [
          "The Ouranoupolis bottleneck for Ammouliani — if you plan to visit Ammouliani island or take the Mount Athos cruise, Ouranoupolis in August is a congested corridor. Parking fills by 10:00, and the queue for the Ammouliani ferry can be 45 minutes. Arrive early or stay overnight in Ouranoupolis itself.",
          "Kassandra's coastal road in peak weeks — the main road through Pefkochori, Kalithea, and Sani becomes a slow-moving traffic jam in August. Distances are short but travel times double. Sithonia offers the same sea quality with significantly fewer cars.",
          "The Mount Athos cruise experience — the boat tours along the Athos peninsula show the monasteries from the sea only. You cannot land or enter any monastery. The 3-hour round trip is scenic, but some visitors find it frustrating when they realise they only saw the walls from a distance.",
          "Moving between peninsulas without a car — public buses connect Thessaloniki to each peninsula separately. Going from Kassandra to Sithonia means a bus back to Nea Moudania and then out again, consuming half a day. A rental car is almost essential for seeing more than one peninsula.",
          "The 'party beach' strip of Kalithea — Kalithea's central beach area is built around loud music, day clubs, and young crowds. Families and couples seeking quiet often book here by accident, attracted by the photos of the water. The beach itself is beautiful; the atmosphere may not match."
        ],
        el: [
          "Το μποτιλιάρισμα στην Ουρανούπολη για Αμμουλιανή — τον Αύγουστο η πρόσβαση γίνεται δύσκολη. Το πάρκινγκ γεμίζει από τις 10:00. Φτάστε νωρίς ή διανυκτερεύστε στην Ουρανούπολη.",
          "Ο παραλιακός δρόμος της Κασσάνδρας τον Αύγουστο — η κίνηση στα Πευκοχώρι, την Καλλιθέα και τη Σάνη διπλασιάζει τον χρόνο διαδρομής. Η Σιθωνία έχει την ίδια θάλασσα με τα μισά αυτοκίνητα.",
          "Η θαλάσσια εκδρομή στο Άγιον Όρος — βλέπεις τις μονές μόνο από τη θάλασσα χωρίς δυνατότητα αποβίβασης. Η τρίωρη διαδρομή είναι γραφική αλλά κάποιοι απογοητεύονται.",
          "Μετακίνηση μεταξύ χερσονήσων χωρίς αυτοκίνητο — τα λεωφορεία συνδέουν τη Θεσσαλονίκη με κάθε χερσόνησο ξεχωριστά. Για να πας από Κασσάνδρα σε Σιθωνία χάνεις μισή μέρα.",
          "Η 'party' παραλία της Καλλιθέας — η κεντρική παραλία έχει δυνατή μουσική και day clubs. Οικογένειες και ζευγάρια που θέλουν ησυχία συχνά την επιλέγουν κατά λάθος."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: The monasteries of Meteora are active religious communities with strict visiting hours that change by season, and they close without notice for feast days. Most monasteries shut between 14:00 and 15:30 for the monks' rest period — arriving at 14:30 means being turned away. The morning window (09:00–13:00) is the only reliable visiting time.",
        el: "Αυτό που δε σου λέει κανείς: Τα μοναστήρια των Μετεώρων είναι ενεργές θρησκευτικές κοινότητες με αυστηρό ωράριο που αλλάζει εποχικά. Τα περισσότερα κλείνουν 14:00–15:30 για ανάπαυση των μοναχών. Η μοναδική αξιόπιστη ώρα επίσκεψης είναι 09:00–13:00."
      },
      items: {
        en: [
          "Visiting all six monasteries in one day — physically demanding and rushed. The monasteries are spread along a 12 km road, and each requires climbing steep steps (50–150 steps per monastery). Pick 2–3 and take your time. The Great Meteoron and Varlaam are the most impressive and can comfortably fill a morning.",
          "Dress code enforcement — women must wear long skirts (long trousers are not accepted) and covered shoulders; men must wear long trousers. The monasteries provide fabric wraps at the entrance, but on busy days they run out. Arriving dressed correctly saves 10–15 minutes at each gate.",
          "The Kalambaka restaurant premium — restaurants directly under the rocks charge tourist prices for standard Greek food. Walk one street back from the main square or up into Kastraki village for the same meal at half the price and double the authenticity.",
          "Afternoon photography disappointment — the famous golden-hour light on the rocks happens at sunset, but most monasteries close at 16:00 in summer. The best light for photography is from the surrounding trails and viewpoints in the late afternoon, not from inside the monastery grounds.",
          "The fog and cloud problem — Meteora sits at 300–400 metres elevation, and the rock pillars are frequently shrouded in cloud or mist, especially in winter and spring. The view can disappear entirely within minutes. Check the weather forecast before committing to a specific day."
        ],
        el: [
          "Επίσκεψη και στα έξι μοναστήρια σε μία μέρα — είναι σωματικά κουραστικό. Διάλεξε 2–3. Το Μεγάλο Μετέωρο και η Βαρλαάμ είναι τα πιο εντυπωσιακά.",
          "Αυστηρός ενδυματολογικός κώδικας — οι γυναίκες χρειάζονται μακριά φούστα (όχι παντελόνι) και καλυμμένους ώμους. Τα μοναστήρια δίνουν καλύμματα αλλά συχνά τελειώνουν.",
          "Ακριβό φαγητό κάτω από τους βράχους — οι τουριστικές ταβέρνες στην Καλαμπάκα χρεώνουν ακριβά. Πήγαινε ένα δρόμο πίσω ή στο Καστράκι για καλύτερο φαγητό σε μισή τιμή.",
          "Φωτογραφία το απόγευμα — η χρυσή ώρα στα Μετέωρα είναι το ηλιοβασίλεμα αλλά τα μοναστήρια κλείνουν στις 16:00. Οι καλύτερες φωτογραφίες βγαίνουν από τα μονοπάτια γύρω από τους βράχους.",
          "Ομίχλη και σύννεφα — τα Μετέωρα συχνά καλύπτονται από ομίχλη ειδικά χειμώνα και άνοιξη. Η θέα μπορεί να εξαφανιστεί μέσα σε λεπτά. Έλεγξε την πρόγνωση πριν προγραμματίσεις."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Parga is built on a steep hillside. The walk from the upper parking areas down to the waterfront and back up is exhausting in summer heat. Many visitors underestimate the vertical layout and end up avoiding the upper old town, missing its best views and quietest corners.",
        el: "Αυτό που δε σου λέει κανείς: Η Πάργα είναι χτισμένη σε απότομη πλαγιά. Η διαδρομή από τα πάνω πάρκινγκ μέχρι το λιμάνι και η επιστροφή είναι εξαντλητική στον καλοκαιρινό ήλιο. Πολλοί υποτιμούν την κατακόρυφη διάταξη και χάνουν τα καλύτερα σημεία της πόλης."
      },
      items: {
        en: [
          "Parking in July and August — the main road into Parga becomes a single-lane standstill by midday. The municipal parking lots fill before 11:00 and charge €10–15 per day. Accommodation with included parking is worth a significant premium. Without it, expect to park 15 minutes walk from your hotel.",
          "The Venetian castle climb — the castle on the hill offers panoramic views over the bay, but the walk up from the port is steep, exposed, and takes 15–20 minutes in direct sun. Many visitors give up halfway. Go in the late afternoon when the heat drops and the light is golden.",
          "Valtos Beach sunbed situation — Valtos is beautiful, but the sunbeds fill by 09:30 in peak season. The tavernas on Valtos charge resort prices for basic food. Krioneri Beach in town is more convenient, equally clear, and surrounded by better lunch options.",
          "The day-tripper invasion between 11:00 and 16:00 — Parga receives a daily flood of visitors from Sivota, Preveza, and Igoumenitsa. The old town and waterfront are noticeably quieter before 10:00 and after 18:00. Plan your main exploring for early morning or evening.",
          "Boat trips to Antiparga — the small boat excursions to the Antiparga islets are popular, but the boats often overcrowd the tiny beaches. The first departure of the morning is the quietest. Alternatively, charter a small private boat for a more relaxed experience around the Paxos coast."
        ],
        el: [
          "Πάρκινγκ τον Ιούλιο και Αύγουστο — ο κεντρικός δρόμος γίνεται μποτιλιάρισμα από το μεσημέρι. Τα πάρκινγκ γεμίζουν πριν τις 11:00. Κατάλυμα με πάρκινγκ αξίζει την έξτρα πληρωμή.",
          "Ανάβαση στο κάστρο — η θέα από πάνω είναι μαγευτική αλλά η ανάβαση είναι απότομη και χωρίς σκιά. Πήγαινε αργά το απόγευμα.",
          "Οι ξαπλώστρες στο Βάλτο — γεμίζουν μέχρι τις 09:30. Το Κρυονέρι μέσα στην πόλη είναι εξίσου καθαρό, πιο βολικό και με καλύτερες επιλογές για φαγητό.",
          "Η ημερήσια εισβολή τουριστών 11:00–16:00 — η Πάργα γεμίζει από επισκέπτες από Σύβοτα, Πρέβεζα και Ηγουμενίτσα. Οι πρωινές και βραδινές ώρες είναι οι καλύτερες.",
          "Εκδρομή με σκάφος στην Αντίπαργα — τα σκάφη γεμίζουν υπερβολικά τις μικρές παραλίες. Η πρώτη πρωινή αναχώρηση είναι η πιο ήσυχη."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Delphi is built on an extremely steep slope. The walk from the main entrance up to the stadium at the top is a genuine uphill climb — 500 metres on uneven marble paths with significant elevation gain. Many visitors underestimate the physical effort required and skip the upper section, missing the best perspective of the site.",
        el: "Αυτό που δε σου λέει κανείς: Οι Δελφοί είναι χτισμένοι σε εξαιρετικά απότομη πλαγιά. Η διαδρομή από την κύρια είσοδο μέχρι το στάδιο στην κορυφή είναι πραγματική ανηφόρα — 500 μέτρα σε ανώμαλα μαρμάρινα μονοπάτια. Πολλοί υποτιμούν τη σωματική προσπάθεια και χάνουν την καλύτερη θέα."
      },
      items: {
        en: [
          "The museum before the site — the ticket includes both the museum and the archaeological site. Most visitors go to the museum first, spend an hour inside, then arrive at the site exhausted and in the midday heat. Visit the site at 08:00 opening while it is cool, then do the museum after.",
          "Arachova vs Delphi village for accommodation — the village of Delphi itself is a purpose-built tourist strip with limited character. Arachova, 10 minutes up the road, is a proper mountain town with better dining, more atmosphere, and better-value accommodation. Stay in Arachova and drive down to the site.",
          "The fog problem — Delphi sits at 600 metres elevation on Mount Parnassus. Cloud and mist roll in without warning, especially in spring and autumn. The famous valley view can disappear within minutes. If you have flexibility, choose a clear-weather day — it genuinely affects the experience.",
          "Tour bus congestion between 11:00 and 14:00 — large tour coaches arrive from Athens almost daily. The site becomes crowded, the audio guide queue grows, and the narrow paths through the ruins become single-file. Arriving at 08:00 gives you a full hour of near-empty site before the first buses arrive.",
          "The Corycian Cave as a casual add-on — marketed as an easy side trip, the Corycian Cave requires a 7 km drive up a gravel mountain road and then a steep 20-minute uphill walk from the parking area. It is a genuine hike, not a roadside attraction. Only attempt it if you are prepared for proper walking."
        ],
        el: [
          "Το μουσείο πριν τον αρχαιολογικό χώρο — οι περισσότεροι πάνε πρώτα στο μουσείο και φτάνουν στον χώρο κουρασμένοι. Δες πρώτα τον χώρο το πρωί και μετά το μουσείο.",
          "Διαμονή στην Αράχοβα αντί στους Δελφούς — το χωριό των Δελφών είναι τουριστικό χωρίς χαρακτήρα. Η Αράχοβα έχει καλύτερο φαγητό, ατμόσφαιρα και καταλύματα.",
          "Η ομίχλη — οι Δελφοί βρίσκονται στα 600 μέτρα. Η ομίχλη έρχεται ξαφνικά και η θέα εξαφανίζεται. Διάλεξε μέρα με καθαρό καιρό.",
          "Τουριστικά λεωφορεία 11:00–14:00 — μεγάλες ομάδες φτάνουν από Αθήνα καθημερινά. Ο χώρος γεμίζει. Φτάσε στις 08:00 για να τον απολαύσεις άδειο.",
          "Το Κωρύκειο Άντρο ως εύκολη στάση — απαιτεί 7 χλμ. χωματόδρομο και 20 λεπτά απότομης ανάβασης. Δεν είναι εύκολη εξόρμηση."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Patras is a working industrial city, not a tourist resort. The port area and city centre can feel gritty, and the famous seafront is a lively local promenade rather than a postcard beach. The real value of Patras is as a hub — the day trips from here are extraordinary, but the city itself requires active exploration to appreciate.",
        el: "Αυτό που δε σου λέει κανείς: Η Πάτρα είναι μια βιομηχανική πόλη, όχι τουριστικό θέρετρο. Το λιμάνι και το κέντρο μπορεί να φανούν άγρια, και το παραλιακό μέτωπο είναι ζωντανός τοπικός περίπατος, όχι παραλία καρτ ποστάλ. Η αξία της Πάτρας είναι ως κόμβος — οι ημερήσιες εκδρομές είναι εξαιρετικές, αλλά η ίδια η πόλη θέλει εξερεύνηση."
      },
      items: {
        en: [
          "The Carnival if you dislike intense crowds — the final weekend of Patras Carnival draws over 50,000 people into the city centre. Streets become impassable, accommodation prices triple, and the experience is either exhilarating or overwhelming depending on your tolerance for controlled chaos.",
          "The seafront 'dead zone' at siesta time — the long promenade is a pleasant evening walk, but between 14:00 and 18:00 in summer it is exposed, quiet, and many cafés and restaurants are closed. Plan your day around the Mediterranean rhythm rather than fighting it.",
          "Day trips without a car — Ancient Olympia, Delphi, Kalavrita, and Nafpaktos all require driving. Public transport exists but is infrequent and consumes most of the day. Without a rental car, Patras is limited to the city itself and a few nearby beaches reachable by local bus.",
          "The Rio–Antirrio bridge toll — crossing the bridge costs almost €16 each way. It is fast, efficient, and spectacular, but the cost adds up if you cross daily for day trips. The small ferry from Rio to Antirrio still operates and costs a fraction of the bridge toll.",
          "Accommodation during Carnival weekend — if you plan to visit for the Carnival parades, book accommodation at least 3–4 months in advance. Last-minute options become extremely expensive or are located far from the city centre. The same applies for the week of Agios Andreas in late November."
        ],
        el: [
          "Το Καρναβάλι αν δεν αντέχεις πολύ κόσμο — το τελευταίο Σαββατοκύριακο πάνω από 50.000 άτομα γεμίζουν το κέντρο. Οι τιμές στα καταλύματα τριπλασιάζονται.",
          "Το παραλιακό μέτωπο 14:00–18:00 — είναι ήσυχο και εκτεθειμένο. Πολλά μαγαζιά είναι κλειστά. Οργάνωσε τη μέρα σου γύρω από τον μεσημεριανό ύπνο.",
          "Εκδρομές χωρίς αυτοκίνητο — Αρχαία Ολυμπία, Δελφοί, Καλάβρυτα και Ναύπακτος απαιτούν οδήγηση. Χωρίς ενοικίαση αυτοκινήτου η Πάτρα είναι περιορισμένη.",
                     "Το διόδιο της γέφυρας Ρίου–Αντιρρίου — κοστίζει σχεδόν €16 κάθε διάβαση. Το μικρό πορθμείο από Ρίο προς Αντίρριο είναι πολύ φθηνότερο.",
          "Διαμονή το Σαββατοκύριακο του Καρναβαλιού — κλείσε 3–4 μήνες νωρίτερα. Οι τελευταίες επιλογές είναι ακριβές και μακριά από το κέντρο."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Lemnos is genuinely quiet — and that quiet comes with real trade-offs. The best beaches require 15–30 minute drives on unsealed dirt roads, restaurants in Myrina fill every evening and require booking, and the island has essentially no nightlife. It is excellent for what it is, but it is also a destination that actively filters out certain kinds of travellers.",
        el: "Αυτό που δε σου λέει κανείς: Η Λήμνος είναι πραγματικά ήσυχη — και αυτή η ησυχία έχει κόστος. Οι καλύτερες παραλίες απαιτούν 15–30 λεπτά σε χωματόδρομους, οι ταβέρνες στη Μύρινα γεμίζουν κάθε βράδυ και χρειάζονται κράτηση, και το νησί δεν έχει νυχτερινή ζωή. Εξαιρετικό γι' αυτό που είναι, αλλά δεν είναι για όλους."
      },
      items: {
        en: [
          "The dirt road to Keros Beach — Keros, the famous kitesurfing beach, requires a 4 km drive on a bumpy unsealed dirt track. A regular car can make it slowly, but the walk from the parking area across the dunes to the beach adds another 5 minutes. Not a casual 'pull up and swim' destination.",
          "Myrina restaurant reservations in July — Myrina's waterfront tavernas fill every evening in July and August. Without a reservation, expect to walk the entire seafront searching for a table. Book at least one day ahead, especially for the top-rated spots along the Venetian castle side.",
          "Lemnos without a car — the bus network connects the main villages but runs infrequently. The best beaches (Keros, Gomati, Thanos, Plati), the archaeological sites (Poliochni, Hephaestia), and the inland villages are all scattered. A car is essential for seeing anything beyond Myrina.",
          "The north coast wind factor — Lemnos is one of the windier Aegean islands. The northern beaches (Keros, Gomati) are excellent for kitesurfing and windsurfing but can be too windy for a relaxed swim. The southern coast (Thanos, Plati) is generally calmer and better for swimming.",
          "Archaeological sites without shade — Poliochni and Hephaestia are open-air sites with no shelter from the sun. Visiting between 12:00 and 16:00 in summer is genuinely uncomfortable. Go early morning or late afternoon, and bring water and a hat."
        ],
        el: [
          "Ο χωματόδρομος για τον Κέρο — η διάσημη παραλία kitesurfing απαιτεί 4 χλμ. σε χωματόδρομο και μετά περπάτημα 5 λεπτών στην αμμοθίνη. Δεν είναι απλή στάση για βουτιά.",
          "Κράτηση σε ταβέρνες στη Μύρινα τον Ιούλιο — γεμίζουν κάθε βράδυ. Χωρίς κράτηση θα ψάχνεις τραπέζι σε όλο το λιμάνι. Κλείσε τουλάχιστον μία μέρα πριν.",
          "Λήμνος χωρίς αυτοκίνητο — τα λεωφορεία είναι αραιά. Οι καλύτερες παραλίες και οι αρχαιολογικοί χώροι είναι διάσπαρτοι. Το αυτοκίνητο είναι απαραίτητο.",
          "Ο βοριάς στη βόρεια ακτή — οι βόρειες παραλίες έχουν ισχυρούς ανέμους. Η νότια ακτή (Θάνος, Πλατύ) είναι πιο ήρεμη για κολύμπι.",
          "Αρχαιολογικοί χώροι χωρίς σκιά — η Πολιόχνη και η Ηφαιστία είναι εκτεθειμένες. Το μεσημέρι η επίσκεψη είναι δύσκολη. Πήγαινε νωρίς το πρωί ή απόγευμα."
        ]
      }
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
    },
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Kalamata is a working city first and a tourist destination second. The industrial port and agricultural shipping create a functional atmosphere along parts of the coast. The real beauty of Kalamata is not in the city centre but in its role as a gateway — the Mani peninsula, Voidokilia beach, Ancient Messene, and Mystras are all within an hour's drive and far more visually striking than the city itself.",
        el: "Αυτό που δε σου λέει κανείς: Η Καλαμάτα είναι πρώτα πόλη και μετά τουριστικός προορισμός. Το βιομηχανικό λιμάνι δημιουργεί μια λειτουργική ατμόσφαιρα. Η ομορφιά της Καλαμάτας βρίσκεται στον ρόλο της ως πύλης — η Μάνη, η Βοϊδοκοιλιά, η Αρχαία Μεσσήνη και ο Μυστράς είναι σε απόσταση μιας ώρας."
      },
      items: {
        en: [
          "Kalamata's city beach expectations — the main city beach is long and convenient, but water clarity varies due to port activity and seasonal algae. For reliably clear swimming, drive 20 minutes south to Almyros, Kitries, or the beaches of the Messenian coast.",
          "The olive oil restaurant markup — being the olive oil capital means every seafront restaurant leans into the branding with premium pricing. The best food in Kalamata is in the humble ouzeri of the Old Town and the backstreets near the market, not the polished promenade places with English menus.",
          "Taygetus hiking without preparation — the Taygetus range behind Kalamata offers exceptional hiking, but the trails are steep, poorly marked in sections, and the temperature drops significantly at altitude. Going without proper shoes, sufficient water, and a trail map is a common mistake that can turn exhilarating into exhausting.",
          "Costa Navarino access without a booking — the Costa Navarino resort's famous beaches, pools, and dining are largely restricted to hotel guests or require a significant day-pass fee (€50–80 per person). Driving there expecting a free afternoon at the beach will end in disappointment.",
          "The coastal road to Mani — the road from Kalamata south through Kardamyli, Stoupa, and Areopoli is stunningly beautiful but narrow, winding, and heavily used by tour buses in summer. The 50 km drive to Areopoli can take 1.5 hours. Plan your day around the driving time rather than the distance."
        ],
        el: [
          "Παραλία της Καλαμάτας — είναι βολική αλλά η διαύγεια του νερού ποικίλλει. Για καθαρό μπάνιο οδήγησε 20 λεπτά νότια στον Αλμυρό ή τις Κιτριές.",
          "Ακριβό φαγητό με την ταμπέλα 'ελαιόλαδο' — οι παραλιακές ταβέρνες χρεώνουν premium. Το καλύτερο φαγητό είναι στα ουζερί της Παλιάς Πόλης.",
          "Πεζοπορία στον Ταΰγετο χωρίς προετοιμασία — τα μονοπάτια είναι απότομα και κακώς σημαδεμένα. Χωρίς νερό, κατάλληλα παπούτσια και χάρτη, η εμπειρία γίνεται εξαντλητική.",
          "Πρόσβαση στο Costa Navarino χωρίς κράτηση — οι παραλίες του resort είναι για πελάτες ή με ημερήσια χρέωση €50–80. Μην πας περιμένοντας δωρεάν μπάνιο.",
          "Ο δρόμος προς Μάνη — η διαδρομή από Καλαμάτα προς Αρεόπολη είναι στενή και γεμάτη στροφές. 50 χλμ. μπορεί να πάρουν 1,5 ώρα."
        ]
      }
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
    honestAdvice: {
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      alert: {
        en: "What nobody tells you: Thassos is marketed as Greece's greenest island, and it is — but only on the west coast and in the mountains. The east coast (Potos, Limenaria, Pefkari) is more developed, drier in summer, and feels like a standard beach resort strip. Which Thassos you experience depends entirely on which side of the island you choose.",
        el: "Αυτό που δε σου λέει κανείς: Η Θάσος διαφημίζεται ως το πιο πράσινο νησί της Ελλάδας — και είναι, αλλά μόνο στη δυτική ακτή και στο βουνό. Η ανατολική ακτή (Ποτός, Λιμενάρια, Πευκάρι) είναι πιο ανεπτυγμένη και μοιάζει με συνηθισμένο παραθεριστικό θέρετρο. Ποια Θάσο θα ζήσεις εξαρτάται από ποια πλευρά θα επιλέξεις."
      },
      items: {
        en: [
          "The marble beach reality — Thassos's famous white marble beaches (Saliara, Marble Beach) are stunning in photos, but getting there involves a long drive down steep, winding roads with very limited parking. The marble dust in the water is beautiful but slippery underfoot. Go early or skip the peak hours entirely.",
          "Limenas restaurant concentration — the port town Limenas has dozens of restaurants within 200 metres of the ferry, and most serve the same generic tourist menu. Walk 10 minutes to the far side of the bay or up to the old town for the real tavernas serving local dishes like smoked pork and mountain greens.",
          "The mountain road to Theologos — the drive from Limenas to the traditional village of Theologos is 40 minutes of steep, narrow hairpin turns through dense forest. It is beautiful but causes car sickness for some, and is slow going. Allocate half a day for this trip and drive carefully.",
          "Giola when crowded — the famous natural rock pool at Giola is small. When multiple groups arrive at the same time, the pool fills beyond comfort and the queue to jump in creates an awkward social moment. Go early in the morning (before 10:00) to have it nearly to yourself.",
          "The Kavala ferry schedule in low season — the ferry from Kavala runs frequently in summer, but in May, June, and September the last return ferry can be as early as 17:00 or 18:00. A missed ferry means a 2-hour wait or, if you are unlucky, being stuck on the island overnight."
        ],
        el: [
          "Η πραγματικότητα της μαρμάρινης παραλίας — η διαδρομή είναι απότομη και το πάρκινγκ περιορισμένο. Η μαρμαρόσκονη στο νερό είναι όμορφη αλλά γλιστερή. Πήγαινε νωρίς.",
          "Συγκέντρωση εστιατορίων στο λιμάνι της Λιμένα — τα περισσότερα σερβίρουν το ίδιο τουριστικό μενού. Περπάτα 10 λεπτά στην άλλη άκρη του κόλπου για αυθεντικές ταβέρνες.",
          "Ο δρόμος προς Θεολόγο — 40 λεπτά με απότομες στροφές. Όμορφος αλλά αργός. Αφιέρωσε μισή μέρα για αυτήν την εκδρομή.",
          "Η Γκιόλα όταν έχει πολυκοσμία — η φυσική πισίνα είναι μικρή. Με πολλά άτομα γίνεται άβολα. Πήγαινε νωρίς το πρωί.",
          "Δρομολόγια πορθμείου από Καβάλα εκτός σεζόν — το τελευταίο πλοίο μπορεί να είναι στις 17:00. Αν το χάσεις, μπορεί να μείνεις στο νησί μέχρι το επόμενο πρωί."
        ]
      }
    }
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
};