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
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Santorini", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Σαντορίνη" },
      text: {
        en: "✕ **Oia sunset crowds** — By 18:00 the main viewing paths are shoulder-to-shoulder. You end up watching the sun behind someone's phone screen. Instead, watch from Imerovigli or the Akrotiri lighthouse where the views are equally stunning without the circus.\n\n✕ **Fira parking in peak season** — The main car parks fill up by mid-morning and drivers circle endlessly. Use the KTEL bus from Fira or park at the far end of town and walk. The narrow streets are not designed for rental cars.\n\n✕ **Caldera boat tours sold as 'sailing'** — Most caldera boat tours are large, crowded vessels with a buffet lunch and two brief swimming stops. If you want a real sailing experience, book a small private catamaran from Ammoudi or Vlychada. The difference in quality is enormous.\n\n✕ **Caldera-view room premiums** — Hotels charge 2-3x more for rooms with caldera views. But many 'caldera view' rooms only see a sliver of the caldera from a balcony. Check actual photos, not promotional shots. Some non-caldera hotels in Pyrgos or Megalochori are more charming.\n\n✕ **Skipping Akrotiri for more beach time** — Akrotiri archaeological site is one of the most important in the Aegean and the Red Beach nearby is visually dramatic. Yet many visitors spend all their time in Oia and Fira, missing the southern coast entirely.\n\n💡 What nobody tells you: The best way to experience Santorini's caldera is not from the clifftop but from the water. Rent a kayak in Akrotiri and paddle along the volcanic coastline at dawn before any boats are out — you'll see the caldera the way it looked 3,600 years ago.",
        el: "✕ **Οχλοποιία στο ηλιοβασίλεμα της Οίας** — Μέχρι τις 18:00 τα κύρια σημεία θέασης είναι γεμάτα. Καταλήγεις να βλέπεις τον ήλιο πίσω από το κινητό κάποιου. Παρακολούθησε αντίθετα από το Ημεροβίγλι ή τον φάρο του Ακρωτηρίου, όπου η θέα είναι εξίσου εντυπωσιακή χωρίς το θέαμα.\n\n✕ **Πάρκινγκ στα Φηρά την πιο ακριβή περίοδο** — Τα κύρια πάρκινγκ γεμίζουν μεσημέρι και οι οδηγοί περνούν ώρες γύρω-γύρω. Χρησιμοποίησε το ΚΤΕΛ από τα Φηρά ή πάρκαρε στην άκρη της πόλης και περπάτα. Τα στενά δρομάκια δεν είναι κατασκευασμένα για rental cars.\n\n✕ **Caldera boat tours που πουλιέσαι ως 'sailing'** — Τα περισσότερα tours caldera είναι μεγάλα, γεμάτα σκάφη με μπουφέ και δύο σύντομες στάσεις κολύμπησης. Αν θέλεις πραγματική εμπειρία sailing, κλείσε μικρό ιδιωτικό catamaran από το Αμμούδι ή το Βλυχάδα. Η διαφορά ποιότητας είναι τεράστια.\n\n✕ **Πρεμίουμ για δωμάτια με θέα caldera** — Ξενοδοχεία χρεώνουν 2-3 φορές περισσότερο για δωμάτια με θέα caldera. Αλλά πολλά 'caldera view' δωμάτια βλέπουν μόνο ένα λεπτό της caldera από μπαλκόνι. Έλεγξε πραγματικές φωτογραφίες, όχι προωθητικές. Κάποια ξενοδοχεία στο Πύργο ή το Μεγαλοχώρι είναι πιο γοητευτικά.\n\n✕ **Να παραλείψεις το Ακρωτήρι για περισσότερη παραλία** — Το αρχαιολογικό χώρο του Ακρωτηρίου είναι από τα πιο σημαντικά στο Αιγαίο και η Κόκκινη Παραλία δίπλα είναι εντυπωσιακή. Και όμως πολλοί επισκέπτες περνούν όλη την ώρα τους στην Οία και τα Φηρά, χάνοντας εντελώς τη νότια ακτή.\n\n💡 Αυτό που δε σου λέει κανείς: Ο καλύτερος τρόπος να βιώσεις την caldera της Σαντορίνης δεν είναι από τον γκρεμό αλλά από τη θάλασσα. Νοίκιασε kayak στο Ακρωτήρι και κωπήλατα κατά μήκος της ηφαιστειακής ακτογραμμής στην αυγή πριν βγουν τα σκάφη — θα δεις την caldera όπως έμοιαζε πριν 3.600 χρόνια."
      }
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
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Mykonos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Μύκονο" },
      text: {
        en: "✕ **Little Venice crowds at sunset** — The iconic waterfront becomes a wall of people by 19:00. Restaurants charge premium prices for mediocre food just to sit near the water. Walk five minutes south along the coast for the same sunset view with actual taverna quality.\n\n✕ **Beach club prices** — Nammos, Scorpios, and similar venues charge €20-40 for a sunbed and €15+ for a basic drink. The beach itself is public — bring your own umbrella and walk to the quieter sections. Agia Anna and Paraga have equally beautiful water without the scene.\n\n✕ **Staying only in Mykonos Town** — The real villages of Ano Mera, Panormos, and the inland settlements show an island that most tourists never see. Ano Mera's monastery and local tavernas are a different world from the Chora madness.\n\n✕ **Paradise and Super Paradise beaches** — They are famous but overcrowded, loud, and not actually among the best beaches on the island. Elia, Fokos, and the north coast coves offer better sand, clearer water, and far fewer people.\n\n✕ **Ignoring the wind exposure** — Mykonos is called the 'Island of the Winds' for a reason. The Meltemi can make outdoor dining and beach days uncomfortable. Choose sheltered south-facing beaches on windy days and plan indoor activities for afternoons when the wind peaks.\n\n💡 What nobody tells you: The best way to experience Mykonos is to rent a scooter and drive the coast road from Ornos to Ano Mera, stopping at every signposted beach. The island's real beauty is in its deserted north coast, where you can find empty coves that Instagram has not discovered yet.",
        el: "✕ **Οχλοποιία στο Little Venice λιακάδα** — Το ικονικό παραλιακό γεμίζει από τις 19:00. Οι εστιατορίες χρεώνουν υψηλές τιμές για μέτριο φαγητό απλώς για να κάθισες κοντά στη θάλασσα. Περπάτα 5 λεπτά νότια κατά μήκος της ακτής για την ίδια θέα με ποιότητα ταβέρνας.\n\n✕ **Τιμές beach clubs** — Nammos, Scorrios και παρόμοια χρεώνουν 20-40€ για σόλιο και 15€+ για ένα απλό ποτό. Η παραλία είναι δημόσια — φέρε τη δική σου ομπρέλα και πήγαινε στα πιο ήσυχα τμήματα. Η Αγία Αννα και το Παράγκα έχουν εξίσου ωραία νερά χωρίς το κλίμα.\n\n✕ **Να μείνεις μόνο στη Χώρα Μυκόνου** — Τα πραγματικά χωριά, η Άνω Μερά, το Πάνορμος και τα εσωτερικά χωριά δείχνουν ένα νησί που οι περισσότεροι τουρίστες δεν βλέπουν ποτέ. Το μοναστήρι της Άνω Μεράς και οι τοπικές ταβέρνες είναι ένας εντελώς διαφορετικός κόσμος.\n\n✕ **Παραλίες Paradise και Super Paradise** — Είναι διάσημες αλλά υπερπλήρεις, θορυβώδεις, και δεν είναι στην πραγματικότητα ανάμεσα στις καλύτερες παραλίες του νησιού. Η Ελιά, το Φωκός και οι κόλποι της βόρειας ακτής έχουν καλύτερη άμμο, πιο καθαρό νερό και πολύ λιγότερο κόσμο.\n\n✕ **Να αγνοήσεις την έκθεση στον άνεμο** — Η Μύκονος λέγεται 'το νησί των ανέμων' για λόγο. Ο Μελτέμι μπορεί να κάνει το φαγητό στον αέρα και τις μέρες στην παραλία άνετες. Επίλεξε προστατευμένες νότιες παραλίες σε ημέρες με άνεμο και σχεδίασε εσωτερικές δραστηριότητες το απόγευμα όταν ο άνεμος κορυφώνεται.\n\n💡 Αυτό που δε σου λέει κανείς: Ο καλύτερος τρόπος να βιώσεις τη Μύκονο είναι να νοικιάσεις scooter και να οδηγήσεις την παραλιακή από τον Ορνό στην Άνω Μερά, σταματώντας σε κάθε παραλία με πινακίδα. Η πραγματική ομορφιά του νησιού είναι στην έρημη βόρεια ακτή, όπου μπορείς να βρεις άδειους κόλπους που το Instagram δεν έχει ανακαλύψει ακόμα."
      }
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
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Crete", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Κρήτη" },
      text: {
        en: "✕ **Samaria Gorge tourist trail in peak season** — The official summer route is a 16km conveyor belt of people. You queue to start, queue at the ferry, and queue at the exit. Do it in May or October instead, or choose a less famous gorge like Imbros or Aradena for the same drama without the queues.\n\n✕ **Chania Old Town every evening** — The narrow lanes of the Venetian harbour are magical at 08:00 but suffocating by 18:00. Most restaurants along the harbour front serve tourist-grade food at inflated prices. Walk two blocks inland and you'll find half the cost and twice the quality.\n\n✕ **Rental car scams** — Insist on video documentation of every scratch before driving away. Some companies charge €300+ for minor dings that were already there. Choose reputable agencies with physical offices, not random online bookings. Check the tyres and spare wheel.\n\n✕ **Resort areas for 'real Crete'** — Hersonissos, Malia, and Stalis are party-strip destinations, not representative of Cretan culture. If you only visit these, you'll miss the gorges, mountain villages, and authentic tavernas that make Crete exceptional. Head to Lasithi Plateau, the White Mountains, or the south coast.\n\n✕ **Elafonisi in July-August** — This pink-sand paradise becomes a packed car park with 2,000+ people. The lagoon is stunning but you'll share it with a small city. Visit in June or September, or try Balos instead which handles crowds better due to its size.\n\n💡 What nobody tells you: The best thing about Crete is not any single beach or ruin — it's the road between them. Drive the old national road from Chania to Rethymno instead of the highway, stopping at every village that looks interesting. You'll discover the real Crete that package tourists never see.",
        el: "✕ **Σαμαριά Φαράγγι — τουριστικό μονοπάτι στην αιχμή** — Το επίσημο καλοκαιρινό μονοπάτι είναι 16χλμ ατελείωτης ουράς. Κάνεις ουρά για να ξεκινήσεις, κάνεις ουρά στο πλοίο και κάνεις ουρά στην έξοδο. Κάντο τον Μάιο ή τον Οκτώβριο, ή διάλεξε λιγότερο γνωστό φαράγγι όπως η Ίμπρος ή η Αράδενα για ίδιο δράμα χωρίς τις ουρές.\n\n✕ **Παλιά Πόλη Χανίων κάθε βράδυ** — Τα στενά καντούνια του Βενετού λιμανιού είναι μαγικά στις 08:00 αλλά πνιγηρά μετά τις 18:00. Οι περισσότερες εστιατορίες στο παραλιακό μέτωπο σερβίρουν μέτριο φαγητό σε υψηλές τιμές. Περπάτα δύο τετράγωνα μέσα στην πόλη και θα βρεις το μισό κόστος και διπλή ποιότητα.\n\n✕ **Scams rental cars** — Επιμένε σε βίντεο κάθε γρατσουνιάς πριν ξεκινήσεις. Κάποιες εταιρίες χρεώνουν 300€+ για μικρές γρατσουνιές που υπήρχαν ήδη. Διάλεξε αξιόπιστες εταιρίες με φυσικά γραφεία, όχι τυχαίες online κρατήσεις. Έλεγξε τα ελαστικά και τον εφεδρικό.\n\n✕ **Περιοχές resorts για 'πραγματική Κρήτη'** — Ησωνησσός, Μάλια και Σταλίς είναι party-strip προορισμοί, όχι αντιπροσωπευτικοί του κρητικού πολιτισμού. Αν μόνο αυτά επισκεφτείς, θα χάσεις τα φαράγγια, τα ορεινά χωριά και τις αυθεντικές ταβέρνες. Πήγαινε στο Λασιθιωτικό Οροπέδιο, τα Λευκά Όρη ή τη νότια ακτή.\n\n✕ **Ελαφονήσι τον Ιούλιο-Αύγουστο** — Αυτή η παραλία με ροζ άμμο γίνεται πακεταρισμένο parking με 2.000+ ανθρώπους. Η λιμνοθάλασσα είναι εντυπωσιακή αλλά θα το μοιραστείς με μια μικρή πόλη. Επισκέψου τον Ιούνιο ή τον Σεπτέμβριο, ή δοκίμασε το Μπάλος που διαχειρίζεται καλύτερα τα πλήθη λόγω μεγέθους.\n\n💡 Αυτό που δε σου λέει κανείς: Το καλύτερο πράγμα στην Κρήτη δεν είναι κάποια παραλία ή ερείπιο — είναι ο δρόμος ανάμεσά τους. Οδήγησε τον παλιό εθνικό δρόμο από Χανιά προς Ρέθυμνο αντί του αυτοκινητόδρομου, σταματώντας σε κάθε χωριό που φαίνεται ενδιαφέρον. Θα ανακαλύψεις την πραγματική Κρήτη που οι τουρίστες πακέτου ποτέ δεν βλέπουν."
      }
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
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Corfu", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Κέρκυρα" },
      text: {
        en: "✕ **Old Town tourist traps** — The narrow lanes behind the Spianada are full of restaurants with English menus and photos of food that look nothing like what arrives. Walk to the Liston side streets or the San Rocco district for food that locals actually eat.\n\n✕ **Corfu Town parking** — Driving into the old town is a mistake. The streets are Venetian-width and parking is nearly impossible. Use the free municipal lots on the outskirts or take a bus and walk.\n\n✕ **Canal d'Amour in peak season** — The natural rock formations are genuinely interesting, but in August the swim-through channels are packed with people and the surrounding area is overdeveloped. Visit in the morning or shoulder season.\n\n✕ **Paleokastritsa as your only coastal stop** — It's beautiful but every tour bus goes there. The north coast from Sidari to Cape Drastis has dramatic cliffs, hidden beaches, and far fewer visitors. Rovinj and the Diapontia islands are the Corfu secrets most tourists miss.\n\n✕ **Overpriced harbour restaurants** — Restaurants directly on the old harbour charge double for the view. The fish is the same whether you eat it overlooking the boats or two streets back. Ask locals for their 'kapou' (where) — they'll send you somewhere real.\n\n💡 What nobody tells you: The best evening in Corfu is not in Corfu Town at all. Drive to the village of Lakones at sunset, sit at a taverna overlooking the 'belly of Corfu' (the bay below), and watch the light change over the olive groves. It's the view that made the island famous before tourism arrived.",
        el: "✕ **Tourist traps στην Παλιά Πόλη** — Τα στενά πίσω από τη Σπιανάδα είναι γεμάτα εστιατόρια με αγγλικά μενού και φωτογραφίες φαγητού που δεν μοιάζουν με αυτό που φτάνει. Πήγαινε στα πλατεάκια του Λιστόν ή στη συνοικία Σαν Ρόκο για φαγητό που τρώνε πραγματικά οι ντόπιοι.\n\n✕ **Parking στην πόλη της Κέρκυρας** — Το οδήγημα στην παλιά πόλη είναι λάθος. Τα δρομάκια είναι σε μέγεθος Βενετσιάς και το parking σχεδόν αδύνατο. Χρησιμοποίησε τα δωρεάν δημοτικά parking στις περιφέρειες ή πάρε λεωφορείο και περπάτα.\n\n✕ **Canal d'Amour στην αιχμή της σεζόν** — Τα φυσικά πέτρινα σχήματα είναι ενδιαφέροντα, αλλά τον Αύγουστο τα κανάλια κολύμβησης είναι γεμάτα και η γύρω περιοχή υπεραναπτυγμένη. Επισκέψου το πρωί ή εκτός σεζόν.\n\n✕ **Παλοκαστρίτσα ως μόνος παραλιακός σταθμός** — Είναι όμορφη αλλά κάθε τουριστικό λεωφορείο πηγαίνει εκεί. Η βόρεια ακτή από Σιδάρι έως Ακρωτήρι Δραστής έχει εντυπωσιακούς γκρεμούς, κρυφές παραλίες και πολύ λιγότερους επισκέπτες. Το Ρόβινο και τα Διαπόντια νησιά είναι τα μυστικά της Κέρκυρας που χάνουν οι περισσότεροι τουρίστες.\n\n✕ **Ακριβές εστιατόρια στο λιμάνι** — Οι εστιατορίες ακριβώς δίπλα στο παλιό λιμάνι χρεώνουν διπλό για τη θέα. Το ψάρι είναι ίδιο είτε το τρως κοιτώντας τα σκάφη είτε δύο δρομάκια πιο πίσω. Ρώτα τους ντόπιους για το 'kapou' — θα σε στείλουν κάπου πραγματικό.\n\n💡 Αυτό που δε σου λέει κανείς: Το καλύτερο βράδυ στην Κέρκυρα δεν είναι στην πόλη της Κέρκυρας καθόλου. Οδήγησε στο χωριό Λάκωνες στη λιακάδα, κάθισε σε μια ταβέρνα με θέα τη 'κοιλιά της Κέρκυρας' (τον κόλπο από κάτω) και παρακολούθησε το φως να αλλάζει πάνω από τις ελαιοφυτείες. Είναι η θέα που έκανε το νησί διάσημο πριν φτάσει ο τουρισμός."
      }
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
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Nafplio", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στο Ναύπλιο" },
      text: {
        en: "✕ **Palamidi steps in the midday heat** — The 999 steps to the fortress are exposed and merciless. Attempting them between 11:00 and 16:00 in summer is miserable. Go at sunrise or late afternoon when the light on the old town is also at its best.\n\n✕ **Bourtzi boat tours at noon** — The short boat ride to the island fortress is pleasant, but at peak hours you share the boat with dozens of others and get barely fifteen minutes on the island. The early morning departures (before 10:00) or the sunset rides are far more enjoyable.\n\n✕ **Tolo as a beach base** — Tolo is fifteen minutes away and gets promoted as Nafplio's beach, but it is a concrete strip with mediocre tavernas. Drive twenty minutes further to Paralio Astros or head south to Karathona for a proper beach day.\n\n✕ **Parking inside the Old Town** — Driving into the narrow streets of the Palia Poli is technically possible and practically miserable. Park at the designated lots near the port and walk in — the old town is small and the walk is part of the experience.\n\n✕ **Skipping Nafplio for Argos** — Many visitors combine the Epidaurus theatre with a quick stop in Argos and leave. Nafplio deserves its own overnight: the evening promenade, the rooftop bars with fortress views, and the morning light on Bourtzi are what make it special.\n\n💡 What nobody tells you: The best view of Nafplio is not from Palamidi but from the road to Karathona beach, where the entire old town, Bourtzi, and the harbour form a perfect panorama. Go for the sunset and you will understand why the Venetians chose this spot.",
        el: "✕ **Τα 999 βήματα του Παλαμιδίου στη μεσημεριακή ζέστη** — Είναι εκτεθειμένα και ασυγχώρητα. Ανέβα τα πριν τις 10:00 ή μετά τις 17:00, όταν και το φως στην Παλιά Πόλη είναι καλύτερο.\n\n✕ **Bourtzi boat tours στο μεσημέρι** — Το ταξίδι στο νησί-φρούριο είναι ευχάριστο, αλλά τις αιχμηρές ώρες μοιράζεσαι το σκάφος με δεκάδες άλλους. Οι πρωινές αποχωρήσεις (πριν τις 10:00) είναι πολύ καλύτερες.\n\n✕ **Tolo ως βάση παραλίας** — Το Tolo είναι 15 λεπτά μακριά αλλά είναι μια σκούρα λωρίδα με μέτριες ταβέρνες. Πήγαινε στο Παράλιο Άστρος ή στην Καραθώνα.\n\n✕ **Πάρκινγκ στην Παλιά Πόλη** — Τα στενά δρομάκια δεν συγχωρούν. Πάρκαρε κοντά στο λιμάνι και μπες με τα πόδια.\n\n✕ **Να παραλείψεις το Ναύπλιο για το Άργος** — Πολλοί σταματούν στο Άργος μετά το Αρχαίο θέατρο της Επιδαύρου και φεύγουν. Το Ναύπλιο αξίζει διανυκτέρευση.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη θέα του Ναυπλίου δεν είναι από το Παλαμίδι αλλά από τον δρόμο προς την Καραθώνα, όπου η Παλιά Πόλη, το Bourtzi και το λιμάνι σχηματίζουν ένα τέλειο πανόραμα."
      }
    }
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
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Thessaloniki", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Θεσσαλονίκη" },
      text: {
        en: "✕ **The White Tower museum** — The tower itself is an icon, but the small museum inside is underwhelming and the queue moves slowly. The real value is walking around the waterfront at golden hour and photographing it from the promenade.\n\n✕ **Ladadika for dinner** — This old warehouse district is atmospheric but the restaurants are overpriced and tourist-oriented. Walk five minutes inland to the streets around Fotiadou or Kassandrou for better food at honest prices.\n\n✕ **Aristotelous Square restaurants** — The grand square is beautiful for a coffee, but eating there is expensive and mediocre. The side streets around Bit Bazaar have the actual food scene.\n\n✕ **Ano Poli in the midday heat** — The Upper Town has Ottoman houses, city walls, and the best views, but climbing those streets at noon in July is unpleasant. Go in the evening when the terraces are open and the sunset hits the Thermaic Gulf.\n\n✕ **Skipping the waterfront promenade** — Thessaloniki's coastline stretches over three kilometres. Visitors who stay only around Aristotelous Square miss the sculpture park, the concert hall area, and the local life further south.\n\n💡 What nobody tells you: The best food in Thessaloniki is at the university-area restaurants around Egnatia and Dimokratias, where students have kept prices low and quality high for decades. The real locals go to Giannis Sva (Svolou 56) for morning bougatsa, not the tourist-facing branches.",
        el: "✕ **Το μουσείο του Λευκού Πύργου** — Ο Πύργος είναι εμβληματικός αλλά το μουσείο μέσα είναι απογοητευτικό. Η πραγματική αξία είναι να περπατήσεις στην παραλία στο χρυσό φως.\n\n✕ **Ladadika για δείπνο** — Η συνοικία είναι ατμοσφαιρική αλλά οι ταβέρνες είναι υπερτιμημένες. Πήγαινε 5 λεπτά μέσα στις δρόμους γύρω από Φωτιάδου.\n\n✕ **Εστιατόρια στην Αριστοτέλους** — Η πλατεία είναι όμορφη για καφέ αλλά το φαγητό είναι ακριβό. Οι δρόμοι γύρω από Bit Bazaar έχουν την πραγματική σκηνή φαγητού.\n\n✕ **Άνω Πόλη στη ζέστη** — Τα Οθωμανικά σπίτια και η θέα είναι εξαιρετικά αλλά στο μεσημέρι είναι δύσκολο. Πήγαινε βράδυ όταν ανοίγουν και τα terraces.\n\n✕ **Να παραλείψεις την παραλία** — Το παραλιακό μέτωπο είναι 3 χιλιόμετρα και είναι ο πραγματικός κόσμος της πόλης.\n\n💡 Αυτό που δε σου λέει κανείς: Το καλύτερο φαγητό είναι στις περιοχές γύρω από Εγνατία και Δημοκρατίας, όπου οι φοιτητές κρατούν τιμές χαμηλές εδώ και δεκαετίες."
      }
    }
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
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Kefalonia", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Κεφαλονιά" },
      text: {
        en: "✕ **Melissani Cave queues** — By 10:00 the queue wraps around the entrance and you wait 45+ minutes to descend. The cave is genuinely spectacular, but go at opening time (08:00) or after 16:00 when the tour buses leave. The boat ride inside is only 15 minutes — you don't want to wait an hour for that.\n\n✕ **Myrtos Beach parking chaos** — The narrow road down is single-file with cars reversing and parking on the cliff edge. Arrive before 09:00 or take a boat from Agia Efimia. The beach itself is worth the effort but the descent is stressful during peak hours.\n\n✕ **Fiskardo as your only village** — It's gorgeous but has become an expensive yacht-harbour town. Assos, 30 minutes away, is the village Fiskardo used to be: quieter, more authentic, with better waterfront tavernas and a fraction of the crowds.\n\n✕ **Public transport expectations** — Kefalonia has buses but they're infrequent and don't reach most beaches or villages. Don't plan your trip around them. Rent a car or ATV from day one — this is a driving island.\n\n✕ **Road conditions** — The main roads are fine but mountain routes to villages like Makriotika and Zola are narrow, winding, and sometimes unpaved. Take it slow and use a vehicle suited to rough terrain if you plan to explore inland.\n\n💡 What nobody tells you: The best day on Kefalonia combines Melissani Cave at opening, a drive through the olive groves of the east coast to Antisamos beach, lunch in Sami, and sunset from Assos castle. Skip the south coast entirely — Myrtos is photogenic but Antisamos is where locals actually swim.",
        el: "✕ **Ουρές στο σπήλαιο Μελισσάνης** — Μέχρι τις 10:00 η ουρά γυρίζει γύρω από την είσοδο και περιμένεις 45+ λεπτά. Το σπήλαιο είναι πραγματικά εντυπωσιακό αλλά πήγαινε ανοίγοντας (08:00) ή μετά τις 16:00 όταν φεύγουν τα τουριστικά λεωφορεία. Η βόλτα με το σκάφος μέσα είναι μόνο 15 λεπτά — δεν θες να περιμένεις μια ώρα γι' αυτό.\n\n✕ **Χάος parking στον Μύρτο** — Ο στενός δρόμος προς τα κάτω είναι μονόδρομος με αυτοκίνητα που προχωρούν και πάρκαρουν στην άκρη του γκρεμού. Φτάσε πριν τις 09:00 ή πάρε σκάφος από την Αγία Εφημία. Η παραλία αξίζει την προσπάθεια αλλά η κατέβαση είναι άγχος τις ακμές.\n\n✕ **Φισκάρδο ως μόνο χωριό** — Είναι γοητευτικό αλλά έγινε ακριβό yacht-harbour town. Ο Άσσος, 30 λεπτά μακριά, είναι το χωριό που ήταν το Φισκάρδο: πιο ήσυχο, πιο αυθεντικό, με καλύτερες παραλιακές ταβέρνες και λιγότερο κόσμο.\n\n✕ **Προσδοκίες δημόσιας συγκοινωνίας** — Η Κεφαλονιά έχει λεωφορεία αλλά είναι σπάνια και δεν φτάνουν στις περισσότερες παραλίες ή χωριά. Μη σχεδιάσεις το ταξίδι σου γύρω τους. Νοίκιασε αυτοκίνητο ή ATV από την πρώτη μέρα — είναι νησί οδηγήματος.\n\n✕ **Καταστάσεις δρόμων** — Οι κύριοι δρόμοι είναι εντάξει αλλά τα ορεινά μονοπάτια προς χωριά όπως Μακριώτικα και Ζώλα είναι στενά, στροφωτά και κάποιες φορές χωρίς άσφαλτο. Πάρ' το αργά και χρησιμοποίησε όχημα κατάλληλο για σκληρό έδαφος αν σκοπεύεις να εξερευνήσεις την ενδοχώρα.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη μέρα στην Κεφαλονιά συνδυάζει Μελισσάνη στο άνοιγμα, οδηγιά μέσα από τις ελαιοφυτείες της ανατολικής ακτής στην παραλία Αντίσαμος, φαγητό στη Σάμη και ηλιοβασίλεμα από το κάστρο του Άσσου. Παράλειψε εντελώς τη νότια ακτή — ο Μύρτος είναι φωτογενής αλλά ο Αντίσαμος είναι όπου κολυμπούν πραγματικά οι ντόπιοι."
      }
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
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Lesvos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Λέσβο" },
      text: {
        en: "✕ **Petrified Forest disorganization** — The site is incredible but the visitor infrastructure is patchy. Some areas lack clear signage, the Sigri museum is small for the scale of the wonder, and guided tours are not always available. Book ahead in peak season and manage expectations about the 'museum experience' — the real magic is outside, walking among the fossilised trunks.\n\n✕ **Skala Eresou accessibility** — It's a stunning beach with a village feel, but it's remote and the road is not great. The beach has limited facilities and the tavernas close early. Don't expect Mykonos-level convenience — come prepared with water and snacks.\n\n✕ **Limited ferry connections** — Lesvos has fewer ferry routes than Mykonos or Santorini. From Piraeus, it's 8-12 hours by conventional ferry. Book well ahead in summer and consider flying from Athens if time is tight. Internal island buses exist but are infrequent.\n\n✕ **Molivos vs Mytilene confusion** — Mytilene is the capital (with the castle, university, and best food scene). Molivos is the tourist village with the harbour charm. They serve different purposes — don't assume one代替 the other. Most visitors should base in Mytilene for the full experience.\n\n✕ **Olive press visits as afterthoughts** — Lesvos has more olive trees than people and produces some of Greece's finest oil. Yet most visitors skip the olive press museums entirely. The Perry Museum in Agia Paraskevi and the press at Tzami are worth 2-3 hours of your day.\n\n💡 What nobody tells you: The real Lesvos is in the villages between Mytilene and Plomari, where the ouzo distilleries still operate with original equipment and the tavernas serve food you won't find anywhere else in Greece. Drive the mountain road from Mytilene to Agiassos, stopping at every village that has a church with an open door.",
        el: "✕ **Ανοργανωσία στο Απολιθωμένο Δάσος** — Ο χώρος είναι απίστευτος αλλά ο επισκεπτικός εξοπλισμός είναι κακοσύνταξτος. Κάποιες περιοχές δεν έχουν σαφή πινακίδια, το μουσείο της Σίγρης είναι μικρό για την κλίμακα του θαύματος, και τα τουρ συνοδείας δεν είναι πάντα διαθέσιμα. Κλείσε εκ των προτέρων την αιχμή και διαχείρισε τις προσδοκίες για τη 'μουσειακή εμπειρία' — η πραγματική μαγεία είναι έξω, να περπατάς ανάμεσα στα απολιθωμένα κομμάτια.\n\n✕ **Προσβασιμότητα στη Σκάλα Ερεσού** — Είναι μια εντυπωσιακή παραλία με χωρικό χαρακτήρα αλλά είναι απομακρυσμένη και ο δρόμος δεν είναι καλός. Η παραλία έχει περιορισμένες ανέσεις και οι ταβέρνες κλείνουν νωρίς. Μην περιμένεις ευκολία τύπου Μυκόνου — έλα προετοιμασμένος με νερό και σνακ.\n\n✕ **Περιορισμένες συνδέσεις ferry** — Η Λέσβος έχει λιγότερες διαδρομές ferry από Μύκονο ή Σαντορίνη. Από Πειραιά, είναι 8-12 ώρες με συμβατικό πλοίο. Κλείσε πολύ νωρίς το καλοκαίρι και σκέψου πτήση από Αθήνα αν ο χρόνος είναι στενός. Τα εσωτερικά λεωφορεία υπάρχουν αλλά είναι σπάνια.\n\n✕ **Σύγχυση Μόλυβος vs Μυτιλήνη** — Η Μυτιλήνη είναι η πρωτεύουσα (με το κάστρο, το πανεπιστήμιο και την καλύτερη σκηνή φαγητού). Ο Μόλυβος είναι το τουριστικό χωριό με τη γοητεία του λιμανιού. Εξυπηρετούν διαφορετικούς σκοπούς — μην υποθέσεις ότι το ένα αντικαθιστά το άλλο. Οι περισσότεροι επισκέπτες πρέπει να βασίστουν στη Μυτιλήνη για πλήρη εμπειρία.\n\n✕ **Επισκέψεις ελαιοτριβείων ως παράπλευρο** — Η Λέσβος έχει περισσότερες ελιές από ανθρώπους και παράγει από τα καλύτερα λάδια της Ελλάδας. Και όμως οι περισσότεροι επισκέπτες παραλείπουν εντελώς τα μουσεία ελαιοτριβείων. Το Μουσείο Πέρρης στην Αγία Παρασκευή και το τριβείο στο Τζαμί αξίζουν 2-3 ώρες της ημέρας σου.\n\n💡 Αυτό που δε σου λέει κανείς: Η πραγματική Λέσβος είναι στα χωριά ανάμεσα στη Μυτιλήνη και το Πλωμάρι, όπου τα αποστακτήρια ούζου λειτουργούν ακόμα με πρωτότυπο εξοπλισμό και οι ταβέρνες σερβίρουν φαγητό που δεν θα βρεις αλλού στην Ελλάδα. Οδήγησε τον ορεινό δρόμο από Μυτιλήνη προς Αγιάσο, σταματώντας σε κάθε χωριό που έχει εκκλησία με ανοιχτή πόρτα."
      }
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
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Athens", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Αθήνα" },
      text: {
        en: "✕ **Acropolis morning crowds** — By 10:00 the Parthenon path is a queue of selfie-sticks. Enter at 08:00 sharp when the gates open, or after 16:00 when the cruise groups leave. The morning light is also better for photos. Buy tickets online to skip the售票 line.\n\n✕ **Plaka tourist restaurants** — The tavernas on the main Plaka streets serve overpriced, mediocre food aimed at first-time visitors. Walk two streets back into Anafiotika or the Psyrri district for authentic food at local prices. The tiny tavernas hidden in the alleys are where Athenians actually eat.\n\n✕ **Monastiraki flea market scams** — The 'antique' shops sell mass-produced junk at tourist prices. Genuine vintage finds require patience and knowledge of what you're looking at. The real deals happen at the Sunday flea market, but even then, know your prices before you haggle.\n\n✕ **Sunset from Lycabettus over Philopappos** — Lycabettus is the famous sunset spot, but it means a steep hike or funicular ride followed by crowds on the summit. Philopappos Hill offers the same golden-hour view of the Acropolis with a fraction of the people and far better photo angles.\n\n✕ **Metro confusion** — The Athens metro is efficient but the airport line requires a special ticket (€9). Tourists buy regular €1.20 tickets and get fined. Check the ticket type before boarding. Also, the metro closes at midnight — plan your late-night transport in advance.\n\n💡 What nobody tells you: The best Athens experience is to walk from Thissio to Kerameikos at golden hour, stopping at every street food stand you pass. The Ancient Cemetery at Kerameikos is almost empty at closing time, and the surrounding neighborhood has Athens' best craft beer bars and most honest souvlaki. You'll see a city that guidebooks rarely describe.",
        el: "✕ **Οχλοποιία στην Ακρόπολη το πρωί** — Μέχρι τις 10:00 η μονοπάτι του Παρθενώνα είναι ουρά selfie-sticks. Εισέλθε ακριβώς στις 08:00 ανοίγοντας τις πύλες ή μετά τις 16:00 όταν φεύγουν τα cruise groups. Το πρωινό φως είναι επίσης καλύτερο για φωτογραφίες. Αγόρασε εισιτήρια online για να παραλείψεις την ουρά εισιτηρίων.\n\n✕ **Τουριστικές εστιατορίες στην Πλάκα** — Οι ταβέρνες στους κύριους δρόμους της Πλάκας σερβίρουν ακριβό, μέτριο φαγητό για πρώτη φορά ταξιδιώτες. Περπάτα δύο δρομάκια πίσω στο Αναφιώτικα ή τη συνοικία Ψυρρή για αυθεντικό φαγητό σε τοπικές τιμές. Οι κρυφές ταβέρνες στα σοκάκια είναι όπου τρώνε πραγματικά οι Αθηναίοι.\n\n✕ **Scams στην Αγορά Μοναστηρακίου** — Τα 'αντίκ' καταστήματα πουλάνε μαζικά φτηνά στρώματα σε τουριστικές τιμές. Πραγματικά vintage βρίσκονται με υπομονή και γνώση. Οι πραγματικές συμφωνίες γίνονται στην κυριακάτικη αγορά, αλλά και τότε, γνώριζε τις τιμές πριν διαπραγματευτείς.\n\n✕ **Ηλιοβασίλεμα στο Λυκαβηττό αντί στο Φιλοππάππου** — Ο Λυκαβηττός είναι ο διάσημος προορισμός για ηλιοβασίλεμα αλλά σημαίνει απότομη ανάβαση ή funicular ακολουθούμενο από πλήθος στην κορυφή. Ο Φιλοππάππου προσφέρει την ίδια χρυσή ώρα θέα στην Ακρόπολη με κλάσμα του κόσμου και πολύ καλύτερες γωνίες φωτογραφίας.\n\n✕ **Σύγχυση μετρό** — Το μετρό Αθηνών είναι αποτελεσματικό αλλά η γραμμή αεροδρομίου απαιτεί ειδικό εισιτήριο (9€). Οι τουρίστες αγοράζουν κανονικά εισιτήρια 1,20€ και πρόστιμο. Έλεγξε τον τύπο εισιτηρίου πριν επιβιβαστείς. Επίσης, το μετρό κλείνει τα μεσάνυχτα — σχεδίασε τη μεταφορά σου αργά το βράδυ εκ των προτέρων.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη εμπειρία στην Αθήνα είναι να περπατήσεις από Θησείο έως Κεραμεικό στη χρυσή ώρα, σταματώντας σε κάθε stand τροφίμων δρόμου που περνάς. Το Αρχαίο Νεκροταφείο στον Κεραμεικό είναι σχεδόν άδειο στο κλείσιμο, και η γειτονιά γύρω έχει τα καλύτερα craft beer bars και τη πιο ειλικρινή σουβλατζίδικα της Αθήνας. Θα δεις μια πόλη που τα οδηγόβιβλια σπάνια περιγράφουν."
      }
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
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Paros", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Πάρο" },
      text: {
        en: "✕ **Naoussa parking in August** — The village's narrow streets become gridlocked by mid-afternoon. Park at the entrance and walk in, or better yet, arrive before 10:00 or after 20:00. The harbour restaurants are packed by 13:00; the side streets have better food at half the price.\n\n✕ **Kolymbithras in peak season** — It is genuinely one of the finest beaches in the Cyclades, but in July-August the organised section is a wall of sunbeds and the soundtrack is commercial house music. Walk to the second cove (Kolymbithra B) or arrive before 09:00 for the version of the beach that justifies its reputation.\n\n✕ **Generic catamaran tours** — Paros is surrounded by stunning coastline but most catamaran tours follow the same formula: crowded boat, lukewarm lunch, two brief swimming stops, and a sunset return. The private sailing charters from Naoussa harbour are more expensive but deliver the Paros that the brochure promises. If you book a group tour, choose a small-operator morning departure over the sunset cruise.\n\n✕ **Skipping Lefkes** — Many visitors stay entirely in Naoussa or Parikia and never drive fifteen minutes inland to the marble-paved village of Lefkes, which is arguably the most beautiful settlement on the island. The Byzantine Trail connecting Lefkes to Prodomos is one of the finest short walks in the Cyclades.\n\n✕ **Treating Paros as a Mykonos alternative** — Paros has nightlife, beach clubs, and a cosmopolitan edge, but its core identity is different: a Cycladic island with genuine villages, outstanding food, and a pace that rewards curiosity over consumption. Visitors who come expecting Mykonos-level glamour are disappointed; those who come for what Paros actually is tend to return.\n\n💡 What nobody tells you: The best day on Paros is not a beach day — it is a village day. Drive from Lefkes to Marpissa to Prodromos to Alyki, stopping at each for coffee or lunch, and you will see an island that most visitors miss entirely. The south coast villages have the best food on the island and almost no foreign tourists.",
        el: "✕ **Πάρκινγκ στη Νάουσα τον Αύγουστο** — Τα στενά δρομάκια γεμίζουν μεσημέρι. Πάρκαρε στην είσοδο και μπες με τα πόδια, ή φτάσε πριν τις 10:00 ή μετά τις 20:00. Οι παραλιακές ταβέρνες γεμίζουν 13:00· τα πλατεάκια έχουν καλύτερο φαγητό στο μισό τιμή.\n\n✕ **Κολυμβήθρα στην αιχμή** — Είναι πραγματικά μία από τις καλύτερες παραλίες, αλλά τον Ιούλιο-Αύγουστο ο οργανωμένος χώρος είναι τείχος από σόλια και ο ήχος είναι εμπορικό house. Πήγαινε στο δεύτερο κόλπο ή φτάσε πριν τις 09:00.\n\n✕ **Γενικευμένα catamaran tours** — Η Πάρος έχει εντυπωσιακή ακτογραμμή αλλά τα περισσότερα catamaran τουρ υπάγονται στο ίδιο formula. Τα ιδιωτικά sailing charter από τη Νάουσα είναι πιο ακριβά αλλά παραδίνουν την πραγματική Πάρο.\n\n✕ **Να παραλείψεις τον Λεύκες** — Πολλοί επισκέπτες μένουν στη Νάουσα ή την Παροικιά και δεν οδηγούν 15 λεπτά μέσα στο νησί στο μαρμαροστρωτό χωριό Λεύκες. Το Βυζαντινό Μονοπάτι Λεύκες-Πρόδρομος είναι από τις καλύτερες βόλτες στις Κυκλάδες.\n\n✕ **Να θεωρήσεις την Πάρο ως εναλλακτική Μυκόνου** — Η Πάρος έχει νυχτερινή ζωή και beach clubs, αλλά η ταυτότητά της είναι διαφορετική: αυθεντικά χωριά, εξαιρετικό φαγητό και ρυθμός που ανταμείβει την περιέργεια.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη μέρα στην Πάρο δεν είναι παραλιακή — είναι μέρα χωριών. Οδήγησε από Λεύκες σε Μάρπησσα σε Πρόδρομο σε Αλυκή, σταματώντας σε κάθε για καφέ ή φαγητό, και θα δεις ένα νησί που οι περισσότεροι επισκέπτες χάνουν εντελώς."
      }
    }
  ],
  naxos: [
    {
      title: { en: "Why Visit Naxos", el: "Γιατί να επισκεφθείς τη Νάξο" },
      text: {
        en: "Naxos is a rare Greek island in that it does not rely on a single postcard image. It has no caldera, no iconic cliffs dropping into the sea, and no single beach that dominates the conversation. Instead, it offers something more valuable for a longer stay: variety, space, and a genuinely complete Cycladic experience. The island is large enough to accommodate many different landscapes — from long sandy beaches on the west coast to rugged mountain trails in the interior, from a lively harbour town to quiet stone villages that feel centuries away from the tourist trail.",
        el: "Η Νάξος είναι ένα σπάνιο ελληνικό νησί γιατί δεν βασίζεται σε μία και μόνο εικόνα. Δεν έχει καλντέρα, δεν έχει εμβληματικούς γκρεμούς που πέφτουν στη θάλασσα, ούτε μία παραλία που κυριαρχεί στη συζήτηση. Αντίθετα, προσφέρει κάτι πιο πολύτιμο για μεγαλύτερη διαμονή: ποικιλία, χώρο και μια πραγματικά ολοκληρωμένη κυκλαδίτικη εμπειρία. Το νησί είναι αρκετά μεγάλο για να φιλοξενεί πολλά διαφορετικά τοπία — από απέραντες αμμουδιές στη δυτική ακτή έως ορεινά μονοπάτια στην ενδοχώρα, από μια ζωντανή παραλιακή πόλη έως ήσυχα πέτρινα χωριά που νιώθεις σαν να βρίσκονται αιώνες μακριά από τον τουρισμό."
      },
      layout: "list",
      items: [
        {
          title: { en: "The most versatile island in the Cyclades", el: "Το πιο ευέλικτο νησί των Κυκλάδων" },
          text: { en: "Naxos offers beaches, mountains, villages, history, food, and nightlife — all on one island. You can swim in the morning, hike in the afternoon, and eat at a harbour taverna at night. Few Greek islands offer this range without feeling scattered.", el: "Η Νάξος προσφέρει παραλίες, βουνά, χωριά, ιστορία, φαγητό και νυχτερινή ζωή — όλα σε ένα νησί. Μπορείς να κολυμπήσεις το πρωί, να περπατήσεις το απόγευμα και να φας σε μια ταβέρνα στο λιμάνι το βράδυ. Λίγα νησιά προσφέρουν αυτή την ποικιλία χωρίς να νιώθεις διάσπαρτος." }
        },
        {
          title: { en: "Authentic Cycladic character", el: "Αυθεντικός κυκλαδίτικος χαρακτήρας" },
          text: { en: "Naxos has not been reshaped by mass tourism in the same way as Santorini or Mykonos. The Old Town with its Venetian Castle, the marble-paved lanes of Apeiranthos, and the traditional villages of the Tragea valley all retain a genuine character that many visitors are looking for.", el: "Η Νάξος δεν έχει αλλάξει από τον μαζικό τουρισμό με τον ίδιο τρόπο όπως η Σαντορίνη ή η Μύκονος. Η Παλιά Πόλη με το Ενετικό Κάστρο, τα μαρμαρόστρωτα σοκάκια του Απειράνθου και τα παραδοσιακά χωριά της κοιλάδας της Τραγαίας διατηρούν έναν γνήσιο χαρακτήρα που πολλοί ταξιδιώτες αναζητούν." }
        },
        {
          title: { en: "Excellent local food scene", el: "Εξαιρετική τοπική γαστρονομία" },
          text: { en: "Naxos is one of the best islands in Greece for food. The fertile soil produces outstanding local cheeses (graviera, arseniko, touloumotyri), the famous kitron liqueur, potatoes, olives, and high-quality meat. The tavernas in Naxos Town and the mountain villages serve honest, well-prepared dishes.", el: "Η Νάξος είναι από τα καλύτερα νησιά για φαγητό. Το εύφορο έδαφος παράγει εξαιρετικά τοπικά τυριά (γκραβιέρα, αρσενικό, τουλουμοτύρι), το περίφημο λικέρ κίτρο, πατάτες, ελιές και κρέας υψηλής ποιότητας. Οι ταβέρνες στη Χώρα και στα ορεινά χωριά σερβίρουν τίμια, καλομαγειρεμένα πιάτα." }
        },
        {
          title: { en: "Less crowded than its famous neighbours", el: "Λιγότερο πολυσύχναστη από τους διάσημους γείτονες" },
          text: { en: "Even in August, Naxos rarely feels as overwhelmed as Santorini or Mykonos. The island has room to breathe. Beaches are long enough to find your own spot, and the main town has a lively but manageable atmosphere.", el: "Ακόμα και τον Αύγουστο, η Νάξος σπάνια νιώθει τόσο γεμάτη όσο η Σαντορίνη ή η Μύκονος. Το νησί έχει χώρο να αναπνεύσει. Οι παραλίες είναι αρκετά μεγάλες για να βρεις το δικό σου σημείο και η Χώρα έχει μια ζωντανή αλλά διαχειρίσιμη ατμόσφαιρα." }
        }
      ]
    },
    {
      title: { en: "Best Areas to Stay in Naxos", el: "Οι καλύτερες περιοχές για διαμονή στη Νάξο" },
      text: {
        en: "Where you stay in Naxos depends on whether you want convenience, a beach base, or mountain village experience. Here are the main areas:",
        el: "Το πού θα μείνεις στη Νάξο εξαρτάται από το αν θες ευκολία, βάση παραλίας ή εμπειρία ορεινού χωριού. Οι κύριες περιοχές:"
      },
      layout: "grid",
      items: [
        {
          title: { en: "Naxos Town (Chora)", el: "Χώρα Νάξου" },
          text: { en: "The most convenient base. Naxos Town has the best dining, nightlife, shopping, and transport connections. The Old Town beneath the Castle is one of the most atmospheric neighborhoods in the Cyclades. It is a 10-15 minute drive from the best beaches.", el: "Η πιο βολική βάση. Η Χώρα έχει τα καλύτερα εστιατόρια, νυχτερινή ζωή, ψώνια και συγκοινωνίες. Η Παλιά Πόλη κάτω από το Κάστρο είναι από τις πιο ατμοσφαιρικές γειτονιές των Κυκλάδων. Απέχει 10-15 λεπτά με το αυτοκίνητο από τις καλύτερες παραλίες." }
        },
        {
          title: { en: "Agios Prokopios & Agia Anna", el: "Άγιος Προκόπιος & Αγία Άννα" },
          text: { en: "The most popular beach bases. Agios Prokopios has one of the best beaches in Greece — long, sandy, with clear water and good amenities. Agia Anna is the smaller, more relaxed neighbor. Both have tavernas, hotels, and a pleasant holiday atmosphere.", el: "Οι πιο δημοφιλείς βάσεις παραλίας. Ο Άγιος Προκόπιος έχει μία από τις καλύτερες παραλίες της Ελλάδας — μεγάλη, αμμώδης, με καθαρά νερά και καλές υποδομές. Η Αγία Άννα είναι η μικρότερη, πιο χαλαρή γειτόνισσα. Και οι δύο έχουν ταβέρνες, ξενοδοχεία και ευχάριστη ατμόσφαιρα διακοπών." }
        },
        {
          title: { en: "Plaka & Mikri Vigla", el: "Πλάκα & Μικρή Βίγλα" },
          text: { en: "For a quieter, more spacious beach stay. Plaka is a long, undeveloped stretch of sand that feels more natural. Mikri Vigla is famous for windsurfing and has a relaxed bohemian vibe. Both are excellent for travelers who want peace and open space.", el: "Για πιο ήσυχη και άνετη διαμονή στην παραλία. Η Πλάκα είναι μια μεγάλη, ανέγγιχτη αμμουδιά με φυσική ομορφιά. Η Μικρή Βίγλα είναι διάσημη για windsurfing και έχει χαλαρή, μποέμ ατμόσφαιρα. Ιδανικές για ταξιδιώτες που θέλουν ηρεμία και χώρο." }
        },
        {
          title: { en: "Mountain villages (Halki, Apeiranthos, Filoti)", el: "Ορεινά χωριά (Χαλκί, Απείρανθος, Φιλώτι)" },
          text: { en: "For a completely different Naxos experience. Staying inland gives you access to traditional village life, excellent local food, and a cooler summer climate. You will need a car, but the reward is a genuine taste of authentic Cycladic culture.", el: "Για μια εντελώς διαφορετική εμπειρία της Νάξου. Η διαμονή στην ενδοχώρα σου δίνει πρόσβαση στην παραδοσιακή ζωή του χωριού, εξαιρετικό τοπικό φαγητό και πιο δροσερό κλίμα το καλοκαίρι. Θα χρειαστείς αυτοκίνητο, αλλά η ανταμοιβή είναι μια γνήσια γεύση αυθεντικής κυκλαδίτικης κουλτούρας." }
        }
      ]
    },
    {
      title: { en: "Top Beaches in Naxos", el: "Οι κορυφαίες παραλίες της Νάξου" },
      text: {
        en: "Naxos has the best beaches of any Cycladic island — a bold claim, but one that most visitors agree with. The west coast is a nearly continuous stretch of sand running for more than 20 kilometres, with very different characters from north to south:",
        el: "Η Νάξος έχει τις καλύτερες παραλίες από όλες τις Κυκλάδες — μια τολμηρή δήλωση, αλλά οι περισσότεροι επισκέπτες συμφωνούν. Η δυτική ακτή είναι μια σχεδόν συνεχής αμμουδιά που εκτείνεται για πάνω από 20 χιλιόμετρα, με πολύ διαφορετικό χαρακτήρα από βορρά προς νότο."
      },
      layout: "grid",
      items: [
        {
          title: { en: "Agios Prokopios", el: "Άγιος Προκόπιος" },
          text: { en: "Widely considered one of the best beaches in Greece. Fine golden sand, crystal-clear water, and full amenities (sunbeds, tavernas, water sports). Can get busy in August but the beach is long enough to accommodate everyone.", el: "Θεωρείται μία από τις καλύτερες παραλίες στην Ελλάδα. Λεπτή χρυσή άμμος, κρυστάλλινα νερά και πλήρεις υποδομές (ξαπλώστρες, ταβέρνες, θαλάσσια σπορ). Μπορεί να έχει κόσμο τον Αύγουστο, αλλά η παραλία είναι αρκετά μεγάλη." }
        },
        {
          title: { en: "Plaka", el: "Πλάκα" },
          text: { en: "A long, unspoiled stretch of sand with a more natural feel. Less developed than Agios Prokopios, with scattered sunbeds and a few beach bars. Ideal for those who want space, long walks, and a quieter atmosphere.", el: "Μια μεγάλη, ανέγγιχτη αμμουδιά με πιο φυσική αίσθηση. Λιγότερο ανεπτυγμένη από τον Άγιο Προκόπιο, με διάσπαρτες ξαπλώστρες και λίγα beach bars. Ιδανική για όσους θέλουν χώρο, μεγάλες βόλτες και πιο ήσυχη ατμόσφαιρα." }
        },
        {
          title: { en: "Mikri Vigla", el: "Μικρή Βίγλα" },
          text: { en: "Famous for windsurfing and kitesurfing thanks to reliable winds. The beach is split into two coves separated by a small headland. A relaxed, bohemian atmosphere with two excellent beach bars.", el: "Διάσημη για windsurfing και kitesurfing χάρη στους σταθερούς ανέμους. Η παραλία χωρίζεται σε δύο όρμους που χωρίζονται από ένα μικρό ακρωτήρι. Χαλαρή, μποέμ ατμόσφαιρα με δύο εξαιρετικά beach bars." }
        },
        {
          title: { en: "Agia Anna", el: "Αγία Άννα" },
          text: { en: "A smaller, more sheltered beach adjacent to Agios Prokopios. Calmer waters, good for families, with a compact strip of tavernas and rooms. Easy access and a pleasant seaside village feel.", el: "Μια μικρότερη, πιο προστατευμένη παραλία δίπλα στον Άγιο Προκόπιο. Πιο ήρεμα νερά, καλή για οικογένειες, με μια συμπαγή σειρά από ταβέρνες και δωμάτια. Εύκολη πρόσβαση και ευχάριστη αίσθηση παραθαλάσσιου χωριού." }
        },
        {
          title: { en: "Aliko & Panormos", el: "Αλυκός & Πάνορμος" },
          text: { en: "Two quieter beaches on the southwest coast. Aliko is a small sandy cove surrounded by cedar trees. Panormos is a larger, more secluded bay with a few tavernas. Both are less crowded and offer a more relaxed experience.", el: "Δύο πιο ήσυχες παραλίες στη νοτιοδυτική ακτή. Ο Αλυκός είναι ένας μικρός αμμώδης όρμος περιτριγυρισμένος από αρμυρίκια. Ο Πάνορμος είναι ένας μεγαλύτερος, πιο απομονωμένος κόλπος με λίγες ταβέρνες. Και οι δύο έχουν λιγότερο κόσμο." }
        }
      ]
    },
    {
      title: { en: "Local Food & Drink in Naxos", el: "Τοπικό φαγητό και ποτό στη Νάξο" },
      text: {
        en: "Naxos is one of the best-eating islands in Greece. The fertile soil and strong agricultural tradition mean that many ingredients are produced locally, and the food culture is genuine rather than tourist-driven.",
        el: "Η Νάξος είναι από τα νησιά με το καλύτερο φαγητό στην Ελλάδα. Το εύφορο έδαφος και η ισχυρή αγροτική παράδοση σημαίνουν ότι πολλά υλικά παράγονται τοπικά, και η διατροφική κουλτούρα είναι γνήσια."
      },
      layout: "grid",
      items: [
        {
          title: { en: "Local cheeses", el: "Τοπικά τυριά" },
          text: { en: "Graviera Naxou is the most famous — a hard, sweet cheese aged for at least 3 months. Arseniko is a spicy aged cheese, touloumotyri is a soft fresh cheese. All are excellent and widely available.", el: "Η γραβιέρα Νάξου είναι η πιο διάσημη — ένα σκληρό, γλυκό τυρί ωριμασμένο για τουλάχιστον 3 μήνες. Το αρσενικό είναι ένα πικάντικο ώριμο τυρί, το τουλουμοτύρι ένα μαλακό φρέσκο τυρί. Όλα εξαιρετικά." }
        },
        {
          title: { en: "Kitron", el: "Κίτρο" },
          text: { en: "A unique local liqueur made from the leaves of the kitron citron tree, produced only on Naxos. Sweet, aromatic, and traditionally served as a digestif. Visit the Vallindras distillery in Halki for a tasting.", el: "Ένα μοναδικό τοπικό λικέρ από τα φύλλα της κιτριάς, που παράγεται μόνο στη Νάξο. Γλυκό, αρωματικό, σερβίρεται παραδοσιακά ως χωνευτικό. Επισκεφθείτε το αποστακτήριο Βαλχίνδρα στο Χαλκί για γευσιγνωσία." }
        },
        {
          title: { en: "Naxian potatoes & olives", el: "Πατάτες & ελιές Νάξου" },
          text: { en: "Naxos potatoes are considered some of the best in Greece, with a protected designation of origin. The island also produces excellent olives and olive oil, which feature prominently in local dishes.", el: "Οι πατάτες Νάξου θεωρούνται από τις καλύτερες στην Ελλάδα, με προστατευόμενη ονομασία προέλευσης. Το νησί παράγει επίσης εξαιρετικές ελιές και ελαιόλαδο." }
        },
        {
          title: { en: "Seafood & harbour tavernas", el: "Θαλασσινά & ταβέρνες στο λιμάνι" },
          text: { en: "The harbour front in Naxos Town is lined with excellent seafood tavernas. Look for grilled octopus, fried calamari, and fresh fish caught daily. Inland villages specialize in meat dishes like rosto (pork cooked in wine) and goat stews.", el: "Το παραλιακό μέτωπο της Χώρας είναι γεμάτο εξαιρετικές ταβέρνες με θαλασσινά. Αναζητήστε ψητό χταπόδι, τηγανητά καλαμαράκια και φρέσκο ψάρι. Στα ορεινά χωριά ειδικεύονται σε κρεατικά όπως ροστό (χοιρινό στο κρασί) και κατσικάκι." }
        }
      ]
    },
    {
      title: { en: "Practical Tips for Naxos", el: "Πρακτικές συμβουλές για τη Νάξο" },
      layout: "faq",
      items: [
        {
          title: { en: "Is Naxos worth visiting?", el: "Αξίζει να επισκεφθώ τη Νάξο;" },
          text: { en: "Absolutely. Naxos is one of the most complete islands in Greece and suits almost every type of traveler. It has beaches, history, food, and culture without the crowds and prices of Santorini or Mykonos.", el: "Απολύτως. Η Νάξος είναι ένα από τα πιο ολοκληρωμένα νησιά στην Ελλάδα και ταιριάζει σε σχεδόν κάθε τύπο ταξιδιώτη. Έχει παραλίες, ιστορία, φαγητό και κουλτούρα χωρίς τον κόσμο και τις τιμές της Σαντορίνης ή της Μυκόνου." }
        },
        {
          title: { en: "How many days do you need in Naxos?", el: "Πόσες μέρες χρειάζονται στη Νάξο;" },
          text: { en: "Ideally 4-7 days. A shorter stay still gives you a good experience, but the island rewards longer visits because there is so much variety — beaches, mountain villages, historical sites, and excellent food.", el: "Ιδανικά 4-7 μέρες. Μια μικρότερη διαμονή σου δίνει ήδη μια καλή εμπειρία, αλλά το νησί ανταμείβει τις μεγαλύτερες επισκέψεις γιατί έχει τόση ποικιλία." }
        },
        {
          title: { en: "Should I rent a car in Naxos?", el: "Αξίζει να νοικιάσω αυτοκίνητο στη Νάξο;" },
          text: { en: "Yes, strongly recommended. Naxos is large and the best beaches, villages, and archaeological sites are spread out. A car gives you the freedom to explore the mountain villages, drive to quieter beaches, and see the island at your own pace.", el: "Ναι, το συνιστώ ανεπιφύλακτα. Η Νάξος είναι μεγάλη και οι καλύτερες παραλίες, χωριά και αρχαιολογικοί χώροι είναι διάσπαρτοι. Ένα αυτοκίνητο σου δίνει την ελευθερία να εξερευνήσεις." }
        },
        {
          title: { en: "How do I get to Naxos?", el: "Πώς πάω στη Νάξο;" },
          text: { en: "By ferry from Piraeus (3-5 hours depending on type), or from other Cycladic islands. Naxos also has a small airport with domestic flights from Athens year-round, operated by Olympic Air and Sky Express.", el: "Με πλοίο από τον Πειραιά (3-5 ώρες ανάλογα με τον τύπο) ή από άλλα κυκλαδίτικα νησιά. Η Νάξος έχει επίσης μικρό αεροδρόμιο με πτήσεις από Αθήνα όλο το χρόνο." }
        },
        {
          title: { en: "When is the best time to visit?", el: "Ποια είναι η καλύτερη εποχή για επίσκεψη;" },
          text: { en: "June and September are ideal — warm sea, sunshine, and fewer crowds. July and August are busy but manageable (Naxos handles crowds better than most). May and October are quieter and more affordable, with pleasant weather.", el: "Ο Ιούνιος και ο Σεπτέμβριος είναι ιδανικοί — ζεστή θάλασσα, ηλιοφάνεια και λιγότερος κόσμος. Ο Ιούλιος και ο Αύγουστος έχουν κίνηση αλλά η Νάξος διαχειρίζεται καλύτερα τα πλήθη από άλλα νησιά." }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Naxos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Νάξο" },
      text: {
        en: "✕ **Portara sunset mob** — The iconic marble gate is a five-minute walk from town, but by 19:00 in summer a crowd packs the hill. Arrive an hour earlier for photos without people, or skip it entirely and watch the sunset from the old harbour breakwater instead.\n\n✕ **Naxos Town beaches** — The beaches immediately west of town (Agios Georgios, Agios Prokopios) are convenient but crowded and lined with sunbed operations. The real beaches start further south: Plaka, Mikri Vigla, and Alyko are worth the fifteen-minute drive.\n\n✕ **Assuming all restaurants near the harbour are good** — The waterfront tavernas in Naxos Town survive on tourist traffic and variable quality. Walk two streets back and the food improves dramatically while the prices drop.\n\n✕ **Skipping the mountain villages** — Most visitors stay on the coast and never see Halki, Filoti, or Apiranthos. These stone villages with their kitron distilleries, old bakeries, and marble-paved squares are the real Naxos.\n\n✕ **Not renting a car** — Naxos is the largest Cycladic island and public transport only covers the basics. Without a car you will miss the inland valleys, the east coast beaches, and the mountain monasteries that make this island special.\n\n💡 What nobody tells you: The best beach day on Naxos is at Alyko on the south coast — a wild, pine-backed peninsula with natural rock pools, zero development, and a ruined cedar forest. Bring water and food because there is nothing there, which is exactly the point.",
        el: "✕ **Ο όχλος στη δύση του Portara** — Η θρυλική πύλη είναι 5 λεπτά από τη Χώρα αλλά μέχρι τις 19:00 γεμίζει κόσμο. Φτάσε νωρίτερα ή παράτησέ το και κοίτα τη δύση από τον κρηπιδώμα του παλιού λιμανιού.\n\n✕ **Παραλίες στη Χώρα** — Οι παραλίες δυτικά της Χώρας είναι βολικές αλλά γεμάτες. Οι πραγματικές παραλίες ξεκινούν νοτιότερα: Πλάκα, Μικρή Βίγλα, Αλυκό.\n\n✕ **Ταβέρνες στο λιμάνι** — Οι παραλιακές ζουν από τους τουρίστες. 2 δρομάκια μέσα το φαγητό βελτιώνεται δραματικά.\n\n✕ **Να παραλείψεις τα ορεινά χωριά** — Χάλκι, Φιλώτι, Απείρανθος με τα κίτρον, τα αρχαία φούρνα και τα μαρμαρόστρωτα σοκάκια είναι η πραγματική Νάξος.\n\n✕ **Να μην νοικιάσεις αυτοκίνητο** — Η Νάξος είναι το μεγαλύτερο κυκλαδίτικο νησί και τα μέσα μεταφοράς δεν καλύπτουν τα βασικά.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη παραλιακή μέρα είναι στο Αλυκό — άγριο, πευκόσκεπαστο χερσόνησο με φυσικές πισίνες, μηδενική υποδομή και εγκαταλελειμμένο δάσος κέδρων."
      }
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
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Milos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Μήλο" },
      text: {
        en: "✕ **Sarakiniko at noon in July** — The lunar white rock landscape is Milos's most famous image, but at midday in peak season it is a wall of people and the rock becomes painfully hot underfoot. Arrive before 08:30 or after 17:00 when the light is also better for photos.\n\n✕ **Pollonia for the beach** — Pollonia is a pretty fishing village with a nice harbour, but its beach is short and mediocre. Kipos and Fyriplaka further south are significantly better and worth the drive.\n\n✕ **Kleftiko by large boat tour** — The sea caves at Kleftiko are extraordinary, but the big tour boats arrive mid-morning and leave you forty-five minutes in a crowd. The small-operator morning departures from Adamas are pricier but give you two hours of relative peace.\n\n✕ **Assuming Milos has no nightlife** — Milos is quieter than Mykonos or Ios, but the bars along the Adamas harbourfront and in Plaka get lively in August. The island is not a party destination, but it is not dead either — set expectations accordingly.\n\n✕ **Skipping the fishing villages** — Milos has over thirty small villages dotting its coastline, each with a different character. Most visitors see Sarakiniko, Kleftiko, and the main beaches and leave. Drive to Mandrakia, Firopotamos, or Zefyria for the real island.\n\n💡 What nobody tells you: Milos is a volcanic island and its geology is the real attraction. The beach at Firiplaka has multicoloured cliffs (yellow, red, white) that most people photograph but few actually study. Take fifteen minutes to look at the rock layers and you will understand why this island is unique.",
        el: "✕ **Σαρακίνικο στο μεσημέρι τον Ιούλιο** — Το φημισμένο λευκό τοπίο είναι γεμάτο κόσμο και η πέτρα γίνεται αφόρητη. Φτάσε πριν τις 08:30 ή μετά τις 17:00.\n\n✕ **Πολόνια για παραλία** — Το Πολόνια είναι όμορφο χωριό αλλά η παραλία του είναι μικρή και μέτρια. Κήπος και Φυρίπλακα νοτιότερα είναι πολύ καλύτερες.\n\n✕ **Kleftiko με μεγάλο σκάφος** — Τα σπήλια είναι εξαιρετικά αλλά τα μεγάλα σκάφη φτάνουν μεσημέρι και σε αφήνουν 45 λεπτά σε χρόνια. Επίλεξε μικρότερος πράκτορες.\n\n✕ **Να νομίσεις ότι η Μήλος δεν έχει νυχτερινή ζωή** — Είναι πιο ήσυχη από Μύκονο αλλά τα μπαράκια στο Αδάμας και στην Πλάκα γεμίζουν Αύγουστο.\n\n✕ **Να παραλείψεις τα ψαροχώρια** — Η Μήλος έχει 30+ χωριά, καθένα με διαφορετικό χαρακτήρα. Μαντράκια, Φυροπόταμος, Ζεφυρία.\n\n💡 Αυτό που δε σου λέει κανείς: Η Μήλος είναι ηφαιστειογενές νησί και η γεωλογία της είναι το πραγματικό αξιοθέατο. Στο Φυρίπλακα τα βράχια είναι πολύχρωμα (κίτρινο, κόκκινο, λευκό). Στάσου 15 λεπτά και κοίτα τα στρώματα."
      }
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
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Zakynthos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Ζάκυνθο" },
      text: {
        en: "✕ **Navagio by land in peak hours** — The Shipwreck Beach is iconic but the viewing platform is small and the midday tour-bus crowds make it unpleasant. The early morning approach by boat from Porto Vromi gives you the beach with fewer people and better light.\n\n✕ **Porto Limnionas in August** — This stunning cliff-swimming spot is a local secret that Instagram ruined. In peak season the small parking fills by 10:00 and the rocky platforms are packed. Visit in June or September for the version that made it famous.\n\n✕ **Zante Town as a base** — Zakynthos Town has some nice squares and museums but it is not where you want to spend your evenings. The real charm is in the villages: Volimes, Exochoria, or the harbour at Agios Nikolaos.\n\n✕ **Blue Caves rush tour** — The boat tours that combine the Blue Caves with Shipwreck in three hours give you fifteen minutes at each. The Blue Caves deserve a slow, separate visit — either by kayak from Porto Vromi or by small private boat.\n\n✕ **Skipping the south coast** — Most visitors concentrate on the north (Navagio, Blue Caves) and miss the south coast's quieter beauty: Keri cliffs, Limni Keriou, and the Marathonisi turtle island.\n\n💡 What nobody tells you: Zakynthos is a sea turtle nesting ground and the best way to see loggerheads is not at the tourist centres but by kayaking quietly along the beaches near Laganas at dawn. The volunteer stations at Gerakas will show you the right approach.",
        el: "✕ **Ναβάγιο στη ξηρά στην αιχμή** — Το Ναυάγιο είναι εμβληματικό αλλά η πλατφόρμα είναι μικρή και οι τουριστικές λεωφορειακές ομάδες στο μεσημέρι είναι δύσκολες. Πήγαινε νωρίς το πρωί με σκάφος από Πόρτο Βρομί.\n\n✕ **Porto Limnionas τον Αύγουστο** — Το κρεμαστό για κολύμπηση ήταν τοπικό μυστικό που το Instagram χάλασε. Τον Αύγουστο γεμίζει 10:00. Επισκέψου τον Ιούνιο ή Σεπτέμβριο.\n\n✕ **Ζάκυνθος Πόλη ως βάση** — Η Πόλη έχει πλατείες αλλά δεν εκεί θες τα βράδια. Χωριά: Βόλιμες, Εξοχώρια, Αγ. Νικόλαος.\n\n✕ **Blue Caves γρήγορο tour** — Τα τουρ που συνδυάζουν Blue Caves και Ναβάγιο σε 3 ώρες σε δίνουν 15 λεπτά σε κάθε ένα. Τα Blue Caves αξίζουν ξεχωριστή επίσκεψη.\n\n✕ **Να παραλείψεις το νότιο τμήμα** — Οι περισσότεροι μένουν βόρεια και χάνουν το νότιο: Κέρι, Λίμνι Κερίου, Μαραθωνίσι.\n\n💡 Αυτό που δε σου λέει κανείς: Η Ζάκυνθος είναι φωλιά χελωνών και ο καλύτερος τρόπος να τις δεις δεν είναι τα τουριστικά κέντρα αλλά καγιάκ στις παραλίες γύρω από το Λαγανάς στην αυγή."
      }
    }
  ],

  lefkada: [
    {
      title: { en: "Why visit Lefkada", el: "Γιατί να επισκεφθείς τη Λευκάδα" },
      layout: "numbered",
      items: [
        {
          title: { en: "The beaches of the western coast are genuinely world-class", el: "Οι παραλίες της δυτικής ακτής είναι παγκοσμίου κλάσης" },
          text: {
            en: "Porto Katsiki and Egremni are not overhyped. The combination of near-white chalk cliffs, crystal-clear turquoise water, and the sheer scale of the landscape creates a visual experience that is difficult to find anywhere else in Greece. Both beaches require descending steep steps or a boat, which filters the crowd somewhat — but the effort is more than justified.",
            el: "Το Πόρτο Κατσίκι και οι Εγκρεμνοί δεν είναι υπερβολικά διαφημισμένα. Ο συνδυασμός λευκών ασβεστολιθικών γκρεμών, κρυστάλλινου τιρκουάζ νερού και της κλίμακας του τοπίου δημιουργεί μια οπτική εμπειρία που δύσκολα βρίσκεις αλλού στην Ελλάδα."
          }
        },
        {
          title: { en: "No ferry needed", el: "Δεν χρειάζεσαι πλοίο" },
          text: {
            en: "Lefkada is the only Ionian island reachable by car. A short causeway and floating drawbridge connect it to the mainland. This removes ferry queues, booking pressure, and schedule constraints — a significant advantage for family trips or road trips around Greece.",
            el: "Η Λευκάδα είναι το μόνο ιόνιο νησί προσβάσιμο με αυτοκίνητο. Μια σύντομη λωρίδα γης και μια πλωτή γέφυρα τη συνδέουν με την ηπειρωτική Ελλάδα, εξαλείφοντας τις ουρές στα πλοία και τους περιορισμούς δρομολογίων."
          }
        },
        {
          title: { en: "Watersports capital of the Ionian", el: "Πρωτεύουσα θαλάσσιων σπορ του Ιονίου" },
          text: {
            el: "Ο κόλπος της Βασιλικής στα νότια συγκαταλέγεται σταθερά στους κορυφαίους προορισμούς windsurfing της Ευρώπης. Το τοπικό μοτίβο ανέμου — πρωινή ηρεμία ακολουθούμενη από ένα ισχυρό απογευματινό αεράκι — δημιουργεί σχεδόν ιδανικές συνθήκες.",
            en: "The Vassiliki Bay in the south is consistently ranked among Europe's top windsurfing destinations. The local wind pattern — a morning calm followed by a strong afternoon thermal breeze called 'Eric' — creates near-perfect conditions for windsurfers and kitesurfers of all levels."
          }
        },
        {
          title: { en: "The island has a real interior", el: "Το νησί έχει πραγματικό εσωτερικό" },
          text: {
            en: "The central mountain villages — Karya, Englouvi, Kalamitsi — offer a completely different Lefkada: cool air, stone-paved alleys, local embroidery traditions, and tavernas serving slow-cooked goat with homemade wine. The highest road passes through one of Greece's highest-altitude lentil-growing regions.",
            el: "Τα ορεινά χωριά — Καρυά, Εγκλουβή, Καλαμίτσι — προσφέρουν μια εντελώς διαφορετική Λευκάδα: δροσερό αέρα, πλακόστρωτα σοκάκια, παραδόσεις κεντήματος και ταβέρνες με αργομαγειρεμένο κατσίκι και σπιτικό κρασί."
          }
        }
      ]
    },
    {
      title: { en: "Best time to visit", el: "Καλύτερη εποχή για να πας" },
      layout: "list",
      alert: {
        en: "Secret: If you plan to hike to Englouvi or explore the mountain villages, May is the perfect month — wildflowers are in full bloom and the air is fresh without the summer heat.",
        el: "Μυστικό: Αν σχεδιάζετε πεζοπορία στην Εγκλουβή ή εξερεύνηση των ορεινών χωριών, ο Μάιος είναι ο ιδανικός μήνας — τα αγριολούλουδα ανθίζουν και ο αέρας είναι δροσερός."
      },
      items: [
        {
          title: { en: "May – June", el: "Μάιος – Ιούνιος" },
          text: {
            en: "The ideal window: mild temperatures (22–27°C), a sea warm enough for comfortable swimming, very few crowds on the beaches, and open restaurants without waiting. Hiking in the interior is at its best.",
            el: "Το ιδανικό παράθυρο: ήπιες θερμοκρασίες, θάλασσα αρκετά ζεστή για μπάνιο, λίγα πλήθη και ανοιχτές ταβέρνες χωρίς αναμονή."
          }
        },
        {
          title: { en: "July – August", el: "Ιούλιος – Αύγουστος" },
          text: {
            en: "Peak season. The island is busy, Porto Katsiki fills up early, and accommodation prices reach their highest. If you visit in August, arrive at the western beaches before 10:00 AM.",
            el: "Περίοδος αιχμής. Το νησί είναι γεμάτο, το Πόρτο Κατσίκι γεμίζει νωρίς. Αν επισκεφθείτε τον Αύγουστο, φτάστε στις δυτικές παραλίες πριν τις 10:00."
          }
        },
        {
          title: { en: "September", el: "Σεπτέμβριος" },
          text: {
            en: "Many experienced travelers consider September the ideal Lefkada month. The crowds thin, the sea is at its warmest (24–25°C), accommodation rates drop, and the late afternoon light on the western cliffs is extraordinary.",
            el: "Πολλοί ταξιδιώτες θεωρούν τον Σεπτέμβριο τον ιδανικό μήνα. Τα πλήθη αραιώνουν, η θάλασσα είναι ζεστή και οι τιμές πέφτουν."
          }
        },
        {
          title: { en: "April & October", el: "Απρίλιος & Οκτώβριος" },
          text: {
            en: "Excellent for nature and villages, quieter roads, and dramatically reduced prices. Swimming is possible depending on the weather. Many beach tavernas and tourist services are closed.",
            el: "Εξαιρετικά για φύση και χωριά, πιο ήσυχοι δρόμοι και πολύ μειωμένες τιμές. Το μπάνιο είναι εφικτό ανάλογα με τον καιρό."
          }
        }
      ]
    },
    {
      title: { en: "How to get to Lefkada", el: "Πώς φτάνεις στη Λευκάδα" },
      layout: "grid",
      items: [
        {
          title: { en: "By road (from Athens)", el: "Οδικώς (από Αθήνα)" },
          text: {
            en: "The most common route is Athens → Corinth → Patras → Antirrio → Igoumenitsa direction, turning south at Vonitsa. Total driving time is approximately 4.5–5 hours. The road across the causeway into Lefkada Town is straightforward and well-signposted.",
            el: "Η πιο συνηθισμένη διαδρομή είναι Αθήνα → Κόρινθος → Πάτρα → Αντίρριο, με στροφή νότια στη Βόνιτσα. Η διαδρομή διαρκεί περίπου 4.5–5 ώρες."
          }
        },
        {
          title: { en: "By air (Preveza airport)", el: "Αεροπορικώς (αεροδρόμιο Πρέβεζας)" },
          text: {
            en: "Aktion National Airport (PVK) in Preveza is approximately 20–25 km from Lefkada Town. The airport serves domestic flights from Athens and international charter flights during summer. A taxi or rental car is the most practical option.",
            el: "Το αεροδρόμιο Ακτίου (PVK) στην Πρέβεζα απέχει περίπου 20–25 χλμ από τη Λευκάδα. Εξυπηρετεί πτήσεις εσωτερικού και διεθνείς ναυλωμένες πτήσεις."
          }
        },
        {
          title: { en: "Getting around", el: "Μετακινήσεις στο νησί" },
          text: {
            en: "A car is essential to experience Lefkada fully. The western beaches require a mountain road drive, the villages are scattered, and public transport is very limited outside Lefkada Town. Rent a car at the airport or in Preveza.",
            el: "Το αυτοκίνητο είναι απαραίτητο για να εξερευνήσετε πλήρως τη Λευκάδα. Τα μέσα μεταφοράς είναι πολύ περιορισμένα εκτός της πόλης."
          }
        }
      ]
    },
    {
      title: { en: "Top attractions & experiences", el: "Κορυφαία αξιοθέατα & εμπειρίες" },
      layout: "numbered",
      items: [
        {
          title: { en: "Porto Katsiki", el: "Πόρτο Κατσίκι" },
          text: {
            en: "The most photographed beach in Lefkada. A steep descent of approximately 100+ steps leads down to a pebble-and-sand beach enclosed by towering white chalk cliffs. The water is an intense turquoise. Access is also possible by boat from Nydri or Vassiliki — the sea view of the cliffs from a boat is a completely different perspective.",
            el: "Η πιο φωτογραφημένη παραλία της Λευκάδας. Μια απότομη κατάβαση περίπου 100+ σκαλοπατιών οδηγεί σε μια παραλία με βότσαλο και άμμο, πλαισιωμένη από επιβλητικούς λευκούς γκρεμούς."
          }
        },
        {
          title: { en: "Egremni Beach", el: "Παραλία Εγκρεμνοί" },
          text: {
            en: "A few kilometers north of Porto Katsiki, Egremni is longer, wilder, and still feels remote. A descent of around 350 steps leads to the beach. The cliff colours shift between white, grey, and pale orange depending on the light. Check conditions locally before descending as the area was affected by a 2015 earthquake.",
            el: "Λίγα χιλιόμετρα βόρεια του Πόρτο Κατσίκι, οι Εγκρεμνοί είναι μεγαλύτερη, πιο άγρια και ακόμα απομακρυσμένη. Η κατάβαση 350 σκαλοπατιών οδηγεί σε μια παραλία που παραμένει ανέγγιχτη."
          }
        },
        {
          title: { en: "Kathisma Beach", el: "Παραλία Καθίσμα" },
          text: {
            en: "The most family-friendly of Lefkada's famous beaches, on the northwest coast with a paved road. Long stretch of soft sand with organised facilities, sunbeds, beach bars, and shallow entry. Sunsets at Kathisma are among the best on the island.",
            el: "Η πιο οικογενειακή από τις διάσημες παραλίες της Λευκάδας. Μακριά αμμουδιά με οργανωμένες εγκαταστάσεις, ξαπλώστρες και ρηχή είσοδο. Τα ηλιοβασιλέματα στο Καθίσμα είναι από τα καλύτερα."
          }
        },
        {
          title: { en: "Vassiliki & windsurfing", el: "Βασιλική & windsurfing" },
          text: {
            en: "The bay of Vassiliki is a world-renowned windsurfing destination. The local thermal wind 'Eric' arrives reliably in the afternoon, creating ideal conditions. Numerous schools offer courses from beginner to advanced. Non-windsurfers will find calm clear water and excellent fish tavernas.",
            el: "Ο κόλπος της Βασιλικής είναι παγκοσμίου φήμης προορισμός windsurfing. Πολλές σχολές προσφέρουν μαθήματα. Ακόμα και μη windsurfers θα βρουν ήρεμα νερά και εξαιρετικές ψαροταβέρνες."
          }
        },
        {
          title: { en: "Nydri & the waterfalls", el: "Νυδρί & οι καταρράκτες" },
          text: {
            en: "Nydri on the east coast is the island's main tourist hub and departure point for boat excursions to the surrounding islets. About 3 km inland are the Nydri Waterfalls — freshwater cascades accessible by a short walk through a gorge. Best in spring and early summer when water levels are high.",
            el: "Το Νυδρί στην ανατολική ακτή είναι το κύριο τουριστικό κέντρο. Περίπου 3 χλμ στο εσωτερικό βρίσκονται οι καταρράκτες του Νυδριού, προσβάσιμοι με μια σύντομη πεζοπορία."
          }
        },
        {
          title: { en: "Karya & the mountain villages", el: "Καρυά & τα ορεινά χωριά" },
          text: {
            en: "Karya is the largest mountain village and the cultural heart of the interior. Famous for Lefkadian embroidery and one of the most atmospheric village squares on the island. Nearby Englouvi, at 800m elevation, is the highest village and home to an annual lentil festival in August.",
            el: "Η Καρυά είναι το μεγαλύτερο ορεινό χωριό. Φημίζεται για το Λευκαδίτικο κέντημα. Η γειτονική Εγκλουβή, στα 800μ, είναι το ψηλότερο χωριό με ετήσιο φεστιβάλ φακής τον Αύγουστο."
          }
        }
      ]
    },
    {
      title: { en: "Top beaches", el: "Κορυφαίες παραλίες" },
      layout: "list",
      alert: {
        en: "Secret: The western beaches involve significant stair descents. Wear appropriate footwear, carry water, and consider the return climb before you descend — especially with children or in peak midday heat.",
        el: "Μυστικό: Οι δυτικές παραλίες έχουν σημαντική κατάβαση σκαλοπατιών. Φορέστε κατάλληλα παπούτσια, πάρτε νερό και υπολογίστε την επιστροφή πριν κατεβείτε."
      },
      items: [
        {
          title: { en: "Porto Katsiki", el: "Πόρτο Κατσίκι" },
          text: {
            en: "For the iconic cliff-and-turquoise-water combination. Arrive early (before 10:00 in July–August) or take a boat from Nydri or Vassiliki to avoid the crowd at the top of the stairs.",
            el: "Για τον εμβληματικό συνδυασμό γκρεμών και τιρκουάζ νερού. Φτάστε νωρίς ή πάρτε βάρκα από Νυδρί ή Βασιλική."
          }
        },
        {
          title: { en: "Egremni", el: "Εγκρεμνοί" },
          text: {
            en: "For a wilder, longer alternative to Porto Katsiki. The staircase descent is longer (350 steps) but the reward is a beach that still feels genuinely remote and undisturbed.",
            el: "Για μια πιο άγρια εναλλακτική. Η σκάλα είναι μεγαλύτερη (350 σκαλοπάτια) αλλά η ανταμοιβή είναι μια παραλία που νιώθεις πραγματικά απομακρυσμένη."
          }
        },
        {
          title: { en: "Kathisma", el: "Καθίσμα" },
          text: {
            en: "For families, sunsets, and a long stretch of soft sand with full facilities. Walk south past the organized section for progressively quieter conditions.",
            el: "Για οικογένειες, ηλιοβασιλέματα και μακριά αμμουδιά με οργανωμένες υποδομές. Περπατήστε νότια για πιο ήσυχα σημεία."
          }
        },
        {
          title: { en: "Mylos Beach", el: "Παραλία Μύλος" },
          text: {
            en: "A small pebble cove near Agios Nikitas on the northwest coast, accessible on foot. One of the most picturesque and low-key spots on the island.",
            el: "Μικρός βοτσαλωτός όρμος κοντά στον Άγιο Νικήτα. Από τα πιο γραφικά και ήσυχα σημεία του νησιού."
          }
        },
        {
          title: { en: "Pefkoulia", el: "Πευκούλια" },
          text: {
            en: "North of Kathisma, a quieter sandy beach with a dramatic cliff backdrop and largely local crowd. Excellent for late afternoon swimming when the light turns golden.",
            el: "Βόρεια του Καθίσματος, πιο ήσυχη αμμουδιά με εντυπωσιακό γκρεμό. Ιδανική για απογευματινό μπάνιο."
          }
        }
      ]
    },
    {
      title: { en: "Local food & drink", el: "Τοπικό φαγητό & ποτό" },
      layout: "list",
      alert: {
        en: "Secret: The smaller the taverna and the further from the main tourist strip, the more genuine the experience. Ask for whatever came in that morning rather than ordering from a fixed menu.",
        el: "Μυστικό: Όσο πιο μικρή η ταβέρνα και μακριά από τον τουριστικό δρόμο, τόσο πιο αυθεντική η εμπειρία. Ρωτήστε τι έπιασαν το πρωί."
      },
      items: [
        {
          title: { en: "Lefkadian sofrito", el: "Λευκαδίτικο σοφρίτο" },
          text: {
            en: "Thin veal slices slow-cooked in white wine, garlic, and vinegar sauce. Rich, fragrant, and best eaten with thick bread. Found in traditional tavernas throughout the island.",
            el: "Λεπτές φέτες μοσχαριού αργομαγειρεμένες σε λευκό κρασί, σκόρδο και ξύδι. Πλούσιο και αρωματικό."
          }
        },
        {
          title: { en: "Kreatopita (meat pie)", el: "Κρεατόπιτα" },
          text: {
            en: "A hearty baked pie filled with minced meat, rice, and local herbs. Found in bakeries and traditional kafeneions, particularly in the mountain villages. The version in Karya is considered among the best.",
            el: "Πλούσια πίτα φούρνου με κιμά, ρύζι και μυρωδικά. Η εκδοχή της Καρυάς θεωρείται από τις καλύτερες."
          }
        },
        {
          title: { en: "Englouvi lentils", el: "Φακές Εγκλουβής" },
          text: {
            en: "The lentils grown in the high-altitude plain of Englouvi are among the finest in Greece — small, firm, and intensely flavoured. They appear in soups, salads, and as a side dish. The August festival celebrates them.",
            el: "Οι φακές που καλλιεργούνται στο υψίπεδο της Εγκλουβής είναι από τις καλύτερες στην Ελλάδα — μικρές, σφιχτές και γεμάτες γεύση."
          }
        },
        {
          title: { en: "Fresh fish", el: "Φρέσκο ψάρι" },
          text: {
            en: "Both Nydri and Vassiliki have fish tavernas where the catch of the day is displayed. The smaller tavernas away from the main strip offer the most genuine experience.",
            el: "Τόσο το Νυδρί όσο και η Βασιλική έχουν ψαροταβέρνες με φρέσκο ψάρι."
          }
        }
      ]
    },
    {
      title: { en: "Practical tips", el: "Πρακτικές συμβουλές" },
      layout: "list",
      items: [
        {
          title: { en: "Plan your western beach days around timing", el: "Προγραμματίστε τις μέρες σας στις δυτικές παραλίες" },
          text: {
            en: "Porto Katsiki and Egremni are most manageable before 10:00 AM or after 16:00. Midday combines maximum heat, maximum crowds, and the hardest stair return climb.",
            el: "Πόρτο Κατσίκι και Εγκρεμνοί: καλύτερα πριν τις 10:00 ή μετά τις 16:00. Το μεσημέρι συνδυάζει ζέστη, πλήθη και δύσκολη ανάβαση."
          }
        },
        {
          title: { en: "Book accommodation early for August", el: "Κλείστε διαμονή νωρίς για Αύγουστο" },
          text: {
            en: "Lefkada's accessibility by road makes it extremely popular with Greek and Italian families during the first two weeks of August. Good accommodation fills up months in advance.",
            el: "Η προσβασιμότητα της Λευκάδας την κάνει εξαιρετικά δημοφιλή. Τα καλά καταλύματα κλείνουν μήνες πριν."
          }
        },
        {
          title: { en: "The mountain roads require patience", el: "Τα ορεινά χωριά απαιτούν υπομονή" },
          text: {
            en: "The road to Porto Katsiki from Lefkada Town takes approximately 45–55 minutes and involves narrow sections with oncoming traffic. Do not underestimate the driving time.",
            el: "Ο δρόμος προς Πόρτο Κατσίκι από τη Λευκάδα διαρκεί περίπου 45–55 λεπτά. Μην υποτιμάτε τον χρόνο οδήγησης."
          }
        },
        {
          title: { en: "Agios Nikitas vehicle access", el: "Πρόσβαση οχημάτων στον Άγιο Νικήτα" },
          text: {
            en: "The road into the village is closed to general traffic during high season. Park outside and walk in (10–15 minutes). This preserves the village character and is part of its appeal.",
            el: "Ο δρόμος προς το χωριό κλείνει για την κυκλοφορία το καλοκαίρι. Παρκάρετε έξω και περπατήστε."
          }
        }
      ]
    },
    {
      title: { en: "What to skip — honest advice", el: "Τι να αποφύγεις — ειλικρινής συμβουλή" },
      layout: "list",
      alert: {
        en: "What nobody tells you: Lefkada's west-coast cliff beaches are genuinely exposed to afternoon wind. The same thermal breeze that makes Vassiliki world-class for windsurfing also whips up wave action on Porto Katsiki and Egremni from early afternoon onwards. The morning window is not just about avoiding crowds — it is the only time the sea is genuinely still.",
        el: "Αυτό που δε σου λέει κανείς: Οι δυτικές παραλίες εκτίθενται στον απογευματινό άνεμο. Το πρωί δεν είναι μόνο για να αποφύγεις τα πλήθη — είναι η μόνη ώρα που η θάλασσα είναι πραγματικά ήρεμη."
      },
      items: [
        {
          title: { en: "Driving to Porto Katsiki mid-day in August", el: "Οδήγηση στο Πόρτο Κατσίκι μεσημέρι Αυγούστου" },
          text: {
            en: "The parking area fills completely, leaving cars lined along the roadside for 1–2 km. The beach below is at its most crowded. Choose a morning visit or come by boat.",
            el: "Ο χώρος στάθμευσης γεμίζει και τα αυτοκίνητα παρατάσσονται για 1-2 χλμ. Επιλέξτε πρωινή επίσκεψη ή ελάτε με βάρκα."
          }
        },
        {
          title: { en: "Expecting Nydri to be authentic", el: "Να περιμένετε το Νυδρί αυθεντικό" },
          text: {
            en: "Nydri is the island's busiest tourist strip — restaurants, souvenir shops, and boat agencies lined up for 500 metres. Use it as a functional base or departure point, not as a gastronomic destination. Eat in Lefkada Town or the villages instead.",
            el: "Το Νυδρί είναι η πιο τουριστική ζώνη. Χρησιμοποιήστε το ως βάση ή αφετηρία για εκδρομές, όχι ως γαστρονομικό προορισμό."
          }
        },
        {
          title: { en: "Doing Porto Katsiki and Egremni in one morning", el: "Να κάνετε Πόρτο Κατσίκι και Εγκρεμνούς σε ένα πρωινό" },
          text: {
            en: "Both involve significant descents and climbs. Doing both in one session in summer heat is exhausting. Dedicate a full morning to one and visit the other on a separate day.",
            el: "Και οι δύο απαιτούν σημαντική κατάβαση και ανάβαση. Αφιερώστε ένα πρωινό στον καθένα."
          }
        },
        {
          title: { en: "Ignoring Vassiliki if not a windsurfer", el: "Να αγνοήσετε τη Βασιλική αν δεν κάνετε windsurf" },
          text: {
            en: "Non-windsurfers often skip Vassiliki, but the bay has some of the calmest water on the south coast, excellent fish tavernas, and a relaxed atmosphere that contrasts well with the busier east coast.",
            el: "Πολλοί παραλείπουν τη Βασιλική, αλλά έχει ήσυχα νερά, εξαιρετικές ψαροταβέρνες και χαλαρή ατμόσφαιρα."
          }
        }
      ]
    },
    {
      title: { en: "FAQ — Lefkada Essentials", el: "Συχνές Ερωτήσεις" },
      layout: "faq",
      items: [
        {
          title: { en: "How many days do I need in Lefkada?", el: "Πόσες μέρες χρειάζομαι στη Λευκάδα;" },
          text: {
            en: "Five to seven days is ideal for a complete experience. Three to four days is enough for a highlight-focused trip if combining with other stops.",
            el: "Πέντε με επτά μέρες είναι ιδανικά. Τρεις με τέσσερις μέρες αρκούν για μια γρήγορη επίσκεψη."
          }
        },
        {
          title: { en: "Do I need a car in Lefkada?", el: "Χρειάζομαι αυτοκίνητο στη Λευκάδα;" },
          text: {
            en: "Yes, practically speaking. The western beaches, mountain villages, and southern bays are not accessible without a car or organised tour.",
            el: "Ναι. Οι δυτικές παραλίες, τα ορεινά χωριά και οι νότιοι όρμοι δεν είναι προσβάσιμοι χωρίς αυτοκίνητο."
          }
        },
        {
          title: { en: "Is Lefkada suitable for families?", el: "Είναι κατάλληλη η Λευκάδα για οικογένειες;" },
          text: {
            en: "Very much so. Kathisma and Vassiliki Bay offer calm, shallow conditions. Boat trips to the islets are enjoyable for all ages. The western cliff beaches involve steep stairs and are better for older children.",
            el: "Απολύτως. Το Καθίσμα και η Βασιλική προσφέρουν ήρεμα, ρηχά νερά. Οι δυτικές παραλίες έχουν απότομες σκάλες."
          }
        },
        {
          title: { en: "When is the best time to visit Porto Katsiki?", el: "Πότε είναι η καλύτερη ώρα για Πόρτο Κατσίκι;" },
          text: {
            en: "Morning (before 10:00) for calm water, manageable crowds, and comfortable temperatures. September for warm sea, fewer people, and golden afternoon light on the cliffs.",
            el: "Πρωί (πριν τις 10:00) για ήρεμα νερά. Σεπτέμβριος για ζεστή θάλασσα και λιγότερο κόσμο."
          }
        },
        {
          title: { en: "Is Lefkada expensive?", el: "Είναι ακριβή η Λευκάδα;" },
          text: {
            en: "Mid-range. Generally less expensive than Mykonos or Santorini, comparable to Corfu or Kefalonia. The east coast (Nydri) tends to be more expensive. Mountain villages offer better value.",
            el: "Μέσης κατηγορίας. Φθηνότερη από Μύκονο ή Σαντορίνη. Η ανατολική ακτή είναι πιο ακριβή, τα ορεινά χωριά πιο οικονομικά."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Lefkada", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Λευκάδα" },
      text: {
        en: "✕ **Porto Katsiki in August** — This world-famous beach is spectacular but in peak season it is overwhelmed with tour buses and sunbeds. Arrive before 09:00 or skip it for the quieter Mikros Gialos or the hidden beach of Agios Nikitas.\n\n✕ **Nydri as a base** — Nydri is busy, commercial, and loud. Vassiliki or the west coast villages (Agios Nikitas, Lakka) have the character and the calm that visitors are actually looking for.\n\n✕ **Only the west coast** — Lefkada's east coast is calmer, greener, and has excellent beaches (Milos, Agiofili). The drive along the east coast through olive groves is beautiful.\n\n✕ **Lefkada Town without context** — The main town has an interesting old quarter but most visitors drive straight through on their way to the beaches. Spend an evening walking the canal-side streets when the town is alive.\n\n✕ **Ignoring the southern villages** — Sivota, Frikous, and the small harbours of the south have some of the best tavernas on the island and a pace that the north coast beaches lack.\n\n💡 What nobody tells you: Lefkada is connected to the mainland by a floating bridge, making it the only Greek island you can drive to without a ferry. This means most tourists arrive by car and leave the best beaches to those who walk. The ten-minute path from Agios Nikitas to Milos beach is the most rewarding walk on the island.",
        el: "✕ **Πόρτο Κατσίκι τον Αύγουστο** — Εμβληματική αλλά γεμάτη. Πήγαινε πριν τις 09:00 ή επίλεξε Μικρό Γιαλό ή Αγ. Νικήτα.\n\n✕ **Νυδρί ως βάση** — Εμπορικό, δυνατό. Βασιλική ή δυτική ακτή.\n\n✕ **Μόνο δυτική ακτή** — Ανατολική πιο ήσυχη: Μήλος, Αγιοφύλι.\n\n✕ **Λευκάδα Πόλη χωρίς context** — Παλιά πόλη, βράδυ ζωντανή.\n\n✕ **Να αγνοήσεις τα νότια χωριά** — Σύβοτα, Φρίκους — καλύτερες ταβέρνες.\n\n💡 Αυτό που δε σου λέει κανείς: Η Λευκάδα είναι το μόνο νησί που μπορείς να φτάσεις με αυτοκίνητο χωρίς ferry. Το μονοπάτι Αγ. Νικήτα-Μήλος (10 λεπτά) είναι η πιο ανταμειωμένη βόλτα."
      }
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
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Chania", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στα Χανιά" },
      text: {
        en: "✕ **Chania Old Town harbour restaurants** — The waterfront tavernas have the view but the worst food-to-price ratio in Crete. Walk two streets back into the Splantzia quarter for honest Cretan cooking at half the price.\n\n✕ **Balos Lagoon by car in August** — The drive to Balos is unpaved, steep, and stressful. The dirt road queues in summer are brutal. Take the daily ferry from Kissamos harbour instead — cheaper, calmer, and you arrive without the parking battle.\n\n✕ **Elafonisi pink sand hype** — The beach is genuinely beautiful, but the sand is only pink near the waterline and the 'Caribbean' comparisons are oversold. It is packed from 10:00 in July-August. Go early or visit the less-known Falasarna for a comparable experience.\n\n✕ **Spending all your time in the Old Town** — Chania's Venetian harbour is gorgeous but it is a tourist bubble. The actual city — the municipal market, the Splantzia quarter, the backstreets of Kastelli — is more interesting and more alive.\n\n✕ **Skipping the White Mountains** — The Lefka Ori behind Chania are accessible in day hikes (Samaria除外) and offer landscapes that most Crete visitors never see. The Omalos plateau and the Imbros Gorge are both within an hour's drive.\n\n💡 What nobody tells you: The best taverna experience near Chania is not in town at all — it is at To Maridaki, a tiny fish taverna on the road to Balos where locals eat grilled octopus with their feet in the sand. No signage, no website, no reservation needed.",
        el: "✕ **Ταβέρνες στο λιμάνι της Παλιάς Πόλης** — Έχουν τη θέα αλλά το χειρότερος λόγος φαγητού-τιμής στην Κρήτη. Πήγαινε 2 δρομάκια μέσα στη Σπλαντζία.\n\n✕ **Μπάλος με αυτοκίνητο τον Αύγουστο** — Ο δρόμος είναι χωμάτινος, απότομος και τα queues τον Αύγουστο είναι δύσκολα. Πάρε το καθημερινό πλοίο από το Κίσσαμος.\n\n✕ **Ελαφονήσι ροζ άμμος** — Η παραλία είναι όμορφη αλλά η ροζ άμμος είναι μόνο κοντά στη θάλασσα και οι συγκρίσεις με Καραϊβική είναι υπερβολικές. Τον Ιούλιο-Αύγουστο γεμίζει 10:00.\n\n✕ **Χρόνος μόνο στην Παλιά Πόλη** — Το λιμάνι είναι όμορφο αλλά είναι τουριστική φούσκα. Η πραγματική πόλη — Αγορά, Σπλαντζία, Καστέλι — είναι πιο ενδιαφέρουσα.\n\n✕ **Να παραλείψεις τα Λευκά Όρη** — Προσβάσιμα σε ημερήσια πεζοπορία και προσφέρουν τοπία που οι περισσότεροι τουρίστες δεν βλέπουν. Όμαλος και Φαράγγι Ίμπρου σε μία ώρα.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη ταβέρνα κοντά στα Χανιά δεν είναι στην πόλη — είναι το Μαριδάκι, ένα μικρό ψαράδικο στον δρόμο του Μπάλος όπου τοπικοί τρώνε ψητό χταπόδι με τα πόδια στην άμμο."
      }
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
      title: { en: "Beaches in Rhodes", el: "Παραλίες στη Ρόδο" },
      items: [
        {
          title: { en: "Tsambika", el: "Τσαμπίκα" },
          text: {
            en: "Widely considered one of the best beaches on the island. Long stretch of golden sand with crystal-clear water, backed by dunes and a hillside monastery. Organized with sunbeds and tavernas. Tip: climb to the Monastery of Panagia Tsambika for a stunning view over the entire bay.",
            el: "Θεωρείται μία από τις καλύτερες παραλίες του νησιού. Μεγάλη αμμώδης ακτή με κρυστάλλινα νερά, αμμόλοφους και το μοναστήρι στον λόφο. Tip: ανέβα στο Μοναστήρι της Παναγίας Τσαμπίκας για υπέροχη θέα σε όλο τον κόλπο."
          }
        },
        {
          title: { en: "Faliraki", el: "Φαληράκι" },
          text: {
            en: "One of the most popular resort beaches on Rhodes, with a long sandy shore, full water sports facilities, beach bars, and sunbeds. The atmosphere is lively and energetic in summer. Tip: the northern end of the beach is quieter and less crowded.",
            el: "Μία από τις πιο δημοφιλείς παραλίες της Ρόδου, με μεγάλη αμμώδη ακτή, θαλάσσια σπορ, beach bars και ξαπλώστρες. Η ατμόσφαιρα είναι ζωντανή το καλοκαίρι. Tip: το βόρειο άκρο της παραλίας είναι πιο ήσυχο."
          }
        },
        {
          title: { en: "Anthony Quinn Bay", el: "Όρμος Άντονι Κουίν" },
          text: {
            en: "A small, scenic cove with turquoise water, pebbly sand, and dramatic rocky surroundings. Named after the actor who fell in love with the spot while filming The Guns of Navarone. Tip: arrive early as it gets crowded quickly in peak season.",
            el: "Ένας μικρός γραφικός όρμος με τιρκουάζ νερά, βοτσαλωτή άμμο και εντυπωσιακό βραχώδες σκηνικό. Tip: έλα νωρίς γιατί γεμίζει γρήγορα τους καλοκαιρινούς μήνες."
          }
        },
        {
          title: { en: "St. Paul's Bay (Lindos)", el: "Όρμος Αγίου Παύλου (Λίνδος)" },
          text: {
            en: "A beautiful sandy bay right below Lindos village, sheltered by cliffs on both sides. The water is calm and crystal-clear. The nearby chapel of St. Paul adds character. Tip: combine with a visit to Lindos Acropolis for a perfect half-day.",
            el: "Μια πανέμορφη αμμώδης παραλία ακριβώς κάτω από τη Λίνδο, προστατευμένη από βράχια. Η θάλασσα είναι ήρεμη και κρυστάλλινη. Tip: συνδύασε με επίσκεψη στην Ακρόπολη της Λίνδου."
          }
        },
        {
          title: { en: "Elli Beach", el: "Παραλία Έλλη" },
          text: {
            en: "Rhodes Town's main city beach, located right along the eastern waterfront. Sandy with shallow water, sunbeds, and cafes. Famous for the 'Elli Beach Bar' scene. Tip: walk the pier to the nearby fort for great coastal views.",
            el: "Η κεντρική παραλία της πόλης της Ρόδου, κατά μήκος του ανατολικού παραλιακού μετώπου. Αμμώδης με ρηχά νερά, ξαπλώστρες και καφέ. Tip: περπάτησε στην προβλήτα προς το κοντινό φρούριο."
          }
        },
        {
          title: { en: "Kallithea Springs", el: "Καλλιθέα" },
          text: {
            en: "A historic beach with distinctive Italian-era architecture, crystal-clear water, and pebbly coves. The restored spring complex houses a bar and restaurant. Tip: the water is excellent for snorkeling thanks to the rocky seabed.",
            el: "Ιστορική παραλία με χαρακτηριστική ιταλική αρχιτεκτονική, κρυστάλλινα νερά και βοτσαλωτούς όρμους. Tip: τα νερά είναι εξαιρετικά για Snorkeling χάρη στον βραχώδη βυθό."
          }
        },
        {
          title: { en: "Prasonisi", el: "Πρασονήσι" },
          text: {
            en: "Located at the southernmost tip of Rhodes, this unique beach connects the island to a small islet by a sandbar. When conditions are right, you can swim on both the Aegean and Mediterranean sides. Famous for windsurfing and kitesurfing. Tip: best visited with a car — the drive is scenic and worthwhile.",
            el: "Στο νοτιότερο άκρο της Ρόδου, μια μοναδική παραλία που ενώνει το νησί με μια μικρή νησίδα. Φημίζεται για windsurfing και kitesurfing. Tip: καλύτερα με αυτοκίνητο — η διαδρομή αξίζει."
          }
        },
        {
          title: { en: "Agathi", el: "Αγάθη" },
          text: {
            en: "A secluded sandy beach surrounded by greenery on the east coast, less developed than the main resort beaches. Shallow, clear water makes it ideal for families. Tip: bring supplies as there is only a small canteen in high season.",
            el: "Απομονωμένη αμμώδης παραλία περιτριγυρισμένη από πράσινο, λιγότερο ανεπτυγμένη. Ιδανική για οικογένες. Tip: φέρε εφόδια καθώς υπάρχει μόνο μικρό κυλικείο."
          }
        },
        {
          title: { en: "Gennadi", el: "Γεννάδι" },
          text: {
            en: "A long, quiet pebble-and-sand beach on the southeast coast, popular with travelers seeking a relaxed atmosphere away from the crowds. Some sunbeds and tavernas. Tip: the beach is exposed to summer winds, making it popular for windsurfing.",
            el: "Μεγάλη, ήσυχη παραλία στη νοτιοανατολική ακτή, δημοφιλής για όσους γυρεύουν χαλάρωση μακριά από τα πλήθη. Tip: η παραλία έχει ανέμους, ιδανική για windsurfing."
          }
        },
        {
          title: { en: "Ladiko", el: "Λαδικό" },
          text: {
            en: "A small, peaceful cove just south of Anthony Quinn Bay with pebbly sand and crystal water. Less busy than its famous neighbor, with a relaxed atmosphere. Tip: good for a quiet afternoon swim away from the crowds.",
            el: "Μικρός ήσυχος όρμος νότια του Άντονι Κουίν, με βοτσαλωτή άμμο και κρυστάλλινα νερά. Λιγότερο πολυσύχναστος. Tip: ιδανικός για χαλαρωτικό απογευματινό μπάνιο."
          }
        }
      ]
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
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Rhodes", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Ρόδο" },
      text: {
        en: "✕ **Lindos Acropolis in midday** — The climb is exposed, the marble paths are scorching, and the crowds peak between 11:00 and 14:00. Go at opening (08:00) or late afternoon when the light on the white village below is spectacular.\n\n✕ **Mandraki Harbour restaurants** — Tourist-facing, overpriced, mediocre food. Walk five minutes inland to the streets around Akti Sotiros for better tavernas with local clientele.\n\n✕ **Faliraki as a beach base** — Faliraki is known for nightlife, not beach quality. The sand is fine but the area is loud and commercial. The east coast beaches (Lindos, Anthony Quinn, Tsambika) are better.\n\n✕ **Skipping the interior** — Rhodes's interior has mountain villages (Eleousa, Theologos, Siana) with traditional character that feel like a different island. Most visitors see only the coast.\n\n✕ **Only visiting the Old Town** — The medieval Old Town is extraordinary, but Rhodes has a whole island behind it. The Valley of the Butterflies (best in June), the ancient Kamiros, and the south coast beaches all deserve time.\n\n💡 What nobody tells you: The best beach in Rhodes is not on any tourist map — it is the small cove east of Lachania on the south coast, accessible only by a dirt road and a fifteen-minute walk. Crystal water, no facilities, usually empty.",
        el: "✕ **Ακρόπολη Λίνδου στο μεσημέρι** — Η ανάβαση είναι εκτεθειμένη, τα μαρμάρινα μονοπάτια είναι αφόρητα. Πήγαινε στο άνοιγμα (08:00) ή αργότερα.\n\n✕ **Ταβέρνες στο Μανδράκι** — Υπερτιμημένες, μέτριες. 5 λεπτά μέσα στους δρόμους γύρω από Άκτη Σωτήρος.\n\n✕ **Φαληράκι ως βάση** — Γνωστό για νυχτερινή ζωή, όχι παραλία. Ανατολική ακτή: Λίνδος, Anthony Quinn, Τσαμπίκα.\n\n✕ **Να παραλείψεις την ενδοχώρα** — Ελεούσα, Θεολόγος, Σιανά με παραδοσιακό χαρακτήρα, σαν διαφορετικό νησί.\n\n✕ **Μόνο η Παλιά Πόλη** — Η μεσαιωνική πόλη είναι εξαιρετική αλλά η Ρόδος έχει ολόκληρο νησί. Κοιλάδα Πεταλούδων, αρχαία Κάμειρος, νότια ακτή.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη παραλία στη Ρόδο δεν είναι σε κανέναν τουριστικό χάρτη — είναι ένα μικρό κόλπο ανατολικά του Λαχανιά στο νότο, προσβάσιμο μόνο με χωμάτινο δρόμο και 15 λεπτά πεζής."
      }
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
      layout: "list",
      title: { en: "Beaches in Monemvasia", el: "Παραλίες στη Μονεμβασιά" },
      items: [
        {
          title: { en: "Pori Beach", el: "Παραλία Πόρι" },
          text: {
            en: "The closest sandy beach to Monemvasia, just a few minutes' drive from the rock. A long stretch of golden sand with crystal-clear water, sunbeds, and a beach taverna. Tip: the views of Monemvasia from this beach are stunning — bring your camera at golden hour.",
            el: "Η κοντινότερη αμμώδης παραλία στη Μονεμβασιά, λίγα λεπτά με το αυτοκίνητο. Μεγάλη χρυσή άμμος, κρυστάλλινα νερά, ξαπλώστρες και ταβέρνα. Tip: η θέα στη Μονεμβασιά από εδώ είναι μαγευτική."
          }
        },
        {
          title: { en: "Ambelakia", el: "Αμπελάκια" },
          text: {
            en: "A small, sheltered pebble cove with turquoise water, surrounded by rocks and greenery. Quiet and less developed than Pori. Ideal for a peaceful swim away from any crowds. Tip: the water clarity here is excellent for snorkelling.",
            el: "Μικρός προστατευμένος βοτσαλωτός όρμος με τιρκουάζ νερά, ήσυχος και λιγότερο ανεπτυγμένος. Tip: η διαύγεια του νερού είναι εξαιρετική για snorkeling."
          }
        },
        {
          title: { en: "Xifias", el: "Ξιφίας" },
          text: {
            en: "A long, organized sandy beach on the mainland coast opposite Monemvasia, popular with families. Shallow water, sunbeds, and several seaside tavernas serving fresh fish. Tip: the tavernas here serve some of the best grilled octopus in the region.",
            el: "Μεγάλη οργανωμένη αμμώδης παραλία απέναντι από τη Μονεμβασιά, δημοφιλής για οικογένειες. Ρηχά νερά και ταβέρνες με φρέσκο ψάρι. Tip: το χταπόδι εδώ είναι από τα καλύτερα."
          }
        },
        {
          title: { en: "Plitra", el: "Πλύτρα" },
          text: {
            en: "A charming fishing village with a long pebble-and-sand beach, calm waters, and excellent fish tavernas right on the seafront. Less touristy than the nearby resort beaches. Tip: combine your beach day with lunch at one of the waterfront tavernas.",
            el: "Γραφικό ψαροχώρι με μακριά παραλία, ήρεμα νερά και εξαιρετικές ψαροταβέρνες. Tip: συνδύασε τη μέρα στην παραλία με μεσημεριανό στο λιμάνι."
          }
        },
        {
          title: { en: "Stavri", el: "Σταυρί" },
          text: {
            en: "A secluded pebble beach with deep blue water, hidden among rocky cliffs. Requires a short walk to reach but rewards with privacy and natural beauty. Tip: bring water and snacks as there are no facilities.",
            el: "Απομονωμένη βοτσαλωτή παραλία με βαθιά μπλε νερά, κρυμμένη ανάμεσα σε βράχια. Tip: φέρε νερό και σνακ γιατί δεν υπάρχουν υποδομές."
          }
        }
      ]
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
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Monemvasia", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Μονεμβασιά" },
      text: {
        en: "✕ **Driving into the lower town** — The narrow gate at the entrance barely fits a car, and parking inside is chaotic. Use the large car park outside the gate and walk in — the fifteen-minute walk along the sea wall is part of the experience.\n\n✕ **Rushing through in a day trip** — Monemvasia is a place that reveals itself slowly. A day trip gives you the rock and the castle but not the atmosphere — the empty alleys at dawn, the sunset from the upper town, the silence.\n\n✕ **Skipping the upper town (Goulas)** — Many visitors stay in the lower town and never make the climb to the Goulas at the top. The ruins of the medieval upper town have the most dramatic views on the Peloponnese coast.\n\n✕ **Only eating at harbour tavernas** — The few restaurants near the entrance are convenient but tourist-oriented. The better food is deeper inside the rock village where family-run places serve traditional Maniot dishes.\n\n✕ **Visiting only in peak summer** — Monemvasia in July-August is hot and crowded with cruise-ship visitors. Spring (April-May) and autumn (September-October) are when this medieval village feels most authentic.\n\n💡 What nobody tells you: The best-kept secret near Monemvasia is Elafonisos island, a fifteen-minute ferry ride away with Simos beach — one of the finest sand beaches in the Peloponnese and almost unknown to international visitors.",
        el: "✕ **Οδήγηση στην κάτω πόλη** — Η στενή πύλη μόλις χωράει αυτοκίνητο. Πάρκαρε έξω και μπες με τα πόδια — το 15λεπτο περίπατο στην παραλία είναι μέρος της εμπειρίας.\n\n✕ **Να το βιαστείς σε μια μέρα** — Η Μονεμβασιά αποκαλύπτεται αργά. Μία μέρα δίνει τον βράχο αλλά όχι την ατμόσφαιρα — τα άδεια σοκάκια στην αυγή, τη δύση από την άνω πόλη.\n\n✕ **Να παραλείψεις την άνω πόλη (Γουλάς)** — Πολλοί μένουν στην κάτω πόλη και δεν ανεβαίνουν. Τα ερείπια της μεσαιωνικής άνω πόλης έχουν την πιο δραματική θέα στην πελοποννησιακή ακτή.\n\n✕ **Μόνο ταβέρνες στο λιμάνι** — Τα λίγα εστιατόρια κοντά στην είσοδο είναι τουριστικά. Καλύτερο φαγητό μέσα στο βράχο.\n\n✕ **Μόνο τον Ιούλιο-Αύγουστο** — Ζέστη και κρουαζιερόπλοια. Άνοιξη και φθινόπωρο είναι πιο αυθεντικό.\n\n💡 Αυτό που δε σου λέει κανείς: Το καλύτερο μυστικό κοντά στη Μονεμβασιά είναι το Ελαφόνησο — 15 λεπτά με πλοίο, με την Παραλία Σίμος, μία από τις καλύτερες αμμουδιές της Πελοποννήσου."
      }
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
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Halkidiki", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Χαλκιδική" },
      text: {
        en: "✕ **Kassandra peninsula in peak August** — The first 'finger' of Halkidiki is the most accessible and the most crowded. Beach bars blast music, parking is impossible, and the water is shallow. The second finger (Sithonia) is where locals actually go.\n\n✕ **Sani Resort area for authenticity** — Sani is a luxury resort complex with its own controlled environment. It is comfortable but it is not Halkidiki. Drive twenty minutes to Neos Marmaras or Porto Koufo for the real thing.\n\n✕ **Ignoring Mount Athos** — You cannot enter the monastic state without a permit, but the boat tours from Ouranoupoli along the Athos coastline give you extraordinary views of monasteries perched on cliffs. It is one of the most memorable half-days in northern Greece.\n\n✕ **Staying only on Kassandra** — Sithonia has wilder beaches, pine forests, and traditional villages. The drive along its east coast from Nikiti to Sarti is one of the most scenic coastal routes in Greece.\n\n✕ **Skipping the food scene** — Halkidiki is known for its fish tavernas, especially around Porto Koufo and Ierissos. The fresh fish and seafood mezes here are among the best in mainland Greece and significantly cheaper than island equivalents.\n\n💡 What nobody tells you: The best beach in Halkidiki is Kavourotripes on Sithonia — a series of tiny coves between white rocks with transparent water. Arrive before 10:00 on a weekday in July and you might have it almost to yourself.",
        el: "✕ **Χερσόνησος Κασσάνδρας τον Αύγουστο** — Το πρώτο 'δάχτυλο' είναι πιο προσβάσιμο και πιο γεμάτο. Beach bars μουσική, αδύνατο parking, ρηχό νερό. Η δεύτερη (Σιθωνία) είναι όπου πηγαίνουν οι τοπικοί.\n\n✕ **Περιοχή Sani για αυθεντικότητα** — Είναι λουξερικό resort, όχι Χαλκιδική. 20 λεπτά πιο μακριά: Νέος Μαρμαράς, Πόρτο Κουφό.\n\n✕ **Να αγνοήσεις τον Άθω** — Δεν μπορείς να μπεις χωρίς άδεια αλλά τα πλοία από Ουρανούπολη δίνουν εξαιρετική θέα στα μοναστήρια. Ένα από τα πιο αξέχαστα ημί-ημέρα στη βόρεια Ελλάδα.\n\n✕ **Μόνο Κασσάνδρα** — Σιθωνία με άγριες παραλίες, πεύκα, παραδοσιακά χωριά. Ο δρόμος ανατολικής ακτής Νικήτη-Σάρτη είναι από τις πιο θεαματικές παραλιακές οδούς.\n\n✕ **Να παραλείψεις το φαγητό** — Ψαροταβέρνες στο Πόρτο Κουφό και Ιέρισσο — από τα καλύτερα ψάρια και μεζέδες στην ελληνική ηπειρωτική.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη παραλία είναι τα Καβούροτρυπα στη Σιθωνία — σειρά μικρών κόλπων ανάμεσα σε λευκά βράχια με διαφανές νερό. Φτάσε πριν τις 10:00 και θα το έχεις σχεδόν μόνο σου."
      }
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
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Meteora", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στα Μετέωρα" },
      text: {
        en: "✕ **Visiting all six monasteries** — Six monasteries are open but they follow similar patterns. Visit two or three (Great Meteoron and Varlaam are the most impressive) and spend the rest of the time hiking the old stone paths between them — the views from the trails are better than from any monastery balcony.\n\n✕ **Sunset from the main viewpoint** — The sunset viewpoint at the end of the Kalambaka road is where every tour bus converges. The better sunset spot is from the path to the Holy Trinity monastery, where you can watch the light change on the pillars without crowds.\n\n✕ **Kalambaka as your base** — Kalambaka is functional but bland. Kastraki, the tiny village at the foot of the rocks, has character, atmosphere, and walking distance to everything.\n\n✕ **Only the rock formations** — Meteora's monasteries and rocks get all the attention, but the region has excellent hiking (the path from Kastraki to Great Meteoron is spectacular), traditional villages like Diakopto and the Vasiliki Gorge, and the ancient site of Delphi is a day trip away.\n\n✕ **Driving to the monasteries in peak hours** — The roads to the monasteries are narrow and the parking areas small. In July-August, the queues to park at Great Meteoron can add thirty minutes to your visit. Arrive before 09:00 or after 15:00.\n\n💡 What nobody tells you: Meteora is at its most magical in the early morning when fog fills the valley and the rock pillars emerge from clouds. Set an alarm and be at the viewpoint by 06:30 in summer — you will have the entire panorama to yourself.",
        el: "✕ **Να επισκεφθείς τις έξι μονές** — Οι έξι είναι παρόμοιες. Επίλεξε 2-3 (Μεγάλο Μετέωρο, Βαρλαάμ) και περπάτησε τα παλιά μονοπάτια μεταξύ τους — οι θέες είναι καλύτερες.\n\n✕ **Δύση από το κύριο viewpoint** — Το bus parking γεμίζει. Καλύτερη θέα από το μονοπάτι προς Αγ. Τριάδα.\n\n✕ **Καλαμπάκα ως βάση** — Λειτουργική αλλά αδιάφορη. Καστράκι έχει χαρακτήρα και είναι κοντά σε όλα.\n\n✕ **Μόνο οι βράχοι** — Μονοπάτια, παραδοσιακά χωριά (Διακοπτό, Βασιλική), φαράγγι.\n\n✕ **Οδήγηση στις μονές στην αιχμή** — Στενοί δρόμοι, μικρά parking. Τον Ιούλιο-Αύγουστο πρόσθεσε 30 λεπτά. Φτάσε πριν τις 09:00.\n\n💡 Αυτό που δε σου λέει κανείς: Τα Μετέωρα είναι πιο μαγικά στην αυγή όταν η ομίχλη γεμίζει την κοιλάδα. Σήκωσε στις 06:30 και θα έχεις ολόκληρο το πανόραμα μόνος σου."
      }
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
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Parga", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Πάργα" },
      text: {
        en: "✕ **Parga town beach in August** — The small beach directly below the old town is picturesque but tiny and overwhelmed in peak season. Walk ten minutes south to Valtos beach, which is larger, better organized, and has clearer water.\n\n✕ **Lichnos beach by car** — The drive to Lichnos is narrow and parking is limited. The beach itself is beautiful but the access road discourages many. A water taxi from Parga harbour is more pleasant and drops you directly on the sand.\n\n✕ **Parga as a one-day stop** — Parga rewards an overnight stay. The evening atmosphere when the day-trippers leave and the town returns to its residents is when the place is at its most charming.\n\n✕ **Ignoring the castle** — The Venetian castle above town has free entry and panoramic views over the harbour, the islands, and the coast. Most visitors photograph it from below but never climb up.\n\n✕ **Skipping Acheron River** — The river gorge twenty minutes north is one of Epirus's hidden gems: cold water, plane trees, and mythology (this is the legendary river of the dead). The kayak and boat trips are refreshing on hot days.\n\n💡 What nobody tells you: The best view of Parga is not from the castle or the waterfront — it is from the road coming in from Ioannina, where the entire town cascades down to the harbour with the twin islands of Panagia and Virgin Mary in the foreground. Pull over at the viewpoint and take it in.",
        el: "✕ **Παραλία κάτω από την Παλιά Πόλη τον Αύγουστο** — Είναι όμορφη αλλά μικρή και γεμάτη. Πήγαινε 10 λεπτα νότια στο Βάλτος.\n\n✕ **Λίχνος με αυτοκίνητο** — Ο δρόμος είναι στενός. Το taxi-σκάφος από το λιμάνι είναι πιο ευχάριστο.\n\n✕ **Μία μέρα στην Πάργα** — Αξίζει διανυκτέρευση. Βράδυ όταν φεύγουν οι day-trippers είναι πιο γοητευτική.\n\n✕ **Να αγνοήσεις το κάστρο** — Ελεύθερη είσοδος, πανόραμα. Οι περισσότεροι φωτογραφίζουν από κάτω και δεν ανεβαίνουν.\n\n✕ **Να παραλείψεις τον Αχέροντα** — Το φαράγγι 20 λεπτά βόρεια με κρύο νερό, πλατάνια και μυθολογία. Καγιάκ και boat trips σε ζεστές μέρες.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη θέα της Πάργας δεν είναι από το κάστρο αλλά από τον δρόμο από την Ιωάννινα, όπου η Πάργα κατεβαίνει στο λιμάνι με τα δύο νησάκια μπροστά."
      }
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
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Delphi", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Δελφοί" },
      text: {
        en: "✕ **Visiting only the archaeological site** — The ancient ruins are world-class, but Delphi's modern town above the site has wonderful tavernas and the view over the Pleistos valley is as dramatic as anything in the ruins. Walk up after the site visit.\n\n✕ **Skipping the museum** — The Delphi Archaeological Museum houses the Charioteer of Delphi and other masterpieces. It is small but essential — without it, the site is just stones.\n\n✕ **Driving up from Athens in one day** — Delphi is a three-hour drive each way. Doing it as a day trip from Athens means you see the site exhausted and leave before the light gets good. Stay overnight in Delphi town and visit the site at opening when you have it nearly to yourself.\n\n✕ **Ignoring the Tholos of Athena Pronaia** — This circular building is the most photographed structure at Delphi but it is at the far end of the site and many visitors miss it. The three surviving columns are iconic and the setting among the pines is magical.\n\n✕ **Not hiking the Corycian Cave path** — Above the main site, an ancient path leads to the Corycian Cave, a vast grotto that was sacred to Pan and the Nymphs. It takes about an hour each way and the cave is rarely visited — you will likely be alone.\n\n💡 What nobody tells you: The best time to visit Delphi is early morning in spring when wildflowers carpet the ancient stadium and the valley below is green. The Oracle chose this spot for a reason — the light, the landscape, and the silence are genuinely transcendent.",
        el: "✕ **Μόνο το αρχαιολογικό χώρο** — Τα ερείπια είναι παγκόσμια αλλά το σύγχρονο χωριό από πάνω έχει ταβέρνες και θέα στην κοιλάδα Πλείστου.\n\n✕ **Να παραλείψεις το μουσείο** — Ο Ηνίοχος των Δελφών και άλλα έργα. Μικρό αλλά απαραίτητο.\n\n✕ **Μέρα από την Αθήνα** — 3 ώρες εκάστων. Κούραση, φως. Μείνε μία νύχτα.\n\n✕ **Να αγνοήσεις τον Θόλο της Αθηνάς Προναίας** — Το κυκλικό κτίσμα στο μακρινό άκρο. 3 στύλοι μεταξύ πεύκων.\n\n✕ **Να μην κάνεις το μονοπάτι προς το Σπήλιο Κωρύκειο** — 1 ώρα ανάβαση σε μια τεράστια σπηλιά που σπάνια επισκέπτεται κανείς.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη εποχή είναι το πρωί στην άνοιξη όταν τα άγρια λουλούδια γεμίζουν τον αρχαίο στάδιο και η κοιλάδα είναι πράσινη."
      }
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
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Patmos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Πάτμο" },
      text: {
        en: "✕ **Chora in the midday heat** — The white-washed hilltop village is beautiful but has almost no shade. Walking its marble lanes at noon in August is uncomfortably hot. Visit in the evening when the cafés are open and the sunset views are extraordinary.\n\n✕ **Skala as your only base** — Skala (the port) has the best beaches and services but Patmos's soul is in Chora and the Monastery of St John. Stay at least one night in Chora to experience the island after the day-trippers leave.\n\n✕ **Grikos in peak season** — This pretty bay is one of Patmos's most popular spots but the organised beach fills early. The nearby Livadi Geranou is quieter and equally beautiful.\n\n✕ **Skipping the Cave of the Apocalypse** — The cave where St John received his revelation is small and the visit is brief, but the atmosphere is powerful. Combine it with the monastery visit for the full spiritual context.\n\n✕ **Not exploring the island by boat** — Patmos's coastline has hidden coves accessible only by water. The small boat trips from Skala to the north coast and the islet of Arkoi are among the best ways to spend a day.\n\n💡 What nobody tells you: Patmos has a strict no-building policy that preserves its character unlike almost any other Greek island. The result is an island that feels genuinely timeless — no neon signs, no high-rises, no pool villas. This is what most Greek islands used to look like.",
        el: "✕ **Χώρα στο μεσημέρι** — Τα λευκά σοκάκια είναι όμορφα αλλά δεν έχουν σκιά. Πήγαινε βράδυ όταν ανοίγουν τα cafés και η δύση είναι εξαιρετική.\n\n✕ **Σκάλα ως μοναδική βάση** — Η Σκάλα έχει παραλίες αλλά η ψυχή της Πάτμου είναι στη Χώρα και στη Μονή.\n\n✕ **Γρίκος στην αιχμή** — Όμορφο κόλπο αλλά γεμίζει νωρίς. Λιβάδι Γερανού πιο ήσυχο.\n\n✕ **Να παραλείψεις το Σπήλιο της Αποκάλυψης** — Μικρό αλλά ισχυρή ατμόσφαιρα. Συνδυάστε με τη Μονή.\n\n✕ **Να μην εξερευνήσεις την ακτογραμμή με σκάφος** — Κρυμμένοι κόλποι προσβάσιμοι μόνο με νερό. Boat trips στον βορρά και στο Αρκοί.\n\n💡 Αυτό που δε σου λέει κανείς: Η Πάτμος έχει αυστηρή απαγόρευση κατασκευής που διατηρεί τον χαρακτήρα της. Κανένα νεόν, κανένα υψηλό, κανένα pool villa. Αυτό ήταν η Ελλάδα πριν."
      }
    }
  ],
  kos: [
    {
      title: {
        en: "Why visit Kos",
        el: "Γιατί να επισκεφθείς την Κω",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "The birthplace of medicine — and it shows",
            el: "Η πατρίδα της ιατρικής — και φαίνεται",
          },
          text: {
            en: "Hippocrates was born on Kos around 460 BC, and the island did not forget him. The Asklepion — a major healing sanctuary built on three terraced levels above the city — is one of the most important archaeological sites in the entire Aegean. This was not just a temple: it was a functioning medical school, a place where patients were treated through diet, rest, exercise and the careful observation of symptoms. The fact that modern medicine traces its formal origins here gives the site a weight that goes beyond archaeology. Walking its terraces with the Turkish coastline visible across the water is one of those genuinely affecting travel experiences.",
            el: "Ο Ιπποκράτης γεννήθηκε στην Κω γύρω στο 460 π.Χ. και το νησί δεν τον ξέχασε. Το Ασκληπιείο — ένα σημαντικό θεραπευτικό ιερό χτισμένο σε τρία επίπεδα πάνω από την πόλη — είναι ένας από τους σημαντικότερους αρχαιολογικούς χώρους του Αιγαίου. Δεν ήταν απλώς ένας ναός: ήταν μια λειτουργική ιατρική σχολή όπου οι ασθενείς αντιμετωπίζονταν μέσω δίαιτας, ξεκούρασης, άσκησης και προσεκτικής παρατήρησης συμπτωμάτων. Το γεγονός ότι η σύγχρονη ιατρική εντοπίζει εδώ τις ρίζες της δίνει στον χώρο ένα βάρος που ξεπερνά την αρχαιολογία.",
          },
        },
        {
          title: {
            en: "A flat island designed for cycling",
            el: "Ένα επίπεδο νησί φτιαγμένο για ποδήλατο",
          },
          text: {
            en: "Most of Kos is remarkably flat by Greek island standards, and the main tourist corridor from Kos Town westward to Tigkaki and Marmari runs along a well-maintained cycle path directly adjacent to the sea. This is not a coincidence — the flat terrain was historically what made the island agriculturally rich, and today it is what makes it genuinely bicycle-friendly in a way that most Greek islands simply cannot claim. Renting a bike in the morning and cycling to a beach for the afternoon is not an aspiration on Kos: it is the daily reality of thousands of visitors every summer.",
            el: "Το μεγαλύτερο μέρος της Κω είναι εντυπωσιακά επίπεδο για τα δεδομένα ελληνικού νησιού. Ο κύριος τουριστικός διάδρομος από την πόλη προς τα δυτικά διαθέτει έναν καλοδιατηρημένο ποδηλατόδρομο δίπλα στη θάλασσα. Αυτό δεν είναι τυχαίο — το επίπεδο έδαφος έκανε το νησί γεωργικά πλούσιο και σήμερα το καθιστά πραγματικά φιλικό για ποδήλατο, με χιλιάδες επισκέπτες να το χρησιμοποιούν καθημερινά.",
          },
        },
        {
          title: {
            en: "Stratigraphic history in every street corner",
            el: "Στρωματογραφική ιστορία σε κάθε γωνιά",
          },
          text: {
            en: "The town of Kos has the unusual characteristic of being built directly on top of its own archaeological past. After the devastating 1933 earthquake, Italian archaeologists who administered the island took the opportunity to excavate extensively — and what they found shaped the urban layout of the modern town. Today, ancient columns stand within metres of traffic roundabouts, a Roman agora sits in an open-air museum at the edge of the main harbor, and the Hippocrates Plane Tree — reputedly one of the oldest in Europe, where Hippocrates himself is said to have taught — still shades a central square next to a 16th-century Ottoman fountain.",
            el: "Η πόλη της Κω έχει το ασυνήθιστο χαρακτηριστικό να είναι χτισμένη πάνω στο αρχαιολογικό της παρελθόν. Μετά τον καταστροφικό σεισμό του 1933, Ιταλοί αρχαιολόγοι εκμεταλλεύτηκαν την ευκαιρία για εκτεταμένες ανασκαφές. Σήμερα, αρχαίοι κίονες βρίσκονται μέτρα από κυκλικούς κόμβους, η ρωμαϊκή αγορά εκτείνεται δίπλα στο λιμάνι και ο Πλάτανος του Ιπποκράτη — ένας από τους αρχαιότερους στην Ευρώπη — σκιάζει ακόμα την κεντρική πλατεία δίπλα σε ένα οθωμανικό σιντριβάνι του 16ου αιώνα.",
          },
        },
        {
          title: {
            en: "A genuine gateway to the broader Dodecanese",
            el: "Πύλη προς τα Δωδεκάνησα",
          },
          text: {
            en: "Kos Town has an international airport, daily ferry connections to Rhodes, Kalymnos, Nisyros, Patmos and the Turkish coast, and regular catamaran services to Bodrum, just 4 nautical miles away. For travellers who want to use one base to explore several islands, Kos is strategically one of the best-positioned in the group. A day trip to volcanic Nisyros — with its active caldera — is one of the most rewarding excursions in the entire Aegean and takes under an hour by boat.",
            el: "Η Κως διαθέτει διεθνές αεροδρόμιο, καθημερινές ακτοπλοϊκές συνδέσεις με Ρόδο, Κάλυμνο, Νίσυρο, Πάτμο και την Τουρκία, και τακτικά δρομολόγια προς το Μπόντρουμ, μόλις 4 ναυτικά μίλια μακριά. Για ταξιδιώτες που θέλουν να εξερευνήσουν πολλά νησιά από μία βάση, η Κως είναι στρατηγικά ιδανική. Μια ημερήσια εκδρομή στην ηφαιστειακή Νίσυρο είναι από τις πιο ανταποδοτικές εκδρομές στο Αιγαίο.",
          },
        },
        {
          title: {
            en: "Diverse beach character from a single island",
            el: "Ποικιλία παραλιών σε ένα νησί",
          },
          text: {
            en: "The western coast faces the calmer waters of the Kos-Kalymnos channel and offers long sandy beaches ideal for families and water sports. The southern coast, accessible by car or scooter, reveals wilder bays, rocky coves and isolated strips of sand at places like Agios Fokas, Therme (natural hot springs meeting the sea) and Kefalos Bay — where a long arc of sand backed by a quiet fishing village feels genuinely remote.",
            el: "Η δυτική ακτή βλέπει στα ήρεμα νερά του διαύλου Κω-Καλύμνου και προσφέρει μακριές αμμώδεις παραλίες ιδανικές για οικογένειες και θαλάσσια σπορ. Η νότια ακτή, προσβάσιμη με αυτοκίνητο ή σκούτερ, αποκαλύπτει πιο άγριους όρμους, βραχώδεις κολπίσκους και απομονωμένες λωρίδες άμμου σε μέρη όπως ο Άγιος Φωκάς, τα Θερμά και ο κόλπος του Κεφάλου.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time to visit",
        el: "Καλύτερη εποχή για επίσκεψη",
      },
      layout: "list",
      alert: {
        en: "Secret: May and late September on Kos offer something rare in the eastern Aegean — full sunshine, 24–25°C sea temperatures, functioning restaurants and bars, and beaches where you can actually choose your spot. The island does not deserve to be seen only in August.",
        el: "Secret: Μάιος και τέλη Σεπτεμβρίου στην Κω προσφέρουν κάτι σπάνιο στο ανατολικό Αιγαίο — γεμάτο ήλιο, θαλάσσιες θερμοκρασίες 24-25°C και παραλίες όπου μπορείτε πραγματικά να επιλέξετε το σημείο σας.",
      },
      items: [
        {
          title: {
            en: "April – May",
            el: "Απρίλιος – Μάιος",
          },
          text: {
            en: "The archaeological sites are at their best — quieter, cooler, and surrounded by wildflowers. The Asklepion in May, with its almond trees and the Turkish coastline in the background, is as good as it gets. Sea temperatures are around 20–22°C.",
            el: "Οι αρχαιολογικοί χώροι είναι στα καλύτερά τους — πιο ήσυχοι, δροσεροί και γεμάτοι αγριολούλουδα. Το Ασκληπιείο τον Μάιο, με τις αμυγδαλιές και την τουρκική ακτή στο βάθος, είναι όσο καλό γίνεται. Οι θαλάσσιες θερμοκρασίες είναι περίπου 20-22°C.",
          },
        },
        {
          title: {
            en: "June",
            el: "Ιούνιος",
          },
          text: {
            en: "The sweet opening of summer. The tourist infrastructure is fully open, the beaches are accessible but not saturated, and the evenings are long and warm. Ideal for the full Kos experience without the pressure of peak season.",
            el: "Η γλυκιά αρχή του καλοκαιριού. Οι υποδομές είναι πλήρως λειτουργικές, οι παραλίες προσβάσιμες αλλά όχι γεμάτες, και τα βράδια μεγάλα και ζεστά. Ιδανικά για την πλήρη εμπειρία της Κω χωρίς την πίεση της υψηλής περιόδου.",
          },
        },
        {
          title: {
            en: "July – August",
            el: "Ιούλιος – Αύγουστος",
          },
          text: {
            en: "Peak season in the full sense: direct charter flights from across Europe, packed beaches, crowded archaeological sites, and higher prices. The island handles it well due to its size, but popular spots like Tigkaki require early arrival or acceptance of density. The evenings are spectacular.",
            el: "Υψηλή περίοδος με απευθείας πτήσεις από όλη την Ευρώπη, γεμάτες παραλίες, πολυσύχναστους αρχαιολογικούς χώρους και υψηλότερες τιμές. Το νησί το διαχειρίζεται καλά λόγω του μεγέθους του, αλλά δημοφιλή σημεία όπως το Τιγκάκι απαιτούν έγκαιρη άφιξη.",
          },
        },
        {
          title: {
            en: "September",
            el: "Σεπτέμβριος",
          },
          text: {
            en: "For many experienced travellers, this is the optimal Kos month. The Aegean sea is at 26–27°C, the light is softer and more photogenic, the crowds thin considerably after the first week, and the island returns to something closer to its real self.",
            el: "Για πολλούς έμπειρους ταξιδιώτες, αυτός είναι ο βέλτιστος μήνας για την Κω. Η θάλασσα στους 26-27°C, το φως πιο μαλακό και φωτογενές, τα πλήθη αραιώνουν σημαντικά μετά την πρώτη εβδομάδα και το νησί επιστρέφει στον πραγματικό του εαυτό.",
          },
        },
        {
          title: {
            en: "October – March",
            el: "Οκτώβριος – Μάρτιος",
          },
          text: {
            en: "The quieter season. Most beach-oriented businesses close from late October, but Kos Town remains lively with local restaurants, cafés and year-round hotels. It is worth visiting for culture, history and the experience of a working Dodecanese town without the summer filter.",
            el: "Η ήσυχη σεζόν. Τα περισσότερα παραθαλάσσια μαγαζιά κλείνουν από τα τέλη Οκτωβρίου, αλλά η πόλη παραμένει ζωντανή με τοπικά εστιατόρια, καφέ και ξενοδοχεία. Αξίζει για πολιτισμό, ιστορία και την εμπειρία μιας λειτουργικής δωδεκανησιακής πόλης χωρίς το καλοκαιρινό φίλτρο.",
          },
        },
      ],
    },
    {
      title: {
        en: "How to get to Kos",
        el: "Πώς να φτάσεις στην Κω",
      },
      layout: "list",
      alert: {
        en: "Transport tip: Kos is one of the best-connected islands in the Dodecanese, served by both air and sea year-round. The airport handles international charters directly, which means many visitors arrive without transiting Athens at all.",
        el: "Συμβουλή μεταφοράς: Η Κως είναι ένα από τα καλύτερα συνδεδεμένα νησιά των Δωδεκανήσων. Το αεροδρόμιο εξυπηρετεί απευθείας διεθνείς πτήσεις.",
      },
      items: [
        {
          title: {
            en: "By Plane",
            el: "Αεροπορικώς",
          },
          text: {
            en: "Kos International Airport 'Hippocrates' (KGS) receives direct international flights from major European cities throughout the summer season, as well as year-round domestic connections via Athens. The airport is located approximately 26 km from Kos Town.",
            el: "Το Διεθνές Αεροδρόμιο «Ιπποκράτης» (KGS) δέχεται απευθείας διεθνείς πτήσεις από μεγάλες ευρωπαϊκές πόλεις το καλοκαίρι, καθώς και εσωτερικές συνδέσεις μέσω Αθηνών όλο τον χρόνο. Βρίσκεται περίπου 26 χλμ. από την πόλη της Κω.",
          },
        },
        {
          title: {
            en: "By Ferry",
            el: "Ακτοπλοϊκώς",
          },
          text: {
            en: "The main port of Kos Town has regular ferry connections with Piraeus (Athens) — the journey takes approximately 10–15 hours depending on the route and vessel. Faster high-speed services operate seasonally. There are also frequent interisland connections to Rhodes, Kalymnos, Leros, Patmos and Nisyros. The Bodrum–Kos crossing takes approximately 45 minutes by ferry.",
            el: "Το κεντρικό λιμάνι της Κω έχει τακτική ακτοπλοϊκή σύνδεση με τον Πειραιά — το ταξίδι διαρκεί περίπου 10-15 ώρες ανάλογα με το δρομολόγιο. Υπάρχουν επίσης συχνές συνδέσεις με Ρόδο, Κάλυμνο, Λέρο, Πάτμο και Νίσυρο. Η διάβαση Μπόντρουμ-Κως διαρκεί περίπου 45 λεπτά.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top attractions & experiences",
        el: "Κορυφαία αξιοθέατα & εμπειρίες",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "The Asklepion — healing sanctuary above the sea",
            el: "Το Ασκληπιείο — θεραπευτικό ιερό πάνω από τη θάλασσα",
          },
          text: {
            en: "Built on three terraces on a pine-covered hillside 4 km southwest of Kos Town, the Asklepion was simultaneously a religious sanctuary dedicated to Asklepios (god of medicine), a medical school and a therapeutic retreat. The site operated from the 4th century BC until its closure under Byzantine rule. The middle terrace holds the most complete architectural remains; the upper terrace commands views that extend across the strait to Turkey. Go in the morning, allow 90 minutes, and combine it with a stop at the village of Platani (Germe) on the return.",
            el: "Χτισμένο σε τρεις αναβαθμίδες σε μια δασωμένη πλαγιά 4 χλμ. νοτιοδυτικά της πόλης, το Ασκληπιείο ήταν ταυτόχρονα θρησκευτικό ιερό αφιερωμένο στον Ασκληπιό, ιατρική σχολή και θεραπευτικό καταφύγιο. Λειτούργησε από τον 4ο αιώνα π.Χ. έως το κλείσιμό του επί βυζαντινής κυριαρχίας. Η μεσαία αναβαθμίδα διατηρεί τα πληρέστερα αρχιτεκτονικά κατάλοιπα. Πήγαινε το πρωί, αφιέρωσε 90 λεπτά.",
          },
        },
        {
          title: {
            en: "Kos Town: walking the archaeological layers",
            el: "Πόλη της Κω: αρχαιολογικά στρώματα",
          },
          text: {
            en: "The old harbor of Kos is framed by the Castle of the Knights — a 15th-century fortification built by the Knights Hospitaller that incorporates ancient marble in its walls as building material. From the castle, the walk south into the old town passes the ancient agora, the Roman Odeon, the Casa Romana (a restored Roman villa with original mosaics), the Ottoman Defterdar Mosque, and the plane tree under which Hippocrates allegedly taught medicine — all within a 15-minute radius.",
            el: "Το παλιό λιμάνι της Κω πλαισιώνεται από το Κάστρο των Ιπποτών — οχύρωση του 15ου αιώνα που ενσωματώνει αρχαίο μάρμαρο στα τείχη της. Από το κάστρο, η βόλτα προς την παλιά πόλη περνά από την αρχαία αγορά, το Ρωμαϊκό Ωδείο, το Casa Romana, το Οθωμανικό Τζαμί και τον Πλάτανο του Ιπποκράτη — όλα σε ακτίνα 15 λεπτών.",
          },
        },
        {
          title: {
            en: "Nisyros Day Trip: the volcano next door",
            el: "Ημερήσια εκδρομή στη Νίσυρο: το ηφαίστειο",
          },
          text: {
            en: "One of the great underrated excursions of the Greek islands. Nisyros is a volcanic island 22 km southwest of Kos, with an active caldera at its centre that visitors can walk into — standing on the grey-yellow crater floor, surrounded by steaming vents and sulphurous formations, with the medieval village of Mandraki visible on the clifftop above. Day trip boats depart from Kardamena and Kos Town, typically including 2–3 hours on the island.",
            el: "Μία από τις πιο υποτιμημένες εκδρομές των ελληνικών νησιών. Η Νίσυρος είναι ένα ηφαιστειακό νησί 22 χλμ. νοτιοδυτικά της Κω, με ενεργή καλντέρα όπου οι επισκέπτες μπορούν να περπατήσουν. Πλοία ημερήσιας εκδρομής αναχωρούν από Καρδάμαινα και Κω.",
          },
        },
        {
          title: {
            en: "Kefalos & the southwest peninsula",
            el: "Κέφαλος & νοτιοδυτική χερσόνησος",
          },
          text: {
            en: "The village of Kefalos sits on a promontory at the southwestern tip of the island, above a long arc of beach that ranks among the most visually dramatic in the Dodecanese. The area includes Agios Stefanos beach — where the ruins of an early Byzantine basilica stand directly on the sand, with the islet of Kastri and its tiny chapel visible a few hundred metres offshore.",
            el: "Το χωριό Κέφαλος βρίσκεται σε μια χερσόνησο στο νοτιοδυτικό άκρο του νησιού, πάνω από μια μακριά αψίδα παραλίας που συγκαταλέγεται στις πιο εντυπωσιακές των Δωδεκανήσων. Η περιοχή περιλαμβάνει την παραλία Αγίου Στεφάνου με τα ερείπια παλαιοχριστιανικής βασιλικής στην άμμο.",
          },
        },
        {
          title: {
            en: "Zia: the mountain village at golden hour",
            el: "Ζιά: το ορεινό χωριό τη χρυσή ώρα",
          },
          text: {
            en: "Zia is a small village on the slopes of Mount Dikaios — the only significant elevation on an otherwise flat island — and has become famous specifically for its sunset views over the western coast and the islands of Kalymnos and Pserimos. The view is genuinely excellent and the tavernas are competent, but arrive by 18:00 in summer to secure a table.",
            el: "Η Ζιά είναι ένα μικρό χωριό στις πλαγιές του Όρους Δίκαιος — η μόνη σημαντική υψομετρική διαφορά σε ένα κατά τα άλλα επίπεδο νησί — και έχει γίνει διάσημη για τα ηλιοβασιλέματά της. Η θέα είναι πραγματικά εξαιρετική. Φτάσε έως τις 18:00 το καλοκαίρι για να εξασφαλίσεις τραπέζι.",
          },
        },
        {
          title: {
            en: "Therme: where hot springs meet the Aegean",
            el: "Θερμά: ιαματικές πηγές στο Αιγαίο",
          },
          text: {
            en: "On the northeastern coast beyond Kos Town, geothermal springs emerge directly at the waterline and flow into the sea, creating natural warm pools in the rocks accessible for free at any time. The site is informal and atmospheric — there are no facilities, no entrance fee and no organization — but it is one of those genuinely surprising natural experiences that feels out of place on a beach holiday island. Go at dawn or dusk.",
            el: "Στη βορειοανατολική ακτή, γεωθερμικές πηγές αναβλύζουν ακριβώς στην ακτογραμμή, δημιουργώντας φυσικές ζεστές πισίνες στα βράχια, προσβάσιμες δωρεάν οποιαδήποτε στιγμή. Ο χώρος είναι ανεπίσημος και ατμοσφαιρικός — χωρίς εγκαταστάσεις, χωρίς είσοδο. Πήγαινε την αυγή ή το σούρουπο.",
          },
        },
        {
          title: {
            en: "Kalymnos Day Trip: the island of sponge divers",
            el: "Ημερήσια εκδρομή στην Κάλυμνο",
          },
          text: {
            en: "Kalymnos is 45 minutes by ferry from Kos Town and offers a completely different island character: a dramatic, mountainous landscape, a strong tradition of sponge diving (with a dedicated museum in the port town of Pothia), and a rock-climbing scene that has made the island internationally known among climbers. A day trip here adds significant texture to a Kos-based stay without requiring an overnight.",
            el: "Η Κάλυμνος απέχει 45 λεπτά με φέρι από την Κω και προσφέρει εντελώς διαφορετικό χαρακτήρα: δραματικό ορεινό τοπίο, παράδοση σπογγαλιείας (με μουσείο στην Πόθια) και σκηνή αναρρίχησης διεθνούς φήμης. Μια ημερήσια εκδρομή εδώ προσθέτει σημαντική ποικιλία χωρίς να απαιτεί διανυκτέρευση.",
          },
        },
      ],
    },
    {
      title: {
        en: "Top Beaches",
        el: "Κορυφαίες παραλίες",
      },
      layout: "list",
      alert: {
        en: "Secret: The beaches of the southwest coast — particularly around Kefalos Bay — see a fraction of the visitors that crowd Tigkaki and Marmari, yet offer equally good water quality and often better natural settings. A car or scooter is required; the reward is significant.",
        el: "Secret: Οι παραλίες της νοτιοδυτικής ακτής — ιδιαίτερα γύρω από τον κόλπο του Κεφάλου — βλέπουν ένα κλάσμα των επισκεπτών που γεμίζουν Τιγκάκι και Μαρμάρι.",
      },
      items: [
        {
          title: {
            en: "Tigkaki",
            el: "Τιγκάκι",
          },
          text: {
            en: "The most popular organized beach on the island, approximately 12 km west of Kos Town along the flat coast. Long, sandy and well-served by sun loungers, beach bars and water sports facilities. The cycle path from town makes it genuinely accessible without a vehicle. Best visited early morning or late afternoon in July–August.",
            el: "Η πιο δημοφιλής οργανωμένη παραλία του νησιού, περίπου 12 χλμ. δυτικά της πόλης. Μακριά, αμμώδης, με ξαπλώστρες, beach bars και θαλάσσια σπορ. Ο ποδηλατόδρομος την καθιστά προσβάσιμη χωρίς όχημα. Καλύτερα νωρίς το πρωί ή αργά το απόγευμα τον Ιούλιο-Αύγουστο.",
          },
        },
        {
          title: {
            en: "Marmari",
            el: "Μαρμάρι",
          },
          text: {
            en: "Adjacent to Tigkaki and with a similar character, Marmari is slightly quieter and has a long reputation for windsurfing and kitesurfing conditions. The steady Meltemi winds of July and August that frustrate other beach-goers are exactly what the windsurfing community comes for.",
            el: "Δίπλα στο Τιγκάκι, το Μαρμάρι είναι ελαφρώς πιο ήσυχο και φημίζεται για ιδανικές συνθήκες windsurfing και kitesurfing. Οι σταθεροί άνεμοι του Μελτεμιού που απογοητεύουν άλλους λουόμενους είναι ακριβώς αυτό που αναζητά η κοινότητα του windsurfing.",
          },
        },
        {
          title: {
            en: "Paradise Beach (Bubble Beach)",
            el: "Παράδεισος (Bubble Beach)",
          },
          text: {
            en: "A small, sheltered cove near Kardamena on the south coast, named for the natural CO₂ bubbles that rise from the seabed and can be felt underfoot in shallow water — another expression of the volcanic geology active across this part of the Dodecanese.",
            el: "Ένας μικρός προστατευμένος όρμος κοντά στην Καρδάμαινα στη νότια ακτή, γνωστός για τις φυσικές φυσαλίδες CO₂ που αναδύονται από τον βυθό — μια ακόμα έκφραση της ηφαιστειακής γεωλογίας των Δωδεκανήσων.",
          },
        },
        {
          title: {
            en: "Agios Stefanos (Kefalos)",
            el: "Άγιος Στέφανος (Κέφαλος)",
          },
          text: {
            en: "One of the most photogenic beach settings in the Dodecanese: white sand, pale turquoise water, the Byzantine basilica ruins on the shoreline, and the chapel islet of Kastri immediately offshore. The beach itself is calm and relatively uncrowded by Kos standards.",
            el: "Ένα από τα πιο φωτογενή τοπία παραλίας στα Δωδεκάνησα: λευκή άμμος, τιρκουάζ νερά, ερείπια βυζαντινής βασιλικής και η νησίδα Καστρί με το εκκλησάκι. Η παραλία είναι ήρεμη και σχετικά αραιοκατοικημένη για τα δεδομένα της Κω.",
          },
        },
        {
          title: {
            en: "Agios Fokas & Therme",
            el: "Άγιος Φωκάς & Θερμά",
          },
          text: {
            en: "The east coast beyond Kos Town is rockier and less organised than the western resort beaches, but Agios Fokas has a raw quality and the nearby Therme springs make the stretch genuinely unique. The combination of a swim in open water followed by a soak in the natural thermal rocks is one of the more memorable physical experiences the island offers.",
            el: "Η ανατολική ακτή είναι πιο βραχώδης και λιγότερο οργανωμένη, αλλά ο Άγιος Φωκάς έχει μια άγρια ομορφιά και οι κοντινές πηγές Θερμά κάνουν την περιοχή μοναδική. Ο συνδυασμός κολύμπι και φυσικών θερμών λουτρών είναι μια αξέχαστη εμπειρία.",
          },
        },
      ],
    },
    {
      title: {
        en: "Local food & flavours",
        el: "Τοπικό φαγητό & γεύσεις",
      },
      layout: "list",
      items: [
        {
          title: {
            en: "Kos Honey",
            el: "Μέλι Κω",
          },
          text: {
            en: "The island produces some of the finest thyme honey in the Dodecanese, shaped by the wild herbs of Mount Dikaios. It appears in everything from breakfast to dessert and is the right souvenir to take home.",
            el: "Το νησί παράγει εξαιρετικό θυμαρίσιο μέλι, διαμορφωμένο από τα άγρια βότανα του Όρους Δίκαιος. Εμφανίζεται παντού, από το πρωινό μέχρι το επιδόρπιο, και είναι το κατάλληλο σουβενίρ.",
          },
        },
        {
          title: {
            en: "Fresh Fish in Kefalos and Mastichari",
            el: "Φρέσκο ψάρι σε Κέφαλο και Μαστιχάρι",
          },
          text: {
            en: "The fishing harbors of Kefalos (southwest) and Mastichari (northwest) have tavernas where the daily catch is often displayed at the door. The cooking is simple: grilled, with olive oil and lemon.",
            el: "Τα ψαρολίμανα Κεφάλου και Μαστιχαρίου έχουν ταβέρνες όπου η ημερήσια ψαριά εκτίθεται στην πόρτα. Το μαγείρεμα είναι απλό: ψητό, με λάδι και λεμόνι.",
          },
        },
        {
          title: {
            en: "Mezes in Kos Town and Platani",
            el: "Μεζέδες στην πόλη και το Πλατάνι",
          },
          text: {
            en: "The village of Platani — between Kos Town and the Asklepion — has a small cluster of restaurants that reflect the island's Ottoman heritage with dishes rarely found elsewhere in the Dodecanese: slow-cooked meats, chickpea stews and yogurt-based preparations.",
            el: "Το Πλατάνι — μεταξύ πόλης και Ασκληπιείου — έχει μια μικρή συστάδα εστιατορίων που αντικατοπτρίζουν την οθωμανική κληρονομιά του νησιού: μαγειρευτά κρέατα, ρεβίθια και παρασκευάσματα με βάση το γιαούρτι.",
          },
        },
        {
          title: {
            en: "Loukoumades and Street Sweets",
            el: "Λουκουμάδες και γλυκά δρόμου",
          },
          text: {
            en: "The Kos Town market area near the ancient agora has several spots serving fresh loukoumades — deep-fried dough balls with honey and cinnamon — that have been the default street snack across the Dodecanese for generations.",
            el: "Η αγορά της Κω κοντά στην αρχαία αγορά έχει πολλά σημεία με φρέσκους λουκουμάδες — τηγανητές μπάλες ζύμης με μέλι και κανέλα — που είναι το παραδοσιακό σνακ των Δωδεκανήσων για γενιές.",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical Tips",
        el: "Πρακτικές Συμβουλές",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "Cycling is real here — use it",
            el: "Το ποδήλατο είναι αληθινό εδώ — χρησιμοποίησέ το",
          },
          text: {
            en: "The flat terrain and the dedicated cycle path along the north coast are a genuine logistical advantage. A bike from the town rentals costs around €5–8 per day and puts Tigkaki, Marmari and the Asklepion within reach without dealing with parking or traffic.",
            el: "Το επίπεδο έδαφος και ο ποδηλατόδρομος στη βόρεια ακτή είναι πραγματικό πλεονέκτημα. Ένα ποδήλατο από τα ενοικιαστήρια κοστίζει περίπου €5-8 την ημέρα και καθιστά Τιγκάκι, Μαρμάρι και Ασκληπιείο προσβάσιμα χωρίς παρκάρισμα ή κίνηση.",
          },
        },
        {
          title: {
            en: "Allocate one full cultural day to Kos Town",
            el: "Αφιέρωσε μια ολόκληρη πολιτιστική μέρα στην πόλη",
          },
          text: {
            en: "The Casa Romana, the agora, the Odeon, the Castle of the Knights and the plane tree area are all walkable from the port and deserve unhurried attention. Combining them with the evening harbor atmosphere gives the day a natural structure.",
            el: "Το Casa Romana, η αγορά, το Ωδείο, το Κάστρο των Ιπποτών και ο Πλάτανος είναι όλα προσβάσιμα με τα πόδια από το λιμάνι. Ο συνδυασμός τους με τη βραδινή ατμόσφαιρα δημιουργεί μια ολοκληρωμένη μέρα.",
          },
        },
        {
          title: {
            en: "Book the Nisyros day trip in advance in July and August",
            el: "Κράτησε για τη Νίσυρο εκ των προτέρων",
          },
          text: {
            en: "Boats operate daily but fill quickly. The excursion typically departs early morning and returns by late afternoon — allowing a full Kos Town evening. Check departure ports (Kos Town and Kardamena both offer options).",
            el: "Τα πλοία λειτουργούν καθημερινά αλλά γεμίζουν γρήγορα. Η εκδρομή αναχωρεί νωρίς το πρωί και επιστρέφει αργά το απόγευμα. Έλεγξε τα λιμάνια αναχώρησης (Κως και Καρδάμαινα).",
          },
        },
        {
          title: {
            en: "Rent a scooter or car for one day specifically to explore the southwest peninsula",
            el: "Νοίκιασε σκούτερ ή αυτοκίνητο για τη νοτιοδυτική χερσόνησο",
          },
          text: {
            en: "The road from the resort belt to Kefalos, Agios Stefanos and Kamari is one of the most scenic drives in the Dodecanese and reveals an island character entirely different from the organized beach corridor.",
            el: "Ο δρόμος από τη ζώνη των θέρετρων προς Κέφαλο, Άγιο Στέφανο και Καμάρι είναι από τις πιο γραφικές διαδρομές στα Δωδεκάνησα και αποκαλύπτει έναν εντελώς διαφορετικό χαρακτήρα του νησιού.",
          },
        },
        {
          title: {
            en: "The Turkish coast is visible and very close",
            el: "Η τουρκική ακτή είναι ορατή και πολύ κοντά",
          },
          text: {
            en: "The Bodrum crossing is a genuine option for those with current documentation — the port is active and the crossing is straightforward. Check entry requirements and ferry schedules close to your dates.",
            el: "Η διάβαση προς Μπόντρουμ είναι πραγματική επιλογή για όσους έχουν τα κατάλληλα έγγραφα. Το λιμάνι είναι ενεργό και η διάβαση απλή. Έλεγξε τις απαιτήσεις εισόδου και τα δρομολόγια πριν το ταξίδι σου.",
          },
        },
      ],
    },
    {
      title: {
        en: "Frequently Asked Questions",
        el: "Συχνές Ερωτήσεις",
      },
      layout: "faq",
      items: [
        {
          title: {
            en: "How many days do I need for Kos?",
            el: "Πόσες μέρες χρειάζομαι για την Κω;",
          },
          text: {
            en: "Three to four days cover the Asklepion, Kos Town, the main beaches and a day trip to Nisyros comfortably. Five to six days allow the southwest coast, a second island excursion (Kalymnos or Patmos) and a more unhurried pace throughout.",
            el: "Τρεις με τέσσερις μέρες καλύπτουν άνετα Ασκληπιείο, πόλη, παραλίες και ημερήσια εκδρομή στη Νίσυρο. Πέντε με έξι μέρες επιτρέπουν νοτιοδυτική ακτή, δεύτερη νησιωτική εκδρομή (Κάλυμνο ή Πάτμο) και πιο χαλαρό ρυθμό.",
          },
        },
        {
          title: {
            en: "Do I need a car or scooter?",
            el: "Χρειάζομαι αυτοκίνητο ή σκούτερ;",
          },
          text: {
            en: "For Kos Town and the western beach corridor, a bicycle is genuinely sufficient and more enjoyable. For the southwest (Kefalos, Agios Stefanos, Kamari) and the interior villages (Zia, Asfendiou), a car or scooter is strongly recommended.",
            el: "Για την πόλη και τον δυτικό διάδρομο παραλιών, το ποδήλατο είναι αρκετό και πιο ευχάριστο. Για τη νοτιοδυτική ακτή και τα ορεινά χωριά (Ζιά, Ασφενδιού), συνιστάται αυτοκίνητο ή σκούτερ.",
          },
        },
        {
          title: {
            en: "Is Kos good for families?",
            el: "Είναι η Κως κατάλληλη για οικογένειες;",
          },
          text: {
            en: "Yes — notably so. The flat terrain, calm sea on the western coast, organized beaches with facilities, the cycling paths, and the variety of historical sites suitable for older children make Kos one of the more family-adapted islands in the Dodecanese.",
            el: "Ναι — ξεκάθαρα. Το επίπεδο έδαφος, η ήρεμη θάλασσα στη δυτική ακτή, οι οργανωμένες παραλίες, οι ποδηλατόδρομοι και η ποικιλία ιστορικών χώρων κάνουν την Κω ένα από τα πιο οικογενειακά νησιά των Δωδεκανήσων.",
          },
        },
        {
          title: {
            en: "Can I visit Turkey from Kos?",
            el: "Μπορώ να επισκεφτώ την Τουρκία από την Κω;",
          },
          text: {
            en: "The ferry crossing to Bodrum takes approximately 45 minutes and operates regularly in summer. Entry requirements and documentation rules vary. Always check current regulations before planning this as part of your itinerary.",
            el: "Το φέρι προς Μπόντρουμ διαρκεί περίπου 45 λεπτά και λειτουργεί τακτικά το καλοκαίρι. Οι απαιτήσεις εισόδου διαφέρουν. Έλεγξε πάντα τους ισχύοντες κανονισμούς πριν το προγραμματίσεις.",
          },
        },
        {
          title: {
            en: "Is the Asklepion worth visiting?",
            el: "Αξίζει το Ασκληπιείο;",
          },
          text: {
            en: "Consistently and significantly yes — it is one of the most historically important sites in the Aegean and is not adequately crowded for most of the season. The combination of the archaeological significance, the landscape setting and the view makes it one of the genuinely rewarding cultural stops in all of Greek island travel.",
            el: "Σίγουρα ναι — είναι ένας από τους σημαντικότερους ιστορικούς χώρους του Αιγαίου και δεν είναι υπερβολικά πολυσύχναστος το μεγαλύτερο μέρος της σεζόν. Ο συνδυασμός αρχαιολογικής σημασίας, τοπίου και θέας το καθιστά έναν από τους πιο ανταποδοτικούς πολιτιστικούς προορισμούς.",
          },
        },
      ],
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Kos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Κω" },
      text: {
        en: "✕ **Kos Town centre in peak hours** — The waterfront near the castle is pleasant but the streets behind it are tourist-oriented and overprised. The real Kos is in the villages inland and along the quieter east coast.\n\n✕ **Lambi and Tigaki for authenticity** — These popular beach resorts are family-friendly but generic. The south coast (Kefalos area) has more character, better beaches, and fewer package tourists.\n\n✕ **The Castle of the Knights by midday** — The medieval castle in Kos Town is atmospheric but small and exposed. Visit at opening or late afternoon when the light through the arches is beautiful.\n\n✕ **Skipping Nisyros** — The tiny volcanic island a short ferry ride from Kos has a crater you can walk into and a village (Mandraki) that feels like time travel. It is the best half-day trip from Kos and many visitors miss it entirely.\n\n✕ **Renting a car only for the coast** — Kos's interior has olive groves, traditional villages (Zia, Asomatos, Pyli), and mountain views that the beach-focused visitors never see.\n\n💡 What nobody tells you: Kos has some of the best cycling infrastructure in the Greek islands — dedicated paths connect the main beaches and towns, and the flat terrain makes it ideal for families. You can explore more of the island by bike than by any other means.",
        el: "✕ **Κως Πόλη στην αιχμή** — Το λιμάνι είναι όμορφο αλλά οι δρόμοι πίσω είναι τουριστικοί. Η πραγματική Κως είναι στα χωριά και τη νότια ακτή.\n\n✕ **Λαμπί και Τηγάκι για αυθεντικότητα** — Οικογενειακά αλλά γενικευμένα. Κεφαλός έχει χαρακτήρα.\n\n✕ **Κάστρο Ιπποτών στο μεσημέρι** — Μικρό και εκτεθειμένο. Άνοιγμα ή αργό απόγευμα.\n\n✕ **Να παραλείψεις τη Νίσυρο** — Ηφαιστειογενές νησί με κρατήρα που μπορείς να περπατήσεις. Καλύτερο half-day trip.\n\n✕ **Αυτοκίνητο μόνο για την ακτή** — Ελαιόδεντρα, χωριά (Ζία, Ασώματος, Πύλι), βουνά.\n\n💡 Αυτό που δε σου λέει κανείς: Η Κως έχει από τα καλύτερα ποδηλατικά μονοπάτια στα ελληνικά νησιά — αφιερωμένες διαδρομές μεταξύ παραλιών και χωριών."
      }
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
      title: { en: "Best Beaches near Patras", el: "Καλύτερες Παραλίες κοντά στην Πάτρα" },
      layout: "list",
      items: [
        {
          title: { en: "Kalogria Beach", el: "Παραλία Καλογριά" },
          text: {
            en: "One of the most beautiful beaches in the Peloponnese, about 40 minutes from Patras. A long stretch of golden sand backed by the Strofylia forest — a protected wetland with rare bird species. The water is shallow and crystal-clear. Tip: arrive early on summer weekends as it fills up with Patra locals.",
            el: "Μία από τις ομορφότερες παραλίες της Πελοποννήσου, 40 λεπτά από την Πάτρα. Χρυσή άμμος με το δάσος της Στροφυλιάς. Tip: έλα νωρίς τα Σαββατοκύριακα."
          }
        },
        {
          title: { en: "Psathopyrgos", el: "Ψαθόπυργος" },
          text: {
            en: "The closest beach to Patras, just 15 minutes east. A long pebble-and-sand shore with organised sunbeds and several seaside fish tavernas. Perfect for a quick afternoon swim without a long drive.",
            el: "Η κοντινότερη παραλία στην Πάτρα, 15 λεπτά ανατολικά. Μακριά ακτή με βότσαλο και άμμο, ξαπλώστρες και ψαροταβέρνες. Ιδανική για γρήγορο απογευματινό μπάνιο."
          }
        },
        {
          title: { en: "Longos & Selianitika (Aigialeia)", el: "Λόγγος & Σελιανίτικα (Αιγιάλεια)" },
          text: {
            en: "Two attractive beach resorts about 30-40 minutes east of Patras along the Aigialeia coast. Longos has a lively seafront with cafes and restaurants; Selianitika is quieter with a long pebble beach. Tip: the coastal road from Patras to Aigio is one of the most scenic drives in the region.",
            el: "Δύο ελκυστικά παραθαλάσσια θέρετρα, 30-40 λεπτά ανατολικά. Ο Λόγγος έχει ζωντανό παραλιακό μέτωπο, η Σελιανίτικα είναι πιο ήσυχη."
          }
        },
        {
          title: { en: "Nafpaktos Beaches (Gribovo & Psani)", el: "Παραλίες Ναυπάκτου (Γριμπόβο & Ψανή)" },
          text: {
            en: "The beaches of Nafpaktos, about 25 minutes west of Patras via the Rio-Antirrio bridge. Two organised sandy beaches on either side of the Venetian harbour — Gribovo on the east and Psani on the west. The backdrop of the castle and old town makes these unusually scenic. Tip: stay for sunset and dinner in the harbour.",
            el: "Οι παραλίες της Ναυπάκτου, 25 λεπτά δυτικά. Δύο οργανωμένες αμμώδεις παραλίες εκατέρωθεν του λιμανιού. Tip: μείνε για ηλιοβασίλεμα και δείπνο."
          }
        },
        {
          title: { en: "Kourouta & Beaches of Ilia", el: "Κουρούτα & Παραλίες Ηλείας" },
          text: {
            en: "About an hour south of Patras, the coast of Ilia offers some of the longest sandy beaches in the Peloponnese. Kourouta is the most popular, with fine sand, clear water, and beach bars nearby. Further south, beaches like Spiantza and Agios Ilias are quieter. Tip: combine with a visit to Ancient Olympia — only 30 minutes inland.",
            el: "Μία ώρα νότια της Πάτρας. Η Κουρούτα είναι η πιο δημοφιλής. Συνδύασε με επίσκεψη στην Αρχαία Ολυμπία."
          }
        }
      ]
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
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Patras", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Πάτρα" },
      text: {
        en: "✕ **Staying only in the centre** — Patras's downtown is functional but not where the city's charm lives. The old town (Ano Poli) with its Ottoman houses and the castle above has the character that visitors are looking for.\n\n✕ **Skipping the wine region** — Achaia is one of Greece's oldest wine regions and the Achaia Clauss winery, founded in 1861, offers tours and tastings in a stunning setting. It is twenty minutes from the city centre and most visitors never go.\n\n✕ **The Roman Odeon as a quick stop** — This beautifully preserved theatre deserves more than a photo. If you visit in summer, check whether there are performances — watching a show in the ancient Odeon is unforgettable.\n\n✕ **Patras as just a ferry port** — Many travellers pass through Patras on their way to the Peloponnese or Italy and never stay. The city has a lively university scene, excellent fish tavernas along the harbour, and a carnival tradition (February) that rivals Rio.\n\n✕ **Ignoring the waterfront** — The long coastal promenade from the castle to the harbour is one of the best urban walks in western Greece, especially at sunset when the Gulf of Patras turns gold.\n\n💡 What nobody tells you: Patras has the best nightlife in the Peloponnese — not Mykonos-style clubs but real bars, live music venues, and a café culture that runs until 02:00. The university population keeps the city young and the summer nights alive.",
        el: "✕ **Μόνο το κέντρο** — Η Πάτρα λειτουργική αλλά η παλιά πόλη (Άνω Πόλη) με Οθωμανικά σπίτια και κάστρο έχει τον χαρακτήρα.\n\n✕ **Να παραλείψεις την περιοχή κρασιού** — Αχαΐα, από τις παλαιότερες αμπελουργικές περιοχές. Achaia Clauss 1861 — tours και γεύσεις 20 λεπτά από την πόλη.\n\n✕ **Ρωμαϊκό Ωδείο ως γρήγορο στάση** — Αξίζει παραπάνω. Θεατρικές παραστάσεις το καλοκαίρι.\n\n✕ **Πάτρα ως ferry port** — Περνούν και δεν μένουν. Αλλά έχει ζωντανή νυχτερινή ζωή, ψαροταβέρνες, καρναβάλι.\n\n✕ **Να αγνοήσεις την παραλία** — 3 χιλιόμετρα περίπατος, από το κάστρο στο λιμάνι, ειδικά στη δύση.\n\n💡 Αυτό που δε σου λέει κανείς: Η Πάτρα έχει την καλύτερη νυχτερινή ζωή στην Πελοπόννησο — μπαρ, live music, café culture μέχρι 02:00."
      }
    }
  ],
  lemnos: [
    {
      title: { en: "Why Visit Lemnos", el: "Γιατί να Επισκεφθείς τη Λήμνο" },
      layout: "numbered",
      items: [
        {
          title: { en: "Some of the best beaches in the Aegean — almost to yourself", el: "Από τις καλύτερες παραλίες του Αιγαίου — σχεδόν δικές σου" },
          text: {
            en: "Lemnos has over 30 beaches, many of them wide, sandy, and shallow. Keros, Gomati, Thanos, Plati, Katalako — the variety is exceptional. In July and August, when every other Aegean island is heaving, Lemnos beaches remain genuinely quiet.",
            el: "Η Λήμνος έχει πάνω από 30 παραλίες, οι περισσότερες φαρδιές, αμμώδεις και ρηχές. Ο Κέρος, το Γομάτι, ο Θάνος, το Πλατύ — η ποικιλία είναι εντυπωσιακή. Ακόμα και τον Αύγουστο, οι παραλίες παραμένουν ήσυχες."
          }
        },
        {
          title: { en: "Myrina is one of the finest harbour towns in northern Greece", el: "Η Μύρινα είναι από τα ωραιότερα λιμάνια της βόρειας Ελλάδας" },
          text: {
            en: "The capital has a scale and elegance that surprises first-time visitors. The neoclassical seafront, the Genoese castle above the water, the old neighbourhood of Romeikos Gialos — a town worth spending time in.",
            el: "Η πρωτεύουσα έχει κλίμακα και κομψότητα που εκπλήσσει. Το νεοκλασικό παραλιακό μέτωπο, το γενουατικό κάστρο, η γειτονιά του Ρωμέικου Γιαλού."
          }
        },
        {
          title: { en: "The food is outstanding and rooted", el: "Το φαγητό είναι εξαιρετικό και αυθεντικό" },
          text: {
            en: "Kalathaki Limnou (PDO), Muscat wine, local honey, fresh fish and seafood from the Aegean — Lemnos has a food culture built on its own land and sea.",
            el: "Καλαθάκι Λήμνου (ΠΟΠ), Μοσχάτο κρασί, τοπικό μέλι, φρέσκο ψάρι — η γαστρονομία βασίζεται στη δική της γη και θάλασσα."
          }
        },
        {
          title: { en: "History that predates most of the ancient world", el: "Ιστορία που προηγείται του αρχαίου κόσμου" },
          text: {
            en: "Poliochni is one of the oldest cities in Europe — a Bronze Age settlement from around 4000 BC. Hephaestia and the Kabeiroi sanctuary add Hellenistic and Roman layers.",
            el: "Η Πολιόχνη είναι μία από τις αρχαιότερες πόλεις της Ευρώπης (περίπου 4000 π.Χ.). Η Ηφαιστία και το Ιερό των Καβείρων προσθέτουν ελληνιστικά και ρωμαϊκά στρώματα."
          }
        },
        {
          title: { en: "It is genuinely authentic", el: "Είναι γνήσια αυθεντική" },
          text: {
            en: "No mega-resort development, no 18-30 party crowd, no souvenir shops. Lemnos still lives its own life, and visitors enter it rather than replace it.",
            el: "Χωρίς υπερ-τουριστική ανάπτυξη, χωρίς μαζικά πάρτι. Η Λήμνος ζει τη δική της ζωή."
          }
        }
      ]
    },
    {
      title: { en: "Best Time to Visit Lemnos", el: "Καλύτερη Εποχή για Επίσκεψη" },
      layout: "list",
      alert: {
        en: "Secret: Lemnos is one of the windiest islands in the Aegean. The Meltemi wind blows strong in July and August, keeping temperatures comfortable — but check conditions before planning a boat trip.",
        el: "Μυστικό: Η Λήμνος είναι από τα πιο ανεμώδη νησιά. Το Μελτέμι φυσάει δυνατά Ιούλιο–Αύγουστο, διατηρώντας άνετες θερμοκρασίες."
      },
      items: [
        {
          title: { en: "Spring (April–May)", el: "Άνοιξη (Απρίλιος–Μάιος)" },
          text: {
            en: "The landscape at its most vivid — wildflowers, migrating birds, almost no visitors. Ideal for walking, villages, and archaeology.",
            el: "Το τοπίο στο πιο ζωντανό του — αγριολούλουδα, αποδημητικά πουλιά, σχεδόν κανένας επισκέπτης."
          }
        },
        {
          title: { en: "June", el: "Ιούνιος" },
          text: {
            en: "Arguably the finest month. Warm sea, long days, the island feels alive without being crowded.",
            el: "Ίσως ο καλύτερος μήνας. Ζεστή θάλασσα, μεγάλες μέρες, ζωντανό νησί χωρίς πολυκοσμία."
          }
        },
        {
          title: { en: "July–August", el: "Ιούλιος–Αύγουστος" },
          text: {
            en: "Peak season, but Lemnos handles it better than almost any other large Greek island. Quieter beaches remain uncrowded.",
            el: "Υψηλή περίοδος, αλλά η Λήμνος το διαχειρίζεται καλύτερα από άλλα νησιά. Οι ήσυχες παραλίες παραμένουν ήσυχες."
          }
        },
        {
          title: { en: "September", el: "Σεπτέμβριος" },
          text: {
            en: "The ideal return-visit month. Warmest sea temperatures, thinning crowds, slower rhythm. Wine and food festivals often take place.",
            el: "Ιδανικός μήνας για επιστροφή. Πιο ζεστή θάλασσα, λιγότερος κόσμος, πιο αργός ρυθμός."
          }
        }
      ]
    },
    {
      title: { en: "How to Get to Lemnos", el: "Πώς να Φτάσεις στη Λήμνο" },
      layout: "grid",
      items: [
        {
          title: { en: "By air", el: "Αεροπορικώς" },
          text: {
            en: "Lemnos Airport (LXS) just outside Myrina. Regular domestic flights from Athens (50 min). Seasonal direct flights from European cities.",
            el: "Αεροδρόμιο Λήμνου (LXS) έξω από τη Μύρινα. Καθημερινές πτήσεις από Αθήνα (50 λεπτά)."
          }
        },
        {
          title: { en: "By ferry", el: "Ακτοπλοϊκώς" },
          text: {
            en: "Connected to Piraeus (14–16h), Kavala (4–5h), Thessaloniki, Lesvos, Chios. The Kavala approach to Myrina harbour is one of the great arrival moments of the Aegean.",
            el: "Συνδέεται με Πειραιά (14–16h), Καβάλα (4–5h), Θεσσαλονίκη, Λέσβο, Χίο."
          }
        },
        {
          title: { en: "Car rental", el: "Ενοικίαση αυτοκινήτου" },
          text: {
            en: "Essential for exploring the island. Lemnos is large (476 sq.km.) and its best beaches and villages are widely spread.",
            el: "Απαραίτητο. Η Λήμνος είναι μεγάλη (476 τ.χλμ.) και τα καλύτερα σημεία είναι διάσπαρτα."
          }
        }
      ]
    },
    {
      title: { en: "Myrina: The Capital", el: "Μύρινα: Η Πρωτεύουσα" },
      layout: "numbered",
      alert: {
        en: "Secret: Climb to the castle at dusk. The light on the water and the silhouette of the fortifications against the evening sky is one of the finest views in the North Aegean.",
        el: "Μυστικό: Ανέβα στο κάστρο το σούρουπο. Το φως στο νερό και η σιλουέτα των οχυρώσεων είναι μοναδική."
      },
      items: [
        {
          title: { en: "Myrina Castle", el: "Κάστρο Μύρινας" },
          text: {
            en: "A Byzantine fort extended by the Genoese in the 15th century. Free to enter, open until late in summer. Deer roam inside its walls. The view from the battlements is extraordinary.",
            el: "Βυζαντινό φρούριο με γενουατικές επεκτάσεις. Ελεύθερη είσοδος. Ελάφια ζουν μέσα στα τείχη."
          }
        },
        {
          title: { en: "Romeikos Gialos", el: "Ρωμέικος Γιαλός" },
          text: {
            en: "The old neighbourhood of Myrina. Narrow lanes, stone houses with wooden balconies, a small beach between the castle walls, and a pace of life unchanged for decades.",
            el: "Η παλιά γειτονιά της Μύρινας. Στενά σοκάκια, πέτρινα σπίτια, μικρή παραλία ανάμεσα στα τείχη."
          }
        },
        {
          title: { en: "Archaeological Museum of Myrina", el: "Αρχαιολογικό Μουσείο Μύρινας" },
          text: {
            en: "Compact but well-presented. Covers finds from Poliochni, Hephaestia, and Chloe including prehistoric jewellery, Bronze Age pottery, and Hellenistic sculptures.",
            el: "Μικρό αλλά καλά οργανωμένο. Ευρήματα από Πολιόχνη, Ηφαιστία και Χλόη."
          }
        }
      ]
    },
    {
      title: { en: "Best Beaches in Lemnos", el: "Οι Καλύτερες Παραλίες της Λήμνου" },
      layout: "list",
      alert: {
        en: "Secret: Walk to the far southern end of Keros where the dunes meet the water. Almost nobody goes there and the landscape is extraordinary.",
        el: "Μυστικό: Περπάτα στο νότιο άκρο του Κέρου όπου οι αμμοθίνες συναντούν το νερό."
      },
      items: [
        {
          title: { en: "Keros Beach", el: "Παραλία Κέρος" },
          text: {
            en: "The island's signature beach. A vast arc of sand, partially organised, partially wild. Shallow turquoise water for a long distance. International kitesurfing destination.",
            el: "Η παραλία-σήμα κατατεθέν. Απέραντη αμμουδιά, μερικώς οργανωμένη. Διεθνής προορισμός kitesurfing."
          }
        },
        {
          title: { en: "Gomati Beach", el: "Παραλία Γομάτι" },
          text: {
            en: "White sand dunes descending directly into the sea — one of the rare dune beach ecosystems in Greece. Completely undeveloped. One of the most beautiful natural beaches in the entire Aegean.",
            el: "Λευκές αμμοθίνες που κατηφορίζουν στη θάλασσα. Εντελώς ανέγγιχτη. Από τις ομορφότερες φυσικές παραλίες του Αιγαίου."
          }
        },
        {
          title: { en: "Thanos Beach", el: "Παραλία Θάνος" },
          text: {
            en: "A long sandy beach close to Myrina. Well-organised, easy to access, ideal for families.",
            el: "Μεγάλη αμμώδης παραλία κοντά στη Μύρινα. Οργανωμένη, ιδανική για οικογένειες."
          }
        },
        {
          title: { en: "Plati Beach", el: "Παραλία Πλατύ" },
          text: {
            en: "The most popular beach near the capital. Wide, sandy, gently-shelving, with good tavernas behind it.",
            el: "Η πιο δημοφιλής παραλία κοντά στη Μύρινα. Φαρδιά, αμμώδης, με ταβέρνες από πίσω."
          }
        }
      ]
    },
    {
      title: { en: "Top Attractions & Experiences", el: "Κορυφαία Αξιοθέατα & Εμπειρίες" },
      layout: "numbered",
      items: [
        {
          title: { en: "Poliochni Archaeological Site", el: "Αρχαιολογικός Χώρος Πολιόχνης" },
          text: {
            en: "One of the oldest cities in Europe, founded around 4000 BC. Predates Troy by centuries. The ruins sit on a promontory with wide sea views. Secret: Almost no one visits — go on a weekday morning.",
            el: "Μία από τις αρχαιότερες πόλεις της Ευρώπης (4000 π.Χ.). Προηγείται της Τροίας. Μυστικό: Σχεδόν κανείς δεν το επισκέπτεται."
          }
        },
        {
          title: { en: "Hephaestia & Sanctuary of the Kabeiroi", el: "Ηφαιστία & Ιερό των Καβείρων" },
          text: {
            en: "Hephaestia was Lemnos' most important ancient city — theatre carved into the hillside, agora foundations, sea views. The Kabeiroi sanctuary was a mystery cult site perched on a rocky cape. Secret: Arrive late afternoon when the light is horizontal and the site is deserted.",
            el: "Η Ηφαιστία ήταν η σημαντικότερη αρχαία πόλη. Το Ιερό των Καβείρων ήταν μυστηριακός τόπος. Μυστικό: Πηγαίνετε αργά το απόγευμα."
          }
        },
        {
          title: { en: "Kontias Village", el: "Χωριό Κοντιάς" },
          text: {
            en: "The most architecturally preserved traditional village on the island. Stone houses, a square with a kafeneion under a plane tree. Good base for exploring the southern coast.",
            el: "Το πιο καλοδιατηρημένο παραδοσιακό χωριό. Πέτρινα σπίτια, πλατεία με πλάτανο."
          }
        },
        {
          title: { en: "Katalako & the Southern Wetlands", el: "Κατάλακο & Νότιοι Υγρότοποι" },
          text: {
            en: "Lagoons, salt marshes, and low dunes — a protected Natura 2000 zone. One of the best birdwatching areas in the northern Aegean. Flamingos regularly sighted in spring and autumn.",
            el: "Λιμνοθάλασσες, αλυκές, αμμοθίνες — περιοχή Natura 2000. Φλαμίνγκο την άνοιξη και το φθινόπωρο."
          }
        }
      ]
    },
    {
      title: { en: "Food in Lemnos — What to Eat & Where", el: "Φαγητό στη Λήμνο — Τι να Φας & Πού" },
      layout: "list",
      alert: {
        en: "Secret: Ask at your accommodation for the name of the current best fish taverna in Myrina. It changes — a new one opens, an old one gets lazy — and locals always know.",
        el: "Μυστικό: Ρωτήστε στο κατάλυμά σας ποια είναι η καλύτερη ψαροταβέρνα της Μύρινας. Αλλάζει κάθε χρόνο."
      },
      items: [
        {
          title: { en: "Kalathaki Limnou (PDO)", el: "Καλαθάκι Λήμνου (ΠΟΠ)" },
          text: {
            en: "Lemnos' most celebrated product. A soft, creamy white cheese matured in small basket moulds. Mild, slightly salty. Eat as meze, fried as saganaki, or simply with olive oil and bread.",
            el: "Το πιο διάσημο προϊόν της Λήμνου. Απαλό, κρεμώδες λευκό τυρί. Ιδανικό ως μεζές ή σαγανάκι."
          }
        },
        {
          title: { en: "Muscat Wine of Lemnos (PDO)", el: "Μοσχάτο Λήμνου (ΠΟΠ)" },
          text: {
            en: "One of Greece's oldest wines — a sweet Muscat from the Muscat of Alexandria grape cultivated on the island for 2,500 years. Visit Chatzigeorgiou Estate near Kontias.",
            el: "Από τα αρχαιότερα κρασιά της Ελλάδας. Γλυκό Μοσχάτο, καλλιεργείται εδώ 2.500 χρόνια."
          }
        },
        {
          title: { en: "Fresh Seafood", el: "Φρέσκο Ψάρι" },
          text: {
            en: "The position of Lemnos in the North Aegean produces exceptional fish. The tavernas of Myrina's harbour and smaller fishing villages serve fish grilled simply over charcoal.",
            el: "Η θέση της Λήμνου στο Βόρειο Αιγαίο παράγει εξαιρετικό ψάρι. Ψητό στα κάρβουνα."
          }
        },
        {
          title: { en: "Local honey", el: "Τοπικό μέλι" },
          text: {
            en: "Thyme and wildflower honey produced on Lemnos. Available from local producers and at the Saturday market in Myrina.",
            el: "Μέλι θυμαρίσιο και βουνίσιο. Διαθέσιμο από παραγωγούς και στη λαϊκή της Μύρινας."
          }
        }
      ]
    },
    {
      title: { en: "Practical Tips", el: "Πρακτικά Tips" },
      layout: "list",
      alert: {
        en: "Secret: The Meltemi wind is strong in July–August. Eastern and southern bays are more sheltered. Plan beach days with wind direction in mind.",
        el: "Μυστικό: Οι ανατολικοί και νότιοι όρμοι είναι πιο προστατευμένοι από το Μελτέμι."
      },
      items: [
        {
          title: { en: "Rent a car from day one", el: "Νοικιάστε αυτοκίνητο από την πρώτη μέρα" },
          text: {
            en: "Lemnos is large and spread out. A car transforms the trip.",
            el: "Η Λήμνος είναι μεγάλη. Το αυτοκίνητο κάνει τη διαφορά."
          }
        },
        {
          title: { en: "Spend at least 4–5 days", el: "Αφιερώστε τουλάχιστον 4–5 μέρες" },
          text: {
            en: "One or two days barely scratch the surface. The island reveals itself gradually.",
            el: "Μία-δύο μέρες δεν φτάνουν. Το νησί αποκαλύπτεται σταδιακά."
          }
        },
        {
          title: { en: "Carry cash in villages", el: "Μετρητά στα χωριά" },
          text: {
            en: "Many smaller tavernas and shops in rural Lemnos do not take cards.",
            el: "Πολλές ταβέρνες δεν δέχονται κάρτες."
          }
        },
        {
          title: { en: "Carry water for archaeological sites", el: "Νερό για τους αρχαιολογικούς χώρους" },
          text: {
            en: "Poliochni and the Kabeiroi sanctuary are exposed with no facilities nearby.",
            el: "Η Πολιόχνη και το Ιερό των Καβείρων είναι εκτεθειμένα."
          }
        }
      ]
    },
    {
      title: { en: "FAQ — Lemnos Essentials", el: "Συχνές Ερωτήσεις" },
      layout: "faq",
      items: [
        {
          title: { en: "Is Lemnos worth visiting?", el: "Αξίζει να επισκεφθώ τη Λήμνο;" },
          text: {
            en: "Very much so. One of the most rewarding large islands for travellers who want authentic island life, exceptional beaches, and real food culture without crowds.",
            el: "Πολύ. Από τα πιο ανταποδοτικά νησιά για αυθεντική εμπειρία."
          }
        },
        {
          title: { en: "How many days do you need in Lemnos?", el: "Πόσες μέρες χρειάζονται;" },
          text: {
            en: "Minimum 4 days. 6–7 days allows a more complete exploration.",
            el: "Τουλάχιστον 4 μέρες. 6–7 για πλήρη εξερεύνηση."
          }
        },
        {
          title: { en: "Is Lemnos crowded in summer?", el: "Έχει πολύ κόσμο το καλοκαίρι;" },
          text: {
            en: "No — not by Greek island standards. Even in August, far quieter than comparable islands.",
            el: "Όχι. Ακόμα και τον Αύγουστο, πολύ πιο ήσυχα από άλλα νησιά."
          }
        },
        {
          title: { en: "Do you need a car in Lemnos?", el: "Χρειάζομαι αυτοκίνητο;" },
          text: {
            en: "Yes. The best beaches, villages, and archaeological sites are widely distributed.",
            el: "Ναι. Οι καλύτερες παραλίες είναι διάσπαρτες."
          }
        },
        {
          title: { en: "Is Lemnos good for families?", el: "Είναι κατάλληλη για οικογένειες;" },
          text: {
            en: "Yes. Shallow sandy beaches, relaxed pace, quiet roads, very safe.",
            el: "Ναι. Ρηχές αμμώδεις παραλίες, χαλαρός ρυθμός, ασφαλής."
          }
        },
        {
          title: { en: "What is Kalathaki cheese?", el: "Τι είναι το Καλαθάκι Λήμνου;" },
          text: {
            en: "A PDO soft white cheese made from sheep and goat milk in small basket moulds. Lemnos' most famous food product.",
            el: "Τυρί ΠΟΠ από πρόβειο και κατσικίσιο γάλα. Το πιο διάσημο προϊόν της Λήμνου."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Lemnos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Λήμνο" },
      text: {
        en: "✕ **Myrina beach in summer** — The capital's main beach is convenient but small and gets crowded. The better beaches (Thanos, Gomati, Evgatis) are a short drive away and significantly more impressive.\n\n✕ **Ignoring the volcanic landscape** — Lemnos has rare geological formations (Fulofego crater, the Mud Volcanoes) that most visitors skip. The Mud Volcanoes especially are bizarre and photogenic — a landscape that looks like another planet.\n\n✕ **Skipping the villages** — Lemnos has traditional inland villages (Plaka, Atsiki, Moudros) with stone houses and quiet squares that feel untouched by tourism. Most visitors stay only in Myrina or the coastal areas.\n\n✕ **Treating it as a transit stop** — Many people use Lemnos as a stepping stone between Athens and Thassos or Samothrace and never explore. The island has enough for three to four days of genuine discovery.\n\n✕ **Missing the castle at sunset** — Myrina's Venetian castle jutting into the sea is one of the most dramatic fortification settings in the Aegean. The sunset walk along the causeway to the castle is a local favourite that visitors rarely discover.\n\n💡 What nobody tells you: Lemnos has the best kite-surfing conditions in the Aegean thanks to consistent Meltemi winds, and the beach at Gomati — a vast, wild, golden sand beach with dunes — feels like a Greek version of the Atlantic coast. Almost no international visitors.",
        el: "✕ **Παραλία Μυρίνας το καλοκαίρι** — Βολική αλλά μικρή. Θάνος, Γομάτι, Ευγάτη πιο καλές.\n\n✕ **Να αγνοήσεις το ηφαιστειογενές τοπίο** — Κρατήρας Φουλοφέγκο, Πηλοηφαίστεια — σαν άλλον πλανήτη.\n\n✕ **Να παραλείψεις τα χωριά** — Πλάκα, Ατσίκι, Μούδρος με πέτρινα σπίτια, απαθή.\n\n✕ **Να το θεωρήσεις transit stop** — Αρκετά για 3-4 μέρες ανακάλυψης.\n\n✕ **Κάστρο Μυρίνας στη δύση** — Ενετικό κάστρο στη θάλασσα, από τα πιο δραματικά φρούρια. Walk στη χερσόνησο.\n\n💡 Αυτό που δε σου λέει κανείς: Η Λήμνος έχει τις καλύτερες συνθήκες kite-surfing στο Αιγαίο και η Γομάτι — άπειρη άσχημη αμμουδιά με αμμόλοφους — σαν ελληνική Ατλαντική. Σχεδόν κανένας ξένος."
      }
    }
  ],
  skiathos: [
    {
      title: { en: "Why Visit Skiathos", el: "Γιατί να Επισκεφθείς τη Σκιάθο" },
      layout: "numbered",
      items: [
        {
          title: { en: "The green landscape — genuinely unique in the Aegean", el: "Το πράσινο τοπίο — μοναδικό στο Αιγαίο" },
          text: { en: "Skiathos is the only Aegean island where pine forests grow all the way to the waterline. In July you swim in turquoise water with a forest backdrop — something you simply cannot find in the Cyclades.", el: "Η Σκιάθος είναι το μόνο νησί του Αιγαίου όπου τα πεύκα φτάνουν ως την ακτή. Το καλοκαίρι κολυμπάς σε τιρκουάζ νερά με φόντο το δάσος — κάτι που απλά δεν υπάρχει στις Κυκλάδες." }
        },
        {
          title: { en: "65 beaches packed into a small island", el: "65 παραλίες σε ένα μικρό νησί" },
          text: { en: "You can drive the main road end to end in 25 minutes, yet the island has more than sixty beaches — from the iconic pine-backed crescent of Koukounaries to the white pebble cove of Lalaria, accessible only by boat.", el: "Μπορείς να διασχίσεις τον κεντρικό δρόμο σε 25 λεπτά, κι όμως το νησί έχει πάνω από εξήντα παραλίες — από την εμβληματική Κουκουναριές μέχρι το Λαλάρια με τις λευκές βότσαλες." }
        },
        {
          title: { en: "Kastro — an abandoned cliff city", el: "Κάστρο — μια εγκαταλελειμμένη πόλη σε γκρεμό" },
          text: { en: "For four centuries, Kastro was the capital of Skiathos, perched on a dramatic northern cliff to protect against pirates. When piracy ended, the town was simply abandoned. Today its ruins and three surviving churches offer one of the most atmospheric historical sites in the Aegean.", el: "Για τέσσερις αιώνες το Κάστρο ήταν η πρωτεύουσα της Σκιάθου, πάνω σε έναν εντυπωσιακό γκρεμό. Σήμερα τα ερείπια και οι τρεις εκκλησίες που σώζονται προσφέρουν έναν από τους πιο ατμοσφαιρικούς ιστορικούς χώρους του Αιγαίου." }
        },
        {
          title: { en: "Nightlife that surprises everyone", el: "Νυχτερινή ζωή που εκπλήσσει" },
          text: { en: "Papadiamanti Street transforms into one of the most vibrant stretches of bars and live music in the Sporades. More relaxed than Mykonos — no €18 cocktails or velvet ropes — but genuinely lively and fun.", el: "Η οδός Παπαδιαμάντη μετατρέπεται σε έναν από τους πιο ζωντανούς δρόμους με μπαρ και μουσική στις Σποράδες. Πιο χαλαρό από τη Μύκονο — αλλά πραγματικά ζωντανό." }
        },
        {
          title: { en: "Easy island-hopping to Skopelos and Alonissos", el: "Εύκολο island hopping σε Σκόπελο και Αλόννησο" },
          text: { en: "Skopelos (the Mamma Mia island) is 50 minutes by ferry, Alonissos is 1.5 hours. The three Sporades islands form a natural circuit, each with its own distinct character.", el: "Η Σκόπελος είναι 50 λεπτά με το πλοίο, η Αλόννησος 1.5 ώρα. Οι τρεις Σποράδες σχηματίζουν ένα φυσικό ταξιδιωτικό τρίγωνο." }
        }
      ]
    },
    {
      title: { en: "Best Time to Visit Skiathos", el: "Καλύτερη Εποχή για τη Σκιάθο" },
      text: { en: "Skiathos has a long season and a very clear seasonal personality. Getting the timing right makes a significant difference to both the experience and the cost.", el: "Η Σκιάθος έχει μεγάλη σεζόν και ξεκάθαρη εποχική προσωπικότητα. Η σωστή επιλογή χρόνου κάνει μεγάλη διαφορά στην εμπειρία και το κόστος." },
      layout: "grid",
      items: [
        {
          title: { en: "May — Hidden Gem Month", el: "Μάιος — Κρυφό Διαμάντι" },
          text: { en: "Wildflowers everywhere, sea warming up, almost no tourists. Prices 40–50% lower than August. Some beach bars not yet open — but that is the point.", el: "Αγριολούλουδα παντού, η θάλασσα ζεσταίνεται, σχεδόν καθόλου τουρίστες. Τιμές 40-50% χαμηλότερες από τον Αύγουστο." }
        },
        {
          title: { en: "June — Best Overall", el: "Ιούνιος — Η Καλύτερη Εποχή" },
          text: { en: "Perfect: warm enough to swim all day, not yet crowded. Full services open. Long evenings. Book accommodation 2–3 weeks ahead.", el: "Ιδανικά: αρκετά ζεστά για κολύμπι όλη μέρα, χωρίς πολύ κόσμο. Όλες οι υπηρεσίες λειτουργούν." }
        },
        {
          title: { en: "July–August — Busy & Expensive", el: "Ιούλιος–Αύγουστος — Πολύς Κόσμος" },
          text: { en: "Peak season. Koukounaries packed by 10am. Prices highest. Meltemi wind can be strong. Book everything months ahead if you come now.", el: "Υψηλή περίοδος. Οι Κουκουναριές γεμίζουν από τις 10πμ. Οι υψηλότερες τιμές. Κλείστε τα πάντα μήνες πριν." }
        },
        {
          title: { en: "September — Best Kept Secret", el: "Σεπτέμβριος — Καλά Κρυμμένο Μυστικό" },
          text: { en: "Warm sea (still 25°C), far fewer people, lower prices, calmer winds. Easily the best month.", el: "Ζεστή θάλασσα (ακόμα 25°C), πολύ λιγότερος κόσμος, χαμηλότερες τιμές. Ο καλύτερος μήνας." }
        },
        {
          title: { en: "October — Quiet & Beautiful", el: "Οκτώβριος — Ήρεμος & Όμορφος" },
          text: { en: "Early October is excellent: warm sea, few crowds, lower prices, golden landscapes. Most services close after mid-October.", el: "Οι αρχές Οκτωβρίου είναι εξαιρετικές: ζεστή θάλασσα, λίγος κόσμος, χρυσό τοπίο. Οι περισσότερες υπηρεσίες κλείνουν μετά τα μέσα Οκτωβρίου." }
        }
      ]
    },
    {
      title: { en: "Best Beaches in Skiathos", el: "Οι Καλύτερες Παραλίες στη Σκιάθο" },
      text: { en: "Sixty-five beaches sounds overwhelming. In practice, about eight to ten are exceptional. Here is the honest breakdown of the best ones.", el: "Εξήντα πέντε παραλίες ακούγονται συντριπτικές. Στην πράξη, περίπου οκτώ με δέκα είναι εξαιρετικές. Ορίστε μια ειλικρινής ματιά στις καλύτερες." },
      layout: "list",
      items: [
        {
          title: { en: "Koukounaries", el: "Κουκουναριές" },
          text: { en: "The island's signature beach — a crescent of fine golden sand backed by a dense pine forest. Unique in the Aegean. Gets very busy in August; arrive before 9:30 or after 17:00. Sunbeds, taverna, bus from town.", el: "Η υπογραφή του νησιού — μια ημικυκλική παραλία με χρυσή άμμο και πυκνό πευκοδάσος. Μοναδική στο Αιγαίο. Πολύς κόσμος τον Αύγουστο." }
        },
        {
          title: { en: "Lalaria", el: "Λαλάρια" },
          text: { en: "Only reachable by boat. White marble pebbles, a natural rock arch, and water shifting from turquoise to deep blue. No facilities — bring everything. The most photogenic beach on the island.", el: "Προσβάσιμη μόνο με σκάφος. Λευκά βότσαλα, φυσική αψίδα, νερά που αλλάζουν από τιρκουάζ σε βαθύ μπλε. Η πιο φωτογενής παραλία." }
        },
        {
          title: { en: "Kastro Beach", el: "Παραλία Κάστρου" },
          text: { en: "A small pebble beach at the base of the Kastro cliff. Almost no one makes it here. A 15-minute steep path brings you to one of the most atmospherically unusual beaches in Greece.", el: "Μικρή παραλία με βότσαλο στους πρόποδες του Κάστρου. Σχεδόν κανείς δεν φτάνει ως εδώ. 15 λεπτά απότομο μονοπάτι." }
        },
        {
          title: { en: "Banana Beach", el: "Μπανάνα" },
          text: { en: "Two connected coves — Big Banana and Little Banana. Little Banana is officially a nudist beach. Big Banana has sunbeds, a beach bar, and watersports. One of the more characterful beaches on the island.", el: "Δύο κόλποι — Μεγάλη και Μικρή Μπανάνα. Η Μικρή είναι επισήμως γυμνιστική. Η Μεγάλη έχει ξαπλώστρες, beach bar και θαλάσσια σπορ." }
        },
        {
          title: { en: "Mandraki", el: "Μανδράκι" },
          text: { en: "Close to town but tucked away. Pine trees provide natural shade — rare on Greek beaches. Popular with locals and families who know to look past the more famous spots.", el: "Κοντά στην πόλη αλλά ήσυχη. Τα πεύκα προσφέρουν φυσική σκιά — σπάνιο στις ελληνικές παραλίες. Αγαπημένη των ντόπιων." }
        },
        {
          title: { en: "Tsougrias Islet", el: "Νησίδα Τσουγκριά" },
          text: { en: "A 10-minute water taxi from the old port takes you to an uninhabited islet with three beaches and extraordinary water clarity. One summer-only taverna. Best snorkelling on the trip.", el: "10 λεπτά με water taxi από το παλιό λιμάνι σε ένα ακατοίκητο νησάκι. Τρεις παραλίες, εκπληκτική διαύγεια νερού. Το καλύτερο snorkelling." }
        }
      ]
    },
    {
      title: { en: "Things to Do in Skiathos Beyond the Beach", el: "Τι να Κάνεις στη Σκιάθο Εκτός από Παραλία" },
      layout: "numbered",
      items: [
        {
          title: { en: "Visit Kastro — the abandoned cliff city", el: "Επισκέψου το Κάστρο — η εγκαταλελειμμένη πόλη" },
          text: { en: "In the 14th century, the inhabitants abandoned the coast and built a fortified town on a dramatic cliff. Kastro was home to 300 houses and 22 churches, serving as the island's capital for four centuries. Today only three churches survive, along with the stone gate and views across the northern Aegean. Access by dirt road from the north or by boat from the old port.", el: "Τον 14ο αιώνα, οι κάτοικοι εγκατέλειψαν την ακτή και έχτισαν οχυρωμένη πόλη σε έναν γκρεμό. Το Κάστρο είχε 300 σπίτια και 22 εκκλησίες. Πρόσβαση από τον βορρά ή με σκάφος." }
        },
        {
          title: { en: "Evangelistria Monastery — where the Greek flag was born", el: "Μονή Ευαγγελίστριας — γενέτειρα της ελληνικής σημαίας" },
          text: { en: "Set in a pine forest in the centre of the island, this monastery holds a special place in Greek history: in 1807, the first Greek flag was raised here before the War of Independence. The church interior is beautifully preserved, and the forest walk to reach it is one of the best short hikes on the island.", el: "Σε ένα πευκοδάσος στο κέντρο του νησιού, εδώ υψώθηκε η πρώτη ελληνική σημαία το 1807. Η εκκλησία είναι όμορφα διατηρημένη και η διαδρομή μέσα στο δάσος είναι υπέροχη." }
        },
        {
          title: { en: "Papadiamantis House Museum", el: "Οικία Παπαδιαμάντη" },
          text: { en: "Alexandros Papadiamantis — the father of modern Greek literature — was born here. His two-room stone house is preserved with original furniture, his writing desk, and first editions. A 20-minute visit, almost free of charge, and deeply moving.", el: "Ο Αλέξανδρος Παπαδιαμάντης — ο πατέρας της νεοελληνικής λογοτεχνίας — γεννήθηκε εδώ. Το δίχωρο πέτρινο σπίτι διατηρείται αυθεντικό." }
        },
        {
          title: { en: "Boat trip to Skopelos (Mamma Mia island)", el: "Εκδρομή στη Σκόπελο (το νησί του Mamma Mia)" },
          text: { en: "A 50-minute ferry ride takes you to Skopelos, where the 2008 film Mamma Mia! was shot. The Agios Ioannis chapel on the cliff (203 steps up) is genuinely spectacular. Skopelos Town is more architecturally interesting than Skiathos Town.", el: "50 λεπτά με το πλοίο στη Σκόπελο, όπου γυρίστηκε το Mamma Mia! Η εκκλησία του Αγίου Ιωάννη (203 σκαλοπάτια) είναι εντυπωσιακή." }
        },
        {
          title: { en: "Bourtzi — the forgotten fortress", el: "Μπούρτζι — το ξεχασμένο φρούριο" },
          text: { en: "A small Venetian fortress on a wooded peninsula, 5 minutes' walk from the harbour. Almost no one visits it. Free, open, with pine trees inside the walls, a small open-air theatre, and one of the best views of the old town. Go at sunset.", el: "Ένα μικρό βενετσιάνικο φρούριο σε μια δασωμένη χερσόνησο, 5 λεπτά από το λιμάνι. Δωρεάν, με υπέροχη θέα. Πήγαινε το ηλιοβασίλεμα." }
        },
        {
          title: { en: "Explore the north coast by scooter", el: "Εξερεύνησε τη βόρεια ακτή με σκούτερ" },
          text: { en: "Renting a scooter (€20–30/day) and spending half a day on the north coast is the most rewarding independent activity. The unpaved road passes through pine forest with views of the uninhabited northern Sporades. Beaches like Kehria and Eleni are quiet, raw, and genuinely remote-feeling.", el: "Νοίκιασε ένα σκούτερ (€20-30/ημέρα) και αφιέρωσε μισή μέρα στη βόρεια ακτή. Ο χωματόδρομος περνά μέσα από πευκοδάσος. Οι παραλίες Κεχριά και Ελένη είναι ήσυχες." }
        }
      ]
    },
    {
      title: { en: "Food & Nightlife in Skiathos", el: "Φαγητό & Νυχτερινή Ζωή στη Σκιάθο" },
      layout: "list",
      items: [
        {
          title: { en: "Seafood at the old port", el: "Θαλασσινά στο παλιό λιμάνι" },
          text: { en: "The small harbour area near the ferry terminal has simpler, fresher fish tavernas at lower prices than the main waterfront. Octopus, grilled sea bream, and lobster pasta (astakomanestro) when available.", el: "Η μικρή μαρίνα κοντά στο τέρμα των πλοίων έχει πιο απλές, φρέσκες ψαροταβέρνες. Χταπόδι, τσιπούρα και αστακομάναστρο." }
        },
        {
          title: { en: "Walk inland from the waterfront", el: "Περπάτα προς τα μέσα" },
          text: { en: "The restaurants facing the sea in the old port are almost uniformly overpriced. The good tavernas are 2–3 streets inland. Lower prices, better food, and a more authentic atmosphere.", el: "Τα εστιατόρια που βλέπουν στη θάλασσα είναι σχεδόν πάντα ακριβά. Οι καλές ταβέρνες είναι 2-3 δρόμους προς τα μέσα." }
        },
        {
          title: { en: "Bougatsa for breakfast", el: "Μπουγάτσα για πρωινό" },
          text: { en: "Skiathos bakeries on Papadiamanti Street serve bougatsa — custard-filled phyllo pastry — that beats any hotel breakfast. Grab one and eat it on the harbour wall.", el: "Τα ζαχαροπλαστεία στην οδό Παπαδιαμάντη σερβίρουν μπουγάτσα — καλύτερη από κάθε πρωινό ξενοδοχείου." }
        },
        {
          title: { en: "Nightlife on Papadiamanti Street", el: "Νυχτερινή ζωή στην οδό Παπαδιαμάντη" },
          text: { en: "From about 22:00 onwards, this street becomes a river of people. Bars, small clubs, live music. More relaxed than Mykonos — no €18 cocktails — but genuinely lively and fun.", el: "Από τις 22:00, αυτός ο δρόμος γεμίζει με κόσμο. Μπαρ, μικρά κλαμπ, ζωντανή μουσική. Πιο χαλαρά από τη Μύκονο." }
        },
        {
          title: { en: "Calmer drinks at Bourtzi", el: "Πιο ήσυχα ποτά στο Μπούρτζι" },
          text: { en: "For actual conversation, the small bars around the Bourtzi and the waterfront near the old port have a better atmosphere — quieter, better views, and the same drinks at lower prices.", el: "Για ήσυχη κουβέντα, τα μικρά μπαρ γύρω από το Μπούρτζι έχουν καλύτερη ατμόσφαιρα — πιο ήσυχα, καλύτερη θέα και χαμηλότερες τιμές." }
        }
      ]
    },
    {
      title: { en: "How to Get to Skiathos & Get Around", el: "Πώς να Φτάσεις στη Σκιάθο & Πώς να Μετακινηθείς" },
      layout: "grid",
      items: [
        {
          title: { en: "By air", el: "Αεροπορικώς" },
          text: { en: "Skiathos Airport (JSI) receives direct flights from Athens (45 min, multiple daily) and direct charters from the UK, Germany, Netherlands, and Scandinavia (April–October). The airport is 2km from town — a €6 taxi or 10-minute walk.", el: "Το αεροδρόμιο Σκιάθου (JSI) έχει πτήσεις από Αθήνα (45 λεπτά) και απευθείας ναυλωμένες πτήσεις από Ευρώπη. 2χλμ. από την πόλη." }
        },
        {
          title: { en: "By ferry", el: "Ακτοπλοϊκώς" },
          text: { en: "Year-round ferry service from Volos (3–4 hours) and Agios Konstantinos (3.5 hours). In summer, Flying Dolphin hydrofoils from Volos take 1.5 hours. Both ports connect to Athens by KTEL bus.", el: "Ακτοπλοϊκή σύνδεση όλο τον χρόνο από Βόλο (3-4 ώρες) και Άγιο Κωνσταντίνο (3.5 ώρες). Το καλοκαίρι Flying Dolphins από Βόλο σε 1.5 ώρα." }
        },
        {
          title: { en: "By bus", el: "Με λεωφορείο" },
          text: { en: "The south-coast bus (line 1) stops at 26 beaches — €2 per ride, every 20 minutes in summer. You can hop on and off all day. Covers all major south-coast beaches.", el: "Το λεωφορείο της νότιας ακτής (γραμμή 1) σταματά σε 26 παραλίες — €2 ανά διαδρομή, κάθε 20 λεπτά το καλοκαίρι." }
        },
        {
          title: { en: "Scooter or quad rental", el: "Ενοικίαση σκούτερ ή quad" },
          text: { en: "€18–28 per day for a 50cc scooter (no licence required for EU visitors). Essential for the north coast, Kastro, and forest interior. Quad bikes (€30–40/day) are better on unpaved roads.", el: "€18-28/ημέρα για σκούτερ 50cc. Απαραίτητο για τη βόρεια ακτή και το Κάστρο. Τα quad (€30-40/ημέρα) είναι καλύτερα σε χωματόδρομους." }
        },
        {
          title: { en: "Water taxis", el: "Water taxis" },
          text: { en: "From the old port to Tsougrias (€8–10 return), Lalaria (€15–20 combined with caves tour). Prices posted on a board at the departure point — pay only what the board says.", el: "Από το παλιό λιμάνι για Τσουγκριά (€8-10 με επιστροφή), Λαλάρια (€15-20 με περιήγηση σπηλαίων). Τιμές αναρτημένες στο λιμάνι." }
        }
      ]
    },
    {
      title: { en: "Frequently Asked Questions About Skiathos", el: "Συχνές Ερωτήσεις για τη Σκιάθο" },
      layout: "faq",
      items: [
        {
          title: { en: "Is Skiathos worth it compared to the Cyclades?", el: "Αξίζει η Σκιάθος σε σύγκριση με τις Κυκλάδες;" },
          text: { en: "Yes — but for different reasons. Skiathos offers pine forest scenery, green landscape, and a different colour palette entirely. If you have already done Santorini and Mykonos and want something different, Skiathos is an excellent next step.", el: "Ναι — αλλά για διαφορετικούς λόγους. Η Σκιάθος προσφέρει πευκοδάση, πράσινο τοπίο και εντελώς διαφορετική παλέτα χρωμάτων." }
        },
        {
          title: { en: "How many days do you need in Skiathos?", el: "Πόσες μέρες χρειάζεσαι στη Σκιάθο;" },
          text: { en: "Four to five days is ideal. Three is enough for beaches and main sights. Fewer than three and you will spend all your time at the beach without experiencing the island properly.", el: "Τέσσερις με πέντε μέρες είναι ιδανικές. Τρεις είναι αρκετές για παραλίες και τα κυριότερα αξιοθέατα." }
        },
        {
          title: { en: "Can you visit Skiathos without a car or scooter?", el: "Μπορείς να επισκεφθείς τη Σκιάθο χωρίς αυτοκίνητο ή σκούτερ;" },
          text: { en: "Yes, for the south coast — the bus covers 26 stops. Water taxis access Tsougrias and Lalaria. But for the north coast and interior, you need your own transport. Rent a scooter for 1–2 days.", el: "Ναι, για τη νότια ακτή — το λεωφορείο καλύπτει 26 στάσεις. Αλλά για τη βόρεια ακτή χρειάζεσαι δικό σου μεταφορικό." }
        },
        {
          title: { en: "Is Skiathos good for families?", el: "Είναι η Σκιάθος κατάλληλη για οικογένειες;" },
          text: { en: "Yes, especially in June and September. Shallow waters at Koukounaries and Troulos are ideal for young children. The bus makes beach access easy. August is harder with children due to heat and crowds.", el: "Ναι, ειδικά τον Ιούνιο και τον Σεπτέμβριο. Τα ρηχά νερά στις Κουκουναριές είναι ιδανικά για μικρά παιδιά." }
        },
        {
          title: { en: "What is Skiathos like in October?", el: "Πώς είναι η Σκιάθος τον Οκτώβριο;" },
          text: { en: "Early October (first two weeks) is excellent: warm sea, few crowds, prices 40–60% lower than August. Most services close from mid-October. The landscape turns golden and the pine scent is strongest in autumn.", el: "Οι αρχές Οκτωβρίου είναι εξαιρετικές. Οι περισσότερες υπηρεσίες κλείνουν από τα μέσα Οκτωβρίου. Το τοπίο γίνεται χρυσαφί." }
        },
        {
          title: { en: "Can you island-hop from Skiathos?", el: "Μπορείς να κάνεις island hopping από τη Σκιάθο;" },
          text: { en: "Yes. Skopelos (50 min) and Alonissos (1.5 hours) are both within comfortable day-trip range. The three islands form a natural island-hopping circuit within the Sporades.", el: "Ναι. Σκόπελος (50 λεπτά) και Αλόννησος (1.5 ώρα) είναι ιδανικές για ημερήσιες εκδρομές." }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Skiathos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Σκιάθο" },
      text: {
        en: "✕ **Lalaria beach in August** — This is Skiathos's most famous beach, accessible only by boat, and in peak season the boats deliver hundreds of people to a small cove. Go on the first boat (09:00) or choose the afternoon departure when crowds thin.\n\n✕ **Skiathos Town parking** — The town's narrow streets were not designed for cars. Parking is a nightmare in summer. Use the free lots outside town and walk in — the town is compact and the walk is pleasant.\n\n✕ **Only the south coast beaches** — Skiathos has over sixty beaches and the north coast (Elios, Agios Ioannis, Koukounaries) is where the locals go. The south coast is beautiful but the north has wilder, quieter coves.\n\n✕ **Koukounaries without context** — Yes, it is one of the best beaches in the Sporades. But it is also the most crowded. Banana beach next door has the same sand and fewer people.\n\n✕ **Skipping the island's monasteries** — The Evangelistria monastery above town has spectacular views and a fascinating collection of icons and relics. The hike up is shaded and beautiful.\n\n💡 What nobody tells you: Skiathos is the smallest of the inhabited Sporades and you can see its highlights in two days. But the real pleasure is in the slow discovery — finding a tiny cove by following a goat track, watching the fishing boats at Agia Paraskevi, or having a tsipouro at the harbour in Sklithri where the old men play backgammon until midnight.",
        el: "✕ **Παραλία Λαλαρία τον Αύγουστο** — Εμβληματική αλλά προσβάσιμη μόνο με σκάφος. Τον Αύγουστο γεμίζει. Πρώτο σκάφος 09:00 ή απόγευμα.\n\n✕ **Parking Σκιάθου Πόλη** — Στενοί δρόμοι. Πάρκαρε έξω και μπες με τα πόδια.\n\n✕ **Μόνο νότια ακτή** — 60+ παραλίες. Βόρεια ακτή (Ηλιος, Αγ. Ιωάννης, Κουκουναριάς) πιο ήσυχη.\n\n✕ **Κουκουναριά χωρίς context** — Καλύτερη αλλά και πιο γεμάτη. Μπανάνα δίπλα ίδια άμμος, λιγότερο κόσμο.\n\n✕ **Να παραλείψεις τις μονές** — Ευαγγελιστρία με θέα και εικόνες. Σκιερό μονοπάτι.\n\n💡 Αυτό που δε σου λέει κανείς: Η Σκιάθος είναι η μικρότερη Σποράδων και βλέπεις τα highlights σε 2 μέρες. Αλλά η πραγματική ευχαρίστηση είναι η αργή ανακάλυψη — ένας κρυμμένος κόλπος μέσω μονοπατιού, ψάρια στο Αγία Παρασκευή, tsipouro στο Σκληθρί."
      }
    }
  ],
  skopelos: [
    {
      title: { en: "Why Visit Skopelos", el: "Γιατί να Επισκεφθείς τη Σκόπελο" },
      layout: "numbered",
      items: [
        {
          title: { en: "A landscape that genuinely earns the word 'green'", el: "Τοπίο που δικαιωματικά λέγεται 'πράσινο'" },
          text: { en: "Dense Aleppo pine forests, olive groves, plum orchards (damaskinia), and maquis scrub cover roughly 80% of the island. Skopelos' visual signature is pine forests running all the way to the water's edge, creating a landscape that feels more Ionian or Northern Greek than Cycladic. This greenery keeps the island cooler in summer and makes every coastal view look like a postcard.", el: "Πυκνά πευκοδάση Χαλεπίου πεύκης, ελαιώνες, οπωρώνες δαμάσκηνων και μακί βλάστηση καλύπτουν περίπου το 80% του νησιού. Η υπογραφή της Σκοπέλου είναι τα πεύκα που φτάνουν ως την ακτή, δημιουργώντας ένα τοπίο που θυμίζει περισσότερο Ιόνιο ή Βόρεια Ελλάδα παρά Κυκλάδες. Αυτό το πράσινο κρατά το νησί δροσερό το καλοκαίρι." }
        },
        {
          title: { en: "Skopelos Town: one of Greece's finest Choras", el: "Χώρα Σκοπέλου: Μία από τις ωραιότερες Χώρες" },
          text: { en: "The island's capital climbs steeply from the harbour in a cascade of whitewashed cubic houses, terracotta roofs, and narrow cobbled passages. At its apex, a Venetian kastro (castle) commands sweeping views across the Aegean toward Alonissos. The winding streets are lined with small shops, kafenia, and hidden plateias that reward exploration. Unlike some Greek Choras that feel frozen in time, Skopelos Town is genuinely lived-in and authentic.", el: "Η πρωτεύουσα του νησιού ανεβαίνει απόκρημνα από το λιμάνι σε μια καταρράκτη από ασβεστωμένα κυβικά σπίτια, κεραμοσκεπές και στενά καλντερίμια. Στην κορυφή, ένα βενετσιάνικο κάστρο προσφέρει πανοραμική θέα προς την Αλόννησο. Τα δαιδαλώδη σοκάκια είναι γεμάτα μικρά μαγαζιά, καφενεία και κρυφές πλατείες." }
        },
        {
          title: { en: "Beaches for every traveler", el: "Παραλίες για κάθε τύπο ταξιδιώτη" },
          text: { en: "With over 40 beaches, Skopelos offers incredible variety along its indented coastline. From family-friendly Stafylos and Agnontas with shallow waters and tavernas, to the classic wide sweep of Panormos, and the iconic Kastani made famous by Mamma Mia! — there's a cove, bay, or shore for every mood. Many beaches are backed by pine forest, so you can combine swims with shade without renting an umbrella.", el: "Με πάνω από 40 παραλίες, η Σκόπελος προσφέρει τρομερή ποικιλία. Από τον οικογενειακό Στάφυλο και τον Αγνώντα με ρηχά νερά, μέχρι τον κλασικό Πάνορμο και την εμβληματική Καστάνη του Mamma Mia! — κάθε όρμος έχει τη δική του διάθεση. Πολλές παραλίες έχουν πεύκα που φτάνουν ως την αμμουδιά." }
        },
        {
          title: { en: "Spiritual heritage & monasteries", el: "Πνευματική κληρονομιά & μοναστήρια" },
          text: { en: "Over 360 churches and chapels dot the landscape — an extraordinary number for an island of its size. The Evangelistria Monastery (17th century) is the most important, set in a pine clearing with sweeping views. Metamorfosi tou Sotiros clings to a dramatic cliffside, while the 8th-century Prodromos Monastery, hidden in a remote valley, requires a hike but rewards with Byzantine frescoes and absolute silence.", el: "Πάνω από 360 εκκλησίες και παρεκκλήσια κοσμούν το νησί — εντυπωσιακός αριθμός για το μέγεθός του. Η Μονή Ευαγγελίστριας (17ος αιώνας) είναι η σημαντικότερη, μέσα σε πευκόφυτο ξέφωτο. Η Μεταμόρφωση του Σωτήρος είναι κτισμένη σε γκρεμό, ενώ ο Πρόδρομος (8ος αιώνας) απαιτεί πεζοπορία αλλά ανταμείβει με βυζαντινές τοιχογραφίες." }
        },
        {
          title: { en: "The Skopelos plum (damaskino)", el: "Το δαμάσκηνο Σκοπέλου" },
          text: { en: "A local variety of plum cultivated on the island for centuries, the Skopelos damaskino is smaller and more aromatic than commercial plums. It appears in tarts, spoonsweets (glyko tou koutaliou), jams, spoon sweets, tsipouro, and most famously in the Skopelitiki plum pie — a filo pastry pie with plums, cheese, and honey. The harvest in late August–September is a seasonal highlight.", el: "Μια τοπική ποικιλία δαμάσκηνου που καλλιεργείται εδώ και αιώνες. Το δαμάσκηνο Σκοπέλου είναι μικρότερο και πιο αρωματικό από τα εμπορικά. Το συναντάς σε τάρτες, γλυκό του κουταλιού, μαρμελάδες, τσίπουρο, και φυσικά στη σκοπελίτικη πίτα με φύλλο, δαμάσκηνα, τυρί και μέλι." }
        },
        {
          title: { en: "Authentic, unhurried atmosphere", el: "Αυθεντική, ήρεμη ατμόσφαιρα" },
          text: { en: "Skopelos has somehow avoided the hyper-commercialisation of some other Greek islands. Yes, it gets busy in August, but the island's character remains grounded. Locals still run the tavernas, farmers sell their plums by the roadside, and life moves at a pace that encourages you to slow down. It is an island that rewards the traveller who stays a little longer.", el: "Η Σκόπελος έχει αποφύγει την υπερ-εμπορευματοποίηση άλλων νησιών. Ναι, έχει κόσμο τον Αύγουστο, αλλά ο χαρακτήρας του νησιού παραμένει αυθεντικός. Οι ντόπιοι τρέχουν ακόμα τις ταβέρνες, οι αγρότες πουλούν δαμάσκηνα στον δρόμο, και η ζωή κινείται σε ρυθμούς που σε καλούν να χαλαρώσεις." }
        },
      ]
    },
    {
      title: { en: "Best Time to Visit Skopelos", el: "Καλύτερη Εποχή για τη Σκόπελο" },
      layout: "grid",
      items: [
        { title: { en: "May–June — Ideal", el: "Μάιος–Ιούνιος — Ιδανικά" }, text: { en: "Perfect weather (24–28°C), hillsides in full bloom with wildflowers, beaches pleasantly uncrowded. Best months for hiking the island's trails and exploring monasteries without the heat. Sea temperatures are still fresh but swimmable by late May.", el: "Ιδανικός καιρός (24–28°C), ανθισμένες πλαγιές, παραλίες με λίγο κόσμο. Οι καλύτεροι μήνες για πεζοπορία και εξερεύνηση μοναστηριών χωρίς ζέστη. Η θάλασσα δροσερή αλλά κολυμπάτε από τέλη Μαΐου." } },
        { title: { en: "July–August — Peak", el: "Ιούλιος–Αύγουστος — Αιχμή" }, text: { en: "Busy, hot (30–35°C), and vibrant. Beaches get crowded by midday — arrive before 10:00 to secure a good spot. The island is fully alive with events, tavernas running at full capacity, and a lively evening atmosphere in Skopelos Town and Glossa.", el: "Πολύς κόσμος, ζέστη (30–35°C), ζωντάνια. Οι παραλίες γεμίζουν από το μεσημέρι — πήγαινε πριν τις 10:00. Το νησί είναι ζωντανό με εκδηλώσεις, ταβέρνες σε πλήρη λειτουργία και έντονη βραδινή ζωή σε Χώρα και Γλώσσα." } },
        { title: { en: "September — Best Secret", el: "Σεπτέμβριος — Το Καλύτερο Μυστικό" }, text: { en: "Warm sea (sea temperatures often exceed 25°C), fewer crowds, and the plum harvest in full swing. The island reverts to a relaxed state while still offering excellent weather. Many tavernas and hotels remain open until late September. This is when experienced travellers choose to come.", el: "Ζεστή θάλασσα (>25°C), λιγότερος κόσμος, συγκομιδή δαμάσκηνου. Το νησί επιστρέφει σε χαλαρούς ρυθμούς με εξαιρετικό καιρό. Πολλές ταβέρνες μένουν ανοιχτές ως τέλη Σεπτεμβρίου. Η εποχή που επιλέγουν οι έμπειροι ταξιδιώτες." } },
        { title: { en: "April & October — Shoulder", el: "Απρίλιος & Οκτώβριος — Ενδιάμεσα" }, text: { en: "Quiet and low-season. April brings wildflowers and Easter celebrations. October offers solitude but many facilities close by mid-month. Weather is unpredictable but can be lovely. Best for photographers, walkers, and those seeking true peace.", el: "Ήσυχα, εκτός σεζόν. Ο Απρίλιος φέρνει αγριολούλουδα και Πάσχα. Ο Οκτώβριος προσφέρει ησυχία αλλά πολλές υπηρεσίες κλείνουν ως τα μέσα του μήνα. Καιρός απρόβλεπτος αλλά όμορφος. Ιδανικά για φωτογράφους και περιπατητές." } }
      ]
    },
    {
      title: { en: "How to Get to Skopelos", el: "Πώς θα φτάσεις στη Σκόπελο" },
      layout: "grid",
      alert: {
        en: "Insider tip: The hydrofoil from Skiathos is frequent and fast, but if you're travelling with a car, book the conventional ferry from Volos well in advance during peak season.",
        el: "Insider tip: Το υδροπτέρυγο από Σκιάθο είναι συχνό και γρήγορο, αλλά αν ταξιδεύεις με αυτοκίνητο, κλείσε το συμβατικό πλοίο από Βόλο νωρίς την υψηλή περίοδο."
      },
      items: [
        { title: { en: "Via Skiathos Airport (JSI)", el: "Μέσω αεροδρομίου Σκιάθου (JSI)" }, text: { en: "The most common route. Fly to Skiathos from Athens, Thessaloniki, or European destinations (seasonal charters), then take a 40–50 minute hydrofoil to Skopelos Town. Hydrofoils run multiple times daily in summer. Check Flying Dolphin or SeaJets schedules.", el: "Το πιο συνηθισμένο. Πτήση για Σκιάθο από Αθήνα, Θεσσαλονίκη ή Ευρώπη (εποχικές πτήσεις), μετά 40-50 λεπτά με υδροπτέρυγο για Σκόπελο. Δρομολόγια καθημερινά το καλοκαίρι." } },
        { title: { en: "From Volos (mainland port)", el: "Από τον Βόλο (ηπειρωτικό λιμάνι)" }, text: { en: "Volos is the main departure point for Skopelos. Conventional ferries take about 3 hours and carry vehicles. Hydrofoils take 90 minutes. Multiple daily departures in summer. Volos is easily reached by train or bus from Athens (4–5 hours).", el: "Ο Βόλος είναι το κύριο λιμάνι αναχώρησης. Τα συμβατικά πλοία κάνουν περίπου 3 ώρες και μεταφέρουν οχήματα. Τα υδροπτέρυγα κάνουν 90 λεπτά. Πολλά δρομολόγια καθημερινά το καλοκαίρι." } },
        { title: { en: "From Agios Konstantinos", el: "Από τον Άγιο Κωνσταντίνο" }, text: { en: "An alternative mainland port, closer to Athens than Volos. Ferries and hydrofoils connect to Skopelos (via Skiathos or direct) in about 2.5–3 hours. This can save driving time if coming from southern Greece or Athens Airport.", el: "Εναλλακτικό λιμάνι, πιο κοντά στην Αθήνα από τον Βόλο. Πλοία συνδέονται με Σκόπελο (μέσω Σκιάθου ή απευθείας) σε 2.5-3 ώρες. Βολικό αν έρχεστε από Αθήνα ή το αεροδρόμιο." } },
        { title: { en: "From Thessaloniki", el: "Από τη Θεσσαλονίκη" }, text: { en: "Thessaloniki Airport (SKG) has more flight options. From there, drive or take a KTEL bus to Volos (2.5 hours) and connect to the ferry. Alternatively, fly to Skiathos from Thessaloniki and take the hydrofoil.", el: "Το αεροδρόμιο Θεσσαλονίκης (SKG) έχει περισσότερες πτήσεις. Από εκεί, οδηγήστε ή πάρτε ΚΤΕΛ για Βόλο (2.5 ώρες) και μετά πλοίο. Εναλλακτικά, πτήση από Θεσσαλονίκη για Σκιάθο και μετά υδροπτέρυγο." } },
        { title: { en: "Getting around on the island", el: "Μετακινήσεις στο νησί" }, text: { en: "Buses run frequently between Skopelos Town, Glossa, and major beaches in summer. Car or scooter rental gives you the most freedom — roads are winding but scenic. Taxis are available but limited in remote areas. Many visitors rely on a combination of bus + rental for beach days.", el: "Λεωφορεία συνδέουν Χώρα, Γλώσσα και μεγάλες παραλίες το καλοκαίρι. Ενοικίαση αυτοκινήτου ή μηχανής δίνει ελευθερία — οι δρόμοι είναι στριφογυριστοί αλλά γραφικοί. Ταξί υπάρχουν αλλά περιορισμένα." } }
      ]
    },
    {
      title: { en: "Top Attractions in Skopelos", el: "Κορυφαία Αξιοθέατα στη Σκόπελο" },
      layout: "numbered",
      items: [
        { title: { en: "Skopelos Town (Chora)", el: "Χώρα Σκοπέλου" }, text: { en: "The island's capital is a dense maze of whitewashed cubic houses climbing steeply from the harbour to the Venetian kastro. Lose yourself in the narrow streets, discover hidden plateias, visit the small Folklore Museum, and walk up to the castle for panoramic views toward Alonissos. The entire upper town is a declared preserved settlement.", el: "Η πρωτεύουσα είναι ένας πυκνός λαβύρινθος από ασβεστωμένα σπίτια που ανεβαίνουν από το λιμάνι στο βενετσιάνικο κάστρο. Χαθείτε στα σοκάκια, ανακαλύψτε κρυφές πλατείες, επισκεφθείτε το Λαογραφικό Μουσείο και ανεβείτε στο κάστρο για πανοραμική θέα." } },
        { title: { en: "Agios Ioannis Chapel", el: "Παρεκκλήσι Αγίου Ιωάννη" }, text: { en: "The iconic Mamma Mia! wedding chapel perched on a dramatic rocky outcrop above the sea. Climb approximately 200 steps (the descent is steeper than it looks) for a view that made cinematic history. Best visited early morning or late afternoon to avoid crowds and heat. Combine with a swim at the small pebble beach below.", el: "Το εμβληματικό εκκλησάκι του Mamma Mia! πάνω σε έναν εντυπωσιακό βράχο πάνω από τη θάλασσα. Περίπου 200 σκαλιά για θέα που έγινε κινηματογραφική ιστορία. Καλύτερα νωρίς το πρωί ή αργά το απόγευμα. Συνδυάστε με βουτιά στην από κάτω παραλία." } },
        { title: { en: "Evangelistria Monastery", el: "Μονή Ευαγγελίστριας" }, text: { en: "The largest and most important monastery on Skopelos, built in the 17th century. Set in a pine clearing about 3 km from Skopelos Town, it houses a revered icon of the Annunciation and offers pine-framed views of the Aegean. The monastery complex includes an interesting small museum of ecclesiastical artifacts.", el: "Το μεγαλύτερο και σημαντικότερο μοναστήρι της Σκοπέλου, 17ου αιώνα. Μέσα σε πευκόφυτο ξέφωτο 3 χλμ από τη Χώρα, φιλοξενεί μια σεβάσμια εικόνα του Ευαγγελισμού και προσφέρει θέα στο Αιγαίο. Περιλαμβάνει μικρό μουσείο εκκλησιαστικών κειμηλίων." } },
        { title: { en: "Glossa Village", el: "Γλώσσα" }, text: { en: "The second-largest settlement on the island, perched on the northwestern coast. Glossa is less polished than Skopelos Town but equally charming, with a plateia shaded by a giant plane tree, stone houses, and tavernas serving excellent local food. Walk down to the small port of Loutraki for a swim and ouzo by the water.", el: "Ο δεύτερος μεγαλύτερος οικισμός, στη βορειοδυτική ακτή. Η Γλώσσα είναι λιγότερο επιμελημένη από τη Χώρα αλλά εξίσου γοητευτική, με πλατεία κάτω από τεράστιο πλάτανο, πέτρινα σπίτια και ταβέρνες. Κατεβείτε στο Λουτράκι για βουτιά και ούζο." } },
        { title: { en: "Prodromos & Metamorfosi Monasteries", el: "Μονές Προδρόμου & Μεταμόρφωσης" }, text: { en: "Two of the oldest monasteries on Skopelos, each in a dramatic setting. Prodromos dates to the 8th century and is tucked in a remote valley accessible only by a hiking trail. Metamorfosi tou Sotiros clings to a cliffside high above the sea. Both require effort to reach but offer a profound sense of isolation and history.", el: "Δύο από τα παλαιότερα μοναστήρια, το καθένα σε εντυπωσιακή τοποθεσία. Ο Πρόδρομος (8ος αιώνας) είναι κρυμμένος σε απομακρυσμένη κοιλάδα, προσβάσιμος μόνο με πεζοπορία. Η Μεταμόρφωση είναι χτισμένη σε γκρεμό πάνω από τη θάλασσα. Και τα δύο ανταμείβουν την προσπάθεια." } },
        { title: { en: "Archaeological & Folklore Museums", el: "Αρχαιολογικό & Λαογραφικό Μουσείο" }, text: { en: "Skopelos Town's small but well-curated Archaeological Museum displays finds from the island's ancient past, including Mycenaean pottery and Hellenistic sculptures. The Folklore Museum, housed in a restored mansion, offers a vivid glimpse of 19th-century island life with traditional costumes, tools, and household items.", el: "Το Αρχαιολογικό Μουσείο της Χώρας εκθέτει ευρήματα από τη μυκηναϊκή και ελληνιστική περίοδο. Το Λαογραφικό, σε αναπαλαιωμένο αρχοντικό, προσφέρει μια ζωντανή εικόνα της ζωής του 19ου αιώνα με παραδοσιακές φορεσιές και σκεύη." } }
      ]
    },
    {
      title: { en: "Best Beaches in Skopelos", el: "Οι Καλύτερες Παραλίες στη Σκόπελο" },
      layout: "list",
      alert: {
        en: "Secret tip: For total solitude, hike to the remote beach of Hovolo on the northeastern coast. It has no facilities, no road access, and almost nobody there — just pebbles, pines, and impossibly clear water.",
        el: "Μυστικό: Για απόλυτη μοναξιά, περπατήστε στην απομακρυσμένη παραλία Χόβολο στη βορειοανατολική ακτή. Χωρίς εγκαταστάσεις, χωρίς δρόμο, σχεδόν κανένας — μόνο βότσαλα, πεύκα και κρυστάλλινα νερά."
      },
      items: [
        { title: { en: "Panormos", el: "Πάνορμος" }, text: { en: "A wide, sheltered bay on the west coast with calm, shallow water ideal for families. Well-organized with sunbeds, umbrellas, and several good tavernas right on the beach. The surrounding pine hillsides keep it scenic. It can get busy in August but has enough space to feel comfortable.", el: "Μεγάλος, προστατευμένος κόλπος στη δυτική ακτή με ήρεμα, ρηχά νερά. Οργανωμένη με ξαπλώστρες και ταβέρνες στην παραλία. Τα πευκόφυτα βουνά γύρω την κάνουν γραφική. Έχει κόσμο τον Αύγουστο αλλά αρκετό χώρο." } },
        { title: { en: "Kastani", el: "Καστάνη" }, text: { en: "The beach that Mamma Mia! made famous — a pebbly, pine-fringed cove on the southwest coast with turquoise water. It's smaller than you might expect from the film, but the setting is genuinely beautiful. Arrive early (before 10:00) to claim a spot, as it fills quickly. Has a beach bar and limited sunbeds.", el: "Η παραλία που έκανε διάσημη το Mamma Mia! — ένας κολπίσκος με βότσαλο, πεύκα και τιρκουάζ νερά. Είναι μικρότερη απ' όσο περιμένετε, αλλά πανέμορφη. Ελάτε νωρίς (<10:00) γιατί γεμίζει γρήγορα." } },
        { title: { en: "Stafylos & Velanio", el: "Στάφυλος & Βελανιό" }, text: { en: "Twin beaches just south of Skopelos Town. Stafylos is the larger, organized beach with shallow water and a popular beach bar — great for families. Velanio is the adjoining cove to the south, reached by a short path, and is unofficially naturist-friendly. Both have crystal-clear water and are a short drive from the capital.", el: "Δίδυμες παραλίες νότια της Χώρας. Ο Στάφυλος είναι μεγάλος, οργανωμένος με beach bar, ιδανικός για οικογένειες. Το Βελανιό είναι ο διπλανός όρμος, με μονοπάτι, ανεπίσημα για γυμνιστές. Και οι δύο με κρυστάλλινα νερά." } },
        { title: { en: "Limnonari", el: "Λιμνονάρι" }, text: { en: "A narrow, sheltered sandy bay on the southern coast with exceptionally clear water and a steep pine-covered hillside behind it. Partly organized with a taverna. The water deepens quickly, making it good for snorkeling. One of the most photographed beaches on the island for good reason.", el: "Στενός, προστατευμένος αμμώδης κόλπος στη νότια ακτή με εξαιρετικά καθαρά νερά και απότομη πευκόφυτη πλαγιά. Μερικώς οργανωμένη με ταβέρνα. Βαθαίνει γρήγορα — καλή για snorkeling." } },
        { title: { en: "Agnontas", el: "Αγνώντας" }, text: { en: "A small, picturesque fishing harbour on the southeastern coast that doubles as a beach. The water is calm and shallow, protected by the cove. The real draw here is the cluster of tavernas right by the water — this is arguably the best spot on the island for a leisurely fish lunch. The beach itself is pebbly but comfortable.", el: "Μικρό γραφικό ψαρολίμανο στη νοτιοανατολική ακτή. Τα νερά είναι ήρεμα και ρηχά. Το μεγάλο ατού είναι οι ταβέρνες δίπλα στο νερό — ίσως το καλύτερο σημείο για ψάρι στο νησί." } },
        { title: { en: "Glysteri (Glyfoneri)", el: "Γλυστέρι (Γλυφονέρι)" }, text: { en: "A quieter, less-developed beach on the east coast with a mix of sand and pebbles. The water is exceptionally clear and the setting is wonderfully peaceful, backed by green hills. There is a small cantina in season but otherwise it's relatively unspoiled. Popular with those who have rented cars and want to escape the crowds.", el: "Πιο ήσυχη, λιγότερο ανεπτυγμένη παραλία στην ανατολική ακτή, με άμμο και βότσαλο. Εξαιρετικά καθαρά νερά και ήρεμο τοπίο, με πράσινους λόφους. Μικρό καντινάκι τη σεζόν, κατά τα άλλα ανέγγιχτη." } }
      ]
    },
    {
      title: { en: "Local Food & Drink on Skopelos", el: "Τοπικό Φαγητό & Ποτό στη Σκόπελο" },
      layout: "list",
      items: [
        { title: { en: "Skopelos Plum (Damaskino)", el: "Δαμάσκηνο Σκοπέλου" }, text: { en: "The island's signature product — a small, intensely flavoured local plum variety. Eaten fresh in season, dried for winter, or transformed into jams, spoon sweets, tarts, and distilled into plum tsipouro (a local pomace brandy). You'll see plum products everywhere, and they make excellent gifts.", el: "Το σήμα κατατεθέν του νησιού — μικρό, έντονα αρωματικό δαμάσκηνο. Φρέσκο την εποχή του, αποξηραμένο ή σε μαρμελάδες, τάρτες, γλυκό κουταλιού, και τσίπουρο. Τα προϊόντα δαμάσκηνου είναι παντού και κάνουν εξαιρετικά δώρα." } },
        { title: { en: "Skopelitiki Plum Pie", el: "Σκοπελίτικη Πίτα" }, text: { en: "The most famous local dish — a savoury-sweet pie made with handmade filo pastry, local plums, soft cheese (usually myzithra or feta), and a drizzle of honey. The combination of sweet plums, salty cheese, and crispy filo is unforgettable. Every taverna has its own version, and they are not all equal — ask locals for their favourite.", el: "Το πιο διάσημο τοπικό πιάτο — αλμυρό-γλυκιά πίτα με φύλλο, δαμάσκηνα, μαλακό τυρί (μυζήθρα ή φέτα) και μέλι. Ο συνδυασμός γλυκών δαμάσκηνων, αλμυρού τυριού και τραγανόυ φύλλου είναι αξέχαστος." } },
        { title: { en: "Fresh Fish at Agnontas & Loutraki", el: "Φρέσκο Ψάρι σε Αγνώντα & Λουτράκι" }, text: { en: "The fishing harbours of Agnontas and Loutraki (below Glossa) have tavernas that serve the day's catch simply grilled with lemon and olive oil. Nothing fancy — just whatever the boats brought in that morning. Barbounia (red mullet), tsipoura (sea bream), and lavraki (sea bass) are typical. Go at lunch for the best atmosphere.", el: "Τα ψαρολίμανα Αγνώντα και Λουτρακίου έχουν ταβέρνες με φρέσκο ψάρι στα κάρβουνα. Τίποτα φανταχτερό — ό,τι έφεραν οι βάρκες το πρωί. Μπαρμπούνια, τσιπούρα, λαβράκι. Πηγαίνετε το μεσημέρι για την καλύτερη ατμόσφαιρα." } },
        { title: { en: "Local Honey & Spoon Sweets", el: "Τοπικό Μέλι & Γλυκά Κουταλιού" }, text: { en: "The pine forests and wild herbs of Skopelos produce excellent thyme honey and pine honey. Look for 'Anados' brand or ask at local producers. Spoon sweets (glyko tou koutaliou) made from plum, fig, sour cherry, or bergamot are a traditional treat — served with a glass of cold water and coffee.", el: "Τα πευκοδάση και τα βότανα της Σκοπέλου παράγουν εξαιρετικό θυμαρίσιο και πευκόμελο. Τα γλυκά του κουταλιού (δαμάσκηνο, σύκο, βύσσινο) σερβίρονται με κρύο νερό και καφέ." } },
        { title: { en: "Local Cheeses (Myzithra & Feta)", el: "Τοπικά Τυριά (Μυζήθρα & Φέτα)" }, text: { en: "Skopelos produces excellent myzithra — a soft, fresh cheese made from sheep or goat milk, often used in the plum pie. The island's feta is also noteworthy, produced from local flocks that graze on herb-rich slopes. Try both in salads, pies, or simply drizzled with local olive oil.", el: "Η Σκόπελος παράγει εξαιρετική μυζήθρα από πρόβειο ή κατσικίσιο γάλα, που χρησιμοποιείται στη σκοπελίτικη πίτα. Η φέτα του νησιού είναι επίσης αξιόλογη. Δοκιμάστε και τα δύο σε σαλάτες, πίτες ή με ελαιόλαδο." } },
        { title: { en: "Olive Oil", el: "Ελαιόλαδο" }, text: { en: "Like most Greek islands, Skopelos has its own olive oil production. The olive groves that cover parts of the island produce a fruity, medium-intensity extra virgin oil. Look for bottles marked with local provenance at delis or farm shops — it's a far cry from the mass-produced stuff.", el: "Όπως τα περισσότερα ελληνικά νησιά, η Σκόπελος έχει δική της παραγωγή ελαιόλαδου. Οι ελαιώνες παράγουν φρουτώδες, μέτριας έντασης εξαιρετικό παρθένο ελαιόλαδο. Αναζητήστε τοπικές ετικέτες σε ντελικατέσεν." } }
      ]
    },
    {
      title: { en: "Practical Tips for Skopelos", el: "Πρακτικά Tips για τη Σκόπελο" },
      layout: "numbered",
      items: [
        { title: { en: "Getting around is easiest with a vehicle", el: "Οι μετακινήσεις είναι πιο εύκολες με όχημα" }, text: { en: "While the bus network covers the main routes (Skopelos Town–Glossa, and to major beaches like Stafylos and Panormos), having a rental car or scooter gives you access to remote beaches and monasteries. Roads are winding and narrow in places — drive carefully. Book rentals well in advance for July–August.", el: "Το λεωφορείο καλύπτει κύριες διαδρομές, αλλά το αυτοκίνητο ή μηχανή σας δίνει πρόσβαση σε απομακρυσμένες παραλίες και μοναστήρια. Οι δρόμοι είναι στριφογυριστοί — οδηγήστε προσεκτικά. Κλείστε νωρίς για Ιούλιο–Αύγουστο." } },
        { title: { en: "Where to stay: Town or coast?", el: "Πού να μείνετε: Χώρα ή ακτή;" }, text: { en: "Skopelos Town offers atmosphere, restaurants, and nightlife but no beach within walking distance. For beach access, consider accommodations near Stafylos, Panormos, or Agnontas. Many visitors split their stay — a few nights in town and a few nights on a beach. Glossa is a good quieter alternative on the north end.", el: "Η Χώρα προσφέρει ατμόσφαιρα και εστιατόρια αλλά όχι παραλία με τα πόδια. Για πρόσβαση σε παραλία, μείνετε κοντά σε Στάφυλο, Πάνορμο ή Αγνώντα. Πολλοί μοιράζουν τη διαμονή τους." } },
        { title: { en: "Beach essentials: Pack wisely", el: "Απαραίτητα για την παραλία" }, text: { en: "Many Skopelos beaches are pebbly rather than sandy — bring water shoes for comfort. Some remote beaches have no facilities, so carry water, snacks, and an umbrella. A snorkel mask is worth packing; the water clarity around the island is excellent, especially at Limnonari and the rocky coves near Glysteri.", el: "Πολλές παραλίες έχουν βότσαλο — πάρτε θαλασσοπαπούτσια. Απομακρυσμένες παραλίες δεν έχουν υπηρεσίες. Η μάσκα snorkel αξίζει — η διαύγεια του νερού είναι εξαιρετική." } },
        { title: { en: "Book ahead in peak season", el: "Κλείστε νωρίς την υψηλή περίοδο" }, text: { en: "Accommodation, car rentals, and popular restaurants fill up quickly in July–August. Book at least 2–3 months ahead for August. Even in June, weekend availability can be tight. Hydrofoil tickets from Skiathos can also sell out — book online in advance via Ferryhopper or similar.", el: "Δωμάτια, ενοικιάσεις αυτοκινήτων και δημοφιλείς ταβέρνες γεμίζουν γρήγορα Ιούλιο–Αύγουστο. Κλείστε 2-3 μήνες νωρίτερα. Ακόμα και τον Ιούνιο, η διαθεσιμότητα μπορεί να είναι περιορισμένη." } },
        { title: { en: "Best souvenirs to bring home", el: "Καλύτερα αναμνηστικά" }, text: { en: "Skip the mass-produced magnets and bring back Skopelos plum products (jam, spoon sweet, tsipouro), local honey, olive oil, and handmade textiles. The Folklore Museum shop has quality crafts. Dried plums and bourekia (local pastries) travel well and make excellent gifts.", el: "Αφήστε τα μαγνητάκια και φέρτε προϊόντα δαμάσκηνου (μαρμελάδα, γλυκό κουταλιού, τσίπουρο), μέλι, ελαιόλαδο και χειροποίητα υφαντά. Οι αποξηραμένες δαμασκηνιές και μπουρέκια ταξιδεύουν καλά." } },
        { title: { en: "Internet & connectivity", el: "Διαδίκτυο & συνδεσιμότητα" }, text: { en: "Most hotels and cafés offer free Wi-Fi, but coverage can be patchy in remote areas and some beaches. If you need reliable internet, get a Greek SIM card (Cosmote or Vodafone have good coverage on the island) or ensure your EU roaming is active. Skopelos Town has the best connectivity.", el: "Τα περισσότερα ξενοδοχεία έχουν Wi-Fi, αλλά σε απομακρυσμένες περιοχές η κάλυψη είναι περιορισμένη. Για αξιόπιστο ίντερνετ, πάρτε ελληνική SIM (Cosmote ή Vodafone). Η Χώρα έχει την καλύτερη συνδεσιμότητα." } }
      ]
    },
    {
      title: { en: "FAQ — Skopelos Essentials", el: "Συχνές Ερωτήσεις για τη Σκόπελο" },
      layout: "faq",
      items: [
        {
          title: { en: "How many days do I need for Skopelos?", el: "Πόσες μέρες χρειάζονται για τη Σκόπελο;" },
          text: { en: "A minimum of 3–4 days gives you time to explore Skopelos Town, visit 2–3 beaches, and see the main monasteries. For a relaxed trip that includes hiking, multiple beach days, and day trips to Alonissos, plan for 5–7 days. Many visitors find a week is the perfect amount — long enough to slow down, short enough to leave you wanting more.", el: "Το ελάχιστο 3-4 μέρες για Χώρα, 2-3 παραλίες και μοναστήρια. Για χαλαρές διακοπές με πεζοπορίες και ημερήσια εκδρομή στην Αλόννησο, 5-7 μέρες. Μια εβδομάδα είναι ιδανική." }
        },
        {
          title: { en: "Is Skopelos expensive?", el: "Είναι ακριβή η Σκόπελος;" },
          text: { en: "Skopelos is moderately priced compared to better-known Greek islands. Accommodation ranges from €60–120/night for mid-range hotels in summer (less in shoulder season). A taverna meal with wine costs around €20–30 per person. Car rental is about €40–60/day in peak season. Overall, it offers good value — you get authentic experiences without the Mykonos/Santorini price tags.", el: "Η Σκόπελος είναι μέτριας τιμής σε σχέση με γνωστότερα νησιά. Δωμάτια €60–120/βραδιά, ταβέρνα με κρασί €20–30/άτομο. Ενοικίαση αυτοκινήτου €40–60/μέρα. Προσφέρει καλή σχέση ποιότητας-τιμής." }
        },
        {
          title: { en: "Can I visit Skopelos without a car?", el: "Μπορώ να πάω στη Σκόπελο χωρίς αυτοκίνητο;" },
          text: { en: "Yes, but with some limitations. The KTEL bus connects Skopelos Town to Glossa and several beaches (Stafylos, Panormos, Kastani) in summer. Taxis are available in town but scarce elsewhere. If you stay in Skopelos Town and take bus trips to beaches, it works. However, a car gives you much more flexibility, especially for reaching remote beaches and monasteries.", el: "Ναι, αλλά με περιορισμούς. Το ΚΤΕΛ συνδέει Χώρα-Γλώσσα και παραλίες. Αν μείνετε στη Χώρα, λειτουργεί. Αλλά αυτοκίνητο δίνει πολύ μεγαλύτερη ευελιξία." }
        },
        {
          title: { en: "Is Skopelos family-friendly?", el: "Είναι η Σκόπελος κατάλληλη για οικογένειες;" },
          text: { en: "Absolutely. Beaches like Stafylos, Panormos, and Agnontas have shallow, calm water ideal for children. The island is safe, relaxed, and less party-oriented than many alternatives. Families will appreciate the unhurried pace, affordable dining, and the variety of things to do — from beaches to monastery visits to boat trips. Just avoid the peak of August if possible.", el: "Απολύτως. Παραλίες όπως Στάφυλος, Πάνορμος και Αγνώντας έχουν ρηχά νερά. Το νησί είναι ασφαλές, χαλαρό και όχι προσανατολισμένο σε πάρτι. Αποφύγετε την αιχμή του Αυγούστου αν είναι δυνατόν." }
        },
        {
          title: { en: "When is the Skopelos plum harvest?", el: "Πότε γίνεται η συγκομιδή δαμάσκηνου;" },
          text: { en: "The damaskino harvest runs from mid-August through September, peaking in early September. This is a wonderful time to visit — the island smells of ripe fruit, farmers sell fresh plums by the roadside, and local bakeries and tavernas showcase plum-based specialties. If possible, time your visit for the first half of September to experience both the harvest and ideal beach weather.", el: "Η συγκομιδή γίνεται από μέσα Αυγούστου έως Σεπτέμβριο, με κορύφωση αρχές Σεπτεμβρίου. Υπέροχη εποχή — το νησί μυρίζει ώριμο φρούτο. Αν είναι δυνατόν, προγραμματίστε την επίσκεψή σας για το πρώτο δεκαήμερο του Σεπτεμβρίου." }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Skopelos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Σκόπελο" },
      text: {
        en: "✕ **Agios Ioannis Kastri in peak season** — The Mamma Mia chapel is Skopelos's most photographed spot, and in July-August it is a queue of people waiting for the perfect photo. Visit at sunset on a weekday or skip it entirely — the real chapel experience is better without fifty strangers.\n\n✕ **Skopelos Town as just a harbour** — The main town cascading down to the harbour is one of the prettiest in the Sporades. Walk up through the old quarter where Venetian and Cycladic architecture blend — the upper lanes are quiet and beautiful.\n\n✕ **Ignoring the south coast** — Skopelos's south coast has dramatic beaches (Milia, Hovolo, Perivoliou) that are less visited than the northern ones. The drive there through pine forests is a bonus.\n\n✕ **Rushing through in a day trip from Skiathos** — Skopelos deserves at least two nights. A day trip gives you the Instagram spot but not the forest walks, the traditional villages, or the sunset from the castle.\n\n✕ **Missing the olive and plum culture** — Skopelos has more olive trees per capita than any other Greek island, and its plum harvest (August) produces the famous Skopelian plum spoon sweet. Ask for it at any taverna.\n\n💡 What nobody tells you: Skopelos is the greenest island in the Aegean — ninety-seven percent pine forest. The best thing to do here is simply walk: follow any path into the interior and you will find ancient olive presses, hidden chapels, and silence that most Greek islands lost decades ago.",
        el: "✕ **Αγ. Ιωάννης Καστρί στην αιχμή** — Το Instagram chapel γεμίζει ουρά. Σετ για δύση σε εργάσιμο.\n\n✕ **Σκόπελος Πόλη ως μόνο λιμάνι** — Η παλιά πόλη με Ενετική και κυκλαδίτικη αρχιτεκτονική. Ανέβα στα πάνω σοκάκια.\n\n✕ **Να αγνοήσεις το νότιο τμήμα** — Μήλια, Χόβολο, Περιβόλι — λιγότερο γνωστές, πιο δραματικές.\n\n✕ **Μία μέρα από Σκιάθο** — Αξίζει 2 νύχτες. Walk, χωριά, δύση από το κάστρο.\n\n✕ **Να παραλείψεις ελιές και κορίκια** — Περισσότερες ελιές ανά κάτοικο στο Αιγαίο. Το κορίκι Σκοπέλου σε κάθε ταβέρνα.\n\n💡 Αυτό που δε σου λέει κανείς: Η Σκόπελος είναι το πιο πράσινο νησί στο Αιγαίο — 97% πεύκο. Κάνε walk σε οποιοδήποτε μονοπάτι και θα βρεις αρχαία ελαιοτριβεία, κρυφές εκκλησίες, σιωπή."
      }
    }
  ],
  kalamata: [
    {
      title: {
        en: "Why Visit Kalamata",
        el: "Γιατί να Επισκεφθείς την Καλαμάτα",
      },
      layout: "numbered",
      items: [
        {
          title: { en: "It's a real city, not just a resort", el: "Είναι αληθινή πόλη, όχι απλώς θέρετρο" },
          text: {
            en: "Kalamata has urban texture — a Saturday market, neighbourhood kafenia, local tavernas where nobody is catering to tourists. That everyday quality is increasingly rare and genuinely enjoyable.",
            el: "Η Καλαμάτα έχει αστική υφή — λαϊκή αγορά, γειτονιές με καφενεία, τοπικές ταβέρνες. Αυτή η καθημερινή αυθεντικότητα είναι όλο και πιο σπάνια."
          }
        },
        {
          title: { en: "The beach is exceptional and central", el: "Η παραλία είναι εξαιρετική και κεντρική" },
          text: {
            en: "The main Kalamata beach runs almost 7km, is clean, organised, and begins within walking distance of the Old Town. You don't need a car to reach a very good beach.",
            el: "Η παραλία της Καλαμάτας εκτείνεται σχεδόν 7 χλμ., είναι καθαρή, οργανωμένη και ξεκινά σε απόσταση περπατήματος από την Παλιά Πόλη."
          }
        },
        {
          title: { en: "Best base for the southern Peloponnese", el: "Η καλύτερη βάση για τη νότια Πελοπόννησο" },
          text: {
            en: "Costa Navarino, Pylos, the Mani, Ancient Messene, Mystras — all within striking distance. No other city in the region gives you this range.",
            el: "Costa Navarino, Πύλος, Μάνη, Αρχαία Μεσσήνη, Μυστράς — όλα σε κοντινή απόσταση. Καμία άλλη πόλη δεν προσφέρει αυτή την ποικιλία."
          }
        },
        {
          title: { en: "The food is serious", el: "Το φαγητό είναι σοβαρή υπόθεση" },
          text: {
            en: "Kalamata olives, Kalamata olive oil, figs, mountain herbs, fresh fish from the Messenian Gulf — the local food culture is rooted and unfussy.",
            el: "Ελιές Καλαμάτας, ελαιόλαδο, σύκα, βότανα του βουνού, φρέσκο ψάρι — η τοπική γαστρονομία είναι αυθεντική."
          }
        },
        {
          title: { en: "It avoids the island tourist trap", el: "Δεν έχει την τουριστική παγίδα των νησιών" },
          text: {
            en: "No overcrowding, no inflated prices, no shops selling the same fridge magnets. The city moves at a Greek pace and doesn't perform for visitors.",
            el: "Χωρίς υπερβολικό συνωστισμό, χωρίς φουσκωμένες τιμές. Η πόλη κινείται με ελληνικό ρυθμό."
          }
        }
      ]
    },
    {
      title: { en: "Beaches in Kalamata & Messinia", el: "Παραλίες στην Καλαμάτα & τη Μεσσηνία" },
      layout: "list",
      items: [
        {
          title: { en: "Kalamata Beach (City Beach)", el: "Παραλία Καλαμάτας" },
          text: {
            en: "One of the longest urban beaches in Greece, stretching nearly 7km along the Messenian Gulf. Fine dark-grey sand, clean organised sections, sunbeds, and beach bars. The northern end is quieter; the southern stretches near the marina have more amenities. Tip: the promenade is perfect for an evening stroll or bike ride.",
            el: "Μία από τις μεγαλύτερες αστικές παραλίες στην Ελλάδα, σχεδόν 7χλμ. Σκούρα γκρι άμμος, οργανωμένες υποδομές. Tip: ο πεζόδρομος είναι ιδανικός για βραδινή βόλτα."
          }
        },
        {
          title: { en: "Voidokilia Beach", el: "Παραλία Βοϊδοκοιλιά" },
          text: {
            en: "Arguably the most famous beach in Messinia and one of the most photographed in Greece. A perfect horseshoe of fine white sand enclosing a lagoon, backed by dunes and the Gialova Lagoon wetlands. Protected by the Natura 2000 network. Tip: swim in the lagoon side — it is warmer, shallower, and equally beautiful.",
            el: "Η πιο διάσημη παραλία της Μεσσηνίας. Τέλειο πεταλόσχημο τόξο λευκής άμμου. Tip: κολύμπησε στη λιμνοθάλασσα — είναι πιο ζεστή."
          }
        },
        {
          title: { en: "Stoupa", el: "Στούπα" },
          text: {
            en: "A popular beach resort in the Mani peninsula, about 40 minutes from Kalamata. Two sandy beaches — the main Stoupa beach and the quieter Kalogria — with crystal-clear water, tavernas, and a relaxed atmosphere. Tip: the sunset from the hill behind Stoupa is one of the best in the Peloponnese.",
            el: "Δημοφιλές παραθαλάσσιο θέρετρο στη Μάνη, 40 λεπτά από την Καλαμάτα. Δύο αμμώδεις παραλίες. Tip: το ηλιοβασίλεμα από τον λόφο είναι μαγευτικό."
          }
        },
        {
          title: { en: "Finikounda", el: "Φοινικούντα" },
          text: {
            en: "A charming coastal village in southern Messinia with a beautiful long sandy beach protected by the island of Schiza. Calm, shallow water ideal for families. Good tavernas along the waterfront. Tip: take a boat trip to the nearby uninhabited island of Sapienza.",
            el: "Γραφικό παραθαλάσσιο χωριό στη νότια Μεσσηνία με μεγάλη αμμώδη παραλία. Tip: κάνε εκδρομή με σκάφος στη Σαπιέντζα."
          }
        },
        {
          title: { en: "Costa Navarino Beaches", el: "Παραλίες Costa Navarino" },
          text: {
            en: "The beaches within the Costa Navarino resort complex — including the main Navarino Dunes beach and the more secluded Romanos beach — are exceptionally well-maintained with fine sand, clear water, and premium facilities. Day access is possible at some sections. Tip: the beach at the Romanos area is quieter and more natural.",
            el: "Οι παραλίες του Costa Navarino είναι εξαιρετικά περιποιημένες. Tip: η παραλία στο Romanos είναι πιο ήσυχη."
          }
        }
      ]
    },
    {
      title: {
        en: "Best Time to Visit Kalamata",
        el: "Καλύτερη Εποχή για Επίσκεψη",
      },
      layout: "list",
      alert: {
        en: "Secret: The Kalamata Dance Festival, held annually in late June–early July, transforms the waterfront into an outdoor stage. If dates align, it's worth planning around.",
        el: "Μυστικό: Το Διεθνές Φεστιβάλ Χορού Καλαμάτας στα τέλη Ιουνίου–αρχές Ιουλίου μετατρέπει το παραλιακό μέτωπο σε υπαίθρια σκηνή."
      },
      items: [
        {
          title: { en: "Spring (April–May)", el: "Άνοιξη (Απρίλιος–Μάιος)" },
          text: {
            en: "The best time for the city and inland exploration. Temperatures are ideal for walking, the countryside is green, and Ancient Messene is at its most photogenic. Easter in Kalamata is atmospheric.",
            el: "Ιδανική εποχή για την πόλη και την ενδοχώρα. Θερμοκρασίες ιδανικές για περπάτημα, η ύπαιθρος καταπράσινη."
          }
        },
        {
          title: { en: "June & September", el: "Ιούνιος & Σεπτέμβριος" },
          text: {
            en: "The sweet spot for combining beach and exploration. The sea is warm, the city is alive, but without August's intensity. September in particular is excellent.",
            el: "Ιδανικός συνδυασμός παραλίας και εξερεύνησης. Η θάλασσα ζεστή, η πόλη ζωντανή, χωρίς την ένταση του Αυγούστου."
          }
        },
        {
          title: { en: "July–August", el: "Ιούλιος–Αύγουστος" },
          text: {
            en: "Peak season. The beach fills up, the waterfront buzzes until late. High-energy and enjoyable if you like summer rhythm, but book accommodation early.",
            el: "Υψηλή περίοδος. Η παραλία γεμίζει, το παραλιακό μέτωπο ζωντανεύει μέχρι αργά. Κλείστε διαμονή νωρίς."
          }
        },
        {
          title: { en: "Autumn & Winter", el: "Φθινόπωρο & Χειμώνας" },
          text: {
            en: "Underrated. The Messinia plain turns golden, the olive harvest runs October–December. Winter visits work well for archaeology, road trips to Mani, and food-focused travel.",
            el: "Υποτιμημένη εποχή. Η πεδιάδα της Μεσσηνίας χρυσίζει, η συγκομιδή ελιάς διαρκεί Οκτώβριο–Δεκέμβριο. Ιδανική για αρχαιολογία και road trips."
          }
        }
      ]
    },
    {
      title: {
        en: "How to Get to Kalamata",
        el: "Πώς να Φτάσεις στην Καλαμάτα",
      },
      layout: "grid",
      items: [
        {
          title: { en: "By air", el: "Αεροπορικώς" },
          text: {
            en: "Kalamata International Airport (KLX) has direct international connections from the UK and northern Europe spring through autumn. 15-minute drive from the city centre.",
            el: "Ο Διεθνής Αερολιμένας Καλαμάτας (KLX) έχει απευθείας διεθνείς πτήσεις. 15 λεπτά από το κέντρο."
          }
        },
        {
          title: { en: "By car from Athens", el: "Οδικώς από Αθήνα" },
          text: {
            en: "Approximately 2.5–3 hours via the E65 motorway. A car is strongly recommended — it unlocks the entire region.",
            el: "Περίπου 2.5–3 ώρες μέσω Ε65. Αυτοκίνητο συνιστάται ανεπιφύλακτα."
          }
        },
        {
          title: { en: "By bus (KTEL)", el: "Με λεωφορείο (ΚΤΕΛ)" },
          text: {
            en: "Regular KTEL Messinia buses run from Athens (Kifissos terminal). Journey time approximately 3.5 hours.",
            el: "Τακτικά δρομολόγια ΚΤΕΛ Μεσσηνίας από Αθήνα (Κηφισός). Διάρκεια περίπου 3.5 ώρες."
          }
        }
      ]
    },
    {
      title: {
        en: "Top Attractions & Experiences in Kalamata",
        el: "Κορυφαία Αξιοθέατα & Εμπειρίες",
      },
      layout: "numbered",
      items: [
        {
          title: { en: "Old Town & Byzantine Castle", el: "Παλιά Πόλη & Βυζαντινό Κάστρο" },
          text: {
            en: "The Kastro dominates the hill above the city with outstanding views. Below the castle, the Old Town (Ano Poli) retains pre-earthquake character: stone houses, narrow streets, small squares with tavernas. Secret: Attend an outdoor theatrical performance at the castle in summer.",
            el: "Το Κάστρο δεσπόζει πάνω από την πόλη με εκπληκτική θέα. Η Παλιά Πόλη διατηρεί τον προσεισμικό χαρακτήρα της. Μυστικό: Παρακολουθήστε θεατρική παράσταση στο κάστρο το καλοκαίρι."
          }
        },
        {
          title: { en: "Waterfront & Marina", el: "Παραλιακό Μέτωπο & Μαρίνα" },
          text: {
            en: "The Kalamata waterfront runs from the old port through the marina to the main beach promenade. Walk the length of it at dusk — the light over the Messenian Gulf at this hour is genuinely beautiful.",
            el: "Το παραλιακό μέτωπο εκτείνεται από το παλιό λιμάνι μέχρι την παραλία. Περπατήστε το το σούρουπο — το φως στον Μεσσηνιακό Κόλπο είναι μαγευτικό."
          }
        },
        {
          title: { en: "Kalamata Beach", el: "Παραλία Καλαμάτας" },
          text: {
            en: "One of the longest urban beaches in Greece. Clean, organised, with a fine dark-grey sand unique to this coastline. The northern end is quieter; the southern stretches have umbrellas and beach bars.",
            el: "Μία από τις μεγαλύτερες αστικές παραλίες στην Ελλάδα. Καθαρή, οργανωμένη, με σκούρα γκρι άμμο."
          }
        },
        {
          title: { en: "Saturday Market (Laiki Agora)", el: "Λαϊκή Αγορά (Σάββατο)" },
          text: {
            en: "One of the most vibrant farmers' markets in the Peloponnese. Running since the 19th century. Local olives, fresh herbs, mountain honey, handmade cheese. Secret: Arrive before 9am.",
            el: "Μία από τις πιο ζωντανές λαϊκές αγορές της Πελοποννήσου. Από τον 19ο αιώνα. Μυστικό: Πηγαίνετε πριν τις 9πμ."
          }
        },
        {
          title: { en: "Archaeological Museum of Messenia", el: "Αρχαιολογικό Μουσείο Μεσσηνίας" },
          text: {
            en: "A well-curated museum covering the archaeology of the entire Messenia region — from prehistoric settlements to classical and Byzantine finds.",
            el: "Άριστα οργανωμένο μουσείο με ευρήματα από όλη τη Μεσσηνία."
          }
        },
        {
          title: { en: "Dance Festival (late June–early July)", el: "Φεστιβάλ Χορού (τέλη Ιουνίου–αρχές Ιουλίου)" },
          text: {
            en: "The Kalamata International Dance Festival is one of the most significant contemporary dance events in Greece. Performances along the waterfront and in the castle — free for most events.",
            el: "Ένα από τα σημαντικότερα φεστιβάλ σύγχρονου χορού στην Ελλάδα. Δωρεάν είσοδος στα περισσότερα."
          }
        }
      ]
    },
    {
      title: {
        en: "Food in Kalamata — What to Eat & Where",
        el: "Φαγητό στην Καλαμάτα — Τι να Φας & Πού",
      },
      layout: "list",
      items: [
        {
          title: { en: "Kalamata Olives", el: "Ελιές Καλαμάτας" },
          text: {
            en: "The world knows these olives by name but rarely eats them at source. Deep purple, meaty, intensely flavoured. The real thing is different from the jarred variety.",
            el: "Ο κόσμος τις ξέρει με το όνομά τους αλλά σπάνια τις δοκιμάζει στην πηγή τους. Βαθύ μωβ, σαρκώδεις, έντονα γευστικές."
          }
        },
        {
          title: { en: "Kalamata Olive Oil", el: "Ελαιόλαδο Καλαμάτας" },
          text: {
            en: "PDO-certified, produced from Koroneiki olives. Fruity, slightly peppery, with remarkable depth. Buy it directly from local producers at the Saturday market.",
            el: "ΠΟΠ, από ελιές Κορωνέικη. Φρουτώδες, ελαφρώς πιπεράτο. Αγοράστε το απευθείας από παραγωγούς."
          }
        },
        {
          title: { en: "Fresh Fish from the Messenian Gulf", el: "Φρέσκο Ψάρι από τον Μεσσηνιακό Κόλπο" },
          text: {
            en: "Bream, bass, sardines, anchovies — grilled simply over charcoal, dressed with lemon and olive oil. The tavernas along the old port are the right places.",
            el: "Τσιπούρα, λαβράκι, σαρδέλες — ψητά στα κάρβουνα. Οι ταβέρνες στο παλιό λιμάνι είναι η σωστή επιλογή."
          }
        },
        {
          title: { en: "Sfela Cheese", el: "Σφέλα" },
          text: {
            en: "A sharp, slightly salty white cheese from the mountains of Messenia — a PDO product. Often served fried (saganaki) or grilled.",
            el: "Πικάντικο, ελαφρώς αλμυρό λευκό τυρί από τα βουνά της Μεσσηνίας (ΠΟΠ). Συχνά σερβίρεται τηγανητό (σαγανάκι)."
          }
        },
        {
          title: { en: "Where to eat: Old port area", el: "Πού να φας: Παλιό λιμάνι" },
          text: {
            en: "The best seafood tavernas. Look for the ones where local fishermen eat. In Ano Poli (Old Town), traditional tavernas under the castle walls with a slower, more local feel.",
            el: "Οι καλύτερες ταβέρνες ψαριού. Ψάξτε εκεί που τρώνε οι ντόπιοι ψαράδες."
          }
        }
      ]
    },
    {
      title: {
        en: "Day Trips & Nearby Destinations",
        el: "Ημερήσιες Εκδρομές & Κοντινοί Προορισμοί",
      },
      layout: "numbered",
      items: [
        {
          title: { en: "Costa Navarino & Voidokilia Beach", el: "Costa Navarino & Βοϊδοκοιλιά" },
          text: {
            en: "About 40km southwest of Kalamata. Voidokilia — a horseshoe-shaped bay framed by dunes — is one of the most beautiful beaches in Europe and freely accessible to all. The natural landscape here is remarkable: the lagoon of Divari, the cave of Nestor, the dunes of NATURA 2000.",
            el: "40 χλμ. νοτιοδυτικά. Η Βοϊδοκοιλιά — παραλία σε σχήμα πετάλου — είναι από τις ομορφότερες στην Ευρώπη και ελεύθερα προσβάσιμη."
          }
        },
        {
          title: { en: "Pylos & the Bay of Navarino", el: "Πύλος & Κόλπος Ναβαρίνου" },
          text: {
            en: "One of the most beautiful small towns in the Peloponnese. The elegant main square shaded by plane trees, the Niokastro fortress, boat trips to Sphacteria island. Secret: Boat trips around the bay at sunset are a genuinely outstanding experience.",
            el: "Μία από τις ομορφότερες μικρές πόλεις της Πελοποννήσου. Μυστικό: Οι βαρκάδες στον κόλπο το ηλιοβασίλεμα είναι μοναδικές."
          }
        },
        {
          title: { en: "Mani Peninsula", el: "Χερσόνησος της Μάνης" },
          text: {
            en: "The Mani is unlike anywhere else in Greece — a landscape of arid stone, tower houses, medieval villages, and turquoise coves. Kardamyli is the celebrated entry point. Deep Mani offers Vathia tower houses, Pyrgos Dirou sea caves, and Cape Tenaro — the southernmost point of mainland Greece.",
            el: "Η Μάνη είναι αλλιώτικη — πέτρινοι πύργοι, μεσαιωνικά χωριά, τιρκουάζ όρμοι. Καρδαμύλη, Βαθιά, Πύργος Διρού, Ακρωτήριο Ταίναρο."
          }
        },
        {
          title: { en: "Ancient Messene", el: "Αρχαία Μεσσήνη" },
          text: {
            en: "One of the great under-visited archaeological sites of Greece. Founded in 369 BC, with 9km of circuit walls still standing, a theatre, stadium, sanctuary of Asklepios. You may have the site largely to yourself. Secret: Go in the morning for extraordinary light.",
            el: "Ένας από τους σπουδαιότερους υποτιμημένους αρχαιολογικούς χώρους. Τείχη 9χλμ., θέατρο, στάδιο. Μυστικό: Πηγαίνετε το πρωί."
          }
        },
        {
          title: { en: "Mystras (UNESCO)", el: "Μυστράς (UNESCO)" },
          text: {
            en: "About 60km northeast of Kalamata, a Byzantine ghost city on the Taygetos range. The last capital of the Byzantine Empire. Palaces, churches, monasteries. The Pantanassa frescoes are among the finest late Byzantine painting.",
            el: "60 χλμ. βορειοανατολικά, βυζαντινή πολιτεία-φάντασμα στον Ταΰγετο. Τελευταία πρωτεύουσα της Βυζαντινής Αυτοκρατορίας."
          }
        }
      ]
    },
    {
      title: {
        en: "Practical Tips",
        el: "Πρακτικά Tips",
      },
      layout: "list",
      alert: {
        en: "Secret: The Saturday market is non-negotiable. Even if you're not buying, walk through it. And carry cash in the Mani — many small tavernas and villages still operate cash-only.",
        el: "Μυστικό: Η λαϊκή αγορά του Σαββάτου είναι must. Ακόμα κι αν δεν αγοράζετε, περπατήστε τη. Και στην Μάνη να έχετε μετρητά."
      },
      items: [
        {
          title: { en: "Rent a car", el: "Νοικιάστε αυτοκίνητο" },
          text: {
            en: "A car is not optional here — it's the entire point. The best things in this region are not in Kalamata itself.",
            el: "Το αυτοκίνητο δεν είναι προαιρετικό — είναι η ουσία. Τα καλύτερα είναι έξω από την πόλη."
          }
        },
        {
          title: { en: "Stay at least 3 nights", el: "Μείνετε τουλάχιστον 3 βράδια" },
          text: {
            en: "One day for the city, one for Pylos/Costa Navarino, one for the Mani. That's the minimum to feel the region.",
            el: "Μία μέρα για την πόλη, μία για Πύλο/Costa Navarino, μία για Μάνη."
          }
        },
        {
          title: { en: "Eat at the old port, not the promenade", el: "Φάτε στο παλιό λιμάνι" },
          text: {
            en: "The restaurants facing the water are for tourists. The ones tucked behind the old port walls are for eating.",
            el: "Τα εστιατόρια μπροστά στο νερό είναι για τουρίστες. Αυτά πίσω από τα τείχη του παλιού λιμανιού είναι για φαγητό."
          }
        },
        {
          title: { en: "Book early for summer", el: "Κλείστε νωρίς για καλοκαίρι" },
          text: {
            en: "Particularly around Kardamyli and Stoupa — the better small hotels fill up months ahead.",
            el: "Ειδικά σε Καρδαμύλη και Στούπα — τα καλύτερα μικρά ξενοδοχεία κλείνουν μήνες πριν."
          }
        }
      ]
    },
    {
      title: {
        en: "Where to Stay in Kalamata",
        el: "Πού να Μείνεις στην Καλαμάτα",
      },
      layout: "grid",
      items: [
        {
          title: { en: "Hotel & area guide", el: "Οδηγός διαμονής & περιοχών" },
          text: {
            en: "For a complete breakdown of the best areas and hotels in Kalamata and Messinia — from the city beachfront and Old Town to Kardamyli, Stoupa, Costa Navarino and Pylos — see our dedicated guide: [Where to Stay in Kalamata & the Messinia Region →](/hotels/kalamata).",
            el: "Για πλήρη ανάλυση των καλύτερων περιοχών και ξενοδοχείων στην Καλαμάτα και τη Μεσσηνία — από το παραλιακό μέτωπο και την Παλιά Πόλη μέχρι Καρδαμύλη, Στούπα, Costa Navarino και Πύλο — δες τον αναλυτικό οδηγό: [Πού να Μείνεις στην Καλαμάτα & τη Μεσσηνία →](/hotels/kalamata)."
          }
        }
      ]
    },
    {
      title: {
        en: "FAQ — Kalamata Essentials",
        el: "Συχνές Ερωτήσεις",
      },
      layout: "faq",
      items: [
        {
          title: { en: "Is Kalamata worth visiting?", el: "Αξίζει να επισκεφθώ την Καλαμάτα;" },
          text: {
            en: "Yes — especially if you want an authentic southern Peloponnese experience. A real Greek city with great food, an excellent beach, and extraordinary day trip potential.",
            el: "Ναι — ειδικά αν θέλετε αυθεντική εμπειρία της νότιας Πελοποννήσου."
          }
        },
        {
          title: { en: "How many days do you need?", el: "Πόσες μέρες χρειάζονται;" },
          text: {
            en: "3 days minimum to cover the city and one or two nearby destinations. 5–7 days to fully explore the region.",
            el: "3 μέρες τουλάχιστον. 5–7 για πλήρη εξερεύνηση."
          }
        },
        {
          title: { en: "What is the Mani?", el: "Τι είναι η Μάνη;" },
          text: {
            en: "The central of the Peloponnese's three southern peninsulas — a wild, arid, historically independent region of tower houses, Byzantine churches, and spectacular coastline.",
            el: "Η κεντρική από τις τρεις χερσονήσους της Πελοποννήσου — άγρια, ανεξάρτητη, μοναδική."
          }
        },
        {
          title: { en: "What's the best beach near Kalamata?", el: "Ποια είναι η καλύτερη παραλία κοντά στην Καλαμάτα;" },
          text: {
            en: "Voidokilia, near Pylos, is widely considered one of the most beautiful beaches in Greece. The Kalamata city beach itself is also excellent.",
            el: "Η Βοϊδοκοιλιά κοντά στην Πύλο θεωρείται από τις ομορφότερες στην Ελλάδα."
          }
        },
        {
          title: { en: "Is Kalamata good for families?", el: "Είναι η Καλαμάτα κατάλληλη για οικογένειες;" },
          text: {
            en: "Yes. The long, gently-shelving beach is ideal. The wider region offers boat trips, caves, archaeological sites with good visitor facilities.",
            el: "Ναι. Η παραλία είναι ιδανική για οικογένειες με ρηχά νερά."
          }
        },
        {
          title: { en: "Are Kalamata olives actually from Kalamata?", el: "Οι ελιές Καλαμάτας είναι όντως από Καλαμάτα;" },
          text: {
            en: "Yes. The Kalamata olive (Kalamon variety) is native to the Messenia region and carries a PDO designation.",
            el: "Ναι. Η ελιά Καλαμάτας (ποικιλία Καλαμών) είναι αυτόχθονη της Μεσσηνίας με ΠΟΠ."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Kalamata", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Καλαμάτα" },
      text: {
        en: "✕ **Staying only in the city** — Kalamata is a functional city with a great castle and market, but its real treasures are in the Messenian countryside — the古 village of Mystras, the caves of Diros, and the beaches of the Mani peninsula.\n\n✕ **Skipping the old town** — Kalamata's old town around the castle is one of the best-preserved in the Peloponnese, with Ottoman fountains, Byzantine churches, and narrow lanes that feel centuries away from the modern city below.\n\n✕ **The railway station as just a museum** — The Kalamata railway station is beautifully restored and the train to Kyparissia follows one of the most scenic routes in Greece — through olive groves, vineyards, and river gorges.\n\n✕ **Ignoring the Messinian Mani** — The stone tower villages of the Mani (Kardamyli, Stoupa, Areopoli) are among the most atmospheric settlements in Greece. Kalamata is the natural base to explore them.\n\n✕ **Missing the olive oil connection** — Kalamata is synonymous with its olives. Visit the olive press museum or buy directly from producers at the Saturday market. The oil here is different from anything you have tasted.\n\n💡 What nobody tells you: The best day trip from Kalamata is not Mystras or Monemvasia — it is the short drive to Kardamyli where the old village above the harbour has a Venetian tower, a church with Byzantine frescoes, and the best seafood taverna on the Messenian coast (Tsitsaris). Patrick Leigh Fermor lived here for good reason.",
        el: "✕ **Μόνο στην πόλη** — Η Καλαμάτα έχει κάστρο και αγορά αλλά οι θησαυροί είναι στην Μεσσηνία: Μυστράς, Διρώ, Μάνη.\n\n✕ **Να παραλείψεις την παλιά πόλη** — Κάστρο, Οθωμανικές βρύσες, Βυζαντινές εκκλησίες.\n\n✕ **Σιδηροδρομικός σταθμός** — Αποκατεστημένος, δρομολόγιο προς Κυπαρισσία μέσα ελαιώνων.\n\n✕ **Να αγνοήσεις τη Μεσσηνιακή Μάνη** — Καρδαμύλη, Στούπα, Αρεόπολη με πέτρινους πύργους.\n\n✕ **Να παραλείψεις το λάδι** — Καλαμάτα = ελιές. Museum ελαιοτριβείου, Σάββατο αγορά.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη day trip είναι η Καρδαμύλη — παλιό χωριό πάνω από το λιμάρι, Ενετικός πύργος, Βυζαντινές τοιχογραφίες, και το καλύτερο ψαράδικο στη Μεσσηνία. Ο Patrick Leigh Fermor έμεινε εδώ για καλό λόγο."
      }
    }
  ],
  thassos: [
    {
      title: { en: "Why Visit Thassos", el: "Γιατί να Επισκεφθείς τη Θάσο" },
      layout: "numbered",
      items: [
        {
          title: { en: "Greece's greenest island — and a real landscape contrast", el: "Το πιο πράσινο νησί της Ελλάδας" },
          text: { en: "Thassos is covered by dense pine, oak, and chestnut forest across most of its interior. The coast alternates between marble-white cliffs, sandy coves, and pebble bays framed by pines growing directly to the water. This combination — dark green above, marble white and turquoise below — creates a visual atmosphere found nowhere else in Greece.", el: "Η Θάσος καλύπτεται από πυκνό πευκοδάσος, βελανιδιές και καστανιές στο μεγαλύτερο μέρος του εσωτερικού της. Η ακτή εναλλάσσεται μεταξύ μαρμάρινων γκρεμών, αμμωδών όρμων και βοτσαλωτών κόλπων." }
        },
        {
          title: { en: "Marble Beach and the most distinctive beaches in the North Aegean", el: "Οι πιο χαρακτηριστικές παραλίες στο Βόρειο Αιγαίο" },
          text: { en: "Several beaches on Thassos are unlike anything elsewhere in Greece. The white marble formations of Skouries (Marble Beach), the long arc of Golden Beach, the isolated pebble coves on the western coast — the variety is exceptional and the water clarity is extraordinary.", el: "Αρκετές παραλίες της Θάσου είναι μοναδικές στην Ελλάδα. Οι λευκές μαρμάρινες δημιουργίες των Σκουριών, το τόξο της Χρυσής Αμμουδιάς, οι απομονωμένοι βοτσαλωτοί όρμοι της δυτικής ακτής." }
        },
        {
          title: { en: "Ancient history embedded in everyday life", el: "Αρχαία ιστορία ενταγμένη στην καθημερινή ζωή" },
          text: { en: "The ancient agora of Thassos sits in the middle of Limenas, the island's capital. The ancient theatre hosts performances in summer. Ancient walls still trace the hillside above town. History here is not behind a fence — it is woven into the fabric of the place.", el: "Η αρχαία αγορά της Θάσου βρίσκεται στη μέση της Λιμένα. Το αρχαίο θέατρο φιλοξενεί παραστάσεις το καλοκαίρι. Τα αρχαία τείχη ακολουθούν ακόμα την πλαγιά πάνω από την πόλη." }
        },
        {
          title: { en: "Mountain villages that feel genuinely remote", el: "Ορεινά χωριά που νιώθεις πραγματικά απομακρυσμένος" },
          text: { en: "Theologos, Kastro, Megalo Kazaviti — these villages sit deep in the island's forested interior and have the character of mountain settlements far from the coast. Stone houses, cobbled squares, wood smoke. Excellent traditional food.", el: "Θεολόγος, Κάστρο, Μεγάλο Καζαβίτι — αυτά τα χωριά βρίσκονται βαθιά στο δασωμένο εσωτερικό του νησιού. Πέτρινα σπίτια, λιθόστρωτες πλατείες, ξύλο καυσόξυλων. Εξαιρετικό παραδοσιακό φαγητό." }
        },
        {
          title: { en: "A well-organised island without losing its soul", el: "Ένα καλά οργανωμένο νησί χωρίς να χάνει την ψυχή του" },
          text: { en: "Thassos has good infrastructure — the coastal road circles the entire island, ferries run frequently, accommodation ranges from simple rooms to boutique hotels. But it has not been commercialised beyond recognition. The island still feels like somewhere people actually live.", el: "Η Θάσος έχει καλή υποδομή — ο παραλιακός δρόμος περιβάλλει ολόκληρο το νησί, τα πλοία εκτελούν συχνά δρομολόγια. Αλλά δεν έχει εμπορευματοποιηθεί. Το νησί ακόμα νιώθεις ότι είναι ένα μέρος όπου άνθρωποι ζουν πραγματικά." }
        }
      ]
    },
    {
      title: { en: "Best Time to Visit Thassos", el: "Καλύτερη Εποχή για Επίσκεψη" },
      layout: "grid",
      alert: {
        en: "Secret: The Thassos Grand Prix — an annual off-road motorsport event through the island's mountain tracks — takes place in early autumn and creates a surprising, electric atmosphere in the island's interior villages.",
        el: "Secret: Το Θάσος Grand Prix — μια ετήσια εκδήλωση off-road motorsport στα ορεινά μονοπάτια του νησιού — πραγματοποιείται στις αρχές του φθινοπώρου."
      },
      items: [
        {
          title: { en: "Spring (April–May)", el: "Άνοιξη (Απρίλιος–Μάιος)" },
          text: { en: "The interior forest is intensely green, wildflowers cover the roadsides, and the island is quiet. Ideal for village exploration, hiking, and photography. The sea is cool for swimming but the weather is warm enough for everything else.", el: "Το εσωτερικό δάσος είναι έντονα πράσινο, αγριολούλουδα καλύπτουν τους δρόμους, το νησί είναι ήσυχο. Ιδανικό για εξερεύνηση χωριών και πεζοπορία." }
        },
        {
          title: { en: "June", el: "Ιούνιος" },
          text: { en: "One of the best months. The sea has warmed, the beaches are uncrowded, and the island is in full summer mode without the intensity of July and August. The light in June on the marble beaches is extraordinary.", el: "Ένας από τους καλύτερους μήνες. Η θάλασσα έχει ζεσταθεί, οι παραλίες δεν είναι γεμάτες, το νησί σε καλοκαιρινό ρυθμό χωρίς την ένταση Ιουλίου-Αυγούστου." }
        },
        {
          title: { en: "July–August", el: "Ιούλιος–Αύγουστος" },
          text: { en: "Peak season. Thassos handles summer crowds better than many Greek islands because of its size and the number of beaches. Book accommodation well in advance. The festivals season is active: the Ancient Theatre hosts performances throughout summer.", el: "Υψηλή περίοδος. Η Θάσος διαχειρίζεται τα πλήθη καλύτερα από πολλά νησιά. Κλείστε διαμονή νωρίς. Το αρχαίο θέατρο φιλοξενεί παραστάσεις όλο το καλοκαίρι." }
        },
        {
          title: { en: "September", el: "Σεπτέμβριος" },
          text: { en: "The ideal month for many travellers. Sea temperature reaches its peak, domestic crowds have thinned, and the island returns to a more personal rhythm. The chestnut harvest begins in the mountain villages.", el: "Ο ιδανικός μήνας για πολλούς ταξιδιώτες. Η θερμοκρασία της θάλασσας κορυφώνεται, τα πλήθη λιγοστεύουν. Αρχίζει η συγκομιδή κάστανου στα ορεινά χωριά." }
        },
        {
          title: { en: "Autumn & Winter", el: "Φθινόπωρο & Χειμώνας" },
          text: { en: "Thassos is one of the few Greek islands that functions meaningfully off-season. The forest is at its most dramatic in October and November. Theologos and the mountain villages are excellent in autumn. Winter visits are quiet but rewarding.", el: "Η Θάσος είναι από τα λίγα νησιά που λειτουργούν ουσιαστικά εκτός σεζόν. Το δάσος είναι εντυπωσιακό τον Οκτώβριο και Νοέμβριο." }
        }
      ]
    },
    {
      title: { en: "How to Get to Thassos", el: "Πώς να Φτάσεις στη Θάσο" },
      layout: "grid",
      items: [
        {
          title: { en: "By ferry from Kavala", el: "Ακτοπλοϊκώς από Καβάλα" },
          text: { en: "The main and most convenient connection. The ferry from Kavala harbour to Limenas takes approximately 35–40 minutes and runs frequently throughout the day, year-round.", el: "Η κύρια και πιο βολική σύνδεση. Το πλοίο από το λιμάνι της Καβάλας προς τη Λιμένα διαρκεί περίπου 35-40 λεπτά." }
        },
        {
          title: { en: "By ferry from Keramoti", el: "Ακτοπλοϊκώς από Κεραμωτή" },
          text: { en: "A shorter crossing — approximately 15 minutes — from the small port of Keramoti, south of Kavala. Ideal if travelling by car. Keramoti is the preferred crossing point for drivers coming from Thessaloniki.", el: "Μικρότερη διάρκεια — περίπου 15 λεπτά — από το μικρό λιμάνι της Κεραμωτής. Ιδανικό αν ταξιδεύετε με αυτοκίνητο." }
        },
        {
          title: { en: "By air to Kavala", el: "Αεροπορικώς στην Καβάλα" },
          text: { en: "Kavala International Airport 'Megas Alexandros' (KVA) serves Kavala with domestic and some European connections. From the airport to Keramoti is approximately 30 minutes by car.", el: "Ο Διεθνής Αερολιμένας Καβάλας 'Μέγας Αλέξανδρος' (KVA) εξυπηρετεί με εσωτερικές και ευρωπαϊκές πτήσεις." }
        },
        {
          title: { en: "By road from Thessaloniki", el: "Οδικώς από Θεσσαλονίκη" },
          text: { en: "Approximately 2.5 hours to Kavala, then the ferry. A comfortable day's journey. The Thessaloniki–Kavala stretch of the Via Egnatia motorway is excellent.", el: "Περίπου 2.5 ώρες στην Καβάλα, μετά το πλοίο. Το τμήμα Θεσσαλονίκη-Καβάλα της Εγνατίας Οδού είναι εξαιρετικό." }
        }
      ]
    },
    {
      title: { en: "Top Attractions & Experiences in Thassos", el: "Κορυφαία Αξιοθέατα & Εμπειρίες" },
      layout: "numbered",
      items: [
        {
          title: { en: "Ancient Agora & Archaeological Site of Limenas", el: "Αρχαία Αγορά & Αρχαιολογικός Χώρος Λιμένα" },
          text: { en: "The ancient agora of Thassos is one of the most accessible and evocative in Greece — not a remote site requiring a separate excursion, but embedded in the fabric of the town. Temples of Heracles, Dionysus, and Poseidon, a well-preserved passageway, and the remains of public buildings span centuries of city life. Secret: Visit in the early morning before the heat. The light on the marble columns at 8am is exceptional.", el: "Η αρχαία αγορά της Θάσου είναι από τις πιο προσιτές στην Ελλάδα. Ναοί του Ηρακλή, του Διονύσου και του Ποσειδώνα. Μυστικό: Επισκεφθείτε νωρίς το πρωί πριν τη ζέστη." }
        },
        {
          title: { en: "The Ancient Theatre", el: "Αρχαίο Θέατρο" },
          text: { en: "Built in the 4th century BC and restored for modern use, the ancient theatre of Thassos sits on the hillside above Limenas with views over the sea to the mainland coast. Summer performances — theatre, music, and dance — take place here in July and August.", el: "Χτισμένο τον 4ο αιώνα π.Χ. και αποκατεστημένο. Το αρχαίο θέατρο βρίσκεται στην πλαγιά πάνω από τη Λιμένα με θέα στη θάλασσα." }
        },
        {
          title: { en: "The Ancient Walls & Acropolis Walk", el: "Αρχαία Τείχη & Περίπατος στην Ακρόπολη" },
          text: { en: "A circuit of the ancient fortification walls above Limenas leads to the acropolis with its sanctuary of Athena, the rock-cut relief of Pan (2nd century BC), and panoramic views over the island and mainland. This is one of the finest short walks in the Greek islands and almost no one does it.", el: "Μια διαδρομή γύρω από τα αρχαία τείχη πάνω από τη Λιμένα οδηγεί στην ακρόπολη. Μία από τις ωραιότερες μικρές πεζοπορίες στα ελληνικά νησιά." }
        },
        {
          title: { en: "Theologos Village", el: "Θεολόγος" },
          text: { en: "The former capital of the island during the Ottoman period, Theologos sits deep in the interior at 400m altitude. One of the best-preserved traditional villages in northern Greece — stone houses with wooden balconies, a central square with excellent traditional tavernas. Secret: Eat at the village tavernas rather than on the coast. The local lamb, smoked sausages, and mushroom dishes are among the best meals on the island.", el: "Η πρώην πρωτεύουσα του νησιού, χτισμένη στα 400μ. Ένα από τα καλύτερα διατηρημένα παραδοσιακά χωριά. Μυστικό: Φάτε στις ταβέρνες του χωριού και όχι στην ακτή." }
        },
        {
          title: { en: "Kastro Village", el: "Κάστρο" },
          text: { en: "The highest and most remote village on the island, at over 500m above sea level. Largely abandoned but partially restored, with views in every direction — sea to the east and west, mountain forest in all other directions.", el: "Το υψηλότερο και πιο απομακρυσμένο χωριό, πάνω από 500μ. Σε μεγάλο βαθμό εγκαταλελειμμένο αλλά μερικώς αναστηλωμένο." }
        },
        {
          title: { en: "Megalo & Mikro Kazaviti", el: "Μεγάλο & Μικρό Καζαβίτι" },
          text: { en: "Two small, verdant villages in the forested interior, connected by a path through chestnut and oak trees. Megalo Kazaviti is often cited as one of the most beautiful villages in Greece. Secret: Walk the path between the two villages — it takes about 20 minutes through genuinely beautiful forest.", el: "Δύο μικρά, καταπράσινα χωριά στο εσωτερικό. Το Μεγάλο Καζαβίτι θεωρείται από τα ομορφότερα χωριά. Μυστικό: Περπατήστε το μονοπάτι μεταξύ των δύο χωριών." }
        }
      ]
    },
    {
      title: { en: "Best Beaches in Thassos", el: "Οι Καλύτερες Παραλίες στη Θάσο" },
      layout: "list",
      alert: {
        en: "Secret: At Marble Beach, come at low sun — morning or late afternoon — when the light on the marble creates shadows and textures that photography cannot fully capture. At Giola, go early morning or late afternoon to avoid the queues.",
        el: "Secret: Στη Μαρμάρινη Παραλία, ελάτε νωρίς το πρωί ή αργά το απόγευμα. Στη Γκιόλα, πηγαίνετε νωρίς το πρωί ή μετά τις 6μμ."
      },
      items: [
        {
          title: { en: "Marble Beach (Skouries / Paradise Beach)", el: "Μαρμάρινη Παραλία (Σκουριές)" },
          text: { en: "The island's most iconic beach and one of the most photographed in Greece. White marble formations sculpted by the sea create a lunar landscape of smooth stone, rock pools, and crevices. The water over white marble produces extraordinary colour — pale turquoise to deep blue. No umbrellas or facilities — raw and genuine.", el: "Η πιο εμβληματική παραλία του νησιού. Λευκές μαρμάρινες δημιουργίες σχηματίζουν ένα σεληνιακό τοπίο. Χωρίς ομπρέλες ή υποδομές." }
        },
        {
          title: { en: "Golden Beach (Chrysi Ammoudia)", el: "Χρυσή Αμμουδιά" },
          text: { en: "The longest and most organised beach on the island — a 1.5km arc of fine golden sand on the east coast. Full amenities, beach bars, watersports. Excellent for families. The adjacent village of Skala Panagia has good fish tavernas.", el: "Η μεγαλύτερη και πιο οργανωμένη παραλία — τόξο 1.5χλμ. χρυσής άμμου. Ιδανική για οικογένειες." }
        },
        {
          title: { en: "Aliki Beach", el: "Αλυκή" },
          text: { en: "A double-sided beach on the southern tip, with a headland between two sandy coves. An ancient Thasian sanctuary and marble quarry site sits directly behind the beach — you can swim and then walk 50 metres to ancient ruins. Secret: The southern cove is calmer and less visited.", el: "Διπλή παραλία στο νότιο άκρο. Αρχαίο ιερό και μαρμάρινο λατομείο πίσω από την παραλία. Μυστικό: Ο νότιος όρμος είναι πιο ήσυχος." }
        },
        {
          title: { en: "Paradise Beach (Pahis)", el: "Παραδείσου (Πάχης)" },
          text: { en: "A long, narrow pebble-and-sand beach backed by pine trees on the west coast. The setting — trees to the water's edge, clear water, a small beach bar — is exactly what people imagine when they think of a Greek island beach.", el: "Μακριά, στενή παραλία με βότσαλο και άμμο, με πεύκα στη δυτική ακτή." }
        },
        {
          title: { en: "Giola (Natural Lagoon)", el: "Γκιόλα (Φυσική Λιμνοθάλασσα)" },
          text: { en: "A natural rock pool carved into marble cliff above the sea, connected to the Aegean by a subterranean channel. Swimming in Giola is one of the more memorable experiences the island offers. Secret: Wear shoes — the marble approach path is slippery.", el: "Φυσική πισίνα σε μαρμάρινο γκρεμό. Μυστικό: Φορέστε παπούτσια — η μαρμάρινη πρόσβαση είναι ολισθηρή." }
        },
        {
          title: { en: "Astris & Potos Beaches", el: "Παραλίες Αστρίδας & Ποτού" },
          text: { en: "Long sandy beaches on the south coast. Well organised, good tavernas. Slightly warmer water than the north and east coasts.", el: "Μακριές αμμώδεις παραλίες στη νότια ακτή. Οργανωμένες, καλές ταβέρνες." }
        }
      ]
    },
    {
      title: { en: "Food in Thassos — What to Eat & Where", el: "Φαγητό στη Θάσο — Τι να Φας & Πού" },
      layout: "list",
      items: [
        {
          title: { en: "Thassos Honey", el: "Μέλι Θάσου" },
          text: { en: "Among the finest in Greece. The island's forest — pine, thyme, chestnut, heather — produces exceptional monofloral honeys. Pine honey (pitsimelina) is particularly distinctive: dark, resinous, slightly savoury.", el: "Από τα καλύτερα στην Ελλάδα. Το πευκόμελο είναι ιδιαίτερα χαρακτηριστικό: σκούρο, ρετσινάτο, ελαφρώς αλμυρό." }
        },
        {
          title: { en: "Smoked and Cured Meats", el: "Αλλαντικά & Καπνιστά Κρέατα" },
          text: { en: "The mountain villages have a tradition of smoked sausage (loukanika), smoked pork (hiromeri), and cured meats using local herbs and chestnut wood smoke. Village tavernas serve these with tsipouro.", el: "Τα ορεινά χωριά έχουν παράδοση σε λουκάνικα, χοιρομέρι και αλλαντικά. Σερβίρονται με τσίπουρο." }
        },
        {
          title: { en: "Wild Mushrooms", el: "Άγρια Μανιτάρια" },
          text: { en: "In autumn, the forests of Thassos yield exceptional wild mushrooms. Village tavernas serve them fried in olive oil with garlic, or in stews with mountain herbs.", el: "Το φθινόπωρο, τα δάση της Θάσου δίνουν εξαιρετικά μανιτάρια. Τηγανητά στο ελαιόλαδο με σκόρδο." }
        },
        {
          title: { en: "Fresh Fish & Seafood", el: "Φρέσκο Ψάρι & Θαλασσινά" },
          text: { en: "The fish tavernas along Limenas harbour and in the fishing villages of the west coast serve daily-caught fish from the North Aegean. Excellent sardines, sea bream, red mullet, and octopus.", el: "Οι ψαροταβέρνες στο λιμάνι της Λιμένα σερβίρουν φρέσκο ψάρι. Εξαιρετικές σαρδέλες, τσιπούρα, μπαρμπούνια." }
        },
        {
          title: { en: "Where to eat", el: "Πού να φας" },
          text: { en: "Limenas harbour for fish and seafood. Theologos village square for traditional mountain food. Megalo Kazaviti for an authentic kafeneion experience. Aliki area for small fish tavernas behind the beach.", el: "Λιμάνι Λιμένα για ψάρι. Πλατεία Θεολόγου για παραδοσιακό φαγητό. Μεγάλο Καζαβίτι για αυθεντικό καφενείο." }
        }
      ]
    },
    {
      title: { en: "Practical Tips", el: "Πρακτικές Συμβουλές" },
      layout: "list",
      items: [
        {
          title: { en: "Rent a car or scooter", el: "Νοικιάστε αυτοκίνητο ή σκούτερ" },
          text: { en: "The circuit road rewards independent exploration. Many of the best beaches and all of the mountain villages require wheels.", el: "Ο κυκλικός δρόμος ανταμείβει την ανεξάρτητη εξερεύνηση." }
        },
        {
          title: { en: "Drive the 95km coastal circuit", el: "Οδηγήστε την 95χλμ. παράκτια διαδρομή" },
          text: { en: "The island is fully encircled by road. Driving the entire 95km coastal circuit, stopping when something catches your eye, is one of the best ways to experience Thassos.", el: "Οδηγήστε ολόκληρη τη διαδρομή 95χλμ., σταματώντας όπου σας τραβήξει κάτι." }
        },
        {
          title: { en: "Stay at least 4 nights", el: "Μείνετε τουλάχιστον 4 βράδια" },
          text: { en: "The island is large and varied enough to justify a week. Less than 3 nights feels rushed.", el: "Το νησί είναι αρκετά μεγάλο για να δικαιολογήσει μία εβδομάδα." }
        },
        {
          title: { en: "Eat in the mountain villages at least once", el: "Φάτε στα ορεινά χωριά τουλάχιστον μία φορά" },
          text: { en: "Coastal tavernas are good — village tavernas are better. Theologos for the full experience.", el: "Οι παραλιακές ταβέρνες είναι καλές — οι ταβέρνες των χωριών είναι καλύτερες." }
        },
        {
          title: { en: "Book peak-season accommodation early", el: "Κλείστε νωρίς για υψηλή περίοδο" },
          text: { en: "July and August are popular with domestic Greek visitors. Good small hotels fill quickly.", el: "Ιούλιος και Αύγουστος είναι δημοφιλείς. Τα καλά ξενοδοχεία γεμίζουν γρήγορα." }
        }
      ]
    },
    {
      title: { en: "FAQ — Thassos Essentials", el: "Συχνές Ερωτήσεις" },
      layout: "faq",
      items: [
        {
          title: { en: "Is Thassos worth visiting?", el: "Αξίζει να επισκεφθώ τη Θάσο;" },
          text: { en: "Yes — Thassos is one of the most complete island destinations in northern Greece, combining exceptional beaches, genuine village life, serious ancient history, and outstanding local food.", el: "Ναι — η Θάσος είναι ένας από τους πιο ολοκληρωμένους νησιωτικούς προορισμούς στη βόρεια Ελλάδα." }
        },
        {
          title: { en: "What is Thassos best known for?", el: "Για τι είναι γνωστή η Θάσος;" },
          text: { en: "The marble beaches (particularly Skouries), the dense pine forest, Theologos village, the ancient agora, Giola natural pool, and Thassos honey.", el: "Τις μαρμάρινες παραλίες, το πευκοδάσος, τον Θεολόγο, την αρχαία αγορά, τη Γκιόλα και το μέλι." }
        },
        {
          title: { en: "How many days do you need in Thassos?", el: "Πόσες μέρες χρειάζονται;" },
          text: { en: "4–6 days covers the main beaches, one or two mountain villages, and the ancient sites. A week is ideal for a complete experience.", el: "4-6 μέρες καλύπτουν τα βασικά. Μία εβδομάδα είναι ιδανική." }
        },
        {
          title: { en: "Is Thassos good for families?", el: "Είναι η Θάσος κατάλληλη για οικογένειες;" },
          text: { en: "Yes. Long, sandy beaches like Golden Beach and Astris are excellent for children. The island is safe, well-organised, and easy to navigate by car.", el: "Ναι. Οι μακριές αμμώδεις παραλίες είναι ιδανικές για παιδιά." }
        },
        {
          title: { en: "How do I get to Thassos from Thessaloniki?", el: "Πώς πάω στη Θάσο από Θεσσαλονίκη;" },
          text: { en: "Drive to Kavala (approximately 2.5 hours), then take the ferry from Kavala or Keramoti. Total journey time approximately 3–3.5 hours.", el: "Οδηγήστε στην Καβάλα (2.5 ώρες), μετά το πλοίο. Σύνολο περίπου 3-3.5 ώρες." }
        },
        {
          title: { en: "Do you need a car in Thassos?", el: "Χρειάζεστε αυτοκίνητο;" },
          text: { en: "Strongly recommended. The island rewards spontaneous exploration, and many of the best beaches and all mountain villages are not served by regular buses.", el: "Συνιστάται ανεπιφύλακτα. Πολλές παραλίες και όλα τα ορεινά χωριά δεν εξυπηρετούνται από λεωφορεία." }
        },
        {
          title: { en: "What is the best beach in Thassos?", el: "Ποια είναι η καλύτερη παραλία;" },
          text: { en: "For visual impact: Marble Beach (Skouries). For swimming with amenities: Golden Beach. For atmosphere and setting: Aliki. For an unusual experience: Giola.", el: "Για εντύπωση: Σκουριές. Για άνεση: Χρυσή Αμμουδιά. Για ατμόσφαιρα: Αλυκή. Για μοναδική εμπειρία: Γκιόλα." }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Thassos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Θάσο" },
      text: {
        en: "✕ **Thassos Town waterfront** — The main town has a pleasant harbour but it is generic compared to the island's interior. The real Thassos is in the marble villages of the mountains and the hidden beaches of the south coast.\n\n✕ **Only the west coast beaches** — Thassos's west coast (Golden Beach, Paradise) gets the afternoon sun and the crowds. The east coast beaches (Aliki, Rosogremos) are quieter, have better water clarity, and are backed by olive groves.\n\n✕ **Skipping the marble villages** — Thassos has been a marble quarry since antiquity. The villages of Sotiras, Kastro, and Theologos have marble-paved paths, marble fountains, and a character unlike anywhere else in the Aegean.\n\n✕ **Ignoring the mountain interior** — The drive from Limenas to the top of Mount Ypsarion (1,204m) through forests of chestnut and pine is spectacular and reveals an island that most beach tourists never see.\n\n✕ **TheArchaeological Museum rush** — Thassos Town's museum is small but excellent, with treasures from the island's 3,000-year history. Take thirty minutes to see it properly.\n\n💡 What nobody tells you: Thassos has the best natural hot springs in the North Aegean — the thermal baths at Therma village are free, open year-round, and range from 35°C to 45°C. Locals have bathed here for centuries and you can too, sitting in stone basins under plane trees.",
        el: "✕ **Λιμάνι Θάσου** — Ευχάριστο αλλά γενικευμένο. Η πραγματική Θάσος είναι στα μαρμάρινα χωριά.\n\n✕ **Μόνο δυτική ακτή** — Χρυσή Παραλία, Παράντισο — γεμάτο. Ανατολική (Αλυκή, Ροσόγρεμο) πιο ήσυχη.\n\n✕ **Να παραλείψεις τα μαρμάρινα χωριά** — Σωτήρας, Κάστρο, Θεολόγος με μαρμάρινες λωρίδες, πηγάδια.\n\n✕ **Να αγνοήσεις την ενδοχώρα** — Δρόμος Λημένας-Υψάριον 1.204m μέσα κάστανων και πεύκων.\n\n✕ **Μουσείο βιαστικά** — 3.000 χρόνια ιστορίας, 30 λεπτά.\n\n💡 Αυτό που δε σου λέει κανείς: Η Θάσος έχει τις καλύτερες φυσικές θερμές πηγές στο βόρειο Αιγαίο — Θερμά, δωρεάν, χρόνο ρούντο σε πέτρινα λεκάνια κάτω από πλατάνια."
      }
    }
  ],
  ikaria: [
    {
      title: { en: "Why Ikaria — The Blue Zone", el: "Γιατί Ικαρία — Η Μπλε Ζώνη" },
      layout: "numbered",
      items: [
        {
          title: { en: "One of five Blue Zones worldwide", el: "Μία από τις πέντε Μπλε Ζώνες παγκοσμίως" },
          text: { en: "Ikaria is one of the world's five Blue Zones — the rare communities where an unusually high proportion of the population lives past 90. The island has been studied by epidemiologists, sociologists, food scientists and journalists from around the world. The research identified a combination of factors: a traditional diet of legumes, olive oil and wild herbs; daily physical activity built into the mountainous terrain; strong social connections through communal festivals and shared meals; long sleep including afternoon naps; and a cultural approach to time that reduces chronic stress.", el: "Η Ικαρία είναι μία από τις πέντε Μπλε Ζώνες του κόσμου. Η έρευνα εντόπισε έναν συνδυασμό παραγόντων: παραδοσιακή διατροφή, καθημερινή σωματική δραστηριότητα, ισχυρές κοινωνικές συνδέσεις, μεσημεριανό ύπνο και πολιτισμική προσέγγιση στον χρόνο." }
        },
        {
          title: { en: "Diet built from the land", el: "Διατροφή από τη γη" },
          text: { en: "The traditional Ikarian diet is built around legumes — lentils, chickpeas, black-eyed peas — cooked slowly with local olive oil. Wild greens gathered from the hills appear in most meals. Local honey is used medicinally. Ikarian wine is strong, tannic, and drunk in small quantities with meals.", el: "Η παραδοσιακή ικαριώτικη διατροφή βασίζεται σε όσπρια, άγρια χόρτα, ελαιόλαδο και τοπικό κρασί. Το μέλι χρησιμοποιείται και φαρμακευτικά." }
        },
        {
          title: { en: "The social architecture of longevity", el: "Η κοινωνική αρχιτεκτονική της μακροζωίας" },
          text: { en: "The panigiri — a village festival held on the local saint's day with communal food, traditional music and dancing until dawn — is the social heart of Ikarian life. Elderly Ikarians attend and dance regularly. The sense of belonging and purpose that comes from community appears in longevity research across cultures as a protective factor.", el: "Το πανηγύρι είναι η κοινωνική καρδιά της ικαριώτικης ζωής. Οι ηλικιωμένοι Ικαριώτες χορεύουν τακτικά. Η αίσθηση του ανήκειν εμφανίζεται στην έρευνα μακροζωίας ως προστατευτικός παράγοντας." }
        }
      ]
    },
    {
      title: { en: "Getting to Ikaria", el: "Πώς να Φτάσεις στην Ικαρία" },
      layout: "list",
      items: [
        { title: { en: "By ferry from Piraeus", el: "Ακτοπλοϊκά από Πειραιά" }, text: { en: "8–10 hours depending on route and vessel. Ikaria is served by the Samos line. Ferries call at both Agios Kirykos and Evdilos — check which ports your ferry serves.", el: "8–10 ώρες. Η Ικαρία εξυπηρετείται από τη γραμμή της Σάμου. Τα πλοία δένουν σε Αγ. Κήρυκο και Εύδηλο." } },
        { title: { en: "By plane from Athens", el: "Αεροπορικά από Αθήνα" }, text: { en: "45 minutes. The airport is small and flights are limited — book well in advance for summer.", el: "45 λεπτά. Το αεροδρόμιο είναι μικρό — κλείστε έγκαιρα." } },
        { title: { en: "From Samos or Mykonos", el: "Από Σάμο ή Μύκονο" }, text: { en: "Short ferry from Samos (2–3 hours). Possible from Mykonos or Paros in season via inter-island ferries, though schedules vary.", el: "Σύντομο πλοίο από Σάμο (2–3 ώρες). Πιθανή σύνδεση από Μύκονο ή Πάρο εποχικά." } },
      ]
    },
    {
      title: { en: "Getting Around", el: "Μετακινήσεις" },
      layout: "list",
      items: [
        { title: { en: "Car rental (recommended)", el: "Ενοικίαση αυτοκινήτου (συνιστάται)" }, text: { en: "Ikaria is large, mountainous, and the bus service is minimal. Renting a car gives you genuine freedom to explore both coasts and reach villages not served by public transport.", el: "Η Ικαρία είναι μεγάλη και ορεινή. Η ενοικίαση αυτοκινήτου σου δίνει ελευθερία να εξερευνήσεις και τις δύο ακτές." } },
        { title: { en: "Scooter", el: "Μηχανάκι" }, text: { en: "A good option for confident riders on mountain roads. More practical than a car for narrow village streets.", el: "Καλή επιλογή για έμπειρους οδηγούς σε ορεινούς δρόμους." } },
        { title: { en: "Bus service", el: "Λεωφορείο" }, text: { en: "Runs infrequently on a schedule best described as aspirational. Not reliable as a primary transport method.", el: "Λειτουργεί αραιά. Δεν είναι αξιόπιστο ως κύριο μέσο μεταφοράς." } },
      ]
    },
    {
      title: { en: "Villages & Beaches", el: "Χωριά & Παραλίες" },
      layout: "grid",
      items: [
        { title: { en: "Christos Raches", el: "Χριστός Ραχών" }, text: { en: "The village that wakes at midnight. Shops and cafés close in the afternoon and reopen late at night, often staying open until dawn. The village square lit by dim lights with the sound of conversation is a Greece that exists outside the tourist version of itself.", el: "Το χωριό που ξυπνά τα μεσάνυχτα. Καταστήματα και καφέ κλείνουν το απόγευμα και ανοίγουν αργά τη νύχτα." } },
        { title: { en: "Nas & the Temple of Artemis", el: "Νας & Ναός Αρτέμιδος" }, text: { en: "A sacred bay on the northwest coast at the mouth of a river running through a plane-tree gorge. Backed by the ruins of the ancient Temple of Artemis — one of the oldest Artemis sanctuaries in the Aegean. A single taverna serves grilled fish and Ikarian wine.", el: "Ιερός όρμος με ερείπια του αρχαίου Ναού της Αρτέμιδος. Μία ταβέρνα σερβίρει ψητό ψάρι και ικαριώτικο κρασί." } },
        { title: { en: "Therma — Hot Springs", el: "Θερμά — Ιαματικές Πηγές" }, text: { en: "Thermal springs used since antiquity. Radioactive mineral waters emerge at around 33°C and are credited with therapeutic properties. Several official spa facilities and informal bathing spots where hot springs meet cold sea water.", el: "Ιαματικές πηγές από την αρχαιότητα. Νερά 33°C με θεραπευτικές ιδιότητες. Επίσημες εγκαταστάσεις και ανεπίσημα σημεία." } },
        { title: { en: "Seychelles Beach", el: "Παραλία Σεϋχέλλες" }, text: { en: "Requires a boat trip or a serious hike — but the name reflects something true about the colour of the water. Consistently named among the most beautiful beaches in the Aegean by those who have made the effort.", el: "Απαιτεί βαρκάδα ή σοβαρή πεζοπορία. Από τις ομορφότερες παραλίες του Αιγαίου." } },
        { title: { en: "Messakti & Livadi", el: "Μεσακτή & Λιβάδι" }, text: { en: "Long sandy beaches on the north coast near Armenistis. Exposed to the Meltemi wind in summer. Together they form the most developed beach area on the island.", el: "Μακριές αμμώδεις παραλίες στη βόρεια ακτή. Εκτεθειμένες στο μελτέμι." } },
        { title: { en: "Faros Beach", el: "Παραλία Φάρος" }, text: { en: "A quiet beach near Agios Kirykos, accessible without difficulty. Good for a relaxed day by the water close to the capital.", el: "Ήσυχη παραλία κοντά στον Άγιο Κήρυκο, εύκολα προσβάσιμη." } },
      ]
    },
    {
      title: { en: "Food, Drink & The Panigiri", el: "Φαγητό, Ποτό & Πανηγύρι" },
      layout: "list",
      items: [
        { title: { en: "Lentil soup (fakés) & black-eyed peas", el: "Φακές & μαυρομάτικα" }, text: { en: "Staples of the Ikarian diet. Cooked with local olive oil and wild thyme. Consistent with what longevity research identifies as key dietary elements.", el: "Βασικά στοιχεία της ικαριώτικης διατροφής. Μαγειρεμένα με τοπικό ελαιόλαδο." } },
        { title: { en: "Wild greens (horta) & soufiko", el: "Χόρτα & σουφίκο" }, text: { en: "Wild greens gathered from the hillsides. Soufiko is a summer vegetable stew cooked slowly in olive oil — the Ikarian version of ratatouille.", el: "Άγρια χόρτα. Το σουφίκο είναι καλοκαιρινό στιφάδο λαχανικών." } },
        { title: { en: "Ikarian wine & honey", el: "Ικαριώτικο κρασί & μέλι" }, text: { en: "Strong, tannic red wine not widely exported — drunk in small glasses with meals. Dark honey from mountain heather and wild thyme, used medicinally and eaten raw with bread and local kathoura cheese.", el: "Δυνατό κόκκινο κρασί. Σκούρο μέλι από ρείκι και θυμάρι." } },
        { title: { en: "The panigiri festival", el: "Το πανηγύρι" }, text: { en: "Each village celebrates its patron saint's day with an outdoor festival: communal food, local wine, traditional music and dancing until dawn. Everyone attends. There is no entrance fee. Visiting a panigiri is the most direct experience of what makes Ikarian social life distinctive.", el: "Κάθε χωριό γιορτάζει τον άγιο του. Κοινό φαγητό, κρασί, μουσική και χορός ως το πρωί. Η πιο αυθεντική εμπειρία." } },
      ]
    },
    {
      title: { en: "Best Time to Visit", el: "Καλύτερη Εποχή" },
      layout: "list",
      items: [
        { title: { en: "May–June", el: "Μάιος–Ιούνιος" }, text: { en: "The island is green from spring rain. Warm but not extreme. Good availability of accommodation.", el: "Το νησί είναι πράσινο. Ζεστά αλλά όχι ακραία. Καλή διαθεσιμότητα." } },
        { title: { en: "July–August", el: "Ιούλιος–Αύγουστος" }, text: { en: "Peak summer and the panigiri season. The island fills in August — still quiet by Cycladic standards. Book accommodation early.", el: "Κορυφή καλοκαιριού και περίοδος πανηγυριών. Το νησί γεμίζει τον Αύγουστο." } },
        { title: { en: "September–October", el: "Σεπτέμβριος–Οκτώβριος" }, text: { en: "Arguably the best months. Summer crowds have left. Sea remains warm. Hillsides turn golden. Tavernas and accommodation remain open.", el: "Ίσως οι καλύτεροι μήνες. Η θάλασσα ζεστή, τα πλήθη έχουν φύγει." } },
      ]
    },
    {
      title: { en: "Where to Stay", el: "Πού να Μείνεις" },
      layout: "list",
      items: [
        { title: { en: "Agios Kirykos area", el: "Περιοχή Αγ. Κήρυκου" }, text: { en: "Practical, convenient for the ferry. Good base for exploring the south coast. Most amenities on the island are here.", el: "Πρακτικό, βολικό για το πλοίο. Καλή βάση για νότια ακτή." } },
        { title: { en: "Armenistis area", el: "Περιοχή Αρμενιστή" }, text: { en: "Closest to the best beaches with a bohemian atmosphere. The most popular base for summer visitors. Good tavernas.", el: "Κοντά στις καλύτερες παραλίες. Η πιο δημοφιλής βάση." } },
        { title: { en: "Christos Raches", el: "Χριστός Ραχών" }, text: { en: "For the experience of the mountain village and the inverted daily schedule. Unique atmosphere.", el: "Για την εμπειρία του ορεινού χωριού." } },
        { title: { en: "Nas", el: "Νας" }, text: { en: "Very limited accommodation but an extraordinary setting by the sacred bay. A few guesthouses and studios.", el: "Πολύ περιορισμένη διαμονή σε εξαιρετική τοποθεσία." } },
      ]
    },
    {
      title: { en: "FAQ — Ikaria Essentials", el: "Συχνές Ερωτήσεις" },
      layout: "faq",
      items: [
        { title: { en: "Why do Ikarians live so long?", el: "Γιατί ζουν τόσο οι Ικαριώτες;" }, text: { en: "The research identifies several interacting factors: a traditional diet rich in legumes, olive oil and wild plants; daily physical activity built into the terrain; strong social connections through festivals and shared meals; long sleep including afternoon naps; and a cultural approach to time that reduces chronic stress.", el: "Διατροφή, σωματική δραστηριότητα, κοινωνικές συνδέσεις, ύπνος και πολιτισμική στάση απέναντι στον χρόνο." } },
        { title: { en: "Is Ikaria difficult to get to?", el: "Είναι δύσκολο να φτάσω;" }, text: { en: "The ferry from Piraeus takes 8–10 hours, which puts some travellers off. Those who make the journey typically find it worthwhile. Flights from Athens take 45 minutes but are limited.", el: "Το πλοίο κάνει 8–10 ώρες. Οι πτήσεις είναι 45 λεπτά αλλά περιορισμένες." } },
        { title: { en: "Do I need a car?", el: "Χρειάζομαι αυτοκίνητο;" }, text: { en: "Yes, realistically. The island is large and the bus service is minimal. Renting a car gives you access to the full island.", el: "Ναι. Το νησί είναι μεγάλο και τα λεωφορεία ελάχιστα." } },
        { title: { en: "When are the panigiri festivals?", el: "Πότε γίνονται τα πανηγύρια;" }, text: { en: "Most are in July and August, with the largest gatherings in late July. Ask locally for specific dates — the calendar changes annually.", el: "Ιούλιος και Αύγουστος. Ρωτήστε τοπικά." } },
        { title: { en: "How long should I stay?", el: "Πόσες μέρες να μείνω;" }, text: { en: "Minimum four days, ideally a week. Ikaria takes time to reveal itself. Visitors who stay only two days often leave confused. Those who stay a week often don't want to leave.", el: "Τέσσερις μέρες ελάχιστα, ιδανικά μία εβδομάδα." } },
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Ikaria", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Ικαρία" },
      text: {
        en: "✕ **Expecting tourist infrastructure** — Ikaria is deliberately not set up for mass tourism. ATMs are rare, roads are rough, and beaches have no sunbeds. This is not a flaw — it is the point. Come prepared and you will love it.\n\n✕ **Agios Kirykos as a base** — The capital is functional but has the least character on the island. The villages of Christos, Menites, and Faros have the atmosphere, the tavernas, and the people.\n\n✕ **Trying to see the island in a day** — Ikaria's roads are mountainous, slow, and rewarding. A day trip gives you a taste but not the experience. The Ikarian rhythm — long taverna lunches, impromptu music nights, afternoon naps — needs time.\n\n✕ **Skipping the thermal springs** — Ikaria has multiple natural hot springs, from the famous Therma beach (free, public, seawater) to hidden mountain springs at Lefkada and Xylosyrtis. The tradition of communal bathing here is thousands of years old.\n\n✕ **Missing the Panigiri festivals** — From June to September, Ikarian villages hold all-night festivals (panigiria) with live music, local wine, roasted goat, and dancing until dawn. Ask a local when the next one is — it is the authentic experience.\n\n💡 What nobody tells you: Ikaria is a Blue Zone — one of five places in the world where people live measurably longer. The secret is not diet or exercise but community: the Ikarian social structure of long meals together, afternoon naps, and no rush. Spend a week here and you will feel ten years younger.",
        el: "✕ **Να περιμένεις τουριστική υποδομή** — ATM σπάνια, δρόμοι σκληροί, παραλίες χωρίς σόλια. Δεν είναι πρόβλημα — είναι το νόημα.\n\n✕ **Αγ. Κήρυκος ως βάση** — Λειτουργική αλλά χωρίς χαρακτήρα. Χριστός, Μενιτές, Φάρος.\n\n✕ **Μία μέρα στο νησί** — Οι δρόμοι είναι ορεινοί, αργοί, ανταμειωτικοί. Ο ρυθμός της Ικαρίας χρειάζεται χρόνο.\n\n✕ **Να παραλείψεις τις θερμές πηγές** — Δωρεάν, δημόσιες, θαλασσινό νερό. Λεφκάδα, Ξυλοσύρτη.\n\n✕ **Panigiria** — Ιούνιος-Σεπτέμβριος, όλη νύχτα μουσική, κρασί, κατσικόψητο, χορός μέχρι την αυγή.\n\n💡 Αυτό που δε σου λέει κανείς: Η Ικαρία είναι Blue Zone — ένα από τα πέντε μέρη όπου οι άνθρωποι ζουν πιο πολύ. Το μυστικό δεν είναι δίαιτα αλλά κοινωνία — μακριά γεύματα μαζί, μεσημεριανός ύπνος, χωρίς βιασύνη."
      }
    }
  ],
  evia: [
    {
      title: { en: "Why visit Evia", el: "Γιατί να επισκεφθείς την Εύβοια" },
      layout: "numbered",
      items: [
        {
          title: { en: "Incredible diversity in a single island", el: "Απίστευτη ποικιλομορφία σε ένα νησί" },
          text: {
            en: "Evia is not one destination but several. In the north you will find dense pine forests, waterfalls, and therapeutic hot springs. Central Evia offers rugged mountains, traditional stone villages, and the unique tidal phenomenon of the Euripus Strait in Chalkida. The south is arid and dramatic, with Cycladic-style landscapes, hidden coves, and the breathtaking Dimosari Gorge. You can drive from alpine scenery to turquoise Aegean beaches in under an hour.",
            el: "Η Εύβοια δεν είναι ένας προορισμός αλλά πολλοί. Στο βορρά θα βρείτε πυκνά πευκοδάση, καταρράκτες και ιαματικές πηγές. Η κεντρική Εύβοια προσφέρει άγρια βουνά, παραδοσιακά πέτρινα χωριά και το μοναδικό φαινόμενο της παλίρροιας στο Στενό του Ευρίπου. Η νότια Εύβοια είναι άνυδρη και δραματική, με τοπία κυκλαδίτικου στυλ, κρυμμένους όρμους και το φαράγγι των Διμώσαρων."
          }
        },
        {
          title: { en: "Thermal springs with a 2,000-year history", el: "Ιαματικές πηγές με ιστορία 2.000 ετών" },
          text: {
            en: "The thermal springs of Edipsos have been attracting visitors since Roman times. Famous figures like Marcus Aurelius, Winston Churchill, and Aristotle Onassis have soaked in these waters. The mineral-rich springs emerge at temperatures up to 80°C, and in some places the hot water flows directly into the sea, creating natural open-air spas. It remains one of Greece's most significant wellness destinations.",
            el: "Οι ιαματικές πηγές της Αιδηψού προσελκύουν επισκέπτες από τη ρωμαϊκή εποχή. Διάσημες προσωπικότητες όπως ο Μάρκος Αυρήλιος, ο Ουίνστον Τσόρτσιλ και ο Αριστοτέλης Ωνάσης έχουν απολαύσει αυτά τα νερά. Οι πηγές αναβλύζουν σε θερμοκρασίες έως 80°C και σε ορισμένα σημεία το ζεστό νερό ρέει απευθείας στη θάλασσα."
          }
        },
        {
          title: { en: "Authentic, untouristed character", el: "Αυθεντικός, ανεπηρέαστος χαρακτήρας" },
          text: {
            en: "Despite being the second-largest island in Greece and just an hour from Athens, Evia remains refreshingly free of mass tourism. The villages are genuine, the tavernas serve food for locals, and the beaches offer space even in summer. This is where Athenians escape for the weekend, yet it still feels undiscovered.",
            el: "Παρότι είναι το δεύτερο μεγαλύτερο νησί της Ελλάδας και μόλις μία ώρα από την Αθήνα, η Εύβοια παραμένει αναζωογονητικά απαλλαγμένη από μαζικό τουρισμό. Τα χωριά είναι αυθεντικά, οι ταβέρνες σερβίρουν φαγητό για ντόπιους και οι παραλίες προσφέρουν χώρο ακόμα και το καλοκαίρι."
          }
        },
        {
          title: { en: "Easy access from Athens", el: "Εύκολη πρόσβαση από την Αθήνα" },
          text: {
            en: "Evia is one of the easiest 'island' escapes from Athens. You cross the bridge at Chalkida and you are there — no ferries required for the central and northern parts. This makes it perfect for weekend trips, spontaneous getaways, or combining with an Athens holiday without the complexity of ferry schedules.",
            el: "Η Εύβοια είναι μία από τις πιο εύκολες 'νησιωτικές' αποδράσεις από την Αθήνα. Διασχίζεις τη γέφυρα στη Χαλκίδα και είσαι εκεί — χωρίς να χρειάζεσαι πλοίο για τα κεντρικά και βόρεια μέρη. Ιδανική για σαββατοκύριακα και αυθόρμητες αποδράσεις."
          }
        }
      ]
    },
    {
      title: { en: "Best time to go (and when to avoid)", el: "Καλύτερη εποχή για να πας (και πότε να το αποφύγεις)" },
      layout: "list",
      alert: {
        en: "Secret: Evia is a year-round destination. The thermal springs make winter visits worthwhile, while spring and autumn offer the best balance of weather and crowds.",
        el: "Μυστικό: Η Εύβοια είναι προορισμός για όλο το χρόνο. Οι ιαματικές πηγές κάνουν τις χειμερινές επισκέψεις αξιόλογες, ενώ η άνοιξη και το φθινόπωρο προσφέρουν την καλύτερη ισορροπία καιρού και κόσμου."
      },
      items: [
        {
          title: { en: "May–June", el: "Μάιος–Ιούνιος" },
          text: {
            en: "Ideal weather for hiking and outdoor exploration. The landscape is lush and green, especially in the north. The sea is warm enough for swimming by June. Low crowds and reasonable prices.",
            el: "Ιδανικός καιρός για πεζοπορία και εξερεύνηση. Το τοπίο είναι πράσινο, ειδικά στο βορρά. Η θάλασσα είναι αρκετά ζεστή για μπάνιο από τον Ιούνιο."
          }
        },
        {
          title: { en: "July–August", el: "Ιούλιος–Αύγουστος" },
          text: {
            en: "Peak season with hot weather and busy beaches. The popular spots near Chalkida and Agia Anna can get crowded on weekends. If you visit now, explore the less accessible beaches in the south for more space.",
            el: "Περίοδος αιχμής με ζεστό καιρό και γεμάτες παραλίες. Τα δημοφιλή σημεία κοντά στη Χαλκίδα και την Αγία Άννα γεμίζουν τα Σαββατοκύριακα. Εξερευνήστε τις λιγότερο προσβάσιμες παραλίες στο νότο."
          }
        },
        {
          title: { en: "September–October", el: "Σεπτέμβριος–Οκτώβριος" },
          text: {
            en: "Many consider this the best period. The sea is at its warmest from the summer heat, the crowds have thinned, and the autumn light is beautiful. Perfect for combining swimming with mountain exploration.",
            el: "Πολλοί θεωρούν αυτή την καλύτερη περίοδο. Η θάλασσα είναι ζεστή από το καλοκαίρι, το πλήθος έχει αραιώσει και το φθινοπωρινό φως είναι όμορφο."
          }
        },
        {
          title: { en: "November–April", el: "Νοέμβριος–Απρίλιος" },
          text: {
            en: "Quiet season perfect for thermal springs, hiking, and exploring mountain villages. Many coastal businesses close, but the spas in Edipsos operate year-round. Skiing on Mount Dirfys is possible in winter.",
            el: "Ήσυχη περίοδος ιδανική για ιαματικές πηγές, πεζοπορία και εξερεύνηση ορεινών χωριών. Τα σπα στην Αιδηψό λειτουργούν όλο το χρόνο."
          }
        }
      ]
    },
    {
      title: { en: "How to get to Evia", el: "Πώς φτάνεις στην Εύβοια" },
      layout: "grid",
      items: [
        {
          title: { en: "By car (recommended)", el: "Με αυτοκίνητο (συνιστάται)" },
          text: {
            en: "From Athens, drive to Chalkida via the national road (approximately 1–1.5 hours). The bridge is free and operates 24/7. For northern Evia, you can take the ferry from Arkitsa to Edipsos. For southern Evia, ferries from Agia Marina to Styra or Rafina to Marmari save driving time.",
            el: "Από την Αθήνα, οδηγείτε μέχρι τη Χαλκίδα μέσω εθνικής οδού (περίπου 1–1.5 ώρα). Η γέφυρα είναι δωρεάν και λειτουργεί 24/7. Για τη βόρεια Εύβοια, μπορείτε να πάρετε το πλοίο από Αρκίτσα προς Αιδηψό."
          }
        },
        {
          title: { en: "By bus", el: "Με λεωφορείο" },
          text: {
            en: "KTEL buses run from Athens to Chalkida regularly (every 30–60 minutes). From Chalkida, local buses connect to major towns but service is limited, especially for reaching remote beaches and mountain villages.",
            el: "Λεωφορεία ΚΤΕΛ εκτελούν δρομολόγια από Αθήνα προς Χαλκίδα κάθε 30–60 λεπτά. Από τη Χαλκίδα, τοπικά λεωφορεία συνδέονται με μεγάλες πόλεις αλλά το δίκτυο είναι περιορισμένο."
          }
        },
        {
          title: { en: "Getting around", el: "Μετακινήσεις στο νησί" },
          text: {
            en: "A car is essential for exploring Evia properly. The island is large (over 180km long) and public transport cannot reach the best beaches and mountain villages. Rent a car in Athens or Chalkida.",
            el: "Το αυτοκίνητο είναι απαραίτητο για να εξερευνήσετε σωστά την Εύβοια. Το νησί είναι μεγάλο (πάνω από 180 χιλιόμετρα) και τα μέσα μαζικής μεταφοράς δεν φτάνουν στις καλύτερες παραλίες και στα ορεινά χωριά."
          }
        }
      ]
    },
    {
      title: { en: "Top attractions & experiences", el: "Κορυφαία αξιοθέατα & εμπειρίες" },
      layout: "numbered",
      items: [
        {
          title: { en: "Edipsos thermal springs", el: "Ιαματικές πηγές Αιδηψού" },
          text: {
            en: "The thermal springs of Edipsos are the most famous in Greece. Natural hot water emerges at temperatures up to 80°C, rich in minerals. You can experience them in organized spa hotels or in natural seaside pools where hot water mixes with the sea. The waterfront is lined with cafes and restaurants, making it a complete wellness destination.",
            el: "Οι ιαματικές πηγές της Αιδηψού είναι οι πιο διάσημες στην Ελλάδα. Φυσικό ζεστό νερό αναβλύζει σε θερμοκρασίες έως 80°C. Μπορείτε να τις απολαύσετε σε οργανωμένα σπα ή σε φυσικές πισίνες δίπλα στη θάλασσα."
          }
        },
        {
          title: { en: "Hike the Dimosari Gorge", el: "Πεζοπορία στο φαράγγι Διμώσαρων" },
          text: {
            en: "One of the most beautiful hikes in Greece, the Dimosari Gorge descends from the high plateaus of Mount Ochi down to the Aegean Sea at Kallianos beach. The trail passes through lush vegetation, waterfalls, and dramatic rock formations. It takes approximately 3–4 hours and ends with a swim in crystal-clear waters.",
            el: "Ένα από τα ωραιότερα μονοπάτια στην Ελλάδα, το φαράγγι των Διμώσαρων κατηφορίζει από τα οροπέδια του όρους Όχη προς το Αιγαίο στην παραλία Καλλιανού. Η διαδρομή περνά μέσα από πλούσια βλάστηση και καταρράκτες."
          }
        },
        {
          title: { en: "Mount Dirfys hiking", el: "Πεζοπορία στον Δίρφυ" },
          text: {
            en: "The highest mountain in Evia (1,743m) offers challenging hiking trails through dense fir forests with panoramic views of the Aegean and the Euboean Gulf. The village of Steni Dirfyos is the traditional starting point, with mountain refuges and tavernas serving hearty local food.",
            el: "Το ψηλότερο βουνό της Εύβοιας (1.743μ) προσφέρει απαιτητικά μονοπάτια μέσα σε πυκνά ελατοδάση με πανοραμική θέα στο Αιγαίο. Το χωριό Στενή Δίρφυος είναι η παραδοσιακή αφετηρία."
          }
        },
        {
          title: { en: "Chalkida tidal phenomenon", el: "Παλιρροϊκό φαινόμενο Χαλκίδας" },
          text: {
            en: "The Euripus Strait in Chalkida has one of the most unique tidal phenomena in the world — the current changes direction multiple times a day, and the water literally flows in different directions at different depths. The old bridge is the best spot to observe this, and the waterfront cafes make for a perfect evening out.",
            el: "Το Στενό του Ευρίπου παρουσιάζει ένα από τα πιο μοναδικά παλιρροϊκά φαινόμενα στον κόσμο — το ρεύμα αλλάζει κατεύθυνση πολλές φορές την ημέρα. Η παλιά γέφυρα είναι το καλύτερο σημείο παρατήρησης."
          }
        },
        {
          title: { en: "The Dragon Houses of Mount Ochi", el: "Τα Δρακόσπιτα της Όχης" },
          text: {
            en: "Mysterious megalithic structures built from massive stone slabs without mortar, dating back to prehistoric times. The best-preserved is on the summit of Mount Ochi near Karystos. Their purpose remains unknown — theories range from ancient temples to shelters. The hike to reach them is rewarded with spectacular views.",
            el: "Μυστηριώδεις μεγαλιθικές κατασκευές από τεράστιες πέτρινες πλάκες χωρίς συνδετικό υλικό. Το καλύτερα διατηρημένο βρίσκεται στην κορυφή του όρους Όχη κοντά στην Κάρυστο. Η πεζοπορία ανταμείβεται με εντυπωσιακή θέα."
          }
        }
      ]
    },
    {
      title: { en: "Beaches in Evia", el: "Παραλίες στην Εύβοια" },
      layout: "list",
      alert: {
        en: "Secret: The best beaches require effort. The southern coast has dozens of unnamed coves accessible only by dirt roads or short hikes — these are where you will find true solitude even in August.",
        el: "Μυστικό: Οι καλύτερες παραλίες απαιτούν προσπάθεια. Η νότια ακτή έχει δεκάδες ανώνυμους όρμους προσβάσιμους μόνο μέσω χωματόδρομων — εκεί θα βρείτε πραγματική μοναξιά ακόμα και τον Αύγουστο."
      },
      items: [
        {
          title: { en: "Chiliadou Beach", el: "Παραλία Χιλιαδού" },
          text: {
            en: "One of the most famous beaches in Evia, surrounded by dramatic cliffs and lush greenery. The water is crystal clear and deep, making it perfect for snorkeling. Partly organized with a beach bar, partly wild. Popular with alternative travelers.",
            el: "Μία από τις πιο διάσημες παραλίες της Εύβοιας, περιτριγυρισμένη από εντυπωσιακούς βράχους. Τα νερά είναι κρυστάλλινα και βαθιά. Μερικώς οργανωμένη, μερικώς άγρια."
          }
        },
        {
          title: { en: "Agia Anna Beach", el: "Παραλία Αγία Άννα" },
          text: {
            en: "A long sandy beach ideal for families with organized beach bars and calm waters. Easy access and plenty of amenities make it one of the most popular summer destinations on the island. Gets crowded in August.",
            el: "Μεγάλη αμμώδης παραλία ιδανική για οικογένειες. Οργανωμένες ξαπλώστρες, ήρεμα νερά και εύκολη πρόσβαση. Από τους πιο δημοφιλείς καλοκαιρινούς προορισμούς στο νησί."
          }
        },
        {
          title: { en: "Pefki Beach", el: "Παραλία Πευκί" },
          text: {
            en: "Located in northern Evia, Pefki is a long sandy beach with pine trees reaching almost to the shoreline. Relaxed atmosphere, good tavernas nearby, and family-friendly environment. One of the best beaches in the north.",
            el: "Στη βόρεια Εύβοια, το Πευκί είναι μια μακριά αμμουδιά με πεύκα που φτάνουν σχεδόν μέχρι τη θάλασσα. Χαλαρή ατμόσφαιρα, καλές ταβέρνες και φιλική για οικογένειες."
          }
        },
        {
          title: { en: "Southern hidden coves", el: "Νότιοι κρυμμένοι όρμοι" },
          text: {
            en: "The south coast between Karystos and Marmari is dotted with semi-hidden beaches accessible via dirt roads or short hikes. These offer the most authentic beach experience in Evia — turquoise waters, pebble shores, and absolute quiet. Bring your own supplies as most have no facilities.",
            el: "Η νότια ακτή μεταξύ Καρύστου και Μαρμαρίου είναι διάσπαρτη από ημίκρυφες παραλίες. Τιρκουάζ νερά, βοτσαλωτές ακτές και απόλυτη ησυχία. Φέρτε τις προμήθειές σας."
          }
        }
      ]
    },
    {
      title: { en: "Food & local products", el: "Φαγητό & τοπικά προϊόντα" },
      layout: "list",
      alert: {
        en: "Secret: The mountain villages in central Evia serve some of the best traditional food on the island. Look for tavernas in Steni, Kymi, and the villages around Dirfys for authentic, slow-cooked meals.",
        el: "Μυστικό: Τα ορεινά χωριά της κεντρικής Εύβοιας σερβίρουν από τα καλύτερα παραδοσιακά φαγητά του νησιού. Αναζητήστε ταβέρνες στη Στενή, την Κύμη και τα χωριά γύρω από τον Δίρφυ."
      },
      items: [
        {
          title: { en: "Figs of Taxiarchis", el: "Σύκα Ταξιάρχη" },
          text: {
            en: "The figs grown in the village of Taxiarchis are renowned throughout Greece for their exceptional sweetness and quality. The local climate and soil produce a fig with a unique texture and flavour. Try them fresh in late summer or dried year-round.",
            el: "Τα σύκα που καλλιεργούνται στο χωριό Ταξιάρχης είναι φημισμένα σε όλη την Ελλάδα για τη γλύκα και την ποιότητά τους. Δοκιμάστε τα φρέσκα στα τέλη του καλοκαιριού ή αποξηραμένα όλο τον χρόνο."
          }
        },
        {
          title: { en: "Mountain honey", el: "Μέλι βουνού" },
          text: {
            en: "Evia's diverse flora produces exceptional honey, particularly thyme honey and pine honey from the forests of the north. The mountain villages sell local honey that is pure, aromatic, and completely different from commercial varieties.",
            el: "Η ποικιλόμορφη χλωρίδα της Εύβοιας παράγει εξαιρετικό μέλι, ιδιαίτερα θυμαρίσιο και πευκόμελο. Τα ορεινά χωριά πωλούν τοπικό μέλι που είναι αγνό και αρωματικό."
          }
        },
        {
          title: { en: "Fresh seafood", el: "Φρέσκα θαλασσινά" },
          text: {
            en: "Coastal tavernas serve fresh fish and seafood caught daily in the Aegean. The northern coast near Edipsos and the eastern coast around Kymi are particularly good for seafood. Try the grilled octopus, barbounia (red mullet), and local shellfish.",
            el: "Οι παραθαλάσσιες ταβέρνες σερβίρουν φρέσκο ψάρι και θαλασσινά. Η βόρεια ακτή κοντά στην Αιδηψό και η ανατολική γύρω από την Κύμη είναι ιδιαίτερα καλές για θαλασσινά."
          }
        },
        {
          title: { en: "Local cheese & pies", el: "Τοπικά τυριά & πίτες" },
          text: {
            en: "Evia produces excellent local cheeses, including a soft white cheese similar to feta but with its own character. Handmade pies with local greens (horta), cheese, and mountain herbs are a staple of village tavernas. Simple, traditional, and incredibly flavorful.",
            el: "Η Εύβοια παράγει εξαιρετικά τοπικά τυριά. Οι χειροποίητες πίτες με χόρτα, τυρί και μυρωδικά του βουνού είναι βασικό πιάτο στις ταβέρνες των χωριών."
          }
        }
      ]
    },
    {
      title: { en: "Practical tips", el: "Πρακτικές συμβουλές" },
      layout: "list",
      items: [
        {
          title: { en: "Rent a car", el: "Νοικιάστε αυτοκίνητο" },
          text: {
            en: "This is the single most important tip for Evia. Public transport is limited and cannot reach the best beaches and mountain villages. A car gives you the freedom to explore at your own pace.",
            el: "Το σημαντικότερο tip για την Εύβοια. Τα μέσα μεταφοράς είναι περιορισμένα και δεν φτάνουν στις καλύτερες παραλίες."
          }
        },
        {
          title: { en: "Bring cash", el: "Φέρτε μετρητά" },
          text: {
            en: "Remote villages and small tavernas often do not accept cards. ATMs are available in larger towns like Chalkida, Edipsos, and Kymi, but can be scarce in the mountains and south.",
            el: "Τα απομακρυσμένα χωριά συχνά δεν δέχονται κάρτες. Τα ΑΤΜ υπάρχουν σε μεγαλύτερες πόλεις αλλά είναι σπάνια στα βουνά."
          }
        },
        {
          title: { en: "Mobile signal drops in mountains", el: "Το σήμα κινητού χάνεται στα βουνά" },
          text: {
            en: "Once you head into the mountains of central and northern Evia, mobile coverage becomes unreliable. Download maps offline and let someone know your route if hiking.",
            el: "Μόλις μπείτε στα βουνά της κεντρικής και βόρειας Εύβοιας, η κάλυψη κινητής τηλεφωνίας γίνεται αναξιόπιστη. Κατεβάστε χάρτες εκτός σύνδεσης."
          }
        },
        {
          title: { en: "Book accommodation early in August", el: "Κλείστε διαμονή νωρίς τον Αύγουστο" },
          text: {
            en: "While Evia is less crowded than the Cyclades, August is still peak season for Greeks. Popular areas like Agia Anna and Edipsos fill up, so book ahead if visiting in high summer.",
            el: "Αν και η Εύβοια είναι λιγότερο πολυσύχναστη από τις Κυκλάδες, ο Αύγουστος είναι ακόμα περίοδος αιχμής. Κλείστε έγκαιρα."
          }
        },
        {
          title: { en: "Expect long driving distances", el: "Υπολογίστε μεγάλες αποστάσεις" },
          text: {
            en: "Evia is 180km long with winding mountain roads. Driving from Chalkida to Edipsos takes about 2 hours, and to Karystos about 2.5 hours. Plan your itinerary realistically.",
            el: "Η Εύβοια έχει μήκος 180χλμ με δρόμους που στρίβουν. Από Χαλκίδα μέχρι Αιδηψό υπολογίστε 2 ώρες και μέχρι Κάρυστο 2.5 ώρες."
          }
        }
      ]
    },
    {
      title: { en: "FAQ — Evia Essentials", el: "Συχνές Ερωτήσεις" },
      layout: "faq",
      items: [
        {
          title: { en: "Is Evia worth visiting?", el: "Αξίζει να επισκεφθείτε την Εύβοια;" },
          text: {
            en: "Absolutely. Evia offers more variety than most Greek islands — mountains, forests, thermal springs, diverse beaches, and authentic villages — all with fewer crowds and lower prices than the Cyclades.",
            el: "Απολύτως. Η Εύβοια προσφέρει μεγαλύτερη ποικιλία από τα περισσότερα ελληνικά νησιά — βουνά, δάση, ιαματικές πηγές, παραλίες — με λιγότερο κόσμο και χαμηλότερες τιμές."
          }
        },
        {
          title: { en: "Is Evia expensive?", el: "Είναι ακριβή η Εύβοια;" },
          text: {
            en: "Generally cheaper than the Cyclades or Crete. Accommodation, food, and activities are reasonably priced. Edipsos spas can be more expensive but still offer good value compared to international wellness destinations.",
            el: "Γενικά φθηνότερη από τις Κυκλάδες ή την Κρήτη. Η διαμονή, το φαγητό και οι δραστηριότητες έχουν λογικές τιμές."
          }
        },
        {
          title: { en: "Do I need a car?", el: "Χρειάζομαι αυτοκίνητο;" },
          text: {
            en: "Yes. Public transport is very limited for reaching the best beaches and mountain villages. A rental car is essential for a proper Evia experience.",
            el: "Ναι. Τα μέσα μαζικής μεταφοράς είναι πολύ περιορισμένα. Το αυτοκίνητο είναι απαραίτητο."
          }
        },
        {
          title: { en: "Is Evia good for families?", el: "Είναι κατάλληλη η Εύβοια για οικογένειες;" },
          text: {
            en: "Yes, especially Agia Anna and Pefki areas which have organized beaches and family-friendly accommodation. The easy access from Athens without a ferry makes it convenient for families with young children.",
            el: "Ναι, ειδικά οι περιοχές Αγία Άννα και Πευκί. Η εύκολη πρόσβαση από την Αθήνα χωρίς πλοίο την κάνει βολική για οικογένειες."
          }
        },
        {
          title: { en: "Can I combine Evia with Athens?", el: "Μπορώ να συνδυάσω την Εύβοια με την Αθήνα;" },
          text: {
            en: "Easily. It is one of the closest escapes from Athens — just a 1-hour drive to Chalkida. Perfect for a 3-5 day side trip or weekend getaway during a longer Athens stay.",
            el: "Εύκολα. Είναι μία από τις κοντινότερες αποδράσεις από την Αθήνα — μόλις 1 ώρα οδήγησης. Ιδανική για 3-5 μέρες."
          }
        },
        {
          title: { en: "How long should I stay?", el: "Πόσες μέρες να μείνω;" },
          text: {
            en: "Minimum 3 days for one region, ideally 5-7 days to explore the island properly. Focus on one area rather than rushing across the entire island.",
            el: "Τουλάχιστον 3 μέρες για μία περιοχή, ιδανικά 5-7 μέρες για σωστή εξερεύνηση. Επικεντρωθείτε σε μία περιοχή."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Evia", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Εύβοια" },
      text: {
        en: "✕ **Chalkis as a base** — Chalkis is functional but not charming. The real Evia is in the north (Edipsos, Istiaia) with its thermal springs and forests, or in the south (Karystos, Styra) with its mountain villages and quiet beaches.\n\n✕ **Ignoring the thermal springs** — Edipsos has natural hot springs that have been famous since Roman times. The public thermal baths are free and the setting — overlooking the sea with ancient ruins nearby — is extraordinary.\n\n✕ **Skipping the mountain villages** — Mount Dirfys in the centre of the island has traditional villages (Steni, Styra) with stone houses, plane trees, and a pace that feels centuries away from the coastal resorts.\n\n✕ **Treating it as just an extension of Attica** — Many Athenians use Evia for quick weekend beach trips and never explore beyond the first few kilometres. The island is the second largest in Greece and has enough for a full week of exploration.\n\n✕ **Missing the north coast drive** — The road from Istiaia to Agia Anna along the north coast passes through olive groves, pine forests, and small fishing villages that few non-Greek visitors ever see.\n\n💡 What nobody tells you: Evia is one of the most underrated islands in Greece — long enough to have diverse landscapes, close enough to the mainland for easy access, but just remote enough that mass tourism has not reached it. The beaches of the north coast rival anything in the Cyclades.",
        el: "✕ **Χαλκίδα ως βάση** — Λειτουργική. Η πραγματική Εύβοια: Βορράς (Εδιπσός, Ιστιαία) με θερμές πηγές, Νότος (Καρύστος, Στύρα) με χωριά.\n\n✕ **Θερμές πηγές** — Εδιπσός, ρωμαϊκής εποχής. Δωρεάν δημόσιες λουτρά, θέα στη θάλασσα.\n\n✕ **Ορεινά χωριά** — Δίρφυς, Στενή, Στύρα με πέτρινα σπίτια.\n\n✕ **Να το θεωρήσεις προέκταση Αττικής** — Το 2ο μεγαλύτερο νησί. Αρκετά για μια ολόκληρη εβδομάδα.\n\n✕ **Παράλειψη βόρειας ακτής** — Ιστιαία-Αγ. Άννα μέσα ελαιώνων, πεύκων, ψαροχωριών.\n\n💡 Αυτό που δε σου λέει κανείς: Η Εύβοια είναι από τα πιο υποτιμημένα νησιά — μεγάλη, κοντά στην ηπειρωτική, αλλά αρκετά μακριά από τον μαζικό τουρισμό. Οι παραλίες του βορρά συναγωνίζονται τις Κυκλάδες."
      }
    }
  ],
  syros: [
    {
      title: {
        en: "Why visit Syros",
        el: "Γιατί να επισκεφθείς τη Σύρο",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "Ermoupoli is one of the finest port cities in the entire Aegean",
            el: "Η Ερμούπολη είναι μια από τις ωραιότερες λιμνοπόλεις του Αιγαίου",
          },
          text: {
            en: "Unlike the whitewashed Cycladic villages, Ermoupoli is a grand neoclassical city built by shipping merchants in the 19th century. The central Miaouli Square, framed by the imposing Town Hall and marble-paved cafes, is the heart of the city. Tip: visit Miaouli Square around 9pm when the lights are on and the city is alive with evening strolls.",
            el: "Σε αντίθεση με τα ασβεστωμένα κυκλαδίτικα χωριά, η Ερμούπολη είναι μια μεγαλοπρεπής νεοκλασική πόλη χτισμένη από εμπόρους τον 19ο αιώνα. Η κεντρική πλατεία Μιαούλη, με το επιβλητικό Δημαρχείο και τα μαρμάρινα καφέ, είναι η καρδιά της πόλης. Tip: επισκέψου την πλατεία Μιαούλη γύρω στις 9μμ όταν τα φώτα είναι αναμμένα και η πόλη ζωντανεύει με βραδινές βόλτες.",
          },
        },
        {
          title: {
            en: "Ano Syros is the best-preserved medieval Cycladic settlement you have never heard of",
            el: "Η Άνω Σύρος είναι ο καλύτερα διατηρημένος μεσαιωνικός κυκλαδίτικος οικισμός που δεν έχεις ακούσει",
          },
          text: {
            en: "Perched on the hill above Ermoupoli, Ano Syros is a labyrinth of narrow stone alleys, arched passages, and whitewashed houses climbing up to the Cathedral of St George. Unlike the commercialized hill towns of other islands, Ano Syros feels lived-in and authentic. Tip: climb up in the late afternoon when the light softens and the views over Ermoupoli and the Aegean are unforgettable.",
            el: "Χτισμένη στον λόφο πάνω από την Ερμούπολη, η Άνω Σύρος είναι ένας λαβύρινθος από στενά πέτρινα σοκάκια, τοξωτά περάσματα και ασβεστωμένα σπίτια που σκαρφαλώνουν ως τον Καθεδρικό του Αγίου Γεωργίου. Tip: ανέβα αργά το απόγευμα όταν το φως μαλακώνει και η θέα στην Ερμούπολη και το Αιγαίο είναι αξέχαστη.",
          },
        },
        {
          title: {
            en: "It is a real, functioning Greek city — not a resort island",
            el: "Είναι μια πραγματική, ζωντανή ελληνική πόλη — όχι ένα νησί-θέρετρο",
          },
          text: {
            en: "Syros is the capital of the Cyclades, and Ermoupoli is a working city with shops, schools, hospitals, government buildings, and a year-round population. This gives the island a cultural depth and authenticity that purely tourist-driven islands lack. You can experience everyday Greek life here, not just a curated version of it.",
            el: "Η Σύρος είναι η πρωτεύουσα των Κυκλάδων και η Ερμούπολη είναι μια ζωντανή πόλη με καταστήματα, σχολεία, νοσοκομεία, δημόσιες υπηρεσίες και μόνιμο πληθυσμό όλο τον χρόνο. Αυτό δίνει στο νησί ένα πολιτισμικό βάθος που λείπει από τα καθαρά τουριστικά νησιά.",
          },
        },
        {
          title: {
            en: "The food culture is authentic, rooted, and genuinely excellent",
            el: "Η γαστρονομική κουλτούρα είναι αυθεντική, ριζωμένη και πραγματικά εξαιρετική",
          },
          text: {
            en: "Syros has a distinct food identity shaped by its Catholic and Orthodox heritage, its maritime history, and its role as a commercial hub. From halvadopites (sesame & honey nougat) to fresh Aegean seafood, and from slow-cooked meat dishes to local cheeses and cured meats, the eating here is world-class without the tourist markup.",
            el: "Η Σύρος έχει μια ξεχωριστή γαστρονομική ταυτότητα διαμορφωμένη από την καθολική και ορθόδοξη κληρονομιά της, τη ναυτική ιστορία της και τον ρόλο της ως εμπορικό κέντρο. Από χαλβαδόπιτες μέχρι φρέσκα θαλασσινά του Αιγαίου, το φαγητό εδώ είναι κορυφαίο χωρίς τα τουριστικά μαρκαρίσματα.",
          },
        },
        {
          title: {
            en: "It works all year — not just in July and August",
            el: "Λειτουργεί όλο τον χρόνο — όχι μόνο τον Ιούλιο και τον Αύγουστο",
          },
          text: {
            en: "Because Syros is a real city with a permanent population, it does not shut down outside the summer season. Tavernas, cafes, museums, and shops remain open, and cultural events — concerts, theatre, festivals — happen throughout the year. Tip: visiting in March or October gives you mild weather, empty streets, and a genuinely local experience.",
            el: "Επειδή η Σύρος είναι μια πραγματική πόλη με μόνιμο πληθυσμό, δεν κλείνει εκτός καλοκαιρινής σεζόν. Οι ταβέρνες, τα καφέ, τα μουσεία και τα μαγαζιά παραμένουν ανοιχτά και πολιτιστικές εκδηλώσεις γίνονται όλο τον χρόνο. Tip: μια επίσκεψη τον Μάρτιο ή τον Οκτώβριο σου δίνει ήπιο καιρό, άδειους δρόμους και μια αυθεντικά τοπική εμπειρία.",
          },
        },
        {
          title: {
            en: "Easy access and outstanding connections to the rest of the Cyclades",
            el: "Εύκολη πρόσβαση και εξαιρετικές συνδέσεις με τις υπόλοιπες Κυκλάδες",
          },
          text: {
            en: "Syros is a major ferry hub with frequent connections to Piraeus, Rafina, and nearly every Cycladic island. Fast ferries reach Syros from Piraeus in about 2.5–4 hours, making it one of the most accessible islands in the archipelago. From Syros, island hopping to Tinos, Mykonos, Naxos, Paros, and Santorini is seamless.",
            el: "Η Σύρος είναι ένα σημαντικό λιμάνι με συχνές συνδέσεις προς Πειραιά, Ραφήνα και σχεδόν όλες τις Κυκλάδες. Τα ταχύπλοα φτάνουν από Πειραιά σε περίπου 2.5–4 ώρες, καθιστώντας την ένα από τα πιο προσβάσιμα νησιά του συμπλέγματος.",
          },
        },
      ],
    },
    {
      title: {
        en: "Best time to visit Syros",
        el: "Καλύτερη εποχή για τη Σύρο",
      },
      layout: "list",
      items: [
        {
          title: { en: "Spring (April–May)", el: "Άνοιξη (Απρίλιος–Μάιος)" },
          text: {
            en: "Ideal for exploring Ermoupoli and Ano Syros without crowds. The weather is pleasant for walking, and the island is green and blooming.",
            el: "Ιδανικά για να εξερευνήσεις την Ερμούπολη και την Άνω Σύρο χωρίς πολυκόσμο. Ο καιρός είναι ευχάριστος για περπάτημα και το νησί είναι πράσινο και ανθισμένο.",
          },
        },
        {
          title: { en: "June", el: "Ιούνιος" },
          text: {
            en: "The best balance: warm enough for swimming, everything is open, but not yet packed. The sea is starting to warm up and the evenings are long and pleasant.",
            el: "Η καλύτερη ισορροπία: αρκετά ζεστά για μπάνιο, όλα είναι ανοιχτά αλλά όχι ακόμη γεμάτα. Η θάλασσα αρχίζει να ζεσταίνεται και τα βράδια είναι μεγάλα και ευχάριστα.",
          },
        },
        {
          title: { en: "July–August", el: "Ιούλιος–Αύγουστος" },
          text: {
            en: "Peak season with a lively atmosphere. Ermoupoli buzzes with energy, cultural festivals take place, and the beaches are at their best. Book accommodation well in advance.",
            el: "Περίοδος αιχμής με ζωντανή ατμόσφαιρα. Η Ερμούπολη σφύζει από ενέργεια, γίνονται πολιτιστικά φεστιβάλ και οι παραλίες είναι στα καλύτερά τους. Κλείσε διαμονή νωρίς.",
          },
        },
        {
          title: { en: "September", el: "Σεπτέμβριος" },
          text: {
            en: "The sea is at its warmest, the crowds thin out, and the island settles into a relaxed rhythm. Many consider this the best month for swimming and sightseeing combined.",
            el: "Η θάλασσα είναι στο πιο ζεστό της, ο κόσμος αραιώνει και το νησί μπαίνει σε χαλαρούς ρυθμούς. Πολλοί θεωρούν τον Σεπτέμβριο τον καλύτερο μήνα για συνδυασμό μπάνιου και περιήγησης.",
          },
        },
        {
          title: { en: "October–November", el: "Οκτώβριος–Νοέμβριος" },
          text: {
            en: "Quiet and authentic. Many restaurants remain open in Ermoupoli, and the weather is still pleasant for walking. A great time for cultural visits without any tourist pressure.",
            el: "Ήσυχα και αυθεντικά. Πολλά εστιατόρια παραμένουν ανοιχτά στην Ερμούπολη και ο καιρός είναι ακόμη ευχάριστος για βόλτες. Ιδανική περίοδος για πολιτιστικές επισκέψεις χωρίς τουριστική πίεση.",
          },
        },
        {
          title: { en: "Winter (December–March)", el: "Χειμώνας (Δεκέμβριος–Μάρτιος)" },
          text: {
            en: "Syros is at its most authentic. The island lives its daily life, and visitors who come will experience the real Syros — local cafes, winter festivals, and the famous Syros Carnival in February/March.",
            el: "Η Σύρος είναι στην πιο αυθεντική της μορφή. Το νησί ζει την καθημερινότητά του και οι επισκέπτες θα ζήσουν την πραγματική Σύρο — τοπικά καφέ, χειμερινά φεστιβάλ και το περίφημο Καρναβάλι της Σύρου τον Φεβρουάριο/Μάρτιο.",
          },
        },
      ],
    },
    {
      title: {
        en: "Ermoupoli — the grand capital of the Cyclades",
        el: "Ερμούπολη — η μεγαλοπρεπής πρωτεύουσα των Κυκλάδων",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "Miaouli Square & Town Hall",
            el: "Πλατεία Μιαούλη & Δημαρχείο",
          },
          text: {
            en: "One of the grandest squares in Greece, flanked by neoclassical buildings and dominated by the magnificent Town Hall designed by Ernst Ziller. The square is the social centre of Ermoupoli, filled with locals enjoying coffee and pastries. Tip: order a soumada (almond syrup drink) at one of the historic cafes — it's a Syros signature.",
            el: "Μία από τις μεγαλοπρεπέστερες πλατείες της Ελλάδας, πλαισιωμένη από νεοκλασικά κτίρια και το υπέροχο Δημαρχείο του Ερνστ Τσίλλερ. Η πλατεία είναι το κοινωνικό κέντρο της Ερμούπολης. Tip: παράγγειλε μια σουμάδα (ρόφημα αμυγδάλου) σε ένα από τα ιστορικά καφέ — είναι σήμα κατατεθέν της Σύρου.",
          },
        },
        {
          title: {
            en: "Apollon Theatre",
            el: "Θέατρο Απόλλων",
          },
          text: {
            en: "A stunning miniature replica of La Scala in Milan, built in 1864. The theatre seats about 350 people and features exquisite frescoes, a beautiful wooden stage, and exceptional acoustics. Tip: check the programme before your visit — attending a concert or performance here is a magical experience.",
            el: "Ένα εκπληκτικό μικρογραφικό αντίγραφο της Σκάλας του Μιλάνου, χτισμένο το 1864. Το θέατρο έχει περίπου 350 θέσεις και διαθέτει υπέροχες τοιχογραφίες και εξαιρετική ακουστική. Tip: τσέκαρε το πρόγραμμα πριν την επίσκεψή σου — το να παρακολουθήσεις μια συναυλία εδώ είναι μαγική εμπειρία.",
          },
        },
        {
          title: {
            en: "The Port & Vaporia Neighbourhood",
            el: "Το Λιμάνι & η Συνοικία Βαπόρια",
          },
          text: {
            en: "The long waterfront is perfect for a leisurely stroll past neoclassical mansions and fishing boats. Vaporia, the old captains' quarter, features magnificent 19th-century mansions built by shipping magnates, perched dramatically on the rocks above the sea. Tip: take the clifftop walk from Vaporia for breathtaking views of the Aegean.",
            el: "Η μεγάλη παραλιακή είναι ιδανική για χαλαρό περίπατο ανάμεσα σε νεοκλασικά αρχοντικά και ψαρόβαρκες. Τα Βαπόρια, η παλιά συνοικία των καπεταναίων, έχουν υπέροχα αρχοντικά του 19ου αιώνα. Tip: κάνε τη βόλτα στα βράχια των Βαποριών για εκπληκτική θέα στο Αιγαίο.",
          },
        },
        {
          title: {
            en: "Orthodox Church of the Resurrection (Anastasis)",
            el: "Ιερός Ναός Αναστάσεως του Χριστού",
          },
          text: {
            en: "Perched high above Vaporia, this striking blue-domed church offers one of the best panoramic views of Ermoupoli and the harbour. The contrast of the deep blue dome against the white walls and the surrounding sea is iconic. It is quieter than the main churches in town and rewards the uphill walk.",
            el: "Χτισμένη ψηλά πάνω από τα Βαπόρια, αυτή η εντυπωσιακή εκκλησία με τον γαλάζιο τρούλο προσφέρει μία από τις καλύτερες πανοραμικές θέες της Ερμούπολης. Η αντίθεση του βαθυγάλαζου τρούλου με τα λευκά τοιχώματα είναι εμβληματική.",
          },
        },
        {
          title: {
            en: "Industrial Museum of Hermoupolis",
            el: "Βιομηχανικό Μουσείο Ερμούπολης",
          },
          text: {
            en: "Syros was the industrial heart of 19th-century Greece, and this museum in the old Eleourgia soap factory tells that story brilliantly. Exhibits include original machinery, leatherworks, textiles, and the fascinating history of the city's industrial rise and fall. Tip: also visit the Markos Vamvakaris Museum nearby for the rebetiko connection.",
            el: "Η Σύρος ήταν η βιομηχανική καρδιά της Ελλάδας τον 19ο αιώνα και αυτό το μουσείο στην παλιά σαπωνοποιία Ελαιουργία αφηγείται αυτή την ιστορία. Tip: επισκέψου και το κοντινό Μουσείο Μάρκου Βαμβακάρη για τη σύνδεση με το ρεμπέτικο.",
          },
        },
      ],
    },
    {
      title: {
        en: "Ano Syros — the medieval hill town",
        el: "Άνω Σύρος — ο μεσαιωνικός λοφίσκος",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "Cathedral of St George",
            el: "Καθεδρικός Ναός Αγίου Γεωργίου",
          },
          text: {
            en: "The Catholic cathedral sits at the highest point of Ano Syros and dominates the skyline. Built in the 13th century and renovated in the 19th century, its simple white exterior belies a beautifully ornate interior. The views from the bell tower and the surrounding terrace stretch across the entire island and the Aegean.",
            el: "Ο καθολικός καθεδρικός δεσπόζει στο ψηλότερο σημείο της Άνω Σύρου. Χτισμένος τον 13ο αιώνα, το λιτό λευκό εξωτερικό του κρύβει ένα όμορφα διακοσμημένο εσωτερικό. Η θέα από το καμπαναριό απλώνεται σε όλο το νησί και το Αιγαίο.",
          },
        },
        {
          title: {
            en: "The Lane Network",
            el: "Το δίκτυο των σοκακιών",
          },
          text: {
            en: "Getting lost in the narrow, winding lanes of Ano Syros is the best way to experience it. Whitewashed houses with colourful shutters, tiny chapels, arched doorways, and sudden glimpses of the sea make every turn a discovery. Tip: walk to the northern edge of Ano Syros for a completely different perspective — the view of Ermoupoli from above is unforgettable.",
            el: "Το να χαθείς στα στενά, ελικοειδή σοκάκια της Άνω Σύρου είναι ο καλύτερος τρόπος να τη ζήσεις. Άσπρα σπίτια με πολύχρωμα παραθυρόφυλλα, εκκλησάκια και ξαφνικές ματιές στη θάλασσα κάνουν κάθε στροφή μια ανακάλυψη. Tip: περπάτησε ως το βόρειο άκρο για μια τελείως διαφορετική οπτική.",
          },
        },
        {
          title: {
            en: "Capuchin Monastery & Jesuit Church",
            el: "Μονή Καπουτσίνων & Εκκλησία των Ιησουιτών",
          },
          text: {
            en: "The Capuchin Monastery, built in 1535, is one of the oldest Catholic religious buildings in the Cyclades. Its simple courtyard and garden offer a peaceful retreat from the winding lanes. Nearby, the Jesuit Church (Church of the Presentation of the Virgin) adds another layer to the fascinating religious co-existence that defines Syros.",
            el: "Η Μονή Καπουτσίνων, χτισμένη το 1535, είναι ένα από τα παλαιότερα καθολικά θρησκευτικά κτίρια στις Κυκλάδες. Η αυλή και ο κήπος της προσφέρουν ένα ήσυχο καταφύγιο. Η κοντινή Εκκλησία των Ιησουιτών προσθέτει άλλο ένα στρώμα στη συναδέλφωση των θρησκειών της Σύρου.",
          },
        },
      ],
    },
    {
      title: {
        en: "Beaches in Syros",
        el: "Παραλίες στη Σύρο",
      },
      layout: "list",
      items: [
        {
          title: { en: "Galissas", el: "Γαλησσάς" },
          text: {
            en: "The most popular organized beach, a sandy crescent with clear shallow water, perfect for families. There are plenty of tavernas and sunbeds. Tip: walk to the nearby Armeos Beach for a quieter, more secluded swim.",
            el: "Η πιο δημοφιλής οργανωμένη παραλία, μια αμμώδης ημισέληνος με καθαρά ρηχά νερά, ιδανική για οικογένειες. Tip: περπάτησε στην κοντινή παραλία Αρμέος για πιο ήσυχο και απομονωμένο μπάνιο.",
          },
        },
        {
          title: { en: "Kini", el: "Κίνι" },
          text: {
            en: "A charming fishing village with a long pebble-sand beach and excellent fish tavernas right on the water. The atmosphere is relaxed and genuinely local. Tip: stay for sunset — Kini is famous for its fiery orange sunsets over the Aegean.",
            el: "Ένα γραφικό ψαροχώρι με μακριά παραλία από βότσαλο και άμμο και εξαιρετικές ψαροταβέρνες πάνω στο κύμα. Tip: μείνε για το ηλιοβασίλεμα — η Κίνι φημίζεται για τα πορτοκαλί ηλιοβασιλέματά της στο Αιγαίο.",
          },
        },
        {
          title: { en: "Agathopes & Komito", el: "Αγαθόπες & Κωμητό" },
          text: {
            en: "Two quieter beaches on the south coast, both with soft sand and clear water. Agathopes is more organized with a beach bar, while Komito is wilder and more secluded. Both are excellent choices for a peaceful beach day.",
            el: "Δύο πιο ήσυχες παραλίες στη νότια ακτή, και οι δύο με μαλακή άμμο και καθαρά νερά. Οι Αγαθόπες είναι πιο οργανωμένες, ενώ το Κωμητό είναι πιο άγριο και απομονωμένο.",
          },
        },
        {
          title: { en: "Megas Gialos", el: "Μέγας Γιαλός" },
          text: {
            en: "A long sandy beach with shallow waters, popular with families and within easy reach of Ermoupoli. The surrounding area has several tavernas and accommodation options.",
            el: "Μια μακριά αμμώδης παραλία με ρηχά νερά, δημοφιλής σε οικογένειες και εύκολα προσβάσιμη από την Ερμούπολη. Η γύρω περιοχή έχει πολλές ταβέρνες και καταλύματα.",
          },
        },
        {
          title: { en: "Vari", el: "Βάρη" },
          text: {
            en: "A beautiful sandy beach on the southwest coast, usually quieter than Galissas. The water is crystal clear and the setting is peaceful. Tip: walk to the headland on the left side of the beach for a small, secluded cove away from everyone.",
            el: "Μια όμορφη αμμώδης παραλία στη νοτιοδυτική ακτή, συνήθως πιο ήσυχη από τον Γαλησσά. Tip: περπάτησε στο ακρωτήρι στην αριστερή πλευρά της παραλίας για ένα μικρό, απομονωμένο ορμίσκο μακριά από όλους.",
          },
        },
        {
          title: { en: "Delfini", el: "Δελφίνι" },
          text: {
            en: "A small, scenic cove just south of Galissas with turquoise water and a mix of sand and pebbles. The beach is relatively uncrowded even in peak season. Tip: go early to secure a good spot, as it is small and fills up quickly on summer weekends.",
            el: "Ένας μικρός γραφικός όρμος νότια του Γαλησσά με τιρκουάζ νερά και μείγμα άμμου και βότσαλου. Tip: πήγαινε νωρίς για να εξασφαλίσεις καλή θέση, καθώς είναι μικρή και γεμίζει γρήγορα τα καλοκαιρινά Σαββατοκύριακα.",
          },
        },
      ],
    },
    {
      title: {
        en: "Food in Syros — what to eat and drink",
        el: "Φαγητό στη Σύρο — τι να φας και να πιεις",
      },
      layout: "list",
      items: [
        {
          title: { en: "Halvadopites", el: "Χαλβαδόπιτες" },
          text: {
            en: "The signature sweet of Syros — a thin, crunchy sesame-and-honey wafer with a delicate almond flavour. Sold everywhere from bakeries to souvenir shops, but the best are freshly made. Try the ones filled with chocolate or nuts too.",
            el: "Το γλυκό-σήμα κατατεθέν της Σύρου — ένα λεπτό, τραγανό γλύκισμα από σουσάμι και μέλι. Πωλούνται παντού αλλά οι καλύτερες είναι φρεσκοφτιαγμένες. Δοκίμασε και αυτές με γέμιση σοκολάτας ή ξηρών καρπών.",
          },
        },
        {
          title: { en: "Loukoumades", el: "Λουκουμάδες" },
          text: {
            en: "Syros is famous for its loukoumades — light, airy Greek doughnuts drizzled with honey and sprinkled with cinnamon and walnuts. The island's version is particularly renowned, with some shops specializing exclusively in this treat.",
            el: "Η Σύρος φημίζεται για τους λουκουμάδες της — ελαφριά, αφράτα τηγανητά ζυμαρικά με μέλι, κανέλα και καρύδια. Η εκδοχή του νησιού είναι ιδιαίτερα φημισμένη, με μαγαζιά που ειδικεύονται αποκλειστικά σε αυτό το γλύκισμα.",
          },
        },
        {
          title: { en: "Fresh Aegean Seafood", el: "Φρέσκα Θαλασσινά του Αιγαίου" },
          text: {
            en: "Being a major port, Syros has exceptional seafood. Grilled octopus, fried calamari, fresh fish, and shrimp saganaki are staples. The best fish tavernas are in Kini and along the Ermoupoli waterfront.",
            el: "Ως σημαντικό λιμάνι, η Σύρος έχει εξαιρετικά θαλασσινά. Χταπόδι στα κάρβουνα, τηγανητά καλαμαράκια, φρέσκο ψάρι και γαρίδες σαγανάκι είναι βασικά πιάτα. Οι καλύτερες ψαροταβέρνες είναι στην Κίνι και στην παραλιακή της Ερμούπολης.",
          },
        },
        {
          title: { en: "Soumada", el: "Σουμάδα" },
          text: {
            en: "A traditional almond-based soft drink, non-alcoholic, and unique to Syros. Made from almonds, sugar, and rosewater, it is refreshingly aromatic and served cold. A must-try local specialty that you will not find anywhere else.",
            el: "Ένα παραδοσιακό αμυγδαλάτο αναψυκτικό, μη αλκοολούχο και μοναδικό στη Σύρο. Φτιαγμένο από αμύγδαλα, ζάχαρη και ροδόνερο, σερβίρεται παγωμένο. Μια τοπική σπεσιαλιτέ που δεν θα βρεις πουθενά αλλού.",
          },
        },
        {
          title: { en: "Local Cheeses & Charcuterie", el: "Τοπικά Τυριά & Αλλαντικά" },
          text: {
            en: "Syros produces excellent cheeses, including the creamy San Michali (a PDO hard cheese with a salty-sweet flavour) and fresh mizithra. The island also has a tradition of cured meats, particularly syrianí (a local salami-style sausage with orange peel and spices).",
            el: "Η Σύρος παράγει εξαιρετικά τυριά, όπως το κρεμώδες Σαν Μιχάλη (σκληρό τυρί ΠΟΠ με αλμυρή-γλυκιά γεύση) και φρέσκια μυζήθρα. Το νησί έχει επίσης παράδοση στα αλλαντικά, ειδικά στη συριανή (λουκάνικο με φλούδα πορτοκαλιού και μπαχαρικά).",
          },
        },
        {
          title: { en: "Rebetiko & Music Culture", el: "Ρεμπέτικο & Μουσική Κουλτούρα" },
          text: {
            en: "Syros is the birthplace of Markos Vamvakaris, the 'patriarch' of rebetiko music. The island's musical heritage is deeply woven into its identity. Visit the Markos Vamvakaris Museum in Ano Syros, and in the evenings, seek out tavernas and bars where live rebetiko music still plays.",
            el: "Η Σύρος είναι η γενέτειρα του Μάρκου Βαμβακάρη, του 'πατριάρχη' του ρεμπέτικου. Η μουσική κληρονομιά του νησιού είναι βαθιά ριζωμένη στην ταυτότητά του. Επισκέψου το Μουσείο Μάρκου Βαμβακάρη στην Άνω Σύρο και το βράδυ αναζήτησε ταβέρνες με ζωντανό ρεμπέτικο.",
          },
        },
      ],
    },
    {
      title: {
        en: "Practical Tips for Syros",
        el: "Πρακτικές Συμβουλές για τη Σύρο",
      },
      layout: "list",
      items: [
        {
          title: { en: "Arriving by ferry", el: "Άφιξη με πλοίο" },
          text: {
            en: "Ferries arrive at the port in Ermoupoli, right in the city centre. You step off the boat and you are immediately in the heart of town — no shuttle buses or long transfers needed. Check ferry schedules carefully as they vary significantly by season.",
            el: "Τα πλοία φτάνουν στο λιμάνι της Ερμούπολης, στο κέντρο της πόλης. Κατεβαίνεις από το πλοίο και είσαι αμέσως στην καρδιά της πόλης — χωρίς λεωφορεία ή μεγάλες μεταφορές. Τσέκαρε τα δρομολόγια που αλλάζουν ανάλογα με την εποχή.",
          },
        },
        {
          title: { en: "Climbing Ano Syros", el: "Ανάβαση στην Άνω Σύρο" },
          text: {
            en: "The walk from Ermoupoli up to Ano Syros takes about 15–20 minutes and involves a steep climb on cobbled lanes. Wear comfortable shoes and take water in summer. The views from the top are well worth the effort.",
            el: "Η ανάβαση από την Ερμούπολη στην Άνω Σύρο διαρκεί περίπου 15–20 λεπτά και περιλαμβάνει απότομη ανηφόρα σε λιθόστρωτα σοκάκια. Φόρεσε άνετα παπούτσια και πάρε νερό το καλοκαίρι. Η θέα από πάνω αξίζει τον κόπο.",
          },
        },
        {
          title: { en: "Beach transport", el: "Μετακινήσεις προς παραλίες" },
          text: {
            en: "Buses run from Ermoupoli to the main beaches (Galissas, Kini, Megas Gialos, Vari) regularly in summer. Timetables are seasonal, so check at the bus station near the port. Taxis are available but limited — book ahead in peak season.",
            el: "Λεωφορεία συνδέουν την Ερμούπολη με τις κύριες παραλίες (Γαλησσάς, Κίνι, Μέγας Γιαλός, Βάρη) τακτικά το καλοκαίρι. Τα δρομολόγια είναι εποχικά — τσέκαρε στον σταθμό κοντά στο λιμάνι. Τα ταξί είναι περιορισμένα — κλείσε από πριν την περίοδο αιχμής.",
          },
        },
        {
          title: { en: "Accommodation choices", el: "Επιλογές διαμονής" },
          text: {
            en: "Stay in Ermoupoli for the city experience — within walking distance of restaurants, museums, and Ano Syros. Stay in Kini or Galissas for a beach holiday with seaside tavernas. Ano Syros has limited but atmospheric rooms in traditional houses.",
            el: "Μείνε στην Ερμούπολη για την αστική εμπειρία — κοντά σε εστιατόρια, μουσεία και την Άνω Σύρο. Μείνε στην Κίνι ή στον Γαλησσά για διακοπές παραλίας. Η Άνω Σύρος έχει περιορισμένα αλλά ατμοσφαιρικά δωμάτια σε παραδοσιακά σπίτια.",
          },
        },
        {
          title: { en: "The Meltemi wind", el: "Το μελτέμι" },
          text: {
            en: "Syros is exposed to the Meltemi, the strong northerly wind that blows in July and August. The wind can make beachgoing uncomfortable on northern shores but often leaves southern beaches (Agathopes, Vari) calm and pleasant. Pack a windbreaker for the evenings.",
            el: "Η Σύρος εκτίθεται στο μελτέμι, τον δυνατό βόρειο άνεμο που φυσά τον Ιούλιο και τον Αύγουστο. Ο άνεμος μπορεί να κάνει δυσάρεστο το μπάνιο σε βόρειες ακτές αλλά οι νότιες παραλίες παραμένουν ήρεμες. Πάρε ένα αντιανεμικό για τα βράδια.",
          },
        },
        {
          title: { en: "Cash in the market district", el: "Μετρητά στην αγορά" },
          text: {
            en: "While most restaurants and hotels accept cards, some smaller shops, bakeries, and market stalls in Ermoupoli's central market district prefer cash. Carry some euros for halvadopites and loukoumades purchases.",
            el: "Ενώ τα περισσότερα εστιατόρια και ξενοδοχεία δέχονται κάρτες, κάποια μικρά μαγαζιά, φούρνοι και πάγκοι στην κεντρική αγορά προτιμούν μετρητά. Να έχεις λίγα ευρώ για αγορές χαλβαδόπιτας και λουκουμάδων.",
          },
        },
        {
          title: { en: "How many days are enough", el: "Πόσες μέρες είναι αρκετές" },
          text: {
            en: "For a solid visit covering Ermoupoli, Ano Syros, and a couple of beaches, plan for 3 days. For a relaxed trip that includes multiple beaches, day trips, and deeper exploration, aim for 5–7 days. Syros is also excellent as a base for island hopping.",
            el: "Για μια καλή επίσκεψη που καλύπτει Ερμούπολη, Άνω Σύρο και μερικές παραλίες, υπολόγισε 3 μέρες. Για ένα χαλαρό ταξίδι με πολλές παραλίες και εξερεύνηση, στόχευσε σε 5–7 μέρες. Η Σύρος είναι επίσης εξαιρετική βάση για island hopping.",
          },
        },
      ],
    },
    {
      title: {
        en: "FAQ about Syros",
        el: "Συχνές ερωτήσεις για τη Σύρο",
      },
      layout: "faq",
      items: [
        {
          title: {
            en: "How many days do you need in Syros?",
            el: "Πόσες μέρες χρειάζεσαι στη Σύρο;",
          },
          text: {
            en: "3 days is enough for the essentials — Ermoupoli, Ano Syros, and one or two beaches. For a fuller experience including multiple beaches, day trips to neighbouring islands, and a relaxed pace, aim for 4–5 days.",
            el: "3 μέρες είναι αρκετές για τα βασικά — Ερμούπολη, Άνω Σύρο και μία-δύο παραλίες. Για μια πιο ολοκληρωμένη εμπειρία με πολλές παραλίες, εκδρομές και χαλαρό ρυθμό, στόχευσε σε 4–5 μέρες.",
          },
        },
        {
          title: {
            en: "Is Syros good for families?",
            el: "Είναι η Σύρος κατάλληλη για οικογένειες;",
          },
          text: {
            en: "Very much so. The beaches at Galissas and Megas Gialos are shallow and safe for children. Ermoupoli is walkable and has plenty of family-friendly tavernas. The island's year-round infrastructure means medical services, shops, and amenities are readily available.",
            el: "Πολύ. Οι παραλίες σε Γαλησσά και Μέγα Γιαλό είναι ρηχές και ασφαλείς για παιδιά. Η Ερμούπολη είναι εύκολη για περπάτημα και έχει πολλές οικογενειακές ταβέρνες. Οι υποδομές του νησιού είναι άριστες όλο τον χρόνο.",
          },
        },
        {
          title: {
            en: "Is Syros worth visiting if I have been to Mykonos or Santorini?",
            el: "Αξίζει η Σύρος αν έχω πάει σε Μύκονο ή Σαντορίνη;",
          },
          text: {
            en: "Absolutely — and it is a fundamentally different experience. While Mykonos and Santorini are defined by their caldera views and iconic beach clubs, Syros offers a real, working Greek city with neoclassical architecture, authentic culture, and genuine year-round life. It complements the 'Cycladic postcard' islands perfectly.",
            el: "Απολύτως — και είναι μια ριζικά διαφορετική εμπειρία. Ενώ η Μύκονος και η Σαντορίνη ορίζονται από την καλντέρα και τα beach clubs, η Σύρος προσφέρει μια πραγματική, ζωντανή ελληνική πόλη με νεοκλασική αρχιτεκτονική, αυθεντικό πολιτισμό και ζωή όλο τον χρόνο.",
          },
        },
        {
          title: {
            en: "What is halvadopita and where do I buy it?",
            el: "Τι είναι η χαλβαδόπιτα και πού την αγοράζω;",
          },
          text: {
            en: "Halvadopita is Syros' signature sweet — a thin, crunchy wafer made with sesame seeds, honey, and almonds. The best places to buy it are the traditional bakeries and sweet shops in Ermoupoli (especially around the central market). It makes an excellent souvenir.",
            el: "Η χαλβαδόπιτα είναι το γλυκό-σήμα κατατεθέν της Σύρου — ένα λεπτό, τραγανό γλύκισμα από σουσάμι, μέλι και αμύγδαλα. Τα καλύτερα σημεία είναι οι παραδοσιακοί φούρνοι και τα ζαχαροπλαστεία στην Ερμούπολη. Κάνει εξαιρετικό δώρο.",
          },
        },
        {
          title: {
            en: "Do I need a car in Syros?",
            el: "Χρειάζομαι αυτοκίνητο στη Σύρο;",
          },
          text: {
            en: "Not if you are staying in Ermoupoli. The city is highly walkable, Ano Syros is a short climb, and buses serve the main beaches in summer. A car or scooter gives you more flexibility for exploring quieter beaches and the interior, but it is not essential for a fulfilling trip.",
            el: "Όχι αν μένεις στην Ερμούπολη. Η πόλη είναι εύκολη για περπάτημα, η Άνω Σύρος είναι κοντινή ανάβαση και τα λεωφορεία εξυπηρετούν τις κύριες παραλίες το καλοκαίρι. Ένα αυτοκίνητο δίνει μεγαλύτερη ευελιξία αλλά δεν είναι απαραίτητο.",
          },
        },
        {
          title: {
            en: "Is Syros good in winter?",
            el: "Είναι η Σύρος καλή τον χειμώνα;",
          },
          text: {
            en: "Exceptionally so. The island's cultural life continues year-round with theatre, concerts, and the famous Syros Carnival (February/March). Many restaurants and cafes remain open, and the atmosphere is authentically local. It is one of the few Cycladic islands that truly shines in winter.",
            el: "Εξαιρετικά. Η πολιτιστική ζωή του νησιού συνεχίζεται όλο τον χρόνο με θέατρο, συναυλίες και το περίφημο Καρναβάλι της Σύρου. Πολλά εστιατόρια και καφέ παραμένουν ανοιχτά και η ατμόσφαιρα είναι αυθεντικά τοπική.",
          },
        },
        {
          title: {
            en: "What is the best time to visit Syros?",
            el: "Ποια είναι η καλύτερη εποχή για τη Σύρο;",
          },
          text: {
            en: "May, June, and September offer the best combination of pleasant weather, manageable crowds, and open businesses. July and August are lively but busy and hot. Shoulder seasons (April, October) are ideal for cultural visits and walking.",
            el: "Ο Μάιος, ο Ιούνιος και ο Σεπτέμβριος προσφέρουν τον καλύτερο συνδυασμό ευχάριστου καιρού, διαχειρίσιμου κόσμου και ανοιχτών επιχειρήσεων. Ο Ιούλιος και ο Αύγουστος είναι ζωντανοί αλλά γεμάτοι. Οι ενδιάμεσες εποχές είναι ιδανικές για πολιτιστικές επισκέψεις.",
          },
        },
        {
          title: {
            en: "What is the connection between Syros and rebetiko music?",
            el: "Ποια είναι η σχέση της Σύρου με το ρεμπέτικο;",
          },
          text: {
            en: "Syros is the birthplace of Markos Vamvakaris (1905–1972), widely regarded as the 'patriarch' of rebetiko music. His house in Ano Syros has been converted into a small museum dedicated to his life and work. Rebetiko, often described as the Greek blues, was born in the urban centres of the early 20th century, and Syros played a key role in its development.",
            el: "Η Σύρος είναι η γενέτειρα του Μάρκου Βαμβακάρη (1905–1972), του 'πατριάρχη' του ρεμπέτικου. Το σπίτι του στην Άνω Σύρο έχει μετατραπεί σε μουσείο αφιερωμένο στη ζωή και το έργο του. Το ρεμπέτικο γεννήθηκε στα αστικά κέντρα των αρχών του 20ού αιώνα και η Σύρος έπαιξε καθοριστικό ρόλο.",
          },
        },
      ],
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Syros", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στη Σύρο" },
      text: {
        en: "✕ **Ermoupoli as just a ferry stop** — The neoclassical capital is one of the most underrated towns in Greece. Most ferry passengers walk through on their way to Mykonos or Tinos and miss the Miaouli Square, the Vaporia quarter, and the best bougatsa in the Cyclades.\n\n✕ **Finikas Bay for nightlife** — Finikas has a pleasant waterfront but it is not where Syros's social life happens. Ermoupoli's harbour and the backstreets of Ano Syros have the real atmosphere.\n\n✕ **Skipping Ano Syros** — The medieval hilltop settlement above Ermoupoli is one of the most beautiful villages in the Cyclades — narrow marble alleys, Venetian doors, and views across three bays. It is a twenty-minute walk up and most visitors never make it.\n\n✕ **Beach expectations** — Syros's beaches are not Mykonos-level. They are quieter, more natural, and backed by tamarisk trees. Set expectations accordingly and you will appreciate them more.\n\n✕ **Not exploring the island's food scene** — Syros has the best traditional cooking in the Cyclades. The markets, the bakeries (the loukoumi shops are legendary), and the tavernas around Ermoupoli are a food destination in their own right.\n\n💡 What nobody tells you: Syros is the administrative capital of the Cyclades and the only island where you can see both Cycladic and neoclassical architecture side by side. It is also the only island in the group where Catholics and Orthodox have coexisted for centuries — the twin churches of the Evangelistria and the Catholic cathedral face each other across a single square.",
        el: "✕ **Ερμούπολη ως ferry stop** — Νεοκλασική, όμορφη, αλλά οι περισσότεροι φεύγουν χωρίς να δουν Μιαούλη, Βαποριά, bougatsa.\n\n✕ **Finikas για νυχτερινή ζωή** — Ευχάριστο αλλά η πραγματική ατμόσφαιρα είναι στο λιμάνι της Ερμούπολης και στα σοκάκια Άνω Σύρου.\n\n✕ **Να παραλείψεις την Άνω Σύρο** — Μεσαιωνικό, μαρμάρινα σοκάκια, Ενετικές πόρτες, θέα σε 3 κόλπους. 20 λεπτά ανάβαση.\n\n✕ **Προσδοκίες παραλίας** — Δεν είναι Μύκονος. Ήσυχες, φυσικές, με ταμαρίσκια.\n\n✕ **Να μην δοκιμάσεις το φαγητό** — Αγορά, φούρνοι (loukoumi), ταβέρνες — η καλύτερη παραδοσιακή κουζίνα στις Κυκλάδες.\n\n💡 Αυτό που δε σου λέει κανείς: Η Σύρος είναι η μόνη Κυκλαδίτικη με κυκλαδίτικη και νεοκλασική αρχιτεκτονικη δίπλα-δίπλα, και η μόνη όπου καθολικοί και ορθόδοξοι συνυπάρχουν αιώνες — δίπλα δίπλα εκκλησίες."
      }
    }
  ],

  rethymno: [
    {
      layout: "list",
      title: { en: "Why Visit Rethymno", el: "Γιατί να Πας στο Ρέθυμνο" },
      text: {
        en: "Rethymno is the kind of city that makes you slow down. Not because there is nothing to do — there is plenty — but because every alley in the Old Town seems to ask for a second look, every archway carries a different century, and every café terrace feels like an invitation to stay a little longer than planned.\n\nIt is Crete's third-largest city, positioned in the heart of the island's northern coast, roughly halfway between Heraklion and Chania. In many ways that geography reflects its character: it shares the grandeur of both but has kept something they have largely lost — intimacy. The scale is human. The Old Town fits inside a 20-minute walk. The fortress on the hill is visible from everywhere. And the beach starts right where the harbour ends.\n\nArchitecturally, Rethymno is one of the best-preserved Venetian cities in the Mediterranean. The Republic of Venice controlled Crete from 1204 to 1669 — more than four centuries — and left behind fountains, loggia buildings, harbour fortifications, and a lighthouse that still stands. The Ottomans then added minarets, hammams, and a different kind of layered beauty.",
        el: "Το Ρέθυμνο είναι η πόλη που σε κάνει να κόψεις ρυθμό. Όχι επειδή δεν έχει τίποτα να κάνεις — έχει πολλά — αλλά επειδή κάθε σοκάκι της Παλιάς Πόλης ζητά μια δεύτερη ματιά, κάθε τοξωτή πόρτα κουβαλά έναν διαφορετικό αιώνα και κάθε πεζοδρόμιο καφέ μοιάζει με πρόσκληση να μείνεις λίγο περισσότερο.\n\nΕίναι η τρίτη μεγαλύτερη πόλη της Κρήτης, στο κέντρο της βόρειας ακτής του νησιού, περίπου στη μέση της απόστασης Ηράκλειο-Χανιά. Η γεωγραφία αυτή αντανακλά τον χαρακτήρα της: μοιράζεται το μεγαλείο και των δύο αλλά διατήρησε κάτι που εκείνες έχουν χάσει — την οικειότητα. Η κλίμακα είναι ανθρώπινη. Η Παλιά Πόλη χωράει σε 20 λεπτά περπάτημα. Το κάστρο στον λόφο είναι ορατό από παντού. Και η παραλία ξεκινά εκεί που τελειώνει το λιμάνι.\n\nΑρχιτεκτονικά, το Ρέθυμνο είναι μια από τις καλύτερα διατηρημένες ενετικές πόλεις της Μεσογείου. Η Βενετία κυβέρνησε την Κρήτη από το 1204 έως το 1669 — πάνω από τέσσερις αιώνες — και άφησε σιντριβάνια, λότζες, οχυρώσεις και έναν φάρο που ακόμα στέκει. Οι Οθωμανοί πρόσθεσαν μιναρέδες, χαμάμ και μια διαφορετική, στρωματοποιημένη ομορφιά."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit Rethymno", el: "Η Καλύτερη Εποχή για το Ρέθυμνο" },
      text: {
        en: "**May & June** — Best overall. Warm enough to swim from mid-May, the city is lively but not packed. Ideal conditions for the Fortezza and day trips to Preveli.\n\n**July & August** — Best for beach. The city beach and nearby Platanias are full. The Old Town hosts open-air concerts and the Renaissance Festival in August.\n\n**September & October** — Hidden gem. Sea still warm until mid-October. The tourist wave has receded. Tavernas are quieter and the light turns golden.\n\n**November – April** — Off-season. The city remains open and authentic. February–March brings the Rethymno Carnival — one of the largest in Greece.",
        el: "**Μάιος & Ιούνιος** — Καλύτερη συνολικά. Ζεστά για μπάνιο από μέσα Μαΐου, η πόλη ζωντανή χωρίς συνωστισμό.\n\n**Ιούλιος & Αύγουστος** — Καλύτερα για παραλία. Η πόλη γεμίζει, αλλά τα βράδια είναι μαγικά. Το Φεστιβάλ Αναγέννησης τον Αύγουστο είναι σημαντικό πολιτιστικό γεγονός.\n\n**Σεπτέμβριος & Οκτώβριος** — Το μυστικό. Η θάλασσα ζεστή ως μέσα Οκτωβρίου. Οι τουρίστες φεύγουν, οι ντόπιοι ξαναπαίρνουν την πόλη.\n\n**Νοέμβριος – Απρίλιος** — Εκτός σεζόν. Η πόλη παραμένει αυθεντική. Το Καρναβάλι Ρεθύμνου (Φεβρουάριος–Μάρτιος) είναι ένα από τα μεγαλύτερα στην Ελλάδα."
      }
    },
    {
      layout: "list",
      title: { en: "How to Get to Rethymno", el: "Πώς να Πάτε στο Ρέθυμνο" },
      text: {
        en: "**By plane** — Fly into Chania (CHQ, ~60 km, 1 hour by car) or Heraklion (HER, ~80 km, 1h15min). Both have direct international flights from major European hubs.\n\n**By car** — Car rental is strongly recommended for day trips to Preveli, Arkadi, and the Amari Valley. Pick up at either airport. The E75 coastal motorway is fast and well-maintained.\n\n**By bus (KTEL)** — Frequent daily buses from Heraklion (~1.5 hours) and Chania (~1 hour). Good for inter-city routes but limits flexibility for reaching the interior.\n\n**By ferry** — Overnight ferry connections to Piraeus (Athens) take 7–8 hours. Minoan Lines and ANEK operate seasonal routes.",
        el: "**Αεροπορικώς** — Αεροδρόμιο Χανίων (CHQ, ~60 χλμ., 1 ώρα) ή Ηρακλείου (HER, ~80 χλμ., 1h15′).\n\n**Με αυτοκίνητο** — Η ενοικίαση αυτοκινήτου συνιστάται ιδιαίτερα για εκδρομές σε Πρέβελη, Αρκάδι και Αμάρι.\n\n**Με λεωφορείο (KTEL)** — Συχνά δρομολόγια από Ηράκλειο (~1,5 ώρα) και Χανιά (~1 ώρα).\n\n**Με πλοίο** — Νυχτερινές συνδέσεις με Πειραιά (7–8 ώρες) από Minoan Lines και ANEK."
      }
    },
    {
      layout: "grid",
      title: { en: "Top Attractions & Experiences", el: "Κορυφαία Αξιοθέατα" },
      items: [
        {
          title: { en: "Fortezza Castle", el: "Φορτέτζα" },
          text: {
            en: "The largest Venetian fortress ever built, constructed between 1573 and 1587. It enclosed an entire city — a cathedral, barracks, cisterns, and governor's residence. The 360-degree views from the bastions take in the Old Town, harbour, and on clear days the White Mountains.",
            el: "Το μεγαλύτερο ενετικό φρούριο που χτίστηκε ποτέ (1573–1587). Περιλάμβανε ολόκληρη πόλη — καθεδρικό, στρατώνες, δεξαμενές και διοικητήριο. Η θέα 360° αγκαλιάζει την Παλιά Πόλη, το λιμάνι και τα Λευκά Όρη."
          }
        },
        {
          title: { en: "Old Town & Venetian Harbour", el: "Παλιά Πόλη & Ενετικό Λιμάνι" },
          text: {
            en: "A UNESCO-listed area and one of the most complete surviving examples of Venetian urban planning. The Rimondi Fountain (1629), the Venetian Loggia, and narrow lanes with Ottoman-era wooden overhangs and carved stone doorways make this one of the finest old towns in the Mediterranean.",
            el: "Προστατευόμενη περιοχή και ένα από τα πληρέστερα δείγματα ενετικής πολεοδομίας. Η Κρήνη Ριμόντι (1629), η Ενετική Λότζια και στενά σοκάκια με οθωμανικούς ξύλινους εξώστες."
          }
        },
        {
          title: { en: "Arkadi Monastery", el: "Μονή Αρκαδίου" },
          text: {
            en: "25 km southeast of Rethymno, the Monastery of Arkadi is one of the most emotionally charged sites in Greece. In 1866, hundreds of Cretan rebels chose to detonate their own gunpowder stores rather than surrender to Ottoman forces, shocking Europe and accelerating support for Cretan independence.",
            el: "25 χλμ. νοτιοανατολικά του Ρεθύμνου. Το 1866, εκατοντάδες Κρητικοί επέλεξαν να ανατινάξουν την πυριτιδαποθήκη παρά να παραδοθούν. Το γεγονός συγκλόνισε την Ευρώπη."
          }
        },
        {
          title: { en: "Preveli Gorge & Palm Beach", el: "Φαράγγι Πρέβελη & Φοινικόδασος" },
          text: {
            en: "One of the most iconic landscapes in Crete. The Kourtaliotis Gorge descends through dramatic limestone cliffs to a lagoon fringed with native Cretan date palms. Accessible via a steep path from the Preveli Monastery car park or by boat from Plakias.",
            el: "Από τα πιο εμβληματικά τοπία της Κρήτης. Το φαράγγι του Κουρταλιώτη καταλήγει σε λιμνοθάλασσα με κρητικούς φοίνικες. Πρόσβαση από τη Μονή Πρέβελη ή με βάρκα από τον Πλακιά."
          }
        },
        {
          title: { en: "Amari Valley", el: "Κοιλάδα Αμαρίου" },
          text: {
            en: "The best introduction to Crete's interior. Traditional villages, Byzantine churches with medieval frescoes, olive oil and cherry production, and a way of life that feels genuinely apart from the coastal tourism economy.",
            el: "Η καλύτερη εισαγωγή στο εσωτερικό της Κρήτης. Παραδοσιακά χωριά, βυζαντινές εκκλησίες με τοιχογραφίες, ελαιόλαδο και κεράσια."
          }
        },
        {
          title: { en: "Neratzes Mosque & Minaret", el: "Τζαμί Νερατζές & Μιναρές" },
          text: {
            en: "Originally a 13th-century church, converted to a mosque in 1657. The minaret is the tallest in Crete at 27 metres and is occasionally open for climbing — the view of the Old Town from the top is extraordinary.",
            el: "Αρχικά εκκλησία του 13ου αιώνα, μετατράπηκε σε τζαμί το 1657. Ο μιναρές (27 μ.) είναι ο ψηλότερος της Κρήτης και κάποιες φορές ανοιχτός για ανάβαση."
          }
        }
      ]
    },
    {
      layout: "grid",
      title: { en: "Beaches, Coast & Swimming", el: "Παραλίες & Θάλασσα" },
      items: [
        {
          title: { en: "Rethymno City Beach", el: "Παραλία Ρεθύμνου" },
          text: {
            en: "Begins immediately east of the Venetian harbour and runs for kilometres. Sandy, shallow, and easily walkable from the Old Town. Near the harbour it has sunbeds and beach bars; further east it becomes free and less organized.",
            el: "Ξεκινά αμέσως ανατολικά του ενετικού λιμανιού και εκτείνεται για χιλιόμετρα. Αμμώδης, ρηχή, με ξαπλώστρες κοντά στο λιμάνι και ελεύθερη πιο ανατολικά."
          }
        },
        {
          title: { en: "Preveli Beach (Palm Beach)", el: "Παραλία Πρέβελη" },
          text: {
            en: "The most photographed beach in the region — a lagoon with native Cretan date palms opening to a sandy bay. Accessible by steep path or by boat from Plakias. Exceptionally beautiful.",
            el: "Η πιο φωτογραφημένη παραλία της περιοχής — λιμνοθάλασσα με κρητικούς φοίνικες. Πρόσβαση με μονοπάτι ή βάρκα από Πλακιά."
          }
        },
        {
          title: { en: "Plakias", el: "Πλακιάς" },
          text: {
            en: "A relaxed south-coast village with a wide sandy bay and laid-back atmosphere. Good tavernas at the water's edge. Strong base for hiking the coastal paths between Plakias and Preveli.",
            el: "Χαλαρό χωριό στη νότια ακτή με φαρδύ κόλπο, καλές ταβέρνες και μονοπάτια προς Πρέβελη."
          }
        },
        {
          title: { en: "Georgioupoli", el: "Γεωργιούπολη" },
          text: {
            en: "20 km west of Rethymno, a small town at the mouth of the Almiros river with a long sandy beach and eucalyptus grove. Family-friendly and photogenic.",
            el: "20 χλμ. δυτικά, μικρή πόλη στις εκβολές του Αλμυρού, με μακριά αμμώδη παραλία και ευκάλυπτους."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "What to Eat in Rethymno", el: "Τι να Φάτε στο Ρέθυμνο" },
      text: {
        en: "**Dakos** — The foundational Cretan dish: dried barley rusk soaked in olive oil, topped with tomato, mizithra cheese, olives, and oregano.\n\n**Staka** — The sediment from rendered sheep's butter, fried until golden and served with eggs or bread. Rich and deeply savoury.\n\n**Snails (Chochlioi Bourbouristi)** — Fried snails with rosemary and vinegar, associated with Rethymno's traditional tavernas.\n\n**Kalitsounia** — Small fried or baked pastries filled with fresh mizithra and herbs. Found in every bakery in the Old Town.\n\n**Local Wine & Tsikoudia** — Crete produces wine from Vidiano, Thrapsathiri, and Kotsifali grapes. Tsikoudia (Cretan raki) is offered gratis after every meal.",
        el: "**Ντάκος** — Κρητική παξιμάδα με ελαιόλαδο, ντομάτα, μυζήθρα, ελιές και ρίγανη.\n\n**Στάκα** — Το ίζημα από βούτυρο προβάτου, τηγανισμένο με αυγά. Πλούσια και αλμυρή.\n\n**Χοχλιοί Μπουρμπουριστοί** — Σαλιγκάρια τηγανητά με δεντρολίβανο και ξίδι.\n\n**Καλιτσούνια** — Μικρές πίτες γεμιστές με μυζήθρα και μυρωδικά.\n\n**Κρασί & Τσικουδιά** — Τοπικά κρασιά από Βιδιανό, Θραψαθήρι και Κοτσιφάλι. Η τσικουδιά σερβίρεται δωρεάν σε κάθε γεύμα."
      }
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      text: {
        en: "**Eating on the harbour front without checking the menu first.** The Venetian Harbour is beautiful but several of the restaurants there operate on a tourist-volume model. Walk the harbour for the atmosphere, then turn into the Old Town to eat.\n\n**Attempting Preveli Beach in August without going very early or by boat.** The descent path in 38°C heat with hundreds of other people is genuinely unpleasant. Arrive before 09:30 or take a boat from Plakias.\n\n**Parking inside the Old Town.** Use the designated parking areas outside the old walls (port area or Fortezza road) and walk in. The Old Town is small — no point is more than a 10-minute walk away.\n\n**Rushing the Amari Valley into a 2-hour drive-through.** Give it a half-day minimum. Stop in Thronos for lunch, see Byzantine frescoes, buy cherries from a roadside stand.\n\n**Visiting the Fortezza in the midday heat of July–August.** Go early (opens at 08:00) or in the last hour before closing. The fortress is largely unshaded.",
        el: "**Φαγητό στο λιμάνι χωρίς να ελέγξετε το μενού.** Η θέα είναι όμορφη αλλά οι τιμές υψηλές. Περπατήστε το λιμάνι για την ατμόσφαιρα και φάτε στην Παλιά Πόλη.\n\n**Πρέβελη τον Αύγουστο χωρίς πρωινή ώρα ή βάρκα.** Το μονοπάτι με 38°C και εκατοντάδες κόσμο είναι δυσάρεστο.\n\n**Πάρκινγκ μέσα στην Παλιά Πόλη.** Χρησιμοποιήστε τους χώρους έξω από τα τείχη. Η Παλιά Πόλη είναι μικρή και περπατιέται.\n\n**Βιαστική επίσκεψη στην Κοιλάδα Αμαρίου.** Αφιερώστε τουλάχιστον μισή μέρα.\n\n**Φορτέτζα το μεσημέρι καλοκαιριού.** Πηγαίνετε νωρίς (ανοίγει 08:00) ή πριν κλείσει."
      }
    },
    {
      layout: "faq",
      title: { en: "FAQ — Rethymno Essentials", el: "Συχνές Ερωτήσεις" },
      text: {
        en: "Common questions for planning your trip to Rethymno.",
        el: "Συχνές ερωτήσεις για να οργανώσετε το ταξίδι σας στο Ρέθυμνο."
      },
      items: [
        {
          title: { en: "How many days do you need in Rethymno?", el: "Πόσες μέρες χρειάζομαι στο Ρέθυμνο;" },
          text: {
            en: "A minimum of 3 nights — two full days in the city and one for a day trip to Preveli, Arkadi, or the Amari Valley. Four nights is the comfortable option if you want to explore the south coast.",
            el: "Τουλάχιστον 3 νύχτες — δύο μέρες στην πόλη και μία για εκδρομή. Τέσσερις νύχτες είναι η άνετη επιλογή."
          }
        },
        {
          title: { en: "Is Rethymno or Chania better?", el: "Ρέθυμνο ή Χανιά;" },
          text: {
            en: "Chania has a more polished harbour and proximity to its airport. Rethymno has a more intact Old Town, a better city beach, and arguably more authentic daily life. Chania is the obvious choice for first-time visitors; Rethymno rewards those who want depth over spectacle.",
            el: "Τα Χανιά έχουν πιο περιποιημένο λιμάνι. Το Ρέθυμνο έχει πιο αυθεντική παλιά πόλη και καλύτερη παραλία. Τα Χανιά για πρώτη φορά, το Ρέθυμνο για βάθος."
          }
        },
        {
          title: { en: "Do you need a car in Rethymno?", el: "Χρειάζομαι αυτοκίνητο στο Ρέθυμνο;" },
          text: {
            en: "For the city itself, no — everything is walkable. For day trips to Preveli, Arkadi, Amari Valley, and Plakias, yes — public transport is infrequent and inflexible.",
            el: "Για την πόλη, όχι — όλα είναι περπατητά. Για εκδρομές, ναι — τα μέσα μεταφοράς είναι αραιά."
          }
        },
        {
          title: { en: "Is Rethymno good for families?", el: "Είναι το Ρέθυμνο κατάλληλο για οικογένειες;" },
          text: {
            en: "Yes — the city beach is long and shallow-entry, the Old Town is compact, and there are good family tavernas throughout. Plakias and Georgioupoli offer calm family-friendly beaches within easy day-trip range.",
            el: "Ναι — η παραλία είναι μακριά και αμμώδης, η παλιά πόλη συμπαγής. Πλακιάς και Γεωργιούπολη ιδανικά για οικογένειες."
          }
        },
        {
          title: { en: "What is the closest airport to Rethymno?", el: "Ποιο είναι το κοντινότερο αεροδρόμιο;" },
          text: {
            en: "Chania (CHQ) at ~60 km west (55–65 minutes by car). Heraklion (HER) is 80 km east (~1h15min). Chania is marginally more convenient for western Crete.",
            el: "Χανιά (CHQ) ~60 χλμ. δυτικά (55–65′). Ηράκλειο (HER) 80 χλμ. ανατολικά (~1h15′)."
          }
        },
        {
          title: { en: "Is Rethymno open year-round?", el: "Λειτουργεί το Ρέθυμνο όλο τον χρόνο;" },
          text: {
            en: "Yes — supported by the university population. Many hotels close November–February but the Old Town retains cafés, restaurants, and shops year-round. The Carnival in February–March is a major draw.",
            el: "Ναι — λόγω του πανεπιστημίου. Πολλά ξενοδοχεία κλείνουν Νοέμβριο–Φεβρουάριο αλλά η Παλιά Πόλη παραμένει ζωντανή."
          }
        }
      ]
    }
  ],

  heraklion: [
    {
      layout: "list",
      title: { en: "Why Visit Heraklion", el: "Γιατί να Πας στο Ηράκλειο" },
      text: {
        en: "Heraklion divides opinions, and that is one of the more honest things you can say about it. Visitors expecting the whitewashed serenity of the Cyclades will find something else entirely: a working Mediterranean port city with a soul built on thousands of years of trade, invasion, resistance, and reinvention.\n\n**Knossos is one of the great sites of the ancient world** — a partially reconstructed palace complex that gives a genuine spatial sense of Minoan civilisation in 1700 BC. No other site in Greece gives you this.\n\n**The Archaeological Museum is exceptional** — the finest Minoan collection in existence. The Phaistos Disc, the Snake Goddess figurines, the frescoes. Two hours here is not enough.\n\n**The Venetian city is one of the best preserved in the Mediterranean** — Koules fortress, the walls, the Morosini Fountain, the Loggia — an entire Renaissance urban layer.\n\n**The food is among the best in Greece** — the central market, the mezedopolia, the fish tavernas of the old harbour. Cretan cuisine at its capital.\n\n**It is a gateway to the rest of Crete** — Rethymno, Phaistos, Lassithi Plateau, Archanes — all within day-trip range.",
        el: "Το Ηράκλειο διχάζει τις γνώμες, και αυτό είναι ένα από τα πιο ειλικρινή πράγματα που μπορεί κανείς να πει. Οι επισκέπτες που περιμένουν την ασπρισμένη γαλήνη των Κυκλάδων θα βρουν κάτι εντελώς διαφορετικό: μια ζωντανή μεσογειακή πόλη-λιμάνι.\n\n**Η Κνωσός** — το σπουδαιότερο μινωικό ανάκτορο, μερικώς ανακατασκευασμένο.\n\n**Το Αρχαιολογικό Μουσείο** — η κορυφαία μινωική συλλογή στον κόσμο.\n\n**Η ενετική πόλη** — Κούλες, τείχη, Κρήνη Μοροζίνι, Λότζια.\n\n**Το φαγητό** — κρητική κουζίνα στην πρωτεύουσά της.\n\n**Πύλη για την υπόλοιπη Κρήτη** — Ρέθυμνο, Φαιστός, Λασίθι, Αρχάνες."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit Heraklion", el: "Η Καλύτερη Εποχή για το Ηράκλειο" },
      text: {
        en: "**Spring (April–May)** — The most rewarding months for the city and Knossos. Mild temperatures, few crowds, countryside in bloom.\n\n**June** — Best balance of warm sea, manageable temperatures, and a city alive without being overwhelmed.\n\n**July–August** — Peak heat and peak tourism. Knossos can feel congested; visit before 09:00 or after 16:00. The museum is air-conditioned.\n\n**September–October** — Arguably the finest period. Warmest sea, extraordinary light, crowds thin. Grape harvest across the wine region.\n\n💡 Secret: The Heraklion wine region — centred around Archanes — harvests in September. Several estates open for visits. Early September is one of the best times in Crete.",
        el: "**Άνοιξη (Απρίλιος–Μάιος)** — Οι καλύτεροι μήνες για την πόλη και την Κνωσό.\n\n**Ιούνιος** — Ιδανική ισορροπία ζέστης, θάλασσας και ζωντάνιας.\n\n**Ιούλιος–Αύγουστος** — Πολύς κόσμος. Κνωσός πριν τις 09:00 ή μετά τις 16:00.\n\n**Σεπτέμβριος–Οκτώβριος** — Η καλύτερη περίοδος. Τρύγος στην περιοχή Αρχανών."
      }
    },
    {
      layout: "list",
      title: { en: "How to Get to Heraklion", el: "Πώς να Πάτε στο Ηράκλειο" },
      text: {
        en: "**By air** — Heraklion International Airport (HER) is one of Greece's busiest. Direct flights from across Europe. Year-round domestic connections. 5 km east of the city centre.\n\n**By ferry** — Daily overnight service from Piraeus (7–8 hours). Regular connections to Santorini, Mykonos, Rhodes. The classic Greek maritime journey.\n\n**By car across Crete** — The E75 runs along the north coast. Heraklion is the midpoint. A car is strongly recommended for exploring beyond the city.\n\n💡 Secret: The overnight ferry from Piraeus is an experience, not a compromise. Book a cabin and arrive at 06:00 as the city wakes up and the market opens.",
        el: "**Αεροπορικώς** — Αεροδρόμιο Ηρακλείου (HER), 5 χλμ. ανατολικά.\n\n**Ακτοπλοϊκώς** — Νυχτερινά δρομολόγια από Πειραιά (7–8 ώρες). Συνδέσεις με Σαντορίνη, Μύκονο, Ρόδο.\n\n**Οδικώς** — Ε75 κατά μήκος της βόρειας ακτής."
      }
    },
    {
      layout: "grid",
      title: { en: "The Old Venetian City", el: "Η Παλιά Ενετική Πόλη" },
      items: [
        {
          title: { en: "Koules Fortress", el: "Κούλες" },
          text: {
            en: "The Venetian fortress at the entrance to the old harbour. Built between 1523 and 1540. Three Venetian lions carved into the seaward face. The harbour view from the battlements is one of the defining images of Crete. Go at dusk — the fortress stays open into early evening in summer.",
            el: "Το ενετικό φρούριο στην είσοδο του παλιού λιμανιού (1523–1540). Τρία ενετικά λιοντάρια στην πρόσοψη. Η θέα από τους προμαχώνες είναι εμβληματική."
          }
        },
        {
          title: { en: "Lion Square & Morosini Fountain", el: "Πλατεία Λιονταριών & Κρήνη Μοροζίνι" },
          text: {
            en: "The social centre of old Heraklion. The Morosini Fountain (1628) sits at the intersection of the main pedestrian streets, surrounded by kafeneions and mezedopolia. The fountain is still fed by the same 17th-century aqueduct from Mount Giouchtas.",
            el: "Το κοινωνικό κέντρο του Ηρακλείου. Η Κρήνη Μοροζίνι (1628) τροφοδοτείται ακόμα από το υδραγωγείο του 17ου αιώνα."
          }
        },
        {
          title: { en: "The Venetian Loggia", el: "Ενετική Λότζια" },
          text: {
            en: "The most elegant surviving Venetian civic building in Crete. Built in the early 17th century as a meeting place for Venetian nobles. Now serves as the city hall. The arcade is open during the day.",
            el: "Το πιο κομψό ενετικό κτίριο της Κρήτης. Κτίστηκε ως τόπος συνάντησης των Ενετών ευγενών. Σήμερα στεγάζει το δημαρχείο."
          }
        },
        {
          title: { en: "Venetian Walls", el: "Ενετικά Τείχη" },
          text: {
            en: "4 km long, up to 40 metres thick at the bastions, pierced by four gates. Commissioned by Venice in the 16th century. You can walk the top from Pantokratoras Gate to Martinengo Bastion — where Nikos Kazantzakis is buried — in about 45 minutes.",
            el: "4 χλμ. μήκος, έως 40 μέτρα πάχος. Περπατήστε από την Πύλη Παντοκράτορα έως τον Προμαχώνα Μαρτινέγκο όπου είναι θαμμένος ο Νίκος Καζαντζάκης."
          }
        }
      ]
    },
    {
      layout: "grid",
      title: { en: "Knossos & the Archaeological Museum", el: "Κνωσός & Αρχαιολογικό Μουσείο" },
      items: [
        {
          title: { en: "Palace of Knossos", el: "Παλάτι της Κνωσού" },
          text: {
            en: "5 km south of the city centre. The ceremonial and political centre of Minoan civilisation (2700–1450 BC). The partially reconstructed complex includes the Throne Room (the oldest throne in Europe), the Grand Staircase, the Central Court, and the storage magazines. Open daily; combined ticket with the museum available. Go before 09:00 or after 16:00.",
            el: "5 χλμ. νότια. Το τελετουργικό και πολιτικό κέντρο του μινωικού πολιτισμού. Η Θρόνος (ο αρχαιότερος θρόνος της Ευρώπης), η Μεγάλη Κλίμακα, η Κεντρική Αυλή."
          }
        },
        {
          title: { en: "Heraklion Archaeological Museum", el: "Αρχαιολογικό Μουσείο Ηρακλείου" },
          text: {
            en: "The finest Minoan collection in the world. The Phaistos Disc, the Snake Goddess figurines, the Bull-Leaper fresco, the Harvester Vase, the Linear A and B tablets. Allow a minimum of two hours. Buy the combined ticket with Knossos.\n\n💡 Secret: Visit the museum before Knossos — seeing the actual artefacts before walking the site transforms the experience.",
            el: "Η κορυφαία μινωική συλλογή στον κόσμο. Ο Δίσκος της Φαιστού, οι θεές των φιδιών, οι τοιχογραφίες. Αφιερώστε τουλάχιστον 2 ώρες."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Heraklion Food: What to Eat", el: "Φαγητό στο Ηράκλειο" },
      text: {
        en: "**Dakos** — The canonical Cretan dish: barley rusk with tomato, mizithra, olive oil, and oregano.\n\n**Kalitsounia** — Small pastries filled with mizithra and honey or wild greens.\n\n**Apaki** — Smoked pork from the Psiloritis mountains, marinated in wine vinegar and herbs.\n\n**Snails (Chochlioi boubouristi)** — Snails cooked in olive oil with rosemary until caramelised.\n\n**Graviera** — The great Cretan hard cheese, PDO protected from sheep's milk.\n\n**Fresh fish** — The old harbour fish tavernas serve the day's catch with minimal preparation.\n\n**Raki (Tsikoudia)** — Crete's spirit, distilled from grape pomace. Arrives automatically with food in traditional tavernas.\n\n💡 Secret: The best value food is one block behind any tourist-facing street. If the menu has photos, keep walking.",
        el: "**Ντάκος** — Το κλασικό κρητικό πιάτο.\n\n**Καλιτσούνια** — Μικρές πίτες με μυζήθρα.\n\n**Απάκι** — Καπνιστό χοιρινό από τον Ψηλορείτη.\n\n**Χοχλιοί μπουρμπουριστοί** — Σαλιγκάρια με δεντρολίβανο.\n\n**Γραβιέρα** — Το σπουδαίο κρητικό τυρί.\n\n**Ράκη (Τσικουδιά)** — Σερβίρεται αυτόματα με το φαγητό."
      }
    },
    {
      layout: "grid",
      title: { en: "Beaches Near Heraklion", el: "Παραλίες Κοντά στο Ηράκλειο" },
      items: [
        {
          title: { en: "Amoudara (3km west)", el: "Αμμούδαρα (3χλμ. δυτικά)" },
          text: {
            en: "The closest organized beach. Long sandy stretch with sunbeds and services. The western end toward the salt lake is wilder and quieter.",
            el: "Η κοντινότερη οργανωμένη παραλία. Το δυτικό άκρο είναι πιο ήσυχο."
          }
        },
        {
          title: { en: "Matala (75km southwest)", el: "Μάταλα (75χλμ. νοτιοδυτικά)" },
          text: {
            en: "Famous south coast beach with red sandstone cliffs and cave tombs. Crystal clear water. Worth a full day trip from Heraklion.",
            el: "Διάσημη παραλία με κόκκινους βράχους και σπηλιές. Εξαιρετικό νερό."
          }
        },
        {
          title: { en: "Agia Pelagia (25km west)", el: "Αγία Πελαγία (25χλμ. δυτικά)" },
          text: {
            en: "A sheltered bay with calm clear water and good tavernas on the beach. Popular with Heraklion locals.",
            el: "Προστατευμένος κόλπος με ήρεμα νερά. Δημοφιλής στους ντόπιους."
          }
        },
        {
          title: { en: "Karteros / Amnissos (8km east)", el: "Καρτερός / Αμνισσός (8χλμ. ανατολικά)" },
          text: {
            en: "Two adjacent beaches east of the airport. Karteros is organised and calm; Amnissos has a Minoan site above the beach.",
            el: "Οργανωμένες παραλίες ανατολικά του αεροδρομίου. Η Αμνισσός έχει μινωικό χώρο πάνω από την παραλία."
          }
        }
      ]
    },
    {
      layout: "grid",
      title: { en: "Day Trips from Heraklion", el: "Εκδρομές από το Ηράκλειο" },
      items: [
        {
          title: { en: "Archanes (15km south)", el: "Αρχάνες (15χλμ. νότια)" },
          text: {
            en: "A beautifully preserved Venetian-era village in wine country. The wine cooperative produces excellent Kotsifali and Mandilari reds. The Fourni Minoan cemetery nearby is exceptional and uncrowded.",
            el: "Πανέμορφο ενετικό χωριό στην οινοπαραγωγό περιοχή. Κορυφαία κρασιά Κοτσιφάλι και Μανδηλαριά."
          }
        },
        {
          title: { en: "Phaistos & Agia Triada (60km SW)", el: "Φαιστός & Αγία Τριάδα (60χλμ. ΝΔ)" },
          text: {
            en: "The second great Minoan palace — unrestored, with a dramatic position overlooking the Messara Plain. Combined with Agia Triada, they make a full and excellent day.",
            el: "Το δεύτερο μεγάλο μινωικό ανάκτορο, χωρίς αναστηλώσεις, με εκπληκτική θέα στη Μεσαρά."
          }
        },
        {
          title: { en: "Spinalonga (90km east)", el: "Σπιναλόγκα (90χλμ. ανατολικά)" },
          text: {
            en: "The Venetian island fortress in the Gulf of Elounda. A leper colony until 1957. The boat crossing across the clear gulf is part of the experience.",
            el: "Ενετικό νησί-φρούριο, λεπροκομείο έως το 1957. Προσβάσιμο με βάρκα από Ελούντα."
          }
        },
        {
          title: { en: "Lassithi Plateau (50km east)", el: "Οροπέδιο Λασιθίου (50χλμ. ανατολικά)" },
          text: {
            en: "A high mountain plateau at 840m, ringed by the Dikti Mountains. The Psychro Cave — legendary birthplace of Zeus. The drive through mountain switchbacks is itself an event.",
            el: "Οροπέδιο στα 840μ., με το Δικταίο Σπήλαιο — η γενέτειρα του Δία κατά την παράδοση."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Practical Tips", el: "Πρακτικές Συμβουλές" },
      text: {
        en: "**Orientation** — The old city is compact. The main pedestrian street (25 Avgoustou) runs from the ferry port to Lion Square. Knossos is 5 km south — accessible by city bus (lines 2 and 4).\n\n**Getting around** — Walk within the old city. Bus or taxi for Knossos. Rent a car for day trips.\n\n**When to book** — Knossos and the museum offer online tickets. In July–August, arriving without a ticket for Knossos means significant queuing.\n\n**Language and money** — English is widely spoken. The central market operates largely in cash.\n\n**The raki question** — Raki is offered as hospitality. It is rude to decline without a reason.\n\n💡 Secret: The city bus to Knossos (lines 2 and 4) runs from the central bus terminal east of Lion Square, takes about 20 minutes, and costs a fraction of a taxi.",
        el: "**Προσανατολισμός** — Η παλιά πόλη είναι συμπαγής. Λεωφορεία 2 και 4 για Κνωσό.\n\n**Μετακινήσεις** — Με τα πόδια στην παλιά πόλη. Αυτοκίνητο για εκδρομές.\n\n**Κράτηση** — Ηλεκτρονικά εισιτήρια για Κνωσό και μουσείο.\n\n**Χρήματα** — Η αγορά λειτουργεί κυρίως με μετρητά.\n\n**Η ρακή** — Προσφέρεται ως φιλοξενία. Δεν αρνείσαι χωρίς λόγο."
      }
    },
    {
      layout: "faq",
      title: { en: "FAQ — Heraklion Essentials", el: "Συχνές Ερωτήσεις" },
      text: {
        en: "Common questions for planning your trip to Heraklion.",
        el: "Συχνές ερωτήσεις για το ταξίδι σας στο Ηράκλειο."
      },
      items: [
        {
          title: { en: "How many days do you need in Heraklion?", el: "Πόσες μέρες χρειάζομαι στο Ηράκλειο;" },
          text: {
            en: "Minimum two full days: one for Knossos and the Archaeological Museum, one for the Venetian old city, the market, and the harbour. Three to four days allows day trips to Phaistos, Archanes, or the south coast.",
            el: "Τουλάχιστον δύο πλήρεις μέρες. Τρεις με τέσσερις επιτρέπουν εκδρομές."
          }
        },
        {
          title: { en: "Is Heraklion worth visiting or should I go to a resort?", el: "Αξίζει το Ηράκλειο ή να πάω σε resort;" },
          text: {
            en: "Heraklion is worth visiting if you are interested in history, archaeology, and food. It is not for people whose primary goal is a beach holiday.",
            el: "Αξίζει αν σας ενδιαφέρει η ιστορία, η αρχαιολογία και το φαγητό."
          }
        },
        {
          title: { en: "Is Knossos worth visiting?", el: "Αξίζει η Κνωσός;" },
          text: {
            en: "Yes, emphatically. One of the most significant archaeological sites in the world. Go with some preparation — read about Minoan civilisation beforehand or visit the museum first.",
            el: "Ναι, απόλυτα. Διαβάστε πρώτα για τον μινωικό πολιτισμό ή επισκεφθείτε πρώτα το μουσείο."
          }
        },
        {
          title: { en: "Do you need a car in Heraklion?", el: "Χρειάζομαι αυτοκίνητο στο Ηράκλειο;" },
          text: {
            en: "Not for the city itself. Essential for any exploration beyond the immediate city.",
            el: "Όχι για την πόλη. Απαραίτητο για εξερεύνηση πέρα από το άμεσο κέντρο."
          }
        },
        {
          title: { en: "What is the best area to stay in Heraklion?", el: "Ποια είναι η καλύτερη περιοχή για διαμονή;" },
          text: {
            en: "The old city within the Venetian walls for proximity to everything. The harbour area around the Venetian Arsenal for views and atmosphere.",
            el: "Η παλιά πόλη εντός των τειχών. Η περιοχή του λιμανιού για θέα."
          }
        },
        {
          title: { en: "Is Heraklion expensive?", el: "Είναι ακριβό το Ηράκλειο;" },
          text: {
            en: "Less expensive than the island resorts. The central market, traditional tavernas, and public transport are all good value.",
            el: "Φθηνότερο από τα νησιωτικά resorts."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Heraklion", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στο Ηράκλειο" },
      text: {
        en: "✕ **Knossos at midday** — The Minoan palace is essential but at noon in summer the exposed site is scorching and the crowds make it hard to appreciate. Go at opening (08:00) when the light is soft and the site is nearly empty.\n\n✕ **Heraklion waterfront restaurants** — The harbour restaurants survive on cruise ship traffic and tourist footfall. The better food is in the lanes behind the Loggia and around the central market.\n\n✕ **Treating Heraklion as a transit point** — Most visitors land here and leave for Chania or the beaches. Heraklion itself has one of the best archaeological museums in the Mediterranean, a lively university scene, and the Koules fortress at sunset.\n\n✕ **Skipping the central market** — The covered market (1866 Street) is a sensory overload of cheese, honey, herbs, and Cretan specialities. It is the best place to understand what Cretan food actually is.\n\n✕ **Ignoring the southern coast** — The drive south from Heraklion to Matala, through the Messara plain, reveals a completely different Crete: Minoan palaces (Phaistos, Gortyna), cave beaches, and mountain villages.\n\n💡 What nobody tells you: The best-kept secret near Heraklion is the village of Archanes — a thirty-minute drive inland, with wine cellars, a Venetian fountain, and the best taverna in the Heraklion region (To Koutouki tis Elenis). It is where Heraklion locals go for Sunday lunch.",
        el: "✕ **Κνωσσός στο μεσημέρι** — Απαραίτητο αλλά στη ζέστη και τον κόσμο. Άνοιγμα 08:00.\n\n✕ **Ταβέρνες λιμαριού** — Κρουαζιερόπλοια, τουρίστες. Καλύτερο φαγητό στα σοκάκια πίσω από τη Λόγκια.\n\n✕ **Ηράκλειο ως transit** — Αρχαιολογικό Μουσείο (από τα καλύτερα Μεσογείου), πανεπιστήμιο, Κούλες στη δύση.\n\n✕ **Να παραλείψεις την κεντρική αγορά** — 1866, τυρί, μέλι, βότανα. Η Κρητική κουζίνα.\n\n✕ **Να αγνοήσεις τον νότο** — Μεσσαρα, Φαιστός, Γόρτυνα, Ματαλά, σπήλια.\n\n💡 Αυτό που δε σου λέει κανείς: Το κρυμμένο μυστικό κοντά στο Ηράκλειο είναι το Αρχάνες — 30 λεπτά μέσα, κελάρια κρασιού, Ενετική βρύση, και η καλύτερη ταβέρνα στην περιοχή."
      }
    }
  ],
  lasithi: [
    {
      layout: "list",
      title: { en: "Why Visit Lasithi", el: "Γιατί να Επισκεφτείς το Λασίθι" },
      text: {
        en: "Lasithi divides travellers into those who planned to come here and those who drove east from Heraklion and kept going. Both tend to feel rewarded.\n\nSpinalonga is one of the most affecting sites in the whole of Greece. Not because of the fortress architecture — though the Venetian construction is formidable — but because of what happened there in the twentieth century. The island was an operational leper colony until 1957. Walking its streets, which are still largely intact, is a different kind of experience than any ancient ruin offers.\n\nElounda Bay has some of the finest water in the Mediterranean. The combination of the semi-enclosed gulf, white sand, and sea grass underneath produces the kind of colour that normally requires post-production. It does not require post-production here.\n\nVai is the only palm beach in Europe that is not the result of landscaping. The grove of Phoenix theophrasti palms is a native Cretan species, and it is genuinely strange and beautiful — especially if you visit early in the morning before the day-trip buses arrive.\n\nThe food in eastern Crete is different from elsewhere on the island. Sitia produces a distinctive, peppery olive oil that is among the finest in Greece. The local wine — particularly from the Vilana and Thrapsathiri grapes grown in the Sitia wine region — is barely known outside Crete. Ierapetra's long summer season produces some of the best tomatoes in the country.\n\nLasithi is the least crowded part of Crete. Even in August, the far east of the region — Zakros, Xerokampos, the Sitia coast — has a solitude that is almost impossible to find elsewhere in Greece in summer.",
        el: "Το Λασίθι χωρίζει τους ταξιδιώτες σε εκείνους που σχεδίασαν να έρθουν και εκείνους που οδήγησαν ανατολικά από το Ηράκλειο και συνέχισαν. Και οι δύο τείνουν να νιώθουν ανταμοιβή.\n\nΗ Σπιναλόγκα είναι ένα από τα πιο συγκινητικά μέρη σε ολόκληρη την Ελλάδα. Το νησί ήταν μια ενεργή αποικία λεπρών μέχρι το 1957. Το περπάτημα στους δρόμους του, που είναι ακόμη σε μεγάλο βαθμό ανέπαφοι, είναι μια διαφορετική εμπειρία από οποιοδήποτε αρχαίο ερείπιο.\n\nΟ κόλπος της Ελούντας έχει ένα από τα ωραιότερα νερά της Μεσογείου. Ο συνδυασμός του ημίκλειστου κόλπου, της λευκής άμμου και των θαλάσσιων φυκιών παράγει το είδος του χρώματος που κανονικά απαιτεί μετα-παραγωγή.\n\nΤο Βάι είναι η μοναδική παραλία με φοίνικες στην Ευρώπη που δεν είναι αποτέλεσμα εξωραϊσμού. Το φοινικόδασος είναι ένα ενδημικό κρητικό είδος.\n\nΤο Λασίθι είναι το λιγότερο πολυσύχναστο μέρος της Κρήτης. Ακόμα και τον Αύγουστο, η άκρη της ανατολικής περιοχής έχει μια μοναξιά που είναι σχεδόν αδύνατο να βρεις αλλού στην Ελλάδα το καλοκαίρι."
      }
    },
    {
      layout: "list",
      title: { en: "What to Skip in Lasithi", el: "Τι να Αποφύγεις στο Λασίθι" },
      text: {
        en: "**Lasithi Plateau windmills** — The famous \"windmill plateau\" is frequently described as a highlight. Most of the windmills are decommissioned shells. The drive up is scenic; the plateau itself is agricultural, flat, and not worth a special journey unless you are combining it with the Psychro Cave.\n\n**Malia** — The beach is fine. The resort town around it is not representative of this region or any region. Skip it unless a group member requires nightlife infrastructure.\n\n**Elounda without a budget** — The bay is spectacular, but the cluster of ultra-luxury hotels that dominates Elounda has inflated prices across the area. Budget accommodation is in Agios Nikolaos, 15 minutes south. Do not pay Elounda hotel prices for a room that doesn't have a bay view.",
        el: "**Ανεμόμυλοι Οροπεδίου Λασιθίου** — Οι διάσημοι ανεμόμυλοι είναι ως επί το πλείστον παροπλισμένοι. Η διαδρομή είναι γραφική, αλλά το οροπέδιο δεν αξίζει ειδική διαδρομή εκτός αν το συνδυάσετε με το Σπήλαιο Ψυχρού.\n\n**Μάλια** — Η παραλία είναι καλή. Το θέρετρο γύρω της δεν αντιπροσωπεύει αυτή ή οποιαδήποτε περιοχή.\n\n**Ελούντα χωρίς προϋπολογισμό** — Ο κόλπος είναι εντυπωσιακός, αλλά τα πολυτελή ξενοδοχεία έχουν φουσκώσει τις τιμές. Οικονομική διαμονή υπάρχει στον Άγιο Νικόλαο."
      }
    },
    {
      layout: "list",
      title: { en: "Agios Nikolaos", el: "Άγιος Νικόλαος" },
      text: {
        en: "The capital of Lasithi is not trying to be more than it is. A small city of around 10,000 people built around a remarkable geographical anomaly: a circular lake, 64 metres deep, connected to the sea by a narrow channel. The lake is called Voulismeni, and the story that it has no bottom — repeated on every menu placarded at the surrounding cafés — is among the more persistent myths in Cretan tourism. It does have a bottom. It's at 64 metres.\n\nThe harbourfront is the social core of the city. Tables run along both sides of the channel, and in the evening this strip fills up in the way that Greek port towns do — unhurriedly, and for a long time. The old quarter above the harbour has narrower streets, a Venetian gate, and considerably more reasonable prices than the waterfront.\n\n**The Archaeological Museum** — Often overlooked in favour of Heraklion's museum, the Agios Nikolaos Archaeological Museum has a collection that rewards careful attention. The Early Minoan material from the Sitia Geopark area is well-presented, and the collection includes a skull — displayed in a case that always generates discussion — with a gold laurel wreath resting on top of it, found with a Roman burial. The museum is small enough to do properly in an hour.\n\n**Kitroplatia Beach** — The town beach, a ten-minute walk from the lake. Organized, with sunbeds and a beach bar. Not the finest beach in the region — that honour goes to beaches further east — but pleasant for a morning swim and close to everything.\n\n**The Harbour at Night** — The channel between the lake and the harbour is lit at night. If you sit on the lake side rather than the port side, the prices drop and the view is identical.\n\nINSIDER TIP: The Agios Nikolaos market runs on Wednesday and Saturday mornings on Paleologou Street, two blocks back from the waterfront. Local honey, olive oil, cheese, and vegetables. More useful than the tourist shops on the harbour.",
        el: "Η πρωτεύουσα του Λασιθίου είναι μια μικρή πόλη περίπου 10.000 κατοίκων χτισμένη γύρω από μια κυκλική λίμνη, 64 μέτρων βάθους, που συνδέεται με τη θάλασσα μέσω ενός στενού διαύλου. Η λίμνη ονομάζεται Βουλισμένη και η ιστορία ότι δεν έχει πάτο — επαναλαμβανόμενη σε κάθε μενού των γύρω καφέ — είναι ένας από τους πιο επίμονους μύθους του κρητικού τουρισμού. Έχει πάτο. Στα 64 μέτρα.\n\nΤο λιμάνι είναι η κοινωνική καρδιά της πόλης. Η παλιά συνοικία πάνω από το λιμάνι έχει στενότερους δρόμους, μια ενετική πύλη και σημαντικά πιο λογικές τιμές από την προκυμαία.\n\n**Αρχαιολογικό Μουσείο** — Συχνά παραβλέπεται υπέρ του μουσείου Ηρακλείου, αλλά η συλλογή του ανταμείβει την προσεκτική ματιά. Αξίζει μία ώρα.\n\n**Παραλία Κιτροπλατεία** — Η παραλία της πόλης, δέκα λεπτά με τα πόδια από τη λίμνη. Οργανωμένη, με ξαπλώστρες.\n\nΣΥΜΒΟΥΛΗ: Η αγορά του Αγίου Νικολάου λειτουργεί Τετάρτη και Σάββατο πρωί στην οδό Παλαιολόγου. Τοπικό μέλι, ελαιόλαδο, τυρί και λαχανικά."
      }
    },
    {
      layout: "list",
      title: { en: "Elounda", el: "Ελούντα" },
      text: {
        en: "Elounda has been colonised at the high end. The bay — a Gulf of Finland-blue expanse sheltered between the main coast and the Spinalonga Peninsula — is extraordinary, and the international hotel industry noticed this some decades ago. The result is a concentration of five-star resorts that has made Elounda one of the most expensive destinations in Greece.\n\nThis creates a situation for the independent traveller. The bay itself is open. The beaches — including the long sandy strip around the village — are public. The water quality is exceptional. You can stay in Agios Nikolaos, drive up in the morning, spend a day on the bay's edge, and have the same water without the resort cost.\n\n**The Spinalonga Peninsula** — A narrow finger of land that encloses the bay from the north. The road to its tip leads through landscapes of dry stone walls, fig trees, and — toward the end — genuine solitude. The ancient sunken city of Olous is visible from the causeway at low water: barely visible, enough to understand why the causeway was built here. This is not a formal archaeological site; it is a shadow in the water. Worth the ten-minute walk from the causeway parking.\n\n**Plaka Village** — A tiny fishing village at the northern end of the bay, looking directly at Spinalonga. Boats to the island also depart from here — the crossing is shorter and quieter than from Elounda. The village has two or three tavernas on the waterfront. One of the finest views of Spinalonga is from the Plaka side, especially in the afternoon light.\n\nINSIDER TIP: Boats to Spinalonga run from three points: Elounda, Plaka, and Agios Nikolaos. The Agios Nikolaos boat takes longer but crosses more of the gulf and gives the best aerial view of the coastline. The Plaka crossing (about 10 minutes) is the most atmospheric — a small, almost wordless journey to an island you can see clearly the whole time.",
        el: "Η Ελούντα έχει κατακτηθεί από την πολυτελή αγορά. Ο κόλπος είναι εξαιρετικός, αλλά η συγκέντρωση πολυτελών ξενοδοχείων την έχει κάνει έναν από τους ακριβότερους προορισμούς στην Ελλάδα.\n\nΗ ίδια η παραλία είναι δημόσια. Μείνετε στον Άγιο Νικόλαο, οδηγήστε το πρωί, περάστε τη μέρα στην άκρη του κόλπου και έχετε το ίδιο νερό χωρίς το κόστος του θερέτρου.\n\n**Χερσόνησος Σπιναλόγκας** — Η αρχαία βυθισμένη πόλη της Ολούντος είναι ορατή από τον διάδρομο σε χαμηλή στάθμη.\n\n**Πλάκα** — Ένα μικρό ψαροχώρι στο βόρειο άκρο του κόλπου, με θέα απευθείας στη Σπιναλόγκα. Βάρκες αναχωρούν και από εδώ.\n\nΣΥΜΒΟΥΛΗ: Βάρκες για Σπιναλόγκα από τρία σημεία. Η διάβαση από Πλάκα (περίπου 10 λεπτά) είναι η πιο ατμοσφαιρική."
      }
    },
    {
      layout: "list",
      title: { en: "Spinalonga Island", el: "Σπιναλόγκα" },
      text: {
        en: "The island sits four kilometres offshore in a bay that is, by every reasonable measure, one of the most beautiful in Greece. The fortress was built by the Venetians in 1579 and held against the Ottomans until 1715 — long after the rest of Crete had fallen. The Ottomans used it. When the Ottomans left in 1903, the Greek state repurposed it as a leper colony, isolating the sick on the island for the next fifty-four years. The colony was closed in 1957. The last patient left. The village remained.\n\nWalking into Spinalonga today means walking into that village — intact streets, intact houses, intact church — with the knowledge of what it was. This is not comfortable, and that is precisely what makes it worth doing. The Venetian gate, with its inscription to the Venetian governor above the entrance, leads directly into streets that were lived in within living memory.\n\nThe site gained wider international attention through Victoria Hislop's 2005 novel The Island, set partly on Spinalonga, and subsequently through the Greek television adaptation. The novel brought significant tourist interest. The history does not require the novel.\n\n**Practical Information for Spinalonga** — Boats run regularly from Elounda, Plaka, and Agios Nikolaos. Tickets are purchased on the boat or at the jetty. The island itself has an entrance fee. Allow two to three hours. There is a small café on the island; there is no shade on the walk around the walls. Go before 10:00 or after 15:00 in summer — midday is both hot and crowded. The first boat of the morning (usually around 09:00 from Plaka) puts you on the island before the tour groups. The light is better. The silence is longer.",
        el: "Το νησί βρίσκεται τέσσερα χιλιόμετρα ανοιχτά σε έναν κόλπο που είναι ένας από τους ομορφότερους στην Ελλάδα. Το φρούριο χτίστηκε από τους Ενετούς το 1579. Όταν οι Οθωμανοί έφυγαν το 1903, το ελληνικό κράτος το μετέτρεψε σε αποικία λεπρών, απομονώνοντας τους ασθενείς για τα επόμενα πενήντα τέσσερα χρόνια. Η αποικία έκλεισε το 1957.\n\nΤο περπάτημα στη Σπιναλόγκα σημαίνει να περπατάς σε ένα χωριό — άθικτους δρόμους, άθικτα σπίτια, άθικτη εκκλησία — με τη γνώση του τι ήταν. Αυτό δεν είναι άνετο, και αυτό ακριβώς το κάνει να αξίζει.\n\nΤο νησί έγινε γνωστό μέσα από το μυθιστόρημα της Victoria Hislop \"Το Νησί\" (2005).\n\n**Πρακτικές Πληροφορίες** — Βάρκες από Ελούντα, Πλάκα και Άγιο Νικόλαο. Αφήστε δύο με τρεις ώρες. Πηγαίνετε πριν τις 10:00 ή μετά τις 15:00 το καλοκαίρι."
      }
    },
    {
      layout: "grid",
      title: { en: "Top Attractions in Eastern Lasithi", el: "Κορυφαία Αξιοθέατα στην Ανατολική Λασίθι" },
      items: [
        {
          title: { en: "Toplou Monastery", el: "Μονή Τοπλού" },
          text: {
            en: "Twenty-five kilometres east of Sitia, the Toplou Monastery stands like something from another century — because it largely is. Founded in the fifteenth century, destroyed and rebuilt multiple times, it served as a communications hub for the Cretan resistance during the German occupation. The Icon of the Great Art by Ioannis Kornaros (1770) — a complex theological composition with 61 scenes — is displayed inside and is one of the most significant pieces of religious art in Crete. The monastery shop sells wine and olive oil made by the monks.",
            el: "Είκοσι πέντε χιλιόμετρα ανατολικά της Σητείας, η Μονή Τοπλού ιδρύθηκε τον δέκατο πέμπτο αιώνα. Η Εικόνα της Μεγάλης Τέχνης από τον Ιωάννη Κορνάρο (1770) εκτίθεται στο εσωτερικό. Το μοναστήρι είναι ακόμη ενεργό."
          }
        },
        {
          title: { en: "Vai Palm Forest", el: "Φοινικόδασος Βάι" },
          text: {
            en: "Europe's largest natural palm forest. The Phoenix theophrasti is a Cretan endemic — not imported, not planted, not the result of landscaping. The palms crowd a beach that faces east, which means it catches the morning light in a way that southern-facing beaches do not. The grove has been managed and protected since the 1980s. Go before 08:30 if you want the grove in near-solitude. INSIDER TIP: The path from the car park to the northern end of the beach takes about fifteen minutes. The southern end is quieter, less organised, and has cleaner snorkelling.",
            el: "Το μεγαλύτερο φυσικό φοινικόδασος της Ευρώπης. Ο φοίνικας Phoenix theophrasti είναι κρητικό ενδημικό είδος. Η παραλία βλέπει ανατολικά, πιάνοντας το πρωινό φως. Πηγαίνετε πριν τις 08:30 για ηρεμία."
          }
        },
        {
          title: { en: "Kato Zakros & the Minoan Palace", el: "Κάτω Ζάκρος & Μινωικό Ανάκτορο" },
          text: {
            en: "At the far eastern end of the road system, Kato Zakros sits at the bottom of the Zakros Gorge. The Minoan palace here, excavated from 1961, is the fourth great Minoan palace site after Knossos, Phaistos, and Malia. It is also the least visited and the best preserved in its lower levels — still partially buried, still giving the sense of excavation rather than reconstruction. The beach in front of the village is calm and clean.",
            el: "Στο ανατολικότερο άκρο του οδικού δικτύου, το μινωικό ανάκτορο της Ζάκρου είναι το τέταρτο μεγάλο μινωικό ανάκτορο. Είναι το λιγότερο επισκέψιμο και το καλύτερα διατηρημένο στα κατώτερα επίπεδά του."
          }
        },
        {
          title: { en: "Xerokampos", el: "Ξερόκαμπος" },
          text: {
            en: "South of Zakros, reachable by a rough road. Xerokampos is a scattered hamlet on a wide, flat beach with a handful of pensions and tavernas. One of the few beaches on Crete that still functions on an agricultural calendar — the locals have farms and apartments, not hotels and packages. A place you either love immediately or don't understand.",
            el: "Νότια της Ζάκρου, ο Ξερόκαμπος είναι ένας διάσπαρτος οικισμός σε μια φαρδιά, επίπεδη παραλία. Μια από τις λίγες παραλίες στην Κρήτη που λειτουργεί ακόμα με γεωργικό ημερολόγιο."
          }
        },
        {
          title: { en: "Sitia Geopark", el: "Γεωπάρκο Σητείας" },
          text: {
            en: "UNESCO Global Geopark status was granted in 2021. The park covers the eastern tip of Crete — a landscape shaped by tectonic forces, with fossil sites, sea caves, rare plant species, and geological complexity. The gorge systems — particularly Richtis Gorge, with its 25-metre waterfall emptying into a natural pool — are the most accessible highlights. The trail is reasonably maintained; good shoes are sufficient.",
            el: "Αναγνωρίστηκε ως Παγκόσμιο Γεωπάρκο UNESCO το 2021. Το φαράγγι Ρίχτη, με τον καταρράκτη 25 μέτρων, είναι το πιο προσιτό αξιοθέατο."
          }
        }
      ]
    },
    {
      layout: "grid",
      title: { en: "Best Beaches in Lasithi", el: "Οι Καλύτερες Παραλίες στο Λασίθι" },
      items: [
        {
          title: { en: "Voulisma Beach", el: "Παραλία Βούλισμα" },
          text: {
            en: "Near Istro (20km east of Agios Nikolaos). A semi-circular bay with sand that is fine even by Aegean standards, calm water, and a backdrop of hills. Well-organised in summer with sunbeds and a beach bar. One of the finest organised beaches in the region.",
            el: "Κοντά στην Ίστρο (20χλμ. ανατολικά του Αγίου Νικολάου). Ημικυκλικός κόλπος με ψιλή άμμο, ήρεμα νερά και λόφους στο βάθος."
          }
        },
        {
          title: { en: "Istro Beach", el: "Παραλία Ίστρου" },
          text: {
            en: "A longer and wilder stretch than Voulisma. The eastern end is rarely developed and often empty in the morning. The snorkelling off the rocks on the left is worth the walk.",
            el: "Μεγαλύτερη και πιο άγρια από το Βούλισμα. Το ανατολικό άκρο είναι συχνά άδειο το πρωί."
          }
        },
        {
          title: { en: "Mochlos Islet", el: "Νησίδα Μόχλου" },
          text: {
            en: "A tiny rocky island 200 metres from the village of Mochlos, reachable by swimming or a short paddle. The island has a Minoan settlement on it. The water between the island and the shore is some of the clearest in the region.",
            el: "Μικρή βραχονησίδα 200 μέτρα από το χωριό Μόχλος. Η θάλασσα μεταξύ του νησιού και της ακτής είναι από τις πιο καθαρές στην περιοχή."
          }
        },
        {
          title: { en: "Kalo Nero (Ierapetra)", el: "Καλό Νερό (Ιεράπετρα)" },
          text: {
            en: "On the south coast, west of Ierapetra. Long, undeveloped, dark sand. The south coast beaches in Lasithi are different from the north — wider exposure to the Libyan Sea, stronger swell, and more dramatic cloud formations.",
            el: "Στη νότια ακτή, δυτικά της Ιεράπετρας. Μακριά, ανεκμετάλλευτη, με σκούρα άμμο και ισχυρότερη διόγκωση."
          }
        },
        {
          title: { en: "Kouremenos Beach (Palekastro)", el: "Παραλία Κουρεμένος (Παλαίκαστρο)" },
          text: {
            en: "The best windsurfing beach in Crete. A consistent meltemi wind, a long sandy bay, a windsurfing school that has operated here for decades. If you windsurf or are willing to learn, this is the reason to drive east.",
            el: "Η καλύτερη παραλία windsurfing στην Κρήτη. Συνεπής μελτέμι, μακρύς αμμώδης κόλπος και σχολή windsurfing."
          }
        },
        {
          title: { en: "Xerokampos Beach", el: "Παραλία Ξερόκαμπου" },
          text: {
            en: "Wide, flat, clean, almost always quiet. No significant nightlife infrastructure. The snorkelling along the rocky headlands on either side of the bay is excellent. INSIDER TIP: The Cretan south coast is exposed to the Libyan Sea. In summer, this means warmer water but also occasional strong southerly winds. Check the wind before committing to a long drive.",
            el: "Φαρδιά, επίπεδη, καθαρή, σχεδόν πάντα ήσυχη. Το κολύμπι με μάσκα κατά μήκος των βραχωδών ακρογιαλιών είναι εξαιρετικό."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Food & Drink in Lasithi", el: "Φαγητό & Ποτό στο Λασίθι" },
      text: {
        en: "Eastern Cretan food is not a lesser version of the Cretan diet — it is a regional expression of it, with its own emphases. The olive oil from the Sitia zone is produced from the Koroneiki variety at high altitude and is among the most sought-after PDO oils in Europe. The local cheeses — particularly the aged graviera from mountain villages — are distinct from their western Cretan equivalents. The wine from the Sitia wine region, built on the Liatiko grape (one of Greece's oldest varieties), is barely distributed outside Crete.\n\n**Sitia Olive Oil** — PDO-protected, produced from Koroneiki olives at altitude. Peppery finish, green-gold colour. Buy it at the Toplou Monastery shop or direct from producers near Sitia.\n\n**Liatiko Wine** — An ancient red grape variety grown almost exclusively in the Sitia zone. Produces a medium-bodied, sometimes semi-sweet red with strong local character. Rarely found outside Crete.\n\n**Dakos** — The baseline of Cretan food: barley rusk, tomato, mizithra, olive oil, oregano. In Lasithi's village tavernas, the rusk is often harder and the mizithra sharper than in tourist-facing versions.\n\n**Octopus at Mochlos** — The village of Mochlos has two or three tavernas and a local fishing fleet. Octopus dried on the line outside the kitchen and then grilled is the canonical order.\n\n**Honey from the Dikti Mountains** — The thyme honey from the mountains surrounding the Lasithi Plateau is among the finest in Greece. Sold in village shops and at the Saturday market in Agios Nikolaos.\n\n**Staka** — Rendered sheep's milk butter — a Cretan cooking fat rarely seen on restaurant menus but used in traditional homes.\n\n**Raki (Tsikoudia)** — Arrives without being asked in traditional tavernas. In eastern Crete, raki is often served with a small sweet rather than mezedes.\n\nINSIDER TIP: The tavernas in Mochlos, Xerokampos, and the villages around Sitia set their prices without reference to what the tourism market will bear — because few tourists find them. A full meal with raki and dessert in one of these places costs less than a salad in Elounda.",
        el: "Η ανατολική κρητική κουζίνα είναι μια περιφερειακή έκφραση της κρητικής διατροφής με τις δικές της έμφασεις. Το ελαιόλαδο Σητείας ΠΟΠ είναι από τα πιο περιζήτητα στην Ευρώπη. Το κρασί από την οινοπαραγωγική ζώνη της Σητείας, χτισμένο πάνω στο σταφύλι Λιάτικο, σπάνια διανέμεται εκτός Κρήτης.\n\n**Ελαιόλαδο Σητείας** — ΠΟΠ, από ελιές Κορωνέικι σε υψόμετρο. Αγοράστε το στο μοναστήρι Τοπλού.\n\n**Κρασί Λιάτικο** — Αρχαία ποικιλία που παράγεται σχεδόν αποκλειστικά στη ζώνη της Σητείας.\n\n**Χταπόδι στο Μόχλο** — Το χταπόδι αποξηραίνεται στην πετονιά έξω από την κουζίνα και στη συνέχεια ψήνεται στα κάρβουνα.\n\n**Μέλι από τη Δίκτη** — Το θυμάρι μέλι από τα βουνά γύρω από το Οροπέδιο Λασιθίου είναι από τα καλύτερα στην Ελλάδα.\n\nΣΥΜΒΟΥΛΗ: Οι ταβέρνες στο Μόχλο, τον Ξερόκαμπο και τα χωριά γύρω από τη Σητεία κοστίζουν λιγότερο από μια σαλάτα στην Ελούντα."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit Lasithi", el: "Η Καλύτερη Εποχή για το Λασίθι" },
      text: {
        en: "**April – May** — Best for gorge walks, the countryside in bloom. Spinalonga is open and quiet. Sea is cool but swimmable in May.\n\n**June** — The finest month. Sea temperature rises, the meltemi hasn't established, and the far east of the region is not yet crowded. Kouremenos has good wind for surfing.\n\n**July – August** — Peak heat and peak visitors at Elounda and Agios Nikolaos. Further east — Sitia, Vai, Zakros — remains manageable. Strong meltemi on exposed coasts. Excellent for windsurfing.\n\n**September – October** — The best period for those who don't need school holiday dates. Sea is warmest, light is extraordinary, harvest season. Sitia wine region festival in September.\n\n**November – March** — Most of the coast closes. Agios Nikolaos remains open year-round. A handful of tavernas in Elounda stay open for local trade.\n\nINSIDER TIP: September in the Sitia wine zone is harvest time. A handful of producers — including Lyrarakis and Economou — accept visits during harvest. This is not organised wine tourism; it involves raki at some point.",
        el: "**Απρίλιος – Μάιος** — Καλύτερα για περιπάτους σε φαράγγια και εξοχή σε άνθιση.\n\n**Ιούνιος** — Ο καλύτερος μήνας. Η θερμοκρασία της θάλασσας ανεβαίνει, το μελτέμι δεν έχει εγκατασταθεί ακόμα.\n\n**Ιούλιος – Αύγουστος** — Αιχμή ζέστης και επισκεπτών. Πιο ανατολικά παραμένει διαχειρίσιμο.\n\n**Σεπτέμβριος – Οκτώβριος** — Η καλύτερη περίοδος. Η θάλασσα είναι πιο ζεστή, το φως εξαιρετικό, περίοδος συγκομιδής.\n\n**Νοέμβριος – Μάρτιος** — Οι περισσότερες ακτές κλείνουν. Ο Άγιος Νικόλαος παραμένει ανοιχτός όλο τον χρόνο."
      }
    },
    {
      layout: "list",
      title: { en: "How to Get to Lasithi", el: "Πώς να Πάτε στο Λασίθι" },
      text: {
        en: "**By Air** — Heraklion International Airport (HER) is the primary gateway — 70km west of Agios Nikolaos. Sitia has a small domestic airport (JSH) with seasonal connections to Athens and a handful of other Greek airports. For most international arrivals, Heraklion is the starting point and a rental car is the most practical next step.\n\n**By Ferry** — Agios Nikolaos has a small ferry port with seasonal connections within Crete and occasional links to the Dodecanese and Cyclades. Sitia has a more active port with regular service to Rhodes, Karpathos, and Kassos. Neither port handles the volume of Heraklion or Piraeus.\n\n**By Car from Heraklion** — The E75 coastal highway runs east from Heraklion. Agios Nikolaos is 1 hour 10 minutes. Sitia is around 2 hours. Kato Zakros is 2 hours 45 minutes. The road quality is good on the main E75; the roads to the far eastern villages require attention and occasionally a vehicle with reasonable clearance.\n\n**By Bus (KTEL)** — KTEL Lasithi runs frequent buses from Heraklion to Agios Nikolaos and Sitia. Connections beyond those towns are much less frequent. A car is the only practical way to reach Vai, Zakros, Xerokampos, or the Sitia Geopark trails.\n\nCar hire note: If you are renting in Heraklion and driving to Lasithi, check whether your rental agreement covers the mountain roads to the Lasithi Plateau and the Zakros area — some budget rental agreements exclude unpaved roads.",
        el: "**Αεροπορικώς** — Διεθνές Αεροδρόμιο Ηρακλείου (HER), 70χλμ. δυτικά του Αγίου Νικολάου. Η Σητεία έχει μικρό αεροδρόμιο εσωτερικού.\n\n**Ακτοπλοϊκώς** — Ο Άγιος Νικόλαος και η Σητεία έχουν λιμάνια με συνδέσεις εσωτερικού.\n\n**Με αυτοκίνητο από Ηράκλειο** — Η Ε75 τρέχει ανατολικά. Άγιος Νικόλαος: 1ώ 10λ. Σητεία: περίπου 2 ώρες.\n\n**Με λεωφορείο (KTEL)** — Συχνά δρομολόγια από Ηράκλειο προς Άγιο Νικόλαο και Σητεία."
      }
    },
    {
      layout: "list",
      title: { en: "Practical Tips for Lasithi", el: "Πρακτικές Συμβουλές" },
      text: {
        en: "**Orientation** — Lasithi is a large region. Agios Nikolaos is the natural base for the western area (Elounda, Spinalonga, Voulisma). Sitia is the better base if you are spending time in the far east (Toplou, Vai, Zakros). Two bases — two or three nights each — is a better structure.\n\n**Getting Around** — A car is essential beyond the Agios Nikolaos–Elounda corridor. The KTEL buses serve the main towns but not on schedules useful for day use at beaches or sites.\n\n**Money and Payments** — ATMs in Agios Nikolaos and Sitia. Beyond those towns, carry cash. The village tavernas in Xerokampos and Mochlos almost always operate on cash only.\n\n**Language** — English is spoken in Agios Nikolaos and Elounda. In the far east — Sitia, Zakros, Xerokampos — you are in Greece. A few words of Greek will serve you well.\n\n**Driving Conditions** — The road to Kato Zakros is paved but winding. The road to Xerokampos via Ziros involves a significant descent on a narrow road. The Lasithi Plateau ring road climbs through 20+ hairpin turns. All of it is driveable in a standard car. None of it should be attempted at night without familiarity.\n\n**Spinalonga Tickets** — Entrance to the island is ticketed. In July and August, buy boat and island tickets in the morning for the early crossing. No advance online booking is currently available for the island entrance itself (as of 2025); boat operators sell on the day.",
        el: "**Προσανατολισμός** — Ο Άγιος Νικόλαος είναι η βάση για τη δυτική περιοχή. Η Σητεία για την άπω ανατολή.\n\n**Μετακινήσεις** — Απαραίτητο το αυτοκίνητο.\n\n**Χρήματα** — ΑΤΜ σε Άγιο Νικόλαο και Σητεία. Στα χωριά μόνο μετρητά.\n\n**Γλώσσα** — Αγγλικά στον Άγιο Νικόλαο. Πιο ανατολικά, είστε στην Ελλάδα.\n\n**Οδήγηση** — Ο δρόμος για Κάτω Ζάκρο είναι ασφαλτοστρωμένος αλλά με στροφές.\n\n**Εισιτήρια Σπιναλόγκας** — Η είσοδος στο νησί είναι με εισιτήριο. Αγοράστε το πρωί το καλοκαίρι."
      }
    },
    {
      layout: "grid",
      title: { en: "FAQ — Lasithi Essentials", el: "Συχνές Ερωτήσεις" },
      items: [
        {
          title: { en: "How many days do you need in Lasithi?", el: "Πόσες μέρες χρειάζεστε στο Λασίθι;" },
          text: {
            en: "Four to five days is a reasonable minimum to cover the region properly — Agios Nikolaos, Spinalonga, and Elounda on the north; Ierapetra on the south; and two days in the far east (Sitia, Toplou, Vai, and Zakros). You can do a highlights version in three days if you are based centrally and willing to drive.",
            el: "Τέσσερις με πέντε ημέρες είναι ένα λογικό ελάχιστο. Μια εκδοχή περιλήψεων μπορεί να γίνει σε τρεις ημέρες."
          }
        },
        {
          title: { en: "Is Lasithi or Chania better for a first visit?", el: "Λασίθι ή Χανιά για πρώτη επίσκεψη;" },
          text: {
            en: "Chania is more immediately accessible with better public transport and accommodation options. Lasithi is more rewarding if you have a car and are willing to drive. A split works well: a few days in Chania or Heraklion, then drive east.",
            el: "Τα Χανιά είναι πιο προσιτά. Το Λασίθι είναι πιο ανταποδοτικό για όσους έχουν αυτοκίνητο."
          }
        },
        {
          title: { en: "Is Spinalonga worth visiting?", el: "Αξίζει η Σπιναλόγκα;" },
          text: {
            en: "Yes. One of the few sites in Greece where the 20th century is as present as antiquity. The Venetian fortress is significant on its own terms; the leper colony history gives it a layer that purely ancient sites do not have. Allow two to three hours and do not skip the far end where the colony's church and hospital buildings are located.",
            el: "Ναι. Ένα από τα λίγα μέρη στην Ελλάδα όπου ο 20ός αιώνας είναι τόσο παρών όσο η αρχαιότητα."
          }
        },
        {
          title: { en: "Is Elounda worth it without a luxury hotel?", el: "Αξίζει η Ελούντα χωρίς πολυτελές ξενοδοχείο;" },
          text: {
            en: "The bay is worth it for a day even without a luxury hotel. Drive up from Agios Nikolaos, use the public beach, take a boat to Spinalonga from Plaka, have lunch at the waterfront tavernas. The bay is a public resource.",
            el: "Ο κόλπος αξίζει ακόμα και χωρίς πολυτελές ξενοδοχείο. Οδηγήστε από τον Άγιο Νικόλαο."
          }
        },
        {
          title: { en: "Can you visit Vai in a day trip from Agios Nikolaos?", el: "Μπορείτε να επισκεφθείτε το Βάι σε ημερήσια εκδρομή;" },
          text: {
            en: "Yes, but it is a long day — around 1 hour 30 minutes each way on winding roads. A better structure is to stay in Sitia for two nights and use it as a base for Vai, Toplou, and Zakros.",
            el: "Ναι, αλλά είναι μεγάλη ημέρα. Καλύτερα να μείνετε στη Σητεία για δύο βράδια."
          }
        },
        {
          title: { en: "What is the Lasithi Plateau?", el: "Τι είναι το Οροπέδιο Λασιθίου;" },
          text: {
            en: "A high mountain plateau at around 840 metres altitude, ringed by the Dikti Mountains. Famous for its windmills (mostly decommissioned) and the Psychro Cave — traditionally identified as the birthplace of Zeus. The drive up through the mountain switchbacks is the most scenic part. Combined with the Psychro Cave, it makes a half-day trip from Heraklion.",
            el: "Ένα ορεινό οροπέδιο σε υψόμετρο περίπου 840 μέτρων, διάσημο για το Σπήλαιο Ψυχρού — παραδοσιακά ταυτισμένο ως γενέτειρα του Δία."
          }
        },
        {
          title: { en: "Is Lasithi suitable for families?", el: "Είναι το Λασίθι κατάλληλο για οικογένειες;" },
          text: {
            en: "Very much so, particularly the north coast — Agios Nikolaos, the calm beaches of Elounda bay, Voulisma. The Spinalonga story requires care with younger children, but the site itself is not graphic. The south coast beaches are better for older children who swim confidently. Kouremenos is excellent for older children interested in water sports.",
            el: "Απολύτως, ιδιαίτερα στη βόρεια ακτή. Η Σπιναλόγκα απαιτεί προσοχή με μικρότερα παιδιά."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Lasithi", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στο Λασίθι" },
      text: {
        en: "✕ **Agios Nikolaos harbour restaurants** — The lakeside town is picturesque but the harbour restaurants are overpriced and tourist-oriented. Walk five minutes to the Ammoudi area for better food with fewer crowds.\n\n✕ **Elounda as a base** — Elounda is exclusive and beautiful but also isolated from the rest of Crete. The resorts here are luxury enclaves that keep you away from the island's real character.\n\n✕ **Spinalonga island in peak hours** — The Venetian fortress island is fascinating but the small boats deliver too many people at once. Go on the first departure (09:00) when the light is beautiful and the crowds are thin.\n\n✕ **Skipping the Dikti mountains** — The drive from Agios Nikolaos up to the Lassithi Plateau and the Dikti cave system is a completely different Crete — mountain villages, fruit orchards, and dramatic limestone peaks.\n\n✕ **Only the east coast** — Lasithi has a quieter, more mountainous west side (Ierapetra, Makrygialos) that few visitors discover. The drive from Ierapetra to Makrygialos through the Libyan Sea coastline is one of Crete's hidden gems.\n\n💡 What nobody tells you: The best beach in Lasithi is not in the tourist brochures — it is Vai, the palm forest beach on the east coast, and it is worth visiting not for the beach itself (which can be crowded) but for the short hike to the abandoned monastery above it, where the views are spectacular and the silence is total.",
        el: "✕ **Ταβέρνες λιμαριού Αγ. Νικολάου** — Όμορφη αλλά ακριβή. Αμμούδι 5 λεπτά — καλύτερα.\n\n✕ **Ελούντα ως βάση** — Λουξερική, απομακρυσμένη. Resorts, όχι Κρήτη.\n\n✕ **Σπιναλόγκα στην αιχμή** — Ενδιαφέρον αλλά πολύς κόσμος. Πρώτο πλοίο 09:00.\n\n✕ **Δίκτη βουνά** — Λασίθι Πλατό, σπήλιο Δίκτη — διαφορετική Κρήτη.\n\n✕ **Μόνο ανατολική ακτή** — Δυτική (Ιεράπετρα, Μακρύγιαλο) λιγότερο γνωστή. Drive Λιβυκής Θάλασσας.\n\n💡 Αυτό που δε σου λέει κανείς: Η καλύτερη παραλία δεν είναι στο βιβλίο — είναι η Βάι, το φοινικόδασος. Αλλά η πραγματική αξία είναι το μονοπάτι στο εγκαταλελειμμένο μονάχι πάνω, με θέα και απόλυτη σιωπή."
      }
    }
  ],
  aegina: [
    {
      layout: "list",
      title: { en: "Why Visit Aegina", el: "Γιατί να Επισκεφτείς την Αίγινα" },
      text: {
        en: "**1. It is 40 minutes from Athens — and it does not feel like it**\nNo other destination in Greece offers this particular combination: the proximity of a commuter suburb and the atmosphere of a proper island. You can leave central Athens at 08:30, step off a hydrofoil in Aegina Town harbour at 09:10, walk to the fish market, drink coffee by the waterfront, visit the Temple of Aphaia, and be back in time for dinner in Athens. Or you can stay overnight — in which case the island becomes a different place entirely.\n\n**2. The Temple of Aphaia is one of the most important ancient monuments in Greece — and almost no one queues for it**\nBuilt around 500 BC on a pine-forested hill above the eastern coast, the Temple of Aphaia is a Doric masterpiece that together with the Parthenon in Athens and the Temple of Hephaestus formed what Pausanias described as the \"perfect triangle\" of ancient Greek temples. It receives a fraction of the visitor numbers of the Parthenon. You will very likely have large sections of it entirely to yourself.\n\n**3. Aegina Town is one of the finest neoclassical harbour towns in Greece**\nThe town was rebuilt in the neoclassical style after Greek independence in the 1820s — Aegina was briefly the first capital of the independent Greek state, from 1826 to 1828 — and the architecture of that period gives the harbour front, the streets behind it, and the central squares a coherence and elegance that most Greek island towns do not have.\n\n**4. Perdika is the most charming small fishing harbour in the Saronic Gulf**\nLocated at the southwestern tip of the island, 9 km from Aegina Town, Perdika is a small village of roughly 500 people that clusters around a natural harbour full of fishing boats. From the quay you can take a small boat across to Moni islet — an uninhabited nature reserve with peacocks, deer, and water so clear it looks Photoshopped.\n\n**5. The pistachios are not a marketing claim — they are genuinely extraordinary**\nAegina pistachios (Fistikia Aeginis) hold a European Protected Designation of Origin and are considered the finest variety produced in Greece. The island's volcanic soil, warm dry climate, and a specific local cultivar called Aeginitis combine to produce a nut with a sweeter, more complex flavour than any other variety.\n\n**6. Aegina works beautifully in every season and for every type of traveller**\nThe island is open and alive year-round. Unlike the Cyclades or Dodecanese, Aegina never fully closes: the ferry runs daily, the harbour cafés stay open through winter, and the Temple of Aphaia is accessible regardless of season.",
        el: "**1. Είναι 40 λεπτά από την Αθήνα — και δεν το νιώθεις**\nΚανένας άλλος προορισμός στην Ελλάδα δεν προσφέρει αυτόν τον συνδυασμό: την εγγύτητα ενός προαστίου και την ατμόσφαιρα ενός πραγματικού νησιού.\n\n**2. Ο Ναός της Αφαίας είναι ένα από τα σημαντικότερα αρχαία μνημεία — και σχεδόν κανείς δεν κάνει ουρά**\nΧτισμένος γύρω στο 500 π.Χ., ο δωρικός ναός είναι αριστούργημα και δέχεται ένα κλάσμα των επισκεπτών του Παρθενώνα.\n\n**3. Η πόλη της Αίγινας είναι από τα ωραιότερα νεοκλασικά λιμάνια**\nΗ Αίγινα ήταν για λίγο η πρώτη πρωτεύουσα του ανεξάρτητου ελληνικού κράτους (1826–1828).\n\n**4. Η Πέρδικα είναι το πιο γοητευτικό ψαρολίμανο στον Σαρωνικό**\nΜικρό χωριό 500 κατοίκων με φυσικό λιμάνι γεμάτο ψαροκάικα και βάρκα για τη Μονή.\n\n**5. Τα φιστίκια δεν είναι διαφημιστικό επιχείρημα — είναι πραγματικά εξαιρετικά**\nΠΟΠ, από το ηφαιστειακό έδαφος του νησιού.\n\n**6. Η Αίγινα λειτουργεί όμορφα κάθε εποχή**\nΤο νησί δεν κλείνει ποτέ εντελώς — το πλοίο τρέχει καθημερινά όλο τον χρόνο."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit Aegina", el: "Η Καλύτερη Εποχή για την Αίγινα" },
      text: {
        en: "**May & June — Best Overall**\nThe pistachio trees are in blossom, the sea is warm enough to swim from mid-May, and the island has not yet filled with weekend crowds. The light is clear, the hills are green, and the harbour mornings are as good as they get.\n\n**July & August — Best for Beach**\nThe sea is at its warmest and the beaches are fully organised. Aegina is at its busiest — particularly weekends — but the island handles summer well. Book accommodation on the island rather than day-tripping.\n\n**September & October — Hidden Gem**\nThe pistachio harvest happens in September. The sea remains warm until mid-October. The weekday island is almost entirely locals. October brings cooler evenings, golden light on the hills.\n\n**November – April — City Escape**\nAegina in winter is a proper island: fishing boats in the harbour, older men playing backgammon at the café, fewer tourists than locals. For Athenians wanting a weekend reset without a long journey, the winter ferry to Aegina is one of the simplest pleasures in the Saronic region.\n\n💡 Secret: For photographs of the Temple of Aphaia with no other visitors in the frame, go on a weekday morning in May, early June, or October. Arrive at 08:30 when the site opens. The morning light through the pine trees is exceptional.",
        el: "**Μάιος & Ιούνιος — Καλύτερη Συνολικά**\nΟι φιστικιές ανθίζουν, η θάλασσα ζεσταίνεται από τα μέσα Μαΐου.\n\n**Ιούλιος & Αύγουστος — Καλύτερα για Παραλία**\nΗ θάλασσα στο πιο ζεστό της. Κλείστε διαμονή, μην έρθετε ημερήσια.\n\n**Σεπτέμβριος & Οκτώβριος — Κρυμμένο Διαμάντι**\nΣυγκομιδή φιστικιών τον Σεπτέμβριο. Η θάλασσα ζεστή μέχρι μέσα Οκτωβρίου.\n\n**Νοέμβριος – Απρίλιος — Απόδραση Πόλης**\nΗ Αίγινα τον χειμώνα είναι πραγματικό νησί: ψαροκάικα, τάβλι, λιγότεροι τουρίστες."
      }
    },
    {
      layout: "list",
      title: { en: "How to Get to Aegina", el: "Πώς να Πάτε στην Αίγινα" },
      text: {
        en: "💡 Secret: If you are coming from central Athens, take the Metro to Piraeus (Line 1, green line, terminus station) and walk 10 minutes to the ferry terminal at Gate E8/E9. The whole journey from Syntagma Square to the Aegina Town quayside — Metro plus hydrofoil — takes under 60 minutes and costs under €15 total.\n\n**By hydrofoil (Flying Dolphin) — fastest option**\nThe hydrofoil service (Hellenic Seaways and Aegean Flying Dolphins) departs from Gate E8 at Piraeus and arrives in Aegina Town in approximately 35–40 minutes. Departures run multiple times daily from early morning to late evening. Book in advance on summer weekends.\n\n**By conventional ferry — most economical**\nThe conventional car ferry from Piraeus takes approximately 70 minutes and runs multiple times daily. It is slower but significantly cheaper, accepts vehicles, and has open deck space. The ferry also calls at Souvala port on Aegina's northeast coast.\n\n**Getting around the island**\nAegina Town has a central bus station from which routes serve Agia Marina (for the Temple of Aphaia), Perdika, Marathonas beach, and several villages. Taxis, scooters, and bicycles are available for hire at the port. The famous horse-drawn carriages (amaxes) operate as taxis in Aegina Town itself.\n\n**By car from Athens**\nYou can drive your car onto the conventional ferry from Piraeus. Note that Aegina Town's harbour front is partially pedestrianised, and parking in the town itself can be challenging at peak times. A scooter or bicycle covers it more easily than a car.",
        el: "💡 Συμβουλή: Από το κέντρο της Αθήνας, πάρτε το Μετρό προς Πειραιά (Γραμμή 1) και περπατήστε 10 λεπτά μέχρι την πύλη Ε8/Ε9. Όλο το ταξίδι από την Πλατεία Συντάγματος διαρκεί λιγότερο από 60 λεπτά.\n\n**Με Flying Dolphin — ταχύτερη επιλογή**\n35–40 λεπτά από την Πύλη Ε8 του Πειραιά. Κλείστε θέση τα καλοκαιρινά Σαββατοκύριακα.\n\n**Με συμβατικό πλοίο — οικονομικότερο**\nΠερίπου 70 λεπτά. Δέχεται οχήματα.\n\n**Μετακινήσεις στο νησί**\nΛεωφορεία, ταξί, σκούτερ και ποδήλατα διαθέσιμα στο λιμάνι."
      }
    },
    {
      layout: "numbered",
      title: { en: "Top Attractions in Aegina", el: "Κορυφαία Αξιοθέατα στην Αίγινα" },
      items: [
        {
          title: { en: "Temple of Aphaia", el: "Ναός της Αφαίας" },
          text: {
            en: "Built around 500 BC on a dramatic hilltop surrounded by Aleppo pines in the eastern part of the island, the Temple of Aphaia is dedicated to a local deity associated with Artemis and represents one of the finest surviving examples of the Archaic-transitional Doric order. A standing colonnade of 24 columns with three side walls intact, in a setting of pine trees and island views that is among the most beautiful of any ancient site in Greece. The museum on-site is small but carefully arranged.\n\n💡 Secret: Arrive at 08:30 when the site opens. The morning light through the pine trees falls at an angle that disappears by 10:00. By 10:30 the tour groups from Athens arrive.",
            el: "Χτισμένος γύρω στο 500 π.Χ. σε έναν δραματικό λόφο με πεύκα. Είναι ένα από τα ωραιότερα σωζόμενα παραδείγματα του αρχαϊκού δωρικού ρυθμού. Οι 24 κίονες στέκονται ακόμα.\n\n💡 Μυστικό: Φτάστε στις 08:30 όταν ανοίγει ο χώρος. Το πρωινό φως μέσα από τα πεύκα είναι εξαιρετικό."
          }
        },
        {
          title: { en: "Aegina Town Harbour & Neoclassical Town", el: "Λιμάνι & Νεοκλασική Πόλη" },
          text: {
            en: "The harbour front of Aegina Town is one of the most elegantly proportioned in the Saronic islands. The neoclassical customs house, the 19th-century mansions behind the waterfront, and the distinctive yellow-domed Church of Agios Nikolaos at the end of the pier create a visual composition that feels deliberately designed. The fish market operates every morning behind the harbour — one of the most authentic in the Attica region.\n\nAegina was the first capital of the modern Greek state (1826–1828), the first place in Greece to print a newspaper and to mint coins of the modern Greek state.\n\n💡 Secret: Walk the harbour front twice — once in the morning when the fishing boats are unloading and the fish market is at its best, and once after 21:00 when the restaurant tables take over the quayside and the ferries create a backdrop of movement and light.",
            el: "Το λιμάνι της Αίγινας είναι από τα πιο κομψά στα νησιά του Σαρωνικού. Η ψαραγορά λειτουργεί κάθε πρωί. Η Αίγινα ήταν η πρώτη πρωτεύουσα του ελληνικού κράτους.\n\n💡 Μυστικό: Περπατήστε το λιμάνι δύο φορές — πρωί όταν ξεφορτώνουν τα ψαροκάικα και βράδυ μετά τις 21:00."
          }
        },
        {
          title: { en: "Perdika Village & Moni Islet", el: "Πέρδικα & Νησίδα Μονή" },
          text: {
            en: "The village of Perdika at the island's southern tip is what Aegina Town might have looked like forty years ago: a small harbour of fishing boats, a strip of taverna tables directly above the water, a general store, and a pace of life that does not adjust for visitor schedules. From Perdika's small quay, a five-minute water taxi crosses to Moni — an uninhabited nature reserve islet home to a herd of fallow deer, a colony of peacocks, and water of improbable turquoise clarity.\n\n💡 Secret: The water taxi to Moni is informal — a local fisherman with a small boat. Ask at the quayside. The best swimming on Moni is on the eastern side, reached by a short path from the landing point.",
            el: "Η Πέρδικα είναι ένα μικρό ψαροχώρι με ταβέρνες πάνω στο νερό. Από την προβλήτα, μια πεντάλεπτη βαρκάδα πάει στη Μονή — ένα ακατοίκητο νησάκι με ελάφια και παγώνια.\n\n💡 Μυστικό: Το θαλάσσιο ταξί είναι άτυπο — ένας ψαράς με βάρκα. Ρωτήστε στην προβλήτα."
          }
        },
        {
          title: { en: "Monastery of Agios Nektarios & Palaiochora", el: "Μονή Αγίου Νεκταρίου & Παλαιοχώρα" },
          text: {
            en: "One of the most important Orthodox Christian pilgrimage sites in Greece, the Monastery of Agios Nektarios sits on a forested hillside roughly 6 km from Aegina Town. Nektarios of Aegina (1846–1920) was canonised in 1961 — one of the most recent saints recognised by the Greek Orthodox Church.\n\nAdjacent to the monastery, on the hilltop behind it, are the ruins of Palaiochora — the medieval capital of Aegina, abandoned in the 19th century. 28 surviving Byzantine churches scattered across the hilltop constitute one of the most unusual and atmospheric archaeological walks in the Saronic region.\n\n💡 Secret: The walk from the monastery to Palaiochora takes 20 minutes on a marked path. The best-preserved frescoes are in the Church of the Episkopi.",
            el: "Το Μοναστήρι του Αγίου Νεκταρίου είναι από τα σημαντικότερα προσκυνήματα στην Ελλάδα. Δίπλα του βρίσκονται τα ερείπια της Παλαιοχώρας — της μεσαιωνικής πρωτεύουσας της Αίγινας. 28 βυζαντινές εκκλησίες σώζονται στον λόφο."
          }
        },
        {
          title: { en: "Aegina Archaeological Museum", el: "Αρχαιολογικό Μουσείο Αίγινας" },
          text: {
            en: "One of the oldest archaeological museums in Greece — established in 1829 and housed in a neoclassical building near the harbour. The collection includes pottery from the Early Bronze Age settlement at Kolonna, Mycenaean grave goods, and the surviving elements of the Temple of Aphaia pediment sculptures that were not acquired by Ludwig I of Bavaria in 1812. Small enough to cover in 45 minutes but provides essential context for the Temple of Aphaia.\n\n💡 Secret: Visit the museum before the Temple of Aphaia, not after — understanding the chronology makes the temple visit significantly richer.",
            el: "Ένα από τα παλαιότερα αρχαιολογικά μουσεία στην Ελλάδα (1829). Η συλλογή περιλαμβάνει κεραμική από την Πρώιμη Εποχή του Χαλκού και μυκηναϊκά κτερίσματα.\n\n💡 Μυστικό: Επισκεφθείτε το μουσείο πριν τον Ναό της Αφαίας."
          }
        },
        {
          title: { en: "Column of Apollo & Ancient Aegina (Kolonna)", el: "Στήλη του Απόλλωνα & Αρχαία Αίγινα (Κολόνα)" },
          text: {
            en: "At the northern edge of Aegina Town, a single standing Doric column — all that remains of the Temple of Apollo (c. 480 BC) — rises from the archaeological site of Kolonna. The site represents over 4,000 years of continuous occupation, from the Early Bronze Age through the Classical period.\n\n💡 Secret: The column is best photographed in the late afternoon when the light comes from the west and catches the stone in warm contrast against the blue of the Saronic Gulf behind it.",
            el: "Μία μοναδική δωρική στήλη — ό,τι απέμεινε από τον Ναό του Απόλλωνα — υψώνεται από τον αρχαιολογικό χώρο της Κολόνας.\n\n💡 Μυστικό: Η καλύτερη φωτογραφία το απόγευμα όταν το φως έρχεται από τη δύση."
          }
        },
        {
          title: { en: "Pistachio Farms & the Agricultural Plain", el: "Φιστικιές & ο Αγροτικός Κάμπος" },
          text: {
            en: "The flat plain behind Aegina Town is the heart of the island's pistachio production — roughly 25 square kilometres of orderly rows of Aeginitis pistachio trees, producing around 1,500 tonnes annually. The harvest takes place in September, when families spread large nets under the trees and shake the branches.\n\n💡 Secret: The pistachios sold at the port are predictable. For the best variety and prices, drive 3–4 km into the plain to the co-operative shops near Mesagros village, where you can buy directly from producers and taste before buying.",
            el: "Ο κάμπος πίσω από την πόλη είναι η καρδιά της παραγωγής φιστικιού. Η συγκομιδή γίνεται τον Σεπτέμβριο.\n\n💡 Μυστικό: Για τα καλύτερα φιστίκια, οδηγήστε 3–4 χλμ. μέσα στον κάμπο στα συνεταιριστικά καταστήματα κοντά στο Μεσαγρό."
          }
        }
      ]
    },
    {
      layout: "grid",
      title: { en: "Best Beaches in Aegina", el: "Οι Καλύτερες Παραλίες στην Αίγινα" },
      items: [
        {
          title: { en: "Agia Marina", el: "Αγία Μαρίνα" },
          text: {
            en: "The island's most developed beach resort, 13 km east of Aegina Town on the coast below the Temple of Aphaia. A long sandy bay with sunbeds, beach bars, watersports, and a small village of tavernas behind it. Calm, shallow water good for children.",
            el: "Η πιο ανεπτυγμένη παραλία του νησιού. Μακρύς αμμώδης κόλπος με ξαπλώστρες, beach bar και ήρεμα νερά."
          }
        },
        {
          title: { en: "Kolona Beach (Aegina Town)", el: "Παραλία Κολόνα (Αίγινα)" },
          text: {
            en: "The closest swimming to Aegina Town, immediately north of the harbour beside the Kolonna archaeological site. A narrow sandy strip with calm clear water. Ideal for a morning swim before the ferry or an evening dip after visiting the town.",
            el: "Η κοντινότερη παραλία στην πόλη, δίπλα στον αρχαιολογικό χώρο της Κολόνας. Ιδανική για πρωινό μπάνιο πριν το πλοίο."
          }
        },
        {
          title: { en: "Marathonas", el: "Μαραθώνας" },
          text: {
            en: "4 km south of Aegina Town, a long sandy beach served by local bus. Calmer and more local-feeling than Agia Marina, with sunbed areas and several good tavernas behind it.",
            el: "4 χλμ. νότια της πόλης. Πιο ήσυχη και τοπική από την Αγία Μαρίνα."
          }
        },
        {
          title: { en: "Perdika & Moni Coves", el: "Πέρδικα & Όρμοι Μονής" },
          text: {
            en: "The small beach at Perdika village is pebbly and calm. The real swimming is on Moni islet (5 minutes by water taxi) — crystal clear water, no facilities, and an almost complete absence of other people on weekdays outside July–August.",
            el: "Το πραγματικό μπάνιο στη Μονή (5 λεπτά με θαλάσσιο ταξί) — κρυστάλλινα νερά, σχεδόν έρημη τις καθημερινές."
          }
        },
        {
          title: { en: "Souvala", el: "Σούβαλα" },
          text: {
            en: "A quiet bay on the north coast with a small port, some fishing boats, and a calm pebbly beach. A working village rather than a resort. The conventional ferry from Piraeus also calls here.",
            el: "Ήσυχος κόλπος στη βόρεια ακτή. Εργαζόμενο χωριό, όχι θέρετρο."
          }
        },
        {
          title: { en: "Klima & Portes", el: "Κλήμα & Πόρτες" },
          text: {
            en: "Small coves on the southern coast accessible by scooter via rough roads. Minimal facilities. Exceptionally clear water and almost nonexistent crowds. If you have a scooter, the southern coast offers some of the quietest swimming on the island.",
            el: "Μικροί όρμοι στη νότια ακτή. Ελάχιστες ανέσεις, εξαιρετικά καθαρά νερά."
          }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "What to Eat in Aegina", el: "Τι να Φας στην Αίγινα" },
      text: {
        en: "💡 Food secret: The best fish tavernas in Aegina are not on the main harbour front of Aegina Town — they are in Perdika, 9 km away, where the tables touch the water and the octopus on the line above you was caught that morning.\n\n**Aegina Pistachios (Fistikia Aeginis)** — PDO since 1996. The Aeginitis cultivar produces a nut with a distinctively sweet, rich flavour. Buy from the farm co-operatives in the agricultural plain. They also come in ice cream, loukoumades, cake, and baklava.\n\n**Fresh Fish & Grilled Octopus** — The tavernas in Perdika are the best venue for grilled fish: simple preparations, good olive oil, lemon, and fish that was in the sea this morning.\n\n**Kakavia (Fishermen's Soup)** — A rustic stew of whatever small fish and shellfish the net brought in, cooked with onion, tomato, olive oil, and herbs. Found in the older tavernas in Aegina Town and Perdika.\n\n**Pistachio Ice Cream** — Several ice cream shops in Aegina Town make pistachio gelato from local nuts. The flavour is darker, richer, and less sweet than commercial pistachio ice cream.\n\n**Aegina Honey** — Thyme and pine honey from small apiaries on the slopes of Mount Oros. Dark amber, intensely aromatic.\n\n**What to take home:** Raw pistachios, roasted and salted pistachios, pistachio paste, pistachio-and-honey combinations, local honey, dried herbs. A small jar of Aegina pistachio butter makes an excellent gift.",
        el: "💡 Μυστικό φαγητού: Οι καλύτερες ψαροταβέρνες είναι στην Πέρδικα, όχι στο λιμάνι της Αίγινας.\n\n**Φιστίκια Αιγίνης (Φιστίκια Αιγίνης ΠΟΠ)** — Αγοράστε από τα συνεταιριστικά καταστήματα στον κάμπο.\n\n**Φρέσκο Ψάρι & Χταπόδι** — Οι ταβέρνες στην Πέρδικα είναι η καλύτερη επιλογή.\n\n**Κακαβιά** — Παραδοσιακή ψαρόσουπα.\n\n**Παγωτό Φιστίκι** — Από ντόπια φιστίκια, πιο πλούσια γεύση.\n\n**Μέλι Αίγινας** — Θυμάρι και πεύκο από τον Όρος.\n\n**Τι να πάρετε μαζί σας:** Φιστίκια όλων των ειδών, μέλι, βότανα."
      }
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Aegina", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      text: {
        en: "✕ **Coming on a Saturday afternoon in July or August without a return ticket booked** — The Sunday evening ferries back to Piraeus fill completely with Athenians returning from the weekend. Book the return trip at the same time as the outward journey, particularly for summer weekends.\n\n✕ **Eating at the first row of tavernas on the harbour front without checking prices** — Several are priced for day-trippers. The fish market neighbourhood behind the port has better tavernas at better prices. Perdika has the best seafood on the island.\n\n✕ **Visiting Palaiochora without time to slow down** — Allow at least 90 minutes to walk among the scattered churches, look for frescoes, and sit for a moment with a view over the island. Combine it with the Agios Nektarios monastery.\n\n✕ **Buying pistachios only from the port stalls** — The co-operative shops 3–4 km into the agricultural plain offer better variety, lower prices per kilo, and the possibility of tasting before buying.\n\n✕ **Treating Aegina as a day trip only** — The island that overnight guests experience is different: the evening quiet after the last day boat leaves, the Temple of Aphaia at dawn, and the morning fish market at full operation. One night changes the quality of the trip disproportionately.\n\n💡 What nobody tells you: Aegina was not only the first capital of the modern Greek state — it was where the first modern Greek coins were minted, where the first Greek newspaper was printed, and where Governor Kapodistrias established the first Greek school and the first orphanage.",
        el: "✕ **Να έρθετε Σάββατο απόγευμα Ιούλιο ή Αύγουστο χωρίς εισιτήριο επιστροφής** — Τα κυριακάτικα βραδινά πλοία γεμίζουν. Κλείστε εισιτήριο επιστροφής μαζί με το μετάβασης.\n\n✕ **Φαγητό στην πρώτη σειρά ταβερνών του λιμανιού** — Αρκετές τιμολογούν για ημερήσιους επισκέπτες. Η γειτονιά της ψαραγοράς έχει καλύτερες επιλογές.\n\n✕ **Επίσκεψη Παλαιοχώρας χωρίς χρόνο** — Αφήστε τουλάχιστον 90 λεπτά.\n\n✕ **Αγορά φιστικιών μόνο από τα περίπτερα του λιμανιού** — Ο συνεταιρισμός 3–4 χλμ. μέσα στον κάμπο έχει καλύτερες τιμές.\n\n✕ **Να δείτε την Αίγινα μόνο ως ημερήσια εκδρομή** — Μία διανυκτέρευση αλλάζει δυσανάλογα την ποιότητα του ταξιδιού."
      }
    },
    {
      layout: "grid",
      title: { en: "FAQ — Aegina Essentials", el: "Συχνές Ερωτήσεις" },
      items: [
        {
          title: { en: "Is Aegina worth visiting as a day trip from Athens?", el: "Αξίζει η Αίγινα ως ημερήσια εκδρομή από Αθήνα;" },
          text: {
            en: "Yes — but it is a better trip if you stay overnight. As a day trip, you have time for the harbour, one or two sites, lunch, and a swim. Overnight, the island changes completely after the last day boats leave.",
            el: "Ναι — αλλά καλύτερα με διανυκτέρευση. Το νησί αλλάζει τελείως όταν φύγουν τα τελευταία ημερήσια πλοία."
          }
        },
        {
          title: { en: "How long does the ferry from Piraeus take?", el: "Πόσο διαρκεί το πλοίο από Πειραιά;" },
          text: {
            en: "Hydrofoil: 35–40 minutes. Conventional ferry: approximately 70 minutes. Both from Gate E8/E9 at Piraeus. Multiple departures daily year-round.",
            el: "Flying Dolphin: 35–40 λεπτά. Συμβατικό πλοίο: περίπου 70 λεπτά."
          }
        },
        {
          title: { en: "How many days do you need in Aegina?", el: "Πόσες μέρες χρειάζεστε στην Αίγινα;" },
          text: {
            en: "One overnight covers the main sites comfortably. Two nights allows a more relaxed pace. Three nights works well combined with Hydra and Poros.",
            el: "Μία διανυκτέρευση καλύπτει τα βασικά. Δύο για πιο χαλαρό ρυθμό."
          }
        },
        {
          title: { en: "What is Aegina known for?", el: "Για τι είναι γνωστή η Αίγινα;" },
          text: {
            en: "The Temple of Aphaia, its PDO pistachios, its role as the first capital of the modern Greek state, Perdika village, and being the most accessible island day trip from Athens.",
            el: "Τον Ναό της Αφαίας, τα φιστίκια ΠΟΠ, την πρώτη πρωτεύουσα του ελληνικού κράτους, την Πέρδικα."
          }
        },
        {
          title: { en: "Do you need a car in Aegina?", el: "Χρειάζεστε αυτοκίνητο στην Αίγινα;" },
          text: {
            en: "Not necessarily. The local bus covers the main areas. A scooter or bicycle rented at the port is the most flexible option for independent exploration.",
            el: "Όχι απαραίτητα. Λεωφορείο, σκούτερ ή ποδήλατο καλύπτουν τις ανάγκες."
          }
        },
        {
          title: { en: "Can you visit Aegina year-round?", el: "Μπορείτε να επισκεφθείτε την Αίγινα όλο τον χρόνο;" },
          text: {
            en: "Yes — one of the very few Greek islands that functions properly year-round. The ferry runs daily. The town has cafés and restaurants open throughout winter.",
            el: "Ναι — από τα λίγα νησιά που λειτουργούν κανονικά όλο τον χρόνο."
          }
        },
        {
          title: { en: "Best time to visit for the pistachio harvest?", el: "Καλύτερη εποχή για τη συγκομιδή φιστικιού;" },
          text: {
            en: "September. The harvest takes place from early to mid-September. Fresh-harvest pistachios have a flavour that the packaged version does not replicate.",
            el: "Σεπτέμβριος. Τα φρέσκα φιστίκια έχουν γεύση που δεν αναπαράγει η συσκευασμένη έκδοση."
          }
        }
      ]
    }
  ],
  tinos: [
    {
      layout: "list",
      title: { en: "Why Visit Tinos", el: "Γιατί να Επισκεφτείς την Τήνο" },
      text: {
        en: "**1. The Panagia Evangelistria is the most important religious site in modern Greece**\nThe Church of the Annunciation holds the sacred icon of the Virgin Mary, discovered in 1823 following a vision reported by Nun Pelagia. It draws over a million visitors a year — believers, curious travellers and historians alike. The atmosphere on the 15th of August is unlike anything else in the Aegean.\n\n**2. Pyrgos is the marble-carving capital of Greece**\nPyrgos in the north has been producing marble sculptors for centuries. The Museum of Marble Crafts is one of the best-designed museums in Greece, and the family workshops allow you to watch the craft at close hand.\n\n**3. The Venetian dovecotes are unique to Tinos**\nOver a thousand ornate stone dovecotes are scattered across the hillsides — narrow towers with geometric decorative patterns. The finest concentrations are around Tarampados and Ktikados.\n\n**4. Volax is one of the most surreal landscapes in the Greek islands**\nThe village sits at the centre of a natural amphitheatre filled with enormous rounded granite boulders — the landscape feels otherworldly.\n\n**5. The food culture is the finest in the Cyclades**\nTinos produces exceptional local ingredients: giant artichokes, graviera cheese, cured sausages, loukoumades. The restaurant scene is serious without being pretentious.\n\n**6. Fifty-plus villages reward exploration**\nTinos has more inhabited villages than most other Cycladic islands combined. Hiring a car and driving from village to village is one of the finest things you can do in the Cyclades.",
        el: "**1. Η Παναγία Ευαγγελίστρια είναι το σημαντικότερο θρησκευτικό προσκύνημα**\nΗ εικόνα ανακαλύφθηκε το 1823 και προσελκύει πάνω από ένα εκατομμύριο επισκέπτες ετησίως.\n\n**2. Ο Πύργος είναι η πρωτεύουσα του μαρμάρου**\nΤο Μουσείο Μαρμάρου και τα οικογενειακά εργαστήρια είναι μοναδικά.\n\n**3. Οι περιστερώνες είναι μοναδικοί στην Τήνο**\nΠάνω από χίλιοι πετρόκτιστοι περιστερώνες στους λόφους.\n\n**4. Ο Βώλακας είναι το πιο εξωπραγματικό τοπίο**\nΓιγάντιοι γρανιτένιοι ογκόλιθοι δημιουργούν ένα σουρεαλιστικό σκηνικό.\n\n**5. Η καλύτερη γαστρονομία στις Κυκλάδες**\nΑγκινάρες, γραβιέρα, σύγλινο, λουκουμάδες — η Τήνος είναι παράδεισος για τους λάτρεις του φαγητού.\n\n**6. Πάνω από πενήντα χωριά**\nΗ Τήνος έχει περισσότερα κατοικημένα χωριά από κάθε άλλη Κυκλάδα."
      }
    },
    {
      layout: "list",
      title: { en: "Best Time to Visit Tinos", el: "Η Καλύτερη Εποχή για την Τήνο" },
      text: {
        en: "**April – May — Green, uncrowded, ideal for village exploration**\nThe island is green and the weather is mild. Easter on Tinos, with both Catholic and Orthodox populations celebrating, is a particularly special time.\n\n**June — Perfect balance**\nWarm enough for beach days, uncrowded, everything open. One of the best months in the entire Cyclades calendar.\n\n**July – August — Peak season and lively**\nThe 15th of August is extraordinary to witness but extremely crowded — plan far in advance. The beaches are busy but the island absorbs summer visitors well.\n\n**September — Arguably the finest month**\nThe sea is at its warmest, crowds thin after mid-month, and the light over the dovecotes and marble villages is exceptional.\n\n**October – November — Quiet, authentic**\nExcellent for cultural visits and food exploration. The countryside and marble workshops are at their most atmospheric.\n\n**Winter — A living island year-round**\nTinos is one of the few Cycladic islands worth visiting in winter for a quiet, genuinely Greek experience.",
        el: "**Απρίλιος – Μάιος — Πράσινο, ήσυχο, ιδανικό για εξερεύνηση χωριών**\nΤο Πάσχα στην Τήνο είναι μοναδικό.\n\n**Ιούνιος — Τέλεια ισορροπία**\nΖεστός, ήσυχος, όλα ανοιχτά.\n\n**Ιούλιος – Αύγουστος — Αιχμή**\nΗ 15η Αυγούστου είναι απίστευτη εμπειρία.\n\n**Σεπτέμβριος — Ο καλύτερος μήνας**\nΗ θάλασσα ζεστή, λιγότερος κόσμος.\n\n**Οκτώβριος – Νοέμβριος — Ήσυχα, αυθεντικά**\nΙδανικά για πολιτισμό και γαστρονομία.\n\n**Χειμώνας — Ζωντανό νησί όλο τον χρόνο**\nΑπό τις λίγες Κυκλάδες που αξίζουν τον χειμώνα."
      }
    },
    {
      layout: "list",
      title: { en: "How to Get to Tinos", el: "Πώς να Πάτε στην Τήνο" },
      text: {
        en: "**By ferry from Piraeus** — 4–5 hours on conventional ferries, 2.5–3 hours on high-speed catamarans.\n\n**By ferry from Rafina** — From the port closer to Athens airport, about 2.5 hours on high-speed services.\n\n**From Mykonos** — 25 minutes by high-speed ferry. The contrast between the two islands is part of the experience.\n\n**From Syros** — 35 minutes. Combine Tinos and Syros for the most culturally rich Cyclades trip.\n\n💡 Secret: Tinos is an excellent base for island hopping — Mykonos, Syros, Delos and Naxos are all within easy reach.\n\n**Getting around** — A car is essential for exploring the interior. Rental cars are available at the port. Book in advance for July and August.",
        el: "**Από Πειραιά** — 4–5 ώρες με συμβατικό, 2.5–3 ώρες με ταχύπλοο.\n\n**Από Ραφήνα** — Περίπου 2.5 ώρες.\n\n**Από Μύκονο** — 25 λεπτά.\n\n**Από Σύρο** — 35 λεπτά.\n\n💡 Συμβουλή: Η Τήνος είναι εξαιρετική βάση για island hopping.\n\n**Μετακινήσεις** — Απαραίτητο το αυτοκίνητο για το εσωτερικό του νησιού."
      }
    },
    {
      layout: "numbered",
      title: { en: "Top Attractions in Tinos", el: "Κορυφαία Αξιοθέατα στην Τήνο" },
      items: [
        {
          title: { en: "Church of Panagia Evangelistria (Our Lady of Tinos)", el: "Παναγία Ευαγγελίστρια" },
          text: {
            en: "The most important religious site in modern Greece. The church stands at the top of the long marble-paved Leoforos Megalocharis that rises from the port. Built in gleaming white marble in the early 19th century, it holds the sacred icon of the Virgin Mary in an elaborately decorated silver frame. The underground chapel marks the exact site where the icon was discovered in 1823. The ex-voto collection — offerings of gold, silver and jewellery left by the faithful over two centuries — is one of the most remarkable collections of popular religious art in Greece.\n\n💡 Secret: Remove your shoes before entering the inner sanctuary. The atmosphere inside is one of profound silence and devotion regardless of your beliefs. Visit on a weekday morning in June or September for a quiet experience.",
            el: "Το σημαντικότερο θρησκευτικό προσκύνημα της Ελλάδας. Η εκκλησία χτίστηκε από λευκό μάρμαρο τον 19ο αιώνα. Φιλοξενεί την ιερή εικόνα της Παναγίας. Η συλλογή τάματων είναι μοναδική.\n\n💡 Μυστικό: Βγάλτε τα παπούτσια σας πριν μπείτε στο ιερό."
          }
        },
        {
          title: { en: "Pyrgos — Marble Village & Museum of Marble Crafts", el: "Πύργος — Μαρμάρινο Χωριό & Μουσείο Μαρμάρου" },
          text: {
            en: "Pyrgos is a village of exceptional quality — built almost entirely in marble. The Museum of Marble Crafts is one of the most thoughtfully designed museums in Greece, telling the story of Tinian marble from quarry to finished work. The Yannoulis Chalepas Museum celebrates the island's most celebrated sculptor. Family workshops sell original work at prices that bear no relation to the quality.\n\n💡 Secret: The cemetery above the village is not morbid — it is a gallery of extraordinary marble sculpture. Allow 30 minutes here.",
            el: "Ο Πύργος είναι χτισμένος σχεδόν εξολοκλήρου σε μάρμαρο. Το Μουσείο Μαρμάρου είναι από τα ωραιότερα μουσεία στην Ελλάδα.\n\n💡 Μυστικό: Το νεκροταφείο πάνω από το χωριό είναι γκαλερί μαρμάρινων γλυπτών."
          }
        },
        {
          title: { en: "Volax — The Boulder Village", el: "Βώλακας — Το Χωριό των Ογκόλιθων" },
          text: {
            en: "Volax sits at the centre of a natural amphitheatre filled with enormous rounded granite boulders — geological formations deposited by ancient volcanic activity. The village is inhabited year-round and its tiny amphitheatre hosts summer cultural events. The landscape feels otherworldly, unlike anything else in the Cyclades.\n\n💡 Secret: Take the path behind the village to walk among the boulders — it takes 20 minutes and requires no special equipment.",
            el: "Ο Βώλακας περιβάλλεται από γιγάντιους γρανιτένιους ογκόλιθους. Το τοπίο είναι εξωπραγματικό.\n\n💡 Μυστικό: Περπατήστε ανάμεσα στους ογκόλιθους πίσω από το χωριό."
          }
        },
        {
          title: { en: "Xombourgo — The Medieval Fortress", el: "Εξωμπούργκο — Το Μεσαιωνικό Κάστρο" },
          text: {
            en: "The dramatic granite rock of Xombourgo rises to 640 metres and was the site of the island's Venetian capital. The ruins of fortress walls, Catholic churches and Orthodox chapels cover the summit. The walk up from Komi takes about 40 minutes.\n\n💡 Secret: Go in the morning when the air is clear. The views of Mykonos, Syros and Delos from the top are among the finest in the Cyclades.",
            el: "Ο βράχος του Εξωμπούργκου ήταν η ενετική πρωτεύουσα. Η θέα από την κορυφή είναι μοναδική.\n\n💡 Μυστικό: Πηγαίνετε το πρωί με καθαρό αέρα."
          }
        },
        {
          title: { en: "The Dovecote Villages — Tarampados, Ktikados", el: "Οι Περιστερώνες — Ταράμπαδος, Κτικάδος" },
          text: {
            en: "The central plateau has the highest concentration of the island's famous dovecotes — narrow stone towers with intricate geometric decorative panels. The landscape of terraced hillsides, dovecotes, small stone chapels and ancient walls is unlike anywhere else in the Greek islands.\n\n💡 Secret: The drive through the central plateau at dusk, with dovecotes against the fading light, is unforgettable.",
            el: "Το κεντρικό οροπέδιο έχει τους περισσότερους περιστερώνες. Η οδήγηση στο ηλιοβασίλεμα είναι αξέχαστη."
          }
        },
        {
          title: { en: "Kardiani & the Catholic North Villages", el: "Καρδιανή & τα Καθολικά Χωριά" },
          text: {
            en: "The northern part of Tinos has a distinct character shaped by Catholic heritage. Kardiani, perched on a steep hillside above the north coast with views over Syros, is considered by many to be the most beautiful village on the island.\n\n💡 Secret: Kardiani has one of the best traditional tavernas on the island — arrive at lunchtime and ask what is cooking.",
            el: "Το βόρειο τμήμα της Τήνου έχει καθολική κληρονομιά. Η Καρδιανή θεωρείται το ωραιότερο χωριό του νησιού.\n\n💡 Μυστικό: Η Καρδιανή έχει μία από τις καλύτερες ταβέρνες."
          }
        },
        {
          title: { en: "Tinos Town & the Marble Ramp", el: "Τήνος & ο Μαρμάρινος Δρόμος" },
          text: {
            en: "Tinos Town has a pleasant, unhurried waterfront with good seafood restaurants and cafés. The long marble-paved Leoforos Megalocharis rises from the port to the church. On the 15th of August, pilgrims crawl the entire length on their knees.\n\n💡 Secret: The best loukoumades on the island are served at a small traditional stall just off the main street — locals queue from mid-morning.",
            el: "Η πόλη της Τήνου έχει όμορφο λιμάνι και την οδό Μεγαλόχαρης.\n\n💡 Μυστικό: Οι καλύτεροι λουκουμάδες στο νησί σερβίρονται σε ένα μικρό παραδοσιακό μαγαζάκι."
          }
        }
      ]
    },
    {
      layout: "grid",
      title: { en: "Best Beaches in Tinos", el: "Οι Καλύτερες Παραλίες στην Τήνο" },
      items: [
        {
          title: { en: "Kolymbithra", el: "Κολυμπήθρα" },
          text: { en: "A double-coved beach on the north coast with extraordinarily clear turquoise water and dramatic rock formations. The larger cove has a taverna and sunbeds; the smaller is wilder and quieter. One of the finest beaches in the Cyclades.", el: "Διπλός όρμος στη βόρεια ακτή με κρυστάλλινα νερά. Από τις ωραιότερες παραλίες στις Κυκλάδες." }
        },
        {
          title: { en: "Porto", el: "Πόρτο" },
          text: { en: "A long sandy beach on the east coast with shallow, calm water and good facilities. The most family-friendly beach on the island with several tavernas nearby.", el: "Μεγάλη αμμώδης παραλία στην ανατολική ακτή, ιδανική για οικογένειες." }
        },
        {
          title: { en: "Agios Fokas", el: "Άγιος Φωκάς" },
          text: { en: "The closest beach to Tinos Town — long stretch of sand and pebble, partially organised with sunbeds and clear calm water. Good for a half-day from the port without needing a car.", el: "Η κοντινότερη παραλία στην πόλη, με ξαπλώστρες και ήρεμα νερά." }
        },
        {
          title: { en: "Livada", el: "Λιβάδα" },
          text: { en: "A small, quiet cove near Panormos on the northwest coast. Deep translucent blue water, rarely crowded. One of the most beautiful and least visited swimming spots.", el: "Μικρός ήσυχος όρμος, σπάνια πολυσύχναστος. Από τα ωραιότερα σημεία για μπάνιο." }
        },
        {
          title: { en: "Agios Romanos", el: "Άγιος Ρωμανός" },
          text: { en: "Broad sandy beach on the south coast with reliable summer winds and a windsurfing school. Less scenic than Kolymbithra but consistently good for board sports.", el: "Αμμώδης παραλία στη νότια ακτή, ιδανική για windsurfing." }
        },
        {
          title: { en: "Pachia Ammos", el: "Παχιά Άμμος" },
          text: { en: "Isolated sandy cove on the northwest coast reached by a narrow unpaved track. Fine soft sand and water of exceptional clarity. No facilities — bring everything you need.", el: "Απομονωμένη παραλία στη βορειοδυτική ακτή. Φέρτε όλα όσα χρειάζεστε." }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Food in Tinos — What to Eat", el: "Φαγητό στην Τήνο — Τι να Φας" },
      text: {
        en: "💡 Food secret: The Saturday morning farmers' market in Tinos Town is the best opportunity to buy local products directly from producers.\n\n**Tinian Artichokes** — PDO product, considered the finest in Greece. Smaller, denser and more intensely flavoured than the mainland variety.\n\n**Loukoumades** — Tinos is famous throughout Greece for its light, crisp honey-drenched doughnuts. A well-known stall in Tinos Town has been serving them for generations.\n\n**Graviera & Fresh Cheese** — Excellent hard cheese aged in caves, and fresh soft white cheese used in savoury pies.\n\n**Syglino** — Cured pork preserved with orange peel, spices and herbs. Smoky, aromatic and deeply flavoured.\n\n**Fresh Aegean Seafood** — Grilled octopus, red mullet, sea bream and sea bass from the island's fishing fleet.\n\n**Thyme Honey & Capers** — Aromatic honey and briny capers make perfect edible souvenirs.",
        el: "💡 Μυστικό φαγητού: Η λαϊκή αγορά του Σαββάτου στην πόλη είναι η καλύτερη ευκαιρία για τοπικά προϊόντα.\n\n**Αγκινάρες Τήνου** — ΠΟΠ, οι καλύτερες στην Ελλάδα.\n\n**Λουκουμάδες** — Η Τήνος φημίζεται για τους ελαφριούς λουκουμάδες της.\n\n**Γραβιέρα & Φρέσκο Τυρί** — Εξαιρετικό τυρί ωρίμανσης.\n\n**Σύγλινο** — Χοιρινό παστό με πορτοκάλι και μπαχαρικά.\n\n**Φρέσκο Θαλασσινό** — Χταπόδι, μπαρμπούνι, τσιπούρα.\n\n**Μέλι & Κάππαρη** — Ιδανικά αναμνηστικά."
      }
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Tinos", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις" },
      text: {
        en: "✕ **Expecting Tinos to perform for you** — The island is not optimised for the tourist gaze. Approach it as a guest, not as an audience.\n\n✕ **Treating the church as only a photo opportunity** — The atmosphere inside demands respectful attention.\n\n✕ **Spending your entire time on the coast** — The interior is what makes Tinos unlike anywhere else. Rent a car for at least one full day.\n\n✕ **Visiting Pyrgos without allocating real time** — The Museum of Marble Crafts alone deserves 90 minutes.\n\n✕ **Skipping Volax** — The boulder landscape is one of the most surreal sights in the Cyclades.\n\n💡 What nobody tells you: Tinos rewards curiosity. The more you explore, the more it gives back. The island has never been colonised by mass international tourism, and in 2026 it is still largely what the Cyclades were fifty years ago: honest, serious and deeply rewarding for anyone who pays attention.",
        el: "✕ **Να περιμένεις η Τήνος να σε διασκεδάσει** — Προσέγγισέ το ως φιλοξενούμενος.\n\n✕ **Να βλέπεις την εκκλησία μόνο ως φωτογραφία** — Η ατμόσφαιρα απαιτεί σεβασμό.\n\n✕ **Να μένεις μόνο στην ακτή** — Το εσωτερικό είναι μοναδικό. Νοίκιασε αυτοκίνητο.\n\n✕ **Να επισκέπτεσαι τον Πύργο βιαστικά** — Το Μουσείο Μαρμάρου αξίζει 90 λεπτά.\n\n✕ **Να παραλείπεις τον Βώλακα** — Ένα από τα πιο σουρεαλιστικά τοπία στις Κυκλάδες.\n\n💡 Αυτό που δε σου λέει κανείς: Η Τήνος ανταμείβει την περιέργεια. Το 2026 είναι ακόμα όπως ήταν οι Κυκλάδες πριν πενήντα χρόνια."
      }
    },
    {
      layout: "grid",
      title: { en: "FAQ — Tinos Essentials", el: "Συχνές Ερωτήσεις" },
      items: [
        {
          title: { en: "How do I get from Tinos to Mykonos or Delos?", el: "Πώς πάω από Τήνο σε Μύκονο ή Δήλο;" },
          text: { en: "High-speed ferries connect Tinos to Mykonos in approximately 25 minutes. From Mykonos, excursion boats run to Delos daily. Tinos is an excellent base for a Delos day trip combined with a Mykonos evening.", el: "Ταχύπλοα συνδέουν Τήνο-Μύκονο σε 25 λεπτά. Η Τήνος είναι εξαιρετική βάση για Δήλο." }
        },
        {
          title: { en: "What is the Museum of Marble Crafts?", el: "Τι είναι το Μουσείο Μαρμάρου;" },
          text: { en: "One of the finest museums in the Greek islands — housed in a beautifully restored factory building, telling the full story of Tinian marble. Original machinery, working demonstrations and finished works. Allow 90 minutes minimum.", el: "Από τα ωραιότερα μουσεία στις Κυκλάδες. Αφήστε 90 λεπτά τουλάχιστον." }
        },
        {
          title: { en: "What are the dovecotes and why are they unique?", el: "Τι είναι οι περιστερώνες και γιατί είναι μοναδικοί;" },
          text: { en: "Ornate stone towers built during the Venetian period to house domestic pigeons. The extraordinary decorative elaboration of their facades — intricate geometric patterns — is unique to Tinos. Over a thousand survive as protected architectural heritage.", el: "Πετρόκτιστοι πύργοι της ενετικής περιόδου. Πάνω από χίλιοι σώζονται ως προστατευόμενη κληρονομιά." }
        },
        {
          title: { en: "Is Tinos good in winter?", el: "Είναι καλή η Τήνος τον χειμώνα;" },
          text: { en: "Better than almost any other Cycladic island. Tinos has a genuine year-round population. Tavernas, cafés, food shops and the church all operate. The marble workshops in Pyrgos are active year-round. A winter weekend offers cultural richness that summer-only islands cannot match.", el: "Καλύτερη από κάθε άλλη Κυκλάδα τον χειμώνα. Η Τήνος έχει μόνιμο πληθυσμό και λειτουργεί όλο τον χρόνο." }
        },
        {
          title: { en: "How does Tinos compare to Syros?", el: "Πώς συγκρίνεται η Τήνος με τη Σύρο;" },
          text: { en: "They complement each other perfectly. Syros is urban — a neoclassical city with an opera house. Tinos is rural — villages, marble, dovecotes and pilgrimage. Both have exceptional food cultures. The 35-minute ferry connection makes combining them easy.", el: "Η Σύρος είναι αστική, η Τήνος αγροτική. Και οι δύο έχουν εξαιρετική γαστρονομία. 35 λεπτά με πλοίο." }
        },
        {
          title: { en: "How many days do I need in Tinos?", el: "Πόσες μέρες χρειάζομαι στην Τήνο;" },
          text: { en: "Three days is the minimum for the church, Pyrgos, Volax and a beach. Five days allows you to explore the interior villages, visit the north coast, eat well and slow down. Tinos rewards extended stays more than almost any other Cycladic island.", el: "Τρεις μέρες ελάχιστα, πέντε για να εξερευνήσετε σωστά. Η Τήνος ανταμείβει τις μεγαλύτερες διαμονές." }
        }
      ]
    }
  ],
  hydra: [
    {
      title: {
        en: "Why visit Hydra",
        el: "Γιατί να επισκεφθείς την Ύδρα",
      },
      layout: "numbered",
      items: [
        {
          title: {
            en: "The only car-free island in the Aegean — and what that actually feels like",
            el: "Το μόνο νησί χωρίς αυτοκίνητα στο Αιγαίο — και πώς είναι στην πραγματικότητα",
          },
          text: {
            en: "The absence of cars is not a quirky tourism gimmick. It is a physical transformation of what a place feels and sounds like. On Hydra, the ambient noise of the port is the clip of donkey hooves on stone, the slap of water against the hulls of boats, and conversation. There is no traffic light anywhere on the island, no petrol station, no car park. The effect is cumulative and takes about an hour to feel properly: a particular kind of ease that has no equivalent elsewhere in Greece. The island's silence — especially in the upper lanes after dark — is the most complete available within 90 minutes of Athens.",
            el: "Η απουσία αυτοκινήτων δεν είναι τουριστικό τρικ. Είναι μια φυσική μεταμόρφωση του πώς αισθάνεται και ακούγεται ένα μέρος. Στην Ύδρα, ο θόρυβος του λιμανιού είναι ο ήχος από τα πέταλα των γαϊδουριών στην πέτρα, το νερό στις βάρκες και η ανθρώπινη συνομιλία. Δεν υπάρχει φανάρι, βενζινάδικο ή πάρκινγκ. Το αποτέλεσμα είναι μια ιδιαίτερη ευκολία που δεν έχει αντίστοιχο στην Ελλάδα. Η σιωπή του νησιού — ειδικά στα πάνω σοκάκια μετά το σκοτάδι — είναι η πιο πλήρης που μπορείς να βρεις σε 90 λεπτά από την Αθήνα.",
          },
        },
        {
          title: {
            en: "18th-century stone architecture preserved without compromise",
            el: "Πέτρινη αρχιτεκτονική του 18ου αιώνα διατηρημένη χωρίς συμβιβασμούς",
          },
          text: {
            en: "During Hydra's maritime golden age — roughly 1750 to 1820 — the island's merchant fleet numbered over 150 ships and its captains built mansions in proportion to their wealth. The Lazaros Kountouriotis Mansion, the Tombazis Mansion, the Voulgaris Mansion — these are not restored heritage sites but lived-in, functioning buildings whose facades have changed almost nothing in 250 years. The island's entire architectural fabric is protected by law: no new buildings can be constructed, no facades altered. Walking the lanes above the port is the closest thing in Greece to a functioning time machine for the 18th century.",
            el: "Κατά τη ναυτική χρυσή εποχή της Ύδρας — περίπου 1750 έως 1820 — ο εμπορικός στόλος του νησιού αριθμούσε πάνω από 150 πλοία και οι καπετάνιοι έχτιζαν αρχοντικά ανάλογα με τον πλούτο τους. Το Αρχοντικό Λάζαρου Κουντουριώτη, το Αρχοντικό Τομπάζη, το Αρχοντικό Βούλγαρη — δεν είναι απλώς αναστηλωμένα μνημεία, αλλά κατοικημένα κτίρια των οποίων οι προσόψεις δεν έχουν αλλάξει σχεδόν καθόλου εδώ και 250 χρόνια. Το αρχιτεκτονικό ύφος του νησιού προστατεύεται από τον νόμο.",
          },
        },
        {
          title: {
            en: "A genuine international art scene, not a curated tourist version of one",
            el: "Μια αυθεντική διεθνής καλλιτεχνική σκηνή",
          },
          text: {
            en: "The Hydra Workshop, founded by painter Nikos Hadjikyriakos-Ghikas, established the island as an art colony in the mid-20th century. The Deste Foundation's Slaughterhouse — a converted 19th-century abattoir on the waterfront that hosts some of the finest contemporary art exhibitions in the Mediterranean — continues that tradition today. Beyond the institutions, a walk through Hydra's lanes passes a density of working artists' studios, independent galleries and private exhibition spaces that is extraordinary for an island of 2,000 permanent residents. This is not art-for-tourists. It is a functioning creative community.",
            el: "Το Εργαστήριο της Ύδρας, που ιδρύθηκε από τον ζωγράφο Νίκο Χατζηκυριάκο-Γκίκα, καθιέρωσε το νησί ως καλλιτεχνική αποικία στα μέσα του 20ού αιώνα. Το Σφαγείο του Ιδρύματος ΔΕΣΤΕ — ένας μετασκευασμένος σφαγείο του 19ου αιώνα στην προκυμαία — συνεχίζει αυτή την παράδοση σήμερα, φιλοξενώντας κορυφαίες εκθέσεις σύγχρονης τέχνης. Πέρα από τους θεσμούς, μια βόλτα στα σοκάκια της Ύδρας περνά από πυκνότητα εργαστηρίων καλλιτεχνών, γκαλερί και ιδιωτικών εκθεσιακών χώρων, κάτι εξαιρετικό για ένα νησί 2.000 μόνιμων κατοίκων.",
          },
        },
        {
          title: {
            en: "Leonard Cohen's island — and why it still matters",
            el: "Το νησί του Leonard Cohen — και γιατί έχει ακόμα σημασία",
          },
          text: {
            en: "In 1960, Leonard Cohen was a broke Canadian poet who bought a house on Hydra for $1,500, moved in with his Norwegian muse Marianne Ihlen, and wrote his first novel and some of his earliest songs sitting on the terrace. The island gave him the silence and the light and the community of fellow writers and painters that produced some of the most enduring creative work of the century. His house on Kountouriotou Street can be seen from the lane (it is privately owned and not open to visitors), and the island's connection to his memory remains genuine and unforced — a quality Hydra has always had, of making artists feel that the work is possible here in a way it is not elsewhere.",
            el: "Το 1960, ο Leonard Cohen ήταν ένας άφραγκος Καναδός ποιητής που αγόρασε σπίτι στην Ύδρα για 1.500 δολάρια, μετακόμισε με τη Νορβηγίδα μούσα του Marianne Ihlen και έγραψε το πρώτο του μυθιστόρημα και μερικά από τα πρώτα του τραγούδια καθισμένος στη βεράντα. Το νησί του έδωσε τη σιωπή, το φως και την κοινότητα των συγγραφέων και ζωγράφων που παρήγαγαν μερικά από τα πιο ανθεκτικά δημιουργικά έργα του αιώνα. Το σπίτι του στην οδό Κουντουριώτου είναι ορατό από τον δρόμο, και η σύνδεση του νησιού με τη μνήμη του παραμένει αυθεντική.",
          },
        },
        {
          title: {
            en: "Proximity to Athens — the best same-week combination in Greece",
            el: "Εγγύτητα στην Αθήνα — ο καλύτερος συνδυασμός στην Ελλάδα",
          },
          text: {
            en: "Ninety minutes from Piraeus on the Flying Dolphin. No other island of Hydra's quality and character is this close to the Greek capital. For travelers spending time in Athens — or using Athens as a transit hub — Hydra offers a two-to-three day complete contrast: the noise and energy of the city replaced immediately by stone and silence, the urban anonymity replaced by a community where the baker knows which house you are staying in. The Athens–Hydra combination is the most rewarding short pairing in the Greek island network.",
            el: "Ενενήντα λεπτά από τον Πειραιά με το Flying Dolphin. Κανένα άλλο νησί της ποιότητας και του χαρακτήρα της Ύδρας δεν είναι τόσο κοντά στην ελληνική πρωτεύουσα. Για τους ταξιδιώτες που περνούν χρόνο στην Αθήνα — ή χρησιμοποιούν την Αθήνα ως κόμβο μετακίνησης — η Ύδρα προσφέρει μια πλήρη αντίθεση δύο-τριών ημερών: ο θόρυβος και η ενέργεια της πόλης αντικαθίστανται αμέσως από πέτρα και σιωπή, η αστική ανωνυμία αντικαθίσταται από μια κοινότητα όπου ο φούρναρης ξέρει σε ποιο σπίτι μένεις.",
          },
        },
        {
          title: {
            en: "A landscape for walking that most visitors never discover",
            el: "Ένα τοπίο για περπάτημα που οι περισσότεροι επισκέπτες δεν ανακαλύπτουν ποτέ",
          },
          text: {
            en: "The interior of Hydra is a network of mule paths through wild thyme, cistus and pine that connects a series of monasteries, hilltop hermitages and abandoned settlements. The path to Profitis Ilias monastery at the island's highest point takes about two hours from the port and rewards with a panorama of the Saronic Gulf that takes in the Peloponnese coast, the outline of Spetses, and on clear days the mountains above Corinth. Most Hydra visitors spend their entire stay in the port town and never discover that the island extends for another 50 square kilometres of trail beyond it.",
            el: "Το εσωτερικό της Ύδρας είναι ένα δίκτυο μονοπατιών μέσα από άγριο θυμάρι, κίστο και πεύκα, που συνδέει μοναστήρια, ασκηταριά στις κορυφές των λόφων και εγκαταλελειμμένους οικισμούς. Το μονοπάτι για τη μονή Προφήτη Ηλία στο ψηλότερο σημείο του νησιού χρειάζεται περίπου δύο ώρες από το λιμάνι και ανταμείβει με ένα πανόραμα του Σαρωνικού που φτάνει μέχρι τις ακτές της Πελοποννήσου.",
          },
        },
      ],
    },
    {
      layout: "list",
      title: { en: "Best time to visit", el: "Καλύτερη εποχή για την Ύδρα" },
      alert: {
        en: "Secret: The best time of day on Hydra is 07:00–09:00, when the light hits the stone mansions at a low angle, the port is still, and the first donkey of the morning carries supplies down to the harbour. This hour is accessible only to overnight guests.",
        el: "Μυστικό: Η καλύτερη ώρα στην Ύδρα είναι 07:00–09:00, όταν το φως πέφτει στα πέτρινα αρχοντικά, το λιμάνι είναι ήσυχο και ο πρώτος γάιδαρος του πρωινού κατεβαίνει στο λιμάνι.",
      },
      items: [
        {
          title: { en: "April – June", el: "Απρίλιος – Ιούνιος" },
          text: {
            en: "The best balance of weather, crowds, and value. Spring wildflowers carpet the hillsides. The sea is warm enough for swimming from late May. Fewer day-trippers, easier water-taxi availability, and accommodation prices significantly below summer peak. The hiking is at its best — the slopes are green and the heat is manageable.",
            el: "Η καλύτερη ισορροπία καιρού, κόσμου και τιμών. Άγρια λουλούδια καλύπτουν τους λόφους. Λιγότεροι εκδρομείς, διαθεσιμότητα θαλάσσιων ταξί και τιμές σημαντικά χαμηλότερες. Η πεζοπορία είναι στα καλύτερά της.",
          },
        },
        {
          title: { en: "July – August", el: "Ιούλιος – Αύγουστος" },
          text: {
            en: "Peak season. The port is at its busiest, hydrofoils arrive packed, and the waterfront restaurants are full. The famous Hydra silence recedes to the early morning and late night. If you visit now, book accommodation well in advance, plan water taxis ahead, and accept that some of the island's particular quality is temporarily suspended. The compensation: perfect swimming weather, evening social energy, and the full range of restaurants and water taxis operating.",
            el: "Υψηλή σεζόν. Το λιμάνι είναι στο πιο πολυσύχναστο. Κάντε κράτηση διαμονής νωρίς. Η αποζημίωση: τέλειος καιρός για μπάνιο και όλες οι επιλογές εστίασης διαθέσιμες.",
          },
        },
        {
          title: { en: "September – October", el: "Σεπτέμβριος – Οκτώβριος" },
          text: {
            en: "Many experienced Hydra visitors consider this the ideal window. The sea is at its warmest (warmer than June). The day-trip crowds diminish after the first week of September. The light softens, the evenings are long, and the island exhales. Accommodation prices drop. The silence returns.",
            el: "Πολλοί έμπειροι επισκέπτες θεωρούν αυτή την ιδανική περίοδο. Η θάλασσα είναι πιο ζεστή. Τα πλήθη μειώνονται. Το φως μαλακώνει. Η σιωπή επιστρέφει.",
          },
        },
        {
          title: { en: "November – March", el: "Νοέμβριος – Μάρτιος" },
          text: {
            en: "Hydra in winter is an entirely different island. The permanent population of 2,000 reclaims the port. The hydrofoil runs daily but the island is genuinely quiet. Several tavernas and hotels close. The experience is raw, atmospheric, and memorable — the stone architecture in grey winter light, the wet cobblestones, the cafés where locals outnumber visitors. Not for everyone, but unforgettable for those who choose it.",
            el: "Η Ύδρα τον χειμώνα είναι εντελώς διαφορετικό νησί. Οι 2.000 μόνιμοι κάτοικοι ξαναπαίρνουν το λιμάνι. Η ατμόσφαιρα είναι ωμή και αξέχαστη — η πέτρινη αρχιτεκτονική στο γκρίζο χειμωνιάτικο φως, τα βρεγμένα λιθόστρωτα, οι κάτοικοι περισσότεροι από τους επισκέπτες.",
          },
        },
      ],
    },
    {
      layout: "list",
      title: { en: "How to get there", el: "Πώς να πάτε στην Ύδρα" },
      text: {
        en: "💡 Transport tip: Hydra has no airport and no vehicle access — not even bicycle access. The only way in is by sea. The standard approach for most visitors is the Flying Dolphin hydrofoil from Piraeus, which is fast, reliable and scenic. Book tickets in advance for summer weekends; the Piraeus–Hydra route is heavily used by Athenians escaping to the island on Friday evenings and returning Sunday. The best seat on the Flying Dolphin is on the left side (port side) — the approach to Hydra harbour is one of the great arrivals in Greek island travel.\n\n**From Athens (Piraeus) by hydrofoil — the standard option**\nFlying Dolphins (Hellenic Seaways) depart from Gate E8 at Piraeus port. The journey takes approximately 90 minutes. Departures run year-round, with increased frequency in summer. Book tickets in advance for July–August weekends. The service calls at Poros en route on some sailings.\n\n**From the Peloponnese — for drivers**\nDrive to the port of Ermioni (2 hours from Athens) or Porto Heli, from which water taxis connect directly to Hydra in 15–20 minutes. This is the option for anyone who wants to combine Hydra with a Peloponnese road trip.\n\n**From Spetses and Poros — island hopping**\nHydra is connected by regular hydrofoil to Spetses (20 minutes) and Poros (30 minutes), making it part of the classic Saronic Islands triangle. A multi-day loop of Hydra–Spetses–Poros is one of the best short itineraries in Greece.\n\n**Getting around Hydra**\nYou walk. This is not a limitation — it is the point. Donkeys and mules carry luggage between the port and the hillside hotels and houses. Water taxis (small boats) connect Hydra Town with Kamini, Vlyhos, Mandraki, the remote beaches, and — for the adventurous — with restaurants on the far side of the island. Negotiate the fare before boarding.",
        el: "💡 Συμβουλή: Η Ύδρα δεν έχει αεροδρόμιο και πρόσβαση οχημάτων. Ο μόνος τρόπος είναι η θάλασσα. Το Flying Dolphin από Πειραιά είναι η στάνταρ επιλογή.\n\n**Από Πειραιά με Flying Dolphin**\n90 λεπτά από την Πύλη Ε8. Περισσότερα δρομολόγια το καλοκαίρι. Κλείστε εισιτήριο νωρίς για Ιούλιο-Αύγουστο.\n\n**Από την Πελοπόννησο — για οδηγούς**\nΟδηγήστε μέχρι Ερμιόνη ή Πόρτο Χέλι και πάρτε θαλάσσιο ταξί (15-20 λεπτά).\n\n**Από Σπέτσες και Πόρο**\n20 λεπτά από Σπέτσες, 30 από Πόρο. Ένας κλασικός τρίγωνο Σαρωνικού.\n\n**Μετακινήσεις στην Ύδρα**\nΠερπατάτε. Γάιδαροι μεταφέρουν αποσκευές. Θαλάσσια ταξί συνδέουν την πόλη με παραλίες. Διαπραγματευτείτε το κόμιστρο πριν επιβιβαστείτε."
      }
    },
    {
      layout: "numbered",
      title: { en: "Top Attractions & Experiences in Hydra", el: "Κορυφαία Αξιοθέατα στην Ύδρα" },
      items: [
        {
          title: { en: "The Port — Hydra's living room", el: "Το Λιμάνι της Ύδρας" },
          text: {
            en: "Hydra's harbour is the most intact 18th-century maritime settlement in Greece. The mansions that line the waterfront were built between 1680 and 1820 by the merchant captains who made Hydra one of the wealthiest places in the Mediterranean. The architecture is unique in Greece: grey stone, tile roofs, symmetrical facades, and tall windows that reflect the naval hierarchy of their owners. The Tombazis, Kountouriotis, and Voulgaris families — each with their own mansion — financed the Greek War of Independence from these buildings. The harbour is not a historic district within a modern town — it is the entire town, and it is still lived in. Morning is the time to understand it: before the day-trippers arrive from Athens, the fishermen are unloading, the donkeys are beginning their rounds with supplies, and the light on the upper mansions is at its most dramatic.",
            el: "Το λιμάνι της Ύδρας είναι ο πιο άθικτος ναυτικός οικισμός του 18ου αιώνα στην Ελλάδα. Τα αρχοντικά χτίστηκαν από καπετάνιους που έκαναν την Ύδρα ένα από τα πλουσιότερα μέρη της Μεσογείου. Η αρχιτεκτονική είναι μοναδική: γκρίζα πέτρα, κεραμοσκεπές, συμμετρικές όψεις. Το λιμάνι δεν είναι μια ιστορική συνοικία μέσα σε μια σύγχρονη πόλη — είναι ολόκληρη η πόλη και κατοικείται ακόμα.",
          },
        },
        {
          title: { en: "Kountouriotis Mansion — the flagship of Hydra's museums", el: "Αρχοντικό Κουντουριώτη" },
          text: {
            en: "The Kountouriotis Mansion, built in 1810, is the finest surviving captain's mansion and has been operated as a museum since 1955. The interior is furnished as it would have been in the 1820s — Venetian furniture, family portraits, naval memorabilia, and the original kitchen. The rooftop terrace offers one of the best views of the harbour. The mansion tells the story of the Kountouriotis family, whose fleet of 50 ships made them one of the wealthiest in Greece and whose son Pavlos became Prime Minister and President of Greece.",
            el: "Το Αρχοντικό Κουντουριώτη είναι το καλύτερα σωζόμενο αρχοντικό καπετάνιου. Η εσωτερική διακόσμηση είναι αυθεντική της δεκαετίας του 1820. Η ταράτσα προσφέρει μία από τις καλύτερες θέες του λιμανιού. Το αρχοντικό αφηγείται την ιστορία της οικογένειας Κουντουριώτη, που έπαιξε καθοριστικό ρόλο στην Επανάσταση του 1821.",
          },
        },
        {
          title: { en: "Deste Foundation Slaughterhouse — art in an unlikely space", el: "Σφαγείο Ιδρύματος ΔΕΣΤΕ" },
          text: {
            en: "One of the most remarkable art spaces in Greece. The Deste Foundation, founded by collector Dakis Joannou, converted a 19th-century municipal slaughterhouse into a contemporary art exhibition space that mounts rotating shows of international artists. The building itself — a simple stone structure at the western edge of the harbour — is architecturally striking, and the contrast between its brutalist history and the often delicate conceptual art it houses creates an experience found nowhere else in the Cyclades or the Saronic.",
            el: "Ένας από τους πιο αξιόλογους χώρους τέχνης στην Ελλάδα. Ένα μετασκευασμένο σφαγείο του 19ου αιώνα φιλοξενεί σύγχρονη τέχνη διεθνών καλλιτεχνών. Το ίδιο το κτίριο — μια απλή πέτρινη δομή στη δυτική άκρη του λιμανιού — είναι αρχιτεκτονικά εντυπωσιακό.",
          },
        },
        {
          title: { en: "The Four Windmills & Eastern Hydra", el: "Οι τέσσερις ανεμόμυλοι" },
          text: {
            en: "At the eastern edge of Hydra Town, four restored stone windmills stand on a ridge above a small pebble beach (Spilia). The windmills date from the 18th century and were used to grind grain brought by the captain's ships from across the Mediterranean. The path to the windmills is a 10-minute walk from the harbour and offers the best sunset viewpoint on the island. Beyond the windmills, the coastal path continues toward Kamini — a 20-minute walk that passes small swimming coves and the picturesque chapel of Agios Nikolaos.",
            el: "Τέσσερις πέτρινοι ανεμόμυλοι του 18ου αιώνα στην ανατολική άκρη της πόλης. Προσφέρουν την καλύτερη θέα ηλιοβασιλέματος. Η διαδρομή προς το Καμίνι περνά από μικρούς όρμους για κολύμπι.",
          },
        },
        {
          title: { en: "Monastery of Profitis Ilias — the island's rooftop", el: "Μονή Προφήτη Ηλία" },
          text: {
            en: "Perched at 590m elevation, the Monastery of Profitis Ilias is the highest point on Hydra and the most rewarding day hike from the port. The monastery itself is modest — a small stone church and a few cells — but the setting is spectacular. The 360-degree panorama takes in the entire Saronic Gulf, from the Peloponnese mountains to Aegina, Poros, Spetses, and on clear days all the way to Cape Sounion and the Athens coast. The hike takes approximately 90 minutes from the port via a well-maintained stone path.",
            el: "Στα 590μ., η Μονή Προφήτη Ηλία είναι το ψηλότερο σημείο της Ύδρας. Η θέα 360 μοιρών καλύπτει όλο τον Σαρωνικό. Η πεζοπορία διαρκεί περίπου 90 λεπτά.",
          },
        },
        {
          title: { en: "Historic Archives Museum of Hydra", el: "Ιστορική Αρχειακή Βιβλιοθήκη Ύδρας" },
          text: {
            en: "Housed in a restored 19th-century mansion on the harbour front, the Historic Archives Museum contains one of the most important collections of documents and artifacts from the Greek War of Independence. The collection includes original correspondence from Theodoros Kolokotronis, the personal flag of Admiral Miaoulis, shipbuilding plans, maritime maps, and an archive of over 25,000 documents from the 18th and 19th centuries.",
            el: "Στεγασμένη σε ένα αναστηλωμένο αρχοντικό, η Βιβλιοθήκη περιέχει μία από τις σημαντικότερες συλλογές τεκμηρίων της Επανάστασης του 1821, συμπεριλαμβανομένων προσωπικών αντικειμένων του Κολοκοτρώνη και του Μιαούλη.",
          },
        },
      ],
    },
    {
      layout: "grid",
      title: { en: "Best Beaches in Hydra", el: "Οι Καλύτερες Παραλίες στην Ύδρα" },
      items: [
        {
          title: { en: "Spilia — the port swim", el: "Σπίλια" },
          text: {
            en: "The closest swimming to Hydra Town, located directly below the four windmills at the eastern edge of the harbour. Concrete and stone platforms set into the rocks, with ladders into deep, clear water. Excellent water quality.",
            el: "Το κοντινότερο μπάνιο στην πόλη, κάτω από τους ανεμόμυλους. Πλατφόρμες στα βράχια με σκάλες προς τα βαθιά, καθαρά νερά."
          },
        },
        {
          title: { en: "Kamini — the village swim", el: "Καμίνι" },
          text: {
            en: "Small fishing harbour 20 mins walk east of Hydra Town. Swimming from rocks, tiny pebbly cove, tavernas on the water. Relaxed, local atmosphere.",
            el: "20 λεπτά με τα πόδια. Μικρός όρμος με βότσαλο και βραχώδεις πλατφόρμες. Χαλαρή, τοπική ατμόσφαιρα."
          },
        },
        {
          title: { en: "Vlyhos — pebble beach", el: "Βλύχος" },
          text: {
            en: "Sheltered pebble beach, 15 mins by water taxi. Pine trees for shade, calm clear water, historic stone bridge overhead.",
            el: "Προστατευμένη παραλία με βότσαλο, 15 λεπτά με θαλάσσιο ταξί. Ήρεμα νερά, πεύκα για σκιά."
          },
        },
        {
          title: { en: "Bisti — the sandy cove", el: "Μπίστι" },
          text: {
            en: "One of the few sandy beaches, 20 mins by water taxi. Small cove, rocky cliffs, seasonal taverna. Excellent swimming.",
            el: "Μία από τις λίγες αμμώδεις παραλίες. Μικρός όρμος, 20 λεπτά με θαλάσσιο ταξί."
          },
        },
        {
          title: { en: "Limnioniza — remote and quiet", el: "Λιμνιόνιζα" },
          text: {
            en: "Remote pebble cove, 30 mins by water taxi. No facilities, crystal-clear water, excellent snorkelling. Very quiet.",
            el: "Απομακρυσμένη παραλία, 30 λεπτά με θαλάσσιο ταξί. Βότσαλο, κρυστάλλινα νερά, εξαιρετικό snorkeling."
          },
        },
        {
          title: { en: "Agios Nikolaos — the secret beach", el: "Αγίου Νικολάου" },
          text: {
            en: "Small, remote pebble beach on the southeastern coast, accessible by water taxi or steep path. No facilities, complete silence.",
            el: "Μικρή, απομακρυσμένη παραλία, μόνο με θαλάσσιο ταξί ή απότομο μονοπάτι. Χωρίς υποδομές, απόλυτη ησυχία."
          },
        },
      ],
    },
    {
      layout: "list",
      title: { en: "What to Eat in Hydra", el: "Τι να φας στην Ύδρα" },
      text: {
        en: "**Amygdalota (Hydriot Almond Sweets)** — Signature sweet of Hydra: small, chewy almond macaroons made from ground almonds, sugar, and rosewater. Best from family bakeries behind the harbour.\n\n**Fresh Fish & Grilled Octopus** — Fresh catch from local boats. Tavernas in Kamini are the most reliable. Octopus drying on lines is not just decoration — it is a local staple.\n\n**Lavender Honey** — Local honey with distinctive floral aroma from hillsides. Sold in small grocery stores behind the harbour.\n\n**Stifado (Hydriot Style)** — Slow-cooked rabbit or beef stew with pearl onions, tomato, cinnamon, and allspice. Found in traditional tavernas.",
        el: "**Αμυγδαλωτά** — Το γλυκό-σήμα της Ύδρας: μακαρόν από αμύγδαλο, ζάχαρη και ανθόνερο.\n\n**Φρέσκο Ψάρι & Χταπόδι** — Φρέσκια ψαριά από ντόπια σκάφη. Οι ταβέρνες στο Καμίνι είναι οι πιο αξιόπιστες.\n\n**Μέλι Λεβάντας** — Από τους λόφους της Ύδρας, με ξεχωριστό άρωμα.\n\n**Στιφάδο** — Κουνέλι ή μοσχάρι μαγειρεμένο αργά με κρεμμυδάκια, ντομάτα, κανέλα."
      }
    },
    {
      layout: "list",
      title: { en: "Practical tips", el: "Πρακτικές συμβουλές" },
      text: {
        en: "**Pack light:** There are no cars/porters. You carry your own luggage over cobblestones/steps. Backpacks/soft bags are best.\n\n**Book early:** Hydra has limited hotels. July–August rooms book months ahead.\n\n**Negotiate water taxis:** Agree price for round-trip before boarding. A typical fare to Vlyhos/Bisti is €15–25/person.\n\n**Shoes:** Cobblestones are slippery when wet. Wear flat, grippy shoes.\n\n**Cash:** ATMs run low on summer weekends. Carry cash for small shops/tavernas.\n\n**Hiking:** Profitis Ilias takes ~90 mins. Wear proper shoes, carry water/flashlight.",
        el: "**Ελαφριά αποσκευή:** Κουβαλάτε τα πάντα μόνοι σας. Σακίδιο είναι η σωστή επιλογή.\n\n**Κράτηση διαμονής νωρίς:** Ιούλιος-Αύγουστος κλείνει εβδομάδες πριν.\n\n**Θαλάσσια ταξί:** Συμφωνήστε τιμή πριν επιβιβαστείτε. Τιμή: €15-25/άτομο.\n\n**Παπούτσια:** Τα λιθόστρωτα γλιστρούν. Επίπεδα παπούτσια με κράτημα.\n\n**ΑΤΜ και μετρητά:** Έχετε μετρητά για μικρά μαγαζιά.\n\n**Πεζοπορία:** Προφήτης Ηλίας ~90 λεπτά. Φέρτε νερό και φακό."
      }
    },
    {
      layout: "faq",
      title: { en: "FAQ — Hydra Essentials", el: "Συχνές Ερωτήσεις" },
      items: [
        {
          title: { en: "How do I get to Hydra from Athens?", el: "Πώς πάω από Αθήνα στην Ύδρα;" },
          text: { en: "Flying Dolphin from Piraeus (Gate E8). ~90 mins. Multiple daily departures. No airport.", el: "Flying Dolphin από Πειραιά (Πύλη Ε8). ~90 λεπτά. Πολλά δρομολόγια καθημερινά. Δεν υπάρχει αεροδρόμιο." }
        },
        {
          title: { en: "How many days should I spend in Hydra?", el: "Πόσες μέρες να μείνω στην Ύδρα;" },
          text: { en: "Two nights minimum. The silence after the last hydrofoil leaves is Hydra's most extraordinary quality.", el: "Ελάχιστο δύο διανυκτερεύσεις. Η ησυχία μετά το τελευταίο πλοίο είναι το πιο εξαιρετικό χαρακτηριστικό." }
        },
        {
          title: { en: "Are there cars on Hydra?", el: "Υπάρχουν αυτοκίνητα στην Ύδρα;" },
          text: { en: "No. Banned since the 1950s. Transport is by donkey, mule, water taxi, or on foot.", el: "Όχι. Απαγόρευση από το 1950. Μεταφορά με γάιδαρο, μουλάρι, θαλάσσιο ταξί ή με τα πόδια." }
        },
        {
          title: { en: "Does Hydra have sandy beaches?", el: "Έχει η Ύδρα αμμώδεις παραλίες;" },
          text: { en: "Very few. Bisti (sandy) and Vlyhos (pebble) are closest by water taxi. Spilia and Kamini offer swimming from rocks.", el: "Ελάχιστες. Μπίστι (άμμος) και Βλύχος (βότσαλο) με θαλάσσιο ταξί. Σπίλια και Καμίνι από βράχια." }
        },
        {
          title: { en: "Is Hydra expensive?", el: "Είναι ακριβή η Ύδρα;" },
          text: { en: "Harbour tavernas are expensive. Kamini has better value. Book accommodation early.", el: "Ακριβό στο λιμάνι. Το Καμίνι έχει καλύτερες τιμές. Κάντε κράτηση διαμονής νωρίς." }
        },
        {
          title: { en: "Leonard Cohen's Hydra connection?", el: "Σχέση Cohen με την Ύδρα;" },
          text: { en: "Cohen bought a house in 1960, wrote songs like 'Suzanne' there. House stands above the port.", el: "Αγόρασε σπίτι το 1960, έγραψε τραγούδια όπως το 'Suzanne' εκεί. Το σπίτι υπάρχει ακόμα." }
        },
        {
          title: { en: "Can you visit Hydra in winter?", el: "Πάω Ύδρα τον χειμώνα;" },
          text: { en: "Yes. Hydrofoil runs daily. Quiet, atmospheric, belongs to residents.", el: "Ναι. Το υδροπτέρυγο λειτουργεί καθημερινά. Ήσυχη και ατμοσφαιρική, ανήκει στους μόνιμους κατοίκους." }
        },
        {
          title: { en: "Hiking in Hydra?", el: "Πεζοπορία στην Ύδρα;" },
          text: { en: "Excellent. Stone paths connect port with Kamini (20'), Vlyhos (45'), Profitis Ilias (90').", el: "Εξαιρετική. Πέτρινα μονοπάτια συνδέουν το λιμάνι με Καμίνι (20'), Βλύχο (45'), Προφήτη Ηλία (90')." }
        }
      ]
    },
    {
      layout: "list",
      title: { en: "Honest Advice — What to Skip in Hydra", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Ύδρα" },
      text: {
        en: "✕ **Hydra harbour in the middle of the day** — The harbour is beautiful but it is also where every ferry passenger arrives. By noon it is a wall of people, donkeys, and noise. Walk the backstreets behind the harbour or head to Kamini where the pace is completely different.\n\n✕ **Staying only on the harbour waterfront** — The harbour tavernas are the most expensive on the island and the food is often mediocre. The better restaurants are in Kamini (fifteen-minute walk) and Vlychos, where the views are better and the prices honest.\n\n✕ **Renting a donkey as a gimmick** — Donkeys are Hydra's traditional transport but they are also slow, smelly, and expensive. The harbour is fifteen minutes on foot and the walk up to the castle is part of the experience.\n\n✕ **Skipping the hiking paths** — Hydra has a network of ancient stone paths connecting the harbour to every village on the island. The walk to Kamini (twenty minutes) and to Vlychos (forty-five minutes) are shaded, quiet, and reveal a side of Hydra that most visitors never see.\n\n✕ **Visiting only in August** — Hydra in August is expensive, crowded, and hot. May, June, and September are when the island shows its real character: empty paths, quiet tavernas, and a pace that lets you understand why Leonard Cohen, Henry Miller, and George Balanchine all chose to live here.\n\n💡 What nobody tells you: Hydra's most beautiful spot is not the harbour or the castle — it is the small monastery of Profitis Ilias, a ninety-minute walk above town, where the views stretch across the Saronic Gulf to the Peloponnese and the silence is absolute. Bring water and go early.",
        el: "✕ **Λιμάνι Ύδρας στο μεσημέρι** — Όμορφο αλλά γεμάτο. Φύγε στα πλατεάκια πίσω ή στο Καμίνι.\n\n✕ **Μόνο waterfront** — Ακριβές, μέτριες ταβέρνες. Καμίνι, Βλύχος — καλύτερα, φθηνότερα.\n\n✕ **Γάιδαρο ως gimmick** — Αργό, ακριβό. Το λιμάνι είναι 15 λεπτά με τα πόδια.\n\n✕ **Να παραλείψεις τα μονοπάτια** — Πέτρινα, σκιερά. Καμίνι 20', Βλύχος 45'.\n\n✕ **Μόνο Αύγουστος** — Ακριβός, γεμάτος, ζεστός. Ιούνιος-Σεπτέμβριος — πραγματική Ύδρα.\n\n💡 Αυτό που δε σου λέει κανείς: Το πιο όμορφο σημείο είναι ο Προφήτης Ηλίας — 90 λεπτά ανάβαση, θέα σε όλο το Αιγαίο, απόλυτη σιωπή."
      }
    }
  ],
  ios: [
    {
      title: { en: "Why visit Ios", el: "Γιατί να επισκεφθείς την Ίο" },
      layout: "numbered",
      items: [
        {
          title: { en: "The Chora is one of the most beautiful whitewashed villages in the entire Cyclades", el: "Το Χωριό είναι ένα από τα πιο όμορφα λευκοπιασμένα χωριά σε όλες τις Κυκλάδες" },
          text: { en: "The hilltop capital of Ios is a labyrinth of narrow marble-paved lanes, arched passageways, blue-domed churches and whitewashed cube houses that climb toward a windmill-crowned ridge. It is genuinely stunning — not as a tourist construction but as a living Cycladic settlement that has retained its architectural logic for centuries. In the morning, before the day visitors arrive from Mylopotas, it is one of the most atmospheric places in the islands.", el: "Η πρωτεύουσα της Ίου είναι ένα λαβύρινθο στενών μαρμάρινων δρομάκιων, τοξωτών περασμάτων, εκκλησιών με μπλε θόλους και λευκών κύβων σπιτιών που ανεβαίνουν προς μια ράχη στεφανωμένη από ανεμόμυλο. Είναι πραγματικά εντυπωσιακό — όχι ως τουριστική κατασκευή αλλά ως ένα ζωντανό κυκλαδίτικο οικισμό που διατήρησε την αρχιτεκτονική του λογική για αιώνες. Το πρωί, πριν φτάσουν οι ημερήσιοι επισκέπτες από τον Μυλοποτά, είναι ένα από τα πιο ατμοσφαιρικά μέρη στα νησιά." }
        },
        {
          title: { en: "Homer's Tomb — one of the most evocative ancient sites in the Aegean", el: "Τάφος του Ομήρου — ένα από τα πιο εντυπωσιακά αρχαία μέρη στο Αιγαίο" },
          text: { en: "Ancient tradition held that Homer was born on Ios and is buried on its northern tip. The site — a low stone enclosure on a bare rocky hillside with views across the sea to Sikinos and Folegandros — cannot be verified by archaeology, but the location is extraordinary regardless of its historical claims. Standing there on a clear morning, looking out over the Aegean in every direction, the myth feels entirely plausible.", el: "Η αρχαία παράδοση έλεγε ότι ο Όμηρος γεννήθηκε στην Ίο και είναι θαμμένος στο βόρειο άκρο της. Ο χώρος — ένα χαμηλό πέτρινο περίβλητα σε γυμνό βραχώδη λόφο με θέα στη θάλασσα προς Σίκινο και Φολέγανδρο — δεν μπορεί να επιβεβαιωθεί αρχαιολογικά, αλλά η τοποθεσία είναι εξαιρετική ανεξάρτητα από τις ιστορικές αξιώσεις της. Στεκόμενος εκεί σε ένα καθαρό πρωί, κοιτώντας το Αιγαίο σε κάθε κατεύθυνση, ο μύθος φαίνεται εντελώς πιθανός." }
        },
        {
          title: { en: "Manganari — a series of wild south-coast bays with some of the clearest water in the Cyclades", el: "Μαγκαναρί — μια σειρά άγριων νότιων κολπών με από το πιο καθαρό νερό στις Κυκλάδες" },
          text: { en: "The south coast of Ios is almost entirely undeveloped, and Manganari — its principal beach area — consists of three broad sandy bays separated by rocky headlands, with water that shades from pale turquoise at the shore to deep cobalt at the edge of the bay. There is one seasonal taverna and almost no infrastructure. It is the complete counterpoint to Mylopotas and one of the finest natural beach environments in the southern Cyclades.", el: "Η νότια ακτή της Ίου είναι σχεδόν εντελώς αναπτύξιμη, και η Μαγκαναρί — η κύρια παραλιακή περιοχή της — αποτελείται από τρεις ευρύτατους αμμώδεις κόλπους χωρισμένους από βραχώδεις ακτές, με νερό που περνά από ανοιχτό τυρκουάζ στην ακτή σε βαθύ κοβαλτίνη στην άκρη του κόλπου. Υπάρχει μία εποχιακή ταβέρνα και σχεδόν κανένα υποδομή. Είναι η πλήρης αντίθεση με τον Μυλοποτά και ένα από τα πιο φυσικά παραλιακά περιβάλλοντα στις νότιες Κυκλάδες." }
        },
        {
          title: { en: "Mylopotas is one of the finest long sandy beaches in the Cyclades — at any level of organisation you prefer", el: "Ο Μυλοποτάς είναι ένα από τα πιο όμορφα μακριά αμμώδη παραλίες στις Κυκλάδες — σε κάθε επίπεδο οργάνωσης που προτιμάς" },
          text: { en: "The beach at Mylopotas is two kilometres of fine pale sand curving around a protected south-facing bay. The eastern end is highly organised — sunbeds, beach bars, watersports, cocktails from noon — while the western end dissolves into a quieter stretch where the sand runs out and the rocks begin. The range of experiences available on a single beach is genuinely unusual: you can be in a full beach-club scene at one end and in near-total solitude at the other.", el: "Η παραλία του Μυλοποτά είναι δυο χιλιόμετρα λεπτής ανοιχτόχρωμης άμμου γύρω από ένα προστατευόμενο νότιο κόλπο. Το ανατολικό άκρο είναι πολύ οργανωμένο — ηλιοστάσια, beach bars, υδάτινα αθλήματα, κοκτέιλ από το μεσημέρι — ενώ το δυτικό άκρο διαλύεται σε πιο ήσυχο τμήμα όπου η άμμος τελειώνει και αρχίζουν τα βράχια. Η ποικιλία εμπειριών που διατίθεται σε μία παραλία είναι πραγματικά ασυνήθιστη: μπορείς να είσαι σε πλήρη beach-club σκηνή στο ένα άκρο και σε σχεδόν πλήρη μοναξιά στο άλλο." }
        },
        {
          title: { en: "The nightlife in the Chora is unlike anything else in the Greek islands — and genuinely worth experiencing once", el: "Η νυχτερινή ζωή στο Χωριό δεν μοιάζει με τίποτα άλλο στα ελληνικά νησιά — και αξίζει να τη ζήσεις μία φορά" },
          text: { en: "The concentration of bars and clubs in the narrow lanes of the upper Chora has been drawing summer visitors for forty years, and it remains one of the most vivid nocturnal experiences in the Mediterranean. The bars open at sunset and the energy builds through the evening into a density of music, movement and good-natured chaos that is uniquely Cycladic. It is not for every traveller — but dismissing it entirely without experiencing it once is to miss something real.", el: "Η συγκέντρωση μπαρ και clubs στα στενά δρομάκια του πάνω Χωριού προσελκύει καλοκαιρινούς επισκέπτες εδώ και σαράντα χρόνια, και παραμένει μία από τις πιο ζωντανές νυχτερινές εμπειρίες σης Μεσογείου. Τα μπαρ ανοίγουν στη σούσα και η ενέργεια χτίζεται μέσα στη βραδιά σε μια πυκνότητα μουσικής, κίνησης και καλόσυνης χαοτικότητας που είναι μοναδικά κυκλαδίτικη. Δεν είναι για κάθε ταξιδιώτη — αλλά να το απορρίψεις εντελώς χωρίς να το ζήσεις μία φορά είναι να χάσεις κάτι πραγματικό." }
        },
        {
          title: { en: "Ios is positioned perfectly for island hopping — Santorini, Folegandros, Sikinos and Naxos are all close", el: "Η Ίος είναι τέλεια τοποθετημένη για island hopping — Σαντορίνη, Φολέγανδρος, Σίκινος και Νάξος είναι κοντά" },
          text: { en: "The island sits at the intersection of several major ferry routes in the southern Cyclades. Santorini is 45 minutes by high-speed ferry; Naxos is under an hour; Folegandros and Sikinos — two of the most unspoiled small islands in Greece — are each reachable in under two hours. For island hoppers using Ios as a base, the geographic position is ideal.", el: "Το νησί βρίσκεται στη διασταύρωση αρκετών σημαντικών πορείακων γραμμών στις νότιες Κυκλάδες. Η Σαντορίνη είναι 45 λεπτά με γρήγορο πλοίο; η Νάξος κάτω από μία ώρα; Φολέγανδρος και Σίκινος — δύο από τα πιο ανέγγιχτα μικρά νησιά στην Ελλάδα — είναι και τα δύο προσβάσιμα σε κάτω από δύο ώρες. Για island hoppers που χρησιμοποιούν την Ίο ως βάση, η γεωγραφική θέση είναι ιδανική." }
        }
      ]
    },
    {
      title: { en: "Best time to go (and when to avoid)", el: "Καλύτερη εποχή (και πότε να αποφύγεις)" },
      layout: "list",
      alert: {
        en: "Secret: September is the finest month on Ios — the sea is at its warmest, the crowds have thinned dramatically, and the Chora is quiet and beautiful in the evenings.",
        el: "Μυστικό: Ο Σεπτέμβριος είναι ο καλύτερος μήνας στην Ίο — η θάλασσα είναι στο πιο ζεστό, τα πλήθη έχουν αραιωθεί δραματικά, και το Χωριό είναι ήσυχο και όμορφο τις βραδιές."
      },
      items: [
        {
          title: { en: "May — green, quiet, excellent value", el: "Μάιος — πράσινος, ήσυχος, εξαιρετική αξία" },
          text: { en: "The island is green and quiet. Accommodation is good value, the Chora is uncrowded, and the sea is reaching swimming temperature. Excellent for walkers, explorers and anyone who wants Ios without the party energy.", el: "Το νησί είναι πράσινο και ήσυχο. Τα καταλύματα είναι σε καλή τιμή, το Χωριό δεν είναι γεμάτο, και η θάλασσα φτάνει σε θερμοκρασία κολύμβησης. Εξαιρετικό για πεζοπόρους, εξερευνητές και όσους θέλουν την Ίο χωρίς την ενέργεια της γιορτής." }
        },
        {
          title: { en: "June — the ideal month", el: "Ιούνιος — ο ιδανικός μήνας" },
          text: { en: "The ideal month for most visitors — the sea is warm, Mylopotas is lively without being overwhelming, the Chora is at its most beautiful in the evenings, and the accommodation choice and price point are both at their best.", el: "Ο ιδανικός μήνας για τους περισσότερους επισκέπτες — η θάλασσα είναι ζεστή, ο Μυλοποτάς είναι ζωντανός χωρίς να υπερβάλλει, το Χωριό είναι στο πιο όμορφό του τις βραδιές, και η επιλογή καταλύματος και τιμή είναι και οι δύο στο καλύτερό τους." }
        },
        {
          title: { en: "July (early) — still excellent", el: "Ιούλιος (αρχές) — ακόμα εξαιρετικός" },
          text: { en: "Still excellent — before the mid-July peak the island is active and exciting without being saturated. Book ahead. The beach is at its best and the Chora nights are at their most energetic.", el: "Ακόμα εξαιρετικός — πριν την κορύφωση του μέσου Ιουλίου το νησί είναι ενεργό και συναρπαστικό χωρίς νεοτανίζεται. Κλείσε εκ των προτέρων. Η παραλία είναι στο καλύτερό της και οι νύχτες στο Χωριό στη πιο ενεργητική τους." }
        },
        {
          title: { en: "July (late) – August — peak season", el: "Ιούλιος (τέλος) – Αύγουστος — αιχμή σεζόν" },
          text: { en: "Peak season and very full. The island receives its maximum number of visitors and the atmosphere at Mylopotas and in the Chora is intense. Book everything months in advance. The meltemi can make the north-facing beaches rough.", el: "Αιχμή σεζόν και πολύ γεμάτο. Το νησί δέχεται τον μέγιστο αριθμό επισκεπτών και η ατμόσφαιρα στον Μυλοποτά και στο Χωριό είναι έντονη. Κλείσε τα πάντα μήνες εκ των προτέρων. Ο μελτέμι μπορεί να κάνει τις βόρειες παραλίες σκληρές." }
        },
        {
          title: { en: "September — the finest month", el: "Σεπτέμβριος — ο καλύτερος μήνας" },
          text: { en: "The finest month on Ios for most travellers. The sea is at its warmest, the crowds have thinned dramatically after mid-month, the Chora is quiet and beautiful in the evenings, and the south coast beaches are at their most accessible and empty. Exceptional.", el: "Ο καλύτερος μήνας στην Ίο για τους περισσότερους ταξιδιώτες. Η θάλασσα είναι στο πιο ζεστό, τα πλήθη έχουν αραιωθεί δραματικά μετά τα μέσα του μήνα, το Χωριό είναι ήσυχο και όμορφο τις βραδιές, και οι παραλίες της νότιας ακτής είναι στο πιο προσβάσιμο και άδειο. Εξαιρετικός." }
        },
        {
          title: { en: "October – April — off-season", el: "Οκτώβριος – Απρίλιος — εκτός σεζόν" },
          text: { en: "Ios quiets significantly outside summer. Some facilities remain open through October. The island in winter is almost entirely local — a handful of year-round residents, open kafeneions and a Chora that feels profoundly different from its summer self.", el: "Η Ίος ηρεμεί σημαντικά εκτός καλοκαιριού. Κάποιες εγκαταστάσεις παραμένουν ανοιχτές μέχρι τον Οκτώβριο. Το νησί τον χειμώνα είναι σχεδόν εντελώς τοπικό — λίγοι μόνιμοι κάτοικοι, ανοιχτά καφενεία και ένα Χωριό που φαίνεται βαθιά διαφορετικό από το καλοκαιρινό του εαυτό." }
        }
      ]
    },
    {
      title: { en: "The Chora and main sights", el: "Το Χωριό και κύρια αξιοθέατα" },
      layout: "numbered",
      items: [
        {
          title: { en: "The Chora (Ios Town) — the most beautiful Cycladic hilltop village in the southern islands", el: "Το Χωριό (Ίος) — το πιο όμορφο κυκλαδίτικο ορεινό χωριό στα νότια νησιά" },
          text: { en: "The Chora of Ios is everything a Cycladic village should be: dense, labyrinthine, blazingly white, with blue-domed churches appearing at intervals along lanes that twist and double back on themselves with no apparent logic. It sits at 150 metres above the port bay, reached by a paved road or — more correctly — by the long marble staircase that has connected the two since long before cars existed. From the ridge at the top, crowned by three windmills and the ruins of a Venetian kastro, the views extend north to Naxos and south toward Santorini on clear days.\n\nThe Chora divides cleanly into two temporal personalities. By day it is a quiet, domestic place where locals shop, children play in the square, and cats sleep on sun-warmed steps. By night — from around 9pm onward — the bar-lined lanes of the upper village fill with a kind of concentrated energy that is specific to Ios and to no other place in the Cyclades. Both personalities are worth experiencing.", el: "Το Χωριό της Ίου είναι ό,τι πρέπει να είναι ένα κυκλαδίτικο χωριό: πυκνό, λαβυρινθώδες, λαμπρά λευκό, με εκκλησίες με μπλε θόλους που εμφανίζονται σε διαστήματα κατά μήκος δρομάκιων που στροφώνονται και επιστρέφουν στον εαυτό τους χωρίς φαινόμενη λογική. Κάθεται στα 150 μέτρα πάνω από τον κόλπο του λιμανιού, προσβάσιμο με επιστρωμένο δρόμο ή — πιο σωστά — με το μακρύ σκαλοπάτι μαρμάρου που συνδέει τα δύο από πολύ πριν υπάρξουν αυτοκίνητα. Από τη ράχη στην κορυφή, στεφανωμένη από τρεις ανεμόμυλους και τα ερείπια ενός ενετικού κάστρου, η θέα εκτείνεται βόρεια προς Νάξο και νότια προς Σαντορίνη σε καθαρές μέρες.\n\nΤο Χωριό χωρίζεται καθαρά σε δύο χρονικές προσωπικότητες. Την ημέρα είναι ήσυχο, οικογενειακό μέρο όπου οι ντόπιοι ψωνίζουν, τα παιδια παίζουν στην πλατεία, και γάτες κοιμούνται σε ηλιοθερμισμένα βήματα. Τη νύχτα — από τις 9μμ και μετά — τα δρομάκια γεμισμένα με μπαρ του πάνω χωριού γεμίζουν με ένα είδος συγκεντρωμένης ενέργειας που είναι ιδιαίτερη της Ίου και κανενός άλλου μέρους στις Κυκλάδες. Και οι δύο προσωπικότητες αξίζουν να ζηθούν." }
        },
        {
          title: { en: "Homer's Tomb — the northern ridge and the oldest tradition on the island", el: "Τάφος του Ομήρου — η βόρεια ράχη και η παλαιότερη παράδοση στο νησί" },
          text: { en: "Ancient sources — including Thucydides, Pliny the Elder and the Homeric tradition itself — record that Homer died on the island of Ios and was buried on its northern tip. The Archaeological Museum in the Chora holds inscriptions and fragments that reference the tradition, and the site on the northern ridge — a reconstructed enclosure of ancient stones set into a bare hillside above a deep sea view — has been known and visited since antiquity. Whether or not the tomb is genuinely Homer's is a question that archaeology cannot resolve; what is not in question is the extraordinary quality of the location and the emotional weight of standing in a place that the ancient world treated as sacred.", el: "Αρχαίες πηγές — συμπεριλαμβανομένων του Θουκυδίδη, του Πλίνιου του Πρεσβύτερου και της ίδιας της Ομηρικής παράδοσης — καταγράφουν ότι ο Όμηρος πέθανε στο νησί της Ίου και θάφτηκε στο βόρειο άκρο της. Το Αρχαιολογικό Μουσείο στο Χωριό φιλοξενεί επιγραφές και θραύσματα που αναφέρονται στην παράδοση, και ο χώρος στη βόρεια ράχη — ένα ανακατασκευασμένο περίβλητα αρχαίων πετρών σε γυμνό λόφο πάνω από βαθιά θαλάσσια θέα — είναι γνωστός και επισκέψιμος από την αρχαιότητα. Αν ο τάφος είναι πραγματικά του Ομήρου είναι ερώτημα που η αρχαιολογία δεν μπορεί να επιλύσει; αυτό που δεν αμφισβητείται είναι η εξαιρετική ποιότητα της τοποθεσίας και το συναισθηματικό βάρος του να στέκεσαι σε ένα μέρο που ο αρχαίος κόσμος θεωρούσε ιερό." }
        },
        {
          title: { en: "The Archaeological Museum of Ios", el: "Το Αρχαιολογικό Μουσείο της Ίου" },
          text: { en: "The Archaeological Museum in the Chora is small but intelligently curated, containing finds from the island's Mycenaean-era settlement at Skarkos — one of the most significant Early Bronze Age sites in the Cyclades, with occupation dating to approximately 2800–2300 BC. The Skarkos site itself, on a low hill north of the port, is accessible and worth a visit; the combination of site and museum gives a clear picture of Ios's very long human history that stands in sharp contrast to its modern reputation.", el: "Το Αρχαιολογικό Μουσείο στο Χωριό είναι μικρό αλλά ευφυώς σχεδιασμένο, περιέχοντας ευρήματα από τον μυκηναϊκό οικισμό του νησιού στο Σκάρκο — ένα από τα πιο σημαντικά μέρη της Πρώιμης Εποχής του Χαλκού στις Κυκλάδες, με κατοίκηση από περίπου 2800–2300 π.Χ. Ο ίδιος ο χώρος του Σκάρκου, σε ένα χαμηλό λόφο βόρεια του λιμανιού, είναι προσβάσιμος και αξίζει μια επίσκεψη; ο συνδυασμός χώρου και μουσείου δίνει μια σαφή εικόνα της πολύ μακριάς ανθρώπινης ιστορίας της Ίου που στέκεται σε απότομη αντίθεση με τη σύγχρονη φήμη της." }
        },
        {
          title: { en: "Skarkos — Early Bronze Age settlement (UNESCO Tentative List)", el: "Σκάρκος — Οικισμός Πρώιμης Εποχής Χαλκού (Προσωρινή Λίστα UNESCO)" },
          text: { en: "The hill of Skarkos, just north of the port, contains the remarkably well-preserved remains of an Early Cycladic settlement from approximately 2800 BC — one of the oldest organised urban sites in the Aegean. Multi-roomed stone houses, storage vessels, animal bones and cooking implements have all been found here, revealing a structured community that predates the classical world by over two thousand years. The site is on Greece's UNESCO Tentative List and is openly accessible with information panels.", el: "Ο λόφος του Σκάρκου, μόλις βόρεια του λιμανιού, περιέχει τα εντυπωσιακά καλά διατηρημένα ερείπια ενός πρώιμου κυκλαδίτικου οικισμού από περίπου 2800 π.Χ. — ένα από τα παλαιότερα οργανωμένα αστικά μέρη στο Αιγαίο. Πολυδωμάτια πέτρινα σπίτια, αγγεία αποθήκευσης, ζώινα κόκαλα και μαγειρικά εργαλεία έχουν όλα βρεθεί εδώ, αποκαλύπτοντας μια δομημένη κοινότητα που προηγείται της κλασικής εποχής κατά πάνω από δύο χιλιετίες. Ο χώρος βρίσκεται στην Προσωρινή Λίστα της UNESCO στην Ελλάδα και είναι ανοιχτά προσβάσιμος με πληροφοριακές πινακίδες." }
        }
      ]
    },
    {
      title: { en: "Beaches in Ios", el: "Παραλίες στην Ίο" },
      layout: "list",
      items: [
        {
          title: { en: "Mylopotas — iconic and long", el: "Μυλοποτάς — θρυλικός και μακρύς" },
          text: { en: "The island's main beach — two kilometres of fine sand in a south-facing bay, with the full spectrum from organised beach clubs at the east end to quiet, undeveloped sand at the west. The clearest water on the main coastline. The beach bar scene here from June through August is one of the most vivid in the Cyclades.", el: "Η κύρια παραλία του νησιού — δυο χιλιόμετρα λεπτής άμμου σε νότιο κόλπο, με το πλήρες φάσμα από οργανωμένα beach clubs στο ανατολικό άκρο έως ήσυχη, αναπτύξιμη άμμο στα δυτικά. Το πιο καθαρό νερό στην κύρια ακτογραμμή. Το beach bar scene εδώ από Ιούνιο μέχρι Αύγουστο είναι ένα από τα πιο ζωντανά στις Κυκλάδες." }
        },
        {
          title: { en: "Manganari — wild and remote", el: "Μαγκαναρί — άγρια και απομακρυσμένη" },
          text: { en: "Three broad south-coast bays of exceptional natural beauty, accessible by caïque from the port or a rough dirt road. No sunbeds, minimal facilities, extraordinary clarity. The finest natural beach experience on the island and one of the best in the southern Cyclades.", el: "Τρεις ευρύτατοι νότιοι κόλποι εξαιρετικής φυσικής ομορφιάς, προσβάσιμοι με καΐκι από το λιμάνι ή σκληρό χωμάτινο δρόμο. Χωρίς ηλιοστάσια, ελάχιστες εγκαταστάσεις, εξαιρετική διαφάνεια. Η πιο φυσική παραλιακή εμπειρία στο νησί και μία από τις καλύτερες στις νότιες Κυκλάδες." }
        },
        {
          title: { en: "Koumbara — closest to Chora", el: "Κουμπάρα — πιο κοντά στο Χωριό" },
          text: { en: "A small rocky cove ten minutes' walk west of the port — pebble and coarse sand, clear water, a seasonal beach bar and a quiet atmosphere that makes it the preferred swimming spot for the island's longer-term residents. Completely different in character from Mylopotas.", el: "Ένας μικρός βραχώδης όρμος δέκα λεπτά με τα πόδια δυτικά του λιμανιού — χαλίκι και χοντρή άμμο, καθαρό νερό, ένα εποχιακό beach bar και μια ήσυχη ατμόσφαιρα που το κάνει το προτιμώμενο μέρο κολύμβησης για τους πιο μακροχρόνιους κατοίκους του νησιού. Εντελώς διαφορετικό σε χαρακτήρα από τον Μυλοποτά." }
        },
        {
          title: { en: "Psathi — nudist and free", el: "Ψαθί — γυμνιστική και ελεύθερη" },
          text: { en: "A sandy cove on the east coast, reached by a short dirt track from the main road. Quieter than Mylopotas, traditionally clothing-optional, with good clear water and a low-key atmosphere that suits visitors who want to escape the main beach scene.", el: "Ένας αμμώδης όρμος στην ανατολική ακτή, προσβάσιμος με σύντομο χωμάτινο δρόμο από τον κύριο δρόμο. Πιο ήσυχος από τον Μυλοποτά, παραδοσιακά ελεύθερος, με καλό καθαρό νερό και χαμηλό-κλειδί ατμόσφαιρα που ταιριάζει σε επισκέπτες που θέλουν να δραπετάσουν από την κύρια παραλιακή σκηνή." }
        },
        {
          title: { en: "Agia Theodoti — sheltered and calm", el: "Αγία Θεοδότη — προστατευμένη και ήσυχη" },
          text: { en: "A long, broad sandy beach on the northeast coast, sheltered from the meltemi and excellent on windy days when the west coast is rough. A Byzantine church and the ruins of a Venetian castle sit above the beach. Taverna open in summer.", el: "Μια μακριά, ευρύτατη αμμώδης παραλία στη βορειοανατολική ακτή, προστατευμένη από τον μελτέμι και εξαιρετική σε αερώδεις μέρες όταν η δυτική ακτή είναι σκληρή. Μια βυζαντινή εκκλησία και τα ερείπια ενός ενετικού κάστρου κάθονται πάνω από την παραλία. Ταβέρνα ανοιχτή το καλοκαίρι." }
        },
        {
          title: { en: "Plakes & Kalamos — hidden gems", el: "Πλάκες & Καλαμός — κρυμμένα διαμάντια" },
          text: { en: "Two small, largely undiscovered coves on the north coast, reached by rough tracks. Rocky entries, very clear water, and almost no other visitors even in August. For those with a car and a willingness to walk the last five minutes on a stony path.", el: "Δύο μικροί, σε μεγάλο βαθμό ανακάλυπτοι όρμοι στη βόρεια ακτή, προσβάσιμοι με σκληρούς δρόμους. Βραχώδεις είσοδοι, πολύ καθαρό νερό, και σχεδόν κανένας άλλος επισκέπτης ακόμα και τον Αύγουστο. Για όσους έχουν αυτοκίνητο και τη διάθεση να περπατήσουν τα τελευταία πέντε λεπτά σε πετρένιο μονοπάτι." }
        }
      ]
    },
    {
      title: { en: "Eating and drinking in Ios", el: "Φαγητό και ποτό στην Ίο" },
      layout: "grid",
      items: [
        {
          title: { en: "The Chora restaurant scene — better than the reputation suggests", el: "Η σκηνή εστιατορίων στο Χωριό — καλύτερη από ό,τι υποδεικνύει η φήμη" },
          text: { en: "The Chora has developed a genuine restaurant culture over the past decade, with several excellent tavernas serving modern Greek food alongside traditional dishes. The best are concentrated on and around the main square and on the quieter lanes north of the bar district. Booking is recommended in July and August.", el: "Το Χωριό έχει αναπτύξει μια πραγματική εστιατορική κουλτούρα την τελευταία δεκαετία, με αρκετές εξαιρετικές ταβέρνες να σερβίρουν σύγχρονο ελληνικό φαγητό δίπλα σε παραδοσιακά πιάτα. Οι καλύτερες είναι συγκεντρωμένες γύρω από την κεντρική πλατεία και στα πιο ήσυχα δρομάκια βόρεια της περιοχής των μπαρ. Κράτηση συνιστάται τον Ιούλιο και Αύγουστο." }
        },
        {
          title: { en: "Fresh seafood at the port", el: "Φρέσκα θαλασσινά στο λιμάνι" },
          text: { en: "The waterfront tavernas at Ormos Iosou serve fresh fish at prices that are considerably more reasonable than in the Chora. The port is a working fishing harbour and the daily catch quality is reliable. Grilled red mullet, sea bream and octopus are staples; the smaller family-run tavernas outperform the larger ones consistently.", el: "Οι ταβέρνες στο λιμάνι στον Όρμο Ιούσου σερβίρουν φρέσκο ψάρι σε τιμές που είναι σημαντικά πιο λογικές από ό,τι στο Χωριό. Το λιμάνι είναι ένα εργαζόμενο ψαράδικο και η ποιότητα της ημερήσιας σύλλησης είναι αξιόπιστη. Ψητός κόκκινος μουρούνι, σαργούρα και χταπόδι είναι βασικά πιάτα; οι μικρότερες οικογενειακές ταβέρνες υπερτερούν στις μεγαλύτερες αξιόπιστα." }
        },
        {
          title: { en: "Loukoumades — the Chora's essential street food", el: "Λουκουμάδες — το απαραίτητο street food του Χωριού" },
          text: { en: "Ios has its own tradition of loukoumades — honey-drenched fried dough — and the long-established stall near the Chora's main square has been serving them for decades. Eaten at midnight after a long evening, they are one of the island's most specific pleasures.", el: "Η Ίος έχει τη δική της παράδοση λουκουμάδων — τηγανισμένου ζυμαριού με μέλι — και το παλιό πωλητήριο κοντά στην κεντρική πλατεία του Χωριού τα σερβίρει εδώ και δεκαετίες. Τα τρως μεσάνυχτα μετά από μακριά βραδιά, και είναι ένα από τα πιο συγκεκριμένα ευχαριστήματα του νησιού." }
        },
        {
          title: { en: "Local Ios wine and thyme honey", el: "Τοπικό κρασί Ίου και μέλι θυμαρίσιο" },
          text: { en: "The island produces small quantities of wine from indigenous varieties — light, aromatic whites and robust reds — and a thyme honey that is among the finest in the Cyclades. Both are available from the food shops in the Chora and from the Saturday morning market at the port. Take them home.", el: "Το νησί παράγει μικρές ποσότητες κρασιού από γηγενή ποικιλία — ελαφρά, αρωματικά λευκά και ισχυρά κόκκινα — και ένα θυμαρίσιο μέλι που είναι ανάμεσα στα πιο καλά στις Κυκλάδες. Και τα δύο είναι διαθέσιμα από τα τρόφιμα στο Χωριό και από την αγορά Σαββατοκύριακου στο λιμάνι. Πάρε τα σπίτι." }
        },
        {
          title: { en: "Breakfast culture in the Chora", el: "Κουλτούρα πρωινού στο Χωριό" },
          text: { en: "Ios has an unusually good breakfast culture — several café-bakeries in the Chora open early and serve fresh pastries, Greek yogurt with local honey, proper espresso and fruit platters. After a night out, breakfast here is a ritual. After an early morning walk to Homer's Tomb, it is a reward.", el: "Η Ίος έχει ασυνήθιστα καλή κουλτούρα πρωινού — αρκετά café-αρτοποιεία στο Χωριό ανοίγουν νωρίς και σερβίρουν φρέσκα παστά, γιαούρτι ελληνικό με τοπικό μέλι, σωστό espresso και πιάτα φρούτων. Μετά από βραδιά έξω, το πρωινό εδώ είναι ένα τελετουργικό. Μετά από πρωινό περίπατο στον Τάφο του Ομήρου, είναι ένα βραβείο." }
        },
        {
          title: { en: "Beach tavernas at Mylopotas and Manganari", el: "Παραλιακές ταβέρνες στον Μυλοποτά και τη Μαγκαναρί" },
          text: { en: "The tavernas at the east end of Mylopotas serve good food alongside beach-bar cocktails; the quality varies but the better ones take their kitchen seriously. At Manganari, the single seasonal taverna serves simple grilled fish and salads that taste considerably better for being eaten on a remote beach with no roads and nothing between you and the horizon.", el: "Οι ταβέρνες στο ανατολικό άκρο του Μυλοποτά σερβίρουν καλό φαγητό δίπλα σε beach-bar κοκτέιλ; η ποιότητα ποικίλλει αλλά οι καλύτερες παίρνουν σοβαρά την κουζίνα τους. Στη Μαγκαναρί, η μοναδική εποχιακή ταβέρνα σερβίρει απλό ψάρι ψητό και σαλάτες που γεύονται σημαντικά καλύτερα γιατί τρώγονται σε μια απομακρυσμένη παραλία χωρίς δρόμους και τίποτα ανάμεσά σου και τον ορίζοντα." }
        }
      ]
    },
    {
      title: { en: "Honest Advice — What to Skip in Ios", el: "Ειλικρινής Συμβουλή — Τι να Αποφύγεις στην Ίο" },
      layout: "list",
      text: {
        en: "✕ **Spending your entire stay on Mylopotas without ever going to the Chora.** The beach is excellent but the Chora — particularly in the early morning and at sunset — is where the island's real character lives. Walking up the marble staircase from the port, exploring the lanes before the day warms up, and sitting at a table above the village with a coffee and a view across the Aegean costs nothing and is an entirely different experience from the beach scene below.\n\n✕ **Dismissing Ios as 'just a party island' without looking further.** The nightlife is real and concentrated and can dominate the experience if you stay in the wrong part of the Chora and keep the wrong hours. But the same island contains Homer's Tomb, the Bronze Age settlement at Skarkos, the wild south coast at Manganari and one of the most beautiful Cycladic villages in the archipelago. Travellers who come with only one of these dimensions in mind miss the others entirely.\n\n✕ **Visiting Manganari only by dirt road.** The road is rough, long and hard on rental vehicles — several car hire companies specifically exclude it in their terms. The daily caïque from the port is faster, more pleasant and arrives directly at the beach. Take the boat.\n\n✕ **Staying in August without booking months in advance.** Ios in late July and August is among the busiest small islands in the Cyclades. Accommodation fills completely; prices are at their highest; the Chora becomes very crowded after midnight. If flexibility is important, June and September offer the same beaches, the same Chora and the same island with dramatically less pressure on every resource.\n\n💡 What nobody tells you: Ios has been quietly evolving for over a decade, and the gap between its reputation and its reality is now wider than at almost any other island in Greece. The travellers who arrive expecting a rowdy package resort and find a stunning hilltop village, an ancient Bronze Age site, a wild south coast and genuinely good restaurants are consistently the ones who leave with the strongest impressions. The island's party reputation has functioned, accidentally, as a filter — keeping away a certain type of visitor and leaving the rest of Ios remarkably underpressured for an island this beautiful, this well-connected and this close to Santorini. In September, when the party season ends and the island returns to something closer to its year-round self, Ios is one of the finest places in the Cyclades.",
        el: "✕ **Να περάσεις ολόκληρη τη διαμονή σου στον Μυλοποτά χωρίς ποτέ να πας στο Χωριό.** Η παραλία είναι εξαιρετική αλλά το Χωριό — ειδικά το πρωί και στη σούσα — είναι εκεί που ζει ο πραγματικός χαρακτήρας του νησιού. Ανεβαίνοντας το σκαλοπάτι μαρμάρου από το λιμάνι, εξερευνώντας τα δρομάκια πριν ζεσταθεί η μέρα, και καθιζώντας σε ένα τραπέζι πάνω από το χωριό με έναν καφέ και θέα στο Αιγαίο δεν κοστίζει τίποτα και είναι εντελώς διαφορετική εμπειρία από την παραλιακή σκηνή παρακάτω.\n\n✕ **Να απορρίψεις την Ίο ως 'απλά νησί γιορτής' χωρίς να κοιτάξεις παραπέρα.** Η νυχτερινή ζωή είναι πραγματική και συγκεντρωμένη και μπορεί να κυριαρχήσει στην εμπειρία αν μείνεις στο λάθος μέρος του Χωριού και κρατήσεις τις λάθος ώρες. Αλλά το ίδιο το νησί περιέχει τον Τάφο του Ομήρου, τον οικισμό της Εποχής του Χαλκού στο Σκάρκο, την άγρια νότια ακτή στη Μαγκαναρί και ένα από τα πιο όμορφα κυκλαδίτικα χωριά στο αρχιπέλαγος. Ταξιδιώτες που έρχονται με μόνο μία από αυτές τις διαστάσεις στο μυαλό χάνουν τις άλλες εντελώς.\n\n✕ **Να επισκεφθείς τη Μαγκαναρί μόνο με χωμάτινο δρόμο.** Ο δρόμος είναι σκληρός, μακρύς και δύσκολος για ενοικιαζόμενα οχήματα — αρκετές εταιρείες ενοικίασης αυτοκινήτων τον αποκλείουν συγκεκριμένα στους όρους τους. Το ημερήσιο καΐκι από το λιμάνι είναι πιο γρήγορο, πιο ευχάριστο και φτάνει απευθείας στην παραλία. Πάρε το πλοίο.\n\n✕ **Να μείνεις τον Αύγουστο χωρίς να κλείσεις μήνες εκ των προτέρων.** Η Ίος τον τέλος Ιουλίου και τον Αύγουστο είναι ανάμεσα στα πιο πολυσύχναστα μικρά νησιά στις Κυκλάδες. Τα καταλύματα γεμίζουν εντελώς; οι τιμές είναι στο υψηλότερο σημείο τους; το Χωριό γίνεται πολύ γεμάτο μετά τα μεσάνυχτα. Αν η ευελιξία είναι σημαντική, ο Ιούνιος και ο Σεπτέμβριος προσφέρουν τις ίδιες παραλίες, το ίδιο Χωριό και το ίδιο νησί με δραματικά λιγότερη πίεση σε κάθε πόρο.\n\n💡 Αυτό που δε σου λέει κανείς: Η Ίος εξελίσσεται σιωπηλά εδώ και πάνω από μια δεκαετία, και το κενό μεταξύ φήμης και πραγματικότητάς της είναι τώρα πιο ευρύ από σχεδόν οποιοδήποτε άλλο νησί στην Ελλάδα. Οι ταξιδιώτες που φτάνουν περιμένοντας ένα θορυβώδες πακέτο θέρετρο και βρίσκουν ένα εντυπωσιακό ορεινό χωριό, ένα αρχαίο μέρο Εποχής Χαλκού, μια άγρια νότια ακτή και πραγματικά καλά εστιατόρια είναι σταθερά αυτοί που φεύγουν με τις πιο ισχυρές εντυπώσεις. Η φήμη γιορτής του νησιού έχει λειτουργήσει, τυχαία, ως φίλτρο — κρατώντας μακριά ένα συγκεκριμένο τύπο επισκέπτη και αφήνοντας τα υπόλοιπα της Ίου αξιοσημείωτα χωρίς πίεση για ένα νησί τόσο όμορφο, τόσο καλά συνδεδεμένο και τόσο κοντά στη Σαντορίνη. Τον Σεπτέμβριο, όταν η σεζόν γιορτής τελειώνει και το νησί επιστρέφει σε κάτι πιο κοντά στον ετήσιο εαυτό του, η Ίος είναι ένα από τα πιο καλά μέρη στις Κυκλάδες."
      }
    },
    {
      title: { en: "How to visit Ios", el: "Πώς να επισκεφθείς την Ίο" },
      layout: "grid",
      items: [
        {
          title: { en: "Getting there by ferry", el: "Πώς να φτάσεις με πλοίο" },
          text: { en: "Ios is well-connected by ferry from Piraeus (4–5 hours conventional, 3 hours high-speed), from Rafina (3–4 hours), and from Santorini (40 minutes), Naxos (1 hour) and Paros (1.5 hours). High-speed services run frequently in summer. The port is compact and all connections are from one quay.", el: "Η Ίος είναι καλά συνδεδεμένη με πλοίο από Πειραιά (4–5 ώρες συμβατικό, 3 ώρες γρήγορο), από Ραφίνα (3–4 ώρες), και από Σαντορίνη (40 λεπτά), Νάξο (1 ώρα) και Πάρο (1.5 ώρες). Τα γρήγορα πλοία τρέχουν συχνά το καλοκαίρι. Το λιμάνι είναι προσβάσιμο και όλες οι συνδέσεις είναι από ένα προβλήτα." }
        },
        {
          title: { en: "Getting around the island", el: "Μετακίνηση στο νησί" },
          text: { en: "The port, Chora and Mylopotas are connected by a regular bus service that runs until late in summer — one of the few islands where the bus is a genuinely practical option for the main triangle. For Homer's Tomb, Manganari, Agia Theodoti and the east coast beaches, a rental car or scooter is needed. ATV hire is popular but requires care on the rougher tracks.", el: "Το λιμάνι, το Χωριό και ο Μυλοποτάς συνδέονται με τακτική λεωφορειακή υπηρεσία που λειτουργεί μέχρι αργά το καλοκαίρι — ένα απο τα λίγα νησιά όπου το λεωφορείο είναι πραγματικά πρακτική επιλογή για το κύριο τρίγωνο. Για τον Τάφο του Ομήρου, τη Μαγκαναρί, την Αγία Θεοδότη και τις παραλίες της ανατολικής ακτής, χρειάζεται ενοικιαζόμενο αυτοκίνητο ή scooter. Το ATV είναι δημοφιλές αλλά απαιτεί προσοχή στους πιο σκληρούς δρόμους." }
        },
        {
          title: { en: "How many days?", el: "Πόσες μέρες;" },
          text: { en: "Three days covers the Chora, Mylopotas, Homer's Tomb and a caïque to Manganari comfortably. Four to five days allows a day trip to Folegandros or Sikinos, more beach exploration and a slower pace. Ios is an island that rewards not rushing — the best experiences here are found by wandering without a plan.", el: "Τρεις μέρες καλύπτουν το Χωριό, τον Μυλοποτά, τον Τάφο του Ομήρου και ένα καΐκι στη Μαγκαναρί άνετα. Τέσσερις πέντε μέρες επιτρέπουν μια ημερήσια εκδρομή στον Φολέγανδρο ή τη Σίκινο, περισσότερη εξερεύνηση παραλιών και πιο αργό ρυθμό. Η Ίος είναι ένα νησί που ανταμείβει το να μην τρέχεις — οι καλύτερες εμπειρίες εδώ βρίσκονται περνώντας χωρίς σχέδιο." }
        },
        {
          title: { en: "The port–Chora–Mylopotas triangle", el: "Το τρίγωνο λιμάνι–Χωριό–Μυλοποτάς" },
          text: { en: "These three points form the practical axis of daily life on Ios. The bus runs the triangle reliably until at least 1am in summer. The marble staircase between the port and the Chora takes about 15 minutes on foot uphill and is worth doing at least once — the views over the bay from halfway up are exceptional.", el: "Αυτά τα τρία σημεία σχηματίζουν τον πρακτικό άξονα της καθημερινής ζωής στην Ίο. Το λεωφορείο τρέχει το τρίγωνο αξιόπιστα μέχρι τουλάχιστον 1πμ το καλοκαίρι. Το σκαλοπάτι μαρμάρου μεταξύ λιμανιού και Χωριού παίρνει περίπου 15 λεπτά με τα πόδια ανοιβάσιμο και αξίζει να το κάνεις τουλάχιστον μία φορά — οι θέες πάνω από τον κόλπο από τα μισά είναι εξαιρετικές." }
        },
        {
          title: { en: "The Meltemi in summer", el: "Ο μελτέμι το καλοκαίρι" },
          text: { en: "The meltemi blows from the north in July and August, affecting the north-facing coast and occasionally making the sea at Mylopotas choppy. South-facing beaches — Manganari in particular — are sheltered. On very windy days, the caïque service to Manganari may not run; check at the port the night before.", el: "Ο μελτέμι φυσάει από βορρά τον Ιούλιο και τον Αύγουστο, επηρεάζοντας τη βόρεια ακτή και κάνοντας κάποτε τη θάλασσα στον Μυλοποτά κυματώδη. Οι νότιες παραλίες — η Μαγκαναρί ιδιαίτερα — είναι προστατευμένες. Σε πολύ αερώδεις μέρες, η υπηρεσία καΐκι στη Μαγκαναρί μπορεί να μην λειτουργήσει; ρώτα στο λιμάνι την προηγούμενη βραδιά." }
        },
        {
          title: { en: "Noise and sleep", el: "Θόρυβος και ύπνος" },
          text: { en: "If you are staying in the Chora and want to sleep before 3am, choose accommodation in the lower Chora or on the Chora-Mylopotas road rather than the bar district. If you are staying at Mylopotas, the beach-side hotels furthest from the main cluster of bars are significantly quieter. The port is quiet at night.", el: "Αν μένεις στο Χωριό και θέλεις να κοιμηθείς πριν τις 3πμ, επίλεξε κατάλυμα στο κάτω Χωριό ή στον δρόμο Χωριού-Μυλοποτά αντί για την περιοχή των μπαρ. Αν μένεις στον Μυλοποτά, τα παραλιακά ξενοδοχεία πιο μακριά από το κύριο συγκρότημα μπαρ είναι σημαντικά πιο ήσυχα. Το λιμάνι είναι ήσυχο τη νύχτα." }
        },
        {
          title: { en: "Island hopping from Ios", el: "Island hopping από την Ίο" },
          text: { en: "Ios's position in the southern Cyclades makes it an excellent hopping base. Santorini (40 min), Naxos (1 hr), Folegandros (1.5 hrs), Sikinos (1 hr) and Paros (1.5 hrs) are all easily reached. High-speed ferry schedules change each season — check current timetables at the port information office or online before planning day trips.", el: "Η θέση της Ίου στις νότιες Κυκλάδες την κάνει εξαιρετική βάση island hopping. Σαντορίνη (40 λεπτά), Νάξος (1 ώρα), Φολέγανδρος (1.5 ώρες), Σίκινος (1 ώρα) και Πάρος (1.5 ώρες) είναι όλα εύκολα προσβάσιμα. Οι χρονοδιαγράμματα γρήγορων πλοίων αλλάζουν κάθε σεζόν — δες τα τρέχοντα χρονοδιαγράμματα στο γραφείο πληροφοριών λιμανιού ή online πριν σχεδιάσεις ημερήσιες εκδρομές." }
        },
        {
          title: { en: "Cash and connectivity", el: "Μετρητά και σύνδεση" },
          text: { en: "ATMs are available in both the port and the Chora. Mobile signal is good throughout the main settled areas and at Mylopotas. The remoter beaches — Manganari, Psathi — have limited or no signal. Most restaurants and accommodation accept cards; some smaller cafés and the loukoumades stall are cash-preferred.", el: "ATM υπάρχουν και στο λιμάνι και στο Χωριό. Το σήμα κινητού είναι καλό σε όλες τις κύριες κατοικημένες περιοχές και στον Μυλοποτά. Οι πιο απομακρυσμένες παραλίες — Μαγκαναρί, Ψαθί — έχουν περιορισμένο ή κανένα σήμα. Τα περισσότερα εστιατόρια και καταλύματα δέχονται κάρτα; κάποια μικρότερα café και ο πωλητής λουκουμάδων προτιμούν μετρητά." }
        }
      ]
    },
    {
      title: { en: "Frequently asked questions about Ios", el: "Συχνές ερωτήσεις για την Ίο" },
      layout: "faq",
      items: [
        {
          title: { en: "Is Ios only for young party-goers?", el: "Η Ίος είναι μόνο για νέους γιορταστές;" },
          text: { en: "No — and this is perhaps the most important thing to understand about Ios. The island's nightlife is concentrated in a specific part of the upper Chora and operates between roughly 11pm and 4am. Outside that zone and those hours, Ios is a beautiful Cycladic island with excellent beaches, an extraordinary hilltop village, a wild south coast and genuine historical depth. Couples, older travellers, families and cultural visitors all spend very successful holidays here — provided they choose the right accommodation and understand that the party scene is one option among many, not the defining feature of the entire island.", el: "Όχι — και αυτό είναι ίσως το πιο σημαντικό που πρέπει να καταλάβεις για την Ίο. Η νυχτερινή ζωή του νησιού είναι συγκεντρωμένη σε συγκεκριμένο τμήμα του πάνω Χωριού και λειτουργεί μεταξύ περίπου 11μμ και 4πμ. Εκτός αυτής της ζώνης και αυτών των ωρών, η Ίος είναι ένα όμορφο κυκλαδίτικο νησί με εξαιρετικές παραλίες, ένα εξαιρετικό ορεινό χωριό, μια άγρια νότια ακτή και πραγματικό ιστορικό βάθος. Ζευγάρια, μεγαλύτεροι ταξιδιώτες, οικογένειες και πολιτιστικοί επισκέπτες περνούν πολύ επιτυχημένες διακοπές εδώ — εφόσον επιλέξουν το σωστό κατάλυμα και καταλάβουν ότι η σκηνή γιορτής είναι μία επιλογή ανάμεσα σε πολλές, όχι το χαρακτηριστικό γνώρισμα ολόκληρου του νησιού." }
        },
        {
          title: { en: "How does Ios compare to Santorini?", el: "Πώς συγκρίνεται η Ίος με τη Σαντορίνη;" },
          text: { en: "Ios and Santorini are an hour apart by high-speed ferry and profoundly different in character. Santorini has the caldera, the iconic architecture, the international luxury hotels and the crowds that come with all of those things — particularly in July and August. Ios has better beaches, a more authentic Cycladic village character, dramatically lower prices and significantly less pressure on every resource. Many travellers who find Santorini's peak season overwhelming base themselves on Ios instead and make Santorini a day trip — arriving early, staying for the sunset, returning in the evening. This is one of the most practical combinations in the southern Cyclades.", el: "Η Ίος και η Σαντορίνη απέχουν μία ώρα με γρήγορο πλοίο και είναι βαθιά διαφορετικές σε χαρακτήρα. Η Σαντορίνη έχει την καλντέρα, την εικονική αρχιτεκτονικά, τα διεθνή πολυτελή ξενοδοχεία και τα πλήθη που έρχονται με όλα αυτά — ειδικά τον Ιούλιο και Αύγουστο. Η Ίος έχει καλύτερες παραλίες, πιο αυθεντικό κυκλαδίτικο χαρακτήρα χωριού, драмατικά πιο χαμηλές τιμές και σημαντικά λιγότερη πίεση σε κάθε πόρο. Πολλοί ταξιδιώτες που βρίσκουν την αιχμή σεζόν της Σαντορίνης υπερβολική βάζουν τη βάση τους στην Ίο αντί και κάνουν τη Σαντορίνη ημερήσια εκδρομή — φτάνοντας νωρίς, μένοντας για τη σούσα, γυρίζοντας το βράδυ. Αυτός είναι ένας από τους πιο πρακτικούς συνδυασμούς στις νότιες Κυκλάδες." }
        },
        {
          title: { en: "Is Homer really buried on Ios?", el: "Ο Όμηρος είναι πραγματικά θαμμένος στην Ίο;" },
          text: { en: "The tradition is ancient — Thucydides, Pliny, Pindar and other ancient sources all record the belief that Homer died on Ios and is buried on its northern tip. Modern archaeology cannot confirm or deny this. The site on the northern ridge contains a reconstructed stone enclosure that has been venerated since antiquity and which is referenced in ancient inscriptions found on the island. Whether or not the tomb is genuinely Homer's, the site is extraordinary in its setting and its symbolic resonance — and the Archaeological Museum in the Chora provides the full context of the tradition and the evidence.", el: "Η παράδοση είναι αρχαία — Θουκυδίδης, Πλίνιος, Πίνδαρος και άλλες αρχαίες πηγές καταγράφουν την πίστη ότι ο Όμηρος πέθανε στην Ίο και είναι θαμμένος στο βόρειο άκρο της. Η σύγχρονη αρχαιολογία δεν μπορεί να επιβεβαιώσει ή να αρνηθεί αυτό. Ο χώρος στη βόρεια ράχη περιέχει ένα ανακατασκευασμένο περίβλητα πέτρινο που λατρεύεται από την αρχαιότητα και αναφέρεται σε αρχαίες επιγραφές που βρέθηκαν στο νησί. Αν ο τάφος είναι πραγματικά του Ομήρου, ο χώρος είναι εξαιρετικός στο περιβάλλον του και τη συμβολική του αντίληψη — και το Αρχαιολογικό Μουσείο στο Χωριό παρέχει πλήρη πλαίσιο της παράδοσης και των στοιχείων." }
        },
        {
          title: { en: "What is the best way to get to Manganari beach?", el: "Ποιος είναι ο καλύτερος τρόπος να φτάσεις στην παραλία Μαγκαναρί;" },
          text: { en: "The daily caïque from the port is by far the best option. It departs in the morning and returns in the late afternoon, and the journey by sea along the west and south coast of Ios is scenic and enjoyable in its own right. The alternative — a long dirt road from the Chora — requires a robust vehicle (many hire companies exclude the Manganari track in their terms and conditions) and takes about 40 minutes each way. Several rental ATVs have been damaged on this track. Take the boat.", el: "Το ημερήσιο καΐκι από το λιμάνι είναι μακράν η καλύτερη επιλογή. Φεύγει το πρωί και γυρίζει το απόγευμα, και το ταξίδι με θάλασσα κατά μήκος της δυτικής και νότιας ακτής της Ίου είναι θεαματικό και ευχάριστο από μόνο του. Η εναλλακτική — ένας μακρύς χωμάτινος δρόμος από το Χωριό — απαιτεί ανθεκτικό όχημα (πολλές εταιρείες ενοικίασης αποκλείουν τον δρόμο Μαγκαναρί στους όρους τους) και παίρνει περίπου 40 λεπτά ανά δρόμο. Αρκετά ATV ενοικίασης έχουν πάθει ζημιά σε αυτόν τον δρόμο. Πάρε το πλοίο." }
        },
        {
          title: { en: "When is the best time to visit Ios for beaches without crowds?", el: "Πότε είναι η καλύτερη εποχή να επισκεφθείς την Ίο για παραλίες χωρίς πλήθος;" },
          text: { en: "June and September are the ideal months. The sea is fully swimmable (from late May at Mylopotas, which is south-facing and warms early), the beaches are active without being congested, and the island has atmosphere without the August intensity. September in particular — from the 10th onward — sees Mylopotas significantly emptier while remaining warm, and Manganari effectively deserted. The water in September is at its warmest of the year.", el: "Ο Ιούνιος και ο Σεπτέμβριος είναι οι ιδανικοί μήνες. Η θάλασσα είναι πλήρως κολύψιμη (από τέλος Μαΐου στον Μυλοποτά, που κοιτά νότιο και ζεσταίνει νωρίς), οι παραλίες είναι ενεργές χωρίς να είναι γεμάτες, και το νησί έχει ατμόσφαιρα χωρίς την αιχμή Αυγούστου. Ο Σεπτέμβριος ιδιαίτερα — από τις 10 και μετά — βλέπει τον Μυλοποτά σημαντικά πιο άδειο παραμένοντας ζεστός, και τη Μαγκαναρί ουσιαστικά εγκαταλελειμμένη. Το νερό τον Σεπτέμβριο είναι στο πιο ζεστό του χρόνου." }
        },
        {
          title: { en: "Can I visit Santorini as a day trip from Ios?", el: "Μπορώ να επισκεφθώ τη Σαντορίνη ως ημερήσια εκδρομή από την Ίο;" },
          text: { en: "Yes — and many experienced Cyclades travellers recommend this as the best way to experience Santorini. The high-speed ferry takes approximately 40 minutes. Leaving Ios in the morning, spending the day in Oia and Fira, watching the sunset from the caldera edge and returning on the evening ferry gives you Santorini's most iconic experience without paying Santorini accommodation prices. It also means you avoid waking up to Santorini's August crowds and can retreat each evening to the considerably more relaxed atmosphere of Ios.", el: "Ναι — και πολλοί έμπειροι ταξιδιώτες Κυκλάδων συνιστούν αυτό ως τον καλύτερο τρόπο να βιώσεις τη Σαντορίνη. Το γρήγορο πλοίο παίρνει περίπου 40 λεπτά. Φεύγοντας την Ίο το πρωί, περνώντας τη μέρα στην Οία και τη Φηρά, παρακολουθώντας τη σούσα από την άκρη της καλντέρας και γυρίζοντας με το βραδινό πλοίο σου δίνει τη πιο εικονική εμπειρία της Σαντορίνης χωρίς να πληρώσεις τιμές καταλύματος Σαντορίνης. Σημαίνει επίσης ότι αποφεύγεις να ξυπνήσεις στα πλήθη Αυγούστου της Σαντορίνης και μπορείς να υποχωρήσεις κάθε βράδυ στη πολύ πιο χαλαρή ατμόσφαιρα της Ίου." }
        },
        {
          title: { en: "Is Ios good in September and October?", el: "Η Ίος είναι καλή τον Σεπτέμβριο και Οκτώβριο;" },
          text: { en: "September is arguably the finest month on Ios. The sea is at its warmest, the beaches are at their quietest since May, the Chora is peaceful and beautiful in the evenings without the high-season energy, and the restaurants are operating at their best. October is quieter still — some beach facilities and bars close, but the core of the island remains open and the autumn light on the Chora's whitewashed architecture is exceptional. For travellers who want Ios's beauty without its summer intensity, September is the month.", el: "Ο Σεπτέμβριος είναι ενδεχομένως ο καλύτερος μήνας στην Ίο. Η θάλασσα είναι στο πιο ζεστό, οι παραλίες είναι στο πιο ήσυχο από τον Μάιο, το Χωριό είναι ήσυχο και όμορφο τις βραδιές χωρίς την ενέργεια της αιχμής σεζόν, και τα εστιατόρια λειτουργούν στο καλύτερό τους. Ο Οκτώβριος είναι ακόμα πιο ήσυχος — κάποιες παραλιακές εγκαταστάσεις και μπαρ κλείνουν, αλλά ο πυρήνας του νησιού παραμένει ανοιχτός και το φως του φθινοπώρου στην λευκή αρχιτεκτονικά του Χωριού είναι εξαιρετικό. Για ταξιδιώτες που θέλουν την ομορφιά της Ίου χωρίς την καλοκαιρινή της ένταση, ο Σεπτέμβριος είναι ο μήνας." }
        }
      ]
    }
  ],
};