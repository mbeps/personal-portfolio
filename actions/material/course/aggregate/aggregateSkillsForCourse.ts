import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import CourseInterface from "@/database/Courses/CourseInterface";
import ModuleInterface from "@/database/Modules/ModuleInterface";

/**
 * Adds the skills a course's modules to the course's skills itself.
 * All the skills that are related to a module are also related to the course.
 *
 * @param coursesDatabase Courses to which the skills are to be added.
 * @param modulesDatabase All the modules to access the data related to the modules.
 * @returns The courses with the aggregated skills.
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
