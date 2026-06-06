import { generateObject } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';
import { getKnowledgeBase } from '../../../lib/knowledge-base';
import { checkRateLimit, getIP } from '../../../lib/rate-limit';

export const maxDuration = 60;

const MONTHS = [
  'january','february','march','april','may','june',
  'july','august','september','october','november','december'
];

const itinerarySchema = z.object({
  title: z.string(),
  summary: z.string(),
  days: z.array(
    z.object({
      day: z.number(),
      title: z.string(),
      description: z.string(),
      activities: z.array(
        z.object({
          time: z.string(),
          activity: z.string(),
          link: z.string().optional()
        })
      ),
      mealSuggestions: z.array(z.string()),
      accommodation: z.string()
    })
  ),
  budgetEstimate: z.object({
    total: z.string(),
    breakdown: z.string(),
    currency: z.string().default('EUR')
  }),
  tips: z.array(z.string())
});

export async function POST(req: Request) {
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

    const systemPrompt = `You are the GoGreeceNow AI Trip Planner. Generate a detailed day-by-day itinerary based ONLY on the schema provided.

RULES:
1. Every activity must link to a GoGreeceNow page when relevant using exact URL structures:
   - /${lang}/destinations/[slug]
   - /${lang}/hotels/[slug]
   - /${lang}/eat-drink/[slug]
   - /${lang}/tours/[slug]
   - /${lang}/businesses/[slug]
   - /${lang}/guides/[slug]/things-to-do  (use the destination slug)
   - /${lang}/guides/[slug]/best-beaches  (use the destination slug)
   CRITICAL: NEVER use /restaurants/ in URLs (always use /eat-drink/).
2. Use the provided KNOWLEDGE BASE for all suggestions. If data for a specific request is missing, supplement it using general expert Greece travel knowledge.
3. Ensure travel times, geolocations, and daily itineraries are strictly realistic. Do not group distant locations in the same day.
4. Use exact budget labels in the JSON payload: budget="low-cost", mid="middle-range", luxury="premium".
5. ADVERTISING PARTNERS (CRITICAL): You must include the advertising businesses provided in the KNOWLEDGE BASE for the chosen destination. Incorporate them naturally into 'activities', 'mealSuggestions', 'transportation', 'accommodation', or 'tips'. If there are more than 5 businesses for a destination, prioritize and include at least the first 5.
6. Enrich each day's description and activities by using the specific names from the "beaches" array and "attractions" array provided for each destination in the KNOWLEDGE BASE. When mentioning an attraction from the KNOWLEDGE BASE, link to /${lang}/guides/[slug]/things-to-do. When mentioning a beach, link to /${lang}/guides/[slug]/best-beaches.
7. ACCOMMODATION LINKS: The "accommodation" field MUST contain markdown links.
   - Standard format: Use [Hotel Name](/${lang}/hotels/[slug])
   - EXCEPTION: If the hotel comes from the KNOWLEDGE BASE and has category: "Accommodation" or "Διαμονή", you MUST use the business format: [Hotel Name](/${lang}/businesses/[slug]).

KNOWLEDGE BASE:
${ctx}

USER REQUEST:
Destinations: ${selectedSlugs.join(', ')}
Days: ${destDays}
Budget: ${budget}
Style: ${style} (${styleGuide[style]?.pace || 'balanced'})
Month: ${validMonth}
Interests: ${interests.length ? interests.join(', ') : 'general'}`;

    const { object: parsed } = await generateObject({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      prompt: `Generate a ${destDays}-day ${budget} itinerary for ${selectedSlugs.join(' and ')} in ${validMonth}, ${style} pace. Language: ${lang}.`,
      schema: itinerarySchema,
      temperature: 0.7,
    });

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
    return Response.json({ error: `Failed: ${error?.message || 'Unknown error'}` }, { status: 500 });
  }
}
