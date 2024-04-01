/**
 * This enum is used to represent the keys of the certificates in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/certificates/`.
 * Whenever a new certificate is added to the database, a new key should be added to this enum.
 *
 * @see {@link certificateMap} at `database/certificates.ts`
 */
enum CertificateKeysEnum {
  //^ Programming Languages
  UdemyPythonProgrammingMasterclass = "UC-a3c47af2-7eb8-4f5b-8309-08559c519d5a",
  LinkedInLearningPythonAdvanced = "c235083fcf3a5aadda62a3aac5f1846098135e9058d9c5c72073ef88891b0395",
  LinkedInPythonObjectOrientedProgramming = "3df6c589b5151377ce45f231cfacf8ca04a02875fa88996a8831c1c9b70c527a",
  LinkedInLearningPython = "71bbbecbbc9b1489e357c3a2091860ae5b02b3ff0e415ce5748b8746d990b8dd",
  UdemyJavaProgrammingMasterclass = "UC-a14123c1-1def-4710-8836-7c05bfaa2fc7",
  JavaObjectOrientedProgramming = "77ad2602bbb22e29478a06792cd4bd0a91dda794cca7b2bbe4e333c193770a22",
  LinkedInLearningTypeScript = "b1761a41ef8dd23125db776561db0b90ae53842518d029015374a2daee08e4e3",
  LinkedInTypeScriptObjectOrientedProgramming = "ed3c16a977b93d46364c0e03d601701094c7f346f08027e0cd3a1d6d52342425",
  LinkedInJavaScriptEssentialTraining = "ade3217d7cef3023f22c8ee034eff28705b7dbfd3981d8377c9b5f61ff39ea51",
  LinkedInJavaScriptPracticeObjectOrientedProgramming = "6f9d825cfa8c3256611a521ec35fe62abd9b7f75636536b59656dcfd57708cf6",
  UdemyTheCompleteJavaScriptCourse = "UC-cf6c70b6-c34c-4400-b8f8-b9a7abc9f18a",
  LinkedInLearningLinuxShellScripting = "67ef8710bfc2f51163f78c9373df3d7b4674e44b3d2e936318399c6a7fe5bda0",
  LinkedInLearningGroovy = "7c14e4c16f72a10046c3d66838e5dd3589fa40ac6cbf6509b235ea6452f430c8",

  //^ Algorithms and Data Structures
  UdemyTheCompleteDataStructuresAndAlgorithmsCourseInPython = "UC-74fdc19f-c016-43c5-8b2a-3cb30941205d",
  LinkedInProgrammingFoundationsAlgorithms = "e31b0a7d9243f44e8a528fc2d184cd4a3bfbdc789c899c3a9ee47ee511e51fd7",
  LinkedInProgrammingFoundationsDataStructures = "c5c41ea1aa52982d08705831612aba2e93e69a64e35dd2cce11c28fad12b59f7",

  //^ Artificial Intelligence
  LinkedInAppliedArtificialIntelligenceAlgorithms = "964c3b1a049a60afa6bcbb55179e326c7e5cea11db0db7b8d3390be8fc5925e1",
  LinkedInAppliedArtificialIntelligenceFoundations = "50182c40b257c756e5d8aea70a9f69f14566da4d3cae7dab86f236554cc7238e",
  LinkedInArtificialIntelligenceFoundationsArtificialIntelligence = "3610d0d7891a746bbe207505c8ec6cfab58723ca973e3082f139a349059248c9",
  LinkedInArtificialIntelligenceFoundationsNeuralNetworks = "5dda55caa1ccf02b29f3c0f5d526c8c026f7fc346a6cad6d9c84f98aba3e2514",
  NASBADataScienceFoundationsFundamentals = "e9cb305b4da5f38726226d31e5eef5da66504838131739c389a2d056ed31cf3f",
  NASBAIntroductionsToArtificialIntelligence = "9f61617caf2fc21f029abd857a03a29758d7e822215d3677eb938b4e29e5da78",
  LinkedInArtificialIntelligenceFoundationsCalculus = "94c788dba6f1c97ceee751315c30b6dc6f4267025733c3de55a315d83a36386d",
  LinkedInArtificialIntelligenceFoundationsLinearAlgebra = "ec6ac0178fb92ba75dd38a95ae48316efb6f4e0e9abcb6bf5431b48021ff8441",
  LinkedInArtificialIntelligenceFoundationsProbability = "b7334fe5b4d04bef6dab5d2ed69080e9ffc590475eba2057046b6ca4a6cf2fba",
  LinkedInArtificialIntelligenceWithSciKitLearn = "3c31f8f11d8ecbd7156dd75b8ae2d7c7db59a8342e3ae7780496b637ac894bb8",

