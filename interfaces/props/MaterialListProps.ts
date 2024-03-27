import MaterialGroupInterface from "../material/MaterialGroupInterface";

/**
 * Interface representing the props of the MaterialList components.
 *
 * The fields are:
 * - `groupedMaterial`: the list of materials grouped together
 *
 * This interface stores the list of materials grouped by the `MaterialGroupInterface` interface which itself is a groping of materials.
 * This is used to displays grouped materials iteratively my material list components.
 * For example, a list of projects can be grouped by the programming language, DevOps tools, web frameworks, etc;
 * these groups are then stored within a list as shown in this interface.
 *
 * @requires {@link MaterialGroupInterface} to represent the list of materials that are grouped together.
 */
export default interface MaterialListProps {
  groupedMaterial: MaterialGroupInterface[];
}
