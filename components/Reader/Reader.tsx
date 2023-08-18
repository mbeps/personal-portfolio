import Markdown from "markdown-to-jsx";
import React from "react";

type ReaderProps = {
  content: string | undefined;
};

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
