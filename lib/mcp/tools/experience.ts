import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { PATHS } from "@/config/paths";
import companyDatabaseMap from "@/database/companies/company-database-map";
import type RoleDatabaseKeys from "@/database/roles/role-database-keys";
import rolesDatabase, {
  roleDatabaseKeys,
} from "@/database/roles/role-database-map";
import type RoleInterface from "@/database/roles/role-interface";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import ExperienceCategoriesEnum from "@/enums/experience/experience-categories-enum";
import ExperienceTypeEnum from "@/enums/experience/experience-type-enum";
import getMarkdownFromFileSystem from "@/lib/file-system/get-markdown-from-file-system";
import filterRolesByType from "@/lib/material/experience/filter-roles-by-type";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filter-material-by-archived-status";
import filterMaterialByCategory from "@/lib/material/filter/filter-material-by-category";
import filterMaterialBySkill from "@/lib/material/filter/filter-material-by-skill";
import { formatToolResponse } from "@/lib/mcp/helpers";
import searchDatabase from "@/lib/search/search-database";

/**
 * Registers `list_experience` and `get_experience_role` tools onto the MCP server.
 *
 * @param server MCP server instance.
 */
export function registerExperienceTools(server: McpServer): void {
  server.registerTool(
    "list_experience",
    {
      title: "List Work & Volunteer Experience",
      description:
        "List and filter work experience, internships, and volunteering roles.",
      inputSchema: z.object({
        type: z.nativeEnum(ExperienceTypeEnum).optional(),
        category: z.nativeEnum(ExperienceCategoriesEnum).optional(),
        skill: z.string().optional(),
        archived: z.boolean().optional().default(false),
        search: z.string().optional(),
        limit: z.number().int().positive().optional(),
      }),
    },
    async ({ type, category, skill, archived, search, limit }) => {
      let keys: string[] = [...roleDatabaseKeys];

      // Filter archived
      keys = filterMaterialByArchivedStatus<RoleInterface>(
        archived,
        keys,
        rolesDatabase,
      );

      // Filter by experience type (work, volunteering)
      if (type) {
        keys = filterRolesByType<RoleInterface>(type, keys, rolesDatabase);
      }

      // Filter by category
      if (category) {
        keys = filterMaterialByCategory<RoleInterface>(
          category,
          keys,
          rolesDatabase,
        );
      }

      // Filter by skill
      if (skill) {
        keys = filterMaterialBySkill<RoleInterface>(
          skill as SkillDatabaseKeys,
          keys,
          rolesDatabase,
        );
      }

      // Search query
      if (search && search.trim() !== "") {
        const searchMatchedKeys = searchDatabase(
          rolesDatabase,
          search,
          ["name", "category", "type", "skills", "company"],
          { skills: (item) => item.skills.map((s) => s.toString()) },
        );
        const searchSet = new Set(searchMatchedKeys);
        keys = keys.filter((k) => searchSet.has(k));
      }

      if (limit && limit > 0) {
        keys = keys.slice(0, limit);
      }

      const results = keys.map((key) => {
        const role = rolesDatabase[key as RoleDatabaseKeys];
        const company = companyDatabaseMap[role.company];
        return {
          key,
          role: role.name,
          company: company?.name ?? role.company,
          location: company?.location,
          type: role.type,
          category: role.category,
          startDate: role.startDate.toString(),
          endDate: role.endDate.toString(),
          timeInRole: role.timeInRole,
          skills: role.skills,
          archived: Boolean(role.archived),
        };
      });

      return formatToolResponse({
        total: results.length,
        experience: results,
      });
    },
  );

  server.registerTool(
    "get_experience_role",
    {
      title: "Get Experience Role Details",
      description:
        "Retrieve comprehensive information for a role, including company details and full responsibilities markdown.",
      inputSchema: z.object({
        roleKey: z.string().describe("Unique identifier key for the role"),
      }),
    },
    async ({ roleKey }) => {
      const role = rolesDatabase[roleKey as RoleDatabaseKeys];
      if (!role) {
        return formatToolResponse(
          { error: `Role '${roleKey}' not found.` },
          true,
        );
      }

      const company = companyDatabaseMap[role.company];
      const responsibilities = getMarkdownFromFileSystem(
        PATHS.ROLES(roleKey as RoleDatabaseKeys).RESPONSIBILITIES,
      );

      const result = {
        key: roleKey,
        role: role.name,
        company: {
          key: role.company,
          name: company?.name ?? role.company,
          location: company?.location,
          website: company?.website,
        },
        type: role.type,
        category: role.category,
        startDate: role.startDate.toString(),
        endDate: role.endDate.toString(),
        timeInRole: role.timeInRole,
        skills: role.skills,
        archived: Boolean(role.archived),
        responsibilities: responsibilities ?? "",
      };

      return formatToolResponse(result);
    },
  );
}
