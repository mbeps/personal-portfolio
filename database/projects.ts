import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
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

/**
 * Array of web development projects.
 * This is used to populate the projects page.
 * @type {ProjectInterface[]}
 */
const webdevProjects: ProjectInterface[] = [
  {
    name: `Circus Discussions`,
    slug: "circus-discussions",
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
    category: "Full-Stack Web Development",
    hasImage: true,
  },
  {
    name: `Ringmaster Messaging`,
    slug: "ringmaster-messaging",
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
    category: "Full-Stack Web Development",
    hasImage: true,
  },
  {
    name: `Magician AI`,
    slug: "magician-ai",
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
    category: "Full-Stack Web Development",
    hasImage: true,
  },
  {
    name: `Drumroll Music`,
    slug: "drumroll-music",
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
    category: "Full-Stack Web Development",
    hasImage: true,
  },
  {
    name: "Joker Notes",
    slug: "joker-notes",
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
    category: "Full-Stack Web Development",
    deploymentURL: "https://joker-notes.vercel.app/",
    hasImage: true,
  },
];

/**
 * Array of extra web development projects.
 * This is used to populate the projects page.
 * @type {ProjectInterface[]}
 */
const extraWebDevProjects: ProjectInterface[] = [
  {
    name: "Quizmify",
    slug: "quizmify",
    description: `An intuitive platform for dynamic quiz generation. 
      Users can test their knowledge across various topics, choosing between multiple-choice questions or fill-in-the-gap style challenges. 
      With immediate feedback and score tracking, users enhance their understanding.`,
    category: "Full-Stack Web Development",
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
    hasImage: true,
  },
  {
    name: `Sideshow Articles`,
    slug: "sideshow-articles",
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
    category: "Full-Stack Web Development",
    archived: true,
    hasImage: true,
  },
  {
    name: `Noodle`,
    slug: "noodle",
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
    category: "Full-Stack Web Development",
    archived: true,
    hasImage: true,
  },
  {
    name: `ConvoGPT`,
    slug: "convo-gpt",
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
    category: "Full-Stack Web Development",
    archived: true,
  },
];

const backendWebDevProjects: ProjectInterface[] = [
  {
    name: `Flask Forum Backend`,
    slug: "flask-forum-backend",
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
    category: "Back-End Web Development",
  },
  {
    name: `Flask JWT Authentication`,
    slug: "flask-jwt-authentication",
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
    category: "Back-End Web Development",
    archived: true,
  },
  {
    name: `Django Authentication`,
    slug: "django-authentication",
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
    category: "Back-End Web Development",
    archived: true,
  },
  {
    name: `Clerk Authentication`,
    slug: "clerk-authentication",
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
    category: "Back-End Web Development",
    archived: true,
  },
  {
    name: `Auth0 Authentication`,
    slug: "auth0-authentication",
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
    category: "Back-End Web Development",
    archived: true,
  },
];

/**
 * Array of machine learning projects.
 * This is used to populate the projects page.
 * @type {ProjectInterface[]}
 */
