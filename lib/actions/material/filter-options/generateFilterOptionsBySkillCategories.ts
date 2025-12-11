import MaterialInterface from "@/database/materials/MaterialInterface";
import SkillInterface from "@/database/skills/SkillInterface";
import Database from "@/interfaces/Database";
import FilterOption from "@/interfaces/filters/FilterOption";
import stringToSlug from "../../stringToSlug";

/**
 * Surfaces skill categories (general, soft, tooling, etc.) from whatever data is currently rendered so the UI never lists empty buckets.
 *
 * @param materialsDatabase Material dictionary for the view.
 * @param skillDatabase Skill metadata used to resolve category names.
 * @returns Unique category options sorted alphabetically for readability.
 */
export function generateFilterOptionsBySkillCategories<
  T extends MaterialInterface
>(
  materialsDatabase: Database<T>,
  skillDatabase: Database<SkillInterface>
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(materialsDatabase)
      .flatMap((material) =>
        material.skills.flatMap((skillSlug) => {
          const skill = skillDatabase[skillSlug];
          return skill
            ? [
                {
                  slug: stringToSlug(skill.category),
                  entryName: skill.category,
                },
              ]
            : [];
        })
      )
      .reduce((unique, item) => {
        if (!unique.some((v) => v.slug === item.slug)) {
          unique.push(item);
        }
        return unique;
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];
}
