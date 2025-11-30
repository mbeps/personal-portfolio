/**
 * This enum is used to represent the keys of the blogs in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/blog/`.
 * Whenever a new blog is added to the database, a new key should be added to this enum.
 *
 * @see {@link blogMap} at `database/blogs.ts`
 */
enum BlogDatabaseKeys {
  MachineLearningFoundations = "machine-learning-foundations",
  IntroductionToNeuralNetworks = "introduction-to-neural-networks",
  NeuralNetworkLearningAndGradientDescent = "neural-network-learning-and-gradient-descent",
  BackPropagation = "back-propagation",
  Transformer = "transformer-architecture",
  Lora = "lora",
  Quantisation = "quantisation",
  ModelContextProtocol = "model-context-protocol",
  RitrievalAugmentedGeneration = "retrieval-augmented-generation",
  ReasoningModels = "reasoning-models",
  HiddenMarkovModelsInAI = "hidden-markov-models-in-ai",
  Backend = "backend",
  ORM = "orm",
  CrossOriginResourceSharing = "cross-origin-resource-sharing",
  TypesOfSoftwareTesting = "types-of-software-testing",
  AuthenticationSessionManagement = "authentication-session-management",
  DatabaseParadigms = "database-paradigms",
  RelationalDatabases = "relational-databases",
  DatabaseNormalisation = "database-normalisation",
  VectorDatabases = "vector-databases",
  GraphDatabases = "graph-databases",
  DocumentDatabases = "document-databases",
  TimeSeriesDatabases = "time-series-databases",
  SyncAsync = "sync-vs-async",
  ApiComparison = "api-comparison",
  DesignPatterns = "design-patterns",
}

export default BlogDatabaseKeys;
