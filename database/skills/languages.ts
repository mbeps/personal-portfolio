import SkillInterface from "@/interfaces/skills/SkillInterface";

export const python: SkillInterface = {
  name: "Python",
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "python",
};

export const javascript: SkillInterface = {
  name: "JavaScript",
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "javascript",
};

export const typescript: SkillInterface = {
  name: "TypeScript",
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "typescript",
};

export const java: SkillInterface = {
  name: "Java",
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "java",
};

export const gameMakerLanguage: SkillInterface = {
  name: "GameMaker Language",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
  slug: "game-maker-language",
};

export const shellScript: SkillInterface = {
  name: "Shell Script",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
  slug: "shell",
};

export const rLanguage: SkillInterface = {
  name: "R",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
  slug: "r",
};

export const groovy: SkillInterface = {
  name: "Groovy",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
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
