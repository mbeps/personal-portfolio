"use client";

import { parseAsBoolean, useQueryState } from "nuqs";
import React from "react";
import Reader from "@/components/reader/reader";
import { Separator } from "@/components/shadcn/ui/separator";
import { Switch } from "@/components/shadcn/ui/switch";
import type CourseInterface from "@/database/courses/course-interface";
import type ProjectInterface from "@/database/projects/project-interface";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import type CategorisedSkillsInterface from "@/interfaces/skills/categorised-skills-interface";
import type { SerializedRoleInterface } from "../page";
import CvEducationItem from "./cv-education-item";
import CvExperienceItem from "./cv-experience-item";
import CvHeader from "./cv-header";
import CvProjectItem from "./cv-project-item";
import CvSection from "./cv-section";
import CvSkillGroup from "./cv-skill-group";

interface CvPageContentProps {
  aboutContent?: string | null;
  skillGroups: CategorisedSkillsInterface[];
  workExperience: {
    role: SerializedRoleInterface;
    responsibilities?: string | null;
  }[];
  volunteeringExperience: {
    role: SerializedRoleInterface;
    responsibilities?: string | null;
  }[];
  education: CourseInterface[];
  projects: ProjectInterface[];
  certificateCount: number;
  blogCount: number;
}

const CvPageContent: React.FC<CvPageContentProps> = ({
  aboutContent,
  skillGroups,
  workExperience,
  volunteeringExperience,
  education,
  projects,
  certificateCount,
  blogCount,
}) => {
  const [showArchived, setShowArchived] = useQueryState(
    "archived",
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true }),
  );

  const filterArchived = <T extends { archived?: boolean }>(items: T[]) => {
    return showArchived ? items : items.filter((item) => !item.archived);
  };

  const filteredWorkExperience = showArchived
    ? workExperience
    : workExperience.filter((item) => !item.role.archived);

  const filteredVolunteeringExperience = showArchived
    ? volunteeringExperience
    : volunteeringExperience.filter((item) => !item.role.archived);

  const filteredEducation = filterArchived(education);
  const filteredProjects = filterArchived(projects);

  const filteredSkillGroups = skillGroups
    .map((group) => ({
      ...group,
      skills: showArchived
        ? group.skills
        : group.skills.filter((key) => skillDatabaseMap[key].isMainSkill),
    }))
    .filter((group) => group.skills.length > 0);

  return (
    <div className="w-full print:bg-white print:p-0 print:text-black print:dark:bg-white">
      <div className="mb-4 flex justify-end print:hidden">
        <div className="flex items-center space-x-2">
          <Switch
            id="archive-mode"
            checked={showArchived ?? false}
            onCheckedChange={(checked) => setShowArchived(checked)}
          />
          <label
            htmlFor="archive-mode"
            className="font-medium text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show Archived
          </label>
        </div>
      </div>

      <CvHeader />

      {aboutContent && (
        <CvSection title="About Me">
          <Reader content={aboutContent} size="lg" />
        </CvSection>
      )}

      <CvSection title="Skills">
        <div className="flex flex-col gap-2">
          {filteredSkillGroups.map((group) => (
            <CvSkillGroup key={group.skillCategoryName} group={group} />
          ))}
        </div>
      </CvSection>

      <CvSection title="Experience">
        {filteredWorkExperience.map((item, index) => (
          <React.Fragment key={index}>
            <CvExperienceItem
              role={item.role}
              responsibilities={item.responsibilities}
              showArchived={showArchived}
            />
            {index < filteredWorkExperience.length - 1 && (
              <Separator className="my-6" />
            )}
          </React.Fragment>
        ))}
      </CvSection>

      <CvSection title="Education">
        {filteredEducation.map((course, index) => (
          <React.Fragment key={index}>
            <CvEducationItem course={course} />
            {index < filteredEducation.length - 1 && (
              <Separator className="my-6" />
            )}
          </React.Fragment>
        ))}
      </CvSection>

      <CvSection title="Projects">
        {filteredProjects.map((project, index) => (
          <React.Fragment key={index}>
            <CvProjectItem project={project} showArchived={showArchived} />
            {index < filteredProjects.length - 1 && (
              <Separator className="my-6" />
            )}
          </React.Fragment>
        ))}
      </CvSection>

      <CvSection title="Volunteering">
        {filteredVolunteeringExperience.map((item, index) => (
          <React.Fragment key={index}>
            <CvExperienceItem
              role={item.role}
              responsibilities={item.responsibilities}
              showArchived={showArchived}
            />
            {index < filteredVolunteeringExperience.length - 1 && (
              <Separator className="my-6" />
            )}
          </React.Fragment>
        ))}
      </CvSection>

      <CvSection title="Other">
        <p className="text-lg">
          I also have <strong>{certificateCount}</strong> certificates and have
          written <strong>{blogCount}</strong> technical blog posts.
        </p>
      </CvSection>
    </div>
  );
};

export default CvPageContent;
