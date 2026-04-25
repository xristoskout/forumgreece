import type { Metadata } from 'next';
import { tours, type Lang } from '../../../../lib/content';
import SiteHeader from '../../../../components/site-header';
import ToursDirectoryClient from './tours-directory-client';

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
      en: 'All Tours & Experiences in Greece — Browse by Region | GoGreeceNow',
      el: 'Όλες οι Εκδρομές & Εμπειρίες στην Ελλάδα — Ανά Περιοχή | GoGreeceNow',
    },
    description: {
      en: 'Explore all Greek tours, boat trips and local experiences organized by region: Athens, Santorini, Mykonos, Corfu, Crete, Kefalonia and more.',
      el: 'Εξερευνήστε όλες τις ελληνικές εκδρομές και εμπειρίες ανά περιοχή: Αθήνα, Σαντορίνη, Μύκονος, Κέρκυρα, Κρήτη, Κεφαλονιά και άλλα.',
    },
  };

  return {
    title: t.title[lang],
    description: t.description[lang],
  };
}

export default async function ToursDirectoryPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'el' ? 'el' : 'en') as Lang;

  return (
    <>
      <SiteHeader />
      <ToursDirectoryClient lang={lang} tours={tours} />
    </>
  );
}
