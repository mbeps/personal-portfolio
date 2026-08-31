import type React from "react";
import CertificateItem from "@/components/material-items/certificate-item";
import Grid from "@/components/ui/grid";
import type CertificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import type MaterialGroupListInterface from "@/interfaces/material/material-group-list-interface";
import MaterialGroupSectionList from "./material-group-section-list";

/**
 * Renders grouped certificates using `CertificateItem` tiles so the certificates page and related material tabs look identical.
 *
 * @param groupedMaterial Material grouping generated upstream.
 * @returns Sectioned certificate grid or the shared empty state copy.
 */
const CertificatesList: React.FC<MaterialGroupListInterface> = ({
  groupedMaterial,
}) => (
  <MaterialGroupSectionList
    groupedMaterial={groupedMaterial}
    emptyMessage="No Matching Certificates"
    sectionClassName="flex flex-col space-y-6"
    renderContent={(group, hasMultipleGroups) => (
      <>
        {hasMultipleGroups && (
          <>
            <div className="border-gray-200 border-b pb-1 dark:border-neutral-600" />
            <h2>{group.groupName}</h2>
          </>
        )}
        <Grid
          items={group.materialsKeys.map((certificateKey) => (
            <div className="h-full" key={certificateKey}>
              <CertificateItem
                certificateKey={certificateKey as CertificateDatabaseKeys}
              />
            </div>
          ))}
        />
      </>
    )}
  />
);

export default CertificatesList;
