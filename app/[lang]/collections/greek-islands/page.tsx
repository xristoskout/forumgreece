import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "../../../../components/site-header";
import { destinations } from "../../../../lib/content";

type Lang = "en" | "el";

type Props = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://gogreecenow.com";

function isLang(value: string): value is Lang {
  return value === "en" || value === "el";
}

function withLang(path: string, lang: Lang) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalized}`;
}

const seo = {
  en: {
    title: "Greek Islands Guide: Best Islands, Ideas & Planning | GoGreeceNow",
    description:
      "Explore Greek island guides, beach ideas, travel inspiration and practical tips for planning island trips across Greece.",
    path: "/en/collections/greek-islands",
  },
  el: {
    title: "Οδηγός για Ελληνικά Νησιά, Ιδέες & Οργάνωση | GoGreeceNow",
    description:
      "Ανακάλυψε οδηγούς για ελληνικά νησιά, ιδέες για παραλίες και χρήσιμες συμβουλές για να οργανώσεις island hopping στην Ελλάδα.",
    path: "/el/collections/greek-islands",
  },
} satisfies Record<
  Lang,
  { title: string; description: string; path: string }
>;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "el" }];
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isLang(lang)) return {};

  return {
    metadataBase: new URL(SITE_URL),
    title: seo[lang].title,
    description: seo[lang].description,
    alternates: {
      canonical: seo[lang].path,
      languages: {
        en: "/en/collections/greek-islands",
        el: "/el/collections/greek-islands",
        "x-default": "/en/collections/greek-islands",
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
          url: "/images/hero-greece.jpg",
          width: 1600,
          height: 900,
          alt: "Greek islands collection",
        },
      ],
    },
  };
}

export default async function GreekIslandsCollectionPage({
  params,
}: Props) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  const featuredDestinations = destinations.slice(0, 6);

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
            {lang === "en"
              ? "Greek Islands Collection"
              : "Συλλογή για Ελληνικά Νησιά"}
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {lang === "en"
              ? "Greek island guides for beaches, scenery and trip planning"
              : "Οδηγοί για ελληνικά νησιά με παραλίες, τοπία και πρακτική οργάνωση ταξιδιού"}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">
            {lang === "en"
              ? "Use this hub to discover Greek islands, compare destination styles and move from inspiration into practical planning for your next trip."
              : "Χρησιμοποίησε αυτό το hub για να ανακαλύψεις ελληνικά νησιά, να συγκρίνεις διαφορετικά travel styles και να περάσεις από την έμπνευση στην πρακτική οργάνωση του επόμενου ταξιδιού σου."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={withLang("/travel-info", lang)}
              className="bg-indigo-600 border-none px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-500"
            >
              {lang === "en"
                ? "Read Greece travel planning guides →"
                : "Δες οδηγούς οργάνωσης ταξιδιού →"}
            </Link>

            <Link
              href={withLang("/", lang)}
              className="border border-slate-200 bg-white backdrop-blur-md px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white hover:bg-slate-50"
            >
              {lang === "en"
                ? "Back to homepage →"
                : "Επιστροφή στην αρχική →"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
              {lang === "en"
                ? "Featured Island Guides"
                : "Προτεινόμενοι Οδηγοί Νησιών"}
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "Browse destination pages for Greek islands"
                : "Δες σελίδες προορισμών για ελληνικά νησιά"}
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            {lang === "en"
              ? "These destination guides help travelers compare atmosphere, scenery and highlights before choosing the right island."
              : "Αυτοί οι οδηγοί προορισμών βοηθούν τον ταξιδιώτη να συγκρίνει ατμόσφαιρα, τοπία και highlights πριν διαλέξει το σωστό νησί."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredDestinations.map((item) => (
            <article
              key={item.slug}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white backdrop-blur-md shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-sky-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {lang === "en" ? "Island Guide" : "Οδηγός Νησιού"}
                  </span>

                  <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    {item.region[lang]}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.blurb[lang]}
                </p>

                <Link
                  href={withLang(`/destinations/${item.slug}`, lang)}
                  className="mt-6 inline-flex bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  {lang === "en"
                    ? `${item.name} travel guide →`
                    : `Οδηγός για ${item.name} →`}
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
              {lang === "en"
                ? "How to plan island travel"
                : "Πώς να οργανώσεις island travel"}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Start with practical Greece travel info before choosing ferries, flights and the right season for your island trip."
                : "Ξεκίνα με τις πρακτικές ταξιδιωτικές πληροφορίες για την Ελλάδα πριν επιλέξεις πλοία, πτήσεις και τη σωστή εποχή για το νησιωτικό σου ταξίδι."}
            </p>

            <Link
              href={withLang("/travel-info", lang)}
              className="mt-5 inline-block text-sm font-semibold text-indigo-700"
            >
              {lang === "en"
                ? "Go to travel info →"
                : "Πήγαινε στις ταξιδιωτικές πληροφορίες →"}
            </Link>
          </article>

          <article className="border border-slate-200 bg-white hover:bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "en"
                ? "Add tours and experiences"
                : "Πρόσθεσε εκδρομές και εμπειρίες"}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Once you choose an island, add boat trips, local tours and activity ideas to shape the rest of your itinerary."
                : "Αφού επιλέξεις νησί, πρόσθεσε boat trips, τοπικές εκδρομές και ιδέες δραστηριοτήτων για να ολοκληρώσεις το itinerary σου."}
            </p>

            <Link
              href={withLang("/collections/greece-tours-and-experiences", lang)}
              className="mt-5 inline-block text-sm font-semibold text-indigo-700"
            >
              {lang === "en"
                ? "Explore tours hub →"
                : "Δες το hub εκδρομών →"}
            </Link>
          </article>

          <article className="border border-slate-200 bg-white hover:bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "en"
                ? "Taste local island food"
                : "Γνώρισε τις τοπικές γεύσεις των νησιών"}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Food and drink can change the feel of a destination, so use local cuisine guides to enrich your island planning."
                : "Το φαγητό και το ποτό αλλάζουν την αίσθηση ενός προορισμού, γι’ αυτό χρησιμοποίησε γαστρονομικούς οδηγούς για να εμπλουτίσεις την οργάνωση του island trip σου."}
            </p>

            <Link
              href={withLang("/collections/greece-food-and-drink", lang)}
              className="mt-5 inline-block text-sm font-semibold text-indigo-700"
            >
              {lang === "en"
                ? "Explore food hub →"
                : "Δες το hub γαστρονομίας →"}
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}