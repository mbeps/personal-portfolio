import buildSkillTableGroups from "@/lib/skills/group/buildSkillTableGroups";
import MaterialList from "@/components/material-lists/MaterialList";
import SkillTableCell from "@/components/skills/SkillTableSection";
import StringList from "@/components/ui/StringList";
import DynamicBreadcrumb, {
  BreadcrumbPair,
} from "@/components/ui/DynamicBreadcrumb";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE, HOME_PAGE } from "@/constants/pages";
import courseDatabaseMap from "@/database/courses/CourseDatabaseMap";
import CourseInterface from "@/database/courses/CourseInterface";
import moduleDatabaseMap from "@/database/modules/ModuleDatabaseMap";
import ModuleInterface from "@/database/modules/ModuleInterface";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ moduleKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

/**
 * Generates the metadata for the module page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the module page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the module page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export async function generateMetadata(
  props: { params: Params; searchParams: SearchParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await props.params;
  const moduleKey: string = resolvedParams.moduleKey;
  const moduleData: ModuleInterface = moduleDatabaseMap[moduleKey];

  if (!moduleData) {
    notFound();
  }

  return {
    title: `${developerName} - Courses: ${moduleData?.name}`,
    description: moduleData.learningOutcomes.join(". ") || "",
    category: `${EDUCATION_PAGE.label}`,
    creator: developerName,
  };
}

/**
 * Generates the static paths for the modules.
 * These are then used to pre-render the module pages.
 *
 * @returns A list of all the keys for the static pages that need to be generated.
 */
export const generateStaticParams = async () => {
  return Object.keys(moduleDatabaseMap).map((moduleKey) => ({
    moduleKey,
  }));
};

/**
 * Module detail route that focuses on learning outcomes, grouped skills, and how the module connects to other materials.
 * Breadcrumbs connect back to the parent course while the shared MaterialList cross-links into related projects or certificates.
 *
 * @param params Module slug to render.
 * @returns Module overview with skills, outcomes, and related material.
 */
const ModulePage: React.FC<{ params: Params }> = async ({ params }) => {
  const resolvedParams = await params;
  const moduleKey: string = resolvedParams.moduleKey;
  const moduleData: ModuleInterface = moduleDatabaseMap[moduleKey];
  const parentCourse: CourseInterface =
    courseDatabaseMap[moduleData.parentCourse];

  if (!moduleData) {
    notFound();
  }

  // Grouped skills by type
  const allGroupedSkills: GroupedSkillsCategoriesInterface[] =
    buildSkillTableGroups(moduleData.skills);

  const breadcrumbData: BreadcrumbPair[] = [
    { name: HOME_PAGE.label, path: HOME_PAGE.path },
    { name: EDUCATION_PAGE.label, path: EDUCATION_PAGE.path },
    {
      name: parentCourse.name,
      path: `${EDUCATION_PAGE.path}/${moduleData.parentCourse}`,
    },
    { name: moduleData.name },
  ];

  return (
    <main>
      <div className="sr-only">
        <h1>{moduleData.name}</h1>
        {/* list of modules */}
        <h2>Learning Outcomes:</h2>
        <ul>
          {moduleData.learningOutcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>

        <h3>Skills for module:</h3>
        {moduleData.skills.map((skill) => (
          <p key={skill}>{skillDatabaseMap[skill].name}</p>
        ))}
      </div>

      <div>
        <h2>{moduleData.name}</h2>
        <p
          className="
            text-neutral-600 dark:text-neutral-300 
            text-lg 
            text-center
            pb-4
            "
        >
          {moduleKey}
        </p>

        <DynamicBreadcrumb breadcrumbs={breadcrumbData} />

        <div className="material-sections-wrapper pt-6">
          {/* Learning Outcomes */}
          {moduleData.learningOutcomes && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center md:text-left">
                  <h3>Learning Outcomes</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <StringList items={moduleData.learningOutcomes} />
              </CardContent>
            </Card>
          )}

          {/* Skills */}
          <Card>
            <CardContent className="py-7">
              <SkillTableCell allGroupedSkills={allGroupedSkills} />
            </CardContent>
          </Card>

          {/* Score */}
          {moduleData.score && (
            <Card>
              <CardContent className="py-5">
                <div className="flex space-x-1 w-full text-xl text-neutral-800 dark:text-neutral-300">
                  <p className="font-bold">Score:</p>
                  <p>{moduleData.score}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Related Material */}
          {moduleData.relatedMaterials &&
            moduleData.relatedMaterials.length > 0 && (
              <MaterialList materialKeys={moduleData.relatedMaterials} />
            )}
        </div>
      </div>
    </main>
  );
};

export default ModulePage;
