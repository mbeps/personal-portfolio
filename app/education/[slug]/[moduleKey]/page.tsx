import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/shadcn/ui/breadcrumb";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabase from "@/database/courses";
import moduleDatabase from "@/database/modules";
import skillDatabase from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import UniversityCourseInterface from "@/interfaces/material/UniversityCourseInterface";
import UniversityModuleInterface from "@/interfaces/material/UniversityModuleInterface";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import { Slash } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { RxTriangleRight } from "react-icons/rx";

type ModulePageProps = {
  params: { moduleKey: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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

export const generateStaticParams = async () => {
  return Object.keys(moduleDatabase).map((module) => ({
    module,
  }));
};

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

  return (
    <div>
      <HeadingTwo title={moduleData.name} />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`${EDUCATION_PAGE.path}/${moduleData.parentCourse}`}
            >
              {parentCourse.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>{moduleData.name}</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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

      {/* Level */}

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
    </div>
  );
};

export default ModulePage;
