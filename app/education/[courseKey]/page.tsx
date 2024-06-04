import filterMaterialByArchivedStatus from "@/actions/material/filter/filterMaterialByArchivedStatus";
import groupMaterialsByCategory from "@/actions/material/group/groupMaterialsByCategory";
import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import MaterialList from "@/components/MaterialLists/MaterialList";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import Tag from "@/components/Tags/Tag";
import HeadingFour from "@/components/Text/HeadingFour";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import Grid from "@/components/UI/Grid";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabaseMap from "@/database/Courses/CourseDatabaseMap";
import CourseInterface from "@/database/Courses/CourseInterface";
import ModuleDatabaseKeys from "@/database/Modules/ModuleDatabaseKeys";
import moduleDatabaseMap, {
  moduleDatabaseKeys,
} from "@/database/Modules/ModuleDatabaseMap";
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

type CoursesPageProps = {
  params: { courseKey: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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
  { params, searchParams }: CoursesPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const courseKey: string = params.courseKey;
  const course: CourseInterface = courseDatabaseMap[courseKey];

  // Create metadata based on the course details
  return {
    title: `${developerName} - Courses: ${course?.name}`,
    description: `${course.grade} in ${course.name} from ${course?.university}`,
  };
}

/**
 * Generates the static paths for the courses.
 * These are then used to pre-render the courses pages.
 * This Incremental Static Regeneration allows the courses to be displayed without a server.
 * This improves the performance of the website.
 *
 * @returns A list of all the keys for the static pages that need to be generated.
 * @see https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
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
const CoursesPage: React.FC<CoursesPageProps> = ({ params, searchParams }) => {
  const courseKey: string = params.courseKey;
  const courseData: CourseInterface = courseDatabaseMap[courseKey];
  const basePath: string = EDUCATION_PAGE.path;

  if (!courseData) {
    notFound();
  }

  const courseImage = `${basePath}/${courseKey}.jpg`;

  const showArchived: boolean = (searchParams.archived || "false") === "true";

  let filteredModules: ModuleDatabaseKeys[] = moduleDatabaseKeys;
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

  return (
    <main>
      <div className="sr-only">
        <h1>{courseData.name}</h1>
        <h2>{`${courseData.grade} in ${courseData.name} from ${courseData?.university}`}</h2>
        {/* list of modules */}
        <h3>Modules:</h3>
        <ul>
          {courseData.modules.map((module) => (
            <li key={module}>{`${moduleDatabaseMap[module].name}`}</li>
          ))}
        </ul>
      </div>

      <div>
        <HeadingTwo title={courseData.name} />

        <div
          className="
					grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col-reverse 
					space-x-0 lg:space-x-6"
        >
          {/* Left */}
          <div
            className="
						rounded-xl
						transition-all duration-500 ease-in-out
						p-1 lg:p-3
						bg-neutral-100 dark:bg-neutral-950  
			"
          >
            <AspectRatio ratio={1 / 1.4} className="overflow-hidden relative">
              <Image
                src={courseImage}
                key={courseImage}
                alt={`${courseData.name} cover image`}
                fill={true}
                loading="lazy"
                quality={15}
                className="
                rounded-xl 
                object-cover
					"
              />
            </AspectRatio>
          </div>

          {/* Right */}
          <div className="py-2">
            <HeadingThree title={courseData.university} />

            <p className="text-2xl text-neutral-700 dark:text-neutral-200 -mt-4">
              {courseData.category}
            </p>
            <p>{`${courseData.startYear} - ${courseData.endYear}`}</p>

            <div
              className="
							py-4
							flex space-x-1 w-full
							text-xl text-neutral-800 dark:text-neutral-300
					"
            >
              <p className="font-bold">Grade:</p>
              <p>{courseData.grade}</p>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <HeadingThree title="Modules" />
        </div>

        {/* Archive Toggle */}
        <ArchiveToggle
          showArchived={showArchived}
          filterProps={[]}
          basePath={`${basePath}/${courseKey}`}
        />
        {/* Modules */}
        {groupedModules.map((group, index) => (
          <div key={index} className="mb-4">
            <HeadingFour title={group.groupName} />
            <Grid
              gap={1}
              items={group.materialsKeys.map((moduleKey, idx) => (
                <Link href={`${basePath}/${courseKey}/${moduleKey}`} key={idx}>
                  <Tag hasHover>{moduleDatabaseMap[moduleKey].name}</Tag>
                </Link>
              ))}
            />
          </div>
        ))}

        {/* Skills */}
        <SkillTableSection allGroupedSkills={allGroupedSkills} />

        {courseData.relatedMaterials &&
          courseData.relatedMaterials.length > 0 && (
            <>
              <MaterialList
                materialKeys={courseData.relatedMaterials}
                sectionName={courseData.name}
              />
            </>
          )}
      </div>
    </main>
  );
};

export default CoursesPage;
