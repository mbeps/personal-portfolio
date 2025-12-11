import stringToSlug from "@/lib/stringToSlug";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import React from "react";

interface MaterialGroupSectionListProps {
  groupedMaterial: MaterialGroupInterface[];
  emptyMessage: string;
  renderContent: (
    group: MaterialGroupInterface,
    hasMultipleGroups: boolean
  ) => React.ReactNode;
  wrapperClassName?: string;
  sectionClassName?: string;
  shouldRenderGroup?: (group: MaterialGroupInterface) => boolean;
  getSectionId?: (group: MaterialGroupInterface) => string;
}

/**
 * Base renderer for grouped material lists, responsible for hiding “All” buckets, wiring anchor IDs, and surfacing empty states.
 * Keeps the structural markup identical regardless of whether the caller renders projects, roles, certificates, or modules.
 */
const MaterialGroupSectionList: React.FC<MaterialGroupSectionListProps> = ({
  groupedMaterial,
  emptyMessage,
  renderContent,
  wrapperClassName = "",
  sectionClassName = "",
  shouldRenderGroup = (group) => group.groupName !== "All",
  getSectionId = (group) => stringToSlug(group.groupName),
}) => {
  if (!groupedMaterial.length) {
    return (
      <div className="flex justify-center min-w-full mt-8">
        <h2 className="text-2xl font-bold">{emptyMessage}</h2>
      </div>
    );
  }

  const hasMultipleGroups = groupedMaterial.length > 1;

  return (
    <div className={`material-page-wrapper ${wrapperClassName}`}>
      {groupedMaterial.map((group) => {
        if (!shouldRenderGroup(group)) {
          return null;
        }

        const sectionId = getSectionId(group);

        return (
          <section key={group.groupName} id={sectionId}>
            <div className={sectionClassName}>
              {renderContent(group, hasMultipleGroups)}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default MaterialGroupSectionList;
