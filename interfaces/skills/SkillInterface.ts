
export enum SkillCategories {
  ProgrammingLanguages = "Programming Languages",
  ProgrammingParadigms = "Programming Paradigms",
  FrontEndWebDevelopment = "Front-End Web Development",
  BackEndWebDevelopment = "Back-End Web Development",
  FullStackWebDevelopment = "Full-Stack Web Development",
  ObjectRelationalMappers = "Object Relational Mappers",
  DevOps = "DevOps",
  Testing = "Testing",
  ProjectManagers = "Project Managers",
  DataScience = "Data Science",
  ArtificialIntelligence = "Artificial Intelligence",
  CloudComputing = "Cloud Computing",
  Databases = "Databases",
  APIs = "APIs",
  SDKs = "SDKs",
  WebSockets = "Web Sockets",
  Mathematics = "Mathematics",
  GameDevelopment = "Game Development",
  CodeQuality = "Code Quality",
  VersionControl = "Version Control",
  PlatformDevelopment = "Platform Development",
  CoreComputerScience = "Core Computer Science",
  Automation = "Automation",
  SoftSkills = "Soft Skills"
}

export enum SkillTypes {
  Hard = "hard",
  General = "general",
  Soft = "soft"
}

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
  skillType: SkillTypes;
}
