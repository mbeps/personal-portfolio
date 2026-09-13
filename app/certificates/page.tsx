import type { Metadata } from "next";
import type React from "react";
import CertificatesView from "@/app/certificates/_components/certificates-view";
import PageDescription from "@/components/ui/page-description";
import { DEVELOPER } from "@/config/developer-info";
import { ROUTES } from "@/config/routes";
import certificateDatabaseMap from "@/database/certificates/certificate-database-map";

/**
 * Static metadata for the certificates archive, using the dataset itself to populate keywords so the list and SEO stay aligned.
 */
export const metadata: Metadata = {
  title: `${DEVELOPER.NAME} - ${ROUTES.CERTIFICATES.name}`,
  description: `A list of all certificates and online courses that ${DEVELOPER.NAME} has completed.
  These include certifications in web development, software engineering, and Artificial Intelligence, Machine Learning and more.`,
  category: `${ROUTES.CERTIFICATES.name}`,
  creator: DEVELOPER.NAME,
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
