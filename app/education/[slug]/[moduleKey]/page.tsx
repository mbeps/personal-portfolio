import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import MaterialList from "@/components/MaterialLists/MaterialList";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import DynamicBreadcrumb from "@/components/UI/DynamicBreadcrumb";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/shadcn/ui/breadcrumb";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE, HOME_PAGE } from "@/constants/pages";
import courseDatabase from "@/database/courses";
import moduleDatabase from "@/database/modules";
import skillDatabase from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import UniversityCourseInterface from "@/interfaces/material/UniversityCourseInterface";
import UniversityModuleInterface from "@/interfaces/material/UniversityModuleInterface";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { RxTriangleRight } from "react-icons/rx";

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
  const moduleData: UniversityModuleInterface = moduleDatabase[moduleKey];

  // Create metadata based on the course details
  return {
    title: `${developerName} - Courses: ${moduleData?.name}`,
    description: moduleData.learningOutcomes.join(". ") || "",
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
  return Object.keys(moduleDatabase).map((module) => ({
    module,
  }));
};

/**
 * Page displaying details about a module in a course.
 * This includes the learning outcomes, skills, and related material.
 *
 *
 * @param param0 The data for the module page.
 * @returns A page displaying the module details
 */
const ModulePage: React.FC<ModulePageProps> = ({ params }) => {
  const moduleKey: string = params.moduleKey;
  const moduleData: UniversityModuleInterface = moduleDatabase[moduleKey];
  const parentCourse: UniversityCourseInterface =
    courseDatabase[moduleData.parentCourse];

  if (!moduleData) {
    notFound();
  }

  const technologies: SkillKeysEnum[] = filterSkillsByType(
    moduleData.skills,
    skillDatabase,
    SkillTypesEnum.Hard
  );
  const generalSkills: SkillKeysEnum[] = filterSkillsByType(
    moduleData.skills,
    skillDatabase,
    SkillTypesEnum.General
  );
  const softSkills: SkillKeysEnum[] = filterSkillsByType(
    moduleData.skills,
    skillDatabase,
    SkillTypesEnum.Soft
  );

  // Simplified grouping of skill types for certificates
  const allGroupedSkills: GroupedSkillsCategoriesInterface[] = [
    categoriseAndGroupSkills(
      technologies,
      skillDatabase,
      SkillTypesEnum.Hard,
      "Technologies"
    ),
    categoriseAndGroupSkills(
      generalSkills,
      skillDatabase,
      SkillTypesEnum.General,
      "Technical Skills"
    ),
    categoriseAndGroupSkills(
      softSkills,
      skillDatabase,
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
    <div>
      <HeadingTwo title={moduleData.name} />

      <DynamicBreadcrumb breadcrumbs={breadcrumbData} />

      <div className="mt-4 ">
        {/* Learning Outcomes */}
        {moduleData.learningOutcomes && (
          <>
            <div className="text-center lg:text-left">
              <HeadingThree title="Learning Outcomes" />
            </div>
            <div>
              <ul className="list-none text-lg">
                {moduleData.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex mb-1.5">
                    <div className="mr-2 mt-1.5">
                      <RxTriangleRight />
                    </div>
                    <div className="text-neutral-800 dark:text-neutral-300">
                      {outcome}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Skills */}
      <SkillTableSection allGroupedSkills={allGroupedSkills} />

      {/* Module Code */}
      <div
        className="
          py-4
          flex space-x-1 w-full
          text-xl text-neutral-800 dark:text-neutral-300
          "
      >
        <p className="font-bold">Module Code:</p>
        <p>{moduleKey}</p>
      </div>

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
          <p>{`${moduleData.score}%`}</p>
        </div>
      )}

      {/* Related Material */}
      {moduleData.relatedMaterials &&
        moduleData.relatedMaterials.length > 0 && (
          <>
            <div className="border-b border-gray-200 dark:border-neutral-600 pb-4" />
            <MaterialList materialKeys={moduleData.relatedMaterials} />
          </>
        )}
    </div>
  );
};

export default ModulePage;
