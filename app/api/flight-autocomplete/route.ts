import { NextRequest, NextResponse } from "next/server";

const SERPAPI_KEY = process.env.SERPAPI_KEY;

export async function GET(req: NextRequest) {
  if (!SERPAPI_KEY) {
    return NextResponse.json({ error: "SerpAPI key not configured" }, { status: 500 });
  }

  const q = req.nextUrl.searchParams.get("q");
  if (!q || q.length < 2) {
    return NextResponse.json({ suggestions: [] });
  }

  try {
    const params = new URLSearchParams({
      engine: "google_flights_autocomplete",
      api_key: SERPAPI_KEY,
      q,
    });

    const res = await fetch(`https://serpapi.com/search?${params.toString()}`);
    if (!res.ok) {
      return NextResponse.json({ suggestions: [] }, { status: 502 });
    }

    const data = await res.json();
    const suggestions = (data.suggestions ?? []).map((s: Record<string, unknown>) => ({
      name: s.name,
      type: s.type,
      description: s.description,
      id: s.id,
      airports: (s.airports as Array<Record<string, unknown>> ?? []).map((a) => ({
        id: a.id,
        name: a.name,
        city: a.city,
        distance: a.distance,
      })),
    }));

    return NextResponse.json({ suggestions });
  } catch {
    return NextResponse.json({ suggestions: [] });
  }
}
