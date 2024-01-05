import getSkillBySlug from "@/actions/skills/getSkillBySlug";
import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import blogs from "@/database/blogs";
import allCertificates from "@/database/certificates";
import allProjects from "@/database/projects";
import { languages } from "@/database/skills/languages";
import allSkills from "@/database/skills/skills";
import Skill from "@/types/skills";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import BlogsSection from "./components/BlogsSection";
import CredentialsSection from "./components/CredentialsSection";
import ProjectsSection from "./components/ProjectsSection";
import RelatedSkillsSection from "./components/RelatedSkillsSection";

function extractSlugs(skills: Skill[]): string[] {
  return skills.map((skill) => {
    if (!skill.slug) {
      throw new Error("ERROR: Slug field is empty or missing");
    }
    return skill.slug;
  });
}

export async function generateMetadata(
  { params, searchParams }: ProjectPageProps,
  parent: ResolvingMetadata,
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
    <div className="material-page-wrapper">
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
