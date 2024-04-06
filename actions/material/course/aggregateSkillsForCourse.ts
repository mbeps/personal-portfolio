import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import UniversityCourseInterface from "@/interfaces/material/UniversityCourseInterface";
import UniversityModuleInterface from "@/interfaces/material/UniversityModuleInterface";

//TODO: Add documentation
export default function aggregateSkillsForCourse(
  course: UniversityCourseInterface,
  modulesDatabase: Database<UniversityModuleInterface>
): UniversityCourseInterface {
  // Start with existing skills in the course, if any
  let aggregatedSkills: SkillKeysEnum[] = [...course.skills];

  // Iterate over each module key in the course
  course.modules.forEach((moduleKey) => {
    const moduleData: UniversityModuleInterface = modulesDatabase[moduleKey]; // Avoid using 'module' as a variable name
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
