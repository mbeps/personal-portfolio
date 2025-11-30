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
 * Client-only button group that surfaces deployment, repository, and report links so the server-rendered project page can stay static.
 * Responsive orientation changes based on viewport with help from `useMediaQuery`.
 *
 * @param deploymentURL Optional hosted demo link.
 * @param repositoryURL Optional source link.
 * @param reportURL Optional internal report route.
 * @returns Button group linking out to the relevant surfaces.
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
        <Button asChild className="flex-1 md:max-w-xs">
          <Link href={deploymentURL} target="_blank">
            <div className="flex justify-center md:justify-start items-center gap-4 w-full">
              <BsArrowUpRightCircle size={26} />
              <p>Deployment</p>
            </div>
          </Link>
        </Button>
      )}

      {repositoryURL && (
        <Button asChild className="flex-1 md:max-w-xs">
          <Link href={repositoryURL} target="_blank">
            <div className="flex justify-center md:justify-start items-center gap-4 w-full">
              <BsGithub size={26} />
              <p>Repository</p>
            </div>
          </Link>
        </Button>
      )}

      {reportURL && (
        <Button asChild className="flex-1 md:max-w-xs">
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
