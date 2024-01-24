import ProjectInterface from "@/interfaces/ProjectInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function isSkillAssociatedWithProject(
  skill: SkillInterface,
  projects: ProjectInterface[],
): boolean {
  return projects.some((project) => {
    // Check if the skill matches the project's programmingLanguage
    if (project.programmingLanguage.slug === skill.slug) {
      return true;
    }

    // Check if the skill is in the project's skills array
    // Includes both direct match and nested technicalGeneralSkills match
    return project.skills.some(
      (projectSkill) =>
        projectSkill.slug === skill.slug ||
        (projectSkill.technicalGeneralSkills || []).some(
          (nestedSkill) => nestedSkill.slug === skill.slug,
        ),
    );
  });
}