  //^ DevOps
  UdemyDevOpsBeginnersToAdvanced = "UC-a32e2678-8ca1-4b45-8973-ba173b2029cd",
  NASBADevOpsFoundations = "1c6fedf1993d58cfe2f906e4fe4db5b4eddda6ea5fa7f8999436b07682ffe3f7",
  NASBADevOpsFoundationsContinuousDeliveryContinuousIntegration = "6bf47e122551142911c5a636edfee564ff0d57bd07a52888c6c52246946f7747",
  LinkedInJenkinsEssentialTraining = "b1f7a0e46c3659d0d1c25396bbd7838b2374b12afcff7404a0d5077b68e9ebfc",
  LinkedInGitHubActionsForCICD = "679b3ba787209cd0d81d1d68e4bfc01e23ae14f9f2bdfa4e85f917025a8e732b",
  LinkedInCareerEssentialsInGitHubProfessionalCertificate = "a46589fd9baa43c2c77d7de14e3830cf85648f1a6d5d7a489096d4e1b2a4d279",
  LinkedInPracticalGitHubActions = "0344b0df296833ba35ddabf20563556bc67ee7ed0b83b55e19021443d1b9e496",
  LinkedInPracticalGitHubCopilot = "ad4d86c0701098c35103dbac08143317758a73d23a01ff729ac668a6122e2555",
  LinkedInPracticalGitHubCodeSearch = "d8b18aabca615328a553a9e89cae98917a956c87e3498749edbef3cf50e25f0b",
  LinkedInContinuousIntegrationAndDContinuousDeliveryWithGitLab = "1d8280be68ca069d4bb66ad5618118079be897473794a7812ae940146672801c",
  LinkedInDockerForDevelopers = "bf3b572548b56f714cc70ee2c1447312a84869f6a93edb55e3d13b13337f3bd5",
  LinkedInKubernetesProvisioningWithKind = "a63c2359250f6a04bd19dab4ebd049edb511a1a9f2c3ef66a0a8d1df004f7d8d",
  LinkedInAnsibleEssentialTraining = "5eed7f56e5d7dc61b17a3f5fb3cb9fc42130506e948df550bf00899b5868b0a1",
  LinkedInPythonAutomationAndTesting = "be0745932c948f80c1f9d32c0703eeaf94a3fdf3d35368a2619b8043ebe1c2f2",

