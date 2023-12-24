import Skill from "@/types/skills";

export const black: Skill = {
  name: "Black",
  category: "Code Quality",
  isMainSkill: false,
  skillType: "hard",
  slug: "black-linting",
};

export const zod: Skill = {
  name: "Zod",
  category: "Code Quality",
  skillType: "hard",
  slug: "zod",
};

export const eslint: Skill = {
  name: "ESLint",
  category: "Code Quality",
  skillType: "hard",
  slug: "eslint",
};

export const prettier: Skill = {
  name: "Prettier",
  category: "Code Quality",
  skillType: "hard",
  slug: "prettier",
};

export const pyLint: Skill = {
  name: "PyLint",
  category: "Code Quality",
  skillType: "hard",
  slug: "pylint",
};

export const checkstyle: Skill = {
  name: "Checkstyle",
  category: "Code Quality",
  skillType: "hard",
  slug: "checkstyle",
};

const technicalHardSkillsCodeQuality: Skill[] = [
  black,
  zod,
  eslint,
  prettier,
  pyLint,
];

export default technicalHardSkillsCodeQuality;
