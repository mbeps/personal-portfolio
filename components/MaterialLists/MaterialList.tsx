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
    <Accordion
      type="single"
      collapsible
      className="
        border-t-2 border-neutral-200 dark:border-neutral-700
        p-3 mt-5"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p
            className="
              text-lg 
              text-neutral-700 dark:text-neutral-300
              "
          >
            {`List of material directly related to ${sectionName}`}
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <MaterialTab materialKeys={materialKeys} defaultTab={defaultTab} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ) : (
    <MaterialTab materialKeys={materialKeys} defaultTab={defaultTab} />
  );
};

export default MaterialList;
