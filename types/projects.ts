/**
 * Interface representing a project.
 */
export default interface Project {
  name: string;
  description: string;
  imageURL?: string;
  repoURL?: string;
  siteURL?: string;
  articleURL?: string;
  programmingLanguage: string;
  technologies?: string[];
}

/**
 * Array of web development projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const webdevProjects: Project[] = [
  {
    name: `Circus Discussions`,
    description: `A social media discussion platform for engaging user interactions. 
      Built with Firebase, Next.JS, and Chakra UI as a final year project for university.`,
    imageURL: `/projects/circus-discussions-fyp.png`,
    repoURL: `https://github.com/mbeps/next_discussion_platform`,
    siteURL: `https://circus-discussion.vercel.app/`,
    articleURL: `/posts/project-circus-discussion`,
    programmingLanguage: `TypeScript`,
    technologies: [
      `Next.JS`,
      "React",
      `Chakra UI`,
      `Firebase`,
      `Recoil`,
      "Docker",
    ],
  },
  {
    name: `Ringmaster Messaging`,
    description: `A simple messaging app to allow users to chat with other users or in group chats. 
      This was for learning custom back-ends and was built using Next.JS, NextAuth, MongoDB, Pusher, and Tailwind CSS.`,
    imageURL: `/projects/ringmaster-messaging.png`,
    repoURL: `https://github.com/mbeps/ringmaster-messaging`,
    siteURL: `https://ringmaster-messaging.vercel.app/`,
    articleURL: `/posts/project-ringmaster-messaging`,
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
  },
  {
    name: `Drumroll Music`,
    description: `A simple music streaming site where users can upload and listen to music. 
      This is built using Supabase, Next.JS, and Tailwind CSS.`,
    imageURL: `/projects/drumroll-music.png`,
    repoURL: `https://github.com/mbeps/drumroll-music`,
    articleURL: `/posts/project-drumroll-music`,
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
    description: `A simple site to allow users to read and write articles. 
      This was created to learn Supabase for the first time. 
      This was the foundation to using Supabase in other projects.`,
    imageURL: `/projects/sideshow-articles.png`,
    repoURL: `https://github.com/mbeps/sideshow-articles`,
    programmingLanguage: `TypeScript`,
    technologies: [`Next.JS`, `React`, `Supabase`, "PostgreSQL", `Next UI`],
  },
  {
    name: `Noodle`,
    description: `This is an open source learning platform that I started as a ground project in my second year of university. 
      This was my first introduction to full stack development. `,
    imageURL: `/projects/noodle.png`,
    repoURL: `https://github.com/ixahmedxi/noodle`,
    programmingLanguage: `TypeScript`,
    technologies: [
      `Next.JS`,
      "React",
      `Tailwind CSS`,
      `NextAuth`,
      `MySQL`,
      "tRPC",
      "Storybook",
      `NX`,
    ],
  },
  {
    name: `ConvoGPT`,
    description: `This is a simple client for using the OpenAI API locally. 
      This was created to learn how to use the OpenAI API and to create a simple client for it. 
      This is built using Supabase (PgVector), Next.JS, and Tailwind CSS. This is a work in progress.`,
    imageURL: `/projects/convo-gpt.png`,
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
  },
  {
    name: `Python Flask Forum Backend`,
    description: `This is a custom backend for the first iteration of the discussion platform. 
      This was created to learn how to create a custom backend using Python and Flask. 
      This is built using Python, Flask, and MySQL.`,
    repoURL: `https://github.com/mbeps/Forum-Discussion-Flask-Backend`,
    programmingLanguage: `Python`,
    technologies: [`Flask`, "MySQL", "SQLAlchemy", "REST API"],
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
    description: `Be able to implement machine-learning algorithms, using the Nearest Neighbours algorithm as an example. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in science and technology.`,
    repoURL: `https://github.com/mbeps/Machine-Learning-Assignment-1`,
    programmingLanguage: `Python`,
    technologies: [`NumPy`, `Matplotlib`],
  },
  {
    name: `Assignment 2`,
    description: `Be able to use and implement machine-learning algorithms, with the Lasso and inductive conformal prediction algorithms as examples. Have an understanding of ways to apply the ideas and algorithms of machine learning in industry and medicine.`,
    repoURL: `https://github.com/mbeps/Machine-Learning-Assignment-2`,
    programmingLanguage: `Python`,
    technologies: [`NumPy`, `Matplotlib`],
  },
  {
    name: `Assignment 3`,
    description: `Be able to use and implement machine-learning algorithms, with the SVM, neural networks, and cross-conformal prediction algorithms as examples. 
      Have an understanding of ways to apply the ideas and algorithms of machine learning in industry.`,
    repoURL: `https://github.com/mbeps/Machine-Learning-Assignment-3`,
    programmingLanguage: `Python`,
    technologies: [`NumPy`, `Matplotlib`],
  },
  {
    name: `Lab Questions`,
    description: `Implemented various machine learning algorithms and techniques learned during the course, 
      such as Nearest Neighbours, conformal prediction, linear regression, Ridge Regression, Lasso, data preprocessing, parameter selection, 
      kernels, neural networks, support vector machines, scikit-learn pipelines, and cross-conformal predictors.`,
    repoURL: `https://github.com/mbeps/Machine-Learning-Labs-Questions`,
    programmingLanguage: `Python`,
    technologies: [`NumPy`, `Matplotlib`],
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
    description: `This is a simple game created using SimpleGUI for a group project in my first year of university. 
      This required us to rely on the documentation as there was no tutorials or guides on how to use the library.`,
    imageURL: `/projects/osmos-game.png`,
    repoURL: `https://github.com/mbeps/Osmos_Game`,
    programmingLanguage: `Python`,
    technologies: [`SimpleGUI`],
  },
  {
    name: `Automated Setup`,
    description: `A shell script which automates the setup of a new Linux machine.
      This is specifically for my Fedora install.`,
    repoURL: `https://github.com/mbeps/AutomatedSetup`,
    programmingLanguage: `Shell`,
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
    description: `Simple calculator app built using Java as a Maven project. 
      This was to learn about software design patterns and life cycles.`,
    repoURL: `https://github.com/mbeps/Calculator-Assignment`,
    programmingLanguage: `Java`,
    technologies: [`Maven`, "JUnit"],
  },
  {
    name: `Botanic-Garden-Planner`,
    description: `Simple botanic garden planner app built using Java.
      This was in first year to learn about Java and object oriented programming.`,
    repoURL: `https://github.com/mbeps/Botanic-Garden-Planner`,
    programmingLanguage: `Java`,
  },
  {
    name: "Track & Trace",
    description: `Simple app to track Covid cases. 
      This was in first year to learn about Java and object oriented programming.`,
    repoURL: `https://github.com/mbeps/Track_and_Trace`,
    programmingLanguage: `Java`,
  },
  {
    name: `Hollomon`,
    description: `This was in first year to learn about Java and object oriented programming.`,
    repoURL: `https://github.com/mbeps/Hollomon`,
    programmingLanguage: `Java`,
  },
  {
    name: `Database Mini Project`,
    description: `Learning to interact with a database using Java.`,
    repoURL: `https://github.com/mbeps/DatabasesMiniProject`,
    programmingLanguage: `Java`,
    technologies: [`PostgreSQL`],
  },
];

export {
  webdevProjects,
  machineLearningProjects,
  extraWebDevProjects,
  otherProjects,
  javaAssignments,
};
