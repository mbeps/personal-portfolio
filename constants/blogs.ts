import { Blog } from "@/types/blog";

import { javascript, typescript } from "./languages";
import {
  webDevelopment,
  devOps,
  continuousIntegration,
  continuousDelivery,
  containerization,
  cloudComputing,
  infrastructureAsCode,
  machineLearning,
  algorithms,
  databaseManagementSystems,
  databases,
  sql,
  apis,
  userAuthentication,
  testing,
  noSql,
  sdks,
  automation,
  dataScience,
  artificialIntelligence,
} from "./skills/generalSkills";
import {
  docker,
  kubernetes,
  rest,
  graphQL,
  firebase,
  supabase,
  pocketbase,
  git,
  html,
  css,
  react,
  nextjs,
  angular,
  svelte,
  vue,
  prisma,
  mongoose,
  sqlalchemy,
  hibernate,
  normalisation,
} from "./skills/hardSkills";
import {
  criticalThinking,
  problemSolving,
  projectManagement,
} from "./skills/softSkills";

const blogs: Blog[] = [
  {
    slug: "backend",
    title: "Exploring Backends: Custom vs Managed Solutions",
    subtitle:
      "An In-depth Analysis of Backend Development Approaches, Tools, and Security Considerations",
    technicalSkills: [
      webDevelopment,
      cloudComputing,
      firebase,
      supabase,
      pocketbase,
    ],
    softSkills: [],
    category: "Web Development",
  },
  {
    slug: "cicd-foundations",
    title:
      "Embracing the Future of Software Development: A Comprehensive Guide to CI/CD",
    subtitle:
      "Mastering Continuous Integration and Continuous Delivery for Enhanced Software Delivery",
    category: "DevOps",
    technicalSkills: [
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
    ],
    softSkills: [problemSolving, projectManagement, criticalThinking],
  },
  {
    slug: "devops-foundations",
    title:
      "Embracing DevOps: A Guide to Principles, Practices, and Success Stories",
    subtitle:
      "Understanding the Impact of DevOps in Modern Software Development",
    category: "DevOps",
    technicalSkills: [
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
    ],
    softSkills: [problemSolving, projectManagement, criticalThinking],
  },
  {
    title: "Docker: Unleashing the Power of Containers",
    subtitle:
      "A Comprehensive Guide to Understanding Docker and Containerization Technology",
    category: "DevOps",
    technicalSkills: [devOps, docker, containerization],
    softSkills: [problemSolving],
    slug: "docker-and-containers",
  },
  {
    title:
      "Front-End Development and the Essential Role of Libraries and Frameworks",
    slug: "front-end",
    subtitle:
      "A comprehensive introduction to standard front-end web development using libraries and frameworks",
    category: "Web Development",
    technicalSkills: [
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
    softSkills: [],
  },
  {
    slug: "javascript-vs-typescript",
    title: "JavaScript vs TypeScript: A Detailed Comparison",
    subtitle:
      "Exploring the Advantages and Key Differences between JavaScript and TypeScript",
    category: "Software Engineering",
    technicalSkills: [javascript, typescript],
    softSkills: [],
  },
  {
    slug: "kubernetes",
    title: "Kubernetes Guide: Mastering Container Orchestration",
    subtitle: "An Overview of Components, Tools, and Best Practices",
    category: "DevOps",
    technicalSkills: [devOps, kubernetes, docker, containerization],
    softSkills: [],
  },
  {
    slug: "machine-learning-foundations",
    title: "Exploring the Depths of Machine Learning",
    subtitle:
      "A Comprehensive Guide to Machine Learning: Concepts, Challenges, and Real-World Impact",
    category: "Machine Learning",
    technicalSkills: [
      machineLearning,
      algorithms,
      dataScience,
      artificialIntelligence,
    ],
    softSkills: [problemSolving, criticalThinking],
  },
  {
    slug: "orm",
    title: "Understanding Object-Relational Mapping (ORM)",
    subtitle:
      "A Comprehensive Overview of ORM, Its Advantages, Disadvantages, and Role in Modern Web Application Development",
    category: "Databases",
    technicalSkills: [
      databaseManagementSystems,
      databases,
      sql,
      noSql,
      prisma,
      mongoose,
      sqlalchemy,
      hibernate,
    ],
    softSkills: [problemSolving],
  },
  {
    slug: "rest-graphql-api",
    title: "Comparing GraphQL and REST: A Detailed Overview",
    subtitle: "Choosing the Right API Design Approach",
    category: "Web Development",
    technicalSkills: [webDevelopment, apis, rest, graphQL],
    softSkills: [problemSolving],
  },
  {
    slug: "sdk-vs-api",
    title: "SDKs vs APIs: A Comparative Guide",
    subtitle: "Understanding Their Roles in Software Development",
    category: "Web Development",
    technicalSkills: [apis, sdks],
    softSkills: [],
  },
  {
    slug: "sessions-vs-tokens",
    title: "Comparing Session and Token: Navigating Authentication",
    subtitle: "A Detailed Comparison of Authentication Strategies",
    category: "Web Development",
    technicalSkills: [webDevelopment, userAuthentication],
    softSkills: [],
  },
  {
    slug: "software-testing",
    title: "Comprehensive Guide to Software Testing",
    subtitle:
      "Exploring Functional and Non-Functional Testing Techniques, Tools, and Challenges",
    category: "Software Engineering",
    technicalSkills: [testing],
    softSkills: [problemSolving],
  },
  {
    slug: "sql-vs-nosql-databases",
    title:
      "Exploring Databases: A Comparative Study of Relational and Non-Relational Models",
    subtitle:
      "An In-depth Analysis of Database Systems and their Role in Software Engineering and Web Development",
    category: "Databases",
    technicalSkills: [
      databaseManagementSystems,
      databases,
      sql,
      noSql,
      normalisation,
    ],
    softSkills: [],
  },
  {
    slug: "sync-vs-async",
    title: "Sync vs Async: Deep Dive into Programming Models",
    subtitle:
      "Understanding and Optimizing Synchronous and Asynchronous Programming",
    category: "Software Engineering",
    technicalSkills: [webDevelopment],
    softSkills: [],
  },
];

export default blogs;
