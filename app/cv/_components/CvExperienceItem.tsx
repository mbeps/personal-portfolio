import React from "react";
import RoleInterface from "@/database/roles/RoleInterface";
import companyDatabaseMap from "@/database/companies/CompanyDatabaseMap";
import Reader from "@/components/reader/Reader";
import CvItemSkills from "./CvItemSkills";

interface CvExperienceItemProps {
  role: RoleInterface;
  responsibilities?: string;
  showArchived?: boolean;
}

const CvExperienceItem: React.FC<CvExperienceItemProps> = ({
  role,
  responsibilities,
  showArchived = false,
}) => {
  const company = companyDatabaseMap[role.company];
  const startDate = role.startDate.toString();
  const endDate = role.endDate ? role.endDate.toString() : "Present";

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
          {startDate} - {endDate}
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
