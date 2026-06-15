import type { Localized, LocalizedList } from "./content";

export type ExperienceLanding = {
  slug: string;
  title: Localized;
  description: Localized;
  overview: Localized;
  highlights: LocalizedList;
  highlightReasons: LocalizedList;
  image?: string;
  seo?: {
    title: Localized;
    description: Localized;
  };
  customH1?: Localized;
  customIntro?: Localized;
  recommendedIntro?: Localized;
  moreToursIntro?: Localized;
  whatToBook?: {
    title: Localized;
    sections: { title: Localized; content: Localized }[];
  };
  planningTips?: {
    title: Localized;
    tips: LocalizedList;
  };
  faq?: {
    title: Localized;
    questions: { question: Localized; answer: Localized }[];
  };
  internalCta?: {
    title: Localized;
    text: Localized;
    linkHref: string;
    linkLabel: Localized;
  };
};

export type ExperienceBusiness = {
  slug: string;
  landingSlug: string;
  /** Extra travel-info page slug this business should appear on (in addition to landingSlug). */
  travelInfoSlug?: string;
  name: string;
  category: Localized;
  place: string;
  info: Localized;
  image: string;
  href: string;
  badge?: string;
  overview: Localized;
  highlights: LocalizedList;
  perfectFor: LocalizedList;
  ctaLabel: Localized;
  phone?: string;
  email?: string;
  website?: string;
  youtube?: string;
  description?: Localized;
  services?: LocalizedList;
  routes?: LocalizedList;
  galleryCount?: number;
  story?: Localized;
  practicalInfo?: LocalizedList;
  mapQuery?: string;
  mapIframe?: string;
  galleryImages?: string[];
};

