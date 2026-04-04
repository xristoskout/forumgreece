import type { Lang } from "../../lib/content";

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

function isSupportedLang(lang: string): lang is Lang {
  return lang === "en" || lang === "el";
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  const pageLang: Lang = isSupportedLang(lang) ? lang : "en";

  return <div lang={pageLang}>{children}</div>;
}