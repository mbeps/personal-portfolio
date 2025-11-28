"use client";

import React from "react";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import SyntaxHighlighter from "./PrismHighlighter";

type CodeBlockProps = {
  children: string;
  className?: string;
};

/**
 * Renders code blocks with syntax highlighting.
 * Automatically adapts to light/dark theme changes.
 * Handles both inline code and code blocks differently.
 *
 * @param children - The code string to highlight
 * @param className - Optional className containing language info (e.g., "language-javascript")
 * @returns Syntax-highlighted code block or inline code
 */
const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const { theme, systemTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check if this is inline code (no className means inline code)
  const isInline = !className;

  // If it's inline code, just render it as a simple code element
  if (isInline) {
    return <code className="inline-code">{children}</code>;
  }

  // Extract language from className (supports language-xyz and lang-xyz formats)
  const languageMatch = className.match(/language-(\w+)|lang-(\w+)/);
  const language = languageMatch?.[1] || languageMatch?.[2] || "text";

  // Determine current theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <pre className="code-block-loading">
        <code className={className}>{children}</code>
      </pre>
    );
  }

  return (
    // @ts-ignore - SyntaxHighlighter has type issues with React 18
    <SyntaxHighlighter
      language={language}
      style={isDark ? oneDark : oneLight}
      customStyle={{
        margin: "1.5rem 0",
        borderRadius: "0.5rem",
        fontSize: "0.95rem",
        lineHeight: "1.6",
        padding: "1rem",
      }}
      showLineNumbers={false}
      wrapLongLines={true}
      PreTag="div"
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
