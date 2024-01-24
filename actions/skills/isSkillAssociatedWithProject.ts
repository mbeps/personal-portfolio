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

    // Recursive function to check nested skills
    const checkNestedSkills = (
      skills: SkillInterface[],
      skillSlug: string,
    ): boolean => {
      return skills.some(
        (s) =>
          s.slug === skillSlug ||
          (s.relatedSkills && checkNestedSkills(s.relatedSkills, skillSlug)),
      );
    };

    // Check if the skill is in the project's skills array, including nested skills
    return checkNestedSkills(project.skills, skill.slug);
  });
}
