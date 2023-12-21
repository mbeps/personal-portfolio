import Certificate from "@/types/certificates";
import Skill from "@/types/skills";

export default function isSkillAssociatedWithCertificates(
  skillToCheck: Skill,
  certificates: Certificate[]
): boolean {
  return certificates.some((certificate) => {
    // Function to check nested skills
    const checkNestedSkills = (skills: Skill[]) =>
      skills.some(
        (skill) =>
          skill.slug === skillToCheck.slug ||
          (skill.technicalGeneralSkills || []).some(
            (nestedSkill) => nestedSkill.slug === skillToCheck.slug
          )
      );

    // Check technicalSkills and softSkills, including nested skills in technicalSkills
    return (
      (certificate.technicalSkills &&
        checkNestedSkills(certificate.technicalSkills)) ||
      (certificate.softSkills && checkNestedSkills(certificate.softSkills))
    );
  });
}
