import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function addNestedSkillsMaterialList<
  T extends MaterialInterface,
>(
  materials: T[],
  skillTypeToAdd: "hard" | "general" | "soft" | "all" = "general",
  skillTypeToCheck: "hard" | "general" | "soft" | "all" = "hard",
): T[] {
  return materials.map((material) => {
    // Clone the material to avoid mutating the original object
    const newMaterial = { ...material, skills: [...material.skills] };

    // Iterate over each skill in the material
    material.skills.forEach((skill) => {
      // Check if the skill matches the skillTypeToCheck
      if (skillTypeToCheck === "all" || skill.skillType === skillTypeToCheck) {
        // Add related skills if they match skillTypeToAdd
        skill.relatedSkills?.forEach((relatedSkill) => {
          if (
            skillTypeToAdd === "all" ||
            relatedSkill.skillType === skillTypeToAdd
          ) {
            // Avoid adding duplicate skills
            if (!newMaterial.skills.some((s) => s.slug === relatedSkill.slug)) {
              newMaterial.skills.push(relatedSkill);
            }
          }
        });
      }
    });

    return newMaterial;
  });
}