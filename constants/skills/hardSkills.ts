import { Skill } from "@/types/skills";
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
  skill: "Firebase",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "firebase",
  skills: [
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
  skill: "Supabase",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "supabsase",
  skills: [
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
  skill: "PocketBase",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "pocketbase",
  skills: [
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
  skill: "Auth0",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "auth0",
  skills: [userAuthentication, sdks],
};

export const clerkAuth: Skill = {
  skill: "Clerk Auth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "clerkAuth",
  skills: [userAuthentication, sdks],
};

export const stripe: Skill = {
  skill: "Stripe",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "stripe",
  skills: [sdks],
};

export const tailwindCSS: Skill = {
  skill: "Tailwind CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "tailwind-css",
  skills: [webDevelopment, userCentricDesign],
};

export const html: Skill = {
  skill: "HTML",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "html",
  skills: [webDevelopment, userCentricDesign],
};

export const css: Skill = {
  skill: "CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "css",
  skills: [webDevelopment, userCentricDesign],
};

export const gitHubActions: Skill = {
  skill: "GitHub Actions",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "github-actions",
  skills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const jenkins: Skill = {
  skill: "Jenkins",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "jenkins",
  skills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const teamCity: Skill = {
  skill: "TeamCity",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "teamcity",
  skills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const docker: Skill = {
  skill: "Docker",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "docker",
  skills: [containerization],
};

export const podman: Skill = {
  skill: "Podman",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "podman",
  skills: [containerization],
};

export const kubernetes: Skill = {
  skill: "Kubernetes",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "kubernetes",
  skills: [containerization, clusterisation],
};

export const rest: Skill = {
  skill: "REST",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "rest-api",
  skills: [webDevelopment, apis],
};

export const graphQL: Skill = {
  skill: "GraphQL",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "graphql-api",
  skills: [webDevelopment, apis],
};

export const tRPC: Skill = {
  skill: "tRPC",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "trpc-api",
  skills: [webDevelopment, apis],
};

export const normalisation: Skill = {
  skill: "Normalisation",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "database-normalisation",
};

export const postgreSQL: Skill = {
  skill: "PostgreSQL",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "postgresql",
  skills: [databaseManagementSystems, databases, sql, normalisation, indexing],
};

export const mySQL: Skill = {
  skill: "MySQL",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "mysql",
  skills: [databaseManagementSystems, databases, sql, normalisation, indexing],
};

export const sqlite: Skill = {
  skill: "SQLite",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "sqlite",
  skills: [databaseManagementSystems, databases, sql, normalisation, indexing],
};

export const mongoDB: Skill = {
  skill: "MongoDB",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "mongodb",
  skills: [databaseManagementSystems, databases, noSql, indexing],
};

export const redis: Skill = {
  skill: "Redis",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "redis",
  skills: [databaseManagementSystems, databases, noSql, indexing],
};

export const socketIO: Skill = {
  skill: "Socket.IO",
  category: "Web Sockets",
  isMainSkill: true,
  skillType: "hard",
  slug: "socket-io",
  skills: [webDevelopment],
};

export const pusher: Skill = {
  skill: "Pusher",
  category: "Web Sockets",
  isMainSkill: true,
  skillType: "hard",
  slug: "pusher",
  skills: [webDevelopment],
};

export const openAI: Skill = {
  skill: "OpenAI",
  category: "Artificial Intelligence",
  isMainSkill: true,
  skillType: "hard",
  slug: "open-ai",
  skills: [apis, artificialIntelligence],
};

export const replicateAI: Skill = {
  skill: "Replicate AI",
  category: "Artificial Intelligence",
  isMainSkill: true,
  skillType: "hard",
  slug: "repliate-ai",
  skills: [apis, artificialIntelligence],
};

export const probability: Skill = {
  skill: "Probability & Statistics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "probability",
  skills: [mathematics],
};

export const statistics: Skill = {
  skill: "Statistics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "statistics",
  skills: [mathematics],
};

export const calculus: Skill = {
  skill: "Calculus",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "calculus",
  skills: [mathematics],
};

export const trigonometry: Skill = {
  skill: "Trigonometry",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "trigonomtry",
  skills: [mathematics],
};

export const algebra: Skill = {
  skill: "Algebra",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "algebra",
  skills: [mathematics],
};

export const linearAlgebra: Skill = {
  skill: "Linear Algebra",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "linear-algebra",
  skills: [mathematics],
};

export const discrete: Skill = {
  skill: "Discrete",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "discrete-mathematics",
  skills: [mathematics],
};

export const geometry: Skill = {
  skill: "Geometry",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "geometry",
  skills: [mathematics],
};

export const logics: Skill = {
  skill: "Logics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "logics",
  skills: [mathematics],
};

export const vectors: Skill = {
  skill: "Vectors",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "vectors",
  skills: [mathematics],
};

export const mechanics: Skill = {
  skill: "Mechanics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "mechanics",
  skills: [mathematics],
};

export const git: Skill = {
  skill: "Git",
  category: "Version Control",
  isMainSkill: true,
  skillType: "hard",
  slug: "git",
  skills: [versionControl],
};

export const gitHub: Skill = {
  skill: "GitHub",
  category: "Version Control",
  isMainSkill: true,
  skillType: "hard",
  slug: "github",
  skills: [versionControl],
};

export const gitLab: Skill = {
  skill: "GitLab",
  category: "Version Control",
  isMainSkill: true,
  skillType: "hard",
  slug: "gitlab",
  skills: [versionControl],
};

export const bitBucket: Skill = {
  skill: "BitBucket",
  category: "Version Control",
  isMainSkill: true,
  skillType: "hard",
  slug: "bit-bucket",
  skills: [versionControl],
};

export const vagrant: Skill = {
  skill: "Vagrant",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "valgrant",
  skills: [infrastructureAsCode, devOps],
};

export const nextjs: Skill = {
  skill: "Next.js",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "next-js",
  skills: [webDevelopment, userCentricDesign],
};

export const svelte: Skill = {
  skill: "Svelte",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "svelte",
  skills: [webDevelopment, userCentricDesign],
};

export const vue: Skill = {
  skill: "Vue",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "vue-js",
  skills: [webDevelopment, userCentricDesign],
};

export const angular: Skill = {
  skill: "Angular",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "angular",
  skills: [webDevelopment, userCentricDesign],
};

export const nuxtjs: Skill = {
  skill: "Nuxt.js",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "nuxt-js",
  skills: [webDevelopment, userCentricDesign],
};

export const svelteKit: Skill = {
  skill: "SvelteKit",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "svelte-kit",
  skills: [webDevelopment, userCentricDesign],
};

export const nextauth: Skill = {
  skill: "NextAuth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "next-auth",
  skills: [userAuthentication, webDevelopment],
};

export const nodejs: Skill = {
  skill: "Node.js",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "node-js",
  skills: [webDevelopment],
};

export const express: Skill = {
  skill: "Express",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "express-js",
  skills: [webDevelopment, apis],
};

export const react: Skill = {
  skill: "React",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "react-js",
  skills: [webDevelopment, userCentricDesign],
};

export const jest: Skill = {
  skill: "Jest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "jest",
};

export const vitest: Skill = {
  skill: "Vitest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "vitest",
};

export const prisma: Skill = {
  skill: "Prisma",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "prisma-orm",
  skills: [databaseManagementSystems, databases, sql, indexing, orm],
};

export const drizzle: Skill = {
  skill: "Drizzle",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "drizzle-orm",
  skills: [databaseManagementSystems, databases, sql, indexing, orm],
};

export const mongoose: Skill = {
  skill: "Mongoose",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "mongoose-orm",
  skills: [databaseManagementSystems, databases, noSql, indexing, orm],
};

export const npm: Skill = {
  skill: "NPM",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "npm",
};

export const yarn: Skill = {
  skill: "Yarn",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "yarn",
};

export const pnpm: Skill = {
  skill: "PNPM",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "pnpm",
};

export const flask: Skill = {
  skill: "Flask",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "flask",
  skills: [webDevelopment, apis],
};

export const django: Skill = {
  skill: "Django",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "django",
  skills: [webDevelopment, apis],
};

export const scikitLearn: Skill = {
  skill: "Scikit Learn",
  category: "Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "scikit-learn",
  skills: [
    machineLearning,
    dataScience,
    artificialIntelligence,
    hyperparameters,
    boosting,
    neuralNetworks,
  ],
};

export const pandas: Skill = {
  skill: "Pandas",
  category: "Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "pandas",
  skills: [
    machineLearning,
    dataScience,
    artificialIntelligence,
    neuralNetworks,
    dataVisualisation,
  ],
};

export const numpy: Skill = {
  skill: "NumPy",
  category: "Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "numpy",
  skills: [
    machineLearning,
    dataScience,
    artificialIntelligence,
    neuralNetworks,
    mathematics,
  ],
};

export const matplotlib: Skill = {
  skill: "Matplotlib",
  category: "Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "matplotlib",
  skills: [
    machineLearning,
    dataScience,
    artificialIntelligence,
    dataScience,
    dataVisualisation,
  ],
};

export const seaborn: Skill = {
  skill: "Seaborn",
  category: "Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "seaborn",
  skills: [
    machineLearning,
    dataScience,
    artificialIntelligence,
    dataScience,
    dataVisualisation,
  ],
};

export const keras: Skill = {
  skill: "Keras",
  category: "Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "keras",
  skills: [
    machineLearning,
    dataScience,
    artificialIntelligence,
    neuralNetworks,
  ],
};

export const jupyterNotebooks: Skill = {
  skill: "Jupyter Notebooks",
  category: "Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "juptyer-notebooks",
  skills: [
    machineLearning,
    dataScience,
    artificialIntelligence,
    dataScience,
    dataVisualisation,
  ],
};

export const pytest: Skill = {
  skill: "PyTest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "pytest",
};

export const unittest: Skill = {
  skill: "UnitTest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "unittest",
};

export const sqlalchemy: Skill = {
  skill: "SQLAlchemy",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "sqlalchemy",
  skills: [databaseManagementSystems, databases, sql, indexing, orm],
};

export const poetry: Skill = {
  skill: "Poetry",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "poetry-python",
};

export const pybuilder: Skill = {
  skill: "PyBuilder",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "pybuilder",
};

export const maven: Skill = {
  skill: "Maven",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "maven",
};

export const gradle: Skill = {
  skill: "Gradle",
  category: "Project Managers",
  isMainSkill: true,
  skillType: "hard",
  slug: "gradle",
};

export const junit: Skill = {
  skill: "JUnit",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "junit",
};

export const spring: Skill = {
  skill: "Spring",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "spring",
  skills: [webDevelopment, apis],
};

export const springBoot: Skill = {
  skill: "Spring Boot",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "springboot",
  skills: [webDevelopment, apis],
};

export const hibernate: Skill = {
  skill: "Hibernate",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "hibernate-orm",
  skills: [databaseManagementSystems, databases, sql, indexing, orm],
};

export const chakraUI: Skill = {
  skill: "Chakra UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "chakra-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const recoil: Skill = {
  skill: "Recoil",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "recoil",
  skills: [webDevelopment, stateManagement],
};

export const zustand: Skill = {
  skill: "Zustand",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "zustand",
  skills: [webDevelopment, stateManagement],
};

export const jotai: Skill = {
  skill: "Jotai",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "jotai",
  skills: [webDevelopment, stateManagement],
};

export const redux: Skill = {
  skill: "Redux",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "redux",
  skills: [webDevelopment, stateManagement],
};

export const cloudinary: Skill = {
  skill: "Cloudinary",
  category: "Back-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "cloudinary",
  skills: [webDevelopment],
};

export const headlessUI: Skill = {
  skill: "Headless UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "headless-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const shadcnUI: Skill = {
  skill: "Shadcn UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "shadow-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const radixUI: Skill = {
  skill: "Radix UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "radix-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const axios: Skill = {
  skill: "Axios",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "axios",
  skills: [webDevelopment, apis],
};

export const reactQuery: Skill = {
  skill: "React Query",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "react-query",
  skills: [webDevelopment, apis],
};

export const zod: Skill = {
  skill: "Zod",
  category: "Core Computer Science",
  isMainSkill: false,
  skillType: "hard",
  slug: "zod",
};

export const nextUI: Skill = {
  skill: "Next UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "next-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const nxjs: Skill = {
  skill: "Nx.js",
  category: "Project Managers",
  isMainSkill: false,
  skillType: "hard",
  slug: "nx-js",
};

export const storybooks: Skill = {
  skill: "Storybooks",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "storybooks",
  skills: [webDevelopment, userCentricDesign],
};

export const cypress: Skill = {
  skill: "Cypress",
  category: "Testing",
  isMainSkill: false,
  skillType: "hard",
  slug: "cypress",
};

export const reactTestingLibrary: Skill = {
  skill: "React Testing Library",
  category: "Testing",
  isMainSkill: false,
  skillType: "hard",
  slug: "react-testing-library",
};

export const jwt: Skill = {
  skill: "JWT",
  category: "Back-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "jtw",
  skills: [userAuthentication],
};

export const simpleGui: Skill = {
  skill: "Simple GUI",
  category: "Back-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "simple-gui",
  skills: [userCentricDesign],
};

export const gameMakerStudio: Skill = {
  skill: "GameMaker Studio 2",
  category: "Game Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "gamemaker-studio",
  skills: [gameDevelopment],
};

export const tox: Skill = {
  skill: "Tox",
  category: "Project Managers",
  isMainSkill: false,
  skillType: "hard",
  slug: "tox",
};

export const travisCI: Skill = {
  skill: "Travis CI",
  category: "DevOps",
  isMainSkill: false,
  skillType: "hard",
  slug: "travis-ci",
  skills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const k3s: Skill = {
  skill: "K3s",
  category: "DevOps",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-ks3",
  skills: [containerization, clusterisation, cloudComputing],
};

export const aws: Skill = {
  skill: "Amazon Web Services",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws",
  skills: [cloudComputing],
};

export const gcp: Skill = {
  skill: "Google Cloud Platform",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp",
  skills: [cloudComputing],
};

export const azure: Skill = {
  skill: "Microsoft Azure",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure",
  skills: [cloudComputing],
};

export const gunicorn: Skill = {
  skill: "Gunicorn",
  category: "Back-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "gunicon",
  skills: [webDevelopment],
};

export const jinja: Skill = {
  skill: "Jinja",
  category: "Back-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "jinja",
  skills: [webDevelopment],
};

export const bootstrap: Skill = {
  skill: "Bootstrap",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "bootstrap",
  skills: [webDevelopment, userCentricDesign],
};

export const materialUI: Skill = {
  skill: "Material UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "material-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const semanticUI: Skill = {
  skill: "Semantic UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "semantic-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const antDesign: Skill = {
  skill: "Ant Design",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "ant-design",
  skills: [webDevelopment, userCentricDesign],
};

export const apollo: Skill = {
  skill: "Apollo",
  category: "APIs",
  isMainSkill: false,
  skillType: "hard",
  slug: "apollo",
  skills: [webDevelopment, apis],
};

export const awsEC2: Skill = {
  skill: "Elastic Compute Cloud (EC2)",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-ec2",
  skills: [cloudComputing],
};

export const awsS3: Skill = {
  skill: "Simple Storage Service (S3)",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-s3",
  skills: [cloudComputing],
};

export const awsVPC: Skill = {
  skill: "Virtual Private Cloud (VPC)",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-vpc",
  skills: [cloudComputing],
};

export const awsLambda: Skill = {
  skill: "Lambda",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-lambda",
  skills: [cloudComputing],
};

export const awsCloudFormation: Skill = {
  skill: "CloudFormation",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-cloudformation",
  skills: [cloudComputing],
};

export const awsCloudFront: Skill = {
  skill: "CloudFront",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-cloudfront",
  skills: [cloudComputing],
};

export const awsElasticBeanstalk: Skill = {
  skill: "Elastic Beanstalk",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-elastic-beanstalk",
  skills: [cloudComputing],
};

export const azureAppService: Skill = {
  skill: "Azure App Service",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-app-service",
  skills: [cloudComputing],
};

export const azureBlobStorage: Skill = {
  skill: "Azure Blob Storage",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-blob-storage",
  skills: [cloudComputing],
};

export const azureDurableFunctions: Skill = {
  skill: "Durable Functions",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-durable-functions",
  skills: [cloudComputing],
};

export const azureMonitor: Skill = {
  skill: "Azure Monitor",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-monitor",
  skills: [cloudComputing],
};

export const azureFunctions: Skill = {
  skill: "Azure Functions",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-functions",
  skills: [cloudComputing],
};

export const azureResourceManager: Skill = {
  skill: "Azure Resource Manager",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-resource-manager",
  skills: [cloudComputing],
};

export const azureContainers: Skill = {
  skill: "Containers",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-containers",
  skills: [cloudComputing],
};

export const azureContainerRegistry: Skill = {
  skill: "Azure Container Registry",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-container-registry",
  skills: [cloudComputing],
};

export const gcpAppEngine: Skill = {
  skill: "App Engine",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-app-engine",
  skills: [cloudComputing],
};

export const gcpCloudSQL: Skill = {
  skill: "Cloud SQL",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-cloud-sql",
  skills: [cloudComputing],
};

export const gcpCloudStorage: Skill = {
  skill: "Cloud Storage",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-cloud-storage",
  skills: [cloudComputing],
};

export const gcpCloudTasks: Skill = {
  skill: "Cloud Tasks",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-cloud-tasks",
  skills: [cloudComputing],
};

export const gcpCloudScheduler: Skill = {
  skill: "Cloud Scheduler",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-cloud-scheduler",
  skills: [cloudComputing],
};

export const gcpCloudLogging: Skill = {
  skill: "Cloud Logging",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-cloud-logging",
  skills: [cloudComputing],
};

export const ansible: Skill = {
  skill: "Ansible",
  category: "DevOps",
  isMainSkill: false,
  skillType: "hard",
  slug: "ansible",
  skills: [infrastructureAsCode, devOps, automation],
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
] as Skill[];

export default hardSkills;
