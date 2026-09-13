import type MaterialInterface from "@/database/materials/material-interface";
import type SkillInterface from "@/database/skills/skill-interface";
import generateFilterOptions from "@/lib/material/filter-options/generate-filter-options";
import stringToSlug from "@/lib/string-to-slug";
import type Database from "@/types/database/database";
import type FilterOption from "@/types/filters/filter-option";

/**
 * Surfaces skill categories (general, soft, tooling, etc.) from whatever data is currently rendered so the UI never lists empty buckets.
 *
 * @param materialsDatabase Material dictionary for the view.
 * @param skillDatabase Skill metadata used to resolve category names.
 * @returns Unique category options sorted alphabetically for readability.
 */
export function generateFilterOptionsBySkillCategories<
  T extends MaterialInterface,
>(
  materialsDatabase: Database<T>,
  skillDatabase: Database<SkillInterface>,
): FilterOption[] {
  return generateFilterOptions(
    materialsDatabase,
    (material) =>
      material.skills.flatMap((skillSlug) => {
        const skill = skillDatabase[skillSlug];
        return skill
          ? [{ slug: stringToSlug(skill.category), entryName: skill.category }]
          : [];
      }),
    true,
  );
}
