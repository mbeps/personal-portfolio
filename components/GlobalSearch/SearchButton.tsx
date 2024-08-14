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

interface MaterialSectionInterface {
  name: MaterialTypeEnum;
  materials: string[];
  materialHashmap: Database<MaterialInterface>;
  basePath?: string;
}

const SearchButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const baseButtonClass =
    "group p-2.5 rounded-full transition-colors duration-1000";
  const darkButtonClass = "dark:bg-black dark:hover:bg-white";
  const lightButtonClass = "bg-white hover:bg-black";

  const baseIconClass = "transition-colors duration-700";
  const darkIconClass = "dark:text-white dark:group-hover:text-black";
  const lightIconClass = "text-black group-hover:text-white";

  const sections: MaterialSectionInterface[] = [
    {
      // Projects
      name: MaterialTypeEnum.Projects,
      materials: projectDatabaseKeys,
      materialHashmap: projectDatabaseMap,
      basePath: PROJECTS_PAGE.path,
    },
    {
      // Work Experiences
      name: MaterialTypeEnum.WorkExperiences,
      materials: roleDatabaseKeys,
      materialHashmap: rolesDatabase,
      basePath: EXPERIENCE_PAGE.path,
    },
    {
      // University Modules
      name: MaterialTypeEnum.UniversityModules,
      materials: moduleDatabaseKeys,
      materialHashmap: moduleDatabaseMap,
    },
    {
      // Certificates
      name: MaterialTypeEnum.Certificates,
      materials: certificateDatabaseKeys,
      materialHashmap: certificateDatabaseMap,
      basePath: CERTIFICATES_PAGE.path,
    },
    {
      // Blogs
      name: MaterialTypeEnum.Blogs,
      materials: blogDatabaseKeys,
      materialHashmap: blogsDatabaseMap,
      basePath: BLOG_PAGE.path,
    },
  ];

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
              {section.materials.map((materialKey) => {
                const material = section.materialHashmap[materialKey];

                if (material) {
                  return (
                    <CommandItem
                      key={materialKey}
                      onSelect={() => {
                        // You can define a navigation function here if necessary, e.g.,
                        // window.location.href = `${section.basePath}/${materialKey}`;
                      }}
                    >
                      {material.name}
                    </CommandItem>
                  );
                }

                return null; // If material is not found, return null
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchButton;
