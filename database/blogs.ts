import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import BlogCategoriesEnum from "@/enums/BlogCategoriesEnum";
import BlogKeysEnum from "@/enums/DatabaseKeysEnums/BlogKeysEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import BlogInterface from "@/interfaces/material/BlogInterface";
import skillDatabase from "./skills";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";

/**
 * Hashmap of blogs with keys as {@link BlogKeysEnum} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 */
const blogsMap: Database<BlogInterface> = {
  [BlogKeysEnum.Backend]: {
    name: "Exploring Backends: Custom vs Managed Solutions",
    subtitle:
      "An In-depth Analysis of Backend Development Approaches, Tools, and Security Considerations",
    skills: [
      SkillKeysEnum.WebDevelopment,
      SkillKeysEnum.CloudComputing,
      SkillKeysEnum.Firebase,
      SkillKeysEnum.Supabase,
      SkillKeysEnum.PocketBase,
    ],
    category: BlogCategoriesEnum.WebDevelopment,
  },
  [BlogKeysEnum.CICD]: {
    name: "Embracing the Future of Software Development: A Comprehensive Guide to CI/CD",
    subtitle:
      "Mastering Continuous Integration and Continuous Delivery for Enhanced Software Delivery",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillKeysEnum.DevOps,
      SkillKeysEnum.ContinuousIntegration,
      SkillKeysEnum.ContinuousDelivery,
      SkillKeysEnum.ContinuousDeployment,
      SkillKeysEnum.Docker,
      SkillKeysEnum.Kubernetes,
      SkillKeysEnum.Containerisation,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CloudComputing,
      SkillKeysEnum.InfrastructureAsCode,
      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
    ],
  },
  [BlogKeysEnum.DevOps]: {
    name: "Embracing DevOps: A Guide to Principles, Practices, and Success Stories",
    subtitle:
      "Understanding the Impact of DevOps in Modern Software Development",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillKeysEnum.DevOps,
      SkillKeysEnum.IntegrationManagement,
      SkillKeysEnum.ContinuousDelivery,
      SkillKeysEnum.ContinuousDeployment,
      SkillKeysEnum.Containerisation,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CloudComputing,
      SkillKeysEnum.InfrastructureAsCode,
      SkillKeysEnum.Automation,
      SkillKeysEnum.Git,
      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
    ],
  },
  [BlogKeysEnum.Docker]: {
    name: "Docker: Unleashing the Power of Containers",
    subtitle:
      "A Comprehensive Guide to Understanding Docker and Containerization Technology",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillKeysEnum.DevOps,
      SkillKeysEnum.Docker,
      SkillKeysEnum.Containerisation,
      SkillKeysEnum.ProblemSolving,
    ],
  },
  [BlogKeysEnum.Frontend]: {
    name: "Front-End Development and the Essential Role of Libraries and Frameworks",
    subtitle:
      "A comprehensive introduction to standard front-end web development using libraries and frameworks",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [
      SkillKeysEnum.WebDevelopment,
      SkillKeysEnum.HTML,
      SkillKeysEnum.CSS,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.ReactJS,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.AngularJS,
      SkillKeysEnum.SvelteJS,
      SkillKeysEnum.VueJS,
    ],
  },
  [BlogKeysEnum.JavaScriptVsTypeScript]: {
    name: "JavaScript vs TypeScript: A Detailed Comparison",
    subtitle:
      "Exploring the Advantages and Key Differences between JavaScript and TypeScript",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillKeysEnum.JavaScript, SkillKeysEnum.TypeScript],
  },
  [BlogKeysEnum.Kubernetes]: {
    name: "Kubernetes Guide: Mastering Container Orchestration",
    subtitle: "An Overview of Components, Tools, and Best Practices",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillKeysEnum.DevOps,
      SkillKeysEnum.Kubernetes,
      SkillKeysEnum.Docker,
      SkillKeysEnum.Containerisation,
    ],
  },
  [BlogKeysEnum.MachineLearningFoundations]: {
    name: "Exploring the Depths of Machine Learning",
    subtitle:
      "A Comprehensive Guide to Machine Learning: Concepts, Challenges, and Real-World Impact",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillKeysEnum.MachineLearning,
      SkillKeysEnum.Algorithms,
      SkillKeysEnum.DataScience,
      SkillKeysEnum.ArtificialIntelligence,
      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.CriticalThinking,
    ],
  },
  [BlogKeysEnum.ORM]: {
    name: "Understanding Object-Relational Mapping (ORM)",
    subtitle:
      "A Comprehensive Overview of ORM, Its Advantages, Disadvantages, and Role in Modern Web Application Development",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillKeysEnum.DatabaseManagementSystems,
      SkillKeysEnum.Databases,
      SkillKeysEnum.RelationalDatabases,
      SkillKeysEnum.NonRelationalDatabases,
      SkillKeysEnum.ObjectRelationalMapping,
      SkillKeysEnum.Prisma,
      SkillKeysEnum.Drizzle,
      SkillKeysEnum.Mongoose,
      SkillKeysEnum.SQLAlchemy,
      SkillKeysEnum.Hibernate,
      SkillKeysEnum.Probability,
    ],
  },
  [BlogKeysEnum.RESTGraphQL]: {
    name: "Comparing GraphQL and REST: A Detailed Overview",
    subtitle: "Choosing the Right API Design Approach",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [
      SkillKeysEnum.WebDevelopment,
      SkillKeysEnum.APIs,
      SkillKeysEnum.REST,
      SkillKeysEnum.GraphQL,
      SkillKeysEnum.ProblemSolving,
    ],
  },
  [BlogKeysEnum.SDKvsAPI]: {
    name: "SDKs vs APIs: A Comparative Guide",
    subtitle: "Understanding Their Roles in Software Development",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillKeysEnum.APIs, SkillKeysEnum.SDKs],
  },
  [BlogKeysEnum.SessionsVsTokens]: {
    name: "Comparing Session and Token: Navigating Authentication",
    subtitle: "A Detailed Comparison of Authentication Strategies",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [SkillKeysEnum.WebDevelopment, SkillKeysEnum.UserAuthentication],
  },
  [BlogKeysEnum.SoftwareTesting]: {
    name: "Comprehensive Guide to Software Testing",
    subtitle:
      "Exploring Functional and Non-Functional Testing Techniques, Tools, and Challenges",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillKeysEnum.Testing, SkillKeysEnum.ProblemSolving],
  },
  [BlogKeysEnum.SQLNOSQL]: {
    name: "Exploring Databases: A Comparative Study of Relational and Non-Relational Models",
    subtitle:
      "An In-depth Analysis of Database Systems and their Role in Software Engineering and Web Development",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillKeysEnum.DatabaseManagementSystems,
      SkillKeysEnum.Databases,
      SkillKeysEnum.RelationalDatabases,
      SkillKeysEnum.NonRelationalDatabases,
      SkillKeysEnum.Normalisation,
    ],
  },
  [BlogKeysEnum.SyncAsync]: {
    name: "Sync vs Async: Deep Dive into Programming Models",
    subtitle:
      "Understanding and Optimizing Synchronous and Asynchronous Programming",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillKeysEnum.WebDevelopment],
  },
};

/**
 * List of keys for the blogs that can be used to uniquely identify the blogs.
 */
export const blogKeys: BlogKeysEnum[] = Object.keys(blogsMap) as BlogKeysEnum[];

/**
 * Hashmap of blogs with keys as {@link BlogKeysEnum} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const blogDatabase: Database<BlogInterface> =
  addNestedSkillsMaterialList<BlogInterface>(
    blogsMap,
    skillDatabase,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.General,
    SkillTypesEnum.Hard
  );

export default blogDatabase;
