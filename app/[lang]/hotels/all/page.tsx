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

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {lang === "el"
              ? "Η επιλογή του σωστού καταλύματος είναι μία από τις πιο σημαντικές αποφάσεις σε κάθε ταξίδι στην Ελλάδα. Από ρομαντικές σουίτες με θέα την καλντέρα στη Σαντορίνη και πολυτελή resorts στην Κρήτη μέχρι οικονομικά διαμερίσματα στην Αθήνα και παραδοσιακούς ξενώνες στα Ιόνια — δες όλες τις επιλογές ανά προορισμό και βρες το κατάλυμα που σου ταιριάζει."
              : "Choosing the right accommodation is one of the most important decisions in any Greece trip. From romantic caldera-view suites in Santorini and luxury resorts in Crete to budget apartments in Athens and traditional guesthouses in the Ionian islands — browse all options by destination and find your perfect stay."}
          </p>
        </div>
      </div>

      <HotelsDirectoryClient lang={lang} hotels={hotels} />
    </>
  );
}
