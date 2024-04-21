import CertificateIssuersEnum from "@/enums/Certificate/CertificateIssuersEnum";
import MaterialInterface from "../Materials/MaterialInterface";
import CertificateCategoriesEnum from "@/enums/Certificate/CertificateCategoriesEnum";

/**
 * Interface representing a certificate's metadata and not the content.
 * These certificates are displayed on the website and show the certificates earned by the user.
 *
 * The fields are:
 * - `description`: the description of the certificate explaining what the certificate is about
 * - `issuer`: the issuer of the certificate like Coursera, Udemy, etc.
 * - `certificateURL`: the URL of the certificate in the issuer's website
 * - `category`: the category of the certificate which is one of the categories defined in {@link CertificateCategoriesEnum}
 * - `certificateImage`: the image of the certificate added dynamically from function
 * - `learningOutcomes`: the learning outcomes of the certificate
 *
 * Importantly, because this extends the `MaterialInterface`,
 * it inherits the field `skills` which is an array of `SkillKeysEnum` which is used to represent the skills that are associated to understand the material.
 *
 * @requires {@link MaterialInterface} to inherit the fields of the material
 */
export default interface CertificateInterface extends MaterialInterface {
  description?: string;
  issuer: CertificateIssuersEnum;
  certificateURL: string;
  category: CertificateCategoriesEnum;
  certificateImage?: string;
  learningOutcomes?: string[];
}
