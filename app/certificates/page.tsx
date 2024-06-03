import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { CERTIFICATES_PAGE } from "@/constants/pages";
import { Metadata } from "next";
import React from "react";
import CertificatesView from "./components/CertificatesView";
import certificateDatabaseMap from "@/database/Certificates/CertificateDatabaseMap";

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
  description: CERTIFICATES_PAGE.description,
};

/**
 * Displays a list of all certificates that I have.
 * Also allows the user to search and filter the certificates.
 * These certificates are displayed into categories.
 *
 * A list of all certificates along with their descriptions are added to the page for SEO purposes.
 * This is not visible to the user.
 *
 * @returns Page with all certificates
 * @requires {@link CertificatesView} component to display the certificates and filter/search them
 */
const CertificatesPage: React.FC = () => {
  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title={CERTIFICATES_PAGE.label} />

        {/* Invisible divs for SEO */}
        {Object.values(certificateDatabaseMap).map((certificate) => (
          <div key={certificate.name} className="sr-only">
            {certificate.name}: {certificate.description}
          </div>
        ))}

        <PageDescription description={CERTIFICATES_PAGE.description} />
        <CertificatesView />
      </div>
    </section>
  );
};

export default CertificatesPage;
