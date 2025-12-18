import buildSkillTableGroups from "@/lib/skills/group/buildSkillTableGroups";
import SkillTableCell from "@/components/skills/SkillTableSection";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";
import SkillInterface from "@/database/skills/SkillInterface";
import hasAnySkills from "@/lib/skills/hasAnySkills";
import React from "react";

interface RelatedSkillsSectionProps {
  skillKey: SkillDatabaseKeys;
}

/**
 * Companion block to the skill page that visualizes related skills using the same grouped tables as the Skills directory.
 * Builds the grouping on the fly so edits to `relatedSkills` propagate without manual maintenance.
 *
 * @param skillKey Base skill whose relations should be rendered.
 * @returns Table of related skills grouped by type/category, or null when no relations exist.
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
  const allGroupedSkills: ListOfCategorisedSkillsByTypeInterface[] =
    buildSkillTableGroups(associatedSkills);
  const hasSkills = hasAnySkills(allGroupedSkills);

  if (!hasSkills) {
    return null;
  }

  return (
    <>
      <div className="border-b border-gray-200 dark:border-neutral-600 py-5" />
      <div className="mt-4 text-center md:text-left">
        <h2>Related Skills</h2>
        <SkillTableCell allGroupedSkills={allGroupedSkills} />
      </div>
    </>
  );
};

export default RelatedSkillsSection;
