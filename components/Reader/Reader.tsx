import Markdown from "markdown-to-jsx";
import React from "react";

type ReaderProps = {
  content: string | undefined;
  //! just giving the size without prose does not work
  size?: "lg:prose-sm" | "lg:prose-base" | "lg:prose-md" | "lg:prose-lg";
};

/**
 * Renders Markdown content into HTML so that it can be displayed on the page.
 * The markdown content is displayed in a reader-friendly format similar to how Markdown readers display content.
 *
 * @param content Markdown content to render
 * @param size Size of the text in the reader
 * @returns Rendered Markdown content
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
