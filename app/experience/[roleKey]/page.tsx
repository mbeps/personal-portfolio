import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import MaterialList from "@/components/MaterialLists/MaterialList";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import StringList from "@/components/Text/StringList";
import DetailsTable from "@/components/UI/DetailsTable";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import { EXPERIENCE_PAGE } from "@/constants/pages";
import companyDatabaseMap from "@/database/Companies/CompanyDatabaseMap";
import CompanyInterface from "@/database/Companies/CompanyInterface";
import rolesDatabase from "@/database/Roles/RoleDatabaseMap";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import RoleInterface from "@/database/Roles/RoleInterface";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowUpRightCircle } from "react-icons/bs";

type RolePageProps = {
  params: { roleKey: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

/**
 * Generates the metadata for the work experience page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the blog page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export async function generateMetadata(
  { params, searchParams }: RolePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const roleKey: string = params.roleKey;
  const role: RoleInterface = rolesDatabase[roleKey];

  return {
    title: `${developerName} - ${EXPERIENCE_PAGE.label}: ${role?.name}`,
    description: `${role.type} ${role.name} at ${role?.company}`,
  };
}

/**
 * Generates the metadata for the work experience page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the work experience page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the work experience page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const generateStaticParams = async () => {
  return Object.keys(rolesDatabase).map((roleKey) => ({
    roleKey,
  }));
};

/**
 * Page displaying the details about my work experience.
 * This would show the specific things I have done in the past.
 *
 * The page also displays:
 * - The skills covered in the role
 * - Related materials
 *
 * @param props The props for the work experience page.
 * @returns Content of the work experience page.
 */
const RolePage: React.FC<RolePageProps> = ({ params }) => {
  const roleKey: string = params.roleKey;
  const roleData: RoleInterface = rolesDatabase[roleKey];
  const companyData: CompanyInterface = companyDatabaseMap[roleData.company];

  if (!roleData) {
    notFound();
  }

  const technologies: SkillDatabaseKeys[] = filterSkillsByType(
    roleData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Technology
  );
  const generalSkills: SkillDatabaseKeys[] = filterSkillsByType(
    roleData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Technical
  );
  const softSkills: SkillDatabaseKeys[] = filterSkillsByType(
    roleData.skills,
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
    <div>
      <HeadingTwo title={roleData?.name} />

      {companyData.logo && companyData.website && (
        <div className="flex items-center justify-center">
          <div
            className="
              rounded-full 
              shadow-lg 
              p-1.5 bg-neutral-300 dark:bg-neutral-800
              transition-all duration-500 ease-in-out
              w-[90px] h-[90px]
              hover:scale-105 hover:shadow-xl
  "
          >
            <Link href={companyData.website} target="_blank">
              <AspectRatio
                ratio={1 / 1}
                className="overflow-hidden relative w-full bg-white rounded-full"
              >
                <Image
                  src={companyData.logo}
                  alt={`Logo for ${companyData.name}`}
                  fill={true}
                  className="
                rounded-full 
                shadow-lg object-cover
                transition-all duration-500 ease-in-out
        "
                  quality={30}
                  loading="eager"
                  priority
                />
              </AspectRatio>
            </Link>
          </div>
        </div>
      )}

      {/* Details */}
      <div className="text-center lg:text-left">
        <HeadingThree title="Details" />
      </div>
      <DetailsTable
        details={[
          { heading: "Company", value: companyData.name },
          { heading: "Location", value: companyData.location },
          { heading: "Type", value: roleData.type },
          { heading: "Category", value: roleData.category },
          { heading: "Start Date", value: roleData.startDate },
          {
            heading: "End Date",
            value: roleData.endDate,
          },
        ]}
      />

      {/* Learning Outcomes */}
      <div className="mt-4">
        {/* Responsibilities ID */}
        {roleData.responsibilities && (
          <>
            <div className="text-center lg:text-left">
              <HeadingThree title="Responsibilities" />
            </div>
            <StringList items={roleData.responsibilities} />
          </>
        )}
      </div>

      <div className="mt-4">
        <SkillTableSection allGroupedSkills={allGroupedSkills} />
      </div>

      <div className="mt-4">
        {companyData.website && (
          <Link
            href={companyData.website}
            target="_blank"
            className="w-full flex justify-center md:justify-start"
          >
            <Button>
              <div
                className="
                  flex
                  justify-center md:justify-start
                  align-center
                  gap-4
                  w-full
                "
              >
                <BsArrowUpRightCircle size={26} />
                <p>{`${companyData.name} website`}</p>
              </div>
            </Button>
          </Link>
        )}
      </div>

      {roleData.relatedMaterials && roleData.relatedMaterials.length > 0 && (
        <>
          <MaterialList
            materialKeys={roleData.relatedMaterials}
            sectionName={roleData.name}
          />
        </>
      )}
    </div>
  );
};

export default RolePage;
