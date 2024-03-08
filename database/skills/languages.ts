import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";
import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";

export const python: SkillInterface = {
  name: "Python",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  category: SkillCategoriesEnum.ProgrammingLanguages,
  slug: "python",
};

export const javascript: SkillInterface = {
  name: "JavaScript",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  category: SkillCategoriesEnum.ProgrammingLanguages,
  slug: "javascript",
};

export const typescript: SkillInterface = {
  name: "TypeScript",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  category: SkillCategoriesEnum.ProgrammingLanguages,
  slug: "typescript",
};

export const java: SkillInterface = {
  name: "Java",
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  category: SkillCategoriesEnum.ProgrammingLanguages,
  slug: "java",
};

export const gameMakerLanguage: SkillInterface = {
  name: "GameMaker Language",
  isMainSkill: false,
  skillType: SkillTypes.Hard,
  category: SkillCategoriesEnum.ProgrammingLanguages,
  slug: "game-maker-language",
};

export const shellScript: SkillInterface = {
  name: "Shell Script",
  isMainSkill: false,
  skillType: SkillTypes.Hard,
  category: SkillCategoriesEnum.ProgrammingLanguages,
  slug: "shell",
};

export const rLanguage: SkillInterface = {
  name: "R",
  isMainSkill: false,
  skillType: SkillTypes.Hard,
  category: SkillCategoriesEnum.ProgrammingLanguages,
  slug: "r",
};

export const groovy: SkillInterface = {
  name: "Groovy",
  isMainSkill: false,
  skillType: SkillTypes.Hard,
  category: SkillCategoriesEnum.ProgrammingLanguages,
  slug: "groovy",
};

/**
 * Array of languages.
 * Each skill has an array of skills and repositories.
 */
const languages: SkillInterface[] = [
  javascript,
  typescript,
  python,
  java,
  gameMakerLanguage,
  shellScript,
  rLanguage,
  groovy,
];

export { languages };
