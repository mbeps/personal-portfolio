import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import ShortDate from "@/class/ShortDate";
import MaterialList from "@/components/MaterialLists/MaterialList";
import Reader from "@/components/Reader/Reader";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import DetailsTable from "@/components/UI/DetailsTable";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import { EXPERIENCE_PAGE } from "@/constants/pages";
import companyDatabaseMap from "@/database/Companies/CompanyDatabaseMap";
import CompanyInterface from "@/database/Companies/CompanyInterface";
import rolesDatabase from "@/database/Roles/RoleDatabaseMap";
import RoleInterface from "@/database/Roles/RoleInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowUpRightCircle } from "react-icons/bs";

type Params = Promise<{ roleKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

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
  props: { params: Params; searchParams: SearchParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await props.params;
  const roleKey: string = resolvedParams.roleKey;
  const role: RoleInterface = rolesDatabase[roleKey];

  if (!role) {
    notFound();
  }

  const company: CompanyInterface = companyDatabaseMap[role.company];

  return {
    title: `${developerName} - ${EXPERIENCE_PAGE.label}: ${role?.name} at ${company.name}`,
    description: `${role.type} ${role.name} at ${company.name}`,
    category: `${EXPERIENCE_PAGE.label}`,
    creator: developerName,
    keywords: [role.name, company.name],
  };
}

/**
 * Generates the static params for roles.
 * These params are used to pre-render the role pages.
 *
 * @returns A list of all role keys for static page generation.
 */
export const generateStaticParams = async () => {
  return Object.keys(rolesDatabase).map((roleKey) => ({
    roleKey,
  }));
};

/**
 * Page displaying the details about a work experience role.
 * Shows specific responsibilities, skills, and related materials.
 *
 * @param props The props for the work experience page.
 * @returns Content of the work experience page.
 */
const RolePage: React.FC<{ params: Params }> = async ({ params }) => {
  const resolvedParams = await params;
  const roleKey: string = resolvedParams.roleKey;
  const roleData: RoleInterface = rolesDatabase[roleKey];

  if (!roleData) {
    notFound();
  }

  const companyData: CompanyInterface = companyDatabaseMap[roleData.company];

  const currentDate: ShortDate = new ShortDate(
    new Date().getFullYear(),
    new Date().getMonth() + 1
  );
  const endDate: string =
    roleData.endDate.difference(currentDate) === 0
      ? "Present"
      : roleData.endDate.toString();

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

  const responsibilities: string | undefined = getMarkdownFromFileSystem(
    `public/roles/${roleKey}/responsabilities.md`
  )?.content;

  const hasResponsibilities: boolean = !!responsibilities;

  return (
    <main>
      <div className="sr-only">
        <h1>{`${roleData.name} at ${roleData?.company}`}</h1>
        <h2>Responsibilities:</h2>
        <Reader content={responsibilities} size="lg:prose-lg" />

        <h3>Skills for work experience:</h3>
        {roleData.skills.map((skill) => (
          <p key={skill}>{skillDatabaseMap[skill].name}</p>
        ))}
      </div>

      <div>
        <HeadingTwo title={roleData?.name} />

        {companyData.logo && (
          <div className="flex items-center justify-center my-12 flex-col md:flex-row">
            {companyData.logo && companyData.website && (
              <div className="rounded-full shadow-lg p-1.5 bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-red-800 transition-all duration-500 ease-in-out w-[90px] h-[90px] hover:scale-105 hover:shadow-xl">
                <Link href={companyData.website} target="_blank">
                  <AspectRatio
                    ratio={1 / 1}
                    className="overflow-hidden relative w-full bg-white rounded-full"
                  >
                    <Image
                      src={companyData.logo}
                      alt={`Logo for ${companyData.name}`}
                      fill={true}
                      className="rounded-full shadow-lg object-cover transition-all duration-500 ease-in-out"
                      quality={30}
                      loading="eager"
                      priority
                    />
                  </AspectRatio>
                </Link>
              </div>
            )}

            <div className="h-full flex items-center">
              {companyData.website ? (
                <p className="text-left text-2xl font-bold mt-4 lg:mt-0 lg:ml-8 text-neutral-600 dark:text-neutral-300 hover:text-red-700 dark:hover:text-red-300 transition-all duration-300 ease-in-out">
                  <Link
                    href={companyData.website}
                    target="_blank"
                    className="h-full"
                  >
                    {companyData.name}
                  </Link>
                </p>
              ) : (
                <p className="text-left text-2xl font-bold mt-4 lg:mt-0 lg:ml-8 text-neutral-600 dark:text-neutral-300">
                  {companyData.name}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Details */}
        <div className="space-y-24">
          <div className="space-y-4">
            <div className="text-center lg:text-left">
              <HeadingThree title="Details" />
            </div>
            <DetailsTable
              details={[
                { heading: "Location", value: companyData.location },
                { heading: "Type", value: roleData.type },
                { heading: "Category", value: roleData.category },
                { heading: "Time in Role", value: roleData.timeInRole || "" },
                { heading: "Start Date", value: roleData.startDate.toString() },
                { heading: "End Date", value: endDate },
              ]}
            />
          </div>

          <div>
            {/* Responsibilities ID */}
            {hasResponsibilities && (
              <>
                <div className="text-center lg:text-left">
                  <HeadingThree title="Responsibilities" />
                </div>
                <Reader content={responsibilities} size="lg:prose-lg" />
              </>
            )}
          </div>

          {/* Skills section */}
          <div>
            <SkillTableSection allGroupedSkills={allGroupedSkills} />
          </div>

          <div>
            {companyData.website && (
              <Link
                href={companyData.website}
                target="_blank"
                className="w-full flex justify-center md:justify-start"
              >
                <Button>
                  <div className="flex justify-center md:justify-start align-center gap-4 w-full">
                    <BsArrowUpRightCircle size={26} />
                    <p>{`${companyData.name} website`}</p>
                  </div>
                </Button>
              </Link>
            )}

            {/* More materials */}
            {roleData.relatedMaterials &&
              roleData.relatedMaterials.length > 0 && (
                <MaterialList materialKeys={roleData.relatedMaterials} />
              )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RolePage;
