import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function countMaterialsAttributedToSkill(
  skillKeyToCheck: SkillKeysEnum,
  allSkills: Database<SkillInterface>,
  allMaterialsMap: Database<MaterialInterface>
): number {
  // Adapt the logic to work with skill keys and check if a skill or its related skill is present in a material
  const isSkillOrRelatedSkillPresent = (
    materialSkillKeys: SkillKeysEnum[]
  ): boolean => {
    if (materialSkillKeys.includes(skillKeyToCheck)) {
      return true;
    }
    // Check related skills for each skill in the material
    for (let skillKey of materialSkillKeys) {
      const skill = allSkills[skillKey];
      if (
        skill &&
        skill.relatedSkills &&
        skill.relatedSkills.includes(skillKeyToCheck)
      ) {
        return true;
      }
    }
    return false;
  };

  // Count the number of materials that include the skill or its related skills
  const count = Object.values(allMaterialsMap).reduce((acc, material) => {
    if (isSkillOrRelatedSkillPresent(material.skills)) {
      acc += 1;
    }
    return acc;
  }, 0);

  return count;
}
