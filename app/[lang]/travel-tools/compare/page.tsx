import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import ComparisonToolClient from '../../../components/comparison-tool-client';

type Props = { 
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ s1?: string; s2?: string }>;
};

async function loadData(slug: string) {
  const filePath = path.join(process.cwd(), 'data', 'destinations', `${slug}.json`);
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch { return null; }
}

export default async function ComparePage({ params, searchParams }: Props) {
  const { s1, s2 } = await searchParams;
  if (!s1 || !s2) return <main className="container mx-auto p-12 text-center text-xl">Please select two destinations (e.g. ?s1=santorini&s2=athens)</main>;

  const d1 = await loadData(s1);
  const d2 = await loadData(s2);

  if (!d1 || !d2) notFound();

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Travel Decision Tool</h1>
      <ComparisonToolClient d1={d1} d2={d2} />
    </main>
  );
}
