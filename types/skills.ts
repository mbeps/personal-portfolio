/**
 * Interface for representing a skill.
 */
interface Skill {
  skill: string;
  category?:
    | "Front-End Web Development"
    | "Back-End Web Development"
    | "Full-Stack Web Development"
    | "Object Relational Mapper"
    | "Testing"
    | "Project Manager"
    | "Machine Learning"
    | "CI/CD"
    | "Database"
    | "Containerization"
    | "API"
    | "Web Socket"
    | "Artificial Intelligence"
    | "Mathematics"
    | "Other";
}

export type { Skill };
