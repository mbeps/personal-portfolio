import React from "react";
import companyDatabaseMap from "@/database/companies/CompanyDatabaseMap";
import Reader from "@/components/reader/Reader";
import CvItemSkills from "./CvItemSkills";
import { SerializedRoleInterface } from "../page";

interface CvExperienceItemProps {
  role: SerializedRoleInterface;
  responsibilities?: string;
  showArchived?: boolean;
}

const CvExperienceItem: React.FC<CvExperienceItemProps> = ({
  role,
  responsibilities,
  showArchived = false,
}) => {
  const company = companyDatabaseMap[role.company];

  return (
    <div className="mb-6 break-inside-avoid">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <div>
          <h3 className="text-2xl font-bold">{role.name}</h3>
          <p className="text-xl font-semibold text-neutral-600 dark:text-neutral-400">
            {company.name}
          </p>
        </div>
        <div className="text-lg text-neutral-500 dark:text-neutral-400 font-mono">
          {role.startDate} - {role.endDate}
        </div>
      </div>

      {responsibilities && (
        <div className="mb-3 text-lg text-neutral-700 dark:text-neutral-300">
          <Reader content={responsibilities} size="lg:prose-lg" />
        </div>
      )}

      <CvItemSkills skills={role.skills} showArchived={showArchived} />
    </div>
  );
};

export default CvExperienceItem;
