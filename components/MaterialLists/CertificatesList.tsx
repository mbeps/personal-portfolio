import CertificateItem from "@/components/MaterialItems/CertificateItem";
import Grid from "@/components/UI/Grid";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import React from "react";
import MaterialGroupSectionList from "./MaterialGroupSectionList";

/**
 * List of certificates grouped by category to be displayed section by section.
 * Each section contains a title and a list of certificates.
 * If there are no certificates to display, a message is shown.
 *
 * @param groupedCertificates List of certificates grouped by category to be displayed section by section
 * @returns A list of certificates grouped by category
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
