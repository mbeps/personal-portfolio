import type CertificateInterface from "@/database/certificates/certificate-interface";
import type Database from "@/interfaces/database";
import filterMaterialKeysByPredicate from "@/lib/material/filter/filter-material-keys-by-predicate";
import stringToSlug from "@/lib/string-to-slug";

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
