import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import MaterialList from "@/components/MaterialLists/MaterialList";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import DetailsTable from "@/components/UI/DetailsTable";
import PageDescription from "@/components/UI/PageDescription";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import certificateDatabase from "@/database/certificates";
import companyDatabase from "@/database/companies";
import rolesDatabase from "@/database/roles";
import skillDatabase from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import CompanyInterface from "@/interfaces/material/CompanyInterface";
import RoleInterface from "@/interfaces/material/RoleInterface";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import type { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { RxTriangleRight } from "react-icons/rx";

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
    title: `${developerName} - Roles: ${role?.name}`,
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
 * @param props The props for the work experience page.
 * @returns Content of the work experience page.
 */
const BlogPage: React.FC<RolePageProps> = ({ params }) => {
  const roleKey: string = params.roleKey;
  const roleData: RoleInterface = rolesDatabase[roleKey];
  const companyData: CompanyInterface = companyDatabase[roleData.company];

  if (!roleData) {
    notFound();
  }

  const technologies: SkillKeysEnum[] = filterSkillsByType(
    roleData.skills,
    skillDatabase,
    SkillTypesEnum.Hard
  );
  const generalSkills: SkillKeysEnum[] = filterSkillsByType(
    roleData.skills,
    skillDatabase,
    SkillTypesEnum.General
  );
  const softSkills: SkillKeysEnum[] = filterSkillsByType(
    roleData.skills,
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

  //TODO: Add link to company page
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
            <div>
              <ul className="list-none text-lg">
                {roleData.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex mb-1.5">
                    <div className="mr-2 mt-1.5">
                      <RxTriangleRight />
                    </div>
                    <div className="text-neutral-800 dark:text-neutral-300">
                      {responsibility}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      <div className="mt-4">
        <SkillTableSection allGroupedSkills={allGroupedSkills} />
      </div>

      {companyData.website && (
        <Link href={companyData.website} target="_blank" className="w-full">
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

      {roleData.relatedMaterials && roleData.relatedMaterials.length > 0 && (
        <>
          <div className="border-b border-gray-200 dark:border-neutral-600 pb-4" />
          <PageDescription
            description={`List of material directly related to ${certificateDatabase.name}`}
          />
          <MaterialList materialKeys={roleData.relatedMaterials} />
        </>
      )}
    </div>
  );
};

export default BlogPage;
