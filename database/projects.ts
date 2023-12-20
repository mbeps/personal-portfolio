import {
  auth0,
  axios,
  chakraUI,
  clerkAuth,
  cloudinary,
  css,
  django,
  docker,
  firebase,
  flask,
  gameMakerStudio,
  gcp,
  git,
  gitHub,
  gitHubActions,
  gitLab,
  headlessUI,
  html,
  jest,
  jotai,
  junit,
  jupyterNotebooks,
  jwt,
  matplotlib,
  maven,
  mongoDB,
  mySQL,
  nextUI,
  nextauth,
  nextjs,
  nodejs,
  npm,
  numpy,
  nxjs,
  openAI,
  pandas,
  pnpm,
  poetry,
  postgreSQL,
  prisma,
  pusher,
  pytest,
  radixUI,
  react,
  recoil,
  replicateAI,
  rest,
  scikitLearn,
  seaborn,
  shadcnUI,
  simpleGui,
  sqlalchemy,
  storybooks,
  stripe,
  supabase,
  tRPC,
  tailwindCSS,
  yarn,
  zod,
  zustand,
} from "@/database/skills/hardSkills";
import Project from "@/types/projects";
import {
  gameMakerLanguage,
  java,
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
  algorithms,
  dataStructures,
  designPatterns,
  oop,
} from "./skills/generalSkills";

