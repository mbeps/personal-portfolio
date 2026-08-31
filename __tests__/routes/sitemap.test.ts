import { afterEach, beforeEach, describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { ROUTES } from "@/constants/routes";

describe("sitemap", () => {
  const originalEnv = process.env.NEXT_PUBLIC_SITE_URL;

  beforeEach(() => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
  });

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env.NEXT_PUBLIC_SITE_URL = originalEnv;
    } else {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    }
  });

  it("should use default fallback base URL when NEXT_PUBLIC_SITE_URL is not set", () => {
    const result = sitemap();
    const defaultBaseUrl = "https://www.maruf-bepary.com";

    expect(result[0].url).toBe(defaultBaseUrl);
    expect(
      result.some(
        (entry) => entry.url === `${defaultBaseUrl}${ROUTES.PROJECTS.path}`,
      ),
    ).toBe(true);
  });

  it("should use NEXT_PUBLIC_SITE_URL environment variable when provided", () => {
    const customBaseUrl = "https://custom-domain.example.com";
    process.env.NEXT_PUBLIC_SITE_URL = customBaseUrl;

    const result = sitemap();

    expect(result[0].url).toBe(customBaseUrl);
    expect(
      result.some(
        (entry) => entry.url === `${customBaseUrl}${ROUTES.PROJECTS.path}`,
      ),
    ).toBe(true);
    expect(
      result.some(
        (entry) => entry.url === `${customBaseUrl}${ROUTES.EXPERIENCE.path}`,
      ),
    ).toBe(true);
    expect(
      result.some(
        (entry) => entry.url === `${customBaseUrl}${ROUTES.EDUCATION.path}`,
      ),
    ).toBe(true);
    expect(
      result.some(
        (entry) => entry.url === `${customBaseUrl}${ROUTES.MORE.path}`,
      ),
    ).toBe(true);
    expect(
      result.some(
        (entry) => entry.url === `${customBaseUrl}${ROUTES.CERTIFICATES.path}`,
      ),
    ).toBe(true);
    expect(
      result.some(
        (entry) => entry.url === `${customBaseUrl}${ROUTES.BLOGS.path}`,
      ),
    ).toBe(true);
    expect(
      result.some(
        (entry) => entry.url === `${customBaseUrl}${ROUTES.ABOUT.path}`,
      ),
    ).toBe(true);
    expect(
      result.some(
        (entry) => entry.url === `${customBaseUrl}${ROUTES.SKILLS.path}`,
      ),
    ).toBe(true);
  });

  it("should contain all expected routes with correct priorities and change frequencies", () => {
    const baseUrl = "https://www.maruf-bepary.com";
    const result = sitemap();

    expect(result).toHaveLength(9);

    const expectedEntries = [
      { url: baseUrl, changeFrequency: "weekly", priority: 1.0 },
      {
        url: `${baseUrl}${ROUTES.PROJECTS.path}`,
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}${ROUTES.EXPERIENCE.path}`,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}${ROUTES.EDUCATION.path}`,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}${ROUTES.MORE.path}`,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}${ROUTES.CERTIFICATES.path}`,
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}${ROUTES.BLOGS.path}`,
        changeFrequency: "weekly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}${ROUTES.ABOUT.path}`,
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}${ROUTES.SKILLS.path}`,
        changeFrequency: "monthly",
        priority: 0.6,
      },
    ];

    for (const expected of expectedEntries) {
      const match = result.find((entry) => entry.url === expected.url);
      expect(match, `Missing sitemap entry for ${expected.url}`).toBeDefined();
      expect(match?.changeFrequency).toBe(expected.changeFrequency);
      expect(match?.priority).toBe(expected.priority);
      expect(match?.lastModified).toBeInstanceOf(Date);
    }
  });

  it("should not produce duplicate URLs in sitemap", () => {
    const result = sitemap();
    const urls = result.map((entry) => entry.url);
    const uniqueUrls = new Set(urls);

    expect(urls.length).toBe(uniqueUrls.size);
  });
});
