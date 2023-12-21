import Skill from "@/types/skills";
import {
  apis,
  artificialIntelligence,
  automation,
  boosting,
  cloudComputing,
  clusterisation,
  containerization,
  continuousDelivery,
  continuousDeployment,
  continuousIntegration,
  dataScience,
  dataVisualisation,
  databaseManagementSystems,
  databases,
  devOps,
  gameDevelopment,
  hyperparameters,
  indexing,
  infrastructureAsCode,
  machineLearning,
  mathematics,
  neuralNetworks,
  noSql,
  orm,
  sdks,
  sql,
  stateManagement,
  userAuthentication,
  userCentricDesign,
  versionControl,
  webDevelopment,
} from "./generalSkills";

export const firebase: Skill = {
  name: "Firebase",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "firebase",
  technicalGeneralSkills: [
    databaseManagementSystems,
    noSql,
    databases,
    indexing,
    cloudComputing,
    userAuthentication,
    sdks,
    webDevelopment,
  ],
};

export const supabase: Skill = {
  name: "Supabase",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "supabsase",
  technicalGeneralSkills: [
    databaseManagementSystems,
    noSql,
    databases,
    indexing,
    cloudComputing,
    userAuthentication,
    sdks,
    webDevelopment,
  ],
};

export const pocketbase: Skill = {
  name: "PocketBase",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "pocketbase",
  technicalGeneralSkills: [
    databaseManagementSystems,
    noSql,
    databases,
    indexing,
    cloudComputing,
    userAuthentication,
    sdks,
    webDevelopment,
  ],
};

export const auth0: Skill = {
  name: "Auth0",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "auth0",
  technicalGeneralSkills: [userAuthentication, sdks],
};

export const clerkAuth: Skill = {
  name: "Clerk Auth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "clerkAuth",
  technicalGeneralSkills: [userAuthentication, sdks],
};

export const stripe: Skill = {
  name: "Stripe",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "stripe",
  technicalGeneralSkills: [sdks],
};

