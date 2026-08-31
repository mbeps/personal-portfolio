/// <reference types="vitest/globals" />
import React from "react";
import { describe, expect, test, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import Reader from "@/components/reader/Reader";

// Mock next-themes for CodeBlock in Node environment
vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", systemTheme: "light" }),
}));

describe("Reader Component", () => {
  test("should return null when content is undefined or empty", () => {
    const outputUndefined = Reader({ content: undefined });
    expect(outputUndefined).toBeNull();

    const outputEmpty = Reader({ content: "" });
    expect(outputEmpty).toBeNull();
  });

  test("should render standard markdown elements with typeset wrapper", () => {
    const markdown =
      "# Test Heading\n\nThis is a paragraph with **bold** and *italic* text.";
    const html = renderToStaticMarkup(<Reader content={markdown} />);

    expect(html).toContain("typeset");
    expect(html).toContain("typeset-docs");
    expect(html).toContain('<h1 class="markdown-heading">Test Heading</h1>');
    expect(html).toContain("<strong>bold</strong>");
    expect(html).toContain("<em>italic</em>");
  });

  test("should apply correct preset classes based on size prop", () => {
    const readingHtml = renderToStaticMarkup(
      <Reader content="Sample content" size="reading" />,
    );
    expect(readingHtml).toContain("typeset-reading");

    const compactHtml = renderToStaticMarkup(
      <Reader content="Sample content" size="compact" />,
    );
    expect(compactHtml).toContain("typeset-compact");

    const lgHtml = renderToStaticMarkup(
      <Reader content="Sample content" size="lg" />,
    );
    expect(lgHtml).toContain("typeset-reading");

    const smHtml = renderToStaticMarkup(
      <Reader content="Sample content" size="sm" />,
    );
    expect(smHtml).toContain("typeset-compact");
  });

  test("should render GFM tables with typeset-scroll wrapper and rounded-table class", () => {
    const tableMarkdown = `
| Header 1 | Header 2 |
| :--- | :--- |
| Cell 1 | Cell 2 |
    `;
    const html = renderToStaticMarkup(<Reader content={tableMarkdown} />);

    expect(html).toContain('class="typeset-scroll"');
    expect(html).toContain('class="rounded-table"');
    expect(html).toContain("Header 1");
    expect(html).toContain("Cell 1");
  });

  test("should render inline and block KaTeX math formulas", () => {
    const mathMarkdown = "Inline formula: $E=mc^2$\n\n$$\n\\int_0^1 x^2 dx\n$$";
    const html = renderToStaticMarkup(<Reader content={mathMarkdown} />);

    expect(html).toContain("katex");
    expect(html).toContain("katex-display");
  });

  test("should normalize math blocks directly underneath text without blank lines to katex-display", () => {
    const attachedMath = "**Full Fine-Tuning Complexity:**\n$$N_{FFT} = d^2 = (12,288)^2 \\approx 150,994,944 \\text{ parameters}$$";
    const html = renderToStaticMarkup(<Reader content={attachedMath} />);

    expect(html).toContain("katex-display");
    expect(html).toContain("Full Fine-Tuning Complexity:");
  });

  test("should render mermaid diagram code blocks without outer pre tags", () => {
    const mermaidMarkdown = "```mermaid\ngraph TD;\n  A-->B;\n```";
    const html = renderToStaticMarkup(<Reader content={mermaidMarkdown} />);

    expect(html).toContain("mermaid-container");
    expect(html).not.toContain("<pre><span class=\"mermaid-container");
  });

  test("should render custom html-render blocks", () => {
    const htmlBlockMarkdown =
      '```html-render\n<div class="custom-widget">Interactive Demo</div>\n```';
    const html = renderToStaticMarkup(<Reader content={htmlBlockMarkdown} />);

    expect(html).toContain("html-render");
  });
});
