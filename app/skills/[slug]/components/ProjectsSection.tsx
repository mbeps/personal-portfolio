import ProjectsListSection from "@/app/projects/components/ProjectListSection";
import Project from "@/types/projects";
import { Skill } from "@/types/skills";

import React from "react";

interface ProjectPageProps {
  projects: Project[];
  skill: Skill;
}

const ProjectsSection: React.FC<ProjectPageProps> = ({ projects, skill }) => {
  const filterProjectsBySkill = (
    projects: Project[],
    selectedSkill: string
  ): Project[] => {
    return projects.filter(
      (project) =>
        project.skills.some(
          (s) => s.skill.toLowerCase() === selectedSkill.toLowerCase()
        ) ||
        project.programmingLanguage.skill.toLowerCase() ===
          selectedSkill.toLowerCase()
    );
  };

  const filteredProjects = filterProjectsBySkill(projects, skill.skill);

  if (!filteredProjects || filteredProjects.length === 0) {
    return;
  }

  const groupProjectsByCurrentSkill = (
    projects: Project[]
  ): Record<string, Project[]> => {
    return { Projects: projects };
  };

  const groupedProjects = groupProjectsByCurrentSkill(filteredProjects);

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <ProjectsListSection groupedProjects={groupedProjects} />
    </div>
  );
};

export default ProjectsSection;
