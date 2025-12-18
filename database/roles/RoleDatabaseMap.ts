import updateRolesWithExperienceTime from "@/lib/material/role/updateRolesWithExperienceTime";
import ShortDate from "@/class/ShortDate";
import CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import RoleInterface from "@/database/roles/RoleInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import ExperienceCategoriesEnum from "@/enums/experience/ExperienceCategoriesEnum";
import ExperienceTypeEnum from "@/enums/experience/ExperienceTypeEnum";
import Database from "@/interfaces/Database";
import CompanyDatabaseKeys from "../companies/CompanyDatabaseKeys";

const rolesMap: Database<RoleInterface> = {
  [RoleDatabaseKeys.CommerzbankDevOpsEngineer]: {
    name: "Software Engineer",
    category: ExperienceCategoriesEnum.Software,
    type: ExperienceTypeEnum.FullTime,
    skills: [
      SkillDatabaseKeys.Python,
      SkillDatabaseKeys.Java,
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.TypeScript,
      SkillDatabaseKeys.Kotlin,
      SkillDatabaseKeys.ShellScript,
      SkillDatabaseKeys.Groovy,

      SkillDatabaseKeys.SpringBoot,
      SkillDatabaseKeys.Spring,
      SkillDatabaseKeys.SpringDataJPA,
      SkillDatabaseKeys.SpringDataMongoDB,
      SkillDatabaseKeys.SpringDataLDAP,
      SkillDatabaseKeys.SpringSecurity,
      SkillDatabaseKeys.NextJS,
      SkillDatabaseKeys.ReactJS,
      SkillDatabaseKeys.Normalisation,
      SkillDatabaseKeys.PostgreSQL,
      SkillDatabaseKeys.MongoDB,
      SkillDatabaseKeys.RelationalDatabases,
      SkillDatabaseKeys.NonRelationalDatabases,
      SkillDatabaseKeys.Hibernate,
      SkillDatabaseKeys.SpringDataJPA,
      SkillDatabaseKeys.Symphony,
      SkillDatabaseKeys.SpringDataMongoDB,
      SkillDatabaseKeys.HTML,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.TeamCity,
      SkillDatabaseKeys.Docker,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.DevOps,
      SkillDatabaseKeys.PyTest,
      SkillDatabaseKeys.REST,
      SkillDatabaseKeys.ContinuousDelivery,
      SkillDatabaseKeys.ContinuousIntegration,
      SkillDatabaseKeys.ContinuousDeployment,
      SkillDatabaseKeys.Containerisation,
      SkillDatabaseKeys.JUnit,
      SkillDatabaseKeys.AWS,
      SkillDatabaseKeys.GCP,
      SkillDatabaseKeys.Azure,


      SkillDatabaseKeys.ArtificialIntelligence],
    startDate: new ShortDate(2023, 11),
    endDate: new ShortDate(new Date().getFullYear(), new Date().getMonth() + 1),
    relatedMaterials: [
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperJava,
      CertificateDatabaseKeys.SymphonyCertifiedBotDeveloperPython,

      ProjectDatabaseKeys.CommerzbankRates,

      ProjectDatabaseKeys.SymphonyTranslateBot,
      ProjectDatabaseKeys.SymphonyWebhookBot,
      ProjectDatabaseKeys.SymphonyCobaGPTBot,
      ProjectDatabaseKeys.SymphonyBusinessHighlightsBot,
      ProjectDatabaseKeys.SymphonyApplicationStatusBot,
      ProjectDatabaseKeys.SymphonyPollBot,
      ProjectDatabaseKeys.SymphonyRssBot,
      ProjectDatabaseKeys.SymphonyBlogBot,
      ProjectDatabaseKeys.SymphonyInteractiveBot,
      ProjectDatabaseKeys.SymphonyHeadlessBot,

      ProjectDatabaseKeys.BaseRestController,
      ProjectDatabaseKeys.MarkdownToMessageMLConverter,
      ProjectDatabaseKeys.SpringBootLdapRoleBasedAccessControlLibrary,

      ProjectDatabaseKeys.SpringDataJPATemplate,
      ProjectDatabaseKeys.SpringDataMongoTemplate,
      ProjectDatabaseKeys.SpringBootLdapTemplate],
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
      SkillDatabaseKeys.JavaScript,
      SkillDatabaseKeys.CSS,
      SkillDatabaseKeys.UserCentricDesign,

      SkillDatabaseKeys.UserAuthentication],
    relatedMaterials: [
      ProjectDatabaseKeys.GnomeAllInOneClipboardExtension,
      ProjectDatabaseKeys.GnomeQuickSettingsTweakExtension],
  },
  [RoleDatabaseKeys.GoogleRHULDevelopersClubSoftwareEngineer]: {
    name: "Software Engineer Intern",
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
      SkillDatabaseKeys.AuthJs,
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
      SkillDatabaseKeys.GitHubActions,
      SkillDatabaseKeys.PyTest,
      SkillDatabaseKeys.Jest,
      SkillDatabaseKeys.Vitest,
      SkillDatabaseKeys.Cypress,
      SkillDatabaseKeys.DevOps,
      SkillDatabaseKeys.Containerisation,
      SkillDatabaseKeys.Docker,

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
      SkillDatabaseKeys.ContinuousIntegration],
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
    skills: [],
    archived: true,
  },
  [RoleDatabaseKeys.MadhusTeamLeader]: {
    name: "Team Leader",
    category: ExperienceCategoriesEnum.Other,
    type: ExperienceTypeEnum.PartTime,
    company: CompanyDatabaseKeys.Madhus,
    startDate: new ShortDate(2018, 6),
    endDate: new ShortDate(2019, 12),
    skills: [],
    archived: true,
  },
};

export const roleDatabaseKeys: RoleDatabaseKeys[] = Object.keys(
  rolesMap
) as RoleDatabaseKeys[];

const rolesDatabase: Database<RoleInterface> =
  updateRolesWithExperienceTime(rolesMap);

export default rolesDatabase;
