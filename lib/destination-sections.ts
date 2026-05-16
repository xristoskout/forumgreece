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

  corfu: [
    {
      title: {
        en: "Why visit Corfu",
        el: "Γιατί να επισκεφθεί κάποιος την Κέρκυρα",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "For the UNESCO Old Town that is 'alive', not a showcase",
            el: "Για την Παλιά Πόλη UNESCO που είναι «ζωντανή», όχι βιτρίνα",
          },
          text: {
            en: "The fortresses (Old and New), the squares, the alleys and the neoclassical elements compose a set with unique authenticity. UNESCO emphasizes that the main features of the fortifications are preserved and its current form is a result of 19th-20th century works with a strong neoclassical character.",
            el: "Τα φρούρια (Παλαιό και Νέο), οι πλατείες, τα καντούνια και τα νεοκλασικά στοιχεία συνθέτουν ένα σύνολο με ιδιαίτερη αυθεντικότητα. Η UNESCO τονίζει ότι διατηρούνται τα βασικά χαρακτηριστικά των οχυρώσεων και ότι η σημερινή μορφή του συνόλου είναι αποτέλεσμα έργων 19ου–20ού αιώνα, με έντονο νεοκλασικό χαρακτήρα.",
          },
        },
        {
          title: {
            en: "For the beaches: 'emerald' Ionian and a rhythm for everyone",
            el: "Για τις παραλίες: «σμαραγδί» Ιόνιο και ρυθμός για όλα",
          },
          text: {
            en: "From organized sandy shores to wild pieces of coast, Corfu has a huge variety. Discover Greece mentions that 30 beaches in Corfu have been awarded a Blue Flag (and talks about a 217km coastline).",
            el: "Από οργανωμένες αμμουδιές μέχρι άγρια κομμάτια ακτής, η Κέρκυρα έχει τεράστια ποικιλία. Το Discover Greece αναφέρει ότι 30 παραλίες της Κέρκυρας έχουν βραβευτεί με Γαλάζια Σημαία (και μιλά για ακτογραμμή 217km).",
          },
        },
        {
          title: {
            en: "For experiences that are 'not just swimming'",
            el: "Για εμπειρίες που δεν είναι «μόνο μπάνιο»",
          },
          text: {
            en: "Hiking the Corfu Trail (~180 km from south to north), castles on rocks, monasteries with views, surprise museums (yes, even a Museum of Asian Art), day trips to Paxos/Antipaxos or even Albania.",
            el: "Πεζοπορία στον Corfu Trail (~180 km από νότο προς βορρά), κάστρα σε βράχια, μοναστήρια με θέα, μουσεία-έκπληξη (ναι, και Μουσείο Ασιατικής Τέχνης), ημερήσιες εκδρομές σε Παξούς/Αντίπαξους ή ακόμα και Αλβανία.",
          },
        },
        {
          title: {
            en: "For the food that 'marries' the Ionian with Venetian finesse",
            el: "Για το φαγητό που «παντρεύει» Ιόνιο με Βενετσιάνικη φινέτσα",
          },
          text: {
            en: "Pastitsada, sofrito, bourdeto, bianco, kumquat… And these are not just meal names, they are part of the island's identity.",
            el: "Παστιτσάδα, σοφρίτο, μπουρδέτο, μπιάνκο, κουμκουάτ… Κι αυτά δεν είναι απλώς πιάτα-ονόματα, είναι μέρος της ταυτότητας του νησιού.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time for Corfu (and the most useful 'secret')",
        el: "Καλύτερη εποχή για Κέρκυρα (και το πιο χρήσιμο «μυστικό»)",
      },
      layout: "list",
      alert: {
        en: "The secret: If you can choose one period for 'everything' (town + beaches + villages + walks), pick late May or late September. You will feel it more authentic and a lot more comfortable.",
        el: "Το μυστικό: Αν μπορείς να διαλέξεις μία περίοδο για “όλα” (πόλη + παραλίες + χωριά + βόλτες), διάλεξε τέλη Μαΐου ή τέλη Σεπτεμβρίου. Θα την νιώσεις πιο αυθεντική και πολύ πιο άνετη.",
      },
      items: [
        {
          title: { en: "May-June or Sept-Oct", el: "Μάιο–Ιούνιο ή Σεπτέμβριο–Οκτώβριο" },
          text: {
            en: "Warm weather, nice sea and fewer crowds.",
            el: "Ζεστός καιρός, ωραία θάλασσα και λιγότερος συνωστισμός.",
          },
        },
        {
          title: { en: "April-May and Oct-Nov", el: "Απρίλιο–Μάιο και Οκτώβριο–Νοέμβριο" },
          text: {
            en: "Ideal for walking, nature and hiking, without the 'scorching' July.",
            el: "Ιδανικά για βόλτες, φύση και πεζοπορία, χωρίς τον «καυτό» Ιούλιο.",
          },
        },
        {
          title: { en: "Seasonal highlight of a lifetime: Easter in Corfu", el: "Εποχικό highlight που αξίζει ζωής: το Πάσχα στην Κέρκυρα" },
          text: {
            en: "Visit Greece mentions the custom of 'Botides' (throwing clay pots) and gives dates for things. Tip: if you go for Easter, book your stay earlier than you would for a 'regular' weekend.",
            el: "Το Visit Greece αναφέρει το έθιμο των «Μπότηδων» (ρίψη πήλινων δοχείων) και μάλιστα δίνει συγκεκριμένη ημερομηνία για το 2026 (Μεγάλο Σάββατο πρωί). (Μικρό tip: αν πας για Πάσχα, κλείσε διαμονή νωρίτερα από ό,τι θα έκλεινες για ένα «απλό» τριήμερο.)",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get to Corfu",
        el: "Πώς φτάνεις στην Κέρκυρα",
      },
      layout: "grid",
      items: [
        {
          title: { en: "By plane", el: "Με αεροπλάνο" },
          text: {
            en: "The airport is Corfu Airport 'Ioannis Kapodistrias' (CFU), with official flight/schedule info on the airport's website (Fraport Greece). Secret: If traveling high season, prefer 'off-peak' hours (very early/late night) for less stress.",
            el: "Το αεροδρόμιο είναι το Αεροδρόμιο Κέρκυρας «Ιωάννης Καποδίστριας» (CFU), με επίσημη ενημέρωση πτήσεων/ωραρίων από τον ιστότοπο του αεροδρομίου (Fraport Greece). Μυστικό: Αν ταξιδεύεις high season, προτίμησε ώρες πτήσεων εκτός «αιχμής» (πολύ πρωί/αργά βράδυ) για λιγότερο στρες σε έλεγχο/παραλαβές.",
          },
        },
        {
          title: { en: "By boat (the classic, beautiful choice)", el: "Με πλοίο (η κλασική, όμορφη επιλογή)" },
          text: {
            en: "The most common sea access is from Igoumenitsa, a trip around 1h10m-1h30m. There are also international connections (e.g. from Saranda Albania, ~25' to 1.5h depending on the boat type).",
            el: "Η πιο συνηθισμένη θαλάσσια πρόσβαση είναι από Ηγουμενίτσα, με ταξίδι περίπου 1h10m–1h30m (ανά λιμάνι/πλοίο). Υπάρχουν επίσης διεθνείς συνδέσεις (π.χ. από Σαράντα Αλβανίας, ~25’ έως 1,5h ανά τύπο πλοίου).",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions & experiences: what is truly worth seeing and doing",
        el: "Top αξιοθέατα & εμπειρίες: τι αξίζει πραγματικά να δεις και να κάνεις",
      },
      layout: "numbered",
      items: [
        {
          title: { en: "Corfu Old Town (UNESCO): get 'lost' on purpose", el: "Παλιά Πόλη Κέρκυρας (UNESCO): «χαθείτε» επίτηδες" },
          text: {
            en: "Treat the Old Town like a game: pick a starting point and walk without a plan. The feeling is this mix of influences UNESCO mentions. Secret: do the same route twice: morning (quiet, photos) and evening (atmosphere, music, life).",
            el: "Πάρε την Παλιά Πόλη σαν παιχνίδι: διάλεξε ένα σημείο-αφετηρία και περπάτα χωρίς πρόγραμμα. Η αίσθηση της πόλης είναι αυτή η μίξη επιρροών που αναφέρει και η UNESCO, και φαίνεται παντού: στις στοές, στις πλατείες, στην οργάνωση του αμυντικού συστήματος. Μικρό μυστικό: Κάνε την ίδια διαδρομή δύο φορές: μία πρωί (ηρεμία, φωτογραφίες) και μία βράδυ (ατμόσφαιρα, μουσική, ζωή).",
          },
        },
        {
          title: { en: "Spianada & Liston: the 'European living room' of the island", el: "Σπιανάδα & Λιστόν: το «ευρωπαϊκό σαλόνι» του νησιού" },
          text: {
            en: "Spianada is the largest square in the Balkans. Liston is the classic arcade walk with cafes (French period design inspired by Rue de Rivoli). Secret: Sit for coffee slightly 'deeper' in the arcades for a quieter mood.",
            el: "Η Σπιανάδα παρουσιάζεται από τον επίσημο οδηγό ως η μεγαλύτερη πλατεία στα Βαλκάνια. Το Λιστόν είναι η κλασική βόλτα-στοά με καφέ: υπάρχει τεκμηρίωση ότι σχεδιάστηκε κατά τη γαλλική περίοδο, με έμπνευση από τη Rue de Rivoli. Μικρό μυστικό: Κάτσε για καφέ όχι στο πιο κεντρικό σημείο, αλλά λίγο πιο «μέσα» στις στοές – συχνά είναι πιο ήσυχο και απολαμβάνεις καλύτερα το mood.",
          },
        },
        {
          title: { en: "Old Fortress & New Fortress: the defense duo", el: "Παλαιό Φρούριο & Νέο Φρούριο: το δίδυμο της άμυνας" },
          text: {
            en: "The Old Fortress operates today as an open monument. For the New Fortress there's official info from the Ministry of Culture. Secret: Go right before sunset, the light makes the stone 'sweeter'.",
            el: "Το Παλαιό Φρούριο λειτουργεί σήμερα σαν «ανοιχτός μνημειακός χώρος» και φιλοξενεί και πολιτιστικές χρήσεις. Για το Νέο Φρούριο υπάρχουν επίσημες πληροφορίες από το Υπουργείο Πολιτισμού (Odysseus). Μικρό μυστικό: πήγαινε για θέα λίγο πριν δύσει — το φως «γλυκαίνει» την πέτρα και η πόλη από πάνω δείχνει… κινηματογραφική.",
          },
        },
        {
          title: { en: "Museum of Asian Art: the most unexpected 'plot twist'", el: "Μουσείο Ασιατικής Τέχνης: το πιο απρόσμενο “plot twist”" },
          text: {
            en: "Located in Corfu with a history since 1928, having around 15,000 works. Secret: Ideal for a midday break and it matches perfectly with the cosmopolitan identity of the Old Town.",
            el: "Το Μουσείο Ασιατικής Τέχνης στην Κέρκυρα έχει ιστορία από το 1928 (ως σινοϊαπωνική συλλογή) και σήμερα διαθέτει περίπου 15.000 έργα σύμφωνα με την επίσημη παρουσίαση του μουσείου. Μικρό μυστικό: Είναι ιδανικό διάλειμμα για μεσημέρι (ζέστη/κόσμος) και «δένει» τέλεια με την κοσμοπολίτικη ταυτότητα της.",
          },
        },
        {
          title: { en: "Mon Repos & Paleopolis: walk in an estate, history in a villa", el: "Μον Ρεπό & Παλαιόπολη: περίπατος σε κτήμα, ιστορία σε βίλα" },
          text: {
            en: "Housed in a British era villa, open to the public since 2001. Secret: Go in the afternoon for a walk in the estate, the light makes it incredibly 'peaceful'.",
            el: "Το Μουσείο Παλαιόπολης – Μον Ρεπό στεγάζεται σε βίλα της βρετανικής κυριαρχίας, άνοιξε στο κοινό το 2001. Μυστικό: Πήγαινε απόγευμα για περπάτημα στο κτήμα — η βλάστηση και το φως κάνουν το μέρος απίστευτα «ήρεμο».",
          },
        },
        {
          title: { en: "Kanoni - Panagia Vlacherna - Pontikonissi: classic but done right", el: "Κανόνι – Παναγία Βλαχέρνα – Ποντικονήσι: το κλασικό, αλλά σωστά" },
          text: {
            en: "Vlacherna Monastery (17th c.) is right across Kanoni, from there you can take a small boat to Pontikonissi. Secret: Perfect for plane-spotters. If not, go very early to enjoy it quietly.",
            el: "Η Μονή Βλαχέρνας (17ος αι.) βρίσκεται ακριβώς απέναντι από το Κανόνι και συνδέεται με τη στεριά με πεζογέφυρα, ενώ από εκεί μπορείς να πάρεις βαρκάκι για το Ποντικονήσι. Μικρό μυστικό: Αν είσαι plane-spotter, εδώ θα περάσεις τέλεια. Αν δεν είσαι… πήγαινε πολύ πρωί για να το απολαύσεις ήσυχα.",
          },
        },
        {
          title: { en: "Achilleion: 'Sissi's palace', but check what is open", el: "Αχίλλειο: το «παλάτι της Σίσσυ», αλλά τσέκαρε τι είναι ανοιχτό" },
          text: {
            en: "The external areas/Imperial Gardens are open. Before you go, check official ticketing due to restoration works. Secret: Even without entering the building, the gardens are fully worth it.",
            el: "Για το Αχίλλειο οι χώροι που είναι ανοιχτοί περιλαμβάνουν τους εξωτερικούς χώρους/Imperial Gardens. Επειδή γίνονται εργασίες, έλεγξε το επίσημο ticketing. Μικρό μυστικό: Ακόμα κι αν δεν μπεις μέσα, οι κήποι αξίζουν, ειδικά ώς στάση σε διαδρομή.",
          },
        },
        {
          title: { en: "Paleokastritsa: the most famous bays (done like a local)", el: "Παλαιοκαστρίτσα: οι πιο διάσημοι κόλποι (και πώς να την κάνεις “local”)" },
          text: {
            en: "Iconic landscapes: bays, rocks, pines, and boats taking you to caves. The monastery goes back to 1228. Secret: In Jul-Aug, go before 10:30, swim quickly, and leave before the noon crowds.",
            el: "Εμβληματικά τοπία: κόλποι, βράχια, πεύκα, και βαρκάκια για παραλίες/σπηλιές. Για τη Μονή αναφέρεται ότι ανάγεται στο 1228. Μυστικό: Αν πας Ιούλιο–Αύγουστο, πήγαινε νωρίς (πριν τις 10:30) και κάνε «ένα μπάνιο-γρήγορο» + «ένα μπάνιο-αργά». Μεσημέρι γίνεται γεμάτη.",
          },
        },
        {
          title: { en: "Angelokastro: a view that makes you fall silent", el: "Αγγελόκαστρο: θέα που σε κάνει να σωπάσεις" },
          text: {
            en: "The Byzantine Castle Angelokastro has official hours on Odysseus. Secret: Bring water and good shoes. It's an uphill walk, but the view pays off double.",
            el: "Το Βυζαντινό Κάστρο Αγγελόκαστρο έχει επίσημη σελίδα στο Odysseus με εποχικά ωράρια. Μυστικό: Πάρε νερό και παπούτσι. Δεν είναι δύσκολο, αλλά έχει ανηφορίτσα—και η θέα σε αποζημιώνει διπλά.",
          },
        },
        {
          title: { en: "Corfu Trail: Corfu beyond the beaches", el: "Corfu Trail: η Κέρκυρα πέρα από τις παραλίες" },
          text: {
            en: "A long-distance path of around 180 km. Secret: You don't have to do it all. Pick 1-2 daily segments (ideally in Spring/Autumn) to see the 'green' Corfu.",
            el: "Περιγράφεται ως long-distance μονοπάτι περίπου 180 km. Μυστικό: Δεν χρειάζεται να κάνεις όλο το μονοπάτι. Διάλεξε 1–2 ημερήσια κομμάτια (ιδανικά άνοιξη/φθινόπωρο) για να δεις την “πράσινη” Κέρκυρα.",
          },
        },
        {
          title: { en: "Day trips (if you have time)", el: "Day trips που αξίζουν (αν έχεις χρόνο)" },
          text: {
            en: "Paxos/Antipaxos (45' to 2.5h trip) and Saranda Albania (~25' to 1.5h). Secret: Treat them as alternatives on a busy or extremely hot day in the city.",
            el: "Παξοί/Αντίπαξοι (~45’ έως 2,5 ώρες) και Σαράντα (Αλβανία, ~25’–1,5h). Μυστικό: Κάνε τα σαν “εναλλακτική” σε ημέρα με πολύ ζέστη/πολύ κόσμο στην πόλη.",
          },
        },
      ],
    },
    {
      title: {
        en: "Corfu beaches: choices by style (with little secrets)",
        el: "Παραλίες Κέρκυρας: επιλογές ανά στυλ (με μικρά μυστικά)",
      },
      layout: "list",
      alert: {
        en: "Beach secret: Corfu has spots with pebbles and small rocks. A pair of water shoes will save the day, especially on 'stony' shores.",
        el: "Μυστικό παραλίας γενικό: Η Κέρκυρα έχει σημεία με βότσαλο/βραχάκια. Ένα ζευγάρι παπουτσάκια θαλάσσης σώζει μέρα, ειδικά σε πιο «πέτρινες» ακτές.",
      },
      items: [
        {
          title: { en: "For families / comfort", el: "Για οικογένειες / άνεση" },
          text: {
            en: "Glyfada: sandy, organized, for an 'easy day'. Dassia / Roda / Acharavi: calm waters and great as bases.",
            el: "Γλυφάδα: αμμουδιά, οργανωμένη, καλή για “εύκολη μέρα”. Δασιά / Ρόδα / Αχαράβη: συχνά ήρεμα νερά και πολλές επιλογές διαμονής (ιδανικές βάσεις).",
          },
        },
        {
          title: { en: "For striking landscapes", el: "Για εντυπωσιακό τοπίο" },
          text: {
            en: "Paleokastritsa: postcard-like bays. Canal d'Amour (Sidari): signature rock formations.",
            el: "Παλαιοκαστρίτσα: κόλποι-καρτ ποστάλ. Canal d’Amour (Σιδάρι): χαρακτηριστικός σχηματισμός/τοπίο που έχει γίνει σήμα κατατεθέν.",
          },
        },
        {
          title: { en: "For 'small effort, high reward'", el: "Για «μικρό κόπο, μεγάλη ανταμοιβή»" },
          text: {
            en: "Porto Timoni (Afionas): famous twin beaches, reached via hike. Wear sneakers, take water, and save time for the viewpoint before descending.",
            el: "Πόρτο Τιμόνι (Αφιώνας): οι διάσημες «δίδυμες» παραλίες, με πεζοπορία. Μυστικό: πήγαινε με αθλητικό παπούτσι/νερό. Κράτα χρόνο για ένα viewpoint πριν κατέβεις—εκεί είναι το μεγάλο 'wow'.",
          },
        },
        {
          title: { en: "For a wilder/natural vibe", el: "Για πιο άγριο/φυσικό vibe" },
          text: {
            en: "Chalikounas / Issos (south-southwest): sand, dunes and a much more 'open' landscape. Perfect for those who want space.",
            el: "Χαλικούνας / Ισσός (νότια-νοτιοδυτικά): άμμος, αμμοθίνες και πιο «ανοιχτό» τοπίο — τέλειο για όσους θέλουν χώρο.",
          },
        },
      ],
    },
    {
      title: {
        en: "Villages worth seeing",
        el: "Χωριά που αξίζει να δεις (για να πεις ότι γνώρισες την Κέρκυρα)",
      },
      layout: "list",
      items: [
        {
          title: { en: "Old Perithia: the 'ghost-village' living again", el: "Παλιά Περίθεια: το «χωριό-φάντασμα» που ξαναζεί" },
          text: {
            en: "A village of Venetian origin that started coming back to life recently. Secret: Have lunch there at noon—it feels like entering another era.",
            el: "Η Old Perithia παρουσιάζεται ως χωριό βενετσιάνικης προέλευσης. Μυστικό: πήγαινε μεσημέρι για φαγητό σε ταβερνάκι—η αίσθηση είναι σαν να μπήκες σε άλλη εποχή.",
          },
        },
        {
          title: { en: "Afionas (and descent to Porto Timoni)", el: "Αφιώνας (και κάθοδος για Πόρτο Τιμόνι)" },
          text: {
            en: "Beautiful by itself, but the hidden card is that it serves as the starting point for one of the most iconic walks on the island.",
            el: "Το χωριό είναι από μόνο του όμορφο, αλλά το «κρυφό χαρτί» είναι ότι γίνεται αφετηρία για μια από τις πιο iconic βόλτες/παραλίες του νησιού.",
          },
        },
        {
          title: { en: "Villages around Paleokastritsa & northwest", el: "Χωριά γύρω από Παλαιοκαστρίτσα & βορειοδυτικά" },
          text: {
            en: "Make short stops for views, coffee, and a 'quiet Corfu' away from the main town buzz.",
            el: "Μικρές στάσεις για θέα, καφέ, και μια «ήρεμη Κέρκυρα» μακριά από την πόλη.",
          },
        },
      ],
    },
    {
      title: {
        en: "Food in Corfu: what to definitely try",
        el: "Φαγητό στην Κέρκυρα: τι να δοκιμάσεις οπωσδήποτε",
      },
      layout: "list",
      alert: {
        en: "Secret: In town, don't just stay on the main streets. Go 1-2 alleys deep: you eat better, quieter, and you don't 'pay for the view' forcedly.",
        el: "Μικρό μυστικό: Στην πόλη, μη σταθείς μόνο στα πολύ κεντρικά. Μπες 1–2 καντούνια πιο μέσα: συχνά τρως καλύτερα και πιο ήσυχα, χωρίς να «πληρώνεις» τη θέα με το ζόρι.",
      },
      items: [
        {
          title: { en: "Pastitsada", el: "Παστιτσάδα" },
          text: {
            en: "A signature dish, usually with rooster or beef in a rich sauce.",
            el: "Signature πιάτο, συνήθως με κόκορα/μοσχάρι σε πλούσια σάλτσα.",
          },
        },
        {
          title: { en: "Sofrito", el: "Σοφρίτο" },
          text: {
            en: "More 'elegant' profile, with garlic and wine (Venetian influence).",
            el: "Πιο «κομψό», με σκόρδο/κρασί (βενετσιάνικη επιρροή).",
          },
        },
        {
          title: { en: "Bourdeto", el: "Μπουρδέτο" },
          text: {
            en: "Fish soup or fish stew made with red pepper—spicy and full of sea flavor.",
            el: "Ψαρόσουπα/στιφάδο ψαριού με κόκκινο πιπέρι—πικάντικο και θαλασσινό.",
          },
        },
        {
          title: { en: "Kumquat", el: "Κουμκουάτ" },
          text: {
            en: "Liqueur, spoon sweet, jam: the 'gift' you will take back home.",
            el: "Λικέρ, γλυκό του κουταλιού, μαρμελάδα: το «δώρο» που θα πάρεις πίσω σπίτι.",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical tips (that truly untie hands)",
        el: "Πρακτικά tips (που όντως θα σου λύσουν τα χέρια)",
      },
      layout: "list",
      items: [
        {
          title: { en: "Where to stay (with logic)", el: "Πού να μείνεις (με λογική, όχι με “όπου να ’ναι”)" },
          text: {
            en: "Town: for walks, food, UNESCO vibe. West/Central (Glyfada): balance of town+beach. North: resorts/beaches. South: open spaces, less buzz.",
            el: "Πόλη Κέρκυρας: αν θες βόλτες, φαγητό, μουσεία, και να ζεις το UNESCO vibe. Δυτικά/κεντρικά: καλή ισορροπία πόλης + παραλίας. Βόρεια: παραλίες/resort. Νότια: ανοιχτές παραλίες.",
          },
        },
        {
          title: { en: "Getting around (the time-saving tip)", el: "Μετακινήσεις στο νησί (το tip που σώζει χρόνο)" },
          text: {
            en: "Corfu has two bus worlds: Green Buses (intercity) and City Bus (urban). Secret: A car is great for freedom, but if you stay in town, you can do a lot just by smart bus routing.",
            el: "Υπάρχουν Green Buses (αποστάσεις/χωριά) και City Bus (πόλη). Μυστικό: Αν μείνεις πόλη και δουλέψεις σωστά το bus, μπορείς να κάνεις πολλά χωρίς να οδηγάς.",
          },
        },
        {
          title: { en: "For Easter / Peak times", el: "Για Πάσχα/αιχμές" },
          text: {
            en: "Easter specific events draw huge crowds. Book accommodation early and pick your standing spot well in advance.",
            el: "Αν πας Πάσχα, οι Μπότηδες μαζεύουν κόσμο. Μυστικό: κλείσε διαμονή νωρίτερα και βρες από πριν το σημείο που θες να σταθείς.",
          },
        },
        {
          title: { en: "Attraction Hours", el: "Για αξιοθέατα με ωράρια" },
          text: {
            en: "Ministry sites change hours seasonally. Check the official Odysseus system before making the trip up to a castle.",
            el: "Κάστρα/χώροι του ΥΠΠΟ (πχ. Αγγελόκαστρο) έχουν ωράρια που αλλάζουν. Πριν ξεκινήσεις, τσέκαρε τα επίσημα ωράρια να μην κάνεις άδικη διαδρομή.",
          },
        },
      ],
    },
    {
      title: {
        en: "FAQ",
        el: "FAQ (Συχνές Ερωτήσεις)",
      },
      layout: "faq",
      items: [
        {
          title: {
            en: "How many days do I need for Corfu?",
            el: "Πόσες μέρες χρειάζομαι για Κέρκυρα;",
          },
          text: {
            en: "Ideally 5-7 to do the town, 3-4 beaches, and a few villages. In 3 days: town + one west beach + Paleokastritsa or Kanoni.",
            el: "Ιδανικά 5–7 για να κάνεις πόλη + 3–4 διαφορετικές παραλίες + 1–2 χωριά/κάστρα. Σε 3 μέρες, κάνε πόλη/UNESCO + μία δυτική παραλία + Παλαιοκαστρίτσα ή Κανόνι.",
          },
        },
        {
          title: {
            en: "Is Corfu for families?",
            el: "Είναι η Κέρκυρα για οικογένειες;",
          },
          text: {
            en: "Yes, definitely, especially if you pick a base with calm beaches and easy access (e.g. areas with long sandy stretches).",
            el: "Ναι, ειδικά αν επιλέξεις βάση με ήρεμες παραλίες και άνετη πρόσβαση (π.χ. περιοχές με μεγάλη αμμουδιά).",
          },
        },
        {
          title: {
            en: "Do I need a car?",
            el: "Χρειάζομαι αυτοκίνητο;",
          },
          text: {
            en: "Not strictly. Green Buses and City Bus are solid, but a car gives access to hidden corners and saves time.",
            el: "Όχι υποχρεωτικά. Με Green Buses και City Bus μπορείς να κινηθείς πολύ καλά, αλλά το αυτοκίνητο δίνει πρόσβαση σε πιο «κρυφά» σημεία και ελευθερία χρόνου.",
          },
        },
        {
          title: {
            en: "What's the number 1 attraction?",
            el: "Ποιο είναι το νούμερο 1 αξιοθέατο;",
          },
          text: {
            en: "If you have to pick one: the UNESCO Old Town with the Fortresses and Spianada/Liston.",
            el: "Αν πρέπει να διαλέξεις ένα: η Παλιά Πόλη UNESCO με τα φρούρια και τη Σπιανάδα/Λιστόν.",
          },
        },
        {
          title: {
            en: "What if I don't want the crowds?",
            el: "Τι να κάνω αν δεν έχω διάθεση για πολύ κόσμο;",
          },
          text: {
            en: "Choose May-June or Sept-Oct, start early, and include walks in nature or small villages in your itinerary.",
            el: "Διάλεξε Μάιο–Ιούνιο ή Σεπτέμβριο–Οκτώβριο, ξεκίνα νωρίς τη μέρα, και βάλε στο πρόγραμμα χωριά/πεζοπορίες.",
          },
        },
      ],
    },
  ],
  "nayplio-odigos-taxidiou": [
    {
      title: {
        en: "Why visit Nafplio",
        el: "Γιατί να επισκεφθεί κάποιος το Ναύπλιο",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "It is an 'atmosphere capital' all year round",
            el: "Είναι «πρωτεύουσα» ατμόσφαιρας όλο τον χρόνο",
          },
          text: {
            en: "The city has continuous traffic throughout the year. It is not 'dead' off-season: coffee, food, walks, museums, life.",
            el: "Ο ίδιος ο Δήμος Ναυπλιέων τονίζει ότι η πόλη έχει συνεχή κίνηση όλη τη διάρκεια του χρόνου. Αυτό σημαίνει ότι δεν είναι «νεκρό» εκτός σεζόν: καφέ, φαγητό, βόλτα, μουσεία, ζωή.",
          },
        },
        {
          title: {
            en: "It features landmark-castles that are not just backgrounds",
            el: "Έχει κάστρα-σύμβολα που δεν είναι απλώς φόντο",
          },
          text: {
            en: "Palamidi, Bourtzi, and Akronafplia are not just 'nice photos'. They are pieces of a castle-city built in layers over centuries.",
            el: "Το Παλαμήδι, το Μπούρτζι και η Ακροναυπλία δεν είναι «ωραίες φωτογραφίες». Είναι κομμάτια μιας καστροπολιτείας που χτίστηκε σε στρώσεις αιώνων.",
          },
        },
        {
          title: {
            en: "It's the perfect base for top Greek highlights",
            el: "Είναι “base” για μερικά από τα μεγαλύτερα highlights της Ελλάδας",
          },
          text: {
            en: "In a short distance you can find Mycenae, Tiryns (UNESCO), and the Sanctuary of Asklepios in Epidaurus (UNESCO). You combine a city break with a cultural trip.",
            el: "Σε μικρή απόσταση βρίσκονται οι Μυκήνες & Τίρυνθα (UNESCO) και το Ιερό του Ασκληπιού στην Επίδαυρο (UNESCO). Με λίγα λόγια: κάνεις city break που γίνεται και πολιτιστικό ταξίδι.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time for Nafplio",
        el: "Καλύτερη εποχή για Ναύπλιο",
      },
      layout: "list",
      alert: {
        en: "Secret: If you want 'Nafplio for photos', go on a weekday in spring or late September. You'll walk the Old Town without doing a slalom.",
        el: "Μικρό μυστικό εποχής: Αν θες «Ναύπλιο για φωτογραφίες», πήγαινε καθημερινή, άνοιξη ή τέλη Σεπτεμβρίου. Θα περπατάς στην Παλιά Πόλη χωρίς να κάνεις… σλάλομ.",
      },
      items: [
        {
          title: { en: "Spring & Autumn", el: "Άνοιξη & φθινόπωρο" },
          text: {
            en: "Mild temperatures, blooming landscapes, fewer crowds (ideal for castles, walks, and short excursions).",
            el: "Ήπιες θερμοκρασίες, ανθισμένα τοπία, λιγότερος κόσμος (ιδανικά για κάστρα, βόλτες, κοντινές εκδρομές).",
          },
        },
        {
          title: { en: "June & September", el: "Ιούνιος & Σεπτέμβριος" },
          text: {
            en: "The best compromise for swimming and town vibe, with a more relaxed atmosphere than July-August.",
            el: "Ο πιο ωραίος συμβιβασμός για μπάνιο και πόλη, με πιο χαλαρή ατμόσφαιρα από Ιούλιο–Αύγουστο.",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get to Nafplio",
        el: "Πώς φτάνεις στο Ναύπλιο",
      },
      layout: "grid",
      alert: {
        en: "Secret: If weekend bound, start early. Not because you won't 'make it', but because Nafplio is won when lived before the Old Town gets full.",
        el: "Μικρό μυστικό πρόσβασης: Αν πας Σ/Κ, ξεκίνα νωρίς. Όχι γιατί “δεν θα προλάβεις”, αλλά γιατί το Ναύπλιο κερδίζεται όταν το ζεις πριν γεμίσει η Παλιά Πόλη.",
      },
      items: [
        {
          title: { en: "By car", el: "Με αυτοκίνητο" },
          text: {
            en: "From Athens, the drive is about 2 hours (via Olympia Odos, exit for Nemea towards Nafplio).",
            el: "Από Αθήνα, η διαδρομή είναι περίπου 2 ώρες (μέσω Ολυμπίας Οδού, έξοδος για Νεμέα προς Ναύπλιο).",
          },
        },
        {
          title: { en: "By bus (KTEL)", el: "Με ΚΤΕΛ (εύκολο και συχνό)" },
          text: {
            en: "Argolis KTEL runs frequent daily routes. The Athens-Nafplio trip typically takes about 2 hours and 10 minutes.",
            el: "Το ΚΤΕΛ Αργολίδας δίνει 2 ώρες & 10 λεπτά για Αθήνα–Ναύπλιο. Υπάρχουν πολλά δρομολόγια μέσα στην ημέρα.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions & experiences",
        el: "Top αξιοθέατα & εμπειρίες (αυτά που αξίζει όντως να κάνεις)",
      },
      layout: "numbered",
      items: [
        {
          title: { en: "Old Town & Syntagma Square", el: "Παλιά Πόλη & Πλατεία Συντάγματος: το “σαλόνι” του Ναυπλίου" },
          text: {
            en: "The center of gravity featuring significant buildings like the Venetian Fleet Warehouse. Secret: Take two walks—one in the morning (clear light) and one at night (vibe/food).",
            el: "Η Πλατεία Συντάγματος είναι το κέντρο βάρους. Μυστικό: Κάνε 2 βόλτες: μία πρωί (καθαρό φως, ήσυχες γωνίες) και μία βράδυ (ατμόσφαιρα, φαγητό, κόσμο).",
          },
        },
        {
          title: { en: "Archaeological Museum", el: "Αρχαιολογικό Μουσείο Ναυπλίου: μικρό “κλειδί” για όλη την Αργολίδα" },
          text: {
            en: "Housed in a 1713 Venetian building. Secret: Go before visiting Mycenae/Tiryns—you will understand the sites much better.",
            el: "Στεγάζεται σε κτήριο της Ενετοκρατίας (1713). Μυστικό: Πήγαινε πριν από Μυκήνες/Τίρυνθα ή μετά—θα καταλάβεις πολύ καλύτερα όσα βλέπεις στους χώρους.",
          },
        },
        {
          title: { en: "Palamidi Castle", el: "Παλαμήδι: το κάστρο-τεστ αντοχής (με ανταμοιβή θέας)" },
          text: {
            en: "A Venetian fortress from the early 18th century. Secret: If you don't want the ~857 steps, drive up and save the steps for the descent.",
            el: "Ενετικό οχυρωματικό έργο αρχών του 18ου αιώνα (εδώ και η φυλακή του Κολοκοτρώνη). Μικρό μυστικό: Τα «999 σκαλοπάτια» είναι μύθος, είναι 857. Αν δεν θες σκαλιά, ανέβα με δρόμο.",
          },
        },
        {
          title: { en: "Bourtzi", el: "Μπούρτζι: το κάστρο-νησί που φύλαγε το λιμάνι με αλυσίδα" },
          text: {
            en: "Fortified in 1471, it used to have a chain blocking enemy ships. Secret: Don't just view it from the shore; take the boat across. The city view is incredible.",
            el: "Οχυρώθηκε το 1471–1472. Μυστικό: Μη το δεις μόνο «απ’ έξω». Έστω και μία φορά, πέρασε απέναντι—η θέα προς την πόλη είναι άλλο έργο.",
          },
        },
        {
          title: { en: "Akronafplia", el: "Ακροναυπλία: η «παλιά» ακρόπολη πάνω από την πόλη" },
          text: {
            en: "The best way to enjoy it is a panoramic walk overlooking the Argolic Gulf, Bourtzi, and the Old Town rooftops.",
            el: "Ο πιο ωραίος τρόπος να την απολαύσεις είναι σαν περίπατο/θέα: κοιτάς από ψηλά τον Αργολικό, το Μπούρτζι και τις στέγες της Παλιάς Πόλης.",
          },
        },
        {
          title: { en: "Arvanitia Promenade", el: "Αρβανιτιά: παραλία + περίπατος που είναι «σήμα κατατεθέν»" },
          text: {
            en: "The beach lies below Palamidi. The 'Arvanitia Round' is the favorite seaside stroll. Secret: Go late afternoon for cinematic lighting.",
            el: "Απλώνεται κάτω από το Παλαμήδι (Γαλάζια Σημαία). Ο «γύρος της Αρβανιτιάς» είναι ο αγαπημένος περίπατος. Μυστικό: Πήγαινε για περπάτημα αργά απόγευμα.",
          },
        },
        {
          title: { en: "Psaromachalas", el: "Ψαρομαχαλάς: η γειτονιά που κρατάει «χαμηλόφωνα» την ιστορία" },
          text: {
            en: "The oldest district of the lower town. Secret: Great for photography—small doors, low houses, shadows, raw material without 'tourist noise'.",
            el: "Από τις πιο παλιές συνοικίες της κάτω πόλης. Μυστικό φωτογραφίας: μικρές πόρτες, χαμηλά σπίτια, σκιές—πολύ υλικό χωρίς να «φωνάζει» τουρισμός.",
          },
        },
        {
          title: { en: "Church of Agios Spyridon", el: "Ναός Αγίου Σπυρίδωνα: το σημείο μιας καθοριστικής στιγμής" },
          text: {
            en: "Here, Ioannis Kapodistrias was assassinated in 1831. Secret: Stand here for 2 minutes without rushing. It gives historical weight to the trip.",
            el: "Εδώ δολοφονήθηκε ο Ιωάννης Καποδίστριας στις 27 Σεπτεμβρίου 1831. Μυστικό: Στάσου 2 λεπτά χωρίς βιασύνη. Δεν βλέπεις απλά μια εκκλησία.",
          },
        },
        {
          title: { en: "Komboloi Museum", el: "Μουσείο Κομπολογιού: το πιο απρόσμενο “Nafplio gem”" },
          text: {
            en: "Presents the whole world around 'worry beads' (komboloi). Secret: Perfect midday break and ideal for a unique gift.",
            el: "Ιδρύθηκε 1998, παρουσιάζει έναν κόσμο γύρω από το κομπολόι. Μυστικό: Τέλειο διάλειμμα το μεσημέρι και ιδανικό για δώρο που δεν είναι “ψυγείο-μαγνήτης”.",
          },
        },
      ],
    },
    {
      title: {
        en: "Beaches, nearby villages & excursions",
        el: "Παραλίες, κοντινά χωριά & μικρές εκδρομές που αξίζουν",
      },
      layout: "list",
      alert: {
        en: "Excursion secret: Don't try to fit it all in a weekend. Nafplio requires 'aimless' walks—these are what you ultimately remember.",
        el: "Μικρό μυστικό εκδρομών: Μην προσπαθήσεις να τα κάνεις όλα σε ένα διήμερο. Το Ναύπλιο θέλει χρόνο για «άσκοπες» βόλτες – αυτές είναι που τελικά θυμάσαι.",
      },
      items: [
        {
          title: { en: "Arvanitia (in town)", el: "Αρβανιτιά (πόλη)" },
          text: {
            en: "Small, refreshing, next to the Old Town—ideal for a swim-break amidst walking.",
            el: "Μικρή, δροσερή, δίπλα στην Παλιά Πόλη—ιδανική για «μπάνιο-διάλειμμα» ανάμεσα στις βόλτες.",
          },
        },
        {
          title: { en: "Karathona", el: "Καραθώνα (η «μεγάλη» παραλία)" },
          text: {
            en: "4km from Nafplio, the classic choice for a long sandy stretch. Secret: Go early as 'good spots' fill up quickly.",
            el: "Περίπου 4 χλμ. έξω από το Ναύπλιο, η κλασική επιλογή για άπλα. Μυστικό: Πήγαινε νωρίς για τις πιο ήσυχες γωνιές.",
          },
        },
        {
          title: { en: "Tolo", el: "Τολό (για πιο “νησιώτικο” μπάνιο)" },
          text: {
            en: "About 12km away, practical choice for families with shallow waters and relaxed sea vibes.",
            el: "Περίπου 12 χλμ. από το Ναύπλιο, πολύ πρακτική επιλογή για οικογένειες (ρηχά νερά) και χαλαρή βόλτα.",
          },
        },
        {
          title: { en: "Excursions (Lygourio, Mycenae, Tiryns)", el: "Εκδρομές (Λυγουριό, Μυκήνες, Τίρυνθα)" },
          text: {
            en: "Lygourio is a great food/coffee stop before Epidaurus. Mycenae & Tiryns mean a day full of grand UNESCO history.",
            el: "Λυγουριό: ωραία στάση για φαγητό πριν/μετά την Επίδαυρο. Μυκήνες & Τίρυνθα: για μια μέρα γεμάτη ιστορία (UNESCO).",
          },
        },
      ],
    },
    {
      title: {
        en: "What to eat (and what to take home)",
        el: "Τι να φας στο Ναύπλιο (και τι να πάρεις για το σπίτι)",
      },
      layout: "list",
      alert: {
        en: "Food secret: Best value is often found one alley behind the high streets. Rule: the less seaside view, the more comfortably you eat.",
        el: "Μικρό μυστικό φαγητού: στην Παλιά Πόλη, το καλύτερο «value» συχνά είναι ένα στενό πιο μέσα. Κανόνας: όσο λιγότερο βλέπεις προκυμαία, τόσο πιο άνετα τρως.",
      },
      items: [
        {
          title: { en: "Nafplio Amygdalota", el: "Αναπλιώτικα αμυγδαλωτά" },
          text: {
            en: "The most characteristic sweet and souvenir, visible everywhere in the Old Town.",
            el: "Το πιο χαρακτηριστικό γλυκό-αναμνηστικό (θα το δεις παντού στην Παλιά Πόλη).",
          },
        },
        {
          title: { en: "Gogkes (Local Pasta)", el: "Τοπικά ζυμαρικά / γκόγκες" },
          text: {
            en: "A rich regional pasta tradition, widely known as 'gogkes', featured in local gastronomy.",
            el: "Στην περιοχή αναδεικνύεται η παράδοση στα ζυμαρικά και οι «γκόγκιες» αναφέρονται τακτικά στις συνταγές.",
          },
        },
        {
          title: { en: "Seafood", el: "Θαλασσινά" },
          text: {
            en: "It's logical: you're by the Argolic Gulf, meaning excellent fish, calamari, and octopus options.",
            el: "Λογικό και σωστό—είσαι στον Αργολικό κόλπο, οπότε “παίζει” πολύ ψάρι, καλαμάρι και χταπόδι.",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical Tips",
        el: "Πρακτικά tips (για να το απολαύσεις χωρίς ταλαιπωρία)",
      },
      layout: "list",
      items: [
        {
          title: { en: "Do it on foot / Parking", el: "Περπάτημα / Πάρκινγκ" },
          text: {
            en: "The historical center is made for walking. On weekends, park outside the center to save time and nerves.",
            el: "Το κέντρο είναι φτιαγμένο για περπάτημα. Αν πας Σ/Κ, παρκάρεις πιο άνετα εκτός κέντρου και μπαίνεις με τα πόδια.",
          },
        },
        {
          title: { en: "Palamidi & Bourtzi prep", el: "Παλαμήδι & Μπούρτζι" },
          text: {
            en: "Go to Palamidi early/late in the heat (bring water). For Bourtzi, check operating hours before visiting, especially off-season.",
            el: "Παλαμήδι: αν έχει ζέστη, ανέβα νωρίς ή απόγευμα (κράτα νερό). Μπούρτζι: τσέκαρε επίσημες πληροφορίες λειτουργίας πριν πας.",
          },
        },
        {
          title: { en: "Arvanitia and Vibe", el: "Αρβανιτιά & Local Vibe" },
          text: {
            en: "Bring water shoes for Arvanitia. For local vibe: morning coffee in squares, noon museum, afternoon stroll, night food.",
            el: "Αρβανιτιά: πάρε θαλασσοπαπούτσια. Vibe “νόπιου”: πρωινός καφές σε πλατεία, μεσημέρι μουσείο, απόγευμα περίπατος, βράδυ φαγητό.",
          },
        },
      ],
    },
    {
      title: {
        en: "FAQ",
        el: "FAQ – Συχνές ερωτήσεις",
      },
      layout: "faq",
      items: [
        {
          title: { en: "How many days are needed for Nafplio?", el: "Πόσες μέρες χρειάζονται για το Ναύπλιο;" },
          text: {
            en: "2 days are nice for the town basics. Add 1-2 more if planning Mycenae/Epidaurus or lots of beach days.",
            el: "Για την πόλη και τα βασικά αξιοθέατα, 2 μέρες είναι ωραίες. Αν θες και Μυκήνες/Επίδαυρο/παραλίες, βάλε 3–4.",
          },
        },
        {
          title: { en: "Is it good for families?", el: "Είναι καλό για οικογένειες;" },
          text: {
            en: "Yes: easily walkable, nearby shores like Karathona/Tolo, and many relaxing spots.",
            el: "Ναι: εύκολη πόλη για περπάτημα, κοντινές παραλίες όπως Καραθώνα/Τολό και πολλά «ήρεμα» σημεία.",
          },
        },
        {
          title: { en: "Can I go without a car?", el: "Μπορώ να πάω χωρίς αυτοκίνητο;" },
          text: {
            en: "Yes, KTEL bus from Athens and then simply walk within the city.",
            el: "Ναι: με ΚΤΕΛ από Αθήνα και μετά περπατάς μέσα στην πόλη (όλα είναι κοντά).",
          },
        },
        {
          title: { en: "What's unmissable?", el: "Τι δεν πρέπει να χάσω με τίποτα;" },
          text: {
            en: "Palamidi for views, Syntagma Square stroll, and at least a close look at Bourtzi.",
            el: "Παλαμήδι για θέα/ιστορία, μια βόλτα στην Πλατεία Συντάγματος, και (έστω) μια ματιά στο Μπούρτζι από κοντά.",
          },
        },
        {
          title: { en: "Best time to visit?", el: "Ποια είναι η καλύτερη εποχή;" },
          text: {
            en: "Spring/autumn for touring, June/September for combining city and sea.",
            el: "Άνοιξη/φθινόπωρο για βόλτες και αξιοθέατα, Ιούνιο/Σεπτέμβριο για συνδυασμό πόλης και θάλασσας.",
          },
        },
        {
          title: { en: "Is it worth it as a day trip?", el: "Αξίζει σαν ημερήσια από Αθήνα;" },
          text: {
            en: "Yes, but it's a shame. Nafplio truly shines when you stay overnight and the Old Town transforms in the evening.",
            el: "Γίνεται, αλλά είναι κρίμα. Το Ναύπλιο λάμπει όταν μείνεις έστω μία νύχτα—γιατί το βράδυ η Παλιά Πόλη αλλάζει τελείως.",
          },
        },
      ],
    },
  ],
  nafplio: [
    {
      title: {
        en: "Why visit Nafplio",
        el: "Γιατί να επισκεφθεί κάποιος το Ναύπλιο",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "It is an 'atmosphere capital' all year round",
            el: "Είναι «πρωτεύουσα» ατμόσφαιρας όλο τον χρόνο",
          },
          text: {
            en: "The city has continuous traffic throughout the year. It is not 'dead' off-season: coffee, food, walks, museums, life.",
            el: "Ο ίδιος ο Δήμος Ναυπλιέων τονίζει ότι η πόλη έχει συνεχή κίνηση όλη τη διάρκεια του χρόνου. Αυτό σημαίνει ότι δεν είναι «νεκρό» εκτός σεζόν: καφέ, φαγητό, βόλτα, μουσεία, ζωή.",
          },
        },
        {
          title: {
            en: "It features landmark-castles that are not just backgrounds",
            el: "Έχει κάστρα-σύμβολα που δεν είναι απλώς φόντο",
          },
          text: {
            en: "Palamidi, Bourtzi, and Akronafplia are not just 'nice photos'. They are pieces of a castle-city built in layers over centuries.",
            el: "Το Παλαμήδι, το Μπούρτζι και η Ακροναυπλία δεν είναι «ωραίες φωτογραφίες». Είναι κομμάτια μιας καστροπολιτείας που χτίστηκε σε στρώσεις αιώνων.",
          },
        },
        {
          title: {
            en: "It's the perfect base for top Greek highlights",
            el: "Είναι “base” για μερικά από τα μεγαλύτερα highlights της Ελλάδας",
          },
          text: {
            en: "In a short distance you can find Mycenae, Tiryns (UNESCO), and the Sanctuary of Asklepios in Epidaurus (UNESCO). You combine a city break with a cultural trip.",
            el: "Σε μικρή απόσταση βρίσκονται οι Μυκήνες & Τίρυνθα (UNESCO) και το Ιερό του Ασκληπιού στην Επίδαυρο (UNESCO). Με λίγα λόγια: κάνεις city break που γίνεται και πολιτιστικό ταξίδι.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time for Nafplio",
        el: "Καλύτερη εποχή για Ναύπλιο",
      },
      layout: "list",
      alert: {
        en: "Secret: If you want 'Nafplio for photos', go on a weekday in spring or late September. You'll walk the Old Town without doing a slalom.",
        el: "Μικρό μυστικό εποχής: Αν θες «Ναύπλιο για φωτογραφίες», πήγαινε καθημερινή, άνοιξη ή τέλη Σεπτεμβρίου. Θα περπατάς στην Παλιά Πόλη χωρίς να κάνεις… σλάλομ.",
      },
      items: [
        {
          title: { en: "Spring & Autumn", el: "Άνοιξη & φθινόπωρο" },
          text: {
            en: "Mild temperatures, blooming landscapes, fewer crowds (ideal for castles, walks, and short excursions).",
            el: "Ήπιες θερμοκρασίες, ανθισμένα τοπία, λιγότερος κόσμος (ιδανικά για κάστρα, βόλτες, κοντινές εκδρομές).",
          },
        },
        {
          title: { en: "June & September", el: "Ιούνιος & Σεπτέμβριος" },
          text: {
            en: "The best compromise for swimming and town vibe, with a more relaxed atmosphere than July-August.",
            el: "Ο πιο ωραίος συμβιβασμός για μπάνιο και πόλη, με πιο χαλαρή ατμόσφαιρα από Ιούλιο–Αύγουστο.",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get to Nafplio",
        el: "Πώς φτάνεις στο Ναύπλιο",
      },
      layout: "grid",
      alert: {
        en: "Secret: If weekend bound, start early. Not because you won't 'make it', but because Nafplio is won when lived before the Old Town gets full.",
        el: "Μικρό μυστικό πρόσβασης: Αν πας Σ/Κ, ξεκίνα νωρίς. Όχι γιατί “δεν θα προλάβεις”, αλλά γιατί το Ναύπλιο κερδίζεται όταν το ζεις πριν γεμίσει η Παλιά Πόλη.",
      },
      items: [
        {
          title: { en: "By car", el: "Με αυτοκίνητο" },
          text: {
            en: "From Athens, the drive is about 2 hours (via Olympia Odos, exit for Nemea towards Nafplio).",
            el: "Από Αθήνα, η διαδρομή είναι περίπου 2 ώρες (μέσω Ολυμπίας Οδού, έξοδος για Νεμέα προς Ναύπλιο).",
          },
        },
        {
          title: { en: "By bus (KTEL)", el: "Με ΚΤΕΛ (εύκολο και συχνό)" },
          text: {
            en: "Argolis KTEL runs frequent daily routes. The Athens-Nafplio trip typically takes about 2 hours and 10 minutes.",
            el: "Το ΚΤΕΛ Αργολίδας δίνει 2 ώρες & 10 λεπτά για Αθήνα–Ναύπλιο. Υπάρχουν πολλά δρομολόγια μέσα στην ημέρα.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions & experiences",
        el: "Top αξιοθέατα & εμπειρίες (αυτά που αξίζει όντως να κάνεις)",
      },
      layout: "numbered",
      items: [
        {
          title: { en: "Old Town & Syntagma Square", el: "Παλιά Πόλη & Πλατεία Συντάγματος: το “σαλόνι” του Ναυπλίου" },
          text: {
            en: "The center of gravity featuring significant buildings like the Venetian Fleet Warehouse. Secret: Take two walks—one in the morning (clear light) and one at night (vibe/food).",
            el: "Η Πλατεία Συντάγματος είναι το κέντρο βάρους. Μυστικό: Κάνε 2 βόλτες: μία πρωί (καθαρό φως, ήσυχες γωνίες) και μία βράδυ (ατμόσφαιρα, φαγητό, κόσμο).",
          },
        },
        {
          title: { en: "Archaeological Museum", el: "Αρχαιολογικό Μουσείο Ναυπλίου: μικρό “κλειδί” για όλη την Αργολίδα" },
          text: {
            en: "Housed in a 1713 Venetian building. Secret: Go before visiting Mycenae/Tiryns—you will understand the sites much better.",
            el: "Στεγάζεται σε κτήριο της Ενετοκρατίας (1713). Μυστικό: Πήγαινε πριν από Μυκήνες/Τίρυνθα ή μετά—θα καταλάβεις πολύ καλύτερα όσα βλέπεις στους χώρους.",
          },
        },
        {
          title: { en: "Palamidi Castle", el: "Παλαμήδι: το κάστρο-τεστ αντοχής (με ανταμοιβή θέας)" },
          text: {
            en: "A Venetian fortress from the early 18th century. Secret: If you don't want the ~857 steps, drive up and save the steps for the descent.",
            el: "Ενετικό οχυρωματικό έργο αρχών του 18ου αιώνα (εδώ και η φυλακή του Κολοκοτρώνη). Μικρό μυστικό: Τα «999 σκαλοπάτια» είναι μύθος, είναι 857. Αν δεν θες σκαλιά, ανέβα με δρόμο.",
          },
        },
        {
          title: { en: "Bourtzi", el: "Μπούρτζι: το κάστρο-νησί που φύλαγε το λιμάνι με αλυσίδα" },
          text: {
            en: "Fortified in 1471, it used to have a chain blocking enemy ships. Secret: Don't just view it from the shore; take the boat across. The city view is incredible.",
            el: "Οχυρώθηκε το 1471–1472. Μυστικό: Μη το δεις μόνο «απ' έξω». Έστω και μία φορά, πέρασε απέναντι—η θέα προς την πόλη είναι άλλο έργο.",
          },
        },
        {
          title: { en: "Akronafplia", el: "Ακροναυπλία: η «παλιά» ακρόπολη πάνω από την πόλη" },
          text: {
            en: "The best way to enjoy it is a panoramic walk overlooking the Argolic Gulf, Bourtzi, and the Old Town rooftops.",
            el: "Ο πιο ωραίος τρόπος να την απολαύσεις είναι σαν περίπατο/θέα: κοιτάς από ψηλά τον Αργολικό, το Μπούρτζι και τις στέγες της Παλιάς Πόλης.",
          },
        },
        {
          title: { en: "Arvanitia Promenade", el: "Αρβανιτιά: παραλία + περίπατος που είναι «σήμα κατατεθέν»" },
          text: {
            en: "The beach lies below Palamidi. The 'Arvanitia Round' is the favorite seaside stroll. Secret: Go late afternoon for cinematic lighting.",
            el: "Απλώνεται κάτω από το Παλαμήδι (Γαλάζια Σημαία). Ο «γύρος της Αρβανιτιάς» είναι ο αγαπημένος περίπατος. Μυστικό: Πήγαινε για περπάτημα αργά απόγευμα.",
          },
        },
        {
          title: { en: "Psaromachalas", el: "Ψαρομαχαλάς: η γειτονιά που κρατάει «χαμηλόφωνα» την ιστορία" },
          text: {
            en: "The oldest district of the lower town. Secret: Great for photography—small doors, low houses, shadows, raw material without 'tourist noise'.",
            el: "Από τις πιο παλιές συνοικίες της κάτω πόλης. Μυστικό φωτογραφίας: μικρές πόρτες, χαμηλά σπίτια, σκιές—πολύ υλικό χωρίς να «φωνάζει» τουρισμός.",
          },
        },
        {
          title: { en: "Church of Agios Spyridon", el: "Ναός Αγίου Σπυρίδωνα: το σημείο μιας καθοριστικής στιγμής" },
          text: {
            en: "Here, Ioannis Kapodistrias was assassinated in 1831. Secret: Stand here for 2 minutes without rushing. It gives historical weight to the trip.",
            el: "Εδώ δολοφονήθηκε ο Ιωάννης Καποδίστριας στις 27 Σεπτεμβρίου 1831. Μυστικό: Στάσου 2 λεπτά χωρίς βιασύνη. Δεν βλέπεις απλά μια εκκλησία.",
          },
        },
        {
          title: { en: "Komboloi Museum", el: "Μουσείο Κομπολογιού: το πιο απρόσμενο “Nafplio gem”" },
          text: {
            en: "Presents the whole world around 'worry beads' (komboloi). Secret: Perfect midday break and ideal for a unique gift.",
            el: "Ιδρύθηκε 1998, παρουσιάζει έναν κόσμο γύρω από το κομπολόι. Μυστικό: Τέλειο διάλειμμα το μεσημέρι και ιδανικό για δώρο που δεν είναι “ψυγείο-μαγνήτης”.",
          },
        },
      ],
    },
    {
      title: {
        en: "Beaches, nearby villages & excursions",
        el: "Παραλίες, κοντινά χωριά & μικρές εκδρομές που αξίζουν",
      },
      layout: "list",
      alert: {
        en: "Excursion secret: Don't try to fit it all in a weekend. Nafplio requires 'aimless' walks—these are what you ultimately remember.",
        el: "Μικρό μυστικό εκδρομών: Μην προσπαθήσεις να τα κάνεις όλα σε ένα διήμερο. Το Ναύπλιο θέλει χρόνο για «άσκοπες» βόλτες – αυτές είναι που τελικά θυμάσαι.",
      },
      items: [
        {
          title: { en: "Arvanitia (in town)", el: "Αρβανιτιά (πόλη)" },
          text: {
            en: "Small, refreshing, next to the Old Town—ideal for a swim-break amidst walking.",
            el: "Μικρή, δροσερή, δίπλα στην Παλιά Πόλη—ιδανική για «μπάνιο-διάλειμμα» ανάμεσα στις βόλτες.",
          },
        },
        {
          title: { en: "Karathona", el: "Καραθώνα (η «μεγάλη» παραλία)" },
          text: {
            en: "4km from Nafplio, the classic choice for a long sandy stretch. Secret: Go early as 'good spots' fill up quickly.",
            el: "Περίπου 4 χλμ. έξω από το Ναύπλιο, η κλασική επιλογή για άπλα. Μυστικό: Πήγαινε νωρίς για τις πιο ήσυχες γωνιές.",
          },
        },
        {
          title: { en: "Tolo", el: "Τολό (για πιο “νησιώτικο” μπάνιο)" },
          text: {
            en: "About 12km away, practical choice for families with shallow waters and relaxed sea vibes.",
            el: "Περίπου 12 χλμ. από το Ναύπλιο, πολύ πρακτική επιλογή για οικογένειες (ρηχά νερά) και χαλαρή βόλτα.",
          },
        },
        {
          title: { en: "Mycenae & Tiryns (UNESCO)", el: "Μυκήνες & Τίρυνθα (UNESCO)" },
          text: {
            en: "The most important prehistoric site in Europe and the legendary Mycenae. Secret: Visit the site first, then the museum in Nafplio.",
            el: "Ο σημαντικότερος προϊστορικός χώρος της Ευρώπης. Μυστικό: Πήγαινε πρώτα στον χώρο και μετά στο μουσείο Ναυπλίου.",
          },
        },
        {
          title: { en: "Epidaurus", el: "Επίδαυρος (θέατρο και ιερό)" },
          text: {
            en: "The best-preserved ancient Greek theatre (UNESCO). Secret: Combine with a stop in Lygourio for food.",
            el: "Το καλύτερα διατηρημένο αρχαίο θέατρο (UNESCO). Μυστικό: Συνδύασε με στάση στο Λυγουριό για φαγητό.",
          },
        },
      ],
    },
    {
      title: {
        en: "What to eat (and what to take home)",
        el: "Τι να φας στο Ναύπλιο (και τι να πάρεις για το σπίτι)",
      },
      layout: "list",
      alert: {
        en: "Food secret: Best value is often found one alley behind the high streets. Rule: the less seaside view, the more comfortably you eat.",
        el: "Μικρό μυστικό φαγητού: στην Παλιά Πόλη, το καλύτερο «value» συχνά είναι ένα στενό πιο μέσα. Κανόνας: όσο λιγότερο βλέπεις προκυμαία, τόσο πιο άνετα τρως.",
      },
      items: [
        {
          title: { en: "Nafplio Amygdalota", el: "Αναπλιώτικα αμυγδαλωτά" },
          text: {
            en: "The most characteristic sweet and souvenir, visible everywhere in the Old Town.",
            el: "Το πιο χαρακτηριστικό γλυκό-αναμνηστικό (θα το δεις παντού στην Παλιά Πόλη).",
          },
        },
        {
          title: { en: "Gogkes (Local Pasta)", el: "Τοπικά ζυμαρικά / γκόγκες" },
          text: {
            en: "Handmade pasta with eggs and flour.",
            el: "Χειροποίητα ζυμαρικά με αβγό και αλεύρι.",
          },
        },
        {
          title: { en: "Olive Oil & Olives", el: "Λάδι & ελιές" },
          text: {
            en: "The Argolid region produces excellent olive oil and local table olives.",
            el: "Η Αργολίδα παράγει εξαιρετικό ελαιόλαδο και βρώσιμες ελιές.",
          },
        },
      ],
    },
    {
      title: {
        en: "FAQ — Nafplio essentials",
        el: "FAQ — Χρήσιμες ερωτήσεις για το Ναύπλιο",
      },
      layout: "faq",
      items: [
        {
          title: { en: "How many days do you need in Nafplio?", el: "Πόσες μέρες χρειάζεσαι στο Ναύπλιο;" },
          text: {
            en: "A weekend (2 nights) is the minimum. 3-4 nights allow day trips to Mycenae, Epidaurus, or Hydra.",
            el: "Ένα σαββατοκύριακο (2 διανυκτερεύσεις) είναι το ελάχιστο. 3-4 μέρες επιτρέπουν εκδρομές σε Μυκήνες, Επίδαυρο ή Ύδρα.",
          },
        },
        {
          title: { en: "Is Nafplio good for families?", el: "Είναι το Ναύπλιο κατάλληλο για οικογένειες;" },
          text: {
            en: "Yes — it has easy walking areas, beaches (Arvanitia, Karathona), and family-friendly accommodations.",
            el: "Ναι — έχει εύκολες βόλτες, παραλίες και οικογενειακά καταλύματα.",
          },
        },
        {
          title: { en: "Can you swim in Nafplio?", el: "Μπορείς να κολυμπήσεις στο Ναύπλιο;" },
          text: {
            en: "Yes — Arvanitia Beach is right in town. Karathona and Tolo are a short drive away.",
            el: "Ναι — η Αρβανιτιά είναι μέσα στην πόλη, η Καραθώνα και το Τολό σε κοντινή απόσταση.",
          },
        },
        {
          title: { en: "Best time to visit?", el: "Ποια είναι η καλύτερη εποχή;" },
          text: {
            en: "Spring/autumn for touring, June/September for combining city and sea.",
            el: "Άνοιξη/φθινόπωρο για βόλτες και αξιοθέατα, Ιούνιο/Σεπτέμβριο για συνδυασμό πόλης και θάλασσας.",
          },
        },
        {
          title: { en: "Is it worth it as a day trip?", el: "Αξίζει σαν ημερήσια από Αθήνα;" },
          text: {
            en: "Yes, but it's a shame. Nafplio truly shines when you stay overnight and the Old Town transforms in the evening.",
            el: "Γίνεται, αλλά είναι κρίμα. Το Ναύπλιο λάμπει όταν μείνεις έστω μία νύχτα—γιατί το βράδυ η Παλιά Πόλη αλλάζει τελείως.",
          },
        },
      ],
    },
  ],
  thessaloniki: [
    {
      title: {
        en: "Why visit Thessaloniki",
        el: "Γιατί να επισκεφθείς τη Θεσσαλονίκη",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "Because it's a walking city (and that's not a small thing)",
            el: "Γιατί είναι πόλη-βόλτα (και αυτό δεν είναι μικρό πράγμα)",
          },
          text: {
            en: "Many of the must-see spots are within walking distance: Aristotelous Square, the waterfront, White Tower, Rotunda, Roman Forum, Ladadika... and somewhere in between, there is always time for a 'let's sit here for a bit' stop.",
            el: "Πολλά από τα must είναι σε απόσταση περπατήματος: Πλατεία Αριστοτέλους, παραλία, Λευκός Πύργος, Ροτόντα/Καμάρα, Ρωμαϊκή Αγορά, Λαδάδικα… και κάπου ανάμεσα χωράει πάντα ένα «κάτσε λίγο εδώ».",
          },
        },
        {
          title: {
            en: "Because it has UNESCO monuments without shouting about it",
            el: "Γιατί έχει UNESCO χωρίς να το φωνάζει",
          },
          text: {
            en: "UNESCO isn't 'a point on the map', but a network of monuments scattered within the city. The experience is seeing layers of time coexist naturally.",
            el: "Η UNESCO δεν είναι «ένα σημείο στον χάρτη», αλλά ένα πλέγμα μνημείων διάσπαρτων μέσα στην πόλη. Η εμπειρία είναι να βλέπεις τα στρώματα του χρόνου να συνυπάρχουν φυσικά.",
          },
        },
        {
          title: {
            en: "Because it is a culinary destination",
            el: "Γιατί (ναι) είναι γαστρονομικός προορισμός",
          },
          text: {
            en: "It's often referred to as the 'culinary capital' of Greece, centered around neighborhoods like Ladadika and markets like Modiano and Kapani.",
            el: "Το Discover Greece την αναφέρει συχνά ως «culinary capital» της Ελλάδας, με επίκεντρο γειτονιές όπως τα Λαδάδικα και τις αγορές Μοδιάνο και Καπάνι.",
          },
        },
        {
          title: {
            en: "Because you can do 'city + sea' without going far",
            el: "Γιατί μπορείς να κάνεις “πόλη + θάλασσα” χωρίς να φύγεις μακριά",
          },
          text: {
            en: "In just 20–30 km from the center you have beaches for swimming and sunset (Peraia, Agia Triada, Epanomi). In summer, there is also a 'water bus' linking the city to the beach spots.",
            el: "Σε 20–30 χλμ από το κέντρο έχεις παραλίες για μπάνιο και ηλιοβασίλεμα (Περαία, Αγία Τριάδα, Επανομή), ενώ το καλοκαίρι υπάρχει και θαλάσσια σύνδεση (water bus) προς Περαία/Ν. Επιβάτες/Αγ. Τριάδα.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time for Thessaloniki",
        el: "Καλύτερη εποχή για να πας",
      },
      layout: "list",
      alert: {
        en: "Secret: If you want both major events and comfortable walks, aim for September–October: you get TIF, Dimitria, and an intense cultural vibe without the summer heat.",
        el: "Μικρό μυστικό εποχής: Αν θες και εκδηλώσεις και άνετη βόλτα, βάλε στόχο Σεπτέμβριο–Οκτώβριο: έχεις ΔΕΘ, Δημήτρια και συχνά έντονο πολιτιστικό πρόγραμμα, χωρίς το καλοκαιρινό ζόρι.",
      },
      items: [
        {
          title: { en: "Spring (April–June)", el: "Άνοιξη (Απρίλιος–Ιούνιος)" },
          text: {
            en: "Ideal weather for walking, shopping, and taking a stroll in the Upper Town without melting in the heat.",
            el: "Ιδανικός καιρός για περπάτημα, αγορές και Άνω Πόλη χωρίς να «λιώνεις».",
          },
        },
        {
          title: { en: "Autumn (September–November)", el: "Φθινόπωρο (Σεπτέμβριος–Νοέμβριος)" },
          text: {
            en: "Mild temperatures, beautiful light, and massive cultural events that make the city ramp up.",
            el: "Ήπιες θερμοκρασίες, ωραίο φως, και τα μεγάλα πολιτιστικά events κάνουν την πόλη να «ανεβάζει στροφές».",
          },
        },
        {
          title: { en: "Important Events (Date-specific)", el: "Date-specific highlights (που αξίζουν)" },
          text: {
            en: "Thessaloniki International Fair (Sept), Dimitria (Oct), Film Festival (Nov), Documentary Fest (March), International Book Fair (May).",
            el: "ΔΕΘ (Σεπτέμβριος), Δημήτρια (Οκτώβριος), Φεστιβάλ Κινηματογράφου (Νοέμβριος), Φεστιβάλ Ντοκιμαντέρ (Μάρτιος), Διεθνής Έκθεση Βιβλίου (Μάιος).",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get to Thessaloniki",
        el: "Πώς φτάνεις στη Θεσσαλονίκη",
      },
      layout: "grid",
      items: [
        {
          title: { en: "By plane", el: "Με αεροπλάνο" },
          text: {
            en: "Thessaloniki Airport 'Makedonia' (SKG). Buses 1X/1N go to the center, 79 to IKEA, and 2X to the Metro 'Nea Elvetia' station.",
            el: "Thessaloniki Airport «Makedonia» (SKG). Σε εξυπηρετούν γραμμές λεωφορείου όπως 1X/1N (κέντρο–ΚΤΕΛ), 79 (προς IKEA) και 2X (προς μετρό «Νέα Ελβετία»).",
          },
        },
        {
          title: { en: "By train", el: "Με τρένο" },
          text: {
            en: "Direct trains between Athens and Thessaloniki taking roughly 4 hours and 53 minutes on average.",
            el: "Απευθείας δρομολόγια στον άξονα Αθήνα–Θεσσαλονίκη, με αναφερόμενο συνολικό χρόνο διαδρομής γύρω στις 4 ώρες και 53 λεπτά.",
          },
        },
        {
          title: { en: "By bus (KTEL)", el: "Με ΚΤΕΛ" },
          text: {
            en: "Frequent routes connecting KTEL Thessaloniki to Athens, Piraeus, and other major regions.",
            el: "Συχνά δρομολόγια (ΚΤΕΛ) με Αθήνα και Πειραιά, αλλά και άλλες πόλεις της Μακεδονίας.",
          },
        },
        {
          title: { en: "By car", el: "Με αυτοκίνητο" },
          text: {
            en: "Road access is very easy and makes it practical for a city break paired with excursions (Halkidiki/Olympus).",
            el: "Η οδική πρόσβαση είναι εύκολη και πρακτική για city break συνδυαστικά με αποδράσεις (Χαλκιδική/Βεργίνα/Όλυμπο).",
          },
        },
      ],
    },
    {
      title: {
        en: "Getting around the city",
        el: "Μετακινήσεις μέσα στην πόλη (για να μην χάνεις χρόνο)",
      },
      layout: "list",
      alert: {
        en: "Secret: Take the 'Karavaki' (Water bus) across the Thermaic Gulf. It's like a 'sunset in motion'. Walk the waterfront, take the boat to Peraia for fish, and return by night.",
        el: "Μυστικό στο «Karavaki» του Θερμαϊκού: Κάν’ το σαν «ηλιοβασίλεμα σε κίνηση» — βόλτα παραλία, karavaki προς Περαία για ψάρι, επιστροφή βράδυ.",
      },
      items: [
        {
          title: { en: "On foot", el: "Με τα πόδια" },
          text: {
            en: "The center and the vast coastal axis are practically 'made' for walking.",
            el: "Το κέντρο και ο παραλιακός άξονας είναι «φτιαγμένα» για περπάτημα.",
          },
        },
        {
          title: { en: "Metro", el: "Μετρό Θεσσαλονίκης" },
          text: {
            en: "The main line launched on Nov 30, 2024, altering how you move quickly between neighborhoods.",
            el: "Το βασικό έργο τέθηκε σε λειτουργία στις 30/11/2024 (μαζί με επεκτάσεις που έπονται) αλλάζοντας γρήγορα τις αποστάσεις.",
          },
        },
        {
          title: { en: "Bus", el: "Με λεωφορείο (ΟΑΣΘ)" },
          text: {
            en: "OASTH has a very handy 'Cultural Line' that starts from the White Tower and gives you a 50min historical loop.",
            el: "Ο ΟΑΣΘ διαθέτει και «Cultural Line» (πολιτιστική γραμμή) που ξεκινά από Λευκό Πύργο και κυκλώνει τα σημεία σε 50 λεπτά περίπου.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions & experiences",
        el: "Top αξιοθέατα και εμπειρίες (τα must + τα “μικρά μυστικά”)",
      },
      layout: "numbered",
      items: [
        {
          title: { en: "White Tower", el: "Λευκός Πύργος: ξεκίνα από το σύμβολο" },
          text: {
            en: "Start from the ultimate symbol. Inside there is a museum showcasing the city's history. Secret: Go up early before it fills up, then walk the promenade.",
            el: "Μέσα λειτουργεί μουσείο για την ιστορία της πόλης μέχρι το 1922. Μυστικό: Ανέβα νωρίς (πριν φουλάρει). Μετά πάρε τον περίπατο προς Νέα Παραλία.",
          },
        },
        {
          title: { en: "New Waterfront & 'Umbrellas'", el: "Νέα Παραλία + “Ομπρέλες” Ζογγολόπουλου" },
          text: {
            en: "The classic photo spot. Secret: Go just before sunset. The light in the Thermaic Gulf makes everything look cinematic.",
            el: "Το πιο κλασικό φωτο-ραντεβού (ύψους ~13 μ.). Μυστικό: πήγαινε λίγο πριν δύσει. Το φως στον Θερμαϊκό κάνει τα πάντα πιο «κινηματογραφικά».",
          },
        },
        {
          title: { en: "Aristotelous Square", el: "Πλατεία Αριστοτέλους: η πιο “ευρωπαϊκή” πλατεία" },
          text: {
            en: "Designed by Ernest Hébrard after the 1917 fire. Secret: Have your morning coffee here, the square changes character entirely throughout the day.",
            el: "Σχεδιάστηκε από τον Ernest Hébrard μετά την πυρκαγιά του 1917. Μυστικό: πιες καφέ πρωί εδώ (ή νωρίς βράδυ) — η πλατεία αλλάζει χαρακτήρα.",
          },
        },
        {
          title: { en: "Rotunda & Kamara", el: "Ροτόντα & Καμάρα: ρωμαϊκό “wow” σε 5 λεπτά" },
          text: {
            en: "Monuments built by Galerius around 306 AD. Secret: Do a 'short Roman walk' at night: Kamara → Rotunda → Navarinou → drinks in the center.",
            el: "Από τα χρόνια του Γαλέριου γύρω στο 306 μ.Χ. Μυστικό: Κάνε το βράδυ μια «μικρή ρωμαϊκή βόλτα»: Καμάρα → Ροτόντα → Ναβαρίνου (και μετά ποτό).",
          },
        },
        {
          title: { en: "Roman Forum", el: "Ρωμαϊκή Αγορά: η “ήσυχη” ιστορία στο κέντρο" },
          text: {
            en: "The administrative center of ancient Thessaloniki. Secret: Sit on the steps of the Odeon and pause. It naturally isolates the city's noise.",
            el: "Το διοικητικό κέντρο της αρχαίας πόλης. Μυστικό: ανέβα στα καθίσματα του Ωδείου και κάνε ένα μικρό pause. Είναι από τα σημεία που «κόβουν» τον θόρυβο.",
          },
        },
        {
          title: { en: "Byzantine UNESCO Monuments", el: "Βυζαντινή Θεσσαλονίκη UNESCO (το μεγάλο κεφάλαιο)" },
          text: {
            en: "Includes Agios Dimitrios, Agia Sofia, and more. Secret: Don't treat them like a checklist. Pick 2-3 and feel their weight.",
            el: "Περιλαμβάνει τείχη, Ροτόντα, Άγιο Δημήτριο, Αγία Σοφία κ.ά. Μυστικό: Μη τα «καταναλώσεις» σαν checklist. Διάλεξε 2–3 και άφησε χρόνο να τα νιώσεις.",
          },
        },
        {
          title: { en: "Ano Poli (Upper Town)", el: "Άνω Πόλη: θέα που σε σταματάει" },
          text: {
            en: "The antidote to running around the modern center. Secret: Go for sunset, enjoy the view, and slowly walk your way down making stops.",
            el: "Το αντίδοτο στο «τρέχω στο κέντρο»: πιο ήσυχη, πιο ατμοσφαιρική. Μυστικό: πήγαινε για sunset από ψηλά (και μετά κατέβα σιγά-σιγά με στάσεις).",
          },
        },
        {
          title: { en: "Eptapyrgio (Yedi Kule)", el: "Επταπύργιο (Γεντί Κουλέ): σκοτεινός ρομαντισμός" },
          text: {
            en: "A Byzantine/Ottoman fortress that operated as a prison until 1989. Secret: Go on a clear-sky day for magnificent background views.",
            el: "Βυζαντινό/οθωμανικό φρούριο που λειτούργησε ως φυλακή μέχρι το 1989. Μυστικό: πήγαινε μέρα με καθαρή ατμόσφαιρα. Η θέα στο βάθος κερδίζει.",
          },
        },
        {
          title: { en: "Top Museums", el: "Μουσεία που αξίζουν" },
          text: {
            en: "Archaeological Museum, Museum of Byzantine Culture, Jewish Museum, MOMus. Great combined ticketing available.",
            el: "Αρχαιολογικό, Μουσείο Βυζαντινού Πολιτισμού, Εβραϊκό Μουσείο και MOMus. Μυστικό: Υπάρχει συχνά ενιαίο πακέτο εισιτηρίου που συνδυάζει τα μεγάλα υπουργικά μουσεία.",
          },
        },
        {
          title: { en: "Food Markets (Kapani, Modiano)", el: "Αγορές & γειτονιές φαγητού" },
          text: {
            en: "The most authentic Thessaloniki experience. Secret: Do Kapani market in the morning for the raw buzz, and Ladadika in the evening for meze.",
            el: "Καπάνι, Μοδιάνο, Λαδάδικα. Μυστικό: πήγαινε Καπάνι πρωί (για μυρωδιές/προνόμια) και Λαδάδικα βράδυ (για μεζέ/ποτό). Η ίδια πόλη σε δύο ταχύτητες.",
          },
        },
      ],
    },
    {
      title: {
        en: "Beaches & nearby getaways",
        el: "Παραλίες κοντά στη Θεσσαλονίκη (για μπάνιο χωρίς ταξίδι)",
      },
      layout: "list",
      alert: {
        en: "Secret for Epanomi: If it's windy, it is a paradise for those who like wild seas and less 'catwalk' crowds.",
        el: "Μυστικό Επανομής: αν φυσάει, εδώ είναι παράδεισος για όσους αγαπούν πιο «άγρια» θάλασσα (και συχνά λιγότερο «πασαρέλα»).",
      },
      items: [
        {
          title: { en: "Peraia", el: "Περαία" },
          text: {
            en: "22 km away, classic sandy stretch. Perfect for late afternoon seafood and returning right after.",
            el: "Δημοφιλής λόγω μικρής απόστασης (22 χλμ), με σχεδόν 2 χλμ αμμουδιάς και θέα ηλιοβασίλεμα.",
          },
        },
        {
          title: { en: "Neoi Epivates & Agia Triada", el: "Νέοι Επιβάτες & Αγία Τριάδα" },
          text: {
            en: "About 20 km from the center. Quick escape and easy to connect along the coastline.",
            el: "Απέχουν περίπου 20 χλμ από το κέντρο και αποτελούν ιδανική, γρήγορη επιλογή για απόδραση.",
          },
        },
        {
          title: { en: "Epanomi (Potamos)", el: "Επανομή (Ποταμός / ναυάγιο)" },
          text: {
            en: "An impressive beach with a shipwreck and dunes. It has two sides: one calm towards Thermaikos, one wild towards Halkidiki.",
            el: "Ιδιαίτερη παραλία με «δύο πρόσωπα» (ήρεμη πλευρά vs ανοιχτή). Αναφέρεται με αμμοθίνες και το διάσημο ναυάγιο.",
          },
        },
        {
          title: { en: "Halkidiki (Day trip)", el: "Θες “κανονική” θάλασσα τύπου καρτ ποστάλ;" },
          text: {
            en: "If you want postcard beaches, take a day trip to Halkidiki. It is the ultimate getaway for crystal waters.",
            el: "Τότε κάνε ημερήσια στη Χαλκιδική. Είναι το κορυφαίο getaway για κρυστάλλινα νερά.",
          },
        },
      ],
    },
    {
      title: {
        en: "What to eat in Thessaloniki",
        el: "Τι να φας στη Θεσσαλονίκη",
      },
      layout: "list",
      items: [
        {
          title: { en: "Koulouri & bougatsa", el: "Koulouri & bougatsa" },
          text: {
            en: "The morning habit and foodie signature of the city.",
            el: "Το απόλυτο πρωινό τελετουργικό και foodie signature της πόλης (ψάξε την αυθεντική μπουγάτσα με το χειροποίητο φύλλο).",
          },
        },
        {
          title: { en: "Trigona Panoramatos", el: "Γλυκό-υπογραφή: “τρίγωνα Πανοράματος”" },
          text: {
            en: "A legendary local pastry. Secret: Grab them to-go for a seaside walk.",
            el: "Ο θεσσαλονικιώτικος μύθος. Μυστικό: πάρε τα για «βόλτα παραλία» (είναι γλυκό που ταιριάζει σε περπάτημα).",
          },
        },
        {
          title: { en: "Market Foodie Tour", el: "Η εμπειρία της αγοράς (foodie tour)" },
          text: {
            en: "The holy trinity: Kapani → Modiano → Athonos. Conclude with tsipouro and meze.",
            el: "Το τρίπτυχο: Καπάνι → Μοδιάνο → Αθώνου και κλείσε με τσιπουράκι/μεζέ. Είναι η γαστρονομική καρδιά της πόλης.",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical Tips",
        el: "Πρακτικά tips",
      },
      layout: "list",
      items: [
        {
          title: { en: "Where to stay & timing", el: "Πού να μείνεις & timing" },
          text: {
            en: "Stay central if you have 1-3 days. Avoid walking long stretches during midday heat in July.",
            el: "Μείνε κέντρο για 1–3 μέρες. Απόφυγε τις μεγάλες βόλτες στη ζέστη του Ιουλίου (βάλε μουσεία μεσημέρι, παραλία απόγευμα).",
          },
        },
        {
          title: { en: "Sunset point", el: "Άνω Πόλη" },
          text: {
            en: "Go to Ano Poli for sunset. It is arguably the best free attraction in the city.",
            el: "Ανέβα στην Άνω Πόλη την ώρα του ηλιοβασιλέματος. Είναι το πιο δυνατό «δωρεάν αξιοθέατο».",
          },
        },
        {
          title: { en: "Events booking", el: "Events" },
          text: {
            en: "If you align your trip with the TIF or Dimitria festivals, book your stay well early.",
            el: "Αν συμπέσεις με ΔΕΘ ή Δημήτρια, κλείσε νωρίς διαμονή, διότι η πόλη γεμίζει.",
          },
        },
      ],
    },
    {
      title: {
        en: "FAQ",
        el: "FAQ – Συχνές ερωτήσεις",
      },
      layout: "faq",
      items: [
        {
          title: { en: "How many days are needed in Thessaloniki?", el: "Πόσες μέρες χρειάζονται για τη Θεσσαλονίκη;" },
          text: {
            en: "2 days for the main center. 3-4 days to include the Upper Town, museums, and a quick beach run.",
            el: "2 μέρες: κέντρο, παραλία, Καμάρα, Λαδάδικα. 3–4 μέρες: προσθέτεις Άνω Πόλη, μουσεία, και μια «θάλασσα».",
          },
        },
        {
          title: { en: "When to avoid crowds but enjoy good walks?", el: "Πότε είναι καλύτερα για βόλτα χωρίς υπερβολικό κόσμο;" },
          text: {
            en: "Spring and autumn, especially April-June and September-November.",
            el: "Άνοιξη και φθινόπωρο, ειδικά Απρίλιο–Ιούνιο και Σεπτέμβριο–Νοέμβριο.",
          },
        },
        {
          title: { en: "Airport to center cheaply?", el: "Πώς πάω από αεροδρόμιο στο κέντρο οικονομικά;" },
          text: {
            en: "Via the main bus lines like 1X and 1N listed on the airport site.",
            el: "Με τις γραμμές λεωφορείων που εξυπηρετούν (1X/1N/2X κ.ά.).",
          },
        },
        {
          title: { en: "Can we swim while staying 'in the city'?", el: "Αξίζει να κάνω μπάνιο «στην πόλη»;" },
          text: {
            en: "Yes, for a quick fix Peraia and Agia Triada are very popular choices just outside the center.",
            el: "Ναι, για γρήγορη λύση. Η Περαία και η Αγία Τριάδα είναι καθιερωμένες επιλογές.",
          },
        },
        {
          title: { en: "What's the #1 attraction?", el: "Ποιο είναι το #1 αξιοθέατο;" },
          text: {
            en: "The White Tower paired with a walk along the waterfront.",
            el: "Αν πρέπει να διαλέξεις ένα: Λευκός Πύργος + βόλτα παραλία.",
          },
        },
        {
          title: { en: "Historical day trip idea?", el: "Θέλω day trip με ιστορία – τι να κάνω;" },
          text: {
            en: "Vergina (Aigai), the ancient royal capital of Macedon and a UNESCO site.",
            el: "Η Βεργίνα (Αιγές) απέχει λίγο και αποτελεί παγκόσμιο μνημείο UNESCO.",
          },
        },
      ],
    },
  ],
  kefalonia: [
    {
      title: {
        en: "Why visit Kefalonia",
        el: "Γιατί να επισκεφθείς την Κεφαλονιά",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "Mediterranean trademark beaches",
            el: "Για παραλίες-σήμα κατατεθέν της Μεσογείου",
          },
          text: {
            en: "Myrtos is the most characteristic example: an almost semicircular bay, with stunning limestone cliffs and waters that look like they have a filter... without a filter. With a length of about 800m, it's a dramatic landscape. And it's not just Myrtos: Antisamos, Petani, Xi, and small hidden coves best accessed by boat keep the trip exciting.",
            el: "Ο Μύρτος είναι το πιο χαρακτηριστικό παράδειγμα: ένας σχεδόν ημικυκλικός όρμος, με εντυπωσιακούς ασβεστολιθικούς γκρεμούς και νερά που φωτογραφίζονται σαν φίλτρο… χωρίς φίλτρο. Και δεν είναι μόνο ο Μύρτος: Αντίσαμος, Πέτανοι, Ξι, μικρές “κρυφές” ακτές που προσεγγίζονται καλύτερα με βάρκα… η Κεφαλονιά έχει ποικιλία που κρατάει ζωντανό το ταξίδι.",
          },
        },
        {
          title: {
            en: "Unique geological attractions",
            el: "Για αξιοθέατα που δεν βρίσκεις σε κάθε νησί",
          },
          text: {
            en: "Melissani is not just 'a cave'. It is an underwater cenote whose current form is linked to the collapse of its roof after the 1953 earthquakes. Nearby, the island hides another impressive karst phenomenon: the Katavothres of Argostoli, where seawater 'disappears' into sinkholes.",
            el: "Η Μελισσάνη δεν είναι απλώς “μια σπηλιά”. Είναι μια υποβρύχια δολίνη/λίμνη της οποίας η σημερινή μορφή συνδέεται με την κατάρρευση τμήματος της οροφής μετά τους σεισμούς του 1953. Και λίγο πιο πέρα, το νησί κρύβει ένα από τα πιο ιδιαίτερα καρστικά φαινόμενα της Ελλάδας: τις Καταβόθρες Αργοστολίου, όπου θαλασσινό νερό “χάνεται” σε καταβόθρες.",
          },
        },
        {
          title: {
            en: "A national park on an island",
            el: "Για τον εθνικό δρυμό… πάνω σε ελληνικό νησί",
          },
          text: {
            en: "Ainos National Park is the only national park located on a Greek island, covering about 3,000 hectares with its highest peak at 1,628m. Its trademark is the Kefalonian Fir (Abies cephalonica), an endemic species that covers a large part of the mountain.",
            el: "Ο Εθνικός Δρυμός Αίνου είναι ο μοναδικός εθνικός δρυμός που βρίσκεται σε ελληνικό νησί, με έκταση περίπου 3.000 εκτάρια και υψηλότερη κορυφή στα 1.628μ. Το “σήμα” του είναι η Κεφαλληνιακή ελάτη, ενδημικό είδος που καλύπτει μεγάλο μέρος του δρυμού.",
          },
        },
        {
          title: {
            en: "Villages with strong personality",
            el: "Για χωριά που έχουν προσωπικότητα",
          },
          text: {
            en: "Fiskardo stands out as a cosmopolitan port with colors and architecture saved from the destructive 1953 earthquakes. Assos is one of the most 'cinematic' villages of the Ionian, with its Venetian castle embracing the peninsula.",
            el: "Το Φισκάρδο ξεχωρίζει ως κοσμοπολίτικο λιμανάκι με χρώμα και αρχιτεκτονική που διασώθηκε από τους καταστροφικούς σεισμούς του 1953. Και η Άσσος είναι από τα πιο “κινηματογραφικά” χωριά του Ιονίου, με το ενετικό κάστρο να αγκαλιάζει την χερσόνησο.",
          },
        },
        {
          title: {
            en: "A strong local culinary signature",
            el: "Για γαστρονομία με ισχυρή τοπική υπογραφή",
          },
          text: {
            en: "Kefalonia offers dishes with history (like the Kefalonian meat pie) and a flagship wine: the PDO Robola of Kefalonia, produced in specific zones such as the Omala valley and the slopes of Mount Ainos.",
            el: "Η Κεφαλονιά έχει πιάτα με ιστορία (όπως η κεφαλονίτικη κρεατόπιτα) και ένα κρασί-σύμβολο: την ΠΟΠ Ρομπόλα Κεφαλληνίας, με ζώνη που βρίσκεται σε συγκεκριμένες περιοχές του νησιού (Ομαλά και πλαγιές του Αίνου).",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time to visit",
        el: "Καλύτερη εποχή",
      },
      layout: "list",
      alert: {
        en: "Secret: If you are interested in wine, plan a visit to the Robola region (Omala) during late spring or early autumn when wineries have more time to devote to you.",
        el: "Μικρό μυστικό: Αν σε ενδιαφέρει και το κρασί, βάλε στο πλάνο σου μια επίσκεψη στην περιοχή της Ρομπόλας (Ομαλά) σε εποχή που τα οινοποιεία έχουν περισσότερο χρόνο για σένα (τέλος άνοιξης ή αρχές φθινοπώρου).",
      },
      items: [
        {
          title: { en: "May - June", el: "Μάιος – Ιούνιος" },
          text: {
            en: "Ideal temperatures for road trips and hiking, fewer crowds, easier driving, and a better experience at attractions like Melissani and Drogarati.",
            el: "Θερμοκρασίες ιδανικές για road trips και πεζοπορίες, λιγότερος κόσμος, πιο “ανάλαφρη” οδήγηση και καλύτερη εμπειρία στα αξιοθέατα (Μελισσάνη/Δρογκαράτη).",
          },
        },
        {
          title: { en: "July - August", el: "Ιούλιος – Αύγουστος" },
          text: {
            en: "The sea is at its best, but popular beaches fill up. If you go then, the secret is timing: mornings for the famous spots, afternoons for the quiet ones.",
            el: "Η θάλασσα είναι στο καλύτερο σημείο της, αλλά οι δημοφιλείς παραλίες γεμίζουν. Αν πας τότε, το μυστικό είναι η ώρα: πρωί στις διάσημες και απόγευμα στις πιο ήσυχες.",
          },
        },
        {
          title: { en: "September", el: "Σεπτέμβριος" },
          text: {
            en: "Many consider it the 'perfect' Kefalonia: warm sea, a calmer island vibe, and ideal light for photography.",
            el: "Πολλοί τον θεωρούν την “τέλεια” Κεφαλονιά: ζεστή θάλασσα, πιο ήρεμο νησί, και ιδανικό φως για φωτογραφίες.",
          },
        },
        {
          title: { en: "April & October", el: "Απρίλιος & Οκτώβριος" },
          text: {
            en: "Excellent for nature, villages, and gastronomy. Swimming will depend on the weather, but the island reveals its true authentic self.",
            el: "Εξαιρετικά για φύση, χωριά και γαστρονομία. Για μπάνιο θα εξαρτηθεί από τον καιρό, αλλά το νησί δείχνει πιο “αληθινό”.",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get there",
        el: "Πώς θα φτάσεις",
      },
      layout: "grid",
      alert: {
        en: "Transportation tip: If you plan to explore the island, a car is virtually mandatory. Kefalonia is large with many winding roads; distances are longer than they appear on the map.",
        el: "Μικρό μυστικό μετακίνησης: Αν φτάσεις με πλοίο και σκοπεύεις να γυρίσεις παραλίες/χωριά, το αυτοκίνητο είναι πρακτικά “κλειδί”. Η Κεφαλονιά είναι μεγάλη, με πολλές στροφές.",
      },
      items: [
        {
          title: { en: "By Plane", el: "Με αεροπλάνο" },
          text: {
            en: "Kefalonia Airport “Anna Pollatou” (EFL) offers domestic and international flights. Check terminal hours and flight schedules especially during the shoulder seasons.",
            el: "Το αεροδρόμιο του νησιού είναι το Kefalonia Airport “Anna Pollatou” (EFL). Τσέκαρε το ωράριο και τις πτήσεις, ειδικά κοντά στις ενδιάμεσες εποχές.",
          },
        },
        {
          title: { en: "By Ferry", el: "Με πλοίο" },
          text: {
            en: "The classic entrance with numerous arrival ports (Poros, Sami, etc.). The Killini–Poros route takes approximately 1 hour and 30 minutes.",
            el: "Η Κεφαλονιά έχει πολλά «σημεία εισόδου» (Πόρος, Σάμη κ.ά.). Ενδεικτικά, η γραμμή Κυλλήνη–Πόρος αναφέρεται με συντομότερη διάρκεια 1 ώρα και 30 λεπτά.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions & experiences",
        el: "Top αξιοθέατα & εμπειρίες",
      },
      layout: "list",
      items: [
        {
          title: { en: "Argostoli & De Bosset Bridge", el: "Αργοστόλι & Γέφυρα De Bosset" },
          text: {
            en: "Argostoli is the lively center. The Lithostroto pedestrian street is the classic heart. The 689m long stone De Bosset Bridge (1813) is perfect at dusk.",
            el: "Το Αργοστόλι είναι το κέντρο κίνησης (Λιθόστρωτο). Η Γέφυρα De Bosset (1813) με μήκος 689μ. είναι ιδανική για βόλτα στο σούρουπο.",
          },
        },
        {
          title: { en: "Katavothres of Argostoli", el: "Καταβόθρες Αργοστολίου" },
          text: {
            en: "A mind-blowing geological phenomenon where seawater flows into sinkholes and travels underground through a karst system.",
            el: "Ένα εντυπωσιακό γεωλογικό φαινόμενο όπου θαλασσινό νερό «χάνεται» σε καταβόθρες και ταξιδεύει υπογείως μέχρι την περιοχή της Σάμης.",
          },
        },
        {
          title: { en: "Melissani Lake", el: "Λίμνη Μελισσάνη" },
          text: {
            en: "A cave lake naturally lit from its collapsed roof. Go around noon for the classic blue light, but also visit early or late.",
            el: "Μια υπόγεια λίμνη που φωτίζεται από την ίδια τη γη. Κάνε «δύο επισκέψεις σε μία»: το μεσημέρι για το έντονο φως, και μία πιο αργά για ησυχία.",
          },
        },
        {
          title: { en: "Drogarati Cave", el: "Σπήλαιο Δρογκαράτης" },
          text: {
            en: "An impressive cave with stalactites, stalagmites, and remarkable acoustics. Acts as a 'natural air conditioner' in summer.",
            el: "Εντυπωσιακό σπήλαιο με τρομερή ακουστική (έχουν γίνει ως και συναυλίες). Φυσικό κλιματιστικό τα ζεστά μεσημέρια του καλοκαιριού.",
          },
        },
        {
          title: { en: "Assos & Agios Georgios Castles", el: "Κάστρα: Άσσος & Αγ. Γεώργιος" },
          text: {
            en: "The cinematic Venetian Castle of Assos embraces its peninsula. The Castle of Agios Georgios (1504) offers panoramic views to the south.",
            el: "Το Κάστρο της Άσσου αγκαλιάζει τη χερσόνησο. Το Κάστρο Αγ. Γεωργίου (1504) είναι το «κάστρο της ιστορίας» της πλευράς του Αργοστολίου.",
          },
        },
        {
          title: { en: "Mount Ainos", el: "Όρος Αίνος" },
          text: {
            en: "The only national park on a Greek island. Go early morning or late afternoon for hiking and stunning Mediterranean views.",
            el: "Ο μόνος εθνικός δρυμός σε νησί, με κορυφή στα 1.628μ. Πήγαινε νωρίς το πρωί ή το απόγευμα και πάρε μαζί κάτι ζεστό.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top Beaches",
        el: "Παραλίες Κεφαλονιάς",
      },
      layout: "grid",
      alert: {
        en: "Secret coves: Ask at local ports (like Fiskardo or Sami) for small boat trips to hidden bays. It's often the best value experience.",
        el: "Μυστικές ακτές: Ρώτα στα λιμάνια (π.χ. Φισκάρδο, Σάμη, Ζόλα) για μικρές βαρκάδες σε όρμους. Είναι συχνά η πιο «value» εμπειρία του ταξιδιού.",
      },
      items: [
        {
          title: { en: "Myrtos", el: "Μύρτος" },
          text: {
            en: "For the scenery, the color, and the classic Ionian vibe. Note that it's worth stopping at the viewpoint first.",
            el: "Για το θέαμα, το χρώμα και το κλασικό vibe. Δύο εμπειρίες: το viewpoint της κορυφής και η ίδια η παραλία. Πρωινές ώρες είναι πιο ήσυχες.",
          },
        },
        {
          title: { en: "Antisamos", el: "Αντίσαμος" },
          text: {
            en: "Near Sami, for a breathtaking gulf setting, crystal-clear waters, and easy combination with the nearby Melissani cave.",
            el: "Κοντά στη Σάμη, για σκηνικό μέσα σε κλειστό κόλπο, πεντακάθαρα νερά και εύκολο συνδυασμό με Μελισσάνη και Δρογκαράτη.",
          },
        },
        {
          title: { en: "Xi (Paliki)", el: "Ξι (Παλική)" },
          text: {
            en: "The 'orange' beach with clay. The red hue comes from weathered clay minerals. You can apply the natural clay.",
            el: "Η «πορτοκαλί» παραλία με τον άργιλο και τον πηλό. Ο πηλός είναι fun σαν εμπειρία, αρκεί να γίνεται διακριτικά.",
          },
        },
        {
          title: { en: "Petani & Western Bays", el: "Πέτανοι & Δυτικοί Όρμοι" },
          text: {
            en: "If you chase sunsets by the beach, the western side of the island offers incredible golden hours and majestic cliffs.",
            el: "Αν κυνηγάς ηλιοβασίλεμα δίπλα στο κύμα, τα δυτικά του νησιού (Πέτανοι) προσφέρουν απίστευτο φως το σούρουπο.",
          },
        },
      ],
    },
    {
      title: {
        en: "Local food & Wine",
        el: "Τι να φας και τι να πιεις",
      },
      layout: "list",
      items: [
        {
          title: { en: "Kefalonian Meat Pie", el: "Κεφαλονίτικη Κρεατόπιτα" },
          text: {
            en: "The island's signature dish: a hearty pie with meat and local spices. It's best experienced in inland villages.",
            el: "Το πιάτο-υπογραφή: πίτα με κρέας και μπαχαρικά. Δοκίμασέ την σε χωριό ή ενδοχώρα για να την πετύχεις αληθινά «σπιτική».",
          },
        },
        {
          title: { en: "Robola PDO Wine", el: "Ρομπόλα Κεφαλληνίας" },
          text: {
            en: "The iconic Kefalonian wine. Ask locals or wineries how Robola varies with the altitude of Mount Ainos.",
            el: "Το κρασί-σύμβολο. Ζήτησε να σου εξηγήσουν στο οινοποιείο ή στην ταβέρνα πώς αλλάζει η Ρομπόλα με το υψόμετρο του Αίνου.",
          },
        },
        {
          title: { en: "Ionian Meze", el: "Μεζέδες Ιονίου" },
          text: {
            en: "If you love wine with small dishes, look for local cheeses, pies, fresh seafood, and trust the tavern recommendations.",
            el: "Τοπικά τυριά, πίτες, φρέσκα θαλασσινά. Άσε τους ντόπιους να σου προτείνουν “τι καλό βγήκε σήμερα”.",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical Tips",
        el: "Πρακτικά Tips",
      },
      layout: "numbered",
      items: [
        {
          text: {
            en: "Choose your base wisely: Sami for caves and eastern beaches, Argostoli for city life, Lixouri for a quiet vibe.",
            el: "Διάλεξε βάση ανάλογα με το πλάνο: Σάμη αν κυνηγάς σπήλαια/ανατολικά. Αργοστόλι αν θες κέντρο. Ληξούρι για ήσυχες παραλίες.",
          },
        },
        {
          text: {
            en: "Do not underestimate distances. Kefalonia requires road tripping. Factor in 'buffer time' for winding roads.",
            el: "Η Κεφαλονιά έχει road trip χαρακτήρα. Βάλε “buffer time” για στροφές, στάσεις για θέα, και αλλαγές προγράμματος.",
          },
        },
        {
          text: {
            en: "Plan one 'Geological Day': Combine Katavothres, Drogarati, Melissani, and Xi beach in one thematic tour.",
            el: "Βάλε μια «γεωλογική μέρα» στο πρόγραμμα: Καταβόθρες → Δρογκαράτη/Μελισσάνη → Ξι (για το χρώμα) και το Geopark.",
          },
        },
      ],
    },
    {
      title: {
        en: "Frequently Asked Questions",
        el: "FAQ – Συχνές ερωτήσεις για Κεφαλονιά",
      },
      layout: "faq",
      items: [
        {
          title: { en: "How many days do I need?", el: "Πόσες μέρες χρειάζομαι;" },
          text: {
            en: "To feel the island without rushing, 5 to 7 days are ideal. You need time to combine caves, villages, beaches.",
            el: "Για να “τη νιώσεις” χωρίς τρέξιμο, 5–7 μέρες είναι ιδανικές (ώστε να δεις και σπήλαια, και χωριά, και νερά, και Αίνο).",
          },
        },
        {
          title: { en: "Do I need a car?", el: "Χρειάζομαι αυτοκίνητο;" },
          text: {
            en: "Practically, yes. If your goal is to see Myrtos, Assos, Fiskardo, caves, and Xi, Kefalonia is built to drive.",
            el: "Αν ο στόχος είναι Μύρτος–Άσσος–Φισκάρδο–σπήλαια–Ξι, ναι. Η Κεφαλονιά είναι νησί κομμένο και ραμμένο για road trip.",
          },
        },
        {
          title: { en: "When is the best time for Melissani?", el: "Πότε είναι η καλύτερη ώρα για τη Μελισσάνη;" },
          text: {
            en: "Around noon for the spectacular overhead light lighting up the water.",
            el: "Γύρω στο μεσημέρι (ώστε να τρυπώνει ο ήλιος κατακόρυφα) για το εντυπωσιακό μπλε φως.",
          },
        },
      ],
    },
  ],
  lesvos: [
    {
      title: {
        en: "Why visit Lesvos",
        el: "Γιατί να επισκεφθείς τη Λέσβο",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "An entire island as a UNESCO Global Geopark",
            el: "Γιατί είναι UNESCO Global Geopark σε ολόκληρη την έκτασή της",
          },
          text: {
            en: "The Lesvos Island UNESCO Global Geopark highlights a complex geological past with volcanic formations, karst systems, faults, and coastal geomorphology. Even if you're not into science, you will feel it in the landscapes: from thermal springs to fossils and the almost 'lunar' landscapes of Western Lesvos.",
            el: "Το Lesvos Island UNESCO Global Geopark καλύπτει το σύνολο της Λέσβου και αναδεικνύει ένα σύνθετο γεωλογικό παρελθόν. Ακόμη κι αν δεν είσαι “του επιστημονικού”, θα το νιώσεις στις διαδρομές: από τις θερμές πηγές μέχρι τα απολιθώματα και τα τοπία της Δυτικής Λέσβου που μοιάζουν σχεδόν “σεληνιακά”.",
          },
        },
        {
          title: {
            en: "The Petrified Forest: a 20+ million year old wonder",
            el: "Για το Απολιθωμένο Δάσος: ένα φυσικό θαύμα 20+ εκατ. ετών",
          },
          text: {
            en: "Petrified trunks in an area of about 150 sq.km. in western Lesvos, around Sigri–Eresos–Antissa, bear witness to the Aegean's geological history. Don't go just for a photo; dive into the history at the Natural History Museum and visit an open-air park to see trunks in their natural position.",
            el: "Περίπου 150 τ.χλμ. στη δυτική Λέσβο γύρω από Σίγρι–Ερεσό–Άντισσα, “μαρτυρούν” γεγονότα πάνω από 20 εκατομμύρια χρόνια πριν. Μην πας μόνο “για φωτογραφία κορμού”. Πήγαινε και για την ιστορία στο ομώνυμο Μουσείο, και κάνε μια στάση σε πάρκο/γεώτοπο (π.χ. Σίγρι Park) για να δεις κορμούς στη φυσική τους θέση.",
          },
        },
        {
          title: {
            en: "Castles and monuments that elevate the trip",
            el: "Για κάστρα και μνημεία που δίνουν “ύψος” στο ταξίδι",
          },
          text: {
            en: "The Castle of Mytilene is one of the largest fortifications in the Mediterranean (around 20 hectares). The Castles of Molyvos and the Ancient Theatre in Mytilene (seating 10,000) offer brilliant insights into ancient geography, trade routes, and beautiful panoramic views.",
            el: "Το Κάστρο Μυτιλήνης (από τις μεγαλύτερες οχυρώσεις, ~200 στρέμματα), το Κάστρο Μήθυμνας και το Αρχαίο Θέατρο Μυτιλήνης. Τα κάστρα στη Λέσβο είναι ιδανικά σημεία για να καταλάβεις γεωγραφία: κόλποι, περάσματα, παλιά λιμάνια, εμπορικές διαδρομές.",
          },
        },
        {
          title: {
            en: "Birdwatching and wetlands that are a true treasure",
            el: "Για birdwatching και υγροτόπους που είναι πραγματικός θησαυρός",
          },
          text: {
            en: "The Gulf of Kalloni and its salt pans are crucial for birdwatching, attracting numerous species year-round. Go very early at first light or late afternoon; the spectacle here is behavior and movement, not just colors.",
            el: "Ο Κόλπος Καλλονής και ειδικά οι αλυκές είναι κομβικό σημείο. Πήγαινε πολύ νωρίς (πρώτο φως) ή αργά απόγευμα — και στάσου ήσυχα. Το “θέαμα” εδώ είναι συμπεριφορά και κίνηση, όχι μόνο χρώμα.",
          },
        },
        {
          title: {
            en: "Thermal springs: wellness with a sea view",
            el: "Για θερμές πηγές: wellness με θέα θάλασσα",
          },
          text: {
            en: "Polichnitos is known for having some of the hottest springs in Europe (up to 87.6°C at source), while Eftalou offers 43.6°C–46.5°C waters. Use them strategically after a day of hiking or swimming for the ultimate reset.",
            el: "Ο Πολιχνίτος φτάνει τους 87,6°C (από τις θερμότερες της Ευρώπης) και η Εφταλού τους 43,6°C–46,5°C. Κάνε τις πηγές “στρατηγικά”: μετά από μέρα με οδήγηση/πεζοπορία ή μετά από μπάνιο στη θάλασσα για το απόλυτο reset.",
          },
        },
        {
          title: {
            en: "Flavors with identity: Ouzo, local cheese and olive oil",
            el: "Για γεύσεις με ταυτότητα: ούζο, τυρί και ελαιόλαδο",
          },
          text: {
            en: "Protected designations of origin (PDO) for famous products like Ladotyri Mytilinis and the internationally loved Ouzo of Mytilene and Plomari. Pursue rhythm: a meze tavern with seafood, a rural hearty meal, and a serene evening at a small port.",
            el: "Λαδοτύρι Μυτιλήνης (ΠΟΠ) και Ούζο Μυτιλήνης/Πλωμαρίου (Γεωγραφικές Ενδείξεις). Στη Λέσβο μην κυνηγάς “το ένα εστιατόριο”. Κυνηγάς ρυθμό: ένα μεζεδοπωλείο/ουζερί με θαλασσινό μεζέ, ένα χωριάτικο μαγειρευτό και ένα βράδυ σε παραθαλάσσιο λιμανάκι.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time to visit",
        el: "Καλύτερη εποχή",
      },
      layout: "list",
      alert: {
        en: "Seasonal secret: If you want to comfortably combine the Petrified Forest, beaches, and villages without stress, aim for late May, June, or September.",
        el: "Μικρό μυστικό εποχής: αν θέλεις και Απολιθωμένο Δάσος και παραλίες και χωριά χωρίς άγχος, στόχευσε τέλη Μαΐου–Ιούνιο ή Σεπτέμβριο. Θα προλάβεις τα πάντα χωρίς να τρέχεις.",
      },
      items: [
        {
          title: { en: "Spring (April - June)", el: "Άνοιξη (Απρίλιος–Ιούνιος)" },
          text: {
            en: "Ideal for walks in Mytilene, villages like Agiasos, geosite discoveries, and birdwatching in Kalloni. Wetlands are bustling, and the weather is perfect for exploring.",
            el: "Ιδανική για βόλτες στη Μυτιλήνη, χωριά (Αγιάσος), γεώτοπους, παρατήρηση πουλιών σε Καλλονή. Οι υγρότοποι “δουλεύουν” δυνατά και οι θερμοκρασίες είναι τέλειες.",
          },
        },
        {
          title: { en: "Summer (July - August)", el: "Καλοκαίρι (Ιούλιος–Αύγουστος)" },
          text: {
            en: "The beach takes over. The secret is to visit the famous shores very early and leave museums and the city for the midday heat or the evening.",
            el: "Η παραλία κυριαρχεί. Το μυστικό είναι να κάνεις τις διάσημες ακτές πολύ πρωί και να αφήνεις τα μουσεία/πόλη για μεσημέρι ή βράδυ.",
          },
        },
        {
          title: { en: "September", el: "Σεπτέμβριος" },
          text: {
            en: "Many believe it's the perfect balance—the sea is still warm, and the island settles into a more human, steady rhythm.",
            el: "Για πολλούς η καλύτερη “ισορροπία” — η θάλασσα είναι ακόμη ζεστή και το νησί πέφτει σε πιο ανθρώπινο ρυθμό.",
          },
        },
        {
          title: { en: "Autumn", el: "Φθινόπωρο" },
          text: {
            en: "Perfect for gastronomy, thermal springs and road trips without the peak season crowds.",
            el: "Ιδανικό για γαστρονομία, θερμές πηγές και road trips χωρίς το “peak” της σεζόν.",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get there",
        el: "Πώς φτάνεις στη Λέσβο",
      },
      layout: "grid",
      alert: {
        en: "Transportation secret: Lesvos is huge. If your goal is to discover (Molyvos, Petra, Sigri, Plomari), a car is practically your best friend.",
        el: "Μικρό μυστικό μετακίνησης: η Λέσβος είναι μεγάλη. Αν ο στόχος σου είναι “γυρίζω νησί” (Μόλυβος, Πέτρα, Σίγρι, Πλωμάρι, Αγιάσος), το αυτοκίνητο είναι πρακτικά ο καλύτερος φίλος σου.",
      },
      items: [
        {
          title: { en: "By Plane", el: "Με αεροπλάνο" },
          text: {
            en: "Mitilini Airport 'Odysseas Elytis' (MJT) serves the island. Always check arrival/departure schedules closely.",
            el: "Το αεροδρόμιο είναι το Mitilini Airport “Odysseas Elytis” (MJT), με συχνές πτήσεις εσωτερικού και εξωτερικού.",
          },
        },
        {
          title: { en: "By Ferry", el: "Με πλοίο" },
          text: {
            en: "The main gateway is Mytilene. Extra tip: There's also a route connecting Piraeus to Sigri during specific months, great if you want to head straight to Western Lesvos.",
            el: "Η κύρια θαλάσσια πύλη είναι η Μυτιλήνη (εβδομαδιαίες διελεύσεις από Πειραιά). Υπάρχει και σύνδεση Πειραιάς–Σίγρι κάποιους μήνες, ιδανική για Δυτική Λέσβο.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions & experiences",
        el: "Top αξιοθέατα & εμπειρίες",
      },
      layout: "list",
      items: [
        {
          title: { en: "Mytilene: History and vibes", el: "Μυτιλήνη: Πόλη με στρώσεις ιστορίας" },
          text: {
            en: "Your urban center with neoclassicals, industrial traces, cafes, a market, and a lively waterfront. Do it in two rounds: morning for photos, evening for ouzo.",
            el: "Το “αστικό” σου κεφάλαιο: νεοκλασικά, βιομηχανικά ίχνη, αγορά. Κάνε την “σε δύο γύρους”: πρωί για ήσυχη βόλτα/φωτογραφίες και βράδυ για ουζάκι-μεζέ.",
          },
        },
        {
          title: { en: "Castle of Mytilene", el: "Κάστρο Μυτιλήνης" },
          text: {
            en: "The fortified heart of the city (~20 hectares). Go just before sunset; the stone warms up, and the view towards Asia Minor is breathtaking.",
            el: "Τεράστια οχύρωση (εποχή Ιουστινιανού). Πήγαινε λίγο πριν δύσει: η πέτρα “ζεσταίνει” και η θέα προς τη Μικρά Ασία είναι μοναδική.",
          },
        },
        {
          title: { en: "Roman Aqueduct of Moria", el: "Ρωμαϊκό Υδραγωγείο Μόριας" },
          text: {
            en: "A monumental section 117m long and 24.5m high with stunning arches. Go near dusk for the best shadows and scale.",
            el: "Μνημειώδες τμήμα με μέγιστο μήκος 117μ και ύψος 24,5μ (με τοξωτά ανοίγματα). Πήγαινε κοντά στο σούρουπο όπου οι σκιές αναδεικνύουν την κλίμακα.",
          },
        },
        {
          title: { en: "Molyvos (Mithymna)", el: "Μόλυβος (Μήθυμνα)" },
          text: {
            en: "A medieval aesthetic and a hilltop castle. Molyvos in the morning is a different village; visit before the crowds.",
            el: "Μεσαιωνικό σκηνικό και κάστρο. Ο Μόλυβος το πρωί είναι άλλο χωριό. Πήγαινε πριν γεμίσουν οι δρόμοι για πιο αυθεντική εμπειρία.",
          },
        },
        {
          title: { en: "Petra: church on a rock", el: "Πέτρα: η εκκλησία στον βράχο" },
          text: {
            en: "Panagia of Petra sits on a 40m rock (climb 114 steps). Hike up in the late afternoon when the light softens for a panoramic film-like view.",
            el: "Η Παναγία της Πέτρας είναι πάνω σε βράχο περίπου 40μ (114 σκαλιά). Ανέβα αργά απόγευμα που το φως μαλακώνει και η θέα γίνεται “πανοραμικό φιλμ”.",
          },
        },
        {
          title: { en: "Skala Sykamnias", el: "Σκάλα Συκαμνιάς & Παναγία Γοργόνα" },
          text: {
            en: "The most photogenic small port featuring the 'Mermaid Madonna'. At its best early in the day when the only sound is from the boats.",
            el: "Η “Παναγία Γοργόνα” (1913) και το πιο φωτογενές λιμανάκι. Πήγαινε νωρίς, όταν ακούς μόνο το νερό και κουβέντες από τα καΐκια.",
          },
        },
        {
          title: { en: "Agiasos", el: "Αγιάσος: βουνό και καστανιές" },
          text: {
            en: "Located on the slopes of Mount Olympos (~475m altitude). A traditional settlement. Perfect for a midday escape when the coasts are too hot.",
            el: "Στις πλαγιές του Όλυμπου Λέσβου. Παραδοσιακός οικισμός. Βάλε την Αγιάσο μεσημέρι (όταν κάνει ζέστη στις ακτές), έχει δροσιά και θα φας καλά.",
          },
        },
        {
          title: { en: "Plomari: The Ouzo Universe", el: "Πλωμάρι: το σύμπαν του ούζου" },
          text: {
            en: "Dive into distillery tours like the Varvayannis or Plomari museums. Taste with a rule: first a little water, then ice—and always with meze.",
            el: "Χώροι επίσκεψης/μουσεία αποστακτηρίων. Κάνε tasting “με κανόνα”: λίγο νερό πρώτα, μετά πάγος — και πάντα με μεζέ.",
          },
        },
        {
          title: { en: "Sigri & Petrified Forest", el: "Σίγρι: Απολιθωμένο Δάσος & Κάστρο" },
          text: {
            en: "The Ottoman Castle of Sigri and the nearby Natural History Museum of the Petrified Forest (1994). Unbeatable spot for sunsets.",
            el: "Οθωμανικό οχυρό (1757) και δίπλα το Μουσείο Απολιθωμένου Δάσους. Το Σίγρι είναι φανταστικό για ηλιοβασίλεμα — και για “αίσθηση άκρης”.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top Beaches",
        el: "Παραλίες που αξίζει",
      },
      layout: "grid",
      alert: {
        en: "Secret coves: Ask at local ports for small boat trips to hidden bays.",
        el: "Μυστικές ακτές: Ρώτα στα λιμανάκια για κρυφές παραλίες μακριά από τον συνωστισμό.",
      },
      items: [
        {
          title: { en: "Vatera", el: "Βατερά: η “βασιλική” παραλία" },
          text: {
            en: "An 8km sandy beach, one of the longest in Greece. Be sure to give your exact location otherwise you'll lose your friends.",
            el: "Αμμώδης ακτή περίπου 8 χλμ. Στα Βατερά μην λες “βρισκόμαστε στην παραλία”. Δώσε ακριβές σημείο. Είναι τόσο μεγάλη που ψάχνεστε.",
          },
        },
        {
          title: { en: "Skala Eresou", el: "Σκάλα Ερεσού" },
          text: {
            en: "A long sandy beach with a famously relaxed, open-minded rhythm on the western side.",
            el: "Μεγάλη αμμουδιά και laid-back ρυθμός στη Δυτική Λέσβο. Αν θες απόλυτη ησυχία, περπάτα λίγο πιο έξω από τα κεντρικά σημεία.",
          },
        },
        {
          title: { en: "Petra - Anaxos - Molyvos", el: "Πέτρα – Άναξος – Μόλυβος" },
          text: {
            en: "A northern 'triangle' that provides the easiest tourist packaging: nearby distances, food, and culture.",
            el: "Το πιο “τουριστικά έτοιμο” πακέτο στο βόρειο “τρίγωνο”. Κάνε μπάνιο νωρίς, βόλτα στο κάστρο αργά, και φαγητό μετά.",
          },
        },
        {
          title: { en: "Eftalou", el: "Εφταλού" },
          text: {
            en: "Where the beach meets natural thermal springs. Enter the sea first, then the hot spring; the contrast is the real trick.",
            el: "Συνδυάζεις παραλία και θερμές πηγές στο ίδιο “κάδρο”. Μπες πρώτα στη θάλασσα, μετά στην πηγή. Η αντίθεση είναι το “κόλπο”.",
          },
        },
        {
          title: { en: "Kalloni Coastal Waters", el: "Σκάλα Καλλονής" },
          text: {
            en: "Shallow, warm waters that are perfect for families. The surrounding wetland ecosystem adds magic.",
            el: "Ρηχά νερά, ιδανικά για οικογένειες + φύση γύρω. Κράτα ένα απόγευμα για περπάτημα/παρατήρηση στον υγρότοπο.",
          },
        },
      ],
    },
    {
      title: {
        en: "Local food & Gastronomy",
        el: "Τοπικό φαγητό και γαστρονομία",
      },
      layout: "list",
      alert: {
        en: "Food secret: On Lesvos, you don't hunt for one specific dish; you hunt for the combination of Ouzo, fresh seafood meze, and the sea breeze.",
        el: "Μυστικό Λέσβου: Αν σου αρέσουν χώροι που αφηγούνται την ιστορία της Λέσβου με το λάδι της, βάλε το Μουσείο Βιομηχανικής Ελαιουργίας στο πλάνο.",
      },
      items: [
        {
          title: { en: "Ouzo & Meze", el: "Ούζο ΓΕ & Μεζές" },
          text: {
            en: "The definitive Lesvos rule: Drink Ouzo (from Plomari or Mytilene) accompanied by multiple small plates of seafood and local cheeses. Test it with water vs with ice.",
            el: "Ο “κανόνας” της Λέσβου. Ούζο Πλωμαρίου & Μυτιλήνης. Κάνε 2 δοκιμές: μία “σκέτο με λίγο νερό” και μία “με πάγο”. Θα δεις πώς αλλάζουν αρώματα.",
          },
        },
        {
          title: { en: "Ladotyri Mytilinis PDO", el: "Λαδοτύρι Μυτιλήνης ΠΟΠ" },
          text: {
            en: "An iconic Protected Designation of Origin cheese preserved in olive oil. Ask for it to be vacuum packed if taking it home.",
            el: "Από τα κορυφαία τυριά ΠΟΠ. Αν το πάρεις για δώρο/μεταφορά, ζήτα vacuum και κράτα το δροσερό.",
          },
        },
        {
          title: { en: "Kalloni Sardines (Papalina)", el: "Σαρδέλες / Παπαλίνες Καλλονής" },
          text: {
            en: "Famous fresh sardines from the Kalloni Gulf. Try them simply prepared: a little olive oil, lemon, and bread. Nothing else is needed.",
            el: "Η περίφημη παπαλίνα αποτελεί ιδιαίτερο τοπικό προϊόν. Δοκίμασέ τες “απλά”: λίγο λάδι, λεμόνι, ψωμί. Ό,τι άλλο είναι περιττό.",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical Tips",
        el: "Πρακτικά Tips",
      },
      layout: "numbered",
      items: [
        {
          text: {
            en: "Choose your base with strategy. Lesvos is huge. If you stay in one spot the entire trip, you will drive excessively.",
            el: "Διάλεξε βάση με στρατηγική. Η Λέσβος είναι μεγάλη: αν μείνεις μόνο σε ένα σημείο, θα οδηγήσεις πολύ.",
          },
        },
        {
          text: {
            en: "Divide the island: North (Molyvos-Petra), West (Sigri), South (Plomari), Center (Kalloni), East (Mytilene).",
            el: "Κάνε το νησί σε “ενότητες”: Βόρεια (Μόλυβος-Πέτρα), Δυτικά (Σίγρι-Απολιθωμένο), Νότια (Πλωμάρι), Κέντρο (Καλλονή).",
          },
        },
        {
          text: {
            en: "Bring binoculars for birdwatching in the Kalloni salt pans, and respect the fossil parks—removing any fossil pieces is strictly forbidden.",
            el: "Birdwatching: πάρε κιάλια ιδίως για αλυκές. Και στα πάρκα, ο σεβασμός σε γεώτοπους είναι αυτονόητος: η αφαίρεση απολιθωμάτων απαγορεύεται.",
          },
        },
        {
          text: {
            en: "Don't rush 10 things a day. Win Lesvos with the rhythm of 'two major sites + one small stop' daily.",
            el: "Μην κυνηγάς 10 πράγματα την ημέρα. Η Λέσβος κερδίζεται σε ρυθμό “δύο μεγάλα + ένα μικρό”.",
          },
        },
      ],
    },
    {
      title: {
        en: "Frequently Asked Questions",
        el: "FAQ – Συχνές ερωτήσεις για Λέσβο",
      },
      layout: "faq",
      items: [
        {
          title: { en: "How many days do I need?", el: "Πόσες μέρες χρειάζομαι;" },
          text: {
            en: "Ideally 5–7 days to see Mytilene, the North, the Petrified Forest, and Plomari/Agiasos. If you only have 3-4 days, choose just 2 regions and do them properly.",
            el: "Ιδανικά 5–7 για να δεις Μυτιλήνη + Βόρεια + Δυτικά + Πλωμάρι/Αγιάσο. Αν έχεις 3–4, διάλεξε 2 περιοχές.",
          },
        },
        {
          title: { en: "Do I need a car?", el: "Χρειάζομαι αυτοκίνητο;" },
          text: {
            en: "Absolutely. The island's scale is immense—accessing remote villages, geosite parks, and widespread beaches requires driving.",
            el: "Αν θες να δεις όλο το νησί (Απολιθωμένο Δάσος, Μόλυβο, Πλωμάρι), θα σε βοηθήσει πάρα πολύ. Η κλίμακα είναι μεγάλη.",
          },
        },
        {
          title: { en: "What are the first-time must-dos?", el: "Ποια είναι τα “must” για πρώτη φορά;" },
          text: {
            en: "Mytilene Castle, Molyvos, Petra, the Petrified Forest with its Sigri Museum, Kalloni salt pans, and an ouzo distillery.",
            el: "Κάστρο Μυτιλήνης, Αρχαίο Θέατρο, Μόλυβος, Παναγία στην Πέτρα, Απολιθωμένο Δάσος, αλυκές Καλλονής και ένα distillery-museum.",
          },
        },
        {
          title: { en: "Are the thermal springs worth it?", el: "Αξίζουν οι θερμές πηγές;" },
          text: {
            en: "Yes, especially for wellness. Polichnitos for power and Eftalou for a gentle spa next to the waves.",
            el: "Ναι. Πολιχνίτος για “power”, Εφταλού για “ήπιο spa δίπλα στη θάλασσα”.",
          },
        },
        {
          title: { en: "Is the Petrified Forest good for kids?", el: "Το Απολιθωμένο Δάσος είναι για παιδιά;" },
          text: {
            en: "Yes, it is an open-air park and has an incredibly friendly and educational Natural History Museum alongside it.",
            el: "Συνήθως ναι, γιατί είναι “υπαίθριο” και έχει μουσείο που εξηγεί με φιλικό τρόπο (1994).",
          },
        },
      ],
    },
  ],
  athens: [
    {
      title: {
        en: "Why visit Athens",
        el: "Γιατί να επισκεφθεί κάποιος την Αθήνα",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "Two cities in one: ancient and modern without dividing lines",
            el: "Γιατί είναι “δύο πόλεις σε μία”: αρχαία και σύγχρονη, χωρίς διαχωριστικές γραμμές",
          },
          text: {
            en: "The Acropolis isn't just a monument; UNESCO describes it as the top expression of architecture adapting to a natural landscape with masterpieces from the 5th century BC. Minutes later, you are in an arcade, a square, or a bar, feeling that the city doesn't just 'display' its history—it lives on it.",
            el: "Η Ακρόπολη δεν είναι μόνο μνημείο. Η UNESCO τη χαρακτηρίζει κορυφαία έκφραση της προσαρμογής της αρχιτεκτονικής στο φυσικό τοπίο, με σύνολο αριστουργημάτων του 5ου αι. π.Χ. Και λίγα λεπτά μετά, βρίσκεσαι σε μια αγορά, σε μια στοά, σε μια πλατεία, σε ένα μπαρ—και νιώθεις ότι η πόλη δεν “παριστάνει” την ιστορία της: ζει πάνω της.",
          },
        },
        {
          title: {
            en: "City break without being locked inland",
            el: "Γιατί μπορείς να κάνεις city break χωρίς να “κλειδώσεις” στη στεριά",
          },
          text: {
            en: "Piraeus is the sea gate of Athens, serving as the gateway to the Greek islands. This means you can do 'Athens + an island' (or just a day trip) much easier than you think.",
            el: "Ο Πειραιάς είναι η θαλάσσια πύλη της Αθήνας και παρουσιάζεται ως gateway προς τα ελληνικά νησιά. Αυτό σημαίνει ότι μπορείς να κάνεις Αθήνα + νησί (ή έστω “νησί σε μία μέρα”) πολύ πιο εύκολα απ’ όσο νομίζεις.",
          },
        },
        {
          title: {
            en: "The sea is not just a Plan B",
            el: "Γιατί η Αθήνα έχει θάλασσα—και δεν είναι “σχέδιο Β”",
          },
          text: {
            en: "With a tram or metro+bus, you reach the Athenian Riviera for swimming, dining, or a walk. Plus, you have Lake Vouliagmeni with therapeutic warm waters varying in temperature.",
            el: "Με τραμ ή μέτρο+λεωφορείο, πιάνεις Αθηναϊκή Ριβιέρα για μπάνιο/φαγητό/βόλτα. Και υπάρχει και η Λίμνη Βουλιαγμένης με θερμά νερά που παίζουν σε πολύ άνετο εύρος θερμοκρασίας, ανάλογα την εποχή.",
          },
        },
        {
          title: {
            en: "It's a genuine Food City",
            el: "Γιατί είναι “food city” με την καλή έννοια",
          },
          text: {
            en: "From the traditional souvlaki to food markets and modern bistronomy, the food here isn't a 'tourist show'. Check out Varvakios Central Market to experience the city with your sense of smell.",
            el: "Από σουβλάκι μέχρι αγορές τροφίμων και σύγχρονα bistronomy σημεία, η Αθήνα έχει φαγητό που δεν είναι μόνο “τουριστική παράσταση”. Αν θέλεις να δεις την πόλη με τη μύτη (και όχι μόνο με τα μάτια), η Βαρβάκειος Αγορά είναι το σημείο.",
          },
        },
        {
          title: {
            en: "Culture every month of the year",
            el: "Γιατί έχει πολιτισμό κάθε μήνα του χρόνου",
          },
          text: {
            en: "From the Athens & Epidaurus Festival in the summer to the Authentic Marathon in November, and spaces like the SNFCC keeping the temperature high year-round.",
            el: "Από το Φεστιβάλ Αθηνών & Επιδαύρου (με ανακοινωμένα προγράμματα ανά χώρο) μέχρι τον Αυθεντικό Μαραθώνιο (8 Νοεμβρίου 2026). Κι ενδιάμεσα, σύγχρονοι χώροι όπως το ΚΠΙΣΝ κρατούν την πόλη ζωντανή.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time to visit",
        el: "Καλύτερη εποχή για Αθήνα",
      },
      layout: "list",
      alert: {
        en: "Seasonal secret: If you have a choice, aim for late May or late September. The city is vibrant but not exhausting.",
        el: "Μικρό μυστικό εποχής: Αν έχεις επιλογή, προτίμησε τέλη Μαΐου ή τέλη Σεπτεμβρίου. Είναι η περίοδος που η Αθήνα είναι “ζωντανή”, αλλά όχι “κουραστική”.",
      },
      items: [
        {
          title: { en: "Spring (April–June)", el: "Άνοιξη (Απρίλιος–Ιούνιος)" },
          text: {
            en: "Perfect for walking without exhaustion, beautiful light, and the city is spent mostly outdoors.",
            el: "Περπάτημα χωρίς εξάντληση, όμορφο φως, επισκέψεις στα μνημεία, και η πόλη βρίσκεται έξω.",
          },
        },
        {
          title: { en: "Autumn (September–November)", el: "Φθινόπωρο (Σεπτέμβριος–Νοέμβριος)" },
          text: {
            en: "Milder heat, better strolls, and the sea is still warm in the first weeks.",
            el: "Πιο ήπια ζέστη, καλύτερες βόλτες, και η θάλασσα είναι ακόμη ζεστή τις πρώτες εβδομάδες.",
          },
        },
        {
          title: { en: "Summer (July–August)", el: "Καλοκαίρι (Ιούλιος–Αύγουστος)" },
          text: {
            en: "It works, but needs strategy: mornings for ruins, middays for museums/shade, and evenings for the Riviera.",
            el: "Γίνεται, αλλά θέλει στρατηγική: πρωί στα αρχαία, μεσημέρι σε μουσεία/σκιές, απόγευμα-βράδυ βόλτες/Ριβιέρα.",
          },
        },
        {
          title: { en: "Winter", el: "Χειμώνας" },
          text: {
            en: "The city feels more 'yours'. Lake Vouliagmeni is highly recommended even for winter swimming due to its thermal springs.",
            el: "Η πόλη είναι πιο “δική σου”. Και αν θες κάτι απρόσμενο, η Λίμνη Βουλιαγμένης προτείνεται ακόμη και για χειμερινό κολύμπι.",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get there & around",
        el: "Πώς φτάνεις & Μετακινήσεις",
      },
      layout: "grid",
      alert: {
        en: "Tram hack: The tram isn't the fastest, but it's the most 'Athenian' way to watch the city turn into the sea without driving.",
        el: "Μικρό μυστικό: Το τραμ για Ριβιέρα δεν είναι το πιο γρήγορο. Είναι όμως ο πιο “αθηναϊκός” τρόπος να δεις την πόλη να γίνεται θάλασσα.",
      },
      items: [
        {
          title: { en: "By Plane", el: "Με αεροπλάνο" },
          text: {
            en: "Athens International Airport 'Eleftherios Venizelos'. Connected via 4 express bus lines (X93, X95, X96, X97) and Metro.",
            el: "Από το “Ελευθέριος Βενιζέλος” συνδέεσαι με 4 express γραμμές (X93, X95, X96, X97) ή με ειδικό εισιτήριο για Μετρό/Προαστιακό.",
          },
        },
        {
          title: { en: "By Ferry", el: "Με πλοίο" },
          text: {
            en: "Piraeus is the main gateway to the islands. It sits about 10km from the center.",
            el: "Ο Πειραιάς (περίπου 10 χλμ από το κέντρο) είναι η βασική πύλη προς τα νησιά.",
          },
        },
        {
          title: { en: "Public Transport Tickets", el: "Εισιτήρια ΜΜΜ" },
          text: {
            en: "90-minute ticket (1.20€), Daily (4.10€), or 3-day Tourist pass (22€) which includes 2 airport trips. Works with tap & go on buses/trams.",
            el: "90λεπτο (1,20€), Ημερήσιο (4,10€), 3ήμερο τουριστικό + 2 διαδρομές αεροδρομίου (22€). Λειτουργεί και tap & go με κάρτα τράπεζας.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions & experiences",
        el: "Top αξιοθέατα & εμπειρίες (με μικρά μυστικά)",
      },
      layout: "list",
      items: [
        {
          title: { en: "Acropolis (UNESCO)", el: "Ακρόπολη (UNESCO)" },
          text: {
            en: "Entry is now via selected time slots. Secret: Go very early or near closing. For a free panorama, climb the neighboring Areopagus or Philopappos hills.",
            el: "Πλέον η είσοδος γίνεται με επιλεγμένο time slot. Μυστικό: πήγαινε πολύ νωρίς, και για “θέα χωρίς εισιτήριο” ανέβα τον Άρειο Πάγο ή του Φιλοπάππου.",
          },
        },
        {
          title: { en: "Acropolis Museum", el: "Μουσείο Ακρόπολης" },
          text: {
            en: "Showcases findings exclusively from the Acropolis. Secret: Do it backwards from the crowd—museum first, then the rock. Also, Friday evenings often have extended hours.",
            el: "Φιλοξενεί ευρήματα αποκλειστικά από την Ακρόπολη. Μυστικό: Κάνε το ανάποδο—πρώτα μουσείο, μετά Ακρόπολη. Πέτυχε Παρασκευή βράδυ με διευρυμένο ωράριο.",
          },
        },
        {
          title: { en: "Ancient Agora", el: "Αρχαία Αγορά" },
          text: {
            en: "The ancient heart of Athens. Houses the Stoa of Attalos and the Temple of Hephaestus. Secret: Often more tranquil and spacious than the Acropolis.",
            el: "Εκεί που “γεννήθηκε” η πόλη ως ιδέα. Μουσείο στη Στοά Αττάλου και Ναός Ηφαίστου. Μυστικό: Πολλές φορές είναι πιο ευχάριστη και ήρεμη από την Ακρόπολη.",
          },
        },
        {
          title: { en: "Plaka & Anafiotika", el: "Πλάκα & Αναφιώτικα" },
          text: {
            en: "The island-like breath below the Acropolis. Secret: Go in the morning before it heats up. The small side alleys are the real prize.",
            el: "Η “νησιώτικη” ανάσα μέσα στο κέντρο. Μυστικό: Πήγαινε πρωί. Είναι άλλο μέρος πριν “ζεστάνει” η μέρα, και τα μικρά στενάκια είναι το πραγματικό έπαθλο.",
          },
        },
        {
          title: { en: "Monastiraki Flea Market", el: "Μοναστηράκι & Flea Market" },
          text: {
            en: "Athens in fast-forward. Ifestou street is the artery. Secret: Sunday is festive but crowded; weekdays allow for better walking.",
            el: "Η παλιότερη flea market περιοχή. Μυστικό: Κυριακή γίνεται πιο “πανηγύρι”, αλλά τις καθημερινές έχει πιο εύκολο περπάτημα.",
          },
        },
        {
          title: { en: "Varvakios Central Market", el: "Βαρβάκειος (Κεντρική Αγορά)" },
          text: {
            en: "The stomach of the city, operating since 1884. Secret: Go in the morning when the market is genuinely working.",
            el: "Το “στομάχι” της πόλης (λειτουργεί από το 1884). Μυστικό: Πήγαινε πρωί. Είναι η ώρα που η αγορά δουλεύει πραγματικά.",
          },
        },
        {
          title: { en: "Lycabettus Hill", el: "Λυκαβηττός" },
          text: {
            en: "At 277m, offering the best 'Athens from above' view. Secret: Go just before sunset for golden hour, or just after for city lights.",
            el: "Θέα 277 μέτρων. Λειτουργεί και τελεφερίκ. Μυστικό: Αν δεν θες να στριμωχτείς, πήγαινε λίγο πριν (για χρυσό φως) ή μετά το ηλιοβασίλεμα (για φώτα).",
          },
        },
        {
          title: { en: "Panathenaic Stadium", el: "Παναθηναϊκό Στάδιο (Καλλιμάρμαρο)" },
          text: {
            en: "Venue of the 1896 Olympics. Secret: Sit on the marble bleachers for a few minutes; it’s one of the places you 'hear' the city differently.",
            el: "Ο χώρος των Ολυμπιακών Αγώνων του 1896. Μυστικό: Κάτσε λίγα λεπτά στις κερκίδες. Είναι από τα σημεία που “ακούς” την πόλη αλλιώς.",
          },
        },
        {
          title: { en: "National Archaeological Museum", el: "Εθνικό Αρχαιολογικό Μουσείο" },
          text: {
            en: "With vast collections of antiquities. Secret: If you have time for just one large museum, this gives you the full scope of ancient Greece.",
            el: "Μυστικό: Αν έχεις χρόνο μόνο για ένα “μεγάλο” μουσείο στην Αθήνα, αυτό σου δίνει όλο το εύρος της αρχαίας Ελλάδας σε μία επίσκεψη.",
          },
        },
        {
          title: { en: "Benaki Museum", el: "Μουσείο Μπενάκη" },
          text: {
            en: "Greece in one narrative from prehistoric times to the 20th century. Secret: A perfect air-conditioned cultural break when the heat gets to you.",
            el: "Η Ελλάδα σε μία αφήγηση. Μυστικό: Είναι τέλειο “διάλειμμα πόλης” όταν η ζέστη/κίνηση σε κουράζει.",
          },
        },
        {
          title: { en: "Stavros Niarchos Foundation Cultural Center (SNFCC)", el: "ΚΠΙΣΝ (Ίδρυμα Σταύρος Νιάρχος)" },
          text: {
            en: "The Athens of today. Huge park, National Library, and Opera. Secret: Go late afternoon, enjoy the park, and stay for an event.",
            el: "Δημόσιος χώρος με Εθνική Λυρική Σκηνή και Πάρκο. Μυστικό: Πήγαινε αργά απόγευμα, κάνε βόλτα στο κανάλι και τελείωσε με κάποια εκδήλωση.",
          },
        },
      ],
    },
    {
      title: {
        en: "Beaches & Coastal getaways",
        el: "Παραλίες & Μονοήμερες",
      },
      layout: "grid",
      alert: {
        en: "Day trip secret: If you only have one extra day, pick a Saronic island. The change of pace is huge without exhaustion.",
        el: "Μυστικό μονοήμερης: Αν έχεις μόνο μία έξτρα μέρα, προτίμησε νησιά (Σαρωνικός). Η αλλαγή αέρα είναι τεράστια και δεν σε διαλύει.",
      },
      items: [
        {
          title: { en: "The Athens Riviera via Tram", el: "Τραμ Προς Παραλία (Ριβιέρα)" },
          text: {
            en: "Take the tram from Syntagma to Faliro or Glyfada. Make it a ritual: morning in the center, afternoon by the sea.",
            el: "Διαδρομή από Σύνταγμα προς Παλαιό Φάληρο, Γλυφάδα, Βούλα. Κάν’ το σαν τελετουργία: πρωί κέντρο, απόγευμα θάλασσα.",
          },
        },
        {
          title: { en: "Lake Vouliagmeni", el: "Λίμνη Βουλιαγμένης" },
          text: {
            en: "Natural thermal spa (22-29°C year-round). Incredible value for shoulder season swimming.",
            el: "Θερμά νερά (22–29°C), φυσικό spa. Το πιο “value” πράγμα για κολύμπι την άνοιξη ή το φθινόπωρο.",
          },
        },
        {
          title: { en: "Sounio (Temple of Poseidon)", el: "Σούνιο (Ναός Ποσειδώνα)" },
          text: {
            en: "An unmissable sunset. Important: Last entry is 20 minutes before sunset.",
            el: "Μυστικό: Πήγαινε απόγευμα για το ηλιοβασίλεμα. Προσοχή, η τελευταία είσοδος είναι 20’ πριν τη δύση.",
          },
        },
        {
          title: { en: "Saronic Islands in a day", el: "Νησιά Σαρωνικού (1 Μέρα)" },
          text: {
            en: "Hydra, Poros, Aegina. Return to Athens for dinner. It gives you a strong taste of Greek island life quickly.",
            el: "Ύδρα, Πόρος, Αίγινα. Day trip που σου δίνει γεύση island hopping με επιστροφή για δείπνο σε Αθήνα/Πειραιά.",
          },
        },
      ],
    },
    {
      title: {
        en: "Food in Athens: Beyond the cliches",
        el: "Φαγητό στην Αθήνα (χωρίς κλισέ)",
      },
      layout: "list",
      alert: {
        en: "Food secret: The best places normally do a few things right rather than offering 25 pages of menu.",
        el: "Μικρό μυστικό: Αν μια ταβέρνα έχει 25 σελίδες μενού, σκέψου το. Τα καλύτερα σημεία συνήθως κάνουν λίγα πράγματα καλά.",
      },
      items: [
        {
          title: { en: "Souvlaki / Gyros", el: "Σουβλάκι / Γύρος" },
          text: {
            en: "The daily ritual. Secret: Don't eat it running. A 2-minute pause to eat it properly makes all the difference.",
            el: "Η καθημερινή ιεροτελεστία. Μυστικό: Μην το φας “τρέχοντας”. Φά’ το σαν Αθηναίος: 2 λεπτά στάση, μια χαρά—και μετά συνεχίζεις.",
          },
        },
        {
          title: { en: "Varvakios Market Food", el: "Βαρβάκειος & πέριξ" },
          text: {
            en: "After the market, have a raw, honest meal in the surrounding taverns. Perfect for straightforward food.",
            el: "Μετά την αγορά, κάνε “μικρό” γεύμα. Η περιοχή είναι για απλά, τίμια πράγματα με έντονο χαρακτήρα.",
          },
        },
        {
          title: { en: "Meze, Ouzo & Tsipouro", el: "Μεζέδες, Ουζάκια, Τσίπουρο" },
          text: {
            en: "Go to Psyrri/Monastiraki for nighttime vibes, the center for proximity, or Piraeus for seafood.",
            el: "Το κλειδί είναι η γειτονιά: Κέντρο για “όλα κοντά”, Μοναστηράκι/Ψυρρή για βράδυ, Πειραιάς για θαλασσινό χαρακτήρα.",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical Tips",
        el: "Πρακτικά Tips (που σώζουν)",
      },
      layout: "numbered",
      items: [
        {
          text: {
            en: "Book the Acropolis with a specific time slot and aim for the early morning.",
            el: "Κλείσε Ακρόπολη με time slot από το επίσημο site και πήγαινε νωρίς.",
          },
        },
        {
          text: {
            en: "Check museum hours, they often change between winter and summer seasonality.",
            el: "Μουσείο Ακρόπολης / Εθνικό Αρχαιολογικό: Έλεγχε πάντα το ωράριο ανά σεζόν, συχνά αλλάζει.",
          },
        },
        {
          text: {
            en: "Don't try to see everything. Athens is best with 2-3 main anchors per day and free time in between.",
            el: "Μην προσπαθείς να δεις τα πάντα. Η Αθήνα είναι καλύτερη με 2–3 “άγκυρες” την ημέρα και άφθονο χρόνο ανάμεσα.",
          },
        },
      ],
    },
    {
      title: {
        en: "Frequently Asked Questions",
        el: "FAQ – Συχνές ερωτήσεις για Αθήνα",
      },
      layout: "faq",
      items: [
        {
          title: { en: "How many days do I need?", el: "Πόσες μέρες χρειάζομαι;" },
          text: {
            en: "2 days for highlights, 3-4 days to include major museums/SNFCC, 5+ days to add Sounio or an island.",
            el: "2 μέρες για βασικά highlights, 3–4 μέρες για να προσθέσεις μουσεία/ΚΠΙΣΝ, 5+ μέρες αν θες Σούνιο/νησάκι.",
          },
        },
        {
          title: { en: "How do I get to the center cheaply?", el: "Πώς πάω από αεροδρόμιο στο κέντρο οικονομικά;" },
          text: {
            en: "Express buses (X95 to Syntagma) or the metro with an airport-specific ticket.",
            el: "Με express λεωφορεία (X95 προς Σύνταγμα) ή με μετρό με το ειδικό εισιτήριο αεροδρομίου (9€).",
          },
        },
        {
          title: { en: "Is there a beach nearby?", el: "Υπάρχει θάλασσα κοντά στην Αθήνα;" },
          text: {
            en: "Yes—the Athenian Riviera via tram, and Lake Vouliagmeni.",
            el: "Ναι—η Αθηναϊκή Ριβιέρα είναι προσβάσιμη με τραμ, και υπάρχει η Λίμνη Βουλιαγμένης.",
          },
        },
        {
          title: { en: "What if I only have one free afternoon?", el: "Τι να κάνω αν έχω μόνο ένα απόγευμα “ελεύθερο”;" },
          text: {
            en: "A walk around Plaka and Anafiotika, or visit the SNFCC.",
            el: "Βόλτα σε Πλάκα/Αναφιώτικα ή να πας στο ΚΠΙΣΝ (Ίδρυμα Σταύρος Νιάρχος).",
          },
        },
        {
          title: { en: "Are there major events year-round?", el: "Υπάρχουν μεγάλα events μέσα στη χρονιά;" },
          text: {
            en: "Yes—Athens & Epidaurus Festival (summer) and the Authentic Marathon (November).",
            el: "Ναι—Φεστιβάλ Αθηνών & Επιδαύρου (καλοκαίρι) και ο Αυθεντικός Μαραθώνιος (Νοέμβριο).",
          },
        },
      ],
    },
  ],

  paros: [
    {
      title: { en: "Why Visit Paros", el: "Γιατί να επισκεφθείς την Πάρο" },
      text: { 
        en: "Paros is a strong choice for travelers who want a Greek island with real variety. For many people, Paros feels like one of the easiest islands to recommend because it does not rely on just one thing. It is not only about nightlife, not only about luxury, and not only about beaches. It is more balanced than that.",
        el: "Η Πάρος είναι μια εξαιρετική επιλογή για ταξιδιώτες που θέλουν ένα ελληνικό νησί με πραγματική ποικιλία. Για πολλούς, είναι από τα πιο εύκολα νησιά να προτείνει κανείς γιατί δεν βασίζεται σε ένα μόνο πράγμα. Δεν αφορά μόνο τη νυχτερινή ζωή, ούτε μόνο την πολυτέλεια, ούτε μόνο τις παραλίες. Είναι πολύ πιο ισορροπημένη από αυτό." 
      },
      layout: "list",
      items: [
        {
          title: { en: "Attractive villages and harbor towns", el: "Γραφικά χωριά και λιμανάκια" },
          text: { en: "Naoussa and Parikia offer some of the best walking and dining experiences in the Cyclades.", el: "Η Νάουσα και η Παροικιά προσφέρουν μερικές από τις καλύτερες εμπειρίες περιπάτου και φαγητού στις Κυκλάδες." }
        },
        {
          title: { en: "A good balance between style and simplicity", el: "Ισορροπία ανάμεσα στο στιλ και την απλότητα" },
          text: { en: "It blends cosmopolitan elegance with traditional Aegean charm seamlessly.", el: "Συνδυάζει την κοσμοπολίτικη κομψότητα με την παραδοσιακή γοητεία του Αιγαίου αρμονικά." }
        },
        {
          title: { en: "Dining and nightlife without feeling too extreme", el: "Φαγητό και διασκέδαση χωρίς ακρότητες" },
          text: { en: "You can find vibrant bars in Naoussa or quiet tavernas by the sea, offering the perfect mix.", el: "Μπορείς να βρεις ζωντανά μπαρ στη Νάουσα ή ήσυχες ταβέρνες δίπλα στο κύμα, προσφέροντας το τέλειο μείγμα." }
        },
        {
          title: { en: "A central Cyclades location", el: "Κεντρική τοποθεσία στις Κυκλάδες" },
          text: { en: "Its position makes island travel and day trips significantly easier.", el: "Η θέση της καθιστά το island hopping και τις ημερήσιες εκδρομές πολύ πιο εύκολες." }
        }
      ]
    },
    {
      title: { en: "Best Areas and Highlights in Paros", el: "Οι καλύτερες περιοχές και σημεία της Πάρου" },
      layout: "grid",
      items: [
        {
          title: { en: "Naoussa", el: "Νάουσα" },
          text: { en: "Naoussa is the island's most stylish and photogenic base. It combines a charming harbor setting with whitewashed lanes, restaurants, bars, boutique atmosphere, and easy access to some of Paros' most popular beaches.", el: "Η Νάουσα είναι η πιο κομψή και φωτογενής βάση του νησιού. Συνδυάζει το γραφικό λιμανάκι με τα λευκά σοκάκια, τα εστιατόρια, τα μπαρ και την εύκολη πρόσβαση στις δημοφιλείς παραλίες." }
        },
        {
          title: { en: "Parikia", el: "Παροικιά" },
          text: { en: "Parikia is the main port town and often the most practical base. It has a more everyday island feel, good dining, local life, transport convenience, and a historic old town area that still feels pleasant to explore.", el: "Η Παροικιά είναι το κεντρικό λιμάνι και η πιο πρακτική βάση. Έχει πιο καθημερινή νησιωτική αίσθηση, καλό φαγητό, τοπική ζωή, συγκοινωνίες και μια ιστορική παλιά πόλη που χαίρεσαι να εξερευνάς." }
        },
        {
          title: { en: "Lefkes", el: "Λεύκες" },
          text: { en: "Lefkes offers a different side of Paros. Inland, quieter, and more traditional, it brings out the village character of the island and adds depth beyond the beach-and-harbor picture many visitors initially expect.", el: "Οι Λεύκες προσφέρουν μια άλλη πλευρά της Πάρου. Πιο ορεινές, ήσυχες και παραδοσιακές, αναδεικνύουν τον χωριάτικο χαρακτήρα του νησιού και προσθέτουν βάθος πέρα από την εικόνα της παραλίας." }
        },
        {
          title: { en: "Golden Beach (Southeast)", el: "Χρυσή Ακτή & Νοτιοανατολικά" },
          text: { en: "This part of the island is ideal for beach-focused stays, especially for travelers who want a calmer base and easy access to long sandy stretches.", el: "Αυτό το τμήμα του νησιού είναι ιδανικό για όσους εστιάζουν στις παραλίες, ειδικά για ταξιδιώτες που θέλουν μια πιο ήρεμη βάση και εύκολη πρόσβαση σε μεγάλες αμμουδιές." }
        }
      ]
    },
    {
      title: { en: "Beaches and Attractions in Paros", el: "Παραλίες και Αξιοθέατα στην Πάρο" },
      text: { en: "Paros has enough beach variety to keep different travel styles happy. Some beaches feel organized and easy, while others feel softer and more open.", el: "Η Πάρος έχει αρκετή ποικιλία παραλιών για να ικανοποιήσει διαφορετικά στιλ διακοπών. Κάποιες είναι οργανωμένες και εύκολες, ενώ άλλες πιο ήσυχες και ανοιχτές." },
      layout: "list",
      items: [
        {
          title: { en: "Kolymbithres", el: "Κολυμπήθρες" },
          text: { en: "Famous for its unusual rock formations and scenic setting, this is one of the most recognizable beach landscapes on the island.", el: "Διάσημη για τους ασυνήθιστους βραχώδεις σχηματισμούς και το γραφικό της περιβάλλον, είναι ένα από τα πιο αναγνωρίσιμα παραθαλάσσια τοπία του νησιού." }
        },
        {
          title: { en: "Golden Beach", el: "Χρυσή Ακτή" },
          text: { en: "One of the island's most famous beach areas, known for its wide stretch of sand and easy holiday feel.", el: "Μία από τις πιο γνωστές παραλίες του νησιού, φημισμένη για τη μεγάλη αμμουδιά της και τη χαλαρή αίσθηση διακοπών." }
        },
        {
          title: { en: "Santa Maria", el: "Σάντα Μαρία" },
          text: { en: "Popular and lively, especially in summer, with a more active beach atmosphere.", el: "Δημοφιλής και ζωντανή, ειδικά το καλοκαίρι, με μια πιο δραστήρια και beach-club ατμόσφαιρα." }
        },
        {
          title: { en: "Naoussa harbor", el: "Λιμανάκι της Νάουσας" },
          text: { en: "Naoussa is one of the strongest visual highlights of Paros and a major part of its appeal, especially in the evening.", el: "Η Νάουσα είναι ένα από τα πιο δυνατά οπτικά highlights της Πάρου και μεγάλο μέρος της γοητείας της, ειδικά το βράδυ." }
        }
      ]
    },
    {
      title: { en: "Food and Local Flavors in Paros", el: "Φαγητό και Τοπικές Γεύσεις στην Πάρο" },
      text: { en: "Paros is a very enjoyable island for food, especially if you like the combination of island simplicity and slightly more polished dining settings. Food here is part of the island's appeal, but it usually feels approachable rather than overly formal.", el: "Η Πάρος είναι ένα πολύ απολαυστικό νησί για φαγητό, ειδικά αν σου αρέσει ο συνδυασμός της νησιωτικής απλότητας με πιο προσεγμένα περιβάλλοντα εστίασης. Το φαγητό είναι κομμάτι της γοητείας του, αλλά παραμένει προσιτό και όχι υπερβολικά στημένο." },
      layout: "list",
      items: [
        {
          title: { en: "Waterfront seafood meals", el: "Θαλασσινά δίπλα στο νερό" },
          text: { en: "Enjoying fresh fish and traditional meze right by the fishing boats in Naoussa or Piso Livadi.", el: "Απόλαυσε φρέσκο ψάρι και παραδοσιακούς μεζέδες δίπλα στις ψαρόβαρκες στη Νάουσα ή στο Πίσω Λιβάδι." }
        },
        {
          title: { en: "Traditional tavern dishes", el: "Παραδοσιακά πιάτα σε ταβέρνες" },
          text: { en: "Look for local specialties like Gouna (sun-dried mackerel) and classic Cycladic summer dining in inland villages.", el: "Αναζήτησε τοπικές σπεσιαλιτέ όπως η Γούνα (λιαστό σκουμπρί) και κλασικό κυκλαδίτικο φαγητό στα ορεινά χωριά." }
        },
        {
          title: { en: "Stylish dinner settings", el: "Κομψά δείπνα σε Νάουσα και Παροικιά" },
          text: { en: "Some of the best moments in Paros are simple: fresh fish, shared plates, and long evening meals by the harbor.", el: "Μερικές από τις καλύτερες στιγμές στην Πάρο είναι απλές: φρέσκο ψάρι, πιάτα στη μέση και μεγάλα βραδινά τραπέζια στο λιμάνι." }
        }
      ]
    },
    {
      title: { en: "Where to Stay in Paros", el: "Πού να μείνεις στην Πάρο" },
      text: { en: "Where you stay in Paros will shape the kind of trip you have.", el: "Η περιοχή που θα επιλέξεις να μείνεις θα διαμορφώσει το είδος των διακοπών σου." },
      layout: "list",
      items: [
        {
          title: { en: "Stay in Naoussa if...", el: "Μείνε στη Νάουσα αν..." },
          text: { en: "You want atmosphere, restaurants, harbor life, and stylish but still relaxed evenings in one of the island's most attractive bases.", el: "Θέλεις ατμόσφαιρα, εστιατόρια, ζωή στο λιμάνι και κομψά αλλά χαλαρά βράδια σε μια από τις πιο όμορφες βάσεις." }
        },
        {
          title: { en: "Stay in Parikia if...", el: "Μείνε στην Παροικιά αν..." },
          text: { en: "You want convenience, easier transport connections, a practical base with town life, and are arriving without wanting complicated logistics.", el: "Θέλεις ευκολία στις μετακινήσεις, μια πρακτική βάση με ζωή πόλης και απλότητα στον προγραμματισμό σου." }
        },
        {
          title: { en: "Stay near Golden Beach if...", el: "Μείνε κοντά στη Χρυσή Ακτή αν..." },
          text: { en: "Your trip is more beach-oriented, you want a quieter holiday base, and prefer slower days with direct sea access.", el: "Το ταξίδι σου είναι προσανατολισμένο στις παραλίες, θέλεις πιο ήρεμη βάση και προτιμάς αργές μέρες με άμεση πρόσβαση στη θάλασσα." }
        }
      ]
    },
    {
      title: { en: "Things to Do in Paros", el: "Τι να κάνεις στην Πάρο" },
      text: { en: "Paros is not an island that needs an overpacked itinerary, but it does reward a little planning. It works best when you leave room for both movement and stillness.", el: "Η Πάρος δεν είναι νησί που χρειάζεται ένα υπερβολικά φορτωμένο πρόγραμμα, αλλά ανταμείβει τον σωστό προγραμματισμό. Λειτουργεί καλύτερα όταν αφήνεις χρόνο τόσο για εξερεύνηση όσο και για ξεκούραση." },
      layout: "numbered",
      items: [
        {
          title: { en: "Explore Naoussa and Parikia on foot", el: "Εξερεύνησε τη Νάουσα και την Παροικιά με τα πόδια" },
          text: { en: "Get lost in the whitewashed alleys, discover small boutiques, and enjoy the classic Cycladic architecture.", el: "Χάσου στα ολόλευκα σοκάκια, ανακάλυψε μικρές μπουτίκ και απόλαυσε την κλασική κυκλαδίτικη αρχιτεκτονική." }
        },
        {
          title: { en: "Visit inland villages like Lefkes", el: "Επισκέψου ορεινά χωριά όπως οι Λεύκες" },
          text: { en: "Walk the Byzantine road and enjoy a slower, more traditional pace away from the sea.", el: "Περπάτησε το Βυζαντινό μονοπάτι και απόλαυσε έναν πιο αργό, παραδοσιακό ρυθμό μακριά από τη θάλασσα." }
        },
        {
          title: { en: "Take boat-based or sea-focused outings", el: "Κάνε θαλάσσιες εκδρομές" },
          text: { en: "A day trip to neighboring Antiparos is incredibly easy and highly recommended for a change of scenery.", el: "Μια ημερήσια εκδρομή στη γειτονική Αντίπαρο είναι εξαιρετικά εύκολη και συστήνεται ανεπιφύλακτα για αλλαγή παραστάσεων." }
        }
      ]
    },
    {
      title: { en: "Best Time to Visit Paros", el: "Η καλύτερη εποχή για την Πάρο" },
      layout: "list",
      items: [
        {
          title: { en: "June and September", el: "Ιούνιος και Σεπτέμβριος" },
          text: { en: "Especially attractive for many travelers because the weather is warm and the island often feels more balanced.", el: "Ιδιαίτερα ελκυστικοί μήνες, καθώς ο καιρός είναι ζεστός και το νησί έχει την τέλεια ισορροπία σε κόσμο και ρυθμό." }
        },
        {
          title: { en: "July and August", el: "Ιούλιος και Αύγουστος" },
          text: { en: "Bring the liveliest summer atmosphere, but also more people and higher energy.", el: "Φέρνουν την πιο έντονη καλοκαιρινή ατμόσφαιρα, αλλά μαζί και περισσότερο κόσμο και κίνηση." }
        },
        {
          title: { en: "Late spring and early autumn", el: "Αργά την άνοιξη και νωρίς το φθινόπωρο" },
          text: { en: "Can work very well for travelers who care more about atmosphere, walking, and relaxed exploration than peak beach heat.", el: "Λειτουργούν άψογα για όσους ενδιαφέρονται περισσότερο για την ατμόσφαιρα, το περπάτημα και τη χαλαρή εξερεύνηση παρά για την πολλή ζέστη." }
        }
      ]
    },
    {
      title: { en: "FAQ About Paros", el: "Συχνές Ερωτήσεις για την Πάρο" },
      layout: "faq",
      items: [
        {
          title: { en: "Is Paros worth visiting?", el: "Αξίζει να επισκεφθώ την Πάρο;" },
          text: { en: "Yes. Paros is one of the most balanced Greek islands for travelers who want beaches, villages, food, and a relaxed but attractive atmosphere.", el: "Ναι. Η Πάρος είναι από τα πιο ισορροπημένα νησιά για ταξιδιώτες που θέλουν παραλίες, χωριά, καλό φαγητό και μια χαλαρή αλλά κομψή ατμόσφαιρα." }
        },
        {
          title: { en: "Is Paros better for couples or families?", el: "Η Πάρος είναι καλύτερη για ζευγάρια ή οικογένειες;" },
          text: { en: "It can work for both. That is part of its strength. Some areas feel more stylish and lively, while others are calmer and more practical.", el: "Λειτουργεί και για τα δύο. Αυτό είναι το δυνατό της σημείο. Κάποιες περιοχές είναι πιο κοσμικές, ενώ άλλες πιο ήρεμες και πρακτικές." }
        },
        {
          title: { en: "How many days do you need in Paros?", el: "Πόσες μέρες χρειάζονται στην Πάρο;" },
          text: { en: "A few days can give you a good impression, but Paros is better when you have enough time to enjoy both beaches and villages without rushing (ideally 4-6 days).", el: "Λίγες μέρες δίνουν μια καλή εικόνα, αλλά η Πάρος είναι ιδανική όταν έχεις χρόνο να απολαύσεις παραλίες και χωριά χωρίς βιασύνη (ιδανικά 4-6 μέρες)." }
        },
        {
          title: { en: "Where should first-time visitors stay?", el: "Πού να μείνουν όσοι την επισκέπτονται πρώτη φορά;" },
          text: { en: "Naoussa and Parikia are the most common starting points, depending on whether you want atmosphere or practicality.", el: "Η Νάουσα και η Παροικιά είναι τα πιο συνηθισμένα σημεία εκκίνησης, ανάλογα με το αν θέλεις περισσότερη ατμόσφαιρα ή πρακτικότητα." }
        }
      ]
    }
  ],
  milos: [
    {
      title: { en: "Why Visit Milos", el: "Γιατί να επισκεφθείς τη Μήλο" },
      text: { 
        en: "Milos is ideal for travelers who want a more distinctive island landscape. This is not an island you visit only to sit in one town the whole time. Milos is best when you move around and let the coastline shape the trip.",
        el: "Η Μήλος είναι ιδανική για ταξιδιώτες που θέλουν ένα πιο ξεχωριστό τοπίο. Δεν είναι ένα νησί που το επισκέπτεσαι μόνο για να κάθεσαι σε ένα μέρος. Η Μήλος είναι στα καλύτερά της όταν κινείσαι και αφήνεις την ακτογραμμή να καθοδηγήσει το ταξίδι." 
      },
      layout: "list",
      items: [
        {
          title: { en: "Exceptional beach variety", el: "Εξαιρετική ποικιλία παραλιών" },
          text: { en: "The geology creates bays, caves, and lunar landscapes that look entirely different from each other.", el: "Η γεωλογία δημιουργεί κόλπους, σπηλιές και σεληνιακά τοπία που διαφέρουν εντελώς το ένα από το άλλο." }
        },
        {
          title: { en: "Dramatic coastal scenery", el: "Εντυπωσιακό παραθαλάσσιο τοπίο" },
          text: { en: "The raw beauty of its volcanic cliffs and turquoise waters is unmatched in the Cyclades.", el: "Η άγρια ομορφιά των ηφαιστειακών γκρεμών και των τυρκουάζ νερών είναι ασύγκριτη στις Κυκλάδες." }
        },
        {
          title: { en: "Boat experiences and exploration-led days", el: "Εμπειρίες με σκάφος και ημέρες εξερεύνησης" },
          text: { en: "Some of the best parts of the island, like Kleftiko, are accessible only by sea.", el: "Ορισμένα από τα καλύτερα σημεία του νησιού, όπως το Κλέφτικο, είναι προσβάσιμα μόνο από τη θάλασσα." }
        },
        {
          title: { en: "Quieter Cycladic charm", el: "Πιο ήσυχη κυκλαδίτικη γοητεία" },
          text: { en: "It offers authentic village life without the extreme commercialization of bigger islands.", el: "Προσφέρει αυθεντική ζωή στα χωριά χωρίς την ακραία εμπορευματοποίηση των μεγαλύτερων νησιών." }
        }
      ]
    },
    {
      title: { en: "Best Areas and Highlights in Milos", el: "Οι καλύτερες περιοχές και σημεία της Μήλου" },
      text: { en: "Much of the character of Milos comes from the coastline itself rather than from one dominant town. The beaches and sea-access areas are the real stars here.", el: "Μεγάλο μέρος του χαρακτήρα της Μήλου προέρχεται από την ίδια την ακτογραμμή παρά από κάποια κυρίαρχη πόλη. Οι παραλίες και η θάλασσα είναι οι πραγματικοί πρωταγωνιστές εδώ." },
      layout: "grid",
      items: [
        {
          title: { en: "Adamas", el: "Αδάμας" },
          text: { en: "Adamas is the island's main port and the most practical base for many visitors. It offers convenience, accommodation options, dining, and easy access for arrivals and departures.", el: "Ο Αδάμας είναι το κεντρικό λιμάνι και η πιο πρακτική βάση. Προσφέρει ευκολία, επιλογές διαμονής, φαγητό και άμεση πρόσβαση για αφίξεις/αναχωρήσεις." }
        },
        {
          title: { en: "Plaka", el: "Πλάκα" },
          text: { en: "Plaka gives you one of the most charming village settings on the island, with Cycladic lanes, elevated views, and a more classic island feel.", el: "Η Πλάκα προσφέρει ένα από τα πιο όμορφα χωριάτικα σκηνικά, με κυκλαδίτικα σοκάκια, υπέροχη θέα από ψηλά και κλασική νησιωτική αίσθηση." }
        },
        {
          title: { en: "Pollonia", el: "Πολλώνια" },
          text: { en: "Pollonia is one of the island's most appealing relaxed bases, especially for travelers who want a calmer coastal atmosphere and an easy holiday pace.", el: "Τα Πολλώνια είναι μια από τις πιο ελκυστικές και χαλαρές βάσεις, ιδανική για όσους θέλουν ήρεμη παραθαλάσσια ατμόσφαιρα και αργό ρυθμό." }
        },
        {
          title: { en: "The colorful Syrmata", el: "Τα πολύχρωμα Σύρματα" },
          text: { en: "Villages like Klima and Firopotamos feature unique 'syrmata' — traditional fishermen's houses carved into the rocks with brightly painted doors.", el: "Χωριά όπως το Κλήμα και ο Φυροπόταμος διαθέτουν τα μοναδικά 'σύρματα' — παραδοσιακά σπίτια ψαράδων σκαλισμένα στα βράχια με πολύχρωμες πόρτες." }
        }
      ]
    },
    {
      title: { en: "Beaches and Attractions in Milos", el: "Παραλίες και Αξιοθέατα στη Μήλο" },
      text: { en: "This is where Milos becomes especially distinctive. The island works best if you build the trip around its varied coastline.", el: "Εδώ είναι που η Μήλος γίνεται πραγματικά ξεχωριστή. Το νησί προσφέρει τα μέγιστα αν χτίσεις το ταξίδι σου γύρω από την ποικιλόμορφη ακτογραμμή της." },
      layout: "list",
      items: [
        {
          title: { en: "Sarakiniko", el: "Σαρακίνικο" },
          text: { en: "The island's most iconic landscape, with white volcanic formations and a setting that feels unlike almost anywhere else in Greece.", el: "Το πιο εμβληματικό τοπίο του νησιού, με λευκούς ηφαιστειακούς σχηματισμούς που δεν μοιάζουν με σχεδόν τίποτα άλλο στην Ελλάδα." }
        },
        {
          title: { en: "Kleftiko", el: "Κλέφτικο" },
          text: { en: "One of the most famous sea experiences around Milos, known for dramatic rock formations and crystal-clear waters. Best accessed by a boat trip.", el: "Μια από τις πιο διάσημες θαλάσσιες εμπειρίες, γνωστό για τους εντυπωσιακούς βράχους και τα κρυστάλλινα νερά. Προσεγγίζεται ιδανικά με σκάφος." }
        },
        {
          title: { en: "Firopotamos", el: "Φυροπόταμος" },
          text: { en: "A smaller coastal setting that combines water, charm, and a picturesque atmosphere.", el: "Ένα μικρότερο παραθαλάσσιο σκηνικό που συνδυάζει κρυστάλλινα νερά με γραφική ατμόσφαιρα." }
        },
        {
          title: { en: "Plaka and its viewpoints", el: "Η Πλάκα και η θέα της" },
          text: { en: "If you want one of the island's best overall visual impressions and a stunning sunset, this is a key area to include.", el: "Αν αναζητάς μία από τις καλύτερες οπτικές εντυπώσεις του νησιού και ένα εκπληκτικό ηλιοβασίλεμα, η Πλάκα είναι must." }
        }
      ]
    },
    {
      title: { en: "Food and Local Flavors in Milos", el: "Φαγητό και Γεύσεις στη Μήλο" },
      text: { en: "Food in Milos is often less about urban dining variety and more about atmosphere, simplicity, and memorable meals in the right setting. Harbor-side seafood, village tavern meals, and relaxed dinners after a beach day tend to define the food experience.", el: "Το φαγητό στη Μήλο δεν έχει να κάνει με τεράστια ποικιλία εστιατορίων, αλλά με την ατμόσφαιρα, την απλότητα και το σωστό σκηνικό. Θαλασσινά δίπλα στο λιμάνι, ταβέρνες σε χωριά και χαλαρά δείπνα μετά την παραλία καθορίζουν την εμπειρία." },
      layout: "list",
      items: [
        {
          title: { en: "Pitarakia & Local Cheeses", el: "Πιταράκια & Τοπικά τυριά" },
          text: { en: "Traditional small pies filled with local cheese (manoura) and herbs.", el: "Παραδοσιακές μικρές πίτες γεμιστές με τοπικό τυρί (μανούρα) και μυρωδικά." }
        },
        {
          title: { en: "Watermelon pie (Karpouzopita)", el: "Καρπουζόπιτα" },
          text: { en: "A unique, sweet and savory traditional pie made from watermelon, honey, and sesame.", el: "Μια μοναδική, γλυκιά και αλμυρή παραδοσιακή πίτα με καρπούζι, μέλι και σουσάμι." }
        },
        {
          title: { en: "Honest Greek food in scenic surroundings", el: "Τίμιο ελληνικό φαγητό σε γραφικό περιβάλλον" },
          text: { en: "This is an island where setting matters: the sea nearby, a simple table, a sunset, and the feeling that you do not need much more.", el: "Εδώ το σκηνικό μετράει: η θάλασσα δίπλα, ένα απλό τραπέζι, το ηλιοβασίλεμα, και η αίσθηση ότι δεν χρειάζεσαι τίποτα παραπάνω." }
        }
      ]
    },
    {
      title: { en: "Where to Stay in Milos", el: "Πού να μείνεις στη Μήλο" },
      text: { en: "Where you stay in Milos should depend on the pace and style of trip you want.", el: "Η επιλογή διαμονής θα πρέπει να εξαρτάται από τον ρυθμό και το στιλ διακοπών που επιθυμείς." },
      layout: "list",
      items: [
        {
          title: { en: "Stay in Adamas if...", el: "Μείνε στον Αδάμαντα αν..." },
          text: { en: "You want convenience and transport ease, you like having a practical base, and you are planning to move around the island a lot.", el: "Θέλεις ευκολία στις μετακινήσεις, σου αρέσει να έχεις μια πρακτική βάση και σκοπεύεις να γυρίσεις πολύ το νησί." }
        },
        {
          title: { en: "Stay in Pollonia if...", el: "Μείνε στα Πολλώνια αν..." },
          text: { en: "You want a quieter seaside atmosphere, you prefer a more relaxed and polished coastal base, and your trip is about slower island living.", el: "Θέλεις μια πιο ήσυχη παραθαλάσσια ατμόσφαιρα, προτιμάς μια κομψή βάση και το ταξίδι σου αφορά πιο αργούς ρυθμούς." }
        },
        {
          title: { en: "Stay near Plaka if...", el: "Μείνε κοντά στην Πλάκα αν..." },
          text: { en: "You want village character and views, and you prefer a more classic Cycladic setting.", el: "Θέλεις χωριάτικο χαρακτήρα, απίστευτη θέα και προτιμάς το κλασικό κυκλαδίτικο σκηνικό." }
        }
      ]
    },
    {
      title: { en: "Things to Do in Milos", el: "Τι να κάνεις στη Μήλο" },
      text: { en: "Milos is one of the strongest islands in Greece for travelers who enjoy a mix of beach exploration, scenic drives, and sea excursions.", el: "Η Μήλος είναι από τα πιο δυνατά νησιά για ταξιδιώτες που αγαπούν τον συνδυασμό εξερεύνησης παραλιών, γραφικών διαδρομών και θαλάσσιων εκδρομών." },
      layout: "numbered",
      items: [
        {
          title: { en: "Build your trip around its coastline", el: "Χτίσε το ταξίδι γύρω από την ακτογραμμή" },
          text: { en: "One of the most common mistakes is to think of Milos as a place where one beach is enough. Move between very different coastal settings to see its true variety.", el: "Συχνό λάθος είναι να πιστεύει κανείς ότι στη Μήλο αρκεί μία παραλία. Μετακινήσου σε διαφορετικά σημεία για να δεις την πραγματική ποικιλία της." }
        },
        {
          title: { en: "Take a boat tour to Kleftiko", el: "Κάνε εκδρομή με σκάφος στο Κλέφτικο" },
          text: { en: "Sailing around the island allows you to see the true scale of the volcanic cliffs and swim in caves.", el: "Κάνοντας τον γύρο του νησιού θα δεις το πραγματικό μέγεθος των ηφαιστειακών βράχων και θα κολυμπήσεις σε σπηλιές." }
        },
        {
          title: { en: "Wander around the Syrmata of Klima", el: "Περπάτησε στα Σύρματα του Κλήματος" },
          text: { en: "The colorful fisherman houses right on the water create one of the most picturesque spots in the Aegean.", el: "Τα πολύχρωμα σπιτάκια ακριβώς πάνω στο νερό συνθέτουν ένα από τα πιο γραφικά σημεία στο Αιγαίο." }
        }
      ]
    },
    {
      title: { en: "Best Time to Visit Milos", el: "Η καλύτερη εποχή για τη Μήλο" },
      text: { en: "Because so much of Milos revolves around sea conditions and coastal exploring, weather and wind matter more here than on some other islands.", el: "Επειδή μεγάλο μέρος της Μήλου βασίζεται στη θάλασσα και την εξερεύνηση των ακτών, ο καιρός και ο άνεμος παίζουν μεγαλύτερο ρόλο εδώ απ' ό,τι σε άλλα νησιά." },
      layout: "list",
      items: [
        {
          title: { en: "June and September", el: "Ιούνιος και Σεπτέμβριος" },
          text: { en: "Often offer one of the best balances of weather and pace, ideal for boat tours with calmer winds.", el: "Προσφέρουν την καλύτερη ισορροπία καιρού και ρυθμού, ιδανικοί μήνες για εκδρομές με σκάφος λόγω πιο ήπιων ανέμων." }
        },
        {
          title: { en: "July and August", el: "Ιούλιος και Αύγουστος" },
          text: { en: "Bring the strongest summer energy and busiest beaches. The Meltemi winds can be stronger during this time.", el: "Έχουν την πιο έντονη καλοκαιρινή ενέργεια. Οι άνεμοι (μελτέμια) μπορεί να είναι πιο ισχυροί αυτή την περίοδο." }
        },
        {
          title: { en: "Shoulder season (May & October)", el: "Μάιος & Οκτώβριος" },
          text: { en: "Excellent for travelers who care about scenery, walking, and a calmer atmosphere.", el: "Εξαιρετικοί μήνες για όσους ενδιαφέρονται για το τοπίο, το περπάτημα και μια πολύ πιο ήρεμη ατμόσφαιρα." }
        }
      ]
    },
    {
      title: { en: "FAQ About Milos", el: "Συχνές Ερωτήσεις για τη Μήλο" },
      layout: "faq",
      items: [
        {
          title: { en: "Is Milos worth visiting?", el: "Αξίζει να επισκεφθώ τη Μήλο;" },
          text: { en: "Yes. Milos is one of the most visually distinctive islands in Greece and is especially rewarding for travelers who care about beaches, scenery, and sea-based experiences.", el: "Ναι. Η Μήλος είναι ένα από τα πιο οπτικά ξεχωριστά νησιά της Ελλάδας και ανταμείβει όσους ενδιαφέρονται για παραλίες, τοπία και θαλάσσιες εμπειρίες." }
        },
        {
          title: { en: "What is Milos best known for?", el: "Για τι φημίζεται η Μήλος;" },
          text: { en: "It is best known for its dramatic coastline, Sarakiniko, boat-access scenery (Kleftiko), and unusual beach landscapes.", el: "Είναι πιο γνωστή για την εντυπωσιακή της ακτογραμμή, το Σαρακίνικο, τα τοπία προσβάσιμα με σκάφος (όπως το Κλέφτικο) και τις ασυνήθιστες παραλίες." }
        },
        {
          title: { en: "How many days should you spend in Milos?", el: "Πόσες μέρες πρέπει να μείνω στη Μήλο;" },
          text: { en: "Milos is better with enough time to explore more than one area and to include both beaches and boat experiences (at least 4-5 days).", el: "Η Μήλος απαιτεί αρκετό χρόνο για να εξερευνήσεις διαφορετικές περιοχές, παραλίες και να κάνεις εκδρομή με σκάφος (τουλάχιστον 4-5 μέρες)." }
        },
        {
          title: { en: "Is Milos better for couples or families?", el: "Είναι καλύτερη για ζευγάρια ή οικογένειες;" },
          text: { en: "It can work for both, but it is especially strong for couples and travelers who enjoy exploration and scenery-led trips.", el: "Κάνει και για τα δύο, αλλά είναι ιδιαίτερα δυνατή επιλογή για ζευγάρια και ταξιδιώτες που αγαπούν την εξερεύνηση." }
        },
        {
          title: { en: "Do you need a car in Milos?", el: "Χρειάζομαι αυτοκίνητο στη Μήλο;" },
          text: { en: "Many travelers find it useful, because the island's appeal is spread across different areas and beaches.", el: "Ναι, οι περισσότεροι ταξιδιώτες το βρίσκουν απαραίτητο, γιατί η ομορφιά του νησιού είναι απλωμένη σε διάφορες παραλίες και περιοχές." }
        }
      ]
    }
  ],
  zakynthos: [
    {
      title: { en: "Why Visit Zakynthos", el: "Γιατί να επισκεφθείς τη Ζάκυνθο" },
      text: { 
        en: "Zakynthos is a strong choice for travelers who want a mix of famous scenic beaches, boat trips, and clear Ionian waters. It is one of those islands where the sea shapes the whole trip.",
        el: "Η Ζάκυνθος είναι μια δυνατή επιλογή για ταξιδιώτες που αναζητούν διάσημες γραφικές παραλίες, εκδρομές με σκάφος και τα κρυστάλλινα νερά του Ιονίου. Είναι από τα νησιά όπου η θάλασσα καθορίζει όλο το ταξίδι." 
      },
      layout: "list",
      items: [
        {
          title: { en: "Famous scenic beaches and viewpoints", el: "Διάσημες γραφικές παραλίες και σημεία θέας" },
          text: { en: "Home to iconic spots like Navagio that define the Greek island experience.", el: "Φιλοξενεί εμβληματικά σημεία όπως το Ναυάγιο, που ορίζουν την εμπειρία των ελληνικών νησιών." }
        },
        {
          title: { en: "Boat trips and sea-based experiences", el: "Εκδρομές με σκάφος και θαλάσσιες εμπειρίες" },
          text: { en: "Exploring the island by boat is an essential part of the trip.", el: "Η εξερεύνηση του νησιού με σκάφος είναι αναπόσπαστο κομμάτι του ταξιδιού." }
        },
        {
          title: { en: "Clear Ionian waters and dramatic coastline", el: "Κρυστάλλινα νερά και εντυπωσιακή ακτογραμμή" },
          text: { en: "The raw beauty of its coastal edge leaves a lasting impression.", el: "Η άγρια ομορφιά των ακτών της αφήνει μια μόνιμη εντύπωση." }
        },
        {
          title: { en: "A mix of lively and relaxed holiday areas", el: "Συνδυασμός ζωντανών και ήρεμων περιοχών" },
          text: { en: "A destination that works perfectly for couples, families, and summer travelers alike.", el: "Ένας προορισμός που λειτουργεί άψογα για ζευγάρια, οικογένειες και κάθε είδους καλοκαιρινούς ταξιδιώτες." }
        }
      ]
    },
    {
      title: { en: "Best Areas and Highlights in Zakynthos", el: "Οι καλύτερες περιοχές και σημεία της Ζακύνθου" },
      layout: "grid",
      items: [
        {
          title: { en: "Zakynthos Town", el: "Πόλη της Ζακύνθου" },
          text: { en: "The island's capital and a practical base for travelers who want a more local feel, access to restaurants, and an easier connection to the island's wider road network.", el: "Η πρωτεύουσα του νησιού και πρακτική βάση για ταξιδιώτες που αναζητούν μια πιο τοπική αίσθηση, πρόσβαση σε εστιατόρια και ευκολότερη σύνδεση με το οδικό δίκτυο." }
        },
        {
          title: { en: "Tsilivi", el: "Τσιλιβί" },
          text: { en: "One of the island's most popular holiday areas, especially for travelers who want an easy beach base with restaurants, family-friendly options, and a balanced summer atmosphere.", el: "Μια από τις πιο δημοφιλείς περιοχές, ιδανική για όσους θέλουν μια εύκολη βάση με παραλία, εστιατόρια και μια ισορροπημένη καλοκαιρινή ατμόσφαιρα." }
        },
        {
          title: { en: "Vasilikos", el: "Βασιλικός" },
          text: { en: "Vasilikos offers a softer, greener, and often more relaxed side of Zakynthos. It suits travelers who want beaches, quieter surroundings, and a more laid-back holiday base.", el: "Ο Βασιλικός προσφέρει μια πιο πράσινη και ήρεμη πλευρά της Ζακύνθου. Ταιριάζει σε ταξιδιώτες που θέλουν όμορφες παραλίες και χαλαρό περιβάλλον." }
        },
        {
          title: { en: "Laganas & Northwest Coast", el: "Λαγανάς & Βορειοδυτική Ακτή" },
          text: { en: "Laganas serves those who want an energetic summer scene, while the northwest coast is essential for dramatic scenery and boat-based highlights.", el: "Ο Λαγανάς εξυπηρετεί όσους αναζητούν έντονη διασκέδαση, ενώ η βορειοδυτική ακτή είναι απαραίτητη για τα εντυπωσιακά τοπία και τις θαλάσσιες εκδρομές." }
        }
      ]
    },
    {
      title: { en: "Beaches and Attractions in Zakynthos", el: "Παραλίες και Αξιοθέατα στη Ζάκυνθο" },
      text: { en: "Zakynthos is above all a beach and sea destination, and many of its most memorable attractions are coastal.", el: "Η Ζάκυνθος είναι πάνω απ' όλα ένας προορισμός για παραλίες και θάλασσα, με πολλά από τα αξιοθέατά της να είναι καθαρά παραθαλάσσια." },
      layout: "list",
      items: [
        {
          title: { en: "Navagio Beach", el: "Παραλία Ναυάγιο" },
          text: { en: "The island's most famous landmark. Even when access conditions vary, the viewpoint and the surrounding scenery remain major highlights.", el: "Το πιο διάσημο ορόσημο του νησιού. Ακόμα κι όταν η πρόσβαση είναι περιορισμένη, το σημείο θέας και το τοπίο παραμένουν κορυφαία." }
        },
        {
          title: { en: "Blue Caves", el: "Γαλάζιες Σπηλιές" },
          text: { en: "One of the best-known natural attractions in Zakynthos, especially popular through boat trips and sea excursions.", el: "Ένα από τα πιο γνωστά φυσικά αξιοθέατα της Ζακύνθου, ιδιαίτερα δημοφιλές μέσα από τις εκδρομές με σκάφος." }
        },
        {
          title: { en: "Gerakas Beach", el: "Παραλία Γέρακας" },
          text: { en: "A beautiful sandy beach known for its natural setting and its connection to the island's sea turtle environment.", el: "Μια όμορφη αμμώδης παραλία, γνωστή για το φυσικό της περιβάλλον και την παρουσία των θαλάσσιων χελωνών Caretta-Caretta." }
        },
        {
          title: { en: "Porto Limnionas & Cameo Island", el: "Πόρτο Λιμνιώνας & Άγιος Σώστης (Cameo)" },
          text: { en: "Scenic swimming spots that are more about a dramatic setting and unique water experiences than classic sandy beach days.", el: "Γραφικά σημεία για κολύμπι που εστιάζουν περισσότερο στο εντυπωσιακό τοπίο και την εμπειρία του νερού παρά στην κλασική αμμουδιά." }
        }
      ]
    },
    {
      title: { en: "Food and Local Flavors in Zakynthos", el: "Φαγητό και Γεύσεις στη Ζάκυνθο" },
      text: { en: "Zakynthos has the easy-going food rhythm that many travelers hope to find on a Greek island. The island's food scene is not only about refined dining, but the atmosphere around the meal.", el: "Η Ζάκυνθος έχει αυτόν τον χαλαρό ρυθμό στο φαγητό που όλοι αναζητούν σε ένα ελληνικό νησί. Το φαγητό εδώ βασίζεται κυρίως στην ατμόσφαιρα γύρω από το τραπέζι." },
      layout: "list",
      items: [
        {
          title: { en: "Seafood by the sea", el: "Θαλασσινά δίπλα στο κύμα" },
          text: { en: "Enjoying the catch of the day in a relaxed setting along the coast.", el: "Απόλαυσε φρέσκο ψάρι σε ένα χαλαρό περιβάλλον κατά μήκος των ακτών." }
        },
        {
          title: { en: "Relaxed tavern meals", el: "Χαλαρά γεύματα σε ταβέρνες" },
          text: { en: "Summer dinners in coastal resorts or more traditional inland settings.", el: "Καλοκαιρινά δείπνα σε παραθαλάσσια θέρετρα ή σε πιο παραδοσιακά χωριά της ενδοχώρας." }
        },
        {
          title: { en: "Simple Greek flavors", el: "Απλές ελληνικές γεύσεις" },
          text: { en: "Casual lunches after the beach, enjoying familiar local recipes in an easy holiday environment.", el: "Χαλαρά μεσημεριανά μετά την παραλία, απολαμβάνοντας τοπικές συνταγές σε καλοκαιρινή διάθεση." }
        }
      ]
    },
    {
      title: { en: "Where to Stay in Zakynthos", el: "Πού να μείνεις στη Ζάκυνθο" },
      text: { en: "Where you stay in Zakynthos will shape the tone of your holiday quite a lot.", el: "Η περιοχή που θα επιλέξεις να μείνεις θα διαμορφώσει σε μεγάλο βαθμό τον τόνο των διακοπών σου." },
      layout: "list",
      items: [
        {
          title: { en: "Stay in Tsilivi if...", el: "Μείνε στο Τσιλιβί αν..." },
          text: { en: "You want an easy and popular beach base, you like convenience, and you are traveling as a couple or family.", el: "Θέλεις μια εύκολη παραθαλάσσια βάση, σου αρέσει η άνεση και ταξιδεύεις ως ζευγάρι ή οικογένεια." }
        },
        {
          title: { en: "Stay in Zakynthos Town if...", el: "Μείνε στην Πόλη της Ζακύνθου αν..." },
          text: { en: "You prefer a more local and practical base, you want town life, and you plan to explore more of the island by car.", el: "Προτιμάς μια πιο πρακτική βάση με ζωή πόλης και σκοπεύεις να εξερευνήσεις το νησί με αυτοκίνητο." }
        },
        {
          title: { en: "Stay in Vasilikos if...", el: "Μείνε στον Βασιλικό αν..." },
          text: { en: "You want a quieter and greener part of the island, and your trip is more about beaches and relaxation.", el: "Αναζητάς μια πιο ήσυχη και πράσινη πλευρά του νησιού, εστιάζοντας στις παραλίες και τη χαλάρωση." }
        },
        {
          title: { en: "Stay in Laganas if...", el: "Μείνε στον Λαγανά αν..." },
          text: { en: "You specifically want a lively summer atmosphere where nightlife is an important part of your trip.", el: "Αναζητάς έντονη καλοκαιρινή διασκέδαση και η νυχτερινή ζωή είναι βασικό κομμάτι του ταξιδιού σου." }
        }
      ]
    },
    {
      title: { en: "Things to Do in Zakynthos", el: "Τι να κάνεις στη Ζάκυνθο" },
      text: { en: "Zakynthos is one of the islands where sea-based activity is a major part of the experience. The island works best when you do more than stay in one beach area.", el: "Στη Ζάκυνθο, οι δραστηριότητες γύρω από τη θάλασσα αποτελούν σημαντικό κομμάτι της εμπειρίας. Το νησί αναδεικνύεται καλύτερα όταν εξερευνάς διάφορα σημεία." },
      layout: "numbered",
      items: [
        {
          title: { en: "Take a boat trip along the coast", el: "Κάνε μια εκδρομή με σκάφος" },
          text: { en: "Visiting the Blue Caves and exploring scenic coastal spots is essential.", el: "Η επίσκεψη στις Γαλάζιες Σπηλιές και τις μαγευτικές ακτές είναι απαραίτητη εμπειρία." }
        },
        {
          title: { en: "Explore scenic beaches and viewpoints", el: "Εξερεύνησε σημεία θέας και παραλίες" },
          text: { en: "Enjoy coastal drives and take in the dramatic landscapes from above.", el: "Απόλαυσε παραθαλάσσιες διαδρομές και θαύμασε τα εντυπωσιακά τοπία από ψηλά." }
        },
        {
          title: { en: "Balance resort time with island exploration", el: "Συνδύασε ξεκούραση και εξερεύνηση" },
          text: { en: "Combine boat experiences with independent exploring and relaxed evenings in your base area.", el: "Συνδύασε τις θαλάσσιες εκδρομές με την αυτόνομη εξερεύνηση και τα χαλαρά βράδια." }
        }
      ]
    },
    {
      title: { en: "Best Time to Visit Zakynthos", el: "Η καλύτερη εποχή για τη Ζάκυνθο" },
      layout: "list",
      items: [
        {
          title: { en: "June and September", el: "Ιούνιος και Σεπτέμβριος" },
          text: { en: "Especially attractive for travelers who want warm weather with a slightly more balanced pace.", el: "Ιδιαίτερα ελκυστικοί μήνες για όσους αναζητούν ζεστό καιρό με πιο ισορροπημένους ρυθμούς." }
        },
        {
          title: { en: "July and August", el: "Ιούλιος και Αύγουστος" },
          text: { en: "Peak summer months with the busiest beaches and strongest holiday energy.", el: "Η καρδιά του καλοκαιριού με τις πιο πολυσύχναστες παραλίες και την πιο έντονη ενέργεια." }
        },
        {
          title: { en: "Late spring and early autumn", el: "Άνοιξη και φθινόπωρο" },
          text: { en: "Work very well for visitors who care about sightseeing, coastal drives, and a more relaxed atmosphere.", el: "Λειτουργούν πολύ καλά για όσους ενδιαφέρονται για αξιοθέατα, όμορφες διαδρομές και ηρεμία." }
        }
      ]
    },
    {
      title: { en: "FAQ About Zakynthos", el: "Συχνές Ερωτήσεις για τη Ζάκυνθο" },
      layout: "faq",
      items: [
        {
          title: { en: "Is Zakynthos worth visiting?", el: "Αξίζει να επισκεφθώ τη Ζάκυνθο;" },
          text: { en: "Yes. Zakynthos is one of the most visually attractive Ionian islands and is especially rewarding for travelers who love beaches and coastal experiences.", el: "Ναι. Η Ζάκυνθος είναι ένα από τα πιο όμορφα νησιά του Ιονίου και ανταμείβει όσους αγαπούν τις παραλίες και την ακτογραμμή." }
        },
        {
          title: { en: "What is Zakynthos best known for?", el: "Για τι φημίζεται η Ζάκυνθος;" },
          text: { en: "It is best known for Navagio Beach, the Blue Caves, turquoise waters, and its dramatic coastal scenery.", el: "Είναι γνωστή για το Ναυάγιο, τις Γαλάζιες Σπηλιές, τα γαλαζοπράσινα νερά και τα εντυπωσιακά της τοπία." }
        },
        {
          title: { en: "Is Zakynthos good for families?", el: "Είναι καλή για οικογένειες;" },
          text: { en: "Yes. Some parts of the island, such as Tsilivi and quieter beach areas, can work very well for families.", el: "Ναι. Ορισμένες περιοχές, όπως το Τσιλιβί και οι πιο ήσυχες παραλίες, είναι ιδανικές για οικογένειες." }
        },
        {
          title: { en: "Is Zakynthos only for nightlife?", el: "Είναι μόνο για διασκέδαση;" },
          text: { en: "No. While some areas are lively, the island overall offers much more than nightlife, including scenic beaches, relaxed stays, and boat trips.", el: "Όχι. Ενώ κάποιες περιοχές είναι ζωντανές, το νησί συνολικά προσφέρει γραφικές παραλίες, χαλάρωση και όμορφες εκδρομές." }
        },
        {
          title: { en: "How many days do you need in Zakynthos?", el: "Πόσες μέρες χρειάζονται στη Ζάκυνθο;" },
          text: { en: "A few days are enough to enjoy the highlights, but the island is more rewarding when you have time to combine beach days and slower exploration.", el: "Λίγες μέρες αρκούν για τα βασικά, αλλά ιδανικά χρειάζεσαι περισσότερο χρόνο για να συνδυάσεις παραλίες και πιο αργή εξερεύνηση." }
        },
        {
          title: { en: "Do you need a car in Zakynthos?", el: "Χρειάζομαι αυτοκίνητο;" },
          text: { en: "It can be very useful, especially if you want to explore different beaches, viewpoints, and regions of the island at your own pace.", el: "Είναι πολύ χρήσιμο, ειδικά αν θέλεις να εξερευνήσεις διαφορετικές παραλίες και περιοχές με τον δικό σου ρυθμό." }
        }
      ]
    }
  ],

  chania: [
    {
      layout: "list",
      title: { en: "Why Visit Chania", el: "Γιατί να πας στα Χανιά" },
      text: {
        en: "Chania is a strong choice for travelers who want a beautiful and walkable old town, one of the most photogenic harbor settings in Crete, excellent food and dining atmosphere, and access to famous beaches and scenic drives. It is a destination that works both as a base and as a standalone trip.\n\nIt is one of the few places in Crete that feels equally good for couples, first-time visitors, road-trippers, and travelers who want both town life and beach access.",
        el: "Τα Χανιά είναι μια εξαιρετική επιλογή για όσους αναζητούν μια πανέμορφη παλιά πόλη για περπάτημα, ένα από τα πιο φωτογενή λιμάνια της Κρήτης, εξαιρετικό φαγητό, και πρόσβαση σε διάσημες παραλίες και γραφικές διαδρομές. Είναι ένας προορισμός που λειτουργεί άψογα τόσο ως βάση όσο και ως αυτόνομο ταξίδι.\n\nΑποτελεί ένα από τα λίγα μέρη στην Κρήτη που ταιριάζει εξίσου σε ζευγάρια, ταξιδιώτες που έρχονται πρώτη φορά, λάτρεις των road trips και σε όσους θέλουν συνδυασμό πόλης και παραλίας."
      }
    },
    {
      layout: "grid",
      title: { en: "Best Areas and Highlights in Chania", el: "Οι Καλύτερες Περιοχές & Αξιοθέατα" },
      text: {
        en: "Where to base your stay or focus your time in and around the city.",
        el: "Πού να μείνετε ή να αφιερώσετε τον χρόνο σας μέσα και γύρω από την πόλη."
      },
      items: [
        {
          title: { en: "Old Town", el: "Παλιά Πόλη" },
          text: {
            en: "The old town is the heart of Chania's appeal. It is where you will find narrow lanes, historic architecture, small squares, and much of the destination's classic atmosphere. It is ideal for travelers who want to stay close to the most charming side of the city.",
            el: "Η παλιά πόλη είναι η καρδιά της γοητείας των Χανίων. Εκεί θα βρείτε στενά δρομάκια, ιστορική αρχιτεκτονική, μικρές πλατείες και μεγάλο μέρος της κλασικής ατμόσφαιρας. Ιδανικό για όσους θέλουν να μείνουν κοντά στην πιο ρομαντική πλευρά της πόλης."
          }
        },
        {
          title: { en: "Venetian Harbor", el: "Ενετικό Λιμάνι" },
          text: {
            en: "This is the visual centerpiece of Chania and one of the most recognizable waterfront settings in Crete. It is especially enjoyable in the evening, when the area becomes one of the city's strongest dining and walking zones.",
            el: "Το οπτικό επίκεντρο των Χανίων και ένα από τα πιο αναγνωρίσιμα παραθαλάσσια σημεία της Κρήτης. Είναι ιδιαίτερα απολαυστικό το βράδυ, όταν η περιοχή μετατρέπεται σε κέντρο για φαγητό και περίπατο."
          }
        },
        {
          title: { en: "Nea Chora", el: "Νέα Χώρα" },
          text: {
            en: "A more relaxed seaside area close to the center, useful for travelers who want easier beach access while still staying near the city.",
            el: "Μια πιο χαλαρή παραθαλάσσια περιοχή κοντά στο κέντρο, χρήσιμη για ταξιδιώτες που θέλουν εύκολη πρόσβαση σε παραλία χωρίς να απομακρυνθούν από την πόλη."
          }
        },
        {
          title: { en: "The wider Chania region", el: "Η ευρύτερη περιοχή" },
          text: {
            en: "Part of Chania's value comes from what surrounds it: western Crete road trips, mountain villages, famous beaches, and some of the island's most rewarding day-trip landscapes.",
            el: "Μέρος της αξίας των Χανίων προέρχεται από το τι τα περιβάλλει: road trips στη δυτική Κρήτη, ορεινά χωριά, διάσημες παραλίες και εκπληκτικά τοπία για ημερήσιες εκδρομές."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Beaches and Attractions", el: "Παραλίες & Αξιοθέατα" },
      text: {
        en: "Chania is not only about the town itself. It is also a gateway to some of Crete's best-known natural highlights.\n\n**Venetian Harbor and lighthouse**\nThe harbor is the city's most iconic attraction and one of the main reasons travelers choose Chania in the first place.\n\n**Old Town streets and historic corners**\nWalking through the old town is one of the most enjoyable parts of a stay here. The city rewards slow exploring more than rushed sightseeing.\n\n**Nea Chora beach area**\nA practical and pleasant beach option close to the city, especially useful if you want sea access without planning a full excursion.\n\n**Day trip access to western Crete highlights**\nChania works as a base for some of Crete's most famous beach and nature experiences, which is why so many visitors choose to stay here longer than expected.\n\n**Markets, alleys, and local neighborhoods**\nBeyond the postcard side, Chania also offers a more local urban rhythm that gives the destination more substance.",
        el: "Τα Χανιά δεν είναι μόνο η ίδια η πόλη. Αποτελούν επίσης την πύλη για ορισμένα από τα πιο γνωστά φυσικά αξιοθέατα της Κρήτης.\n\n**Ενετικό Λιμάνι και φάρος**\nΤο λιμάνι είναι το πιο εμβληματικό αξιοθέατο της πόλης και ένας από τους κύριους λόγους που οι ταξιδιώτες επιλέγουν τα Χανιά.\n\n**Δρομάκια και ιστορικές γωνιές στην Παλιά Πόλη**\nΤο περπάτημα στην παλιά πόλη είναι ένα από τα πιο ευχάριστα κομμάτια της διαμονής εδώ. Η πόλη ανταμείβει την αργή εξερεύνηση πολύ περισσότερο από την επιφανειακή περιήγηση.\n\n**Περιοχή της Νέας Χώρας**\nΜια πρακτική και ευχάριστη επιλογή παραλίας κοντά στην πόλη, ιδανική αν θέλετε θάλασσα χωρίς να οργανώσετε ολόκληρη εκδρομή.\n\n**Εξορμήσεις στα αξιοθέατα της δυτικής Κρήτης**\nΤα Χανιά λειτουργούν ως βάση για τις πιο διάσημες εμπειρίες παραλίας και φύσης στην Κρήτη, γι' αυτό πολλοί μένουν εδώ περισσότερο από όσο υπολόγιζαν.\n\n**Αγορές, σοκάκια και τοπικές γειτονιές**\nΠέρα από τις εικόνες για καρτ-ποστάλ, τα Χανιά διαθέτουν κι έναν αυθεντικό αστικό ρυθμό που προσδίδει βάθος στον προορισμό."
      }
    },
    {
      layout: "list",
      title: { en: "Food and Local Flavors", el: "Φαγητό & Τοπικές Γεύσεις" },
      text: {
        en: "Chania is one of the strongest food destinations in Crete. The city and region offer a combination of traditional Cretan taverns, harbor-side seafood meals, local ingredients and village-style flavors, modern dining in historic settings, and relaxed evenings built around shared dishes and wine.\n\nFood here is not just an extra. It is one of the main reasons the destination feels rich and memorable. Chania works well for travelers who want both traditional and slightly more polished dining experiences, especially in the old town and waterfront areas. At the same time, the broader region adds more local depth through village flavors, Cretan products, and countryside food culture.\n\n[Explore our Crete food guides for more inspiration](/collections/greece-food-and-drink).",
        el: "Τα Χανιά είναι ένας από τους πιο δυνατούς γαστρονομικούς προορισμούς στην Κρήτη. Η πόλη και η περιοχή προσφέρουν συνδυασμό παραδοσιακών κρητικών ταβερνών, θαλασσινών στο λιμάνι, τοπικών υλικών και γεύσεων χωριού, μοντέρνας εστίασης σε ιστορικό περιβάλλον, και χαλαρών βραδιών με μοιρασιάτικα πιάτα και κρασί.\n\nΤο φαγητό εδώ δεν είναι απλώς ένα έξτρα. Είναι ένας από τους βασικούς λόγους που ο προορισμός μένει αξέχαστος. Τα Χανιά είναι ιδανικά για όσους αναζητούν τόσο παραδοσιακές όσο και ελαφρώς πιο προσεγμένες εμπειρίες φαγητού, ειδικά στην παλιά πόλη και την προκυμαία. Παράλληλα, η ευρύτερη περιοχή προσθέτει βάθος μέσα από γεύσεις χωριού και την τοπική κουλτούρα της υπαίθρου.\n\n[Ανακαλύψτε τοπικές γεύσεις στους οδηγούς μας](/collections/greece-food-and-drink)."
      }
    },
    {
      layout: "numbered",
      title: { en: "Where to Stay in Chania", el: "Πού να Μείνετε στα Χανιά" },
      text: {
        en: "Where you stay in Chania depends on the kind of trip you want. [Explore our Chania hotel recommendations](/hotels?destination=chania).",
        el: "Η επιλογή περιοχής εξαρτάται από το είδος του ταξιδιού που επιθυμείτε. [Ανακαλύψτε τις προτάσεις μας για διαμονή](/hotels?destination=chania)."
      },
      items: [
        {
          title: { en: "Stay in the Old Town if", el: "Μείνετε στην Παλιά Πόλη αν" },
          text: {
            en: "You want character, atmosphere, and walkable charm. You enjoy being close to restaurants and evening life. The historic setting matters to your trip.",
            el: "Θέλετε χαρακτήρα, ατμόσφαιρα και γραφικότητα για περπάτημα. Απολαμβάνετε να είστε κοντά σε εστιατόρια και νυχτερινή ζωή. Το ιστορικό σκηνικό είναι σημαντικό για εσάς."
          }
        },
        {
          title: { en: "Stay near the Venetian Harbor if", el: "Μείνετε κοντά στο Ενετικό Λιμάνι αν" },
          text: {
            en: "You want one of the most scenic and central bases. You are happy to stay in one of the liveliest parts of the city.",
            el: "Θέλετε μία από τις πιο εντυπωσιακές και κεντρικές βάσεις. Προτιμάτε να βρίσκεστε στο πιο ζωντανό κομμάτι της πόλης."
          }
        },
        {
          title: { en: "Stay in Nea Chora if", el: "Μείνετε στη Νέα Χώρα αν" },
          text: {
            en: "You want a slightly calmer base with sea access. You still want to be close to the center without staying right in the busiest old town area.",
            el: "Αναζητάτε μια λίγο πιο ήρεμη βάση με πρόσβαση σε θάλασσα. Θέλετε να είστε κοντά στο κέντρο αποφεύγοντας την πολυκοσμία της παλιάς πόλης."
          }
        },
        {
          title: { en: "Stay outside the city if", el: "Μείνετε εκτός πόλης αν" },
          text: {
            en: "Your trip is more road-trip focused. You want quieter surroundings and easier regional beach access.",
            el: "Το ταξίδι σας εστιάζει περισσότερο σε road trips. Επιθυμείτε πιο ήσυχο περιβάλλον και ευκολότερη πρόσβαση στις παραλίες της περιοχής."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Things to Do in Chania", el: "Τι να Κάνετε στα Χανιά" },
      text: {
        en: "Chania works best when you combine the city itself with the wider region around it. Some of the best ways to experience the destination include walking through the old town and harbor, enjoying long meals and evening strolls, using Chania as a base for beach days and scenic drives, exploring western Crete more deeply, and balancing town atmosphere with day trips and coastal experiences.\n\nIt is one of those destinations that does not need aggressive sightseeing to feel rewarding. A well-paced trip in Chania can include architecture, food, sea views, nearby beaches, and excursions — all without feeling overloaded.\n\n[Explore our Chania tours and experiences](/tours/all).",
        el: "Τα Χανιά είναι στα καλύτερά τους όταν συνδυάζετε την πόλη με την ευρύτερη περιοχή. Οι καλύτεροι τρόποι για να ζήσετε τον προορισμό περιλαμβάνουν βόλτες στην παλιά πόλη και το λιμάνι, μεγάλα γεύματα και απογευματινούς περιπάτους, χρήση της πόλης ως βάσης για road trips και ημέρες στην παραλία, και εξισορρόπηση της αστικής ατμόσφαιρας με εξορμήσεις.\n\nΕίναι ένας προορισμός που δεν απαιτεί εξαντλητικό sightseeing για να σας γεμίσει. Ένα σωστά ρυθμισμένο ταξίδι εδώ μπορεί να περιλαμβάνει αρχιτεκτονική, φαγητό, θάλασσα, κοντινές παραλίες και εκδρομές - όλα χωρίς πίεση.\n\n[Δείτε εμπειρίες και tours στα Χανιά](/tours/all)."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit", el: "Η Καλύτερη Εποχή για να Πάτε" },
      text: {
        en: "Chania is rewarding across much of the travel season, especially from spring to early autumn.\n\nMay, June, and September are excellent for travelers who want warmth, easier walking conditions, and a more balanced atmosphere. July and August are the liveliest and busiest summer months. Shoulder season can be especially attractive if your trip is focused on the city, food, and regional exploring rather than only peak beach time.\n\nBecause Chania combines urban strolling with day-trip potential, it works well in a wider seasonal range than some purely beach-driven destinations.",
        el: "Τα Χανιά αξίζουν στο μεγαλύτερο μέρος της σεζόν, ειδικά από την άνοιξη μέχρι τις αρχές του φθινοπώρου.\n\nΟ Μάιος, ο Ιούνιος και ο Σεπτέμβριος είναι εξαιρετικοί μήνες για όσους αναζητούν ζέστη, ευχάριστο περπάτημα και πιο ισορροπημένη ατμόσφαιρα. Ο Ιούλιος και ο Αύγουστος είναι οι πιο έντονοι και πολυσύχναστοι μήνες του καλοκαιριού. Οι ενδιάμεσες εποχές είναι ιδανικές αν το ταξίδι σας εστιάζει στην πόλη, τη γαστρονομία και την εξερεύνηση της περιοχής αντί για τις ολοήμερες παραλίες.\n\nΚαθώς συνδυάζουν αστικούς περιπάτους με δυνατότητες για ημερήσιες, τα Χανιά λειτουργούν εξαιρετικά σε ευρύτερο φάσμα της σεζόν σε σύγκριση με νησιά που βασίζονται μόνο στη θάλασσα."
      }
    },
    {
      layout: "faq",
      title: { en: "FAQ About Chania", el: "Συχνές Ερωτήσεις για τα Χανιά" },
      text: {
        en: "Common questions for planning your trip.",
        el: "Συχνές ερωτήσεις για να οργανώσετε το ταξίδι σας."
      },
      items: [
        {
          title: { en: "Is Chania worth visiting?", el: "Αξίζει να πάω στα Χανιά;" },
          text: {
            en: "Yes. Chania is one of the most rewarding destinations in Crete for travelers who want beauty, food, atmosphere, and a strong base for wider exploration.",
            el: "Ναι. Τα Χανιά είναι από τους πιο ανταποδοτικούς προορισμούς στην Κρήτη για όσους αναζητούν ομορφιά, φαγητό, ατμόσφαιρα και μια εξαιρετική βάση για ευρύτερη εξερεύνηση."
          }
        },
        {
          title: { en: "What is Chania best known for?", el: "Για τι φημίζονται τα Χανιά;" },
          text: {
            en: "It is best known for its Venetian harbor, old town, charming streets, and access to some of western Crete's most famous landscapes.",
            el: "Φημίζονται κυρίως για το ενετικό τους λιμάνι, την παλιά πόλη, τα γραφικά σοκάκια, και την πρόσβαση σε ορισμένα από τα διασημότερα τοπία της δυτικής Κρήτης."
          }
        },
        {
          title: { en: "Is Chania better than Heraklion?", el: "Είναι τα Χανιά καλύτερα από το Ηράκλειο;" },
          text: {
            en: "They serve different travel styles, but many visitors prefer Chania for its visual charm, old town atmosphere, and stronger leisure appeal.",
            el: "Εξυπηρετούν διαφορετικά στυλ ταξιδιού, ωστόσο πολλοί επισκέπτες προτιμούν τα Χανιά για την οπτική τους γοητεία, την ατμόσφαιρα της παλιάς πόλης και τον πιο χαλαρωτικό χαρακτήρα τους."
          }
        },
        {
          title: { en: "How many days should you spend in Chania?", el: "Πόσες μέρες χρειάζομαι στα Χανιά;" },
          text: {
            en: "Chania works well for a few days, but it becomes even more rewarding if you have enough time to combine the city with nearby beaches and regional day trips.",
            el: "Τα Χανιά είναι υπέροχα για λίγες μέρες, αλλά γίνονται ακόμα πιο απολαυστικά αν έχετε χρόνο να συνδυάσετε την πόλη με κοντινές παραλίες και ημερήσιες εκδρομές."
          }
        },
        {
          title: { en: "Is Chania good for couples?", el: "Είναι τα Χανιά ιδανικά για ζευγάρια;" },
          text: {
            en: "Yes. It is one of the best places in Crete for couples, especially because of its harbor setting, walkable old town, and dining atmosphere.",
            el: "Ναι. Είναι ένα από τα καλύτερα μέρη της Κρήτης για ζευγάρια, χάρη στο σκηνικό του λιμανιού, την παλιά πόλη που προσφέρεται για περίπατο και τη ρομαντική ατμόσφαιρα στα εστιατόρια."
          }
        },
        {
          title: { en: "Do you need a car in Chania?", el: "Χρειάζομαι αυτοκίνητο στα Χανιά;" },
          text: {
            en: "Not always for the city itself, but it is very useful if you want to explore the wider Chania region and western Crete more fully.",
            el: "Όχι απαραίτητα μέσα στην πόλη, αλλά είναι εξαιρετικά χρήσιμο αν θέλετε να εξερευνήσετε πλήρως την ευρύτερη περιοχή των Χανίων και τη δυτική Κρήτη."
          }
        }
      ]
    }
  ],

  rhodes: [
    {
      layout: "list",
      title: { en: "Why Visit Rhodes", el: "Γιατί να πας στη Ρόδο" },
      text: {
        en: "Rhodes is a strong choice for travelers who want one of the most impressive historic centers in Greece, a destination that combines culture and beach time, a large island with plenty of variety, resort convenience with room for day trips and exploration, and a Greek island that works for couples, families, and mixed travel styles.\n\nWhat makes Rhodes stand out is not only that it has many attractions, but that those attractions feel genuinely different from each other. The island can feel historic, coastal, lively, scenic, and relaxed depending on where you are.",
        el: "Η Ρόδος είναι μια εξαιρετική επιλογή για ταξιδιώτες που αναζητούν ένα από τα πιο εντυπωσιακά ιστορικά κέντρα στην Ελλάδα, έναν προορισμό που συνδυάζει πολιτισμό και θάλασσα, ένα μεγάλο νησί με τεράστια ποικιλία, την άνεση ενός resort με περιθώριο για εκδρομές και εξερεύνηση, και ένα ελληνικό νησί που λειτουργεί άψογα για ζευγάρια, οικογένειες και μεικτά στυλ διακοπών.\n\nΑυτό που κάνει τη Ρόδο να ξεχωρίζει δεν είναι μόνο ότι διαθέτει πολλά αξιοθέατα, αλλά ότι αυτά τα αξιοθέατα είναι πραγματικά διαφορετικά μεταξύ τους. Το νησί μπορεί να μοιάζει ιστορικό, παραθαλάσσιο, ζωντανό, γραφικό ή χαλαρό, ανάλογα με το πού βρίσκεστε."
      }
    },
    {
      layout: "grid",
      title: { en: "Best Areas and Highlights in Rhodes", el: "Οι Καλύτερες Περιοχές & Αξιοθέατα" },
      text: {
        en: "Where to base your stay or focus your time in and around the island.",
        el: "Πού να μείνετε ή να αφιερώσετε τον χρόνο σας μέσα και γύρω από το νησί."
      },
      items: [
        {
          title: { en: "Rhodes Old Town", el: "Παλιά Πόλη της Ρόδου" },
          text: {
            en: "The Old Town is the island's historic heart and one of its most memorable features. Its walls, streets, architecture, and atmosphere give Rhodes a distinct identity that immediately separates it from many other Greek islands.",
            el: "Η Παλιά Πόλη είναι η ιστορική καρδιά του νησιού και ένα από τα πιο αξέχαστα χαρακτηριστικά του. Τα τείχη, τα σοκάκια, η αρχιτεκτονική και η ατμόσφαιρά της δίνουν στη Ρόδο μια ξεχωριστή ταυτότητα που τη διαφοροποιεί αμέσως από πολλά άλλα ελληνικά νησιά."
          }
        },
        {
          title: { en: "Rhodes Town", el: "Πόλη της Ρόδου (Εκτός Τειχών)" },
          text: {
            en: "Outside the old medieval core, Rhodes Town offers a broader urban base with restaurants, services, coastal access, and a practical center for travelers who want convenience and activity.",
            el: "Έξω από τον παλιό μεσαιωνικό πυρήνα, η πόλη της Ρόδου προσφέρει μια ευρύτερη αστική βάση με εστιατόρια, υπηρεσίες, πρόσβαση στη θάλασσα και ένα πρακτικό κέντρο για ταξιδιώτες που θέλουν άνεση και δραστηριότητα."
          }
        },
        {
          title: { en: "Lindos", el: "Λίνδος" },
          text: {
            en: "Lindos is one of the island's major highlights, known for its whitewashed appearance, dramatic setting, and famous acropolis. It gives Rhodes one of its strongest visual contrasts.",
            el: "Η Λίνδος είναι ένα από τα σημαντικότερα αξιοθέατα του νησιού, γνωστή για την ολόλευκη όψη της, το δραματικό της σκηνικό και τη διάσημη ακρόπολη. Προσφέρει στη Ρόδο μία από τις πιο δυνατές οπτικές αντιθέσεις της."
          }
        },
        {
          title: { en: "The east coast", el: "Η ανατολική ακτή" },
          text: {
            en: "This side of the island is often associated with many of the best-known holiday areas, easier beach access, and a more resort-friendly atmosphere.",
            el: "Αυτή η πλευρά του νησιού συνδέεται συχνά με πολλές από τις πιο γνωστές περιοχές διακοπών, την ευκολότερη πρόσβαση σε παραλίες και μια πιο φιλική προς τα resorts ατμόσφαιρα."
          }
        },
        {
          title: { en: "The wider island", el: "Η ευρύτερη περιοχή" },
          text: {
            en: "Rhodes is large enough that it should not be thought of only as a town-and-beach destination. Regional drives, smaller villages, and different coastal areas all add to the experience.",
            el: "Η Ρόδος είναι αρκετά μεγάλη ώστε να μην θεωρείται απλώς ένας προορισμός 'πόλη και παραλία'. Οι διαδρομές στην ενδοχώρα, τα μικρότερα χωριά και οι διαφορετικές παράκτιες περιοχές προσθέτουν πολλά στην εμπειρία."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Beaches and Attractions in Rhodes", el: "Παραλίες & Αξιοθέατα" },
      text: {
        en: "Rhodes has more range than many travelers expect, and that applies both to history and coastline.\n\n**Medieval Old Town**\nThis is one of the island's defining attractions and one of the strongest reasons to visit Rhodes in the first place. It is best explored slowly, with time to walk, stop, and absorb the atmosphere rather than rushing through it.\n\n**Lindos Acropolis**\nOne of the most famous historic sights on the island, combining cultural value with a visually dramatic setting.\n\n**Beach areas along the east coast**\nMany visitors choose Rhodes for beach holidays, and the island has enough developed and relaxed coastal areas to support different travel styles.\n\n**Harbor and town areas**\nRhodes Town offers more than just access and logistics. It also gives the island an urban holiday side with dining, movement, and useful base value.\n\n**Regional exploration**\nBecause the island is large, part of its appeal comes from seeing more than one side of it rather than staying fixed in a single place the entire time.",
        el: "Η Ρόδος έχει μεγαλύτερη ποικιλία από ό,τι περιμένουν πολλοί ταξιδιώτες, και αυτό ισχύει τόσο για την ιστορία όσο και για την ακτογραμμή.\n\n**Μεσαιωνική Παλιά Πόλη**\nΑυτό είναι ένα από τα καθοριστικά αξιοθέατα του νησιού και ένας από τους βασικότερους λόγους για να επισκεφθείτε τη Ρόδο εξ αρχής. Εξερευνάται καλύτερα με αργούς ρυθμούς, με χρόνο για περπάτημα, στάσεις και απορρόφηση της ατμόσφαιρας, αντί για βιαστικό πέρασμα.\n\n**Ακρόπολη Λίνδου**\nΈνα από τα πιο διάσημα ιστορικά αξιοθέατα του νησιού, που συνδυάζει την πολιτιστική αξία με ένα οπτικά εντυπωσιακό σκηνικό.\n\n**Παραλίες κατά μήκος της ανατολικής ακτής**\nΠολλοί επισκέπτες επιλέγουν τη Ρόδο για παραθαλάσσιες διακοπές, και το νησί διαθέτει αρκετές οργανωμένες αλλά και χαλαρές παράκτιες περιοχές για να υποστηρίξει διαφορετικά στυλ ταξιδιού.\n\n**Περιοχές γύρω από το λιμάνι και την πόλη**\nΗ πόλη της Ρόδου προσφέρει πολλά περισσότερα από απλή πρόσβαση και υποδομές. Προσδίδει επίσης στο νησί μια αστική πλευρά διακοπών, με εστιατόρια, ζωντάνια και μεγάλη πρακτική αξία ως βάση.\n\n**Εξερεύνηση στην ενδοχώρα**\nΛόγω του μεγέθους του νησιού, μέρος της γοητείας του προέρχεται από το να δείτε περισσότερες από μία πλευρές του, αντί να μείνετε κολλημένοι σε ένα μόνο μέρος σε όλη τη διάρκεια του ταξιδιού."
      }
    },
    {
      layout: "list",
      title: { en: "Food and Local Flavors", el: "Φαγητό & Τοπικές Γεύσεις" },
      text: {
        en: "Rhodes offers one of the more varied food experiences among Greek islands, partly because it combines a major town, holiday zones, historic settings, and local traditions. Visitors can enjoy traditional Greek and island taverns, meals in historic surroundings, seaside dining, easy summer resort dining, and local flavors in more regional settings.\n\nThe island works well for travelers who want both comfort and character. Some meals are about location and atmosphere, especially in or around the old town. Others are simpler, more local, and more relaxed. That balance helps Rhodes feel broad rather than one-dimensional.\n\n[Explore our Greece food & drink guides for more local ideas](/collections/greece-food-and-drink).",
        el: "Η Ρόδος προσφέρει μία από τις πιο ποικιλόμορφες γαστρονομικές εμπειρίες στα ελληνικά νησιά, εν μέρει επειδή συνδυάζει μια μεγάλη πόλη, ζώνες διακοπών, ιστορικά σκηνικά και τοπικές παραδόσεις. Οι επισκέπτες μπορούν να απολαύσουν παραδοσιακές ελληνικές και νησιώτικες ταβέρνες, γεύματα σε ιστορικό περιβάλλον, δείπνο δίπλα στη θάλασσα, εύκολο φαγητό σε καλοκαιρινά resorts και τοπικές γεύσεις σε πιο ορεινές και αγροτικές περιοχές.\n\nΤο νησί λειτουργεί τέλεια για ταξιδιώτες που θέλουν τόσο άνεση όσο και χαρακτήρα. Ορισμένα γεύματα έχουν να κάνουν με την τοποθεσία και την ατμόσφαιρα, ειδικά μέσα ή γύρω από την παλιά πόλη. Άλλα είναι πιο απλά, πιο τοπικά και πιο χαλαρά. Αυτή η ισορροπία βοηθά τη Ρόδο να έχει εύρος αντί να είναι μονοδιάστατη.\n\n[Εξερευνήστε τους οδηγούς φαγητού της Ελλάδας για περισσότερες ιδέες](/collections/greece-food-and-drink)."
      }
    },
    {
      layout: "numbered",
      title: { en: "Where to Stay in Rhodes", el: "Πού να Μείνετε στη Ρόδο" },
      text: {
        en: "Where you stay in Rhodes depends heavily on what kind of trip you want. [Explore our Rhodes hotel recommendations](/hotels?destination=rhodes).",
        el: "Η επιλογή της περιοχής που θα μείνετε στη Ρόδο εξαρτάται σε μεγάλο βαθμό από το είδος του ταξιδιού που θέλετε. [Ανακαλύψτε τις προτάσεις μας για διαμονή στη Ρόδο](/hotels?destination=rhodes)."
      },
      items: [
        {
          title: { en: "Stay in Rhodes Town if", el: "Μείνετε στην πόλη της Ρόδου αν" },
          text: {
            en: "You want convenience, restaurants, and easy access to the Old Town. You prefer a practical and active base. You want to combine history with town energy.",
            el: "Θέλετε ανέσεις, εστιατόρια και εύκολη πρόσβαση στην Παλιά Πόλη. Προτιμάτε μια πρακτική και ενεργή βάση. Θέλετε να συνδυάσετε την ιστορία με την ενέργεια της πόλης."
          }
        },
        {
          title: { en: "Stay near the Old Town if", el: "Μείνετε κοντά στην Παλιά Πόλη αν" },
          text: {
            en: "Atmosphere and historic setting matter a lot to your trip. You want a more memorable and character-driven stay.",
            el: "Η ατμόσφαιρα και το ιστορικό σκηνικό είναι πολύ σημαντικά για το ταξίδι σας. Θέλετε μια πιο αξέχαστη διαμονή με έντονο χαρακτήρα."
          }
        },
        {
          title: { en: "Stay near Lindos if", el: "Μείνετε κοντά στη Λίνδο αν" },
          text: {
            en: "You want one of the island's most scenic and distinctive areas. Your trip is more about beauty, coastal atmosphere, and a slightly more special setting.",
            el: "Αναζητάτε μία από τις πιο γραφικές και ξεχωριστές περιοχές του νησιού. Το ταξίδι σας αφορά περισσότερο την ομορφιά, την παραθαλάσσια ατμόσφαιρα και ένα ελαφρώς πιο ιδιαίρετο σκηνικό."
          }
        },
        {
          title: { en: "Stay in a beach or resort area if", el: "Μείνετε σε παραλία ή περιοχή resort αν" },
          text: {
            en: "Your trip is focused more on sea, relaxation, and holiday ease. You want a simpler beach-first base.",
            el: "Το ταξίδι σας επικεντρώνεται περισσότερο στη θάλασσα, τη χαλάρωση και την ευκολία των διακοπών. Θέλετε μια πιο απλή βάση, εστιασμένη στην παραλία."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Things to Do in Rhodes", el: "Τι να Κάνετε στη Ρόδο" },
      text: {
        en: "Rhodes works best when you give room to both its historic side and its holiday side. Some of the best ways to experience the island include exploring the Old Town on foot, visiting Lindos and its acropolis, balancing beach time with cultural stops, using the island's size to explore different regions, and mixing urban atmosphere, scenic coast, and slower local moments.\n\nThe island rewards travelers who do more than stay inside one resort bubble. Even a few well-chosen outings can completely change how rich the trip feels.\n\n[Explore our Rhodes tours and experiences](/tours/all).",
        el: "Η Ρόδος είναι στα καλύτερά της όταν δίνετε χώρο τόσο στην ιστορική της πλευρά όσο και σε αυτή των διακοπών. Οι καλύτεροι τρόποι για να ζήσετε το νησί περιλαμβάνουν την εξερεύνηση της Παλιάς Πόλης με τα πόδια, την επίσκεψη στη Λίνδο και την ακρόπολή της, την εξισορρόπηση του χρόνου στην παραλία με πολιτιστικές στάσεις, τη χρήση του μεγέθους του νησιού για να εξερευνήσετε διαφορετικές περιοχές και τη μίξη της αστικής ατμόσφαιρας, των γραφικών ακτών και των πιο ήρεμων τοπικών στιγμών.\n\nΤο νησί ανταμείβει τους ταξιδιώτες που κάνουν κάτι περισσότερο από το να μένουν κλεισμένοι στη φούσκα ενός resort. Ακόμα και λίγες, καλά επιλεγμένες εξορμήσεις μπορούν να αλλάξουν εντελώς το πόσο πλούσιο νιώθετε το ταξίδι σας.\n\n[Δείτε εμπειρίες και tours στη Ρόδο](/tours/all)."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit", el: "Η Καλύτερη Εποχή για να Πάτε" },
      text: {
        en: "Rhodes is popular across a long warm season and works well for travelers looking for sun, sightseeing, and beach time.\n\nMay, June, and September are very good months for travelers who want a more balanced pace. July and August are the peak summer months, with the busiest resort and beach atmosphere. Shoulder season can be especially attractive because Rhodes has enough historic and urban interest to stay rewarding even when the trip is not purely beach-focused.\n\nIts mix of culture and coastline makes Rhodes useful across a broad travel window.",
        el: "Η Ρόδος είναι δημοφιλής σε όλη τη διάρκεια της μακράς θερμής περιόδου και λειτουργεί άψογα για ταξιδιώτες που αναζητούν ήλιο, αξιοθέατα και χρόνο στην παραλία.\n\nΟ Μάιος, ο Ιούνιος και ο Σεπτέμβριος είναι πολύ καλοί μήνες για όσους θέλουν έναν πιο ισορροπημένο ρυθμό. Ο Ιούλιος και ο Αύγουστος είναι οι μήνες αιχμής του καλοκαιριού, με την πιο πολυσύχναστη ατμόσφαιρα σε resorts και παραλίες. Η ενδιάμεση εποχή μπορεί να είναι ιδιαίτερα ελκυστική επειδή η Ρόδος έχει αρκετό ιστορικό και αστικό ενδιαφέρον για να παραμένει συναρπαστική ακόμα κι όταν το ταξίδι δεν είναι αμιγώς εστιασμένο στην παραλία.\n\nΟ συνδυασμός πολιτισμού και ακτογραμμής κάνει τη Ρόδο ιδανική σε ένα πολύ ευρύ χρονικό παράθυρο ταξιδιού."
      }
    },
    {
      layout: "faq",
      title: { en: "FAQ About Rhodes", el: "Συχνές Ερωτήσεις για τη Ρόδο" },
      text: {
        en: "Common questions for planning your trip.",
        el: "Συχνές ερωτήσεις για να οργανώσετε το ταξίδι σας."
      },
      items: [
        {
          title: { en: "Is Rhodes worth visiting?", el: "Αξίζει να πάω στη Ρόδο;" },
          text: {
            en: "Yes. Rhodes is one of the most complete Greek islands for travelers who want both history and beach holiday appeal.",
            el: "Ναι. Η Ρόδος είναι ένα από τα πιο ολοκληρωμένα ελληνικά νησιά για ταξιδιώτες που θέλουν να συνδυάσουν την ιστορία με τη γοητεία των παραθαλάσσιων διακοπών."
          }
        },
        {
          title: { en: "What is Rhodes best known for?", el: "Για τι φημίζεται η Ρόδος;" },
          text: {
            en: "It is best known for its Medieval Old Town, Lindos, beaches, and its combination of history with large-island holiday infrastructure.",
            el: "Φημίζεται κυρίως για τη Μεσαιωνική Παλιά Πόλη, τη Λίνδο, τις παραλίες της, και τον συνδυασμό της ιστορίας με την τουριστική υποδομή ενός μεγάλου νησιού."
          }
        },
        {
          title: { en: "Is Rhodes good for families?", el: "Είναι η Ρόδος καλή για οικογένειες;" },
          text: {
            en: "Yes. Rhodes can work very well for families because it offers beach options, practical bases, and enough variety for different ages and trip styles.",
            el: "Ναι. Η Ρόδος είναι ιδανική για οικογένειες επειδή προσφέρει επιλογές παραλίας, πρακτικές βάσεις και αρκετή ποικιλία για διαφορετικές ηλικίες και στυλ ταξιδιού."
          }
        },
        {
          title: { en: "How many days should you spend in Rhodes?", el: "Πόσες μέρες χρειάζομαι στη Ρόδο;" },
          text: {
            en: "Rhodes is best when you have enough time to experience more than one side of the island, including historic areas, beaches, and regional exploration.",
            el: "Η Ρόδος είναι στα καλύτερά της όταν έχετε αρκετό χρόνο για να ζήσετε περισσότερες από μία πλευρές του νησιού, όπως τις ιστορικές περιοχές, τις παραλίες και την ενδοχώρα."
          }
        },
        {
          title: { en: "Is Rhodes only a resort destination?", el: "Είναι η Ρόδος μόνο προορισμός για resorts;" },
          text: {
            en: "No. While it has strong resort zones, Rhodes is much more than that. Its historic identity and island scale give it more depth than a typical beach-only destination.",
            el: "Όχι. Παρόλο που έχει ισχυρές ζώνες με resorts, η Ρόδος είναι πολλά περισσότερα. Η ιστορική της ταυτότητα και το μέγεθός της της δίνουν μεγαλύτερο βάθος από έναν τυπικό προορισμό μόνο για θάλασσα."
          }
        },
        {
          title: { en: "Do you need a car in Rhodes?", el: "Χρειάζομαι αυτοκίνητο στη Ρόδο;" },
          text: {
            en: "Not always for town-based stays, but it is very useful if you want to explore more of the island beyond your base.",
            el: "Όχι απαραίτητα για διαμονή μέσα στην πόλη, αλλά είναι εξαιρετικά χρήσιμο αν θέλετε να εξερευνήσετε περισσότερο το νησί έξω από τη βάση σας."
          }
        }
      ]
    }
  ],

  monemvasia: [
    {
      layout: "list",
      title: { en: "Why Visit Monemvasia", el: "Γιατί να πας στη Μονεμβασιά" },
      text: {
        en: "Monemvasia is a strong choice for travelers who want a destination with real historic atmosphere, a romantic setting for a slower trip, stone-built architecture and medieval character, sea views combined with old-world charm, and a memorable stop in the Peloponnese beyond the usual weekend escapes.\n\nUnlike broader beach destinations, Monemvasia is more about the experience of place. It rewards travelers who enjoy mood, walking, architecture, and strong visual identity.",
        el: "Η Μονεμβασιά είναι μια εξαιρετική επιλογή για ταξιδιώτες που αναζητούν έναν προορισμό με πραγματική ιστορική ατμόσφαιρα, ένα ρομαντικό σκηνικό για πιο αργούς ρυθμούς, πετρόχτιστη αρχιτεκτονική και μεσαιωνικό χαρακτήρα, θέα στη θάλασσα σε συνδυασμό με την αίγλη του παρελθόντος, και μια αξέχαστη στάση στην Πελοπόννησο, πέρα από τις συνηθισμένες αποδράσεις του Σαββατοκύριακου.\n\nΣε αντίθεση με τους ευρύτερους παραθαλάσσιους προορισμούς, η Μονεμβασιά εστιάζει περισσότερο στην ίδια την εμπειρία του τόπου. Ανταμείβει τους ταξιδιώτες που απολαμβάνουν την ατμόσφαιρα, το περπάτημα, την αρχιτεκτονική και την ισχυρή οπτική ταυτότητα."
      }
    },
    {
      layout: "grid",
      title: { en: "Best Areas and Highlights in Monemvasia", el: "Οι Καλύτερες Περιοχές & Αξιοθέατα" },
      text: {
        en: "Where to base your stay or focus your time in and around the rock.",
        el: "Πού να μείνετε ή να αφιερώσετε τον χρόνο σας μέσα και γύρω από τον βράχο."
      },
      items: [
        {
          title: { en: "Lower Town", el: "Κάτω Πόλη" },
          text: {
            en: "The Lower Town is where most visitors spend their time. It is the heart of Monemvasia's atmosphere, with stone alleys, small squares, historic buildings, boutique stays, and a strong sense of enclosure and character.",
            el: "Στην Κάτω Πόλη περνούν τον περισσότερο χρόνο τους οι επισκέπτες. Είναι η καρδιά της ατμόσφαιρας της Μονεμβασιάς, με πέτρινα σοκάκια, μικρές πλατείες, ιστορικά κτίρια, boutique καταλύματα και μια έντονη αίσθηση περίκλειστου χαρακτήρα."
          }
        },
        {
          title: { en: "Upper Town", el: "Άνω Πόλη" },
          text: {
            en: "The Upper Town adds a more dramatic and elevated dimension to the destination. It is less about daily strolling and more about views, history, and the feeling of the site's original fortified scale.",
            el: "Η Άνω Πόλη προσθέτει μια πιο δραματική και υπερυψωμένη διάσταση στον προορισμό. Προσφέρεται λιγότερο για καθημερινό περίπατο και περισσότερο για τη θέα, την ιστορία και την αίσθηση της αρχικής οχυρωματικής κλίμακας."
          }
        },
        {
          title: { en: "The sea-facing edge of the rock", el: "Η πλευρά του βράχου προς τη θάλασσα" },
          text: {
            en: "Part of Monemvasia's charm comes from how closely the town and sea interact. Even simple walks here feel scenic and distinctive.",
            el: "Μέρος της γοητείας της Μονεμβασιάς προέρχεται από το πόσο στενά αλληλεπιδρούν η πόλη και η θάλασσα. Ακόμα και οι απλοί περίπατοι εδώ είναι γραφικοί και ξεχωριστοί."
          }
        },
        {
          title: { en: "The mainland approach and surrounding area", el: "Η πρόσβαση από την ακτή και η γύρω περιοχή" },
          text: {
            en: "The view of the rock from outside Monemvasia is part of the experience too. It gives the destination a strong arrival moment that sets it apart from most other towns in Greece.",
            el: "Η θέα του βράχου έξω από τη Μονεμβασιά είναι επίσης μέρος της εμπειρίας. Χαρίζει στον προορισμό μια δυνατή στιγμή άφιξης που τον ξεχωρίζει από τις περισσότερες πόλεις στην Ελλάδα."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Attractions and Experiences", el: "Αξιοθέατα & Εμπειρίες" },
      text: {
        en: "Monemvasia is more about atmosphere and setting than long sightseeing lists, but that is exactly what makes it rewarding.\n\n**The medieval old town**\nWalking through the old town is the essential experience here. The lanes, stone facades, and quiet corners are what give Monemvasia its identity.\n\n**Upper Town views**\nThe elevated perspective is one of the key highlights, especially for travelers who want a fuller sense of the rock, the fortification, and the surrounding sea.\n\n**Churches, walls, and architectural character**\nMuch of Monemvasia's appeal comes from the way history is embedded in the built environment, not only in isolated monuments.\n\n**Seaside walks and slow evenings**\nThis is one of the best destinations in Greece for travelers who enjoy ending the day with a walk, a view, and a long dinner rather than high-energy nightlife.\n\n**A memorable Peloponnese stop**\nWhether as a dedicated stay or part of a wider route, Monemvasia often becomes one of the most distinctive memories of a Peloponnese trip.",
        el: "Η Μονεμβασιά αφορά περισσότερο την ατμόσφαιρα και το σκηνικό παρά τις μεγάλες λίστες αξιοθέατων, αλλά αυτό ακριβώς την κάνει να αξίζει.\n\n**Η μεσαιωνική παλιά πόλη**\nΤο περπάτημα στην παλιά πόλη είναι η απόλυτη εμπειρία εδώ. Τα σοκάκια, οι πέτρινες προσόψεις και οι ήσυχες γωνιές δίνουν στη Μονεμβασιά την ταυτότητά της.\n\n**Η θέα από την Άνω Πόλη**\nΗ πανοραμική οπτική γωνία είναι ένα από τα βασικά highlights, ειδικά για τους ταξιδιώτες που θέλουν να κατανοήσουν πλήρως τον βράχο, την οχύρωση και τη θάλασσα γύρω του.\n\n**Εκκλησίες, τείχη και αρχιτεκτονικός χαρακτήρας**\nΜεγάλο μέρος της γοητείας της Μονεμβασιάς προέρχεται από τον τρόπο που η ιστορία είναι ενσωματωμένη στο δομημένο περιβάλλον, και όχι μόνο σε μεμονωμένα μνημεία.\n\n**Παραθαλάσσιοι περίπατοι και ήσυχα βράδια**\nΕίναι από τους καλύτερους προορισμούς στην Ελλάδα για όσους απολαμβάνουν να κλείνουν τη μέρα τους με μια βόλτα, θέα και ένα μακρύ δείπνο αντί για έντονη νυχτερινή ζωή.\n\n**Μια αξέχαστη στάση στην Πελοπόννησο**\nΕίτε ως αυτόνομος προορισμός είτε ως μέρος μιας ευρύτερης διαδρομής, η Μονεμβασιά γίνεται συχνά μία από τις πιο ξεχωριστές αναμνήσεις ενός ταξιδιού στην Πελοπόννησο."
      }
    },
    {
      layout: "list",
      title: { en: "Food and Local Flavors", el: "Φαγητό & Τοπικές Γεύσεις" },
      text: {
        en: "Food in Monemvasia is closely tied to atmosphere. It is the kind of destination where a meal often feels more memorable because of the setting around it: stone architecture, quiet alleys, sea air, and slower evenings.\n\nVisitors can expect traditional tavern-style meals, seafood and regional dishes, dinners in historic surroundings, relaxed wine-and-view evenings, and a more intimate dining feel than a fast-paced culinary scene.\n\nMonemvasia is not about endless restaurant variety. It is about a more focused and atmospheric food experience, where the destination itself becomes part of the meal.\n\n[Explore our Greece food & drink guides for more local ideas](/collections/greece-food-and-drink).",
        el: "Το φαγητό στη Μονεμβασιά είναι στενά συνδεδεμένο με την ατμόσφαιρα. Είναι το είδος του προορισμού όπου ένα γεύμα συχνά μένει αξέχαστο χάρη στο σκηνικό γύρω του: πέτρινη αρχιτεκτονική, ήσυχα σοκάκια, θαλασσινός αέρας και ήρεμα βράδια.\n\nΟι επισκέπτες μπορούν να περιμένουν παραδοσιακά γεύματα σε στυλ ταβέρνας, θαλασσινά και τοπικά πιάτα, δείπνα σε ιστορικό περιβάλλον, χαλαρές βραδιές με κρασί και θέα, καθώς και μια πιο ζεστή και οικεία αίσθηση εστίασης σε σύγκριση με τα πολύβουα γαστρονομικά κέντρα.\n\nΗ Μονεμβασιά δεν προσφέρει ατελείωτη ποικιλία εστιατορίων. Προσφέρει μια πιο εστιασμένη και ατμοσφαιρική εμπειρία φαγητού, όπου ο ίδιος ο προορισμός γίνεται κομμάτι του γεύματος.\n\n[Ανακαλύψτε τοπικές γεύσεις στους οδηγούς μας](/collections/greece-food-and-drink)."
      }
    },
    {
      layout: "numbered",
      title: { en: "Where to Stay in Monemvasia", el: "Πού να Μείνετε στη Μονεμβασιά" },
      text: {
        en: "Where you stay matters a lot in Monemvasia because the atmosphere is such a big part of the experience. [Explore our Monemvasia hotel recommendations](/hotels?destination=monemvasia).",
        el: "Το πού θα μείνετε στη Μονεμβασιά παίζει μεγάλο ρόλο, καθώς η ατμόσφαιρα είναι βασικό κομμάτι της εμπειρίας. [Ανακαλύψτε τις προτάσεις μας για διαμονή](/hotels?destination=monemvasia)."
      },
      items: [
        {
          title: { en: "Stay inside the castle town if", el: "Μείνετε μέσα στην καστροπολιτεία αν" },
          text: {
            en: "You want the strongest sense of place. The romantic and historic atmosphere is central to your trip. You want to experience Monemvasia beyond a day visit.",
            el: "Θέλετε την πιο δυνατή αίσθηση του τόπου. Η ρομαντική και ιστορική ατμόσφαιρα είναι το επίκεντρο του ταξιδιού σας. Θέλετε να ζήσετε τη Μονεμβασιά πέρα από μια απλή ημερήσια επίσκεψη."
          }
        },
        {
          title: { en: "Stay near the mainland side if", el: "Μείνετε στην απέναντι ακτή αν" },
          text: {
            en: "You want easier access or more practical logistics. You prefer a simpler base while still being very close to the old town.",
            el: "Αναζητάτε ευκολότερη πρόσβαση και πιο πρακτικές μετακινήσεις. Προτιμάτε μια πιο απλή βάση, παραμένοντας παράλληλα πολύ κοντά στην παλιά πόλη."
          }
        },
        {
          title: { en: "Choose a view-focused stay if", el: "Επιλέξτε ένα κατάλυμα με θέα αν" },
          text: {
            en: "The setting and evening atmosphere matter most to you. You want the destination to feel more like a special escape than a transit stop.",
            el: "Το σκηνικό και η βραδινή ατμόσφαιρα είναι το πιο σημαντικό για εσάς. Θέλετε ο προορισμός να μοιάζει περισσότερο με μια ξεχωριστή απόδραση παρά με μια ενδιάμεση στάση."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Things to Do in Monemvasia", el: "Τι να Κάνετε στη Μονεμβασιά" },
      text: {
        en: "Monemvasia is not a destination that needs to be rushed. The best way to experience it usually includes walking through the old town slowly, climbing for broader views where possible, enjoying long meals and quieter evenings, staying overnight rather than only visiting briefly, and combining the destination with a wider Peloponnese route.\n\nThis is one of those places where doing less, but doing it well, often creates the better trip.\n\n[Explore our Monemvasia tours and experiences](/tours/all).",
        el: "Η Μονεμβασιά δεν είναι ένας προορισμός που πρέπει να δείτε βιαστικά. Ο καλύτερος τρόπος για να τη ζήσετε συνήθως περιλαμβάνει το αργό περπάτημα στην παλιά πόλη, την ανάβαση για πιο πανοραμική θέα, την απόλαυση μεγάλων γευμάτων και πιο ήσυχων βραδιών, τη διανυκτέρευση αντί της σύντομης επίσκεψης, και τον συνδυασμό του προορισμού με μια ευρύτερη διαδρομή στην Πελοπόννησο.\n\nΕίναι από εκείνα τα μέρη όπου κάνοντας λιγότερα, αλλά απολαμβάνοντάς τα στο έπακρο, δημιουργείται συχνά το καλύτερο ταξίδι.\n\n[Δείτε εμπειρίες και tours στη Μονεμβασιά](/tours/all)."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit", el: "Η Καλύτερη Εποχή για να Πάτε" },
      text: {
        en: "Monemvasia can be rewarding across much of the year, especially because it is not only a summer beach destination.\n\nSpring and autumn are particularly attractive for walking, atmosphere, and more balanced temperatures. Summer can still be very enjoyable, especially when paired with nearby coastal stops and slower evenings. Shoulder season suits Monemvasia especially well because the destination's appeal depends heavily on strolling, views, and overall mood.\n\nIt is one of the Peloponnese destinations that can work beautifully outside peak summer.",
        el: "Η Μονεμβασιά μπορεί να είναι απολαυστική στο μεγαλύτερο μέρος του χρόνου, ειδικά επειδή δεν είναι απλώς ένας καλοκαιρινός παραθαλάσσιος προορισμός.\n\nΗ άνοιξη και το φθινόπωρο είναι ιδιαίτερα ελκυστικά για περπάτημα, ατμόσφαιρα και πιο ισορροπημένες θερμοκρασίες. Το καλοκαίρι παραμένει πολύ ευχάριστο, ειδικά όταν συνδυάζεται με κοντινές παραθαλάσσιες στάσεις και ήρεμα βράδια. Η ενδιάμεση εποχή ταιριάζει εξαιρετικά στη Μονεμβασιά, καθώς η γοητεία του προορισμού βασίζεται κυρίως στους περιπάτους, τη θέα και τη γενικότερη διάθεση.\n\nΕίναι από τους προορισμούς της Πελοποννήσου που λειτουργούν υπέροχα και εκτός της καλοκαιρινής αιχμής."
      }
    },
    {
      layout: "faq",
      title: { en: "FAQ About Monemvasia", el: "Συχνές Ερωτήσεις για τη Μονεμβασιά" },
      text: {
        en: "Common questions for planning your trip.",
        el: "Συχνές ερωτήσεις για να οργανώσετε το ταξίδι σας."
      },
      items: [
        {
          title: { en: "Is Monemvasia worth visiting?", el: "Αξίζει να πάω στη Μονεμβασιά;" },
          text: {
            en: "Yes. Monemvasia is one of the most unique and atmospheric destinations in Greece, especially for travelers who appreciate history, architecture, and setting.",
            el: "Ναι. Η Μονεμβασιά είναι ένας από τους πιο μοναδικούς και ατμοσφαιρικούς προορισμούς στην Ελλάδα, ειδικά για όσους εκτιμούν την ιστορία, την αρχιτεκτονική και το τοπίο."
          }
        },
        {
          title: { en: "What is Monemvasia best known for?", el: "Για τι φημίζεται η Μονεμβασιά;" },
          text: {
            en: "It is best known for its medieval fortress town, stone alleys, sea-rock setting, and romantic atmosphere.",
            el: "Είναι κυρίως γνωστή για τη μεσαιωνική καστροπολιτεία της, τα πέτρινα σοκάκια, το σκηνικό πάνω στον βράχο και τη ρομαντική της ατμόσφαιρα."
          }
        },
        {
          title: { en: "Is Monemvasia good for couples?", el: "Είναι η Μονεμβασιά ιδανική για ζευγάρια;" },
          text: {
            en: "Very much so. It is one of the strongest romantic destinations in the Peloponnese because of its mood, architecture, and slower travel style.",
            el: "Πάρα πολύ. Είναι ένας από τους κορυφαίους ρομαντικούς προορισμούς στην Πελοπόννησο χάρη στην ατμόσφαιρά της, την αρχιτεκτονική της και τον πιο χαλαρό ρυθμό ταξιδιού."
          }
        },
        {
          title: { en: "How many days do you need in Monemvasia?", el: "Πόσες μέρες χρειάζομαι στη Μονεμβασιά;" },
          text: {
            en: "It can be seen briefly, but it is far more rewarding when you stay overnight and experience the destination after day visitors leave.",
            el: "Μπορείτε να τη δείτε έστω και για λίγο, αλλά είναι πολύ πιο απολαυστική όταν διανυκτερεύσετε και ζήσετε τον προορισμό αφού φύγουν οι επισκέπτες της ημέρας."
          }
        },
        {
          title: { en: "Is Monemvasia only for history lovers?", el: "Είναι η Μονεμβασιά μόνο για λάτρεις της ιστορίας;" },
          text: {
            en: "No. Even travelers who are not deeply interested in history often enjoy it because the appeal is also visual, atmospheric, and emotional.",
            el: "Όχι. Ακόμα και ταξιδιώτες που δεν ενδιαφέρονται έντονα για την ιστορία, συχνά τη λατρεύουν, καθώς η γοητεία της είναι εξίσου οπτική, ατμοσφαιρική και συναισθηματική."
          }
        },
        {
          title: { en: "Can Monemvasia be part of a wider Peloponnese trip?", el: "Μπορεί να συνδυαστεί με ένα ταξίδι στην Πελοπόννησο;" },
          text: {
            en: "Yes. It works very well as a distinctive stop within a broader Peloponnese route.",
            el: "Ναι. Λειτουργεί εξαιρετικά ως μια ξεχωριστή στάση στο πλαίσιο μιας ευρύτερης διαδρομής στην Πελοπόννησο."
          }
        }
      ]
    }
  ],

  halkidiki: [
    {
      layout: "list",
      title: { en: "Why Visit Halkidiki", el: "Γιατί να πας στη Χαλκιδική" },
      text: {
        en: "Halkidiki is a strong choice for travelers who want some of the best summer beaches in northern Greece, a destination with many different base options, easy access by road compared with many islands, a mix of lively and quieter coastal areas, and pine scenery combined with clear sea and beach-focused travel.\n\nIt is one of those destinations that works especially well when you choose the right area for your travel style.",
        el: "Η Χαλκιδική είναι μια εξαιρετική επιλογή για ταξιδιώτες που αναζητούν μερικές από τις καλύτερες καλοκαιρινές παραλίες στη βόρεια Ελλάδα, έναν προορισμό με πολλές διαφορετικές επιλογές βάσης, εύκολη οδική πρόσβαση σε σύγκριση με πολλά νησιά, έναν συνδυασμό από ζωντανές αλλά και πιο ήσυχες παράκτιες περιοχές, και τοπία με πεύκα που σμίγουν με την καθαρή θάλασσα.\n\nΕίναι από τους προορισμούς που λειτουργούν εξαιρετικά καλά όταν επιλέγετε τη σωστή περιοχή για το προσωπικό σας στυλ ταξιδιού."
      }
    },
    {
      layout: "grid",
      title: { en: "Best Areas and Highlights in Halkidiki", el: "Οι Καλύτερες Περιοχές & Αξιοθέατα" },
      text: {
        en: "Where to base your stay or focus your time in the region.",
        el: "Πού να μείνετε ή να αφιερώσετε τον χρόνο σας στην περιοχή."
      },
      items: [
        {
          title: { en: "Kassandra", el: "Κασσάνδρα" },
          text: {
            en: "Kassandra is usually the most developed and lively part of Halkidiki for holiday travel. It suits visitors who want beach clubs, resort comfort, active summer atmosphere, and easy access to organized beaches and dining.",
            el: "Η Κασσάνδρα είναι συνήθως το πιο ανεπτυγμένο και ζωντανό κομμάτι της Χαλκιδικής. Ταιριάζει σε επισκέπτες που θέλουν beach clubs, ανέσεις resort, έντονη καλοκαιρινή ατμόσφαιρα και εύκολη πρόσβαση σε οργανωμένες παραλίες και φαγητό."
          }
        },
        {
          title: { en: "Sithonia", el: "Σιθωνία" },
          text: {
            en: "Sithonia is often the choice for travelers who want a more scenic and relaxed trip. It feels greener, more spacious, and in many cases more naturally beautiful. It is especially appealing for beach lovers, couples, and travelers who prefer a slower rhythm.",
            el: "Η Σιθωνία είναι συχνά η επιλογή για ταξιδιώτες που επιθυμούν ένα πιο γραφικό και χαλαρό ταξίδι. Έχει πιο πράσινη αίσθηση, περισσότερους χώρους και εντυπωσιακή φυσική ομορφιά. Ελκύει κυρίως τους λάτρεις της παραλίας και τα ζευγάρια."
          }
        },
        {
          title: { en: "The Mount Athos side", el: "Η πλευρά του Άθω" },
          text: {
            en: "This part of Halkidiki adds a different dimension to the region. Even for visitors who are not specifically traveling for religious or cultural reasons, it gives Halkidiki more depth and a sense of place beyond the standard summer-coast format.",
            el: "Αυτό το κομμάτι προσθέτει μια διαφορετική διάσταση στην περιοχή. Ακόμα και για επισκέπτες που δεν ταξιδεύουν για θρησκευτικούς λόγους, δίνει στη Χαλκιδική βάθος και μια αίσθηση του τόπου πέρα από το τυπικό καλοκαιρινό μοτίβο."
          }
        },
        {
          title: { en: "The wider northern Greece context", el: "Η ευρύτερη περιοχή της Βόρειας Ελλάδας" },
          text: {
            en: "Halkidiki also works well as part of a broader northern Greece itinerary, especially when combined with Thessaloniki or other regional road-trip ideas.",
            el: "Η Χαλκιδική λειτουργεί άψογα και ως μέρος ενός ευρύτερου προγράμματος στη βόρεια Ελλάδα, ειδικά όταν συνδυάζεται με τη Θεσσαλονίκη ή άλλα τοπικά road trips."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Beaches and Attractions", el: "Παραλίες & Αξιοθέατα" },
      text: {
        en: "Halkidiki is above all a summer sea destination, but its variety is what makes it stand out.\n\n**Kassandra beach life**\nThis side is often chosen for ease, beach energy, nightlife access, and classic organized summer atmosphere.\n\n**Sithonia beaches**\nSithonia offers some of the region's most attractive swimming spots, often with greener surroundings and a more relaxed visual character.\n\n**Coastal drives and scenic stops**\nPart of the pleasure of Halkidiki comes from moving between beach areas, viewpoints, pine-covered roads, and different coastal moods.\n\n**Village and seaside bases**\nAlthough beaches are central, Halkidiki also benefits from having different small bases and local centers that shape the tone of each trip.\n\n**A summer region with range**\nThe region's strength is not one single attraction but the fact that travelers can tailor the experience to their own pace and style.",
        el: "Η Χαλκιδική είναι πάνω απ' όλα ένας καλοκαιρινός παραθαλάσσιος προορισμός, αλλά η ποικιλία της είναι αυτό που την κάνει να ξεχωρίζει.\n\n**Η ζωή στις παραλίες της Κασσάνδρας**\nΑυτή η πλευρά επιλέγεται συχνά για την ευκολία, την ενέργεια, την πρόσβαση στη νυχτερινή ζωή και την κλασική οργανωμένη καλοκαιρινή ατμόσφαιρα.\n\n**Παραλίες της Σιθωνίας**\nΗ Σιθωνία προσφέρει μερικά από τα πιο ελκυστικά σημεία για κολύμπι στην περιοχή, συχνά με πιο πράσινο περιβάλλον και πιο χαλαρό οπτικό χαρακτήρα.\n\n**Παράκτιες διαδρομές και γραφικές στάσεις**\nΜέρος της απόλαυσης στη Χαλκιδική προέρχεται από την οδήγηση ανάμεσα σε περιοχές, σημεία με θέα, πευκόφυτους δρόμους και διαφορετικές παραθαλάσσιες εικόνες.\n\n**Χωριά και παραθαλάσσιες βάσεις**\nΑν και οι παραλίες είναι στο επίκεντρο, η Χαλκιδική διαθέτει επίσης μικρά κέντρα και χωριά που διαμορφώνουν τον τόνο κάθε ταξιδιού.\n\n**Μια καλοκαιρινή περιοχή με εύρος**\nΗ δύναμη της περιοχής δεν είναι ένα μεμονωμένο αξιοθέατο, αλλά το γεγονός ότι οι ταξιδιώτες μπορούν να προσαρμόσουν την εμπειρία στους δικούς τους ρυθμούς."
      }
    },
    {
      layout: "list",
      title: { en: "Food and Local Flavors", el: "Φαγητό & Τοπικές Γεύσεις" },
      text: {
        en: "Food in Halkidiki is closely tied to the summer holiday experience. Many of the best moments here are simple: seafood by the sea, relaxed tavern meals after the beach, long summer lunches, dinners in coastal bases, and familiar Greek holiday flavors in easy, scenic settings.\n\nHalkidiki is not only about resort food. In the right places, the region can also offer more local and grounded meals that connect well with northern Greek traditions and the slower side of seaside travel. The destination works best when food is treated as part of the day's rhythm rather than only a practical stop between beach visits.\n\n[Explore our Greece food & drink guides for more local travel ideas](/collections/greece-food-and-drink).",
        el: "Το φαγητό στη Χαλκιδική είναι στενά συνδεδεμένο με την εμπειρία των καλοκαιρινών διακοπών. Πολλές από τις καλύτερες στιγμές εδώ είναι απλές: θαλασσινά δίπλα στο κύμα, χαλαρά γεύματα σε ταβέρνες μετά το μπάνιο, μακρόσυρτα καλοκαιρινά μεσημεριανά, δείπνα στα χωριά και γνώριμες ελληνικές γεύσεις σε γραφικά σκηνικά.\n\nΗ Χαλκιδική δεν εξαντλείται στο φαγητό των resorts. Στα κατάλληλα σημεία, η περιοχή μπορεί να προσφέρει πιο τοπικά και αυθεντικά γεύματα, συνδεδεμένα με τις παραδόσεις της βόρειας Ελλάδας. Ο προορισμός λειτουργεί καλύτερα όταν το φαγητό αντιμετωπίζεται ως μέρος του ρυθμού της ημέρας, και όχι απλώς ως μια πρακτική στάση ενδιάμεσα στις παραλίες.\n\n[Ανακαλύψτε τοπικές γεύσεις στους οδηγούς μας](/collections/greece-food-and-drink)."
      }
    },
    {
      layout: "numbered",
      title: { en: "Where to Stay in Halkidiki", el: "Πού να Μείνετε στη Χαλκιδική" },
      text: {
        en: "Where you stay in Halkidiki is one of the most important decisions, because the region changes a lot from area to area. [Explore our Halkidiki hotel recommendations](/hotels?destination=halkidiki).",
        el: "Η περιοχή που θα επιλέξετε για διαμονή είναι από τις πιο σημαντικές αποφάσεις, καθώς η Χαλκιδική αλλάζει ριζικά ανάλογα με τη χερσόνησο. [Ανακαλύψτε τις προτάσεις μας για διαμονή](/hotels?destination=halkidiki)."
      },
      items: [
        {
          title: { en: "Stay in Kassandra if", el: "Μείνετε στην Κασσάνδρα αν" },
          text: {
            en: "You want a classic summer holiday base. Beach clubs, nightlife, and organized resorts matter to your trip. You prefer convenience and activity.",
            el: "Θέλετε μια κλασική βάση καλοκαιρινών διακοπών. Τα beach clubs, η νυχτερινή ζωή και τα οργανωμένα resorts είναι σημαντικά για το ταξίδι σας. Προτιμάτε την άνεση και τη δράση."
          }
        },
        {
          title: { en: "Stay in Sithonia if", el: "Μείνετε στη Σιθωνία αν" },
          text: {
            en: "You want a more scenic and relaxed coastal atmosphere. Your trip is more about beaches, nature, and slower exploration. You prefer a less built-up feel.",
            el: "Αναζητάτε μια πιο γραφική και χαλαρή παραθαλάσσια ατμόσφαιρα. Το ταξίδι σας αφορά περισσότερο τις παραλίες, τη φύση και την αργή εξερεύνηση. Προτιμάτε ένα λιγότερο δομημένο περιβάλλον."
          }
        },
        {
          title: { en: "Choose your base carefully if", el: "Επιλέξτε τη βάση σας προσεκτικά αν" },
          text: {
            en: "You want to minimize driving. You are traveling with family. You are deciding between social energy and quiet beach time.",
            el: "Θέλετε να ελαχιστοποιήσετε την οδήγηση. Ταξιδεύετε με την οικογένειά σας. Αμφιταλαντεύεστε ανάμεσα στην κοινωνική ενέργεια και τις ήσυχες στιγμές στην παραλία."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Things to Do in Halkidiki", el: "Τι να Κάνετε στη Χαλκιδική" },
      text: {
        en: "Halkidiki works best when you build your trip around the coast and your chosen base. Some of the best ways to enjoy the region include spending full days at different beaches, exploring more than one peninsula if time allows, mixing organized beach days with quieter scenic spots, enjoying coastal drives and seaside meals, and balancing easy summer rhythm with a bit of regional discovery.\n\nThis is not a destination that needs a long sightseeing checklist to feel rewarding. In many cases, the real pleasure of Halkidiki comes from choosing the right area, the right beaches, and the right pace.\n\n[Explore our Halkidiki tours and experiences](/tours/all).",
        el: "Η Χαλκιδική είναι στα καλύτερά της όταν χτίζετε το ταξίδι σας γύρω από την ακτογραμμή και τη βάση σας. Οι καλύτεροι τρόποι για να την απολαύσετε περιλαμβάνουν την αφιέρωση ολόκληρων ημερών σε διαφορετικές παραλίες, την εξερεύνηση περισσότερων της μίας χερσονήσου, τον συνδυασμό οργανωμένων παραλιών με πιο ήσυχα σημεία, τις παραθαλάσσιες διαδρομές, και την ισορροπία ανάμεσα στον χαλαρό καλοκαιρινό ρυθμό και τη στοιχειώδη ανακάλυψη της περιοχής.\n\nΔεν χρειάζεστε μεγάλες λίστες με αξιοθέατα για να νιώσετε ικανοποίηση. Η πραγματική απόλαυση εδώ έρχεται από την επιλογή της σωστής περιοχής, των σωστών παραλιών και του σωστού ρυθμού.\n\n[Δείτε εμπειρίες και tours στη Χαλκιδική](/tours/all)."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit", el: "Η Καλύτερη Εποχή για να Πάτε" },
      text: {
        en: "Halkidiki is primarily a warm-season destination and is especially popular from late spring to early autumn.\n\nJune and September are often excellent months for travelers who want very good weather with a more balanced pace. July and August are the busiest summer months, especially in more popular holiday areas. Late spring and early autumn can work very well for beach-focused travelers who prefer less pressure than peak season.\n\nThe destination is strongest when sea conditions, sunshine, and beach life can fully shape the trip.",
        el: "Η Χαλκιδική είναι κυρίως ένας προορισμός για τη θερμή περίοδο και είναι ιδιαίτερα δημοφιλής από τα τέλη της άνοιξης έως τις αρχές του φθινοπώρου.\n\nΟ Ιούνιος και ο Σεπτέμβριος είναι συχνά εξαιρετικοί μήνες για ταξιδιώτες που θέλουν πολύ καλό καιρό με πιο ισορροπημένο ρυθμό. Ο Ιούλιος και ο Αύγουστος είναι οι πιο πολυσύχναστοι μήνες, ειδικά στις δημοφιλείς περιοχές. Το τέλος της άνοιξης και οι αρχές του φθινοπώρου προσφέρονται για όσους αγαπούν τη θάλασσα αλλά θέλουν λιγότερη πολυκοσμία.\n\nΟ προορισμός είναι στα καλύτερά του όταν οι συνθήκες της θάλασσας, η ηλιοφάνεια και η ζωή στην παραλία μπορούν να καθορίσουν πλήρως το ταξίδι."
      }
    },
    {
      layout: "faq",
      title: { en: "FAQ About Halkidiki", el: "Συχνές Ερωτήσεις για τη Χαλκιδική" },
      text: {
        en: "Common questions for planning your trip.",
        el: "Συχνές ερωτήσεις για να οργανώσετε το ταξίδι σας."
      },
      items: [
        {
          title: { en: "Is Halkidiki worth visiting?", el: "Αξίζει να πάω στη Χαλκιδική;" },
          text: {
            en: "Yes. Halkidiki is one of the most appealing summer destinations in northern Greece, especially for travelers who want beaches, coastal variety, and a choice of different holiday bases.",
            el: "Ναι. Η Χαλκιδική είναι ένας από τους πιο ελκυστικούς καλοκαιρινούς προορισμούς στη βόρεια Ελλάδα, ειδικά για όσους αναζητούν παραλίες, παράκτια ποικιλία και πολλές επιλογές για βάση διακοπών."
          }
        },
        {
          title: { en: "What is Halkidiki best known for?", el: "Για τι φημίζεται η Χαλκιδική;" },
          text: {
            en: "It is best known for its three peninsulas, clear waters, pine scenery, and its mix of lively and quieter beach areas.",
            el: "Είναι κυρίως γνωστή για τις τρεις χερσονήσους της, τα καθαρά νερά, τα πευκόφυτα τοπία και τον συνδυασμό ζωντανών και ήσυχων παραλιών."
          }
        },
        {
          title: { en: "Which is better, Kassandra or Sithonia?", el: "Τι είναι καλύτερο, η Κασσάνδρα ή η Σιθωνία;" },
          text: {
            en: "That depends on your travel style. Kassandra is usually more lively and developed, while Sithonia is often more scenic and relaxed.",
            el: "Αυτό εξαρτάται από το στυλ του ταξιδιού σας. Η Κασσάνδρα είναι συνήθως πιο ζωντανή και ανεπτυγμένη, ενώ η Σιθωνία είναι πιο γραφική και χαλαρή."
          }
        },
        {
          title: { en: "Is Halkidiki good for families?", el: "Είναι η Χαλκιδική καλή για οικογένειες;" },
          text: {
            en: "Yes. Many areas in Halkidiki can work very well for families, especially when you choose a base that fits your pace and beach preferences.",
            el: "Ναι. Πολλές περιοχές στη Χαλκιδική λειτουργούν εξαιρετικά για οικογένειες, ειδικά όταν επιλέγετε μια βάση που ταιριάζει στους δικούς σας ρυθμούς."
          }
        },
        {
          title: { en: "Do you need a car in Halkidiki?", el: "Χρειάζομαι αυτοκίνητο στη Χαλκιδική;" },
          text: {
            en: "It is often very useful, especially if you want to explore different beaches or compare areas rather than staying in one resort zone the whole time.",
            el: "Είναι συνήθως πολύ χρήσιμο, ειδικά αν θέλετε να εξερευνήσετε διαφορετικές παραλίες ή να συγκρίνετε περιοχές, αντί να μείνετε σε ένα μόνο resort καθ' όλη τη διάρκεια."
          }
        },
        {
          title: { en: "Can Halkidiki be combined with Thessaloniki?", el: "Μπορεί να συνδυαστεί με τη Θεσσαλονίκη;" },
          text: {
            en: "Yes. It often works very well as part of a broader northern Greece trip, especially for travelers who want to combine city time with beach time.",
            el: "Ναι. Συνδυάζεται άψογα στο πλαίσιο ενός ευρύτερου ταξιδιού στη βόρεια Ελλάδα, ειδικά για ταξιδιώτες που θέλουν να μοιράσουν τον χρόνο τους ανάμεσα στην πόλη και την παραλία."
          }
        }
      ]
    }
  ],

  meteora: [
    {
      layout: "list",
      title: { en: "Why Visit Meteora", el: "Γιατί να πας στα Μετέωρα" },
      text: {
        en: "Meteora is a strong choice for travelers who want one of the most unique landscapes in Greece, a destination with UNESCO-level historic and cultural significance, dramatic viewpoints and memorable photography, monastery visits and a deeper sense of place, and a rewarding mainland stop that feels very different from beach-driven Greece.\n\nThis is not a destination built around nightlife, shopping, or resort life. It is about landscape, atmosphere, scale, and meaning.",
        el: "Τα Μετέωρα είναι μια εξαιρετική επιλογή για ταξιδιώτες που αναζητούν ένα από τα πιο μοναδικά τοπία στην Ελλάδα, έναν προορισμό με ιστορική και πολιτιστική σημασία επιπέδου UNESCO, δραματικά σημεία θέας και αξέχαστη φωτογραφία, επισκέψεις σε μοναστήρια και μια βαθύτερη αίσθηση του τόπου, καθώς και μια ικανοποιητική στάση στην ηπειρωτική χώρα που διαφέρει πολύ από την παραθαλάσσια Ελλάδα.\n\nΑυτός δεν είναι ένας προορισμός χτισμένος γύρω από τη νυχτερινή ζωή, τα ψώνια ή τη ζωή στα resorts. Εδώ, το επίκεντρο είναι το τοπίο, η ατμόσφαιρα, η κλίμακα και το νόημα."
      }
    },
    {
      layout: "grid",
      title: { en: "Best Areas and Highlights in Meteora", el: "Οι Καλύτερες Περιοχές & Αξιοθέατα" },
      text: {
        en: "Where to base your stay or focus your time in the region.",
        el: "Πού να μείνετε ή να αφιερώσετε τον χρόνο σας στην περιοχή."
      },
      items: [
        {
          title: { en: "Kalambaka", el: "Καλαμπάκα" },
          text: {
            en: "Kalambaka is the main base for most visitors and the most practical place to stay. It offers easy access to the Meteora area, useful services, accommodation options, and a straightforward starting point for exploring the monasteries and viewpoints.",
            el: "Η Καλαμπάκα είναι η κύρια βάση για τους περισσότερους επισκέπτες και το πιο πρακτικό μέρος για διαμονή. Προσφέρει εύκολη πρόσβαση στην περιοχή των Μετεώρων, χρήσιμες υπηρεσίες, επιλογές διαμονής και μια απλή αφετηρία για την εξερεύνηση των μοναστηριών και των σημείων θέας."
          }
        },
        {
          title: { en: "Kastraki", el: "Καστράκι" },
          text: {
            en: "Kastraki has a quieter and more scenic village feel and is often preferred by travelers who want a more atmospheric stay close to the rock formations themselves.",
            el: "Το Καστράκι έχει μια πιο ήσυχη και γραφική αίσθηση χωριού και συχνά προτιμάται από ταξιδιώτες που αναζητούν μια πιο ατμοσφαιρική διαμονή κοντά στους ίδιους τους βραχώδεις σχηματισμούς."
          }
        },
        {
          title: { en: "The monastery zone", el: "Η ζώνη των μοναστηριών" },
          text: {
            en: "This is the core of the experience and the reason most visitors come. The monasteries and the surrounding roads, viewpoints, and dramatic rock backdrop define the destination.",
            el: "Αυτός είναι ο πυρήνας της εμπειρίας και ο λόγος που έρχονται οι περισσότεροι επισκέπτες. Τα μοναστήρια, οι γύρω δρόμοι, τα σημεία θέας και το εντυπωσιακό φόντο των βράχων καθορίζουν τον προορισμό."
          }
        },
        {
          title: { en: "Sunset and panoramic points", el: "Σημεία για ηλιοβασίλεμα και πανοραμική θέα" },
          text: {
            en: "Part of Meteora's appeal is not only visiting individual places, but also experiencing the broader landscape from different angles and at different times of day.",
            el: "Μέρος της γοητείας των Μετεώρων δεν είναι μόνο η επίσκεψη σε μεμονωμένα μέρη, αλλά και η εμπειρία του ευρύτερου τοπίου από διαφορετικές οπτικές γωνίες και σε διαφορετικές ώρες της ημέρας."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Main Attractions in Meteora", el: "Βασικά Αξιοθέατα" },
      text: {
        en: "Meteora is a destination where the main attractions are tied closely to the landscape itself.\n\n**The cliff-top monasteries**\nThese are the defining landmarks of the region and the main reason Meteora feels so extraordinary. Even visitors who are not deeply religious usually find the setting deeply impressive.\n\n**The rock formations**\nThe geological scale of Meteora is a major part of the experience. The landscape creates a sense of height, isolation, and calm that is rare.\n\n**Viewpoints and scenic drives**\nMany of the most memorable moments in Meteora come from stopping, looking, and taking in the wider panorama rather than rushing from one point to another.\n\n**Kastraki and the surrounding base villages**\nThe villages add practical value and a softer human scale to a destination that might otherwise feel purely monumental.\n\n**Sunrise and sunset atmosphere**\nLighting changes the whole mood of Meteora, which is why timing matters here more than in many other destinations.",
        el: "Τα Μετέωρα είναι ένας προορισμός όπου τα κύρια αξιοθέατα είναι στενά συνδεδεμένα με το ίδιο το τοπίο.\n\n**Τα μοναστήρια στις κορυφές των βράχων**\nΑυτά είναι τα καθοριστικά ορόσημα της περιοχής και ο κύριος λόγος που τα Μετέωρα φαίνονται τόσο εξωπραγματικά. Ακόμα και επισκέπτες που δεν είναι βαθιά θρησκευόμενοι συνήθως βρίσκουν το σκηνικό εξαιρετικά εντυπωσιακό.\n\n**Οι βραχώδεις σχηματισμοί**\nΗ γεωλογική κλίμακα των Μετεώρων είναι σημαντικό κομμάτι της εμπειρίας. Το τοπίο δημιουργεί μια σπάνια αίσθηση ύψους, απομόνωσης και γαλήνης.\n\n**Σημεία θέας και γραφικές διαδρομές**\nΠολλές από τις πιο αξέχαστες στιγμές προέρχονται από το να σταματήσετε, να κοιτάξετε και να απορροφήσετε το ευρύτερο πανόραμα, παρά να βιαστείτε από το ένα σημείο στο άλλο.\n\n**Το Καστράκι και τα γύρω χωριά**\nΤα χωριά προσθέτουν πρακτική αξία και μια πιο ήπια ανθρώπινη κλίμακα σε έναν προορισμό που διαφορετικά θα φάνταζε αμιγώς μνημειακός.\n\n**Η ατμόσφαιρα κατά την ανατολή και τη δύση**\nΟ φωτισμός αλλάζει ολόκληρη τη διάθεση των Μετεώρων, γι' αυτό και ο σωστός συγχρονισμός έχει εδώ μεγαλύτερη σημασία από ό,τι σε πολλούς άλλους προορισμούς."
      }
    },
    {
      layout: "list",
      title: { en: "Food and Local Flavors", el: "Φαγητό & Τοπικές Γεύσεις" },
      text: {
        en: "Food in Meteora is less about big-city variety and more about grounding the trip in something simple and local after the scale of the landscape. Many visitors enjoy traditional Greek meals after sightseeing, relaxed tavern dinners, regional mainland flavors, quiet meals with mountain and rock views, and slower evenings after a day of walking and exploring.\n\nThis is not a destination where food overwhelms the experience. Instead, it supports it. A good meal in Meteora often feels like part of the calm that follows the visual intensity of the day.\n\n[Explore our Greece food & drink guides for more local travel ideas](/collections/greece-food-and-drink).",
        el: "Το φαγητό στα Μετέωρα δεν αφορά την ποικιλία μιας μεγαλούπολης, αλλά προσφέρει μια απλή, τοπική προσγείωση μετά το δέος του τοπίου. Πολλοί επισκέπτες απολαμβάνουν παραδοσιακά ελληνικά γεύματα μετά τις περιηγήσεις, χαλαρά δείπνα σε ταβέρνες, γεύσεις της ηπειρωτικής ενδοχώρας, ήσυχα γεύματα με θέα τα βουνά και τους βράχους, και αργά βράδια μετά από μια μέρα περπατήματος και εξερεύνησης.\n\nΔεν πρόκειται για προορισμό όπου το φαγητό επισκιάζει την εμπειρία. Αντίθετα, την υποστηρίζει. Ένα καλό γεύμα στα Μετέωρα μοιάζει συχνά με μέρος της ηρεμίας που ακολουθεί την οπτική ένταση της ημέρας.\n\n[Ανακαλύψτε τοπικές γεύσεις στους οδηγούς μας](/collections/greece-food-and-drink)."
      }
    },
    {
      layout: "numbered",
      title: { en: "Where to Stay in Meteora", el: "Πού να Μείνετε στα Μετέωρα" },
      text: {
        en: "Where you stay in Meteora depends on the kind of atmosphere you want. [Explore our Meteora hotel recommendations](/hotels?destination=meteora).",
        el: "Η περιοχή που θα επιλέξετε για διαμονή στα Μετέωρα εξαρτάται από το είδος της ατμόσφαιρας που επιθυμείτε. [Ανακαλύψτε τις προτάσεις μας για διαμονή](/hotels?destination=meteora)."
      },
      items: [
        {
          title: { en: "Stay in Kalambaka if", el: "Μείνετε στην Καλαμπάκα αν" },
          text: {
            en: "You want the most practical and convenient base. You prefer easier access to services and transport. You are building Meteora into a broader mainland trip.",
            el: "Θέλετε την πιο πρακτική και βολική βάση. Προτιμάτε ευκολότερη πρόσβαση σε υπηρεσίες και συγκοινωνίες. Εντάσσετε τα Μετέωρα σε ένα ευρύτερο ταξίδι στην ηπειρωτική χώρα."
          }
        },
        {
          title: { en: "Stay in Kastraki if", el: "Μείνετε στο Καστράκι αν" },
          text: {
            en: "You want a quieter and more atmospheric setting. Being close to the rock formations matters more to your trip. You prefer a more scenic and intimate base.",
            el: "Αναζητάτε ένα πιο ήσυχο και ατμοσφαιρικό περιβάλλον. Το να είστε κοντά στους βράχους είναι πολύ σημαντικό για εσάς. Προτιμάτε μια πιο γραφική και οικεία βάση."
          }
        },
        {
          title: { en: "Choose a view-oriented stay if", el: "Επιλέξτε διαμονή με θέα αν" },
          text: {
            en: "Landscape and overall atmosphere are central to your experience. You want your stay to feel more connected to the destination itself rather than just functional.",
            el: "Το τοπίο και η συνολική ατμόσφαιρα βρίσκονται στο επίκεντρο της εμπειρίας σας. Θέλετε η διαμονή σας να έχει μια βαθύτερη σύνδεση με τον ίδιο τον προορισμό και όχι απλώς πρακτική αξία."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Things to Do in Meteora", el: "Τι να Κάνετε στα Μετέωρα" },
      text: {
        en: "Meteora is best experienced at a steady pace. Some of the most rewarding ways to spend time here include visiting selected monasteries rather than trying to rush through everything, stopping at viewpoints and scenic roads, spending time in Kalambaka or Kastraki between visits, planning around light, weather, and quieter moments, and combining cultural interest with walking, photography, and simple exploration.\n\nThis is one of those places where quality matters more than quantity. A smaller number of meaningful stops usually creates a better trip than trying to “complete” everything too quickly.\n\n[Explore our Meteora tours and experiences](/tours/all).",
        el: "Τα Μετέωρα βιώνονται καλύτερα με σταθερό και ήρεμο ρυθμό. Μερικοί από τους καλύτερους τρόπους για να περάσετε τον χρόνο σας περιλαμβάνουν την επίσκεψη σε επιλεγμένα μοναστήρια αντί για ένα βιαστικό πέρασμα από όλα, στάσεις σε σημεία θέας και γραφικούς δρόμους, χρόνο στην Καλαμπάκα ή το Καστράκι, προγραμματισμό με βάση τον φωτισμό και τις πιο ήσυχες ώρες, και συνδυασμό πολιτιστικού ενδιαφέροντος με περπάτημα, φωτογραφία και απλή εξερεύνηση.\n\nΕίναι από εκείνα τα μέρη όπου η ποιότητα μετράει περισσότερο από την ποσότητα. Λιγότερες, αλλά πιο ουσιαστικές στάσεις συνήθως δημιουργούν ένα καλύτερο ταξίδι.\n\n[Δείτε εμπειρίες και tours στα Μετέωρα](/tours/all)."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit", el: "Η Καλύτερη Εποχή για να Πάτε" },
      text: {
        en: "Meteora can be rewarding well beyond peak summer, which makes it different from many of Greece's more seasonal destinations.\n\nSpring and autumn are especially attractive for walking, views, and more balanced temperatures. Summer can still work well, especially for travelers combining Meteora with a broader mainland route, but midday heat can affect the pace. Shoulder season often suits Meteora very well because the destination is driven more by landscape and cultural interest than by beach weather.\n\nWeather, visibility, and time of day all affect the experience more here than in many other destinations.",
        el: "Τα Μετέωρα μπορεί να είναι ένας απολαυστικός προορισμός πολύ πέρα από το απόγειο του καλοκαιριού, γεγονός που τα διαφοροποιεί από πολλούς άλλους εποχιακού προορισμούς στην Ελλάδα.\n\nΗ άνοιξη και το φθινόπωρο είναι ιδιαίτερα ελκυστικά για περπάτημα, θέα και πιο ισορροπημένες θερμοκρασίες. Το καλοκαίρι μπορεί επίσης να είναι υπέροχο, ειδικά αν τα Μετέωρα είναι μέρος μιας ευρύτερης διαδρομής, ωστόσο η μεσημεριανή ζέστη μπορεί να επηρεάσει τους ρυθμούς σας. Η ενδιάμεση εποχή συχνά ταιριάζει εξαιρετικά στα Μετέωρα, επειδή ο προορισμός βασίζεται περισσότερο στο τοπίο και το πολιτιστικό ενδιαφέρον, παρά στον καιρό για μπάνιο.\n\nΟ καιρός, η ορατότητα και η ώρα της ημέρας επηρεάζουν την εμπειρία εδώ πολύ περισσότερο από ό,τι σε άλλους προορισμούς."
      }
    },
    {
      layout: "faq",
      title: { en: "FAQ About Meteora", el: "Συχνές Ερωτήσεις για τα Μετέωρα" },
      text: {
        en: "Common questions for planning your trip.",
        el: "Συχνές ερωτήσεις για να οργανώσετε το ταξίδι σας."
      },
      items: [
        {
          title: { en: "Is Meteora worth visiting?", el: "Αξίζει να πάω στα Μετέωρα;" },
          text: {
            en: "Yes. Meteora is one of the most unique and memorable destinations in Greece, especially for travelers interested in landscapes, monasteries, and cultural significance.",
            el: "Ναι. Τα Μετέωρα είναι ένας από τους πιο μοναδικούς και αξέχαστους προορισμούς στην Ελλάδα, ειδικά για όσους ενδιαφέρονται για φυσικά τοπία, μοναστήρια και πολιτιστική κληρονομιά."
          }
        },
        {
          title: { en: "What is Meteora best known for?", el: "Για τι φημίζονται τα Μετέωρα;" },
          text: {
            en: "It is best known for its giant rock formations and monasteries built high above the surrounding landscape.",
            el: "Φημίζονται κυρίως για τους γιγάντιους βραχώδεις σχηματισμούς και τα μοναστήρια που είναι χτισμένα ψηλά πάνω από το τοπίο."
          }
        },
        {
          title: { en: "How many days do you need in Meteora?", el: "Πόσες μέρες χρειάζομαι στα Μετέωρα;" },
          text: {
            en: "Many travelers visit briefly, but Meteora is more rewarding when you have enough time for views, monastery visits, and a slower pace.",
            el: "Πολλοί περνούν μόνο για λίγο, αλλά τα Μετέωρα είναι πολύ πιο ικανοποιητικά όταν αφιερώσετε αρκετό χρόνο για τη θέα, τις επισκέψεις στα μοναστήρια και μια πιο ήρεμη εξερεύνηση."
          }
        },
        {
          title: { en: "Is Meteora only for religious travelers?", el: "Είναι μόνο για θρησκευτικό τουρισμό;" },
          text: {
            en: "No. Even travelers without a religious focus often find Meteora deeply impressive because of its landscape, history, and atmosphere.",
            el: "Όχι. Ακόμα και ταξιδιώτες χωρίς θρησκευτικό ενδιαφέρον συνήθως εντυπωσιάζονται βαθιά από το τοπίο, την ιστορία και την ατμόσφαιρα."
          }
        },
        {
          title: { en: "Should you stay in Kalambaka or Kastraki?", el: "Να μείνω Καλαμπάκα ή Καστράκι;" },
          text: {
            en: "Kalambaka is more practical, while Kastraki is often more atmospheric and scenic.",
            el: "Η Καλαμπάκα είναι πιο πρακτική και εξυπηρετική, ενώ το Καστράκι είναι συχνά πιο ατμοσφαιρικό και γραφικό."
          }
        },
        {
          title: { en: "Can Meteora be part of a mainland Greece road trip?", el: "Συνδυάζεται με road trip στην ενδοχώρα;" },
          text: {
            en: "Yes. It works very well as part of a broader route through northern or central Greece.",
            el: "Ναι. Συνδυάζεται εξαιρετικά ως σταθμός μιας ευρύτερης διαδρομής στη βόρεια ή κεντρική Ελλάδα."
          }
        }
      ]
    }
  ],

  parga: [
    {
      layout: "list",
      title: { en: "Why Visit Parga", el: "Γιατί να πας στην Πάργα" },
      text: {
        en: "Parga is a strong choice for travelers who want a picturesque seaside town with strong visual charm, easy beach access without going to an island, a destination that works well for short stays and summer escapes, a balance of waterfront atmosphere, swimming, and relaxed evenings, and a coastal base with a softer Ionian feel.\n\nIt is the kind of place that feels immediately pleasant and does not need much effort to enjoy.",
        el: "Η Πάργα είναι μια εξαιρετική επιλογή για ταξιδιώτες που θέλουν μια γραφική παραθαλάσσια πόλη με έντονη οπτική γοητεία, εύκολη πρόσβαση σε παραλίες χωρίς να πάνε σε νησί, έναν προορισμό ιδανικό για σύντομες διαμονές και καλοκαιρινές αποδράσεις, μια ισορροπία ανάμεσα σε ατμόσφαιρα προκυμαίας, κολύμπι και χαλαρά βράδια, και μια παραθαλάσσια βάση με πιο απαλή αίσθηση Ιονίου.\n\nΕίναι το είδος του μέρους που σε κάνει να νιώθεις αμέσως όμορφα και δεν απαιτεί ιδιαίτερη προσπάθεια για να το απολαύσεις."
      }
    },
    {
      layout: "grid",
      title: { en: "Best Areas and Highlights in Parga", el: "Οι Καλύτερες Περιοχές & Αξιοθέατα" },
      text: {
        en: "Where to base your stay or focus your time in the region.",
        el: "Πού να μείνετε ή να αφιερώσετε τον χρόνο σας στην περιοχή."
      },
      items: [
        {
          title: { en: "The Old Town and waterfront", el: "Η Παλιά Πόλη και η προκυμαία" },
          text: {
            en: "This is the heart of Parga's atmosphere. The waterfront, colorful houses, small streets, and harbor setting create the destination's most memorable first impression.",
            el: "Αυτή είναι η καρδιά της ατμόσφαιρας της Πάργας. Η προκυμαία, τα πολύχρωμα σπίτια, τα στενά δρομάκια και το λιμάνι δημιουργούν την πιο αξέχαστη πρώτη εντύπωση του προορισμού."
          }
        },
        {
          title: { en: "The Venetian Castle", el: "Το Ενετικό Κάστρο" },
          text: {
            en: "The castle is one of the town's defining landmarks and adds both historic character and some of the best views over the bay and coastline.",
            el: "Το κάστρο είναι ένα από τα καθοριστικά ορόσημα της πόλης και προσθέτει τόσο ιστορικό χαρακτήρα όσο και μερικές από τις καλύτερες θέες στον κόλπο και την ακτογραμμή."
          }
        },
        {
          title: { en: "Valtos Beach", el: "Παραλία Βάλτου" },
          text: {
            en: "Valtos is one of the best-known beach areas in Parga and an important part of the destination's holiday appeal. It adds an easy swim-and-relax side to the town experience.",
            el: "Ο Βάλτος είναι μία από τις πιο γνωστές περιοχές της Πάργας και σημαντικό κομμάτι της καλοκαιρινής της γοητείας. Προσθέτει μια εύκολη και χαλαρωτική διάσταση κολύμβησης στην εμπειρία της πόλης."
          }
        },
        {
          title: { en: "The wider Parga coast", el: "Η ευρύτερη ακτή της Πάργας" },
          text: {
            en: "Part of the appeal of Parga is that it is not only about the postcard center. The surrounding coast, nearby beaches, and western Greece road access add more flexibility to the trip.",
            el: "Μέρος της γοητείας της Πάργας είναι ότι δεν περιορίζεται μόνο στο 'καρτποσταλικό' κέντρο της. Η γύρω ακτή, οι κοντινές παραλίες και η οδική πρόσβαση της δυτικής Ελλάδας δίνουν μεγαλύτερη ευελιξία στο ταξίδι."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Beaches and Attractions", el: "Παραλίες & Αξιοθέατα" },
      text: {
        en: "Parga combines town charm with a very easy beach rhythm, which is a big reason travelers enjoy it so much.\n\n**Valtos Beach**\nOne of the destination's strongest assets, offering an easy beach extension to a stay in town and making Parga work well for classic summer holidays.\n\n**The Venetian Castle**\nThe castle gives Parga both identity and elevation. It is one of the best places to appreciate the shape of the town and the wider coastal setting.\n\n**The harbor and promenade**\nThis is where much of the destination's social atmosphere comes alive, especially in the evening.\n\n**Old town lanes and hillside views**\nParga is rewarding for slow walking, short climbs, and simply taking in the visual layout of the town.\n\n**Nearby coastal outings**\nAlthough the town itself is the main attraction, nearby sea and beach options can make the stay more varied and satisfying.",
        el: "Η Πάργα συνδυάζει τη γοητεία της πόλης με έναν πολύ εύκολο ρυθμό παραλίας, πράγμα που είναι ένας μεγάλος λόγος για τον οποίο οι ταξιδιώτες την απολαμβάνουν τόσο πολύ.\n\n**Παραλία Βάλτου**\nΈνα από τα πιο δυνατά χαρτιά του προορισμού, προσφέροντας μια εύκολη επέκταση παραλίας στη διαμονή στην πόλη και καθιστώντας την Πάργα ιδανική για κλασικές καλοκαιρινές διακοπές.\n\n**Το Ενετικό Κάστρο**\nΤο κάστρο δίνει στην Πάργα ταυτότητα και ύψος. Είναι ένα από τα καλύτερα μέρη για να εκτιμήσετε το σχήμα της πόλης και το ευρύτερο παραθαλάσσιο σκηνικό.\n\n**Το λιμάνι και η προκυμαία**\nΕδώ ζωντανεύει μεγάλο μέρος της κοινωνικής ατμόσφαιρας του προορισμού, ειδικά το βράδυ.\n\n**Σοκάκια της παλιάς πόλης και θέα από ψηλά**\nΗ Πάργα ανταμείβει το αργό περπάτημα, τις σύντομες αναβάσεις και την απλή απόλαυση της οπτικής διάταξης της πόλης.\n\n**Κοντινές παραθαλάσσιες εξορμήσεις**\nΑν και η ίδια η πόλη είναι το κύριο αξιοθέατο, οι κοντινές επιλογές σε θάλασσα και παραλίες μπορούν να κάνουν τη διαμονή σας πιο ποικιλόμορφη και ικανοποιητική."
      }
    },
    {
      layout: "list",
      title: { en: "Food and Local Flavors", el: "Φαγητό & Τοπικές Γεύσεις" },
      text: {
        en: "Food in Parga is deeply tied to the destination's summer atmosphere. Many of the best moments here are simple: seafood and Greek dishes by the waterfront, evening dinners near the sea, casual lunches after the beach, relaxed tavern meals in a scenic setting, and easy holiday dining without needing much planning.\n\nParga is not a destination defined by high gastronomy. Its appeal lies more in setting, pace, and the pleasure of eating well in a beautiful place. It suits travelers who enjoy seaside dining, long summer evenings, and meals that feel naturally built into the day.\n\n[Explore our Greece food & drink guides for more local ideas](/collections/greece-food-and-drink).",
        el: "Το φαγητό στην Πάργα είναι άρρηκτα συνδεδεμένο με την καλοκαιρινή ατμόσφαιρα του προορισμού. Πολλές από τις καλύτερες στιγμές εδώ είναι απλές: θαλασσινά και ελληνικά πιάτα στην προκυμαία, βραδινά δείπνα κοντά στη θάλασσα, χαλαρά γεύματα μετά την παραλία, γεύματα σε γραφικές ταβέρνες και εύκολο φαγητό διακοπών χωρίς πολλή οργάνωση.\n\nΗ Πάργα δεν είναι ένας προορισμός που ορίζεται από την υψηλή γαστρονομία. Η γοητεία της βρίσκεται περισσότερο στο σκηνικό, τον ρυθμό και την απόλαυση του καλού φαγητού σε ένα όμορφο μέρος. Ταιριάζει σε ταξιδιώτες που απολαμβάνουν το φαγητό δίπλα στη θάλασσα, τα μεγάλα καλοκαιρινά βράδια και τα γεύματα που μοιάζουν φυσικά ενσωματωμένα στη μέρα.\n\n[Ανακαλύψτε τοπικές γεύσεις στους οδηγούς μας](/collections/greece-food-and-drink)."
      }
    },
    {
      layout: "numbered",
      title: { en: "Where to Stay in Parga", el: "Πού να Μείνετε στην Πάργα" },
      text: {
        en: "Where you stay in Parga can shape whether your trip feels more lively, more scenic, or more beach-oriented. [Explore our Parga hotel recommendations](/hotels?destination=parga).",
        el: "Το πού θα μείνετε στην Πάργα μπορεί να καθορίσει αν το ταξίδι σας θα έχει πιο ζωντανό, πιο γραφικό ή πιο παραθαλάσσιο χαρακτήρα. [Ανακαλύψτε τις προτάσεις μας για διαμονή](/hotels?destination=parga)."
      },
      items: [
        {
          title: { en: "Stay near the town center if", el: "Μείνετε κοντά στο κέντρο αν" },
          text: {
            en: "You want to be close to the promenade, restaurants, and evening walks. Atmosphere and convenience matter most to your trip. You want to enjoy Parga on foot.",
            el: "Θέλετε να είστε κοντά στον παραλιακό δρόμο, τα εστιατόρια και τους βραδινούς περιπάτους. Η ατμόσφαιρα και η ευκολία είναι το πιο σημαντικό για το ταξίδι σας. Θέλετε να απολαύσετε την Πάργα με τα πόδια."
          }
        },
        {
          title: { en: "Stay near Valtos if", el: "Μείνετε κοντά στον Βάλτο αν" },
          text: {
            en: "Beach time is a big part of your holiday. You want a more relaxed base close to the sea. You prefer easier access to swimming and quieter day rhythm.",
            el: "Ο χρόνος στην παραλία είναι μεγάλο μέρος των διακοπών σας. Θέλετε μια πιο χαλαρή βάση κοντά στη θάλασσα. Προτιμάτε ευκολότερη πρόσβαση στο κολύμπι και πιο ήσυχο ημερήσιο ρυθμό."
          }
        },
        {
          title: { en: "Choose a view-oriented stay if", el: "Επιλέξτε κατάλυμα με θέα αν" },
          text: {
            en: "The visual charm of Parga is central to your trip. You want the destination to feel more romantic or special.",
            el: "Η οπτική γοητεία της Πάργας είναι στο επίκεντρο του ταξιδιού σας. Θέλετε ο προορισμός να έχει μια πιο ρομαντική ή ξεχωριστή αίσθηση."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Things to Do in Parga", el: "Τι να Κάνετε στην Πάργα" },
      text: {
        en: "Parga works best when you keep the trip simple and let the town itself do part of the work. Some of the best ways to enjoy the destination include walking through the old town and waterfront, spending time at Valtos Beach, visiting the castle for views and atmosphere, enjoying relaxed evenings by the harbor, and using Parga as a base for a slower coastal holiday.\n\nIt is a destination that often feels best when not overplanned. The combination of sea, walking, and atmosphere is already a large part of the experience.\n\n[Explore our Parga tours and experiences](/tours/all).",
        el: "Η Πάργα είναι καλύτερη όταν κρατάτε το ταξίδι σας απλό και αφήνετε την ίδια την πόλη να κάνει μέρος της δουλειάς. Μερικοί από τους καλύτερους τρόπους για να απολαύσετε τον προορισμό περιλαμβάνουν το περπάτημα στην παλιά πόλη και την προκυμαία, τον χρόνο στην παραλία του Βάλτου, την επίσκεψη στο κάστρο για θέα και ατμόσφαιρα, τα χαλαρά βράδια στο λιμάνι και τη χρήση της Πάργας ως βάση για πιο ήρεμες παραθαλάσσιες διακοπές.\n\nΕίναι ένας προορισμός που συχνά έχει καλύτερη αίσθηση όταν δεν είναι υπερβολικά σχεδιασμένος. Ο συνδυασμός της θάλασσας, του περπατήματος και της ατμόσφαιρας αποτελεί ήδη μεγάλο μέρος της εμπειρίας.\n\n[Δείτε εμπειρίες και tours στην Πάργα](/tours/all)."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit", el: "Η Καλύτερη Εποχή για να Πάτε" },
      text: {
        en: "Parga is primarily a warm-season destination and is especially rewarding from late spring to early autumn.\n\nJune and September are often excellent for travelers who want good weather and a more balanced pace. July and August bring the liveliest summer atmosphere. Shoulder season can work very well for those who care about scenery, walking, and slower seaside time.\n\nBecause the destination is so tied to the waterfront and beach atmosphere, it feels strongest when the weather supports outdoor living.",
        el: "Η Πάργα είναι κατά κύριο λόγο ένας προορισμός για τη θερμή περίοδο και είναι ιδιαίτερα ικανοποιητική από τα τέλη της άνοιξης έως τις αρχές του φθινοπώρου.\n\nΟ Ιούνιος και ο Σεπτέμβριος είναι συχνά εξαιρετικοί για τους ταξιδιώτες που θέλουν καλό καιρό και έναν πιο ισορροπημένο ρυθμό. Ο Ιούλιος και ο Αύγουστος φέρνουν την πιο ζωντανή καλοκαιρινή ατμόσφαιρα. Η ενδιάμεση εποχή μπορεί να λειτουργήσει πολύ καλά για όσους ενδιαφέρονται για το τοπίο, το περπάτημα και τον πιο αργό χρόνο δίπλα στη θάλασσα.\n\nΕπειδή ο προορισμός είναι τόσο στενά συνδεδεμένος με την προκυμαία και την ατμόσφαιρα της παραλίας, αναδεικνύεται περισσότερο όταν ο καιρός ευνοεί τη ζωή σε εξωτερικούς χώρους."
      }
    },
    {
      layout: "faq",
      title: { en: "FAQ About Parga", el: "Συχνές Ερωτήσεις για την Πάργα" },
      text: {
        en: "Common questions for planning your trip.",
        el: "Συχνές ερωτήσεις για να οργανώσετε το ταξίδι σας."
      },
      items: [
        {
          title: { en: "Is Parga worth visiting?", el: "Αξίζει να πάω στην Πάργα;" },
          text: {
            en: "Yes. Parga is one of the most charming seaside destinations in mainland Greece, especially for travelers who want a scenic and easy summer escape.",
            el: "Ναι. Η Πάργα είναι ένας από τους πιο γοητευτικούς παραθαλάσσιους προορισμούς στην ηπειρωτική Ελλάδα, ειδικά για όσους θέλουν μια γραφική και εύκολη καλοκαιρινή απόδραση."
          }
        },
        {
          title: { en: "What is Parga best known for?", el: "Για τι φημίζεται η Πάργα;" },
          text: {
            en: "It is best known for its colorful seaside setting, Venetian castle, and beach-friendly holiday atmosphere.",
            el: "Είναι κυρίως γνωστή για το πολύχρωμο παραθαλάσσιο σκηνικό της, το ενετικό κάστρο και την ιδανική για παραλία καλοκαιρινή ατμόσφαιρα."
          }
        },
        {
          title: { en: "Is Parga like an island?", el: "Μοιάζει η Πάργα με νησί;" },
          text: {
            en: "In some ways, yes. Many travelers like Parga because it has an island-style feel while remaining on the mainland.",
            el: "Από ορισμένες απόψεις, ναι. Σε πολλούς αρέσει η Πάργα επειδή προσφέρει την αίσθηση ενός νησιού παραμένοντας στην ηπειρωτική χώρα."
          }
        },
        {
          title: { en: "Is Parga good for couples?", el: "Είναι η Πάργα καλή επιλογή για ζευγάρια;" },
          text: {
            en: "Yes. It works very well for couples because of its visual charm, evening atmosphere, and relaxed coastal setting.",
            el: "Ναι. Λειτουργεί εξαιρετικά για ζευγάρια χάρη στην οπτική της γοητεία, τη βραδινή της ατμόσφαιρα και το χαλαρό παραθαλάσσιο σκηνικό της."
          }
        },
        {
          title: { en: "How many days do you need in Parga?", el: "Πόσες μέρες χρειάζομαι στην Πάργα;" },
          text: {
            en: "It works well for a few days, but it can also be part of a longer western Greece or Epirus route.",
            el: "Είναι ιδανική για λίγες μέρες, αλλά μπορεί κάλλιστα να αποτελέσει μέρος μιας μεγαλύτερης διαδρομής στη δυτική Ελλάδα ή την Ήπειρο."
          }
        },
        {
          title: { en: "Do you need a car in Parga?", el: "Χρειάζομαι αυτοκίνητο στην Πάργα;" },
          text: {
            en: "Not necessarily for the town itself, but it can be useful if you want to explore more of the wider coast and region.",
            el: "Όχι απαραίτητα για την ίδια την πόλη, αλλά μπορεί να φανεί χρήσιμο αν θέλετε να εξερευνήσετε περισσότερο την ευρύτερη ακτή και την περιοχή."
          }
        }
      ]
    }
  ],

  delphi: [
    {
      layout: "list",
      title: { en: "Why Visit Delphi", el: "Γιατί να πας στους Δελφούς" },
      text: {
        en: "Delphi is a strong choice for travelers who want one of Greece's most important archaeological sites, a destination with real symbolic and cultural depth, mountain scenery combined with ancient heritage, a rewarding mainland stop beyond the standard island route, and a place that feels thoughtful, memorable, and distinct.\n\nThis is not a destination built around entertainment or resort life. It is about history, atmosphere, and one of the strongest cultural landscapes in Greece.",
        el: "Οι Δελφοί είναι μια εξαιρετική επιλογή για ταξιδιώτες που θέλουν να επισκεφθούν έναν από τους σημαντικότερους αρχαιολογικούς χώρους της Ελλάδας, έναν προορισμό με πραγματικό συμβολικό και πολιτισμικό βάθος, ορεινά τοπία σε συνδυασμό με την αρχαία κληρονομιά, μια ικανοποιητική στάση στην ηπειρωτική χώρα πέρα από τη συνηθισμένη διαδρομή των νησιών, και ένα μέρος που αποπνέει στοχασμό, μνήμη και ξεχωριστό χαρακτήρα.\n\nΔεν πρόκειται για προορισμό χτισμένο γύρω από τη διασκέδαση ή τη ζωή των resort. Αφορά την ιστορία, την ατμόσφαιρα και ένα από τα πιο ισχυρά πολιτιστικά τοπία στην Ελλάδα."
      }
    },
    {
      layout: "grid",
      title: { en: "Best Areas and Highlights in Delphi", el: "Οι Καλύτερες Περιοχές & Αξιοθέατα" },
      text: {
        en: "Where to base your stay or focus your time in the region.",
        el: "Πού να μείνετε ή να αφιερώσετε τον χρόνο σας στην περιοχή."
      },
      items: [
        {
          title: { en: "The archaeological site", el: "Ο αρχαιολογικός χώρος" },
          text: {
            en: "This is the center of Delphi's identity and the main reason most travelers visit. The site is not only historically important, but also visually dramatic because of its position on the mountain slope.",
            el: "Αυτό είναι το κέντρο της ταυτότητας των Δελφών και ο κύριος λόγος που οι περισσότεροι ταξιδιώτες τους επισκέπτονται. Ο χώρος δεν είναι μόνο ιστορικά σημαντικός, αλλά και οπτικά εντυπωσιακός λόγω της θέσης του στην πλαγιά του βουνού."
          }
        },
        {
          title: { en: "The modern village of Delphi", el: "Το σύγχρονο χωριό των Δελφών" },
          text: {
            en: "The village gives the destination its practical base, with accommodation, restaurants, and views that support the experience without overpowering it.",
            el: "Το χωριό δίνει στον προορισμό την πρακτική του βάση, με διαμονή, εστιατόρια και θέα που υποστηρίζουν την εμπειρία χωρίς να την επισκιάζουν."
          }
        },
        {
          title: { en: "The slopes of Parnassus", el: "Οι πλαγιές του Παρνασσού" },
          text: {
            en: "The wider mountain setting is part of what makes Delphi feel special. Even outside the archaeological core, the natural surroundings contribute strongly to the destination's atmosphere.",
            el: "Το ευρύτερο ορεινό σκηνικό είναι μέρος αυτού που κάνει τους Δελφούς να μοιάζουν ξεχωριστοί. Ακόμα και έξω από τον αρχαιολογικό πυρήνα, το φυσικό περιβάλλον συμβάλλει καθοριστικά στην ατμόσφαιρα του προορισμού."
          }
        },
        {
          title: { en: "The valley views", el: "Η θέα στην κοιλάδα" },
          text: {
            en: "One of the most memorable elements of Delphi is how open and expansive it feels. The views beyond the site are part of the experience, not just the background.",
            el: "Ένα από τα πιο αξέχαστα στοιχεία των Δελφών είναι το πόσο ανοιχτοί και ευρύχωροι φαίνονται. Η θέα πέρα από τον χώρο είναι μέρος της εμπειρίας, όχι απλώς το φόντο."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Main Attractions in Delphi", el: "Βασικά Αξιοθέατα" },
      text: {
        en: "Delphi is a destination where the value lies in both individual monuments and the wider setting around them.\n\n**The Temple of Apollo**\nThe symbolic heart of ancient Delphi and one of the most recognizable points within the archaeological site.\n\n**The ancient theater**\nThis is one of the most striking parts of the site, both for its historical importance and for the way it opens toward the landscape.\n\n**The sanctuary setting**\nPart of the power of Delphi comes from the fact that the site does not feel isolated from nature. The terrain, slope, and views all shape the experience.\n\n**The village and surrounding viewpoints**\nBeyond the archaeological visit, the village area gives the destination a quieter rhythm and a more grounded human scale.\n\n**A meaningful stop in mainland Greece**\nDelphi is often at its best when understood not only as a checklist site, but as a place to pause, look, and take in.",
        el: "Οι Δελφοί είναι ένας προορισμός όπου η αξία βρίσκεται τόσο στα μεμονωμένα μνημεία όσο και στο ευρύτερο σκηνικό γύρω τους.\n\n**Ο Ναός του Απόλλωνα**\nΗ συμβολική καρδιά των αρχαίων Δελφών και ένα από τα πιο αναγνωρίσιμα σημεία μέσα στον αρχαιολογικό χώρο.\n\n**Το αρχαίο θέατρο**\nΑυτό είναι ένα από τα πιο εντυπωσιακά τμήματα του χώρου, τόσο για την ιστορική του σημασία όσο και για τον τρόπο που ανοίγεται προς το τοπίο.\n\n**Το σκηνικό του ιερού**\nΜέρος της δύναμης των Δελφών προέρχεται από το γεγονός ότι ο χώρος δεν μοιάζει αποκομμένος από τη φύση. Το έδαφος, η κλίση και η θέα διαμορφώνουν την εμπειρία.\n\n**Το χωριό και τα γύρω σημεία θέας**\nΠέρα από την αρχαιολογική επίσκεψη, η περιοχή του χωριού δίνει στον προορισμό έναν πιο ήσυχο ρυθμό και μια πιο γειωμένη ανθρώπινη κλίμακα.\n\n**Μια ουσιαστική στάση στην ηπειρωτική Ελλάδα**\nΟι Δελφοί είναι συχνά στα καλύτερά τους όταν τους κατανοείς όχι μόνο ως ένα μέρος για 'τσεκάρισμα' στη λίστα, αλλά ως έναν τόπο για να σταθείς, να κοιτάξεις και να αφομοιώσεις."
      }
    },
    {
      layout: "list",
      title: { en: "Food and Local Flavors", el: "Φαγητό & Τοπικές Γεύσεις" },
      text: {
        en: "Food in Delphi is more about complementing the trip than defining it. Many visitors enjoy traditional Greek meals after visiting the site, quieter restaurant settings with mountain or valley views, simple tavern food that suits a slower mainland itinerary, and meals that feel grounded and regional rather than heavily touristic.\n\nDelphi is not a destination where food competes with the cultural experience. Instead, it supports it. A relaxed lunch or evening meal here often becomes part of the calm that follows a day of walking through history and landscape.\n\n[Explore our Greece food & drink guides for more ideas across the country](/collections/greece-food-and-drink).",
        el: "Το φαγητό στους Δελφούς αφορά περισσότερο τη συμπλήρωση του ταξιδιού παρά τον καθορισμό του. Πολλοί επισκέπτες απολαμβάνουν παραδοσιακά ελληνικά γεύματα μετά την επίσκεψη στον χώρο, πιο ήσυχα εστιατόρια με θέα στο βουνό ή την κοιλάδα, απλό φαγητό ταβέρνας που ταιριάζει σε ένα πιο αργό ηπειρωτικό δρομολόγιο, και γεύματα που μοιάζουν γειωμένα και τοπικά, αντί για βαριά τουριστικά.\n\nΟι Δελφοί δεν είναι ένας προορισμός όπου το φαγητό ανταγωνίζεται την πολιτιστική εμπειρία. Αντίθετα, την υποστηρίζει. Ένα χαλαρό μεσημεριανό ή βραδινό γεύμα εδώ γίνεται συχνά μέρος της ηρεμίας που ακολουθεί μια μέρα περιπάτου μέσα από την ιστορία και το τοπίο.\n\n[Ανακαλύψτε τοπικές γεύσεις στους οδηγούς μας](/collections/greece-food-and-drink)."
      }
    },
    {
      layout: "numbered",
      title: { en: "Where to Stay in Delphi", el: "Πού να Μείνετε στους Δελφούς" },
      text: {
        en: "Where you stay in Delphi usually depends on whether you want convenience, atmosphere, or a broader mainland route base. [Explore our Delphi hotel recommendations](/hotels?destination=delphi).",
        el: "Το πού θα μείνετε στους Δελφούς συνήθως εξαρτάται από το αν θέλετε ευκολία, ατμόσφαιρα ή μια ευρύτερη βάση για διαδρομές στην ηπειρωτική χώρα. [Ανακαλύψτε τις προτάσεις μας για διαμονή](/hotels?destination=delphi)."
      },
      items: [
        {
          title: { en: "Stay in Delphi village if", el: "Μείνετε στο χωριό των Δελφών αν" },
          text: {
            en: "You want direct access to the archaeological site. You prefer the most practical and straightforward base. Your trip is centered specifically on the destination itself.",
            el: "Θέλετε άμεση πρόσβαση στον αρχαιολογικό χώρο. Προτιμάτε την πιο πρακτική και απλή βάση. Το ταξίδι σας είναι επικεντρωμένο ειδικά στον ίδιο τον προορισμό."
          }
        },
        {
          title: { en: "Choose a view-oriented stay if", el: "Επιλέξτε κατάλυμα με θέα αν" },
          text: {
            en: "The landscape and overall atmosphere matter a lot to your trip. You want Delphi to feel more like a memorable stop than just a short visit.",
            el: "Το τοπίο και η συνολική ατμόσφαιρα έχουν μεγάλη σημασία για το ταξίδι σας. Θέλετε οι Δελφοί να μοιάζουν περισσότερο με μια αξέχαστη στάση παρά με μια απλή σύντομη επίσκεψη."
          }
        },
        {
          title: { en: "Use Delphi as an overnight stop if", el: "Επιλέξτε διανυκτέρευση αν" },
          text: {
            en: "You are combining it with a broader central or southern Greece route. You want to experience the site without rushing in and out on the same day.",
            el: "Τους συνδυάζετε με μια ευρύτερη διαδρομή στην κεντρική ή νότια Ελλάδα. Θέλετε να ζήσετε την εμπειρία του χώρου χωρίς να βιαστείτε να φύγετε την ίδια μέρα."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Things to Do in Delphi", el: "Τι να Κάνετε στους Δελφούς" },
      text: {
        en: "Delphi is best experienced with a slower, more attentive pace. Some of the most rewarding ways to spend time here include walking through the archaeological site carefully, taking time at the theater and major sanctuary points, pausing for views rather than rushing from monument to monument, staying long enough to see the destination in different light, and combining Delphi with nearby mainland drives or broader cultural routes.\n\nThis is one of those places where a calm and focused visit usually creates a better experience than trying to treat it like a quick stop between other destinations.\n\n[Explore our Delphi tours and experiences](/tours/all).",
        el: "Η καλύτερη εμπειρία στους Δελφούς έρχεται με έναν πιο αργό και προσεκτικό ρυθμό. Μερικοί από τους καλύτερους τρόπους να περάσετε τον χρόνο σας περιλαμβάνουν το προσεκτικό περπάτημα στον αρχαιολογικό χώρο, την αφιέρωση χρόνου στο θέατρο και τα κύρια σημεία του ιερού, τις στάσεις για τη θέα αντί για τη βιασύνη από μνημείο σε μνημείο, τη διαμονή για αρκετό χρόνο ώστε να δείτε τον προορισμό σε διαφορετικό φως, και τον συνδυασμό των Δελφών με κοντινές οδικές διαδρομές ή ευρύτερες πολιτιστικές διαδρομές.\n\nΕίναι από εκείνα τα μέρη όπου μια ήρεμη και εστιασμένη επίσκεψη συνήθως δημιουργεί μια καλύτερη εμπειρία, παρά το να τους αντιμετωπίσετε ως μια γρήγορη στάση ανάμεσα σε άλλους προορισμούς.\n\n[Δείτε εμπειρίες και tours στους Δελφούς](/tours/all)."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit", el: "Η Καλύτερη Εποχή για να Πάτε" },
      text: {
        en: "Delphi can be rewarding through much of the year, which makes it different from strongly seasonal destinations.\n\nSpring and autumn are especially attractive for walking, views, and balanced temperatures. Summer still works well, but midday heat can affect the pace of the archaeological visit. Shoulder season often suits Delphi very well because the destination is driven by history, setting, and landscape rather than beach weather.\n\nLighting, temperature, and visibility matter here more than nightlife or seasonal holiday energy.",
        el: "Οι Δελφοί μπορούν να είναι ικανοποιητικοί για μεγάλο μέρος του χρόνου, γεγονός που τους διαφοροποιεί από τους έντονα εποχιακούς προορισμούς.\n\nΗ άνοιξη και το φθινόπωρο είναι ιδιαίτερα ελκυστικά για περπάτημα, θέα και ισορροπημένες θερμοκρασίες. Το καλοκαίρι εξακολουθεί να λειτουργεί καλά, αλλά η ζέστη το μεσημέρι μπορεί να επηρεάσει τον ρυθμό της αρχαιολογικής επίσκεψης. Η ενδιάμεση εποχή συχνά ταιριάζει πολύ καλά στους Δελφούς, καθώς ο προορισμός βασίζεται στην ιστορία, το σκηνικό και το τοπίο, κι όχι στον καιρό για μπάνιο.\n\nΟ φωτισμός, η θερμοκρασία και η ορατότητα έχουν εδώ μεγαλύτερη σημασία από τη νυχτερινή ζωή ή την ενέργεια των εποχιακών διακοπών."
      }
    },
    {
      layout: "faq",
      title: { en: "FAQ About Delphi", el: "Συχνές Ερωτήσεις για τους Δελφούς" },
      text: {
        en: "Common questions for planning your trip.",
        el: "Συχνές ερωτήσεις για να οργανώσετε το ταξίδι σας."
      },
      items: [
        {
          title: { en: "Is Delphi worth visiting?", el: "Αξίζει να πάω στους Δελφούς;" },
          text: {
            en: "Yes. Delphi is one of the most important and rewarding historic destinations in Greece, especially for travelers interested in culture, archaeology, and landscape.",
            el: "Ναι. Οι Δελφοί είναι ένας από τους πιο σημαντικούς και ικανοποιητικούς ιστορικούς προορισμούς στην Ελλάδα, ειδικά για ταξιδιώτες που ενδιαφέρονται για τον πολιτισμό, την αρχαιολογία και το τοπίο."
          }
        },
        {
          title: { en: "What is Delphi best known for?", el: "Για τι φημίζονται οι Δελφοί;" },
          text: {
            en: "It is best known for the ancient oracle, the Temple of Apollo, and its role as one of the most symbolic sacred sites of the ancient Greek world.",
            el: "Είναι κυρίως γνωστοί για το αρχαίο μαντείο, τον Ναό του Απόλλωνα και τον ρόλο τους ως ένας από τους πιο συμβολικούς ιερούς τόπους του αρχαίου ελληνικού κόσμου."
          }
        },
        {
          title: { en: "How many days do you need in Delphi?", el: "Πόσες μέρες χρειάζομαι στους Δελφούς;" },
          text: {
            en: "Many travelers visit briefly, but an overnight stay often makes the experience more rewarding and less rushed.",
            el: "Πολλοί ταξιδιώτες πραγματοποιούν σύντομες επισκέψεις, αλλά η διανυκτέρευση συχνά κάνει την εμπειρία πιο ικανοποιητική και λιγότερο βιαστική."
          }
        },
        {
          title: { en: "Is Delphi only for history lovers?", el: "Είναι οι Δελφοί μόνο για λάτρεις της ιστορίας;" },
          text: {
            en: "No. Even travelers without a strong academic interest in history often find Delphi memorable because of its setting, atmosphere, and visual power.",
            el: "Όχι. Ακόμα και ταξιδιώτες χωρίς έντονο ακαδημαϊκό ενδιαφέρον για την ιστορία συχνά βρίσκουν τους Δελφούς αξέχαστους χάρη στο σκηνικό, την ατμόσφαιρα και την οπτική τους δύναμη."
          }
        },
        {
          title: { en: "Can Delphi be part of a mainland Greece route?", el: "Συνδυάζονται με road trip στην ενδοχώρα;" },
          text: {
            en: "Yes. Delphi works very well as part of a broader trip through mainland Greece and central Greece.",
            el: "Ναι. Λειτουργούν εξαιρετικά ως μέρος ενός ευρύτερου ταξιδιού στην ηπειρωτική και κεντρική Ελλάδα."
          }
        },
        {
          title: { en: "Do you need a car in Delphi?", el: "Χρειάζομαι αυτοκίνητο στους Δελφούς;" },
          text: {
            en: "Not necessarily if Delphi is your main stop, but it can be useful if you are combining it with a wider road trip.",
            el: "Όχι απαραίτητα αν οι Δελφοί είναι ο κύριος σταθμός σας, αλλά μπορεί να φανεί χρήσιμο αν τους συνδυάσετε με ένα ευρύτερο road trip."
          }
        }
      ]
    }
  ],
  patmos: [
    {
      title: {
        en: "Why visit Patmos",
        el: "Γιατί να επισκεφθείς την Πάτμο"
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "It carries a weight that other islands don't",
            el: "Έχει ένα βάρος που άλλα νησιά δεν έχουν"
          },
          text: {
            en: "Patmos is a UNESCO World Heritage Site — not just for one building but for the entire complex of the Monastery, the Cave of the Apocalypse and the medieval settlement of Hora. Walking through it feels different from ordinary sightseeing.",
            el: "Η Πάτμος είναι Μνημείο Παγκόσμιας Κληρονομιάς UNESCO — όχι μόνο για ένα κτίριο, αλλά για ολόκληρο το σύμπλεγμα της Μονής, του Σπηλαίου της Αποκάλυψης και του μεσαιωνικού οικισμού της Χώρας. Το περπάτημα εδώ είναι διαφορετικό από μια συνηθισμένη περιήγηση."
          }
        },
        {
          title: {
            en: "It has remained itself",
            el: "Παρέμεινε ο εαυτός της"
          },
          text: {
            en: "The island's profile as a place of pilgrimage and quiet tourism has kept it from the development pressures that have changed other Greek islands. The architecture is intact. The pace is intact. The atmosphere is intact.",
            el: "Το προφίλ του νησιού ως τόπου προσκυνήματος ήρεμου τουρισμού το έχει προστατεύσει από τις πιέσεις ανάπτυξης που άλλαξαν άλλα ελληνικά νησιά. Η αρχιτεκτονική είναι άθικτη. Ο ρυθμός είναι άθικτος. Η ατμόσφαιρα είναι άθικτη."
          }
        },
        {
          title: {
            en: "The combination of sacred, scenic and aquatic is rare",
            el: "Ο συνδυασμός ιερού, γραφικού και θαλασσινού είναι σπάνιος"
          },
          text: {
            en: "Few Greek islands offer a UNESCO monastery, a medieval hilltop village, and swimming in remote coves — all within a few kilometres of each other. Patmos does all three without compromise.",
            el: "Λίγα ελληνικά νησιά προσφέρουν ένα μοναστήρι UNESCO, ένα μεσαιωνικό χωριό στην κορυφή λόφου και κολύμπι σε απομακρυσμένους όρμους — όλα σε απόσταση λίγων χιλιομέτρων. Η Πάτμος τα κάνει και τα τρία χωρίς συμβιβασμούς."
          }
        }
      ]
    },
    {
      title: {
        en: "Best time for Patmos",
        el: "Καλύτερη εποχή για Πάτμο"
      },
      layout: "list",
      alert: {
        en: "Secret: Easter in Patmos is one of the most extraordinary religious and cultural events in Greece. The island fills with pilgrims and the ceremonies — especially the midnight Resurrection service at the Monastery — are deeply moving even for non-religious visitors. Book accommodation months in advance if coming for Easter.",
        el: "Μυστικό: Το Πάσχα στην Πάτμο είναι από τις πιο ξεχωριστές θρησκευτικές και πολιτιστικές εκδηλώσεις στην Ελλάδα. Το νησί γεμίζει προσκυνητές και οι τελετές — ειδικά η Αναστάσιμη λειτουργία στη Μονή — συγκινούν ακόμα και μη θρησκευόμενους επισκέπτες. Κλείστε διαμονή μήνες πριν αν έρχεστε για Πάσχα."
      },
      items: [
        {
          title: { en: "Spring (April – early June)", el: "Άνοιξη (Απρίλιος – αρχές Ιουνίου)" },
          text: {
            en: "The ideal season: mild temperatures, the island still unhurried, wildflowers on the hillsides, and the sea warming toward swimmable. Easter, if it falls in this window, is unmissable.",
            el: "Η ιδανική εποχή: ήπιες θερμοκρασίες, το νησί ακόμα ήρεμο, αγριολούλουδα στους λόφους και η θάλασσα να ζεσταίνεται. Πάσχα, αν πέσει σε αυτή την περίοδο, είναι αξέχαστο."
          }
        },
        {
          title: { en: "June & September", el: "Ιούνιος & Σεπτέμβριος" },
          text: {
            en: "The sweet spot for those who want both beach and quiet. The island has visitors but has not tipped into overcrowding. Sea temperatures are at their best in September.",
            el: "Το ιδανικό σημείο για όσους θέλουν και παραλία και ησυχία. Το νησί έχει επισκέπτες αλλά όχι υπερβολικό συνωστισμό. Η θάλασσα είναι καλύτερη τον Σεπτέμβριο."
          }
        },
        {
          title: { en: "July & August", el: "Ιούλιος & Αύγουστος" },
          text: {
            en: "Busier — particularly with day-trippers arriving by ferry from nearby islands. Still manageable compared to the Cyclades. Book accommodation early.",
            el: "Πιο πολυσύχναστα — ειδικά με ημερήσιους επισκέπτες από κοντινά νησιά. Ακόμα διαχειρίσιμα σε σύγκριση με τις Κυκλάδες. Κλείστε διαμονή νωρίς."
          }
        },
        {
          title: { en: "Autumn (October – November)", el: "Φθινόπωρο (Οκτώβριος – Νοέμβριος)" },
          text: {
            en: "Patmos in autumn is for those who want to think. The tourists have left, the light is golden, the sea is still warm enough to swim, and the Monastery and cave can be visited in genuine contemplation.",
            el: "Η Πάτμος το φθινόπωρο είναι για όσους θέλουν να σκεφτούν. Οι τουρίστες έχουν φύγει, το φως είναι χρυσό, η θάλασσα είναι ακόμα ζεστή και η Μονή και το σπήλαιο επισκέπτονται με γνήσια περισυλλογή."
          }
        }
      ]
    },
    {
      title: {
        en: "How to get to Patmos",
        el: "Πώς φτάνεις στην Πάτμο"
      },
      layout: "grid",
      alert: {
        en: "Secret: The overnight ferry from Piraeus is not just a practical option — it is an experience in itself. You board in the evening, sleep on the water, and arrive in Skala in the morning as the island is waking up.",
        el: "Μυστικό: Το νυχτερινό πλοίο από Πειραιά δεν είναι απλώς πρακτική επιλογή — είναι εμπειρία από μόνη της. Μπαίνεις το βράδυ, κοιμάσαι στο πλοίο και φτάνεις στη Σκάλα το πρωί καθώς το νησί ξυπνά."
      },
      items: [
        {
          title: { en: "By ferry from Piraeus", el: "Με πλοίο από Πειραιά" },
          text: {
            en: "The main route. High-speed ferries take approximately 7–8 hours; conventional overnight ferries take 9–12 hours. Several departures weekly (more frequent in summer). Patmos is a regular stop on the Piraeus–Dodecanese line.",
            el: "Η κύρια διαδρομή. Τα ταχύπλοα χρειάζονται περίπου 7–8 ώρες. Τα συμβατικά νυχτερινά πλοία 9–12 ώρες. Αρκετά δρομολόγια εβδομαδιαίως. Η Πάτμος είναι τακτική στάση στη γραμμή Πειραιάς–Δωδεκάνησα."
          }
        },
        {
          title: { en: "Via Kos or Rhodes (+ ferry)", el: "Μέσω Κω ή Ρόδου (+ πλοίο)" },
          text: {
            en: "Flying into Kos (the closest airport, ~3 hours by ferry) or Rhodes (~5 hours) and connecting by ferry is the most common option for those combining Patmos with the wider Dodecanese.",
            el: "Η πτήση προς Κω (πλησιέστερο αεροδρόμιο, ~3 ώρες με πλοίο) ή Ρόδο (~5 ώρες) και η σύνδεση με πλοίο είναι η πιο συνηθισμένη επιλογή για συνδυασμό με τα Δωδεκάνησα."
          }
        },
        {
          title: { en: "Via Samos (+ short ferry)", el: "Μέσω Σάμου (+ σύντομο πλοίο)" },
          text: {
            en: "Samos airport is approximately 1.5–2 hours by ferry from Patmos. A practical option for those flying from Athens or international connections.",
            el: "Το αεροδρόμιο της Σάμου απέχει περίπου 1.5–2 ώρες με πλοίο από την Πάτμο. Μια πρακτική επιλογή για όσους πετούν από Αθήνα ή διεθνείς συνδέσεις."
          }
        }
      ]
    },
    {
      title: {
        en: "Top attractions & experiences",
        el: "Top αξιοθέατα & εμπειρίες"
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "Monastery of Saint John the Theologian",
            el: "Μονή Αγίου Ιωάννη του Θεολόγου"
          },
          text: {
            en: "The fortified monastery built in 1088 on the hilltop of Hora is the island's defining monument — and one of the most important Christian sites in the world. Its architecture is part fortress, part Byzantine church, part medieval labyrinth. The treasury contains manuscripts, icons and ecclesiastical objects of extraordinary rarity. Secret: Go early in the morning, before the day-trippers arrive by ferry.",
            el: "Η οχυρωμένη μονή χτισμένη το 1088 στην κορυφή της Χώρας είναι το εμβληματικό μνημείο του νησιού. Η αρχιτεκτονική της είναι φρούριο, βυζαντινή εκκλησία και μεσαιωνικός λαβύρινθος μαζί. Το σκευοφυλάκιο περιέχει χειρόγραφα, εικόνες και εκκλησιαστικά αντικείμενα εξαιρετικής σπανιότητας. Μυστικό: Πήγαινε νωρίς το πρωί, πριν φτάσουν οι ημερήσιοι επισκέπτες."
          }
        },
        {
          title: {
            en: "Cave of the Apocalypse",
            el: "Σπήλαιο της Αποκάλυψης"
          },
          text: {
            en: "Halfway between Skala and Hora, the cave where Saint John is said to have received his visions and dictated the Book of Revelation is now a functioning church built into the rock. Secret: Even without religious context, the atmosphere of the cave is unusual — the acoustics, the incense, the layered history — worth experiencing on its own terms.",
            el: "Στη μέση της διαδρομής μεταξύ Σκάλας και Χώρας, το σπήλαιο όπου ο Άγιος Ιωάννης έγραψε την Αποκάλυψη είναι σήμερα μια λειτουργική εκκλησία μέσα στον βράχο. Μυστικό: Ακόμα και χωρίς θρησκευτικό πλαίσιο, η ατμόσφαιρα του σπηλαίου είναι ξεχωριστή."
          }
        },
        {
          title: {
            en: "Hora (Chora) of Patmos",
            el: "Χώρα Πάτμου"
          },
          text: {
            en: "The medieval hilltop village surrounding the monastery is, independently of its sacred associations, one of the most beautiful villages in the Aegean. Cube-shaped whitewashed houses, arched passages, bougainvillea cascading over stone walls. Secret: Walk the alleys of Hora after 8pm in summer, when the day-trippers have left and the village returns to the locals.",
            el: "Το μεσαιωνικό χωριό γύρω από τη μονή είναι, ανεξάρτητα από τη θρησκευτική του σημασία, ένα από τα ομορφότερα χωριά του Αιγαίου. Μυστικό: Περπάτα στα σοκάκια της Χώρας μετά τις 8 μ.μ. το καλοκαίρι, όταν οι ημερήσιοι επισκέπτες έχουν φύγει."
          }
        },
        {
          title: {
            en: "Skala — The Port Village",
            el: "Σκάλα — Το Λιμάνι"
          },
          text: {
            en: "Patmos's main port is the island's commercial center and social hub. The waterfront fills with life in the evenings; tavernas, cafes, and small shops open onto the harbour. Secret: The morning fish market near the port is worth an early visit. It tells you what to order for lunch.",
            el: "Το κεντρικό λιμάνι της Πάτμου είναι το εμπορικό κέντρο του νησιού. Η προκυμαία γεμίζει ζωή τα βράδια. Μυστικό: Η πρωινή ψαραγορά κοντά στο λιμάνι αξίζει μια επίσκεψη. Σου λέει τι να παραγγείλεις για μεσημεριανό."
          }
        },
        {
          title: {
            en: "Windmills of Hora",
            el: "Ανεμόμυλοι της Χώρας"
          },
          text: {
            en: "The row of old windmills on the ridge between Hora and the sea frames some of the most photographed views on the island. At sunset, with the monastery above and the Aegean below, it is exactly what it looks like.",
            el: "Η σειρά των παλιών ανεμόμυλων στη ράχη μεταξύ Χώρας και θάλασσας πλαισιώνει μερικές από τις πιο φωτογραφημένες απόψεις του νησιού."
          }
        },
        {
          title: {
            en: "Kambos Village & Valley",
            el: "Κάμπος"
          },
          text: {
            en: "The fertile valley in the northern part of the island is where Patmos keeps its most ordinary daily life — families, farming, local cafes. Secret: The small local tavernas in Kambos serve some of the most honest food on the island, at the most honest prices.",
            el: "Η εύφορη κοιλάδα στο βόρειο τμήμα του νησιού είναι όπου η Πάτμος διατηρεί την πιο καθημερινή ζωή. Μυστικό: Οι μικρές ταβέρνες στον Κάμπο σερβίρουν από το πιο τίμιο φαγητό του νησιού."
          }
        }
      ]
    },
    {
      title: {
        en: "Beaches, nearby villages & excursions",
        el: "Παραλίες, κοντινά χωριά & εκδρομές"
      },
      layout: "list",
      alert: {
        en: "Beach secret: Patmos's best beaches are not always the most accessible. Rent a scooter or small boat to reach the island's more remote coves — especially on the western coast.",
        el: "Μυστικό: Οι καλύτερες παραλίες της Πάτμου δεν είναι πάντα οι πιο προσβάσιμες. Νοίκιασε σκούτερ ή μικρό σκάφος για τις πιο απομακρυσμένες ακτές."
      },
      items: [
        {
          title: {
            en: "Psili Ammos",
            el: "Ψιλή Άμμος"
          },
          text: {
            en: "The most celebrated beach on the island — a long arc of fine sand on the southern tip, accessible only by boat or a 40-minute walk. Exactly as beautiful as it sounds. Go by the morning boat; return by the afternoon one.",
            el: "Η πιο διάσημη παραλία του νησιού — μακριά αψίδα λεπτής άμμου στο νότιο άκρο, προσβάσιμη μόνο με σκάφος ή 40λεπτο περπάτημα. Πήγαινε με το πρωινό καράβι· γύρνα με το απογευματινό."
          }
        },
        {
          title: {
            en: "Grikos Bay",
            el: "Γρίκος"
          },
          text: {
            en: "The large bay south of Skala is the island's most developed beach area. The peculiar rock formation called 'Kalikatsou' at the bay's edge is a Patmos landmark. Excellent accommodation options are here, including Patmos Aktis Suites & Spa.",
            el: "Ο μεγάλος κόλπος νότια της Σκάλας είναι η πιο οργανωμένη παραλία του νησιού. Ο βράχος 'Καλικάτσου' είναι ορόσημο της Πάτμου. Εξαιρετικές επιλογές διαμονής εδώ."
          }
        },
        {
          title: {
            en: "Lambi Beach",
            el: "Λάμπη"
          },
          text: {
            en: "A northern beach known for its extraordinary concentration of colored pebbles — deep reds, blacks, greens — that occur naturally here and nowhere else on the island. A geological oddity that is genuinely worth seeing.",
            el: "Μια βόρεια παραλία γνωστή για τη συγκέντρωση χρωματιστών βότσαλων — βαθύ κόκκινο, μαύρο, πράσινο. Μια γεωλογική ιδιομορφία που αξίζει να δεις."
          }
        },
        {
          title: {
            en: "Lipsi Island (day trip)",
            el: "Λειψοί (ημερήσια εκδρομή)"
          },
          text: {
            en: "The small island of Lipsi, 40 minutes by ferry from Patmos, is the kind of place that still exists in imagination: a handful of tavernas, a turquoise bay, fewer than 700 permanent residents, and a complete absence of urgency.",
            el: "Το μικρό νησί των Λειψών, 40 λεπτά με πλοίο από την Πάτμο, είναι από εκείνα τα μέρη που υπάρχουν ακόμα στη φαντασία: λίγες ταβέρνες, ένας τιρκουάζ κόλπος και πλήρης απουσία βιασύνης."
          }
        }
      ]
    },
    {
      title: {
        en: "What to eat (and what to take home)",
        el: "Τι να φας (και τι να πάρεις μαζί σου)"
      },
      layout: "list",
      alert: {
        en: "Food secret: The best meals on Patmos are found not on the waterfront in Skala but in the village tavernas of Hora and Kambos. The view is less postcard-perfect; the cooking is considerably more honest.",
        el: "Μυστικό: Τα καλύτερα γεύματα στην Πάτμο δεν βρίσκονται στο λιμάνι της Σκάλας, αλλά στις ταβέρνες της Χώρας και του Κάμπου. Το μαγείρεμα είναι πολύ πιο τίμιο."
      },
      items: [
        {
          title: {
            en: "Fresh Fish and Octopus",
            el: "Φρέσκο Ψάρι και Χταπόδι"
          },
          text: {
            en: "Patmos is a small island with active fishing. Grilled whole fish by the kilo, octopus dried on the line and cooked over charcoal, and marinated anchovies are the register of island seafood. Order what came in that morning.",
            el: "Η Πάτμος έχει ενεργή αλιεία. Ολόκληρο ψητό ψάρι, χταπόδι στη σχάρα και μαρινατος γαύρος είναι η γκάμα των θαλασσινών. Παράγγειλε ό,τι ήρθε εκείνο το πρωί."
          }
        },
        {
          title: {
            en: "Pitaroudia (Chickpea Fritters)",
            el: "Πιταρούδια (Ρεβυθοκεφτέδες)"
          },
          text: {
            en: "A traditional Dodecanese meze — crispy fried chickpea patties, often flavoured with onion, mint and cumin. They appear on almost every local menu and are at their best eaten hot with a glass of cold white wine.",
            el: "Παραδοσιακός μεζές των Δωδεκανήσων — τραγανά ρεβυθοκεφτεδάκια με κρεμμύδι, δυόσμο και κύμινο. Σερβίρονται σχεδόν παντού και είναι καλύτερα ζεστά με ένα ποτήρι λευκό κρασί."
          }
        },
        {
          title: {
            en: "Local Honey and Monastery Products",
            el: "Τοπικό Μέλι και Προϊόντα Μονής"
          },
          text: {
            en: "Patmos honey — from bees working the island's wild herbs and thyme — is dark, dense and aromatic. The monastery produces and sells honey, as well as herbal products. The best souvenir Patmos offers is a jar of local honey and a bottle of olive oil.",
            el: "Το μέλι της Πάτμου — από μέλισσες που δουλεύουν τα άγρια βότανα και το θυμάρι — είναι σκούρο, πυκνό και αρωματικό. Η Μονή παράγει και πουλά μέλι και βότανα. Το καλύτερο σουβενίρ είναι ένα βαζάκι μέλι και λάδι."
          }
        }
      ]
    },
    {
      title: {
        en: "Practical Tips",
        el: "Πρακτικές Συμβουλές"
      },
      layout: "list",
      items: [
        {
          title: {
            en: "Getting Around the Island",
            el: "Μετακινήσεις στο Νησί"
          },
          text: {
            en: "Patmos is small — about 34 km² — and manageable with a scooter or small car. Buses run between Skala, the Cave of the Apocalypse, Hora and Kambos. For remote beaches, a small rented boat gives the most freedom.",
            el: "Η Πάτμος είναι μικρή — περίπου 34 τ.χλμ. — και εξερευνάται εύκολα με σκούτερ ή αυτοκίνητο. Λεωφορεία συνδέουν Σκάλα, Σπήλαιο, Χώρα και Κάμπο. Για απομακρυσμένες παραλίες, μια μικρή βάρκα δίνει τη μεγαλύτερη ελευθερία."
          }
        },
        {
          title: {
            en: "Monastery Dress Code & Visiting Hours",
            el: "Ενδυματολογικός Κώδικας & Ωράριο Μονής"
          },
          text: {
            en: "The Monastery of Saint John requires covered shoulders and knees for entry — both men and women. Visiting hours vary seasonally; confirm locally before the trip.",
            el: "Η Μονή Αγίου Ιωάννη απαιτεί καλυμμένους ώμους και γόνατα — άνδρες και γυναίκες. Οι ώρες επίσκεψης διαφέρουν εποχικά. Επιβεβαιώστε τοπικά."
          }
        },
        {
          title: {
            en: "Island Pace and Expectations",
            el: "Ρυθμός και Προσδοκίες"
          },
          text: {
            en: "Patmos does not reward rushing. The experience compounds over days: the second morning in Hora is better than the first. Allocate at least three nights, ideally four or five.",
            el: "Η Πάτμος δεν ανταμείβει τη βιασύνη. Η εμπειρία χτίζεται μέρες: το δεύτερο πρωί στη Χώρα είναι καλύτερο από το πρώτο. Αφιέρωσε τουλάχιστον τρεις νύχτες, ιδανικά τέσσερις ή πέντε."
          }
        }
      ]
    },
    {
      title: {
        en: "FAQ",
        el: "Συχνές Ερωτήσεις"
      },
      layout: "faq",
      items: [
        {
          title: {
            en: "How many days do I need in Patmos?",
            el: "Πόσες μέρες χρειάζομαι στην Πάτμο;"
          },
          text: {
            en: "Three nights is the minimum to feel the island rather than just see it. Four or five nights allows for proper beach days, a day trip to Lipsi, time in Hora at different hours, and unhurried meals.",
            el: "Τρεις νύχτες είναι το ελάχιστο για να νιώσεις το νησί. Τέσσερις ή πέντε νύχτες επιτρέπουν μέρες στην παραλία, εκδρομή στους Λειψούς και ξένοιαστες ώρες στη Χώρα."
          }
        },
        {
          title: {
            en: "Is Patmos good for families?",
            el: "Είναι η Πάτμος κατάλληλη για οικογένειες;"
          },
          text: {
            en: "Yes, with caveats. The island suits families who enjoy a mix of culture and beach and are comfortable with a quieter environment. Grikos Bay is the most family-friendly area.",
            el: "Ναι, με επιφυλάξεις. Ταιριάζει σε οικογένειες που απολαμβάνουν πολιτισμό και παραλία και είναι άνετες με ήσυχο περιβάλλον. Ο Γρίκος είναι η πιο φιλική περιοχή για οικογένειες."
          }
        },
        {
          title: {
            en: "Is Patmos crowded in summer?",
            el: "Έχει πολύ κόσμο η Πάτμος το καλοκαίρι;"
          },
          text: {
            en: "July and August bring cruise ship passengers and day-trippers. The crowds are real but short — most arrive in the morning and leave by late afternoon. Patmos in the evening is always itself again.",
            el: "Ο Ιούλιος και ο Αύγουστος φέρνουν επισκέπτες κρουαζιερόπλοιων. Το πλήθος είναι αληθινό αλλά σύντομο — οι περισσότεροι φτάνουν το πρωί και φεύγουν το απόγευμα. Το βράδυ η Πάτμος είναι πάντα πάλι ο εαυτός της."
          }
        },
        {
          title: {
            en: "Is Patmos worth visiting if I'm not religious?",
            el: "Αξίζει η Πάτμος αν δεν είμαι θρησκευόμενος;"
          },
          text: {
            en: "Completely. The Monastery is one of the finest examples of Byzantine and medieval architecture in Greece. Hora is one of the most beautiful villages in the Aegean. The beaches are excellent. The atmosphere is genuinely unlike any other island.",
            el: "Απόλυτα. Η Μονή είναι ένα από τα ωραιότερα δείγματα βυζαντινής αρχιτεκτονικής. Η Χώρα είναι ένα από τα ομορφότερα χωριά του Αιγαίου. Οι παραλίες είναι εξαιρετικές. Η ατμόσφαιρα μοναδική."
          }
        }
      ]
    }
  ],
  patras: [
    {
      title: {
        en: "Why visit Patras",
        el: "Γιατί να επισκεφθείς την Πάτρα",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "The greatest Carnival in Greece — and one of Europe\u2019s finest",
            el: "Το μεγαλύτερο Καρναβάλι στην Ελλάδα — και από τα καλύτερα της Ευρώπης",
          },
          text: {
            en: "The Patras Carnival is the largest and most elaborate in Greece and ranks consistently among the great Carnival celebrations of Europe alongside Venice, Cologne and Rio. Three weeks of events — masquerade balls, satirical floats, the Children\u2019s Carnival, and the final Grand Parade — transform the entire city. The closing float parade draws hundreds of thousands of people to the seafront. Secret: The masquerade balls that take place in the weeks before the Grand Parade are invitation-accessible and are where the real Carnival culture lives — not the street parade. Ask locally which is happening.",
            el: "Το Καρναβάλι της Πάτρας είναι το μεγαλύτερο και πιο περίτεχνο στην Ελλάδα και συγκαταλέγεται σταθερά ανάμεσα στις μεγάλες καρναβαλικές γιορτές της Ευρώπης. Τρεις εβδομάδες εκδηλώσεων — χοροί μεταμφιεσμένων, σατιρικά άρματα, Παιδικό Καρναβάλι και η μεγάλη Παρέλαση — μεταμορφώνουν ολόκληρη την πόλη.",
          },
        },
        {
          title: {
            en: "The perfect base for ancient, natural and cultural Greece",
            el: "Η τέλεια βάση για αρχαία, φυσική και πολιτιστική Ελλάδα",
          },
          text: {
            en: "No other city in Greece offers such immediate access to such a variety of major sites. Ancient Olympia, Delphi, Kalavrita, the monasteries of Mega Spileo and Agia Lavra, the Venetian fortresses of Nafpaktos and Messolonghi, the Aigialeia coast, and the beaches of Ilia — all are within a two-hour drive. Using Patras as a hub for a week-long trip through western Greece and the northern Peloponnese is one of the most efficient and underused strategies in Greek travel.",
            el: "Καμία άλλη πόλη στην Ελλάδα δεν προσφέρει τόσο άμεση πρόσβαση σε τόσο μεγάλη ποικιλία σημαντικών αρχαιολογικών χώρων. Αρχαία Ολυμπία, Δελφοί, Καλάβρυτα, τα μοναστήρια του Μεγάλου Σπηλαίου και της Αγίας Λαύρας, οι ενετικές οχυρώσεις Ναυπάκτου και Μεσολογγίου, η ακτή της Αιγιάλειας και οι παραλίες της Ηλείας — όλα σε απόσταση δύο ωρών.",
          },
        },
        {
          title: {
            en: "A real Greek city, unfiltered",
            el: "Μια αληθινή ελληνική πόλη, χωρίς φίλτρα",
          },
          text: {
            en: "Patras is not polished for tourism. Its neoclassical buildings, its market, its long café-lined waterfront, its Sunday fish restaurants, its evening volta along the seafront — these are a city living normally. For travelers who want to experience the texture of contemporary Greek urban life alongside the ancient sites, Patras is the honest version.",
            el: "Η Πάτρα δεν είναι γυαλισμένη για τον τουρισμό. Τα νεοκλασικά κτίριά της, η αγορά της, η μακριά παραλία με τα καφέ, οι κυριακάτικες ψαροταβέρνες, η βραδινή βόλτα στο μέτωπο — αυτά είναι μια πόλη που ζει κανονικά.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time for Patras",
        el: "Καλύτερη εποχή για Πάτρα",
      },
      layout: "list",
      alert: {
        en: "Secret: Combine Carnival season with a day trip to Ancient Olympia or Kalavrita. Most Carnival visitors never leave the city — which means the surrounding sites are unusually quiet during one of Greece\u2019s busiest festival periods.",
        el: "Μυστικό: Συνδυάστε την περίοδο του Καρναβαλιού με μια εκδρομή στην Αρχαία Ολυμπία ή τα Καλάβρυτα. Οι περισσότεροι επισκέπτες του Καρναβαλιού δεν φεύγουν από την πόλη.",
      },
      items: [
        {
          title: {
            en: "Carnival Season (late January \u2013 March)",
            el: "Περίοδος Καρναβαλιού (τέλη Ιανουαρίου \u2013 Μάρτιος)",
          },
          text: {
            en: "The reason to time a visit specifically. Hotels book out early; reserve months in advance. The energy of Patras during Carnival is unlike anything else in Greece. The weather is cool but rarely prohibitive.",
            el: "Ο λόγος για να προγραμματίσετε συγκεκριμένη επίσκεψη. Τα ξενοδοχεία κλείνουν γρήγορα. Η ενέργεια της Πάτρας στο Καρναβάλι είναι ασύγκριτη.",
          },
        },
        {
          title: {
            en: "Spring (April \u2013 June)",
            el: "Άνοιξη (Απρίλιος \u2013 Ιούνιος)",
          },
          text: {
            en: "The ideal season for exploring the wider region. Ancient Olympia and Delphi are manageable in temperature; the Aigialeia coast is uncrowded; Kalavrita and the mountain villages of Achaia are in bloom. Perfect conditions for driving the back roads.",
            el: "Η ιδανική εποχή για εξερεύνηση της ευρύτερης περιοχής. Αρχαία Ολυμπία και Δελφοί έχουν ανεκτές θερμοκρασίες.",
          },
        },
        {
          title: {
            en: "Summer (July \u2013 August)",
            el: "Καλοκαίρι (Ιούλιος \u2013 Αύγουστος)",
          },
          text: {
            en: "Hot inland but the Aigialeia coast and the beaches of Ilia come fully into their own. The city itself is less crowded than in Carnival but fully alive. Ancient Olympia in July heat is demanding — go very early in the morning.",
            el: "Ζέστη στην ενδοχώρα αλλά η Αιγιάλεια και οι παραλίες Ηλείας είναι στο καλύτερό τους.",
          },
        },
        {
          title: {
            en: "Autumn (September \u2013 November)",
            el: "Φθινόπωρο (Σεπτέμβριος \u2013 Νοέμβριος)",
          },
          text: {
            en: "The second-best season. The heat softens, the sea is still warm, olive harvests begin in the countryside, and the cultural calendar of the city picks up again. September in Nafpaktos or Messolonghi is particularly atmospheric.",
            el: "Η δεύτερη καλύτερη εποχή. Η ζέστη υποχωρεί, η θάλασσα είναι ακόμα ζεστή.",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get to Patras",
        el: "Πώς να πας στην Πάτρα",
      },
      layout: "grid",
      alert: {
        en: "Secret: The overnight ferry from Italy — Bari, Brindisi, Ancona, Venice — arrives directly in Patras. Traveling from western Europe by ferry and using Patras as the entry point into Greece is a classic route that has been quietly underused in recent years. It also produces a memorable arrival: approaching the city by sea at dawn.",
        el: "Μυστικό: Το νυχτερινό πλοίο από την Ιταλία — Μπάρι, Μπρίντιζι, Ανκόνα, Βενετία — φτάνει κατευθείαν στην Πάτρα.",
      },
      items: [
        {
          title: {
            en: "By car from Athens",
            el: "Με αυτοκίνητο από Αθήνα",
          },
          text: {
            en: "The expressway (E65 / A8 via the Rio\u2013Antirrio bridge, or A8 direct) connects Athens and Patras in approximately 2\u20132.5 hours. The most convenient way to explore the wider region.",
            el: "Ο αυτοκινητόδρομος (Ε65 / Α8 μέσω Ρίου\u2013Αντιρρίου) συνδέει Αθήνα και Πάτρα σε περίπου 2\u20132.5 ώρες.",
          },
        },
        {
          title: {
            en: "By train from Athens",
            el: "Με τρένο από Αθήνα",
          },
          text: {
            en: "The intercity train service connects Athens (Kiato/Corinth) with Patras. Journey times vary; check current TRAINOSE schedules as the Athens\u2013Patras rail line has undergone significant upgrade works.",
            el: "Το υπεραστικό τρένο συνδέει την Αθήνα με την Πάτρα. Οι χρόνοι ποικίλλουν.",
          },
        },
        {
          title: {
            en: "By bus (KTEL)",
            el: "Με ΚΤΕΛ",
          },
          text: {
            en: "Frequent KTEL departures connect Athens (Kifissos station) with Patras daily in approximately 2.5\u20133 hours. Local KTEL services from Patras reach Pyrgos (for Olympia), Aigion, Nafpaktos and other regional centers.",
            el: "Συχνά δρομολόγια ΚΤΕΛ συνδέουν Αθήνα (σταθμός Κηφισού) με Πάτρα σε 2.5\u20133 ώρες.",
          },
        },
        {
          title: {
            en: "By ferry from Ionian Islands & Italy",
            el: "Με πλοίο από Ιόνια νησιά & Ιταλία",
          },
          text: {
            en: "Patras is a major ferry hub. Regular services from Kefalonia, Ithaca and Zakynthos connect the city to the Ionian Islands. International ferry lines connect Patras directly with Bari, Brindisi, Ancona and Venice.",
            el: "Η Πάτρα είναι μεγάλο λιμάνι. Τακτικά δρομολόγια από Κεφαλονιά, Ιθάκη και Ζάκυνθο.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions in the city",
        el: "Top αξιοθέατα στην πόλη",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "Castle of Patras",
            el: "Κάστρο της Πάτρας",
          },
          text: {
            en: "The Byzantine castle built in the 6th century on the hill above the old town is the city\u2019s most commanding landmark. The walls, towers and interior gardens are well preserved, and the view from the ramparts — over the city, the gulf and the Rio\u2013Antirrio bridge — is the finest in Patras. Secret: Come in the late afternoon as the sun moves toward the western hills across the gulf. The light on the water at that hour is exceptional.",
            el: "Το βυζαντινό κάστρο χτισμένο τον 6ο αιώνα στο λόφο πάνω από την παλιά πόλη είναι το πιο εντυπωσιακό ορόσημο της πόλης.",
          },
        },
        {
          title: {
            en: "The Old Town & Psila Alonia",
            el: "Παλιά Πόλη & Ψηλά Αλώνια",
          },
          text: {
            en: "The hillside neighbourhood of the old town, with its neoclassical mansions, steep staircase streets, bougainvillea-draped facades and hidden squares, is where Patras keeps its architectural identity. Psila Alonia square, with its panoramic view and outdoor cafes, is the social heart of this part of the city.",
            el: "Η γειτονιά της παλιάς πόλης με νεοκλασικά αρχοντικά, απότομες σκάλες και κρυμμένες πλατείες.",
          },
        },
        {
          title: {
            en: "Agios Andreas Cathedral",
            el: "Καθεδρικός Ναός Αγίου Ανδρέα",
          },
          text: {
            en: "The largest Orthodox church in Greece and one of the most important in Eastern Orthodoxy — the Cathedral of Saint Andrew houses the skull relic of Saint Andrew the Apostle, the patron saint of Patras. The cathedral\u2019s scale is genuinely impressive; its setting at the western end of the seafront makes it a natural starting point for a city walk.",
            el: "Η μεγαλύτερη ορθόδοξη εκκλησία στην Ελλάδα. Φιλοξενεί το κρανίο του Αγίου Ανδρέα.",
          },
        },
        {
          title: {
            en: "Roman Odeum of Patras",
            el: "Ρωμαϊκό Ωδείο Πάτρας",
          },
          text: {
            en: "An intact Roman-era theatre built in the 1st century AD and still used for summer performances. The seating is original stone; the stage backdrop looks out over the city. The Archaeological Museum of Patras nearby holds finds from throughout Achaia.",
            el: "Ένα άθικτο ρωμαϊκό θέατρο του 1ου αιώνα που χρησιμοποιείται ακόμα για καλοκαιρινές παραστάσεις.",
          },
        },
        {
          title: {
            en: "Rio\u2013Antirrio Bridge",
            el: "Γέφυρα Ρίου\u2013Αντιρρίου",
          },
          text: {
            en: "The Charilaos Trikoupis Bridge connecting the Peloponnese to central Greece is 2.8 kilometres long and one of the major engineering achievements of recent European infrastructure. The view of the bridge from the waterfront of Rio village at sunset is one of the more striking images in the region.",
            el: "Η γέφυρα Χαρίλαος Τρικούπης που συνδέει την Πελοπόννησο με την κεντρική Ελλάδα είναι μήκους 2.8 χιλιομέτρων.",
          },
        },
        {
          title: {
            en: "Patras Carnival Museum & Archive",
            el: "Μουσείο Καρναβαλιού Πάτρας",
          },
          text: {
            en: "Outside Carnival season, the city\u2019s Carnival heritage — costumes, historical floats, archives, photographs — is preserved and displayed in the dedicated museum. The craftsmanship of the satirical floats, built over months by dedicated groups, is remarkable up close.",
            el: "Εκτός εποχής Καρναβαλιού, η κληρονομιά του Καρναβαλιού εκτίθεται στο ειδικό μουσείο.",
          },
        },
      ],
    },
    {
      title: {
        en: "Where to Stay: A Quick Orientation",
        el: "Πού να μείνεις: Μια γρήγορη ματιά",
      },
      layout: "list",
      alert: {
        en: "Patras has a broad range of accommodation — from business-class city hotels to smaller boutique stays — at prices that remain reasonable relative to the major island destinations.",
        el: "Η Πάτρα έχει μεγάλη γκάμα καταλυμάτων — από business ξενοδοχεία έως μικρές boutique επιλογές.",
      },
      items: [
        {
          title: {
            en: "Byzantine Hotel — traditional character near the castle",
            el: "Byzantine Hotel — παραδοσιακός χαρακτήρας κοντά στο κάστρο",
          },
          text: {
            en: "Offers a quieter, more traditional character in the historic neighbourhood near the castle.",
            el: "Προσφέρει έναν πιο ήσυχο, παραδοσιακό χαρακτήρα στην ιστορική γειτονιά.",
          },
        },
        {
          title: {
            en: "Porto Rio Hotel & Casino — modern comfort at Rio",
            el: "Porto Rio Hotel & Casino — σύγχρονη άνεση στο Ρίο",
          },
          text: {
            en: "Seafront position at Rio (6km from the city centre) with a large pool complex and direct access to the beach. Popular with both business and leisure travelers.",
            el: "Παραλιακή θέση στο Ρίο (6χλμ από το κέντρο) με μεγάλο συγκρότημα πισίνας.",
          },
        },
        {
          title: {
            en: "Europa Hotel Olympia — views over the ancient site",
            el: "Europa Hotel Olympia — θέα στον αρχαιολογικό χώρο",
          },
          text: {
            en: "Sits on the hill above Ancient Olympia with views over the valley.",
            el: "Βρίσκεται στο λόφο πάνω από την Αρχαία Ολυμπία με θέα στην κοιλάδα.",
          },
        },
        {
          title: {
            en: "Hotel Olympia Palace — good value in Olympia village",
            el: "Hotel Olympia Palace — καλή αξία στο χωριό της Ολυμπίας",
          },
          text: {
            en: "Offers good value accommodation in the village centre of Olympia.",
            el: "Προσφέρει διαμονή καλής αξίας στο κέντρο του χωριού της Ολυμπίας.",
          },
        },
        {
          title: {
            en: "Poseidon Hotel Aigio — coastal base on Aigialeia",
            el: "Poseidon Hotel Aigio — παραλιακή βάση στην Αιγιάλεια",
          },
          text: {
            en: "Along the Aigialeia coast, suits travelers who want a coastal base for beach days combined with day trips to Patras and the wider region.",
            el: "Κατά μήκος της ακτής της Αιγιάλειας, ιδανικό για παραλιακή βάση.",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical Tips",
        el: "Πρακτικές συμβουλές",
      },
      layout: "list",
      items: [
        {
          title: {
            en: "Getting around the region",
            el: "Μετακινήσεις στην περιοχή",
          },
          text: {
            en: "A rental car is strongly recommended for anyone planning to explore the wider region. Patras is well-placed as a hub but the dispersed nature of the sites means that combining more than one in a day without a car is difficult.",
            el: "Η ενοικίαση αυτοκινήτου συνιστάται ανεπιφύλακτα για όσους σχεδιάζουν να εξερευνήσουν την ευρύτερη περιοχή.",
          },
        },
        {
          title: {
            en: "The Rio\u2013Antirrio Bridge",
            el: "Η γέφυρα Ρίου\u2013Αντιρρίου",
          },
          text: {
            en: "The bridge toll applies in both directions. For day trips to Nafpaktos, Delphi and Messolonghi, crossing it is unavoidable and quick.",
            el: "Η διόδια ισχύει και για τις δύο κατευθύνσεις.",
          },
        },
        {
          title: {
            en: "Carnival dates and booking",
            el: "Ημερομηνίες Καρναβαλιού και κρατήσεις",
          },
          text: {
            en: "The Patras Carnival dates change annually, depending on Orthodox Easter. Hotels in the city book out 3\u20136 months in advance for Carnival weekend. The Grand Parade takes place on the Sunday before Clean Monday.",
            el: "Οι ημερομηνίες του Καρναβαλιού αλλάζουν ετησίως ανάλογα με το Ορθόδοξο Πάσχα.",
          },
        },
        {
          title: {
            en: "Visiting Ancient Olympia",
            el: "Επίσκεψη στην Αρχαία Ολυμπία",
          },
          text: {
            en: "The site opens at 8am. July and August visits should begin at opening time. The Archaeological Museum requires separate time; allow a full half-day for site and museum together.",
            el: "Ο χώρος ανοίγει στις 8πμ. Οι επισκέψεις Ιουλίου και Αυγούστου πρέπει να ξεκινούν από την ώρα ανοίγματος.",
          },
        },
      ],
    },
    {
      title: {
        en: "FAQ",
        el: "Συχνές Ερωτήσεις",
      },
      layout: "faq",
      items: [
        {
          title: {
            en: "How many days should I spend in Patras?",
            el: "Πόσες μέρες πρέπει να μείνω στην Πάτρα;",
          },
          text: {
            en: "Two nights in the city allows you to see Patras itself properly. A stay of 4\u20135 nights turns it into a regional base and allows day trips to Olympia, Delphi or Kalavrita, a coastal day on Aigialeia or Ilia, and a visit to Nafpaktos or Messolonghi. A full week covers all of the above comfortably.",
            el: "Δύο βράδια στην πόλη σου επιτρέπουν να δεις σωστά την Πάτρα. 4\u20135 βράδια τη μετατρέπουν σε περιφερειακή βάση.",
          },
        },
        {
          title: {
            en: "Is Patras worth visiting outside Carnival season?",
            el: "Αξίζει η Πάτρα εκτός εποχής Καρναβαλιού;",
          },
          text: {
            en: "Completely. The city has its own character, the archaeological sites are excellent year-round, and the regional day trips are the main reason to use Patras as a base.",
            el: "Απόλυτα. Η πόλη έχει τον δικό της χαρακτήρα, οι αρχαιολογικοί χώροι είναι εξαιρετικοί όλο τον χρόνο.",
          },
        },
        {
          title: {
            en: "Can I visit Ancient Olympia as a day trip from Patras?",
            el: "Μπορώ να επισκεφθώ την Αρχαία Ολυμπία ως ημερήσια εκδρομή από την Πάτρα;",
          },
          text: {
            en: "Yes, comfortably. The drive is approximately 1 hour 15 minutes via the E55 motorway. Allow a full day for the site and museum.",
            el: "Ναι, άνετα. Η διαδρομή είναι περίπου 1 ώρα 15 λεπτά.",
          },
        },
        {
          title: {
            en: "Can I visit Delphi as a day trip from Patras?",
            el: "Μπορώ να επισκεφθώ τους Δελφούς ως ημερήσια εκδρομή;",
          },
          text: {
            en: "Yes, via the Rio\u2013Antirrio bridge. Allow approximately 2 hours each way; arrive at the site at opening time to avoid the heat and the tour groups.",
            el: "Ναι, μέσω της γέφυρας Ρίου\u2013Αντιρρίου. Υπολογίστε περίπου 2 ώρες για κάθε διαδρομή.",
          },
        },
        {
          title: {
            en: "Is the Kalavrita rack railway operating?",
            el: "Λειτουργεί ο οδοντωτός σιδηρόδρομος Καλαβρύτων;",
          },
          text: {
            en: "The Odontotos rack railway has been intermittently closed for maintenance works in recent years. Check the current operating status before planning a visit. When operating, it is one of the most spectacular short railway experiences in Greece.",
            el: "Ο οδοντωτός έχει διακοπεί περιστασιακά για έργα συντήρησης τα τελευταία χρόνια.",
          },
        },
        {
          title: {
            en: "What is avgotaraho and where can I buy it?",
            el: "Τι είναι το αυγοτάραχο και πού μπορώ να το αγοράσω;",
          },
          text: {
            en: "Avgotaraho is a cured mullet roe produced from grey mullet caught in the Messolonghi Lagoon. It is one of Greece\u2019s great food specialties. The finest versions come directly from producers in Messolonghi.",
            el: "Το αυγοτάραχο είναι αυγό κεφάλου επεξεργασμένο από κέφαλο της λιμνοθάλασσας Μεσολογγίου.",
          },
        },
        {
          title: {
            en: "Is Patras family-friendly?",
            el: "Είναι η Πάτρα κατάλληλη για οικογένειες;",
          },
          text: {
            en: "Yes. The city has good infrastructure, a long safe waterfront, beaches in easy reach, and the proximity of Ancient Olympia.",
            el: "Ναι. Η πόλη έχει καλές υποδομές, μεγάλο ασφαλές παραλιακό μέτωπο και κοντινές παραλίες.",
          },
        },
      ],
    },
  ],
};