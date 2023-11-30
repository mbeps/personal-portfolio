import { Language } from "@/types/languages";
import { Skill } from "@/types/skills";

/**
 * Array of skills for JavaScript and TypeScript.
 * Skills for both languages are the same.
 */
const JavaScriptTypeScriptSkills: Skill[] = [
  { skill: "Next.JS", category: "Full-Stack Web Development" },
  { skill: "NextAuth", category: "Back-End Web Development" },
  { skill: "Node.JS", category: "Back-End Web Development" },
  { skill: "React", category: "Front-End Web Development" },
  { skill: "Jest", category: "Testing" },
  { skill: "Vitest", category: "Testing" },
  { skill: "Prisma", category: "Object Relational Mappers" },
  { skill: "Drizzle", category: "Object Relational Mappers" },
  { skill: "Mongoose", category: "Object Relational Mappers" },
  { skill: "NPM", category: "Project Managers" },
  { skill: "Yarn", category: "Project Managers" },
  { skill: "PNPM", category: "Project Managers" },
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
      { skill: "Flask", category: "Back-End Web Development" },
      { skill: "Django", category: "Back-End Web Development" },
      { skill: "Scikit Learn", category: "Machine Learning" },
      { skill: "Pandas", category: "Machine Learning" },
      { skill: "NumPy", category: "Machine Learning" },
      { skill: "Matplotlib", category: "Machine Learning" },
      { skill: "Seaborn", category: "Machine Learning" },
      { skill: "Keras", category: "Machine Learning" },
      { skill: "Jupyter Notebooks", category: "Machine Learning" },
      { skill: "PyTest", category: "Testing" },
      { skill: "UnitTest", category: "Testing" },
      { skill: "SQLAlchemy", category: "Object Relational Mappers" },
      { skill: "Poetry", category: "Project Managers" },
      { skill: "PyBuilder", category: "Project Managers" },
    ],
    repository: "projects?type=All&technology=All&language=Python&search=",
  },
  {
    language: "Java",
    skills: [
      { skill: "Maven", category: "Project Managers" },
      { skill: "Gradle", category: "Project Managers" },
      { skill: "JUnit", category: "Testing" },
      { skill: "Spring", category: "Back-End Web Development" },
      { skill: "Spring Boot", category: "Back-End Web Development" },
      { skill: "Hibernate", category: "Object Relational Mappers" },
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
