import CertificateKeysEnum from "@/enums/DatabaseKeysEnums/CertificateKeysEnum";
import CompanyKeyEnum from "@/enums/DatabaseKeysEnums/ExperienceCompanyEnum";
import ProjectKeysEnum from "@/enums/DatabaseKeysEnums/ProjectKeysEnum";
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
    company: CompanyKeyEnum.Commerzbank,
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
  [RoleKeyEnum.GoogleRHULDevelopersClubSoftwareEngineer]: {
    name: "Software Engineer",
    category: ExperienceCategories.Volunteer,
    type: ExperienceTypeEnum.Freelance,
    skills: [
      SkillKeysEnum.Python,
      SkillKeysEnum.TypeScript,
      SkillKeysEnum.JavaScript,
      SkillKeysEnum.REST,
      SkillKeysEnum.GraphQL,
      SkillKeysEnum.Apollo,
      SkillKeysEnum.APIs,
      SkillKeysEnum.SDKs,
      SkillKeysEnum.Firebase,
      SkillKeysEnum.NextAuth,
      SkillKeysEnum.NextJS,
      SkillKeysEnum.ReactJS,
      SkillKeysEnum.HTML,
      SkillKeysEnum.CSS,
      SkillKeysEnum.TailwindCSS,
      SkillKeysEnum.ChakraUI,
      SkillKeysEnum.Databases,
      SkillKeysEnum.NonRelationalDatabases,
      SkillKeysEnum.Prisma,
      SkillKeysEnum.GitHub,
      SkillKeysEnum.GitHubActions,
      SkillKeysEnum.Git,
      SkillKeysEnum.Prettier,
      SkillKeysEnum.DevOps,
      SkillKeysEnum.Containerisation,
      SkillKeysEnum.Docker,
      SkillKeysEnum.ContinuousDelivery,
      SkillKeysEnum.ContinuousDeployment,
      SkillKeysEnum.ContinuousIntegration,
      SkillKeysEnum.Communication,
      SkillKeysEnum.Leadership,
      SkillKeysEnum.ProjectManagement,
      SkillKeysEnum.ProblemSolving,
      SkillKeysEnum.CriticalThinking,
      SkillKeysEnum.Adaptability,
      SkillKeysEnum.TimeManagement,
      SkillKeysEnum.Teamwork,
      SkillKeysEnum.RiskManagement,
      SkillKeysEnum.StakeholderManagement,
      SkillKeysEnum.ScopeManagement,
      SkillKeysEnum.QualityManagement,
    ],
    company: CompanyKeyEnum.GoogleRHULDevelopersClub,
    relatedMaterials: [ProjectKeysEnum.Noodle],
    startDate: "September 2022",
    endDate: "June 2023",
    responsibilities: [
      "Exceptional Communication Skills: Demonstrated outstanding communication skills by effectively articulating technical concepts to non-technical team members, leading to a 40% increase in understanding and collaboration across teams of different fields. Actively involved in presenting project updates and strategies, which enhanced team alignment and project clarity.",
      "Adaptability in Fast-Paced Environments: Showcased exceptional adaptability by swiftly adjusting to evolving project requirements and technological updates, leading to a 30% reduction in project turnaround time and ensuring timely and efficient project delivery.",
      "Collaboration & Team Dynamics: Excelled in collaborating with over 20+ diverse team members, fostering a culture of shared knowledge and support, which increased team efficiency by 25% and streamlined project workflows.",
      "Problem-Solving Excellence: Employed innovative strategies to tackle complex development scenarios, resolving over 50 critical issues, which enhanced project functionality and reliability by 35%.",
      "Self-Motivation & Initiative: Demonstrated self-motivation by initiating and completing 5+ self-directed projects, integrating them into the club's main portfolio and showcasing a dedication to continuous growth.",
      "Full Stack Development: Led key components of the 'Noodle' project using advanced tools like Next.js and React, achieving seamless integrations and targeted project objectives.",
      "Leadership in Tier 3: Recognized as a top-tier (Tier 3) developer, contributing to 35% of the club's major projects and consistently surpassing quality benchmarks.",
      "Continuous Learning & Upgradation: Regularly participated in workshops and seminars, gaining knowledge in the latest development trends and enhancing technical skills.",
      "Technical Mastery: Deepened experience with Next.js, React, MySQL, and expanded into Python and cloud technologies, showcasing versatility in full-stack development.",
      "Technical Mastery: Deepened experience with Next.js, React, MySQL, and expanded into Python and cloud technologies, showcasing versatility in full-stack development.",
    ],
  },
};

export const roleKeys = Object.keys(rolesMap) as RoleKeyEnum[];

const rolesDatabase: Database<RoleInterface> = rolesMap;

export default rolesDatabase;