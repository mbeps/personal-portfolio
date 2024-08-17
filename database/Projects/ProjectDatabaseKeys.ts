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
  FlaskForumBackend = "flask-forum-backend",
  FlaskBackendDemo = "flask-backend-demo",
  FlaskJWTAuthentication = "flask-jwt-authentication",
  DjangoAuthentication = "django-authentication",
  ClerkAuthentication = "clerk-authentication",
  Auth0Authentication = "auth0-authentication",
  MachineLearningAlgorithmsAndTechniquesLab = "machine-learning-algorithms-and-techniques-lab",
  ArtificialIntelligenceReinforcementLearning = "artificial-intelligence-reinforcement-learning",
  AdultIncomePrediction = "adult-income-prediction",
  HousePricePrediction = "house-price-prediction",
  MachineLearningAssignment1 = "machine-learning-assignment-1",
  MachineLearningAssignment2 = "machine-learning-assignment-2",
  MachineLearningAssignment3 = "machine-learning-assignment-3",
  MachineLearningLabQuestions = "machine-learning-lab-questions",
  ComputationalFinanceAssignment = "computational-finance-assignment",
  MachineLearningTheoryPractice = "machine-learning-theory-practice",
  MachineLearningDataScienceLab = "machine-learning-data-science-lab",
  SymphonyTranslateBot = "symphony-translate-bot",
  SymphonyWebhookBot = "symphony-webhook-bot",
  SymphonyHeadlessBot = "symphony-headless-bot",
  SymphonyInteractiveBot = "symphony-interactive-bot",
  SymphonyMessageMLBot = "symphony-messageml-bot",
  SymphonyServiceNowBot = "symphony-servicenow-bot",
  SymphonyPollBot = "symphony-poll-bot",
  OsmosGame = "osmos-game",
  SearchingAndSortingAlgorithms = "searching-and-sorting-algorithms",
  AutomatedSetup = "automated-setup",
  Leetcode = "leetcode",
  JavaCalculatorAssignment = "java-calculator-assignment",
  BotanicGardenPlannerAssignment = "botanic-garden-planner-assignment",
  TrackAndTraceAssignment = "track-and-trace-assignment",
  HollomonAssignment = "holomon-assignment",
  DatabasesMiniProject = "databases-mini-project",
  AdvancedMathematicsPractice = "advanced-mathematics-practice",
}

export default ProjectDatabaseKeys;
