import FilterOption from "@/interfaces/filters/FilterOption";

/**
 * Generates the URL for the projects page.
 * These are the URL parameters that are used for filtering and searching.
 * Once filters and search are applied, the URL is updated.
 * Replaces URL parameters with the latest values.
 *
 * @param params The list of filter options to generate the URL from
 * @param basePath The base path for the URL
 * @returns The generated URL
 */
export default function generateUrl(
  params: FilterOption[],
  basePath: string
): string {
  // Define the accumulator with an index signature
  const paramsObj = params.reduce<Record<string, string>>((acc, param) => {
    // Assuming each param is a FilterOption object
    const key: string = param.entryName.toLowerCase(); // Or any other property that should represent the parameter name
    const value: string = param.slug; // Using slug as the value for the URL parameter
    acc[key] = value.trim(); // Ensure only last value is kept
    return acc;
  }, {});

  // Convert the object back into an array of tuples
  const uniqueParams: [string, string][] = Object.entries(paramsObj);

  // Encode each parameter and construct the query string
  const queryString: string = uniqueParams
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  return `${basePath}?${queryString}`;
}
