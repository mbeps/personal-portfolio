import FilterOption from "@/interfaces/filters/FilterOption";

/**
 * Builds canonical URLs for filter drawers so navigation items, list pages, and the command palette share identical links.
 * Later, `useMaterialFilterState` reads these params to reconstruct the selection state, so we only encode the final value per key.
 *
 * @param params Filter selections coming from `FilterSection`.
 * @param basePath Path without any query portion.
 * @returns Stable URL string that can be pushed to `next/navigation`.
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
