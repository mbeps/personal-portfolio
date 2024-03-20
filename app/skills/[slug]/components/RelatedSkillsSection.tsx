import filterAndGroupSkills from "@/actions/skills/filterAndGroupSkills";
import filterSkillsByType from "@/actions/skills/filterSkillsByType";
import getAssociatedSkillsHashmap from "@/actions/skills/getAssociatedSkills";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingTwo from "@/components/Text/HeadingTwo";
import skillsDatabase from "@/database/skills/skills";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import React from "react";

interface RelatedSkillsSectionProps {
  skill: SkillSlugEnum;
}

const RelatedSkillsSection: React.FC<RelatedSkillsSectionProps> = ({
  skill,
}) => {
  const allAssociatedSkillsMap: Database<SkillInterface> =
    getAssociatedSkillsHashmap(skillsDatabase, skill);

  const associatedSkills: SkillSlugEnum[] | undefined =
    skillsDatabase[skill].relatedSkills;

  if (!associatedSkills || associatedSkills.length === 0) {
    return null;
  }

  const allGroupedSkills = [
    filterAndGroupSkills(
      filterSkillsByType(allAssociatedSkillsMap, SkillTypesEnum.Hard),
      SkillTypesEnum.Hard,
      "Technologies"
    ),
    filterAndGroupSkills(
      filterSkillsByType(allAssociatedSkillsMap, SkillTypesEnum.General),
      SkillTypesEnum.General,
      "Technical Skills"
    ),
    filterAndGroupSkills(
      filterSkillsByType(allAssociatedSkillsMap, SkillTypesEnum.Soft),
      SkillTypesEnum.Soft,
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
