import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, SITE_URL, type Lang } from "../../../../../lib/content";
import { destinationSections } from "../../../../../lib/destination-sections";
import SiteHeader from "../../../../../components/site-header";

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = (rawLang === "el" ? "el" : "en") as Lang;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return { title: "Not Found" };

  const canonicalUrl = `${SITE_URL}/${lang}/guides/${slug}/things-to-do`;

  return {
    title: lang === "el"
      ? `Πράγματα να Κάνεις στο ${dest.name} | GoGreeceNow`
      : `Things to Do in ${dest.name} | GoGreeceNow`,
    description: lang === "el"
      ? `Τα καλύτερα πράγματα να κάνεις στο ${dest.name}. Αξιοθέατα, δραστηριότητες, εκδρομές και εμπειρίες για το ταξίδι σου.`
      : `Best things to do in ${dest.name}. Top attractions, activities, day trips and experiences for your trip.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: lang === "el" ? `Πράγματα να Κάνεις στο ${dest.name}` : `Things to Do in ${dest.name}`,
      url: canonicalUrl,
      type: "website",
      images: [{ url: dest.image, width: 1200, height: 630, alt: dest.name }],
    },
  };
}

const THINGS_KEYWORDS_EN = ["things to do", "top attractions", "top experiences", "attractions"];
const THINGS_KEYWORDS_EL = ["πράγματα να κάν", "αξιοθέατ", "κορυφαία αξιοθέατα", "εμπειρίες"];
const WHY_VISIT_KEYWORDS_EN = ["why visit"];

function findThingsSection(sections: any[]) {
  const exact = sections.find((s: any) => {
    const en = (s.title?.en || "").toLowerCase();
    const el = (s.title?.el || "").toLowerCase();
    return THINGS_KEYWORDS_EN.some((k) => en.includes(k))
        || THINGS_KEYWORDS_EL.some((k) => el.includes(k));
  });
  if (exact) return exact;

  const whyVisit = sections.find((s: any) => {
    const en = (s.title?.en || "").toLowerCase();
    return WHY_VISIT_KEYWORDS_EN.some((k) => en.includes(k));
  });
  if (whyVisit) return whyVisit;

  const numbered = sections.find((s: any) => s.layout === "numbered");
  return numbered;
}

export default async function ThingsToDoPage({ params }: Props) {
  const { lang: rawLang, slug } = await params;
  const lang = (rawLang === "el" ? "el" : "en") as Lang;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) notFound();

  let thingsSection = null;
  try {
    const sections = destinationSections[slug];
    if (sections) thingsSection = findThingsSection(sections);
  } catch (e) {
    console.error('Failed to load sections for', slug, e);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-white">
      <SiteHeader />

      <div className="container mx-auto px-6 py-32">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href={`/${lang}`} className="hover:text-amber-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}/destinations/${slug}`} className="hover:text-amber-700">{dest.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">
            {lang === "el" ? "Πράγματα να Κάνεις" : "Things to Do"}
          </span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <span className="mb-4 inline-flex rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            {dest.region[lang]}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-amber-500 to-amber-800 tracking-tight">
            {lang === "el" ? `Πράγματα να Κάνεις στο ${dest.name}` : `Things to Do in ${dest.name}`}
          </h1>

          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              href={`/${lang}/guides/${slug}/best-beaches`}
              className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-amber-300 hover:text-amber-700 transition-all"
            >
              {lang === "el" ? "Καλύτερες Παραλίες" : "Best Beaches"} →
            </Link>
            <Link
              href={`/${lang}/destinations/${slug}`}
              className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-amber-300 hover:text-amber-700 transition-all"
            >
              {lang === "el" ? `${dest.name} — Ταξιδιωτικός Οδηγός` : `${dest.name} Travel Guide`}
            </Link>
            <Link
              href={`/${lang}/hotels/${slug}`}
              className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-amber-300 hover:text-amber-700 transition-all"
            >
              {lang === "el" ? `Πού να μείνεις στο ${dest.name}` : `Where to Stay in ${dest.name}`}
            </Link>
          </div>

          {thingsSection ? (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">{thingsSection.title?.[lang] || thingsSection.title?.en}</h2>
              {(thingsSection as any).items?.map((item: any, idx: number) => (
                <article key={idx} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  {thingsSection.layout === "numbered" && (
                    <span className="mb-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 text-sm font-bold">
                      {idx + 1}
                    </span>
                  )}
                  {item.title && (
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title?.[lang] || item.title?.en}</h3>
                  )}
                  {item.text && (
                    <p className="text-slate-600 leading-relaxed">{item.text?.[lang] || item.text?.en}</p>
                  )}
                  {item.content && (
                    <p className="text-slate-600 leading-relaxed">{item.content?.[lang] || item.content?.en}</p>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-lg">
              {lang === "el"
                ? "Δεν υπάρχει ακόμα οδηγός δραστηριοτήτων για αυτόν τον προορισμό."
                : "Things to do guide coming soon for this destination."}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
