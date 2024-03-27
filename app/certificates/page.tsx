import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { CERTIFICATES_PAGE } from "@/constants/pages";
import { Metadata } from "next";
import React from "react";
import CertificatesView from "./components/CertificatesView";

export const metadata: Metadata = {
  title: `${developerName} - ${CERTIFICATES_PAGE.label}`,
  description: CERTIFICATES_PAGE.description,
};

/**
 * Displays a list of all certificates that I have.
 * Also allows the user to search and filter the certificates.
 * These certificates are displayed into categories.
 *
 * @returns Page with all certificates
 * @requires {@link CertificatesView} component to display the certificates and filter/search them
 */
const CertificatesPage: React.FC = () => {
  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title={CERTIFICATES_PAGE.label} />
        <PageDescription description={CERTIFICATES_PAGE.description} />
        <CertificatesView />
      </div>
    </section>
  );
};

export default CertificatesPage;
