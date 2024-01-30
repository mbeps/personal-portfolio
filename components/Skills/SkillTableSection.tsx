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
import filterNonEmptySkillCategories from "@/actions/skills/filterNonEmptySkillCategories";

interface SkillTableSectionProps {
  allGroupedSkills: GroupedSkillsCategoriesInterface[];
}

const SkillTableSection: React.FC<SkillTableSectionProps> = ({
  allGroupedSkills,
}) => {
  const [selectedTab, setSelectedTab] = useState(() => {
    // Find the first group with non-empty skill categories
    const nonEmptyGroup =
      Array.isArray(allGroupedSkills) &&
      allGroupedSkills.find((group) => group.skillCategories.length > 0);
    return nonEmptyGroup ? stringToSlug(nonEmptyGroup.title) : "";
  });

  const isMounted = useIsMounted();

  // Do not render if not mounted or if there are no tabs with content
  if (!isMounted || !selectedTab) {
    return null;
  }

  // Use the function to get non-empty skill categories
  const nonEmptySkillCategories = filterNonEmptySkillCategories(allGroupedSkills);

  return (
    <Tabs
      defaultValue={selectedTab}
      className="w-full items-center md:items-start justify-center"
      value={selectedTab}
      onValueChange={setSelectedTab}
    >
      {/* Tab Options */}
      <TabsList className="mt-6 -mb-2 w-full md:w-auto">
        {nonEmptySkillCategories.map(({ title }) => (
          <TabsTrigger
            key={stringToSlug(title)}
            value={stringToSlug(title)}
            className="text-lg md:text-xl font-bold"
          >
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content */}
      {nonEmptySkillCategories.map(({ title, skillCategories }) => (
        <TabsContent key={stringToSlug(title)} value={stringToSlug(title)}>
          <div className="mt-4 text-center md:text-left">
            {/* Adjust CategorySkillDisplay to accept the new structure */}
            <CategorySkillDisplay skillCategories={skillCategories} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default SkillTableSection;
