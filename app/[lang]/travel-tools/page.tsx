import { promises as fs } from 'fs';
import path from 'path';
import SiteHeader from '../../../components/site-header';
import DecisionEngineClient from '../../../components/decision-engine-client';

type Props = { params: Promise<{ lang: string }> };

async function getAllDestinations() {
  const dataDir = path.join(process.cwd(), 'data', 'destinations');
  const files = await fs.readdir(dataDir);
  const data = await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(path.join(dataDir, file), 'utf8');
      return JSON.parse(content);
    })
  );
  return data;
}

export default async function TravelToolsPage({ params }: Props) {
  const { lang } = await params;
  const destinations = await getAllDestinations();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Το κεντρικό μενού (Header) του site */}
      <SiteHeader />
      
      {/* Premium Grecian Sky Blue Hero Section (More Intense Aegean Blue) */}
      <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-700 text-white pt-40 pb-32 px-6 text-center shadow-lg relative overflow-hidden">
        {/* Subtle decorative circles for depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-200/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
            Travel Decision Tool
          </h1>
          <p className="text-lg md:text-xl font-medium text-sky-50 leading-relaxed max-w-2xl mx-auto opacity-95">
            Compare Greek destinations side-by-side, analyze real-world budgets, and discover where to head next.
          </p>
        </div>
      </div>

      {/* Main Tool Content Container - Slightly overlapping the hero block */}
      <main className="container mx-auto px-6 pb-24 -mt-12 relative z-10">
        <DecisionEngineClient destinations={destinations} lang={lang} />
      </main>
    </div>
  );
}
