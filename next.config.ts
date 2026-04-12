import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  experimental: {
    // Inlines critical CSS above-the-fold and defers the rest async,
    // eliminating render-blocking stylesheet requests.
    optimizeCss: true,
    // Tree-shake large packages that are imported with barrel imports
    optimizePackageImports: ["@vercel/analytics", "@vercel/speed-insights"],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/businesses',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/businesses',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/el/businesses',
        destination: '/el',
        permanent: true,
      },
      {
        source: '/travel-info/best-time-to-visit',
        destination: '/travel-info/best-time-to-visit-greece',
        permanent: true,
      },
      {
        source: '/:lang(en|el)/travel-info/best-time-to-visit',
        destination: '/:lang/travel-info/best-time-to-visit-greece',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;