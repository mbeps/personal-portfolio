import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { BsArrowUpRightCircle, BsInfoCircle } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import { PATHS } from "@/constants/paths";
import { ROUTES } from "@/constants/routes";
import type CertificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import certificateDatabaseMap from "@/database/certificates/certificate-database-map";
import type CertificateInterface from "@/database/certificates/certificate-interface";
import { AspectRatio } from "../shadcn/ui/aspect-ratio";
import Tag from "../tags/tag";

interface CertificateItemProps {
  certificateKey: CertificateDatabaseKeys;
}

/**
 * Certificate grid card used across archive and related sections, pairing issuer tags with CTA buttons and cover imagery.
 * Mirrors the detail page metadata so visitors can jump straight to issuer sites or the internal certificate screen.
 *
 * @param certificateKey Certificate slug from the static database.
 * @returns Card with image, issuer tag, and quick links.
 */
const CertificateItem: React.FC<CertificateItemProps> = ({
  certificateKey,
}) => {
  const basePath: string = ROUTES.CERTIFICATES.path;
  let certificateData: CertificateInterface =
    certificateDatabaseMap[certificateKey];

  const customCertificatePage: string = `${basePath}/${certificateKey}`;
  const issuerCertificatePage: string = certificateData.certificateURL;

  certificateData = {
    ...certificateData,
    certificateImage: PATHS.CERTIFICATES(certificateKey),
  };

  return (
    <div className="flex h-full w-full flex-col rounded-xl border border-neutral-300 bg-neutral-100 p-3 shadow-sm transition-colors duration-700 lg:p-6 dark:border-neutral-700 dark:bg-neutral-800">
      {/* Certificate Image */}
      {certificateData.certificateImage && (
        <Link href={customCertificatePage}>
          <div className="mb-6 flex w-full transform justify-center overflow-hidden rounded-xl border border-neutral-100 shadow-xs transition-all duration-500 ease-in-out md:hover:scale-105 md:hover:shadow-lg dark:border-neutral-800">
            <AspectRatio ratio={4 / 3} className="relative overflow-hidden">
              <Image
                key={certificateKey}
                src={certificateData.certificateImage}
                alt={`${certificateData.name} certificate image`}
                fill={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={20}
                loading="lazy"
                className="cursor-pointer rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
        </Link>
      )}

      <div className="flex flex-col gap-8 px-4 py-4">
        {/* Certificate Title */}
        <Link href={customCertificatePage}>
          <h1 className="text-center font-bold text-3xl transition-colors duration-700 ease-in-out md:text-4xl md:hover:text-red-500 md:dark:hover:text-red-800">
            {certificateData.name}
          </h1>
        </Link>

        <div className="flex w-full justify-center">
          <Tag>{certificateData.issuer}</Tag>
        </div>
        <div className="flex flex-row justify-center space-x-4 align-bottom">
          {/* Link to Credential Page */}

          <Tooltip>
            <TooltipTrigger>
              <Link href={customCertificatePage}>
                <BsInfoCircle
                  size={30}
                  className="cursor-pointer transition-transform md:hover:-translate-y-1"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Certificate Details </p>
            </TooltipContent>
          </Tooltip>
          {/* Link to Credential */}
          {certificateData.certificateURL && (
            <Tooltip>
              <TooltipTrigger>
                <Link href={issuerCertificatePage} target="_blank">
                  <BsArrowUpRightCircle
                    size={30}
                    className="cursor-pointer transition-transform md:hover:-translate-y-1"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>View in Certificate Providers Site</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
