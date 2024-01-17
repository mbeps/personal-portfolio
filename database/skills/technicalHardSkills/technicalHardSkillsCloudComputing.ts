import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  containerization,
  clusterisation,
  cloudComputing,
} from "../generalSkills";

export const awsK3s: SkillInterface = {
  name: "K3s",
  category: "DevOps",
  skillType: "hard",
  slug: "aws-ks3",
  technicalGeneralSkills: [containerization, clusterisation, cloudComputing],
};

export const awsEC2: SkillInterface = {
  name: "Elastic Compute Cloud (EC2)",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-ec2",
  technicalGeneralSkills: [cloudComputing],
};

export const awsS3: SkillInterface = {
  name: "Simple Storage Service (S3)",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-s3",
  technicalGeneralSkills: [cloudComputing],
};

export const awsVPC: SkillInterface = {
  name: "Virtual Private Cloud (VPC)",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-vpc",
  technicalGeneralSkills: [cloudComputing],
};

export const awsLambda: SkillInterface = {
  name: "Lambda",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-lambda",
  technicalGeneralSkills: [cloudComputing],
};

export const awsCloudFormation: SkillInterface = {
  name: "CloudFormation",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-cloudformation",
  technicalGeneralSkills: [cloudComputing],
};

export const awsCloudFront: SkillInterface = {
  name: "CloudFront",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-cloudfront",
  technicalGeneralSkills: [cloudComputing],
};

export const awsElasticBeanstalk: SkillInterface = {
  name: "Elastic Beanstalk",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws-elastic-beanstalk",
  technicalGeneralSkills: [cloudComputing],
};

export const azureAppService: SkillInterface = {
  name: "Azure App Service",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-app-service",
  technicalGeneralSkills: [cloudComputing],
};

export const azureBlobStorage: SkillInterface = {
  name: "Azure Blob Storage",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-blob-storage",
  technicalGeneralSkills: [cloudComputing],
};

export const azureDurableFunctions: SkillInterface = {
  name: "Durable Functions",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-durable-functions",
  technicalGeneralSkills: [cloudComputing],
};

export const azureMonitor: SkillInterface = {
  name: "Azure Monitor",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-monitor",
  technicalGeneralSkills: [cloudComputing],
};

export const azureFunctions: SkillInterface = {
  name: "Azure Functions",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-functions",
  technicalGeneralSkills: [cloudComputing],
};

export const azureResourceManager: SkillInterface = {
  name: "Azure Resource Manager",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-resource-manager",
  technicalGeneralSkills: [cloudComputing],
};

export const azureContainers: SkillInterface = {
  name: "Containers",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-containers",
  technicalGeneralSkills: [cloudComputing],
};

export const azureContainerRegistry: SkillInterface = {
  name: "Azure Container Registry",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure-container-registry",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpAppEngine: SkillInterface = {
  name: "App Engine",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-app-engine",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpCloudSQL: SkillInterface = {
  name: "Cloud SQL",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-cloud-sql",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpCloudStorage: SkillInterface = {
  name: "Cloud Storage",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-cloud-storage",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpCloudTasks: SkillInterface = {
  name: "Cloud Tasks",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-cloud-tasks",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpCloudScheduler: SkillInterface = {
  name: "Cloud Scheduler",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-cloud-scheduler",
  technicalGeneralSkills: [cloudComputing],
};

export const gcpCloudLogging: SkillInterface = {
  name: "Cloud Logging",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp-cloud-logging",
  technicalGeneralSkills: [cloudComputing],
};

export const aws: SkillInterface = {
  name: "Amazon Web Services",
  category: "Cloud Computing",
  skillType: "hard",
  slug: "aws",
  technicalGeneralSkills: [cloudComputing],
  technicalHardSkills: [
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
  category: "Cloud Computing",
  skillType: "hard",
  slug: "gcp",
  technicalGeneralSkills: [cloudComputing],
  technicalHardSkills: [
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
  category: "Cloud Computing",
  skillType: "hard",
  slug: "azure",
  technicalGeneralSkills: [cloudComputing],
  technicalHardSkills: [
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
