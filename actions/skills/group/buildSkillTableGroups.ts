import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";

/**
 * Builds skill table groups for display in SkillTableSection.
 * This centralizes the repeated pattern of filtering skills by type
 * (Technology/Technical/Soft) and categorizing them.
 *
 * Used across detail pages: projects, roles, blogs, certificates, courses, modules, skills.
 *
 * @param skillKeys Array of skill keys to group
 * @returns Array of grouped skill categories ready for SkillTableSection
 */
export default function buildSkillTableGroups(
  skillKeys: SkillDatabaseKeys[]
): GroupedSkillsCategoriesInterface[] {
  const skillTypeGroups = [
    { type: SkillTypesEnum.Technology, title: "Technologies" },
    { type: SkillTypesEnum.Technical, title: "Technical Skills" },
    { type: SkillTypesEnum.Soft, title: "Soft Skills" },
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
