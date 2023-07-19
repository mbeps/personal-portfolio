/**
 * Interface representing a project.
 */
export default interface Project {
  name: string;
  slug: string;
  description: string;
  imageURL?: string;
  imagesList?: string[];
  repoURL?: string;
  siteURL?: string;
  articleURL?: string;
  programmingLanguage: string;
  technologies?: string[];
  type:
    | "Web Dev"
    | "Extra Web Dev"
    | "Backend Web Dev"
    | "Machine Learning"
    | "Java Assignments"
    | "Other";
}

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
    imagesList: [
      "1.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "14.png",
      "15.png",
      "16.png",
      "17.png",
      "18.png",
      "19.png",
      "20.png",
      "21.png",
      "22.png",
      "23.png",
      "24.png",
      "25.png",
      "26.png",
      "27.png",
      "28.png",
      "30.png",
      "31.png",
      "32.png",
      "33.png",
      "34.png",
      "35.png",
      "36.png",
    ],
    repoURL: `https://github.com/mbeps/next_discussion_platform`,
    siteURL: `https://circus-discussion.vercel.app/`,
    articleURL: `/blogs/project-circus-discussion`,
    programmingLanguage: `TypeScript`,
    technologies: [
      `Next.JS`,
      "React",
      `Chakra UI`,
      `Firebase`,
      `Recoil`,
      "Docker",
    ],
    type: "Web Dev",
  },
  {
    name: `Ringmaster Messaging`,
    slug: "ringmaster-messaging",
    description: `
      A simple messaging app to allow users to chat with other users or in group chats. 
      Users can send normal text messages, images, view active users, and edit their profile.
      This was for learning custom back-ends. 
      `,
    imageURL: `/projects/ringmaster-messaging/cover.png`,
    imagesList: [
      "login-desktop.png",
      "login-mobile.png",
      "contacts-desktop.png",
      "contacts-mobile.png",
      "messages-desktop.png",
      "messages-mobile.png",
      "single-conversation-desktop.png",
      "single-conversation-mobile.png",
      "single-conversation-modal-desktop.png",
      "single-conversation-modal-mobile.png",
      "group-conversation-desktop.png",
      "group-conversation-mobile.png",
      "group-conversation-modal-desktop.png",
      "group-conversation-modal-mobile.png",
      "create-groupchat-desktop.png",
      "create-groupchat-mobile.png",
      "send-image-desktop.png",
      "send-image-mobile.png",
      "profile-settings-desktop.png",
      "profile-settings-mobile.png",
    ],
    repoURL: `https://github.com/mbeps/ringmaster-messaging`,
    siteURL: `https://ringmaster-messaging.vercel.app/`,
    articleURL: `/blogs/project-ringmaster-messaging`,
    programmingLanguage: `TypeScript`,
    technologies: [
      "Next.JS",
      "React",
      "NextAuth",
      "MongoDB",
      "Prisma",
      "Pusher",
      "Cloudinary",
      "Tailwind CSS",
      "Headless UI",
      "Zustand",
      "Docker",
    ],
    type: "Web Dev",
  },
  {
    name: `Drumroll Music`,
    slug: "drumroll-music",
    description: `
      A simple music streaming site where users can upload and listen to music.
      Users can upload songs, search for songs, listen to songs and like songs.
      This was my first major project using Supabase.
      `,
    imageURL: `/projects/drumroll-music/cover.png`,
    imagesList: [
      "home-desktop.png",
      "home-mobile.png",
      "search-desktop.png",
      "search-mobile.png",
      "search-song-desktop.png",
      "search-song-mobile.png",
      "search-not-found-desktop.png",
      "search-not-found-mobile.png",
      "player-desktop.png",
      "player-mobile.png",
      "upload-desktop.png",
    ],
    repoURL: `https://github.com/mbeps/drumroll-music`,
    articleURL: `/blogs/project-drumroll-music`,
    programmingLanguage: `TypeScript`,
    technologies: [
      `Next.JS`,
      "React",
      `Supabase`,
      "PostgreSQL",
      `Tailwind CSS`,
      `Radix UI`,
      "Zustand",
    ],
    type: "Web Dev",
  },
];

