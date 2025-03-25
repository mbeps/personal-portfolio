"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface InlineMathProps {
  children: string;
}

/**
 * Component to render inline LaTeX expressions with $ ... $
 *
 * @param children LaTeX expression to render
 * @returns Rendered LaTeX expression
 * @author Maruf Bepary
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