export const experienceLandings: ExperienceLanding[] = [
  {
    slug: "mykonos-tours",
    seo: {
      title: {
        en: "Mykonos Tours & Experiences | Delos Trips, Beaches & Luxury Boat Tours",
        el: "Εκδρομές & Εμπειρίες στη Μύκονο | Δήλος, Παραλίες & Luxury Boat Tours",
      },
      description: {
        en: "Explore the best Mykonos tours and experiences, from Delos island day trips and luxury boat tours to beach hopping, Mykonos Town walks, and sunset cruises.",
        el: "Ανακαλύψτε τις καλύτερες εκδρομές στη Μύκονο: από ημερήσιες στη Δήλο και luxury boat tours μέχρι βόλτες στη Χώρα, παραλίες και κρουαζιέρες στο ηλιοβασίλεμα.",
      },
    },
    title: {
      en: "Mykonos Tours & Experiences",
      el: "Εκδρομές & Εμπειρίες στη Μύκονο",
    },
    description: {
      en: "Mykonos combines cosmopolitan island life, iconic beaches, whitewashed streets, luxury experiences, and easy access to the sacred island of Delos.",
      el: "Η Μύκονος συνδυάζει την κοσμοπολίτικη ζωή, τις εμβληματικές παραλίες, τα κυκλαδίτικα σοκάκια, τις luxury εμπειρίες και την άμεση πρόσβαση στο ιερό νησί της Δήλου.",
    },
    overview: {
      en: "Mykonos is famous for beach clubs, nightlife, and glamorous summer energy. But beyond the famous party scene, the island has quiet morning streets, small chapels, windmills, traditional houses, and one of the most important archaeological sites in Greece just a short boat ride away.\n\nMykonos tours help you see the island with more balance. Whether you are visiting for the beaches, the shopping, or the history of Delos, there are plenty of ways to experience the island beyond the usual postcards.",
      el: "Η Μύκονος είναι διάσημη για τα beach clubs και την έντονη ζωή της. Όμως, πέρα από τη λάμψη, το νησί έχει ήσυχα πρωινά στα σοκάκια, μικρά ξωκλήσια, μύλους και έναν από τους σημαντικότερους αρχαιολογικούς χώρους της Ελλάδας σε απόσταση αναπνοής.\n\nΟι εκδρομές στη Μύκονο σας βοηθούν να δείτε την ισορροπημένη πλευρά του νησιού. Είτε έρχεστε για τις παραλίες, είτε για την ιστορία της Δήλου, υπάρχουν πολλοί τρόποι να ζήσετε το νησί πέρα από τις κλασικές φωτογραφίες.",
    },
    highlights: {
      en: ["Delos Island Tours", "Luxury Boat Trips", "Mykonos Town Walks", "Sunset Cruises"],
      el: ["Εκδρομές στη Δήλο", "Luxury Boat Trips", "Βόλτες στη Χώρα", "Κρουαζιέρες Ηλιοβασιλέματος"],
    },
    highlightReasons: {
      en: [
        "Explore the sacred birthplace of Apollo and Artemis.",
        "Swim in secluded coves and clear turquoise waters.",
        "Discover the hidden alleys and history of Mykonos Town.",
        "Watch the sunset from the sea with a view of Little Venice.",
      ],
      el: [
        "Εξερευνήστε το ιερό νησί, γενέτειρα του Απόλλωνα και της Άρτεμης.",
        "Κολυμπήστε σε απομονωμένους κόλπους με τυρκουάζ νερά.",
        "Ανακαλύψτε τα κρυφά σοκάκια και την ιστορία της Χώρας.",
        "Δείτε το ηλιοβασίλεμα από τη θάλασσα με θέα τη Μικρή Βενετία.",
      ],
    },
    image: "/images/mykonos.webp",
    whatToBook: {
      title: { en: "Best things to do in Mykonos", el: "Τα καλύτερα πράγματα να κάνετε στη Μύκονο" },
      sections: [
        {
          title: { en: "Delos Island Tours", el: "Εκδρομές στη Δήλο" },
          content: {
            en: "Delos is one of the most important archaeological sites in Greece. A guided tour helps you understand the ruins, temples, and mosaics of this sacred ancient center.",
            el: "Η Δήλος είναι ένας από τους σημαντικότερους αρχαιολογικούς χώρους της Ελλάδας. Μια ξενάγηση θα σας βοηθήσει να κατανοήσετε τους ναούς και τα ψηφιδωτά αυτού του αρχαίου κέντρου.",
          },
        },
        {
          title: { en: "Luxury Boat Trips", el: "Luxury Boat Trips" },
          content: {
            en: "A boat day lets you see the island from the water, swim in clear coves like Rhenia, and visit beaches without the crowds. Private and small-group options are available.",
            el: "Μια μέρα με σκάφος σας επιτρέπει να δείτε το νησί από το νερό, να κολυμπήσετε στη Ρήνεια και να επισκεφθείτε παραλίες μακριά από την πολυκοσμία.",
          },
        },
        {
          title: { en: "Mykonos Town Walks", el: "Βόλτες στη Χώρα Μυκόνου" },
          content: {
            en: "Explore the narrow white streets of Chora, visit Little Venice and the windmills, and discover the stories behind the island's most famous landmarks.",
            el: "Εξερευνήστε τα στενά λευκά σοκάκια της Χώρας, επισκεφθείτε τη Μικρή Βενετία και τους Μύλους, και ανακαλύψτε την ιστορία πίσω από τα εμβληματικά ορόσημα.",
          },
        },
        {
          title: { en: "Beaches & Beach Clubs", el: "Παραλίες & Beach Clubs" },
          content: {
            en: "From the famous party beaches to quieter swimming spots, a beach tour can help you experience the different moods of the Mykonos coastline.",
            el: "Από τις διάσημες κοσμοπολίτικες παραλίες μέχρι τις πιο ήσυχες γωνιές, ένα beach tour θα σας δείξει όλες τις πτυχές της ακτογραμμής.",
          },
        },
      ],
    },
    faq: {
      title: { en: "Frequently Asked Questions", el: "Συχνές Ερωτήσεις" },
      questions: [
        {
          question: { en: "What are the best tours in Mykonos?", el: "Ποιες είναι οι καλύτερες εκδρομές στη Μύκονο;" },
          answer: {
            en: "The top experiences include Delos island trips, luxury boat tours, beach cruises, and walking tours of Mykonos Town.",
            el: "Οι κορυφαίες εμπειρίες περιλαμβάνουν επισκέψεις στη Δήλο, luxury boat tours, κρουαζιέρες σε παραλίες και περιπάτους στη Χώρα.",
          },
        },
        {
          question: { en: "Is Delos worth visiting?", el: "Αξίζει η επίσκεψη στη Δήλο;" },
          answer: {
            en: "Yes, it is one of the world's most significant open-air museums. A guided tour is highly recommended to fully appreciate the history.",
            el: "Ναι, είναι ένα από τα σημαντικότερα υπαίθρια μουσεία του κόσμου. Η ξενάγηση συστήνεται ανεπιφύλακτα για να κατανοήσετε την ιστορία.",
          },
        },
        {
          question: { en: "How many days do I need in Mykonos?", el: "Πόσες μέρες χρειάζομαι στη Μύκονο;" },
          answer: {
            en: "3 to 4 days give you enough time for Mykonos Town, the beaches, a boat trip to Delos, and some relaxed meals.",
            el: "3 με 4 μέρες είναι ιδανικές για να δείτε τη Χώρα, τις παραλίες, να πάτε στη Δήλο και να απολαύσετε το φαγητό σας.",
          },
        },
      ],
    },
    internalCta: {
      title: { en: "Explore Mykonos with style", el: "Εξερευνήστε τη Μύκονο με στυλ" },
      text: {
        en: "Choose the Mykonos experiences that fit your trip and discover the island beyond the glamour.",
        el: "Επιλέξτε τις εμπειρίες που σας ταιριάζουν και ανακαλύψτε τη Μύκονο πέρα από τη λάμψη.",
      },
      linkHref: "/destinations/mykonos",
      linkLabel: { en: "Explore Mykonos Guide", el: "Δείτε τον Οδηγό Μυκόνου" },
    },
  },
  {
    slug: "kefalonia-tours",
    seo: {
      title: {
        en: "Best Tours & Experiences in Kefalonia | GoGreeceNow",
        el: "Οι Καλύτερες Εκδρομές & Εμπειρίες στην Κεφαλονιά | GoGreeceNow",
      },
      description: {
        en: "Discover the best tours and experiences in Kefalonia, from boat trips and beach excursions to local activities and day tours. Explore curated recommendations and more ideas for your trip.",
        el: "Ανακαλύψτε τις καλύτερες εκδρομές και εμπειρίες στην Κεφαλονιά, από boat trips και εξορμήσεις σε παραλίες μέχρι τοπικές δραστηριότητες. Εξερευνήστε επιλεγμένες προτάσεις και ιδέες για το ταξίδι σας.",
      },
    },
    title: {
      en: "Best Tours & Experiences in Kefalonia",
      el: "Οι Καλύτερες Εκδρομές & Εμπειρίες στην Κεφαλονιά",
    },
    description: {
      en: "Kefalonia is one of those Greek islands that feels made for exploring. Beyond its famous beaches and postcard views, it offers some of the most rewarding travel experiences in the Ionian Sea — from boat trips and cave visits to scenic coastal drives, local food stops, and laid-back island adventures.",
      el: "Η Κεφαλονιά είναι από τα ελληνικά νησιά που μοιάζουν φτιαγμένα για εξερεύνηση. Πέρα από τις διάσημες παραλίες της, προσφέρει μερικές από τις πιο ξεχωριστές ταξιδιωτικές εμπειρίες στο Ιόνιο — από boat trips και επισκέψεις σε σπήλαια μέχρι γραφικές παραθαλάσσιες διαδρομές και χαλαρές νησιωτικές περιπέτειες.",
    },
    overview: {
      en: "Whether you are visiting for a few days or planning a longer stay, choosing the right experiences can make a big difference in how much of the island you truly see. On this page, we bring together selected tours, activities, and local experiences in Kefalonia to help you plan more easily.\n\nYou will find a mix of curated recommendations, featured local experiences, and additional options for travelers who want to discover more of the island. Some visitors are looking for classic highlights such as boat excursions and beach-focused day trips, while others prefer slower and more local experiences that connect them with the island’s villages, food, and landscape.\n\nKefalonia works especially well for travelers who enjoy flexibility. It is an island where a single day can include a swim stop, a scenic drive, a harbor lunch, and a sunset back in town. That is why tours here are not only about checking off attractions — they are also about making the most of distances, local know-how, and hidden corners that many visitors would otherwise miss.",
      el: "Είτε την επισκέπτεστε για λίγες μέρες είτε σχεδιάζετε μεγαλύτερη διαμονή, η επιλογή των σωστών εμπειριών μπορεί να κάνει μεγάλη διαφορά. Σε αυτή τη σελίδα, συγκεντρώνουμε επιλεγμένες εκδρομές, δραστηριότητες και τοπικές εμπειρίες στην Κεφαλονιά για να σας βοηθήσουμε να σχεδιάσετε το ταξίδι σας πιο εύκολα.\n\nΘα βρείτε ένα μείγμα προσεγμένων προτάσεων, επιλεγμένων τοπικών εμπειριών και επιπλέον επιλογών για ταξιδιώτες που θέλουν να ανακαλύψουν περισσότερα. Μερικοί αναζητούν κλασικά highlights όπως θαλάσσιες εκδρομές, ενώ άλλοι προτιμούν πιο χαλαρές και τοπικές εμπειρίες.\n\nΗ Κεφαλονιά ταιριάζει απόλυτα σε ταξιδιώτες που αγαπούν την ευελιξία. Είναι ένα νησί όπου μια μέρα μπορεί να περιλαμβάνει στάση για μπάνιο, γραφική οδήγηση, γεύμα σε λιμανάκι και ηλιοβασίλεμα. Γι' αυτό οι εκδρομές εδώ δεν αφορούν μόνο τα αξιοθέατα, αλλά και την τοπική γνώση.",
    },
    recommendedIntro: {
      en: "These are selected local experiences and featured options we currently recommend in Kefalonia. As GoGreeceNow continues to grow, more handpicked activities and local partners will be added here.",
      el: "Αυτές είναι επιλεγμένες τοπικές εμπειρίες που προτείνουμε στην Κεφαλονιά. Καθώς το GoGreeceNow μεγαλώνει, θα προστίθενται εδώ περισσότερες προσεγμένες δραστηριότητες και τοπικοί συνεργάτες.",
    },
    moreToursIntro: {
      en: "Looking for more options? Here you can explore additional tours and activities in Kefalonia, including popular excursions, sea experiences, island highlights, and other bookable ideas for your stay.",
      el: "Αναζητάτε περισσότερες επιλογές; Εδώ μπορείτε να εξερευνήσετε επιπλέον εκδρομές και δραστηριότητες στην Κεφαλονιά, όπως δημοφιλείς εξορμήσεις, θαλάσσιες εμπειρίες και άλλες ιδέες.",
    },
    whatToBook: {
      title: { en: "What to Book in Kefalonia", el: "Τι να Κλείσετε στην Κεφαλονιά" },
      sections: [
        {
          title: { en: "Boat trips and coastal experiences", el: "Boat trips και θαλάσσιες εμπειρίες" },
          content: { en: "Kefalonia is a strong destination for sea-based experiences. Boat trips are often one of the easiest ways to enjoy the island’s coastline, access beautiful swimming spots, and add variety to your trip without spending the whole day driving.", el: "Η Κεφαλονιά είναι κορυφαίος προορισμός για θαλάσσιες εμπειρίες. Τα boat trips είναι συχνά ο πιο εύκολος τρόπος να απολαύσετε την ακτογραμμή και τα κρυφά σημεία κολύμβησης χωρίς να οδηγείτε όλη μέρα." },
        },
        {
          title: { en: "Scenic island day tours", el: "Γραφικές ημερήσιες εκδρομές" },
          content: { en: "If you want a broader overview of the island, guided or semi-guided day tours can help you combine villages, viewpoints, beaches, and key attractions in a way that feels more efficient and relaxed.", el: "Αν θέλετε μια γενική εικόνα του νησιού, οι οργανωμένες ημερήσιες εκδρομές σας βοηθούν να συνδυάσετε χωριά, σημεία θέας και παραλίες με πιο ξεκούραστο τρόπο." },
        },
        {
          title: { en: "Local food and relaxed cultural experiences", el: "Τοπικό φαγητό και πολιτιστικές εμπειρίες" },
          content: { en: "Not every experience in Kefalonia has to be high-energy. For many visitors, the most memorable moments come from local flavors, small villages, waterfront stops, and slower experiences that give the island more character.", el: "Δεν χρειάζεται κάθε εμπειρία να απαιτεί πολλή ενέργεια. Για πολλούς, οι καλύτερες στιγμές προέρχονται από τοπικές γεύσεις, μικρά χωριά και πιο αργές εμπειρίες που αναδεικνύουν τον χαρακτήρα του νησιού." },
        },
        {
          title: { en: "Flexible experiences for short stays", el: "Ευέλικτες εμπειρίες για σύντομη διαμονή" },
          content: { en: "If you only have a limited number of days in Kefalonia, booking one or two well-chosen activities can help you see more without overplanning every detail yourself.", el: "Αν έχετε περιορισμένες μέρες στην Κεφαλονιά, το κλείσιμο μίας ή δύο στοχευμένων δραστηριοτήτων μπορεί να σας βοηθήσει να δείτε περισσότερα χωρίς άγχος." },
        },
      ],
    },
    planningTips: {
      title: { en: "Planning Tips for Kefalonia Tours", el: "Πρακτικές Συμβουλές για τις Εκδρομές" },
      tips: {
        en: [
          "Book sea-based activities earlier if you are traveling in peak summer.",
          "Keep weather and wind conditions in mind for boat experiences.",
          "If you are staying in one part of the island, check travel times before booking activities in another area.",
          "Mix one organized experience with slower free days to keep your trip balanced.",
          "If you are traveling as a family, prioritize easy-access and half-day experiences where possible.",
        ],
        el: [
          "Κλείστε τις θαλάσσιες δραστηριότητες νωρίς αν ταξιδεύετε στην αιχμή του καλοκαιριού.",
          "Λάβετε υπόψη τον καιρό και τους ανέμους για τις βαρκάδες.",
          "Ελέγξτε τους χρόνους μετακίνησης πριν κλείσετε δραστηριότητες στην άλλη πλευρά του νησιού.",
          "Συνδυάστε μια οργανωμένη εκδρομή με ελεύθερες μέρες για να κρατήσετε το ταξίδι σας ισορροπημένο.",
          "Αν ταξιδεύετε με οικογένεια, προτιμήστε εύκολες και μισής μέρας εμπειρίες όπου είναι δυνατόν.",
        ],
      },
    },
    faq: {
      title: { en: "FAQ About Tours in Kefalonia", el: "Συχνές Ερωτήσεις για τις Εκδρομές στην Κεφαλονιά" },
      questions: [
        {
          question: { en: "Are tours in Kefalonia worth it?", el: "Αξίζουν οι εκδρομές στην Κεφαλονιά;" },
          answer: { en: "Yes, especially if you want to combine convenience with local insight. Tours can save time, reduce driving stress, and help you experience parts of the island more efficiently.", el: "Ναι, ειδικά αν θέλετε να συνδυάσετε την άνεση με την τοπική γνώση. Οι εκδρομές εξοικονομούν χρόνο, μειώνουν το άγχος της οδήγησης και σας βοηθούν να δείτε μέρη πιο αποτελεσματικά." },
        },
        {
          question: { en: "What kind of tours are best in Kefalonia?", el: "Τι είδους εκδρομές είναι καλύτερες στην Κεφαλονιά;" },
          answer: { en: "Boat trips, scenic island tours, beach-focused experiences, and relaxed local activities are usually among the best choices for first-time visitors.", el: "Boat trips, γραφικές διαδρομές στο νησί, εξορμήσεις σε παραλίες και χαλαρές τοπικές δραστηριότητες είναι συνήθως οι καλύτερες επιλογές." },
        },
        {
          question: { en: "Do I need to book Kefalonia tours in advance?", el: "Πρέπει να κλείσω εκδρομές από πριν;" },
          answer: { en: "In the high season, booking in advance is a good idea, especially for popular sea experiences and limited-capacity activities.", el: "Στην υψηλή περίοδο (high season), η προκράτηση είναι καλή ιδέα, ειδικά για δημοφιλείς θαλάσσιες εμπειρίες." },
        },
        {
          question: { en: "Is Kefalonia good for family-friendly tours?", el: "Είναι η Κεφαλονιά καλή για οικογενειακές εκδρομές;" },
          answer: { en: "Yes. Kefalonia can work very well for families if you choose easier, well-paced experiences and avoid overloading the itinerary.", el: "Ναι. Η Κεφαλονιά ταιριάζει πολύ καλά σε οικογένειες αν επιλέξετε πιο εύκολες και ξεκούραστες εμπειρίες και αποφύγετε τα υπερφορτωμένα προγράμματα." },
        },
        {
          question: { en: "Where can I learn more about the island before booking?", el: "Πού μπορώ να μάθω περισσότερα για το νησί πριν κλείσω;" },
          answer: { en: "You can also explore our Kefalonia destination guide for more ideas, practical tips, and travel inspiration.", el: "Μπορείτε επίσης να εξερευνήσετε τον πλήρη οδηγό προορισμού μας για την Κεφαλονιά για περισσότερες ιδέες και ταξιδιωτική έμπνευση." },
        },
      ],
    },
    internalCta: {
      title: { en: "Continue planning your trip", el: "Συνεχίστε την οργάνωση του ταξιδιού σας" },
      text: { en: "Explore our Kefalonia destination guide for beaches, places to stay, food ideas, and practical travel inspiration.", el: "Εξερευνήστε τον οδηγό μας για την Κεφαλονιά για παραλίες, μέρη για διαμονή, ιδέες για φαγητό και πρακτική ταξιδιωτική έμπνευση." },
      linkHref: "/destinations/kefalonia",
      linkLabel: { en: "Explore Kefalonia Guide", el: "Οδηγός Κεφαλονιάς" },
    },
    highlights: {
      en: [
        "Featured local businesses",
        "Tours, taxis & boat trips",
        "Curated options for visitors",
        "A practical way to plan",
      ],
      el: [
        "Featured τοπικές επιχειρήσεις",
        "Εκδρομές, ταξί & boat trips",
        "Επιλεγμένες επιλογές για επισκέπτες",
        "Πρακτική οργάνωση ταξιδιού",
      ],
    },
    highlightReasons: {
      en: [
        "We handpick real, operating businesses that rely on quality service instead of just generic tourist traps.",
        "From road transfers to sea explorations, find the exact local service you need.",
        "Carefully selected options ensuring you get the most authentic side of Kefalonia.",
        "Save time by browsing clear, structured information before you even arrive.",
      ],
      el: [
        "Επιλέγουμε πραγματικές επιχειρήσεις που βασίζονται στην ποιοτική εξυπηρέτηση και όχι σε τουριστικές παγίδες.",
        "Από οδικές μεταφορές μέχρι εξερευνήσεις στη θάλασσα, βρες την ιδανική τοπική υπηρεσία.",
        "Προσεκτικά επιλεγμένες προτάσεις για να ζήσεις την πιο αυθεντική πλευρά της Κεφαλονιάς.",
        "Γλιτώστε χρόνο συγκεντρώνοντας ξεκάθαρες πληροφορίες πριν καν φτάσετε στο νησί.",
      ],
    },
  },
  {
    slug: "lesvos-tours",
    seo: {
      title: {
        en: "Best Tours & Experiences in Lesvos | GoGreeceNow",
        el: "Οι Καλύτερες Εκδρομές & Εμπειρίες στη Λέσβο | GoGreeceNow",
      },
      description: {
        en: "Explore the best tours and experiences in Lesvos, from local activities and island highlights to curated recommendations and bookable ideas for your trip.",
        el: "Εξερευνήστε τις καλύτερες εκδρομές και εμπειρίες στη Λέσβο, από τοπικές δραστηριότητες μέχρι επιλεγμένες προτάσεις και ιδέες για το ταξίδι σας.",
      },
    },
    title: {
      en: "Best Tours & Experiences in Lesvos",
      el: "Οι Καλύτερες Εκδρομές & Εμπειρίες στη Λέσβο",
    },
    description: {
      en: "Lesvos is one of the most authentic and varied islands in Greece, and that is exactly why tours and experiences here can be so rewarding. It is a destination with a very different rhythm from the more heavily visited islands. Instead of feeling built around a single hotspot, Lesvos unfolds through villages, coastal roads, thermal traditions, local food, beaches, cultural heritage, and a strong sense of place.",
      el: "Η Λέσβος είναι ένα από τα πιο αυθεντικά και πολύμορφα νησιά της Ελλάδας, και γι' αυτό ακριβώς οι εκδρομές και οι εμπειρίες εδώ είναι τόσο ξεχωριστές. Είναι ένας προορισμός με εντελώς διαφορετικό ρυθμό από τα πιο πολυσύχναστα νησιά. Αντί να περιστρέφεται γύρω από ένα μόνο αξιοθέατο, η Λέσβος ξεδιπλώνεται μέσα από χωριά, παραθαλάσσιους δρόμους, ιαματικές παραδόσεις, τοπικό φαγητό, πολιτιστική κληρονομιά και μια έντονη αίσθηση τοπικότητας.",
    },
    overview: {
      en: "For travelers who want more than a quick checklist of sights, this island offers experiences that feel more grounded and memorable. On this page, we bring together selected tours, local experiences, and additional activities that can help visitors discover Lesvos more meaningfully.\n\nSome travelers come for the beaches and relaxed atmosphere. Others are interested in village life, nature, history, food, and the quieter side of the Aegean. That mix is exactly what makes Lesvos special — and it also means that the best experiences are not always the loudest or the most commercial.\n\nOur goal is to highlight both curated local recommendations and additional options that may help you shape your stay, whether you are based in Mytilene, Plomari, Molyvos, Eressos, or another part of the island. Lesvos is large enough that a well-chosen tour or activity can save time, add context, and help you discover places you might otherwise miss.",
      el: "Σε αυτή τη σελίδα, συγκεντρώνουμε επιλεγμένες εκδρομές, τοπικές εμπειρίες και δραστηριότητες που βοηθούν τους επισκέπτες να ανακαλύψουν τη Λέσβο πιο ουσιαστικά. Μερικοί ταξιδιώτες έρχονται για τις παραλίες και τη χαλαρή ατμόσφαιρα. Άλλοι ενδιαφέρονται για τη ζωή στο χωριό, τη φύση, την ιστορία, το φαγητό και την πιο ήσυχη πλευρά του Αιγαίου.\n\nΑυτός ο συνδυασμός είναι ακριβώς που κάνει τη Λέσβο ξεχωριστή — και σημαίνει επίσης ότι οι καλύτερες εμπειρίες δεν είναι πάντα οι πιο εμπορικές. Στόχος μας είναι να αναδείξουμε επιλεγμένες τοπικές προτάσεις και επιπλέον επιλογές που θα σας βοηθήσουν να διαμορφώσετε τη διαμονή σας.\n\nΕίτε μένετε στη Μυτιλήνη, το Πλωμάρι, τον Μόλυβο, την Ερεσό είτε σε άλλο σημείο, η Λέσβος είναι αρκετά μεγάλη. Επομένως, μια καλά επιλεγμένη εκδρομή μπορεί να εξοικονομήσει χρόνο, να προσθέσει αξία και να σας βοηθήσει να ανακαλύψετε μέρη που αλλιώς μπορεί να χάνατε.",
    },
    recommendedIntro: {
      en: "These are selected local experiences and featured recommendations we currently highlight in Lesvos. We are building this section gradually and prioritizing quality over quantity.",
      el: "Αυτές είναι επιλεγμένες τοπικές εμπειρίες και προτάσεις που ξεχωρίζουμε στη Λέσβο. Χτίζουμε αυτή την ενότητα σταδιακά και δίνουμε προτεραιότητα στην ποιότητα αντί για την ποσότητα.",
    },
    moreToursIntro: {
      en: "If you want additional inspiration, you can also browse more activities and travel experiences in Lesvos below, including island discovery ideas, local outings, and bookable options for your stay.",
      el: "Αν αναζητάτε επιπλέον έμπνευση, μπορείτε να εξερευνήσετε περισσότερες δραστηριότητες και ταξιδιωτικές εμπειρίες στη Λέσβο παρακάτω, όπως ιδέες εξερεύνησης του νησιού και τοπικές εξορμήσεις.",
    },
    whatToBook: {
      title: { en: "What Kind of Experiences Work Best in Lesvos", el: "Ποιες Εμπειρίες Ταιριάζουν Περισσότερο στη Λέσβο" },
      sections: [
        {
          title: { en: "Village and culture-focused experiences", el: "Χωριά και πολιτιστικές εμπειρίες" },
          content: { en: "Lesvos is ideal for travelers who enjoy local character, traditional settlements, slower exploration, and places with a strong identity rather than only resort-style tourism.", el: "Η Λέσβος είναι ιδανική για ταξιδιώτες που απολαμβάνουν τον τοπικό χαρακτήρα, τους παραδοσιακούς οικισμούς, την πιο αργή εξερεύνηση και τα μέρη με ισχυρή ταυτότητα αντί για μαζικό τουρισμό." },
        },
        {
          title: { en: "Food, local products, and authentic stops", el: "Φαγητό, τοπικά προϊόντα και αυθεντικές στάσεις" },
          content: { en: "The island is particularly rewarding for visitors who want to connect with local flavors, olive heritage, seafood, ouzo culture, and regional traditions.", el: "Το νησί είναι ιδιαίτερα ανταποδοτικό για όσους θέλουν να γνωρίσουν τις τοπικές γεύσεις, την κληρονομιά του ελαιολάδου, τα θαλασσινά, την κουλτούρα του ούζου και τις παραδόσεις της περιοχής." },
        },
        {
          title: { en: "Nature and scenic island discovery", el: "Φύση και γραφική εξερεύνηση" },
          content: { en: "Because Lesvos is large and geographically varied, day trips and island exploration experiences can add real value. They help travelers discover more without needing to organize every stop alone.", el: "Επειδή η Λέσβος είναι μεγάλη και έχει γεωγραφική ποικιλία, οι ημερήσιες εκδρομές μπορούν να προσθέσουν πραγματική αξία. Βοηθούν τους ταξιδιώτες να δουν περισσότερα χωρίς να χρειάζεται να οργανώσουν κάθε στάση μόνοι τους." },
        },
        {
          title: { en: "Relaxed experiences for travelers who want depth", el: "Χαλαρές εμπειρίες για ταξιδιώτες που αναζητούν βάθος" },
          content: { en: "Lesvos works best when approached with a slower mindset. Many of the best experiences are not about speed, but about atmosphere, perspective, and local life.", el: "Η Λέσβος προσεγγίζεται καλύτερα με πιο αργούς ρυθμούς. Πολλές από τις καλύτερες εμπειρίες δεν αφορούν την ταχύτητα, αλλά την ατμόσφαιρα και την τοπική ζωή." },
        },
      ],
    },
    planningTips: {
      title: { en: "Planning Tips for Lesvos Tours", el: "Πρακτικές Συμβουλές για τις Εκδρομές στη Λέσβο" },
      tips: {
        en: [
          "Choose activities based on the part of the island where you are staying.",
          "Lesvos is larger than many visitors expect, so driving times matter.",
          "Do not overpack your itinerary — the island rewards slower travel.",
          "Balance sightseeing with beach time, food stops, and village exploration.",
          "If you want a more local feel, prioritize experiences with regional character rather than generic tourist formats.",
        ],
        el: [
          "Επιλέξτε δραστηριότητες με βάση την περιοχή του νησιού όπου μένετε.",
          "Η Λέσβος είναι μεγαλύτερη από όσο περιμένουν πολλοί επισκέπτες, οπότε ο χρόνος οδήγησης έχει σημασία.",
          "Μην υπερφορτώνετε το πρόγραμμά σας — το νησί ανταμείβει τους πιο χαλαρούς ρυθμούς.",
          "Ισορροπήστε την περιήγηση με χρόνο στις παραλίες, στάσεις για φαγητό και εξερεύνηση των χωριών.",
          "Αν θέλετε μια πιο αυθεντική αίσθηση, προτιμήστε εμπειρίες με τοπικό χαρακτήρα.",
        ],
      },
    },
    faq: {
      title: { en: "FAQ About Tours in Lesvos", el: "Συχνές Ερωτήσεις για τις Εκδρομές στη Λέσβο" },
      questions: [
        {
          question: { en: "Are tours in Lesvos worth booking?", el: "Αξίζουν οι εκδρομές στη Λέσβο;" },
          answer: { en: "Yes, especially if you want help exploring a larger island with many different regions and local highlights.", el: "Ναι, ειδικά αν θέλετε βοήθεια για να εξερευνήσετε ένα μεγάλο νησί με πολλές διαφορετικές περιοχές και τοπικά σημεία ενδιαφέροντος." },
        },
        {
          question: { en: "What kind of experiences are best in Lesvos?", el: "Τι είδους εμπειρίες είναι καλύτερες στη Λέσβο;" },
          answer: { en: "Village-focused outings, food and culture experiences, scenic island exploration, and slower local activities usually fit Lesvos very well.", el: "Εξορμήσεις με επίκεντρο τα χωριά, εμπειρίες φαγητού και πολιτισμού, γραφικές εξερευνήσεις και χαλαρές τοπικές δραστηριότητες ταιριάζουν πολύ στη Λέσβο." },
        },
        {
          question: { en: "Is Lesvos good for independent travelers too?", el: "Είναι η Λέσβος καλή και για ανεξάρτητους ταξιδιώτες;" },
          answer: { en: "Definitely. But a small number of well-chosen tours or experiences can still improve your trip and help you see more.", el: "Σίγουρα. Αλλά μερικές καλά επιλεγμένες εκδρομές μπορούν να βελτιώσουν το ταξίδι σας και να σας βοηθήσουν να δείτε περισσότερα." },
        },
        {
          question: { en: "Should I book activities in advance?", el: "Πρέπει να κλείσω δραστηριότητες από πριν;" },
          answer: { en: "In peak summer, booking ahead is a good idea for limited-availability experiences. Outside the busiest periods, there is often more flexibility.", el: "Στην αιχμή του καλοκαιριού, η προκράτηση είναι καλή ιδέα. Εκτός των περιόδων αιχμής, υπάρχει συχνά μεγαλύτερη ευελιξία." },
        },
        {
          question: { en: "Where can I find more information about the island?", el: "Πού μπορώ να βρω περισσότερες πληροφορίες για το νησί;" },
          answer: { en: "You can continue with our Lesvos destination guide for practical travel ideas, areas, beaches, and local inspiration.", el: "Μπορείτε να διαβάσετε τον ταξιδιωτικό μας οδηγό για τη Λέσβο για πρακτικές ιδέες, παραλίες και έμπνευση." },
        },
      ],
    },
    internalCta: {
      title: { en: "Explore more of the island", el: "Εξερευνήστε περισσότερο το νησί" },
      text: { en: "Visit our Lesvos destination guide for beaches, villages, food ideas, and travel planning tips.", el: "Διαβάστε τον οδηγό προορισμού μας για τη Λέσβο για παραλίες, χωριά, φαγητό και πρακτικές συμβουλές." },
      linkHref: "/destinations/lesvos",
      linkLabel: { en: "Explore Lesvos Guide", el: "Οδηγός Λέσβου" },
    },
    highlights: {
      en: [
        "Featured local businesses",
        "Authentic food and culture",
        "Visitor-friendly experiences",
        "A practical way to plan your stay",
      ],
      el: [
        "Featured τοπικές επιχειρήσεις",
        "Αυθεντικό φαγητό και πολιτισμός",
        "Εμπειρίες για επισκέπτες",
        "Πρακτικός τρόπος οργάνωσης",
      ],
    },
    highlightReasons: {
      en: [
        "We support local entrepreneurs who sustain the true heritage of Lesvos.",
        "Taste traditional recipes and immerse yourself in centuries-old practices.",
        "Activities designed with the modern traveler in mind, easy to join and access.",
        "An organized hub so you don't miss out on what makes this island special.",
      ],
      el: [
        "Στηρίζουμε τοπικούς επιχειρηματίες που διατηρούν την αληθινή κληρονομιά της Λέσβου.",
        "Δοκίμασε παραδοσιακές συνταγές και βίωσε πρακτικές αιώνων.",
        "Δραστηριότητες σχεδιασμένες για τον σύγχρονο ταξιδιώτη, εύκολες στη συμμετοχή.",
        "Ένας οργανωμένος κόμβος για να μη χάσεις όσα κάνουν αυτό το νησί ξεχωριστό.",
      ],
    },
    image: "/images/lesvos-goods-v2.webp",
  },
  {
    slug: "crete-tours",
    seo: {
      title: {
        en: "Best Tours & Experiences in Crete | GoGreeceNow",
        el: "Οι Καλύτερες Εκδρομές & Εμπειρίες στην Κρήτη | GoGreeceNow",
      },
      description: {
        en: "Discover the best tours and experiences in Crete, from boat trips and cultural outings to food experiences and island adventures. Explore curated recommendations and more activities for your trip.",
        el: "Ανακαλύψτε τις καλύτερες εκδρομές και εμπειρίες στην Κρήτη, από boat trips και πολιτιστικές εξορμήσεις μέχρι γαστρονομικές εμπειρίες. Εξερευνήστε προτάσεις για το ταξίδι σας.",
      },
    },
    title: {
      en: "Best Tours & Experiences in Crete",
      el: "Οι Καλύτερες Εκδρομές & Εμπειρίες στην Κρήτη",
    },
    description: {
      en: "Crete is not just a beach destination or a single-stop island. It is a large, diverse, and layered place that can feel almost like several trips in one. Depending on where you stay, your experience of Crete may include historic towns, mountain villages, dramatic coastlines, local food culture, archaeological interest, family-friendly outings, or long scenic drives through very different landscapes.",
      el: "Η Κρήτη δεν είναι απλώς ένας προορισμός για παραλίες. Είναι ένα μεγάλο, ποικιλόμορφο και πολυεπίπεδο μέρος που μοιάζει σαν πολλά ταξίδια σε ένα. Ανάλογα με το πού μένετε, η εμπειρία σας μπορεί να περιλαμβάνει ιστορικές πόλεις, ορεινά χωριά, εντυπωσιακές ακτογραμμές, τοπική γαστρονομία, αρχαιολογικό ενδιαφέρον, οικογενειακές εξορμήσεις ή μεγάλες γραφικές διαδρομές.",
    },
    overview: {
      en: "That range is exactly why tours and organized experiences can be so useful here. On a destination as large as Crete, planning everything entirely on your own can become tiring, especially if you want to make the most of your time.\n\nA well-chosen tour or local experience can help you explore more efficiently, access places with better context, and add variety to your itinerary without turning your trip into something rushed. Some visitors want classic highlights and comfortable day trips. Others are looking for slower, more local experiences with food, culture, and regional character. Crete can support both styles very well.\n\nOn this page, we bring together selected local experiences, featured recommendations, and additional tours and activities to help you discover Crete in a more practical and inspiring way. Whether you are visiting Chania, Rethymno, Heraklion, Lasithi, or moving between regions, this page is designed to help you narrow down what is worth booking and what kind of experiences fit your trip best.",
      el: "Αυτή η ποικιλία είναι ακριβώς ο λόγος που οι εκδρομές και οι οργανωμένες εμπειρίες είναι τόσο χρήσιμες εδώ. Σε έναν προορισμό τόσο μεγάλο όσο η Κρήτη, το να σχεδιάζετε τα πάντα μόνοι σας μπορεί να γίνει κουραστικό.\n\nΜια καλά επιλεγμένη εκδρομή ή τοπική εμπειρία μπορεί να σας βοηθήσει να εξερευνήσετε πιο αποτελεσματικά, να επισκεφθείτε μέρη με καλύτερη καθοδήγηση και να προσθέσετε ποικιλία στο πρόγραμμά σας χωρίς να βιάζεστε. Μερικοί θέλουν κλασικά highlights και άνετες ημερήσιες εκδρομές. Άλλοι αναζητούν πιο χαλαρές, τοπικές εμπειρίες με έμφαση στο φαγητό και τον πολιτισμό.\n\nΣε αυτή τη σελίδα, συγκεντρώνουμε επιλεγμένες τοπικές εμπειρίες, προτάσεις και επιπλέον δραστηριότητες για να σας βοηθήσουμε να ανακαλύψετε την Κρήτη με πιο πρακτικό τρόπο. Είτε επισκέπτεστε τα Χανιά, το Ρέθυμνο, το Ηράκλειο, το Λασίθι, είτε μετακινείστε μεταξύ νομών, αυτή η σελίδα έχει σχεδιαστεί για να σας βοηθήσει να αποφασίσετε ποιες εμπειρίες ταιριάζουν στο ταξίδι σας.",
    },
    recommendedIntro: {
      en: "These are selected local experiences and featured recommendations we currently highlight in Crete. We are building this section carefully and adding more quality options over time.",
      el: "Αυτές είναι επιλεγμένες τοπικές εμπειρίες και προτάσεις που ξεχωρίζουμε αυτή τη στιγμή στην Κρήτη. Χτίζουμε αυτή την ενότητα προσεκτικά και προσθέτουμε σταδιακά περισσότερες ποιοτικές επιλογές.",
    },
    moreToursIntro: {
      en: "Below you can also explore additional tours and activities in Crete, including sea experiences, cultural outings, food-focused ideas, scenic day trips, and more options for different travel styles.",
      el: "Παρακάτω μπορείτε να εξερευνήσετε επιπλέον εκδρομές και δραστηριότητες στην Κρήτη, συμπεριλαμβανομένων θαλάσσιων εμπειριών, πολιτιστικών εξορμήσεων, ιδεών γαστρονομίας και ημερήσιων εκδρομών.",
    },
    whatToBook: {
      title: { en: "What to Book in Crete", el: "Τι να Κλείσετε στην Κρήτη" },
      sections: [
        {
          title: { en: "Boat trips and coastal excursions", el: "Boat trips και θαλάσσιες εκδρομές" },
          content: { en: "Crete offers many opportunities for sea-based experiences, and these are often among the most memorable activities for visitors who want to combine scenery, swimming, and a more relaxed day.", el: "Η Κρήτη προσφέρει πολλές ευκαιρίες για θαλάσσιες εμπειρίες, οι οποίες είναι συχνά οι πιο αξέχαστες δραστηριότητες για επισκέπτες που θέλουν να συνδυάσουν τοπίο, κολύμπι και χαλάρωση." },
        },
        {
          title: { en: "Food and local culture experiences", el: "Εμπειρίες φαγητού και πολιτισμού" },
          content: { en: "For travelers who want to understand Crete beyond its beaches, food-oriented and locally grounded experiences can add a lot of depth to the trip.", el: "Για ταξιδιώτες που θέλουν να κατανοήσουν την Κρήτη πέρα από τις παραλίες της, οι εμπειρίες με επίκεντρο το φαγητό και την τοπική παράδοση προσθέτουν μεγάλο βάθος στο ταξίδι." },
        },
        {
          title: { en: "Scenic day trips across regions", el: "Γραφικές ημερήσιες εκδρομές" },
          content: { en: "Because Crete is so large, structured day trips can be especially useful. They help travelers connect important highlights without spending too much energy on logistics.", el: "Επειδή η Κρήτη είναι τόσο μεγάλη, οι οργανωμένες ημερήσιες εκδρομές είναι ιδιαίτερα χρήσιμες. Βοηθούν τους ταξιδιώτες να δουν σημαντικά σημεία χωρίς να ξοδεύουν ενέργεια στις μετακινήσεις." },
        },
        {
          title: { en: "Experiences for first-time visitors", el: "Εμπειρίες για νέους επισκέπτες" },
          content: { en: "If this is your first trip to Crete, a balanced mix of one or two organized experiences plus independent exploration often works best.", el: "Αν είναι το πρώτο σας ταξίδι στην Κρήτη, ο καλύτερος συνδυασμός είναι συνήθως μία ή δύο οργανωμένες εμπειρίες μαζί με ελεύθερη εξερεύνηση." },
        },
        {
          title: { en: "Family-friendly activity options", el: "Οικογενειακές δραστηριότητες" },
          content: { en: "Crete can work very well for families, especially when activities are chosen based on pace, distance, and the region where you are staying.", el: "Η Κρήτη είναι εξαιρετική για οικογένειες, ειδικά όταν οι δραστηριότητες επιλέγονται με βάση τον ρυθμό, την απόσταση και την περιοχή όπου μένετε." },
        },
      ],
    },
    planningTips: {
      title: { en: "Planning Tips for Crete Tours", el: "Πρακτικές Συμβουλές για Εκδρομές στην Κρήτη" },
      tips: {
        en: [
          "Base your bookings on the region where you are staying, not just on island-wide popularity.",
          "Travel times in Crete can be longer than many visitors expect.",
          "Mix organized experiences with open days for beaches, towns, and meals.",
          "Prioritize quality and fit over trying to do too much.",
          "If you are traveling in summer, reserve higher-demand activities earlier.",
        ],
        el: [
          "Κάντε κρατήσεις με βάση τον νομό όπου μένετε, όχι μόνο με βάση το πόσο δημοφιλής είναι μια δραστηριότητα σε όλο το νησί.",
          "Οι χρόνοι μετακίνησης στην Κρήτη μπορεί να είναι μεγαλύτεροι από ό,τι περιμένουν πολλοί επισκέπτες.",
          "Συνδυάστε οργανωμένες εμπειρίες με ελεύθερες μέρες για παραλίες, βόλτες και φαγητό.",
          "Δώστε προτεραιότητα στην ποιότητα αντί να προσπαθείτε να κάνετε υπερβολικά πολλά.",
          "Αν ταξιδεύετε το καλοκαίρι, κλείστε νωρίτερα τις δραστηριότητες με υψηλή ζήτηση.",
        ],
      },
    },
    faq: {
      title: { en: "FAQ About Tours in Crete", el: "Συχνές Ερωτήσεις για τις Εκδρομές στην Κρήτη" },
      questions: [
        {
          question: { en: "Are tours in Crete worth it?", el: "Αξίζουν οι εκδρομές στην Κρήτη;" },
          answer: { en: "Yes. Crete is large enough that tours can save time, reduce planning stress, and help visitors see more of the island in a structured way.", el: "Ναι. Η Κρήτη είναι αρκετά μεγάλη ώστε οι εκδρομές να εξοικονομούν χρόνο, να μειώνουν το άγχος οργάνωσης και να βοηθούν τους επισκέπτες να δουν περισσότερα πιο δομημένα." },
        },
        {
          question: { en: "What are the best tours for first-time visitors to Crete?", el: "Ποιες είναι οι καλύτερες εκδρομές για νέους επισκέπτες;" },
          answer: { en: "That depends on your region and travel style, but boat trips, scenic day tours, food-focused experiences, and balanced cultural outings are usually strong options.", el: "Αυτό εξαρτάται από τον νομό και το στιλ σας, αλλά τα boat trips, οι γραφικές ημερήσιες εκδρομές και οι εμπειρίες φαγητού είναι συνήθως δυνατές επιλογές." },
        },
        {
          question: { en: "Should I book Crete tours in advance?", el: "Πρέπει να κλείσω εκδρομές από πριν;" },
          answer: { en: "For summer travel and popular experiences, booking ahead is recommended.", el: "Για καλοκαιρινά ταξίδια και δημοφιλείς εμπειρίες, συνιστάται η προκράτηση." },
        },
        {
          question: { en: "Is Crete good for family-friendly experiences?", el: "Είναι η Κρήτη καλή για οικογενειακές εμπειρίες;" },
          answer: { en: "Yes. Crete has a wide range of options for families, especially when you choose activities with manageable timing and easy access.", el: "Ναι. Η Κρήτη διαθέτει ευρύ φάσμα επιλογών για οικογένειες, ειδικά αν επιλέξετε δραστηριότητες με εύκολη πρόσβαση και διαχειρίσιμο χρόνο." },
        },
        {
          question: { en: "Can I combine independent travel with organized activities in Crete?", el: "Μπορώ να συνδυάσω ελεύθερο ταξίδι με οργανωμένες δραστηριότητες;" },
          answer: { en: "Absolutely. In fact, that is often the best way to experience the island.", el: "Απολύτως. Στην πραγματικότητα, αυτός είναι συχνά ο καλύτερος τρόπος για να ζήσετε το νησί." },
        },
        {
          question: { en: "Where can I find more inspiration for my trip?", el: "Πού μπορώ να βρω περισσότερη έμπνευση για το ταξίδι μου;" },
          answer: { en: "You can continue with our Crete destination guide for more ideas on areas, attractions, food, and planning.", el: "Μπορείτε να συνεχίσετε με τον ταξιδιωτικό μας οδηγό για την Κρήτη για περισσότερες ιδέες, αξιοθέατα και φαγητό." },
        },
      ],
    },
    internalCta: {
      title: { en: "Continue planning your trip", el: "Συνεχίστε την οργάνωση του ταξιδιού σας" },
      text: { en: "Explore our Crete destination guide for where to stay, what to see, local flavors, and travel inspiration.", el: "Εξερευνήστε τον οδηγό μας για την Κρήτη για διαμονή, αξιοθέατα, τοπικές γεύσεις και ταξιδιωτική έμπνευση." },
      linkHref: "/destinations/crete",
      linkLabel: { en: "Explore Crete Guide", el: "Οδηγός Κρήτης" },
    },
    highlights: {
      en: [
        "Featured local businesses",
        "Food, culture and coastline",
        "Curated options for visitors",
        "A more practical planning page",
      ],
      el: [
        "Featured τοπικές επιχειρήσεις",
        "Γεύση, πολιτισμός και ακτογραμμή",
        "Επιλεγμένες επιλογές για επισκέπτες",
        "Πιο πρακτική σελίδα οργάνωσης",
      ],
    },
    highlightReasons: {
      en: [
        "Showcasing Cretan hospitality through reliable, top-rated local operators.",
        "From mountain villages to pristine beaches, discover the breadth of Crete.",
        "Skip the endless searching and find highly recommended activities instantly.",
        "Plan your days properly and secure your spots in popular local experiences.",
      ],
      el: [
        "Αναδεικνύουμε την Κρητική φιλοξενία μέσα από αξιόπιστους τοπικούς επαγγελματίες.",
        "Από ορεινά χωριά μέχρι απάτητες παραλίες, ανακάλυψε τον πλούτο της Κρήτης.",
        "Δώσε τέλος στην ατελείωτη αναζήτηση και βρες άμεσα τις καλύτερες δραστηριότητες.",
        "Οργάνωσε σωστά τις μέρες σου και εξασφάλισε τη θέση σου σε κορυφαίες εμπειρίες.",
      ],
    },
    image: "/images/tours/crete-tours.webp",
  },
  {
    slug: "athens-tours",
    seo: {
      title: {
        en: "Athens Tours & Experiences | Acropolis, Walking Tours & Saronic Gulf Trips",
        el: "Εκδρομές & Εμπειρίες στην Αθήνα | Ακρόπολη, Walking Tours & Σαρωνικός",
      },
      description: {
        en: "Explore the best Athens tours and experiences, from Acropolis guided visits and historic walking tours to Greek food tours, Cape Sounion sunsets, and Saronic Gulf boat trips.",
        el: "Ανακαλύψτε τις καλύτερες εκδρομές στην Αθήνα: ξεναγήσεις στην Ακρόπολη, walking tours, γαστρονομικές εμπειρίες, ηλιοβασίλεμα στο Σούνιο και κρουαζιέρες στον Σαρωνικό.",
      },
    },
    title: {
      en: "Athens Tours & Experiences",
      el: "Εκδρομές & Εμπειρίες στην Αθήνα",
    },
    description: {
      en: "Athens is where ancient history, modern Greek life, food, sea views, and neighborhood energy all meet in one place.",
      el: "Η Αθήνα είναι το μέρος όπου η αρχαία ιστορία, η σύγχρονη ελληνική ζωή, το φαγητό, η θέα στη θάλασσα και η ενέργεια των γειτονιών συναντιούνται σε ένα σημείο.",
    },
    overview: {
      en: "Discover Athens beyond the obvious. Athens is famous for the Acropolis, and yes, it deserves the attention. But the city is much more than one monument. It is morning coffee under old balconies, narrow streets in Plaka, street art in Psiri, ancient ruins next to busy cafés, rooftop views at sunset, and small tavernas where the food somehow becomes part of the memory.\n\nAthens tours are a good way to understand the city faster. A guided walk can turn a simple visit to ancient sites into a real story, while food tours, evening walks, and short boat trips help you see the more relaxed side of the Greek capital.\n\nWhether you are visiting Athens for one day, a weekend, or using it as the starting point for a longer Greece itinerary, the city gives you plenty of ways to experience history, culture, food, and the sea without going far.",
      el: "Ανακαλύψτε την Αθήνα πέρα από τα προφανή. Η Αθήνα είναι διάσημη για την Ακρόπολη, και ναι, αξίζει όλη την προσοχή. Αλλά η πόλη είναι πολλά περισσότερα από ένα μνημείο. Είναι ο πρωινός καφές κάτω από παλιά μπαλκόνια, τα στενά δρομάκια στην Πλάκα, η street art στου Ψυρρή, οι αρχαίες ανασκαφές δίπλα σε πολυσύχναστα καφέ, η θέα από τις ταράτσες στο ηλιοβασίλεμα και οι μικρές ταβέρνες όπου το φαγητό γίνεται μέρος της ανάμνησης.\n\nΟι εκδρομές στην Αθήνα είναι ένας καλός τρόπος να γνωρίσετε την πόλη πιο γρήγορα. Μια ξενάγηση μπορεί να μετατρέψει μια απλή επίσκεψη σε αρχαιολογικούς χώρους σε μια ζωντανή ιστορία, ενώ τα food tours, οι βραδινοί περίπατοι και οι σύντομες θαλάσσιες αποδράσεις σας βοηθούν να δείτε την πιο χαλαρή πλευρά της ελληνικής πρωτεύουσας.\n\nΕίτε επισκέπτεστε την Αθήνα για μία μέρα, είτε για ένα Σαββατοκύριακο, είτε την χρησιμοποιείτε ως αφετηρία για ένα μεγαλύτερο ταξίδι στην Ελλάδα, η πόλη σας προσφέρει αμέτρητους τρόπους να ζήσετε την ιστορία, τον πολιτισμό, το φαγητό και τη θάλασσα χωρίς να πάτε μακριά.",
    },
    recommendedIntro: {
      en: "These are selected experiences and guided options we highlight in Athens. We focus on quality and local insight to help you see the city properly.",
      el: "Αυτές είναι επιλεγμένες εμπειρίες και ξεναγήσεις που ξεχωρίζουμε στην Αθήνα. Εστιάζουμε στην ποιότητα και την τοπική γνώση για να γνωρίσετε την πόλη σωστά.",
    },
    moreToursIntro: {
      en: "Explore more bookable activities in Athens, including Acropolis visits, walking tours, food experiences, and day trips to the coast and nearby islands.",
      el: "Εξερευνήστε περισσότερες δραστηριότητες στην Αθήνα, συμπεριλαμβανομένων επισκέψεων στην Ακρόπολη, walking tours, γαστρονομικών εμπειριών και ημερήσιων εκδρομών στην ακτή και τα κοντινά νησιά.",
    },
    whatToBook: {
      title: { en: "Best Things to Do in Athens", el: "Τι να Κλείσετε στην Αθήνα" },
      sections: [
        {
          title: { en: "Acropolis and ancient Athens tours", el: "Ξεναγήσεις στην Ακρόπολη & την Αρχαία Αθήνα" },
          content: { en: "Visit the Acropolis, the Parthenon, and key archaeological sites with expert guidance to understand the myths and history behind the ruins.", el: "Επισκεφθείτε την Ακρόπολη, τον Παρθενώνα και σημαντικούς αρχαιολογικούς χώρους με έμπειρους ξεναγούς για να κατανοήσετε τους μύθους και την ιστορία πίσω από τα ερείπια." },
        },
        {
          title: { en: "Historic Athens walking tours", el: "Ιστορικοί περίπατοι (Walking Tours)" },
          content: { en: "Explore Plaka, Monastiraki, and Psiri on foot to see how ancient and modern Athens live side by side in the historic heart of the city.", el: "Εξερευνήστε την Πλάκα, το Μοναστηράκι και στου Ψυρρή με τα πόδια για να δείτε πώς η αρχαία και η σύγχρονη Αθήνα συνυπάρχουν στο ιστορικό κέντρο." },
        },
        {
          title: { en: "Greek food and street food tours", el: "Food tours & Γαστρονομικές εμπειρίες" },
          content: { en: "Taste real Greek flavors, from street food and traditional markets to hidden tavernas where locals actually eat.", el: "Δοκιμάστε αυθεντικές ελληνικές γεύσεις, από street food και παραδοσιακές αγορές μέχρι κρυμμένες ταβέρνες όπου τρώνε οι ντόπιοι." },
        },
        {
          title: { en: "Saronic Gulf boat trips", el: "Κρουαζιέρες στον Σαρωνικό" },
          content: { en: "Escape for a day to islands like Aegina, Hydra, or Poros. Perfect for a taste of the Greek islands without a long ferry ride.", el: "Αποδράστε για μια μέρα σε νησιά όπως η Αίγινα, η Ύδρα ή ο Πόρος. Ιδανικό για μια γεύση από ελληνικά νησιά χωρίς μεγάλες μετακινήσεις." },
        },
        {
          title: { en: "Cape Sounion sunset tours", el: "Ηλιοβασίλεμα στο Σούνιο" },
          content: { en: "Follow the Athens Riviera to the Temple of Poseidon for one of the most dramatic and beautiful sunsets near the city.", el: "Ακολουθήστε την Αθηναϊκή Ριβιέρα μέχρι τον Ναό του Ποσειδώνα για ένα από τα πιο εντυπωσιακά ηλιοβασιλέματα κοντά στην πόλη." },
        },
      ],
    },
    planningTips: {
      title: { en: "Planning Tips for Athens", el: "Πρακτικές Συμβουλές για την Αθήνα" },
      tips: {
        en: [
          "Book Acropolis tours early in the morning to avoid the heat and crowds.",
          "Athens is very walkable, so wear comfortable shoes for city exploration.",
          "Use the metro for fast transport, but explore the historic center on foot.",
          "If you have an extra day, the Saronic boat trips are the best way to see the sea.",
          "Book popular food tours in advance as group sizes are often limited.",
        ],
        el: [
          "Κλείστε τις ξεναγήσεις στην Ακρόπολη νωρίς το πρωί για να αποφύγετε τη ζέστη και την πολυκοσμία.",
          "Η Αθήνα περπατιέται εύκολα, οπότε φορέστε άνετα παπούτσια για την εξερεύνηση της πόλης.",
          "Χρησιμοποιήστε το μετρό για γρήγορες μετακινήσεις, αλλά δείτε το ιστορικό κέντρο με τα πόδια.",
          "Αν έχετε μια επιπλέον μέρα, οι κρουαζιέρες στον Σαρωνικό είναι ο καλύτερος τρόπος να δείτε θάλασσα.",
          "Κλείστε τα food tours εγκαίρως, καθώς οι θέσεις στις ομάδες είναι συχνά περιορισμένες.",
        ],
      },
    },
    faq: {
      title: { en: "FAQ About Athens Tours", el: "Συχνές Ερωτήσεις για την Αθήνα" },
      questions: [
        {
          question: { en: "Is Athens worth visiting for more than one day?", el: "Αξίζει η Αθήνα για περισσότερο από μία μέρα;" },
          answer: { en: "Yes. Athens becomes much more interesting with two or three days. You can explore neighborhoods, try food tours, visit museums, and take short trips to the coast.", el: "Ναι. Η Αθήνα γίνεται πολύ πιο ενδιαφέρουσα με δύο ή τρεις μέρες. Μπορείτε να εξερευνήσετε γειτονιές, να κάνετε food tours, να επισκεφθείτε μουσεία και να πάτε στην ακτή." },
        },
        {
          question: { en: "What are the best tours to do in Athens?", el: "Ποιες είναι οι καλύτερες εκδρομές στην Αθήνα;" },
          answer: { en: "The most popular are Acropolis guided tours, historic walking tours, food tours, Cape Sounion sunset tours, and Saronic Gulf boat trips.", el: "Οι πιο δημοφιλείς είναι οι ξεναγήσεις στην Ακρόπολη, οι ιστορικοί περίπατοι, τα food tours, το ηλιοβασίλεμα στο Σούνιο και οι κρουαζιέρες στον Σαρωνικό." },
        },
        {
          question: { en: "Can you visit Greek islands from Athens in one day?", el: "Μπορείτε να επισκεφθείτε νησιά από την Αθήνα σε μία μέρα;" },
          answer: { en: "Yes. The Saronic Islands (Aegina, Agistri, Hydra, Poros) are the easiest island day trips from Athens, reachable by boat or ferry.", el: "Ναι. Τα νησιά του Σαρωνικού (Αίγινα, Αγκίστρι, Ύδρα, Πόρος) είναι οι πιο εύκολες ημερήσιες αποδράσεις από την Αθήνα." },
        },
        {
          question: { en: "Is Athens good for food tours?", el: "Είναι η Αθήνα καλή για food tours;" },
          answer: { en: "Athens is excellent for food tours because it combines traditional Greek food, markets, bakeries, and modern restaurants in a very compact area.", el: "Η Αθήνα είναι εξαιρετική για food tours γιατί συνδυάζει παραδοσιακό φαγητό, αγορές, φούρνους και σύγχρονα εστιατόρια σε μια πολύ κοντινή περιοχή." },
        },
        {
          question: { en: "What is the best time for Athens tours?", el: "Ποια είναι η καλύτερη εποχή για εκδρομές στην Αθήνα;" },
          answer: { en: "Spring and autumn are the most comfortable for walking and ancient sites. In summer, early morning or late afternoon tours are better to avoid the heat.", el: "Η άνοιξη και το φθινόπωρο είναι οι πιο άνετες εποχές για περπάτημα. Το καλοκαίρι, προτιμήστε νωρίς το πρωί ή αργά το απόγευμα για να αποφύγετε τη ζέστη." },
        },
      ],
    },
    internalCta: {
      title: { en: "Start exploring Athens", el: "Ξεκινήστε την εξερεύνηση της Αθήνας" },
      text: { en: "Athens is more than the gateway to the islands. Find the experiences that match your trip and build a better start to your Greece journey.", el: "Η Αθήνα είναι πολλά περισσότερα από την πύλη για τα νησιά. Βρείτε τις εμπειρίες που σας ταιριάζουν και ξεκινήστε το ταξίδι σας σωστά." },
      linkHref: "/destinations/athens",
      linkLabel: { en: "Explore Athens Guide", el: "Οδηγός Αθήνας" },
    },
    highlights: {
      en: [
        "Acropolis & Ancient Sites",
        "Historic Neighborhood Walks",
        "Authentic Greek Food Tours",
        "Saronic Gulf Boat Trips",
      ],
      el: [
        "Ακρόπολη & Αρχαίοι Χώροι",
        "Περίπατοι σε Ιστορικές Γειτονιές",
        "Αυθεντικά Food Tours",
        "Κρουαζιέρες στον Σαρωνικό",
      ],
    },
    highlightReasons: {
      en: [
        "Skip the generic facts and discover the real stories behind the world's most famous ruins.",
        "Walk through Plaka and Psiri with locals who know the hidden corners and best views.",
        "Eat where Athenians eat, from the central market to hidden neighborhood tavernas.",
        "Escape the city heat for a day of swimming and island life just a boat ride away.",
      ],
      el: [
        "Ξεχάστε τις τυποποιημένες ξεναγήσεις και ανακαλύψτε τις πραγματικές ιστορίες πίσω από τα μνημεία.",
        "Περπατήστε στην Πλάκα και στου Ψυρρή με ανθρώπους που ξέρουν τις κρυφές γωνιές.",
        "Φάτε εκεί που τρώνε οι Αθηναίοι, από την Κεντρική Αγορά μέχρι τις γειτονιές.",
        "Αποδράστε από τη ζέστη της πόλης για μια μέρα στη θάλασσα και στα νησιά."
      ],
    },
    image: "/images/athens.webp",
  },
  {
    slug: "santorini-tours",
    seo: {
      title: {
        en: "Santorini Tours & Experiences | Sunset Cruises, Wine Tours & Caldera Trips",
        el: "Εκδρομές & Εμπειρίες στη Σαντορίνη | Κρουαζιέρες στο Ηλιοβασίλεμα & Οινογνωσία",
      },
      description: {
        en: "Explore the best Santorini tours and experiences, from caldera sunset cruises and volcanic island trips to wine tasting tours, village walks, beaches, and romantic viewpoints.",
        el: "Ανακαλύψτε τις καλύτερες εκδρομές στη Σαντορίνη: κρουαζιέρες στην καλντέρα, οινογνωσία, εκδρομές στο ηφαίστειο, περιπάτους σε γραφικά χωριά και ρομαντικά ηλιοβασιλέματα.",
      },
    },
    title: {
      en: "Santorini Tours & Experiences",
      el: "Εκδρομές & Εμπειρίες στη Σαντορίνη",
    },
    description: {
      en: "Santorini is one of Greece’s most iconic islands, known for its caldera views, sunset villages, volcanic scenery, and romantic atmosphere.",
      el: "Η Σαντορίνη είναι ένα από τα πιο εμβληματικά νησιά της Ελλάδας, γνωστό για τη θέα στην καλντέρα, τα χωριά στο ηλιοβασίλεμα, το ηφαιστειακό τοπίο και τη ρομαντική ατμόσφαιρα.",
    },
    overview: {
      en: "Discover Santorini beyond the sunset. Santorini is famous for its sunsets, and yes, they are a big part of the island’s magic. But Santorini is more than one evening view in Oia. It is volcanic cliffs, quiet villages, old paths, wineries shaped by the island’s dry soil, black and red beaches, small chapels, boat trips, and that strange feeling of standing above a flooded volcano.\n\nSantorini tours help you understand the island better. A caldera cruise shows you the island from the sea. A wine tour introduces you to one of Greece’s most distinctive wine regions. A volcanic excursion connects the views with the island’s natural history. And a village or photography tour helps you find the quieter corners behind the famous images.\n\nWhether you are visiting Santorini for romance, photography, food, wine, beaches, or a once-in-a-lifetime Greece trip, the island offers much more than a quick sunset stop.",
      el: "Ανακαλύψτε τη Σαντορίνη πέρα από το ηλιοβασίλεμα. Η Σαντορίνη είναι διάσημη για τα ηλιοβασιλέματά της, και ναι, αποτελούν μεγάλο μέρος της μαγείας του νησιού. Αλλά η Σαντορίνη είναι πολλά περισσότερα από μια βραδινή θέα στην Οία. Είναι οι ηφαιστειακοί βράχοι, τα ήσυχα χωριά, τα παλιά μονοπάτια, τα οινοποιεία που διαμορφώθηκαν από το ξηρό έδαφος του νησιού, οι μαύρες και κόκκινες παραλίες, τα μικρά ξωκλήσια, οι βόλτες με σκάφος και αυτή η παράξενη αίσθηση του να στέκεσαι πάνω από ένα βυθισμένο ηφαίστειο.\n\nΟι εκδρομές στη Σαντορίνη σας βοηθούν να κατανοήσετε το νησί καλύτερα. Μια κρουαζιέρα στην καλντέρα σας δείχνει το νησί από τη θάλασσα. Μια περιοδεία κρασιού σας εισάγει σε μια από τις πιο ιδιαίτερες οινοπαραγωγικές περιοχές της Ελλάδας. Μια ηφαιστειακή εκδρομή συνδέει τη θέα με τη φυσική ιστορία του νησιού. Και μια περιήγηση στα χωριά ή μια φωτογραφική περιήγηση σας βοηθά να βρείτε τις πιο ήσυχες γωνιές πίσω από τις διάσημες εικόνες.\n\nΕίτε επισκέπτεστε τη Σαντορίνη για ρομαντισμό, φωτογραφία, φαγητό, κρασί, παραλίες, είτε για ένα ταξίδι ζωής στην Ελλάδα, το νησί προσφέρει πολλά περισσότερα από μια γρήγορη στάση για το ηλιοβασίλεμα.",
    },
    recommendedIntro: {
      en: "Selected experiences and guided options in Santorini. We focus on quality and local insight to help you see the island properly.",
      el: "Επιλεγμένες εμπειρίες και ξεναγήσεις στη Σαντορίνη. Εστιάζουμε στην ποιότητα και την τοπική γνώση για να γνωρίσετε το νησί σωστά.",
    },
    moreToursIntro: {
      en: "Explore more bookable activities in Santorini, including caldera cruises, volcano visits, wine tours, and village experiences.",
      el: "Εξερευνήστε περισσότερες δραστηριότητες στη Σαντορίνη, συμπεριλαμβανομένων κρουαζιερών στην καλντέρα, επισκέψεων στο ηφαίστειο, οινογνωσίας και εμπειριών στα χωριά.",
    },
    whatToBook: {
      title: { en: "Best Things to Do in Santorini", el: "Τι να Κλείσετε στη Σαντορίνη" },
      sections: [
        {
          title: { en: "Caldera sunset cruises", el: "Κρουαζιέρες στην Καλντέρα & Ηλιοβασίλεμα" },
          content: { en: "Sail around the caldera, enjoy volcano views, swimming stops, and one of the most famous sunsets in Greece from the water.", el: "Πλεύστε στην καλντέρα, απολαύστε τη θέα στο ηφαίστειο, κάντε στάσεις για κολύμπι και δείτε ένα από τα διασημότερα ηλιοβασιλέματα από τη θάλασσα." },
        },
        {
          title: { en: "Santorini wine tasting tours", el: "Οινογνωσία στη Σαντορίνη" },
          content: { en: "Visit local wineries, taste unique volcanic wines like Assyrtiko, and learn about the island's distinctive vineyard heritage.", el: "Επισκεφθείτε τοπικά οινοποιεία, δοκιμάστε μοναδικά ηφαιστειακά κρασιά όπως το Ασύρτικο και μάθετε για την ιδιαίτερη παράδοση των αμπελώνων του νησιού." },
        },
        {
          title: { en: "Volcano and hot springs trips", el: "Ηφαίστειο & Ιαματικές Πηγές" },
          content: { en: "Explore the volcanic islands inside the caldera, walk on lava landscapes, and swim in natural mineral-rich hot springs.", el: "Εξερευνήστε τα ηφαιστειακά νησιά μέσα στην καλντέρα, περπατήστε σε τοπία λάβας και κολυμπήστε σε φυσικές ιαματικές πηγές." },
        },
        {
          title: { en: "Village walks (Oia, Fira, Imerovigli)", el: "Περίπατοι στα χωριά (Οία, Φηρά, Ημεροβίγλι)" },
          content: { en: "Discover the most iconic cliffside villages, blue domes, and viewpoints with local guidance to find the best spots.", el: "Ανακαλύψτε τα εμβληματικά χωριά στους βράχους, τους μπλε τρούλους και τα καλύτερα σημεία θέας με τη βοήθεια τοπικών οδηγών." },
        },
        {
          title: { en: "Akrotiri & beaches tours", el: "Ακρωτήρι & Παραλίες" },
          content: { en: "Visit the prehistoric settlement of Akrotiri and unique beaches like the Red Beach and black-sand coastal areas.", el: "Επισκεφθείτε τον προϊστορικό οικισμό στο Ακρωτήρι και μοναδικές παραλίες όπως η Κόκκινη Παραλία και οι μαύρες αμμουδιές." },
        },
      ],
    },
    planningTips: {
      title: { en: "Planning Tips for Santorini", el: "Πρακτικές Συμβουλές για τη Σαντορίνη" },
      tips: {
        en: [
          "Book sunset cruises at least 2-3 weeks in advance during high season.",
          "Visit Akrotiri early in the day to avoid the large tour bus groups.",
          "Walking from Fira to Oia is a classic experience but takes 3-4 hours; bring water.",
          "Santorini's wineries are best visited in the afternoon for vineyard views.",
          "Bring sun protection and proper shoes for the volcano hiking trips.",
        ],
        el: [
          "Κλείστε τις κρουαζιέρες στο ηλιοβασίλεμα τουλάχιστον 2-3 εβδομάδες πριν κατά την υψηλή περίοδο.",
          "Επισκεφθείτε το Ακρωτήρι νωρίς τη μέρα για να αποφύγετε τα μεγάλα γκρουπ.",
          "Η διαδρομή από τα Φηρά στην Οία είναι κλασική εμπειρία αλλά διαρκεί 3-4 ώρες· έχετε μαζί σας νερό.",
          "Τα οινοποιεία της Σαντορίνης είναι καλύτερα να τα επισκεφθείτε το απόγευμα για τη θέα.",
          "Έχετε μαζί σας αντηλιακό και κατάλληλα παπούτσια για την πεζοπορία στο ηφαίστειο.",
        ],
      },
    },
    faq: {
      title: { en: "FAQ About Santorini Tours", el: "Συχνές Ερωτήσεις για τη Σαντορίνη" },
      questions: [
        {
          question: { en: "What are the best tours to do in Santorini?", el: "Ποιες είναι οι καλύτερες εκδρομές στη Σαντορίνη;" },
          answer: { en: "The most popular are sunset cruises, wine tasting tours, volcano excursions, and photography tours of Oia and Fira.", el: "Οι πιο δημοφιλείς είναι οι κρουαζιέρες στο ηλιοβασίλεμα, η οινογνωσία, οι εκδρομές στο ηφαίστειο και οι φωτογραφικές περιηγήσεις στην Οία και τα Φηρά." },
        },
        {
          question: { en: "Is a Santorini sunset cruise worth it?", el: "Αξίζει μια κρουαζιέρα στο ηλιοβασίλεμα στη Σαντορίνη;" },
          answer: { en: "Yes. It lets you see the caldera, volcano, and sunset from the sea, which is much more relaxed than the crowded viewpoints on land.", el: "Ναι. Σας επιτρέπει να δείτε την καλντέρα, το ηφαίστειο και το ηλιοβασίλεμα από τη θάλασσα, κάτι που είναι πολύ πιο χαλαρό από τα γεμάτα κόσμο σημεία στη στεριά." },
        },
        {
          question: { en: "Are Santorini wine tours good for beginners?", el: "Είναι οι οινοπεριηγήσεις στη Σαντορίνη κατάλληλες για αρχάριους;" },
          answer: { en: "Yes. You don't need to be an expert. The tours focus on tasting and learning about the island's unique volcanic soil and tradition.", el: "Ναι. Δεν χρειάζεται να είστε ειδικός. Οι περιηγήσεις εστιάζουν στη γευσιγνωσία και στην εκμάθηση της μοναδικής ηφαιστειακής παράδοσης του νησιού." },
        },
        {
          question: { en: "Can you visit the volcano in Santorini?", el: "Μπορείτε να επισκεφθείτε το ηφαίστειο στη Σαντορίνη;" },
          answer: { en: "Yes. Many boat tours visit the volcanic islands inside the caldera where you can walk on the lava fields.", el: "Ναι. Πολλές εκδρομές με σκάφος επισκέπτονται τα ηφαιστειακά νησιά μέσα στην καλντέρα όπου μπορείτε να περπατήσετε στα πεδία λάβας." },
        },
        {
          question: { en: "How many days do you need in Santorini?", el: "Πόσες μέρες χρειάζεστε στη Σαντορίνη;" },
          answer: { en: "Two to three days are enough for highlights, but four days allow for a better pace, including a cruise, wine tasting, and beach time.", el: "Δύο με τρεις μέρες είναι αρκετές για τα κύρια σημεία, αλλά τέσσερις μέρες επιτρέπουν καλύτερο ρυθμό, συμπεριλαμβανομένης μιας κρουαζιέρας και οινογνωσίας." },
        },
      ],
    },
    internalCta: {
      title: { en: "Start exploring Santorini", el: "Ξεκινήστε την εξερεύνηση της Σαντορίνης" },
      text: { en: "Santorini is famous for its views, but the real experience is in the mix of sailing, wine, and history. Find your perfect island experience.", el: "Η Σαντορίνη είναι διάσημη για τη θέα της, αλλά η πραγματική εμπειρία βρίσκεται στον συνδυασμό θάλασσας, κρασιού και ιστορίας. Βρείτε την τέλεια εμπειρία." },
      linkHref: "/destinations/santorini",
      linkLabel: { en: "Explore Santorini Guide", el: "Οδηγός Σαντορίνης" },
    },
    highlights: {
      en: [
        "Caldera Sunset Cruises",
        "Volcanic Wine Tasting",
        "Volcano & Hot Springs Trips",
        "Iconic Cliffside Village Walks",
      ],
      el: [
        "Κρουαζιέρες στην Καλντέρα",
        "Ηφαιστειακή Οινογνωσία",
        "Εκδρομές στο Ηφαίστειο",
        "Περίπατοι στα Χωριά της Καλντέρας",
      ],
    },
    highlightReasons: {
      en: [
        "Experience the island's famous sunset from the deck of a boat, away from the Oia crowds.",
        "Discover some of Greece's most unique wines in traditional volcanic vineyards.",
        "Walk on the actual volcano that shaped the island and swim in natural hot springs.",
        "Explore the white-washed streets and blue domes of Oia, Fira, and Imerovigli.",
      ],
      el: [
        "Ζήστε το διάσημο ηλιοβασίλεμα από το κατάστρωμα ενός σκάφους, μακριά από την πολυκοσμία της Οίας.",
        "Ανακαλύψτε μερικά από τα πιο μοναδικά κρασιά της Ελλάδας σε παραδοσιακούς ηφαιστειακούς αμπελώνες.",
        "Περπατήστε στο ηφαίστειο που διαμόρφωσε το νησί και κολυμπήστε σε ιαματικές πηγές.",
        "Εξερευνήστε τα λευκά σοκάκια και τους μπλε τρούλους στην Οία, τα Φηρά και το Ημεροβίγλι."
      ],
    },
    image: "/images/santorini.webp",
  },
  {
    slug: "rhodes-tours",
    seo: {
      title: {
        en: "Rhodes Tours & Experiences | Medieval City, Boat Trips & Lindos Day Tours | GoGreeceNow",
        el: "Εκδρομές & Εμπειρίες στη Ρόδο | Μεσαιωνική Πόλη, Boat Trips & Λίνδος | GoGreeceNow",
      },
      description: {
        en: "Explore the best Rhodes tours and experiences, from guided walks inside the medieval Old Town and Lindos day trips to catamaran boat tours, jeep safaris, and sunset excursions along the coast.",
        el: "Ανακαλύψτε τις καλύτερες εκδρομές στη Ρόδο: ξεναγήσεις στη μεσαιωνική πόλη, ημερήσιες εκδρομές στη Λίνδο, καταμαράν, jeep safaris και ηλιοβασιλέματα στην ακτή.",
      },
    },
    title: {
      en: "Rhodes Tours & Experiences",
      el: "Εκδρομές & Εμπειρίες στη Ρόδο",
    },
    description: {
      en: "Rhodes is where a UNESCO medieval city, ancient ruins at Lindos, and some of the clearest Aegean water all exist on the same island.",
      el: "Η Ρόδος είναι όπου μια μεσαιωνική πόλη της UNESCO, αρχαία ερείπια στη Λίνδο και μερικά από τα πιο καθαρά νερά του Αιγαίου συνυπάρχουν στο ίδιο νησί.",
    },
    overview: {
      en: "Discover Rhodes beyond the beach. Rhodes is the kind of island that surprises people, because most visitors arrive expecting sun and sea and then spend three days completely absorbed in a medieval city they didn't expect to care about. The Old Town of Rhodes is a UNESCO World Heritage Site and one of the genuinely unmissable places in Greece — not because a guide says so, but because walking its cobblestone streets inside fortified walls at night, with almost no cars and very few signs, actually feels like a different century.\n\nBut Rhodes is also Lindos, with its ancient acropolis perched above a whitewashed village and a sheltered bay of turquoise water below. It is boat trips to sea caves and deserted coves. It is a green, hilly interior where Byzantine churches sit in pine forests and small villages make their own wine. And it has one of the longest tourist seasons in Greece, meaning you can visit from April to late October and still find good conditions for everything.\n\nRhodes tours help you get more from the island. A walking tour of the Old Town turns confusing medieval lanes into a real story about the Knights of St John, Ottoman rule, and the Italian period. A Lindos day trip combines ancient history with beach time in one manageable excursion. A boat tour takes you to the places no road reaches. And a jeep safari covers the interior in a way that would take days to replicate on your own.",
      el: "Ανακαλύψτε τη Ρόδο πέρα από την παραλία. Οι περισσότεροι επισκέπτες φτάνουν στο νησί περιμένοντας ήλιο και θάλασσα και καταλήγουν να περάσουν τρεις μέρες απορροφημένοι σε μια μεσαιωνική πόλη που δεν περίμεναν να τους συναρπάσει. Η Παλιά Πόλη της Ρόδου είναι Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO — το να περπατάς στα λιθόστρωτα σοκάκια της μέσα στα οχυρά τείχη το βράδυ μοιάζει πραγματικά με άλλο αιώνα.\n\nΑλλά η Ρόδος είναι επίσης η Λίνδος, με την αρχαία ακρόπολη πάνω από ένα γραφικό χωριό και μια προστατευμένη τιρκουάζ παραλία. Είναι βαρκάδες σε θαλάσσιες σπηλιές, είναι ένα πράσινο εσωτερικό με βυζαντινές εκκλησίες και μικρά χωριά που παράγουν το δικό τους κρασί. Η τουριστική σεζόν είναι από τις μεγαλύτερες στην Ελλάδα, από Απρίλιο έως Οκτώβριο.\n\nΟι εκδρομές στη Ρόδο σε βοηθούν να δεις περισσότερα. Μια ξενάγηση στην Παλιά Πόλη μετατρέπει τα στενά δρομάκια σε μια ζωντανή ιστορία. Μια εκδρομή στη Λίνδο συνδυάζει αρχαία ιστορία με θάλασσα. Μια βαρκάδα σε παίρνει σε μέρη που δεν φτάνει δρόμος.",
    },
    recommendedIntro: {
      en: "These are selected local experiences and featured options we currently recommend in Rhodes. As GoGreeceNow continues to grow, more handpicked activities and local partners will be added here.",
      el: "Αυτές είναι επιλεγμένες τοπικές εμπειρίες που προτείνουμε στη Ρόδο. Καθώς το GoGreeceNow μεγαλώνει, θα προστίθενται εδώ περισσότερες προσεγμένες δραστηριότητες και τοπικοί συνεργάτες.",
    },
    moreToursIntro: {
      en: "Looking for more options? Here you can explore additional tours and activities in Rhodes, including popular excursions, boat tours, and other bookable ideas for your stay.",
      el: "Αναζητάτε περισσότερες επιλογές; Εδώ μπορείτε να εξερευνήσετε επιπλέον εκδρομές και δραστηριότητες στη Ρόδο, όπως δημοφιλείς εξορμήσεις, θαλάσσιες εμπειρίες και άλλες ιδέες.",
    },
    whatToBook: {
      title: { en: "Best Things to Do in Rhodes", el: "Τι να Κάνετε στη Ρόδο" },
      sections: [
        {
          title: { en: "Medieval Old Town guided walks", el: "Ξεναγήσεις στη Μεσαιωνική Πόλη" },
          content: { en: "The Old Town of Rhodes is one of the most complete medieval walled cities in the world, and a guided tour makes an enormous difference. On your own, it's a beautiful maze. With a guide who knows the Street of Knights, the Palace of the Grand Master, the Ottoman mosques, the Jewish Quarter, and the logic behind the city's 2,000-year layering, it becomes a genuinely compelling place. Morning walks avoid the afternoon heat and the worst of the cruise ship crowds.", el: "Η Παλιά Πόλη της Ρόδου είναι μια από τις πιο ολοκληρωμένες μεσαιωνικές οχυρωμένες πόλεις στον κόσμο. Μόνος σου είναι ένας όμορφος λαβύρινθος. Με ξεναγό που γνωρίζει την Οδό των Ιπποτών, το Παλάτι του Μεγάλου Μαγίστρου, τα οθωμανικά τζαμιά και την εβραϊκή συνοικία, γίνεται ένας πραγματικά συναρπαστικός χώρος." },
        },
        {
          title: { en: "Lindos day trips", el: "Ημερήσιες εκδρομές στη Λίνδο" },
          content: { en: "Lindos is 55 km south of Rhodes Town and worth the trip for two separate reasons: the ancient acropolis with its Doric temple of Athena Lindia and panoramic Aegean views, and the village and beach below, which on a good day is one of the best-looking places in the Dodecanese. Organised day tours handle transport and include entrance fees; independent travellers can take the public bus, but guided tours give you the historical context that makes the ruins make sense.", el: "Η Λίνδος είναι 55 χλμ νότια της πόλης της Ρόδου και αξίζει το ταξίδι για δύο λόγους: την αρχαία ακρόπολη με τον δωρικό ναό της Αθηνάς Λινδίας και τη μοναδική παραλία από κάτω. Οι οργανωμένες εκδρομές περιλαμβάνουν μεταφορά και εισιτήρια." },
        },
        {
          title: { en: "Catamaran and boat tours", el: "Καταμαράν & θαλάσσιες εκδρομές" },
          content: { en: "Rhodes has an excellent range of boat tours, from small group speedboat excursions to full-day catamarans with swimming stops at sea caves, remote beaches, and occasionally the Turkish coast near Marmaris. Most boat tours include snorkelling equipment, lunch or snacks, and open bar.", el: "Η Ρόδος έχει εξαιρετική γκάμα θαλάσσιων εκδρομών, από ταχύπλοα μικρών ομάδων μέχρι ολοήμερα καταμαράν. Τα περισσότερα περιλαμβάνουν εξοπλισμό snorkelling, γεύμα και open bar." },
        },
        {
          title: { en: "Jeep safari and village tours", el: "Jeep Safari & εκδρομές σε χωριά" },
          content: { el: "Το εσωτερικό της Ρόδου συχνά παραβλέπεται, αλλά ακριβώς γι' αυτό αξίζει να το εξερευνήσετε. Λόφοι με πεύκα, μοναστήρια, βυζαντινές τοιχογραφίες, το χωριό Έμπωνας για τοπική οινογνωσία. Μια ημερήσια εκδρομή με jeep καλύπτει πολύ περισσότερο έδαφος από ένα ενοικιαζόμενο αυτοκίνητο.", en: "The interior of Rhodes is often overlooked, which is exactly why it is worth exploring. Pine-covered hills, small monasteries, Byzantine frescoes, and Embonas village for local wine tasting. A half-day or full-day jeep safari covers far more ground than a rented car and usually includes stops that don't appear on any standard tourist map." },
        },
        {
          title: { en: "Sunset and evening tours", el: "Ηλιοβασίλεμα & βραδινές εκδρομές" },
          content: { en: "Rhodes Town has outstanding evening atmosphere, particularly inside the Old Town where restaurants, bars, and small squares fill up after dark. Organised sunset excursions by boat give you the best views of the island's coastline and fortress walls at the end of the day — notably around the Mandraki Harbour area and the northern cape where the Colossus of Rhodes once stood.", el: "Η πόλη της Ρόδου έχει υπέροχη βραδινή ατμόσφαιρα, ειδικά στην Παλιά Πόλη. Οι οργανωμένες εκδρομές ηλιοβασιλέματος με σκάφος προσφέρουν την καλύτερη θέα στα τείχη του φρουρίου." },
        },
      ],
    },
    planningTips: {
      title: { en: "Planning Tips for Rhodes Tours", el: "Πρακτικές Συμβουλές" },
      tips: {
        en: [
          "Visit the Old Town early in the morning or in the evening — midday in July and August is uncomfortably hot and crowded with cruise ship visitors.",
          "Book Lindos day trips in advance; the village gets extremely busy in peak season and the acropolis queues can be long by mid-morning.",
          "The east coast is calmer and better for swimming; the west coast is windier and better for windsurfing (especially around Prasonisi).",
          "If you are doing a boat tour, confirm whether it includes swimming stops and what the meal arrangement is before booking.",
          "Embonas is the wine village of Rhodes — a jeep safari that includes a tasting there is a genuinely good use of a morning.",
          "Rhodes has a very long season. Late May, June, and September offer good weather without the July–August peak crowds.",
        ],
        el: [
          "Επισκεφθείτε την Παλιά Πόλη νωρίς το πρωί ή το βράδυ — το μεσημέρι Ιούλιο και Αύγουστο έχει πολλή ζέστη και κόσμο.",
          "Κλείστε τις εκδρομές στη Λίνδο από πριν — το χωριό γεμίζει στην υψηλή περίοδο.",
          "Η ανατολική ακτή είναι πιο ήρεμη για μπάνιο, η δυτική πιο ανεμώδης για windsurfing.",
          "Αν κάνετε βαρκάδα, επιβεβαιώστε αν περιλαμβάνει στάσεις για μπάνιο και γεύμα.",
          "Ο Έμπωνας είναι το οινοπαραγωγικό χωριό της Ρόδου — μια γευσιγνωσία εκεί αξίζει.",
          "Τέλη Μαΐου, Ιούνιος και Σεπτέμβριος έχουν τον καλύτερο καιρό χωρίς πολύ κόσμο.",
        ],
      },
    },
    faq: {
      title: { en: "FAQ About Rhodes Tours", el: "Συχνές Ερωτήσεις" },
      questions: [
        {
          question: { en: "What are the best tours to do in Rhodes?", el: "Ποιες είναι οι καλύτερες εκδρομές στη Ρόδο;" },
          answer: { en: "The most popular are guided walks inside the medieval Old Town, Lindos day trips, catamaran and boat tours, jeep safaris to the interior, and sunset excursions along the Aegean coast.", el: "Οι πιο δημοφιλείς είναι οι ξεναγήσεις στην Παλιά Πόλη, οι ημερήσιες εκδρομές στη Λίνδο, τα καταμαράν, τα jeep safaris στο εσωτερικό και οι εκδρομές ηλιοβασιλέματος." },
        },
        {
          question: { en: "Is the Rhodes Old Town worth a guided tour?", el: "Αξίζει η ξενάγηση στην Παλιά Πόλη;" },
          answer: { en: "Yes. The Old Town is one of the best-preserved medieval cities in Europe and a guided walk makes a significant difference in understanding the layers of history, from the Knights of St John to the Ottoman period.", el: "Ναι. Η Παλιά Πόλη είναι μια από τις καλύτερα διατηρημένες μεσαιωνικές πόλεις και μια ξενάγηση κάνει τεράστια διαφορά στην κατανόηση της ιστορίας της." },
        },
        {
          question: { en: "How do you get to Lindos from Rhodes Town?", el: "Πώς πάει κανείς από την πόλη της Ρόδου στη Λίνδο;" },
          answer: { en: "Lindos is about 55 km south of Rhodes Town. You can take a public bus, join an organised day tour, or hire a taxi. Most tours combine the Acropolis of Lindos with a stop at Lindos Bay beach.", el: "Η Λίνδος είναι 55 χλμ νότια. Μπορείτε να πάρετε λεωφορείο, οργανωμένη εκδρομή ή ταξί. Οι περισσότερες εκδρομές συνδυάζουν την Ακρόπολη με την παραλία." },
        },
        {
          question: { en: "Are boat tours in Rhodes worth it?", el: "Αξίζουν οι βαρκάδες στη Ρόδο;" },
          answer: { en: "Absolutely. Rhodes has excellent catamaran and speedboat tours to nearby beaches, sea caves, and Turkish coastline day trips. The sea conditions are generally good from May to October.", el: "Σίγουρα. Η Ρόδος έχει εξαιρετικά καταμαράν και ταχύπλοα για κοντινές παραλίες, θαλάσσιες σπηλιές και την τουρκική ακτή." },
        },
        {
          question: { en: "How many days do you need in Rhodes?", el: "Πόσες μέρες χρειάζονται στη Ρόδο;" },
          answer: { en: "Three to four days let you cover the Old Town properly, do a Lindos day trip, and join a boat tour. Five or six days gives you time to explore the quieter western coast and inland villages.", el: "Τρεις με τέσσερις μέρες σου επιτρέπουν να δεις την Παλιά Πόλη, τη Λίνδο και μια βαρκάδα. Πέντε ή έξι μέρες σου δίνουν χρόνο για ήσυχες παραλίες και ορεινά χωριά." },
        },
      ],
    },
    internalCta: {
      title: { en: "Continue planning your trip", el: "Συνέχισε τον προγραμματισμό" },
      text: { en: "Explore our Rhodes destination guide for beaches, places to stay, food ideas, and practical travel inspiration.", el: "Εξερεύνησε τον οδηγό προορισμού για τη Ρόδο για παραλίες, διαμονή, φαγητό και πρακτική έμπνευση." },
      linkHref: "/destinations/rhodes",
      linkLabel: { en: "Explore Rhodes Guide", el: "Οδηγός Ρόδου" },
    },
    highlights: {
      en: [
        "Medieval Old Town walks",
        "Lindos Acropolis day trips",
        "Catamaran & boat tours",
        "Jeep safari & village tours",
      ],
      el: [
        "Περίπατοι στη Μεσαιωνική Πόλη",
        "Εκδρομές στην Ακρόπολη της Λίνδου",
        "Καταμαράν & θαλάσσιες εκδρομές",
        "Jeep Safari & εκδρομές σε χωριά",
      ],
    },
    highlightReasons: {
      en: [
        "We handpick real, operating businesses that rely on quality service instead of just generic tourist traps.",
        "From guided walks to sea explorations, find the exact local experience you need.",
        "Carefully selected options ensuring you get the most authentic side of Rhodes.",
        "Save time by browsing clear, structured information before you even arrive.",
      ],
      el: [
        "Επιλέγουμε πραγματικές επιχειρήσεις που βασίζονται στην ποιοτική εξυπηρέτηση.",
        "Από ξεναγήσεις μέχρι θαλάσσιες εξερευνήσεις, βρες την ιδανική εμπειρία.",
        "Προσεκτικά επιλεγμένες προτάσεις για αυθεντική Ρόδο.",
        "Γλιτώστε χρόνο με ξεκάθαρες πληροφορίες πριν φτάσετε.",
      ],
    },
  },
];

