"use client";

import stringToSlug from "@/lib/stringToSlug";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import useIsMounted from "@/hooks/useIsMounted";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import React, { useState } from "react";
import SkillTable from "./CategorySkillDisplay";
import filterNonEmptySkillCategories from "@/lib/skills/filter/filterNonEmptySkillCategories";

interface SkillTableSectionProps {
  allGroupedSkills: GroupedSkillsCategoriesInterface[];
  maxSkillsPerCategory?: number;
}

/**
 * Tabbed skill table that surfaces grouped skills for blog posts, project pages, and certificate detail pages.
 * Expects pre-grouped data from `buildSkillTableGroups` so it can focus on presentation only.
 *
 * @param allGroupedSkills Array of grouped skill metadata.
 * @param maxSkillsPerCategory Reserved prop for future truncation (defaults to 5).
 * @returns Tabs element showing grouped skill categories.
 */
const SkillTableCell: React.FC<SkillTableSectionProps> = ({
  allGroupedSkills,
  maxSkillsPerCategory = 5,
}) => {
  const [selectedTab, setSelectedTab] = useState(() => {
    // Find the first group with non-empty skill categories
    const nonEmptyGroup =
      Array.isArray(allGroupedSkills) &&
      allGroupedSkills.find((group) => group.skillCategories.length > 0);
    return nonEmptyGroup ? stringToSlug(nonEmptyGroup.title) : "";
  });

  const isMounted: boolean = useIsMounted();

  // Do not render if not mounted or if there are no tabs with content
  if (!isMounted || !selectedTab) {
    return null;
  }

  // Use the function to get non-empty skill categories
  const nonEmptySkillCategories: GroupedSkillsCategoriesInterface[] =
    filterNonEmptySkillCategories(allGroupedSkills);

  return (
    <Tabs
      defaultValue={selectedTab}
      className="w-full items-center md:items-start justify-center"
      value={selectedTab}
      onValueChange={setSelectedTab}
    >
      {/* Tab Options */}
      <TabsList variant="heading" className="w-full md:w-auto">
        {nonEmptySkillCategories.map(({ title }) => (
          <TabsTrigger
            key={stringToSlug(title)}
            value={stringToSlug(title)}
            variant="heading"
          >
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content */}
      {nonEmptySkillCategories.map(({ title, skillCategories }) => (
        <TabsContent key={stringToSlug(title)} value={stringToSlug(title)}>
          <div className="mt-4 text-center md:text-left">
            <SkillTable skillCategories={skillCategories} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default SkillTableCell;
