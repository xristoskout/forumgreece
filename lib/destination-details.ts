import type { Localized, LocalizedList } from "./content";

export type DestinationDetail = {
  overview: Localized;
  pageIncludes: LocalizedList;
  perfectFor: LocalizedList;
};

export const destinationDetails: Record<string, DestinationDetail> = {
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