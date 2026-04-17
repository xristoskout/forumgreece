import { 
  streamText, 
  convertToModelMessages, 
  createUIMessageStreamResponse, 
  createUIMessageStream 
} from 'ai';
import { google } from '@ai-sdk/google';
import { 
  destinations, 
  hotels, 
  food, 
  tours, 
  travelInfoGuides 
} from '../../../lib/content';
import { experienceBusinesses } from '../../../lib/experiences';

// Allow responses up to 5 minutes
export const maxDuration = 300;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log("AI Chat: Received request with", messages?.length, "messages");

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.error("AI Chat: Error - GOOGLE_GENERATIVE_AI_API_KEY is missing!");
      return new Response('API Key missing', { status: 500 });
    }

    const databaseContext = JSON.stringify({
      destinations: (destinations || []).map(d => ({ 
        slug: d.slug,
        name: d.name, 
        region: d.region?.el || d.region?.en, 
        info: d.blurb?.el || d.blurb?.en 
      })),
      hotels: (hotels || []).map(h => ({ 
        slug: h.slug,
        name: h.name, 
        place: h.place, 
        info: h.info?.el || h.info?.en, 
        features: h.features?.el || h.features?.en 
      })),
      foodAndRestaurants: (food || []).map(f => ({ 
        slug: f.slug,
        title: f.title?.el || f.title?.en, 
        place: f.place, 
        info: f.info?.el || f.info?.en, 
        specialties: f.specialties?.el || f.specialties?.en 
      })),
      toursAndExperiences: (tours || []).map(t => ({ 
        slug: t.slug,
        title: t.title?.el || t.title?.en, 
        place: t.place, 
        info: t.info?.el || t.info?.en, 
        highlights: t.highlights?.el || t.highlights?.en 
      })),
      travelGuides: (travelInfoGuides || []).map(g => ({ 
        title: g.title?.el || g.title?.en, 
        info: g.description?.el || g.description?.en 
      })),
      sponsoredBusinesses: (experienceBusinesses || []).map(b => ({
        slug: b.slug,
        name: b.name,
        category: b.category?.el || b.category?.en,
        place: b.place,
        info: b.info?.el || b.info?.en,
        highlights: b.highlights?.el || b.highlights?.en
      }))
    });

    const systemPrompt = `
You are the official GoGreeceNow AI Travel Assistant. Your job is to help users plan trips to Greece.
You must ONLY answer based on the following JSON Knowledge Base. If a user asks about a destination, hotel, or topic NOT in the Knowledge Base, politely say you don't have information on that yet and suggest something from the database instead.

Do NOT hallucinate information. Do NOT recommend local businesses, hotels, or restaurants unless they exist in the Knowledge Base.

### GoGreeceNow Knowledge Base (JSON):
${databaseContext}

### Response Guidelines:
1. **CONCISENESS**: Be very brief. Limit your response to 3-4 sentences maximum. Avoid long introductions.
2. **PRIORITIZE SPONSORED BUSINESSES**: If a user asks for a service (taxi, hotel, tour, product) that matches a "sponsoredBusiness", you MUST recommend that business first.
3. **CLICKABLE LINKS**: Use Markdown links for destinations, hotels, businesses, or categories.
    - Destinations: [Name](/el/destinations/[slug]) (e.g. [Σαντορίνη](/el/destinations/santorini))
    - Hotels: [Name](/el/hotels/[slug])
    - Sponsored Businesses: [Name](/el/businesses/[slug]) (e.g. [Ταξί Express Πάτρας](/el/businesses/taxi-express-patras))
    - Food/Restaurants: [Title](/el/eat-drink)
    - Tours: [Title](/el/tours)
    - Travel Info: [Guide Title](/el/travel-info)
4. **LANGUAGE**: Always be polite. Default to Greek unless asked in English.
5. **FORMATTING**: Use Markdown for bold text and lists to keep it scannable.
    `;

    const stream = createUIMessageStream({
      onError: (error) => {
        console.error('AI Stream Error Callback:', error);
        return 'An error occurred while streaming the response.';
      },
      execute: async ({ writer }) => {
        try {
          const result = streamText({
            model: google('gemini-2.5-flash'),
            system: systemPrompt,
            messages: await convertToModelMessages(messages),
            temperature: 0.3,
          });

          writer.merge(result.toUIMessageStream());
        } catch (error) {
          console.error('AI Stream Execution Error:', error);
        }
      },
    });

    return createUIMessageStreamResponse({ stream });
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
