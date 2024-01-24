import filterAndGroupSkills from "@/actions/skills/filterAndGroupSkills";
import filterSkillsByType from "@/actions/skills/filterSkillsByType";
import getAssociatedSkills from "@/actions/skills/getAssociatedSkills";
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
  const skillTechnologies = getAssociatedSkills(allSkills, skill);

  if (!skillTechnologies || skillTechnologies.length === 0) {
    return;
  }

  const allGroupedBlogSkills = [
    filterAndGroupSkills(
      filterSkillsByType(skillTechnologies, "hard"),
      "hard",
      "Technologies",
    ),
    filterAndGroupSkills(
      filterSkillsByType(skillTechnologies, "general"),
      "general",
      "Technical Skills",
    ),
    filterAndGroupSkills(
      filterSkillsByType(skillTechnologies, "soft"),
      "soft",
      "Soft Skills",
    ),
  ];

  return (
    <>
      <div className="border-b border-gray-200 dark:border-neutral-600 py-5" />
      <div className="mt-4 text-center md:text-left">
        <HeadingTwo title="Related Skills" />
        <SkillTableSection allGroupedSkills={allGroupedBlogSkills} />
      </div>
    </>
  );
};

export default RelatedSkillsSection;
