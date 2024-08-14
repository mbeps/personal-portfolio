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
} from "@/database/Blogs/BlogsDatabaseMap";
import certificateDatabaseMap, {
  certificateDatabaseKeys,
} from "@/database/Certificates/CertificateDatabaseMap";
import CourseDatabaseMap from "@/database/Courses/CourseDatabaseMap";
import moduleDatabaseMap, {
  moduleDatabaseKeys,
} from "@/database/Modules/ModuleDatabaseMap";
import projectDatabaseMap, {
  projectDatabaseKeys,
} from "@/database/Projects/ProjectDatabaseMap";
import rolesDatabase, {
  roleDatabaseKeys,
} from "@/database/Roles/RoleDatabaseMap";
import MaterialTypeEnum from "@/enums/Material/MaterialTypeEnum";
import { useRouter } from "next/navigation";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/Skills/SkillDatabaseMap";
import socialLinks from "@/constants/socials";

interface ItemInterface {
  name: string;
  link: string;
}

interface SectionInterface {
  name: string;
  items: ItemInterface[];
}

/**
 * Global search component that allows the user to search for content on the website.
 * Once the button a clicked, a dialog opens with a search input field.
 * A list of projects, work experiences, university modules, certificates, blogs, skills, and socials is displayed.
 * Selecting an item from the list will redirect the user to the corresponding page.
 * Additionally, the user can use the keyboard shortcut `Cmd/Ctrl + K` to open the search dialog.
 *
 * @returns A button that opens a search dialog when clicked.
 */
const SearchButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const baseButtonClass =
    "group p-2.5 rounded-full transition-colors duration-1000";
  const darkButtonClass = "dark:bg-black dark:hover:bg-white";
  const lightButtonClass = "bg-white hover:bg-black";

  const baseIconClass = "transition-colors duration-700";
  const darkIconClass = "dark:text-white dark:group-hover:text-black";
  const lightIconClass = "text-black group-hover:text-white";

  /**
   * List of sections that are displayed in the search dialog.
   * Each section contains a list of items that can be searched.
   * The order of the sections is the order in which they are displayed in the search dialog.
   */
  const sections: SectionInterface[] = [
    {
      // Pages
      name: "Pages",
      items: NAV_ITEMS.map((navItem) => ({
        name: navItem.label,
        link: navItem.path,
      })),
    },
    {
      // Projects
      name: MaterialTypeEnum.Projects,
      items: projectDatabaseKeys.map((key) => ({
        name: projectDatabaseMap[key].name,
        link: `${PROJECTS_PAGE.path}/${key}`,
      })),
    },
    {
      // Work Experiences
      name: MaterialTypeEnum.WorkExperiences,
      items: roleDatabaseKeys.map((key) => ({
        name: rolesDatabase[key].name,
        link: `${EXPERIENCE_PAGE.path}/${key}`,
      })),
    },
    {
      // University Modules
      name: MaterialTypeEnum.UniversityModules,
      items: moduleDatabaseKeys.map((key) => {
        const courseKey = findCourseKeyForModule(key, CourseDatabaseMap);
        return {
          name: moduleDatabaseMap[key].name,
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
        name: certificateDatabaseMap[key].name,
        link: `${CERTIFICATES_PAGE.path}/${key}`,
      })),
    },
    {
      // Blogs
      name: MaterialTypeEnum.Blogs,
      items: blogDatabaseKeys.map((key) => ({
        name: blogsDatabaseMap[key].name,
        link: `${BLOG_PAGE.path}/${key}`,
      })),
    },
    {
      // Skills
      name: "Skills",
      items: skillDatabaseKeys.map((key) => ({
        name: skillDatabaseMap[key].name,
        link: `${SKILL_PAGE.path}/${key}`,
      })),
    },
    {
      // Socials
      name: "Socials",
      items: socialLinks.map((social) => ({
        name: `${social.name} Profile`,
        link: social.link,
        IconComponent: social.IconComponent,
      })),
    },
  ];

  /**
   * Redirects the user to the selected page and closes the search dialog.
   */
  function onSelect(link: string) {
    router.push(link);
    setOpen(false);
  }

  /**
   * Function to handle the keyboard shortcut to open the search dialog.
   * The shortcut is `Cmd/Ctrl + K`.
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
      <button
        className={`${baseButtonClass} ${darkButtonClass} ${lightButtonClass}`}
        onClick={() => setOpen((open) => !open)}
      >
        <RiSearchLine
          size={25}
          className={`${baseIconClass} ${darkIconClass} ${lightIconClass}`}
        />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search across site..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {/* Dynamically generated material groups */}
          {sections.map((section) => (
            <CommandGroup key={section.name} heading={section.name}>
              {section.items.map((item) => (
                <CommandItem
                  key={item.link}
                  onSelect={() => {
                    onSelect(item.link);
                  }}
                >
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchButton;
