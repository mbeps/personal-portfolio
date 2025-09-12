"use client";

import Reader from "@/components/Reader/Reader";
import { Button } from "@/components/shadcn/ui/button";
import { ScrollArea } from "@/components/shadcn/ui/scroll-area";
import SidePanel from "@/components/UI/SidePanel";
import useIsMounted from "@/hooks/useIsMounted";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";
import { CiCircleList } from "react-icons/ci";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";

interface ContentsSectionProps {
  contentSection: string;
}

/**
 * Section responsible for displaying the contents of the blog.
 * On large screen sizes, it will give users the options to open a side panel to view the contents.
 * On smaller screen sizes, the contents will be displayed at the top of the blog as a collapsible section.
 *
 * @param contentSection Contents list of the blog in markdown format
 * @returns Section displaying the contents of the blog
 */
const ContentsSection: React.FC<ContentsSectionProps> = ({
  contentSection,
}) => {
  const isMobile: boolean = useMediaQuery("(max-width: 768px)");
  const isLargeScreen: boolean = useMediaQuery("(min-width: 1920px)");
  const isUltraLargeScreen: boolean = useMediaQuery("(min-width: 2170px)");
  const isMounted: boolean = useIsMounted();
  const [isPanelOpen, setIsFilterModalOpen] = useState(isLargeScreen);

  if (!isMounted) {
    return null;
  }

  function handleTogglePanel() {
    setIsFilterModalOpen(!isPanelOpen);
  }

  return (
    <>
      {!isMobile ? (
        <>
          {/* Button to open the side panel on large screens */}
          <Button
            variant="default"
            onClick={handleTogglePanel}
            className="flex items-center"
          >
            <CiCircleList size={24} className="mr-2" />
            {isPanelOpen ? "Hide Contents" : "View Contents"}
          </Button>

          {/* Side panel for large screens */}
          <SidePanel
            title="Contents"
            toggle={handleTogglePanel}
            isOpen={isPanelOpen}
            secondaryClassName={
              isUltraLargeScreen ? "md:w-lg" : "md:w-[24rem]"
            }
          >
            <ScrollArea className="h-full px-2 pb-6">
              <Reader
                content={contentSection}
                size={isUltraLargeScreen ? "lg:prose-lg" : "lg:prose-md"}
              />
            </ScrollArea>
          </SidePanel>
        </>
      ) : (
        <div className="mb-12">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center space-x-3">
                  <CiCircleList size={26} className="text-neutral-500" />
                  <p
                    className="
                      text-lg 
                      text-neutral-600 dark:text-neutral-400
                      font-semibold
                      "
                  >
                    View Contents
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-2">
                <Reader content={contentSection} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </>
  );
};

export default ContentsSection;
