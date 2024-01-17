import SkillInterface from "@/interfaces/skills/SkillInterface";

export const black: SkillInterface = {
  name: "Black",
  category: "Code Quality",
  isMainSkill: false,
  skillType: "hard",
  slug: "black-linting",
};

export const zod: SkillInterface = {
  name: "Zod",
  category: "Code Quality",
  skillType: "hard",
  slug: "zod",
};

export const eslint: SkillInterface = {
  name: "ESLint",
  category: "Code Quality",
  skillType: "hard",
  slug: "eslint",
};

export const prettier: SkillInterface = {
  name: "Prettier",
  category: "Code Quality",
  skillType: "hard",
  slug: "prettier",
};

export const pyLint: SkillInterface = {
  name: "PyLint",
  category: "Code Quality",
  skillType: "hard",
  slug: "pylint",
};

export const checkstyle: SkillInterface = {
  name: "Checkstyle",
  category: "Code Quality",
  skillType: "hard",
  slug: "checkstyle",
};

const technicalHardSkillsCodeQuality: SkillInterface[] = [
  black,
  zod,
  eslint,
  prettier,
  pyLint,
];

export default technicalHardSkillsCodeQuality;
