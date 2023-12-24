import Skill from "@/types/skills";
import softSkills from "./softSkills";
import generalSkills from "./generalSkills";
import technicalHardSkillsFullStackWebDev from "./technicalHardSkills/technicalHardSkillsFullStackWebDev";
import technicalHardSkillsAPIs from "./technicalHardSkills/technicalHardSkillsAPIs";
import technicalHardSkillsBackendWebDev from "./technicalHardSkills/technicalHardSkillsBackendWebDev";
import technicalHardSkillsCloudComputing from "./technicalHardSkills/technicalHardSkillsCloudComputing";
import technicalHardSkillsDatabases from "./technicalHardSkills/technicalHardSkillsDatabases";
import technicalHardSkillsDevOps from "./technicalHardSkills/technicalHardSkillsDevOps";
import technicalHardSkillsFrontendWebDev from "./technicalHardSkills/technicalHardSkillsFrontendWebDev";
import technicalHardSkillsMaths from "./technicalHardSkills/technicalHardSkillsMaths";
import technicalHardSkillsMLDS from "./technicalHardSkills/technicalHardSkillsMLDS";
import technicalHardSkillsOthers from "./technicalHardSkills/technicalHardSkillsOthers";
import technicalHardSkillsProjectManagers from "./technicalHardSkills/technicalHardSkillsProjectManagers";
import technicalHardSkillsTesting from "./technicalHardSkills/technicalHardSkillsTesting";
import technicalHardSkillsVCS from "./technicalHardSkills/technicalHardSkillsVCS";
import technicalHardSkillsORMs from "./technicalHardSkills/technicalHardSkillsORMs";
import technicalHardSkillsCodeQuality from "./technicalHardSkills/technicalHardSkillsCodeQuality";

const allHardSkills: Skill[] = [
  ...technicalHardSkillsFullStackWebDev,
  ...technicalHardSkillsAPIs,
  ...technicalHardSkillsBackendWebDev,
  ...technicalHardSkillsCloudComputing,
  ...technicalHardSkillsDatabases,
  ...technicalHardSkillsDevOps,
  ...technicalHardSkillsFrontendWebDev,
  ...technicalHardSkillsMaths,
  ...technicalHardSkillsMLDS,
  ...technicalHardSkillsOthers,
  ...technicalHardSkillsProjectManagers,
  ...technicalHardSkillsTesting,
  ...technicalHardSkillsVCS,
  ...technicalHardSkillsORMs,
  ...technicalHardSkillsCodeQuality,
];

const allSkills: Skill[] = [...allHardSkills, ...generalSkills, ...softSkills];

export const technologies: Skill[] = allHardSkills.filter(
  (skill) => skill.isMainSkill
);

export default allSkills;
