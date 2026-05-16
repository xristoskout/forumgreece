"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { Lang } from "../lib/content";

type Pin = {
  id: string;
  x: number;
  y: number;
  href: string;
  label: { en: string; el: string };
  tagline: { en: string; el: string };
};

type Props = {
  lang: Lang;
  withLang: (path: string) => string;
};

const PINS: Pin[] = [
  { id: "santorini", x: 70.5, y: 69, href: "/destinations/santorini", label: { en: "Santorini", el: "Σαντορίνη" }, tagline: { en: "Iconic caldera views", el: "Εμβληματική θέα Καλντέρας" } },
  { id: "mykonos", x: 68, y: 58, href: "/destinations/mykonos", label: { en: "Mykonos", el: "Μύκονος" }, tagline: { en: "Cosmopolitan island life", el: "Κοσμοπολίτικη νησιωτική ζωή" } },
  { id: "paros", x: 65, y: 64, href: "/destinations/paros", label: { en: "Paros", el: "Πάρος" }, tagline: { en: "Beaches & traditional charm", el: "Παραλίες & παραδοσιακή γοητεία" } },
  { id: "milos", x: 58, y: 62, href: "/destinations/milos", label: { en: "Milos", el: "Μήλος" }, tagline: { en: "Unique coastline & caves", el: "Μοναδικές ακτές & σπηλιές" } },
  { id: "crete", x: 62, y: 78, href: "/destinations/crete", label: { en: "Crete", el: "Κρήτη" }, tagline: { en: "A world of its own", el: "Ένας ολόκληρος κόσμος" } },
  { id: "chania", x: 52, y: 76, href: "/destinations/chania", label: { en: "Chania", el: "Χανιά" }, tagline: { en: "Venetian harbor & old town", el: "Ενετικό λιμάνι & παλιά πόλη" } },
  { id: "rhodes", x: 85, y: 70, href: "/destinations/rhodes", label: { en: "Rhodes", el: "Ρόδος" }, tagline: { en: "Medieval old town & beaches", el: "Μεσαιωνική πόλη & παραλίες" } },
  { id: "patmos", x: 78, y: 55, href: "/destinations/patmos", label: { en: "Patmos", el: "Πάτμος" }, tagline: { en: "Sacred island & quiet bays", el: "Ιερό νησί & ήσυχοι όρμοι" } },
  { id: "corfu", x: 18, y: 22, href: "/destinations/corfu", label: { en: "Corfu", el: "Κέρκυρα" }, tagline: { en: "Lush green & elegant", el: "Καταπράσινο & κομψό" } },
  { id: "kefalonia", x: 24, y: 38, href: "/destinations/kefalonia", label: { en: "Kefalonia", el: "Κεφαλονιά" }, tagline: { en: "Dramatic scenery & beaches", el: "Εντυπωσιακά τοπία & παραλίες" } },
  { id: "zakynthos", x: 26, y: 48, href: "/destinations/zakynthos", label: { en: "Zakynthos", el: "Ζάκυνθος" }, tagline: { en: "Iconic shipwreck beach", el: "Εμβληματικό Ναυάγιο" } },
  { id: "lesvos", x: 78, y: 30, href: "/destinations/lesvos", label: { en: "Lesvos", el: "Λέσβος" }, tagline: { en: "Food & tradition", el: "Γαστρονομία & παράδοση" } },
  { id: "athens", x: 44, y: 46, href: "/destinations/athens", label: { en: "Athens", el: "Αθήνα" }, tagline: { en: "Ancient & modern capital", el: "Αρχαία & σύγχρονη πρωτεύουσα" } },
  { id: "thessaloniki", x: 52, y: 16, href: "/destinations/thessaloniki", label: { en: "Thessaloniki", el: "Θεσσαλονίκη" }, tagline: { en: "Food & culture hub", el: "Κέντρο γαστρονομίας & πολιτισμού" } },
  { id: "halkidiki", x: 58, y: 20, href: "/destinations/halkidiki", label: { en: "Halkidiki", el: "Χαλκιδική" }, tagline: { en: "Turquoise waters & pine", el: "Γαλαζοπράσινα νερά & πεύκα" } },
  { id: "nafplio", x: 43, y: 50, href: "/destinations/nafplio", label: { en: "Nafplio", el: "Ναύπλιο" }, tagline: { en: "Romantic seaside town", el: "Ρομαντική παραθαλάσσια πόλη" } },
  { id: "monemvasia", x: 47, y: 56, href: "/destinations/monemvasia", label: { en: "Monemvasia", el: "Μονεμβασία" }, tagline: { en: "Medieval fortress town", el: "Μεσαιωνική καστροπολιτεία" } },
  { id: "parga", x: 26, y: 33, href: "/destinations/parga", label: { en: "Parga", el: "Πάργα" }, tagline: { en: "Colorful coastal gem", el: "Πολύχρωμο παραθαλάσσιο στολίδι" } },
  { id: "meteora", x: 35, y: 28, href: "/destinations/meteora", label: { en: "Meteora", el: "Μετέωρα" }, tagline: { en: "Monasteries in the sky", el: "Μοναστήρια στον ουρανό" } },
  { id: "delphi", x: 38, y: 40, href: "/destinations/delphi", label: { en: "Delphi", el: "Δελφοί" }, tagline: { en: "Center of the ancient world", el: "Κέντρο του αρχαίου κόσμου" } },
  { id: "patras", x: 30, y: 41, href: "/destinations/patras", label: { en: "Patras", el: "Πάτρα" }, tagline: { en: "Gateway to the Ionian", el: "Πύλη προς το Ιόνιο" } },
];

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

  const activePin = active ? PINS.find((p) => p.id === active) : null;

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

      {PINS.map((pin) => (
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
