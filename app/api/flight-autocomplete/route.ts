import { NextRequest, NextResponse } from "next/server";

const SERPAPI_KEY = process.env.SERPAPI_KEY;

export async function GET(req: NextRequest) {
  if (!SERPAPI_KEY) {
    return NextResponse.json({ error: "SerpAPI key not configured" }, { status: 500 });
  }

  const q = req.nextUrl.searchParams.get("q");
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  try {
    const params = new URLSearchParams({
      engine: "google_flights_autocomplete",
      api_key: SERPAPI_KEY,
      q,
    });

    const res = await fetch(`https://serpapi.com/search?${params.toString()}`);
    if (!res.ok) {
      return NextResponse.json({ results: [] }, { status: 502 });
    }

    const data = await res.json();
    const airports = (data.airports ?? []).map((a: Record<string, unknown>) => ({
      id: a.id,
      name: a.name,
      airport_name: a.airport_name,
      city: a.city,
      type: a.type,
    }));

    return NextResponse.json({ results: airports });
  } catch {
    return NextResponse.json({ results: [] });
  }
}
