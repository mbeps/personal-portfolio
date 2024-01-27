import filterContentBySkill from "@/actions/material/filterContentBySkill";
import groupMaterialsByMaterialType from "@/actions/material/groupMaterialsByMaterialType";
import ProjectsList from "@/components/MaterialLists/ProjectsList";
import { Button } from "@/components/shadcn/ui/button";
import { PROJECTS } from "@/constants/pages";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import Link from "next/link";
import React from "react";

interface ProjectPageProps {
  projects: ProjectInterface[];
  skill: SkillInterface;
}

const ProjectsSection: React.FC<ProjectPageProps> = ({ projects, skill }) => {
  const basePath = PROJECTS.path;

  const filteredProjects = filterContentBySkill<ProjectInterface>(
    projects,
    skill,
  );

  if (!filteredProjects || filteredProjects.length === 0) {
    return;
  }

  const groupedProjects = groupMaterialsByMaterialType<ProjectInterface>(
    filteredProjects,
    "Projects",
  );

  return (
    <div className="flex flex-col space-y-10 align-top relative">
      <ProjectsList groupedProjects={groupedProjects} />

      <div className="flex justify-center mt-10">
        <Link href={basePath}>
          <Button variant="outline">View All Projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
