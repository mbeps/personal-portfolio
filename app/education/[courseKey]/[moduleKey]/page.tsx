import buildSkillTableGroups from "@/actions/skills/group/buildSkillTableGroups";
import MaterialList from "@/components/MaterialLists/MaterialList";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import StringList from "@/components/Text/StringList";
import DynamicBreadcrumb, {
  BreadcrumbPair,
} from "@/components/UI/DynamicBreadcrumb";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE, HOME_PAGE } from "@/constants/pages";
import courseDatabaseMap from "@/database/Courses/CourseDatabaseMap";
import CourseInterface from "@/database/Courses/CourseInterface";
import moduleDatabaseMap from "@/database/Modules/ModuleDatabaseMap";
import ModuleInterface from "@/database/Modules/ModuleInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
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
 * Page displaying details about a module in a course.
 * This includes the learning outcomes, skills, and related material.
 *
 * The page also displays:
 * - The skills covered in the module
 * - Related materials
 *
 * @param props The data for the module page
 * @returns A page displaying the module details
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

        <div className="space-y-12 pt-6">
          <div className="mt-4 ">
            {/* Learning Outcomes */}
            {moduleData.learningOutcomes && (
              <>
                <div className="text-center lg:text-left">
                  <h3>Learning Outcomes</h3>
                </div>
                <StringList items={moduleData.learningOutcomes} />
              </>
            )}
          </div>

          {/* Skills */}
          <SkillTableSection allGroupedSkills={allGroupedSkills} />

          {/* Score */}
          {moduleData.score && (
            <div
              className="
                py-4
                flex space-x-1 w-full
                text-xl text-neutral-800 dark:text-neutral-300
              "
            >
              <p className="font-bold">Score:</p>
              <p>{moduleData.score}</p>
            </div>
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
