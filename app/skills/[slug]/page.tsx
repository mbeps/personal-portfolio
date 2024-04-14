import filterMaterialBySkill from "@/actions/material/filter/filterMaterialBySkill";
import groupMaterialsByMaterialType, {
  MaterialType,
} from "@/actions/material/group/groupMaterialsByMaterialType";
import BlogsList from "@/components/MaterialLists/BlogsList";
import CertificatesList from "@/components/MaterialLists/CertificatesList";
import ModuleList from "@/components/MaterialLists/ModuleList";
import ProjectsList from "@/components/MaterialLists/ProjectsList";
import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import {
  BLOG_PAGE,
  CERTIFICATES_PAGE,
  EDUCATION_PAGE,
  PROJECTS_PAGE,
} from "@/constants/pages";
import blogDatabase, { blogKeys } from "@/database/blogs";
import certificateDatabase, { certificateKeys } from "@/database/certificates";
import moduleDatabase, { moduleKeys } from "@/database/modules";
import projectDatabase, { projectKeys } from "@/database/projects";
import skillDatabase, { skillKeys } from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
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
  materialHashmap: Database<MaterialInterface>;
  basePath: string;
  ListComponent: React.ComponentType<MaterialListProps>;
}

/**
 * Generates the metadata for the skill page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the skill page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export async function generateMetadata(
  { params, searchParams }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const skillKey: string = params.slug;
  const skill: SkillInterface | undefined =
    skillDatabase[skillKey as SkillKeysEnum];

  if (!skill) {
    notFound();
  }

  return {
    title: `${developerName} - Skills: ${skill?.name}`,
    description: skill.name,
  };
}

/**
/**
 * Generates the static paths for the skills.
 * These are then used to pre-render the projects pages.
 * This Incremental Static Regeneration allows the projects to be displayed without a server.
 * This improves the performance of the website.
 * 
 * @returns A list of all the keys for the static pages that need to be generated.
 * @see https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
 */
export const generateStaticParams = async () => {
  return skillKeys.map((slug) => ({ slug }));
};

interface ProjectPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

/**
 * Page displaying all the material related to a given skill and its sub-skills.
 * This includes projects, blogs, and certificates.
 *
 * @param param0 The data for the skill page.
 * @returns Skill page that displays all the material related to a given skill.
 */
const SkillPage: React.FC<ProjectPageProps> = ({ params }) => {
  const skillKey: string = params.slug;
  const skill: SkillInterface = skillDatabase[skillKey as SkillKeysEnum];

  if (!skill) {
    notFound();
  }

  /**
   * The sections to display on the skill page.
   * Each section is the material type (Projects, Certificates, Blogs).
   * These are iterated over to display the material for each section.
   */
  const sections: MaterialSectionInterface[] = [
    {
      // Projects
      name: MaterialType.Projects,
      materials: projectKeys,
      materialHashmap: projectDatabase,
      basePath: PROJECTS_PAGE.path,
      ListComponent: ProjectsList,
    },
    {
      // Certificates
      name: MaterialType.Certificates,
      materials: certificateKeys,
      materialHashmap: certificateDatabase,
      basePath: CERTIFICATES_PAGE.path,
      ListComponent: CertificatesList,
    },
    {
      // Blogs
      name: MaterialType.Blogs,
      materials: blogKeys,
      materialHashmap: blogDatabase,
      basePath: BLOG_PAGE.path,
      ListComponent: BlogsList,
    },
    {
      // Modules
      name: MaterialType.Modules,
      materials: moduleKeys,
      materialHashmap: moduleDatabase,
      //TODO: Dynamically find base path based on parent course
      basePath: `${EDUCATION_PAGE.path}/rhul-computer-science`,
      ListComponent: ModuleList,
    },
  ];

  return (
    <div className="">
      <HeadingOne title={skill.name} />
      <PageDescription
        description={`
          This is the page displaying all the material related to ${skill.name}.
          This can include projects, blogs, certificates and university modules.
      `}
      />
      {sections.map(
        ({ name, materials, basePath, ListComponent, materialHashmap }) => (
          <MaterialSection
            key={name}
            name={name}
            materials={materials}
            materialHashmap={materialHashmap}
            skillKey={skillKey}
            basePath={basePath}
            ListComponent={ListComponent}
          />
        )
      )}

      <RelatedSkillsSection skillKey={skillKey as SkillKeysEnum} />
    </div>
  );
};

export default SkillPage;

interface MaterialSectionProps extends MaterialSectionInterface {
  skillKey: string;
}

//TODO: Remove button to view all modules
//TODO: Create generic list component

/**
 * Component displaying a section of a specific material type for a given skill.
 *
 * @param name The name of section according to the material type.
 * @param materials The list of materials to display.
 * @param materialHashmap The hashmap of all the materials to access the material data.
 * @param skillKey The key of the skill to filter the materials by.
 * @param basePath The base path for the material type to direct the user to the material page.
 * @param ListComponent The component to display the list of materials.
 * @returns Section displaying all the material for a given skill.
 */
const MaterialSection: React.FC<MaterialSectionProps> = ({
  name,
  materials,
  materialHashmap,
  skillKey,
  basePath,
  ListComponent,
}) => {
  const filteredMaterials: string[] = filterMaterialBySkill(
    skillKey as SkillKeysEnum,
    materials,
    materialHashmap
  );

  // No list to display
  if (!filteredMaterials || filteredMaterials.length === 0) {
    return null;
  }

  /**
   * Groups the materials by their material type.
   * This is similar to the each materials dedicated page.
   */
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
