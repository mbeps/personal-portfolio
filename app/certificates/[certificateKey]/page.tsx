import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import MaterialList from "@/components/material-lists/MaterialList";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import SkillTableSection from "@/components/skills/SkillTableSection";
import Tag from "@/components/tags/Tag";
import StringList from "@/components/ui/StringList";
import developerName from "@/constants/developerName";
import { PATHS } from "@/constants/paths";
import { ROUTES } from "@/constants/routes";
import type CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import certificateDatabaseMap from "@/database/certificates/CertificateDatabaseMap";
import type CertificateInterface from "@/database/certificates/CertificateInterface";
import type ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";
import buildSkillTableGroups from "@/lib/skills/group/buildSkillTableGroups";
import hasAnySkills from "@/lib/skills/hasAnySkills";

type Params = Promise<{ certificateKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

/**
 * Builds SEO metadata for a certificate detail page so the route slug, issuer, and skills feed into the head tags.
 * Certificates live under `public/certificates/{certificateKey}.jpg`, so the slug directly maps to the asset used here.
 *
 * @param props Params promise resolved by Next.
 * @param parent Parent metadata from the layout pipeline.
 * @returns Metadata populated from the certificate entry.
 */
export async function generateMetadata(
  props: { params: Params; searchParams: SearchParams },
  _parent: ResolvingMetadata,
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
    title: `${developerName} - ${ROUTES.CERTIFICATES.name}: ${certificate?.name}`,
    description: certificate?.description,
    category: `${ROUTES.CERTIFICATES.name}`,
    creator: developerName,
  };
}

/**
 * Exposes every certificate key to Next for static generation so the assets under `public/certificates/{key}` are discoverable at build time.
 *
 * @returns Params for each certificate route.
 */
export const generateStaticParams = async () => {
  return Object.keys(certificateDatabaseMap).map((certificateKey) => ({
    certificateKey,
  }));
};

/**
 * Certificate detail view that ties the route slug to images stored under `public/certificates/{key}.jpg` and shared skills tables.
 * Reuses the same MaterialList and Tag components as other material routes so filters and related items feel consistent.
 *
 * @param params Dynamic slug for the certificate.
 * @returns Page displaying certificate info, credentials, and adjacent work.
 */
const CertificatesPage: React.FC<{ params: Params }> = async ({ params }) => {
  const resolvedParams = await params;
  const certificateKey =
    resolvedParams.certificateKey as CertificateDatabaseKeys;
  const certificateData: CertificateInterface =
    certificateDatabaseMap[certificateKey];

  if (!certificateData) {
    notFound();
  }

  const allGroupedSkills: ListOfCategorisedSkillsByTypeInterface[] =
    buildSkillTableGroups(certificateData.skills);
  const hasSkills = hasAnySkills(allGroupedSkills);
  const certificateImage = PATHS.CERTIFICATES(certificateKey);

  return (
    <main>
      <div className="relative space-y-6 align-top">
        <h2>{certificateData.name}</h2>

        <div className="space-y-1">
          {/* Certificate Image */}
          {certificateImage && (
            <Card>
              <CardContent className="p-3">
                <AspectRatio ratio={4 / 3} className="relative overflow-hidden">
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
          <div className="flex w-full flex-col align-middle">
            <p className="wrap-break-word overflow-auto text-center text-l text-neutral-400 leading-7 dark:text-neutral-600">
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

            {hasSkills && (
              <Card>
                <CardContent className="py-7">
                  <SkillTableSection allGroupedSkills={allGroupedSkills} />
                </CardContent>
              </Card>
            )}

            <Card>
              <CardContent className="py-5">
                <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0">
                  <div>
                    <div className="text-center md:text-left">
                      <h3>Certificate Issuer</h3>
                    </div>
                    <div className="z-10 mt-5 flex flex-row flex-wrap justify-center md:justify-start">
                      <Tag>{certificateData.issuer}</Tag>
                    </div>
                  </div>

                  <div>
                    <div className="text-center md:text-left">
                      <h3>Links</h3>
                    </div>
                    {/* Links */}
                    <div className="mt-6 flex w-full flex-row items-center justify-center gap-2 md:justify-start">
                      {/* Issuer Page */}
                      {certificateData.certificateURL && (
                        <Link
                          href={certificateData.certificateURL}
                          target="_blank"
                          className="w-auto md:w-full"
                        >
                          <Button variant="default">
                            <div className="flex w-full justify-center gap-4 align-center md:justify-start">
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
