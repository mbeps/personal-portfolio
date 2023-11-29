function searchStringInFields<T>(
  searchTerm: string,
  object: T,
  fields: Array<keyof T>
): boolean {
  if (searchTerm === "") return true;

  searchTerm = searchTerm.toLowerCase();
  return fields.some((field) => {
    const value = object[field];
    if (Array.isArray(value)) {
      return value.join(" ").toLowerCase().includes(searchTerm);
    } else if (typeof value === "string" || value instanceof String) {
      return value.toLowerCase().includes(searchTerm);
    }
    return false;
  });
}

export default searchStringInFields;
