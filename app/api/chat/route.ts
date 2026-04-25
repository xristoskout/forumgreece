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
    const { messages, lang = 'en' } = await req.json();
    console.log(`AI Chat: Received request in "${lang}" with`, messages?.length, "messages");

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.error("AI Chat: Error - GOOGLE_GENERATIVE_AI_API_KEY is missing!");
      return new Response('API Key missing', { status: 500 });
    }

    const databaseContext = JSON.stringify({
      destinations: (destinations || []).map(d => ({ 
        slug: d.slug,
        name: d.name, 
        region: d.region?.[lang as keyof typeof d.region] || d.region?.en, 
        info: d.blurb?.[lang as keyof typeof d.blurb] || d.blurb?.en 
      })),
      hotels: (hotels || []).map(h => ({ 
        slug: h.slug,
        name: h.name, 
        place: h.place, 
        info: h.info?.[lang as keyof typeof h.info] || h.info?.en, 
        features: h.features?.[lang as keyof typeof h.features] || h.features?.en 
      })),
      foodAndRestaurants: (food || []).map(f => ({ 
        slug: f.slug,
        title: f.title?.[lang as keyof typeof f.title] || f.title?.en, 
        place: f.place, 
        info: f.info?.[lang as keyof typeof f.info] || f.info?.en, 
        specialties: f.specialties?.[lang as keyof typeof f.specialties] || f.specialties?.en 
      })),
      toursAndExperiences: (tours || []).map(t => ({ 
        slug: t.slug,
        title: t.title?.[lang as keyof typeof t.title] || t.title?.en, 
        place: t.place, 
        info: t.info?.[lang as keyof typeof t.info] || t.info?.en, 
        highlights: t.highlights?.[lang as keyof typeof t.highlights] || t.highlights?.en 
      })),
      travelGuides: (travelInfoGuides || []).map(g => ({ 
        title: g.title?.[lang as keyof typeof g.title] || g.title?.en, 
        info: g.description?.[lang as keyof typeof g.description] || g.description?.en 
      })),
      sponsoredBusinesses: (experienceBusinesses || []).map(b => ({
        slug: b.slug,
        name: b.name,
        category: b.category?.[lang as keyof typeof b.category] || b.category?.en,
        place: b.place,
        info: b.info?.[lang as keyof typeof b.info] || b.info?.en,
        highlights: b.highlights?.[lang as keyof typeof b.highlights] || b.highlights?.en
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
3. **CLICKABLE LINKS**: Use Markdown links for destinations, hotels, businesses, or categories. ALWAYS use the current language prefix "/${lang}".
    - Destinations: [Name](/${lang}/destinations/[slug])
    - Hotels: [Name](/${lang}/hotels/[slug])
    - Sponsored Businesses: [Name](/${lang}/businesses/[slug])
    - Food/Restaurants: [Title](/${lang}/eat-drink)
    - Tours: [Title](/${lang}/tours)
    - Travel Info: [Guide Title](/${lang}/travel-info)
4. **LANGUAGE**: You are a polyglot assistant. Respond in the same language as the user's latest message (e.g., if they write in German, respond in German). Use the information from the Knowledge Base to answer, translating it if necessary to match the user's language. Always be polite.
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
