import React from "react";
import ProjectInterface from "@/database/projects/ProjectInterface";
import CvItemSkills from "./CvItemSkills";

interface CvProjectItemProps {
  project: ProjectInterface;
  showArchived?: boolean;
}

const CvProjectItem: React.FC<CvProjectItemProps> = ({
  project,
  showArchived = false,
}) => {
  return (
    <div className="mb-6 break-inside-avoid">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <h3 className="text-2xl font-bold">{project.name}</h3>
      </div>

      <p className="mb-3 text-lg text-neutral-700 dark:text-neutral-300">
        {project.description}
      </p>

      <CvItemSkills skills={project.skills} showArchived={showArchived} />
    </div>
  );
};

export default CvProjectItem;