const machineLearningProjects: ProjectInterface[] = [
  {
    name: "Adult Income Prediction",
    slug: "adult-income-prediction",
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
    category: "Machine Learning",
  },
  {
    name: "House Price Prediction",
    slug: "house-price-prediction",
    description: `An analytical approach to predicting California housing prices using the RandomForestRegressor and LinearRegressor, with a focus on data preprocessing and feature engineering.`,
    repositoryURL: "https://github.com/your-username/House-Price-Prediction",
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
    category: "Machine Learning",
  },
  {
    name: `Assignment 1`,
    slug: "machine-learning-assignment-1",
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
    category: "Machine Learning",
  },
  {
    name: `Assignment 2`,
    slug: "machine-learning-assignment-2",
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
    category: "Machine Learning",
  },
  {
    name: `Assignment 3`,
    slug: "machine-learning-assignment-3",
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
    category: "Machine Learning",
  },
  {
    name: `Lab Questions`,
    slug: "machine-learning-lab-questions",
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
    category: "Machine Learning",
  },
  {
    name: "Computational Finance Assignment",
    slug: "computational-finance-assignment",
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
    category: "Machine Learning",
  },
  {
    name: "Machine Learning Theory Practice",
    slug: "machine-learning-theory-practice",
    description: `
      A collection of machine learning theory questions and answers.
      This is used to practice for exams and tests.
      `,
    category: "Machine Learning",
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
];

/**
 * Array of game development projects.
 * This is used to populate the projects page.
 * @type {ProjectInterface[]}
 */
const gameDevProjects: ProjectInterface[] = [
  {
    name: `Osmos Game`,
    slug: "osmos-game",
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
    category: "Game Development",
    hasImage: true,
  },
  {
    name: "Surface Fight",
    slug: "surface-fight",
    description: `
      The game is about a robot shooting skeletons and trying to survive. 
      Every time he kills all the skeletons more of them will come at once.
      This was a simple game made back in secondary school. 
    `,
    category: "Game Development",
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
    hasImage: true,
  },
  {
    name: "Platformer",
    slug: "platformer",
    description: `
      This is a basic and easy to play platform game which is similar to Super Mario.
      Players must defeat the enemies and reach the end of the level.
      This is also a multiplayer game.
      This was a simple game made back in secondary school. 
    `,
    category: "Game Development",
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
    hasImage: true,
  },
  {
    name: "Platformer Death Walk",
    slug: "platformer-death-walk",
    description: `
      This is a basic and easy to play platform game which is similar to Super Mario.
      Players must defeat all the enemies to reach the end of the level.
      This is also a multiplayer game.
      This was a simple game made back in secondary school. 
    `,
    category: "Game Development",
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
    hasImage: true,
  },
  {
    name: "Coding Breakout",
    slug: "coding-breakout",
    description: `
      In Breakout, a layer of bricks lines the top third of the screen
      and the goal is to destroy them all by repeatedly bouncing a ball off a paddle into them.
      This was a simple game made back in secondary school. 
    `,
    category: "Game Development",
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
    hasImage: true,
  },
  {
    name: "Catch Maruf",
    slug: "catch-maruf",
    description: `
      A basic game where the focus is to click on a character
      as many times as possible within a given time limit.
      This was a simple game made back in secondary school. 
    `,
    category: "Game Development",
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
    hasImage: true,
  },
  {
    name: "Against Gravity",
    slug: "against-gravity",
    description: `
      A basic game where the aim is to reach the end of the level
      by making use of the gravity switch and avoiding the obstacles.
      This was a simple game made back in secondary school. 
    `,
    category: "Game Development",
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
    hasImage: true,
  },
  {
    name: "Scrolling Shooter",
    slug: "scrolling-shooter",
    description: `
      This is a game where the aim is to shoot the enemies and avoid their bullets.
      This was a simple game made back in secondary school. 
    `,
    category: "Game Development",
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
    hasImage: true,
  },
  {
    name: "Dungeon",
    slug: "dungeon",
    description: `
      A very simple 3D game where the aim is to reach the end of the level through the maze.
      This was a simple game made back in secondary school. 
    `,
    category: "Game Development",
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
    hasImage: true,
  },
  {
    name: " Veg Ninja",
    slug: "veg-ninja",
    description: `
      A simple game where the aim is to cut the vegetables and avoid the bombs.
      This is very similar to the popular game Fruit Ninja.
      This was a simple game made back in secondary school. 
    `,
    category: "Game Development",
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
    hasImage: true,
  },
  {
    name: " Angry Cats Space",
    slug: "angry-cats-space",
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    category: "Game Development",
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
    hasImage: true,
  },
  {
    name: " Angry Cats",
    slug: "angry-cats",
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    category: "Game Development",
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
    hasImage: true,
  },
];

/**
 * Array of other projects.
 * This is used to populate the projects page.
 * @type {ProjectInterface[]}
 */
const otherProjects: ProjectInterface[] = [
  {
    name: `Searching & Sorting`,
    slug: `searching-sorting-algorithms`,
    description: `
      Jupyter Notebook containing various searching and sorting algorithms.
      Each algorithms is explained. 
      All the algorithms are also compared to each other. 
    `,
    category: "Other",
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
  {
    name: `Automated Setup`,
    slug: "automated-setup",
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
    category: "Other",
  },
  {
    name: `Leetcode Solutions`,
    slug: "leetcode",
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
    category: "Other",
  },
];

/**
 * Array of some Java assignments.
 * This is used to populate the projects page.
 * @type {ProjectInterface[]}
 */
const javaAssignments: ProjectInterface[] = [
  {
    name: `Calculator`,
    slug: "calculator-assignment",
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
    category: "Java Assignments",
  },
  {
    name: `Botanic-Garden-Planner`,
    slug: "botanic-garden-planner-assignment",
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
    category: "Java Assignments",
    archived: true,
  },
  {
    name: "Track & Trace",
    slug: "track-and-trace-assignment",
    description: `Simple app to track Covid cases. 
      This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Track_and_Trace`,
    category: "Java Assignments",
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
  {
    name: `Hollomon`,
    slug: "hollomon-assignment",
    description: `This was in first year to learn about Java and object oriented programming.`,
    repositoryURL: `https://github.com/mbeps/Hollomon`,
    category: "Java Assignments",
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
  {
    name: `Database Mini Project`,
    slug: "database-mini-project",
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
    category: "Java Assignments",
    archived: true,
  },
];

export {
  backendWebDevProjects,
  extraWebDevProjects,
  gameDevProjects,
  javaAssignments,
  machineLearningProjects,
  otherProjects,
  webdevProjects,
};

/**
 * Array of all projects.
 */
const allProjects = addNestedSkillsMaterialList<ProjectInterface>([
  ...webdevProjects,
  ...machineLearningProjects,
  ...extraWebDevProjects,
  ...gameDevProjects,
  ...otherProjects,
  ...javaAssignments,
  ...backendWebDevProjects,
]);

export default allProjects;
