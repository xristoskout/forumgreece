"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const COOKIE_CONSENT_KEY = "gogreecenow_cookie_consent";
const GA4_ID = "G-17ZPLMXNSF";

export default function ConsentAwareScripts() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "accepted" || stored === "declined") {
      queueMicrotask(() => setConsent(stored));
    }

    function handleConsentChange(e: Event) {
      const detail = (e as CustomEvent).detail;
      setConsent(detail);
    }

    window.addEventListener("cookie-consent-updated", handleConsentChange);
    return () => window.removeEventListener("cookie-consent-updated", handleConsentChange);
  }, []);

  if (!consent) return null;

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`gtag('js', new Date()); gtag('config', '${GA4_ID}', { anonymize_ip: true });`}
          </Script>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </>
  );
}
