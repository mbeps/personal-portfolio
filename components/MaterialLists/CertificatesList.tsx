import stringToSlug from "@/actions/stringToSlug";
import Grid from "@/components/UI/Grid";
import CertificateItem from "@/components/CertificateItem/CertificateItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import CertificateInterface from "@/interfaces/material/CertificateInterface";
import React from "react";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";

interface CertificatesListProps {
  groupedCertificates: MaterialGroupInterface[];
}

const CertificatesList: React.FC<CertificatesListProps> = ({
  groupedCertificates,
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
                    items={group.materials.map((certificate, idx) => (
                      <CertificateItem
                        key={idx}
                        certificate={certificate as CertificateInterface}
                      />
                    ))}
                  />
                </div>
              </section>
            ),
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
