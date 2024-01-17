"use client";

import stringToSlug from "@/actions/stringToSlug";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import useIsMounted from "@/hooks/useIsMounted";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import React, { useState } from "react";
import CategorySkillDisplay from "./CategorySkillDisplay";

interface SkillCategoryProps {
  title: string;
  skillCategories: SkillsCategoryInterface[];
}

interface SkillTableSectionProps {
  allGroupedSkills: Record<string, SkillCategoryProps>;
}

const SkillTableSection: React.FC<SkillTableSectionProps> = ({
  allGroupedSkills,
}) => {
  const [selectedTab, setSelectedTab] = useState(
    Object.keys(allGroupedSkills).find(
      (key) => allGroupedSkills[key].skillCategories.length > 0,
    ) || "",
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
        {Object.entries(allGroupedSkills)
          .filter(([_, { skillCategories }]) => skillCategories.length > 0) // Filtering out empty skill categories
          .map(([key, { title }]) => (
            <TabsTrigger
              key={key}
              value={stringToSlug(title)}
              className="text-lg md:text-xl font-bold"
            >
              {title}
            </TabsTrigger>
          ))}
      </TabsList>

      {/* Tab Content */}
      {/* Each section */}
      {Object.entries(allGroupedSkills)
        .filter(([_, { skillCategories }]) => skillCategories.length > 0) // Filtering out empty skill categories
        .map(([key, { title, skillCategories }]) => (
          <TabsContent key={key} value={stringToSlug(title)}>
            <div className="mt-4 text-center md:text-left">
              {/* Adjust CategorySkillDisplay to accept the new structure */}
              <CategorySkillDisplay skillCategories={skillCategories} />
            </div>
          </TabsContent>
        ))}
    </Tabs>
  );
};

// Break down the original SkillTableSection content into a separate component for cleaner code

export default SkillTableSection;
