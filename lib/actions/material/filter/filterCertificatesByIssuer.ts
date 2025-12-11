import stringToSlug from "@/lib/actions/stringToSlug";
import CertificateInterface from "@/database/certificates/CertificateInterface";
import Database from "@/interfaces/Database";

/**
 * Supports the issuer dropdown on the certificates archive so visitors can isolate coursework by school or platform.
 *
 * @param issuer Name selected from the drawer.
 * @param materialKeys Keys currently visible.
 * @param certificatesMap Database that maps certificate keys to metadata.
 * @returns Keys belonging to the requested issuer.
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
