import Skill from "@/types/skills";
import {
  flask,
  django,
  nextauth,
  springBoot,
  spring,
} from "./technicalHardSkills/technicalHardSkillsBackendWebDev";
import { react } from "./technicalHardSkills/technicalHardSkillsFrontendWebDev";
import { nextjs } from "./technicalHardSkills/technicalHardSkillsFullStackWebDev";
import {
  scikitLearn,
  pandas,
  numpy,
  matplotlib,
  seaborn,
  keras,
  jupyterNotebooks,
} from "./technicalHardSkills/technicalHardSkillsMLDS";
import {
  poetry,
  pybuilder,
  npm,
  yarn,
  pnpm,
  maven,
  gradle,
} from "./technicalHardSkills/technicalHardSkillsProjectManagers";
import {
  pytest,
  unittest,
  jest,
  vitest,
  junit,
} from "./technicalHardSkills/technicalHardSkillsTesting";
import {
  sqlalchemy,
  prisma,
  drizzle,
  mongoose,
  hibernate,
} from "./technicalHardSkills/technicalHardSkillsORMs";

export const python: Skill = {
  name: "Python",
  technicalGeneralSkills: [
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
  technicalGeneralSkills: [
    nextjs,
    nextauth,
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
  technicalGeneralSkills: [
    nextjs,
    nextauth,
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
  technicalGeneralSkills: [maven, gradle, junit, spring, springBoot, hibernate],
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
