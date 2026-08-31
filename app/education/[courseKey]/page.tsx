import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GrAppsRounded } from "react-icons/gr";
import { IoReaderOutline } from "react-icons/io5";
import MaterialList from "@/components/material-lists/MaterialList";
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
import SkillTableSection from "@/components/skills/SkillTableSection";
import Tag from "@/components/tags/Tag";
import Grid from "@/components/ui/Grid";
import developerName from "@/constants/developerName";
import { ROUTES } from "@/constants/routes";
import courseDatabaseMap from "@/database/courses/CourseDatabaseMap";
import type CourseInterface from "@/database/courses/CourseInterface";
import type ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import moduleDatabaseMap from "@/database/modules/ModuleDatabaseMap";
import type ModuleInterface from "@/database/modules/ModuleInterface";
import type MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import type ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filterMaterialByArchivedStatus";
import groupMaterialsByCategory from "@/lib/material/group/groupMaterialsByCategory";
import buildSkillTableGroups from "@/lib/skills/group/buildSkillTableGroups";
import hasAnySkills from "@/lib/skills/hasAnySkills";
import CourseArchiveToggle from "./_components/CourseArchiveToggle";

type Params = Promise<{ courseKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

/**
 * Builds metadata for a course detail route so the slug, university, and grade surface in head tags.
 * Course keys mirror the folders under `public/education/{courseKey}`, keeping assets and metadata aligned.
 *
 * @param props Params promise supplied by Next.
 * @param parent Parent metadata from the layout.
 * @returns Metadata populated from the course entry.
 */
export async function generateMetadata(
  props: { params: Params; searchParams: SearchParams },
  _parent: ResolvingMetadata,
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
    category: `${ROUTES.EDUCATION.name}`,
    creator: developerName,
    keywords: [course.name, course.university],
  };
}

/**
 * Supplies every course key to Next for static generation so the folders under `public/education/{courseKey}` become routable pages.
 *
 * @returns Params for each course detail route.
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
  const basePath: string = ROUTES.EDUCATION.path;

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
    moduleDatabaseMap,
  ) as ModuleDatabaseKeys[];

  const groupedModules: MaterialGroupInterface[] = groupMaterialsByCategory(
    filteredModules,
    moduleDatabaseMap,
  );

  //^ Skills
  const allGroupedSkills: ListOfCategorisedSkillsByTypeInterface[] =
    buildSkillTableGroups(courseData.skills);
  const hasSkills = hasAnySkills(allGroupedSkills);

  const hasArchivedModules: boolean = courseData.modules.some(
    (moduleKey) => moduleDatabaseMap[moduleKey].archived,
  );

  return (
    <main>
      <div>
        <h2>{courseData.name}</h2>

        <div className="flex flex-col items-center md:flex-row">
          {courseData.logo && (
            <div className="h-[75px] w-[75px] rounded-full shadow-md transition-all duration-500 ease-in-out">
              <AspectRatio
                ratio={1 / 1}
                className="relative w-full overflow-hidden rounded-full bg-white"
              >
                <Image
                  src={courseData.logo}
                  alt={`Logo for ${courseData.name}`}
                  fill={true}
                  className="rounded-full object-cover shadow-sm transition-all duration-500 ease-in-out"
                  quality={30}
                  priority
                />
              </AspectRatio>
            </div>
          )}

          {/* University Name */}
          <div className="flex h-full items-center justify-center lg:justify-start">
            <p className="mt-4 text-center font-bold text-2xl text-neutral-600 lg:mt-0 lg:ml-8 lg:text-left dark:text-neutral-300">
              {courseData.university}
            </p>
          </div>
        </div>

        <div className="material-sections-wrapper mt-10">
          <Card>
            <CardContent className="-mt-4 py-5">
              {/* Category  */}
              <p className="mt-8 text-center text-2xl text-neutral-700 lg:text-left dark:text-neutral-200">
                {courseData.category}
              </p>
              {/* Dates */}
              {/* <p className="text-center lg:text-left text-neutral-500 dark:text-neutral-400 italic">{`${courseData.startYear} - ${courseData.endYear}`}</p> */}
              {/* Grade */}
              {courseData.grade && (
                <div className="flex w-full justify-center space-x-1 py-4 text-neutral-800 text-xl lg:justify-start dark:text-neutral-300">
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
              {hasArchivedModules && <CourseArchiveToggle />}

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
          {hasSkills && (
            <Card>
              <CardContent className="py-7">
                <SkillTableSection allGroupedSkills={allGroupedSkills} />
              </CardContent>
            </Card>
          )}

          {courseData.certificate || hasRelatedMaterials ? (
            <Accordion type="single" collapsible>
              {/* Certificate Section */}
              {!!courseData.certificate && (
                <AccordionItem value="item-2">
                  {courseData.certificate && (
                    <>
                      <AccordionTrigger>
                        <div className="flex items-center space-x-3">
                          <IoReaderOutline
                            size={26}
                            className="text-neutral-500"
                          />
                          <p className="font-semibold text-lg text-neutral-600 dark:text-neutral-400">
                            Certificate
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="flex items-center justify-center px-2">
                        <div className="w-full rounded-xl bg-neutral-100 p-1 transition-all duration-500 ease-in-out lg:w-1/2 lg:p-3 dark:bg-neutral-950">
                          <AspectRatio
                            ratio={1 / 1.4}
                            className="relative overflow-hidden"
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
              )}

              {/* Related Materials Section */}
              {hasRelatedMaterials && (
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="flex items-center space-x-3">
                      <GrAppsRounded size={25} className="text-neutral-500" />
                      <p className="font-semibold text-lg text-neutral-600 dark:text-neutral-400">
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
              )}
            </Accordion>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
