import CourseInterface from "@/database/courses/CourseInterface";
import ModuleInterface from "@/database/modules/ModuleInterface";
import Database from "@/interfaces/Database";
import aggregateCourseField from "./aggregateCourseField";

/**
 * Batch version of the course skill aggregation so the education pages can hydrate the full database once at import time.
 *
 * @param coursesDatabase Map of every course entry.
 * @param modulesDatabase Map of module entries referenced by the courses.
 * @returns New course database whose entries include all module skill references.
 */
export default function aggregateSkillsForCourses(
  coursesDatabase: Database<CourseInterface>,
  modulesDatabase: Database<ModuleInterface>,
): Database<CourseInterface> {
  return aggregateCourseField(
    coursesDatabase,
    modulesDatabase,
    (course) => [...course.skills],
    (module) => module.skills ?? [],
    (course, skills) => ({ ...course, skills }),
  );
}
