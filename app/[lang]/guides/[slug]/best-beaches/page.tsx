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

  const canonicalUrl = `${SITE_URL}/${lang}/guides/${slug}/best-beaches`;

  return {
    title: lang === "el"
      ? `Καλύτερες Παραλίες στο ${dest.name} | GoGreeceNow`
      : `Best Beaches in ${dest.name} | GoGreeceNow`,
    description: lang === "el"
      ? `Ανακάλυψε τις καλύτερες παραλίες στο ${dest.name}. Οδηγός με τις ωραιότερες ακτές, οργανωμένες και απόμερες.`
      : `Discover the best beaches in ${dest.name}. Complete guide with the finest sandy shores, organized beaches and hidden coves.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: lang === "el" ? `Καλύτερες Παραλίες στο ${dest.name}` : `Best Beaches in ${dest.name}`,
      url: canonicalUrl,
      type: "website",
      images: [{ url: dest.image, width: 1200, height: 630, alt: dest.name }],
    },
  };
}

const MARKDOWN_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderBeachText(text: string, lang: string): string {
  const withLinks = text.replace(MARKDOWN_LINK, (_m: string, label: string, href: string) => {
    const url = href.startsWith("/") ? `/${lang}${href}` : href;
    return `<a href="${url}" class="text-indigo-600 underline hover:text-indigo-800 font-medium">${label}</a>`;
  });
  return withLinks.split("\n\n").map((p: string) => p.trim()).filter(Boolean).map((p: string) => `<p class="mb-3 last:mb-0">${p}</p>`).join("\n");
}

export default async function BestBeachesPage({ params }: Props) {
  const { lang: rawLang, slug } = await params;
  const lang = (rawLang === "el" ? "el" : "en") as Lang;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) notFound();

  let beachSection = null;
  try {
    const sections = destinationSections[slug];
    if (sections) beachSection = sections.find((s: any) =>
      (s.title?.en || "").toLowerCase().includes("beach")
      || (s.title?.el || "").toLowerCase().includes("παραλ")
    );
  } catch (e) {
    console.error('Failed to load sections for', slug, e);
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-white">

      <div className="container mx-auto px-6 py-32">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href={`/${lang}`} className="hover:text-indigo-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}/destinations/${slug}`} className="hover:text-indigo-600">{dest.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">
            {lang === "el" ? "Καλύτερες Παραλίες" : "Best Beaches"}
          </span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <span className="mb-4 inline-flex rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">
            {dest.region[lang]}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-800 tracking-tight">
            {lang === "el" ? `Καλύτερες Παραλίες στο ${dest.name}` : `Best Beaches in ${dest.name}`}
          </h1>

          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              href={`/${lang}/guides/${slug}/things-to-do`}
              className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-indigo-300 hover:text-indigo-700 transition-all"
            >
              {lang === "el" ? "Πράγματα να κάνεις" : "Things to Do"} →
            </Link>
            <Link
              href={`/${lang}/destinations/${slug}`}
              className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-indigo-300 hover:text-indigo-700 transition-all"
            >
              {lang === "el" ? `${dest.name} — Ταξιδιωτικός Οδηγός` : `${dest.name} Travel Guide`}
            </Link>
            <Link
              href={`/${lang}/hotels/${slug}`}
              className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-indigo-300 hover:text-indigo-700 transition-all"
            >
              {lang === "el" ? `Πού να μείνεις στο ${dest.name}` : `Where to Stay in ${dest.name}`}
            </Link>
          </div>

          {beachSection ? (
            <div className="space-y-6">
              {(beachSection as any).items?.map((item: any, idx: number) => (
                <article key={idx} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{item.title?.[lang] || item.title?.en}</h2>
                  <div className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: renderBeachText(item.text?.[lang] || item.text?.en || "", lang) }} />
                </article>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-lg">
              {lang === "el"
                ? "Δεν υπάρχει ακόμα οδηγός παραλιών για αυτόν τον προορισμό."
                : "Beach guide coming soon for this destination."}
            </p>
          )}
        </div>
      </div>
    </main>
    </>
  );
}
