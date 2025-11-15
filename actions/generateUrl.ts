import FilterOption from "@/interfaces/filters/FilterOption";

/**
 * Generates a URL with query parameters from a list of filter options.
 * This function takes a base path and an array of filter options and constructs a URL.
 * It ensures that each query parameter is unique, using the last provided value for any given parameter.
 *
 * @param params An array of filter options to be converted into URL query parameters.
 * @param basePath The base path of the URL, before the query string.
 * @returns A URL string with the query parameters appended.
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
