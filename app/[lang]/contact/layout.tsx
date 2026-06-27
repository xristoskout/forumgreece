import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  const title = lang === "el"
    ? "Επικοινωνία | GoGreeceNow — Διαφήμιση & Ερωτήσεις"
    : "Contact GoGreeceNow | Advertising & Travel Questions";

  const description = lang === "el"
    ? "Επικοινωνήστε με το GoGreeceNow για διαφημιστικές ευκαιρίες, συνεργασίες ή οποιαδήποτε ερώτηση σχετικά με ταξίδια στην Ελλάδα."
    : "Reach out to GoGreeceNow for promotion inquiries, partnership opportunities, or any questions about traveling to Greece.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/contact`,
      languages: {
        en: `${SITE_URL}/en/contact`,
        el: `${SITE_URL}/el/contact`,
        'x-default': `${SITE_URL}/en/contact`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/hero-greece.webp'],
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
