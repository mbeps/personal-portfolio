import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import type SkillInterface from "@/database/skills/skill-interface";
import type SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import type Database from "@/interfaces/database";

/**
 * Filters out skills that fall into ignored categories, useful when building language-first groupings that should hide unrelated categories.
 *
 * @param skillsDatabase Skill map covering the full taxonomy.
 * @param ignoredCategories Categories that should be excluded entirely.
 * @returns Skill keys that are not part of the ignored categories.
 */
export default function filterCategoriesFromSkills(
  skillsDatabase: Database<SkillInterface>,
  ignoredCategories: SkillCategoriesEnum[],
): SkillDatabaseKeys[] {
  return Object.keys(skillsDatabase).filter((skillKey) => {
    const skill: SkillInterface = skillsDatabase[skillKey];
    return !ignoredCategories.includes(skill.category);
  }) as SkillDatabaseKeys[];
}
