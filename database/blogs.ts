import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import BlogInterface from "@/interfaces/material/BlogInterface";
import {
  algorithms,
  apis,
  artificialIntelligence,
  automation,
  cloudComputing,
  containerization,
  continuousDelivery,
  continuousIntegration,
  dataScience,
  databaseManagementSystems,
  databases,
  devOps,
  infrastructureAsCode,
  machineLearning,
  noSql,
  sdks,
  sql,
  testing,
  userAuthentication,
  webDevelopment,
} from "./skills/generalSkills";
import { javascript, typescript } from "./skills/languages";
import {
  criticalThinking,
  problemSolving,
  projectManagement,
} from "./skills/softSkills";
import {
  graphQL,
  rest,
} from "./skills/technicalHardSkills/technicalHardSkillsAPIs";
import {
  firebase,
  pocketbase,
  supabase,
} from "./skills/technicalHardSkills/technicalHardSkillsBackendWebDev";
import { normalisation } from "./skills/technicalHardSkills/technicalHardSkillsDatabases";
import {
  docker,
  kubernetes,
} from "./skills/technicalHardSkills/technicalHardSkillsDevOps";
import {
  css,
  html,
  react,
  svelte,
  vue,
} from "./skills/technicalHardSkills/technicalHardSkillsFrontendWebDev";
import {
  angular,
  nextjs,
} from "./skills/technicalHardSkills/technicalHardSkillsFullStackWebDev";
import {
  hibernate,
  mongoose,
  prisma,
  sqlalchemy,
} from "./skills/technicalHardSkills/technicalHardSkillsORMs";
import { git } from "./skills/technicalHardSkills/technicalHardSkillsVCS";
import { SkillTypesEnum } from "@/enums/SkillTypesEnum";
import BlogCategoriesEnum from "@/enums/BlogCategoriesEnum";

const blogs: BlogInterface[] = addNestedSkillsMaterialList<BlogInterface>(
  [
    {
      slug: "backend",
      name: "Exploring Backends: Custom vs Managed Solutions",
      subtitle:
        "An In-depth Analysis of Backend Development Approaches, Tools, and Security Considerations",
      skills: [webDevelopment, cloudComputing, firebase, supabase, pocketbase],

      category: BlogCategoriesEnum.WebDevelopment,
    },
    {
      slug: "cicd-foundations",
      name: "Embracing the Future of Software Development: A Comprehensive Guide to CI/CD",
      subtitle:
        "Mastering Continuous Integration and Continuous Delivery for Enhanced Software Delivery",
      category: BlogCategoriesEnum.DevOps,
      skills: [
        devOps,
        continuousIntegration,
        continuousDelivery,
        continuousDelivery,
        docker,
        kubernetes,
        containerization,
        projectManagement,
        cloudComputing,
        infrastructureAsCode,
        problemSolving,
        projectManagement,
        criticalThinking,
      ],
    },
    {
      slug: "devops-foundations",
      name: "Embracing DevOps: A Guide to Principles, Practices, and Success Stories",
      subtitle:
        "Understanding the Impact of DevOps in Modern Software Development",
      category: BlogCategoriesEnum.DevOps,
      skills: [
        devOps,
        continuousIntegration,
        continuousDelivery,
        continuousDelivery,
        containerization,
        projectManagement,
        cloudComputing,
        infrastructureAsCode,
        automation,
        git,
        problemSolving,
        projectManagement,
        criticalThinking,
      ],
    },
    {
      name: "Docker: Unleashing the Power of Containers",
      subtitle:
        "A Comprehensive Guide to Understanding Docker and Containerization Technology",
      category: BlogCategoriesEnum.DevOps,
      skills: [devOps, docker, containerization, problemSolving],

      slug: "docker-and-containers",
    },
    {
      name: "Front-End Development and the Essential Role of Libraries and Frameworks",
      slug: "front-end",
      subtitle:
        "A comprehensive introduction to standard front-end web development using libraries and frameworks",
      category: BlogCategoriesEnum.WebDevelopment,
      skills: [
        webDevelopment,
        html,
        css,
        javascript,
        react,
        nextjs,
        angular,
        svelte,
        vue,
      ],
    },
    {
      slug: "javascript-vs-typescript",
      name: "JavaScript vs TypeScript: A Detailed Comparison",
      subtitle:
        "Exploring the Advantages and Key Differences between JavaScript and TypeScript",
      category: BlogCategoriesEnum.SoftwareEngineering,
      skills: [javascript, typescript],
    },
    {
      slug: "kubernetes",
      name: "Kubernetes Guide: Mastering Container Orchestration",
      subtitle: "An Overview of Components, Tools, and Best Practices",
      category: BlogCategoriesEnum.DevOps,
      skills: [devOps, kubernetes, docker, containerization],
    },
    {
      slug: "machine-learning-foundations",
      name: "Exploring the Depths of Machine Learning",
      subtitle:
        "A Comprehensive Guide to Machine Learning: Concepts, Challenges, and Real-World Impact",
      category: BlogCategoriesEnum.ArtificialIntelligence,
      skills: [
        machineLearning,
        algorithms,
        dataScience,
        artificialIntelligence,
        problemSolving,
        criticalThinking,
      ],
    },
    {
      slug: "orm",
      name: "Understanding Object-Relational Mapping (ORM)",
      subtitle:
        "A Comprehensive Overview of ORM, Its Advantages, Disadvantages, and Role in Modern Web Application Development",
      category: BlogCategoriesEnum.Databases,
      skills: [
        databaseManagementSystems,
        databases,
        sql,
        noSql,
        prisma,
        mongoose,
        sqlalchemy,
        hibernate,
        problemSolving,
      ],
    },
    {
      slug: "rest-graphql-api",
      name: "Comparing GraphQL and REST: A Detailed Overview",
      subtitle: "Choosing the Right API Design Approach",
      category: BlogCategoriesEnum.WebDevelopment,
      skills: [webDevelopment, apis, rest, graphQL, problemSolving],
    },
    {
      slug: "sdk-vs-api",
      name: "SDKs vs APIs: A Comparative Guide",
      subtitle: "Understanding Their Roles in Software Development",
      category: BlogCategoriesEnum.SoftwareEngineering,
      skills: [apis, sdks],
    },
    {
      slug: "sessions-vs-tokens",
      name: "Comparing Session and Token: Navigating Authentication",
      subtitle: "A Detailed Comparison of Authentication Strategies",
      category: BlogCategoriesEnum.WebDevelopment,
      skills: [webDevelopment, userAuthentication],
    },
    {
      slug: "software-testing",
      name: "Comprehensive Guide to Software Testing",
      subtitle:
        "Exploring Functional and Non-Functional Testing Techniques, Tools, and Challenges",
      category: BlogCategoriesEnum.SoftwareEngineering,
      skills: [testing, problemSolving],
    },
    {
      slug: "sql-vs-nosql-databases",
      name: "Exploring Databases: A Comparative Study of Relational and Non-Relational Models",
      subtitle:
        "An In-depth Analysis of Database Systems and their Role in Software Engineering and Web Development",
      category: BlogCategoriesEnum.Databases,
      skills: [databaseManagementSystems, databases, sql, noSql, normalisation],
    },
    {
      slug: "sync-vs-async",
      name: "Sync vs Async: Deep Dive into Programming Models",
      subtitle:
        "Understanding and Optimizing Synchronous and Asynchronous Programming",
      category: BlogCategoriesEnum.SoftwareEngineering,
      skills: [webDevelopment],
    },
  ],
  SkillTypesEnum.General,
  SkillTypesEnum.Hard
);

export default blogs;
