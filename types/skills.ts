/**
 * Interface for representing a skill.
 */
interface Skill {
  skill: string;
  category?:
    | "Front-End Web Development"
    | "Back-End Web Development"
    | "Full-Stack Web Development"
    | "Object Relational Mappers"
    | "Testing"
    | "Project Managers"
    | "Machine Learning"
    | "CI/CD"
    | "Databases"
    | "Containerization"
    | "APIs"
    | "Web Sockets"
    | "Artificial Intelligence"
    | "Mathematics"
    | "Other";
}

export type { Skill };
