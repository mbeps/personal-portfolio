import { BlogMetadata } from "@/types/blog";
import {
  algorithms,
  apis,
  cloudComputing,
  containerization,
  continuousDelivery,
  continuousIntegration,
  databaseManagementSystems,
  databases,
  devOps,
  docker,
  graphQL,
  infrastructureAsCode,
  kubernetes,
  machineLearning,
  noSql,
  projectManagement,
  rest,
  sdks,
  sql,
  testing,
  userAuthentication,
  webDevelopment,
} from "./skills";
import { javascript, typescript } from "./languages";

const blogs: BlogMetadata[] = [
  {
    slug: "backend",
    title: "Exploring Backends: Custom vs Managed Solutions",
    subtitle:
      "An In-depth Analysis of Backend Development Approaches, Tools, and Security Considerations",
    skills: [webDevelopment],
    category: "Web Development",
  },
  {
    slug: "cicd-foundations",
    title:
      "Embracing the Future of Software Development: A Comprehensive Guide to CI/CD",
    subtitle:
      "Mastering Continuous Integration and Continuous Delivery for Enhanced Software Delivery",
    category: "DevOps",
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
    ],
  },
  {
    slug: "devops-foundations",
    title:
      "Embracing DevOps: A Guide to Principles, Practices, and Success Stories",
    subtitle:
      "Understanding the Impact of DevOps in Modern Software Development",
    category: "DevOps",
    skills: [
      devOps,
      continuousIntegration,
      continuousDelivery,
      continuousDelivery,
      containerization,
      projectManagement,
      cloudComputing,
      infrastructureAsCode,
    ],
  },
  {
    title: "Docker: Unleashing the Power of Containers",
    subtitle:
      "A Comprehensive Guide to Understanding Docker and Containerization Technology",
    category: "DevOps",
    skills: [devOps, docker, containerization],
    slug: "docker-and-containers",
  },
  {
    title:
      "Front-End Development and the Essential Role of Libraries and Frameworks",
    slug: "front-end",
    subtitle:
      "A comprehensive introduction to standard front-end web development using libraries and frameworks",
    category: "Web Development",
    skills: [webDevelopment],
  },
  {
    slug: "javascript-vs-typescript",
    title: "JavaScript vs TypeScript: A Detailed Comparison",
    subtitle:
      "Exploring the Advantages and Key Differences between JavaScript and TypeScript",
    category: "Software Engineering",
    skills: [javascript, typescript],
  },
  {
    slug: "kubernetes",
    title: "Kubernetes Guide: Mastering Container Orchestration",
    subtitle: "An Overview of Components, Tools, and Best Practices",
    category: "DevOps",
    skills: [devOps, kubernetes, containerization],
  },
  {
    slug: "machine-learning-foundations",
    title: "Exploring the Depths of Machine Learning",
    subtitle:
      "A Comprehensive Guide to Machine Learning: Concepts, Challenges, and Real-World Impact",
    category: "Machine Learning",
    skills: [machineLearning, algorithms],
  },
  {
    slug: "orm",
    title: "Understanding Object-Relational Mapping (ORM)",
    subtitle:
      "A Comprehensive Overview of ORM, Its Advantages, Disadvantages, and Role in Modern Web Application Development",
    category: "Databases",
    skills: [databaseManagementSystems, databases, sql],
  },
  {
    slug: "rest-graphql-api",
    title: "Comparing GraphQL and REST: A Detailed Overview",
    subtitle: "Choosing the Right API Design Approach",
    category: "Web Development",
    skills: [webDevelopment, apis, rest, graphQL],
  },
  {
    slug: "sdk-vs-api",
    title: "SDKs vs APIs: A Comparative Guide",
    subtitle: "Understanding Their Roles in Software Development",
    category: "Web Development",
    skills: [apis, sdks],
  },
  {
    slug: "sessions-vs-tokens",
    title: "Comparing Session and Token: Navigating Authentication",
    subtitle: "A Detailed Comparison of Authentication Strategies",
    category: "Web Development",
    skills: [webDevelopment, userAuthentication],
  },
  {
    slug: "software-testing",
    title: "Comprehensive Guide to Software Testing",
    subtitle:
      "Exploring Functional and Non-Functional Testing Techniques, Tools, and Challenges",
    category: "Software Engineering",
    skills: [testing],
  },
  {
    slug: "sql-vs-nosql-databases",
    title:
      "Exploring Databases: A Comparative Study of Relational and Non-Relational Models",
    subtitle:
      "An In-depth Analysis of Database Systems and their Role in Software Engineering and Web Development",
    category: "Databases",
    skills: [databaseManagementSystems, databases, sql, noSql],
  },
  {
    slug: "sync-vs-async",
    title: "Sync vs Async: Deep Dive into Programming Models",
    subtitle:
      "Understanding and Optimizing Synchronous and Asynchronous Programming",
    category: "Software Engineering",
    skills: [webDevelopment],
  },
];

export default blogs;