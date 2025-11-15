import type { MetadataRoute } from "next";

/**
 * Generates the `robots.txt` file for the website.
 * This file instructs web crawlers on which pages to index or ignore.
 * The base URL is determined by an environment variable, with a fallback.
 *
 * @returns A `robots.txt` configuration object for Next.js.
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl: string =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.maruf-bepary.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Block the pages you don't want in search results
      disallow: [
        "/skills/*", // Individual skills pages
        "/certificates/*", // Individual certificate pages
        "/education/*/*", // Individual module pages
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
