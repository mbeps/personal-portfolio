import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import MaterialList from "@/components/MaterialLists/MaterialList";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import StringList from "@/components/Text/StringList";
import DynamicBreadcrumb from "@/components/UI/DynamicBreadcrumb";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE, HOME_PAGE } from "@/constants/pages";
import courseDatabaseMap from "@/database/Courses/CourseDatabaseMap";
import CourseInterface from "@/database/Courses/CourseInterface";
import moduleDatabaseMap from "@/database/Modules/ModuleDatabaseMap";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import ModuleInterface from "@/database/Modules/ModuleInterface";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type ModulePageProps = {
  params: { moduleKey: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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
  { params, searchParams }: ModulePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const moduleKey: string = params.moduleKey;
  const moduleData: ModuleInterface = moduleDatabaseMap[moduleKey];

  // Create metadata based on the course details
  return {
    title: `${developerName} - Courses: ${moduleData?.name}`,
    description: moduleData.learningOutcomes.join(". ") || "",
    category: `${EDUCATION_PAGE.label}`,
    creator: developerName,
    keywords: [
      moduleData.name,
      ...moduleData.skills.map((skill) => skillDatabaseMap[skill].name),
    ],
  };
}

/**
 * Generates the static paths for the modules.
 * These are then used to pre-render the module pages.
 * This Incremental Static Regeneration allows the module to be displayed without a server.
 * This improves the performance of the website.
 *
 * @returns A list of all the keys for the static pages that need to be generated.
 * @see https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
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
 * @param params The data for the module page
 * @returns A page displaying the module details
 */
const ModulePage: React.FC<ModulePageProps> = ({ params }) => {
  const moduleKey: string = params.moduleKey;
  const moduleData: ModuleInterface = moduleDatabaseMap[moduleKey];
  const parentCourse: CourseInterface =
    courseDatabaseMap[moduleData.parentCourse];

  if (!moduleData) {
    notFound();
  }

  const technologies: SkillDatabaseKeys[] = filterSkillsByType(
    moduleData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Technology
  );
  const generalSkills: SkillDatabaseKeys[] = filterSkillsByType(
    moduleData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Technical
  );
  const softSkills: SkillDatabaseKeys[] = filterSkillsByType(
    moduleData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Soft
  );

  // Simplified grouping of skill types for certificates
  const allGroupedSkills: GroupedSkillsCategoriesInterface[] = [
    categoriseAndGroupSkills(
      technologies,
      skillDatabaseMap,
      SkillTypesEnum.Technology,
      "Technologies"
    ),
    categoriseAndGroupSkills(
      generalSkills,
      skillDatabaseMap,
      SkillTypesEnum.Technical,
      "Technical Skills"
    ),
    categoriseAndGroupSkills(
      softSkills,
      skillDatabaseMap,
      SkillTypesEnum.Soft,
      "Soft Skills"
    ),
  ];

  const breadcrumbData = [
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
        <HeadingTwo title={moduleData.name} />
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
                  <HeadingThree title="Learning Outcomes" />
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
              <>
                <MaterialList
                  materialKeys={moduleData.relatedMaterials}
                  sectionName={moduleData.name}
                />
              </>
            )}
        </div>
      </div>
    </main>
  );
};

export default ModulePage;
