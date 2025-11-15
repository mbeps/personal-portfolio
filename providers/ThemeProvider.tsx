"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

/**
 * A wrapper around `next-themes`'s `ThemeProvider`.
 * It sets up the theme management for the application, allowing for light/dark modes
 * and syncing with the system theme preference.
 *
 * @param props The properties for the `NextThemesProvider`, including children.
 * @returns The `NextThemesProvider` wrapping the application.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
