import MaterialInterface from "@/database/Materials/MaterialInterface";
import blogsDatabaseMap from "../Blogs/BlogsDatabaseMap";
import certificateDatabaseMap from "../Certificates/CertificateDatabaseMap";
import courseDatabaseMap from "../Courses/CourseDatabaseMap";
import projectDatabaseMap from "../Projects/ProjectDatabaseMap";
import rolesDatabase from "../Roles/RoleDatabaseMap";
import moduleDatabaseMap from "../Modules/ModuleDatabaseMap";

/**
 * Hashmap of materials with keys as {@link MaterialKeysEnum} and values as {@link MaterialInterface}.
 * The order of the materials is the order that is used when displaying the materials on the website.
 */
const materialDatabaseMap: Database<MaterialInterface> = {
  ...projectDatabaseMap,
  ...courseDatabaseMap,
  ...rolesDatabase,
  ...moduleDatabaseMap,
  ...certificateDatabaseMap,
  ...blogsDatabaseMap,
};

export const materialKeys: string[] = Object.keys(materialDatabaseMap);

export default materialDatabaseMap;
