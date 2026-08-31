import type CourseInterface from "@/database/courses/course-interface";
import type ModuleInterface from "@/database/modules/module-interface";
import type Database from "@/interfaces/database";
import aggregateCourseField from "./aggregate-course-field";

/**
 * Copies related material links from modules up to their parent course so MaterialList tabs can highlight the correct supporting work.
 *
 * @param coursesDatabase Course dictionary.
 * @param modulesDatabase Module dictionary.
 * @returns New course database with enriched `relatedMaterials` arrays.
 */
export default function aggregateRelatedMaterialsForCourses(
  coursesDatabase: Database<CourseInterface>,
  modulesDatabase: Database<ModuleInterface>,
): Database<CourseInterface> {
  return aggregateCourseField(
    coursesDatabase,
    modulesDatabase,
    (course) => (course.relatedMaterials ? [...course.relatedMaterials] : []),
    (module) => module.relatedMaterials ?? [],
    (course, relatedMaterials) => ({ ...course, relatedMaterials }),
  );
}
