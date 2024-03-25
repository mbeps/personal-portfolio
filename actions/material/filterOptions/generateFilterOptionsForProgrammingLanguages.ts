import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function generateFilterOptionsForProgrammingLanguages<
  T extends MaterialInterface
>(
  allMaterialsMap: Database<T>,
  skillsMap: Database<SkillInterface> // Added parameter for skills hashmap
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(allMaterialsMap)
      .flatMap((material) =>
        material.skills.flatMap((skillSlug) => {
          const skill = skillsMap[skillSlug];
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
