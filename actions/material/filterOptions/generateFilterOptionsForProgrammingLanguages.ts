import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/database/Materials/MaterialInterface";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillInterface from "@/database/Skills/SkillInterface";

/**
 * Generates the filter options based on the programming languages of the materials.
 * For all the materials, it will generate a filter option for each unique programming language within the skills.
 * These are then used as options the user can select to filter the materials.
 *
 * @param materialsDatabase The database of all materials from which to generate the filter options
 * @param skillsDatabase The database of all skills from which to generate the filter options
 * @returns The filter options generated from the programming languages of the materials
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
