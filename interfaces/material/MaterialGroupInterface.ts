/**
 * Interface representing a group of materials.
 *
 * The fields are:
 * - `groupName`: the name of the group
 * - `materialsKeys`: the keys of the materials in the group
 *
 * The `materialsKeys` field is an array of of keys that are used to reference the materials in the database.
 * Because different enums are used to represent different types of materials, the keys are stored as strings and not as enums.
 * This does not matter as these keys are never added by the user but rather dynamically by the codebase.
 *
 * These groups are used to group together a set of materials that are related to each other.
 * For example, Projects can be grouped together by the programming language used.
 */
export default interface MaterialGroupInterface {
  groupName: string;
  materialsKeys: string[];
}
