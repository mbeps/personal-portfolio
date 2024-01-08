"use client";

import { TooltipProvider } from "@/components/shadcn/ui/tooltip";
import { ThemeProvider } from "./ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
