import CertificateInterface from "@/interfaces/CertificateInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function isSkillAssociatedWithCertificates(
  skillToCheck: SkillInterface,
  certificates: CertificateInterface[],
): boolean {
  return certificates.some((certificate) => {
    // Function to check nested skills
    const checkNestedSkills = (skills: SkillInterface[]) =>
      skills.some(
        (skill) =>
          skill.slug === skillToCheck.slug ||
          (skill.technicalGeneralSkills || []).some(
            (nestedSkill) => nestedSkill.slug === skillToCheck.slug,
          ),
      );

    // Check technicalSkills and softSkills, including nested skills in technicalSkills
    return (
      (certificate.technicalSkills &&
        checkNestedSkills(certificate.technicalSkills)) ||
      (certificate.softSkills && checkNestedSkills(certificate.softSkills))
    );
  });
}
