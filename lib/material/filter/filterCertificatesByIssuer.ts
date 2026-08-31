import type CertificateInterface from "@/database/certificates/CertificateInterface";
import type Database from "@/interfaces/Database";
import filterMaterialKeysByPredicate from "@/lib/material/filter/filterMaterialKeysByPredicate";
import stringToSlug from "@/lib/stringToSlug";

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
  certificatesMap: Database<CertificateInterface>,
): string[] {
  return filterMaterialKeysByPredicate(
    materialKeys,
    certificatesMap,
    (certificate) =>
      Boolean(
        certificate &&
          stringToSlug(certificate.issuer) === stringToSlug(issuer),
      ),
  );
}
