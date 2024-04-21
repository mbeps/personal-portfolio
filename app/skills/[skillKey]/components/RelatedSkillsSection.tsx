import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingTwo from "@/components/Text/HeadingTwo";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import SkillInterface from "@/database/Skills/SkillInterface";
import React from "react";

interface RelatedSkillsSectionProps {
  skillKey: SkillDatabaseKeys;
}

/**
 * Displays all the sub-skills for a given skill.
 * These skills are grouped by their skill type (Hard, General, Soft) and displayed in a table format.
 * Each group of skills is also categorised by their skill category.\
 *
 * @param skillKey The key of the skill to display the related skills for.
 * @returns A React component that displays all the related skills for a given skill.
 */
const RelatedSkillsSection: React.FC<RelatedSkillsSectionProps> = ({
  skillKey,
}) => {
  const skill: SkillInterface = skillDatabaseMap[skillKey];

  const associatedSkills: SkillDatabaseKeys[] = skill.relatedSkills || [];

  if (!associatedSkills || associatedSkills.length === 0) {
    return null;
  }

  // Define the skill types and their corresponding group titles
  const skillTypeGroups = [
    { type: SkillTypesEnum.Technology, title: "Technologies" },
    { type: SkillTypesEnum.Technical, title: "Technical Skills" },
    { type: SkillTypesEnum.Soft, title: "Soft Skills" },
  ];

  // Use map to iterate over each group, filter, and then group the skills accordingly
  const allGroupedSkills: GroupedSkillsCategoriesInterface[] =
    skillTypeGroups.map(({ type, title }) => {
      const filteredSkills: SkillDatabaseKeys[] = filterSkillsByType(
        associatedSkills,
        skillDatabaseMap,
        type
      );

      return categoriseAndGroupSkills(
        filteredSkills,
        skillDatabaseMap,
        type,
        title
      );
    });

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
