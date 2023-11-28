import allCertificates from "@/constants/certificates";
import Certificate from "@/types/certificates";
import { Metadata } from "next";
import React from "react";
import CredentialsList from "./components/CredentialsList";
import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/Atoms/PageDescription";

const description = `
  Explore my collection of certificates and qualifications. 
  Use filters to refine your search by issuer and category. 
  Archived credentials are initially hidden.
`;

export const metadata: Metadata = {
  title: "Maruf Bepary - Credentials",
  description: description,
};

/**
 * Updates the image path of each certificate.
 * The file name of each certificate image is the slug of the certificate.
 * The path is appended to the slug allowing the image to be found.
 * @param certificates (Certificate[]): list of certificates
 * @returns (Certificate[]): list of certificates with updated image paths
 */
const updateCredentialImages = (certificates: Certificate[]): Certificate[] => {
  return certificates.map((certificate) => {
    return {
      ...certificate,
      certificateImage: `/certificates/${certificate.slug}.jpg`,
    };
  });
};

/**
 * Certificates page displaying multiple types of certificates that I have.
 * Certificates are grouped by type.
 * The user can filter the certificates by category and issuer.
 */
const CredentialsPage: React.FC = () => {
  const certificates: Certificate[] = [...allCertificates];
  const updatedCertificates = updateCredentialImages(certificates);
  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title="Credentials" />
        <PageDescription description={description} />
        <CredentialsList allCertificates={updatedCertificates} />
      </div>
    </section>
  );
};
export default CredentialsPage;
