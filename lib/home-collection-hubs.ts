import { destinations, food, hotels, tours } from "./content";
import type { Lang } from "./content";

type LocalizedText = Record<Lang, string>;

export type HomeCollectionHubCard = {
  title: LocalizedText;
  description: LocalizedText;
  href: string;
};

export type HomeCollectionHubSection = {
  id: string;
  title: LocalizedText;
  body: LocalizedText;
};

export type HomeCollectionHub = {
  slug: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  metaTitle: LocalizedText;
  metaDescription: LocalizedText;
  intro: LocalizedText;
  sections: HomeCollectionHubSection[];
  cards: HomeCollectionHubCard[];
};

const destinationCards: HomeCollectionHubCard[] = destinations.slice(0, 6).map((item) => ({
  title: {
    en: `${item.name} travel guide`,
    el: `Οδηγός για ${item.name}`,
  },
  description: {
    en: item.blurb.en,
    el: item.blurb.el,
  },
  href: `/destinations/${item.slug}`,
}));

const hotelCards: HomeCollectionHubCard[] = hotels.slice(0, 3).map((item) => ({
  title: {
    en: `Where to stay: ${item.name}`,
    el: `Πού να μείνεις: ${item.name}`,
  },
  description: {
    en: item.info.en,
    el: item.info.el,
  },
  href: `/hotels/${item.slug}`,
}));

const tourCards: HomeCollectionHubCard[] = tours.slice(0, 6).map((item) => ({
  title: {
    en: `${item.place} tours and activities`,
    el: `Εκδρομές και δραστηριότητες: ${item.place}`,
  },
  description: {
    en: item.info.en,
    el: item.info.el,
  },
  href: `/tours/${item.slug}`,
}));

const foodCards: HomeCollectionHubCard[] = food.slice(0, 6).map((item) => ({
  title: {
    en: `${item.place} food guide`,
    el: `Οδηγός γεύσεων: ${item.place}`,
  },
  description: {
    en: item.info.en,
    el: item.info.el,
  },
  href: `/eat-drink/${item.slug}`,
}));

const practicalCards: HomeCollectionHubCard[] = [
  {
    title: {
      en: "Greece travel planning guide",
      el: "Οδηγός οργάνωσης ταξιδιού στην Ελλάδα",
    },
    description: {
      en: "Start with transport, timing, booking basics and practical advice before you choose islands, stays and day trips.",
      el: "Ξεκίνα με μετακινήσεις, σωστό timing, βασικά βήματα κράτησης και πρακτικές συμβουλές πριν διαλέξεις νησιά, διαμονή και εκδρομές.",
    },
    href: "/travel-info",
  },
  ...destinationCards.slice(0, 2),
  ...hotelCards.slice(0, 1),
  ...tourCards.slice(0, 1),
];

