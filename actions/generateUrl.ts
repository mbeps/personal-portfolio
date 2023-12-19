/**
 * Generates the URL for the projects page.
 * These are the URL parameters that are used for filtering and searching.
 * Once filters and search are applied, the URL is updated.
 */
const generateUrl = (
  params: Record<string, string>,
  basePath: string,
  format: boolean = false
): string => {
  const queryParts = Object.entries(params).map(([key, value]) => {
    const encodedValue = encodeURIComponent(value.trim() || "");
    return `${key.toLowerCase()}=${encodedValue}`;
  });

  const queryString = queryParts.join("&");

  return format
    ? `${basePath}?\n  ${queryString.replace(/&/g, "\n  &")}`
    : `${basePath}?${queryString}`;
};

export default generateUrl;
