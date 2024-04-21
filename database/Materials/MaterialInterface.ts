import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";

/**
 * Interface representing general material.
 * Other interfaces such as `ProjectInterface` inherit from this interface.
 * This interface is used to represent the data of the material that is displayed on the website.
 *
 * The fields are:
 * - `name`: the name of the material
 * - `skills`: the skills associated with the material
 * - `category`: the category of the material
 * - `archived`: whether the material is archived
 * - `relatedMaterials`: the related materials associated with the material
 *
 * Importantly, the `skills` field is an array of `SkillKeysEnum` which is used to represent the skills that are associated to understand the material.
 * Because there are different types of skills, they can be categorised dynamically by the codebase; for example, technologies, technical knowledge, and soft skills.
 *
 * @requires {@link SkillDatabaseKeys} to represent the skills associated with the material
 */
export default interface MaterialInterface {
  name: string;
  skills: SkillDatabaseKeys[];
  category: string;
  archived?: boolean;
  relatedMaterials?: string[];
}
