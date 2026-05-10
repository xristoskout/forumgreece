"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Lang } from "./locale";
import { isLang, withLang } from "./locale";

export type { Lang };
export { isLang, withLang };

export function useLocale() {
  const pathname = usePathname();
  const router = useRouter();
  const lang: Lang = isLang(pathname.split("/")[1]) ? pathname.split("/")[1] as Lang : "en";

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