  //^ Web Development
  UdemyCompleteWebAndMobileDesigner = "UC-ee90fb03-d39d-4b04-be62-cca69beed918",
  LinkedInBuildingRESTfulAPIsWithFlask = "c5ccec418e67284d7945832543376e344173867d424cc1c7c7e7f4235b14debe",
  LinkedInLearningRESTAPIs = "d16b210de3459c563295c4868ac19097bdddf84976d2137fa08293ec698f3380",
  LinkedInDesigningRESTfulAPIS = "a54ec39fe8ae07277cfbfb553a61f1d6a0c95f23969a3f665d5e5c0afbd9fd68",
  LinkedInRESTfulAPIsWithNodeJSAndExpress = "c00cb40bda2152dd86d29b813b0d1b172123452a0b87b6017aec13115e693487",
  LinkedInCSSFundamentalsUnlockThePowerOfWebStyling = "ff054b4dd1a8fec0eb00ee80a59bc82e5fed3e50b11bba3e3cd33026f0a0eee0",
  LinkedInFirebaseEssentialTraining = "5b6b19227f501cb7dab97b2378a58bc7740bd590a2e44916bf07ba59fd2fc06f",
  LinkedInFlaskEssentialTraining = "4585e03073dcdf552484e6a6d9bc407d1b7e0ad3872d6a3b114d3e3d0869e9ea",
  LinkedInLearningDjango = "7b5e4d7314ff1b615a3ae959f0d936e66808a5f718a85e42813d957d4ec492d7",
  LinkedInGraphQLEssentialTraining = "3c1654b23256c27553b9d6288d9592aa47fe825a7bf85714283f3e61e26f6f58",
  LinkedInHTMLEssentialTraining = "983c6ba63131250c1d3df7e13f5e8f8951c02cb64c02c33d99e80df23cf3c869",
  LinkedInNodeJsEssentialTraining = "ef41e5cf67f7657353febca7c6b206bf7dd8e28497c393790d8a266842c81132",
  LinkedInReactJsEssentialTraining = "f2226c0a5de58874e8b882b91fe8945f69d0f0b6de15fa70a09082a08bd464fd",
  LinkedInLearningNextJs = "a2ae9eb61db705535ebd73746bfe20e0988633b80ade57c12aa523a9bbdae3db",
  LinkedInUsingTypeScriptWithReact = "UC-431983c4-3861-46fc-866e-d97bd5edab77",
  AmigoscodeSpringBootForBeginners = "l4wvdvdd",

  //^ Databases
  UdemyDatabaseManagementSystemAndSQL = "UC-b49387a5-5a13-4b1a-aba1-73cac775c026",
  NASBADatabaseFoundationsIntroToDatabases = "8b2d47f66f59b8b9724a6c1f05f15e27a9b08c3caaf95169c1d6c64537a1d066",
  LinkedInIntroductionToMongoDB = "f024344050a592ea0bb2ada78e0175fabecabab2248ffeb58671b9fe4adfc141",
  LinkedInRedisEssentialTraining = "209aec09fbb007c809840a071b5db71dc8e08da5b92799121e158ed1e185062b",

  //^ Mathematics
  UdemyDiscreteMathematics = "UC-8d13c37d-5013-4873-b4fd-56a867ad853d",
  UdemyALevelMathsPureYear1 = "UC-630e6292-a0ee-4ebb-94f0-ebaeedb101a8",
  UdemyALevelMathsPureYear2 = "UC-f951f5eb-0e4c-4fd6-8db0-29c24e616a2b",
  UdemyALevelMathsMechanicsYear1 = "UC-84beb6d6-275d-41ff-8215-c4918454b846",
  UdemyALevelMathsMechanicsYear2 = "UC-729218f1-da7b-4684-857f-78f9920686f2",
  UdemyALevelStatisticsYear1 = "UC-4a1b790f-b0d8-430b-8dfd-d40a60c0ebee",
  UdemyALevelStatisticsYear2 = "UC-1efbccad-5f12-4002-85cc-1efebfb81e34",
  UdemyCompleteALevelMathsMechanics = "UC-5aabeb79-4fb8-4cab-a5d5-3daa1b009170",
  UdemyCompleteALevelPureMaths = "UC-e2179bc4-5760-4a77-88a4-a2738d22a96e",
  UdemyCompleteALevelMathsStatistics = "UC-fbc6d079-db3f-405f-8c32-f242b266d826",

