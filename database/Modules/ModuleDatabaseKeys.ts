/**
 * This enum is used to represent the keys of the university modules in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/university-modules/`.
 * Whenever a new university module is added to the database, a new key should be added to this enum.
 *
 * @see {@link universityModuleMap} at `database/university-modules.ts`
 */
enum ModuleDatabaseKeys {
  // Royal Holloway University of London
  RHUL_ObjectOrientedProgramming1 = "CS1811",
  RHUL_ObjectOrientedProgramming2 = "CS1812",
  RHUL_ProgrammingLaboratory = "CS1822",
  RHUL_InternetServices = "CS1840",
  RHUL_MathematicalStructures = "CS1860",
  RHUL_MachineFundamentals = "CS1870",
  RHUL_SoftwareDesign = "CS1890",
  RHUL_SoftwareEngineering = "CS2800",
  RHUL_TeamProject = "CS2810",
  RHUL_OperatingSystems = "CS2850",
  RHUL_Databases = "CS2855",
  RHUL_AlgorithmsAndComplexity = "CS2860",
  RHUL_MultidimensionalDataProcessing = "CS2900",
  RHUL_ArtificialIntelligence = "CS2910",
  RHUL_IntroductionToInformationSecurity = "IY2760",
  RHUL_UserCentredDesign = "CS3001",
  RHUL_ITProjectManagement = "CS3003",
  RHUL_FunctionalProgramming = "CS3510",
  RHUL_FinalYearProject = "CS3821",
  RHUL_MachineLearning = "CS3920",
  RHUL_ComputationalFinance = "CS3930",
  RHUL_SecurityManagement = "IY3501",

  // King's College London
  KCL_PatternRecognitionNeuralNetworksDeepLearning = "7CCSMPNN",
  KCL_MachineLearning = "6CCS3ML1",
  KCL_DataMining = "7CCSMDM1",
  KCL_OptimizationMethods = "7CCSMOME",
  KCL_ArtificialIntelligenceReasoningAndDecisionMaking = "6CCS3AIN",
  KCL_AgentsAndMultiAgentSystems = "7CCSMAMS",
  KCL_ComputerVision = "7CCSMCVI",
  KCL_PhilosophyAndEthicsOfArtificialIntelligence = "7CCSMEAI",
  KCL_IndividualProject = "7CCSMPRJ",
}

export default ModuleDatabaseKeys;
