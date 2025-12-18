import filterSkillsByType from "@/lib/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/lib/skills/group/categoriseAndGroupSkills";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";

/**
 * Centralizes how skills are split into Technology and Technical buckets before being rendered by `SkillTableSection`.
 * Shared by project, role, blog, certificate, course, module, and skill detail pages so each route shows matching tables.
 *
 * @param skillKeys Skill slugs pulled from the parent entity.
 * @returns Grouped skill collections ready for the table component.
 */
export default function buildSkillTableGroups(
  skillKeys: SkillDatabaseKeys[]
): ListOfCategorisedSkillsByTypeInterface[] {
  const skillTypeGroups = [
    { type: SkillTypesEnum.Technology, title: "Technologies" },
    { type: SkillTypesEnum.Technical, title: "Technical Skills" },
  ];

  return skillTypeGroups.map(({ type, title }) => {
    const filteredSkills = filterSkillsByType(
      skillKeys,
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
}
