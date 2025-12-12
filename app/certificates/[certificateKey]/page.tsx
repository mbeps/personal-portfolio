import buildSkillTableGroups from "@/lib/skills/group/buildSkillTableGroups";
import MaterialList from "@/components/material-lists/MaterialList";
import SkillTableCell from "@/components/skills/SkillTableSection";
import Tag from "@/components/tags/Tag";
import StringList from "@/components/ui/StringList";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import developerName from "@/constants/developerName";
import { CERTIFICATES_PAGE } from "@/constants/pages";
import certificateDatabaseMap from "@/database/certificates/CertificateDatabaseMap";
import CertificateInterface from "@/database/certificates/CertificateInterface";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

type Params = Promise<{ certificateKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

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
  props: { params: Params; searchParams: SearchParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await props.params;
  const certificateKey: string = resolvedParams.certificateKey;
  const certificate: CertificateInterface =
    certificateDatabaseMap[certificateKey];

  if (!certificate) {
    notFound();
  }

  // Create metadata based on the certificate details
  return {
    title: `${developerName} - Certificates: ${certificate?.name}`,
    description: certificate?.description,
    category: `${CERTIFICATES_PAGE.label}`,
    creator: developerName,
  };
}

/**
 * Generates the static params for certificates.
 * This includes the list of all certificate keys.
 *
 * @returns The params for each certificate.
 */
export const generateStaticParams = async () => {
  return Object.keys(certificateDatabaseMap).map((certificateKey) => ({
    certificateKey,
  }));
};

/**
 * Certificate detail view that pairs the static metadata with learning outcomes, skills, issuer tags, and related materials.
 * Reuses shared components like `MaterialList`, `SkillTableSection`, `StringList`, and image handling for consistency with other detail pages.
 *
 * @param params Dynamic slug for the certificate.
 * @returns Page displaying certificate info, credentials, and adjacent work.
 */
const CertificatesPage: React.FC<{ params: Params }> = async ({ params }) => {
  const resolvedParams = await params;
  const certificateKey: string = resolvedParams.certificateKey;
  const certificateData: CertificateInterface =
    certificateDatabaseMap[certificateKey];

  if (!certificateData) {
    notFound();
  }

  const allGroupedSkills: GroupedSkillsCategoriesInterface[] =
    buildSkillTableGroups(certificateData.skills);

  const certificateImage = `${CERTIFICATES_PAGE.path}/${certificateKey}.jpg`;

  return (
    <main>
      <div className="space-y-6 align-top relative">
        <h2>{certificateData.name}</h2>

        <div className="space-y-1">
          {/* Certificate Image */}
          {certificateImage && (
            <Card>
              <CardContent className="p-3">
                <AspectRatio ratio={4 / 3} className="overflow-hidden relative">
                  <Image
                    src={certificateImage}
                    alt={`${certificateData.name} certificate image`}
                    className="rounded-xl object-cover"
                    fill={true}
                    priority={true}
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          )}

          {/* Credential ID */}
          <div className="flex flex-col align-middle w-full">
            <p className="text-l text-center leading-7 text-neutral-400 dark:text-neutral-600 overflow-auto wrap-break-word">
              {certificateKey}
            </p>
          </div>

          <div className="material-sections-wrapper mt-10">
            {/* Certificate Description */}
            {certificateData.description && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-center md:text-left">
                    <h3>Description</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-800 dark:text-neutral-300">
                    {certificateData.description}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Learning Outcomes */}
            {certificateData.learningOutcomes && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-center md:text-left">
                    <h3>Learning Objectives</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <StringList items={certificateData.learningOutcomes} />
                </CardContent>
              </Card>
            )}

            <Card>
              <CardContent className="py-7">
                <SkillTableCell allGroupedSkills={allGroupedSkills} />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="py-5">
                <div className="md:grid md:grid-cols-2 space-y-6 md:space-y-0">
                  <div>
                    <div className="md:text-left text-center">
                      <h3>Certificate Issuer</h3>
                    </div>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-5">
                      <Tag>{certificateData.issuer}</Tag>
                    </div>
                  </div>

                  <div>
                    <div className="md:text-left text-center">
                      <h3>Links</h3>
                    </div>
                    {/* Links */}
                    <div className="mt-6 flex flex-row justify-center md:justify-start items-center w-full gap-2">
                      {/* Issuer Page */}
                      {certificateData.certificateURL && (
                        <Link
                          href={certificateData.certificateURL}
                          target="_blank"
                          className="w-auto md:w-full"
                        >
                          <Button variant="default">
                            <div className="flex justify-center md:justify-start align-center gap-4 w-full">
                              <BsArrowUpRightCircle size={26} />
                              <p>Issuer Page</p>
                            </div>
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {certificateData.relatedMaterials &&
              certificateData.relatedMaterials.length > 0 && (
                <MaterialList materialKeys={certificateData.relatedMaterials} />
              )}
          </div>
        </div>
      </div>
    </main>
  );
};
export default CertificatesPage;
