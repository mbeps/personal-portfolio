"use client";

import Reader from "@/components/Reader/Reader";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { Button } from "@/components/shadcn/ui/button";
import useIsMounted from "@/hooks/useIsMounted";
import React, { useEffect, useState } from "react";

type TabbedReaderProps = {
  content: {
    features?: string;
    blog?: string;
  };
};

/**
 * Renders Markdown content into HTML in a tabbed view.
 * The user can select between "Features" and "Reflection" tabs.
 * If the content does not have a "Features" section, the "Reflection" tab will be selected by default.
 * If the content does not have a "Reflection" section, the "Features" tab will be selected by default.
 * If the content does not have a "Features" or "Reflection" section, nothing will be rendered.
 *
 * @param features (string): features to be rendered
 * @param blog (string): blog to be rendered
 * @returns (JSX.Element): rendered Markdown content in a tabbed view
 */
const TabbedReader: React.FC<TabbedReaderProps> = ({ content }) => {
  const hasFeatures = !!content.features;
  const hasBlog = !!content.blog;
  const isMounted = useIsMounted();
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

  if (!isMounted) {
    return null;
  }

  if (!hasBlog && !hasFeatures) {
    return null;
  }

  return (
    <>
      <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />

      <div className="w-full space-y-7">
        {hasFeatures && hasBlog && (
          <div className="flex flex-row justify-center">
            <div className="flex flex-row w-full md:w-1/2 space-x-2">
              <Button
                onClick={() => setView("features")}
                variant={view === "features" ? "filled" : "ghost"}
                size="sm"
                className="w-full"
              >
                Features
              </Button>
              <Button
                onClick={() => setView("blog")}
                variant={view === "blog" ? "filled" : "ghost"}
                size="sm"
                className="w-full"
              >
                Reflection
              </Button>
            </div>
          </div>
        )}
        <HeadingTwo title={title} />
        <Reader content={viewContent} />
      </div>
    </>
  );
};

export default TabbedReader;
