import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../../components/site-header";
import {
  getHomeCollectionHub,
  homeCollectionHubSlugs,
} from "../../../../lib/home-collection-hubs";
import type { Lang } from "../../../../lib/content";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

const SITE_URL = "https://www.gogreecenow.com";

function isLang(value: string): value is Lang {
  return value === "en" || value === "el";
}

function stripLocale(path: string) {
  const stripped = path.replace(/^\/(en|el)(?=\/|$)/, "");
  return stripped || "/";
}

function withLang(path: string, lang: Lang) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const cleanPath = stripLocale(normalized);

  if (cleanPath === "/") {
    return `/${lang}`;
  }

  return `/${lang}${cleanPath}`;
}

export function generateStaticParams() {
  return homeCollectionHubSlugs.flatMap((slug) => [
    { lang: "en", slug },
    { lang: "el", slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isLang(lang)) {
    return {};
  }

  const hub = getHomeCollectionHub(slug);

  if (!hub) {
    return {};
  }

  const path = `/${lang}/collections/${slug}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: hub.metaTitle[lang],
    description: hub.metaDescription[lang],
    alternates: {
      canonical: path,
      languages: {
        en: `/en/collections/${slug}`,
        el: `/el/collections/${slug}`,
        "x-default": `/en/collections/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "GoGreeceNow",
      title: hub.metaTitle[lang],
      description: hub.metaDescription[lang],
      locale: lang === "el" ? "el_GR" : "en_US",
      images: [
        {
          url: "/images/hero-greece.jpg",
          width: 1600,
          height: 900,
          alt: hub.title[lang],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: hub.metaTitle[lang],
      description: hub.metaDescription[lang],
      images: ["/images/hero-greece.jpg"],
    },
  };
}

export default async function CollectionHubPage({ params }: Props) {
  const { lang, slug } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  const hub = getHomeCollectionHub(slug);

  if (!hub) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-500">
          <nav className="flex flex-wrap items-center gap-2">
            <Link href={withLang("/", lang)} className="hover:text-slate-900">
              {lang === "en" ? "Home" : "Αρχική"}
            </Link>
            <span>/</span>
            <span>{lang === "en" ? "Collections" : "Συλλογές"}</span>
            <span>/</span>
            <span className="text-slate-900">{hub.title[lang]}</span>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white backdrop-blur-md">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/hero-greece.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
            {hub.eyebrow[lang]}
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            {hub.title[lang]}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {hub.description[lang]}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={withLang("/travel-info", lang)}
              className="bg-indigo-600 border-none px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-500"
            >
              {lang === "en"
                ? "Read Greece travel planning guides →"
                : "Δες οδηγούς οργάνωσης ταξιδιού στην Ελλάδα →"}
            </Link>

            <Link
              href={withLang("/", lang)}
              className="border border-slate-200 bg-white backdrop-blur-md px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white hover:bg-slate-50"
            >
              {lang === "en" ? "Back to homepage →" : "Επιστροφή στην αρχική →"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {lang === "en" ? "Why this hub matters" : "Γιατί αξίζει αυτό το hub"}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {hub.intro[lang]}
            </p>
          </div>

          <aside className="border border-slate-200 bg-white hover:bg-slate-50 p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {lang === "en" ? "On this page" : "Σε αυτή τη σελίδα"}
            </h2>

            <div className="mt-5 space-y-3">
              {hub.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block border border-slate-200 bg-white backdrop-blur-md px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-indigo-200 hover:text-indigo-800"
                >
                  {section.title[lang]}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-6">
          {hub.sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {section.title[lang]}
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
                {section.body[lang]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              {lang === "en" ? "Related pages" : "Σχετικές σελίδες"}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "Browse the next pages in this topic"
                : "Δες τα επόμενα pages αυτής της θεματικής"}
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            {lang === "en"
              ? "Use these pages to keep moving from broad inspiration into practical trip planning."
              : "Χρησιμοποίησε αυτές τις σελίδες για να περάσεις από τη γενική έμπνευση στην πρακτική οργάνωση του ταξιδιού σου."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hub.cards.map((card) => (
            <Link
              key={`${card.href}-${card.title.en}`}
              href={withLang(card.href, lang)}
              className="group border border-slate-200 bg-white backdrop-blur-md p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {card.title[lang]}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {card.description[lang]}
              </p>
              <span className="mt-5 inline-block text-sm font-semibold text-indigo-700 transition group-hover:text-indigo-200">
                {lang === "en" ? "Open guide →" : "Άνοιγμα οδηγού →"}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}