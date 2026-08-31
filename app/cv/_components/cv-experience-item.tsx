import type React from "react";
import Reader from "@/components/reader/reader";
import companyDatabaseMap from "@/database/companies/company-database-map";
import type { SerializedRoleInterface } from "../page";
import CvItemSkills from "./cv-item-skills";

interface CvExperienceItemProps {
  role: SerializedRoleInterface;
  responsibilities?: string | null;
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
      <div className="mb-2 flex flex-col items-start justify-between md:flex-row md:items-center">
        <div>
          <h3 className="font-bold text-2xl">{role.name}</h3>
          <p className="font-semibold text-neutral-600 text-xl dark:text-neutral-400">
            {company.name}
          </p>
        </div>
        <div className="font-mono text-lg text-neutral-500 dark:text-neutral-400">
          {role.startDate} - {role.endDate}
        </div>
      </div>

      {responsibilities && (
        <div className="mb-3 text-lg text-neutral-700 dark:text-neutral-300">
          <Reader content={responsibilities} size="base" />
        </div>
      )}

      <CvItemSkills skills={role.skills} showArchived={showArchived} />
    </div>
  );
};

export default CvExperienceItem;
