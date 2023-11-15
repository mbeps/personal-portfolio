import CertificateItem from "@/components/CertificateItem/CertificateItem";
import Certificate from "@/types/certificates";
import React from "react";

type CredentialListSectionProps = {
  allCertificates: Certificate[];
};

const CredentialListSection: React.FC<CredentialListSectionProps> = ({
  allCertificates,
}) => {
  return (
    <div className="flex flex-col space-y-20 mt-14">
      {allCertificates.length > 0 ? (
        allCertificates.map((certificate, idx) => (
          <section key={idx} className="flex flex-col space-y-5">
            {/* Use CertificateItem component for each certificate */}
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
          </section>
        ))
      ) : (
        <div className="flex justify-center min-w-full mt-14">
          <h2 className="text-2xl font-bold">No certificates found</h2>
        </div>
      )}
    </div>
  );
};

export default CredentialListSection;
