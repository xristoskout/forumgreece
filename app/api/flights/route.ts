import { NextRequest, NextResponse } from "next/server";
import { fetchFlights } from "../../../lib/flights";
import { checkRateLimit, getIP } from "../../../lib/rate-limit";

export async function GET(req: NextRequest) {
  const ip = getIP(req);
  const { allowed } = await checkRateLimit(`flights:${ip}`, 30, 60_000);
  if (!allowed) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const airport = req.nextUrl.searchParams.get("airport");
  if (!airport || !/^[A-Z]{4}$/.test(airport)) {
    return NextResponse.json(
      { error: "Invalid airport ICAO code (e.g. LGAV)" },
      { status: 400 }
    );
  }

  const data = await fetchFlights(airport);
  if (!data) {
    return NextResponse.json(
      { error: "Failed to fetch flights" },
      { status: 502 }
    );
  }

  return NextResponse.json(data, {
    headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
  });
}
