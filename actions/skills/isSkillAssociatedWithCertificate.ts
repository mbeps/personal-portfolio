import Certificate from "@/types/certificates";
import { Skill } from "@/types/skills";

export default function isSkillAssociatedWithCertificates(
  skillToCheck: Skill,
  certificates: Certificate[]
): boolean {
  return certificates.some(
    (certificate) =>
      (certificate.technicalSkills || []).some(
        (skill) => skill.slug === skillToCheck.slug
      ) ||
      (certificate.softSkills || []).some(
        (skill) => skill.slug === skillToCheck.slug
      )
  );
}
