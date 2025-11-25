import CertificateItem from "@/components/MaterialItems/CertificateItem";
import Grid from "@/components/UI/Grid";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import React from "react";
import MaterialGroupSectionList from "./MaterialGroupSectionList";

/**
 * Renders grouped certificates using `CertificateItem` tiles so the certificates page and related material tabs look identical.
 *
 * @param groupedMaterial Material grouping generated upstream.
 * @returns Sectioned certificate grid or the shared empty state copy.
 */
const CertificatesList: React.FC<MaterialListProps> = ({ groupedMaterial }) => (
  <MaterialGroupSectionList
    groupedMaterial={groupedMaterial}
    emptyMessage="No Matching Certificates"
    sectionClassName="flex flex-col space-y-6"
    renderContent={(group, hasMultipleGroups) => (
      <>
        {hasMultipleGroups && (
          <>
            <div className="border-b border-gray-200 dark:border-neutral-600 pb-1" />
            <h2>{group.groupName}</h2>
          </>
        )}
        <Grid
          items={group.materialsKeys.map((certificateKey) => (
            <div className="h-full" key={certificateKey}>
              <CertificateItem certificateKey={certificateKey} />
            </div>
          ))}
        />
      </>
    )}
  />
);

export default CertificatesList;
