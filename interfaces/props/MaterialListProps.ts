import MaterialGroupInterface from "../material/MaterialGroupInterface";

/**
 * Interface representing the props of the MaterialList components.
 * This interface stores the list of materials grouped by the `MaterialGroupInterface` interface which itself is a groping of materials.
 * This is used to displays grouped materials iteratively my material list components.
 *
 * @requires {@link MaterialGroupInterface} to represent the list of materials that are grouped together.
 */
export default interface MaterialListProps {
  groupedMaterial: MaterialGroupInterface[];
}
