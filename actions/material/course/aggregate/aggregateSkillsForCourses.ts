import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import UniversityModuleKeysEnum from "@/enums/DatabaseKeysEnums/UniversityModuleKeysEnum";
import UniversityCourseInterface from "@/interfaces/material/UniversityCourseInterface";
import UniversityModuleInterface from "@/interfaces/material/UniversityModuleInterface";

/**
 * Adds the skills from a course's modules to the course's skills itself.
 * This works multiple courses at once.
 * All the skills that are related to a module are also related to the course.
 *
 * @param coursesDatabase Courses to which the skills are to be added.
 * @param modulesDatabase All the modules to access the data related to the modules.
 * @returns The courses with the aggregated skills.
 */
export default function aggregateSkillsForCourses(
  coursesDatabase: Database<UniversityCourseInterface>,
  modulesDatabase: Database<UniversityModuleInterface>
): Database<UniversityCourseInterface> {
  // Create a new object to store the updated courses with aggregated skills
  const updatedCoursesDatabase: Database<UniversityCourseInterface> = {};

  // Iterate over each course in the database
  Object.keys(coursesDatabase).forEach((courseKey) => {
    const course: UniversityCourseInterface = coursesDatabase[courseKey];

    // Start with existing skills in the course, if any
    let aggregatedSkills: SkillKeysEnum[] = [...course.skills];

    // Iterate over each module key in the course
    course.modules.forEach((moduleKey: UniversityModuleKeysEnum) => {
      const moduleData: UniversityModuleInterface = modulesDatabase[moduleKey];
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