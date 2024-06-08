"use client";

import Reader from "@/components/Reader/Reader";
import HeadingThree from "@/components/Text/HeadingThree";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import useIsMounted from "@/hooks/useIsMounted";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { IoReaderOutline } from "react-icons/io5";

type TabbedReaderProps = {
  projectName: string;
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
 * @param features Features to be rendered
 * @param blog Blog to be rendered
 * @returns Rendered Markdown content in a tabbed view
 */
const ProjectReader: React.FC<TabbedReaderProps> = ({
  content,
  projectName,
}) => {
  const hasFeatures: boolean = !!content.features;
  const hasBlog: boolean = !!content.blog;
  const isMounted: boolean = useIsMounted();
  const [view, setView] = useState<"features" | "reflection">("features");
  const message: MutableRefObject<string> = useRef(
    `Explore features & the journey building ${projectName}`
  );

  useEffect(() => {
    if (!hasFeatures && hasBlog) {
      setView("reflection");
      message.current = `Read about the journey of building ${projectName}`;
    } else if (!hasBlog && hasFeatures) {
      setView("features");
      message.current = `Explore the features of ${projectName}`;
    }
  }, [hasFeatures, hasBlog, projectName]);

  if (!isMounted) {
    return null;
  }

  if (!hasBlog && !hasFeatures) {
    return null;
  }

  const tabStyle: string = `
    text-2xl md:text-2xl font-bold
    data-[state=inactive]:text-neutral-400 dark:data-[state=inactive]:text-neutral-600
    data-[state=active]:shadow-none data-[state=active]:bg-transparent
    transition-all duration-500`;

  return (
    <Accordion type="single" collapsible className="mt-16">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger
          className="
            rounded-xl px-3
            border
            border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            bg-neutral-50 dark:bg-neutral-950
            shadow-sm hover:shadow-md
            transition-all duration-500 ease-in-out"
        >
          <div className="flex items-center space-x-3">
            <IoReaderOutline size={26} className="text-neutral-500" />
            <p
              className="
                text-lg 
                text-neutral-600 dark:text-neutral-400
                font-semibold
                "
            >
              {message.current}
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="mt-4">
          <div className="flex flex-col pt-8">
            <Tabs defaultValue={view} className="w-full">
              {/* Options */}
              {hasFeatures && hasBlog && (
                <div>
                  <TabsList
                    className="
                      mt-6 md:-ml-4
                      w-full md:w-auto 
                      bg-transparent 
                      flex-col md:flex-row
                      "
                  >
                    <TabsTrigger value="features" className={tabStyle}>
                      Features
                    </TabsTrigger>
                    <TabsTrigger value="reflection" className={tabStyle}>
                      Reflection
                    </TabsTrigger>
                  </TabsList>
                </div>
              )}
              {/* Content */}
              <TabsContent value="features">
                {!(hasFeatures && hasBlog) && <HeadingThree title="Features" />}
                <Reader content={content.features} size="lg:prose-md" />
              </TabsContent>
              <TabsContent value="reflection">
                {!(hasFeatures && hasBlog) && (
                  <HeadingThree title="Reflection" />
                )}
                <p className="text-center text-neutral-600 dark:text-neutral-300 text-lg py-4">
                  This reflection provides insights into the journey of building
                  this project
                </p>
                <Reader content={content.blog} size="lg:prose-lg" />
              </TabsContent>
            </Tabs>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProjectReader;
