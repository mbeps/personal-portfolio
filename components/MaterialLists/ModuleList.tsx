import findCourseKeyForModule from "@/actions/material/course/findCourseKeyForModule";
import Grid from "@/components/UI/Grid";
import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabaseMap from "@/database/Courses/CourseDatabaseMap";
import moduleDatabaseMap from "@/database/Modules/ModuleDatabaseMap";
import ModuleDatabaseKeys from "@/database/Modules/ModuleDatabaseKeys";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import Link from "next/link";
import React from "react";
import Tag from "../Tags/Tag";
import MaterialGroupSectionList from "./MaterialGroupSectionList";

interface ModuleListProps {
  groupedMaterial: MaterialGroupInterface[];
  headingSize?: "h2" | "h4"; // optional prop to determine the heading level
}

/**
 * Lists all the modules according to a certain grouping.
 * The modules items are clickable and redirect to the module page.
 * The items display the module name and its parent course name.
 *
 * @param groupedMaterial List of grouped modules
 * @param headingSize Optional prop to determine the heading size
 * @returns List of grouped modules
 * @author Maruf Bepary
 */
const ModuleList: React.FC<ModuleListProps> = ({
  groupedMaterial,
  headingSize = "h2",
}) => {
  const basePath: string = EDUCATION_PAGE.path;
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
                courseDatabaseMap
              );
              return (
                <div key={moduleKey}>
                  <Link href={`${basePath}/${courseKey}/${moduleKey}`}>
                    <Tag hasHover>
                      <div>{moduleDatabaseMap[moduleKey].name}</div>
                      <div className="text-neutral-400 dark:text-red-200 italic text-sm">
                        {
                          courseDatabaseMap[
                            moduleDatabaseMap[moduleKey].parentCourse
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
