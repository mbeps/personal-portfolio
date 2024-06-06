"use client";

import Reader from "@/components/Reader/Reader";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { Button } from "@/components/shadcn/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
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
  const [view, setView] = useState<"features" | "reflection">("features");

  useEffect(() => {
    if (!hasFeatures && hasBlog) {
      // If there is no features, but there is a blog, set the view to "blog"
      setView("reflection");
    } else if (!hasBlog && hasFeatures) {
      // If there is no blog, but there are features, set the view to "features"
      setView("features");
    } else if (!hasBlog && !hasFeatures) {
      // If there are no features or blog, set the view to "none"
      return;
    }
  }, [hasFeatures, hasBlog]);

  if (!isMounted) {
    return null;
  }

  if (!hasBlog && !hasFeatures) {
    return null;
  }

  return (
    <div
      className="
        flex flex-col items-center
        pt-8
      "
    >
      <Tabs defaultValue={view} className="w-full space-y-6">
        {/* Options */}
        {hasFeatures && hasBlog && (
          <div className="flex justify-center items-center">
            <TabsList
              className="
              rounded-full
              w-full md:w-2/5
              flex flex-row space-x-1
              transition-colors duration-700
              md:text-lg
              "
            >
              <TabsTrigger
                value="features"
                className="
                  px-6 py-2
                  w-full
                  text-neutral-400 dark:text-neutral-200 text-md
                  rounded-full
                  transition-colors duration-700
                  "
              >
                Features
              </TabsTrigger>
              <TabsTrigger
                value="reflection"
                className="
                  px-6
                  w-full
                  text-neutral-400 dark:text-neutral-200 text-md
                  rounded-full
                  transition-colors duration-700
                  "
              >
                Reflection
              </TabsTrigger>
            </TabsList>
          </div>
        )}
        {/* Content */}
        <TabsContent value="features">
          {!(hasFeatures && hasBlog) && <HeadingTwo title="Features" />}
          <Reader content={content.features} size="lg:prose-lg" />
        </TabsContent>
        <TabsContent value="reflection">
          {!(hasFeatures && hasBlog) && <HeadingTwo title="Reflection" />}
          <p className="text-center text-neutral-600 dark:text-neutral-300 text-lg">
            This reflection provides insights into the journey of building this
            project
          </p>
          <Reader content={content.blog} size="lg:prose-lg" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabbedReader;
