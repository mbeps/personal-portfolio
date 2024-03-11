import stringToSlug from "@/actions/stringToSlug";
import FilterOption from "@/interfaces/filters/FilterOption";
import CertificateInterface from "@/interfaces/material/CertificateInterface";

/**
 * @deprecated
 */
export default function generateIssuerFilterOptions(
  certificates: CertificateInterface[]
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...certificates
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

export function generateIssuerFilterOptionsHashMap(certificatesMap: {
  [key: string]: CertificateInterface;
}): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(certificatesMap)
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
