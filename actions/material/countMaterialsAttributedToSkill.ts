import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function countMaterialsAttributedToSkill(
  skillToCheck: SkillInterface,
  allMaterialsMap: { [key: string]: MaterialInterface }
): number {
  // Reuse the same logic for checking if a skill or its related skill is present in a material
  const isSkillOrRelatedSkillPresent = (
    skills: SkillInterface[],
    skillSlug: string
  ): boolean => {
    return skills.some(
      (skill) =>
        skill.slug === skillSlug ||
        (skill.relatedSkills &&
          skill.relatedSkills.some(
            (relatedSkill) => relatedSkill.slug === skillSlug
          ))
    );
  };

  // Instead of accumulating materials, count the number of materials that match the criteria
  const count = Object.entries(allMaterialsMap).reduce(
    (acc, [key, material]) => {
      if (isSkillOrRelatedSkillPresent(material.skills, skillToCheck.slug)) {
        acc += 1; // Increment the counter for each material that matches the skill check
      }
      return acc;
    },
    0
  ); // Initialize the accumulator as 0 for counting

  return count; // Return the count of materials attributed to the skill
}
