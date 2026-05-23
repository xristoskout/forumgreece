'use client';
import { useState, useEffect } from 'react';

const CURRENCIES = { EUR: 1, USD: 1.05, GBP: 0.85, CNY: 7.6 };

export default function DecisionEngineClient({ destinations, lang }: any) {
  const [mounted, setMounted] = useState(false);
  const [s1, setS1] = useState(destinations.find((d: any) => d.slug === 'santorini') || destinations[0]);
  const [s2, setS2] = useState(destinations.find((d: any) => d.slug === 'athens') || destinations[1]);
  const [adults, setAdults] = useState(2);
  const [days, setDays] = useState(5);
  const [style, setStyle] = useState<'budget' | 'mid' | 'luxury'>('mid');
  const [month, setMonth] = useState('may');
  const [currency, setCurrency] = useState<'EUR' | 'USD' | 'GBP' | 'CNY'>('EUR');

  useEffect(() => { setMounted(true); }, []);

  const calc = (d: any) => {
    const mult = d.seasonality[month]?.price_multiplier || 1;
    const base = d.pricing_base[`${style}_daily`] * mult;
    const rooms = Math.ceil(adults / 2);
    const hotel = (base * 0.6) * rooms;
    const food = (base * 0.3) * adults;
    const trans = (base * 0.1) * adults;
    const total = (hotel + food + trans) * days * CURRENCIES[currency];
    const scoreVals = d.scores ? Object.values(d.scores) as any[] : [];
    const score = scoreVals.length > 0 ? scoreVals.reduce((acc, s) => acc + s.value, 0) / scoreVals.length : 0;
    return { total, hotel: hotel * CURRENCIES[currency], food: food * CURRENCIES[currency], trans: trans * CURRENCIES[currency], score: score.toFixed(1) };
  };

  const c1 = calc(s1);
  const c2 = calc(s2);
  const diff = c1.total - c2.total;
  const sym = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '¥';

  // Διαβάζουμε τις URL παραμέτρους κατά το mount (Pre-select logic)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramS1 = params.get('s1');
    const paramS2 = params.get('s2');
    
    if (paramS1) {
      const found = destinations.find((d: any) => d.slug === paramS1);
      if (found) setS1(found);
    }
    if (paramS2) {
      const found = destinations.find((d: any) => d.slug === paramS2);
      if (found) setS2(found);
    }
  }, [destinations]);

  if (!mounted) return <div className="max-w-6xl mx-auto p-6 h-[800px]" />;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12 bg-transparent">
      {/* 1. Trip Parameters Panel */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold mb-6 text-slate-800">Trip Parameters</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Destination 1</label>
                <select onChange={e => setS1(destinations.find((d: any) => d.slug === e.target.value))} value={s1.slug} className="w-full p-3 border rounded-xl bg-slate-50">{destinations.map((d: any) => <option key={d.id} value={d.slug}>{d.name}</option>)}</select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Destination 2</label>
                <select onChange={e => setS2(destinations.find((d: any) => d.slug === e.target.value))} value={s2.slug} className="w-full p-3 border rounded-xl bg-slate-50">{destinations.map((d: any) => <option key={d.id} value={d.slug}>{d.name}</option>)}</select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Adults</label>
                <select value={adults} onChange={e => setAdults(Number(e.target.value))} className="w-full p-3 border rounded-xl bg-slate-50">{[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}</select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Nights</label>
                <input type="number" value={days} onChange={e => setDays(Number(e.target.value))} className="w-full p-3 border rounded-xl bg-slate-50" />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Month</label>
                <select value={month} onChange={e => setMonth(e.target.value)} className="w-full p-3 border rounded-xl capitalize bg-slate-50">{Object.keys(s1.seasonality).map(m => <option key={m} value={m}>{m}</option>)}</select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Budget Style</label>
                <select value={style} onChange={e => setStyle(e.target.value as any)} className="w-full p-3 border rounded-xl bg-slate-50">
                    <option value="budget">Budget</option>
                    <option value="mid">Mid-range</option>
                    <option value="luxury">Luxury</option>
                </select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Currency</label>
                <select value={currency} onChange={e => setCurrency(e.target.value as any)} className="w-full p-3 border rounded-xl bg-slate-50">{Object.keys(CURRENCIES).map(c => <option key={c} value={c}>{c}</option>)}</select>
            </div>
        </div>
      </div>

      {/* 2. Budget & Visual Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {[s1, s2].map((d, i) => {
          const cost = i === 0 ? c1 : c2;
          const totalCost = cost.hotel + cost.food + cost.trans;
          return (
            <div key={d.id} className="border p-8 rounded-3xl bg-white shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold mb-2">{d.name}</h3>
                    <div className="text-4xl font-extrabold text-indigo-700 mb-2">{sym}{Math.round(cost.total)}</div>
                    <div className="text-sm font-semibold text-slate-500 mb-6">Overall Score: {cost.score}/10</div>
                </div>

                <div className="space-y-4 border-t pt-6">
                    <div className="flex justify-between text-sm"><span>Accommodation</span> <span className="font-bold">{sym}{Math.round(cost.hotel)}</span></div>
                    <div className="flex justify-between text-sm"><span>Food & Drink</span> <span className="font-bold">{sym}{Math.round(cost.food)}</span></div>
                    <div className="flex justify-between text-sm"><span>Transport</span> <span className="font-bold">{sym}{Math.round(cost.trans)}</span></div>
                    
                    {/* Visual Segmented Progress Bar */}
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden flex mt-3 shadow-inner">
                      <div style={{ width: `${(cost.hotel / totalCost) * 100}%` }} className="bg-indigo-500 transition-all duration-500"></div>
                      <div style={{ width: `${(cost.food / totalCost) * 100}%` }} className="bg-teal-500 transition-all duration-500"></div>
                      <div style={{ width: `${(cost.trans / totalCost) * 100}%` }} className="bg-amber-500 transition-all duration-500"></div>
                    </div>
                    
                    {/* Color Legend */}
                    <div className="flex gap-4 text-xs text-slate-500 pt-2 justify-center border-t border-slate-50 mt-4">
                      <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> Accommodation</div>
                      <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span> Food</div>
                      <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Transport</div>
                    </div>
                </div>
            </div>
          );
        })}
      </div>

      {/* 3. Comparison Matrix */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Comparison Matrix</h2>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
            <thead>
                <tr className="border-b"><th className="p-4">Feature</th><th className="p-4">{s1.name}</th><th className="p-4">{s2.name}</th></tr>
            </thead>
            <tbody>
                {/* Δυναμική γραμμή θερμοκρασίας */}
                <tr className="border-b font-semibold text-indigo-900 bg-indigo-50/30">
                    <td className="p-4">Avg Temp ({month})</td>
                    <td className="p-4">{s1.seasonality[month]?.temp ?? 'N/A'}°C</td>
                    <td className="p-4">{s2.seasonality[month]?.temp ?? 'N/A'}°C</td>
                </tr>
                {['family', 'couples', 'nightlife', 'food', 'beaches', 'walking'].map(key => (
                    <tr key={key} className="border-b">
                        <td className="p-4 capitalize font-semibold">{key}</td>
                        <td className="p-4">{s1.scores[key]?.value ?? 0}/10</td>
                        <td className="p-4">{s2.scores[key]?.value ?? 0}/10</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
      
      {/* 4. Pros/Cons & Recommendation */}
      <div className="bg-indigo-900 text-white p-8 rounded-3xl mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
            <h3 className="text-2xl font-bold">Recommendation</h3>
            <p className="text-lg opacity-90 mt-2">
                {Math.abs(diff) < 50 ? "Both options are similarly priced." : 
                `${diff > 0 ? s2.name : s1.name} gives a more budget-friendly trip.`}
            </p>
        </div>
        <div className="text-center bg-white/10 px-6 py-3 rounded-full font-bold">
            Diff: {sym}{Math.abs(Math.round(diff))}
        </div>
      </div>

      {/* 5. Pros/Cons & Insider Tips */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {[s1, s2].map(d => (
            <div key={d.id} className="border p-8 rounded-3xl bg-white shadow-sm">
                <h4 className="font-bold text-lg mb-4 text-indigo-900">Highlights of {d.name}</h4>
                <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">✓ Pros</h5>
                      <ul className="text-slate-700 text-sm space-y-1">{d.content?.pros?.map((p:string) => <li key={p}>✓ {p}</li>) ?? <li>N/A</li>}</ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">✕ Cons</h5>
                      <ul className="text-slate-500 text-sm space-y-1">{d.content?.cons?.map((c:string) => <li key={c}>✕ {c}</li>) ?? <li>N/A</li>}</ul>
                    </div>
                    <div className="border-t pt-4">
                      <h5 className="font-bold text-indigo-800 mb-2">💡 Insider Tips</h5>
                      <ul className="text-slate-600 text-sm space-y-1 italic">{d.content?.insider_tips?.map((t:string) => <li key={t}>"{t}"</li>) ?? <li>No tips yet</li>}</ul>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
