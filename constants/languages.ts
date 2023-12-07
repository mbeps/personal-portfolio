import { Skill } from "@/types/skills";
import {
  django,
  drizzle,
  flask,
  gradle,
  hibernate,
  jest,
  junit,
  jupyterNotebooks,
  keras,
  matplotlib,
  maven,
  mongoose,
  nextauth,
  nextjs,
  nodejs,
  npm,
  numpy,
  pandas,
  pnpm,
  poetry,
  prisma,
  pybuilder,
  pytest,
  react,
  scikitLearn,
  seaborn,
  spring,
  springBoot,
  sqlalchemy,
  unittest,
  vitest,
  yarn,
} from "./skills";

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
};

export const java: Skill = {
  skill: "Java",
  skills: [maven, gradle, junit, spring, springBoot, hibernate],
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
};

export const gameMakerLanguage: Skill = {
  skill: "GameMaker Skill",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
};

export const shellScript: Skill = {
  skill: "Shell Script",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
};

export const rLanguage: Skill = {
  skill: "R",
  isMainSkill: false,
  skillType: "hard",
  category: "Programming Languages",
};

/**
 * Array of languages.
 * Each skill has an array of skills and repositories.
 */
const languages: Skill[] = [javascript, typescript, python, java];

export { languages };
