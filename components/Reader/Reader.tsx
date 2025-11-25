"use client";

import Markdown from "markdown-to-jsx";
import React, { useMemo } from "react";
import InlineMath from "./InlineMath";
import DisplayMath from "./DisplayMath";

type ReaderProps = {
  content: string | undefined;
  size?: "lg:prose-sm" | "lg:prose-base" | "lg:prose-md" | "lg:prose-lg";
};

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const createHeadingComponent = (
  Tag: HeadingTag
): React.FC<React.HTMLAttributes<HTMLHeadingElement>> => {
  const HeadingComponent: React.FC<
    React.HTMLAttributes<HTMLHeadingElement>
  > = ({ className, ...props }) => {
    const combinedClassName = [className, "markdown-heading"]
      .filter(Boolean)
      .join(" ")
      .trim();

    return React.createElement(Tag, {
      ...props,
      className: combinedClassName,
    });
  };

  HeadingComponent.displayName = `Markdown${Tag.toUpperCase()}`;
  return HeadingComponent;
};

const headingOverrides = {
  h1: { component: createHeadingComponent("h1") },
  h2: { component: createHeadingComponent("h2") },
  h3: { component: createHeadingComponent("h3") },
  h4: { component: createHeadingComponent("h4") },
  h5: { component: createHeadingComponent("h5") },
  h6: { component: createHeadingComponent("h6") },
};

/**
 * Base markdown renderer used by the about page, project features, and other short-form sections, complete with inline and block LaTeX support.
 *
 * @param content Markdown string from the filesystem helpers.
 * @param size Tailwind prose size modifier.
 * @returns Prose article element with math-aware rendering.
 */
const Reader: React.FC<ReaderProps> = ({ content, size = "lg" }) => {
  // Parse the markdown content and extract LaTeX expressions
  const parsedContent = useMemo(() => {
    if (!content) return "";

    // Keep track of LaTeX blocks we extract
    const mathBlocks: { [key: string]: string } = {};
    let blockCount: number = 0;

    // First, replace display math blocks ($$...$$) with placeholders
    let processedContent: string = content.replace(
      /\$\$([\s\S]*?)\$\$/g,
      (match, latex) => {
        const placeholder = `MATHBLOCK_${blockCount++}`;
        mathBlocks[placeholder] = latex.trim();
        return `<DisplayMath>${placeholder}</DisplayMath>`;
      }
    );

    // Then, replace inline math ($...$) with placeholders
    processedContent = processedContent.replace(
      /\$([^\$]+?)\$/g,
      (match, latex) => {
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
            ...headingOverrides,
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
        prose-img:mx-auto
        max-w-none
      `}
    >
      {parsedContent}
    </article>
  );
};

export default Reader;
