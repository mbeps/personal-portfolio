/**
 * Interface for representing a skill.
 */
interface Skill {
  skill: string;
  category?:
    | "Frontend Web Development"
    | "Backend Web Development"
    | "Full Stack Web Development"
    | "Object Relation Mapper"
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

interface Technology {
  name: string;
  category?:
    | "Version Control System"
    | "Continuous Integration"
    | "Database"
    | "Containerization"
    | "Web Development"
    | "API"
    | "Backend Web Development"
    | "Frontend Web Development"
    | "Web Socket"
    | "Other";
}

export type { Skill, Repository, Language, Technology };

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
  { skill: "Prisma", category: "Object Relation Mapper" },
  { skill: "Drizzle", category: "Object Relation Mapper" },
  { skill: "Mongoose", category: "Object Relation Mapper" },
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
      { skill: "SQLAlchemy", category: "Object Relation Mapper" },
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

/**
 * Array of technologies.
 */
const technologies: Technology[] = [
  { name: "Git", category: "Version Control System" },
  { name: "SVN", category: "Version Control System" },
  { name: "Firebase", category: "Backend Web Development" },
  { name: "Supabase", category: "Backend Web Development" },
  { name: "Tailwind CSS", category: "Frontend Web Development" },
  { name: "Radix UI", category: "Frontend Web Development" },
  { name: "Headless UI", category: "Frontend Web Development" },
  { name: "GitHub Actions", category: "Continuous Integration" },
  { name: "Jenkins", category: "Continuous Integration" },
  { name: "Docker", category: "Containerization" },
  { name: "REST", category: "API" },
  { name: "GraphQL", category: "API" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Socket.IO", category: "Web Socket" },
  { name: "Pusher", category: "Web Socket" },
];

export { languages, technologies };
