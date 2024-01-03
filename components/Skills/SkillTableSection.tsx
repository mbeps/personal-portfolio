"use client";

import HeadingFour from "@/components/Text/HeadingFour";
import HeadingThree from "@/components/Text/HeadingThree";
import Skill from "@/types/skills";
import React, { useState } from "react";
import ExpandCollapseButton from "../Button/ExpandCollapseButton";
import SkillTag from "../Tags/SkillTag";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";

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
    Object.keys(allGroupedSkills)[0],
  ); // default selected tab

  // Helper function to slugify the title for consistent tab value keys
  const stringToSlug = (str: string) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <Tabs
      defaultValue={Object.keys(allGroupedSkills)[0]}
      className="w-full"
      value={selectedTab}
      onValueChange={setSelectedTab}
    >
      {/* Tab Options */}
      <TabsList>
        {Object.entries(allGroupedSkills).map(([key, { title }]) => (
          <TabsTrigger key={key} value={stringToSlug(title)}>
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content */}
      {Object.entries(allGroupedSkills).map(
        ([key, { title, skillCategories }]) =>
          skillCategories &&
          Object.keys(skillCategories).length > 0 && (
            <TabsContent key={key} value={stringToSlug(title)}>
              {/* Original functionality inside each tab content */}
              <div className="mt-4 text-center md:text-left">
                <HeadingThree title={title} />

                {/* Render each skill category and its skills */}
                <CategorySkillDisplay skillCategories={skillCategories} />
              </div>
            </TabsContent>
          ),
      )}
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
  const maxGroupCount = 4;

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
      <div className="gap-4 grid grid-cols-2">
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
