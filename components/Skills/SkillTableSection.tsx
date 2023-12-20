"use client";

import HeadingFour from "@/components/Text/HeadingFour";
import HeadingThree from "@/components/Text/HeadingThree";
import { Skill } from "@/types/skills";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import SkillTag from "../Tags/SkillTag";
import ExpandCollapseButton from "../UI/ExpandCollapseButton";

interface SkillTableSectionProps {
  skillCategories: Record<string, Skill[]>;
  title: string;
}

const SkillTableSection: React.FC<SkillTableSectionProps> = ({
  skillCategories,
  title,
}) => {
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
            skills.length
          );
          acc.push([category, skills.slice(0, availableSlots)]);
          skillCount += availableSlots;
          groupCount++;
        }
        return acc;
      }, []);

  const totalSkillCount = categories.reduce(
    (acc, [_, skills]) => acc + skills.length,
    0
  );

  // Adjust the condition for showing the toggle button
  const shouldShowToggleButton = totalSkillCount > skillCount || showAll;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="mt-4 text-center md:text-left">
      <HeadingThree title={title} />

      <div className="gap-4">
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
        <div className="flex justify-center md:justify-start">
          <ExpandCollapseButton isExpanded={showAll} onToggle={toggleShowAll} />
        </div>
      )}
    </div>
  );
};

export default SkillTableSection;
