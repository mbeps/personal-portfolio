import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import SimpleTextLoop from "@/components/text-loop/SimpleTextLoop";
import TextLoop from "@/components/text-loop/TextLoop";
import TypeWriterTextLoop from "@/components/text-loop/TypeWriterTextLoop";

// Mock useIsMounted
const mockUseIsMounted = vi.fn(() => true);
vi.mock("@/hooks/useIsMounted", () => ({
  default: () => mockUseIsMounted(),
}));

describe("TextLoop Components Suite", () => {
  const sampleItems = [
    "Full-Stack Developer",
    "AI Enthusiast",
    "Open Source Contributor",
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseIsMounted.mockReturnValue(true);
  });

  describe("SimpleTextLoop", () => {
    test("returns null when not mounted", () => {
      mockUseIsMounted.mockReturnValue(false);
      const html = renderToStaticMarkup(
        <SimpleTextLoop
          loopItems={sampleItems}
          delay={4000}
          className="font-bold text-lg"
        />,
      );

      expect(html).toBe("");
    });

    test("renders first item inside motion span when mounted", () => {
      mockUseIsMounted.mockReturnValue(true);
      const html = renderToStaticMarkup(
        <SimpleTextLoop
          loopItems={sampleItems}
          delay={4000}
          className="custom-simple-loop"
        />,
      );

      expect(html).toContain("Full-Stack Developer");
      expect(html).toContain("custom-simple-loop");
    });
  });

  describe("TypeWriterTextLoop", () => {
    test("renders typewriter container with style and custom className", () => {
      const html = renderToStaticMarkup(
        <TypeWriterTextLoop
          loopItems={sampleItems}
          className="custom-typewriter-class"
        />,
      );

      expect(html).toContain("typewriter-container");
      expect(html).toContain("custom-typewriter-class");
      expect(html).toContain("typewriter-cursor-blink");
    });
  });

  describe("TextLoop (Unified Component)", () => {
    test("renders fallback element with loopItems[1] when not mounted (SSR)", () => {
      mockUseIsMounted.mockReturnValue(false);
      const html = renderToStaticMarkup(
        <TextLoop
          loopItems={sampleItems}
          implementation="typewriter"
          className="hero-subtitle"
        />,
      );

      expect(html).toContain("hero-subtitle");
      expect(html).toContain("AI Enthusiast");
      expect(html).not.toContain("typewriter-container");
    });

    test("renders SimpleTextLoop when mounted and implementation is 'simple'", () => {
      mockUseIsMounted.mockReturnValue(true);
      const html = renderToStaticMarkup(
        <TextLoop
          loopItems={sampleItems}
          implementation="simple"
          className="hero-subtitle"
        />,
      );

      expect(html).toContain("Full-Stack Developer");
      expect(html).toContain("hero-subtitle");
      expect(html).not.toContain("typewriter-container");
    });

    test("renders TypeWriterTextLoop when mounted and implementation is 'typewriter'", () => {
      mockUseIsMounted.mockReturnValue(true);
      const html = renderToStaticMarkup(
        <TextLoop
          loopItems={sampleItems}
          implementation="typewriter"
          className="hero-subtitle"
        />,
      );

      expect(html).toContain("typewriter-container");
      expect(html).toContain("hero-subtitle");
    });
  });
});
