'use client';

import { useState, useEffect } from 'react';

type PricingBase = {
  budget_daily: number;
  mid_daily: number;
  luxury_daily: number;
};

type Seasonality = Record<string, { price_multiplier: number }>;

const CURRENCIES = { EUR: 1, USD: 1.05, GBP: 0.85, CNY: 7.6 };

export default function BudgetCalculatorClient({ 
  pricingBase, 
  seasonality = {} 
}: { 
  pricingBase: PricingBase, 
  seasonality: Seasonality 
}) {
  const [mounted, setMounted] = useState(false);
  const [days, setDays] = useState(3);
  const [adults, setAdults] = useState(2);
  const [style, setStyle] = useState<'budget' | 'mid' | 'luxury'>('mid');
  const [month, setMonth] = useState<string>('');
  const [currency, setCurrency] = useState<'EUR' | 'USD' | 'GBP' | 'CNY'>('EUR');

  useEffect(() => {
    const months = Object.keys(seasonality);
    if (months.length > 0) {
      setTimeout(() => setMonth(months[0]), 0);
    }
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, [seasonality]);

  // Σταθερό height για αποφυγή hydration mismatch
  if (!mounted || !month) return <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 max-w-lg h-96" />;

  const priceMultiplier = seasonality[month]?.price_multiplier || 1;
  const baseDaily = pricingBase[`${style}_daily`] * priceMultiplier;
  
  const roomsNeeded = Math.ceil(adults / 2);
  const hotelCost = (baseDaily * 0.6) * roomsNeeded;
  const mealCost = (baseDaily * 0.3) * adults;
  const transportCost = (baseDaily * 0.1) * adults;
  
  const dailyTotal = (hotelCost + mealCost + transportCost) * CURRENCIES[currency];
  const total = dailyTotal * days;
  
  const getSymbol = (c: string) => c === 'EUR' ? '€' : c === 'USD' ? '$' : c === 'GBP' ? '£' : '¥';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 max-w-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Budget Trip Planner</h2>
        <select value={currency} onChange={(e) => setCurrency(e.target.value as 'EUR' | 'USD' | 'GBP' | 'CNY')} className="bg-slate-50 border rounded-lg p-1">
          <option value="EUR">EUR (€)</option>
          <option value="USD">USD ($)</option>
          <option value="GBP">GBP (£)</option>
          <option value="CNY">CNY (¥)</option>
        </select>
      </div>

      <div className="space-y-4 mb-8">
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="text-sm text-slate-500">Adults</label>
                <select value={adults} onChange={(e) => setAdults(Number(e.target.value))} className="w-full p-2 border rounded-lg">
                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
            </div>
            <div>
                <label className="text-sm text-slate-500">Month</label>
                <select value={month} onChange={(e) => setMonth(e.target.value)} className="w-full p-2 border rounded-lg capitalize">
                    {Object.keys(seasonality).map(m => <option key={m} value={m}>{m}</option>)}
                </select>
            </div>
        </div>
        <div>
          <label className="text-sm text-slate-500">Days: {days}</label>
          <input type="range" min="1" max="14" value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
        </div>
        <div>
          <label className="text-sm text-slate-500">Travel Style</label>
          <select value={style} onChange={(e) => setStyle(e.target.value as 'budget' | 'mid' | 'luxury')} className="w-full p-2 border rounded-lg">
            <option value="budget">Budget</option>
            <option value="mid">Mid-range</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm"><span>Accommodation ({roomsNeeded} room{roomsNeeded > 1 ? 's' : ''})</span><span>{getSymbol(currency)}{Math.round(hotelCost * CURRENCIES[currency])}/day</span></div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
          <div style={{ width: `60%` }} className="bg-indigo-500"></div>
          <div style={{ width: `30%` }} className="bg-teal-500"></div>
          <div style={{ width: `10%` }} className="bg-amber-500"></div>
        </div>
        <div className="flex gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> Accommodation</div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-teal-500"></span> Food</div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Transport</div>
        </div>
      </div>

      <div className="text-3xl font-extrabold text-indigo-900 border-t pt-4">
        {getSymbol(currency)}{Math.round(total)}
      </div>
    </div>
  );
}
