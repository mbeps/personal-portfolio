import type MaterialInterface from "@/database/materials/material-interface";
import type SkillInterface from "@/database/skills/skill-interface";
import type Database from "@/interfaces/database";
import type FilterOption from "@/interfaces/filters/filter-option";
import stringToSlug from "../../string-to-slug";
import generateFilterOptions from "./generate-filter-options";

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
