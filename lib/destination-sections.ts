import type { Localized } from "./content";

export type DestinationSection = {
  title: Localized;
  text: Localized;
};

export const destinationSections: Record<string, DestinationSection[]> = {
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

  crete: [
    {
      title: {
        en: "A destination with many travel layers",
        el: "Ένας προορισμός με πολλά ταξιδιωτικά επίπεδα",
      },
      text: {
        en: "Crete is not a one-style destination. It can feel historical, coastal, rural and culinary all at once. This makes destination content especially valuable, because good planning helps visitors understand how much variety the island can offer in a single trip.",
        el: "Η Κρήτη δεν είναι προορισμός ενός μόνο τύπου. Μπορεί να είναι ταυτόχρονα ιστορική, παραθαλάσσια, αγροτική και γαστρονομική. Γι’ αυτό το περιεχόμενο για τον προορισμό έχει ιδιαίτερη αξία, αφού ο σωστός σχεδιασμός βοηθά τον επισκέπτη να καταλάβει πόση ποικιλία μπορεί να προσφέρει το νησί μέσα σε ένα μόνο ταξίδι.",
      },
    },
    {
      title: {
        en: "History, landscapes and hospitality",
        el: "Ιστορία, τοπία και φιλοξενία",
      },
      text: {
        en: "The most memorable stays in Crete often work because they combine contrast: ancient sites and modern villages, rugged mountains and relaxed beaches, local tavernas and old towns full of character. The island feels generous, textured and full of stories.",
        el: "Οι πιο δυνατές διαμονές στην Κρήτη λειτουργούν συχνά επειδή συνδυάζουν αντιθέσεις: αρχαίους χώρους και σύγχρονα χωριά, άγρια βουνά και ήρεμες παραλίες, τοπικές ταβέρνες και παλιές πόλεις γεμάτες χαρακτήρα. Το νησί μοιάζει πλούσιο, πολυεπίπεδο και γεμάτο ιστορίες.",
      },
    },
    {
      title: {
        en: "Great for full and varied itineraries",
        el: "Ιδανική για γεμάτα και πολυδιάστατα προγράμματα",
      },
      text: {
        en: "Crete supports travel content that feels broad and satisfying. Visitors can imagine a whole day or even multiple days of discovery without repeating the same mood. That is why Crete works so well as a featured destination within a Greece travel portal.",
        el: "Η Κρήτη υποστηρίζει ταξιδιωτικό περιεχόμενο που μοιάζει πλούσιο και ολοκληρωμένο. Ο επισκέπτης μπορεί να φανταστεί μια ολόκληρη μέρα ή ακόμη και πολλές μέρες εξερεύνησης χωρίς να επαναλαμβάνεται η ίδια εμπειρία. Γι’ αυτό η Κρήτη λειτουργεί τόσο καλά ως featured προορισμός μέσα σε ένα travel portal για την Ελλάδα.",
      },
    },
  ],
};