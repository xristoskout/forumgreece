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
      {
        source: '/privacy',
        destination: '/en/privacy-policy',
        permanent: true,
      },
      {
        source: '/:lang(en|el)/privacy',
        destination: '/:lang/privacy-policy',
        permanent: true,
      },
      {
        source: '/:first(en|el)/:second(en|el)/:path*',
        destination: '/:second/:path*',
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
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://va.vercel-scripts.com https://cdn.sanity.io https://*.viator.com https://*.tripadvisor.com https://stay22.com https://*.stay22.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://generativelanguage.googleapis.com https://vitals.vercel-insights.com https://cdn.sanity.io https://*.viator.com https://*.tripadvisor.com https://stay22.com https://*.stay22.com",
              "frame-src 'self' https://www.youtube.com https://*.viator.com https://stay22.com https://*.stay22.com https://*.tripadvisor.com",
              "media-src 'self' https:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join("; "),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-site",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
