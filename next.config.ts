import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  experimental: {
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
      {
        source: '/:lang(en|el)/travel-info/where-to-stay-in-santorini',
        destination: '/:lang/hotels/santorini',
        permanent: true,
      },
      {
        source: '/tours/all',
        destination: '/en/tours/all',
        permanent: true,
      },
      {
        source: '/travel-info/where-to-stay-in-santorini',
        destination: '/en/hotels/santorini',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;