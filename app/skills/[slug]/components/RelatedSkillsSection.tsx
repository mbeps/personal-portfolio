import filterAndGroupSkills from "@/actions/skills/filterAndGroupSkills";
import filterSkillsByType from "@/actions/skills/filterSkillsByType";
import getAssociatedSkills from "@/actions/skills/getAssociatedSkills";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingTwo from "@/components/Text/HeadingTwo";
import allSkills from "@/database/skills/skills";
import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
import React from "react";

interface RelatedSkillsSectionProps {
  skill: SkillInterface;
}

const RelatedSkillsSection: React.FC<RelatedSkillsSectionProps> = ({
  skill,
}) => {
  const allAssociatedSkills = getAssociatedSkills(allSkills, skill);

  if (!allAssociatedSkills || allAssociatedSkills.length === 0) {
    return null;
  }

  const allGroupedSkills = [
    filterAndGroupSkills(
      filterSkillsByType(allAssociatedSkills, SkillTypes.Hard),
      SkillTypes.Hard,
      "Technologies"
    ),
    filterAndGroupSkills(
      filterSkillsByType(allAssociatedSkills, SkillTypes.General),
      SkillTypes.General,
      "Technical Skills"
    ),
    filterAndGroupSkills(
      filterSkillsByType(allAssociatedSkills, SkillTypes.Soft),
      SkillTypes.Soft,
      "Soft Skills"
    ),
  ];

  return (
    <>
      <div className="border-b border-gray-200 dark:border-neutral-600 py-5" />
      <div className="mt-4 text-center md:text-left">
        <HeadingTwo title="Related Skills" />
        <SkillTableSection allGroupedSkills={allGroupedSkills} />
      </div>
    </>
  );
};

export default RelatedSkillsSection;
