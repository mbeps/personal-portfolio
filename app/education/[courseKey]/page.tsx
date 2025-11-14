import filterMaterialByArchivedStatus from "@/actions/material/filter/filterMaterialByArchivedStatus";
import groupMaterialsByCategory from "@/actions/material/group/groupMaterialsByCategory";
import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import MaterialList from "@/components/MaterialLists/MaterialList";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import Tag from "@/components/Tags/Tag";
import Grid from "@/components/UI/Grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabaseMap from "@/database/Courses/CourseDatabaseMap";
import CourseInterface from "@/database/Courses/CourseInterface";
import ModuleDatabaseKeys from "@/database/Modules/ModuleDatabaseKeys";
import moduleDatabaseMap from "@/database/Modules/ModuleDatabaseMap";
import ModuleInterface from "@/database/Modules/ModuleInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GrAppsRounded } from "react-icons/gr";
import { IoReaderOutline } from "react-icons/io5";

type Params = Promise<{ courseKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

/**
 * Generates the metadata for the course page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the project page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the project page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export async function generateMetadata(
  props: { params: Params; searchParams: SearchParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await props.params;
  const courseKey: string = resolvedParams.courseKey;
  const course: CourseInterface = courseDatabaseMap[courseKey];

  if (!course) {
    notFound();
  }

  return {
    title: `${developerName} - Courses: ${course?.name} at ${course?.university}`,
    description: `${course.grade} in ${course.name} from ${course?.university}`,
    category: `${EDUCATION_PAGE.label}`,
    creator: developerName,
    keywords: [course.name, course.university],
  };
}

/**
 * Generates the static paths for the courses.
 * These are then used to pre-render the courses pages.
 *
 * @returns A list of all the keys for the static pages that need to be generated.
 */
export const generateStaticParams = async () => {
  return Object.keys(courseDatabaseMap).map((courseKey) => ({
    courseKey,
  }));
};

/**
 * Page for displaying a specific course including:
 * - Certificate
 * - University
 * - Classification
 * - Modules
 * - Skills
 * - Related Materials
 *
 * The page also displays:
 * - The skills covered in the course
 * - Related materials
 *
 * @param props Details about the page
 * @returns The course page
 */
const CoursesPage: React.FC<{
  params: Params;
  searchParams: SearchParams;
}> = async ({ params, searchParams }) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const courseKey: string = resolvedParams.courseKey;
  const courseData: CourseInterface = courseDatabaseMap[courseKey];
  const basePath: string = EDUCATION_PAGE.path;

  if (!courseData) {
    notFound();
  }

  const showArchived: boolean =
    (resolvedSearchParams.archived || "false") === "true";
  const hasRelatedMaterials: boolean =
    !!courseData.relatedMaterials && courseData.relatedMaterials.length > 0;

  let filteredModules: ModuleDatabaseKeys[] =
    courseDatabaseMap[courseKey].modules;
  filteredModules = filterMaterialByArchivedStatus<ModuleInterface>(
    showArchived,
    filteredModules,
    moduleDatabaseMap
  ) as ModuleDatabaseKeys[];

  const groupedModules: MaterialGroupInterface[] = groupMaterialsByCategory(
    filteredModules,
    moduleDatabaseMap
  );

  //^ Skills
  const technologies: SkillDatabaseKeys[] = filterSkillsByType(
    courseData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Technology
  );
  const generalSkills: SkillDatabaseKeys[] = filterSkillsByType(
    courseData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Technical
  );
  const softSkills: SkillDatabaseKeys[] = filterSkillsByType(
    courseData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Soft
  );

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

  const hasArchivedModules: boolean = courseData.modules.some(
    (moduleKey) => moduleDatabaseMap[moduleKey].archived
  );

  return (
    <main>
      <div>
        <h2>{courseData.name}</h2>

        <div className="space-x-0 lg:space-x-6">
          <div className="py-5 w-full">
            <div className="flex items-center  flex-col md:flex-row">
              {courseData.logo && (
                <div className="rounded-full shadow-lg transition-all duration-500 ease-in-out w-[75px] h-[75px]">
                  <AspectRatio
                    ratio={1 / 1}
                    className="overflow-hidden relative w-full bg-white rounded-full"
                  >
                    <Image
                      src={courseData.logo}
                      alt={`Logo for ${courseData.name}`}
                      fill={true}
                      className="rounded-full shadow-lg object-cover transition-all duration-500 ease-in-out"
                      quality={30}
                      priority
                    />
                  </AspectRatio>
                </div>
              )}

              {/* University Name */}
              <div
                className="
                  h-full  
                  flex items-center justify-center lg:justify-start
                "
              >
                <p
                  className="
                    text-center lg:text-left text-2xl font-bold 
                    mt-4 lg:mt-0 lg:ml-8
                    text-neutral-600 dark:text-neutral-300
                  "
                >
                  {courseData.university}
                </p>
              </div>
            </div>
            <p className="text-center lg:text-left text-2xl text-neutral-700 dark:text-neutral-200 mt-8">
              {courseData.category}
            </p>
            <p className="text-center lg:text-left text-neutral-600 dark:text-neutral-400 italic">{`${courseData.startYear} - ${courseData.endYear}`}</p>

            {courseData.grade && (
              <div
                className="
                    py-4
                    flex space-x-1 w-full
                    text-xl text-neutral-800 dark:text-neutral-300
                    justify-center lg:justify-start
                  "
              >
                <p className="font-bold">Grade:</p>
                <p>{courseData.grade}</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-24">
          <div>
            <div className="text-center lg:text-left">
              <h3>Modules</h3>
            </div>

            {/* Archive Toggle */}
            {hasArchivedModules && (
              <ArchiveToggle
                showArchived={showArchived}
                filterProps={[]}
                basePath={`${basePath}/${courseKey}`}
              />
            )}

            {/* Modules */}
            {groupedModules.map((group, index) => (
              <div key={index} className="mb-4">
                {groupedModules.length > 1 && <h4>{group.groupName}</h4>}
                <Grid
                  gap={1}
                  items={group.materialsKeys.map((moduleKey, idx) => (
                    <Link
                      href={`${basePath}/${courseKey}/${moduleKey}`}
                      key={idx}
                    >
                      <Tag hasHover>{moduleDatabaseMap[moduleKey].name}</Tag>
                    </Link>
                  ))}
                />
              </div>
            ))}
          </div>

          {/* Skills */}
          <SkillTableSection allGroupedSkills={allGroupedSkills} />

          {!!courseData.certificate || hasRelatedMaterials ? (
            <Accordion type="single" collapsible>
              {/* Certificate Section */}
              {!!courseData.certificate && (
                <>
                  <AccordionItem value="item-2">
                    {courseData.certificate && (
                      <>
                        <AccordionTrigger>
                          <div className="flex items-center space-x-3">
                            <IoReaderOutline
                              size={26}
                              className="text-neutral-500"
                            />
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-semibold">
                              Certificate
                            </p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-2 flex items-center justify-center">
                          <div className="rounded-xl w-full lg:w-1/2 transition-all duration-500 ease-in-out p-1 lg:p-3 bg-neutral-100 dark:bg-neutral-950">
                            <AspectRatio
                              ratio={1 / 1.4}
                              className="overflow-hidden relative"
                            >
                              <Image
                                src={courseData.certificate}
                                key={courseData.certificate}
                                alt={`${courseData.name} cover image`}
                                fill={true}
                                loading="lazy"
                                quality={15}
                                className="rounded-xl object-cover"
                              />
                            </AspectRatio>
                          </div>
                        </AccordionContent>
                      </>
                    )}
                  </AccordionItem>
                </>
              )}

              {/* Related Materials Section */}
              {hasRelatedMaterials && (
                <>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <div className="flex items-center space-x-3">
                        <GrAppsRounded size={25} className="text-neutral-500" />
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 font-semibold">
                          Related Material
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2">
                      <MaterialList
                        materialKeys={courseData.relatedMaterials!}
                        isCollapsible={false}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </>
              )}
            </Accordion>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
