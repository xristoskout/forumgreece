import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../../../components/site-header";
import { tours, SITE_URL } from "../../../../lib/content";
import { Lang, isLang, withLang } from "../../../../lib/useLocale";

type Props = {
  params: Promise<{ lang: string }>;
};

const seo = {
  en: {
    title: "Things to Do in Greece: Tours, Boat Trips & Local Experiences | GoGreeceNow",
    description:
      "Browse Greece tours, boat trips and local experiences to add memorable activities and day trips to your itinerary.",
    path: "/en/collections/greece-tours-and-experiences",
  },
  el: {
    title: "Τι να Κάνεις στην Ελλάδα: Εκδρομές, Boat Trips & Τοπικές Εμπειρίες | GoGreeceNow",
    description:
      "Δες εκδρομές, boat trips και τοπικές εμπειρίες στην Ελλάδα για να εμπλουτίσεις το ταξίδι σου με δραστηριότητες και day trips.",
    path: "/el/collections/greece-tours-and-experiences",
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
        en: "/en/collections/greece-tours-and-experiences",
        el: "/el/collections/greece-tours-and-experiences",
        "x-default": "/en/collections/greece-tours-and-experiences",
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
          alt: "Greece tours and experiences collection",
        },
      ],
    },
  };
}

export default async function GreeceToursAndExperiencesCollectionPage({
  params,
}: Props) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  const featuredTours = tours.slice(0, 6);

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
            {lang === "en"
              ? "Greece Tours & Experiences Hub"
              : "Hub Εκδρομών & Εμπειριών στην Ελλάδα"}
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {lang === "en"
              ? "Boat trips, local tours and memorable experiences across Greece"
              : "Boat trips, τοπικές εκδρομές και ξεχωριστές εμπειρίες σε όλη την Ελλάδα"}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">
            {lang === "en"
              ? "Use this hub to discover tours and activities that add more depth to a Greece trip, from island experiences to easy day-trip ideas."
              : "Χρησιμοποίησε αυτό το hub για να ανακαλύψεις εκδρομές και δραστηριότητες που δίνουν περισσότερο βάθος σε ένα ταξίδι στην Ελλάδα, από island experiences μέχρι εύκολες ιδέες για day trips."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={withLang("/collections/greek-islands", lang)}
              className="bg-indigo-600 border-none px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-500"
            >
              {lang === "en"
                ? "Explore Greek island guides →"
                : "Δες οδηγούς για ελληνικά νησιά →"}
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
                ? "Featured Tours"
                : "Προτεινόμενες Εκδρομές"}
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "Browse tours and activity guides"
                : "Δες οδηγούς για εκδρομές και δραστηριότητες"}
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            {lang === "en"
              ? "These pages help travelers move beyond sightseeing and add more memorable experiences to their Greece itinerary."
              : "Αυτές οι σελίδες βοηθούν τον ταξιδιώτη να πάει πέρα από το απλό sightseeing και να προσθέσει πιο δυνατές εμπειρίες στο itinerary του στην Ελλάδα."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredTours.map((item) => (
            <article
              key={item.slug}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white backdrop-blur-md shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52">
                <Image src={item.image} alt={item.title[lang]} fill className="object-cover" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
                    {lang === "en"
                      ? "Experience Guide"
                      : "Οδηγός Εμπειριών"}
                  </span>

                  <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    {item.place}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {item.title[lang]}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.info[lang]}
                </p>

                <Link
                  href={withLang(`/tours/${item.slug}`, lang)}
                  className="mt-6 inline-flex bg-cyan-700 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-800"
                >
                  {lang === "en"
                    ? `${item.place} tours guide →`
                    : `Οδηγός εκδρομών για ${item.place} →`}
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
                ? "Plan the destination first"
                : "Οργάνωσε πρώτα τον προορισμό"}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Tours work better when they match the destination, the length of your trip and the kind of experience you want."
                : "Οι εκδρομές λειτουργούν καλύτερα όταν ταιριάζουν με τον προορισμό, τη διάρκεια του ταξιδιού και το είδος εμπειρίας που θέλεις."}
            </p>

            <Link
              href={withLang("/collections/greek-islands", lang)}
              className="mt-5 inline-block text-sm font-semibold text-indigo-700"
            >
              {lang === "en"
                ? "Go to Greek islands hub →"
                : "Πήγαινε στο hub για ελληνικά νησιά →"}
            </Link>
          </article>

          <article className="border border-slate-200 bg-white hover:bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "en"
                ? "Use travel info before booking"
                : "Δες travel info πριν κλείσεις"}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Transport timing and practical travel questions can affect which activities make sense for your itinerary."
                : "Το timing των μετακινήσεων και τα πρακτικά ταξιδιωτικά ερωτήματα επηρεάζουν το ποιες δραστηριότητες ταιριάζουν τελικά στο itinerary σου."}
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

          <article className="border border-slate-200 bg-white hover:bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "en"
                ? "Pair experiences with local food"
                : "Συνδύασε εμπειρίες με τοπικές γεύσεις"}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Food and drink often shape the memory of a trip, so combine activities with destination-based cuisine ideas."
                : "Το φαγητό και το ποτό συχνά καθορίζουν την ανάμνηση ενός ταξιδιού, οπότε συνδύασε δραστηριότητες με γαστρονομικές ιδέες ανά προορισμό."}
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
