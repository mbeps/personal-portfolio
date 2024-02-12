import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
import { java, javascript, python, typescript } from "../languages";

export const npm: SkillInterface = {
  name: "NPM",
  category: "Project Managers",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "npm",
  relatedSkills: [javascript, typescript],
};

export const yarn: SkillInterface = {
  name: "Yarn",
  category: "Project Managers",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "yarn",
  relatedSkills: [javascript, typescript],
};

export const pnpm: SkillInterface = {
  name: "PNPM",
  category: "Project Managers",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "pnpm",
  relatedSkills: [javascript, typescript],
};

export const poetry: SkillInterface = {
  name: "Poetry",
  category: "Project Managers",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "poetry-python",
  relatedSkills: [python],
};

export const pybuilder: SkillInterface = {
  name: "PyBuilder",
  category: "Project Managers",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "pybuilder",
  relatedSkills: [python],
};

export const maven: SkillInterface = {
  name: "Maven",
  category: "Project Managers",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "maven",
  relatedSkills: [java],
};

export const gradle: SkillInterface = {
  name: "Gradle",
  category: "Project Managers",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "gradle",
  relatedSkills: [java],
};

export const tox: SkillInterface = {
  name: "Tox",
  category: "Project Managers",
  skillType: SkillTypes.Hard,
  slug: "tox",
};

export const nxjs: SkillInterface = {
  name: "Nx.js",
  category: "Project Managers",
  skillType: SkillTypes.Hard,
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
