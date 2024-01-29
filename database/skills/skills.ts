import SkillInterface from "@/interfaces/skills/SkillInterface";
import generalSkills from "./generalSkills";
import { languages } from "./languages";
import softSkills from "./softSkills";
import technicalHardSkillsAPIs from "./technicalHardSkills/technicalHardSkillsAPIs";
import technicalHardSkillsBackendWebDev from "./technicalHardSkills/technicalHardSkillsBackendWebDev";
import technicalHardSkillsCloudComputing from "./technicalHardSkills/technicalHardSkillsCloudComputing";
import technicalHardSkillsCodeQuality from "./technicalHardSkills/technicalHardSkillsCodeQuality";
import technicalHardSkillsDatabases from "./technicalHardSkills/technicalHardSkillsDatabases";
import technicalHardSkillsDevOps from "./technicalHardSkills/technicalHardSkillsDevOps";
import technicalHardSkillsFrontendWebDev from "./technicalHardSkills/technicalHardSkillsFrontendWebDev";
import technicalHardSkillsFullStackWebDev from "./technicalHardSkills/technicalHardSkillsFullStackWebDev";
import technicalHardSkillsMLDS from "./technicalHardSkills/technicalHardSkillsMLDS";
import technicalHardSkillsMaths from "./technicalHardSkills/technicalHardSkillsMaths";
import technicalHardSkillsORMs from "./technicalHardSkills/technicalHardSkillsORMs";
import technicalHardSkillsOthers from "./technicalHardSkills/technicalHardSkillsOthers";
import technicalHardSkillsProjectManagers from "./technicalHardSkills/technicalHardSkillsProjectManagers";
import technicalHardSkillsTesting from "./technicalHardSkills/technicalHardSkillsTesting";
import technicalHardSkillsVCS from "./technicalHardSkills/technicalHardSkillsVCS";

const allHardSkills: SkillInterface[] = [
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

const allSkills: SkillInterface[] = [
  ...allHardSkills,
  ...generalSkills,
  ...softSkills,
  ...languages,
];

export const technologies: SkillInterface[] = allHardSkills.filter(
  (skill) => skill.isMainSkill,
);

export default allSkills;
