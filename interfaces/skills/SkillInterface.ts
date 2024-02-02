/**
 * Interface for representing a skill.
 */
export default interface SkillInterface {
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
    | "Artificial Intelligence"
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
  relatedSkills?: SkillInterface[];
  isMainSkill?: boolean;
  skillType: "hard" | "general" | "soft";
}
