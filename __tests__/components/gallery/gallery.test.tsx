import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Gallery from "@/components/gallery/gallery";
import VideoPlayer from "@/components/gallery/video-player";

const { mockUseIsMounted, mockUseMediaQuery } = vi.hoisted(() => ({
  mockUseIsMounted: vi.fn(),
  mockUseMediaQuery: vi.fn(),
}));

vi.mock("@/hooks/use-is-mounted", () => ({
  default: () => mockUseIsMounted(),
}));

vi.mock("@/hooks/use-media-query", () => ({
  useMediaQuery: (query: string) => mockUseMediaQuery(query),
}));

vi.mock("next/image", () => ({
  // biome-ignore lint/performance/noImgElement: Mock next/image in unit tests
  // biome-ignore lint/a11y/useAltText: Props spread passes alt
  default: (props: any) => <img {...props} />,
}));

vi.mock("@/components/shadcn/ui/tabs", () => ({
  Tabs: ({ children }: any) => <div>{children}</div>,
  TabsList: ({ children }: any) => <div>{children}</div>,
  TabsTrigger: ({ children }: any) => <button>{children}</button>,
  TabsContent: ({ children }: any) => <div>{children}</div>,
}));

describe("Gallery Components", () => {
  beforeEach(() => {
    mockUseIsMounted.mockReturnValue(true);
    mockUseMediaQuery.mockReturnValue(false);
  });

  describe("VideoPlayer", () => {
    test("should render video element with controls, source, and default mp4 type", () => {
      const html = renderToStaticMarkup(<VideoPlayer src="/videos/demo.mp4" />);

      expect(html).toContain("<video");
      expect(html).toContain("controls");
      expect(html).toContain('src="/videos/demo.mp4"');
      expect(html).toContain('type="video/mp4"');
      expect(html).toContain("Your browser does not support the video tag.");
    });

    test("should support custom type and className", () => {
      const html = renderToStaticMarkup(
        <VideoPlayer
          src="/videos/demo.webm"
          type="video/webm"
          className="custom-video-class"
        />,
      );

      expect(html).toContain('src="/videos/demo.webm"');
      expect(html).toContain('type="video/webm"');
      expect(html).toContain("custom-video-class");
    });
  });

  describe("Gallery", () => {
    test("should return null when not mounted", () => {
      mockUseIsMounted.mockReturnValue(false);

      const html = renderToStaticMarkup(<Gallery images={["/img1.png"]} />);
      expect(html).toBe("");
    });

    test("should return null when neither images nor videos are provided", () => {
      const html = renderToStaticMarkup(<Gallery />);
      expect(html).toBe("");
    });

    test("should render image carousel when images are provided", () => {
      const images = ["/images/proj1.png", "/images/proj2.png"];
      const html = renderToStaticMarkup(<Gallery images={images} />);

      expect(html).toContain("img");
      expect(html).toContain("Gallery image 1");
      expect(html).toContain("Gallery image 2");
      expect(html).toContain("Slide 0 of 0");
    });

    test("should render video carousel when videos are provided", () => {
      const videos = ["/videos/demo1.mp4"];
      const html = renderToStaticMarkup(<Gallery videos={videos} />);

      expect(html).toContain("<video");
      expect(html).toContain('src="/videos/demo1.mp4"');
    });

    test("should render tab buttons when both images and videos are provided", () => {
      const images = ["/images/proj1.png"];
      const videos = ["/videos/demo1.mp4"];

      const html = renderToStaticMarkup(
        <Gallery images={images} videos={videos} />,
      );

      expect(html).toContain("Images");
      expect(html).toContain("Videos");
    });
  });
});
