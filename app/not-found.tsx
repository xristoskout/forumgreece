"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const isGreek = pathname?.startsWith("/el") ?? false;

  return (
    <main className="min-h-[85vh] flex flex-col items-center justify-center p-6 relative overflow-hidden text-slate-900">
      <div className="relative z-10 w-full max-w-2xl text-center space-y-8 animate-fade-up">

        <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 animate-float">
          {/* 404 graphic */}
          <div className="absolute inset-0 flex items-center justify-center text-[120px] sm:text-[150px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-cyan-400 drop-shadow-xl select-none leading-none">
            404
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            {isGreek ? "Η σελίδα χάθηκε στο πέλαγος..." : "Page lost at sea..."}
          </h1>
          <p className="text-lg text-slate-500 max-w-lg mx-auto">
            {isGreek
              ? "Μάλλον η σελίδα που ψάχνετε έχει αλλάξει διεύθυνση ή δεν υπάρχει πια. Ας επιστρέψουμε στη στεριά!"
              : "It seems the page you're looking for has moved or no longer exists. Let's get you back to safe shores!"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href={isGreek ? "/el" : "/en"}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:-translate-y-1 shadow-lg shadow-indigo-200"
          >
            {isGreek ? "Αρχική Σελίδα" : "Back to Home"}
          </Link>
          <Link
            href={isGreek ? "/el/#destinations" : "/en/#destinations"}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-white border border-slate-200 px-8 py-4 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:-translate-y-1 shadow-sm"
          >
            {isGreek ? "Προορισμοί" : "Explore Destinations"}
          </Link>
        </div>
      </div>
    </main>
  );
}
