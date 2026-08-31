import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircle, BsInfoCircle } from "react-icons/bs";
import ShortDate from "@/class/short-date";
import { ROUTES } from "@/constants/routes";
import companyDatabaseMap from "@/database/companies/company-database-map";
import type CompanyInterface from "@/database/companies/company-interface";
import rolesDatabase from "@/database/roles/role-database-map";
import type RoleInterface from "@/database/roles/role-interface";
import { AspectRatio } from "../shadcn/ui/aspect-ratio";
import { Tooltip, TooltipContent, TooltipTrigger } from "../shadcn/ui/tooltip";

interface WorkItemProps {
  roleKey: string;
}

/**
 * Standard role card used across the experience list and related material tabs, tying in company metadata and CTA links.
 * Helps keep the timeline view and detail pages visually aligned while surfacing quick facts like dates and time in role.
 *
 * @param roleKey Role slug from the static roles database.
 * @returns Responsive card with company logo, dates, and quick links.
 */
const WorkItem: React.FC<WorkItemProps> = ({ roleKey }) => {
  const basePath: string = ROUTES.EXPERIENCE.path;
  const roleData: RoleInterface = rolesDatabase[roleKey];
  const companyData: CompanyInterface = companyDatabaseMap[roleData.company];

  const rolePage: string = `${basePath}/${roleKey}`;

  const currentDate: ShortDate = new ShortDate(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
  );
  const endDate: string =
    roleData.endDate.difference(currentDate) === 0
      ? "Present"
      : roleData.endDate.toString();

  return (
    <div className="flex flex-col space-x-0 space-y-2 rounded-xl border border-neutral-300 bg-neutral-100 p-4 shadow-sm transition-all duration-500 ease-in-out md:flex-row md:space-x-8 md:space-y-0 dark:border-neutral-700 dark:bg-neutral-800">
      {/* Left Section */}
      <div className="flex flex-col items-center space-y-2">
        {/* Logo */}
        <div className="flex items-start justify-center py-1 md:justify-start">
          {companyData.logo && (
            <div className="h-20 w-20 rounded-full border-2 border-neutral-200 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg dark:border-neutral-900 dark:hover:border-red-600">
              <Link href={rolePage}>
                <AspectRatio
                  ratio={1 / 1}
                  className="relative w-full overflow-hidden rounded-full bg-white"
                >
                  <Image
                    src={companyData.logo}
                    alt={`Logo for ${companyData.name}`}
                    fill={true}
                    sizes="80px"
                    className="rounded-full object-cover shadow-lg transition-all duration-500 ease-in-out"
                    quality={30}
                    loading="eager"
                    priority
                  />
                </AspectRatio>
              </Link>
            </div>
          )}
        </div>

        {/* Link to Credential Page */}
        <div className="hidden flex-row space-x-3 md:flex">
          <Tooltip>
            <TooltipTrigger>
              <Link href={rolePage}>
                <BsInfoCircle
                  size={30}
                  className="cursor-pointer transition-transform md:hover:-translate-y-1"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Role Details </p>
            </TooltipContent>
          </Tooltip>
          {/* Link to Credential */}
          {companyData.website && (
            <Tooltip>
              <TooltipTrigger>
                <Link href={companyData.website} target="_blank">
                  <BsArrowUpRightCircle
                    size={30}
                    className="cursor-pointer transition-transform md:hover:-translate-y-1"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Navigate to company website</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center space-y-4 rounded-xl text-left transition-colors duration-700 ease-in-out sm:p-0 md:items-start md:space-y-2">
        <Link href={rolePage}>
          <h2 className="text-center font-bold text-3xl transition-colors duration-700 ease-in-out md:text-3xl md:hover:text-red-500 md:dark:hover:text-red-800">
            {roleData.name}
          </h2>
        </Link>
        <div className="mb-2 flex flex-col items-center justify-center space-x-0 text-lg text-neutral-500 md:flex-row md:justify-start md:space-x-4 dark:text-neutral-400">
          {companyData.website ? (
            <Link
              href={companyData.website}
              target="_blank"
              className="font-bold transition-colors duration-300 ease-in-out hover:text-red-500 hover:underline dark:hover:text-red-700"
            >
              {companyData.name}
            </Link>
          ) : (
            <span>{companyData.name}</span>
          )}
          {/* <span>{companyData.location}</span> */}
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 text-neutral-500 md:items-start md:justify-start md:space-y-0 dark:text-neutral-400">
          {/* Dates depend on the visitor's current time; suppress hydration warnings to avoid noise when the client re-computes the range. */}
          <p suppressHydrationWarning>{`${roleData.startDate} - ${endDate}`}</p>
          <p className="italic" suppressHydrationWarning>
            {roleData.timeInRole}
          </p>
        </div>

        <div className="flex flex-row space-x-4 pt-3 align-bottom md:hidden">
          <Tooltip>
            <TooltipTrigger>
              <Link href={rolePage}>
                <BsInfoCircle
                  size={30}
                  className="cursor-pointer transition-transform md:hover:-translate-y-1"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Role Details </p>
            </TooltipContent>
          </Tooltip>
          {/* Link to Credential */}
          {companyData.website && (
            <Tooltip>
              <TooltipTrigger>
                <Link href={companyData.website} target="_blank">
                  <BsArrowUpRightCircle
                    size={30}
                    className="cursor-pointer transition-transform md:hover:-translate-y-1"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Company Site</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
