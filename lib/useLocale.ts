import { usePathname, useRouter } from "next/navigation";

export type Lang = "en" | "el";

export function useLocale() {
  const pathname = usePathname();
  const router = useRouter();
  const lang: Lang = pathname.startsWith("/el") ? "el" : "en";

  function stripLocale(path: string) {
    const stripped = path.replace(/^\/(en|el)(?=\/|$)/, "");
    return stripped || "/";
  }

  function withLang(path: string, locale: Lang = lang) {
    if (/^https?:\/\//i.test(path)) return path;
    const normalized = path.startsWith("/") ? path : `/${path}`;
    const cleanPath = stripLocale(normalized);
    if (cleanPath === "/") return `/${locale}`;
    return `/${locale}${cleanPath}`;
  }

  function switchLanguage(nextLang: Lang) {
    router.push(withLang(pathname, nextLang));
  }

  return { lang, pathname, router, stripLocale, withLang, switchLanguage };
}
