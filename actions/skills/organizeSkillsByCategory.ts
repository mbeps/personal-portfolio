import SkillInterface from "@/interfaces/skills/SkillInterface";

/**
 * Organizes the skills by category.
 * For each category, it creates an array of skills.
 * @param skills (Skill[]) The skills to organize
 * @returns (Record<string, Skill[]>): the skills organized by category
 */
export default function organizeSkillsByCategory(skills: SkillInterface[]): {
  [category: string]: SkillInterface[];
} {
  return skills.reduce(
    (
      accumulator: { [category: string]: SkillInterface[] },
      skill: SkillInterface,
    ) => {
      const { category = "Other" } = skill;
      if (!accumulator[category]) {
        accumulator[category] = [];
      }
      accumulator[category].push(skill);
      return accumulator;
    },
    {},
  );
}
