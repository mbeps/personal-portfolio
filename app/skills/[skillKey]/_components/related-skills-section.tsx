import type React from "react";
import SkillTableSection from "@/components/skills/skill-table-section";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import type SkillInterface from "@/database/skills/skill-interface";
import type ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/list-of-categorised-skills-by-type-interface";
import buildSkillTableGroups from "@/lib/skills/group/build-skill-table-groups";
import hasAnySkills from "@/lib/skills/has-any-skills";

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
      <div className="border-gray-200 border-b py-5 dark:border-neutral-600" />
      <div className="mt-4 text-center md:text-left">
        <h2>Related Skills</h2>
        <SkillTableSection allGroupedSkills={allGroupedSkills} />
      </div>
    </>
  );
};

export default RelatedSkillsSection;
