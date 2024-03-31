import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { skillKeys } from "@/database/skills";
import SkillList from "../../components/MaterialLists/SkillList";

/**
 * The description for the skill page.
 * This is rendered at the top of the page and used as metadata for SEO purposes.
 */
const description = `
	Explore my collection of skills on various topics. 
	You will be able to navigate to projects, certificates and blogs directly from here.
`;

/**
 * Generates the metadata for the skill page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the skill page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata = {
  title: `${developerName} - Skills`,
  description: description,
};

/**
 * Page displaying all the skills that I have learned and worked with.
 * These skills can be grouped into categories and certain type skills can be ignored.
 * @returns Page with all skills
 */
export default function SkillPage() {
  return (
    <main>
      <section id="blogs">
        <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
          <HeadingOne title="Skills" />
          <PageDescription description={description} />

          <SkillList skills={skillKeys} />
        </div>
      </section>
    </main>
  );
}
