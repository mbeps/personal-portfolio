import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/shadcn/ui/breadcrumb";
import React from "react";

export interface BreadcrumbPair {
  name: string;
  path?: string;
}

interface DynamicBreadcrumbProps {
  breadcrumbs: BreadcrumbPair[];
}

/**
 * Utility breadcrumb renderer used on the education routes so deeply nested module pages expose their hierarchy.
 *
 * @param breadcrumbs Ordered array of breadcrumb names/paths; final entry is rendered as plain text.
 * @returns Breadcrumb component wired to shadcn primitives.
 */
const DynamicBreadcrumb: React.FC<DynamicBreadcrumbProps> = ({
  breadcrumbs,
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {breadcrumb.path ? (
                <BreadcrumbLink href={breadcrumb.path}>
                  {breadcrumb.name}
                </BreadcrumbLink>
              ) : (
                breadcrumb.name // Display the name directly if no path is provided
              )}
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
