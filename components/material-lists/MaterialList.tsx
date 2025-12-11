import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import MaterialTypeEnum from "@/enums/material/MaterialTypeEnum";
import React from "react";
import MaterialTab from "./MaterialTab";
import { GrAppsRounded } from "react-icons/gr";

export interface MaterialTabsProps {
  materialKeys: string[];
  isCollapsible?: boolean;
}

/**
 * Primary wrapper for rendering related material tabs anywhere across the site (projects, courses, roles, etc.).
 * Keeps layout consistent by deferring to `MaterialTab` and optionally wrapping it in a collapsible accordion for dense pages.
 *
 * @param materialKeys Material slugs resolved upstream via the static DB.
 * @param isCollapsible Whether to hide the list behind an accordion trigger (useful on detail pages).
 * @returns Accordion containing `MaterialTab`, or the tab set directly when not collapsible.
 */
const MaterialList: React.FC<MaterialTabsProps> = ({
  materialKeys,
  isCollapsible = true,
}) => {
  return isCollapsible ? (
    <Accordion type="single" collapsible>
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
              Related Material
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
