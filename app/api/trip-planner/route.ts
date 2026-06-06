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
1. Output ONLY valid JSON. No markdown, no code fences, no explanation.
2. Every activity must link to a GoGreeceNow page when relevant: /${lang}/destinations/[slug], /${lang}/hotels/[slug], /${lang}/eat-drink/[slug], /${lang}/tours/[slug], /${lang}/businesses/[slug], /${lang}/guides/[slug]/best-beaches, /${lang}/guides/[slug]/things-to-do. NEVER use /restaurants/ in URLs — use /eat-drink/ instead.
3. Use the knowledge base for suggestions. If data is missing, use general Greece travel knowledge.
4. Be realistic about travel time between places.
5. Budget labels: budget=low-cost, mid=middle-range, luxury=premium.
6. CRITICAL: You MUST mention EVERY business from the KNOWLEDGE BASE in the itinerary. These are paid advertising partners. Include each business in the activities, mealSuggestions, transportation, accommodation, or tips section. Do NOT skip any. If there are many businesses, mention at least the first 5.
7. Each destination in the KNOWLEDGE BASE now includes a "beaches" array (top beaches to visit) and an "attractions" array (top things to do). Use these to enrich each day's description and activities with specific beach names and attraction recommendations.
8. The "accommodation" field MUST contain markdown links in the format [Hotel Name](/${lang}/hotels/[slug]). Never write hotel names as plain text in accommodation. For accommodation-type businesses from the KNOWLEDGE BASE (category: "Accommodation" or "Διαμονή"), use /${lang}/businesses/[slug], NOT /${lang}/hotels/[slug].

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
      prompt: `Generate a ${destDays}-day ${budget} itinerary for ${selectedSlugs.join(' and ')} in ${validMonth}, ${style} pace. Language: ${lang}. Output JSON only.`,
      temperature: 0.7,
    });
    rawText = result.text;

    const braceStart = rawText.indexOf('{');
    if (braceStart === -1) {
      return Response.json({ error: 'AI returned invalid JSON format' }, { status: 500 });
    }
    let depth = 0;
    let inStr = false;
    let esc = false;
    let braceEnd = -1;
    for (let i = braceStart; i < rawText.length; i++) {
      const ch = rawText[i];
      if (esc) { esc = false; continue; }
      if (ch === '\\' && inStr) { esc = true; continue; }
      if (ch === '"') { inStr = !inStr; continue; }
      if (inStr) continue;
      if (ch === '{') depth++;
      if (ch === '}') { depth--; if (depth === 0) { braceEnd = i; break; } }
    }
    if (braceEnd === -1) {
      return Response.json({ error: 'AI returned unclosed JSON object' }, { status: 500 });
    }
    const cleaned = rawText.slice(braceStart, braceEnd + 1).trim();
    const fixed = cleaned.replace(/\/restaurants\//g, '/eat-drink/');

    const parsed = JSON.parse(fixed);

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
