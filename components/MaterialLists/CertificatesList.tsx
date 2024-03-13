import stringToSlug from "@/actions/stringToSlug";
import CertificateItem from "@/components/CertificateItem/CertificateItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import Grid from "@/components/UI/Grid";
import CertificateInterface from "@/interfaces/material/CertificateInterface";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import React from "react";

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
                <div className="flex flex-col space-y-10">
                  <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
                  <HeadingTwo title={group.groupName} />
                  <Grid
                    items={Object.entries(group.materials).map(
                      ([key, certificate]) => (
                        <CertificateItem
                          key={key}
                          path={key}
                          certificate={certificate as CertificateInterface}
                        />
                      )
                    )}
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
