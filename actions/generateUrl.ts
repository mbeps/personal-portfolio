import FilterParams from "@/types/FilterParams";

/**
 * Generates the URL for the projects page.
 * These are the URL parameters that are used for filtering and searching.
 * Once filters and search are applied, the URL is updated.
 */
const generateUrl = (params: FilterParams): string => {
  const queryParts = Object.entries(params).map(([key, value]) => {
    const encodedValue = encodeURIComponent(value?.toString().trim() || "");
    return `${key}=${encodedValue}`;
  });

  const basePath = params.type ? "/projects/" : "/credentials/";
  return `${basePath}?${queryParts.join("&")}`;
};

export default generateUrl;