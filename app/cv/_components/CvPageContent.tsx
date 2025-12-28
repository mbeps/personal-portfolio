"use client";

import React from "react";
import CourseInterface from "@/database/courses/CourseInterface";
import ProjectInterface from "@/database/projects/ProjectInterface";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";
import { Switch } from "@/components/shadcn/ui/switch";
import { Separator } from "@/components/shadcn/ui/separator";
import CvHeader from "./CvHeader";
import CvSection from "./CvSection";
import CvExperienceItem from "./CvExperienceItem";
import CvEducationItem from "./CvEducationItem";
import CvProjectItem from "./CvProjectItem";
import CvSkillGroup from "./CvSkillGroup";
import Reader from "@/components/reader/Reader";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import { SerializedRoleInterface } from "../page";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface CvPageContentProps {
  aboutContent?: string;
  skillGroups: CategorisedSkillsInterface[];
  workExperience: {
    role: SerializedRoleInterface;
    responsibilities?: string;
  }[];
  volunteeringExperience: {
    role: SerializedRoleInterface;
    responsibilities?: string;
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Read archive state from URL, default to false
  const showArchived = (searchParams.get("archived") ?? "false") === "true";

  // Function to toggle archived state in URL
  const handleArchiveToggle = (checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("archived", checked.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

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
    <div className="w-full print:p-0 print:bg-white print:dark:bg-white print:text-black">
      <div className="flex justify-end mb-4 print:hidden">
        <div className="flex items-center space-x-2">
          <Switch
            id="archive-mode"
            checked={showArchived}
            onCheckedChange={handleArchiveToggle}
          />
          <label
            htmlFor="archive-mode"
            className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show Archived
          </label>
        </div>
      </div>

      <CvHeader />

      {aboutContent && (
        <CvSection title="About Me">
          <Reader content={aboutContent} size="lg:prose-lg" />
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
