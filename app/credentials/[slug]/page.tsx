import getCertificateBySlug from "@/actions/getCertificateBySlug";
import Button from "@/components/Atoms/Button";
import Tag from "@/components/Atoms/Tag";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import allCertificates from "@/constants/certificates";
import { Skill } from "@/types/skills";
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

  const credentialsTechnologies = certificate.skills.filter(
    (skill) => skill.skillType === "hard"
  );

  const credentialsGeneralSkills = certificate.skills.filter(
    (skill) => skill.skillType === "general"
  );

  const credentialsSoftSkills = certificate.skills.filter(
    (skill) => skill.skillType === "soft"
  );

  const groupCertificateSkillsByCategory = (
    skills: Skill[]
  ): Record<string, Skill[]> => {
    // Group skills by category
    const grouped = skills
      .filter((skill) => skill.category !== undefined)
      .reduce<Record<string, Skill[]>>((acc, skill) => {
        const category = skill.category as string;
        (acc[category] = acc[category] || []).push(skill);
        return acc;
      }, {});

    // Sort categories by the number of skills and get the top 2 categories
    const topCategories = Object.keys(grouped)
      .sort((a, b) => grouped[b].length - grouped[a].length)
      .slice(0, 2);

    // Create the final grouped object with only top 2 categories and 'Others'
    return Object.keys(grouped).reduce<Record<string, Skill[]>>(
      (acc, category) => {
        if (topCategories.includes(category)) {
          acc[category] = grouped[category];
        } else {
          acc["Others"] = [...(acc["Others"] || []), ...grouped[category]];
        }
        return acc;
      },
      {}
    );
  };

  const groupedTechnologies = groupCertificateSkillsByCategory(
    credentialsTechnologies
  );
  const groupedGeneralSkills = groupCertificateSkillsByCategory(
    credentialsGeneralSkills
  );
  const groupedSoftSkills = groupCertificateSkillsByCategory(
    credentialsSoftSkills
  );

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

      {/* Metadata Section */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-10">
        {/* Left */}
        {/* Certificate Issuer */}
      </div>

      {/* Right */}
      {/* Certificate Skills */}
      {/* Technologies Section */}
      {credentialsTechnologies.length > 0 && (
        <SkillTableSection
          skillCategories={groupedTechnologies}
          title="Technologies"
        />
      )}

      {/* Technical Skills Section */}
      {credentialsGeneralSkills.length > 0 && (
        <SkillTableSection
          skillCategories={groupedGeneralSkills}
          title="Technical Skills"
        />
      )}

      {/* Soft Skills Section */}
      {credentialsSoftSkills.length > 0 && (
        <SkillTableSection
          skillCategories={groupedSoftSkills}
          title="Soft Skills"
        />
      )}

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
      </div>
    </div>
  );
};
export default CredentialPage;
