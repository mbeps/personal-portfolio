import FilterOption from "@/interfaces/filters/FilterOption";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import stringToSlug from "../../stringToSlug";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export function generateFilterOptionsBySkillCategories<
  T extends MaterialInterface
>(
  allMaterialsMap: Database<T>,
  skillsMap: Database<SkillInterface>
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(allMaterialsMap)
      .flatMap((material) =>
        material.skills.flatMap((skillSlug) => {
          const skill = skillsMap[skillSlug];
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
