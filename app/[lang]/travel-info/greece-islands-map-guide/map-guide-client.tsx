"use client";

import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../../../components/site-header";
import InteractiveMap from "../../../../components/interactive-map";
import { usePathname } from "next/navigation";
import type { Lang } from "../../../../lib/content";

export default function GreeceIslandsMapGuidePage() {
  const pathname = usePathname();

  const lang: Lang = pathname.startsWith("/el") ? "el" : "en";

  function stripLocale(path: string) {
    const stripped = path.replace(/^\/(en|el)(?=\/|$)/, "");
    return stripped || "/";
  }

  function withLang(path: string, locale: Lang = lang) {
    if (/^https?:\/\//i.test(path)) return path;
    const normalized = path.startsWith("/") ? path : `/${path}`;
    const cleanPath = stripLocale(normalized);
    if (cleanPath === "/") return `/${locale}`;
    return `/${locale}${cleanPath}`;
  }

  const REGION_TO_SECTION: Record<string, string> = {
    GRL: "south-aegean",
    GRF: "ionian",
    GRA1: "argo-saronic",
    GRK: "north-aegean",
    GRM: "crete",
    GRJ: "peloponnese",
    GRC: "western-macedonia",
    GRD: "epirus",
    GRB: "central-macedonia",
    GRA: "eastern-macedonia",
    GR69: "mount-athos",
    GRE: "sporades",
    GRH: "central-greece",
    GRG: "western-greece",
  };

  function handleRegionClick(svgId: string) {
    const sectionId = REGION_TO_SECTION[svgId];
    if (!sectionId) return;
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  const t = {
    eyebrow: { en: "Travel Info", el: "Ταξιδιωτικές Πληροφορίες" },
    back: { en: "← Back to Travel Hub", el: "← Επιστροφή στο Travel Hub" },
    h1: {
      en: "Greece Islands Map Guide",
      el: "Οδηγός Χάρτη Ελληνικών Νησιών",
    },
    intro1: {
      en: "Greece is not one single island destination, but a whole map of different island groups with different travel styles. Some islands are ideal for iconic first-time trips, others for family holidays, slower travel, local food or easier access from Athens. Understanding where each island group sits on the map can help you plan a smarter route, avoid unnecessary transfers and choose the type of Greek island experience that truly matches your trip.",
      el: "Η Ελλάδα δεν είναι ένας μόνο νησιωτικός προορισμός, αλλά ένας ολόκληρος χάρτης από διαφορετικά νησιωτικά συμπλέγματα, το καθένα με το δικό του ταξιδιωτικό χαρακτήρα. Άλλα νησιά είναι ιδανικά για ένα πρώτο κλασικό ταξίδι στην Ελλάδα, άλλα για οικογενειακές διακοπές, άλλα για πιο ήρεμο ρυθμό, τοπική γαστρονομία ή πιο εύκολη πρόσβαση από την Αθήνα.",
    },
    intro2: {
      en: "This guide is designed to help you see the bigger picture first. Instead of jumping straight into individual islands, start with the region. Once you understand the island groups of Greece, it becomes much easier to choose where to go, how to move around and what kind of holiday to build.",
      el: "Αυτός ο οδηγός σε βοηθά να δεις πρώτα τη μεγάλη εικόνα. Αντί να ξεκινήσεις κατευθείαν από μεμονωμένα νησιά, ξεκίνα από την περιοχή. Όταν κατανοήσεις τα βασικά νησιωτικά σύνολα της Ελλάδας, γίνεται πολύ πιο εύκολο να αποφασίσεις πού να πας, πώς να κινηθείς και τι είδους διακοπές θέλεις πραγματικά να κάνεις.",
    },
    mapTitle: {
      en: "Map of the Main Greek Island Groups",
      el: "Χάρτης των Βασικών Νησιωτικών Περιοχών της Ελλάδας",
    },
    mapSub: {
      en: "Use the map below as a simple planning guide. It is not just about geography — it is about travel style. Each island group offers a different kind of Greece.",
      el: "Χρησιμοποίησε τον παρακάτω χάρτη σαν έναν απλό οδηγό οργάνωσης. Δεν αφορά μόνο τη γεωγραφία, αλλά και το στυλ του ταξιδιού.",
    },
    jumpTo: { en: "Jump to:", el: "Μετάβαση σε:" },
    planTitle: {
      en: "How to Use This Map to Plan Your Trip",
      el: "Πώς να Χρησιμοποιήσεις Αυτόν τον Χάρτη",
    },
    planText: {
      en: "If this is your first time in Greece, start by choosing the island group, not the island itself. Think first about the kind of trip you want: iconic and scenic, family-friendly, short and easy from Athens, or slower and more local. Once you choose the region that matches your travel style, selecting the right island becomes much easier. A good Greece trip usually starts with fewer decisions, not more. Use this page as your overview, then move into destination guides, where-to-stay content and practical planning pages.",
      el: "Αν είναι η πρώτη σου φορά στην Ελλάδα, ξεκίνα επιλέγοντας πρώτα νησιωτική περιοχή και όχι συγκεκριμένο νησί. Σκέψου πρώτα τι είδους ταξίδι θέλεις: εμβληματικό και σκηνικό, οικογενειακό, σύντομο και εύκολο από την Αθήνα ή πιο αργό και αυθεντικό. Ένα καλό ταξίδι στην Ελλάδα ξεκινά συνήθως με λιγότερες αποφάσεις, όχι περισσότερες. Χρησιμοποίησε αυτή τη σελίδα σαν γενικό οδηγό και μετά προχώρησε στους destination guides και τα πρακτικά travel pages.",
    },
    relatedTitle: {
      en: "Related Guides",
      el: "Σχετικοί Οδηγοί",
    },
    faqTitle: { en: "Frequently Asked Questions", el: "Συχνές Ερωτήσεις" },
  };

  const summaryCards = [
    {
      icon: "🏛️",
      label: {
        en: "Best for first-time visitors:",
        el: "Καλύτερα για πρώτο ταξίδι:",
      },
      value: { en: "Cyclades and Crete", el: "Κυκλάδες και Κρήτη" },
      color: "from-blue-50 to-indigo-50 border-blue-200",
      textColor: "text-blue-800",
    },
    {
      icon: "🌿",
      label: {
        en: "Best for greenery and beaches:",
        el: "Καλύτερα για πράσινο και παραλίες:",
      },
      value: { en: "Ionian Islands", el: "Ιόνιο" },
      color: "from-green-50 to-emerald-50 border-green-200",
      textColor: "text-green-800",
    },
    {
      icon: "⚡",
      label: {
        en: "Best for short trips from Athens:",
        el: "Καλύτερα για σύντομη απόδραση από Αθήνα:",
      },
      value: { en: "Argo-Saronic Islands", el: "Αργοσαρωνικός" },
      color: "from-amber-50 to-yellow-50 border-amber-200",
      textColor: "text-amber-800",
    },
    {
      icon: "🎣",
      label: {
        en: "Best for slower, local travel:",
        el: "Καλύτερα για αυθεντικό και ήρεμο ταξίδι:",
      },
      value: { en: "North Aegean Islands", el: "Βόρειο Αιγαίο" },
      color: "from-purple-50 to-violet-50 border-purple-200",
      textColor: "text-purple-800",
    },
  ];

  const jumpLinks = [
    { id: "south-aegean", en: "South Aegean", el: "Νότιο Αιγαίο" },
    { id: "ionian", en: "Ionian Islands", el: "Ιόνιο" },
    { id: "argo-saronic", en: "Argo-Saronic", el: "Αργοσαρωνικό" },
    { id: "north-aegean", en: "North Aegean", el: "Βόρειο Αιγαίο" },
    { id: "crete", en: "Crete", el: "Κρήτη" },
    { id: "sporades", en: "Sporades & Thessaly", el: "Σποράδες & Θεσσαλία" },
    { id: "peloponnese", en: "Peloponnese", el: "Πελοπόννησος" },
    { id: "central-macedonia", en: "Central Macedonia", el: "Κεντρική Μακεδονία" },
    { id: "western-macedonia", en: "Western Macedonia", el: "Δυτική Μακεδονία" },
    { id: "eastern-macedonia", en: "E. Macedonia & Thrace", el: "Α. Μακεδονία & Θράκη" },
    { id: "central-greece", en: "Central Greece", el: "Στερεά Ελλάδα" },
    { id: "western-greece", en: "Western Greece", el: "Δυτική Ελλάδα" },
    { id: "epirus", en: "Epirus", el: "Ήπειρος" },
    { id: "mount-athos", en: "Mount Athos", el: "Άγιον Όρος" },
  ];

  const regions = [
    {
      id: "south-aegean",
      number: "1",
      color: "border-blue-400",
      bg: "bg-blue-50",
      badge: "bg-blue-100 text-blue-800",
      title: { en: "South Aegean (Cyclades & Dodecanese)", el: "Νότιο Αιγαίο (Κυκλάδες & Δωδεκάνησα)" },
      tagline: {
        en: "Best for iconic island-hopping and history",
        el: "Καλύτερο για εμβληματικό island hopping και ιστορία",
      },
      body: {
        en: "The South Aegean is the largest and most famous island region of Greece, covering two distinct island groups: the Cyclades and the Dodecanese. Together they offer some of the most iconic and diverse island experiences in the Mediterranean.\n\nThe Cyclades are what most people picture when they think of Greece — whitewashed villages, blue-domed churches, bright summer light and classic island-hopping routes. Santorini and Mykonos are the best-known islands, while Naxos, Paros and Milos offer a more balanced and often more affordable experience.\n\nThe Dodecanese, closer to the Turkish coast, bring a different character — medieval heritage (especially Rhodes), quieter beaches and a slightly more eastern Mediterranean atmosphere. Rhodes, Kos, Karpathos and Kalymnos each offer something distinct.",
        el: "Το Νότιο Αιγαίο είναι η μεγαλύτερη και πιο γνωστή νησιωτική περιοχή της Ελλάδας, καλύπτοντας δύο ξεχωριστά νησιωτικά συμπλέγματα: τις Κυκλάδες και τα Δωδεκάνησα.\n\nΟι Κυκλάδες είναι αυτό που φαντάζονται οι περισσότεροι όταν σκέφτονται την Ελλάδα — λευκά χωριά, γαλάζιοι τρούλοι, κλασικό island hopping. Η Σαντορίνη και η Μύκονος είναι τα πιο γνωστά, ενώ Νάξος, Πάρος και Μήλος προσφέρουν πιο ισορροπημένη εμπειρία.\n\nΤα Δωδεκάνησα, πιο κοντά στην τουρκική ακτή, έχουν διαφορετικό χαρακτήρα — μεσαιωνική κληρονομιά (ειδικά η Ρόδος), πιο ήσυχες παραλίες και μια πιο ανατολική μεσογειακή ατμόσφαιρα.",
      },
      bestFor: {
        en: "Island hopping, iconic scenery, history, beaches, couples, first-time visitors",
        el: "Island hopping, εμβληματικά τοπία, ιστορία, παραλίες, ζευγάρια, πρώτο ταξίδι",
      },
      topIslands: {
        en: "Santorini, Mykonos, Rhodes, Naxos, Paros, Kos, Milos, Karpathos",
        el: "Σαντορίνη, Μύκονος, Ρόδος, Νάξος, Πάρος, Κως, Μήλος, Κάρπαθος",
      },
      style: {
        en: "Scenic, sunny, varied, iconic to historic",
        el: "Σκηνικό, ηλιόλουστο, ποικίλο, εμβληματικό ως ιστορικό",
      },
      goodToKnow: {
        en: "The Cyclades and Dodecanese have different ferry connections. Combine them only if you have enough time — otherwise focus on one group.",
        el: "Οι Κυκλάδες και τα Δωδεκάνησα έχουν διαφορετικές συνδέσεις πλοίων. Συνδυάστε τα μόνο αν έχετε αρκετό χρόνο.",
      },
      links: [
        { href: "/destinations/santorini", en: "Santorini guide", el: "Οδηγός Σαντορίνης" },
        { href: "/destinations/mykonos", en: "Mykonos guide", el: "Οδηγός Μυκόνου" },
        { href: "/destinations/rhodes", en: "Rhodes guide", el: "Οδηγός Ρόδου" },
        { href: "/travel-info/first-time-in-greece", en: "Best Greek Islands for First-Time Visitors", el: "Καλύτερα Νησιά για Πρώτο Ταξίδι" },
      ],
    },
    {
      id: "ionian",
      number: "2",
      color: "border-green-400",
      bg: "bg-green-50",
      badge: "bg-green-100 text-green-800",
      title: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
      tagline: {
        en: "Best for greenery and beaches",
        el: "Καλύτερο για πράσινο και παραλίες",
      },
      body: {
        en: "The Ionian Islands offer a different side of Greece. Instead of the dry, bright, postcard-style look of the Cyclades, the Ionian region is greener, softer and often more relaxed. Known for beautiful beaches, lush landscapes, family-friendly holidays and a more varied mix of town life and nature.\n\nCorfu is one of the strongest all-round choices, while Kefalonia offers dramatic scenery and a more spacious feeling. Zakynthos is famous for iconic coastal views and beach-focused holidays. A strong match for families, couples and travelers who want beaches with a greener landscape.",
        el: "Τα Ιόνια Νησιά προσφέρουν μια διαφορετική πλευρά της Ελλάδας. Αντί για το ξηρό, φωτεινό τοπίο των Κυκλάδων, το Ιόνιο είναι πιο πράσινο, πιο ήπιο και συχνά πιο χαλαρό. Γνωστά για όμορφες παραλίες, πλούσια φύση και οικογενειακές διακοπές.\n\nΗ Κέρκυρα είναι εξαιρετική συνολική επιλογή, η Κεφαλονιά προσφέρει πιο δραματικά τοπία, ενώ η Ζάκυνθος ξεχωρίζει για τα εντυπωσιακά παράκτια τοπία. Ιδανικά για οικογένειες, ζευγάρια και ταξιδιώτες που θέλουν παραλίες μέσα σε πράσινο περιβάλλον.",
      },
      bestFor: {
        en: "Families, beach holidays, scenic drives, relaxed island trips",
        el: "Οικογένειες, παραθαλάσσιες διακοπές, scenic drives, χαλαρό island trip",
      },
      topIslands: {
        en: "Corfu, Kefalonia, Zakynthos",
        el: "Κέρκυρα, Κεφαλονιά, Ζάκυνθος",
      },
      style: {
        en: "Green, coastal, varied, relaxed",
        el: "Πράσινο, παραθαλάσσιο, ποικίλο, χαλαρό",
      },
      goodToKnow: {
        en: "Many Ionian islands are best enjoyed with a car, especially if you want to explore beaches and villages more freely.",
        el: "Πολλά νησιά του Ιονίου απολαμβάνονται περισσότερο με αυτοκίνητο, ειδικά για εξερεύνηση παραλιών και χωριών.",
      },
      links: [
        { href: "/destinations/corfu", en: "Corfu guide", el: "Οδηγός Κέρκυρας" },
        { href: "/destinations/kefalonia", en: "Kefalonia guide", el: "Οδηγός Κεφαλονιάς" },
        { href: "/travel-info/family-travel-in-greece", en: "Family Travel in Greece", el: "Οικογενειακές Διακοπές στην Ελλάδα" },
      ],
    },
    {
      id: "argo-saronic",
      number: "3",
      color: "border-amber-400",
      bg: "bg-amber-50",
      badge: "bg-amber-100 text-amber-800",
      title: { en: "Argo-Saronic Islands", el: "Αργοσαρωνικός" },
      tagline: {
        en: "Best for short breaks from Athens",
        el: "Καλύτερο για σύντομες αποδράσεις από Αθήνα",
      },
      body: {
        en: "The Argo-Saronic islands are some of the easiest islands to combine with Athens. They are ideal for travelers who want a short taste of island life without needing a complex ferry plan or domestic flight. Often chosen for weekend escapes, short summer breaks and elegant slower trips close to the mainland.\n\nHydra is especially popular for atmosphere and charm, while Spetses feels polished and stylish. Aegina and Poros can also work well for quick island additions to an Athens itinerary.",
        el: "Τα νησιά του Αργοσαρωνικού είναι από τις πιο εύκολες επιλογές για να τα συνδυάσει κανείς με την Αθήνα. Ιδανικά για ταξιδιώτες που θέλουν μια πρώτη γεύση νησιού χωρίς περίπλοκο πλάνο. Συχνά επιλέγονται για σύντομες αποδράσεις και κομψά, ήρεμα ταξίδια κοντά στην ηπειρωτική Ελλάδα.\n\nΗ Ύδρα ξεχωρίζει για την ατμόσφαιρα, ενώ οι Σπέτσες έχουν πιο κομψό χαρακτήρα. Η Αίγινα και ο Πόρος λειτουργούν καλά ως γρήγορες νησιωτικές προσθήκες σε ένα ταξίδι με βάση την Αθήνα.",
      },
      bestFor: {
        en: "Athens add-ons, short island trips, couples, no-rush travel",
        el: "Συνδυασμός με Αθήνα, σύντομο island trip, ζευγάρια, χαλαρό ταξίδι",
      },
      topIslands: {
        en: "Hydra, Spetses, Aegina, Poros",
        el: "Ύδρα, Σπέτσες, Αίγινα, Πόρος",
      },
      style: {
        en: "Convenient, elegant, close to Athens",
        el: "Εύκολο, κομψό, κοντά στην Αθήνα",
      },
      goodToKnow: {
        en: "These islands are not the best choice for a long beach holiday. They work better for atmosphere, harbor life and short scenic stays.",
        el: "Δεν είναι η καλύτερη επιλογή για πολυήμερες παραλιακές διακοπές. Ταιριάζουν περισσότερο σε ατμόσφαιρα και σύντομη γραφική διαμονή.",
      },
      links: [
        { href: "/destinations/aegina", en: "Aegina guide", el: "Οδηγός Αίγινας" },
        { href: "/destinations/hydra", en: "Hydra guide", el: "Οδηγός Ύδρας" },
        { href: "/travel-info/getting-around-greece", en: "Greek Islands Without a Car", el: "Ελληνικά Νησιά Χωρίς Αυτοκίνητο" },
      ],
    },
    {
      id: "north-aegean",
      number: "4",
      color: "border-purple-400",
      bg: "bg-purple-50",
      badge: "bg-purple-100 text-purple-800",
      title: { en: "North Aegean Islands", el: "Βόρειο Αιγαίο" },
      tagline: {
        en: "Best for authentic and slower travel",
        el: "Καλύτερο για αυθεντικό και πιο αργό ταξίδι",
      },
      body: {
        en: "The North Aegean offers a more local, slower and less commercial version of island Greece. This region appeals to travelers who want something more authentic, less polished and more connected to local culture, food and daily life. An excellent choice for return visitors or travelers who want to move away from the most obvious island routes.\n\nLesvos stands out as one of the most interesting islands in this group, combining food culture, villages, seaside life and a more grounded local rhythm.",
        el: "Το Βόρειο Αιγαίο προσφέρει μια πιο τοπική, πιο αργή και λιγότερο εμπορική εκδοχή της νησιωτικής Ελλάδας. Ταιριάζει σε ταξιδιώτες που αναζητούν κάτι πιο αυθεντικό και πιο συνδεδεμένο με την τοπική κουλτούρα. Εξαιρετική επιλογή για όσους έχουν ήδη ξαναέρθει στην Ελλάδα.\n\nΗ Λέσβος ξεχωρίζει ως ένα από τα πιο ενδιαφέροντα νησιά, συνδυάζοντας γαστρονομία, χωριά, παραθαλάσσια ζωή και έναν πιο γειωμένο τοπικό ρυθμό.",
      },
      bestFor: {
        en: "Authentic trips, slower travel, local food, return visitors",
        el: "Αυθεντικά ταξίδια, πιο αργό ρυθμό, τοπική γαστρονομία, ταξιδιώτες που επιστρέφουν",
      },
      topIslands: {
        en: "Lesvos and nearby North Aegean islands",
        el: "Λέσβος και κοντινά νησιά Βορείου Αιγαίου",
      },
      style: {
        en: "Traditional, local, slower, more cultural",
        el: "Παραδοσιακό, τοπικό, πιο αργό, πιο πολιτισμικό",
      },
      goodToKnow: {
        en: "This region is less about high-profile island-hopping and more about staying longer, exploring one island in depth and enjoying everyday Greek life.",
        el: "Η περιοχή δεν αφορά τόσο το κλασικό island hopping, αλλά τη βαθύτερη γνωριμία με ένα νησί και την καθημερινή ελληνική εμπειρία.",
      },
      links: [
        { href: "/destinations/lesvos", en: "Lesvos guide", el: "Οδηγός Λέσβου" },
        { href: "/travel-info/best-time-to-visit-greece", en: "Best Time to Visit Greece", el: "Καλύτερη Εποχή για Ελλάδα" },
      ],
    },
    {
      id: "crete",
      number: "5",
      color: "border-red-400",
      bg: "bg-red-50",
      badge: "bg-red-100 text-red-800",
      title: { en: "Crete", el: "Κρήτη" },
      tagline: {
        en: "Best for travelers who want everything in one destination",
        el: "Καλύτερο για ταξιδιώτες που θέλουν τα πάντα σε έναν προορισμό",
      },
      body: {
        en: "Crete deserves to be seen almost as a category of its own. It is not just another island stop, but a major destination with enough variety for a full holiday on its own. It combines beaches, food, archaeology, mountain villages, road-trip potential and different regional identities across the island.\n\nFor many travelers, Crete is one of the safest choices in Greece because it offers both depth and flexibility. You can make it a beach holiday, a food trip, a family escape or a more exploratory route through towns and landscapes. It works especially well for longer stays.",
        el: "Η Κρήτη αξίζει να αντιμετωπίζεται σχεδόν σαν ξεχωριστή κατηγορία. Δεν είναι απλώς άλλη μία στάση, αλλά ένας μεγάλος προορισμός που μπορεί να στηρίξει ολόκληρες διακοπές. Συνδυάζει παραλίες, φαγητό, αρχαιολογικούς χώρους, ορεινά χωριά και road trip χαρακτήρα.\n\nΓια πολλούς ταξιδιώτες, η Κρήτη είναι από τις πιο ασφαλείς και ολοκληρωμένες επιλογές. Μπορεί να γίνει ταξίδι παραλίας, γαστρονομικό ταξίδι, οικογενειακή απόδραση ή πιο εξερευνητική διαδρομή.",
      },
      bestFor: {
        en: "Longer holidays, families, food lovers, flexible itineraries",
        el: "Μεγαλύτερες διακοπές, οικογένειες, food lovers, ευέλικτο πρόγραμμα",
      },
      topIslands: {
        en: "Crete (multiple regions: Heraklion, Chania, Rethymno, Elounda)",
        el: "Κρήτη (πολλαπλές περιοχές: Ηράκλειο, Χανιά, Ρέθυμνο, Ελούντα)",
      },
      style: {
        en: "Big, diverse, cultural, beach-and-village combination",
        el: "Μεγάλη, ποικίλη, πολιτισμική, συνδυασμός παραλιών και χωριών",
      },
      goodToKnow: {
        en: "Crete is large enough that choosing the right base matters a lot. It rewards slower travel and region-based planning.",
        el: "Η Κρήτη είναι αρκετά μεγάλη ώστε η σωστή επιλογή βάσης να παίζει τεράστιο ρόλο. Αποδίδει περισσότερο με πιο αργό ρυθμό.",
      },
      links: [
        { href: "/destinations/crete", en: "Crete destination guide", el: "Οδηγός Κρήτης" },
        { href: "/travel-info/family-travel-in-greece", en: "Family Travel in Greece", el: "Οικογενειακές Διακοπές στην Ελλάδα" },
        { href: "/travel-info/7-and-10-days-in-greece", en: "10 Days in Greece", el: "10 Ημέρες στην Ελλάδα" },
      ],
    },
    {
      id: "sporades",
      number: "7",
      color: "border-teal-400",
      bg: "bg-teal-50",
      badge: "bg-teal-100 text-teal-800",
      title: { en: "Sporades & Thessaly", el: "Σποράδες & Θεσσαλία" },
      tagline: {
        en: "Best for Meteora, nature and softer island pace",
        el: "Καλύτερο για Μετέωρα, φύση και πιο ήπιο ρυθμό",
      },
      body: {
        en: "The Sporades and Thessaly form a connected travel region that combines mainland mountain drama with some of the greenest islands in Greece. Meteora — with its UNESCO-listed monasteries perched on towering rock pillars — is the region's most iconic sight and one of the most breathtaking landscapes in Europe.\n\nThe Sporades islands (Skiathos, Skopelos, Alonissos) are known for pine-forested hills, turquoise waters and a softer, less crowded island atmosphere than the Cyclades. Mount Pelion, according to Greek mythology, was the summer home of the gods — it combines mountain villages, forests and nearby beaches on the Pagasetic Gulf.",
        el: "Οι Σποράδες και η Θεσσαλία αποτελούν συνδεδεμένη ταξιδιωτική περιοχή που συνδυάζει ορεινό δράμα με τα πιο πράσινα νησιά της Ελλάδας. Τα Μετέωρα — με τα μοναστήρια UNESCO σε τεράστια βραχοσχήματα — είναι το πιο εμβληματικό αξιοθέατο.\n\nΟι Σποράδες (Σκιάθος, Σκόπελος, Αλόννησος) ξεχωρίζουν για δασωμένες πλαγιές, τιρκουάζ νερά και πιο ήπια ατμόσφαιρα. Το Πήλιο, σύμφωνα με τον μύθο, ήταν η καλοκαιρινή κατοικία των θεών.",
      },
      bestFor: {
        en: "Meteora, island nature, hiking, swimming, softer pace",
        el: "Μετέωρα, νησιωτική φύση, πεζοπορία, κολύμβηση, πιο ήρεμος ρυθμός",
      },
      topIslands: {
        en: "Meteora, Skiathos, Skopelos, Mount Pelion, Alonissos",
        el: "Μετέωρα, Σκιάθος, Σκόπελος, Πήλιο, Αλόννησος",
      },
      style: {
        en: "Green, lush, peaceful, scenic, mythological",
        el: "Πράσινο, καταπράσινο, ήσυχο, γραφικό, μυθολογικό",
      },
      goodToKnow: {
        en: "Meteora is best visited early morning. The Sporades are great in summer but also rewarding in spring and autumn. Pelion is beautiful year-round.",
        el: "Τα Μετέωρα είναι καλύτερα νωρίς το πρωί. Οι Σποράδες είναι καλές το καλοκαίρι αλλά και την άνοιξη και το φθινόπωρο. Το Πήλιο είναι όμορφο όλο τον χρόνο.",
      },
      links: [
        { href: "/destinations/skiathos", en: "Skiathos guide", el: "Οδηγός Σκιάθου" },
        { href: "/travel-info/best-time-to-visit-greece", en: "Best Time to Visit Greece", el: "Καλύτερη Εποχή για Ελλάδα" },
      ],
    },
    {
      id: "peloponnese",
      number: "8",
      color: "border-pink-400",
      bg: "bg-pink-50",
      badge: "bg-pink-100 text-pink-800",
      title: { en: "Peloponnese", el: "Πελοπόννησος" },
      tagline: {
        en: "Best for history, road trips and mainland Greece",
        el: "Καλύτερο για ιστορία, road trips και ηπειρωτική Ελλάδα",
      },
      body: {
        en: "The Peloponnese is the large peninsula that forms southern mainland Greece, connected to the rest of the country by the Isthmus of Corinth. It is not an island group, but it deserves a place on this map because it offers one of the richest travel experiences in Greece — ancient sites that rival the most famous in the country, dramatic mountain landscapes, a long and varied coastline, and some of the best food and wine in Greece.\n\nMycenae, Epidaurus, Olympia and Mystras are among the most important archaeological sites in all of Greece. Nafplio is the most romantic town on the mainland. Monemvasia is a medieval fortress town carved into a sea rock. The Mani Peninsula offers wild, untouched beauty. And the beaches of the western coast stretch for kilometres with hardly a soul in sight. The Peloponnese rewards road trips, history lovers, and travelers who want to experience Greek culture beyond the islands. It works especially well as a self-drive destination and as an alternative to island hopping.",
        el: "Η Πελοπόννησος είναι η μεγάλη χερσόνησος που σχηματίζει τη νότια ηπειρωτική Ελλάδα. Δεν είναι νησιωτικό σύμπλεγμα, αλλά αξίζει μια θέση σε αυτόν τον χάρτη γιατί προσφέρει μία από τις πιο πλούσιες ταξιδιωτικές εμπειρίες στην Ελλάδα — αρχαίους χώρους, δραματικά ορεινά τοπία, μεγάλη και ποικίλη ακτογραμμή και εξαιρετικό φαγητό και κρασί.\n\nΟι Μυκήνες, η Επίδαυρος, η Ολυμπία και ο Μυστράς είναι από τους σημαντικότερους αρχαιολογικούς χώρους. Το Ναύπλιο είναι η πιο ρομαντική πόλη της ηπειρωτικής Ελλάδας. Η Μονεμβασία είναι μεσαιωνική καστροπολιτεία. Η Μάνη προσφέρει άγρια ομορφιά. Η Πελοπόννησος ανταμείβει τους λάτρεις της ιστορίας, των road trips και της ελληνικής κουλτούρας πέρα από τα νησιά.",
      },
      bestFor: {
        en: "History lovers, road trips, archaeology, winter travel, food and wine",
        el: "Λάτρεις ιστορίας, road trips, αρχαιολογία, χειμερινό ταξίδι, φαγητό και κρασί",
      },
      topIslands: {
        en: "Nafplio, Monemvasia, Kalamata, ancient Olympia, Mani Peninsula, Corinth Canal",
        el: "Ναύπλιο, Μονεμβασία, Καλαμάτα, αρχαία Ολυμπία, Μάνη, Διώρυγα Κορίνθου",
      },
      style: {
        en: "Historic, scenic, self-drive, culturally rich, year-round",
        el: "Ιστορικό, γραφικό, road trip, πολιτισμικά πλούσιο, όλο τον χρόνο",
      },
      goodToKnow: {
        en: "A car is strongly recommended for the Peloponnese — public transport connects the main towns but misses the best villages, beaches and archaeological sites.",
        el: "Το αυτοκίνητο είναι απαραίτητο στην Πελοπόννησο — τα μέσα μαζικής μεταφοράς συνδέουν τις μεγάλες πόλεις αλλά χάνουν τα καλύτερα χωριά και τις παραλίες.",
      },
      links: [
        { href: "/destinations/nafplio", en: "Nafplio guide", el: "Οδηγός Ναυπλίου" },
        { href: "/destinations/monemvasia", en: "Monemvasia guide", el: "Οδηγός Μονεμβασίας" },
        { href: "/travel-info/getting-around-greece", en: "Getting Around Greece", el: "Πώς να Μετακινηθείτε στην Ελλάδα" },
        { href: "/travel-info/7-and-10-days-in-greece", en: "7 & 10 Days in Greece", el: "7 & 10 Ημέρες στην Ελλάδα" },
      ],
    },
    {
      id: "central-macedonia",
      number: "9",
      color: "border-teal-500",
      bg: "bg-teal-50",
      badge: "bg-teal-100 text-teal-800",
      title: { en: "Central Macedonia", el: "Κεντρική Μακεδονία" },
      tagline: {
        en: "Best for city culture & Halkidiki beaches",
        el: "Καλύτερο για πολιτιστική ζωή & παραλίες Χαλκιδικής",
      },
      body: {
        en: "Central Macedonia is the economic and cultural heart of northern Greece, anchored by Thessaloniki — the country's second-largest city and one of its most vibrant. Thessaloniki blends Byzantine heritage, Ottoman layers, a legendary food scene and a youthful university-town energy that makes it one of the most rewarding cities in Greece.\n\nBeyond the city, the Chalkidiki peninsula offers some of the best beach holidays in mainland Greece, with pine-fringed coastlines, turquoise waters and resort villages. This region also serves as a gateway to Mount Athos, the UNESCO-listed monastic republic on the eastern prong of Chalkidiki.",
        el: "Η Κεντρική Μακεδονία είναι το οικονομικό και πολιτιστικό κέντρο της βόρειας Ελλάδας, με βάση τη Θεσσαλονίκη — τη δεύτερη μεγαλύτερη πόλη της χώρας. Η Θεσσαλονίκη συνδυάζει Βυζαντινή κληρονομιά, Οθωμανικά στρώματα, θρυλική γαστρονομία και νεανική ενέργεια.\n\nΠέρα από την πόλη, η χερσόνησος της Χαλκιδικής προσφέρει κορυφαίες παραλιακές εμπειρίες στην ηπειρωτική Ελλάδα, με πεύκα, τιρκουάζ νερά και θεριστικά χωριά. Η περιοχή λειτουργεί επίσης ως πύλη προς το Άγιον Όρος.",
      },
      bestFor: {
        en: "City breaks, beach holidays, food, history, Chalkidiki resorts",
        el: "City breaks, παραλιακές διακοπές, φαγητό, ιστορία, θεριστικά Χαλκιδικής",
      },
      topIslands: {
        en: "Thessaloniki, Chalkidiki, Sithonia, Kassandra, Mount Athos",
        el: "Θεσσαλονίκη, Χαλκιδική, Σιθωνία, Κασσάνδρα, Άγιον Όρος",
      },
      style: {
        en: "Urban, cultural, coastal, historically layered",
        el: "Αστικό, πολιτιστικό, παραλιακό, ιστορικά στρωματοποιημένο",
      },
      goodToKnow: {
        en: "Thessaloniki is best explored on foot. Chalkidiki beaches are busiest in July–August. Each of the three 'legs' of Chalkidiki has a different character.",
        el: "Η Θεσσαλονίκη εξερευνιέται καλύτερα με τα πόδια. Οι παραλίες της Χαλκιδικής είναι πιο πολυσύχναστες τον Ιούλιο–Αύγουστο.",
      },
      links: [
        { href: "/destinations/thessaloniki", en: "Thessaloniki guide", el: "Οδηγός Θεσσαλονίκης" },
        { href: "/travel-info/best-time-to-visit-greece", en: "Best Time to Visit Greece", el: "Καλύτερη Εποχή για Ελλάδα" },
      ],
    },
    {
      id: "western-macedonia",
      number: "10",
      color: "border-indigo-500",
      bg: "bg-indigo-50",
      badge: "bg-indigo-100 text-indigo-800",
      title: { en: "Western Macedonia", el: "Δυτική Μακεδονία" },
      tagline: {
        en: "Best for lakes, mountains and winter sports",
        el: "Καλύτερο για λίμνες, βουνά και χειμερινά σπορ",
      },
      body: {
        en: "Western Macedonia is one of the most underrated regions in Greece. Far from the island tourism spotlight, it offers dramatic mountain scenery, pristine lakes and a deeply traditional way of life that feels untouched by mass tourism.\n\nKastoria, built around a beautiful lake and filled with Byzantine churches and traditional mansions, is one of the most picturesque towns in northern Greece. Florina is a gateway to winter sports and lake landscapes. The Prespa Lakes — shared with Albania and North Macedonia — are a biodiversity hotspot and one of the most peaceful natural areas in the country.",
        el: "Η Δυτική Μακεδονία είναι μία από τις πιο υποτιμημένες περιοχές της Ελλάδας. Μακριά από το προσκήνιο του νησιωτικού τουρισμού, προσφέρει δραματικά ορεινά τοπία, ακέραιες λίμνες και παραδοσιακό τρόπο ζωής.\n\nΗ Καστοριά, χτισμένη γύρω από μια όμορφη λίμνη, είναι από τις πιο εντυπωσιακές πόλεις της βόρειας Ελλάδας. Η Φλώρινα είναι πύλη για χειμερινά σπορ και λιμναία τοπία. Οι Πρέσπες αποτελούν hotspot βιοποικιλότητας.",
      },
      bestFor: {
        en: "Lake holidays, mountain scenery, winter sports, off-the-beaten-path",
        el: "Λιμναίες διακοπές, ορεινά τοπία, χειμερινά σπορ, εκτός δρομολογίου",
      },
      topIslands: {
        en: "Kastoria, Florina, Prespes Lakes, Edessa waterfalls",
        el: "Καστοριά, Φλώρινα, Λίμνες Πρεσπών, Καταρράκτες Έδεσσας",
      },
      style: {
        en: "Mountainous, traditional, peaceful, seasonal",
        el: "Ορεινό, παραδοσιακό, ήσυχο, εποχιακό",
      },
      goodToKnow: {
        en: "Best visited in autumn for colours, winter for snow sports or spring for wildflowers. Summer is also pleasant and crowd-free.",
        el: "Καλύτερα το φθινόπωρο για χρώματα, τον χειμώνα για χιονοσπορία ή την άνοιξη για άγρια λουλούδια.",
      },
      links: [
        { href: "/travel-info/best-time-to-visit-greece", en: "Best Time to Visit Greece", el: "Καλύτερη Εποχή για Ελλάδα" },
      ],
    },
    {
      id: "epirus",
      number: "11",
      color: "border-cyan-500",
      bg: "bg-cyan-50",
      badge: "bg-cyan-100 text-cyan-800",
      title: { en: "Epirus", el: "Ήπειρος" },
      tagline: {
        en: "Best for mountain villages and the Ionian coast",
        el: "Καλύτερο για ορεινά χωριά και Ιόνια ακτή",
      },
      body: {
        en: "Epirus is one of the most dramatically beautiful regions in Greece. It is defined by the Pindus mountain range, deep gorges, stone villages and a wilder, more isolated feeling than most of the country. For travelers who want real mountains, traditional architecture and fewer tourists, Epirus is exceptional.\n\nThe Zagori area is the highlight — a cluster of over 40 stone villages set in a landscape of rivers, forests and the famous Vikos Gorge, one of the deepest in the world. On the coast, Parga is a colorful seaside town that offers a gentler, Ionian-flavoured contrast to the mountain interior.",
        el: "Η Ήπειρος είναι μία από τις πιο δραματικά όμορφες περιοχές της Ελλάδας. Ορίζεται από τον Πίνδο, βαθιά φαράγγια, πέτρινα χωριά και πιο απομονωμένο χαρακτήρα.\n\nΗ περιοχή Ζαγορί είναι το αποκορύφωμα — ένα σύμπλεγμα πάνω από 40 πέτρινων χωριών. Στην ακτή, η Πάργα είναι πολύχρωμη παραθαλάσσια πόλη που προσφέρει έναν πιο ήπιο Ιόνιο χαρακτήρα.",
      },
      bestFor: {
        en: "Mountain villages, hiking, rafting, stone architecture, off-grid",
        el: "Ορεινά χωριά, πεζοπορία, ράφτινγκ, πέτρινη αρχιτεκτονική, απομόνωση",
      },
      topIslands: {
        en: "Zagori villages, Vikos Gorge, Parga, Ioannina, Metsovo",
        el: "Χωριά Ζαγορί, Φαράγγι Βίκου, Πάργα, Ιωάννινα, Μέτσοβο",
      },
      style: {
        en: "Mountainous, traditional, wild, dramatic",
        el: "Ορεινό, παραδοσιακό, άγριο, δραματικό",
      },
      goodToKnow: {
        en: "A car is essential for exploring Epirus. The mountain roads are scenic but slow. Ioannina is the main base for exploring the region.",
        el: "Το αυτοκίνητο είναι απαραίτητο. Οι ορεινοί δρόμοι είναι γραφικοί αλλά αργοί. Η Ιωάννινα είναι η βάση εξερεύνησης.",
      },
      links: [
        { href: "/destinations/parga", en: "Parga guide", el: "Οδηγός Πάργας" },
        { href: "/travel-info/best-time-to-visit-greece", en: "Best Time to Visit Greece", el: "Καλύτερη Εποχή για Ελλάδα" },
      ],
    },
    {
      id: "eastern-macedonia",
      number: "12",
      color: "border-emerald-500",
      bg: "bg-emerald-50",
      badge: "bg-emerald-100 text-emerald-800",
      title: { en: "Eastern Macedonia & Thrace", el: "Ανατολική Μακεδονία & Θράκη" },
      tagline: {
        en: "Best for pristine nature and border culture",
        el: "Καλύτερο για άγρια φύση και συνοριακό πολιτισμό",
      },
      body: {
        en: "Eastern Macedonia and Thrace is the most remote and least touristed region of mainland Greece. It stretches from Kavala to the Turkish and Bulgarian borders and offers a landscape shaped by multiple cultures, dense forests and a very different pace of travel.\n\nThis region rewards travelers who want to get well off the beaten path. Kavala is a beautiful port town and a good base. Alexandroupoli is the gateway to the Dadia Forest — one of the last refuges of rare raptors in Europe. The area has a distinctive crossroads identity, blending Greek, Turkish and Bulgarian influences in its food, architecture and local customs.",
        el: "Η Ανατολική Μακεδονία και η Θράκη είναι η πιο απομακρυσμένη και λιγότερο τουριστική περιοχή της ηπειρωτικής Ελλάδας. Από την Καβάλα μέχρι τα σύνορα με Τουρκία και Βουλγαρία.\n\nΗ περιοχή ανταμείβει ταξιδιώτες που θέλουν να απομακρυνθούν. Η Καβάλα είναι όμορφο λιμάνι. Η Αλεξανδρούπολη είναι πύλη προς το Δάσος Δαδίας — ένα από τα τελευταία καταφύγια σπάνιων αρπακτικών στην Ευρώπη.",
      },
      bestFor: {
        en: "Off-the-beaten-path, birdwatching, hot springs, cultural crossroads",
        el: "Εκτός δρομολογίου, birdwatching, ιαματικές πηγές, πολιτισμικός σταυρός δρόμων",
      },
      topIslands: {
        en: "Kavala, Alexandroupoli, Dadia Forest, Thassos (accessible from here)",
        el: "Καβάλα, Αλεξανδρούπολη, Δάσος Δαδίας, Θάσος",
      },
      style: {
        en: "Remote, multicultural, wild, authentic",
        el: "Απομακρυσμένο, πολυπολιτισμικό, άγριο, αυθεντικό",
      },
      goodToKnow: {
        en: "Few foreign tourists visit this region. It is best for travelers who want a truly different side of Greece with minimal tourism infrastructure.",
        el: "Λίγοι ξένοι τουρίστες επισκέπτονται αυτή την περιοχή. Ιδανικό για ταξιδιώτες που θέλουν μια πραγματικά διαφορετική πλευρά της Ελλάδας.",
      },
      links: [
        { href: "/destinations/thassos", en: "Thassos guide", el: "Οδηγός Θάσου" },
        { href: "/travel-info/best-time-to-visit-greece", en: "Best Time to Visit Greece", el: "Καλύτερη Εποχή για Ελλάδα" },
      ],
    },
    {
      id: "central-greece",
      number: "14",
      color: "border-violet-500",
      bg: "bg-violet-50",
      badge: "bg-violet-100 text-violet-800",
      title: { en: "Central Greece", el: "Στερεά Ελλάδα" },
      tagline: {
        en: "Best for Delphi and ancient sites",
        el: "Καλύτερο για Δελφούς και αρχαίους τόπους",
      },
      body: {
        en: "Central Greece is the geographical heart of the mainland and home to some of the most important ancient sites in the Western world. It is not a major tourism region in the island sense, but it offers extraordinary cultural depth and dramatic mountain landscapes.\n\nDelphi — the ancient sanctuary of Apollo and home of the famous Oracle — is one of the most significant archaeological sites in all of Europe. Nearby Arachova is a mountain village that has become a stylish year-round destination. The region also includes the dramatic mountain monastery of Hosios Loukas and the coastal town of Nafpaktos, gateway to the Peloponnese.",
        el: "Η Στερεά Ελλάδα είναι γεωγραφικά η καρδιά της ηπειρωτικής Ελλάδας και στεγάζει κάποιους από τους πιο σημαντικούς αρχαίους τόπους.\n\nΟι Δελφοί — το αρχαίο ιερό του Απόλλωνα — είναι ένα από τα πιο σημαντικά αρχαιολογικά μνημεία της Ευρώπης. Η Αράχοβα είναι ορεινό χωριά με στυλ. Η Ναύπακτος είναι η πύλη προς την Πελοπόννησο.",
      },
      bestFor: {
        en: "Archaeology, mountain monasteries, road trips, history",
        el: "Αρχαιολογία, ορεινά μοναστήρια, road trips, ιστορία",
      },
      topIslands: {
        en: "Delphi, Arachova, Nafpaktos, Hosios Loukas monastery",
        el: "Δελφοί, Αράχοβα, Ναύπακτος, Μονή Οσίου Λουκά",
      },
      style: {
        en: "Historic, cultural, mountainous, underexplored",
        el: "Ιστορικό, πολιτιστικό, ορεινό, ανεξερεύνητο",
      },
      goodToKnow: {
        en: "Combine Delphi with a visit to Arachova and Hosios Loukas in a single day trip from Athens. Nafpaktos works well as a stop between Athens and the Peloponnese.",
        el: "Συνδυάστε Δελφούς, Αράχοβα και Οσίο Λουκά σε μία εκδρομή από Αθήνα. Η Ναύπακτος ταιριάζει σαν στάση.",
      },
      links: [
        { href: "/destinations/delphi", en: "Delphi guide", el: "Οδηγός Δελφών" },
        { href: "/travel-info/best-time-to-visit-greece", en: "Best Time to Visit Greece", el: "Καλύτερη Εποχή για Ελλάδα" },
      ],
    },
    {
      id: "western-greece",
      number: "15",
      color: "border-orange-500",
      bg: "bg-orange-50",
      badge: "bg-orange-100 text-orange-800",
      title: { en: "Western Greece", el: "Δυτική Ελλάδα" },
      tagline: {
        en: "Best for Patras, ancient Olympia and wine country",
        el: "Καλύτερο για Πάτρα, αρχαία Ολυμπία και κρασί",
      },
      body: {
        en: "Western Greece stretches from the Gulf of Patras to the northern Peloponnese and includes some of the most historically important sites on the mainland. It is also one of the best wine-producing regions in the country.\n\nPatras is the major city and cultural capital of the region, known for its Carnival — one of the biggest in Europe — and its vibrant port-town energy. Ancient Olympia, birthplace of the Olympic Games, is located in the western Peloponnese and remains one of the most evocative archaeological sites in Greece. The mountain town of Kalavryta and the cave of lakes add natural beauty to the cultural richness.",
        el: "Η Δυτική Ελλάδα εκτείνεται από τον Κόλπο της Πάτρας μέχρι τη βόρεια Πελοπόννησο και περιλαμβάνει κάποιους από τους πιο ιστορικά σημαντικούς τόπους.\n\nΗ Πάτρα είναι πολιτιστική πρωτεύουσα, γνωστή για το Καρναβάλι της. Η αρχαία Ολυμπία, γενέτειρα των Ολυμπιακών Αγώνων, παραμένει ένα από τα πιο εντυπωσιακά αρχαιολογικά μνημεία.",
      },
      bestFor: {
        en: "Ancient Olympia, wine tours, Carnival, mountain escapes",
        el: "Αρχαία Ολυμπία, wine tours, Καρναβάλι, ορεινές αποδράσεις",
      },
      topIslands: {
        en: "Patras, Ancient Olympia, Kalavryta, Aigio, Rio-Antirio bridge",
        el: "Πάτρα, Αρχαία Ολυμπία, Καλάβρυτα, Αίγιο, Γέφυρα Ρίου-Αντιρρίου",
      },
      style: {
        en: "Historic, cultural, wine country, year-round",
        el: "Ιστορικό, πολιτιστικό, οινοπαραγωγικό, όλο τον χρόνο",
      },
      goodToKnow: {
        en: "The region is well connected by road from Athens. Patras has a ferry link to Italy, making it a useful stop for travelers continuing to Western Europe.",
        el: "Η περιοχή συνδέεται καλά οδικώς από Αθήνα. Η Πάτρα έχει σύνδεση πλοίου με Ιταλία.",
      },
      links: [
        { href: "/destinations/patras", en: "Patras guide", el: "Οδηγός Πάτρας" },
        { href: "/travel-info/getting-around-greece", en: "Getting Around Greece", el: "Πώς να Μετακινηθείτε στην Ελλάδα" },
      ],
    },
    {
      id: "mount-athos",
      number: "16",
      color: "border-slate-500",
      bg: "bg-slate-50",
      badge: "bg-slate-100 text-slate-800",
      title: { en: "Mount Athos", el: "Άγιον Όρος" },
      tagline: {
        en: "A monastic republic unlike anywhere else",
        el: "Μοναστική πολιτεία χωρίς αντίστοιχη",
      },
      body: {
        en: "Mount Athos is not a typical travel destination — it is an autonomous monastic state within Greece, home to 20 Eastern Orthodox monasteries and over 1,000 monks. It has been a centre of Orthodox Christian spirituality for over 1,000 years and remains one of the most unspoiled cultural landscapes in Europe.\n\nAccess is restricted: men can visit with a special permit (maximum 4 days), while women are not permitted to enter. Visitors arrive by boat from Ouranoupoli on the Sithonia peninsula. The experience is austere, quiet and deeply spiritual — a journey into a way of life that has barely changed in centuries.",
        el: "Το Άγιον Όρος δεν είναι τυπικός τουριστικός προορισμός — είναι αυτόνομη μοναστική πολιτεία, σπίτι 20 μονών και πάνω από 1.000 μοναχών. Είναι κέντρο Ορθόδοξης πνευματικότητας για πάνω από 1.000 χρόνια.\n\nΗ πρόσβαση περιορίζεται: άνδρες μπορούν να επισκεφθούν με ειδική άδεια (μέγιστο 4 ημέρες), ενώ γυναίκες δεν επιτρέπεται. Οι επισκέψεις γίνονται με βάρκα από την Ουρανούπολη.",
      },
      bestFor: {
        en: "Pilgrimage, hiking, monastic heritage, spiritual travel",
        el: "Προσκύνημα, πεζοπορία, μοναστική κληρονομιά, πνευματικό ταξίδι",
      },
      topIslands: {
        en: "20 monasteries, Karyes, Ouranoupoli boat departure",
        el: "20 μοναστήρια, Καρυές, αποβάθρα Ουρανούπολης",
      },
      style: {
        en: "Sacred, austere, timeless, restricted",
        el: "Ιερό, αυστηρό, χωρίς χρόνο, περιορισμένο",
      },
      goodToKnow: {
        en: "Men must apply for a diamonitirion (visitor permit) well in advance. No more than 4 days allowed. No women permitted. Bring supplies — facilities are minimal.",
        el: "Οι άνδρες πρέπει να υποβάλουν αίτηση για διαμονητήριο εκ των προτέρων. Μέγιστο 4 ημέρες. Δεν επιτρέπονται γυναίκες.",
      },
      links: [
        { href: "/destinations/thessaloniki", en: "Thessaloniki guide (nearest city)", el: "Οδηγός Θεσσαλονίκης (πλησιέστερη πόλη)" },
      ],
    },
  ];

  const relatedGuides = [
    { href: "/travel-info/first-time-in-greece", label: { en: "Best Greek Islands for First-Time Visitors", el: "Καλύτερα Νησιά για Πρώτο Ταξίδι" } },
    { href: "/travel-info/getting-around-greece", label: { en: "Greek Islands Without a Car", el: "Ελληνικά Νησιά Χωρίς Αυτοκίνητο" } },
    { href: "/travel-info/7-and-10-days-in-greece", label: { en: "7 & 10 Days in Greece", el: "7 & 10 Ημέρες στην Ελλάδα" } },
    { href: "/travel-info/best-time-to-visit-greece", label: { en: "Best Time to Visit Greece", el: "Καλύτερη Εποχή για Ελλάδα" } },
    { href: "/travel-info/family-travel-in-greece", label: { en: "Family Travel in Greece", el: "Οικογενειακές Διακοπές στην Ελλάδα" } },
    { href: "/travel-info/santorini-vs-mykonos", label: { en: "Santorini vs Mykonos", el: "Σαντορίνη vs Μύκονος" } },
  ];

  const faqs = [
    {
      q: {
        en: "Which Greek islands are best for first-time visitors?",
        el: "Ποια ελληνικά νησιά είναι καλύτερα για πρώτο ταξίδι;",
      },
      a: {
        en: "The Cyclades and Crete are usually the easiest starting point, depending on whether you want iconic scenery and island hopping or a longer all-round holiday.",
        el: "Οι Κυκλάδες και η Κρήτη είναι συνήθως η πιο εύκολη αφετηρία, ανάλογα με το αν θέλεις εμβληματικά τοπία και island hopping ή πιο ολοκληρωμένες διακοπές.",
      },
    },
    {
      q: {
        en: "Which Greek island group is best for families?",
        el: "Ποιο νησιωτικό σύμπλεγμα είναι καλύτερο για οικογένειες;",
      },
      a: {
        en: "The Ionian Islands and Crete are often strong choices for families thanks to their variety, beaches and easier all-round holiday style.",
        el: "Το Ιόνιο και η Κρήτη είναι συνήθως πολύ καλές επιλογές για οικογένειες, χάρη στην ποικιλία, τις παραλίες και τον πιο εύκολο χαρακτήρα.",
      },
    },
    {
      q: {
        en: "Which Greek islands are easiest from Athens?",
        el: "Ποια νησιά είναι πιο εύκολα από την Αθήνα;",
      },
      a: {
        en: "The Argo-Saronic islands are some of the easiest island escapes from Athens and work well for shorter stays and weekend trips.",
        el: "Τα νησιά του Αργοσαρωνικού είναι από τις πιο εύκολες αποδράσεις από την Αθήνα και ταιριάζουν πολύ σε σύντομο ταξίδι.",
      },
    },
    {
      q: {
        en: "Which Greek island group feels most authentic?",
        el: "Ποια νησιωτική περιοχή δείχνει πιο αυθεντική;",
      },
      a: {
        en: "The North Aegean often feels more local, slower and less commercial than the most famous island routes, making it a good choice for return visitors.",
        el: "Το Βόρειο Αιγαίο έχει συχνά πιο τοπικό, πιο αργό και λιγότερο εμπορικό χαρακτήρα, ιδανικό για ταξιδιώτες που επιστρέφουν.",
      },
    },
    {
      q: {
        en: "Is the Peloponnese worth visiting instead of the islands?",
        el: "Αξίζει η Πελοπόννησος αντί για τα νησιά;",
      },
      a: {
        en: "Yes — especially if you love history, road trips and Greek food. The Peloponnese offers some of the most important archaeological sites in Greece (Mycenae, Epidaurus, Olympia, Mystras), beautiful towns (Nafplio, Monemvasia), excellent wine regions and a coastline that rivals the islands. It works best as a self-drive destination and is an excellent choice for spring, autumn or winter travel when the islands are quieter.",
        el: "Ναι — ειδικά αν αγαπάτε την ιστορία, τα road trips και το ελληνικό φαγητό. Η Πελοπόννησος προσφέρει μερικούς από τους σημαντικότερους αρχαιολογικούς χώρους, όμορφες πόλεις, εξαιρετικές οινοπαραγωγικές περιοχές και ακτογραμμή που ανταγωνίζεται τα νησιά.",
      },
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-transparent text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center pt-20 border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/greece-islands-map-guide.webp"
            alt="Greece islands map guide background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/25" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center flex flex-col items-center">
          <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-800 backdrop-blur-md mb-6">
            {t.eyebrow[lang]}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-xl">
            {t.h1[lang]}
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-white/90 font-light leading-relaxed mb-6">
            {t.intro1[lang]}
          </p>
          <p className="max-w-2xl text-base text-white/80 leading-relaxed">
            {t.intro2[lang]}
          </p>
        </div>
      </section>

      {/* ── SUMMARY CARDS ── */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <div
              key={card.label.en}
              className={`rounded-2xl border bg-gradient-to-br ${card.color} p-6 transition hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <p className={`text-xs font-bold uppercase tracking-widest ${card.textColor} mb-1`}>
                {card.label[lang]}
              </p>
              <p className="text-lg font-bold text-slate-900">{card.value[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="mx-auto max-w-7xl px-6 pb-6">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700 mb-2">
            {lang === "en" ? "Visual Overview" : "Οπτική Επισκόπηση"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {t.mapTitle[lang]}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 leading-relaxed">
            {t.mapSub[lang]}
          </p>
        </div>

        <InteractiveMap lang={lang} withLang={withLang} onRegionClick={handleRegionClick} />
      </section>

      {/* ── JUMP NAVIGATION ── */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-wrap items-center gap-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl px-6 py-4 shadow-md">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mr-2">
            {t.jumpTo[lang]}
          </span>
          {jumpLinks.map((jl) => (
            <a
              key={jl.id}
              href={`#${jl.id}`}
              className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-800 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
            >
              {jl[lang]}
            </a>
          ))}
        </div>
      </section>

      {/* ── REGION SECTIONS ── */}
      <section className="mx-auto max-w-5xl px-6 py-8 space-y-16">
        {regions.map((r) => (
          <article
            key={r.id}
            id={r.id}
            className={`scroll-mt-24 rounded-[2rem] border-l-4 ${r.color} ${r.bg} border border-slate-200 shadow-xl overflow-hidden`}
          >
            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center text-base font-black text-slate-700 shadow">
                  {r.number}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    {r.title[lang]}
                  </h2>
                  <span className={`inline-block mt-1 rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-widest ${r.badge}`}>
                    {r.tagline[lang]}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="prose prose-slate max-w-none mb-8">
                {r.body[lang].split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>

              {/* Info Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {[
                  { label: { en: "Best for", el: "Κατάλληλο για" }, value: r.bestFor },
                  { label: { en: "Top Islands", el: "Κορυφαία Νησιά" }, value: r.topIslands },
                  { label: { en: "Travel Style", el: "Ταξιδιωτικό Ύφος" }, value: r.style },
                  { label: { en: "Good to Know", el: "Καλό να Γνωρίζεις" }, value: r.goodToKnow },
                ].map((info) => (
                  <div key={info.label.en} className="bg-white/70 rounded-xl p-4 border border-slate-200">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                      {info.label[lang]}
                    </p>
                    <p className="text-sm font-medium text-slate-700 leading-snug">
                      {info.value[lang]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Links */}
              {r.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {r.links.map((link) => (
                    <Link
                      key={link.href}
                      href={withLang(link.href)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm"
                    >
                      {link[lang]} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* ── PLANNING SECTION ── */}
      <section className="relative z-10 border-y border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
            {t.planTitle[lang]}
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
            {t.planText[lang]}
          </p>
        </div>
      </section>

      {/* ── RELATED GUIDES ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700 mb-2">
            {lang === "en" ? "Keep Planning" : "Συνέχισε τον Σχεδιασμό"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            {t.relatedTitle[lang]}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={withLang(guide.href)}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl hover:border-indigo-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-black text-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                →
              </div>
              <span className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors leading-snug">
                {guide.label[lang]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {t.faqTitle[lang]}
          </h2>
        </div>
        <div className="grid gap-6">
          {faqs.map((faq) => (
            <article
              key={faq.q.en}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-colors hover:bg-slate-50"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-800 transition-colors mb-3">
                {faq.q[lang]}
              </h3>
              <p className="text-slate-500 leading-relaxed">{faq.a[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── BACK LINK ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 flex justify-center">
        <Link
          href={withLang("/travel-info")}
          className="group relative inline-flex overflow-hidden rounded-full border border-slate-300 bg-slate-50 px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl transition-all hover:scale-105 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white"
        >
          {t.back[lang]}
        </Link>
      </section>
    </main>
    </>
  );
}
