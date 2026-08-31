import Link from "next/link";
import Grid from "@/components/ui/grid";
import { ROUTES } from "@/constants/routes";
import courseDatabaseMap from "@/database/courses/course-database-map";
import type ModuleDatabaseKeys from "@/database/modules/module-database-keys";
import moduleDatabaseMap from "@/database/modules/module-database-map";
import type MaterialGroupInterface from "@/interfaces/material/material-group-interface";
import findCourseKeyForModule from "@/lib/material/course/find-course-key-for-module";
import Tag from "../tags/tag";
import MaterialGroupSectionList from "./material-group-section-list";

interface ModuleListProps {
  groupedMaterial: MaterialGroupInterface[];
  headingSize?: "h2" | "h4"; // optional prop to determine the heading level
}

/**
 * Renders grouped university modules with a pill-based UI so the education page and related material tabs share styling.
 * Each tag links to the module detail page while surfacing the parent course name for context.
 *
 * @param groupedMaterial Modules grouped by category or course.
 * @param headingSize Optional heading level to match the surrounding layout.
 * @returns Grid of module tags grouped by the provided metadata.
 */
const ModuleList: React.FC<ModuleListProps> = ({
  groupedMaterial,
  headingSize = "h2",
}) => {
  const basePath: string = ROUTES.EDUCATION.path;
  const HeadingTag = headingSize as keyof React.JSX.IntrinsicElements;

  return (
    <MaterialGroupSectionList
      groupedMaterial={groupedMaterial}
      emptyMessage="No Modules Found"
      wrapperClassName="space-y-4"
      sectionClassName="mb-4"
      shouldRenderGroup={() => true}
      getSectionId={(group) => group.groupName}
      renderContent={(group, hasMultipleGroups) => (
        <>
          {hasMultipleGroups && (
            <HeadingTag>{`University ${group.groupName}`}</HeadingTag>
          )}
          <Grid
            gap={1}
            items={group.materialsKeys.map((moduleKey) => {
              const courseKey = findCourseKeyForModule(
                moduleKey as ModuleDatabaseKeys,
                courseDatabaseMap,
              );
              return (
                <div key={moduleKey}>
                  <Link href={`${basePath}/${courseKey}/${moduleKey}`}>
                    <Tag hasHover>
                      <div>
                        {
                          moduleDatabaseMap[moduleKey as ModuleDatabaseKeys]
                            .name
                        }
                      </div>
                      <div className="text-neutral-400 text-sm italic dark:text-red-200">
                        {
                          courseDatabaseMap[
                            moduleDatabaseMap[moduleKey as ModuleDatabaseKeys]
                              .parentCourse
                          ].name
                        }
                      </div>
                    </Tag>
                  </Link>
                </div>
              );
            })}
          />
        </>
      )}
    />
  );
};

export default ModuleList;
