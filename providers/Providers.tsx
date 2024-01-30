"use client";

import { TooltipProvider } from "@/components/shadcn/ui/tooltip";
import { ThemeProvider } from "./ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpeedInsights />
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
