export type HomeContent = {
  heroBadge: string;
  heroTitle: string;
  heroText: string;
  heroPrimary: string;
  heroSecondary: string;
  heroPanelEyebrow: string;
  heroPanelTitle: string;
  heroPanelText: string;
  startPlanningEyebrow: string;
  startPlanningTitle: string;
  startPlanningText: string;
  howItWorksEyebrow: string;
  howItWorksTitle: string;
  howItWorksText: string;
  howItWorksStep1Title: string;
  howItWorksStep1Text: string;
  howItWorksStep2Title: string;
  howItWorksStep2Text: string;
  howItWorksStep3Title: string;
  howItWorksStep3Text: string;
  travelStylesEyebrow: string;
  travelStylesTitle: string;
  travelStylesText: string;
  featuredCollectionsEyebrow: string;
  featuredCollectionsTitle: string;
  featuredCollectionsText: string;
  destinationEyebrow: string;
  destinationTitle: string;
  destinationText: string;
  travelHubEyebrow: string;
  travelHubTitle: string;
  travelHubText: string;
  travelHubCta: string;
  travelMini1Title: string;
  travelMini1Text: string;
  travelMini2Title: string;
  travelMini2Text: string;
  travelMini3Title: string;
  travelMini3Text: string;
  hotelsEyebrow: string;
  hotelsTitle: string;
  hotelsText: string;
  hotelsPromoTitle: string;
  toursEyebrow: string;
  toursTitle: string;
  toursText: string;
  foodEyebrow: string;
  foodTitle: string;
  foodText: string;
  communitiesEyebrow: string;
  communitiesTitle: string;
  communitiesText: string;
  footerText: string;
  ctaAd: string;
  footerAbout: string;
  footerContact: string;
  footerPrivacy: string;
};

type Lang = "en" | "el";

