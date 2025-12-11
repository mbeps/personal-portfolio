import CourseInterface from "@/database/courses/CourseInterface";
import ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import Database from "@/interfaces/Database";

/**
 * Resolves the parent course for a given module slug so module detail pages can link back to the owning course.
 *
 * @param moduleKey Module slug the view is rendering.
 * @param coursesDatabase Course dictionary to inspect.
 * @returns Matching course key or `null` when no parent references the module.
 */
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
