import getCertificateBySlug from "@/actions/getCertificateBySlug";
import Button from "@/components/Atoms/Button";
import Tag from "@/components/Atoms/Tag";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import allCertificates from "@/constants/certificates";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { RxTriangleRight } from "react-icons/rx";

/**
 * Metadata object for the dynamic certificate page.
 * @param (CredentialPageProps) - props: the content of the certificate
 * @param parent (ResolvingMetadata) - parent metadata
 * @returns (Promise<Metadata>): metadata for the certificate (title and description)
 */
export async function generateMetadata(
  { params, searchParams }: CredentialPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const slug = params.slug;

  // Assume getCertificateBySlug function fetches certificate by slug
  const certificate = getCertificateBySlug(slug, allCertificates);

  // Create metadata based on the certificate details
  return {
    title: `Maruf Bepary - Certificates: ${certificate?.name}`,
    description: certificate?.slug,
    openGraph: {
      // No images are specified in your Certificate object
      // but you can add them here if you have them
    },
  };
}

export const generateStaticParams = async () => {
  return allCertificates.map((certificate) => ({ slug: certificate.slug }));
};

type CredentialPageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

/**
 * Displays the page for a single certificate.
 * Contains:
 * - Name of the certificate
 * - The image of the certificate
 * - The unique slug of the certificate
 * - The issuer of the certificate
 * - The description of the certificate
 * - The learning outcomes of the certificate
 * - The skills of the certificate
 * - The issuer page of the certificate
 * @param params (CredentialPageProps) - props: the content of the certificate
 * @returns (JSX.Element): certificate page component
 */
const CredentialPage: React.FC<CredentialPageProps> = ({ params }) => {
  const slug = params.slug;

  const certificate = getCertificateBySlug(slug, allCertificates);
  if (!certificate) {
    notFound();
  }

  const certificateImage = `/certificates/${slug}.jpg`;

  return (
    <div className="flex flex-col space-y-6 align-top min-h-[85vh] relative">
      <HeadingTwo title={certificate.name} />

      {/* Certificate Image */}
      {certificateImage && (
        <div
          className="
						flex
						justify-center
						align-middle
						rounded-xl
						mb-6
						w-full
						overflow-hidden 
						p-3
						bg-neutral-100 dark:bg-neutral-950  
					"
        >
          <Image
            src={certificateImage}
            alt={`${certificate.name} certificate image`}
            className="rounded-xl object-cover"
            width={1000}
            height={2000}
          />
        </div>
      )}

      {/* Credential ID */}
      <div className="flex flex-col align-middle w-full">
        <p
          className="
            text-l text-center leading-7
          text-neutral-400 dark:text-neutral-600 
            overflow-auto break-words"
        >
          {slug}
        </p>
      </div>

      {/* Certificate Description */}
      {certificate.description && (
        <div className="flex flex-col gap-4">
          <HeadingThree title="Description" />
          <p className="text-lg">{certificate.description}</p>
        </div>
      )}

      <div className="mt-4 text-center md:text-left">
        {/* Credentials ID */}
        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-5">
          {certificate.learningOutcomes && (
            <div>
              <HeadingThree title="Learning Objectives" />
              {certificate.learningOutcomes.map((outcome, index) => (
                <div key={index} className="w-full p-2 flex items-center">
                  <RxTriangleRight className="text-primary mr-2" />
                  <p className="text-neutral-800 dark:text-neutral-200">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Metadata Section */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-10">
        {/* Left */}
        <div className="md:w-1/2">
          {/* Certificate Issuer */}
          <HeadingThree title="Certificate Issuer" />
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-5">
            <Tag>{certificate.issuer}</Tag>
          </div>
          <HeadingThree title="Links" />
          {/* Links */}
          <div
            className="
              mt-6 flex 
              flex-row 
              justify-center md:justify-start items-center 
              w-full 
              gap-2"
          >
            {/* Issuer Page */}
            {certificate.credentialURL && (
              <Link
                href={certificate.credentialURL}
                target="_blank"
                className="w-auto md:w-full"
              >
                <Button
                  variant={"ghost"}
                  className="
                        text-neutral-900 dark:text-white 
                        hover:text-neutral-900 
                        hover:bg-neutral-300
                        w-auto md:w-full
                        rounded-full md:rounded-xl
                      "
                >
                  <div className="flex flex-row justify-center md:justify-start gap-4 w-full">
                    <BsArrowUpRightCircle size={30} />
                    <p className="hidden md:block mt-1 md:text-left text-center">
                      Issuer Page
                    </p>
                  </div>
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2">
          <div className="mt-4 text-center md:text-left"></div>

          {/* Certificate Skills */}
          {certificate.skills && (
            <div className="mt-4 text-center md:text-left">
              <HeadingThree title="Skills" />
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {certificate.skills.map((skill, index) => (
                  <Tag key={index}>{skill}</Tag>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CredentialPage;