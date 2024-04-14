import UniversityModuleKeysEnum from "@/enums/DatabaseKeysEnums/UniversityModuleKeysEnum";
import UniversityCourseInterface from "@/interfaces/material/UniversityCourseInterface";
import UniversityModuleInterface from "@/interfaces/material/UniversityModuleInterface";

export default function aggregateRelatedMaterialsForCourses(
  coursesDatabase: Database<UniversityCourseInterface>,
  modulesDatabase: Database<UniversityModuleInterface>
): Database<UniversityCourseInterface> {
  // Create a new object to store the updated courses with aggregated related materials
  const updatedCoursesDatabase: Database<UniversityCourseInterface> = {};

  // Iterate over each course in the database
  Object.keys(coursesDatabase).forEach((courseKey) => {
    const course: UniversityCourseInterface = coursesDatabase[courseKey];

    // Start with existing related materials in the course, if any
    let aggregatedMaterials: string[] = course.relatedMaterials
      ? [...course.relatedMaterials]
      : [];

    // Iterate over each module key in the course
    course.modules.forEach((moduleKey: UniversityModuleKeysEnum) => {
      const moduleData: UniversityModuleInterface = modulesDatabase[moduleKey];
      // Ensure the moduleData exists and has related materials
      if (moduleData && moduleData.relatedMaterials) {
        // Aggregate the related materials
        aggregatedMaterials = [
          ...aggregatedMaterials,
          ...moduleData.relatedMaterials,
        ];
      }
    });

    // Remove duplicate related materials if necessary
    aggregatedMaterials = Array.from(new Set(aggregatedMaterials));

    // Update the course object with the aggregated related materials and add it to the updated database
    updatedCoursesDatabase[courseKey] = {
      ...course,
      relatedMaterials: aggregatedMaterials,
    };
  });

  // Return the updated courses database with the aggregated related materials
  return updatedCoursesDatabase;
}
