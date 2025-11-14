import stringToSlug from "@/actions/stringToSlug";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import WorkItem from "../MaterialItems/WorkItem";

const WorkList: React.FC<MaterialListProps> = ({
  groupedMaterial: groupedRoles,
}) => {
  return (
    <div className="material-page-wrapper">
      {groupedRoles.length > 0 ? (
        groupedRoles.map(
          (group) =>
            group.groupName !== "All" && (
              <section key={group.groupName} id={stringToSlug(group.groupName)}>
                <div className="flex flex-col space-y-5">
                  {groupedRoles.length > 1 && (
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
                </div>
              </section>
            )
        )
      ) : (
        <div className="flex justify-center min-w-full mt-8">
          <h2 className="text-2xl font-bold">No Matching Jobs</h2>
        </div>
      )}
    </div>
  );
};

export default WorkList;
