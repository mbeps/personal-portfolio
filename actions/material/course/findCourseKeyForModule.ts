import UniversityModuleKeysEnum from "@/enums/DatabaseKeysEnums/UniversityModuleKeysEnum";
import UniversityCourseInterface from "@/interfaces/material/UniversityCourseInterface";

export default function findCourseKeyForModule(
  moduleKey: UniversityModuleKeysEnum,
  coursesDatabase: Database<UniversityCourseInterface>
): string | null {
  // Iterate through the courses to find the one related to the specified module
  for (const [courseKey, course] of Object.entries(coursesDatabase)) {
    if (course.modules.includes(moduleKey)) {
      return courseKey; // Return the key of the course related to the module
    }
  }
  return null; // Return null if no related course is found
}
