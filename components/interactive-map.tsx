"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { Lang } from "../lib/content";
import { MAP_PINS, type Pin } from "../lib/map-pins";

type Props = {
  lang: Lang;
  withLang: (path: string) => string;
};

export default function InteractiveMap({ lang, withLang }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node) &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setActive(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const activePin = active ? MAP_PINS.find((p) => p.id === active) : null;

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      style={{ aspectRatio: "1 / 1" }}
    >
      <img
        src="/images/greece-islands-map-guide.webp"
        alt={lang === "en" ? "Interactive map of Greek island groups" : "Διαδραστικός χάρτης νησιωτικών συμπλεγμάτων Ελλάδας"}
        className="w-full h-auto rounded-[2rem] border border-slate-200 shadow-2xl"
        draggable={false}
      />

      {MAP_PINS.map((pin) => (
        <button
          key={pin.id}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActive(active === pin.id ? null : pin.id);
          }}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
          aria-label={pin.label[lang]}
        >
          <span className="block w-4 h-4 rounded-full bg-indigo-600 border-2 border-white shadow-lg transition-all duration-200 group-hover:scale-150 group-hover:bg-indigo-500 group-hover:shadow-indigo-400/50" />
        </button>
      ))}

      {activePin && (
        <div
          ref={tooltipRef}
          className="absolute z-20 w-56 rounded-xl border border-slate-200 bg-white shadow-2xl p-4 pointer-events-auto"
          style={{
            left: `${activePin.x}%`,
            top: `${activePin.y}%`,
            transform:
              activePin.y < 30
                ? "translate(-50%, 20px)"
                : activePin.x > 75
                  ? "translate(-100%, -50%)"
                  : "translate(-50%, -120%)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-0.5">
            {lang === "en" ? "Destination" : "Προορισμός"}
          </p>
          <p className="text-base font-bold text-slate-900 mb-1">
            {activePin.label[lang]}
          </p>
          <p className="text-xs text-slate-500 mb-3 leading-snug">
            {activePin.tagline[lang]}
          </p>
          <Link
            href={withLang(activePin.href)}
            className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-500"
            onClick={() => setActive(null)}
          >
            {lang === "en" ? "View guide →" : "Δες τον οδηγό →"}
          </Link>
        </div>
      )}

      
    </div>
  );
}
