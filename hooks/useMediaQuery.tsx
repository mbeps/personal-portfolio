import { useEffect, useState } from "react";

/**
 * A custom hook that returns a boolean indicating whether the media query matches the current viewport.
 * This is useful for checking the viewport size and applying responsive styles.
 * For example, displaying certain elements only on mobile.
 *
 * @param query The media query to match (screen width)
 * @returns A boolean indicating whether the media query matches the current viewport
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
