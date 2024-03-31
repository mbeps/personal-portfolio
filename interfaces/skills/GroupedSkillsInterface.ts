import SkillsCategoryInterface from "./SkillsCategoryInterface";

/**
 * Interface representing a group of skills categories.
 * This interface contains the following fields:
 * - `title` which is the title of the group of skills categories.
 * - `skillCategories` which is a list of skills categories that belong to this group.
 *
 * This is used to group skills categories together for display in the skills page.
 * For example, the skills can be grouped into technologies, general skills, and soft skills;
 * these are the categorised into specific skills categories such as programming languages, frameworks, DevOps, etc. represented by {@link SkillsCategoryInterface}.
 *
 * @requires {@link SkillsCategoryInterface} to represent the list of skills categories that are grouped together.
 */
export default interface GroupedSkillsCategoriesInterface {
  title: string;
  skillCategories: SkillsCategoryInterface[];
}
