import type { MetadataRoute } from "next";

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
