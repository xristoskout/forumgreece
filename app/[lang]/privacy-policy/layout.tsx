import type { Metadata } from 'next';

const SITE_URL = 'https://www.gogreecenow.com';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: {
      absolute: 'Terms of Use & Privacy Policy — GoGreeceNow',
    },
    description: 'Read the Terms of Use and Privacy Policy for GoGreeceNow. Learn about data protection, cookie policy, user responsibilities and business promotion terms.',
    alternates: {
      canonical: `${SITE_URL}/${lang}/privacy-policy`,
      languages: {
        en: `${SITE_URL}/en/privacy-policy`,
        el: `${SITE_URL}/el/privacy-policy`,
        'x-default': `${SITE_URL}/en/privacy-policy`,
      },
    },
    openGraph: {
      title: 'Terms & Privacy Policy — GoGreeceNow',
      description: 'Terms of Use and Privacy Policy for GoGreeceNow users and businesses. Includes our Cookie Policy.',
      type: 'website',
    },
  };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
