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

    // Function to check nested skills
    const checkNestedSkills = (projectSkills: SkillInterface[]) =>
      projectSkills.some(
        (projectSkill) =>
          projectSkill.slug === skill.slug ||
          (projectSkill.technicalGeneralSkills || []).some(
            (nestedSkill) => nestedSkill.slug === skill.slug,
          ),
      );

    // Check technologySkills, extraTechnicalGeneralSkills and softSkills
    return (
      checkNestedSkills(project.technologySkills) ||
      (project.extraTechnicalGeneralSkills &&
        checkNestedSkills(project.extraTechnicalGeneralSkills)) ||
      checkNestedSkills(project.softSkills)
    );
  });
}
