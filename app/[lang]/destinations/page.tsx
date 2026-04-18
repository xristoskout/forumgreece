import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { destinations, type Lang } from '../../../lib/content';
import SiteHeader from '../../../components/site-header';

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
      en: 'Explore Greece: Destination Guides & Island Ideas | GoGreeceNow',
      el: 'Εξερευνήστε την Ελλάδα: Οδηγοί Προορισμών | GoGreeceNow',
    },
    description: {
      en: 'Discover the most breathtaking destinations in Greece. Detailed guides for Santorini, Mykonos, Crete, Corfu and more.',
      el: 'Ανακαλύψτε τους πιο μαγευτικούς προορισμούς στην Ελλάδα. Αναλυτικοί οδηγοί για Σαντορίνη, Μύκονο, Κρήτη, Κέρκυρα και άλλα.',
    },
  };

  return {
    title: t.title[lang],
    description: t.description[lang],
  };
}

export default async function DestinationsListingPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'el' ? 'el' : 'en') as Lang;

  const t = {
    h1: { en: 'Explore Greece', el: 'Εξερευνήστε την Ελλάδα' },
    sub: {
      en: 'Discover the most breathtaking destinations, hidden gems, and authentic local experiences across the Aegean and Ionian seas.',
      el: 'Ανακαλύψτε τους πιο μαγευτικούς προορισμούς, κρυμμένα διαμάντια και αυθεντικές τοπικές εμπειρίες στο Αιγαίο και το Ιόνιο.',
    },
    explore: { en: 'Explore', el: 'Εξερεύνηση' },
  };

  return (
    <main className="min-h-screen bg-[#f8fbff] mesh-gradient">
      <SiteHeader />
      
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-slate-600 tracking-tight">
            {t.h1[lang]}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {t.sub[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {destinations.map((dest) => (
            <Link href={`/${lang}/destinations/${dest.slug}`} key={dest.slug}>
              <article className="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-slate-200 shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02]">
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill
                  className="absolute inset-0 object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-60"></div>
                
                <div className="absolute bottom-10 left-10 right-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest mb-4 border border-white/20">
                    {dest.region[lang]}
                  </span>
                  <h2 className="text-4xl font-black text-white drop-shadow-2xl mb-3 tracking-tight">{dest.name}</h2>
                  <p className="text-white/80 text-sm line-clamp-2 mb-6 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {dest.blurb[lang]}
                  </p>
                  <div className="flex items-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <span className="border-b border-white/40 pb-1">{t.explore[lang]} {dest.name}</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
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
