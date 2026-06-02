import type { Metadata } from 'next';
import { hotels } from '../../../../lib/hotels-data';
import SiteHeader from '../../../../components/site-header';
import HotelsDirectoryClient from './hotels-directory-client';
import { SITE_URL } from '../../../../lib/content';
import { Lang, isLang } from '../../../../lib/locale';
import { collectionPageSchema } from '../../../../lib/structured-data';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'el' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

  const t = {
    title: {
      en: 'All Places to Stay in Greece — Browse by Destination',
      el: 'Όλα τα Καταλύματα στην Ελλάδα — Ανά Προορισμό',
    },
    description: {
      en: 'Explore all Greek hotel guides and best places to stay organized by destination: Athens, Santorini, Mykonos, Corfu, Crete, Kefalonia and more.',
      el: 'Εξερευνήστε όλους τους ελληνικούς οδηγούς ξενοδοχείων και τα καλύτερα μέρη για διαμονή ανά προορισμό: Αθήνα, Σαντορίνη, Μύκονος, Κέρκυρα, Κρήτη, Κεφαλονιά και άλλα.',
    },
  };

  const canonicalUrl = `${SITE_URL}/${lang}/hotels/all`;
  const enUrl = `${SITE_URL}/en/hotels/all`;
  const elUrl = `${SITE_URL}/el/hotels/all`;

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
          alt: lang === "en" ? "All Hotels in Greece" : "Όλα τα Ξενοδοχεία στην Ελλάδα",
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

export default async function HotelsDirectoryPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

  const collectionDescription = lang === "en"
    ? "Explore all Greek hotel guides and best places to stay organized by destination: Athens, Santorini, Mykonos, Corfu, Crete, Kefalonia and more."
    : "Εξερευνήστε όλους τους ελληνικούς οδηγούς ξενοδοχείων και τα καλύτερα μέρη για διαμονή ανά προορισμό: Αθήνα, Σαντορίνη, Μύκονος, Κέρκυρα, Κρήτη, Κεφαλονιά και άλλα.";

  const collectionPage = collectionPageSchema({
    name: lang === "en" ? "All Hotels in Greece" : "Όλα τα Ξενοδοχεία στην Ελλάδα",
    description: collectionDescription,
    url: `${SITE_URL}/${lang}/hotels/all`,
    numberOfItems: hotels.length,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }}
      />
      <SiteHeader />

      <div className="container mx-auto px-6 pt-32">
        <div className="text-center mb-8">
          <span className="mb-4 inline-flex justify-center rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 backdrop-blur-md border border-indigo-400/20">
            {lang === "el" ? "Διαμονή" : "Where to Stay"}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-800 tracking-tight">
            {lang === "el" ? "Όλοι οι Προορισμοί" : "All Destinations"}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {lang === "el" ? "Ανακαλύψτε τους αναλυτικούς οδηγούς μας για το πού να μείνετε στους κορυφαίους προορισμούς της Ελλάδας." : "Discover our comprehensive guides on where to stay across Greece's top destinations."}
          </p>
        </div>
      </div>

      <HotelsDirectoryClient lang={lang} hotels={hotels} />
    </>
  );
}
