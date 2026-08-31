import type MaterialInterface from "@/database/materials/material-interface";
import type SkillInterface from "@/database/skills/skill-interface";
import SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import type Database from "@/interfaces/database";
import type FilterOption from "@/interfaces/filters/filter-option";
import generateFilterOptions from "./generate-filter-options";

/**
 * Produces the "language" filter drawer options so every list page references the exact same skill taxonomy.
 * Reads the concrete skills stored on each material instead of relying on a static list to avoid stale UI.
 *
 * @param materialsDatabase Material map scoped to the current listing.
 * @param skillsDatabase Skills dictionary that maps slugs to display names.
 * @returns Filter options starting with the "All" catch-all entry.
 */
export default function generateFilterOptionsForProgrammingLanguages<
  T extends MaterialInterface,
>(
  materialsDatabase: Database<T>,
  skillsDatabase: Database<SkillInterface>,
): FilterOption[] {
  return generateFilterOptions(
    materialsDatabase,
    (material) =>
      material.skills.flatMap((skillSlug) => {
        const skill = skillsDatabase[skillSlug];
        return skill &&
          skill.category === SkillCategoriesEnum.ProgrammingLanguages
          ? [{ slug: skillSlug, entryName: skill.name }]
          : [];
      }),
    true,
  );
}