export const experienceBusinesses: ExperienceBusiness[] = [
  {
    slug: "iren-rooms",
    landingSlug: "lesvos-tours",
    name: "Iren Rooms",
    category: {
      en: "Accommodation",
      el: "Διαμονή",
    },
    place: "Lesvos, Μυτιλήνη",
    info: {
      en: "Discover top-rated accommodation in Lesvos, offering authentic hospitality and comfortable rooms.",
      el: "Ανακαλύψτε κορυφαία διαμονή στη Λέσβο, που προσφέρει αυθεντική φιλοξενία και άνετα δωμάτια.",
    },
    image: "/images/businesses/Iren/dsc-0752.webp",
    href: "/businesses/iren-rooms",
    mapQuery: "Iren Rooms Lesvos",
    overview: {
      en: "Iren Rooms is an exceptional local business providing a peaceful setting, comfortable amenities, and the warm hospitality Lesvos is famous for.",
      el: "Το Iren Rooms είναι μια εξαιρετική τοπική επιχείρηση που προσφέρει γαλήνιο περιβάλλον, άνετες παροχές και τη ζεστή φιλοξενία για την οποία φημίζεται η Λέσβος.",
    },
    description: {
      en: "Iren Rooms is a stately 3 star mansion, with warm welcoming environment, located in the heart of Mitilini at the port, just 250 meters from the point where the ships dock and in the middle of the historical centre of the town.\n\nAll the rooms have private bathroom, air condition, TV, refrigerator, hair dryer, kettle, coffee, tea, sugar, milk and mineral water.\n\nLooking forward to hosting you.",
      el: "Το Iren Rooms είναι ένα αρχοντικό 3 αστέρων, με ζεστό και φιλόξενο περιβάλλον, το οποίο βρίσκεται στην καρδιά της Μυτιλήνης στο λιμάνι, μόλις 250 μέτρα από το σημείο όπου δένουν τα πλοία και στη μέση του ιστορικού κέντρου της πόλης.\n\nΌλα τα δωμάτια διαθέτουν ιδιωτικό μπάνιο, κλιματισμό, τηλεόραση, ψυγείο, πιστολάκι μαλλιών, βραστήρα, καφέ, τσάι, ζάχαρη, γάλα και εμφιαλωμένο νερό.\n\nΑνυπομονούμε να σας φιλοξενήσουμε.",
    },
    highlights: {
      en: ["Comfortable beds & nice views", "Peaceful & authentic environment", "Local Lesvian hospitality", "Close to top beaches & villages", "Free WiFi access", "Ideal starting point for road trips"],
      el: ["Άνετα κρεβάτια & ωραία θέα", "Ήσυχο & αυθεντικό περιβάλλον", "Τοπική λεσβιακή φιλοξενία", "Κοντά σε κορυφαίες παραλίες", "Δωρεάν WiFi", "Ιδανική αφετηρία για εξορμήσεις"],
    },
    services: {
      en: ["Spacious and beautifully decorated rooms", "Daily room freshness and cleaning", "Air conditioning for hot summer days", "Local tips and guidance from the hosts", "Relaxing garden/outdoor areas"],
      el: ["Ευρύχωρα και όμορφα διακοσμημένα δωμάτια", "Καθημερινή φροντίδα και καθαριότητα", "Κλιματισμός για τις ζεστές μέρες", "Τοπικές συμβουλές και καθοδήγηση από τους οικοδεσπότες", "Χαλαρωτικοί εξωτερικοί χώροι/κήπος"],
    },
    story: {
      en: "Built with passion for true Greek hospitality, Iren Rooms serves as the ultimate retreat in Lesvos.",
      el: "Χτισμένο με μεράκι για την αληθινή ελληνική φιλοξενία, το Iren Rooms αποτελεί το απόλυτο καταφύγιο στη Λέσβο.",
    },
    practicalInfo: {
      en: ["Check-in usually in the afternoon; communicate your arrival time", "Highly recommended to rent a car to explore the surrounding Lesvos island", "Book early during July and August as availability gets limited"],
      el: ["Το check-in γίνεται συνήθως το απόγευμα· ενημερώστε για την ώρα άφιξης", "Συνιστάται ιδιαίτερα η ενοικίαση αυτοκινήτου για την εξερεύνηση της Λέσβου", "Κάντε κράτηση νωρίς για Ιούλιο και Αύγουστο λόγω υψηλής ζήτησης"],
    },
    routes: {
      en: ["Mytilene Center", "Mytilene City Break", "Exploring Lesvos"],
      el: ["Κέντρο Μυτιλήνης", "Απόδραση στη Μυτιλήνη", "Εξορμήσεις στη Λέσβο"],
    },
    perfectFor: {
      en: ["Couples looking for a romantic escape", "Families wanting a calm environment", "Travelers seeking authentic Greek hospitality", "Those exploring Lesvos on a road trip"],
      el: ["Ζευγάρια που αναζητούν ρομαντική απόδραση", "Οικογένειες που θέλουν ήρεμο περιβάλλον", "Ταξιδιώτες που επιζητούν αυθεντική ελληνική φιλοξενία", "Όσους εξερευνούν τη Λέσβο με αυτοκίνητο"],
    },
    ctaLabel: {
      en: "Book your stay",
      el: "Κάντε κράτηση",
    },
    phone: "6977353672",
    email: "",
    website: "",
    galleryImages: [
      "/images/businesses/Iren/4.webp",
      "/images/businesses/Iren/5.webp",
      "/images/businesses/Iren/6.webp",
      "/images/businesses/Iren/7.webp",
      "/images/businesses/Iren/8.webp",
      "/images/businesses/Iren/dsc-0620.webp",
      "/images/businesses/Iren/dsc-0636.webp",
      "/images/businesses/Iren/dsc-0669.webp",
      "/images/businesses/Iren/dsc-0671.webp",
      "/images/businesses/Iren/dsc-0698.webp",
      "/images/businesses/Iren/dsc-0718.webp",
      "/images/businesses/Iren/dsc-0752.webp",
      "/images/businesses/Iren/dsc-0757.webp",
      "/images/businesses/Iren/f10.webp",
      "/images/businesses/Iren/ireneok.webp",
      "/images/businesses/Iren/3.webp"
    ],
    mapIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.0263330769176!2d26.556568776352858!3d39.10587063437584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba6709b0b785ef%3A0x5550bbe9b3d42544!2sIren%20Rooms!5e0!3m2!1sel!2sgr!4v1775805404970!5m2!1sel!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  },
  {
  slug: "rolling-into-the-blue",
  landingSlug: "kefalonia-tours",
  travelInfoSlug: "best-boat-trips-in-kefalonia",
  name: "Rolling Into The Blue",
  category: {
    en: "Boat rental & boat trips",
    el: "Ενοικίαση σκάφους / boat trips",
  },
  place: "Zola, near Myrtos, Kefalonia",
  info: {
    en: "A starting point for one of the most beautiful sea experiences in northern Kefalonia, with no-license boat rentals and private cruises with skipper from the small port of Zola near Agia Kyriaki.",
    el: "Αφετηρία για μία από τις πιο όμορφες θαλάσσιες εμπειρίες στη βόρεια Κεφαλονιά, με ενοικίαση σκαφών χωρίς άδεια και ιδιωτικές κρουαζιέρες με skipper από το λιμανάκι της Ζόλας, κοντά στην Αγία Κυριακή.",
  },
  image: "/images/businesses/rolling-into-the-blue/14.webp",
  href: "/businesses/rolling-into-the-blue",
  badge: "Featured",
  galleryCount: 15,
  mapQuery: "Rolling Into The Blue Zola port Agia Kyriaki Kefalonia Greece",
  overview: {
    en: "Rolling Into The Blue operates from the small port of Zola, next to Agia Kyriaki beach in Kefalonia, and offers two main options: small motorboats without a license for visitors who want freedom on the water, and private cruises with skipper for guests who prefer a more relaxed and guided experience. From here, you can reach beautiful coves and beaches that are not easily accessible by road, including Fteri, Blue Lagoon, Kamari, Amidi, and parts of the wider Myrtos bay coastline.",
    el: "Το Rolling Into The Blue δραστηριοποιείται στο λιμανάκι της Ζόλας, δίπλα στην παραλία της Αγίας Κυριακής στην Κεφαλονιά, και προσφέρει δύο βασικές επιλογές: μικρά μηχανοκίνητα σκάφη χωρίς άδεια για όσους θέλουν ελευθερία στη θάλασσα και ιδιωτικές κρουαζιέρες με skipper για όσους προτιμούν μία πιο άνετη και καθοδηγούμενη εμπειρία. Από εδώ μπορείς να προσεγγίσεις υπέροχους κολπίσκους και παραλίες που δεν είναι εύκολα προσβάσιμες οδικώς, όπως το Fteri, η Blue Lagoon, το Kamari, το Amidi και σημεία της ευρύτερης ακτογραμμής του κόλπου του Μύρτου.",
  },
  description: {
  en: "One of the best starting points for a beautiful sea experience in northern Kefalonia. Rolling Into The Blue operates from the small port of Zola next to Agia Kyriaki beach and offers either small no-license motorboat rentals or private cruises with skipper. From here, you set off for coves with no road access: Fteri, Blue Lagoon, Kamari, Amidi, and even the wider Myrtos bay coastline — all in waters that remain clear, calm and unspoiled. If you want comfort, choose a private cruise with captain; if you want freedom, become the 'captain' of a boat up to 30 hp, with no license required, and follow their guidance for safe routes.",
  el: "Αφετηρία για μια από τις πιο όμορφες θαλάσσιες εμπειρίες της βόρειας Κεφαλονιάς. Το Rolling Into The Blue δρα στο λιμανάκι των Ζολών δίπλα στην παραλία Αγία Κυριακή και προσφέρει είτε ενοικίαση μικρών μηχανοκίνητων σκαφών χωρίς άδεια είτε ιδιωτικές κρουαζιέρες με skipper. Από εδώ ξεκινάς για κολπίσκους που δεν πάνε με δρόμο: Fteri, Blue Lagoon, Kamari, Amidi, μέχρι και τον κόλπο του Μύρτου — όλα σε νερά που παραμένουν αγνά και ήσυχα. Αν θες άνεση, διάλεξε ιδιωτική κρουαζιέρα με καπετάνιο· αν θες ελευθερία, γίνε «καπετάνιος» σε σκάφος έως 30 hp, χωρίς δίπλωμα, και ακολούθησε τις οδηγίες τους για ασφαλείς διαδρομές.",
},
  highlights: {
    en: [
      "No-license boats up to about 30 hp",
      "Private cruises with skipper",
      "Fteri, Blue Lagoon, Kamari, and Amidi",
      "Departure from Zola near Myrtos",
    ],
    el: [
      "Σκάφη χωρίς άδεια έως περίπου 30 hp",
      "Ιδιωτικές κρουαζιέρες με skipper",
      "Fteri, Blue Lagoon, Kamari και Amidi",
      "Αναχώρηση από τη Ζόλα κοντά στον Μύρτο",
    ],
  },
  services: {
  en: [
    "No-license boats up to about 30 hp for self-guided trips to Fteri, Blue Lagoon, Kamari, Amidi and other beaches accessible only by sea",
    "Private cruises with skipper, usually lasting around 4–5 hours",
    "Morning cruises around 10:00–15:00",
    "Afternoon and sunset cruises around 17:00–20:30",
    "Homemade snacks, water and lemonade",
    "Snorkeling masks and Bluetooth music on board",
  ],
  el: [
    "Σκάφη χωρίς άδεια έως περίπου 30 hp για να πας μόνος/η σε Fteri, Blue Lagoon, Kamari, Amidi και άλλες παραλίες προσβάσιμες μόνο δια θαλάσσης",
    "Ιδιωτικές κρουαζιέρες με skipper, συνήθως διάρκειας περίπου 4–5 ωρών",
    "Πρωινές κρουαζιέρες περίπου 10:00–15:00",
    "Απογευματινές και sunset κρουαζιέρες περίπου 17:00–20:30",
    "Σπιτικά σνακ, νερά και λεμονάδες",
    "Μάσκες snorkeling και Bluetooth μουσική στο σκάφος",
  ],
},
story: {
  en: "The business operates as a local base under the identity “Rolling Into The Blue — Kefalonian Rent Boats & Cruises”, with Zola port as its departure point. Its website, video presence and local listings consistently present the same core experience: private cruises or no-license boat rentals towards the hidden coves and beaches of the wider Myrtos coastline.",
  el: "Η επιχείρηση λειτουργεί ως τοπική βάση «Rolling Into The Blue — Kefalonian Rent Boats & Cruises» με σημείο εκκίνησης το Zola port. Η παρουσία της στο site της, στο βίντεο και σε τοπικούς οδηγούς προβάλλει σταθερά την ίδια εμπειρία: ιδιωτικές βόλτες ή ενοικίαση χωρίς άδεια προς τις κρυφές ακτές και παραλίες του ευρύτερου Μύρτου.",
},
practicalInfo: {
  en: [
    "No license is required in Greece for motorboats up to 30 hp; above 30 hp you need a license or a skipper",
    "A safety briefing is given before departure; follow weather and distance guidance and keep a safe distance from rocks and caves",
    "Ask in advance whether fuel is included and what applies for deposits or damage terms",
    "Bring a hat, sunscreen, extra water or snacks, a waterproof pouch and sea shoes",
    "Demand is high from June to September, so booking early is strongly recommended",
  ],
  el: [
    "Στην Ελλάδα δεν απαιτείται δίπλωμα για μηχανοκίνητα έως 30 hp· πάνω από 30 hp χρειάζεται δίπλωμα ή skipper",
    "Γίνεται briefing ασφάλειας πριν την αναχώρηση· ακολούθησε τις οδηγίες για καιρό και αποστάσεις και κράτα ασφαλή απόσταση από βράχια και σπηλιές",
    "Ρώτησε εκ των προτέρων αν η τιμή περιλαμβάνει καύσιμα και τι ισχύει για εγγύηση ή ζημιές",
    "Πάρε μαζί σου καπέλο, αντηλιακό, extra νερό ή σνακ, στεγανή θήκη και παπούτσια θαλάσσης",
    "Η ζήτηση είναι υψηλή από Ιούνιο έως Σεπτέμβριο, οπότε καλό είναι να κλείσεις έγκαιρα",
  ],
},
  routes: {
    en: [
      "Fteri",
      "Blue Lagoon",
      "Kamari",
      "Amidi",
      "Wider Myrtos bay coastline",
    ],
    el: [
      "Fteri",
      "Blue Lagoon",
      "Kamari",
      "Amidi",
      "Ευρύτερη ακτογραμμή του κόλπου του Μύρτου",
    ],
  },
  perfectFor: {
    en: [
      "Couples, families, and small groups",
      "Visitors who want freedom at sea",
      "Travelers looking for hidden beaches",
      "Guests who prefer private boat experiences",
    ],
    el: [
      "Ζευγάρια, οικογένειες και μικρές παρέες",
      "Επισκέπτες που θέλουν ελευθερία στη θάλασσα",
      "Ταξιδιώτες που αναζητούν κρυφές παραλίες",
      "Επισκέπτες που προτιμούν ιδιωτικές εμπειρίες με σκάφος",
    ],
  },
  ctaLabel: {
    en: "Visit Website",
    el: "Επισκεφθείτε την ιστοσελίδα",
  },
  phone: "+306984331377",
  email: "deepbluemarine23@gmail.com",
  website: "https://www.facebook.com/profile.php?id=100090475029196",
  youtube: "https://www.youtube.com/watch?v=gBbpOTZjDgE&t=6s",
  galleryImages: [
    "/images/businesses/rolling-into-the-blue/11.webp",
    "/images/businesses/rolling-into-the-blue/1.webp",
    "/images/businesses/rolling-into-the-blue/2.webp",
    "/images/businesses/rolling-into-the-blue/3.webp",
    "/images/businesses/rolling-into-the-blue/4.webp",
    "/images/businesses/rolling-into-the-blue/5.webp",
    "/images/businesses/rolling-into-the-blue/6.webp",
    "/images/businesses/rolling-into-the-blue/7.webp",
    "/images/businesses/rolling-into-the-blue/8.webp",
    "/images/businesses/rolling-into-the-blue/9.webp",
    "/images/businesses/rolling-into-the-blue/10.webp",
    "/images/businesses/rolling-into-the-blue/12.webp",
    "/images/businesses/rolling-into-the-blue/13.webp",
    "/images/businesses/rolling-into-the-blue/14.webp",
    "/images/businesses/rolling-into-the-blue/15.webp",
  ],
},
  {
    slug: "taxi-express-patras",
    landingSlug: "patras",
    name: "Ταξί Express Πάτρας",
    category: {
      en: "Taxi & Transfers",
      el: "Ταξί / Μεταφορές",
    },
    place: "Patras, Achaia",
    info: {
      en: "24/7 taxi services in Patras and western Greece. Fast, reliable transfers with a modern fleet and VIP options. You can book by phone or easily through their Mr Booky app.",
      el: "24/7 υπηρεσίες ταξί στην Πάτρα. Γρήγορες, αξιόπιστες μετακινήσεις με σύγχρονο στόλο και VIP επιλογές. Μπορείς να κλείσεις τηλεφωνικά ή μέσω της εφαρμογής Mr Booky.",
    },
    image: "/images/businesses/taxi-express-patras/taxi-express.webp",
    href: "/businesses/taxi-express-patras",
    badge: "24/7",
    overview: {
      en: "Taxi Express Patras offers reliable, 24/7 taxi services covering Patras and key transport hubs like Araxos Airport, the port of Patras, KTEL buses, and the train station. They provide instant phone support and online bookings via their innovative Mr Booky app.",
      el: "Το Ράδιο Ταξί Express Πάτρας προσφέρει αξιόπιστες υπηρεσίες ταξί 24/7 στην πόλη της Πάτρας. Καλύπτει μεταφορές από/προς το Αεροδρόμιο Αράξου, λιμάνι, ΚΤΕΛ και ΟΣΕ, ενώ διαθέτει την καινοτόμα εφαρμογή Mr Booky (Web & App) για εύκολη εύρεση ταξί από το κινητό σας.",
    },
    description: {
      en: "Need a ride in Patras? Taxi Express Patras operates around the clock with a fleet of 170 vehicles ensuring immediate response. Whether you need a transfer to Araxos Airport, a ride from the port of Patras across Greece, or a targeted transfer to hospitals or malls, they have you covered. Use their phone line or their quick digital app 'Mr Booky' for a seamless experience.",
      el: "Χρειάζεσαι ταξί στην Πάτρα? Το Ταξί Express Πάτρας λειτουργεί όλο το 24ωρο με ένα στόλο 170 οχημάτων εξασφαλίζοντας άμεση ανταπόκριση. Είτε χρειάζεσαι μεταφορά στο Αεροδρόμιο Αράξου, είτε από το λιμάνι της Πάτρας για όλη την Ελλάδα, καλύπτουν κάθε ανάγκη σου. Κάλεσε στο 2610 450000 ή χρησιμοποίησε την εφαρμογή 'Mr Booky' για έξυπνη κράτηση.",
    },
    highlights: {
      en: [
        "24/7 availability with 170 vehicles",
        "Transfers to Araxos Airport & Patras Port",
        "Online booking via Mr Booky app",
        "VIP services, pet cages & child seats",
      ],
      el: [
        "24/7 διαθεσιμότητα με 170 οχήματα",
        "Μεταφορές σε Αεροδρόμιο Αράξου & Λιμάνι Πάτρας",
        "Online κράτηση μέσω του Mr Booky app",
        "VIP υπηρεσίες, κλουβιά κατοικίδιων & παιδικά καθίσματα",
      ],
    },
    services: {
      en: [
        "Direct transportation in the center of Patras",
        "Transfers from/to Araxos Airport and Patras Port",
        "Transfers to KTEL bus station and OSE trains",
        "VIP appointments and Night Taxi",
        "Provision of pet cages and child seats",
        "Digital app bookings (Mr Booky)",
      ],
      el: [
        "Άμεση μετακίνηση στο κέντρο της Πάτρας",
        "Μεταφορές από/προς Αεροδρόμιο Αράξου και Λιμάνι της Πάτρας",
        "Μεταφορές προς ΚΤΕΛ Πάτρας και ΟΣΕ",
        "VIP ραντεβού και Night Taxi",
        "Παροχή παιδικών καθισμάτων & κλουβιών κατοικίδιων",
        "Ψηφιακές υπηρεσίες και κλήση μέσω Mr Booky",
      ],
    },
    story: {
      en: "Driving innovation in urban transport, Taxi Express Patras recently shifted to a 'phygital' revolution introducing AI assistants and modern applications to a traditional taxi service.",
      el: "Οδηγώντας την καινοτομία στις αστικές μεταφορές, το Ταξί Express Πάτρας έχει περάσει στη 'phygital' εποχή, συνδυάζοντας την άμεση εξυπηρέτηση ενός μεγάλου στόλου με AI βοηθούς (Mr Booky) και εξελιγμένες εφαρμογές.",
    },
    practicalInfo: {
      en: [
        "Call directly at 2610 450000 for instant response anywhere in Patras",
        "App bookings allow tracing the driver via map live",
        "Excursions to places like Delphi, Ancient Olympia available upon arrangement",
      ],
      el: [
        "Καλέστε στο 2610 450000 24 ώρες το 24ωρο για άμεση εξυπηρέτηση",
        "Με την εφαρμογή τους (Mr Booky) βλέπετε το ταξί στον χάρτη live",
        "Διατίθενται μονοήμερες εκδρομές (π.χ. Αρχαία Ολυμπία, Δελφοί)",
      ],
    },
    routes: {
      en: [
        "Araxos Airport",
        "Patras Port",
        "Patras City Center & Hospitals",
        "Ancient Olympia & Delphi (excursions)",
      ],
      el: [
        "Αεροδρόμιο Αράξου",
        "Λιμάνι Πάτρας",
        "Κέντρο Πάτρας & Νοσοκομεία",
        "Αρχαία Ολυμπία & Δελφοί (εκδρομές)",
      ],
    },
    perfectFor: {
      en: [
        "Travelers needing airport/port transfers",
        "Locals and students in Patras",
        "Visitors planning day trips from Patras",
        "Business travelers",
      ],
      el: [
        "Ταξιδιώτες για αεροδρόμιο/λιμάνι",
        "Ντόπιους και φοιτητές στην Πάτρα",
        "Επισκέπτες που κάνουν μονοήμερες εκδρομές",
        "Επαγγελματίες",
      ],
    },
    ctaLabel: {
      en: "Visit Website",
      el: "Επισκεφθείτε την ιστοσελίδα",
    },
    phone: "+302610450000",
    email: "info@taxiexpresspatras.gr",
    website: "https://taxiexpresspatras.gr/",
    youtube: "",
    galleryCount: 0,
    mapQuery: "Ταξί Express Πάτρας 450000",
  },
  {
    slug: "papadellis-olive-oil",
    landingSlug: "seafood-by-the-harbor",
    name: "Papadellis Olive Oil",
    category: {
      en: "Local Products / Olive Oil",
      el: "Τοπικά Προϊόντα / Ελαιόλαδο",
    },
    place: "Loutropoli Thermis, Lesvos",
    info: {
      en: "A family-owned business in Lesvos producing high-quality extra virgin olive oils (like the premium Sapfo), nutritious olives, and natural olive oil soaps, maintaining the island's authentic tradition.",
      el: "Οικογενειακή επιχείρηση στη Λέσβο που παράγει υψηλής ποιότητας εξαιρετικό παρθένο ελαιόλαδο (όπως το premium Sapfo), θρεπτικές ελιές και φυσικά σαπούνια, διατηρώντας την αυθεντική παράδοση του νησιού.",
    },
    image: "/images/businesses/papadellis/papadellis.webp",
    href: "/businesses/papadellis-olive-oil",
    badge: "Local Producer",
    overview: {
      en: "Papadellis Olive Oil is a local producer based in Loutropoli Thermis, on the island of Lesvos. With deep respect for the area's centuries-old olive oil heritage, the Papadellis family crafts premium extra virgin olive oils, table olives, and naturally formulated soaps using traditional methods. Their distinctive products act as true ambassadors of the Mediterranean diet and the fertile Lesvian land.",
      el: "Η Papadellis Olive Oil είναι μια τοπική επιχείρηση στη Λουτρόπολη Θέρμης, στη Λέσβο. Με βαθύ σεβασμό στη μακραίωνη ελαιοκομική παράδοση της περιοχής, η οικογένεια Παπαδέλλη δημιουργεί εξαιρετικά παρθένα ελαιόλαδα, επιτραπέζιες ελιές και φυσικά σαπούνια. Τα ξεχωριστά προϊόντα τους αποτελούν πραγματικούς πρεσβευτές της Μεσογειακής διατροφής και της εύφορης λεσβιακής γης.",
    },
    description: {
      en: "Discover the authentic taste of Lesvos with Papadellis Olive Oil. Operating from Loutropoli Thermis, the business produces exceptional extra virgin olive oils, starring the acclaimed 'Sapfo' brand. Beyond olive oil, they offer nutrient-rich table olives harvested directly from their privately-owned groves and purely natural olive oil soaps that are perfect for gentle skin care. A true encapsulation of the tradition and rich aromas generously offered by the island.",
      el: "Ανακαλύψτε την αυθεντική γεύση της Λέσβου μέσα από την Papadellis Olive Oil. Με έδρα τη Λουτρόπολη Θέρμης, η επιχείρηση παράγει εξαιρετικό παρθένο ελαιόλαδο, με πρωταγωνιστή τη φημισμένη σειρά 'Sapfo'. Πέρα από το ελαιόλαδο, προσφέρουν υψηλής διατροφικής αξίας ελιές από τους ιδιόκτητους ελαιώνες τους και απολύτως φυσικά σαπούνια ελαιολάδου, ιδανικά για την περιποίηση του δέρματος. Μια ολοκληρωμένη εμπειρία παράδοσης και αρωμάτων που χαρίζει η λεσβιακή γη.",
    },
    highlights: {
      en: [
        "Premium Extra Virgin Olive Oils",
        "Nutrient-rich table olives",
        "Natural olive oil soaps",
        "Directly from privately-owned groves",
      ],
      el: [
        "Premium Εξαιρετικό Παρθένο Ελαιόλαδο",
        "Θρεπτικές επιτραπέζιες ελιές",
        "Φυσικά σαπούνια ελαιολάδου",
        "Απευθείας από ιδιόκτητους ελαιώνες",
      ],
    },
    services: {
      en: [
        "Extra Virgin Olive Oils (Sapfo, Alkeos, Imerti)",
        "Olives cultivated via natural processes",
        "Olive oil soaps for face and body care",
        "Options for B2B and HO.RE.CA",
      ],
      el: [
        "Εξαιρετικά Παρθένα Ελαιόλαδα (Sapfo, Αλκαίος, Ιμερτή)",
        "Ελιές που καλλιεργούνται με φυσικές διαδικασίες",
        "Σαπούνια ελαιολάδου για πρόσωπο και σώμα",
        "Επιλογές για επιχειρήσεις B2B και HO.RE.CA",
      ],
    },
    story: {
      en: "Firmly rooted in Loutropoli Thermis on the island of Lesvos, the Papadellis family has been passionately cultivating olive trees and producing olive oil, eager to share the unique characteristics and benefits of Lesvian olive varieties with the world.",
      el: "Με σταθερές ρίζες στη Λουτρόπολη Θέρμης Λέσβου, η οικογένεια Παπαδέλλη καλλιεργεί τα ελαιόδεντρα και παράγει ελαιόλαδο με πάθος, με στόχο να ταξιδέψει σε όλο τον κόσμο τα μοναδικά χαρακτηριστικά και οφέλη των λεσβιακών ποικιλιών ελιάς.",
    },
    practicalInfo: {
      en: [
        "Based in Loutropoli Thermis, Lesvos",
        "Contact directly at (+30) 22510 71377 for product inquiries",
        "Products available for purchase via their online shop",
      ],
      el: [
        "Η έδρα βρίσκεται στη Λουτρόπολη Θέρμης, Λέσβος",
        "Απευθείας επικοινωνία στο (+30) 22510 71377 για πληροφορίες προϊόντων",
        "Τα προϊόντα είναι διαθέσιμα για αγορά μέσω του e-shop τους",
      ],
    },
    routes: {
      en: [
        "Loutropoli Thermis",
        "Lesvos Island",
      ],
      el: [
        "Λουτρόπολη Θέρμης",
        "Νησί της Λέσβου",
      ],
    },
    perfectFor: {
      en: [
        "Gastronomy lovers exploring Greek olive oil",
        "Visitors discovering the traditional products of Lesvos",
        "Anyone who embraces the Mediterranean diet",
      ],
      el: [
        "Λάτρεις της γαστρονομίας που αναζητούν αυθεντικό ελληνικό ελαιόλαδο",
        "Επισκέπτες που ανακαλύπτουν τα παραδοσιακά προϊόντα της Λέσβου",
        "Όσους αγαπούν και ακολουθούν τη Μεσογειακή διατροφή",
      ],
    },
    ctaLabel: {
      en: "Explore products",
      el: "Δείτε τα προϊόντα",
    },
    phone: "+302251071377",
    email: "info@papadellis.eu",
    website: "https://papadellis.eu/",
    youtube: "",
    galleryCount: 0,
    mapQuery: "Papadellis Olive Oil Loutropoli Thermis Lesvos",
  }
];

