import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import MaterialList from "@/components/MaterialLists/MaterialList";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingFour from "@/components/Text/HeadingFour";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import PageDescription from "@/components/UI/PageDescription";
import DetailsTable from "@/components/UI/DetailsTable";
import developerName from "@/constants/developerName";
import { EXPERIENCE_PAGE } from "@/constants/pages";
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
import { notFound } from "next/navigation";
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

  return (
    <div>
      <div className="text-center">
        <HeadingTwo title={roleData?.name} />
      </div>

      {/* Details */}
      <HeadingThree title="Details" />
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
