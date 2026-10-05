import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import blogsDatabaseMap from "@/database/blogs/blogs-database-map";
import certificateDatabaseMap from "@/database/certificates/certificate-database-map";
import courseDatabaseMap from "@/database/courses/course-database-map";
import materialDatabaseMap from "@/database/materials/material-database-map";
import moduleDatabaseMap from "@/database/modules/module-database-map";
import projectDatabaseMap from "@/database/projects/project-database-map";
import rolesDatabase from "@/database/roles/role-database-map";
import { formatToolResponse } from "@/lib/mcp/helpers";
import searchDatabase from "@/lib/search/search-database";

/**
 * Determines the category/type label for a given material key.
 *
 * @param key Key to check across individual database maps.
 * @returns Material type string.
 */
function resolveMaterialType(
  key: string,
):
  | "project"
  | "role"
  | "course"
  | "module"
  | "certificate"
  | "blog"
  | "material" {
  if (key in projectDatabaseMap) return "project";
  if (key in rolesDatabase) return "role";
  if (key in courseDatabaseMap) return "course";
  if (key in moduleDatabaseMap) return "module";
  if (key in certificateDatabaseMap) return "certificate";
  if (key in blogsDatabaseMap) return "blog";
  return "material";
}

/**
 * Registers the `search_portfolio` tool onto the MCP server.
 *
 * @param server MCP server instance.
 */
export function registerSearchTool(server: McpServer): void {
  server.registerTool(
    "search_portfolio",
    {
      title: "Universal Portfolio Search",
      description:
        "Fuzzy search across all portfolio items (projects, experience roles, courses, certificates, and blogs).",
      inputSchema: z.object({
        query: z
          .string()
          .describe(
            "Search query to match against names, categories, and skills",
          ),
        materialType: z
          .enum(["project", "role", "course", "module", "certificate", "blog"])
          .optional()
          .describe(
            "Optional filter to restrict search to a specific material type",
          ),
        limit: z
          .number()
          .int()
          .positive()
          .optional()
          .default(10)
          .describe("Maximum number of results to return"),
      }),
    },
    async ({ query, materialType, limit }) => {
      const matchedKeys = searchDatabase(
        materialDatabaseMap,
        query,
        ["name", "category", "skills"],
        { skills: (item) => item.skills.map((s) => s.toString()) },
      );

      const filteredKeys = materialType
        ? matchedKeys.filter((k) => resolveMaterialType(k) === materialType)
        : matchedKeys;

      const slicedKeys = filteredKeys.slice(0, limit);

      const results = slicedKeys.map((key) => {
        const item = materialDatabaseMap[key];
        const type = resolveMaterialType(key);
        return {
          key,
          type,
          name: item.name,
          category: item.category,
          skills: item.skills,
          archived: Boolean(item.archived),
        };
      });

      return formatToolResponse({
        query,
        total: results.length,
        results,
      });
    },
  );
}
