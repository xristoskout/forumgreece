import { NextRequest, NextResponse } from "next/server";

const SERPAPI_KEY = process.env.SERPAPI_KEY;

export async function GET(req: NextRequest) {
  if (!SERPAPI_KEY) {
    return NextResponse.json({ error: "SerpAPI key not configured" }, { status: 500 });
  }

  const from = req.nextUrl.searchParams.get("from");
  const to = req.nextUrl.searchParams.get("to");
  const outboundDate = req.nextUrl.searchParams.get("outbound_date");
  const returnDate = req.nextUrl.searchParams.get("return_date");
  const passengers = req.nextUrl.searchParams.get("passengers") || "1";
  const travelClass = req.nextUrl.searchParams.get("travel_class") || "1";
  const type = req.nextUrl.searchParams.get("type") || "1";
  const currency = req.nextUrl.searchParams.get("currency") || "EUR";

  if (!from || !to || !outboundDate) {
    return NextResponse.json(
      { error: "Missing required params: from, to, outbound_date" },
      { status: 400 }
    );
  }

  const params = new URLSearchParams({
    engine: "google_flights",
    api_key: SERPAPI_KEY,
    departure_id: from.toUpperCase(),
    arrival_id: to.toUpperCase(),
    outbound_date: outboundDate,
    type,
    travel_class: travelClass,
    passengers,
    currency,
    hl: "en",
    gl: "us",
  });

  if (returnDate && type === "1") {
    params.set("return_date", returnDate);
  }

  try {
    const res = await fetch(`https://serpapi.com/search?${params.toString()}`);
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: `SerpAPI error: ${res.status}`, details: text }, { status: 502 });
    }
    const data = await res.json();

    const bestFlights = data.best_flights ?? [];
    const otherFlights = data.other_flights ?? [];

    const mapFlight = (f: Record<string, unknown>) => {
      const flights = (f.flights as Array<Record<string, unknown>>) ?? [];
      const layovers = (f.layovers as Array<Record<string, unknown>>) ?? [];
      const carbon = f.carbon_emissions as Record<string, unknown> | undefined;

      return {
        price: f.price,
        type: f.type,
        airline_logo: f.airline_logo,
        total_duration: f.total_duration,
        flights: flights.map((leg) => ({
          departure_airport: leg.departure_airport,
          arrival_airport: leg.arrival_airport,
          duration: leg.duration,
          airline: leg.airline,
          airline_logo: leg.airline_logo,
          flight_number: leg.flight_number,
          travel_class: leg.travel_class,
          airplane: leg.airplane,
          legroom: leg.legroom,
          extensions: leg.extensions,
          overnight: leg.overnight,
          often_delayed: leg.often_delayed_by_over_30_min,
        })),
        layovers: layovers.map((l) => ({
          name: l.name,
          id: l.id,
          duration: l.duration,
          overnight: l.overnight,
        })),
        carbon_emissions: carbon
          ? {
              this_flight: carbon.this_flight,
              typical_for_this_route: carbon.typical_for_this_route,
              difference_percent: carbon.difference_percent,
            }
          : undefined,
        google_flights_url: data.search_metadata?.google_flights_url,
      };
    };

    const results = [
      ...bestFlights.map(mapFlight),
      ...otherFlights.map(mapFlight),
    ];

    return NextResponse.json(
      {
        results,
        search_metadata: data.search_parameters,
        google_flights_url: data.search_metadata?.google_flights_url,
      },
      {
        headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
      }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to search flights", details: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
