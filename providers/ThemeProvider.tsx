"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

/**
 * Next'JS's theme provider which listens to the system's and user's theme preference.
 * This is then passed down to the whole which then reacts to the theme changes.
 * In other words, it provides the current theme information to the whole app.
 *
 * @param param0: the children (whole app) to apply theming to
 * @returns The children wrapped in the NextThemesProvider with proper theming
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
