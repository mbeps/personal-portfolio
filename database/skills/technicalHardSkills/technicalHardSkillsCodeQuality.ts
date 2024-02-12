import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
import { javascript, python, typescript } from "../languages";

export const black: SkillInterface = {
  name: "Black",
  category: "Code Quality",
  skillType: SkillTypes.Hard,
  slug: "black-linting",
  relatedSkills: [python],
};

export const zod: SkillInterface = {
  name: "Zod",
  category: "Code Quality",
  skillType: SkillTypes.Hard,
  slug: "zod",
  relatedSkills: [typescript],
};

export const eslint: SkillInterface = {
  name: "ESLint",
  category: "Code Quality",
  skillType: SkillTypes.Hard,
  slug: "eslint",
  relatedSkills: [javascript, typescript],
};

export const prettier: SkillInterface = {
  name: "Prettier",
  category: "Code Quality",
  skillType: SkillTypes.Hard,
  slug: "prettier",
  relatedSkills: [javascript, typescript],
};

export const pyLint: SkillInterface = {
  name: "PyLint",
  category: "Code Quality",
  skillType: SkillTypes.Hard,
  slug: "pylint",
  relatedSkills: [python],
};

export const checkstyle: SkillInterface = {
  name: "Checkstyle",
  category: "Code Quality",
  skillType: SkillTypes.Hard,
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
