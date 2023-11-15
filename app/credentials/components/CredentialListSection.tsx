import CertificateItem from "@/components/CertificateItem/CertificateItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import Certificate from "@/types/certificates";
import React from "react";

interface CredentialsListSectionProps {
  groupedCertificates: Record<string, Certificate[]>;
}

const CredentialsListSection: React.FC<CredentialsListSectionProps> = ({
  groupedCertificates,
}) => {
  return (
    <div className="flex flex-col space-y-20 mt-14">
      {Object.keys(groupedCertificates).length > 0 ? (
        Object.keys(groupedCertificates).map(
          (category) =>
            category !== "All" && (
              <section
                key={category}
                id={category.toLowerCase().replace(/\s+/g, "-")}
              >
                <div className="flex flex-col space-y-20">
                  <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
                  <HeadingTwo title={category} />
                  {groupedCertificates[category].map((certificate, idx) => (
                    <div key={idx}>
                      <CertificateItem
                        name={certificate.name}
                        slug={certificate.slug}
                        description={certificate.description}
                        issuer={certificate.issuer}
                        credentialURL={certificate.credentialURL}
                        skills={certificate.skills}
                        certificateImage={certificate.certificateImage}
                        category={certificate.category}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )
        )
      ) : (
        <div className="flex justify-center min-w-full mt-14">
          <h2 className="text-2xl font-bold">No certificates</h2>
        </div>
      )}
    </div>
  );
};

export default CredentialsListSection;
