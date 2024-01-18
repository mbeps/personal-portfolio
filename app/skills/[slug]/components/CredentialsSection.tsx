import CredentialsList from "@/components/MaterialLists/CredentialsList";
import { Button } from "@/components/shadcn/ui/button";
import CertificateInterface from "@/interfaces/CertificateInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import Link from "next/link";

import React from "react";

interface CredentialsPageProps {
  certificates: CertificateInterface[];
  skill: SkillInterface;
}

const CredentialsSection: React.FC<CredentialsPageProps> = ({
  certificates,
  skill,
}) => {
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
      <CredentialsList groupedCertificates={groupedCertificates} />

      <div className="flex justify-center mt-10">
        <Link href="/credentials">
          <Button variant="outline">View All Credentials</Button>
        </Link>
      </div>
    </div>
  );
};

export default CredentialsSection;
