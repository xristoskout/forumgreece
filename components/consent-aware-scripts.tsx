"use client";

import { useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const COOKIE_CONSENT_KEY = "gogreecenow_cookie_consent";

export default function ConsentAwareScripts() {
  const [accepted] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
  });

  if (!accepted) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
