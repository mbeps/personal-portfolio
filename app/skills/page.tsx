import PageDescription from "@/components/ui/PageDescription";
import developerName from "@/constants/developerName";
import { SKILL_PAGE } from "@/constants/pages";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/skills/SkillDatabaseMap";
import SkillList from "../../components/material-lists/SkillList";

/**
 * Static metadata for the skills hub, built from the skill database so keywords mirror the visible directory.
 */
export const metadata = {
  title: `${developerName} - Skills`,
  description: `A list of all skills that ${developerName} has.
  These skills have been demonstrated in various projects, work experiences, education, certifications/online courses, and blogs.`,
  category: `${SKILL_PAGE.label}`,
  creator: developerName,
  keywords: Object.values(skillDatabaseMap).map((skill) => skill.name),
};

/**
 * Skill index that hands the static key list to `SkillList`, keeping the description copy and metadata tied to this route.
 *
 * @returns Section containing the grouped skill directory.
 */
export default function SkillPage() {
  return (
    <main>
      <section id="skills">
        <div className="w-full">
          <h1>Skills</h1>
          <PageDescription description={SKILL_PAGE.description} />
          <SkillList skills={skillDatabaseKeys} />
        </div>
      </section>
    </main>
  );
}
