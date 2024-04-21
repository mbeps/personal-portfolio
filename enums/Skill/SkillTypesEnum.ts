/**
 * This enum is used to represent the types of skills that a user can have.
 * This enum is used to avoid hardcoding the types in the code, getting autocompletion support and avoiding typos.
 * The breakdown of the skills is:
 * - Technology: these skills are mostly technologies like specific programming languages (Python), frameworks (Next.JS), and other skills that require a lot of practice and knowledge like Calculus.
 * - Technical: these are mostly for categorising hard skills but not using specific technologies, for example Web Development, Software Engineering, and Mathematics.
 * - Soft skills: these are skills that are not related to technologies but are important for the professional development of a person, for example, Communication, Teamwork, and Problem-Solving.
 */
enum SkillTypesEnum {
  Technology = "technology",
  Technical = "technical",
  Soft = "soft",
}

export default SkillTypesEnum;
