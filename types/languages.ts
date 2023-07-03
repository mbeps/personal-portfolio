/**
 * Interface for representing a skill.
 */
interface Skill {
  skill: string;
  category?:
    | "Frontend Web Development"
    | "Backend Web Development"
    | "Full Stack Web Development"
    | "Object Relational Mapper"
    | "Testing"
    | "Project Manager"
    | "Machine Learning"
    | "Other";
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
  { skill: "React", category: "Frontend Web Development" },
  { skill: "Next.JS", category: "Full Stack Web Development" },
  { skill: "NextAuth", category: "Backend Web Development" },
  { skill: "Jest", category: "Testing" },
  { skill: "Vitest", category: "Testing" },
  { skill: "Chakra UI", category: "Frontend Web Development" },
  { skill: "Next UI", category: "Frontend Web Development" },
  { skill: "Prisma", category: "Object Relational Mapper" },
  { skill: "Drizzle", category: "Object Relational Mapper" },
  { skill: "Mongoose", category: "Object Relational Mapper" },
];

/**
 * Array of languages.
 * Each language has an array of skills and repositories.
 */
const languages: Language[] = [
  {
    language: "Python",
    skills: [
      { skill: "Poetry", category: "Project Manager" },
      { skill: "Flask", category: "Backend Web Development" },
      { skill: "Django", category: "Backend Web Development" },
      { skill: "Numpy", category: "Machine Learning" },
      { skill: "Jupyter Notebooks", category: "Machine Learning" },
      { skill: "PyTest", category: "Testing" },
      { skill: "SQLAlchemy", category: "Object Relational Mapper" },
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
    skills: [
      { skill: "Maven", category: "Project Manager" },
      { skill: "JUnit", category: "Testing" },
    ],
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

export { languages };
