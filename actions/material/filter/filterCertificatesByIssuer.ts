import stringToSlug from "@/actions/stringToSlug";
import CertificateInterface from "@/database/Certificates/CertificateInterface";

/**
 * Filters the certificates that match a specific issuer.
 *
 * @param issuer The specific user who issued the certificate
 * @param materialKeys The keys of the certificates to filter
 * @param certificatesMap All the certificates in the database
 * @returns The keys of the certificates that match the issuer
 */
export default function filterCertificatesByIssuer(
  issuer: string,
  materialKeys: string[],
  certificatesMap: Database<CertificateInterface>
): string[] {
  return materialKeys.reduce<string[]>((acc, key) => {
    const certificate: CertificateInterface = certificatesMap[key];
    if (
      certificate &&
      stringToSlug(certificate.issuer) === stringToSlug(issuer)
    ) {
      acc.push(key); // Adding the key to the accumulator if the certificate matches the issuer
    }
    return acc;
  }, []);
}
