"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/ui/command";
import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import findCourseKeyForModule from "@/actions/material/course/findCourseKeyForModule";
import NAV_ITEMS, {
  BLOG_PAGE,
  CERTIFICATES_PAGE,
  EDUCATION_PAGE,
  EXPERIENCE_PAGE,
  PROJECTS_PAGE,
  SKILL_PAGE,
} from "@/constants/pages";
import blogsDatabaseMap, {
  blogDatabaseKeys,
} from "@/database/blogs/BlogsDatabaseMap";
import certificateDatabaseMap, {
  certificateDatabaseKeys,
} from "@/database/certificates/CertificateDatabaseMap";
import CourseDatabaseMap, {
  courseDatabaseKeys,
} from "@/database/courses/CourseDatabaseMap";
import moduleDatabaseMap, {
  moduleDatabaseKeys,
} from "@/database/modules/ModuleDatabaseMap";
import projectDatabaseMap, {
  projectDatabaseKeys,
} from "@/database/projects/ProjectDatabaseMap";
import rolesDatabase, {
  roleDatabaseKeys,
} from "@/database/roles/RoleDatabaseMap";
import MaterialTypeEnum from "@/enums/material/MaterialTypeEnum";
import { useRouter } from "next/navigation";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/skills/SkillDatabaseMap";
import socialLinks from "@/constants/socials";
import courseDatabaseMap from "@/database/courses/CourseDatabaseMap";
import Link from "next/link";
import companyDatabaseMap from "@/database/companies/CompanyDatabaseMap";
import { Tooltip, TooltipContent, TooltipTrigger } from "../shadcn/ui/tooltip";
import { Kbd } from "@/components/shadcn/ui/kbd";

/**
 * Represents a single searchable item in the global search.
 */
interface ItemInterface {
  /** The display name of the item. */
  name: string;
  /** The URL or link for the item. */
  link: string;
}

/**
 * Represents a section of searchable items.
 */
interface SectionInterface {
  /** The name of the section, used as a heading. */
  name: string;
  /** An array of items within this section. */
  items: ItemInterface[];
}

/**
 * Unified command palette for the site that indexes every material, page, and social profile so navigation mirrors the curated data layer.
 * Listens for Cmd/Ctrl+K, exposes a tooltip for discoverability, and routes via `useRouter` to keep focus transitions smooth.
 *
 * @returns Search icon button plus Command dialog populated from the static databases.
 */
const GlobalSearch: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const baseButtonClass =
    "group p-2.5 rounded-full transition-colors duration-800";
  const darkButtonClass = "dark:hover:bg-red-100";
  const lightButtonClass = "hover:bg-red-900";

  const baseIconClass = "transition-colors duration-400";
  const darkIconClass = "dark:text-neutral-200 dark:group-hover:text-red-900";
  const lightIconClass = "text-neutral-800 group-hover:text-red-100";

  /**
   * A list of all searchable sections and their items.
   * This structure is used to populate the search dialog.
   */
  const sections: SectionInterface[] = [
    {
      // Pages
      name: "Pages",
      items: NAV_ITEMS.map((navItem) => ({
        name: `${navItem.label} Page`,
        link: navItem.path,
      })),
    },
    {
      // Projects
      name: MaterialTypeEnum.Projects,
      items: projectDatabaseKeys.map((key) => ({
        name: `${projectDatabaseMap[key].name}`,
        link: `${PROJECTS_PAGE.path}/${key}`,
      })),
    },
    {
      // Work Experiences
      name: MaterialTypeEnum.WorkExperiences,
      items: roleDatabaseKeys.map((key) => ({
        name: `${rolesDatabase[key].name} at ${
          companyDatabaseMap[rolesDatabase[key].company].name
        }`,
        link: `${EXPERIENCE_PAGE.path}/${key}`,
      })),
    },
    {
      // Courses
      name: "Education",
      items: courseDatabaseKeys.map((key) => ({
        name: `${courseDatabaseMap[key].name} at ${courseDatabaseMap[key].university}`,
        link: `${EDUCATION_PAGE.path}/${key}`,
      })),
    },
    {
      // University Modules
      name: MaterialTypeEnum.UniversityModules,
      items: moduleDatabaseKeys.map((key) => {
        const courseKey = findCourseKeyForModule(key, CourseDatabaseMap);
        return {
          name: `${moduleDatabaseMap[key].name} (${
            courseDatabaseMap[moduleDatabaseMap[key].parentCourse].name
          })`,
          link: courseKey
            ? `${EDUCATION_PAGE.path}/${courseKey}/${key}`
            : `/education`,
        };
      }),
    },
    {
      // Certificates
      name: MaterialTypeEnum.Certificates,
      items: certificateDatabaseKeys.map((key) => ({
        name: `${certificateDatabaseMap[key].name}`,
        link: `${CERTIFICATES_PAGE.path}/${key}`,
      })),
    },
    {
      // Blogs
      name: MaterialTypeEnum.Blogs,
      items: blogDatabaseKeys.map((key) => ({
        name: `${blogsDatabaseMap[key].name}`,
        link: `${BLOG_PAGE.path}/${key}`,
      })),
    },
    {
      // Skills
      name: "Skills",
      items: skillDatabaseKeys.map((key) => ({
        name: `${skillDatabaseMap[key].name} (${skillDatabaseMap[key].category})`,
        link: `${SKILL_PAGE.path}/${key}`,
      })),
    },
    {
      // Socials
      name: "Socials",
      items: socialLinks.map((social) => ({
        name: `${social.name}`,
        link: social.link,
        IconComponent: social.IconComponent,
      })),
    },
  ];

  /**
   * Navigates to the selected item's link and closes the search dialog.
   * @param link The URL to navigate to.
   */
  function onSelect(link: string) {
    router.push(link);
    setOpen(false);
  }

  /**
   * Sets up a keyboard shortcut (`Ctrl+K` or `Cmd+K`) to open/close the search dialog.
   */
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={`${baseButtonClass} ${darkButtonClass} ${lightButtonClass}`}
            onClick={() => setOpen((open) => !open)}
          >
            <RiSearchLine
              size={25}
              className={`${baseIconClass} ${darkIconClass} ${lightIconClass}`}
            />
          </button>
        </TooltipTrigger>
        <TooltipContent className="flex flex-col items-center text-center">
          <p>Global Search</p>
          <div className="text-sm text-neutral-600 dark:text-neutral-300 flex flex-row space-x-1">
            <Kbd>Ctrl</Kbd>
            <Kbd>K</Kbd>
            <p>/</p>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search across site..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>

          {/* Dynamically generated material groups */}
          {sections.map((section) => (
            <CommandGroup key={section.name} heading={section.name}>
              {section.items.map((item) => (
                <Link href={item.link} key={item.link}>
                  <CommandItem
                    key={item.link}
                    onSelect={() => {
                      onSelect(item.link);
                    }}
                  >
                    {item.name}
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default GlobalSearch;
