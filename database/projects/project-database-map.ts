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
      Enables customers to browse vehicle inventory, filter by specifications, and schedule test drives.
      Owners manage listings, reservations, and business operations through a dashboard.
      Includes an MCP server allowing AI agents to interact with the app.`,
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
    description: `
      A community platform where users create dedicated groups, publish posts, and participate in threaded discussions.
      Features include voting, media sharing, bookmarking, and personalized content feeds.
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
    relatedMaterials: [ModuleDatabaseKeys.RHUL_FinalYearProject],
    type: ProjectTypeEnum.Academic,
  },
  [ProjectDatabaseKeys.CommerzbankAppStatus]: {
    name: "Commerzbank App Status",
    description: `
      Monitors the operational health and uptime of enterprise services across the organization.
      Users track critical systems through personal subscriptions and team groups, with direct incident reporting and status announcements.
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
      Delivers daily risk-free and forward-looking interest rates sourced from financial market data providers.
      Business users can analyze historical trends, export spreadsheet reports, and configure automated threshold alerts.
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
      Cross-references market data vendor notices against entitlement reports to detect impacted applications and users.
      Verifies instrument code usage, tracks remediation workflows, and generates compliance audit reports.
    `,
    archived: true,
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
      Aggregates and enriches corporate financial records across multiple data providers.
      Analysts can query companies, process bulk entity spreadsheets, and export consolidated records.
    `,
    archived: true,
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
      An audio streaming platform for discovering artists, exploring albums, and playing tracks.
      Listeners can build custom playlists with drag-and-drop reordering and curate their favorite songs.
      `,
    archived: true,
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
      A workspace for creating formatted documents with embedded media and organizing them into hierarchical notebooks.
      Notes can be published to the web or managed through AI assistants via MCP.
    `,
    archived: true,
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
      Enables instant communication through private one-on-one chats and collaborative group conversations.
      Users can share images inline, monitor online presence, and customize their profiles.
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
      An open-source study platform designed to streamline academic organization for students.
      Centralizes course materials, tracks assignments and exam schedules, and organizes study notes.
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
      Investigates and prevents the loss of reasoning capabilities in language models during specialized fine-tuning.
      Introduces a hybrid training approach that preserves structured reasoning while adapting to domain-specific tasks.
    `,
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
      Connects AI assistants directly to spreadsheets for automated data manipulation, styling, and financial modeling.
      Enables autonomous agents to execute complex formulas, generate multi-series charts, and run statistical analysis.
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
      Enables AI assistants to interact with and control the desktop environment on Linux systems.
      Agents can launch applications, capture screenshots, manage windows, adjust system settings, and inspect hardware performance metrics.
      `,
    archived: true,
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
    name: "Llama.cpp Provider for GitHub Copilot",
    description: `
      Integrates self-hosted language models into the code editor's chat interface with streaming and tool support.
      Provides developers with complete data privacy, reduced inference costs, and flexible model selection.
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
  [ProjectDatabaseKeys.CommerzbankGenAiToOpenAiApiProxy]: {
    name: "Commerzbank AI Proxy",
    description: `
      Translates proprietary internal generative AI endpoints into standardized streaming and tool-calling interfaces.
      Enables enterprise development teams to connect standard developer tooling and assistants to private corporate models.
      `,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.FastApi,
      SkillDatabaseKeys.ModelContextProtocol,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
    thumbnailImage: PATHS.PROJECTS(
      ProjectDatabaseKeys.CommerzbankGenAiToOpenAiApiProxy,
    ).COVER,
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Professional,
    relatedMaterials: [RoleDatabaseKeys.CommerzbankAiEngineer],
  },
  [ProjectDatabaseKeys.VisionTransformerFromScratch]: {
    name: "Vision Transformer",
    description: `
      A standalone implementation of transformer architectures adapted for image classification from first principles.
      Processes image patch embeddings through multi-head self-attention mechanisms to perform visual recognition.
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

  //^ Web Dev + AI
  [ProjectDatabaseKeys.AiChatClient]: {
    name: "AI Chat Client",
    description: `
      A conversational workspace featuring branching message trees, sidecar visual artifacts, and multi-model support.
      Integrates document retrieval for contextual search, slash-command prompt shortcuts, and extensible external tools.
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
      A visual node editor for designing and running multi-step automation pipelines triggered by schedules or webhooks.
      Connects language models with third-party messaging services and custom actions in durable execution graphs.
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
      A multi-modal content creation platform providing conversation, code synthesis, and image generation.
      Users can customize prompt parameters and manage their usage through tier-based subscriptions.
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
      Generates customized quizzes across diverse topics in multiple-choice and fill-in-the-blank formats.
      Delivers immediate answer feedback, scoring metrics, and historical performance tracking.
    `,
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
      Centralizes identity verification and role-based access control across internal enterprise applications.
      Manages token lifecycles, session validation, and user profile permissions to reduce authentication redundancy.
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
      Simulates enterprise identity provider authentication flows for local testing and development environments.
      Allows developers to configure synthetic user accounts with custom roles and permissions to test authorization scenarios offline.
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
    archived: true,
    description: `
      A centralized service for dispatching transactional emails and system notifications across enterprise applications.
      Consolidates templating, delivery tracking, and connection pooling into a shared messaging utility.
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
      Resolves and caches user permissions and organizational directory roles for downstream internal services.
      Streamlines access evaluation across applications by providing a unified permission querying endpoint.
      `,
    archived: true,
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
      A suite of enterprise chatbots designed to automate communication and operational workflows for financial trading desks.
      Features include live message translation, interactive polling, automated report distribution, and conversational AI assistance.
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

  //^ Libraries
  [ProjectDatabaseKeys.BaseRestController]: {
    name: "REST Template Config",
    description: `
      A reusable networking configuration library that simplifies outbound HTTP client setup in enterprise applications.
      Streamlines corporate proxy definitions, custom security certificates, and authentication credentials.
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
      Parses standard formatted text documents and converts them into compliance-ready enterprise chat markup.
      Ensures rich formatting such as code blocks, lists, and tables render accurately across messaging clients.
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
      Provides declarative authorization utilities for enforcing user permissions derived from corporate directory groups.
      Eliminates repetitive security boilerplate by intercepting requests and validating user privileges against defined access policies.
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
      Delivers low-latency alerts from social media feeds directly to trading desks during market hours.
      Helps financial traders react promptly to breaking political statements and news announcements.
    `,
    skills: [SkillDatabaseKeys.Python, SkillDatabaseKeys.FastApi],
    category: ProjectCategoriesEnum.Other,
    archived: true,
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.GnomeAllInOneClipboardExtension]: {
    name: "All-in-One Clipboard Extension",
    description: `
      Enhances desktop clipboard functionality with searchable history and multi-format text snippets.
      Users can quickly paste past copied items, emojis, symbols, and animated media from a unified popup menu.
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
      Allows users to customize and reorder system menu toggles in their desktop environment.
      Provides granular control over menu visibility, button placement, and notification tray layouts.
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
