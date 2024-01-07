import getGeneralSkillsFromHardTechnicalSkill from "@/actions/skills/getGeneralSkillsFromHardTechnicalSkill";
import getHardSkillsFromGeneralTechnicalSkill from "@/actions/skills/getHardSkillsFromGeneralTechnicalSkill";
import getHardSkillsFromHardTechnicalSkill from "@/actions/skills/getHardSkillsFromHardTechnicalSkill";
import groupSkills from "@/actions/skills/groupSkills";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingTwo from "@/components/Text/HeadingTwo";
import allSkills from "@/database/skills/skills";
import Skill from "@/types/skills";
import React from "react";

interface RelatedSkillsSectionProps {
  skill: Skill;
}

const RelatedSkillsSection: React.FC<RelatedSkillsSectionProps> = ({
  skill,
}) => {
  const skillTechnologies = Array.from(
    new Set([
      ...getHardSkillsFromHardTechnicalSkill(skill),
      ...getHardSkillsFromGeneralTechnicalSkill(skill, allSkills),
      ...getGeneralSkillsFromHardTechnicalSkill(skill),
    ]),
  );

  if (!skillTechnologies || skillTechnologies.length === 0) {
    return;
  }

  const groupedSkills = groupSkills("none", skillTechnologies);

  return (
    <div className="mt-4 text-center md:text-left">
      <HeadingTwo title="Related Skills" />
      {Object.keys(groupedSkills).map((group) => (
        <div key={group}>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {groupedSkills[group].map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedSkillsSection;
