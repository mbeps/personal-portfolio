import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function addNestedSkillsMaterialList<
  T extends MaterialInterface,
>(
  materials: T[],
  skillTypeToAdd: "hard" | "general" | "soft" | "all" = "general",
): T[] {
  return materials.map((material) => {
    // Start with the original list of skills
    const processedSkills: SkillInterface[] = [...material.skills];

    function addSkill(skill: SkillInterface) {
      // Check if the skill matches the specified type or if all types are to be added
      if (
        (skillTypeToAdd === "all" || skill.skillType === skillTypeToAdd) &&
        !processedSkills.some((s) => s.slug === skill.slug)
      ) {
        processedSkills.push(skill);
      }

      // Process nested skills
      skill.relatedSkills?.forEach(addSkill);
    }

    // Process nested skills for each skill in the original list
    material.skills.forEach(addSkill);

    return {
      ...material,
      skills: processedSkills,
    };
  });
}
