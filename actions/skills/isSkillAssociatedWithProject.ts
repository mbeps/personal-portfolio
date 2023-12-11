import Project from "@/types/projects";
import { Skill } from "@/types/skills";

export default function isSkillAssociatedWithProject(
  skill: Skill,
  projects: Project[]
): boolean {
  return projects.some(
    (project) => project.programmingLanguage.slug === skill.slug
  );
}
