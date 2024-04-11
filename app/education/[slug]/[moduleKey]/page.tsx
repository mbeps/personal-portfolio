import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import developerName from "@/constants/developerName";
import moduleDatabase from "@/database/modules";
import skillDatabase from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import UniversityModuleInterface from "@/interfaces/material/UniversityModuleInterface";
import { ResolvingMetadata, Metadata } from "next";
import { notFound } from "next/navigation";
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
  const allGroupedSkills = [
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
