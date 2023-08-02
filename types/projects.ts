/**
 * Interface representing a project.
 */
export default interface Project {
  name: string;
  slug: string;
  description: string;
  imageURL?: string;
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
      A custom back-end learning project involved creating a straightforward messaging app. 
      Users can chat one-on-one, participate in group chats, send text messages, share images, view active users, and personalize their profiles. 
      `,
    imageURL: `/projects/ringmaster-messaging/cover.png`,
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
      My first major project using Supabase was a basic music streaming site. 
      Users can upload songs, search and listen to music, as well as like the songs they enjoy.
      `,
    imageURL: `/projects/drumroll-music/cover.png`,
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
  {
    name: `Magician AI`,
    slug: "magician-ai",
    description: `
    Magician AI is a SaaS platform that leverages AI to enable users to generate various media types and have dynamic conversations. Developing this project allowed me to explore Stripe, Clerk authentication, and unique AI APIs.
  `,
    imageURL: `/projects/magician-ai/cover.png`,
    repoURL: `https://github.com/mbeps/magician-ai`,
    programmingLanguage: `TypeScript`,
    siteURL: "https://magician-ai.vercel.app/",
    technologies: [
      `Next.JS`,
      "React",
      `Shadcn UI`,
      `Radix UI`,
      `Tailwind CSS`,
      "MySQL",
      "Zustand",
      "Clerk Auth",
      "Prisma",
      "Stripe",
      "Open AI",
      "Replicate AI",
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
      To familiarize myself with Supabase, I developed a simple website for reading and writing articles. 
      Users can read, create, and delete articles. 
      This foundational project paved the way for using Supabase in subsequent projects.
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
      ing my second year of university, my group and I initiated a project on an open-source learning platform which served as my introduction to full-stack development. 
      This app aids students in managing tasks, assignments, exams, and storing notes and resources.
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
      In my first year of university, my group and I developed a simple game using SimpleGUI for a project. 
      We manually implemented the game's physics using vector theory and physics concepts. 
      Since there were no tutorials or guides available, we relied heavily on the library's documentation.
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
      "Open AI",
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
