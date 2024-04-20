import stringToSlug from "@/actions/stringToSlug";
import CertificateItem from "@/components/MaterialItems/CertificateItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import Grid from "@/components/UI/Grid";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import React from "react";

/**
 * List of certificates grouped by category to be displayed section by section.
 * Each section contains a title and a list of certificates.
 * If there are no certificates to display, a message is shown.
 *
 * @param groupedCertificates List of certificates grouped by category to be displayed section by section
 * @returns A list of certificates grouped by category
 */
const CertificatesList: React.FC<MaterialListProps> = ({
  groupedMaterial: groupedCertificates,
}) => {
  return (
    <div className="material-page-wrapper">
      {groupedCertificates.length > 0 ? (
        groupedCertificates.map(
          (group) =>
            group.groupName !== "All" && (
              <section key={group.groupName} id={stringToSlug(group.groupName)}>
                <div className="flex flex-col space-y-6">
                  {groupedCertificates.length > 1 && (
                    <>
                      <div className="border-b border-gray-200 dark:border-neutral-600 pb-1" />
                      <HeadingTwo title={group.groupName} />
                    </>
                  )}
                  <Grid
                    items={group.materialsKeys.map((certificateKey) => (
                      <div
                        className="animate-slideUpCubiBezier animation-delay-1 h-full"
                        key={certificateKey}
                      >
                        <CertificateItem certificateKey={certificateKey} />
                      </div>
                    ))}
                  />
                </div>
              </section>
            )
        )
      ) : (
        <div className="flex justify-center min-w-full mt-8">
          <h2 className="text-2xl font-bold">No Matching Certificates</h2>
        </div>
      )}
    </div>
  );
};

export default CertificatesList;
