import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

export default function filterSkillsByType(
  skills: { [key: string]: SkillInterface },
  skillType: SkillTypesEnum
): { [key: string]: SkillInterface } {
  // Initialize an empty hashmap for the filtered skills
  const filteredSkills: { [key: string]: SkillInterface } = {};

  // Iterate over the skills hashmap
  Object.entries(skills).forEach(([key, skill]) => {
    // Check if the skill's type matches the specified skillType
    if (skill.skillType === skillType) {
      // If it matches, add it to the filteredSkills hashmap
      filteredSkills[key] = skill;
    }
  });

  return filteredSkills;
}
