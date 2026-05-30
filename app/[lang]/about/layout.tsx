import type { Metadata } from 'next';

const SITE_URL = 'https://www.gogreecenow.com';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: {
      absolute: 'About GoGreeceNow — Your Greece Travel Hub',
    },
    description: 'Learn about GoGreeceNow — your ultimate hub for exploring Greece. We connect travelers with authentic local experiences, pristine destinations, and a thriving community.',
    alternates: {
      canonical: `${SITE_URL}/${lang}/about`,
      languages: {
        en: `${SITE_URL}/en/about`,
        el: `${SITE_URL}/el/about`,
        'x-default': `${SITE_URL}/en/about`,
      },
    },
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
