"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface DisplayMathProps {
  children: string;
}

/**
 * Block-level KaTeX renderer that keeps equations centered and scrollable inside the markdown reader.
 *
 * @param children LaTeX expression extracted from the markdown placeholder.
 * @returns Centered block containing the rendered math.
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
