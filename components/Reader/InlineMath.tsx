"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface InlineMathProps {
  children: string;
}

/**
 * Helper used by the Reader to render inline KaTeX snippets without breaking the prose flow.
 *
 * @param children Raw LaTeX expression extracted from markdown.
 * @returns `<span>` with KaTeX markup.
 */
const InlineMath: React.FC<InlineMathProps> = ({ children }) => {
  const html: string = useMemo(() => {
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

export default InlineMath;
