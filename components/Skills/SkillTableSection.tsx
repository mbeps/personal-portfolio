import Tag from "@/components/Tags/Tag";
import HeadingFour from "@/components/Text/HeadingFour";
import HeadingThree from "@/components/Text/HeadingThree";
import { Skill } from "@/types/skills";
import React from "react";
import SkillTag from "../Tags/SkillTag";

interface SkillTableSectionProps {
  skillCategories: Record<string, Skill[]>;
  title: string;
}

const SkillTableSection: React.FC<SkillTableSectionProps> = ({
  skillCategories,
  title,
}) => {
  const categories = Object.entries(skillCategories);
  const shouldDisplayTitle = categories.length > 1;

  return (
    <div className="mt-4 text-center md:text-left">
      <HeadingThree title={title} />

      <div className="gap-4">
        {categories.map(([category, skills]) => (
          <div key={category} className="mb-6">
            {shouldDisplayTitle && <HeadingFour title={category} />}
            <div className="flex flex-wrap justify-center md:justify-start">
              {skills.map((skill, index) => (
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTableSection;
