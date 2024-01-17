import SkillInterface from "@/interfaces/skills/SkillInterface";

interface SkillCategory {
  title: string;
  skillCategories: Record<string, SkillInterface[]>;
}

export default function filterAndGroupSkills(
  skills: SkillInterface[],
  skillType: "hard" | "general" | "soft",
  title: string,
): SkillCategory {
  // Filter skills based on skillType
  const filteredSkills = skills.filter(
    (skill) => skill.skillType === skillType,
  );

  // Group the filtered skills by category
  const grouped = filteredSkills.reduce<Record<string, SkillInterface[]>>(
    (acc, skill) => {
      const category = skill.category;
      (acc[category] = acc[category] || []).push(skill);
      return acc;
    },
    {},
  );

  return { title, skillCategories: grouped };
}
