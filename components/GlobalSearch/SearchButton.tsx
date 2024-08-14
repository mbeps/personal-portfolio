"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/ui/command";
import materialDatabaseMap, {
  materialKeys,
} from "@/database/Materials/MaterialDatabaseMap";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import groupMaterialsByMaterialType from "@/actions/material/group/groupMaterialsByMaterialType";
import {
  BLOG_PAGE,
  CERTIFICATES_PAGE,
  EXPERIENCE_PAGE,
  PROJECTS_PAGE,
} from "@/constants/pages";
import blogsDatabaseMap, {
  blogDatabaseKeys,
} from "@/database/Blogs/BlogsDatabaseMap";
import certificateDatabaseMap, {
  certificateDatabaseKeys,
} from "@/database/Certificates/CertificateDatabaseMap";
import MaterialInterface from "@/database/Materials/MaterialInterface";
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
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ItemInterface {
  name: string;
  link: string;
}

interface SectionInterface {
  name: string;
  items: ItemInterface[];
}

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

  const sections: SectionInterface[] = [
    {
      name: "Projects",
      items: projectDatabaseKeys.map((key) => ({
        name: projectDatabaseMap[key].name,
        link: `${PROJECTS_PAGE.path}/${key}`,
      })),
    },
    {
      name: "Work Experiences",
      items: roleDatabaseKeys.map((key) => ({
        name: rolesDatabase[key].name,
        link: `${EXPERIENCE_PAGE.path}/${key}`,
      })),
    },
    {
      name: "University Modules",
      items: moduleDatabaseKeys.map((key) => ({
        name: moduleDatabaseMap[key].name,
        link: `${key}`, // Assuming the basePath isn't needed here
      })),
    },
    {
      name: "Certificates",
      items: certificateDatabaseKeys.map((key) => ({
        name: certificateDatabaseMap[key].name,
        link: `${CERTIFICATES_PAGE.path}/${key}`,
      })),
    },
    {
      name: "Blogs",
      items: blogDatabaseKeys.map((key) => ({
        name: blogsDatabaseMap[key].name,
        link: `${BLOG_PAGE.path}/${key}`,
      })),
    },
  ];

  function onSelect(link: string) {
    router.push(link);
    setOpen(false);
  }

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
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

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

export default SearchButton;
