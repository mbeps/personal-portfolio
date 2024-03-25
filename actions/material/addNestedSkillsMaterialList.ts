import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function addNestedSkillsMaterialList<
  T extends MaterialInterface
>(
  materialsMap: { [key: string]: T },
  skillsHashmap: { [key: string]: SkillInterface }, // Add skillsHashmap parameter
  skillTypeToAdd?: SkillTypesEnum, // Use SkillTypes enum or undefined for "all"
  skillTypeToCheck?: SkillTypesEnum // Use SkillTypes enum or undefined for "all"
): { [key: string]: T } {
  const updatedMaterialsMap: { [key: string]: T } = {};

  Object.entries(materialsMap).forEach(([slug, material]) => {
    // Clone the material to avoid mutating the original object
    const newMaterial: T = {
      ...material,
      skills: [...material.skills],
    };

    // Iterate over each skill slug in the material
    material.skills.forEach((skillSlug) => {
      const skill = skillsHashmap[skillSlug]; // Retrieve the skill by its slug
      if (skill) {
        // Check if the skill matches the skillTypeToCheck
        if (!skillTypeToCheck || skill.skillType === skillTypeToCheck) {
          // Add related skills if they match skillTypeToAdd
          skill.relatedSkills?.forEach((relatedSkillSlug) => {
            const relatedSkill = skillsHashmap[relatedSkillSlug]; // Retrieve the related skill by its slug
            if (relatedSkill) {
              if (
                !skillTypeToAdd ||
                relatedSkill.skillType === skillTypeToAdd
              ) {
                // Avoid adding duplicate skill slugs
                if (!newMaterial.skills.includes(relatedSkillSlug)) {
                  newMaterial.skills.push(relatedSkillSlug);
                }
              }
            }
          });
        }
      }
    });

    updatedMaterialsMap[slug] = newMaterial;
  });

  return updatedMaterialsMap;
}
