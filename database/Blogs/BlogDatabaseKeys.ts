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
  Transformer = "transformer-architecture",
  Lora = "lora",
  Quantisation = "quantisation",
  ModelContextProtocol = "model-context-protocol",
  RitrievalAugmentedGeneration = "retrieval-augmented-generation",
  HiddenMarkovModelsInAI = "hidden-markov-models-in-ai",
  Backend = "backend",
  ORM = "orm",
  CrossOriginResourceSharing = "cross-origin-resource-sharing",
  TypesOfSoftwareTesting = "types-of-software-testing",
  AuthenticationSessionManagement = "authentication-session-management",
  DatabaseParadigms = "database-paradigms",
  DatabaseNormalisation = "database-normalisation",
  VectorDatabases = "vector-databases",
  SyncAsync = "sync-vs-async",
  ApiComparison = "api-comparison",
  DesignPatterns = "design-patterns",
}

export default BlogDatabaseKeys;
