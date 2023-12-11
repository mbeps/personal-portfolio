import Certificate from "@/types/certificates";

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

export default updateCredentialImages;
