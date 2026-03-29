import type { Localized, LocalizedList } from "./content";

export type ExperienceLanding = {
  slug: string;
  title: Localized;
  description: Localized;
  overview: Localized;
  highlights: LocalizedList;
};

export type ExperienceBusiness = {
  slug: string;
  landingSlug: string;
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
};

export const experienceLandings: ExperienceLanding[] = [
  {
    slug: "kefalonia-tours",
    title: {
      en: "Boat Trips & Local Experiences in Kefalonia",
      el: "Boat Trips & Τοπικές Εμπειρίες στην Κεφαλονιά",
    },
    description: {
      en: "Discover selected local businesses in Kefalonia, from boat trips and boat rentals to sea experiences that add something special to your island holiday.",
      el: "Ανακάλυψε επιλεγμένες τοπικές επιχειρήσεις στην Κεφαλονιά, από boat trips και ενοικιάσεις σκαφών μέχρι θαλάσσιες εμπειρίες που προσθέτουν κάτι ξεχωριστό στις διακοπές σου.",
    },
    overview: {
      en: "This page is designed as a curated guide to local experiences in Kefalonia. Instead of presenting only generic tour inspiration, it highlights businesses and operators that help visitors enjoy the island in a more direct, memorable and authentic way.",
      el: "Αυτή η σελίδα έχει σχεδιαστεί ως curated οδηγός τοπικών εμπειριών στην Κεφαλονιά. Αντί να παρουσιάζει μόνο γενική ταξιδιωτική έμπνευση, αναδεικνύει επιχειρήσεις και επαγγελματίες που βοηθούν τον επισκέπτη να απολαύσει το νησί με πιο άμεσο, αξέχαστο και αυθεντικό τρόπο.",
    },
    highlights: {
      en: [
        "Featured local businesses",
        "Boat trips and sea experiences",
        "Curated options for visitors",
        "A more practical way to plan experiences",
      ],
      el: [
        "Featured τοπικές επιχειρήσεις",
        "Boat trips και θαλάσσιες εμπειρίες",
        "Επιλεγμένες επιλογές για επισκέπτες",
        "Πιο πρακτικός τρόπος οργάνωσης εμπειριών",
      ],
    },
  },
  {
    slug: "lesvos-tours",
    title: {
      en: "Local Experiences & Businesses in Lesvos",
      el: "Τοπικές Εμπειρίες & Επιχειρήσεις στη Λέσβο",
    },
    description: {
      en: "Discover selected local businesses in Lesvos, from authentic food experiences and cultural activities to island services that enrich your stay.",
      el: "Ανακάλυψε επιλεγμένες τοπικές επιχειρήσεις στη Λέσβο, από αυθεντικές γαστρονομικές εμπειρίες και πολιτιστικές δραστηριότητες μέχρι υπηρεσίες που εμπλουτίζουν τη διαμονή σου.",
    },
    overview: {
      en: "This page is designed as a curated guide to local experiences in Lesvos. Instead of focusing only on general inspiration, it is built to feature real businesses and visitor-friendly experiences that bring travelers closer to the island’s culture, food and local identity.",
      el: "Αυτή η σελίδα έχει σχεδιαστεί ως curated οδηγός τοπικών εμπειριών στη Λέσβο. Αντί να εστιάζει μόνο σε γενική ταξιδιωτική έμπνευση, είναι φτιαγμένη για να προβάλλει πραγματικές επιχειρήσεις και εμπειρίες για επισκέπτες που φέρνουν τον ταξιδιώτη πιο κοντά στον πολιτισμό, τις γεύσεις και την τοπική ταυτότητα του νησιού.",
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
        "Πρακτικός τρόπος οργάνωσης διαμονής",
      ],
    },
  },
  {
    slug: "crete-tours",
    title: {
      en: "Local Experiences & Businesses in Crete",
      el: "Τοπικές Εμπειρίες & Επιχειρήσεις στην Κρήτη",
    },
    description: {
      en: "Discover selected local businesses in Crete, from food experiences and cultural activities to coastal outings and practical visitor options across the island.",
      el: "Ανακάλυψε επιλεγμένες τοπικές επιχειρήσεις στην Κρήτη, από γαστρονομικές εμπειρίες και πολιτιστικές δραστηριότητες μέχρι παραθαλάσσιες εξορμήσεις και πρακτικές επιλογές για επισκέπτες σε όλο το νησί.",
    },
    overview: {
      en: "This page is designed as a curated guide to local experiences in Crete. Instead of presenting only broad travel inspiration, it highlights businesses and services that help visitors enjoy the island in a richer, more direct and more practical way.",
      el: "Αυτή η σελίδα έχει σχεδιαστεί ως curated οδηγός τοπικών εμπειριών στην Κρήτη. Αντί να παρουσιάζει μόνο γενική ταξιδιωτική έμπνευση, αναδεικνύει επιχειρήσεις και υπηρεσίες που βοηθούν τον επισκέπτη να απολαύσει το νησί με πιο πλούσιο, άμεσο και πρακτικό τρόπο.",
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
  },
];

export const experienceBusinesses: ExperienceBusiness[] = [
  {
    slug: "rolling-into-the-blue",
    landingSlug: "kefalonia-tours",
    name: "Rolling Into The Blue",
    category: {
      en: "Rent a boat & boat trips",
      el: "Rent a boat & boat trips",
    },
    place: "Zola, Kefalonia",
    info: {
      en: "A featured local business in Kefalonia for visitors who want boat-based experiences, coastline exploration and memorable time at sea.",
      el: "Μια featured τοπική επιχείρηση στην Κεφαλονιά για επισκέπτες που θέλουν εμπειρίες με σκάφος, εξερεύνηση της ακτογραμμής και αξέχαστες στιγμές στη θάλασσα.",
    },
    image: "/images/tours/kefalonia-tours.jpg",
    href: "https://follow-me.gr/listing/rent-a-boat-boat-trips-rolling-into-the-blue/",
    badge: "Featured",
    overview: {
      en: "Rolling Into The Blue fits naturally within a curated Kefalonia experiences page focused on sea-based activities, local operators and island holiday planning.",
      el: "Το Rolling Into The Blue ταιριάζει ιδανικά σε μια curated σελίδα εμπειριών για την Κεφαλονιά με έμφαση σε θαλάσσιες δραστηριότητες, τοπικούς επαγγελματίες και σωστό σχεδιασμό διακοπών.",
    },
    highlights: {
      en: [
        "Boat rental and boat trips",
        "Sea-focused local experience",
        "Great for coastline discovery",
        "Featured Kefalonia business",
      ],
      el: [
        "Ενοικίαση σκάφους και boat trips",
        "Τοπική εμπειρία με έμφαση στη θάλασσα",
        "Ιδανικό για ανακάλυψη ακτογραμμής",
        "Featured επιχείρηση στην Κεφαλονιά",
      ],
    },
    perfectFor: {
      en: [
        "Couples and small groups",
        "Travelers who want sea experiences",
        "Visitors planning curated island activities",
        "Holiday makers looking for local businesses",
      ],
      el: [
        "Ζευγάρια και μικρές παρέες",
        "Ταξιδιώτες που θέλουν εμπειρίες στη θάλασσα",
        "Επισκέπτες που οργανώνουν curated δραστηριότητες στο νησί",
        "Ταξιδιώτες που αναζητούν τοπικές επιχειρήσεις",
      ],
    },
    ctaLabel: {
      en: "View business",
      el: "Δες την επιχείρηση",
    },
  },
];