import groupMaterialsByMaterialType from "@/actions/material/groupMaterialsByMaterialType";
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
import skillsDatabase from "@/database/skills/skills";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import RelatedSkillsSection from "./components/RelatedSkillsSection";
import SkillSlugEnum, { skillSlugArray } from "@/enums/SkillSlugEnum";
import { filterMaterialBySkill } from "@/actions/material/filterMaterials";

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
  const slug: string = params.slug;
  const skill: SkillInterface | undefined =
    skillsDatabase[slug as SkillSlugEnum];

  if (!skill) {
    notFound();
  }

  return {
    title: `${developerName} - Skills: ${skill?.name}`,
    description: skill.name,
  };
}

export const generateStaticParams = async () => {
  return skillSlugArray.map((slug) => ({ slug }));
};

interface ProjectPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const SkillPage: React.FC<ProjectPageProps> = ({ params }) => {
  const slug: string = params.slug;
  const skill: SkillInterface = skillsDatabase[slug as SkillSlugEnum];

  if (!skill) {
    notFound();
  }

  const sections: MaterialSectionInterface[] = [
    {
      name: "Projects",
      materials: projectDatabase,
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
      materials: blogDatabase,
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
          skillSlug={slug}
          basePath={basePath}
          ListComponent={ListComponent}
        />
      ))}
      <RelatedSkillsSection skill={slug as SkillSlugEnum} />
    </div>
  );
};

export default SkillPage;

interface MaterialSectionProps extends MaterialSectionInterface {
  skillSlug: string;
}

const MaterialSection: React.FC<MaterialSectionProps> = ({
  name,
  materials,
  skillSlug,
  basePath,
  ListComponent,
}) => {
  const filteredMaterials = filterMaterialBySkill(
    skillSlug as SkillSlugEnum,
    materials
  );

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
