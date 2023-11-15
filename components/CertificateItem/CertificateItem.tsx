import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Certificate from "@/types/certificates";

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
    <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-xl sm:bg-white sm:dark:bg-neutral-900 sm:p-0 transition-colors duration-700">
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        {/* Certificate Image */}
        {certificateImage && (
          <div
            className="
              lg:w-1/2
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

        <div className={`mt-8 ${certificateImage ? "lg:w-1/2" : "lg:w-full"}`}>
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
          <p className="text-xl text-left leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
            Issued by: {issuer}
          </p>
          <p className="text-xl text-left leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
            Skills: {skills.join(", ")}
          </p>

          {/* Link to Credential */}
          {credentialURL && (
            <Link href={credentialURL} target="_blank">
              <BsArrowUpRightCircle size={30} />
              <span>View Credential</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
