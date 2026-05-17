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
      en: 'All Tours & Experiences in Greece — Browse by Region | GoGreeceNow',
      el: 'Όλες οι Εκδρομές & Εμπειρίες στην Ελλάδα — Ανά Περιοχή | GoGreeceNow',
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
        el: elUrl,
        'x-default': enUrl,
      },
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
      <ToursDirectoryClient lang={lang} tours={tours} />
    </>
  );
}
