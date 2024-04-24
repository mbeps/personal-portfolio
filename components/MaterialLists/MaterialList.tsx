import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import MaterialTypeEnum from "@/enums/Material/MaterialTypeEnum";
import React from "react";
import MaterialTab from "./MaterialTab";
import { GrAppsRounded } from "react-icons/gr";

export interface MaterialTabsProps {
  materialKeys: string[];
  defaultTab?: MaterialTypeEnum;
  isCollapsible?: boolean;
  sectionName?: string;
}

/**
 * A component displaying all the materials in a tabbed list.
 * Each tab contains a list of materials of a specific type, for example, 'projects', certificates', etc.
 * This allows the user to quickly view the materials of a specific type without having to scroll through a long list.
 *
 * When `isCollapsible` is true, the list is displayed in an accordion format which is collapsed by default.
 * When `isCollapsible` is false, the list is displayed directly without the accordion and it cannot be collapsed.
 *
 * @param materialKeys List of keys for the materials that need to be displayed
 * @param defaultTab The default tab to be displayed when the list is rendered
 * @param isCollapsible Whether the list should be collapsible or not
 * @param sectionName The name of the section that the materials are related to which is displayed in the accordion trigger
 * @returns A tabbed list of materials
 */
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
            border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            bg-neutral-50 dark:bg-neutral-950
            shadow-sm hover:shadow-md
            transition-all duration-500 ease-in-out"
        >
          <div className="flex items-center space-x-3">
            <GrAppsRounded size={24} className="text-neutral-500" />
            <p
              className="
                  text-lg 
                  text-neutral-600 dark:text-neutral-400
                  font-semibold
                  "
            >
              {`List of material directly related to ${sectionName}`}
            </p>
          </div>
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
