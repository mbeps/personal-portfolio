import { Skill } from "@/types/languages";

/**
 * Organizes the skills by category.
 * For each category, it creates an array of skills.
 * @param skills (Skill[]) The skills to organize
 * @returns (Record<string, Skill[]>): the skills organized by category
 */
const organizeSkillsByCategory = (skills: Skill[]) => {
  return skills.reduce(
    (accumulator: { [category: string]: Skill[] }, skill: Skill) => {
      const { category = "Other" } = skill;
      if (!accumulator[category]) {
        accumulator[category] = [];
      }
      accumulator[category].push(skill);
      return accumulator;
    },
    {}
  );
};

export default organizeSkillsByCategory;
