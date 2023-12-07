import FilterParams from "@/types/FilterParams";

/**
 * Generates the URL for the projects page.
 * These are the URL parameters that are used for filtering and searching.
 * Once filters and search are applied, the URL is updated.
 */
const generateUrl = (params: Object, basePath: string): string => {
  const queryParts = Object.entries(params).map(([key, value]) => {
    const encodedValue = encodeURIComponent(value?.toString().trim() || "");
    return `${key.toLowerCase()}=${encodedValue}`;
  });

  return `${basePath}?${queryParts.join("&")}`;
};

export default generateUrl;
