"use client";

import { useState, useEffect } from "react";
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
      <Analytics />
      <SpeedInsights />
    </>
  );
}
