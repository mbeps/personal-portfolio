/**
 * Interface representing a project.
 */
export default interface Project {
  name: string;
  description: string;
  imageURL?: string;
  projectURL: string;
  siteURL?: string;
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
      "A social media discussion platform that enables users to engage with each other in a variety of ways. This is built using Firebase, Next.JS, and Chakra UI.",
    imageURL: "/projects/circus-discussions-fyp.png",
    projectURL: "https://github.com/mbeps/next_discussion_platform",
    siteURL: "https://circus-discussion.vercel.app/",
  },
  {
    name: "Drumroll Music",
    description:
      "A simple music streaming site where users can upload and listen to music. This is built using Supabase, Next.JS, and Tailwind CSS.",
    imageURL: "/projects/drumroll-music.png",
    projectURL: "https://github.com/mbeps/drumroll-music",
    siteURL: "",
  },
  {
    name: "Ringmaster Messaging",
    description:
      "A simple messaging app to allow users to chat with other users or in group chats. This was for learning custom back-ends and was built using Next.JS, NextAuth, MongoDB, Pusher, and Tailwind CSS.",
    imageURL: "/projects/ringmaster-messaging.png",
    projectURL: "https://github.com/mbeps/ringmaster-messaging",
    siteURL: "",
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
    projectURL: "https://github.com/mbeps/Machine-Learning-Assignment-1",
  },
  {
    name: "Assignment 2",
    description:
      "Be able to use and implement machine-learning algorithms, with the Lasso and inductive conformal prediction algorithms as examples. Have an understanding of ways to apply the ideas and algorithms of machine learning in industry and medicine.",
    projectURL: "https://github.com/mbeps/Machine-Learning-Assignment-2",
  },
  {
    name: "Assignment 3",
    description:
      "Be able to use and implement machine-learning algorithms, with the SVM, neural networks, and cross-conformal prediction algorithms as examples. Have an understanding of ways to apply the ideas and algorithms of machine learning in industry.",
    projectURL: "https://github.com/mbeps/Machine-Learning-Assignment-3",
  },
  {
    name: "Lab Questions",
    description:
      "Implemented various machine learning algorithms and techniques learned during the course, such as Nearest Neighbours, conformal prediction, linear regression, Ridge Regression, Lasso, data preprocessing, parameter selection, kernels, neural networks, support vector machines, scikit-learn pipelines, and cross-conformal predictors.",
    projectURL: "https://github.com/mbeps/Machine-Learning-Labs-Questions",
  },
];

export { webdevProjects, machineLearningProjects };
