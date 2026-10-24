import { PATHS } from "@/config/paths";
import CertificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import ModuleDatabaseKeys from "@/database/modules/module-database-keys";
import ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import type ProjectInterface from "@/database/projects/project-interface";
import RoleDatabaseKeys from "@/database/roles/role-database-keys";
import SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import ProjectCategoriesEnum from "@/enums/project/project-categories-enum";
import ProjectTypeEnum from "@/enums/project/project-type-enum";
import SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";
import validateDatabaseKeys from "@/lib/database/validate-database-keys";
import addNestedSkillsMaterialList from "@/lib/material/add-nested-skills-material-list";
import type Database from "@/types/database/database";
import BlogDatabaseKeys from "../blogs/blog-database-keys";

/**
 * Hashmap of projects with keys as {@link SkillDatabaseKeys} and values as {@link ProjectInterface}.
 * The order of the projects is the order that is used when displaying the projects on the website.
 * The order skills is the order that is used when displaying the skills on the website.
 */
const projectMap: Database<ProjectInterface> = {
  //^ Full-Stack Projects

  [ProjectDatabaseKeys.CarDealership]: {
    name: "Car Dealership",
    description: `
      Car dealership website for a client.
      Users can browse, search, and filter cars.
      Admins can manage inventory, add new cars, and update existing listings, view reports, manage dealership settings, etc.
      AI clients can interact with app via MCP.
      `,
    repositoryURL: "https://github.com/mbeps/car-dealership",
    deploymentURL: "https://car-dealership.maruf-bepary.com/",
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.BaseUi,
      SkillDatabaseKeys.Supabase,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.TypeOrm,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
      SkillDatabaseKeys.ModelContextProtocol,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.CarDealership).COVER,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.ForumDiscussions]: {
    name: "Forum Discussions",
    archived: true,
    description: `
      A forum-style social media platform was developed enabling users to form communities, 
      start discussions, and comment on them.
      Tested on CRUD and software engineering principles.
      `,
    repositoryURL: "https://github.com/mbeps/next_discussion_platform",
    deploymentURL: "https://forum-discussions.maruf-bepary.com/",
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ChakraUi,
      SkillDatabaseKeys.Firebase,
      SkillDatabaseKeys.Firestore,
      SkillDatabaseKeys.Jotai,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.ForumDiscussions).COVER,
    relatedMaterials: [
      ModuleDatabaseKeys.RHUL_FinalYearProject,
      ProjectDatabaseKeys.FlaskForumBackend,
    ],
    type: ProjectTypeEnum.Academic,
  },
  [ProjectDatabaseKeys.CommerzbankAppStatus]: {
    name: "Commerzbank App Status",
    description: `
      A web application that monitors and displays the status of various internal applications used by Commerzbank employees.
      Users are able to create personal subscriptions groups with other members. 
    `,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.BaseUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.TypeOrm,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
      SkillDatabaseKeys.Grafana,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.CommerzbankAppStatus)
      .COVER,
    type: ProjectTypeEnum.Professional,
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
      ProjectDatabaseKeys.AuthenticationMicroService,
      ProjectDatabaseKeys.EmailMicroService,
      ProjectDatabaseKeys.LdapPermissionsMicroService,
    ],
  },
  [ProjectDatabaseKeys.CommerzbankRates]: {
    name: "Commerzbank Rates",
    description: `
      A web application that provides rates to business users and allows exporting and viewing historical data.
      The data is sourced from Refinitiv and Bloomberg SFTP servers every day. 
    `,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataLdap,
      SkillDatabaseKeys.SpringDataMongoDb,
      SkillDatabaseKeys.SpringSecurity,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Grafana,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.CommerzbankRates).COVER,
    type: ProjectTypeEnum.Professional,
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
      ProjectDatabaseKeys.AuthenticationMicroService,
      ProjectDatabaseKeys.EmailMicroService,
      ProjectDatabaseKeys.LdapPermissionsMicroService,
    ],
  },
  [ProjectDatabaseKeys.CommerzbankDataNotification]: {
    name: "Commerzbank Data Notification",
    description: `
    Analyses Data Notification against DACS reports to identify impacted users and applications. 
    It verifies Reuters Instrument Code usage, tracks remediation actions, and exports results to Excel.`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.BaseUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.TypeOrm,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
      SkillDatabaseKeys.Grafana,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    type: ProjectTypeEnum.Professional,
    thumbnailImage: PATHS.PROJECTS(
      ProjectDatabaseKeys.CommerzbankDataNotification,
    ).COVER,
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
      ProjectDatabaseKeys.AuthenticationMicroService,
      ProjectDatabaseKeys.EmailMicroService,
      ProjectDatabaseKeys.LdapPermissionsMicroService,
    ],
  },
  [ProjectDatabaseKeys.CommerzbankPhoenixFinanceEnrichment]: {
    name: "Commerzbank Phoenix Finance Enrichment",
    description: `
        A web application that finds and enriches financial data from various sources and provides a user-friendly interface for users to view and analyze the data. This cuts down on a full day of work to just a few minutes.
    `,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Python,

      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.FastApi,

      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Grafana,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: PATHS.PROJECTS(
      ProjectDatabaseKeys.CommerzbankPhoenixFinanceEnrichment,
    ).COVER,
    type: ProjectTypeEnum.Professional,
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
      RoleDatabaseKeys.CommerzbankAiEngineer,
      ProjectDatabaseKeys.AuthenticationMicroService,
    ],
  },
  [ProjectDatabaseKeys.MusicStreaming]: {
    name: "Music Streaming",
    description: `
      Music steaming platform. 
      Users can upload songs, search and listen to music, as well as like the songs they enjoy.
      `,
    repositoryURL: `https://github.com/mbeps/drumroll-music`,
    deploymentURL: "https://music.maruf-bepary.com/",
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.Supabase,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.BaseUi,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.MusicStreaming).COVER,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.RichTextNotes]: {
    name: "Rich-Text Notes",
    description: `
      A note-taking app where users can sign up, log in, and reset passwords easily. 
      It supports rich text formatting, image additions, and publishing notes publicly. 
      Users alse organize notes into nested notebooks.`,
    repositoryURL: "https://github.com/mbeps/joker-notes",
    deploymentURL: "https://notes.maruf-bepary.com/",
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.BaseUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Convex,
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.EdgeStore,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
      SkillDatabaseKeys.ModelContextProtocol,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.RichTextNotes).COVER,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.RealTimeMessaging]: {
    name: "Real-Time Messaging",
    description: `
      A real-time messaging platform.
      Users can chat one-on-one or in group chats, send text messages and images, view active users, etc.
      `,
    repositoryURL: "https://github.com/mbeps/ringmaster-messaging",
    deploymentURL: "https://messaging.maruf-bepary.com/",
    archived: true,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.BetterAuth,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Pusher,
      SkillDatabaseKeys.Cloudinary,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.HeadlessUi,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.RealTimeMessaging).COVER,
    type: ProjectTypeEnum.Personal,
  },

  [ProjectDatabaseKeys.Noodle]: {
    name: "Noodle",
    description: `
      In my second year of university, my group and I started an open-source learning platform project, introducing me to full-stack development. 
      This app helps students manage tasks, assignments, exams, and store notes and resources.
      `,
    repositoryURL: "https://github.com/ixahmedxi/noodle",
    deploymentURL: "https://noodle.run/",
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.MySql,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Jest,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.Noodle).COVER,
    type: ProjectTypeEnum.Academic,
  },

  //^ Artificial Intelligence Projects
  [ProjectDatabaseKeys.AlignmentInLargeLanguageModels]: {
    name: "Alignment in LLMs",
    description: `
    Specifically looked into and improved hybrid-reasoning models using LoRA and novel hybrid-training technique.
    Regular supervised fine-tuning on reasoning models causes them to forget their reasoning capabilities.
    This is solved using my novel hybrid training technique.`,
    repositoryURL:
      "https://github.com/stars/mbeps/lists/cultural-alignment-in-llms",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.PyTorch,
      SkillDatabaseKeys.Transformers,
      SkillDatabaseKeys.HuggingFace,
      SkillDatabaseKeys.LargeLanguageModels,
      SkillDatabaseKeys.Pandas,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.NaturalLanguageProcessing,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.FineTuning,
      SkillDatabaseKeys.Benchmarking,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    relatedMaterials: [ModuleDatabaseKeys.KCL_IndividualProject],
    thumbnailImage: PATHS.PROJECTS(
      ProjectDatabaseKeys.AlignmentInLargeLanguageModels,
    ).COVER,
  },
  [ProjectDatabaseKeys.ExcelSpreadsheetMCP]: {
    name: "Excel Spreadsheet MCP Server",
    description: `
      An MCP server which allows AI agents to connect and interact with Excel spreadsheets.
      This allows the AI agents to perform various tasks such as reading and writing data, performing calculations, and more.
      `,
    repositoryURL: "https://github.com/mbeps/excel-mcp",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Personal,
    relatedMaterials: [RoleDatabaseKeys.CommerzbankAiEngineer],
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ModelContextProtocol,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.PyTest,
    ],
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.ExcelSpreadsheetMCP)
      .COVER,
  },
  [ProjectDatabaseKeys.LinuxGnomeMcp]: {
    name: "Linux GNOME MCP Server",
    description: `
      An MCP server which allows AI agents to connect and interact with the GNOME desktop environment on Linux.
      This allows the AI agents to perform various tasks such as opening applications, changing themes, and more.
      `,
    repositoryURL: "https://github.com/mbeps/linux-gnome-mcp",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Personal,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ModelContextProtocol,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.PyTest,
    ],
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.LinuxGnomeMcp).COVER,
  },
  [ProjectDatabaseKeys.LlamaCppProviderForGitHubCopilotChat]: {
    name: "Llama.cpp Provider for GitHub Copilot Chat",
    description: `
    Allows using local Llama.cpp models within GitHub Copilot for VS Code. 
    Saves costs and provides more control over the models used in Copilot Chat, enabling private and customizable AI assistance for developers.
    `,
    repositoryURL: "https://github.com/mbeps/llama-vscode-chat",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    deploymentURL:
      "https://marketplace.visualstudio.com/items?itemName=maruf-bepary.llama-vscode-chat",
    type: ProjectTypeEnum.Personal,
    skills: [
      SkillDatabaseKeys.TypeScript,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.LargeLanguageModels,
      SkillDatabaseKeys.ModelContextProtocol,
    ],
    thumbnailImage: PATHS.PROJECTS(
      ProjectDatabaseKeys.LlamaCppProviderForGitHubCopilotChat,
    ).COVER,
  },
  [ProjectDatabaseKeys.VisionTransformerFromScratch]: {
    name: "Vision Transformer",
    description: `
      A compact implementation of a Vision Transformer (ViT). The code is written for learning and experiments.
      `,
    repositoryURL: "https://github.com/mbeps/vision-transformer",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Personal,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.PyTorch,
      SkillDatabaseKeys.Matplotlib,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.ComputerVision,
    ],
    thumbnailImage: PATHS.PROJECTS(
      ProjectDatabaseKeys.VisionTransformerFromScratch,
    ).COVER,
    archived: true,
  },
  [ProjectDatabaseKeys.CommerzbankGenAiToOpenAiApiProxy]: {
    name: "Commerzbank AI Proxy",
    description: `
      A proxy service that converts the internal GenAI API to OpenAI compatible API format with streaming and tool calls. 
      This allows internal API to be used with industry standard AI tools and clients.
      `,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.FastApi,
      SkillDatabaseKeys.ModelContextProtocol,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Professional,
    relatedMaterials: [RoleDatabaseKeys.CommerzbankAiEngineer],
    archived: true,
  },

  //^ Web Dev + AI
  [ProjectDatabaseKeys.AiChatClient]: {
    name: "AI Chat Client",
    description: `
      A chat client that allows users to have conversations with AI models.
      The client supports various AI models, access to built-in tools, external MCPs, knowlegebases, custom workflows, projects, prompts, etc.
      It is a very feature-rich client.
      `,
    category: ProjectCategoriesEnum.FullStackAndArtificialIntelligence,
    repositoryURL: "https://github.com/mbeps/ai-client",
    // deploymentURL: "https://ai-chat-client.maruf-bepary.com",
    type: ProjectTypeEnum.Personal,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.VercelAiSdk,
      SkillDatabaseKeys.ModelContextProtocol,
      SkillDatabaseKeys.RetrievalAugmentedGeneration,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.BetterAuth,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.Drizzle,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Vitest,
      SkillDatabaseKeys.Aws,
      SkillDatabaseKeys.AwsS3,
    ],
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.AiChatClient).COVER,
  },
  [ProjectDatabaseKeys.AiWorkflowAutomations]: {
    name: "AI Workflow Automations",
    description: `
    Runs AI driven automations based on triggers. 
    These triggers can be automatic (events) or manual.
    Allows regular users to easily create and run AI driven automations without any technical knowledge, making AI more accessible and useful for everyone.
    `,
    repositoryURL: "https://github.com/mbeps/ai-workflow-automations",
    deploymentURL: "https://ai-workflow-automations.maruf-bepary.com",
    category: ProjectCategoriesEnum.FullStackAndArtificialIntelligence,
    type: ProjectTypeEnum.Personal,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.BetterAuth,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Jotai,
      SkillDatabaseKeys.Sentry,
      SkillDatabaseKeys.VercelAiSdk,
      SkillDatabaseKeys.Polar,
      SkillDatabaseKeys.Inngest,
      SkillDatabaseKeys.TRcp,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Vitest,
    ],
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.AiWorkflowAutomations)
      .COVER,
  },
  [ProjectDatabaseKeys.AiGenerations]: {
    name: "AI Generations",
    archived: true,
    description: `
      A SaaS platform that leverages AI to enable users to generate various media types and have conversations. 
      Developing this project allowed me to explore Stripe, Clerk authentication, and unique AI APIs.
    `,
    repositoryURL: "https://github.com/mbeps/magician-ai",
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.MySql,
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Stripe,
      SkillDatabaseKeys.Rest,

      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
    category: ProjectCategoriesEnum.FullStackAndArtificialIntelligence,
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.AiGenerations).COVER,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.AiQuizzes]: {
    name: "AI Quizzes",
    archived: true,
    description: `
      A platform for dynamic quiz generation. 
      Users can test their knowledge with multiple-choice or fill-in-the-gap questions across various topics.
      With immediate feedback and score tracking, users enhance their understanding.`,
    category: ProjectCategoriesEnum.FullStackAndArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Axios,
      SkillDatabaseKeys.AuthJs,

      SkillDatabaseKeys.MySql,

      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
    ],
    repositoryURL: "https://github.com/mbeps/quizmify",
    thumbnailImage: PATHS.PROJECTS(ProjectDatabaseKeys.AiQuizzes).COVER,
    type: ProjectTypeEnum.Personal,
  },

  //^ Backend Web Development Projects
  [ProjectDatabaseKeys.AuthenticationMicroService]: {
    name: "Authentication Microservice",
    description: `
      A microservice providing OAuth authentication and authorisation to various applications using Microsoft Entra.
      Minimises on duplications allowing for faster development and simpler infrastructure.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataLdap,
      SkillDatabaseKeys.SpringDataJpa,
      SkillDatabaseKeys.SpringSecurity,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Grafana,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
      ProjectDatabaseKeys.CommerzbankAppStatus,
      ProjectDatabaseKeys.CommerzbankRates,
      ProjectDatabaseKeys.CommerzbankDataNotification,
      ProjectDatabaseKeys.CommerzbankPhoenixFinanceEnrichment,
      ProjectDatabaseKeys.EntraMockService,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.EntraMockService]: {
    name: "Entra Mock Service",
    archived: true,
    description: `
      A mock service for simulating Entra authentication flows.
      Allows creation of mock users with various roles and permissions to test different scenarios. 
      This is used during development as Entra does not work in local environments. Mock users with various roles and permissions can be created to test different scenarios.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataLdap,
      SkillDatabaseKeys.SpringSecurity,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.JUnit,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
      ProjectDatabaseKeys.CommerzbankAppStatus,
      ProjectDatabaseKeys.CommerzbankRates,
      ProjectDatabaseKeys.AuthenticationMicroService,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.EmailMicroService]: {
    name: "Email Microservice",
    description: `
      A microservice providing functionality to send emails for various applications and services. 
      Minimises on duplications allowing for faster development and simpler infrastructure.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Grafana,
    ],
    relatedMaterials: [
      ProjectDatabaseKeys.CommerzbankRates,
      RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.LdapPermissionsMicroService]: {
    name: "LDAP Permissions Microservice",
    description: `
      A microservice providing functionality of view permissions for users based on on-prem LDAP roles. 
      Minimises on duplications allowing for faster development and simpler infrastructure.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Grafana,
    ],
    relatedMaterials: [
      ProjectDatabaseKeys.CommerzbankRates,
      ProjectDatabaseKeys.SpringBootLdapRoleBasedAccessControlLibrary,
      RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyBots]: {
    name: "Symphony Bots",
    description: `
      A suite of enterprise Symphony chatbots built to automate communication and operational workflows.
      Key features include AI text generation with Azure OpenAI, live message translation, webhooks, interactive polls, and automated report aggregation.
    `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.SpringDataMongoDb,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Mockito,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Grafana,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
      RoleDatabaseKeys.CommerzbankAiEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
      ProjectDatabaseKeys.BaseRestController,
      ProjectDatabaseKeys.MarkdownToMessageMLConverter,
      BlogDatabaseKeys.CommerzbankMigrationToBDK,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.FlaskForumBackend]: {
    name: "Flask Forum Backend",
    description: `
      This is a custom backend for the first iteration of the discussion platform. 
      This was created to learn how to create a custom backend using Python and Flask.
      `,
    repositoryURL: "https://github.com/mbeps/Forum-Discussion-Flask-Backend",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Flask,
      SkillDatabaseKeys.MySql,
      SkillDatabaseKeys.SqlAlchemy,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Docker,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    relatedMaterials: [
      ModuleDatabaseKeys.RHUL_FinalYearProject,
      ProjectDatabaseKeys.ForumDiscussions,
    ],
    type: ProjectTypeEnum.Academic,
    archived: true,
  },

  //^ Libraries
  [ProjectDatabaseKeys.BaseRestController]: {
    name: "REST Template Config",
    description: `
      A library for Spring Boot allowing for greater configuration of proxies and SSL settings. 
      `,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
    ],
    category: ProjectCategoriesEnum.Libraries,
    type: ProjectTypeEnum.Professional,
    archived: true,
    relatedMaterials: [RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer],
  },
  [ProjectDatabaseKeys.MarkdownToMessageMLConverter]: {
    name: "Markdown to MessageML Converter",
    description: `
      A library for converting Markdown to Symphony's MessageML format.
      This was created because there was no existing library that could convert Markdown to MessageML.
      Especially useful for rendering responses from LLMs as they return messages in Markdown format.
      `,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
    ],
    category: ProjectCategoriesEnum.Libraries,
    type: ProjectTypeEnum.Professional,
    archived: true,
    relatedMaterials: [RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer],
  },
  [ProjectDatabaseKeys.SpringBootLdapRoleBasedAccessControlLibrary]: {
    name: "LDAP Role-Based Access Control Library",
    description: `
      A library for Spring Boot controlling user access across various Spring Boot applications using LDAP.
      `,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataLdap,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Mockito,
    ],
    category: ProjectCategoriesEnum.Libraries,
    type: ProjectTypeEnum.Professional,
    archived: true,
    relatedMaterials: [
      ProjectDatabaseKeys.CommerzbankRates,
      ProjectDatabaseKeys.LdapPermissionsMicroService,
      RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
    ],
  },

  //^ Other Projects
  [ProjectDatabaseKeys.CommerzbankTrumpNotification]: {
    name: "Commerzbank Trump Notification",
    description: `
      An automated services which sends low-latency notifications about Donald Trump's posts from Truth Social to traders in Commerzbank's.
    `,
    skills: [SkillDatabaseKeys.Python, SkillDatabaseKeys.FastApi],
    category: ProjectCategoriesEnum.Other,
    archived: true,
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.GnomeAllInOneClipboardExtension]: {
    name: "All-in-One Clipboard Extension",
    description: `
      A Gnome extension that adds advanced clipboard management features to the Gnome desktop environment.
      Inspired by Windows 11's feature, this extension allows users to manage clipboard history, emojis, kaomojis, GIFs, and symbols.
          `,
    repositoryURL: "https://github.com/NiffirgkcaJ/all-in-one-clipboard",
    skills: [SkillDatabaseKeys.JavaScript],
    category: ProjectCategoriesEnum.Other,
    archived: true,
    type: ProjectTypeEnum.Personal,
    relatedMaterials: [RoleDatabaseKeys.OpenSourceContributor],
  },
  [ProjectDatabaseKeys.GnomeQuickSettingsTweakExtension]: {
    name: "Quick Settings Tweak Extension",
    description: `
      A Gnome extension that allows users to customize the quick settings menu in the Gnome desktop environment.
      `,
    repositoryURL: "https://github.com/qwreey/quick-settings-tweaks",
    skills: [SkillDatabaseKeys.JavaScript],
    category: ProjectCategoriesEnum.Other,
    archived: true,
    relatedMaterials: [RoleDatabaseKeys.OpenSourceContributor],
    type: ProjectTypeEnum.Personal,
  },
};

/**
 * List of keys for the projects that can be used to uniquely identify the project.
 */
export const projectDatabaseKeys: ProjectDatabaseKeys[] = Object.keys(
  projectMap,
) as ProjectDatabaseKeys[];

// Validate that all project keys only contain alphanumeric characters and dashes
validateDatabaseKeys(projectDatabaseKeys);

/**
 * Hashmap of projects with keys as {@link SkillDatabaseKeys} and values as {@link ProjectInterface}.
 * The order of the projects is the order that is used when displaying the projects on the website.
 * The order skills is the order that is used when displaying the skills on the website.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const projectDatabaseMap: Database<ProjectInterface> =
  addNestedSkillsMaterialList<ProjectInterface>(
    projectMap,
    skillDatabaseMap,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.Technical,
    SkillTypesEnum.Technology,
  );

export default projectDatabaseMap;
