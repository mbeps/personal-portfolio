"use client";

import { TooltipProvider } from "@/components/shadcn/ui/tooltip";
import { ThemeProvider } from "./ThemeProvider";

/**
 * A root component that wraps the entire application with necessary context providers.
 * This is the central place to add new providers that should be available globally.
 *
 * @param children The child components of the application.
 * @returns The application wrapped with `ThemeProvider` and `TooltipProvider`.
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