const t = {
  navDestinations: { en: "Destinations", el: "Προορισμοί" },
  navTravelInfo: { en: "Travel Info", el: "Ταξιδιωτικές Πληροφορίες" },
  navHotels: { en: "Hotels", el: "Ξενοδοχεία" },
  navTours: { en: "Experiences", el: "Τοπικές Επιχειρήσεις" },
  navEatDrink: { en: "Food & Wine", el: "Φαγητό & Κρασί" },
  navForums: { en: "Travel to Greece", el: "Ταξίδι στην Ελλάδα" },

  heroBadge: {
    en: "Plan your 2026 Greece holiday",
    el: "Σχεδίασε τις διακοπές σου στην Ελλάδα για το 2026",
  },
  heroTitle: {
    en: "Greek islands & local experiences, curated by people who live there",
    el: "Ελληνικά νησιά & αυθεντικές εμπειρίες, από ανθρώπους που ζουν εδώ",
  },
  heroText: {
    en: "Handpicked hotels, private tours, and authentic tavernas across Greece. Build your perfect island-hopping itinerary.",
    el: "Επιλεγμένα ξενοδοχεία, ιδιωτικές ξεναγήσεις και αυθεντικές ταβέρνες σε όλη την Ελλάδα. Χτίσε το τέλειο ταξίδι σου.",
  },
  heroPrimary: {
    en: "Explore Destinations",
    el: "Ανακάλυψε Προορισμούς",
  },
  heroSecondary: {
    en: "Build Your Itinerary",
    el: "Φτιάξε το Δρομολόγιό σου",
  },

  heroPanelEyebrow: {
    en: "Start planning your Greece trip",
    el: "Ξεκίνα τον σχεδιασμό του ταξιδιού σου",
  },
  heroPanelTitle: {
    en: "Pick what you need most",
    el: "Διάλεξε ό,τι χρειάζεσαι περισσότερο",
  },

  howItWorksEyebrow: {
    en: "How It Works",
    el: "Πώς Λειτουργεί",
  },
  howItWorksTitle: {
    en: "Plan your Greece trip in 3 simple steps",
    el: "Σχεδίασε το ταξίδι σου στην Ελλάδα σε 3 απλά βήματα",
  },
  howItWorksText: {
    en: "From inspiration to booking — we make planning your Greece holiday effortless.",
    el: "Από την έμπνευση μέχρι την κράτηση — κάνουμε τον σχεδιασμό του ταξιδιού σου στην Ελλάδα απλό.",
  },
  howItWorksStep1Title: {
    en: "Tell us what you're looking for",
    el: "Πες μας τι ψάχνεις",
  },
  howItWorksStep1Text: {
    en: "Choose your destination, travel style, budget, and interests. Browse our guides or use our AI Trip Planner to get personalised recommendations.",
    el: "Διάλεξε προορισμό, ταξιδιωτικό στυλ, προϋπολογισμό και ενδιαφέροντα. Ξεφύλλισε τους οδηγούς μας ή χρησιμοποίησε τον AI Σχεδιαστή για εξατομικευμένες προτάσεις.",
  },
  howItWorksStep2Title: {
    en: "Get matched with trusted local partners",
    el: "Συνδέσου με αξιόπιστους τοπικούς συνεργάτες",
  },
  howItWorksStep2Text: {
    en: "Every hotel, tour, and experience on GoGreeceNow is handpicked. No generic listings — only vetted local businesses recommended by our team.",
    el: "Κάθε ξενοδοχείο, εκδρομή και εμπειρία στο GoGreeceNow είναι επιλεγμένα. Χωρίς γενικές λίστες — μόνο τοπικές επιχειρήσεις που ελέγχουμε και προτείνουμε.",
  },
  howItWorksStep3Title: {
    en: "Experience the real Greece",
    el: "Ζήσε την αυθεντική Ελλάδα",
  },
  howItWorksStep3Text: {
    en: "Travel with confidence knowing you've chosen the best local partners. From caldera-view hotels to hidden tavernas — experience Greece the way it's meant to be.",
    el: "Ταξίδεψε με σιγουριά γνωρίζοντας ότι έχεις επιλέξει τους καλύτερους τοπικούς συνεργάτες. Από ξενοδοχεία με θέα καλδέρας μέχρι κρυφές ταβέρνες — ζήσε την Ελλάδα όπως αξίζει.",
  },
  travelStylesEyebrow: {
    en: "Travel Styles",
    el: "Ταξιδιωτικά Στυλ",
  },
  travelStylesTitle: {
    en: "Find your perfect Greece experience",
    el: "Βρες την τέλεια εμπειρία στην Ελλάδα",
  },
  travelStylesText: {
    en: "Whether it's a romantic honeymoon, a family adventure, or a food-and-wine journey — we have the right destinations and partners for you.",
    el: "Είτε είναι ρομαντικός μήνας του μέλιτος, οικογενειακή περιπέτεια ή γαστρονομικό ταξίδι — έχουμε τους κατάλληλους προορισμούς και συνεργάτες για εσένα.",
  },
  startPlanningEyebrow: {
    en: "Start Planning",
    el: "Ξεκίνα να Οργανώνεις",
  },
  startPlanningTitle: {
    en: "Choose the right planning path",
    el: "Διάλεξε τη σωστή διαδρομή οργάνωσης",
  },
  startPlanningText: {
    en: "Start with destination inspiration, move to practical travel questions, then continue with stays, tours and food ideas for Greece.",
    el: "Ξεκίνα με έμπνευση για προορισμούς, συνέχισε με τα πρακτικά του ταξιδιού και μετά προχώρα σε διαμονή, εκδρομές και γεύσεις στην Ελλάδα.",
  },

  destinationEyebrow: {
    en: "Featured Destinations",
    el: "Προτεινόμενοι Προορισμοί",
  },
  destinationTitle: {
    en: "Top picks across Greece",
    el: "Κορυφαίες επιλογές σε όλη την Ελλάδα",
  },
  destinationText: {
    en: "A curated selection of must-visit destinations — from iconic Cycladic islands to mainland escapes. Browse all regions below.",
    el: "Μια επιλεγμένη συλλογή από must-visit προορισμούς — από εμβληματικά κυκλαδίτικα νησιά μέχρι ηπειρωτικές αποδράσεις. Εξερεύνησε όλες τις περιοχές παρακάτω.",
  },

  travelHubEyebrow: {
    en: "Travel Planning",
    el: "Οργάνωση Ταξιδιού",
  },
  travelHubTitle: {
    en: "Plan before you go",
    el: "Οργάνωσε πριν ταξιδέψεις",
  },
  travelHubText: {
    en: "Use the travel info hub to answer the practical questions before booking, arriving or moving around Greece.",
    el: "Χρησιμοποίησε το hub ταξιδιωτικών πληροφοριών για να λύσεις τα πρακτικά ερωτήματα πριν κλείσεις, πριν φτάσεις ή όσο μετακινείσαι στην Ελλάδα.",
  },
  travelHubCta: {
    en: "Read Greece travel planning guides →",
    el: "Δες οδηγούς οργάνωσης ταξιδιού στην Ελλάδα →",
  },

  travelMini1Title: {
    en: "How to get to Greece",
    el: "Πώς να έρθεις στην Ελλάδα",
  },
  travelMini1Text: {
    en: "Flights, ferries and the best ways to reach Greece or specific destinations.",
    el: "Πτήσεις, πλοία και οι καλύτεροι τρόποι για να φτάσεις στην Ελλάδα ή σε συγκεκριμένους προορισμούς.",
  },
  travelMini2Title: {
    en: "Best time to visit Greece",
    el: "Πότε να ταξιδέψεις στην Ελλάδα",
  },
  travelMini2Text: {
    en: "Choose the right season based on weather, crowds and travel style.",
    el: "Διάλεξε τη σωστή εποχή ανάλογα με τον καιρό, τον κόσμο και το travel style σου.",
  },
  travelMini3Title: {
    en: "Getting around Greece",
    el: "Μετακίνηση στην Ελλάδα",
  },
  travelMini3Text: {
    en: "Useful planning for islands, roads, local transport and day-to-day movement.",
    el: "Χρήσιμη οργάνωση για νησιά, δρόμους, τοπικές μετακινήσεις και την καθημερινή μεταφορά σου.",
  },

  hotelsEyebrow: { en: "Hotels", el: "Ξενοδοχεία" },
  hotelsTitle: {
    en: "Featured stays in Greece",
    el: "Προτεινόμενα καταλύματα στην Ελλάδα",
  },
  hotelsText: {
    en: "Browse selected stays across Greece, from island hotels to city properties, with quick highlights and direct guide pages.",
    el: "Δες επιλεγμένα καταλύματα σε όλη την Ελλάδα, από νησιωτικά ξενοδοχεία μέχρι city stays, με βασικά highlights και ξεχωριστές σελίδες.",
  },

  toursEyebrow: { en: "Experiences", el: "Τοπικές Εμπειρίες & Tours" },
  toursTitle: {
    en: "Discover local experiences & tours in Greece",
    el: "Ανακάλυψε τοπικές εμπειρίες & tours στην Ελλάδα",
  },
  toursText: {
    en: "Discover selected local tours and experiences, from authentic food experiences and cultural activities to day trips that enrich your stay.",
    el: "Ανακάλυψε επιλεγμένες τοπικές εμπειρίες, από αυθεντικές γαστρονομικές εμπειρίες και πολιτιστικές δραστηριότητες μέχρι ημερήσιες εκδρομές που εμπλουτίζουν τη διαμονή σου.",
  },

  foodEyebrow: { en: "Food & Wine", el: "Φαγητό & Κρασί" },
  foodTitle: {
    en: "Taste Greece through local food and wine",
    el: "Γνώρισε την Ελλάδα μέσα από το τοπικό φαγητό και κρασί",
  },
  foodText: {
    en: "Discover regional dishes, local specialties and food-focused guide pages that add flavor to your Greece trip planning.",
    el: "Ανακάλυψε τοπικά πιάτα, regional specialties και food-focused οδηγούς που δίνουν περισσότερο χαρακτήρα στην οργάνωση του ταξιδιού σου στην Ελλάδα.",
  },

  communitiesEyebrow: {
    en: "Travel to Greece",
    el: "Ταξίδι στην Ελλάδα",
  },
  communitiesTitle: {
    en: "Facebook travel forums and communities",
    el: "Facebook travel forums και κοινότητες",
  },
  communitiesText: {
    en: "Explore destination-based travel communities for islands, cities and holiday regions across Greece.",
    el: "Ανακάλυψε ταξιδιωτικές κοινότητες για νησιά, πόλεις και τουριστικές περιοχές σε όλη την Ελλάδα.",
  },

  footerText: {
    en: "GoGreeceNow — destinations, travel info, hotels, tours, food and local communities.",
    el: "GoGreeceNow — προορισμοί, ταξιδιωτικές πληροφορίες, ξενοδοχεία, εκδρομές, φαγητό και τοπικές κοινότητες.",
  },
  ctaAd: {
    en: "Advertise your business",
    el: "Διαφήμισε την επιχείρησή σου",
  },
  footerAbout: { en: "About", el: "Σχετικά" },
  footerContact: { en: "Contact", el: "Επικοινωνία" },
  footerPrivacy: { en: "Privacy", el: "Απόρρητο" },
};

