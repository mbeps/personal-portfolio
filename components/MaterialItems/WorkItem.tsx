import { EXPERIENCE_PAGE } from "@/constants/pages";
import companyDatabase from "@/database/companies";
import rolesDatabase from "@/database/roles";
import CompanyInterface from "@/interfaces/material/CompanyInterface";
import RoleInterface from "@/interfaces/material/RoleInterface";
import Link from "next/link";
import HeadingFour from "../Text/HeadingFour";

interface WorkItemProps {
  roleKey: string;
}

//TODO: Add documentation
const WorkItem: React.FC<WorkItemProps> = ({ roleKey }) => {
  const basePath: string = EXPERIENCE_PAGE.path;
  const roleData: RoleInterface = rolesDatabase[roleKey];
  const companyData: CompanyInterface = companyDatabase[roleData.company];

  return (
    <Link href={`${basePath}/${roleKey}`}>
      <div
        className="
          flex flex-col
          cursor-pointer
          p-4 space-y-2 sm:p-0
          ease-in-out
					bg-neutral-100 dark:bg-neutral-950 
					sm:bg-white sm:dark:bg-neutral-900  
					rounded-xl 
					transition-colors duration-700 
					text-center md:text-left
					"
      >
        <h2
          className="               
						text-3xl md:text-3xl font-bold  
            md:hover:text-red-500 md:dark:hover:text-red-800
            transition-colors duration-700 ease-in-out"
        >
          {roleData.name}
        </h2>

        <HeadingFour title={`${companyData.name} • ${companyData.location}`} />

        <p>{`${roleData.startDate} - ${roleData.endDate}`}</p>
      </div>
    </Link>
  );
};

export default WorkItem;
