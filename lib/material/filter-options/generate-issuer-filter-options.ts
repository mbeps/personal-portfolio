import type CertificateInterface from "@/database/certificates/certificate-interface";
import generateFilterOptions from "@/lib/material/filter-options/generate-filter-options";
import stringToSlug from "@/lib/string-to-slug";
import type Database from "@/types/database/database";
import type FilterOption from "@/types/filters/filter-option";

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
