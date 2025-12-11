import PageDescription from "@/components/ui/PageDescription";
import developerName from "@/constants/developerName";
import { CERTIFICATES_PAGE } from "@/constants/pages";
import certificateDatabaseMap from "@/database/certificates/CertificateDatabaseMap";
import { Metadata } from "next";
import React from "react";
import CertificatesView from "./_components/CertificatesView";

/**
 * Generates the metadata for the certificates page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the certificates page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
  title: `${developerName} - ${CERTIFICATES_PAGE.label}`,
  description: `A list of all certificates and online courses that ${developerName} has completed. 
  These include certifications in web development, software engineering, and Artificial Intelligence, Machine Learning and more.`,
  category: `${CERTIFICATES_PAGE.label}`,
  creator: developerName,
  keywords: Object.values(certificateDatabaseMap).map(
    (certificate) => certificate.name
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
      <section id="projects" className="flex flex-col items-start md:items-end">
        <div className="w-full">
          <h1>{CERTIFICATES_PAGE.label}</h1>
          <PageDescription description={CERTIFICATES_PAGE.description} />
          <CertificatesView />
        </div>
      </section>
    </main>
  );
};

export default CertificatesPage;
