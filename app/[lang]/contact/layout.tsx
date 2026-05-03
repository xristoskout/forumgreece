import type { Metadata } from 'next';

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Metadata {
  return {
    title: {
      absolute: 'Contact GoGreeceNow — Get in Touch for Promotion & Travel Questions',
    },
    description: 'Reach out to GoGreeceNow for promotion inquiries, partnership opportunities, or any questions about traveling to Greece.',
    openGraph: {
      title: 'Contact GoGreeceNow',
      description: 'Get in touch for business promotion, partnerships, or travel inquiries.',
      type: 'website',
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
