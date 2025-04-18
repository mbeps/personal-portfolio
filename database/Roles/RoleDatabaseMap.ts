import updateRolesWithExperienceTime from "@/actions/material/role/updateRolesWithExperienceTime";
import ShortDate from "@/class/ShortDate";
import CertificateDatabaseKeys from "@/database/Certificates/CertificateDatabaseKeys";
import ProjectDatabaseKeys from "@/database/Projects/ProjectDatabaseKeys";
import RoleDatabaseKeys from "@/database/Roles/RoleDatabaseKeys";
import RoleInterface from "@/database/Roles/RoleInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import ExperienceCategoriesEnum from "@/enums/Experience/ExperienceCategoriesEnum";
import ExperienceTypeEnum from "@/enums/Experience/ExperienceTypeEnum";
import CompanyDatabaseKeys from "../Companies/CompanyDatabaseKeys";

const rolesMap: Database<RoleInterface> = {
  [RoleDatabaseKeys.CommerzbankDevOpsEngineer]: {
    name: "Backend Software Engineer",
    category: ExperienceCategoriesEnum.Software,
    type: ExperienceTypeEnum.FullTime,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.Kotlin,
      SkillDatabaseKeys.ShellScript,
      SkillDatabaseKeys.Groovy,
      SkillDatabaseKeys.ObjectOrientedProgramming,
      SkillDatabaseKeys.REST,

      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Spring,
      SkillDatabaseKeys.Normalisation,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.MongoDB,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.Hibernate,
      SkillDatabaseKeys.SpringDataJPA,
      SkillDatabaseKeys.SpringDataMongoDB,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.IntegrationManagement,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.DevOps,
      SkillDatabaseKeys.Automation,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.BitBucket,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousIntegration,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.Containerisation,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.Gradle,
      SkillDatabaseKeys.AWS,
      SkillDatabaseKeys.GCP,
      SkillDatabaseKeys.Azure,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.QualityManagement,

      SkillDatabaseKeys.ArtificialIntelligence,
    ],
    startDate: new ShortDate(2023, 11),
    endDate: new ShortDate(new Date().getFullYear(), new Date().getMonth() + 1),
    relatedMaterials: [
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperPython,

      ProjectDatabaseKeys.SymphonyTranslateBot,
      ProjectDatabaseKeys.SymphonyWebhookBot,
      ProjectDatabaseKeys.SymphonyCobaGPTBot,
      ProjectDatabaseKeys.SymphonyBusinessHighlightsBot,
      ProjectDatabaseKeys.SymphonyApplicationStatusBot,
      ProjectDatabaseKeys.SymphonyMessageMLBot,
      ProjectDatabaseKeys.SymphonyPollBot,
      ProjectDatabaseKeys.SymphonyInteractiveBot,
      ProjectDatabaseKeys.SymphonyHeadlessBot,
      ProjectDatabaseKeys.SpringDataJPATemplate,
      ProjectDatabaseKeys.SpringDataMongoTemplate,

      ProjectDatabaseKeys.BaseRestController,
      ProjectDatabaseKeys.MarkdownToMessageMLConverter,
    ],
    company: CompanyDatabaseKeys.Commerzbank,
  },
  [RoleDatabaseKeys.OpenSourceContributor]: {
    name: "Community Member",
    category: ExperienceCategoriesEnum.Software,
    type: ExperienceTypeEnum.Volunteering,
    company: CompanyDatabaseKeys.OpenSource,
    startDate: new ShortDate(2019, 12),
    endDate: new ShortDate(new Date().getFullYear(), new Date().getMonth() + 1),
    skills: [
      SkillDatabaseKeys.UserCentricDesign,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.GitLab,

      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.QualityManagement,
      SkillDatabaseKeys.Algorithms,
      SkillDatabaseKeys.UserAuthentication,
    ],
  },
  [RoleDatabaseKeys.GoogleRHULDevelopersClubSoftwareEngineer]: {
    name: "Software Engineer",
    category: ExperienceCategoriesEnum.Software,
    type: ExperienceTypeEnum.Volunteering,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.GraphQL,
      SkillDatabaseKeys.Apollo,

      SkillDatabaseKeys.Firebase,
      SkillDatabaseKeys.Supabase,
      SkillDatabaseKeys.NextAuth,
      SkillDatabaseKeys.ClerkAuth,
      SkillDatabaseKeys.Auth0,
      SkillDatabaseKeys.Flask,
      SkillDatabaseKeys.ExpressJS,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.TailwindCSS,
      SkillDatabaseKeys.ChakraUI,
      SkillDatabaseKeys.Databases,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.MySQL,
      SkillDatabaseKeys.SQLite,
      SkillDatabaseKeys.Normalisation,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.Prisma,
      SkillDatabaseKeys.SQLAlchemy,
      SkillDatabaseKeys.GitHub,
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.Git,
      SkillDatabaseKeys.PyTest,
      SkillDatabaseKeys.Jest,
      SkillDatabaseKeys.Vitest,
      SkillDatabaseKeys.Cypress,
      SkillDatabaseKeys.DevOps,
      SkillDatabaseKeys.Containerisation,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.OpenAI,
      SkillDatabaseKeys.ArtificialIntelligence,
      SkillDatabaseKeys.MachineLearning,
      SkillDatabaseKeys.ScikitLearn,
      SkillDatabaseKeys.Pandas,
      SkillDatabaseKeys.NumPy,
      SkillDatabaseKeys.Keras,
      SkillDatabaseKeys.GCP,
      SkillDatabaseKeys.GCP_CloudSQL,
      SkillDatabaseKeys.GCP_CloudStorage,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.ContinuousIntegration,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.Leadership,
      SkillDatabaseKeys.ProjectManagement,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.QualityManagement,
      SkillDatabaseKeys.Algorithms,
    ],
    company: CompanyDatabaseKeys.GoogleRHULDevelopersClub,
    relatedMaterials: [ProjectDatabaseKeys.Noodle],
    startDate: new ShortDate(2022, 9),
    endDate: new ShortDate(2023, 6),
  },
  [RoleDatabaseKeys.AJTuitionCentreTutor]: {
    name: "Mathematics Tutor",
    category: ExperienceCategoriesEnum.Other,
    type: ExperienceTypeEnum.PartTime,
    company: CompanyDatabaseKeys.AJTuitionCentre,
    startDate: new ShortDate(2018, 9),
    endDate: new ShortDate(2020, 3),
    skills: [
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.Creativity,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
    ],
    archived: true,
  },
  [RoleDatabaseKeys.MadhusTeamLeader]: {
    name: "Team Leader",
    category: ExperienceCategoriesEnum.Other,
    type: ExperienceTypeEnum.PartTime,
    company: CompanyDatabaseKeys.Madhus,
    startDate: new ShortDate(2018, 6),
    endDate: new ShortDate(2019, 12),
    skills: [
      SkillDatabaseKeys.Leadership,
      SkillDatabaseKeys.Teamwork,
      SkillDatabaseKeys.Communication,
      SkillDatabaseKeys.ProblemSolving,
      SkillDatabaseKeys.CriticalThinking,
      SkillDatabaseKeys.Adaptability,
      SkillDatabaseKeys.TimeManagement,
      SkillDatabaseKeys.RiskManagement,
      SkillDatabaseKeys.StakeholderManagement,
      SkillDatabaseKeys.ScopeManagement,
      SkillDatabaseKeys.QualityManagement,
    ],
    archived: true,
  },
};

export const roleDatabaseKeys: RoleDatabaseKeys[] = Object.keys(
  rolesMap
) as RoleDatabaseKeys[];

const rolesDatabase: Database<RoleInterface> =
  updateRolesWithExperienceTime(rolesMap);

export default rolesDatabase;
