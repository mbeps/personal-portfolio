import Tag from "@/components/Atoms/Tag";
import HeadingFour from "@/components/Text/HeadingFour";
import HeadingThree from "@/components/Text/HeadingThree";
import { Skill } from "@/types/skills";
import React from "react";

interface ProjectSkillSectionProps {
  skillCategories: Record<string, Skill[]>;
  title: string;
}

export const ProjectSkillSection: React.FC<ProjectSkillSectionProps> = ({
  skillCategories,
  title,
}) => {
  const categories = Object.entries(skillCategories);

  return (
    <div className="mt-4 text-center md:text-left">
      <HeadingThree title={title} />

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {categories.map(([category, skills]) => (
          <div key={category} className="mb-6">
            <HeadingFour title={category} />
            <div className="flex flex-wrap justify-center md:justify-start">
              {skills.map((skill, index) => (
                <Tag key={index}>{skill.skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSkillSection;