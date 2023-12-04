import { Language } from "@/types/languages";
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

/**
 * Array of skills for JavaScript and TypeScript.
 * Skills for both languages are the same.
 */
const JavaScriptTypeScriptSkills: Skill[] = [
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
];

/**
 * Array of languages.
 * Each language has an array of skills and repositories.
 */
const languages: Language[] = [
  {
    language: "JavaScript",
    skills: JavaScriptTypeScriptSkills,
  },
  {
    language: "TypeScript",
    skills: JavaScriptTypeScriptSkills,
    repository: "projects?type=All&technology=All&language=TypeScript&search=",
  },
  {
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
  },
  {
    language: "Java",
    skills: [maven, gradle, junit, spring, springBoot, hibernate],
    repository: "projects?type=All&technology=All&language=Java&search=",
  },
];

export { languages };
