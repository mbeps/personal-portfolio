/**
 * This enum is used to represent the keys of the university courses in the database.
 * This enum is used to avoid hardcoding the keys in the code, getting autocompletion support and avoiding typos.
 * The strings correspond to location of the markdown files in the blog folder at `public/university-courses/`.
 * Whenever a new university course is added to the database, a new key should be added to this enum.
 *
 * @see {@link universityCourseMap} at `database/university-courses.ts`
 */
enum CourseDatabaseKeys {
  RHUL_ComputerScience = "rhul-computer-science",
}

export default CourseDatabaseKeys;
