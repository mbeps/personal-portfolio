import SkillInterface, {
  SkillCategories,
  SkillTypes,
} from "@/interfaces/skills/SkillInterface";
import {
  cloudComputing,
  clusterisation,
  containerization,
} from "../generalSkills";

export const awsK3s: SkillInterface = {
  name: "K3s",
  category: SkillCategories.DevOps,
  skillType: SkillTypes.Hard,
  slug: "aws-ks3",
  relatedSkills: [containerization, clusterisation, cloudComputing],
};

export const awsEC2: SkillInterface = {
  name: "Elastic Compute Cloud (EC2)",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "aws-ec2",
  relatedSkills: [cloudComputing],
};

export const awsS3: SkillInterface = {
  name: "Simple Storage Service (S3)",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "aws-s3",
  relatedSkills: [cloudComputing],
};

export const awsVPC: SkillInterface = {
  name: "Virtual Private Cloud (VPC)",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "aws-vpc",
  relatedSkills: [cloudComputing],
};

export const awsLambda: SkillInterface = {
  name: "Lambda",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "aws-lambda",
  relatedSkills: [cloudComputing],
};

export const awsCloudFormation: SkillInterface = {
  name: "CloudFormation",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "aws-cloudformation",
  relatedSkills: [cloudComputing],
};

export const awsCloudFront: SkillInterface = {
  name: "CloudFront",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "aws-cloudfront",
  relatedSkills: [cloudComputing],
};

export const awsElasticBeanstalk: SkillInterface = {
  name: "Elastic Beanstalk",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "aws-elastic-beanstalk",
  relatedSkills: [cloudComputing],
};

export const azureAppService: SkillInterface = {
  name: "Azure App Service",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "azure-app-service",
  relatedSkills: [cloudComputing],
};

export const azureBlobStorage: SkillInterface = {
  name: "Azure Blob Storage",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "azure-blob-storage",
  relatedSkills: [cloudComputing],
};

export const azureDurableFunctions: SkillInterface = {
  name: "Durable Functions",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "azure-durable-functions",
  relatedSkills: [cloudComputing],
};

export const azureMonitor: SkillInterface = {
  name: "Azure Monitor",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "azure-monitor",
  relatedSkills: [cloudComputing],
};

export const azureFunctions: SkillInterface = {
  name: "Azure Functions",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "azure-functions",
  relatedSkills: [cloudComputing],
};

export const azureResourceManager: SkillInterface = {
  name: "Azure Resource Manager",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "azure-resource-manager",
  relatedSkills: [cloudComputing],
};

export const azureContainers: SkillInterface = {
  name: "Containers",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "azure-containers",
  relatedSkills: [cloudComputing],
};

export const azureContainerRegistry: SkillInterface = {
  name: "Azure Container Registry",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "azure-container-registry",
  relatedSkills: [cloudComputing],
};

export const gcpAppEngine: SkillInterface = {
  name: "App Engine",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "gcp-app-engine",
  relatedSkills: [cloudComputing],
};

export const gcpCloudSQL: SkillInterface = {
  name: "Cloud SQL",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "gcp-cloud-sql",
  relatedSkills: [cloudComputing],
};

export const gcpCloudStorage: SkillInterface = {
  name: "Cloud Storage",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "gcp-cloud-storage",
  relatedSkills: [cloudComputing],
};

export const gcpCloudTasks: SkillInterface = {
  name: "Cloud Tasks",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "gcp-cloud-tasks",
  relatedSkills: [cloudComputing],
};

export const gcpCloudScheduler: SkillInterface = {
  name: "Cloud Scheduler",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "gcp-cloud-scheduler",
  relatedSkills: [cloudComputing],
};

export const gcpCloudLogging: SkillInterface = {
  name: "Cloud Logging",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "gcp-cloud-logging",
  relatedSkills: [cloudComputing],
};

export const aws: SkillInterface = {
  name: "Amazon Web Services",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "aws",
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
};

export const gcp: SkillInterface = {
  name: "Google Cloud Platform",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "gcp",
  relatedSkills: [
    cloudComputing,
    gcpAppEngine,
    gcpCloudSQL,
    gcpCloudStorage,
    gcpCloudTasks,
    gcpCloudScheduler,
    gcpCloudLogging,
  ],
};

export const azure: SkillInterface = {
  name: "Microsoft Azure",
  category: SkillCategories.CloudComputing,
  skillType: SkillTypes.Hard,
  slug: "azure",
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
};

const technicalHardSkillsCloudComputing: SkillInterface[] = [
  aws,
  gcp,
  azure,
  awsK3s,
  awsEC2,
  awsS3,
  awsVPC,
  awsLambda,
  awsCloudFormation,
  awsCloudFront,
  awsElasticBeanstalk,
  gcpAppEngine,
  gcpCloudSQL,
  gcpCloudStorage,
  gcpCloudTasks,
  gcpCloudScheduler,
  gcpCloudLogging,
  azureAppService,
  azureBlobStorage,
  azureDurableFunctions,
  azureMonitor,
  azureFunctions,
  azureResourceManager,
  azureContainers,
  azureContainerRegistry,
];

export default technicalHardSkillsCloudComputing;
