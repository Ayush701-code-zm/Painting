import type { MetadataRoute } from "next";
import { ARTWORKS } from "@/data/artworks";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://glamsfyt.com";

const STATIC_ROUTES = [
  "",
  "/shop",
  "/collections",
  "/about",
  "/commission",
  "/contact",
  "/search",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const artworkEntries = ARTWORKS.map((artwork) => ({
    url: `${SITE_URL}/shop/${artwork.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...artworkEntries];
}
