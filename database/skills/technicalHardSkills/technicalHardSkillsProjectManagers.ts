import SkillInterface from "@/interfaces/skills/SkillInterface";

export const npm: SkillInterface = {
  name: "NPM",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "npm",
};

export const yarn: SkillInterface = {
  name: "Yarn",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "yarn",
};

export const pnpm: SkillInterface = {
  name: "PNPM",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "pnpm",
};

export const poetry: SkillInterface = {
  name: "Poetry",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "poetry-python",
};

export const pybuilder: SkillInterface = {
  name: "PyBuilder",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "pybuilder",
};

export const maven: SkillInterface = {
  name: "Maven",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "maven",
};

export const gradle: SkillInterface = {
  name: "Gradle",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "gradle",
};

export const tox: SkillInterface = {
  name: "Tox",
  category: "Project Managers",
  skillType: "hard",
  slug: "tox",
};

export const nxjs: SkillInterface = {
  name: "Nx.js",
  category: "Project Managers",
  skillType: "hard",
  slug: "nx-js",
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
