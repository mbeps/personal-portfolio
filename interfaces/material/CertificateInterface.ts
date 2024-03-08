import { CertificateIssuersEnum } from "@/enums/CertificateIssuersEnum";
import MaterialInterface from "./MaterialInterface";
import { CertificateCategoriesEnum } from "@/enums/CertificateCategoriesEnum";

export default interface CertificateInterface extends MaterialInterface {
  description?: string;
  issuer: CertificateIssuersEnum;
  certificateURL: string;
  category: CertificateCategoriesEnum;
  certificateImage?: string;
  learningOutcomes?: string[];
}
