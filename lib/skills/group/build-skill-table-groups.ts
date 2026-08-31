import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";
import type ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/list-of-categorised-skills-by-type-interface";
import filterSkillsByType from "@/lib/skills/filter/filter-skills-by-type";
import categoriseAndGroupSkills from "@/lib/skills/group/categorise-and-group-skills";

/**
 * Centralizes how skills are split into Technology and Technical buckets before being rendered by `SkillTableSection`.
 * Shared by project, role, blog, certificate, course, module, and skill detail pages so each route shows matching tables.
 *
 * @param skillKeys Skill slugs pulled from the parent entity.
 * @returns Grouped skill collections ready for the table component.
 */
export default function buildSkillTableGroups(
  skillKeys: SkillDatabaseKeys[],
): ListOfCategorisedSkillsByTypeInterface[] {
  const skillTypeGroups = [
    { type: SkillTypesEnum.Technology, title: "Technologies" },
    { type: SkillTypesEnum.Technical, title: "Technical Skills" },
  ];

  return skillTypeGroups.map(({ type, title }) => {
    const filteredSkills = filterSkillsByType(
      skillKeys,
      skillDatabaseMap,
      type,
    );
    return categoriseAndGroupSkills(
      filteredSkills,
      skillDatabaseMap,
      type,
      title,
    );
  });
}
