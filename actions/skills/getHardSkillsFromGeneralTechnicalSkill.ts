import Skill from "@/types/skills";

// Define the function to fetch related technical skills for a general skill
export default function getTechnologiesFromGeneralTechnicalSkill(
  generalSkill: Skill,
  skills: Skill[]
): Skill[] {
  return skills.filter((skill) =>
    skill.technicalGeneralSkills?.some(
      (skill) => skill.slug === generalSkill.slug
    )
  );
}
