"use client";

import { usePathname, useRouter } from "next/navigation";

export type Lang = "en" | "el";

export function isLang(value: string): value is Lang {
  return value === "en" || value === "el";
}

export function withLang(path: string, lang: Lang) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalized}`;
}

export function useLocale() {
  const pathname = usePathname();
  const router = useRouter();
  const lang: Lang = pathname.startsWith("/el") ? "el" : "en";

  function stripLocale(path: string) {
    const stripped = path.replace(/^\/(en|el)(?=\/|$)/, "");
    return stripped || "/";
  }

  function withLangHash(hash: string) {
    return `/${lang}${hash}`;
  }

  function switchLanguage(nextLang: Lang) {
    router.push(withLang(pathname, nextLang));
  }

  return { lang, pathname, router, stripLocale, withLang: (path: string) => withLang(path, lang), withLangHash, switchLanguage };
}
