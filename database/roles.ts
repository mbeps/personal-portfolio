import CertificateKeysEnum from "@/enums/DatabaseKeysEnums/CertificateKeysEnum";
import CompanyEnum from "@/enums/DatabaseKeysEnums/ExperienceCompanyEnum";
import RoleKeyEnum from "@/enums/DatabaseKeysEnums/RoleKeyEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import ExperienceCategories from "@/enums/ExperienceCategories";
import ExperienceTypeEnum from "@/enums/ExperienceType";
import RoleInterface from "@/interfaces/material/RoleInterface";

const rolesMap: Database<RoleInterface> = {
  [RoleKeyEnum.CommerzbankDevOpsEngineer]: {
    name: "DevOps Engineer",
    category: ExperienceCategories.Professional,
    type: ExperienceTypeEnum.FullTime,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.Java,
      SkillKeysEnum.ShellScript,
      SkillKeysEnum.Groovy,
      SkillKeysEnum.ObjectOrientedProgramming,
      SkillKeysEnum.REST,
      SkillKeysEnum.APIs,
      SkillKeysEnum.SDKs,
      SkillKeysEnum.SpringBoot,
      SkillKeysEnum.Normalisation,
      SkillKeysEnum.PostgreSQL,
      SkillKeysEnum.MongoDB,
      SkillKeysEnum.RelationalDatabases,
      SkillKeysEnum.NonRelationalDatabases,
      SkillKeysEnum.Hibernate,
      SkillKeysEnum.TeamCity,
      SkillKeysEnum.Docker,
      SkillKeysEnum.ContinuousDelivery,
      SkillKeysEnum.IntegrationManagement,
      SkillKeysEnum.ContinuousDeployment,
      SkillKeysEnum.DevOps,
      SkillKeysEnum.Automation,
      SkillKeysEnum.Git,
      SkillKeysEnum.BitBucket,
      SkillKeysEnum.JUnit,
      SkillKeysEnum.Gradle,
      SkillKeysEnum.AWS,
      SkillKeysEnum.GCP,
      SkillKeysEnum.Azure,
      SkillKeysEnum.Symphony,
      SkillKeysEnum.Communication,
      SkillKeysEnum.Teamwork,
      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.TimeManagement,
      SkillKeysEnum.RiskManagement,
      SkillKeysEnum.StakeholderManagement,
      SkillKeysEnum.ScopeManagement,
      SkillKeysEnum.QualityManagement,
    ],
    startDate: "November 2023",
    endDate: "Present",
    relatedMaterials: [
      CertificateKeysEnum.SymphonyCertifiedBotDeveloperJava,
      CertificateKeysEnum.SymphonyCertifiedBotDeveloperJava,
    ],
    company: CompanyEnum.Commerzbank,
    responsibilities: [
      "DevOps Engineer Role: Leveraging a broad range of skills in my current position, with a focus on Cloud Computing, Version Control, Continuous Integration and Continuous Delivery (CI/CD), Containerization, and DevOps methodologies.",
      "Innovative Database Management: Working with relational databases to enhance data management and accessibility, contributing to streamlined and efficient database operations.",
      "CI/CD Pipeline Development: Utilizing JetBrains TeamCity to develop and optimize CI/CD pipelines, facilitating smoother and more efficient development processes.",
      "Java and Gradle Proficiency: Employing Java and Gradle for building robust and scalable software solutions, demonstrating strong programming skills and system understanding.",
      "Front-End Development for Java APIs: Building user interfaces for Java APIs using NextJS, React, and TypeScript, enhancing user experience and interface functionality.",
      "Symphony Bot Development: Creating Symphony bots to improve communications efficiency between teams and departments, showcasing innovation in internal communication tools.",
      "Effective Team Collaboration: Demonstrating strong teamwork skills by working collaboratively with various departments to implement technology solutions.",
      "Adaptability and Problem-Solving: Quickly adapting to new technologies and environments, and employing creative problem-solving skills to overcome development challenges.",
      "Strong Planning and Time Management: Effectively managing time and planning tasks to meet project deadlines and objectives in a dynamic work environment.",
      "Clear Communication and Critical Thinking: Utilizing clear communication and critical thinking skills to convey complex technical ideas and collaborate effectively with team members.",
    ],
  },
};

export const roleKeys = Object.keys(rolesMap) as RoleKeyEnum[];

const rolesDatabase: Database<RoleInterface> = rolesMap;

export default rolesDatabase;
