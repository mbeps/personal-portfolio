import Skill from "@/types/skills";
import { versionControl, infrastructureAsCode, devOps } from "../generalSkills";

export const git: Skill = {
  name: "Git",
  category: "Version Control",
  skillType: "hard",
  slug: "git",
  technicalGeneralSkills: [versionControl],
};

export const gitHub: Skill = {
  name: "GitHub",
  category: "Version Control",
  skillType: "hard",
  slug: "github",
  technicalGeneralSkills: [versionControl],
};

export const gitLab: Skill = {
  name: "GitLab",
  category: "Version Control",
  skillType: "hard",
  slug: "gitlab",
  technicalGeneralSkills: [versionControl],
};

export const bitBucket: Skill = {
  name: "BitBucket",
  category: "Version Control",
  skillType: "hard",
  slug: "bit-bucket",
  technicalGeneralSkills: [versionControl],
};

const technicalHardSkillsVCS: Skill[] = [git, gitHub, gitLab, bitBucket];

export default technicalHardSkillsVCS;
