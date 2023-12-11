import { Skill } from "@/types/skills";
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
} from "./skills/hardSkills";

export const python: Skill = {
  skill: "Python",
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
  skill: "JavaScript",
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
  skill: "TypeScript",
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
  skill: "Java",
  skills: [maven, gradle, junit, spring, springBoot, hibernate],
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "java",
};

export const gameMakerLanguage: Skill = {
  skill: "GameMaker Skill",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
  slug: "game-maker-language",
};

export const shellScript: Skill = {
  skill: "Shell Script",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
  slug: "shell",
};

export const rLanguage: Skill = {
  skill: "R",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
  slug: "r",
};

/**
 * Array of languages.
 * Each skill has an array of skills and repositories.
 */
const languages: Skill[] = [javascript, typescript, python, java];

export { languages };
