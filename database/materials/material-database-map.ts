import blogsDatabaseMap from "@/database/blogs/blogs-database-map";
import certificateDatabaseMap from "@/database/certificates/certificate-database-map";
import courseDatabaseMap from "@/database/courses/course-database-map";
import type MaterialInterface from "@/database/materials/material-interface";
import moduleDatabaseMap from "@/database/modules/module-database-map";
import projectDatabaseMap from "@/database/projects/project-database-map";
import rolesDatabase from "@/database/roles/role-database-map";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import validateDatabaseKeys from "@/lib/database/validate-database-keys";
import type Database from "@/types/database/database";

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

// Validate that all material keys only contain alphanumeric characters and dashes
validateDatabaseKeys(materialKeys);

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
