import filterMaterialBySkill from "@/actions/material/filter/filterMaterialBySkill";
import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/Skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillInterface from "@/database/Skills/SkillInterface";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import RelatedSkillsSection from "./components/RelatedSkillsSection";
import MaterialList from "@/components/MaterialLists/MaterialList";
import HeadingTwo from "@/components/Text/HeadingTwo";
import materialDatabaseMap, {
  materialKeys,
} from "@/database/Materials/MaterialDatabaseMap";
import { SKILL_PAGE } from "@/constants/pages";

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
    skillDatabaseMap[skillKey as SkillDatabaseKeys];

  if (!skill) {
    notFound();
  }

  return {
    title: `${developerName} - Skills: ${skill?.name}`,
    description: skill.name,
    category: `${SKILL_PAGE.label}`,
    creator: developerName,
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
  return skillDatabaseKeys.map((skillKey) => ({ skillKey }));
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
  const skillData: SkillInterface =
    skillDatabaseMap[skillKey as SkillDatabaseKeys];

  if (!skillData) {
    notFound();
  }

  const filteredMaterials: string[] = filterMaterialBySkill(
    skillKey as SkillDatabaseKeys,
    materialKeys,
    materialDatabaseMap
  );

  return (
    <main>
      <div className="sr-only">
        <h1>{skillData.name}</h1>
        <h2>Skills for certificate:</h2>
        {skillData.relatedSkills?.map((skill) => (
          <p key={skill}>{skillDatabaseMap[skill].name}</p>
        ))}
      </div>

      <div className="">
        <HeadingOne title={skillData.name} />
        <PageDescription
          description={`
          This is the page displaying all the material related to ${skillData.name}.
          This can include projects, blogs, certificates, university modules and work experience along with sub-skills.
      `}
        />

        {/* Material Section */}
        <div className="pt-8" />
        <HeadingTwo title="Material" />
        <MaterialList materialKeys={filteredMaterials} isCollapsible={false} />

        {/* Skills Section */}
        <RelatedSkillsSection skillKey={skillKey as SkillDatabaseKeys} />
      </div>
    </main>
  );
};

export default SkillPage;
