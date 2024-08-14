"use client";

import React, { useState } from "react";
import {
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
} from "@/components/shadcn/ui/command";
import { RiSearchLine } from "react-icons/ri";
import projectDatabaseMap from "@/database/Projects/ProjectDatabaseMap";
import groupMaterialsByMaterialType from "@/actions/material/group/groupMaterialsByMaterialType";
import materialDatabaseMap, {
  materialKeys,
} from "@/database/Materials/MaterialDatabaseMap";
import MaterialTypeEnum from "@/enums/Material/MaterialTypeEnum";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";

const SearchButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const groupedProjects: MaterialGroupInterface[] =
    groupMaterialsByMaterialType(
      materialKeys,
      materialDatabaseMap,
      MaterialTypeEnum.Projects
    );

  const baseButtonClass =
    "group p-2.5 rounded-full transition-colors duration-1000";
  const darkButtonClass = "dark:bg-black dark:hover:bg-white";
  const lightButtonClass = "bg-white hover:bg-black";

  const baseIconClass = "transition-colors duration-700";
  const darkIconClass = "dark:text-white dark:group-hover:text-black";
  const lightIconClass = "text-black group-hover:text-white";

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

          {/* Dynamically generated project groups */}
          {groupedProjects.map((group) => (
            <CommandGroup key={group.groupName} heading={group.groupName}>
              {group.materialsKeys.map((materialKey) => {
                const material = materialDatabaseMap[materialKey];

                if (material) {
                  return (
                    <CommandItem key={materialKey}>{material.name}</CommandItem>
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
