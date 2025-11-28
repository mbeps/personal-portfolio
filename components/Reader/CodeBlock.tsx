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

  const codeText =
    typeof children === "string"
      ? children
      : React.Children.toArray(children)
          .map((child) => (typeof child === "string" ? child : ""))
          .join("");

  // Treat as block if a language is provided or the snippet spans multiple lines
  const isBlock = Boolean(className) || codeText.includes("\n");

  // Inline code path remains simple
  if (!isBlock) {
    return <code className="inline-code">{codeText}</code>;
  }

  // Extract language from className (supports language-xyz and lang-xyz formats)
  const languageMatch = className?.match(/language-(\w+)|lang-(\w+)/);
  const language = languageMatch?.[1] || languageMatch?.[2] || "text";

  // Determine current theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <pre className="code-block-loading">
        <code className={className}>{codeText}</code>
      </pre>
    );
  }

  const backgroundColor = isDark ? "#1f2430" : "#f5f5f7";
  const borderColor = isDark
    ? "rgba(255, 255, 255, 0.06)"
    : "rgba(15, 23, 42, 0.08)";

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
        backgroundColor,
        border: `1px solid ${borderColor}`,
      }}
      codeTagProps={{
        style: {
          backgroundColor: "transparent",
          display: "block",
        },
      }}
      showLineNumbers={false}
      wrapLongLines={true}
      PreTag="div"
    >
      {codeText}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