/**
 * Array of web development projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const webdevProjects: Project[] = [
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
    programmingLanguage: typescript,
    technologySkills: [
      nextjs,
      react,
      chakraUI,
      firebase,
      nodejs,
      recoil,
      docker,
      gitHubActions,
      gcp,
      git,
      html,
      css,
      yarn,
    ],
    softSkills: [
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
    ],
    extraTechnicalGeneralSkills: [oop, designPatterns, algorithms],
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
    programmingLanguage: typescript,
    technologySkills: [
      nextjs,
      react,
      nodejs,
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
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, designPatterns, algorithms],
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
    programmingLanguage: typescript,
    deploymentURL: "https://magician-ai.vercel.app/",
    technologySkills: [
      nextjs,
      react,
      shadcnUI,
      radixUI,
      tailwindCSS,
      nodejs,
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
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, designPatterns, algorithms],
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
    programmingLanguage: typescript,
    technologySkills: [
      nextjs,
      react,
      nodejs,
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
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, designPatterns, algorithms],
    category: "Full-Stack Web Development",
    hasImage: true,
  },
];

/**
 * Array of extra web development projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const extraWebDevProjects: Project[] = [
  {
    name: "Quizmify",
    slug: "quizmify",
    description: `An intuitive platform for dynamic quiz generation. 
      Users can test their knowledge across various topics, choosing between multiple-choice questions or fill-in-the-gap style challenges. 
      With immediate feedback and score tracking, users enhance their understanding.`,
    programmingLanguage: typescript,
    category: "Full-Stack Web Development",
    technologySkills: [
      nextjs,
      react,
      tailwindCSS,
      shadcnUI,
      nodejs,
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
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, designPatterns, algorithms],
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
    programmingLanguage: typescript,
    technologySkills: [
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
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop],
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
    programmingLanguage: typescript,
    technologySkills: [
      nextjs,
      react,
      shadcnUI,
      tailwindCSS,
      nodejs,
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
    ],
    extraTechnicalGeneralSkills: [oop, designPatterns, algorithms],
    softSkills: [
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
    programmingLanguage: typescript,
    technologySkills: [
      nextjs,
      react,
      tailwindCSS,
      nodejs,
      jotai,
      supabase,
      postgreSQL,
      openAI,
      gitHub,
      git,
      html,
      css,
      yarn,
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, designPatterns, algorithms],
    category: "Full-Stack Web Development",
    archived: true,
  },
];

const backendWebDevProjects: Project[] = [
  {
    name: `Flask Forum Backend`,
    slug: "flask-forum-backend",
    description: `
      This is a custom backend for the first iteration of the discussion platform. 
      This was created to learn how to create a custom backend using Python and Flask.
      `,
    repositoryURL: `https://github.com/mbeps/Forum-Discussion-Flask-Backend`,
    programmingLanguage: python,
    technologySkills: [
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
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, designPatterns, algorithms],
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
    programmingLanguage: python,
    technologySkills: [flask, jwt, gitHub, git, html, css, poetry],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop],
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
    programmingLanguage: python,
    repositoryURL: `https://github.com/mbeps/Django_Auth_Sys`,
    technologySkills: [django, jwt, gitHub, git, html, css, poetry],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop],
    category: "Back-End Web Development",
    archived: true,
  },
  {
    name: `Clerk Authentication`,
    slug: "clerk-authentication",
    description: `
      A simple Next.JS app to experiment with the Clerk Authentication SDK. 
      `,
    programmingLanguage: typescript,
    repositoryURL: `https://github.com/mbeps/clerk-demo`,
    technologySkills: [nextjs, clerkAuth, nodejs, gitHub, git, html, css, yarn],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop],
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
    programmingLanguage: typescript,
    repositoryURL: `https://github.com/mbeps/nextjs-auth0`,
    technologySkills: [nextjs, auth0, nodejs, gitHub, git, html, css, yarn],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop],
    category: "Back-End Web Development",
    archived: true,
  },
];

/**
 * Array of machine learning projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const machineLearningProjects: Project[] = [
  {
    name: "Adult Income Prediction",
    slug: "adult-income-prediction",
    description: `A project leveraging the UCI Adult Income dataset to predict income brackets using a RandomForestClassifier. Emphasis is on feature engineering, data preprocessing with One-Hot Encoding, and model optimization through hyperparameter tuning.`,
    repositoryURL: "https://github.com/mbeps/Adults_Income_Prediction",
    programmingLanguage: python,
    technologySkills: [
      scikitLearn,
      numpy,
      pandas,
      matplotlib,
      seaborn,
      jupyterNotebooks,
      gitHub,
      git,
      poetry,
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, algorithms],
    category: "Machine Learning",
  },
  {
    name: "House Price Prediction",
    slug: "house-price-prediction",
    description: `An analytical approach to predicting California housing prices using the RandomForestRegressor and LinearRegressor, with a focus on data preprocessing and feature engineering.`,
    repositoryURL: "https://github.com/your-username/House-Price-Prediction",
    programmingLanguage: python,
    technologySkills: [
      scikitLearn,
      numpy,
      pandas,
      matplotlib,
      seaborn,
      jupyterNotebooks,
      gitHub,
      git,
      poetry,
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, algorithms],
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
    programmingLanguage: python,
    technologySkills: [
      scikitLearn,
      numpy,
      matplotlib,
      jupyterNotebooks,
      gitHub,
      git,
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, algorithms],
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
    programmingLanguage: python,
    technologySkills: [
      scikitLearn,
      numpy,
      matplotlib,
      jupyterNotebooks,
      gitHub,
      git,
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, algorithms],
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
    programmingLanguage: python,
    technologySkills: [
      scikitLearn,
      numpy,
      matplotlib,
      jupyterNotebooks,
      gitHub,
      git,
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, algorithms],
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
    programmingLanguage: python,
    technologySkills: [
      scikitLearn,
      numpy,
      matplotlib,
      jupyterNotebooks,
      gitHub,
      git,
      poetry,
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, algorithms],
    category: "Machine Learning",
  },
  {
    name: "Computational Finance Assignment",
    slug: "computational-finance-assignment",
    description: `
      An assignment exploring valuation of options using methods like Black-Scholes, binomial trees, and Monte Carlo. 
      Also includes theoretical aspects of put-call parity and financial arbitrage opportunities.`,
    repositoryURL: `https://github.com/mbeps/Computation_Finance_Assignment`,
    programmingLanguage: python,
    technologySkills: [numpy, matplotlib, jupyterNotebooks],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, algorithms],
    category: "Machine Learning",
  },
];

/**
 * Array of game development projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const gameDevProjects: Project[] = [
  {
    name: `Osmos Game`,
    slug: "osmos-game",
    description: `
      This is a simple game created using SimpleGUI for a group project in my first year of university. 
      The physics of the game were done manually using vector theory and physics concepts.
      This required us to rely on the documentation as there was no tutorials or guides on how to use the library.
      `,
    repositoryURL: `https://github.com/mbeps/Osmos_Game`,
    programmingLanguage: python,
    technologySkills: [simpleGui],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
      leadership,
      teamwork,
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
    programmingLanguage: gameMakerLanguage,
    category: "Game Development",
    technologySkills: [gameMakerStudio],
    softSkills: [
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
    programmingLanguage: gameMakerLanguage,
    category: "Game Development",
    technologySkills: [gameMakerStudio],
    softSkills: [
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
    programmingLanguage: gameMakerLanguage,
    category: "Game Development",
    technologySkills: [gameMakerStudio],
    softSkills: [
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
    programmingLanguage: gameMakerLanguage,
    category: "Game Development",
    technologySkills: [gameMakerStudio],
    softSkills: [
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
    programmingLanguage: gameMakerLanguage,
    category: "Game Development",
    technologySkills: [gameMakerStudio],
    softSkills: [
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
    programmingLanguage: gameMakerLanguage,
    category: "Game Development",
    technologySkills: [gameMakerStudio],
    softSkills: [
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
    programmingLanguage: gameMakerLanguage,
    category: "Game Development",
    technologySkills: [gameMakerStudio],
    softSkills: [
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
    programmingLanguage: gameMakerLanguage,
    category: "Game Development",
    technologySkills: [gameMakerStudio],
    softSkills: [
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
    programmingLanguage: gameMakerLanguage,
    category: "Game Development",
    technologySkills: [gameMakerStudio],
    softSkills: [
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
    programmingLanguage: gameMakerLanguage,
    category: "Game Development",
    technologySkills: [gameMakerStudio],
    softSkills: [
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
    programmingLanguage: gameMakerLanguage,
    category: "Game Development",
    technologySkills: [gameMakerStudio],
    softSkills: [
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
 * @type {Project[]}
 */
