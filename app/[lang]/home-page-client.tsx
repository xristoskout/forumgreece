"use client";

import Link from "next/link";
import SiteHeader from "../../components/site-header";
import {
  Lang,
  categories,
  communities,
  destinations,
  food,
  hotels,
  travelInfoGuides,
  tours,
} from "../../lib/content";

type HomePageContent = {
  heroBadge?: string;
  heroTitle?: string;
  heroText?: string;
  heroPrimary?: string;
  heroSecondary?: string;

  heroPanelEyebrow?: string;
  heroPanelTitle?: string;
  heroPanelText?: string;

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

type HomePageClientProps = {
  lang: Lang;
  content?: HomePageContent | null;
};

export default function HomePageClient({
  lang,
  content,
}: HomePageClientProps) {
  function stripLocale(path: string) {
    const stripped = path.replace(/^\/(en|el)(?=\/|$)/, "");
    return stripped || "/";
  }

  function withLang(path: string, locale: Lang = lang) {
    if (/^https?:\/\//i.test(path)) return path;

    const normalized = path.startsWith("/") ? path : `/${path}`;
    const cleanPath = stripLocale(normalized);

    if (cleanPath === "/") {
      return `/${locale}`;
    }

    return `/${locale}${cleanPath}`;
  }

  function isExternalUrl(url: string) {
    return /^https?:\/\//i.test(url);
  }

  const t = {
    navDestinations: { en: "Destinations", el: "Προορισμοί" },
    navTravelInfo: { en: "Travel Info", el: "Ταξιδιωτικές Πληροφορίες" },
    navHotels: { en: "Hotels", el: "Ξενοδοχεία" },
    navTours: { en: "Tours", el: "Εκδρομές" },
    navEatDrink: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
    navForums: { en: "Travel to Greece", el: "Ταξίδι στην Ελλάδα" },

    heroBadge: {
      en: "Greece Travel Portal",
      el: "Travel Portal για την Ελλάδα",
    },
    heroTitle: {
      en: "Plan a better trip to Greece",
      el: "Οργάνωσε καλύτερα το ταξίδι σου στην Ελλάδα",
    },
    heroText: {
      en: "Discover destinations, practical travel info, stays, tours and local food ideas in one clear Greece travel hub.",
      el: "Ανακάλυψε προορισμούς, χρήσιμες ταξιδιωτικές πληροφορίες, διαμονή, εκδρομές και τοπικές γεύσεις μέσα από ένα καθαρό Greece travel hub.",
    },
    heroPrimary: {
      en: "Browse Greece destinations",
      el: "Δες οδηγούς προορισμών",
    },
    heroSecondary: {
      en: "Read Greece travel info",
      el: "Δες ταξιδιωτικές πληροφορίες",
    },

    heroPanelEyebrow: {
      en: "Everything in one place",
      el: "Όλα σε ένα μέρος",
    },
    heroPanelTitle: {
      en: "Start with the part of the trip you need most",
      el: "Ξεκίνα από το κομμάτι του ταξιδιού που χρειάζεσαι περισσότερο",
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
      en: "Top Destinations",
      el: "Δημοφιλείς Προορισμοί",
    },
    destinationTitle: {
      en: "Explore Greece through destination guides",
      el: "Ανακάλυψε την Ελλάδα μέσα από οδηγούς προορισμών",
    },
    destinationText: {
      en: "Find island, city and regional guides with highlights, planning tips and ideas to help you decide where to go in Greece.",
      el: "Βρες οδηγούς για νησιά, πόλεις και περιοχές με highlights, πρακτικές συμβουλές και ιδέες για να αποφασίσεις πού θα πας στην Ελλάδα.",
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

    travelInfoEyebrow: {
      en: "Travel Info",
      el: "Ταξιδιωτικές Πληροφορίες",
    },
    travelInfoTitle: {
      en: "Everything useful before you go",
      el: "Όλα όσα χρειάζεσαι πριν ταξιδέψεις",
    },
    travelInfoText: {
      en: "Useful planning content about how to get there, when to go and how to move around.",
      el: "Χρήσιμο περιεχόμενο για το πώς θα έρθεις, πότε να ταξιδέψεις και πώς να μετακινηθείς.",
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

    toursEyebrow: { en: "Tours", el: "Εκδρομές" },
    toursTitle: {
      en: "Discover the best Greece tours",
      el: "Ανακάλυψε τις καλύτερες εκδρομές στην Ελλάδα",
    },
    toursText: {
      en: "Explore curated tour ideas in Kefalonia, Lesvos and Crete with local experiences, island highlights and easy travel inspiration.",
      el: "Ανακάλυψε επιλεγμένες προτάσεις για εκδρομές στην Κεφαλονιά, τη Λέσβο και την Κρήτη, με τοπικές εμπειρίες, κορυφαία σημεία και έμπνευση για το ταξίδι σου.",
    },

    foodEyebrow: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
    foodTitle: {
      en: "Taste Greece through local food and drinks",
      el: "Γνώρισε την Ελλάδα μέσα από το τοπικό φαγητό και ποτό",
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

  const copy = {
    heroBadge: content?.heroBadge ?? t.heroBadge[lang],
    heroTitle: content?.heroTitle ?? t.heroTitle[lang],
    heroText: content?.heroText ?? t.heroText[lang],
    heroPrimary: content?.heroPrimary ?? t.heroPrimary[lang],
    heroSecondary: content?.heroSecondary ?? t.heroSecondary[lang],

    heroPanelEyebrow: content?.heroPanelEyebrow ?? t.heroPanelEyebrow[lang],
    heroPanelTitle: content?.heroPanelTitle ?? t.heroPanelTitle[lang],
    heroPanelText:
      content?.heroPanelText ??
      (lang === "en"
        ? "GoGreeceNow brings destination ideas, practical travel advice, stays, tours and local food inspiration together so travelers can plan each part of a Greece trip in one place."
        : "Το GoGreeceNow συγκεντρώνει ιδέες για προορισμούς, πρακτικές ταξιδιωτικές συμβουλές, διαμονή, εκδρομές και τοπικές γεύσεις ώστε ο ταξιδιώτης να οργανώνει κάθε κομμάτι του ταξιδιού στην Ελλάδα σε ένα μέρος."),

    startPlanningEyebrow:
      content?.startPlanningEyebrow ?? t.startPlanningEyebrow[lang],
    startPlanningTitle:
      content?.startPlanningTitle ?? t.startPlanningTitle[lang],
    startPlanningText:
      content?.startPlanningText ?? t.startPlanningText[lang],

    featuredCollectionsEyebrow:
      content?.featuredCollectionsEyebrow ??
      (lang === "en"
        ? "Featured Greece Collections"
        : "Επιλεγμένες Συλλογές Ελλάδας"),
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

    hotelsEyebrow: content?.hotelsEyebrow ?? t.hotelsEyebrow[lang],
    hotelsTitle: content?.hotelsTitle ?? t.hotelsTitle[lang],
    hotelsText: content?.hotelsText ?? t.hotelsText[lang],
    hotelsPromoTitle:
      content?.hotelsPromoTitle ??
      (lang === "en"
        ? "Promote your hotel or travel business"
        : "Πρόβαλε το ξενοδοχείο ή το travel business σου"),

    toursEyebrow: content?.toursEyebrow ?? t.toursEyebrow[lang],
    toursTitle: content?.toursTitle ?? t.toursTitle[lang],
    toursText: content?.toursText ?? t.toursText[lang],

    foodEyebrow: content?.foodEyebrow ?? t.foodEyebrow[lang],
    foodTitle: content?.foodTitle ?? t.foodTitle[lang],
    foodText: content?.foodText ?? t.foodText[lang],

    communitiesEyebrow:
      content?.communitiesEyebrow ?? t.communitiesEyebrow[lang],
    communitiesTitle: content?.communitiesTitle ?? t.communitiesTitle[lang],
    communitiesText: content?.communitiesText ?? t.communitiesText[lang],

    footerText: content?.footerText ?? t.footerText[lang],
    ctaAd: content?.ctaAd ?? t.ctaAd[lang],
    footerAbout: content?.footerAbout ?? t.footerAbout[lang],
    footerContact: content?.footerContact ?? t.footerContact[lang],
    footerPrivacy: content?.footerPrivacy ?? t.footerPrivacy[lang],
  };

  const quickFacts = [
    {
      value: `${destinations.length}+`,
      label: { en: "destinations", el: "προορισμοί" },
    },
    {
      value: `${travelInfoGuides.length}+`,
      label: { en: "travel guides", el: "travel οδηγοί" },
    },
    {
      value: `${hotels.length}+`,
      label: { en: "featured stays", el: "προτεινόμενα stays" },
    },
    {
      value: `${tours.length + food.length}+`,
      label: { en: "experiences & flavors", el: "εμπειρίες & γεύσεις" },
    },
  ];

  const heroJumpLinks = [
    {
      label: { en: "Destination guides", el: "Οδηγοί προορισμών" },
      href: "#destinations",
      kind: "anchor" as const,
    },
    {
      label: { en: "How to get to Greece", el: "Πώς να έρθεις στην Ελλάδα" },
      href: withLang("/travel-info/how-to-get-to-greece"),
      kind: "route" as const,
    },
    {
      label: { en: "Hotels in Greece", el: "Ξενοδοχεία στην Ελλάδα" },
      href: "#hotels",
      kind: "anchor" as const,
    },
    {
      label: { en: "Tours in Greece", el: "Εκδρομές στην Ελλάδα" },
      href: "#tours",
      kind: "anchor" as const,
    },
    {
      label: {
        en: "Greek food guides",
        el: "Οδηγοί ελληνικής γαστρονομίας",
      },
      href: "#food",
      kind: "anchor" as const,
    },
  ];

  const startCards = [
    {
      icon: "🏝️",
      title: { en: "Choose a destination", el: "Διάλεξε προορισμό" },
      description: {
        en: "Start with islands, cities and holiday spots across Greece.",
        el: "Ξεκίνα με νησιά, πόλεις και ταξιδιωτικούς προορισμούς σε όλη την Ελλάδα.",
      },
      href: "#destinations",
      kind: "anchor" as const,
      cta: {
        en: "Browse destination guides →",
        el: "Δες οδηγούς προορισμών →",
      },
    },
    {
      icon: "🧭",
      title: { en: "Solve the practical stuff", el: "Λύσε τα πρακτικά" },
      description: {
        en: "Find useful guidance for planning, transport and timing.",
        el: "Βρες χρήσιμες πληροφορίες για οργάνωση, μετακίνηση και σωστό timing.",
      },
      href: withLang("/travel-info"),
      kind: "route" as const,
      cta: {
        en: "Read Greece travel info →",
        el: "Δες ταξιδιωτικές πληροφορίες →",
      },
    },
    {
      icon: "🏨",
      title: { en: "Browse stays", el: "Δες διαμονή" },
      description: {
        en: "Move from inspiration to actual stay options and hotel pages.",
        el: "Πέρασε από την έμπνευση σε πραγματικές επιλογές διαμονής και σελίδες ξενοδοχείων.",
      },
      href: "#hotels",
      kind: "anchor" as const,
      cta: {
        en: "Browse Greece stays →",
        el: "Δες επιλογές διαμονής →",
      },
    },
    {
      icon: "⚓",
      title: {
        en: "Add tours and local flavor",
        el: "Πρόσθεσε εκδρομές και γεύσεις",
      },
      description: {
        en: "Complete the trip with experiences, tours and food ideas.",
        el: "Ολοκλήρωσε το ταξίδι με εμπειρίες, εκδρομές και τοπικές γεύσεις.",
      },
      href: "#tours",
      kind: "anchor" as const,
      cta: {
        en: "Explore tours and food guides →",
        el: "Δες εκδρομές και food guides →",
      },
    },
  ];

  const featuredCollections = [
    {
      title: { en: "Island Escapes", el: "Νησιωτικές Αποδράσεις" },
      description: {
        en: "Browse Greek island inspiration, sea views, beaches and destination ideas for summer trips.",
        el: "Ανακάλυψε έμπνευση για ελληνικά νησιά, θαλασσινά τοπία, παραλίες και ιδέες για καλοκαιρινά ταξίδια.",
      },
      href: withLang("/collections/greek-islands"),
      image: destinations[0]?.image || "/images/hero-greece.jpg",
      eyebrow: {
        en: "Featured Collection",
        el: "Προτεινόμενη Συλλογή",
      },
      tags: {
        en: ["Greek Islands", "Beaches", "Summer Trips"],
        el: ["Ελληνικά Νησιά", "Παραλίες", "Καλοκαιρινά Ταξίδια"],
      },
      cta: {
        en: "Explore Greek island guides →",
        el: "Δες οδηγούς για ελληνικά νησιά →",
      },
    },
    {
      title: {
        en: "Plan Before You Go",
        el: "Οργάνωσε πριν ταξιδέψεις",
      },
      description: {
        en: "Find practical travel information about transport, timing, booking and moving around Greece.",
        el: "Βρες πρακτικές ταξιδιωτικές πληροφορίες για μετακίνηση, εποχές, κρατήσεις και οργάνωση ταξιδιού στην Ελλάδα.",
      },
      href: withLang("/collections/greece-travel-planning"),
      image: travelInfoGuides[0]?.image || "/images/hero-greece.jpg",
      eyebrow: { en: "Practical Greece", el: "Χρήσιμη Ελλάδα" },
      tags: {
        en: ["Transport", "Travel Tips", "Planning"],
        el: ["Μετακίνηση", "Travel Tips", "Οργάνωση"],
      },
      cta: {
        en: "Read Greece travel planning hub →",
        el: "Δες το hub οργάνωσης ταξιδιού →",
      },
    },
    {
      title: {
        en: "Sea, Tours & Experiences",
        el: "Θάλασσα, Εκδρομές & Εμπειρίες",
      },
      description: {
        en: "Explore day trips, boat tours and experience-led ideas across the Greek islands and mainland.",
        el: "Ανακάλυψε ημερήσιες εκδρομές, boat tours και εμπειρίες στα ελληνικά νησιά και στην ηπειρωτική Ελλάδα.",
      },
      href: withLang("/collections/greece-tours-and-experiences"),
      image: tours[0]?.image || "/images/hero-greece.jpg",
      eyebrow: { en: "Curated Ideas", el: "Επιλεγμένες Ιδέες" },
      tags: {
        en: ["Boat Tours", "Experiences", "Day Trips"],
        el: ["Boat Tours", "Εμπειρίες", "Ημερήσιες Εκδρομές"],
      },
      cta: {
        en: "Explore Greece tours hub →",
        el: "Δες το hub εκδρομών στην Ελλάδα →",
      },
    },
    {
      title: {
        en: "Taste Local Greece",
        el: "Γεύσεις της Τοπικής Ελλάδας",
      },
      description: {
        en: "Discover regional dishes, local drinks and destination-based food ideas from across Greece.",
        el: "Ανακάλυψε τοπικά πιάτα, ποτά και food ideas από διαφορετικούς προορισμούς σε όλη την Ελλάδα.",
      },
      href: withLang("/collections/greece-food-and-drink"),
      image: food[0]?.image || "/images/hero-greece.jpg",
      eyebrow: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
      tags: {
        en: ["Local Food", "Wine", "Greek Cuisine"],
        el: ["Τοπική Κουζίνα", "Κρασί", "Ελληνική Γαστρονομία"],
      },
      cta: {
        en: "Explore Greek food guides →",
        el: "Δες οδηγούς ελληνικής γαστρονομίας →",
      },
    },
  ];

  const destinationCardMeta = [
    {
      eyebrow: {
        en: "Featured Destination",
        el: "Προτεινόμενος Προορισμός",
      },
      summary: {
        en: "A strong starting point for travelers looking for scenery, atmosphere and practical destination planning.",
        el: "Μια δυνατή αφετηρία για ταξιδιώτες που ψάχνουν τοπίο, ατμόσφαιρα και πρακτική οργάνωση προορισμού.",
      },
      tags: {
        en: ["Travel Guide", "Highlights", "Local Tips"],
        el: ["Travel Guide", "Highlights", "Τοπικά Tips"],
      },
    },
    {
      eyebrow: { en: "Popular Pick", el: "Δημοφιλής Επιλογή" },
      summary: {
        en: "A guide designed to help visitors quickly understand what makes this place worth the trip.",
        el: "Ένας οδηγός που βοηθά τον επισκέπτη να καταλάβει γρήγορα τι κάνει αυτό το μέρος να αξίζει το ταξίδι.",
      },
      tags: {
        en: ["Best Spots", "What to See", "Ideas"],
        el: ["Best Spots", "Τι να Δεις", "Ιδέες"],
      },
    },
    {
      eyebrow: { en: "Travel Inspiration", el: "Ταξιδιωτική Έμπνευση" },
      summary: {
        en: "Useful for travelers who want a clean overview before they dive into details.",
        el: "Χρήσιμο για ταξιδιώτες που θέλουν μια καθαρή εικόνα πριν μπουν στις λεπτομέρειες.",
      },
      tags: {
        en: ["Overview", "Planning", "Guide"],
        el: ["Overview", "Planning", "Guide"],
      },
    },
    {
      eyebrow: { en: "Editorial Guide", el: "Editorial Οδηγός" },
      summary: {
        en: "A curated destination entry with useful structure and fast scanning.",
        el: "Μια curated παρουσίαση προορισμού με χρήσιμη δομή και γρήγορο scanning.",
      },
      tags: {
        en: ["Curated", "Easy Read", "Essentials"],
        el: ["Curated", "Easy Read", "Essentials"],
      },
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fbff] text-slate-900">
      <SiteHeader />

      <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-greece.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:pb-32 grid lg:items-end">
          <div className="animate-fade-in-up mt-10 md:mt-0">
            <div className="inline-flex rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-700 backdrop-blur-md shadow-sm mb-6 relative overflow-hidden group">
               <span className="relative z-10">{copy.heroBadge}</span>
            </div>

            <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold leading-[1.1] text-white drop-shadow-xl tracking-tight mb-6">
              {copy.heroTitle}
            </h1>

            <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600 font-light drop-shadow-lg mb-10">
              {copy.heroText}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#destinations"
                className="group relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-4 text-base font-semibold text-slate-900 shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {copy.heroPrimary} <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>

              <Link
                href={withLang("/travel-info")}
                className="group rounded-2xl border border-slate-300 bg-white backdrop-blur-md px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 hover:border-white/30"
              >
                {copy.heroSecondary}
              </Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickFacts.map((fact) => (
                <div key={`${fact.value}-${fact.label.en}`} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white backdrop-blur-lg px-5 py-5 transition hover:bg-slate-50 hover:border-slate-300">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{fact.value}</div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-indigo-800">{fact.label[lang]}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0 lg:translate-y-16">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl"></div>
            <div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 mb-4">
                {copy.heroPanelEyebrow}
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                {copy.heroPanelTitle}
              </h2>
              
              <div className="grid gap-4 sm:grid-cols-2">
                {categories.map((item) => (
                   <article key={item.title.en} className="group rounded-2xl border border-white/5 bg-white p-4 transition-all hover:bg-slate-50 hover:-translate-y-1">
                      <div className="text-3xl mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">{item.emoji}</div>
                      <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-indigo-800 transition-colors">{item.title[lang]}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.description[lang]}</p>
                   </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="border border-slate-200 bg-white backdrop-blur-md p-6 shadow-xl shadow-black/50 md:p-8">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                  {copy.startPlanningEyebrow}
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  {copy.startPlanningTitle}
                </h2>
              </div>

              <p className="max-w-3xl text-sm leading-6 text-slate-500">
                {copy.startPlanningText}
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {startCards.map((item) =>
                item.kind === "route" ? (
                  <Link
                    key={item.title.en}
                    href={item.href}
                    className="group border border-slate-200 bg-white hover:bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-white backdrop-blur-md hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-indigo-100 text-indigo-800 text-2xl">
                      {item.icon}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">
                      {item.title[lang]}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description[lang]}
                    </p>
                    <span className="mt-5 inline-block text-sm font-semibold text-indigo-700 transition group-hover:text-indigo-200">
                      {item.cta[lang]}
                    </span>
                  </Link>
                ) : (
                  <a
                    key={item.title.en}
                    href={item.href}
                    className="group border border-slate-200 bg-white hover:bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-white backdrop-blur-md hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-indigo-100 text-indigo-800 text-2xl">
                      {item.icon}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">
                      {item.title[lang]}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description[lang]}
                    </p>
                    <span className="mt-5 inline-block text-sm font-semibold text-indigo-700 transition group-hover:text-indigo-200">
                      {item.cta[lang]}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              {copy.featuredCollectionsEyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {copy.featuredCollectionsTitle}
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            {copy.featuredCollectionsText}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {featuredCollections.map((item) => (
            <Link
              key={item.title.en}
              href={item.href}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-slate-900 transition-all duration-700 hover:-translate-y-2 hover:scale-[1.03] hover:z-30 hover:shadow-[0_15px_50px_rgba(0,0,0,0.1)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-transparent transition-opacity duration-700" />

              <div className="relative p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90 drop-shadow-md">
                  {item.eyebrow[lang]}
                </p>
                <h3 className="mt-3 max-w-xl text-2xl font-bold leading-tight text-white drop-shadow-lg md:text-3xl">
                  {item.title[lang]}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/95 drop-shadow-md">
                  {item.description[lang]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags[lang].map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/30 bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="mt-6 inline-block bg-white/90 backdrop-blur-md px-4 py-2 text-sm font-semibold text-slate-900 transition group-hover:bg-white">
                  {item.cta[lang]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="destinations"
        className="scroll-mt-28 mx-auto max-w-7xl px-6 py-16"
      >
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              {copy.destinationEyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {copy.destinationTitle}
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            {copy.destinationText}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item, index) => {
            const meta = destinationCardMeta[index % destinationCardMeta.length];
            return (
              <article
                key={item.slug}
                className="group relative flex flex-col justify-end overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.05] hover:z-30 hover:shadow-[0_15px_50px_rgba(0,0,0,0.1)] min-h-[450px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-75" />

                <div className="relative p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-800 backdrop-blur-md">
                      {meta.eyebrow[lang]}
                    </span>
                    <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900/90 backdrop-blur-md">
                      {item.region[lang]}
                    </span>
                  </div>

                  <h3 className="mb-2 text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
                    {item.name}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-white/95 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.blurb[lang]}
                  </p>

                  <Link
                    href={withLang(`/destinations/${item.slug}`)}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 backdrop-blur-md transition-all hover:bg-indigo-600 hover:border-transparent hover:text-slate-900"
                    aria-label={lang === "en" ? `Explore ${item.name}` : `Οδηγός για ${item.name}`}
                  >
                    {lang === "en" ? `Explore ${item.name} →` : `Εξερεύνηση →`}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="travel-info" className="scroll-mt-28 bg-white backdrop-blur-md py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="border border-slate-200 bg-white hover:bg-slate-50 p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {copy.travelHubEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {copy.travelHubTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                {copy.travelHubText}
              </p>

              <Link
                href={withLang("/travel-info")}
                className="mt-6 inline-flex bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                {copy.travelHubCta}
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href={withLang("/travel-info/how-to-get-to-greece")}
                className="group border border-slate-200 bg-white backdrop-blur-md p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-3xl">✈️</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {t.travelMini1Title[lang]}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {t.travelMini1Text[lang]}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-indigo-700">
                  {lang === "en"
                    ? "Read how to get to Greece →"
                    : "Δες πώς να έρθεις στην Ελλάδα →"}
                </span>
              </Link>

              <Link
                href={withLang("/travel-info/best-time-to-visit-greece")}
                className="group border border-slate-200 bg-white backdrop-blur-md p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-3xl">🗓️</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {t.travelMini2Title[lang]}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {t.travelMini2Text[lang]}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-indigo-700">
                  {lang === "en"
                    ? "Read the best time to visit Greece guide →"
                    : "Δες τον οδηγό για το πότε να ταξιδέψεις →"}
                </span>
              </Link>

              <Link
                href={withLang("/travel-info/getting-around-greece")}
                className="group border border-slate-200 bg-white backdrop-blur-md p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-3xl">🧭</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {t.travelMini3Title[lang]}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {t.travelMini3Text[lang]}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-indigo-700">
                  {lang === "en"
                    ? "Read the getting around Greece guide →"
                    : "Δες τον οδηγό μετακίνησης στην Ελλάδα →"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="hotels"
        className="scroll-mt-28 bg-gradient-to-b from-amber-50/70 to-white py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex rounded-md bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                🏨 {copy.hotelsEyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {copy.hotelsTitle}
              </h2>
              <div className="mt-4 h-1 w-24 rounded-md bg-gradient-to-r from-amber-500 to-orange-400" />
              <p className="mt-4 max-w-3xl rounded-xl border border-amber-100 bg-white backdrop-blur-md px-5 py-4 text-sm leading-6 text-slate-500 shadow-sm">
                {copy.hotelsText}
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-sm lg:max-w-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Sponsored
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                {copy.hotelsPromoTitle}
              </h3>
              <button className="mt-4 rounded-md bg-amber-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-600">
                {copy.ctaAd}
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {hotels.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-br from-white via-amber-50/70 to-orange-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="relative h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1606]/35 via-transparent to-transparent" />

                  {item.badge ? (
                    <span className="absolute left-4 top-4 rounded-md bg-amber-500 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                      {item.badge}
                    </span>
                  ) : null}

                  <span className="absolute right-4 top-4 rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-amber-800 backdrop-blur">
                    {lang === "en" ? "Stay" : "Διαμονή"}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-amber-100 text-2xl">
                      🏨
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                        {lang === "en"
                          ? "Featured stay"
                          : "Προτεινόμενη διαμονή"}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="rounded-md bg-white backdrop-blur-md px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                      {item.place}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {item.info[lang]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.features[lang].slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-md border border-amber-100 bg-white backdrop-blur-md px-3 py-1 text-xs font-medium text-amber-900"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={withLang(`/hotels/${item.slug}`)}
                    className="mt-6 inline-flex rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-600"
                    aria-label={
                      lang === "en"
                        ? `Read where to stay in ${item.place}`
                        : `Δες πού να μείνεις στο ${item.place}`
                    }
                  >
                    {lang === "en"
                      ? `Where to stay in ${item.place} →`
                      : `Πού να μείνεις στο ${item.place} →`}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tours"
        className="scroll-mt-28 bg-gradient-to-b from-sky-50 to-cyan-50/60 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex rounded-md bg-cyan-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-800">
                ⚓ {copy.toursEyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {copy.toursTitle}
              </h2>
              <div className="mt-4 h-1 w-24 rounded-md bg-gradient-to-r from-cyan-500 to-sky-500" />
            </div>

            <p className="max-w-3xl rounded-xl border border-cyan-100 bg-white backdrop-blur-md px-5 py-4 text-sm leading-6 text-slate-500 shadow-sm">
              {copy.toursText}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tours.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-xl border border-cyan-200 bg-white backdrop-blur-md shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <div
                    className="h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-md bg-cyan-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-sm">
                      {lang === "en" ? "Experiences" : "Εμπειρίες"}
                    </span>
                    <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-cyan-800 backdrop-blur">
                      {item.place}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-2xl">
                      ⚓
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                        {lang === "en"
                          ? "Local tours & activities"
                          : "Τοπικές εκδρομές & δραστηριότητες"}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold leading-snug">
                        {item.title[lang]}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {item.info[lang]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.highlights[lang].slice(0, 3).map((point) => (
                      <span
                        key={point}
                        className="rounded-md border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-900"
                      >
                        {point}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={withLang(`/tours/${item.slug}`)}
                    className="mt-6 inline-flex rounded-md bg-cyan-700 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-800"
                    aria-label={
                      lang === "en"
                        ? `Read the ${item.place} tours guide`
                        : `Δες τον οδηγό εκδρομών για ${item.place}`
                    }
                  >
                    {lang === "en"
                      ? `${item.place} tours guide →`
                      : `Οδηγός εκδρομών για ${item.place} →`}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="food"
        className="scroll-mt-28 bg-gradient-to-b from-orange-50/50 to-amber-50/40 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <span className="inline-flex rounded-md bg-orange-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-orange-800">
              🍷 {copy.foodEyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              {copy.foodTitle}
            </h2>
            <div className="mt-4 h-1 w-24 rounded-md bg-gradient-to-r from-orange-500 to-amber-400" />
            <p className="mt-4 max-w-3xl rounded-xl border border-orange-100 bg-white/85 px-5 py-4 text-sm leading-6 text-slate-500 shadow-sm">
              {copy.foodText}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {food.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-xl border border-orange-200 bg-gradient-to-br from-white via-orange-50/80 to-amber-100/70 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <div
                    className="h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a2207]/35 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-md bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-sm">
                      {lang === "en" ? "Food & Drink" : "Φαγητό & Ποτό"}
                    </span>
                    <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-orange-800 backdrop-blur">
                      {item.place}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-100 text-2xl">
                      🍷
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
                        {lang === "en" ? "Local flavors" : "Τοπικές γεύσεις"}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold leading-snug">
                        {item.title[lang]}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {item.info[lang]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.specialties[lang].slice(0, 3).map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-md border border-orange-100 bg-white backdrop-blur-md px-3 py-1 text-xs font-medium text-orange-900"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={withLang(`/eat-drink/${item.slug}`)}
                    className="mt-6 inline-flex rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-orange-600"
                    aria-label={
                      lang === "en"
                        ? `Read the ${item.place} food guide`
                        : `Δες τον γαστρονομικό οδηγό για ${item.place}`
                    }
                  >
                    {lang === "en"
                      ? `${item.place} food guide →`
                      : `Γαστρονομικός οδηγός για ${item.place} →`}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="overflow-hidden rounded-xl bg-gradient-to-r from-sky-800 via-cyan-700 to-emerald-500 p-8 text-slate-900 shadow-xl md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900/75">
            {copy.communitiesEyebrow}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            {copy.communitiesTitle}
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-900/90">
            {copy.communitiesText}
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {communities.map((item) => (
              <article
                key={item.title.en}
                className="rounded-xl bg-white/12 p-6 backdrop-blur-md"
              >
                <div className="text-3xl">🌴</div>
                <h3 className="mt-4 text-xl font-semibold">
                  {item.title[lang]}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-900/90">
                  {item.description[lang]}
                </p>

                {isExternalUrl(item.href) ? (
                  <a
                    href={item.href}
                    className="mt-5 inline-block text-sm font-semibold text-slate-900 hover:text-cyan-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {lang === "en"
                      ? `Open ${item.title.en} forum →`
                      : `Άνοιγμα forum για ${item.title.el} →`}
                  </a>
                ) : (
                  <Link
                    href={withLang(item.href)}
                    className="mt-5 inline-block text-sm font-semibold text-slate-900 hover:text-cyan-100"
                  >
                    {lang === "en"
                      ? `Open ${item.title.en} forum →`
                      : `Άνοιγμα forum για ${item.title.el} →`}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>{copy.footerText}</div>

          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-900">
              {copy.footerAbout}
            </a>
            <a href="#" className="hover:text-slate-900">
              {copy.footerContact}
            </a>
            <a href="#" className="hover:text-slate-900">
              {copy.footerPrivacy}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}