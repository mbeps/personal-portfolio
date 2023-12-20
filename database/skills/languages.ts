import Skill from "@/types/skills";
import {
  flask,
  django,
  scikitLearn,
  pandas,
  numpy,
  matplotlib,
  seaborn,
  keras,
  jupyterNotebooks,
  pytest,
  unittest,
  sqlalchemy,
  poetry,
  pybuilder,
  nextjs,
  nextauth,
  nodejs,
  jest,
  vitest,
  prisma,
  drizzle,
  mongoose,
  npm,
  yarn,
  pnpm,
  maven,
  gradle,
  junit,
  springBoot,
  hibernate,
  react,
  spring,
} from "./hardSkills";

export const python: Skill = {
  name: "Python",
  skills: [
    flask,
    django,
    scikitLearn,
    pandas,
    numpy,
    matplotlib,
    seaborn,
    keras,
    jupyterNotebooks,
    pytest,
    unittest,
    sqlalchemy,
    poetry,
    pybuilder,
  ],
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "python",
};

export const javascript: Skill = {
  name: "JavaScript",
  skills: [
    nextjs,
    nextauth,
    nodejs,
    react,
    jest,
    vitest,
    prisma,
    drizzle,
    mongoose,
    npm,
    yarn,
    pnpm,
  ],
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "javascript",
};

export const typescript: Skill = {
  name: "TypeScript",
  skills: [
    nextjs,
    nextauth,
    nodejs,
    react,
    jest,
    vitest,
    prisma,
    drizzle,
    mongoose,
    npm,
    yarn,
    pnpm,
  ],
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "typescript",
};

export const java: Skill = {
  name: "Java",
  skills: [maven, gradle, junit, spring, springBoot, hibernate],
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "java",
};

export const gameMakerLanguage: Skill = {
  name: "GameMaker Skill",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
  slug: "game-maker-language",
};

export const shellScript: Skill = {
  name: "Shell Script",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
  slug: "shell",
};

export const rLanguage: Skill = {
  name: "R",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
  slug: "r",
};

export const groovy: Skill = {
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
const languages: Skill[] = [
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
