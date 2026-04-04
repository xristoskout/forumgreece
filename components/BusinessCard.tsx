import React from 'react';
import GlassCard from './ui/GlassCard';
import Image from 'next/image';

interface BusinessProps {
  name: string;
  category: string;
  imageUrl: string;
  description: string;
}

export default function BusinessCard({ name, category, imageUrl, description }: BusinessProps) {
  return (
    <GlassCard className="group hover:bg-slate-50 transition-all duration-300 cursor-pointer overflow-hidden p-0 flex flex-col h-full border border-slate-200 hover:border-indigo-200">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-slate-900 border border-slate-300 shadow-lg">
          {category}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900 group-hover:text-indigo-800 transition-colors">{name}</h3>
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">{description}</p>
        </div>
        <div className="mt-6 flex items-center text-indigo-700 text-sm font-medium">
          View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </GlassCard>
  );
}
