import type { Metadata } from 'next';
import { hotels } from '../../../../lib/content';
import SiteHeader from '../../../../components/site-header';
import HotelsDirectoryClient from './hotels-directory-client';
import { Lang, isLang } from '../../../../lib/content';

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
      en: 'All Places to Stay in Greece — Browse by Destination | GoGreeceNow',
      el: 'Όλα τα Καταλύματα στην Ελλάδα — Ανά Προορισμό | GoGreeceNow',
    },
    description: {
      en: 'Explore all Greek hotel guides and best places to stay organized by destination: Athens, Santorini, Mykonos, Corfu, Crete, Kefalonia and more.',
      el: 'Εξερευνήστε όλους τους ελληνικούς οδηγούς ξενοδοχείων και τα καλύτερα μέρη για διαμονή ανά προορισμό: Αθήνα, Σαντορίνη, Μύκονος, Κέρκυρα, Κρήτη, Κεφαλονιά και άλλα.',
    },
  };

  return {
    title: t.title[lang],
    description: t.description[lang],
  };
}

export default async function HotelsDirectoryPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

  return (
    <>
      <SiteHeader />
      <HotelsDirectoryClient lang={lang} hotels={hotels} />
    </>
  );
}
