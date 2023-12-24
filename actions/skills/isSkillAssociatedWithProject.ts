import Project from "@/types/projects";
import Skill from "@/types/skills";

export default function isSkillAssociatedWithProject(
  skill: Skill,
  projects: Project[]
): boolean {
  return projects.some((project) => {
    // Check if the skill matches the project's programmingLanguage
    if (project.programmingLanguage.slug === skill.slug) {
      return true;
    }

    // Function to check nested skills
    const checkNestedSkills = (projectSkills: Skill[]) =>
      projectSkills.some(
        (projectSkill) =>
          projectSkill.slug === skill.slug ||
          (projectSkill.technicalGeneralSkills || []).some(
            (nestedSkill) => nestedSkill.slug === skill.slug
          )
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
