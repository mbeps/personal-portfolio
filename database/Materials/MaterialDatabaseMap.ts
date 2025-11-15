import MaterialInterface from "@/database/Materials/MaterialInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import Database from "@/interfaces/Database";
import blogsDatabaseMap from "../Blogs/BlogsDatabaseMap";
import certificateDatabaseMap from "../Certificates/CertificateDatabaseMap";
import courseDatabaseMap from "../Courses/CourseDatabaseMap";
import moduleDatabaseMap from "../Modules/ModuleDatabaseMap";
import projectDatabaseMap from "../Projects/ProjectDatabaseMap";
import rolesDatabase from "../Roles/RoleDatabaseMap";

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

/**
 * Precomputed map of skill usage counts for O(1) lookups.
 * This eliminates the need to loop through all materials every time we check skill associations.
 * Used by: isSkillAssociatedWithMaterial, skillHasMaterial, countMaterialsBySkill
 */
export const skillUsageMap = new Map<SkillDatabaseKeys, number>();

// Populate the skill usage map at module load time
Object.values(materialDatabaseMap).forEach((material) => {
  material.skills.forEach((skill) => {
    skillUsageMap.set(skill, (skillUsageMap.get(skill) || 0) + 1);
  });
});

export default materialDatabaseMap;
