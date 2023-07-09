"use client";

import Gallery from "@/components/Gallery/Gallery";
import React, { useEffect } from "react";
import Project, {
  webdevProjects,
  machineLearningProjects,
  extraWebDevProjects,
  otherProjects,
  javaAssignments,
  backendWebDevProjects,
} from "@/types/projects";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

const generateStaticParams = async () => {
  const projects = [
    ...webdevProjects,
    ...extraWebDevProjects,
    ...backendWebDevProjects,
    ...machineLearningProjects,
    ...javaAssignments,
    ...otherProjects,
  ];
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

const ProjectPage: React.FC = (props: any) => {
  const pathname = usePathname(); // used to determine the current route
  const params = useParams(); // retrieve the URL parameters

  const allProjects: Project[] = [
    ...webdevProjects,
    ...extraWebDevProjects,
    ...backendWebDevProjects,
    ...machineLearningProjects,
    ...javaAssignments,
    ...otherProjects,
  ];

  function getProjectBySlug(
    slug: string,
    projects: Project[]
  ): Project | undefined {
    return projects.find((project) => project.slug === slug);
  }

  function getImagesListBySlug(
    slug: string,
    projects: Project[]
  ): string[] | undefined {
    const project = projects.find((project) => project.slug === slug);
    return project?.imagesList;
  }

  let gallery = getImagesListBySlug(params.slug, allProjects);

  if (gallery) {
    gallery = gallery.map((image) => `/projects/${params.slug}/${image}`);
  }

  useEffect(() => {
    console.log(gallery);
  }, [gallery]);

  return (
    <div>{gallery && gallery.length > 0 && <Gallery images={gallery} />}</div>
  );
};
export default ProjectPage;
