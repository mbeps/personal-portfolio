import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

export default function addNestedSkillsMaterialList<
  T extends MaterialInterface
>(
  materialsMap: { [key: string]: T },
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

    // Iterate over each skill in the material
    material.skills.forEach((skill) => {
      // Check if the skill matches the skillTypeToCheck
      if (!skillTypeToCheck || skill.skillType === skillTypeToCheck) {
        // Add related skills if they match skillTypeToAdd
        skill.relatedSkills?.forEach((relatedSkill) => {
          if (!skillTypeToAdd || relatedSkill.skillType === skillTypeToAdd) {
            // Avoid adding duplicate skills
            if (!newMaterial.skills.some((s) => s.slug === relatedSkill.slug)) {
              newMaterial.skills.push(relatedSkill);
            }
          }
        });
      }
    });

    updatedMaterialsMap[slug] = newMaterial;
  });

  return updatedMaterialsMap;
}
