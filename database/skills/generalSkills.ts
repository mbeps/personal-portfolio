import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const generalSkills: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.ContinuousIntegration]: {
    name: "Continuous Integration",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },

  [SkillSlugEnum.ContinuousDelivery]: {
    name: "Continuous Delivery",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },

  [SkillSlugEnum.ContinuousDeployment]: {
    name: "Continuous Deployment",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },

  [SkillSlugEnum.DevOps]: {
    name: "DevOps",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },

  [SkillSlugEnum.Linting]: {
    name: "Linting",
    category: SkillCategoriesEnum.CodeQuality,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.ObjectOrientedProgramming]: {
    name: "Object Oriented Programming",
    category: SkillCategoriesEnum.ProgrammingParadigms,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.FunctionalProgramming]: {
    name: "Functional Programming",
    category: SkillCategoriesEnum.ProgrammingParadigms,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.Algorithms]: {
    name: "Algorithms",
    category: SkillCategoriesEnum.CoreComputerScience,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.DataStructures]: {
    name: "Data Structures",
    category: SkillCategoriesEnum.CoreComputerScience,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.AndroidDevelopment]: {
    name: "Android Development",
    category: SkillCategoriesEnum.PlatformDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.iOSDevelopment]: {
    name: "iOS Development",
    category: SkillCategoriesEnum.PlatformDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.WindowsDevelopment]: {
    name: "Windows Development",
    category: SkillCategoriesEnum.PlatformDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.MacDevelopment]: {
    name: "Mac Development",
    category: SkillCategoriesEnum.PlatformDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.LinuxDevelopment]: {
    name: "Linux Development",
    category: SkillCategoriesEnum.PlatformDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.MachineLearning]: {
    name: "Machine Learning",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.DeepLearning]: {
    name: "Deep Learning",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.ArtificialIntelligence]: {
    name: "Artificial Intelligence",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.DataScience]: {
    name: "Data Science",
    category: SkillCategoriesEnum.DataScience,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.Hyperparameters]: {
    name: "Hyperparameters",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.Boosting]: {
    name: "Boosting",
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
    category: SkillCategoriesEnum.ArtificialIntelligence,
  },
  [SkillSlugEnum.DataVisualisation]: {
    name: "Data Visualisation",
    category: SkillCategoriesEnum.DataScience,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.NeuralNetworks]: {
    name: "Neural Networks",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.APIs]: {
    name: "APIs",
    category: SkillCategoriesEnum.APIs,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.Databases]: {
    name: "Databases",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.WebSockets]: {
    name: "Web Sockets",
    category: SkillCategoriesEnum.WebSockets,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.RelationalDatabases]: {
    name: "Relational Databases (SQL)",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },

  [SkillSlugEnum.NonRelationalDatabases]: {
    name: "Non Relational Databases (NoSQL)",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.ObjectRelationalMapping]: {
    name: "Object Relational Mapping",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.Testing]: {
    name: "Testing",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.Containerisation]: {
    name: "Containerization",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.Clusterisation]: {
    name: "Clusterisation",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.InfrastructureAsCode]: {
    name: "Infrastructure as Code",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.Automation]: {
    name: "Automation",
    category: SkillCategoriesEnum.Automation,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.DatabaseManagementSystems]: {
    name: "Database Management Systems",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.DatabaseIndexing]: {
    name: "Indexing",
    category: SkillCategoriesEnum.Databases,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.CloudComputing]: {
    name: "Cloud Computing",
    category: SkillCategoriesEnum.CloudComputing,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },

  [SkillSlugEnum.DesignPatterns]: {
    name: "Design Patterns",
    category: SkillCategoriesEnum.CodeQuality,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.UserAuthentication]: {
    name: "User Authentication",
    category: SkillCategoriesEnum.BackEndWebDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.WebDevelopment]: {
    name: "Web Development",
    category: SkillCategoriesEnum.PlatformDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.SDKs]: {
    name: "SDK",
    category: SkillCategoriesEnum.SDKs,
    isMainSkill: true,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.UserCentricDesign]: {
    name: "User Centric Design",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.GameDevelopment]: {
    name: "Game Development",
    category: SkillCategoriesEnum.GameDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.Mathematics]: {
    name: "Mathematics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.VersionControlSystems]: {
    name: "Version Control",
    category: SkillCategoriesEnum.VersionControl,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
  [SkillSlugEnum.StateManagement]: {
    name: "State Management",
    category: SkillCategoriesEnum.FrontEndWebDevelopment,
    isMainSkill: false,
    skillType: SkillTypesEnum.General,
  },
};

export default generalSkills;