type SanityContent = {
  heroBadge?: string;
  heroTitle?: string;
  heroText?: string;
  heroPrimary?: string;
  heroSecondary?: string;
  heroPanelEyebrow?: string;
  heroPanelTitle?: string;
  heroPanelText?: string;
  howItWorksEyebrow?: string;
  howItWorksTitle?: string;
  howItWorksText?: string;
  howItWorksStep1Title?: string;
  howItWorksStep1Text?: string;
  howItWorksStep2Title?: string;
  howItWorksStep2Text?: string;
  howItWorksStep3Title?: string;
  howItWorksStep3Text?: string;
  travelStylesEyebrow?: string;
  travelStylesTitle?: string;
  travelStylesText?: string;
  startPlanningEyebrow?: string;
  startPlanningTitle?: string;
  startPlanningText?: string;
  featuredCollectionsEyebrow?: string;
  featuredCollectionsTitle?: string;
  featuredCollectionsText?: string;
  destinationEyebrow?: string;
  destinationTitle?: string;
  destinationText?: string;
  travelHubEyebrow?: string;
  travelHubTitle?: string;
  travelHubText?: string;
  travelHubCta?: string;
  hotelsEyebrow?: string;
  hotelsTitle?: string;
  hotelsText?: string;
  hotelsPromoTitle?: string;
  toursEyebrow?: string;
  toursTitle?: string;
  toursText?: string;
  foodEyebrow?: string;
  foodTitle?: string;
  foodText?: string;
  communitiesEyebrow?: string;
  communitiesTitle?: string;
  communitiesText?: string;
  footerText?: string;
  ctaAd?: string;
  footerAbout?: string;
  footerContact?: string;
  footerPrivacy?: string;
};

