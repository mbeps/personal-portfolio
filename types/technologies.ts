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

/**
 * Array of technologies.
 */
const technologies: Technology[] = [
  { name: "Git", category: "Version Control System" },
  { name: "SVN", category: "Version Control System" },
  { name: "Firebase", category: "Backend Web Development" },
  { name: "Supabase", category: "Backend Web Development" },
  { name: "PocketBase", category: "Backend Web Development" },
  { name: "Auth0", category: "Backend Web Development" },
  { name: "Tailwind CSS", category: "Frontend Web Development" },
  { name: "Radix UI", category: "Frontend Web Development" },
  { name: "Headless UI", category: "Frontend Web Development" },
  { name: "GitHub Actions", category: "Continuous Integration" },
  { name: "Jenkins", category: "Continuous Integration" },
  { name: "Docker", category: "Containerization" },
  { name: "REST", category: "API" },
  { name: "GraphQL", category: "API" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "SQLite", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Socket.IO", category: "Web Socket" },
  { name: "Pusher", category: "Web Socket" },
  { name: "Vagrant", category: "Other" },
];

export type { Technology };
export { technologies };