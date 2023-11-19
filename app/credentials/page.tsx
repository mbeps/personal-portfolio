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

type CredentialsPageProps = {};

const CredentialsPage: React.FC<CredentialsPageProps> = () => {
  const allCertificates: Certificate[] = [...cloudComputing];
  const updatedCertificates = updateCredentialImages(allCertificates);
  return <CredentialsList allCertificates={updatedCertificates} />;
};
export default CredentialsPage;