/**
 * Array of extra web development projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const extraWebDevProjects: Project[] = [
  {
    name: `Sideshow Articles`,
    slug: "sideshow-articles",
    description: `
      A simple site to allow users to read and write articles. 
      Users can read all articles, create and delete articles. 
      This was created to learn Supabase for the first time. 
      This was the foundation to using Supabase in other projects.
      `,
    imageURL: `/projects/sideshow-articles/cover.png`,
    repoURL: `https://github.com/mbeps/sideshow-articles`,
    programmingLanguage: `TypeScript`,
    technologies: [`Next.JS`, `React`, `Supabase`, "PostgreSQL", `Next UI`],
    type: "Extra Web Dev",
  },
  {
    name: `Noodle`,
    slug: "noodle",
    description: `
      This is an open source learning platform that I started as a ground project in my second year of university. 
      This app allows students to keep track of tasks, assignments, and exams. 
      It also allows students to store notes and resources.
      This was my first introduction to full stack development. 
      `,
    imageURL: `/projects/noodle/cover.png`,
    repoURL: `https://github.com/ixahmedxi/noodle`,
    siteURL: `https://noodle.run/`,
    programmingLanguage: `TypeScript`,
    technologies: [
      `Next.JS`,
      "React",
      `Tailwind CSS`,
      `NextAuth`,
      `MySQL`,
      "tRPC",
      "Prisma",
      "Storybook",
      `NX`,
      `Jest`,
    ],
    type: "Extra Web Dev",
  },
  {
    name: `ConvoGPT`,
    slug: "convogpt",
    description: `
      This is a simple client for using the OpenAI API locally. 
      The user can select a desired modal and enter a prompt to generate a response.
      This was created to learn how to use the OpenAI API and to create a simple client and to learn PgVector.
      `,
    imageURL: `/projects/convo-gpt/cover.png`,
    repoURL: `https://github.com/mbeps/convo-gpt`,
    programmingLanguage: `TypeScript`,
    technologies: [
      `Next.JS`,
      "React",
      `Tailwind CSS`,
      "Jotai",
      `Supabase`,
      "PostgreSQL",
    ],
    type: "Extra Web Dev",
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
    type: "Backend Web Dev",
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
    type: "Backend Web Dev",
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
    type: "Backend Web Dev",
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
    technologies: [`NumPy`, `Matplotlib`],
    type: "Machine Learning",
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
    technologies: [`NumPy`, `Matplotlib`],
    type: "Machine Learning",
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
    technologies: [`NumPy`, `Matplotlib`],
    type: "Machine Learning",
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
    technologies: [`NumPy`, `Matplotlib`],
    type: "Machine Learning",
  },
];

/**
 * Array of other projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const otherProjects: Project[] = [
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
    type: "Other",
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
    slug: "software-engineering-calculator-assignment",
    description: `
      Simple calculator app built using Java as a Maven project. 
      This was to learn about software design patterns and life cycles.
      `,
    repoURL: `https://github.com/mbeps/Calculator-Assignment`,
    programmingLanguage: `Java`,
    technologies: [`Maven`, "JUnit"],
    type: "Java Assignments",
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
  },
  {
    name: "Track & Trace",
    slug: "track-and-trace-assignment",
    description: `Simple app to track Covid cases. 
      This was in first year to learn about Java and object oriented programming.`,
    repoURL: `https://github.com/mbeps/Track_and_Trace`,
    programmingLanguage: `Java`,
    type: "Java Assignments",
  },
  {
    name: `Hollomon`,
    slug: "hollomon-assignment",
    description: `This was in first year to learn about Java and object oriented programming.`,
    repoURL: `https://github.com/mbeps/Hollomon`,
    programmingLanguage: `Java`,
    type: "Java Assignments",
  },
  {
    name: `Database Mini Project`,
    slug: "database-mini-project",
    description: `Learning to interact with a database using Java.`,
    repoURL: `https://github.com/mbeps/DatabasesMiniProject`,
    programmingLanguage: `Java`,
    technologies: [`PostgreSQL`],
    type: "Java Assignments",
  },
];

export {
  webdevProjects,
  machineLearningProjects,
  extraWebDevProjects,
  otherProjects,
  javaAssignments,
  backendWebDevProjects,
};
