import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

export default function filterSkillsByType(
  skills: Database<SkillInterface>,
  skillType: SkillTypesEnum
): Database<SkillInterface> {
  // Initialize an empty hashmap for the filtered skills
  const filteredSkills: Database<SkillInterface> = {};

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
