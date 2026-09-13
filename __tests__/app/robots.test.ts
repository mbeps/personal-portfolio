import { afterEach, beforeEach, describe, expect, it } from "vitest";
import robots from "@/app/robots";

describe("robots", () => {
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

  it("should return default robots configuration with fallback base URL", () => {
    const result = robots();

    expect(result).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: ["/skills/*", "/certificates/*", "/education/*/*"],
      },
      sitemap: "https://www.maruf-bepary.com/sitemap.xml",
    });
  });

  it("should use NEXT_PUBLIC_SITE_URL in sitemap path when provided", () => {
    const customBaseUrl = "https://portfolio.test.org";
    process.env.NEXT_PUBLIC_SITE_URL = customBaseUrl;

    const result = robots();

    expect(result.sitemap).toBe(`${customBaseUrl}/sitemap.xml`);
  });

  it("should have correct disallow rules for sensitive and parameterized paths", () => {
    const result = robots();

    const rules = Array.isArray(result.rules) ? result.rules[0] : result.rules;
    expect(rules.userAgent).toBe("*");
    expect(rules.allow).toBe("/");
    expect(rules.disallow).toEqual([
      "/skills/*",
      "/certificates/*",
      "/education/*/*",
    ]);
  });
});
