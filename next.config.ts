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
    ];
  },
};

export default nextConfig;