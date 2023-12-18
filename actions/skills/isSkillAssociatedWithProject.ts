import Project from "@/types/projects";
import { Skill } from "@/types/skills";

export default function isSkillAssociatedWithProject(
  skill: Skill,
  projects: Project[]
): boolean {
  return projects.some((project) =>
    project.technologySkills.some(
      (projectSkill) =>
        projectSkill.slug === skill.slug ||
        (projectSkill.skills || []).some(
          (nestedSkill) => nestedSkill.slug === skill.slug
        )
    )
  );
}
