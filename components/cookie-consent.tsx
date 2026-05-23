"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const COOKIE_CONSENT_KEY = "gogreecenow_cookie_consent";

export default function CookieConsent() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/el") ? "el" : "en";

  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    setShow(!hasConsent);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShow(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-xl p-6 shadow-2xl shadow-slate-900/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-slate-600">
            We use cookies to improve your experience on GoGreeceNow. By continuing, you accept our use of cookies.{" "}
            <Link
              href={`/${lang}/privacy-policy`}
              className="underline text-indigo-600 hover:text-indigo-800"
            >
              Learn more
            </Link>
          </p>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={decline}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-500"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
