import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/database/Materials/MaterialInterface";
import stringToSlug from "../../stringToSlug";
import SkillInterface from "@/database/Skills/SkillInterface";

/**
 * Generates the filter options based on the categories of the materials.
 * For all the materials, it will generate a filter option for each unique category within the skills.
 * These are then used as options the user can select to filter the materials.
 *
 * @param materialsDatabase The database of all materials from which to generate the filter options
 * @param skillDatabase The database of all skills from which to generate the filter options
 * @returns The filter options generated from the categories of the materials
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
