import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEl = lang === 'el';
  const title = isEl
    ? 'Ταξίδι στην Ελλάδα: Οδηγός Σχεδιασμού & Πληροφορίες | GoGreeceNow'
    : 'Travel to Greece: Planning Hub, Tips & Practical Info | GoGreeceNow';

  const canonicalUrl = `${SITE_URL}/${lang}/travel-info`;
  const enUrl = `${SITE_URL}/en/travel-info`;

  return {
    title: {
      absolute: title,
    },
    description: isEl
      ? 'Ό,τι χρειάζεσαι για να οργανώσεις το ταξίδι σου στην Ελλάδα: πότε να πας, πώς να φτάσεις, νησιωτικά σύμπλεγμα, μεταφορές και πρακτικές ταξιδιωτικές πληροφορίες.'
      : 'Everything you need to plan your Greece trip: when to visit, how to get there, island groups, transport tips and practical travel info.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: title,
      description: isEl
        ? 'Οργάνωσε το ταξίδι σου στην Ελλάδα με πρακτικούς οδηγούς, χάρτες νησιών, tips για το timing και πληροφορίες μεταφοράς.'
        : 'Plan your Greece trip with practical guides, island maps, timing tips and transport info.',
      type: 'website',
      locale: isEl ? 'el_GR' : 'en_US',
      images: [
        {
          url: '/images/hero-greece.webp',
          width: 1600,
          height: 900,
          alt: 'Greece travel planning hub',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: isEl
        ? 'Οργάνωσε το ταξίδι σου στην Ελλάδα με πρακτικούς οδηγούς, χάρτες νησιών, tips για το timing και πληροφορίες μεταφοράς.'
        : 'Plan your Greece trip with practical guides, island maps, timing tips and transport info.',
      images: ['/images/hero-greece.webp'],
    },
  };
}

export default function TravelInfoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
