// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GoGreeceNow",
    short_name: "GoGreeceNow",
    description:
      "Discover destinations, travel tips, hotels, food guides and local communities across Greece.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f7fb",
    theme_color: "#f4f7fb",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}