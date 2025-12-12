import { EXPERIENCE_PAGE } from "@/constants/pages";
import companyDatabaseMap from "@/database/companies/CompanyDatabaseMap";
import rolesDatabase from "@/database/roles/RoleDatabaseMap";
import CompanyInterface from "@/database/companies/CompanyInterface";
import RoleInterface from "@/database/roles/RoleInterface";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircle, BsInfoCircle } from "react-icons/bs";
import { AspectRatio } from "../shadcn/ui/aspect-ratio";
import { Tooltip, TooltipContent, TooltipTrigger } from "../shadcn/ui/tooltip";
import ShortDate from "@/class/ShortDate";

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
  const basePath: string = EXPERIENCE_PAGE.path;
  const roleData: RoleInterface = rolesDatabase[roleKey];
  const companyData: CompanyInterface = companyDatabaseMap[roleData.company];

  const rolePage: string = `${basePath}/${roleKey}`;

  const currentDate: ShortDate = new ShortDate(
    new Date().getFullYear(),
    new Date().getMonth() + 1
  );
  const endDate: string =
    roleData.endDate.difference(currentDate) === 0
      ? "Present"
      : roleData.endDate.toString();

  return (
    <div
      className="
        flex flex-col md:flex-row 
        p-4 space-x-0 md:space-x-8 space-y-2 md:space-y-0
        bg-neutral-100 dark:bg-neutral-800 rounded-xl
        transition-all duration-500 ease-in-out
        border border-neutral-300 dark:border-neutral-700
        shadow-md
        "
    >
      {/* Left Section */}
      <div className="flex items-center flex-col space-y-2">
        {/* Logo */}
        <div className="py-1 flex items-start justify-center md:justify-start">
          {companyData.logo && (
            <div
              className="
              rounded-full 
              transition-all duration-500 ease-in-out
              w-20 h-20 
              border-2 border-neutral-200 dark:border-neutral-900
              dark:hover:border-red-600
              hover:scale-105 hover:shadow-lg
              "
            >
              <Link href={rolePage}>
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
          )}
        </div>

        {/* Link to Credential Page */}
        <div className="hidden md:flex flex-row space-x-3">
          <Tooltip>
            <TooltipTrigger>
              <Link href={rolePage}>
                <BsInfoCircle
                  size={30}
                  className="md:hover:-translate-y-1 transition-transform cursor-pointer"
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
                    className="md:hover:-translate-y-1 transition-transform cursor-pointer"
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
      <div
        className="
          flex flex-col
          items-center md:items-start 
          space-y-4 md:space-y-2 sm:p-0
          ease-in-out
          rounded-xl 
          transition-colors duration-700 
          text-left
          "
      >
        <Link href={rolePage}>
          <h2
            className="               
              text-3xl md:text-3xl font-bold  
              md:hover:text-red-500 md:dark:hover:text-red-800
              transition-colors duration-700 ease-in-out
              text-center
              "
          >
            {roleData.name}
          </h2>
        </Link>
        <div
          className="
            flex flex-col md:flex-row
            space-x-0 md:space-x-4
            text-lg 
            mb-2 
            text-neutral-500 dark:text-neutral-400
            items-center justify-center md:justify-start
            "
        >
          {companyData.website ? (
            <Link
              href={companyData.website}
              target="_blank"
              className="
                font-bold
                hover:underline 
                hover:text-red-500 dark:hover:text-red-700
                transition-colors duration-300 ease-in-out"
            >
              {companyData.name}
            </Link>
          ) : (
            <span>{companyData.name}</span>
          )}
          {/* <span>{companyData.location}</span> */}
        </div>

        <div
          className="
            flex flex-col 
            justify-center md:justify-start 
            items-center md:items-start 
            space-y-2 md:space-y-0
            text-neutral-500 dark:text-neutral-400
          "
        >
          {/* Dates depend on the visitor's current time; suppress hydration warnings to avoid noise when the client re-computes the range. */}
          <p suppressHydrationWarning>{`${roleData.startDate} - ${endDate}`}</p>
          <p className="italic" suppressHydrationWarning>
            {roleData.timeInRole}
          </p>
        </div>

        <div
          className="
            flex flex-row 
            align-bottom 
            space-x-4
            pt-3
            md:hidden
            "
        >
          <Tooltip>
            <TooltipTrigger>
              <Link href={rolePage}>
                <BsInfoCircle
                  size={30}
                  className="md:hover:-translate-y-1 transition-transform cursor-pointer"
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
                    className="md:hover:-translate-y-1 transition-transform cursor-pointer"
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
