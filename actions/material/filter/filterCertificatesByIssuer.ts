import stringToSlug from "@/actions/stringToSlug";
import CertificateInterface from "@/interfaces/material/CertificateInterface";

export default function filterCertificatesByIssuer(
  issuer: string,
  materialKeys: string[],
  certificatesMap: Database<CertificateInterface>
): string[] {
  return materialKeys.reduce<string[]>((acc, key) => {
    const certificate = certificatesMap[key];
    if (
      certificate &&
      stringToSlug(certificate.issuer) === stringToSlug(issuer)
    ) {
      acc.push(key); // Adding the key to the accumulator if the certificate matches the issuer
    }
    return acc;
  }, []);
}
