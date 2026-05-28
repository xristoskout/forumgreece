"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const COOKIE_CONSENT_KEY = "gogreecenow_cookie_consent";

export default function ConsentAwareScripts() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setAccepted(localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted");
  }, []);

  if (!accepted) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-17ZPLMXNSF"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-17ZPLMXNSF');
          `,
        }}
      />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