export const VIATOR_WIDGET_MAPPING: Record<string, string> = {
  "Athens": "W-611433de-c2b3-4d2e-9074-eaa7eff90944",
  "Santorini": "W-e577bd63-e025-4586-8f55-bdb32bf254bc",
  "Corfu": "W-0683e950-d0ac-488d-8a4a-a1d86709f6a7",
  "Mykonos": "W-db1da184-a2f1-4058-b7f1-a9e15ccf9fa6",
  "Crete": "W-beb6dd42-10a7-4524-8626-6fda84f9e5df",
  "Nafplio": "W-40c6533f-c44b-4cd7-bb26-8d0788a922e2",
  "Thessaloniki": "W-f0334037-6d06-42d6-83a2-07d3903ef04b",
  "Kefalonia": "W-adaa2afb-d347-48c6-abe3-9d16f6a91959",
  "Lesvos": "W-b4298df4-e2de-499e-a767-1be0bd3e9b83",
  "Paros": "W-287c693c-ce54-4335-b504-c99ef173eab4",
  "Milos": "W-af2314fe-342c-4890-a5a6-b87e58c07f0d",
  "Zakynthos": "W-6728407e-41c9-4090-be67-ef6ebbb2d2a0",
  "Rhodes": "W-36ecb7f4-99f5-4715-af3f-343be8bb540a",
  "Halkidiki": "W-3390cb05-7269-4fd6-817a-80dca1641054",
  "Meteora": "W-2ee6b943-87d7-4c44-96da-1ecdfe24a13d",
  "Monemvasia": "W-d745ebb5-1804-42d6-b100-1daabbc937f4",
  "Parga": "W-51f7e778-3ad1-4730-a549-1b278e89cb1d",
  "Delphi": "W-32985508-a65b-4c51-b0f7-da2d07cf791d",
  "Skiathos": "W-1ac32b71-951f-4218-a965-6665da31db36",
  "Thassos": "W-cc208ed2-04dc-4148-8504-5147f9936bdb",
  "Skopelos": "W-cb4a55b0-4e48-4e6c-8114-33afcaa6d353",
  "Lefkada": "W-a5fdc176-a350-4332-8f26-6c3f1d572321",
  "Syros": "W-fdcdd762-3ff5-4fdb-9b8d-00b7a3d4b6e9",
};