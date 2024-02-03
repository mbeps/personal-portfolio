import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function findAllMaterialsAttributedToSkillOneLayer(
  skillToCheck: SkillInterface,
  allMaterials: MaterialInterface[],
): MaterialInterface[] {
  // Function to check if a material's skills list contains the skillToCheck or any of its immediate relatedSkills
  const isSkillOrRelatedSkillPresent = (
    skills: SkillInterface[],
    skillSlug: string,
  ): boolean => {
    return skills.some(
      (skill) =>
        skill.slug === skillSlug ||
        (skill.relatedSkills &&
          skill.relatedSkills.some(
            (relatedSkill) => relatedSkill.slug === skillSlug,
          )),
    );
  };

  // Filter all materials to find those that are attributed to the given skill, considering only one layer of relatedSkills
  const attributedMaterials = allMaterials.filter((material) =>
    isSkillOrRelatedSkillPresent(material.skills, skillToCheck.slug),
  );

  return attributedMaterials;
}
