import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { hotels, type Lang } from '../../../lib/content';
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
      en: 'Curated Hotels & Boutique Stays in Greece | GoGreeceNow',
      el: 'Επιλεγμένα Ξενοδοχεία & Καταλύματα στην Ελλάδα | GoGreeceNow',
    },
    description: {
      en: 'Discover unique places to stay in Greece. From Santorini cave suites to Corfu family resorts and authentic Lesvos rooms.',
      el: 'Ανακαλύψτε μοναδικά μέρη για διαμονή στην Ελλάδα. Από υπόσκαφες σουίτες στη Σαντορίνη μέχρι family resorts στην Κέρκυρα.',
    },
  };

  return {
    title: t.title[lang],
    description: t.description[lang],
  };
}

export default async function HotelsListingPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'el' ? 'el' : 'en') as Lang;

  const t = {
    h1: { en: 'Where to Stay', el: 'Πού να Μείνετε' },
    sub: {
      en: 'From boutique hotels with caldera views to traditional seaside rooms and luxury resorts across the Greek islands.',
      el: 'Από boutique ξενοδοχεία με θέα την καλντέρα μέχρι παραδοσιακά παραθαλάσσια δωμάτια και luxury resorts στα ελληνικά νησιά.',
    },
    view: { en: 'View Details', el: 'Δείτε Λεπτομέρειες' },
    place: { en: 'Location', el: 'Τοποθεσία' },
  };

  return (
    <main className="min-h-screen bg-[#fcfdff] mesh-gradient">
      <SiteHeader />
      
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-800 tracking-tight">
            {t.h1[lang]}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {t.sub[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {hotels.map((hotel) => (
            <Link href={`/${lang}/hotels/${hotel.slug}`} key={hotel.slug}>
              <article className="group relative h-[550px] rounded-[3rem] overflow-hidden cursor-pointer border border-white/50 shadow-2xl transition-all duration-700 hover:-translate-y-4 bg-white/10 backdrop-blur-sm">
                <Image 
                  src={hotel.image} 
                  alt={hotel.name} 
                  fill
                  className="absolute inset-0 object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500"></div>
                
                {hotel.badge && (
                  <div className="absolute top-8 right-8">
                    <span className="px-5 py-2 rounded-full bg-white/90 backdrop-blur-xl text-indigo-900 text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                      {hotel.badge}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span className="text-indigo-200 text-xs font-bold uppercase tracking-widest">{hotel.place}</span>
                  </div>
                  
                  <h2 className="text-3xl font-black text-white mb-4 tracking-tight group-hover:text-indigo-100 transition-colors">
                    {hotel.name}
                  </h2>
                  
                  <p className="text-white/70 text-sm line-clamp-3 mb-8 font-light leading-relaxed">
                    {hotel.info[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {hotel.features[lang].slice(0, 3).map((feat, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-[10px] uppercase font-bold tracking-wider">
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-white text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                      {t.view[lang]} <span className="ml-2">→</span>
                    </span>
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
