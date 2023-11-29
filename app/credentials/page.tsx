import allCertificates from "@/constants/certificates";
import Certificate from "@/types/certificates";
import { Metadata } from "next";
import React from "react";
import CredentialFilterSearchSection from "./components/CredentialFilterSearchSection";
import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/Atoms/PageDescription";
import CredentialListSection from "./components/CredentialListSection";
import searchStringInFields from "@/actions/searchStringInFields";

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

interface CredentialsPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}

/**
 * Certificates page displaying multiple types of certificates that I have.
 * Certificates are grouped by type.
 * The user can filter the certificates by category and issuer.
 */
const CredentialsPage: React.FC<CredentialsPageProps> = ({
  params,
  searchParams,
}) => {
  const certificates: Certificate[] = [...allCertificates];
  const updatedCertificates = updateCredentialImages(certificates);

  const slug = params.slug;
  const selectedIssuer = searchParams.issuer || "All";
  const selectedCategory = searchParams.category || "All";
  const searchTerm = searchParams.search || "";
  const showArchived = searchParams.archived === "true" || false;

  /**
   * Groups certificates by category.
   * These categories are used to display the certificates.
   */
  const groupCertificatesByCategory = (
    certificates: Certificate[]
  ): Record<string, Certificate[]> => {
    return certificates.reduce<Record<string, Certificate[]>>(
      (grouped, certificate) => {
        (grouped[certificate.category] =
          grouped[certificate.category] || []).push(certificate);
        return grouped;
      },
      {}
    );
  };

  const searchFields = ["name", "issuer", "skills", "category"];

  const filteredCertificates = updatedCertificates.filter(
    (certificate) =>
      (showArchived || !certificate.archived) &&
      (selectedIssuer === "All" || certificate.issuer === selectedIssuer) &&
      (selectedCategory === "All" ||
        certificate.category === selectedCategory) &&
      searchStringInFields(searchTerm, certificate, searchFields)
  );

  const groupedCertificates = groupCertificatesByCategory(filteredCertificates);

  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title="Credentials" />
        <PageDescription description={description} />

        <p>{`Slug: ${slug}`}</p>
        <p>{`Issuer: ${selectedIssuer}`}</p>
        <p>{`Category: ${selectedCategory}`}</p>
        <p>{`Search term: ${searchTerm}`}</p>
        <p>{`Show archived: ${showArchived}`}</p>

        <CredentialFilterSearchSection allCertificates={updatedCertificates} />
        {/* List of projects */}
        <CredentialListSection groupedCertificates={groupedCertificates} />
      </div>
    </section>
  );
};
export default CredentialsPage;
