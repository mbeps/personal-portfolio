import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import BlogCategoriesEnum from "@/enums/BlogCategoriesEnum";
import BlogSlugEnum from "@/enums/MaterialSlugEnums/BlogSlugEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import BlogInterface from "@/interfaces/material/BlogInterface";

const blogsMap: { [key: string]: BlogInterface } = {
  [BlogSlugEnum.Backend]: {
    name: "Exploring Backends: Custom vs Managed Solutions",
    subtitle:
      "An In-depth Analysis of Backend Development Approaches, Tools, and Security Considerations",
    skills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.CloudComputing,
      SkillSlugEnum.Firebase,
      SkillSlugEnum.Supabase,
      SkillSlugEnum.PocketBase,
    ],
    category: BlogCategoriesEnum.WebDevelopment,
  },
  [BlogSlugEnum.CICD]: {
    name: "Embracing the Future of Software Development: A Comprehensive Guide to CI/CD",
    subtitle:
      "Mastering Continuous Integration and Continuous Delivery for Enhanced Software Delivery",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillSlugEnum.DevOps,
      SkillSlugEnum.ContinuousIntegration,
      SkillSlugEnum.ContinuousDelivery,
      SkillSlugEnum.ContinuousDeployment,
      SkillSlugEnum.Docker,
      SkillSlugEnum.Kubernetes,
      SkillSlugEnum.Containerisation,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CloudComputing,
      SkillSlugEnum.InfrastructureAsCode,
      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
    ],
  },
  [BlogSlugEnum.DevOps]: {
    name: "Embracing DevOps: A Guide to Principles, Practices, and Success Stories",
    subtitle:
      "Understanding the Impact of DevOps in Modern Software Development",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillSlugEnum.DevOps,
      SkillSlugEnum.IntegrationManagement,
      SkillSlugEnum.ContinuousDelivery,
      SkillSlugEnum.ContinuousDeployment,
      SkillSlugEnum.Containerisation,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CloudComputing,
      SkillSlugEnum.InfrastructureAsCode,
      SkillSlugEnum.Automation,
      SkillSlugEnum.Git,
      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
    ],
  },
  [BlogSlugEnum.Docker]: {
    name: "Docker: Unleashing the Power of Containers",
    subtitle:
      "A Comprehensive Guide to Understanding Docker and Containerization Technology",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillSlugEnum.DevOps,
      SkillSlugEnum.Docker,
      SkillSlugEnum.Containerisation,
      SkillSlugEnum.ProblemSolving,
    ],
  },
  [BlogSlugEnum.Frontend]: {
    name: "Front-End Development and the Essential Role of Libraries and Frameworks",
    subtitle:
      "A comprehensive introduction to standard front-end web development using libraries and frameworks",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.HTML,
      SkillSlugEnum.CSS,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.ReactJS,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.AngularJS,
      SkillSlugEnum.SvelteJS,
      SkillSlugEnum.VueJS,
    ],
  },
  [BlogSlugEnum.JavaScriptVsTypeScript]: {
    name: "JavaScript vs TypeScript: A Detailed Comparison",
    subtitle:
      "Exploring the Advantages and Key Differences between JavaScript and TypeScript",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillSlugEnum.JavaScript, SkillSlugEnum.TypeScript],
  },
  [BlogSlugEnum.Kubernetes]: {
    name: "Kubernetes Guide: Mastering Container Orchestration",
    subtitle: "An Overview of Components, Tools, and Best Practices",
    category: BlogCategoriesEnum.DevOps,
    skills: [
      SkillSlugEnum.DevOps,
      SkillSlugEnum.Kubernetes,
      SkillSlugEnum.Docker,
      SkillSlugEnum.Containerisation,
    ],
  },
  [BlogSlugEnum.MachineLearningFoundations]: {
    name: "Exploring the Depths of Machine Learning",
    subtitle:
      "A Comprehensive Guide to Machine Learning: Concepts, Challenges, and Real-World Impact",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillSlugEnum.MachineLearning,
      SkillSlugEnum.Algorithms,
      SkillSlugEnum.DataScience,
      SkillSlugEnum.ArtificialIntelligence,
      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.CriticalThinking,
    ],
  },
  [BlogSlugEnum.ORM]: {
    name: "Understanding Object-Relational Mapping (ORM)",
    subtitle:
      "A Comprehensive Overview of ORM, Its Advantages, Disadvantages, and Role in Modern Web Application Development",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.NonRelationalDatabases,
      SkillSlugEnum.ObjectRelationalMapping,
      SkillSlugEnum.Prisma,
      SkillSlugEnum.Drizzle,
      SkillSlugEnum.Mongoose,
      SkillSlugEnum.SQLAlchemy,
      SkillSlugEnum.Hibernate,
      SkillSlugEnum.Probability,
    ],
  },
  [BlogSlugEnum.RESTGraphQL]: {
    name: "Comparing GraphQL and REST: A Detailed Overview",
    subtitle: "Choosing the Right API Design Approach",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.APIs,
      SkillSlugEnum.REST,
      SkillSlugEnum.GraphQL,
      SkillSlugEnum.ProblemSolving,
    ],
  },
  [BlogSlugEnum.SDKvsAPI]: {
    name: "SDKs vs APIs: A Comparative Guide",
    subtitle: "Understanding Their Roles in Software Development",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillSlugEnum.APIs, SkillSlugEnum.SDKs],
  },
  [BlogSlugEnum.SessionsVsTokens]: {
    name: "Comparing Session and Token: Navigating Authentication",
    subtitle: "A Detailed Comparison of Authentication Strategies",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [SkillSlugEnum.WebDevelopment, SkillSlugEnum.UserAuthentication],
  },
  [BlogSlugEnum.SoftwareTesting]: {
    name: "Comprehensive Guide to Software Testing",
    subtitle:
      "Exploring Functional and Non-Functional Testing Techniques, Tools, and Challenges",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillSlugEnum.Testing, SkillSlugEnum.ProblemSolving],
  },
  [BlogSlugEnum.SQLNOSQL]: {
    name: "Exploring Databases: A Comparative Study of Relational and Non-Relational Models",
    subtitle:
      "An In-depth Analysis of Database Systems and their Role in Software Engineering and Web Development",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.Databases,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.NonRelationalDatabases,
      SkillSlugEnum.Normalisation,
    ],
  },
  [BlogSlugEnum.SyncAsync]: {
    name: "Sync vs Async: Deep Dive into Programming Models",
    subtitle:
      "Understanding and Optimizing Synchronous and Asynchronous Programming",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillSlugEnum.WebDevelopment],
  },
};

const blogDatabase: {
  [key: string]: BlogInterface;
} = addNestedSkillsMaterialList<BlogInterface>(
  blogsMap,
  SkillTypesEnum.General,
  SkillTypesEnum.Hard
);

export default blogDatabase;
