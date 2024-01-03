import CredentialListSection from "@/app/credentials/components/CredentialListSection";
import { Button } from "@/components/shadcn/ui/button";
import Certificate from "@/types/certificates";
import Skill from "@/types/skills";
import Link from "next/link";

import React from "react";

interface CredentialsPageProps {
  certificates: Certificate[];
  skill: Skill;
}

const CredentialsSection: React.FC<CredentialsPageProps> = ({
  certificates,
  skill,
}) => {
  const filterCertificatesBySkill = (
    certificates: Certificate[],
    selectedSkill: Skill,
  ): Certificate[] => {
    const skillMatches = (skill: Skill): boolean => {
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
    certificates: Certificate[],
  ): Record<string, Certificate[]> => {
    return { Certificates: certificates };
  };

  const groupedCertificates = groupCertificatesByCategory(filteredCertificates);

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <CredentialListSection groupedCertificates={groupedCertificates} />

      <Link href="/credentials" className="flex justify-center mt-10">
        <Button variant="outline">View All Credentials</Button>
      </Link>
    </div>
  );
};

export default CredentialsSection;
