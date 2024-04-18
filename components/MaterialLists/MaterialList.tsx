import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import MaterialType from "@/enums/MaterialType";
import React from "react";
import MaterialTab from "./MaterialTab";

export interface MaterialTabsProps {
  materialKeys: string[];
  defaultTab?: MaterialType;
  isCollapsible?: boolean;
  sectionName?: string;
}

//TODO: Add documentation
const MaterialList: React.FC<MaterialTabsProps> = ({
  materialKeys,
  defaultTab,
  isCollapsible = true,
  sectionName,
}) => {
  return isCollapsible ? (
    <Accordion type="single" collapsible className="mt-16">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger
          className="
            rounded-xl px-3
            border
            border-neutral-200 dark:border-neutral-700
            hover:border-neutral-300 dark:hover:border-neutral-600
            bg-neutral-50 dark:bg-neutral-950
            shadow-sm hover:shadow-md
            transition-all duration-500 ease-in-out"
        >
          <p
            className="
              text-lg font-semibold text-left
              text-neutral-700 dark:text-neutral-300
              "
          >
            {`List of material directly related to ${sectionName}`}
          </p>
        </AccordionTrigger>
        <AccordionContent className="mt-4">
          <MaterialTab materialKeys={materialKeys} defaultTab={defaultTab} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ) : (
    <MaterialTab materialKeys={materialKeys} defaultTab={defaultTab} />
  );
};

export default MaterialList;
