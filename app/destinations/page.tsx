import Link from 'next/link';
import Image from 'next/image';

export default function DestinationsPage() {
  // Mock data for the overall destinations list
  const destinations = [
    { name: 'Santorini', slug: 'santorini', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop' },
    { name: 'Mykonos', slug: 'mykonos', image: 'https://images.unsplash.com/photo-1601581875306-0b1a039bbf8a?q=80&w=800&auto=format&fit=crop' },
    { name: 'Crete', slug: 'crete', image: 'https://images.unsplash.com/photo-1526392060635-9d60198d3de3?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <h1 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-slate-400">
        Explore Greece
      </h1>
      <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
        Discover the most breathtaking destinations, hidden gems, and authentic local experiences across the Aegean and Ionian seas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {destinations.map((dest) => (
          <Link href={`/destinations/${dest.slug}`} key={dest.slug}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer border border-slate-200 shadow-xl">
              <Image 
                src={dest.image} 
                alt={dest.name} 
                fill
                className="absolute inset-0 object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60/90 via-slate-900/40 to-transparent transition-opacity duration-300"></div>
              
              <div className="absolute bottom-8 left-8 transition-transform duration-300 group-hover:-translate-y-2">
                <h2 className="text-3xl font-bold text-slate-900 drop-shadow-xl mb-2">{dest.name}</h2>
                <div className="flex items-center text-indigo-800 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Explore <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
