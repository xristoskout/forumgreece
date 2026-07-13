import type { Metadata, Viewport } from "next";
import { Montserrat, Noto_Sans, Playfair_Display } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";

import "./globals.css";
import LangManager from "@/components/lang-manager";
import ChatLoader from "@/components/chat-loader";
import MediterraneanCursor from "@/components/mediterranean-cursor";
import CookieConsent from "@/components/cookie-consent";
import ConsentAwareScripts from "@/components/consent-aware-scripts";
import { organizationSchema, websiteSchema, personSchema } from "@/lib/structured-data";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

const notoGreek = Noto_Sans({
  variable: "--font-greek-sans",
  subsets: ["greek", "greek-ext", "latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "optional",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#f4f7fb",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gogreecenow.com"),
  title: {
    default: "GoGreeceNow",
    template: "%s | GoGreeceNow",
  },
  description:
    "GoGreeceNow is a Greece travel portal with destinations, travel info, hotels, food guides and local communities.",
  applicationName: "GoGreeceNow",
  appleWebApp: {
    title: "GoGreeceNow",
  },
  authors: [{ name: "GoGreeceNow" }],
  creator: "GoGreeceNow",
  publisher: "GoGreeceNow",
    openGraph: {
    title: "GoGreeceNow",
    description:
      "Discover destinations, travel tips, hotels, food guides and local communities across Greece.",
    siteName: "GoGreeceNow",
    type: "website",
    images: [
      {
        url: "https://www.gogreecenow.com/images/hero/greece-main.webp",
        width: 1200,
        height: 630,
        alt: "GoGreeceNow - Travel to Greece",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoGreeceNow",
    description:
      "Discover destinations, travel tips, hotels, food guides and local communities across Greece.",
    images: ["https://www.gogreecenow.com/images/hero/greece-main.webp"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? headersList.get("next-url") ?? "";
  const lang = pathname.startsWith("/el") ? "el" : "en";

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${notoGreek.variable} ${playfair.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f7fb] text-slate-900 relative selection:bg-purple-500/30 overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                organizationSchema(),
                websiteSchema("en"),
                personSchema(),
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <Script
          id="gtag-consent"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});`,
          }}
        />
        <LangManager />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_top_right,_rgba(120,80,255,0.15),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(80,120,255,0.15),_transparent_40%)] pointer-events-none"></div>
        <MediterraneanCursor />
        {children}
        <ConsentAwareScripts />
        <ChatLoader />
        <CookieConsent />
      </body>
    </html>
  );
}