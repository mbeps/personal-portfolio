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
    | "Version Control System"
    | "Continuous Integration"
    | "Database"
    | "Containerization"
    | "Web Development"
    | "API"
    | "Backend Web Development"
    | "Frontend Web Development"
    | "Web Socket"
    | "Artificial Intelligence"
    | "Other";
}

export type { Skill };
