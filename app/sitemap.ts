import { MetadataRoute } from 'next';
import { destinations, hotels, food, tours } from '../lib/content';
import { experienceLandings, experienceBusinesses } from '../lib/experiences';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gogreecenow.com';

  const staticRoutes = [
    '',
    '/destinations',
    '/travel-info',
    '/travel-to-greece',
    '/promotion',
    '/privacy',
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
    { prefix: '/destinations', items: destinations.map(d => d.slug), priority: 0.9 },
    { prefix: '/hotels', items: hotels.map(h => h.slug), priority: 0.8 },
    { prefix: '/eat-drink', items: food.map(f => f.slug), priority: 0.8 },
    { prefix: '/tours', items: [...tours.map(t => t.slug), ...experienceLandings.map(l => l.slug)], priority: 0.8 },
    { prefix: '/businesses', items: experienceBusinesses.map(b => b.slug), priority: 0.7 },
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
