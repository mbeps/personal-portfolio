import { useEffect, useState } from "react";

/**
 * A hook to track the state of a CSS media query.
 * It returns `true` if the query matches the current viewport, and `false` otherwise.
 * This is useful for creating responsive components that adapt to screen size.
 * It handles server-side rendering by returning `false` initially.
 *
 * @param query The media query string to evaluate (e.g., "(max-width: 768px)").
 * @returns A boolean indicating if the media query matches.
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}
