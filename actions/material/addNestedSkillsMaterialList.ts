import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";

export default function addNestedSkillsMaterialList<
  T extends MaterialInterface
>(
  materialsMap: { [key: string]: T },
  skillsHashmap: { [key: string]: SkillInterface },
  ignoredCategories: SkillCategoriesEnum[],
  skillTypeToAdd?: SkillTypesEnum,
  skillTypeToCheck?: SkillTypesEnum
): { [key: string]: T } {
  // Iterate over each material
  Object.keys(materialsMap).forEach((materialKey) => {
    const material = materialsMap[materialKey];

    // Use a Set to store skills to ensure uniqueness
    const skillsToAddSet: Set<SkillSlugEnum> = new Set(material.skills);

    // Iterate over each skill in the material's skills array
    material.skills.forEach((skillSlug) => {
      const skill = skillsHashmap[skillSlug];

      // Check if the skill's category is not in the ignored categories
      if (!ignoredCategories.includes(skill.category)) {
        // Check if the current skill matches the type to check (or if type to check is undefined)
        if (!skillTypeToCheck || skill.skillType === skillTypeToCheck) {
          // Add related skills if they match the type to add (or if type to add is undefined)
          skill.relatedSkills?.forEach((relatedSkillSlug) => {
            const relatedSkill = skillsHashmap[relatedSkillSlug];
            // Ensure the related skill is not in an ignored category
            if (!ignoredCategories.includes(relatedSkill.category)) {
              if (
                !skillTypeToAdd ||
                relatedSkill.skillType === skillTypeToAdd
              ) {
                skillsToAddSet.add(relatedSkillSlug);
              }
            }
          });
        }
      }
    });

    // Convert the Set back to an array and assign it to the material's skills
    material.skills = Array.from(skillsToAddSet);
  });

  return materialsMap;
}
