import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Certificate from "@/types/certificates";
import Tag from "../Atoms/Tag";

type CertificateItemProps = Certificate;

const CertificateItem: React.FC<CertificateItemProps> = ({
  name,
  slug,
  description,
  issuer,
  credentialURL,
  skills,
  certificateImage,
}) => {
  return (
    <div
      className="
      bg-neutral-100 dark:bg-neutral-950  
      sm:bg-white sm:dark:bg-neutral-900 
      p-4 sm:p-0
      rounded-xl 
      transition-colors duration-700 
      "
    >
      <div
        className="
        flex flex-col lg:flex-row 
        lg:space-x-8
      "
      >
        {/* Certificate Image */}
        {certificateImage && (
          <div
            className="
              rounded-xl
              transform hover:scale-105 
              shadow-xl hover:shadow-2xl
              transition-all duration-500 ease-in-out
            "
          >
            <Image
              src={certificateImage}
              alt={`${name} certificate image`}
              width={1000}
              height={1000}
              className="rounded-xl cursor-pointer"
            />
          </div>
        )}

        <div className="flex flex-col gap-4 px-4 py-8">
          <div className={"w-full "}>
            {/* Certificate Title */}
            <h1
              className="
              text-3xl md:text-4xl font-bold text-center md:text-left 
              mb-6 hover:text-red-500 dark:hover:text-red-800
              transition-colors duration-700 ease-in-out
            "
            >
              {name}
            </h1>
            {/* Certificate Description and Details */}
            <p className="text-xl text-left leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
            <p className="text-l text-left leading-7 mb-4 text-neutral-500 dark:text-neutral-500">
              {slug}
            </p>
          </div>
          <div className="max-w-[20]">
            <Tag>{issuer}</Tag>
          </div>
          <div>
            {/* Link to Credential */}
            {credentialURL && (
              <Link
                href={credentialURL}
                target="_blank"
                title="View Credentials on Provider's Website"
              >
                <BsArrowUpRightCircle size={30} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
