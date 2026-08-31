"use client";

import Link from "next/link";
import { BsArrowUpRightCircle, BsGithub } from "react-icons/bs";
import { IoReaderOutline } from "react-icons/io5";
import { Button } from "@/components/shadcn/ui/button";
import { ButtonGroup } from "@/components/shadcn/ui/button-group";
import { useMediaQuery } from "@/hooks/use-media-query";

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
        <Button
          render={<Link href={deploymentURL} target="_blank" />}
          className="flex-1 md:max-w-xs"
        >
          <div className="flex w-full items-center justify-center gap-4 md:justify-start">
            <BsArrowUpRightCircle size={26} />
            <p>Deployment</p>
          </div>
        </Button>
      )}

      {repositoryURL && (
        <Button
          render={<Link href={repositoryURL} target="_blank" />}
          className="flex-1 md:max-w-xs"
        >
          <div className="flex w-full items-center justify-center gap-4 md:justify-start">
            <BsGithub size={26} />
            <p>Repository</p>
          </div>
        </Button>
      )}

      {reportURL && (
        <Button
          render={<Link href={reportURL} />}
          className="flex-1 md:max-w-xs"
        >
          <div className="flex w-full items-center justify-center gap-4 md:justify-start">
            <IoReaderOutline size={26} />
            <p>Report</p>
          </div>
        </Button>
      )}
    </ButtonGroup>
  );
}
