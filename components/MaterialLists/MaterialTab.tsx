"use client";

import groupMaterialsByMaterialType from "@/actions/material/group/groupMaterialsByMaterialType";
import BlogsList from "@/components/MaterialLists/BlogsList";
import CertificatesList from "@/components/MaterialLists/CertificatesList";
import ModuleList from "@/components/MaterialLists/ModuleList";
import ProjectsList from "@/components/MaterialLists/ProjectsList";
import { Button } from "@/components/shadcn/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import {
  BLOG_PAGE,
  CERTIFICATES_PAGE,
  EXPERIENCE_PAGE,
  PROJECTS_PAGE,
} from "@/constants/pages";
import blogsDatabaseMap, {
  blogDatabaseKeys,
} from "@/database/Blogs/BlogsDatabaseMap";
import moduleDatabaseMap, {
  moduleDatabaseKeys,
} from "@/database/Modules/ModuleDatabaseMap";
import projectDatabaseMap, {
  projectDatabaseKeys,
} from "@/database/Projects/ProjectDatabaseMap";
import rolesDatabase, {
  roleDatabaseKeys,
} from "@/database/Roles/RoleDatabaseMap";
import MaterialTypeEnum from "@/enums/MaterialTypeEnum";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/database/Materials/MaterialInterface";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import Link from "next/link";
import React, { useState } from "react";
import { MaterialTabsProps } from "./MaterialList";
import WorkList from "./WorkList";
import certificateDatabaseMap, {
  certificateDatabaseKeys,
} from "@/database/Certificates/CertificateDatabaseMap";

interface MaterialSectionInterface {
  name: MaterialTypeEnum;
  materials: string[];
  materialHashmap: Database<MaterialInterface>;
  basePath?: string;
  ListComponent: React.ComponentType<MaterialListProps>;
}

/**
 * Component displaying a list of all materials.
 * This includes:
 * - Projects
 * - Certificates
 * - Blogs
 * - Modules
 *
 * @param materialKeys The keys of the material to display.
 * @returns Section displaying all the material for a given skill.
 */
const MaterialTab: React.FC<MaterialTabsProps> = ({
  materialKeys,
  defaultTab,
}) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab || "");

  if (!materialKeys || materialKeys.length === 0) {
    return null;
  }

  const sections: MaterialSectionInterface[] = [
    {
      // Projects
      name: MaterialTypeEnum.Projects,
      materials: projectDatabaseKeys,
      materialHashmap: projectDatabaseMap,
      basePath: PROJECTS_PAGE.path,
      ListComponent: ProjectsList,
    },
    {
      // Work Experiences
      name: MaterialTypeEnum.WorkExperiences,
      materials: roleDatabaseKeys,
      materialHashmap: rolesDatabase,
      ListComponent: WorkList,
      basePath: EXPERIENCE_PAGE.path,
    },
    {
      // University Modules
      name: MaterialTypeEnum.UniversityModules,
      materials: moduleDatabaseKeys,
      materialHashmap: moduleDatabaseMap,
      ListComponent: ModuleList,
    },
    {
      // Certificates
      name: MaterialTypeEnum.Certificates,
      materials: certificateDatabaseKeys,
      materialHashmap: certificateDatabaseMap,
      basePath: CERTIFICATES_PAGE.path,
      ListComponent: CertificatesList,
    },
    {
      // Blogs
      name: MaterialTypeEnum.Blogs,
      materials: blogDatabaseKeys,
      materialHashmap: blogsDatabaseMap,
      basePath: BLOG_PAGE.path,
      ListComponent: BlogsList,
    },
  ];

  // Filter out sections with no materials
  const nonEmptySections: MaterialSectionInterface[] = sections.filter(
    ({ materials, materialHashmap, name }) => {
      const groupedMaterials: MaterialGroupInterface[] =
        groupMaterialsByMaterialType(materialKeys, materialHashmap, name);
      return (
        groupedMaterials[0] && groupedMaterials[0].materialsKeys.length > 0
      );
    }
  );

  // Set default tab if none is selected
  if (!selectedTab && nonEmptySections.length > 0) {
    setSelectedTab(nonEmptySections[0].name);
  }

  return (
    <Tabs
      defaultValue={selectedTab}
      className="w-full items-center md:items-start justify-center"
      value={selectedTab}
      onValueChange={setSelectedTab}
    >
      <TabsList
        className="
          w-full md:w-auto 
          bg-transparent 
          flex-col md:flex-row
          ml-0 md:-ml-4 
          "
      >
        {nonEmptySections.map(({ name }) => (
          <TabsTrigger
            key={name}
            value={name}
            className="
              text-2xl md:text-2xl font-bold
              data-[state=inactive]:text-neutral-400 dark:data-[state=inactive]:text-neutral-600
              data-[state=active]:shadow-none data-[state=active]:bg-transparent
              transition-all duration-500
              "
          >
            {name}
          </TabsTrigger>
        ))}
      </TabsList>

      {nonEmptySections.map(
        ({ name, materialHashmap, ListComponent, basePath }) => {
          const groupedMaterials = groupMaterialsByMaterialType(
            materialKeys,
            materialHashmap,
            name
          );
          return (
            <TabsContent key={name} value={name}>
              <div className="mt-4 text-center md:text-left">
                <ListComponent groupedMaterial={groupedMaterials} />
                {basePath && (
                  <div className="flex justify-center mt-10">
                    <Link href={basePath}>
                      <Button variant="outline">{`View All ${name}`}</Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
          );
        }
      )}
    </Tabs>
  );
};

export default MaterialTab;
