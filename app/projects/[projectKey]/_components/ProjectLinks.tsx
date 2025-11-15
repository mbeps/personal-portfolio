"use client";

import { ButtonGroup } from "@/components/shadcn/ui/button-group";
import { Button } from "@/components/shadcn/ui/button";
import { BsArrowUpRightCircle, BsGithub } from "react-icons/bs";
import { IoReaderOutline } from "react-icons/io5";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ProjectLinksProps {
  deploymentURL?: string;
  repositoryURL?: string;
  reportURL?: string;
}

/**
 * Links section displaying buttons to navigate to relevant pages for this project.
 * This section is not directly in the page because the page is a server component but this section is a client component.
 *
 * @param deploymentURL URL of the project to allow user to try it
 * @param repositoryURL URL of the GitHub repository for the codebase
 * @param reportURL Link to navigating to the report for this project
 * @returns Links section component with buttons
 */
export function ProjectLinks({
  deploymentURL,
  repositoryURL,
  reportURL,
}: ProjectLinksProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <ButtonGroup
      className="w-full flex-col md:flex-row"
      orientation={isMobile ? "vertical" : "horizontal"}
    >
      {deploymentURL && (
        <Button asChild className="flex-1">
          <Link href={deploymentURL} target="_blank">
            <div className="flex justify-center md:justify-start items-center gap-4 w-full">
              <BsArrowUpRightCircle size={26} />
              <p>Deployment</p>
            </div>
          </Link>
        </Button>
      )}

      {repositoryURL && (
        <Button asChild className="flex-1">
          <Link href={repositoryURL} target="_blank">
            <div className="flex justify-center md:justify-start items-center gap-4 w-full">
              <BsGithub size={26} />
              <p>Repository</p>
            </div>
          </Link>
        </Button>
      )}

      {reportURL && (
        <Button asChild className="flex-1">
          <Link href={reportURL}>
            <div className="flex justify-center md:justify-start items-center gap-4 w-full">
              <IoReaderOutline size={26} />
              <p>Report</p>
            </div>
          </Link>
        </Button>
      )}
    </ButtonGroup>
  );
}
