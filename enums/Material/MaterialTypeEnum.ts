/**
 * Enum for MaterialType.
 * These are the types of material that can be displayed on the website.
 * @see {@link ProjectInterface}
 * @see {@link CertificateInterface}
 * @see {@link BlogInterface}
 * @see {@link CourseInterface}
 * @see {@link UniversityModuleInterface}
 */
enum MaterialTypeEnum {
  Projects = "Projects",
  Courses = "Courses",
  UniversityModules = "University Modules",
  WorkExperiences = "Work Experiences",
  Certificates = "Certificates",
  Blogs = "Blogs",
}

export const materialTypeList: MaterialTypeEnum[] =
  Object.values(MaterialTypeEnum);

export default MaterialTypeEnum;
