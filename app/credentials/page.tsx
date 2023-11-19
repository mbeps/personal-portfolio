import { cloudComputing } from "@/constants/certificates";
import Certificate from "@/types/certificates";
import { Metadata } from "next";
import React from "react";
import CredentialsList from "./components/CredentialsList";

export const metadata: Metadata = {
  title: "Maruf Bepary - Credentials",
  description:
    "A list of all the certificates and degrees showing my technical skills.",
};

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
  const allCertificates: Certificate[] = [...cloudComputing];
  const updatedCertificates = updateCredentialImages(allCertificates);
  return <CredentialsList allCertificates={updatedCertificates} />;
};
export default CredentialsPage;
