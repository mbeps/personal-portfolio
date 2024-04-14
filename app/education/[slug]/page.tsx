import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabase, { courseKeys } from "@/database/courses";
import UniversityCourseInterface from "@/interfaces/material/UniversityCourseInterface";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeadingTwo from "@/components/Text/HeadingTwo";
import HeadingThree from "@/components/Text/HeadingThree";
import groupMaterialsByCategory from "@/actions/material/group/groupMaterialsByCategory";
import moduleDatabase, { moduleKeys } from "@/database/modules";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import Tag from "@/components/Tags/Tag";
import Grid from "@/components/UI/Grid";
import HeadingFour from "@/components/Text/HeadingFour";
import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import skillDatabase from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import MaterialList from "@/components/MaterialLists/MaterialList";
import filterMaterialByArchivedStatus from "@/actions/material/filter/filterMaterialByArchivedStatus";
import UniversityModuleKeysEnum from "@/enums/DatabaseKeysEnums/UniversityModuleKeysEnum";
import UniversityModuleInterface from "@/interfaces/material/UniversityModuleInterface";
import generateUrl from "@/actions/generateUrl";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";

type CoursesPageProps = {
  params: { slug: string };
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
  const courseKey: string = params.slug;
  const course: UniversityCourseInterface = courseDatabase[courseKey];

  // Create metadata based on the course details
  return {
    title: `${developerName} - Courses: ${course?.name}`,
    description: course?.university,
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
  return Object.keys(courseDatabase).map((slug) => ({
    slug,
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
 * @param props Details about the page
 * @returns The course page
 */
const CoursesPage: React.FC<CoursesPageProps> = ({ params, searchParams }) => {
  const courseKey: string = params.slug;
  const courseData: UniversityCourseInterface = courseDatabase[courseKey];
  const basePath: string = EDUCATION_PAGE.path;

  if (!courseData) {
    notFound();
  }

  const courseImage = `${basePath}/${courseKey}.jpg`;

  const showArchived: boolean = (searchParams.archived || "false") === "true";

  let filteredModules: UniversityModuleKeysEnum[] = moduleKeys;
  filteredModules = filterMaterialByArchivedStatus<UniversityModuleInterface>(
    showArchived,
    filteredModules,
    moduleDatabase
  ) as UniversityModuleKeysEnum[];

  const groupedModules: MaterialGroupInterface[] = groupMaterialsByCategory(
    filteredModules,
    moduleDatabase
  );

  //^ Skills
  const technologies: SkillKeysEnum[] = filterSkillsByType(
    courseData.skills,
    skillDatabase,
    SkillTypesEnum.Hard
  );
  const generalSkills: SkillKeysEnum[] = filterSkillsByType(
    courseData.skills,
    skillDatabase,
    SkillTypesEnum.General
  );
  const softSkills: SkillKeysEnum[] = filterSkillsByType(
    courseData.skills,
    skillDatabase,
    SkillTypesEnum.Soft
  );

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

  return (
    <div className="">
      <HeadingTwo title={courseData.name} />

      <div
        className="
					grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col-reverse 
					p-2 space-x-0 lg:space-x-6"
      >
        {/* Left */}
        <div
          className="
						rounded-xl
						transition-all duration-500 ease-in-out
						p-3
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

      <HeadingThree title="Modules" />
      <ArchiveToggle
        generateUrl={generateUrl}
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
                <Tag hasHover>{moduleDatabase[moduleKey].name}</Tag>
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
            <div className="border-b border-gray-200 dark:border-neutral-600 pb-4" />
            <MaterialList materialKeys={courseData.relatedMaterials} />
          </>
        )}
    </div>
  );
};

export default CoursesPage;
