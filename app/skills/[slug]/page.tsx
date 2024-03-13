import updateProjectImages from "@/actions/file-system/updateProjectImages";
import filterContentBySkill from "@/actions/material/filterContentBySkill";
import groupMaterialsByMaterialType from "@/actions/material/groupMaterialsByMaterialType";
import getSkillBySlug from "@/actions/skills/getSkillBySlug";
import BlogsList from "@/components/MaterialLists/BlogsList";
import CertificatesList from "@/components/MaterialLists/CertificatesList";
import ProjectsList from "@/components/MaterialLists/ProjectsList";
import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import { BLOG_PAGE, CERTIFICATES_PAGE, PROJECTS_PAGE } from "@/constants/pages";
import blogDatabase from "@/database/blogs";
import certificateDatabase from "@/database/certificates";
import projectDatabase from "@/database/projects";
import allSkills from "@/database/skills/skills";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import RelatedSkillsSection from "./components/RelatedSkillsSection";

function extractSlugs(skills: SkillInterface[]): string[] {
  return skills.map((skill) => {
    if (!skill.slug) {
      throw new Error("ERROR: Slug field is empty or missing");
    }
    return skill.slug;
  });
}

interface MaterialSectionInterface {
  name: "Projects" | "Certificates" | "Blogs";
  materials: { [key: string]: MaterialInterface };
  basePath: string;
  ListComponent: React.ComponentType<MaterialListProps>;
}

export async function generateMetadata(
  { params, searchParams }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const skill = getSkillBySlug(slug, [...allSkills]);

  if (!skill) {
    notFound();
  }

  return {
    title: `${developerName} - Skills: ${skill?.name}`,
    description: skill.name,
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
  const skill = getSkillBySlug(slug, [...allSkills]);
  const blogMetadata = blogDatabase;

  if (!skill) {
    notFound();
  }

  const sections: MaterialSectionInterface[] = [
    {
      name: "Projects",
      materials: updateProjectImages(projectDatabase),
      basePath: PROJECTS_PAGE.path,
      ListComponent: ProjectsList,
    },
    {
      name: "Certificates",
      materials: certificateDatabase,
      basePath: CERTIFICATES_PAGE.path,
      ListComponent: CertificatesList,
    },
    {
      name: "Blogs",
      materials: blogMetadata,
      basePath: BLOG_PAGE.path,
      ListComponent: BlogsList,
    },
  ];

  return (
    <div className="">
      <HeadingOne title={skill.name} />
      <PageDescription
        description={`
          This is the page displaying all the material related to ${skill.name}.
          This can include projects, blogs, and certificates.
      `}
      />

      {sections.map(({ name, materials, basePath, ListComponent }, index) => (
        <MaterialSection
          key={index}
          name={name}
          materials={materials}
          skill={skill}
          basePath={basePath}
          ListComponent={ListComponent}
        />
      ))}
      <RelatedSkillsSection skill={skill} />
    </div>
  );
};

export default SkillPage;

interface MaterialSectionProps extends MaterialSectionInterface {
  skill: SkillInterface;
}

const MaterialSection: React.FC<MaterialSectionProps> = ({
  name,
  materials,
  skill,
  basePath,
  ListComponent,
}) => {
  const filteredMaterials = filterContentBySkill(materials, skill);

  if (!filteredMaterials || Object.keys(filteredMaterials).length === 0) {
    return null;
  }

  const groupedMaterials = groupMaterialsByMaterialType(
    filteredMaterials,
    name
  );

  return (
    <div className="flex flex-col space-y-10 align-top relative">
      <ListComponent groupedMaterial={groupedMaterials} />

      <div className="flex justify-center mt-10">
        <Link href={basePath}>
          <Button variant="outline">{`View All ${name}`}</Button>
        </Link>
      </div>
    </div>
  );
};
