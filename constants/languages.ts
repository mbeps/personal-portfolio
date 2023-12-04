import { Language } from "@/types/languages";
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

export const python: Language = {
  language: "Python",
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
  repository: "projects?type=All&technology=All&language=Python&search=",
};

export const javascript: Language = {
  language: "JavaScript",
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
};

export const typescript: Language = {
  language: "TypeScript",
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
  repository: "projects?type=All&technology=All&language=TypeScript&search=",
};

export const java: Language = {
  language: "Java",
  skills: [maven, gradle, junit, spring, springBoot, hibernate],
  repository: "projects?type=All&technology=All&language=Java&search=",
};

export const gameMakerLanguage: Language = {
  language: "GameMaker Language",
};

export const shellScript: Language = {
  language: "Shell Script",
};

/**
 * Array of languages.
 * Each language has an array of skills and repositories.
 */
const languages: Language[] = [javascript, typescript, python, java];

export { languages };
