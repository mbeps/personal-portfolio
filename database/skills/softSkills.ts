import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const softSkills: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Communication]: {
    name: "Communication",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.ProjectManagement]: {
    name: "Project Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.Teamwork]: {
    name: "Teamwork",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.Leadership]: {
    name: "Leadership",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.ProblemSolving]: {
    name: "Problem Solving",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.CriticalThinking]: {
    name: "Critical Thinking",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.Creativity]: {
    name: "Creativity",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.Adaptability]: {
    name: "Adaptability",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.TimeManagement]: {
    name: "Time Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.RiskManagement]: {
    name: "Risk Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.StakeholderManagement]: {
    name: "Stakeholder Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.ScopeManagement]: {
    name: "Scope Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.CostManagement]: {
    name: "Cost Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.QualityManagement]: {
    name: "Quality Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.ProcurementManagement]: {
    name: "Procurement Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.IntegrationManagement]: {
    name: "Integration Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
  [SkillSlugEnum.HumanResourceManagement]: {
    name: "Human Resource Management",
    isMainSkill: false,
    skillType: SkillTypesEnum.Soft,
    category: SkillCategoriesEnum.SoftSkills,
  },
};

export default softSkills;
