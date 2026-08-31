"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const tabsListVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      pill: "h-auto rounded-xl bg-muted p-1.5 text-muted-foreground",
      heading:
        "mb-2 w-full flex-col gap-4 bg-transparent md:w-auto md:flex-row md:gap-6",
    },
  },
  defaultVariants: {
    variant: "pill",
  },
});

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        pill: `rounded-lg px-3 py-1.5 text-sm font-medium 
               data-[active]:bg-white dark:data-[active]:bg-black
               data-[active]:text-foreground data-[active]:shadow-xs`,
        heading: `text-2xl md:text-2xl font-bold
                  [&:not([data-active])]:text-neutral-400 dark:[&:not([data-active])]:text-neutral-600
                  data-[active]:shadow-none data-[active]:bg-transparent dark:data-[active]:bg-transparent 
                  transition-all duration-500`,
      },
    },
    defaultVariants: {
      variant: "pill",
    },
  },
);

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Tab>,
    VariantProps<typeof tabsTriggerVariants> {}

const TabsList = ({ className, variant, ...props }: TabsListProps) => (
  <TabsPrimitive.List
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
);

const TabsTrigger = ({ className, variant, ...props }: TabsTriggerProps) => (
  <TabsPrimitive.Tab
    className={cn(tabsTriggerVariants({ variant }), className)}
    {...props}
  />
);

const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) => (
  <TabsPrimitive.Panel
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
);

export { Tabs, TabsContent, TabsList, TabsTrigger };
