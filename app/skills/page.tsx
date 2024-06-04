import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/Skills/SkillDatabaseMap";
import SkillList from "../../components/MaterialLists/SkillList";
import { SKILL_PAGE } from "@/constants/pages";

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
  description: SKILL_PAGE.description,
  category: `${SKILL_PAGE.label}`,
  creator: developerName,
  keywords: Object.values(skillDatabaseMap).map((skill) => skill.name),
};

/**
 * Page displaying all the skills that I have learned and worked with.
 * These skills can be grouped into categories and certain type skills can be ignored.
 *
 * A list of all skills is added to the page for SEO purposes.
 * This is not visible to the user.
 * @returns Page with all skills
 */
export default function SkillPage() {
  return (
    <main>
      {/* Invisible divs for SEO */}
      <div className="sr-only">
        <h1>Skills:</h1>
        <ul>
          {Object.values(skillDatabaseMap).map((skill) => (
            <li key={skill.name}>{skill.name}</li>
          ))}
        </ul>
      </div>

      <section id="skills">
        <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
          <HeadingOne title="Skills" />
          <PageDescription description={SKILL_PAGE.description} />
          <SkillList skills={skillDatabaseKeys} />
        </div>
      </section>
    </main>
  );
}
