function searchStringInFields(
  searchTerm: string,
  object: any,
  fields: string[]
): boolean {
  if (searchTerm === "") return true;

  // Validation: Check if all fields exist in the object
  const allFieldsExist = fields.every((field) => field in object);
  if (!allFieldsExist) {
    throw new Error("One or more fields do not exist in the object.");
    // Alternatively, you could return false here if you prefer not to throw an error.
  }

  searchTerm = searchTerm.toLowerCase();
  return fields.some((field) => {
    const value = object[field];
    if (Array.isArray(value)) {
      return value.join(" ").toLowerCase().includes(searchTerm);
    }
    if (typeof value === "string" || value instanceof String) {
      return value.toLowerCase().includes(searchTerm);
    }
    return false;
  });
}

export default searchStringInFields;
