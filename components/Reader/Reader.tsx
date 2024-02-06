import Markdown from "markdown-to-jsx";
import React from "react";

type ReaderProps = {
  content: string | undefined;
  //! just giving the size without prose does not work
  size?: "lg:prose-sm" | "lg:prose-base" | "lg:prose-md" | "lg:prose-lg";
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
        ${size}
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
