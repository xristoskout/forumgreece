import type { Metadata } from 'next';

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Metadata {
  return {
    title: {
      absolute: 'About GoGreeceNow — Your Greece Travel Hub',
    },
    description: 'Learn about GoGreeceNow — your ultimate hub for exploring Greece. We connect travelers with authentic local experiences, pristine destinations, and a thriving community.',
    openGraph: {
      title: 'About GoGreeceNow',
      description: 'Your Greece travel hub — destinations, guides, hotels and local experiences.',
      type: 'website',
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
