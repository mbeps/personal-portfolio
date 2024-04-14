import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabase from "@/database/courses";
import UniversityCourseInterface from "@/interfaces/material/UniversityCourseInterface";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeadingTwo from "@/components/Text/HeadingTwo";
import HeadingThree from "@/components/Text/HeadingThree";
import groupMaterialsByCategory from "@/actions/material/group/groupMaterialsByCategory";
import moduleDatabase from "@/database/modules";
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

type CoursesPageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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

export const generateStaticParams = async () => {
  return Object.keys(courseDatabase).map((slug) => ({
    slug,
  }));
};

const CoursesPage: React.FC<CoursesPageProps> = ({ params }) => {
  const courseKey: string = params.slug;
  const courseData: UniversityCourseInterface = courseDatabase[courseKey];
  const basePath: string = EDUCATION_PAGE.path;

  if (!courseData) {
    notFound();
  }

  const courseImage = `${basePath}/${courseKey}.jpg`;

  const groupedModules: MaterialGroupInterface[] = groupMaterialsByCategory(
    courseData.modules,
    moduleDatabase
  );

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

  //TODO: Hide archived modules by default
  return (
    <div className="">
      <HeadingTwo title={courseData.name} />

      <div
        className="
					grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col-reverse 
					p-2 space-x-6"
      >
        <div
          className="
						rounded-xl
						transition-all duration-500 ease-in-out
						p-3
						bg-neutral-100 dark:bg-neutral-950  
			"
        >
          {/* Left */}
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

      {/* Modules */}
      <HeadingThree title="Modules" />
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
