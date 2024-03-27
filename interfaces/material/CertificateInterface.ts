import CertificateIssuersEnum from "@/enums/CertificateIssuersEnum";
import MaterialInterface from "./MaterialInterface";
import CertificateCategoriesEnum from "@/enums/CertificateCategoriesEnum";

/**
 * Interface representing a certificate's metadata and not the content.
 * These certificates are displayed on the website and show the certificates earned by the user.
 * Importantly, because the `CertificateInterface` extends the `MaterialInterface`, it inherits the field `skills` which is an array of `SkillKeysEnum` which is used to represent the skills that are associated to understand the material.
 *
 * @requires {@link MaterialInterface}
 */
export default interface CertificateInterface extends MaterialInterface {
  description?: string;
  issuer: CertificateIssuersEnum; // issuer of the certificate
  certificateURL: string; // link to the certificate in the issuer's website
  category: CertificateCategoriesEnum;
  certificateImage?: string; // image of the certificate added dynamically from function
  learningOutcomes?: string[];
}
