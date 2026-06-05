"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { siteBrand, siteBrandLine } from "../lib/content";
import { Lang, useLocale } from "../lib/useLocale";

export default function SiteHeader() {
  const { lang, pathname, withLang, withLangHash, switchLanguage } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    destinations: { en: "Destinations", el: "Προορισμοί" },
    travelInfo: { en: "Travel Info", el: "Ταξιδιωτικές Πληροφορίες" },
    hotels: { en: "Hotels", el: "Ξενοδοχεία" },
    tours: { en: "Tours", el: "Εκδρομές" },
    food: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
    forums: { en: "Travel to Greece", el: "Ταξίδι στην Ελλάδα" },
    compare: { en: "Compare", el: "Σύγκριση" },
    planner: { en: "Trip Planner", el: "Σχεδιαστής" },
    blog: { en: "Blog", el: "Blog" },
    menu: { en: "Menu", el: "Μενού" },
    close: { en: "Close", el: "Κλείσιμο" },
  };

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;
  const showLangSwitcher = /^\/(en|el)\/(contact|about|privacy-policy)$/.test(pathname);

  const navItems = useMemo(
    () => [
      {
        key: "destinations",
        label: t.destinations[lang],
        href: withLang("/destinations"),
        active: pathname.startsWith(`/${lang}/destinations`),
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
        href: withLang("/hotels"),
        active: pathname.startsWith(`/${lang}/hotels`),
      },
      {
        key: "tours",
        label: t.tours[lang],
        href: withLang("/tours/all"),
        active: pathname.startsWith(`/${lang}/tours`),
      },
      {
        key: "food",
        label: t.food[lang],
        href: withLang("/collections/greece-food-and-drink"),
        active: pathname.startsWith(`/${lang}/collections/greece-food-and-drink`),
      },
      {
        key: "compare",
        label: t.compare[lang],
        href: withLang("/travel-tools"),
        active: pathname.startsWith(`/${lang}/travel-tools`),
      },
      {
        key: "planner",
        label: t.planner[lang],
        href: withLang("/trip-planner"),
        active: pathname.startsWith(`/${lang}/trip-planner`),
      },
      {
        key: "blog",
        label: t.blog[lang],
        href: withLang("/blog"),
        active: pathname.startsWith(`/${lang}/blog`),
      },
      {
        key: "forums",
        label: t.forums[lang],
        href: withLang("/travel-to-greece"),
        active: pathname.startsWith(`/${lang}/travel-to-greece`),
      },
    ],
    [isHome, lang, pathname, withLang, withLangHash]
  );

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "glass-effect border-b border-white/20 py-1" 
        : isHome 
          ? "bg-transparent border-b border-transparent py-3 text-white" 
          : "glass-effect border-b border-white/20 py-1"
    } ${!scrolled && !isHome ? "text-slate-900" : (scrolled ? "text-slate-900" : "text-white")}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-[78px] items-center justify-between gap-3">
          <Link
            href={withLang("/")}
            className="flex min-w-0 shrink-0 items-center gap-3"
            aria-label="GoGreeceNow home"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12">
              <Image
                src="/images/logo/gogreecenow-logo.webp"
                alt="GoGreeceNow logo"
                width={48}
                height={48}
                className="h-11 w-11 object-contain sm:h-12 sm:w-12"
                priority
              />
            </div>

            <div className="min-w-0">
              <div className={`truncate text-lg font-bold tracking-tight transition-colors sm:text-xl ${
                scrolled || !isHome ? "text-indigo-800" : "text-white"
              }`}>
                {siteBrand}
              </div>
              <div className={`hidden h-5 w-[180px] truncate text-sm transition-colors sm:block lg:w-[240px] ${
                scrolled || !isHome ? "text-slate-500" : "text-white/80"
              }`}>
                {siteBrandLine[lang]}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-full ${
                  item.active
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : scrolled || !isHome 
                      ? "text-slate-600 hover:bg-white/50 hover:text-indigo-700" 
                      : "text-white/90 hover:bg-white/20 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {showLangSwitcher && (
              <div className="hidden items-center rounded-full border border-slate-200 bg-white/50 p-1 sm:flex shadow-sm">
                <button
                  onClick={() => switchLanguage("en")}
                  aria-pressed={lang === "en"}
                  className={`w-10 h-8 flex items-center justify-center rounded-full text-xs font-bold transition-all ${
                    lang === "en"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-slate-500 hover:text-indigo-700"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage("el")}
                  aria-pressed={lang === "el"}
                  className={`w-10 h-8 flex items-center justify-center rounded-full text-xs font-bold transition-all ${
                    lang === "el"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-slate-500 hover:text-indigo-700"
                  }`}
                >
                  GR
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t.close[lang] : t.menu[lang]}
              className="inline-flex h-11 w-11 items-center justify-center border border-slate-200 bg-white backdrop-blur-md text-slate-600 transition hover:bg-white hover:bg-slate-50 xl:hidden"
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
      {/* If menu is open, show the mobile menu overlay */}
      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white backdrop-blur-md xl:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {showLangSwitcher && (
              <div className="mb-4 flex items-center border border-slate-200 bg-white hover:bg-slate-50 sm:hidden">
                <button
                  onClick={() => switchLanguage("en")}
                  aria-pressed={lang === "en"}
                  className={`w-1/2 py-2.5 text-sm font-semibold transition ${
                    lang === "en"
                      ? "bg-indigo-600 border-none text-slate-900"
                      : "text-slate-500 hover:bg-white backdrop-blur-md"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage("el")}
                  aria-pressed={lang === "el"}
                  className={`w-1/2 py-2.5 text-sm font-semibold transition ${
                    lang === "el"
                      ? "bg-indigo-600 border-none text-slate-900"
                      : "text-slate-500 hover:bg-white backdrop-blur-md"
                  }`}
                >
                  GR
                </button>
              </div>
            )}
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`border px-4 py-3 text-sm font-medium transition ${
                    item.active
                      ? "border-indigo-200 bg-sky-50 text-indigo-700"
                      : "border-slate-200 bg-white backdrop-blur-md text-slate-600 hover:bg-white hover:bg-slate-50"
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
