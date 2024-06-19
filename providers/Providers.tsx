"use client";

import { TooltipProvider } from "@/components/shadcn/ui/tooltip";
import { ThemeProvider } from "./ThemeProvider";

/**
 * This provider wraps other providers and components to provide them with the necessary context and state.
 * All the providers should be added here.
 * This provider is the used the {@link RootLayoutWithProviders} component which applies changes to the whole app.
 *
 * @param children the children (whole app) to apply theming to
 * @returns the children wrapped in all the providers
 * @requires ThemeProvider provides the current theme information to the whole app
 * @requires TooltipProvider provides the tooltip context and state to the whole app
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange={false}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </>
  );
}
