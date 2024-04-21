import ModuleDatabaseKeys from "@/database/Modules/ModuleDatabaseKeys";
import CourseInterface from "@/database/Courses/CourseInterface";

export default function findCourseKeyForModule(
  moduleKey: ModuleDatabaseKeys,
  coursesDatabase: Database<CourseInterface>
): string | null {
  // Iterate through the courses to find the one related to the specified module
  for (const [courseKey, course] of Object.entries(coursesDatabase)) {
    if (course.modules.includes(moduleKey)) {
      return courseKey; // Return the key of the course related to the module
    }
  }
  return null; // Return null if no related course is found
}
