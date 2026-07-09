import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../sanity/env';

import { destinations as tsDestinations } from './destinations-data';
import { hotels as tsHotels } from './hotels-data';
import { food as tsFood } from './food-data';
import { tours as tsTours } from './tours-data';
import { travelInfoGuides as tsTravelInfo } from './travel-info-data';
import { experienceBusinesses as tsBusinesses } from './experiences';
import { destinationSections, type DestinationSection } from './destination-sections';

type LocalizedRecord = Record<string, string | string[]>;
function getLocalized(item: LocalizedRecord | undefined, field: string, lang: Lang): string {
  if (!item) return '';
  const val = item[field];
  if (Array.isArray(val)) return val.join(', ');
  if (typeof val === 'object') return String((val as LocalizedRecord)?.[lang] ?? (val as LocalizedRecord)?.en ?? '');
  return String(val ?? '');
}
function getLocalizedList(item: LocalizedRecord | undefined, field: string, lang: Lang): string[] {
  if (!item) return [];
  const val = item[field];
  if (Array.isArray(val)) return val;
  if (typeof val === 'object') return ((val as LocalizedRecord)?.[lang] || (val as LocalizedRecord)?.en || []) as string[];
  return [];
}

type SanityDoc = Record<string, unknown>;

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
  beaches?: string[];
  attractions?: string[];
  landingSlug?: string;
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

    const mapSlug = (d: SanityDoc) => {
      const s = d.slug;
      return s && typeof s === 'object' ? (s as SanityDoc).current as string : d.slug as string;
    };

    if (sanityDests && sanityDests.length > 0) {
      result.destinations = sanityDests.map((d: SanityDoc) => ({
        slug: mapSlug(d) || '',
        name: (d.name as string) || '',
        region: (d.region as string) || '',
        info: lang === 'el' ? ((d.infoEl as string) || (d.info as string) || '') : ((d.info as string) || ''),
      }));
    }

    if (sanityHotels && sanityHotels.length > 0) {
      result.hotels = sanityHotels.map((h: SanityDoc) => ({
        slug: mapSlug(h) || '',
        name: (h.name as string) || '',
        place: (h.place as string) || '',
        info: lang === 'el' ? ((h.infoEl as string) || (h.info as string) || '') : ((h.info as string) || ''),
      }));
    }

    if (sanityFood && sanityFood.length > 0) {
      result.restaurants = sanityFood.map((f: SanityDoc) => ({
        slug: mapSlug(f) || '',
        title: (f.title as string) || '',
        place: (f.place as string) || '',
        info: lang === 'el' ? ((f.infoEl as string) || (f.info as string) || '') : ((f.info as string) || ''),
      }));
    }

    if (sanityTours && sanityTours.length > 0) {
      result.tours = sanityTours.map((t: SanityDoc) => ({
        slug: mapSlug(t) || '',
        title: (t.title as string) || '',
        place: (t.place as string) || '',
        info: lang === 'el' ? ((t.infoEl as string) || (t.info as string) || '') : ((t.info as string) || ''),
      }));
    }

    if (sanityBiz && sanityBiz.length > 0) {
      result.businesses = sanityBiz.map((b: SanityDoc) => ({
        slug: mapSlug(b) || '',
        name: (b.name as string) || '',
        place: (b.place as string) || '',
        info: (b.info as string) || '',
        category: (b.category as string) || '',
      }));
    }

    return result;
  } catch {
    return null;
  }
}

function extractSectionItems(sections: DestinationSection[], keywords: string[], lang: Lang): string[] {
  const items: string[] = [];
  for (const section of sections) {
    const titleEn = section.title.en.toLowerCase();
    const titleEl = section.title.el.toLowerCase();
    const match = keywords.some(k => titleEn.includes(k.toLowerCase()) || titleEl.includes(k.toLowerCase()));
    if (!match || !section.items) continue;
    for (const item of section.items) {
      const label = item.title ? ((item.title as LocalizedRecord)[lang] || (item.title as LocalizedRecord).en || '') + ': ' : '';
      const text = (item.text as LocalizedRecord)?.[lang] || (item.text as LocalizedRecord)?.en || '';
      const line = label + text;
      if (line.trim()) items.push(line.trim());
    }
  }
  return items;
}

function mapFromTS(lang: Lang): KnowledgeBase {
  function loc(item: LocalizedRecord | undefined, field: string): string { return getLocalized(item, field, lang); }
  function locList(item: LocalizedRecord | undefined, field: string): string[] { return getLocalizedList(item, field, lang); }

  return {
    destinations: (tsDestinations || []).map(d => {
      const sections = (destinationSections as Record<string, DestinationSection[]>)?.[d.slug];
      const beaches = sections ? extractSectionItems(sections, ['beach', 'παραλ'], lang) : [];
      const attractions = sections ? extractSectionItems(sections, ['attraction', 'experience', 'things to do', 'αξιοθέατ', 'εμπειρίε', 'πράγματα να κάν'], lang) : [];
      return {
        slug: d.slug,
        name: d.name,
        region: loc(d as unknown as LocalizedRecord, 'region'),
        info: loc(d as unknown as LocalizedRecord, 'blurb'),
        highlights: locList(d as unknown as LocalizedRecord, 'highlights'),
        beaches: beaches.slice(0, 8),
        attractions: attractions.slice(0, 8),
      };
    }),
    hotels: (tsHotels || []).map(h => ({
      slug: h.slug,
      name: h.name || h.slug,
      place: h.place || '',
      info: loc(h as unknown as LocalizedRecord, 'info'),
      features: locList(h as unknown as LocalizedRecord, 'features'),
    })),
    restaurants: (tsFood || []).map(f => ({
      slug: f.slug,
      title: loc(f as unknown as LocalizedRecord, 'title'),
      place: f.place || '',
      info: loc(f as unknown as LocalizedRecord, 'info'),
      specialties: locList(f as unknown as LocalizedRecord, 'specialties'),
    })),
    tours: (tsTours || []).map(t => ({
      slug: t.slug,
      title: loc(t as unknown as LocalizedRecord, 'title'),
      place: t.place || '',
      info: loc(t as unknown as LocalizedRecord, 'info'),
      highlights: locList(t as unknown as LocalizedRecord, 'highlights'),
    })),
    travelGuides: (tsTravelInfo || []).map(g => ({
      slug: g.slug,
      title: loc(g as unknown as LocalizedRecord, 'title'),
      info: loc(g as unknown as LocalizedRecord, 'description'),
    })),
    businesses: (tsBusinesses || []).map(b => ({
      slug: b.slug || '',
      name: (b as unknown as LocalizedRecord).name as string || '',
      place: (b as unknown as LocalizedRecord).place as string || '',
      info: loc(b as unknown as LocalizedRecord, 'info'),
      category: loc(b as unknown as LocalizedRecord, 'category'),
      highlights: locList(b as unknown as LocalizedRecord, 'highlights'),
      landingSlug: (b as unknown as LocalizedRecord).landingSlug as string || '',
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
