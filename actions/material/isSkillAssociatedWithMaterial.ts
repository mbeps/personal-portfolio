import SkillSlugEnum from "@/enums/SkillSlugEnum";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function isSkillAssociatedWithMaterial(
  skillToCheck: SkillSlugEnum,
  materialsMap: { [key: string]: MaterialInterface }
): boolean {
  // Loop through the materialsMap
  for (const materialKey in materialsMap) {
    // Check if the current material's skills array includes the skillToCheck
    if (materialsMap[materialKey].skills.includes(skillToCheck)) {
      // If found, return true
      return true;
    }
  }
  // If the loop completes without finding the skill, return false
  return false;
}
