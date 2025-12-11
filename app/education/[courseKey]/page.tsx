import filterMaterialByArchivedStatus from "@/lib/material/filter/filterMaterialByArchivedStatus";
import groupMaterialsByCategory from "@/lib/material/group/groupMaterialsByCategory";
import buildSkillTableGroups from "@/lib/skills/group/buildSkillTableGroups";
import { ArchiveToggle } from "@/components/filters/ArchiveToggle";
import MaterialList from "@/components/material-lists/MaterialList";
import SkillTableSection from "@/components/skills/SkillTableSection";
import Tag from "@/components/tags/Tag";
import Grid from "@/components/ui/Grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabaseMap from "@/database/courses/CourseDatabaseMap";
import CourseInterface from "@/database/courses/CourseInterface";
import ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import moduleDatabaseMap from "@/database/modules/ModuleDatabaseMap";
import ModuleInterface from "@/database/modules/ModuleInterface";
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
 * Course detail page that merges curriculum metadata, module listings, skill tables, and related portfolio work.
 * Handles archived modules via the shared toggle so users can surface historical coursework on demand.
 *
 * @param params Dynamic course slug plus optional search params for archive state.
 * @returns Course overview with grouped modules and material cross-links.
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
  const allGroupedSkills: GroupedSkillsCategoriesInterface[] =
    buildSkillTableGroups(courseData.skills);

  const hasArchivedModules: boolean = courseData.modules.some(
    (moduleKey) => moduleDatabaseMap[moduleKey].archived
  );

  return (
    <main>
      <div>
        <h2>{courseData.name}</h2>

        <div className="flex items-center flex-col md:flex-row">
          {courseData.logo && (
            <div className="rounded-full shadow-md transition-all duration-500 ease-in-out w-[75px] h-[75px]">
              <AspectRatio
                ratio={1 / 1}
                className="overflow-hidden relative w-full bg-white rounded-full"
              >
                <Image
                  src={courseData.logo}
                  alt={`Logo for ${courseData.name}`}
                  fill={true}
                  className="rounded-full shadow-sm object-cover transition-all duration-500 ease-in-out"
                  quality={30}
                  priority
                />
              </AspectRatio>
            </div>
          )}

          {/* University Name */}
          <div className="h-full flex items-center justify-center lg:justify-start">
            <p className="text-center lg:text-left text-2xl font-bold mt-4 lg:mt-0 lg:ml-8 text-neutral-600 dark:text-neutral-300">
              {courseData.university}
            </p>
          </div>
        </div>

        <div className="mt-10 material-sections-wrapper">
          <Card>
            <CardContent className="-mt-4 py-5">
              {/* Category  */}
              <p className="text-center lg:text-left text-2xl text-neutral-700 dark:text-neutral-200 mt-8">
                {courseData.category}
              </p>
              {/* Dates */}
              <p className="text-center lg:text-left text-neutral-500 dark:text-neutral-400 italic">{`${courseData.startYear} - ${courseData.endYear}`}</p>
              {/* Grade */}
              {courseData.grade && (
                <div className="py-4 flex space-x-1 w-full text-xl text-neutral-800 dark:text-neutral-300 justify-center lg:justify-start">
                  <p className="font-bold">Grade:</p>
                  <p>{courseData.grade}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Module Section */}
          <Card className="pb-4">
            <CardHeader>
              <CardTitle className="text-center md:text-left">
                <h3>Modules</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
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
                <div key={index} className={index > 0 ? "mt-8" : ""}>
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
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardContent className="py-7">
              <SkillTableSection allGroupedSkills={allGroupedSkills} />
            </CardContent>
          </Card>

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
