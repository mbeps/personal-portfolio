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
}

/**
 * Array of web development projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const webdevProjects: Project[] = [
  {
    name: "Circus Discussions",
    description:
      "A social media discussion platform for engaging user interactions. Built with Firebase, Next.JS, and Chakra UI as a final year project for university.",
    imageURL: "/projects/circus-discussions-fyp.png",
    repoURL: "https://github.com/mbeps/next_discussion_platform",
    siteURL: "https://circus-discussion.vercel.app/",
  },
  {
    name: "Drumroll Music",
    description:
      "A simple music streaming site where users can upload and listen to music. This is built using Supabase, Next.JS, and Tailwind CSS.",
    imageURL: "/projects/drumroll-music.png",
    repoURL: "https://github.com/mbeps/drumroll-music",
    siteURL: "",
  },
  {
    name: "Ringmaster Messaging",
    description:
      "A simple messaging app to allow users to chat with other users or in group chats. This was for learning custom back-ends and was built using Next.JS, NextAuth, MongoDB, Pusher, and Tailwind CSS.",
    imageURL: "/projects/ringmaster-messaging.png",
    repoURL: "https://github.com/mbeps/ringmaster-messaging",
    siteURL: "",
  },
];

/**
 * Array of extra web development projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const extraWebDevProjects: Project[] = [
  {
    name: "Sideshow Articles",
    description:
      "A simple site to allow users to read and write articles. This was created to learn Supabase for the first time. This was the foundation to using Supabase in other projects.",
    imageURL: "/projects/sideshow-articles.png",
    repoURL: "https://github.com/mbeps/sideshow-articles",
  },
  {
    name: "Noodle",
    description:
      "This is an open source learning platform that I started as a ground project in my second year of university. This was my first introduction to full stack development. ",
    imageURL: "/projects/noodle.png",
    repoURL: "https://github.com/ixahmedxi/noodle",
  },
  {
    name: "ConvoGPT",
    description:
      "This is a simple client for using the OpenAI API locally. This was created to learn how to use the OpenAI API and to create a simple client for it. This is built using Supabase (Vector Pg), Next.JS, and Tailwind CSS. This is a work in progress.",
    imageURL: "/projects/convo-gpt.png",
    repoURL: "https://github.com/mbeps/convo-gpt",
  },
  {
    name: "Python Flask Forum Backend",
    description:
      "This is a custom backend for the first iteration of the discussion platform. This was created to learn how to create a custom backend using Python and Flask. This is built using Python, Flask, and MySQL.",
    repoURL: "https://github.com/mbeps/Forum-Discussion-Flask-Backend",
  },
];

/**
 * Array of machine learning projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const machineLearningProjects: Project[] = [
  {
    name: "Assignment 1",
    description:
      "Be able to implement machine-learning algorithms, using the Nearest Neighbours algorithm as an example. Have an understanding of ways to apply the ideas and algorithms of machine learning in science and technology.",
    repoURL: "https://github.com/mbeps/Machine-Learning-Assignment-1",
  },
  {
    name: "Assignment 2",
    description:
      "Be able to use and implement machine-learning algorithms, with the Lasso and inductive conformal prediction algorithms as examples. Have an understanding of ways to apply the ideas and algorithms of machine learning in industry and medicine.",
    repoURL: "https://github.com/mbeps/Machine-Learning-Assignment-2",
  },
  {
    name: "Assignment 3",
    description:
      "Be able to use and implement machine-learning algorithms, with the SVM, neural networks, and cross-conformal prediction algorithms as examples. Have an understanding of ways to apply the ideas and algorithms of machine learning in industry.",
    repoURL: "https://github.com/mbeps/Machine-Learning-Assignment-3",
  },
  {
    name: "Lab Questions",
    description:
      "Implemented various machine learning algorithms and techniques learned during the course, such as Nearest Neighbours, conformal prediction, linear regression, Ridge Regression, Lasso, data preprocessing, parameter selection, kernels, neural networks, support vector machines, scikit-learn pipelines, and cross-conformal predictors.",
    repoURL: "https://github.com/mbeps/Machine-Learning-Labs-Questions",
  },
];

/**
 * Array of game projects.
 * This is used to populate the projects page.
 * @type {Project[]}
 */
const gameProjects: Project[] = [
  {
    name: "Osmos Game",
    description:
      "This is a simple game created using SimpleGUI for a group project in my first year of university. This required us to rely on the documentation as there was no tutorials or guides on how to use the library.",
    imageURL: "/projects/osmos-game.png",
    repoURL: "https://github.com/mbeps/Osmos_Game",
  },
];

export {
  webdevProjects,
  machineLearningProjects,
  extraWebDevProjects,
  gameProjects,
};
