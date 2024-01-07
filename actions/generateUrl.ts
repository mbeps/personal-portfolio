/**
 * Generates the URL for the projects page.
 * These are the URL parameters that are used for filtering and searching.
 * Once filters and search are applied, the URL is updated.
 * Replaces URL parameters with the latest values.
 */
export default function generateUrl(
  params: [string, string][],
  basePath: string,
): string {
  // Step 1: Create an object with the latest values for each key
  // Define the accumulator with an index signature
  const paramsObj = params.reduce<Record<string, string>>(
    (acc, [key, value]) => {
      acc[key.toLowerCase()] = value.trim(); // Ensure only last value is kept
      return acc;
    },
    {},
  );

  // Step 2: Convert the object back into an array of tuples
  const uniqueParams = Object.entries(paramsObj);

  // Step 3: Encode each parameter and construct the query string
  const queryString = uniqueParams
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  return `${basePath}?${queryString}`;
}
