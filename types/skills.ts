/**
 * Interface for representing a skill.
 */
interface Skill {
  name: string;
  slug: string;
  category:
    | "Programming Languages"
    | "Programming Paradigms"
    | "Front-End Web Development"
    | "Back-End Web Development"
    | "Full-Stack Web Development"
    | "Object Relational Mappers"
    | "DevOps"
    | "Testing"
    | "Project Managers"
    | "Data Science"
    | "Artificial Intelligence & Machine Learning"
    | "Cloud Computing"
    | "Databases"
    | "APIs"
    | "SDKs"
    | "Web Sockets"
    | "Mathematics"
    | "Game Development"
    | "Code Quality"
    | "Version Control"
    | "Platform Development"
    | "Core Computer Science"
    | "Automation"
    | "Platform Development"
    | "Soft Skills";
  skills?: Skill[];
  isMainSkill: boolean;
  skillType: "hard" | "general" | "soft";
}

export type { Skill };

// TODO: create a skill category interface
