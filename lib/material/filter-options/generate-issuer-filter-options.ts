import type CertificateInterface from "@/database/certificates/certificate-interface";
import type Database from "@/interfaces/database";
import type FilterOption from "@/interfaces/filters/filter-option";
import stringToSlug from "@/lib/string-to-slug";
import generateFilterOptions from "./generate-filter-options";

/**
 * Keeps the certificates issuer dropdown aligned with the content currently loaded so the UI never exposes issuers without entries.
 *
 * @param certificatesDatabase Certificate dictionary for the archive view.
 * @returns Filter options deduped by slug and sorted alphabetically.
 */
export default function generateIssuerFilterOptions(
  certificatesDatabase: Database<CertificateInterface>,
): FilterOption[] {
  return generateFilterOptions(
    certificatesDatabase,
    (certificate) => ({
      slug: stringToSlug(certificate.issuer),
      entryName: certificate.issuer,
    }),
    true,
  );
}
