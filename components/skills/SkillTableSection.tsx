"use client";

import stringToSlug from "@/lib/stringToSlug";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import useIsMounted from "@/hooks/useIsMounted";
import ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";
import hasAnySkills from "@/lib/skills/hasAnySkills";
import React, { useMemo, useState } from "react";
import CategorySkillDisplay from "./CategorySkillDisplay";
import filterNonEmptySkillCategories from "@/lib/skills/filter/filterNonEmptySkillCategories";

interface SkillTableSectionProps {
  allGroupedSkills: ListOfCategorisedSkillsByTypeInterface[];
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
const SkillTableSection: React.FC<SkillTableSectionProps> = ({
  allGroupedSkills,
  maxSkillsPerCategory: _maxSkillsPerCategory = 5,
}) => {
  const nonEmptySkillCategories: ListOfCategorisedSkillsByTypeInterface[] =
    useMemo(
      () => filterNonEmptySkillCategories(allGroupedSkills),
      [allGroupedSkills],
    );

  const [selectedTab, setSelectedTab] = useState(() => {
    const firstGroup = nonEmptySkillCategories[0];
    return firstGroup ? stringToSlug(firstGroup.title) : "";
  });

  const hasSkills = hasAnySkills(allGroupedSkills);
  const isMounted: boolean = useIsMounted();

  // Do not render if not mounted or if there are no tabs with content
  if (!isMounted || !hasSkills) {
    return null;
  }

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
