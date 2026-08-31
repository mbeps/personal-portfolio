"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
          "html-render-loading my-8 h-32 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50",
          className,
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "html-render-container my-8 w-full overflow-x-auto",
        "rounded-xl border border-slate-200 shadow-sm dark:border-slate-800",
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
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted static database content
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default HtmlRender;
