import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function isSkillAssociatedWithMaterial(
  skillToCheck: SkillInterface,
  materialsMap: { [key: string]: MaterialInterface }
): boolean {
  // Helper function remains unchanged, it recursively checks if a skill is present in a list of skills
  const checkNestedSkills = (
    skills: SkillInterface[],
    skillSlug: string
  ): boolean => {
    return skills.some(
      (skill) =>
        skill.slug === skillSlug ||
        (skill.relatedSkills &&
          checkNestedSkills(skill.relatedSkills, skillSlug))
    );
  };

  // Convert hashmap to array of material objects before applying the check
  return Object.values(materialsMap).some((material) =>
    checkNestedSkills(material.skills, skillToCheck.slug)
  );
}
