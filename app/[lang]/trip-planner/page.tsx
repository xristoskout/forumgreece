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
    title: "Plan My Greece Trip with AI — Free Itinerary Builder | GoGreeceNow",
    description:
      "Plan your Greece trip with AI. Free, no login required. Select destinations, budget, and interests to get a personalized day-by-day itinerary with hotel, food, and tour suggestions. Share your plan with a link.",
    path: "/en/trip-planner",
    ogTitle: "Plan My Greece Trip with AI — Free & No Login | GoGreeceNow",
    ogDescription:
      "Plan my Greece trip with AI. Free, no sign-up. Get a personalized day-by-day itinerary in seconds. Share your perfect Greece plan with friends.",
  },
  el: {
    title: "Σχεδίασε το Ταξίδι σου στην Ελλάδα με AI — Δωρεάν | GoGreeceNow",
    description:
      "Σχεδίασε το ταξίδι σου στην Ελλάδα με AI. Δωρεάν, χωρίς εγγραφή. Επίλεξε προορισμούς, προϋπολογισμό και ενδιαφέροντα για εξατομικευμένο πρόγραμμα μέρα-μέρα. Μοιράσου το πρόγραμμά σου με link.",
    path: "/el/trip-planner",
    ogTitle: "Σχεδίασε το Ταξίδι σου στην Ελλάδα με AI — Δωρεάν | GoGreeceNow",
    ogDescription:
      "Σχεδίασε το τέλειο ταξίδι στην Ελλάδα με AI. Δωρεάν, χωρίς login. Εξατομικευμένο πρόγραμμα μέρα-μέρα σε δευτερόλεπτα.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};

  const s = seo[lang as keyof typeof seo];

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: s.title },
    description: s.description,
    alternates: { canonical: s.path },
    openGraph: {
      type: "website",
      url: s.path,
      title: s.ogTitle,
      description: s.ogDescription,
      siteName: SITE_NAME,
      images: [{ url: "/images/ai-trip-planner.webp", width: 1600, height: 900, alt: "AI Trip Planner Greece" }],
    },
    twitter: {
      card: "summary_large_image",
      title: s.ogTitle,
      description: s.ogDescription,
      images: ["/images/ai-trip-planner.webp"],
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
    <>
      <SiteHeader />
      <main>
      <TripPlannerClient destinations={[...destinations].sort((a, b) => a.name.localeCompare(b.name))} lang={lang as "en" | "el"} />
    </main>
    </>
  );
}
