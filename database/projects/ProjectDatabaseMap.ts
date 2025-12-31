import addNestedSkillsMaterialList from "@/lib/material/addNestedSkillsMaterialList";
import addProjectThumbnail from "@/lib/material/projects/addProjectThumbnail";
import ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import ProjectInterface from "@/database/projects/ProjectInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import ProjectCategoriesEnum from "@/enums/project/ProjectCategoriesEnum";
import ProjectTypeEnum from "@/enums/project/ProjectTypeEnum";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import Database from "@/interfaces/Database";
import CertificateDatabaseKeys from "../certificates/CertificateDatabaseKeys";
import RoleDatabaseKeys from "../roles/RoleDatabaseKeys";
import skillDatabaseMap from "../skills/SkillDatabaseMap";
import BlogDatabaseKeys from "../blogs/BlogDatabaseKeys";

/**
 * Hashmap of projects with keys as {@link SkillDatabaseKeys} and values as {@link ProjectInterface}.
 * The order of the projects is the order that is used when displaying the projects on the website.
 * The order skills is the order that is used when displaying the skills on the website.
 */
const projectMap: Database<ProjectInterface> = {
  //^ Artificial Intelligence Projects
  [ProjectDatabaseKeys.AlignmentInLargeLanguageModels]: {
    name: "Alignment in LLMs",
    description: `
    Specifically looked into and improved hybrid-reasoning models using LoRA and novel hybrid-training technique.
    Regular supervised fine-tuning on reasoning models causes them to forget their reasoning capabilities.
    This is solved using my novel hybrid training technique.`,
    repositoryURL:
      "https://github.com/stars/mbeps/lists/cultural-alignment-in-llms",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.PyTorch,
      SkillDatabaseKeys.Transformers,
      SkillDatabaseKeys.HuggingFace,
      SkillDatabaseKeys.LargeLanguageModels,
      SkillDatabaseKeys.Pandas,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.NaturalLanguageProcessing,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.FineTuning,
      SkillDatabaseKeys.Benchmarking,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    relatedMaterials: [ModuleDatabaseKeys.KCL_IndividualProject],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.AlignmentInLargeLanguageModels
    ),
  },
  [ProjectDatabaseKeys.LinuxGnomeMcp]: {
    name: "Linux GNOME MCP Server",
    description: `
      An MCP server which allows AI agents to connect and interact with the GNOME desktop environment on Linux.
      This allows the AI agents to perform various tasks such as opening applications, changing themes, and more.
      `,
    repositoryURL: "https://github.com/mbeps/linux-gnome-mcp",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Personal,
    relatedMaterials: [BlogDatabaseKeys.ModelContextProtocol],
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ModelContextProtocol,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.PyTest,
    ],
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.LinuxGnomeMcp),
  },
  [ProjectDatabaseKeys.HandWrittenDigitClassifier]: {
    name: "Handwritten Digit Classifier",
    description: `
      A handwritten digit classifier using built using a Convolutional Neural Network (CNN).
      Used various techniques such as data augmentation, batch normalisation, and dropout to improve the model's performance.
      `,
    repositoryURL:
      "https://github.com/mbeps/pattern-recognition-neural-network-coursework-1",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_PatternRecognitionNeuralNetworksDeepLearning,
    ],
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Keras,
      SkillDatabaseKeys.TensorFlow,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.ComputerVision,
    ],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.HandWrittenDigitClassifier
    ),
  },
  [ProjectDatabaseKeys.VisionTransformerFromScratch]: {
    name: "Vision Transformer",
    description: `
      A compact implementation of a Vision Transformer (ViT). The code is written for learning and experiments.
      `,
    repositoryURL: "https://github.com/mbeps/vision-transformer",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Personal,
    relatedMaterials: [BlogDatabaseKeys.Transformer],
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.PyTorch,
      SkillDatabaseKeys.Matplotlib,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.ComputerVision,
    ],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.VisionTransformerFromScratch
    ),
    archived: true,
  },
  [ProjectDatabaseKeys.AdultIncomePrediction]: {
    name: "Adult Income Prediction",
    description: `
      Comparing various classification algorithms to predict whether an adult earns more than $50,000 a year.
      Emphasis is on feature engineering, data preprocessing with One-Hot Encoding, and model optimization through hyperparameter tuning.`,
    repositoryURL: "https://github.com/mbeps/Adults_Income_Prediction",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Seaborn,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Personal,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.AdultIncomePrediction
    ),
    archived: true,
  },
  [ProjectDatabaseKeys.HousePricePrediction]: {
    name: "House Price Prediction",
    description: `
      Comparing various regression algorithms to predict house prices in relation to the distance from the coast.
      Emphasis is on feature engineering, data preprocessing with One-Hot Encoding, and model optimization through hyperparameter tuning.`,
    repositoryURL: "https://github.com/mbeps/House_Price_Prediction",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Seaborn,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.Mathematics,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Personal,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.HousePricePrediction
    ),
    archived: true,
  },
  [ProjectDatabaseKeys.CustomNeuralNetworkCoursework]: {
    name: "Custom Neural Network Classifier",
    description: `
      Built a neural network from scratch to teach a Pacman agent.
      Used various techniques such as batch normalisation, dropout, momentum, learning rate decay and more to improve performance.
      `,
    repositoryURL:
      "https://github.com/mbeps/machine-learning-pacman-classifier-coursework",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_MachineLearning,
      BlogDatabaseKeys.IntroductionToNeuralNetworks,
    ],
    skills: [
      SkillDatabaseKeys.Python,

      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.Statistics,
      SkillDatabaseKeys.Calculus,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,
    ],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.CustomNeuralNetworkCoursework
    ),
  },
  [ProjectDatabaseKeys.MachineLearningAlgorithms]: {
    name: "Machine Learning Algorithms",
    description: `
      Practicing various algorithms and techniques.
      This includes supervised, unsupervised, and reinforcement learning algorithms, as well as feature engineering, data preprocessing, and hyperparameter tuning.
    `,
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    repositoryURL: "https://github.com/mbeps/Machine-Learning-Course-Lab",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Seaborn,
      SkillDatabaseKeys.Keras,
      SkillDatabaseKeys.TensorFlow,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.ComputerVision,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
    ],
    archived: true,
    relatedMaterials: [CertificateDatabaseKeys.UdemyMachineLearningAtoZ],
    type: ProjectTypeEnum.Personal,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningAlgorithms
    ),
  },
  [ProjectDatabaseKeys.ArtificialIntelligenceReinforcementLearning]: {
    name: "Reinforcement Learning Lab",
    description: `
      Practicing various Reinforcement Learning algorithms and techniques.
      This includes Q-Learning, Deep Q-Learning, and Asynchronous Advantage Actor-Critic (A3C) algorithms.
    `,
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    repositoryURL: "https://github.com/mbeps/Reinforcement-Learning",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.PyTorch,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.ReinforcementLearning,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
    ],
    archived: true,
    relatedMaterials: [CertificateDatabaseKeys.UdemyArtificialIntelligenceAtoZ],
    type: ProjectTypeEnum.Personal,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.ArtificialIntelligenceReinforcementLearning
    ),
  },
  [ProjectDatabaseKeys.CustomQLearningAgent]: {
    name: "Custom Q-Learning Agent",
    description: `
      A custom Q-Learning agent learns to play Pacman.
      Required foundational Mathematics knowledge and understanding of the Q-Learning algorithm.
      `,
    repositoryURL:
      "https://github.com/mbeps/machine-learning-coursework-2-pacman",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    skills: [
      SkillDatabaseKeys.Python,

      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.Statistics,
      SkillDatabaseKeys.Calculus,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.ReinforcementLearning,
      SkillDatabaseKeys.DeepLearning,
    ],
    relatedMaterials: [ModuleDatabaseKeys.KCL_MachineLearning],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.CustomQLearningAgent
    ),
  },
  [ProjectDatabaseKeys.MachineLearningAssignment1]: {
    name: `Machine Learning Assignment 1`,
    description: `
      Implementing algorithms from scratch such as the Nearest Neighbours algorithm.
      Requires an understanding of the Mathematics behind the algorithms and the ability to implement them.
      `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-1`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.Mathematics,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_MachineLearning],
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningAssignment1
    ),
    archived: true,
  },
  [ProjectDatabaseKeys.MachineLearningAssignment2]: {
    name: `Machine Learning Assignment 2`,
    description: `
      Be able to use and implement algorithms, 
      with the Lasso and inductive conformal prediction algorithms as examples. 
    `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-2`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.Mathematics,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningAssignment2
    ),
    archived: true,
  },
  [ProjectDatabaseKeys.MachineLearningAssignment3]: {
    name: `Machine Learning Assignment 3`,
    description: `
      Be able to use and implement algorithms, 
      with the SVM, neural networks, and cross-conformal prediction algorithms as examples. 
      `,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Assignment-3`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.Mathematics,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_MachineLearning],
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningAssignment3
    ),
    archived: true,
  },
  [ProjectDatabaseKeys.MachineLearningLabs]: {
    name: `Machine Learning Labs`,
    description: `
      Implemented various algorithms and techniques learnt during the course, 
      such as Nearest Neighbours, Conformal Prediction, Regression algorithms, data preprocessing, 
      kernels, Neural Networks, SVMs, etc.`,
    repositoryURL: `https://github.com/mbeps/Machine-Learning-Labs-Questions`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,

      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.Mathematics,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_MachineLearning],
    archived: true,
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningLabs
    ),
  },
  [ProjectDatabaseKeys.ComputationalFinanceAssignment]: {
    name: "Computational Finance Assignment",
    description: `
      Exploring valuation of options using methods like Black-Scholes, binomial trees, and Monte Carlo. 
      Also includes theoretical aspects of put-call parity and financial arbitrage opportunities.`,
    repositoryURL: `https://github.com/mbeps/Computation_Finance_Assignment`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Matplotlib,

      SkillDatabaseKeys.Probability,

      SkillDatabaseKeys.ArtificialIntelligence,

      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.Calculus,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Statistics,
      SkillDatabaseKeys.Mechanics,
    ],
    archived: true,
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_ComputationalFinance],
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.ComputationalFinanceAssignment
    ),
  },
  [ProjectDatabaseKeys.MachineLearningDataScienceLab]: {
    name: "Machine Learning & Data Science Lab",
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    description: `
      Focusing on learning generative models, using third-party models and using advanced techniques. 
      This includes techniques such as transfer learning, LLM Agents, and Generative Models.`,
    repositoryURL: "https://github.com/mbeps/Data-Science-Machine-Learning-Lab",
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.Keras,
      SkillDatabaseKeys.TensorFlow,

      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
    ],
    archived: true,
    relatedMaterials: [
      CertificateDatabaseKeys.UdemyMachineLearningDataScienceAndGenerativeAIWithPython,
    ],
    type: ProjectTypeEnum.Personal,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MachineLearningDataScienceLab
    ),
  },

  [ProjectDatabaseKeys.MarkovDecisionAgent]: {
    name: "Markov Decision Agent",
    description: `
      Pacman agent plays to win the game while handling stochasticity in the movement of agent and ghosts.
      Uses Markov Decision Processes, Value Iteration and other enhancements.
      `,
    repositoryURL: "https://github.com/mbeps/pacman-assignment",
    skills: [
      SkillDatabaseKeys.Python,

      SkillDatabaseKeys.IntelligentAgents,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.LinearAlgebra,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    archived: true,
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_ArtificialIntelligenceReasoningAndDecisionMaking,
    ],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.MarkovDecisionAgent
    ),
  },
  [ProjectDatabaseKeys.ComputerVisionImageSegmentation]: {
    name: "Computer Vision Image Segmentation",
    description: `
      Segmenting images using various techniques.
      Specifically, used models of biological vision systems such as Simple and Complex cells, and Gabor filters.
      `,
    repositoryURL: "https://github.com/mbeps/computer-vision-assignment",
    skills: [
      SkillDatabaseKeys.Matlab,

      SkillDatabaseKeys.IntelligentAgents,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ComputerVision,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.LinearAlgebra,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    archived: true,
    relatedMaterials: [ModuleDatabaseKeys.KCL_ComputerVision],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.ComputerVisionImageSegmentation
    ),
  },
  [ProjectDatabaseKeys.ComputerVisionQuizzes]: {
    name: "Computer Vision Quizzes",
    description: `
      Solutions to quizzes where various low-level and mid-level vision techniques were covered.
      These techniques include edge detection, image segmentation, and image filtering.
      `,
    repositoryURL: "https://github.com/mbeps/computer-vision-quiz-assignment",
    skills: [
      SkillDatabaseKeys.Matlab,

      SkillDatabaseKeys.IntelligentAgents,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ComputerVision,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Probability,
      SkillDatabaseKeys.LinearAlgebra,
    ],
    category: ProjectCategoriesEnum.ArtificialIntelligence,
    type: ProjectTypeEnum.Academic,
    archived: true,
    relatedMaterials: [ModuleDatabaseKeys.KCL_ComputerVision],
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.ComputerVisionQuizzes
    ),
  },

  //^ Full-Stack Projects
  [ProjectDatabaseKeys.ForumDiscussions]: {
    name: `Forum Discussions`,
    description: `
      For a final year university project, 
      a social media platform was developed enabling users to form communities, 
      start discussions, and comment on them.
      Tested on CRUD and software engineering principles.
      `,
    repositoryURL: `https://github.com/mbeps/next_discussion_platform`,
    deploymentURL: `https://circus-discussion.vercel.app/`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ChakraUi,
      SkillDatabaseKeys.Zod,
      SkillDatabaseKeys.Firebase,
      SkillDatabaseKeys.Firestore,
      SkillDatabaseKeys.Jotai,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.ForumDiscussions),
    relatedMaterials: [
      ModuleDatabaseKeys.RHUL_FinalYearProject,
      ProjectDatabaseKeys.FlaskForumBackend,
    ],
    type: ProjectTypeEnum.Academic,
  },
  [ProjectDatabaseKeys.CarDealership]: {
    name: `Car Dealership`,
    description: `
      Car dealership website for a client.
      Users can browse, search, and filter cars.
      Admins can manage inventory, add new cars, and update existing listings, view reports, manage dealership settings, etc.
      `,
    repositoryURL: `https://github.com/mbeps/car-dealership`,
    deploymentURL: `https://www.mn-ltd.uk/`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.Zod,
      SkillDatabaseKeys.Supabase,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.TypeOrm,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.CarDealership),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.RealTimeMessaging]: {
    name: `Real-Time Messaging`,
    description: `
      A custom back-end learning project involved creating a straightforward real-time messaging app. 
      Users can chat one-on-one or in group chats, send text messages and images, view active users, etc.
      `,
    repositoryURL: `https://github.com/mbeps/ringmaster-messaging`,
    deploymentURL: `https://ringmaster-messaging.vercel.app/`,

    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.Zod,
      SkillDatabaseKeys.AuthJs,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Pusher,
      SkillDatabaseKeys.Cloudinary,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.HeadlessUi,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.RealTimeMessaging),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.AiGenerations]: {
    name: `AI Generations`,
    description: `
      A SaaS platform that leverages AI to enable users to generate various media types and have conversations. 
      Developing this project allowed me to explore Stripe, Clerk authentication, and unique AI APIs.
  `,
    repositoryURL: `https://github.com/mbeps/magician-ai`,
    // deploymentURL: "https://magician-ai.vercel.app/",
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Zod,
      SkillDatabaseKeys.MySql,
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Stripe,
      SkillDatabaseKeys.Rest,

      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.AiGenerations),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.MusicStreaming]: {
    name: `Music Streaming`,
    description: `
      My first major project using Supabase was a basic music streaming site. 
      Users can upload songs, search and listen to music, as well as like the songs they enjoy.
      `,
    repositoryURL: `https://github.com/mbeps/drumroll-music`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.Zod,
      SkillDatabaseKeys.Supabase,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.MusicStreaming),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.RichTextNotes]: {
    name: "Rich-Text Notes",
    description: `
      A note-taking app where users can sign up, log in, and reset passwords easily. 
      It supports rich text formatting, image additions, and publishing notes publicly. 
      Users alse organize notes into nested notebooks.`,
    repositoryURL: `https://github.com/mbeps/joker-notes`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Zod,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Convex,
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.EdgeStore,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    deploymentURL: "https://joker-notes.vercel.app/",
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.RichTextNotes),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.CommerzbankRates]: {
    name: "Commerzbank Rates",
    description: `
      A web application that provides rates to business users and allows exporting and viewing historical data.
      The data is sourced from Refinitiv and Bloomberg SFTP servers every day. 
    `,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Zustand,
      SkillDatabaseKeys.Zod,
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataLdap,
      SkillDatabaseKeys.SpringDataJpa,
      SkillDatabaseKeys.SpringSecurity,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.Vitest,
      SkillDatabaseKeys.JUnit,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.CommerzbankRates),
    type: ProjectTypeEnum.Professional,
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      ProjectDatabaseKeys.AuthenticationMicroService,
      ProjectDatabaseKeys.EmailMicroService,
    ],
  },

  //^ Extra Web Development Projects
  [ProjectDatabaseKeys.AiQuizzes]: {
    name: "AI Quizzes",
    description: `
      A platform for dynamic quiz generation. 
      Users can test their knowledge with multiple-choice or fill-in-the-gap questions across various topics.
      With immediate feedback and score tracking, users enhance their understanding.`,
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Axios,
      SkillDatabaseKeys.AuthJs,

      SkillDatabaseKeys.MySql,

      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
    ],
    repositoryURL: "https://github.com/mbeps/quizmify",
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.AiQuizzes),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.OnlineArticles]: {
    name: `Online Articles`,
    description: `
      To learn Supabase, I developed a simple website for reading and writing articles. 
      Users can read, create, and delete articles. 
      This project paved the way for using Supabase in subsequent projects.
      `,
    repositoryURL: `https://github.com/mbeps/sideshow-articles`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.Supabase,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.NextUi,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.OnlineArticles),
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.OAuthNextJsSpringBoot]: {
    name: `OAuth Next.js & Spring Boot`,
    description: `
      A simple project to demonstrate OAuth (GitHub & Entra ID) authentication using Next.js for the front-end and Spring Boot for the back-end.
      Uses CORS, JWTs, and secure cookie storage.
      `,
    repositoryURL: "https://github.com/mbeps/oauth-springboot-nextjs",
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringSecurity,
      SkillDatabaseKeys.SpringOAuth,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.SpringDataMongoDb,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,

      SkillDatabaseKeys.UserAuthentication,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.OAuthNextJsSpringBoot
    ),
    type: ProjectTypeEnum.Personal,
    relatedMaterials: [
      BlogDatabaseKeys.AuthenticationSessionManagement,
      BlogDatabaseKeys.CrossOriginResourceSharing,
      BlogDatabaseKeys.Backend,
      ProjectDatabaseKeys.AuthenticationMicroService,
    ],
  },
  [ProjectDatabaseKeys.NextJsAuthJsTemplate]: {
    name: `Auth.JS Template`,
    description: `
      A project demonstrating advanced authentication including email/password, password reset, OAuth providers, and multi-factor authentication.
      `,
    repositoryURL: "https://github.com/mbeps/nextjs-authjs",
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.AuthJs,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,

      SkillDatabaseKeys.UserAuthentication,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.NextJsAuthJsTemplate
    ),
    type: ProjectTypeEnum.Personal,
    relatedMaterials: [
      BlogDatabaseKeys.AuthenticationSessionManagement,
      BlogDatabaseKeys.CrossOriginResourceSharing,
      BlogDatabaseKeys.Backend,
    ],
  },

  [ProjectDatabaseKeys.NextJsBetterAuthTemplate]: {
    name: `Better Auth Template`,
    description: `
      A project demonstrating advanced authentication including email/password, password reset, OAuth providers, and multi-factor authentication, passkey authentication, session management and role management.
      `,
    repositoryURL: "https://github.com/mbeps/nextjs-betterauth-authentication",
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.BetterAuth,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.Drizzle,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,

      SkillDatabaseKeys.UserAuthentication,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(
      ProjectDatabaseKeys.NextJsBetterAuthTemplate
    ),
    type: ProjectTypeEnum.Personal,
    relatedMaterials: [
      BlogDatabaseKeys.AuthenticationSessionManagement,
      BlogDatabaseKeys.CrossOriginResourceSharing,
      BlogDatabaseKeys.Backend,
    ],
  },
  [ProjectDatabaseKeys.Noodle]: {
    name: `Noodle`,
    description: `
      In my second year of university, my group and I started an open-source learning platform project, introducing me to full-stack development. 
      This app helps students manage tasks, assignments, exams, and store notes and resources.
      `,
    repositoryURL: `https://github.com/ixahmedxi/noodle`,
    deploymentURL: `https://noodle.run/`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.ReactJs,
      SkillDatabaseKeys.ShadcnUi,
      SkillDatabaseKeys.RadixUi,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.MySql,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Jest,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
    ],
    category: ProjectCategoriesEnum.FullStackWebDevelopment,
    archived: true,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.Noodle),
    type: ProjectTypeEnum.Academic,
  },

  //^ Backend Web Development Projects
  [ProjectDatabaseKeys.AuthenticationMicroService]: {
    name: `Authentication Microservice`,
    description: `
      A microservice providing authentication (such as email/password and OAuth) to various applications.
      Minimises on duplications allowing for faster development and simpler infrastructure.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataLdap,
      SkillDatabaseKeys.SpringDataJpa,
      SkillDatabaseKeys.SpringSecurity,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.PostgreSql,
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.JUnit,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      ProjectDatabaseKeys.OAuthNextJsSpringBoot,
      ProjectDatabaseKeys.CommerzbankRates,
      BlogDatabaseKeys.MicroservicesArchitecture,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.EmailMicroService]: {
    name: `Email Microservice`,
    description: `
      A microservice providing functionality to send emails for various applications and services. 
      Minimises on duplications allowing for faster development and simpler infrastructure.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.JUnit,
    ],
    relatedMaterials: [
      ProjectDatabaseKeys.CommerzbankRates,
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      BlogDatabaseKeys.MicroservicesArchitecture,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyTranslateBot]: {
    name: `Symphony Translate Bot`,
    description: `
      A Symphony bot that translates messages in a Symphony chatroom.
      Replaces the old bot which was originally built using the outdated SDK.
      Much faster, more reliable, and easier to maintain and more features compared to the old bot.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Mockito,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Docker,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
      ProjectDatabaseKeys.BaseRestController,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyCobaGPTBot]: {
    name: `Symphony CobaGPT Bot`,
    description: `
      A Symphony bot which interfaces with the Azure OpenAI API to generate text based on user input.
      This bot improves the workflow of users by providing quick responses to common questions and completing simple or repetitive tasks.
      This bot is a result of Commerzbank's initiative towards automation using AI.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Mockito,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
      ProjectDatabaseKeys.BaseRestController,
      ProjectDatabaseKeys.MarkdownToMessageMLConverter,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyWebhookBot]: {
    name: `Symphony Webhooks Bot`,
    description: `
      A Symphony bot that sends messages to a Symphony chatroom using Webhooks.
      This bot is used to send messages to a chatroom from an external source.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Mockito,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Docker,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyPollBot]: {
    name: `Symphony Poll Bot`,
    description: `
      A Symphony bot for creating polls and surveys for gathering feedback.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Mockito,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Docker,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyApplicationStatusBot]: {
    name: `Symphony Application Status Bot`,
    description: `
      A Symphony bot responsible for keeping track of various Commerzbank applications' statuses via ServiceNow. 
      Users can subscribe to specific applications and receive real-time updates in Symphony chatrooms.
      Role-based access control using LDAP is implemented for administrative actions.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataLdap,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.SpringDataMongoDb,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Mockito,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Docker,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyRssBot]: {
    name: `Symphony RSS Bot`,
    description: `
      A Symphony bot which fetches RSS feeds from various sources and posts them to a Symphony chatroom.
      Users can subscribe to specific RSS feeds and receive updates in real-time.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.SpringDataMongoDb,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Mockito,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Gcp,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    type: ProjectTypeEnum.Professional,
    archived: true,
  },
  [ProjectDatabaseKeys.SymphonyBlogBot]: {
    name: `Symphony Blog Bot`,
    description: `
      A Symphony bot which makes announcements in chatrooms and direct messages using markdown formatting.
      Users can create, edit, and delete announcements using simple commands.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.SpringDataMongoDb,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Mockito,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Docker,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    type: ProjectTypeEnum.Professional,
    archived: true,
  },
  [ProjectDatabaseKeys.SymphonyBusinessHighlightsBot]: {
    name: `Symphony Business Highlights Bot`,
    description: `
      A Symphony bot which compiles weekly business reports from various users
      and generates a summary of the business highlights for the week.
      Uses Azure Active Directory for managing permissions and access control.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.Css,
      SkillDatabaseKeys.MongoDb,
      SkillDatabaseKeys.SpringDataMongoDb,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Mockito,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
      SkillDatabaseKeys.Docker,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    type: ProjectTypeEnum.Professional,
    archived: true,
  },
  [ProjectDatabaseKeys.SymphonyInteractiveBot]: {
    name: `Symphony Interactive Bot Example`,
    description: `
      A Symphony bot for learning how to create an interactive bot in Symphony.
      This bot is used to demonstrate how to create an interactive bot in Symphony.
      This was used to create documentation and tutorials for other developers.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    archived: true,
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.SymphonyHeadlessBot]: {
    name: `Symphony Headless Bot Example`,
    description: `
      A Symphony bot for learning how to create a Headless Bot in Symphony.
      This bot is used to demonstrate how to create a headless bot in Symphony.
      This was used to create documentation and tutorials for other developers.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Html,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
    ],
    relatedMaterials: [
      RoleDatabaseKeys.CommerzbankBackendEngineer,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
    ],
    archived: true,
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.FlaskForumBackend]: {
    name: `Flask Forum Backend`,
    description: `
      This is a custom backend for the first iteration of the discussion platform. 
      This was created to learn how to create a custom backend using Python and Flask.
      `,
    repositoryURL: `https://github.com/mbeps/Forum-Discussion-Flask-Backend`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Flask,
      SkillDatabaseKeys.MySql,
      SkillDatabaseKeys.SqlAlchemy,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Docker,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    relatedMaterials: [
      ModuleDatabaseKeys.RHUL_FinalYearProject,
      ProjectDatabaseKeys.ForumDiscussions,
    ],
    type: ProjectTypeEnum.Academic,
    archived: true,
  },
  [ProjectDatabaseKeys.FlaskBackendDemo]: {
    name: `Flask Backend Demo`,
    description: `
      A simple Flask app to learn how to create a RESTful API. 
      This was a foundational project to learn how to create a back-end using Flask.
      This was helpful when creating the back-end for the discussion platform.
      `,
    repositoryURL: `https://github.com/mbeps/python-flask-demo`,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Flask,
      SkillDatabaseKeys.SqlAlchemy,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.SqLite,
    ],
    archived: true,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.UserAuthentication]: {
    name: `User Authentication`,
    description: `
      A list of projects implementing and experimenting with user authentication using various stacks.
      `,
    repositoryURL: `https://github.com/stars/mbeps/lists/web-authentication`,
    skills: [
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.NextJs,
      SkillDatabaseKeys.Auth0,
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.PostgreSql,

      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Django,
      SkillDatabaseKeys.Flask,
    ],
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    archived: true,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.SpringDataJPATemplate]: {
    name: `Spring Data JPA Template`,
    description: `
      A template project for using Spring Data JPA with PostgreSQL. 
      This was created for documenting how use SQL databases for our Spring Boot projects.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    type: ProjectTypeEnum.Professional,
    repositoryURL: "https://github.com/mbeps/springboot-sql-database-template",
    relatedMaterials: [RoleDatabaseKeys.CommerzbankBackendEngineer],
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataJpa,
    ],
    archived: true,
  },
  [ProjectDatabaseKeys.SpringDataMongoTemplate]: {
    name: `Spring Data MongoDB Template`,
    description: `
      A template project for using Spring Data MongoDB.
      This was created for documenting how use MongoDB databases for our Spring Boot projects.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    type: ProjectTypeEnum.Professional,
    repositoryURL:
      "https://github.com/mbeps/springboot-mongodb-database-template",
    relatedMaterials: [RoleDatabaseKeys.CommerzbankBackendEngineer],
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataJpa,
    ],
    archived: true,
  },
  [ProjectDatabaseKeys.SpringBootLdapTemplate]: {
    name: `Spring Data LDAP Template`,
    description: `
      A template project for using Spring Data LDAP.
      This was created for learning how to use LDAP for our Spring Boot projects specifically for role-based access control.
      `,
    category: ProjectCategoriesEnum.BackEndWebDevelopment,
    type: ProjectTypeEnum.Professional,
    repositoryURL:
      "https://github.com/mbeps/springboot-mongodb-database-template",
    relatedMaterials: [RoleDatabaseKeys.CommerzbankBackendEngineer],
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataLdap,
    ],
    archived: true,
  },

  //^ Libraries
  [ProjectDatabaseKeys.BaseRestController]: {
    name: "REST Template Config",
    description: `
      A library for Spring Boot allowing for greater configuration of proxies and SSL settings. 
      `,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Rest,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
    ],
    category: ProjectCategoriesEnum.Libraries,
    type: ProjectTypeEnum.Professional,
    archived: true,
    relatedMaterials: [
      ProjectDatabaseKeys.SymphonyTranslateBot,
      ProjectDatabaseKeys.SymphonyCobaGPTBot,
      ProjectDatabaseKeys.SymphonyApplicationStatusBot,
      ProjectDatabaseKeys.SymphonyRssBot,
      ProjectDatabaseKeys.CommerzbankRates,

      RoleDatabaseKeys.CommerzbankBackendEngineer,
    ],
  },
  [ProjectDatabaseKeys.MarkdownToMessageMLConverter]: {
    name: "Markdown to MessageML Converter",
    description: `
      A library for converting Markdown to Symphony's MessageML format.
      This was created because there was no existing library that could convert Markdown to MessageML.
      Especially useful for rendering responses from LLMs as they return messages in Markdown format.
      `,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Gcp,
    ],
    category: ProjectCategoriesEnum.Libraries,
    type: ProjectTypeEnum.Professional,
    archived: true,
    relatedMaterials: [
      ProjectDatabaseKeys.SymphonyCobaGPTBot,
      RoleDatabaseKeys.CommerzbankBackendEngineer,
    ],
  },
  [ProjectDatabaseKeys.SpringBootLdapRoleBasedAccessControlLibrary]: {
    name: "LDAP Role-Based Access Control Library",
    description: `
      A library for Spring Boot controlling user access across various Spring Boot applications using LDAP.
      `,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.SpringDataLdap,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Mockito,
    ],
    category: ProjectCategoriesEnum.Libraries,
    type: ProjectTypeEnum.Professional,
    archived: true,
    relatedMaterials: [
      ProjectDatabaseKeys.SymphonyApplicationStatusBot,
      ProjectDatabaseKeys.CommerzbankRates,
      ProjectDatabaseKeys.SymphonyRssBot,

      RoleDatabaseKeys.CommerzbankBackendEngineer,
    ],
  },

  //^ Programming Fundamentals
  [ProjectDatabaseKeys.JavaCalculatorAssignment]: {
    name: `Calculator`,
    description: `
      This was a second year assignment focused on software engineering methodologies. 
      The project emphasized the importance of proper version control procedures, 
      test-driven development, documentation, and code quality assurance.`,
    repositoryURL: `https://github.com/mbeps/Calculator-Assignment`,
    skills: [SkillDatabaseKeys.Java, SkillDatabaseKeys.JUnit],
    category: ProjectCategoriesEnum.ProgrammingFundamentals,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_SoftwareEngineering],
    archived: true,
    type: ProjectTypeEnum.Academic,
  },
  [ProjectDatabaseKeys.JavaFundamentalsAssignments]: {
    name: `Java Fundamentals Assignments`,
    description: `
      First-year Java assignments focused on learning the basics of Java and Object-Oriented Programming (OOP). 
      These projects covered core concepts like classes, inheritance, and data handling. 
      They provided a solid foundation in Java programming and practical experience with fundamental OOP principles.
      `,
    repositoryURL: `https://github.com/stars/mbeps/lists/java-fundamentals-assignments`,
    skills: [SkillDatabaseKeys.Java],
    category: ProjectCategoriesEnum.ProgrammingFundamentals,
    type: ProjectTypeEnum.Academic,
    archived: true,
    relatedMaterials: [
      ModuleDatabaseKeys.RHUL_ObjectOrientedProgramming1,
      ModuleDatabaseKeys.RHUL_ObjectOrientedProgramming2,
    ],
  },
  [ProjectDatabaseKeys.DatabasesMiniProject]: {
    name: `Database Mini Project`,
    description: `Learning to interact with a database using Java.`,
    repositoryURL: `https://github.com/mbeps/DatabasesMiniProject`,
    skills: [SkillDatabaseKeys.Java, SkillDatabaseKeys.PostgreSql],
    category: ProjectCategoriesEnum.ProgrammingFundamentals,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_Databases],
    type: ProjectTypeEnum.Academic,
    archived: true,
  },

  //^ Algorithms and Data Structures
  [ProjectDatabaseKeys.Leetcode]: {
    name: `Leetcode Solutions`,
    description: `
      A collection of Leetcode solutions in Python. 
      This is used to practice algorithms and data structures.
      They are also used to practice unit testing.
      CI/CD is also used to run the tests when merging to the main branch.
      `,
    repositoryURL: `https://github.com/stars/mbeps/lists/leetcode`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.PyTest,
      SkillDatabaseKeys.GitHubActions,
    ],
    category: ProjectCategoriesEnum.Algorithms,
    archived: true,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.SearchingAndSortingAlgorithms]: {
    name: `Searching & Sorting Algorithms`,
    description: `
      Jupyter Notebook containing various searching and sorting algorithms.
      Each algorithms is explained. 
      All the algorithms are also compared to each other. 
    `,
    category: ProjectCategoriesEnum.Algorithms,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Matplotlib,
      SkillDatabaseKeys.NumPy,
    ],
    repositoryURL: "https://github.com/mbeps/algorithms",
    archived: true,
    relatedMaterials: [
      ModuleDatabaseKeys.RHUL_AlgorithmsAndComplexity,
      CertificateDatabaseKeys.UdemyTheCompleteDataStructuresAndAlgorithmsCourseInPython,
      CertificateDatabaseKeys.UdemyPythonProgrammingMasterclass,
    ],
    type: ProjectTypeEnum.Academic,
  },

  //^ Other Projects
  [ProjectDatabaseKeys.GnomeAllInOneClipboardExtension]: {
    name: `All-in-One Clipboard Extension`,
    description: `
      A Gnome extension that adds advanced clipboard management features to the Gnome desktop environment.
      Inspired by Windows 11's feature, this extension allows users to manage clipboard history, emojis, kaomojis, GIFs, and symbols.
          `,
    repositoryURL: `https://github.com/NiffirgkcaJ/all-in-one-clipboard`,
    skills: [SkillDatabaseKeys.JavaScript],
    category: ProjectCategoriesEnum.Other,
    archived: true,
    type: ProjectTypeEnum.Personal,
    relatedMaterials: [RoleDatabaseKeys.OpenSourceContributor],
  },
  [ProjectDatabaseKeys.GnomeQuickSettingsTweakExtension]: {
    name: `Quick Settings Tweak Extension`,
    description: `
      A Gnome extension that allows users to customize the quick settings menu in the Gnome desktop environment.
      `,
    repositoryURL: `https://github.com/qwreey/quick-settings-tweaks`,
    skills: [SkillDatabaseKeys.JavaScript],
    category: ProjectCategoriesEnum.Other,
    archived: true,
    relatedMaterials: [RoleDatabaseKeys.OpenSourceContributor],
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.OsmosGame]: {
    name: `Osmos Game`,
    description: `
          A simple game built with SimpleGUI for a first-year university project. 
          We manually implemented physics using vector theory and physics concepts, relying solely on documentation due to the lack of tutorials.
          `,
    repositoryURL: `https://github.com/mbeps/Osmos_Game`,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.SimpleGui,
      SkillDatabaseKeys.PyTest,
    ],
    category: ProjectCategoriesEnum.Other,
    relatedMaterials: [ModuleDatabaseKeys.RHUL_ProgrammingLaboratory],
    archived: true,
    type: ProjectTypeEnum.Academic,
    thumbnailImage: addProjectThumbnail(ProjectDatabaseKeys.OsmosGame),
  },
  [ProjectDatabaseKeys.AutomatedSetup]: {
    name: `Automated Setup`,
    description: `
      A shell script which automates the setup of a new Linux machine.
      This is specifically for my Fedora install.
      `,
    skills: [SkillDatabaseKeys.ShellScript],
    repositoryURL: `https://github.com/mbeps/AutomatedSetup`,
    category: ProjectCategoriesEnum.Other,
    archived: true,
    type: ProjectTypeEnum.Personal,
  },
  [ProjectDatabaseKeys.MdmAutomations]: {
    name: `MDM Automations`,
    description: `
      A script which compiles and processes business information from various sources into a single spreadsheet.
      This is then sent to HR for allocating cost centers to employees.
        `,
    skills: [SkillDatabaseKeys.Python],
    repositoryURL: `https://github.com/mbeps/AutomatedSetup`,
    category: ProjectCategoriesEnum.Other,
    archived: true,
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.AutomatedManifestPush]: {
    name: `Automated Manifest Push`,
    description: `
      A script which escapes and compresses JSON files storing commands for Symphony bots and pushes them to remote servers.
        `,
    skills: [SkillDatabaseKeys.Python],
    repositoryURL: `https://github.com/mbeps/AutomatedSetup`,
    category: ProjectCategoriesEnum.Other,
    archived: true,
    type: ProjectTypeEnum.Professional,
  },
  [ProjectDatabaseKeys.JwtHelper]: {
    name: `JWT Helper`,
    description: `
      A tool which generates JWTs for users (specifically bots) from private keys. 
      This is then used for authenticating with Symphony's API and pushing manifests files to servers.
        `,
    skills: [SkillDatabaseKeys.Java],
    repositoryURL: `https://github.com/mbeps/AutomatedSetup`,
    category: ProjectCategoriesEnum.Other,
    archived: true,
    type: ProjectTypeEnum.Professional,
  },
};

/**
 * List of keys for the projects that can be used to uniquely identify the project.
 */
export const projectDatabaseKeys: ProjectDatabaseKeys[] = Object.keys(
  projectMap
) as ProjectDatabaseKeys[];

/**
 * Hashmap of projects with keys as {@link SkillDatabaseKeys} and values as {@link ProjectInterface}.
 * The order of the projects is the order that is used when displaying the projects on the website.
 * The order skills is the order that is used when displaying the skills on the website.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const projectDatabaseMap: Database<ProjectInterface> =
  addNestedSkillsMaterialList<ProjectInterface>(
    projectMap,
    skillDatabaseMap,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.Technical,
    SkillTypesEnum.Technology
  );

export default projectDatabaseMap;
