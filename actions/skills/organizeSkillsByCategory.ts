import Skill from "@/types/skills";

/**
 * Organizes the skills by category.
 * For each category, it creates an array of skills.
 * @param skills (Skill[]) The skills to organize
 * @returns (Record<string, Skill[]>): the skills organized by category
 */
export default function organizeSkillsByCategory(skills: Skill[]): {
  [category: string]: Skill[];
} {
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
}