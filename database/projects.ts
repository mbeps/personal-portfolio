import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import ProjectCategoriesEnum from "@/enums/ProjectCategoriesEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import {
  algorithms,
  artificialIntelligence,
  boosting,
  dataScience,
  dataStructures,
  designPatterns,
  hyperparameters,
  machineLearning,
  neuralNetworks,
  oop,
} from "./skills/generalSkills";
import {
  gameMakerLanguage,
  java,
  javascript,
  python,
  shellScript,
  typescript,
} from "./skills/languages";
import {
  adaptability,
  communication,
  creativity,
  criticalThinking,
  leadership,
  problemSolving,
  projectManagement,
  riskManagement,
  scopeManagement,
  stakeholderManagement,
  teamwork,
  timeManagement,
} from "./skills/softSkills";
import {
  openAI,
  pusher,
  replicateAI,
  rest,
  tRPC,
} from "./skills/technicalHardSkills/technicalHardSkillsAPIs";
import {
  auth0,
  clerkAuth,
  cloudinary,
  django,
  edgestore,
  firebase,
  flask,
  jwt,
  nextauth,
  stripe,
  supabase,
} from "./skills/technicalHardSkills/technicalHardSkillsBackendWebDev";
import { gcp } from "./skills/technicalHardSkills/technicalHardSkillsCloudComputing";
import {
  black,
  checkstyle,
  eslint,
  prettier,
  zod,
} from "./skills/technicalHardSkills/technicalHardSkillsCodeQuality";
import {
  convex,
  mongoDB,
  mySQL,
  postgreSQL,
} from "./skills/technicalHardSkills/technicalHardSkillsDatabases";
import {
  docker,
  gitHubActions,
} from "./skills/technicalHardSkills/technicalHardSkillsDevOps";
import {
  axios,
  chakraUI,
  css,
  headlessUI,
  html,
  jotai,
  nextUI,
  radixUI,
  react,
  recoil,
  shadcnUI,
  simpleGui,
  storybooks,
  tailwindCSS,
  zustand,
} from "./skills/technicalHardSkills/technicalHardSkillsFrontendWebDev";
import { nextjs } from "./skills/technicalHardSkills/technicalHardSkillsFullStackWebDev";
import {
  jupyterNotebooks,
  matplotlib,
  numpy,
  pandas,
  scikitLearn,
  seaborn,
} from "./skills/technicalHardSkills/technicalHardSkillsMLDS";
import {
  algebra,
  calculus,
  linearAlgebra,
  mechanics,
  probability,
  statistics,
  vectors,
} from "./skills/technicalHardSkills/technicalHardSkillsMaths";
import {
  prisma,
  sqlalchemy,
} from "./skills/technicalHardSkills/technicalHardSkillsORMs";
import { gameMakerStudio } from "./skills/technicalHardSkills/technicalHardSkillsOthers";
import {
  maven,
  npm,
  nxjs,
  pnpm,
  poetry,
  yarn,
} from "./skills/technicalHardSkills/technicalHardSkillsProjectManagers";
import {
  jest,
  junit,
  pytest,
} from "./skills/technicalHardSkills/technicalHardSkillsTesting";
import {
  git,
  gitHub,
  gitLab,
} from "./skills/technicalHardSkills/technicalHardSkillsVCS";
import ProjectSlugEnum from "@/enums/MaterialSlugEnums/ProjectsSlugEnum";

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
    slug: ProjectSlugEnum.CircusDiscussions,
    description: `
      For a final year university project, 
      a social media platform was developed enabling users to form communities, 
      start discussions, and comment on them, connecting with like-minded individuals.
      `,
    repositoryURL: `https://github.com/mbeps/next_discussion_platform`,
    deploymentURL: `https://circus-discussion.vercel.app/`,
    skills: [
      typescript,
      javascript,
      nextjs,
      react,
      chakraUI,
      firebase,
      recoil,
      docker,
      gitHubActions,
      gcp,
      git,
      html,
      css,
      yarn,
      eslint,
      prettier,

      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      timeManagement,
      scopeManagement,
      stakeholderManagement,
      communication,
      riskManagement,
      oop,
      designPatterns,
      algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
  },
  [ProjectSlugEnum.RingmasterMessaging]: {
    name: `Ringmaster Messaging`,
    slug: ProjectSlugEnum.RingmasterMessaging,
    description: `
      A custom back-end learning project involved creating a straightforward messaging app. 
      Users can chat one-on-one, participate in group chats, send text messages, share images, view active users, and personalize their profiles. 
      `,
    repositoryURL: `https://github.com/mbeps/ringmaster-messaging`,
    deploymentURL: `https://ringmaster-messaging.vercel.app/`,

    skills: [
      typescript,
      javascript,
      nextjs,
      react,
      nextauth,
      mongoDB,
      prisma,
      pusher,
      cloudinary,
      rest,
      tailwindCSS,
      headlessUI,
      zustand,
      docker,
      gitHub,
      gitHubActions,
      git,
      html,
      css,
      yarn,
      eslint,
      prettier,

      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      designPatterns,
      algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
  },
  [ProjectSlugEnum.MagicianAI]: {
    name: `Magician AI`,
    slug: ProjectSlugEnum.MagicianAI,
    description: `
      Magician AI is a SaaS platform that leverages AI to enable users to generate various media types and have dynamic conversations. 
      Developing this project allowed me to explore Stripe, Clerk authentication, and unique AI APIs.
  `,
    repositoryURL: `https://github.com/mbeps/magician-ai`,
    deploymentURL: "https://magician-ai.vercel.app/",
    skills: [
      typescript,
      javascript,
      nextjs,
      react,
      shadcnUI,
      radixUI,
      tailwindCSS,
      mySQL,
      zustand,
      clerkAuth,
      prisma,
      stripe,
      rest,
      openAI,
      replicateAI,
      docker,
      gitHub,
      gitHubActions,
      git,
      html,
      css,
      yarn,
      eslint,
      prettier,

      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      designPatterns,
      algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
  },
  [ProjectSlugEnum.DrumrollMusic]: {
    name: `Drumroll Music`,
    slug: ProjectSlugEnum.DrumrollMusic,
    description: `
      My first major project using Supabase was a basic music streaming site. 
      Users can upload songs, search and listen to music, as well as like the songs they enjoy.
      `,
    repositoryURL: `https://github.com/mbeps/drumroll-music`,
    skills: [
      typescript,
      javascript,
      nextjs,
      react,
      supabase,
      postgreSQL,
      tailwindCSS,
      radixUI,
      zustand,
      gitHub,
      gitHubActions,
      git,
      html,
      css,
      yarn,
      eslint,
      prettier,

      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      designPatterns,
      algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
  },
  [ProjectSlugEnum.JokerNotes]: {
    name: "Joker Notes",
    slug: ProjectSlugEnum.JokerNotes,
    description: `
      A simple rich-text note-taking app that allows users to create, edit, and delete notes.
      `,
    repositoryURL: `https://github.com/mbeps/joker-notes`,
    skills: [
      typescript,
      javascript,
      nextjs,
      react,
      shadcnUI,
      tailwindCSS,
      radixUI,
      zustand,
      zod,
      convex,
      edgestore,
      gitHub,
      gitHubActions,
      git,
      html,
      css,
      yarn,
      eslint,
      prettier,

      problemSolving,
      projectManagement,
      criticalThinking,
      adaptability,
      oop,
      designPatterns,
      algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    deploymentURL: "https://joker-notes.vercel.app/",
  },

  //^ Extra Web Development Projects
  [ProjectSlugEnum.Quizmify]: {
    name: "Quizmify",
    slug: ProjectSlugEnum.Quizmify,
    description: `An intuitive platform for dynamic quiz generation. 
      Users can test their knowledge across various topics, choosing between multiple-choice questions or fill-in-the-gap style challenges. 
      With immediate feedback and score tracking, users enhance their understanding.`,
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    skills: [
      typescript,
      javascript,
      nextjs,
      react,
      tailwindCSS,
      shadcnUI,
      prisma,
      axios,
      nextauth,
      zod,
      mySQL,
      openAI,
      docker,
      gitHub,
      gitHubActions,
      git,
      html,
      css,
      yarn,
      eslint,
      prettier,

      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      designPatterns,
      algorithms,
    ],
    repositoryURL: "https://github.com/mbeps/quizmify",
  },
  [ProjectSlugEnum.SideshowArticles]: {
    name: `Sideshow Articles`,
    slug: ProjectSlugEnum.SideshowArticles,
    description: `
      To familiarize myself with Supabase, I developed a simple website for reading and writing articles. 
      Users can read, create, and delete articles. 
      This foundational project paved the way for using Supabase in subsequent projects.
      `,
    repositoryURL: `https://github.com/mbeps/sideshow-articles`,
    skills: [
      typescript,
      javascript,
      nextjs,
      react,
      supabase,
      postgreSQL,
      nextUI,
      gitHub,
      git,
      html,
      css,
      npm,

      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
  },
  [ProjectSlugEnum.Noodle]: {
    name: `Noodle`,
    slug: ProjectSlugEnum.Noodle,
    description: `
      During my second year of university, my group and I initiated a project on an open-source learning platform which served as my introduction to full-stack development. 
      This app aids students in managing tasks, assignments, exams, and storing notes and resources.
      `,
    repositoryURL: `https://github.com/ixahmedxi/noodle`,
    deploymentURL: `https://noodle.run/`,
    skills: [
      typescript,
      javascript,
      nextjs,
      react,
      shadcnUI,
      tailwindCSS,
      clerkAuth,
      mySQL,
      prisma,
      tRPC,
      storybooks,
      nxjs,
      jest,
      gitHub,
      gitHubActions,
      git,
      html,
      css,
      pnpm,
      eslint,
      prettier,
      oop,
      designPatterns,
      algorithms,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      teamwork,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
  },
  [ProjectSlugEnum.ConvoGPT]: {
    name: `ConvoGPT`,
    slug: ProjectSlugEnum.ConvoGPT,
    description: `
      In my first year of university, my group and I developed a simple game using SimpleGUI for a project. 
      We manually implemented the game's physics using vector theory and physics concepts. 
      Since there were no tutorials or guides available, we relied heavily on the library's documentation.
      `,
    repositoryURL: `https://github.com/mbeps/convo-gpt`,
    skills: [
      typescript,
      javascript,
      nextjs,
      react,
      tailwindCSS,
      jotai,
      supabase,
      postgreSQL,
      openAI,
      gitHub,
      git,
      html,
      css,
      yarn,
      eslint,
      prettier,

      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      designPatterns,
      algorithms,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
  },

  //^ Backend Web Development Projects
  [ProjectSlugEnum.FlaskForumBackend]: {
    name: `Flask Forum Backend`,
    slug: ProjectSlugEnum.FlaskForumBackend,
    description: `
      This is a custom backend for the first iteration of the discussion platform. 
      This was created to learn how to create a custom backend using Python and Flask.
      `,
    repositoryURL: `https://github.com/mbeps/Forum-Discussion-Flask-Backend`,
    skills: [
      python,
      flask,
      mySQL,
      sqlalchemy,
      rest,
      poetry,
      gitHub,
      gitLab,
      gitHubActions,
      git,
      html,
      css,
      black,

      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      designPatterns,
      algorithms,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
  },
  [ProjectSlugEnum.FlaskJWTAuthentication]: {
    name: `Flask JWT Authentication`,
    slug: ProjectSlugEnum.FlaskJWTAuthentication,
    description: `
      A simple Flask app to learn how to use JWT for authentication.
      This serves as a foundation to using JWT in other projects using Flask.
      `,
    repositoryURL: `https://github.com/mbeps/Flask_JWT_Auth`,
    skills: [
      python,
      flask,
      jwt,
      gitHub,
      git,
      html,
      css,
      poetry,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },
  [ProjectSlugEnum.DjangoAuthentication]: {
    name: `Django Authentication`,
    slug: ProjectSlugEnum.DjangoAuthentication,
    description: `
      A simple Django app to learn how to use Django with tokens for authentication.
      This serves as a foundation to using Django in other projects.
      `,
    repositoryURL: `https://github.com/mbeps/Django_Auth_Sys`,
    skills: [
      python,
      django,
      jwt,
      gitHub,
      git,
      html,
      css,
      poetry,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },
  [ProjectSlugEnum.ClerkAuthentication]: {
    name: `Clerk Authentication`,
    slug: ProjectSlugEnum.ClerkAuthentication,
    description: `
      A simple Next.JS app to experiment with the Clerk Authentication SDK. 
      `,
    repositoryURL: `https://github.com/mbeps/clerk-demo`,
    skills: [
      typescript,
      javascript,
      nextjs,
      clerkAuth,
      gitHub,
      git,
      html,
      css,
      yarn,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },
  [ProjectSlugEnum.Auth0Authentication]: {
    name: `Auth0 Authentication`,
    slug: ProjectSlugEnum.Auth0Authentication,
    description: `
      A simple Next.JS app to experiment with the Auth0 Authentication SDK. 
      This does not use the new Next.JS 13 app router as it is not supported as of the time of making this demo. 
      `,
    repositoryURL: `https://github.com/mbeps/nextjs-auth0`,
    skills: [
      typescript,
      javascript,
      nextjs,
      auth0,
      gitHub,
      git,
      html,
      css,
      yarn,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
  },

  //^ Artificial Intelligence Projects
  [ProjectSlugEnum.AdultIncomePrediction]: {
    name: "Adult Income Prediction",
    slug: ProjectSlugEnum.AdultIncomePrediction,
    description: `A project leveraging the UCI Adult Income dataset to predict income brackets using a RandomForestClassifier. Emphasis is on feature engineering, data preprocessing with One-Hot Encoding, and model optimization through hyperparameter tuning.`,
    repositoryURL: "https://github.com/mbeps/Adults_Income_Prediction",
    skills: [
      scikitLearn,
      python,
      numpy,
      pandas,
      matplotlib,
      seaborn,
      jupyterNotebooks,
      gitHub,
      git,
      poetry,
      black,

      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.HousePricePrediction]: {
    name: "House Price Prediction",
    slug: ProjectSlugEnum.HousePricePrediction,
    description: `An analytical approach to predicting California housing prices using the RandomForestRegressor and LinearRegressor, with a focus on data preprocessing and feature engineering.`,
    repositoryURL: "https://github.com/mbeps/House_Price_Prediction",
    skills: [
      python,
      scikitLearn,
      numpy,
      pandas,
      matplotlib,
      seaborn,
      jupyterNotebooks,
      gitHub,
      git,
      poetry,
      black,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.MachineLearningAssignment1]: {
    name: `Assignment 1`,
    slug: ProjectSlugEnum.MachineLearningAssignment1,
    description: `
      Be able to implement machine-learning algorithms, using the Nearest Neighbours algorithm as an example. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in science and technology.
      `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-1`,
    skills: [
      python,
      scikitLearn,
      numpy,
      matplotlib,
      jupyterNotebooks,
      gitHub,
      git,
      black,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.MachineLearningAssignment2]: {
    name: `Assignment 2`,
    slug: ProjectSlugEnum.MachineLearningAssignment2,
    description: `
      Be able to use and implement machine-learning algorithms, 
      with the Lasso and inductive conformal prediction algorithms as examples. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in industry and medicine.
    `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-2`,
    skills: [
      python,
      scikitLearn,
      numpy,
      matplotlib,
      jupyterNotebooks,
      gitHub,
      git,
      black,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.MachineLearningAssignment3]: {
    name: `Assignment 3`,
    slug: ProjectSlugEnum.MachineLearningAssignment3,
    description: `
      Be able to use and implement machine-learning algorithms, 
      with the SVM, neural networks, and cross-conformal prediction algorithms as examples. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in industry.
      `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-3`,
    skills: [
      python,
      scikitLearn,
      numpy,
      matplotlib,
      jupyterNotebooks,
      gitHub,
      git,
      black,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.MachineLearningLabQuestions]: {
    name: `Lab Questions`,
    slug: ProjectSlugEnum.MachineLearningLabQuestions,
    description: `
      Implemented various machine learning algorithms and techniques learned during the course, 
      such as Nearest Neighbours, conformal prediction, linear regression, Ridge Regression, Lasso, data preprocessing, parameter selection, 
      kernels, neural networks, support vector machines, scikit-learn pipelines, and cross-conformal predictors.`,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Labs-Questions`,
    skills: [
      python,
      scikitLearn,
      numpy,
      matplotlib,
      jupyterNotebooks,
      gitHub,
      git,
      poetry,
      black,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      algorithms,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.ComputationalFinanceAssignment]: {
    name: "Computational Finance Assignment",
    slug: ProjectSlugEnum.ComputationalFinanceAssignment,
    description: `
      An assignment exploring valuation of options using methods like Black-Scholes, binomial trees, and Monte Carlo. 
      Also includes theoretical aspects of put-call parity and financial arbitrage opportunities.`,
    repositoryURL: `https://github.com/mbeps/Computation_Finance_Assignment`,
    skills: [
      python,
      numpy,
      matplotlib,
      jupyterNotebooks,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      algorithms,
      algebra,
      calculus,
      linearAlgebra,
      vectors,
      statistics,
      probability,
      mechanics,
    ],
    category: ProjectCategoriesEnum.MachineLearning,
  },
  [ProjectSlugEnum.MachineLearningTheoryPractice]: {
    name: "Machine Learning Theory Practice",
    slug: ProjectSlugEnum.MachineLearningTheoryPractice,
    description: `
      A collection of machine learning theory questions and answers.
      This is used to practice for exams and tests.
      `,
    category: ProjectCategoriesEnum.MachineLearning,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Theory-Practice`,
    skills: [
      machineLearning,
      dataScience,
      artificialIntelligence,
      hyperparameters,
      boosting,
      neuralNetworks,
      problemSolving,
      criticalThinking,
      creativity,
      adaptability,
      algorithms,
      vectors,
      statistics,
      probability,
      linearAlgebra,
    ],
  },

  //^ Java Assignments
  [ProjectSlugEnum.JavaCalculatorAssignment]: {
    name: `Calculator`,
    slug: ProjectSlugEnum.JavaCalculatorAssignment,
    description: `
      Simple calculator app built using Java as a Maven project. 
      This was a second year Java assignment focused on software engineering methodologies. 
      The project involved creating a calculator application, emphasizing the importance of proper version control procedures, 
      test-driven development, documentation, and code quality assurance through linting and styling. 
      The assignment highlighted the significance of following efficient software development processes rather than just focusing on the final implementation.  `,
    repositoryURL: `https://github.com/mbeps/Calculator-Assignment`,
    skills: [
      java,
      maven,
      junit,
      gitHub,
      git,
      checkstyle,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    category: ProjectCategoriesEnum.JavaAssignments,
  },
  [ProjectSlugEnum.BotanicGardenPlannerAssignment]: {
    name: `Botanic-Garden-Planner`,
    slug: ProjectSlugEnum.BotanicGardenPlannerAssignment,
    description: `
      Simple botanic garden planner app built using Java.
      This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Botanic-Garden-Planner`,
    skills: [
      java,
      junit,
      gitHub,
      git,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    category: ProjectCategoriesEnum.JavaAssignments,
    archived: true,
  },
  [ProjectSlugEnum.TrackAndTraceAssignment]: {
    name: "Track & Trace",
    slug: ProjectSlugEnum.TrackAndTraceAssignment,
    description: `Simple app to track Covid cases. 
      This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Track_and_Trace`,
    category: ProjectCategoriesEnum.JavaAssignments,
    skills: [
      java,
      junit,
      gitHub,
      git,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    archived: true,
  },
  [ProjectSlugEnum.HollomonAssignment]: {
    name: `Hollomon`,
    slug: ProjectSlugEnum.HollomonAssignment,
    description: `This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Hollomon`,
    category: ProjectCategoriesEnum.JavaAssignments,
    skills: [
      java,
      junit,
      gitHub,
      git,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    archived: true,
  },
  [ProjectSlugEnum.DatabasesMiniProject]: {
    name: `Database Mini Project`,
    slug: ProjectSlugEnum.DatabasesMiniProject,
    description: `Learning to interact with a database using Java.`,
    repositoryURL: `https://github.com/mbeps/DatabasesMiniProject`,
    skills: [
      java,
      postgreSQL,
      gitHub,
      git,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    category: ProjectCategoriesEnum.JavaAssignments,
    archived: true,
  },

  //^ Game Development Projects
  [ProjectSlugEnum.OsmosGame]: {
    name: `Osmos Game`,
    slug: ProjectSlugEnum.OsmosGame,
    description: `
      This is a simple game created using SimpleGUI for a group project in my first year of university. 
      The physics of the game were done manually using vector theory and physics concepts.
      This required us to rely on the documentation as there was no tutorials or guides on how to use the library.
      `,
    repositoryURL: `https://github.com/mbeps/Osmos_Game`,
    skills: [
      python,
      simpleGui,
      gitHub,
      git,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      leadership,
      teamwork,
      black,
    ],
    category: ProjectCategoriesEnum.GameDevelopment,
  },
  [ProjectSlugEnum.SurfaceFight]: {
    name: "Surface Fight",
    slug: ProjectSlugEnum.SurfaceFight,
    description: `
      The game is about a robot shooting skeletons and trying to survive. 
      Every time he kills all the skeletons more of them will come at once.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      gameMakerLanguage,
      gameMakerStudio,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/surface-fight",
    archived: true,
  },
  [ProjectSlugEnum.Platformer]: {
    name: "Platformer",
    slug: ProjectSlugEnum.Platformer,
    description: `
      This is a basic and easy to play platform game which is similar to Super Mario.
      Players must defeat the enemies and reach the end of the level.
      This is also a multiplayer game.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      gameMakerLanguage,
      gameMakerStudio,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/platformer",
    archived: true,
  },
  [ProjectSlugEnum.PlatformerDeathWalk]: {
    name: "Platformer Death Walk",
    slug: ProjectSlugEnum.PlatformerDeathWalk,
    description: `
      This is a basic and easy to play platform game which is similar to Super Mario.
      Players must defeat all the enemies to reach the end of the level.
      This is also a multiplayer game.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      gameMakerLanguage,
      gameMakerStudio,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/platformer-death-walk",
    archived: true,
  },
  [ProjectSlugEnum.CodingBreakout]: {
    name: "Coding Breakout",
    slug: ProjectSlugEnum.CodingBreakout,
    description: `
      In Breakout, a layer of bricks lines the top third of the screen
      and the goal is to destroy them all by repeatedly bouncing a ball off a paddle into them.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      gameMakerLanguage,
      gameMakerStudio,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/coding-break-out",
    archived: true,
  },
  [ProjectSlugEnum.CatchMaruf]: {
    name: "Catch Maruf",
    slug: ProjectSlugEnum.CatchMaruf,
    description: `
      A basic game where the focus is to click on a character
      as many times as possible within a given time limit.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      gameMakerLanguage,
      gameMakerStudio,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/catch-maruf",
    archived: true,
  },
  [ProjectSlugEnum.AgainstGravity]: {
    name: "Against Gravity",
    slug: ProjectSlugEnum.AgainstGravity,
    description: `
      A basic game where the aim is to reach the end of the level
      by making use of the gravity switch and avoiding the obstacles.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      gameMakerLanguage,
      gameMakerStudio,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/against-gravity",
    archived: true,
  },
  [ProjectSlugEnum.ScrollingShooter]: {
    name: "Scrolling Shooter",
    slug: ProjectSlugEnum.ScrollingShooter,
    description: `
      This is a game where the aim is to shoot the enemies and avoid their bullets.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      gameMakerLanguage,
      gameMakerStudio,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/scrolling-shooter",
    archived: true,
  },
  [ProjectSlugEnum.Dungeon]: {
    name: "Dungeon",
    slug: ProjectSlugEnum.Dungeon,
    description: `
      A very simple 3D game where the aim is to reach the end of the level through the maze.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      gameMakerLanguage,
      gameMakerStudio,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/dungeon-",
    archived: true,
  },
  [ProjectSlugEnum.VegNinja]: {
    name: " Veg Ninja",
    slug: ProjectSlugEnum.VegNinja,
    description: `
      A simple game where the aim is to cut the vegetables and avoid the bombs.
      This is very similar to the popular game Fruit Ninja.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      gameMakerLanguage,
      gameMakerStudio,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/vej-ninja",
    archived: true,
  },
  [ProjectSlugEnum.AngryCatsSpace]: {
    name: " Angry Cats Space",
    slug: ProjectSlugEnum.AngryCatsSpace,
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      gameMakerLanguage,
      gameMakerStudio,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/angry-cats-space",
    archived: true,
  },
  [ProjectSlugEnum.AngryCats]: {
    name: " Angry Cats",
    slug: ProjectSlugEnum.AngryCats,
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    category: ProjectCategoriesEnum.GameDevelopment,
    skills: [
      gameMakerLanguage,
      gameMakerStudio,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    deploymentURL: "https://bepary-games.itch.io/angry-cats-space",
    archived: true,
  },

  //^ Other Projects
  [ProjectSlugEnum.SearchingAndSortingAlgorithms]: {
    name: `Searching & Sorting Algorithms`,
    slug: ProjectSlugEnum.SearchingAndSortingAlgorithms,
    description: `
      Jupyter Notebook containing various searching and sorting algorithms.
      Each algorithms is explained. 
      All the algorithms are also compared to each other. 
    `,
    category: ProjectCategoriesEnum.Other,
    skills: [
      python,
      matplotlib,
      numpy,
      jupyterNotebooks,
      poetry,
      gitHub,
      git,
      black,

      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      oop,
      algorithms,
      dataStructures,
    ],
    repositoryURL: "https://github.com/mbeps/algorithms",
  },
  [ProjectSlugEnum.AutomatedSetup]: {
    name: `Automated Setup`,
    slug: ProjectSlugEnum.AutomatedSetup,
    description: `
      A shell script which automates the setup of a new Linux machine.
      This is specifically for my Fedora install.
      `,
    skills: [
      shellScript,
      shellScript,
      gitHub,
      git,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    repositoryURL: `https://github.com/mbeps/AutomatedSetup`,
    category: ProjectCategoriesEnum.Other,
  },
  [ProjectSlugEnum.Leetcode]: {
    name: `Leetcode Solutions`,
    slug: ProjectSlugEnum.Leetcode,
    description: `
      A collection of Leetcode solutions in Python. 
      This is used to practice algorithms and data structures.
      They are also used to practice unit testing.
      CI/CD is also used to run the tests when merging to the main branch.
      `,
    repositoryURL: `https://github.com/stars/mbeps/lists/leetcode`,
    skills: [
      python,
      pytest,
      gitHubActions,
      gitHub,
      git,
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
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
  SkillTypesEnum.General,
  SkillTypesEnum.Hard
);

export default projectDatabase;
