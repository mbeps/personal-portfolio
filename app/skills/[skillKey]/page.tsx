import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import type React from "react";
import MaterialList from "@/components/material-lists/material-list";
import PageDescription from "@/components/ui/page-description";
import developerName from "@/constants/developer-name";
import materialDatabaseMap, {
  materialKeys,
} from "@/database/materials/material-database-map";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/skills/skill-database-map";
import type SkillInterface from "@/database/skills/skill-interface";
import filterMaterialBySkill from "@/lib/material/filter/filter-material-by-skill";
import RelatedSkillsSection from "./_components/related-skills-section";

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
  _parent: ResolvingMetadata,
): Promise<Metadata | undefined> {
  const resolvedParams = await props.params;
  const skillKey: string = resolvedParams.skillKey;
  const skill: SkillInterface | undefined =
    skillDatabaseMap[skillKey as SkillDatabaseKeys];

  if (!skill) {
    notFound();
  }

  if (skill.isMainSkill) {
    return {
      title: `${developerName} - Skills: ${skill?.name}`,
      description: skill.name,
      keywords: [skill.name],
    };
  }
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
 * Skill drill-down that aggregates every material referencing the skill and surfaces related skills for further exploration.
 * Keeps the narrative consistent with MaterialList sections so visitors can jump between work, courses, and blogs tied to the skill.
 *
 * @param params Skill slug to render.
 * @returns Skill overview with material list and related skills section.
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
    materialDatabaseMap,
  );

  return (
    <main>
      <div>
        <h1>{skillData.name}</h1>
        <PageDescription
          description={`
          This is the page displaying all the material related to ${skillData.name}.
          This can include projects, blogs, certificates, university modules and work experience along with sub-skills.
      `}
        />

        {/* Material Section */}
        <div className="pt-8" />
        <h2>Material</h2>
        <MaterialList materialKeys={filteredMaterials} isCollapsible={false} />

        {/* Skills Section */}
        <RelatedSkillsSection skillKey={skillKey as SkillDatabaseKeys} />
      </div>
    </main>
  );
};

export default SkillPage;
