import type { Metadata, Viewport } from "next";
import { Montserrat, Geist_Mono, Noto_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import LangManager from "@/components/lang-manager";
import ChatLoader from "@/components/chat-loader";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic", "cyrillic-ext", "latin-ext", "vietnamese"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const notoGreek = Noto_Sans({
  variable: "--font-greek-sans",
  subsets: ["greek", "greek-ext"],
  display: "swap",
  preload: true,
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
  keywords: [
    "GoGreeceNow",
    "Greece travel",
    "Greek islands",
    "Athens travel",
    "Santorini",
    "Mykonos",
    "Crete",
    "Corfu",
    "Kefalonia",
    "Lesvos",
    "Greece hotels",
    "Greece food guide",
    "travel to Greece",
  ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoGreek.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f7fb] text-slate-900 relative selection:bg-purple-500/30">
        <LangManager />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_top_right,_rgba(120,80,255,0.15),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(80,120,255,0.15),_transparent_40%)] pointer-events-none"></div>
        {children}
        <Analytics />
        <SpeedInsights />
        <ChatLoader />
      </body>
    </html>
  );
}