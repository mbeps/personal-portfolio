import Markdown from "markdown-to-jsx";
import React from "react";

type ReaderProps = {
  content: string | undefined;
};

/**
 * Renders Markdown content into HTML.
 * @param content (string): Markdown content to render
 * @returns (JSX.Element): rendered Markdown content
 */
const Reader: React.FC<ReaderProps> = ({ content }) => {
  return (
    <article
      className="
			lg:prose-lg 
			prose-neutral dark:prose-invert 
			prose-img:rounded-lg 
			max-w-none"
    >
      {content && <Markdown>{content}</Markdown>}
    </article>
  );
};
export default Reader;
