import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import CodeBlock from "@/components/reader/CodeBlock";
import ContentsSection from "@/components/reader/ContentsSection";
import HtmlRender from "@/components/reader/HtmlRender";
import Mermaid from "@/components/reader/Mermaid";
import SyntaxHighlighter from "@/components/reader/PrismHighlighter";

const { mockUseIsMounted, mockUseMediaQuery, mockUseTheme } = vi.hoisted(
  () => ({
    mockUseIsMounted: vi.fn(),
    mockUseMediaQuery: vi.fn(),
    mockUseTheme: vi.fn(),
  }),
);

vi.mock("next-themes", () => ({
  useTheme: () => mockUseTheme(),
}));

vi.mock("@/hooks/useIsMounted", () => ({
  default: () => mockUseIsMounted(),
}));

vi.mock("@/hooks/useMediaQuery", () => ({
  useMediaQuery: (query: string) => mockUseMediaQuery(query),
}));

vi.mock("@/components/shadcn/ui/accordion", () => ({
  Accordion: ({ children }: any) => <div>{children}</div>,
  AccordionItem: ({ children }: any) => <div>{children}</div>,
  AccordionTrigger: ({ children }: any) => <button>{children}</button>,
  AccordionContent: ({ children }: any) => <div>{children}</div>,
}));

vi.mock("mermaid", () => ({
  default: {
    initialize: vi.fn(),
    render: vi.fn().mockResolvedValue({ svg: "<svg>diagram</svg>" }),
  },
}));

describe("Reader Modules", () => {
  beforeEach(() => {
    mockUseIsMounted.mockReturnValue(true);
    mockUseMediaQuery.mockReturnValue(false);
    mockUseTheme.mockReturnValue({ theme: "light", systemTheme: "light" });
  });

  describe("CodeBlock", () => {
    test("should render inline code when code has no newlines and no className", () => {
      const html = renderToStaticMarkup(<CodeBlock>const a = 10;</CodeBlock>);

      expect(html).toContain('<code class="inline-code">const a = 10;</code>');
    });

    test("should render block code with language highlighting when className is provided", () => {
      const code = 'const msg: string = "hello world";';
      const html = renderToStaticMarkup(
        <CodeBlock className="language-typescript">{code}</CodeBlock>,
      );

      expect(html).toContain("not-typeset");
      expect(html).toContain("msg");
      expect(html).toContain("hello world");
    });

    test("should render block code when content spans multiple lines even without className", () => {
      const multiline = "line 1\nline 2\nline 3";
      const html = renderToStaticMarkup(<CodeBlock>{multiline}</CodeBlock>);

      expect(html).toContain("not-typeset");
      expect(html).toContain("line 1");
    });

    test("should adapt to dark theme styling", () => {
      mockUseTheme.mockReturnValue({ theme: "dark", systemTheme: "dark" });

      const html = renderToStaticMarkup(
        <CodeBlock className="language-python">
          {"def hello():\n    pass"}
        </CodeBlock>,
      );

      expect(html).toContain("not-typeset");
      expect(html).toContain("hello");
    });
  });

  describe("ContentsSection", () => {
    const sampleToc = "- [Intro](#intro)\n- [Details](#details)";

    test("should return null when not mounted or contentSection is empty", () => {
      mockUseIsMounted.mockReturnValue(false);
      const notMountedHtml = renderToStaticMarkup(
        <ContentsSection contentSection={sampleToc} />,
      );
      expect(notMountedHtml).toBe("");

      mockUseIsMounted.mockReturnValue(true);
      const emptyHtml = renderToStaticMarkup(
        <ContentsSection contentSection="" />,
      );
      expect(emptyHtml).toBe("");

      const whitespaceHtml = renderToStaticMarkup(
        <ContentsSection contentSection="   " />,
      );
      expect(whitespaceHtml).toBe("");
    });

    test("should render desktop side panel when isMobile is false", () => {
      mockUseMediaQuery.mockReturnValue(false);

      const html = renderToStaticMarkup(
        <ContentsSection contentSection={sampleToc} />,
      );

      expect(html).toContain("View Contents");
      expect(html).toContain("Intro");
      expect(html).toContain("Details");
    });

    test("should render mobile accordion when isMobile is true", () => {
      mockUseMediaQuery.mockImplementation(
        (q: string) => q === "(max-width: 768px)",
      );

      const html = renderToStaticMarkup(
        <ContentsSection contentSection={sampleToc} />,
      );

      expect(html).toContain("View Contents");
      expect(html).toContain("Intro");
      expect(html).toContain("Details");
    });
  });

  describe("HtmlRender", () => {
    test("should render loading placeholder during initial/SSR render", () => {
      const rawHtml = '<span class="test-badge">Live Status</span>';
      const html = renderToStaticMarkup(
        <HtmlRender html={rawHtml} className="custom-html-class" />,
      );

      expect(html).toContain("html-render-loading");
      expect(html).toContain("custom-html-class");
    });
  });

  describe("Mermaid", () => {
    test("should render mermaid container span", () => {
      const chart = "graph TD;\n  A-->B;";
      const html = renderToStaticMarkup(<Mermaid chart={chart} />);

      expect(html).toContain("mermaid-container");
    });
  });

  describe("PrismHighlighter", () => {
    test("should export configured SyntaxHighlighter component", () => {
      expect(SyntaxHighlighter).toBeDefined();
      expect(typeof SyntaxHighlighter).toBe("function");
    });
  });
});
