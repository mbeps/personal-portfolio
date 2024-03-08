import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { java, javascript, python, typescript } from "../languages";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

export const npm: SkillInterface = {
  name: "NPM",
  category: SkillCategoriesEnum.ProjectManagers,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "npm",
  relatedSkills: [javascript, typescript],
};

export const yarn: SkillInterface = {
  name: "Yarn",
  category: SkillCategoriesEnum.ProjectManagers,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "yarn",
  relatedSkills: [javascript, typescript],
};

export const pnpm: SkillInterface = {
  name: "PNPM",
  category: SkillCategoriesEnum.ProjectManagers,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "pnpm",
  relatedSkills: [javascript, typescript],
};

export const poetry: SkillInterface = {
  name: "Poetry",
  category: SkillCategoriesEnum.ProjectManagers,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "poetry-python",
  relatedSkills: [python],
};

export const pybuilder: SkillInterface = {
  name: "PyBuilder",
  category: SkillCategoriesEnum.ProjectManagers,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "pybuilder",
  relatedSkills: [python],
};

export const maven: SkillInterface = {
  name: "Maven",
  category: SkillCategoriesEnum.ProjectManagers,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "maven",
  relatedSkills: [java],
};

export const gradle: SkillInterface = {
  name: "Gradle",
  category: SkillCategoriesEnum.ProjectManagers,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "gradle",
  relatedSkills: [java],
};

export const tox: SkillInterface = {
  name: "Tox",
  category: SkillCategoriesEnum.ProjectManagers,
  skillType: SkillTypesEnum.Hard,
  slug: "tox",
};

export const nxjs: SkillInterface = {
  name: "Nx.js",
  category: SkillCategoriesEnum.ProjectManagers,
  skillType: SkillTypesEnum.Hard,
  slug: "nx-js",
  relatedSkills: [javascript, typescript],
};

const technicalHardSkillsProjectManagers: SkillInterface[] = [
  npm,
  yarn,
  pnpm,
  poetry,
  pybuilder,
  maven,
  gradle,
  tox,
  nxjs,
];

export default technicalHardSkillsProjectManagers;
