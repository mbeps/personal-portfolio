import { EXPERIENCE_PAGE } from "@/constants/pages";
import companyDatabaseMap from "@/database/Companies/CompanyDatabaseMap";
import rolesDatabase from "@/database/Roles/RoleDatabaseMap";
import CompanyInterface from "@/database/Companies/CompanyInterface";
import RoleInterface from "@/database/Roles/RoleInterface";
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
 * Card which displays a role/work entry with quick information.
 * Contains:
 * - Name of the role
 * - Company name (with link to company website)
 * - Location of the company
 * - Date range of the role
 * - Logo of the company
 * - Link to the role page
 * - Link to the company website
 *
 * @param roleKey Key of the role to be displayed
 * @returns A card which displays a role
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
      <div className="flex items-center justify-center flex-col space-y-4">
        {/* Logo */}
        <div className="py-3 flex items-start justify-center md:justify-start">
          {companyData.logo && (
            <div
              className="
              rounded-full 
              transition-all duration-500 ease-in-out
              w-[85px] h-[85px] lg:w-[100px] lg:h-[100px] 
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

      {/* Details */}
      <div
        className="
          flex flex-col
          items-center md:items-start 
          space-y-4 md:space-y-3 sm:p-0
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
                hover:text-red-500 hover:dark:text-red-700
                transition-colors duration-300 ease-in-out"
            >
              {companyData.name}
            </Link>
          ) : (
            <span>{companyData.name}</span>
          )}
          <span>{companyData.location}</span>
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
          <p>{`${roleData.startDate} - ${endDate}`}</p>
          <p className="italic">{roleData.timeInRole}</p>
        </div>

        {/* Role Type */}
        <p className="text-neutral-400 dark:text-neutral-500">
          {roleData.type}
        </p>

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
                <p>Navigate to company website</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
