import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import ProjectInterface from "@/interfaces/material/ProjectInterface";

export default function filterProjectsByProgrammingLanguage(
  programmingLanguageSlug: string,
  projectsMap: { [key: string]: ProjectInterface }
): { [key: string]: ProjectInterface } {
  const filteredProjectsMap = Object.entries(projectsMap).reduce(
    (acc, [key, project]) => {
      if (
        project.skills.some(
          (skill) =>
            skill.category === SkillCategoriesEnum.ProgrammingLanguages &&
            skill.slug === programmingLanguageSlug
        )
      ) {
        acc[key] = project;
      }
      return acc;
    },
    {} as { [key: string]: ProjectInterface }
  );

  return filteredProjectsMap;
}
