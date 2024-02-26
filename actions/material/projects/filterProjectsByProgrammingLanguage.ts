import ProjectInterface from "@/interfaces/material/ProjectInterface";
import { SkillCategories } from "@/interfaces/skills/SkillInterface";

export default function filterProjectsByProgrammingLanguage(
  programmingLanguageSlug: string,
  projects: ProjectInterface[]
): ProjectInterface[] {
  return projects.filter((project) =>
    project.skills.some(
      (skill) =>
        skill.category === SkillCategories.ProgrammingLanguages &&
        skill.slug === programmingLanguageSlug
    )
  );
}
