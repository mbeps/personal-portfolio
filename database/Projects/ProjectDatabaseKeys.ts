/**
 * This enum is used to represent the keys of the projects in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/projects/`.
 * Whenever a new project is added to the database, a new key should be added to this enum.
 *s
 * @see {@link projectMap} at `database/projects.ts`
 */
enum ProjectDatabaseKeys {
  //^ Full Stack Projects
  CircusDiscussions = "circus-discussions",
  RingmasterMessaging = "ringmaster-messaging",
  MagicianAI = "magician-ai",
  DrumrollMusic = "drumroll-music",
  JokerNotes = "joker-notes",
  Quizmify = "quizmify",
  SideshowArticles = "sideshow-articles",
  Noodle = "noodle",

  //^ Backend Projects
  SymphonyTranslateBot = "symphony-translate-bot",
  SymphonyWebhookBot = "symphony-webhook-bot",
  SymphonyCobaGPTBot = "symphony-coba-gpt-bot",
  SymphonyApplicationStatusBot = "symphony-application-status-bot",
  SymphonyHeadlessBot = "symphony-headless-bot",
  SymphonyInteractiveBot = "symphony-interactive-bot",
  SymphonyMessageMLBot = "symphony-messageml-bot",
  SymphonyServiceNowBot = "symphony-servicenow-bot",
  SymphonyPollBot = "symphony-poll-bot",
  SymphonyBusinessHighlightsBot = "symphony-business-highlights-bot",
  FlaskForumBackend = "flask-forum-backend",
  FlaskBackendDemo = "flask-backend-demo",
  FlaskJWTAuthentication = "flask-jwt-authentication",
  DjangoAuthentication = "django-authentication",
  ClerkAuthentication = "clerk-authentication",
  Auth0Authentication = "auth0-authentication",
  SpringDataJPATemplate = "spring-data-jpa-template",
  SpringDataMongoTemplate = "spring-data-mongo-template",

  //^ Artificial Intelligence Projects
  CustomNeuralNetworkCoursework = "custom-neural-network-classifier-coursework",
  CustomQLearningAgent = "custom-q-learning-agent",
  HandWrittenDigitClassifier = "hand-written-digit-classifier",
  MachineLearningAlgorithms = "machine-learning-algorithms",
  ArtificialIntelligenceReinforcementLearning = "artificial-intelligence-reinforcement-learning",
  AdultIncomePrediction = "adult-income-prediction",
  HousePricePrediction = "house-price-prediction",
  MachineLearningAssignment1 = "machine-learning-assignment-1",
  MachineLearningAssignment2 = "machine-learning-assignment-2",
  MachineLearningAssignment3 = "machine-learning-assignment-3",
  MachineLearningLabs = "machine-learning-lab-questions",
  ComputationalFinanceAssignment = "computational-finance-assignment",
  MachineLearningDataScienceLab = "machine-learning-data-science-lab",
  MarkovDecisionAgent = "custom-markov-decision-agent",
  ComputerVisionImageSegmentation = "computer-vision-image-segmentation-assignment",
  ComputerVisionQuizzes = "computer-vision-quizzes",
  OsmosGame = "osmos-game",

  SearchingAndSortingAlgorithms = "searching-and-sorting-algorithms",
  AutomatedSetup = "automated-setup",
  Leetcode = "leetcode",
  JavaCalculatorAssignment = "java-calculator-assignment",
  JavaFundamentalsAssignments = "java-fundamentals-asignments",
  DatabasesMiniProject = "databases-mini-project",
  BaseRestController = "base-rest-controller",
  MarkdownToMessageMLConverter = "markdown-to-messageml-converter",
}

export default ProjectDatabaseKeys;
