import type { Metadata } from 'next';

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Metadata {
  return {
    title: {
      absolute: 'Travel to Greece: Planning Hub, Tips & Practical Info | GoGreeceNow',
    },
    description: 'Everything you need to plan your Greece trip: when to visit, how to get there, island groups, transport tips and practical travel info.',
    openGraph: {
      title: 'Greece Travel Planning Hub | GoGreeceNow',
      description: 'Plan your Greece trip with practical guides, island maps, timing tips and transport info.',
      type: 'website',
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
      title: 'Greece Travel Planning Hub | GoGreeceNow',
      description: 'Plan your Greece trip with practical guides, island maps, timing tips and transport info.',
      images: ['/images/hero-greece.webp'],
    },
  };
}

export default function TravelInfoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
