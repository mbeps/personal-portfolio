import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { EXPERIENCE_PAGE } from "@/constants/pages";
import rolesDatabase from "@/database/Roles/RoleDatabaseMap";
import type { Metadata } from "next";
import ExperienceView from "./components/ExperienceView";
import companyDatabaseMap from "@/database/Companies/CompanyDatabaseMap";

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
  description: EXPERIENCE_PAGE.description,
  category: `${EXPERIENCE_PAGE.label}`,
  creator: developerName,
  keywords: Object.values(rolesDatabase).map((role) => role.name),
};

/**
 * Displays a list of all work experience that can be opened.
 * Also allows the user to search and filter the work experience.
 * These blogs are displayed into categories.
 *
 * A list of all work experience along with their company names are added to the page for SEO purposes.
 * This is not visible to the user.
 *
 * @returns Page with all work experiences
 * @requires {@link ExperienceView} component to display the work experience and filter/search them
 */
export default function ExperiencePage() {
  return (
    <main>
      {/* Invisible divs for SEO */}
      <div className="sr-only">
        <h1>Work Experience & Volunteering:</h1>
        <ul>
          {Object.values(rolesDatabase).map((role) => (
            <li key={role.name}>
              {role.name} at {companyDatabaseMap[role.company].name}
            </li>
          ))}
        </ul>
      </div>

      <section id="experience">
        <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
          <HeadingOne title={EXPERIENCE_PAGE.label} />

          <PageDescription description={EXPERIENCE_PAGE.description} />
          <ExperienceView />
        </div>
      </section>
    </main>
  );
}
