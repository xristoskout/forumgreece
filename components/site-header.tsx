"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Lang, siteBrand, siteBrandLine } from "../lib/content";

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const lang: Lang = pathname.startsWith("/el") ? "el" : "en";

  function stripLocale(path: string) {
    const stripped = path.replace(/^\/(en|el)(?=\/|$)/, "");
    return stripped || "/";
  }

  function withLang(path: string, locale: Lang = lang) {
    if (/^https?:\/\//i.test(path)) return path;

    const normalized = path.startsWith("/") ? path : `/${path}`;
    const cleanPath = stripLocale(normalized);

    if (cleanPath === "/") {
      return `/${locale}`;
    }

    return `/${locale}${cleanPath}`;
  }

  function withLangHash(hash: string, locale: Lang = lang) {
    return `${withLang("/", locale)}${hash}`;
  }

  function switchLanguage(nextLang: Lang) {
    setMenuOpen(false);
    router.push(withLang(pathname, nextLang));
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const t = {
    destinations: { en: "Destinations", el: "Προορισμοί" },
    travelInfo: { en: "Travel Info", el: "Ταξιδιωτικές Πληροφορίες" },
    hotels: { en: "Hotels", el: "Ξενοδοχεία" },
    tours: { en: "Tours", el: "Εκδρομές" },
    food: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
    forums: { en: "Travel to Greece", el: "Ταξίδι στην Ελλάδα" },
    menu: { en: "Menu", el: "Μενού" },
    close: { en: "Close", el: "Κλείσιμο" },
  };

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  const navItems = useMemo(
    () => [
      {
        key: "destinations",
        label: t.destinations[lang],
        href: withLangHash("#destinations"),
        active: isHome,
      },
      {
        key: "travel-info",
        label: t.travelInfo[lang],
        href: withLang("/travel-info"),
        active: pathname.startsWith(`/${lang}/travel-info`),
      },
      {
        key: "hotels",
        label: t.hotels[lang],
        href: withLangHash("#hotels"),
        active: false,
      },
      {
        key: "tours",
        label: t.tours[lang],
        href: withLangHash("#tours"),
        active: false,
      },
      {
        key: "food",
        label: t.food[lang],
        href: withLangHash("#food"),
        active: false,
      },
      {
        key: "forums",
        label: t.forums[lang],
        href: withLang("/travel-to-greece"),
        active: pathname.startsWith(`/${lang}/travel-to-greece`),
      },
    ],
    [isHome, lang, pathname]
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/88 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-[78px] items-center justify-between gap-3">
          <Link
            href={withLang("/")}
            className="flex min-w-0 shrink-0 items-center gap-3"
            aria-label="GoGreeceNow home"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12">
              <Image
                src="/images/logo/gogreecenow-logo.png"
                alt="GoGreeceNow logo"
                width={48}
                height={48}
                className="h-11 w-11 object-contain sm:h-12 sm:w-12"
                priority
              />
            </div>

            <div className="min-w-0">
              <div className="truncate text-lg font-bold tracking-tight text-sky-900 sm:text-xl">
                {siteBrand}
              </div>
              <div className="hidden h-5 w-[180px] truncate text-sm text-slate-500 sm:block lg:w-[240px]">
                {siteBrandLine[lang]}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition ${
                  item.active
                    ? "bg-sky-50 text-sky-800"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden items-center border border-slate-200 bg-slate-50 sm:flex">
              <button
                onClick={() => switchLanguage("en")}
                aria-pressed={lang === "en"}
                className={`w-11 px-0 py-2 text-sm font-semibold transition ${
                  lang === "en"
                    ? "bg-sky-700 text-white"
                    : "text-slate-600 hover:bg-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLanguage("el")}
                aria-pressed={lang === "el"}
                className={`w-11 px-0 py-2 text-sm font-semibold transition ${
                  lang === "el"
                    ? "bg-sky-700 text-white"
                    : "text-slate-600 hover:bg-white"
                }`}
              >
                GR
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t.close[lang] : t.menu[lang]}
              className="inline-flex h-11 w-11 items-center justify-center border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 xl:hidden"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="mb-4 flex items-center border border-slate-200 bg-slate-50 sm:hidden">
              <button
                onClick={() => switchLanguage("en")}
                aria-pressed={lang === "en"}
                className={`w-1/2 py-2.5 text-sm font-semibold transition ${
                  lang === "en"
                    ? "bg-sky-700 text-white"
                    : "text-slate-600 hover:bg-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLanguage("el")}
                aria-pressed={lang === "el"}
                className={`w-1/2 py-2.5 text-sm font-semibold transition ${
                  lang === "el"
                    ? "bg-sky-700 text-white"
                    : "text-slate-600 hover:bg-white"
                }`}
              >
                GR
              </button>
            </div>

            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`border px-4 py-3 text-sm font-medium transition ${
                    item.active
                      ? "border-sky-200 bg-sky-50 text-sky-800"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}