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
  isCollapsible?: boolean;
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
  isCollapsible = true,
}) => {
  return isCollapsible ? (
    <Accordion type="single" collapsible className="mt-16">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center space-x-3">
            <GrAppsRounded size={24} className="text-neutral-500" />
            <p
              className="
                text-lg 
                text-neutral-600 dark:text-neutral-400
                font-semibold
                "
            >
              Directly Related Material
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="mt-4 px-2 lg:px-4">
          <MaterialTab materialKeys={materialKeys} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ) : (
    <MaterialTab materialKeys={materialKeys} />
  );
};

export default MaterialList;
