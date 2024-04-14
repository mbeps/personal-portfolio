import groupMaterialsByMaterialType from "@/actions/material/group/groupMaterialsByMaterialType";
import BlogsList from "@/components/MaterialLists/BlogsList";
import CertificatesList from "@/components/MaterialLists/CertificatesList";
import ModuleList from "@/components/MaterialLists/ModuleList";
import ProjectsList from "@/components/MaterialLists/ProjectsList";
import { Button } from "@/components/shadcn/ui/button";
import { BLOG_PAGE, CERTIFICATES_PAGE, PROJECTS_PAGE } from "@/constants/pages";
import blogDatabase, { blogKeys } from "@/database/blogs";
import certificateDatabase, { certificateKeys } from "@/database/certificates";
import moduleDatabase, { moduleKeys } from "@/database/modules";
import projectDatabase, { projectKeys } from "@/database/projects";
import MaterialType from "@/enums/MaterialType";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import MaterialListProps from "@/interfaces/props/MaterialListProps";
import Link from "next/link";
import React from "react";

interface MaterialSectionInterface {
  name: MaterialType;
  materials: string[];
  materialHashmap: Database<MaterialInterface>;
  basePath?: string;
  ListComponent: React.ComponentType<MaterialListProps>;
}

interface MaterialSectionProps {
  materialKeys: string[];
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
const MaterialList: React.FC<MaterialSectionProps> = ({ materialKeys }) => {
  if (!materialKeys || materialKeys.length === 0) {
    return null;
  }

  /**
   * The sections to display on the skill page.
   * Each section is the material type (Projects, Certificates, Blogs).
   * These are iterated over to display the material for each section.
   */
  const sections: MaterialSectionInterface[] = [
    {
      name: MaterialType.Projects,
      materials: projectKeys,
      materialHashmap: projectDatabase,
      basePath: PROJECTS_PAGE.path,
      ListComponent: ProjectsList,
    },
    {
      name: MaterialType.Certificates,
      materials: certificateKeys,
      materialHashmap: certificateDatabase,
      basePath: CERTIFICATES_PAGE.path,
      ListComponent: CertificatesList,
    },
    {
      name: MaterialType.Blogs,
      materials: blogKeys,
      materialHashmap: blogDatabase,
      basePath: BLOG_PAGE.path,
      ListComponent: BlogsList,
    },
    {
      name: MaterialType.Modules,
      materials: moduleKeys,
      materialHashmap: moduleDatabase,
      ListComponent: ModuleList,
    },
  ];

  return (
    <div className="flex flex-col space-y-10 align-top relative">
      {sections.map(
        ({ name, materials, basePath, ListComponent, materialHashmap }) => {
          /**
           * Group the materials by the material type.
           * In this case, there is only 1 group.
           */
          const groupedMaterials: MaterialGroupInterface[] =
            groupMaterialsByMaterialType(materialKeys, materialHashmap, name);

          // There is only 1 group
          if (groupedMaterials[0].materialsKeys.length === 0) {
            return null;
          }

          return (
            <div
              key={name}
              className="flex flex-col space-y-10 align-top relative"
            >
              <ListComponent groupedMaterial={groupedMaterials} />
              {basePath && (
                <div className="flex justify-center mt-10">
                  <Link href={basePath}>
                    <Button variant="outline">{`View All ${name}`}</Button>
                  </Link>
                </div>
              )}
            </div>
          );
        }
      )}
    </div>
  );
};

export default MaterialList;
