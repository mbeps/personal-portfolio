import getSkillBySlug from "@/actions/skills/getSkillBySlug";
import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import blogs from "@/database/blogs";
import allCertificates from "@/database/certificates";
import allProjects from "@/database/projects";
import { languages } from "@/database/skills/languages";
import Skill from "@/types/skills";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import BlogsSection from "./components/BlogsSection";
import CredentialsSection from "./components/CredentialsSection";
import ProjectsSection from "./components/ProjectsSection";
import technicalHardSkillsAPIs from "@/database/skills/technicalHardSkills/technicalHardSkillsAPIs";
import technicalHardSkillsBackendWebDev from "@/database/skills/technicalHardSkills/technicalHardSkillsBackendWebDev";
import technicalHardSkillsCloudComputing from "@/database/skills/technicalHardSkills/technicalHardSkillsCloudComputing";
import technicalHardSkillsDatabases from "@/database/skills/technicalHardSkills/technicalHardSkillsDatabases";
import technicalHardSkillsDevOps from "@/database/skills/technicalHardSkills/technicalHardSkillsDevOps";
import technicalHardSkillsFrontendWebDev from "@/database/skills/technicalHardSkills/technicalHardSkillsFrontendWebDev";
import technicalHardSkillsFullStackWebDev from "@/database/skills/technicalHardSkills/technicalHardSkillsFullStackWebDev";
import technicalHardSkillsMLDS from "@/database/skills/technicalHardSkills/technicalHardSkillsMLDS";
import technicalHardSkillsMaths from "@/database/skills/technicalHardSkills/technicalHardSkillsMaths";
import technicalHardSkillsOthers from "@/database/skills/technicalHardSkills/technicalHardSkillsOthers";
import technicalHardSkillsProjectManagers from "@/database/skills/technicalHardSkills/technicalHardSkillsProjectManagers";
import technicalHardSkillsTesting from "@/database/skills/technicalHardSkills/technicalHardSkillsTesting";
import technicalHardSkillsVCS from "@/database/skills/technicalHardSkills/technicalHardSkillsVCS";
import generalSkills from "@/database/skills/generalSkills";
import softSkills from "@/database/skills/softSkills";
import RelatedSkillsSection from "./components/RelatedSkillsSection";

const allSkills: Skill[] = [
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
  ...languages,
  ...generalSkills,
  ...softSkills,
];

function extractSlugs(skills: Skill[]): string[] {
  return skills.map((skill) => skill.slug);
}

export async function generateMetadata(
  { params, searchParams }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const skill = getSkillBySlug(slug, [...allSkills]);

  return {
    title: `Maruf Bepary - Skills: ${skill?.name}`,
    description: skill?.name,
  };
}

export const generateStaticParams = async () => {
  return extractSlugs(allSkills).map((slug) => ({ slug }));
};

interface ProjectPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const SkillPage: React.FC<ProjectPageProps> = ({ params }) => {
  const slug = params.slug;
  const skill = getSkillBySlug(slug, [...allSkills, ...languages]);
  const blogMetadata = blogs;

  if (!skill) {
    notFound();
  }

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <HeadingOne title={skill.name} />
      <PageDescription
        description={`
        This is the page displaying all the material related to ${skill.name}.
        This can include projects, blogs, and certificates.
      `}
      />

      <ProjectsSection projects={allProjects} skill={skill} />
      <CredentialsSection certificates={allCertificates} skill={skill} />
      <BlogsSection blogs={blogMetadata} skill={skill} />
      <RelatedSkillsSection skill={skill} />
    </div>
  );
};

export default SkillPage;
