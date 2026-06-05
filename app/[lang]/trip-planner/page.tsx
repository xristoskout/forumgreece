import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TripPlannerClient from "../../../components/trip-planner-client";
import SiteHeader from "../../../components/site-header";
import { destinations } from "../../../lib/destinations-data";
import { SITE_URL } from "../../../lib/content";
import { isLang } from "../../../lib/locale";

type Props = {
  params: Promise<{ lang: string }>;
};

const SITE_NAME = "GoGreeceNow";

const seo = {
  en: {
    title: "AI Trip Planner for Greece — Build Your Perfect Itinerary | GoGreeceNow",
    description:
      "Plan your Greece trip with AI. Select destinations, budget, and interests to get a personalized day-by-day itinerary with hotel, food, and tour suggestions.",
    path: "/en/trip-planner",
    ogTitle: "AI Trip Planner for Greece — GoGreeceNow",
    ogDescription:
      "Build your perfect Greece itinerary in seconds. Free AI-powered trip planner with personalized day-by-day schedules.",
  },
  el: {
    title: "AI Σχεδιαστής Ταξιδιού για Ελλάδα — Δημιούργησε το Τέλειο Πρόγραμμα | GoGreeceNow",
    description:
      "Σχεδίασε το ταξίδι σου στην Ελλάδα με AI. Επίλεξε προορισμούς, προϋπολογισμό και ενδιαφέροντα για ένα εξατομικευμένο πρόγραμμα μέρα-μέρα.",
    path: "/el/trip-planner",
    ogTitle: "AI Σχεδιαστής Ταξιδιού για Ελλάδα — GoGreeceNow",
    ogDescription:
      "Φτιάξε το τέλειο πρόγραμμα για Ελλάδα σε δευτερόλεπτα. Δωρεάν AI σχεδιαστής ταξιδιού με εξατομικευμένο ημερήσιο πρόγραμμα.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};

  const s = seo[lang as keyof typeof seo];

  return {
    metadataBase: new URL(SITE_URL),
    title: s.title,
    description: s.description,
    alternates: { canonical: s.path },
    openGraph: {
      type: "website",
      url: s.path,
      title: s.ogTitle,
      description: s.ogDescription,
      siteName: SITE_NAME,
      images: [{ url: "/images/hero-greece.webp", width: 1600, height: 900, alt: "AI Trip Planner Greece" }],
    },
    twitter: {
      card: "summary_large_image",
      title: s.ogTitle,
      description: s.ogDescription,
      images: ["/images/hero-greece.webp"],
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "el" }];
}

export default async function TripPlannerPage({ params }: Props) {
  const { lang } = await params;

  if (!isLang(lang)) notFound();

  return (
    <main>
      <SiteHeader />
      <TripPlannerClient destinations={destinations} lang={lang as "en" | "el"} />
    </main>
  );
}
