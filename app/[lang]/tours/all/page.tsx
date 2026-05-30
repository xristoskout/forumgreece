import type { Metadata } from 'next';
import { tours } from '../../../../lib/tours-data';
import SiteHeader from '../../../../components/site-header';
import ToursDirectoryClient from './tours-directory-client';
import { SITE_URL } from '../../../../lib/content';
import { Lang, isLang } from '../../../../lib/locale';
import { breadcrumbSchema, collectionPageSchema } from '../../../../lib/structured-data';

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
      en: 'All Tours & Experiences in Greece — Browse by Region',
      el: 'Όλες οι Εκδρομές & Εμπειρίες στην Ελλάδα — Ανά Περιοχή',
    },
    description: {
      en: 'Explore all Greek tours, boat trips and local experiences organized by region: Athens, Santorini, Mykonos, Corfu, Crete, Kefalonia and more.',
      el: 'Εξερευνήστε όλες τις ελληνικές εκδρομές και εμπειρίες ανά περιοχή: Αθήνα, Σαντορίνη, Μύκονος, Κέρκυρα, Κρήτη, Κεφαλονιά και άλλα.',
    },
  };

  const canonicalUrl = `${SITE_URL}/${lang}/tours/all`;
  const enUrl = `${SITE_URL}/en/tours/all`;
  const elUrl = `${SITE_URL}/el/tours/all`;

  return {
    title: t.title[lang],
    description: t.description[lang],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
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
          alt: lang === "en" ? "All Tours & Experiences in Greece" : "Όλες οι Εκδρομές & Εμπειρίες στην Ελλάδα",
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

export default async function ToursDirectoryPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

  const breadcrumb = breadcrumbSchema(lang, [
    { label: lang === "en" ? "Home" : "Αρχική", path: "" },
    { label: lang === "en" ? "Tours" : "Περιηγήσεις", path: "/tours/all" },
  ]);

  const collectionDescription = lang === "en"
    ? "Explore all Greek tours, boat trips and local experiences organized by region: Athens, Santorini, Mykonos, Corfu, Crete, Kefalonia and more."
    : "Εξερευνήστε όλες τις ελληνικές εκδρομές και εμπειρίες ανά περιοχή: Αθήνα, Σαντορίνη, Μύκονος, Κέρκυρα, Κρήτη, Κεφαλονιά και άλλα.";

  const collectionPage = collectionPageSchema({
    name: lang === "en" ? "All Tours & Experiences in Greece" : "Όλες οι Εκδρομές & Εμπειρίες στην Ελλάδα",
    description: collectionDescription,
    url: `${SITE_URL}/${lang}/tours/all`,
    numberOfItems: tours.length,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }}
      />
      <SiteHeader />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {lang === "el"
              ? "Η Ελλάδα προσφέρει ατελείωτες ευκαιρίες για εκδρομές και εμπειρίες. Από ιστιοπλοΐα στις Κυκλάδες και γαστρονομικές περιηγήσεις στην Κρήτη μέχρι αρχαιολογικές ξεναγήσεις στην Αθήνα και καταδύσεις στο Ιόνιο — δες όλες τις διαθέσιμες εμπειρίες ανά περιοχή και βρες αυτή που ταιριάζει στο ταξίδι σου."
              : "Greece offers endless opportunities for tours and experiences. From sailing the Cyclades and food tours in Crete to archaeological walks in Athens and diving in the Ionian — browse all available experiences by region and find the ones that match your trip."}
          </p>
        </div>
      </div>

      <ToursDirectoryClient lang={lang} tours={tours} />
    </>
  );
}
