import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  cloudComputing,
  clusterisation,
  containerization,
} from "../generalSkills";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsCloudComputing: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.AWS]: {
    name: "Amazon Web Services",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      cloudComputing,
      awsK3s,
      awsEC2,
      awsS3,
      awsVPC,
      awsLambda,
      awsCloudFormation,
      awsCloudFront,
      awsElasticBeanstalk,
    ],
  },
  [SkillSlugEnum.AWS_K3s]: {
    name: "K3s",
    category: SkillCategoriesEnum.DevOps,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [containerization, clusterisation, cloudComputing],
  },
  [SkillSlugEnum.AWS_EC2]: {
    name: "Elastic Compute Cloud (EC2)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.AWS_S3]: {
    name: "Simple Storage Service (S3)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.AWS_VPC]: {
    name: "Virtual Private Cloud (VPC)",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.AWS_Lambda]: {
    name: "Lambda",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.AWS_CloudFormation]: {
    name: "CloudFormation",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.AWS_CloudFront]: {
    name: "CloudFront",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.AWS_ElasticBeanstalk]: {
    name: "Elastic Beanstalk",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },

  [SkillSlugEnum.Azure]: {
    name: "Microsoft Azure",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      cloudComputing,
      azureAppService,
      azureBlobStorage,
      azureDurableFunctions,
      azureMonitor,
      azureFunctions,
      azureResourceManager,
      azureContainers,
      azureContainerRegistry,
    ],
  },
  [SkillSlugEnum.Azure_AppService]: {
    name: "Azure App Service",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.Azure_BlobStorage]: {
    name: "Azure Blob Storage",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.Azure_DurableFunctions]: {
    name: "Durable Functions",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.Azure_Monitor]: {
    name: "Azure Monitor",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.Azure_Functions]: {
    name: "Azure Functions",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.Azure_ResourceManager]: {
    name: "Azure Resource Manager",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.Azure_ContainerRegistry]: {
    name: "Azure Container Registry",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },

  [SkillSlugEnum.GCP]: {
    name: "Google Cloud Platform",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      cloudComputing,
      gcpAppEngine,
      gcpCloudSQL,
      gcpCloudStorage,
      gcpCloudTasks,
      gcpCloudScheduler,
      gcpCloudLogging,
    ],
  },
  [SkillSlugEnum.GCP_AppEngine]: {
    name: "App Engine",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.GCP_CloudSQL]: {
    name: "Cloud SQL",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.GCP_CloudStorage]: {
    name: "Cloud Storage",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.GCP_CloudTasks]: {
    name: "Cloud Tasks",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.GCP_CloudScheduler]: {
    name: "Cloud Scheduler",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
  [SkillSlugEnum.GCP_Logging]: {
    name: "Cloud Logging",
    category: SkillCategoriesEnum.CloudComputing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [cloudComputing],
  },
};

export default technicalHardSkillsCloudComputing;
