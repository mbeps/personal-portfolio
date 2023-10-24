import Project from "@/types/projects";

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
    imageURL: `/projects/circus-discussions/cover.png`,
    repoURL: `https://github.com/mbeps/next_discussion_platform`,
    siteURL: `https://circus-discussion.vercel.app/`,
    programmingLanguage: `TypeScript`,
    technologies: [
      `Next.JS`,
      "React.js",
      `Chakra UI`,
      `Firebase`,
      `Node.js`,
      `Recoil`,
      "Docker",
      "GitHub Actions",
    ],
    type: "Full-Stack Web Dev",
    tags: [
      "Web Development",
      "Front End",
      "Back End",
      "Full Stack",
      "Google Cloud Platform",
      "GCP",
      "React State Management",
      "Component Library",
      "Containerization",
      "Database",
      "Non Relational Database",
      "Social Media",
      "Community",
      "Discussion",
      "Authentication",
      "Account Management",
      "Continuous Integration",
      "Continuous Deployment",
      "CI/CD",
      "Solo Project",
      "Individual Project",
      "Independent Project",
      "Best",
      "University",
    ],
  },
  {
    name: `Ringmaster Messaging`,
    slug: "ringmaster-messaging",
    description: `
      A custom back-end learning project involved creating a straightforward messaging app. 
      Users can chat one-on-one, participate in group chats, send text messages, share images, view active users, and personalize their profiles. 
      `,
    imageURL: `/projects/ringmaster-messaging/cover.png`,
    repoURL: `https://github.com/mbeps/ringmaster-messaging`,
    siteURL: `https://ringmaster-messaging.vercel.app/`,
    programmingLanguage: `TypeScript`,
    technologies: [
      "Next.JS",
      "React.js",
      `Node.js`,
      "NextAuth",
      "MongoDB",
      "Prisma",
      "Pusher",
      "Cloudinary",
      "REST API",
      "Tailwind CSS",
      "Headless UI",
      "Zustand",
      "Docker",
      "GitHub Actions",
    ],
    type: "Full-Stack Web Dev",
    tags: [
      "Web Development",
      "Front End",
      "Back End",
      "Full Stack",
      "State Management",
      "Real Time",
      "Account Management",
      "Authentication",
      "Messaging",
      "Database",
      "Non Relational Database",
      "Continuous Integration",
      "Continuous Deployment",
      "CI/CD",
      "Best",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Drumroll Music`,
    slug: "drumroll-music",
    description: `
      My first major project using Supabase was a basic music streaming site. 
      Users can upload songs, search and listen to music, as well as like the songs they enjoy.
      `,
    imageURL: `/projects/drumroll-music/cover.png`,
    repoURL: `https://github.com/mbeps/drumroll-music`,
    programmingLanguage: `TypeScript`,
    technologies: [
      `Next.JS`,
      "React.js",
      `Node.js`,
      `Supabase`,
      "PostgreSQL",
      `Tailwind CSS`,
      `Radix UI`,
      "Zustand",
      "GitHub Actions",
    ],
    type: "Full-Stack Web Dev",
    tags: [
      "Web Development",
      "Front End",
      "Back End",
      "Full Stack",
      "State Management",
      "Database",
      "Relational Database",
      "Music",
      "Streaming",
      "Account Management",
      "Authentication",
      "Uploads",
      "Continuous Integration",
      "Continuous Deployment",
      "CI/CD",
      "Solo Project",
      "Individual Project",
      "Independent Project",
      "Best",
    ],
  },
  {
    name: `Magician AI`,
    slug: "magician-ai",
    description: `
      Magician AI is a SaaS platform that leverages AI to enable users to generate various media types and have dynamic conversations. 
      Developing this project allowed me to explore Stripe, Clerk authentication, and unique AI APIs.
  `,
    imageURL: `/projects/magician-ai/cover.png`,
    repoURL: `https://github.com/mbeps/magician-ai`,
    programmingLanguage: `TypeScript`,
    siteURL: "https://magician-ai.vercel.app/",
    technologies: [
      `Next.JS`,
      "React.js",
      `Shadcn UI`,
      `Radix UI`,
      `Tailwind CSS`,
      `Node.js`,
      "MySQL",
      "Zustand",
      "Clerk Auth",
      "Prisma",
      "Stripe",
      "REST API",
      "Open AI",
      "Replicate AI",
      "Docker",
      "GitHub Actions",
    ],
    type: "Full-Stack Web Dev",
    tags: [
      "Web Development",
      "Front End",
      "Back End",
      "Full Stack",
      "State Management",
      "Database",
      "Relational Database",
      "AI",
      "Artificial Intelligence",
      "Stripe",
      "Payment",
      "Account Management",
      "Authentication",
      "Web Hooks",
      "API",
      "Continuous Integration",
      "Continuous Deployment",
      "CI/CD",
      "Solo Project",
      "Individual Project",
      "Independent Project",
      "Best",
    ],
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
    programmingLanguage: "TypeScript",
    type: "Full-Stack Web Dev",
    technologies: [
      "Next.JS",
      "React.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Prisma",
      "Axios",
      "NextAuth",
      "Zod",
      "MySQL",
      "OpenAI",
    ],
    imageURL: `/projects/quizmify/cover.png`,
    repoURL: "https://github.com/mbeps/quizmify",
    tags: [
      "Web Development",
      "Front End",
      "Back End",
      "Full Stack",
      "Quiz",
      "Authentication",
      "Account Management",
      "Relational Database",
      "AI",
      "Artificial Intelligence",
      "OpenAI",
      "TypeScript Schema Validation",
      "HTTP Requests",
      "State Management",
      "User Experience",
    ],
  },
  {
    name: `Sideshow Articles`,
    slug: "sideshow-articles",
    description: `
      To familiarize myself with Supabase, I developed a simple website for reading and writing articles. 
      Users can read, create, and delete articles. 
      This foundational project paved the way for using Supabase in subsequent projects.
      `,
    imageURL: `/projects/sideshow-articles/cover.png`,
    repoURL: `https://github.com/mbeps/sideshow-articles`,
    programmingLanguage: `TypeScript`,
    technologies: [`Next.JS`, `React`, `Supabase`, "PostgreSQL", `Next UI`],
    type: "Full-Stack Web Dev",
    tags: [
      "Web Development",
      "Front End",
      "Back End",
      "Full Stack",
      "Database",
      "Relational Database",
      "Articles",
      "Blogs",
      "Authentication",
      "Account Management",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Noodle`,
    slug: "noodle",
    description: `
      During my second year of university, my group and I initiated a project on an open-source learning platform which served as my introduction to full-stack development. 
      This app aids students in managing tasks, assignments, exams, and storing notes and resources.
      `,
    imageURL: `/projects/noodle/cover.png`,
    repoURL: `https://github.com/ixahmedxi/noodle`,
    siteURL: `https://noodle.run/`,
    programmingLanguage: `TypeScript`,
    technologies: [
      `Next.JS`,
      "React.js",
      "Shadcn UI",
      `Tailwind CSS`,
      `Node.js`,
      `Clerk Auth`,
      `MySQL`,
      "tRPC",
      "Prisma",
      "Storybook",
      `NX`,
      `Jest`,
    ],
    type: "Full-Stack Web Dev",
    tags: [
      "Web Development",
      "Front End",
      "Back End",
      "Full Stack",
      "State Management",
      "Database",
      "Relational Database",
      "Authentication",
      "Account Management",
      "Task Management",
      "Notes",
      "Resources",
      "Exams",
      "Assignments",
      "Education",
      "Group Project",
      "Team Project",
      "University",
    ],
  },
  {
    name: `ConvoGPT`,
    slug: "convogpt",
    description: `
      In my first year of university, my group and I developed a simple game using SimpleGUI for a project. 
      We manually implemented the game's physics using vector theory and physics concepts. 
      Since there were no tutorials or guides available, we relied heavily on the library's documentation.
      `,
    imageURL: `/projects/convo-gpt/cover.png`,
    repoURL: `https://github.com/mbeps/convo-gpt`,
    programmingLanguage: `TypeScript`,
    technologies: [
      `Next.JS`,
      "React.js",
      `Tailwind CSS`,
      `Node.js`,
      "Jotai",
      `Supabase`,
      "PostgreSQL",
      "Open AI",
    ],
    type: "Full-Stack Web Dev",
    tags: [
      "Web Development",
      "Front End",
      "Back End",
      "Full Stack",
      "State Management",
      "Database",
      "Relational Database",
      "Vector",
      "AI",
      "Artificial Intelligence",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
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
    repoURL: `https://github.com/mbeps/Forum-Discussion-Flask-Backend`,
    programmingLanguage: `Python`,
    technologies: [`Flask`, "MySQL", "SQLAlchemy", "REST API"],
    type: "Back-End Web Dev",
    tags: [
      "Web Development",
      "Back End",
      "Database",
      "Relational Database",
      "Social Media",
      "Community",
      "Discussion",
      "Authentication",
      "Account Management",
      "Solo Project",
      "Individual Project",
      "Independent Project",
      "University",
    ],
  },
  {
    name: `Flask JWT Authentication`,
    slug: "flask-jwt-authentication",
    description: `
      A simple Flask app to learn how to use JWT for authentication.
      This serves as a foundation to using JWT in other projects using Flask.
      `,
    repoURL: `https://github.com/mbeps/Flask_JWT_Auth`,
    programmingLanguage: `Python`,
    technologies: [`Flask`, "JWT"],
    type: "Back-End Web Dev",
    tags: [
      "Web Development",
      "Back End",
      "Authentication",
      "Account Management",
      "Learning",
      "Demo",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Django Authentication`,
    slug: "django-authentication",
    description: `
      A simple Django app to learn how to use Django with tokens for authentication.
      This serves as a foundation to using Django in other projects.
      `,
    programmingLanguage: `Python`,
    repoURL: `https://github.com/mbeps/Django_Auth_Sys`,
    technologies: [`Django`],
    type: "Back-End Web Dev",
    tags: [
      "Web Development",
      "Back End",
      "Authentication",
      "Account Management",
      "Learning",
      "Demo",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Clerk Authentication`,
    slug: "clerk-authentication",
    description: `
      A simple Next.JS app to experiment with the Clerk Authentication SDK. 
      `,
    programmingLanguage: `TypeScript`,
    repoURL: `https://github.com/mbeps/clerk-demo`,
    technologies: [`Next.JS`, `Clerk Auth`, `Node.js`],
    type: "Back-End Web Dev",
    tags: [
      "Web Development",
      "Back End",
      "Authentication",
      "Account Management",
      "Learning",
      "Demo",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Auth0 Authentication`,
    slug: "auth0-authentication",
    description: `
      A simple Next.JS app to experiment with the Auth0 Authentication SDK. 
      This does not use the new Next.JS 13 app router as it is not supported as of the time of making this demo. 
      `,
    programmingLanguage: `TypeScript`,
    repoURL: `https://github.com/mbeps/nextjs-auth0`,
    technologies: [`Next.JS`, `Auth0`, `Node.js`],
    type: "Back-End Web Dev",
    tags: [
      "Web Development",
      "Back End",
      "Authentication",
      "Account Management",
      "Learning",
      "Demo",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
];

/**
 * Array of machine learning projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const machineLearningProjects: Project[] = [
  {
    name: `Assignment 1`,
    slug: "machine-learning-assignment-1",
    description: `
      Be able to implement machine-learning algorithms, using the Nearest Neighbours algorithm as an example. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in science and technology.
      `,
    repoURL: `https://github.com/mbeps/Machine-Learning-Assignment-1`,
    programmingLanguage: `Python`,
    technologies: [`NumPy`, `Scikit Learn`, `Matplotlib`, "Jupyter Notebook"],
    type: "Machine Learning",
    tags: [
      "Machine Learning",
      "Assignment",
      "University",
      "Best",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Assignment 2`,
    slug: "machine-learning-assignment-2",
    description: `
      Be able to use and implement machine-learning algorithms, 
      with the Lasso and inductive conformal prediction algorithms as examples. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in industry and medicine.
    `,
    repoURL: `https://github.com/mbeps/Machine-Learning-Assignment-2`,
    programmingLanguage: `Python`,
    technologies: [`NumPy`, `Scikit Learn`, `Matplotlib`, "Jupyter Notebook"],
    type: "Machine Learning",
    tags: [
      "Machine Learning",
      "Assignment",
      "University",
      "Best",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Assignment 3`,
    slug: "machine-learning-assignment-3",
    description: `
      Be able to use and implement machine-learning algorithms, 
      with the SVM, neural networks, and cross-conformal prediction algorithms as examples. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in industry.
      `,
    repoURL: `https://github.com/mbeps/Machine-Learning-Assignment-3`,
    programmingLanguage: `Python`,
    technologies: [`NumPy`, `Scikit Learn`, `Matplotlib`, "Jupyter Notebook"],
    type: "Machine Learning",
    tags: [
      "Machine Learning",
      "Assignment",
      "University",
      "Best",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Lab Questions`,
    slug: "machine-learning-lab-questions",
    description: `
      Implemented various machine learning algorithms and techniques learned during the course, 
      such as Nearest Neighbours, conformal prediction, linear regression, Ridge Regression, Lasso, data preprocessing, parameter selection, 
      kernels, neural networks, support vector machines, scikit-learn pipelines, and cross-conformal predictors.`,
    repoURL: `https://github.com/mbeps/Machine-Learning-Labs-Questions`,
    programmingLanguage: `Python`,
    technologies: [`NumPy`, `Scikit Learn`, `Matplotlib`, "Jupyter Notebook"],
    type: "Machine Learning",
    tags: [
      "Machine Learning",
      "Assignment",
      "University",
      "Best",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: "Computational Finance Assignment",
    slug: "computational-finance-assignment",
    description: `
      An assignment exploring valuation of options using methods like Black-Scholes, binomial trees, and Monte Carlo. 
      Also includes theoretical aspects of put-call parity and financial arbitrage opportunities.`,
    repoURL: `https://github.com/mbeps/Computation_Finance_Assignment`,
    programmingLanguage: `Python`,
    technologies: [`NumPy`, `Matplotlib`, "Jupyter Notebook"],
    type: "Machine Learning",
    tags: [
      "Computational Finance",
      "University",
      "Best",
      "Individual Project",
      "Independent Project",
    ],
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
    imageURL: `/projects/osmos-game/cover.png`,
    repoURL: `https://github.com/mbeps/Osmos_Game`,
    programmingLanguage: `Python`,
    technologies: [`SimpleGUI`],
    type: "Game Dev",
    tags: [
      "Game Development",
      "Assignment",
      "University",
      "Physics",
      "GUI",
      "Team Project",
      "Group Project",
      "Best",
    ],
  },
  {
    name: "Surface Fight",
    slug: "surface-fight",
    description: `
      The game is about a robot shooting skeletons and trying to survive. 
      Every time he kills all the skeletons more of them will come at once.
      This was a simple game made back in secondary school. 
    `,
    programmingLanguage: "GML",
    type: "Game Dev",
    technologies: [`Game Maker Studio 2`],
    imageURL: `/projects/surface-fight/cover.png`,
    siteURL: "https://bepary-games.itch.io/surface-fight",
    tags: [
      "Game Development",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
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
    programmingLanguage: "GML",
    type: "Game Dev",
    technologies: [`Game Maker Studio 2`],
    imageURL: `/projects/platformer/cover.png`,
    siteURL: "https://bepary-games.itch.io/platformer",
    tags: [
      "Game Development",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
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
    programmingLanguage: "GML",
    type: "Game Dev",
    technologies: [`Game Maker Studio 2`],
    imageURL: `/projects/platformer-death-walk/cover.png`,
    siteURL: "https://bepary-games.itch.io/platformer-death-walk",
    tags: [
      "Game Development",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: "Coding Breakout",
    slug: "coding-breakout",
    description: `
      In Breakout, a layer of bricks lines the top third of the screen
      and the goal is to destroy them all by repeatedly bouncing a ball off a paddle into them.
      This was a simple game made back in secondary school. 
    `,
    programmingLanguage: "GML",
    type: "Game Dev",
    technologies: [`Game Maker Studio 2`],
    imageURL: `/projects/coding-breakout/cover.png`,
    siteURL: "https://bepary-games.itch.io/coding-break-out",
    tags: [
      "Game Development",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: "Catch Maruf",
    slug: "catch-maruf",
    description: `
      A basic game where the focus is to click on a character
      as many times as possible within a given time limit.
      This was a simple game made back in secondary school. 
    `,
    programmingLanguage: "GML",
    type: "Game Dev",
    technologies: [`Game Maker Studio 2`],
    imageURL: `/projects/catch-maruf/cover.png`,
    siteURL: "https://bepary-games.itch.io/catch-maruf",
    tags: [
      "Game Development",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: "Against Gravity",
    slug: "against-gravity",
    description: `
      A basic game where the aim is to reach the end of the level
      by making use of the gravity switch and avoiding the obstacles.
      This was a simple game made back in secondary school. 
    `,
    programmingLanguage: "GML",
    type: "Game Dev",
    technologies: [`Game Maker Studio 2`],
    imageURL: `/projects/against-gravity/cover.png`,
    siteURL: "https://bepary-games.itch.io/against-gravity",
    tags: [
      "Game Development",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: "Scrolling Shooter",
    slug: "scrolling-shooter",
    description: `
      This is a game where the aim is to shoot the enemies and avoid their bullets.
      This was a simple game made back in secondary school. 
    `,
    programmingLanguage: "GML",
    type: "Game Dev",
    technologies: [`Game Maker Studio 2`],
    imageURL: `/projects/scrolling-shooter/cover.png`,
    siteURL: "https://bepary-games.itch.io/scrolling-shooter",
    tags: [
      "Game Development",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: "Dungeon",
    slug: "dungeon",
    description: `
      A very simple 3D game where the aim is to reach the end of the level through the maze.
      This was a simple game made back in secondary school. 
    `,
    programmingLanguage: "GML",
    type: "Game Dev",
    technologies: [`Game Maker Studio 2`],
    imageURL: `/projects/dungeon/cover.png`,
    siteURL: "https://bepary-games.itch.io/dungeon-",
    tags: [
      "Game Development",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: " Veg Ninja",
    slug: "veg-ninja",
    description: `
      A simple game where the aim is to cut the vegetables and avoid the bombs.
      This is very similar to the popular game Fruit Ninja.
      This was a simple game made back in secondary school. 
    `,
    programmingLanguage: "GML",
    type: "Game Dev",
    technologies: [`Game Maker Studio 2`],
    imageURL: `/projects/veg-ninja/cover.png`,
    siteURL: "https://bepary-games.itch.io/vej-ninja",
    tags: [
      "Game Development",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: " Angry Cats Space",
    slug: "angry-cats-space",
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    programmingLanguage: "GML",
    type: "Game Dev",
    technologies: [`Game Maker Studio 2`],
    imageURL: `/projects/angry-cats-space/cover.png`,
    siteURL: "https://bepary-games.itch.io/angry-cats-space",
    tags: [
      "Game Development",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: " Angry Cats",
    slug: "angry-cats",
    description: `
      A game where the aim is to shoot the cats to kill all the rats. 
      This is very similar to the popular game Angry Birds.
      This was a simple game made back in secondary school. 
    `,
    programmingLanguage: "GML",
    type: "Game Dev",
    technologies: [`Game Maker Studio 2`],
    imageURL: `/projects/angry-cats/cover.png`,
    siteURL: "https://bepary-games.itch.io/angry-cats-space",
    tags: [
      "Game Development",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
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
    programmingLanguage: "Python",
    type: "Other",
    technologies: ["Matplotlib"],
    repoURL: "https://github.com/mbeps/algorithms",
    tags: [
      "Algorithms",
      "Searching",
      "Sorting",
      "Jupyter Notebook",
      "University",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Automated Setup`,
    slug: "automated-setup",
    description: `
      A shell script which automates the setup of a new Linux machine.
      This is specifically for my Fedora install.
      `,
    repoURL: `https://github.com/mbeps/AutomatedSetup`,
    programmingLanguage: `Shell`,
    type: "Other",
    tags: [
      "Linux",
      "Fedora",
      "Automation",
      "Scripting",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
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
    repoURL: `https://github.com/stars/mbeps/lists/leetcode`,
    programmingLanguage: `Python`,
    technologies: [`Pytest`, "GitHub Actions"],
    type: "Other",
    tags: [
      "testing",
      "algorithms",
      "solutions",
      "Continuous Integration",
      "Continuous Deployment",
      "CI/CD",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
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
      The assignment highlighted the significance of following efficient software development processes rather than just focusing on the final implementation.

      `,
    repoURL: `https://github.com/mbeps/Calculator-Assignment`,
    programmingLanguage: `Java`,
    technologies: [`Maven`, "JUnit"],
    type: "Java Assignments",
    tags: [
      "Assignment",
      "University",
      "Software Engineering",
      "Test Driven Development",
      "TDD",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Botanic-Garden-Planner`,
    slug: "botanic-garden-planner-assignment",
    description: `
      Simple botanic garden planner app built using Java.
      This was in first year to learn about Java and object oriented programming.`,
    repoURL: `https://github.com/mbeps/Botanic-Garden-Planner`,
    programmingLanguage: `Java`,
    type: "Java Assignments",
    tags: [
      "Assignment",
      "University",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: "Track & Trace",
    slug: "track-and-trace-assignment",
    description: `Simple app to track Covid cases. 
      This was in first year to learn about Java and object oriented programming.`,
    repoURL: `https://github.com/mbeps/Track_and_Trace`,
    programmingLanguage: `Java`,
    type: "Java Assignments",
    tags: [
      "Assignment",
      "University",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Hollomon`,
    slug: "hollomon-assignment",
    description: `This was in first year to learn about Java and object oriented programming.`,
    repoURL: `https://github.com/mbeps/Hollomon`,
    programmingLanguage: `Java`,
    type: "Java Assignments",
    tags: [
      "Assignment",
      "University",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
  {
    name: `Database Mini Project`,
    slug: "database-mini-project",
    description: `Learning to interact with a database using Java.`,
    repoURL: `https://github.com/mbeps/DatabasesMiniProject`,
    programmingLanguage: `Java`,
    technologies: [`PostgreSQL`],
    type: "Java Assignments",
    tags: [
      "Assignment",
      "University",
      "Solo Project",
      "Individual Project",
      "Independent Project",
    ],
  },
];

export {
  webdevProjects,
  machineLearningProjects,
  extraWebDevProjects,
  gameDevProjects,
  otherProjects,
  javaAssignments,
  backendWebDevProjects,
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
