import CredentialListSection from "@/app/credentials/components/CredentialListSection";
import Button from "@/components/Atoms/Button";
import Certificate from "@/types/certificates";
import { Skill } from "@/types/skills";
import Link from "next/link";

import React from "react";

interface ProjectPageProps {
  certificates: Certificate[];
  skill: Skill;
}

const CredentialsSection: React.FC<ProjectPageProps> = ({
  certificates,
  skill,
}) => {
  const filterCertificatesBySkill = (
    certificates: Certificate[],
    selectedSkill: string
  ): Certificate[] => {
    return certificates.filter((certificate) =>
      certificate.skills.some(
        (s) => s.skill.toLowerCase() === selectedSkill.toLowerCase()
      )
    );
  };

  const filteredCertificates = filterCertificatesBySkill(
    certificates,
    skill.skill
  );

  if (!filteredCertificates || filteredCertificates.length === 0) {
    return;
  }

  const groupCertificatesByCategory = (
    certificates: Certificate[]
  ): Record<string, Certificate[]> => {
    return { Certificates: certificates };
  };

  const groupedCertificates = groupCertificatesByCategory(filteredCertificates);

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <CredentialListSection groupedCertificates={groupedCertificates} />

      <Link href="/credentials" className="flex justify-center mt-10">
        <Button variant="outlined">View All Credentials</Button>
      </Link>
    </div>
  );
};

export default CredentialsSection;
