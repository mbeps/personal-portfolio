"use client";

import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

type MermaidProps = {
  chart: string;
};

/**
 * Renders Mermaid diagrams with theme awareness.
 * Automatically adapts to light/dark theme changes.
 *
 * @param chart - The Mermaid diagram definition string
 * @returns SVG diagram rendered from the Mermaid syntax
 */
const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, systemTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    // Always use light theme for better contrast
    mermaid.initialize({
      startOnLoad: false,
      theme: "default",
      themeVariables: {
        primaryColor: "#2563eb",
        primaryTextColor: "#1f2937",
        primaryBorderColor: "#d1d5db",
        lineColor: "#9ca3af",
        secondaryColor: "#f3f4f6",
        tertiaryColor: "#f9fafb",
        background: "#ffffff",
        mainBkg: "#ffffff",
        textColor: "#1f2937",
        fontSize: "16px",
      },
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    });

    const renderDiagram = async () => {
      if (!containerRef.current) return;

      try {
        // Clear previous content
        containerRef.current.innerHTML = "";

        // Generate unique ID for this diagram
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

        // Render the diagram
        const { svg } = await mermaid.render(id, chart);

        // Insert the SVG
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error("Mermaid rendering error:", error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="mermaid-error">
              <p>Failed to render diagram</p>
              <pre>${chart}</pre>
            </div>
          `;
        }
      }
    };

    renderDiagram();
  }, [chart, isMounted]);

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="mermaid-container">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-800 h-64 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="mermaid-container my-6">
      <div
        ref={containerRef}
        className="flex justify-center items-center overflow-x-auto"
      />
    </div>
  );
};

export default Mermaid;
