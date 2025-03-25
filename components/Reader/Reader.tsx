"use client";

import Markdown from "markdown-to-jsx";
import React, { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

type ReaderProps = {
  content: string | undefined;
  size?: "lg:prose-sm" | "lg:prose-base" | "lg:prose-md" | "lg:prose-lg";
};

/**
 * Component to render inline LaTeX expressions
 */
const InlineMath: React.FC<{ children: string }> = ({ children }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(children, {
        throwOnError: false,
        displayMode: false,
        output: "html",
        trust: true,
      });
    } catch (error) {
      console.error("Error rendering inline LaTeX:", error);
      return `<span class="text-red-500">Error rendering: $${children}$</span>`;
    }
  }, [children]);

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

/**
 * Component to render block/display LaTeX expressions
 */
const DisplayMath: React.FC<{ children: string }> = ({ children }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(children, {
        throwOnError: false,
        displayMode: true,
        output: "html",
        trust: true,
        fleqn: false,
      });
    } catch (error) {
      console.error("Error rendering block LaTeX:", error);
      return `<span class="text-red-500">Error rendering: $$${children}$$</span>`;
    }
  }, [children]);

  return (
    <div className="my-6 overflow-x-auto py-2 flex justify-center">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

/**
 * Renders Markdown content with LaTeX support
 */
const Reader: React.FC<ReaderProps> = ({ content, size = "lg" }) => {
  // Parse the markdown content and extract LaTeX expressions
  const parsedContent = useMemo(() => {
    if (!content) return "";

    // Keep track of LaTeX blocks we extract
    const mathBlocks: { [key: string]: string } = {};
    let blockCount = 0;

    // Replace LaTeX blocks with placeholders to protect them from markdown processing
    let processedContent = content.replace(
      /(\$\$)([\s\S]*?)(\$\$)/g,
      (_, open, latex, close) => {
        const placeholder = `MATHBLOCK_${blockCount++}`;
        mathBlocks[placeholder] = latex.trim();
        return `<DisplayMath>${placeholder}</DisplayMath>`;
      }
    );

    // Handle inline LaTeX expressions
    processedContent = processedContent.replace(
      /(\$)([^\$\n]+?)(\$)/g,
      (_, open, latex, close) => {
        const placeholder = `MATHINLINE_${blockCount++}`;
        mathBlocks[placeholder] = latex.trim();
        return `<InlineMath>${placeholder}</InlineMath>`;
      }
    );

    // Create a custom Markdown component with overrides
    const customMarkdown = (
      <Markdown
        options={{
          overrides: {
            DisplayMath: {
              component: ({ children }: { children: string }) => {
                const placeholder = String(children);
                const latex = mathBlocks[placeholder] || placeholder;
                return <DisplayMath>{latex}</DisplayMath>;
              },
            },
            InlineMath: {
              component: ({ children }: { children: string }) => {
                const placeholder = String(children);
                const latex = mathBlocks[placeholder] || placeholder;
                return <InlineMath>{latex}</InlineMath>;
              },
            },
          },
        }}
      >
        {processedContent}
      </Markdown>
    );

    return customMarkdown;
  }, [content]);

  return (
    <article
      className={`
        prose
        ${size}
        dark:prose-invert
        prose-img:rounded-lg
        max-w-none
      `}
    >
      {parsedContent}
    </article>
  );
};

export default Reader;
