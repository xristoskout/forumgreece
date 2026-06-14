import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { hotels, SITE_URL, type Lang } from '../../../lib/content';
import SiteHeader from '../../../components/site-header';
import HotelsDirectoryClient from './all/hotels-directory-client';
import { breadcrumbSchema } from '../../../lib/structured-data';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'el' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'el' ? 'el' : 'en') as Lang;

  const t = {
    title: {
      en: 'Curated Hotels & Boutique Stays in Greece',
      el: 'Επιλεγμένα Ξενοδοχεία & Καταλύματα στην Ελλάδα',
    },
    description: {
      en: 'Discover unique places to stay in Greece. From Santorini cave suites to Corfu family resorts and authentic Lesvos rooms.',
      el: 'Ανακαλύψτε μοναδικά μέρη για διαμονή στην Ελλάδα. Από υπόσκαφες σουίτες στη Σαντορίνη μέχρι family resorts στην Κέρκυρα.',
    },
  };

  const canonicalUrl = `${SITE_URL}/${lang}/hotels`;
  const enUrl = `${SITE_URL}/en/hotels`;
  const elUrl = `${SITE_URL}/el/hotels`;

  return {
    title: t.title[lang],
    description: t.description[lang],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        el: elUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: t.title[lang],
      description: t.description[lang],
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/images/hotels-cover.webp`,
          width: 1600,
          height: 900,
          alt: lang === "en" ? "Hotels & Stays in Greece" : "Ξενοδοχεία & Διαμονή στην Ελλάδα",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title[lang],
      description: t.description[lang],
      images: [`${SITE_URL}/images/hotels-cover.webp`],
    },
  };
}

export default async function HotelsListingPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'el' ? 'el' : 'en') as Lang;

  const t = {
    h1: { en: "Where to Stay in Greece", el: "Πού να Μείνετε στην Ελλάδα" },
    sub: {
      en: "Browse hotel and accommodation guides by destination.",
      el: "Δείτε οδηγούς ξενοδοχείων και καταλυμάτων ανά προορισμό.",
    },
    intro: {
      en: "Choosing the right area matters more than choosing the right hotel — a caldera view in Santorini, a beach base in Naxos or a historic quarter in Athens each create a completely different trip. Our guides break down every destination area by area, with honest advice on views, prices, crowds and who each base suits best.",
      el: "",
    },
    view: { en: 'View Guide', el: 'Προβολή Οδηγού' },
    place: { en: 'Location', el: 'Τοποθεσία' },
    tag: { en: "Where to Stay", el: "Διαμονή" }
  };

  const breadcrumb = breadcrumbSchema(lang, [
    { label: lang === "en" ? "Home" : "Αρχική", path: "" },
    { label: lang === "en" ? "Hotels" : "Ξενοδοχεία", path: "/hotels" },
  ]);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* ── Hero Cover ── */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/hotels-cover.webp"
          alt="Hotels & Stays in Greece"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="mb-6 inline-flex justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
            {t.tag[lang]}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight drop-shadow-lg">
            {t.h1[lang]}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            {t.sub[lang]}
          </p>
          <p className="text-white/60 text-base max-w-3xl mx-auto leading-relaxed mt-6 drop-shadow-md">
            {t.intro[lang]}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24">

        <HotelsDirectoryClient lang={lang} hotels={hotels} />

        {/* ════════ HOW TO CHOOSE ════════ */}
        <section className="max-w-5xl mx-auto mt-24 px-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-4 tracking-tight">
            How to Choose Your Base
          </h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12">
            The same island can feel like three different holidays depending on where you sleep. A few honest rules of thumb:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🌅",
                title: "View vs. Value",
                text: "In Santorini, Firostefani and Imerovigli deliver the same caldera view as Oia for noticeably less. The view is identical at €150 and €1,500 — the hotel adds comfort, not scenery.",
              },
              {
                emoji: "👨‍👩‍👧",
                title: "Families: think flat",
                text: "Caldera villages mean endless stairs and no beach. With kids, beach bases like Kamari (Santorini), Agios Prokopios (Naxos) or Tsilivi (Zakynthos) make every day easier.",
              },
              {
                emoji: "🚗",
                title: "Distances deceive",
                text: "On big islands like Crete, Lefkada or Kefalonia, your base decides your driving. Pick the coast you'll actually explore — not the prettiest photo.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{card.emoji}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ CROSS LINKS ════════ */}
        <section className="max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href={`/${lang}/tours/all`}
              className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-600 to-cyan-500 p-8 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Booked your stay? Now fill your days
                </h3>
                <p className="text-white/80 text-sm">
                  Browse 2,000+ bookable tours & experiences by region.
                </p>
              </div>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </Link>
            <Link
              href={`/${lang}/destinations`}
              className="group flex items-center justify-between rounded-2xl bg-slate-900 p-8 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Still choosing a destination?
                </h3>
                <p className="text-white/80 text-sm">
                  Full travel guides for 38 Greek destinations.
                </p>
              </div>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
