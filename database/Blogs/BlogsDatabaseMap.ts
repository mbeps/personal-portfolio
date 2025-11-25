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
      "An theoretical introduction to Neural Networks and architectures.",
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
  [BlogDatabaseKeys.Backend]: {
    name: "Exploring Backends: Custom vs Managed Solutions",
    subtitle:
      "An In-depth Analysis of Backend Development Approaches, Tools, and Security Considerations",
    skills: [
      SkillDatabaseKeys.CloudComputing,
      SkillDatabaseKeys.Firebase,
      SkillDatabaseKeys.Supabase,
    ],
    category: BlogCategoriesEnum.WebDevelopment,
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
      SkillDatabaseKeys.Mongoose,
      SkillDatabaseKeys.SQLAlchemy,
      SkillDatabaseKeys.Hibernate,
      SkillDatabaseKeys.Probability,
    ],
  },
  [BlogDatabaseKeys.RESTGraphQL]: {
    name: "Comparing GraphQL and REST: A Detailed Overview",
    subtitle: "Choosing the Right API Design Approach",
    category: BlogCategoriesEnum.WebDevelopment,
    skills: [
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.GraphQL,
      SkillDatabaseKeys.ProblemSolving,
    ],
  },
  [BlogDatabaseKeys.SQLNOSQL]: {
    name: "Exploring Databases: A Comparative Study of Relational and Non-Relational Models",
    subtitle:
      "An In-depth Analysis of Database Systems and their Role in Software Engineering and Web Development",
    category: BlogCategoriesEnum.Databases,
    skills: [
      SkillDatabaseKeys.DatabaseManagementSystems,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.Normalisation,
    ],
  },
  [BlogDatabaseKeys.SyncAsync]: {
    name: "Sync vs Async: Deep Dive into Programming Models",
    subtitle:
      "Understanding and Optimizing Synchronous and Asynchronous Programming",
    category: BlogCategoriesEnum.SoftwareEngineering,
    skills: [],
  },

  [ProjectDatabaseKeys.ForumDiscussions]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.ForumDiscussions].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.ForumDiscussions].description,
    category: BlogCategoriesEnum.FullStackWebProjects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.ForumDiscussions].skills,
  },
  [ProjectDatabaseKeys.RealTimeMessaging]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.RealTimeMessaging].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.RealTimeMessaging].description,
    category: BlogCategoriesEnum.FullStackWebProjects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.RealTimeMessaging].skills,
  },
  [ProjectDatabaseKeys.AiGenerations]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.AiGenerations].name,
    subtitle: projectDatabaseMap[ProjectDatabaseKeys.AiGenerations].description,
    category: BlogCategoriesEnum.FullStackWebProjects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.AiGenerations].skills,
  },
  [ProjectDatabaseKeys.MusicStreaming]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.MusicStreaming].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.MusicStreaming].description,
    category: BlogCategoriesEnum.FullStackWebProjects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.MusicStreaming].skills,
  },
  [ProjectDatabaseKeys.AiQuizzes]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.AiQuizzes].name,
    subtitle: projectDatabaseMap[ProjectDatabaseKeys.AiQuizzes].description,
    category: BlogCategoriesEnum.FullStackWebProjects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.AiQuizzes].skills,
  },

  [ProjectDatabaseKeys.SymphonyTranslateBot]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.SymphonyTranslateBot].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.SymphonyTranslateBot].description,
    category: BlogCategoriesEnum.BackendProjects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.SymphonyTranslateBot].skills,
  },
  [ProjectDatabaseKeys.SymphonyWebhookBot]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.SymphonyWebhookBot].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.SymphonyWebhookBot].description,
    category: BlogCategoriesEnum.BackendProjects,
    skills: projectDatabaseMap[ProjectDatabaseKeys.SymphonyWebhookBot].skills,
  },

  [ProjectDatabaseKeys.OsmosGame]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.OsmosGame].name,
    subtitle: projectDatabaseMap[ProjectDatabaseKeys.OsmosGame].description,
    category: BlogCategoriesEnum.Other,
    skills: projectDatabaseMap[ProjectDatabaseKeys.OsmosGame].skills,
  },
  [ProjectDatabaseKeys.JavaCalculatorAssignment]: {
    name: projectDatabaseMap[ProjectDatabaseKeys.JavaCalculatorAssignment].name,
    subtitle:
      projectDatabaseMap[ProjectDatabaseKeys.JavaCalculatorAssignment]
        .description,
    category: BlogCategoriesEnum.Other,
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
