import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import addProjectThumbnail from "@/actions/material/projects/addProjectThumbnail";
import ProjectSlugEnum from "@/enums/MaterialSlugEnums/ProjectsSlugEnum";
import ProjectCategoriesEnum from "@/enums/ProjectCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import skillsHashmap from "./skills/skills";

/**
 * Array of web development projects.
 * This is used to populate the projects page.
 * @type {ProjectInterface[]}
 */
const projectMap: {
  [key: string]: ProjectInterface;
} = {
  [ProjectSlugEnum.CircusDiscussions]: {
    name: `Circus Discussions`,
    description: `
      For a final year university project, 
      a social media platform was developed enabling users to form communities, 
      start discussions, and comment on them, connecting with like-minded individuals.
      `,
    repositoryURL: `https://github.com/mbeps/next_discussion_platform`,
    deploymentURL: `https://circus-discussion.vercel.app/`,
    skills: [
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.ReactJS,
      SkillSlugEnum.ChakraUI,
      SkillSlugEnum.Firebase,
      SkillSlugEnum.Recoil,
      SkillSlugEnum.Docker,
      SkillSlugEnum.GitHubActions,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.GCP,
      SkillSlugEnum.Git,
      SkillSlugEnum.HTML,
      SkillSlugEnum.CSS,
      SkillSlugEnum.Yarn,
      SkillSlugEnum.ESLint,
      SkillSlugEnum.Prettier,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.TimeManagement,
      SkillSlugEnum.ScopeManagement,
      SkillSlugEnum.StakeholderManagement,
      SkillSlugEnum.Communication,
      SkillSlugEnum.RiskManagement,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.DesignPatterns,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.CircusDiscussions),
  },
  [ProjectSlugEnum.RingmasterMessaging]: {
    name: `Ringmaster Messaging`,
    description: `
      A custom back-end learning project involved creating a straightforward messaging app. 
      Users can chat one-on-one, participate in group chats, send text messages, share images, view active users, and personalize their profiles. 
      `,
    repositoryURL: `https://github.com/mbeps/ringmaster-messaging`,
    deploymentURL: `https://ringmaster-messaging.vercel.app/`,

    skills: [
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.ReactJS,
      SkillSlugEnum.NextAuth,
      SkillSlugEnum.MongoDB,
      SkillSlugEnum.Prisma,
      SkillSlugEnum.Pusher,
      SkillSlugEnum.Cloudinary,
      SkillSlugEnum.REST,
      SkillSlugEnum.TailwindCSS,
      SkillSlugEnum.HeadlessUI,
      SkillSlugEnum.Zustand,
      SkillSlugEnum.Docker,
      SkillSlugEnum.GitHubActions,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.GCP,
      SkillSlugEnum.Git,
      SkillSlugEnum.HTML,
      SkillSlugEnum.CSS,
      SkillSlugEnum.Yarn,
      SkillSlugEnum.ESLint,
      SkillSlugEnum.Prettier,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.DesignPatterns,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.RingmasterMessaging),
  },
  [ProjectSlugEnum.MagicianAI]: {
    name: `Magician AI`,
    description: `
      Magician AI is a SaaS platform that leverages AI to enable users to generate various media types and have dynamic conversations. 
      Developing this project allowed me to explore Stripe, Clerk authentication, and unique AI APIs.
  `,
    repositoryURL: `https://github.com/mbeps/magician-ai`,
    deploymentURL: "https://magician-ai.vercel.app/",
    skills: [
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.ReactJS,
      SkillSlugEnum.ShadcnUI,
      SkillSlugEnum.RadixUI,
      SkillSlugEnum.TailwindCSS,
      SkillSlugEnum.MySQL,
      SkillSlugEnum.ClerkAuth,
      SkillSlugEnum.Prisma,
      SkillSlugEnum.Stripe,
      SkillSlugEnum.REST,
      SkillSlugEnum.OpenAI,
      SkillSlugEnum.ReplicateAI,
      SkillSlugEnum.Zustand,
      SkillSlugEnum.Docker,
      SkillSlugEnum.GitHubActions,
      SkillSlugEnum.GCP,
      SkillSlugEnum.Git,
      SkillSlugEnum.HTML,
      SkillSlugEnum.CSS,
      SkillSlugEnum.Yarn,
      SkillSlugEnum.ESLint,
      SkillSlugEnum.Prettier,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.DesignPatterns,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.MagicianAI),
  },
  [ProjectSlugEnum.DrumrollMusic]: {
    name: `Drumroll Music`,
    description: `
      My first major project using Supabase was a basic music streaming site. 
      Users can upload songs, search and listen to music, as well as like the songs they enjoy.
      `,
    repositoryURL: `https://github.com/mbeps/drumroll-music`,
    skills: [
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.ReactJS,
      SkillSlugEnum.Supabase,
      SkillSlugEnum.PostgreSQL,
      SkillSlugEnum.TailwindCSS,
      SkillSlugEnum.RadixUI,
      SkillSlugEnum.Zustand,
      SkillSlugEnum.GitHubActions,
      SkillSlugEnum.GCP,
      SkillSlugEnum.Git,
      SkillSlugEnum.HTML,
      SkillSlugEnum.CSS,
      SkillSlugEnum.Yarn,
      SkillSlugEnum.ESLint,
      SkillSlugEnum.Prettier,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.DesignPatterns,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.DrumrollMusic),
  },
  [ProjectSlugEnum.JokerNotes]: {
    name: "Joker Notes",
    description: `
      A simple rich-text note-taking app that allows users to create, edit, and delete notes.
      `,
    repositoryURL: `https://github.com/mbeps/joker-notes`,
    skills: [
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.ReactJS,
      SkillSlugEnum.ShadcnUI,
      SkillSlugEnum.RadixUI,
      SkillSlugEnum.TailwindCSS,
      SkillSlugEnum.Zustand,
      SkillSlugEnum.Zod,
      SkillSlugEnum.Convex,
      SkillSlugEnum.EdgeStore,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.GitHubActions,
      SkillSlugEnum.HTML,
      SkillSlugEnum.CSS,
      SkillSlugEnum.Yarn,
      SkillSlugEnum.ESLint,
      SkillSlugEnum.Prettier,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.DesignPatterns,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    deploymentURL: "https://joker-notes.vercel.app/",
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.JokerNotes),
  },

  //^ Extra Web Development Projects
  [ProjectSlugEnum.Quizmify]: {
    name: "Quizmify",
    description: `An intuitive platform for dynamic quiz generation. 
      Users can test their knowledge across various topics, choosing between multiple-choice questions or fill-in-the-gap style challenges. 
      With immediate feedback and score tracking, users enhance their understanding.`,
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    skills: [
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.ReactJS,
      SkillSlugEnum.ShadcnUI,
      SkillSlugEnum.RadixUI,
      SkillSlugEnum.TailwindCSS,
      SkillSlugEnum.Prisma,
      SkillSlugEnum.Axios,
      SkillSlugEnum.NextAuth,
      SkillSlugEnum.Zod,
      SkillSlugEnum.MySQL,
      SkillSlugEnum.OpenAI,
      SkillSlugEnum.Docker,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.HTML,
      SkillSlugEnum.CSS,
      SkillSlugEnum.Yarn,
      SkillSlugEnum.ESLint,
      SkillSlugEnum.Prettier,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.DesignPatterns,
      SkillSlugEnum.Algorithms,
    ],
    repositoryURL: "https://github.com/mbeps/quizmify",
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.Quizmify),
  },
  [ProjectSlugEnum.SideshowArticles]: {
    name: `Sideshow Articles`,
    description: `
      To familiarize myself with Supabase, I developed a simple website for reading and writing articles. 
      Users can read, create, and delete articles. 
      This foundational project paved the way for using Supabase in subsequent projects.
      `,
    repositoryURL: `https://github.com/mbeps/sideshow-articles`,
    skills: [
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.ReactJS,
      SkillSlugEnum.Supabase,
      SkillSlugEnum.PostgreSQL,
      SkillSlugEnum.NextUI,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.HTML,
      SkillSlugEnum.CSS,
      SkillSlugEnum.NPM,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.SideshowArticles),
  },
  [ProjectSlugEnum.Noodle]: {
    name: `Noodle`,
    description: `
      During my second year of university, my group and I initiated a project on an open-source learning platform which served as my introduction to full-stack development. 
      This app aids students in managing tasks, assignments, exams, and storing notes and resources.
      `,
    repositoryURL: `https://github.com/ixahmedxi/noodle`,
    deploymentURL: `https://noodle.run/`,
    skills: [
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.ReactJS,
      SkillSlugEnum.ShadcnUI,
      SkillSlugEnum.RadixUI,
      SkillSlugEnum.TailwindCSS,
      SkillSlugEnum.MySQL,
      SkillSlugEnum.Prisma,
      SkillSlugEnum.TRPC,
      SkillSlugEnum.StoryBooks,
      SkillSlugEnum.NxJS,
      SkillSlugEnum.Jest,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.GitHubActions,
      SkillSlugEnum.Git,
      SkillSlugEnum.HTML,
      SkillSlugEnum.CSS,
      SkillSlugEnum.PNPM,
      SkillSlugEnum.ESLint,
      SkillSlugEnum.Prettier,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.DesignPatterns,

      SkillSlugEnum.Algorithms,
      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.Teamwork,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.Noodle),
  },
  [ProjectSlugEnum.ConvoGPT]: {
    name: `ConvoGPT`,
    description: `
      In my first year of university, my group and I developed a simple game using SimpleGUI for a project. 
      We manually implemented the game's physics using vector theory and physics concepts. 
      Since there were no tutorials or guides available, we relied heavily on the library's documentation.
      `,
    repositoryURL: `https://github.com/mbeps/convo-gpt`,
    skills: [
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.ReactJS,
      SkillSlugEnum.TailwindCSS,
      SkillSlugEnum.Jotai,
      SkillSlugEnum.Supabase,
      SkillSlugEnum.PostgreSQL,
      SkillSlugEnum.OpenAI,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.HTML,
      SkillSlugEnum.CSS,
      SkillSlugEnum.Yarn,
      SkillSlugEnum.ESLint,
      SkillSlugEnum.Prettier,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.DesignPatterns,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.ConvoGPT),
  },

  //^ Backend Web Development Projects
  [ProjectSlugEnum.FlaskForumBackend]: {
    name: `Flask Forum Backend`,
    description: `
      This is a custom backend for the first iteration of the discussion platform. 
      This was created to learn how to create a custom backend using Python and Flask.
      `,
    repositoryURL: `https://github.com/mbeps/Forum-Discussion-Flask-Backend`,
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.Flask,
      SkillSlugEnum.MySQL,
      SkillSlugEnum.SQLAlchemy,
      SkillSlugEnum.REST,
      SkillSlugEnum.Poetry,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.GitLab,
      SkillSlugEnum.GitHubActions,
      SkillSlugEnum.Git,
      SkillSlugEnum.Black,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.TimeManagement,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.DesignPatterns,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
  },
  [ProjectSlugEnum.FlaskJWTAuthentication]: {
    name: `Flask JWT Authentication`,
    description: `
      A simple Flask app to learn how to use JWT for authentication.
      This serves as a foundation to using JWT in other projects using Flask.
      `,
    repositoryURL: `https://github.com/mbeps/Flask_JWT_Auth`,
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.Flask,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Git,
      SkillSlugEnum.Poetry,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },
  [ProjectSlugEnum.DjangoAuthentication]: {
    name: `Django Authentication`,
    description: `
      A simple Django app to learn how to use Django with tokens for authentication.
      This serves as a foundation to using Django in other projects.
      `,
    repositoryURL: `https://github.com/mbeps/Django_Auth_Sys`,
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.Django,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Poetry,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },
  [ProjectSlugEnum.ClerkAuthentication]: {
    name: `Clerk Authentication`,
    description: `
      A simple Next.JS app to experiment with the Clerk Authentication SDK. 
      `,
    repositoryURL: `https://github.com/mbeps/clerk-demo`,
    skills: [
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.ClerkAuth,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Yarn,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.TimeManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },
  [ProjectSlugEnum.Auth0Authentication]: {
    name: `Auth0 Authentication`,
    description: `
      A simple Next.JS app to experiment with the Auth0 Authentication SDK. 
      This does not use the new Next.JS 13 app router as it is not supported as of the time of making this demo. 
      `,
    repositoryURL: `https://github.com/mbeps/nextjs-auth0`,
    skills: [
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.NextJS,
      SkillSlugEnum.Auth0,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Git,
      SkillSlugEnum.Yarn,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },

  //^ Artificial Intelligence Projects
  [ProjectSlugEnum.AdultIncomePrediction]: {
    name: "Adult Income Prediction",
    description: `A project leveraging the UCI Adult Income dataset to predict income brackets using a RandomForestClassifier. Emphasis is on feature engineering, data preprocessing with One-Hot Encoding, and model optimization through hyperparameter tuning.`,
    repositoryURL: "https://github.com/mbeps/Adults_Income_Prediction",
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.ScikitLearn,
      SkillSlugEnum.NumPy,
      SkillSlugEnum.Pandas,
      SkillSlugEnum.Matplotlib,
      SkillSlugEnum.Seaborn,
      SkillSlugEnum.Jupyter,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Poetry,
      SkillSlugEnum.Black,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.HousePricePrediction]: {
    name: "House Price Prediction",
    description: `An analytical approach to predicting California housing prices using the RandomForestRegressor and LinearRegressor, with a focus on data preprocessing and feature engineering.`,
    repositoryURL: "https://github.com/mbeps/House_Price_Prediction",
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.ScikitLearn,
      SkillSlugEnum.NumPy,
      SkillSlugEnum.Pandas,
      SkillSlugEnum.Matplotlib,
      SkillSlugEnum.Seaborn,
      SkillSlugEnum.Jupyter,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Poetry,
      SkillSlugEnum.Black,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.MachineLearningAssignment1]: {
    name: `Assignment 1`,
    description: `
      Be able to implement machine-learning algorithms, using the Nearest Neighbours algorithm as an example. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in science and technology.
      `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-1`,
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.ScikitLearn,
      SkillSlugEnum.NumPy,
      SkillSlugEnum.Matplotlib,
      SkillSlugEnum.Jupyter,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Black,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.MachineLearningAssignment2]: {
    name: `Assignment 2`,
    description: `
      Be able to use and implement machine-learning algorithms, 
      with the Lasso and inductive conformal prediction algorithms as examples. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in industry and medicine.
    `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-2`,
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.ScikitLearn,
      SkillSlugEnum.NumPy,
      SkillSlugEnum.Matplotlib,
      SkillSlugEnum.Jupyter,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Black,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.MachineLearningAssignment3]: {
    name: `Assignment 3`,
    description: `
      Be able to use and implement machine-learning algorithms, 
      with the SVM, neural networks, and cross-conformal prediction algorithms as examples. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in industry.
      `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-3`,
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.ScikitLearn,
      SkillSlugEnum.NumPy,
      SkillSlugEnum.Matplotlib,
      SkillSlugEnum.Jupyter,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Black,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.MachineLearningLabQuestions]: {
    name: `Lab Questions`,
    description: `
      Implemented various machine learning algorithms and techniques learned during the course, 
      such as Nearest Neighbours, conformal prediction, linear regression, Ridge Regression, Lasso, data preprocessing, parameter selection, 
      kernels, neural networks, support vector machines, scikit-learn pipelines, and cross-conformal predictors.`,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Labs-Questions`,
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.ScikitLearn,
      SkillSlugEnum.NumPy,
      SkillSlugEnum.Matplotlib,
      SkillSlugEnum.Jupyter,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Black,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.Algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.ComputationalFinanceAssignment]: {
    name: "Computational Finance Assignment",
    description: `
      An assignment exploring valuation of options using methods like Black-Scholes, binomial trees, and Monte Carlo. 
      Also includes theoretical aspects of put-call parity and financial arbitrage opportunities.`,
    repositoryURL: `https://github.com/mbeps/Computation_Finance_Assignment`,
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.NumPy,
      SkillSlugEnum.Matplotlib,
      SkillSlugEnum.Jupyter,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,

      SkillSlugEnum.Probability,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.Algorithms,
      SkillSlugEnum.Algebra,
      SkillSlugEnum.Calculus,
      SkillSlugEnum.LinearAlgebra,
      SkillSlugEnum.Statistics,
      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.Mechanics,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.MachineLearningTheoryPractice]: {
    name: "Machine Learning Theory Practice",
    description: `
      A collection of machine learning theory questions and answers.
      This is used to practice for exams and tests.
      `,
    category: ProjectCategoriesEnum.MachineLearning,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Theory-Practice`,
    skills: [
      SkillSlugEnum.MachineLearning,
      SkillSlugEnum.DataScience,
      SkillSlugEnum.ArtificialIntelligence,
      SkillSlugEnum.Hyperparameters,
      SkillSlugEnum.Boosting,
      SkillSlugEnum.NeuralNetworks,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.Algorithms,
      SkillSlugEnum.LinearAlgebra,
      SkillSlugEnum.Statistics,
      SkillSlugEnum.Probability,
    ],
  },

  //^ Java Assignments
  [ProjectSlugEnum.JavaCalculatorAssignment]: {
    name: `Calculator`,
    description: `
      Simple calculator app built using Java as a Maven project. 
      This was a second year Java assignment focused on software engineering methodologies. 
      The project involved creating a calculator application, emphasizing the importance of proper version control procedures, 
      test-driven development, documentation, and code quality assurance through linting and styling. 
      The assignment highlighted the significance of following efficient software development processes rather than just focusing on the final implementation.  `,
    repositoryURL: `https://github.com/mbeps/Calculator-Assignment`,
    skills: [
      SkillSlugEnum.Java,
      SkillSlugEnum.Maven,
      SkillSlugEnum.JUnit,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Checkstyle,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    category: ProjectCategoriesEnum.JavaAssignments,
  },
  [ProjectSlugEnum.BotanicGardenPlannerAssignment]: {
    name: `Botanic-Garden-Planner`,
    description: `
      Simple botanic garden planner app built using Java.
      This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Botanic-Garden-Planner`,
    skills: [
      SkillSlugEnum.Java,
      SkillSlugEnum.JUnit,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    category: ProjectCategoriesEnum.JavaAssignments,
    archived: true,
  },
  [ProjectSlugEnum.TrackAndTraceAssignment]: {
    name: "Track & Trace",
    description: `Simple app to track Covid cases. 
      This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Track_and_Trace`,
    category: ProjectCategoriesEnum.JavaAssignments,
    skills: [
      SkillSlugEnum.Java,
      SkillSlugEnum.JUnit,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    archived: true,
  },
  [ProjectSlugEnum.HollomonAssignment]: {
    name: `Hollomon`,
    description: `This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Hollomon`,
    category: ProjectCategoriesEnum.JavaAssignments,
    skills: [
      SkillSlugEnum.Java,
      SkillSlugEnum.JUnit,
      SkillSlugEnum.Git,
      SkillSlugEnum.Git,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    archived: true,
  },
  [ProjectSlugEnum.DatabasesMiniProject]: {
    name: `Database Mini Project`,
    description: `Learning to interact with a database using Java.`,
    repositoryURL: `https://github.com/mbeps/DatabasesMiniProject`,
    skills: [
      SkillSlugEnum.Java,
      SkillSlugEnum.PostgreSQL,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    category: ProjectCategoriesEnum.JavaAssignments,
    archived: true,
  },

  //^ Game Development Projects
  [ProjectSlugEnum.OsmosGame]: {
    name: `Osmos Game`,
    description: `
      This is a simple game created using SimpleGUI for a group project in my first year of university. 
      The physics of the game were done manually using vector theory and physics concepts.
      This required us to rely on the documentation as there was no tutorials or guides on how to use the library.
      `,
    repositoryURL: `https://github.com/mbeps/Osmos_Game`,
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.SimpleGUI,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Black,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.Leadership,
      SkillSlugEnum.Teamwork,
      SkillSlugEnum.Communication,
    ],
    category: ProjectCategoriesEnum.GameDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.OsmosGame),
  },
  [ProjectSlugEnum.SurfaceFight]: {
    name: "Surface Fight",
    description: `
      The game is about a robot shooting skeletons and trying to survive. 
      Every time he kills all the skeletons more of them will come at once.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillSlugEnum.GameMakerLanguage,
      SkillSlugEnum.GameMakerStudio,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/surface-fight",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.SurfaceFight),
  },
  [ProjectSlugEnum.Platformer]: {
    name: "Platformer",
    description: `
      This is a basic and easy to play platform game which is similar to Super Mario.
      Players must defeat the enemies and reach the end of the level.
      This is also a multiplayer game.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillSlugEnum.GameMakerLanguage,
      SkillSlugEnum.GameMakerStudio,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/platformer",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.Platformer),
  },
  [ProjectSlugEnum.PlatformerDeathWalk]: {
    name: "Platformer Death Walk",
    description: `
      This is a basic and easy to play platform game which is similar to Super Mario.
      Players must defeat all the enemies to reach the end of the level.
      This is also a multiplayer game.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillSlugEnum.GameMakerLanguage,
      SkillSlugEnum.GameMakerStudio,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/platformer-death-walk",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.PlatformerDeathWalk),
  },
  [ProjectSlugEnum.CodingBreakout]: {
    name: "Coding Breakout",
    description: `
      In Breakout, a layer of bricks lines the top third of the screen
      and the goal is to destroy them all by repeatedly bouncing a ball off a paddle into them.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillSlugEnum.GameMakerLanguage,
      SkillSlugEnum.GameMakerStudio,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/coding-break-out",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.CodingBreakout),
  },
  [ProjectSlugEnum.CatchMaruf]: {
    name: "Catch Maruf",
    description: `
      A basic game where the focus is to click on a character
      as many times as possible within a given time limit.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillSlugEnum.GameMakerLanguage,
      SkillSlugEnum.GameMakerStudio,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/catch-maruf",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.CatchMaruf),
  },
  [ProjectSlugEnum.AgainstGravity]: {
    name: "Against Gravity",
    description: `
      A basic game where the aim is to reach the end of the level
      by making use of the gravity switch and avoiding the obstacles.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillSlugEnum.GameMakerLanguage,
      SkillSlugEnum.GameMakerStudio,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/against-gravity",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.AgainstGravity),
  },
  [ProjectSlugEnum.ScrollingShooter]: {
    name: "Scrolling Shooter",
    description: `
      This is a game where the aim is to shoot the enemies and avoid their bullets.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillSlugEnum.GameMakerLanguage,
      SkillSlugEnum.GameMakerStudio,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/scrolling-shooter",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.ScrollingShooter),
  },
  [ProjectSlugEnum.Dungeon]: {
    name: "Dungeon",
    description: `
      A very simple 3D game where the aim is to reach the end of the level through the maze.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillSlugEnum.GameMakerLanguage,
      SkillSlugEnum.GameMakerStudio,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/dungeon-",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.Dungeon),
  },
  [ProjectSlugEnum.VegNinja]: {
    name: " Veg Ninja",
    description: `
      A simple game where the aim is to cut the vegetables and avoid the bombs.
      This is very similar to the popular game Fruit Ninja.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillSlugEnum.GameMakerLanguage,
      SkillSlugEnum.GameMakerStudio,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/vej-ninja",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.VegNinja),
  },
  [ProjectSlugEnum.AngryCatsSpace]: {
    name: " Angry Cats Space",
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillSlugEnum.GameMakerLanguage,
      SkillSlugEnum.GameMakerStudio,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/angry-cats-space",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.AngryCatsSpace),
  },
  [ProjectSlugEnum.AngryCats]: {
    name: " Angry Cats",
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      SkillSlugEnum.GameMakerLanguage,
      SkillSlugEnum.GameMakerStudio,

      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/angry-cats-space",
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectSlugEnum.AngryCats),
  },

  //^ Other Projects
  [ProjectSlugEnum.SearchingAndSortingAlgorithms]: {
    name: `Searching & Sorting Algorithms`,
    description: `
      Jupyter Notebook containing various searching and sorting algorithms.
      Each algorithms is explained. 
      All the algorithms are also compared to each other. 
    `,
    category: ProjectCategoriesEnum.Other,
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.Matplotlib,
      SkillSlugEnum.NumPy,
      SkillSlugEnum.Jupyter,
      SkillSlugEnum.Poetry,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.Black,

      SkillSlugEnum.DataStructures,
      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
      SkillSlugEnum.ObjectOrientedProgramming,
      SkillSlugEnum.Algorithms,
    ],
    repositoryURL: "https://github.com/mbeps/algorithms",
  },
  [ProjectSlugEnum.AutomatedSetup]: {
    name: `Automated Setup`,
    description: `
      A shell script which automates the setup of a new Linux machine.
      This is specifically for my Fedora install.
      `,
    skills: [
      SkillSlugEnum.ShellScript,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,

      SkillSlugEnum.DataStructures,
      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    repositoryURL: `https://github.com/mbeps/AutomatedSetup`,
    category: ProjectCategoriesEnum.Other,
  },
  [ProjectSlugEnum.Leetcode]: {
    name: `Leetcode Solutions`,
    description: `
      A collection of Leetcode solutions in Python. 
      This is used to practice algorithms and data structures.
      They are also used to practice unit testing.
      CI/CD is also used to run the tests when merging to the main branch.
      `,
    repositoryURL: `https://github.com/stars/mbeps/lists/leetcode`,
    skills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.PyTest,
      SkillSlugEnum.Git,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.GitHubActions,

      SkillSlugEnum.DataStructures,
      SkillSlugEnum.ProblemSolving,
      SkillSlugEnum.ProjectManagement,
      SkillSlugEnum.CriticalThinking,
      SkillSlugEnum.Creativity,
      SkillSlugEnum.Adaptability,
    ],
    category: ProjectCategoriesEnum.Other,
  },
};

/**
 * Array of all projects.
 */
const projectDatabase: {
  [key: string]: ProjectInterface;
} = addNestedSkillsMaterialList<ProjectInterface>(
  projectMap,
  skillsHashmap,
  SkillTypesEnum.General,
  SkillTypesEnum.Hard
);

export default projectDatabase;
