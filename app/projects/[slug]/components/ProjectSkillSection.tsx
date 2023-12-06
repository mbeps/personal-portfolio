import Tag from "@/components/Atoms/Tag";
import HeadingThree from "@/components/Text/HeadingThree";
import { Skill } from "@/types/skills";
import React from "react";

interface ProjectSkillSectionProps {
  skills: Skill[] | undefined;
  title: string;
}

export const ProjectSkillSection: React.FC<ProjectSkillSectionProps> = ({
  skills,
  title,
}) => {
  return (
    skills &&
    skills.length > 0 && (
      <div className="mt-4 text-center md:text-left">
        <HeadingThree title={title} />
        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
          {skills.map((skill, index) => (
            <Tag key={index}>{skill.skill}</Tag>
          ))}
        </div>
      </div>
    )
  );
};
