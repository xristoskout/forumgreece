"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LangManager() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = pathname?.startsWith("/el") ? "el" : "en";
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
