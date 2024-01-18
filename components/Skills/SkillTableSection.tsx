"use client";

import stringToSlug from "@/actions/stringToSlug";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import useIsMounted from "@/hooks/useIsMounted";
import GroupedSkillsInterface from "@/interfaces/skills/GroupedSkillsInterface";
import React, { useState } from "react";
import CategorySkillDisplay from "./CategorySkillDisplay";

interface SkillTableSectionProps {
  allGroupedSkills: GroupedSkillsInterface[];
}

const SkillTableSection: React.FC<SkillTableSectionProps> = ({
  allGroupedSkills,
}) => {
  const [selectedTab, setSelectedTab] = useState(
    allGroupedSkills.length > 0 ? stringToSlug(allGroupedSkills[0].title) : "",
  );

  const isMounted = useIsMounted();

  if (!isMounted) {
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
      <TabsList className="mt-6 -mb-2 w-full md:w-auto">
        {allGroupedSkills
          .filter(({ skillCategories }) => skillCategories.length > 0) // Filtering out empty skill categories
          .map(({ title }) => (
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
      {allGroupedSkills
        .filter(({ skillCategories }) => skillCategories.length > 0) // Filtering out empty skill categories
        .map(({ title, skillCategories }) => (
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
