import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function isSkillAssociatedWithMaterial(
  skillToCheck: SkillInterface,
  materials: MaterialInterface[],
): boolean {
  // Helper function to recursively check if a skill is present in a list of skills
  const checkNestedSkills = (
    skills: SkillInterface[],
    skillSlug: string,
  ): boolean => {
    return skills.some(
      (skill) =>
        skill.slug === skillSlug ||
        (skill.relatedSkills &&
          checkNestedSkills(skill.relatedSkills, skillSlug)),
    );
  };

  // Check if the skill is associated with any of the given materials
  return materials.some((material) =>
    checkNestedSkills(material.skills, skillToCheck.slug),
  );
}
