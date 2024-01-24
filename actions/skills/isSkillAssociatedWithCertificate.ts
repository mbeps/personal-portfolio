import CertificateInterface from "@/interfaces/CertificateInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function isSkillAssociatedWithCertificates(
  skillToCheck: SkillInterface,
  certificates: CertificateInterface[],
): boolean {
  const checkNestedSkills = (
    skills: SkillInterface[],
    skillSlug: string,
  ): boolean => {
    return skills.some(
      (skill) =>
        skill.slug === skillSlug ||
        (skill.relatedSkills &&
          checkNestedSkills(skill.relatedSkills, skillSlug)),
    );
  };

  return certificates.some((certificate) =>
    checkNestedSkills(certificate.skills, skillToCheck.slug),
  );
}
