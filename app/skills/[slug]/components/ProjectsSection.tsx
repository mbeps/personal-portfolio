import ProjectsListSection from "@/app/projects/components/ProjectListSection";
import { Button } from "@/components/shadcn/ui/button";
import ProjectInterface from "@/interfaces/ProjectInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import Link from "next/link";

import React from "react";

interface ProjectPageProps {
  projects: ProjectInterface[];
  skill: SkillInterface;
}

const ProjectsSection: React.FC<ProjectPageProps> = ({ projects, skill }) => {
  const filterProjectsBySkill = (
    projects: ProjectInterface[],
    selectedSkill: SkillInterface,
  ): ProjectInterface[] => {
    const skillMatches = (skill: SkillInterface): boolean => {
      // Check if the skill matches
      if (skill.slug === selectedSkill.slug) {
        return true;
      }

      // Check nested skills, if any
      if (
        skill.technicalGeneralSkills &&
        skill.technicalGeneralSkills.length > 0
      ) {
        return skill.technicalGeneralSkills.some((subSkill) =>
          skillMatches(subSkill),
        );
      }

      return false;
    };

    return projects.filter(
      (project) =>
        project.technologySkills.some(skillMatches) ||
        project.softSkills.some(skillMatches) ||
        (project.extraTechnicalGeneralSkills &&
          project.extraTechnicalGeneralSkills.some(skillMatches)) ||
        project.programmingLanguage.slug === selectedSkill.slug,
    );
  };

  const filteredProjects = filterProjectsBySkill(projects, skill);

  if (!filteredProjects || filteredProjects.length === 0) {
    return;
  }

  const groupProjectsByCurrentSkill = (
    projects: ProjectInterface[],
  ): Record<string, ProjectInterface[]> => {
    return { Projects: projects };
  };

  const groupedProjects = groupProjectsByCurrentSkill(filteredProjects);

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <ProjectsListSection groupedProjects={groupedProjects} />

      <Link href="/projects" className="flex justify-center mt-10">
        <Button variant="outline">View All Projects</Button>
      </Link>
    </div>
  );
};

export default ProjectsSection;
