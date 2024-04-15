import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/shadcn/ui/breadcrumb";
import React from "react";

interface BreadcrumbPair {
  name: string;
  path?: string;
}

interface DynamicBreadcrumbProps {
  breadcrumbs: BreadcrumbPair[];
}

/**
 * Creates a dynamic breadcrumb component.
 * This component takes in an array of breadcrumbs and generates the breadcrumb component.
 * The last item in the array is the current page and is not a link.
 * The rest of the items are links to the respective pages.
 *
 * @param breadcrumbs name and paths for the breadcrumbs
 * @returns Component with the breadcrumbs
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
