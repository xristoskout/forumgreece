import { MetadataRoute } from 'next';
import { destinations } from '../lib/destinations-data';
import { hotels } from '../lib/hotels-data';
import { food } from '../lib/food-data';
import { tours } from '../lib/tours-data';
import { travelInfoGuides } from '../lib/travel-info-data';
import { experienceLandings, experienceBusinesses } from '../lib/experiences';
import { homeCollectionHubSlugs } from '../lib/home-collection-hubs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gogreecenow.com';

  const staticRoutes = [
    '',
    '/destinations',
    '/hotels',
    '/eat-drink',
    '/tours',
    '/tours/all',
    '/travel-info',
    '/travel-info/greece-islands-map-guide',
    '/travel-to-greece',
    '/promotion',
    '/privacy-policy',
    '/about',
    '/contact',
    '/collections/greek-islands',
    '/collections/greece-travel-planning',
    '/collections/greece-tours-and-experiences',
    '/collections/greece-food-and-drink',
  ];

  const langs = ['en', 'el'];
  const entries: MetadataRoute.Sitemap = [];

  // Add the root redirect
  entries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  });

  const dynamicSources = [
    { prefix: '/destinations', items: Array.from(new Set(destinations.map(d => d.slug))), priority: 0.9 },
    { prefix: '/hotels', items: Array.from(new Set(hotels.map(h => h.slug))), priority: 0.8 },
    { prefix: '/eat-drink', items: Array.from(new Set(food.map(f => f.slug))), priority: 0.8 },
    { prefix: '/tours', items: Array.from(new Set([...tours.map(t => t.slug), ...experienceLandings.map(l => l.slug)])), priority: 0.8 },
    { prefix: '/businesses', items: Array.from(new Set(experienceBusinesses.map(b => b.slug))), priority: 0.7 },
    { prefix: '/travel-info', items: Array.from(new Set(travelInfoGuides.map(g => g.slug))), priority: 0.7 },
    { prefix: '/collections', items: Array.from(new Set(homeCollectionHubSlugs)), priority: 0.7 },
  ];

  langs.forEach((lang) => {
    // Static Routes
    staticRoutes.forEach((route) => {
      entries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });

    // Dynamic Routes
    dynamicSources.forEach((source) => {
      source.items.forEach((slug) => {
        entries.push({
          url: `${baseUrl}/${lang}${source.prefix}/${slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: source.priority,
        });
      });
    });
  });

  return entries;
}
