import type CertificateCategoriesEnum from "@/enums/certificate/certificate-categories-enum";
import type CertificateIssuersEnum from "@/enums/certificate/certificate-issuers-enum";
import type MaterialInterface from "../materials/material-interface";

/**
 * Extends the base material contract for certificates, tying metadata to issuers and assets stored under `public/certificates`.
 */
export default interface CertificateInterface extends MaterialInterface {
  /** Narrative describing what the certificate covered. */
  description?: string;
  /** Issuer label used for filtering and tags. */
  issuer: CertificateIssuersEnum;
  /** Link to the issuer’s verification page. */
  certificateURL: string;
  /** Category used for drawer filtering. */
  category: CertificateCategoriesEnum;
  /** Optional image filename living under the certificate’s route folder. */
  certificateImage?: string;
  /** Bullet list summarising outcomes learned. */
  learningOutcomes?: string[];
}
