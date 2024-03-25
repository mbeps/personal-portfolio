import stringToSlug from "@/actions/stringToSlug";
import MaterialInterface from "@/interfaces/material/MaterialInterface";

export default function filterMaterialByCategory<T extends MaterialInterface>(
  category: string,
  materialKeys: string[],
  materialsMap: Database<T> // Keep materialsMap for accessing material details
): string[] {
  const filteredMaterialSlugs = materialKeys.reduce((acc: string[], key) => {
    const material = materialsMap[key];
    if (
      material &&
      stringToSlug(material.category) === stringToSlug(category)
    ) {
      acc.push(key);
    }
    return acc;
  }, []); // Initialize the accumulator as an empty array of strings

  return filteredMaterialSlugs;
}
