import type React from "react";
import CvItemSkills from "@/app/cv/_components/CvItemSkills";
import type CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import type CertificateInterface from "@/database/certificates/CertificateInterface";

/**
 * Props for the AllCertificateItem component.
 */
interface AllCertificateItemProps {
  /** The certificate object to render. */
  certificate: CertificateInterface;
  /** The unique key for the certificate. */
  certificateKey: CertificateDatabaseKeys;
}

/**
 * AllCertificateItem renders full certificate details including issuer, description,
 * verification link, learning outcomes, and skills.
 *
 * @param {AllCertificateItemProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const AllCertificateItem: React.FC<AllCertificateItemProps> = ({
  certificate,
  certificateKey,
}) => {
  return (
    <div className="mb-10 break-inside-avoid">
      <div className="mb-2">
        <h3 className="font-bold text-2xl">{certificate.name}</h3>
        <div className="text-lg text-neutral-500 dark:text-neutral-400">
          {certificate.issuer}
        </div>
      </div>

      {certificate.description && (
        <p className="mb-4 text-lg text-neutral-700 dark:text-neutral-300">
          {certificate.description}
        </p>
      )}

      <div className="mb-6">
        <CvItemSkills skills={certificate.skills} showArchived={true} />
      </div>

      {certificate.learningOutcomes &&
        certificate.learningOutcomes.length > 0 && (
          <div className="mt-4">
            <h4 className="mb-4 border-neutral-200 border-b-2 pb-2 font-bold text-xl uppercase tracking-wider dark:border-neutral-800">
              Learning Outcomes
            </h4>
            <ul className="list-inside list-disc space-y-1 text-neutral-700 dark:text-neutral-300">
              {certificate.learningOutcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default AllCertificateItem;
