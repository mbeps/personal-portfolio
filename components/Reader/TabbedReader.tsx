"use client";

import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import HeadingTwo from "../Text/HeadingTwo";
import Button from "../Atoms/Button";

type TabbedReaderProps = {
  content: {
    features?: string;
    blog?: string;
  };
};

const TabbedReader: React.FC<TabbedReaderProps> = ({ content }) => {
  const hasFeatures = !!content.features;
  const hasBlog = !!content.blog;

  const [view, setView] = useState<"features" | "blog">("features");

  useEffect(() => {
    if (!hasFeatures && hasBlog) {
      setView("blog");
    } else if (!hasBlog && hasFeatures) {
      setView("features");
    } else if (!hasBlog && !hasFeatures) {
      return;
    }
  }, [hasFeatures, hasBlog]);

  const viewContent = view === "features" ? content.features : content.blog;
  const title = view === "features" ? "Features" : "Reflection";

  if (!hasBlog && !hasFeatures) {
    return null;
  }

  return (
    <>
      <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />

      <div className="w-full space-y-7">
        {hasFeatures && hasBlog && (
          <div className="flex flex-row justify-center">
            <div className="flex flex-row w-1/2 space-x-2">
              <Button
                onClick={() => setView("features")}
                variant={view === "features" ? "filled" : "ghost"}
                className="py-2 w-full"
              >
                Features
              </Button>
              <Button
                onClick={() => setView("blog")}
                variant={view === "blog" ? "filled" : "ghost"}
                className="py-2 w-full"
              >
                Reflection
              </Button>
            </div>
          </div>
        )}
        <HeadingTwo title={title} />
        <article className="prose lg:prose-xl dark:prose-invert prose-img:rounded-lg max-w-none">
          {viewContent && <Markdown>{viewContent}</Markdown>}
        </article>
      </div>
    </>
  );
};

export default TabbedReader;
