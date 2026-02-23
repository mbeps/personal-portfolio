import MaterialGroupListInterface from "@/interfaces/material/MaterialGroupListInterface";
import WorkItem from "../material-items/WorkItem";
import MaterialGroupSectionList from "./MaterialGroupSectionList";

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
            <div className="border-b border-gray-200 dark:border-neutral-600 pb-1" />
            <h2>{group.groupName}</h2>
          </>
        )}
        <div className="space-y-10">
          {group.materialsKeys.map((roleKey) => (
            <div key={roleKey}>
              <WorkItem roleKey={roleKey} />
            </div>
          ))}
        </div>
      </>
    )}
  />
);

export default WorkList;
