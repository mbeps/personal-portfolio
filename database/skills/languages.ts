import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  flask,
  django,
  nextauth,
  springBoot,
  spring,
  gunicorn,
  jinja,
  express,
} from "./technicalHardSkills/technicalHardSkillsBackendWebDev";
import {
  react,
  svelte,
  vue,
} from "./technicalHardSkills/technicalHardSkillsFrontendWebDev";
import {
  nextjs,
  nuxtjs,
  svelteKit,
} from "./technicalHardSkills/technicalHardSkillsFullStackWebDev";
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
  nxjs,
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
import {
  black,
  eslint,
  prettier,
  pyLint,
  zod,
} from "./technicalHardSkills/technicalHardSkillsCodeQuality";

export const python: SkillInterface = {
  name: "Python",
  technicalHardSkills: [
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
    gunicorn,
    jinja,
    pyLint,
    black,
  ],
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "python",
};

export const javascript: SkillInterface = {
  name: "JavaScript",
  technicalHardSkills: [
    nextjs,
    nextauth,
    react,
    vue,
    svelte,
    nuxtjs,
    svelteKit,
    jest,
    vitest,
    prisma,
    drizzle,
    mongoose,
    npm,
    yarn,
    pnpm,
    express,
    nxjs,
    zod,
    eslint,
    prettier,
  ],
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "javascript",
};

export const typescript: SkillInterface = {
  name: "TypeScript",
  technicalHardSkills: [
    nextjs,
    nextauth,
    react,
    vue,
    svelte,
    nuxtjs,
    svelteKit,
    jest,
    vitest,
    prisma,
    drizzle,
    mongoose,
    npm,
    yarn,
    pnpm,
    express,
    nxjs,
    zod,
    eslint,
    prettier,
  ],
  isMainSkill: true,
  skillType: "hard",
  category: "Programming Languages",
  slug: "typescript",
};

export const java: SkillInterface = {
  name: "Java",
  technicalHardSkills: [maven, gradle, junit, spring, springBoot, hibernate],
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
