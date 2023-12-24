import Skill from "@/types/skills";
import { versionControl } from "../generalSkills";
import { gitHubActions, gitlabCI } from "./technicalHardSkillsDevOps";

export const gitHub: Skill = {
  name: "GitHub",
  category: "Version Control",
  skillType: "hard",
  slug: "github",
  technicalGeneralSkills: [versionControl],
  technicalHardSkills: [gitHubActions],
};

export const gitLab: Skill = {
  name: "GitLab",
  category: "Version Control",
  skillType: "hard",
  slug: "gitlab",
  technicalGeneralSkills: [versionControl],
  technicalHardSkills: [gitlabCI],
};

export const bitBucket: Skill = {
  name: "BitBucket",
  category: "Version Control",
  skillType: "hard",
  slug: "bit-bucket",
  technicalGeneralSkills: [versionControl],
};

export const git: Skill = {
  name: "Git",
  category: "Version Control",
  skillType: "hard",
  slug: "git",
  technicalGeneralSkills: [versionControl],
  technicalHardSkills: [gitHub, gitLab, bitBucket],
};

const technicalHardSkillsVCS: Skill[] = [git, gitHub, gitLab, bitBucket];

export default technicalHardSkillsVCS;
