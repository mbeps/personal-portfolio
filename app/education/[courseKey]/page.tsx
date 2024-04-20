import generateUrl from "@/actions/generateUrl";
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
import PageDescription from "@/components/UI/PageDescription";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabase from "@/database/courses";
import moduleDatabase, { moduleKeys } from "@/database/modules";
import skillDatabase from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import UniversityModuleKeysEnum from "@/enums/DatabaseKeysEnums/UniversityModuleKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import UniversityCourseInterface from "@/interfaces/material/UniversityCourseInterface";
import UniversityModuleInterface from "@/interfaces/material/UniversityModuleInterface";
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
  const course: UniversityCourseInterface = courseDatabase[courseKey];

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
  return Object.keys(courseDatabase).map((courseKey) => ({
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
 * @param props Details about the page
 * @returns The course page
 */
const CoursesPage: React.FC<CoursesPageProps> = ({ params, searchParams }) => {
  const courseKey: string = params.courseKey;
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
    SkillTypesEnum.Technology
  );
  const generalSkills: SkillKeysEnum[] = filterSkillsByType(
    courseData.skills,
    skillDatabase,
    SkillTypesEnum.Technical
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
      SkillTypesEnum.Technology,
      "Technologies"
    ),
    categoriseAndGroupSkills(
      generalSkills,
      skillDatabase,
      SkillTypesEnum.Technical,
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
            <MaterialList
              materialKeys={courseData.relatedMaterials}
              sectionName={courseData.name}
            />
          </>
        )}
    </div>
  );
};

export default CoursesPage;
