import getSkillBySlug from "@/actions/skills/getSkillBySlug";
import HeadingOne from "@/components/Text/HeadingOne";
import allCertificates from "@/database/certificates";
import blogs from "@/database/blogs";
import { languages } from "@/database/skills/languages";
import allProjects from "@/database/projects";
import generalSkills from "@/database/skills/generalSkills";
import hardSkills from "@/database/skills/hardSkills";
import softSkills from "@/database/skills/softSkills";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import BlogsSection from "./components/BlogsSection";
import CredentialsSection from "./components/CredentialsSection";
import ProjectsSection from "./components/ProjectsSection";
import PageDescription from "@/components/UI/PageDescription";
import Skill from "@/types/skills";

const allSkills = [
  ...hardSkills,
  ...generalSkills,
  ...softSkills,
  ...languages,
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
    </div>
  );
};

export default SkillPage;
