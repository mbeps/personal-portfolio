import ProjectItem from "@/components/material-items/project-item";
import type ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import type MaterialGroupListInterface from "@/interfaces/material/material-group-list-interface";
import MaterialGroupSectionList from "./material-group-section-list";

/**
 * MaterialGroupSectionList wrapper that renders grouped project slugs using the shared `ProjectItem` card.
 * Used by the Projects page and related material tabs to keep layout rules identical.
 *
 * @param groupedMaterial Output from `groupMaterialsByCategory`.
 * @param showType When true, `ProjectItem` displays the type string instead of category.
 * @returns Section list of projects with optional headings.
 */
interface ProjectsListProps extends MaterialGroupListInterface {
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
            <div className="border-gray-200 border-b pb-1 dark:border-neutral-600" />
            <h2>{group.groupName}</h2>
          </>
        )}
        <div className="space-y-14 md:space-y-20">
          {group.materialsKeys.map((projectKey) => (
            <div key={projectKey}>
              <ProjectItem
                projectKey={projectKey as ProjectDatabaseKeys}
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
