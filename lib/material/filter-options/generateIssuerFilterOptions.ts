import stringToSlug from "@/lib/stringToSlug";
import CertificateInterface from "@/database/certificates/CertificateInterface";
import Database from "@/interfaces/Database";
import FilterOption from "@/interfaces/filters/FilterOption";
import generateFilterOptions from "./generateFilterOptions";

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
