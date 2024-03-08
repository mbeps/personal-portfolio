import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { javascript, python, typescript } from "../languages";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

export const black: SkillInterface = {
  name: "Black",
  category: SkillCategoriesEnum.CodeQuality,
  skillType: SkillTypesEnum.Hard,
  slug: "black-linting",
  relatedSkills: [python],
};

export const zod: SkillInterface = {
  name: "Zod",
  category: SkillCategoriesEnum.CodeQuality,
  skillType: SkillTypesEnum.Hard,
  slug: "zod",
  relatedSkills: [typescript],
};

export const eslint: SkillInterface = {
  name: "ESLint",
  category: SkillCategoriesEnum.CodeQuality,
  skillType: SkillTypesEnum.Hard,
  slug: "eslint",
  relatedSkills: [javascript, typescript],
};

export const prettier: SkillInterface = {
  name: "Prettier",
  category: SkillCategoriesEnum.CodeQuality,
  skillType: SkillTypesEnum.Hard,
  slug: "prettier",
  relatedSkills: [javascript, typescript],
};

export const pyLint: SkillInterface = {
  name: "PyLint",
  category: SkillCategoriesEnum.CodeQuality,
  skillType: SkillTypesEnum.Hard,
  slug: "pylint",
  relatedSkills: [python],
};

export const checkstyle: SkillInterface = {
  name: "Checkstyle",
  category: SkillCategoriesEnum.CodeQuality,
  skillType: SkillTypesEnum.Hard,
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