export function computeCopy(content: SanityContent | null | undefined, lang: Lang): HomeContent {
  return {
    heroBadge: t.heroBadge[lang],
    heroTitle: t.heroTitle[lang],
    heroText: t.heroText[lang],
    heroPrimary: t.heroPrimary[lang],
    heroSecondary: t.heroSecondary[lang],
    heroPanelEyebrow: t.heroPanelEyebrow[lang],
    heroPanelTitle: t.heroPanelTitle[lang],
    heroPanelText:
      content?.heroPanelText ??
      (lang === "en"
        ? "GoGreeceNow brings destination ideas, practical travel advice, stays, tours and local food inspiration together so travelers can plan each part of a Greece trip in one place."
        : "Το GoGreeceNow συγκεντρώνει ιδέες για προορισμούς, πρακτικές ταξιδιωτικές συμβουλές, διαμονή, εκδρομές και τοπικές γεύσεις ώστε ο ταξιδιώτης να οργανώνει κάθε κομμάτι του ταξιδιού στην Ελλάδα σε ένα μέρος."),
    howItWorksEyebrow: content?.howItWorksEyebrow ?? t.howItWorksEyebrow[lang],
    howItWorksTitle: content?.howItWorksTitle ?? t.howItWorksTitle[lang],
    howItWorksText: content?.howItWorksText ?? t.howItWorksText[lang],
    howItWorksStep1Title: t.howItWorksStep1Title[lang],
    howItWorksStep1Text: t.howItWorksStep1Text[lang],
    howItWorksStep2Title: t.howItWorksStep2Title[lang],
    howItWorksStep2Text: t.howItWorksStep2Text[lang],
    howItWorksStep3Title: t.howItWorksStep3Title[lang],
    howItWorksStep3Text: t.howItWorksStep3Text[lang],
    travelStylesEyebrow: content?.travelStylesEyebrow ?? t.travelStylesEyebrow[lang],
    travelStylesTitle: content?.travelStylesTitle ?? t.travelStylesTitle[lang],
    travelStylesText: content?.travelStylesText ?? t.travelStylesText[lang],
    startPlanningEyebrow: content?.startPlanningEyebrow ?? t.startPlanningEyebrow[lang],
    startPlanningTitle: content?.startPlanningTitle ?? t.startPlanningTitle[lang],
    startPlanningText: content?.startPlanningText ?? t.startPlanningText[lang],
    featuredCollectionsEyebrow:
      content?.featuredCollectionsEyebrow ??
      (lang === "en" ? "Featured Greece Collections" : "Επιλεγμένες Συλλογές Ελλάδας"),
    featuredCollectionsTitle:
      content?.featuredCollectionsTitle ??
      (lang === "en"
        ? "Explore Greece through stronger travel themes"
        : "Ανακάλυψε την Ελλάδα μέσα από πιο δυνατές ταξιδιωτικές θεματικές"),
    featuredCollectionsText:
      content?.featuredCollectionsText ??
      (lang === "en"
        ? "These editorial hubs help travelers move from broad inspiration into practical, indexable topic pages about islands, planning, experiences and food."
        : "Αυτά τα editorial hubs βοηθούν τον ταξιδιώτη να περάσει από τη γενική έμπνευση σε πιο συγκεκριμένες, χρήσιμες και indexable θεματικές σελίδες για νησιά, οργάνωση, εμπειρίες και γαστρονομία."),
    destinationEyebrow: content?.destinationEyebrow ?? t.destinationEyebrow[lang],
    destinationTitle: content?.destinationTitle ?? t.destinationTitle[lang],
    destinationText: content?.destinationText ?? t.destinationText[lang],
    travelHubEyebrow: content?.travelHubEyebrow ?? t.travelHubEyebrow[lang],
    travelHubTitle: content?.travelHubTitle ?? t.travelHubTitle[lang],
    travelHubText: content?.travelHubText ?? t.travelHubText[lang],
    travelHubCta: content?.travelHubCta ?? t.travelHubCta[lang],
    travelMini1Title: t.travelMini1Title[lang],
    travelMini1Text: t.travelMini1Text[lang],
    travelMini2Title: t.travelMini2Title[lang],
    travelMini2Text: t.travelMini2Text[lang],
    travelMini3Title: t.travelMini3Title[lang],
    travelMini3Text: t.travelMini3Text[lang],
    hotelsEyebrow: content?.hotelsEyebrow ?? t.hotelsEyebrow[lang],
    hotelsTitle: content?.hotelsTitle ?? t.hotelsTitle[lang],
    hotelsText: content?.hotelsText ?? t.hotelsText[lang],
    hotelsPromoTitle:
      content?.hotelsPromoTitle ??
      (lang === "en" ? "Promote your hotel or travel business" : "Πρόβαλε το ξενοδοχείο ή το travel business σου"),
    toursEyebrow: content?.toursEyebrow ?? t.toursEyebrow[lang],
    toursTitle: content?.toursTitle ?? t.toursTitle[lang],
    toursText: content?.toursText ?? t.toursText[lang],
    foodEyebrow: content?.foodEyebrow ?? t.foodEyebrow[lang],
    foodTitle: content?.foodTitle ?? t.foodTitle[lang],
    foodText: content?.foodText ?? t.foodText[lang],
    communitiesEyebrow: content?.communitiesEyebrow ?? t.communitiesEyebrow[lang],
    communitiesTitle: content?.communitiesTitle ?? t.communitiesTitle[lang],
    communitiesText: content?.communitiesText ?? t.communitiesText[lang],
    footerText: content?.footerText ?? t.footerText[lang],
    ctaAd: content?.ctaAd ?? t.ctaAd[lang],
    footerAbout: content?.footerAbout ?? t.footerAbout[lang],
    footerContact: content?.footerContact ?? t.footerContact[lang],
    footerPrivacy: content?.footerPrivacy ?? t.footerPrivacy[lang],
  };
}
