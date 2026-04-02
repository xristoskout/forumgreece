import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GoGreeceNow",
    template: "%s | GoGreeceNow",
  },
  description:
    "GoGreeceNow is a Greece travel portal with destinations, travel info, hotels, food guides and local communities.",
  applicationName: "GoGreeceNow",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "GoGreeceNow",
    description:
      "Discover destinations, travel tips, hotels, food guides and local communities across Greece.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f7fbff] text-slate-900">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}