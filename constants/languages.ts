import { Language } from "@/types/languages";
import { Skill } from "@/types/skills";

/**
 * Array of skills for JavaScript and TypeScript.
 * Skills for both languages are the same.
 */
const JavaScriptTypeScriptSkills: Skill[] = [
  { skill: "Next.JS", category: "Full Stack Web Development" },
  { skill: "NextAuth", category: "Backend Web Development" },
  { skill: "Node.JS", category: "Backend Web Development" },
  { skill: "React", category: "Frontend Web Development" },
  { skill: "Jest", category: "Testing" },
  { skill: "Vitest", category: "Testing" },
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
    language: "Python",
    skills: [
      { skill: "Flask", category: "Backend Web Development" },
      { skill: "Django", category: "Backend Web Development" },
      { skill: "Scikit Learn", category: "Machine Learning" },
      { skill: "Jupyter Notebooks", category: "Machine Learning" },
      { skill: "PyTest", category: "Testing" },
      { skill: "SQLAlchemy", category: "Object Relational Mapper" },
      { skill: "Poetry", category: "Project Manager" },
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
    language: "C",
  },
  {
    language: "Haskell",
  },
  {
    language: "Shell",
  },
  {
    language: "PHP",
  },
  {
    language: "Prolog",
  },
];

export { languages };
