import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowUpRightCircle } from "react-icons/bs";
import ShortDate from "@/class/ShortDate";
import MaterialList from "@/components/material-lists/MaterialList";
import Reader from "@/components/reader/Reader";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import SkillTableSection from "@/components/skills/SkillTableSection";
import DetailsTable from "@/components/ui/DetailsTable";
import developerName from "@/constants/developerName";
import { PATHS } from "@/constants/paths";
import { ROUTES } from "@/constants/routes";
import companyDatabaseMap from "@/database/companies/CompanyDatabaseMap";
import type CompanyInterface from "@/database/companies/CompanyInterface";
import type RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import rolesDatabase from "@/database/roles/RoleDatabaseMap";
import type RoleInterface from "@/database/roles/RoleInterface";
import type ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";
import getMarkdownFromFileSystem from "@/lib/file-system/getMarkdownFromFileSystem";
import buildSkillTableGroups from "@/lib/skills/group/buildSkillTableGroups";
import hasAnySkills from "@/lib/skills/hasAnySkills";

type Params = Promise<{ roleKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

/**
 * Builds metadata for a role detail route so the company, title, and type are exposed in head tags.
 * Role keys map to folders under `public/roles/{roleKey}` where markdown responsibilities and assets live.
 *
 * @param props Params promise supplied by Next.
 * @param parent Parent metadata from the layout.
 * @returns Metadata populated from the role entry.
 */
export async function generateMetadata(
  props: { params: Params; searchParams: SearchParams },
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const resolvedParams = await props.params;
  const roleKey: string = resolvedParams.roleKey;
  const role: RoleInterface = rolesDatabase[roleKey];

  if (!role) {
    notFound();
  }

  const company: CompanyInterface = companyDatabaseMap[role.company];

  return {
    title: `${developerName} - ${ROUTES.EXPERIENCE.name}: ${role?.name} at ${company.name}`,
    description: `${role.type} ${role.name} at ${company.name}`,
    category: `${ROUTES.EXPERIENCE.name}`,
    creator: developerName,
    keywords: [role.name, company.name],
  };
}

/**
 * Exposes every role key for static generation so `public/roles/{key}` folders become routable experience pages.
 *
 * @returns Params for each role detail route.
 */
export const generateStaticParams = async () => {
  return Object.keys(rolesDatabase).map((roleKey) => ({
    roleKey,
  }));
};

/**
 * Role detail page that combines company metadata, markdown responsibilities, skill tables, and related work pulled from the static DB.
 * Gives recruiters and readers a deep dive into each engagement while keeping layout parity with course and certificate pages.
 *
 * @param params Role slug selected from the experience list.
 * @returns Experience detail view with responsibilities and related materials.
 */
const RolePage: React.FC<{ params: Params }> = async ({ params }) => {
  const resolvedParams = await params;
  const roleKey: RoleDatabaseKeys = resolvedParams.roleKey as RoleDatabaseKeys;
  const roleData: RoleInterface = rolesDatabase[roleKey];

  if (!roleData) {
    notFound();
  }

  const companyData: CompanyInterface = companyDatabaseMap[roleData.company];

  const currentDate: ShortDate = new ShortDate(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
  );
  const endDate: string =
    roleData.endDate.difference(currentDate) === 0
      ? "Present"
      : roleData.endDate.toString();

  const allGroupedSkills: ListOfCategorisedSkillsByTypeInterface[] =
    buildSkillTableGroups(roleData.skills);
  const hasSkills = hasAnySkills(allGroupedSkills);

  const responsibilities: string | null = getMarkdownFromFileSystem(
    PATHS.ROLES(roleKey).RESPONSIBILITIES,
  );

  const hasResponsibilities: boolean = !!responsibilities;

  return (
    <main>
      <div>
        <h2>{roleData?.name}</h2>

        {companyData.logo && (
          <div className="my-12 flex flex-col items-center justify-center md:flex-row">
            {companyData.logo && companyData.website && (
              <div className="h-[90px] w-[90px] rounded-full bg-neutral-300 p-1.5 shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl dark:bg-neutral-800 dark:hover:bg-red-800">
                <Link href={companyData.website} target="_blank">
                  <AspectRatio
                    ratio={1 / 1}
                    className="relative w-full overflow-hidden rounded-full bg-white"
                  >
                    <Image
                      src={companyData.logo}
                      alt={`Logo for ${companyData.name}`}
                      fill={true}
                      className="rounded-full object-cover shadow-lg transition-all duration-500 ease-in-out"
                      quality={30}
                      loading="eager"
                      priority
                    />
                  </AspectRatio>
                </Link>
              </div>
            )}

            <div className="flex h-full items-center">
              {companyData.website ? (
                <p className="mt-4 text-left font-bold text-2xl text-neutral-600 transition-all duration-300 ease-in-out hover:text-red-700 lg:mt-0 lg:ml-8 dark:text-neutral-300 dark:hover:text-red-300">
                  <Link
                    href={companyData.website}
                    target="_blank"
                    className="h-full"
                  >
                    {companyData.name}
                  </Link>
                </p>
              ) : (
                <p className="mt-4 text-left font-bold text-2xl text-neutral-600 lg:mt-0 lg:ml-8 dark:text-neutral-300">
                  {companyData.name}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Details */}
        <div className="material-sections-wrapper">
          <Card>
            <CardHeader>
              <CardTitle className="text-center md:text-left">
                <h3>Details</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DetailsTable
                details={[
                  { heading: "Location", value: companyData.location },
                  { heading: "Type", value: roleData.type },
                  { heading: "Category", value: roleData.category },
                  { heading: "Time in Role", value: roleData.timeInRole || "" },
                  {
                    heading: "Start Date",
                    value: roleData.startDate.toString(),
                  },
                  { heading: "End Date", value: endDate },
                ]}
              />
            </CardContent>
          </Card>

          {/* Responsibilities */}
          {hasResponsibilities && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center md:text-left">
                  <h3>Responsibilities</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="-mt-6">
                  <Reader content={responsibilities} size="base" />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Skills section */}
          {hasSkills && (
            <Card>
              <CardContent className="py-7">
                <SkillTableSection allGroupedSkills={allGroupedSkills} />
              </CardContent>
            </Card>
          )}

          {companyData.website && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center md:text-left">
                  <h3>Links</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={companyData.website}
                  target="_blank"
                  className="flex w-full justify-center md:justify-start"
                >
                  <Button>
                    <div className="flex w-full justify-center gap-4 align-center md:justify-start">
                      <BsArrowUpRightCircle size={26} />
                      <p>{`${companyData.name} website`}</p>
                    </div>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}

          {/* Related Materials */}
          {roleData.relatedMaterials &&
            roleData.relatedMaterials.length > 0 && (
              <MaterialList materialKeys={roleData.relatedMaterials} />
            )}
        </div>
      </div>
    </main>
  );
};

export default RolePage;
