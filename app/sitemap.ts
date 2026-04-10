import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Change to your actual production URL
  const baseUrl = 'https://www.gogreecenow.com';

  const routes = [
    '',
    '/travel-info',
    '/travel-to-greece',
    '/promotion',
    '/privacy',
    '/about',
    '/contact',
  ];

  const langs = ['en', 'el'];
  const entries: MetadataRoute.Sitemap = [];

  // Add the root redirect as well if needed
  entries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  });

  langs.forEach((lang) => {
    routes.forEach((route) => {
      entries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return entries;
}
