import getCertificateBySlug from "@/actions/getCertificateBySlug";
import getSkillBySlug from "@/actions/getSkillBySlug";
import updateCredentialImages from "@/actions/updateCredentialImages";
import CredentialListSection from "@/app/credentials/components/CredentialListSection";
import HeadingOne from "@/components/Text/HeadingOne";
import allCertificates from "@/constants/certificates";

import allProjects from "@/constants/projects";
import generalSkills from "@/constants/skills/generalSkills";
import hardSkills from "@/constants/skills/hardSkills";
import softSkills from "@/constants/skills/softSkills";
import Certificate from "@/types/certificates";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import CredentialsSection from "./components/CredentialsSection";

const allSkills = [...hardSkills, ...generalSkills, ...softSkills];

// export async function generateMetadata(
//   { params, searchParams }: ProjectPageProps,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // Read route params
//   const slug = params.slug;

//   // Assume getProjectBySlug function fetches project by slug
//   const skill = getSkillBySlug(slug, allSkills);

//   // Create metadata based on the project details
//   return {
//     title: `Maruf Bepary - Projects: ${skill?.skill}`,
//     description: `${skill?.skill} at ${skill?.category}`,
//   };
// }

// export const generateStaticParams = async () => {
//   return allSkills.map((skill) => ({ slug: skill.slug }));
// };

interface ProjectPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const SkillPage: React.FC<ProjectPageProps> = ({ params }) => {
  const slug = params.slug;
  const skill = getSkillBySlug(slug, allSkills);

  if (!skill) {
    notFound();
  }

  const certificates = updateCredentialImages(allCertificates);

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <HeadingOne title={skill.skill} />
      <CredentialsSection certificates={certificates} skill={skill} />
    </div>
  );
};

export default SkillPage;
