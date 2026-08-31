import type React from "react";
import type ProjectInterface from "@/database/projects/ProjectInterface";
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
      <div className="mb-2 flex flex-col items-start justify-between md:flex-row md:items-center">
        <h3 className="font-bold text-2xl">{project.name}</h3>
      </div>

      <p className="mb-3 text-lg text-neutral-700 dark:text-neutral-300">
        {project.description}
      </p>

      <CvItemSkills skills={project.skills} showArchived={showArchived} />
    </div>
  );
};

export default CvProjectItem;
