import MaterialListProps from "@/interfaces/props/MaterialListProps";
import WorkItem from "../MaterialItems/WorkItem";
import MaterialGroupSectionList from "./MaterialGroupSectionList";

const WorkList: React.FC<MaterialListProps> = ({ groupedMaterial }) => (
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
