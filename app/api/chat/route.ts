import { 
  streamText, 
  convertToModelMessages, 
  createUIMessageStreamResponse, 
  createUIMessageStream 
} from 'ai';
import { google } from '@ai-sdk/google';
import { getKnowledgeBase } from '../../../lib/knowledge-base';
import { checkRateLimit, getIP } from '../../../lib/rate-limit';

export const maxDuration = 120;

export async function POST(req: Request) {
  try {
    const ip = getIP(req);
    const limit = await checkRateLimit(`chat:${ip}`, 10, 60 * 1000);

    if (!limit.allowed) {
      return new Response(JSON.stringify({ error: 'Too many requests. Try again later.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { messages, lang = 'en' } = await req.json();

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return new Response('API Key missing', { status: 500 });
    }

    const kb = await getKnowledgeBase(lang as 'en' | 'el');

    const databaseContext = JSON.stringify(kb);

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
    - Food/Restaurants: [Title](/${lang}/collections/greece-food-and-drink)
    - Tours: [Title](/${lang}/tours)
    - Travel Info: [Guide Title](/${lang}/travel-info)
4. **LANGUAGE**: You are a polyglot assistant. Respond in the same language as the user's latest message (e.g., if they write in German, respond in German). Use the information from the Knowledge Base to answer, translating it if necessary to match the user's language. Always be polite.
5. **FORMATTING**: Use Markdown for bold text and lists to keep it scannable.
    `;

    const stream = createUIMessageStream({
      onError: () => {
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
          // Error handled by onError callback
        }
      },
    });

    return createUIMessageStreamResponse({ stream });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}
