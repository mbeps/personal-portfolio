import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import addProjectThumbnail from "@/actions/material/projects/addProjectThumbnail";
import ProjectKeysEnum from "@/enums/DatabaseKeysEnums/ProjectKeysEnum";
import ProjectCategoriesEnum from "@/enums/ProjectCategoriesEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import skillDatabase from "./skills";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";

/**
 * Hashmap of projects with keys as {@link SkillKeysEnum} and values as {@link ProjectInterface}.
 * The order of the projects is the order that is used when displaying the projects on the website.
 * The order skills is the order that is used when displaying the skills on the website.
 */
const projectMap: Database<ProjectInterface> = {
  [ProjectKeysEnum.CircusDiscussions]: {
    name: `Circus Discussions`,
    description: `
      For a final year university project, 
      a social media platform was developed enabling users to form communities, 
      start discussions, and comment on them, connecting with like-minded individuals.
      `,
    repositoryURL: `https://github.com/mbeps/next_discussion_platform`,
    deploymentURL: `https://circus-discussion.vercel.app/`,
    skills: [
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.ReactJS,
      SkillKeysEnum.ChakraUI,
      SkillKeysEnum.Firebase,
      SkillKeysEnum.Recoil,
      SkillKeysEnum.Docker,
      SkillKeysEnum.GitHubActions,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.GCP,
      SkillKeysEnum.Git,
      SkillKeysEnum.HTML,
      SkillKeysEnum.CSS,
      SkillKeysEnum.Yarn,
      SkillKeysEnum.ESLint,
      SkillKeysEnum.Prettier,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.TimeManagement,
      SkillKeysEnum.ScopeManagement,
      SkillKeysEnum.StakeholderManagement,
      SkillKeysEnum.Communication,
      SkillKeysEnum.RiskManagement,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.DesignPatterns,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.CircusDiscussions),
  },
  [ProjectKeysEnum.RingmasterMessaging]: {
    name: `Ringmaster Messaging`,
    description: `
      A custom back-end learning project involved creating a straightforward messaging app. 
      Users can chat one-on-one, participate in group chats, send text messages, share images, view active users, and personalize their profiles. 
      `,
    repositoryURL: `https://github.com/mbeps/ringmaster-messaging`,
    deploymentURL: `https://ringmaster-messaging.vercel.app/`,

    skills: [
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.ReactJS,
      SkillKeysEnum.NextAuth,
      SkillKeysEnum.MongoDB,
      SkillKeysEnum.Prisma,
      SkillKeysEnum.Pusher,
      SkillKeysEnum.Cloudinary,
      SkillKeysEnum.REST,
      SkillKeysEnum.TailwindCSS,
      SkillKeysEnum.HeadlessUI,
      SkillKeysEnum.Zustand,
      SkillKeysEnum.Docker,
      SkillKeysEnum.GitHubActions,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Git,
      SkillKeysEnum.HTML,
      SkillKeysEnum.CSS,
      SkillKeysEnum.Yarn,
      SkillKeysEnum.ESLint,
      SkillKeysEnum.Prettier,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.DesignPatterns,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.RingmasterMessaging),
  },
  [ProjectKeysEnum.MagicianAI]: {
    name: `Magician AI`,
    description: `
      Magician AI is a SaaS platform that leverages AI to enable users to generate various media types and have dynamic conversations. 
      Developing this project allowed me to explore Stripe, Clerk authentication, and unique AI APIs.
  `,
    repositoryURL: `https://github.com/mbeps/magician-ai`,
    deploymentURL: "https://magician-ai.vercel.app/",
    skills: [
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.ReactJS,
      SkillKeysEnum.ShadcnUI,
      SkillKeysEnum.RadixUI,
      SkillKeysEnum.TailwindCSS,
      SkillKeysEnum.MySQL,
      SkillKeysEnum.ClerkAuth,
      SkillKeysEnum.Prisma,
      SkillKeysEnum.Stripe,
      SkillKeysEnum.REST,
      SkillKeysEnum.OpenAI,
      SkillKeysEnum.ReplicateAI,
      SkillKeysEnum.Zustand,
      SkillKeysEnum.Docker,
      SkillKeysEnum.GitHubActions,
      SkillKeysEnum.GCP,
      SkillKeysEnum.Git,
      SkillKeysEnum.HTML,
      SkillKeysEnum.CSS,
      SkillKeysEnum.Yarn,
      SkillKeysEnum.ESLint,
      SkillKeysEnum.Prettier,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.DesignPatterns,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.MagicianAI),
  },
  [ProjectKeysEnum.DrumrollMusic]: {
    name: `Drumroll Music`,
    description: `
      My first major project using Supabase was a basic music streaming site. 
      Users can upload songs, search and listen to music, as well as like the songs they enjoy.
      `,
    repositoryURL: `https://github.com/mbeps/drumroll-music`,
    skills: [
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.ReactJS,
      SkillKeysEnum.Supabase,
      SkillKeysEnum.PostgreSQL,
      SkillKeysEnum.TailwindCSS,
      SkillKeysEnum.RadixUI,
      SkillKeysEnum.Zustand,
      SkillKeysEnum.GitHubActions,
      SkillKeysEnum.GCP,
      SkillKeysEnum.Git,
      SkillKeysEnum.HTML,
      SkillKeysEnum.CSS,
      SkillKeysEnum.Yarn,
      SkillKeysEnum.ESLint,
      SkillKeysEnum.Prettier,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.DesignPatterns,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.DrumrollMusic),
  },
  [ProjectKeysEnum.JokerNotes]: {
    name: "Joker Notes",
    description: `
      A simple rich-text note-taking app that allows users to create, edit, and delete notes.
      `,
    repositoryURL: `https://github.com/mbeps/joker-notes`,
    skills: [
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.ReactJS,
      SkillKeysEnum.ShadcnUI,
      SkillKeysEnum.RadixUI,
      SkillKeysEnum.TailwindCSS,
      SkillKeysEnum.Zustand,
      SkillKeysEnum.Zod,
      SkillKeysEnum.Convex,
      SkillKeysEnum.EdgeStore,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.GitHubActions,
      SkillKeysEnum.HTML,
      SkillKeysEnum.CSS,
      SkillKeysEnum.Yarn,
      SkillKeysEnum.ESLint,
      SkillKeysEnum.Prettier,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.DesignPatterns,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    deploymentURL: "https://joker-notes.vercel.app/",
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.JokerNotes),
  },

  //^ Extra Web Development Projects
  [ProjectKeysEnum.Quizmify]: {
    name: "Quizmify",
    description: `An intuitive platform for dynamic quiz generation. 
      Users can test their knowledge across various topics, choosing between multiple-choice questions or fill-in-the-gap style challenges. 
      With immediate feedback and score tracking, users enhance their understanding.`,
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    skills: [
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.ReactJS,
      SkillKeysEnum.ShadcnUI,
      SkillKeysEnum.RadixUI,
      SkillKeysEnum.TailwindCSS,
      SkillKeysEnum.Prisma,
      SkillKeysEnum.Axios,
      SkillKeysEnum.NextAuth,
      SkillKeysEnum.Zod,
      SkillKeysEnum.MySQL,
      SkillKeysEnum.OpenAI,
      SkillKeysEnum.Docker,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.HTML,
      SkillKeysEnum.CSS,
      SkillKeysEnum.Yarn,
      SkillKeysEnum.ESLint,
      SkillKeysEnum.Prettier,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.DesignPatterns,
      SkillKeysEnum.Algorithms,
    ],
    repositoryURL: "https://github.com/mbeps/quizmify",
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.Quizmify),
  },
  [ProjectKeysEnum.SideshowArticles]: {
    name: `Sideshow Articles`,
    description: `
      To familiarize myself with Supabase, I developed a simple website for reading and writing articles. 
      Users can read, create, and delete articles. 
      This foundational project paved the way for using Supabase in subsequent projects.
      `,
    repositoryURL: `https://github.com/mbeps/sideshow-articles`,
    skills: [
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.ReactJS,
      SkillKeysEnum.Supabase,
      SkillKeysEnum.PostgreSQL,
      SkillKeysEnum.NextUI,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.HTML,
      SkillKeysEnum.CSS,
      SkillKeysEnum.NPM,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.SideshowArticles),
  },
  [ProjectKeysEnum.Noodle]: {
    name: `Noodle`,
    description: `
      During my second year of university, my group and I initiated a project on an open-source learning platform which served as my introduction to full-stack development. 
      This app aids students in managing tasks, assignments, exams, and storing notes and resources.
      `,
    repositoryURL: `https://github.com/ixahmedxi/noodle`,
    deploymentURL: `https://noodle.run/`,
    skills: [
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.ReactJS,
      SkillKeysEnum.ShadcnUI,
      SkillKeysEnum.RadixUI,
      SkillKeysEnum.TailwindCSS,
      SkillKeysEnum.MySQL,
      SkillKeysEnum.Prisma,
      SkillKeysEnum.TRPC,
      SkillKeysEnum.StoryBooks,
      SkillKeysEnum.NxJS,
      SkillKeysEnum.Jest,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.GitHubActions,
      SkillKeysEnum.Git,
      SkillKeysEnum.HTML,
      SkillKeysEnum.CSS,
      SkillKeysEnum.PNPM,
      SkillKeysEnum.ESLint,
      SkillKeysEnum.Prettier,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.DesignPatterns,

      SkillKeysEnum.Algorithms,
      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.Teamwork,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.Noodle),
  },
  [ProjectKeysEnum.ConvoGPT]: {
    name: `ConvoGPT`,
    description: `
      In my first year of university, my group and I developed a simple game using SimpleGUI for a project. 
      We manually implemented the game's physics using vector theory and physics concepts. 
      Since there were no tutorials or guides available, we relied heavily on the library's documentation.
      `,
    repositoryURL: `https://github.com/mbeps/convo-gpt`,
    skills: [
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.ReactJS,
      SkillKeysEnum.TailwindCSS,
      SkillKeysEnum.Jotai,
      SkillKeysEnum.Supabase,
      SkillKeysEnum.PostgreSQL,
      SkillKeysEnum.OpenAI,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.HTML,
      SkillKeysEnum.CSS,
      SkillKeysEnum.Yarn,
      SkillKeysEnum.ESLint,
      SkillKeysEnum.Prettier,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.DesignPatterns,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.ConvoGPT),
  },

  //^ Backend Web Development Projects
  [ProjectKeysEnum.FlaskForumBackend]: {
    name: `Flask Forum Backend`,
    description: `
      This is a custom backend for the first iteration of the discussion platform. 
      This was created to learn how to create a custom backend using Python and Flask.
      `,
    repositoryURL: `https://github.com/mbeps/Forum-Discussion-Flask-Backend`,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.Flask,
      SkillKeysEnum.MySQL,
      SkillKeysEnum.SQLAlchemy,
      SkillKeysEnum.REST,
      SkillKeysEnum.Poetry,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.GitLab,
      SkillKeysEnum.GitHubActions,
      SkillKeysEnum.Git,
      SkillKeysEnum.Black,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.TimeManagement,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.DesignPatterns,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
  },
  [ProjectKeysEnum.FlaskJWTAuthentication]: {
    name: `Flask JWT Authentication`,
    description: `
      A simple Flask app to learn how to use JWT for authentication.
      This serves as a foundation to using JWT in other projects using Flask.
      `,
    repositoryURL: `https://github.com/mbeps/Flask_JWT_Auth`,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.Flask,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Git,
      SkillKeysEnum.Poetry,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },
  [ProjectKeysEnum.DjangoAuthentication]: {
    name: `Django Authentication`,
    description: `
      A simple Django app to learn how to use Django with tokens for authentication.
      This serves as a foundation to using Django in other projects.
      `,
    repositoryURL: `https://github.com/mbeps/Django_Auth_Sys`,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.Django,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Poetry,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },
  [ProjectKeysEnum.ClerkAuthentication]: {
    name: `Clerk Authentication`,
    description: `
      A simple Next.JS app to experiment with the Clerk Authentication SDK. 
      `,
    repositoryURL: `https://github.com/mbeps/clerk-demo`,
    skills: [
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.ClerkAuth,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Yarn,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.TimeManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },
  [ProjectKeysEnum.Auth0Authentication]: {
    name: `Auth0 Authentication`,
    description: `
      A simple Next.JS app to experiment with the Auth0 Authentication SDK. 
      This does not use the new Next.JS 13 app router as it is not supported as of the time of making this demo. 
      `,
    repositoryURL: `https://github.com/mbeps/nextjs-auth0`,
    skills: [
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.Auth0,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Git,
      SkillKeysEnum.Yarn,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },

  //^ Artificial Intelligence Projects
  [ProjectKeysEnum.AdultIncomePrediction]: {
    name: "Adult Income Prediction",
    description: `A project leveraging the UCI Adult Income dataset to predict income brackets using a RandomForestClassifier. Emphasis is on feature engineering, data preprocessing with One-Hot Encoding, and model optimization through hyperparameter tuning.`,
    repositoryURL: "https://github.com/mbeps/Adults_Income_Prediction",
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.ScikitLearn,
      SkillKeysEnum.NumPy,
      SkillKeysEnum.Pandas,
      SkillKeysEnum.Matplotlib,
      SkillKeysEnum.Seaborn,
      SkillKeysEnum.Jupyter,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Poetry,
      SkillKeysEnum.Black,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectKeysEnum.HousePricePrediction]: {
    name: "House Price Prediction",
    description: `An analytical approach to predicting California housing prices using the RandomForestRegressor and LinearRegressor, with a focus on data preprocessing and feature engineering.`,
    repositoryURL: "https://github.com/mbeps/House_Price_Prediction",
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.ScikitLearn,
      SkillKeysEnum.NumPy,
      SkillKeysEnum.Pandas,
      SkillKeysEnum.Matplotlib,
      SkillKeysEnum.Seaborn,
      SkillKeysEnum.Jupyter,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Poetry,
      SkillKeysEnum.Black,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectKeysEnum.MachineLearningAssignment1]: {
    name: `Assignment 1`,
    description: `
      Be able to implement machine-learning algorithms, using the Nearest Neighbours algorithm as an example. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in science and technology.
      `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-1`,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.ScikitLearn,
      SkillKeysEnum.NumPy,
      SkillKeysEnum.Matplotlib,
      SkillKeysEnum.Jupyter,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Black,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectKeysEnum.MachineLearningAssignment2]: {
    name: `Assignment 2`,
    description: `
      Be able to use and implement machine-learning algorithms, 
      with the Lasso and inductive conformal prediction algorithms as examples. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in industry and medicine.
    `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-2`,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.ScikitLearn,
      SkillKeysEnum.NumPy,
      SkillKeysEnum.Matplotlib,
      SkillKeysEnum.Jupyter,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Black,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectKeysEnum.MachineLearningAssignment3]: {
    name: `Assignment 3`,
    description: `
      Be able to use and implement machine-learning algorithms, 
      with the SVM, neural networks, and cross-conformal prediction algorithms as examples. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in industry.
      `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-3`,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.ScikitLearn,
      SkillKeysEnum.NumPy,
      SkillKeysEnum.Matplotlib,
      SkillKeysEnum.Jupyter,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Black,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectKeysEnum.MachineLearningLabQuestions]: {
    name: `Lab Questions`,
    description: `
      Implemented various machine learning algorithms and techniques learned during the course, 
      such as Nearest Neighbours, conformal prediction, linear regression, Ridge Regression, Lasso, data preprocessing, parameter selection, 
      kernels, neural networks, support vector machines, scikit-learn pipelines, and cross-conformal predictors.`,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Labs-Questions`,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.ScikitLearn,
      SkillKeysEnum.NumPy,
      SkillKeysEnum.Matplotlib,
      SkillKeysEnum.Jupyter,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Black,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectKeysEnum.ComputationalFinanceAssignment]: {
    name: "Computational Finance Assignment",
    description: `
      An assignment exploring valuation of options using methods like Black-Scholes, binomial trees, and Monte Carlo. 
      Also includes theoretical aspects of put-call parity and financial arbitrage opportunities.`,
    repositoryURL: `https://github.com/mbeps/Computation_Finance_Assignment`,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.NumPy,
      SkillKeysEnum.Matplotlib,
      SkillKeysEnum.Jupyter,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,

      SkillKeysEnum.Probability,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.Algorithms,
      SkillKeysEnum.Algebra,
      SkillKeysEnum.Calculus,
      SkillKeysEnum.LinearAlgebra,
      SkillKeysEnum.Statistics,
      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.Mechanics,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectKeysEnum.MachineLearningTheoryPractice]: {
    name: "Machine Learning Theory Practice",
    description: `
      A collection of machine learning theory questions and answers.
      This is used to practice for exams and tests.
      `,
    category: ProjectCategoriesEnum.MachineLearning,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Theory-Practice`,
    skills: [
      SkillKeysEnum.MachineLearning,
      SkillKeysEnum.DataScience,
      SkillKeysEnum.ArtificialIntelligence,
      SkillKeysEnum.Hyperparameters,
      SkillKeysEnum.Boosting,
      SkillKeysEnum.NeuralNetworks,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.Algorithms,
      SkillKeysEnum.LinearAlgebra,
      SkillKeysEnum.Statistics,
      SkillKeysEnum.Probability,
    ],
  },

  //^ Java Assignments
  [ProjectKeysEnum.JavaCalculatorAssignment]: {
    name: `Calculator`,
    description: `
      Simple calculator app built using Java as a Maven project. 
      This was a second year Java assignment focused on software engineering methodologies. 
      The project involved creating a calculator application, emphasizing the importance of proper version control procedures, 
      test-driven development, documentation, and code quality assurance through linting and styling. 
      The assignment highlighted the significance of following efficient software development processes rather than just focusing on the final implementation.  `,
    repositoryURL: `https://github.com/mbeps/Calculator-Assignment`,
    skills: [
      SkillKeysEnum.Java,
      SkillKeysEnum.Maven,
      SkillKeysEnum.JUnit,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Checkstyle,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    category: ProjectCategoriesEnum.JavaAssignments,
  },
  [ProjectKeysEnum.BotanicGardenPlannerAssignment]: {
    name: `Botanic-Garden-Planner`,
    description: `
      Simple botanic garden planner app built using Java.
      This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Botanic-Garden-Planner`,
    skills: [
      SkillKeysEnum.Java,
      SkillKeysEnum.JUnit,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    category: ProjectCategoriesEnum.JavaAssignments,
    archived: true,
  },
  [ProjectKeysEnum.TrackAndTraceAssignment]: {
    name: "Track & Trace",
    description: `Simple app to track Covid cases. 
      This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Track_and_Trace`,
    category: ProjectCategoriesEnum.JavaAssignments,
    skills: [
      SkillKeysEnum.Java,
      SkillKeysEnum.JUnit,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    archived: true,
  },
  [ProjectKeysEnum.HollomonAssignment]: {
    name: `Hollomon`,
    description: `This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Hollomon`,
    category: ProjectCategoriesEnum.JavaAssignments,
    skills: [
      SkillKeysEnum.Java,
      SkillKeysEnum.JUnit,
      SkillKeysEnum.Git,
      SkillKeysEnum.Git,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    archived: true,
  },
  [ProjectKeysEnum.DatabasesMiniProject]: {
    name: `Database Mini Project`,
    description: `Learning to interact with a database using Java.`,
    repositoryURL: `https://github.com/mbeps/DatabasesMiniProject`,
    skills: [
      SkillKeysEnum.Java,
      SkillKeysEnum.PostgreSQL,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    category: ProjectCategoriesEnum.JavaAssignments,
    archived: true,
  },

  //^ Game Development Projects
  [ProjectKeysEnum.OsmosGame]: {
    name: `Osmos Game`,
    description: `
      This is a simple game created using SimpleGUI for a group project in my first year of university. 
      The physics of the game were done manually using vector theory and physics concepts.
      This required us to rely on the documentation as there was no tutorials or guides on how to use the library.
      `,
    repositoryURL: `https://github.com/mbeps/Osmos_Game`,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.SimpleGUI,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Black,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.Leadership,
      SkillKeysEnum.Teamwork,
      SkillKeysEnum.Communication,
    ],
    category: ProjectCategoriesEnum.GameDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.OsmosGame),
  },
  [ProjectKeysEnum.SurfaceFight]: {
    name: "Surface Fight",
    description: `
      The game is about a robot shooting skeletons and trying to survive. 
      Every time he kills all the skeletons more of them will come at once.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillKeysEnum.GameMakerLanguage,
      SkillKeysEnum.GameMakerStudio,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/surface-fight",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.SurfaceFight),
  },
  [ProjectKeysEnum.Platformer]: {
    name: "Platformer",
    description: `
      This is a basic and easy to play platform game which is similar to Super Mario.
      Players must defeat the enemies and reach the end of the level.
      This is also a multiplayer game.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillKeysEnum.GameMakerLanguage,
      SkillKeysEnum.GameMakerStudio,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/platformer",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.Platformer),
  },
  [ProjectKeysEnum.PlatformerDeathWalk]: {
    name: "Platformer Death Walk",
    description: `
      This is a basic and easy to play platform game which is similar to Super Mario.
      Players must defeat all the enemies to reach the end of the level.
      This is also a multiplayer game.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillKeysEnum.GameMakerLanguage,
      SkillKeysEnum.GameMakerStudio,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/platformer-death-walk",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.PlatformerDeathWalk),
  },
  [ProjectKeysEnum.CodingBreakout]: {
    name: "Coding Breakout",
    description: `
      In Breakout, a layer of bricks lines the top third of the screen
      and the goal is to destroy them all by repeatedly bouncing a ball off a paddle into them.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillKeysEnum.GameMakerLanguage,
      SkillKeysEnum.GameMakerStudio,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/coding-break-out",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.CodingBreakout),
  },
  [ProjectKeysEnum.CatchMaruf]: {
    name: "Catch Maruf",
    description: `
      A basic game where the focus is to click on a character
      as many times as possible within a given time limit.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillKeysEnum.GameMakerLanguage,
      SkillKeysEnum.GameMakerStudio,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/catch-maruf",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.CatchMaruf),
  },
  [ProjectKeysEnum.AgainstGravity]: {
    name: "Against Gravity",
    description: `
      A basic game where the aim is to reach the end of the level
      by making use of the gravity switch and avoiding the obstacles.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillKeysEnum.GameMakerLanguage,
      SkillKeysEnum.GameMakerStudio,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/against-gravity",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.AgainstGravity),
  },
  [ProjectKeysEnum.ScrollingShooter]: {
    name: "Scrolling Shooter",
    description: `
      This is a game where the aim is to shoot the enemies and avoid their bullets.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillKeysEnum.GameMakerLanguage,
      SkillKeysEnum.GameMakerStudio,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/scrolling-shooter",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.ScrollingShooter),
  },
  [ProjectKeysEnum.Dungeon]: {
    name: "Dungeon",
    description: `
      A very simple 3D game where the aim is to reach the end of the level through the maze.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillKeysEnum.GameMakerLanguage,
      SkillKeysEnum.GameMakerStudio,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/dungeon-",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.Dungeon),
  },
  [ProjectKeysEnum.VegNinja]: {
    name: " Veg Ninja",
    description: `
      A simple game where the aim is to cut the vegetables and avoid the bombs.
      This is very similar to the popular game Fruit Ninja.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillKeysEnum.GameMakerLanguage,
      SkillKeysEnum.GameMakerStudio,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/vej-ninja",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.VegNinja),
  },
  [ProjectKeysEnum.AngryCatsSpace]: {
    name: " Angry Cats Space",
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillKeysEnum.GameMakerLanguage,
      SkillKeysEnum.GameMakerStudio,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/angry-cats-space",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.AngryCatsSpace),
  },
  [ProjectKeysEnum.AngryCats]: {
    name: " Angry Cats",
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillKeysEnum.GameMakerLanguage,
      SkillKeysEnum.GameMakerStudio,

      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/angry-cats-space",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectKeysEnum.AngryCats),
  },

  //^ Other Projects
  [ProjectKeysEnum.SearchingAndSortingAlgorithms]: {
    name: `Searching & Sorting Algorithms`,
    description: `
      Jupyter Notebook containing various searching and sorting algorithms.
      Each algorithms is explained. 
      All the algorithms are also compared to each other. 
    `,
    category: ProjectCategoriesEnum.Other,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.Matplotlib,
      SkillKeysEnum.NumPy,
      SkillKeysEnum.Jupyter,
      SkillKeysEnum.Poetry,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.Black,

      SkillKeysEnum.DataStructures,
      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.Algorithms,
    ],
    repositoryURL: "https://github.com/mbeps/algorithms",
  },
  [ProjectKeysEnum.AutomatedSetup]: {
    name: `Automated Setup`,
    description: `
      A shell script which automates the setup of a new Linux machine.
      This is specifically for my Fedora install.
      `,
    skills: [
      SkillKeysEnum.ShellScript,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,

      SkillKeysEnum.DataStructures,
      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    repositoryURL: `https://github.com/mbeps/AutomatedSetup`,
    category: ProjectCategoriesEnum.Other,
  },
  [ProjectKeysEnum.Leetcode]: {
    name: `Leetcode Solutions`,
    description: `
      A collection of Leetcode solutions in Python. 
      This is used to practice algorithms and data structures.
      They are also used to practice unit testing.
      CI/CD is also used to run the tests when merging to the main branch.
      `,
    repositoryURL: `https://github.com/stars/mbeps/lists/leetcode`,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.PyTest,
      SkillKeysEnum.Git,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.GitHubActions,

      SkillKeysEnum.DataStructures,
      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Creativity,
      SkillKeysEnum.Adaptability,
    ],
    category: ProjectCategoriesEnum.Other,
  },
};

/**
 * List of keys for the projects that can be used to uniquely identify the project.
 */
export const projectKeys: ProjectKeysEnum[] = Object.keys(
  projectMap
) as ProjectKeysEnum[];

/**
 * Hashmap of projects with keys as {@link SkillKeysEnum} and values as {@link ProjectInterface}.
 * The order of the projects is the order that is used when displaying the projects on the website.
 * The order skills is the order that is used when displaying the skills on the website.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const projectDatabase: Database<ProjectInterface> =
  addNestedSkillsMaterialList<ProjectInterface>(
    projectMap,
    skillDatabase,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.General,
    SkillTypesEnum.Hard
  );

export default projectDatabase;
