import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test, vi } from "vitest";
import SpecialReader from "@/components/reader/SpecialReader";

// Mock hooks and child components that use browser APIs
vi.mock("@/hooks/useMediaQuery", () => ({
  useMediaQuery: () => false,
}));

vi.mock("@/hooks/useIsMounted", () => ({
  default: () => true,
}));

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", systemTheme: "light" }),
}));

describe("SpecialReader Component", () => {
  test("should split content into contents section and article section", () => {
    const blogMarkdown = `
- [Introduction](#introduction)
- [Details](#details)

# Introduction
This is the main article content.
`;

    const html = renderToStaticMarkup(
      <SpecialReader
        content={blogMarkdown}
        previousPagePath="/blogs"
        previousPageName="Blogs"
      />,
    );

    expect(html).toContain("Back to Blogs");
    expect(html).toContain("Introduction");
    expect(html).toContain("This is the main article content.");
    expect(html).toContain("typeset");
    expect(html).toContain("typeset-reading");
  });

  test("should handle markdown with no headings", () => {
    const plainMarkdown = "Just a single paragraph with no headings.";

    const html = renderToStaticMarkup(
      <SpecialReader
        content={plainMarkdown}
        previousPagePath="/projects"
        previousPageName="Projects"
      />,
    );

    expect(html).toContain("Back to Projects");
    expect(html).toContain("Just a single paragraph with no headings.");
  });
});