export const homeCollectionHubs: HomeCollectionHub[] = [
  {
    slug: "island-escapes",
    eyebrow: {
      en: "Featured collection",
      el: "Προτεινόμενη συλλογή",
    },
    title: {
      en: "Island Escapes",
      el: "Νησιωτικές Αποδράσεις",
    },
    description: {
      en: "Compare famous Greek islands, coastal scenery and destination styles before you choose where to spend your days in Greece.",
      el: "Σύγκρινε διάσημα ελληνικά νησιά, παραθαλάσσια τοπία και διαφορετικά travel styles πριν αποφασίσεις πού θα περάσεις τις μέρες σου στην Ελλάδα.",
    },
    metaTitle: {
      en: "Greek island travel ideas and destination guides",
      el: "Ιδέες για ελληνικά νησιά και οδηγοί προορισμών",
    },
    metaDescription: {
      en: "Compare Greek islands, discover destination guides and plan beaches, stays and ferry-friendly routes for your Greece island trip.",
      el: "Σύγκρινε ελληνικά νησιά, βρες οδηγούς προορισμών και οργάνωσε παραλίες, διαμονή και εύκολες διαδρομές για island hopping.",
    },
    intro: {
      en: "This hub helps you move from broad island inspiration to specific destination choices. Use it to compare atmosphere, scenery and travel rhythm before you book ferries, hotels or day trips.",
      el: "Αυτό το hub σε βοηθά να περάσεις από τη γενική έμπνευση για νησιά σε συγκεκριμένες επιλογές προορισμών. Χρησιμοποίησέ το για να συγκρίνεις ατμόσφαιρα, τοπία και ρυθμό ταξιδιού πριν κλείσεις πλοία, ξενοδοχεία ή εκδρομές.",
    },
    sections: [
      {
        id: "choose-your-island",
        title: {
          en: "Choose the island that matches your trip style",
          el: "Διάλεξε το νησί που ταιριάζει στο ταξίδι σου",
        },
        body: {
          en: "Some islands work best for romance and scenery, others for beaches, nightlife, food or slower local experiences. Start by matching the destination to the kind of days you actually want to have.",
          el: "Κάποια νησιά ταιριάζουν καλύτερα για ρομαντισμό και τοπία, άλλα για παραλίες, νυχτερινή ζωή, φαγητό ή πιο ήρεμες τοπικές εμπειρίες. Ξεκίνα ταιριάζοντας τον προορισμό με το είδος των ημερών που πραγματικά θέλεις να ζήσεις.",
        },
      },
      {
        id: "trip-length",
        title: {
          en: "Plan around your available time",
          el: "Οργάνωσε με βάση τον χρόνο που έχεις",
        },
        body: {
          en: "A two-night island stop needs a very different plan than a full week. Use the destination guides below to decide whether a place works best as a quick highlight, a main base or part of a multi-island route.",
          el: "Μια στάση δύο διανυκτερεύσεων θέλει πολύ διαφορετικό πλάνο από μια ολόκληρη εβδομάδα. Χρησιμοποίησε τους παρακάτω οδηγούς για να δεις αν ένας τόπος ταιριάζει καλύτερα ως σύντομο highlight, κύρια βάση ή μέρος μιας πολυνησιακής διαδρομής.",
        },
      },
      {
        id: "season-and-access",
        title: {
          en: "Think about season, ferries and access",
          el: "Σκέψου εποχή, πλοία και πρόσβαση",
        },
        body: {
          en: "Island logistics matter. Seasonality, ferry schedules and how you arrive in Greece all affect which island feels easiest and most rewarding for your trip.",
          el: "Τα logistics των νησιών έχουν σημασία. Η εποχικότητα, τα δρομολόγια πλοίων και το πώς φτάνεις στην Ελλάδα επηρεάζουν το ποιο νησί θα είναι πιο εύκολο και πιο απολαυστικό για το ταξίδι σου.",
        },
      },
    ],
    cards: destinationCards,
  },
  {
    slug: "practical-greece",
    eyebrow: {
      en: "Practical Greece",
      el: "Χρήσιμη Ελλάδα",
    },
    title: {
      en: "Plan Before You Go",
      el: "Οργάνωσε πριν ταξιδέψεις",
    },
    description: {
      en: "Start with the practical side of Greece travel so your destinations, stays and day trips fit the season, budget and pace you want.",
      el: "Ξεκίνα από την πρακτική πλευρά του ταξιδιού στην Ελλάδα ώστε προορισμοί, διαμονή και εκδρομές να ταιριάζουν στην εποχή, στο budget και στον ρυθμό που θέλεις.",
    },
    metaTitle: {
      en: "Greece travel planning hub | Transport, timing and practical tips",
      el: "Hub οργάνωσης ταξιδιού στην Ελλάδα | Μετακινήσεις και χρήσιμα tips",
    },
    metaDescription: {
      en: "Read Greece travel planning tips on transport, timing, booking basics and how to move around before building your itinerary.",
      el: "Δες tips οργάνωσης ταξιδιού για μετακινήσεις, σωστό timing, βασικά βήματα κράτησης και πώς να κινηθείς πριν φτιάξεις το πλάνο σου.",
    },
    intro: {
      en: "This hub is the practical layer of GoGreeceNow. Use it first if you want to understand when to go, how to arrive, how much moving around is realistic and which parts of Greece fit your budget and pace.",
      el: "Αυτό το hub είναι το πρακτικό layer του GoGreeceNow. Χρησιμοποίησέ το πρώτο αν θέλεις να καταλάβεις πότε να ταξιδέψεις, πώς να φτάσεις, πόσες μετακινήσεις είναι ρεαλιστικές και ποια μέρη της Ελλάδας ταιριάζουν στο budget και στον ρυθμό σου.",
    },
    sections: [
      {
        id: "before-booking",
        title: {
          en: "Answer the practical questions before you book",
          el: "Απάντησε στα πρακτικά ερωτήματα πριν κάνεις κράτηση",
        },
        body: {
          en: "A stronger Greece plan starts with timing, transport and realistic routing. Once these pieces are clear, your destination choices become easier and your itinerary feels less rushed.",
          el: "Ένα καλύτερο πλάνο για την Ελλάδα ξεκινά από το σωστό timing, τη μετακίνηση και μια ρεαλιστική διαδρομή. Μόλις ξεκαθαρίσουν αυτά, οι επιλογές προορισμών γίνονται πιο εύκολες και το itinerary σου λιγότερο πιεσμένο.",
        },
      },
      {
        id: "moving-around",
        title: {
          en: "Understand how Greece moves",
          el: "Κατάλαβε πώς μετακινείσαι στην Ελλάδα",
        },
        body: {
          en: "Flights, ferries, roads and mainland-to-island connections shape your trip more than most first-time visitors expect. Build your route around simple, efficient connections whenever possible.",
          el: "Πτήσεις, πλοία, δρόμοι και συνδέσεις ηπειρωτικής Ελλάδας με νησιά επηρεάζουν το ταξίδι περισσότερο απ’ όσο περιμένουν οι περισσότεροι επισκέπτες. Όπου γίνεται, χτίσε τη διαδρομή σου γύρω από απλές και αποδοτικές συνδέσεις.",
        },
      },
      {
        id: "trip-confidence",
        title: {
          en: "Book with more confidence",
          el: "Κλείσε με μεγαλύτερη σιγουριά",
        },
        body: {
          en: "When you know the season, transport options and likely pace of each stop, it becomes much easier to choose the right destinations, hotel areas and activities for your trip.",
          el: "Όταν ξέρεις την εποχή, τις επιλογές μετακίνησης και τον ρεαλιστικό ρυθμό κάθε στάσης, γίνεται πολύ πιο εύκολο να διαλέξεις τους σωστούς προορισμούς, περιοχές διαμονής και δραστηριότητες για το ταξίδι σου.",
        },
      },
    ],
    cards: practicalCards,
  },
  {
    slug: "tours-and-experiences",
    eyebrow: {
      en: "Curated ideas",
      el: "Επιλεγμένες ιδέες",
    },
    title: {
      en: "Sea, Tours & Experiences",
      el: "Θάλασσα, Εκδρομές & Εμπειρίες",
    },
    description: {
      en: "Move beyond sightseeing with boat trips, local experiences and memorable activities that give shape to your Greece itinerary.",
      el: "Πήγαινε πέρα από το απλό sightseeing με boat trips, τοπικές εμπειρίες και δραστηριότητες που δίνουν μορφή στο itinerary σου στην Ελλάδα.",
    },
    metaTitle: {
      en: "Greece tours, day trips and local experiences",
      el: "Εκδρομές, ημερήσιες αποδράσεις και εμπειρίες στην Ελλάδα",
    },
    metaDescription: {
      en: "Browse Greece tours, island day trips and local experiences to add boat routes, highlights and memorable activities to your plan.",
      el: "Δες εκδρομές, island day trips και τοπικές εμπειρίες για να προσθέσεις boat routes, highlights και δραστηριότητες στο πλάνο σου.",
    },
    intro: {
      en: "This hub groups the experiences that turn a destination list into an actual trip. Use it to discover which activities deserve time in your itinerary and which can stay optional.",
      el: "Αυτό το hub συγκεντρώνει τις εμπειρίες που μετατρέπουν μια λίστα προορισμών σε πραγματικό ταξίδι. Χρησιμοποίησέ το για να δεις ποιες δραστηριότητες αξίζουν θέση στο itinerary σου και ποιες μπορούν να μείνουν προαιρετικές.",
    },
    sections: [
      {
        id: "choose-experiences",
        title: {
          en: "Choose experiences that fit the destination",
          el: "Διάλεξε εμπειρίες που ταιριάζουν στον προορισμό",
        },
        body: {
          en: "A boat trip, food experience or scenic route should support the kind of trip you want, not overload it. Pick the experiences that best match your destination, season and energy level.",
          el: "Ένα boat trip, μια food experience ή μια scenic route πρέπει να ενισχύουν το είδος ταξιδιού που θέλεις, όχι να το φορτώνουν. Διάλεξε τις εμπειρίες που ταιριάζουν καλύτερα στον προορισμό, στην εποχή και στον ρυθμό σου.",
        },
      },
      {
        id: "balance-your-days",
        title: {
          en: "Balance activity with free time",
          el: "Ισορρόπησε δραστηριότητες και ελεύθερο χρόνο",
        },
        body: {
          en: "The best itineraries usually combine a few standout experiences with enough free time for beaches, wandering and meals. Use the guides below to decide what deserves a spot.",
          el: "Τα καλύτερα itineraries συνήθως συνδυάζουν λίγες δυνατές εμπειρίες με αρκετό ελεύθερο χρόνο για παραλίες, βόλτες και φαγητό. Χρησιμοποίησε τους παρακάτω οδηγούς για να δεις τι αξίζει να βάλεις στο πλάνο σου.",
        },
      },
      {
        id: "build-highlights",
        title: {
          en: "Turn ideas into trip highlights",
          el: "Μετέτρεψε τις ιδέες σε highlights του ταξιδιού",
        },
        body: {
          en: "Local tours are often what visitors remember most. A well-chosen day trip can connect scenery, culture and logistics in a way that makes the whole destination feel more complete.",
          el: "Οι τοπικές εκδρομές είναι συχνά αυτά που θυμούνται περισσότερο οι επισκέπτες. Μια σωστά επιλεγμένη ημερήσια δραστηριότητα μπορεί να ενώσει τοπίο, κουλτούρα και μετακίνηση με τρόπο που κάνει όλο τον προορισμό να μοιάζει πιο ολοκληρωμένος.",
        },
      },
    ],
    cards: tourCards,
  },
  {
    slug: "taste-local-greece",
    eyebrow: {
      en: "Eat & drink",
      el: "Φαγητό & Ποτό",
    },
    title: {
      en: "Taste Local Greece",
      el: "Γεύσεις της Τοπικής Ελλάδας",
    },
    description: {
      en: "Use food and drink inspiration to discover regional dishes, local traditions and destinations that feel richer through cuisine.",
      el: "Χρησιμοποίησε food and drink έμπνευση για να ανακαλύψεις τοπικά πιάτα, παραδόσεις και προορισμούς που γίνονται πιο πλούσιοι μέσα από τη γεύση.",
    },
    metaTitle: {
      en: "Greek food and drink guides by destination",
      el: "Οδηγοί ελληνικού φαγητού και ποτού ανά προορισμό",
    },
    metaDescription: {
      en: "Discover Greek food and drink guides, regional dishes and local flavors that help you plan where to eat and what to try.",
      el: "Ανακάλυψε οδηγούς ελληνικού φαγητού και ποτού, τοπικά πιάτα και γεύσεις που σε βοηθούν να οργανώσεις πού θα φας και τι θα δοκιμάσεις.",
    },
    intro: {
      en: "This hub helps food become part of your trip planning, not just something you decide on the day. Use it to choose destinations, neighborhoods and experiences with stronger local flavor.",
      el: "Αυτό το hub βοηθά το φαγητό να γίνει μέρος της οργάνωσης του ταξιδιού σου και όχι κάτι που αποφασίζεις τελευταία στιγμή. Χρησιμοποίησέ το για να διαλέξεις προορισμούς, γειτονιές και εμπειρίες με πιο έντονο τοπικό χαρακτήρα.",
    },
    sections: [
      {
        id: "regional-flavors",
        title: {
          en: "Explore regional flavors before you arrive",
          el: "Ανακάλυψε τις τοπικές γεύσεις πριν φτάσεις",
        },
        body: {
          en: "Knowing what a place is known for helps you choose where to eat, what to order and which destinations feel most rewarding for your travel style.",
          el: "Το να ξέρεις για τι φημίζεται ένας τόπος σε βοηθά να διαλέξεις πού θα φας, τι να παραγγείλεις και ποιοι προορισμοί είναι πιο rewarding για το δικό σου travel style.",
        },
      },
      {
        id: "food-and-destination",
        title: {
          en: "Let cuisine shape the destination",
          el: "Άφησε την κουζίνα να επηρεάσει τον προορισμό",
        },
        body: {
          en: "Food can be a practical planning signal. It helps you decide where to stay longer, where to take a tour and which places deserve a slower visit.",
          el: "Το φαγητό μπορεί να λειτουργήσει ως πρακτικό κριτήριο σχεδιασμού. Σε βοηθά να δεις πού αξίζει να μείνεις περισσότερο, πού να κάνεις εκδρομή και ποια μέρη θέλουν πιο αργό ρυθμό.",
        },
      },
      {
        id: "what-to-try",
        title: {
          en: "Use guides to decide what to try",
          el: "Χρησιμοποίησε οδηγούς για να δεις τι να δοκιμάσεις",
        },
        body: {
          en: "A little prep goes a long way. The guides below make it easier to spot specialties, local drinks and food experiences worth adding to your itinerary.",
          el: "Λίγη προετοιμασία βοηθά πολύ. Οι παρακάτω οδηγοί κάνουν πιο εύκολο να ξεχωρίσεις σπεσιαλιτέ, τοπικά ποτά και food experiences που αξίζει να μπουν στο itinerary σου.",
        },
      },
    ],
    cards: foodCards,
  },
];

export const homeCollectionHubSlugs = homeCollectionHubs.map((hub) => hub.slug);

export function getHomeCollectionHub(slug: string) {
  return homeCollectionHubs.find((hub) => hub.slug === slug);
}