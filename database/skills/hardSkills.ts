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
  name: "Supabase",
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
  name: "PocketBase",
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
  name: "Auth0",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "auth0",
  skills: [userAuthentication, sdks],
};

export const clerkAuth: Skill = {
  name: "Clerk Auth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "clerkAuth",
  skills: [userAuthentication, sdks],
};

export const stripe: Skill = {
  name: "Stripe",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "stripe",
  skills: [sdks],
};

export const tailwindCSS: Skill = {
  name: "Tailwind CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "tailwind-css",
  skills: [webDevelopment, userCentricDesign],
};

export const html: Skill = {
  name: "HTML",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "html",
  skills: [webDevelopment, userCentricDesign],
};

export const css: Skill = {
  name: "CSS",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "css",
  skills: [webDevelopment, userCentricDesign],
};

export const gitHubActions: Skill = {
  name: "GitHub Actions",
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

export const gitlabCI: Skill = {
  name: "GitLab CI",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "gitlab-ci",
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
  name: "Jenkins",
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
  name: "TeamCity",
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
  name: "Docker",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "docker",
  skills: [containerization],
};

export const podman: Skill = {
  name: "Podman",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "podman",
  skills: [containerization],
};

export const kubernetes: Skill = {
  name: "Kubernetes",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "kubernetes",
  skills: [containerization, clusterisation],
};

export const rest: Skill = {
  name: "REST",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "rest-api",
  skills: [webDevelopment, apis],
};

export const graphQL: Skill = {
  name: "GraphQL",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "graphql-api",
  skills: [webDevelopment, apis],
};

export const tRPC: Skill = {
  name: "tRPC",
  category: "APIs",
  isMainSkill: true,
  skillType: "hard",
  slug: "trpc-api",
  skills: [webDevelopment, apis],
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
  skills: [databaseManagementSystems, databases, sql, normalisation, indexing],
};

export const mySQL: Skill = {
  name: "MySQL",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "mysql",
  skills: [databaseManagementSystems, databases, sql, normalisation, indexing],
};

export const sqlite: Skill = {
  name: "SQLite",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "sqlite",
  skills: [databaseManagementSystems, databases, sql, normalisation, indexing],
};

export const mongoDB: Skill = {
  name: "MongoDB",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "mongodb",
  skills: [databaseManagementSystems, databases, noSql, indexing],
};

export const redis: Skill = {
  name: "Redis",
  category: "Databases",
  isMainSkill: true,
  skillType: "hard",
  slug: "redis",
  skills: [databaseManagementSystems, databases, noSql, indexing],
};

export const socketIO: Skill = {
  name: "Socket.IO",
  category: "Web Sockets",
  isMainSkill: true,
  skillType: "hard",
  slug: "socket-io",
  skills: [webDevelopment],
};

export const pusher: Skill = {
  name: "Pusher",
  category: "Web Sockets",
  isMainSkill: true,
  skillType: "hard",
  slug: "pusher",
  skills: [webDevelopment],
};

export const openAI: Skill = {
  name: "OpenAI",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "open-ai",
  skills: [apis, artificialIntelligence],
};

export const replicateAI: Skill = {
  name: "Replicate AI",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "repliate-ai",
  skills: [apis, artificialIntelligence],
};

export const probability: Skill = {
  name: "Probability & Statistics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "probability",
  skills: [mathematics],
};

export const statistics: Skill = {
  name: "Statistics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "statistics",
  skills: [mathematics],
};

export const calculus: Skill = {
  name: "Calculus",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "calculus",
  skills: [mathematics],
};

export const trigonometry: Skill = {
  name: "Trigonometry",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "trigonomtry",
  skills: [mathematics],
};

export const algebra: Skill = {
  name: "Algebra",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "algebra",
  skills: [mathematics],
};

export const linearAlgebra: Skill = {
  name: "Linear Algebra",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "linear-algebra",
  skills: [mathematics],
};

export const discrete: Skill = {
  name: "Discrete",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "discrete-mathematics",
  skills: [mathematics],
};

export const geometry: Skill = {
  name: "Geometry",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "geometry",
  skills: [mathematics],
};

export const logics: Skill = {
  name: "Logics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "logics",
  skills: [mathematics],
};

export const vectors: Skill = {
  name: "Vectors",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "vectors",
  skills: [mathematics],
};

export const mechanics: Skill = {
  name: "Mechanics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "mechanics",
  skills: [mathematics],
};

export const git: Skill = {
  name: "Git",
  category: "Version Control",
  isMainSkill: true,
  skillType: "hard",
  slug: "git",
  skills: [versionControl],
};

export const gitHub: Skill = {
  name: "GitHub",
  category: "Version Control",
  isMainSkill: true,
  skillType: "hard",
  slug: "github",
  skills: [versionControl],
};

export const gitLab: Skill = {
  name: "GitLab",
  category: "Version Control",
  isMainSkill: true,
  skillType: "hard",
  slug: "gitlab",
  skills: [versionControl],
};

export const bitBucket: Skill = {
  name: "BitBucket",
  category: "Version Control",
  isMainSkill: true,
  skillType: "hard",
  slug: "bit-bucket",
  skills: [versionControl],
};

export const vagrant: Skill = {
  name: "Vagrant",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "valgrant",
  skills: [infrastructureAsCode, devOps],
};

export const nextjs: Skill = {
  name: "Next.js",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "next-js",
  skills: [webDevelopment, userCentricDesign],
};

export const svelte: Skill = {
  name: "Svelte",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "svelte",
  skills: [webDevelopment, userCentricDesign],
};

export const vue: Skill = {
  name: "Vue",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "vue-js",
  skills: [webDevelopment, userCentricDesign],
};

export const angular: Skill = {
  name: "Angular",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "angular",
  skills: [webDevelopment, userCentricDesign],
};

export const nuxtjs: Skill = {
  name: "Nuxt.js",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "nuxt-js",
  skills: [webDevelopment, userCentricDesign],
};

export const svelteKit: Skill = {
  name: "SvelteKit",
  category: "Full-Stack Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "svelte-kit",
  skills: [webDevelopment, userCentricDesign],
};

export const nextauth: Skill = {
  name: "NextAuth",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "next-auth",
  skills: [userAuthentication, webDevelopment],
};

export const nodejs: Skill = {
  name: "Node.js",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "node-js",
  skills: [webDevelopment],
};

export const express: Skill = {
  name: "Express",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "express-js",
  skills: [webDevelopment, apis],
};

export const react: Skill = {
  name: "React",
  category: "Front-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "react-js",
  skills: [webDevelopment, userCentricDesign],
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
  skills: [databaseManagementSystems, databases, sql, indexing, orm],
};

export const drizzle: Skill = {
  name: "Drizzle",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "drizzle-orm",
  skills: [databaseManagementSystems, databases, sql, indexing, orm],
};

export const mongoose: Skill = {
  name: "Mongoose",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "mongoose-orm",
  skills: [databaseManagementSystems, databases, noSql, indexing, orm],
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
  skills: [webDevelopment, apis],
};

export const django: Skill = {
  name: "Django",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "django",
  skills: [webDevelopment, apis],
};

export const scikitLearn: Skill = {
  name: "Scikit Learn",
  category: "Artificial Intelligence & Machine Learning",
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
  name: "Pandas",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "pandas",
  skills: [dataScience, dataVisualisation],
};

export const numpy: Skill = {
  name: "NumPy",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "numpy",
  skills: [dataScience, mathematics],
};

export const matplotlib: Skill = {
  name: "Matplotlib",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "matplotlib",
  skills: [dataScience, dataVisualisation],
};

export const seaborn: Skill = {
  name: "Seaborn",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "seaborn",
  skills: [dataScience, dataVisualisation],
};

export const keras: Skill = {
  name: "Keras",
  category: "Artificial Intelligence & Machine Learning",
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
  name: "Jupyter Notebooks",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "juptyer-notebooks",
  skills: [dataScience],
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
  skills: [databaseManagementSystems, databases, sql, indexing, orm],
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
  skills: [webDevelopment, apis],
};

export const springBoot: Skill = {
  name: "Spring Boot",
  category: "Back-End Web Development",
  isMainSkill: true,
  skillType: "hard",
  slug: "springboot",
  skills: [webDevelopment, apis],
};

export const hibernate: Skill = {
  name: "Hibernate",
  category: "Object Relational Mappers",
  isMainSkill: true,
  skillType: "hard",
  slug: "hibernate-orm",
  skills: [databaseManagementSystems, databases, sql, indexing, orm],
};

export const chakraUI: Skill = {
  name: "Chakra UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "chakra-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const recoil: Skill = {
  name: "Recoil",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "recoil",
  skills: [webDevelopment, stateManagement],
};

export const zustand: Skill = {
  name: "Zustand",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "zustand",
  skills: [webDevelopment, stateManagement],
};

export const jotai: Skill = {
  name: "Jotai",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "jotai",
  skills: [webDevelopment, stateManagement],
};

export const redux: Skill = {
  name: "Redux",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "redux",
  skills: [webDevelopment, stateManagement],
};

export const cloudinary: Skill = {
  name: "Cloudinary",
  category: "Back-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "cloudinary",
  skills: [webDevelopment],
};

export const headlessUI: Skill = {
  name: "Headless UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "headless-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const shadcnUI: Skill = {
  name: "Shadcn UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "shadow-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const radixUI: Skill = {
  name: "Radix UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "radix-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const axios: Skill = {
  name: "Axios",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "axios",
  skills: [webDevelopment, apis],
};

export const reactQuery: Skill = {
  name: "React Query",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "react-query",
  skills: [webDevelopment, apis],
};

export const zod: Skill = {
  name: "Zod",
  category: "Core Computer Science",
  isMainSkill: false,
  skillType: "hard",
  slug: "zod",
};

export const nextUI: Skill = {
  name: "Next UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "next-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const nxjs: Skill = {
  name: "Nx.js",
  category: "Project Managers",
  isMainSkill: false,
  skillType: "hard",
  slug: "nx-js",
};

export const storybooks: Skill = {
  name: "Storybooks",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "storybooks",
  skills: [webDevelopment, userCentricDesign],
};

export const cypress: Skill = {
  name: "Cypress",
  category: "Testing",
  isMainSkill: false,
  skillType: "hard",
  slug: "cypress",
};

export const reactTestingLibrary: Skill = {
  name: "React Testing Library",
  category: "Testing",
  isMainSkill: false,
  skillType: "hard",
  slug: "react-testing-library",
};

export const jwt: Skill = {
  name: "JWT",
  category: "Back-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "jtw",
  skills: [userAuthentication],
};

export const simpleGui: Skill = {
  name: "Simple GUI",
  category: "Back-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "simple-gui",
  skills: [userCentricDesign],
};

export const gameMakerStudio: Skill = {
  name: "GameMaker Studio 2",
  category: "Game Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "gamemaker-studio",
  skills: [gameDevelopment],
};

export const tox: Skill = {
  name: "Tox",
  category: "Project Managers",
  isMainSkill: false,
  skillType: "hard",
  slug: "tox",
};

export const travisCI: Skill = {
  name: "Travis CI",
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
  name: "K3s",
  category: "DevOps",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-ks3",
  skills: [containerization, clusterisation, cloudComputing],
};

export const aws: Skill = {
  name: "Amazon Web Services",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws",
  skills: [cloudComputing],
};

export const gcp: Skill = {
  name: "Google Cloud Platform",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp",
  skills: [cloudComputing],
};

export const azure: Skill = {
  name: "Microsoft Azure",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure",
  skills: [cloudComputing],
};

export const gunicorn: Skill = {
  name: "Gunicorn",
  category: "Back-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "gunicon",
  skills: [webDevelopment],
};

export const jinja: Skill = {
  name: "Jinja",
  category: "Back-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "jinja",
  skills: [webDevelopment],
};

export const bootstrap: Skill = {
  name: "Bootstrap",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "bootstrap",
  skills: [webDevelopment, userCentricDesign],
};

export const materialUI: Skill = {
  name: "Material UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "material-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const semanticUI: Skill = {
  name: "Semantic UI",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "semantic-ui",
  skills: [webDevelopment, userCentricDesign],
};

export const antDesign: Skill = {
  name: "Ant Design",
  category: "Front-End Web Development",
  isMainSkill: false,
  skillType: "hard",
  slug: "ant-design",
  skills: [webDevelopment, userCentricDesign],
};

export const apollo: Skill = {
  name: "Apollo",
  category: "APIs",
  isMainSkill: false,
  skillType: "hard",
  slug: "apollo",
  skills: [webDevelopment, apis],
};

export const awsEC2: Skill = {
  name: "Elastic Compute Cloud (EC2)",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-ec2",
  skills: [cloudComputing],
};

export const awsS3: Skill = {
  name: "Simple Storage Service (S3)",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-s3",
  skills: [cloudComputing],
};

export const awsVPC: Skill = {
  name: "Virtual Private Cloud (VPC)",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-vpc",
  skills: [cloudComputing],
};

export const awsLambda: Skill = {
  name: "Lambda",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-lambda",
  skills: [cloudComputing],
};

export const awsCloudFormation: Skill = {
  name: "CloudFormation",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-cloudformation",
  skills: [cloudComputing],
};

export const awsCloudFront: Skill = {
  name: "CloudFront",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-cloudfront",
  skills: [cloudComputing],
};

export const awsElasticBeanstalk: Skill = {
  name: "Elastic Beanstalk",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "aws-elastic-beanstalk",
  skills: [cloudComputing],
};

export const azureAppService: Skill = {
  name: "Azure App Service",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-app-service",
  skills: [cloudComputing],
};

export const azureBlobStorage: Skill = {
  name: "Azure Blob Storage",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-blob-storage",
  skills: [cloudComputing],
};

export const azureDurableFunctions: Skill = {
  name: "Durable Functions",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-durable-functions",
  skills: [cloudComputing],
};

export const azureMonitor: Skill = {
  name: "Azure Monitor",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-monitor",
  skills: [cloudComputing],
};

export const azureFunctions: Skill = {
  name: "Azure Functions",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-functions",
  skills: [cloudComputing],
};

export const azureResourceManager: Skill = {
  name: "Azure Resource Manager",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-resource-manager",
  skills: [cloudComputing],
};

export const azureContainers: Skill = {
  name: "Containers",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-containers",
  skills: [cloudComputing],
};

export const azureContainerRegistry: Skill = {
  name: "Azure Container Registry",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "azure-container-registry",
  skills: [cloudComputing],
};

export const gcpAppEngine: Skill = {
  name: "App Engine",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-app-engine",
  skills: [cloudComputing],
};

export const gcpCloudSQL: Skill = {
  name: "Cloud SQL",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-cloud-sql",
  skills: [cloudComputing],
};

export const gcpCloudStorage: Skill = {
  name: "Cloud Storage",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-cloud-storage",
  skills: [cloudComputing],
};

export const gcpCloudTasks: Skill = {
  name: "Cloud Tasks",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-cloud-tasks",
  skills: [cloudComputing],
};

export const gcpCloudScheduler: Skill = {
  name: "Cloud Scheduler",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-cloud-scheduler",
  skills: [cloudComputing],
};

export const gcpCloudLogging: Skill = {
  name: "Cloud Logging",
  category: "Cloud Computing",
  isMainSkill: false,
  skillType: "hard",
  slug: "gcp-cloud-logging",
  skills: [cloudComputing],
};

export const ansible: Skill = {
  name: "Ansible",
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
  gitlabCI,
] as Skill[];

export default hardSkills;
