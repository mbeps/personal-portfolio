import getCertificateBySlug from "@/actions/certificates/getCertificateBySlug";
import Tag from "@/components/Tags/Tag";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { RxTriangleRight } from "react-icons/rx";
import allCertificates from "@/database/certificates";
import { Button } from "@/components/shadcn/ui/button";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import filterAndGroupSkills from "@/actions/skills/filterAndGroupSkills";

/**
 * Metadata object for the dynamic certificate page.
 * @param (CredentialPageProps) - props: the content of the certificate
 * @param parent (ResolvingMetadata) - parent metadata
 * @returns (Promise<Metadata>): metadata for the certificate (title and description)
 */
export async function generateMetadata(
  { params, searchParams }: CertificatesPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // Read route params
  const slug = params.slug;

  // Assume getCertificateBySlug function fetches certificate by slug
  const certificate = getCertificateBySlug(slug, allCertificates);

  // Create metadata based on the certificate details
  return {
    title: `Maruf Bepary - Certificates: ${certificate?.name}`,
    description: certificate?.slug,
  };
}

export const generateStaticParams = async () => {
  return allCertificates.map((certificate) => ({ slug: certificate.slug }));
};

type CertificatesPageProps = {
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
const CertificatesPage: React.FC<CertificatesPageProps> = ({ params }) => {
  const slug = params.slug;

  const certificate = getCertificateBySlug(slug, allCertificates);
  if (!certificate) {
    notFound();
  }

  // Simplified grouping of skill types for certificates
  const allGroupedCertificateSkills = [
    filterAndGroupSkills(certificate.skills, "hard", "Technologies"),
    filterAndGroupSkills(certificate.skills, "general", "Technical Skills"),
    filterAndGroupSkills(certificate.skills, "soft", "Soft Skills"),
  ];

  const certificateImage = `/certificates/${slug}.jpg`;

  return (
    <div className="space-y-6 align-top min-h-[85vh] relative">
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
          <AspectRatio ratio={4 / 3} className="overflow-hidden relative">
            <Image
              src={certificateImage}
              alt={`${certificate.name} certificate image`}
              className="rounded-xl object-cover"
              fill={true}
              priority={true}
            />
          </AspectRatio>
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
          <div className="md:text-left text-center">
            <HeadingThree title="Description" />
          </div>
          <p className="text-lg">{certificate.description}</p>
        </div>
      )}

      <div className="mt-4 ">
        {/* Credentials ID */}
        {certificate.learningOutcomes && (
          <>
            <div className="text-center lg:text-left">
              <HeadingThree title="Learning Objectives" />
            </div>
            <div>
              <ul className="list-none text-lg">
                {certificate.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex mb-1.5">
                    <div className="mr-2 mt-1.5">
                      <RxTriangleRight />
                    </div>
                    <div>{outcome}</div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      <div className="mt-4">
        <SkillTableSection allGroupedSkills={allGroupedCertificateSkills} />
      </div>

      <div className="md:grid md:grid-cols-2">
        <div>
          <div className="md:text-left text-center">
            <HeadingThree title="Certificate Issuer" />
          </div>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-5">
            <Tag>{certificate.issuer}</Tag>
          </div>
        </div>

        <div>
          <div className="md:text-left text-center">
            <HeadingThree title="Links" />
          </div>
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
            {certificate.certificateURL && (
              <Link
                href={certificate.certificateURL}
                target="_blank"
                className="w-auto md:w-full"
              >
                <Button variant="default">
                  <div
                    className="
                      flex
                      justify-center md:justify-start
                      align-center
                      gap-4
                      w-full
                    "
                  >
                    <BsArrowUpRightCircle size={26} />
                    <p>Issuer Page</p>
                  </div>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CertificatesPage;
