import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import blogsDatabaseMap from "@/database/blogs/blogs-database-map";
import certificateDatabaseMap from "@/database/certificates/certificate-database-map";
import courseDatabaseMap from "@/database/courses/course-database-map";
import materialDatabaseMap, {
  materialKeys,
  skillUsageMap,
} from "@/database/materials/material-database-map";
import moduleDatabaseMap from "@/database/modules/module-database-map";
import projectDatabaseMap from "@/database/projects/project-database-map";
import rolesDatabase from "@/database/roles/role-database-map";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/skills/skill-database-map";
import SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";
import filterMaterialBySkill from "@/lib/material/filter/filter-material-by-skill";
import { formatToolResponse } from "@/lib/mcp/helpers";
import searchDatabase from "@/lib/search/search-database";
import filterSkillsByCategory from "@/lib/skills/filter/filter-skills-by-category";
import filterSkillsByType from "@/lib/skills/filter/filter-skills-by-type";
import resolveSkillKey from "@/lib/skills/resolve-skill-key";

/**
 * Registers `list_skills` and `get_skill` tools onto the MCP server.
 *
 * @param server MCP server instance.
 */
export function registerSkillsTools(server: McpServer): void {
  server.registerTool(
    "list_skills",
    {
      title: "List Skills",
      description:
        "List and filter technical skills by category, skill type, whether it is a primary skill, or search query.",
      inputSchema: z.object({
        category: z.nativeEnum(SkillCategoriesEnum).optional(),
        type: z.nativeEnum(SkillTypesEnum).optional(),
        isMainSkill: z.boolean().optional(),
        search: z.string().optional(),
        limit: z.number().int().positive().optional(),
      }),
    },
    async ({ category, type, isMainSkill, search, limit }) => {
      let keys: SkillDatabaseKeys[] = [...skillDatabaseKeys];

      if (category) {
        keys = filterSkillsByCategory(keys, skillDatabaseMap, category);
      }

      if (type) {
        keys = filterSkillsByType(keys, skillDatabaseMap, type);
      }

      if (isMainSkill !== undefined) {
        keys = keys.filter(
          (k) => Boolean(skillDatabaseMap[k]?.isMainSkill) === isMainSkill,
        );
      }

      if (search && search.trim() !== "") {
        const searchMatchedKeys = searchDatabase(skillDatabaseMap, search, [
          "name",
          "category",
          "skillType",
        ]);
        const searchSet = new Set(searchMatchedKeys);
        keys = keys.filter((k) => searchSet.has(k));
      }

      if (limit && limit > 0) {
        keys = keys.slice(0, limit);
      }

      const results = keys.map((key) => {
        const skill = skillDatabaseMap[key];
        return {
          key,
          name: skill.name,
          category: skill.category,
          skillType: skill.skillType,
          isMainSkill: Boolean(skill.isMainSkill),
          materialUsageCount: skillUsageMap.get(key) ?? 0,
        };
      });

      return formatToolResponse({
        total: results.length,
        skills: results,
      });
    },
  );

  server.registerTool(
    "get_skill",
    {
      title: "Get Skill Details",
      description:
        "Retrieve metadata for a skill along with all related materials (projects, work roles, courses, modules, certificates, blogs).",
      inputSchema: z.object({
        skillKey: z.string().describe("Unique identifier key for the skill"),
        includeRelatedMaterials: z
          .boolean()
          .optional()
          .default(true)
          .describe(
            "Whether to aggregate all associated projects, roles, courses, certificates, and blogs",
          ),
      }),
    },
    async ({ skillKey, includeRelatedMaterials }) => {
      const canonicalKey =
        resolveSkillKey(skillKey) ?? (skillKey as SkillDatabaseKeys);
      const skill = skillDatabaseMap[canonicalKey];
      if (!skill) {
        return formatToolResponse(
          { error: `Skill '${skillKey}' not found.` },
          true,
        );
      }

      const skillData: Record<string, unknown> = {
        key: canonicalKey,
        name: skill.name,
        category: skill.category,
        skillType: skill.skillType,
        isMainSkill: Boolean(skill.isMainSkill),
        relatedSkills: skill.relatedSkills ?? [],
        materialUsageCount: skillUsageMap.get(canonicalKey) ?? 0,
      };

      if (includeRelatedMaterials) {
        const matchedMaterialKeys = filterMaterialBySkill(
          canonicalKey,
          materialKeys,
          materialDatabaseMap,
        );

        const projects: Array<{ key: string; name: string }> = [];
        const roles: Array<{ key: string; name: string; company: string }> = [];
        const courses: Array<{
          key: string;
          name: string;
          university: string;
        }> = [];
        const modules: Array<{ key: string; name: string }> = [];
        const certificates: Array<{
          key: string;
          name: string;
          issuer: string;
        }> = [];
        const blogs: Array<{ key: string; name: string }> = [];

        for (const matKey of matchedMaterialKeys) {
          if (matKey in projectDatabaseMap) {
            projects.push({
              key: matKey,
              name: projectDatabaseMap[
                matKey as keyof typeof projectDatabaseMap
              ].name,
            });
          } else if (matKey in rolesDatabase) {
            const role = rolesDatabase[matKey as keyof typeof rolesDatabase];
            roles.push({
              key: matKey,
              name: role.name,
              company: role.company,
            });
          } else if (matKey in courseDatabaseMap) {
            const course =
              courseDatabaseMap[matKey as keyof typeof courseDatabaseMap];
            courses.push({
              key: matKey,
              name: course.name,
              university: course.university,
            });
          } else if (matKey in moduleDatabaseMap) {
            modules.push({
              key: matKey,
              name: moduleDatabaseMap[matKey as keyof typeof moduleDatabaseMap]
                .name,
            });
          } else if (matKey in certificateDatabaseMap) {
            const cert =
              certificateDatabaseMap[
                matKey as keyof typeof certificateDatabaseMap
              ];
            certificates.push({
              key: matKey,
              name: cert.name,
              issuer: cert.issuer,
            });
          } else if (matKey in blogsDatabaseMap) {
            blogs.push({
              key: matKey,
              name: blogsDatabaseMap[matKey as keyof typeof blogsDatabaseMap]
                .name,
            });
          }
        }

        skillData.relatedMaterials = {
          total: matchedMaterialKeys.length,
          projects,
          roles,
          courses,
          modules,
          certificates,
          blogs,
        };
      }

      return formatToolResponse(skillData);
    },
  );
}
