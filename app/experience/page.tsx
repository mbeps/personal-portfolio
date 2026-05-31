import PageDescription from "@/components/ui/PageDescription";
import developerName from "@/constants/developerName";
import { ROUTES } from "@/constants/routes";
import rolesDatabase from "@/database/roles/RoleDatabaseMap";
import type { Metadata } from "next";
import ExperienceView from "./_components/ExperienceView";
import companyDatabaseMap from "@/database/companies/CompanyDatabaseMap";

/**
 * Static metadata for the experience hub, populated from the roles database so keywords stay synced with the latest timeline entries.
 */
export const metadata: Metadata = {
  title: `${developerName} - ${ROUTES.EXPERIENCE.name}`,
  description: `A list of all work experience and volunteering roles that ${developerName} has completed. 
  The latest role is as a ${Object.values(rolesDatabase)[0].name} at ${
    companyDatabaseMap[Object.values(rolesDatabase)[0].company].name
  }.`,
  category: `${ROUTES.EXPERIENCE.name}`,
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
          <h1>{ROUTES.EXPERIENCE.name}</h1>

          <PageDescription description={ROUTES.EXPERIENCE.description} />
          <ExperienceView />
        </div>
      </section>
    </main>
  );
}
