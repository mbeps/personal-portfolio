"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface DisplayMathProps {
  children: string;
}

/**
 * Component to render block/display LaTeX expressions with $$ ... $$
 *
 * @param children LaTeX expression to render
 * @returns Rendered LaTeX expression
 * @author Maruf Bepary
 */
const DisplayMath: React.FC<DisplayMathProps> = ({ children }) => {
  const html: string = useMemo(() => {
    try {
      return katex.renderToString(children, {
        throwOnError: false,
        displayMode: true,
        output: "html",
        trust: true,
        fleqn: false, // Center equations
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

export default DisplayMath;
