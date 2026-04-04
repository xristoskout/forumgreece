import React from 'react';
import Image from 'next/image';
import WeatherWidget from '@/components/WeatherWidget';
import BusinessCard from '@/components/BusinessCard';
import GlassCard from '@/components/ui/GlassCard';

export default async function DestinationPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  // Mocking the specific destination based on slug
  const destinationName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const isSantorini = slug === 'santorini';
  
  const heroImage = isSantorini 
    ? 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1920&auto=format&fit=crop'
    : 'https://images.unsplash.com/photo-1601581875306-0b1a039bbf8a?q=80&w=1920&auto=format&fit=crop';

  const businesses = [
    {
      name: 'Oia Sunset Villas',
      category: 'Accommodation',
      imageUrl: 'https://images.unsplash.com/photo-1570213489059-0aac6626cade?q=80&w=800&auto=format&fit=crop',
      description: 'Luxury villas offering the best sunset views in the world. Experience unmatched comfort with private infinity pools.'
    },
    {
      name: 'Ammoudi Fish Tavern',
      category: 'Food & Dining',
      imageUrl: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop',
      description: 'Fresh seafood caught daily, served right by the crystal clear waters. A true gastronomic journey into Greek cuisine.'
    },
    {
      name: 'Caldera Yachting',
      category: 'Activities',
      imageUrl: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=800&auto=format&fit=crop',
      description: 'Experience the volcano and hot springs on a luxury catamaran. Includes local wine and traditional Greek BBQ onboard.'
    }
  ];

  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[65vh] w-full flex items-end pb-16 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={destinationName} fill className="object-cover scale-105 animate-slow-zoom" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-slate-50"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-6 drop-shadow-xl shadow-black/50">
              {destinationName}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              Experience the breathtaking beauty, luxury, and authentic local culture of one of the world's most spectacular destinations in the Aegean.
            </p>
          </div>
          
          <div className="w-full md:w-72 shadow-xl shadow-indigo-500/10 rounded-2xl">
            <WeatherWidget location={destinationName} temp={28} condition="Sunny" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column (Main Info) */}
        <div className="lg:col-span-8 space-y-16">
          <section>
            <h2 className="text-3xl font-semibold mb-8 flex items-center text-slate-900">
              <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full mr-4 shadow-xl shadow-black/50"></span>
              Local Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businesses.map((biz, idx) => (
                <BusinessCard key={idx} {...biz} />
              ))}
            </div>
          </section>
          
          {/* Highlight Section (Placeholder) */}
          <section>
            <GlassCard className="relative overflow-hidden border-indigo-500/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">Destination Highlights</h2>
              <p className="text-slate-600 leading-relaxed">
                Known for its spectacular sunsets, whitewashed villages, and dramatic volcanic landscapes. Don't miss exploring the winding alleys and indulging in the local gastronomy.
              </p>
            </GlassCard>
          </section>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:col-span-4 space-y-8">
          <GlassCard className="sticky top-8 border-t border-l border-slate-300">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-indigo-700">❖</span> About {destinationName}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              A jewel of the Aegean Sea, perfect for romantic getaways and luxury travel experiencing unique architecture and pristine waters.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-slate-500">Best time to visit</span>
                <span className="font-medium text-slate-900 bg-white px-3 py-1 rounded-full">May - Oct</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-slate-500">Language</span>
                <span className="font-medium text-slate-900">Greek, English</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-slate-500">Currency</span>
                <span className="font-medium text-slate-900">Euro (€)</span>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-slate-900 py-3.5 rounded-xl font-semibold shadow-xl shadow-black/50 hover:shadow-xl shadow-black/50 transition-all duration-300 group">
              Plan Your Trip
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">🚀</span>
            </button>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
