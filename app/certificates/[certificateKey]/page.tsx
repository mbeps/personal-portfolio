import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import MaterialList from "@/components/MaterialLists/MaterialList";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import Tag from "@/components/Tags/Tag";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import StringList from "@/components/Text/StringList";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import { CERTIFICATES_PAGE } from "@/constants/pages";
import certificateDatabaseMap from "@/database/Certificates/CertificateDatabaseMap";
import CertificateInterface from "@/database/Certificates/CertificateInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import MaterialTypeEnum from "@/enums/Material/MaterialTypeEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

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
  const certificateKey: string = params.certificateKey;
  const certificate: CertificateInterface =
    certificateDatabaseMap[certificateKey];

  // Create metadata based on the certificate details
  return {
    title: `${developerName} - Certificates: ${certificate?.name}`,
    description: certificate?.description,
    category: `${CERTIFICATES_PAGE.label}`,
    creator: developerName,
    keywords: [
      certificate?.name,
      ...certificate?.skills.map((skill) => skillDatabaseMap[skill].name),
    ],
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
  return Object.keys(certificateDatabaseMap).map((certificateKey) => ({
    certificateKey,
  }));
};

type CertificatesPageProps = {
  params: { certificateKey: string };
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
 * The page also displays:
 * - The skills covered in the certificate
 * - Related materials
 *
 * @param params Parameters for the certificate page
 * @returns Page displaying the certificate and its details
 */
const CertificatesPage: React.FC<CertificatesPageProps> = ({ params }) => {
  const certificateKey: string = params.certificateKey;
  const certificateData: CertificateInterface =
    certificateDatabaseMap[certificateKey];

  if (!certificateData) {
    notFound();
  }

  const technologies: SkillDatabaseKeys[] = filterSkillsByType(
    certificateData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Technology
  );
  const generalSkills: SkillDatabaseKeys[] = filterSkillsByType(
    certificateData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Technical
  );
  const softSkills: SkillDatabaseKeys[] = filterSkillsByType(
    certificateData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Soft
  );

  // Simplified grouping of skill types for certificates
  const allGroupedSkills: GroupedSkillsCategoriesInterface[] = [
    categoriseAndGroupSkills(
      technologies,
      skillDatabaseMap,
      SkillTypesEnum.Technology,
      "Technologies"
    ),
    categoriseAndGroupSkills(
      generalSkills,
      skillDatabaseMap,
      SkillTypesEnum.Technical,
      "Technical Skills"
    ),
    categoriseAndGroupSkills(
      softSkills,
      skillDatabaseMap,
      SkillTypesEnum.Soft,
      "Soft Skills"
    ),
  ];

  const certificateImage = `${CERTIFICATES_PAGE.path}/${certificateKey}.jpg`;

  return (
    <main>
      <div className="sr-only">
        <h1>{certificateData.name}</h1>
        <h2>{certificateData.description}</h2>

        <h3>Skills for certificate:</h3>
        {certificateData.skills.map((skill) => (
          <p key={skill}>{skillDatabaseMap[skill].name}</p>
        ))}
      </div>

      <div className="space-y-6 align-top min-h-[85vh] relative">
        <HeadingTwo title={certificateData.name} />

        <div className="space-y-1">
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

          <div className="space-y-14">
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

            <div>
              {/* Learning Outcomes */}
              {certificateData.learningOutcomes && (
                <>
                  <div className="text-center lg:text-left">
                    <HeadingThree title="Learning Objectives" />
                  </div>
                  <StringList items={certificateData.learningOutcomes} />
                </>
              )}
            </div>

            <SkillTableSection allGroupedSkills={allGroupedSkills} />

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
                <div className="mt-8">
                  <MaterialList
                    materialKeys={certificateData.relatedMaterials}
                    defaultTab={MaterialTypeEnum.Certificates}
                    sectionName={certificateData.name}
                  />
                </div>
              )}
          </div>
        </div>
      </div>
    </main>
  );
};
export default CertificatesPage;
