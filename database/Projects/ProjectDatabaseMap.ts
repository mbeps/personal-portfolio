import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import addProjectThumbnail from "@/actions/material/projects/addProjectThumbnail";
import ProjectDatabaseKeys from "@/database/Projects/ProjectDatabaseKeys";
import ProjectCategoriesEnum from "@/enums/Project/ProjectCategoriesEnum";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import ProjectInterface from "@/database/Projects/ProjectInterface";
import skillDatabaseMap from "../Skills/SkillDatabaseMap";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import ModuleDatabaseKeys from "@/database/Modules/ModuleDatabaseKeys";
import CertificateDatabaseKeys from "../Certificates/CertificateDatabaseKeys";
import RoleDatabaseKeys from "../Roles/RoleDatabaseKeys";
import ProjectTypeEnum from "@/enums/Project/ProjectTypeEnum";

/**
 * Hashmap of projects with keys as {@link SkillDatabaseKeys} and values as {@link ProjectInterface}.
 * The order of the projects is the order that is used when displaying the projects on the website.
 * The order skills is the order that is used when displaying the skills on the website.
 */
const projectMap: Database<ProjectInterface> = {
  [ProjectDatabaseKeys.CircusDiscussions]: {
    name: `Circus Discussions`,
    description: `
      For a final year university project, 
      a social media platform was developed enabling users to form communities, 
      start discussions, and comment on them.
      Tested on CRUD and software engineering principles.
      `,
    repositoryURL: `https://github.com/mbeps/next_discussion_platform`,
    deploymentURL: `https://circus-discussion.vercel.app/`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.ChakraUI,
      SkillDatabaseKeys.Firebase,
      SkillDatabaseKeys.Recoil,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.GCP,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.Yarn,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.ObjectOrientedProgramming,

      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.CircusDiscussions),
    relatedMaterials: [
      ModuleDatabaseKeys.RHUL_FinalYearProject,
      ProjectDatabaseKeys.FlaskForumBackend,
    ],
    type: ProjectTypeEnum.Academic,
  },
  [ProjectDatabaseKeys.RingmasterMessaging]: {
    name: `Ringmaster Messaging`,
    description: `
      A custom back-end learning project involved creating a straightforward real-time messaging app. 
      Users can chat one-on-one or in group chats, send text messages and images, view active users, etc.
      `,
    repositoryURL: `https://github.com/mbeps/ringmaster-messaging`,
    deploymentURL: `https://ringmaster-messaging.vercel.app/`,

    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.NextAuth,
      SkillDatabaseKeys.MongoDB,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Pusher,
      SkillDatabaseKeys.Cloudinary,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.HeadlessUI,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.Yarn,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,

      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.RingmasterMessaging
    ),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.MagicianAI]: {
    name: `Magician AI`,
    description: `
      A SaaS platform that leverages AI to enable users to generate various media types and have conversations. 
      Developing this project allowed me to explore Stripe, Clerk authentication, and unique AI APIs.
  `,
    repositoryURL: `https://github.com/mbeps/magician-ai`,
    // deploymentURL: "https://magician-ai.vercel.app/",
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.ShadcnUI,
      SkillDatabaseKeys.RadixUI,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Stripe,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.OpenAI,
      SkillDatabaseKeys.ReplicateAI,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.GCP,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.Yarn,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,

      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.MagicianAI),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.DrumrollMusic]: {
    name: `Drumroll Music`,
    description: `
      My first major project using Supabase was a basic music streaming site. 
      Users can upload songs, search and listen to music, as well as like the songs they enjoy.
      `,
    repositoryURL: `https://github.com/mbeps/drumroll-music`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Supabase,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.RadixUI,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.GCP,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.Yarn,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,

      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.DrumrollMusic),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.JokerNotes]: {
    name: "Joker Notes",
    description: `
      A note-taking app where users can sign up, log in, and reset passwords easily. 
      It supports rich text formatting, image additions, and publishing notes publicly. 
      Users alse organize notes into nested notebooks.`,
    repositoryURL: `https://github.com/mbeps/joker-notes`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.ShadcnUI,
      SkillDatabaseKeys.RadixUI,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Zustand,

      SkillDatabaseKeys.Convex,
      SkillDatabaseKeys.EdgeStore,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.Yarn,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,

      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    deploymentURL: "https://joker-notes.vercel.app/",
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.JokerNotes),
    type: ProjectTypeEnum.Personal,
  },

  //^ Extra Web Development Projects
  [ProjectDatabaseKeys.Quizmify]: {
    name: "Quizmify AI",
    description: `
      A platform for dynamic quiz generation. 
      Users can test their knowledge with multiple-choice or fill-in-the-gap questions across various topics.
      With immediate feedback and score tracking, users enhance their understanding.`,
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.ShadcnUI,
      SkillDatabaseKeys.RadixUI,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Axios,
      SkillDatabaseKeys.NextAuth,

      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.OpenAI,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.Yarn,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,

      SkillDatabaseKeys.Algorithms,
    ],
    repositoryURL: "https://github.com/mbeps/quizmify",
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.Quizmify),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.SideshowArticles]: {
    name: `Sideshow Articles`,
    description: `
      To learn Supabase, I developed a simple website for reading and writing articles. 
      Users can read, create, and delete articles. 
      This project paved the way for using Supabase in subsequent projects.
      `,
    repositoryURL: `https://github.com/mbeps/sideshow-articles`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Supabase,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.NextUI,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.NPM,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.SideshowArticles),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.Noodle]: {
    name: `Noodle`,
    description: `
          In my second year of university, my group and I started an open-source learning platform project, introducing me to full-stack development. 
          This app helps students manage tasks, assignments, exams, and store notes and resources.
          `,
    repositoryURL: `https://github.com/ixahmedxi/noodle`,
    deploymentURL: `https://noodle.run/`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.ShadcnUI,
      SkillDatabaseKeys.RadixUI,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.NxJS,
      SkillDatabaseKeys.Jest,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.PNPM,

      SkillDatabaseKeys.ObjectOrientedProgramming,

      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Teamwork,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.Noodle),
    type: ProjectTypeEnum.Academic,
  },

  //^ Backend Web Development Projects
  [ProjectDatabaseKeys.SymphonyTranslateBot]: {
    name: `Symphony Translate Bot`,
    description: `
      A Symphony bot that translates messages in a Symphony chatroom using Language Weaver API.
      Replaces the old Translate Bot which was originally built using the outdated SDK.
      Much faster, more reliable, and easier to maintain and more features compared to the old bot.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.GCP,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.DataStructures,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankDevOpsEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
      ProjectDatabaseKeys.BaseRestController,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyCobaGPTBot]: {
    name: `Symphony CobaGPT Bot`,
    description: `
      A Symphony bot which interfaces with the Azure OpenAI API to generate text based on user input.
      This bot improves the workflow of users by providing quick responses to common questions and completing simple or repetitive tasks.
      This bot is a result of Commerzbank's initiative towards automation using AI.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.GCP,
      SkillDatabaseKeys.OpenAI,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.DataStructures,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankDevOpsEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
      ProjectDatabaseKeys.BaseRestController,
      ProjectDatabaseKeys.MarkdownToMessageMLConverter,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyWebhookBot]: {
    name: `Symphony Webhooks Bot`,
    description: `
      A Symphony bot that sends messages to a Symphony chatroom using Webhooks.
      This bot is used to send messages to a chatroom from an external source.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.GCP,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankDevOpsEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyMessageMLBot]: {
    name: `Symphony MessageML Bot`,
    description: `
      A Symphony bot for sending messages in Symphony using MessageML.
      This allows the bot to send messages with more formatting and interactivity similar to HTML.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.GCP,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankDevOpsEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
      ProjectDatabaseKeys.MarkdownToMessageMLConverter,
    ],
    archived: true,
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyPollBot]: {
    name: `Symphony Poll Bot`,
    description: `
      A Symphony bot for creating polls and surveys for gathering feedback.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.MongoDB,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.GCP,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankDevOpsEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    archived: true,
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyApplicationStatusBot]: {
    name: `Symphony Application Status Bot`,
    description: `
      A Symphony bot responsible for keeping track of various Commerzbank applications' statuses.
      This then notifies the teams responsible for maintaining the applications on Symphony.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.MongoDB,
      SkillDatabaseKeys.SpringDataMongoDB,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.GCP,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankDevOpsEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    type: ProjectTypeEnum.Professional,
    archived: true,
  },
  [ProjectDatabaseKeys.SymphonyBusinessHighlightsBot]: {
    name: `Symphony Business Highlights Bot`,
    description: `
      A Symphony bot which compiles weekly business reports from various users
      and generates a summary of the business highlights for the week.
      Uses Azure Active Directory for managing permissions and access control.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.MongoDB,
      SkillDatabaseKeys.SpringDataMongoDB,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.GCP,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankDevOpsEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    type: ProjectTypeEnum.Professional,
    archived: true,
  },
  [ProjectDatabaseKeys.SymphonyInteractiveBot]: {
    name: `Symphony Interactive Bot Example`,
    description: `
      A Symphony bot for learning how to create an interactive bot in Symphony.
      This bot is used to demonstrate how to create an interactive bot in Symphony.
      This was used to create documentation and tutorials for other developers.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.GCP,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankDevOpsEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    archived: true,
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyHeadlessBot]: {
    name: `Symphony Headless Bot Example`,
    description: `
      A Symphony bot for learning how to create a Headless Bot in Symphony.
      This bot is used to demonstrate how to create a headless bot in Symphony.
      This was used to create documentation and tutorials for other developers.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.GCP,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankDevOpsEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    archived: true,
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.FlaskForumBackend]: {
    name: `Flask Forum Backend`,
    description: `
      This is a custom backend for the first iteration of the discussion platform. 
      This was created to learn how to create a custom backend using Python and Flask.
      `,
    repositoryURL: `https://github.com/mbeps/Forum-Discussion-Flask-Backend`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Flask,
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.SQLAlchemy,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.Poetry,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.GitLab,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Git,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,

      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    relatedMaterials: [
      ModuleDatabaseKeys.RHUL_FinalYearProject,
      ProjectDatabaseKeys.CircusDiscussions,
    ],
    type: ProjectTypeEnum.Academic,
  },
  [ProjectDatabaseKeys.FlaskBackendDemo]: {
    name: `Flask Backend Demo`,
    description: `
      A simple Flask app to learn how to create a RESTful API. 
      This was a foundational project to learn how to create a back-end using Flask.
      This was helpful when creating the back-end for the discussion platform.
      `,
    repositoryURL: `https://github.com/mbeps/python-flask-demo`,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Flask,
      SkillDatabaseKeys.SQLAlchemy,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.Poetry,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.SQLite,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
    ],
    archived: true,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.FlaskJWTAuthentication]: {
    name: `Flask JWT Authentication`,
    description: `
      A simple Flask app to learn how to use JWT for authentication.
      This serves as a foundation to using JWT in other projects using Flask.
      `,
    repositoryURL: `https://github.com/mbeps/Flask_JWT_Auth`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Flask,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.Poetry,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.DjangoAuthentication]: {
    name: `Django Authentication`,
    description: `
      A simple Django app to learn how to use Django with tokens for authentication.
      This serves as a foundation to using Django in other projects.
      `,
    repositoryURL: `https://github.com/mbeps/Django_Auth_Sys`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Django,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Poetry,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.ClerkAuthentication]: {
    name: `Clerk Authentication`,
    description: `
      A simple Next.JS app to experiment with the Clerk Authentication SDK. 
      `,
    repositoryURL: `https://github.com/mbeps/clerk-demo`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Yarn,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.Auth0Authentication]: {
    name: `Auth0 Authentication`,
    description: `
      A simple Next.JS app to experiment with the Auth0 Authentication SDK. 
      This does not use the new Next.JS 13 app router as it is not supported as of the time of making this demo. 
      `,
    repositoryURL: `https://github.com/mbeps/nextjs-auth0`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.Auth0,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.Yarn,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.SpringDataJPATemplate]: {
    name: `Spring Data JPA Template`,
    description: `
      A template project for using Spring Data JPA with PostgreSQL. 
      This was created for documenting how use SQL databases for our Spring Boot projects.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    type: ProjectTypeEnum.Professional,
    repositoryURL: "https://github.com/mbeps/springboot-sql-database-template",
    relatedMaterials: [RoleDatabaseKeys.CommerzbankDevOpsEngineer],
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataJPA,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Gradle,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    archived: true,
  },
  [ProjectDatabaseKeys.SpringDataMongoTemplate]: {
    name: `Spring Data MongoDB Template`,
    description: `
      A template project for using Spring Data MongoDB.
      This was created for documenting how use MongoDB databases for our Spring Boot projects.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    type: ProjectTypeEnum.Professional,
    repositoryURL:
      "https://github.com/mbeps/springboot-mongodb-database-template",
    relatedMaterials: [RoleDatabaseKeys.CommerzbankDevOpsEngineer],
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataJPA,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Gradle,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    archived: true,
  },

  //^ Artificial Intelligence Projects
  [ProjectDatabaseKeys.HandWrittenDigitClassifier]: {
    name: "Handwritten Digit Classifier",
    description: `
      A handwritten digit classifier using built using a Convolutional Neural Network (CNN).
      Used various techniques such as data augmentation, batch normalisation, and dropout to improve the model's performance.
      `,
    repositoryURL:
      "https://github.com/mbeps/pattern-recognition-neural-network-coursework-1",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_PatternRecognitionNeuralNetworksDeepLearning,
    ],
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Keras,
      SkillDatabaseKeys.TensorFlow,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Poetry,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.ComputerVision,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.HandWrittenDigitClassifier
    ),
  },
  [ProjectDatabaseKeys.AdultIncomePrediction]: {
    name: "Adult Income Prediction",
    description: `
      Comparing various classification algorithms to predict whether an adult earns more than $50,000 a year.
      Emphasis is on feature engineering, data preprocessing with One-Hot Encoding, and model optimization through hyperparameter tuning.`,
    repositoryURL: "https://github.com/mbeps/Adults_Income_Prediction",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Seaborn,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Poetry,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Personal,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.AdultIncomePrediction
    ),
  },
  [ProjectDatabaseKeys.HousePricePrediction]: {
    name: "House Price Prediction",
    description: `
      Comparing various regression algorithms to predict house prices in relation to the distance from the coast.
      Emphasis is on feature engineering, data preprocessing with One-Hot Encoding, and model optimization through hyperparameter tuning.`,
    repositoryURL: "https://github.com/mbeps/House_Price_Prediction",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Seaborn,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Poetry,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.Mathematics,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Personal,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.HousePricePrediction
    ),
  },
  [ProjectDatabaseKeys.CustomNeuralNetworkCoursework]: {
    name: "Custom Neural Network Classifier",
    description: `
      Built a neural network from scratch to teach a Pacman agent.
      Used various techniques such as batch normalisation, dropout, momentum, learning rate decay and more to improve performance.
      `,
    repositoryURL:
      "https://github.com/mbeps/machine-learning-pacman-classifier-coursework",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    relatedMaterials: [ModuleDatabaseKeys.KCL_MachineLearning],
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Poetry,

      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.Statistics,
      SkillDatabaseKeys.Calculus,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.CustomNeuralNetworkCoursework
    ),
  },
  [ProjectDatabaseKeys.MachineLearningAlgorithms]: {
    name: "Machine Learning Algorithms",
    description: `
      Practicing various algorithms and techniques.
      This includes supervised, unsupervised, and reinforcement learning algorithms, as well as feature engineering, data preprocessing, and hyperparameter tuning.
    `,
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    repositoryURL: "https://github.com/mbeps/Machine-Learning-Course-Lab",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Seaborn,
      SkillDatabaseKeys.Keras,
      SkillDatabaseKeys.TensorFlow,
      SkillDatabaseKeys.Jupyter,

      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Poetry,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.ComputerVision,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    relatedMaterials: [CertificateDatabaseKeys.UdemyMachineLearningAtoZ],
    type: ProjectTypeEnum.Personal,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningAlgorithms
    ),
  },
  [ProjectDatabaseKeys.ArtificialIntelligenceReinforcementLearning]: {
    name: "Reinforcement Learning Lab",
    description: `
      Practicing various Reinforcement Learning algorithms and techniques.
      This includes Q-Learning, Deep Q-Learning, and Asynchronous Advantage Actor-Critic (A3C) algorithms.
    `,
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    repositoryURL: "https://github.com/mbeps/Reinforcement-Learning",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.PyTorch,
      SkillDatabaseKeys.Jupyter,

      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Poetry,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.ReinforcementLearning,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    relatedMaterials: [CertificateDatabaseKeys.UdemyArtificialIntelligenceAtoZ],
    type: ProjectTypeEnum.Personal,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.ArtificialIntelligenceReinforcementLearning
    ),
  },
  [ProjectDatabaseKeys.CustomQLearningAgent]: {
    name: "Custom Q-Learning Agent",
    description: `
      A custom Q-Learning agent learns to play Pacman.
      Required foundational Mathematics knowledge and understanding of the Q-Learning algorithm.
      `,
    repositoryURL:
      "https://github.com/mbeps/machine-learning-coursework-2-pacman",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Poetry,

      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.Statistics,
      SkillDatabaseKeys.Calculus,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.ReinforcementLearning,
      SkillDatabaseKeys.DeepLearning,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    relatedMaterials: [ModuleDatabaseKeys.KCL_MachineLearning],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.CustomQLearningAgent
    ),
  },
  [ProjectDatabaseKeys.MachineLearningAssignment1]: {
    name: `Machine Learning Assignment 1`,
    description: `
      Implementing algorithms from scratch such as the Nearest Neighbours algorithm.
      Requires an understanding of the Mathematics behind the algorithms and the ability to implement them.
      `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-1`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.Mathematics,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_MachineLearning],
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningAssignment1
    ),
  },
  [ProjectDatabaseKeys.MachineLearningAssignment2]: {
    name: `Machine Learning Assignment 2`,
    description: `
      Be able to use and implement algorithms, 
      with the Lasso and inductive conformal prediction algorithms as examples. 
    `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-2`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.Mathematics,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningAssignment2
    ),
  },
  [ProjectDatabaseKeys.MachineLearningAssignment3]: {
    name: `Machine Learning Assignment 3`,
    description: `
      Be able to use and implement algorithms, 
      with the SVM, neural networks, and cross-conformal prediction algorithms as examples. 
      `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-3`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.Mathematics,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_MachineLearning],
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningAssignment3
    ),
  },
  [ProjectDatabaseKeys.MachineLearningLabs]: {
    name: `Machine Learning Labs`,
    description: `
      Implemented various algorithms and techniques learnt during the course, 
      such as Nearest Neighbours, Conformal Prediction, Regression algorithms, data preprocessing, 
      kernels, Neural Networks, SVMs, etc.`,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Labs-Questions`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.Mathematics,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_MachineLearning],
    archived: true,
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningLabs
    ),
  },
  [ProjectDatabaseKeys.ComputationalFinanceAssignment]: {
    name: "Computational Finance Assignment",
    description: `
      Exploring valuation of options using methods like Black-Scholes, binomial trees, and Monte Carlo. 
      Also includes theoretical aspects of put-call parity and financial arbitrage opportunities.`,
    repositoryURL: `https://github.com/mbeps/Computation_Finance_Assignment`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,

      SkillDatabaseKeys.ArtificialIntelligence,

      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.Calculus,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Statistics,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.Mechanics,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_ComputationalFinance],
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.ComputationalFinanceAssignment
    ),
  },
  [ProjectDatabaseKeys.MachineLearningDataScienceLab]: {
    name: "Machine Learning & Data Science Lab",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    description: `
      Focusing on learning generative models, using third-party models and using advanced techniques. 
      This includes techniques such as transfer learning, LLM Agents, and Generative Models.`,
    repositoryURL: "https://github.com/mbeps/Data-Science-Machine-Learning-Lab",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Keras,
      SkillDatabaseKeys.TensorFlow,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.OpenAI,

      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    archived: true,
    relatedMaterials: [
      CertificateDatabaseKeys.UdemyMachineLearningDataScienceAndGenerativeAIWithPython,
    ],
    type: ProjectTypeEnum.Personal,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningDataScienceLab
    ),
  },

  [ProjectDatabaseKeys.MarkovDecisionAgent]: {
    name: "Markov Decision Agent",
    description: `
      Pacman agent plays to win the game while handling stochasticity in the movement of agent and ghosts.
      Uses Markov Decision Processes, Value Iteration and other enhancements.
      `,
    repositoryURL: "https://github.com/mbeps/pacman-assignment",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.IntelligentAgents,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.LinearAlgebra,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    archived: true,
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_ArtificialIntelligenceReasoningAndDecisionMaking,
    ],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MarkovDecisionAgent
    ),
  },
  [ProjectDatabaseKeys.ComputerVisionImageSegmentation]: {
    name: "Computer Vision Image Segmentation",
    description: `
      Segmenting images using various techniques.
      Specifically, used models of biological vision systems such as Simple and Complex cells, and Gabor filters.
      `,
    repositoryURL: "https://github.com/mbeps/computer-vision-assignment",
    skills: [
      SkillDatabaseKeys.Matlab,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.IntelligentAgents,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ComputerVision,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.LinearAlgebra,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    archived: true,
    relatedMaterials: [ModuleDatabaseKeys.KCL_ComputerVision],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.ComputerVisionImageSegmentation
    ),
  },
  [ProjectDatabaseKeys.ComputerVisionQuizzes]: {
    name: "Computer Vision Quizzes",
    description: `
      Solutions to quizzes where various low-level and mid-level vision techniques were covered.
      These techniques include edge detection, image segmentation, and image filtering.
      `,
    repositoryURL: "https://github.com/mbeps/computer-vision-quiz-assignment",
    skills: [
      SkillDatabaseKeys.Matlab,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.IntelligentAgents,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ComputerVision,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.LinearAlgebra,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    archived: true,
    relatedMaterials: [ModuleDatabaseKeys.KCL_ComputerVision],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.ComputerVisionQuizzes
    ),
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
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.GCP,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    category: ProjectCategoriesEnum.Libraries,
    type: ProjectTypeEnum.Professional,
    archived: true,
    relatedMaterials: [
      ProjectDatabaseKeys.SymphonyTranslateBot,
      ProjectDatabaseKeys.SymphonyCobaGPTBot,

      RoleDatabaseKeys.CommerzbankDevOpsEngineer,
    ],
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
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.GCP,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    category: ProjectCategoriesEnum.Libraries,
    type: ProjectTypeEnum.Professional,
    archived: true,
    relatedMaterials: [
      ProjectDatabaseKeys.SymphonyCobaGPTBot,
      ProjectDatabaseKeys.SymphonyMessageMLBot,

      RoleDatabaseKeys.CommerzbankDevOpsEngineer,
    ],
  },

  //^ Programming Fundamentals
  [ProjectDatabaseKeys.JavaCalculatorAssignment]: {
    name: `Calculator`,
    description: `
      Simple calculator app built using Java as a Maven project. 
      This was a second year Java assignment focused on software engineering methodologies. 
      The project involved creating a calculator application, emphasizing the importance of proper version control procedures, 
      test-driven development, documentation, and code quality assurance through linting and styling. 
      The assignment highlighted the significance of following efficient software development processes rather than just focusing on the final implementation.  `,
    repositoryURL: `https://github.com/mbeps/Calculator-Assignment`,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.Maven,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    category: ProjectCategoriesEnum.ProgrammingFundamentals,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_SoftwareEngineering],
    archived: true,
    type: ProjectTypeEnum.Academic,
  },
  [ProjectDatabaseKeys.JavaFundamentalsAssignments]: {
    name: `Java Fundamentals Assignments`,
    description: `
      First-year Java assignments focused on learning the basics of Java and Object-Oriented Programming (OOP). 
      These projects covered core concepts like classes, inheritance, and data handling. 
      They provided a solid foundation in Java programming and practical experience with fundamental OOP principles.
      `,
    repositoryURL: `https://github.com/stars/mbeps/lists/java-fundamentals-assignments`,
    skills: [
      SkillDatabaseKeys.Java,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    category: ProjectCategoriesEnum.ProgrammingFundamentals,
    type: ProjectTypeEnum.Academic,
    archived: true,
    relatedMaterials: [
      ModuleDatabaseKeys.RHUL_ObjectOrientedProgramming1,
      ModuleDatabaseKeys.RHUL_ObjectOrientedProgramming2,
    ],
  },
  [ProjectDatabaseKeys.DatabasesMiniProject]: {
    name: `Database Mini Project`,
    description: `Learning to interact with a database using Java.`,
    repositoryURL: `https://github.com/mbeps/DatabasesMiniProject`,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    category: ProjectCategoriesEnum.ProgrammingFundamentals,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_Databases],
    type: ProjectTypeEnum.Academic,
    archived: true,
  },

  //^ Algorithms and Data Structures
  [ProjectDatabaseKeys.Leetcode]: {
    name: `Leetcode Solutions`,
    description: `
      A collection of Leetcode solutions in Python. 
      This is used to practice algorithms and data structures.
      They are also used to practice unit testing.
      CI/CD is also used to run the tests when merging to the main branch.
      `,
    repositoryURL: `https://github.com/stars/mbeps/lists/leetcode`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.PyTest,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.GitHubActions,

      SkillDatabaseKeys.DataStructures,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    category: ProjectCategoriesEnum.Algorithms,
    archived: true,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.SearchingAndSortingAlgorithms]: {
    name: `Searching & Sorting Algorithms`,
    description: `
      Jupyter Notebook containing various searching and sorting algorithms.
      Each algorithms is explained. 
      All the algorithms are also compared to each other. 
    `,
    category: ProjectCategoriesEnum.Algorithms,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Poetry,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.DataStructures,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    repositoryURL: "https://github.com/mbeps/algorithms",
    archived: true,
    relatedMaterials: [
      ModuleDatabaseKeys.RHUL_AlgorithmsAndComplexity,
      CertificateDatabaseKeys.UdemyTheCompleteDataStructuresAndAlgorithmsCourseInPython,
      CertificateDatabaseKeys.UdemyPythonProgrammingMasterclass,
    ],
    type: ProjectTypeEnum.Academic,
  },

  //^ Other Projects
  [ProjectDatabaseKeys.OsmosGame]: {
    name: `Osmos Game`,
    description: `
          A simple game built with SimpleGUI for a first-year university project. 
          We manually implemented physics using vector theory and physics concepts, relying solely on documentation due to the lack of tutorials.
          `,
    repositoryURL: `https://github.com/mbeps/Osmos_Game`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.SimpleGUI,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Leadership,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.Communication,
    ],
    category: ProjectCategoriesEnum.Other,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_ProgrammingLaboratory],
    archived: true,
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.OsmosGame),
  },
  [ProjectDatabaseKeys.AutomatedSetup]: {
    name: `Automated Setup`,
    description: `
      A shell script which automates the setup of a new Linux machine.
      This is specifically for my Fedora install.
      `,
    skills: [
      SkillDatabaseKeys.ShellScript,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.DataStructures,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    repositoryURL: `https://github.com/mbeps/AutomatedSetup`,
    category: ProjectCategoriesEnum.Other,
    archived: true,
    type: ProjectTypeEnum.Academic,
  },
};

/**
 * List of keys for the projects that can be used to uniquely identify the project.
 */
export const projectDatabaseKeys: ProjectDatabaseKeys[] = Object.keys(
  projectMap
) as ProjectDatabaseKeys[];

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
    SkillTypesEnum.Technology
  );

export default projectDatabaseMap;
