import MaterialInterface from "@/database/Materials/MaterialInterface";
import SkillInterface from "@/database/Skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import Database from "@/interfaces/Database";
import FilterOption from "@/interfaces/filters/FilterOption";

/**
 * Produces the “language” filter drawer options so every list page references the exact same skill taxonomy.
 * Reads the concrete skills stored on each material instead of relying on a static list to avoid stale UI.
 *
 * @param materialsDatabase Material map scoped to the current listing.
 * @param skillsDatabase Skills dictionary that maps slugs to display names.
 * @returns Filter options starting with the “All” catch-all entry.
 */
export default function generateFilterOptionsForProgrammingLanguages<
  T extends MaterialInterface
>(
  materialsDatabase: Database<T>,
  skillsDatabase: Database<SkillInterface>
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(materialsDatabase)
      .flatMap((material) =>
        material.skills.flatMap((skillSlug) => {
          const skill = skillsDatabase[skillSlug];
          return skill &&
            skill.category === SkillCategoriesEnum.ProgrammingLanguages
            ? [{ slug: skillSlug, entryName: skill.name }]
            : [];
        })
      )
      .reduce((unique, option) => {
        if (!unique.some((v) => v.slug === option.slug)) {
          unique.push(option);
        }
        return unique;
      }, [] as FilterOption[])
      // Uncomment if you want to sort the languages alphabetically
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];
}
