import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/content';

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Metadata {
  const canonicalUrl = `${SITE_URL}/en/contact`;
  const enUrl = `${SITE_URL}/en/contact`;
  const elUrl = `${SITE_URL}/el/contact`;

  return {
    title: {
      absolute: 'Contact GoGreeceNow — Get in Touch for Promotion & Travel Questions',
    },
    description: 'Reach out to GoGreeceNow for promotion inquiries, partnership opportunities, or any questions about traveling to Greece.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        el: elUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: 'Contact GoGreeceNow',
      description: 'Get in touch for business promotion, partnerships, or travel inquiries.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact GoGreeceNow',
      description: 'Get in touch for business promotion, partnerships, or travel inquiries.',
      images: ['/images/hero-greece.webp'],
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
