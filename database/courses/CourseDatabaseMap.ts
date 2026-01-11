import aggregateRelatedMaterialsForCourses from "@/lib/material/course/aggregate/aggregateRelatedMaterialsForCourses";
import aggregateSkillsForCourses from "@/lib/material/course/aggregate/aggregateSkillsForCourses";
import { EDUCATION_PAGE } from "@/constants/pages";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import CourseInterface from "@/database/courses/CourseInterface";
import ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import Database from "@/interfaces/Database";
import validateDatabaseKeys from "@/lib/database/validateDatabaseKeys";
import moduleDatabaseMap from "../modules/ModuleDatabaseMap";

/**
 * Hashmap of the courses I have studied at university.
 * The keys are defined in {@link CourseDatabaseKeys}.
 * The order of the courses is the order that will be used to display them.
 */
const courseMap: Database<CourseInterface> = {
  [CourseDatabaseKeys.KCL_ArtificialIntelligence]: {
    name: "Artificial Intelligence",
    university: "King's College London",
    grade: "Pass with Distinction",
    category: "Master of Science (MSc)",
    skills: [], // dynamically added from modules
    startYear: 2024,
    endYear: 2025,
    logo: `${EDUCATION_PAGE.path}/${CourseDatabaseKeys.KCL_ArtificialIntelligence}/logo.png`,
    certificate: `${EDUCATION_PAGE.path}/${CourseDatabaseKeys.KCL_ArtificialIntelligence}/certificate.jpg`,
    modules: [
      ModuleDatabaseKeys.KCL_ArtificialIntelligenceReasoningAndDecisionMaking,
      ModuleDatabaseKeys.KCL_MachineLearning,
      ModuleDatabaseKeys.KCL_AgentsAndMultiAgentSystems,
      ModuleDatabaseKeys.KCL_ComputerVision,
      ModuleDatabaseKeys.KCL_DataMining,
      ModuleDatabaseKeys.KCL_PhilosophyAndEthicsOfArtificialIntelligence,
      ModuleDatabaseKeys.KCL_OptimizationMethods,
      ModuleDatabaseKeys.KCL_PatternRecognitionNeuralNetworksDeepLearning,
      ModuleDatabaseKeys.KCL_IndividualProject,
    ],
    relatedMaterials: [],
  },
  [CourseDatabaseKeys.RHUL_ComputerScience]: {
    name: "Computer Science",
    university: "Royal Holloway, University of London",
    grade: "First Class Honours",
    category: "Bachelor of Science (BSc)",
    skills: [], // dynamically added from modules
    startYear: 2020,
    endYear: 2023,
    certificate: `${EDUCATION_PAGE.path}/${CourseDatabaseKeys.RHUL_ComputerScience}/certificate.jpg`,
    logo: `${EDUCATION_PAGE.path}/${CourseDatabaseKeys.RHUL_ComputerScience}/logo.png`,
    modules: [
      ModuleDatabaseKeys.RHUL_ObjectOrientedProgramming1,
      ModuleDatabaseKeys.RHUL_ObjectOrientedProgramming2,
      ModuleDatabaseKeys.RHUL_ProgrammingLaboratory,
      ModuleDatabaseKeys.RHUL_InternetServices,
      ModuleDatabaseKeys.RHUL_MathematicalStructures,
      ModuleDatabaseKeys.RHUL_MachineFundamentals,
      ModuleDatabaseKeys.RHUL_SoftwareDesign,
      ModuleDatabaseKeys.RHUL_SoftwareEngineering,
      ModuleDatabaseKeys.RHUL_TeamProject,
      ModuleDatabaseKeys.RHUL_OperatingSystems,
      ModuleDatabaseKeys.RHUL_Databases,
      ModuleDatabaseKeys.RHUL_AlgorithmsAndComplexity,
      ModuleDatabaseKeys.RHUL_MultidimensionalDataProcessing,
      ModuleDatabaseKeys.RHUL_ArtificialIntelligence,
      ModuleDatabaseKeys.RHUL_IntroductionToInformationSecurity,
      ModuleDatabaseKeys.RHUL_UserCentredDesign,
      ModuleDatabaseKeys.RHUL_ITProjectManagement,
      ModuleDatabaseKeys.RHUL_FunctionalProgramming,
      ModuleDatabaseKeys.RHUL_FinalYearProject,
      ModuleDatabaseKeys.RHUL_MachineLearning,
      ModuleDatabaseKeys.RHUL_ComputationalFinance,
      ModuleDatabaseKeys.RHUL_SecurityManagement,
    ],
    relatedMaterials: [
      ProjectDatabaseKeys.ForumDiscussions,
      ProjectDatabaseKeys.Noodle,
      ProjectDatabaseKeys.FlaskForumBackend,
      ProjectDatabaseKeys.MachineLearningAssignment1,
      ProjectDatabaseKeys.MachineLearningAssignment2,
      ProjectDatabaseKeys.MachineLearningAssignment3,
      ProjectDatabaseKeys.MachineLearningLabs,
      ProjectDatabaseKeys.ComputationalFinanceAssignment,
      ProjectDatabaseKeys.OsmosGame,
      ProjectDatabaseKeys.JavaCalculatorAssignment,
      ProjectDatabaseKeys.DatabasesMiniProject,
    ],
  },
};

/**
 * List of keys for the courses that I have studied at university.
 */
export const courseDatabaseKeys: CourseDatabaseKeys[] = Object.keys(
  courseMap
) as CourseDatabaseKeys[];

// Validate that all course keys only contain alphanumeric characters and dashes
validateDatabaseKeys(courseDatabaseKeys);

// adds skills from modules to the courses
/**
 * Database of the courses I have studied at university.
 * The keys are defined in {@link CourseDatabaseKeys}.
 * The order of the courses is the order that will be used to display them.
 * This contains all the skills and related materials for each course which is fetched from the courses modules.
 */
let courseDatabaseMap: Database<CourseInterface> = aggregateSkillsForCourses(
  courseMap,
  moduleDatabaseMap
);

courseDatabaseMap = aggregateRelatedMaterialsForCourses(
  courseDatabaseMap,
  moduleDatabaseMap
);

export default courseDatabaseMap;
