import type { Category, Localized } from "./types";

export const siteBrand = "GoGreeceNow";

export const siteBrandLine: Localized = {
  en: "Your trusted guide to authentic Greece",
  el: "Ο αξιόπιστος οδηγός σου για την αυθεντική Ελλάδα",
};

export const SITE_URL = "https://www.gogreecenow.com";

export const categories: Category[] = [
  {
    title: { en: "Destinations", el: "Προορισμοί" },
    description: {
      en: "Travel guides for islands, mainland escapes, famous beaches and beautiful Greek towns.",
      el: "Ταξιδιωτικοί οδηγοί για νησιά, ηπειρωτικές αποδράσεις, διάσημες παραλίες και όμορφες ελληνικές πόλεις.",
    },
    emoji: "🏝️",
    href: "/destinations",
  },
  {
    title: { en: "About Greece", el: "About Greece" },
    description: {
      en: "Useful tips about ferries, airports, best time to visit, transport and practical planning.",
      el: "Χρήσιμες πληροφορίες για πλοία, αεροδρόμια, καλύτερη εποχή, μετακινήσεις και πρακτικό προγραμματισμό.",
    },
    emoji: "🧭",
    href: "/travel-info",
  },
  {
    title: { en: "Stays", el: "Διαμονή" },
    description: {
      en: "Curated stays, boutique hotels, family resorts and beautiful places to stay across Greece.",
      el: "Επιλεγμένα καταλύματα, boutique ξενοδοχεία, family resorts και όμορφα μέρη για διαμονή σε όλη την Ελλάδα.",
    },
    emoji: "🏨",
    href: "/hotels",
  },
  {
    title: { en: "Food & Wine", el: "Φαγητό & Κρασί" },
    description: {
      en: "Restaurants, tavernas, bars and local flavors that help visitors experience Greece authentically.",
      el: "Εστιατόρια, ταβέρνες, bars και τοπικές γεύσεις που βοηθούν τον επισκέπτη να ζήσει αυθεντικά την Ελλάδα.",
    },
    emoji: "🍷",
    href: "/collections/greece-food-and-drink",
  },
  {
    title: { en: "Blog", el: "Blog" },
    description: {
      en: "Travel guides, tips and stories from Greece — written by locals.",
      el: "Ταξιδιωτικοί οδηγοί, συμβουλές και ιστορίες από την Ελλάδα.",
    },
    emoji: "📝",
    href: "/blog",
  },
  {
    title: { en: "Compare", el: "Σύγκρισε" },
    description: {
      en: "Find your perfect match in seconds.",
      el: "Βρες τον ιδανικό προορισμό σε δευτερόλεπτα.",
    },
    emoji: "⚖️",
    href: "/travel-tools",
    featured: true,
  },
  {
    title: { en: "Plan My Trip", el: "Σχεδίασε το Ταξίδι μου" },
    description: {
      en: "Free trip planning help from AI.",
      el: "Δωρεάν βοήθεια από AI.",
    },
    emoji: "🤖",
    href: "/trip-planner",
    featured: true,
  },
];
