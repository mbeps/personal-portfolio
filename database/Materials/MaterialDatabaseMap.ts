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
 * Source of truth that unifies every material dictionary so shared helpers can treat the portfolio as a single data lake.
 * Load order matters because section lists render in the order defined here, which matches the hand-curated storytelling.
 */
const materialDatabaseMap: Database<MaterialInterface> = {
  ...projectDatabaseMap,
  ...courseDatabaseMap,
  ...rolesDatabase,
  ...moduleDatabaseMap,
  ...certificateDatabaseMap,
  ...blogsDatabaseMap,
};

/**
 * Pre-resolved list of material keys so static routes and command palette builders do not recompute `Object.keys` repeatedly.
 */
export const materialKeys: string[] = Object.keys(materialDatabaseMap);

/**
 * Tracks how often each skill appears across all materials to keep counts stable between server and client environments.
 * Enables `skillHasMaterial`, `isSkillAssociatedWithMaterial`, and `countMaterialsBySkill` to stay synchronous with the UI filters.
 */
export const skillUsageMap = new Map<SkillDatabaseKeys, number>();

// Populate the skill usage map at module load time
Object.values(materialDatabaseMap).forEach((material) => {
  material.skills.forEach((skill) => {
    skillUsageMap.set(skill, (skillUsageMap.get(skill) || 0) + 1);
  });
});

export default materialDatabaseMap;
