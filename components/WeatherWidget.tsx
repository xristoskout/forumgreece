import React from 'react';
import GlassCard from './ui/GlassCard';

export default function WeatherWidget({ location, temp, condition }: { location: string, temp: number, condition: string }) {
  return (
    <GlassCard className="flex items-center justify-between !p-5 bg-gradient-to-br from-white/10 to-transparent border-t border-l border-slate-300">
      <div>
        <p className="text-xs text-indigo-800 font-medium uppercase tracking-wider mb-1">{location}</p>
        <div className="flex items-center">
          <span className="text-4xl font-light text-slate-900">{temp}°C</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-3xl mb-1">{condition === 'Sunny' ? '☀️' : (condition === 'Cloudy' ? '⛅' : '🌞')}</div>
        <p className="text-sm text-slate-600 font-medium">{condition}</p>
      </div>
    </GlassCard>
  );
}
