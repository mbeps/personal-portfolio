"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { cn } from "@/lib/utils";
import CodeBlock from "./code-block";
import HtmlRender from "./html-render";
import Mermaid from "./mermaid";

export type ReaderSize = "sm" | "base" | "lg" | "reading" | "compact" | "docs";

export type ReaderProps = {
  content: string | null | undefined;
  size?: ReaderSize;
  className?: string;
};

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const sizeToPresetMap: Record<ReaderSize, string> = {
  sm: "typeset-compact",
  compact: "typeset-compact",
  base: "typeset-docs",
  docs: "typeset-docs",
  lg: "typeset-reading",
  reading: "typeset-reading",
};

const createHeadingComponent = (Tag: HeadingTag) => {
  const HeadingComponent = ({
    className,
    children,
    node: _node,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => {
    return React.createElement(
      Tag,
      { ...props, className: cn(className, "markdown-heading") },
      children,
    );
  };
  HeadingComponent.displayName = `Markdown${Tag.toUpperCase()}`;
  return HeadingComponent;
};

/**
 * Normalizes math block delimiters in markdown so `remark-math` parses any `$$...$$`
 * formulas as standalone block math elements (with displayMode, centering, and generous line spacing),
 * even if they were written directly underneath text without surrounding blank lines.
 */
const normalizeMathBlocks = (rawContent: string): string => {
  // Split by fenced code blocks and inline code spans to ensure we don't modify code samples
  const parts = rawContent.split(/(```[\s\S]*?```|`[^`\n]+`)/g);
  return parts
    .map((part, index) => {
      // Odd index is a code block or inline code span
      if (index % 2 === 1) return part;
      // Normalize any $$...$$ into isolated block math paragraphs
      return part.replace(/\$\$([\s\S]*?)\$\$/g, (_match, math) => {
        return `\n\n$$\n${math.trim()}\n$$\n\n`;
      });
    })
    .join("");
};

/**
 * Base markdown renderer powered by react-markdown and Shadcn Typeset.
 * Natively supports GFM, KaTeX math (inline & display), Mermaid diagrams,
 * Prism syntax highlighting, custom HTML rendering, and rounded responsive tables.
 *
 * @param content Markdown string to render.
 * @param size Typeset size / rhythm preset ("sm" | "base" | "lg" | "reading" | "compact" | "docs").
 * @param className Optional container className.
 * @returns Styled markdown article element.
 */
const Reader: React.FC<ReaderProps> = ({
  content,
  size = "docs",
  className,
}) => {
  if (!content) return null;

  const presetClass = sizeToPresetMap[size] || "typeset-docs";
  const processedContent = normalizeMathBlocks(content);

  return (
    <article className={cn("typeset", presetClass, "max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeSlug, rehypeKatex, rehypeRaw]}
        components={{
          h1: createHeadingComponent("h1"),
          h2: createHeadingComponent("h2"),
          h3: createHeadingComponent("h3"),
          h4: createHeadingComponent("h4"),
          h5: createHeadingComponent("h5"),
          h6: createHeadingComponent("h6"),
          pre({ children }) {
            return <>{children}</>;
          },
          code({ className, children, node: _node, ...props }) {
            const match = /language-(\w+)|lang-(\w+)/.exec(className || "");
            const lang = match?.[1] || match?.[2] || "";
            const codeText = String(children).replace(/\n$/, "");

            if (lang === "mermaid") {
              return <Mermaid chart={codeText} />;
            }
            if (lang === "html-render") {
              return <HtmlRender html={codeText} />;
            }

            return (
              <CodeBlock className={className} {...props}>
                {children}
              </CodeBlock>
            );
          },
          table({ children, node: _node, ...props }) {
            return (
              <div className="typeset-scroll">
                <table className="rounded-table" {...props}>
                  {children}
                </table>
              </div>
            );
          },
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </article>
  );
};

export default Reader;
