import { Skill } from "../types/languages";

/**
 * Array of technologies.
 */
const technologies: Skill[] = [
  { skill: "Firebase", category: "Back-End Web Development" },
  { skill: "Supabase", category: "Back-End Web Development" },
  { skill: "PocketBase", category: "Back-End Web Development" },
  { skill: "Auth0", category: "Back-End Web Development" },
  { skill: "Clerk Auth", category: "Back-End Web Development" },
  { skill: "Stripe", category: "Back-End Web Development" },

  { skill: "Tailwind CSS", category: "Front-End Web Development" },
  { skill: "HTML", category: "Front-End Web Development" },
  { skill: "CSS", category: "Front-End Web Development" },

  { skill: "GitHub Actions", category: "CI/CD" },
  { skill: "Jenkins", category: "CI/CD" },
  { skill: "TeamCity", category: "CI/CD" },

  { skill: "Docker", category: "Containerization" },

  { skill: "REST", category: "API" },
  { skill: "GraphQL", category: "API" },
  { skill: "tRPC", category: "API" },

  { skill: "PostgreSQL", category: "Database" },
  { skill: "MySQL", category: "Database" },
  { skill: "SQLite", category: "Database" },
  { skill: "Normalisation", category: "Database" },
  { skill: "MongoDB", category: "Database" },
  { skill: "Redis", category: "Database" },

  { skill: "Socket.IO", category: "Web Socket" },
  { skill: "Pusher", category: "Web Socket" },

  { skill: "OpenAI", category: "Artificial Intelligence" },
  { skill: "Replicate AI", category: "Artificial Intelligence" },

  { skill: "Probability & Statistics", category: "Mathematics" },
  { skill: "Calculus", category: "Mathematics" },
  { skill: "Trigonometry", category: "Mathematics" },
  { skill: "Algebra", category: "Mathematics" },
  { skill: "Linear Algebra", category: "Mathematics" },
  { skill: "Discrete", category: "Mathematics" },
  { skill: "Geometry", category: "Mathematics" },

  { skill: "Git", category: "Other" },
  { skill: "Vagrant", category: "Other" },
  { skill: "Linux", category: "Other" },
];

export { technologies };
