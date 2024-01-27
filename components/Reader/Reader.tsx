import { sign } from "crypto";
import Markdown from "markdown-to-jsx";
import React from "react";

type ReaderProps = {
  content: string | undefined;
  size?: "sm" | "base" | "md" | "lg";
};

/**
 * Renders Markdown content into HTML.
 * @param content (string): Markdown content to render
 * @returns (JSX.Element): rendered Markdown content
 */
const Reader: React.FC<ReaderProps> = ({ content, size = "lg" }) => {
  return (
    <article
      className={`
        prose
        lg:prose-${size}
        dark:prose-invert
        prose-img:rounded-lg
        max-w-none
      `}
    >
      {content && <Markdown>{content}</Markdown>}
    </article>
  );
};
export default Reader;
