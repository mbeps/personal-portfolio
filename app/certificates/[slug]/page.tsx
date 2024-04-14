import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import MaterialList from "@/components/MaterialLists/MaterialList";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import Tag from "@/components/Tags/Tag";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import certificateDatabase from "@/database/certificates";
import skillDatabase from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import CertificateInterface from "@/interfaces/material/CertificateInterface";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { RxTriangleRight } from "react-icons/rx";

/**
 * Generates the metadata for the certificates page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the certificates page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export async function generateMetadata(
  { params, searchParams }: CertificatesPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const certificateKey: string = params.slug;
  const certificate: CertificateInterface = certificateDatabase[certificateKey];

  // Create metadata based on the certificate details
  return {
    title: `${developerName} - Certificates: ${certificate?.name}`,
    description: certificate?.description,
  };
}

/**
 * Generates the metadata for the skill page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the skill page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const generateStaticParams = async () => {
  return Object.keys(certificateDatabase).map((slug) => ({
    slug,
  }));
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
 *
 * @param params The certificate identifier used to fetch the certificate
 * @returns Page displaying the certificate and its details
 */
const CertificatesPage: React.FC<CertificatesPageProps> = ({ params }) => {
  const certificateKey: string = params.slug;
  const certificateData: CertificateInterface =
    certificateDatabase[certificateKey];

  if (!certificateData) {
    notFound();
  }

  const technologies: SkillKeysEnum[] = filterSkillsByType(
    certificateData.skills,
    skillDatabase,
    SkillTypesEnum.Hard
  );
  const generalSkills: SkillKeysEnum[] = filterSkillsByType(
    certificateData.skills,
    skillDatabase,
    SkillTypesEnum.General
  );
  const softSkills: SkillKeysEnum[] = filterSkillsByType(
    certificateData.skills,
    skillDatabase,
    SkillTypesEnum.Soft
  );

  // Simplified grouping of skill types for certificates
  const allGroupedSkills = [
    categoriseAndGroupSkills(
      technologies,
      skillDatabase,
      SkillTypesEnum.Hard,
      "Technologies"
    ),
    categoriseAndGroupSkills(
      generalSkills,
      skillDatabase,
      SkillTypesEnum.General,
      "Technical Skills"
    ),
    categoriseAndGroupSkills(
      softSkills,
      skillDatabase,
      SkillTypesEnum.Soft,
      "Soft Skills"
    ),
  ];
  const certificateImage = `/certificates/${certificateKey}.jpg`;

  return (
    <div className="space-y-6 align-top min-h-[85vh] relative">
      <HeadingTwo title={certificateData.name} />

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
              alt={`${certificateData.name} certificate image`}
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
          {certificateKey}
        </p>
      </div>

      {/* Certificate Description */}
      {certificateData.description && (
        <div className="flex flex-col">
          <div className="md:text-left text-center">
            <HeadingThree title="Description" />
          </div>
          <p className="text-lg text-neutral-800 dark:text-neutral-300">
            {certificateData.description}
          </p>
        </div>
      )}

      <div className="mt-4 ">
        {/* Credentials ID */}
        {certificateData.learningOutcomes && (
          <>
            <div className="text-center lg:text-left">
              <HeadingThree title="Learning Objectives" />
            </div>
            <div>
              <ul className="list-none text-lg">
                {certificateData.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex mb-1.5">
                    <div className="mr-2 mt-1.5">
                      <RxTriangleRight />
                    </div>
                    <div className="text-neutral-800 dark:text-neutral-300">
                      {outcome}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      <div className="mt-4">
        <SkillTableSection allGroupedSkills={allGroupedSkills} />
      </div>

      <div className="md:grid md:grid-cols-2">
        <div>
          <div className="md:text-left text-center">
            <HeadingThree title="Certificate Issuer" />
          </div>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-5">
            <Tag>{certificateData.issuer}</Tag>
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
            {certificateData.certificateURL && (
              <Link
                href={certificateData.certificateURL}
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

      {certificateData.relatedMaterials &&
        certificateData.relatedMaterials.length > 0 && (
          <>
            <div className="border-b border-gray-200 dark:border-neutral-600 pb-4" />
            <MaterialList materialKeys={certificateData.relatedMaterials} />
          </>
        )}
    </div>
  );
};
export default CertificatesPage;
