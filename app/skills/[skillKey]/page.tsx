import filterMaterialBySkill from "@/actions/material/filter/filterMaterialBySkill";
import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import materialDatabase, { materialKeys } from "@/database/material";
import skillDatabase, { skillKeys } from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import RelatedSkillsSection from "./components/RelatedSkillsSection";
import MaterialList from "@/components/MaterialLists/MaterialList";
import HeadingTwo from "@/components/Text/HeadingTwo";

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
  const skillKey: string = params.skillKey;
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
 * Generates the static paths for the skills.
 * These are then used to pre-render the projects pages.
 * This Incremental Static Regeneration allows the projects to be displayed without a server.
 * This improves the performance of the website.
 *
 * @returns A list of all the keys for the static pages that need to be generated.
 * @see https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
 */
export const generateStaticParams = async () => {
  return skillKeys.map((skillKey) => ({ skillKey }));
};

interface ProjectPageProps {
  params: { skillKey: string };
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
  const skillKey: string = params.skillKey;
  const skillData: SkillInterface = skillDatabase[skillKey as SkillKeysEnum];

  if (!skillData) {
    notFound();
  }

  const filteredMaterials: string[] = filterMaterialBySkill(
    skillKey as SkillKeysEnum,
    materialKeys,
    materialDatabase
  );

  return (
    <div className="">
      <HeadingOne title={skillData.name} />
      <PageDescription
        description={`
          This is the page displaying all the material related to ${skillData.name}.
          This can include projects, blogs, certificates and university modules.
      `}
      />

      {/* Material Section */}
      <div className="pt-8" />
      <HeadingTwo title="Material" />
      <MaterialList materialKeys={filteredMaterials} />

      {/* Skills Section */}
      <RelatedSkillsSection skillKey={skillKey as SkillKeysEnum} />
    </div>
  );
};

export default SkillPage;
