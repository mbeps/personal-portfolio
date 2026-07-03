"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface HtmlRenderProps {
  html: string;
  className?: string;
}

/**
 * HtmlRender component to render raw HTML strings in a styled container.
 * This is primarily used for custom diagrams or layouts in markdown.
 *
 * @param html - The raw HTML string to be rendered.
 * @param className - Optional additional styling for the container.
 * @returns A component that renders the provided HTML.
 */
const HtmlRender: React.FC<HtmlRenderProps> = ({ html, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div
        className={cn(
          "html-render-loading w-full my-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 h-32 animate-pulse",
          className,
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "html-render-container w-full my-8 overflow-x-auto",
        "rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm",
        "bg-slate-50/50 dark:bg-slate-900/50",
        "p-6",
        className,
      )}
    >
      {/* 
          ponytail: use dangerouslySetInnerHTML for trusted static database content.
          Upgrade path: Use a sanitizer (e.g., DOMPurify) if inputs ever become external/user-provided. 
      */}
      <div
        className="html-render-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default HtmlRender;
