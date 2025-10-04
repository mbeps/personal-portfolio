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
  CommerzbankRates = "commerzbank-rates",

  //^ Backend Projects
  SymphonyTranslateBot = "symphony-translate-bot",
  SymphonyWebhookBot = "symphony-webhook-bot",
  SymphonyCobaGPTBot = "symphony-coba-gpt-bot",
  SymphonyApplicationStatusBot = "symphony-application-status-bot",
  SymphonyHeadlessBot = "symphony-headless-bot",
  SymphonyInteractiveBot = "symphony-interactive-bot",
  SymphonyMessageMLBot = "symphony-messageml-bot",
  SymphonyPollBot = "symphony-poll-bot",
  SymphonyRssBot = "symphony-rss-bot",
  SymphonyBlogBot = "symphony-blog-bot",
  SymphonyBusinessHighlightsBot = "symphony-business-highlights-bot",
  SpringBootLdapRoleBasedAccessControlLibrary = "spring-boot-ldap-role-based-access-control-library",
  SpringBootLdapTemplate = "spring-boot-ldap-template",
  FlaskForumBackend = "flask-forum-backend",
  FlaskBackendDemo = "flask-backend-demo",
  SpringDataJPATemplate = "spring-data-jpa-template",
  SpringDataMongoTemplate = "spring-data-mongo-template",
  BaseRestController = "base-rest-controller",
  UserAuthentication = "user-authentication",

  //^ Artificial Intelligence Projects
  Qwen3BenchmarkingItalic = "qwen3-benchmarking-italic",
  MistralNemoBenchmarkingItalic = "mistral-nemo-benchmarking-italic",
  MagistralSmallBenchmarkingItalic = "magistral-small-benchmarking-italic",
  Llama3_1BenchmarkingItalic = "llama3-1b-benchmarking-italic",
  Qwen3FineTuningMultIt = "qwen3-fine-tuning-multit",
  Llama3_1FineTuningMultIt = "llama3-1b-fine-tuning-multit",
  MagistralSmallFineTuningMultIt = "magistral-small-fine-tuning-multit",
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
  JwtHelper = "jwt-helper",
  AutomatedManifestPush = "automated-manifest-push",
  MdmAutomations = "mdm-automations",
  MarkdownToMessageMLConverter = "markdown-to-messageml-converter",
}

export default ProjectDatabaseKeys;