export const tailwindCSS: Skill = {
  name: "Tailwind CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "tailwind-css",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const html: Skill = {
  name: "HTML",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "html",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const css: Skill = {
  name: "CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "css",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const gitHubActions: Skill = {
  name: "GitHub Actions",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "github-actions",
  technicalGeneralSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const gitlabCI: Skill = {
  name: "GitLab CI",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "gitlab-ci",
  technicalGeneralSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const jenkins: Skill = {
  name: "Jenkins",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "jenkins",
  technicalGeneralSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const teamCity: Skill = {
  name: "TeamCity",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "teamcity",
  technicalGeneralSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const docker: Skill = {
  name: "Docker",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "docker",
  technicalGeneralSkills: [containerization],
};

export const podman: Skill = {
  name: "Podman",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "podman",
  technicalGeneralSkills: [containerization],
};

export const kubernetes: Skill = {
  name: "Kubernetes",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "kubernetes",
  technicalGeneralSkills: [containerization, clusterisation],
};

export const rest: Skill = {
  name: "REST",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "rest-api",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const graphQL: Skill = {
  name: "GraphQL",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "graphql-api",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const tRPC: Skill = {
  name: "tRPC",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "trpc-api",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const normalisation: Skill = {
  name: "Normalisation",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "database-normalisation",
};

export const postgreSQL: Skill = {
  name: "PostgreSQL",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "postgresql",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    sql,
    normalisation,
    indexing,
  ],
};

export const mySQL: Skill = {
  name: "MySQL",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "mysql",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    sql,
    normalisation,
    indexing,
  ],
};

export const sqlite: Skill = {
  name: "SQLite",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "sqlite",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    sql,
    normalisation,
    indexing,
  ],
};

export const mongoDB: Skill = {
  name: "MongoDB",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "mongodb",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    noSql,
    indexing,
  ],
};

export const redis: Skill = {
  name: "Redis",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "redis",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    noSql,
    indexing,
  ],
};

export const socketIO: Skill = {
  name: "Socket.IO",
  category: "Web Sockets",
  skillType: "hard",
  slug: "socket-io",
  technicalGeneralSkills: [webDevelopment],
};

export const pusher: Skill = {
  name: "Pusher",
  category: "Web Sockets",
  skillType: "hard",
  slug: "pusher",
  technicalGeneralSkills: [webDevelopment],
};

export const openAI: Skill = {
  name: "OpenAI",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "open-ai",
  technicalGeneralSkills: [apis, artificialIntelligence],
};

export const replicateAI: Skill = {
  name: "Replicate AI",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "repliate-ai",
  technicalGeneralSkills: [apis, artificialIntelligence],
};

export const probability: Skill = {
  name: "Probability",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "probability",
  technicalGeneralSkills: [mathematics],
};

export const statistics: Skill = {
  name: "Statistics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "statistics",
  technicalGeneralSkills: [mathematics],
};

export const calculus: Skill = {
  name: "Calculus",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "calculus",
  technicalGeneralSkills: [mathematics],
};

export const trigonometry: Skill = {
  name: "Trigonometry",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "trigonomtry",
  technicalGeneralSkills: [mathematics],
};

export const algebra: Skill = {
  name: "Algebra",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "algebra",
  technicalGeneralSkills: [mathematics],
};

export const linearAlgebra: Skill = {
  name: "Linear Algebra",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "linear-algebra",
  technicalGeneralSkills: [mathematics],
};

export const discrete: Skill = {
  name: "Discrete",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "discrete-mathematics",
  technicalGeneralSkills: [mathematics],
};

export const geometry: Skill = {
  name: "Geometry",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "geometry",
  technicalGeneralSkills: [mathematics],
};

export const logics: Skill = {
  name: "Logics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "logics",
  technicalGeneralSkills: [mathematics],
};

export const vectors: Skill = {
  name: "Vectors",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "vectors",
  technicalGeneralSkills: [mathematics],
};

export const mechanics: Skill = {
  name: "Mechanics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "mechanics",
  technicalGeneralSkills: [mathematics],
};

export const git: Skill = {
  name: "Git",
  category: "Version Control",
  skillType: "hard",
  slug: "git",
  technicalGeneralSkills: [versionControl],
};

export const gitHub: Skill = {
  name: "GitHub",
  category: "Version Control",
  skillType: "hard",
  slug: "github",
  technicalGeneralSkills: [versionControl],
};

export const gitLab: Skill = {
  name: "GitLab",
  category: "Version Control",
  skillType: "hard",
  slug: "gitlab",
  technicalGeneralSkills: [versionControl],
};

export const bitBucket: Skill = {
  name: "BitBucket",
  category: "Version Control",
  skillType: "hard",
  slug: "bit-bucket",
  technicalGeneralSkills: [versionControl],
};

export const vagrant: Skill = {
  name: "Vagrant",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "valgrant",
  technicalGeneralSkills: [infrastructureAsCode, devOps],
};

export const nextjs: Skill = {
  name: "Next.js",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "next-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const svelte: Skill = {
  name: "Svelte",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "svelte",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const vue: Skill = {
  name: "Vue",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "vue-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const angular: Skill = {
  name: "Angular",
  category: "Full-Stack Web Development",
  skillType: "hard",
  slug: "angular",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const nuxtjs: Skill = {
  name: "Nuxt.js",
  category: "Full-Stack Web Development",
  skillType: "hard",
  slug: "nuxt-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const svelteKit: Skill = {
  name: "SvelteKit",
  category: "Full-Stack Web Development",
  skillType: "hard",
  slug: "svelte-kit",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const nextauth: Skill = {
  name: "NextAuth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "next-auth",
  technicalGeneralSkills: [userAuthentication, webDevelopment],
};

export const nodejs: Skill = {
  name: "Node.js",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "node-js",
  technicalGeneralSkills: [webDevelopment],
};

export const express: Skill = {
  name: "Express",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "express-js",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const react: Skill = {
  name: "React",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "react-js",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const jest: Skill = {
  name: "Jest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "jest",
};

export const vitest: Skill = {
  name: "Vitest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "vitest",
};

export const prisma: Skill = {
  name: "Prisma",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "prisma-orm",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
  ],
};

export const drizzle: Skill = {
  name: "Drizzle",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "drizzle-orm",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
  ],
};

export const mongoose: Skill = {
  name: "Mongoose",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "mongoose-orm",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    noSql,
    indexing,
    orm,
  ],
};

export const npm: Skill = {
  name: "NPM",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "npm",
};

export const yarn: Skill = {
  name: "Yarn",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "yarn",
};

export const pnpm: Skill = {
  name: "PNPM",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "pnpm",
};

export const flask: Skill = {
  name: "Flask",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "flask",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const django: Skill = {
  name: "Django",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "django",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const scikitLearn: Skill = {
  name: "Scikit Learn",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "scikit-learn",
  technicalGeneralSkills: [
    machineLearning,
    dataScience,
    artificialIntelligence,
    hyperparameters,
    boosting,
    neuralNetworks,
  ],
};

export const pandas: Skill = {
  name: "Pandas",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "pandas",
  technicalGeneralSkills: [dataScience, dataVisualisation],
};

export const numpy: Skill = {
  name: "NumPy",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "numpy",
  technicalGeneralSkills: [dataScience, mathematics],
};

export const matplotlib: Skill = {
  name: "Matplotlib",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "matplotlib",
  technicalGeneralSkills: [dataScience, dataVisualisation],
};

export const seaborn: Skill = {
  name: "Seaborn",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "seaborn",
  technicalGeneralSkills: [dataScience, dataVisualisation],
};

export const keras: Skill = {
  name: "Keras",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "keras",
  technicalGeneralSkills: [
    machineLearning,
    dataScience,
    artificialIntelligence,
    neuralNetworks,
  ],
};

export const jupyterNotebooks: Skill = {
  name: "Jupyter Notebooks",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "juptyer-notebooks",
  technicalGeneralSkills: [dataScience],
};

export const pytest: Skill = {
  name: "PyTest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "pytest",
};

export const unittest: Skill = {
  name: "UnitTest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "unittest",
};

export const sqlalchemy: Skill = {
  name: "SQLAlchemy",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "sqlalchemy",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
  ],
};

export const poetry: Skill = {
  name: "Poetry",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "poetry-python",
};

export const pybuilder: Skill = {
  name: "PyBuilder",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "pybuilder",
};

export const maven: Skill = {
  name: "Maven",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "maven",
};

export const gradle: Skill = {
  name: "Gradle",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "gradle",
};

export const junit: Skill = {
  name: "JUnit",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "junit",
};

export const spring: Skill = {
  name: "Spring",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "spring",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const springBoot: Skill = {
  name: "Spring Boot",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "springboot",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const hibernate: Skill = {
  name: "Hibernate",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "hibernate-orm",
  technicalGeneralSkills: [
    databaseManagementSystems,
    databases,
    sql,
    indexing,
    orm,
  ],
};

export const chakraUI: Skill = {
  name: "Chakra UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "chakra-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const recoil: Skill = {
  name: "Recoil",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "recoil",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};

export const zustand: Skill = {
  name: "Zustand",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "zustand",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};

export const jotai: Skill = {
  name: "Jotai",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "jotai",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};

export const redux: Skill = {
  name: "Redux",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "redux",
  technicalGeneralSkills: [webDevelopment, stateManagement],
};

export const cloudinary: Skill = {
  name: "Cloudinary",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "cloudinary",
  technicalGeneralSkills: [webDevelopment],
};

export const headlessUI: Skill = {
  name: "Headless UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "headless-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const shadcnUI: Skill = {
  name: "Shadcn UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "shadow-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const radixUI: Skill = {
  name: "Radix UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "radix-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const axios: Skill = {
  name: "Axios",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "axios",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const reactQuery: Skill = {
  name: "React Query",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "react-query",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const zod: Skill = {
  name: "Zod",
  category: "Core Computer Science",
  skillType: "hard",
  slug: "zod",
};

export const nextUI: Skill = {
  name: "Next UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "next-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const nxjs: Skill = {
  name: "Nx.js",
  category: "Project Managers",
  skillType: "hard",
  slug: "nx-js",
};

export const storybooks: Skill = {
  name: "Storybooks",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "storybooks",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const cypress: Skill = {
  name: "Cypress",
  category: "Testing",
  skillType: "hard",
  slug: "cypress",
};

export const reactTestingLibrary: Skill = {
  name: "React Testing Library",
  category: "Testing",
  skillType: "hard",
  slug: "react-testing-library",
};

export const jwt: Skill = {
  name: "JWT",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "jtw",
  technicalGeneralSkills: [userAuthentication],
};

export const simpleGui: Skill = {
  name: "Simple GUI",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "simple-gui",
  technicalGeneralSkills: [userCentricDesign],
};

export const gameMakerStudio: Skill = {
  name: "GameMaker Studio 2",
  category: "Game Development",
  skillType: "hard",
  slug: "gamemaker-studio",
  technicalGeneralSkills: [gameDevelopment],
};

export const tox: Skill = {
  name: "Tox",
  category: "Project Managers",
  skillType: "hard",
  slug: "tox",
};

export const travisCI: Skill = {
  name: "Travis CI",
  category: "DevOps",
  skillType: "hard",
  slug: "travis-ci",
  technicalGeneralSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const k3s: Skill = {
  name: "K3s",
  category: "DevOps",
  skillType: "hard",
  slug: "aws-ks3",
  technicalGeneralSkills: [containerization, clusterisation, cloudComputing],
};

export const awsEC2: Skill = {
  name: "Elastic Compute Cloud (EC2)",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-ec2",
  technicalGeneralSkills: [cloudComputing],
};

export const awsS3: Skill = {
  name: "Simple Storage Service (S3)",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-s3",
  technicalGeneralSkills: [cloudComputing],
};

export const awsVPC: Skill = {
  name: "Virtual Private Cloud (VPC)",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-vpc",
  technicalGeneralSkills: [cloudComputing],
};

export const awsLambda: Skill = {
  name: "Lambda",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-lambda",
  technicalGeneralSkills: [cloudComputing],
};

export const awsCloudFormation: Skill = {
  name: "CloudFormation",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-cloudformation",
  technicalGeneralSkills: [cloudComputing],
};

export const awsCloudFront: Skill = {
  name: "CloudFront",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-cloudfront",
  technicalGeneralSkills: [cloudComputing],
};

export const awsElasticBeanstalk: Skill = {
  name: "Elastic Beanstalk",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-elastic-beanstalk",
  technicalGeneralSkills: [cloudComputing],
};

export const azureAppService: Skill = {
  name: "Azure App Service",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-app-service",
  technicalGeneralSkills: [cloudComputing],
};

export const azureBlobStorage: Skill = {
  name: "Azure Blob Storage",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-blob-storage",
  technicalGeneralSkills: [cloudComputing],
};

export const azureDurableFunctions: Skill = {
  name: "Durable Functions",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-durable-functions",
  technicalGeneralSkills: [cloudComputing],
};

export const azureMonitor: Skill = {
  name: "Azure Monitor",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-monitor",
  technicalGeneralSkills: [cloudComputing],
};

export const azureFunctions: Skill = {
  name: "Azure Functions",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-functions",
  technicalGeneralSkills: [cloudComputing],
};

export const azureResourceManager: Skill = {
  name: "Azure Resource Manager",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-resource-manager",
  technicalGeneralSkills: [cloudComputing],
};

export const azureContainers: Skill = {
  name: "Containers",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-containers",
  technicalGeneralSkills: [cloudComputing],
};

export const azureContainerRegistry: Skill = {
  name: "Azure Container Registry",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-container-registry",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpAppEngine: Skill = {
  name: "App Engine",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-app-engine",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpCloudSQL: Skill = {
  name: "Cloud SQL",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-cloud-sql",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpCloudStorage: Skill = {
  name: "Cloud Storage",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-cloud-storage",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpCloudTasks: Skill = {
  name: "Cloud Tasks",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-cloud-tasks",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpCloudScheduler: Skill = {
  name: "Cloud Scheduler",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-cloud-scheduler",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpCloudLogging: Skill = {
  name: "Cloud Logging",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-cloud-logging",
  technicalGeneralSkills: [cloudComputing],
};

export const aws: Skill = {
  name: "Amazon Web Services",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws",
  technicalGeneralSkills: [
    k3s,
    awsEC2,
    awsS3,
    awsVPC,
    awsLambda,
    awsCloudFormation,
    awsCloudFront,
    awsElasticBeanstalk,
    cloudComputing,
  ],
};

export const gcp: Skill = {
  name: "Google Cloud Platform",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp",
  technicalGeneralSkills: [
    gcpAppEngine,
    gcpCloudSQL,
    gcpCloudStorage,
    gcpCloudTasks,
    gcpCloudScheduler,
    gcpCloudLogging,

    cloudComputing,
  ],
};

export const azure: Skill = {
  name: "Microsoft Azure",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure",
  technicalGeneralSkills: [
    azureAppService,
    azureBlobStorage,
    azureDurableFunctions,
    azureMonitor,
    azureFunctions,
    azureResourceManager,
    azureContainers,
    azureContainerRegistry,
    cloudComputing,
  ],
};

export const gunicorn: Skill = {
  name: "Gunicorn",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "gunicon",
  technicalGeneralSkills: [webDevelopment],
};

export const jinja: Skill = {
  name: "Jinja",
  category: "Back-End Web Development",
  skillType: "hard",
  slug: "jinja",
  technicalGeneralSkills: [webDevelopment],
};

export const bootstrap: Skill = {
  name: "Bootstrap",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "bootstrap",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const materialUI: Skill = {
  name: "Material UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "material-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const semanticUI: Skill = {
  name: "Semantic UI",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "semantic-ui",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const antDesign: Skill = {
  name: "Ant Design",
  category: "Front-End Web Development",
  skillType: "hard",
  slug: "ant-design",
  technicalGeneralSkills: [webDevelopment, userCentricDesign],
};

export const apollo: Skill = {
  name: "Apollo",
  category: "APIs",
  skillType: "hard",
  slug: "apollo",
  technicalGeneralSkills: [webDevelopment, apis],
};

export const ansible: Skill = {
  name: "Ansible",
  category: "DevOps",
  skillType: "hard",
  slug: "ansible",
  technicalGeneralSkills: [infrastructureAsCode, devOps, automation],
};

const hardSkills = [
  firebase,
  supabase,
  pocketbase,
  auth0,
  clerkAuth,
  stripe,
  tailwindCSS,
  html,
  css,
  gitHubActions,
  jenkins,
  teamCity,
  docker,
  podman,
  kubernetes,
  rest,
  graphQL,
  tRPC,
  postgreSQL,
  mySQL,
  sqlite,
  normalisation,
  mongoDB,
  redis,
  socketIO,
  pusher,
  openAI,
  replicateAI,
  probability,
  statistics,
  calculus,
  trigonometry,
  algebra,
  linearAlgebra,
  discrete,
  geometry,
  logics,
  vectors,
  mechanics,
  git,
  gitHub,
  gitLab,
  bitBucket,
  vagrant,
  nextjs,
  nextauth,
  nuxtjs,
  angular,
  vue,
  svelte,
  svelteKit,
  nodejs,
  express,
  react,
  jest,
  vitest,
  prisma,
  drizzle,
  mongoose,
  npm,
  yarn,
  pnpm,
  flask,
  django,
  scikitLearn,
  pandas,
  numpy,
  matplotlib,
  seaborn,
  keras,
  jupyterNotebooks,
  pytest,
  unittest,
  sqlalchemy,
  poetry,
  pybuilder,
  maven,
  gradle,
  junit,
  spring,
  springBoot,
  hibernate,
  chakraUI,
  recoil,
  zustand,
  jotai,
  redux,
  cloudinary,
  headlessUI,
  shadcnUI,
  radixUI,
  axios,
  reactQuery,
  zod,
  nextUI,
  nxjs,
  storybooks,
  cypress,
  reactTestingLibrary,
  jwt,
  simpleGui,
  gameMakerStudio,
  tox,
  travisCI,
  k3s,
  aws,
  gcp,
  azure,
  gunicorn,
  jinja,
  bootstrap,
  materialUI,
  semanticUI,
  antDesign,
  apollo,
  awsEC2,
  awsS3,
  awsVPC,
  awsLambda,
  awsCloudFormation,
  awsCloudFront,
  awsElasticBeanstalk,
  azureAppService,
  azureBlobStorage,
  azureDurableFunctions,
  azureMonitor,
  azureFunctions,
  azureResourceManager,
  azureContainers,
  azureContainerRegistry,
  gcpAppEngine,
  gcpCloudSQL,
  gcpCloudStorage,
  gcpCloudTasks,
  gcpCloudScheduler,
  gcpCloudLogging,
  ansible,
  gitlabCI,
] as Skill[];

export default hardSkills;
