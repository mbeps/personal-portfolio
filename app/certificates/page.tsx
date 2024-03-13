import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { CERTIFICATES_PAGE } from "@/constants/pages";
import certificateDatabase from "@/database/certificates";
import { Metadata } from "next";
import React from "react";
import CertificatesView from "./components/CertificatesView";

export const metadata: Metadata = {
  title: `${developerName} - ${CERTIFICATES_PAGE.label}`,
  description: CERTIFICATES_PAGE.description,
};

/**
 * Certificates page displaying multiple types of certificates that I have.
 * Certificates are grouped by type.
 * The user can filter the certificates by category and issuer.
 */
const CertificatesPage: React.FC = () => {
  // const certificates: CertificateInterface[] = [...allCertificates];

  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title={CERTIFICATES_PAGE.label} />
        <PageDescription description={CERTIFICATES_PAGE.description} />
        <CertificatesView certificates={certificateDatabase} />
      </div>
    </section>
  );
};

export default CertificatesPage;
