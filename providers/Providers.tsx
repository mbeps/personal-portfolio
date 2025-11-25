"use client";

import { TooltipProvider } from "@/components/shadcn/ui/tooltip";
import { ThemeProvider } from "./ThemeProvider";

/**
 * Central provider stack invoked by `app/layout.tsx`, wiring theme persistence and shadcn tooltips around the App Router tree.
 *
 * @param children Route content.
 * @returns Children wrapped in Theme + Tooltip providers.
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
