import PageDescription from "@/components/ui/PageDescription";
import developerName from "@/constants/developerName";
import { ROUTES } from "@/constants/routes";
import certificateDatabaseMap from "@/database/certificates/CertificateDatabaseMap";
import { Metadata } from "next";
import React from "react";
import CertificatesView from "./_components/CertificatesView";

/**
 * Static metadata for the certificates archive, using the dataset itself to populate keywords so the list and SEO stay aligned.
 */
export const metadata: Metadata = {
  title: `${developerName} - ${ROUTES.CERTIFICATES.name}`,
  description: `A list of all certificates and online courses that ${developerName} has completed. 
  These include certifications in web development, software engineering, and Artificial Intelligence, Machine Learning and more.`,
  category: `${ROUTES.CERTIFICATES.name}`,
  creator: developerName,
  keywords: Object.values(certificateDatabaseMap).map(
    (certificate) => certificate.name,
  ),
};

/**
 * Certificates archive entry point that frames the shared `CertificatesView` filters with the page copy and metadata.
 *
 * @returns Section containing the filterable certificates grid.
 */
const CertificatesPage: React.FC = () => {
  return (
    <main>
      <section
        id="certificates"
        className="flex flex-col items-start md:items-end"
      >
        <div className="w-full">
          <h1>{ROUTES.CERTIFICATES.name}</h1>
          <PageDescription description={ROUTES.CERTIFICATES.description} />
          <CertificatesView />
        </div>
      </section>
    </main>
  );
};

export default CertificatesPage;
