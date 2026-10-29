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
  ForumDiscussions = "forum-discussions",
  CarDealership = "car-dealership",
  RealTimeMessaging = "real-time-messaging",
  AiGenerations = "ai-generations",
  MusicStreaming = "music-streaming",
  RichTextNotes = "rich-text-notes",
  AiQuizzes = "ai-quizzes",
  AiChatClient = "ai-chat-client",
  AiWorkflowAutomations = "ai-workflow-automations",
  Noodle = "noodle",
  CommerzbankAppStatus = "commerzbank-app-status",
  CommerzbankRates = "commerzbank-rates",
  CommerzbankPhoenixFinanceEnrichment = "commerzbank-phoenix-finance-enrichment",
  CommerzbankDataNotification = "commerzbank-data-notifications",

  //^ Backend Projects
  AuthenticationMicroService = "authentication-microservice",
  EntraMockService = "entra-mock-service",
  EmailMicroService = "email-microservice",
  LdapPermissionsMicroService = "ldap-permissions-microservice",
  SymphonyBots = "symphony-bots",
  SpringBootLdapRoleBasedAccessControlLibrary = "spring-boot-ldap-role-based-access-control-library",
  BaseRestController = "base-rest-controller",

  //^ Artificial Intelligence Projects
  AlignmentInLargeLanguageModels = "alignment-in-large-language-models",
  ExcelSpreadsheetMCP = "excel-spreadsheet-mcp",
  LinuxGnomeMcp = "linux-gnome-mcp",
  VisionTransformerFromScratch = "vision-transformer-from-scratch",
  LlamaCppProviderForGitHubCopilotChat = "llama-cpp-provider-for-github-copilot-chat",
  CommerzbankGenAiToOpenAiApiProxy = "commerzbank-gen-ai-to-open-ai-api-proxy",

  CommerzbankTrumpNotification = "commerzbank-trump-notification",
  GnomeQuickSettingsTweakExtension = "gnome-quick-settings-tweak-extension",
  GnomeAllInOneClipboardExtension = "gnome-all-in-one-clipboard-extension",
  MarkdownToMessageMLConverter = "markdown-to-messageml-converter",
}

export default ProjectDatabaseKeys;
