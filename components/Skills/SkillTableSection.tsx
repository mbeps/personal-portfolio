"use client";

import stringToSlug from "@/actions/stringToSlug";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import useIsMounted from "@/hooks/useIsMounted";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import React, { useState } from "react";
import CategorySkillDisplay from "./CategorySkillDisplay";
import filterNonEmptySkillCategories from "@/actions/skills/filter/filterNonEmptySkillCategories";

interface SkillTableSectionProps {
  allGroupedSkills: GroupedSkillsCategoriesInterface[];
  maxSkillsPerCategory?: number;
}

/**
 * Component displaying skills.
 * These skills are grouped; for example, technologies, technical skills, soft skills, etc.
 * Each of the skills in these groups are also cateogorised by their types;
 * for example, languages, frameworks, etc.
 *
 * @param allGroupedSkills Skills to be displayed in the table as groups
 * @returns A section containing a table of skills grouped by categories
 * @requires CategorySkillDisplay Component for displaying the categorised skills within the groups
 */
const SkillTableSection: React.FC<SkillTableSectionProps> = ({
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
            <CategorySkillDisplay skillCategories={skillCategories} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default SkillTableSection;
