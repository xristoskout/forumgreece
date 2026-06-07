"use client";

import Image from "next/image";
import Link from "next/link";
import { type TourExperience, type Lang } from "../lib/content";

type Props = {
  tour: TourExperience;
  lang: Lang;
};

export default function TourCard({ tour, lang }: Props) {
  const { slug, title, shortDescription, destination, typeLabel, duration, priceLabel, rating, reviewCount, image, badge } = tour;

  const badgeStyles = {
    bestseller: "bg-amber-500 text-white",
    new: "bg-emerald-500 text-white",
    "local-favorite": "bg-indigo-600 text-white",
    exclusive: "bg-rose-600 text-white"
  };

  const badgeLabels = {
    bestseller: { en: "Bestseller", el: "Bestseller" },
    new: { en: "New", el: "Νέο" },
    "local-favorite": { en: "Local Favorite", el: "Αγαπημένο των Ντόπιων" },
    exclusive: { en: "Exclusive", el: "Αποκλειστικό" }
  };

  const bookingHref = tour.bookingUrl || `https://www.viator.com/search?query=${encodeURIComponent(tour.destination + " " + tour.title.en)}&pid=P00298401&mcid=42383`;

  return (
    <a
      href={bookingHref}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title[lang]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Top left badge */}
        {badge && (
          <span className={`absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase shadow-md ${badgeStyles[badge]}`}>
            {badgeLabels[badge][lang]}
          </span>
        )}

        {/* Top right destination tag */}
        <span className="absolute top-4 right-4 z-10 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold text-slate-800 shadow-md">
          📍 {destination}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Type & Duration Header */}
        <div className="flex items-center justify-between gap-2 text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-2.5">
          <span>{typeLabel[lang]}</span>
          <span className="flex items-center gap-1 text-slate-500 font-medium">
            ⏱️ {duration}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-800 transition-colors line-clamp-2 leading-snug mb-2">
          {title[lang]}
        </h4>

        {/* Description */}
        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4 flex-1">
          {shortDescription[lang]}
        </p>

        {/* Rating and Price Footer */}
        <div className="border-t border-slate-100 pt-4 mt-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-500 text-sm">★</span>
            <span className="text-sm font-bold text-slate-800">{rating.toFixed(1)}</span>
            <span className="text-xs text-slate-400">({reviewCount})</span>
          </div>
          
          <div className="text-right">
            <span className="text-[10px] block font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1">
              {lang === "en" ? "Price" : "Τιμή"}
            </span>
            <span className="text-base font-extrabold text-slate-900">
              {priceLabel[lang]}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
