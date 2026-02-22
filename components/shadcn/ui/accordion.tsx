"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = React.forwardRef<any, React.ComponentProps<typeof AccordionPrimitive.Root> & { type?: "single" | "multiple", collapsible?: boolean }>(({ type, collapsible, className, ...props }, ref) => (
  <AccordionPrimitive.Root
    multiple={type === "multiple"}
    className={cn(
      `
        border border-neutral-200 dark:border-neutral-800
        hover:border-neutral-300 dark:hover:border-neutral-700
        bg-white dark:bg-neutral-950
        rounded-xl
        overflow-hidden
        shadow-xs hover:shadow-md
        transition-all duration-500 ease-in-out`,
      className
    )}
    ref={ref}
    {...props}
  />
));
Accordion.displayName = "Accordion";

const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    className={cn(
      `
        py-1.5 px-6
        border-b border-neutral-100 dark:border-neutral-900
        transition-all duration-500 ease-in-out`,
      className
    )}
    {...props}
  />
);

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-panel-open]>svg]:rotate-180 [&[data-open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Panel>) => (
  <AccordionPrimitive.Panel
    className="grid overflow-hidden text-sm grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out data-[ending-style]:grid-rows-[0fr] data-[starting-style]:grid-rows-[0fr]"
    {...props}
  >
    <div className="min-h-0">
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  </AccordionPrimitive.Panel>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
