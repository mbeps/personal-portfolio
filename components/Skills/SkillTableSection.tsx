"use client";

import HeadingFour from "@/components/Text/HeadingFour";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import Skill from "@/types/skills";
import React, { useState } from "react";
import ExpandCollapseButton from "../Button/ExpandCollapseButton";
import SkillTag from "../Tags/SkillTag";
import useIsMounted from "@/hooks/useIsMounted";

interface SkillCategoryProps {
  title: string;
  skillCategories: Record<string, Skill[]>;
}

interface SkillTableSectionProps {
  allGroupedSkills: Record<string, SkillCategoryProps>;
}

const SkillTableSection: React.FC<SkillTableSectionProps> = ({
  allGroupedSkills,
}) => {
  const [selectedTab, setSelectedTab] = useState(
    Object.keys(allGroupedSkills).find(
      (key) => Object.keys(allGroupedSkills[key].skillCategories).length > 0,
    ) || "",
  );

  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  const stringToSlug = (str: string) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

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
          .filter(
            ([_, { skillCategories }]) =>
              Object.keys(skillCategories).length > 0,
          ) // Filtering out empty skill categories
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
      {Object.entries(allGroupedSkills)
        .filter(
          ([_, { skillCategories }]) => Object.keys(skillCategories).length > 0,
        ) // Filtering out empty skill categories
        .map(([key, { title, skillCategories }]) => (
          <TabsContent key={key} value={stringToSlug(title)}>
            <div className="mt-4 text-center md:text-left">
              <CategorySkillDisplay skillCategories={skillCategories} />
            </div>
          </TabsContent>
        ))}
    </Tabs>
  );
};

// Break down the original SkillTableSection content into a separate component for cleaner code
const CategorySkillDisplay: React.FC<{
  skillCategories: Record<string, Skill[]>;
}> = ({ skillCategories }) => {
  const [showAll, setShowAll] = useState(false);
  const categories = Object.entries(skillCategories);
  const shouldDisplayTitle = categories.length > 1;

  const maxSkillCount = 12;
  const maxGroupCount = 3;

  let skillCount = 0;
  let groupCount = 0;
  const displayedSkills = showAll
    ? categories
    : categories.reduce((acc: [string, Skill[]][], [category, skills]) => {
        if (skillCount < maxSkillCount && groupCount < maxGroupCount) {
          const availableSlots = Math.min(
            maxSkillCount - skillCount,
            skills.length,
          );
          acc.push([category, skills.slice(0, availableSlots)]);
          skillCount += availableSlots;
          groupCount++;
        }
        return acc;
      }, []);

  const totalSkillCount = categories.reduce(
    (acc, [_, skills]) => acc + skills.length,
    0,
  );

  const shouldShowToggleButton = totalSkillCount > skillCount || showAll;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Components like SkillTag, HeadingThree, HeadingFour, ExpandCollapseButton should be defined or imported
  return (
    <div>
      <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3">
        {displayedSkills.map(([category, skills]) => (
          <div key={category} className="mb-6">
            {shouldDisplayTitle && <HeadingFour title={category} />}
            <div className="flex flex-wrap justify-center md:justify-start">
              {skills.map((skill, index) => (
                <SkillTag key={skill.slug} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {shouldShowToggleButton && (
        <div className="flex justify-center md:justify-center">
          <ExpandCollapseButton isExpanded={showAll} onToggle={toggleShowAll} />
        </div>
      )}
    </div>
  );
};

export default SkillTableSection;
