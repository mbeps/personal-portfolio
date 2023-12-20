import getSkillBySlug from "@/actions/skills/getSkillBySlug";
import HeadingOne from "@/components/Text/HeadingOne";
import allCertificates from "@/constants/certificates";

import blogs from "@/constants/blogs";
import { languages } from "@/constants/languages";
import allProjects from "@/constants/projects";
import generalSkills from "@/constants/skills/generalSkills";
import hardSkills from "@/constants/skills/hardSkills";
import softSkills from "@/constants/skills/softSkills";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import BlogsSection from "./components/BlogsSection";
import CredentialsSection from "./components/CredentialsSection";
import ProjectsSection from "./components/ProjectsSection";
import PageDescription from "@/components/Atoms/PageDescription";

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

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <HeadingOne title={skill.skill} />
      <PageDescription
        description={`
        This is the page displaying all the material related to ${skill.skill}.
        This can include projects, blogs, and certificates.
      `}
      />

      <ProjectsSection projects={allProjects} skill={skill} />
      <CredentialsSection certificates={allCertificates} skill={skill} />
      <BlogsSection blogs={blogMetadata} skill={skill} />
    </div>
  );
};

export default SkillPage;
