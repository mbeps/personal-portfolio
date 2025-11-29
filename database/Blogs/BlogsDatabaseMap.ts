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
    name: "Exploring the Depths of Machine Learning",
    subtitle:
      "A Comprehensive Guide to Machine Learning: Concepts, Challenges, and Real-World Impact",
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
  [BlogDatabaseKeys.IntroductionToNeuralNetworks]: {
    name: "Introduction to Neural Networks",
    subtitle:
      "An theoretical introduction to Neural Networks, architectures, core algorithms (like backpropagation), and more.",
    category: BlogCategoriesEnum.ArtificialIntelligence,
    skills: [
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.DataScience,
      SkillDatabaseKeys.NeuralNetworks,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
    ],
  },
  [BlogDatabaseKeys.Transformer]: {
    name: "Overview of Transformer Architecture",
    subtitle:
      "An theoretical introduction to the Transformer architecture and its components. This architecture is the basis of large language models (LLMs).",
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
    relatedMaterials: [ProjectDatabaseKeys.AlignmentInLargeLanguageModels],
  },
  [BlogDatabaseKeys.Lora]: {
    name: "Theory and Mathematics of Low-Rank Adaptation (LoRA)",
    subtitle:
      "Theoretical and Mathematical Analysis of Low-Rank Adaptation (LoRA) and its Derivatives in Fine-Tuning Large Language Models",
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
    relatedMaterials: [ProjectDatabaseKeys.AlignmentInLargeLanguageModels],
  },
  [BlogDatabaseKeys.Quantisation]: {
    name: "Quantisation as a Model Compression Technique",
    subtitle:
      "An theoretical introduction to quantisation, a model compression technique used to reduce the size of large language models (LLMs) and make them more efficient for deployment.",
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
    relatedMaterials: [ProjectDatabaseKeys.AlignmentInLargeLanguageModels],
  },
  [BlogDatabaseKeys.ModelContextProtocol]: {
    name: "Model Context Protocol (MCP) for Efficient LLM Interaction",
    subtitle:
      "A Comprehensive Technical Analysis of Interoperable AI Architectures and Building Agents.",
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
  },
  [BlogDatabaseKeys.RitrievalAugmentedGeneration]: {
    name: "Advanced Architectures in Retrieval Augmented Generation (RAG)",
    subtitle:
      "A Technical Analysis of LLM Memory Augmentation using RAG and custom knowledge bases.",
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
  },
  [BlogDatabaseKeys.HiddenMarkovModelsInAI]: {
    name: "How Hidden Markov Models (HMMs) are used in AI",
    subtitle:
      "An theoretical introduction to Hidden Markov Models (HMMs) and their applications in Artificial Intelligence. Covering Markov processes, the Viterbi algorithm, and practical use cases.",
    skills: [
      SkillDatabaseKeys.CloudComputing,
      SkillDatabaseKeys.Firebase,
      SkillDatabaseKeys.Supabase,
    ],
    category: BlogCategoriesEnum.ArtificialIntelligence,
  },
  //^ Software Engineering Blogs
  [BlogDatabaseKeys.DesignPatterns]: {
    name: "Software Design Patterns",
    subtitle:
      "An in-depth exploration of common software design patterns, their use cases, advantages, and implementation strategies in modern software development.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.ProblemSolving],
  },
  [BlogDatabaseKeys.ApiComparison]: {
    name: "Comparing Different API Design Approaches",
    subtitle:
      "Deep and theoretical comparison between different API design approaches including REST, GraphQL, and SOAP.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.GraphQL,
      SkillDatabaseKeys.ProblemSolving,
    ],
  },
  [BlogDatabaseKeys.Backend]: {
    name: "Backend Design and Development Principles",
    subtitle:
      "A comprehensive overview of backend development, covering architecture patterns, best practices, and technologies used in building robust server-side applications.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.REST, SkillDatabaseKeys.ProblemSolving],
  },
  [BlogDatabaseKeys.CrossOriginResourceSharing]: {
    name: "Cross-Origin Resource Sharing (CORS) in Web Development",
    subtitle:
      "A technical overview of CORS, theory, architecture, and use cases.",
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
    name: "Study of Various Software Testing Methodologies",
    subtitle:
      "A comprehensive analysis of software testing types and strategies, methodlogies, philosophies, and best practices.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.Testing],
  },
  [BlogDatabaseKeys.AuthenticationSessionManagement]: {
    name: "Comparing Authentication and Session Management Techniques",
    subtitle:
      "An in-depth analysis of authentication and session management methods, including token-based authentication, session-based authentication, and OAuth.",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [SkillDatabaseKeys.Testing],
  },
  [BlogDatabaseKeys.SyncAsync]: {
    name: "Sync vs Async: Deep Dive into Programming Models",
    subtitle:
      "Understanding and Optimizing Synchronous and Asynchronous Programming",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [],
  },

  //^ Database Blogs
  [BlogDatabaseKeys.DatabaseParadigms]: {
    name: "Exploring Different Database Paradigms",
    subtitle:
      "A theoretical overview of various database paradigms including relational, non-relational, graph, and time-series databases.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.Normalisation,
    ],
  },
  [BlogDatabaseKeys.RelationalDatabases]: {
    name: "Relational Dabases Theory and Applications",
    subtitle:
      "A theoretical overview of relational databases, their architecture, and use cases in modern applications.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
    ],
    relatedMaterials: [BlogDatabaseKeys.DatabaseNormalisation],
  },
  [BlogDatabaseKeys.DatabaseNormalisation]: {
    name: "Database Normalisation",
    subtitle:
      "A theoretical overview of database normalisation, its forms, benefits, and practical applications in database design. ",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.Normalisation,
    ],
  },
  [BlogDatabaseKeys.VectorDatabases]: {
    name: "Vector Dabases Theory and Applications",
    subtitle:
      "A theoretical overview of vector databases, their architecture, and use cases in modern applications such as AI and machine learning.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
  },
  [BlogDatabaseKeys.GraphDatabases]: {
    name: "Graph Dabases Theory and Applications",
    subtitle:
      "A theoretical overview of graph databases, their architecture, and use cases in modern applications such as social networks and recommendation systems.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.ArtificialIntelligence,
    ],
  },
  [BlogDatabaseKeys.DocumentDatabases]: {
    name: "Document Dabases Theory and Applications",
    subtitle:
      "A theoretical overview of document databases, their architecture, and use cases in modern applications such as content management systems and web applications.",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.MongoDB,
      SkillDatabaseKeys.Firebase,
      SkillDatabaseKeys.Redis,
    ],
  },
  [BlogDatabaseKeys.ORM]: {
    name: "Understanding Object-Relational Mapping (ORM)",
    subtitle:
      "A Comprehensive Overview of ORM, Its Advantages, Disadvantages, and Role in Modern Web Application Development",
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
