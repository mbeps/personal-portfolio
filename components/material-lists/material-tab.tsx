"use client";

import Link from "next/link";
import type React from "react";
import { useState } from "react";
import BlogsList from "@/components/material-lists/blogs-list";
import CertificatesList from "@/components/material-lists/certificates-list";
import ModuleList from "@/components/material-lists/module-list";
import ProjectsList from "@/components/material-lists/projects-list";
import { Button } from "@/components/shadcn/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import { ROUTES } from "@/constants/routes";
import blogsDatabaseMap, {
  blogDatabaseKeys,
} from "@/database/blogs/blogs-database-map";
import certificateDatabaseMap, {
  certificateDatabaseKeys,
} from "@/database/certificates/certificate-database-map";
import type MaterialInterface from "@/database/materials/material-interface";
import moduleDatabaseMap, {
  moduleDatabaseKeys,
} from "@/database/modules/module-database-map";
import projectDatabaseMap, {
  projectDatabaseKeys,
} from "@/database/projects/project-database-map";
import rolesDatabase, {
  roleDatabaseKeys,
} from "@/database/roles/role-database-map";
import MaterialTypeEnum from "@/enums/material/material-type-enum";
import type Database from "@/interfaces/database";
import type MaterialGroupInterface from "@/interfaces/material/material-group-interface";
import type MaterialGroupListInterface from "@/interfaces/material/material-group-list-interface";
import groupMaterialsByMaterialType from "@/lib/material/group/group-materials-by-material-type";
import type { MaterialTabsProps } from "./material-list";
import WorkList from "./work-list";

interface MaterialSectionInterface {
  name: MaterialTypeEnum;
  materials: string[];
  materialHashmap: Database<MaterialInterface>;
  basePath?: string;
  ListComponent: React.ComponentType<MaterialGroupListInterface>;
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
      basePath: ROUTES.PROJECTS.path,
      ListComponent: ProjectsList,
    },
    {
      // Work Experiences
      name: MaterialTypeEnum.WorkExperiences,
      materials: roleDatabaseKeys,
      materialHashmap: rolesDatabase,
      ListComponent: WorkList,
      basePath: ROUTES.EXPERIENCE.path,
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
      basePath: ROUTES.CERTIFICATES.path,
      ListComponent: CertificatesList,
    },
    {
      // Blogs
      name: MaterialTypeEnum.Blogs,
      materials: blogDatabaseKeys,
      materialHashmap: blogsDatabaseMap,
      basePath: ROUTES.BLOGS.path,
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
    },
  );

  // Set default tab if none is selected
  if (!selectedTab && nonEmptySections.length > 0) {
    setSelectedTab(nonEmptySections[0].name);
  }

  return (
    <Tabs
      defaultValue={selectedTab}
      className="w-full items-center justify-center md:items-start"
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
            name,
          );
          return (
            <TabsContent key={name} value={name}>
              <div className="mt-4 text-center md:text-left">
                <ListComponent groupedMaterial={groupedMaterials} />
                {basePath && (
                  <div className="mt-10 flex justify-center">
                    <Link href={basePath}>
                      <Button variant="outline">{`View All ${name}`}</Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
          );
        },
      )}
    </Tabs>
  );
};

export default MaterialTab;
