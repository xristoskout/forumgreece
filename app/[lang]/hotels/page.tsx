import type { Metadata } from 'next';
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
          url: `${SITE_URL}/images/hero/greece-main.webp`,
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
      images: [`${SITE_URL}/images/hero/greece-main.webp`],
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
    view: { en: 'View Guide', el: 'Προβολή Οδηγού' },
    place: { en: 'Location', el: 'Τοποθεσία' },
    tag: { en: "Where to Stay", el: "Διαμονή" }
  };

  const breadcrumb = breadcrumbSchema(lang, [
    { label: lang === "en" ? "Home" : "Αρχική", path: "" },
    { label: lang === "en" ? "Hotels" : "Ξενοδοχεία", path: "/hotels" },
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SiteHeader />
      
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <span className="mb-4 inline-flex justify-center rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 backdrop-blur-md border border-indigo-400/20">
            {t.tag[lang]}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-800 tracking-tight">
            {t.h1[lang]}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {t.sub[lang]}
          </p>
        </div>

        <HotelsDirectoryClient lang={lang} hotels={hotels} />
      </div>
    </main>
  );
}
