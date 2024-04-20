import aggregateSkillsForCourses from "@/actions/material/course/aggregate/aggregateSkillsForCourses";
import ProjectKeysEnum from "@/enums/DatabaseKeysEnums/ProjectKeysEnum";
import UniversityCourseKeysEnum from "@/enums/DatabaseKeysEnums/UniversityCourseKeysEnum";
import UniversityModuleKeysEnum from "@/enums/DatabaseKeysEnums/UniversityModuleKeysEnum";
import UniversityCourseInterface from "@/interfaces/material/UniversityCourseInterface";
import moduleDatabase from "./modules";
import aggregateRelatedMaterialsForCourses from "@/actions/material/course/aggregate/aggregateRelatedMaterialsForCourses";

/**
 * Hashmap of the courses I have studied at university.
 * The keys are defined in {@link UniversityCourseKeysEnum}.
 * The order of the courses is the order that will be used to display them.
 */
const courseMap: Database<UniversityCourseInterface> = {
  [UniversityCourseKeysEnum.RHUL_ComputerScience]: {
    name: "Computer Science",
    university: "Royal Holloway, University of London",
    grade: "First Class Honours",
    category: "Bachelor of Science",
    skills: [],
    startYear: 2020,
    endYear: 2023,
    modules: [
      UniversityModuleKeysEnum.RHUL_ObjectOrientedProgramming1,
      UniversityModuleKeysEnum.RHUL_ObjectOrientedProgramming2,
      UniversityModuleKeysEnum.RHUL_ProgrammingLaboratory,
      UniversityModuleKeysEnum.RHUL_InternetServices,
      UniversityModuleKeysEnum.RHUL_MathematicalStructures,
      UniversityModuleKeysEnum.RHUL_MachineFundamentals,
      UniversityModuleKeysEnum.RHUL_SoftwareDesign,
      UniversityModuleKeysEnum.RHUL_SoftwareEngineering,
      UniversityModuleKeysEnum.RHUL_TeamProject,
      UniversityModuleKeysEnum.RHUL_OperatingSystems,
      UniversityModuleKeysEnum.RHUL_Databases,
      UniversityModuleKeysEnum.RHUL_AlgorithmsAndComplexity,
      UniversityModuleKeysEnum.RHUL_MultidimensionalDataProcessing,
      UniversityModuleKeysEnum.RHUL_ArtificialIntelligence,
      UniversityModuleKeysEnum.RHUL_IntroductionToInformationSecurity,
      UniversityModuleKeysEnum.RHUL_UserCentredDesign,
      UniversityModuleKeysEnum.RHUL_ITProjectManagement,
      UniversityModuleKeysEnum.RHUL_FunctionalProgramming,
      UniversityModuleKeysEnum.RHUL_FinalYearProject,
      UniversityModuleKeysEnum.RHUL_MachineLearning,
      UniversityModuleKeysEnum.RHUL_ComputationalFinance,
      UniversityModuleKeysEnum.RHUL_SecurityManagement,
    ],
    relatedMaterials: [
      ProjectKeysEnum.CircusDiscussions,
      ProjectKeysEnum.Noodle,
      ProjectKeysEnum.FlaskForumBackend,
      ProjectKeysEnum.MachineLearningAssignment1,
      ProjectKeysEnum.MachineLearningAssignment2,
      ProjectKeysEnum.MachineLearningAssignment3,
      ProjectKeysEnum.MachineLearningLabQuestions,
      ProjectKeysEnum.MachineLearningTheoryPractice,
      ProjectKeysEnum.ComputationalFinanceAssignment,
      ProjectKeysEnum.OsmosGame,
      ProjectKeysEnum.JavaCalculatorAssignment,
      ProjectKeysEnum.DatabasesMiniProject,
    ],
  },
};

/**
 * List of keys for the courses that I have studied at university.
 */
export const courseKeys: UniversityCourseKeysEnum[] = Object.keys(
  courseMap
) as UniversityCourseKeysEnum[];

// adds skills from modules to the courses
/**
 * Database of the courses I have studied at university.
 * The keys are defined in {@link UniversityCourseKeysEnum}.
 * The order of the courses is the order that will be used to display them.
 * This contains all the skills and related materials for each course which is fetched from the courses modules.
 */
let courseDatabase: Database<UniversityCourseInterface> =
  aggregateSkillsForCourses(courseMap, moduleDatabase);

courseDatabase = aggregateRelatedMaterialsForCourses(
  courseDatabase,
  moduleDatabase
);

export default courseDatabase;
