import type RoleDatabaseKeys from "@/database/roles/role-database-keys";
import type MaterialGroupListInterface from "@/interfaces/material/material-group-list-interface";
import WorkItem from "../material-items/work-item";
import MaterialGroupSectionList from "./material-group-section-list";

/**
 * Thin list renderer for Work Experience / Role material groups.
 * Delegates layout and empty-state handling to `MaterialGroupSectionList` with `WorkItem` as the card renderer.
 * When multiple groups are present it prepends a horizontal divider and a group heading; single-group lists
 * render as a plain vertical stack of `WorkItem` cards with no additional chrome.
 *
 * @param props - Grouped role material data conforming to `MaterialGroupListInterface`.
 * @returns A sectioned or plain list of `WorkItem` cards.
 * @author Maruf Bepary
 */
const WorkList: React.FC<MaterialGroupListInterface> = ({
  groupedMaterial,
}) => (
  <MaterialGroupSectionList
    groupedMaterial={groupedMaterial}
    emptyMessage="No Matching Jobs"
    sectionClassName="flex flex-col space-y-5"
    renderContent={(group, hasMultipleGroups) => (
      <>
        {hasMultipleGroups && (
          <>
            <div className="border-gray-200 border-b pb-1 dark:border-neutral-600" />
            <h2>{group.groupName}</h2>
          </>
        )}
        <div className="space-y-10">
          {group.materialsKeys.map((roleKey) => (
            <div key={roleKey}>
              <WorkItem roleKey={roleKey as RoleDatabaseKeys} />
            </div>
          ))}
        </div>
      </>
    )}
  />
);

export default WorkList;
