import CertificatesList from "@/components/MaterialLists/CertificatesList";
import { Button } from "@/components/shadcn/ui/button";
import { CERTIFICATES } from "@/constants/pages";
import CertificateInterface from "@/interfaces/CertificateInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import Link from "next/link";

import React from "react";

interface CertificatesSectionProps {
  certificates: CertificateInterface[];
  skill: SkillInterface;
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  certificates,
  skill,
}) => {
  const basePath = CERTIFICATES.path;

  const filterCertificatesBySkill = (
    certificates: CertificateInterface[],
    selectedSkill: SkillInterface,
  ): CertificateInterface[] => {
    const skillMatches = (skill: SkillInterface): boolean => {
      // Check if the skill matches
      if (skill.slug === selectedSkill.slug) {
        return true;
      }

      // Check nested skills, if any
      if (
        skill.technicalGeneralSkills &&
        skill.technicalGeneralSkills.length > 0
      ) {
        return skill.technicalGeneralSkills.some((subSkill) =>
          skillMatches(subSkill),
        );
      }

      return false;
    };

    return certificates.filter(
      (certificate) =>
        certificate.technicalSkills.some(skillMatches) ||
        certificate.softSkills.some(skillMatches),
    );
  };

  const filteredCertificates = filterCertificatesBySkill(certificates, skill);

  if (!filteredCertificates || filteredCertificates.length === 0) {
    return;
  }

  const groupCertificatesByCategory = (
    certificates: CertificateInterface[],
  ): Record<string, CertificateInterface[]> => {
    return { Certificates: certificates };
  };

  const groupedCertificates = groupCertificatesByCategory(filteredCertificates);

  return (
    <div className="flex flex-col space-y-10 align-top relative">
      <CertificatesList groupedCertificates={groupedCertificates} />

      <div className="flex justify-center mt-10">
        <Link href={basePath}>
          <Button variant="outline">View All Certificates</Button>
        </Link>
      </div>
    </div>
  );
};

export default CertificatesSection;
