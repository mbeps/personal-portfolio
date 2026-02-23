import CourseInterface from "@/database/courses/CourseInterface";
import ModuleInterface from "@/database/modules/ModuleInterface";
import Database from "@/interfaces/Database";

/**
 * Generic helper that aggregates a repeated array field from every module into its parent course.
 * Handles the common pattern: start with the course's existing values, append each module's values,
 * then deduplicate by value identity before returning the enriched course database.
 *
 * @param coursesDatabase  Map of every course entry.
 * @param modulesDatabase  Map of module entries referenced by the courses.
 * @param getCourseValues  Extracts the initial field values from a course.
 * @param getModuleValues  Extracts the field values to aggregate from a module.
 * @param setCourseValues  Returns a new course object with the aggregated field applied.
 * @returns New course database whose entries include all module field references.
 */
export default function aggregateCourseField<TValue>(
  coursesDatabase: Database<CourseInterface>,
  modulesDatabase: Database<ModuleInterface>,
  getCourseValues: (course: CourseInterface) => TValue[],
  getModuleValues: (module: ModuleInterface) => TValue[],
  setCourseValues: (
    course: CourseInterface,
    values: TValue[],
  ) => CourseInterface,
): Database<CourseInterface> {
  const updatedCoursesDatabase: Database<CourseInterface> = {};

  Object.keys(coursesDatabase).forEach((courseKey) => {
    const course = coursesDatabase[courseKey];

    let aggregated: TValue[] = getCourseValues(course);

    course.modules.forEach((moduleKey) => {
      const moduleData = modulesDatabase[moduleKey];
      if (moduleData) {
        aggregated = [...aggregated, ...getModuleValues(moduleData)];
      }
    });

    // Deduplicate by value identity (works for primitives and enum string values)
    aggregated = Array.from(new Set(aggregated));

    updatedCoursesDatabase[courseKey] = setCourseValues(course, aggregated);
  });

  return updatedCoursesDatabase;
}
