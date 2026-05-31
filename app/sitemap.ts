import type { MetadataRoute } from "next";
import { ROUTES } from "@/constants/routes";

/**
 * Generates the `sitemap.xml` file for the website.
 * This helps search engines understand the structure and priority of pages.
 * The base URL is determined by an environment variable, with a fallback.
 *
 * @returns A sitemap configuration object for Next.js.
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl: string =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.maruf-bepary.com";

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Main pages
    {
      url: `${baseUrl}${ROUTES.PROJECTS.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}${ROUTES.EXPERIENCE.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}${ROUTES.EDUCATION.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}${ROUTES.MORE.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Other pages (lower priority)
    {
      url: `${baseUrl}${ROUTES.CERTIFICATES.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}${ROUTES.BLOGS.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}${ROUTES.ABOUT.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}${ROUTES.SKILLS.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
