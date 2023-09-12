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
    repository: "projects?type=All&technology=All&language=TypeScript&search=",
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
    repository: "projects?type=All&technology=All&language=Python&search=",
  },
  {
    language: "Java",
    skills: [
      { skill: "Maven", category: "Project Manager" },
      { skill: "JUnit", category: "Testing" },
    ],
    repository: "projects?type=All&technology=All&language=Java&search=",
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
