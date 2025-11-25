import ProjectItem from "@/components/MaterialItems/ProjectItem";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import MaterialGroupSectionList from "./MaterialGroupSectionList";

/**
 * MaterialGroupSectionList wrapper that renders grouped project slugs using the shared `ProjectItem` card.
 * Used by the Projects page and related material tabs to keep layout rules identical.
 *
 * @param groupedMaterial Output from `groupMaterialsByCategory`.
 * @param showType When true, `ProjectItem` displays the type string instead of category.
 * @returns Section list of projects with optional headings.
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
