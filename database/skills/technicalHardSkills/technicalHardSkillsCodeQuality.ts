import Skill from "@/types/skills";
import { javascript, python, typescript } from "../languages";

export const black: Skill = {
  name: "Black",
  category: "Code Quality",
  isMainSkill: false,
  skillType: "general",
  slug: "black-linting",
};

export const zod: Skill = {
  name: "Zod",
  category: "Code Quality",
  skillType: "hard",
  slug: "zod",
  technicalHardSkills: [javascript, typescript],
};

export const eslint: Skill = {
  name: "ESLint",
  category: "Code Quality",
  skillType: "hard",
  slug: "eslint",
  technicalHardSkills: [javascript, typescript],
};

export const prettier: Skill = {
  name: "Prettier",
  category: "Code Quality",
  skillType: "hard",
  slug: "prettier",
  technicalHardSkills: [javascript, typescript],
};

export const pyLint: Skill = {
  name: "PyLint",
  category: "Code Quality",
  skillType: "hard",
  slug: "pylint",
  technicalHardSkills: [python],
};

const technicalHardSkillsCodeQuality: Skill[] = [
  black,
  zod,
  eslint,
  prettier,
  pyLint,
];

export default technicalHardSkillsCodeQuality;
