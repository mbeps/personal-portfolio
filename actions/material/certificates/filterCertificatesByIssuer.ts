import stringToSlug from "@/actions/stringToSlug";
import CertificateInterface from "@/interfaces/material/CertificateInterface";

export default function filterCertificatesByIssuer(
  issuer: string,
  certificatesMap: { [key: string]: CertificateInterface }
): { [key: string]: CertificateInterface } {
  const filteredCertificates = Object.entries(certificatesMap).reduce(
    (acc, [key, certificate]) => {
      if (stringToSlug(certificate.issuer) === stringToSlug(issuer)) {
        acc[key] = certificate;
      }
      return acc;
    },
    {} as { [key: string]: CertificateInterface }
  );

  return filteredCertificates;
}
