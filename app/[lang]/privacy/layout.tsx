import type { Metadata } from 'next';

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Metadata {
  return {
    title: {
      absolute: 'Terms of Use & Privacy Policy — GoGreeceNow',
    },
    description: 'Read the Terms of Use and Privacy Policy for GoGreeceNow. Learn about data protection, user responsibilities and business promotion terms.',
    openGraph: {
      title: 'Terms & Privacy — GoGreeceNow',
      description: 'Terms of Use and Privacy Policy for GoGreeceNow users and businesses.',
      type: 'website',
    },
  };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
