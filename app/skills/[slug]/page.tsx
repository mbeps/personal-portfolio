import getSkillBySlug from "@/actions/getSkillBySlug";
import updateCredentialImages from "@/actions/updateCredentialImages";
import HeadingOne from "@/components/Text/HeadingOne";
import allCertificates from "@/constants/certificates";

import updateProjectImages from "@/actions/updateProjectImages";
import allProjects from "@/constants/projects";
import generalSkills from "@/constants/skills/generalSkills";
import hardSkills from "@/constants/skills/hardSkills";
import softSkills from "@/constants/skills/softSkills";
import { notFound } from "next/navigation";
import React from "react";
import CredentialsSection from "./components/CredentialsSection";
import ProjectsSection from "./components/ProjectsSection";
import blogs from "@/constants/blogs";
import BlogsSection from "./components/BlogsSection";
import { languages } from "@/constants/languages";
import { ResolvingMetadata, Metadata } from "next";

const allSkills = [...hardSkills, ...generalSkills, ...softSkills];

export async function generateMetadata(
  { params, searchParams }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const skill = getSkillBySlug(slug, [...allSkills, ...languages]);

  return {
    title: `Maruf Bepary - Skills: ${skill?.skill}`,
    description: skill?.skill,
  };
}

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

  const certificates = updateCredentialImages(allCertificates);
  const projects = updateProjectImages(allProjects);

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <HeadingOne title={skill.skill} />

      <ProjectsSection projects={projects} skill={skill} />
      <CredentialsSection certificates={certificates} skill={skill} />
      <BlogsSection blogs={blogMetadata} skill={skill} />
    </div>
  );
};

export default SkillPage;
