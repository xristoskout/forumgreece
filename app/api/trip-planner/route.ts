import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { getKnowledgeBase } from '../../../lib/knowledge-base';
import { checkRateLimit, getIP } from '../../../lib/rate-limit';

export const maxDuration = 60;

const MONTHS = [
  'january','february','march','april','may','june',
  'july','august','september','october','november','december'
];

export async function POST(req: Request) {
  let rawText = '';
  try {
    const ip = getIP(req);
    const limit = checkRateLimit(`trip-planner:${ip}`, 5, 60 * 1000);
    if (!limit.allowed) {
      return Response.json({ error: 'Too many requests. Try again later.' }, { status: 429 });
    }

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return Response.json({ error: 'API Key missing' }, { status: 500 });
    }

    const body = await req.json();
    const {
      destinations: selectedSlugs = [],
      days = 5,
      budget = 'mid',
      style = 'balanced',
      month = 'june',
      interests = [],
      lang = 'en',
    } = body;

    if (!Array.isArray(selectedSlugs) || selectedSlugs.length === 0) {
      return Response.json({ error: 'Please select at least one destination' }, { status: 400 });
    }

    const kb = await getKnowledgeBase(lang as 'en' | 'el');
    const validSlugs = new Set(kb.destinations.map(d => d.slug));

    const invalid = selectedSlugs.filter(s => !validSlugs.has(s));
    if (invalid.length > 0) {
      return Response.json({ error: `Invalid destinations: ${invalid.join(', ')}` }, { status: 400 });
    }

    const destDays = Math.max(1, Math.min(30, Number(days) || 5));
    const validMonth = MONTHS.includes(month) ? month : 'june';

    const destData = kb.destinations.filter(d => selectedSlugs.includes(d.slug));
    const hotelData = kb.hotels.filter(h => selectedSlugs.includes(h.slug));
    const foodData = kb.restaurants.filter(r => selectedSlugs.some(s => r.place?.toLowerCase().includes(s)));
    const tourData = kb.tours.filter(t => selectedSlugs.some(s => t.place?.toLowerCase().includes(s)));
    const businessData = kb.businesses.filter(b => selectedSlugs.some(s => b.place?.toLowerCase().includes(s) || b.landingSlug?.toLowerCase().includes(s)));

    const styleGuide: Record<string, { pace: string; activities: string }> = {
      relaxed: { pace: 'slow, 1-2 activities per day', activities: 'leisurely mornings, long lunches, free afternoons' },
      balanced: { pace: 'moderate, 2-3 activities per day', activities: 'morning sightseeing, lunch break, afternoon exploration' },
      packed: { pace: 'fast, 3-4 activities per day', activities: 'early starts, full-day itinerary, evening activities included' },
    };

    const ctx = JSON.stringify({ destinations: destData, hotels: hotelData, restaurants: foodData, tours: tourData, businesses: businessData });

    const systemPrompt = `You are the GoGreeceNow AI Trip Planner. Generate a detailed day-by-day itinerary.

RULES:
1. Output ONLY valid JSON. No markdown formatting outside the JSON fields, no code fences (```json), and no conversational explanations.
2. Every activity must link to a GoGreeceNow page when relevant using exact URL structures:
   - /${lang}/destinations/[slug]
   - /${lang}/hotels/[slug]
   - /${lang}/eat-drink/[slug]
   - /${lang}/tours/[slug]
   - /${lang}/businesses/[slug]
   CRITICAL: NEVER use /restaurants/ in URLs (always use /eat-drink/). NEVER link to /guides/ pages.
3. Use the provided KNOWLEDGE BASE for all suggestions. If data for a specific request is missing, supplement it using general expert Greece travel knowledge.
4. Ensure travel times, geolocations, and daily itineraries are strictly realistic. Do not group distant locations in the same day.
5. Use exact budget labels in the JSON payload: budget="low-cost", mid="middle-range", luxury="premium".
6. ADVERTISING PARTNERS (CRITICAL): You must include the advertising businesses provided in the KNOWLEDGE BASE for the chosen destination. Incorporate them naturally into 'activities', 'mealSuggestions', 'transportation', 'accommodation', or 'tips'. If there are more than 5 businesses for a destination, prioritize and include at least the first 5.
7. Enrich each day's description and activities by using the specific names from the "beaches" array and "attractions" array provided for each destination in the KNOWLEDGE BASE.
8. ACCOMMODATION LINKS: The "accommodation" field MUST contain markdown links.
   - Standard format: [Hotel Name](/${lang}/hotels/[slug])
   - EXCEPTION: If the hotel comes from the KNOWLEDGE BASE and has category: "Accommodation" or "Διαμονή", you MUST use the business format: [Hotel Name](/${lang}/hotels/[slug]) -> Change to: [Hotel Name](/${lang}/businesses/[slug]).

