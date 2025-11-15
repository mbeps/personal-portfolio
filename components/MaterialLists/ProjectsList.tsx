import ProjectItem from "@/components/MaterialItems/ProjectItem";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import MaterialGroupSectionList from "./MaterialGroupSectionList";

/**
 * List of projects grouped by category to be displayed section by section.
 * Each section contains a title and a list of projects.
 * If there are no projects to display, a message is shown.
 *
 * @param groupedProjects List of projects grouped by category to be displayed section by section
 * @returns A list of projects grouped by category
 */
interface ProjectsListProps extends MaterialListProps {
  showType?: boolean;
}

const ProjectsList: React.FC<ProjectsListProps> = ({
  groupedMaterial,
  showType = false,
}) => (
  <MaterialGroupSectionList
    groupedMaterial={groupedMaterial}
    emptyMessage="No Matching Projects"
    sectionClassName="flex flex-col space-y-6"
    renderContent={(group, hasMultipleGroups) => (
      <>
        {hasMultipleGroups && (
          <>
            <div className="border-b border-gray-200 dark:border-neutral-600 pb-1" />
            <h2>{group.groupName}</h2>
          </>
        )}
        <div className="space-y-14 md:space-y-20">
          {group.materialsKeys.map((projectKey) => (
            <div key={projectKey}>
              <ProjectItem
                projectKey={projectKey}
                subtitle={showType ? "type" : null}
              />
            </div>
          ))}
        </div>
      </>
    )}
  />
);

export default ProjectsList;
