import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "../../../../components/site-header";
import { destinations } from "../../../../lib/destinations-data";
import { hotels } from "../../../../lib/hotels-data";

type Lang = "en" | "el";

type Props = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.gogreecenow.com";

function isLang(value: string): value is Lang {
  return value === "en" || value === "el";
}

function withLang(path: string, lang: Lang) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalized}`;
}

const seo = {
  en: {
    title: "Greece Travel Planning Hub: Transport, Timing & Tips",
    description:
      "Plan a trip to Greece with practical guides for transport, timing, destinations, stays and everyday travel decisions.",
    path: "/en/collections/greece-travel-planning",
  },
  el: {
    title: "Hub Οργάνωσης Ταξιδιού στην Ελλάδα",
    description:
      "Οργάνωσε ταξίδι στην Ελλάδα με πρακτικούς οδηγούς για μετακίνηση, εποχές, προορισμούς, διαμονή και καθημερινές αποφάσεις.",
    path: "/el/collections/greece-travel-planning",
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
        en: "/en/collections/greece-travel-planning",
        el: "/el/collections/greece-travel-planning",
        "x-default": "/en/collections/greece-travel-planning",
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
          alt: "Greece travel planning collection",
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

export default async function GreeceTravelPlanningCollectionPage({
  params,
}: Props) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  const featuredDestinations = destinations.slice(0, 3);
  const featuredHotels = hotels.slice(0, 3);

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
            {lang === "en"
              ? "Greece Travel Planning Hub"
              : "Hub Οργάνωσης Ταξιδιού στην Ελλάδα"}
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {lang === "en"
              ? "Practical Greece trip planning, from first idea to final booking"
              : "Πρακτική οργάνωση ταξιδιού στην Ελλάδα, από την πρώτη ιδέα μέχρι την τελική κράτηση"}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">
            {lang === "en"
              ? "Use this editorial hub to organize the key parts of a Greece trip: where to go, where to stay and how to move through the planning process with less friction."
              : "Χρησιμοποίησε αυτό το editorial hub για να οργανώσεις τα βασικά κομμάτια ενός ταξιδιού στην Ελλάδα: πού να πας, πού να μείνεις και πώς να προχωρήσεις την οργάνωση με λιγότερη τριβή."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={withLang("/travel-info", lang)}
              className="bg-indigo-600 border-none px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-500"
            >
              {lang === "en"
                ? "Open travel info hub →"
                : "Άνοιγμα hub ταξιδιωτικών πληροφοριών →"}
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
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="border border-slate-200 bg-white backdrop-blur-md p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              {lang === "en"
                ? "Step 1: Start with the practical basics"
                : "Βήμα 1: Ξεκίνα από τα πρακτικά βασικά"}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Answer transport, timing and everyday travel questions first so the rest of the planning becomes easier."
                : "Απάντησε πρώτα στα ερωτήματα για μετακίνηση, εποχές και καθημερινή οργάνωση ώστε τα υπόλοιπα βήματα να γίνουν πιο εύκολα."}
            </p>

            <Link
              href={withLang("/travel-info", lang)}
              className="mt-5 inline-block text-sm font-semibold text-indigo-700"
            >
              {lang === "en"
                ? "Read Greece travel info →"
                : "Δες ταξιδιωτικές πληροφορίες για την Ελλάδα →"}
            </Link>
          </article>

          <article className="border border-slate-200 bg-white backdrop-blur-md p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              {lang === "en"
                ? "Step 2: Choose the right destination"
                : "Βήμα 2: Διάλεξε τον σωστό προορισμό"}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Browse all destination guides — islands, cities, and coastal escapes — to find the perfect match for your trip style, budget, and available days."
                : "Δες όλους τους ταξιδιωτικούς οδηγούς — νησιά, πόλεις και παραθαλάσσιες αποδράσεις — για να βρεις τον ιδανικό προορισμό για το στυλ, το budget και τις μέρες σου."}
            </p>

            <Link
              href={withLang("/destinations", lang)}
              className="mt-5 inline-block text-sm font-semibold text-indigo-700"
            >
              {lang === "en"
                ? "Browse all destination guides →"
                : "Δες όλους τους οδηγούς προορισμών →"}
            </Link>
          </article>

          <article className="border border-slate-200 bg-white backdrop-blur-md p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              {lang === "en"
                ? "Step 3: Add stays and experiences"
                : "Βήμα 3: Πρόσθεσε διαμονή και εμπειρίες"}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Once the destination is clear, browse hotel guides to find the perfect stay — from city boutique hotels to beach resorts and village guesthouses."
                : "Μόλις ξεκαθαρίσει ο προορισμός, δες τους οδηγούς ξενοδοχείων για να βρεις την ιδανική διαμονή — από boutique ξενοδοχεία πόλης έως παραθαλάσσια resorts και παραδοσιακούς ξενώνες."}
            </p>

            <Link
              href={withLang("/hotels", lang)}
              className="mt-5 inline-block text-sm font-semibold text-indigo-700"
            >
              {lang === "en"
                ? "Browse all hotel guides →"
                : "Δες όλους τους οδηγούς ξενοδοχείων →"}
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-white backdrop-blur-md py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
              {lang === "en"
                ? "Destination Planning"
                : "Οργάνωση ανά Προορισμό"}
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "Start with a destination guide"
                : "Ξεκίνα με έναν οδηγό προορισμού"}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredDestinations.map((item) => (
              <article
                key={item.slug}
                className="border border-slate-200 bg-white hover:bg-slate-50 p-6"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.blurb[lang]}
                </p>

                <Link
                  href={withLang(`/destinations/${item.slug}`, lang)}
                  className="mt-5 inline-block text-sm font-semibold text-indigo-700"
                >
                  {lang === "en"
                    ? `Read the ${item.name} travel guide →`
                    : `Δες τον οδηγό για ${item.name} →`}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
            {lang === "en" ? "Where to Stay" : "Πού να Μείνεις"}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Continue with stay options"
              : "Συνέχισε με επιλογές διαμονής"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredHotels.map((item) => (
            <article
              key={item.slug}
              className="border border-slate-200 bg-white backdrop-blur-md p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.name}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-500">
                {item.place}
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.info[lang]}
              </p>

              <Link
                href={withLang(`/hotels/${item.slug}`, lang)}
                className="mt-5 inline-block text-sm font-semibold text-indigo-700"
              >
                {lang === "en"
                  ? `Where to stay in ${item.place} →`
                  : `Πού να μείνεις στο ${item.place} →`}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}