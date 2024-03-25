import { filterMaterialBySkill } from "@/actions/material/filterMaterials";
import groupMaterialsByMaterialType, {
  MaterialType,
} from "@/actions/material/groupMaterialsByMaterialType";
import BlogsList from "@/components/MaterialLists/BlogsList";
import CertificatesList from "@/components/MaterialLists/CertificatesList";
import ProjectsList from "@/components/MaterialLists/ProjectsList";
import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import { BLOG_PAGE, CERTIFICATES_PAGE, PROJECTS_PAGE } from "@/constants/pages";
import blogDatabase, { blogKeys } from "@/database/blogs";
import certificateDatabase, { certificateKeys } from "@/database/certificates";
import projectDatabase, { projectKeys } from "@/database/projects";
import skillDatabase, { skillKeys } from "@/database/skills/skills";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import RelatedSkillsSection from "./components/RelatedSkillsSection";

interface MaterialSectionInterface {
  name: MaterialType;
  materials: string[];
  materialHashmap: { [key: string]: MaterialInterface };
  basePath: string;
  ListComponent: React.ComponentType<MaterialListProps>;
}

export async function generateMetadata(
  { params, searchParams }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug: string = params.slug;
  const skill: SkillInterface | undefined =
    skillDatabase[slug as SkillSlugEnum];

  if (!skill) {
    notFound();
  }

  return {
    title: `${developerName} - Skills: ${skill?.name}`,
    description: skill.name,
  };
}

export const generateStaticParams = async () => {
  return skillKeys.map((slug) => ({ slug }));
};

interface ProjectPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const SkillPage: React.FC<ProjectPageProps> = ({ params }) => {
  const skillSlug: string = params.slug;
  const skill: SkillInterface = skillDatabase[skillSlug as SkillSlugEnum];

  if (!skill) {
    notFound();
  }

  const sections: MaterialSectionInterface[] = [
    {
      name: MaterialType.Projects,
      materials: projectKeys,
      materialHashmap: projectDatabase,
      basePath: PROJECTS_PAGE.path,
      ListComponent: ProjectsList,
    },
    {
      name: MaterialType.Certificates,
      materials: certificateKeys,
      materialHashmap: certificateDatabase,
      basePath: CERTIFICATES_PAGE.path,
      ListComponent: CertificatesList,
    },
    {
      name: MaterialType.Blogs,
      materials: blogKeys,
      materialHashmap: blogDatabase,
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
      {sections.map(
        ({ name, materials, basePath, ListComponent, materialHashmap }) => (
          <MaterialSection
            key={name}
            name={name}
            materials={materials}
            materialHashmap={materialHashmap}
            skillSlug={skillSlug}
            basePath={basePath}
            ListComponent={ListComponent}
          />
        )
      )}

      <RelatedSkillsSection skillKey={skillSlug as SkillSlugEnum} />
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
  materialHashmap,
  skillSlug,
  basePath,
  ListComponent,
}) => {
  const filteredMaterials: string[] = filterMaterialBySkill(
    skillSlug as SkillSlugEnum,
    materials,
    materialHashmap
  );

  // No list to display
  if (!filteredMaterials || filteredMaterials.length === 0) {
    return null;
  }

  const groupedMaterials: MaterialGroupInterface[] =
    groupMaterialsByMaterialType(filteredMaterials, materialHashmap, name);

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
