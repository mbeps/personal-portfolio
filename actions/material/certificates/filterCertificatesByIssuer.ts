import stringToSlug from "@/actions/stringToSlug";
import CertificateInterface from "@/interfaces/material/CertificateInterface";

export default function filterCertificatesByIssuer(
  issuer: string,
  certificates: CertificateInterface[],
): CertificateInterface[] {
  return certificates.filter(
    (certificate) => stringToSlug(certificate.issuer) === stringToSlug(issuer),
  );
}
