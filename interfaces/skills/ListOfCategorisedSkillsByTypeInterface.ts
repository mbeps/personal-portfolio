import CategorisedSkillsInterface from "./CategorisedSkillsInterface";

/**
 * Container for a set of categorised skills under a titled section, matching how tables are rendered on detail pages.
 */
export default interface ListOfCategorisedSkillsByTypeInterface {
  /** Section title such as “Technologies” or “Soft Skills”. */
  title: string;
  /** Grouped categories that roll up into the titled section. */
  skillCategories: CategorisedSkillsInterface[];
}
