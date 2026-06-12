import { MetadataRoute } from 'next';
import { destinations } from '../lib/destinations-data';
import { hotels } from '../lib/hotels-data';
import { food } from '../lib/food-data';
import { tours } from '../lib/tours-data';
import { travelInfoGuides } from '../lib/travel-info-data';
import { experienceLandings, experienceBusinesses } from '../lib/experiences';
import { blogPosts } from '../lib/blog-data';

const baseUrl = 'https://www.gogreecenow.com';

const CONTENT_UPDATED = new Date('2026-06-01');

const KEPT_EL = ['/contact', '/about', '/privacy-policy'];

const staticRoutes = [
  '',
  '/destinations',
  '/hotels',
  '/tours/all',
  '/trip-planner',
  '/travel-info',
  '/travel-info/greece-islands-map-guide',
  '/travel-to-greece',
  '/travel-tools',
  '/promotion',
  '/privacy-policy',
  '/about',
  '/contact',
  '/blog',
  '/collections/greek-islands',
  '/collections/greece-travel-planning',
  '/collections/greece-tours-and-experiences',
  '/collections/greece-food-and-drink',
];

const dynamicSources = [
  { prefix: '/destinations', items: Array.from(new Set(destinations.map(d => d.slug))).filter(s => s !== 'nayplio-odigos-taxidiou'), priority: 0.9 },
  { prefix: '/hotels', items: Array.from(new Set(hotels.map(h => h.slug))), priority: 0.8 },
  { prefix: '/eat-drink', items: Array.from(new Set(food.map(f => f.slug))), priority: 0.8 },
  { prefix: '/tours', items: Array.from(new Set([...tours.map(t => t.slug), ...experienceLandings.map(l => l.slug)])), priority: 0.8 },
  { prefix: '/businesses', items: Array.from(new Set(experienceBusinesses.map(b => b.slug))), priority: 0.7 },
  { prefix: '/travel-info', items: Array.from(new Set(travelInfoGuides.map(g => g.slug))), priority: 0.7 },
  { prefix: '/blog', items: Array.from(new Set(blogPosts.map(p => p.slug))), priority: 0.8 },
  { prefix: '/guides', items: Array.from(new Set(destinations.map(d => d.slug))).filter(s => s !== 'nayplio-odigos-taxidiou'), subRoutes: ['/things-to-do', '/best-beaches'], priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  staticRoutes.forEach((route) => {
    entries.push({
      url: `${baseUrl}/en${route}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    });
  });

  KEPT_EL.forEach((route) => {
    entries.push({
      url: `${baseUrl}/el${route}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  dynamicSources.forEach((source) => {
    source.items.forEach((slug) => {
      entries.push({
        url: `${baseUrl}/en${source.prefix}/${slug}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: 'weekly',
        priority: source.priority,
      });

      if (source.subRoutes) {
        source.subRoutes.forEach((sub) => {
          entries.push({
            url: `${baseUrl}/en${source.prefix}/${slug}${sub}`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: 'weekly',
            priority: source.priority,
          });
        });
      }
    });
  });

  const blogDateMap = new Map(
    blogPosts.map((p) => [p.slug, new Date(p.publishedDate)])
  );

  entries
    .filter((e) => e.url.includes('/blog/'))
    .forEach((e) => {
      const slug = e.url.split('/blog/')[1];
      if (slug && blogDateMap.has(slug)) {
        e.lastModified = blogDateMap.get(slug)!;
      }
    });

  return entries;
}
