import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircle, BsInfoCircle } from "react-icons/bs";
import Certificate from "@/types/certificates";
import Tag from "../Atoms/Tag";

type CertificateItemProps = Certificate;

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
const CertificateItem: React.FC<CertificateItemProps> = ({
  name,
  slug,
  description,
  issuer,
  credentialURL,
  certificateImage,
}) => {
  const customCredentialPage = `/credentials/${slug}`;
  const issuerCredentialPage = credentialURL;

  return (
    <div
      className="
      bg-neutral-100 dark:bg-neutral-950  
      p-3 lg:p-6 rounded-xl 
      transition-colors duration-700 
      flex flex-col
      animate-slideUpCubiBezier animation-delay-2
      "
      style={{ height: "auto" }}
    >
      {/* Certificate Image */}
      {certificateImage && (
        <Link
          href={customCredentialPage}
          className="
            flex justify-center
            rounded-xl
            transform hover:scale-105 
            shadow-xl hover:shadow-2xl
            transition-all duration-500 ease-in-out
            h-68 md:78 lg:h-96
            mb-6
            w-full
            overflow-hidden 
          "
        >
          <Image
            src={certificateImage}
            alt={`${name} certificate image`}
            className="rounded-xl cursor-pointer object-cover"
            width={1000}
            height={1000}
          />
        </Link>
      )}

      <div
        className="
        flex flex-col 
        gap-8 px-4 py-4"
      >
        {/* Certificate Title */}
        <Link href={customCredentialPage}>
          <h1
            className="
              text-3xl md:text-4xl font-bold text-center 
              hover:text-red-500 dark:hover:text-red-800
              transition-colors duration-700 ease-in-out
              
              "
          >
            {name}
          </h1>
        </Link>

        {/* Slug */}
        <p
          className="
          text-l text-center leading-7
          text-neutral-400 dark:text-neutral-600 
          overflow-auto break-words"
        >
          {slug}
        </p>
        {/* Issuer Tag */}
        <div className="w-full flex justify-center">
          <Tag>{issuer}</Tag>
        </div>
        <div
          className="
            flex flex-row 
            justify-center 
            align-bottom 
            space-x-4"
        >
          {/* Link to Credential Page */}
          <Link href={customCredentialPage}>
            <BsInfoCircle
              size={30}
              className="hover:-translate-y-1 transition-transform cursor-pointer"
            />
          </Link>
          {/* Link to Credential */}
          {credentialURL && (
            <Link
              href={issuerCredentialPage}
              target="_blank"
              title="View Credentials on Provider's Website"
            >
              <BsArrowUpRightCircle
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
