import {
  ABOUT_PAGE,
  BLOG_PAGE,
  CERTIFICATES_PAGE,
  EDUCATION_PAGE,
  EXPERIENCE_PAGE,
  PROJECTS_PAGE,
  SKILL_PAGE,
} from "@/constants/pages";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.maruf-bepary.com";

  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        PROJECTS_PAGE.path,
        CERTIFICATES_PAGE.path,
        BLOG_PAGE.path,
        EDUCATION_PAGE.path,
        EXPERIENCE_PAGE.path,
        SKILL_PAGE.path,
        ABOUT_PAGE.path,
      ],
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
