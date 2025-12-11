"use client";

import groupMaterialsByMaterialType from "@/actions/material/group/groupMaterialsByMaterialType";
import BlogsList from "@/components/material-lists/BlogsList";
import CertificatesList from "@/components/material-lists/CertificatesList";
import ModuleList from "@/components/material-lists/ModuleList";
import ProjectsList from "@/components/material-lists/ProjectsList";
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
} from "@/database/blogs/BlogsDatabaseMap";
import certificateDatabaseMap, {
  certificateDatabaseKeys,
} from "@/database/certificates/CertificateDatabaseMap";
import MaterialInterface from "@/database/materials/MaterialInterface";
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
import Database from "@/interfaces/Database";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import Link from "next/link";
import React, { useState } from "react";
import { MaterialTabsProps } from "./MaterialList";
import WorkList from "./WorkList";

interface MaterialSectionInterface {
  name: MaterialTypeEnum;
  materials: string[];
  materialHashmap: Database<MaterialInterface>;
  basePath?: string;
  ListComponent: React.ComponentType<MaterialListProps>;
}

/**
 * Core renderer for MaterialList tabs that buckets related slugs into type-specific lists (projects, roles, modules, etc.).
 * Pulls directly from the static database maps so detail pages stay in sync with list styling.
 *
 * @param materialKeys Material slugs sourced from detail pages or skill listings.
 * @returns Tabs element with one child per populated material type.
 */
const MaterialTab: React.FC<MaterialTabsProps> = ({ materialKeys }) => {
  const [selectedTab, setSelectedTab] = useState("");

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
      {/* Tab Options */}
      <TabsList variant="heading" className="w-full md:w-auto">
        {nonEmptySections.map(({ name }) => (
          <TabsTrigger key={name} value={name} variant="heading">
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
