/**
 * This enum is used to represent the keys of the projects in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/projects/`.
 * Whenever a new project is added to the database, a new key should be added to this enum.
 *
 * @see {@link projectMap} at `database/projects.ts`
 */
enum ProjectDatabaseKeys {
  CircusDiscussions = "circus-discussions",
  RingmasterMessaging = "ringmaster-messaging",
  MagicianAI = "magician-ai",
  DrumrollMusic = "drumroll-music",
  JokerNotes = "joker-notes",
  Quizmify = "quizmify",
  SideshowArticles = "sideshow-articles",
  Noodle = "noodle",
  ConvoGPT = "convo-gpt",
  FlaskForumBackend = "flask-forum-backend",
  FlaskJWTAuthentication = "flask-jwt-authentication",
  DjangoAuthentication = "django-authentication",
  ClerkAuthentication = "clerk-authentication",
  Auth0Authentication = "auth0-authentication",
  AdultIncomePrediction = "adult-income-prediction",
  HousePricePrediction = "house-price-prediction",
  MachineLearningAssignment1 = "machine-learning-assignment-1",
  MachineLearningAssignment2 = "machine-learning-assignment-2",
  MachineLearningAssignment3 = "machine-learning-assignment-3",
  MachineLearningLabQuestions = "machine-learning-lab-questions",
  ComputationalFinanceAssignment = "computational-finance-assignment",
  MachineLearningTheoryPractice = "machine-learning-theory-practice",
  OsmosGame = "osmos-game",
  SurfaceFight = "surface-fight",
  Platformer = "platformer",
  PlatformerDeathWalk = "platformer-death-walk",
  CodingBreakout = "coding-breakout",
  CatchMaruf = "catch-maruf",
  AgainstGravity = "against-gravity",
  ScrollingShooter = "scrolling-shooter",
  Dungeon = "dungeon",
  VegNinja = "veg-ninja",
  AngryCatsSpace = "angry-cats-space",
  AngryCats = "angry-cats",
  SearchingAndSortingAlgorithms = "searching-and-sorting-algorithms",
  AutomatedSetup = "automated-setup",
  Leetcode = "leetcode",
  JavaCalculatorAssignment = "java-calculator-assignment",
  BotanicGardenPlannerAssignment = "botanic-garden-planner-assignment",
  TrackAndTraceAssignment = "track-and-trace-assignment",
  HollomonAssignment = "holomon-assignment",
  DatabasesMiniProject = "databases-mini-project",
}

export default ProjectDatabaseKeys;