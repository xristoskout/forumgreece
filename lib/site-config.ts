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
    title: { en: "Travel Info", el: "Travel Info" },
    description: {
      en: "Useful tips about ferries, airports, best time to visit, transport and practical planning.",
      el: "Χρήσιμες πληροφορίες για πλοία, αεροδρόμια, καλύτερη εποχή, μετακινήσεις και πρακτικό προγραμματισμό.",
    },
    emoji: "🧭",
    href: "/travel-info",
  },
  {
    title: { en: "Hotels", el: "Ξενοδοχεία" },
    description: {
      en: "Curated stays, boutique hotels, family resorts and beautiful places to stay across Greece.",
      el: "Επιλεγμένα καταλύματα, boutique ξενοδοχεία, family resorts και όμορφα μέρη για διαμονή σε όλη την Ελλάδα.",
    },
    emoji: "🏨",
    href: "/hotels",
  },
  {
    title: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
    description: {
      en: "Restaurants, tavernas, bars and local flavors that help visitors experience Greece authentically.",
      el: "Εστιατόρια, ταβέρνες, bars και τοπικές γεύσεις που βοηθούν τον επισκέπτη να ζήσει αυθεντικά την Ελλάδα.",
    },
    emoji: "🍷",
    href: "/collections/greece-food-and-drink",
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
      en: "Free trip planning help from Greek local experts.",
      el: "Δωρεάν βοήθεια από Έλληνες ειδικούς.",
    },
    emoji: "🤖",
    href: "/trip-planner",
    featured: true,
  },
];
