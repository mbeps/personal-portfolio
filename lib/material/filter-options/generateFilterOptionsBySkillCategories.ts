import type MaterialInterface from "@/database/materials/MaterialInterface";
import type SkillInterface from "@/database/skills/SkillInterface";
import type Database from "@/interfaces/Database";
import type FilterOption from "@/interfaces/filters/FilterOption";
import stringToSlug from "../../stringToSlug";
import generateFilterOptions from "./generateFilterOptions";

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
