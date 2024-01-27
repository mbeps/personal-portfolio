import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function processSkills<T extends MaterialInterface>(
  material: T,
): T {
  const processedSkills: SkillInterface[] = [];

  function addSkill(skill: SkillInterface) {
    if (processedSkills.some((s) => s.slug === skill.slug)) {
      // Skip if the skill is already added
      return;
    }
    processedSkills.push(skill);

    // Process nested skills
    skill.relatedSkills?.forEach(addSkill);
  }

  material.skills.forEach(addSkill);

  return {
    ...material,
    skills: processedSkills,
  };
}
