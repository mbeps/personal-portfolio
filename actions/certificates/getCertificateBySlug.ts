import CertificateInterface from "@/interfaces/material/CertificateInterface";

/**
 * Gets all the details of a certificate from its unique slug.
 * @param slug (string) - The slug of the certificate to find
 * @param certificates (Certificate[]) - The array of certificates to search through (usually the certificates state
 * @returns (Certificate | undefined) - The certificate that matches the slug (or undefined if no match is found
 */
function getCertificateBySlug(
  slug: string,
  certificates: CertificateInterface[],
): CertificateInterface | undefined {
  return certificates.find((certificate) => certificate.slug === slug);
}

export default getCertificateBySlug;
