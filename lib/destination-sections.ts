import type { Localized } from "./content";

export type DestinationSection = {
  title: Localized;
  text?: Localized;
  alert?: Localized;
  layout?: "grid" | "list" | "faq" | "numbered";
  items?: {
    title?: Localized;
    text: Localized;
  }[];
};

export const destinationSections: Record<string, DestinationSection[]> = {
  santorini: [
    {
      title: {
        en: "Why visit Santorini",
        el: "Γιατί να επισκεφθείς τη Σαντορίνη",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "The caldera is not just a view — it's a geological miracle",
            el: "Η καλντέρα δεν είναι απλώς θέα — είναι γεωλογικό θαύμα",
          },
          text: {
            en: "The caldera of Santorini is a result of the famous Minoan Eruption, about 3,600 years ago, and is considered one of the largest calderas in the Mediterranean. It's no wonder the area is internationally recognized as geological heritage.",
            el: "Η καλντέρα της Σαντορίνης είναι αποτέλεσμα της περίφημης Μινωικής Έκρηξης, περίπου 3.600 χρόνια πριν, και θεωρείται από τις μεγαλύτερες καλντέρες της Μεσογείου. Δεν είναι τυχαίο ότι η περιοχή έχει αναγνωριστεί διεθνώς ως γεωλογική κληρονομιά.",
          },
        },
        {
          title: {
            en: "Culture and archaeology standing next to the hype",
            el: "Πολιτισμός και αρχαιολογία που “στέκουν” δίπλα στο hype",
          },
          text: {
            en: "The prehistoric settlement in Akrotiri is one of the most important in the Aegean and is impressively preserved thanks to the volcanic ash that covered it. To complete the experience, the Museum of Prehistoric Thira in Fira perfectly fills in the picture of prehistoric life on the island.",
            el: "Ο προϊστορικός οικισμός στο Ακρωτήρι είναι από τους σημαντικότερους του Αιγαίου και διατηρείται εντυπωσιακά χάρη στην ηφαιστειακή στάχτη που τον σκέπασε. Αν θες να “δέσεις” την εμπειρία, το Μουσείο Προϊστορικής Θήρας στα Φηρά συμπληρώνει ιδανικά την εικόνα της προϊστορικής ζωής στο νησί.",
          },
        },
        {
          title: {
            en: "PDO signature wine and volcanic soil character",
            el: "Κρασί με υπογραφή ΠΟΠ και χαρακτήρα ηφαιστειακού εδάφους",
          },
          text: {
            en: "Santorini holds a PDO (Protected Designation of Origin) for its wine, established in 1971. In the dry PDO wines, the legislation describes a minimum percentage of Assyrtiko. The 'kouloura' (basket) pruning is not just a tourist slogan — it's a real practice you'll see in the wineries.",
            el: "Η Σαντορίνη έχει ΠΟΠ (PDO) για το κρασί της, που θεσπίστηκε το 1971. Στα “στεγνά” ΠΟΠ κρασιά, η νομοθεσία περιγράφει ελάχιστο ποσοστό Ασύρτικο (με δυνατότητα συμμετοχής Αηδάνι/Αθήρι). Και ναι: το κλάδεμα σε “κουλούρα” δεν είναι τουριστικό σλόγκαν — είναι πραγματική πρακτική που θα σου δείξουν στα οινοποιεία.",
          },
        },
        {
          title: {
            en: "Gastronomy with PDO products",
            el: "Γαστρονομία με προϊόντα ΠΟΠ που ταιριάζουν στο νησί",
          },
          text: {
            en: "The 'Santorini Fava' is registered as a PDO in the EU, and the 'Santorini Tomato' also has PDO specifications. That's why tomatokeftedes (tomato fritters) and fava here are not just 'another dish': they carry place and identity behind them.",
            el: "Η “Φάβα Σαντορίνης” είναι καταχωρισμένη ως ΠΟΠ στην Ε.Ε. Και το “Τοματάκι Σαντορίνης” έχει επίσης προδιαγραφές ΠΟΠ. Γι’ αυτό οι ντοματοκεφτέδες και η φάβα εδώ δεν είναι “ένα ακόμα πιάτο”: έχουν πίσω τους τόπο και ταυτότητα.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time to go (and when to avoid)",
        el: "Καλύτερη εποχή για να πας (και πότε να το αποφύγεις)",
      },
      layout: "list",
      alert: {
        en: "Secret: If your goal is the caldera + photos + food (and not necessarily swimming), choose spring or autumn and you'll 'win' Santorini without the peak season stress.",
        el: "Μικρό μυστικό εποχής: Αν ο στόχος σου είναι καλντέρα + φωτογραφίες + φαγητό (και όχι απαραίτητα μπάνια), διάλεξε άνοιξη ή φθινόπωρο και θα “κερδίσεις” τη Σαντορίνη χωρίς το στρες της αιχμής.",
      },
      items: [
        {
          title: { en: "April–May", el: "Απρίλιος–Μάιος" },
          text: {
            en: "Ideal for walking the caldera, villages, wineries and photos without human traffic. The sea starts to get pleasant towards May.",
            el: "Ιδανικά για πεζοπορίες στην καλντέρα, χωριά, οινοποιεία και φωτογραφίες χωρίς “ανθρώπινο τείχος”. Η θάλασσα αρχίζει να στρώνει προς Μάιο.",
          },
        },
        {
          title: { en: "June", el: "Ιούνιος" },
          text: {
            en: "Sweet summer. Everything opens fully without reaching the absolute peak.",
            el: "“Γλυκό” καλοκαίρι. Πολλά ανοίγουν πλήρως, χωρίς ακόμη το απόλυτο peak.",
          },
        },
        {
          title: { en: "July–August", el: "Ιούλιος–Αύγουστος" },
          text: {
            en: "The island is red-hot (crowds, prices, bookings). If you visit then, the secret is timing: early morning or after sunset.",
            el: "Το νησί είναι στα κόκκινα (κόσμος, τιμές, κρατήσεις). Αν έρθεις τότε, το μυστικό είναι ωράριο: πολύ πρωί και μετά το ηλιοβασίλεμα.",
          },
        },
        {
          title: { en: "September–October", el: "Σεπτέμβριος–Οκτώβριος" },
          text: {
            en: "For many, the best period. The sea is still warm, the light is softer, and the pace is more human.",
            el: "Για πολλούς η καλύτερη περίοδος. Η θάλασσα είναι ακόμα ζεστή, το φως πιο “μαλακό” και οι ρυθμοί πιο ανθρώπινοι.",
          },
        },
        {
          title: { en: "November–March", el: "Νοέμβριος–Μάρτιος" },
          text: {
            en: "Quiet, more local. Some businesses close, but if you want peace, hiking and a less touristy vibe, it has its charm.",
            el: "Πιο ήσυχα, πιο “τοπικά”. Μερικές επιχειρήσεις κλείνουν, αλλά αν θες ηρεμία, πεζοπορία και λιγότερο τουριστικό vibe, έχει γοητεία.",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get to Santorini",
        el: "Πώς φτάνεις στη Σαντορίνη",
      },
      layout: "grid",
      items: [
        {
          title: { en: "By plane", el: "Με αεροπλάνο" },
          text: {
            en: "Santorini Airport (JTR) operates daily with domestic flights (e.g., from Athens) and seasonal/international flights. Always check official updates.",
            el: "Το αεροδρόμιο της Σαντορίνης (JTR) λειτουργεί καθημερινά και εξυπηρετεί πτήσεις εσωτερικού αλλά και εποχικές/διεθνείς. Τσέκαρε πάντα τα επίσημα στοιχεία.",
          },
        },
        {
          title: { en: "By boat", el: "Με πλοίο" },
          text: {
            en: "Ferries arrive at Athinios port. In summer, there are multiple daily routes from Piraeus ranging from 5 to 11+ hours. Schedules change, so confirm close to departure.",
            el: "Τα πλοία φτάνουν στο λιμάνι του Αθηνιού. Το καλοκαίρι υπάρχουν πολλαπλά καθημερινά δρομολόγια από Πειραιά (5-11+ ώρες). Τα δρομολόγια αλλάζουν, οπότε επιβεβαίωσε σχετικά κοντά στην αναχώρηση.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions & experiences (that are truly worth it)",
        el: "Top αξιοθέατα & εμπειρίες (που αξίζουν πραγματικά)",
      },
      layout: "numbered",
      items: [
        {
          title: { en: "Oia for sunset — but with strategy", el: "Οία για ηλιοβασίλεμα — αλλά με στρατηγική" },
          text: {
            en: "Oia is the classic postcard dream. Our secret: see the sunset from Oia once, but keep a second viewing for a quieter spot like Imerovigli or Pyrgos.",
            el: "Η Οία είναι το κλασικό “όνειρο σε καρτ ποστάλ”. Μυστικό: δες το ηλιοβασίλεμα από Οία μία φορά, αλλά κράτα μια δεύτερη φορά για πιο ήσυχο σημείο (π.χ. Ημεροβίγλι ή Πύργο).",
          },
        },
        {
          title: { en: "Fira–Oia Hike: the best views 'on foot'", el: "Πεζοπορία Φηρά–Οία: η καλύτερη θέα “με τα πόδια”" },
          text: {
            en: "The route is about 10km and takes 2.5–5 hours. Start early, take water and a hat, and make a detour for Skaros Rock if you have time.",
            el: "Η διαδρομή Φηρά προς Οία είναι περίπου 10–10,5 km και θέλει 2,5–5 ώρες. Μυστικό: Ξεκίνα νωρίς, πάρε νερό και κάνε παράκαμψη για Σκάρο αν έχεις χρόνο.",
          },
        },
        {
          title: { en: "Skaros (Imerovigli): the rocky castle of drama", el: "Σκάρος (Ημεροβίγλι): το “κάστρο-βράχος” με drama" },
          text: {
            en: "Imerovigli sits on the caldera, and Skaros was historically a fortified settlement. Go just before the golden hour for cinematic shadows.",
            el: "Το Ημεροβίγλι είναι πάνω στην καλντέρα και ο Σκάρος ήταν ιστορικά οχυρωμένος οικισμός. Μυστικό: Πήγαινε λίγο πριν “χρυσώσει” το φως για κινηματογραφικό τοπίο.",
          },
        },
        {
          title: { en: "Akrotiri: the 'Pompeii of the Aegean'", el: "Ακρωτήρι: η “Πομπηία του Αιγαίου” με δική της ιστορία" },
          text: {
            en: "One of the most significant prehistoric settlements, showing early peaks of civilization. Combine it with the Red Beach on the same day.",
            el: "Ο αρχαιολογικός χώρος στο Ακρωτήρι είναι από τους σημαντικότερους προϊστορικούς οικισμούς. Μυστικό: Συνδύασέ το με την κόκκινη παραλία (Red Beach) την ίδια μέρα.",
          },
        },
        {
          title: { en: "Museum of Prehistoric Thira", el: "Μουσείο Προϊστορικής Θήρας (Φηρά)" },
          text: {
            en: "If you want to truly understand what you saw at Akrotiri, visit the museum in Fira. It completes the picture of prehistoric Thira.",
            el: "Αν θέλεις να καταλάβεις πραγματικά τι είδες στο Ακρωτήρι, βάλε το μουσείο. Εκεί “κουμπώνουν” τα ευρήματα και η εικόνα της προϊστορικής Θήρας.",
          },
        },
        {
          title: { en: "Ancient Thira (Mesa Vouno)", el: "Αρχαία Θήρα (Μέσα Βουνό): άλλη εποχή, άλλη θέα" },
          text: {
            en: "Located on Mesa Vouno at 396m altitude, it’s the classical/Hellenistic settlement of the island. Go early morning to avoid the heat.",
            el: "Η Αρχαία Θήρα βρίσκεται στο Μέσα Βουνό (υψ. 396μ) και είναι ο κλασικός/ελληνιστικός οικισμός. Μυστικό: Πήγαινε πρωί για να αποφύγεις τη ζέστη και να έχεις καθαρή θέα.",
          },
        },
        {
          title: { en: "Nea Kameni & Volcano", el: "Νέα Καμένη & το ηφαίστειο: “περπατάς” μέσα στην ιστορία της γης" },
          text: {
            en: "Santorini is an active volcanic system. The latest eruption occurred in 1950. Boat tours taking you to 'walk' on the volcano are highly popular.",
            el: "Η Σαντορίνη είναι ενεργό ηφαιστειακό σύστημα. Η πιο πρόσφατη έκρηξη καταγράφεται το 1950. Εκδρομές με καΐκι/σκάφος είναι πολύ δημοφιλείς.",
          },
        },
        {
          title: { en: "Wineries: the delicious highlight", el: "Οινοποιεία: το “γευστικό” highlight που δεν κουράζει" },
          text: {
            en: "The Assyrtiko and PDO 'Santorini' carry tradition. Ask them to explain the basket pruning and the 'canaves' (underground cellars).",
            el: "Ο ΠΟΠ “Σαντορίνη” και το Ασύρτικο έχουν πίσω τους ζώνη και παράδοση. Μυστικό: Ζήτα να σου εξηγήσουν την “κουλούρα” και τις “κανάβες” (υπόγειες κάβες).",
          },
        },
        {
          title: { en: "Fira Old Port Cable Car", el: "Τελεφερίκ στο παλιό λιμάνι των Φηρών" },
          text: {
            en: "A quick and scenic option to move between the old port and Fira, especially if you're on a cruise. Check schedules closer to your dates.",
            el: "Το τελεφερίκ είναι από τις πιο γρήγορες επιλογές για μετακίνηση ανάμεσα στο παλιό λιμάνι και τα Φηρά, και η διαδρομή κρατά λίγα λεπτά.",
          },
        },
        {
          title: { en: "Akrotiri Lighthouse", el: "Φάρος Ακρωτηρίου: “ήλιο” χωρίς το πλήθος" },
          text: {
            en: "Built in 1892, the lighthouse offers a striking, less crowded sunset spot. Bring your own snacks and drinks as it is not organized.",
            el: "Είναι από τα πιο δυνατά σημεία για ηλιοβασίλεμα, κατασκευασμένος το 1892 και πιο ήσυχο από τα super-hotspots. Πάρε κάτι να πιεις μαζί σου.",
          },
        },
      ],
    },
    {
      title: {
        en: "Beaches, villages, food: what not to miss",
        el: "Παραλίες, χωριά, φαγητό: τι να μη χάσεις",
      },
      layout: "list",
      alert: {
        en: "Secret: the dark volcanic sand gets extremely hot mid-day. Wear proper sandals and go early or after 17:00.",
        el: "Μυστικό: Στα μαύρα βότσαλα/άμμο, το έδαφος καίει μεσημέρι. Πάρε σαγιονάρες που δεν σε νοιάζει να λερωθούν και πήγαινε νωρίς ή μετά τις 17:00.",
      },
      items: [
        {
          title: { en: "Beaches (volcanic cinema)", el: "Παραλίες (ηφαιστειακό σινεμά)" },
          text: {
            en: "Santorini is about dark pebbles and wild terrains. Don't miss Red Beach, Perissa and Perivolos for long dark shores, Kamari for great organization, Vlychada for its unique landscape, and less crowded picks like White Beach, Mesa Pigadia or Cape Columbo.",
            el: "Η Σαντορίνη δεν είναι “λευκή άμμος”. Είναι μαύρα βότσαλα και άγρια τοπία. Ξεχωρίζουν η Red Beach (Κόκκινη), η Περίσσα & ο Περίβολος, το Καμάρι, η Βλυχάδα με το ανάγλυφό της και επιλογές όπως η Άσπρη Παραλία (White Beach), τα Μέσα Πηγάδια και το Cape Columbo.",
          },
        },
        {
          title: { en: "Villages beyond Oia", el: "Χωριά (πέρα από την Οία)" },
          text: {
            en: "Make Fira your base for views and museums, Imerovigli for romance, Emporio for medieval castle vibes, and Pyrgos to enjoy high altitudes and panoramic traditional scenes. Tip: spend one evening in Oia and another in Pyrgos or Emporio.",
            el: "Τα Φηρά είναι βάση, το Ημεροβίγλι πιο ήσυχο. Το Εμπορείο είναι παραδοσιακό με μεσαιωνικό καστέλι, ενώ ο Πύργος είναι ο πιο ψηλός οικισμός με πανοραμική θέα. Μυστικό: ένα βράδυ Οία και ένα βράδυ Πύργο ή Εμπορείο.",
          },
        },
        {
          title: { en: "Food you have to try", el: "Φαγητό (τι να παραγγείλεις χωρίς να το σκεφτείς)" },
          text: {
            en: "You have to order the Santorini Fava, Tomato fritters (Tomatokeftedes) and Melitinia (a traditional sweet). Pair Assyrtiko with fava, and Vinsanto with dessert. Tip: opt for daily specials over 'instagram plates'.",
            el: "Φάβα Σαντορίνης (ΠΟΠ), Ντοματοκεφτέδες και Μελιτίνια (γλυκό). Συνδυασμοί με κρασί: Ασύρτικο με φάβα, Vinsanto με γλυκό. Μικρό μυστικό: Στα τουριστικά σημεία, ψάξε πιάτα ημέρας/μαγειρευτά κι όχι μόνο “instagram plates”.",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical tips",
        el: "Πρακτικά tips (για να περάσεις καλά χωρίς να πληρώσεις… νεύρα)",
      },
      layout: "list",
      items: [
        {
          title: { en: "Getting around", el: "Μετακινήσεις στο νησί" },
          text: {
            en: "KTEL buses connect Fira to most major spots. Cars, scooters, and ATVs are handy but require attention to parking and narrow streets. Leave buffer time in peak summer for traffic.",
            el: "Λεωφορεία ΚΤΕΛ συνδέουν Φηρά με Οία, Περίσσα, κ.ά. Το αυτοκίνητο/ATV είναι βολικό αλλά θέλει προσοχή στη στάθμευση. Το καλοκαίρι άφηνε χρόνο “buffer” λόγω κίνησης.",
          },
        },
        {
          title: { en: "Sunsets and Bookings", el: "Ηλιοβασίλεμα και Κρατήσεις" },
          text: {
            en: "For Oia sunsets, arrive very early. For romance, prefer Imerovigli. Book caldera rooms and wine/boat tours months or at least days beforehand.",
            el: "Αν θες Οία, πήγαινε νωρίς. Για πιο ήσυχο vibe: Ημεροβίγλι ή Φάρος Ακρωτηρίου. Για καλντέρα και tours κλείσε δωμάτια αρκετά νωρίτερα, ιδίως Ιούλιο–Αύγουστο.",
          },
        },
        {
          title: { en: "What to pack", el: "Τι να έχεις πάντα μαζί σου" },
          text: {
            en: "Water, sunscreen, comfortable shoes, and a light jacket for the evening breezes.",
            el: "Νερό, αντηλιακό, καπέλο, άνετα παπούτσια. Μια ελαφριά ζακέτα για βράδυ στην καλντέρα (ο αέρας κάνει παιχνίδια).",
          },
        },
      ],
    },
    {
      title: {
        en: "FAQ",
        el: "FAQ (συχνές ερωτήσεις)",
      },
      layout: "faq",
      items: [
        {
          title: {
            en: "How many days are needed for Santorini?",
            el: "Πόσες μέρες χρειάζονται για τη Σαντορίνη;",
          },
          text: {
            en: "For a 'classic' experience, 3–4 days. To add beaches, villages and wineries without rushing: 5–6 days.",
            el: "Για “classic” εμπειρία: 3–4 μέρες. Για να βάλεις και παραλίες + χωριά + οινοποιεία χωρίς τρέξιμο: 5–6 μέρες.",
          },
        },
        {
          title: {
            en: "Is it only for couples?",
            el: "Είναι μόνο για ζευγάρια;",
          },
          text: {
            en: "No. It's for friends, solo travel and families too. Just choose the right base (e.g. closer to beaches for ease).",
            el: "Όχι. Είναι και για φίλους, σόλο ταξίδι, ακόμα και οικογένειες — απλώς διάλεξε σωστή βάση (π.χ. κοντά σε παραλία).",
          },
        },
        {
          title: {
            en: "Can I get around without a car?",
            el: "Μπορώ να κινηθώ χωρίς αυτοκίνητο;",
          },
          text: {
            en: "Yes, especially if you stay near Fira (which serves as a hub) and use the local KTEL buses.",
            el: "Ναι, ειδικά αν μείνεις κοντά στα Φηρά (κόμβος) και χρησιμοποιείς ΚΤΕΛ.",
          },
        },
        {
          title: {
            en: "What should I do if I only have 1 day?",
            el: "Τι να δω αν έχω μόνο 1 μέρα;",
          },
          text: {
            en: "A strong trio: Fira in the morning, Akrotiri or the Museum at noon, and Oia or Imerovigli for sunset.",
            el: "Ένα “γερό” τρίπτυχο: Φηρά (πρωί) → Ακρωτήρι ή Μουσείο Προϊστορικής Θήρας (μεσημέρι) → Οία ή Ημεροβίγλι για ηλιοβασίλεμα (απόγευμα).",
          },
        },
        {
          title: {
            en: "Is Santorini safe with the volcano?",
            el: "Η Σαντορίνη είναι ασφαλής λόγω ηφαιστείου;",
          },
          text: {
            en: "The volcano is geologically active, but the last eruption was in 1950. Always refer to official announcements for anything abnormal.",
            el: "Το ηφαίστειο είναι ενεργό γεωλογικά, αλλά η τελευταία επιβεβαιωμένη έκρηξη καταγράφεται το 1950. Πάντα κοιτάμε τις επίσημες ανακοινώσεις.",
          },
        },
      ],
    },
  ],
  mykonos: [
    {
      title: {
        en: "Why visit Mykonos",
        el: "Γιατί αξίζει να επισκεφθείς τη Μύκονο",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "For Chora (Mykonos Town): the most beautiful labyrinth in the Cyclades",
            el: "Για τη Χώρα (Mykonos Town): το πιο όμορφο “λαβυρινθάκι” των Κυκλάδων",
          },
          text: {
            en: "Chora is an experience in itself: narrow cobbled streets, white houses, bougainvilleas, small courtyards, and a feeling that every corner is a cinematic set. There you'll also see the most recognizable spots: windmills, Little Venice, and the impressive Panagia Paraportiani.",
            el: "Η Χώρα είναι εμπειρία από μόνη της: στενά πλακόστρωτα, λευκά σπίτια, μπουκαμβίλιες, μικρές αυλές και μια αίσθηση ότι κάθε γωνία είναι σκηνικό. Εκεί θα δεις και τα πιο αναγνωρίσιμα σημεία: ανεμόμυλους, Μικρή Βενετία και την εντυπωσιακή Παναγία Παραπορτιανή.",
          },
        },
        {
          title: {
            en: "For Delos: a day trip making history",
            el: "Για τη Δήλο: day trip που “γράφει” ιστορία",
          },
          text: {
            en: "Delos is a UNESCO World Heritage Site and its archaeological wealth covers a wide time range (from the 3rd millennium BC to Early Christian times). Secret: go as early as possible. Not just for photos with fewer crowds, but because the sun on the open landscape hits hard.",
            el: "Η Δήλος είναι Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO και ο αρχαιολογικός της πλούτος καλύπτει μεγάλο χρονικό εύρος (από την 3η χιλιετία π.Χ. έως και τους παλαιοχριστιανικούς χρόνους). Μικρό μυστικό: πήγαινε όσο πιο νωρίς γίνεται. Όχι μόνο για φωτογραφίες με λιγότερο κόσμο, αλλά και γιατί ο ήλιος στο ανοιχτό τοπίο της Δήλου “χτυπάει” δυνατά.",
          },
        },
        {
          title: {
            en: "For beaches for every style (VIP to wild quietness)",
            el: "Για παραλίες για κάθε στυλ (από VIP μέχρι άγρια ησυχία)",
          },
          text: {
            en: "Mykonos doesn't have \"one\" beach identity. It has famous beaches with a vibrant scene (Paradise, Super Paradise), but also quieter options (e.g., Agios Sostis, Fokos, Merchia) recommended by locals for a relaxed day.",
            el: "Η Μύκονος δεν έχει “μία” παραλία-ταυτότητα. Έχει διάσημες παραλίες με έντονη σκηνή (Paradise, Super Paradise), αλλά και πιο ήσυχες επιλογές (π.χ. Agios Sostis, Fokos, Merchia) που τις προτείνουν και ντόπιοι για πιο χαλαρή μέρα.",
          },
        },
        {
          title: {
            en: "For gastronomy with a Cycladic character",
            el: "Για γαστρονομία με χαρακτήρα Κυκλάδων",
          },
          text: {
            en: "If you're looking for authentic flavors, start with two local signatures: Kopanisti (a PDO cheese) and Louza (traditional pork cold cut with strong Cycladic identity).",
            el: "Αν ψάχνεις αυθεντικές γεύσεις, ξεκίνα από δύο “σήματα” του νησιού: Κοπανιστή (τυρί ΠΟΠ στο μητρώο της Ε.Ε.) και Λούζα Μυκόνου (παραδοσιακό κυκλαδίτικο αλλαντικό).",
          },
        },
        {
          title: {
            en: "For its \"myth\" — and why it's interesting",
            el: "Για το “μύθο” της — και γιατί έχει ενδιαφέρον",
          },
          text: {
            en: "Mykonos was internationally established from the 1970–80s as a place of freedom of expression and inclusion, and later became a jet-set holiday symbol. This mix of tradition and cosmopolitanism is a huge part of the experience.",
            el: "Η Μύκονος καθιερώθηκε διεθνώς από τις δεκαετίες 1970–80 ως τόπος ελευθερίας έκφρασης και συμπερίληψης, ενώ αργότερα έγινε σύμβολο jet-set διακοπών. Αυτό το μείγμα (παράδοση + κοσμοπολιτισμός) είναι μεγάλο κομμάτι της εμπειρίας.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time for Mykonos (and how to \"win\" the island)",
        el: "Καλύτερη εποχή για Μύκονο (και πώς να “κερδίσεις” το νησί)",
      },
      layout: "list",
      alert: {
        en: "Secret for the weather: The Meltemi winds are usually strongest mid-summer (July–August). A light windbreaker for the evening in Chora is not an exaggeration.",
        el: "Μικρό μυστικό του καιρού: οι μελτέμι-άνεμοι είναι πιο έντονοι συνήθως μέσα στο καλοκαίρι, ειδικά Ιούλιο–Αύγουστο. Ένα λεπτό αντιανεμικό για το βράδυ στην Χώρα δεν είναι υπερβολή.",
      },
      items: [
        {
          title: { en: "Spring to Early Summer (April–June)", el: "Άνοιξη προς Νωρίς Καλοκαίρι (Απρίλιος–Ιούνιος)" },
          text: {
            en: "Recommended as the best period (May–June) by Discover Greece. Ideal for warm weather, perfect sea temperatures, a relaxed vibe, and a more personal experience in Chora.",
            el: "Η επίσημη πλατφόρμα (Discover Greece) προτείνει Μάιο–Ιούνιο: ζεστός καιρός, ιδανική θάλασσα, πιο χαλαρό vibe και λιγότερη πίεση σε τιμές. Για πιο “προσωπική” εμπειρία στη Χώρα: Απρίλιος–αρχές Ιουνίου.",
          },
        },
        {
          title: { en: "High Summer (July–August)", el: "Καλοκαίρι (Ιούλιος–Αύγουστος)" },
          text: {
            en: "The full-season version of Mykonos: many events, packed beaches, high prices. If you visit now, play smart with timing (morning/afternoon) and mix in 1-2 quiet beaches for balance.",
            el: "Η full-season εκδοχή της Μυκόνου: πολλά events, γεμάτες παραλίες, υψηλές τιμές. Αν πας τότε, παίξε “έξυπνα” με ώρες (πρωί/απόγευμα) και διάλεξε 1-2 ήσυχες παραλίες για ισορροπία.",
          },
        },
        {
          title: { en: "Autumn (September–October)", el: "Φθινόπωρο (Σεπτέμβριος–Οκτώβριος)" },
          text: {
            en: "Mid-September to early October is another golden period. The sea remains warm, the crowds thin out, and the true character of the island emerges.",
            el: "Μέσα Σεπτεμβρίου–αρχές Οκτωβρίου προτείνονται ως ιδανικά: η θάλασσα κρατάει τη ζέστη της και η εμπειρία είναι πολύ πιο “προσωπική” και χαλαρή.",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get to Mykonos",
        el: "Πώς φτάνεις στη Μύκονο",
      },
      layout: "grid",
      items: [
        {
          title: { en: "By boat", el: "Με πλοίο" },
          text: {
            en: "Routes operate year-round from Piraeus, taking 2h40m to almost 6 hours depending on the vessel type. Ferries arrive at Mykonos New Port. Secret: Book early in the summer, especially if bringing a vehicle.",
            el: "Από Πειραιά υπάρχουν δρομολόγια όλο τον χρόνο, με διάρκεια 2 ώρες 40 λεπτά έως σχεδόν 6 ώρες. Τα πλοία καταλήγουν στο Νέο Λιμάνι. Μικρό μυστικό: Αν ταξιδεύεις καλοκαίρι, κλείσε έγκαιρα, ιδίως αν θες όχημα.",
          },
        },
        {
          title: { en: "By plane", el: "Με αεροπλάνο" },
          text: {
            en: "Mykonos Airport (JMK) offers regular and seasonal international flights. Secret: Routes (especially international) are highly seasonal.",
            el: "Το Mykonos Airport (JMK) διαθέτει κάποιες πτήσεις όλο το χρόνο και πάρα πολλές διεθνείς/εποχικές το καλοκαίρι. Μικρό μυστικό: Τα δρομολόγια είναι έντονα εποχικά.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions & experiences worth seeing",
        el: "Top αξιοθέατα & εμπειρίες που αξίζει να δεις και να κάνεις",
      },
      layout: "numbered",
      items: [
        {
          title: { en: "Little Venice: the best sunset-bar hopping", el: "Μικρή Βενετία (Little Venice): το πιο ωραίο sunset-bar hopping" },
          text: {
            en: "Here, buildings 'touch' the sea and the sunset becomes a social sport. Secret: Go twice. Once for the sunset and once early morning (around 08:00) for a peaceful photo stroll.",
            el: "Τα κτίρια “ακουμπούν” στη θάλασσα και το ηλιοβασίλεμα γίνεται κοινωνικό σπορ. Μυστικό: Πήγαινε δύο φορές. Μία για sunset (θα έχει κόσμο) και μία νωρίς το πρωί στις 08:00 για βόλτα χωρίς θόρυβο.",
          },
        },
        {
          title: { en: "The Windmills of Mykonos: the identity landmark", el: "Οι ανεμόμυλοι της Μυκόνου: το landmark που δίνει ταυτότητα" },
          text: {
            en: "Visible from almost everywhere in Chora, they are the island's most recognizable symbol. Secret: If it's windy, the area gets intense. Hold onto your hat!",
            el: "Θα τους δεις σχεδόν από παντού στη Χώρα. Μυστικό: Αν φυσάει, η περιοχή γύρω τους μπορεί να έχει δυνατό αέρα. Αν έχεις καπέλο που “πετάει”, κράτα το γερά.",
          },
        },
        {
          title: { en: "Panagia Paraportiani: the most photographed church", el: "Παναγία Παραπορτιανή: η πιο φωτογραφημένη εκκλησία της Χώρας" },
          text: {
            en: "One of the most characteristic architectural monuments. Secret: Its white color shoots best in soft light (morning or before sunset). In midday sun, it gets 'burnt' on camera.",
            el: "Συγκαταλέγεται στα must της βόλτας. Μυστικό φωτογραφίας: Το λευκό της “γράφει” καλύτερα σε απαλό φως (πρωί ή λίγο πριν δύσει). Στο μεσημεριανό φως, καίγεται.",
          },
        },
        {
          title: { en: "Stroll in Chora (with no destination)", el: "Βόλτα-διαδρομή μέσα στη Χώρα (χωρίς στόχο)" },
          text: {
            en: "The best way to know Mykonos is to get lost in its alleys. Secret: If you want shopping without crowds, do it midday (when most are at the beach) or late at night.",
            el: "Ο καλύτερος τρόπος να γνωρίσεις τη Μύκονο είναι να… χαθείς. Υπάρχει και επίσημα προτεινόμενη εμπειρία περιήγησης. Μυστικό: Για shopping χωρίς συνωστισμό, κάν’ το μεσημέρι ή αργά βράδυ.",
          },
        },
        {
          title: { en: "Delos: the signature journey", el: "Δήλος: το ταξίδι-υπογραφή" },
          text: {
            en: "Delos perfectly matches Mykonos offering a historical memory explosion. Secret: Skip large tours and choose an early slot with fewer people. Bring water and a hat.",
            el: "Η Δήλος “κουμπώνει” τέλεια με τη Μύκονο: κοσμοπολίτικη βάση + ιστορική έκρηξη μνήμης. Μυστικό: Αν δεν είσαι fan των ομαδικών tours, διάλεξε ώρα με μικρότερη κίνηση (νωρίς) και πάρε μαζί σου νερό/καπέλο.",
          },
        },
        {
          title: { en: "Archaeological Museum of Mykonos", el: "Αρχαιολογικό Μουσείο Μυκόνου: μικρό, αλλά ουσιαστικό" },
          text: {
            en: "Housed in a 1905 building, containing findings from Rhenia, acting as ancient Delos' necropolis. Secret: Visit before or after Delos to connect the dots.",
            el: "Στεγάζεται σε κτήριο του 1905 και περιλαμβάνει ευρήματα (μεταξύ άλλων) από τη Ρήνεια (νεκρόπολη Δήλου). Μυστικό: Βάλε το πριν ή μετά τη Δήλο. Θα δεις αλλιώς όσα περπάτησες εκεί.",
          },
        },
        {
          title: { en: "Aegean Maritime Museum", el: "Aegean Maritime Museum: η ναυτική ψυχή των Κυκλάδων" },
          text: {
            en: "A non-profit museum focused on Cycladic maritime history. Secret: An ideal 'break' during the heat of the day for something cultural without taking a half-day.",
            el: "Ναυτικό Μουσείο Αιγαίου (ιδρύθηκε το 1983). Μυστικό: Είναι ιδανικό “διάλειμμα” σε ώρα ζέστης, ειδικά αν θες κάτι πολιτιστικό χωρίς να αφιερώσεις όλη τη μέρα.",
          },
        },
        {
          title: { en: "Folklore Collection: the 'old' island", el: "Λαογραφικό Μουσείο / Folklore Collection: για το “παλιό” νησί" },
          text: {
            en: "Housed in a traditional captain's house in the Kastro area. Secret: If you're interested in how they lived before the fame, this makes the island more real.",
            el: "Στεγάζεται σε παραδοσιακό σπίτι-καπετάνιου στην περιοχή Κάστρο. Μυστικό: Αν σε ενδιαφέρει το “πώς ζούσαν εδώ πριν γίνει διάσημο”, κάνει τη Μύκονο πιο αληθινή.",
          },
        },
        {
          title: { en: "Ano Mera: Mykonos unfiltered", el: "Άνω Μερά: η Μύκονος χωρίς φίλτρα" },
          text: {
            en: "The classic inland trip featuring the monastery of Panagia Tourliani. Secret: Go to Ano Mera for lunch at the square when Chora is getting overly crowded.",
            el: "Είναι η κλασική εκδρομή “εκτός Χώρας” (εκεί βρίσκεται και η Παναγία Τουρλιανή). Μικρό μυστικό: Πήγαινε Άνω Μερά μεσημέρι για φαγητό στην πλατεία — όταν η Χώρα βράζει από κόσμο.",
          },
        },
        {
          title: { en: "Armenistis Lighthouse: views and edge of the Aegean", el: "Φάρος Αρμενιστή (Armenistis): θέα, ησυχία, αίσθηση “άκρης του Αιγαίου”" },
          text: {
            en: "Locally known as 'Fanari', built in 1891. Secret: It's an incredible spot for late-afternoon light, drawing far fewer crowds than central sunset spots.",
            el: "Ο φάρος είναι γνωστός τοπικά ως “Φανάρι” (χτίστηκε το 1891). Μυστικό: Είναι φοβερό σημείο για late-afternoon φως — και συνήθως με λιγότερο κόσμο από τα κεντρικά sunset spots.",
          },
        },
      ],
    },
    {
      title: {
        en: "Beaches: choose wisely based on your vibe",
        el: "Παραλίες: διάλεξε σωστά ανάλογα με το vibe σου",
      },
      layout: "list",
      alert: {
        en: "Secret: If it gets too windy with the Meltemi, opt for Paraga or closely sheltered bays to save your day.",
        el: "Μυστικό παραλίας: Αν φυσάει πολύ, βάλε στο παιχνίδι Paraga ή πιο “κλειστούς” κόλπους. Θα σώσεις την ημέρα σου.",
      },
      items: [
        {
          title: { en: "The 'iconic' beaches", el: "Οι “iconic” παραλίες (για να πεις ότι είδες Μύκονο)" },
          text: {
            en: "Psarou (luxury scene), Paradise & Super Paradise (party atmosphere), Paraga (boho and protected from wind), Platis Gialos (water taxi hub).",
            el: "Psarou (συνδέεται με luxury σκηνή), Paradise & Super Paradise (κορυφαία party ατμόσφαιρα), Paraga (boho, πιο προστατευμένη από ανέμους), Platis Gialos (βάση για θαλάσσια ταξί).",
          },
        },
        {
          title: { en: "The quiet beaches", el: "Οι ήσυχες παραλίες (για να χαλαρώσεις πραγματικά)" },
          text: {
            en: "Agios Stefanos, Megali Ammos, Kapari, Agrari, Kalafatis, Lia, Ftelia, Agios Sostis, Fokos, Mirsini, Merchia. Tip: Some have fewer amenities; bring water and a hat.",
            el: "Αυτές που προτείνουν και οι ντόπιοι: Agios Stefanos, Kapari, Agrari, Kalafatis, Lia, Ftelia, Agios Sostis, Fokos, Mirsini, Merchia. Μυστικό: Πήγαινε “εξοπλισμένος” στις πιο απομονωμένες (νερό/σκιά).",
          },
        },
      ],
    },
    {
      title: {
        en: "Food in Mykonos: what to try",
        el: "Φαγητό στη Μύκονο: τι να δοκιμάσεις οπωσδήποτε",
      },
      layout: "list",
      alert: {
        en: "Budget Secret: For better value, go 'out of Chora' to quieter beaches or inland villages like Ano Mera.",
        el: "Μυστικό οικονομίας: Το καλύτερο value συχνά είναι “εκτός Χώρας” ή σε πιο ήσυχες παραλίες/χωριά (π.χ. Άνω Μερά).",
      },
      items: [
        {
          title: { en: "Kopanisti (PDO)", el: "Κοπανιστή (ΠΟΠ)" },
          text: {
            en: "A spicy, strong cheese perfect for appetizers. Secret: Try it on a rusk with tomato (like a 'mostra') for a purely Cycladic vibe.",
            el: "Πικάντικη, έντονη, τέλεια για μεζέ (ΠΟΠ). Μυστικό: Δοκίμασέ τη πάνω σε παξιμάδι/κριθαροκουλούρα με ντομάτα (τύπου “μόστρα”) — απλό και απολύτως κυκλαδίτικο.",
          },
        },
        {
          title: { en: "Louza", el: "Λούζα" },
          text: {
            en: "Traditional pork cold cut distinguished by its spices and Cycladic maturation technique.",
            el: "Παραδοσιακό αλλαντικό που ξεχωρίζει για αρωματισμό/μπαχαρικά και κυκλαδίτικη τεχνική ωρίμανσης.",
          },
        },
        {
          title: { en: "Seafood in a taverna", el: "Κάτι “θαλασσινό” σε ταβέρνα" },
          text: {
            en: "Because you are in the Aegean. The best advice is classic: simply ask 'what is fresh today?'",
            el: "Γιατί είσαι στο Αιγαίο. Η καλύτερη συμβουλή εδώ είναι η κλασική: ρώτα απλώς “τι έχει σήμερα φρέσκο;”",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical tips (survival secrets)",
        el: "Πρακτικά tips (τα “μυστικά επιβίωσης” που κάνουν τη διαφορά)",
      },
      layout: "list",
      items: [
        {
          title: { en: "Booking and Timing", el: "Κρατήσεις και Ωράρια Χώρας" },
          text: {
            en: "Book early if heading during July-August. Stroll into Chora 'off the wave': morning or late at night. You'll double your enjoyment.",
            el: "Κλείσε νωρίς αν ταξιδεύεις Ιούλιο–Αύγουστο. Κάνε τη Χώρα σε ώρες “εκτός κύματος”: πρωί ή αργά βράδυ. Θα την απολαύσεις διπλά.",
          },
        },
        {
          title: { en: "Diversify Your Days", el: "Ποικιλία στο Πρόγραμμα" },
          text: {
            en: "Allocate 1 day for Delos (ideal early). Don't just do 'celebrity beaches' every day; mix 1 iconic with 1 quiet beach.",
            el: "Βάλε 1 μέρα Δήλο (ιδανικά νωρίς) — είναι εμπειρία που δεν αντιγράφεται. Μην πας όλες τις μέρες “σελέμπριτι παραλία”. Κάνε μίξη: 1 iconic, 1 ήσυχη.",
          },
        },
        {
          title: { en: "Photos and Commuting", el: "Φωτογραφίες & Μετακινήσεις" },
          text: {
            en: "Get your photos at Paraportiani and Little Venice early in the morning to beat the crowds. Bus timings are seasonal and change frequently.",
            el: "Φωτογραφίες χωρίς πλήθος: Παναγία Παραπορτιανή & Μικρή Βενετία νωρίς το πρωί. Και προσοχή: τα δρομολόγια λεωφορείων είναι εποχικά και αλλάζουν μέσα στη σεζόν.",
          },
        },
      ],
    },
    {
      title: {
        en: "FAQ",
        el: "FAQ (συχνές ερωτήσεις)",
      },
      layout: "faq",
      items: [
        {
          title: {
            en: "How many days are needed to see Mykonos properly?",
            el: "Πόσες μέρες χρειάζονται για να “δεις” Μύκονο σωστά;",
          },
          text: {
            en: "Ideally 3–5 days: 1 for Chora, 1 for Delos, 1–2 for beaches (mixing party & quiet), and one for Ano Mera / the lighthouse.",
            el: "Ιδανικά 3–5 μέρες: 1 για Χώρα, 1 για Δήλο, 1–2 για παραλίες (με μίξη party+quiet), και μία για Άνω Μερά/φάρο.",
          },
        },
        {
          title: {
            en: "Is Delos worth it if I'm not a 'museum buff'?",
            el: "Αξίζει η Δήλος αν δεν είμαι “μουσειόφιλος”;",
          },
          text: {
            en: "Yes, because it is an open-air archaeological experience and a UNESCO site, not a closed indoor museum.",
            el: "Ναι, γιατί είναι ανοιχτός αρχαιολογικός τόπος-εμπειρία και UNESCO, όχι “κλειστό μουσείο”.",
          },
        },
        {
          title: {
            en: "Is Mykonos = only parties?",
            el: "Μύκονος = μόνο πάρτι;",
          },
          text: {
            en: "No. Even official suggestions reserve space for quiet beaches, hikes, and authentic stops like Ano Mera.",
            el: "Όχι. Ακόμα και οι επίσημες προτάσεις για το νησί δίνουν χώρο σε ήσυχες παραλίες, βόλτες και πιο αυθεντικές στάσεις όπως η Άνω Μερά.",
          },
        },
        {
          title: {
            en: "Is it expensive? Is there a budget way?",
            el: "Είναι ακριβή; Υπάρχει τρόπος να την κάνω πιο budget;",
          },
          text: {
            en: "It exists, especially if you visit in May-June or Sept-Oct, and navigate away from the highly promoted hotspots to smaller tavernas and quiet beaches.",
            el: "Υπάρχει, ειδικά αν πας Μάιο–Ιούνιο ή Σεπτέμβριο–Οκτώβριο και αν κινηθείς μακριά από τα πιο προβεβλημένα beach clubs ή resorts της Χώρας.",
          },
        },
      ],
    },
  ],
  crete: [
    {
      title: {
        en: "Why visit Crete",
        el: "Γιατί να επισκεφθείς την Κρήτη",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "To see a civilization that entered the global list",
            el: "Για να δεις από κοντά έναν πολιτισμό που μπήκε στην παγκόσμια λίστα",
          },
          text: {
            en: "In 2025, the Minoan Palatial Centers joined the UNESCO World Heritage list (Knossos, Phaistos, Malia, Zakros, Zominthos, Kydonia). This alone makes Crete a 'cultural trip of a lifetime'.",
            el: "Το 2025, τα Μινωικά Ανακτορικά Κέντρα εντάχθηκαν στη λίστα Παγκόσμιας Κληρονομιάς της UNESCO (Κνωσός, Φαιστός, Μάλια κλπ). Αυτό από μόνο του κάνει την Κρήτη «πολιτιστικό ταξίδι ζωής».",
          },
        },
        {
          title: {
            en: "For beaches that change mood every day",
            el: "Για παραλίες που αλλάζουν ύφος κάθε μέρα",
          },
          text: {
            en: "Lagoons like Balos, pink hues in Elafonissi, palm trees at Preveli and Vai, wild southern coastline... Crete has an endless rhythm of coasts.",
            el: "Λιμνοθάλασσες τύπου Μπάλου, ροζ αποχρώσεις στην Ελαφονήσι, φοίνικες στο Πρέβελη και στο Βάι, άγρια νότια ακτογραμμή… η Κρήτη έχει ρυθμό ακτής που δεν τελειώνει.",
          },
        },
        {
          title: {
            en: "For nature that is not a background, but a protagonist",
            el: "Για φύση που δεν είναι “background”, είναι πρωταγωνιστής",
          },
          text: {
            en: "Samaria (16km) is one of Greece's most iconic hikes. Add mountain plateaus, caves, gorges, and hidden beaches, making the island ideal for active explorers.",
            el: "Η Σαμαριά (16km συνολικά) είναι από τις πιο εμβληματικές πεζοπορίες της Ελλάδας. Κι αυτό είναι μόνο η αρχή: ορεινά οροπέδια, σπήλαια, φαράγγια και κρυφές παραλίες.",
          },
        },
        {
          title: {
            en: "For gastronomy stepping on the authentic Mediterranean lifestyle",
            el: "Για γαστρονομία που πατάει πάνω στον αυθεντικό μεσογειακό τρόπο ζωής",
          },
          text: {
            en: "Crete is one of the strongest 'living labs' of the UNESCO Intangible Cultural Heritage Mediterranean Diet: olive oil, wild greens, cheeses, honey, wine, and raki.",
            el: "Η Κρήτη είναι από τα πιο δυνατά “ζωντανά εργαστήρια” της Μεσογειακής Διατροφής (UNESCO): ελαιόλαδο, χόρτα, τυριά, μέλι, παξιμάδι, κρασί και ρακί/τσικουδιά.",
          },
        },
        {
          title: {
            en: "To make 'many trips in one'",
            el: "Για να κάνεις «πολλά ταξίδια σε ένα»",
          },
          text: {
            en: "West Crete (Chania) for Venetian vibe and exotic beaches, Central (Heraklion) for Minoan museums, East (Lassithi) for Spinalonga and Vai.",
            el: "Δυτική Κρήτη (Χανιά) για ενετική ατμόσφαιρα + εξωτικές παραλίες, Κεντρική (Ηράκλειο) για Μινωικά/μουσεία, Ανατολική (Λασίθι) για Σπιναλόγκα–Ελούντα–Βάι.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time for Crete",
        el: "Καλύτερη εποχή για Κρήτη",
      },
      layout: "list",
      alert: {
        en: "Secret: If your goal is 'Crete with substance' (gorges, villages, archaeology), aim for late May or late September. You'll feel the island is yours.",
        el: "Μικρό μυστικό εποχής: αν ο στόχος σου είναι “Κρήτη με ουσία” (φαράγγια, χωριά, αρχαιολογία, ήρεμες παραλίες), στόχευσε τέλη Μαΐου ή τέλη Σεπτεμβρίου. Θα νιώσεις το νησί πιο δικό σου.",
      },
      items: [
        {
          title: { en: "May-June & Sept-Oct (The Sweet Spot)", el: "Μάιος–Ιούνιος & Σεπτέμβριος–Οκτώβριος" },
          text: {
            en: "Warm enough for swimming, fewer crowds, and more comfortable temperatures for hiking.",
            el: "Αρκετά ζεστό για μπάνιο, λιγότερος κόσμος και πιο άνετες θερμοκρασίες για πεζοπορίες.",
          },
        },
        {
          title: { en: "July-August (High Season)", el: "Ιούλιος–Αύγουστος" },
          text: {
            en: "The most lively (and most crowded/expensive) period.",
            el: "Η πιο ζωντανή (και πιο γεμάτη/ακριβή) περίοδος.",
          },
        },
        {
          title: { en: "Spring & Autumn", el: "Άνοιξη & φθινόπωρο" },
          text: {
            en: "Ideal for nature and hiking, because the landscape is greener and temperatures milder.",
            el: "Ιδανικά για φύση/πεζοπορίες, γιατί το τοπίο είναι πιο πράσινο και οι θερμοκρασίες πιο ήπιες.",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get to Crete",
        el: "Πώς φτάνεις στην Κρήτη",
      },
      layout: "grid",
      items: [
        {
          title: { en: "By plane", el: "Με αεροπλάνο" },
          text: {
            en: "Crete has 3 airports with direct connections to Athens year-round: Heraklion, Chania, Sitia. Many seasonal international connections in summer.",
            el: "Έχει 3 αεροδρόμια με απευθείας σύνδεση με Αθήνα όλο τον χρόνο: Ηράκλειο, Χανιά, Σητεία. Από εξωτερικό, ειδικά καλοκαίρι, υπάρχουν πολλές εποχικές συνδέσεις.",
          },
        },
        {
          title: { en: "By boat", el: "Με πλοίο" },
          text: {
            en: "Year-round ferries from Piraeus to Heraklion, Chania (Souda), Sitia, Kissamos. Secret: Taking the overnight ferry 'steals' time; you sleep onboard and gain a full day.",
            el: "Από Πειραιά υπάρχουν δρομολόγια όλο τον χρόνο. Μικρό μυστικό μετακίνησης: Αν θες να “κλέψεις” χρόνο, το βραδινό πλοίο είναι η πιο πρακτική επιλογή: κοιμάσαι εν πλω και κερδίζεις μια ολόκληρη μέρα.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions & experiences worth seeing",
        el: "Top αξιοθέατα & εμπειρίες που αξίζει να δεις και να κάνεις",
      },
      layout: "numbered",
      items: [
        {
          title: { en: "Knossos + Heraklion Museum", el: "Κνωσός + Μουσείο Ηρακλείου: το δίδυμο που εξηγεί όλη την Κρήτη" },
          text: {
            en: "The most famous Minoan palace, officially an UNESCO site. Secret: Don't visit Knossos 'dry'. Do the museum first or right after to see everything differently.",
            el: "Το πιο γνωστό μινωικό ανάκτορο (UNESCO). Μικρό μυστικό: μην πας Κνωσό “ξερή”. Κάνε πρώτα Μουσείο ή αμέσως μετά. Θα δεις τα πάντα με άλλο μάτι.",
          },
        },
        {
          title: { en: "Phaistos: Minoan power with a view", el: "Φαιστός: μινωική δύναμη με θέα" },
          text: {
            en: "One of the most important centers of Minoan civilization. Secret: Go late afternoon for softer light and less heat.",
            el: "Ήταν από τα σημαντικότερα κέντρα του μινωικού πολιτισμού. Μικρό μυστικό: πήγαινε αργά απόγευμα για πιο “μαλακό” φως και λιγότερη ζέστη.",
          },
        },
        {
          title: { en: "Gortyna: a different chapter of history", el: "Γόρτυνα: ένα διαφορετικό κεφάλαιο ιστορίας" },
          text: {
            en: "Inhabited since the Neolithic period, flowering greatly later. Ideal for those wanting to see Crete beyond the Minoans.",
            el: "Κατοικείται από τη Νεολιθική περίοδο και γνωρίζει μεγάλη άνθηση αργότερα. Ιδανική για όσους θέλουν να δουν Κρήτη πέρα από τα μινωικά.",
          },
        },
        {
          title: { en: "Chania: old town, Venetian harbor and the lighthouse", el: "Χανιά: παλιά πόλη, ενετικό λιμάνι και περίπατος μέχρι τον φάρο" },
          text: {
            en: "One of the most charming old towns. Secret: Walk to the harbor early in the morning. It's a different place before the crowds wake up.",
            el: "Μία από τις πιο γοητευτικές ιστορικά περιοχές. Μικρό μυστικό: πήγαινε για βόλτα στο λιμάνι νωρίς το πρωί. Είναι άλλο μέρος πριν “ξυπνήσει” ο κόσμος.",
          },
        },
        {
          title: { en: "Samaria: the hikers' rite of passage", el: "Σαμαριά: το “rite of passage” των πεζοπόρων" },
          text: {
            en: "A 16km gorge starting at an altitude of ~1,230m. Secret: If you go in summer, pick a day with mild temperatures and start as early as possible. Proper shoes are mandatory.",
            el: "Η Σαμαριά έχει συνολικό μήκος 16km. Μικρό μυστικό: αν πας καλοκαίρι, στόχευσε μέρα με ήπιες θερμοκρασίες και ξεκίνα νωρίς. Τα σωστά παπούτσια είναι απαραίτητα.",
          },
        },
        {
          title: { en: "Balos: the postcard to experience from above and up close", el: "Μπάλος: η “καρτ ποστάλ” που αξίζει να ζήσεις και από ψηλά και από κοντά" },
          text: {
            en: "A Natura 2000 protected zone. Secret: Go early or off-peak. The same beach changes personality when it's not crowded.",
            el: "Εντάσσεται στις ζώνες Natura 2000. Μικρό μυστικό: πήγαινε νωρίς ή εκτός peak (ώρες/ημέρες). Η ίδια παραλία αλλάζει προσωπικότητα όταν δεν είναι γεμάτη.",
          },
        },
        {
          title: { en: "Elafonissi + Kedrodasos", el: "Ελαφονήσι + Κεδρόδασος: το δίδυμο για “εξωτικό + ήρεμο”" },
          text: {
            en: "Famed for its pink hues, Elafonissi is gorgeous. Secret: Nearby Kedrodasos offers a quiet escape from the crowds.",
            el: "Η Ελαφονήσι είναι από τις πιο διάσημες (ροζ αποχρώσεις). Το καλύτερο “μικρό μυστικό” είναι ότι κοντά υπάρχει το Κεδρόδασος, ως ήσυχη απόδραση από την πολυκοσμία.",
          },
        },
        {
          title: { en: "Preveli: palms, lagoon, and gorge", el: "Πρέβελη: φοίνικες, λιμνοθάλασσα και φαράγγι σε ένα κάδρο" },
          text: {
            en: "A scene combining a palm forest, lagoon, and dramatic gorge. Secret: Go in the late afternoon for a milder sun and better exotic feel.",
            el: "Σκηνικό με φοινικόδασος, λιμνοθάλασσα και δραματικό φαράγγι. Μικρό μυστικό: πήγαινε απογευματάκι για πιο ήπιο ήλιο και καλύτερη αίσθηση “εξωτικού” τοπίου.",
          },
        },
        {
          title: { en: "Vai: the signature palm forest of East Crete", el: "Βάι: το φοινικόδασος-σύμβολο της Ανατολικής Κρήτης" },
          text: {
            en: "A large palm forest featuring Phoenix theophrasti, ~5,000 trees. Secret: Enjoy it very early in the morning for the true 'wow' factor.",
            el: "Έχει μεγάλο φοινικόδασος με περίπου 5000 δέντρα. Μικρό μυστικό: απόλαυσέ το πολύ νωρίς — η “ήρεμη” εκδοχή του Βάι είναι το πραγματικό wow.",
          },
        },
        {
          title: { en: "Spinalonga: fortified island with heavy history", el: "Σπιναλόγκα: οχυρό νησί με βαριά ιστορία" },
          text: {
            en: "Fortified since antiquity and later by the Venetians. Secret: Combine it with a stroll in Agios Nikolaos or Elounda for some seaside decompression afterwards.",
            el: "Είχε οχύρωση από την αρχαιότητα και αργότερα από τους Βενετούς. Μικρό μυστικό: συνδύασέ τη με βόλτα σε Άγιο Νικόλαο ή Ελούντα για “θαλασσινή” αποσυμπίεση μετά.",
          },
        },
        {
          title: { en: "Arkadi Monastery", el: "Μονή Αρκαδίου: το πιο φορτισμένο μνημείο της ενδοχώρας (Ρέθυμνο)" },
          text: {
            en: "The most emotionally charged monument featuring a historic dining hall, cellars, powder magazine, and museum.",
            el: "Διαθέτει χώρους όπως ιστορική τράπεζα, κελάρια, πυριτιδαποθήκη, μουσείο και πινακοθήκη.",
          },
        },
      ],
    },
    {
      title: {
        en: "Beaches, villages, food: Falling in love with Crete",
        el: "Παραλίες, χωριά, φαγητό: η Κρήτη όπως την ερωτεύεσαι",
      },
      layout: "list",
      alert: {
        en: "Beach Secret: Crete is huge. Don't rush across the island for one swim. Pick 2-3 top beaches per region you stay.",
        el: "Μικρό μυστικό παραλίας: η Κρήτη είναι μεγάλη — μην “καίγεσαι” να κάνεις όλο το νησί από άκρη σε άκρη για ένα μπάνιο. Διάλεξε 2-3 κορυφαίες παραλίες ανά περιοχή.",
      },
      items: [
        {
          title: { en: "Beaches (pick your vibe)", el: "Παραλίες (διάλεξε με βάση το vibe σου)" },
          text: {
            en: "For 'wow' landscapes: Balos, Elafonissi. For exotic green: Preveli, Vai. For quiet next to fame: Kedrodasos.",
            el: "Για “ουάου” τοπίο: Μπάλος, Ελαφονήσι. Για εξωτικό πράσινο: Πρέβελη, Βάι. Για ησυχία: Κεδρόδασος.",
          },
        },
        {
          title: { en: "Villages (where Crete speaks softly)", el: "Χωριά (εκεί που η Κρήτη μιλάει χαμηλόφωνα)" },
          text: {
            en: "Don't just chase 'Instagram villages'. Plan 1-2 inland stops for coffee/food to experience genuine Cretan hospitality.",
            el: "Το μυστικό είναι να βάλεις στο πρόγραμμα 1-2 στάσεις στην ενδοχώρα για καφέ/φαγητό: θα δεις την κρητική φιλοξενία στην πιο αυθεντική της μορφή.",
          },
        },
        {
          title: { en: "Food (Must-tries)", el: "Φαγητό (τι να δοκιμάσεις χωρίς δεύτερη σκέψη)" },
          text: {
            en: "Seek out Cretan Graviera and Xynomizithra (PDO cheeses). Secret: The food game is won with 'dishes of the day' in family tavernas, not fancy restaurants.",
            el: "Δοκίμασε Γραβιέρα και Ξυνομυζήθρα Κρήτης (ΠΟΠ). Μικρό μυστικό: Το παιχνίδι κερδίζεται με πιάτα ημέρας και μαγειρευτά σε οικογενειακές ταβέρνες.",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical tips (survival secrets)",
        el: "Πρακτικά tips (για να την απολαύσεις χωρίς ταλαιπωρία)",
      },
      layout: "list",
      items: [
        {
          title: { en: "Base locations", el: "Επιλογή βάσης" },
          text: {
            en: "Crete is huge. For 5-7 days, pick 1-2 bases (e.g., Chania + Heraklion, or Rethymno + Agios Nikolaos).",
            el: "Η Κρήτη είναι τεράστια: για 5–7 μέρες, διάλεξε 1–2 βάσεις (π.χ. Χανιά + Ηράκλειο ή Ρέθυμνο + Άγιος Νικόλαος).",
          },
        },
        {
          title: { en: "Timing & Distances", el: "Ωράρια & Αποστάσεις" },
          text: {
            en: "Keep 'buffer time': map distances look short, but roads and mountain passes take time. Visit sites early to beat the heat.",
            el: "Κράτησε “buffer time”: οι αποστάσεις στον χάρτη φαίνονται μικρές, αλλά οι δρόμοι θέλουν χρόνο. Αρχαιολογικοί χώροι: προτίμησε πρωί ή απόγευμα για δροσιά.",
          },
        },
        {
          title: { en: "Nature etiquette", el: "Natura 2000" },
          text: {
            en: "In protected areas (Natura 2000), don't take nature 'souvenirs' and avoid free camping or fires.",
            el: "Σε προστατευόμενες περιοχές μην παίρνεις “ενθύμια” από τη φύση και απέφυγε ελεύθερο κάμπινγκ/φωτιές.",
          },
        },
      ],
    },
    {
      title: {
        en: "FAQ",
        el: "FAQ (συχνές ερωτήσεις)",
      },
      layout: "faq",
      items: [
        {
          title: {
            en: "How many days do I need for Crete?",
            el: "Πόσες μέρες χρειάζομαι για Κρήτη;",
          },
          text: {
            en: "Ideally 7-10 to see 2 regions without rushing. In 4-5 days, stick to one base only (e.g., only West or only Central/East).",
            el: "Ιδανικά 7–10 για να δεις 2 περιοχές χωρίς τρέξιμο. Σε 4–5 μέρες, προτείνεται μία βάση (π.χ. μόνο Δυτική Κρήτη ή μόνο Κεντρική/Ανατολική).",
          },
        },
        {
          title: {
            en: "Do I need a car?",
            el: "Χρειάζομαι αυτοκίνητο;",
          },
          text: {
            en: "If you want beaches like Balos/Elafonissi/Preveli and inland villages, a car makes all the difference. Staying in Chania/Heraklion allows organized tours, but less flexibility.",
            el: "Αν θέλεις παραλίες τύπου Μπάλος/Ελαφονήσι/Πρέβελη και χωριά ενδοχώρας, το αυτοκίνητο κάνει τη διαφορά.",
          },
        },
        {
          title: {
            en: "What to do if I only have 3 days?",
            el: "Τι να κάνω αν έχω μόνο 3 μέρες;",
          },
          text: {
            en: "Pick a region and go deep: Chania for Old Town + one exotic beach + nature, or Heraklion for the Museum + Knossos + Phaistos.",
            el: "Διάλεξε περιοχή και παίξε “βαθιά”: Χανιά (Παλιά Πόλη + Μπάλος + φύση) ή Ηράκλειο (Μουσείο + Κνωσός + Φαιστός).",
          },
        },
        {
          title: {
            en: "Is Crete worth it without beaches?",
            el: "Αξίζει η Κρήτη χωρίς παραλίες;",
          },
          text: {
            en: "Yes. Minoans/UNESCO, historic cities, villages, gorges, gastronomy — it's a 12-month destination.",
            el: "Ναι. Μινωικά/UNESCO, πόλεις με ιστορία, χωριά, φαράγγια, γαστρονομία — είναι προορισμός 12μηνος.",
          },
        },
      ],
    },
  ],
  kefalonia: [
    {
      title: {
        en: "Why Kefalonia stands out",
        el: "Γιατί ξεχωρίζει η Κεφαλονιά",
      },
      text: {
        en: "Kefalonia stands out because it balances natural beauty with a calm and elegant island feeling. Travelers can move from panoramic mountain roads to famous beaches and from hidden coves to pretty villages without losing the sense of space and tranquility that defines the island. Tours here often feel cinematic, especially when they combine sea views with local stops in places that still feel authentic.",
        el: "Η Κεφαλονιά ξεχωρίζει επειδή συνδυάζει φυσική ομορφιά με μια ήρεμη και κομψή νησιωτική αίσθηση. Ο επισκέπτης μπορεί να περάσει από πανοραμικούς ορεινούς δρόμους σε διάσημες παραλίες και από κρυφούς όρμους σε όμορφα χωριά, χωρίς να χάνεται η αίσθηση χώρου και ηρεμίας που χαρακτηρίζει το νησί. Οι εκδρομές εδώ έχουν συχνά κινηματογραφικό χαρακτήρα, ειδικά όταν ενώνουν θέα στη θάλασσα με αυθεντικές τοπικές στάσεις.",
      },
    },
    {
      title: {
        en: "Best experiences to include",
        el: "Οι καλύτερες εμπειρίες που αξίζει να περιλαμβάνει",
      },
      text: {
        en: "A strong Kefalonia tour usually combines more than one travel mood. One part may focus on famous landmarks such as Myrtos Beach or Melissani Cave, while another may highlight the beauty of Assos or the harbor atmosphere of Fiskardo. The most memorable tours are not only about photo stops, but about the rhythm of the island: scenic driving, swimming breaks, village walks and the sense of discovering places gradually throughout the day.",
        el: "Μια καλή εκδρομή στην Κεφαλονιά συνήθως συνδυάζει περισσότερες από μία ταξιδιωτικές εμπειρίες. Ένα μέρος μπορεί να εστιάζει σε γνωστά σημεία όπως η παραλία Μύρτος ή το Σπήλαιο Μελισσάνης, ενώ ένα άλλο να αναδεικνύει την ομορφιά της Άσσου ή την ατμόσφαιρα του λιμανιού στο Φισκάρδο. Οι πιο όμορφες εκδρομές δεν βασίζονται μόνο στις στάσεις για φωτογραφίες, αλλά και στον ρυθμό του νησιού: γραφικές διαδρομές, στάσεις για μπάνιο, βόλτες σε χωριά και τη σταδιακή ανακάλυψη του τόπου μέσα στη μέρα.",
      },
    },
    {
      title: {
        en: "A more authentic island pace",
        el: "Ένας πιο αυθεντικός νησιωτικός ρυθμός",
      },
      text: {
        en: "What makes Kefalonia especially appealing is that it still feels generous and unhurried. Even when visiting popular places, travelers often feel that there is room to breathe, look around and enjoy the landscape. This slower, more refined rhythm is one of the main reasons destination content for Kefalonia should feel travel-oriented and inspirational, not just practical. The destination invites visitors to imagine the full island experience, not only a list of stops.",
        el: "Αυτό που κάνει την Κεφαλονιά ιδιαίτερα ελκυστική είναι ότι εξακολουθεί να αποπνέει άνεση και ηρεμία. Ακόμη και στα πιο γνωστά σημεία, ο επισκέπτης συχνά νιώθει ότι έχει χώρο να απολαύσει το τοπίο χωρίς πίεση. Αυτός ο πιο αργός και ποιοτικός ρυθμός είναι ένας από τους βασικούς λόγους που το περιεχόμενο για την Κεφαλονιά πρέπει να είναι ταξιδιωτικό και εμπνευστικό, όχι μόνο πρακτικό. Ο προορισμός σε καλεί να φανταστείς ολόκληρη την εμπειρία του νησιού, όχι απλώς μια λίστα στάσεων.",
      },
    },
  ],

  lesvos: [
    {
      title: {
        en: "A cultural island to explore slowly",
        el: "Ένα πολιτιστικό νησί για αργή εξερεύνηση",
      },
      text: {
        en: "Lesvos rewards visitors who prefer depth over speed. Instead of focusing only on famous postcard spots, the island invites travelers to discover atmosphere, architecture, traditions and food culture, creating a more personal connection with the destination.",
        el: "Η Λέσβος ανταμείβει τον επισκέπτη που προτιμά το βάθος αντί για την ταχύτητα. Αντί να εστιάζει μόνο σε γνωστά φωτογραφικά σημεία, το νησί σε καλεί να ανακαλύψεις ατμόσφαιρα, αρχιτεκτονική, παραδόσεις και γαστρονομία, δημιουργώντας μια πιο προσωπική σχέση με τον προορισμό.",
      },
    },
    {
      title: {
        en: "Villages, flavors and local identity",
        el: "Χωριά, γεύσεις και τοπική ταυτότητα",
      },
      text: {
        en: "One of the biggest strengths of Lesvos is how naturally local identity enters the travel experience. Village squares, harbor tavernas, olive landscapes and traditional neighborhoods all help shape a stay that feels genuine and memorable.",
        el: "Ένα από τα μεγαλύτερα πλεονεκτήματα της Λέσβου είναι ο φυσικός τρόπος με τον οποίο η τοπική ταυτότητα μπαίνει στην ταξιδιωτική εμπειρία. Πλατείες χωριών, ταβέρνες σε λιμάνια, ελαιώνες και παραδοσιακές γειτονιές δημιουργούν μια διαμονή που μοιάζει αληθινή και αξέχαστη.",
      },
    },
    {
      title: {
        en: "Ideal for meaningful travel",
        el: "Ιδανική για ουσιαστικό ταξίδι",
      },
      text: {
        en: "Lesvos is a destination for travelers who want more than surface-level sightseeing. Content for the island works best when it brings visitors closer to the local rhythm and shows why Lesvos feels rich in character rather than simply busy with attractions.",
        el: "Η Λέσβος είναι προορισμός για ταξιδιώτες που θέλουν κάτι περισσότερο από επιφανειακό sightseeing. Το περιεχόμενο για το νησί λειτουργεί καλύτερα όταν φέρνει τον επισκέπτη πιο κοντά στον τοπικό ρυθμό και δείχνει γιατί η Λέσβος είναι γεμάτη χαρακτήρα και όχι απλώς γεμάτη αξιοθέατα.",
      },
    },
  ],
};