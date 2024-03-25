import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function isSkillAssociatedWithMaterial(
  skillToCheck: SkillKeysEnum,
  materialsMap: Database<MaterialInterface>
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
