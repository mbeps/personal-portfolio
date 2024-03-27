import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";

/**
 * Interface representing a category of skills.
 * This interface contains the following fields:
 * - `skillCategoryName` which is the name of the category of skills.
 * - `skills` which is a list of skills (skill keys) that belong to this category.
 *
 * The keys are stored which are then used to reference the skills in the database.
 * For example, the skills can be grouped into programming languages, DevOps, Web Development, etc.
 *
 * @requires {@link SkillKeysEnum} to represent the list of skills (identifiers) that are grouped together.
 */
export default interface SkillsCategoryInterface {
  skillCategoryName: string;
  skills: SkillKeysEnum[];
}
