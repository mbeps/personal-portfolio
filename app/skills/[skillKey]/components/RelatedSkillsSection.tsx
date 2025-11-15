import buildSkillTableGroups from "@/actions/skills/group/buildSkillTableGroups";
import SkillTableSection from "@/components/Skills/SkillTableSection";
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

  // Grouped skills by type
  const allGroupedSkills: GroupedSkillsCategoriesInterface[] =
    buildSkillTableGroups(associatedSkills);

  return (
    <>
      <div className="border-b border-gray-200 dark:border-neutral-600 py-5" />
      <div className="mt-4 text-center md:text-left">
        <h2>Related Skills</h2>
        <SkillTableSection allGroupedSkills={allGroupedSkills} />
      </div>
    </>
  );
};

export default RelatedSkillsSection;
