import stringToSlug from "@/actions/stringToSlug";
import FilterOption from "@/interfaces/filters/FilterOption";
import CertificateInterface from "@/database/Certificates/CertificateInterface";

/**
 * Generates the filter options based on the issuers of the certificates.
 * For all the certificates, it will generate a filter option for each unique issuer.
 * These are then used as options the user can select to filter the certificates.
 *
 * @param certificatesDatabase The database of all certificates from which to generate the filter options
 * @returns The filter options generated from the issuers of the certificates
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