const otherProjects: Project[] = [
  {
    name: `Searching & Sorting`,
    slug: `searching-sorting-algorithms`,
    description: `
      Jupyter Notebook containing various searching and sorting algorithms.
      Each algorithms is explained. 
      All the algorithms are also compared to each other. 
    `,
    programmingLanguage: python,
    category: "Other",
    technologySkills: [
      matplotlib,
      numpy,
      jupyterNotebooks,
      poetry,
      gitHub,
      git,
    ],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    extraTechnicalGeneralSkills: [oop, algorithms, dataStructures],
    repositoryURL: "https://github.com/mbeps/algorithms",
  },
  {
    name: `Automated Setup`,
    slug: "automated-setup",
    description: `
      A shell script which automates the setup of a new Linux machine.
      This is specifically for my Fedora install.
      `,
    technologySkills: [shellScript, gitHub, git],
    softSkills: [
      problemSolving,
      projectManagement,
      criticalThinking,
      creativity,
      adaptability,
    ],
    repositoryURL: `https://github.com/mbeps/AutomatedSetup`,
    programmingLanguage: shellScript,
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
    programmingLanguage: python,
    technologySkills: [pytest, gitHubActions, gitHub, git],
    softSkills: [
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
 * @type {Project[]}
 */
const javaAssignments: Project[] = [
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
    programmingLanguage: java,
    technologySkills: [maven, junit, gitHub, git],
    softSkills: [
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
    programmingLanguage: java,
    technologySkills: [junit, gitHub, git],
    softSkills: [
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
    programmingLanguage: java,
    category: "Java Assignments",
    technologySkills: [junit, gitHub, git],
    softSkills: [
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
    programmingLanguage: java,
    category: "Java Assignments",
    technologySkills: [junit, gitHub, git],
    softSkills: [
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
    programmingLanguage: java,
    technologySkills: [postgreSQL, gitHub, git],
    softSkills: [
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
const allProjects = [
  ...webdevProjects,
  ...machineLearningProjects,
  ...extraWebDevProjects,
  ...gameDevProjects,
  ...otherProjects,
  ...javaAssignments,
  ...backendWebDevProjects,
];

export default allProjects;
