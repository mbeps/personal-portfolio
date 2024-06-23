import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import BlogCategoriesEnum from "@/enums/Blog/BlogCategoriesEnum";
import BlogDatabaseKeys from "@/database/Blogs/BlogDatabaseKeys";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import BlogInterface from "@/database/Blogs/BlogInterface";
import skillDatabaseMap from "../Skills/SkillDatabaseMap";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import projectDatabaseMap from "../Projects/ProjectDatabaseMap";
import ProjectDatabaseKeys from "../Projects/ProjectDatabaseKeys";

/**
 * Hashmap of blogs with keys as {@link BlogDatabaseKeys} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 */
const blogsMap: Database<BlogInterface> = {
  [BlogDatabaseKeys.Backend]: {
    name: "Exploring Backends: Custom vs Managed Solutions",
    subtitle:
      "An In-depth Analysis of Backend Development Approaches, Tools, and Security Considerations",
    skills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.CloudComputing,
      SkillDatabaseKeys.Firebase,
      SkillDatabaseKeys.Supabase,
      SkillDatabaseKeys.PocketBase,
    ],
    category: BlogCategoriesEnum.WebDevelopment,
  },
  [BlogDatabaseKeys.CICD]: {
    name: "Embracing the Future of Software Development: A Comprehensive Guide to CI/CD",
    subtitle:
      "Mastering Continuous Integration and Continuous Delivery for Enhanced Software Delivery",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillDatabaseKeys.DevOps,
      SkillDatabaseKeys.ContinuousIntegration,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Kubernetes,
      SkillDatabaseKeys.Containerisation,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CloudComputing,
      SkillDatabaseKeys.InfrastructureAsCode,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
    ],
  },
  [BlogDatabaseKeys.DevOps]: {
    name: "Embracing DevOps: A Guide to Principles, Practices, and Success Stories",
    subtitle:
      "Understanding the Impact of DevOps in Modern Software Development",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillDatabaseKeys.DevOps,
      SkillDatabaseKeys.IntegrationManagement,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.Containerisation,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CloudComputing,
      SkillDatabaseKeys.InfrastructureAsCode,
      SkillDatabaseKeys.Automation,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
    ],
  },
  [BlogDatabaseKeys.Docker]: {
    name: "Docker: Unleashing the Power of Containers",
    subtitle:
      "A Comprehensive Guide to Understanding Docker and Containerization Technology",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillDatabaseKeys.DevOps,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Containerisation,
      SkillDatabaseKeys.ProblemSolving,
    ],
  },
  [BlogDatabaseKeys.Frontend]: {
    name: "Front-End Development and the Essential Role of Libraries and Frameworks",
    subtitle:
      "A comprehensive introduction to standard front-end web development using libraries and frameworks",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.AngularJS,
      SkillDatabaseKeys.SvelteJS,
      SkillDatabaseKeys.VueJS,
    ],
  },
  [BlogDatabaseKeys.JavaScriptVsTypeScript]: {
    name: "JavaScript vs TypeScript: A Detailed Comparison",
    subtitle:
      "Exploring the Advantages and Key Differences between JavaScript and TypeScript",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.JavaScript, SkillDatabaseKeys.TypeScript],
  },
  [BlogDatabaseKeys.Kubernetes]: {
    name: "Kubernetes Guide: Mastering Container Orchestration",
    subtitle: "An Overview of Components, Tools, and Best Practices",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillDatabaseKeys.DevOps,
      SkillDatabaseKeys.Kubernetes,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Containerisation,
    ],
  },
  [BlogDatabaseKeys.MachineLearningFoundations]: {
    name: "Exploring the Depths of Machine Learning",
    subtitle:
      "A Comprehensive Guide to Machine Learning: Concepts, Challenges, and Real-World Impact",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
  },
  [BlogDatabaseKeys.ORM]: {
    name: "Understanding Object-Relational Mapping (ORM)",
    subtitle:
      "A Comprehensive Overview of ORM, Its Advantages, Disadvantages, and Role in Modern Web Application Development",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.ObjectRelationalMapping,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Drizzle,
      SkillDatabaseKeys.Mongoose,
      SkillDatabaseKeys.SQLAlchemy,
      SkillDatabaseKeys.Hibernate,
      SkillDatabaseKeys.Probability,
    ],
  },
  [BlogDatabaseKeys.RESTGraphQL]: {
    name: "Comparing GraphQL and REST: A Detailed Overview",
    subtitle: "Choosing the Right API Design Approach",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.APIs,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.GraphQL,
      SkillDatabaseKeys.ProblemSolving,
    ],
  },
  [BlogDatabaseKeys.SDKvsAPI]: {
    name: "SDKs vs APIs: A Comparative Guide",
    subtitle: "Understanding Their Roles in Software Development",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.APIs, SkillDatabaseKeys.SDKs],
  },
  [BlogDatabaseKeys.SessionsVsTokens]: {
    name: "Comparing Session and Token: Navigating Authentication",
    subtitle: "A Detailed Comparison of Authentication Strategies",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [
      SkillDatabaseKeys.WebDevelopment,
      SkillDatabaseKeys.UserAuthentication,
    ],
  },
  [BlogDatabaseKeys.SoftwareTesting]: {
    name: "Comprehensive Guide to Software Testing",
    subtitle:
      "Exploring Functional and Non-Functional Testing Techniques, Tools, and Challenges",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.Testing, SkillDatabaseKeys.ProblemSolving],
  },
  [BlogDatabaseKeys.SQLNOSQL]: {
    name: "Exploring Databases: A Comparative Study of Relational and Non-Relational Models",
    subtitle:
      "An In-depth Analysis of Database Systems and their Role in Software Engineering and Web Development",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.Normalisation,
    ],
  },
  [BlogDatabaseKeys.SyncAsync]: {
    name: "Sync vs Async: Deep Dive into Programming Models",
    subtitle:
      "Understanding and Optimizing Synchronous and Asynchronous Programming",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.WebDevelopment],
  },

  // Projects
  [BlogDatabaseKeys.CircusDiscussions]: {
    name: "Journey Building Circus Discussions",
    subtitle:
      "Discussing the journey of building Circus Discussions. This is a platform where users can discuss related topics in a forum-like environment. It was my Final Year Project.",
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.CircusDiscussions].skills,
    relatedMaterials: [ProjectDatabaseKeys.CircusDiscussions],
  },
  [BlogDatabaseKeys.RingmasterMessaging]: {
    name: "Journey Building Ringmaster Messaging",
    subtitle:
      "Discussing the journey of building Ringmaster Messaging. This is a platform where users can message each other. It was for learning to build custom backends.",
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.RingmasterMessaging].skills,
    relatedMaterials: [ProjectDatabaseKeys.RingmasterMessaging],
  },
  [BlogDatabaseKeys.MagicianAI]: {
    name: "Journey Building Magician AI",
    subtitle:
      "Discussing the journey of building Magician AI. This is a platform where users can generate media using AI. It was for learning to use OpenAI and ReplicateAI APIs.",
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.MagicianAI].skills,
    relatedMaterials: [ProjectDatabaseKeys.MagicianAI],
  },
  [BlogDatabaseKeys.DrumrollMusic]: {
    name: "Journey Building Drumroll Music",
    subtitle:
      "Discussing the journey of building Drumroll Music. This is a platform where users can listen to music. It was for learning to use Supabase.",
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.DrumrollMusic].skills,
    relatedMaterials: [ProjectDatabaseKeys.DrumrollMusic],
  },
  [BlogDatabaseKeys.Quizmify]: {
    name: "Journey Building Quizmify",
    subtitle:
      "Discussing the journey of building Quizmify. This is a platform where users can use AI to test their knowledge in any topic. ",
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.Quizmify].skills,
    relatedMaterials: [ProjectDatabaseKeys.Quizmify],
  },
  [BlogDatabaseKeys.OsmosGame]: {
    name: "Journey Building Osmos Game",
    subtitle:
      "Discussing the journey of building Osmos Game. This is a platform where users can play a game. It was a group project in university.",
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.OsmosGame].skills,
    relatedMaterials: [ProjectDatabaseKeys.OsmosGame],
  },
};

/**
 * List of keys for the blogs that can be used to uniquely identify the blogs.
 */
export const blogDatabaseKeys: BlogDatabaseKeys[] = Object.keys(
  blogsMap
) as BlogDatabaseKeys[];

/**
 * Hashmap of blogs with keys as {@link BlogDatabaseKeys} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const blogsDatabaseMap: Database<BlogInterface> =
  addNestedSkillsMaterialList<BlogInterface>(
    blogsMap,
    skillDatabaseMap,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.Technical,
    SkillTypesEnum.Technology
  );

export default blogsDatabaseMap;
