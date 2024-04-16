import { EXPERIENCE_PAGE } from "@/constants/pages";
import companyDatabase from "@/database/companies";
import rolesDatabase from "@/database/roles";
import CompanyInterface from "@/interfaces/material/CompanyInterface";
import RoleInterface from "@/interfaces/material/RoleInterface";
import Link from "next/link";
import { BsArrowUpRightCircle, BsDot, BsInfoCircle } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger } from "../shadcn/ui/tooltip";
import Image from "next/image";
import { AspectRatio } from "../shadcn/ui/aspect-ratio";

interface WorkItemProps {
  roleKey: string;
}

//TODO: Add documentation
const WorkItem: React.FC<WorkItemProps> = ({ roleKey }) => {
  const basePath: string = EXPERIENCE_PAGE.path;
  const roleData: RoleInterface = rolesDatabase[roleKey];
  const companyData: CompanyInterface = companyDatabase[roleData.company];

  return (
    <div className="flex flex-row gap-4">
      {/* Logo */}
      <div className="flex items-center">
        {companyData.logo && (
          <div
            className="
              rounded-full 
              shadow-lg 
              p-1.5 bg-neutral-300 dark:bg-neutral-800
              transition-all duration-500 ease-in-out
              w-[85px] h-[85px]
"
          >
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
          </div>
        )}
      </div>

      {/* Details */}
      <div
        className="
          flex flex-col
          p-4 space-y-2 sm:p-0
          ease-in-out
					bg-neutral-100 dark:bg-neutral-950 
					sm:bg-white sm:dark:bg-neutral-900  
					rounded-xl 
					transition-colors duration-700 
					text-center md:text-left
					"
      >
        <Link href={`${basePath}/${roleKey}`}>
          <h2
            className="               
						text-3xl md:text-3xl font-bold  
            md:hover:text-red-500 md:dark:hover:text-red-800
            transition-colors duration-700 ease-in-out"
          >
            {roleData.name}
          </h2>
        </Link>
        <div className="flex items-center space-x-2 font-bold text-lg mb-2 text-neutral-500 dark:text-neutral-400">
          {companyData.website ? (
            <Link
              href={companyData.website}
              className="hover:underline hover:text-red-500 hover:dark:text-red-700"
            >
              {companyData.name}
            </Link>
          ) : (
            <span>{companyData.name}</span>
          )}
          <BsDot />
          <span>{companyData.location}</span>
        </div>

        <p>{`${roleData.startDate} - ${roleData.endDate}`}</p>

        <div
          className="
            flex flex-row 
            align-bottom 
            space-x-4
            pt-3
            "
        >
          {/* Link to Credential Page */}

          <Tooltip>
            <TooltipTrigger>
              <Link href={`${basePath}/${roleKey}`}>
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
                <Link
                  href={companyData.website}
                  target="_blank"
                  title="View Certificates on Provider's Website"
                >
                  <BsArrowUpRightCircle
                    size={30}
                    className="md:hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>View in Certificate Providers Site</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
