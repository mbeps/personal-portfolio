import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import CertificateInterface from "@/interfaces/CertificateInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle, BsInfoCircle } from "react-icons/bs";
import Tag from "../Tags/Tag";
import { AspectRatio } from "../shadcn/ui/aspect-ratio";

interface CertificateItemProps {
  certificate: CertificateInterface;
}

/**
 * Card which displays each certificate.
 * Contains:
 * - Name of the certificate
 * - Unique slug of the certificate
 * - Issuer of the certificate
 * - Button to open details about the certificate or issuer website
 * @param (CertificateItemProps) - props: the content of the certificate
 * @returns (JSX.Element): certificate item component
 */
const CertificateItem: React.FC<CertificateItemProps> = ({ certificate }) => {
  const customCertificatePage = `/credentials/${certificate.slug}`;
  const issuerCertificatePage = certificate.certificateURL;

  certificate = {
    ...certificate,
    certificateImage: `/certificates/${certificate.slug}.jpg`,
  };

  return (
    <div
      className="
        bg-neutral-100 dark:bg-neutral-950
        p-3 lg:p-6 rounded-xl
        transition-colors duration-700
        flex flex-col
        animate-slideUpCubiBezier animation-delay-2
        h-full
        w-full
      "
    >
      {/* Certificate Image */}
      {certificate.certificateImage && (
        <Link href={customCertificatePage}>
          <div
            className="
            flex justify-center
            rounded-xl
            transform md:hover:scale-105
            shadow-lg md:hover:shadow-2xl
            transition-all duration-500 ease-in-out
            mb-6
            w-full
            overflow-hidden
        "
          >
            <AspectRatio ratio={4 / 3} className="overflow-hidden relative">
              <Image
                key={certificate.slug}
                src={certificate.certificateImage}
                alt={`${certificate.name} certificate image`}
                fill={true}
                quality={40}
                className="
                  rounded-xl
                  cursor-pointer
                  object-cover
              "
              />
            </AspectRatio>
          </div>
        </Link>
      )}

      <div
        className="
        flex flex-col 
        gap-8 px-4 py-4"
      >
        {/* Certificate Title */}
        <Link href={customCertificatePage}>
          <h1
            className="
              text-3xl md:text-4xl font-bold text-center 
              md:hover:text-red-500 md:dark:hover:text-red-800
              transition-colors duration-700 ease-in-out
              "
          >
            {certificate.name}
          </h1>
        </Link>

        <div className="w-full flex justify-center">
          <Tag>{certificate.issuer}</Tag>
        </div>
        <div
          className="
            flex flex-row 
            justify-center 
            align-bottom 
            space-x-4"
        >
          {/* Link to Credential Page */}

          <Tooltip>
            <TooltipTrigger>
              <Link href={customCertificatePage}>
                <BsInfoCircle
                  size={30}
                  className="md:hover:-translate-y-1 transition-transform cursor-pointer"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Certificate Details </p>
            </TooltipContent>
          </Tooltip>
          {/* Link to Credential */}
          {certificate.certificateURL && (
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={issuerCertificatePage}
                  target="_blank"
                  title="View Certificates on Provider's Website"
                >
                  <BsArrowUpRightCircle
                    size={30}
                    className="md:hover:-translate-y-1 transition-transform cursor-pointer"
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
