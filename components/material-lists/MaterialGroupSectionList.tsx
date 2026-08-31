import type React from "react";
import type MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import stringToSlug from "@/lib/stringToSlug";

interface MaterialGroupSectionListProps {
  groupedMaterial: MaterialGroupInterface[];
  emptyMessage: string;
  renderContent: (
    group: MaterialGroupInterface,
    hasMultipleGroups: boolean,
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
      <div className="mt-8 flex min-w-full justify-center">
        <h2 className="font-bold text-2xl">{emptyMessage}</h2>
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
