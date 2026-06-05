import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../sanity/env';

import { destinations as tsDestinations } from './destinations-data';
import { hotels as tsHotels } from './hotels-data';
import { food as tsFood } from './food-data';
import { tours as tsTours } from './tours-data';
import { travelInfoGuides as tsTravelInfo } from './travel-info-data';
import { experienceBusinesses as tsBusinesses } from './experiences';

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
});

export type Lang = 'en' | 'el';

export type KnowledgeBaseItem = {
  slug: string;
  name?: string;
  title?: string;
  place?: string;
  region?: string;
  info?: string;
  highlights?: string[];
  features?: string[];
  specialties?: string[];
  category?: string;
};

export type KnowledgeBase = {
  destinations: KnowledgeBaseItem[];
  hotels: KnowledgeBaseItem[];
  restaurants: KnowledgeBaseItem[];
  tours: KnowledgeBaseItem[];
  travelGuides: KnowledgeBaseItem[];
  businesses: KnowledgeBaseItem[];
};

async function fetchFromSanity(lang: Lang): Promise<Partial<KnowledgeBase> | null> {
  try {
    const [sanityDests, sanityHotels, sanityFood, sanityTours, sanityBiz] = await Promise.all([
      sanityClient.fetch(`*[_type == "destination"]{slug, name, "region": "info", "info": coalesce(shortDescription, "")}`).catch(() => null),
      sanityClient.fetch(`*[_type == "hotel"]{slug, name, place, "info": infoEn}`).catch(() => null),
      sanityClient.fetch(`*[_type == "food"]{slug, title, place, "info": infoEn}`).catch(() => null),
      sanityClient.fetch(`*[_type == "tour"]{slug, title, place, "info": infoEn}`).catch(() => null),
      sanityClient.fetch(`*[_type == "business"]{slug, name, "place": destination->name, "info": pt::text(description)}`).catch(() => null),
    ]);

    const result: Partial<KnowledgeBase> = {};

    if (sanityDests && sanityDests.length > 0) {
      result.destinations = sanityDests.map((d: any) => ({
        slug: d.slug?.current || d.slug,
        name: d.name || '',
        region: d.region || '',
        info: lang === 'el' ? (d.infoEl || d.info) : (d.info || ''),
      }));
    }

    if (sanityHotels && sanityHotels.length > 0) {
      result.hotels = sanityHotels.map((h: any) => ({
        slug: h.slug?.current || h.slug,
        name: h.name || '',
        place: h.place || '',
        info: lang === 'el' ? (h.infoEl || h.info) : (h.info || ''),
      }));
    }

    if (sanityFood && sanityFood.length > 0) {
      result.restaurants = sanityFood.map((f: any) => ({
        slug: f.slug?.current || f.slug,
        title: f.title || '',
        place: f.place || '',
        info: lang === 'el' ? (f.infoEl || f.info) : (f.info || ''),
      }));
    }

    if (sanityTours && sanityTours.length > 0) {
      result.tours = sanityTours.map((t: any) => ({
        slug: t.slug?.current || t.slug,
        title: t.title || '',
        place: t.place || '',
        info: lang === 'el' ? (t.infoEl || t.info) : (t.info || ''),
      }));
    }

    if (sanityBiz && sanityBiz.length > 0) {
      result.businesses = sanityBiz.map((b: any) => ({
        slug: b.slug?.current || b.slug,
        name: b.name || '',
        place: b.place || '',
        info: b.info || '',
        category: b.category || '',
      }));
    }

    return result;
  } catch {
    return null;
  }
}

function mapFromTS(lang: Lang): KnowledgeBase {
  return {
    destinations: (tsDestinations || []).map(d => ({
      slug: d.slug,
      name: d.name,
      region: (d.region as any)?.[lang] || (d.region as any)?.en || '',
      info: (d.blurb as any)?.[lang] || (d.blurb as any)?.en || '',
      highlights: (d.highlights as any)?.[lang] || (d.highlights as any)?.en || [],
    })),
    hotels: (tsHotels || []).map(h => ({
      slug: h.slug,
      name: h.name || h.slug,
      place: h.place || '',
      info: (h.info as any)?.[lang] || (h.info as any)?.en || '',
      features: (h.features as any)?.[lang] || (h.features as any)?.en || [],
    })),
    restaurants: (tsFood || []).map(f => ({
      slug: f.slug,
      title: (f.title as any)?.[lang] || (f.title as any)?.en || '',
      place: f.place || '',
      info: (f.info as any)?.[lang] || (f.info as any)?.en || '',
      specialties: (f.specialties as any)?.[lang] || (f.specialties as any)?.en || [],
    })),
    tours: (tsTours || []).map(t => ({
      slug: t.slug,
      title: (t.title as any)?.[lang] || (t.title as any)?.en || '',
      place: t.place || '',
      info: (t.info as any)?.[lang] || (t.info as any)?.en || '',
      highlights: (t.highlights as any)?.[lang] || (t.highlights as any)?.en || [],
    })),
    travelGuides: (tsTravelInfo || []).map(g => ({
      slug: g.slug,
      title: (g.title as any)?.[lang] || (g.title as any)?.en || '',
      info: (g.description as any)?.[lang] || (g.description as any)?.en || '',
    })),
    businesses: (tsBusinesses || []).map(b => ({
      slug: b.slug || '',
      name: (b as any).name || '',
      place: (b as any).place || '',
      info: ((b as any).info as any)?.[lang] || ((b as any).info as any)?.en || '',
      category: ((b as any).category as any)?.[lang] || ((b as any).category as any)?.en || '',
      highlights: ((b as any).highlights as any)?.[lang] || ((b as any).highlights as any)?.en || [],
    })),
  };
}

function mergeTS(base: Partial<KnowledgeBase>, ts: KnowledgeBase): KnowledgeBase {
  const b = {
    destinations: base.destinations ?? [],
    hotels: base.hotels ?? [],
    restaurants: base.restaurants ?? [],
    tours: base.tours ?? [],
    travelGuides: base.travelGuides ?? [],
    businesses: base.businesses ?? [],
  };
  const slugSet = new Set(b.destinations.map(d => d.slug));
  return {
    destinations: [...b.destinations, ...ts.destinations.filter(d => !slugSet.has(d.slug))],
    hotels: [...b.hotels, ...ts.hotels.filter(h => !b.hotels.some(bh => bh.slug === h.slug))],
    restaurants: [...b.restaurants, ...ts.restaurants.filter(r => !b.restaurants.some(br => br.slug === r.slug))],
    tours: [...b.tours, ...ts.tours.filter(t => !b.tours.some(bt => bt.slug === t.slug))],
    travelGuides: ts.travelGuides,
    businesses: [...b.businesses, ...ts.businesses.filter(biz => !b.businesses.some(bb => bb.slug === biz.slug))],
  };
}

export async function getKnowledgeBase(lang: Lang = 'en'): Promise<KnowledgeBase> {
  const sanity = await fetchFromSanity(lang);
  const ts = mapFromTS(lang);

  if (sanity) {
    return mergeTS(sanity, ts);
  }

  return ts;
}
