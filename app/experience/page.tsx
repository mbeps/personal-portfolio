import PageDescription from "@/components/ui/PageDescription";
import developerName from "@/constants/developerName";
import { EXPERIENCE_PAGE } from "@/constants/pages";
import rolesDatabase from "@/database/roles/RoleDatabaseMap";
import type { Metadata } from "next";
import ExperienceView from "./_components/ExperienceView";
import companyDatabaseMap from "@/database/companies/CompanyDatabaseMap";

/**
 * Generates the metadata for the work experience page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the work experience page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the blog page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
  title: `${developerName} - ${EXPERIENCE_PAGE.label}`,
  description: `A list of all work experience and volunteering roles that ${developerName} has completed. 
  The latest role is as a ${Object.values(rolesDatabase)[0].name} at ${
    companyDatabaseMap[Object.values(rolesDatabase)[0].company].name
  }.`,
  category: `${EXPERIENCE_PAGE.label}`,
  creator: developerName,
  keywords: Object.values(rolesDatabase).map((role) => role.name),
};

/**
 * Experience hub that introduces the reusable `ExperienceView` list with consistent hero copy and SEO data.
 *
 * @returns Section containing the filterable timeline of roles.
 */
export default function ExperiencePage() {
  return (
    <main>
      <section id="experience">
        <div className="w-full">
          <h1>{EXPERIENCE_PAGE.label}</h1>

          <PageDescription description={EXPERIENCE_PAGE.description} />
          <ExperienceView />
        </div>
      </section>
    </main>
  );
}
