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
      en: 'All Places to Stay in Greece — Browse by Destination | GoGreeceNow',
      el: 'Όλα τα Καταλύματα στην Ελλάδα — Ανά Προορισμό | GoGreeceNow',
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
      <HotelsDirectoryClient lang={lang} hotels={hotels} />
    </>
  );
}
