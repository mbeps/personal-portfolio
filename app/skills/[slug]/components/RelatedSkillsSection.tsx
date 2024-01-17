import filterAndGroupSkills from "@/actions/skills/filterAndGroupSkills";
import getGeneralSkillsFromHardTechnicalSkill from "@/actions/skills/getGeneralSkillsFromHardTechnicalSkill";
import getHardSkillsFromGeneralTechnicalSkill from "@/actions/skills/getHardSkillsFromGeneralTechnicalSkill";
import {
  default as getHardSkillsFromHardTechnicalSkill,
  default as getTechnologiesFromHardTechnicalSkill,
} from "@/actions/skills/getHardSkillsFromHardTechnicalSkill";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingTwo from "@/components/Text/HeadingTwo";
import allSkills from "@/database/skills/skills";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import React from "react";

interface RelatedSkillsSectionProps {
  skill: SkillInterface;
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

  const allGroupedBlogSkills = {
    technologies: filterAndGroupSkills(
      getTechnologiesFromHardTechnicalSkill(skill),
      "hard",
      "Technologies",
    ),
    generalSkills: filterAndGroupSkills(
      getGeneralSkillsFromHardTechnicalSkill(skill),
      "general",
      "Technical Skills",
    ),
    softSkills: filterAndGroupSkills(
      getHardSkillsFromGeneralTechnicalSkill(skill, allSkills),
      "soft",
      "Soft Skills",
    ),
  };

  return (
    <div className="mt-4 text-center md:text-left">
      <HeadingTwo title="Related Skills" />
      <SkillTableSection allGroupedSkills={allGroupedBlogSkills} />
    </div>
  );
};

export default RelatedSkillsSection;
