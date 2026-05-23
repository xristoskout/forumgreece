'use client';
import { useState } from 'react';

const CURRENCIES = { EUR: 1, USD: 1.05, GBP: 0.85, CNY: 7.6 };

export default function ComparisonToolClient({ d1, d2 }: { d1: any, d2: any }) {
  const [adults, setAdults] = useState(2);
  const [days, setDays] = useState(5);
  const [style, setStyle] = useState<'budget' | 'mid' | 'luxury'>('mid');
  const [month, setMonth] = useState('july');

  const calculateTotal = (d: any) => {
    const multiplier = d.seasonality[month]?.price_multiplier || 1;
    const base = d.pricing_base[`${style}_daily`] * multiplier;
    const rooms = Math.ceil(adults / 2);
    const hotel = (base * 0.6) * rooms;
    const food = (base * 0.3) * adults;
    const trans = (base * 0.1) * adults;
    return { total: (hotel + food + trans) * days, hotel, food, trans };
  };

  const cost1 = calculateTotal(d1);
  const cost2 = calculateTotal(d2);
  const diff = cost1.total - cost2.total;

  return (
    <div className="space-y-8">
      {/* Input Controls */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-100 p-6 rounded-2xl">
        <select value={adults} onChange={e => setAdults(Number(e.target.value))} className="p-2 rounded-lg"><option value={1}>1 Adult</option><option value={2}>2 Adults</option></select>
        <input type="number" value={days} onChange={e => setDays(Number(e.target.value))} className="p-2 rounded-lg" />
        <select value={style} onChange={e => setStyle(e.target.value as any)} className="p-2 rounded-lg"><option value="budget">Budget</option><option value="mid">Mid-range</option><option value="luxury">Luxury</option></select>
        <select value={month} onChange={e => setMonth(e.target.value)} className="p-2 rounded-lg capitalize">{Object.keys(d1.seasonality).map(m => <option key={m} value={m}>{m}</option>)}</select>
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {[d1, d2].map((d, i) => {
          const cost = i === 0 ? cost1 : cost2;
          return (
            <div key={d.id} className="border p-6 rounded-3xl shadow-sm bg-white">
                <h2 className="text-2xl font-bold mb-4">{d.name}</h2>
                <div className="text-4xl font-extrabold mb-6">€{Math.round(cost.total)}</div>
                <div className="space-y-2 text-sm text-slate-600">
                    <p>Accommodation: €{Math.round(cost.hotel)}</p>
                    <p>Food: €{Math.round(cost.food)}</p>
                    <p>Transport: €{Math.round(cost.trans)}</p>
                </div>
            </div>
          );
        })}
      </div>

      {/* Recommendation Section */}
      <div className="bg-indigo-900 text-white p-8 rounded-3xl mt-8">
        <h3 className="text-2xl font-bold mb-2">Recommendation</h3>
        <p className="text-xl">
           {Math.abs(diff) > 0 
             ? `${diff > 0 ? d2.name : d1.name} is cheaper by €${Math.abs(Math.round(diff))}.` 
             : "Both destinations cost about the same."}
        </p>
      </div>
    </div>
  );
}
