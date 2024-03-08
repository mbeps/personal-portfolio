import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";

export default function generateFilterOptionsForProgrammingLanguages<
  T extends MaterialInterface
>(allMaterials: T[]): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...allMaterials
      .flatMap((material) =>
        material.skills.filter(
          (skill) => skill.category === SkillCategoriesEnum.ProgrammingLanguages
        )
      )
      .reduce((unique, skill) => {
        if (unique.findIndex((v) => v.slug === skill.slug) === -1) {
          unique.push({ slug: skill.slug, entryName: skill.name });
        }
        return unique;
      }, [] as FilterOption[]),
    // Uncomment if you want to sort the languages alphabetically
    // .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];
}