  //^ Software Engineering
  LinkedInCreateAnOpenSourceProjectInPython = "6afc37d98889e1ed209d677fd7928ece257125ca8d538ed6b0fa0ed18e4e30d6",
  LinkedInIntroducingMaven = "551778db5ecef81f732b9e48d50db3fe709f877f1ac9c834923b0c96bb636e72",
  LinkedInLearningGradle = "1fcbb76a7feb53dc0b8585896de025b31799feeb7819544ba6e6ebf454ef6769",
  LinkedInGradleForJavaBasedApplicationsAndLibraries = "8c9027d06b51638e29fcac4c109275401f5202a046eb80de8f65fcc20c9c733b",
  LinkedInSoftwareTestingFoundationsTestTechniques = "f3297827ac972df2c87c56883f1217ba051a4f12df86886d33f902f2fda5614c",
  UdemyTheGitAndGitHubBootcamp = "UC-ba00c0c9-221d-4939-99b4-90244570a81b",
  LinkedInProgrammingFoundationsDesignPatterns = "f14a53c061bc271d233daeb5f46d5441dc2e86f386420c0fbd846291a5cccaf8",
  LinkedInBecomeAProgrammerFoundations = "e77314151bd35fb801bf98d39ab9bb75c479fb18880b4d781ccaabebebe28c16",
  LinkedInProgrammingFoundationsFundamentals = "d6f139fdc8993ba2bd1503ac0ea0ff06ace73daf1570845e88637719ce5ddd68",
  LinkedInProgrammingFoundationsBeyondTheFundamentals = "53e2a4e2313cb8c190ba310b04933611ea792de252614d9846c7fd2963ae300b",
  LinkedInProgrammingFoundationsObjectOrientedDesign = "190a56bee558ac47ecc390563ebb20e4eebaccc00a1f1a7180dec108e371985d",
  LinkedInProgrammingFoundationsAlgorithms2 = "664e3f8841cfa46b854e98b98f27b306b26657ae2b05839700edd376fcd65d9b",
  LinkedInProgrammingFoundationsDataStructures2 = "fd7a3bce3b7829c061da04bfa8420b534c91c5b6b35955ec536895721202a457",
  LinkedInProgrammingFoundationsDatabases = "c09365e0dcab16c1136a527b386b4a9d817a925d3ddede71b1f8c92195dce880",
  LinkedInProgrammingFoundationsMemoryPointersAndGarbageCollection = "cbcd6eaa43aa1e91c0d04e31bd886af185ceb513298b7567d1ebfafa48bb2b2b",
  LinkedInProgrammingFoundationsAPIsAndWebServices = "defb0bb2a25136a0517193e67c9d2a7a3c8a0eaa1720055d1091735e0a039cf0",
  LinkedInProgrammingFoundationsSecureCoding = "66d22de887f57e65fc6cdbbd3d9ea05498c3cae6c9cad34fcc633b3013d0d38b",
  LinkedInProgrammingFoundationsTestDrivenDevelopment = "0572df657cb2e2e06f47b43669f87869afe82657c6151630f43ec2a0e720da16",
  LinkedInProgrammingFoundationsSoftwareTestingQA = "adff28e35ee3401b29a9bcfdecdb1888e99ea4d440f1bf1cd4d920e539bfdbcd",

  //^ Management
  NASBAProjectManagementFoundations = "8ab210e2af6b2df598aa3e27db515103158cd049367cf6afd9949d874b7677eb",
  PMIProjectManagementFoundations = "23788be7119de6bc027865d8345bcd7e8c98563fc1a8a373351e05fa79e1b6ef",
  PMIPracticalProjectManagementAndCollaboration = "2816ac02fcccf39993020826512ff9ac6f82177fbe867c5ab9b1b01710eb784a",

  //^ Cloud Computing
  LinkedInAWSEssentialTrainingForDevelopers = "29e1352bda64cbc78e2f3fbf7205d2761bd8c465925eba7c4cf699aab8cf72b4",
  LinkedInAzureEssentialTrainingForDevelopers = "bf0cac80ff7e3f2b8148e20d6ea1fccb6eb15457a184229fee9ff439f652cfba",
  LinkedInLearningGoogleCloudPlatformEssentialTraining = "1bc3074a5e84539c7bc5fdeeee83438602cc303ba648ec90ef5fc018693e62a1",
  SymphonyCertifiedBotDeveloperJava = "e398f5d1-7d46-4585-9ab2-effa2176920f",
  SymphonyCertifiedBotDeveloperPython = "d87290c2-7db7-45c2-89e2-ebd2c41e8b85",
}

export default CertificateKeysEnum;
