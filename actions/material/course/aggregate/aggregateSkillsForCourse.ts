import CourseInterface from "@/database/Courses/CourseInterface";
import ModuleInterface from "@/database/Modules/ModuleInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import Database from "@/interfaces/Database";

/**
 * Ensures parent courses advertise every skill covered across their modules, which keeps skill filters accurate on the education pages.
 *
 * @param course Course entry that references module keys.
 * @param modulesDatabase Map of modules, used to pull their skill arrays.
 * @returns Course copy with duplicate-free skill list that now includes child module skills.
 */
export default function aggregateSkillsForCourse(
  course: CourseInterface,
  modulesDatabase: Database<ModuleInterface>
): CourseInterface {
  // Start with existing skills in the course, if any
  let aggregatedSkills: SkillDatabaseKeys[] = [...course.skills];

  // Iterate over each module key in the course
  course.modules.forEach((moduleKey) => {
    const moduleData: ModuleInterface = modulesDatabase[moduleKey]; // Avoid using 'module' as a variable name
    // Ensure the moduleData exists and has skills
    if (moduleData && moduleData.skills) {
      // Aggregate the skills
      aggregatedSkills = [...aggregatedSkills, ...moduleData.skills];
    }
  });

  // Remove duplicate skills if necessary
  aggregatedSkills = Array.from(new Set(aggregatedSkills));

  // Return the course object with the aggregated skills
  return {
    ...course,
    skills: aggregatedSkills,
  };
}
