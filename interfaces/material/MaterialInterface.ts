import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";

/**
 * Interface representing general material.
 * Other interfaces such as `ProjectInterface` inherit from this interface.
 * This interface is used to represent the data of the material that is displayed on the website.
 *
 * Importantly, the `skills` field is an array of `SkillKeysEnum` which is used to represent the skills that are associated to understand the material.
 * Because there are different types of skills, they can be categorised dynamically by the codebase; for example, technologies, technical knowledge, and soft skills.
 *
 * @requires {@link SkillKeysEnum}
 */
export default interface MaterialInterface {
  name: string;
  skills: SkillKeysEnum[]; // skills associated with the material
  category: string;
  archived?: boolean; // whether the material is archived
}
