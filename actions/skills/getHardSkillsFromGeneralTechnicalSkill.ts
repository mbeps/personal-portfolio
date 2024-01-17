import SkillInterface from "@/interfaces/skills/SkillInterface";

// Define the function to fetch related technical skills for a general skill
export default function getTechnologiesFromGeneralTechnicalSkill(
  generalSkill: SkillInterface,
  skills: SkillInterface[],
): SkillInterface[] {
  return skills.filter(
    (skill) =>
      skill.technicalGeneralSkills?.some(
        (skill) => skill.slug === generalSkill.slug,
      ),
  );
}
