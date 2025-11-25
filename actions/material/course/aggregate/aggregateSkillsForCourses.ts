import CourseInterface from "@/database/Courses/CourseInterface";
import ModuleDatabaseKeys from "@/database/Modules/ModuleDatabaseKeys";
import ModuleInterface from "@/database/Modules/ModuleInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import Database from "@/interfaces/Database";

/**
 * Batch version of the course skill aggregation so the education pages can hydrate the full database once at import time.
 *
 * @param coursesDatabase Map of every course entry.
 * @param modulesDatabase Map of module entries referenced by the courses.
 * @returns New course database whose entries include all module skill references.
 */
export default function aggregateSkillsForCourses(
  coursesDatabase: Database<CourseInterface>,
  modulesDatabase: Database<ModuleInterface>
): Database<CourseInterface> {
  // Create a new object to store the updated courses with aggregated skills
  const updatedCoursesDatabase: Database<CourseInterface> = {};

  // Iterate over each course in the database
  Object.keys(coursesDatabase).forEach((courseKey) => {
    const course: CourseInterface = coursesDatabase[courseKey];

    // Start with existing skills in the course, if any
    let aggregatedSkills: SkillDatabaseKeys[] = [...course.skills];

    // Iterate over each module key in the course
    course.modules.forEach((moduleKey: ModuleDatabaseKeys) => {
      const moduleData: ModuleInterface = modulesDatabase[moduleKey];
      // Ensure the moduleData exists and has skills
      if (moduleData && moduleData.skills) {
        // Aggregate the skills
        aggregatedSkills = [...aggregatedSkills, ...moduleData.skills];
      }
    });

    // Remove duplicate skills if necessary
    aggregatedSkills = Array.from(new Set(aggregatedSkills));

    // Update the course object with the aggregated skills and add it to the updated database
    updatedCoursesDatabase[courseKey] = {
      ...course,
      skills: aggregatedSkills,
    };
  });

  // Return the updated courses database with the aggregated skills
  return updatedCoursesDatabase;
}
