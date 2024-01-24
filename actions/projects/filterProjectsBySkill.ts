import ProjectInterface from "@/interfaces/ProjectInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function filterProjectsBySkill(
  projects: ProjectInterface[],
  selectedSkill: SkillInterface,
): ProjectInterface[] {
  // Recursive function to check if a project includes the selected skill or any of its related skills
  const includesSkill = (
    skillList: SkillInterface[],
    skillToCheck: SkillInterface,
  ): boolean => {
    return skillList.some(
      (skill) =>
        skill.slug === skillToCheck.slug ||
        (skill.relatedSkills &&
          includesSkill(skill.relatedSkills, skillToCheck)),
    );
  };

  return projects.filter(
    (project) =>
      project.programmingLanguage.slug === selectedSkill.slug ||
      includesSkill(project.skills, selectedSkill),
  );
}
