import type { Localized, LocalizedList } from "./content";

export type DestinationDetail = {
  overview: Localized;
  pageIncludes: LocalizedList;
  perfectFor: LocalizedList;
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
      el: "Μύκονος: πέρα από το πάρτι, ένα νησί με ιστορία, θάλασσα και “κρυφές” γωνιές. Η Μύκονος είναι από τους προορισμούς που όλοι νομίζουν ότι ξέρουν, πριν καν πατήσουν το πόδι τους εκεί. Εικόνες από κατάλευκα σοκάκια, ανεμόμυλους πάνω από τη θάλασσα, κοκτέιλ στο ηλιοβασίλεμα και beach clubs που παίζουν μουσική μέχρι αργά. Ναι, όλα αυτά υπάρχουν — και μάλιστα σε υψηλή ένταση. Αλλά η Μύκονος έχει κι ένα άλλο πρόσωπο: αυθεντικές παραλίες χωρίς φασαρία, ένα εσωτερικό χωριό που σε “γυρίζει” σε παλιές Κυκλάδες, μουσεία που εξηγούν γιατί αυτό το νησί έγινε πύλη στο Αιγαίο, και (το μεγάλο ατού) τη Δήλο σε απόσταση αναπνοής — έναν από τους σημαντικότερους αρχαιολογικούς τόπους της Μεσογείου. Αν θες να γράψεις “Μύκονος” στην ταξιδιωτική σου λίστα και να το κάνεις σωστά, το μυστικό είναι να τη δεις σαν νησί πολλών ταχυτήτων: λίγη κοσμικότητα για το vibe, λίγη ησυχία για ανάσα, και λίγη ιστορία για να φύγεις με κάτι πιο ουσιαστικό από φωτογραφίες."
    },
    pageIncludes: {
      en: [
        "Cosmopolitan Chora",
        "Sacred Delos",
        "Beaches for every taste",
        "Cycladic gastronomy"
      ],
      el: [
        "Η κοσμοπολίτικη Χώρα",
        "Η ιερή Δήλος",
        "Παραλίες για κάθε γούστο",
        "Κυκλαδίτικη γαστρονομία"
      ]
    },
    perfectFor: {
      en: [
        "Party lovers",
        "Couples and friends",
        "Luxury seekers",
        "History explorers (Delos)"
      ],
      el: [
        "Λάτρεις των parties",
        "Ζευγάρια και φίλους",
        "Όσους αναζητούν πολυτέλεια",
        "Εξερευνητές της ιστορίας (Δήλος)"
      ]
    }
  },
  kefalonia: {
    overview: {
      en: "Kefalonia is one of the most rewarding islands for travelers who want more than a simple beach holiday. A well-planned stay here can mix dramatic coastal views, boat excursions, turquoise waters, traditional villages and relaxed local culture in a single experience. This page presents a travel-style overview of what makes Kefalonia special and what visitors can expect when exploring the island.",
      el: "Η Κεφαλονιά είναι ένα από τα πιο ξεχωριστά νησιά για ταξιδιώτες που θέλουν κάτι περισσότερο από απλές διακοπές σε παραλίες. Μια καλά οργανωμένη διαμονή εδώ μπορεί να συνδυάσει εντυπωσιακές ακτογραμμές, βαρκάδες, τιρκουάζ νερά, παραδοσιακά χωριά και χαλαρή τοπική κουλτούρα σε μία ολοκληρωμένη εμπειρία. Αυτή η σελίδα παρουσιάζει ταξιδιωτικά τι κάνει την Κεφαλονιά τόσο ιδιαίτερη και τι μπορεί να περιμένει ο επισκέπτης όταν την εξερευνά.",
    },
    pageIncludes: {
      en: [
        "Iconic beach and viewpoint stops",
        "Village and harbor exploration",
        "Scenic island driving routes",
        "Ideas for boat and cave experiences",
      ],
      el: [
        "Στάσεις σε εμβληματικές παραλίες και σημεία θέας",
        "Εξερεύνηση χωριών και λιμανιών",
        "Γραφικές διαδρομές στο νησί",
        "Ιδέες για βαρκάδες και εμπειρίες σε σπήλαια",
      ],
    },
    perfectFor: {
      en: [
        "Couples and relaxed island travelers",
        "Visitors who love beaches and scenery",
        "Road trip style holidays",
        "Travelers looking for authentic Ionian atmosphere",
      ],
      el: [
        "Ζευγάρια και ταξιδιώτες που αγαπούν τη χαλάρωση",
        "Επισκέπτες που αγαπούν παραλίες και τοπία",
        "Διακοπές με λογική road trip",
        "Ταξιδιώτες που αναζητούν αυθεντική ιονική ατμόσφαιρα",
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
};