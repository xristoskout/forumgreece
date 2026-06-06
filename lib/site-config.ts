import type { Category, Localized } from "./types";

export const siteBrand = "GoGreeceNow";

export const siteBrandLine: Localized = {
  en: "Greece travel guide, destinations and local experiences",
  el: "Ταξιδιωτικός οδηγός Ελλάδας, προορισμοί και τοπικές εμπειρίες",
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
    title: { en: "Compare", el: "Σύγκριση" },
    description: {
      en: "Compare destinations side by side and find your perfect match.",
      el: "Σύγκρινε προορισμούς και βρες τον ιδανικό για εσένα.",
    },
    emoji: "⚖️",
    href: "/travel-tools",
    featured: true,
  },
  {
    title: { en: "Trip Planner", el: "Σχεδιαστής" },
    description: {
      en: "AI-powered itinerary builder for your perfect Greece trip.",
      el: "AI προγραμματισμός για το τέλειο ταξίδι στην Ελλάδα.",
    },
    emoji: "🤖",
    href: "/trip-planner",
    featured: true,
  },
];
