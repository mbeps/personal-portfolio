import addNestedSkillsMaterialList from "@/actions/material/addNestedSkillsMaterialList";
import BlogDatabaseKeys from "@/database/Blogs/BlogDatabaseKeys";
import BlogInterface from "@/database/Blogs/BlogInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import BlogCategoriesEnum from "@/enums/Blog/BlogCategoriesEnum";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import Database from "@/interfaces/Database";
import ProjectDatabaseKeys from "../Projects/ProjectDatabaseKeys";
import projectDatabaseMap from "../Projects/ProjectDatabaseMap";
import skillDatabaseMap from "../Skills/SkillDatabaseMap";
import ModuleDatabaseKeys from "../Modules/ModuleDatabaseKeys";
import CertificateDatabaseKeys from "../Certificates/CertificateDatabaseKeys";

/**
 * Hashmap of blogs with keys as {@link BlogDatabaseKeys} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 */
const blogsMap: Database<BlogInterface> = {
  //^ Artificial Intelligence Blogs
  [ProjectDatabaseKeys.AlignmentInLargeLanguageModels]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.AlignmentInLargeLanguageModels]
      .name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.AlignmentInLargeLanguageModels]
        .description,
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills:
      projectDatabaseMap[ProjectDatabaseKeys.AlignmentInLargeLanguageModels]
        .skills,
    relatedMaterials: [
      ProjectDatabaseKeys.AlignmentInLargeLanguageModels,
      BlogDatabaseKeys.Quantisation,
      BlogDatabaseKeys.Lora,
      BlogDatabaseKeys.Transformer,
      ModuleDatabaseKeys.KCL_IndividualProject,
    ],
  },
  [BlogDatabaseKeys.MachineLearningFoundations]: {
    name: "Machine Learning Fundamentals",
    subtitle:
      "Explores core machine learning concepts, data preparation techniques, model evaluation metrics, and ethical considerations for building robust artificial intelligence systems.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
  },
  [BlogDatabaseKeys.ValidationAndRegularization]: {
    name: "Validation & Regularisation",
    subtitle:
      "An analysis of validation architectures, bias-variance decomposition, temporal and spatial dependence, and statistical significance testing for model selection.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_MachineLearning,
      ModuleDatabaseKeys.RHUL_MachineLearning,
    ],
  },
  [BlogDatabaseKeys.HyperparameterTuning]: {
    name: "Hyperparameter Tuning in Machine Learning",
    subtitle:
      "A mathematical analysis of meta-learning strategies, including Bayesian Optimisation, Hyperband, Population Based Training, and gradient-based methods.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_MachineLearning,
      ModuleDatabaseKeys.RHUL_MachineLearning,
    ],
  },
  [BlogDatabaseKeys.ConformalPrediction]: {
    name: "Conformal Prediction",
    subtitle:
      "An analysis of distribution-free uncertainty quantification, covering mathematical foundations, inductive versus transductive architectures, and advanced algorithms for robust machine learning.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [ModuleDatabaseKeys.RHUL_MachineLearning],
  },
  [BlogDatabaseKeys.IntroductionToNeuralNetworks]: {
    name: "Introduction to Neural Networks",
    subtitle:
      "Explores the mathematical foundations of neural networks, covering perceptrons, backpropagation algorithms, overfitting strategies, and advanced architectures including CNNs and Transformers.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_MachineLearning,
      ModuleDatabaseKeys.KCL_PatternRecognitionNeuralNetworksDeepLearning,
      ModuleDatabaseKeys.KCL_DataMining,
    ],
  },
  [BlogDatabaseKeys.NeuralNetworkLearningAndGradientDescent]: {
    name: "Neural Network Learning & Gradient Descent",
    subtitle:
      "Explores gradient descent optimisation, momentum, overfitting, regularisation techniques, and the optimisation algorithms for training multi-layer neural networks.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_MachineLearning,
      ModuleDatabaseKeys.KCL_PatternRecognitionNeuralNetworksDeepLearning,
      ModuleDatabaseKeys.KCL_DataMining,
    ],
  },
  [BlogDatabaseKeys.BackPropagation]: {
    name: "Multi-Layer Perceptrons & Back-Propagation",
    subtitle:
      "Explores multi-layer perceptron architecture, forward pass mechanics, representational power, and provides a detailed mathematical derivation of the back-propagation algorithm for training.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_MachineLearning,
      ModuleDatabaseKeys.KCL_PatternRecognitionNeuralNetworksDeepLearning,
      ModuleDatabaseKeys.KCL_DataMining,
    ],
  },
  [BlogDatabaseKeys.DeepNeuralNetworks]: {
    name: "Deep Neural Networks",
    subtitle:
      "Explores deep architecture necessity, gradient stability challenges, algorithmic solutions, optimisation dynamics, and regularisation strategies for robust model performance.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_PatternRecognitionNeuralNetworksDeepLearning,
    ],
  },
  [BlogDatabaseKeys.ConvolutionalNeuralNetworks]: {
    name: "Convolutional Neural Networks (CNNs)",
    subtitle:
      "Explains core CNN components, hyperparameters, and pooling. Includes step-by-step mathematical derivations for convolution operations, output dimensions, and feature vector flattening.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_PatternRecognitionNeuralNetworksDeepLearning,
    ],
  },
  [BlogDatabaseKeys.GenerativeAdversarialNetworks]: {
    name: "Generative Adversarial Networks (GANs)",
    subtitle:
      "An analysis of GAN mechanics, covering minimax games, Wasserstein geometry, architectural evolutions like StyleGAN, and comparisons with VAEs and diffusion models.",
    skills: [
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.Probability,
    ],
    category: BlogCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_PatternRecognitionNeuralNetworksDeepLearning,
    ],
  },
  [BlogDatabaseKeys.BoltzmannMachines]: {
    name: "Boltzmann Machines",
    subtitle:
      "A technical analysis of Boltzmann machines, deriving learning algorithms from thermodynamic principles and tracing their evolution from Ising models to quantum computing and Transformers.",
    skills: [
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.Probability,
    ],
    category: BlogCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_PatternRecognitionNeuralNetworksDeepLearning,
    ],
  },
  [BlogDatabaseKeys.Transformer]: {
    name: "Transformer Architecture",
    subtitle:
      "A rigorous examination of Transformer mechanics, including attention mathematics, embedding geometry, modern architectural variants, and optimisation dynamics.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.Transformers,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [
      ProjectDatabaseKeys.AlignmentInLargeLanguageModels,
      ModuleDatabaseKeys.KCL_IndividualProject,
    ],
  },
  [BlogDatabaseKeys.TransferLearning]: {
    name: "Transfer Learning",
    subtitle:
      "A technical analysis of transfer learning, covering mathematical definitions, distribution alignment, adversarial networks, and modern parameter-efficient fine-tuning methods like LoRA.",
    skills: [
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.ReinforcementLearning,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
    ],
    category: BlogCategoriesEnum.ArtificialIntelligence,
  },
  [BlogDatabaseKeys.Lora]: {
    name: "Low-Rank Adaptation (LoRA)",
    subtitle:
      "A rigorous analysis of LoRA's mathematical foundations, intrinsic dimensionality, gradient flow, and advanced architectures like QLoRA and DoRA for efficient model tuning.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.Transformers,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [
      ProjectDatabaseKeys.AlignmentInLargeLanguageModels,
      ModuleDatabaseKeys.KCL_IndividualProject,
    ],
  },
  [BlogDatabaseKeys.Quantisation]: {
    name: "Quantisation for Model Compression",
    subtitle:
      "An exhaustive technical analysis of affine mapping, outlier challenges, and SOTA algorithms like GPTQ, AWQ, and QLoRA for efficient LLM inference.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.Transformers,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [
      ProjectDatabaseKeys.AlignmentInLargeLanguageModels,
      ModuleDatabaseKeys.KCL_IndividualProject,
      BlogDatabaseKeys.Lora,
      BlogDatabaseKeys.Transformer,
    ],
  },
  [BlogDatabaseKeys.ModelContextProtocol]: {
    name: "Model Context Protocol (MCP)",
    subtitle:
      "A technical analysis of MCP, dissecting transport mechanisms, primitives, and security boundaries to standardise interoperability between AI models and data sources.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.Transformers,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [BlogDatabaseKeys.Transformer],
  },
  [BlogDatabaseKeys.RitrievalAugmentedGeneration]: {
    name: "Retrieval Augmented Generation (RAG)",
    subtitle:
      "A technical analysis covering RAG's mathematical foundations, vector indexing, modular architectures, GraphRAG, and agentic workflows for non-parametric machine intelligence.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.Transformers,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [BlogDatabaseKeys.Transformer],
  },
  [BlogDatabaseKeys.ReasoningModels]: {
    name: "Reasoning Large Language Models (LLMs)",
    subtitle:
      "An overview of LLM reasoning evolution, covering Chain-of-Thought prompting, reinforcement learning paradigms, and dedicated inference architectures like DeepSeek and Gemini.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.Transformers,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
    relatedMaterials: [BlogDatabaseKeys.Transformer],
  },
  [BlogDatabaseKeys.FeatureEngineeringAndDimensionalityReduction]: {
    name: "Feature Engineering & Dimensionality Reduction",
    subtitle:
      "A technical guide to data representation algorithms including PCA, LDA, ICA, and sparse coding, featuring mathematical derivations and neural network implementations.",
    skills: [
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.Probability,
    ],
    category: BlogCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_ArtificialIntelligenceReasoningAndDecisionMaking,
      ModuleDatabaseKeys.KCL_PatternRecognitionNeuralNetworksDeepLearning,
    ],
  },
  [BlogDatabaseKeys.HiddenMarkovModelsInAI]: {
    name: "Hidden Markov Models (HMMs) in AI",
    subtitle:
      "Covers HMM architecture, Markov assumptions, and core algorithms like Viterbi, alongside evaluation metrics and practical applications in fraud detection and Part-of-Speech tagging.",
    skills: [
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.Mathematics,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.Probability,
    ],
    category: BlogCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_MachineLearning,
      ProjectDatabaseKeys.MarkovDecisionAgent,
    ],
  },
  [BlogDatabaseKeys.ReinforcementLearning]: {
    name: "Reinforcement Learning",
    subtitle:
      "Covers RL basics, MDPs, value iteration, exploration vs exploitation, Q-learning, SARSA, and function approximation for scalable learning.",
    skills: [
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.ReinforcementLearning,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
    ],
    category: BlogCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_MachineLearning,
      ProjectDatabaseKeys.MarkovDecisionAgent,
    ],
  },
  [BlogDatabaseKeys.ReinforcementLearningThroughHumanFeedback]: {
    name: "Reinforcement Learning through Human Feedback",
    subtitle:
      "An analysis of RLHF mechanisms, covering preference modelling, PPO and DPO algorithms, entropy constraints, and theoretical scaling laws.",
    skills: [
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.ReinforcementLearning,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
    ],
    category: BlogCategoriesEnum.ArtificialIntelligence,
  },
  [BlogDatabaseKeys.ReinforcementLearningThroughVerifiableRewards]: {
    name: "Reinforcement Learning through Verifiable Rewards",
    subtitle:
      "A technical analysis of RLVR and GRPO algorithms for training reasoning models, replacing human feedback with deterministic verification to achieve self-correction.",
    skills: [
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.ReinforcementLearning,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
    ],
    category: BlogCategoriesEnum.ArtificialIntelligence,
  },
  [BlogDatabaseKeys.EvolutionaryAlgorithms]: {
    name: "Introduction to Evolutionary Algorithms",
    subtitle:
      "A comprehensive mathematical analysis of evolutionary algorithms, covering genetic algorithms, CMA-ES, and neuroevolution, with a focus on convergence proofs, schema theory, and stochastic optimisation.",
    skills: [
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.DeepLearning,
      SkillDatabaseKeys.ReinforcementLearning,
      SkillDatabaseKeys.Algebra,
      SkillDatabaseKeys.LinearAlgebra,
      SkillDatabaseKeys.Probability,
    ],
    category: BlogCategoriesEnum.ArtificialIntelligence,
    relatedMaterials: [ModuleDatabaseKeys.KCL_MachineLearning],
  },
  //^ Software Engineering Blogs
  [BlogDatabaseKeys.DesignPatterns]: {
    name: "Software Design Patterns",
    subtitle:
      "Analyses architectural patterns, SOLID principles, and TypeScript implementations. Examines historical context, V8 runtime performance metrics, and the conflict between object-oriented and functional paradigms.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.ProblemSolving],
  },
  [BlogDatabaseKeys.ApiComparison]: {
    name: "Distributed API Architectures",
    subtitle:
      "A rigorous mathematical analysis of REST, GraphQL, gRPC, and SOAP, dissecting set-theoretic definitions, automata models, and information entropy to guide engineering decisions.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.GraphQL,
      SkillDatabaseKeys.ProblemSolving,
    ],
  },
  [BlogDatabaseKeys.Backend]: {
    name: "Backend Systems Engineering",
    subtitle:
      "An axiomatic analysis covering distributed systems theory, architectural paradigms, storage data structures, and security patterns, deriving modern engineering decisions from foundational mathematical principles.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.REST, SkillDatabaseKeys.ProblemSolving],
  },
  [BlogDatabaseKeys.CrossOriginResourceSharing]: {
    name: "Cross-Origin Resource Sharing (CORS)",
    subtitle:
      "A technical analysis of the CORS protocol, examining the Same-Origin Policy, preflight mechanisms, header negotiation, and secure architectural implementation.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.ExpressJS,
      SkillDatabaseKeys.UserAuthentication,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.GraphQL,
    ],
    relatedMaterials: [ProjectDatabaseKeys.OAuthNextJsSpringBoot],
  },
  [BlogDatabaseKeys.TypesOfSoftwareTesting]: {
    name: "Types of Software Testing and Software Quality",
    subtitle:
      "A comprehensive analysis of testing methodologies, architectural strategies, and automation. Explores the core principles of verification and validation, test doubles, and modern engineering standards.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.Testing],
  },
  [BlogDatabaseKeys.AuthenticationSessionManagement]: {
    name: "Web Authentication Architecture",
    subtitle:
      "A comprehensive analysis contrasting stateful reference tokens with stateless value tokens, evaluating architectural patterns, security vectors, and emerging cryptographic standards for modern digital identity.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.Testing],
  },
  [BlogDatabaseKeys.SyncAsync]: {
    name: "Asynchronous Execution Theory",
    subtitle:
      "A technical analysis of synchronous versus asynchronous paradigms, exploring kernel I/O, the C10K problem, event loop architectures, and implementation patterns for scalable systems.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.ExpressJS,
      SkillDatabaseKeys.Flask,
      SkillDatabaseKeys.Django,
    ],
  },
  [BlogDatabaseKeys.DevOps]: {
    name: "DevOps Principles & Practices",
    subtitle:
      "Comprehensive overview of DevOps history, theory, architecture, operational models, metrics and sociological challenges, linking queuing theory, Lean, SRE, DevSecOps and platform engineering to modern software delivery.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [
      SkillDatabaseKeys.DevOps,
      SkillDatabaseKeys.Containerisation,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.ContinuousIntegration,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Podman,
      SkillDatabaseKeys.Kubernetes,
      SkillDatabaseKeys.Jenkins,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Terraform,
      SkillDatabaseKeys.Ansible,
      SkillDatabaseKeys.Clusterisation,
      SkillDatabaseKeys.InfrastructureAsCode,
    ],
  },
  [BlogDatabaseKeys.CiCd]: {
    name: "Continuous Integration & Continuous Deployment (CI/CD)",
    subtitle:
      "A comprehensive technical analysis covering the history, theory, architecture, security, and performance metrics of modern CI/CD pipelines.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [
      SkillDatabaseKeys.DevOps,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.ContinuousIntegration,
      SkillDatabaseKeys.Jenkins,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.GitHubActions,
    ],
  },
  [BlogDatabaseKeys.Containerization]: {
    name: "Containersation & Orchestration",
    subtitle:
      "An exhaustive technical analysis of Linux kernel primitives, runtime standards, security paradigms, and architectural principles defining modern containerisation.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [
      SkillDatabaseKeys.DevOps,
      SkillDatabaseKeys.Containerisation,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.Podman,
      SkillDatabaseKeys.Kubernetes,
      SkillDatabaseKeys.Clusterisation,
    ],
  },

  //^ Database Blogs
  [BlogDatabaseKeys.DatabaseParadigms]: {
    name: "Theoretical Database Paradigms",
    subtitle:
      "An analysis of Relational, NoSQL, Graph, and Vector systems using Set Theory, Distributed Systems Theory, and High-Dimensional Geometry to determine algorithmic complexity and performance limits.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.Normalisation,
    ],
    relatedMaterials: [
      BlogDatabaseKeys.RelationalDatabases,
      BlogDatabaseKeys.DatabaseNormalisation,
      BlogDatabaseKeys.VectorDatabases,
      BlogDatabaseKeys.GraphDatabases,
      BlogDatabaseKeys.TimeSeriesDatabases,
      BlogDatabaseKeys.DocumentDatabases,
    ],
  },
  [BlogDatabaseKeys.RelationalDatabases]: {
    name: "Relational Databases",
    subtitle:
      "A technical analysis of RDBMS internals, covering set-theoretic foundations, relational algebra, storage hierarchies, query optimisation, concurrency control, and crash recovery algorithms.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
    ],
    relatedMaterials: [
      BlogDatabaseKeys.DatabaseNormalisation,
      ModuleDatabaseKeys.RHUL_Databases,
      BlogDatabaseKeys.DatabaseParadigms,
      CertificateDatabaseKeys.UdemyDatabaseManagementSystemAndSQL,
      CertificateDatabaseKeys.NASBADatabaseFoundationsIntroToDatabases,
    ],
  },
  [BlogDatabaseKeys.DatabaseNormalisation]: {
    name: "Relational Database Normalisation",
    subtitle:
      "Explores set-theoretic foundations, functional dependencies, and decomposition algorithms up to BCNF, evaluating their relevance in modern distributed systems.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.Normalisation,
    ],
    relatedMaterials: [
      BlogDatabaseKeys.RelationalDatabases,
      CertificateDatabaseKeys.UdemyDatabaseManagementSystemAndSQL,
      CertificateDatabaseKeys.NASBADatabaseFoundationsIntroToDatabases,
    ],
  },
  [BlogDatabaseKeys.VectorDatabases]: {
    name: "Vector Databases",
    subtitle:
      "A technical analysis of vector spaces, indexing algorithms like HNSW and PQ, and the distributed architecture powering modern semantic search engines.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_DataMining,
      BlogDatabaseKeys.DatabaseParadigms,
    ],
  },
  [BlogDatabaseKeys.GraphDatabases]: {
    name: "Graph Databases",
    subtitle:
      "A rigorous technical analysis of graph database internals, covering mathematical foundations, storage architectures, query algebras, and distributed scaling strategies.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_DataMining,
      BlogDatabaseKeys.DatabaseParadigms,
    ],
  },
  [BlogDatabaseKeys.DocumentDatabases]: {
    name: "Document Databases",
    subtitle:
      "A technical analysis of distributed consistency, storage engine algorithms, consensus protocols, and the mathematical models underlying document databases.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.MongoDB,
      SkillDatabaseKeys.Firebase,
      SkillDatabaseKeys.Redis,
    ],
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_DataMining,
      BlogDatabaseKeys.DatabaseParadigms,
      CertificateDatabaseKeys.LinkedInIntroductionToMongoDB,
      CertificateDatabaseKeys.LinkedInRedisEssentialTraining,
    ],
  },
  [BlogDatabaseKeys.TimeSeriesDatabases]: {
    name: "Time Series Databases",
    subtitle:
      "A technical analysis of TSDB internals, detailing TSM storage engines, mathematical compression primitives, and SIMD query processing for high-frequency temporal data.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
    relatedMaterials: [
      ModuleDatabaseKeys.KCL_DataMining,
      BlogDatabaseKeys.DatabaseParadigms,
    ],
  },
  [BlogDatabaseKeys.ORM]: {
    name: "Object-Relational Mapping (ORM)",
    subtitle:
      "An in-depth analysis of the Object-Relational Impedance Mismatch, architectural patterns, internal mechanics, and performance trade-offs inherent in modern ORM frameworks.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.ObjectRelationalMapping,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.Drizzle,
      SkillDatabaseKeys.TypeORM,
      SkillDatabaseKeys.SpringDataJPA,
      SkillDatabaseKeys.SpringDataMongoDB,
      SkillDatabaseKeys.Django,
      SkillDatabaseKeys.Mongoose,
      SkillDatabaseKeys.SQLAlchemy,
      SkillDatabaseKeys.Hibernate,
      SkillDatabaseKeys.Probability,
    ],
  },

  //^ Projects Blogs
  [ProjectDatabaseKeys.ForumDiscussions]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.ForumDiscussions].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.ForumDiscussions].description,
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.ForumDiscussions].skills,
  },
  [ProjectDatabaseKeys.SymphonyTranslateBot]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.SymphonyTranslateBot].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.SymphonyTranslateBot].description,
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.SymphonyTranslateBot].skills,
  },
  [ProjectDatabaseKeys.SymphonyWebhookBot]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.SymphonyWebhookBot].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.SymphonyWebhookBot].description,
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.SymphonyWebhookBot].skills,
  },

  [ProjectDatabaseKeys.OsmosGame]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.OsmosGame].name,
    subtitle: projectDatabaseMap[ProjectDatabaseKeys.OsmosGame].description,
    category: BlogCategoriesEnum.Projects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.OsmosGame].skills,
  },
  [ProjectDatabaseKeys.JavaCalculatorAssignment]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.JavaCalculatorAssignment].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.JavaCalculatorAssignment]
        .description,
    category: BlogCategoriesEnum.Projects,
    skills:
      projectDatabaseMap[ProjectDatabaseKeys.JavaCalculatorAssignment].skills,
  },
};

/**
 * List of keys for the blogs that can be used to uniquely identify the blogs.
 */
export const blogDatabaseKeys: BlogDatabaseKeys[] = Object.keys(
  blogsMap
) as BlogDatabaseKeys[];

/**
 * Hashmap of blogs with keys as {@link BlogDatabaseKeys} and values as {@link BlogInterface}.
 * The order of the blogs is the order that is used when displaying the blogs on the website.
 * The order of the skills is the order that is used when displaying the skills on the website.
 *
 * There are certain sub-skills for the skills that are directly listed under the skill objects within this hashmap.
 * For each of those skills, the sub-skill is added to the list of skills for the blog.
 * These sub-skills are specifically general skills related to the technologies but are not part of programming languages.
 * Programming languages have many sub-skills that are not directly related to the blogs above.
 */
const blogsDatabaseMap: Database<BlogInterface> =
  addNestedSkillsMaterialList<BlogInterface>(
    blogsMap,
    skillDatabaseMap,
    [SkillCategoriesEnum.ProgrammingLanguages],
    SkillTypesEnum.Technical,
    SkillTypesEnum.Technology
  );

export default blogsDatabaseMap;
