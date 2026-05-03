import type { Metadata } from 'next';

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Metadata {
  return {
    title: {
      absolute: 'Business Promotion Services — GoGreeceNow',
    },
    description: 'Promote your Greek business to thousands of travelers. Targeted audience, premium placement, direct bookings and SEO benefits with GoGreeceNow.',
    openGraph: {
      title: 'Business Promotion — GoGreeceNow',
      description: 'Connect with travelers planning their Greece trip. Premium promotion for hotels, tours and restaurants.',
      type: 'website',
    },
  };
}

export default function PromotionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
