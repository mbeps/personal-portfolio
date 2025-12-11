import stringToSlug from "@/lib/actions/stringToSlug";
import CertificateInterface from "@/database/certificates/CertificateInterface";
import Database from "@/interfaces/Database";
import FilterOption from "@/interfaces/filters/FilterOption";

/**
 * Keeps the certificates issuer dropdown aligned with the content currently loaded so the UI never exposes issuers without entries.
 *
 * @param certificatesDatabase Certificate dictionary for the archive view.
 * @returns Filter options deduped by slug and sorted alphabetically.
 */
export default function generateIssuerFilterOptions(
  certificatesDatabase: Database<CertificateInterface>
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(certificatesDatabase)
      .map((certificate) => ({
        slug: stringToSlug(certificate.issuer),
        entryName: certificate.issuer,
      }))
      .filter(
        (item, index, self) =>
          self.findIndex((v) => v.slug === item.slug) === index
      )
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];
}
