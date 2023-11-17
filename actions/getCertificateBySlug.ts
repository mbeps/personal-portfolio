import Certificate from "@/types/certificates";

function getCertificateBySlug(
  slug: string,
  certificates: Certificate[]
): Certificate | undefined {
  return certificates.find((certificate) => certificate.slug === slug);
}

export default getCertificateBySlug;
