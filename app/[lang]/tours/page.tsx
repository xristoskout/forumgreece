import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { tours, SITE_URL, type Lang } from '../../../lib/content';
import SiteHeader from '../../../components/site-header';
import { collectionPageSchema } from '../../../lib/structured-data';

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
      en: 'Local Experiences & Tours in Greece | GoGreeceNow',
      el: 'Τοπικές Εμπειρίες & Εκδρομές στην Ελλάδα | GoGreeceNow',
    },
    description: {
      en: 'Discover the best local experiences in Greece. Curated tours for Kefalonia, Lesvos, Crete and more.',
      el: 'Ανακαλύψτε τις καλύτερες τοπικές εμπειρίες στην Ελλάδα. Επιλεγμένες εκδρομές για Κεφαλονιά, Λέσβο, Κρήτη.',
    },
  };

  const canonicalUrl = `${SITE_URL}/${lang}/tours`;
  const enUrl = `${SITE_URL}/en/tours`;
  const elUrl = `${SITE_URL}/el/tours`;

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

export default async function ToursListingPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'el' ? 'el' : 'en') as Lang;

  const t = {
    h1: { en: 'Experiences', el: 'Εμπειρίες' },
    sub: {
      en: 'Immerse yourself in the authentic side of Greece with curated tours, hidden gems, and unique local activities.',
      el: 'Ζήστε την αυθεντική πλευρά της Ελλάδας μέσα από επιλεγμένες εκδρομές, κρυμμένα διαμάντια και μοναδικές δραστηριότητες.',
    },
    discover: { en: 'View Experience', el: 'Δείτε την Εμπειρία' },
  };

  const collectionDescription = lang === "en"
    ? "Discover the best local experiences in Greece. Curated tours for Kefalonia, Lesvos, Crete and more."
    : "Ανακαλύψτε τις καλύτερες τοπικές εμπειρίες στην Ελλάδα. Επιλεγμένες εκδρομές για Κεφαλονιά, Λέσβο, Κρήτη.";

  const collectionPage = collectionPageSchema({
    name: lang === "en" ? "Local Experiences & Tours in Greece" : "Τοπικές Εμπειρίες & Εκδρομές στην Ελλάδα",
    description: collectionDescription,
    url: `${SITE_URL}/${lang}/tours`,
    numberOfItems: tours.length,
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }}
      />
      <SiteHeader />
      
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-emerald-500 to-indigo-700 tracking-tight">
            {t.h1[lang]}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {t.sub[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {tours.map((tour) => (
            <Link href={`/${lang}/tours/${tour.slug}`} key={tour.slug}>
              <article className="group relative h-[450px] rounded-[1.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <Image 
                  src={tour.image} 
                  alt={tour.title[lang]} 
                  fill
                  className="absolute inset-0 object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
                
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-lg bg-teal-500/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">
                    {tour.place}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-teal-200 transition-colors">
                    {tour.title[lang]}
                  </h2>
                  <p className="text-white/80 text-xs mb-4 line-clamp-2 font-medium">
                    {tour.info[lang]}
                  </p>
                  <div className="flex items-center text-teal-300 text-xs font-bold">
                    {tour.cta?.[lang] ?? `${t.discover[lang]} →`}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
