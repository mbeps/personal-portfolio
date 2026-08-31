"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = React.forwardRef<
  any,
  React.ComponentProps<typeof AccordionPrimitive.Root> & {
    type?: "single" | "multiple";
    collapsible?: boolean;
  }
>(({ type, collapsible, className, ...props }, ref) => (
  <AccordionPrimitive.Root
    multiple={type === "multiple"}
    className={cn(
      "overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xs transition-all duration-500 ease-in-out hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700",
      className,
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
      "border-neutral-100 border-b px-6 py-1.5 transition-all duration-500 ease-in-out dark:border-neutral-900",
      className,
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
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-open]>svg]:rotate-180 [&[data-panel-open]>svg]:rotate-180",
        className,
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
    className="grid grid-rows-[1fr] overflow-hidden text-sm transition-[grid-template-rows] duration-300 ease-in-out data-[ending-style]:grid-rows-[0fr] data-[starting-style]:grid-rows-[0fr]"
    {...props}
  >
    <div className="min-h-0">
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </div>
  </AccordionPrimitive.Panel>
);

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
