/**
 * Interface for representing a skill.
 */
interface Skill {
  skill: string;
}

/**
 * Interface for representing a repository.
 */
interface Repository {
  name: string;
  repository: string;
}

/**
 * Interface for representing a language.
 */
interface Language {
  language: string;
  skills?: Skill[];
  repositories?: Repository[];
}

export type { Skill, Repository, Language };

/**
 * Array of skills for JavaScript and TypeScript.
 * Skills for both languages are the same.
 */
const JavaScriptTypeScriptSkills: Skill[] = [
  { skill: "React" },
  { skill: "Next.JS" },
  { skill: "NextAuth" },
  { skill: "Jest" },
  { skill: "Vitest" },
  { skill: "Tailwind CSS" },
  { skill: "Chakra UI" },
];

/**
 * Array of languages.
 * Each language has an array of skills and repositories.
 */
const languages: Language[] = [
  {
    language: "Python",
    skills: [
      { skill: "Poetry" },
      { skill: "Flask" },
      { skill: "Django" },
      { skill: "Numpy" },
      { skill: "Jupyter Notebooks" },
      { skill: "PyTest" },
    ],
    repositories: [
      {
        name: "Python Projects",
        repository:
          "https://github.com/mbeps?tab=repositories&q=&type=&language=python&sort=",
      },
      {
        name: "Jupyter Notebook Projects",
        repository:
          "https://github.com/mbeps?tab=repositories&q=&type=&language=jupyter+notebook&sort=",
      },
    ],
  },
  {
    language: "Java",
    skills: [{ skill: "Maven" }, { skill: "JUnit" }],
    repositories: [
      {
        name: "Java Projects",
        repository:
          "https://github.com/mbeps?tab=repositories&q=&type=&language=java&sort=",
      },
    ],
  },
  {
    language: "JavaScript",
    skills: JavaScriptTypeScriptSkills,
  },
  {
    language: "TypeScript",
    skills: JavaScriptTypeScriptSkills,
    repositories: [
      {
        name: "TypeScript Projects",
        repository:
          "https://github.com/mbeps?tab=repositories&q=&type=&language=typescript&sort=",
      },
    ],
  },
  {
    language: "C",
  },
  {
    language: "Haskell",
  },
  {
    language: "Shell",
  },
];

/**
 * Array of technologies.
 */
const technologies = [
  "Git",
  "SVN",
  "Firebase",
  "Supabase",
  "GitHub Actions",
  "Jenkins",
  "Docker",
  "REST",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
];

export { languages, technologies };
