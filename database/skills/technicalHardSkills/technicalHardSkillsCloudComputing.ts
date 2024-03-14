import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsCloudComputing: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.AWS]: {
    name: "Amazon Web Services",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.CloudComputing,
      SkillSlugEnum.AWS_K3s,
      SkillSlugEnum.AWS_EC2,
      SkillSlugEnum.AWS_S3,
      SkillSlugEnum.AWS_VPC,
      SkillSlugEnum.AWS_Lambda,
      SkillSlugEnum.AWS_CloudFormation,
      SkillSlugEnum.AWS_CloudFront,
      SkillSlugEnum.AWS_ElasticBeanstalk,
    ],
  },
  [SkillSlugEnum.AWS_K3s]: {
    name: "K3s",
    category: SkillCategoriesEnum.DevOps,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Containerisation,
      SkillSlugEnum.Clusterisation,
      SkillSlugEnum.CloudComputing,
    ],
  },
  [SkillSlugEnum.AWS_EC2]: {
    name: "Elastic Compute Cloud (EC2)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.AWS_S3]: {
    name: "Simple Storage Service (S3)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.AWS_VPC]: {
    name: "Virtual Private Cloud (VPC)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.AWS_Lambda]: {
    name: "Lambda",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.AWS_CloudFormation]: {
    name: "CloudFormation",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.AWS_CloudFront]: {
    name: "CloudFront",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.AWS_ElasticBeanstalk]: {
    name: "Elastic Beanstalk",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },

  [SkillSlugEnum.Azure]: {
    name: "Microsoft Azure",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.CloudComputing,
      SkillSlugEnum.Azure_AppService,
      SkillSlugEnum.Azure_BlobStorage,
      SkillSlugEnum.Azure_DurableFunctions,
      SkillSlugEnum.Azure_Monitor,
      SkillSlugEnum.Azure_Functions,
      SkillSlugEnum.Azure_ResourceManager,
      SkillSlugEnum.Azure_ContainerRegistry,
    ],
  },
  [SkillSlugEnum.Azure_AppService]: {
    name: "Azure App Service",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.Azure_BlobStorage]: {
    name: "Azure Blob Storage",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.Azure_DurableFunctions]: {
    name: "Durable Functions",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.Azure_Monitor]: {
    name: "Azure Monitor",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.Azure_Functions]: {
    name: "Azure Functions",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.Azure_ResourceManager]: {
    name: "Azure Resource Manager",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.Azure_ContainerRegistry]: {
    name: "Azure Container Registry",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.CloudComputing,
      SkillSlugEnum.Containerisation,
      SkillSlugEnum.Clusterisation,
      SkillSlugEnum.Docker,
      SkillSlugEnum.Podman,
      SkillSlugEnum.Kubernetes,
    ],
  },

  [SkillSlugEnum.GCP]: {
    name: "Google Cloud Platform",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.CloudComputing,
      SkillSlugEnum.GCP_AppEngine,
      SkillSlugEnum.GCP_CloudSQL,
      SkillSlugEnum.GCP_CloudStorage,
      SkillSlugEnum.GCP_CloudTasks,
      SkillSlugEnum.GCP_CloudScheduler,
      SkillSlugEnum.GCP_Logging,
      SkillSlugEnum.Firebase,
    ],
  },
  [SkillSlugEnum.GCP_AppEngine]: {
    name: "App Engine",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.GCP_CloudSQL]: {
    name: "Cloud SQL",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.CloudComputing,
      SkillSlugEnum.RelationalDatabases,
      SkillSlugEnum.DatabaseManagementSystems,
      SkillSlugEnum.DatabaseIndexing,
    ],
  },
  [SkillSlugEnum.GCP_CloudStorage]: {
    name: "Cloud Storage",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.GCP_CloudTasks]: {
    name: "Cloud Tasks",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.GCP_CloudScheduler]: {
    name: "Cloud Scheduler",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
  [SkillSlugEnum.GCP_Logging]: {
    name: "Cloud Logging",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.CloudComputing],
  },
};

export default technicalHardSkillsCloudComputing;
