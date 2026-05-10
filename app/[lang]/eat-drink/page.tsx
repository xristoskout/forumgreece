import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../../components/site-header";
import { food } from "../../../lib/food-data";

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
    title: "Eat & Drink in Greece: Food Guides, Local Taverns & Regional Dishes | GoGreeceNow",
    description:
      "Explore Greek food guides, regional dishes and local drinks to add more flavor to your Greece trip planning.",
    path: "/en/eat-drink",
  },
  el: {
    title: "Φαγητό & Ποτό στην Ελλάδα: Γαστρονομικοί Οδηγοί, Τοπικές Ταβέρνες & Περιφερειακά Πιάτα | GoGreeceNow",
    description:
      "Ανακάλυψε οδηγούς ελληνικής γαστρονομίας, τοπικά πιάτα και ποτά για να δώσεις περισσότερο χαρακτήρα στο ταξίδι σου στην Ελλάδα.",
    path: "/el/eat-drink",
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
        en: "/en/eat-drink",
        el: "/el/eat-drink",
        "x-default": "/en/eat-drink",
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
          alt: "Greek food and drink hub",
        },
      ],
    },
  };
}

export default async function EatDrinkPage({ params }: Props) {
  const { lang } = await params;

  if (!isLang(lang)) {
    return null;
  }

  const featuredFood = food.slice(0, 6);

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
            {lang === "en" ? "Greek Food & Drink Hub" : "Hub Ελληνικής Γαστρονομίας & Ποτού"}
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {lang === "en"
              ? "Regional dishes, local flavors and food guides across Greece"
              : "Τοπικά πιάτα, γεύσεις και γαστρονομικοί οδηγοί από όλη την Ελλάδα"}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">
            {lang === "en"
              ? "Use this hub to discover Greek food and drink ideas that can shape the feel of a trip, from regional specialties to destination-based food inspiration."
              : "Χρησιμοποίησε αυτό το hub για να ανακαλύψεις ιδέες γύρω από το ελληνικό φαγητό και ποτό που μπορούν να αλλάξουν την αίσθηση ενός ταξιδιού, από τοπικές σπεσιαλιτέ μέχρι γαστρονομική έμπνευση ανά προορισμό."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={withLang("/collections/greek-islands", lang)}
              className="bg-orange-500 border-none px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-orange-600"
            >
              {lang === "en" ? "Explore Greek island guides →" : "Δες οδηγούς για ελληνικά νησιά →"}
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
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
              {lang === "en" ? "Featured Food Guides" : "Προτεινόμενοι Γαστρονομικοί Οδηγοί"}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {lang === "en" ? "Browse local food and drink pages" : "Δες σελίδες για τοπικό φαγητό και ποτό"}
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            {lang === "en"
              ? "These guides help travelers connect destination planning with local food culture, specialties and memorable meals."
              : "Αυτοί οι οδηγοί βοηθούν τον ταξιδιώτη να συνδέσει την οργάνωση του προορισμού με την τοπική γαστρονομία, τις σπεσιαλιτέ και τα πιο αξέχαστα γεύματα."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredFood.map((item) => (
            <article
              key={item.slug}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white backdrop-blur-md shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52">
                <Image src={item.image} alt={item.title[lang]} fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">
                    {lang === "en" ? "Food Guide" : "Γαστρονομικός Οδηγός"}
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

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.specialties[lang].slice(0, 3).map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-md border border-orange-100 bg-white backdrop-blur-md px-3 py-1 text-xs font-medium text-orange-900"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <Link
                  href={withLang(`/eat-drink/${item.slug}`, lang)}
                  className="mt-6 inline-flex rounded-md bg-orange-500 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-orange-600"
                >
                  {lang === "en" ? `${item.place} food guide →` : `Γαστρονομικός οδηγός για ${item.place} →`}
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
              {lang === "en" ? "Use food to choose a destination" : "Χρησιμοποίησε το φαγητό για να διαλέξεις προορισμό"}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Cuisine can change the whole feel of a trip, especially when choosing between islands, cities and regional experiences."
                : "Η γαστρονομία μπορεί να αλλάξει όλη την αίσθηση ενός ταξιδιού, ειδικά όταν επιλέγεις ανάμεσα σε νησιά, πόλεις και περιφερειακές εμπειρίες."}
            </p>
            <Link
              href={withLang("/collections/greek-islands", lang)}
              className="mt-5 inline-block text-sm font-semibold text-orange-700"
            >
              {lang === "en" ? "Go to Greek islands hub →" : "Πήγαινε στο hub για ελληνικά νησιά →"}
            </Link>
          </article>

          <article className="border border-slate-200 bg-white hover:bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "en" ? "Combine local food with experiences" : "Συνδύασε τοπικές γεύσεις με εμπειρίες"}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "Boat trips, local tours and destination activities become more memorable when they connect with the food culture of the place."
                : "Τα boat trips, οι τοπικές εκδρομές και οι δραστηριότητες γίνονται πιο αξέχαστα όταν συνδέονται με τη γαστρονομική ταυτότητα του τόπου."}
            </p>
            <Link
              href={withLang("/tours/all", lang)}
              className="mt-5 inline-block text-sm font-semibold text-orange-700"
            >
              {lang === "en" ? "Explore tours & experiences →" : "Δες τις εκδρομές & εμπειρίες →"}
            </Link>
          </article>

          <article className="border border-slate-200 bg-white hover:bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              {lang === "en" ? "Plan the practical side too" : "Οργάνωσε και την πρακτική πλευρά"}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              {lang === "en"
                ? "The best food ideas work better when transport, timing and everyday travel details are already clear."
                : "Οι καλύτερες γαστρονομικές ιδέες λειτουργούν ακόμη καλύτερα όταν έχουν ήδη ξεκαθαρίσει οι μετακινήσεις, το timing και οι πρακτικές λεπτομέρειες του ταξιδιού."}
            </p>
            <Link
              href={withLang("/travel-info", lang)}
              className="mt-5 inline-block text-sm font-semibold text-orange-700"
            >
              {lang === "en" ? "Go to travel info hub →" : "Πήγαινε στο hub ταξιδιωτικών πληροφοριών →"}
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
