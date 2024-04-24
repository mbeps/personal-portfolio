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
      start discussions, and comment on them, connecting with like-minded individuals.
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
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

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
      SkillDatabaseKeys.DesignPatterns,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.CircusDiscussions),
    relatedMaterials: [ModuleDatabaseKeys.RHUL_FinalYearProject],
  },
  [ProjectDatabaseKeys.RingmasterMessaging]: {
    name: `Ringmaster Messaging`,
    description: `
      A custom back-end learning project involved creating a straightforward messaging app. 
      Users can chat one-on-one, participate in group chats, send text messages, share images, view active users, and personalize their profiles. 
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
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.DesignPatterns,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.RingmasterMessaging
    ),
  },
  [ProjectDatabaseKeys.MagicianAI]: {
    name: `Magician AI`,
    description: `
      Magician AI is a SaaS platform that leverages AI to enable users to generate various media types and have dynamic conversations. 
      Developing this project allowed me to explore Stripe, Clerk authentication, and unique AI APIs.
  `,
    repositoryURL: `https://github.com/mbeps/magician-ai`,
    deploymentURL: "https://magician-ai.vercel.app/",
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
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.DesignPatterns,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.MagicianAI),
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
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.DesignPatterns,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.DrumrollMusic),
  },
  [ProjectDatabaseKeys.JokerNotes]: {
    name: "Joker Notes",
    description: `
      A simple rich-text note-taking app that allows users to create, edit, and delete notes.
      `,
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
      SkillDatabaseKeys.Zod,
      SkillDatabaseKeys.Convex,
      SkillDatabaseKeys.EdgeStore,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.Yarn,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.DesignPatterns,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    deploymentURL: "https://joker-notes.vercel.app/",
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.JokerNotes),
  },

  //^ Extra Web Development Projects
  [ProjectDatabaseKeys.Quizmify]: {
    name: "Quizmify",
    description: `An intuitive platform for dynamic quiz generation. 
      Users can test their knowledge across various topics, choosing between multiple-choice questions or fill-in-the-gap style challenges. 
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
      SkillDatabaseKeys.Zod,
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.OpenAI,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.Yarn,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.DesignPatterns,
      SkillDatabaseKeys.Algorithms,
    ],
    repositoryURL: "https://github.com/mbeps/quizmify",
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.Quizmify),
  },
  [ProjectDatabaseKeys.SideshowArticles]: {
    name: `Sideshow Articles`,
    description: `
      To familiarize myself with Supabase, I developed a simple website for reading and writing articles. 
      Users can read, create, and delete articles. 
      This foundational project paved the way for using Supabase in subsequent projects.
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
  },
  [ProjectDatabaseKeys.Noodle]: {
    name: `Noodle`,
    description: `
      During my second year of university, my group and I initiated a project on an open-source learning platform which served as my introduction to full-stack development. 
      This app aids students in managing tasks, assignments, exams, and storing notes and resources.
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
      SkillDatabaseKeys.TRPC,
      SkillDatabaseKeys.StoryBooks,
      SkillDatabaseKeys.NxJS,
      SkillDatabaseKeys.Jest,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.PNPM,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.DesignPatterns,

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
  },
  [ProjectDatabaseKeys.ConvoGPT]: {
    name: `ConvoGPT`,
    description: `
      In my first year of university, my group and I developed a simple game using SimpleGUI for a project. 
      We manually implemented the game's physics using vector theory and physics concepts. 
      Since there were no tutorials or guides available, we relied heavily on the library's documentation.
      `,
    repositoryURL: `https://github.com/mbeps/convo-gpt`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Jotai,
      SkillDatabaseKeys.Supabase,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.OpenAI,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.Yarn,
      SkillDatabaseKeys.ESLint,
      SkillDatabaseKeys.Prettier,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.DesignPatterns,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.ConvoGPT),
  },

  //^ Backend Web Development Projects
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
      SkillDatabaseKeys.Black,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.DesignPatterns,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_FinalYearProject],
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
  },

  //^ Artificial Intelligence Projects
  [ProjectDatabaseKeys.AdultIncomePrediction]: {
    name: "Adult Income Prediction",
    description: `A project leveraging the UCI Adult Income dataset to predict income brackets using a RandomForestClassifier. Emphasis is on feature engineering, data preprocessing with One-Hot Encoding, and model optimization through hyperparameter tuning.`,
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
      SkillDatabaseKeys.Black,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectDatabaseKeys.HousePricePrediction]: {
    name: "House Price Prediction",
    description: `An analytical approach to predicting California housing prices using the RandomForestRegressor and LinearRegressor, with a focus on data preprocessing and feature engineering.`,
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
      SkillDatabaseKeys.Black,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectDatabaseKeys.MachineLearningAssignment1]: {
    name: `Machine Learning Assignment 1`,
    description: `
      Be able to implement machine-learning algorithms, using the Nearest Neighbours algorithm as an example. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in science and technology.
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
      SkillDatabaseKeys.Black,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_MachineLearning],
  },
  [ProjectDatabaseKeys.MachineLearningAssignment2]: {
    name: `Machine Learning Assignment 2`,
    description: `
      Be able to use and implement machine-learning algorithms, 
      with the Lasso and inductive conformal prediction algorithms as examples. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in industry and medicine.
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
      SkillDatabaseKeys.Black,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectDatabaseKeys.MachineLearningAssignment3]: {
    name: `Machine Learning Assignment 3`,
    description: `
      Be able to use and implement machine-learning algorithms, 
      with the SVM, neural networks, and cross-conformal prediction algorithms as examples. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in industry.
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
      SkillDatabaseKeys.Black,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_MachineLearning],
  },
  [ProjectDatabaseKeys.MachineLearningLabQuestions]: {
    name: `Machine Learning Lab Questions`,
    description: `
      Implemented various machine learning algorithms and techniques learned during the course, 
      such as Nearest Neighbours, conformal prediction, linear regression, Ridge Regression, Lasso, data preprocessing, parameter selection, 
      kernels, neural networks, support vector machines, scikit-learn pipelines, and cross-conformal predictors.`,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Labs-Questions`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Black,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_MachineLearning],
  },
  [ProjectDatabaseKeys.ComputationalFinanceAssignment]: {
    name: "Computational Finance Assignment",
    description: `
      An assignment exploring valuation of options using methods like Black-Scholes, binomial trees, and Monte Carlo. 
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
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.Calculus,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Statistics,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.Mechanics,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_ComputationalFinance],
  },
  [ProjectDatabaseKeys.MachineLearningTheoryPractice]: {
    name: "Machine Learning Theory Practice",
    description: `
      A collection of machine learning theory questions and answers.
      This is used to practice for exams and tests.
      `,
    category: ProjectCategoriesEnum.MachineLearning,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Theory-Practice`,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.Hyperparameters,
      SkillDatabaseKeys.Boosting,
      SkillDatabaseKeys.NeuralNetworks,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Statistics,
      SkillDatabaseKeys.Probability,
    ],
    relatedMaterials: [ModuleDatabaseKeys.RHUL_MachineLearning],
  },

  //^ Java Assignments
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
      SkillDatabaseKeys.Checkstyle,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    category: ProjectCategoriesEnum.JavaAssignments,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_SoftwareEngineering],
  },
  [ProjectDatabaseKeys.BotanicGardenPlannerAssignment]: {
    name: `Botanic-Garden-Planner`,
    description: `
      Simple botanic garden planner app built using Java.
      This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Botanic-Garden-Planner`,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    category: ProjectCategoriesEnum.JavaAssignments,
    archived: true,
  },
  [ProjectDatabaseKeys.TrackAndTraceAssignment]: {
    name: "Track & Trace",
    description: `Simple app to track Covid cases. 
      This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Track_and_Trace`,
    category: ProjectCategoriesEnum.JavaAssignments,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    relatedMaterials: [ModuleDatabaseKeys.RHUL_ObjectOrientedProgramming1],
    archived: true,
  },
  [ProjectDatabaseKeys.HollomonAssignment]: {
    name: `Hollomon`,
    description: `This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Hollomon`,
    category: ProjectCategoriesEnum.JavaAssignments,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.Git,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    relatedMaterials: [ModuleDatabaseKeys.RHUL_ObjectOrientedProgramming2],

    archived: true,
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
    category: ProjectCategoriesEnum.JavaAssignments,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_Databases],

    archived: true,
  },

  //^ Game Development Projects
  [ProjectDatabaseKeys.OsmosGame]: {
    name: `Osmos Game`,
    description: `
      This is a simple game created using SimpleGUI for a group project in my first year of university. 
      The physics of the game were done manually using vector theory and physics concepts.
      This required us to rely on the documentation as there was no tutorials or guides on how to use the library.
      `,
    repositoryURL: `https://github.com/mbeps/Osmos_Game`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.SimpleGUI,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Black,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.Leadership,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.Communication,
    ],
    category: ProjectCategoriesEnum.GameDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.OsmosGame),
    relatedMaterials: [ModuleDatabaseKeys.RHUL_ProgrammingLaboratory],
  },
  [ProjectDatabaseKeys.SurfaceFight]: {
    name: "Surface Fight",
    description: `
      The game is about a robot shooting skeletons and trying to survive. 
      Every time he kills all the skeletons more of them will come at once.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillDatabaseKeys.GameMakerLanguage,
      SkillDatabaseKeys.GameMakerStudio,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/surface-fight",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.SurfaceFight),
  },
  [ProjectDatabaseKeys.Platformer]: {
    name: "Platformer",
    description: `
      This is a basic and easy to play platform game which is similar to Super Mario.
      Players must defeat the enemies and reach the end of the level.
      This is also a multiplayer game.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillDatabaseKeys.GameMakerLanguage,
      SkillDatabaseKeys.GameMakerStudio,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/platformer",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.Platformer),
  },
  [ProjectDatabaseKeys.PlatformerDeathWalk]: {
    name: "Platformer Death Walk",
    description: `
      This is a basic and easy to play platform game which is similar to Super Mario.
      Players must defeat all the enemies to reach the end of the level.
      This is also a multiplayer game.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillDatabaseKeys.GameMakerLanguage,
      SkillDatabaseKeys.GameMakerStudio,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/platformer-death-walk",
    archived: true,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.PlatformerDeathWalk
    ),
  },
  [ProjectDatabaseKeys.CodingBreakout]: {
    name: "Coding Breakout",
    description: `
      In Breakout, a layer of bricks lines the top third of the screen
      and the goal is to destroy them all by repeatedly bouncing a ball off a paddle into them.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillDatabaseKeys.GameMakerLanguage,
      SkillDatabaseKeys.GameMakerStudio,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/coding-break-out",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.CodingBreakout),
  },
  [ProjectDatabaseKeys.CatchMaruf]: {
    name: "Catch Maruf",
    description: `
      A basic game where the focus is to click on a character
      as many times as possible within a given time limit.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillDatabaseKeys.GameMakerLanguage,
      SkillDatabaseKeys.GameMakerStudio,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/catch-maruf",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.CatchMaruf),
  },
  [ProjectDatabaseKeys.AgainstGravity]: {
    name: "Against Gravity",
    description: `
      A basic game where the aim is to reach the end of the level
      by making use of the gravity switch and avoiding the obstacles.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillDatabaseKeys.GameMakerLanguage,
      SkillDatabaseKeys.GameMakerStudio,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/against-gravity",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.AgainstGravity),
  },
  [ProjectDatabaseKeys.ScrollingShooter]: {
    name: "Scrolling Shooter",
    description: `
      This is a game where the aim is to shoot the enemies and avoid their bullets.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillDatabaseKeys.GameMakerLanguage,
      SkillDatabaseKeys.GameMakerStudio,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/scrolling-shooter",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.ScrollingShooter),
  },
  [ProjectDatabaseKeys.Dungeon]: {
    name: "Dungeon",
    description: `
      A very simple 3D game where the aim is to reach the end of the level through the maze.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillDatabaseKeys.GameMakerLanguage,
      SkillDatabaseKeys.GameMakerStudio,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/dungeon-",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.Dungeon),
  },
  [ProjectDatabaseKeys.VegNinja]: {
    name: " Veg Ninja",
    description: `
      A simple game where the aim is to cut the vegetables and avoid the bombs.
      This is very similar to the popular game Fruit Ninja.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillDatabaseKeys.GameMakerLanguage,
      SkillDatabaseKeys.GameMakerStudio,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/vej-ninja",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.VegNinja),
  },
  [ProjectDatabaseKeys.AngryCatsSpace]: {
    name: " Angry Cats Space",
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillDatabaseKeys.GameMakerLanguage,
      SkillDatabaseKeys.GameMakerStudio,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/angry-cats-space",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.AngryCatsSpace),
  },
  [ProjectDatabaseKeys.AngryCats]: {
    name: " Angry Cats",
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillDatabaseKeys.GameMakerLanguage,
      SkillDatabaseKeys.GameMakerStudio,

      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/angry-cats-space",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.AngryCats),
  },

  //^ Other Projects
  [ProjectDatabaseKeys.SearchingAndSortingAlgorithms]: {
    name: `Searching & Sorting Algorithms`,
    description: `
      Jupyter Notebook containing various searching and sorting algorithms.
      Each algorithms is explained. 
      All the algorithms are also compared to each other. 
    `,
    category: ProjectCategoriesEnum.Other,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Jupyter,
      SkillDatabaseKeys.Poetry,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.Black,

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
  },
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
    category: ProjectCategoriesEnum.Other,
    archived: true,
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
