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
};