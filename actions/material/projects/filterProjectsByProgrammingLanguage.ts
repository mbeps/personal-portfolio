import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import ProjectInterface from "@/interfaces/material/ProjectInterface";

export default function filterProjectsByProgrammingLanguage(
  programmingLanguageSlug: string,
  projects: ProjectInterface[]
): ProjectInterface[] {
  return projects.filter((project) =>
    project.skills.some(
      (skill) =>
        skill.category === SkillCategoriesEnum.ProgrammingLanguages &&
        skill.slug === programmingLanguageSlug
    )
  );
}
