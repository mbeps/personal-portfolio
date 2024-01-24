import CertificateInterface from "@/interfaces/CertificateInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function filterCertificatesBySkill(
  certificates: CertificateInterface[],
  selectedSkill: SkillInterface,
): CertificateInterface[] {
  // Recursive function to check if a certificate includes the selected skill or any of its related skills
  const includesSkill = (
    skillList: SkillInterface[],
    skillToCheck: SkillInterface,
  ): boolean => {
    return skillList.some(
      (skill) =>
        skill.slug === skillToCheck.slug ||
        (skill.relatedSkills &&
          includesSkill(skill.relatedSkills, skillToCheck)),
    );
  };

  return certificates.filter((certificate) =>
    includesSkill(certificate.skills, selectedSkill),
  );
}
