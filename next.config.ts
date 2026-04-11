import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
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