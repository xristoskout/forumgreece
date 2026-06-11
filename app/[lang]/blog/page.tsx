import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../../components/site-header";
import { blogPosts, SITE_URL, Lang, isLang } from "../../../lib/content";
import { withLang } from "../../../lib/locale";

type Props = {
  params: Promise<{ lang: string }>;
};

const seo = {
  en: {
    title: "Greek Travel Blog | GoGreeceNow",
    description: "Read the latest travel tips, destination guides, and local insights for planning your trip to Greece.",
    path: "/en/blog",
  },
  el: {
    title: "Ταξιδιωτικό Blog | GoGreeceNow",
    description: "Διάβασε τα τελευταία ταξιδιωτικά tips, οδηγούς προορισμών και τοπικές συμβουλές για το ταξίδι σου στην Ελλάδα.",
    path: "/el/blog",
  },
} satisfies Record<Lang, { title: string; description: string; path: string }>;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "el" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isLang(lang)) return {};

  return {
    metadataBase: new URL(SITE_URL),
    title: seo[lang].title,
    description: seo[lang].description,
    alternates: {
      canonical: seo[lang].path,
      languages: {
        en: "/en/blog",
        el: "/el/blog",
        "x-default": "/en/blog",
      },
    },
    openGraph: {
      type: "website",
      url: seo[lang].path,
      title: seo[lang].title,
      description: seo[lang].description,
      siteName: "GoGreeceNow",
      images: [
        {
          url: "/images/hero-greece.webp",
          width: 1600,
          height: 900,
          alt: "Greek Travel Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo[lang].title,
      description: seo[lang].description,
      images: ["/images/hero-greece.webp"],
    },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
  const featured = sorted.filter((p) => p.featured).slice(0, 3);
  const rest = sorted.filter((p) => !featured.includes(p));

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-transparent text-slate-900">

      <section className="border-b border-slate-200 bg-white backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
            {lang === "en" ? "Travel Blog" : "Ταξιδιωτικό Blog"}
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {lang === "en"
              ? "Greek Travel Tips, Guides & Local Insights"
              : "Ελληνικά Ταξιδιωτικά Tips, Οδηγοί & Τοπικές Συμβουλές"}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">
            {lang === "en"
              ? "Practical advice, destination guides, and honest recommendations to help you plan a better trip to Greece."
              : "Πρακτικές συμβουλές, οδηγοί προορισμών και ειλικρινείς προτάσεις για να οργανώσεις καλύτερα το ταξίδι σου στην Ελλάδα."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
              {lang === "en" ? "Latest Posts" : "Τελευταία Άρθρα"}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "Read our latest travel articles"
                : "Διάβασε τα τελευταία ταξιδιωτικά άρθρα"}
            </h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col h-full overflow-hidden rounded-xl border border-slate-200 bg-white backdrop-blur-md shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 shrink-0">
                <Image src={post.image} alt={post.title[lang]} fill className="object-cover" />
                <span className="absolute top-3 left-3 rounded-md bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  {post.category[lang]}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs text-slate-400 font-medium">
                  {post.publishedDate} — {post.author}
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {post.title[lang]}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 flex-1">
                  {post.excerpt[lang]}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={withLang(`/blog/${post.slug}`, lang)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:gap-3 transition-all"
                >
                  {lang === "en" ? "Read more" : "Διάβασε περισσότερα"} <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          ))}

          {rest.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col h-full overflow-hidden rounded-xl border border-slate-200 bg-white backdrop-blur-md shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44 shrink-0">
                <Image src={post.image} alt={post.title[lang]} fill className="object-cover" />
                <span className="absolute top-3 left-3 rounded-md bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  {post.category[lang]}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <p className="text-xs text-slate-400 font-medium">
                  {post.publishedDate}
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {post.title[lang]}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500 flex-1 line-clamp-2">
                  {post.excerpt[lang]}
                </p>

                <Link
                  href={withLang(`/blog/${post.slug}`, lang)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:gap-3 transition-all"
                >
                  {lang === "en" ? "Read more" : "Διάβασε περισσότερα"} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white backdrop-blur-md py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3">
          <article className="border border-slate-200 bg-white hover:bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "en" ? "Plan your trip" : "Οργάνωσε το ταξίδι σου"}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Use our destination guides and travel info pages to plan every detail of your Greece trip."
                : "Χρησιμοποίησε τους οδηγούς προορισμών και τις ταξιδιωτικές πληροφορίες για να οργανώσεις κάθε λεπτομέρεια του ταξιδιού σου."}
            </p>
            <Link
              href={withLang("/destinations", lang)}
              className="mt-5 inline-block text-sm font-semibold text-indigo-700"
            >
              {lang === "en" ? "Explore destinations →" : "Δες προορισμούς →"}
            </Link>
          </article>

          <article className="border border-slate-200 bg-white hover:bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "en" ? "Find the best hotels" : "Βρες τα καλύτερα ξενοδοχεία"}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Curated hotel guides with honest recommendations for every Greek destination."
                : "Επιλεγμένοι οδηγοί ξενοδοχείων με ειλικρινείς προτάσεις για κάθε ελληνικό προορισμό."}
            </p>
            <Link
              href={withLang("/hotels", lang)}
              className="mt-5 inline-block text-sm font-semibold text-indigo-700"
            >
              {lang === "en" ? "Browse hotels →" : "Δες ξενοδοχεία →"}
            </Link>
          </article>

          <article className="border border-slate-200 bg-white hover:bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "en" ? "Book a tour" : "Κάνε κράτηση εκδρομής"}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Discover local tours, boat trips, and authentic experiences across Greece."
                : "Ανακάλυψε τοπικές εκδρομές, boat trips και αυθεντικές εμπειρίες σε όλη την Ελλάδα."}
            </p>
            <Link
              href={withLang("/tours/all", lang)}
              className="mt-5 inline-block text-sm font-semibold text-indigo-700"
            >
              {lang === "en" ? "See tours →" : "Δες εκδρομές →"}
            </Link>
          </article>
        </div>
      </section>
    </main>
    </>
  );
}
