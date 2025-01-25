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

type Params = Promise<{ skillKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

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
  props: { params: Params; searchParams: SearchParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await props.params;
  const skillKey: string = resolvedParams.skillKey;
  const skill: SkillInterface | undefined =
    skillDatabaseMap[skillKey as SkillDatabaseKeys];

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
 * These are then used to pre-render the skill pages.
 *
 * @returns A list of all skill keys for static page generation.
 */
export const generateStaticParams = async () => {
  return skillDatabaseKeys.map((skillKey) => ({ skillKey }));
};

interface SkillPageProps {
  params: Params;
  searchParams: SearchParams;
}

/**
 * Page displaying all the material related to a given skill and its sub-skills.
 * This includes projects, blogs, and certificates.
 *
 * @param props The data for the skill page.
 * @returns Skill page that displays all the material related to a given skill.
 */
const SkillPage: React.FC<{ params: Params }> = async ({ params }) => {
  const resolvedParams = await params;
  const skillKey: string = resolvedParams.skillKey;
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

      <div>
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
