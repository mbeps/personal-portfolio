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
  OverviewOfTransformerArchitecture = "overview-of-transformer-architecture",
  OverviewOfQuantisation = "overview-of-quantisation",
  Lora = "lora",
  Backend = "backend",
  ORM = "orm",
  RESTGraphQL = "rest-graphql-api",
  SQLNOSQL = "sql-vs-nosql-databases",
  SyncAsync = "sync-vs-async",
}

export default BlogDatabaseKeys;