KNOWLEDGE BASE:
${ctx}

USER:
Destinations: ${selectedSlugs.join(', ')}
Days: ${destDays}
Budget: ${budget}
Style: ${style} (${styleGuide[style]?.pace || 'balanced'})
Month: ${validMonth}
Interests: ${interests.length ? interests.join(', ') : 'general'}

OUTPUT SCHEMA:
{
  "title": "catchy title string",
  "summary": "2-3 sentence overview",
  "days": [
    {
      "day": 1,
      "title": "day theme",
      "description": "paragraph",
      "activities": [
        { "time": "Morning", "activity": "description", "link": "optional URL" }
      ],
      "mealSuggestions": ["string with optional markdown links"],
      "accommodation": "suggestion with optional markdown link"
    }
  ],
  "budgetEstimate": { "total": "string", "breakdown": "string", "currency": "EUR" },
  "tips": ["string"]
}`;

    const result = await generateText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      prompt: `Generate a ${destDays}-day ${budget} itinerary for ${selectedSlugs.join(' and ')} in ${validMonth}, ${style} pace. Language: ${lang}. Output JSON only. No markdown, no code fences.`,
      temperature: 0.7,
    });
    rawText = result.text;

    const extractJSON = (text: string): string | null => {
      const noFences = text.replace(/```[\w]*\n?/g, '');
      const braceStart = noFences.indexOf('{');
      if (braceStart === -1) return null;
      let depth = 0;
      let inStr = false;
      let esc = false;
      for (let i = braceStart; i < noFences.length; i++) {
        const ch = noFences[i];
        if (esc) { esc = false; continue; }
        if (ch === '\\' && inStr) { esc = true; continue; }
        if (ch === '"') { inStr = !inStr; continue; }
        if (inStr) continue;
        if (ch === '{') depth++;
        if (ch === '}') { depth--; if (depth === 0) return noFences.slice(braceStart, i + 1); }
      }
      return null;
    };

    let jsonStr = extractJSON(rawText);
    if (!jsonStr) {
      const match = rawText.match(/\{[\s\S]*\}/);
      jsonStr = match ? match[0] : null;
    }
    if (!jsonStr) {
      return Response.json({ error: 'AI returned invalid JSON format' }, { status: 500 });
    }
    jsonStr = jsonStr.replace(/\/restaurants\//g, '/eat-drink/');

    let parsed: any;
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      const better = jsonStr.match(/\{[^{]*"title"[\s\S]*"days"[\s\S]*\}/);
      if (better) {
        try { parsed = JSON.parse(better[0]); } catch { }
      }
      if (!parsed) {
        console.error('[trip-planner] Failed to parse:', jsonStr.slice(0, 500));
        return Response.json({ error: 'AI returned invalid JSON format' }, { status: 500 });
      }
    }

    const partnerTips = businessData.map(b => {
      const info = b.info || '';
      return `[${b.name}](/${lang}/businesses/${b.slug}) — ${info.length > 100 ? info.slice(0, 100) + '...' : info}`;
    });
    parsed.tips = [...partnerTips, ...(parsed.tips || [])];

    const sortedBusinesses = [...businessData].sort((a, b) => (a.name || '').localeCompare(b.name || ''));

    return Response.json({
      ...parsed,
      businesses: sortedBusinesses.map(b => ({
        slug: b.slug,
        name: b.name || '',
        place: b.place || '',
        category: b.category || '',
      })),
    });
  } catch (error: any) {
    console.error('[trip-planner] Error:', error?.message || error);
    console.error('[trip-planner] Raw text preview:', rawText?.slice(0, 800));
    return Response.json({ error: `Failed: ${error?.message || 'Unknown error'}` }, { status: 500 });
  }
}
