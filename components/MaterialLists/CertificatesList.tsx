import stringToSlug from "@/actions/stringToSlug";
import Grid from "@/components/UI/Grid";
import CertificateItem from "@/components/CertificateItem/CertificateItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import CertificateInterface from "@/interfaces/CertificateInterface";
import React from "react";

interface CertificatesListProps {
  groupedCertificates: Record<string, CertificateInterface[]>;
}

const CertificatesList: React.FC<CertificatesListProps> = ({
  groupedCertificates,
}) => {
  return (
    <div className="material-page-wrapper">
      {/* Each Section */}
      {Object.keys(groupedCertificates).length > 0 ? (
        // Each Certificate
        Object.keys(groupedCertificates).map(
          (category) =>
            category !== "All" && (
              <section key={category} id={stringToSlug(category)}>
                <div className="flex flex-col space-y-10">
                  <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
                  <HeadingTwo title={category} />
                  <Grid
                    items={groupedCertificates[category].map(
                      (certificate, idx) => (
                        <CertificateItem key={idx} certificate={certificate} />
                      ),
                    )}
                  />
                </div>
              </section>
            ),
        )
      ) : (
        <div className="flex justify-center min-w-full mt-1">
          <h2 className="text-2xl font-bold">No Matching Certificates</h2>
        </div>
      )}
    </div>
  );
};

export default CertificatesList;