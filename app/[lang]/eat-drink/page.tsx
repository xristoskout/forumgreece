import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { food, type Lang } from '../../../lib/content';
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
      en: 'Greek Gastronomy: Best Places to Eat & Drink | GoGreeceNow',
      el: 'Ελληνική Γαστρονομία: Φαγητό & Ποτό στην Ελλάδα | GoGreeceNow',
    },
    description: {
      en: 'Explore the flavors of Greece. Authentic tavernas, sunset cocktails, and local gastronomy guides for Santorini, Crete, Lesvos and more.',
      el: 'Εξερευνήστε τις γεύσεις της Ελλάδας. Αυθεντικές ταβέρνες, cocktails στο ηλιοβασίλεμα και γαστρονομικοί οδηγοί.',
    },
  };

  return {
    title: t.title[lang],
    description: t.description[lang],
  };
}

export default async function EatDrinkListingPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'el' ? 'el' : 'en') as Lang;

  const t = {
    h1: { en: 'Eat & Drink', el: 'Φαγητό & Ποτό' },
    sub: {
      en: 'Discover the rich flavors of Greek cuisine, from traditional village tavernas to refined sunset dining and local ouzo traditions.',
      el: 'Ανακαλύψτε τις πλούσιες γεύσεις της ελληνικής κουζίνας, από παραδοσιακές ταβέρνες μέχρι εκλεπτυσμένο δείπνο στο ηλιοβασίλεμα.',
    },
    discover: { en: 'Read Guide', el: 'Διαβάστε τον Οδηγό' },
  };

  return (
    <main className="min-h-screen bg-[#fffdf8] mesh-gradient">
      <SiteHeader />
      
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-400 to-amber-700 tracking-tight">
            {t.h1[lang]}
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {t.sub[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {food.map((item) => (
            <Link href={`/${lang}/eat-drink/${item.slug}`} key={item.slug}>
              <article className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="h-1/2 relative overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title[lang]} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest">
                      {item.place}
                    </span>
                  </div>
                </div>
                
                <div className="h-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors">
                      {item.title[lang]}
                    </h2>
                    <p className="text-slate-500 text-sm line-clamp-3 font-light leading-relaxed">
                      {item.info[lang]}
                    </p>
                  </div>

                  <div className="flex items-center text-orange-600 text-sm font-bold pt-4 border-t border-slate-100">
                    {t.discover[lang]} <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
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
