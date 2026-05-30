import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: {
      absolute: 'Contact GoGreeceNow — Get in Touch for Promotion & Travel Questions',
    },
    description: 'Reach out to GoGreeceNow for promotion inquiries, partnership opportunities, or any questions about traveling to Greece.',
    alternates: {
      canonical: `${SITE_URL}/${lang}/contact`,
      languages: {
        en: `${SITE_URL}/en/contact`,
        el: `${SITE_URL}/el/contact`,
        'x-default': `${SITE_URL}/en/contact`,
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
