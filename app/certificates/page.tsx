import PageDescription from "@/components/UI/PageDescription";
import HeadingOne from "@/components/Text/HeadingOne";
import CertificateInterface from "@/interfaces/CertificateInterface";
import { Metadata } from "next";
import React from "react";
import CertificatesView from "./components/CertificatesView";
import allCertificates from "@/database/certificates";

const description = `
  Explore my collection of certificates and qualifications. 
  Use filters to refine your search by issuer and category. 
  Archived certificates are initially hidden.
`;

export const metadata: Metadata = {
  title: "Maruf Bepary - Certificates",
  description: description,
};

/**
 * Certificates page displaying multiple types of certificates that I have.
 * Certificates are grouped by type.
 * The user can filter the certificates by category and issuer.
 */
const CertificatesPage: React.FC = () => {
  const certificates: CertificateInterface[] = [...allCertificates];

  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title="Certificates" />
        <PageDescription description={description} />
        <CertificatesView allCertificates={certificates} />
      </div>
    </section>
  );
};

export default CertificatesPage;
