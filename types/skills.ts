/**
 * Interface for representing a skill.
 */
interface Skill {
  skill: string;
  category:
    | "Programming Languages"
    | "Programming Paradigms"
    | "Front-End Web Development"
    | "Back-End Web Development"
    | "Full-Stack Web Development"
    | "Object Relational Mappers"
    | "Testing"
    | "Project Managers"
    | "Machine Learning"
    | "CI/CD"
    | "Infrastructure as Code"
    | "Cloud Computing"
    | "Databases"
    | "Containerization"
    | "APIs"
    | "SDKs"
    | "Web Sockets"
    | "Artificial Intelligence"
    | "Mathematics"
    | "Game Development"
    | "Linting"
    | "Version Control Systems"
    | "Platform Development"
    | "Other"
    | "Soft Skills";
  skills?: Skill[];
  isMainSkill: boolean;
  skillType: "hard" | "general" | "soft";
}

export type { Skill };

// TODO: create a skill category interface
