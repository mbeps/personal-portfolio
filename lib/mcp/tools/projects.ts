import type { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { PATHS } from "@/config/paths";
import type ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import projectDatabaseMap from "@/database/projects/project-database-map";
import type ProjectInterface from "@/database/projects/project-interface";
import ProjectCategoriesEnum from "@/enums/project/project-categories-enum";
import ProjectTypeEnum from "@/enums/project/project-type-enum";
import getMarkdownFromFileSystem from "@/lib/file-system/get-markdown-from-file-system";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filter-material-by-archived-status";
import filterMaterialByCategory from "@/lib/material/filter/filter-material-by-category";
import filterMaterialBySkill from "@/lib/material/filter/filter-material-by-skill";
import filterProjectsByType from "@/lib/material/filter/filter-projects-by-type";
import { formatToolResponse } from "@/lib/mcp/helpers";
import searchDatabase from "@/lib/search/search-database";
import resolveSkillKey from "@/lib/skills/resolve-skill-key";

/**
 * Registers the `list_projects` and `get_project` tools onto the MCP server.
 *
 * @param server MCP server instance.
 */
export function registerProjectsTools(server: McpServer): void {
  server.registerTool(
    "list_projects",
    {
      title: "List Projects",
      description:
        "List and filter portfolio projects by category, project type, skill, archived status, or search query.",
      inputSchema: z.object({
        category: z.nativeEnum(ProjectCategoriesEnum).optional(),
        type: z.nativeEnum(ProjectTypeEnum).optional(),
        skill: z.string().optional(),
        archived: z.boolean().optional().default(false),
        search: z.string().optional(),
        limit: z.number().int().positive().optional(),
      }),
    },
    async ({ category, type, skill, archived, search, limit }) => {
      let keys = Object.keys(projectDatabaseMap) as ProjectDatabaseKeys[];

      // Filter archived
      keys = filterMaterialByArchivedStatus<ProjectInterface>(
        archived,
        keys,
        projectDatabaseMap,
      ) as ProjectDatabaseKeys[];

      // Filter by category
      if (category) {
        keys = filterMaterialByCategory<ProjectInterface>(
          category,
          keys,
          projectDatabaseMap,
        ) as ProjectDatabaseKeys[];
      }

      // Filter by project type
      if (type) {
        keys = filterProjectsByType<ProjectInterface>(
          type,
          keys,
          projectDatabaseMap,
        ) as ProjectDatabaseKeys[];
      }

      // Filter by skill
      if (skill) {
        const resolvedSkill = resolveSkillKey(skill);
        if (resolvedSkill) {
          keys = filterMaterialBySkill<ProjectInterface>(
            resolvedSkill,
            keys,
            projectDatabaseMap,
          ) as ProjectDatabaseKeys[];
        } else {
          const lowerSkill = skill.toLowerCase().trim();
          keys = keys.filter((key) => {
            const project = projectDatabaseMap[key];
            return project.skills.some((s) =>
              s.toLowerCase().includes(lowerSkill),
            );
          });
        }
      }

      // Search query filter
      if (search && search.trim() !== "") {
        const searchMatchedKeys = searchDatabase(
          projectDatabaseMap,
          search,
          ["name", "category", "type", "description", "skills"],
          { skills: (item) => item.skills.map((s) => s.toString()) },
        );
        const searchSet = new Set(searchMatchedKeys);
        keys = keys.filter((key) => searchSet.has(key));
      }

      // Apply limit
      if (limit && limit > 0) {
        keys = keys.slice(0, limit);
      }

      const results = keys.map((key) => {
        const project = projectDatabaseMap[key];
        return {
          key,
          name: project.name,
          category: project.category,
          type: project.type,
          description: project.description.trim(),
          skills: project.skills,
          repositoryURL: project.repositoryURL,
          deploymentURL: project.deploymentURL,
          archived: Boolean(project.archived),
        };
      });

      return formatToolResponse({
        total: results.length,
        projects: results,
      });
    },
  );

  server.registerTool(
    "get_project",
    {
      title: "Get Project Details",
      description:
        "Retrieve detailed metadata for a specific project by its key, optionally including markdown features and blog writeup.",
      inputSchema: z.object({
        projectKey: z.string().describe("Unique identifier key of the project"),
        includeWriteup: z
          .boolean()
          .optional()
          .default(false)
          .describe("Include long-form markdown features and blog writeup"),
      }),
    },
    async ({ projectKey, includeWriteup }) => {
      const project = projectDatabaseMap[projectKey as ProjectDatabaseKeys];
      if (!project) {
        return formatToolResponse(
          { error: `Project '${projectKey}' not found.` },
          true,
        );
      }

      const projectDetails: Record<string, unknown> = {
        key: projectKey,
        name: project.name,
        category: project.category,
        type: project.type,
        description: project.description.trim(),
        skills: project.skills,
        repositoryURL: project.repositoryURL,
        deploymentURL: project.deploymentURL,
        archived: Boolean(project.archived),
      };

      if (includeWriteup) {
        const paths = PATHS.PROJECTS(projectKey as ProjectDatabaseKeys);
        const features = getMarkdownFromFileSystem(paths.FEATURES);
        const blog = getMarkdownFromFileSystem(paths.BLOG);
        projectDetails.features = features ?? undefined;
        projectDetails.blog = blog ?? undefined;
      }

      return formatToolResponse(projectDetails);
    },
  );
}
