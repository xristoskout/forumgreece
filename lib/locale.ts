export const supportedLangs = ["en", "el"] as const;
export type Lang = (typeof supportedLangs)[number];

export function isLang(value: string): value is Lang {
  return supportedLangs.includes(value as Lang);
}

export function withLang(path: string, lang: Lang) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalized}`;
}
